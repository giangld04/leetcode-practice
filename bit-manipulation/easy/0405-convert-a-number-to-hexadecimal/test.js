// Test: 405. Convert A Number To Hexadecimal
// 60 test cases from LeetCodeDataset
// Run: node test.js

const { toHex } = require("./solution");

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

console.log("\n405. Convert A Number To Hexadecimal\n");

test(toHex(31), 1f, 'Test 1');
test(toHex(10), a, 'Test 2');
test(toHex(-4294967296), , 'Test 3');
test(toHex(16777215), ffffff, 'Test 4');
test(toHex(-16777215), ff000001, 'Test 5');
test(toHex(-1), ffffffff, 'Test 6');
test(toHex(4294967295), ffffffff, 'Test 7');
test(toHex(0), 0, 'Test 8');
test(toHex(-2147483648), 80000000, 'Test 9');
test(toHex(-255), ffffff01, 'Test 10');
test(toHex(255), ff, 'Test 11');
test(toHex(1), 1, 'Test 12');
test(toHex(-10), fffffff6, 'Test 13');
test(toHex(-4095), fffff001, 'Test 14');
test(toHex(4095), fff, 'Test 15');
test(toHex(2147483647), 7fffffff, 'Test 16');
test(toHex(16), 10, 'Test 17');
test(toHex(26), 1a, 'Test 18');
test(toHex(2097152), 200000, 'Test 19');
test(toHex(-4096), fffff000, 'Test 20');
test(toHex(-1048575), fff00001, 'Test 21');
test(toHex(-16777216), ff000000, 'Test 22');
test(toHex(1099511627776), , 'Test 23');
test(toHex(-2147483647), 80000001, 'Test 24');
test(toHex(67553994410557436), fffffffc, 'Test 25');
test(toHex(1048575), fffff, 'Test 26');
test(toHex(-1024), fffffc00, 'Test 27');
test(toHex(-134217728), f8000000, 'Test 28');
test(toHex(-8589934591), 1, 'Test 29');
test(toHex(-31), ffffffe1, 'Test 30');
test(toHex(123456789), 75bcd15, 'Test 31');
test(toHex(65535), ffff, 'Test 32');
test(toHex(-15), fffffff1, 'Test 33');
test(toHex(32768), 8000, 'Test 34');
test(toHex(-131072), fffe0000, 'Test 35');
test(toHex(-89478485), faaaaaab, 'Test 36');
test(toHex(-65535), ffff0001, 'Test 37');
test(toHex(2147483646), 7ffffffe, 'Test 38');
test(toHex(134217728), 8000000, 'Test 39');
test(toHex(-987654321), c521974f, 'Test 40');
test(toHex(268435456), 10000000, 'Test 41');
test(toHex(8589934591), ffffffff, 'Test 42');
test(toHex(4096), 1000, 'Test 43');
test(toHex(-268435456), f0000000, 'Test 44');
test(toHex(1048576), 100000, 'Test 45');
test(toHex(-1073741825), bfffffff, 'Test 46');
test(toHex(-123456789), f8a432eb, 'Test 47');
test(toHex(1024), 400, 'Test 48');
test(toHex(-4294967294), 2, 'Test 49');
test(toHex(-256), ffffff00, 'Test 50');
test(toHex(16777216), 1000000, 'Test 51');
test(toHex(-1000000), fff0bdc0, 'Test 52');
test(toHex(-1048576), fff00000, 'Test 53');
test(toHex(-16), fffffff0, 'Test 54');
test(toHex(1000000), f4240, 'Test 55');
test(toHex(89478485), 5555555, 'Test 56');
test(toHex(65536), 10000, 'Test 57');
test(toHex(4294967294), fffffffe, 'Test 58');
test(toHex(-2), fffffffe, 'Test 59');
test(toHex(15), f, 'Test 60');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

