// Test: 1884. Egg Drop With 2 Eggs And N Floors
// 46 test cases from LeetCodeDataset
// Run: node test.js

const { twoEggDrop } = require("./solution");

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

console.log("\n1884. Egg Drop With 2 Eggs And N Floors\n");

test(twoEggDrop(8), 4, 'Test 1');
test(twoEggDrop(1000), 45, 'Test 2');
test(twoEggDrop(5), 3, 'Test 3');
test(twoEggDrop(81), 13, 'Test 4');
test(twoEggDrop(999), 45, 'Test 5');
test(twoEggDrop(15), 5, 'Test 6');
test(twoEggDrop(64), 11, 'Test 7');
test(twoEggDrop(450), 30, 'Test 8');
test(twoEggDrop(600), 35, 'Test 9');
test(twoEggDrop(6), 3, 'Test 10');
test(twoEggDrop(2), 2, 'Test 11');
test(twoEggDrop(100), 14, 'Test 12');
test(twoEggDrop(500), 32, 'Test 13');
test(twoEggDrop(50), 10, 'Test 14');
test(twoEggDrop(1), 1, 'Test 15');
test(twoEggDrop(10), 4, 'Test 16');
test(twoEggDrop(300), 24, 'Test 17');
test(twoEggDrop(990), 44, 'Test 18');
test(twoEggDrop(850), 41, 'Test 19');
test(twoEggDrop(125), 16, 'Test 20');
test(twoEggDrop(900), 42, 'Test 21');
test(twoEggDrop(995), 45, 'Test 22');
test(twoEggDrop(505), 32, 'Test 23');
test(twoEggDrop(650), 36, 'Test 24');
test(twoEggDrop(550), 33, 'Test 25');
test(twoEggDrop(460), 30, 'Test 26');
test(twoEggDrop(99), 14, 'Test 27');
test(twoEggDrop(501), 32, 'Test 28');
test(twoEggDrop(250), 22, 'Test 29');
test(twoEggDrop(75), 12, 'Test 30');
test(twoEggDrop(997), 45, 'Test 31');
test(twoEggDrop(925), 43, 'Test 32');
test(twoEggDrop(504), 32, 'Test 33');
test(twoEggDrop(350), 26, 'Test 34');
test(twoEggDrop(503), 32, 'Test 35');
test(twoEggDrop(150), 17, 'Test 36');
test(twoEggDrop(800), 40, 'Test 37');
test(twoEggDrop(200), 20, 'Test 38');
test(twoEggDrop(400), 28, 'Test 39');
test(twoEggDrop(750), 39, 'Test 40');
test(twoEggDrop(502), 32, 'Test 41');
test(twoEggDrop(950), 44, 'Test 42');
test(twoEggDrop(700), 37, 'Test 43');
test(twoEggDrop(366), 27, 'Test 44');
test(twoEggDrop(998), 45, 'Test 45');
test(twoEggDrop(25), 7, 'Test 46');

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
