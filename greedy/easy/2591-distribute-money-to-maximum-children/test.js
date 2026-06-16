// Test: 2591. Distribute Money To Maximum Children
// 47 test cases from LeetCodeDataset
// Run: node test.js

const { distMoney } = require("./solution");

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

console.log("\n2591. Distribute Money To Maximum Children\n");

test(distMoney(150, 15), 14, 'Test 1');
test(distMoney(100, 5), 4, 'Test 2');
test(distMoney(15, 3), 1, 'Test 3');
test(distMoney(31, 3), 2, 'Test 4');
test(distMoney(7, 2), 0, 'Test 5');
test(distMoney(25, 4), 3, 'Test 6');
test(distMoney(8, 8), 0, 'Test 7');
test(distMoney(50, 6), 5, 'Test 8');
test(distMoney(28, 3), 2, 'Test 9');
test(distMoney(25, 5), 2, 'Test 10');
test(distMoney(150, 20), 18, 'Test 11');
test(distMoney(199, 25), 24, 'Test 12');
test(distMoney(100, 12), 11, 'Test 13');
test(distMoney(7, 3), 0, 'Test 14');
test(distMoney(16, 2), 2, 'Test 15');
test(distMoney(40, 5), 5, 'Test 16');
test(distMoney(30, 4), 3, 'Test 17');
test(distMoney(300, 30), 29, 'Test 18');
test(distMoney(3, 2), 0, 'Test 19');
test(distMoney(4, 2), 0, 'Test 20');
test(distMoney(30, 3), 2, 'Test 21');
test(distMoney(31, 4), 3, 'Test 22');
test(distMoney(8, 2), 0, 'Test 23');
test(distMoney(20, 3), 1, 'Test 24');
test(distMoney(200, 30), 24, 'Test 25');
test(distMoney(72, 9), 9, 'Test 26');
test(distMoney(300, 25), 24, 'Test 27');
test(distMoney(28, 4), 2, 'Test 28');
test(distMoney(7, 1), 0, 'Test 29');
test(distMoney(32, 4), 4, 'Test 30');
test(distMoney(12, 2), 0, 'Test 31');
test(distMoney(25, 3), 2, 'Test 32');
test(distMoney(6, 2), 0, 'Test 33');
test(distMoney(4, 1), -1, 'Test 34');
test(distMoney(1, 2), -1, 'Test 35');
test(distMoney(200, 25), 25, 'Test 36');
test(distMoney(8, 1), 1, 'Test 37');
test(distMoney(10, 2), 1, 'Test 38');
test(distMoney(30, 5), 3, 'Test 39');
test(distMoney(50, 7), 6, 'Test 40');
test(distMoney(100, 10), 9, 'Test 41');
test(distMoney(1, 1), 0, 'Test 42');
test(distMoney(15, 2), 1, 'Test 43');
test(distMoney(56, 7), 7, 'Test 44');
test(distMoney(24, 3), 3, 'Test 45');
test(distMoney(5, 2), 0, 'Test 46');
test(distMoney(50, 5), 4, 'Test 47');

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
