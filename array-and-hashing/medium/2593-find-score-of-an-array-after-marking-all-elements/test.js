// Test: 2593. Find Score Of An Array After Marking All Elements
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { findScore } = require("./solution");

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

console.log("\n2593. Find Score Of An Array After Marking All Elements\n");

test(findScore([6,5,4,3,2,1]), 9, 'Test 1');
test(findScore([1,1000000]), 1, 'Test 2');
test(findScore([1000000, 1, 1000000, 1, 1000000]), 2, 'Test 3');
test(findScore([10,9,8,7,6,5,4,3,2,1]), 25, 'Test 4');
test(findScore([7, 3, 5, 1, 9, 2, 8, 6, 4]), 10, 'Test 5');
test(findScore([1,2,3,4,5,6,7,8,9,10]), 25, 'Test 6');
test(findScore([1]), 1, 'Test 7');
test(findScore([3,1,4,1,5,9,2,6,5,3,5]), 7, 'Test 8');
test(findScore([7,6,5,4,3,2,1]), 16, 'Test 9');
test(findScore([5,3,6,2,7,4,1,8,9]), 15, 'Test 10');
test(findScore([10,20,30,40,50]), 90, 'Test 11');
test(findScore([1,2,3,4,5]), 9, 'Test 12');
test(findScore([1,1,1,1,1,1,1,1,1,1]), 5, 'Test 13');
test(findScore([1,2,1,2,1,2,1]), 4, 'Test 14');
test(findScore([1,1,1,1,1]), 3, 'Test 15');
test(findScore([2,3,5,1,3,2]), 5, 'Test 16');
test(findScore([1,2,3,4,5,6]), 9, 'Test 17');
test(findScore([3,1,2,4,5,3,2,1]), 9, 'Test 18');
test(findScore([2,1,3,4,5,2]), 7, 'Test 19');
test(findScore([1,2,2,1,3,3,4,4,5,5]), 14, 'Test 20');
test(findScore([1000000,1]), 1, 'Test 21');
test(findScore([1,3,2,4,5,6,7,8,9,10]), 24, 'Test 22');
test(findScore([1000000,1,2,3,4,5,6,7,8,9]), 25, 'Test 23');
test(findScore([5,4,3,2,1]), 9, 'Test 24');
test(findScore([5,5,5,5,5,5,5]), 20, 'Test 25');
test(findScore([1,1,1,1,1,1]), 3, 'Test 26');
test(findScore([1000000]), 1000000, 'Test 27');
test(findScore([1000000,1,1000000,1,1000000,1]), 3, 'Test 28');
test(findScore([999999, 1, 999998, 2, 999997, 3, 999996, 4, 999995, 5]), 15, 'Test 29');
test(findScore([2, 1, 4, 1, 3, 4, 2, 1]), 7, 'Test 30');
test(findScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1]), 38, 'Test 31');
test(findScore([2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4]), 25, 'Test 32');
test(findScore([5, 1, 9, 2, 8, 3, 7, 4, 6]), 10, 'Test 33');
test(findScore([9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 41, 'Test 34');
test(findScore([1, 2, 3, 4, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 21, 'Test 35');
test(findScore([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 10, 'Test 36');
test(findScore([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 100, 'Test 37');
test(findScore([10, 20, 30, 40, 50, 10, 20, 30, 40, 50]), 130, 'Test 38');
test(findScore([6, 7, 8, 9, 10, 5, 4, 3, 2, 1]), 23, 'Test 39');
test(findScore([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]), 16, 'Test 40');
test(findScore([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 64, 'Test 41');
test(findScore([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 29, 'Test 42');
test(findScore([2, 2, 2, 2, 2, 2, 2, 2, 1]), 9, 'Test 43');
test(findScore([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119]), 1090, 'Test 44');
test(findScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59]), 435, 'Test 45');
test(findScore([500000, 500001, 499999, 500002, 499998, 500003, 499997, 500004, 499996]), 2499990, 'Test 46');
test(findScore([1000000, 2, 1000000, 3, 1000000, 4, 1000000, 5]), 14, 'Test 47');
test(findScore([1000000, 1000000, 1, 1, 1000000, 1, 1000000, 1]), 1000003, 'Test 48');
test(findScore([7, 5, 3, 5, 7, 9, 1, 2, 8, 4, 6]), 22, 'Test 49');
test(findScore([5, 3, 8, 6, 2, 7, 4, 1]), 6, 'Test 50');
test(findScore([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5, 999996, 6, 999995, 7, 999994, 8]), 36, 'Test 51');
test(findScore([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5, 999996]), 15, 'Test 52');
test(findScore([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 225, 'Test 53');
test(findScore([3, 1, 2, 4, 5, 3, 2, 1, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8]), 45, 'Test 54');
test(findScore([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 30, 'Test 55');
test(findScore([9, 5, 7, 3, 8, 6, 10, 4, 2, 1]), 19, 'Test 56');
test(findScore([2, 3, 2, 4, 3, 2, 5, 4, 3, 2, 6, 5, 4, 3, 2, 7, 6, 5, 4, 3]), 26, 'Test 57');
test(findScore([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 125, 'Test 58');
test(findScore([5, 3, 8, 3, 9, 1, 6, 2, 7, 4]), 13, 'Test 59');
test(findScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 8, 'Test 60');
test(findScore([5, 3, 8, 6, 2, 7, 4, 1, 9]), 6, 'Test 61');
test(findScore([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 120, 'Test 62');
test(findScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 40, 'Test 63');
test(findScore([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]), 15, 'Test 64');
test(findScore([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), 120, 'Test 65');
test(findScore([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), 24, 'Test 66');
test(findScore([9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), 25, 'Test 67');
test(findScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 169, 'Test 68');
test(findScore([2, 3, 5, 1, 3, 2, 5, 1, 3, 2, 5, 1, 3, 2, 5]), 11, 'Test 69');
test(findScore([1000, 999, 998, 1001, 1002, 997, 996, 995, 1003, 1004, 1005, 994, 993, 992, 1006]), 6980, 'Test 70');
test(findScore([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 50, 'Test 71');
test(findScore([5, 3, 8, 1, 4, 7, 2, 6]), 6, 'Test 72');
test(findScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 225, 'Test 73');
test(findScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 50, 'Test 74');
test(findScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]), 24, 'Test 75');
test(findScore([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 11, 20, 12, 19, 13, 18, 14, 17, 15, 16]), 80, 'Test 76');
test(findScore([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 25, 'Test 77');
test(findScore([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1]), 50, 'Test 78');
test(findScore([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 325, 'Test 79');
test(findScore([1, 2, 3, 4, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1]), 16, 'Test 80');
test(findScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 64, 'Test 81');
test(findScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 25, 'Test 82');
test(findScore([2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 5, 'Test 83');
test(findScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1, 2, 3, 4, 5]), 259, 'Test 84');
test(findScore([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]), 57, 'Test 85');
test(findScore([5, 1, 9, 3, 7, 2, 8, 6, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 85, 'Test 86');
test(findScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 360, 'Test 87');
test(findScore([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 15, 'Test 88');
test(findScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 100, 'Test 89');
test(findScore([1000000, 999999, 999998, 1000001, 1000002, 999997, 999996, 999995, 1000003, 1000004]), 4999994, 'Test 90');
test(findScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 5, 'Test 91');
test(findScore([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 75, 'Test 92');
test(findScore([3, 3, 3, 2, 2, 1, 1, 1, 4, 4, 4, 5, 5, 5]), 21, 'Test 93');
test(findScore([10, 20, 10, 30, 20, 40, 50, 60, 10, 70]), 100, 'Test 94');
test(findScore([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 25, 'Test 95');
test(findScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 50, 'Test 96');
test(findScore([100, 101, 102, 99, 98, 97, 103, 104, 105, 96, 95, 94, 106, 107, 108]), 697, 'Test 97');
test(findScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 95, 'Test 98');
test(findScore([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]), 19, 'Test 99');
test(findScore([7, 1, 3, 2, 5, 4, 6, 8]), 15, 'Test 100');
test(findScore([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 8, 'Test 101');
test(findScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 102');
test(findScore([7, 6, 5, 8, 9, 1, 2, 3, 4, 10]), 26, 'Test 103');
test(findScore([999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990]), 4999970, 'Test 104');
test(findScore([15, 10, 5, 1, 20, 25, 30, 35, 40, 45]), 116, 'Test 105');
test(findScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 40, 'Test 106');
test(findScore([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1]), 13, 'Test 107');
test(findScore([100, 50, 25, 125, 62, 31, 156, 78, 39, 200, 100, 50, 25, 125, 62, 31]), 351, 'Test 108');
test(findScore([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5]), 46, 'Test 109');
test(findScore([500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000]), 2500000, 'Test 110');
test(findScore([2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 9, 'Test 111');
test(findScore([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5]), 15, 'Test 112');

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
