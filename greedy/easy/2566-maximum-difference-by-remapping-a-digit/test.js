// Test: 2566. Maximum Difference By Remapping A Digit
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { minMaxDifference } = require("./solution");

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

console.log("\n2566. Maximum Difference By Remapping A Digit\n");

test(minMaxDifference(11891), 99009, 'Test 1');
test(minMaxDifference(234567890), 900000000, 'Test 2');
test(minMaxDifference(123321), 900009, 'Test 3');
test(minMaxDifference(55555555), 99999999, 'Test 4');
test(minMaxDifference(111111), 999999, 'Test 5');
test(minMaxDifference(123456789), 900000000, 'Test 6');
test(minMaxDifference(9876543210), 9100000000, 'Test 7');
test(minMaxDifference(88888888), 99999999, 'Test 8');
test(minMaxDifference(987654321), 910000000, 'Test 9');
test(minMaxDifference(101010101), 909090909, 'Test 10');
test(minMaxDifference(12321), 90009, 'Test 11');
test(minMaxDifference(9999999), 9999999, 'Test 12');
test(minMaxDifference(1), 9, 'Test 13');
test(minMaxDifference(475328), 900000, 'Test 14');
test(minMaxDifference(99999999), 99999999, 'Test 15');
test(minMaxDifference(8888888), 9999999, 'Test 16');
test(minMaxDifference(99999), 99999, 'Test 17');
test(minMaxDifference(1000000), 9000000, 'Test 18');
test(minMaxDifference(90), 99, 'Test 19');
test(minMaxDifference(1111111), 9999999, 'Test 20');
test(minMaxDifference(66666666), 99999999, 'Test 21');
test(minMaxDifference(44444444), 99999999, 'Test 22');
test(minMaxDifference(111111111), 999999999, 'Test 23');
test(minMaxDifference(888111222), 999000000, 'Test 24');
test(minMaxDifference(8765432109), 9000000000, 'Test 25');
test(minMaxDifference(9999999999999999999), 9999999999999999999, 'Test 26');
test(minMaxDifference(101010101010101), 909090909090909, 'Test 27');
test(minMaxDifference(88888888888888888888), 99999999999999999999, 'Test 28');
test(minMaxDifference(1111000011), 9999000099, 'Test 29');
test(minMaxDifference(1000000000), 9000000000, 'Test 30');
test(minMaxDifference(80808080), 90909090, 'Test 31');
test(minMaxDifference(3330333), 9990999, 'Test 32');
test(minMaxDifference(11119999), 99990000, 'Test 33');
test(minMaxDifference(1233211233), 9000099000, 'Test 34');
test(minMaxDifference(777000777), 999000999, 'Test 35');
test(minMaxDifference(59595959), 90909090, 'Test 36');
test(minMaxDifference(5678909876), 9000000000, 'Test 37');
test(minMaxDifference(555555555555555555), 999999999999999999, 'Test 38');
test(minMaxDifference(123123123), 900900900, 'Test 39');
test(minMaxDifference(4321098765), 9000000000, 'Test 40');
test(minMaxDifference(5555555555), 9999999999, 'Test 41');
test(minMaxDifference(111000111000111), 999000999000999, 'Test 42');
test(minMaxDifference(111222333444555666777888999), 999000000000000000000000000, 'Test 43');
test(minMaxDifference(7777777777), 9999999999, 'Test 44');
test(minMaxDifference(1232123212321232123), 9000900090009000900, 'Test 45');
test(minMaxDifference(7676767676), 9090909090, 'Test 46');
test(minMaxDifference(50505050), 90909090, 'Test 47');
test(minMaxDifference(199999991), 900000009, 'Test 48');
test(minMaxDifference(123321123), 900009900, 'Test 49');
test(minMaxDifference(12233445), 90000000, 'Test 50');
test(minMaxDifference(990099009), 999999999, 'Test 51');
test(minMaxDifference(505050505), 909090909, 'Test 52');
test(minMaxDifference(111999), 999000, 'Test 53');
test(minMaxDifference(10001), 90009, 'Test 54');
test(minMaxDifference(111222333), 999000000, 'Test 55');
test(minMaxDifference(3210987654), 9000000000, 'Test 56');
test(minMaxDifference(959595959), 949494949, 'Test 57');
test(minMaxDifference(10101010), 90909090, 'Test 58');
test(minMaxDifference(1000000001), 9000000009, 'Test 59');
test(minMaxDifference(12345678901234567890), 90000000009000000000, 'Test 60');
test(minMaxDifference(1098765432), 9000000000, 'Test 61');
test(minMaxDifference(1199119911), 9900990099, 'Test 62');
test(minMaxDifference(999999999), 999999999, 'Test 63');
test(minMaxDifference(555555555), 999999999, 'Test 64');
test(minMaxDifference(555505555), 999909999, 'Test 65');
test(minMaxDifference(999111999111999), 999888999888999, 'Test 66');
test(minMaxDifference(8888888888), 9999999999, 'Test 67');
test(minMaxDifference(98765432109876543210), 91000000009100000000, 'Test 68');
test(minMaxDifference(111000111), 999000999, 'Test 69');
test(minMaxDifference(1010101010), 9090909090, 'Test 70');
test(minMaxDifference(9900990099), 9999999999, 'Test 71');
test(minMaxDifference(888888888888888888), 999999999999999999, 'Test 72');
test(minMaxDifference(777777777), 999999999, 'Test 73');
test(minMaxDifference(989898989), 919191919, 'Test 74');
test(minMaxDifference(12312312312312312312), 90090090090090090090, 'Test 75');
test(minMaxDifference(1001001001), 9009009009, 'Test 76');
test(minMaxDifference(100000001), 900000009, 'Test 77');
test(minMaxDifference(2109876543), 9000000000, 'Test 78');
test(minMaxDifference(1223344556677889900), 9000000000000000000, 'Test 79');
test(minMaxDifference(19999999999999999999), 90000000000000000000, 'Test 80');
test(minMaxDifference(595959595), 909090909, 'Test 81');
test(minMaxDifference(876543210), 900000000, 'Test 82');
test(minMaxDifference(9999999999), 9999999999, 'Test 83');
test(minMaxDifference(90909090), 99999999, 'Test 84');
test(minMaxDifference(99990000), 99999999, 'Test 85');
test(minMaxDifference(191919191), 909090909, 'Test 86');
test(minMaxDifference(555000), 999000, 'Test 87');
test(minMaxDifference(989898989898989), 919191919191919, 'Test 88');
test(minMaxDifference(5432109876), 9000000000, 'Test 89');
test(minMaxDifference(11100011), 99900099, 'Test 90');
test(minMaxDifference(888888888), 999999999, 'Test 91');
test(minMaxDifference(1111111111), 9999999999, 'Test 92');
test(minMaxDifference(321321321), 900900900, 'Test 93');
test(minMaxDifference(95959595), 94949494, 'Test 94');
test(minMaxDifference(121212121), 909090909, 'Test 95');
test(minMaxDifference(1234321098), 9000009000, 'Test 96');
test(minMaxDifference(4321234321), 9000009000, 'Test 97');
test(minMaxDifference(1230123012), 9000900090, 'Test 98');
test(minMaxDifference(2233223322), 9900990099, 'Test 99');
test(minMaxDifference(99009900), 99999999, 'Test 100');
test(minMaxDifference(9123456789), 9800000009, 'Test 101');
test(minMaxDifference(5555555), 9999999, 'Test 102');
test(minMaxDifference(122334455), 900000000, 'Test 103');
test(minMaxDifference(1234567890), 9000000000, 'Test 104');
test(minMaxDifference(9090909090), 9999999999, 'Test 105');
test(minMaxDifference(999000), 999999, 'Test 106');
test(minMaxDifference(10101010101010101010), 90909090909090909090, 'Test 107');
test(minMaxDifference(88811122), 99900000, 'Test 108');
test(minMaxDifference(202020202), 909090909, 'Test 109');
test(minMaxDifference(246813579135791357), 900000000000000000, 'Test 110');
test(minMaxDifference(12121212), 90909090, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

