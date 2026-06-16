// Test: 2110. Number Of Smooth Descent Periods Of A Stock
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { getDescentPeriods } = require("./solution");

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

console.log("\n2110. Number Of Smooth Descent Periods Of A Stock\n");

test(getDescentPeriods([10,9,8,7,6,5,4,3,2,1]), 55, 'Test 1');
test(getDescentPeriods([10,9,4,3,2,1]), 13, 'Test 2');
test(getDescentPeriods([3,3,3,3,3]), 5, 'Test 3');
test(getDescentPeriods([100000,99999,99998,99997,99996,99995]), 21, 'Test 4');
test(getDescentPeriods([8,6,7,7]), 4, 'Test 5');
test(getDescentPeriods([1]), 1, 'Test 6');
test(getDescentPeriods([10,9,10,9,8,7,8,7,6,5]), 23, 'Test 7');
test(getDescentPeriods([3,3,3,3,3,3,3]), 7, 'Test 8');
test(getDescentPeriods([5,4,5,4,3,2,1]), 18, 'Test 9');
test(getDescentPeriods([3,2,1,4]), 7, 'Test 10');
test(getDescentPeriods([1,3,2,1,4,3,2,1]), 17, 'Test 11');
test(getDescentPeriods([5,4,3,4,3,2,1]), 16, 'Test 12');
test(getDescentPeriods([5]), 1, 'Test 13');
test(getDescentPeriods([100,99,98,97,96,95,94,93,92,91]), 55, 'Test 14');
test(getDescentPeriods([10,9,8,9,8,7,6,5,4,3,2,1]), 51, 'Test 15');
test(getDescentPeriods([1,3,2,1,2,3,4,3,2,1]), 19, 'Test 16');
test(getDescentPeriods([5,4,3,2,1]), 15, 'Test 17');
test(getDescentPeriods([1,2,3,4,5]), 5, 'Test 18');
test(getDescentPeriods([10,9,8,9,8,7,6,5,6,7]), 23, 'Test 19');
test(getDescentPeriods([2, 1, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 37, 'Test 20');
test(getDescentPeriods([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 65, 'Test 21');
test(getDescentPeriods([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 36, 'Test 22');
test(getDescentPeriods([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 66, 'Test 23');
test(getDescentPeriods([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 20, 'Test 24');
test(getDescentPeriods([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11]), 210, 'Test 25');
test(getDescentPeriods([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5]), 136, 'Test 26');
test(getDescentPeriods([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 19, 'Test 27');
test(getDescentPeriods([1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 166, 'Test 28');
test(getDescentPeriods([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 15, 14, 13, 12, 11]), 135, 'Test 29');
test(getDescentPeriods([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5]), 76, 'Test 30');
test(getDescentPeriods([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31]), 210, 'Test 31');
test(getDescentPeriods([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 29, 'Test 32');
test(getDescentPeriods([3, 2, 1, 2, 1, 3, 2, 1, 2, 1, 3, 2, 1, 2, 1]), 27, 'Test 33');
test(getDescentPeriods([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 28, 'Test 34');
test(getDescentPeriods([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 465, 'Test 35');
test(getDescentPeriods([1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5]), 60, 'Test 36');
test(getDescentPeriods([7,6,5,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1]), 73, 'Test 37');
test(getDescentPeriods([5, 4, 3, 4, 3, 2, 1, 0, 1, 0, -1, -2, -3]), 36, 'Test 38');
test(getDescentPeriods([10, 9, 8, 7, 6, 5, 6, 5, 4, 3, 2, 1]), 42, 'Test 39');
test(getDescentPeriods([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 64, 'Test 40');
test(getDescentPeriods([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 29, 'Test 41');
test(getDescentPeriods([50000, 49999, 49998, 49997, 49996, 49995, 49994, 49993, 49992, 49991, 49990, 49989, 49988, 49987, 49986, 49985, 49984, 49983, 49982, 49981]), 210, 'Test 42');
test(getDescentPeriods([5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 70, 'Test 43');
test(getDescentPeriods([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4]), 210, 'Test 44');
test(getDescentPeriods([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), 41, 'Test 45');
test(getDescentPeriods([1,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2]), 40, 'Test 46');
test(getDescentPeriods([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 54, 'Test 47');
test(getDescentPeriods([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 44, 'Test 48');
test(getDescentPeriods([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 49');
test(getDescentPeriods([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75]), 325, 'Test 50');
test(getDescentPeriods([10, 9, 8, 10, 9, 8, 7, 6, 5, 7, 6, 5, 4, 3, 2, 1]), 55, 'Test 51');
test(getDescentPeriods([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 210, 'Test 52');
test(getDescentPeriods([10, 9, 8, 7, 10, 9, 8, 7, 6, 5, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 86, 'Test 53');
test(getDescentPeriods([10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9]), 33, 'Test 54');
test(getDescentPeriods([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 75, 'Test 55');
test(getDescentPeriods([5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5]), 37, 'Test 56');
test(getDescentPeriods([5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 170, 'Test 57');
test(getDescentPeriods([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 19, 'Test 58');
test(getDescentPeriods([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 64, 'Test 59');
test(getDescentPeriods([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 496, 'Test 60');
test(getDescentPeriods([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 20, 'Test 61');
test(getDescentPeriods([7, 6, 5, 4, 3, 2, 1, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 109, 'Test 62');
test(getDescentPeriods([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80]), 231, 'Test 63');
test(getDescentPeriods([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 231, 'Test 64');
test(getDescentPeriods([10, 9, 8, 9, 8, 7, 8, 7, 6, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]), 60, 'Test 65');
test(getDescentPeriods([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 2, 1]), 38, 'Test 66');
test(getDescentPeriods([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85]), 136, 'Test 67');
test(getDescentPeriods([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 49, 'Test 68');
test(getDescentPeriods([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 110, 'Test 69');
test(getDescentPeriods([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 70');
test(getDescentPeriods([10,11,10,9,8,7,6,5,4,3,2,1,10,11,10,9,8,7,6,5,4,3,2,1,10,11,10,9,8,7,6,5,4,3,2,1]), 201, 'Test 71');
test(getDescentPeriods([10,9,8,9,8,7,6,7,8,9,8,7,6,5,6,7,8,9,8,7,6,5,4,5,6,7,8,9]), 62, 'Test 72');
test(getDescentPeriods([10,8,6,4,2,0,-2,-4,-6,-8,-10,10,8,6,4,2,0,-2,-4,-6,-8,-10]), 22, 'Test 73');
test(getDescentPeriods([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 25, 'Test 74');
test(getDescentPeriods([1, 2, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 19, 'Test 75');
test(getDescentPeriods([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 19, 'Test 76');
test(getDescentPeriods([3, 2, 1, 4, 3, 2, 1, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2, 1, 7, 6, 5, 4, 3, 2, 1]), 80, 'Test 77');
test(getDescentPeriods([10,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 147, 'Test 78');
test(getDescentPeriods([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 55, 'Test 79');
test(getDescentPeriods([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 28, 'Test 80');
test(getDescentPeriods([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 119, 'Test 81');
test(getDescentPeriods([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4]), 40, 'Test 82');
test(getDescentPeriods([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 29, 'Test 83');
test(getDescentPeriods([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 110, 'Test 84');
test(getDescentPeriods([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6]), 24, 'Test 85');
test(getDescentPeriods([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 5050, 'Test 86');
test(getDescentPeriods([1,2,3,2,1,2,3,4,3,2,1,2,3]), 22, 'Test 87');
test(getDescentPeriods([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5]), 44, 'Test 88');
test(getDescentPeriods([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 64, 'Test 89');
test(getDescentPeriods([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 20]), 211, 'Test 90');
test(getDescentPeriods([5, 6, 5, 4, 3, 2, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1]), 41, 'Test 91');
test(getDescentPeriods([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990, 99989, 99988, 99987, 99986, 99985, 99984, 99983, 99982, 99981, 99980]), 210, 'Test 92');
test(getDescentPeriods([5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 69, 'Test 93');
test(getDescentPeriods([10, 9, 10, 9, 8, 7, 8, 7, 6, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5]), 48, 'Test 94');
test(getDescentPeriods([3,2,1,0,-1,-2,-1,0,1,2,1,0,-1,-2,-3]), 45, 'Test 95');
test(getDescentPeriods([1, 3, 2, 1, 4, 3, 2, 1, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2, 1, 7, 6, 5, 4, 3, 2, 1]), 81, 'Test 96');
test(getDescentPeriods([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990]), 66, 'Test 97');
test(getDescentPeriods([7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 14, 'Test 98');
test(getDescentPeriods([1, 2, 1, 3, 2, 1, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 35, 'Test 99');
test(getDescentPeriods([5,5,5,5,5,5,5,5,5,5]), 10, 'Test 100');
test(getDescentPeriods([3,2,1,0,-1,-2,-3,-4,-5,-6]), 55, 'Test 101');
test(getDescentPeriods([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 15, 'Test 102');
test(getDescentPeriods([5,4,3,2,1,2,1,0,-1,-2,-1,0,1,2,1,0,-1,-2,-1,0]), 50, 'Test 103');
test(getDescentPeriods([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 325, 'Test 104');
test(getDescentPeriods([2, 1, 3, 2, 1, 0, 1, 2, 1, 0, -1]), 24, 'Test 105');
test(getDescentPeriods([5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 26, 'Test 106');
test(getDescentPeriods([10, 9, 8, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4]), 70, 'Test 107');
test(getDescentPeriods([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 351, 'Test 108');
test(getDescentPeriods([5, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), 72, 'Test 109');
test(getDescentPeriods([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 240, 'Test 110');
test(getDescentPeriods([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]), 11, 'Test 111');
test(getDescentPeriods([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 20, 'Test 112');
test(getDescentPeriods([7, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]), 79, 'Test 113');
test(getDescentPeriods([3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7]), 66, 'Test 114');
test(getDescentPeriods([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 240, 'Test 115');
test(getDescentPeriods([10, 9, 8, 7, 8, 7, 6, 5, 6, 5, 4, 3, 2, 1, 0, -1, -2]), 65, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

