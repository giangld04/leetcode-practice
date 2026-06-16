// Test: 101. Symmetric Tree
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { isSymmetric } = require("./solution");

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

console.log("\n101. Symmetric Tree\n");

test(isSymmetric([1,2,3,4,5,6,7]), false, 'Test 1');
test(isSymmetric([1,2,3]), false, 'Test 2');
test(isSymmetric([1,2,2,3,null,null,3]), true, 'Test 3');
test(isSymmetric([1,2,2,3,4,4,3]), true, 'Test 4');
test(isSymmetric([1,2,3,4,null,null,5]), false, 'Test 5');
test(isSymmetric([2,3,3,4,5,5,4]), true, 'Test 6');
test(isSymmetric([1,2]), false, 'Test 7');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,8,7,6,5]), true, 'Test 8');
test(isSymmetric([1,2,2,3,4,3,4]), false, 'Test 9');
test(isSymmetric([1,2,2,3,4,5,3]), false, 'Test 10');
test(isSymmetric([1,2,2,null,3,null,3]), false, 'Test 11');
test(isSymmetric([1]), true, 'Test 12');
test(isSymmetric([1,2,2,2,null,2]), false, 'Test 13');
test(isSymmetric([1,2,2,3,4,4,3,null,5,6,7,8,8,7,6,5]), false, 'Test 14');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,9,9,8,7,6,5,10,11,11,10,12,13,13,12]), false, 'Test 15');
test(isSymmetric([1,2,2,3,null,null,3,4,null,null,4]), true, 'Test 16');
test(isSymmetric([1,2,2,3,null,null,3,null,4,4]), true, 'Test 17');
test(isSymmetric([1,2,2,3,4,4,3,null,null,5,5]), false, 'Test 18');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,8,7,6,5,null,null,null,null,null,null,null,9,null,10]), false, 'Test 19');
test(isSymmetric([1,2,2,3,4,4,3,null,5,null,5,null,null,6,6]), false, 'Test 20');
test(isSymmetric([1,2,2,3,4,4,3,null,5,6,null,6,5]), false, 'Test 21');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,null,null,null,8,9,10,11]), false, 'Test 22');
test(isSymmetric([1,2,3,3,2,1,null,4,null,null,4]), false, 'Test 23');
test(isSymmetric([1,2,2,3,4,4,3,null,5,null,5]), false, 'Test 24');
test(isSymmetric([1,2,2,3,4,4,3,null,5,5,null,null,null,null,6,6]), false, 'Test 25');
test(isSymmetric([1,2,2,3,null,null,3,null,4,5,5,4]), false, 'Test 26');
test(isSymmetric([1,2,2,3,4,4,3,null,null,5,5,null,null,6,6]), false, 'Test 27');
test(isSymmetric([1,2,2,3,4,4,3,5,null,null,6,7,null,null,8,9]), false, 'Test 28');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,null,8,null,8,7,6,5]), false, 'Test 29');
test(isSymmetric([1,2,2,3,4,4,3,null,5,5,null,null,null,null]), false, 'Test 30');
test(isSymmetric([1,2,2,3,null,3,null,4,null,4]), false, 'Test 31');
test(isSymmetric([1,2,2,3,4,4,3,null,5,5,null,null,6,6,null,7,7]), false, 'Test 32');
test(isSymmetric([1,2,2,3,4,4,3,5,6,null,null,6,5]), false, 'Test 33');
test(isSymmetric([1,2,2,3,4,4,3,5,null,6,null,7]), false, 'Test 34');
test(isSymmetric([1,2,2,3,4,4,3,5,null,null,6,null,null,6,5]), false, 'Test 35');
test(isSymmetric([1,2,2,3,4,4,3,5,null,null,null,null,5,6,6]), false, 'Test 36');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,9,10,11,11,10,9,8,7,6,5,4,3,2,1]), false, 'Test 37');
test(isSymmetric([1,2,2,3,4,4,3,5,null,null,null,6,7,7,6]), false, 'Test 38');
test(isSymmetric([1,2,2,3,4,4,3,5,6,null,null,6,null,5,7]), false, 'Test 39');
test(isSymmetric([1,2,2,3,4,4,3,5,null,6,null,6,null,5]), false, 'Test 40');
test(isSymmetric([1,2,2,null,3,3,null,4,null,null,4,null,5,null,null,5]), false, 'Test 41');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,9,8,7,6,5]), false, 'Test 42');
test(isSymmetric([1,2,3,4,5,6,7,null,null,8,9,10,11,11,10,9,8]), false, 'Test 43');
test(isSymmetric([1,2,2,3,4,4,3,null,5,5,6,6,7,7,8,8,9,9,10,10]), false, 'Test 44');
test(isSymmetric([1,2,2,3,4,4,3,5,6,6,5,7,8,8,7,9,9,10,null,10]), false, 'Test 45');
test(isSymmetric([1,2,2,3,4,4,3,null,5,6,null,7,null,8,9]), false, 'Test 46');
test(isSymmetric([1,2,2,3,4,4,3,5,6,null,null,7,8,8,7,null,null,9]), false, 'Test 47');
test(isSymmetric([1,2,2,3,null,null,3,4,null,5,6,null,null,7,8]), false, 'Test 48');
test(isSymmetric([1,2,2,3,4,4,3,null,null,5,null,5,null,null]), false, 'Test 49');
test(isSymmetric([1,2,2,3,4,4,3,5,6,null,7,null,null,8,9,9,8]), false, 'Test 50');
test(isSymmetric([1,2,2,3,4,4,3,5,null,null,6,7,8,9,10,10,9,8,7,6,null,null,11,12,12,11]), false, 'Test 51');
test(isSymmetric([1,2,2,3,4,4,3,5,null,null,6,7,8,8,7,6,null,null,9,10,10,9]), false, 'Test 52');
test(isSymmetric([1,2,2,3,4,4,3,5,null,6,null,7,8,9,null,9,8,7,6,5]), false, 'Test 53');
test(isSymmetric([1,2,2,3,4,4,3,null,5,null,null,5,null,null,null]), false, 'Test 54');
test(isSymmetric([1,2,2,3,4,4,3,5,null,6,null,7,8,null,8,7,6,5]), false, 'Test 55');
test(isSymmetric([1,2,2,3,4,4,3,null,5,null,6,7,null,8,9]), false, 'Test 56');
test(isSymmetric([1,2,3,3,2,null,1,4,null,null,4]), false, 'Test 57');
test(isSymmetric([1,2,2,3,null,3,3,null,4,4,4,null,null,5,5]), false, 'Test 58');
test(isSymmetric([1,2,2,3,4,null,null,5,null,null,null,6]), false, 'Test 59');
test(isSymmetric([1,2,2,3,4,null,3,null,5,6,7,8,9,10,11,11,10,9,8,7,6,5]), false, 'Test 60');
test(isSymmetric([1,2,2,3,4,null,null,5,null,null,6,7,null,null,8]), false, 'Test 61');
test(isSymmetric([1,2,2,3,4,null,3,5,null,6,null,7,8,9,null,null,null,null,10,null,null,11,10]), false, 'Test 62');
test(isSymmetric([1,2,2,3,null,null,3,4,5,5,4]), true, 'Test 63');
test(isSymmetric([1,2,2,3,4,4,3,null,5,null,null,5,null,null,null,6,7,8,8,7,6]), false, 'Test 64');
test(isSymmetric([1,2,3,4,5,6,7,null,null,8,9,10,11,null,null,12,null,null,13,null,null,14]), false, 'Test 65');
test(isSymmetric([1,2,2,3,4,4,3,null,null,null,null,null,5,5]), false, 'Test 66');
test(isSymmetric([1,2,2,3,null,null,3,4,5,null,5,null,4,6,null,null,6]), false, 'Test 67');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,9,10,11,12]), false, 'Test 68');
test(isSymmetric([1,2,2,3,4,4,3,null,null,null,null,5,6,5,6]), false, 'Test 69');
test(isSymmetric([1,2,2,3,4,4,3,5,null,null,5,null,6,6,null,7,null,7]), false, 'Test 70');
test(isSymmetric([1,2,2,3,null,null,3,4,5,5,null,6,6,7,8,8,7]), false, 'Test 71');
test(isSymmetric([1,2,2,3,null,null,3,5,6,6,5,7,8,8,7,9,9,10,10]), false, 'Test 72');
test(isSymmetric([1,2,2,3,4,3,4,null,null,null,null,5,5]), false, 'Test 73');
test(isSymmetric([1,2,2,3,4,4,3,null,5,6,7,8,9,10,11]), false, 'Test 74');
test(isSymmetric([1,2,2,3,4,4,3,5,null,null,null,null,5]), false, 'Test 75');
test(isSymmetric([1,2,2,3,4,4,3,5,null,6,null,7,null,6,5]), false, 'Test 76');
test(isSymmetric([1,2,2,3,4,4,3,5,null,6,null,7,8,null,null,9,null,10]), false, 'Test 77');
test(isSymmetric([1,2,2,3,4,4,3,5,null,6,null,7,null,6,5,null]), false, 'Test 78');
test(isSymmetric([1,2,2,3,4,4,3,5,null,null,null,null,5,6,6,5]), false, 'Test 79');
test(isSymmetric([1,2,2,3,4,4,3,5,6,6,5]), false, 'Test 80');
test(isSymmetric([1,2,2,3,4,4,3,5,6,null,7,null,8,null,null,9,10,10,9,null,8,null,7,null,6,5]), false, 'Test 81');
test(isSymmetric([1,2,2,3,4,4,3,null,5,5,null]), false, 'Test 82');
test(isSymmetric([1,2,2,3,null,null,3,null,null,4,4]), false, 'Test 83');
test(isSymmetric([1,2,2,3,4,4,3,5,null,6,6,null,5,null,null]), false, 'Test 84');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,8,7,6,5,9,10,10,9,11,12,12,11,13,14,15,15,14,13]), false, 'Test 85');
test(isSymmetric([1,2,2,3,4,4,3,5,null,6,7,8,9,10,11,11,10,9,8,7,6,5]), false, 'Test 86');
test(isSymmetric([1,2,2,3,4,null,4,5,null,null,5]), false, 'Test 87');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,8,7,6,5,9,null,null,null,null,null,null,null,10]), false, 'Test 88');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,null,null,7,6,5]), true, 'Test 89');
test(isSymmetric([1,2,2,3,4,4,3,5,null,6,null,6,5,null,7]), false, 'Test 90');
test(isSymmetric([1,2,2,3,4,4,3,5,6,null,null,null,null,6,5]), true, 'Test 91');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,8,7,6,5,9,10,10,9,11,12,12,11,13,14,14,13]), false, 'Test 92');
test(isSymmetric([1,2,2,3,null,null,3,4,5,null,null,5,4]), false, 'Test 93');
test(isSymmetric([1,2,2,3,null,4,3,5,null,6,null,6,5]), false, 'Test 94');
test(isSymmetric([1,2,2,3,4,4,3,5,null,null,6,7,8,8,7,6,null,null,9,10,null,null,10,9]), false, 'Test 95');
test(isSymmetric([1,2,2,3,3,null,null,4,4,null,null,5,5]), false, 'Test 96');
test(isSymmetric([1,2,2,3,4,4,3,null,null,5,6,6,5]), true, 'Test 97');
test(isSymmetric([1,2,2,3,4,4,3,null,5,6,null,6,5,null,null,null]), false, 'Test 98');
test(isSymmetric([1,2,2,3,4,4,3,null,5,null,null,5,null,null,null,6,null,8,8,null,6]), false, 'Test 99');
test(isSymmetric([1,2,2,3,4,4,3,null,5,null,5,null,null,null,null]), false, 'Test 100');
test(isSymmetric([1,2,2,3,4,4,3,5,6,6,5,null,7,7,null,8,8]), false, 'Test 101');
test(isSymmetric([1,2,2,3,4,4,3,null,5,null,5,null,null,null]), false, 'Test 102');
test(isSymmetric([1,2,2,3,4,4,3,5,6,null,6,5,null,null,7,7]), false, 'Test 103');
test(isSymmetric([1,2,2,3,4,4,3,5,6,7,8,null,8,7,6,5]), false, 'Test 104');
test(isSymmetric([1,2,2,3,4,4,3,null,null,5,5,null,null,null]), false, 'Test 105');
test(isSymmetric([1,2,3,4,5,6,7,null,8,9,10,11,12,13,14]), false, 'Test 106');
test(isSymmetric([1,2,2,3,4,4,3,null,null,null,null,5,6,7,8,9,10,null,null,10,9,8,7,6,5]), false, 'Test 107');
test(isSymmetric([1,2,2,3,4,4,3,5,6,6,5,7,8,8,7]), false, 'Test 108');
test(isSymmetric([1,2,2,3,4,4,3,null,null,null,null,5,null,5]), false, 'Test 109');
test(isSymmetric([1,2,2,3,null,3,3,4,null,null,4,null,null,5,5]), false, 'Test 110');
test(isSymmetric([1,2,2,3,4,4,3,null,5,null,5,null,null,6,7]), false, 'Test 111');

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
