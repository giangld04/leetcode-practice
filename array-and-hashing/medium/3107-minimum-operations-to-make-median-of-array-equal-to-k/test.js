// Test: 3107. Minimum Operations To Make Median Of Array Equal To K
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { minOperationsToMakeMedianK } = require("./solution");

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

console.log("\n3107. Minimum Operations To Make Median Of Array Equal To K\n");

test(minOperationsToMakeMedianK([1,3,3,3,7,7,9], 3), 0, 'Test 1');
test(minOperationsToMakeMedianK([5,5,5,5,5], 5), 0, 'Test 2');
test(minOperationsToMakeMedianK([1,1000000000,2,999999999,3], 500000000), 499999997, 'Test 3');
test(minOperationsToMakeMedianK([2,5,6,8,5], 7), 3, 'Test 4');
test(minOperationsToMakeMedianK([1,1,1,1,1], 3), 6, 'Test 5');
test(minOperationsToMakeMedianK([1,2,3,4,5,6], 4), 0, 'Test 6');
test(minOperationsToMakeMedianK([2,5,6,8,5], 4), 2, 'Test 7');
test(minOperationsToMakeMedianK([5,5,5,5,5,5], 5), 0, 'Test 8');
test(minOperationsToMakeMedianK([1,2,3,4,5,6,7,8,9], 5), 0, 'Test 9');
test(minOperationsToMakeMedianK([1,2,3,100,101], 3), 0, 'Test 10');
test(minOperationsToMakeMedianK([1,3,3,3,7], 3), 0, 'Test 11');
test(minOperationsToMakeMedianK([1,3,3,3,7,7,9], 5), 2, 'Test 12');
test(minOperationsToMakeMedianK([10,20,30,40,50], 30), 0, 'Test 13');
test(minOperationsToMakeMedianK([10,20,30,40,50], 35), 5, 'Test 14');
test(minOperationsToMakeMedianK([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 8, 'Test 15');
test(minOperationsToMakeMedianK([2, 3, 1, 5, 4, 6, 8, 7, 9], 6), 1, 'Test 16');
test(minOperationsToMakeMedianK([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 20), 100, 'Test 17');
test(minOperationsToMakeMedianK([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10], 5), 1, 'Test 18');
test(minOperationsToMakeMedianK([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 40, 'Test 19');
test(minOperationsToMakeMedianK([999999999, 999999999, 999999999, 999999999, 999999999], 1000000000), 3, 'Test 20');
test(minOperationsToMakeMedianK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 6), 0, 'Test 21');
test(minOperationsToMakeMedianK([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7], 4), 0, 'Test 22');
test(minOperationsToMakeMedianK([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 55), 5, 'Test 23');
test(minOperationsToMakeMedianK([1, 3, 5, 7, 9, 11, 13], 8), 1, 'Test 24');
test(minOperationsToMakeMedianK([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 25');
test(minOperationsToMakeMedianK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 11), 0, 'Test 26');
test(minOperationsToMakeMedianK([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 4), 0, 'Test 27');
test(minOperationsToMakeMedianK([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3), 14, 'Test 28');
test(minOperationsToMakeMedianK([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 15, 'Test 29');
test(minOperationsToMakeMedianK([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 10, 'Test 30');
test(minOperationsToMakeMedianK([5, 1, 9, 3, 7, 11, 13, 15, 17, 19], 10), 1, 'Test 31');
test(minOperationsToMakeMedianK([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100], 600), 0, 'Test 32');
test(minOperationsToMakeMedianK([10, 20, 30, 40, 50, 60, 70], 40), 0, 'Test 33');
test(minOperationsToMakeMedianK([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15), 0, 'Test 34');
test(minOperationsToMakeMedianK([1, 1000000000, 1, 1000000000, 1, 1000000000], 500000000), 500000000, 'Test 35');
test(minOperationsToMakeMedianK([1000000000, 500000000, 750000000, 250000000, 1000], 500000000), 0, 'Test 36');
test(minOperationsToMakeMedianK([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 105), 5, 'Test 37');
test(minOperationsToMakeMedianK([2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 11), 0, 'Test 38');
test(minOperationsToMakeMedianK([10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10), 0, 'Test 39');
test(minOperationsToMakeMedianK([1, 3, 3, 6, 7, 8, 9, 10, 11], 8), 1, 'Test 40');
test(minOperationsToMakeMedianK([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 2], 10), 0, 'Test 41');
test(minOperationsToMakeMedianK([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4), 1, 'Test 42');
test(minOperationsToMakeMedianK([1, 2, 2, 3, 3, 3, 4, 5, 5, 6], 3), 0, 'Test 43');
test(minOperationsToMakeMedianK([9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 0, 'Test 44');
test(minOperationsToMakeMedianK([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000], 6500), 500, 'Test 45');
test(minOperationsToMakeMedianK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 10, 'Test 46');
test(minOperationsToMakeMedianK([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 6), 0, 'Test 47');
test(minOperationsToMakeMedianK([1, 1000000000, 2, 999999999, 3, 999999998, 4, 999999997, 5, 999999996], 500000000), 499999996, 'Test 48');
test(minOperationsToMakeMedianK([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 1000000000), 0, 'Test 49');
test(minOperationsToMakeMedianK([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 1000000000), 3062500000, 'Test 50');
test(minOperationsToMakeMedianK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 1, 'Test 51');
test(minOperationsToMakeMedianK([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), 10, 'Test 52');
test(minOperationsToMakeMedianK([10, 20, 30, 40, 50, 60, 70, 80, 90], 50), 0, 'Test 53');
test(minOperationsToMakeMedianK([1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 7), 1, 'Test 54');
test(minOperationsToMakeMedianK([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 80), 0, 'Test 55');
test(minOperationsToMakeMedianK([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 95), 0, 'Test 56');
test(minOperationsToMakeMedianK([1, 1, 1, 1, 2, 2, 2, 3, 3, 4], 2), 0, 'Test 57');
test(minOperationsToMakeMedianK([9, 3, 5, 7, 1, 8, 2, 4, 6], 5), 0, 'Test 58');
test(minOperationsToMakeMedianK([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 5), 1, 'Test 59');
test(minOperationsToMakeMedianK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 10), 1, 'Test 60');
test(minOperationsToMakeMedianK([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 3), 0, 'Test 61');
test(minOperationsToMakeMedianK([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 1), 5999999994, 'Test 62');
test(minOperationsToMakeMedianK([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 5), 0, 'Test 63');
test(minOperationsToMakeMedianK([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 11), 1, 'Test 64');
test(minOperationsToMakeMedianK([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 5, 'Test 65');
test(minOperationsToMakeMedianK([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 20, 'Test 66');
test(minOperationsToMakeMedianK([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3), 12, 'Test 67');
test(minOperationsToMakeMedianK([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59], 30), 1, 'Test 68');
test(minOperationsToMakeMedianK([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 69');
test(minOperationsToMakeMedianK([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 500000000), 1500000000, 'Test 70');
test(minOperationsToMakeMedianK([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 5), 1, 'Test 71');
test(minOperationsToMakeMedianK([10, 20, 30, 40, 50, 60, 70], 35), 5, 'Test 72');
test(minOperationsToMakeMedianK([5, 5, 5, 5, 5, 5, 5, 5], 6), 4, 'Test 73');
test(minOperationsToMakeMedianK([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 29), 16, 'Test 74');
test(minOperationsToMakeMedianK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6), 1, 'Test 75');
test(minOperationsToMakeMedianK([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 65, 'Test 76');
test(minOperationsToMakeMedianK([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 25, 'Test 77');
test(minOperationsToMakeMedianK([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 1, 'Test 78');
test(minOperationsToMakeMedianK([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130], 65), 5, 'Test 79');
test(minOperationsToMakeMedianK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 7), 0, 'Test 80');
test(minOperationsToMakeMedianK([9, 7, 5, 3, 1, 2, 4, 6, 8, 0], 5), 0, 'Test 81');
test(minOperationsToMakeMedianK([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 20), 1, 'Test 82');
test(minOperationsToMakeMedianK([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500), 100, 'Test 83');
test(minOperationsToMakeMedianK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 1, 'Test 84');
test(minOperationsToMakeMedianK([9, 3, 7, 5, 1, 8, 6, 4, 2, 0], 5), 0, 'Test 85');
test(minOperationsToMakeMedianK([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 999999999), 3, 'Test 86');
test(minOperationsToMakeMedianK([10, 20, 30, 40, 50, 60, 70], 45), 5, 'Test 87');

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
