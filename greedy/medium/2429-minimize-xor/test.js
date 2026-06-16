// Test: 2429. Minimize Xor
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { minimizeXor } = require("./solution");

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

console.log("\n2429. Minimize Xor\n");

test(minimizeXor(1, 12), 3, 'Test 1');
test(minimizeXor(8, 3), 9, 'Test 2');
test(minimizeXor(29, 15), 29, 'Test 3');
test(minimizeXor(3, 5), 3, 'Test 4');
test(minimizeXor(7, 10), 6, 'Test 5');
test(minimizeXor(1000000000, 1), 536870912, 'Test 6');
test(minimizeXor(1, 2000000000), 8191, 'Test 7');
test(minimizeXor(987654321, 1000000000), 987654144, 'Test 8');
test(minimizeXor(8, 31), 31, 'Test 9');
test(minimizeXor(2147483647, 2147483647), 2147483647, 'Test 10');
test(minimizeXor(134217728, 671088640), 134217729, 'Test 11');
test(minimizeXor(1023, 511), 1022, 'Test 12');
test(minimizeXor(8388607, 16777215), 16777215, 'Test 13');
test(minimizeXor(123456789, 31), 122683392, 'Test 14');
test(minimizeXor(1, 1023), 1023, 'Test 15');
test(minimizeXor(32768, 65535), 65535, 'Test 16');
test(minimizeXor(1234567890, 9876543210), 1234567903, 'Test 17');
test(minimizeXor(2147483647, 1), 1073741824, 'Test 18');
test(minimizeXor(1023, 1), 512, 'Test 19');
test(minimizeXor(123456789, 987654321), 123456791, 'Test 20');
test(minimizeXor(2147483647, 1073741823), 2147483646, 'Test 21');
test(minimizeXor(1000000000, 100000000), 999999488, 'Test 22');
test(minimizeXor(123, 987654321), 131071, 'Test 23');
test(minimizeXor(500000000, 750000000), 499999744, 'Test 24');
test(minimizeXor(1073741823, 1), 536870912, 'Test 25');
test(minimizeXor(1073741824, 4294967295), 2147483647, 'Test 26');
test(minimizeXor(134217728, 32767), 134234111, 'Test 27');
test(minimizeXor(858993459, 12), 805306368, 'Test 28');
test(minimizeXor(4294967295, 2), 1073741824, 'Test 29');
test(minimizeXor(123456, 32), 65536, 'Test 30');
test(minimizeXor(512, 256), 512, 'Test 31');
test(minimizeXor(894567321, 987654321), 894567423, 'Test 32');
test(minimizeXor(1, 1073741823), 1073741823, 'Test 33');
test(minimizeXor(65535, 8), 32768, 'Test 34');
test(minimizeXor(536870911, 2147483647), 1073741823, 'Test 35');
test(minimizeXor(111111111, 222222222), 111111111, 'Test 36');
test(minimizeXor(1, 2147483647), 1073741823, 'Test 37');
test(minimizeXor(512, 255), 639, 'Test 38');
test(minimizeXor(834567, 987654), 834564, 'Test 39');
test(minimizeXor(999999999, 1), 536870912, 'Test 40');
test(minimizeXor(134217728, 1073741824), 134217728, 'Test 41');
test(minimizeXor(1073741823, 536870912), 536870912, 'Test 42');
test(minimizeXor(54321, 98765), 54323, 'Test 43');
test(minimizeXor(987654321, 16), 536870912, 'Test 44');
test(minimizeXor(1023, 10), 768, 'Test 45');
test(minimizeXor(987654, 24), 786432, 'Test 46');
test(minimizeXor(777777777, 333333333), 777777760, 'Test 47');
test(minimizeXor(1048575, 1048575), 1048575, 'Test 48');
test(minimizeXor(987654321, 123456789), 987654320, 'Test 49');
test(minimizeXor(131071, 65535), 131070, 'Test 50');
test(minimizeXor(999999999, 1000000000), 999999744, 'Test 51');
test(minimizeXor(1073741824, 536870912), 1073741824, 'Test 52');
test(minimizeXor(4294967295, 15), 2013265920, 'Test 53');
test(minimizeXor(1073741824, 2147483647), 2147483647, 'Test 54');
test(minimizeXor(16777215, 8388607), 16777214, 'Test 55');
test(minimizeXor(8192, 16384), 8192, 'Test 56');
test(minimizeXor(1023, 2047), 2047, 'Test 57');
test(minimizeXor(987654321, 135792468), 987496448, 'Test 58');
test(minimizeXor(134217728, 25), 134217731, 'Test 59');
test(minimizeXor(1000000000, 1000000000), 1000000000, 'Test 60');
test(minimizeXor(16, 3), 17, 'Test 61');
test(minimizeXor(2147483646, 2147483646), 2147483646, 'Test 62');
test(minimizeXor(2147483647, 1073741824), 1073741824, 'Test 63');
test(minimizeXor(1048575, 524288), 524288, 'Test 64');
test(minimizeXor(134217728, 67108864), 134217728, 'Test 65');
test(minimizeXor(888888888, 888888888), 888888888, 'Test 66');
test(minimizeXor(1000000007, 20), 805306368, 'Test 67');
test(minimizeXor(1000000000, 500000000), 1000000000, 'Test 68');
test(minimizeXor(4294967295, 2147483647), 2147483647, 'Test 69');
test(minimizeXor(8388607, 2147483647), 1073741823, 'Test 70');
test(minimizeXor(1023456789, 987654321), 1023456895, 'Test 71');
test(minimizeXor(67890, 13579), 67891, 'Test 72');
test(minimizeXor(999999999, 888888888), 999999992, 'Test 73');
test(minimizeXor(2147483647, 4294967294), 2147483647, 'Test 74');
test(minimizeXor(1, 1048575), 1048575, 'Test 75');
test(minimizeXor(123456789, 123456789), 123456789, 'Test 76');
test(minimizeXor(8388607, 4194304), 4194304, 'Test 77');
test(minimizeXor(8388607, 1048575), 8388600, 'Test 78');
test(minimizeXor(536870911, 268435456), 268435456, 'Test 79');
test(minimizeXor(135792468, 246813579), 135794687, 'Test 80');
test(minimizeXor(65535, 65535), 65535, 'Test 81');
test(minimizeXor(500000000, 800000000), 499999744, 'Test 82');
test(minimizeXor(4294967295, 1073741824), 1073741824, 'Test 83');
test(minimizeXor(1024, 1023), 1535, 'Test 84');
test(minimizeXor(1000000007, 1000000008), 1000000004, 'Test 85');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
