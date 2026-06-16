// Test: 1736. Latest Time By Replacing Hidden Digits
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { maximumTime } = require("./solution");

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

console.log("\n1736. Latest Time By Replacing Hidden Digits\n");

test(maximumTime("?3:?0"), 23:50, 'Test 1');
test(maximumTime("1?:22"), 19:22, 'Test 2');
test(maximumTime("?:59"), Error: list index out of range, 'Test 3');
test(maximumTime("1?:??"), 19:59, 'Test 4');
test(maximumTime("0?:59"), 09:59, 'Test 5');
test(maximumTime("23:?9"), 23:59, 'Test 6');
test(maximumTime("00:?0"), 00:50, 'Test 7');
test(maximumTime("2?:5?"), 23:59, 'Test 8');
test(maximumTime("2?:?0"), 23:50, 'Test 9');
test(maximumTime("?:?:??"), 2:?:9?, 'Test 10');
test(maximumTime("00:??"), 00:59, 'Test 11');
test(maximumTime("1?:?5"), 19:55, 'Test 12');
test(maximumTime("?9:5?"), 19:59, 'Test 13');
test(maximumTime("??:??"), 23:59, 'Test 14');
test(maximumTime("?:00"), Error: list index out of range, 'Test 15');
test(maximumTime("12:3?"), 12:39, 'Test 16');
test(maximumTime("??:00"), 23:00, 'Test 17');
test(maximumTime("0?:3?"), 09:39, 'Test 18');
test(maximumTime("1?:?9"), 19:59, 'Test 19');
test(maximumTime("00:?5"), 00:55, 'Test 20');
test(maximumTime("?9:59"), 19:59, 'Test 21');
test(maximumTime("2?:59"), 23:59, 'Test 22');
test(maximumTime("12:?5"), 12:55, 'Test 23');
test(maximumTime("1?:3?"), 19:39, 'Test 24');
test(maximumTime("20:??"), 20:59, 'Test 25');
test(maximumTime("?4:2?"), 14:29, 'Test 26');
test(maximumTime("2?:3?"), 23:39, 'Test 27');
test(maximumTime("??:45"), 23:45, 'Test 28');
test(maximumTime("23:?0"), 23:50, 'Test 29');
test(maximumTime("??:09"), 23:09, 'Test 30');
test(maximumTime("0?:2?"), 09:29, 'Test 31');
test(maximumTime("?4:?4"), 14:54, 'Test 32');
test(maximumTime("23:?5"), 23:55, 'Test 33');
test(maximumTime("23:?7"), 23:57, 'Test 34');
test(maximumTime("20:?9"), 20:59, 'Test 35');
test(maximumTime("?:23"), Error: list index out of range, 'Test 36');
test(maximumTime("?3:?2"), 23:52, 'Test 37');
test(maximumTime("0?:?4"), 09:54, 'Test 38');
test(maximumTime("?3:?8"), 23:58, 'Test 39');
test(maximumTime("???:59"), 23?:59, 'Test 40');
test(maximumTime("2??:5?"), 23?:5?, 'Test 41');
test(maximumTime("2?:1?"), 23:19, 'Test 42');
test(maximumTime("22:?8"), 22:58, 'Test 43');
test(maximumTime("0?:?9"), 09:59, 'Test 44');
test(maximumTime("2?:??"), 23:59, 'Test 45');
test(maximumTime("0?:?2"), 09:52, 'Test 46');
test(maximumTime("02:?7"), 02:57, 'Test 47');
test(maximumTime("1?:?8"), 19:58, 'Test 48');
test(maximumTime("09:?5"), 09:55, 'Test 49');
test(maximumTime("???:??"), 23?:9?, 'Test 50');
test(maximumTime("09:?3"), 09:53, 'Test 51');
test(maximumTime("?2:?7"), 22:57, 'Test 52');
test(maximumTime("1?:4?"), 19:49, 'Test 53');
test(maximumTime("2?:0?"), 23:09, 'Test 54');
test(maximumTime("??:59"), 23:59, 'Test 55');
test(maximumTime("23:?4"), 23:54, 'Test 56');
test(maximumTime("2??:3?"), 23?:3?, 'Test 57');
test(maximumTime("0??:30"), 09?:30, 'Test 58');
test(maximumTime("0?:?5"), 09:55, 'Test 59');
test(maximumTime("0?:4?"), 09:49, 'Test 60');
test(maximumTime("?:11"), Error: list index out of range, 'Test 61');
test(maximumTime("09:5?"), 09:59, 'Test 62');
test(maximumTime("1?:?0"), 19:50, 'Test 63');
test(maximumTime("?:3?"), Error: list index out of range, 'Test 64');
test(maximumTime("?:22"), Error: list index out of range, 'Test 65');
test(maximumTime("00:?9"), 00:59, 'Test 66');
test(maximumTime("2?:?5"), 23:55, 'Test 67');
test(maximumTime("1?:5?"), 19:59, 'Test 68');
test(maximumTime("19:?9"), 19:59, 'Test 69');
test(maximumTime("1?:?4"), 19:54, 'Test 70');
test(maximumTime("1?:0?"), 19:09, 'Test 71');
test(maximumTime("2?:4?"), 23:49, 'Test 72');
test(maximumTime("?0:?5"), 20:55, 'Test 73');
test(maximumTime("??:?9"), 23:59, 'Test 74');
test(maximumTime("???:00"), 23?:00, 'Test 75');
test(maximumTime("?9:?8"), 19:58, 'Test 76');
test(maximumTime("?3:?9"), 23:59, 'Test 77');
test(maximumTime("0?:5?"), 09:59, 'Test 78');
test(maximumTime("2?:?4"), 23:54, 'Test 79');
test(maximumTime("?9:?9"), 19:59, 'Test 80');
test(maximumTime("2?:00"), 23:00, 'Test 81');
test(maximumTime("?:4?"), Error: list index out of range, 'Test 82');
test(maximumTime("?2:3?"), 22:39, 'Test 83');
test(maximumTime("0?:??"), 09:59, 'Test 84');
test(maximumTime("?4:?8"), 14:58, 'Test 85');
test(maximumTime("?:?5"), Error: list index out of range, 'Test 86');
test(maximumTime("0?:?0"), 09:50, 'Test 87');
test(maximumTime("20:?4"), 20:54, 'Test 88');
test(maximumTime("1?:59"), 19:59, 'Test 89');
test(maximumTime("0?:0?"), 09:09, 'Test 90');
test(maximumTime("23:??"), 23:59, 'Test 91');
test(maximumTime("?0:?0"), 20:50, 'Test 92');
test(maximumTime("0?:1?"), 09:19, 'Test 93');
test(maximumTime("1?:2?"), 19:29, 'Test 94');
test(maximumTime("0?:?8"), 09:58, 'Test 95');
test(maximumTime("19:?8"), 19:58, 'Test 96');
test(maximumTime("?2:?5"), 22:55, 'Test 97');
test(maximumTime("0?:45"), 09:45, 'Test 98');
test(maximumTime("2?:?9"), 23:59, 'Test 99');
test(maximumTime("?3:5?"), 23:59, 'Test 100');
test(maximumTime("?:?9"), Error: list index out of range, 'Test 101');
test(maximumTime("23:?8"), 23:58, 'Test 102');
test(maximumTime("09:??"), 09:59, 'Test 103');
test(maximumTime("2?:?8"), 23:58, 'Test 104');
test(maximumTime("2?:2?"), 23:29, 'Test 105');

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
