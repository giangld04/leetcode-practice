// Test: 1823. Find The Winner Of The Circular Game
// 83 test cases from LeetCodeDataset
// Run: node test.js

const { findTheWinner } = require("./solution");

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

console.log("\n1823. Find The Winner Of The Circular Game\n");

test(findTheWinner(3, 1), 3, 'Test 1');
test(findTheWinner(3, 3), 2, 'Test 2');
test(findTheWinner(5, 2), 3, 'Test 3');
test(findTheWinner(7, 3), 4, 'Test 4');
test(findTheWinner(7, 1), 7, 'Test 5');
test(findTheWinner(6, 5), 1, 'Test 6');
test(findTheWinner(7, 7), 5, 'Test 7');
test(findTheWinner(1, 1), 1, 'Test 8');
test(findTheWinner(4, 4), 2, 'Test 9');
test(findTheWinner(10, 4), 5, 'Test 10');
test(findTheWinner(10, 3), 4, 'Test 11');
test(findTheWinner(250, 125), 173, 'Test 12');
test(findTheWinner(300, 150), 152, 'Test 13');
test(findTheWinner(250, 150), 76, 'Test 14');
test(findTheWinner(200, 100), 189, 'Test 15');
test(findTheWinner(150, 50), 138, 'Test 16');
test(findTheWinner(300, 300), 265, 'Test 17');
test(findTheWinner(450, 450), 87, 'Test 18');
test(findTheWinner(123, 123), 94, 'Test 19');
test(findTheWinner(499, 250), 134, 'Test 20');
test(findTheWinner(300, 200), 139, 'Test 21');
test(findTheWinner(100, 13), 70, 'Test 22');
test(findTheWinner(500, 1), 500, 'Test 23');
test(findTheWinner(37, 37), 16, 'Test 24');
test(findTheWinner(500, 250), 384, 'Test 25');
test(findTheWinner(20, 19), 11, 'Test 26');
test(findTheWinner(200, 199), 163, 'Test 27');
test(findTheWinner(100, 99), 88, 'Test 28');
test(findTheWinner(30, 15), 4, 'Test 29');
test(findTheWinner(50, 7), 1, 'Test 30');
test(findTheWinner(30, 29), 25, 'Test 31');
test(findTheWinner(50, 2), 37, 'Test 32');
test(findTheWinner(250, 89), 225, 'Test 33');
test(findTheWinner(250, 3), 41, 'Test 34');
test(findTheWinner(50, 10), 36, 'Test 35');
test(findTheWinner(100, 37), 45, 'Test 36');
test(findTheWinner(40, 7), 24, 'Test 37');
test(findTheWinner(45, 23), 36, 'Test 38');
test(findTheWinner(45, 19), 14, 'Test 39');
test(findTheWinner(100, 50), 95, 'Test 40');
test(findTheWinner(123, 45), 116, 'Test 41');
test(findTheWinner(45, 13), 36, 'Test 42');
test(findTheWinner(500, 2), 489, 'Test 43');
test(findTheWinner(499, 300), 36, 'Test 44');
test(findTheWinner(200, 1), 200, 'Test 45');
test(findTheWinner(300, 299), 145, 'Test 46');
test(findTheWinner(400, 399), 30, 'Test 47');
test(findTheWinner(125, 124), 31, 'Test 48');
test(findTheWinner(150, 75), 125, 'Test 49');
test(findTheWinner(20, 7), 3, 'Test 50');
test(findTheWinner(350, 7), 211, 'Test 51');
test(findTheWinner(150, 2), 45, 'Test 52');
test(findTheWinner(123, 57), 77, 'Test 53');
test(findTheWinner(150, 41), 79, 'Test 54');
test(findTheWinner(200, 67), 163, 'Test 55');
test(findTheWinner(499, 499), 122, 'Test 56');
test(findTheWinner(500, 499), 121, 'Test 57');
test(findTheWinner(500, 500), 69, 'Test 58');
test(findTheWinner(400, 100), 313, 'Test 59');
test(findTheWinner(499, 5), 327, 'Test 60');
test(findTheWinner(200, 50), 23, 'Test 61');
test(findTheWinner(20, 5), 7, 'Test 62');
test(findTheWinner(250, 249), 204, 'Test 63');
test(findTheWinner(40, 13), 14, 'Test 64');
test(findTheWinner(50, 11), 10, 'Test 65');
test(findTheWinner(450, 3), 286, 'Test 66');
test(findTheWinner(450, 449), 143, 'Test 67');
test(findTheWinner(50, 13), 5, 'Test 68');
test(findTheWinner(15, 11), 12, 'Test 69');
test(findTheWinner(37, 13), 14, 'Test 70');
test(findTheWinner(15, 7), 5, 'Test 71');
test(findTheWinner(30, 11), 28, 'Test 72');
test(findTheWinner(300, 100), 59, 'Test 73');
test(findTheWinner(40, 19), 6, 'Test 74');
test(findTheWinner(120, 1), 120, 'Test 75');
test(findTheWinner(299, 299), 146, 'Test 76');
test(findTheWinner(50, 17), 8, 'Test 77');
test(findTheWinner(150, 1), 150, 'Test 78');
test(findTheWinner(250, 100), 23, 'Test 79');
test(findTheWinner(45, 20), 29, 'Test 80');
test(findTheWinner(373, 186), 14, 'Test 81');
test(findTheWinner(499, 2), 487, 'Test 82');
test(findTheWinner(50, 25), 5, 'Test 83');

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
