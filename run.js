#!/usr/bin/env node
/**
 * Run tests and auto-mark DONE if all pass.
 *
 * Usage:
 *   node run.js                  → run test.js in CWD
 *   node run.js 0001             → find & run test for problem 0001
 *   node run.js two-sum          → find & run test by name
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const arg = process.argv[2];

// Find problem directory
function findProblem(query) {
  if (!query) {
    if (fs.existsSync(path.join(process.cwd(), "test.js"))) return process.cwd();
    return null;
  }
  // Recursive search
  const search = (dir) => {
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (!fs.statSync(full).isDirectory()) continue;
      if (entry.includes(query) && fs.existsSync(path.join(full, "test.js"))) return full;
      const found = search(full);
      if (found) return found;
    }
    return null;
  };
  return search(ROOT);
}

const dir = findProblem(arg);
if (!dir) {
  console.log("❌ Problem not found. Usage: node run.js [problem-number-or-name]");
  process.exit(1);
}

const folder = path.basename(dir);
console.log(`📂 ${path.relative(ROOT, dir)}\n`);

// Run test.js
try {
  execSync(`node test.js`, { cwd: dir, stdio: "inherit" });

  // If we get here, exit code was 0 → all tests passed
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newName = `DONE-${folder}`;
    const newDir = path.join(parent, newName);
    fs.renameSync(dir, newDir);

    // Add marker in README
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let content = fs.readFileSync(readme, "utf-8");
      if (!content.includes("<!-- SOLVED -->")) {
        content = content.replace(/^(# .+)$/m, `$1 ✅\n<!-- SOLVED -->`);
        fs.writeFileSync(readme, content);
      }
    }
    console.log(`\n✅ Auto-marked DONE → ${newName}`);
  }
} catch (e) {
  // test.js exited with non-zero → some tests failed
  console.log("\n⬜ Not all tests passed — keep going!");
  process.exit(1);
}
