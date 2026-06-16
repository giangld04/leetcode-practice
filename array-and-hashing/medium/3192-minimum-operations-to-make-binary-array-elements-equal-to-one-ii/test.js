// Test: 3192. Minimum Operations To Make Binary Array Elements Equal To One Ii
// 68 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3192. Minimum Operations To Make Binary Array Elements Equal To One Ii\n");

test(minOperations([0,1,0,1,0,1]), 6, 'Test 1');
test(minOperations([1,0,1,0,1]), 4, 'Test 2');
test(minOperations([0,1,0,1,0]), 5, 'Test 3');
test(minOperations([0,0,1,1,1,0]), 3, 'Test 4');
test(minOperations([1,0,1,0,1,0,1,0,1]), 8, 'Test 5');
test(minOperations([1]), 0, 'Test 6');
test(minOperations([1,1,0,0,1,1,0,0]), 3, 'Test 7');
test(minOperations([1,0,0,0]), 1, 'Test 8');
test(minOperations([0,0,0,0,0]), 1, 'Test 9');
test(minOperations([1,0,0,1,0,0]), 3, 'Test 10');
test(minOperations([0,1,0,1,0,1,0,1,0,1]), 10, 'Test 11');
test(minOperations([1,1,1,1,1]), 0, 'Test 12');
test(minOperations([0]), 1, 'Test 13');
test(minOperations([1,0,1,0,1,0]), 5, 'Test 14');
test(minOperations([0,1,0,1,0,1,0]), 7, 'Test 15');
test(minOperations([0,0,1,1,0,0,1,1]), 4, 'Test 16');
test(minOperations([0,0,0,1,1]), 2, 'Test 17');
test(minOperations([1,1,0,0,0]), 1, 'Test 18');
test(minOperations([0,1,1,0,1]), 4, 'Test 19');
test(minOperations([1,0,1,0,1,0,1]), 6, 'Test 20');
test(minOperations([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), 8, 'Test 21');
test(minOperations([0,0,0,0,0,0,0,0,0,0]), 1, 'Test 22');
test(minOperations([1,0,0,1,1,0,0,1,1,0,1,0,1,0,0]), 9, 'Test 23');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 2, 'Test 24');
test(minOperations([0,0,0,0,0,1,1,1,1,1,0,0,0,0,0]), 3, 'Test 25');
test(minOperations([1,0,1,0,1,0,1,0]), 7, 'Test 26');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 27');
test(minOperations([0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1]), 6, 'Test 28');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 14, 'Test 29');
test(minOperations([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 16, 'Test 30');
test(minOperations([1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0]), 11, 'Test 31');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 32');
test(minOperations([0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]), 3, 'Test 33');
test(minOperations([1,0,1,0,1,0,1,0,1,0]), 9, 'Test 34');
test(minOperations([1,1,1,1,1,0,0,0,0,0]), 1, 'Test 35');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 18, 'Test 36');
test(minOperations([0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1]), 14, 'Test 37');
test(minOperations([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 38');
test(minOperations([1,1,1,1,1,0,0,0,0,0,1,1,1,1,1]), 2, 'Test 39');
test(minOperations([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 11, 'Test 40');
test(minOperations([1,1,0,0,1,0,1,0,0]), 5, 'Test 41');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 42');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 43');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 44');
test(minOperations([0,0,0,0,0,1,1,1,1,1]), 2, 'Test 45');
test(minOperations([1,1,0,1,0,0,1,0]), 5, 'Test 46');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 15, 'Test 47');
test(minOperations([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 22, 'Test 48');
test(minOperations([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 60, 'Test 49');
test(minOperations([1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 50');
test(minOperations([0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 7, 'Test 51');
test(minOperations([0,1,0,1,0,1,0,1]), 8, 'Test 52');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 16, 'Test 53');
test(minOperations([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 10, 'Test 54');
test(minOperations([1,1,1,1,0,0,0,0,1,1,1,1]), 2, 'Test 55');
test(minOperations([0,0,1,0,0,1,1,0,0,1,1,1,0,1]), 8, 'Test 56');
test(minOperations([0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1]), 14, 'Test 57');
test(minOperations([1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1]), 6, 'Test 58');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 35, 'Test 59');
test(minOperations([1,1,0,0,1,1,0,0,1,1]), 4, 'Test 60');
test(minOperations([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), 8, 'Test 61');
test(minOperations([0,1,1,0,0,0,1,1,0,0,1,0,1,1,0]), 9, 'Test 62');
test(minOperations([1,1,0,1,0,0,1,1,0]), 5, 'Test 63');
test(minOperations([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 2, 'Test 64');
test(minOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 2, 'Test 65');
test(minOperations([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]), 29, 'Test 66');
test(minOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 25, 'Test 67');
test(minOperations([1,1,1,0,0,0,1,1,1,0,1,1,0,0]), 5, 'Test 68');

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
