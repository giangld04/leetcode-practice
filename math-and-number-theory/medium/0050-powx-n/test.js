// Test: 50. Powx N
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { myPow } = require("./solution");

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

console.log("\n50. Powx N\n");

test(myPow(3.00000, 0), 1, 'Test 1');
test(myPow(10.00000, -3), 0.001, 'Test 2');
test(myPow(5.00000, 1), 5.0, 'Test 3');
test(myPow(2.00000, -2), 0.25, 'Test 4');
test(myPow(0.10000, 2), 0.010000000000000002, 'Test 5');
test(myPow(1.50000, 5), 7.59375, 'Test 6');
test(myPow(2.10000, 3), 9.261000000000001, 'Test 7');
test(myPow(2.00000, -1), 0.5, 'Test 8');
test(myPow(0.50000, 4), 0.0625, 'Test 9');
test(myPow(2.00000, 10), 1024.0, 'Test 10');
test(myPow(0.99000, 100), 0.3660323412732289, 'Test 11');
test(myPow(1.00000, -1000000), 1.0, 'Test 12');
test(myPow(2.50000, -5), 0.01024, 'Test 13');
test(myPow(10.00000, 5), 100000.0, 'Test 14');
test(myPow(-1.00000, 2147483647), -1.0, 'Test 15');
test(myPow(-2.00000, 12), 4096.0, 'Test 16');
test(myPow(1.23456, 789), 1.5963462056225718e+72, 'Test 17');
test(myPow(3.14000, 7), 3009.5913952479914, 'Test 18');
test(myPow(-2.00000, -3), -0.125, 'Test 19');
test(myPow(-1.00000, 1000001), -1.0, 'Test 20');
test(myPow(0.10000, 10), 1.0000000000000011e-10, 'Test 21');
test(myPow(0.10000, 20), 1.0000000000000022e-20, 'Test 22');
test(myPow(0.99999, -10000), 1.1051714706643663, 'Test 23');
test(myPow(-1.50000, 2), 2.25, 'Test 24');
test(myPow(-0.50000, 4), 0.0625, 'Test 25');
test(myPow(-0.50000, 6), 0.015625, 'Test 26');
test(myPow(-1.00000, -2147483648), 1.0, 'Test 27');
test(myPow(9.87654, -321), 0.0, 'Test 28');
test(myPow(2.50000, 100), 6.223015277861143e+39, 'Test 29');
test(myPow(10.00000, 10), 10000000000.0, 'Test 30');
test(myPow(1.00000, 1000000), 1.0, 'Test 31');
test(myPow(5.00000, -3), 0.008, 'Test 32');
test(myPow(1.00000, -2147483648), 1.0, 'Test 33');
test(myPow(1.00000, 0), 1, 'Test 34');
test(myPow(10.00000, 2147483647), Infinity, 'Test 35');
test(myPow(99.99999, 10), 9.999990000004497e+19, 'Test 36');
test(myPow(-0.50000, 8), 0.00390625, 'Test 37');
test(myPow(2.00000, -1000), 9.332636185032189e-302, 'Test 38');
test(myPow(2.00000, 0), 1, 'Test 39');
test(myPow(2.50000, -3), 0.064, 'Test 40');
test(myPow(10.00000, 1000), Infinity, 'Test 41');
test(myPow(0.99999, 1000), 0.990049784246398, 'Test 42');
test(myPow(-3.00000, 4), 81.0, 'Test 43');
test(myPow(-3.00000, -3), -0.037037037037037035, 'Test 44');
test(myPow(0.10000, -5), 99999.99999999994, 'Test 45');
test(myPow(2.50000, 20), 90949470.17729282, 'Test 46');
test(myPow(1.00001, -1000000), 4.5402199796741926e-05, 'Test 47');
test(myPow(0.50000, -2147483648), Error: float division by zero, 'Test 48');
test(myPow(0.10000, -3), 999.9999999999998, 'Test 49');
test(myPow(-0.50000, 3), -0.125, 'Test 50');
test(myPow(1.73205, 12), 728.9959212545092, 'Test 51');
test(myPow(10.00000, 1), 10.0, 'Test 52');
test(myPow(-2.00000, 4), 16.0, 'Test 53');
test(myPow(0.10000, 100), 1.0000000000000108e-100, 'Test 54');
test(myPow(2.00000, 2147483647), Infinity, 'Test 55');
test(myPow(0.00001, 10000), 0.0, 'Test 56');
test(myPow(0.00000, 0), 1, 'Test 57');
test(myPow(0.50000, -5), 32.0, 'Test 58');
test(myPow(3.00000, 20), 3486784401.0, 'Test 59');
test(myPow(3.00000, 15), 14348907.0, 'Test 60');
test(myPow(1.00001, 1000), 1.0100501165820832, 'Test 61');
test(myPow(1.50000, 2147483646), Infinity, 'Test 62');
test(myPow(10.00000, 100), 1.0000000000000002e+100, 'Test 63');
test(myPow(2.00000, -2147483648), 0.0, 'Test 64');
test(myPow(0.00001, 1000000), 0.0, 'Test 65');
test(myPow(-1.00000, 2147483646), 1.0, 'Test 66');
test(myPow(1.50000, 20), 3325.256730079651, 'Test 67');
test(myPow(-2.00000, 3), -8.0, 'Test 68');
test(myPow(1.20000, -5), 0.4018775720164609, 'Test 69');
test(myPow(0.10000, -10), 9999999999.999989, 'Test 70');
test(myPow(1.00000, -1000), 1.0, 'Test 71');
test(myPow(0.10000, -100000000), Error: float division by zero, 'Test 72');
test(myPow(2.00000, 100000000), Infinity, 'Test 73');
test(myPow(-2.00000, 11), -2048.0, 'Test 74');
test(myPow(3.50000, 15), 144884079.28292847, 'Test 75');
test(myPow(0.50000, -10), 1024.0, 'Test 76');
test(myPow(1.41421, 50), 33550206.11671562, 'Test 77');
test(myPow(3.00000, 13), 1594323.0, 'Test 78');
test(myPow(0.99999, 1000000), 4.539765980992338e-05, 'Test 79');
test(myPow(5.00000, 0), 1, 'Test 80');
test(myPow(2.00000, -10), 0.0009765625, 'Test 81');
test(myPow(1.00000, -5), 1.0, 'Test 82');
test(myPow(1.00001, -1000), 0.9900498832512471, 'Test 83');
test(myPow(-1.50000, 5), -7.59375, 'Test 84');
test(myPow(1.00000, 2147483647), 1.0, 'Test 85');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

