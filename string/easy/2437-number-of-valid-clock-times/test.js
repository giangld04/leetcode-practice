// Test: 2437. Number Of Valid Clock Times
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { countTime } = require("./solution");

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

console.log("\n2437. Number Of Valid Clock Times\n");

test(countTime("23:?0"), 6, 'Test 1');
test(countTime("23:5?"), 10, 'Test 2');
test(countTime("09:5?"), 10, 'Test 3');
test(countTime("23:?9"), 6, 'Test 4');
test(countTime("1?:?0"), 60, 'Test 5');
test(countTime("00:??"), 60, 'Test 6');
test(countTime("1?:?5"), 60, 'Test 7');
test(countTime("0?:0?"), 100, 'Test 8');
test(countTime("?3:59"), 3, 'Test 9');
test(countTime("1?:2?"), 100, 'Test 10');
test(countTime("09:?9"), 6, 'Test 11');
test(countTime("??:??"), 1440, 'Test 12');
test(countTime("00:00"), 1, 'Test 13');
test(countTime("23:59"), 1, 'Test 14');
test(countTime("1?:30"), 10, 'Test 15');
test(countTime("2?:45"), 4, 'Test 16');
test(countTime("1?:5?"), 100, 'Test 17');
test(countTime("12:??"), 60, 'Test 18');
test(countTime("2?:4?"), 40, 'Test 19');
test(countTime("1??:3?"), 0, 'Test 20');
test(countTime("?3:21"), 3, 'Test 21');
test(countTime("1?:45"), 10, 'Test 22');
test(countTime("1?:?1"), 60, 'Test 23');
test(countTime("12:?5"), 6, 'Test 24');
test(countTime("1?:3?"), 100, 'Test 25');
test(countTime("09:??"), 60, 'Test 26');
test(countTime("12:?3"), 6, 'Test 27');
test(countTime("??:59"), 24, 'Test 28');
test(countTime("?5:00"), 2, 'Test 29');
test(countTime("2?:3?"), 40, 'Test 30');
test(countTime("??:45"), 24, 'Test 31');
test(countTime("?4:??"), 120, 'Test 32');
test(countTime("19:?5"), 6, 'Test 33');
test(countTime("2?:15"), 4, 'Test 34');
test(countTime("2?:?3"), 24, 'Test 35');
test(countTime("???:30"), 0, 'Test 36');
test(countTime("23:?5"), 6, 'Test 37');
test(countTime("23:?7"), 6, 'Test 38');
test(countTime("??:2?"), 240, 'Test 39');
test(countTime("0?:??:"), 600, 'Test 40');
test(countTime("??:00"), 24, 'Test 41');
test(countTime("19:?7"), 6, 'Test 42');
test(countTime("2?:59"), 4, 'Test 43');
test(countTime("2?:1?"), 40, 'Test 44');
test(countTime("19:?1"), 6, 'Test 45');
test(countTime("22:?8"), 6, 'Test 46');
test(countTime("?4:3?"), 20, 'Test 47');
test(countTime("0?:?9"), 60, 'Test 48');
test(countTime("?3:?1"), 18, 'Test 49');
test(countTime("1?:??"), 600, 'Test 50');
test(countTime("??:3?"), 240, 'Test 51');
test(countTime("??:?1"), 144, 'Test 52');
test(countTime("12:?7"), 6, 'Test 53');
test(countTime("2?:35"), 4, 'Test 54');
test(countTime("0??:59"), 0, 'Test 55');
test(countTime("2?:?0"), 24, 'Test 56');
test(countTime("09:?5"), 6, 'Test 57');
test(countTime("???:??"), 0, 'Test 58');
test(countTime("?0:5?"), 30, 'Test 59');
test(countTime("0?:3?"), 100, 'Test 60');
test(countTime("1?:?9"), 60, 'Test 61');
test(countTime("12:?9"), 6, 'Test 62');
test(countTime("?3:45"), 3, 'Test 63');
test(countTime("19:??"), 60, 'Test 64');
test(countTime("19:?4"), 6, 'Test 65');
test(countTime("23:?4"), 6, 'Test 66');
test(countTime("?1:??"), 180, 'Test 67');
test(countTime("?3:?0"), 18, 'Test 68');
test(countTime("0?:?5"), 60, 'Test 69');
test(countTime("0?:4?"), 100, 'Test 70');
test(countTime("2?:5?"), 40, 'Test 71');
test(countTime("??:10"), 24, 'Test 72');
test(countTime("0?:?3"), 60, 'Test 73');
test(countTime("19:?0"), 6, 'Test 74');
test(countTime("2?:?5"), 24, 'Test 75');
test(countTime("2?:40"), 4, 'Test 76');
test(countTime("19:?9"), 6, 'Test 77');
test(countTime("1?:0?"), 100, 'Test 78');
test(countTime("???:00"), 0, 'Test 79');
test(countTime("2?:22"), 4, 'Test 80');
test(countTime("0?:5?"), 100, 'Test 81');
test(countTime("1??:0?"), 0, 'Test 82');
test(countTime("0?:30"), 10, 'Test 83');
test(countTime("2?:?4"), 24, 'Test 84');
test(countTime("21:??"), 60, 'Test 85');
test(countTime("20:?7"), 6, 'Test 86');
test(countTime("?4:?3"), 12, 'Test 87');
test(countTime("2?:00"), 4, 'Test 88');
test(countTime("09:4?"), 10, 'Test 89');
test(countTime("?9:??"), 120, 'Test 90');
test(countTime("1?:?7"), 60, 'Test 91');
test(countTime("0?:59"), 10, 'Test 92');
test(countTime("0?:??"), 600, 'Test 93');
test(countTime("0?:?0"), 60, 'Test 94');
test(countTime("?4:5?"), 20, 'Test 95');
test(countTime("?2:??"), 180, 'Test 96');
test(countTime("1?:59"), 10, 'Test 97');
test(countTime("0?:1?"), 100, 'Test 98');
test(countTime("2?:??:"), 240, 'Test 99');
test(countTime("1??:??"), 0, 'Test 100');
test(countTime("?:09"), 0, 'Test 101');
test(countTime("?9:0?"), 20, 'Test 102');
test(countTime("2?:?2"), 24, 'Test 103');
test(countTime("?1:?2"), 18, 'Test 104');
test(countTime("2?:?9"), 24, 'Test 105');
test(countTime("0?:19"), 10, 'Test 106');
test(countTime("??:0?"), 240, 'Test 107');
test(countTime("?4:?9"), 12, 'Test 108');
test(countTime("20:??"), 60, 'Test 109');
test(countTime("??:30"), 24, 'Test 110');
test(countTime("1?:??:"), 600, 'Test 111');
test(countTime("?4:2?"), 20, 'Test 112');
test(countTime("1?:23"), 10, 'Test 113');
test(countTime("2?:2?"), 40, 'Test 114');

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
