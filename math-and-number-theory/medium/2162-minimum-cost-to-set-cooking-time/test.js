// Test: 2162. Minimum Cost To Set Cooking Time
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { minCostSetTime } = require("./solution");

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

console.log("\n2162. Minimum Cost To Set Cooking Time\n");

test(minCostSetTime(1, 2, 1, 600), 6, 'Test 1');
test(minCostSetTime(0, 1, 2, 76), 6, 'Test 2');
test(minCostSetTime(2, 2, 3, 599), 15, 'Test 3');
test(minCostSetTime(6, 3, 2, 3599), 20, 'Test 4');
test(minCostSetTime(9, 5, 10, 99), 20, 'Test 5');
test(minCostSetTime(5, 1, 1, 120), 5, 'Test 6');
test(minCostSetTime(3, 3, 2, 300), 12, 'Test 7');
test(minCostSetTime(8, 2, 1, 1), 3, 'Test 8');
test(minCostSetTime(7, 4, 5, 180), 23, 'Test 9');
test(minCostSetTime(4, 1, 1, 6039), 5, 'Test 10');
test(minCostSetTime(7, 6, 3, 59), 18, 'Test 11');
test(minCostSetTime(8, 3, 5, 3001), 29, 'Test 12');
test(minCostSetTime(9, 2, 1, 1), 3, 'Test 13');
test(minCostSetTime(9, 1, 10, 6039), 40, 'Test 14');
test(minCostSetTime(4, 30, 20, 1234), 170, 'Test 15');
test(minCostSetTime(0, 6, 5, 99), 16, 'Test 16');
test(minCostSetTime(6, 5, 1, 480), 13, 'Test 17');
test(minCostSetTime(0, 1, 10, 1000), 44, 'Test 18');
test(minCostSetTime(1, 8, 5, 1234), 36, 'Test 19');
test(minCostSetTime(7, 200, 150, 99), 500, 'Test 20');
test(minCostSetTime(9, 5, 2, 6039), 8, 'Test 21');
test(minCostSetTime(8, 2, 2, 2039), 14, 'Test 22');
test(minCostSetTime(6, 2, 1, 99), 4, 'Test 23');
test(minCostSetTime(6, 1, 1, 59), 4, 'Test 24');
test(minCostSetTime(5, 15, 25, 2345), 160, 'Test 25');
test(minCostSetTime(7, 2, 1, 99), 4, 'Test 26');
test(minCostSetTime(1, 20, 5, 900), 60, 'Test 27');
test(minCostSetTime(2, 5, 3, 5999), 27, 'Test 28');
test(minCostSetTime(9, 10, 1, 1234), 34, 'Test 29');
test(minCostSetTime(2, 1, 5, 240), 17, 'Test 30');
test(minCostSetTime(9, 5, 3, 6039), 12, 'Test 31');
test(minCostSetTime(1, 4, 4, 3159), 28, 'Test 32');
test(minCostSetTime(4, 3, 7, 60), 20, 'Test 33');
test(minCostSetTime(1, 5, 1, 9999), Infinity, 'Test 34');
test(minCostSetTime(8, 3, 7, 119), 30, 'Test 35');
test(minCostSetTime(0, 20, 10, 3600), 80, 'Test 36');
test(minCostSetTime(3, 2, 3, 3540), 18, 'Test 37');
test(minCostSetTime(3, 5, 3, 5999), 27, 'Test 38');
test(minCostSetTime(6, 3, 7, 2900), 40, 'Test 39');
test(minCostSetTime(5, 5, 3, 5999), 27, 'Test 40');
test(minCostSetTime(0, 7, 2, 4567), 36, 'Test 41');
test(minCostSetTime(9, 10, 1, 6039), 4, 'Test 42');
test(minCostSetTime(5, 7, 2, 5432), 29, 'Test 43');
test(minCostSetTime(1, 1, 10, 300), 32, 'Test 44');
test(minCostSetTime(4, 10, 1, 1800), 24, 'Test 45');
test(minCostSetTime(8, 10, 5, 900), 50, 'Test 46');
test(minCostSetTime(5, 7, 4, 1234), 37, 'Test 47');
test(minCostSetTime(2, 15, 3, 480), 39, 'Test 48');
test(minCostSetTime(1, 100, 50, 120), 350, 'Test 49');
test(minCostSetTime(6, 50, 25, 1800), 200, 'Test 50');
test(minCostSetTime(7, 1, 2, 6000), 11, 'Test 51');
test(minCostSetTime(3, 2, 3, 300), 13, 'Test 52');
test(minCostSetTime(2, 4, 6, 2345), 40, 'Test 53');
test(minCostSetTime(0, 1, 1000, 60), 2002, 'Test 54');
test(minCostSetTime(4, 7, 4, 360), 26, 'Test 55');
test(minCostSetTime(5, 20, 10, 3540), 80, 'Test 56');
test(minCostSetTime(9, 7, 4, 5999), 30, 'Test 57');
test(minCostSetTime(4, 3, 4, 1000), 28, 'Test 58');
test(minCostSetTime(1, 1, 9, 50), 20, 'Test 59');
test(minCostSetTime(6, 2, 1, 59), 6, 'Test 60');
test(minCostSetTime(9, 10, 2, 5959), 28, 'Test 61');
test(minCostSetTime(0, 2, 1, 120), 7, 'Test 62');
test(minCostSetTime(4, 2, 3, 60), 10, 'Test 63');
test(minCostSetTime(7, 4, 2, 60), 12, 'Test 64');
test(minCostSetTime(3, 2, 3, 4321), 20, 'Test 65');
test(minCostSetTime(3, 5, 3, 2345), 27, 'Test 66');
test(minCostSetTime(8, 2, 3, 100), 15, 'Test 67');
test(minCostSetTime(7, 9, 3, 3598), 48, 'Test 68');
test(minCostSetTime(8, 7, 4, 1000), 44, 'Test 69');
test(minCostSetTime(2, 15, 3, 123), 39, 'Test 70');
test(minCostSetTime(5, 10, 5, 3149), 40, 'Test 71');
test(minCostSetTime(1, 9, 2, 999), 26, 'Test 72');
test(minCostSetTime(8, 15, 8, 4321), 92, 'Test 73');
test(minCostSetTime(1, 1, 1, 359), 5, 'Test 74');
test(minCostSetTime(5, 1, 10, 3959), 43, 'Test 75');
test(minCostSetTime(9, 2, 4, 5999), 20, 'Test 76');
test(minCostSetTime(2, 6, 2, 5678), 32, 'Test 77');
test(minCostSetTime(8, 3, 4, 6039), 19, 'Test 78');
test(minCostSetTime(3, 5, 3, 5400), 22, 'Test 79');
test(minCostSetTime(6, 3, 4, 999), 25, 'Test 80');
test(minCostSetTime(3, 1, 5, 90), 12, 'Test 81');
test(minCostSetTime(0, 10, 1, 5999), 34, 'Test 82');
test(minCostSetTime(9, 1, 2, 123), 9, 'Test 83');
test(minCostSetTime(3, 4, 2, 300), 14, 'Test 84');
test(minCostSetTime(5, 7, 3, 1234), 33, 'Test 85');
test(minCostSetTime(8, 5, 3, 60), 16, 'Test 86');
test(minCostSetTime(8, 3, 2, 99), 7, 'Test 87');
test(minCostSetTime(3, 2, 3, 60), 10, 'Test 88');
test(minCostSetTime(9, 5, 10, 5999), 50, 'Test 89');
test(minCostSetTime(8, 3, 5, 59), 16, 'Test 90');
test(minCostSetTime(2, 4, 5, 720), 32, 'Test 91');
test(minCostSetTime(4, 4, 4, 5432), 28, 'Test 92');
test(minCostSetTime(7, 7, 8, 1), 15, 'Test 93');
test(minCostSetTime(0, 5, 10, 360), 40, 'Test 94');
test(minCostSetTime(0, 7, 1, 5999), 25, 'Test 95');
test(minCostSetTime(6, 4, 6, 200), 30, 'Test 96');
test(minCostSetTime(9, 10, 1, 5432), 34, 'Test 97');
test(minCostSetTime(2, 2, 3, 3600), 16, 'Test 98');
test(minCostSetTime(5, 10, 5, 3999), 50, 'Test 99');
test(minCostSetTime(2, 10, 5, 3660), 50, 'Test 100');
test(minCostSetTime(0, 3, 7, 90), 20, 'Test 101');
test(minCostSetTime(3, 1, 1, 599), 6, 'Test 102');
test(minCostSetTime(7, 6, 4, 4567), 34, 'Test 103');
test(minCostSetTime(3, 20, 5, 300), 55, 'Test 104');
test(minCostSetTime(4, 6, 2, 900), 26, 'Test 105');
test(minCostSetTime(1, 5, 1, 540), 13, 'Test 106');
test(minCostSetTime(6, 15, 5, 999), 65, 'Test 107');
test(minCostSetTime(5, 1, 2, 480), 8, 'Test 108');
test(minCostSetTime(0, 3, 2, 120), 12, 'Test 109');
test(minCostSetTime(2, 1, 1, 99), 3, 'Test 110');
test(minCostSetTime(1, 6, 1, 59), 14, 'Test 111');
test(minCostSetTime(7, 2, 6, 1000), 32, 'Test 112');
test(minCostSetTime(4, 4, 3, 1500), 24, 'Test 113');
test(minCostSetTime(6, 2, 9, 9999), Infinity, 'Test 114');
test(minCostSetTime(0, 1, 1, 1234), 7, 'Test 115');
test(minCostSetTime(2, 20, 10, 1020), 100, 'Test 116');
test(minCostSetTime(4, 8, 2, 100), 30, 'Test 117');
test(minCostSetTime(7, 5, 2, 1234), 23, 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

