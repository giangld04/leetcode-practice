// Test: 915. Partition Array Into Disjoint Intervals
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { partitionDisjoint } = require("./solution");

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

console.log("\n915. Partition Array Into Disjoint Intervals\n");

test(partitionDisjoint([1,3,2,4,5]), 1, 'Test 1');
test(partitionDisjoint([1,2,3,0,4,5,6,7,8,9]), 4, 'Test 2');
test(partitionDisjoint([1,2,1,2,1,2,1,2]), 1, 'Test 3');
test(partitionDisjoint([1,1,1,0,6,12]), 4, 'Test 4');
test(partitionDisjoint([9,8,7,6,5,4,3,2,1]), 9, 'Test 5');
test(partitionDisjoint([3,5,0,0,8,10,6,12,15]), 4, 'Test 6');
test(partitionDisjoint([0,0,0,0,1,1,1,1]), 1, 'Test 7');
test(partitionDisjoint([0,1,2,3,4,5,6,7,8,9]), 1, 'Test 8');
test(partitionDisjoint([10,10,10,0,10,10,10,10]), 4, 'Test 9');
test(partitionDisjoint([3,3,3,3,3,3,3,3,3]), 1, 'Test 10');
test(partitionDisjoint([1,2,3,0,4,5,6,7,8]), 4, 'Test 11');
test(partitionDisjoint([1,1,2,2,1,1,3,3,2,2]), 1, 'Test 12');
test(partitionDisjoint([0,0,0,0,1,1,1,1,0,0]), 1, 'Test 13');
test(partitionDisjoint([1,2,3,4,5]), 1, 'Test 14');
test(partitionDisjoint([9,8,7,6,5,4,3,2,1,10]), 9, 'Test 15');
test(partitionDisjoint([1,2,3,4,5,6,7,8,9]), 1, 'Test 16');
test(partitionDisjoint([0,0,0,0,0,0,0,1]), 1, 'Test 17');
test(partitionDisjoint([1,2,3,4,5,0]), 6, 'Test 18');
test(partitionDisjoint([1,1,1,1,1,1,1,1]), 1, 'Test 19');
test(partitionDisjoint([9,8,7,6,5,4,3,2,1,0]), 10, 'Test 20');
test(partitionDisjoint([5,0,3,8,6]), 3, 'Test 21');
test(partitionDisjoint([7,7,7,7,7,7,7,7,7,0,1]), 11, 'Test 22');
test(partitionDisjoint([2,1,3,4,4,5]), 2, 'Test 23');
test(partitionDisjoint([5,4,3,2,1,0]), 6, 'Test 24');
test(partitionDisjoint([10,9,8,7,6,5,4,3,2,1,10]), 10, 'Test 25');
test(partitionDisjoint([5,5,5,5,5,5,5,5,5,5]), 1, 'Test 26');
test(partitionDisjoint([3,3,2,2,3,1,4,5,6]), 6, 'Test 27');
test(partitionDisjoint([100,90,80,70,60,50,40,30,20,10,0,-10]), 12, 'Test 28');
test(partitionDisjoint([0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10]), 1, 'Test 29');
test(partitionDisjoint([5,4,3,2,1,6,7,8,9,10]), 5, 'Test 30');
test(partitionDisjoint([1,2,3,4,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), 14, 'Test 31');
test(partitionDisjoint([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11]), 1, 'Test 32');
test(partitionDisjoint([5,6,7,8,9,0,1,2,3,4,10,11,12,13,14,15,16,17,18,19]), 10, 'Test 33');
test(partitionDisjoint([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 1, 'Test 34');
test(partitionDisjoint([5,2,1,3,4,6,7,8,9,10]), 5, 'Test 35');
test(partitionDisjoint([2,1,3,4,3,5,6,7,8,9]), 2, 'Test 36');
test(partitionDisjoint([1,2,3,4,5,10,9,8,7,6]), 1, 'Test 37');
test(partitionDisjoint([0,2,1,3,5,4,7,6,9,8]), 1, 'Test 38');
test(partitionDisjoint([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]), 20, 'Test 39');
test(partitionDisjoint([3,3,3,3,1,2,3,4,5,6,7,8,9]), 6, 'Test 40');
test(partitionDisjoint([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 41');
test(partitionDisjoint([7,6,5,4,3,2,1,0,1,2,3,4,5,6,7]), 14, 'Test 42');
test(partitionDisjoint([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 43');
test(partitionDisjoint([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 1, 'Test 44');
test(partitionDisjoint([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 1, 'Test 45');
test(partitionDisjoint([10,20,30,40,50,0,1,2,3,4,5,6,7,8,9]), 15, 'Test 46');
test(partitionDisjoint([1,0,2,0,3,0,4,0,5,0]), 10, 'Test 47');
test(partitionDisjoint([2,1,2,3,2,4,5,4,6,7,8,9,0,10,11,12]), 13, 'Test 48');
test(partitionDisjoint([1,2,3,4,5,1,6,7,8,9,10]), 1, 'Test 49');
test(partitionDisjoint([1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]), 15, 'Test 50');
test(partitionDisjoint([1,2,3,2,3,4,5,4,5,6]), 1, 'Test 51');
test(partitionDisjoint([0,1,0,2,0,3,0,4,0,5]), 1, 'Test 52');
test(partitionDisjoint([3,3,3,3,3,3,3,3,3,4]), 1, 'Test 53');
test(partitionDisjoint([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 1, 'Test 54');
test(partitionDisjoint([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,1]), 30, 'Test 55');
test(partitionDisjoint([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 20, 'Test 56');
test(partitionDisjoint([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 1, 'Test 57');
test(partitionDisjoint([1,2,1,2,1,2,1,2,1,2]), 1, 'Test 58');
test(partitionDisjoint([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6]), 1, 'Test 59');
test(partitionDisjoint([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 60');
test(partitionDisjoint([5,4,3,2,1,0,0,1,2,3,4,5]), 11, 'Test 61');
test(partitionDisjoint([7,9,7,8,1,7,10,13,2,5,6,7,3,8,9,10]), 16, 'Test 62');
test(partitionDisjoint([2,1,1,1,1,1,1,1,1,3,4,5]), 9, 'Test 63');
test(partitionDisjoint([3,2,1,4,5,6,7,8,9,10]), 3, 'Test 64');
test(partitionDisjoint([2,1,3,4,5,6,7,8,9,10]), 2, 'Test 65');
test(partitionDisjoint([4,3,2,1,5,6,7,8,9,10]), 4, 'Test 66');
test(partitionDisjoint([9,8,7,6,5,4,3,2,1,0,10,20,30,40,50]), 10, 'Test 67');
test(partitionDisjoint([3,2,5,4,4,4,1,7,8,9]), 7, 'Test 68');
test(partitionDisjoint([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 1, 'Test 69');
test(partitionDisjoint([1,3,2,4,5,6,7,8,9,10]), 1, 'Test 70');
test(partitionDisjoint([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 18, 'Test 71');
test(partitionDisjoint([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 31, 'Test 72');
test(partitionDisjoint([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 1, 'Test 73');
test(partitionDisjoint([7,7,7,7,7,7,7,7,7,1,2]), 11, 'Test 74');
test(partitionDisjoint([10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10]), 21, 'Test 75');
test(partitionDisjoint([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 20, 'Test 76');
test(partitionDisjoint([5,6,7,8,9,10,1,2,3,4]), 10, 'Test 77');
test(partitionDisjoint([1,2,3,4,5,6,7,8,9,10,11,12,13,14,0]), 15, 'Test 78');
test(partitionDisjoint([0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 79');
test(partitionDisjoint([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), 18, 'Test 80');
test(partitionDisjoint([5,1,4,3,2,6,7,8,10,9]), 5, 'Test 81');
test(partitionDisjoint([7,6,5,4,3,2,1,8,9,10,11,12,13]), 7, 'Test 82');
test(partitionDisjoint([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,2]), 18, 'Test 83');
test(partitionDisjoint([1,2,3,4,5,0,6,7,8,9]), 6, 'Test 84');
test(partitionDisjoint([0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1]), 1, 'Test 85');
test(partitionDisjoint([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4]), 1, 'Test 86');
test(partitionDisjoint([6,5,4,3,2,1,7,8,9,10]), 6, 'Test 87');
test(partitionDisjoint([5,0,3,8,6,7,9,1,2,4,11,10,12,13,14]), 10, 'Test 88');
test(partitionDisjoint([9,0,1,2,3,4,5,6,7,8,9,10,11,12,13]), 10, 'Test 89');
test(partitionDisjoint([10,20,30,40,50,60,70,80,90,100,110,120]), 1, 'Test 90');
test(partitionDisjoint([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 1, 'Test 91');
test(partitionDisjoint([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 1, 'Test 92');
test(partitionDisjoint([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 93');
test(partitionDisjoint([2,3,1,4,5,6,7,8,9]), 3, 'Test 94');
test(partitionDisjoint([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 1, 'Test 95');

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
