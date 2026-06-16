// Test: 1681. Minimum Incompatibility
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { minimumIncompatibility } = require("./solution");

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

console.log("\n1681. Minimum Incompatibility\n");

test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 1), 15, 'Test 1');
test(minimumIncompatibility([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], 8), 8, 'Test 2');
test(minimumIncompatibility([1,2,3,4,5,6,7,8], 4), 4, 'Test 3');
test(minimumIncompatibility([6,3,8,1,3,1,2,2], 4), 6, 'Test 4');
test(minimumIncompatibility([1,2,1,4], 2), 4, 'Test 5');
test(minimumIncompatibility([1,2,3,4,5,6,7,8], 2), 6, 'Test 6');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4), 12, 'Test 7');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 16), 0, 'Test 8');
test(minimumIncompatibility([1,1,2,2,3,3,4,4], 4), 4, 'Test 9');
test(minimumIncompatibility([5,3,3,6,3,3], 3), -1, 'Test 10');
test(minimumIncompatibility([1,1,1,1,1,1,1,1], 1), -1, 'Test 11');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 2), 14, 'Test 12');
test(minimumIncompatibility([4,4,4,4,4,4,4,4], 8), 0, 'Test 13');
test(minimumIncompatibility([1,2,3,3,4,5,6,7,8,8,9,10,11,12,13,14], 2), 18, 'Test 14');
test(minimumIncompatibility([1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4], 4), 12, 'Test 15');
test(minimumIncompatibility([2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7], 4), 14, 'Test 16');
test(minimumIncompatibility([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 4), 12, 'Test 17');
test(minimumIncompatibility([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3], 3), -1, 'Test 18');
test(minimumIncompatibility([1,2,3,4,4,4,5,6,6,7,7,8,9,10,11,12], 3), -1, 'Test 19');
test(minimumIncompatibility([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5], 6), 10, 'Test 20');
test(minimumIncompatibility([1,2,3,3,3,3,4,5,5,6,6,7,8,8,9,10], 2), -1, 'Test 21');
test(minimumIncompatibility([1,2,2,3,3,4,4,4,5,5,6,6,7,7,8,8], 6), 9, 'Test 22');
test(minimumIncompatibility([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,9], 7), 9, 'Test 23');
test(minimumIncompatibility([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6], 4), 14, 'Test 24');
test(minimumIncompatibility([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,1], 2), 14, 'Test 25');
test(minimumIncompatibility([2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9], 6), 9, 'Test 26');
test(minimumIncompatibility([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 8), 8, 'Test 27');
test(minimumIncompatibility([3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6], 4), 12, 'Test 28');
test(minimumIncompatibility([1,1,2,3,3,4,5,5,6,7,7,8,9,9,10,11], 4), 15, 'Test 29');
test(minimumIncompatibility([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], 2), 14, 'Test 30');
test(minimumIncompatibility([1,2,2,3,3,3,4,4,4,4,5,5,5,6,6,7], 2), -1, 'Test 31');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15], 5), -1, 'Test 32');
test(minimumIncompatibility([1,3,2,6,4,5,7,8,10,9,12,11,14,13,16,15], 4), 12, 'Test 33');
test(minimumIncompatibility([1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 2), 20, 'Test 34');
test(minimumIncompatibility([1,2,2,2,3,4,5,5,6,6,6,7,8,8,9,9], 3), -1, 'Test 35');
test(minimumIncompatibility([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,9], 4), 13, 'Test 36');
test(minimumIncompatibility([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 5), Execution timed out, 'Test 37');
test(minimumIncompatibility([1,2,2,3,4,5,6,6,7,8,9,10,11,12,13,14], 4), 15, 'Test 38');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,12,14,15,16], 6), 9, 'Test 39');
test(minimumIncompatibility([1,1,2,2,3,4,4,5,5,6,7,8,8,9,10,11], 3), -1, 'Test 40');
test(minimumIncompatibility([1,3,3,4,5,5,6,7,7,8,8,9,10,10,11,12], 4), 15, 'Test 41');
test(minimumIncompatibility([1,3,3,5,7,7,9,9,11,11,13,13,15,15,17,17], 8), 16, 'Test 42');
test(minimumIncompatibility([1,3,3,5,5,7,7,9,9,11,11,13,13,15,15,17], 4), 24, 'Test 43');
test(minimumIncompatibility([1,2,3,4,4,5,6,6,7,8,9,9,10,11,12,12], 8), 11, 'Test 44');
test(minimumIncompatibility([3,3,3,3,3,3,3,3,4,4,4,4,5,5,6,6], 4), -1, 'Test 45');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32], 8), Execution timed out, 'Test 46');
test(minimumIncompatibility([1,2,2,3,4,5,5,6,7,8,9,10,11,12,13,13], 4), 17, 'Test 47');
test(minimumIncompatibility([2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5], 5), -1, 'Test 48');
test(minimumIncompatibility([1,1,2,2,3,3,3,4,4,5,5,6,6,7,7,8], 4), 13, 'Test 49');
test(minimumIncompatibility([1,2,2,3,3,4,5,5,6,6,7,7,8,8,9,9], 4), 13, 'Test 50');
test(minimumIncompatibility([1,1,1,2,3,4,5,5,6,7,8,8,9,10,11,11], 4), 22, 'Test 51');
test(minimumIncompatibility([1,2,2,3,3,4,5,6,7,8,9,10,11,12,13,14], 4), 13, 'Test 52');
test(minimumIncompatibility([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], 4), 12, 'Test 53');
test(minimumIncompatibility([1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9], 6), 8, 'Test 54');
test(minimumIncompatibility([2,2,2,3,3,4,4,5,5,5,6,6,7,8,8,9], 3), -1, 'Test 55');
test(minimumIncompatibility([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9], 8), 8, 'Test 56');
test(minimumIncompatibility([1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16], 4), 16, 'Test 57');
test(minimumIncompatibility([1,2,2,3,3,3,4,4,4,4,5,5,5,6,6,7], 8), 8, 'Test 58');
test(minimumIncompatibility([1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), -1, 'Test 59');
test(minimumIncompatibility([2,2,2,3,3,3,3,3,4,4,4,4,5,5,6,6], 4), -1, 'Test 60');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 8), 8, 'Test 61');
test(minimumIncompatibility([1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3), -1, 'Test 62');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8], 8), 8, 'Test 63');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,8,8,9,10,11,12,13,13], 4), 16, 'Test 64');
test(minimumIncompatibility([1,2,2,3,3,3,4,5,6,6,7,8,9,9,10,10], 5), -1, 'Test 65');
test(minimumIncompatibility([3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6], 2), -1, 'Test 66');
test(minimumIncompatibility([1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4], 2), -1, 'Test 67');
test(minimumIncompatibility([1,2,3,4,5,5,6,7,8,8,9,10,11,11,12,13], 4), 15, 'Test 68');
test(minimumIncompatibility([1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8], 8), 9, 'Test 69');
test(minimumIncompatibility([6,3,8,1,3,1,2,2,4,5,7,9,10,11,12,13], 4), 13, 'Test 70');
test(minimumIncompatibility([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9], 2), 14, 'Test 71');
test(minimumIncompatibility([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), 17, 'Test 72');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 10), Execution timed out, 'Test 73');
test(minimumIncompatibility([2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5], 4), 12, 'Test 74');
test(minimumIncompatibility([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 9), 10, 'Test 75');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), Execution timed out, 'Test 76');
test(minimumIncompatibility([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], 10), Execution timed out, 'Test 77');
test(minimumIncompatibility([1,2,3,4,4,5,6,7,8,8,9,10,11,12,13,13], 4), 16, 'Test 78');
test(minimumIncompatibility([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5], 2), -1, 'Test 79');
test(minimumIncompatibility([1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9], 9), 0, 'Test 80');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15], 8), 9, 'Test 81');
test(minimumIncompatibility([1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11], 4), 14, 'Test 82');
test(minimumIncompatibility([2,2,2,3,3,3,4,4,5,5,6,6,7,7,8,8], 4), 16, 'Test 83');
test(minimumIncompatibility([2,2,3,4,5,5,6,6,7,8,9,10,10,11,12,12], 8), 10, 'Test 84');
test(minimumIncompatibility([1,2,2,3,3,3,4,4,4,4,5,5,5,6,6,7], 4), 12, 'Test 85');
test(minimumIncompatibility([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4], 4), 12, 'Test 86');
test(minimumIncompatibility([1,2,3,4,5,6,6,7,8,9,10,11,12,13,14,15], 5), -1, 'Test 87');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), Execution timed out, 'Test 88');
test(minimumIncompatibility([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 2), 14, 'Test 89');
test(minimumIncompatibility([1,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6], 3), -1, 'Test 90');
test(minimumIncompatibility([1,1,2,3,3,4,4,5,5,6,6,7,7,8,8,9], 3), -1, 'Test 91');
test(minimumIncompatibility([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9], 3), -1, 'Test 92');
test(minimumIncompatibility([1,3,3,3,3,5,5,5,7,7,7,7,9,9,9,9], 2), -1, 'Test 93');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,10,12,13,14,15,16], 8), 9, 'Test 94');
test(minimumIncompatibility([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], 1), -1, 'Test 95');
test(minimumIncompatibility([1,1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], 5), Execution timed out, 'Test 96');
test(minimumIncompatibility([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8], 4), 12, 'Test 97');
test(minimumIncompatibility([1,2,3,4,5,6,7,7,8,9,9,10,10,11,12,13], 4), 13, 'Test 98');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

