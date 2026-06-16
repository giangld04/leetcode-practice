// Test: 169. Majority Element
// 45 test cases from LeetCodeDataset
// Run: node test.js

const { majorityElement } = require("./solution");

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

console.log("\n169. Majority Element\n");

test(majorityElement([1,1,2,2,2,2,2]), 2, 'Test 1');
test(majorityElement([1,1,1,1,2,2,3]), 1, 'Test 2');
test(majorityElement([2,2,1,1,1,2,2]), 2, 'Test 3');
test(majorityElement([-1,100,-1,-1,-1,-1,1,1,1,1]), -1, 'Test 4');
test(majorityElement([1,2,3,4,5,4,4,4,4]), 4, 'Test 5');
test(majorityElement([4,4,4,4,2,2,3]), 4, 'Test 6');
test(majorityElement([1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1,1,1,1,1]), 1000000000, 'Test 7');
test(majorityElement([5,5,4,5,5,6,5,5]), 5, 'Test 8');
test(majorityElement([1,2,3,4,5,1,1,1,1,1]), 1, 'Test 9');
test(majorityElement([1000000000,-1000000000,1000000000,1000000000,1000000000]), 1000000000, 'Test 10');
test(majorityElement([1,1,1,1,2,2,3,3,3,3,3]), 3, 'Test 11');
test(majorityElement([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 12');
test(majorityElement([7,7,7,7,7,7,7,7,0,0,0,0,0]), 7, 'Test 13');
test(majorityElement([-1000000000,-1000000000,-1000000000,-1000000000,-1000000000,-1000000000,1,1,1,1,1]), -1000000000, 'Test 14');
test(majorityElement([1,1,2,2,1,1,1]), 1, 'Test 15');
test(majorityElement([8,8,8,8,8,8,8,8,8,8]), 8, 'Test 16');
test(majorityElement([5,5,5,5,5,5,5,5,5,5,1,1,1,1,1]), 5, 'Test 17');
test(majorityElement([1,2,3,4,5,6,7,8,9,1,1,1,1,1,1]), 1, 'Test 18');
test(majorityElement([3,2,3]), 3, 'Test 19');
test(majorityElement([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 20');
test(majorityElement([4,4,4,4,4,4,5,5,5,5]), 4, 'Test 21');
test(majorityElement([7,7,7,7,7,7,7,7,7,8,8,8,8]), 7, 'Test 22');
test(majorityElement([4,4,4,4,1,2,3]), 4, 'Test 23');
test(majorityElement([100,200,100,300,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]), 100, 'Test 24');
test(majorityElement([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 9, 'Test 25');
test(majorityElement([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 26');
test(majorityElement([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 0, 'Test 27');
test(majorityElement([1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1,2,3]), 1000000000, 'Test 28');
test(majorityElement([7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7]), 7, 'Test 29');
test(majorityElement([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,1]), 1, 'Test 30');
test(majorityElement([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,1,1,1,1,1]), 1, 'Test 31');
test(majorityElement([-1,-1,-1,-1,-1,1,2,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), -1, 'Test 32');
test(majorityElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 33');
test(majorityElement([-1,100,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), -1, 'Test 34');
test(majorityElement([1,2,3,4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 35');
test(majorityElement([1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 36');
test(majorityElement([1,1,2,2,3,3,4,4,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 37');
test(majorityElement([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,11,1,12,1,13,1,14,1,15,1,16,1,17,1,18,1,19,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 38');
test(majorityElement([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 39');
test(majorityElement([1000000000,1000000000,1000000000,500000000,500000000,500000000,1000000000,1000000000,1000000000,1000000000]), 1000000000, 'Test 40');
test(majorityElement([10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,10,10,10,10,10]), 10, 'Test 41');
test(majorityElement([5,4,3,2,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 42');
test(majorityElement([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,7]), 7, 'Test 43');
test(majorityElement([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3]), 2, 'Test 44');
test(majorityElement([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 45');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

