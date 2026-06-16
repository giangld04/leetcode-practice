// Test: 1344. Angle Between Hands Of A Clock
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { angleClock } = require("./solution");

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

console.log("\n1344. Angle Between Hands Of A Clock\n");

test(angleClock(3, 30), 75.0, 'Test 1');
test(angleClock(11, 59), 5.5, 'Test 2');
test(angleClock(3, 15), 7.5, 'Test 3');
test(angleClock(7, 30), 45.0, 'Test 4');
test(angleClock(11, 0), 30.0, 'Test 5');
test(angleClock(2, 10), 5.0, 'Test 6');
test(angleClock(12, 30), 165.0, 'Test 7');
test(angleClock(1, 0), 30.0, 'Test 8');
test(angleClock(1, 55), 87.5, 'Test 9');
test(angleClock(9, 45), 22.5, 'Test 10');
test(angleClock(1, 5), 2.5, 'Test 11');
test(angleClock(12, 0), 0.0, 'Test 12');
test(angleClock(6, 0), 180.0, 'Test 13');
test(angleClock(7, 10), 155.0, 'Test 14');
test(angleClock(7, 35), 17.5, 'Test 15');
test(angleClock(2, 5), 32.5, 'Test 16');
test(angleClock(6, 15), 97.5, 'Test 17');
test(angleClock(5, 0), 150.0, 'Test 18');
test(angleClock(2, 47), 161.5, 'Test 19');
test(angleClock(4, 0), 120.0, 'Test 20');
test(angleClock(10, 25), 162.5, 'Test 21');
test(angleClock(8, 23), 113.5, 'Test 22');
test(angleClock(11, 15), 112.5, 'Test 23');
test(angleClock(4, 50), 155.0, 'Test 24');
test(angleClock(8, 18), 141.0, 'Test 25');
test(angleClock(8, 20), 130.0, 'Test 26');
test(angleClock(10, 31), 129.5, 'Test 27');
test(angleClock(5, 10), 95.0, 'Test 28');
test(angleClock(12, 15), 82.5, 'Test 29');
test(angleClock(5, 14), 73.0, 'Test 30');
test(angleClock(5, 45), 97.5, 'Test 31');
test(angleClock(12, 59), 35.5, 'Test 32');
test(angleClock(12, 1), 5.5, 'Test 33');
test(angleClock(10, 10), 115.0, 'Test 34');
test(angleClock(7, 22), 89.0, 'Test 35');
test(angleClock(12, 47), 101.5, 'Test 36');
test(angleClock(2, 40), 160.0, 'Test 37');
test(angleClock(5, 55), 152.5, 'Test 38');
test(angleClock(7, 0), 150.0, 'Test 39');
test(angleClock(4, 48), 144.0, 'Test 40');
test(angleClock(6, 37), 23.5, 'Test 41');
test(angleClock(2, 24), 72.0, 'Test 42');
test(angleClock(8, 40), 20.0, 'Test 43');
test(angleClock(5, 15), 67.5, 'Test 44');
test(angleClock(4, 10), 65.0, 'Test 45');
test(angleClock(8, 50), 35.0, 'Test 46');
test(angleClock(4, 40), 100.0, 'Test 47');
test(angleClock(4, 25), 17.5, 'Test 48');
test(angleClock(1, 37), 173.5, 'Test 49');
test(angleClock(3, 47), 168.5, 'Test 50');
test(angleClock(10, 48), 36.0, 'Test 51');
test(angleClock(8, 32), 64.0, 'Test 52');
test(angleClock(1, 10), 25.0, 'Test 53');
test(angleClock(7, 5), 177.5, 'Test 54');
test(angleClock(6, 30), 15.0, 'Test 55');
test(angleClock(7, 59), 114.5, 'Test 56');
test(angleClock(8, 28), 86.0, 'Test 57');
test(angleClock(9, 27), 121.5, 'Test 58');
test(angleClock(4, 55), 177.5, 'Test 59');
test(angleClock(10, 35), 107.5, 'Test 60');
test(angleClock(7, 32), 34.0, 'Test 61');
test(angleClock(6, 33), 1.5, 'Test 62');
test(angleClock(10, 20), 170.0, 'Test 63');
test(angleClock(1, 50), 115.0, 'Test 64');
test(angleClock(5, 37), 53.5, 'Test 65');
test(angleClock(5, 47), 108.5, 'Test 66');
test(angleClock(11, 5), 57.5, 'Test 67');
test(angleClock(2, 30), 105.0, 'Test 68');
test(angleClock(2, 20), 50.0, 'Test 69');
test(angleClock(12, 45), 112.5, 'Test 70');
test(angleClock(8, 0), 120.0, 'Test 71');
test(angleClock(7, 47), 48.5, 'Test 72');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

