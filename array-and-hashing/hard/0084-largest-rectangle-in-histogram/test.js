// Test: 84. Largest Rectangle In Histogram
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { largestRectangleArea } = require("./solution");

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

console.log("\n84. Largest Rectangle In Histogram\n");

test(largestRectangleArea([1]), 1, 'Test 1');
test(largestRectangleArea([1,0,1,0,1]), 1, 'Test 2');
test(largestRectangleArea([10000, 10000, 10000, 10000, 10000]), 50000, 'Test 3');
test(largestRectangleArea([0]), 0, 'Test 4');
test(largestRectangleArea([1,2,3,4,5]), 9, 'Test 5');
test(largestRectangleArea([0,1,0,1,0]), 1, 'Test 6');
test(largestRectangleArea([2,1,2]), 3, 'Test 7');
test(largestRectangleArea([4,2,0,3,2,5,6,0,0,1]), 10, 'Test 8');
test(largestRectangleArea([3,6,5,7,4,8,1,0]), 20, 'Test 9');
test(largestRectangleArea([3]), 3, 'Test 10');
test(largestRectangleArea([2,4]), 4, 'Test 11');
test(largestRectangleArea([10000,10000,10000,10000]), 40000, 'Test 12');
test(largestRectangleArea([3,6,5,7,4,8,1,0,9]), 20, 'Test 13');
test(largestRectangleArea([0,0,0,0,0]), 0, 'Test 14');
test(largestRectangleArea([0,9,0,8,0,7,0,6,0,5,0,4,0,3,0,2,0,1]), 9, 'Test 15');
test(largestRectangleArea([2,1,5,6,2,3]), 10, 'Test 16');
test(largestRectangleArea([3,3,3,3,3,3,3,3,3]), 27, 'Test 17');
test(largestRectangleArea([1,1,1,1,1]), 5, 'Test 18');
test(largestRectangleArea([5,4,3,2,1]), 9, 'Test 19');
test(largestRectangleArea([3,1,3,1,3]), 5, 'Test 20');
test(largestRectangleArea([10,9,8,7,6,5,4,3,2,1]), 30, 'Test 21');
test(largestRectangleArea([1,1,1,1,2,2,2,2,3,3,3,3]), 16, 'Test 22');
test(largestRectangleArea([10, 15, 10, 20, 25, 30, 20, 15, 10]), 90, 'Test 23');
test(largestRectangleArea([5,4,3,2,1,2,3,4,5]), 9, 'Test 24');
test(largestRectangleArea([1,2,3,2,1,4,3,2,1,5,4,3,2,1]), 14, 'Test 25');
test(largestRectangleArea([1,2,3,2,1,1,2,3,2,1,1,2,3,2,1]), 15, 'Test 26');
test(largestRectangleArea([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 60, 'Test 27');
test(largestRectangleArea([3,6,5,7,4,8,1,0,2]), 20, 'Test 28');
test(largestRectangleArea([5,4,3,2,1,0,1,2,3,4,5]), 9, 'Test 29');
test(largestRectangleArea([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 30, 'Test 30');
test(largestRectangleArea([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 30, 'Test 31');
test(largestRectangleArea([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 25, 'Test 32');
test(largestRectangleArea([1,2,3,4,5,6,7,8,9,10,1]), 30, 'Test 33');
test(largestRectangleArea([10000, 9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991]), 99910, 'Test 34');
test(largestRectangleArea([3,6,5,7,4,8,1,0,2,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 55, 'Test 35');
test(largestRectangleArea([5,2,5,2,5,2,5,2,5,2]), 20, 'Test 36');
test(largestRectangleArea([0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 55, 'Test 37');
test(largestRectangleArea([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 110, 'Test 38');
test(largestRectangleArea([6,2,5,4,5,1,6,2,3,3,2,6,5,3,2,1]), 18, 'Test 39');
test(largestRectangleArea([3,6,5,7,4,8,1,0,9,2,5,6,4,3,7,8,9,10,11,12]), 42, 'Test 40');
test(largestRectangleArea([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 113, 'Test 41');
test(largestRectangleArea([10,20,10,30,10,40,10,50,10,60,10]), 110, 'Test 42');
test(largestRectangleArea([1,2,3,4,5,6,7,8,9,10,10,10,9,8,7,6,5,4,3,2,1]), 66, 'Test 43');
test(largestRectangleArea([3,6,9,12,15,18,21,24,27,30,27,24,21,18,15,12,9,6,3]), 165, 'Test 44');
test(largestRectangleArea([10000, 0, 10000, 0, 10000, 0]), 10000, 'Test 45');
test(largestRectangleArea([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 55, 'Test 46');
test(largestRectangleArea([5,3,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1]), 28, 'Test 47');
test(largestRectangleArea([1,2,3,4,5,6,7,8,9,10]), 30, 'Test 48');
test(largestRectangleArea([1,3,2,1,5,4,2,1]), 8, 'Test 49');
test(largestRectangleArea([4,2,0,3,2,5]), 6, 'Test 50');
test(largestRectangleArea([100, 200, 300, 400, 300, 200, 100]), 1000, 'Test 51');
test(largestRectangleArea([2,1,2,1,2,1,2,1,2,1]), 10, 'Test 52');
test(largestRectangleArea([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1]), 28, 'Test 53');
test(largestRectangleArea([6,2,5,4,5,1,6,3]), 12, 'Test 54');
test(largestRectangleArea([2,1,5,6,2,3,2,1,5,6,2,3]), 12, 'Test 55');
test(largestRectangleArea([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 56');
test(largestRectangleArea([2,1,5,6,2,3,1,4,2,1]), 10, 'Test 57');
test(largestRectangleArea([0,1,0,1,0,1,0]), 1, 'Test 58');
test(largestRectangleArea([4,2,0,3,2,5,3,1]), 8, 'Test 59');
test(largestRectangleArea([5,5,1,5,5]), 10, 'Test 60');
test(largestRectangleArea([1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0]), 10, 'Test 61');
test(largestRectangleArea([1,3,2,1,2,3,1]), 7, 'Test 62');
test(largestRectangleArea([5,6,2,8,9,1,4,3,7,10]), 16, 'Test 63');
test(largestRectangleArea([5,5,5,5,5,0,5,5,5,5,5]), 25, 'Test 64');
test(largestRectangleArea([5, 8, 6, 2, 7, 8, 5, 9, 5, 3, 8, 6, 7, 9, 5, 2, 8]), 34, 'Test 65');
test(largestRectangleArea([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 66');
test(largestRectangleArea([10000,0,10000,0,10000,0,10000,0]), 10000, 'Test 67');
test(largestRectangleArea([2,1,5,6,2,3,2,5,6,7,8,9,10]), 30, 'Test 68');
test(largestRectangleArea([1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21]), 66, 'Test 69');
test(largestRectangleArea([1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 21, 'Test 70');
test(largestRectangleArea([2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4]), 40, 'Test 71');
test(largestRectangleArea([1,1,2,2,3,3,4,4,5,5]), 18, 'Test 72');
test(largestRectangleArea([5,4,3,2,1,1,2,3,4,5]), 10, 'Test 73');
test(largestRectangleArea([1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10]), 20, 'Test 74');
test(largestRectangleArea([1,0,1,0,1,0,1,0,1]), 1, 'Test 75');
test(largestRectangleArea([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), 25, 'Test 76');
test(largestRectangleArea([2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 26, 'Test 77');
test(largestRectangleArea([1,3,2,1,3,2,1]), 7, 'Test 78');
test(largestRectangleArea([5,5,1,7,1,1,5,2,7,6]), 12, 'Test 79');
test(largestRectangleArea([5,5,5,5,5,0,0,0,0,0,5,5,5,5,5]), 25, 'Test 80');
test(largestRectangleArea([2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 25, 'Test 81');
test(largestRectangleArea([6,2,5,4,5,1,6]), 12, 'Test 82');
test(largestRectangleArea([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 21, 'Test 83');
test(largestRectangleArea([5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 55, 'Test 84');
test(largestRectangleArea([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 15, 'Test 85');
test(largestRectangleArea([1,0,1,0,1,0,1,0,1,0]), 1, 'Test 86');
test(largestRectangleArea([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]), 160, 'Test 87');
test(largestRectangleArea([1,3,2,1,2,3,1,2,3,4,3,2,1,2,3,1]), 16, 'Test 88');
test(largestRectangleArea([1,2,3,4,5,6,5,4,3,2,1]), 21, 'Test 89');
test(largestRectangleArea([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 90');
test(largestRectangleArea([100,200,300,400,500,600,700,800,900,1000,900,800,700,600,500,400,300,200,100]), 5500, 'Test 91');
test(largestRectangleArea([1,0,0,0,1,0,0,0,1]), 1, 'Test 92');
test(largestRectangleArea([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 20, 'Test 93');
test(largestRectangleArea([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 94');
test(largestRectangleArea([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 17, 'Test 95');
test(largestRectangleArea([2,1,3,2,3,4,3,2,3,4,5,4,3,2,3,2,1,2,3,2,1]), 28, 'Test 96');

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
