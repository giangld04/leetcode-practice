// Test: 335. Self Crossing
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { isSelfCrossing } = require("./solution");

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

console.log("\n335. Self Crossing\n");

test(isSelfCrossing([3,5,3,4,3,4]), true, 'Test 1');
test(isSelfCrossing([3,3,3,2,1]), false, 'Test 2');
test(isSelfCrossing([1,2,3,4,1,2,3,4]), true, 'Test 3');
test(isSelfCrossing([1,1,1,2,1]), true, 'Test 4');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,10]), false, 'Test 5');
test(isSelfCrossing([1,2,3,4,5,4,3,2,1]), true, 'Test 6');
test(isSelfCrossing([10,9,8,7,6,5,4,3,2,1]), false, 'Test 7');
test(isSelfCrossing([3,3,3,2,1,1]), false, 'Test 8');
test(isSelfCrossing([1,1,1,1,1,1]), true, 'Test 9');
test(isSelfCrossing([1,1,1,1,1,1,1,1,1,1]), true, 'Test 10');
test(isSelfCrossing([1,2,2,3,4,4,5,5]), false, 'Test 11');
test(isSelfCrossing([1,1,2,2,2,3,3,4,4,5,5]), true, 'Test 12');
test(isSelfCrossing([6,6,6,6,6,1]), true, 'Test 13');
test(isSelfCrossing([3,3,3,2,2,3,4]), true, 'Test 14');
test(isSelfCrossing([1,2,3,4]), false, 'Test 15');
test(isSelfCrossing([1,2,3,4,5,6]), false, 'Test 16');
test(isSelfCrossing([2,1,1,2]), true, 'Test 17');
test(isSelfCrossing([1,1,2,2,3,4,5,6,7,8]), false, 'Test 18');
test(isSelfCrossing([5,5,5,5,5,5,5]), true, 'Test 19');
test(isSelfCrossing([1,2,3,4,5]), false, 'Test 20');
test(isSelfCrossing([1,1,2,2,3,3]), false, 'Test 21');
test(isSelfCrossing([1,1,2,2,3,3,4,4,5,5]), false, 'Test 22');
test(isSelfCrossing([10,2,10,1,10,2,10]), true, 'Test 23');
test(isSelfCrossing([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4]), true, 'Test 24');
test(isSelfCrossing([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 25');
test(isSelfCrossing([1, 2, 3, 4, 5, 3, 3, 2, 1]), true, 'Test 26');
test(isSelfCrossing([1,2,2,3,4,5,4,3,2,1,1]), true, 'Test 27');
test(isSelfCrossing([10,10,1,1,10,10,1,1]), true, 'Test 28');
test(isSelfCrossing([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 29');
test(isSelfCrossing([3,1,3,1,3,1,3]), true, 'Test 30');
test(isSelfCrossing([1,2,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), true, 'Test 31');
test(isSelfCrossing([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2]), true, 'Test 32');
test(isSelfCrossing([1,3,2,2,1,1,1,1,1]), true, 'Test 33');
test(isSelfCrossing([10, 1, 1, 10, 2, 1]), true, 'Test 34');
test(isSelfCrossing([1,2,3,4,5,1]), false, 'Test 35');
test(isSelfCrossing([3,5,3,5,3,5,3,5,3,5,3]), true, 'Test 36');
test(isSelfCrossing([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 1]), true, 'Test 37');
test(isSelfCrossing([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), true, 'Test 38');
test(isSelfCrossing([10,9,8,7,6,5,4,3,2,1,2,3,4,5]), true, 'Test 39');
test(isSelfCrossing([1,2,3,4,3,2,1,1,2,3,4,5,6,7,8,9,10,11,12,13]), true, 'Test 40');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,10,11,1,1]), false, 'Test 41');
test(isSelfCrossing([5,5,5,5,1,5,5,5,5,1,5,5,5,5,1,5,5,5,5,1]), true, 'Test 42');
test(isSelfCrossing([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]), true, 'Test 43');
test(isSelfCrossing([5,10,10,5,5,10,10,5,5,10,10]), true, 'Test 44');
test(isSelfCrossing([1,2,3,4,3,3,2,2,1,1]), true, 'Test 45');
test(isSelfCrossing([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), true, 'Test 46');
test(isSelfCrossing([1,1,2,2,3,3,4,4,5,5,6,6,5,5,4,4,3,3,2,2]), true, 'Test 47');
test(isSelfCrossing([1,3,5,7,9,11,9,7,5,3,1]), true, 'Test 48');
test(isSelfCrossing([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), true, 'Test 49');
test(isSelfCrossing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 50');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,1]), false, 'Test 51');
test(isSelfCrossing([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]), true, 'Test 52');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,10,1,1]), false, 'Test 53');
test(isSelfCrossing([1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1]), true, 'Test 54');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19]), false, 'Test 55');
test(isSelfCrossing([10,9,8,7,6,5,4,3,2,1,10,11]), true, 'Test 56');
test(isSelfCrossing([5,5,1,1,5,5,1,1,5,5,1,1,5,5,1,1]), true, 'Test 57');
test(isSelfCrossing([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 58');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 59');
test(isSelfCrossing([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,4,3,2,1]), true, 'Test 60');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]), true, 'Test 61');
test(isSelfCrossing([10,9,8,7,6,5,4,3,2,1,10,9,8,7]), true, 'Test 62');
test(isSelfCrossing([1,1,2,2,3,3,2,2,1,1]), true, 'Test 63');
test(isSelfCrossing([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,1]), true, 'Test 64');
test(isSelfCrossing([1,2,3,4,5,4,5,4,5,4]), true, 'Test 65');
test(isSelfCrossing([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5]), true, 'Test 66');
test(isSelfCrossing([3,3,3,3,2,2,1,1,2,2,3,3,4,4,5,5,6,6,7]), true, 'Test 67');
test(isSelfCrossing([1,2,3,4,5,6,7,8,1,1]), false, 'Test 68');
test(isSelfCrossing([5,1,5,1,5,1,5,1,5,1,5,1]), true, 'Test 69');
test(isSelfCrossing([2,3,1,4,3,2,1]), true, 'Test 70');
test(isSelfCrossing([8,2,8,2,8,2,8,2,8,2]), true, 'Test 71');
test(isSelfCrossing([1,2,3,4,3,2,1,2,3,4,3,2,1]), true, 'Test 72');
test(isSelfCrossing([1, 2, 3, 4, 5, 6, 5, 5, 5, 4, 3, 2, 1]), true, 'Test 73');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), true, 'Test 74');
test(isSelfCrossing([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 75');
test(isSelfCrossing([5,1,2,3,4,5,6,4,3,2,1]), true, 'Test 76');
test(isSelfCrossing([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1]), false, 'Test 77');
test(isSelfCrossing([2,3,1,1,2,1,1,2,3,2]), true, 'Test 78');
test(isSelfCrossing([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), true, 'Test 79');
test(isSelfCrossing([5,6,7,8,1,2,3,4,5,6,7,8,9]), true, 'Test 80');
test(isSelfCrossing([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 81');
test(isSelfCrossing([1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), true, 'Test 82');
test(isSelfCrossing([10,10,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2]), true, 'Test 83');
test(isSelfCrossing([1,2,3,4,5,3,3,3,2,1]), true, 'Test 84');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,10,1]), false, 'Test 85');
test(isSelfCrossing([1,1,1,2,2,3,3,4,4,5,5,6,6,5,5,4,4,3,3,2,2,1,1]), true, 'Test 86');
test(isSelfCrossing([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), true, 'Test 87');
test(isSelfCrossing([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), false, 'Test 88');
test(isSelfCrossing([10,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1]), true, 'Test 89');
test(isSelfCrossing([1, 2, 3, 4, 5, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), true, 'Test 90');
test(isSelfCrossing([5,6,7,8,5,4,3,2,1]), true, 'Test 91');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1]), false, 'Test 92');
test(isSelfCrossing([1,3,1,3,1,3,1,3,1,3,1,3,1]), true, 'Test 93');
test(isSelfCrossing([1,1,1,2,2,3,3,4,4,5,5,6,6,7,7]), true, 'Test 94');
test(isSelfCrossing([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]), false, 'Test 95');
test(isSelfCrossing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 96');
test(isSelfCrossing([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), true, 'Test 97');
test(isSelfCrossing([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9]), true, 'Test 98');
test(isSelfCrossing([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,1,1,1,1]), true, 'Test 99');
test(isSelfCrossing([1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), true, 'Test 100');
test(isSelfCrossing([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), true, 'Test 101');
test(isSelfCrossing([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1]), true, 'Test 102');
test(isSelfCrossing([5,5,5,4,4,4,3,3,3,2,2,2,1,1,1,5,5,5]), true, 'Test 103');
test(isSelfCrossing([1, 2, 3, 4, 5, 4, 3, 3, 2, 2, 1, 1]), true, 'Test 104');
test(isSelfCrossing([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,100]), false, 'Test 105');
test(isSelfCrossing([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), true, 'Test 106');
test(isSelfCrossing([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 107');
test(isSelfCrossing([1,3,3,2,1,2,1]), true, 'Test 108');
test(isSelfCrossing([1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 109');
test(isSelfCrossing([1,2,3,4,5,6,7,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8]), true, 'Test 110');
test(isSelfCrossing([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), true, 'Test 111');
test(isSelfCrossing([5,5,5,4,4,3,3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 112');
test(isSelfCrossing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 113');

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
