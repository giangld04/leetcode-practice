// Test: 1025. Divisor Game
// 51 test cases from LeetCodeDataset
// Run: node test.js

const { divisorGame } = require("./solution");

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

console.log("\n1025. Divisor Game\n");

test(divisorGame(8), true, 'Test 1');
test(divisorGame(3), false, 'Test 2');
test(divisorGame(4), true, 'Test 3');
test(divisorGame(9), false, 'Test 4');
test(divisorGame(6), true, 'Test 5');
test(divisorGame(2), true, 'Test 6');
test(divisorGame(1000), true, 'Test 7');
test(divisorGame(7), false, 'Test 8');
test(divisorGame(10), true, 'Test 9');
test(divisorGame(5), false, 'Test 10');
test(divisorGame(625), false, 'Test 11');
test(divisorGame(576), true, 'Test 12');
test(divisorGame(729), false, 'Test 13');
test(divisorGame(49), false, 'Test 14');
test(divisorGame(50), true, 'Test 15');
test(divisorGame(300), true, 'Test 16');
test(divisorGame(99), false, 'Test 17');
test(divisorGame(64), true, 'Test 18');
test(divisorGame(17), false, 'Test 19');
test(divisorGame(649), false, 'Test 20');
test(divisorGame(23), false, 'Test 21');
test(divisorGame(343), false, 'Test 22');
test(divisorGame(640), true, 'Test 23');
test(divisorGame(819), false, 'Test 24');
test(divisorGame(128), true, 'Test 25');
test(divisorGame(1024), true, 'Test 26');
test(divisorGame(299), false, 'Test 27');
test(divisorGame(777), false, 'Test 28');
test(divisorGame(701), false, 'Test 29');
test(divisorGame(999), false, 'Test 30');
test(divisorGame(129), false, 'Test 31');
test(divisorGame(18), true, 'Test 32');
test(divisorGame(32), true, 'Test 33');
test(divisorGame(256), true, 'Test 34');
test(divisorGame(997), false, 'Test 35');
test(divisorGame(768), true, 'Test 36');
test(divisorGame(127), false, 'Test 37');
test(divisorGame(81), false, 'Test 38');
test(divisorGame(150), true, 'Test 39');
test(divisorGame(503), false, 'Test 40');
test(divisorGame(24), true, 'Test 41');
test(divisorGame(15), false, 'Test 42');
test(divisorGame(400), true, 'Test 43');
test(divisorGame(512), true, 'Test 44');
test(divisorGame(31), false, 'Test 45');
test(divisorGame(377), false, 'Test 46');
test(divisorGame(499), false, 'Test 47');
test(divisorGame(1), false, 'Test 48');
test(divisorGame(500), true, 'Test 49');
test(divisorGame(420), true, 'Test 50');
test(divisorGame(13), false, 'Test 51');

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
