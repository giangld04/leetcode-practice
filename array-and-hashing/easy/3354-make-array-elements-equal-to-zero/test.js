// Test: 3354. Make Array Elements Equal To Zero
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { countValidSelections } = require("./solution");

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

console.log("\n3354. Make Array Elements Equal To Zero\n");

test(countValidSelections([1,2,3,4,0]), 0, 'Test 1');
test(countValidSelections([1,0,1,0,1,0,1,0]), 2, 'Test 2');
test(countValidSelections([1,0,0,2,0,3,0,0,4]), 0, 'Test 3');
test(countValidSelections([0,1,0,1,0]), 2, 'Test 4');
test(countValidSelections([2,0,2,0,2,0]), 0, 'Test 5');
test(countValidSelections([0,1,1,0]), 0, 'Test 6');
test(countValidSelections([0,2,1,0,3,0,1]), 1, 'Test 7');
test(countValidSelections([0,0,0,0,0]), 10, 'Test 8');
test(countValidSelections([3,0,0,0,3]), 6, 'Test 9');
test(countValidSelections([0,1,2,3,4]), 0, 'Test 10');
test(countValidSelections([2,3,4,0,4,1,0]), 0, 'Test 11');
test(countValidSelections([0]), 2, 'Test 12');
test(countValidSelections([1,0,1,0,1,0]), 2, 'Test 13');
test(countValidSelections([0,0,0,0]), 8, 'Test 14');
test(countValidSelections([1,0,2,1,0]), 0, 'Test 15');
test(countValidSelections([3,0,3,0]), 2, 'Test 16');
test(countValidSelections([1,2,3,0,2,1,0]), 0, 'Test 17');
test(countValidSelections([1,0,2,0,3]), 2, 'Test 18');
test(countValidSelections([0,1,0]), 2, 'Test 19');
test(countValidSelections([1,0,0,0,0,1]), 8, 'Test 20');
test(countValidSelections([3,0,2,0,1,0,3]), 1, 'Test 21');
test(countValidSelections([3,0,0,2,0,1,0]), 4, 'Test 22');
test(countValidSelections([0,2,1,0]), 0, 'Test 23');
test(countValidSelections([1,0,1,0,1,0,1]), 2, 'Test 24');
test(countValidSelections([0,1,2,3,4,0,5,0,6,0]), 1, 'Test 25');
test(countValidSelections([3,2,1,0,1,2,3,0,3,2,1,0]), 0, 'Test 26');
test(countValidSelections([1,2,0,3,0,4,0,5,0,6]), 1, 'Test 27');
test(countValidSelections([1,3,2,0,4,0,1,0,2,0]), 1, 'Test 28');
test(countValidSelections([0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0]), 0, 'Test 29');
test(countValidSelections([2,3,4,5,6,0,5,4,3,2,1,0]), 0, 'Test 30');
test(countValidSelections([5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0]), 2, 'Test 31');
test(countValidSelections([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 0, 'Test 32');
test(countValidSelections([10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 33');
test(countValidSelections([1,2,1,2,1,0,2,1,2,1,0,2,1,2,1]), 0, 'Test 34');
test(countValidSelections([0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 9]), 0, 'Test 35');
test(countValidSelections([0,0,0,0,0,0,0,0,0]), 18, 'Test 36');
test(countValidSelections([5,0,3,0,2,0,4,0,1,0,6]), 1, 'Test 37');
test(countValidSelections([0,1,2,3,4,5,0,0,5,4,3,2,1,0,0,0,1,2,3,0,0,4,0,0,0,5]), 0, 'Test 38');
test(countValidSelections([3,2,1,0,0,0,1,2,3]), 6, 'Test 39');
test(countValidSelections([0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0]), 0, 'Test 40');
test(countValidSelections([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]), 10, 'Test 41');
test(countValidSelections([1,1,1,1,0,1,1,1,0,1,1,1,0]), 0, 'Test 42');
test(countValidSelections([0,1,2,3,4,5,6,7,8,9,10,0]), 0, 'Test 43');
test(countValidSelections([1,2,3,4,0,5,0,4,0,3,0,2,0,1,0]), 0, 'Test 44');
test(countValidSelections([0,1,1,1,0,2,2,2,0,3,3,3,0]), 2, 'Test 45');
test(countValidSelections([100,0,99,0,98,0,97,0,96,0,95,0,94,0,93,0,92,0,91,0,90]), 0, 'Test 46');
test(countValidSelections([1,1,1,1,0,1,1,1,1,0,1,1,1,1,0]), 0, 'Test 47');
test(countValidSelections([0,0,0,0,0,0,0,0,0,0]), 20, 'Test 48');
test(countValidSelections([1,2,3,0,4,5,6,0,7,8,0,9,10,11,0]), 0, 'Test 49');
test(countValidSelections([1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0]), 0, 'Test 50');
test(countValidSelections([3,3,3,3,3,0,2,2,2,2,2,0,1,1,1,1,1,0]), 2, 'Test 51');
test(countValidSelections([3,2,1,0,0,1,2,3,0,4,5,0]), 0, 'Test 52');
test(countValidSelections([4, 3, 2, 1, 0, 1, 2, 3, 0, 3, 2, 1, 0, 1, 2, 0]), 0, 'Test 53');
test(countValidSelections([0,1,0,2,0,3,0,4,0]), 0, 'Test 54');
test(countValidSelections([0,1,2,3,4,5,6,7,8,9,10,0,10,9,8,7,6,5,4,3,2,1,0]), 2, 'Test 55');
test(countValidSelections([0, 1, 2, 3, 4, 5, 0, 4, 3, 2, 1, 0, 1, 2, 3, 0, 1, 0]), 0, 'Test 56');
test(countValidSelections([4,0,3,0,2,0,1,0,1,0,2,0,3,0,4]), 2, 'Test 57');
test(countValidSelections([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 58');
test(countValidSelections([5,0,4,0,3,0,2,0,1,0,0,0,0,0,0,0]), 0, 'Test 59');
test(countValidSelections([2,2,2,2,2,0,0,0,0,0,1,1,1,1,1]), 0, 'Test 60');
test(countValidSelections([5,0,0,0,1,0,0,0,2]), 0, 'Test 61');
test(countValidSelections([10,0,9,0,8,0,7,0,6,0,5,0,4,0,3,0,2,0,1,0]), 1, 'Test 62');
test(countValidSelections([5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 63');
test(countValidSelections([1,1,1,1,0,0,0,0,2,2,2,0,0,0,0,3,0,0,0,0]), 0, 'Test 64');
test(countValidSelections([1,1,1,1,1,0,2,2,2,2,2,0,3,3,3,3,3,0]), 2, 'Test 65');
test(countValidSelections([6, 0, 5, 0, 4, 0, 3, 0, 2, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0]), 1, 'Test 66');
test(countValidSelections([0,2,4,6,8,10,12,14,16,18,20,0,22,24,26,28,30,0]), 0, 'Test 67');
test(countValidSelections([5,4,3,2,1,0,1,2,3,4,5,0,0,0,0]), 2, 'Test 68');
test(countValidSelections([3,0,2,0,1,0,4,0,3,0,2,0,1,0,2,0,3,0]), 1, 'Test 69');
test(countValidSelections([5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0]), 2, 'Test 70');
test(countValidSelections([5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5]), 2, 'Test 71');
test(countValidSelections([0, 2, 2, 0, 3, 3, 0, 2, 2, 0, 1, 0]), 0, 'Test 72');
test(countValidSelections([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 2, 'Test 73');
test(countValidSelections([3,0,2,0,1,0,3,0,2,0,1,0,3,0,2,0,1,0]), 2, 'Test 74');
test(countValidSelections([0,2,1,0,3,2,0,1,0,4,0]), 0, 'Test 75');
test(countValidSelections([0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 0]), 0, 'Test 76');
test(countValidSelections([3,0,2,0,1,0,2,0,3,0,4,0]), 1, 'Test 77');
test(countValidSelections([0,0,0,1,2,3,4,5,6,0,0,0,1,2,3,4,5,0,0,0,1,2,3,0,0]), 6, 'Test 78');
test(countValidSelections([0,0,1,2,0,0,3,0,0,0,4,0]), 0, 'Test 79');
test(countValidSelections([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), 2, 'Test 80');
test(countValidSelections([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 2, 'Test 81');
test(countValidSelections([1,0,2,0,3,0,4,0,5,0,6,0]), 1, 'Test 82');
test(countValidSelections([3,0,2,0,1,0,4,0,3,0,2,0,1,0,5,0,4,0,3,0,2,0]), 2, 'Test 83');
test(countValidSelections([1,2,3,4,5,0,5,4,3,2,1,0,0,1,2,3,0,0,4,3,2,1,0]), 0, 'Test 84');
test(countValidSelections([1,2,0,1,2,0,1,2,0,1,2,0]), 2, 'Test 85');
test(countValidSelections([0,1,1,0,2,2,0,3,0]), 0, 'Test 86');
test(countValidSelections([0,1,2,3,4,0,5,6,0,7,8,9,0]), 0, 'Test 87');
test(countValidSelections([3, 1, 2, 0, 1, 0, 2, 1, 0, 2, 0]), 2, 'Test 88');
test(countValidSelections([3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]), 0, 'Test 89');
test(countValidSelections([7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,0]), 2, 'Test 90');
test(countValidSelections([5,4,3,2,1,0,1,2,3,4,5]), 2, 'Test 91');
test(countValidSelections([2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2]), 0, 'Test 92');
test(countValidSelections([10,9,8,7,6,5,4,3,2,1,0,0]), 0, 'Test 93');
test(countValidSelections([1,1,1,1,1,1,1,1,1,1,0,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 94');
test(countValidSelections([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 40, 'Test 95');
test(countValidSelections([0, 1, 1, 0, 2, 1, 0]), 1, 'Test 96');
test(countValidSelections([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 97');
test(countValidSelections([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 2, 'Test 98');
test(countValidSelections([0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0]), 0, 'Test 99');
test(countValidSelections([5,0,1,0,2,0,3,0,4,0,5]), 0, 'Test 100');
test(countValidSelections([7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,0,0,0,0,0,0,0,0]), 2, 'Test 101');
test(countValidSelections([0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0]), 2, 'Test 102');
test(countValidSelections([2, 0, 1, 0, 2, 0, 1, 0, 3, 0]), 1, 'Test 103');
test(countValidSelections([2,2,2,2,0,2,2,2,2,0,2,2,2,2]), 0, 'Test 104');
test(countValidSelections([1,0,0,2,0,0,3,0,0,4]), 0, 'Test 105');
test(countValidSelections([10,20,30,0,40,50,0,60,70,0,80,90,0,100,110,0]), 0, 'Test 106');
test(countValidSelections([1, 0, 1, 0, 1, 0, 1]), 2, 'Test 107');
test(countValidSelections([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 108');
test(countValidSelections([0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 109');
test(countValidSelections([1,1,1,0,1,1,1,0,1,1,1,0]), 0, 'Test 110');
test(countValidSelections([1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 0, 1, 0]), 0, 'Test 111');
test(countValidSelections([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 112');
test(countValidSelections([5, 0, 3, 0, 2, 0, 1, 0, 2, 0, 3, 0, 4, 0]), 2, 'Test 113');
test(countValidSelections([5,0,4,0,3,0,2,0,1]), 0, 'Test 114');
test(countValidSelections([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 115');
test(countValidSelections([1,2,3,4,5,6,7,8,9,0,8,7,6,5,4,3,2,1]), 0, 'Test 116');
test(countValidSelections([5,0,4,0,3,0,2,0,1,0]), 0, 'Test 117');
test(countValidSelections([2,2,2,2,2,2,0,2,2,2,2,2,2,0]), 2, 'Test 118');
test(countValidSelections([0,1,2,3,4,5,4,3,2,1,0]), 0, 'Test 119');

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
