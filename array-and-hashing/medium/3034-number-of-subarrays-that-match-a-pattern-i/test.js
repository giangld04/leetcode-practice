// Test: 3034. Number Of Subarrays That Match A Pattern I
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { countMatchingSubarrays } = require("./solution");

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

console.log("\n3034. Number Of Subarrays That Match A Pattern I\n");

test(countMatchingSubarrays([1,4,4,1,3,5,5,3], [1,0,-1]), 2, 'Test 1');
test(countMatchingSubarrays([1,3,2,3,1,2], [1,-1,1,-1]), 1, 'Test 2');
test(countMatchingSubarrays([1,2,3,4,5,6], [1,1]), 4, 'Test 3');
test(countMatchingSubarrays([1,1,1,1,1], [0,0,0]), 2, 'Test 4');
test(countMatchingSubarrays([5,4,3,2,1], [-1,-1,-1]), 2, 'Test 5');
test(countMatchingSubarrays([1,2,2,3,4,3,5], [1,0,-1,1]), 0, 'Test 6');
test(countMatchingSubarrays([1,2,3,2,3,4], [1,-1,1]), 1, 'Test 7');
test(countMatchingSubarrays([1,2,2,3,4,4,5], [1,0,1,0]), 0, 'Test 8');
test(countMatchingSubarrays([3, 5, 2, 8, 6, 4, 7], [1, -1, 1, -1, 1]), 0, 'Test 9');
test(countMatchingSubarrays([1,3,5,7,9,11,13,15,17], [1,1,1,1,1,1,1]), 2, 'Test 10');
test(countMatchingSubarrays([1,2,3,2,1,2,3,4,5,4,3,2,1], [1,-1,1,-1,1,-1,1]), 0, 'Test 11');
test(countMatchingSubarrays([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1], [1, 1, 1, 1, 1, -1, -1, -1, -1]), 1, 'Test 12');
test(countMatchingSubarrays([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5], [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), 4, 'Test 13');
test(countMatchingSubarrays([5,4,3,2,1,2,3,4,5], [-1,-1,-1,-1,1,1,1]), 1, 'Test 14');
test(countMatchingSubarrays([9,8,7,6,5,4,3,2,1], [-1,-1,-1,-1,-1,-1,-1,-1]), 1, 'Test 15');
test(countMatchingSubarrays([2,1,3,1,4,1,5,1,6], [-1,1,-1,1,-1,1]), 2, 'Test 16');
test(countMatchingSubarrays([1,2,3,4,5,4,3,2,1,2,3,4,5,6], [1,1,-1,-1,1,1]), 0, 'Test 17');
test(countMatchingSubarrays([100,200,150,150,200,250,300,200,100,100,200,300,400,500,600], [1,-1,0,1,1,-1,1,0,1,1,1,1]), 0, 'Test 18');
test(countMatchingSubarrays([1, 3, 2, 4, 3, 5, 4, 6, 5, 7], [1, -1, 1, -1, 1, -1, 1]), 2, 'Test 19');
test(countMatchingSubarrays([1,3,5,3,1,3,5,3,1], [1,-1,1,-1,1,-1,1,-1]), 0, 'Test 20');
test(countMatchingSubarrays([10,20,15,15,20,25,30,20,10], [1,-1,0,1,1,-1]), 0, 'Test 21');
test(countMatchingSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5], [0,0,0,0,0,0,0]), 2, 'Test 22');
test(countMatchingSubarrays([1,1,1,2,2,2,3,3,3,4,4,4], [0,0,1,0,0,1,0,0,1]), 1, 'Test 23');
test(countMatchingSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [0,1,0,1,0]), 3, 'Test 24');
test(countMatchingSubarrays([1, 3, 2, 2, 4, 3, 3, 5, 4, 4], [1,-1,0,1,-1,0,1,-1]), 1, 'Test 25');
test(countMatchingSubarrays([1,2,3,2,1,2,3,2,1,2,3], [1,-1,1,-1,1,-1,1,-1,1]), 0, 'Test 26');
test(countMatchingSubarrays([5,5,4,4,3,3,2,2,1,1], [-1,-1,-1,-1,-1,-1,-1,-1]), 0, 'Test 27');
test(countMatchingSubarrays([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1], [1, -1, 1, -1, 1, -1, 1, -1, 1]), 0, 'Test 28');
test(countMatchingSubarrays([10,10,10,10,10,10,10,10], [0,0,0,0,0,0]), 2, 'Test 29');
test(countMatchingSubarrays([10, 10, 10, 10, 10, 10], [0, 0, 0]), 3, 'Test 30');
test(countMatchingSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0]), 7, 'Test 31');
test(countMatchingSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [0, 1, 0, 1, 0, 1, 0]), 2, 'Test 32');
test(countMatchingSubarrays([1,3,2,4,3,5,6,7,8], [1,-1,1,1,-1]), 0, 'Test 33');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 34');
test(countMatchingSubarrays([1,2,3,4,3,2,1,2,3,4,5], [1,-1,1,-1,1,1]), 0, 'Test 35');
test(countMatchingSubarrays([2, 1, 3, 4, 3, 5, 6, 5, 7, 8], [-1, 1, 1, -1, 1, 1, -1, 1]), 1, 'Test 36');
test(countMatchingSubarrays([1,3,2,4,3,5,6,7,8], [1,-1,1,1,0]), 0, 'Test 37');
test(countMatchingSubarrays([1,2,2,2,2,2,2,2,2,2,2], [0,1,0,1,0,1,0,1,0,1]), 0, 'Test 38');
test(countMatchingSubarrays([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], [0, 0, 0, 0, 0, 0, 0]), 3, 'Test 39');
test(countMatchingSubarrays([1,3,2,4,3,5,6,4,3,5,7], [1,-1,1,1,-1,1]), 0, 'Test 40');
test(countMatchingSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], [1,-1,1,-1,1,-1,1,-1,1,-1,1,-1]), 2, 'Test 41');
test(countMatchingSubarrays([1,2,3,4,5,4,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], [1,1,1,-1,1,1,1,1,1,-1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1]), 0, 'Test 42');
test(countMatchingSubarrays([1,3,2,4,3,5,6,4,3,2,1,2,3,4], [1,-1,1,0,-1,1]), 0, 'Test 43');
test(countMatchingSubarrays([1,2,3,4,3,4,5,6,5,4], [1,1,-1,1,1,-1,1]), 0, 'Test 44');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 2, 'Test 45');
test(countMatchingSubarrays([1,3,2,4,5,3,6,7], [1,-1,1,0,1]), 0, 'Test 46');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10], [1,1,1,1,1,1,1]), 3, 'Test 47');
test(countMatchingSubarrays([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1], [1, -1, 1, 1, -1, 1, -1, 1]), 0, 'Test 48');
test(countMatchingSubarrays([1,2,2,3,3,4,5,5,6,6], [1,0,1,0,1,0,1,0]), 0, 'Test 49');
test(countMatchingSubarrays([10,10,10,10,10], [0,0,0]), 2, 'Test 50');
test(countMatchingSubarrays([1,2,1,2,1,2,1,2,1,2], [1,-1,1,-1,1,-1]), 2, 'Test 51');
test(countMatchingSubarrays([10,20,15,10,15,25,30,20], [1,-1,1,1,-1]), 0, 'Test 52');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,1,1,1,1,1,1,1,1,1,1,1]), 3, 'Test 53');
test(countMatchingSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], [0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 2, 'Test 54');
test(countMatchingSubarrays([1,2,2,1,1,2,2,1,1], [1,0,-1,0,1,0,-1]), 1, 'Test 55');
test(countMatchingSubarrays([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5], [0, 1, 0, 1, 0, 1, 0, 1, 0]), 0, 'Test 56');
test(countMatchingSubarrays([10, 20, 15, 15, 25, 30, 20, 10, 5], [1, -1, 0, 1, -1, -1]), 0, 'Test 57');
test(countMatchingSubarrays([1, 3, 2, 4, 3, 5, 6, 5, 4, 3, 2, 1], [1, -1, 1, 1, -1, 1, -1, -1]), 0, 'Test 58');
test(countMatchingSubarrays([10,20,30,20,10,5,15,25,35,25,15], [1,1,-1,-1,1,1,1,-1]), 0, 'Test 59');
test(countMatchingSubarrays([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], [1,0,1,0,0,1,0,0,1,0,0,1,0]), 0, 'Test 60');
test(countMatchingSubarrays([1, 3, 2, 4, 3, 5, 4, 6, 5, 7], [1,-1,1,-1,1,-1]), 2, 'Test 61');
test(countMatchingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9], [1,1,1,1,1,1,1]), 2, 'Test 62');
test(countMatchingSubarrays([1,2,2,3,3,4,4,5,5,6,6,7], [1,0,1,0,1,0,1,0,1]), 2, 'Test 63');
test(countMatchingSubarrays([5,3,8,6,7,4,9,10,11,10,9], [-1,1,1,-1,1,1,-1,-1]), 0, 'Test 64');
test(countMatchingSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], [1,-1,1,-1,1,-1,1]), 1, 'Test 65');
test(countMatchingSubarrays([100, 200, 150, 100, 50, 100, 150, 200, 250, 300], [1, -1, 1, 1, 1, 1, 1]), 0, 'Test 66');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10], [1,1,1,1,1,1,1,1]), 2, 'Test 67');
test(countMatchingSubarrays([7,7,7,7,7,7,7,7,7,7], [0,0,0,0,0]), 5, 'Test 68');
test(countMatchingSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9], [-1, -1, -1, -1, -1, 1, 1, 1, 1, 1]), 1, 'Test 69');
test(countMatchingSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1], [-1,-1,-1,-1,-1,-1,-1]), 2, 'Test 70');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,1,1,1,1,1,1,1,1,1,1]), 4, 'Test 71');
test(countMatchingSubarrays([1,2,3,4,3,2,1,2,3,4,5,6], [1,1,-1,-1,1,1,1]), 0, 'Test 72');
test(countMatchingSubarrays([5,6,7,8,9,10,11,12,13,14], [1,1,1,1,1,1,1]), 3, 'Test 73');
test(countMatchingSubarrays([7,8,9,10,11,10,9,8,7,6,5,4,3,2,1], [1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), 1, 'Test 74');
test(countMatchingSubarrays([1,1,2,2,3,3,4,4,5,5], [0,1,0,1,0,1,0,1]), 1, 'Test 75');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10], [1,1,1,1,1,1,1,1,1]), 1, 'Test 76');
test(countMatchingSubarrays([1,3,2,3,4,5,4,3,2], [1,-1,1,1,-1,-1,1]), 0, 'Test 77');
test(countMatchingSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [-1, -1, -1, -1, -1, -1, -1]), 3, 'Test 78');
test(countMatchingSubarrays([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), 1, 'Test 79');
test(countMatchingSubarrays([1,1,2,2,1,1,2,2,1,1], [0,1,0,-1,0,1,0,-1]), 1, 'Test 80');
test(countMatchingSubarrays([1,1,2,2,3,3,4,4,5,5], [0,1,0,1,0,1,0]), 2, 'Test 81');
test(countMatchingSubarrays([1,3,2,4,3,5,4,6,5,7,6,8], [1,-1,1,-1,1,-1,1,-1]), 2, 'Test 82');
test(countMatchingSubarrays([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), 2, 'Test 83');
test(countMatchingSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], [1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1]), 2, 'Test 84');
test(countMatchingSubarrays([1, 2, 3, 4, 3, 4, 5, 6, 5, 6], [1, 1, -1, 1, 1, -1, 1]), 0, 'Test 85');
test(countMatchingSubarrays([9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5], [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), 4, 'Test 86');
test(countMatchingSubarrays([5,6,7,8,9,10,9,8,7,6,5], [1,1,1,-1,-1,-1,-1,-1,-1]), 0, 'Test 87');
test(countMatchingSubarrays([1,3,2,4,5,3,6,7,8], [1,-1,1,1,0]), 0, 'Test 88');
test(countMatchingSubarrays([9, 8, 7, 8, 7, 8, 7, 8, 7, 8], [-1,1,-1,1,-1]), 2, 'Test 89');
test(countMatchingSubarrays([9,8,7,6,5,4,3,2,1], [-1,-1,-1,-1,-1,-1,-1]), 2, 'Test 90');
test(countMatchingSubarrays([1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0,0]), 1, 'Test 91');
test(countMatchingSubarrays([1,3,2,4,5,3,4,5,6,7,5,6,7,8,9,7,8,9,10,11], [1,-1,1,1,0,-1,1,1,0,-1,1,1,0,-1]), 0, 'Test 92');
test(countMatchingSubarrays([1, 2, 2, 3, 3, 3, 2, 2, 1, 1, 1, 2, 2, 3, 3], [1, 0, 1, 0, -1, 0, -1, 0, 1]), 0, 'Test 93');
test(countMatchingSubarrays([1,2,2,3,4,5,5,6,7,8,8,9], [1,0,1,1,0,1,0,1,0]), 0, 'Test 94');
test(countMatchingSubarrays([10,9,8,7,6,5,4,3,2,1], [-1,-1,-1,-1,-1,-1,-1,-1]), 2, 'Test 95');
test(countMatchingSubarrays([10,10,10,10,10], [0,0,0,0]), 1, 'Test 96');
test(countMatchingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 97');
test(countMatchingSubarrays([1, 2, 3, 4, 3, 2, 1, 2, 3, 4], [1,1,-1,-1,1,1]), 0, 'Test 98');
test(countMatchingSubarrays([1,2,3,1,2,3,4,5,6,7], [1,-1,1,1,1,1,0]), 0, 'Test 99');
test(countMatchingSubarrays([5, 3, 5, 3, 5, 3, 5, 3, 5, 3], [1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 100');
test(countMatchingSubarrays([1,2,2,3,3,4,5], [1,0,1,0,1]), 1, 'Test 101');
test(countMatchingSubarrays([7,7,7,7,7,7,7,7,7], [0,0,0,0,0,0,0]), 2, 'Test 102');
test(countMatchingSubarrays([5,5,5,5,5,5,5,5,5,5,5], [0,0,0,0,0,0,0,0,0]), 2, 'Test 103');
test(countMatchingSubarrays([10,9,8,7,6,5,4,3,2,1], [-1,-1,-1,-1,-1,-1,-1]), 3, 'Test 104');
test(countMatchingSubarrays([100,90,80,70,60,50,40,30,20,10], [-1,-1,-1,-1,-1,-1,-1]), 3, 'Test 105');
test(countMatchingSubarrays([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5], [1,-1,1,0,-1,1,0,1]), 0, 'Test 106');
test(countMatchingSubarrays([3,3,3,2,2,1,1,2,2,3,3,4,4,5,5,4,4,3,3,2,2,1,1], [0,-1,-1,0,1,1,0,-1,-1,0,1,1]), 0, 'Test 107');
test(countMatchingSubarrays([1,3,2,4,3,5,4,6,5], [1,-1,1,-1,1,-1]), 2, 'Test 108');
test(countMatchingSubarrays([10, 20, 10, 20, 10, 20, 10, 20], [1,-1,1,-1,1]), 2, 'Test 109');
test(countMatchingSubarrays([1,3,1,5,1,7,1,9,1,11,1,13,1,15,1,17,1,19], [1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1]), 1, 'Test 110');
test(countMatchingSubarrays([1,3,2,3,1,3,2,3,1,3,2,3], [1,-1,1,-1,1,-1,1,-1,1,-1]), 1, 'Test 111');
test(countMatchingSubarrays([1, 2, 3, 2, 3, 4, 5, 4], [1, -1, 1, 1]), 1, 'Test 112');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

