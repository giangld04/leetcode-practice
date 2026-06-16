// Test: 3096. Minimum Levels To Gain More Points
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { minimumLevels } = require("./solution");

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

console.log("\n3096. Minimum Levels To Gain More Points\n");

test(minimumLevels([0,0,0,0,0,0,0,0,0,0]), 1, 'Test 1');
test(minimumLevels([0,0,0,0,1,1,1,1]), -1, 'Test 2');
test(minimumLevels([1,1,1,1,1,1,1,1]), 5, 'Test 3');
test(minimumLevels([0,0,0,0,0,0,0,0]), 1, 'Test 4');
test(minimumLevels([1,0,1,0]), 1, 'Test 5');
test(minimumLevels([0,1,0,1,0,1]), -1, 'Test 6');
test(minimumLevels([0,0]), -1, 'Test 7');
test(minimumLevels([1,1,0,1,0,1,0,1,0]), 1, 'Test 8');
test(minimumLevels([1,1,0,0,1,1]), 2, 'Test 9');
test(minimumLevels([1,0,0,0,0,0,1]), 1, 'Test 10');
test(minimumLevels([1,1,1,1,1]), 3, 'Test 11');
test(minimumLevels([1,1,1,0,0,0,1]), 1, 'Test 12');
test(minimumLevels([1,1,1,0,0,0,1,1,1]), 2, 'Test 13');
test(minimumLevels([1,1,1,1,0,0,0,0]), 1, 'Test 14');
test(minimumLevels([1,0,1,0,1,0,1,0]), 1, 'Test 15');
test(minimumLevels([0,1,0,1,0,1,0,1,0,1]), -1, 'Test 16');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1]), 6, 'Test 17');
test(minimumLevels([0,1,0,1,0,1,0,1]), -1, 'Test 18');
test(minimumLevels([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 19');
test(minimumLevels([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 20');
test(minimumLevels([0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0]), 9, 'Test 21');
test(minimumLevels([0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]), 1, 'Test 22');
test(minimumLevels([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), 2, 'Test 23');
test(minimumLevels([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 1, 'Test 24');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 16, 'Test 25');
test(minimumLevels([1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0]), 1, 'Test 26');
test(minimumLevels([1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 27');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 28');
test(minimumLevels([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 29');
test(minimumLevels([0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]), 2, 'Test 30');
test(minimumLevels([1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 31');
test(minimumLevels([1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1]), 1, 'Test 32');
test(minimumLevels([0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0]), 3, 'Test 33');
test(minimumLevels([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 34');
test(minimumLevels([1,1,1,0,1,0,1,0,1,0,1,0,1,0,1]), 2, 'Test 35');
test(minimumLevels([1,1,0,1,0,1,0,1,0,1,1,1,0,0,1]), 2, 'Test 36');
test(minimumLevels([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 37');
test(minimumLevels([1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 2, 'Test 38');
test(minimumLevels([1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0]), 1, 'Test 39');
test(minimumLevels([1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0]), 10, 'Test 40');
test(minimumLevels([1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1]), 1, 'Test 41');
test(minimumLevels([1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1]), 1, 'Test 42');
test(minimumLevels([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]), 1, 'Test 43');
test(minimumLevels([0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 44');
test(minimumLevels([0,1,0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 45');
test(minimumLevels([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 46');
test(minimumLevels([1,1,1,1,0,0,0,0,0,0,0,0]), 1, 'Test 47');
test(minimumLevels([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), 2, 'Test 48');
test(minimumLevels([1,1,0,0,1,1,0,0,1,1,0,0]), 1, 'Test 49');
test(minimumLevels([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 50');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,0,0,0,0,0]), 3, 'Test 51');
test(minimumLevels([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]), 1, 'Test 52');
test(minimumLevels([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 53');
test(minimumLevels([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 54');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 11, 'Test 55');
test(minimumLevels([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), -1, 'Test 56');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 23, 'Test 57');
test(minimumLevels([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 58');
test(minimumLevels([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 59');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 14, 'Test 60');
test(minimumLevels([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 61');
test(minimumLevels([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 1, 'Test 62');
test(minimumLevels([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), 2, 'Test 63');
test(minimumLevels([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]), 1, 'Test 64');
test(minimumLevels([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0]), 1, 'Test 65');
test(minimumLevels([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 66');
test(minimumLevels([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]), 1, 'Test 67');
test(minimumLevels([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]), 1, 'Test 68');
test(minimumLevels([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 69');
test(minimumLevels([0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]), 10, 'Test 70');
test(minimumLevels([0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1]), 6, 'Test 71');
test(minimumLevels([0,0,0,0,0,0,1,1,1,1,1,1,1,1,1]), 14, 'Test 72');
test(minimumLevels([1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 73');
test(minimumLevels([0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]), 18, 'Test 74');
test(minimumLevels([1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 75');
test(minimumLevels([1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 76');
test(minimumLevels([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 77');
test(minimumLevels([1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 78');
test(minimumLevels([0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0]), 6, 'Test 79');
test(minimumLevels([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 80');
test(minimumLevels([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 81');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]), 6, 'Test 82');
test(minimumLevels([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), -1, 'Test 83');
test(minimumLevels([1,1,0,0,1,1,0,0,1,1]), 2, 'Test 84');
test(minimumLevels([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 85');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 12, 'Test 86');
test(minimumLevels([0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1]), -1, 'Test 87');
test(minimumLevels([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 88');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 40, 'Test 89');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 16, 'Test 90');
test(minimumLevels([1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1]), 12, 'Test 91');
test(minimumLevels([1,1,0,1,0,1,0,1,0,1,0,1,0,1]), 2, 'Test 92');
test(minimumLevels([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 93');
test(minimumLevels([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 94');
test(minimumLevels([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 95');
test(minimumLevels([1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0]), 8, 'Test 96');
test(minimumLevels([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 13, 'Test 97');
test(minimumLevels([1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 98');
test(minimumLevels([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0]), 1, 'Test 99');
test(minimumLevels([1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 100');
test(minimumLevels([0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0]), 22, 'Test 101');
test(minimumLevels([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0]), 1, 'Test 102');
test(minimumLevels([0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0]), 10, 'Test 103');
test(minimumLevels([1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1]), 1, 'Test 104');
test(minimumLevels([1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0]), 1, 'Test 105');
test(minimumLevels([1,1,1,1,1,0,0,0,0,0,1,1,1,1,1]), 3, 'Test 106');
test(minimumLevels([1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0]), 1, 'Test 107');
test(minimumLevels([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 1, 'Test 108');
test(minimumLevels([1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), 3, 'Test 109');
test(minimumLevels([0,0,0,0,0,0,0,0,1,1,1,1]), 1, 'Test 110');
test(minimumLevels([1,1,0,0,1,1,1,0,1,0]), 2, 'Test 111');
test(minimumLevels([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 112');
test(minimumLevels([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 113');
test(minimumLevels([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 114');

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
