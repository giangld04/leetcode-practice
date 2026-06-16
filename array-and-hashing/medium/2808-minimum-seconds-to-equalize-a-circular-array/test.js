// Test: 2808. Minimum Seconds To Equalize A Circular Array
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { minimumSeconds } = require("./solution");

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

console.log("\n2808. Minimum Seconds To Equalize A Circular Array\n");

test(minimumSeconds([10,20,10,20,10]), 1, 'Test 1');
test(minimumSeconds([1,2,3,4,5,1]), 2, 'Test 2');
test(minimumSeconds([10,10,1,10,10]), 1, 'Test 3');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,10]), 5, 'Test 4');
test(minimumSeconds([7,7,7,7,7,7,7,7,7,7]), 0, 'Test 5');
test(minimumSeconds([1]), 0, 'Test 6');
test(minimumSeconds([7,7,7,7,7,7,7]), 0, 'Test 7');
test(minimumSeconds([10,20,30,40,50]), 2, 'Test 8');
test(minimumSeconds([5,5,5,5]), 0, 'Test 9');
test(minimumSeconds([1,2,3,4,5]), 2, 'Test 10');
test(minimumSeconds([1,1,2,2,1,1]), 1, 'Test 11');
test(minimumSeconds([1,3,2,1,2,3,1]), 1, 'Test 12');
test(minimumSeconds([10,1,10,1,10]), 1, 'Test 13');
test(minimumSeconds([10,10,10,20,20,10,10,10]), 1, 'Test 14');
test(minimumSeconds([3,3,3,4,4,4,3]), 2, 'Test 15');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,1]), 4, 'Test 16');
test(minimumSeconds([1,3,5,7,9,7,5,3,1]), 2, 'Test 17');
test(minimumSeconds([1,2,1,2]), 1, 'Test 18');
test(minimumSeconds([1,1,2,2,1,1,2,2]), 1, 'Test 19');
test(minimumSeconds([1,1,1,2,2,2,3,3,3]), 3, 'Test 20');
test(minimumSeconds([2,1,3,3,2]), 2, 'Test 21');
test(minimumSeconds([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,0,0]), 9, 'Test 22');
test(minimumSeconds([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,1,1,2,2]), 8, 'Test 23');
test(minimumSeconds([3,2,1,4,3,2,1,5,3,2,1,6,3,2,1,7,3,2,1,8]), 2, 'Test 24');
test(minimumSeconds([5, 6, 5, 7, 5, 8, 5, 9, 5, 10]), 1, 'Test 25');
test(minimumSeconds([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]), 0, 'Test 26');
test(minimumSeconds([9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4, 'Test 27');
test(minimumSeconds([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 28');
test(minimumSeconds([1,1,2,2,3,3,1,1,2,2,3,3,1,1,2,2,3,3,1,1]), 2, 'Test 29');
test(minimumSeconds([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6]), 5, 'Test 30');
test(minimumSeconds([10, 20, 30, 40, 50, 10, 20, 30, 40, 50]), 2, 'Test 31');
test(minimumSeconds([1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5]), 4, 'Test 32');
test(minimumSeconds([1,1,1,2,2,2,3,3,3,1,1,1]), 3, 'Test 33');
test(minimumSeconds([2,2,2,3,3,3,3,3,2,2,2,3,3,3,3,3,2,2,2,3,3,3,3,3,2,2,2,3,3,3,3,3]), 2, 'Test 34');
test(minimumSeconds([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 1, 1]), 8, 'Test 35');
test(minimumSeconds([1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2]), 1, 'Test 36');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 5, 'Test 37');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 5, 'Test 38');
test(minimumSeconds([1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1]), 2, 'Test 39');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 15, 'Test 40');
test(minimumSeconds([5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1]), 1, 'Test 41');
test(minimumSeconds([100,99,100,98,100,97,100,96,100,95,100,94,100,93,100]), 1, 'Test 42');
test(minimumSeconds([10,20,10,30,10,40,10]), 1, 'Test 43');
test(minimumSeconds([1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1]), 2, 'Test 44');
test(minimumSeconds([7, 7, 8, 8, 9, 9, 10, 10, 7, 7]), 3, 'Test 45');
test(minimumSeconds([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,1,1,1]), 8, 'Test 46');
test(minimumSeconds([5,4,3,2,1,0,1,2,3,4,5,4,3,2,1,0,1,2,3,4]), 3, 'Test 47');
test(minimumSeconds([1,1,1,2,2,2,3,3,3,1,1,1,2,2,2,3,3,3,1,1,1,2,2,2,3,3,3,1,1,1,2,2,2]), 3, 'Test 48');
test(minimumSeconds([1, 2, 2, 1, 3, 3, 3, 1, 2, 2, 1, 4, 4, 4, 4, 1, 2, 2, 1]), 2, 'Test 49');
test(minimumSeconds([10,9,8,7,6,5,4,3,2,1,10]), 5, 'Test 50');
test(minimumSeconds([8,9,8,10,8,11,8,12,8,13,8,14,8,15,8,16,8,17,8,18]), 1, 'Test 51');
test(minimumSeconds([6,6,6,6,5,5,5,5,6,6,6,6,5,5,5,5,6,6,6,6]), 2, 'Test 52');
test(minimumSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 5, 'Test 53');
test(minimumSeconds([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1]), 2, 'Test 54');
test(minimumSeconds([9, 1, 9, 2, 9, 3, 9, 4, 9, 5, 9, 6, 9, 7, 9, 8]), 1, 'Test 55');
test(minimumSeconds([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 1, 'Test 56');
test(minimumSeconds([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 1, 1]), 5, 'Test 57');
test(minimumSeconds([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2]), 1, 'Test 58');
test(minimumSeconds([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 9, 'Test 59');
test(minimumSeconds([3,2,1,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 4, 'Test 60');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 5, 'Test 61');
test(minimumSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]), 4, 'Test 62');
test(minimumSeconds([6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6]), 1, 'Test 63');
test(minimumSeconds([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3]), 3, 'Test 64');
test(minimumSeconds([7,8,9,7,8,9,7,8,9,7,8,9,7]), 1, 'Test 65');
test(minimumSeconds([7,7,1,7,7,7,7,1,7]), 1, 'Test 66');
test(minimumSeconds([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2]), 1, 'Test 67');
test(minimumSeconds([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 1, 1, 2]), 8, 'Test 68');
test(minimumSeconds([5,1,5,2,5,3,5,4,5,5]), 1, 'Test 69');
test(minimumSeconds([2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1]), 2, 'Test 70');
test(minimumSeconds([8, 8, 8, 7, 8, 8, 8, 7, 8, 8, 8, 7, 8, 8, 8]), 1, 'Test 71');
test(minimumSeconds([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 8, 'Test 72');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 10, 'Test 73');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 74');
test(minimumSeconds([100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300]), 1, 'Test 75');
test(minimumSeconds([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 0, 'Test 76');
test(minimumSeconds([1000000000,1,1000000000,1,1000000000,1,1000000000]), 1, 'Test 77');
test(minimumSeconds([5,4,5,4,5,4,5,4,5,4,5]), 1, 'Test 78');
test(minimumSeconds([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,0,1]), 1, 'Test 79');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 12, 'Test 80');
test(minimumSeconds([1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2]), 3, 'Test 81');
test(minimumSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 7, 'Test 82');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 5, 'Test 83');
test(minimumSeconds([7, 5, 3, 5, 7, 5, 3, 5]), 1, 'Test 84');
test(minimumSeconds([10,20,30,40,50,60,70,80,90,100,10,20,30]), 5, 'Test 85');
test(minimumSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10, 'Test 86');
test(minimumSeconds([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 5, 'Test 87');
test(minimumSeconds([9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9]), 5, 'Test 88');
test(minimumSeconds([1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 1, 'Test 89');
test(minimumSeconds([1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2]), 3, 'Test 90');
test(minimumSeconds([4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1]), 2, 'Test 91');
test(minimumSeconds([1,2,2,1,2,1,1,2,1,2,2,1,1,2,1,2,1,2,1,2]), 1, 'Test 92');
test(minimumSeconds([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 0, 'Test 93');
test(minimumSeconds([1,2,3,4,3,2,1,2,3,4,3,2,1]), 2, 'Test 94');
test(minimumSeconds([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 5, 'Test 95');
test(minimumSeconds([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,11]), 1, 'Test 96');
test(minimumSeconds([1,3,5,7,9,11,13,15,17,19,1,3,5,7,9,11,13,15,17,19]), 5, 'Test 97');
test(minimumSeconds([5, 1, 4, 1, 5, 1, 4, 5, 4, 5]), 2, 'Test 98');
test(minimumSeconds([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 1, 'Test 99');
test(minimumSeconds([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 4, 'Test 100');
test(minimumSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]), 4, 'Test 101');
test(minimumSeconds([1000000000, 999999999, 1000000000, 999999999, 1000000000]), 1, 'Test 102');
test(minimumSeconds([10, 20, 10, 30, 20, 10, 30, 20, 10]), 1, 'Test 103');
test(minimumSeconds([10, 1, 10, 2, 10, 3, 10, 4, 10, 5]), 1, 'Test 104');
test(minimumSeconds([10,10,20,20,30,30,10,10]), 2, 'Test 105');
test(minimumSeconds([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 5, 'Test 106');
test(minimumSeconds([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 8, 'Test 107');
test(minimumSeconds([5,6,7,8,9,8,7,6,5,6,7,8,9]), 2, 'Test 108');
test(minimumSeconds([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 109');
test(minimumSeconds([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5]), 7, 'Test 110');
test(minimumSeconds([7, 2, 2, 7, 3, 7, 3, 3]), 1, 'Test 111');
test(minimumSeconds([7,1,5,3,6,1,5,3,6,1,5,3,6]), 2, 'Test 112');
test(minimumSeconds([7, 8, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9]), 1, 'Test 113');
test(minimumSeconds([9, 9, 1, 9, 9, 1, 9, 9, 1, 9, 9]), 1, 'Test 114');
test(minimumSeconds([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4]), 2, 'Test 115');
test(minimumSeconds([2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]), 4, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

