// Test: 843. Guess the Word
// Run: node test.js

const { findSecretWord } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n843. Guess the Word\n");

test(findSecretWord("acckzz", ["acckzz","ccbazz","eiowzz","abcczz"], 10), You guessed the secret word correctly., 'Example 1: findSecretWord("acckzz", ["acckzz","ccbazz","eiowzz","abcczz"], 10) → You guessed the secret word correctly.');
test(findSecretWord("hamada", ["hamada","khaled"], 10), You guessed the secret word correctly., 'Example 2: findSecretWord("hamada", ["hamada","khaled"], 10) → You guessed the secret word correctly.');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
