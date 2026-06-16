// Test: 2579. Count Total Number Of Colored Cells
// 37 test cases from LeetCodeDataset
// Run: node test.js

const { coloredCells } = require("./solution");

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

console.log("\n2579. Count Total Number Of Colored Cells\n");

test(coloredCells(3), 13, 'Test 1');
test(coloredCells(100000), 19999800001, 'Test 2');
test(coloredCells(100), 19801, 'Test 3');
test(coloredCells(10000), 199980001, 'Test 4');
test(coloredCells(2), 5, 'Test 5');
test(coloredCells(1), 1, 'Test 6');
test(coloredCells(1000), 1998001, 'Test 7');
test(coloredCells(10), 181, 'Test 8');
test(coloredCells(15000), 449970001, 'Test 9');
test(coloredCells(99999), 19999400005, 'Test 10');
test(coloredCells(12345), 304773361, 'Test 11');
test(coloredCells(7500), 112485001, 'Test 12');
test(coloredCells(2000), 7996001, 'Test 13');
test(coloredCells(50000), 4999900001, 'Test 14');
test(coloredCells(50), 4901, 'Test 15');
test(coloredCells(5), 41, 'Test 16');
test(coloredCells(30), 1741, 'Test 17');
test(coloredCells(60000), 7199880001, 'Test 18');
test(coloredCells(1500), 4497001, 'Test 19');
test(coloredCells(4), 25, 'Test 20');
test(coloredCells(30000), 1799940001, 'Test 21');
test(coloredCells(1001), 2002001, 'Test 22');
test(coloredCells(85000), 14449830001, 'Test 23');
test(coloredCells(80000), 12799840001, 'Test 24');
test(coloredCells(20000), 799960001, 'Test 25');
test(coloredCells(5000), 49990001, 'Test 26');
test(coloredCells(75000), 11249850001, 'Test 27');
test(coloredCells(20), 761, 'Test 28');
test(coloredCells(40000), 3199920001, 'Test 29');
test(coloredCells(15), 421, 'Test 30');
test(coloredCells(2500), 12495001, 'Test 31');
test(coloredCells(9000), 161982001, 'Test 32');
test(coloredCells(200), 79601, 'Test 33');
test(coloredCells(99998), 19999000013, 'Test 34');
test(coloredCells(500), 499001, 'Test 35');
test(coloredCells(25), 1201, 'Test 36');
test(coloredCells(25000), 1249950001, 'Test 37');

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
