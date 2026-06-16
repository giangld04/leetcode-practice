// Test: 969. Pancake Sorting
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { pancakeSort } = require("./solution");

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

console.log("\n969. Pancake Sorting\n");

test(pancakeSort([2,1,3,4,5]), [2], 'Test 1');
test(pancakeSort([4,3,2,1]), [4], 'Test 2');
test(pancakeSort([5,4,3,2,1]), [5], 'Test 3');
test(pancakeSort([3,1,2]), [3, 2], 'Test 4');
test(pancakeSort([1,5,3,4,2]), [2, 5, 2, 4, 2, 3, 2], 'Test 5');
test(pancakeSort([2,3,4,1,5]), [3, 4], 'Test 6');
test(pancakeSort([1,2,3]), [], 'Test 7');
test(pancakeSort([1,5,4,3,2]), [2, 5, 3, 4], 'Test 8');
test(pancakeSort([1]), [], 'Test 9');
test(pancakeSort([5,4,3,2,1,6,7,8,9,10]), [5], 'Test 10');
test(pancakeSort([10,9,8,7,6,5,4,3,2,1]), [10], 'Test 11');
test(pancakeSort([2,1]), [2], 'Test 12');
test(pancakeSort([3,2,4,1]), [3, 4, 2, 3, 2], 'Test 13');
test(pancakeSort([1,3,2]), [2, 3, 2], 'Test 14');
test(pancakeSort([6,3,5,1,2,4]), [6, 4, 5, 2, 4], 'Test 15');
test(pancakeSort([2,5,1,3,4]), [2, 5, 4, 2], 'Test 16');
test(pancakeSort([3,1,4,1,5,9,2,6,5,3,5]), [11, 10, 5, 9, 8, 7, 2, 6, 2, 4, 3, 2], 'Test 17');
test(pancakeSort([3,1,4,2,6,5]), [5, 6, 5, 2, 4, 3, 2], 'Test 18');
test(pancakeSort([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), [15], 'Test 19');
test(pancakeSort([7,1,2,6,4,5,3]), [7, 4, 6, 4, 5, 4, 3], 'Test 20');
test(pancakeSort([1,10,3,5,7,9,2,4,8,6]), [2, 10, 5, 9, 6, 8, 6, 7, 6, 5, 2, 4, 3, 2], 'Test 21');
test(pancakeSort([11,10,9,8,7,6,5,4,3,2,1]), [11], 'Test 22');
test(pancakeSort([2, 4, 1, 3]), [2, 4, 3, 2], 'Test 23');
test(pancakeSort([6,5,4,3,2,1,7,8,9,10]), [6], 'Test 24');
test(pancakeSort([7,1,8,2,9,3,10,4,5,6]), [7, 10, 8, 9, 7, 8, 6, 7, 4, 6, 2, 5, 3], 'Test 25');
test(pancakeSort([9,8,7,6,5,4,3,2,1]), [9], 'Test 26');
test(pancakeSort([8,5,10,9,3,7,6,4,2,1]), [3, 10, 7, 9, 2, 8, 2, 7, 5, 6, 2, 5, 4, 3, 2], 'Test 27');
test(pancakeSort([10,1,9,2,8,3,7,4,6,5]), [10, 8, 9, 7, 8, 6, 7, 5, 6, 4], 'Test 28');
test(pancakeSort([9,7,5,3,1,2,4,6,8]), [9, 8, 7, 6, 5, 4, 3, 2], 'Test 29');
test(pancakeSort([6,5,3,1,2,4]), [6, 4, 3, 2], 'Test 30');
test(pancakeSort([2,1,4,3,6,5]), [5, 6, 5, 2, 4, 2], 'Test 31');
test(pancakeSort([3,1,4,2]), [3, 4, 2, 3], 'Test 32');
test(pancakeSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [10, 9], 'Test 33');
test(pancakeSort([8,6,4,2,1,3,5,7]), [8, 7, 6, 5, 4, 3, 2], 'Test 34');
test(pancakeSort([7,6,5,4,3,2,1,8]), [7], 'Test 35');
test(pancakeSort([8,6,7,5,3,1,4,9,2,10]), [8, 9, 2, 8, 5, 7, 2, 6, 5, 2, 4, 3, 2], 'Test 36');
test(pancakeSort([1,3,5,7,9,10,8,6,4,2]), [6, 10, 4, 8, 7, 6, 5, 4, 3, 2], 'Test 37');
test(pancakeSort([7,10,4,8,5,9,1,6,2,3]), [2, 10, 5, 9, 3, 8, 6, 7, 3, 6, 5, 2, 4, 3], 'Test 38');
test(pancakeSort([5, 1, 4, 2, 3]), [5, 3, 4, 2, 3, 2], 'Test 39');
test(pancakeSort([5,3,1,4,2]), [5, 2, 4, 3, 2], 'Test 40');
test(pancakeSort([10,2,1,3,5,4,7,6,9,8]), [10, 2, 9, 6, 7, 6, 2, 5, 2], 'Test 41');
test(pancakeSort([8,5,9,1,7,3,4,2,6]), [3, 9, 7, 8, 6, 7, 3, 6, 2, 4], 'Test 42');
test(pancakeSort([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), [20], 'Test 43');
test(pancakeSort([5,4,2,3,1]), [5, 2, 3, 2], 'Test 44');
test(pancakeSort([7,1,6,2,5,3,4]), [7, 5, 6, 4, 5, 3, 4, 3], 'Test 45');
test(pancakeSort([1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), [8, 9, 8, 2, 7, 4, 5, 4, 2, 3], 'Test 46');
test(pancakeSort([4,6,3,5,2,1]), [2, 6, 3, 5, 4, 2], 'Test 47');
test(pancakeSort([6,4,2,1,3,5]), [6, 5, 4, 3, 2], 'Test 48');
test(pancakeSort([2,7,4,1,8,3,6,5]), [5, 8, 5, 7, 4, 6, 2, 3], 'Test 49');
test(pancakeSort([3,6,1,7,5,4,2]), [4, 7, 5, 6, 4, 5, 3, 2], 'Test 50');
test(pancakeSort([6,1,5,2,4,3]), [6, 4, 5, 3, 4, 2], 'Test 51');
test(pancakeSort([1,4,3,2,5,6,7,8,9,10]), [2, 4, 2, 3], 'Test 52');
test(pancakeSort([5,3,8,6,2,7,4,1]), [3, 8, 3, 7, 3, 6, 4, 3], 'Test 53');
test(pancakeSort([1,3,2,5,4]), [4, 5, 4, 2, 3], 'Test 54');
test(pancakeSort([6,5,4,3,2,1,7,8,9]), [6], 'Test 55');
test(pancakeSort([1,3,2,4,6,5]), [5, 6, 5, 4, 2, 3, 2], 'Test 56');
test(pancakeSort([7,1,3,5,2,6,4]), [7, 2, 6, 3, 5, 4, 3, 2], 'Test 57');
test(pancakeSort([6, 3, 1, 5, 2, 4]), [6, 3, 5, 3, 4, 2, 3], 'Test 58');
test(pancakeSort([10,2,8,6,4,12,14,16,18,20,1,3,5,7,9,11,13,15,17,19]), [10, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 5, 10, 9, 2, 8, 7, 2, 6, 5, 2, 4, 3, 2], 'Test 59');
test(pancakeSort([8,1,7,3,6,2,5,4]), [8, 6, 7, 5, 6, 4, 5, 2, 3], 'Test 60');
test(pancakeSort([3,1,2,4,5]), [3, 2], 'Test 61');
test(pancakeSort([7,4,6,2,5,1,3]), [7, 5, 6, 4, 5, 2, 4, 2, 3, 2], 'Test 62');
test(pancakeSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), [9], 'Test 63');
test(pancakeSort([7,1,5,3,6,4,2]), [7, 3, 6, 2, 5, 4, 2, 3, 2], 'Test 64');
test(pancakeSort([6,3,2,5,4,1]), [6, 3, 5, 3], 'Test 65');
test(pancakeSort([5,2,3,1,4]), [5, 4, 2, 3], 'Test 66');
test(pancakeSort([8,6,7,5,3,0,9,1,4,2]), [10, 4, 9, 8, 6, 5, 4, 3, 2], 'Test 67');
test(pancakeSort([2,6,4,3,5,1,7]), [2, 6, 2, 5, 2, 4, 2, 3, 2], 'Test 68');
test(pancakeSort([2,3,1,4,6,5]), [5, 6, 5, 4, 2, 3], 'Test 69');
test(pancakeSort([3, 5, 4, 1, 2]), [2, 5, 3, 4, 3], 'Test 70');
test(pancakeSort([8,1,2,3,4,5,6,7]), [8, 7], 'Test 71');
test(pancakeSort([5,2,3,1,4,6,7,8,9,10]), [5, 4, 2, 3], 'Test 72');
test(pancakeSort([1,3,2,5,4,7,6,9,8,10]), [8, 9, 8, 2, 7, 4, 5, 4, 2, 3], 'Test 73');
test(pancakeSort([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [15], 'Test 74');
test(pancakeSort([2,3,1,5,4]), [4, 5, 4, 2, 3, 2], 'Test 75');
test(pancakeSort([9,8,7,6,5,4,3,2,1,10]), [9], 'Test 76');
test(pancakeSort([9,8,7,6,5,4,3,2,1,10,11,12]), [9], 'Test 77');
test(pancakeSort([3,5,4,1,2]), [2, 5, 3, 4, 3], 'Test 78');
test(pancakeSort([7,5,2,4,6,1,3]), [7, 3, 6, 5, 3, 4, 2], 'Test 79');
test(pancakeSort([2,4,1,3,5]), [2, 4, 3, 2], 'Test 80');
test(pancakeSort([7, 6, 5, 4, 3, 2, 1, 8]), [7], 'Test 81');
test(pancakeSort([5,1,3,2,4]), [5, 4, 2, 3, 2], 'Test 82');
test(pancakeSort([12,11,10,9,8,7,6,5,4,3,2,1]), [12], 'Test 83');
test(pancakeSort([9,1,8,2,7,3,6,4,5]), [9, 7, 8, 6, 7, 5, 6, 4, 5, 4], 'Test 84');
test(pancakeSort([5,3,6,1,2,4]), [3, 6, 4, 5, 2, 4], 'Test 85');
test(pancakeSort([4,1,5,2,3,6]), [3, 5, 3, 4, 2, 3, 2], 'Test 86');
test(pancakeSort([10,1,2,3,4,5,6,7,8,9]), [10, 9], 'Test 87');
test(pancakeSort([3,6,1,8,5,2,7,4]), [4, 8, 2, 7, 2, 6, 3, 5, 3, 4, 2], 'Test 88');
test(pancakeSort([1,3,5,2,4,6]), [3, 5, 4, 3, 2], 'Test 89');
test(pancakeSort([2,7,4,3,5,1,6,8,9,10]), [2, 7, 6, 4, 5, 3, 4, 3, 2], 'Test 90');
test(pancakeSort([8, 1, 3, 7, 5, 2, 6, 4]), [8, 5, 7, 4, 6, 5, 4, 2], 'Test 91');
test(pancakeSort([11,2,9,3,8,4,7,5,10,6,1]), [11, 3, 10, 2, 9, 6, 8, 6, 7, 4, 6, 5, 3, 4, 2, 3, 2], 'Test 92');
test(pancakeSort([6,3,5,4,2,1]), [6, 4, 5, 3, 2], 'Test 93');
test(pancakeSort([10,1,3,4,5,6,7,8,9,2]), [10, 2, 9, 7, 8, 2], 'Test 94');
test(pancakeSort([7,6,5,4,3,2,1]), [7], 'Test 95');
test(pancakeSort([9,7,5,3,1,8,6,4,2]), [9, 4, 8, 7, 6, 5, 4, 3, 2], 'Test 96');
test(pancakeSort([1,3,2,4,5]), [2, 3, 2], 'Test 97');
test(pancakeSort([2,9,5,1,8,3,7,4,6]), [2, 9, 5, 8, 6, 7, 5, 6, 4, 5, 2, 4, 2, 3], 'Test 98');
test(pancakeSort([5,1,9,7,3,10,2,4,8,6]), [6, 10, 7, 9, 4, 8, 6, 7, 6, 4, 5, 3, 4, 2], 'Test 99');

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
