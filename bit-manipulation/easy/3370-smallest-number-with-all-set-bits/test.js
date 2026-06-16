// Test: 3370. Smallest Number With All Set Bits
// 56 test cases from LeetCodeDataset
// Run: node test.js

const { smallestNumber } = require("./solution");

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

console.log("\n3370. Smallest Number With All Set Bits\n");

test(smallestNumber(3), 3, 'Test 1');
test(smallestNumber(12), 15, 'Test 2');
test(smallestNumber(100), 127, 'Test 3');
test(smallestNumber(1000), 1023, 'Test 4');
test(smallestNumber(5), 7, 'Test 5');
test(smallestNumber(64), 127, 'Test 6');
test(smallestNumber(16), 31, 'Test 7');
test(smallestNumber(2), 3, 'Test 8');
test(smallestNumber(1024), 2047, 'Test 9');
test(smallestNumber(8), 15, 'Test 10');
test(smallestNumber(255), 255, 'Test 11');
test(smallestNumber(999), 1023, 'Test 12');
test(smallestNumber(256), 511, 'Test 13');
test(smallestNumber(768), 1023, 'Test 14');
test(smallestNumber(14), 15, 'Test 15');
test(smallestNumber(512), 1023, 'Test 16');
test(smallestNumber(9), 15, 'Test 17');
test(smallestNumber(31), 31, 'Test 18');
test(smallestNumber(6), 7, 'Test 19');
test(smallestNumber(1), 1, 'Test 20');
test(smallestNumber(500), 511, 'Test 21');
test(smallestNumber(7), 7, 'Test 22');
test(smallestNumber(10), 15, 'Test 23');
test(smallestNumber(63), 63, 'Test 24');
test(smallestNumber(576), 1023, 'Test 25');
test(smallestNumber(639), 1023, 'Test 26');
test(smallestNumber(666), 1023, 'Test 27');
test(smallestNumber(678), 1023, 'Test 28');
test(smallestNumber(511), 511, 'Test 29');
test(smallestNumber(991), 1023, 'Test 30');
test(smallestNumber(890), 1023, 'Test 31');
test(smallestNumber(769), 1023, 'Test 32');
test(smallestNumber(2047), 2047, 'Test 33');
test(smallestNumber(448), 511, 'Test 34');
test(smallestNumber(123), 127, 'Test 35');
test(smallestNumber(384), 511, 'Test 36');
test(smallestNumber(345), 511, 'Test 37');
test(smallestNumber(257), 511, 'Test 38');
test(smallestNumber(1001), 1023, 'Test 39');
test(smallestNumber(640), 1023, 'Test 40');
test(smallestNumber(733), 1023, 'Test 41');
test(smallestNumber(128), 255, 'Test 42');
test(smallestNumber(101), 127, 'Test 43');
test(smallestNumber(777), 1023, 'Test 44');
test(smallestNumber(789), 1023, 'Test 45');
test(smallestNumber(555), 1023, 'Test 46');
test(smallestNumber(383), 511, 'Test 47');
test(smallestNumber(997), 1023, 'Test 48');
test(smallestNumber(1023), 1023, 'Test 49');
test(smallestNumber(127), 127, 'Test 50');
test(smallestNumber(800), 1023, 'Test 51');
test(smallestNumber(456), 511, 'Test 52');
test(smallestNumber(960), 1023, 'Test 53');
test(smallestNumber(767), 1023, 'Test 54');
test(smallestNumber(998), 1023, 'Test 55');
test(smallestNumber(719), 1023, 'Test 56');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

