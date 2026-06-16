// Test: 1545. Find Kth Bit In Nth Binary String
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { findKthBit } = require("./solution");

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

console.log("\n1545. Find Kth Bit In Nth Binary String\n");

test(findKthBit(6, 31), 1, 'Test 1');
test(findKthBit(4, 11), 1, 'Test 2');
test(findKthBit(14, 511), 1, 'Test 3');
test(findKthBit(15, 545), 0, 'Test 4');
test(findKthBit(17, 65536), 1, 'Test 5');
test(findKthBit(18, 131071), 1, 'Test 6');
test(findKthBit(10, 127), 1, 'Test 7');
test(findKthBit(19, 262144), 1, 'Test 8');
test(findKthBit(13, 289), 0, 'Test 9');
test(findKthBit(12, 2047), 1, 'Test 10');
test(findKthBit(7, 40), 1, 'Test 11');
test(findKthBit(11, 148), 1, 'Test 12');
test(findKthBit(10, 511), 1, 'Test 13');
test(findKthBit(20, 524287), 1, 'Test 14');
test(findKthBit(16, 1023), 1, 'Test 15');
test(findKthBit(11, 1024), 1, 'Test 16');
test(findKthBit(9, 85), 0, 'Test 17');
test(findKthBit(14, 8191), 1, 'Test 18');
test(findKthBit(15, 16384), 1, 'Test 19');
test(findKthBit(16, 32767), 1, 'Test 20');
test(findKthBit(20, 4095), 1, 'Test 21');
test(findKthBit(20, 1048575), 1, 'Test 22');
test(findKthBit(12, 255), 1, 'Test 23');
test(findKthBit(5, 16), 1, 'Test 24');
test(findKthBit(8, 63), 1, 'Test 25');
test(findKthBit(17, 1057), 0, 'Test 26');
test(findKthBit(3, 1), 0, 'Test 27');
test(findKthBit(8, 127), 1, 'Test 28');
test(findKthBit(9, 256), 1, 'Test 29');
test(findKthBit(13, 4096), 1, 'Test 30');
test(findKthBit(19, 2081), 0, 'Test 31');
test(findKthBit(18, 2047), 1, 'Test 32');
test(findKthBit(7, 64), 1, 'Test 33');
test(findKthBit(19, 262143), 1, 'Test 34');
test(findKthBit(9, 128), 1, 'Test 35');
test(findKthBit(17, 32767), 1, 'Test 36');
test(findKthBit(10, 1023), 1, 'Test 37');
test(findKthBit(12, 4096), 1, 'Test 38');
test(findKthBit(18, 262144), 1, 'Test 39');
test(findKthBit(14, 8192), 1, 'Test 40');
test(findKthBit(14, 4096), 1, 'Test 41');
test(findKthBit(13, 2048), 1, 'Test 42');
test(findKthBit(13, 8191), 1, 'Test 43');
test(findKthBit(11, 1023), 1, 'Test 44');
test(findKthBit(17, 131071), 1, 'Test 45');
test(findKthBit(16, 65535), 1, 'Test 46');
test(findKthBit(18, 65536), 1, 'Test 47');
test(findKthBit(16, 131071), Error: negative shift count, 'Test 48');
test(findKthBit(19, 4096), 1, 'Test 49');
test(findKthBit(19, 524288), 1, 'Test 50');
test(findKthBit(9, 255), 1, 'Test 51');
test(findKthBit(20, 524288), 1, 'Test 52');
test(findKthBit(17, 131072), 1, 'Test 53');
test(findKthBit(11, 2048), 1, 'Test 54');
test(findKthBit(14, 16383), 1, 'Test 55');
test(findKthBit(15, 32767), 1, 'Test 56');
test(findKthBit(19, 524287), 1, 'Test 57');
test(findKthBit(19, 4095), 1, 'Test 58');
test(findKthBit(5, 32), 1, 'Test 59');
test(findKthBit(10, 512), 1, 'Test 60');
test(findKthBit(3, 5), 0, 'Test 61');
test(findKthBit(8, 256), 1, 'Test 62');
test(findKthBit(16, 65536), 1, 'Test 63');
test(findKthBit(15, 32768), 1, 'Test 64');
test(findKthBit(6, 64), 1, 'Test 65');
test(findKthBit(17, 16385), 0, 'Test 66');
test(findKthBit(11, 2047), 1, 'Test 67');
test(findKthBit(9, 511), 1, 'Test 68');
test(findKthBit(8, 255), 1, 'Test 69');
test(findKthBit(7, 128), 1, 'Test 70');
test(findKthBit(3, 7), 1, 'Test 71');
test(findKthBit(8, 128), 1, 'Test 72');
test(findKthBit(4, 24), Error: negative shift count, 'Test 73');
test(findKthBit(19, 327679), 1, 'Test 74');
test(findKthBit(13, 8192), 1, 'Test 75');
test(findKthBit(18, 262143), 1, 'Test 76');
test(findKthBit(16, 32768), 1, 'Test 77');
test(findKthBit(9, 512), 1, 'Test 78');
test(findKthBit(14, 16384), 1, 'Test 79');
test(findKthBit(19, 511999), 1, 'Test 80');
test(findKthBit(2, 2), 1, 'Test 81');
test(findKthBit(17, 65535), 1, 'Test 82');
test(findKthBit(13, 4095), 1, 'Test 83');
test(findKthBit(8, 64), 1, 'Test 84');
test(findKthBit(20, 1), 0, 'Test 85');
test(findKthBit(10, 256), 1, 'Test 86');
test(findKthBit(10, 1024), 1, 'Test 87');

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
