// Test: 3301. Maximize The Total Height Of Unique Towers
// 73 test cases from LeetCodeDataset
// Run: node test.js

const { maximumTotalSum } = require("./solution");

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

console.log("\n3301. Maximize The Total Height Of Unique Towers\n");

test(maximumTotalSum([2,3,4,3]), 10, 'Test 1');
test(maximumTotalSum([5,5,5,5,5]), 15, 'Test 2');
test(maximumTotalSum([1,2,3,4,5]), 15, 'Test 3');
test(maximumTotalSum([1000000000,999999999,999999998,999999997,999999996]), 4999999990, 'Test 4');
test(maximumTotalSum([1]), 1, 'Test 5');
test(maximumTotalSum([1000000000,1000000000,1000000000]), 2999999997, 'Test 6');
test(maximumTotalSum([10,9,8,7,6,5,4,3,2,1]), 55, 'Test 7');
test(maximumTotalSum([2,2,1]), -1, 'Test 8');
test(maximumTotalSum([1,1,1,1,1,1,1,1,1,1]), -1, 'Test 9');
test(maximumTotalSum([15,10]), 25, 'Test 10');
test(maximumTotalSum([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 465, 'Test 11');
test(maximumTotalSum([3,3,3,3,2,2,2,1,1,1]), -1, 'Test 12');
test(maximumTotalSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), -1, 'Test 13');
test(maximumTotalSum([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]), -1, 'Test 14');
test(maximumTotalSum([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), -1, 'Test 15');
test(maximumTotalSum([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), -1, 'Test 16');
test(maximumTotalSum([1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4]), -1, 'Test 17');
test(maximumTotalSum([1, 1, 1, 2, 2, 3, 3, 4, 4, 5]), -1, 'Test 18');
test(maximumTotalSum([2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3]), -1, 'Test 19');
test(maximumTotalSum([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), -1, 'Test 20');
test(maximumTotalSum([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 210, 'Test 21');
test(maximumTotalSum([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 645, 'Test 22');
test(maximumTotalSum([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 110, 'Test 23');
test(maximumTotalSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 10]), -1, 'Test 24');
test(maximumTotalSum([5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10]), -1, 'Test 25');
test(maximumTotalSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 465, 'Test 26');
test(maximumTotalSum([1,1,1,1,2,2,2,2,3,3,3,3]), -1, 'Test 27');
test(maximumTotalSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 1200, 'Test 28');
test(maximumTotalSum([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 210, 'Test 29');
test(maximumTotalSum([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6]), -1, 'Test 30');
test(maximumTotalSum([1000000000,1000000000,1000000000,1000000000,1000000000]), 4999999990, 'Test 31');
test(maximumTotalSum([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,20]), 210, 'Test 32');
test(maximumTotalSum([100, 100, 100, 100, 100, 100, 100, 100, 100, 1]), 865, 'Test 33');
test(maximumTotalSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 120, 'Test 34');
test(maximumTotalSum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), -1, 'Test 35');
test(maximumTotalSum([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 36');
test(maximumTotalSum([1000000000,1000000000,1000000000,999999999,999999999]), 4999999990, 'Test 37');
test(maximumTotalSum([100, 100, 99, 98, 97, 96, 95, 94, 93, 92]), 955, 'Test 38');
test(maximumTotalSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 39');
test(maximumTotalSum([1000000000, 1000000000, 1000000000, 1000000000]), 3999999994, 'Test 40');
test(maximumTotalSum([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]), -1, 'Test 41');
test(maximumTotalSum([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), -1, 'Test 42');
test(maximumTotalSum([1000000000, 999999999, 999999998, 999999997, 999999996]), 4999999990, 'Test 43');
test(maximumTotalSum([10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), -1, 'Test 44');
test(maximumTotalSum([5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), -1, 'Test 45');
test(maximumTotalSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 46');
test(maximumTotalSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,10,10,10,10,10,10,10,10,10,10]), -1, 'Test 47');
test(maximumTotalSum([1,1000000000,1,1000000000,1,1000000000,1,1000000000,1,1000000000]), -1, 'Test 48');
test(maximumTotalSum([5, 4, 3, 2, 1, 10, 9, 8, 7, 6]), 55, 'Test 49');
test(maximumTotalSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10]), -1, 'Test 50');
test(maximumTotalSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 5500, 'Test 51');
test(maximumTotalSum([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), -1, 'Test 52');
test(maximumTotalSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6]), -1, 'Test 53');
test(maximumTotalSum([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1]), -1, 'Test 54');
test(maximumTotalSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 55');
test(maximumTotalSum([10, 10, 10, 10, 10, 10, 10, 10, 10, 1]), 55, 'Test 56');
test(maximumTotalSum([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]), -1, 'Test 57');
test(maximumTotalSum([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]), 10945, 'Test 58');
test(maximumTotalSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 10]), -1, 'Test 59');
test(maximumTotalSum([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 955, 'Test 60');
test(maximumTotalSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 325, 'Test 61');
test(maximumTotalSum([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5]), -1, 'Test 62');
test(maximumTotalSum([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), -1, 'Test 63');
test(maximumTotalSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 100, 'Test 64');
test(maximumTotalSum([1,1,2,2,3,3,4,4,5,5]), -1, 'Test 65');
test(maximumTotalSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 66');
test(maximumTotalSum([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), -1, 'Test 67');
test(maximumTotalSum([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991]), 9999999955, 'Test 68');
test(maximumTotalSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 69');
test(maximumTotalSum([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1,1,1,1,1,1,1,1,1,1]), -1, 'Test 70');
test(maximumTotalSum([150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 1200, 'Test 71');
test(maximumTotalSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 55, 'Test 72');
test(maximumTotalSum([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), -1, 'Test 73');

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
