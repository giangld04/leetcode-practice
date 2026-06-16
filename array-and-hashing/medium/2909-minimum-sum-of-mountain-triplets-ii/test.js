// Test: 2909. Minimum Sum Of Mountain Triplets Ii
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { minimumSum } = require("./solution");

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

console.log("\n2909. Minimum Sum Of Mountain Triplets Ii\n");

test(minimumSum([1,3,1,3,1,4,1,3,1]), 5, 'Test 1');
test(minimumSum([100000000, 1, 100000000, 2, 100000000]), 100000003, 'Test 2');
test(minimumSum([5,4,8,7,10,2]), 13, 'Test 3');
test(minimumSum([10,9,8,7,6,5,4,3,2,1]), -1, 'Test 4');
test(minimumSum([9,8,7,6,5,4,3,2,1]), -1, 'Test 5');
test(minimumSum([1,3,1,4,1,5,1,6,1]), 5, 'Test 6');
test(minimumSum([3,1,4,1,5,9,2,6,5,3,5]), 6, 'Test 7');
test(minimumSum([1,100000000,2,99999999,3,99999998]), 100000003, 'Test 8');
test(minimumSum([1,3,1,3,1]), 5, 'Test 9');
test(minimumSum([1,2,3,4,5]), -1, 'Test 10');
test(minimumSum([10,20,30,15,25,35,40,10]), 35, 'Test 11');
test(minimumSum([1,2,1,2,1,2,1]), 4, 'Test 12');
test(minimumSum([1,2,3,4,5,6,7,8,9]), -1, 'Test 13');
test(minimumSum([1,2,3,4,5,6]), -1, 'Test 14');
test(minimumSum([6,5,4,3,4,5]), -1, 'Test 15');
test(minimumSum([5,4,3,2,1]), -1, 'Test 16');
test(minimumSum([3,3,3,3,3,3,3]), -1, 'Test 17');
test(minimumSum([1,5,3,7,6,8]), 9, 'Test 18');
test(minimumSum([8,6,1,5,3]), 9, 'Test 19');
test(minimumSum([1,3,1,3,1,3,1]), 5, 'Test 20');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1]), 4, 'Test 21');
test(minimumSum([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 4, 'Test 22');
test(minimumSum([8, 1, 2, 3, 4, 5, 6, 7, 8]), -1, 'Test 23');
test(minimumSum([2, 1, 2, 3, 2, 3, 4, 3, 4, 5, 6, 5, 6, 7, 8]), 6, 'Test 24');
test(minimumSum([5, 1, 3, 7, 2, 6, 4, 8, 9]), 6, 'Test 25');
test(minimumSum([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10]), 31, 'Test 26');
test(minimumSum([9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 27');
test(minimumSum([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93, 9, 92, 10, 91]), 103, 'Test 28');
test(minimumSum([15, 10, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]), -1, 'Test 29');
test(minimumSum([5, 10, 15, 10, 5, 20, 25, 20, 15, 10, 5]), 20, 'Test 30');
test(minimumSum([10, 9, 8, 7, 6, 5, 11, 12, 13, 14, 15]), -1, 'Test 31');
test(minimumSum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0]), 1, 'Test 32');
test(minimumSum([8, 6, 1, 5, 3, 7, 2, 4, 9, 10, 11]), 6, 'Test 33');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4, 'Test 34');
test(minimumSum([7, 7, 7, 8, 7, 7, 7]), 22, 'Test 35');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]), 4, 'Test 36');
test(minimumSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), -1, 'Test 37');
test(minimumSum([1, 2, 3, 2, 1, 2, 3, 2, 1]), 4, 'Test 38');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 4, 'Test 39');
test(minimumSum([5, 4, 3, 2, 1, 2, 3, 4, 5, 6]), -1, 'Test 40');
test(minimumSum([10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 12, 'Test 41');
test(minimumSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 100, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 102, 'Test 42');
test(minimumSum([5, 1, 4, 2, 7, 3, 6, 8, 0, 9]), 3, 'Test 43');
test(minimumSum([3, 5, 1, 8, 4, 7, 6, 9, 2, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 7, 'Test 44');
test(minimumSum([5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5]), 7, 'Test 45');
test(minimumSum([5, 1, 4, 3, 7, 6, 8]), 8, 'Test 46');
test(minimumSum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), -1, 'Test 47');
test(minimumSum([7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5]), 20, 'Test 48');
test(minimumSum([8, 1, 5, 6, 3, 2, 4, 7]), 6, 'Test 49');
test(minimumSum([8, 1, 5, 3, 7, 2, 6, 4, 9]), 6, 'Test 50');
test(minimumSum([8, 6, 1, 5, 3, 7, 2, 10, 4, 9, 11, 13, 12]), 6, 'Test 51');
test(minimumSum([9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), -1, 'Test 52');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4, 'Test 53');
test(minimumSum([1, 5, 1, 4, 1, 3, 1, 2, 1]), 4, 'Test 54');
test(minimumSum([100, 101, 99, 102, 98, 103, 97, 104, 96]), 297, 'Test 55');
test(minimumSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4, 'Test 56');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4, 'Test 57');
test(minimumSum([1, 100, 2, 99, 3, 98, 4, 97, 5, 96]), 103, 'Test 58');
test(minimumSum([1, 2, 3, 4, 5, 10, 1, 2, 3, 4, 5]), 4, 'Test 59');
test(minimumSum([3, 2, 1, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 60');
test(minimumSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 61');
test(minimumSum([5, 1, 4, 2, 3, 6, 8, 7, 9, 10, 11, 12, 13, 14, 15]), 7, 'Test 62');
test(minimumSum([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 21]), -1, 'Test 63');
test(minimumSum([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 64');
test(minimumSum([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8]), 6, 'Test 65');
test(minimumSum([1, 2, 3, 4, 5, 4, 3, 2, 1]), 4, 'Test 66');
test(minimumSum([1, 100, 2, 99, 3, 98, 4, 97, 5]), 103, 'Test 67');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 68');
test(minimumSum([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), -1, 'Test 69');
test(minimumSum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7]), 3, 'Test 70');
test(minimumSum([1, 2, 100, 2, 100, 2, 100, 2, 100, 2, 100, 2, 100, 2, 100, 2, 100, 2, 100]), 103, 'Test 71');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 13, 12, 11, 10]), 22, 'Test 72');
test(minimumSum([10, 20, 30, 40, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0]), 25, 'Test 73');
test(minimumSum([5, 1, 3, 2, 4, 6, 7, 8, 9, 10, 1]), 4, 'Test 74');
test(minimumSum([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1]), 4, 'Test 75');
test(minimumSum([9, 8, 7, 6, 5, 10, 15, 20, 25, 1, 2, 3, 4, 5]), 16, 'Test 76');
test(minimumSum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 6, 'Test 77');
test(minimumSum([100, 200, 150, 250, 100, 300, 50, 400, 250, 500, 200, 450, 300, 550, 600, 525, 475, 650, 700, 625]), 300, 'Test 78');
test(minimumSum([5, 1, 3, 7, 2, 6, 4, 8]), 6, 'Test 79');
test(minimumSum([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 13, 'Test 80');
test(minimumSum([9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15]), -1, 'Test 81');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 4, 'Test 82');
test(minimumSum([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), -1, 'Test 83');
test(minimumSum([1, 2, 3, 4, 5, 6, 5, 4, 5, 6, 7, 8, 7, 6, 5, 4, 5, 6, 7, 8, 9]), 10, 'Test 84');
test(minimumSum([10, 20, 10, 30, 5, 40, 25, 50, 15]), 35, 'Test 85');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1]), 4, 'Test 86');
test(minimumSum([1, 1, 2, 2, 3, 3, 2, 2, 1, 1]), 4, 'Test 87');
test(minimumSum([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]), 4, 'Test 88');
test(minimumSum([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 4, 'Test 89');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 4, 'Test 90');
test(minimumSum([10, 20, 5, 15, 10, 25, 5]), 20, 'Test 91');
test(minimumSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12]), -1, 'Test 92');
test(minimumSum([1, 5, 3, 7, 2, 6, 4, 8]), 6, 'Test 93');
test(minimumSum([7, 1, 3, 5, 9, 6, 8, 2, 4]), 6, 'Test 94');
test(minimumSum([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4, 'Test 95');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]), 4, 'Test 96');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4, 'Test 97');
test(minimumSum([100, 200, 300, 400, 500, 600, 500, 400, 300, 200, 100]), 400, 'Test 98');
test(minimumSum([100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 1]), -1, 'Test 99');
test(minimumSum([1, 2, 3, 4, 5, 6, 7, 8, 9]), -1, 'Test 100');
test(minimumSum([2, 3, 1, 4, 6, 5, 8, 7, 9, 10, 11, 12]), 6, 'Test 101');
test(minimumSum([8, 1, 9, 2, 10, 3, 11, 4, 12, 5, 13]), 12, 'Test 102');
test(minimumSum([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 11, 12, 13, 14, 15]), 13, 'Test 103');
test(minimumSum([10, 20, 15, 25, 10, 30, 5, 40, 25, 50]), 30, 'Test 104');
test(minimumSum([2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1]), 5, 'Test 105');
test(minimumSum([10, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10]), -1, 'Test 106');
test(minimumSum([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), -1, 'Test 107');
test(minimumSum([5, 4, 3, 2, 1, 11, 12, 13, 14, 15]), -1, 'Test 108');
test(minimumSum([1, 2, 3, 2, 1, 4, 5, 4, 3, 2, 1]), 4, 'Test 109');
test(minimumSum([7, 1, 5, 3, 6, 4, 2, 8, 10, 1, 12]), 4, 'Test 110');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

