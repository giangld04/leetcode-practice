// Test: 1695. Maximum Erasure Value
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { maximumUniqueSubarray } = require("./solution");

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

console.log("\n1695. Maximum Erasure Value\n");

test(maximumUniqueSubarray([1,2,1,3,2,4,3,5,4,6]), 18, 'Test 1');
test(maximumUniqueSubarray([1,2,3,1,2,3,1,2,3]), 6, 'Test 2');
test(maximumUniqueSubarray([1]), 1, 'Test 3');
test(maximumUniqueSubarray([1,2,2,3,4,5,6,7,8,9,10,1,1,1,1,1]), 55, 'Test 4');
test(maximumUniqueSubarray([1,2,3,2,1,4,5,4,6]), 15, 'Test 5');
test(maximumUniqueSubarray([1,1,1,1,1]), 1, 'Test 6');
test(maximumUniqueSubarray([10,5,2,7,8,7,4,5]), 32, 'Test 7');
test(maximumUniqueSubarray([1,2,3,2,1,4,5,6,5,7,8,9,8,10]), 35, 'Test 8');
test(maximumUniqueSubarray([1,1,1,1,1,1,1,1]), 1, 'Test 9');
test(maximumUniqueSubarray([5,5,5,5,5,5,5,5,5,5]), 5, 'Test 10');
test(maximumUniqueSubarray([1,2,2,1,3,4,5,6,7,8,9,10]), 55, 'Test 11');
test(maximumUniqueSubarray([10000,9999,9998,9997,9996]), 49990, 'Test 12');
test(maximumUniqueSubarray([1,2,3,4,3,5,6,7,8,9]), 42, 'Test 13');
test(maximumUniqueSubarray([1,2,3,4,5]), 15, 'Test 14');
test(maximumUniqueSubarray([9,8,7,6,5,4,3,2,1]), 45, 'Test 15');
test(maximumUniqueSubarray([9,9,9,9,10,9,9,9]), 19, 'Test 16');
test(maximumUniqueSubarray([4,2,4,5,6]), 17, 'Test 17');
test(maximumUniqueSubarray([5,2,1,2,5,2,1,2,5]), 8, 'Test 18');
test(maximumUniqueSubarray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 11, 'Test 19');
test(maximumUniqueSubarray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99]), 2500, 'Test 20');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]), 45, 'Test 21');
test(maximumUniqueSubarray([2,2,2,2,3,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 19, 'Test 22');
test(maximumUniqueSubarray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]), 21, 'Test 23');
test(maximumUniqueSubarray([2,4,6,8,10,12,14,16,18,20,2,4,6,8,10,12,14,16,18,20,2,4,6,8,10,12,14,16,18,20]), 110, 'Test 24');
test(maximumUniqueSubarray([1,2,3,2,1,4,5,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9]), 210, 'Test 25');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 26');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 55, 'Test 27');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 55, 'Test 28');
test(maximumUniqueSubarray([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991,10000,9999,9998,9997,9996,9995,9994,9993,9992,9991]), 99955, 'Test 29');
test(maximumUniqueSubarray([400,300,200,100,100,200,300,400,500,600,700,800,900,1000,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500]), 12000, 'Test 30');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,1]), 595, 'Test 31');
test(maximumUniqueSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 32');
test(maximumUniqueSubarray([1,2,2,3,4,5,5,6,7,8,8,9,10,10,11,12,12,13,14,15,15]), 54, 'Test 33');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,2,4,6,8,10,1,3,5,7,9,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 34');
test(maximumUniqueSubarray([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10]), 55, 'Test 35');
test(maximumUniqueSubarray([3,1,2,4,5,6,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 324, 'Test 36');
test(maximumUniqueSubarray([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100]), 550, 'Test 37');
test(maximumUniqueSubarray([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81]), 1810, 'Test 38');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 465, 'Test 39');
test(maximumUniqueSubarray([1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18,20]), 210, 'Test 40');
test(maximumUniqueSubarray([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991]), 99955, 'Test 41');
test(maximumUniqueSubarray([10000,10000,10000,10000,10000,10000,10000,10000,10000]), 10000, 'Test 42');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,1,2,3,4,5]), 45, 'Test 43');
test(maximumUniqueSubarray([5,5,5,5,5,5,5,5,5,5,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 44');
test(maximumUniqueSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 45');
test(maximumUniqueSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 3, 'Test 46');
test(maximumUniqueSubarray([1,2,3,1,4,5,6,2,3,7,8,9,10,1,2,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 450, 'Test 47');
test(maximumUniqueSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 210, 'Test 48');
test(maximumUniqueSubarray([1,2,3,4,3,5,6,5,7,8,9,8,10,11,10,12,13,12,14,15]), 54, 'Test 49');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]), 45, 'Test 50');
test(maximumUniqueSubarray([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71]), 639, 'Test 51');
test(maximumUniqueSubarray([1,3,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 324, 'Test 52');
test(maximumUniqueSubarray([1,10000,2,9999,3,9998,4,9997,5,9996,6,9995,7,9994,8,9993,9,9992,10,9991]), 100010, 'Test 53');
test(maximumUniqueSubarray([2,3,1,4,5,6,1,2,3,7,8,9,10,11,12,13,14,15]), 120, 'Test 54');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 55');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,2,4,6,8,10,3,5,7,9,1]), 55, 'Test 56');
test(maximumUniqueSubarray([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81]), 1810, 'Test 57');
test(maximumUniqueSubarray([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 55, 'Test 58');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 465, 'Test 59');
test(maximumUniqueSubarray([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991,10000]), 99955, 'Test 60');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 61');
test(maximumUniqueSubarray([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,15,14,13,12]), 120, 'Test 62');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 325, 'Test 63');
test(maximumUniqueSubarray([9999,10000,9999,10000,9999,10000,9999,10000,9999,10000,9999,10000]), 19999, 'Test 64');
test(maximumUniqueSubarray([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16]), 31, 'Test 65');
test(maximumUniqueSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 45, 'Test 66');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11]), 66, 'Test 67');
test(maximumUniqueSubarray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7]), 34, 'Test 68');
test(maximumUniqueSubarray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 69');
test(maximumUniqueSubarray([1,2,3,2,1,4,5,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 204, 'Test 70');
test(maximumUniqueSubarray([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 55, 'Test 71');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 72');
test(maximumUniqueSubarray([3,1,2,4,5,3,6,7,8,9,1,2,3,4]), 45, 'Test 73');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,10,1]), 55, 'Test 74');
test(maximumUniqueSubarray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20]), 39, 'Test 75');
test(maximumUniqueSubarray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 19, 'Test 76');
test(maximumUniqueSubarray([1,2,2,3,4,4,5,6,7,8,8,9,10,1,2,3,4,5,6,7]), 55, 'Test 77');
test(maximumUniqueSubarray([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 78');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 79');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 1275, 'Test 80');
test(maximumUniqueSubarray([100,200,100,300,400,500,600,700,800,900,1000,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500]), 12000, 'Test 81');
test(maximumUniqueSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 82');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 120, 'Test 83');
test(maximumUniqueSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 84');
test(maximumUniqueSubarray([2,2,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,2,2,2,2]), 819, 'Test 85');
test(maximumUniqueSubarray([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 86');
test(maximumUniqueSubarray([100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200]), 300, 'Test 87');
test(maximumUniqueSubarray([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 55, 'Test 88');
test(maximumUniqueSubarray([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), 7, 'Test 89');
test(maximumUniqueSubarray([1,3,2,4,3,5,6,7,8,9,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 90');
test(maximumUniqueSubarray([5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000]), 5000, 'Test 91');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,10]), 55, 'Test 92');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 93');
test(maximumUniqueSubarray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 94');
test(maximumUniqueSubarray([5000,5001,5002,5003,5004,5005,5006,5007,5008,5009,5000]), 50045, 'Test 95');
test(maximumUniqueSubarray([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991,9990,9989,9988,9987,9986,9985,9984,9983,9982,9981]), 199810, 'Test 96');
test(maximumUniqueSubarray([10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50]), 150, 'Test 97');
test(maximumUniqueSubarray([3,1,2,4,2,3,5,6,7,8,9,1]), 45, 'Test 98');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 99');
test(maximumUniqueSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 55, 'Test 100');
test(maximumUniqueSubarray([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 101');
test(maximumUniqueSubarray([1,3,2,1,4,2,3,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 820, 'Test 102');
test(maximumUniqueSubarray([1,10,100,1000,10000,1,2,3,4,5,6,7,8,9,1,10,100,1000,10000,9,8,7,6,5,4,3,2,1]), 11155, 'Test 103');
test(maximumUniqueSubarray([5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2]), 7, 'Test 104');
test(maximumUniqueSubarray([10, 9, 8, 7, 6, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 55, 'Test 105');

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
