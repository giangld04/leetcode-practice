// Test: 738. Monotone Increasing Digits
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { monotoneIncreasingDigits } = require("./solution");

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

console.log("\n738. Monotone Increasing Digits\n");

test(monotoneIncreasingDigits(999999999), 999999999, 'Test 1');
test(monotoneIncreasingDigits(111), 111, 'Test 2');
test(monotoneIncreasingDigits(100), 99, 'Test 3');
test(monotoneIncreasingDigits(1000), 999, 'Test 4');
test(monotoneIncreasingDigits(222), 222, 'Test 5');
test(monotoneIncreasingDigits(333), 333, 'Test 6');
test(monotoneIncreasingDigits(33332), 29999, 'Test 7');
test(monotoneIncreasingDigits(1001), 999, 'Test 8');
test(monotoneIncreasingDigits(101010101), 99999999, 'Test 9');
test(monotoneIncreasingDigits(21212), 19999, 'Test 10');
test(monotoneIncreasingDigits(0), 0, 'Test 11');
test(monotoneIncreasingDigits(9876543210), 8999999999, 'Test 12');
test(monotoneIncreasingDigits(999), 999, 'Test 13');
test(monotoneIncreasingDigits(4321), 3999, 'Test 14');
test(monotoneIncreasingDigits(111111111), 111111111, 'Test 15');
test(monotoneIncreasingDigits(332), 299, 'Test 16');
test(monotoneIncreasingDigits(987654321), 899999999, 'Test 17');
test(monotoneIncreasingDigits(11111), 11111, 'Test 18');
test(monotoneIncreasingDigits(101010), 99999, 'Test 19');
test(monotoneIncreasingDigits(1234), 1234, 'Test 20');
test(monotoneIncreasingDigits(120), 119, 'Test 21');
test(monotoneIncreasingDigits(10), 9, 'Test 22');
test(monotoneIncreasingDigits(1203), 1199, 'Test 23');
test(monotoneIncreasingDigits(567898765), 567889999, 'Test 24');
test(monotoneIncreasingDigits(987898789), 899999999, 'Test 25');
test(monotoneIncreasingDigits(998877665544332211), 899999999999999999, 'Test 26');
test(monotoneIncreasingDigits(1112233445566778899), 1112233445566778899, 'Test 27');
test(monotoneIncreasingDigits(22221111), 19999999, 'Test 28');
test(monotoneIncreasingDigits(5678987654), 5678899999, 'Test 29');
test(monotoneIncreasingDigits(1232123), 1229999, 'Test 30');
test(monotoneIncreasingDigits(111000999), 99999999, 'Test 31');
test(monotoneIncreasingDigits(233221), 229999, 'Test 32');
test(monotoneIncreasingDigits(333333333), 333333333, 'Test 33');
test(monotoneIncreasingDigits(123456780), 123456779, 'Test 34');
test(monotoneIncreasingDigits(5000), 4999, 'Test 35');
test(monotoneIncreasingDigits(1000000000), 999999999, 'Test 36');
test(monotoneIncreasingDigits(66778899), 66778899, 'Test 37');
test(monotoneIncreasingDigits(1234554321), 1234499999, 'Test 38');
test(monotoneIncreasingDigits(199999999), 199999999, 'Test 39');
test(monotoneIncreasingDigits(11119999), 11119999, 'Test 40');
test(monotoneIncreasingDigits(43210), 39999, 'Test 41');
test(monotoneIncreasingDigits(657890), 599999, 'Test 42');
test(monotoneIncreasingDigits(1111111111), 1111111111, 'Test 43');
test(monotoneIncreasingDigits(100000000), 99999999, 'Test 44');
test(monotoneIncreasingDigits(1111000011), 999999999, 'Test 45');
test(monotoneIncreasingDigits(199999), 199999, 'Test 46');
test(monotoneIncreasingDigits(565656565), 559999999, 'Test 47');
test(monotoneIncreasingDigits(33333222), 29999999, 'Test 48');
test(monotoneIncreasingDigits(444444444), 444444444, 'Test 49');
test(monotoneIncreasingDigits(999999998), 899999999, 'Test 50');
test(monotoneIncreasingDigits(2233445566778899), 2233445566778899, 'Test 51');
test(monotoneIncreasingDigits(1001001), 999999, 'Test 52');
test(monotoneIncreasingDigits(777777777), 777777777, 'Test 53');
test(monotoneIncreasingDigits(567891234), 567889999, 'Test 54');
test(monotoneIncreasingDigits(221332), 199999, 'Test 55');
test(monotoneIncreasingDigits(98787656545434241), 89999999999999999, 'Test 56');
test(monotoneIncreasingDigits(555555555), 555555555, 'Test 57');
test(monotoneIncreasingDigits(1234321), 1233999, 'Test 58');
test(monotoneIncreasingDigits(599), 599, 'Test 59');
test(monotoneIncreasingDigits(1010101010), 999999999, 'Test 60');
test(monotoneIncreasingDigits(123321), 122999, 'Test 61');
test(monotoneIncreasingDigits(888888888), 888888888, 'Test 62');
test(monotoneIncreasingDigits(123454321), 123449999, 'Test 63');
test(monotoneIncreasingDigits(8765432109), 7999999999, 'Test 64');
test(monotoneIncreasingDigits(123456789), 123456789, 'Test 65');
test(monotoneIncreasingDigits(9631), 8999, 'Test 66');
test(monotoneIncreasingDigits(87654321), 79999999, 'Test 67');
test(monotoneIncreasingDigits(1001001001), 999999999, 'Test 68');
test(monotoneIncreasingDigits(4444444444), 4444444444, 'Test 69');
test(monotoneIncreasingDigits(9988776655), 8999999999, 'Test 70');
test(monotoneIncreasingDigits(543212345), 499999999, 'Test 71');
test(monotoneIncreasingDigits(100100100), 99999999, 'Test 72');
test(monotoneIncreasingDigits(876543210), 799999999, 'Test 73');
test(monotoneIncreasingDigits(32123), 29999, 'Test 74');
test(monotoneIncreasingDigits(9876554321), 8999999999, 'Test 75');
test(monotoneIncreasingDigits(654321234), 599999999, 'Test 76');
test(monotoneIncreasingDigits(9876543210987654321), 8999999999999999999, 'Test 77');
test(monotoneIncreasingDigits(333222111), 299999999, 'Test 78');
test(monotoneIncreasingDigits(44444333), 39999999, 'Test 79');
test(monotoneIncreasingDigits(898989898), 889999999, 'Test 80');
test(monotoneIncreasingDigits(111000), 99999, 'Test 81');
test(monotoneIncreasingDigits(3214321), 2999999, 'Test 82');
test(monotoneIncreasingDigits(1122334455), 1122334455, 'Test 83');
test(monotoneIncreasingDigits(10998877665544332211), 9999999999999999999, 'Test 84');
test(monotoneIncreasingDigits(1234567890), 1234567889, 'Test 85');
test(monotoneIncreasingDigits(221122), 199999, 'Test 86');
test(monotoneIncreasingDigits(1000000), 999999, 'Test 87');
test(monotoneIncreasingDigits(543210987), 499999999, 'Test 88');
test(monotoneIncreasingDigits(1099), 999, 'Test 89');
test(monotoneIncreasingDigits(111222333444555666777888999), 111222333444555666777888999, 'Test 90');
test(monotoneIncreasingDigits(222222222), 222222222, 'Test 91');
test(monotoneIncreasingDigits(444333222111), 399999999999, 'Test 92');
test(monotoneIncreasingDigits(11112222), 11112222, 'Test 93');
test(monotoneIncreasingDigits(1109999999), 999999999, 'Test 94');
test(monotoneIncreasingDigits(111111110), 99999999, 'Test 95');
test(monotoneIncreasingDigits(654321098765), 599999999999, 'Test 96');
test(monotoneIncreasingDigits(1234567899), 1234567899, 'Test 97');
test(monotoneIncreasingDigits(345678901), 345678899, 'Test 98');
test(monotoneIncreasingDigits(666666666), 666666666, 'Test 99');
test(monotoneIncreasingDigits(123000456), 122999999, 'Test 100');
test(monotoneIncreasingDigits(111122221111), 111119999999, 'Test 101');
test(monotoneIncreasingDigits(3456543), 3455999, 'Test 102');
test(monotoneIncreasingDigits(3210987654321), 2999999999999, 'Test 103');
test(monotoneIncreasingDigits(221122112), 199999999, 'Test 104');
test(monotoneIncreasingDigits(12344321), 12339999, 'Test 105');
test(monotoneIncreasingDigits(888887777666655554444333322221111), 799999999999999999999999999999999, 'Test 106');
test(monotoneIncreasingDigits(555444555), 499999999, 'Test 107');
test(monotoneIncreasingDigits(222333444555), 222333444555, 'Test 108');
test(monotoneIncreasingDigits(543210), 499999, 'Test 109');
test(monotoneIncreasingDigits(8888777766665555), 7999999999999999, 'Test 110');
test(monotoneIncreasingDigits(100100), 99999, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

