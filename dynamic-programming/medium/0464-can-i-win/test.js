// Test: 464. Can I Win
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { canIWin } = require("./solution");

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

console.log("\n464. Can I Win\n");

test(canIWin(15, 50), true, 'Test 1');
test(canIWin(10, 0), true, 'Test 2');
test(canIWin(10, 15), true, 'Test 3');
test(canIWin(8, 25), false, 'Test 4');
test(canIWin(10, 40), false, 'Test 5');
test(canIWin(10, 25), true, 'Test 6');
test(canIWin(20, 21), false, 'Test 7');
test(canIWin(5, 50), false, 'Test 8');
test(canIWin(10, 100), false, 'Test 9');
test(canIWin(20, 28), true, 'Test 10');
test(canIWin(15, 100), true, 'Test 11');
test(canIWin(12, 30), false, 'Test 12');
test(canIWin(7, 15), false, 'Test 13');
test(canIWin(6, 16), true, 'Test 14');
test(canIWin(10, 1), true, 'Test 15');
test(canIWin(3, 8), false, 'Test 16');
test(canIWin(20, 300), false, 'Test 17');
test(canIWin(10, 11), false, 'Test 18');
test(canIWin(16, 80), true, 'Test 19');
test(canIWin(18, 150), false, 'Test 20');
test(canIWin(15, 70), false, 'Test 21');
test(canIWin(8, 30), true, 'Test 22');
test(canIWin(20, 199), false, 'Test 23');
test(canIWin(9, 36), true, 'Test 24');
test(canIWin(16, 85), false, 'Test 25');
test(canIWin(20, 200), false, 'Test 26');
test(canIWin(18, 120), false, 'Test 27');
test(canIWin(11, 33), true, 'Test 28');
test(canIWin(13, 45), true, 'Test 29');
test(canIWin(10, 99), false, 'Test 30');
test(canIWin(16, 90), false, 'Test 31');
test(canIWin(14, 49), true, 'Test 32');
test(canIWin(13, 30), true, 'Test 33');
test(canIWin(20, 180), false, 'Test 34');
test(canIWin(14, 60), false, 'Test 35');
test(canIWin(13, 80), true, 'Test 36');
test(canIWin(14, 80), true, 'Test 37');
test(canIWin(16, 60), true, 'Test 38');
test(canIWin(12, 80), false, 'Test 39');
test(canIWin(10, 55), false, 'Test 40');
test(canIWin(19, 135), true, 'Test 41');
test(canIWin(14, 99), false, 'Test 42');
test(canIWin(19, 110), true, 'Test 43');
test(canIWin(12, 75), false, 'Test 44');
test(canIWin(5, 15), true, 'Test 45');
test(canIWin(14, 95), false, 'Test 46');
test(canIWin(7, 28), true, 'Test 47');
test(canIWin(14, 50), true, 'Test 48');
test(canIWin(20, 250), false, 'Test 49');
test(canIWin(17, 140), true, 'Test 50');
test(canIWin(19, 180), true, 'Test 51');
test(canIWin(16, 110), false, 'Test 52');
test(canIWin(13, 60), true, 'Test 53');
test(canIWin(9, 45), true, 'Test 54');
test(canIWin(12, 35), true, 'Test 55');
test(canIWin(17, 85), true, 'Test 56');
test(canIWin(20, 150), false, 'Test 57');
test(canIWin(15, 80), true, 'Test 58');
test(canIWin(8, 28), true, 'Test 59');
test(canIWin(7, 25), true, 'Test 60');
test(canIWin(18, 130), true, 'Test 61');
test(canIWin(11, 55), true, 'Test 62');
test(canIWin(17, 90), true, 'Test 63');
test(canIWin(17, 100), true, 'Test 64');
test(canIWin(16, 120), true, 'Test 65');
test(canIWin(20, 130), false, 'Test 66');
test(canIWin(19, 120), true, 'Test 67');
test(canIWin(16, 130), false, 'Test 68');
test(canIWin(7, 20), true, 'Test 69');
test(canIWin(18, 180), false, 'Test 70');
test(canIWin(18, 100), true, 'Test 71');
test(canIWin(12, 60), false, 'Test 72');
test(canIWin(15, 120), true, 'Test 73');
test(canIWin(14, 70), true, 'Test 74');
test(canIWin(10, 50), false, 'Test 75');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

