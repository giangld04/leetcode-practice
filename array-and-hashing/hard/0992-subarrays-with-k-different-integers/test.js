// Test: 992. Subarrays With K Different Integers
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { subarraysWithKDistinct } = require("./solution");

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

console.log("\n992. Subarrays With K Different Integers\n");

test(subarraysWithKDistinct([4,2,4,5,6], 2), 5, 'Test 1');
test(subarraysWithKDistinct([1,2,1,3,4], 3), 3, 'Test 2');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10], 10), 1, 'Test 3');
test(subarraysWithKDistinct([5,5,5,5,5,5,5,5,5,5], 1), 55, 'Test 4');
test(subarraysWithKDistinct([1,2,2,1,1,3], 2), 10, 'Test 5');
test(subarraysWithKDistinct([1,2,3], 2), 2, 'Test 6');
test(subarraysWithKDistinct([1,2,3,4,5,6], 3), 4, 'Test 7');
test(subarraysWithKDistinct([1,2], 1), 2, 'Test 8');
test(subarraysWithKDistinct([1,2,2,1,2,3,3,4], 3), 9, 'Test 9');
test(subarraysWithKDistinct([1,2,3,4,5], 5), 1, 'Test 10');
test(subarraysWithKDistinct([1,2,3,4,5], 3), 3, 'Test 11');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10], 5), 6, 'Test 12');
test(subarraysWithKDistinct([1], 1), 1, 'Test 13');
test(subarraysWithKDistinct([1,2,1,2,3], 2), 7, 'Test 14');
test(subarraysWithKDistinct([5,5,5,5,5], 1), 15, 'Test 15');
test(subarraysWithKDistinct([1,2,2,1,1], 2), 8, 'Test 16');
test(subarraysWithKDistinct([10,9,8,7,6,5,4,3,2,1], 5), 6, 'Test 17');
test(subarraysWithKDistinct([1,2,2,1,3], 2), 6, 'Test 18');
test(subarraysWithKDistinct([1,1,1,1,1], 1), 15, 'Test 19');
test(subarraysWithKDistinct([1,2,2,1,2], 2), 9, 'Test 20');
test(subarraysWithKDistinct([1,2,3,2,1,2,3,2,1], 2), 11, 'Test 21');
test(subarraysWithKDistinct([1,1,2,2,3,3], 2), 8, 'Test 22');
test(subarraysWithKDistinct([10,9,8,7,6,5,4,3,2,1], 4), 7, 'Test 23');
test(subarraysWithKDistinct([1,1,1,1,1,1,1,1,1,1], 1), 55, 'Test 24');
test(subarraysWithKDistinct([1,2,3,2,2,3,1,2,3], 3), 22, 'Test 25');
test(subarraysWithKDistinct([1,1,1,2,2,2,3,3,3], 2), 18, 'Test 26');
test(subarraysWithKDistinct([1,2,3,4,5], 1), 5, 'Test 27');
test(subarraysWithKDistinct([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 3), 253, 'Test 28');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1], 4), 21, 'Test 29');
test(subarraysWithKDistinct([1,2,2,1,2,3,4,5,5,4,3,2,1,2,3,4,5,5,4,3,2,1,6,7,8,9], 5), 143, 'Test 30');
test(subarraysWithKDistinct([1,2,3,4,5,5,5,5,5,5,5,5,5,5,5], 5), 11, 'Test 31');
test(subarraysWithKDistinct([1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4], 4), 91, 'Test 32');
test(subarraysWithKDistinct([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 210, 'Test 33');
test(subarraysWithKDistinct([1,2,2,1,3,1,4,2], 3), 9, 'Test 34');
test(subarraysWithKDistinct([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10], 5), 26, 'Test 35');
test(subarraysWithKDistinct([1,2,3,2,1,2,3,2,1,2], 2), 13, 'Test 36');
test(subarraysWithKDistinct([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1], 3), 18, 'Test 37');
test(subarraysWithKDistinct([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1], 3), 19, 'Test 38');
test(subarraysWithKDistinct([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1], 3), 35, 'Test 39');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5], 2), 36, 'Test 40');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 10), 66, 'Test 41');
test(subarraysWithKDistinct([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 10), 237, 'Test 42');
test(subarraysWithKDistinct([1,2,2,1,2,2,1,2,2,1], 2), 42, 'Test 43');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], 10), 44, 'Test 44');
test(subarraysWithKDistinct([1,2,2,1,3,3,4], 2), 9, 'Test 45');
test(subarraysWithKDistinct([1,2,1,3,2,4,3,5,2,3,1,4], 3), 14, 'Test 46');
test(subarraysWithKDistinct([1,2,1,3,2,4,2,1,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], 4), 29, 'Test 47');
test(subarraysWithKDistinct([10,20,30,40,50,10,20,30,40,50], 4), 7, 'Test 48');
test(subarraysWithKDistinct([10,20,30,40,50,60,70,80,90,100], 5), 6, 'Test 49');
test(subarraysWithKDistinct([1,1,2,3,2,3,3,4,4,4,4,4], 3), 23, 'Test 50');
test(subarraysWithKDistinct([1,2,3,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3], 4), 18, 'Test 51');
test(subarraysWithKDistinct([1,2,2,1,3,4,3,2,1], 2), 11, 'Test 52');
test(subarraysWithKDistinct([1,2,2,1,2,2,1,2,2,1,2,2,1,2,2], 2), 100, 'Test 53');
test(subarraysWithKDistinct([1,2,3,2,1,2,3,1,2,3,1,2,3], 2), 14, 'Test 54');
test(subarraysWithKDistinct([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 5), 0, 'Test 55');
test(subarraysWithKDistinct([1,1,2,3,2,1,2,3,1,2,3,1,2,3], 3), 75, 'Test 56');
test(subarraysWithKDistinct([10,20,10,30,20,40,30,50,20,30,10,40], 3), 14, 'Test 57');
test(subarraysWithKDistinct([10,9,8,7,6,5,4,3,2,1], 3), 8, 'Test 58');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,1,2,3,4,5], 7), 24, 'Test 59');
test(subarraysWithKDistinct([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3], 3), 100, 'Test 60');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 5), 16, 'Test 61');
test(subarraysWithKDistinct([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7], 4), 36, 'Test 62');
test(subarraysWithKDistinct([10,20,30,10,20,30,10,20,30], 2), 8, 'Test 63');
test(subarraysWithKDistinct([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 3), 136, 'Test 64');
test(subarraysWithKDistinct([1,2,3,4,5,1,2,3,4,5], 4), 7, 'Test 65');
test(subarraysWithKDistinct([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9], 3), 63, 'Test 66');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 4), 28, 'Test 67');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), 1, 'Test 68');
test(subarraysWithKDistinct([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 2), 378, 'Test 69');
test(subarraysWithKDistinct([1,2,3,2,1,1,2,3,2,1,1,2,3,2,1], 2), 21, 'Test 70');
test(subarraysWithKDistinct([1,2,1,2,3,3,4,4,5,5], 3), 12, 'Test 71');
test(subarraysWithKDistinct([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 2), 120, 'Test 72');
test(subarraysWithKDistinct([5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 5), 253, 'Test 73');
test(subarraysWithKDistinct([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 5), 136, 'Test 74');
test(subarraysWithKDistinct([1,2,2,1,1,3,4,3,2,1], 2), 15, 'Test 75');
test(subarraysWithKDistinct([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 2), 190, 'Test 76');
test(subarraysWithKDistinct([5,4,3,2,1,1,2,3,4,5], 3), 11, 'Test 77');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], 4), 20, 'Test 78');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5], 2), 16, 'Test 79');
test(subarraysWithKDistinct([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 3), 190, 'Test 80');
test(subarraysWithKDistinct([1,1,2,2,3,3,1,1,2,2,3,3,1,1,2,2], 2), 28, 'Test 81');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 3), 28, 'Test 82');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 20), 0, 'Test 83');
test(subarraysWithKDistinct([1,2,2,1,3,2,4,5,3], 3), 10, 'Test 84');
test(subarraysWithKDistinct([1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8], 3), 48, 'Test 85');
test(subarraysWithKDistinct([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5], 2), 36, 'Test 86');
test(subarraysWithKDistinct([1,2,3,2,2,3,1,1,2,3,3,3,2,1], 2), 22, 'Test 87');
test(subarraysWithKDistinct([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 3), 13, 'Test 88');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), 24, 'Test 89');
test(subarraysWithKDistinct([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1], 4), 17, 'Test 90');
test(subarraysWithKDistinct([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 5), 66, 'Test 91');
test(subarraysWithKDistinct([4,2,4,4,2,2,3,1,1,4], 2), 19, 'Test 92');
test(subarraysWithKDistinct([1,2,3,4,5,5,4,3,2,1,1,2,3,4,5], 4), 20, 'Test 93');
test(subarraysWithKDistinct([1,2,3,2,1,4,5,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1,8,7,6,5,4,3,2,1], 5), 93, 'Test 94');
test(subarraysWithKDistinct([1,2,2,1,2,3,4,5,5,4,3,2,1,2,3,4,5,5,4,3,2,1], 4), 30, 'Test 95');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), 16, 'Test 96');
test(subarraysWithKDistinct([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 2), 29, 'Test 97');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12], 5), 32, 'Test 98');
test(subarraysWithKDistinct([1,2,2,1,2,3,3,2,1], 2), 15, 'Test 99');
test(subarraysWithKDistinct([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 4), 22, 'Test 100');
test(subarraysWithKDistinct([1,2,2,1,3,3,3,2,1,4,4,5,5,5,5,5], 3), 27, 'Test 101');
test(subarraysWithKDistinct([1,2,3,1,2,3,1,2,3,1,2,3], 3), 55, 'Test 102');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5], 3), 12, 'Test 103');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10], 3), 8, 'Test 104');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 11, 'Test 105');
test(subarraysWithKDistinct([1,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,1,1,2,2,3,3], 4), 72, 'Test 106');
test(subarraysWithKDistinct([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 3), 72, 'Test 107');
test(subarraysWithKDistinct([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5], 5), 106, 'Test 108');
test(subarraysWithKDistinct([1,2,2,3,3,3,2,1,1,1,1,1,1,1,2,3,3,3,2,1,1,1], 3), 162, 'Test 109');
test(subarraysWithKDistinct([1,2,2,1,3,3,2,1,4,4,3,2,1], 2), 16, 'Test 110');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1], 5), 80, 'Test 111');
test(subarraysWithKDistinct([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 4), 24, 'Test 112');
test(subarraysWithKDistinct([10,10,20,30,40,50,60,70,80,90], 5), 6, 'Test 113');
test(subarraysWithKDistinct([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6], 3), 36, 'Test 114');
test(subarraysWithKDistinct([1,2,1,2,1,2,1,2,1,2], 2), 45, 'Test 115');
test(subarraysWithKDistinct([1,2,2,1,3,3,2,1,4,4,3,2,1,5,5,4,3,2,1,6,6,5,4,3,2,1,7,7,6,5,4,3,2,1,8,8,7,6,5,4,3,2,1,9,9,8,7,6,5,4,3,2,1,10,10,9,8,7,6,5,4,3,2,1], 10), 541, 'Test 116');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1], 10), 21, 'Test 117');
test(subarraysWithKDistinct([1,2,3,2,1,4,5,4,3,2,1,2], 3), 13, 'Test 118');
test(subarraysWithKDistinct([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5], 5), 21, 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

