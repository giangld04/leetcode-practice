// Test: 2834. Find The Minimum Possible Sum Of A Beautiful Array
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { minimumPossibleSum } = require("./solution");

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

console.log("\n2834. Find The Minimum Possible Sum Of A Beautiful Array\n");

test(minimumPossibleSum(2, 3), 4, 'Test 1');
test(minimumPossibleSum(100, 100), 7500, 'Test 2');
test(minimumPossibleSum(5, 8), 18, 'Test 3');
test(minimumPossibleSum(1, 1), 1, 'Test 4');
test(minimumPossibleSum(1000000000, 1000000000), 750000042, 'Test 5');
test(minimumPossibleSum(3, 3), 8, 'Test 6');
test(minimumPossibleSum(10, 15), 76, 'Test 7');
test(minimumPossibleSum(10, 5), 71, 'Test 8');
test(minimumPossibleSum(5, 10), 15, 'Test 9');
test(minimumPossibleSum(100, 10), 5430, 'Test 10');
test(minimumPossibleSum(50, 100), 1275, 'Test 11');
test(minimumPossibleSum(100, 1), 5050, 'Test 12');
test(minimumPossibleSum(10000, 10001), 75005000, 'Test 13');
test(minimumPossibleSum(10000, 20000), 50005000, 'Test 14');
test(minimumPossibleSum(5, 2), 15, 'Test 15');
test(minimumPossibleSum(200, 250), 29400, 'Test 16');
test(minimumPossibleSum(500, 250), 171750, 'Test 17');
test(minimumPossibleSum(500, 10), 127230, 'Test 18');
test(minimumPossibleSum(100000000, 10000000), 916675007, 'Test 19');
test(minimumPossibleSum(10000000, 5000000), 997018757, 'Test 20');
test(minimumPossibleSum(200000000, 150000000), 769375007, 'Test 21');
test(minimumPossibleSum(80, 40), 4380, 'Test 22');
test(minimumPossibleSum(1000000000, 1), 21, 'Test 23');
test(minimumPossibleSum(1000, 500), 687250, 'Test 24');
test(minimumPossibleSum(3000, 1500), 6186750, 'Test 25');
test(minimumPossibleSum(3, 7), 6, 'Test 26');
test(minimumPossibleSum(10000, 5000), 68747500, 'Test 27');
test(minimumPossibleSum(1000, 1001), 750500, 'Test 28');
test(minimumPossibleSum(100, 50), 6850, 'Test 29');
test(minimumPossibleSum(500000000, 750000000), 921875014, 'Test 30');
test(minimumPossibleSum(10000, 7500), 73436250, 'Test 31');
test(minimumPossibleSum(100, 101), 7550, 'Test 32');
test(minimumPossibleSum(75, 50), 4050, 'Test 33');
test(minimumPossibleSum(1000, 1000), 750000, 'Test 34');
test(minimumPossibleSum(20, 15), 301, 'Test 35');
test(minimumPossibleSum(999999999, 1000000000), 250000050, 'Test 36');
test(minimumPossibleSum(100000000, 100000000), 947500007, 'Test 37');
test(minimumPossibleSum(500000000, 500000000), 687500014, 'Test 38');
test(minimumPossibleSum(300, 301), 67650, 'Test 39');
test(minimumPossibleSum(500000, 100000), 499798971, 'Test 40');
test(minimumPossibleSum(30, 25), 681, 'Test 41');
test(minimumPossibleSum(1000, 2000), 500500, 'Test 42');
test(minimumPossibleSum(75, 100), 4075, 'Test 43');
test(minimumPossibleSum(999999999, 999999999), 750000049, 'Test 44');
test(minimumPossibleSum(1000000, 500000), 499745191, 'Test 45');
test(minimumPossibleSum(200, 300), 27550, 'Test 46');
test(minimumPossibleSum(5000000, 1000000), 997896757, 'Test 47');
test(minimumPossibleSum(2, 5), 3, 'Test 48');
test(minimumPossibleSum(300, 150), 61800, 'Test 49');
test(minimumPossibleSum(50, 10), 1455, 'Test 50');
test(minimumPossibleSum(25000000, 75000000), 10312500, 'Test 51');
test(minimumPossibleSum(100000, 50000), 874974958, 'Test 52');
test(minimumPossibleSum(999999999, 2), 28, 'Test 53');
test(minimumPossibleSum(75, 150), 2850, 'Test 54');
test(minimumPossibleSum(200, 150), 29350, 'Test 55');
test(minimumPossibleSum(200000000, 800000000), 960000007, 'Test 56');
test(minimumPossibleSum(500, 500), 187500, 'Test 57');
test(minimumPossibleSum(50000, 25000), 718737493, 'Test 58');
test(minimumPossibleSum(50, 20), 1635, 'Test 59');
test(minimumPossibleSum(1000, 100), 547050, 'Test 60');
test(minimumPossibleSum(750, 150), 331575, 'Test 61');
test(minimumPossibleSum(25000000, 50000000), 10312500, 'Test 62');
test(minimumPossibleSum(50, 25), 1731, 'Test 63');
test(minimumPossibleSum(75000000, 25000000), 949843757, 'Test 64');
test(minimumPossibleSum(150, 300), 11325, 'Test 65');
test(minimumPossibleSum(500, 100), 147300, 'Test 66');
test(minimumPossibleSum(250000000, 500000000), 906250007, 'Test 67');
test(minimumPossibleSum(1000, 505), 688996, 'Test 68');
test(minimumPossibleSum(1000000, 1000000), 999994757, 'Test 69');
test(minimumPossibleSum(75, 75), 4256, 'Test 70');
test(minimumPossibleSum(5000, 2000), 16498500, 'Test 71');
test(minimumPossibleSum(100000000, 150000000), 976875007, 'Test 72');
test(minimumPossibleSum(99999999, 100000000), 797500008, 'Test 73');
test(minimumPossibleSum(5000, 5001), 18752500, 'Test 74');
test(minimumPossibleSum(999999999, 500000000), 687500050, 'Test 75');
test(minimumPossibleSum(90, 90), 6075, 'Test 76');
test(minimumPossibleSum(100000, 100001), 500049951, 'Test 77');
test(minimumPossibleSum(1, 1000000000), 1, 'Test 78');
test(minimumPossibleSum(10, 11), 80, 'Test 79');
test(minimumPossibleSum(50000000, 25000000), 975468757, 'Test 80');
test(minimumPossibleSum(25, 15), 451, 'Test 81');
test(minimumPossibleSum(150, 75), 15506, 'Test 82');
test(minimumPossibleSum(10000, 10000), 75000000, 'Test 83');
test(minimumPossibleSum(100000000, 1), 15000000, 'Test 84');
test(minimumPossibleSum(500000000, 1000000000), 375000007, 'Test 85');
test(minimumPossibleSum(500, 300), 177400, 'Test 86');
test(minimumPossibleSum(150, 200), 16275, 'Test 87');
test(minimumPossibleSum(1, 2), 1, 'Test 88');
test(minimumPossibleSum(200, 200), 30000, 'Test 89');
test(minimumPossibleSum(50, 30), 1765, 'Test 90');
test(minimumPossibleSum(50000, 10000), 474979993, 'Test 91');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

