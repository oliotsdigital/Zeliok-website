const { compile } = require("@tailwindcss/node");
const { Scanner } = require("@tailwindcss/oxide");
const fs = require("fs");
const path = require("path");

async function buildCss() {
  const rootDir = path.resolve(__dirname, "..");
  const srcDir = path.join(rootDir, "src");

  console.log("Scanning candidate classes in src/**/*.{ts,tsx}...");
  const scanner = new Scanner({
    sources: [{ base: srcDir, pattern: "**/*.{ts,tsx}", negated: false }]
  });
  const candidates = scanner.scan();
  console.log(`Discovered ${candidates.length} candidate classes.`);

  console.log("Compiling Tailwind CSS with @tailwindcss/node...");
  const compiler = await compile('@import "tailwindcss";', {
    base: rootDir,
    onDependency: () => {}
  });

  const compiledTailwind = compiler.build(candidates);

  const customStyles = `
/* Obsidian & Orange Dark Ember Design System */
:root {
  --background: #070709;
  --foreground: #f4f4f5;
  --apple-font: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --ember-orange: #ff7a00;
  --ember-glow: rgba(255, 122, 0, 0.35);
}

html {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--apple-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color-scheme: dark;
}

body {
  background-color: var(--background);
  background-image: 
    radial-gradient(ellipse 100% 60% at 50% -15%, rgba(255, 120, 0, 0.22) 0%, rgba(255, 80, 0, 0.08) 50%, transparent 80%),
    radial-gradient(circle 900px at 95% 30%, rgba(255, 110, 0, 0.12) 0%, transparent 65%),
    radial-gradient(circle 800px at 5% 65%, rgba(255, 90, 0, 0.10) 0%, transparent 65%),
    radial-gradient(ellipse 90% 45% at 50% 105%, rgba(255, 120, 0, 0.15) 0%, transparent 75%);
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: var(--foreground);
  font-family: var(--apple-font);
  overflow-x: hidden;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Atmospheric Glow Utilities */
.ember-glow {
  box-shadow: 0 0 35px -5px rgba(249, 115, 22, 0.35);
}

.ember-glow-lg {
  box-shadow: 0 0 60px -10px rgba(249, 115, 22, 0.45);
}

.ember-text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #ffedd5 45%, #fb923c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ember-accent-gradient {
  background: linear-gradient(135deg, #ff6b00 0%, #ff9e2c 50%, #ea580c 100%);
}

@keyframes pulse-subtle {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
}

@keyframes ember-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
}

.animate-pulse-subtle {
  animation: pulse-subtle 4s infinite ease-in-out;
}

.animate-ember-float {
  animation: ember-float 6s infinite ease-in-out;
}
`;

  const finalCss = compiledTailwind + "\n" + customStyles;
  const targetFile = path.join(srcDir, "app", "globals.css");
  fs.writeFileSync(targetFile, finalCss, "utf8");
  console.log(`Generated ${targetFile} (${finalCss.length} bytes).`);
}

buildCss().catch((err) => {
  console.error(err);
  process.exit(1);
});
