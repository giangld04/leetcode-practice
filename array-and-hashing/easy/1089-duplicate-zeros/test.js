// Test: 1089. Duplicate Zeros
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { duplicateZeros } = require("./solution");

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

console.log("\n1089. Duplicate Zeros\n");

test(duplicateZeros([8,4,5,0,0,0,0,7]), null, 'Test 1');
test(duplicateZeros([0,1,0,3,0,0,0,4]), null, 'Test 2');
test(duplicateZeros([0,1,2,3,4,5,6,7]), null, 'Test 3');
test(duplicateZeros([9,8,7,6,5]), null, 'Test 4');
test(duplicateZeros([0,1,0,2,0,3,0,4]), null, 'Test 5');
test(duplicateZeros([1,0,2,3,0,4,5,0]), null, 'Test 6');
test(duplicateZeros([1,2,3]), null, 'Test 7');
test(duplicateZeros([0,0,0,0,0]), null, 'Test 8');
test(duplicateZeros([0,0,0,0,0,0,0,0]), null, 'Test 9');
test(duplicateZeros([1,0,1,0,1,0,1,0]), null, 'Test 10');
test(duplicateZeros([1,0,0,8,0,4,0,0]), null, 'Test 11');
test(duplicateZeros([0,0,1,0,2,0,3,0,4,0]), null, 'Test 12');
test(duplicateZeros([1,0,0,2,0,0,3,0,0,4]), null, 'Test 13');
test(duplicateZeros([0,0,1,2,3,0,4,5]), null, 'Test 14');
test(duplicateZeros([8,0,0,0,4,0,5,6]), null, 'Test 15');
test(duplicateZeros([5,0,0,0,0,0,0,0,0,0]), null, 'Test 16');
test(duplicateZeros([1,2,0,3,0,4,5,0]), null, 'Test 17');
test(duplicateZeros([7,0,8,0,9,0,1,0]), null, 'Test 18');
test(duplicateZeros([0,2,0,3,0,4,0,5]), null, 'Test 19');
test(duplicateZeros([0,0,1,2,0,3,4,0]), null, 'Test 20');
test(duplicateZeros([0,1,2,3,0,4,0,5,6,7,8,9,0,0]), null, 'Test 21');
test(duplicateZeros([5,5,5,5,5,5,5,5,0,0]), null, 'Test 22');
test(duplicateZeros([8,6,0,3,4,0,1,8]), null, 'Test 23');
test(duplicateZeros([0,1,0,2,3,0,4,5]), null, 'Test 24');
test(duplicateZeros([0,1,0,1,0,1,0,1]), null, 'Test 25');
test(duplicateZeros([9,0,0,0,8,0,0,6]), null, 'Test 26');
test(duplicateZeros([8,0,0,8,0,8,0,0,0,3]), null, 'Test 27');
test(duplicateZeros([6,0,6,0,6,0,6,0,6,0]), null, 'Test 28');
test(duplicateZeros([1,2,3,4,5,6,7,8,9,0]), null, 'Test 29');
test(duplicateZeros([1,0,2,3,4,0,5,0,6,7]), null, 'Test 30');
test(duplicateZeros([1,2,0,3,0,4,5,6]), null, 'Test 31');
test(duplicateZeros([8,0,0,0,3,0,1,0]), null, 'Test 32');
test(duplicateZeros([1,2,3,0,0,0,0,0]), null, 'Test 33');
test(duplicateZeros([8,6,5,0,0,5,0,6]), null, 'Test 34');
test(duplicateZeros([1,2,0,3,4,0,5,6,7,8]), null, 'Test 35');
test(duplicateZeros([1,0,2,0,3,0,4,0,5,0]), null, 'Test 36');
test(duplicateZeros([0,1,0,2,0,3,0,4,0,5]), null, 'Test 37');
test(duplicateZeros([1,0,2,0,3,0,4,5,0,0]), null, 'Test 38');
test(duplicateZeros([1,2,3,0,4,5,6,0]), null, 'Test 39');
test(duplicateZeros([9,8,7,6,5,4,3,0]), null, 'Test 40');
test(duplicateZeros([9,1,0,2,0,3,4,0]), null, 'Test 41');
test(duplicateZeros([0,1,2,3,4,5,0,0,0,0]), null, 'Test 42');
test(duplicateZeros([9,1,2,3,0,0,0,0,4,5]), null, 'Test 43');
test(duplicateZeros([1,2,3,4,5,6,7,0]), null, 'Test 44');
test(duplicateZeros([1,2,3,4,5,0,0,0]), null, 'Test 45');
test(duplicateZeros([0,1,0,2,0,3,0,4,5]), null, 'Test 46');
test(duplicateZeros([1,2,0,3,4,0,5,0]), null, 'Test 47');
test(duplicateZeros([5,5,5,5,0,0,5,5]), null, 'Test 48');
test(duplicateZeros([7,0,1,2,0,3,4,0]), null, 'Test 49');
test(duplicateZeros([5,0,5,0,5,0,5,0]), null, 'Test 50');
test(duplicateZeros([3,0,0,0,0,0,0,0,0,3]), null, 'Test 51');
test(duplicateZeros([9,0,1,0,2,0,3,0]), null, 'Test 52');
test(duplicateZeros([4,3,2,1,0,0,0,0,0,0]), null, 'Test 53');
test(duplicateZeros([8,0,0,0,0,0,0,0]), null, 'Test 54');
test(duplicateZeros([1,2,0,0,0,3,4,5]), null, 'Test 55');
test(duplicateZeros([0,2,0,1,0,3,0,4]), null, 'Test 56');
test(duplicateZeros([0,0,0,1,0,0,0,0]), null, 'Test 57');
test(duplicateZeros([8,0,0,5,0,0,7,0,0,0]), null, 'Test 58');
test(duplicateZeros([0,0,1,2,3,4,5,6]), null, 'Test 59');
test(duplicateZeros([0,4,1,0,0,8,0,0]), null, 'Test 60');
test(duplicateZeros([0,0,1,1,0,0,1,1]), null, 'Test 61');
test(duplicateZeros([0,2,0,2,0,2,0,2,0,2]), null, 'Test 62');
test(duplicateZeros([0,1,2,3,4,5,0,0]), null, 'Test 63');
test(duplicateZeros([5,0,0,0,9,0,0,0]), null, 'Test 64');
test(duplicateZeros([0,9,0,8,0,7,0,6,0,5]), null, 'Test 65');
test(duplicateZeros([1,2,0,0,0,3,4,5,6,0]), null, 'Test 66');
test(duplicateZeros([1,2,0,3,4,0,5,6]), null, 'Test 67');
test(duplicateZeros([0,0,1,0,0,2,0,0,3,0]), null, 'Test 68');
test(duplicateZeros([1,2,3,0,0,4,5,6,7,0]), null, 'Test 69');
test(duplicateZeros([0,2,0,3,0,4,5,6]), null, 'Test 70');
test(duplicateZeros([7,0,8,0,9,0,10,0]), null, 'Test 71');
test(duplicateZeros([1,2,3,4,0,0,0,0]), null, 'Test 72');
test(duplicateZeros([5,6,0,0,7,8,9,0]), null, 'Test 73');
test(duplicateZeros([9,8,7,6,5,4,3,2,1,0]), null, 'Test 74');
test(duplicateZeros([9,0,0,0,5,0,2,0]), null, 'Test 75');
test(duplicateZeros([1,0,0,0,0,0,0,0]), null, 'Test 76');
test(duplicateZeros([0,2,3,4,5,6,7,0]), null, 'Test 77');
test(duplicateZeros([1,2,3,4,5,6,0,0]), null, 'Test 78');
test(duplicateZeros([0,1,2,3,4,5,6,0,7,8]), null, 'Test 79');
test(duplicateZeros([5,0,1,0,2,0,3,0,4,5]), null, 'Test 80');
test(duplicateZeros([0,0,0,0,0,1,0,0]), null, 'Test 81');
test(duplicateZeros([8,0,5,0,6,0,2,0,3,0]), null, 'Test 82');
test(duplicateZeros([0,0,0,1,2,0,3,4]), null, 'Test 83');
test(duplicateZeros([9,0,9,0,9,0,9,0]), null, 'Test 84');
test(duplicateZeros([0,1,2,0,3,4,5,0]), null, 'Test 85');
test(duplicateZeros([1,0,2,0,3,0,4,0]), null, 'Test 86');
test(duplicateZeros([1,0,2,0,3,4,0,5,6,7]), null, 'Test 87');
test(duplicateZeros([0,1,2,3,4,0,0,0]), null, 'Test 88');
test(duplicateZeros([7,0,4,2,3,0,0,1]), null, 'Test 89');
test(duplicateZeros([0,0,0,0,0,0,0,0,0,0]), null, 'Test 90');
test(duplicateZeros([0,0,0,0,0,0,0,0,0,1]), null, 'Test 91');
test(duplicateZeros([8,0,0,0,0,0,7,0]), null, 'Test 92');
test(duplicateZeros([5,6,7,8,9,0,1,0,2,0]), null, 'Test 93');
test(duplicateZeros([7,2,0,3,0,0,8,0,4,0]), null, 'Test 94');
test(duplicateZeros([9,0,5,0,0,0,0,2,0,1]), null, 'Test 95');
test(duplicateZeros([1,0,3,0,5,0,7,0,9,0]), null, 'Test 96');

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
