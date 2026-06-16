// Test: 202. Happy Number
// 55 test cases from LeetCodeDataset
// Run: node test.js

const { isHappy } = require("./solution");

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

console.log("\n202. Happy Number\n");

test(isHappy(100), true, 'Test 1');
test(isHappy(4), false, 'Test 2');
test(isHappy(20), false, 'Test 3');
test(isHappy(2), false, 'Test 4');
test(isHappy(1111111), true, 'Test 5');
test(isHappy(19), true, 'Test 6');
test(isHappy(1), true, 'Test 7');
test(isHappy(1000000000), true, 'Test 8');
test(isHappy(7), true, 'Test 9');
test(isHappy(489), false, 'Test 10');
test(isHappy(789789789), false, 'Test 11');
test(isHappy(130), true, 'Test 12');
test(isHappy(49), true, 'Test 13');
test(isHappy(2147483647), false, 'Test 14');
test(isHappy(32442), true, 'Test 15');
test(isHappy(324), false, 'Test 16');
test(isHappy(203), true, 'Test 17');
test(isHappy(82), true, 'Test 18');
test(isHappy(70), true, 'Test 19');
test(isHappy(2736895), false, 'Test 20');
test(isHappy(1000), true, 'Test 21');
test(isHappy(44), true, 'Test 22');
test(isHappy(190), true, 'Test 23');
test(isHappy(58), false, 'Test 24');
test(isHappy(28), true, 'Test 25');
test(isHappy(289), false, 'Test 26');
test(isHappy(444444444), false, 'Test 27');
test(isHappy(14659), false, 'Test 28');
test(isHappy(6892), false, 'Test 29');
test(isHappy(3249671058), false, 'Test 30');
test(isHappy(145), false, 'Test 31');
test(isHappy(14657), false, 'Test 32');
test(isHappy(10000), true, 'Test 33');
test(isHappy(23), true, 'Test 34');
test(isHappy(784), true, 'Test 35');
test(isHappy(133), true, 'Test 36');
test(isHappy(999), false, 'Test 37');
test(isHappy(89), false, 'Test 38');
test(isHappy(9474), false, 'Test 39');
test(isHappy(111111111), false, 'Test 40');
test(isHappy(404), true, 'Test 41');
test(isHappy(442), false, 'Test 42');
test(isHappy(987654321), false, 'Test 43');
test(isHappy(1234567890), false, 'Test 44');
test(isHappy(139), true, 'Test 45');
test(isHappy(1000000007), false, 'Test 46');
test(isHappy(13441), false, 'Test 47');
test(isHappy(200), false, 'Test 48');
test(isHappy(8989898989), false, 'Test 49');
test(isHappy(3249), false, 'Test 50');
test(isHappy(123456789), false, 'Test 51');
test(isHappy(370), false, 'Test 52');
test(isHappy(789999), false, 'Test 53');
test(isHappy(1111111111), true, 'Test 54');
test(isHappy(100000000), true, 'Test 55');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

