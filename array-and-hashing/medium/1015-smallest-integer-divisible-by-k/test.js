// Test: 1015. Smallest Integer Divisible By K
// 90 test cases from LeetCodeDataset
// Run: node test.js

const { smallestRepunitDivByK } = require("./solution");

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

console.log("\n1015. Smallest Integer Divisible By K\n");

test(smallestRepunitDivByK(29), 28, 'Test 1');
test(smallestRepunitDivByK(101), 4, 'Test 2');
test(smallestRepunitDivByK(83), 41, 'Test 3');
test(smallestRepunitDivByK(43), 21, 'Test 4');
test(smallestRepunitDivByK(89), 44, 'Test 5');
test(smallestRepunitDivByK(17), 16, 'Test 6');
test(smallestRepunitDivByK(73), 8, 'Test 7');
test(smallestRepunitDivByK(67), 33, 'Test 8');
test(smallestRepunitDivByK(53), 13, 'Test 9');
test(smallestRepunitDivByK(7), 6, 'Test 10');
test(smallestRepunitDivByK(99), 18, 'Test 11');
test(smallestRepunitDivByK(31), 15, 'Test 12');
test(smallestRepunitDivByK(13), 6, 'Test 13');
test(smallestRepunitDivByK(71), 35, 'Test 14');
test(smallestRepunitDivByK(2), -1, 'Test 15');
test(smallestRepunitDivByK(59), 58, 'Test 16');
test(smallestRepunitDivByK(99999), 45, 'Test 17');
test(smallestRepunitDivByK(97), 96, 'Test 18');
test(smallestRepunitDivByK(37), 3, 'Test 19');
test(smallestRepunitDivByK(61), 60, 'Test 20');
test(smallestRepunitDivByK(1), 1, 'Test 21');
test(smallestRepunitDivByK(79), 13, 'Test 22');
test(smallestRepunitDivByK(103), 34, 'Test 23');
test(smallestRepunitDivByK(107), 53, 'Test 24');
test(smallestRepunitDivByK(3), 3, 'Test 25');
test(smallestRepunitDivByK(9), 9, 'Test 26');
test(smallestRepunitDivByK(109), 108, 'Test 27');
test(smallestRepunitDivByK(113), 112, 'Test 28');
test(smallestRepunitDivByK(23), 22, 'Test 29');
test(smallestRepunitDivByK(11), 2, 'Test 30');
test(smallestRepunitDivByK(41), 5, 'Test 31');
test(smallestRepunitDivByK(100000), -1, 'Test 32');
test(smallestRepunitDivByK(19), 18, 'Test 33');
test(smallestRepunitDivByK(47), 46, 'Test 34');
test(smallestRepunitDivByK(5), -1, 'Test 35');
test(smallestRepunitDivByK(77777), 30, 'Test 36');
test(smallestRepunitDivByK(234567), 38412, 'Test 37');
test(smallestRepunitDivByK(4567), 4566, 'Test 38');
test(smallestRepunitDivByK(24680), -1, 'Test 39');
test(smallestRepunitDivByK(1234567), 34020, 'Test 40');
test(smallestRepunitDivByK(1000001), 12, 'Test 41');
test(smallestRepunitDivByK(999), 27, 'Test 42');
test(smallestRepunitDivByK(99991), 49995, 'Test 43');
test(smallestRepunitDivByK(199), 99, 'Test 44');
test(smallestRepunitDivByK(100003), 50001, 'Test 45');
test(smallestRepunitDivByK(789012), -1, 'Test 46');
test(smallestRepunitDivByK(111111111), 9, 'Test 47');
test(smallestRepunitDivByK(777777), 42, 'Test 48');
test(smallestRepunitDivByK(827), 413, 'Test 49');
test(smallestRepunitDivByK(81), 81, 'Test 50');
test(smallestRepunitDivByK(131071), 3855, 'Test 51');
test(smallestRepunitDivByK(7919), 3959, 'Test 52');
test(smallestRepunitDivByK(34567), 2658, 'Test 53');
test(smallestRepunitDivByK(99997), 7866, 'Test 54');
test(smallestRepunitDivByK(54321), 8568, 'Test 55');
test(smallestRepunitDivByK(12345), -1, 'Test 56');
test(smallestRepunitDivByK(57), 18, 'Test 57');
test(smallestRepunitDivByK(59999), 29999, 'Test 58');
test(smallestRepunitDivByK(500001), 249999, 'Test 59');
test(smallestRepunitDivByK(76543), 25514, 'Test 60');
test(smallestRepunitDivByK(100001), 10, 'Test 61');
test(smallestRepunitDivByK(700003), 9459, 'Test 62');
test(smallestRepunitDivByK(13579), 366, 'Test 63');
test(smallestRepunitDivByK(89753), 89752, 'Test 64');
test(smallestRepunitDivByK(990001), 495000, 'Test 65');
test(smallestRepunitDivByK(123), 15, 'Test 66');
test(smallestRepunitDivByK(500003), 214284, 'Test 67');
test(smallestRepunitDivByK(65537), 65536, 'Test 68');
test(smallestRepunitDivByK(999999999), 81, 'Test 69');
test(smallestRepunitDivByK(99998), -1, 'Test 70');
test(smallestRepunitDivByK(89999), 462, 'Test 71');
test(smallestRepunitDivByK(50003), 6045, 'Test 72');
test(smallestRepunitDivByK(333), 9, 'Test 73');
test(smallestRepunitDivByK(999983), 999982, 'Test 74');
test(smallestRepunitDivByK(899999), 10197, 'Test 75');
test(smallestRepunitDivByK(88889), 14654, 'Test 76');
test(smallestRepunitDivByK(1001), 6, 'Test 77');
test(smallestRepunitDivByK(89765), -1, 'Test 78');
test(smallestRepunitDivByK(98765), -1, 'Test 79');
test(smallestRepunitDivByK(313), 312, 'Test 80');
test(smallestRepunitDivByK(987654), -1, 'Test 81');
test(smallestRepunitDivByK(104729), 52364, 'Test 82');
test(smallestRepunitDivByK(75321), 37656, 'Test 83');
test(smallestRepunitDivByK(137), 8, 'Test 84');
test(smallestRepunitDivByK(79999), 13333, 'Test 85');
test(smallestRepunitDivByK(23456), -1, 'Test 86');
test(smallestRepunitDivByK(987654321), 116194320, 'Test 87');
test(smallestRepunitDivByK(11111), 5, 'Test 88');
test(smallestRepunitDivByK(997), 166, 'Test 89');
test(smallestRepunitDivByK(300007), 100002, 'Test 90');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

