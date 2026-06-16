// Test: 1904. The Number Of Full Rounds You Have Played
// 168 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfRounds } = require("./solution");

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

console.log("\n1904. The Number Of Full Rounds You Have Played\n");

test(numberOfRounds("11:59", "12:01"), 0, 'Test 1');
test(numberOfRounds("14:30", "15:30"), 4, 'Test 2');
test(numberOfRounds("00:01", "00:14"), 0, 'Test 3');
test(numberOfRounds("14:20", "15:50"), 5, 'Test 4');
test(numberOfRounds("00:00", "23:59"), 95, 'Test 5');
test(numberOfRounds("18:14", "18:46"), 2, 'Test 6');
test(numberOfRounds("14:30", "14:45"), 1, 'Test 7');
test(numberOfRounds("23:45", "00:15"), 2, 'Test 8');
test(numberOfRounds("22:15", "23:45"), 6, 'Test 9');
test(numberOfRounds("15:30", "15:30"), 0, 'Test 10');
test(numberOfRounds("14:20", "14:59"), 1, 'Test 11');
test(numberOfRounds("05:45", "06:00"), 1, 'Test 12');
test(numberOfRounds("09:31", "10:14"), 1, 'Test 13');
test(numberOfRounds("00:01", "23:59"), 94, 'Test 14');
test(numberOfRounds("07:45", "08:00"), 1, 'Test 15');
test(numberOfRounds("11:59", "12:00"), 0, 'Test 16');
test(numberOfRounds("23:45", "00:00"), 1, 'Test 17');
test(numberOfRounds("05:00", "06:00"), 4, 'Test 18');
test(numberOfRounds("01:10", "01:55"), 2, 'Test 19');
test(numberOfRounds("01:15", "01:45"), 2, 'Test 20');
test(numberOfRounds("07:15", "07:30"), 1, 'Test 21');
test(numberOfRounds("01:05", "01:40"), 1, 'Test 22');
test(numberOfRounds("21:30", "03:00"), 22, 'Test 23');
test(numberOfRounds("13:00", "13:01"), 0, 'Test 24');
test(numberOfRounds("12:00", "12:15"), 1, 'Test 25');
test(numberOfRounds("05:30", "06:00"), 2, 'Test 26');
test(numberOfRounds("08:45", "09:00"), 1, 'Test 27');
test(numberOfRounds("01:00", "02:30"), 6, 'Test 28');
test(numberOfRounds("18:15", "18:44"), 1, 'Test 29');
test(numberOfRounds("10:15", "11:14"), 3, 'Test 30');
test(numberOfRounds("19:10", "20:50"), 6, 'Test 31');
test(numberOfRounds("07:00", "07:01"), 0, 'Test 32');
test(numberOfRounds("12:16", "12:44"), 0, 'Test 33');
test(numberOfRounds("20:44", "21:00"), 1, 'Test 34');
test(numberOfRounds("12:30", "14:45"), 9, 'Test 35');
test(numberOfRounds("11:15", "11:16"), 0, 'Test 36');
test(numberOfRounds("14:30", "14:30"), 0, 'Test 37');
test(numberOfRounds("18:45", "19:45"), 4, 'Test 38');
test(numberOfRounds("18:00", "07:00"), 52, 'Test 39');
test(numberOfRounds("07:15", "07:15"), 0, 'Test 40');
test(numberOfRounds("08:15", "08:30"), 1, 'Test 41');
test(numberOfRounds("02:10", "05:50"), 14, 'Test 42');
test(numberOfRounds("08:25", "09:50"), 5, 'Test 43');
test(numberOfRounds("01:00", "01:14"), 0, 'Test 44');
test(numberOfRounds("12:30", "13:15"), 3, 'Test 45');
test(numberOfRounds("03:45", "05:10"), 5, 'Test 46');
test(numberOfRounds("06:30", "06:30"), 0, 'Test 47');
test(numberOfRounds("17:45", "18:00"), 1, 'Test 48');
test(numberOfRounds("20:00", "20:14"), 0, 'Test 49');
test(numberOfRounds("23:59", "00:01"), 0, 'Test 50');
test(numberOfRounds("07:07", "07:32"), 1, 'Test 51');
test(numberOfRounds("06:59", "07:01"), 0, 'Test 52');
test(numberOfRounds("14:23", "14:24"), 0, 'Test 53');
test(numberOfRounds("12:10", "12:20"), 0, 'Test 54');
test(numberOfRounds("05:00", "05:00"), 0, 'Test 55');
test(numberOfRounds("02:30", "02:31"), 0, 'Test 56');
test(numberOfRounds("20:00", "04:00"), 32, 'Test 57');
test(numberOfRounds("21:15", "21:45"), 2, 'Test 58');
test(numberOfRounds("00:45", "01:00"), 1, 'Test 59');
test(numberOfRounds("21:10", "21:14"), 0, 'Test 60');
test(numberOfRounds("12:45", "13:45"), 4, 'Test 61');
test(numberOfRounds("00:10", "01:05"), 3, 'Test 62');
test(numberOfRounds("14:00", "14:14"), 0, 'Test 63');
test(numberOfRounds("17:10", "18:55"), 6, 'Test 64');
test(numberOfRounds("06:30", "07:30"), 4, 'Test 65');
test(numberOfRounds("00:44", "00:59"), 0, 'Test 66');
test(numberOfRounds("16:00", "16:01"), 0, 'Test 67');
test(numberOfRounds("09:00", "21:15"), 49, 'Test 68');
test(numberOfRounds("15:10", "15:15"), 0, 'Test 69');
test(numberOfRounds("14:00", "18:30"), 18, 'Test 70');
test(numberOfRounds("20:00", "21:00"), 4, 'Test 71');
test(numberOfRounds("11:10", "11:10"), 0, 'Test 72');
test(numberOfRounds("11:45", "12:44"), 3, 'Test 73');
test(numberOfRounds("07:45", "08:15"), 2, 'Test 74');
test(numberOfRounds("10:00", "10:14"), 0, 'Test 75');
test(numberOfRounds("07:05", "08:10"), 3, 'Test 76');
test(numberOfRounds("08:45", "09:15"), 2, 'Test 77');
test(numberOfRounds("16:45", "17:45"), 4, 'Test 78');
test(numberOfRounds("07:01", "07:14"), 0, 'Test 79');
test(numberOfRounds("11:46", "12:44"), 2, 'Test 80');
test(numberOfRounds("09:00", "16:45"), 31, 'Test 81');
test(numberOfRounds("13:30", "14:00"), 2, 'Test 82');
test(numberOfRounds("20:00", "20:15"), 1, 'Test 83');
test(numberOfRounds("00:00", "04:00"), 16, 'Test 84');
test(numberOfRounds("00:00", "00:15"), 1, 'Test 85');
test(numberOfRounds("07:07", "07:47"), 2, 'Test 86');
test(numberOfRounds("13:46", "13:47"), 0, 'Test 87');
test(numberOfRounds("13:15", "14:15"), 4, 'Test 88');
test(numberOfRounds("14:16", "15:14"), 2, 'Test 89');
test(numberOfRounds("21:00", "21:59"), 3, 'Test 90');
test(numberOfRounds("07:00", "07:14"), 0, 'Test 91');
test(numberOfRounds("01:01", "24:00"), 91, 'Test 92');
test(numberOfRounds("17:15", "17:45"), 2, 'Test 93');
test(numberOfRounds("12:00", "12:00"), 0, 'Test 94');
test(numberOfRounds("03:45", "04:15"), 2, 'Test 95');
test(numberOfRounds("04:45", "05:00"), 1, 'Test 96');
test(numberOfRounds("00:00", "23:45"), 95, 'Test 97');
test(numberOfRounds("02:20", "02:25"), 0, 'Test 98');
test(numberOfRounds("09:45", "10:45"), 4, 'Test 99');
test(numberOfRounds("22:00", "01:30"), 14, 'Test 100');
test(numberOfRounds("07:07", "07:45"), 2, 'Test 101');
test(numberOfRounds("22:45", "23:59"), 4, 'Test 102');
test(numberOfRounds("05:00", "24:00"), 76, 'Test 103');
test(numberOfRounds("02:30", "03:30"), 4, 'Test 104');
test(numberOfRounds("13:23", "14:22"), 3, 'Test 105');
test(numberOfRounds("16:20", "18:55"), 9, 'Test 106');
test(numberOfRounds("00:00", "00:14"), 0, 'Test 107');
test(numberOfRounds("08:20", "09:20"), 3, 'Test 108');
test(numberOfRounds("12:05", "12:20"), 0, 'Test 109');
test(numberOfRounds("03:33", "04:48"), 4, 'Test 110');
test(numberOfRounds("23:00", "23:15"), 1, 'Test 111');
test(numberOfRounds("13:46", "14:14"), 0, 'Test 112');
test(numberOfRounds("15:00", "15:15"), 1, 'Test 113');
test(numberOfRounds("13:15", "13:30"), 1, 'Test 114');
test(numberOfRounds("15:00", "16:00"), 4, 'Test 115');
test(numberOfRounds("03:00", "03:01"), 0, 'Test 116');
test(numberOfRounds("09:00", "09:00"), 0, 'Test 117');
test(numberOfRounds("00:00", "24:00"), 96, 'Test 118');
test(numberOfRounds("19:40", "20:05"), 1, 'Test 119');
test(numberOfRounds("16:00", "17:00"), 4, 'Test 120');
test(numberOfRounds("12:46", "13:14"), 0, 'Test 121');
test(numberOfRounds("03:45", "03:45"), 0, 'Test 122');
test(numberOfRounds("00:15", "00:30"), 1, 'Test 123');
test(numberOfRounds("08:30", "09:00"), 2, 'Test 124');
test(numberOfRounds("23:15", "00:14"), 3, 'Test 125');
test(numberOfRounds("05:55", "06:05"), 0, 'Test 126');
test(numberOfRounds("00:15", "23:59"), 94, 'Test 127');
test(numberOfRounds("10:00", "10:00"), 0, 'Test 128');
test(numberOfRounds("01:59", "02:01"), 0, 'Test 129');
test(numberOfRounds("06:59", "07:00"), 0, 'Test 130');
test(numberOfRounds("23:40", "00:10"), 1, 'Test 131');
test(numberOfRounds("09:00", "09:59"), 3, 'Test 132');
test(numberOfRounds("06:30", "07:00"), 2, 'Test 133');
test(numberOfRounds("01:45", "02:44"), 3, 'Test 134');
test(numberOfRounds("18:00", "18:00"), 0, 'Test 135');
test(numberOfRounds("01:14", "01:46"), 2, 'Test 136');
test(numberOfRounds("23:55", "00:05"), 0, 'Test 137');
test(numberOfRounds("09:00", "18:45"), 39, 'Test 138');
test(numberOfRounds("01:46", "02:14"), 0, 'Test 139');
test(numberOfRounds("09:10", "09:20"), 0, 'Test 140');
test(numberOfRounds("09:00", "09:14"), 0, 'Test 141');
test(numberOfRounds("18:25", "19:50"), 5, 'Test 142');
test(numberOfRounds("23:00", "23:45"), 3, 'Test 143');
test(numberOfRounds("07:05", "08:05"), 3, 'Test 144');
test(numberOfRounds("23:30", "00:30"), 4, 'Test 145');
test(numberOfRounds("10:00", "24:00"), 56, 'Test 146');
test(numberOfRounds("06:30", "09:15"), 11, 'Test 147');
test(numberOfRounds("06:45", "07:00"), 1, 'Test 148');
test(numberOfRounds("00:30", "00:45"), 1, 'Test 149');
test(numberOfRounds("21:00", "22:15"), 5, 'Test 150');
test(numberOfRounds("14:45", "15:00"), 1, 'Test 151');
test(numberOfRounds("00:05", "00:30"), 1, 'Test 152');
test(numberOfRounds("11:59", "12:14"), 0, 'Test 153');
test(numberOfRounds("18:45", "19:10"), 1, 'Test 154');
test(numberOfRounds("13:30", "16:45"), 13, 'Test 155');
test(numberOfRounds("09:44", "09:45"), 0, 'Test 156');
test(numberOfRounds("08:29", "08:40"), 0, 'Test 157');
test(numberOfRounds("14:30", "16:30"), 8, 'Test 158');
test(numberOfRounds("01:05", "02:30"), 5, 'Test 159');
test(numberOfRounds("00:00", "01:00"), 4, 'Test 160');
test(numberOfRounds("05:15", "05:15"), 0, 'Test 161');
test(numberOfRounds("13:20", "13:59"), 1, 'Test 162');
test(numberOfRounds("09:59", "10:00"), 0, 'Test 163');
test(numberOfRounds("10:10", "11:09"), 3, 'Test 164');
test(numberOfRounds("01:10", "01:40"), 1, 'Test 165');
test(numberOfRounds("13:00", "13:14"), 0, 'Test 166');
test(numberOfRounds("23:01", "23:14"), 0, 'Test 167');
test(numberOfRounds("19:15", "20:00"), 3, 'Test 168');

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
