// Test: 138. Copy List with Random Pointer
// Run: node test.js

const { copyRandomList } = require("./solution");

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

console.log("\n138. Copy List with Random Pointer\n");

test(copyRandomList([[7,null],[13,0],[11,4],[10,2],[1,0]]), [[7,null],[13,0],[11,4],[10,2],[1,0]], 'Example 1: copyRandomList([[7,null],[13,0],[11,4],[10,2],[1,0]]) → [[7,null],[13,0],[11,4],[10,2],[1,0]]');
test(copyRandomList([[1,1],[2,1]]), [[1,1],[2,1]], 'Example 2: copyRandomList([[1,1],[2,1]]) → [[1,1],[2,1]]');
test(copyRandomList([[3,null],[3,0],[3,null]]), [[3,null],[3,0],[3,null]], 'Example 3: copyRandomList([[3,null],[3,0],[3,null]]) → [[3,null],[3,0],[3,null]]');

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
