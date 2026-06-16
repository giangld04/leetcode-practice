// Test: 2379. Minimum Recolors To Get K Consecutive Black Blocks
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { minimumRecolors } = require("./solution");

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

console.log("\n2379. Minimum Recolors To Get K Consecutive Black Blocks\n");

test(minimumRecolors("WWWW", 2), 2, 'Test 1');
test(minimumRecolors("WBBBWWBBBW", 3), 0, 'Test 2');
test(minimumRecolors("WBBWWBBWBW", 7), 3, 'Test 3');
test(minimumRecolors("BBBBB", 3), 0, 'Test 4');
test(minimumRecolors("BWBWBWBWBW", 6), 3, 'Test 5');
test(minimumRecolors("WWWWWW", 4), 4, 'Test 6');
test(minimumRecolors("WWWWWW", 3), 3, 'Test 7');
test(minimumRecolors("BBBB", 4), 0, 'Test 8');
test(minimumRecolors("BBBBBB", 4), 0, 'Test 9');
test(minimumRecolors("WBWBBBW", 2), 0, 'Test 10');
test(minimumRecolors("WBWBWBWBWB", 5), 2, 'Test 11');
test(minimumRecolors("BBBBBB", 3), 0, 'Test 12');
test(minimumRecolors("BBBBBBBBBBBBBBBBBBBB", 20), 0, 'Test 13');
test(minimumRecolors("BBWBBWBBWBBWBBWBBWBBWBBWBBWBBWBBW", 14), 4, 'Test 14');
test(minimumRecolors("WBBBWWWWWWBBBWWBB", 7), 2, 'Test 15');
test(minimumRecolors("WBWBWBWBWBWBWBWBWB", 10), 5, 'Test 16');
test(minimumRecolors("WBBWWBBWWBBWWBBWWBBW", 8), 4, 'Test 17');
test(minimumRecolors("WBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWB", 10), 5, 'Test 18');
test(minimumRecolors("WBWBWBWBWBWBWB", 5), 2, 'Test 19');
test(minimumRecolors("WWBBWWBBWWBBWWBBWWBB", 6), 2, 'Test 20');
test(minimumRecolors("BWBWBWBWBWBWBWBWBWBWBWBWBW", 7), 3, 'Test 21');
test(minimumRecolors("BBWWBBWWBBW", 5), 2, 'Test 22');
test(minimumRecolors("BWBWBWBWBWBWBW", 7), 3, 'Test 23');
test(minimumRecolors("WBBBWWBBBWBBBWWBBB", 7), 1, 'Test 24');
test(minimumRecolors("BBBBBBBBBBBBBBBB", 16), 0, 'Test 25');
test(minimumRecolors("BBBBBBWWBBWWBBWWBBWW", 6), 0, 'Test 26');
test(minimumRecolors("WWBWWBBWWB", 6), 3, 'Test 27');
test(minimumRecolors("WWWWBBWWWBBWWBBWWB", 5), 2, 'Test 28');
test(minimumRecolors("WBBWWWWBBBWBWWBBB", 8), 3, 'Test 29');
test(minimumRecolors("BBWWBBWWBBWWBBWW", 4), 2, 'Test 30');
test(minimumRecolors("BWWBWWBWWBWWBWWBWWBW", 7), 4, 'Test 31');
test(minimumRecolors("BWBWBWBWBWBWBWBWBWBW", 15), 7, 'Test 32');
test(minimumRecolors("WWWWWWWWWW", 10), 10, 'Test 33');
test(minimumRecolors("WWBWWBWWBWWBWWBWWBWWBWWBWWB", 3), 2, 'Test 34');
test(minimumRecolors("WBBBBBBWBBBBBBW", 10), 1, 'Test 35');
test(minimumRecolors("BBBWBBWWWWBBBWWBBB", 6), 1, 'Test 36');
test(minimumRecolors("BBBBBBBWWWWWWWBBBBBB", 8), 1, 'Test 37');
test(minimumRecolors("WWWWBWWWWBWWWWBWWWWB", 4), 3, 'Test 38');
test(minimumRecolors("WBBWBBWBBWBBWBBW", 7), 2, 'Test 39');
test(minimumRecolors("BWBWBWBWBWBWBWBWBW", 10), 5, 'Test 40');
test(minimumRecolors("BWBWBWBWBW", 4), 2, 'Test 41');
test(minimumRecolors("WBBBWWBBBWWBBB", 6), 2, 'Test 42');
test(minimumRecolors("WWWWWBBBWBBBWWWW", 7), 1, 'Test 43');
test(minimumRecolors("BBBWWWBBBWWWBBB", 9), 3, 'Test 44');
test(minimumRecolors("WBBWBWBWBWBWBWBWBW", 8), 3, 'Test 45');
test(minimumRecolors("WWWWWWWW", 4), 4, 'Test 46');
test(minimumRecolors("BBWWBBWWBBWW", 4), 2, 'Test 47');
test(minimumRecolors("WWBBBWWBBBWWBBBWW", 5), 2, 'Test 48');
test(minimumRecolors("WWWWWWWWWW", 5), 5, 'Test 49');
test(minimumRecolors("WWWWWWWWWWWWWWWWWWWW", 15), 15, 'Test 50');
test(minimumRecolors("BBBBBBBBBWWWWWWWWW", 9), 0, 'Test 51');
test(minimumRecolors("BBBBBB", 6), 0, 'Test 52');
test(minimumRecolors("BWBWBWBWBWBWBWBWBWBW", 9), 4, 'Test 53');
test(minimumRecolors("BWBWBWBWBWBWBWBWBWBWBW", 11), 5, 'Test 54');
test(minimumRecolors("BBBBBBBBBB", 5), 0, 'Test 55');
test(minimumRecolors("BBBBWWBBBWBWB", 6), 2, 'Test 56');
test(minimumRecolors("BBBBWBWBWBWBWBWBWB", 11), 4, 'Test 57');
test(minimumRecolors("WBBBBBBBBBBBBBBBBBBBBBBBBBBW", 25), 0, 'Test 58');
test(minimumRecolors("BBBBBBWWWWWW", 4), 0, 'Test 59');
test(minimumRecolors("BBBWWBWBWBWBWBW", 6), 2, 'Test 60');
test(minimumRecolors("BWBWBWBWBWBWBWBW", 8), 4, 'Test 61');
test(minimumRecolors("WBBWWBBWBWWBBWBBWBWBWBWB", 12), 5, 'Test 62');
test(minimumRecolors("BBBWWWBBBWWWBBBWWWBB", 5), 2, 'Test 63');
test(minimumRecolors("WWBBWWBBWWBBWWBBWW", 5), 2, 'Test 64');
test(minimumRecolors("BBBBBBBWBBB", 8), 1, 'Test 65');
test(minimumRecolors("WBBBWWBBBWWBBB", 8), 2, 'Test 66');
test(minimumRecolors("BBBWBBBWWBBBWWBBBWWB", 7), 1, 'Test 67');
test(minimumRecolors("BBWWWWWWWWWW", 3), 1, 'Test 68');
test(minimumRecolors("BWBWBWBWBW", 8), 4, 'Test 69');
test(minimumRecolors("WBBBWBWBWBWBBB", 5), 1, 'Test 70');
test(minimumRecolors("WWBWBWBWBW", 5), 2, 'Test 71');
test(minimumRecolors("WBBWWBBWBBWWBBWBBWBBWWBBWB", 8), 2, 'Test 72');
test(minimumRecolors("BBWWBBWWBBWWBBWWBBWWBBWW", 5), 2, 'Test 73');
test(minimumRecolors("WBBBWWBBBWBBBWWBBB", 6), 1, 'Test 74');
test(minimumRecolors("WBWBWBWBWBWBWBWBWBWB", 10), 5, 'Test 75');
test(minimumRecolors("BWBWBWBWBWBWBWBW", 6), 3, 'Test 76');
test(minimumRecolors("WBBWBBWWBBWWBBWBBWBBW", 8), 2, 'Test 77');
test(minimumRecolors("WBBWWBBWBWWBBWBBW", 10), 4, 'Test 78');
test(minimumRecolors("BWWWWBBWWWWBBWWWW", 7), 4, 'Test 79');
test(minimumRecolors("BBBWBWBBBBBBBWB", 9), 1, 'Test 80');
test(minimumRecolors("WWWWWWWWWWWW", 5), 5, 'Test 81');
test(minimumRecolors("WBBWWWWBWBWWB", 6), 3, 'Test 82');
test(minimumRecolors("WWBBWWBBWWBBWWBBWWBB", 4), 2, 'Test 83');
test(minimumRecolors("WBBWBBWBBWBBWBBWBBWB", 10), 3, 'Test 84');
test(minimumRecolors("BBWWBBWWBBWWBBWWBB", 4), 2, 'Test 85');
test(minimumRecolors("BWWBWWBWWBWWBWWBWW", 6), 4, 'Test 86');
test(minimumRecolors("WWWBWWWWBWBWWB", 4), 2, 'Test 87');
test(minimumRecolors("WBWBWBWBWBWBWBWBWBWB", 5), 2, 'Test 88');
test(minimumRecolors("WBBWBBWBBWBBWBBWBBWB", 9), 3, 'Test 89');
test(minimumRecolors("BBBBBBBWWWWWWWWWW", 7), 0, 'Test 90');
test(minimumRecolors("WWWWWWWWWWWWWWWWWWWW", 1), 1, 'Test 91');
test(minimumRecolors("WBBWWBBWWBBWWBBWWBBWWBBW", 7), 3, 'Test 92');
test(minimumRecolors("WWWWBBWWWWBBWWWWBBWWWWBB", 4), 2, 'Test 93');
test(minimumRecolors("WWBBWWBBWWBBWW", 5), 2, 'Test 94');
test(minimumRecolors("WWWWBWWWWBWWWWB", 4), 3, 'Test 95');
test(minimumRecolors("BBBBBBBBBB", 10), 0, 'Test 96');
test(minimumRecolors("BBBBBBBBBBBBBBBBBBBB", 10), 0, 'Test 97');
test(minimumRecolors("WWWWWWWWWWWWWW", 5), 5, 'Test 98');
test(minimumRecolors("WWBBWWBBWWBBWW", 6), 2, 'Test 99');
test(minimumRecolors("BBBBBWWBBBWWBBBWWBBBWWBBB", 5), 0, 'Test 100');
test(minimumRecolors("BWBWBWBWBWBWBWBWBWBWBWBWBWBWBW", 15), 7, 'Test 101');

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
