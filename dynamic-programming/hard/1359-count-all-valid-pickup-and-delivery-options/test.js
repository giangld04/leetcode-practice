// Test: 1359. Count All Valid Pickup And Delivery Options
// 32 test cases from LeetCodeDataset
// Run: node test.js

const { countOrders } = require("./solution");

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

console.log("\n1359. Count All Valid Pickup And Delivery Options\n");

test(countOrders(3), 90, 'Test 1');
test(countOrders(250), 418733499, 'Test 2');
test(countOrders(100), 14159051, 'Test 3');
test(countOrders(4), 2520, 'Test 4');
test(countOrders(2), 6, 'Test 5');
test(countOrders(20), 580270580, 'Test 6');
test(countOrders(1), 1, 'Test 7');
test(countOrders(500), 764678010, 'Test 8');
test(countOrders(50), 784760423, 'Test 9');
test(countOrders(10), 850728840, 'Test 10');
test(countOrders(5), 113400, 'Test 11');
test(countOrders(12), 67543367, 'Test 12');
test(countOrders(125), 129345050, 'Test 13');
test(countOrders(110), 120658916, 'Test 14');
test(countOrders(300), 234038968, 'Test 15');
test(countOrders(60), 988537746, 'Test 16');
test(countOrders(30), 920731808, 'Test 17');
test(countOrders(450), 586675271, 'Test 18');
test(countOrders(80), 189044563, 'Test 19');
test(countOrders(175), 82390790, 'Test 20');
test(countOrders(495), 498394413, 'Test 21');
test(countOrders(8), 729647433, 'Test 22');
test(countOrders(18), 368349166, 'Test 23');
test(countOrders(75), 149163518, 'Test 24');
test(countOrders(350), 436707893, 'Test 25');
test(countOrders(150), 707081203, 'Test 26');
test(countOrders(15), 621371750, 'Test 27');
test(countOrders(200), 880584563, 'Test 28');
test(countOrders(400), 467993882, 'Test 29');
test(countOrders(499), 496638171, 'Test 30');
test(countOrders(55), 22089728, 'Test 31');
test(countOrders(25), 586091532, 'Test 32');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

