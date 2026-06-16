// Test: 1154. Day Of The Year
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { dayOfYear } = require("./solution");

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

console.log("\n1154. Day Of The Year\n");

test(dayOfYear("2017-03-01"), 60, 'Test 1');
test(dayOfYear("2019-01-09"), 9, 'Test 2');
test(dayOfYear("1900-02-28"), 59, 'Test 3');
test(dayOfYear("2000-03-01"), 61, 'Test 4');
test(dayOfYear("2018-08-20"), 232, 'Test 5');
test(dayOfYear("2019-06-30"), 181, 'Test 6');
test(dayOfYear("1900-12-31"), 365, 'Test 7');
test(dayOfYear("2019-06-15"), 166, 'Test 8');
test(dayOfYear("2019-02-10"), 41, 'Test 9');
test(dayOfYear("1901-01-01"), 1, 'Test 10');
test(dayOfYear("2000-02-29"), 60, 'Test 11');
test(dayOfYear("2019-11-15"), 319, 'Test 12');
test(dayOfYear("2019-05-25"), 145, 'Test 13');
test(dayOfYear("2019-12-31"), 365, 'Test 14');
test(dayOfYear("2016-03-01"), 61, 'Test 15');
test(dayOfYear("2021-01-01"), 1, 'Test 16');
test(dayOfYear("2018-08-22"), 234, 'Test 17');
test(dayOfYear("2020-02-29"), 60, 'Test 18');
test(dayOfYear("1900-01-01"), 1, 'Test 19');
test(dayOfYear("2016-02-29"), 60, 'Test 20');
test(dayOfYear("2019-07-17"), 198, 'Test 21');
test(dayOfYear("1999-02-28"), 59, 'Test 22');
test(dayOfYear("2019-12-15"), 349, 'Test 23');
test(dayOfYear("2019-09-05"), 248, 'Test 24');
test(dayOfYear("2019-06-21"), 172, 'Test 25');
test(dayOfYear("2023-02-28"), 59, 'Test 26');
test(dayOfYear("2020-12-31"), 366, 'Test 27');
test(dayOfYear("2018-06-30"), 181, 'Test 28');
test(dayOfYear("2019-09-30"), 273, 'Test 29');
test(dayOfYear("2019-07-25"), 206, 'Test 30');
test(dayOfYear("2023-01-01"), 1, 'Test 31');
test(dayOfYear("2019-10-15"), 288, 'Test 32');
test(dayOfYear("2019-08-15"), 227, 'Test 33');
test(dayOfYear("2004-02-29"), 60, 'Test 34');
test(dayOfYear("2018-03-15"), 74, 'Test 35');
test(dayOfYear("2019-03-01"), 60, 'Test 36');
test(dayOfYear("2019-07-18"), 199, 'Test 37');
test(dayOfYear("2019-12-19"), 353, 'Test 38');
test(dayOfYear("2019-03-20"), 79, 'Test 39');
test(dayOfYear("2021-12-31"), 365, 'Test 40');
test(dayOfYear("1996-06-30"), 182, 'Test 41');
test(dayOfYear("2019-08-05"), 217, 'Test 42');
test(dayOfYear("2019-06-25"), 176, 'Test 43');
test(dayOfYear("1900-03-01"), 60, 'Test 44');
test(dayOfYear("2019-12-20"), 354, 'Test 45');
test(dayOfYear("2018-03-01"), 60, 'Test 46');
test(dayOfYear("2024-02-29"), 60, 'Test 47');
test(dayOfYear("2019-12-05"), 339, 'Test 48');
test(dayOfYear("2019-06-05"), 156, 'Test 49');
test(dayOfYear("2001-02-28"), 59, 'Test 50');
test(dayOfYear("2017-04-30"), 120, 'Test 51');
test(dayOfYear("2018-02-28"), 59, 'Test 52');
test(dayOfYear("2019-01-01"), 1, 'Test 53');
test(dayOfYear("2017-01-01"), 1, 'Test 54');
test(dayOfYear("2019-05-31"), 151, 'Test 55');
test(dayOfYear("2016-12-31"), 366, 'Test 56');
test(dayOfYear("2019-10-10"), 283, 'Test 57');
test(dayOfYear("2012-06-17"), 169, 'Test 58');
test(dayOfYear("2024-06-30"), 182, 'Test 59');
test(dayOfYear("2000-02-28"), 59, 'Test 60');
test(dayOfYear("2019-04-25"), 115, 'Test 61');
test(dayOfYear("2004-03-01"), 61, 'Test 62');
test(dayOfYear("2023-12-31"), 365, 'Test 63');
test(dayOfYear("1987-07-04"), 185, 'Test 64');
test(dayOfYear("2019-06-10"), 161, 'Test 65');
test(dayOfYear("2019-10-31"), 304, 'Test 66');
test(dayOfYear("2019-08-10"), 222, 'Test 67');
test(dayOfYear("2019-01-31"), 31, 'Test 68');
test(dayOfYear("2019-12-30"), 364, 'Test 69');
test(dayOfYear("2018-07-24"), 205, 'Test 70');
test(dayOfYear("2020-01-01"), 1, 'Test 71');
test(dayOfYear("2019-07-10"), 191, 'Test 72');
test(dayOfYear("2019-02-28"), 59, 'Test 73');
test(dayOfYear("2019-08-22"), 234, 'Test 74');
test(dayOfYear("2023-03-01"), 60, 'Test 75');
test(dayOfYear("2019-11-10"), 314, 'Test 76');
test(dayOfYear("2021-11-11"), 315, 'Test 77');
test(dayOfYear("2024-02-28"), 59, 'Test 78');
test(dayOfYear("2021-03-01"), 60, 'Test 79');
test(dayOfYear("2019-10-05"), 278, 'Test 80');
test(dayOfYear("1955-10-31"), 304, 'Test 81');
test(dayOfYear("2020-02-28"), 59, 'Test 82');
test(dayOfYear("2019-12-01"), 335, 'Test 83');
test(dayOfYear("2019-05-15"), 135, 'Test 84');
test(dayOfYear("1899-12-31"), 365, 'Test 85');
test(dayOfYear("2000-01-01"), 1, 'Test 86');
test(dayOfYear("2100-02-28"), 59, 'Test 87');
test(dayOfYear("1904-02-28"), 59, 'Test 88');
test(dayOfYear("2019-03-30"), 89, 'Test 89');
test(dayOfYear("1999-12-31"), 365, 'Test 90');
test(dayOfYear("2019-11-30"), 334, 'Test 91');
test(dayOfYear("2012-02-29"), 60, 'Test 92');
test(dayOfYear("2019-07-15"), 196, 'Test 93');
test(dayOfYear("2019-04-30"), 120, 'Test 94');
test(dayOfYear("2019-08-31"), 243, 'Test 95');
test(dayOfYear("1904-12-31"), 366, 'Test 96');
test(dayOfYear("2020-07-15"), 197, 'Test 97');
test(dayOfYear("2019-09-27"), 270, 'Test 98');
test(dayOfYear("2019-01-02"), 2, 'Test 99');
test(dayOfYear("1916-04-15"), 106, 'Test 100');
test(dayOfYear("2019-03-31"), 90, 'Test 101');
test(dayOfYear("2024-03-01"), 61, 'Test 102');
test(dayOfYear("2019-05-20"), 140, 'Test 103');
test(dayOfYear("2018-08-31"), 243, 'Test 104');
test(dayOfYear("1904-02-29"), 60, 'Test 105');
test(dayOfYear("2019-04-01"), 91, 'Test 106');
test(dayOfYear("2019-11-20"), 324, 'Test 107');
test(dayOfYear("2019-09-15"), 258, 'Test 108');
test(dayOfYear("2019-10-12"), 285, 'Test 109');
test(dayOfYear("2019-09-10"), 253, 'Test 110');
test(dayOfYear("2019-12-25"), 359, 'Test 111');
test(dayOfYear("2019-11-01"), 305, 'Test 112');
test(dayOfYear("2019-08-09"), 221, 'Test 113');
test(dayOfYear("2019-03-25"), 84, 'Test 114');
test(dayOfYear("2020-03-01"), 61, 'Test 115');
test(dayOfYear("2019-12-10"), 344, 'Test 116');
test(dayOfYear("2019-11-05"), 309, 'Test 117');
test(dayOfYear("2019-07-31"), 212, 'Test 118');
test(dayOfYear("2019-11-08"), 312, 'Test 119');

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
