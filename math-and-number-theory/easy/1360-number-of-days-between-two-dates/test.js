// Test: 1360. Number Of Days Between Two Dates
// 138 test cases from LeetCodeDataset
// Run: node test.js

const { daysBetweenDates } = require("./solution");

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

console.log("\n1360. Number Of Days Between Two Dates\n");

test(daysBetweenDates("2019-02-28", "2019-03-01"), 1, 'Test 1');
test(daysBetweenDates("2020-01-15", "2019-12-31"), 15, 'Test 2');
test(daysBetweenDates("2000-03-01", "2000-02-29"), 1, 'Test 3');
test(daysBetweenDates("2023-10-01", "2023-10-02"), 1, 'Test 4');
test(daysBetweenDates("2022-02-28", "2022-03-01"), 1, 'Test 5');
test(daysBetweenDates("2012-01-01", "2012-12-31"), 365, 'Test 6');
test(daysBetweenDates("2021-10-10", "2021-10-10"), 0, 'Test 7');
test(daysBetweenDates("2021-10-01", "2021-10-10"), 9, 'Test 8');
test(daysBetweenDates("2020-02-28", "2020-03-01"), 2, 'Test 9');
test(daysBetweenDates("1971-01-01", "2100-12-31"), 47481, 'Test 10');
test(daysBetweenDates("2019-06-29", "2019-06-30"), 1, 'Test 11');
test(daysBetweenDates("2023-01-01", "2023-12-31"), 364, 'Test 12');
test(daysBetweenDates("2023-01-01", "2023-01-01"), 0, 'Test 13');
test(daysBetweenDates("2050-06-15", "2050-06-14"), 1, 'Test 14');
test(daysBetweenDates("2023-10-01", "2023-10-01"), 0, 'Test 15');
test(daysBetweenDates("2016-02-29", "2016-02-28"), 1, 'Test 16');
test(daysBetweenDates("2000-02-28", "2000-03-01"), 2, 'Test 17');
test(daysBetweenDates("2023-04-10", "2023-04-01"), 9, 'Test 18');
test(daysBetweenDates("2000-02-29", "2000-03-01"), 1, 'Test 19');
test(daysBetweenDates("2100-02-28", "2100-03-01"), 1, 'Test 20');
test(daysBetweenDates("2023-10-01", "2023-09-01"), 30, 'Test 21');
test(daysBetweenDates("1971-01-02", "1971-01-01"), 1, 'Test 22');
test(daysBetweenDates("2012-02-29", "2012-03-31"), 31, 'Test 23');
test(daysBetweenDates("1985-04-12", "2023-07-25"), 13983, 'Test 24');
test(daysBetweenDates("1972-02-29", "1972-03-01"), 1, 'Test 25');
test(daysBetweenDates("2017-10-01", "2018-10-01"), 365, 'Test 26');
test(daysBetweenDates("2023-06-04", "2023-06-04"), 0, 'Test 27');
test(daysBetweenDates("2004-02-28", "2004-03-01"), 2, 'Test 28');
test(daysBetweenDates("2021-06-30", "2021-09-30"), 92, 'Test 29');
test(daysBetweenDates("2004-03-01", "2004-02-29"), 1, 'Test 30');
test(daysBetweenDates("2025-01-01", "2026-01-01"), 365, 'Test 31');
test(daysBetweenDates("2024-03-01", "2024-02-29"), 1, 'Test 32');
test(daysBetweenDates("2023-11-30", "2023-12-01"), 1, 'Test 33');
test(daysBetweenDates("2100-01-01", "2100-12-31"), 364, 'Test 34');
test(daysBetweenDates("2020-02-29", "2020-03-01"), 1, 'Test 35');
test(daysBetweenDates("2015-06-30", "2016-06-30"), 366, 'Test 36');
test(daysBetweenDates("1980-02-29", "1981-02-28"), 365, 'Test 37');
test(daysBetweenDates("2099-12-31", "2100-01-01"), 1, 'Test 38');
test(daysBetweenDates("2023-06-01", "2023-07-01"), 30, 'Test 39');
test(daysBetweenDates("2100-12-31", "2099-12-31"), 365, 'Test 40');
test(daysBetweenDates("2020-02-01", "2021-02-01"), 366, 'Test 41');
test(daysBetweenDates("2000-01-01", "2100-12-31"), 36889, 'Test 42');
test(daysBetweenDates("2016-02-29", "2017-02-28"), 365, 'Test 43');
test(daysBetweenDates("2020-01-31", "2020-02-29"), 29, 'Test 44');
test(daysBetweenDates("1980-02-28", "1980-03-01"), 2, 'Test 45');
test(daysBetweenDates("2050-11-15", "2050-11-15"), 0, 'Test 46');
test(daysBetweenDates("2099-12-30", "2100-01-01"), 2, 'Test 47');
test(daysBetweenDates("2024-11-01", "2023-11-01"), 366, 'Test 48');
test(daysBetweenDates("2016-06-30", "2016-06-01"), 29, 'Test 49');
test(daysBetweenDates("2023-02-28", "2024-02-29"), 366, 'Test 50');
test(daysBetweenDates("2019-01-31", "2019-02-28"), 28, 'Test 51');
test(daysBetweenDates("2021-01-01", "2021-12-31"), 364, 'Test 52');
test(daysBetweenDates("2024-02-28", "2024-02-29"), 1, 'Test 53');
test(daysBetweenDates("2004-12-31", "2005-01-01"), 1, 'Test 54');
test(daysBetweenDates("2023-06-05", "2023-06-04"), 1, 'Test 55');
test(daysBetweenDates("2016-02-28", "2016-02-29"), 1, 'Test 56');
test(daysBetweenDates("2023-04-30", "2023-05-01"), 1, 'Test 57');
test(daysBetweenDates("2019-12-31", "2020-01-01"), 1, 'Test 58');
test(daysBetweenDates("2025-12-31", "2026-01-01"), 1, 'Test 59');
test(daysBetweenDates("2023-06-30", "2023-07-01"), 1, 'Test 60');
test(daysBetweenDates("2000-02-29", "2004-02-29"), 1461, 'Test 61');
test(daysBetweenDates("2021-12-31", "2022-01-01"), 1, 'Test 62');
test(daysBetweenDates("2024-02-28", "2024-03-01"), 2, 'Test 63');
test(daysBetweenDates("2077-07-04", "2077-07-05"), 1, 'Test 64');
test(daysBetweenDates("2018-04-30", "2018-05-01"), 1, 'Test 65');
test(daysBetweenDates("2019-10-15", "2020-10-15"), 366, 'Test 66');
test(daysBetweenDates("2004-02-29", "2004-03-01"), 1, 'Test 67');
test(daysBetweenDates("2012-12-31", "2013-01-01"), 1, 'Test 68');
test(daysBetweenDates("1999-02-28", "1999-03-01"), 1, 'Test 69');
test(daysBetweenDates("2023-10-01", "2023-09-29"), 2, 'Test 70');
test(daysBetweenDates("2012-02-28", "2012-03-01"), 2, 'Test 71');
test(daysBetweenDates("2020-03-01", "2020-02-28"), 2, 'Test 72');
test(daysBetweenDates("2020-02-29", "2019-02-28"), 366, 'Test 73');
test(daysBetweenDates("2000-01-01", "2000-12-31"), 365, 'Test 74');
test(daysBetweenDates("2023-10-15", "2024-10-15"), 366, 'Test 75');
test(daysBetweenDates("2023-08-31", "2023-09-01"), 1, 'Test 76');
test(daysBetweenDates("2024-02-29", "2024-03-01"), 1, 'Test 77');
test(daysBetweenDates("2015-06-15", "2015-06-14"), 1, 'Test 78');
test(daysBetweenDates("2000-01-01", "2004-01-01"), 1461, 'Test 79');
test(daysBetweenDates("1999-12-31", "1971-01-01"), 10591, 'Test 80');
test(daysBetweenDates("2024-12-31", "2025-01-01"), 1, 'Test 81');
test(daysBetweenDates("1980-06-15", "1980-07-15"), 30, 'Test 82');
test(daysBetweenDates("2023-03-01", "2023-02-28"), 1, 'Test 83');
test(daysBetweenDates("2023-10-02", "2023-10-01"), 1, 'Test 84');
test(daysBetweenDates("2020-03-01", "2020-02-29"), 1, 'Test 85');
test(daysBetweenDates("2050-06-15", "2050-07-15"), 30, 'Test 86');
test(daysBetweenDates("2021-06-01", "2022-06-01"), 365, 'Test 87');
test(daysBetweenDates("2023-12-31", "2023-01-01"), 364, 'Test 88');
test(daysBetweenDates("2019-12-31", "2020-01-31"), 31, 'Test 89');
test(daysBetweenDates("2023-05-31", "2023-06-01"), 1, 'Test 90');
test(daysBetweenDates("1971-01-01", "1971-01-02"), 1, 'Test 91');
test(daysBetweenDates("1996-02-29", "1997-02-28"), 365, 'Test 92');
test(daysBetweenDates("2023-12-31", "2024-01-01"), 1, 'Test 93');
test(daysBetweenDates("2019-11-11", "2020-02-29"), 110, 'Test 94');
test(daysBetweenDates("2100-12-31", "2100-01-01"), 364, 'Test 95');
test(daysBetweenDates("2023-01-31", "2023-02-28"), 28, 'Test 96');
test(daysBetweenDates("2100-12-31", "2100-12-30"), 1, 'Test 97');
test(daysBetweenDates("2023-09-30", "2023-10-01"), 1, 'Test 98');
test(daysBetweenDates("2023-10-31", "2023-11-01"), 1, 'Test 99');
test(daysBetweenDates("2023-11-05", "2024-11-05"), 366, 'Test 100');
test(daysBetweenDates("2019-02-28", "2020-02-29"), 366, 'Test 101');
test(daysBetweenDates("1972-02-28", "1972-02-29"), 1, 'Test 102');
test(daysBetweenDates("2023-10-15", "2023-10-15"), 0, 'Test 103');
test(daysBetweenDates("2019-06-15", "2019-06-14"), 1, 'Test 104');
test(daysBetweenDates("1996-02-28", "1996-02-29"), 1, 'Test 105');
test(daysBetweenDates("1996-04-15", "1996-05-15"), 30, 'Test 106');
test(daysBetweenDates("1980-03-01", "1980-02-29"), 1, 'Test 107');
test(daysBetweenDates("2023-10-15", "2022-10-15"), 365, 'Test 108');
test(daysBetweenDates("2024-03-15", "2024-03-01"), 14, 'Test 109');
test(daysBetweenDates("2024-03-01", "2025-03-01"), 365, 'Test 110');
test(daysBetweenDates("2023-06-04", "2023-06-05"), 1, 'Test 111');
test(daysBetweenDates("2022-12-31", "2023-01-01"), 1, 'Test 112');
test(daysBetweenDates("2000-01-01", "2001-01-01"), 366, 'Test 113');
test(daysBetweenDates("2023-11-01", "2024-11-01"), 366, 'Test 114');
test(daysBetweenDates("1971-01-01", "1971-12-31"), 364, 'Test 115');
test(daysBetweenDates("2050-12-31", "2051-01-01"), 1, 'Test 116');
test(daysBetweenDates("2000-02-29", "1999-02-28"), 366, 'Test 117');
test(daysBetweenDates("2004-02-28", "2004-02-29"), 1, 'Test 118');
test(daysBetweenDates("2020-01-01", "2020-12-31"), 365, 'Test 119');
test(daysBetweenDates("2012-02-29", "2012-03-01"), 1, 'Test 120');
test(daysBetweenDates("2024-02-28", "2025-02-28"), 366, 'Test 121');
test(daysBetweenDates("2012-02-29", "2013-02-28"), 365, 'Test 122');
test(daysBetweenDates("2020-02-28", "2020-02-29"), 1, 'Test 123');
test(daysBetweenDates("2016-06-01", "2016-06-30"), 29, 'Test 124');
test(daysBetweenDates("2008-02-29", "2009-02-28"), 365, 'Test 125');
test(daysBetweenDates("2023-02-14", "2023-03-14"), 28, 'Test 126');
test(daysBetweenDates("2023-07-31", "2023-08-01"), 1, 'Test 127');
test(daysBetweenDates("1987-07-04", "1999-07-04"), 4383, 'Test 128');
test(daysBetweenDates("2023-10-01", "2023-09-30"), 1, 'Test 129');
test(daysBetweenDates("2016-02-28", "2016-03-01"), 2, 'Test 130');
test(daysBetweenDates("1980-02-29", "1980-03-01"), 1, 'Test 131');
test(daysBetweenDates("2025-06-15", "2026-06-15"), 365, 'Test 132');
test(daysBetweenDates("2023-01-01", "2024-01-01"), 365, 'Test 133');
test(daysBetweenDates("2023-05-05", "2022-05-05"), 365, 'Test 134');
test(daysBetweenDates("2023-09-29", "2023-10-01"), 2, 'Test 135');
test(daysBetweenDates("2016-02-29", "2016-03-01"), 1, 'Test 136');
test(daysBetweenDates("1999-12-31", "2000-01-01"), 1, 'Test 137');
test(daysBetweenDates("2019-09-15", "2023-09-15"), 1461, 'Test 138');

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
