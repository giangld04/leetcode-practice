// Test: 2400. Number Of Ways To Reach A Position After Exactly K Steps
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfWays } = require("./solution");

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

console.log("\n2400. Number Of Ways To Reach A Position After Exactly K Steps\n");

test(numberOfWays(1, 2, 3), 3, 'Test 1');
test(numberOfWays(5, 5, 0), 1, 'Test 2');
test(numberOfWays(0, 0, 2), 2, 'Test 3');
test(numberOfWays(10, 1, 15), 455, 'Test 4');
test(numberOfWays(5, 5, 10), 252, 'Test 5');
test(numberOfWays(10, 1, 9), 1, 'Test 6');
test(numberOfWays(0, 0, 0), 1, 'Test 7');
test(numberOfWays(2, 5, 10), 0, 'Test 8');
test(numberOfWays(1, 2, 100), 0, 'Test 9');
test(numberOfWays(1000, 995, 1000), Error: maximum recursion depth exceeded, 'Test 10');
test(numberOfWays(100, 50, 150), 713790273, 'Test 11');
test(numberOfWays(750, 250, 500), Error: maximum recursion depth exceeded, 'Test 12');
test(numberOfWays(500, 450, 100), 244856590, 'Test 13');
test(numberOfWays(0, 500, 501), Error: maximum recursion depth exceeded, 'Test 14');
test(numberOfWays(300, 700, 999), Error: maximum recursion depth exceeded, 'Test 15');
test(numberOfWays(0, -500, 501), Error: maximum recursion depth exceeded, 'Test 16');
test(numberOfWays(-5, -10, 7), 7, 'Test 17');
test(numberOfWays(0, 1000, 1000), Error: maximum recursion depth exceeded, 'Test 18');
test(numberOfWays(500, 501, 1001), Error: maximum recursion depth exceeded, 'Test 19');
test(numberOfWays(500, 0, 1000), Error: maximum recursion depth exceeded, 'Test 20');
test(numberOfWays(100, 100, 500), Error: maximum recursion depth exceeded, 'Test 21');
test(numberOfWays(999, 1, 1998), Error: maximum recursion depth exceeded, 'Test 22');
test(numberOfWays(1, 1000, 999), Error: maximum recursion depth exceeded, 'Test 23');
test(numberOfWays(-500, 500, 1000), Error: maximum recursion depth exceeded, 'Test 24');
test(numberOfWays(1, 1000, 1000), Error: maximum recursion depth exceeded, 'Test 25');
test(numberOfWays(2, 1, 4), 0, 'Test 26');
test(numberOfWays(10, -10, 20), 1, 'Test 27');
test(numberOfWays(500, 400, 100), 1, 'Test 28');
test(numberOfWays(-50, 50, 100), 1, 'Test 29');
test(numberOfWays(5, 5, 1), 0, 'Test 30');
test(numberOfWays(1000, 990, 20), 15504, 'Test 31');
test(numberOfWays(-1, 1, 2), 1, 'Test 32');
test(numberOfWays(100, 50, 200), 489348363, 'Test 33');
test(numberOfWays(1, 1, 1000), Error: maximum recursion depth exceeded, 'Test 34');
test(numberOfWays(0, 1000, 2000), Error: maximum recursion depth exceeded, 'Test 35');
test(numberOfWays(999, 1000, 999), Error: maximum recursion depth exceeded, 'Test 36');
test(numberOfWays(-1, -500, 500), Error: maximum recursion depth exceeded, 'Test 37');
test(numberOfWays(-10, 10, 20), 1, 'Test 38');
test(numberOfWays(500, 500, 501), Error: maximum recursion depth exceeded, 'Test 39');
test(numberOfWays(1000, 500, 1000), Error: maximum recursion depth exceeded, 'Test 40');
test(numberOfWays(500, 499, 1000), Error: maximum recursion depth exceeded, 'Test 41');
test(numberOfWays(500, 501, 1000), Error: maximum recursion depth exceeded, 'Test 42');
test(numberOfWays(500, 500, 999), Error: maximum recursion depth exceeded, 'Test 43');
test(numberOfWays(0, 1, 3), 3, 'Test 44');
test(numberOfWays(1, 2, 1001), Error: maximum recursion depth exceeded, 'Test 45');
test(numberOfWays(999, 1, 999), Error: maximum recursion depth exceeded, 'Test 46');
test(numberOfWays(1, -1, 2), 1, 'Test 47');
test(numberOfWays(500, 500, 1000), Error: maximum recursion depth exceeded, 'Test 48');
test(numberOfWays(1000, 0, 1000), Error: maximum recursion depth exceeded, 'Test 49');
test(numberOfWays(1000, 1, 999), Error: maximum recursion depth exceeded, 'Test 50');
test(numberOfWays(5, 15, 12), 12, 'Test 51');
test(numberOfWays(-100, -200, 300), 236868103, 'Test 52');
test(numberOfWays(1, 2, 5), 10, 'Test 53');
test(numberOfWays(-500, -1, 501), Error: maximum recursion depth exceeded, 'Test 54');
test(numberOfWays(500, 400, 1000), Error: maximum recursion depth exceeded, 'Test 55');
test(numberOfWays(0, -500, 500), Error: maximum recursion depth exceeded, 'Test 56');
test(numberOfWays(1, 999, 1000), Error: maximum recursion depth exceeded, 'Test 57');
test(numberOfWays(500, 600, 1000), Error: maximum recursion depth exceeded, 'Test 58');
test(numberOfWays(100, 100, 200), 407336795, 'Test 59');
test(numberOfWays(-1000, -1000, 1000), Error: maximum recursion depth exceeded, 'Test 60');
test(numberOfWays(-100, 100, 200), 1, 'Test 61');
test(numberOfWays(500, 400, 199), 0, 'Test 62');
test(numberOfWays(3, 3, 6), 20, 'Test 63');
test(numberOfWays(500, 499, 1001), Error: maximum recursion depth exceeded, 'Test 64');
test(numberOfWays(250, 250, 500), Error: maximum recursion depth exceeded, 'Test 65');
test(numberOfWays(200, 300, 500), Error: maximum recursion depth exceeded, 'Test 66');
test(numberOfWays(1000, 1, 1000), Error: maximum recursion depth exceeded, 'Test 67');
test(numberOfWays(100, -100, 200), 1, 'Test 68');
test(numberOfWays(0, 500, 500), Error: maximum recursion depth exceeded, 'Test 69');
test(numberOfWays(500, 500, 1001), Error: maximum recursion depth exceeded, 'Test 70');
test(numberOfWays(100, 100, 1), 0, 'Test 71');
test(numberOfWays(-5, 5, 10), 1, 'Test 72');
test(numberOfWays(500, 505, 1000), Error: maximum recursion depth exceeded, 'Test 73');
test(numberOfWays(0, -10, 20), 15504, 'Test 74');
test(numberOfWays(500, 600, 500), Error: maximum recursion depth exceeded, 'Test 75');
test(numberOfWays(500, 499, 999), Error: maximum recursion depth exceeded, 'Test 76');
test(numberOfWays(750, 250, 1000), Error: maximum recursion depth exceeded, 'Test 77');
test(numberOfWays(300, 200, 500), Error: maximum recursion depth exceeded, 'Test 78');
test(numberOfWays(500, 1000, 500), Error: maximum recursion depth exceeded, 'Test 79');
test(numberOfWays(500, 500, 500), Error: maximum recursion depth exceeded, 'Test 80');
test(numberOfWays(999, 1, 1000), Error: maximum recursion depth exceeded, 'Test 81');
test(numberOfWays(0, 500, 1000), Error: maximum recursion depth exceeded, 'Test 82');
test(numberOfWays(50, 50, 50), 605552882, 'Test 83');
test(numberOfWays(1000, 1000, 1000), Error: maximum recursion depth exceeded, 'Test 84');
test(numberOfWays(1, 0, 3), 3, 'Test 85');
test(numberOfWays(100, 200, 150), 297103639, 'Test 86');
test(numberOfWays(1000, 1000, 999), Error: maximum recursion depth exceeded, 'Test 87');
test(numberOfWays(999, 1000, 1999), Error: maximum recursion depth exceeded, 'Test 88');
test(numberOfWays(500, 495, 1000), Error: maximum recursion depth exceeded, 'Test 89');
test(numberOfWays(1, -1, 4), 4, 'Test 90');
test(numberOfWays(3, -2, 10), 0, 'Test 91');

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
