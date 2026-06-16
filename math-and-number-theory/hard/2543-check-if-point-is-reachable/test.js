// Test: 2543. Check If Point Is Reachable
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { isReachable } = require("./solution");

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

console.log("\n2543. Check If Point Is Reachable\n");

test(isReachable(7, 3), true, 'Test 1');
test(isReachable(6, 9), false, 'Test 2');
test(isReachable(16, 8), true, 'Test 3');
test(isReachable(3, 5), true, 'Test 4');
test(isReachable(10, 1), true, 'Test 5');
test(isReachable(1, 1), true, 'Test 6');
test(isReachable(9, 6), false, 'Test 7');
test(isReachable(2, 2), true, 'Test 8');
test(isReachable(8, 16), true, 'Test 9');
test(isReachable(4, 7), true, 'Test 10');
test(isReachable(31, 47), true, 'Test 11');
test(isReachable(2, 1048576), true, 'Test 12');
test(isReachable(17, 34), false, 'Test 13');
test(isReachable(100, 1), true, 'Test 14');
test(isReachable(19, 38), false, 'Test 15');
test(isReachable(13, 19), true, 'Test 16');
test(isReachable(100, 200), false, 'Test 17');
test(isReachable(63, 27), false, 'Test 18');
test(isReachable(13, 21), true, 'Test 19');
test(isReachable(5, 13), true, 'Test 20');
test(isReachable(16, 32), true, 'Test 21');
test(isReachable(10, 10), false, 'Test 22');
test(isReachable(987654321, 987654321), false, 'Test 23');
test(isReachable(27, 18), false, 'Test 24');
test(isReachable(77, 154), false, 'Test 25');
test(isReachable(49, 147), false, 'Test 26');
test(isReachable(31, 62), false, 'Test 27');
test(isReachable(255, 1023), false, 'Test 28');
test(isReachable(512, 384), true, 'Test 29');
test(isReachable(16384, 8192), true, 'Test 30');
test(isReachable(88888, 55555), false, 'Test 31');
test(isReachable(512, 1025), true, 'Test 32');
test(isReachable(128, 192), true, 'Test 33');
test(isReachable(18, 33), false, 'Test 34');
test(isReachable(77, 44), false, 'Test 35');
test(isReachable(27, 81), false, 'Test 36');
test(isReachable(999999999, 333333333), false, 'Test 37');
test(isReachable(17, 1024), true, 'Test 38');
test(isReachable(5, 25), false, 'Test 39');
test(isReachable(65536, 129), true, 'Test 40');
test(isReachable(3125, 243), true, 'Test 41');
test(isReachable(1234567, 7654321), true, 'Test 42');
test(isReachable(32, 48), true, 'Test 43');
test(isReachable(999, 333), false, 'Test 44');
test(isReachable(987, 654), false, 'Test 45');
test(isReachable(1023, 1), true, 'Test 46');
test(isReachable(123456, 654321), false, 'Test 47');
test(isReachable(123, 456), false, 'Test 48');
test(isReachable(31, 31), false, 'Test 49');
test(isReachable(63, 21), false, 'Test 50');
test(isReachable(8192, 16384), true, 'Test 51');
test(isReachable(511, 256), true, 'Test 52');
test(isReachable(54, 36), false, 'Test 53');
test(isReachable(19, 23), true, 'Test 54');
test(isReachable(99999, 1), true, 'Test 55');
test(isReachable(1000000000, 1), true, 'Test 56');
test(isReachable(1000000000, 500000000), false, 'Test 57');
test(isReachable(1024, 512), true, 'Test 58');
test(isReachable(81, 27), false, 'Test 59');
test(isReachable(15, 10), false, 'Test 60');
test(isReachable(256, 513), true, 'Test 61');
test(isReachable(256, 512), true, 'Test 62');
test(isReachable(81, 243), false, 'Test 63');
test(isReachable(1073741824, 536870912), true, 'Test 64');
test(isReachable(32, 128), true, 'Test 65');
test(isReachable(97, 83), true, 'Test 66');
test(isReachable(256, 256), true, 'Test 67');
test(isReachable(77, 49), false, 'Test 68');
test(isReachable(256, 1024), true, 'Test 69');
test(isReachable(1001, 1003), true, 'Test 70');
test(isReachable(511, 1024), true, 'Test 71');
test(isReachable(128, 256), true, 'Test 72');
test(isReachable(65536, 32768), true, 'Test 73');
test(isReachable(777, 111), false, 'Test 74');
test(isReachable(1, 1000000000), true, 'Test 75');
test(isReachable(33333, 22222), false, 'Test 76');
test(isReachable(999999937, 999999937), false, 'Test 77');
test(isReachable(33, 55), false, 'Test 78');
test(isReachable(3, 12), false, 'Test 79');
test(isReachable(1024, 2048), true, 'Test 80');
test(isReachable(255, 127), true, 'Test 81');
test(isReachable(100, 25), false, 'Test 82');
test(isReachable(77, 33), false, 'Test 83');
test(isReachable(101, 101), false, 'Test 84');
test(isReachable(13, 39), false, 'Test 85');
test(isReachable(123456789, 987654321), false, 'Test 86');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

