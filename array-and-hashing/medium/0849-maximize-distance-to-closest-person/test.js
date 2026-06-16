// Test: 849. Maximize Distance To Closest Person
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { maxDistToClosest } = require("./solution");

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

console.log("\n849. Maximize Distance To Closest Person\n");

test(maxDistToClosest([0,0,0,1,0,1,0,0,0]), 3, 'Test 1');
test(maxDistToClosest([0,0,1,0,0,0,0,1]), 2, 'Test 2');
test(maxDistToClosest([0,0,0,1,0,0,0]), 3, 'Test 3');
test(maxDistToClosest([1,0,0,0]), 3, 'Test 4');
test(maxDistToClosest([0,1]), 1, 'Test 5');
test(maxDistToClosest([1,0,0,0,0,0,1]), 3, 'Test 6');
test(maxDistToClosest([0,0,1,0,0,0,0,1,0,0]), 2, 'Test 7');
test(maxDistToClosest([1,1,0,0,0,0,1,1]), 2, 'Test 8');
test(maxDistToClosest([0,0,0,1]), 3, 'Test 9');
test(maxDistToClosest([1,0,0,0,0,0,0,1]), 3, 'Test 10');
test(maxDistToClosest([1,0,0,0,0,0,0,0,1]), 4, 'Test 11');
test(maxDistToClosest([1,0,0,1,0,0,1]), 1, 'Test 12');
test(maxDistToClosest([1,0,0,0,1,0,1]), 2, 'Test 13');
test(maxDistToClosest([1,0,1,0,1,0,1]), 1, 'Test 14');
test(maxDistToClosest([0,0,1,0,1,0,1,0,0]), 2, 'Test 15');
test(maxDistToClosest([0,0,1,0,1,0,0,0]), 3, 'Test 16');
test(maxDistToClosest([1,0,0,1,0,0,0,0,1]), 2, 'Test 17');
test(maxDistToClosest([0,0,0,1,0,0,0,0,0,1]), 3, 'Test 18');
test(maxDistToClosest([1,0,0,1,0,0,0,1]), 2, 'Test 19');
test(maxDistToClosest([0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]), 5, 'Test 20');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 18, 'Test 21');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 19, 'Test 22');
test(maxDistToClosest([0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0]), 5, 'Test 23');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 19, 'Test 24');
test(maxDistToClosest([0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0]), 4, 'Test 25');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 27, 'Test 26');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 29, 'Test 27');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 22, 'Test 28');
test(maxDistToClosest([0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 14, 'Test 29');
test(maxDistToClosest([0,0,1,0,0,0,0,0,0,1,0,0,0]), 3, 'Test 30');
test(maxDistToClosest([1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1]), 10, 'Test 31');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 13, 'Test 32');
test(maxDistToClosest([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1]), 6, 'Test 33');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 14, 'Test 34');
test(maxDistToClosest([1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1]), 6, 'Test 35');
test(maxDistToClosest([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 36');
test(maxDistToClosest([0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1]), 5, 'Test 37');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 7, 'Test 38');
test(maxDistToClosest([0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 9, 'Test 39');
test(maxDistToClosest([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 40');
test(maxDistToClosest([1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]), 5, 'Test 41');
test(maxDistToClosest([0,1,0,0,0,0,0,0,0,0,0,0,0,1,0]), 6, 'Test 42');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 15, 'Test 43');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,1]), 5, 'Test 44');
test(maxDistToClosest([0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0]), 3, 'Test 45');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]), 9, 'Test 46');
test(maxDistToClosest([0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]), 9, 'Test 47');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 51, 'Test 48');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,1]), 6, 'Test 49');
test(maxDistToClosest([0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 7, 'Test 50');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 19, 'Test 51');
test(maxDistToClosest([0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 10, 'Test 52');
test(maxDistToClosest([1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1]), 3, 'Test 53');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 11, 'Test 54');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 19, 'Test 55');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 7, 'Test 56');
test(maxDistToClosest([0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1]), 6, 'Test 57');
test(maxDistToClosest([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 58');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 16, 'Test 59');
test(maxDistToClosest([1,0,0,0,0,0,0,0,1,0,0,0,0,0,1]), 4, 'Test 60');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 10, 'Test 61');
test(maxDistToClosest([0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 10, 'Test 62');
test(maxDistToClosest([1,0,0,0,1,0,0,1,0,0,0,0,1]), 2, 'Test 63');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 20, 'Test 64');
test(maxDistToClosest([0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 18, 'Test 65');
test(maxDistToClosest([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 66');
test(maxDistToClosest([0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1]), 5, 'Test 67');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 33, 'Test 68');
test(maxDistToClosest([1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1]), 3, 'Test 69');
test(maxDistToClosest([0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]), 11, 'Test 70');
test(maxDistToClosest([0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1]), 3, 'Test 71');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 14, 'Test 72');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 31, 'Test 73');
test(maxDistToClosest([0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 13, 'Test 74');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 11, 'Test 75');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 9, 'Test 76');
test(maxDistToClosest([1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1]), 3, 'Test 77');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 10, 'Test 78');
test(maxDistToClosest([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1]), 7, 'Test 79');
test(maxDistToClosest([1,0,0,0,0,0,1,0,0,0,0,0,1]), 3, 'Test 80');
test(maxDistToClosest([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 81');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]), 13, 'Test 82');
test(maxDistToClosest([0,1,0,0,0,0,0,0,0,0,0,0,0,1]), 6, 'Test 83');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 11, 'Test 84');
test(maxDistToClosest([0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1]), 17, 'Test 85');
test(maxDistToClosest([0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1]), 4, 'Test 86');
test(maxDistToClosest([1,0,0,0,0,0,1,0,0,0,0,1]), 3, 'Test 87');
test(maxDistToClosest([0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0]), 5, 'Test 88');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1]), 5, 'Test 89');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]), 23, 'Test 90');
test(maxDistToClosest([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]), 8, 'Test 91');
test(maxDistToClosest([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 92');
test(maxDistToClosest([0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 9, 'Test 93');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 13, 'Test 94');
test(maxDistToClosest([0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1]), 6, 'Test 95');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 8, 'Test 96');
test(maxDistToClosest([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 97');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 25, 'Test 98');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 14, 'Test 99');
test(maxDistToClosest([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 1, 'Test 100');
test(maxDistToClosest([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 101');
test(maxDistToClosest([0,1,0,0,0,0,1,0,0,1,0,0,0,0,1]), 2, 'Test 102');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 71, 'Test 103');
test(maxDistToClosest([1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 9, 'Test 104');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 12, 'Test 105');
test(maxDistToClosest([1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]), 20, 'Test 106');
test(maxDistToClosest([1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1]), 6, 'Test 107');
test(maxDistToClosest([0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 11, 'Test 108');
test(maxDistToClosest([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 109');
test(maxDistToClosest([0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]), 8, 'Test 110');
test(maxDistToClosest([1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]), 3, 'Test 111');
test(maxDistToClosest([0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]), 8, 'Test 112');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 8, 'Test 113');
test(maxDistToClosest([0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1]), 5, 'Test 114');
test(maxDistToClosest([0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0]), 6, 'Test 115');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 20, 'Test 116');
test(maxDistToClosest([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 30, 'Test 117');
test(maxDistToClosest([1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0]), 3, 'Test 118');
test(maxDistToClosest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 12, 'Test 119');
test(maxDistToClosest([1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1]), 3, 'Test 120');

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
