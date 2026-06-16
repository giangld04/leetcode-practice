// Test: 693. Binary Number With Alternating Bits
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { hasAlternatingBits } = require("./solution");

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

console.log("\n693. Binary Number With Alternating Bits\n");

test(hasAlternatingBits(3), false, 'Test 1');
test(hasAlternatingBits(11), false, 'Test 2');
test(hasAlternatingBits(15), false, 'Test 3');
test(hasAlternatingBits(2), true, 'Test 4');
test(hasAlternatingBits(1), true, 'Test 5');
test(hasAlternatingBits(7), false, 'Test 6');
test(hasAlternatingBits(10), true, 'Test 7');
test(hasAlternatingBits(5), true, 'Test 8');
test(hasAlternatingBits(63), false, 'Test 9');
test(hasAlternatingBits(33554431), false, 'Test 10');
test(hasAlternatingBits(131071), false, 'Test 11');
test(hasAlternatingBits(2147483646), false, 'Test 12');
test(hasAlternatingBits(357913941), true, 'Test 13');
test(hasAlternatingBits(21), true, 'Test 14');
test(hasAlternatingBits(170), true, 'Test 15');
test(hasAlternatingBits(178956970), true, 'Test 16');
test(hasAlternatingBits(11184810), true, 'Test 17');
test(hasAlternatingBits(2863311531), false, 'Test 18');
test(hasAlternatingBits(341), true, 'Test 19');
test(hasAlternatingBits(4294967295), false, 'Test 20');
test(hasAlternatingBits(2147483647), false, 'Test 21');
test(hasAlternatingBits(32767), false, 'Test 22');
test(hasAlternatingBits(67108863), false, 'Test 23');
test(hasAlternatingBits(100000001), false, 'Test 24');
test(hasAlternatingBits(21845), true, 'Test 25');
test(hasAlternatingBits(1010101010101010101010101010101), false, 'Test 26');
test(hasAlternatingBits(2047), false, 'Test 27');
test(hasAlternatingBits(262143), false, 'Test 28');
test(hasAlternatingBits(16383), false, 'Test 29');
test(hasAlternatingBits(524287), false, 'Test 30');
test(hasAlternatingBits(268435455), false, 'Test 31');
test(hasAlternatingBits(4194303), false, 'Test 32');
test(hasAlternatingBits(2147483649), false, 'Test 33');
test(hasAlternatingBits(1431655765), true, 'Test 34');
test(hasAlternatingBits(4), false, 'Test 35');
test(hasAlternatingBits(134217727), false, 'Test 36');
test(hasAlternatingBits(715827882), true, 'Test 37');
test(hasAlternatingBits(8388607), false, 'Test 38');
test(hasAlternatingBits(134217728), false, 'Test 39');
test(hasAlternatingBits(2097151), false, 'Test 40');
test(hasAlternatingBits(1365), true, 'Test 41');
test(hasAlternatingBits(33), false, 'Test 42');
test(hasAlternatingBits(1073741823), false, 'Test 43');
test(hasAlternatingBits(682), true, 'Test 44');
test(hasAlternatingBits(101010101), false, 'Test 45');
test(hasAlternatingBits(42), true, 'Test 46');
test(hasAlternatingBits(16777215), false, 'Test 47');
test(hasAlternatingBits(858993459), false, 'Test 48');
test(hasAlternatingBits(4095), false, 'Test 49');
test(hasAlternatingBits(8), false, 'Test 50');
test(hasAlternatingBits(255), false, 'Test 51');
test(hasAlternatingBits(22369621), true, 'Test 52');
test(hasAlternatingBits(8191), false, 'Test 53');
test(hasAlternatingBits(4294967294), false, 'Test 54');
test(hasAlternatingBits(18), false, 'Test 55');
test(hasAlternatingBits(44739242), true, 'Test 56');
test(hasAlternatingBits(1023), false, 'Test 57');
test(hasAlternatingBits(555555555), false, 'Test 58');
test(hasAlternatingBits(20), false, 'Test 59');
test(hasAlternatingBits(218), false, 'Test 60');
test(hasAlternatingBits(65535), false, 'Test 61');
test(hasAlternatingBits(1000000001), false, 'Test 62');
test(hasAlternatingBits(1010101010), false, 'Test 63');
test(hasAlternatingBits(286331153), false, 'Test 64');
test(hasAlternatingBits(85), true, 'Test 65');
test(hasAlternatingBits(517), false, 'Test 66');
test(hasAlternatingBits(1048575), false, 'Test 67');
test(hasAlternatingBits(89478485), true, 'Test 68');
test(hasAlternatingBits(536870911), false, 'Test 69');
test(hasAlternatingBits(31), false, 'Test 70');
test(hasAlternatingBits(6), false, 'Test 71');
test(hasAlternatingBits(3427813328), false, 'Test 72');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

