// Test: 1510. Stone Game Iv
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { winnerSquareGame } = require("./solution");

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

console.log("\n1510. Stone Game Iv\n");

test(winnerSquareGame(101), true, 'Test 1');
test(winnerSquareGame(3), true, 'Test 2');
test(winnerSquareGame(100000), Error: maximum recursion depth exceeded, 'Test 3');
test(winnerSquareGame(100), true, 'Test 4');
test(winnerSquareGame(30), true, 'Test 5');
test(winnerSquareGame(5), false, 'Test 6');
test(winnerSquareGame(4), true, 'Test 7');
test(winnerSquareGame(200), true, 'Test 8');
test(winnerSquareGame(17), false, 'Test 9');
test(winnerSquareGame(10000), Error: maximum recursion depth exceeded, 'Test 10');
test(winnerSquareGame(2), false, 'Test 11');
test(winnerSquareGame(20), false, 'Test 12');
test(winnerSquareGame(1), true, 'Test 13');
test(winnerSquareGame(1000), Error: maximum recursion depth exceeded, 'Test 14');
test(winnerSquareGame(7), false, 'Test 15');
test(winnerSquareGame(10), false, 'Test 16');
test(winnerSquareGame(25), true, 'Test 17');
test(winnerSquareGame(54756), Error: maximum recursion depth exceeded, 'Test 18');
test(winnerSquareGame(9801), Error: maximum recursion depth exceeded, 'Test 19');
test(winnerSquareGame(99999), Error: maximum recursion depth exceeded, 'Test 20');
test(winnerSquareGame(12345), Error: maximum recursion depth exceeded, 'Test 21');
test(winnerSquareGame(900), Error: maximum recursion depth exceeded, 'Test 22');
test(winnerSquareGame(50000), Error: maximum recursion depth exceeded, 'Test 23');
test(winnerSquareGame(50), true, 'Test 24');
test(winnerSquareGame(10002), Error: maximum recursion depth exceeded, 'Test 25');
test(winnerSquareGame(300), true, 'Test 26');
test(winnerSquareGame(10001), Error: maximum recursion depth exceeded, 'Test 27');
test(winnerSquareGame(123), true, 'Test 28');
test(winnerSquareGame(3456), Error: maximum recursion depth exceeded, 'Test 29');
test(winnerSquareGame(6789), Error: maximum recursion depth exceeded, 'Test 30');
test(winnerSquareGame(64), true, 'Test 31');
test(winnerSquareGame(16), true, 'Test 32');
test(winnerSquareGame(1300), Error: maximum recursion depth exceeded, 'Test 33');
test(winnerSquareGame(784), Error: maximum recursion depth exceeded, 'Test 34');
test(winnerSquareGame(31250), Error: maximum recursion depth exceeded, 'Test 35');
test(winnerSquareGame(1024), Error: maximum recursion depth exceeded, 'Test 36');
test(winnerSquareGame(700), Error: maximum recursion depth exceeded, 'Test 37');
test(winnerSquareGame(10004), Error: maximum recursion depth exceeded, 'Test 38');
test(winnerSquareGame(65432), Error: maximum recursion depth exceeded, 'Test 39');
test(winnerSquareGame(2048), Error: maximum recursion depth exceeded, 'Test 40');
test(winnerSquareGame(8192), Error: maximum recursion depth exceeded, 'Test 41');
test(winnerSquareGame(999), Error: maximum recursion depth exceeded, 'Test 42');
test(winnerSquareGame(10101), Error: maximum recursion depth exceeded, 'Test 43');
test(winnerSquareGame(6561), Error: maximum recursion depth exceeded, 'Test 44');
test(winnerSquareGame(3600), Error: maximum recursion depth exceeded, 'Test 45');
test(winnerSquareGame(65536), Error: maximum recursion depth exceeded, 'Test 46');
test(winnerSquareGame(169), true, 'Test 47');
test(winnerSquareGame(5000), Error: maximum recursion depth exceeded, 'Test 48');
test(winnerSquareGame(9999), Error: maximum recursion depth exceeded, 'Test 49');
test(winnerSquareGame(10003), Error: maximum recursion depth exceeded, 'Test 50');
test(winnerSquareGame(5625), Error: maximum recursion depth exceeded, 'Test 51');
test(winnerSquareGame(81), true, 'Test 52');
test(winnerSquareGame(150), false, 'Test 53');
test(winnerSquareGame(1100), Error: maximum recursion depth exceeded, 'Test 54');
test(winnerSquareGame(10201), Error: maximum recursion depth exceeded, 'Test 55');
test(winnerSquareGame(32101), Error: maximum recursion depth exceeded, 'Test 56');
test(winnerSquareGame(98765), Error: maximum recursion depth exceeded, 'Test 57');
test(winnerSquareGame(82437), Error: maximum recursion depth exceeded, 'Test 58');
test(winnerSquareGame(3125), Error: maximum recursion depth exceeded, 'Test 59');
test(winnerSquareGame(750), Error: maximum recursion depth exceeded, 'Test 60');
test(winnerSquareGame(10005), Error: maximum recursion depth exceeded, 'Test 61');
test(winnerSquareGame(78910), Error: maximum recursion depth exceeded, 'Test 62');
test(winnerSquareGame(500), Error: maximum recursion depth exceeded, 'Test 63');
test(winnerSquareGame(55), true, 'Test 64');
test(winnerSquareGame(180), false, 'Test 65');
test(winnerSquareGame(25000), Error: maximum recursion depth exceeded, 'Test 66');

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
