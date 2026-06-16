// Test: 1363. Largest Multiple Of Three
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { largestMultipleOfThree } = require("./solution");

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

console.log("\n1363. Largest Multiple Of Three\n");

test(largestMultipleOfThree([5,5,5]), 555, 'Test 1');
test(largestMultipleOfThree([3,3,3]), 333, 'Test 2');
test(largestMultipleOfThree([3,3,3,3,3]), 33333, 'Test 3');
test(largestMultipleOfThree([9,9,9,9,9,9,9,9,9,9]), 9999999999, 'Test 4');
test(largestMultipleOfThree([1,2,3,4,5,6,7,8,9,0]), 9876543210, 'Test 5');
test(largestMultipleOfThree([0,0,0]), 0, 'Test 6');
test(largestMultipleOfThree([3,3,3,3]), 3333, 'Test 7');
test(largestMultipleOfThree([2,2,2,2,2,2,2]), 222222, 'Test 8');
test(largestMultipleOfThree([3,6,9,1,8]), 98631, 'Test 9');
test(largestMultipleOfThree([8,6,7,1,0]), 8760, 'Test 10');
test(largestMultipleOfThree([1,2,3,4,5,6,7,8,9]), 987654321, 'Test 11');
test(largestMultipleOfThree([1]), , 'Test 12');
test(largestMultipleOfThree([1,4,7,8,5,2]), 875421, 'Test 13');
test(largestMultipleOfThree([1,1,1,2,2,2,3,3,3]), 333222111, 'Test 14');
test(largestMultipleOfThree([3,6,9,3,6,9]), 996633, 'Test 15');
test(largestMultipleOfThree([5,5,5,5,5,5]), 555555, 'Test 16');
test(largestMultipleOfThree([1,1,1,2,2,2]), 222111, 'Test 17');
test(largestMultipleOfThree([1,4,7,2,5,8,3,6,9,0]), 9876543210, 'Test 18');
test(largestMultipleOfThree([2,2,2,2,2,2]), 222222, 'Test 19');
test(largestMultipleOfThree([8,1,9]), 981, 'Test 20');
test(largestMultipleOfThree([9,8,7,6,5,4,3,2,1,0]), 9876543210, 'Test 21');
test(largestMultipleOfThree([5,5,5,5,5,5,5]), 555555, 'Test 22');
test(largestMultipleOfThree([1,1,1,1,1,1,1,1,1,1]), 111111111, 'Test 23');
test(largestMultipleOfThree([2,5,8,1,4,7,0,3,6,9]), 9876543210, 'Test 24');
test(largestMultipleOfThree([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 25');
test(largestMultipleOfThree([0,0,0,0,0,0,0,0,0]), 0, 'Test 26');
test(largestMultipleOfThree([2,2,2,2,2,2,3,3,3,3,3]), 33333222222, 'Test 27');
test(largestMultipleOfThree([2,3,6,9,9,3,2,6,2,3]), 9966333222, 'Test 28');
test(largestMultipleOfThree([3,0,3,0,3,0,3,0,3,0]), 3333300000, 'Test 29');
test(largestMultipleOfThree([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 33333333333333333333, 'Test 30');
test(largestMultipleOfThree([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 99999999999999999999, 'Test 31');
test(largestMultipleOfThree([9,6,3,0,9,6,3,0,9,6,3,0,9,6,3,0,9,6,3,0]), 99999666663333300000, 'Test 32');
test(largestMultipleOfThree([5,5,5,5,5,5,0,0,0]), 555555000, 'Test 33');
test(largestMultipleOfThree([1,1,1,2,2,2,3,3,3,4,4,4]), 444333222111, 'Test 34');
test(largestMultipleOfThree([2,5,8,2,6,3,6,9,0,5]), 98665530, 'Test 35');
test(largestMultipleOfThree([8,7,6,5,4,3,2,1,0,9,8,7,6,5,4]), 988776655443210, 'Test 36');
test(largestMultipleOfThree([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 333333333222222222111111111, 'Test 37');
test(largestMultipleOfThree([5,5,5,5,5,5,5,5,5,5]), 555555555, 'Test 38');
test(largestMultipleOfThree([9,8,7,6,5,4,3,2,1,0,0,0,0]), 9876543210000, 'Test 39');
test(largestMultipleOfThree([7,8,5,2,3,6,1,4,9,0]), 9876543210, 'Test 40');
test(largestMultipleOfThree([1,2,3,4,5,6,7,8,9,0,0,0,0,0,0]), 987654321000000, 'Test 41');
test(largestMultipleOfThree([1,4,7,1,4,7,1,4,7]), 777444111, 'Test 42');
test(largestMultipleOfThree([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 22222222222222222221, 'Test 43');
test(largestMultipleOfThree([2,5,8,5,2,8,5,2,8]), 888555222, 'Test 44');
test(largestMultipleOfThree([5,8,4,2,7,9,3,6,0,1]), 9876543210, 'Test 45');
test(largestMultipleOfThree([2,3,4,5,6,7,8,9]), 9876543, 'Test 46');
test(largestMultipleOfThree([7,8,9,4,5,6,3,2,1,0,9,8,7,6,5,4]), 9988776655443210, 'Test 47');
test(largestMultipleOfThree([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), 99887766554433221100, 'Test 48');
test(largestMultipleOfThree([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 999888777666555444333222111000, 'Test 49');
test(largestMultipleOfThree([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 999888777666555444333222111, 'Test 50');
test(largestMultipleOfThree([6,3,2,1,0,9,8,7,4,5]), 9876543210, 'Test 51');
test(largestMultipleOfThree([4,7,4,7,4,7]), 777444, 'Test 52');
test(largestMultipleOfThree([3,3,3,6,6,6,9,9,9,0,0,0]), 999666333000, 'Test 53');
test(largestMultipleOfThree([3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0]), 33333333333330000000000000, 'Test 54');
test(largestMultipleOfThree([5,2,5,2,5,2,5,2,5]), 555552222, 'Test 55');
test(largestMultipleOfThree([5,8,3,9,2,6,1,0]), 9865320, 'Test 56');
test(largestMultipleOfThree([1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 999888777666555444333222111, 'Test 57');
test(largestMultipleOfThree([2,4,6,8,0,0,0,0,0,0]), 864000000, 'Test 58');
test(largestMultipleOfThree([0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 59');
test(largestMultipleOfThree([5,8,5,8,5,8,5,8,5,8,5,8,5,8,5,8,5,8,5,8]), 888888888855555555, 'Test 60');
test(largestMultipleOfThree([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 777777777777777, 'Test 61');
test(largestMultipleOfThree([2,4,6,8,0,1,3,5,7,9]), 9876543210, 'Test 62');
test(largestMultipleOfThree([1,1,1,1,1,1,1,1,1,1,1]), 111111111, 'Test 63');
test(largestMultipleOfThree([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 777777777777777777777777777, 'Test 64');
test(largestMultipleOfThree([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 65');
test(largestMultipleOfThree([1,4,7,1,4,7,1,4,7,1,4,7,1,4,7,1,4,7,1,4,7,1,4,7,1,4,7,1,4,7]), 777777777744444444441111111111, 'Test 66');
test(largestMultipleOfThree([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 111111111111111111, 'Test 67');
test(largestMultipleOfThree([1,1,1,1,1,1,1,1,1,1,1,1]), 111111111111, 'Test 68');
test(largestMultipleOfThree([1,4,7,2,5,8,3,6,9]), 987654321, 'Test 69');
test(largestMultipleOfThree([9,9,9,6,6,6,3,3,3,0,0,0]), 999666333000, 'Test 70');
test(largestMultipleOfThree([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 999999999999999, 'Test 71');
test(largestMultipleOfThree([7,7,7,7,7,7,7,7,7,7]), 777777777, 'Test 72');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

