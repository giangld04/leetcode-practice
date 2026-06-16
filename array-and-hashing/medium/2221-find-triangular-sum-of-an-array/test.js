// Test: 2221. Find Triangular Sum Of An Array
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { triangularSum } = require("./solution");

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

console.log("\n2221. Find Triangular Sum Of An Array\n");

test(triangularSum([1,2,3,4,5,6,7,8,9,0]), 6, 'Test 1');
test(triangularSum([4,3,2,1]), 0, 'Test 2');
test(triangularSum([1,1,1,1,1,1,1,1,1,1]), 2, 'Test 3');
test(triangularSum([1,2]), 3, 'Test 4');
test(triangularSum([1,2,3,4,5,6,7,8,9]), 0, 'Test 5');
test(triangularSum([0]), 0, 'Test 6');
test(triangularSum([1,0,1,0,1,0]), 6, 'Test 7');
test(triangularSum([5]), 5, 'Test 8');
test(triangularSum([1,0,1,0,1]), 8, 'Test 9');
test(triangularSum([1,0,1,0,1,0,1,0,1,0]), 6, 'Test 10');
test(triangularSum([9,9,9,9,9]), 4, 'Test 11');
test(triangularSum([0,0,0,0]), 0, 'Test 12');
test(triangularSum([6,7,3,5,9,4,2,8,1,0]), 0, 'Test 13');
test(triangularSum([0,0,0,0,0]), 0, 'Test 14');
test(triangularSum([1,2,3,4,5]), 8, 'Test 15');
test(triangularSum([4,8,12,16,20,24,28,32,36,40]), 4, 'Test 16');
test(triangularSum([9,9,9,9]), 2, 'Test 17');
test(triangularSum([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 2, 'Test 18');
test(triangularSum([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 6, 'Test 19');
test(triangularSum([6, 3, 8, 1, 7, 4, 9, 2, 5, 0, 6, 3, 8, 1, 7, 4, 9, 2, 5, 0]), 6, 'Test 20');
test(triangularSum([8,6,7,5,3,0,9,1,2,4,5,6,7,8,9,0,1,2,3,4]), 2, 'Test 21');
test(triangularSum([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 22');
test(triangularSum([1,3,5,7,9,1,3,5,7,9,1,3,5,7,9,1,3,5,7,9]), 0, 'Test 23');
test(triangularSum([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]), 6, 'Test 24');
test(triangularSum([1, 3, 5, 7, 9, 1, 3, 5, 7, 9, 1, 3, 5, 7, 9, 1, 3, 5, 7, 9, 1]), 6, 'Test 25');
test(triangularSum([2, 4, 6, 8, 0, 2, 4, 6, 8, 0]), 2, 'Test 26');
test(triangularSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 8, 'Test 27');
test(triangularSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 28');
test(triangularSum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6]), 8, 'Test 29');
test(triangularSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 30');
test(triangularSum([8, 1, 9, 1, 8, 1, 9, 1, 8, 1, 9, 1, 8, 1, 9, 1, 8, 1, 9, 1]), 4, 'Test 31');
test(triangularSum([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]), 1, 'Test 32');
test(triangularSum([1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0]), 4, 'Test 33');
test(triangularSum([7, 1, 5, 9, 2, 6, 5, 3, 5, 7]), 0, 'Test 34');
test(triangularSum([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), 4, 'Test 35');
test(triangularSum([0, 2, 4, 6, 8, 0, 2, 4, 6, 8, 0, 2, 4, 6, 8, 0, 2, 4, 6, 8]), 2, 'Test 36');
test(triangularSum([7, 3, 1, 4, 6, 2, 9, 0, 5]), 2, 'Test 37');
test(triangularSum([4, 4, 4, 4, 4, 4, 4, 4, 4, 4]), 8, 'Test 38');
test(triangularSum([7, 3, 5, 1, 9, 8, 7, 6, 4, 2, 0]), 8, 'Test 39');
test(triangularSum([7, 1, 3, 5, 2, 8, 6, 4, 9, 0, 7, 1, 3, 5, 2, 8, 6, 4, 9, 0]), 7, 'Test 40');
test(triangularSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 8, 'Test 41');
test(triangularSum([3, 6, 9, 2, 5, 8, 1, 4, 7, 0]), 8, 'Test 42');
test(triangularSum([6,2,8,4,0,1,3,5,7,9]), 8, 'Test 43');
test(triangularSum([0,9,1,8,2,7,3,6,4,5]), 2, 'Test 44');
test(triangularSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 4, 'Test 45');
test(triangularSum([5,6,7,8,9,0,1,2,3,4]), 4, 'Test 46');
test(triangularSum([3,6,9,2,5,8,1,4,7,0,3,6,9,2,5,8,1,4,7,0]), 2, 'Test 47');
test(triangularSum([3,1,4,1,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6]), 5, 'Test 48');
test(triangularSum([5,5,5,5,5,5,5,5,5,5]), 0, 'Test 49');
test(triangularSum([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 0, 'Test 50');
test(triangularSum([8,1,4,1,8,1,4,1,8,1,4]), 4, 'Test 51');
test(triangularSum([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 6, 'Test 52');
test(triangularSum([2,4,6,8,0,2,4,6,8,0,2,4,6,8,0,2,4,6,8,0]), 8, 'Test 53');
test(triangularSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 0, 'Test 54');
test(triangularSum([9,2,3,4,5,6,7,8,1,0,9,2,3,4,5,6,7,8,1,0]), 8, 'Test 55');
test(triangularSum([3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9]), 8, 'Test 56');
test(triangularSum([0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0]), 6, 'Test 57');
test(triangularSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 58');
test(triangularSum([1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2]), 2, 'Test 59');
test(triangularSum([6, 2, 9, 5, 4, 8, 7, 1, 3, 6, 2, 9, 5, 4, 8, 7, 1, 3, 6, 2]), 8, 'Test 60');
test(triangularSum([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 4, 'Test 61');
test(triangularSum([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 6, 'Test 62');
test(triangularSum([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1]), 6, 'Test 63');
test(triangularSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 0, 'Test 64');
test(triangularSum([5, 6, 7, 8, 9, 0, 1, 2, 3, 4]), 4, 'Test 65');
test(triangularSum([5,3,8,9,1,4,6,7]), 7, 'Test 66');
test(triangularSum([1, 3, 5, 7, 9, 1, 3, 5, 7, 9]), 0, 'Test 67');
test(triangularSum([8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), 6, 'Test 68');
test(triangularSum([9,8,7,6,5,4,3,2,1,0]), 4, 'Test 69');
test(triangularSum([8, 6, 4, 2, 0, 9, 7, 5, 3, 1, 8, 6, 4, 2, 0, 9, 7, 5, 3, 1]), 6, 'Test 70');
test(triangularSum([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 6, 'Test 71');
test(triangularSum([1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9]), 0, 'Test 72');
test(triangularSum([7,3,5,2,8,6,4,9,1,0,7,3,5,2,8,6,4,9,1,0]), 5, 'Test 73');
test(triangularSum([7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0]), 8, 'Test 74');
test(triangularSum([0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1]), 4, 'Test 75');
test(triangularSum([6, 2, 8, 4, 0, 1, 5, 9, 3, 7]), 2, 'Test 76');
test(triangularSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 77');
test(triangularSum([2, 4, 6, 8, 0, 2, 4, 6, 8, 0, 2]), 8, 'Test 78');
test(triangularSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), 0, 'Test 79');
test(triangularSum([3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 6, 'Test 80');
test(triangularSum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]), 5, 'Test 81');
test(triangularSum([0, 9, 0, 9, 0, 9, 0, 9, 0, 9]), 4, 'Test 82');
test(triangularSum([1, 0, 9, 0, 8, 0, 7, 0, 6, 0, 5, 0, 4, 0, 3, 0, 2, 0, 1, 0]), 7, 'Test 83');
test(triangularSum([7,3,1,2,5,8,6,4,9,0]), 5, 'Test 84');
test(triangularSum([1,9,1,9,1,9,1,9,1,9]), 0, 'Test 85');
test(triangularSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 86');
test(triangularSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 0, 'Test 87');
test(triangularSum([7, 1, 9, 3, 7, 1, 9, 3, 7, 1, 9, 3, 7, 1, 9, 3, 7, 1, 9, 3]), 0, 'Test 88');
test(triangularSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 8, 'Test 89');
test(triangularSum([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 4, 'Test 90');
test(triangularSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 6, 'Test 91');
test(triangularSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 92');
test(triangularSum([1, 9, 1, 9, 1, 9, 1, 9, 1, 9]), 0, 'Test 93');
test(triangularSum([9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]), 4, 'Test 94');
test(triangularSum([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4, 5, 9, 0, 4, 5, 2, 3, 5, 3]), 3, 'Test 95');
test(triangularSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), 4, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

