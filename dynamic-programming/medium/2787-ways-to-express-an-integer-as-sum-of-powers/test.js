// Test: 2787. Ways To Express An Integer As Sum Of Powers
// 96 test cases from LeetCodeDataset
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

console.log("\n2787. Ways To Express An Integer As Sum Of Powers\n");

test(numberOfWays(100, 4), 0, 'Test 1');
test(numberOfWays(50, 2), 3, 'Test 2');
test(numberOfWays(200, 2), 9, 'Test 3');
test(numberOfWays(300, 5), 0, 'Test 4');
test(numberOfWays(160, 3), 1, 'Test 5');
test(numberOfWays(4, 1), 2, 'Test 6');
test(numberOfWays(10, 2), 1, 'Test 7');
test(numberOfWays(20, 2), 1, 'Test 8');
test(numberOfWays(200, 5), 0, 'Test 9');
test(numberOfWays(144, 2), 2, 'Test 10');
test(numberOfWays(225, 4), 0, 'Test 11');
test(numberOfWays(180, 5), 0, 'Test 12');
test(numberOfWays(125, 2), 5, 'Test 13');
test(numberOfWays(80, 3), 0, 'Test 14');
test(numberOfWays(190, 5), 0, 'Test 15');
test(numberOfWays(300, 3), 0, 'Test 16');
test(numberOfWays(199, 4), 0, 'Test 17');
test(numberOfWays(243, 5), 1, 'Test 18');
test(numberOfWays(210, 5), 0, 'Test 19');
test(numberOfWays(290, 5), 0, 'Test 20');
test(numberOfWays(200, 4), 0, 'Test 21');
test(numberOfWays(120, 2), 4, 'Test 22');
test(numberOfWays(260, 4), 0, 'Test 23');
test(numberOfWays(100, 2), 3, 'Test 24');
test(numberOfWays(128, 2), 0, 'Test 25');
test(numberOfWays(160, 2), 4, 'Test 26');
test(numberOfWays(150, 4), 0, 'Test 27');
test(numberOfWays(180, 4), 0, 'Test 28');
test(numberOfWays(150, 2), 9, 'Test 29');
test(numberOfWays(299, 5), 0, 'Test 30');
test(numberOfWays(175, 3), 0, 'Test 31');
test(numberOfWays(180, 2), 6, 'Test 32');
test(numberOfWays(210, 2), 18, 'Test 33');
test(numberOfWays(220, 3), 0, 'Test 34');
test(numberOfWays(280, 3), 1, 'Test 35');
test(numberOfWays(275, 5), 1, 'Test 36');
test(numberOfWays(275, 4), 0, 'Test 37');
test(numberOfWays(300, 1), 872471266, 'Test 38');
test(numberOfWays(190, 2), 14, 'Test 39');
test(numberOfWays(140, 5), 0, 'Test 40');
test(numberOfWays(170, 3), 0, 'Test 41');
test(numberOfWays(299, 3), 0, 'Test 42');
test(numberOfWays(195, 2), 16, 'Test 43');
test(numberOfWays(275, 3), 0, 'Test 44');
test(numberOfWays(280, 4), 0, 'Test 45');
test(numberOfWays(140, 4), 0, 'Test 46');
test(numberOfWays(260, 5), 0, 'Test 47');
test(numberOfWays(196, 4), 0, 'Test 48');
test(numberOfWays(250, 3), 0, 'Test 49');
test(numberOfWays(289, 3), 1, 'Test 50');
test(numberOfWays(150, 3), 0, 'Test 51');
test(numberOfWays(200, 1), 487067746, 'Test 52');
test(numberOfWays(120, 3), 0, 'Test 53');
test(numberOfWays(100, 1), 444793, 'Test 54');
test(numberOfWays(175, 4), 0, 'Test 55');
test(numberOfWays(260, 2), 19, 'Test 56');
test(numberOfWays(180, 3), 0, 'Test 57');
test(numberOfWays(170, 5), 0, 'Test 58');
test(numberOfWays(290, 2), 31, 'Test 59');
test(numberOfWays(299, 2), 33, 'Test 60');
test(numberOfWays(256, 4), 1, 'Test 61');
test(numberOfWays(270, 3), 0, 'Test 62');
test(numberOfWays(90, 3), 0, 'Test 63');
test(numberOfWays(250, 4), 0, 'Test 64');
test(numberOfWays(17, 2), 1, 'Test 65');
test(numberOfWays(1, 5), 1, 'Test 66');
test(numberOfWays(3, 1), 2, 'Test 67');
test(numberOfWays(125, 3), 1, 'Test 68');
test(numberOfWays(2, 2), 0, 'Test 69');
test(numberOfWays(50, 3), 0, 'Test 70');
test(numberOfWays(81, 4), 1, 'Test 71');
test(numberOfWays(20, 4), 0, 'Test 72');
test(numberOfWays(17, 4), 1, 'Test 73');
test(numberOfWays(5, 1), 3, 'Test 74');
test(numberOfWays(15, 2), 0, 'Test 75');
test(numberOfWays(120, 4), 0, 'Test 76');
test(numberOfWays(100, 3), 1, 'Test 77');
test(numberOfWays(27, 3), 1, 'Test 78');
test(numberOfWays(64, 2), 1, 'Test 79');
test(numberOfWays(8, 3), 1, 'Test 80');
test(numberOfWays(31, 1), 340, 'Test 81');
test(numberOfWays(1, 1), 1, 'Test 82');
test(numberOfWays(256, 5), 0, 'Test 83');
test(numberOfWays(64, 3), 1, 'Test 84');
test(numberOfWays(25, 2), 2, 'Test 85');
test(numberOfWays(28, 2), 0, 'Test 86');
test(numberOfWays(9, 2), 1, 'Test 87');
test(numberOfWays(12, 2), 0, 'Test 88');
test(numberOfWays(250, 5), 0, 'Test 89');
test(numberOfWays(81, 2), 3, 'Test 90');
test(numberOfWays(70, 1), 29927, 'Test 91');
test(numberOfWays(50, 5), 0, 'Test 92');
test(numberOfWays(9, 4), 0, 'Test 93');
test(numberOfWays(15, 1), 27, 'Test 94');
test(numberOfWays(250, 2), 21, 'Test 95');
test(numberOfWays(30, 1), 296, 'Test 96');

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
