// Test: 1611. Minimum One Bit Operations To Make Integers Zero
// 71 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOneBitOperations } = require("./solution");

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

console.log("\n1611. Minimum One Bit Operations To Make Integers Zero\n");

test(minimumOneBitOperations(0), 0, 'Test 1');
test(minimumOneBitOperations(8), 15, 'Test 2');
test(minimumOneBitOperations(3), 2, 'Test 3');
test(minimumOneBitOperations(100), 71, 'Test 4');
test(minimumOneBitOperations(15), 10, 'Test 5');
test(minimumOneBitOperations(16), 31, 'Test 6');
test(minimumOneBitOperations(31), 21, 'Test 7');
test(minimumOneBitOperations(1000000000), 756249599, 'Test 8');
test(minimumOneBitOperations(32), 63, 'Test 9');
test(minimumOneBitOperations(6), 4, 'Test 10');
test(minimumOneBitOperations(1023), 682, 'Test 11');
test(minimumOneBitOperations(1), 1, 'Test 12');
test(minimumOneBitOperations(500), 344, 'Test 13');
test(minimumOneBitOperations(7), 5, 'Test 14');
test(minimumOneBitOperations(10), 12, 'Test 15');
test(minimumOneBitOperations(1024), 2047, 'Test 16');
test(minimumOneBitOperations(2097152), 4194303, 'Test 17');
test(minimumOneBitOperations(63), 42, 'Test 18');
test(minimumOneBitOperations(896), 767, 'Test 19');
test(minimumOneBitOperations(131071), 87381, 'Test 20');
test(minimumOneBitOperations(67108864), 134217727, 'Test 21');
test(minimumOneBitOperations(4096), 8191, 'Test 22');
test(minimumOneBitOperations(67108863), 44739242, 'Test 23');
test(minimumOneBitOperations(2147483647), 1431655765, 'Test 24');
test(minimumOneBitOperations(32767), 21845, 'Test 25');
test(minimumOneBitOperations(511), 341, 'Test 26');
test(minimumOneBitOperations(262143), 174762, 'Test 27');
test(minimumOneBitOperations(2047), 1365, 'Test 28');
test(minimumOneBitOperations(268435456), 536870911, 'Test 29');
test(minimumOneBitOperations(16383), 10922, 'Test 30');
test(minimumOneBitOperations(16384), 32767, 'Test 31');
test(minimumOneBitOperations(524287), 349525, 'Test 32');
test(minimumOneBitOperations(987654), 662532, 'Test 33');
test(minimumOneBitOperations(268435455), 178956970, 'Test 34');
test(minimumOneBitOperations(16777216), 33554431, 'Test 35');
test(minimumOneBitOperations(4194303), 2796202, 'Test 36');
test(minimumOneBitOperations(134217727), 89478485, 'Test 37');
test(minimumOneBitOperations(64), 127, 'Test 38');
test(minimumOneBitOperations(8388607), 5592405, 'Test 39');
test(minimumOneBitOperations(2097151), 1398101, 'Test 40');
test(minimumOneBitOperations(4194304), 8388607, 'Test 41');
test(minimumOneBitOperations(192), 128, 'Test 42');
test(minimumOneBitOperations(134217728), 268435455, 'Test 43');
test(minimumOneBitOperations(1073741823), 715827882, 'Test 44');
test(minimumOneBitOperations(33554432), 67108863, 'Test 45');
test(minimumOneBitOperations(16777215), 11184810, 'Test 46');
test(minimumOneBitOperations(1073741824), 2147483647, 'Test 47');
test(minimumOneBitOperations(4095), 2730, 'Test 48');
test(minimumOneBitOperations(128), 255, 'Test 49');
test(minimumOneBitOperations(100000), 66752, 'Test 50');
test(minimumOneBitOperations(255), 170, 'Test 51');
test(minimumOneBitOperations(1048576), 2097151, 'Test 52');
test(minimumOneBitOperations(8192), 16383, 'Test 53');
test(minimumOneBitOperations(8191), 5461, 'Test 54');
test(minimumOneBitOperations(2048), 4095, 'Test 55');
test(minimumOneBitOperations(65536), 131071, 'Test 56');
test(minimumOneBitOperations(256), 511, 'Test 57');
test(minimumOneBitOperations(262144), 524287, 'Test 58');
test(minimumOneBitOperations(65535), 43690, 'Test 59');
test(minimumOneBitOperations(127), 85, 'Test 60');
test(minimumOneBitOperations(987654321), 747917089, 'Test 61');
test(minimumOneBitOperations(1048575), 699050, 'Test 62');
test(minimumOneBitOperations(500000000), 378124799, 'Test 63');
test(minimumOneBitOperations(536870911), 357913941, 'Test 64');
test(minimumOneBitOperations(1000000), 687231, 'Test 65');
test(minimumOneBitOperations(512), 1023, 'Test 66');
test(minimumOneBitOperations(123456789), 93489638, 'Test 67');
test(minimumOneBitOperations(1047552), 698368, 'Test 68');
test(minimumOneBitOperations(123456), 82816, 'Test 69');
test(minimumOneBitOperations(33554431), 22369621, 'Test 70');
test(minimumOneBitOperations(54321), 38945, 'Test 71');

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
