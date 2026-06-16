// Test: 2028. Find Missing Observations
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { missingRolls } = require("./solution");

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

console.log("\n2028. Find Missing Observations\n");

test(missingRolls([1,2], 3, 2), [5, 4], 'Test 1');
test(missingRolls([1,3,5], 2, 2), [], 'Test 2');
test(missingRolls([5,5,5,5], 5, 4), [5, 5, 5, 5], 'Test 3');
test(missingRolls([5,6,6,6], 5, 3), [4, 4, 4], 'Test 4');
test(missingRolls([6,6,6,6], 6, 3), [6, 6, 6], 'Test 5');
test(missingRolls([3,3,3,3,3,3], 3, 6), [3, 3, 3, 3, 3, 3], 'Test 6');
test(missingRolls([1,2,3,4], 6, 4), [], 'Test 7');
test(missingRolls([1,5,6], 3, 4), [3, 2, 2, 2], 'Test 8');
test(missingRolls([5,5,5,5], 5, 5), [5, 5, 5, 5, 5], 'Test 9');
test(missingRolls([1,1,1,1,1,1], 2, 6), [3, 3, 3, 3, 3, 3], 'Test 10');
test(missingRolls([3,2,4,3], 4, 2), [6, 6], 'Test 11');
test(missingRolls([6,6,6,6,6,6], 5, 6), [4, 4, 4, 4, 4, 4], 'Test 12');
test(missingRolls([1,1,1,1], 2, 4), [3, 3, 3, 3], 'Test 13');
test(missingRolls([3], 4, 1), [5], 'Test 14');
test(missingRolls([6], 6, 1), [6], 'Test 15');
test(missingRolls([1,1,1], 2, 3), [3, 3, 3], 'Test 16');
test(missingRolls([6,6,6], 5, 3), [4, 4, 4], 'Test 17');
test(missingRolls([3,3,3,3,3,3,3,3,3,3], 3, 10), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 18');
test(missingRolls([1,2,3,4,5,6], 3, 6), [3, 3, 3, 2, 2, 2], 'Test 19');
test(missingRolls([1], 6, 5), [], 'Test 20');
test(missingRolls([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 6, 15), [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 'Test 21');
test(missingRolls([3,3,3,3,3,3], 4, 3), [6, 6, 6], 'Test 22');
test(missingRolls([1,1,1,1], 2, 10), [3, 3, 3, 3, 2, 2, 2, 2, 2, 2], 'Test 23');
test(missingRolls([1,1,1,1,1], 5, 5), [], 'Test 24');
test(missingRolls([2,2,2,2,2,2,2,2,2,2], 3, 5), [5, 5, 5, 5, 5], 'Test 25');
test(missingRolls([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 4, 20), [], 'Test 26');
test(missingRolls([3,3,3,3,3,3], 3, 3), [3, 3, 3], 'Test 27');
test(missingRolls([1,1,1,1,1,1,1,1,1,1,1,1], 2, 12), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 28');
test(missingRolls([1,6,3,4,2,5], 3, 5), [3, 3, 2, 2, 2], 'Test 29');
test(missingRolls([2,4,6,1,3,5], 4, 3), [5, 5, 5], 'Test 30');
test(missingRolls([1,2,3,4,5,6,6,5,4,3,2,1], 4, 12), [5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4], 'Test 31');
test(missingRolls([1, 6, 1, 6, 1, 6], 4, 3), [5, 5, 5], 'Test 32');
test(missingRolls([6,6,6,6,6,6], 6, 10), [6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 'Test 33');
test(missingRolls([1, 2, 3, 4, 5], 4, 5), [5, 5, 5, 5, 5], 'Test 34');
test(missingRolls([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 4, 20), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 35');
test(missingRolls([3, 3, 3, 3], 5, 5), [], 'Test 36');
test(missingRolls([5, 1, 5, 1, 5, 1], 4, 2), [], 'Test 37');
test(missingRolls([1,2,3,4,5,6,6,5,4,3,2,1,6,5,4,3,2,1], 4, 18), [5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 38');
test(missingRolls([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 3, 15), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 39');
test(missingRolls([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2, 15), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 40');
test(missingRolls([1,1,1,1,1], 2, 10), [3, 3, 3, 3, 3, 2, 2, 2, 2, 2], 'Test 41');
test(missingRolls([6,5,4,3,2,1], 3, 7), [3, 3, 3, 3, 2, 2, 2], 'Test 42');
test(missingRolls([1, 2, 3], 2, 9), [2, 2, 2, 2, 2, 2, 2, 2, 2], 'Test 43');
test(missingRolls([4,4,4,4,4,4,4,4], 4, 1), [4], 'Test 44');
test(missingRolls([2,2,2,2,2,2], 2, 12), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 'Test 45');
test(missingRolls([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2, 20), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 46');
test(missingRolls([2, 3, 4, 5, 6], 4, 6), [4, 4, 4, 4, 4, 4], 'Test 47');
test(missingRolls([1,2,3,4,5,6], 4, 3), [5, 5, 5], 'Test 48');
test(missingRolls([6,6,6,6,6,6,6,6,6,6,6,6], 6, 12), [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 'Test 49');
test(missingRolls([6, 4, 6, 4, 6, 4], 5, 5), [5, 5, 5, 5, 5], 'Test 50');
test(missingRolls([1,1,1,1,1,1,1,1,1,1], 3, 10), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 51');
test(missingRolls([5,5,5,5,5,5,5,5,5,5,5,5], 5, 12), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 52');
test(missingRolls([6,5,4,3,2,1], 4, 10), [5, 5, 5, 4, 4, 4, 4, 4, 4, 4], 'Test 53');
test(missingRolls([5,1,5,1,5,1], 3, 6), [3, 3, 3, 3, 3, 3], 'Test 54');
test(missingRolls([4, 4, 4, 4, 4, 4], 5, 1), [], 'Test 55');
test(missingRolls([6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 5, 10), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 56');
test(missingRolls([6,6,6,6,6,6], 6, 6), [6, 6, 6, 6, 6, 6], 'Test 57');
test(missingRolls([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 3, 20), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 58');
test(missingRolls([1,1,1,1,1,1,1,1,1,1], 1, 10), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 59');
test(missingRolls([6, 6, 6, 6, 6, 6], 6, 6), [6, 6, 6, 6, 6, 6], 'Test 60');
test(missingRolls([1,1,2,2,3,3], 3, 3), [5, 5, 5], 'Test 61');
test(missingRolls([2, 2, 2, 2, 2, 2, 2, 2, 2], 3, 6), [5, 5, 5, 4, 4, 4], 'Test 62');
test(missingRolls([1,1,1,1,1,1,1,1,1,1], 2, 10), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 63');
test(missingRolls([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 6, 18), [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 'Test 64');
test(missingRolls([1,6,1,6,1,6], 4, 6), [5, 5, 5, 4, 4, 4], 'Test 65');
test(missingRolls([1,6,1,6,1,6], 4, 3), [5, 5, 5], 'Test 66');
test(missingRolls([2, 2, 2, 2, 2, 2, 2], 3, 4), [5, 5, 5, 4], 'Test 67');
test(missingRolls([1,2,3,4,5], 2, 1), [], 'Test 68');
test(missingRolls([2,4,6,5,4,3,2], 4, 5), [5, 5, 4, 4, 4], 'Test 69');
test(missingRolls([6,6,6,6,6,6], 5, 5), [4, 4, 4, 4, 3], 'Test 70');
test(missingRolls([3,3,3,3], 3, 0), Error: integer division or modulo by zero, 'Test 71');
test(missingRolls([6,6,6,6], 4, 8), [3, 3, 3, 3, 3, 3, 3, 3], 'Test 72');
test(missingRolls([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 5, 20), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 73');
test(missingRolls([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3, 10), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 74');
test(missingRolls([6, 5, 4, 3, 2, 1], 4, 5), [5, 5, 5, 4, 4], 'Test 75');
test(missingRolls([1, 2, 3, 4, 5], 3, 5), [3, 3, 3, 3, 3], 'Test 76');
test(missingRolls([1,2,3,4,5,6,5,4,3,2,1], 4, 5), [6, 6, 6, 5, 5], 'Test 77');
test(missingRolls([1,2,3,4,5,6,1,2,3,4,5,6], 4, 12), [5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4], 'Test 78');
test(missingRolls([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 4, 5), [], 'Test 79');
test(missingRolls([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 4, 10), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 80');
test(missingRolls([6, 6, 6, 6, 6, 6], 3, 10), [2, 2, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 81');
test(missingRolls([1,1,1,1], 1, 100000), Execution timed out, 'Test 82');
test(missingRolls([4,5,6,1,2,3], 4, 6), [5, 5, 5, 4, 4, 4], 'Test 83');
test(missingRolls([1,2,2,3,3,4,5,6], 3, 10), [3, 3, 3, 3, 3, 3, 3, 3, 2, 2], 'Test 84');
test(missingRolls([1,1,1,1,1,1,1,1,1,1], 2, 5), [4, 4, 4, 4, 4], 'Test 85');
test(missingRolls([1,2,2,3,3,4,4,5,5,6,6], 4, 5), [5, 5, 5, 4, 4], 'Test 86');
test(missingRolls([5,5,5,5,5], 5, 5), [5, 5, 5, 5, 5], 'Test 87');
test(missingRolls([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2, 18), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 88');
test(missingRolls([5,5,5,5,5,5], 4, 6), [3, 3, 3, 3, 3, 3], 'Test 89');
test(missingRolls([5,5,5,5,5,5,5,5,5,5], 5, 10), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 90');
test(missingRolls([5,5,5,5,5,5,5,5,5,5], 4, 10), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 91');
test(missingRolls([1, 1, 1, 1, 1, 1, 1], 2, 9), [3, 3, 3, 3, 3, 3, 3, 2, 2], 'Test 92');
test(missingRolls([4,4,4,4,4,4], 4, 3), [4, 4, 4], 'Test 93');
test(missingRolls([3,3,3,3,3,3,3,3,3,3], 4, 5), [6, 6, 6, 6, 6], 'Test 94');
test(missingRolls([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 3, 20), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 95');
test(missingRolls([6], 1, 5), [], 'Test 96');
test(missingRolls([3, 3, 3, 3, 3, 3], 4, 3), [6, 6, 6], 'Test 97');
test(missingRolls([2,4,6,8,10], 4, 5), [2, 2, 2, 2, 2], 'Test 98');
test(missingRolls([6, 6, 6, 6, 6], 6, 1), [6], 'Test 99');
test(missingRolls([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6], 4, 12), [5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4], 'Test 100');
test(missingRolls([3, 3, 3, 3, 3, 3], 4, 10), [5, 5, 5, 5, 5, 5, 4, 4, 4, 4], 'Test 101');
test(missingRolls([6, 6, 6, 6], 5, 2), [3, 3], 'Test 102');
test(missingRolls([6,6,6,6,6,6], 5, 3), [3, 3, 3], 'Test 103');
test(missingRolls([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5, 20), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 104');
test(missingRolls([3,3,3,3,3], 5, 5), [], 'Test 105');
test(missingRolls([6,5,4,3,2,1], 4, 6), [5, 5, 5, 4, 4, 4], 'Test 106');
test(missingRolls([6,6,6,6,6,6,6,6,6,6], 6, 10), [6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 'Test 107');
test(missingRolls([1,2,3,4,5,6], 4, 5), [5, 5, 5, 4, 4], 'Test 108');
test(missingRolls([3,3,3,3,3,3], 4, 5), [6, 5, 5, 5, 5], 'Test 109');
test(missingRolls([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2, 20), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 110');
test(missingRolls([3,3,3,3,3,3,3,3,3,3], 5, 10), [], 'Test 111');
test(missingRolls([1,2,3,4,5], 3, 7), [3, 3, 3, 3, 3, 3, 3], 'Test 112');
test(missingRolls([1,2,3,4,5,6,7,8,9,10], 5, 5), [4, 4, 4, 4, 4], 'Test 113');
test(missingRolls([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5, 15), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 'Test 114');
test(missingRolls([6,6,6,6], 6, 100000), Execution timed out, 'Test 115');
test(missingRolls([1, 1, 2, 2, 3, 3], 3, 6), [4, 4, 4, 4, 4, 4], 'Test 116');
test(missingRolls([2,2,2,2,2,2,2,2,2,2], 3, 10), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 117');
test(missingRolls([1,1,2,2,3,3,4,4,5,5], 3, 5), [3, 3, 3, 3, 3], 'Test 118');
test(missingRolls([1,2,3], 4, 3), [6, 6, 6], 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

