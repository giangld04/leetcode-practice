// Test: 2600. K Items With The Maximum Sum
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { kItemsWithMaximumSum } = require("./solution");

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

console.log("\n2600. K Items With The Maximum Sum\n");

test(kItemsWithMaximumSum(25, 25, 0, 50), 25, 'Test 1');
test(kItemsWithMaximumSum(0, 50, 0, 10), 0, 'Test 2');
test(kItemsWithMaximumSum(3, 2, 0, 2), 2, 'Test 3');
test(kItemsWithMaximumSum(20, 20, 10, 50), 10, 'Test 4');
test(kItemsWithMaximumSum(10, 10, 10, 5), 5, 'Test 5');
test(kItemsWithMaximumSum(25, 0, 25, 30), 20, 'Test 6');
test(kItemsWithMaximumSum(50, 50, 50, 100), 50, 'Test 7');
test(kItemsWithMaximumSum(0, 25, 25, 50), -25, 'Test 8');
test(kItemsWithMaximumSum(1, 3, 2, 5), 0, 'Test 9');
test(kItemsWithMaximumSum(5, 5, 5, 5), 5, 'Test 10');
test(kItemsWithMaximumSum(50, 30, 20, 100), 30, 'Test 11');
test(kItemsWithMaximumSum(0, 0, 50, 10), -10, 'Test 12');
test(kItemsWithMaximumSum(0, 25, 25, 40), -15, 'Test 13');
test(kItemsWithMaximumSum(0, 50, 0, 50), 0, 'Test 14');
test(kItemsWithMaximumSum(0, 0, 50, 25), -25, 'Test 15');
test(kItemsWithMaximumSum(10, 10, 10, 15), 10, 'Test 16');
test(kItemsWithMaximumSum(50, 0, 0, 50), 50, 'Test 17');
test(kItemsWithMaximumSum(0, 0, 50, 50), -50, 'Test 18');
test(kItemsWithMaximumSum(0, 0, 0, 0), 0, 'Test 19');
test(kItemsWithMaximumSum(10, 10, 30, 40), -10, 'Test 20');
test(kItemsWithMaximumSum(1, 1, 1, 1), 1, 'Test 21');
test(kItemsWithMaximumSum(50, 0, 0, 10), 10, 'Test 22');
test(kItemsWithMaximumSum(0, 0, 5, 3), -3, 'Test 23');
test(kItemsWithMaximumSum(0, 50, 0, 30), 0, 'Test 24');
test(kItemsWithMaximumSum(25, 25, 0, 30), 25, 'Test 25');
test(kItemsWithMaximumSum(25, 0, 25, 50), 0, 'Test 26');
test(kItemsWithMaximumSum(0, 0, 50, 20), -20, 'Test 27');
test(kItemsWithMaximumSum(3, 2, 0, 4), 3, 'Test 28');
test(kItemsWithMaximumSum(0, 50, 0, 20), 0, 'Test 29');
test(kItemsWithMaximumSum(45, 0, 5, 45), 45, 'Test 30');
test(kItemsWithMaximumSum(30, 10, 10, 50), 20, 'Test 31');
test(kItemsWithMaximumSum(20, 10, 20, 50), 0, 'Test 32');
test(kItemsWithMaximumSum(30, 20, 5, 40), 30, 'Test 33');
test(kItemsWithMaximumSum(45, 20, 35, 50), 45, 'Test 34');
test(kItemsWithMaximumSum(20, 20, 10, 30), 20, 'Test 35');
test(kItemsWithMaximumSum(15, 10, 25, 30), 10, 'Test 36');
test(kItemsWithMaximumSum(40, 5, 5, 48), 37, 'Test 37');
test(kItemsWithMaximumSum(20, 0, 30, 20), 20, 'Test 38');
test(kItemsWithMaximumSum(30, 10, 10, 45), 25, 'Test 39');
test(kItemsWithMaximumSum(30, 15, 10, 45), 30, 'Test 40');
test(kItemsWithMaximumSum(10, 10, 30, 35), -5, 'Test 41');
test(kItemsWithMaximumSum(40, 5, 5, 45), 40, 'Test 42');
test(kItemsWithMaximumSum(5, 0, 45, 10), 0, 'Test 43');
test(kItemsWithMaximumSum(30, 0, 20, 40), 20, 'Test 44');
test(kItemsWithMaximumSum(20, 15, 15, 30), 20, 'Test 45');
test(kItemsWithMaximumSum(50, 0, 0, 49), 49, 'Test 46');
test(kItemsWithMaximumSum(40, 5, 5, 50), 35, 'Test 47');
test(kItemsWithMaximumSum(20, 30, 10, 50), 20, 'Test 48');
test(kItemsWithMaximumSum(45, 3, 2, 50), 43, 'Test 49');
test(kItemsWithMaximumSum(25, 25, 0, 24), 24, 'Test 50');
test(kItemsWithMaximumSum(0, 50, 0, 25), 0, 'Test 51');
test(kItemsWithMaximumSum(45, 0, 5, 48), 42, 'Test 52');
test(kItemsWithMaximumSum(25, 15, 10, 50), 15, 'Test 53');
test(kItemsWithMaximumSum(10, 0, 40, 50), -30, 'Test 54');
test(kItemsWithMaximumSum(15, 0, 35, 20), 10, 'Test 55');
test(kItemsWithMaximumSum(20, 10, 20, 30), 20, 'Test 56');
test(kItemsWithMaximumSum(10, 10, 30, 20), 10, 'Test 57');
test(kItemsWithMaximumSum(45, 2, 3, 45), 45, 'Test 58');
test(kItemsWithMaximumSum(10, 20, 30, 60), -20, 'Test 59');
test(kItemsWithMaximumSum(20, 15, 15, 40), 15, 'Test 60');
test(kItemsWithMaximumSum(10, 30, 10, 30), 10, 'Test 61');
test(kItemsWithMaximumSum(10, 20, 20, 30), 10, 'Test 62');
test(kItemsWithMaximumSum(15, 15, 20, 40), 5, 'Test 63');
test(kItemsWithMaximumSum(0, 25, 25, 45), -20, 'Test 64');
test(kItemsWithMaximumSum(0, 20, 30, 40), -20, 'Test 65');
test(kItemsWithMaximumSum(40, 0, 10, 45), 35, 'Test 66');
test(kItemsWithMaximumSum(25, 25, 0, 40), 25, 'Test 67');
test(kItemsWithMaximumSum(15, 15, 20, 20), 15, 'Test 68');
test(kItemsWithMaximumSum(50, 0, 0, 30), 30, 'Test 69');
test(kItemsWithMaximumSum(30, 15, 5, 40), 30, 'Test 70');
test(kItemsWithMaximumSum(35, 10, 5, 45), 35, 'Test 71');
test(kItemsWithMaximumSum(0, 30, 20, 40), -10, 'Test 72');
test(kItemsWithMaximumSum(15, 20, 15, 25), 15, 'Test 73');
test(kItemsWithMaximumSum(10, 20, 20, 10), 10, 'Test 74');
test(kItemsWithMaximumSum(10, 40, 10, 60), 0, 'Test 75');
test(kItemsWithMaximumSum(30, 10, 10, 25), 25, 'Test 76');
test(kItemsWithMaximumSum(20, 0, 30, 30), 10, 'Test 77');
test(kItemsWithMaximumSum(1, 48, 1, 50), 0, 'Test 78');
test(kItemsWithMaximumSum(0, 25, 25, 25), 0, 'Test 79');
test(kItemsWithMaximumSum(1, 1, 1, 3), 0, 'Test 80');
test(kItemsWithMaximumSum(30, 15, 15, 40), 30, 'Test 81');
test(kItemsWithMaximumSum(40, 40, 10, 60), 40, 'Test 82');
test(kItemsWithMaximumSum(20, 30, 50, 60), 10, 'Test 83');
test(kItemsWithMaximumSum(10, 30, 10, 40), 10, 'Test 84');
test(kItemsWithMaximumSum(2, 2, 2, 6), 0, 'Test 85');
test(kItemsWithMaximumSum(25, 25, 0, 25), 25, 'Test 86');
test(kItemsWithMaximumSum(15, 25, 10, 20), 15, 'Test 87');
test(kItemsWithMaximumSum(50, 0, 0, 25), 25, 'Test 88');
test(kItemsWithMaximumSum(10, 10, 10, 25), 5, 'Test 89');
test(kItemsWithMaximumSum(30, 20, 50, 70), 10, 'Test 90');
test(kItemsWithMaximumSum(30, 5, 15, 40), 25, 'Test 91');
test(kItemsWithMaximumSum(20, 15, 15, 50), 5, 'Test 92');
test(kItemsWithMaximumSum(30, 20, 10, 40), 30, 'Test 93');
test(kItemsWithMaximumSum(0, 25, 25, 30), -5, 'Test 94');
test(kItemsWithMaximumSum(0, 0, 100, 50), -50, 'Test 95');
test(kItemsWithMaximumSum(45, 30, 25, 50), 45, 'Test 96');
test(kItemsWithMaximumSum(0, 10, 40, 20), -10, 'Test 97');
test(kItemsWithMaximumSum(25, 25, 0, 49), 25, 'Test 98');
test(kItemsWithMaximumSum(45, 0, 5, 35), 35, 'Test 99');
test(kItemsWithMaximumSum(50, 0, 50, 45), 45, 'Test 100');
test(kItemsWithMaximumSum(20, 15, 10, 30), 20, 'Test 101');
test(kItemsWithMaximumSum(5, 5, 40, 20), -5, 'Test 102');
test(kItemsWithMaximumSum(45, 5, 0, 45), 45, 'Test 103');
test(kItemsWithMaximumSum(10, 10, 30, 25), 5, 'Test 104');
test(kItemsWithMaximumSum(5, 10, 35, 50), -30, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

