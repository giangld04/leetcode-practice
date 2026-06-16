// Test: 2856. Minimum Array Length After Pair Removals
// 121 test cases from LeetCodeDataset
// Run: node test.js

const { minLengthAfterRemovals } = require("./solution");

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

console.log("\n2856. Minimum Array Length After Pair Removals\n");

test(minLengthAfterRemovals([1,1,2,2,2,3,3,3,3,3]), 0, 'Test 1');
test(minLengthAfterRemovals([1,1,1,2,2,3,3,3]), 0, 'Test 2');
test(minLengthAfterRemovals([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 3');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,2]), 9, 'Test 4');
test(minLengthAfterRemovals([1]), 1, 'Test 5');
test(minLengthAfterRemovals([1,1,2,2,3,3]), 0, 'Test 6');
test(minLengthAfterRemovals([1,2,3,4]), 0, 'Test 7');
test(minLengthAfterRemovals([1,1,1,2,2,3]), 0, 'Test 8');
test(minLengthAfterRemovals([1000000000,1000000000]), 2, 'Test 9');
test(minLengthAfterRemovals([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]), 0, 'Test 10');
test(minLengthAfterRemovals([1,1,2,2,2,3,3,3,3]), 1, 'Test 11');
test(minLengthAfterRemovals([2,3,4,4,4]), 1, 'Test 12');
test(minLengthAfterRemovals([1,1,1,1,2,2,2,2,2,2,2,2]), 4, 'Test 13');
test(minLengthAfterRemovals([1,2,2,3,3,3,3]), 1, 'Test 14');
test(minLengthAfterRemovals([1,1,2,3,3,4,5]), 1, 'Test 15');
test(minLengthAfterRemovals([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3]), 1, 'Test 16');
test(minLengthAfterRemovals([1,2,2,3,3,3,4,4,4,4]), 0, 'Test 17');
test(minLengthAfterRemovals([1,1,2,2,2,3,3,3]), 0, 'Test 18');
test(minLengthAfterRemovals([1,1,1,2,2,2,3,3,3]), 1, 'Test 19');
test(minLengthAfterRemovals([1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 1, 'Test 20');
test(minLengthAfterRemovals([1,2,3,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6]), 0, 'Test 21');
test(minLengthAfterRemovals([1,1,1,2,2,2,3,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]), 1, 'Test 22');
test(minLengthAfterRemovals([1,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6]), 0, 'Test 23');
test(minLengthAfterRemovals([1,1,1,1,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6]), 1, 'Test 24');
test(minLengthAfterRemovals([1,2,3,4,4,5,6,7,8,8,8,9,10,11,12,12,13,14,15,16,16,17,18,19,20,20,20,20,20,20,21,22,23,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 0, 'Test 25');
test(minLengthAfterRemovals([1,1,2,2,2,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,6]), 1, 'Test 26');
test(minLengthAfterRemovals([1,1,1,1,1,2,2,2,2,3,3,3,4,4,5,5,5,5,5,6,6,6,6,7,7,7,7,7,7,7,7,7,7]), 1, 'Test 27');
test(minLengthAfterRemovals([1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 28');
test(minLengthAfterRemovals([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 20, 'Test 29');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4]), 0, 'Test 30');
test(minLengthAfterRemovals([1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 31');
test(minLengthAfterRemovals([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7,8,9]), 0, 'Test 32');
test(minLengthAfterRemovals([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20]), 9, 'Test 33');
test(minLengthAfterRemovals([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3]), 0, 'Test 34');
test(minLengthAfterRemovals([1,1,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]), 0, 'Test 35');
test(minLengthAfterRemovals([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9]), 0, 'Test 36');
test(minLengthAfterRemovals([1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4]), 1, 'Test 37');
test(minLengthAfterRemovals([1,1,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5]), 1, 'Test 38');
test(minLengthAfterRemovals([1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6]), 0, 'Test 39');
test(minLengthAfterRemovals([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 0, 'Test 40');
test(minLengthAfterRemovals([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]), 0, 'Test 41');
test(minLengthAfterRemovals([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,5]), 1, 'Test 42');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 0, 'Test 43');
test(minLengthAfterRemovals([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5]), 1, 'Test 44');
test(minLengthAfterRemovals([1,1,2,2,2,3,3,3,3,4,4,4,5,5,5,5,6,6,6,6,7,7,7,8,8,8,9,9,10]), 1, 'Test 45');
test(minLengthAfterRemovals([1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 14, 'Test 46');
test(minLengthAfterRemovals([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 0, 'Test 47');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2]), 10, 'Test 48');
test(minLengthAfterRemovals([1,1,2,2,2,3,3,3,3,4,4,4,4,4]), 0, 'Test 49');
test(minLengthAfterRemovals([1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4]), 1, 'Test 50');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 0, 'Test 51');
test(minLengthAfterRemovals([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4]), 0, 'Test 52');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,9,9,10,10,10,10,10,10]), 1, 'Test 53');
test(minLengthAfterRemovals([1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 0, 'Test 54');
test(minLengthAfterRemovals([1,1,2,2,2,3,3,3,3,4,4,4,4,4,4,5,5]), 1, 'Test 55');
test(minLengthAfterRemovals([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5]), 1, 'Test 56');
test(minLengthAfterRemovals([1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,5,5,5,5,6,6]), 1, 'Test 57');
test(minLengthAfterRemovals([1,1,2,2,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5]), 1, 'Test 58');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 1, 'Test 59');
test(minLengthAfterRemovals([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 1, 'Test 60');
test(minLengthAfterRemovals([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7]), 0, 'Test 61');
test(minLengthAfterRemovals([1,1,2,2,2,3,3,3,3,3,4,4,4,4,4,4]), 0, 'Test 62');
test(minLengthAfterRemovals([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8]), 0, 'Test 63');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5]), 0, 'Test 64');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4]), 1, 'Test 65');
test(minLengthAfterRemovals([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 1, 'Test 66');
test(minLengthAfterRemovals([1,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 67');
test(minLengthAfterRemovals([1,2,2,2,2,2,2,3,3,4,4,4,4,5,5,5,5,5,5]), 1, 'Test 68');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 69');
test(minLengthAfterRemovals([1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 1, 'Test 70');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 42, 'Test 71');
test(minLengthAfterRemovals([1,1,1,2,2,2,2,3,3,3,4,4,4,5,5,5,5,6,6,6,7,7,8,8,8,8,8,9,9]), 1, 'Test 72');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3]), 0, 'Test 73');
test(minLengthAfterRemovals([1,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 10, 'Test 74');
test(minLengthAfterRemovals([1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,10]), 0, 'Test 75');
test(minLengthAfterRemovals([1,2,2,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), 1, 'Test 76');
test(minLengthAfterRemovals([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 77');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 1, 'Test 78');
test(minLengthAfterRemovals([1,1,1,1,1,1,2,2,3,4,4,4,4,5,5,5,5,5,6]), 1, 'Test 79');
test(minLengthAfterRemovals([1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 80');
test(minLengthAfterRemovals([1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 81');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4]), 1, 'Test 82');
test(minLengthAfterRemovals([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7]), 0, 'Test 83');
test(minLengthAfterRemovals([1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6]), 0, 'Test 84');
test(minLengthAfterRemovals([1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4]), 0, 'Test 85');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 86');
test(minLengthAfterRemovals([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 1, 'Test 87');
test(minLengthAfterRemovals([1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3]), 1, 'Test 88');
test(minLengthAfterRemovals([1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10]), 0, 'Test 89');
test(minLengthAfterRemovals([1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,5,5,5,6,6,7,8,9,10]), 1, 'Test 90');
test(minLengthAfterRemovals([1,2,2,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,7,7,7]), 0, 'Test 91');
test(minLengthAfterRemovals([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 92');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 38, 'Test 93');
test(minLengthAfterRemovals([1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6]), 1, 'Test 94');
test(minLengthAfterRemovals([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,9]), 0, 'Test 95');
test(minLengthAfterRemovals([1,1,1,1,1,2,2,2,3,3,3,3,3,4,4,4,5,5,5]), 1, 'Test 96');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 1, 'Test 97');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3]), 0, 'Test 98');
test(minLengthAfterRemovals([1,2,3,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9]), 1, 'Test 99');
test(minLengthAfterRemovals([1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6]), 1, 'Test 100');
test(minLengthAfterRemovals([1,1,1,2,2,3,3,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,8,8,8]), 1, 'Test 101');
test(minLengthAfterRemovals([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20]), 0, 'Test 102');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4]), 0, 'Test 103');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4]), 1, 'Test 104');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4]), 0, 'Test 105');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]), 1, 'Test 106');
test(minLengthAfterRemovals([1,1,1,1,1,2,2,2,2,2,3,3,3,4,4]), 1, 'Test 107');
test(minLengthAfterRemovals([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 16, 'Test 108');
test(minLengthAfterRemovals([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4]), 1, 'Test 109');
test(minLengthAfterRemovals([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 0, 'Test 110');
test(minLengthAfterRemovals([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8]), 0, 'Test 111');
test(minLengthAfterRemovals([1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 34, 'Test 112');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3]), 0, 'Test 113');
test(minLengthAfterRemovals([1,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 114');
test(minLengthAfterRemovals([1,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9]), 0, 'Test 115');
test(minLengthAfterRemovals([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5]), 1, 'Test 116');
test(minLengthAfterRemovals([1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,5,6,6,6,6]), 1, 'Test 117');
test(minLengthAfterRemovals([1,1,1,2,2,2,2,3,3,4,4,4,5,5,5,5,5]), 1, 'Test 118');
test(minLengthAfterRemovals([1,1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 23, 'Test 119');
test(minLengthAfterRemovals([1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4]), 0, 'Test 120');
test(minLengthAfterRemovals([1,1,1,1,1,2,2,2,2,3,3,3,4,4]), 0, 'Test 121');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

