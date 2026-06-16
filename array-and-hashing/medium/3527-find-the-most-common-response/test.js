// Test: 3527. Find the Most Common Response
// Run: node test.js

const { findCommonResponse } = require("./solution");

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

console.log("\n3527. Find the Most Common Response\n");

test(findCommonResponse([["good","ok","good","ok"],["ok","bad","good","ok","ok"],["good"],["bad"]]), "good", 'Example 1: findCommonResponse([["good","ok","good","ok"],["ok","bad","good","ok","ok"],["good"],["bad"]]) → "good"');
test(findCommonResponse([["good","ok","good"],["ok","bad"],["bad","notsure"],["great","good"]]), "bad", 'Example 2: findCommonResponse([["good","ok","good"],["ok","bad"],["bad","notsure"],["great","good"]]) → "bad"');

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
