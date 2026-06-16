// Test: 1185. Day Of The Week
// 19 test cases from LeetCodeDataset
// Run: node test.js

const { dayOfTheWeek } = require("./solution");

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

console.log("\n1185. Day Of The Week\n");

test(dayOfTheWeek(31, 12, 2100), Friday, 'Test 1');
test(dayOfTheWeek(15, 8, 1993), Sunday, 'Test 2');
test(dayOfTheWeek(10, 9, 2023), Sunday, 'Test 3');
test(dayOfTheWeek(18, 7, 1999), Sunday, 'Test 4');
test(dayOfTheWeek(31, 8, 2019), Saturday, 'Test 5');
test(dayOfTheWeek(4, 7, 2023), Tuesday, 'Test 6');
test(dayOfTheWeek(25, 12, 2023), Monday, 'Test 7');
test(dayOfTheWeek(29, 2, 2004), Sunday, 'Test 8');
test(dayOfTheWeek(1, 1, 1971), Friday, 'Test 9');
test(dayOfTheWeek(29, 2, 2000), Tuesday, 'Test 10');
test(dayOfTheWeek(28, 2, 1900), Wednesday, 'Test 11');
test(dayOfTheWeek(14, 2, 2000), Monday, 'Test 12');
test(dayOfTheWeek(31, 10, 1984), Wednesday, 'Test 13');
test(dayOfTheWeek(1, 3, 1999), Monday, 'Test 14');
test(dayOfTheWeek(14, 3, 2047), Thursday, 'Test 15');
test(dayOfTheWeek(15, 6, 2050), Wednesday, 'Test 16');
test(dayOfTheWeek(30, 4, 2020), Thursday, 'Test 17');
test(dayOfTheWeek(7, 11, 2025), Friday, 'Test 18');
test(dayOfTheWeek(1, 9, 2001), Saturday, 'Test 19');

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
