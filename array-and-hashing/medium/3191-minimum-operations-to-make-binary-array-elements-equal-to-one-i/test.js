// Test: 3191. Minimum Operations To Make Binary Array Elements Equal To One I
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3191. Minimum Operations To Make Binary Array Elements Equal To One I\n");

test(minOperations([0,1,0,1,0,1]), 3, 'Test 1');
test(minOperations([0,0,1,1,1,0,0]), -1, 'Test 2');
test(minOperations([0,0,1,0,0,1,0,1,1,0]), 4, 'Test 3');
test(minOperations([1,0,1,0,1,0,1,0,1]), -1, 'Test 4');
test(minOperations([0,0,0,1,1,1,0,0,0]), 2, 'Test 5');
test(minOperations([1,1,1,1,1,1,1]), 0, 'Test 6');
test(minOperations([1,0,0,1,0,0]), 2, 'Test 7');
test(minOperations([0,1,1,1]), -1, 'Test 8');
test(minOperations([0,0,0]), 1, 'Test 9');
test(minOperations([1,0,1,0,1,0]), 3, 'Test 10');
test(minOperations([1,0,0,1,0,0,1,1,1]), 2, 'Test 11');
test(minOperations([0,0,0,0,0,0,0]), -1, 'Test 12');
test(minOperations([0,1,1,1,0,0]), 3, 'Test 13');
test(minOperations([0,0,0,0,0,0]), 2, 'Test 14');
test(minOperations([1,1,0,0,0,1,1]), 1, 'Test 15');
test(minOperations([1,1,0,0,1,1,0,0,1,1]), -1, 'Test 16');
test(minOperations([1,1,1,0,0,0]), 1, 'Test 17');
test(minOperations([1,0,1,0,1,0,1]), 3, 'Test 18');
test(minOperations([1,1,1,1,1,1]), 0, 'Test 19');
test(minOperations([0,1,0,1,0,1,0,1,0]), -1, 'Test 20');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 21');
test(minOperations([0,1,1,0,0,1,1,0,0,1,1,0]), 6, 'Test 22');
test(minOperations([0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1]), -1, 'Test 23');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 24');
test(minOperations([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), -1, 'Test 25');
test(minOperations([0,0,1,1,1,1,0,0,0,0,0,0]), -1, 'Test 26');
test(minOperations([0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0]), -1, 'Test 27');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1]), 6, 'Test 28');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), -1, 'Test 29');
test(minOperations([0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0]), -1, 'Test 30');
test(minOperations([1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), -1, 'Test 31');
test(minOperations([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1]), 3, 'Test 32');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 33');
test(minOperations([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), 3, 'Test 34');
test(minOperations([1,0,0,1,1,0,0,1,1,0,0,1,1]), 6, 'Test 35');
test(minOperations([1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 36');
test(minOperations([1,0,0,0,1,1,0,1,0,1,1,0]), -1, 'Test 37');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 38');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 15, 'Test 39');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 24, 'Test 40');
test(minOperations([0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1]), -1, 'Test 41');
test(minOperations([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), -1, 'Test 42');
test(minOperations([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0]), 10, 'Test 43');
test(minOperations([0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]), 8, 'Test 44');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 45');
test(minOperations([0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]), -1, 'Test 46');
test(minOperations([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0]), 8, 'Test 47');
test(minOperations([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), -1, 'Test 48');
test(minOperations([0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1]), -1, 'Test 49');
test(minOperations([1,0,0,1,0,0,1,0,0,1,0,0,1]), 4, 'Test 50');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), -1, 'Test 51');
test(minOperations([0,0,0,1,1,1,0,0,1,1,1,0,0]), -1, 'Test 52');
test(minOperations([0,1,0,1,0,1,0,1,0,1,0,1]), 6, 'Test 53');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 9, 'Test 54');
test(minOperations([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), -1, 'Test 55');
test(minOperations([0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 11, 'Test 56');
test(minOperations([0,0,0,1,1,1,0,0,0,1,1,1]), 2, 'Test 57');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), -1, 'Test 58');
test(minOperations([1,0,0,1,0,0,1,0,0,1,0,0,1,0]), -1, 'Test 59');
test(minOperations([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), 5, 'Test 60');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 61');
test(minOperations([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), -1, 'Test 62');
test(minOperations([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), -1, 'Test 63');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 64');
test(minOperations([0,1,0,0,1,1,0,0,1,1,0,0,1,1,0]), -1, 'Test 65');
test(minOperations([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0]), 3, 'Test 66');
test(minOperations([0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 67');
test(minOperations([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]), -1, 'Test 68');
test(minOperations([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0]), 12, 'Test 69');
test(minOperations([0,1,1,0,0,1,1,0,0,1,1,0,0,1]), -1, 'Test 70');
test(minOperations([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), -1, 'Test 71');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), -1, 'Test 72');
test(minOperations([0,1,0,0,1,0,1,0,1,0,1,0,1,0]), -1, 'Test 73');
test(minOperations([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), -1, 'Test 74');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0]), 6, 'Test 75');
test(minOperations([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]), -1, 'Test 76');
test(minOperations([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]), 4, 'Test 77');
test(minOperations([1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1]), -1, 'Test 78');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 79');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 5, 'Test 80');
test(minOperations([1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1]), -1, 'Test 81');
test(minOperations([0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1]), -1, 'Test 82');
test(minOperations([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), 4, 'Test 83');
test(minOperations([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0]), 4, 'Test 84');
test(minOperations([0,0,1,1,0,1,0,1,1,0,1,0,1,0,0]), -1, 'Test 85');
test(minOperations([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), -1, 'Test 86');
test(minOperations([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0]), -1, 'Test 87');
test(minOperations([1,1,0,0,1,1,0,0,1,1,0,0]), 6, 'Test 88');
test(minOperations([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0]), -1, 'Test 89');
test(minOperations([1,1,0,0,0,1,1,0,0,0,1,1,0,0,0]), 3, 'Test 90');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 12, 'Test 91');
test(minOperations([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), -1, 'Test 92');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 93');
test(minOperations([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 94');
test(minOperations([0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]), -1, 'Test 95');
test(minOperations([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 9, 'Test 96');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 97');
test(minOperations([1,1,0,0,1,0,1,1,0,1,1,0,1]), -1, 'Test 98');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 99');
test(minOperations([0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]), -1, 'Test 100');
test(minOperations([1,1,0,1,1,0,0,1,0,0,1,0,0,1,1]), -1, 'Test 101');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), -1, 'Test 102');
test(minOperations([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 103');
test(minOperations([0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0]), 2, 'Test 104');
test(minOperations([0,1,0,0,1,1,0,0,1,0,1,0]), -1, 'Test 105');
test(minOperations([0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0]), 10, 'Test 106');
test(minOperations([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), -1, 'Test 107');
test(minOperations([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), 2, 'Test 108');
test(minOperations([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]), -1, 'Test 109');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

