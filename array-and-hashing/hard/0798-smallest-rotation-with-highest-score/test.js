// Test: 798. Smallest Rotation With Highest Score
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { bestRotation } = require("./solution");

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

console.log("\n798. Smallest Rotation With Highest Score\n");

test(bestRotation([1,3,0,2,4]), 0, 'Test 1');
test(bestRotation([5,4,3,2,1]), 0, 'Test 2');
test(bestRotation([0,1,2,3,4]), 0, 'Test 3');
test(bestRotation([1,0,3,4,2]), 4, 'Test 4');
test(bestRotation([5,4,3,2,1,0]), 1, 'Test 5');
test(bestRotation([1,0,2,3,4]), 0, 'Test 6');
test(bestRotation([3,2,1,0,4]), 0, 'Test 7');
test(bestRotation([2,3,1,4,0]), 3, 'Test 8');
test(bestRotation([0,0,0,0,0]), 0, 'Test 9');
test(bestRotation([4,3,2,1,0]), 0, 'Test 10');
test(bestRotation([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]), 9, 'Test 11');
test(bestRotation([0,1,0,1,0,1,0,1,0,1,0]), 0, 'Test 12');
test(bestRotation([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 0, 'Test 13');
test(bestRotation([2,0,1,0,1,0,1,0,1,0]), 1, 'Test 14');
test(bestRotation([10,0,10,0,10,0,10,0,10,0]), 0, 'Test 15');
test(bestRotation([3,3,3,3,3,3,3,3,3,3]), 0, 'Test 16');
test(bestRotation([1,2,3,4,5,6,7,8,9,10]), 9, 'Test 17');
test(bestRotation([2,1,0,3,4,5,6,7,8,9,10,11,12,13,14]), 0, 'Test 18');
test(bestRotation([2,5,1,6,3,0,4]), 1, 'Test 19');
test(bestRotation([10,0,1,2,3,4,5,6,7,8,9]), 1, 'Test 20');
test(bestRotation([0,1,2,3,4,5,6,7,8,9]), 0, 'Test 21');
test(bestRotation([10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 22');
test(bestRotation([2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,0]), 8, 'Test 23');
test(bestRotation([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 24');
test(bestRotation([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]), 0, 'Test 25');
test(bestRotation([2,3,1,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 18, 'Test 26');
test(bestRotation([0,0,0,1,1,1,2,2,2,3]), 0, 'Test 27');
test(bestRotation([0,9999,1,9998,2,9997,3,9996,4,9995]), 0, 'Test 28');
test(bestRotation([0,2,4,6,8,10,1,3,5,7,9]), 0, 'Test 29');
test(bestRotation([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991]), 0, 'Test 30');
test(bestRotation([5000,4999,5001,4998,5002,4997,5003,4996,5004,4995]), 0, 'Test 31');
test(bestRotation([1,0,1,0,1,0,1,0,1,0,1]), 1, 'Test 32');
test(bestRotation([1,3,2,4,3,2,5,4,3,2]), 7, 'Test 33');
test(bestRotation([5,0,5,0,5,0,5,0,5,0]), 1, 'Test 34');
test(bestRotation([5,0,4,1,3,2,2,3,1,4,0,5]), 1, 'Test 35');
test(bestRotation([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), 9, 'Test 36');
test(bestRotation([1,3,5,7,9,11,13,15,17,19,0,2,4,6,8,10,12,14,16,18]), 1, 'Test 37');
test(bestRotation([7,7,7,7,7,7,7,7,7,7]), 0, 'Test 38');
test(bestRotation([1,2,3,4,0,5,6,7,8,9]), 9, 'Test 39');
test(bestRotation([3,0,1,2,5,4,7,6,9,8]), 9, 'Test 40');
test(bestRotation([9,7,5,3,1,0,8,6,4,2]), 0, 'Test 41');
test(bestRotation([5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 42');
test(bestRotation([0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4]), 0, 'Test 43');
test(bestRotation([0,9,1,8,2,7,3,6,4,5]), 0, 'Test 44');
test(bestRotation([5,6,7,8,9,0,1,2,3,4]), 5, 'Test 45');
test(bestRotation([9,7,6,5,4,3,2,1,0,8]), 0, 'Test 46');
test(bestRotation([10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0]), 0, 'Test 47');
test(bestRotation([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 0, 'Test 48');
test(bestRotation([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 49');
test(bestRotation([0,1,2,3,4,5]), 0, 'Test 50');
test(bestRotation([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,0]), 99, 'Test 51');
test(bestRotation([2,1,4,3,0,5,6]), 0, 'Test 52');
test(bestRotation([1,2,3,4,5,6,7,8,9,0]), 9, 'Test 53');
test(bestRotation([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 54');
test(bestRotation([3,3,3,3,3,3,3,3,3,3,3]), 0, 'Test 55');
test(bestRotation([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 56');
test(bestRotation([8,7,6,5,4,3,2,1,0]), 0, 'Test 57');
test(bestRotation([5,6,1,2,3,4,0,1,2,3]), 1, 'Test 58');
test(bestRotation([4,3,2,1,0,4,3,2,1,0]), 0, 'Test 59');
test(bestRotation([9,8,7,6,5,4,3,2,1,0]), 1, 'Test 60');
test(bestRotation([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 0, 'Test 61');
test(bestRotation([3,0,3,0,3,0,3,0,3,0]), 1, 'Test 62');
test(bestRotation([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 1, 'Test 63');
test(bestRotation([1,1,0,0,1,1,0,0,1,1]), 2, 'Test 64');
test(bestRotation([1,0,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9]), 0, 'Test 65');
test(bestRotation([9,0,9,0,9,0,9,0,9,0]), 1, 'Test 66');
test(bestRotation([10,9,8,7,6,5,4,3,2,1,0,11,12,13,14,15,16,17,18,19]), 0, 'Test 67');
test(bestRotation([7,6,5,4,3,2,1,0,9,8]), 1, 'Test 68');
test(bestRotation([2,1,4,3,6,5,8,7,10,9]), 8, 'Test 69');
test(bestRotation([0,5,0,5,0,5,0,5,0,5]), 0, 'Test 70');
test(bestRotation([0,1,2,3,4,5,6,7,8,9,10]), 0, 'Test 71');
test(bestRotation([0,0,1,1,2,2,3,3,4,4]), 0, 'Test 72');
test(bestRotation([2,2,2,2,2,2,2,2,2,2]), 0, 'Test 73');
test(bestRotation([1,3,5,7,9,2,4,6,8,0]), 5, 'Test 74');
test(bestRotation([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 75');
test(bestRotation([5,1,2,3,4]), 0, 'Test 76');
test(bestRotation([0,9,8,7,6,5,4,3,2,1]), 0, 'Test 77');
test(bestRotation([10,20,30,40,50,60,70,80,90,0,1,2,3,4,5,6,7,8,9]), 9, 'Test 78');
test(bestRotation([2,0,1,0,2,1,0,2,1,0]), 1, 'Test 79');
test(bestRotation([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 0, 'Test 80');
test(bestRotation([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4]), 5, 'Test 81');
test(bestRotation([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1]), 0, 'Test 82');
test(bestRotation([5,1,3,4,2,0,7,6,8,9]), 9, 'Test 83');
test(bestRotation([5,3,1,2,4,0]), 0, 'Test 84');
test(bestRotation([0,1,0,1,0,1,0,1,0,1]), 0, 'Test 85');
test(bestRotation([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 86');
test(bestRotation([0,0,0,0,1,1,1,1,2,2]), 0, 'Test 87');
test(bestRotation([2,3,4,5,6,7,8,9,0,1]), 8, 'Test 88');
test(bestRotation([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 0, 'Test 89');
test(bestRotation([2,6,1,5,0,4,3]), 1, 'Test 90');
test(bestRotation([0,2,0,2,0,2,0,2,0,2]), 0, 'Test 91');
test(bestRotation([1,2,3,4,5,0,6,7,8,9]), 9, 'Test 92');
test(bestRotation([10,20,30,40,50,0,1,2,3,4]), 0, 'Test 93');
test(bestRotation([19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 1, 'Test 94');

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
