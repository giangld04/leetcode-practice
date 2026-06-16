// Test: 264. Ugly Number Ii
// 38 test cases from LeetCodeDataset
// Run: node test.js

const { nthUglyNumber } = require("./solution");

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

console.log("\n264. Ugly Number Ii\n");

test(nthUglyNumber(15), 24, 'Test 1');
test(nthUglyNumber(200), 16200, 'Test 2');
test(nthUglyNumber(1690), 2123366400, 'Test 3');
test(nthUglyNumber(1), 1, 'Test 4');
test(nthUglyNumber(50), 243, 'Test 5');
test(nthUglyNumber(10), 12, 'Test 6');
test(nthUglyNumber(5), 5, 'Test 7');
test(nthUglyNumber(1400), 516560652, 'Test 8');
test(nthUglyNumber(3), 3, 'Test 9');
test(nthUglyNumber(1575), 1230187500, 'Test 10');
test(nthUglyNumber(1600), 1399680000, 'Test 11');
test(nthUglyNumber(1685), 2066242608, 'Test 12');
test(nthUglyNumber(900), 26244000, 'Test 13');
test(nthUglyNumber(1688), 2099520000, 'Test 14');
test(nthUglyNumber(100), 1536, 'Test 15');
test(nthUglyNumber(1000), 51200000, 'Test 16');
test(nthUglyNumber(300), 82944, 'Test 17');
test(nthUglyNumber(550), 1555200, 'Test 18');
test(nthUglyNumber(1200), 174960000, 'Test 19');
test(nthUglyNumber(600), 2460375, 'Test 20');
test(nthUglyNumber(4), 4, 'Test 21');
test(nthUglyNumber(1675), 1990656000, 'Test 22');
test(nthUglyNumber(1650), 1769472000, 'Test 23');
test(nthUglyNumber(1550), 1093500000, 'Test 24');
test(nthUglyNumber(1300), 306110016, 'Test 25');
test(nthUglyNumber(2), 2, 'Test 26');
test(nthUglyNumber(1024), 60466176, 'Test 27');
test(nthUglyNumber(8), 9, 'Test 28');
test(nthUglyNumber(1689), 2109375000, 'Test 29');
test(nthUglyNumber(800), 12754584, 'Test 30');
test(nthUglyNumber(400), 311040, 'Test 31');
test(nthUglyNumber(9), 10, 'Test 32');
test(nthUglyNumber(750), 8748000, 'Test 33');
test(nthUglyNumber(6), 6, 'Test 34');
test(nthUglyNumber(500), 937500, 'Test 35');
test(nthUglyNumber(7), 8, 'Test 36');
test(nthUglyNumber(1680), 2025000000, 'Test 37');
test(nthUglyNumber(1500), 859963392, 'Test 38');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

