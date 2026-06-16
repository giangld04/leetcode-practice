// Test: 3226. Number Of Bit Changes To Make Two Integers Equal
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { minChanges } = require("./solution");

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

console.log("\n3226. Number Of Bit Changes To Make Two Integers Equal\n");

test(minChanges(1, 2), -1, 'Test 1');
test(minChanges(31, 1), 4, 'Test 2');
test(minChanges(15, 9), 2, 'Test 3');
test(minChanges(8, 8), 0, 'Test 4');
test(minChanges(1000000, 999999), -1, 'Test 5');
test(minChanges(7, 11), -1, 'Test 6');
test(minChanges(7, 3), 1, 'Test 7');
test(minChanges(5, 3), -1, 'Test 8');
test(minChanges(9, 8), 1, 'Test 9');
test(minChanges(6, 5), -1, 'Test 10');
test(minChanges(31, 15), 1, 'Test 11');
test(minChanges(1023, 512), 9, 'Test 12');
test(minChanges(21, 21), 0, 'Test 13');
test(minChanges(13, 4), 2, 'Test 14');
test(minChanges(14, 13), -1, 'Test 15');
test(minChanges(1023, 511), 1, 'Test 16');
test(minChanges(1000000, 500000), -1, 'Test 17');
test(minChanges(1047552, 523776), -1, 'Test 18');
test(minChanges(32767, 16384), 14, 'Test 19');
test(minChanges(999999, 1000000), -1, 'Test 20');
test(minChanges(65535, 32767), 1, 'Test 21');
test(minChanges(111111, 222222), -1, 'Test 22');
test(minChanges(524287, 524288), -1, 'Test 23');
test(minChanges(8388607, 4194304), 22, 'Test 24');
test(minChanges(8191, 4096), 12, 'Test 25');
test(minChanges(1000000, 1), -1, 'Test 26');
test(minChanges(255, 128), 7, 'Test 27');
test(minChanges(123456, 65536), 5, 'Test 28');
test(minChanges(983040, 524288), 3, 'Test 29');
test(minChanges(777777, 777777), 0, 'Test 30');
test(minChanges(1048576, 1048576), 0, 'Test 31');
test(minChanges(8191, 8191), 0, 'Test 32');
test(minChanges(1048575, 1), 19, 'Test 33');
test(minChanges(2, 1), -1, 'Test 34');
test(minChanges(123456, 123455), -1, 'Test 35');
test(minChanges(524287, 524286), 1, 'Test 36');
test(minChanges(8388607, 4194303), 1, 'Test 37');
test(minChanges(1048574, 1048573), -1, 'Test 38');
test(minChanges(123456, 123456), 0, 'Test 39');
test(minChanges(786432, 393216), -1, 'Test 40');
test(minChanges(777777, 888888), -1, 'Test 41');
test(minChanges(1048575, 524288), 19, 'Test 42');
test(minChanges(888888, 999999), -1, 'Test 43');
test(minChanges(65535, 65534), 1, 'Test 44');
test(minChanges(1, 1048575), -1, 'Test 45');
test(minChanges(2097151, 1048576), 20, 'Test 46');
test(minChanges(16777215, 16777214), 1, 'Test 47');
test(minChanges(131071, 65535), 1, 'Test 48');
test(minChanges(999999, 1), 11, 'Test 49');
test(minChanges(8388607, 8388607), 0, 'Test 50');
test(minChanges(1234567, 1234566), 1, 'Test 51');
test(minChanges(983041, 262144), 4, 'Test 52');
test(minChanges(555555, 555554), 1, 'Test 53');
test(minChanges(987654, 123456), -1, 'Test 54');
test(minChanges(1234567, 1234568), -1, 'Test 55');
test(minChanges(123456, 654321), -1, 'Test 56');
test(minChanges(1234567, 7654321), -1, 'Test 57');
test(minChanges(8191, 4095), 1, 'Test 58');
test(minChanges(1024, 1023), -1, 'Test 59');
test(minChanges(1001, 1000), 1, 'Test 60');
test(minChanges(524287, 262143), 1, 'Test 61');
test(minChanges(1000000, 1000001), -1, 'Test 62');
test(minChanges(888888, 888880), 1, 'Test 63');
test(minChanges(65535, 4095), 4, 'Test 64');
test(minChanges(1023, 0), 10, 'Test 65');
test(minChanges(333333, 666666), -1, 'Test 66');
test(minChanges(524287, 262144), 18, 'Test 67');
test(minChanges(524287, 1), 18, 'Test 68');
test(minChanges(131071, 131072), -1, 'Test 69');
test(minChanges(16777215, 8388608), 23, 'Test 70');
test(minChanges(65535, 1), 15, 'Test 71');
test(minChanges(524287, 524287), 0, 'Test 72');
test(minChanges(987654, 987653), -1, 'Test 73');
test(minChanges(897531, 897532), -1, 'Test 74');
test(minChanges(9876543, 9876542), 1, 'Test 75');
test(minChanges(777777, 666666), -1, 'Test 76');
test(minChanges(32768, 16384), -1, 'Test 77');
test(minChanges(987654, 987655), -1, 'Test 78');
test(minChanges(8192, 4096), -1, 'Test 79');
test(minChanges(65535, 32768), 15, 'Test 80');
test(minChanges(8388608, 4194304), -1, 'Test 81');
test(minChanges(1048575, 524287), 1, 'Test 82');
test(minChanges(983040, 491520), -1, 'Test 83');
test(minChanges(131071, 262142), -1, 'Test 84');
test(minChanges(6143, 1024), 11, 'Test 85');
test(minChanges(1048575, 0), 20, 'Test 86');
test(minChanges(131071, 1), 16, 'Test 87');
test(minChanges(4194303, 2097152), 21, 'Test 88');
test(minChanges(262144, 131072), -1, 'Test 89');
test(minChanges(4095, 1023), 2, 'Test 90');
test(minChanges(7, 0), 3, 'Test 91');

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
