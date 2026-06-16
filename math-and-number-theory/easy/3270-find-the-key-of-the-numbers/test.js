// Test: 3270. Find The Key Of The Numbers
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { generateKey } = require("./solution");

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

console.log("\n3270. Find The Key Of The Numbers\n");

test(generateKey(9999, 9999, 9999), 9999, 'Test 1');
test(generateKey(1000, 1000, 1000), 1000, 'Test 2');
test(generateKey(12, 345, 6789), 12, 'Test 3');
test(generateKey(5555, 5555, 6666), 5555, 'Test 4');
test(generateKey(1, 2, 3), 1, 'Test 5');
test(generateKey(1234, 4321, 1111), 1111, 'Test 6');
test(generateKey(1, 10, 1000), 0, 'Test 7');
test(generateKey(987, 879, 798), 777, 'Test 8');
test(generateKey(9080, 7060, 5040), 5040, 'Test 9');
test(generateKey(6789, 5432, 3210), 3210, 'Test 10');
test(generateKey(1234, 2345, 3456), 1234, 'Test 11');
test(generateKey(444, 555, 666), 444, 'Test 12');
test(generateKey(1111, 2222, 3333), 1111, 'Test 13');
test(generateKey(123, 45, 6), 3, 'Test 14');
test(generateKey(9000, 8000, 7000), 7000, 'Test 15');
test(generateKey(1999, 9919, 9991), 1911, 'Test 16');
test(generateKey(4444, 3333, 2222), 2222, 'Test 17');
test(generateKey(123, 4567, 8910), 110, 'Test 18');
test(generateKey(2020, 1010, 3030), 1010, 'Test 19');
test(generateKey(1111, 9999, 5555), 1111, 'Test 20');
test(generateKey(7890, 6543, 3210), 3210, 'Test 21');
test(generateKey(9876, 6789, 3456), 3456, 'Test 22');
test(generateKey(12, 3456, 7890), 10, 'Test 23');
test(generateKey(4455, 5566, 6677), 4455, 'Test 24');
test(generateKey(123, 234, 345), 123, 'Test 25');
test(generateKey(1000, 2000, 3000), 1000, 'Test 26');
test(generateKey(5678, 8765, 6543), 5543, 'Test 27');
test(generateKey(1234, 1234, 5678), 1234, 'Test 28');
test(generateKey(1111, 9999, 4444), 1111, 'Test 29');
test(generateKey(9, 99, 999), 9, 'Test 30');
test(generateKey(1119, 2228, 3337), 1117, 'Test 31');
test(generateKey(5678, 8765, 7856), 5655, 'Test 32');
test(generateKey(9876, 5432, 1098), 1032, 'Test 33');
test(generateKey(5678, 8765, 9876), 5665, 'Test 34');
test(generateKey(4567, 3456, 2345), 2345, 'Test 35');
test(generateKey(1010, 2020, 3030), 1010, 'Test 36');
test(generateKey(1001, 1010, 1100), 1000, 'Test 37');
test(generateKey(4321, 1234, 8765), 1221, 'Test 38');
test(generateKey(555, 5555, 5555), 555, 'Test 39');
test(generateKey(2345, 3456, 4567), 2345, 'Test 40');
test(generateKey(1298, 9876, 6754), 1254, 'Test 41');
test(generateKey(2233, 4455, 6677), 2233, 'Test 42');
test(generateKey(12, 34, 56), 12, 'Test 43');
test(generateKey(111, 222, 333), 111, 'Test 44');
test(generateKey(789, 897, 978), 777, 'Test 45');
test(generateKey(987, 100, 200), 100, 'Test 46');
test(generateKey(999, 888, 777), 777, 'Test 47');
test(generateKey(999, 111, 555), 111, 'Test 48');
test(generateKey(9999, 1111, 2222), 1111, 'Test 49');
test(generateKey(100, 100, 100), 100, 'Test 50');
test(generateKey(9, 888, 7777), 7, 'Test 51');
test(generateKey(5678, 6578, 7658), 5558, 'Test 52');
test(generateKey(8642, 9753, 1357), 1342, 'Test 53');
test(generateKey(987, 876, 765), 765, 'Test 54');
test(generateKey(999, 1, 2345), 1, 'Test 55');
test(generateKey(9999, 1234, 8765), 1234, 'Test 56');
test(generateKey(1234, 4321, 3214), 1211, 'Test 57');
test(generateKey(4321, 1111, 2222), 1111, 'Test 58');
test(generateKey(1234, 1234, 1234), 1234, 'Test 59');
test(generateKey(1, 9999, 9999), 1, 'Test 60');
test(generateKey(1111, 2222, 1111), 1111, 'Test 61');
test(generateKey(9999, 8888, 7777), 7777, 'Test 62');
test(generateKey(4321, 1234, 1111), 1111, 'Test 63');
test(generateKey(1, 22, 333), 1, 'Test 64');
test(generateKey(9876, 8765, 7654), 7654, 'Test 65');
test(generateKey(1234, 4321, 2341), 1221, 'Test 66');
test(generateKey(1234, 5678, 4321), 1221, 'Test 67');
test(generateKey(5678, 6789, 7890), 5670, 'Test 68');
test(generateKey(123, 4567, 890), 120, 'Test 69');
test(generateKey(100, 200, 300), 100, 'Test 70');
test(generateKey(5678, 1234, 4321), 1221, 'Test 71');
test(generateKey(123, 321, 213), 111, 'Test 72');
test(generateKey(4321, 3421, 2341), 2321, 'Test 73');
test(generateKey(1234, 4321, 1122), 1121, 'Test 74');
test(generateKey(1001, 2002, 3003), 1001, 'Test 75');
test(generateKey(1020, 3040, 5060), 1020, 'Test 76');
test(generateKey(9999, 1111, 8888), 1111, 'Test 77');
test(generateKey(4444, 5555, 6666), 4444, 'Test 78');
test(generateKey(5555, 4444, 3333), 3333, 'Test 79');
test(generateKey(1, 11, 111), 1, 'Test 80');
test(generateKey(9090, 8080, 7070), 7070, 'Test 81');
test(generateKey(8888, 7777, 6666), 6666, 'Test 82');
test(generateKey(4321, 3214, 2143), 2111, 'Test 83');
test(generateKey(1999, 9199, 9919), 1119, 'Test 84');
test(generateKey(5678, 6543, 8765), 5543, 'Test 85');
test(generateKey(9, 98, 987), 7, 'Test 86');
test(generateKey(9, 8, 7), 7, 'Test 87');
test(generateKey(2468, 1357, 9753), 1353, 'Test 88');
test(generateKey(9998, 8887, 7776), 7776, 'Test 89');
test(generateKey(9087, 7098, 8079), 7077, 'Test 90');
test(generateKey(1122, 2233, 3344), 1122, 'Test 91');
test(generateKey(123, 456, 789), 123, 'Test 92');
test(generateKey(9999, 1111, 5555), 1111, 'Test 93');
test(generateKey(1234, 4321, 2143), 1121, 'Test 94');
test(generateKey(888, 889, 898), 888, 'Test 95');
test(generateKey(456, 321, 654), 321, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

