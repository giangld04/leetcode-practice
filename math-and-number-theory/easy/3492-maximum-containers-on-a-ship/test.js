// Test: 3492. Maximum Containers On A Ship
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { maxContainers } = require("./solution");

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

console.log("\n3492. Maximum Containers On A Ship\n");

test(maxContainers(10, 5, 25), 5, 'Test 1');
test(maxContainers(10, 1, 10), 10, 'Test 2');
test(maxContainers(5, 2, 20), 10, 'Test 3');
test(maxContainers(5, 10, 50), 5, 'Test 4');
test(maxContainers(5, 10, 100), 10, 'Test 5');
test(maxContainers(1000, 1000, 1000000000), 1000000, 'Test 6');
test(maxContainers(2, 3, 15), 4, 'Test 7');
test(maxContainers(7, 10, 50), 5, 'Test 8');
test(maxContainers(1, 1, 1), 1, 'Test 9');
test(maxContainers(7, 3, 60), 20, 'Test 10');
test(maxContainers(4, 5, 10), 2, 'Test 11');
test(maxContainers(7, 2, 50), 25, 'Test 12');
test(maxContainers(3, 5, 20), 4, 'Test 13');
test(maxContainers(1, 1, 1000), 1, 'Test 14');
test(maxContainers(333, 334, 100000), 299, 'Test 15');
test(maxContainers(150, 150, 22499), 149, 'Test 16');
test(maxContainers(600, 50, 25000), 500, 'Test 17');
test(maxContainers(800, 125, 10000000), 80000, 'Test 18');
test(maxContainers(100, 50, 4500), 90, 'Test 19');
test(maxContainers(100, 50, 4900), 98, 'Test 20');
test(maxContainers(500, 200, 99999999), 250000, 'Test 21');
test(maxContainers(250, 350, 875000), 2500, 'Test 22');
test(maxContainers(200, 25, 4999), 199, 'Test 23');
test(maxContainers(750, 100, 50000), 500, 'Test 24');
test(maxContainers(100, 500, 45000), 90, 'Test 25');
test(maxContainers(666, 166, 100000000), 443556, 'Test 26');
test(maxContainers(400, 250, 1000000), 4000, 'Test 27');
test(maxContainers(550, 800, 4400000), 5500, 'Test 28');
test(maxContainers(400, 250, 100000), 400, 'Test 29');
test(maxContainers(999, 500, 499500), 999, 'Test 30');
test(maxContainers(100, 1001, 100100), 100, 'Test 31');
test(maxContainers(750, 300, 675000), 2250, 'Test 32');
test(maxContainers(600, 1200, 7200000), 6000, 'Test 33');
test(maxContainers(333, 333, 333333333), 110889, 'Test 34');
test(maxContainers(678, 9, 6000), 666, 'Test 35');
test(maxContainers(250, 50, 12499), 249, 'Test 36');
test(maxContainers(750, 200, 150000), 750, 'Test 37');
test(maxContainers(5, 200, 999), 4, 'Test 38');
test(maxContainers(999, 999, 998001), 999, 'Test 39');
test(maxContainers(800, 500, 399999), 799, 'Test 40');
test(maxContainers(600, 400, 250000), 625, 'Test 41');
test(maxContainers(666, 150, 100000), 666, 'Test 42');
test(maxContainers(250, 400, 100000), 250, 'Test 43');
test(maxContainers(1000, 1, 500), 500, 'Test 44');
test(maxContainers(5, 100, 200), 2, 'Test 45');
test(maxContainers(250, 400, 1000000), 2500, 'Test 46');
test(maxContainers(1000, 500, 500000), 1000, 'Test 47');
test(maxContainers(400, 200, 79999), 399, 'Test 48');
test(maxContainers(500, 200, 1000000), 5000, 'Test 49');
test(maxContainers(400, 50, 99999), 1999, 'Test 50');
test(maxContainers(200, 999, 200000), 200, 'Test 51');
test(maxContainers(200, 15, 5000), 333, 'Test 52');
test(maxContainers(300, 150, 50000), 333, 'Test 53');
test(maxContainers(900, 300, 270000), 900, 'Test 54');
test(maxContainers(500, 7, 350000), 50000, 'Test 55');
test(maxContainers(500, 750, 300000), 400, 'Test 56');
test(maxContainers(200, 1, 100), 100, 'Test 57');
test(maxContainers(800, 10, 8000), 800, 'Test 58');
test(maxContainers(900, 950, 855000000), 810000, 'Test 59');
test(maxContainers(500, 50, 125000), 2500, 'Test 60');
test(maxContainers(800, 50, 20000), 400, 'Test 61');
test(maxContainers(750, 50, 180000), 3600, 'Test 62');
test(maxContainers(666, 667, 500000), 749, 'Test 63');
test(maxContainers(10, 10, 99), 9, 'Test 64');
test(maxContainers(1000, 900, 900000), 1000, 'Test 65');
test(maxContainers(5, 5000, 25000), 5, 'Test 66');
test(maxContainers(250, 75, 20000), 266, 'Test 67');
test(maxContainers(1000, 1000, 999999999), 999999, 'Test 68');
test(maxContainers(999, 1, 999), 999, 'Test 69');
test(maxContainers(250, 100, 24900), 249, 'Test 70');
test(maxContainers(500, 250, 100000000), 250000, 'Test 71');
test(maxContainers(999, 999, 999000000), 998001, 'Test 72');
test(maxContainers(999, 1, 1000000000), 998001, 'Test 73');
test(maxContainers(1000, 999, 998001), 999, 'Test 74');
test(maxContainers(750, 150, 112500), 750, 'Test 75');
test(maxContainers(500, 50, 100000), 2000, 'Test 76');
test(maxContainers(800, 1000, 800000), 800, 'Test 77');
test(maxContainers(333, 333, 33266667), 99899, 'Test 78');
test(maxContainers(1, 1000000000, 1000000000), 1, 'Test 79');
test(maxContainers(600, 60, 359999), 5999, 'Test 80');
test(maxContainers(200, 300, 60000), 200, 'Test 81');
test(maxContainers(123, 456, 67890123), 15129, 'Test 82');
test(maxContainers(300, 100, 25000), 250, 'Test 83');
test(maxContainers(200, 1000, 199000), 199, 'Test 84');
test(maxContainers(750, 123, 1000000), 8130, 'Test 85');
test(maxContainers(10, 999, 9990), 10, 'Test 86');
test(maxContainers(500, 250, 125000), 500, 'Test 87');
test(maxContainers(800, 100, 80000), 800, 'Test 88');
test(maxContainers(300, 700, 2000000), 2857, 'Test 89');
test(maxContainers(500, 2, 1000), 500, 'Test 90');
test(maxContainers(300, 200, 60000), 300, 'Test 91');
test(maxContainers(800, 10, 7900), 790, 'Test 92');
test(maxContainers(500, 10, 4990), 499, 'Test 93');
test(maxContainers(800, 150, 1200000), 8000, 'Test 94');
test(maxContainers(800, 125, 100000), 800, 'Test 95');
test(maxContainers(650, 100, 70000), 700, 'Test 96');
test(maxContainers(750, 75, 450000), 6000, 'Test 97');
test(maxContainers(50, 200, 19999), 99, 'Test 98');
test(maxContainers(500, 750, 375000), 500, 'Test 99');
test(maxContainers(400, 400, 599999), 1499, 'Test 100');
test(maxContainers(10, 100, 1000), 10, 'Test 101');
test(maxContainers(250, 333, 83250), 250, 'Test 102');
test(maxContainers(50, 100, 4500), 45, 'Test 103');
test(maxContainers(150, 25, 3749), 149, 'Test 104');
test(maxContainers(900, 50, 45000), 900, 'Test 105');
test(maxContainers(100, 10, 999), 99, 'Test 106');
test(maxContainers(1000, 1, 999), 999, 'Test 107');
test(maxContainers(750, 300, 500000000), 562500, 'Test 108');
test(maxContainers(15, 15, 225), 15, 'Test 109');
test(maxContainers(750, 20, 14500), 725, 'Test 110');
test(maxContainers(500, 250, 500000), 2000, 'Test 111');
test(maxContainers(1000, 10, 9999999), 999999, 'Test 112');
test(maxContainers(100, 100, 5000), 50, 'Test 113');
test(maxContainers(333, 250, 200000), 800, 'Test 114');
test(maxContainers(900, 90, 729000), 8100, 'Test 115');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

