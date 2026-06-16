// Test: 2348. Number Of Zero Filled Subarrays
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { zeroFilledSubarray } = require("./solution");

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

console.log("\n2348. Number Of Zero Filled Subarrays\n");

test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,1]), 45, 'Test 1');
test(zeroFilledSubarray([0,1,2,3,4,5]), 1, 'Test 2');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0]), 55, 'Test 3');
test(zeroFilledSubarray([0,1,2,3,4,5,6,7,8,9,0]), 2, 'Test 4');
test(zeroFilledSubarray([1,0,1,0,1]), 2, 'Test 5');
test(zeroFilledSubarray([0,0,0,0,0,1,0,0,0,0,0]), 30, 'Test 6');
test(zeroFilledSubarray([1,3,0,0,2,0,0,4]), 6, 'Test 7');
test(zeroFilledSubarray([1]), 0, 'Test 8');
test(zeroFilledSubarray([1,2,3,4,5,6,7,8,9,0]), 1, 'Test 9');
test(zeroFilledSubarray([5,0,0,0,0,0,0,5]), 21, 'Test 10');
test(zeroFilledSubarray([5,6,7,8,9]), 0, 'Test 11');
test(zeroFilledSubarray([0,0,0,2,0,0]), 9, 'Test 12');
test(zeroFilledSubarray([1,2,3,4,5]), 0, 'Test 13');
test(zeroFilledSubarray([1,0,0,0,0,0,0,0,0,0]), 45, 'Test 14');
test(zeroFilledSubarray([2,10,2019]), 0, 'Test 15');
test(zeroFilledSubarray([0]), 1, 'Test 16');
test(zeroFilledSubarray([1,0,1,0,1,0]), 3, 'Test 17');
test(zeroFilledSubarray([0,1,0,1,0,1,0]), 4, 'Test 18');
test(zeroFilledSubarray([0,0,0,0]), 10, 'Test 19');
test(zeroFilledSubarray([0,0,1,0,0,1,0,0]), 9, 'Test 20');
test(zeroFilledSubarray([5,4,3,2,1,0]), 1, 'Test 21');
test(zeroFilledSubarray([0,1,0,2,0,3,0]), 4, 'Test 22');
test(zeroFilledSubarray([1,0,1,0,1,0,1]), 3, 'Test 23');
test(zeroFilledSubarray([1,0,2,0,3,0,0,0]), 8, 'Test 24');
test(zeroFilledSubarray([10,20,30,0,0,0,40,50,60,0,0,70]), 9, 'Test 25');
test(zeroFilledSubarray([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0]), 18, 'Test 26');
test(zeroFilledSubarray([0,0,0,0,0,1,0,0,0,0,2,0,0,0,3,0,0,4,0,0,0,5,0,0,0,6,0,0,0,7]), 52, 'Test 27');
test(zeroFilledSubarray([1,0,0,0,2,0,0,0,0,0,0,3,0,0,0,0]), 37, 'Test 28');
test(zeroFilledSubarray([999999999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 190, 'Test 29');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 300, 'Test 30');
test(zeroFilledSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 7, 'Test 31');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 210, 'Test 32');
test(zeroFilledSubarray([0,0,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0,0,0]), 63, 'Test 33');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 175, 'Test 34');
test(zeroFilledSubarray([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0]), 30, 'Test 35');
test(zeroFilledSubarray([1000000000,0,0,0,-1000000000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 502, 'Test 36');
test(zeroFilledSubarray([0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,0,0]), 45, 'Test 37');
test(zeroFilledSubarray([0,0,0,1,1,0,0,0,2,2,2,0,0,0,0,3,3,3,3,0,0,0,0,0]), 37, 'Test 38');
test(zeroFilledSubarray([0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,0,0,0]), 19, 'Test 39');
test(zeroFilledSubarray([1,2,3,4,5,6,7,8,9,0,0,0,0,0,0,0,0,0,10,11,12,13,14]), 45, 'Test 40');
test(zeroFilledSubarray([100,0,0,0,0,0,200,0,0,0,300,0,0,0,400,0,0,0,500]), 33, 'Test 41');
test(zeroFilledSubarray([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 39, 'Test 42');
test(zeroFilledSubarray([0,0,0,0,1,0,0,0,0,2,0,0,0,0,3,0,0,0,0,4,0,0,0,0]), 50, 'Test 43');
test(zeroFilledSubarray([0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0]), 45, 'Test 44');
test(zeroFilledSubarray([10,0,0,10,0,10,0,0,10,0,0,0,10,0,0,0,0,10,0,0,0,0,0]), 38, 'Test 45');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 2850, 'Test 46');
test(zeroFilledSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 8, 'Test 47');
test(zeroFilledSubarray([0,1,0,2,0,3,0,4,0,5,0]), 6, 'Test 48');
test(zeroFilledSubarray([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]), 54, 'Test 49');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1596, 'Test 50');
test(zeroFilledSubarray([1,0,2,0,3,0,4,0,5,0]), 5, 'Test 51');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1891, 'Test 52');
test(zeroFilledSubarray([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 22, 'Test 53');
test(zeroFilledSubarray([1,2,3,4,5,6,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 780, 'Test 54');
test(zeroFilledSubarray([1,2,3,4,5,0,0,0,0,0,0,0,0,0,0,0,6,7,8,9,10,0,0,0,0]), 76, 'Test 55');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 990, 'Test 56');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1000000000]), 325, 'Test 57');
test(zeroFilledSubarray([0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10]), 10, 'Test 58');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1275, 'Test 59');
test(zeroFilledSubarray([9,0,0,8,0,0,7,0,0,6,0,0,5,0,0,4,0,0,3,0,0,2,0,0,1,0]), 25, 'Test 60');
test(zeroFilledSubarray([0,1,0,2,0,3,0,4,0,5]), 5, 'Test 61');
test(zeroFilledSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 13, 'Test 62');
test(zeroFilledSubarray([1,2,3,4,5,6,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 171, 'Test 63');
test(zeroFilledSubarray([0,0,1,0,0,1,0,0,1,0,0]), 12, 'Test 64');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 4753, 'Test 65');
test(zeroFilledSubarray([1,0,2,0,3,0,0,4,0,0,0,5]), 11, 'Test 66');
test(zeroFilledSubarray([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 34, 'Test 67');
test(zeroFilledSubarray([0,1,0,1,0,1,0,1,0,1]), 5, 'Test 68');
test(zeroFilledSubarray([999999999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-999999999]), 190, 'Test 69');
test(zeroFilledSubarray([1,2,3,4,5,0,0,0,0,0,0,6,7,8,9,0,0,0,0,0,0,10]), 42, 'Test 70');
test(zeroFilledSubarray([1,2,3,0,0,0,4,5,0,0,6,7,0,0,0,0,8]), 19, 'Test 71');
test(zeroFilledSubarray([5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5]), 25, 'Test 72');
test(zeroFilledSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 10, 'Test 73');
test(zeroFilledSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 15, 'Test 74');
test(zeroFilledSubarray([1000000000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 300, 'Test 75');
test(zeroFilledSubarray([1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,6,0,0,0,7,0,0,0,8,0,0,0,9,0,0,0]), 54, 'Test 76');
test(zeroFilledSubarray([0,0,1,0,0,0,2,0,0,0,0,3,0,0]), 22, 'Test 77');
test(zeroFilledSubarray([0,0,1,0,0,2,0,0,3,0,0,4,0,0]), 15, 'Test 78');
test(zeroFilledSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,0,0,0,0,0,0,0,0,0,0]), 55, 'Test 79');
test(zeroFilledSubarray([1,0,0,0,0,0,2,0,0,0,0,0,3,0,0,0,0,0,4,0,0,0,0,0,5]), 60, 'Test 80');
test(zeroFilledSubarray([1,2,3,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 210, 'Test 81');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,0,0,0]), 84, 'Test 82');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 325, 'Test 83');
test(zeroFilledSubarray([9,0,0,0,0,8,0,0,7,0,0,0,6,0,5,0,0,4,0,0,0,3,0,0,2,0,0,1,0]), 36, 'Test 84');
test(zeroFilledSubarray([0,1,2,3,4,5,6,7,8,9,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 106, 'Test 85');
test(zeroFilledSubarray([0,0,1,0,0,2,0,0,3,0,0]), 12, 'Test 86');
test(zeroFilledSubarray([5,4,3,2,1,0,0,0,0,0,0,1,2,3,4,5]), 21, 'Test 87');
test(zeroFilledSubarray([0,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0]), 34, 'Test 88');
test(zeroFilledSubarray([1,0,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0]), 34, 'Test 89');
test(zeroFilledSubarray([1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0]), 9, 'Test 90');
test(zeroFilledSubarray([0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0]), 62, 'Test 91');
test(zeroFilledSubarray([1,2,3,4,5,6,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 496, 'Test 92');
test(zeroFilledSubarray([1000000000,1000000000,1000000000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1000000000,1000000000,1000000000]), 153, 'Test 93');
test(zeroFilledSubarray([1,0,0,0,2,0,0,3,0,0,4,0,0,0,5,0,0,6,0,0,0,0,7,0,0,0,0,0,8,0,0,0,0,0,0,9]), 67, 'Test 94');
test(zeroFilledSubarray([0,0,1,1,0,0,1,1,0,0]), 9, 'Test 95');
test(zeroFilledSubarray([1,2,3,4,5,0,0,0,0,0,0,0,6,7,8,9,0,0,0,0]), 38, 'Test 96');
test(zeroFilledSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 595, 'Test 97');
test(zeroFilledSubarray([1,0,0,1,0,0,1,0,0,1]), 9, 'Test 98');
test(zeroFilledSubarray([0,0,0,1,1,1,0,0,0,2,2,2,0,0,0,3,3,3,0,0,0]), 24, 'Test 99');

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
