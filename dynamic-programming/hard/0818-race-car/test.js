// Test: 818. Race Car
// 49 test cases from LeetCodeDataset
// Run: node test.js

const { racecar } = require("./solution");

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

console.log("\n818. Race Car\n");

test(racecar(3), 2, 'Test 1');
test(racecar(6), 5, 'Test 2');
test(racecar(4), 5, 'Test 3');
test(racecar(10), 7, 'Test 4');
test(racecar(1), 1, 'Test 5');
test(racecar(100), 19, 'Test 6');
test(racecar(15), 4, 'Test 7');
test(racecar(1000), 23, 'Test 8');
test(racecar(999), 20, 'Test 9');
test(racecar(16383), 14, 'Test 10');
test(racecar(5000), 41, 'Test 11');
test(racecar(8), 6, 'Test 12');
test(racecar(6553), 53, 'Test 13');
test(racecar(65535), 16, 'Test 14');
test(racecar(25), 11, 'Test 15');
test(racecar(5120), 29, 'Test 16');
test(racecar(200), 22, 'Test 17');
test(racecar(32767), 15, 'Test 18');
test(racecar(29), 10, 'Test 19');
test(racecar(2047), 11, 'Test 20');
test(racecar(31), 5, 'Test 21');
test(racecar(3000), 33, 'Test 22');
test(racecar(2000), 26, 'Test 23');
test(racecar(123), 13, 'Test 24');
test(racecar(8192), 16, 'Test 25');
test(racecar(40), 15, 'Test 26');
test(racecar(8191), 13, 'Test 27');
test(racecar(17), 9, 'Test 28');
test(racecar(20), 12, 'Test 29');
test(racecar(10000), 45, 'Test 30');
test(racecar(500), 20, 'Test 31');
test(racecar(750), 25, 'Test 32');
test(racecar(9999), 43, 'Test 33');
test(racecar(250), 16, 'Test 34');
test(racecar(63), 6, 'Test 35');
test(racecar(65536), 19, 'Test 36');
test(racecar(7), 3, 'Test 37');
test(racecar(32768), 18, 'Test 38');
test(racecar(1023), 10, 'Test 39');
test(racecar(42), 15, 'Test 40');
test(racecar(1024), 13, 'Test 41');
test(racecar(50), 16, 'Test 42');
test(racecar(30), 7, 'Test 43');
test(racecar(4096), 15, 'Test 44');
test(racecar(4095), 12, 'Test 45');
test(racecar(16), 7, 'Test 46');
test(racecar(99), 16, 'Test 47');
test(racecar(2048), 14, 'Test 48');
test(racecar(5432), 45, 'Test 49');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

