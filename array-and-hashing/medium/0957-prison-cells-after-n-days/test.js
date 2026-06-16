// Test: 957. Prison Cells After N Days
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { prisonAfterNDays } = require("./solution");

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

console.log("\n957. Prison Cells After N Days\n");

test(prisonAfterNDays([0,0,0,0,0,0,0,0], 5), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 1');
test(prisonAfterNDays([1,1,1,1,1,1,1,1], 2), [0, 0, 1, 1, 1, 1, 0, 0], 'Test 2');
test(prisonAfterNDays([1,1,1,1,1,1,1,1], 15), [0, 1, 1, 1, 1, 1, 1, 0], 'Test 3');
test(prisonAfterNDays([1,0,1,0,1,0,1,0], 1), [0, 1, 1, 1, 1, 1, 1, 0], 'Test 4');
test(prisonAfterNDays([0,1,1,0,1,1,1,0], 2), [0, 1, 0, 1, 1, 1, 0, 0], 'Test 5');
test(prisonAfterNDays([0,0,0,0,0,0,0,0], 15), [0, 1, 1, 1, 1, 1, 1, 0], 'Test 6');
test(prisonAfterNDays([1,1,0,1,0,0,1,1], 15), [0, 0, 1, 1, 0, 0, 0, 0], 'Test 7');
test(prisonAfterNDays([1,0,0,1,0,0,1,0], 1000000000), [0, 0, 1, 1, 1, 1, 1, 0], 'Test 8');
test(prisonAfterNDays([0,0,0,0,0,0,0,0], 2), [0, 0, 1, 1, 1, 1, 0, 0], 'Test 9');
test(prisonAfterNDays([0,1,1,0,1,1,0,0], 15), [0, 0, 0, 1, 0, 0, 0, 0], 'Test 10');
test(prisonAfterNDays([1,1,1,1,1,1,1,1], 3), [0, 0, 0, 1, 1, 0, 0, 0], 'Test 11');
test(prisonAfterNDays([0,0,0,0,0,1,0,0], 5), [0, 1, 1, 1, 0, 0, 0, 0], 'Test 12');
test(prisonAfterNDays([1,1,1,1,1,1,1,1], 1), [0, 1, 1, 1, 1, 1, 1, 0], 'Test 13');
test(prisonAfterNDays([0,1,1,1,1,1,1,0], 14), [0, 1, 1, 1, 1, 1, 1, 0], 'Test 14');
test(prisonAfterNDays([0,1,0,1,1,0,0,1], 7), [0, 0, 1, 1, 0, 0, 0, 0], 'Test 15');
test(prisonAfterNDays([1,0,0,0,0,0,0,1], 30), [0, 0, 0, 1, 1, 0, 0, 0], 'Test 16');
test(prisonAfterNDays([0,1,1,0,0,1,1,0], 20), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 17');
test(prisonAfterNDays([1,0,0,1,0,0,1,0], 28), [0, 0, 1, 1, 1, 0, 0, 0], 'Test 18');
test(prisonAfterNDays([1,1,0,1,0,1,0,1], 15), [0, 0, 1, 1, 1, 1, 1, 0], 'Test 19');
test(prisonAfterNDays([1,1,0,1,1,0,1,1], 7), [0, 0, 1, 0, 0, 1, 0, 0], 'Test 20');
test(prisonAfterNDays([0,1,1,1,1,1,1,0], 1000), [0, 0, 0, 0, 0, 0, 0, 0], 'Test 21');
test(prisonAfterNDays([1,1,0,0,0,0,1,1], 10), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 22');
test(prisonAfterNDays([1,0,1,0,0,0,1,1], 100), [0, 0, 0, 1, 1, 0, 1, 0], 'Test 23');
test(prisonAfterNDays([1,0,0,0,0,0,0,1], 20), [0, 0, 0, 0, 0, 0, 0, 0], 'Test 24');
test(prisonAfterNDays([0,1,0,0,1,0,0,1], 1000), [0, 1, 1, 1, 1, 1, 0, 0], 'Test 25');
test(prisonAfterNDays([0,1,1,1,0,1,1,0], 500), [0, 1, 1, 0, 1, 0, 0, 0], 'Test 26');
test(prisonAfterNDays([0,0,1,0,0,1,0,0], 1000000000), [0, 0, 1, 0, 0, 1, 0, 0], 'Test 27');
test(prisonAfterNDays([0,0,1,1,1,1,0,0], 50), [0, 0, 0, 1, 1, 0, 0, 0], 'Test 28');
test(prisonAfterNDays([0,0,0,1,1,1,1,0], 10), [0, 1, 1, 1, 1, 0, 1, 0], 'Test 29');
test(prisonAfterNDays([0,1,0,0,0,1,0,1], 300), [0, 0, 1, 1, 0, 1, 1, 0], 'Test 30');
test(prisonAfterNDays([1,0,1,1,0,0,1,0], 10), [0, 1, 1, 0, 0, 1, 1, 0], 'Test 31');
test(prisonAfterNDays([0,1,1,1,0,1,1,0], 2000000000), [0, 1, 0, 0, 0, 1, 1, 0], 'Test 32');
test(prisonAfterNDays([0,0,0,1,1,1,0,0], 999999999), [0, 1, 0, 1, 0, 1, 0, 0], 'Test 33');
test(prisonAfterNDays([1,0,0,1,1,0,0,1], 1250), [0, 0, 0, 1, 1, 0, 0, 0], 'Test 34');
test(prisonAfterNDays([1,1,1,0,0,1,1,1], 25), [0, 0, 0, 0, 0, 0, 0, 0], 'Test 35');
test(prisonAfterNDays([0,1,1,1,0,1,1,0], 20), [0, 0, 0, 0, 1, 0, 1, 0], 'Test 36');
test(prisonAfterNDays([1,0,0,0,0,1,0,0], 1000), [0, 0, 0, 0, 0, 1, 0, 0], 'Test 37');
test(prisonAfterNDays([1,0,1,0,1,0,1,0], 1000000000), [0, 1, 1, 0, 0, 1, 1, 0], 'Test 38');
test(prisonAfterNDays([1,1,0,0,1,0,0,1], 1000), [0, 1, 0, 1, 1, 1, 1, 0], 'Test 39');
test(prisonAfterNDays([1,1,1,1,1,1,1,1], 1000000), [0, 1, 1, 1, 1, 1, 1, 0], 'Test 40');
test(prisonAfterNDays([1,1,1,0,1,0,1,1], 1000000000), [0, 1, 1, 1, 0, 1, 1, 0], 'Test 41');
test(prisonAfterNDays([1,1,0,1,0,1,0,1], 5), [0, 1, 0, 0, 1, 1, 1, 0], 'Test 42');
test(prisonAfterNDays([1,1,0,0,1,1,0,0], 500000000), [0, 0, 1, 1, 1, 1, 0, 0], 'Test 43');
test(prisonAfterNDays([0,1,0,1,0,1,0,1], 30), [0, 0, 1, 1, 1, 1, 0, 0], 'Test 44');
test(prisonAfterNDays([1,1,0,0,1,1,0,0], 67890), [0, 0, 0, 1, 1, 0, 0, 0], 'Test 45');
test(prisonAfterNDays([0,1,0,1,0,1,0,1], 200), [0, 1, 0, 0, 0, 0, 1, 0], 'Test 46');
test(prisonAfterNDays([1,0,0,0,0,0,0,1], 100000000), [0, 0, 0, 1, 1, 0, 0, 0], 'Test 47');
test(prisonAfterNDays([0,0,1,1,1,1,1,0], 100), [0, 1, 0, 0, 1, 0, 0, 0], 'Test 48');
test(prisonAfterNDays([0,1,0,1,0,1,0,1], 50), [0, 1, 1, 1, 1, 1, 1, 0], 'Test 49');
test(prisonAfterNDays([0,0,0,0,0,0,0,0], 1000000000), [0, 1, 1, 0, 0, 1, 1, 0], 'Test 50');
test(prisonAfterNDays([0,1,1,1,1,1,1,0], 10000), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 51');
test(prisonAfterNDays([1,0,0,0,0,0,0,1], 1000000000), [0, 0, 0, 0, 0, 0, 0, 0], 'Test 52');
test(prisonAfterNDays([1,1,1,0,0,0,1,1], 50), [0, 0, 0, 1, 0, 0, 1, 0], 'Test 53');
test(prisonAfterNDays([1,1,1,1,0,0,0,0], 50), [0, 1, 1, 0, 0, 1, 1, 0], 'Test 54');
test(prisonAfterNDays([0,0,1,0,0,1,0,0], 30), [0, 0, 1, 0, 0, 1, 0, 0], 'Test 55');
test(prisonAfterNDays([0,0,0,1,0,0,0,0], 500), [0, 1, 0, 0, 1, 1, 0, 0], 'Test 56');
test(prisonAfterNDays([1,1,0,0,0,1,1,0], 15), [0, 0, 0, 1, 0, 0, 0, 0], 'Test 57');
test(prisonAfterNDays([1,1,0,0,0,1,0,0], 15), [0, 0, 0, 1, 0, 1, 0, 0], 'Test 58');
test(prisonAfterNDays([1,0,1,0,0,1,0,1], 1000000), [0, 1, 1, 0, 0, 1, 1, 0], 'Test 59');
test(prisonAfterNDays([0,0,1,1,1,1,1,0], 50), [0, 0, 1, 1, 1, 0, 0, 0], 'Test 60');
test(prisonAfterNDays([1,1,0,1,0,1,0,1], 999999999), [0, 1, 0, 0, 1, 1, 1, 0], 'Test 61');
test(prisonAfterNDays([1,1,0,0,1,1,0,1], 15), [0, 0, 0, 0, 0, 0, 1, 0], 'Test 62');
test(prisonAfterNDays([0,0,1,1,0,0,1,1], 1000), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 63');
test(prisonAfterNDays([1,0,1,0,1,0,1,0], 78654321), [0, 1, 0, 0, 0, 0, 1, 0], 'Test 64');
test(prisonAfterNDays([1,0,1,0,1,0,1,0], 1500000000), [0, 0, 1, 1, 1, 1, 0, 0], 'Test 65');
test(prisonAfterNDays([1,0,0,0,0,0,0,1], 50), [0, 0, 1, 1, 1, 1, 0, 0], 'Test 66');
test(prisonAfterNDays([0,1,1,0,1,0,1,0], 1000000000), [0, 0, 0, 1, 0, 0, 0, 0], 'Test 67');
test(prisonAfterNDays([1,1,0,1,0,1,0,0], 200), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 68');
test(prisonAfterNDays([1,0,0,1,1,0,0,1], 1000000000), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 69');
test(prisonAfterNDays([0,1,0,0,1,1,0,1], 10), [0, 1, 1, 0, 0, 1, 1, 0], 'Test 70');
test(prisonAfterNDays([0,0,1,0,1,0,1,0], 1000000), [0, 1, 1, 1, 1, 1, 0, 0], 'Test 71');
test(prisonAfterNDays([1,0,0,0,0,0,0,1], 100), [0, 0, 0, 1, 1, 0, 0, 0], 'Test 72');
test(prisonAfterNDays([1,1,1,0,0,1,1,1], 15), [0, 1, 0, 0, 0, 0, 1, 0], 'Test 73');
test(prisonAfterNDays([0,1,0,1,0,1,0,1], 14), [0, 0, 0, 0, 0, 0, 0, 0], 'Test 74');
test(prisonAfterNDays([0,1,0,1,0,1,0,1], 1000), [0, 1, 1, 0, 0, 1, 1, 0], 'Test 75');
test(prisonAfterNDays([1,0,1,0,1,0,1,0], 999999999), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 76');
test(prisonAfterNDays([0,1,1,0,0,1,1,0], 1000), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 77');
test(prisonAfterNDays([0,1,0,0,1,0,1,0], 14), [0, 1, 0, 0, 1, 0, 1, 0], 'Test 78');
test(prisonAfterNDays([1,0,1,1,1,1,0,1], 10), [0, 0, 0, 0, 0, 0, 0, 0], 'Test 79');
test(prisonAfterNDays([1,0,1,0,0,1,0,1], 60), [0, 0, 1, 1, 1, 1, 0, 0], 'Test 80');
test(prisonAfterNDays([0,0,0,1,1,0,0,0], 30), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 81');
test(prisonAfterNDays([0,1,0,1,0,1,0,1], 100), [0, 0, 1, 1, 1, 1, 0, 0], 'Test 82');
test(prisonAfterNDays([0,1,0,1,0,1,0,1], 500000000), [0, 0, 0, 1, 1, 0, 0, 0], 'Test 83');
test(prisonAfterNDays([1,0,1,1,0,0,1,0], 150), [0, 1, 1, 0, 0, 1, 1, 0], 'Test 84');
test(prisonAfterNDays([0,0,1,1,1,1,0,0], 1500), [0, 1, 0, 0, 0, 0, 1, 0], 'Test 85');
test(prisonAfterNDays([0,0,1,1,1,1,0,0], 7), [0, 0, 1, 1, 1, 1, 0, 0], 'Test 86');
test(prisonAfterNDays([1,0,1,1,0,1,0,1], 1000000000), [0, 0, 0, 1, 0, 0, 1, 0], 'Test 87');
test(prisonAfterNDays([1,0,1,1,0,0,1,1], 100000), [0, 1, 1, 0, 1, 0, 1, 0], 'Test 88');
test(prisonAfterNDays([1,1,0,0,0,0,1,1], 50), [0, 0, 0, 1, 1, 0, 0, 0], 'Test 89');
test(prisonAfterNDays([0,0,1,1,0,0,1,1], 30), [0, 1, 1, 1, 1, 1, 1, 0], 'Test 90');
test(prisonAfterNDays([0,0,1,1,1,1,0,0], 20), [0, 1, 1, 1, 1, 1, 1, 0], 'Test 91');
test(prisonAfterNDays([0,1,1,0,1,0,1,0], 1000000), [0, 1, 1, 1, 1, 0, 0, 0], 'Test 92');
test(prisonAfterNDays([1,1,0,1,0,1,0,1], 750), [0, 1, 1, 1, 1, 1, 0, 0], 'Test 93');
test(prisonAfterNDays([1,1,1,0,1,0,1,1], 12), [0, 0, 0, 0, 1, 0, 1, 0], 'Test 94');
test(prisonAfterNDays([1,1,1,1,1,1,1,1], 100), [0, 0, 1, 1, 1, 1, 0, 0], 'Test 95');
test(prisonAfterNDays([1,1,0,0,1,1,0,0], 20), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 96');
test(prisonAfterNDays([1,0,0,1,1,0,0,1], 1000), [0, 1, 0, 1, 1, 0, 1, 0], 'Test 97');
test(prisonAfterNDays([1,1,0,0,0,0,1,1], 10000), [0, 1, 1, 0, 0, 1, 1, 0], 'Test 98');
test(prisonAfterNDays([1,1,0,0,0,0,0,1], 8), [0, 0, 1, 1, 1, 0, 0, 0], 'Test 99');
test(prisonAfterNDays([0,0,0,1,1,0,0,0], 500000000), [0, 1, 1, 0, 0, 1, 1, 0], 'Test 100');
test(prisonAfterNDays([1,0,1,1,0,1,1,1], 20), [0, 0, 1, 1, 1, 0, 0, 0], 'Test 101');
test(prisonAfterNDays([0,0,1,1,0,0,1,1], 100), [0, 1, 1, 1, 1, 1, 1, 0], 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

