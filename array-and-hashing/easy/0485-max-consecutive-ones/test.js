// Test: 485. Max Consecutive Ones
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { findMaxConsecutiveOnes } = require("./solution");

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

console.log("\n485. Max Consecutive Ones\n");

test(findMaxConsecutiveOnes([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 1');
test(findMaxConsecutiveOnes([1,0,0,0,1,0,0,1,1,0]), 2, 'Test 2');
test(findMaxConsecutiveOnes([1,0,1,1,0,1]), 2, 'Test 3');
test(findMaxConsecutiveOnes([1]), 1, 'Test 4');
test(findMaxConsecutiveOnes([1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0]), 4, 'Test 5');
test(findMaxConsecutiveOnes([1,0]), 1, 'Test 6');
test(findMaxConsecutiveOnes([1,1,0,0,1,1,1,0,1,1,1,1]), 4, 'Test 7');
test(findMaxConsecutiveOnes([1,0,0,0,0,0,1]), 1, 'Test 8');
test(findMaxConsecutiveOnes([0,1,1,0,1,1,1,0,0,0,1,1,0,1]), 3, 'Test 9');
test(findMaxConsecutiveOnes([0,1,0,1,0,1,0,1,0,1]), 1, 'Test 10');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 11');
test(findMaxConsecutiveOnes([1,1,1,1,1]), 5, 'Test 12');
test(findMaxConsecutiveOnes([0]), 0, 'Test 13');
test(findMaxConsecutiveOnes([1,1,0,1,1,1]), 3, 'Test 14');
test(findMaxConsecutiveOnes([0,1,0,1,0,1,0]), 1, 'Test 15');
test(findMaxConsecutiveOnes([1,0,1]), 1, 'Test 16');
test(findMaxConsecutiveOnes([0,0,0,0]), 0, 'Test 17');
test(findMaxConsecutiveOnes([0,0,0,0,0,0]), 0, 'Test 18');
test(findMaxConsecutiveOnes([1,0,0,0,0,1]), 1, 'Test 19');
test(findMaxConsecutiveOnes([1,1,0,0,1,1,1,0,1,1]), 3, 'Test 20');
test(findMaxConsecutiveOnes([1,1,1,1,1,1]), 6, 'Test 21');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,0]), 9, 'Test 22');
test(findMaxConsecutiveOnes([1,1,1,1,0,0,1,1,1,1,1]), 5, 'Test 23');
test(findMaxConsecutiveOnes([1,1,1,0,0,0,1,1,1,1,0,1,1,1]), 4, 'Test 24');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 25');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 26');
test(findMaxConsecutiveOnes([1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0]), 2, 'Test 27');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 28');
test(findMaxConsecutiveOnes([1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1]), 9, 'Test 29');
test(findMaxConsecutiveOnes([0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 29, 'Test 30');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 31');
test(findMaxConsecutiveOnes([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), 2, 'Test 32');
test(findMaxConsecutiveOnes([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 2, 'Test 33');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 34');
test(findMaxConsecutiveOnes([0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1]), 3, 'Test 35');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]), 37, 'Test 36');
test(findMaxConsecutiveOnes([1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1]), 3, 'Test 37');
test(findMaxConsecutiveOnes([1,1,1,1,0,0,1,1,1,1,1,0,1,1,1]), 5, 'Test 38');
test(findMaxConsecutiveOnes([1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0]), 4, 'Test 39');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 40');
test(findMaxConsecutiveOnes([1,1,1,1,0,0,1,1,1,0,1,1,1,1,1]), 5, 'Test 41');
test(findMaxConsecutiveOnes([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 2, 'Test 42');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 43');
test(findMaxConsecutiveOnes([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), 2, 'Test 44');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 10, 'Test 45');
test(findMaxConsecutiveOnes([0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1]), 6, 'Test 46');
test(findMaxConsecutiveOnes([0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 47');
test(findMaxConsecutiveOnes([0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0]), 7, 'Test 48');
test(findMaxConsecutiveOnes([0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0]), 7, 'Test 49');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 50');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 51');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 15, 'Test 52');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 14, 'Test 53');
test(findMaxConsecutiveOnes([1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1]), 2, 'Test 54');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 39, 'Test 55');
test(findMaxConsecutiveOnes([0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 17, 'Test 56');
test(findMaxConsecutiveOnes([1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 57');
test(findMaxConsecutiveOnes([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]), 1, 'Test 58');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]), 29, 'Test 59');
test(findMaxConsecutiveOnes([0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 60');
test(findMaxConsecutiveOnes([1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1]), 5, 'Test 61');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 20, 'Test 62');
test(findMaxConsecutiveOnes([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1]), 11, 'Test 63');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 38, 'Test 64');
test(findMaxConsecutiveOnes([0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1]), 6, 'Test 65');
test(findMaxConsecutiveOnes([0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0]), 3, 'Test 66');
test(findMaxConsecutiveOnes([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 67');
test(findMaxConsecutiveOnes([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 68');
test(findMaxConsecutiveOnes([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]), 2, 'Test 69');
test(findMaxConsecutiveOnes([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 70');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 71');
test(findMaxConsecutiveOnes([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 72');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 73');
test(findMaxConsecutiveOnes([0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1]), 4, 'Test 74');
test(findMaxConsecutiveOnes([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]), 1, 'Test 75');
test(findMaxConsecutiveOnes([1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1]), 3, 'Test 76');
test(findMaxConsecutiveOnes([0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]), 20, 'Test 77');
test(findMaxConsecutiveOnes([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 17, 'Test 78');
test(findMaxConsecutiveOnes([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1]), 5, 'Test 79');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 30, 'Test 80');
test(findMaxConsecutiveOnes([1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1]), 8, 'Test 81');
test(findMaxConsecutiveOnes([1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1]), 5, 'Test 82');
test(findMaxConsecutiveOnes([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 2, 'Test 83');
test(findMaxConsecutiveOnes([1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1]), 7, 'Test 84');
test(findMaxConsecutiveOnes([0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 85');
test(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 29, 'Test 86');
test(findMaxConsecutiveOnes([1,1,1,0,1,1,1,1,0,0,1,1,1,1,1]), 5, 'Test 87');
test(findMaxConsecutiveOnes([1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1]), 3, 'Test 88');
test(findMaxConsecutiveOnes([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), 2, 'Test 89');
test(findMaxConsecutiveOnes([1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 18, 'Test 90');
test(findMaxConsecutiveOnes([1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]), 28, 'Test 91');
test(findMaxConsecutiveOnes([1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1]), 6, 'Test 92');
test(findMaxConsecutiveOnes([1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1]), 6, 'Test 93');
test(findMaxConsecutiveOnes([0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 5, 'Test 94');
test(findMaxConsecutiveOnes([1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1]), 5, 'Test 95');
test(findMaxConsecutiveOnes([1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0]), 3, 'Test 96');
test(findMaxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 97');

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
