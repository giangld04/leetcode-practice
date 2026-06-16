// Test: 3133. Minimum Array End
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { minEnd } = require("./solution");

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

console.log("\n3133. Minimum Array End\n");

test(minEnd(4, 8), 11, 'Test 1');
test(minEnd(5, 1), 9, 'Test 2');
test(minEnd(10, 1), 19, 'Test 3');
test(minEnd(5, 3), 19, 'Test 4');
test(minEnd(2, 7), 15, 'Test 5');
test(minEnd(1, 10), 10, 'Test 6');
test(minEnd(10, 16), 25, 'Test 7');
test(minEnd(1, 5), 5, 'Test 8');
test(minEnd(1, 32), 32, 'Test 9');
test(minEnd(3, 4), 6, 'Test 10');
test(minEnd(500000, 256), 1000223, 'Test 11');
test(minEnd(30, 2048), 2077, 'Test 12');
test(minEnd(500000, 2047), 1023999999, 'Test 13');
test(minEnd(50, 512), 561, 'Test 14');
test(minEnd(100, 128), 227, 'Test 15');
test(minEnd(8, 4096), 4103, 'Test 16');
test(minEnd(20, 8), 43, 'Test 17');
test(minEnd(100000, 65535), 6553599999, 'Test 18');
test(minEnd(512, 32768), 33279, 'Test 19');
test(minEnd(7, 12), 30, 'Test 20');
test(minEnd(15, 8), 30, 'Test 21');
test(minEnd(4, 3), 15, 'Test 22');
test(minEnd(20, 16), 51, 'Test 23');
test(minEnd(8, 3), 31, 'Test 24');
test(minEnd(12, 3), 47, 'Test 25');
test(minEnd(1, 1073741824), 1073741824, 'Test 26');
test(minEnd(1000, 512), 2023, 'Test 27');
test(minEnd(8, 1023), 8191, 'Test 28');
test(minEnd(100000000, 1073741823), 107374182399999999, 'Test 29');
test(minEnd(100, 16), 211, 'Test 30');
test(minEnd(30, 17), 123, 'Test 31');
test(minEnd(30, 64), 93, 'Test 32');
test(minEnd(15, 31), 479, 'Test 33');
test(minEnd(100, 255), 25599, 'Test 34');
test(minEnd(4, 63), 255, 'Test 35');
test(minEnd(5, 1023), 5119, 'Test 36');
test(minEnd(10, 1024), 1033, 'Test 37');
test(minEnd(8, 7), 63, 'Test 38');
test(minEnd(5, 8), 12, 'Test 39');
test(minEnd(50000, 31), 1599999, 'Test 40');
test(minEnd(9, 512), 520, 'Test 41');
test(minEnd(4, 15), 63, 'Test 42');
test(minEnd(6, 2048), 2053, 'Test 43');
test(minEnd(7, 10), 30, 'Test 44');
test(minEnd(15, 100), 126, 'Test 45');
test(minEnd(6, 10), 27, 'Test 46');
test(minEnd(3, 16), 18, 'Test 47');
test(minEnd(50, 2048), 2097, 'Test 48');
test(minEnd(1000, 4096), 5095, 'Test 49');
test(minEnd(10, 1048575), 10485759, 'Test 50');
test(minEnd(15, 1024), 1038, 'Test 51');
test(minEnd(50, 128), 177, 'Test 52');
test(minEnd(20, 2047), 40959, 'Test 53');
test(minEnd(25, 2048), 2072, 'Test 54');
test(minEnd(6, 24), 29, 'Test 55');
test(minEnd(7, 128), 134, 'Test 56');
test(minEnd(100, 1047552), 1047651, 'Test 57');
test(minEnd(15, 512), 526, 'Test 58');
test(minEnd(3, 12), 14, 'Test 59');
test(minEnd(20, 512), 531, 'Test 60');
test(minEnd(1, 1023), 1023, 'Test 61');
test(minEnd(100000, 1023), 102399999, 'Test 62');
test(minEnd(3, 31), 95, 'Test 63');
test(minEnd(5, 31), 159, 'Test 64');
test(minEnd(50, 31), 1599, 'Test 65');
test(minEnd(500, 512), 1011, 'Test 66');
test(minEnd(10000000, 4095), 40959999999, 'Test 67');
test(minEnd(64, 2048), 2111, 'Test 68');
test(minEnd(8, 32), 39, 'Test 69');
test(minEnd(3, 13), 29, 'Test 70');
test(minEnd(8, 31), 255, 'Test 71');
test(minEnd(7, 64), 70, 'Test 72');
test(minEnd(1, 1024), 1024, 'Test 73');
test(minEnd(1024, 65535), 67108863, 'Test 74');
test(minEnd(100, 4096), 4195, 'Test 75');
test(minEnd(7, 1024), 1030, 'Test 76');
test(minEnd(9, 256), 264, 'Test 77');
test(minEnd(1000, 2048), 3047, 'Test 78');
test(minEnd(10, 32), 41, 'Test 79');
test(minEnd(50, 255), 12799, 'Test 80');
test(minEnd(100000, 128), 200095, 'Test 81');
test(minEnd(100000, 1), 199999, 'Test 82');
test(minEnd(8, 255), 2047, 'Test 83');
test(minEnd(5, 15), 79, 'Test 84');
test(minEnd(100, 256), 355, 'Test 85');
test(minEnd(25, 128), 152, 'Test 86');
test(minEnd(6, 64), 69, 'Test 87');
test(minEnd(7, 32), 38, 'Test 88');
test(minEnd(5, 12), 28, 'Test 89');
test(minEnd(1, 2048), 2048, 'Test 90');
test(minEnd(2, 1073741823), 2147483647, 'Test 91');
test(minEnd(14, 1023), 14335, 'Test 92');
test(minEnd(50, 1024), 1073, 'Test 93');
test(minEnd(200, 8192), 8391, 'Test 94');
test(minEnd(128, 16383), 2097151, 'Test 95');
test(minEnd(20, 3), 79, 'Test 96');
test(minEnd(11, 512), 522, 'Test 97');
test(minEnd(10, 256), 265, 'Test 98');
test(minEnd(1, 8191), 8191, 'Test 99');
test(minEnd(1, 1048575), 1048575, 'Test 100');
test(minEnd(30, 8191), 245759, 'Test 101');
test(minEnd(4, 17), 23, 'Test 102');
test(minEnd(5, 10), 26, 'Test 103');
test(minEnd(30, 512), 541, 'Test 104');
test(minEnd(15, 7), 119, 'Test 105');
test(minEnd(9, 255), 2303, 'Test 106');

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
