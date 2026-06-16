// Test: 1871. Jump Game Vii
// 49 test cases from LeetCodeDataset
// Run: node test.js

const { canReach } = require("./solution");

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

console.log("\n1871. Jump Game Vii\n");

test(canReach("0100100010001000", 2, 5), true, 'Test 1');
test(canReach("00001000", 2, 4), true, 'Test 2');
test(canReach("0010010010010010010010010010010010010010", 2, 4), true, 'Test 3');
test(canReach("011010", 2, 3), true, 'Test 4');
test(canReach("0100000", 1, 2), true, 'Test 5');
test(canReach("00001000", 3, 5), true, 'Test 6');
test(canReach("01010101", 2, 4), false, 'Test 7');
test(canReach("0101010101010101010101010101010101010101", 5, 10), false, 'Test 8');
test(canReach("0111111111111111111111111111111111111111", 3, 5), false, 'Test 9');
test(canReach("000000", 1, 2), true, 'Test 10');
test(canReach("001000", 2, 3), true, 'Test 11');
test(canReach("010101", 1, 2), false, 'Test 12');
test(canReach("00000000", 1, 2), true, 'Test 13');
test(canReach("00100", 3, 4), true, 'Test 14');
test(canReach("01101110", 2, 3), false, 'Test 15');
test(canReach("010000", 1, 3), true, 'Test 16');
test(canReach("00000000001000000000", 4, 7), true, 'Test 17');
test(canReach("0000011111000000000000000000", 1, 5), false, 'Test 18');
test(canReach("00000000000000000000000000000000000000000000000000000000000000000000000000000000", 5, 10), true, 'Test 19');
test(canReach("0000000000000000000000000000", 2, 2), false, 'Test 20');
test(canReach("0111111111111111111111111110", 10, 20), false, 'Test 21');
test(canReach("0100000000000000000000000000", 2, 3), true, 'Test 22');
test(canReach("00000000000000000000000000000000000000000000000000", 10, 20), true, 'Test 23');
test(canReach("01010101010101010101010101010101010101010101010101", 5, 15), false, 'Test 24');
test(canReach("0010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101", 3, 7), false, 'Test 25');
test(canReach("0000000000000000000000000001", 5000, 10000), false, 'Test 26');
test(canReach("0000000000000000000000000001", 1, 1), false, 'Test 27');
test(canReach("000001000001000001000001000001000001000001000001", 6, 12), false, 'Test 28');
test(canReach("000111000111000111000111000111000111000111000111", 3, 6), false, 'Test 29');
test(canReach("01001001001001001001001000", 5, 10), true, 'Test 30');
test(canReach("001001001000", 2, 4), true, 'Test 31');
test(canReach("0100000000000000000000000000", 50000, 50000), false, 'Test 32');
test(canReach("0000100100010001000100010001000100010001000100010000", 5, 15), true, 'Test 33');
test(canReach("0000000000000000000000000000000000000000000000000001000000000000000000000000", 10, 20), true, 'Test 34');
test(canReach("01001001001001001001001001001001001001001001001001", 4, 8), false, 'Test 35');
test(canReach("0000000000000000000000000000", 5, 5), false, 'Test 36');
test(canReach("010001000100010001000100010001000100010000", 4, 12), true, 'Test 37');
test(canReach("0000000000000000000000000000", 1, 10), true, 'Test 38');
test(canReach("0101010101010101010101010101", 3, 5), false, 'Test 39');
test(canReach("0100000000000000000000000000", 10, 10), false, 'Test 40');
test(canReach("0001010101010101010101010101010100", 3, 8), true, 'Test 41');
test(canReach("0000000000000000000000000000", 50, 100), false, 'Test 42');
test(canReach("0000000000", 4, 6), true, 'Test 43');
test(canReach("0000000000000000000000000000", 1, 99999), true, 'Test 44');
test(canReach("0100000000000000000000000000", 10000, 50000), false, 'Test 45');
test(canReach("0000000000000000000000000000", 10000, 10000), false, 'Test 46');
test(canReach("0000000000000000000000000000", 100, 100), false, 'Test 47');
test(canReach("0000000000000000000000000000", 1, 50000), true, 'Test 48');
test(canReach("0001000100010001000100010000", 3, 5), true, 'Test 49');

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
