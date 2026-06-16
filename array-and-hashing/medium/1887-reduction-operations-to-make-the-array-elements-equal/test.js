// Test: 1887. Reduction Operations To Make The Array Elements Equal
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { reductionOperations } = require("./solution");

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

console.log("\n1887. Reduction Operations To Make The Array Elements Equal\n");

test(reductionOperations([100000, 99999, 99998, 99997, 99996]), 10, 'Test 1');
test(reductionOperations([1,2,2,3,3,3,4,4,4,4]), 20, 'Test 2');
test(reductionOperations([4,3,2,1]), 6, 'Test 3');
test(reductionOperations([1,5,2,4,3]), 10, 'Test 4');
test(reductionOperations([1,1,1]), 0, 'Test 5');
test(reductionOperations([1,1,2,2,3]), 4, 'Test 6');
test(reductionOperations([3,3,2,1,2,3,3,2,1]), 11, 'Test 7');
test(reductionOperations([4,3,2,1,4,3,2,1]), 12, 'Test 8');
test(reductionOperations([5,5,5,5,5]), 0, 'Test 9');
test(reductionOperations([5]), 0, 'Test 10');
test(reductionOperations([10,9,8,7,6,5,4,3,2,1]), 45, 'Test 11');
test(reductionOperations([5,1,3]), 3, 'Test 12');
test(reductionOperations([1,2,3,4,5]), 10, 'Test 13');
test(reductionOperations([1,2,3,4,5,6,7,8,9,10]), 45, 'Test 14');
test(reductionOperations([4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1]), 18, 'Test 15');
test(reductionOperations([5,5,4,4,3,3,2,2,1,1,5,5,4,4,3,3,2,2,1,1,5,5,4,4,3,3,2,2,1,1]), 60, 'Test 16');
test(reductionOperations([5, 3, 3, 3, 2, 2, 1, 1, 1, 1]), 11, 'Test 17');
test(reductionOperations([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 10, 'Test 18');
test(reductionOperations([1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7,8,9]), 84, 'Test 19');
test(reductionOperations([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 190, 'Test 20');
test(reductionOperations([1,2,2,2,3,3,3,3,4,4,4,4,4]), 26, 'Test 21');
test(reductionOperations([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 190, 'Test 22');
test(reductionOperations([1, 2, 3, 4, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5]), 40, 'Test 23');
test(reductionOperations([10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), 90, 'Test 24');
test(reductionOperations([5,4,3,2,1,1,2,3,4,5]), 20, 'Test 25');
test(reductionOperations([4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4]), 21, 'Test 26');
test(reductionOperations([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 105, 'Test 27');
test(reductionOperations([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 40, 'Test 28');
test(reductionOperations([4,3,3,2,2,1,1,1,1]), 9, 'Test 29');
test(reductionOperations([50000, 49999, 49998, 49997, 49996, 49995, 49994, 49993, 49992, 49991]), 45, 'Test 30');
test(reductionOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 31');
test(reductionOperations([5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]), 32, 'Test 32');
test(reductionOperations([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 140, 'Test 33');
test(reductionOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 435, 'Test 34');
test(reductionOperations([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 50, 'Test 35');
test(reductionOperations([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6]), 85, 'Test 36');
test(reductionOperations([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 435, 'Test 37');
test(reductionOperations([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 10, 'Test 38');
test(reductionOperations([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7]), 112, 'Test 39');
test(reductionOperations([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), 50, 'Test 40');
test(reductionOperations([50000, 49999, 49998, 49997, 49996, 49995, 49994, 49993, 49992, 49991, 49990, 49989, 49988, 49987, 49986, 49985, 49984, 49983, 49982, 49981]), 190, 'Test 41');
test(reductionOperations([5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 20, 'Test 42');
test(reductionOperations([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 126, 'Test 43');
test(reductionOperations([1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3]), 24, 'Test 44');
test(reductionOperations([30000, 20000, 10000, 5000, 2500, 1250, 625, 312, 156, 78, 39, 19, 9, 4, 2, 1]), 120, 'Test 45');
test(reductionOperations([5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1]), 20, 'Test 46');
test(reductionOperations([1,3,2,4,5,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1]), 43, 'Test 47');
test(reductionOperations([1, 2, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1]), 19, 'Test 48');
test(reductionOperations([10,10,10,10,10,9,9,9,9,9,8,8,8,8,8,7,7,7,7,7,6,6,6,6,6,5,5,5,5,5,4,4,4,4,4,3,3,3,3,3,2,2,2,2,2,1,1,1,1,1]), 225, 'Test 49');
test(reductionOperations([2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5]), 32, 'Test 50');
test(reductionOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4]), 24, 'Test 51');
test(reductionOperations([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5]), 26, 'Test 52');
test(reductionOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 300, 'Test 53');
test(reductionOperations([1, 3, 2, 5, 4, 3, 2, 1, 4, 3, 2, 1, 3, 2, 1, 2, 1, 1]), 23, 'Test 54');
test(reductionOperations([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5]), 30, 'Test 55');
test(reductionOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 90, 'Test 56');
test(reductionOperations([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]), 174, 'Test 57');
test(reductionOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 190, 'Test 58');
test(reductionOperations([5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), 20, 'Test 59');
test(reductionOperations([5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]), 24, 'Test 60');
test(reductionOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6]), 125, 'Test 61');
test(reductionOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 435, 'Test 62');
test(reductionOperations([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 90, 'Test 63');
test(reductionOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 64');
test(reductionOperations([10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), 90, 'Test 65');
test(reductionOperations([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 435, 'Test 66');
test(reductionOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 45, 'Test 67');
test(reductionOperations([5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 50, 'Test 68');
test(reductionOperations([1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 71, 'Test 69');
test(reductionOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 105, 'Test 70');
test(reductionOperations([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 71');
test(reductionOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 45, 'Test 72');
test(reductionOperations([25000, 25000, 24999, 24998, 24997, 24996, 24995, 24994, 24993, 24992]), 44, 'Test 73');
test(reductionOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 190, 'Test 74');
test(reductionOperations([5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1]), 40, 'Test 75');
test(reductionOperations([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4]), 26, 'Test 76');
test(reductionOperations([1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3]), 28, 'Test 77');
test(reductionOperations([50000,49999,49998,49997,49996,49995,49994,49993,49992,49991]), 45, 'Test 78');
test(reductionOperations([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), 18, 'Test 79');
test(reductionOperations([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 90, 'Test 80');
test(reductionOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 81');
test(reductionOperations([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 90, 'Test 82');
test(reductionOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5]), 41, 'Test 83');
test(reductionOperations([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,20]), 190, 'Test 84');
test(reductionOperations([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1]), 56, 'Test 85');
test(reductionOperations([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 50, 'Test 86');
test(reductionOperations([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 0, 'Test 87');
test(reductionOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2]), 24, 'Test 88');
test(reductionOperations([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 89');
test(reductionOperations([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5]), 50, 'Test 90');
test(reductionOperations([1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10]), 25, 'Test 91');
test(reductionOperations([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 135, 'Test 92');
test(reductionOperations([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]), 20, 'Test 93');
test(reductionOperations([1, 3, 2, 3, 1, 4, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), 125, 'Test 94');
test(reductionOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 95');
test(reductionOperations([5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2]), 30, 'Test 96');
test(reductionOperations([5,4,4,3,3,3,2,2,2,2,1,1,1,1,1]), 20, 'Test 97');
test(reductionOperations([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 98');
test(reductionOperations([5,4,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1]), 36, 'Test 99');

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
