// Test: 1342. Number Of Steps To Reduce A Number To Zero
// 59 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfSteps } = require("./solution");

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

console.log("\n1342. Number Of Steps To Reduce A Number To Zero\n");

test(numberOfSteps(14), 6, 'Test 1');
test(numberOfSteps(1000000), 26, 'Test 2');
test(numberOfSteps(8), 4, 'Test 3');
test(numberOfSteps(65535), 31, 'Test 4');
test(numberOfSteps(0), 0, 'Test 5');
test(numberOfSteps(2), 2, 'Test 6');
test(numberOfSteps(1), 1, 'Test 7');
test(numberOfSteps(123), 12, 'Test 8');
test(numberOfSteps(8191), 25, 'Test 9');
test(numberOfSteps(750000), 29, 'Test 10');
test(numberOfSteps(500000), 25, 'Test 11');
test(numberOfSteps(1234567), 31, 'Test 12');
test(numberOfSteps(131072), 18, 'Test 13');
test(numberOfSteps(1023), 19, 'Test 14');
test(numberOfSteps(777777), 31, 'Test 15');
test(numberOfSteps(127), 13, 'Test 16');
test(numberOfSteps(888888), 27, 'Test 17');
test(numberOfSteps(16384), 15, 'Test 18');
test(numberOfSteps(31), 9, 'Test 19');
test(numberOfSteps(100001), 23, 'Test 20');
test(numberOfSteps(1048575), 39, 'Test 21');
test(numberOfSteps(8192), 14, 'Test 22');
test(numberOfSteps(123456789), 42, 'Test 23');
test(numberOfSteps(15), 7, 'Test 24');
test(numberOfSteps(135792468), 36, 'Test 25');
test(numberOfSteps(32768), 16, 'Test 26');
test(numberOfSteps(63), 11, 'Test 27');
test(numberOfSteps(3125), 17, 'Test 28');
test(numberOfSteps(5318008), 32, 'Test 29');
test(numberOfSteps(1000002), 27, 'Test 30');
test(numberOfSteps(2097151), 41, 'Test 31');
test(numberOfSteps(131071), 33, 'Test 32');
test(numberOfSteps(16383), 27, 'Test 33');
test(numberOfSteps(665772), 27, 'Test 34');
test(numberOfSteps(987654321), 46, 'Test 35');
test(numberOfSteps(4096), 13, 'Test 36');
test(numberOfSteps(511), 17, 'Test 37');
test(numberOfSteps(524288), 20, 'Test 38');
test(numberOfSteps(7), 5, 'Test 39');
test(numberOfSteps(543210), 28, 'Test 40');
test(numberOfSteps(1048576), 21, 'Test 41');
test(numberOfSteps(567890), 27, 'Test 42');
test(numberOfSteps(255), 15, 'Test 43');
test(numberOfSteps(8675309), 37, 'Test 44');
test(numberOfSteps(1024), 11, 'Test 45');
test(numberOfSteps(246813579), 42, 'Test 46');
test(numberOfSteps(100000), 22, 'Test 47');
test(numberOfSteps(54321), 22, 'Test 48');
test(numberOfSteps(262143), 35, 'Test 49');
test(numberOfSteps(123456), 22, 'Test 50');
test(numberOfSteps(999999), 31, 'Test 51');
test(numberOfSteps(32767), 29, 'Test 52');
test(numberOfSteps(65536), 17, 'Test 53');
test(numberOfSteps(2048), 12, 'Test 54');
test(numberOfSteps(1000001), 27, 'Test 55');
test(numberOfSteps(536870911), 57, 'Test 56');
test(numberOfSteps(2147483647), 61, 'Test 57');
test(numberOfSteps(3), 3, 'Test 58');
test(numberOfSteps(987654), 27, 'Test 59');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

