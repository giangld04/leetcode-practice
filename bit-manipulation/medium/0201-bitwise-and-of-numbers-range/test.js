// Test: 201. Bitwise And Of Numbers Range
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { rangeBitwiseAnd } = require("./solution");

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

console.log("\n201. Bitwise And Of Numbers Range\n");

test(rangeBitwiseAnd(5, 7), 4, 'Test 1');
test(rangeBitwiseAnd(100, 105), 96, 'Test 2');
test(rangeBitwiseAnd(16, 31), 16, 'Test 3');
test(rangeBitwiseAnd(123456, 654321), 0, 'Test 4');
test(rangeBitwiseAnd(8, 12), 8, 'Test 5');
test(rangeBitwiseAnd(0, 0), 0, 'Test 6');
test(rangeBitwiseAnd(33, 35), 32, 'Test 7');
test(rangeBitwiseAnd(1, 1), 1, 'Test 8');
test(rangeBitwiseAnd(1, 2147483647), 0, 'Test 9');
test(rangeBitwiseAnd(8, 8), 8, 'Test 10');
test(rangeBitwiseAnd(10, 15), 8, 'Test 11');
test(rangeBitwiseAnd(100, 200), 0, 'Test 12');
test(rangeBitwiseAnd(4194304, 4194305), 4194304, 'Test 13');
test(rangeBitwiseAnd(1000000, 1000010), 1000000, 'Test 14');
test(rangeBitwiseAnd(4095, 8191), 0, 'Test 15');
test(rangeBitwiseAnd(8388608, 8388608), 8388608, 'Test 16');
test(rangeBitwiseAnd(134217728, 134217729), 134217728, 'Test 17');
test(rangeBitwiseAnd(536870912, 536870913), 536870912, 'Test 18');
test(rangeBitwiseAnd(32768, 32769), 32768, 'Test 19');
test(rangeBitwiseAnd(32, 33), 32, 'Test 20');
test(rangeBitwiseAnd(1024, 2047), 1024, 'Test 21');
test(rangeBitwiseAnd(1, 1073741824), 0, 'Test 22');
test(rangeBitwiseAnd(16777215, 16777216), 0, 'Test 23');
test(rangeBitwiseAnd(1000000000, 1000000100), 1000000000, 'Test 24');
test(rangeBitwiseAnd(512, 1023), 512, 'Test 25');
test(rangeBitwiseAnd(100000000, 200000000), 0, 'Test 26');
test(rangeBitwiseAnd(65536, 131071), 65536, 'Test 27');
test(rangeBitwiseAnd(123456, 123458), 123456, 'Test 28');
test(rangeBitwiseAnd(1, 3), 0, 'Test 29');
test(rangeBitwiseAnd(1024, 1025), 1024, 'Test 30');
test(rangeBitwiseAnd(131072, 131073), 131072, 'Test 31');
test(rangeBitwiseAnd(1073741824, 1073741825), 1073741824, 'Test 32');
test(rangeBitwiseAnd(536870912, 1073741823), 536870912, 'Test 33');
test(rangeBitwiseAnd(1, 10), 0, 'Test 34');
test(rangeBitwiseAnd(16384, 32767), 16384, 'Test 35');
test(rangeBitwiseAnd(512, 513), 512, 'Test 36');
test(rangeBitwiseAnd(32768, 65535), 32768, 'Test 37');
test(rangeBitwiseAnd(16384, 16385), 16384, 'Test 38');
test(rangeBitwiseAnd(67108864, 67108865), 67108864, 'Test 39');
test(rangeBitwiseAnd(256, 257), 256, 'Test 40');
test(rangeBitwiseAnd(64, 65), 64, 'Test 41');
test(rangeBitwiseAnd(262144, 262145), 262144, 'Test 42');
test(rangeBitwiseAnd(2097152, 2097153), 2097152, 'Test 43');
test(rangeBitwiseAnd(16, 17), 16, 'Test 44');
test(rangeBitwiseAnd(536870912, 536870919), 536870912, 'Test 45');
test(rangeBitwiseAnd(16777216, 33554431), 16777216, 'Test 46');
test(rangeBitwiseAnd(2048, 2049), 2048, 'Test 47');
test(rangeBitwiseAnd(512, 768), 512, 'Test 48');
test(rangeBitwiseAnd(2147483644, 2147483647), 2147483644, 'Test 49');
test(rangeBitwiseAnd(1000000, 1000100), 999936, 'Test 50');
test(rangeBitwiseAnd(500000000, 500000100), 500000000, 'Test 51');
test(rangeBitwiseAnd(4096, 4096), 4096, 'Test 52');
test(rangeBitwiseAnd(1048576, 1048577), 1048576, 'Test 53');
test(rangeBitwiseAnd(33554432, 33554433), 33554432, 'Test 54');
test(rangeBitwiseAnd(1073741824, 2147483647), 1073741824, 'Test 55');
test(rangeBitwiseAnd(4, 7), 4, 'Test 56');
test(rangeBitwiseAnd(2147483646, 2147483647), 2147483646, 'Test 57');
test(rangeBitwiseAnd(1, 1000), 0, 'Test 58');
test(rangeBitwiseAnd(16777216, 16777217), 16777216, 'Test 59');
test(rangeBitwiseAnd(268435456, 268435457), 268435456, 'Test 60');
test(rangeBitwiseAnd(32, 63), 32, 'Test 61');
test(rangeBitwiseAnd(524288, 524289), 524288, 'Test 62');
test(rangeBitwiseAnd(256, 511), 256, 'Test 63');
test(rangeBitwiseAnd(1023, 1024), 0, 'Test 64');
test(rangeBitwiseAnd(8192, 8193), 8192, 'Test 65');
test(rangeBitwiseAnd(2147483645, 2147483647), 2147483644, 'Test 66');
test(rangeBitwiseAnd(512, 1024), 0, 'Test 67');
test(rangeBitwiseAnd(268435456, 268435460), 268435456, 'Test 68');
test(rangeBitwiseAnd(1073741824, 1073741827), 1073741824, 'Test 69');
test(rangeBitwiseAnd(130, 135), 128, 'Test 70');
test(rangeBitwiseAnd(8388608, 8388609), 8388608, 'Test 71');
test(rangeBitwiseAnd(134217728, 268435455), 134217728, 'Test 72');
test(rangeBitwiseAnd(1024, 2048), 0, 'Test 73');
test(rangeBitwiseAnd(50, 100), 0, 'Test 74');
test(rangeBitwiseAnd(33554432, 67108863), 33554432, 'Test 75');
test(rangeBitwiseAnd(100000, 100099), 99840, 'Test 76');
test(rangeBitwiseAnd(1048576, 2097151), 1048576, 'Test 77');
test(rangeBitwiseAnd(268435456, 536870911), 268435456, 'Test 78');
test(rangeBitwiseAnd(4096, 4097), 4096, 'Test 79');
test(rangeBitwiseAnd(16777215, 16777219), 0, 'Test 80');
test(rangeBitwiseAnd(16777215, 16777215), 16777215, 'Test 81');
test(rangeBitwiseAnd(123456, 123479), 123456, 'Test 82');
test(rangeBitwiseAnd(33554431, 33554432), 0, 'Test 83');
test(rangeBitwiseAnd(65536, 65537), 65536, 'Test 84');
test(rangeBitwiseAnd(8, 15), 8, 'Test 85');
test(rangeBitwiseAnd(8191, 8192), 0, 'Test 86');
test(rangeBitwiseAnd(1048576, 1049087), 1048576, 'Test 87');
test(rangeBitwiseAnd(1048576, 1048580), 1048576, 'Test 88');
test(rangeBitwiseAnd(500000000, 1000000000), 0, 'Test 89');
test(rangeBitwiseAnd(2, 3), 2, 'Test 90');
test(rangeBitwiseAnd(1023, 2047), 0, 'Test 91');
test(rangeBitwiseAnd(128, 128), 128, 'Test 92');
test(rangeBitwiseAnd(123456, 123500), 123456, 'Test 93');
test(rangeBitwiseAnd(128, 255), 128, 'Test 94');
test(rangeBitwiseAnd(1, 1000000000), 0, 'Test 95');
test(rangeBitwiseAnd(128, 129), 128, 'Test 96');
test(rangeBitwiseAnd(16777216, 16777232), 16777216, 'Test 97');

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
