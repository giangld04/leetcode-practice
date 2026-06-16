// Test: 3091. Apply Operations To Make Sum Of Array Greater Than Or Equal To K
// 58 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3091. Apply Operations To Make Sum Of Array Greater Than Or Equal To K\n");

test(minOperations(100), 18, 'Test 1');
test(minOperations(20), 7, 'Test 2');
test(minOperations(1), 0, 'Test 3');
test(minOperations(15), 6, 'Test 4');
test(minOperations(11), 5, 'Test 5');
test(minOperations(3), 2, 'Test 6');
test(minOperations(100000), 631, 'Test 7');
test(minOperations(5), 3, 'Test 8');
test(minOperations(10), 5, 'Test 9');
test(minOperations(29), 9, 'Test 10');
test(minOperations(30), 9, 'Test 11');
test(minOperations(101), 19, 'Test 12');
test(minOperations(2048), 89, 'Test 13');
test(minOperations(1024), 62, 'Test 14');
test(minOperations(9999), 198, 'Test 15');
test(minOperations(999), 62, 'Test 16');
test(minOperations(500), 43, 'Test 17');
test(minOperations(49), 12, 'Test 18');
test(minOperations(8192), 180, 'Test 19');
test(minOperations(50), 13, 'Test 20');
test(minOperations(127), 21, 'Test 21');
test(minOperations(64), 14, 'Test 22');
test(minOperations(17), 7, 'Test 23');
test(minOperations(6), 3, 'Test 24');
test(minOperations(63), 14, 'Test 25');
test(minOperations(7), 4, 'Test 26');
test(minOperations(99), 18, 'Test 27');
test(minOperations(31), 10, 'Test 28');
test(minOperations(13), 6, 'Test 29');
test(minOperations(65536), 510, 'Test 30');
test(minOperations(16384), 254, 'Test 31');
test(minOperations(2), 1, 'Test 32');
test(minOperations(12345), 221, 'Test 33');
test(minOperations(42), 11, 'Test 34');
test(minOperations(67890), 520, 'Test 35');
test(minOperations(200), 27, 'Test 36');
test(minOperations(99999), 631, 'Test 37');
test(minOperations(250), 30, 'Test 38');
test(minOperations(87500), 590, 'Test 39');
test(minOperations(37), 11, 'Test 40');
test(minOperations(255), 30, 'Test 41');
test(minOperations(256), 30, 'Test 42');
test(minOperations(512), 44, 'Test 43');
test(minOperations(85), 17, 'Test 44');
test(minOperations(32768), 361, 'Test 45');
test(minOperations(62500), 498, 'Test 46');
test(minOperations(1023), 62, 'Test 47');
test(minOperations(75000), 546, 'Test 48');
test(minOperations(23), 8, 'Test 49');
test(minOperations(4096), 126, 'Test 50');
test(minOperations(10000), 198, 'Test 51');
test(minOperations(511), 44, 'Test 52');
test(minOperations(28), 9, 'Test 53');
test(minOperations(1000), 62, 'Test 54');
test(minOperations(19), 7, 'Test 55');
test(minOperations(32), 10, 'Test 56');
test(minOperations(128), 21, 'Test 57');
test(minOperations(50000), 446, 'Test 58');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

