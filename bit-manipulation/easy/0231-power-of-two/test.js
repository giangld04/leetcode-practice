// Test: 231. Power Of Two
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { isPowerOfTwo } = require("./solution");

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

console.log("\n231. Power Of Two\n");

test(isPowerOfTwo(3), false, 'Test 1');
test(isPowerOfTwo(2097152), true, 'Test 2');
test(isPowerOfTwo(-16), false, 'Test 3');
test(isPowerOfTwo(67108864), true, 'Test 4');
test(isPowerOfTwo(4096), true, 'Test 5');
test(isPowerOfTwo(2147483647), false, 'Test 6');
test(isPowerOfTwo(536870912), true, 'Test 7');
test(isPowerOfTwo(524288), true, 'Test 8');
test(isPowerOfTwo(268435456), true, 'Test 9');
test(isPowerOfTwo(16384), true, 'Test 10');
test(isPowerOfTwo(16777216), true, 'Test 11');
test(isPowerOfTwo(-1), false, 'Test 12');
test(isPowerOfTwo(4), true, 'Test 13');
test(isPowerOfTwo(64), true, 'Test 14');
test(isPowerOfTwo(16), true, 'Test 15');
test(isPowerOfTwo(134217728), true, 'Test 16');
test(isPowerOfTwo(4194304), true, 'Test 17');
test(isPowerOfTwo(2), true, 'Test 18');
test(isPowerOfTwo(33554432), true, 'Test 19');
test(isPowerOfTwo(1024), true, 'Test 20');
test(isPowerOfTwo(128), true, 'Test 21');
test(isPowerOfTwo(0), false, 'Test 22');
test(isPowerOfTwo(1073741824), true, 'Test 23');
test(isPowerOfTwo(8), true, 'Test 24');
test(isPowerOfTwo(1048576), true, 'Test 25');
test(isPowerOfTwo(8192), true, 'Test 26');
test(isPowerOfTwo(2048), true, 'Test 27');
test(isPowerOfTwo(2147483648), true, 'Test 28');
test(isPowerOfTwo(65536), true, 'Test 29');
test(isPowerOfTwo(256), true, 'Test 30');
test(isPowerOfTwo(32), true, 'Test 31');
test(isPowerOfTwo(262144), true, 'Test 32');
test(isPowerOfTwo(131072), true, 'Test 33');
test(isPowerOfTwo(32768), true, 'Test 34');
test(isPowerOfTwo(512), true, 'Test 35');
test(isPowerOfTwo(1), true, 'Test 36');
test(isPowerOfTwo(8388608), true, 'Test 37');
test(isPowerOfTwo(262143), false, 'Test 38');
test(isPowerOfTwo(2047), false, 'Test 39');
test(isPowerOfTwo(5), false, 'Test 40');
test(isPowerOfTwo(23), false, 'Test 41');
test(isPowerOfTwo(-2147483648), false, 'Test 42');
test(isPowerOfTwo(9223372036854775808), true, 'Test 43');
test(isPowerOfTwo(8191), false, 'Test 44');
test(isPowerOfTwo(27), false, 'Test 45');
test(isPowerOfTwo(1000000000), false, 'Test 46');
test(isPowerOfTwo(24), false, 'Test 47');
test(isPowerOfTwo(-4), false, 'Test 48');
test(isPowerOfTwo(11), false, 'Test 49');
test(isPowerOfTwo(4294967296), true, 'Test 50');
test(isPowerOfTwo(1048575), false, 'Test 51');
test(isPowerOfTwo(29), false, 'Test 52');
test(isPowerOfTwo(131071), false, 'Test 53');
test(isPowerOfTwo(-128), false, 'Test 54');
test(isPowerOfTwo(21), false, 'Test 55');
test(isPowerOfTwo(-2), false, 'Test 56');
test(isPowerOfTwo(524287), false, 'Test 57');
test(isPowerOfTwo(268435455), false, 'Test 58');
test(isPowerOfTwo(28), false, 'Test 59');
test(isPowerOfTwo(2147483649), false, 'Test 60');
test(isPowerOfTwo(17), false, 'Test 61');
test(isPowerOfTwo(1073741823), false, 'Test 62');
test(isPowerOfTwo(16777215), false, 'Test 63');
test(isPowerOfTwo(9), false, 'Test 64');
test(isPowerOfTwo(-8), false, 'Test 65');
test(isPowerOfTwo(6), false, 'Test 66');
test(isPowerOfTwo(10), false, 'Test 67');
test(isPowerOfTwo(63), false, 'Test 68');
test(isPowerOfTwo(67108863), false, 'Test 69');
test(isPowerOfTwo(32767), false, 'Test 70');
test(isPowerOfTwo(511), false, 'Test 71');
test(isPowerOfTwo(4194303), false, 'Test 72');
test(isPowerOfTwo(30), false, 'Test 73');
test(isPowerOfTwo(1152921504606846976), true, 'Test 74');
test(isPowerOfTwo(255), false, 'Test 75');
test(isPowerOfTwo(18), false, 'Test 76');
test(isPowerOfTwo(4611686018427387904), true, 'Test 77');
test(isPowerOfTwo(1023), false, 'Test 78');
test(isPowerOfTwo(127), false, 'Test 79');
test(isPowerOfTwo(15), false, 'Test 80');
test(isPowerOfTwo(14), false, 'Test 81');
test(isPowerOfTwo(26), false, 'Test 82');
test(isPowerOfTwo(536870911), false, 'Test 83');
test(isPowerOfTwo(1000000), false, 'Test 84');
test(isPowerOfTwo(33554431), false, 'Test 85');
test(isPowerOfTwo(18446744073709551616), true, 'Test 86');
test(isPowerOfTwo(12), false, 'Test 87');
test(isPowerOfTwo(16383), false, 'Test 88');
test(isPowerOfTwo(2305843009213693952), true, 'Test 89');
test(isPowerOfTwo(134217727), false, 'Test 90');
test(isPowerOfTwo(8388607), false, 'Test 91');
test(isPowerOfTwo(2097151), false, 'Test 92');
test(isPowerOfTwo(18014398509481984), true, 'Test 93');
test(isPowerOfTwo(4095), false, 'Test 94');
test(isPowerOfTwo(18014398509481983), false, 'Test 95');
test(isPowerOfTwo(22), false, 'Test 96');
test(isPowerOfTwo(-32), false, 'Test 97');
test(isPowerOfTwo(-64), false, 'Test 98');
test(isPowerOfTwo(19), false, 'Test 99');
test(isPowerOfTwo(65535), false, 'Test 100');
test(isPowerOfTwo(31), false, 'Test 101');
test(isPowerOfTwo(7), false, 'Test 102');
test(isPowerOfTwo(25), false, 'Test 103');

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
