// Test: 2605. Form Smallest Number From Two Digit Arrays
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { minNumber } = require("./solution");

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

console.log("\n2605. Form Smallest Number From Two Digit Arrays\n");

test(minNumber([1,2,3], [3,4,5]), 3, 'Test 1');
test(minNumber([1,2], [3,4]), 13, 'Test 2');
test(minNumber([1,9], [2,8]), 12, 'Test 3');
test(minNumber([1,2,3,4,5], [6,7,8,9]), 16, 'Test 4');
test(minNumber([9,8,7], [6,5,4]), 47, 'Test 5');
test(minNumber([1], [2]), 12, 'Test 6');
test(minNumber([2], [3]), 23, 'Test 7');
test(minNumber([7,8,9], [9,8,7]), 7, 'Test 8');
test(minNumber([9,8], [7,6]), 68, 'Test 9');
test(minNumber([3,5,2,6], [3,1,7]), 3, 'Test 10');
test(minNumber([5], [5]), 5, 'Test 11');
test(minNumber([7,3], [3,7]), 3, 'Test 12');
test(minNumber([1], [9]), 19, 'Test 13');
test(minNumber([9], [1]), 19, 'Test 14');
test(minNumber([2,4,6], [1,3,5]), 12, 'Test 15');
test(minNumber([4,1,3], [5,7]), 15, 'Test 16');
test(minNumber([1,2,3], [4,5,6]), 14, 'Test 17');
test(minNumber([1, 4, 7], [2, 5, 8, 9]), 12, 'Test 18');
test(minNumber([9,7,5,3,1], [2,4,6,8]), 12, 'Test 19');
test(minNumber([2, 4, 6, 8], [3, 5, 7, 9, 1]), 12, 'Test 20');
test(minNumber([8, 9], [8, 9, 1, 2]), 8, 'Test 21');
test(minNumber([2,3,5], [2,3,4]), 2, 'Test 22');
test(minNumber([7, 9, 1], [2, 4, 6]), 12, 'Test 23');
test(minNumber([7,8,9], [2,4,6]), 27, 'Test 24');
test(minNumber([1,4,7], [2,5,8]), 12, 'Test 25');
test(minNumber([3, 1, 4], [1, 5, 9]), 1, 'Test 26');
test(minNumber([9,8,7,6,5,4,3,2,1], [2,4,6,8]), 2, 'Test 27');
test(minNumber([5, 7, 9], [5, 3, 8, 2]), 5, 'Test 28');
test(minNumber([2, 3, 6, 9], [1, 4, 7]), 12, 'Test 29');
test(minNumber([8, 2, 4, 6], [7, 3, 9, 1]), 12, 'Test 30');
test(minNumber([3, 4, 5], [3, 4, 5]), 3, 'Test 31');
test(minNumber([1], [1]), 1, 'Test 32');
test(minNumber([5,9], [5,3]), 5, 'Test 33');
test(minNumber([8, 2, 4], [5, 6, 7, 9]), 25, 'Test 34');
test(minNumber([2, 4, 6, 8], [1, 3, 5, 7]), 12, 'Test 35');
test(minNumber([9, 8, 7, 6, 5], [4, 3, 2, 1]), 15, 'Test 36');
test(minNumber([7, 3, 8], [9, 4, 1]), 13, 'Test 37');
test(minNumber([1, 4, 7], [2, 5, 8]), 12, 'Test 38');
test(minNumber([9, 7, 5], [3, 1]), 15, 'Test 39');
test(minNumber([9], [1, 2, 3, 4, 5, 6, 7, 8]), 19, 'Test 40');
test(minNumber([5, 6, 1], [6, 7, 2]), 6, 'Test 41');
test(minNumber([4, 5, 6], [6, 7, 8]), 6, 'Test 42');
test(minNumber([1, 5, 9], [2, 6, 8]), 12, 'Test 43');
test(minNumber([3, 6, 9], [3, 5, 8]), 3, 'Test 44');
test(minNumber([2, 5, 9], [5, 8, 3]), 5, 'Test 45');
test(minNumber([9, 8, 7, 6], [5, 4, 3, 2, 1]), 16, 'Test 46');
test(minNumber([8, 6, 4, 2, 0], [7, 5, 3, 1, 9]), 1, 'Test 47');
test(minNumber([5,3,7], [8,5,3]), 3, 'Test 48');
test(minNumber([6, 3, 1], [7, 5, 9, 2, 4]), 12, 'Test 49');
test(minNumber([4, 5], [4, 5, 6]), 4, 'Test 50');
test(minNumber([1,2], [3,4,5,6,7,8,9]), 13, 'Test 51');
test(minNumber([3, 7, 1, 5], [1, 9, 6, 8]), 1, 'Test 52');
test(minNumber([1], [9, 8, 7, 6, 5, 4, 3, 2]), 12, 'Test 53');
test(minNumber([7, 8, 9], [1, 2, 3]), 17, 'Test 54');
test(minNumber([3, 5, 7], [5, 7, 9]), 5, 'Test 55');
test(minNumber([3, 6, 9], [3, 6, 9]), 3, 'Test 56');
test(minNumber([7, 2, 9], [3, 2, 8]), 2, 'Test 57');
test(minNumber([8,6,2], [4,2,9]), 2, 'Test 58');
test(minNumber([2, 4, 6, 8], [1, 3, 5, 7, 9]), 12, 'Test 59');
test(minNumber([3], [9,8,7,6,5,4,2,1]), 13, 'Test 60');
test(minNumber([9, 7, 5], [8, 6, 4]), 45, 'Test 61');
test(minNumber([1, 6], [5, 6]), 6, 'Test 62');
test(minNumber([1,5,9], [1,5,9]), 1, 'Test 63');
test(minNumber([9, 8, 7], [6, 5, 4]), 47, 'Test 64');
test(minNumber([5, 3, 8, 1], [4, 7, 6, 2, 9]), 12, 'Test 65');
test(minNumber([2, 3, 5, 7], [1, 4, 6, 8, 9]), 12, 'Test 66');
test(minNumber([5], [5, 4, 3, 2, 1]), 5, 'Test 67');
test(minNumber([9,8,7,6,5,4,3,2], [1]), 12, 'Test 68');
test(minNumber([1,3,5,7,9], [2,4,6,8]), 12, 'Test 69');
test(minNumber([1, 3, 7, 9], [2, 4, 6, 8]), 12, 'Test 70');
test(minNumber([1, 3, 5, 7, 9], [2, 4, 6, 8, 0]), 1, 'Test 71');
test(minNumber([3, 7, 9], [3, 4, 5]), 3, 'Test 72');
test(minNumber([5, 3, 8], [8, 2, 7]), 8, 'Test 73');
test(minNumber([3, 6, 8], [2, 5, 7]), 23, 'Test 74');
test(minNumber([1,2,3,4,5,6,7,8,9], [9]), 9, 'Test 75');
test(minNumber([1, 3, 5, 7], [2, 4, 6, 8]), 12, 'Test 76');
test(minNumber([8,9], [1,2,3,4,5]), 18, 'Test 77');
test(minNumber([5, 9], [5, 7]), 5, 'Test 78');
test(minNumber([9, 7, 5, 3], [8, 6, 4, 2, 1]), 13, 'Test 79');
test(minNumber([1,2], [2,3]), 2, 'Test 80');
test(minNumber([1, 3, 5, 7], [9, 8, 6, 4, 2, 0]), 1, 'Test 81');
test(minNumber([1, 2, 3, 4], [3, 4, 5, 6, 7]), 3, 'Test 82');
test(minNumber([4], [4]), 4, 'Test 83');
test(minNumber([2, 4, 6, 8], [4]), 4, 'Test 84');
test(minNumber([7, 8, 9], [1, 2, 3, 4, 5, 6]), 17, 'Test 85');
test(minNumber([1,2,3,4,5], [5,6,7,8,9]), 5, 'Test 86');
test(minNumber([1, 3, 5, 7, 9], [2, 4, 6, 8]), 12, 'Test 87');
test(minNumber([1, 2, 3], [3, 4, 5]), 3, 'Test 88');
test(minNumber([1, 2, 3], [3, 4, 5, 6, 7]), 3, 'Test 89');
test(minNumber([1], [9,8,7,6,5,4,3,2]), 12, 'Test 90');
test(minNumber([5, 6, 7], [1, 2, 3, 4]), 15, 'Test 91');
test(minNumber([4, 8], [5, 7, 9]), 45, 'Test 92');
test(minNumber([7,5,3,1], [8,6,4,2]), 12, 'Test 93');
test(minNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1]), 1, 'Test 94');
test(minNumber([2, 8, 6], [7, 4, 1]), 12, 'Test 95');
test(minNumber([1, 2, 3, 4], [4, 5, 6, 7]), 4, 'Test 96');
test(minNumber([3, 6, 9], [3, 5, 7]), 3, 'Test 97');

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
