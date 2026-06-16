// Test: 2165. Smallest Value Of The Rearranged Number
// 121 test cases from LeetCodeDataset
// Run: node test.js

const { smallestNumber } = require("./solution");

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

console.log("\n2165. Smallest Value Of The Rearranged Number\n");

test(smallestNumber(2020), 2002, 'Test 1');
test(smallestNumber(10), 10, 'Test 2');
test(smallestNumber(-10000000000), -10000000000, 'Test 3');
test(smallestNumber(10000000000), 10000000000, 'Test 4');
test(smallestNumber(10001), 10001, 'Test 5');
test(smallestNumber(123456789), 123456789, 'Test 6');
test(smallestNumber(9876543210), 1023456789, 'Test 7');
test(smallestNumber(310), 103, 'Test 8');
test(smallestNumber(1000), 1000, 'Test 9');
test(smallestNumber(-10001), -11000, 'Test 10');
test(smallestNumber(-9876543210), -9876543210, 'Test 11');
test(smallestNumber(1001), 1001, 'Test 12');
test(smallestNumber(987654321), 123456789, 'Test 13');
test(smallestNumber(-100), -100, 'Test 14');
test(smallestNumber(0), 0, 'Test 15');
test(smallestNumber(-7605), -7650, 'Test 16');
test(smallestNumber(-1001), -1100, 'Test 17');
test(smallestNumber(-123456789), -987654321, 'Test 18');
test(smallestNumber(100), 100, 'Test 19');
test(smallestNumber(-12345), -54321, 'Test 20');
test(smallestNumber(54321), 12345, 'Test 21');
test(smallestNumber(-10), -10, 'Test 22');
test(smallestNumber(-900), -900, 'Test 23');
test(smallestNumber(20001002003004005), 10000000000022345, 'Test 24');
test(smallestNumber(-600500400300201), -654321000000000, 'Test 25');
test(smallestNumber(3000000000000000000), 3000000000000000000, 'Test 26');
test(smallestNumber(-999999999), -999999999, 'Test 27');
test(smallestNumber(101010101010101), 100000001111111, 'Test 28');
test(smallestNumber(505050505050505), 500000005555555, 'Test 29');
test(smallestNumber(-123456789012345), -987655443322110, 'Test 30');
test(smallestNumber(-1230456), -6543210, 'Test 31');
test(smallestNumber(2100000000000000), 1000000000000002, 'Test 32');
test(smallestNumber(1000000000), 1000000000, 'Test 33');
test(smallestNumber(-202020202020202), -222222220000000, 'Test 34');
test(smallestNumber(213004005), 100002345, 'Test 35');
test(smallestNumber(-999999999999999), -999999999999999, 'Test 36');
test(smallestNumber(-987654321012345), -987655443322110, 'Test 37');
test(smallestNumber(-543210000), -543210000, 'Test 38');
test(smallestNumber(-12000210), -22110000, 'Test 39');
test(smallestNumber(-99999999999999), -99999999999999, 'Test 40');
test(smallestNumber(101010101), 100001111, 'Test 41');
test(smallestNumber(303030303030303), 300000003333333, 'Test 42');
test(smallestNumber(56789), 56789, 'Test 43');
test(smallestNumber(1230000000), 1000000023, 'Test 44');
test(smallestNumber(100000000000001), 100000000000001, 'Test 45');
test(smallestNumber(1234567890987654), 1023445566778899, 'Test 46');
test(smallestNumber(111222333444555666777888999), 111222333444555666777888999, 'Test 47');
test(smallestNumber(1000100), 1000001, 'Test 48');
test(smallestNumber(120030400500600), 100000000023456, 'Test 49');
test(smallestNumber(20000000000000), 20000000000000, 'Test 50');
test(smallestNumber(1000000000000000), 1000000000000000, 'Test 51');
test(smallestNumber(-111111111111111), -111111111111111, 'Test 52');
test(smallestNumber(-300000000000000), -300000000000000, 'Test 53');
test(smallestNumber(1000000000000001), 1000000000000001, 'Test 54');
test(smallestNumber(100000000000000), 100000000000000, 'Test 55');
test(smallestNumber(2000000000000000001), 1000000000000000002, 'Test 56');
test(smallestNumber(202020202020202), 200000002222222, 'Test 57');
test(smallestNumber(1002003004), 1000000234, 'Test 58');
test(smallestNumber(1000000001), 1000000001, 'Test 59');
test(smallestNumber(-123456789098765), -998877665543210, 'Test 60');
test(smallestNumber(-200100000000000), -210000000000000, 'Test 61');
test(smallestNumber(-111222333), -333222111, 'Test 62');
test(smallestNumber(-9999999999999), -9999999999999, 'Test 63');
test(smallestNumber(12003004005), 10000002345, 'Test 64');
test(smallestNumber(999999999), 999999999, 'Test 65');
test(smallestNumber(-50000000000000), -50000000000000, 'Test 66');
test(smallestNumber(1111111111111), 1111111111111, 'Test 67');
test(smallestNumber(-2000000000000000000), -2000000000000000000, 'Test 68');
test(smallestNumber(-2000000000000000001), -2100000000000000000, 'Test 69');
test(smallestNumber(-1000000000000000000), -1000000000000000000, 'Test 70');
test(smallestNumber(1010101010), 1000001111, 'Test 71');
test(smallestNumber(10000000000000000), 10000000000000000, 'Test 72');
test(smallestNumber(-111000000), -111000000, 'Test 73');
test(smallestNumber(10000000000000001), 10000000000000001, 'Test 74');
test(smallestNumber(-1), -1, 'Test 75');
test(smallestNumber(-543210987654321), -987655443322110, 'Test 76');
test(smallestNumber(2003005006), 2000000356, 'Test 77');
test(smallestNumber(30000123), 10000233, 'Test 78');
test(smallestNumber(1000002), 1000002, 'Test 79');
test(smallestNumber(999999999999999), 999999999999999, 'Test 80');
test(smallestNumber(-999888777666), -999888777666, 'Test 81');
test(smallestNumber(100001000010000), 100000000000011, 'Test 82');
test(smallestNumber(500000000000000), 500000000000000, 'Test 83');
test(smallestNumber(-222222222), -222222222, 'Test 84');
test(smallestNumber(-1000000000000000001), -1100000000000000000, 'Test 85');
test(smallestNumber(-200000000000001), -210000000000000, 'Test 86');
test(smallestNumber(2000000001), 1000000002, 'Test 87');
test(smallestNumber(-100000000000001), -110000000000000, 'Test 88');
test(smallestNumber(111000222333), 100011222333, 'Test 89');
test(smallestNumber(-900000000000001), -910000000000000, 'Test 90');
test(smallestNumber(5000000000000000000), 5000000000000000000, 'Test 91');
test(smallestNumber(5000000000000000001), 1000000000000000005, 'Test 92');
test(smallestNumber(-1000000000000000), -1000000000000000, 'Test 93');
test(smallestNumber(111111111111111), 111111111111111, 'Test 94');
test(smallestNumber(-303030303030303), -333333330000000, 'Test 95');
test(smallestNumber(503020104), 100002345, 'Test 96');
test(smallestNumber(900000000000000), 900000000000000, 'Test 97');
test(smallestNumber(200000000000001), 100000000000002, 'Test 98');
test(smallestNumber(-50006007008), -87650000000, 'Test 99');
test(smallestNumber(100020003000), 100000000023, 'Test 100');
test(smallestNumber(99999999999999), 99999999999999, 'Test 101');
test(smallestNumber(3003003), 3000033, 'Test 102');
test(smallestNumber(-10000100001000), -11100000000000, 'Test 103');
test(smallestNumber(-100000000000000), -100000000000000, 'Test 104');
test(smallestNumber(100000000000000000), 100000000000000000, 'Test 105');
test(smallestNumber(1234567890), 1023456789, 'Test 106');
test(smallestNumber(10000000000000), 10000000000000, 'Test 107');
test(smallestNumber(1000000000000000002), 1000000000000000002, 'Test 108');
test(smallestNumber(-2100300), -3210000, 'Test 109');
test(smallestNumber(2000000000000000000), 2000000000000000000, 'Test 110');
test(smallestNumber(1000000000000000000), 1000000000000000000, 'Test 111');
test(smallestNumber(123456789012345), 101223344556789, 'Test 112');
test(smallestNumber(123000456), 100023456, 'Test 113');
test(smallestNumber(-987000000000000), -987000000000000, 'Test 114');
test(smallestNumber(1000000000000000001), 1000000000000000001, 'Test 115');
test(smallestNumber(-202020202), -222220000, 'Test 116');
test(smallestNumber(2003004005), 2000000345, 'Test 117');
test(smallestNumber(-1234567890), -9876543210, 'Test 118');
test(smallestNumber(-5000000), -5000000, 'Test 119');
test(smallestNumber(-56789), -98765, 'Test 120');
test(smallestNumber(-1000000000000001), -1100000000000000, 'Test 121');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

