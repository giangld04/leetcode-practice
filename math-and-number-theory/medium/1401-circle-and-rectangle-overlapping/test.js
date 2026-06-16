// Test: 1401. Circle And Rectangle Overlapping
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { checkOverlap } = require("./solution");

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

console.log("\n1401. Circle And Rectangle Overlapping\n");

test(checkOverlap(3, -3, -4, -6, -6, -2, -2), true, 'Test 1');
test(checkOverlap(2, -2, -2, -5, -5, -3, -3), true, 'Test 2');
test(checkOverlap(5, 0, 0, -5, -5, 5, 5), true, 'Test 3');
test(checkOverlap(1, 0, 0, 1, -1, 3, 1), true, 'Test 4');
test(checkOverlap(1, 0, 0, -1, 0, 0, 1), true, 'Test 5');
test(checkOverlap(2, 3, 4, 0, 0, 2, 2), false, 'Test 6');
test(checkOverlap(3, -3, 4, -5, 1, -1, 8), true, 'Test 7');
test(checkOverlap(2, -2, -2, -4, -4, 0, 0), true, 'Test 8');
test(checkOverlap(1, 1, 1, 1, -3, 2, -1), false, 'Test 9');
test(checkOverlap(5, 5, 5, 0, 0, 10, 10), true, 'Test 10');
test(checkOverlap(15, -10, -10, -20, -20, -5, -5), true, 'Test 11');
test(checkOverlap(8, -20, -20, -25, -25, -15, -15), true, 'Test 12');
test(checkOverlap(1, 0, 0, -1, -1, 1, 1), true, 'Test 13');
test(checkOverlap(25, -30, 30, -50, 10, -10, 50), true, 'Test 14');
test(checkOverlap(100, 1000, 1000, 900, 900, 1050, 1050), true, 'Test 15');
test(checkOverlap(4, 1, 1, -2, -2, 2, 2), true, 'Test 16');
test(checkOverlap(3, 0, 0, -3, -3, 3, 3), true, 'Test 17');
test(checkOverlap(1, 10, 10, 11, 11, 13, 13), false, 'Test 18');
test(checkOverlap(1, -4, -4, -5, -5, -3, -3), true, 'Test 19');
test(checkOverlap(20, 50, 50, 20, 20, 80, 80), true, 'Test 20');
test(checkOverlap(7, 2500, -2500, 2490, -2510, 2510, -2490), true, 'Test 21');
test(checkOverlap(12, 18, 18, 10, 10, 26, 26), true, 'Test 22');
test(checkOverlap(10, 0, 0, -20, -20, 20, 20), true, 'Test 23');
test(checkOverlap(1, -10000, -10000, -10001, -10001, -9999, -9999), true, 'Test 24');
test(checkOverlap(7, 0, 0, -8, -8, 8, 8), true, 'Test 25');
test(checkOverlap(1, 2, 3, 1, 2, 3, 4), true, 'Test 26');
test(checkOverlap(9, 0, -1, -5, -10, 5, -5), true, 'Test 27');
test(checkOverlap(15, 25, -25, 15, -35, 35, -15), true, 'Test 28');
test(checkOverlap(4, 10, 10, 5, 5, 15, 15), true, 'Test 29');
test(checkOverlap(10, -15, -15, -25, -25, -5, -5), true, 'Test 30');
test(checkOverlap(1000, 10000, 10000, 9999, 9999, 10001, 10001), true, 'Test 31');
test(checkOverlap(2, 3, 4, 2, 3, 4, 5), true, 'Test 32');
test(checkOverlap(1, 5, 0, 4, -1, 6, 1), true, 'Test 33');
test(checkOverlap(12, -200, 200, -220, 180, -180, 220), true, 'Test 34');
test(checkOverlap(1, 0, 0, -1, -1, 0, 0), true, 'Test 35');
test(checkOverlap(100, -500, 500, -600, 400, -400, 600), true, 'Test 36');
test(checkOverlap(4, 0, 0, 4, 4, 5, 5), false, 'Test 37');
test(checkOverlap(10, -10, -10, -20, -20, 0, 0), true, 'Test 38');
test(checkOverlap(2000, -10000, -10000, -10001, -10001, -9999, -9999), true, 'Test 39');
test(checkOverlap(10, 0, 0, -5, -5, 5, 5), true, 'Test 40');
test(checkOverlap(9, 15, 15, 10, 10, 20, 20), true, 'Test 41');
test(checkOverlap(10, 0, 0, -10, -10, 10, 10), true, 'Test 42');
test(checkOverlap(6, -5, 5, -10, 0, 0, 10), true, 'Test 43');
test(checkOverlap(2, 5, 5, 3, 3, 7, 7), true, 'Test 44');
test(checkOverlap(10, 10000, 10000, 9990, 9990, 10010, 10010), true, 'Test 45');
test(checkOverlap(2000, 0, 0, -2001, -2001, 2001, 2001), true, 'Test 46');
test(checkOverlap(3, 10, 10, 5, 5, 15, 15), true, 'Test 47');
test(checkOverlap(1, 0, 0, 2, 2, 3, 3), false, 'Test 48');
test(checkOverlap(500, 5000, 5000, 4500, 4500, 5500, 5500), true, 'Test 49');
test(checkOverlap(2, -100, 100, -110, 90, -90, 110), true, 'Test 50');
test(checkOverlap(4, -10, 10, -15, 5, -5, 15), true, 'Test 51');
test(checkOverlap(1, 500, 500, 499, 499, 501, 501), true, 'Test 52');
test(checkOverlap(10, -10000, 10000, -10010, 9990, -9990, 10010), true, 'Test 53');
test(checkOverlap(20, 0, 0, -30, -30, 30, 30), true, 'Test 54');
test(checkOverlap(1, 0, 0, -2, -2, -1, -1), false, 'Test 55');
test(checkOverlap(2, 0, 0, 0, 0, 4, 4), true, 'Test 56');
test(checkOverlap(1, 10000, 10000, 9999, 9999, 10001, 10001), true, 'Test 57');
test(checkOverlap(10, 20, 20, 15, 15, 25, 25), true, 'Test 58');
test(checkOverlap(2, -6, -6, -10, -10, -5, -5), true, 'Test 59');
test(checkOverlap(12, 0, 0, -10, -10, 10, 10), true, 'Test 60');
test(checkOverlap(1, -10, -10, -13, -13, -11, -11), false, 'Test 61');
test(checkOverlap(1, 0, 0, 1, 1, 2, 2), false, 'Test 62');
test(checkOverlap(6, -2, 4, -6, 0, 0, 6), true, 'Test 63');
test(checkOverlap(5, 25, 25, 20, 20, 30, 30), true, 'Test 64');
test(checkOverlap(15, 15, 15, 20, 20, 30, 30), true, 'Test 65');
test(checkOverlap(2, -2, -3, -4, -5, -3, -4), true, 'Test 66');
test(checkOverlap(2000, 0, 0, -10000, -10000, 10000, 10000), true, 'Test 67');
test(checkOverlap(8, 12, 12, 8, 8, 16, 16), true, 'Test 68');
test(checkOverlap(15, -10, 10, -20, -10, 0, 10), true, 'Test 69');
test(checkOverlap(300, -750, 750, -1000, 500, -500, 1000), true, 'Test 70');
test(checkOverlap(3, 20, -20, 15, -25, 25, -15), true, 'Test 71');
test(checkOverlap(15, 50, 50, 40, 40, 60, 60), true, 'Test 72');
test(checkOverlap(2000, 5000, 5000, 0, 0, 10000, 10000), true, 'Test 73');
test(checkOverlap(5, 10, 10, 5, 5, 15, 15), true, 'Test 74');
test(checkOverlap(4, -4, -4, -6, -6, -2, -2), true, 'Test 75');
test(checkOverlap(15, 15, 15, 10, 10, 20, 20), true, 'Test 76');
test(checkOverlap(3, -3, 3, -6, 0, 0, 6), true, 'Test 77');
test(checkOverlap(1, 10000, -10000, 9999, -10001, 10001, -9999), true, 'Test 78');
test(checkOverlap(8, 100, -100, 90, -110, 110, -90), true, 'Test 79');
test(checkOverlap(2000, 0, 0, -3000, -3000, 3000, 3000), true, 'Test 80');
test(checkOverlap(10, 5, 5, 0, 0, 10, 10), true, 'Test 81');
test(checkOverlap(1500, 5000, 5000, 4500, 4500, 5500, 5500), true, 'Test 82');
test(checkOverlap(1, 0, 0, 0, 0, 2, 2), true, 'Test 83');
test(checkOverlap(7, -5, 5, -10, 0, -2, 10), true, 'Test 84');
test(checkOverlap(4, -5, 5, -10, 0, 0, 10), true, 'Test 85');
test(checkOverlap(10, -5, -5, 5, 5, 15, 15), false, 'Test 86');
test(checkOverlap(500, 2500, -2500, 2000, -3000, 3000, -2000), true, 'Test 87');
test(checkOverlap(5, 1, 1, -3, -3, 3, 3), true, 'Test 88');
test(checkOverlap(2000, 1000, 1000, 900, 900, 1100, 1100), true, 'Test 89');
test(checkOverlap(150, 0, 0, -200, -200, 200, 200), true, 'Test 90');
test(checkOverlap(6, -15, -15, -20, -20, -10, -10), true, 'Test 91');
test(checkOverlap(4, 2, 2, -1, -1, 3, 3), true, 'Test 92');
test(checkOverlap(2, 100, 100, 101, 101, 103, 103), true, 'Test 93');
test(checkOverlap(3, 5, 5, 8, 8, 12, 12), false, 'Test 94');
test(checkOverlap(5, -10, -10, -15, -15, -5, -5), true, 'Test 95');
test(checkOverlap(2, 2, 2, 1, 1, 3, 3), true, 'Test 96');
test(checkOverlap(1, 2, 2, 3, 3, 5, 5), false, 'Test 97');
test(checkOverlap(2, -5, -5, -10, -10, -2, -2), true, 'Test 98');
test(checkOverlap(7, -5, -5, -10, -10, -2, -2), true, 'Test 99');
test(checkOverlap(15, -100, -100, -120, -120, -80, -80), true, 'Test 100');
test(checkOverlap(8, 10, -10, 5, -15, 15, -5), true, 'Test 101');
test(checkOverlap(20, -30, 30, -40, 20, -20, 40), true, 'Test 102');
test(checkOverlap(5, -10000, 10000, -10010, 9990, -9990, 10010), true, 'Test 103');
test(checkOverlap(2, 6, 6, 0, 0, 5, 5), true, 'Test 104');
test(checkOverlap(15, -10, 10, -20, -20, 0, 0), true, 'Test 105');
test(checkOverlap(7, 5, -5, 0, -10, 10, 0), true, 'Test 106');
test(checkOverlap(2, 0, 0, -3, -3, -2, -2), false, 'Test 107');
test(checkOverlap(7, 3, -3, 1, -5, 5, -1), true, 'Test 108');
test(checkOverlap(5, 0, 0, -10, -10, 10, 10), true, 'Test 109');
test(checkOverlap(10, 0, 0, -15, -15, 15, 15), true, 'Test 110');
test(checkOverlap(1, 0, 0, 1, 0, 2, 1), true, 'Test 111');
test(checkOverlap(2000, -5000, -5000, -10000, -10000, 0, 0), true, 'Test 112');
test(checkOverlap(4, 15, 15, 10, 10, 20, 20), true, 'Test 113');
test(checkOverlap(50, -100, 100, -150, 50, -50, 150), true, 'Test 114');

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
