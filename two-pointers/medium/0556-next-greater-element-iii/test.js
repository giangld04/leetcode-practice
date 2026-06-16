// Test: 556. Next Greater Element Iii
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { nextGreaterElement } = require("./solution");

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

console.log("\n556. Next Greater Element Iii\n");

test(nextGreaterElement(987654321), -1, 'Test 1');
test(nextGreaterElement(230241), 230412, 'Test 2');
test(nextGreaterElement(2147483476), 2147483647, 'Test 3');
test(nextGreaterElement(12), 21, 'Test 4');
test(nextGreaterElement(21), -1, 'Test 5');
test(nextGreaterElement(1234), 1243, 'Test 6');
test(nextGreaterElement(2147483647), -1, 'Test 7');
test(nextGreaterElement(2147483486), -1, 'Test 8');
test(nextGreaterElement(534976), 536479, 'Test 9');
test(nextGreaterElement(111), -1, 'Test 10');
test(nextGreaterElement(1999999999), -1, 'Test 11');
test(nextGreaterElement(1), -1, 'Test 12');
test(nextGreaterElement(4321), -1, 'Test 13');
test(nextGreaterElement(1010101010), 1010101100, 'Test 14');
test(nextGreaterElement(43214321), 43221134, 'Test 15');
test(nextGreaterElement(123456789876543210), -1, 'Test 16');
test(nextGreaterElement(567898765), 567956788, 'Test 17');
test(nextGreaterElement(2147483646), -1, 'Test 18');
test(nextGreaterElement(999999999), -1, 'Test 19');
test(nextGreaterElement(5432109876), -1, 'Test 20');
test(nextGreaterElement(1234567890123456789), -1, 'Test 21');
test(nextGreaterElement(321321321), 321322113, 'Test 22');
test(nextGreaterElement(12345678987654321), -1, 'Test 23');
test(nextGreaterElement(123456789123456789), -1, 'Test 24');
test(nextGreaterElement(4321098765), -1, 'Test 25');
test(nextGreaterElement(223344556677889900), -1, 'Test 26');
test(nextGreaterElement(1225444333111), -1, 'Test 27');
test(nextGreaterElement(543212345), 543212354, 'Test 28');
test(nextGreaterElement(432143214321), -1, 'Test 29');
test(nextGreaterElement(111122223333), -1, 'Test 30');
test(nextGreaterElement(999999998), -1, 'Test 31');
test(nextGreaterElement(531), -1, 'Test 32');
test(nextGreaterElement(2233445566778899), -1, 'Test 33');
test(nextGreaterElement(1098765432), 1203456789, 'Test 34');
test(nextGreaterElement(11111111111111111111), -1, 'Test 35');
test(nextGreaterElement(5364768910), -1, 'Test 36');
test(nextGreaterElement(5432109876543210), -1, 'Test 37');
test(nextGreaterElement(2147483645), -1, 'Test 38');
test(nextGreaterElement(2100000000), -1, 'Test 39');
test(nextGreaterElement(450210), 451002, 'Test 40');
test(nextGreaterElement(101010101), 101010110, 'Test 41');
test(nextGreaterElement(2121212121), 2121212211, 'Test 42');
test(nextGreaterElement(11223344556677889900), -1, 'Test 43');
test(nextGreaterElement(898989898), 898989988, 'Test 44');
test(nextGreaterElement(536421), 541236, 'Test 45');
test(nextGreaterElement(12341234), 12341243, 'Test 46');
test(nextGreaterElement(12344321), 12412334, 'Test 47');
test(nextGreaterElement(333333333), -1, 'Test 48');
test(nextGreaterElement(9876543210), -1, 'Test 49');
test(nextGreaterElement(33333333333333333333), -1, 'Test 50');
test(nextGreaterElement(3456789012), -1, 'Test 51');
test(nextGreaterElement(3214321), 3221134, 'Test 52');
test(nextGreaterElement(112233445566778899), -1, 'Test 53');
test(nextGreaterElement(123456789987654321), -1, 'Test 54');
test(nextGreaterElement(432123456789), -1, 'Test 55');
test(nextGreaterElement(3333333333), -1, 'Test 56');
test(nextGreaterElement(1000000000), -1, 'Test 57');
test(nextGreaterElement(1099999999), 1909999999, 'Test 58');
test(nextGreaterElement(12345678901234567890), -1, 'Test 59');
test(nextGreaterElement(111111111), -1, 'Test 60');
test(nextGreaterElement(1234567890), 1234567908, 'Test 61');
test(nextGreaterElement(2222222222), -1, 'Test 62');
test(nextGreaterElement(43212341), 43212413, 'Test 63');
test(nextGreaterElement(499999999), 949999999, 'Test 64');
test(nextGreaterElement(1121121121), 1121121211, 'Test 65');
test(nextGreaterElement(1221), 2112, 'Test 66');
test(nextGreaterElement(123454321), 123512344, 'Test 67');
test(nextGreaterElement(8999999999999999999999999999999999), -1, 'Test 68');
test(nextGreaterElement(543210), -1, 'Test 69');
test(nextGreaterElement(8765432109), -1, 'Test 70');
test(nextGreaterElement(543210987654321), -1, 'Test 71');
test(nextGreaterElement(98765), -1, 'Test 72');
test(nextGreaterElement(999999999999999999), -1, 'Test 73');
test(nextGreaterElement(123456789), 123456798, 'Test 74');
test(nextGreaterElement(1112111111), 1121111111, 'Test 75');
test(nextGreaterElement(98765432109876543210), -1, 'Test 76');
test(nextGreaterElement(987654321123456789), -1, 'Test 77');
test(nextGreaterElement(1111111111), -1, 'Test 78');
test(nextGreaterElement(54321), -1, 'Test 79');
test(nextGreaterElement(450340561), 450340615, 'Test 80');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

