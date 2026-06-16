// Test: 3114. Latest Time You Can Obtain After Replacing Characters
// 121 test cases from LeetCodeDataset
// Run: node test.js

const { findLatestTime } = require("./solution");

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

console.log("\n3114. Latest Time You Can Obtain After Replacing Characters\n");

test(findLatestTime("10:?5"), 10:55, 'Test 1');
test(findLatestTime("??:??:"), 11:59, 'Test 2');
test(findLatestTime("??:5?"), 11:59, 'Test 3');
test(findLatestTime("1?:4?"), 11:49, 'Test 4');
test(findLatestTime("1?:?4"), 11:54, 'Test 5');
test(findLatestTime("11:?9"), 11:59, 'Test 6');
test(findLatestTime("?1:59"), 11:59, 'Test 7');
test(findLatestTime("1?:30"), 11:30, 'Test 8');
test(findLatestTime("0?:5?"), 09:59, 'Test 9');
test(findLatestTime("0?:??"), 09:59, 'Test 10');
test(findLatestTime("?9:5?"), 09:59, 'Test 11');
test(findLatestTime("1??:4?"), null, 'Test 12');
test(findLatestTime("1??:59"), null, 'Test 13');
test(findLatestTime("??:?0"), 11:50, 'Test 14');
test(findLatestTime("0??:59"), null, 'Test 15');
test(findLatestTime("00:?1"), 00:51, 'Test 16');
test(findLatestTime("1?:3?"), 11:39, 'Test 17');
test(findLatestTime("1?:??"), 11:59, 'Test 18');
test(findLatestTime("???:59"), null, 'Test 19');
test(findLatestTime("11:5?"), 11:59, 'Test 20');
test(findLatestTime("09:5?"), 09:59, 'Test 21');
test(findLatestTime("0??:?0"), null, 'Test 22');
test(findLatestTime("00:??"), 00:59, 'Test 23');
test(findLatestTime("1?:?0"), 11:50, 'Test 24');
test(findLatestTime("?1:?2"), 11:52, 'Test 25');
test(findLatestTime("0?:0?"), 09:09, 'Test 26');
test(findLatestTime("??:59"), 11:59, 'Test 27');
test(findLatestTime("11:??"), 11:59, 'Test 28');
test(findLatestTime("09:?1"), 09:51, 'Test 29');
test(findLatestTime("???:??"), null, 'Test 30');
test(findLatestTime("01:?7"), 01:57, 'Test 31');
test(findLatestTime("?0:??"), 10:59, 'Test 32');
test(findLatestTime("?:?0"), null, 'Test 33');
test(findLatestTime("10:?0"), 10:50, 'Test 34');
test(findLatestTime("1??:5?"), null, 'Test 35');
test(findLatestTime("12:?9"), null, 'Test 36');
test(findLatestTime("???:5?"), null, 'Test 37');
test(findLatestTime("??:??"), 11:59, 'Test 38');
test(findLatestTime("0?:?0"), 09:50, 'Test 39');
test(findLatestTime("1??:??"), null, 'Test 40');
test(findLatestTime("08:?5"), 08:55, 'Test 41');
test(findLatestTime("0?:?1"), 09:51, 'Test 42');
test(findLatestTime("09:?8"), 09:58, 'Test 43');
test(findLatestTime("???:45"), null, 'Test 44');
test(findLatestTime("1??:10"), null, 'Test 45');
test(findLatestTime("1?:??:??:?9"), 11:59, 'Test 46');
test(findLatestTime("0??:3?"), null, 'Test 47');
test(findLatestTime("??:?9"), 11:59, 'Test 48');
test(findLatestTime("1?:?1"), 11:51, 'Test 49');
test(findLatestTime("1?:??:5?"), 11:59, 'Test 50');
test(findLatestTime("0??:5?"), null, 'Test 51');
test(findLatestTime("1?:50"), 11:50, 'Test 52');
test(findLatestTime("0??:10"), null, 'Test 53');
test(findLatestTime("11:?"), 11:59, 'Test 54');
test(findLatestTime("???:00"), null, 'Test 55');
test(findLatestTime("10:?8"), 10:58, 'Test 56');
test(findLatestTime("11:?5"), 11:55, 'Test 57');
test(findLatestTime("1?:??:45"), 11:59, 'Test 58');
test(findLatestTime("0?:59"), 09:59, 'Test 59');
test(findLatestTime("0?:50"), 09:50, 'Test 60');
test(findLatestTime("09:??"), 09:59, 'Test 61');
test(findLatestTime("?:45"), null, 'Test 62');
test(findLatestTime("?1:??"), 11:59, 'Test 63');
test(findLatestTime("0?:5?:?4"), 09:59, 'Test 64');
test(findLatestTime("???:30"), null, 'Test 65');
test(findLatestTime("1?:?3"), 11:53, 'Test 66');
test(findLatestTime("0?:2?"), 09:29, 'Test 67');
test(findLatestTime("??:0?"), 11:09, 'Test 68');
test(findLatestTime("?0:?8"), 10:58, 'Test 69');
test(findLatestTime("09:?9"), 09:59, 'Test 70');
test(findLatestTime("1??:?4"), null, 'Test 71');
test(findLatestTime("10:?9"), 10:59, 'Test 72');
test(findLatestTime("??:45"), 11:45, 'Test 73');
test(findLatestTime("1??:3?"), null, 'Test 74');
test(findLatestTime("???:25"), null, 'Test 75');
test(findLatestTime("0?:00"), 09:00, 'Test 76');
test(findLatestTime("11:?1"), 11:51, 'Test 77');
test(findLatestTime("??:4?"), 11:49, 'Test 78');
test(findLatestTime("1?:?5"), 11:55, 'Test 79');
test(findLatestTime("?:5?:3?"), null, 'Test 80');
test(findLatestTime("01:?9"), 01:59, 'Test 81');
test(findLatestTime("0?:?5"), 09:55, 'Test 82');
test(findLatestTime("1?:00"), 11:00, 'Test 83');
test(findLatestTime("?:00"), null, 'Test 84');
test(findLatestTime("1?:0?"), 11:09, 'Test 85');
test(findLatestTime("?:?8"), null, 'Test 86');
test(findLatestTime("0?:??:00"), 09:59, 'Test 87');
test(findLatestTime("1?:1?"), 11:19, 'Test 88');
test(findLatestTime("1?:?8"), 11:58, 'Test 89');
test(findLatestTime("??:??:59"), 11:59, 'Test 90');
test(findLatestTime("1?:59"), 11:59, 'Test 91');
test(findLatestTime("0?:??:5?"), 09:59, 'Test 92');
test(findLatestTime("??:00"), 11:00, 'Test 93');
test(findLatestTime("0?:3?"), 09:39, 'Test 94');
test(findLatestTime("10:5?"), 10:59, 'Test 95');
test(findLatestTime("11:?0"), 11:50, 'Test 96');
test(findLatestTime("1?:4?:?5"), 11:49, 'Test 97');
test(findLatestTime("0?:??:1?"), 09:59, 'Test 98');
test(findLatestTime("1??:0?"), null, 'Test 99');
test(findLatestTime("0??:0?"), null, 'Test 100');
test(findLatestTime("09:??:?0"), 09:59, 'Test 101');
test(findLatestTime("?:09"), null, 'Test 102');
test(findLatestTime("0?:?:5?"), null, 'Test 103');
test(findLatestTime("1?:55"), 11:55, 'Test 104');
test(findLatestTime("0?:??:?9"), 09:59, 'Test 105');
test(findLatestTime("?9:?9"), 09:59, 'Test 106');
test(findLatestTime("11:??:5?"), 11:59, 'Test 107');
test(findLatestTime("?8:?8"), 08:58, 'Test 108');
test(findLatestTime("0?:?:??"), null, 'Test 109');
test(findLatestTime("1??:?0"), null, 'Test 110');
test(findLatestTime("09:?0"), 09:50, 'Test 111');
test(findLatestTime("0?:58"), 09:58, 'Test 112');
test(findLatestTime("1?:5?"), 11:59, 'Test 113');
test(findLatestTime("?:??"), null, 'Test 114');
test(findLatestTime("?:59"), null, 'Test 115');
test(findLatestTime("0?:1?"), 09:19, 'Test 116');
test(findLatestTime("0??:?9"), null, 'Test 117');
test(findLatestTime("1?:??:0?"), 11:59, 'Test 118');
test(findLatestTime("0?:4?"), 09:49, 'Test 119');
test(findLatestTime("09:?5"), 09:55, 'Test 120');
test(findLatestTime("1?:?9"), 11:59, 'Test 121');

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
