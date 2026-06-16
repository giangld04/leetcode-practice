// Test: 2331. Evaluate Boolean Binary Tree
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { evaluateTree } = require("./solution");

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

console.log("\n2331. Evaluate Boolean Binary Tree\n");

test(evaluateTree([3,1,1,null,null,0,0]), false, 'Test 1');
test(evaluateTree([2,3,1,null,null,0,1]), true, 'Test 2');
test(evaluateTree([2,3,2,null,null,1,1,null,null,null,null]), true, 'Test 3');
test(evaluateTree([2,1,1]), true, 'Test 4');
test(evaluateTree([2,3,3,1,1,0,0]), true, 'Test 5');
test(evaluateTree([3,2,2,3,3,3,3,1,1,1,1,1,1,1,1]), true, 'Test 6');
test(evaluateTree([3,2,2,null,null,0,0,null,null,1,0,null,null,1,1]), true, 'Test 7');
test(evaluateTree([3,0,0,null,null,null,null]), false, 'Test 8');
test(evaluateTree([3,0,1,null,null,null,null]), false, 'Test 9');
test(evaluateTree([3,0,0]), false, 'Test 10');
test(evaluateTree([2,3,3,2,2,2,2,0,0,0,0,0,0,0,0]), false, 'Test 11');
test(evaluateTree([3,0,1]), false, 'Test 12');
test(evaluateTree([2,2,3,0,1,0,1]), true, 'Test 13');
test(evaluateTree([2,3,2,null,null,0,1,null,null,0,1]), true, 'Test 14');
test(evaluateTree([0]), false, 'Test 15');
test(evaluateTree([2,3,3,0,1,0,1]), false, 'Test 16');
test(evaluateTree([3,2,2,0,0,1,1]), false, 'Test 17');
test(evaluateTree([3,3,2,1,0,1,0]), false, 'Test 18');
test(evaluateTree([2,1,3,null,null,0,1]), true, 'Test 19');
test(evaluateTree([2,2,2,1,0,0,1]), true, 'Test 20');
test(evaluateTree([2,3,2,0,1,1,0]), true, 'Test 21');
test(evaluateTree([2,1,1,null,null,null,null]), true, 'Test 22');
test(evaluateTree([3,2,3,3,2,1,1,1,0,0,0,0,0,0,0]), false, 'Test 23');
test(evaluateTree([2,2,3,2,2,2,3,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1]), false, 'Test 24');
test(evaluateTree([3,2,3,3,2,2,2,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), Error: 'nullType' object has no attribute 'left', 'Test 25');
test(evaluateTree([2,3,3,3,2,2,2,2,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]), Error: 'nullType' object has no attribute 'left', 'Test 26');
test(evaluateTree([2,2,3,1,0,3,1,0,1,0,1,0,1,0,1]), false, 'Test 27');
test(evaluateTree([2,3,2,3,3,2,2,3,3,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), false, 'Test 28');
test(evaluateTree([3,2,3,1,1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), Error: 'nullType' object has no attribute 'left', 'Test 29');
test(evaluateTree([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), true, 'Test 30');
test(evaluateTree([3,2,2,1,0,1,0,0,1,1,0,0,1,0,1]), false, 'Test 31');
test(evaluateTree([3,2,3,2,3,2,3,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), Error: 'nullType' object has no attribute 'left', 'Test 32');
test(evaluateTree([3,2,3,2,1,0,1,null,null,null,null,1,0]), false, 'Test 33');
test(evaluateTree([2,2,3,1,3,0,1,0,1,3,0,1,0,1,0]), false, 'Test 34');
test(evaluateTree([3,2,3,2,1,1,0,0,0,1,0,0,1,1,0]), false, 'Test 35');
test(evaluateTree([2,2,3,1,3,0,1,0,1,1,0,0,1,1,0]), false, 'Test 36');
test(evaluateTree([2,3,2,3,2,3,2,3,2,2,2,2,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1]), Error: 'nullType' object has no attribute 'left', 'Test 37');
test(evaluateTree([2,3,2,3,2,3,2,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 38');
test(evaluateTree([2,2,2,3,3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: 'nullType' object has no attribute 'left', 'Test 39');
test(evaluateTree([3,3,3,3,3,3,3,3,3,3,3,3,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1]), Error: 'nullType' object has no attribute 'left', 'Test 40');
test(evaluateTree([3,2,3,3,3,2,2,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: 'nullType' object has no attribute 'left', 'Test 41');
test(evaluateTree([2,3,2,2,3,2,3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 42');
test(evaluateTree([2,3,2,3,2,2,2,3,2,3,2,3,2,3,2,3,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), true, 'Test 43');
test(evaluateTree([2,3,3,2,2,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), Error: 'nullType' object has no attribute 'left', 'Test 44');
test(evaluateTree([2,3,3,2,2,2,2,3,3,3,3,2,2,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0]), Error: 'nullType' object has no attribute 'left', 'Test 45');
test(evaluateTree([3,2,3,2,3,2,3,2,3,2,3,2,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1]), Error: 'nullType' object has no attribute 'left', 'Test 46');
test(evaluateTree([2,3,2,0,1,3,1,0,0,1,1,0,1,1,0]), false, 'Test 47');
test(evaluateTree([2,3,3,2,2,3,3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: 'nullType' object has no attribute 'left', 'Test 48');
test(evaluateTree([2,3,2,3,1,1,0,0,1,0,1,0,1,0,1]), false, 'Test 49');
test(evaluateTree([2,3,2,3,2,0,1,0,1,1,0,1,0,1,0]), false, 'Test 50');
test(evaluateTree([2,3,3,2,0,0,1,3,1,0,1,3,0,1,0]), false, 'Test 51');
test(evaluateTree([3,3,3,3,3,3,3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 52');
test(evaluateTree([3,2,2,0,1,1,0,3,0,1,0,1,0,1,0]), false, 'Test 53');
test(evaluateTree([2,3,2,2,1,0,1,2,1,0,0,1,1,0,0]), true, 'Test 54');
test(evaluateTree([2,2,2,1,2,1,3,0,0,0,1,1,0,1,0]), true, 'Test 55');
test(evaluateTree([3,3,3,2,2,2,2,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 56');
test(evaluateTree([3,3,3,2,1,1,0,2,0,1,1,0,2,0,1]), false, 'Test 57');
test(evaluateTree([3,2,2,3,3,3,3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 58');
test(evaluateTree([2,2,2,1,0,3,3,1,0,1,0,1,0,1,0,3,1,0,1,0]), Error: 'nullType' object has no attribute 'left', 'Test 59');
test(evaluateTree([3,2,3,2,3,2,3,3,2,3,2,3,2,3,2,3,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), false, 'Test 60');
test(evaluateTree([2,3,2,3,1,1,0,0,0,0,1,1,0,1,0]), false, 'Test 61');
test(evaluateTree([2,2,3,3,1,1,0,2,0,1,1,0,2,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: 'nullType' object has no attribute 'left', 'Test 62');
test(evaluateTree([2,2,2,3,3,3,3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: 'nullType' object has no attribute 'left', 'Test 63');
test(evaluateTree([3,2,2,1,0,0,1,3,1,0,1,0,1,0,1]), false, 'Test 64');
test(evaluateTree([2,2,3,2,3,2,3,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: 'nullType' object has no attribute 'left', 'Test 65');
test(evaluateTree([2,2,2,2,2,2,2,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 66');
test(evaluateTree([3,2,3,1,1,1,1,3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,3,0]), false, 'Test 67');
test(evaluateTree([2,2,3,2,2,3,3,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: 'nullType' object has no attribute 'left', 'Test 68');
test(evaluateTree([3,3,2,3,2,3,2,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 69');
test(evaluateTree([3,3,3,2,2,2,2,1,0,1,0,1,0,1,0,3,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: 'nullType' object has no attribute 'left', 'Test 70');
test(evaluateTree([3,2,3,2,3,2,3,3,3,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: 'nullType' object has no attribute 'left', 'Test 71');
test(evaluateTree([3,2,3,0,1,2,1,3,0,1,0,1,3,0,1]), false, 'Test 72');
test(evaluateTree([2,3,2,1,0,3,1,1,0,0,1,0,1,0,1]), false, 'Test 73');
test(evaluateTree([3,2,2,1,0,1,0,3,1,0,1,0,3,1,0,1,0]), false, 'Test 74');
test(evaluateTree([3,2,2,2,2,2,2,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1]), false, 'Test 75');
test(evaluateTree([2,2,2,2,2,2,2,2,2,2,2,2,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1]), Error: 'nullType' object has no attribute 'left', 'Test 76');
test(evaluateTree([3,2,3,3,2,2,2,3,3,3,3,2,2,2,2,3,3,3,3,2,2,2,2,1,1,1,1,0,0,0]), Error: 'nullType' object has no attribute 'left', 'Test 77');
test(evaluateTree([3,3,2,3,2,3,2,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: 'nullType' object has no attribute 'left', 'Test 78');
test(evaluateTree([3,2,2,2,0,0,1,3,0,1,0,1,0,1,0]), false, 'Test 79');
test(evaluateTree([2,2,3,2,3,1,1,0,0,1,0,1,0,0,1]), false, 'Test 80');
test(evaluateTree([2,3,3,2,3,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 81');
test(evaluateTree([2,3,2,1,0,3,1,3,0,1,2,1,0,1,2,3,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: 'nullType' object has no attribute 'left', 'Test 82');
test(evaluateTree([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), Error: 'nullType' object has no attribute 'left', 'Test 83');
test(evaluateTree([2,3,3,2,2,0,1,1,0,0,1,1,1,0,0]), true, 'Test 84');
test(evaluateTree([3,2,2,3,3,3,2,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: 'nullType' object has no attribute 'left', 'Test 85');
test(evaluateTree([3,2,2,3,3,0,1,1,0,0,1,1,0,1,0]), false, 'Test 86');
test(evaluateTree([2,2,3,2,3,2,3,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: 'nullType' object has no attribute 'left', 'Test 87');
test(evaluateTree([2,2,2,3,3,1,1,3,1,0,3,0,1,3,0]), true, 'Test 88');
test(evaluateTree([3,3,3,2,2,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), Error: 'nullType' object has no attribute 'left', 'Test 89');
test(evaluateTree([2,3,3,3,1,0,1,2,0,1,0,1,0,1,1]), false, 'Test 90');
test(evaluateTree([2,1,2,3,0,3,1,1,0,3,0,1,1,0,1,0,3,0,1,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 91');
test(evaluateTree([3,3,3,3,3,2,2,3,3,3,3,2,2,3,3,3,3,2,2,0,0,0,0,0,0,0,0]), false, 'Test 92');
test(evaluateTree([3,2,2,2,1,3,0,1,0,0,1,0,1,0,1]), false, 'Test 93');
test(evaluateTree([2,2,3,1,1,0,0,1,1,0,0,1,1]), true, 'Test 94');
test(evaluateTree([2,2,3,2,3,1,0,1,1,0,0,1,0,1,1]), true, 'Test 95');
test(evaluateTree([3,3,3,2,2,1,1,1,0,0,1,0,0,0,1]), false, 'Test 96');
test(evaluateTree([2,3,2,3,2,3,2,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1]), true, 'Test 97');
test(evaluateTree([3,3,3,3,3,2,2,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1]), false, 'Test 98');
test(evaluateTree([2,2,2,3,3,3,3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 99');
test(evaluateTree([2,1,2,3,0,1,1,null,null,null,null,0,0]), true, 'Test 100');
test(evaluateTree([3,2,2,1,1,3,3,0,1,0,1,0,1,0,1,3,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: 'nullType' object has no attribute 'left', 'Test 101');
test(evaluateTree([2,3,3,3,2,3,2,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1]), Error: 'nullType' object has no attribute 'left', 'Test 102');
test(evaluateTree([2,3,3,3,2,2,2,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 103');
test(evaluateTree([3,2,2,3,3,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 104');
test(evaluateTree([2,3,2,2,1,1,0,0,1,0,1,0,1,0,0]), false, 'Test 105');
test(evaluateTree([3,2,3,3,1,1,0,2,1,0,1,2,1,0,0]), false, 'Test 106');
test(evaluateTree([3,2,2,3,1,0,1,2,0,1,0,2,1,0,0]), false, 'Test 107');
test(evaluateTree([2,3,2,3,2,2,3,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), Error: 'nullType' object has no attribute 'left', 'Test 108');
test(evaluateTree([3,3,2,3,1,2,0,1,0,0,1,0,1,1,0]), false, 'Test 109');
test(evaluateTree([3,2,2,3,1,3,3,1,0,1,0,1,0,0,1]), false, 'Test 110');

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
