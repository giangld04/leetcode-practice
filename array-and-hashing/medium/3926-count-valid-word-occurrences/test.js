// Test: 3926. Count Valid Word Occurrences
// Run: node test.js

const { countWordOccurrences } = require("./solution");

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

console.log("\n3926. Count Valid Word Occurrences\n");

test(countWordOccurrences(["hello wor","ld hello"], ["hello","world","wor"]), [2,1,0], 'Example 1: countWordOccurrences(["hello wor","ld hello"], ["hello","world","wor"]) → [2,1,0]');
test(countWordOccurrences(["a-b a--b ","a-","b"], ["a-b","a","b"]), [2,1,1], 'Example 2: countWordOccurrences(["a-b a--b ","a-","b"], ["a-b","a","b"]) → [2,1,1]');
test(countWordOccurrences(["-cat dog- mouse"], ["cat","dog","mouse","cat-dog"]), [1,1,1,0], 'Example 3: countWordOccurrences(["-cat dog- mouse"], ["cat","dog","mouse","cat-dog"]) → [1,1,1,0]');

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
