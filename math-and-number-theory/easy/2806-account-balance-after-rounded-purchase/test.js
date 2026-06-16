// Test: 2806. Account Balance After Rounded Purchase
// 54 test cases from LeetCodeDataset
// Run: node test.js

const { accountBalanceAfterPurchase } = require("./solution");

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

console.log("\n2806. Account Balance After Rounded Purchase\n");

test(accountBalanceAfterPurchase(100), 0, 'Test 1');
test(accountBalanceAfterPurchase(85), 10, 'Test 2');
test(accountBalanceAfterPurchase(15), 80, 'Test 3');
test(accountBalanceAfterPurchase(10), 90, 'Test 4');
test(accountBalanceAfterPurchase(45), 50, 'Test 5');
test(accountBalanceAfterPurchase(51), 50, 'Test 6');
test(accountBalanceAfterPurchase(34), 70, 'Test 7');
test(accountBalanceAfterPurchase(0), 100, 'Test 8');
test(accountBalanceAfterPurchase(60), 40, 'Test 9');
test(accountBalanceAfterPurchase(25), 70, 'Test 10');
test(accountBalanceAfterPurchase(9), 90, 'Test 11');
test(accountBalanceAfterPurchase(75), 20, 'Test 12');
test(accountBalanceAfterPurchase(50), 50, 'Test 13');
test(accountBalanceAfterPurchase(55), 40, 'Test 14');
test(accountBalanceAfterPurchase(99), 0, 'Test 15');
test(accountBalanceAfterPurchase(31), 70, 'Test 16');
test(accountBalanceAfterPurchase(27), 70, 'Test 17');
test(accountBalanceAfterPurchase(22), 80, 'Test 18');
test(accountBalanceAfterPurchase(35), 60, 'Test 19');
test(accountBalanceAfterPurchase(1), 100, 'Test 20');
test(accountBalanceAfterPurchase(7), 90, 'Test 21');
test(accountBalanceAfterPurchase(49), 50, 'Test 22');
test(accountBalanceAfterPurchase(28), 70, 'Test 23');
test(accountBalanceAfterPurchase(11), 90, 'Test 24');
test(accountBalanceAfterPurchase(26), 70, 'Test 25');
test(accountBalanceAfterPurchase(65), 30, 'Test 26');
test(accountBalanceAfterPurchase(90), 10, 'Test 27');
test(accountBalanceAfterPurchase(69), 30, 'Test 28');
test(accountBalanceAfterPurchase(84), 20, 'Test 29');
test(accountBalanceAfterPurchase(91), 10, 'Test 30');
test(accountBalanceAfterPurchase(29), 70, 'Test 31');
test(accountBalanceAfterPurchase(67), 30, 'Test 32');
test(accountBalanceAfterPurchase(23), 80, 'Test 33');
test(accountBalanceAfterPurchase(59), 40, 'Test 34');
test(accountBalanceAfterPurchase(63), 40, 'Test 35');
test(accountBalanceAfterPurchase(4), 100, 'Test 36');
test(accountBalanceAfterPurchase(38), 60, 'Test 37');
test(accountBalanceAfterPurchase(6), 90, 'Test 38');
test(accountBalanceAfterPurchase(5), 90, 'Test 39');
test(accountBalanceAfterPurchase(79), 20, 'Test 40');
test(accountBalanceAfterPurchase(74), 30, 'Test 41');
test(accountBalanceAfterPurchase(47), 50, 'Test 42');
test(accountBalanceAfterPurchase(77), 20, 'Test 43');
test(accountBalanceAfterPurchase(39), 60, 'Test 44');
test(accountBalanceAfterPurchase(2), 100, 'Test 45');
test(accountBalanceAfterPurchase(8), 90, 'Test 46');
test(accountBalanceAfterPurchase(95), 0, 'Test 47');
test(accountBalanceAfterPurchase(14), 90, 'Test 48');
test(accountBalanceAfterPurchase(94), 10, 'Test 49');
test(accountBalanceAfterPurchase(30), 70, 'Test 50');
test(accountBalanceAfterPurchase(89), 10, 'Test 51');
test(accountBalanceAfterPurchase(3), 100, 'Test 52');
test(accountBalanceAfterPurchase(19), 80, 'Test 53');
test(accountBalanceAfterPurchase(82), 20, 'Test 54');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

