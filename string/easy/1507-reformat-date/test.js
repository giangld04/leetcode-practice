// Test: 1507. Reformat Date
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { reformatDate } = require("./solution");

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

console.log("\n1507. Reformat Date\n");

test(reformatDate("15th Aug 2022"), 2022-08-15, 'Test 1');
test(reformatDate("22nd Aug 1999"), 1999-08-22, 'Test 2');
test(reformatDate("3rd Mar 1987"), 1987-03-03, 'Test 3');
test(reformatDate("3rd Nov 2022"), 2022-11-03, 'Test 4');
test(reformatDate("2nd Mar 2020"), 2020-03-02, 'Test 5');
test(reformatDate("15th Nov 2000"), 2000-11-15, 'Test 6');
test(reformatDate("2nd Mar 2010"), 2010-03-02, 'Test 7');
test(reformatDate("31st Dec 2100"), 2100-12-31, 'Test 8');
test(reformatDate("25th Dec 2000"), 2000-12-25, 'Test 9');
test(reformatDate("11th Sep 2023"), 2023-09-11, 'Test 10');
test(reformatDate("15th Nov 1999"), 1999-11-15, 'Test 11');
test(reformatDate("15th Nov 2020"), 2020-11-15, 'Test 12');
test(reformatDate("11th Mar 2000"), 2000-03-11, 'Test 13');
test(reformatDate("5th Sep 1899"), 1899-09-05, 'Test 14');
test(reformatDate("3rd Apr 2015"), 2015-04-03, 'Test 15');
test(reformatDate("26th May 1960"), 1960-05-26, 'Test 16');
test(reformatDate("11th Sep 1999"), 1999-09-11, 'Test 17');
test(reformatDate("28th Feb 1900"), 1900-02-28, 'Test 18');
test(reformatDate("20th Oct 2052"), 2052-10-20, 'Test 19');
test(reformatDate("6th Jun 1933"), 1933-06-06, 'Test 20');
test(reformatDate("2nd Mar 2015"), 2015-03-02, 'Test 21');
test(reformatDate("1st Jan 1900"), 1900-01-01, 'Test 22');
test(reformatDate("28th Feb 1996"), 1996-02-28, 'Test 23');
test(reformatDate("29th Feb 2004"), 2004-02-29, 'Test 24');
test(reformatDate("2nd Feb 2020"), 2020-02-02, 'Test 25');
test(reformatDate("11th Sep 2020"), 2020-09-11, 'Test 26');
test(reformatDate("29th Feb 2000"), 2000-02-29, 'Test 27');
test(reformatDate("8th Feb 1987"), 1987-02-08, 'Test 28');
test(reformatDate("31st Jan 2100"), 2100-01-31, 'Test 29');
test(reformatDate("5th Nov 1999"), 1999-11-05, 'Test 30');
test(reformatDate("22nd Sep 1965"), 1965-09-22, 'Test 31');
test(reformatDate("27th Jun 2012"), 2012-06-27, 'Test 32');
test(reformatDate("30th Nov 2010"), 2010-11-30, 'Test 33');
test(reformatDate("19th Dec 2099"), 2099-12-19, 'Test 34');
test(reformatDate("31st May 2023"), 2023-05-31, 'Test 35');
test(reformatDate("31st Dec 2099"), 2099-12-31, 'Test 36');
test(reformatDate("4th Mar 2003"), 2003-03-04, 'Test 37');
test(reformatDate("24th Jun 2050"), 2050-06-24, 'Test 38');
test(reformatDate("23rd Apr 2040"), 2040-04-23, 'Test 39');
test(reformatDate("27th Sep 2077"), 2077-09-27, 'Test 40');
test(reformatDate("6th Mar 2077"), 2077-03-06, 'Test 41');
test(reformatDate("18th Jun 2050"), 2050-06-18, 'Test 42');
test(reformatDate("10th Oct 2033"), 2033-10-10, 'Test 43');
test(reformatDate("29th Apr 1999"), 1999-04-29, 'Test 44');
test(reformatDate("25th Oct 2050"), 2050-10-25, 'Test 45');
test(reformatDate("14th May 2005"), 2005-05-14, 'Test 46');
test(reformatDate("23rd Oct 2005"), 2005-10-23, 'Test 47');
test(reformatDate("30th Apr 2047"), 2047-04-30, 'Test 48');
test(reformatDate("19th Aug 2076"), 2076-08-19, 'Test 49');
test(reformatDate("21st Jun 1972"), 1972-06-21, 'Test 50');
test(reformatDate("18th May 1950"), 1950-05-18, 'Test 51');
test(reformatDate("4th Nov 2035"), 2035-11-04, 'Test 52');
test(reformatDate("29th Feb 2020"), 2020-02-29, 'Test 53');
test(reformatDate("9th Sep 1987"), 1987-09-09, 'Test 54');
test(reformatDate("31st Jan 1980"), 1980-01-31, 'Test 55');
test(reformatDate("18th Sep 2089"), 2089-09-18, 'Test 56');
test(reformatDate("21st Aug 1955"), 1955-08-21, 'Test 57');
test(reformatDate("30th Nov 1969"), 1969-11-30, 'Test 58');
test(reformatDate("27th Oct 2075"), 2075-10-27, 'Test 59');
test(reformatDate("3rd Nov 2021"), 2021-11-03, 'Test 60');
test(reformatDate("18th Jul 1950"), 1950-07-18, 'Test 61');
test(reformatDate("12th Aug 2022"), 2022-08-12, 'Test 62');
test(reformatDate("19th Dec 2021"), 2021-12-19, 'Test 63');
test(reformatDate("3rd Jul 1970"), 1970-07-03, 'Test 64');
test(reformatDate("7th Dec 2099"), 2099-12-07, 'Test 65');
test(reformatDate("9th Jun 2040"), 2040-06-09, 'Test 66');
test(reformatDate("21st Nov 2050"), 2050-11-21, 'Test 67');
test(reformatDate("16th May 2067"), 2067-05-16, 'Test 68');
test(reformatDate("14th Oct 1960"), 1960-10-14, 'Test 69');
test(reformatDate("25th Dec 1984"), 1984-12-25, 'Test 70');
test(reformatDate("22nd Sep 2050"), 2050-09-22, 'Test 71');
test(reformatDate("28th Feb 2000"), 2000-02-28, 'Test 72');
test(reformatDate("15th Aug 2024"), 2024-08-15, 'Test 73');
test(reformatDate("5th Oct 2100"), 2100-10-05, 'Test 74');
test(reformatDate("22nd Aug 2022"), 2022-08-22, 'Test 75');
test(reformatDate("21st Sep 1989"), 1989-09-21, 'Test 76');
test(reformatDate("22nd Mar 2015"), 2015-03-22, 'Test 77');
test(reformatDate("12th Mar 2021"), 2021-03-12, 'Test 78');
test(reformatDate("13th Dec 2033"), 2033-12-13, 'Test 79');
test(reformatDate("13th Aug 1984"), 1984-08-13, 'Test 80');
test(reformatDate("3rd Mar 2030"), 2030-03-03, 'Test 81');
test(reformatDate("13th Aug 2023"), 2023-08-13, 'Test 82');
test(reformatDate("10th Oct 1899"), 1899-10-10, 'Test 83');
test(reformatDate("17th Mar 1925"), 1925-03-17, 'Test 84');
test(reformatDate("21st Dec 1900"), 1900-12-21, 'Test 85');
test(reformatDate("4th Mar 1921"), 1921-03-04, 'Test 86');
test(reformatDate("24th Jun 1998"), 1998-06-24, 'Test 87');
test(reformatDate("22nd Jul 2034"), 2034-07-22, 'Test 88');
test(reformatDate("25th Jun 2023"), 2023-06-25, 'Test 89');
test(reformatDate("30th Nov 2045"), 2045-11-30, 'Test 90');
test(reformatDate("30th Apr 2000"), 2000-04-30, 'Test 91');
test(reformatDate("28th Feb 1999"), 1999-02-28, 'Test 92');
test(reformatDate("2nd Jan 1901"), 1901-01-02, 'Test 93');
test(reformatDate("1st Mar 2024"), 2024-03-01, 'Test 94');
test(reformatDate("5th Jul 1955"), 1955-07-05, 'Test 95');
test(reformatDate("28th Feb 2001"), 2001-02-28, 'Test 96');
test(reformatDate("9th Dec 2030"), 2030-12-09, 'Test 97');
test(reformatDate("5th Oct 1987"), 1987-10-05, 'Test 98');
test(reformatDate("10th Mar 2012"), 2012-03-10, 'Test 99');
test(reformatDate("7th Jun 2080"), 2080-06-07, 'Test 100');
test(reformatDate("9th Jul 1987"), 1987-07-09, 'Test 101');
test(reformatDate("28th Feb 1901"), 1901-02-28, 'Test 102');
test(reformatDate("7th Jul 2021"), 2021-07-07, 'Test 103');
test(reformatDate("7th Nov 1969"), 1969-11-07, 'Test 104');
test(reformatDate("2nd Mar 1990"), 1990-03-02, 'Test 105');
test(reformatDate("28th Feb 2004"), 2004-02-28, 'Test 106');
test(reformatDate("30th Apr 2077"), 2077-04-30, 'Test 107');
test(reformatDate("30th Apr 2100"), 2100-04-30, 'Test 108');
test(reformatDate("12th Sep 1995"), 1995-09-12, 'Test 109');
test(reformatDate("2nd Apr 2023"), 2023-04-02, 'Test 110');
test(reformatDate("17th Oct 2061"), 2061-10-17, 'Test 111');

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
