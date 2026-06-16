// Test: 319. Bulb Switcher
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { bulbSwitch } = require("./solution");

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

console.log("\n319. Bulb Switcher\n");

test(bulbSwitch(0), 0, 'Test 1');
test(bulbSwitch(3), 1, 'Test 2');
test(bulbSwitch(100), 10, 'Test 3');
test(bulbSwitch(4), 2, 'Test 4');
test(bulbSwitch(16), 4, 'Test 5');
test(bulbSwitch(9), 3, 'Test 6');
test(bulbSwitch(1000000), 1000, 'Test 7');
test(bulbSwitch(1), 1, 'Test 8');
test(bulbSwitch(1000000000), 31622, 'Test 9');
test(bulbSwitch(1000), 31, 'Test 10');
test(bulbSwitch(10), 3, 'Test 11');
test(bulbSwitch(25), 5, 'Test 12');
test(bulbSwitch(1089), 33, 'Test 13');
test(bulbSwitch(729), 27, 'Test 14');
test(bulbSwitch(324), 18, 'Test 15');
test(bulbSwitch(2304), 48, 'Test 16');
test(bulbSwitch(23), 4, 'Test 17');
test(bulbSwitch(2048), 45, 'Test 18');
test(bulbSwitch(5000), 70, 'Test 19');
test(bulbSwitch(36), 6, 'Test 20');
test(bulbSwitch(529), 23, 'Test 21');
test(bulbSwitch(676), 26, 'Test 22');
test(bulbSwitch(2500), 50, 'Test 23');
test(bulbSwitch(32768), 181, 'Test 24');
test(bulbSwitch(1156), 34, 'Test 25');
test(bulbSwitch(100000000), 10000, 'Test 26');
test(bulbSwitch(29), 5, 'Test 27');
test(bulbSwitch(576), 24, 'Test 28');
test(bulbSwitch(144), 12, 'Test 29');
test(bulbSwitch(900), 30, 'Test 30');
test(bulbSwitch(50000), 223, 'Test 31');
test(bulbSwitch(1681), 41, 'Test 32');
test(bulbSwitch(17), 4, 'Test 33');
test(bulbSwitch(1225), 35, 'Test 34');
test(bulbSwitch(784), 28, 'Test 35');
test(bulbSwitch(2401), 49, 'Test 36');
test(bulbSwitch(10000000), 3162, 'Test 37');
test(bulbSwitch(100000), 316, 'Test 38');
test(bulbSwitch(20000), 141, 'Test 39');
test(bulbSwitch(256), 16, 'Test 40');
test(bulbSwitch(2025), 45, 'Test 41');
test(bulbSwitch(81), 9, 'Test 42');
test(bulbSwitch(123456789), 11111, 'Test 43');
test(bulbSwitch(121), 11, 'Test 44');
test(bulbSwitch(999999), 999, 'Test 45');
test(bulbSwitch(2209), 47, 'Test 46');
test(bulbSwitch(999999999), 31622, 'Test 47');
test(bulbSwitch(49), 7, 'Test 48');
test(bulbSwitch(4096), 64, 'Test 49');
test(bulbSwitch(2116), 46, 'Test 50');
test(bulbSwitch(16384), 128, 'Test 51');
test(bulbSwitch(289), 17, 'Test 52');
test(bulbSwitch(23456789), 4843, 'Test 53');
test(bulbSwitch(2), 1, 'Test 54');
test(bulbSwitch(225), 15, 'Test 55');
test(bulbSwitch(8192), 90, 'Test 56');
test(bulbSwitch(1764), 42, 'Test 57');
test(bulbSwitch(65536), 256, 'Test 58');
test(bulbSwitch(1296), 36, 'Test 59');
test(bulbSwitch(987654321), 31426, 'Test 60');
test(bulbSwitch(15), 3, 'Test 61');
test(bulbSwitch(500000), 707, 'Test 62');
test(bulbSwitch(961), 31, 'Test 63');
test(bulbSwitch(196), 14, 'Test 64');
test(bulbSwitch(361), 19, 'Test 65');
test(bulbSwitch(13), 3, 'Test 66');
test(bulbSwitch(625), 25, 'Test 67');
test(bulbSwitch(789456), 888, 'Test 68');
test(bulbSwitch(1600), 40, 'Test 69');
test(bulbSwitch(1849), 43, 'Test 70');
test(bulbSwitch(841), 29, 'Test 71');
test(bulbSwitch(64), 8, 'Test 72');
test(bulbSwitch(484), 22, 'Test 73');
test(bulbSwitch(10000), 100, 'Test 74');
test(bulbSwitch(1024), 32, 'Test 75');
test(bulbSwitch(1369), 37, 'Test 76');
test(bulbSwitch(1936), 44, 'Test 77');
test(bulbSwitch(1444), 38, 'Test 78');
test(bulbSwitch(169), 13, 'Test 79');
test(bulbSwitch(19), 4, 'Test 80');
test(bulbSwitch(400), 20, 'Test 81');
test(bulbSwitch(1049), 32, 'Test 82');
test(bulbSwitch(123456), 351, 'Test 83');
test(bulbSwitch(441), 21, 'Test 84');
test(bulbSwitch(1521), 39, 'Test 85');

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
