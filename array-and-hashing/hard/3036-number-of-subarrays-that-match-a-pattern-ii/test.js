// Test: 3036. Number Of Subarrays That Match A Pattern Ii
// 111 test cases from LeetCodeDataset
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

console.log("\n3036. Number Of Subarrays That Match A Pattern Ii\n");

test(countMatchingSubarrays([1,3,2,3,1,4,3,2], [1,-1,1,-1]), 2, 'Test 1');
test(countMatchingSubarrays([1,2,2,3,4,5], [1,0,1]), 1, 'Test 2');
test(countMatchingSubarrays([1,4,4,1,3,5,5,3], [1,0,-1]), 2, 'Test 3');
test(countMatchingSubarrays([5,5,5,5,5,5], [0,0,0]), 3, 'Test 4');
test(countMatchingSubarrays([1,2,2,3,4], [1,0,1]), 1, 'Test 5');
test(countMatchingSubarrays([1,2,2,3,3,4], [1,0,1,0]), 1, 'Test 6');
test(countMatchingSubarrays([1,2,3,4,5,6], [1,1]), 4, 'Test 7');
test(countMatchingSubarrays([1,1,1,1,1], [0,0,0]), 2, 'Test 8');
test(countMatchingSubarrays([5,4,3,2,1], [-1,-1,-1]), 2, 'Test 9');
test(countMatchingSubarrays([1,3,2,3,4,5], [1,-1,1]), 1, 'Test 10');
test(countMatchingSubarrays([1,1,1,1,1], [0,0]), 3, 'Test 11');
test(countMatchingSubarrays([1,2,2,3,3,4,4,5], [1,0,0,1,0,0]), 0, 'Test 12');
test(countMatchingSubarrays([1,3,2,4,3,5], [1,-1,1]), 2, 'Test 13');
test(countMatchingSubarrays([10,10,10,10], [0,0]), 2, 'Test 14');
test(countMatchingSubarrays([10,9,8,7,6,5], [-1,-1,-1]), 3, 'Test 15');
test(countMatchingSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0,0,0,0,0,0]), 2, 'Test 16');
test(countMatchingSubarrays([1,2,3,2,1,2,3,2,1,2], [1,-1,1,-1,1]), 0, 'Test 17');
test(countMatchingSubarrays([1,2,3,2,1,2,3,4,5,4,3,2,1], [1,-1,1,1,1,-1,-1]), 0, 'Test 18');
test(countMatchingSubarrays([7,10,10,8,10,5,6,7,8,9], [1,0,-1,1,1,-1,1,1]), 0, 'Test 19');
test(countMatchingSubarrays([10, 9, 8, 9, 10, 11, 10, 9, 8, 9, 10], [-1, -1, 1, 1, -1, -1, 1]), 0, 'Test 20');
test(countMatchingSubarrays([1,2,2,3,3,4,5,5,6], [1,0,1,0,1,0,1]), 0, 'Test 21');
test(countMatchingSubarrays([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6], [1, 0, 0, 1, 0, 0, 1]), 0, 'Test 22');
test(countMatchingSubarrays([1, 2, 1, 3, 2, 4, 3, 5, 4, 6], [1, -1, 1, -1, 1, -1]), 2, 'Test 23');
test(countMatchingSubarrays([1,1,1,2,2,2,3,3,3,2,2,2,1,1,1,1,2,2,2,2,3,3,3,3,2,2,2,2,1,1,1,1], [0,1,0,1,0,1,-1,0,-1,0,-1,0,-1,0,-1,0,1,0,1,0,1,0,1,-1,0,-1,0,-1,0,-1,0]), 0, 'Test 24');
test(countMatchingSubarrays([1, 2, 1, 3, 2, 1, 4, 3, 2, 1, 5, 4, 3, 2, 1], [1, -1, 1, -1, 1]), 0, 'Test 25');
test(countMatchingSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [-1, -1, -1, -1, -1]), 5, 'Test 26');
test(countMatchingSubarrays([1,2,3,3,3,2,1,1,1,2,3], [1,0,0,-1,-1,0,0,1,1]), 1, 'Test 27');
test(countMatchingSubarrays([1,2,3,4,5,4,5,6,7,8], [1,1,-1,1,1,-1,1,1]), 0, 'Test 28');
test(countMatchingSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 29');
test(countMatchingSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0]), 3, 'Test 30');
test(countMatchingSubarrays([1,3,2,4,3,5,7,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9], [1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1]), 0, 'Test 31');
test(countMatchingSubarrays([10,9,8,8,7,6,5,4,3,2,1], [-1,-1,0,-1,-1,-1,-1,-1,-1]), 1, 'Test 32');
test(countMatchingSubarrays([1,3,2,4,3,5,4,6,5,7], [1,-1,1,-1,1,-1,1]), 2, 'Test 33');
test(countMatchingSubarrays([1,2,3,2,1,2,3,2,1], [1,-1,1,-1,1,-1]), 0, 'Test 34');
test(countMatchingSubarrays([1,2,3,4,5,6,5,4,3,2,1], [1,1,1,-1,-1,-1]), 1, 'Test 35');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10], [1,1,1,1,1]), 5, 'Test 36');
test(countMatchingSubarrays([1,2,3,4,5,6,5,4,3,2,1], [1,1,1,1,1,-1,-1,-1,-1,-1]), 1, 'Test 37');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10], [1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,1,1,1,1,1,1]), 0, 'Test 38');
test(countMatchingSubarrays([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1], [1, 1, -1, -1, 1, 1]), 0, 'Test 39');
test(countMatchingSubarrays([100, 200, 150, 250, 200, 300, 250, 350, 300, 400], [1, -1, 1, -1, 1, -1, 1]), 2, 'Test 40');
test(countMatchingSubarrays([1,2,2,2,3,3,3,2,2,2,1,1,1,2,2,2,3,3,3], [1,0,0,1,0,0,-1,0,0,-1,0,0,1,0,0]), 1, 'Test 41');
test(countMatchingSubarrays([1,2,1,2,1,2,1,2,1], [1,-1,1,-1,1,-1,1]), 1, 'Test 42');
test(countMatchingSubarrays([1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 1, 1], [0, 1, 0, -1, 0]), 0, 'Test 43');
test(countMatchingSubarrays([1,2,3,2,3,4,3,4,5,4,5,6], [1,-1,1,1,-1,1,-1,1]), 0, 'Test 44');
test(countMatchingSubarrays([10,9,8,7,6,5,4,3,2,1], [-1,-1,-1,-1,-1,-1,-1,-1,-1]), 1, 'Test 45');
test(countMatchingSubarrays([1, 2, 2, 2, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1], [1, 0, 1, 0, -1, 0, -1]), 0, 'Test 46');
test(countMatchingSubarrays([1,1,2,2,1,1,2,2,1,1,2,2,1,1], [0,1,0,-1,0,1,0,-1,0,1]), 1, 'Test 47');
test(countMatchingSubarrays([1,1,2,1,3,2,4,3,5,4,6,5,7,6,8], [0,-1,1,-1,1,-1,1,-1,1,-1]), 0, 'Test 48');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,1,1,1,1,1,1,1,1,1,1,1]), 3, 'Test 49');
test(countMatchingSubarrays([10, 20, 10, 30, 20, 40, 30, 50], [1, -1, 1, -1, 1]), 2, 'Test 50');
test(countMatchingSubarrays([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2], [1,-1,1,-1,1,-1,1,-1]), 0, 'Test 51');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 52');
test(countMatchingSubarrays([5,4,3,2,1,1,2,3,4,5,5,6,7,8,9,10], [-1,-1,-1,-1,0,1,1,1,1,0,1,1,1,1]), 1, 'Test 53');
test(countMatchingSubarrays([1,1,1,1,2,2,2,2,3,3,3,3], [0,0,0,1,0,0,0,1,0,0,0]), 1, 'Test 54');
test(countMatchingSubarrays([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5], [-1,-1,-1,-1,0,1,1,1,1,0,-1,-1,-1,-1,0,1,1,1,1]), 1, 'Test 55');
test(countMatchingSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [-1, -1, -1, -1, -1, -1]), 4, 'Test 56');
test(countMatchingSubarrays([1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1], [1, -1, 0, 1, -1, 1, -1, 1, -1]), 1, 'Test 57');
test(countMatchingSubarrays([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4], [1,1,-1,-1,1,1,-1,-1,1,1,-1,-1,1,1,-1,-1,1,1,-1]), 0, 'Test 58');
test(countMatchingSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1], [-1, -1, -1, -1, -1, -1]), 3, 'Test 59');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,1,1,1,1,1,1,1,1,1,1,1,1]), 2, 'Test 60');
test(countMatchingSubarrays([1, 1, 1, 1, 2, 2, 2, 2, 3, 3], [0, 0, 0, 1, 0, 0, 0]), 1, 'Test 61');
test(countMatchingSubarrays([1,3,2,4,3,5,4,6,5,7], [1,-1,1,-1,1]), 3, 'Test 62');
test(countMatchingSubarrays([1, 2, 3, 4, 5, 4, 3, 2, 1, 2], [1, 1, 1, -1, -1, -1, 1]), 0, 'Test 63');
test(countMatchingSubarrays([1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1], [1, -1, 1, -1, 1]), 0, 'Test 64');
test(countMatchingSubarrays([10,10,11,12,13,13,12,11,12,13,13,12,10], [0,1,1,1,0,-1,-1,1,1,0,-1,-1]), 1, 'Test 65');
test(countMatchingSubarrays([1,1,2,2,3,3,4,4,5,5], [0,1,0,1,0]), 3, 'Test 66');
test(countMatchingSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 67');
test(countMatchingSubarrays([1,2,2,1,2,2,1,2,2,1], [1,0,-1,1,0,-1,1,0]), 1, 'Test 68');
test(countMatchingSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [0, 1, 0, 1, 0, 1]), 2, 'Test 69');
test(countMatchingSubarrays([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5], [1, 1, 1, -1, -1, -1, 1, 1, 1]), 0, 'Test 70');
test(countMatchingSubarrays([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1], [-1,-1,-1,-1,0,1,1,1,1,0,-1,-1,-1,-1]), 1, 'Test 71');
test(countMatchingSubarrays([5,1,5,2,5,3,5,4,5,5,5,6,7,8], [1,-1,1,-1,1,0,1,0,0,1,1]), 0, 'Test 72');
test(countMatchingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 0, 0, 0, 0, 0, 0]), 0, 'Test 73');
test(countMatchingSubarrays([1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0]), 5, 'Test 74');
test(countMatchingSubarrays([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3], [1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1]), 0, 'Test 75');
test(countMatchingSubarrays([1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 0, 'Test 76');
test(countMatchingSubarrays([1,3,5,4,6,5,7,8,7,9,10,9,11,12], [1,1,-1,1,-1,1,-1,1,-1,1]), 0, 'Test 77');
test(countMatchingSubarrays([1,2,2,3,3,4,4,5,5,6], [1,0,1,0,1,0,1]), 2, 'Test 78');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 79');
test(countMatchingSubarrays([9,8,7,8,9,10,9,8,7,8,9,10], [-1,-1,1,-1,1,-1,1,-1,1,-1]), 0, 'Test 80');
test(countMatchingSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8], [0, 1, 0, 1, 0, 1, 0, 1]), 4, 'Test 81');
test(countMatchingSubarrays([1,1,2,2,3,3,4,4,5,5], [0,1,0,1,0,1,0]), 2, 'Test 82');
test(countMatchingSubarrays([1,2,2,3,4,4,5,6,6,7,8], [1,0,1,0,1,0,1,0]), 0, 'Test 83');
test(countMatchingSubarrays([1,1,1,1,2,3,4,5,6,7,8,9,10], [0,0,0,1,1,1,1,1,1,1]), 1, 'Test 84');
test(countMatchingSubarrays([3,1,2,4,3,5,6,5,7,8,7,9,10,11,10,12,13,14,13,15,16], [1,-1,1,1,-1,1,1,-1,1,1,-1,1,1,-1,1,1,-1]), 0, 'Test 85');
test(countMatchingSubarrays([1,3,2,4,3,5,6,5,7,8,7,9,10,11,10,12,13,14,13,15,16,15,17,18,17,19,20,19,21,22], [1,-1,1,1,-1,1,1,-1,1,1,-1,1,1,-1,1,1,-1,1,1,-1,1,1,-1,1,1,-1]), 0, 'Test 86');
test(countMatchingSubarrays([3, 2, 3, 2, 3, 2, 3, 2, 3, 2], [-1, 1, -1, 1, -1, 1, -1]), 2, 'Test 87');
test(countMatchingSubarrays([1,2,2,3,4,4,5,5,6,7,8,9,10], [1,0,1,0,1,0,1,0,1,0]), 0, 'Test 88');
test(countMatchingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], [1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1]), 1, 'Test 89');
test(countMatchingSubarrays([9,8,7,6,5,4,3,2,1], [-1,-1,-1,-1,-1,-1]), 3, 'Test 90');
test(countMatchingSubarrays([10,9,8,7,6,5,4,3,2,1], [-1,-1,-1,-1,-1]), 5, 'Test 91');
test(countMatchingSubarrays([1,2,2,3,4,5,6,7,8,9], [1,0,1,1,1,1]), 1, 'Test 92');
test(countMatchingSubarrays([5, 6, 5, 6, 5, 6, 5, 6, 5, 6], [1, -1, 1, -1, 1, -1, 1]), 2, 'Test 93');
test(countMatchingSubarrays([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6], [1,1,1,-1,-1,-1,1,1,1]), 0, 'Test 94');
test(countMatchingSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 95');
test(countMatchingSubarrays([1, 3, 2, 1, 2, 3, 2, 1, 3, 2, 1], [1, -1, 1, -1, 1, -1]), 0, 'Test 96');
test(countMatchingSubarrays([1,2,2,3,3,2,2,1,1,2,2,3,3,2,2,1,1,2,2,3,3,2,2,1,1], [1,0,0,1,0,0,-1,-1,0,0,1,0,0,-1,-1,0,0,1,0,0,-1,-1,0,0]), 0, 'Test 97');
test(countMatchingSubarrays([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1], [1,1,1,1,1,-1,-1,-1,-1,-1,1,1,1,1,1,-1,-1,-1,-1,-1]), 1, 'Test 98');
test(countMatchingSubarrays([1,3,5,4,6,7,5,6,7,8,9,8,7,6,5,4,3,2,1], [1,1,-1,1,1,1,-1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1]), 0, 'Test 99');
test(countMatchingSubarrays([1, 2, 3, 2, 3, 4, 5, 4, 5, 6], [1, -1, 1, 1, -1, 1]), 0, 'Test 100');
test(countMatchingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 101');
test(countMatchingSubarrays([1,2,3,2,1,2,3,4,5,4,3,2,1], [1,-1,1,-1,1,-1,1,-1]), 0, 'Test 102');
test(countMatchingSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2], [1, -1, 1, -1, 1, -1, 1]), 2, 'Test 103');
test(countMatchingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1]), 3, 'Test 104');
test(countMatchingSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5], [-1, -1, -1, -1, -1, -1, 1, 1, 1]), 0, 'Test 105');
test(countMatchingSubarrays([5, 6, 7, 8, 7, 6, 7, 8, 9, 10], [1, 1, -1, -1, 1, 1, 1]), 1, 'Test 106');
test(countMatchingSubarrays([10,9,8,7,6,5,4,3,2,1], [-1,-1,-1,-1,-1,-1,-1]), 3, 'Test 107');
test(countMatchingSubarrays([3,3,3,4,4,4,5,5,5,6,6,6], [0,1,0,1,0,1,0,1]), 0, 'Test 108');
test(countMatchingSubarrays([1,2,3,2,1,2,3,2,1], [1,-1,1,-1,1,-1,1]), 0, 'Test 109');
test(countMatchingSubarrays([1,1,2,2,3,3,2,2,1,1,2,2,3,3], [0,1,0,-1,0,1,0,-1]), 0, 'Test 110');
test(countMatchingSubarrays([1,2,1,2,1,2,1,2,1,2], [1,-1,1,-1,1]), 3, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

