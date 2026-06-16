// Test: 1556. Thousand Separator
// 50 test cases from LeetCodeDataset
// Run: node test.js

const { thousandSeparator } = require("./solution");

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

console.log("\n1556. Thousand Separator\n");

test(thousandSeparator(0), 0, 'Test 1');
test(thousandSeparator(1234), 1.234, 'Test 2');
test(thousandSeparator(1000000), 1.000.000, 'Test 3');
test(thousandSeparator(2147483647), 2.147.483.647, 'Test 4');
test(thousandSeparator(123456789), 123.456.789, 'Test 5');
test(thousandSeparator(1234567), 1.234.567, 'Test 6');
test(thousandSeparator(123456), 123.456, 'Test 7');
test(thousandSeparator(56789), 56.789, 'Test 8');
test(thousandSeparator(1000), 1.000, 'Test 9');
test(thousandSeparator(987), 987, 'Test 10');
test(thousandSeparator(111222333444555666777888999), 111.222.333.444.555.666.777.888.999, 'Test 11');
test(thousandSeparator(123456789012), 123.456.789.012, 'Test 12');
test(thousandSeparator(999999999), 999.999.999, 'Test 13');
test(thousandSeparator(1000000000000000), 1.000.000.000.000.000, 'Test 14');
test(thousandSeparator(1234567890123456789), 1.234.567.890.123.456.789, 'Test 15');
test(thousandSeparator(123456789123456789), 123.456.789.123.456.789, 'Test 16');
test(thousandSeparator(999999999999), 999.999.999.999, 'Test 17');
test(thousandSeparator(100), 100, 'Test 18');
test(thousandSeparator(456789012), 456.789.012, 'Test 19');
test(thousandSeparator(1000000000000), 1.000.000.000.000, 'Test 20');
test(thousandSeparator(123), 123, 'Test 21');
test(thousandSeparator(1), 1, 'Test 22');
test(thousandSeparator(1001001), 1.001.001, 'Test 23');
test(thousandSeparator(1234567890123456), 1.234.567.890.123.456, 'Test 24');
test(thousandSeparator(10000), 10.000, 'Test 25');
test(thousandSeparator(111111111111111), 111.111.111.111.111, 'Test 26');
test(thousandSeparator(1001), 1.001, 'Test 27');
test(thousandSeparator(9876543210987654321), 9.876.543.210.987.654.321, 'Test 28');
test(thousandSeparator(101010101), 101.010.101, 'Test 29');
test(thousandSeparator(10000000000), 10.000.000.000, 'Test 30');
test(thousandSeparator(100000), 100.000, 'Test 31');
test(thousandSeparator(98765432109876543210987654321), 98.765.432.109.876.543.210.987.654.321, 'Test 32');
test(thousandSeparator(9876543210), 9.876.543.210, 'Test 33');
test(thousandSeparator(999), 999, 'Test 34');
test(thousandSeparator(1000000000), 1.000.000.000, 'Test 35');
test(thousandSeparator(1234567890123), 1.234.567.890.123, 'Test 36');
test(thousandSeparator(111111111), 111.111.111, 'Test 37');
test(thousandSeparator(1010101010), 1.010.101.010, 'Test 38');
test(thousandSeparator(456789012345), 456.789.012.345, 'Test 39');
test(thousandSeparator(1234567890), 1.234.567.890, 'Test 40');
test(thousandSeparator(567890123), 567.890.123, 'Test 41');
test(thousandSeparator(987654321), 987.654.321, 'Test 42');
test(thousandSeparator(987654321098), 987.654.321.098, 'Test 43');
test(thousandSeparator(123456789012345), 123.456.789.012.345, 'Test 44');
test(thousandSeparator(123456789123), 123.456.789.123, 'Test 45');
test(thousandSeparator(999999), 999.999, 'Test 46');
test(thousandSeparator(987654321098765), 987.654.321.098.765, 'Test 47');
test(thousandSeparator(1111111111), 1.111.111.111, 'Test 48');
test(thousandSeparator(54321), 54.321, 'Test 49');
test(thousandSeparator(10), 10, 'Test 50');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

