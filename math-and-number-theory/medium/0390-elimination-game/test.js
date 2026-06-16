// Test: 390. Elimination Game
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { lastRemaining } = require("./solution");

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

console.log("\n390. Elimination Game\n");

test(lastRemaining(11), 8, 'Test 1');
test(lastRemaining(100), 54, 'Test 2');
test(lastRemaining(9), 6, 'Test 3');
test(lastRemaining(1000000), 481110, 'Test 4');
test(lastRemaining(2), 2, 'Test 5');
test(lastRemaining(20), 6, 'Test 6');
test(lastRemaining(1), 1, 'Test 7');
test(lastRemaining(1000000000), 534765398, 'Test 8');
test(lastRemaining(1000), 510, 'Test 9');
test(lastRemaining(10), 8, 'Test 10');
test(lastRemaining(25), 14, 'Test 11');
test(lastRemaining(244140), 130558, 'Test 12');
test(lastRemaining(15258), 8160, 'Test 13');
test(lastRemaining(3), 2, 'Test 14');
test(lastRemaining(3814), 2040, 'Test 15');
test(lastRemaining(119), 56, 'Test 16');
test(lastRemaining(29), 14, 'Test 17');
test(lastRemaining(999999999), 534765056, 'Test 18');
test(lastRemaining(12345), 5502, 'Test 19');
test(lastRemaining(4096), 1366, 'Test 20');
test(lastRemaining(976562), 522232, 'Test 21');
test(lastRemaining(1953125), 908662, 'Test 22');
test(lastRemaining(50), 24, 'Test 23');
test(lastRemaining(2047), 1024, 'Test 24');
test(lastRemaining(16383), 8192, 'Test 25');
test(lastRemaining(5), 2, 'Test 26');
test(lastRemaining(10001), 5974, 'Test 27');
test(lastRemaining(16384), 5462, 'Test 28');
test(lastRemaining(59), 32, 'Test 29');
test(lastRemaining(250000000), 133691350, 'Test 30');
test(lastRemaining(238), 128, 'Test 31');
test(lastRemaining(4), 2, 'Test 32');
test(lastRemaining(125000000), 58154326, 'Test 33');
test(lastRemaining(10000), 5974, 'Test 34');
test(lastRemaining(1001), 510, 'Test 35');
test(lastRemaining(15625000), 8355710, 'Test 36');
test(lastRemaining(7812500), 3634646, 'Test 37');
test(lastRemaining(62500000), 33422838, 'Test 38');
test(lastRemaining(122070), 56792, 'Test 39');
test(lastRemaining(50000000), 33551830, 'Test 40');
test(lastRemaining(128), 86, 'Test 41');
test(lastRemaining(1024), 342, 'Test 42');
test(lastRemaining(101), 54, 'Test 43');
test(lastRemaining(10000000), 6150102, 'Test 44');
test(lastRemaining(61035), 32640, 'Test 45');
test(lastRemaining(100000), 55286, 'Test 46');
test(lastRemaining(2048), 1366, 'Test 47');
test(lastRemaining(1048576), 349526, 'Test 48');
test(lastRemaining(999), 504, 'Test 49');
test(lastRemaining(953), 510, 'Test 50');
test(lastRemaining(3906250), 2088928, 'Test 51');
test(lastRemaining(8192), 5462, 'Test 52');
test(lastRemaining(30517), 14198, 'Test 53');
test(lastRemaining(65536), 21846, 'Test 54');
test(lastRemaining(5000), 2014, 'Test 55');
test(lastRemaining(7629), 3550, 'Test 56');
test(lastRemaining(256), 86, 'Test 57');
test(lastRemaining(1023), 512, 'Test 58');
test(lastRemaining(9999), 5984, 'Test 59');
test(lastRemaining(31250000), 14538582, 'Test 60');
test(lastRemaining(476), 222, 'Test 61');
test(lastRemaining(1000000001), 534765398, 'Test 62');
test(lastRemaining(127), 64, 'Test 63');
test(lastRemaining(987654321), 534740470, 'Test 64');
test(lastRemaining(5000000), 1924950, 'Test 65');
test(lastRemaining(500000), 259446, 'Test 66');
test(lastRemaining(488281), 227166, 'Test 67');
test(lastRemaining(98765), 54750, 'Test 68');
test(lastRemaining(500000000), 232617302, 'Test 69');
test(lastRemaining(31), 16, 'Test 70');
test(lastRemaining(1000001), 481110, 'Test 71');
test(lastRemaining(14), 8, 'Test 72');
test(lastRemaining(512), 342, 'Test 73');
test(lastRemaining(999999), 481152, 'Test 74');
test(lastRemaining(123456), 63318, 'Test 75');
test(lastRemaining(500), 246, 'Test 76');
test(lastRemaining(1907), 888, 'Test 77');
test(lastRemaining(7), 4, 'Test 78');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

