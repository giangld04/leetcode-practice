// Test: 2409. Count Days Spent Together
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { countDaysTogether } = require("./solution");

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

console.log("\n2409. Count Days Spent Together\n");

test(countDaysTogether("03-10", "05-20", "04-01", "04-30"), 30, 'Test 1');
test(countDaysTogether("06-15", "06-20", "06-18", "06-25"), 3, 'Test 2');
test(countDaysTogether("10-01", "10-31", "11-01", "12-31"), 0, 'Test 3');
test(countDaysTogether("01-01", "12-31", "01-01", "12-31"), 365, 'Test 4');
test(countDaysTogether("08-15", "08-18", "08-16", "08-19"), 3, 'Test 5');
test(countDaysTogether("12-20", "12-31", "12-25", "12-30"), 6, 'Test 6');
test(countDaysTogether("05-24", "07-24", "07-25", "08-25"), 0, 'Test 7');
test(countDaysTogether("07-20", "08-15", "07-25", "08-10"), 17, 'Test 8');
test(countDaysTogether("07-01", "08-01", "07-15", "07-30"), 16, 'Test 9');
test(countDaysTogether("07-10", "07-20", "07-15", "07-25"), 6, 'Test 10');
test(countDaysTogether("01-01", "01-31", "01-01", "01-31"), 31, 'Test 11');
test(countDaysTogether("03-10", "03-10", "03-10", "03-10"), 1, 'Test 12');
test(countDaysTogether("06-15", "06-15", "06-15", "06-15"), 1, 'Test 13');
test(countDaysTogether("01-01", "01-31", "01-15", "01-20"), 6, 'Test 14');
test(countDaysTogether("03-14", "03-14", "03-14", "03-14"), 1, 'Test 15');
test(countDaysTogether("06-01", "06-30", "05-25", "06-10"), 10, 'Test 16');
test(countDaysTogether("10-01", "10-20", "09-25", "10-25"), 20, 'Test 17');
test(countDaysTogether("11-15", "12-31", "12-01", "12-31"), 31, 'Test 18');
test(countDaysTogether("04-10", "06-10", "05-01", "06-30"), 41, 'Test 19');
test(countDaysTogether("01-10", "02-20", "02-15", "03-25"), 6, 'Test 20');
test(countDaysTogether("09-15", "09-15", "09-15", "09-15"), 1, 'Test 21');
test(countDaysTogether("12-20", "12-31", "12-15", "01-10"), 0, 'Test 22');
test(countDaysTogether("05-05", "07-05", "05-05", "05-05"), 1, 'Test 23');
test(countDaysTogether("02-28", "03-15", "03-01", "03-31"), 15, 'Test 24');
test(countDaysTogether("08-15", "09-15", "09-15", "10-15"), 1, 'Test 25');
test(countDaysTogether("03-05", "03-20", "03-15", "03-25"), 6, 'Test 26');
test(countDaysTogether("03-15", "03-20", "03-10", "03-14"), 0, 'Test 27');
test(countDaysTogether("06-01", "06-30", "06-15", "06-25"), 11, 'Test 28');
test(countDaysTogether("02-28", "03-10", "03-01", "03-15"), 10, 'Test 29');
test(countDaysTogether("01-15", "01-15", "01-15", "01-15"), 1, 'Test 30');
test(countDaysTogether("01-01", "01-31", "01-15", "02-14"), 17, 'Test 31');
test(countDaysTogether("12-15", "12-15", "12-16", "12-16"), 0, 'Test 32');
test(countDaysTogether("11-11", "11-11", "11-11", "11-11"), 1, 'Test 33');
test(countDaysTogether("11-20", "12-15", "11-25", "12-25"), 21, 'Test 34');
test(countDaysTogether("11-11", "11-25", "11-20", "12-10"), 6, 'Test 35');
test(countDaysTogether("04-30", "05-30", "04-15", "05-15"), 16, 'Test 36');
test(countDaysTogether("07-20", "08-10", "07-25", "08-05"), 12, 'Test 37');
test(countDaysTogether("08-05", "10-10", "09-01", "10-05"), 35, 'Test 38');
test(countDaysTogether("08-15", "09-20", "09-05", "10-05"), 16, 'Test 39');
test(countDaysTogether("01-15", "03-20", "02-10", "04-15"), 39, 'Test 40');
test(countDaysTogether("10-20", "11-10", "11-05", "12-15"), 6, 'Test 41');
test(countDaysTogether("06-30", "07-01", "06-29", "07-02"), 2, 'Test 42');
test(countDaysTogether("02-28", "03-01", "03-01", "03-02"), 1, 'Test 43');
test(countDaysTogether("04-01", "04-30", "03-20", "04-25"), 25, 'Test 44');
test(countDaysTogether("09-10", "10-10", "09-15", "09-20"), 6, 'Test 45');
test(countDaysTogether("05-10", "05-10", "05-10", "05-10"), 1, 'Test 46');
test(countDaysTogether("07-20", "07-25", "07-20", "07-25"), 6, 'Test 47');
test(countDaysTogether("08-01", "08-31", "07-20", "08-10"), 10, 'Test 48');
test(countDaysTogether("06-15", "06-20", "06-21", "06-25"), 0, 'Test 49');
test(countDaysTogether("12-15", "12-20", "12-15", "12-20"), 6, 'Test 50');
test(countDaysTogether("11-01", "11-30", "10-25", "11-25"), 25, 'Test 51');
test(countDaysTogether("07-31", "07-31", "08-01", "08-01"), 0, 'Test 52');
test(countDaysTogether("08-01", "08-31", "07-25", "08-15"), 15, 'Test 53');
test(countDaysTogether("02-14", "03-14", "03-01", "04-01"), 14, 'Test 54');
test(countDaysTogether("08-10", "09-10", "09-05", "09-20"), 6, 'Test 55');
test(countDaysTogether("01-01", "01-31", "02-01", "02-28"), 0, 'Test 56');
test(countDaysTogether("03-15", "03-31", "04-01", "04-10"), 0, 'Test 57');
test(countDaysTogether("01-01", "12-31", "06-15", "06-15"), 1, 'Test 58');
test(countDaysTogether("11-15", "11-30", "12-01", "12-31"), 0, 'Test 59');
test(countDaysTogether("09-01", "11-15", "10-01", "10-31"), 31, 'Test 60');
test(countDaysTogether("04-15", "06-20", "05-01", "07-15"), 51, 'Test 61');
test(countDaysTogether("08-20", "09-20", "09-10", "10-10"), 11, 'Test 62');
test(countDaysTogether("07-10", "08-10", "07-20", "08-20"), 22, 'Test 63');
test(countDaysTogether("05-10", "06-10", "05-20", "06-20"), 22, 'Test 64');
test(countDaysTogether("06-01", "06-10", "06-05", "06-05"), 1, 'Test 65');
test(countDaysTogether("11-10", "11-10", "11-11", "11-11"), 0, 'Test 66');
test(countDaysTogether("09-01", "10-31", "08-01", "09-15"), 15, 'Test 67');
test(countDaysTogether("12-15", "12-31", "12-10", "12-15"), 1, 'Test 68');
test(countDaysTogether("07-01", "07-31", "06-25", "07-25"), 25, 'Test 69');
test(countDaysTogether("03-10", "04-10", "04-05", "05-10"), 6, 'Test 70');
test(countDaysTogether("03-31", "03-31", "04-01", "04-01"), 0, 'Test 71');
test(countDaysTogether("09-10", "10-10", "09-15", "10-15"), 26, 'Test 72');
test(countDaysTogether("05-25", "06-05", "05-26", "06-04"), 10, 'Test 73');
test(countDaysTogether("10-15", "10-20", "09-25", "10-16"), 2, 'Test 74');
test(countDaysTogether("09-01", "10-31", "08-15", "09-15"), 15, 'Test 75');
test(countDaysTogether("03-01", "03-31", "02-28", "03-10"), 10, 'Test 76');
test(countDaysTogether("06-01", "08-31", "07-01", "07-31"), 31, 'Test 77');
test(countDaysTogether("07-25", "08-25", "07-26", "07-27"), 2, 'Test 78');
test(countDaysTogether("06-01", "08-31", "07-01", "09-30"), 62, 'Test 79');
test(countDaysTogether("02-15", "03-15", "03-10", "04-10"), 6, 'Test 80');
test(countDaysTogether("04-30", "05-01", "04-29", "05-02"), 2, 'Test 81');
test(countDaysTogether("09-01", "09-15", "08-20", "09-10"), 10, 'Test 82');
test(countDaysTogether("03-15", "03-15", "03-15", "03-15"), 1, 'Test 83');
test(countDaysTogether("05-05", "05-05", "05-04", "05-06"), 1, 'Test 84');
test(countDaysTogether("08-25", "09-05", "09-01", "09-10"), 5, 'Test 85');
test(countDaysTogether("07-05", "08-10", "08-05", "09-15"), 6, 'Test 86');
test(countDaysTogether("09-10", "11-20", "10-01", "10-31"), 31, 'Test 87');
test(countDaysTogether("09-15", "10-15", "10-01", "11-01"), 15, 'Test 88');
test(countDaysTogether("12-15", "12-31", "12-20", "01-15"), 0, 'Test 89');
test(countDaysTogether("05-05", "07-10", "06-01", "06-30"), 30, 'Test 90');
test(countDaysTogether("03-15", "05-15", "04-01", "04-30"), 30, 'Test 91');
test(countDaysTogether("11-10", "11-20", "11-21", "11-30"), 0, 'Test 92');
test(countDaysTogether("02-20", "03-10", "03-05", "04-01"), 6, 'Test 93');
test(countDaysTogether("01-05", "01-10", "01-08", "01-15"), 3, 'Test 94');
test(countDaysTogether("01-29", "02-02", "02-01", "02-28"), 2, 'Test 95');
test(countDaysTogether("10-10", "10-20", "09-30", "10-10"), 1, 'Test 96');
test(countDaysTogether("04-01", "04-30", "04-10", "04-20"), 11, 'Test 97');
test(countDaysTogether("05-15", "06-15", "06-10", "07-10"), 6, 'Test 98');
test(countDaysTogether("02-28", "03-01", "02-28", "03-01"), 2, 'Test 99');
test(countDaysTogether("01-10", "02-10", "02-01", "03-10"), 10, 'Test 100');
test(countDaysTogether("11-01", "11-30", "11-15", "12-15"), 16, 'Test 101');
test(countDaysTogether("05-01", "05-31", "04-30", "05-10"), 10, 'Test 102');
test(countDaysTogether("12-10", "12-31", "12-20", "01-10"), 0, 'Test 103');
test(countDaysTogether("07-20", "08-20", "08-01", "08-19"), 19, 'Test 104');
test(countDaysTogether("01-10", "02-10", "01-15", "03-15"), 27, 'Test 105');
test(countDaysTogether("05-10", "05-15", "05-12", "05-20"), 4, 'Test 106');
test(countDaysTogether("02-28", "03-05", "03-01", "03-10"), 5, 'Test 107');
test(countDaysTogether("02-28", "03-01", "02-29", "03-02"), 1, 'Test 108');
test(countDaysTogether("11-25", "12-10", "12-01", "12-15"), 10, 'Test 109');
test(countDaysTogether("04-10", "04-30", "04-15", "05-15"), 16, 'Test 110');
test(countDaysTogether("07-10", "07-20", "07-20", "07-30"), 1, 'Test 111');
test(countDaysTogether("11-11", "11-30", "11-15", "11-25"), 11, 'Test 112');
test(countDaysTogether("03-20", "03-31", "04-01", "04-10"), 0, 'Test 113');
test(countDaysTogether("09-15", "10-15", "10-10", "11-10"), 6, 'Test 114');
test(countDaysTogether("11-01", "11-15", "10-25", "11-10"), 10, 'Test 115');
test(countDaysTogether("07-20", "08-20", "07-15", "07-25"), 6, 'Test 116');

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
