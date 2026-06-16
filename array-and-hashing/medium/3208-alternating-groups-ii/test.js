// Test: 3208. Alternating Groups Ii
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfAlternatingGroups } = require("./solution");

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

console.log("\n3208. Alternating Groups Ii\n");

test(numberOfAlternatingGroups([1,1,0,1], 4), 0, 'Test 1');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0], 3), 8, 'Test 2');
test(numberOfAlternatingGroups([0,1,0,0,1,0,1], 6), 2, 'Test 3');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1], 3), 7, 'Test 4');
test(numberOfAlternatingGroups([0,0,1,1,0,0,1,1,0,0], 4), 0, 'Test 5');
test(numberOfAlternatingGroups([0,0,1,1,0,0,1,1], 4), 0, 'Test 6');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0], 6), 12, 'Test 7');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0], 4), 8, 'Test 8');
test(numberOfAlternatingGroups([0,0,1,1,0,0,1,1], 5), 0, 'Test 9');
test(numberOfAlternatingGroups([0,1,0,1,0], 3), 3, 'Test 10');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1], 5), 5, 'Test 11');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1], 7), 5, 'Test 12');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 10), 22, 'Test 13');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 13), 24, 'Test 14');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 5), 26, 'Test 15');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1], 7), 12, 'Test 16');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 9), 22, 'Test 17');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 10), 18, 'Test 18');
test(numberOfAlternatingGroups([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 6), 0, 'Test 19');
test(numberOfAlternatingGroups([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 6), 0, 'Test 20');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 9), 20, 'Test 21');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 5), 20, 'Test 22');
test(numberOfAlternatingGroups([0,1,0,1,0,0,1,0,1,0,1,0], 6), 2, 'Test 23');
test(numberOfAlternatingGroups([1,0,0,1,1,0,0,1,1,0,0,1,1,0], 6), 0, 'Test 24');
test(numberOfAlternatingGroups([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 4), 0, 'Test 25');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 12), 34, 'Test 26');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 7), 16, 'Test 27');
test(numberOfAlternatingGroups([0,0,1,1,0,0,1,1,0,0,1,1,0,0], 8), 0, 'Test 28');
test(numberOfAlternatingGroups([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1], 4), 0, 'Test 29');
test(numberOfAlternatingGroups([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 0, 'Test 30');
test(numberOfAlternatingGroups([0,1,1,0,1,0,0,1,0,1,1,0,1,0], 4), 3, 'Test 31');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 20), 46, 'Test 32');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 15), 28, 'Test 33');
test(numberOfAlternatingGroups([1,1,0,0,1,1,0,0,1,1,0,0], 6), 0, 'Test 34');
test(numberOfAlternatingGroups([1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1], 5), 0, 'Test 35');
test(numberOfAlternatingGroups([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 6), 0, 'Test 36');
test(numberOfAlternatingGroups([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 12), 0, 'Test 37');
test(numberOfAlternatingGroups([0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0], 5), 0, 'Test 38');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 8), 16, 'Test 39');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 3), 16, 'Test 40');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 7), 21, 'Test 41');
test(numberOfAlternatingGroups([0,1,1,0,1,0,0,1,0,1,1,0,0], 6), 0, 'Test 42');
test(numberOfAlternatingGroups([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 12), 0, 'Test 43');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 15), 59, 'Test 44');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 11), 32, 'Test 45');
test(numberOfAlternatingGroups([0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 8), 14, 'Test 46');
test(numberOfAlternatingGroups([0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0], 8), 4, 'Test 47');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 11), 25, 'Test 48');
test(numberOfAlternatingGroups([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 10), 0, 'Test 49');
test(numberOfAlternatingGroups([1,0,0,1,0,1,0,0,1,0,1,0,1], 5), 3, 'Test 50');
test(numberOfAlternatingGroups([0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0], 7), 0, 'Test 51');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 10), 30, 'Test 52');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 9), 30, 'Test 53');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 20), 70, 'Test 54');
test(numberOfAlternatingGroups([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1], 9), 0, 'Test 55');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1], 5), 12, 'Test 56');
test(numberOfAlternatingGroups([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1], 4), 0, 'Test 57');
test(numberOfAlternatingGroups([1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1], 5), 0, 'Test 58');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1], 4), 8, 'Test 59');
test(numberOfAlternatingGroups([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 8), 0, 'Test 60');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0], 5), 10, 'Test 61');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 11), 26, 'Test 62');
test(numberOfAlternatingGroups([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0], 9), 0, 'Test 63');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 25), 138, 'Test 64');
test(numberOfAlternatingGroups([0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 6), 14, 'Test 65');
test(numberOfAlternatingGroups([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 5), 0, 'Test 66');
test(numberOfAlternatingGroups([0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 10), 22, 'Test 67');
test(numberOfAlternatingGroups([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0], 9), 0, 'Test 68');
test(numberOfAlternatingGroups([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 8), 0, 'Test 69');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 10), 18, 'Test 70');
test(numberOfAlternatingGroups([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 14), 0, 'Test 71');
test(numberOfAlternatingGroups([0,1,1,0,1,0,1,0,1,0], 5), 4, 'Test 72');
test(numberOfAlternatingGroups([0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1], 8), 0, 'Test 73');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 20), 20, 'Test 74');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 5), 11, 'Test 75');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 10), 14, 'Test 76');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 9), 9, 'Test 77');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0], 7), 7, 'Test 78');
test(numberOfAlternatingGroups([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5), 0, 'Test 79');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 11), 20, 'Test 80');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 11), 17, 'Test 81');
test(numberOfAlternatingGroups([0,1,1,0,1,0,0,1,0,1,0,1,0], 4), 5, 'Test 82');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 6), 20, 'Test 83');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0], 7), 12, 'Test 84');
test(numberOfAlternatingGroups([1,0,0,1,1,0,0,1,1,0,0,1,1], 5), 0, 'Test 85');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 8), 52, 'Test 86');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 15), 19, 'Test 87');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 7), 17, 'Test 88');
test(numberOfAlternatingGroups([1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1], 9), 5, 'Test 89');
test(numberOfAlternatingGroups([0,0,1,1,0,1,0,1,0,1,0], 5), 4, 'Test 90');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 9), 16, 'Test 91');
test(numberOfAlternatingGroups([0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1], 13), 0, 'Test 92');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 8), 32, 'Test 93');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1], 5), 10, 'Test 94');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 12), 26, 'Test 95');
test(numberOfAlternatingGroups([1,0,1,0,1,0,1,0,1,0,1], 6), 6, 'Test 96');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 11), 20, 'Test 97');
test(numberOfAlternatingGroups([1,1,0,0,1,1,0,0,1,1,0,0,1,1], 4), 0, 'Test 98');
test(numberOfAlternatingGroups([0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 6), 44, 'Test 99');
test(numberOfAlternatingGroups([0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0], 6), 0, 'Test 100');
test(numberOfAlternatingGroups([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 6), 0, 'Test 101');
test(numberOfAlternatingGroups([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 7), 20, 'Test 102');
test(numberOfAlternatingGroups([0,1,1,0,1,0,0,1,0,1], 4), 4, 'Test 103');

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
