// Test: 930. Binary Subarrays With Sum
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { numSubarraysWithSum } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n930. Binary Subarrays With Sum\n");

test(numSubarraysWithSum([1,0,1,1,0], 1), 6, 'Test 1');
test(numSubarraysWithSum([1,0,1,0,1,0,1], 2), 8, 'Test 2');
test(numSubarraysWithSum([0,0,0,0,0], 0), 15, 'Test 3');
test(numSubarraysWithSum([1,0,1,0,1], 2), 4, 'Test 4');
test(numSubarraysWithSum([0,1,1,0,1,0,1,0,1,0], 4), 6, 'Test 5');
test(numSubarraysWithSum([1,1,1,1,1], 3), 3, 'Test 6');
test(numSubarraysWithSum([1,0,0,0,1], 1), 8, 'Test 7');
test(numSubarraysWithSum([0,1,0,1,0], 1), 8, 'Test 8');
test(numSubarraysWithSum([0,1,1,0,1,1], 2), 7, 'Test 9');
test(numSubarraysWithSum([0,1,1,0,0,1], 2), 7, 'Test 10');
test(numSubarraysWithSum([0,1,0,1,0,1], 2), 6, 'Test 11');
test(numSubarraysWithSum([1,0,0,1,0,1,1,0], 2), 9, 'Test 12');
test(numSubarraysWithSum([1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1], 9), 19, 'Test 13');
test(numSubarraysWithSum([0,0,1,1,0,0,1,1,0,0,1,1], 2), 23, 'Test 14');
test(numSubarraysWithSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), 528, 'Test 15');
test(numSubarraysWithSum([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 6), 53, 'Test 16');
test(numSubarraysWithSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), 595, 'Test 17');
test(numSubarraysWithSum([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 8), 27, 'Test 18');
test(numSubarraysWithSum([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 3), 52, 'Test 19');
test(numSubarraysWithSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15), 20, 'Test 20');
test(numSubarraysWithSum([1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1], 6), 26, 'Test 21');
test(numSubarraysWithSum([1,0,0,1,1,0,0,1,0,1,1,0,0,1], 3), 21, 'Test 22');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 12), 6, 'Test 23');
test(numSubarraysWithSum([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0], 3), 60, 'Test 24');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 5), 22, 'Test 25');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 3), 22, 'Test 26');
test(numSubarraysWithSum([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 5), 34, 'Test 27');
test(numSubarraysWithSum([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0], 10), 12, 'Test 28');
test(numSubarraysWithSum([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 4), 68, 'Test 29');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 8), 26, 'Test 30');
test(numSubarraysWithSum([1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1], 4), 19, 'Test 31');
test(numSubarraysWithSum([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 1), 62, 'Test 32');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 6), 20, 'Test 33');
test(numSubarraysWithSum([1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1], 3), 29, 'Test 34');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 6), 30, 'Test 35');
test(numSubarraysWithSum([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 4), 33, 'Test 36');
test(numSubarraysWithSum([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0], 5), 45, 'Test 37');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 5), 12, 'Test 38');
test(numSubarraysWithSum([1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0], 5), 20, 'Test 39');
test(numSubarraysWithSum([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1], 25), 30, 'Test 40');
test(numSubarraysWithSum([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 6), 43, 'Test 41');
test(numSubarraysWithSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), 210, 'Test 42');
test(numSubarraysWithSum([0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0], 9), 28, 'Test 43');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 6), 50, 'Test 44');
test(numSubarraysWithSum([0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 2), 56, 'Test 45');
test(numSubarraysWithSum([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 10), 20, 'Test 46');
test(numSubarraysWithSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15), 18, 'Test 47');
test(numSubarraysWithSum([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 7), 14, 'Test 48');
test(numSubarraysWithSum([1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1], 8), 35, 'Test 49');
test(numSubarraysWithSum([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 20), 6, 'Test 50');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 30), 12, 'Test 51');
test(numSubarraysWithSum([0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1], 8), 25, 'Test 52');
test(numSubarraysWithSum([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 5), 24, 'Test 53');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 10), 2, 'Test 54');
test(numSubarraysWithSum([1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 3), 89, 'Test 55');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 16), 8, 'Test 56');
test(numSubarraysWithSum([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1], 6), 24, 'Test 57');
test(numSubarraysWithSum([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 1), 66, 'Test 58');
test(numSubarraysWithSum([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 6), 27, 'Test 59');
test(numSubarraysWithSum([1,1,1,1,1,1,1,1,1,1], 5), 6, 'Test 60');
test(numSubarraysWithSum([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 4), 63, 'Test 61');
test(numSubarraysWithSum([0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0], 4), 33, 'Test 62');
test(numSubarraysWithSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 16, 'Test 63');
test(numSubarraysWithSum([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 20), 33, 'Test 64');
test(numSubarraysWithSum([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0], 3), 36, 'Test 65');
test(numSubarraysWithSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15), 12, 'Test 66');
test(numSubarraysWithSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 11, 'Test 67');
test(numSubarraysWithSum([1,1,0,0,0,1,1,0,0,1], 3), 8, 'Test 68');
test(numSubarraysWithSum([0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1], 5), 48, 'Test 69');
test(numSubarraysWithSum([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0], 3), 88, 'Test 70');
test(numSubarraysWithSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), 1275, 'Test 71');
test(numSubarraysWithSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 25), 1, 'Test 72');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
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
