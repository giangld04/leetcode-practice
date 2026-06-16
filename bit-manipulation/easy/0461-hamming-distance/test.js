// Test: 461. Hamming Distance
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { hammingDistance } = require("./solution");

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

console.log("\n461. Hamming Distance\n");

test(hammingDistance(3, 1), 1, 'Test 1');
test(hammingDistance(7, 15), 1, 'Test 2');
test(hammingDistance(1073741823, 2147483647), 1, 'Test 3');
test(hammingDistance(1023, 512), 9, 'Test 4');
test(hammingDistance(2147483647, 0), 31, 'Test 5');
test(hammingDistance(2147483647, 1), 30, 'Test 6');
test(hammingDistance(1, 4), 2, 'Test 7');
test(hammingDistance(1023, 511), 1, 'Test 8');
test(hammingDistance(16, 32), 2, 'Test 9');
test(hammingDistance(1073741824, 1073741823), 31, 'Test 10');
test(hammingDistance(0, 0), 0, 'Test 11');
test(hammingDistance(255, 0), 8, 'Test 12');
test(hammingDistance(1, 1), 0, 'Test 13');
test(hammingDistance(15, 15), 0, 'Test 14');
test(hammingDistance(2147483647, 2147483647), 0, 'Test 15');
test(hammingDistance(15, 9), 2, 'Test 16');
test(hammingDistance(555, 666), 4, 'Test 17');
test(hammingDistance(18446744073709551615, 9223372036854775807), 1, 'Test 18');
test(hammingDistance(33554432, 67108863), 25, 'Test 19');
test(hammingDistance(1717986918, 858993459), 16, 'Test 20');
test(hammingDistance(4095, 1023), 2, 'Test 21');
test(hammingDistance(33554431, 16777215), 1, 'Test 22');
test(hammingDistance(268435455, 134217727), 1, 'Test 23');
test(hammingDistance(4294967295, 2147483647), 1, 'Test 24');
test(hammingDistance(1357924680, 2468135790), 15, 'Test 25');
test(hammingDistance(65535, 32768), 15, 'Test 26');
test(hammingDistance(16777215, 16777216), 25, 'Test 27');
test(hammingDistance(2147483647, 2147483646), 1, 'Test 28');
test(hammingDistance(262143, 131071), 1, 'Test 29');
test(hammingDistance(13579, 24680), 8, 'Test 30');
test(hammingDistance(4294967295, 1), 31, 'Test 31');
test(hammingDistance(100000000, 100000001), 1, 'Test 32');
test(hammingDistance(2047, 4094), 2, 'Test 33');
test(hammingDistance(255, 127), 1, 'Test 34');
test(hammingDistance(0, 2147483647), 31, 'Test 35');
test(hammingDistance(33554431, 33554432), 26, 'Test 36');
test(hammingDistance(1000000000, 1000000001), 1, 'Test 37');
test(hammingDistance(134217728, 8388607), 24, 'Test 38');
test(hammingDistance(536870911, 536870912), 30, 'Test 39');
test(hammingDistance(268435456, 536870912), 2, 'Test 40');
test(hammingDistance(8, 16), 2, 'Test 41');
test(hammingDistance(1048575, 2097150), 2, 'Test 42');
test(hammingDistance(128, 32), 2, 'Test 43');
test(hammingDistance(8191, 4095), 1, 'Test 44');
test(hammingDistance(1048575, 524288), 19, 'Test 45');
test(hammingDistance(511, 255), 1, 'Test 46');
test(hammingDistance(1048576, 2097152), 2, 'Test 47');
test(hammingDistance(123456789, 987654321), 15, 'Test 48');
test(hammingDistance(1000000007, 1000000008), 4, 'Test 49');
test(hammingDistance(1073741824, 536870912), 2, 'Test 50');
test(hammingDistance(123, 456), 6, 'Test 51');
test(hammingDistance(67108863, 67108864), 27, 'Test 52');
test(hammingDistance(134217727, 268435455), 1, 'Test 53');
test(hammingDistance(1024, 511), 10, 'Test 54');
test(hammingDistance(1073741824, 2147483647), 30, 'Test 55');
test(hammingDistance(8, 24), 1, 'Test 56');
test(hammingDistance(1048575, 1048574), 1, 'Test 57');
test(hammingDistance(131071, 32768), 16, 'Test 58');
test(hammingDistance(65535, 65534), 1, 'Test 59');
test(hammingDistance(16777215, 0), 24, 'Test 60');
test(hammingDistance(8675309, 196418), 11, 'Test 61');
test(hammingDistance(5, 10), 4, 'Test 62');
test(hammingDistance(13, 29), 1, 'Test 63');
test(hammingDistance(8, 32), 2, 'Test 64');
test(hammingDistance(5, 255), 6, 'Test 65');
test(hammingDistance(131071, 1048575), 3, 'Test 66');
test(hammingDistance(17, 34), 4, 'Test 67');
test(hammingDistance(4095, 1), 11, 'Test 68');
test(hammingDistance(1048576, 524288), 2, 'Test 69');
test(hammingDistance(65535, 255), 8, 'Test 70');
test(hammingDistance(16777215, 8388608), 23, 'Test 71');
test(hammingDistance(0, 1073741824), 1, 'Test 72');
test(hammingDistance(1, 2147483647), 30, 'Test 73');
test(hammingDistance(858993459, 2147483647), 15, 'Test 74');
test(hammingDistance(65535, 0), 16, 'Test 75');
test(hammingDistance(500, 1000), 4, 'Test 76');
test(hammingDistance(8388607, 16777216), 24, 'Test 77');
test(hammingDistance(268435455, 268435456), 29, 'Test 78');
test(hammingDistance(4294967295, 0), 32, 'Test 79');
test(hammingDistance(131071, 65535), 1, 'Test 80');
test(hammingDistance(16777215, 65536), 23, 'Test 81');
test(hammingDistance(131072, 262144), 2, 'Test 82');
test(hammingDistance(16777215, 1), 23, 'Test 83');
test(hammingDistance(1048575, 2097151), 1, 'Test 84');
test(hammingDistance(2147483647, 1073741823), 1, 'Test 85');
test(hammingDistance(8191, 0), 13, 'Test 86');
test(hammingDistance(32768, 65535), 15, 'Test 87');
test(hammingDistance(1048575, 1048576), 21, 'Test 88');

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
