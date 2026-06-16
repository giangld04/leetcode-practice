// Test: 1716. Calculate Money In Leetcode Bank
// 50 test cases from LeetCodeDataset
// Run: node test.js

const { totalMoney } = require("./solution");

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

console.log("\n1716. Calculate Money In Leetcode Bank\n");

test(totalMoney(30), 165, 'Test 1');
test(totalMoney(4), 10, 'Test 2');
test(totalMoney(20), 96, 'Test 3');
test(totalMoney(1), 1, 'Test 4');
test(totalMoney(1000), 74926, 'Test 5');
test(totalMoney(7), 28, 'Test 6');
test(totalMoney(10), 37, 'Test 7');
test(totalMoney(29), 159, 'Test 8');
test(totalMoney(63), 504, 'Test 9');
test(totalMoney(210), 3885, 'Test 10');
test(totalMoney(49), 343, 'Test 11');
test(totalMoney(125), 1551, 'Test 12');
test(totalMoney(21), 105, 'Test 13');
test(totalMoney(70), 595, 'Test 14');
test(totalMoney(100), 1060, 'Test 15');
test(totalMoney(50), 351, 'Test 16');
test(totalMoney(300), 7476, 'Test 17');
test(totalMoney(28), 154, 'Test 18');
test(totalMoney(60), 462, 'Test 19');
test(totalMoney(56), 420, 'Test 20');
test(totalMoney(40), 250, 'Test 21');
test(totalMoney(600), 27810, 'Test 22');
test(totalMoney(99), 1044, 'Test 23');
test(totalMoney(98), 1029, 'Test 24');
test(totalMoney(2), 3, 'Test 25');
test(totalMoney(365), 10791, 'Test 26');
test(totalMoney(80), 732, 'Test 27');
test(totalMoney(700), 37450, 'Test 28');
test(totalMoney(8), 30, 'Test 29');
test(totalMoney(250), 5335, 'Test 30');
test(totalMoney(777), 45843, 'Test 31');
test(totalMoney(999), 74778, 'Test 32');
test(totalMoney(22), 109, 'Test 33');
test(totalMoney(35), 210, 'Test 34');
test(totalMoney(140), 1890, 'Test 35');
test(totalMoney(91), 910, 'Test 36');
test(totalMoney(150), 2127, 'Test 37');
test(totalMoney(15), 66, 'Test 38');
test(totalMoney(180), 2940, 'Test 39');
test(totalMoney(899), 60870, 'Test 40');
test(totalMoney(85), 811, 'Test 41');
test(totalMoney(200), 3552, 'Test 42');
test(totalMoney(14), 63, 'Test 43');
test(totalMoney(400), 12826, 'Test 44');
test(totalMoney(120), 1446, 'Test 45');
test(totalMoney(500), 19602, 'Test 46');
test(totalMoney(52), 370, 'Test 47');
test(totalMoney(90), 891, 'Test 48');
test(totalMoney(25), 127, 'Test 49');
test(totalMoney(84), 798, 'Test 50');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

