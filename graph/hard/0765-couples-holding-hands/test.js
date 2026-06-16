// Test: 765. Couples Holding Hands
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { minSwapsCouples } = require("./solution");

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

console.log("\n765. Couples Holding Hands\n");

test(minSwapsCouples([2,0,5,4,3,1]), 1, 'Test 1');
test(minSwapsCouples([0,1,2,3]), 0, 'Test 2');
test(minSwapsCouples([0,2,1,3]), 1, 'Test 3');
test(minSwapsCouples([4,3,2,1,0,5]), 2, 'Test 4');
test(minSwapsCouples([2,0,5,4,3,6,7,1]), 2, 'Test 5');
test(minSwapsCouples([0,2,4,6,7,1,3,5]), 3, 'Test 6');
test(minSwapsCouples([0,1,2,3,4,5]), 0, 'Test 7');
test(minSwapsCouples([4,3,2,5,1,6,7,8,9,0]), 3, 'Test 8');
test(minSwapsCouples([5,4,3,2,1,0]), 0, 'Test 9');
test(minSwapsCouples([5,4,2,6,3,1,7,0]), 2, 'Test 10');
test(minSwapsCouples([1,4,0,5,8,7,6,3,2,9]), 3, 'Test 11');
test(minSwapsCouples([4,6,2,8,5,3,7,0,1,9]), 4, 'Test 12');
test(minSwapsCouples([2,0,1,3]), 1, 'Test 13');
test(minSwapsCouples([6,2,1,7,4,5,0,3]), 2, 'Test 14');
test(minSwapsCouples([0,5,4,2,1,6,7,3,8,9]), 3, 'Test 15');
test(minSwapsCouples([3,2,0,1]), 0, 'Test 16');
test(minSwapsCouples([5,4,2,6,3,1,8,7,10,11,12,13,0,15,14,17,16,19,18,21,20,23,22,25,24,27,26]), Error: list index out of range, 'Test 17');
test(minSwapsCouples([1,3,2,0]), 1, 'Test 18');
test(minSwapsCouples([0,29,1,28,2,27,3,26,4,25,5,24,6,23,7,22,8,21,9,20,10,19,11,18,12,17,13,16,14,15]), 7, 'Test 19');
test(minSwapsCouples([0,1,4,5,8,9,12,13,2,3,6,7,10,11,14,15]), 0, 'Test 20');
test(minSwapsCouples([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), Error: list index out of range, 'Test 21');
test(minSwapsCouples([4,5,0,1,2,3,12,13,14,15,8,9,10,11,6,7,20,21,22,23,24,25,16,17,18,19,26,27,28,29,30,31]), 0, 'Test 22');
test(minSwapsCouples([0,1,4,5,2,3,6,7,10,11,8,9,12,13,14,15]), 0, 'Test 23');
test(minSwapsCouples([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 0, 'Test 24');
test(minSwapsCouples([0,4,5,3,6,2,8,7,10,9,12,11,14,13,1]), Error: list index out of range, 'Test 25');
test(minSwapsCouples([14,4,13,3,12,2,11,1,10,0,9,5,8,6,7,15]), 5, 'Test 26');
test(minSwapsCouples([0,3,2,1,8,7,6,5,4,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]), 3, 'Test 27');
test(minSwapsCouples([27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 28');
test(minSwapsCouples([14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14]), Error: list index out of range, 'Test 29');
test(minSwapsCouples([14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,15]), 7, 'Test 30');
test(minSwapsCouples([0,15,2,3,4,5,6,7,8,9,10,11,12,13,14,1]), 1, 'Test 31');
test(minSwapsCouples([14,15,12,13,6,7,10,11,2,3,0,1,8,9,4,5]), 0, 'Test 32');
test(minSwapsCouples([1,2,3,0,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,21,20,23,22,25,24,27,26,29,28,31,30]), 1, 'Test 33');
test(minSwapsCouples([30,28,26,24,22,20,18,16,14,12,10,8,6,4,2,0,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), Error: list index out of range, 'Test 34');
test(minSwapsCouples([0,2,1,4,6,5,8,7,10,9,12,11,14,13,16,15,18,17,20,19,22,21,24,23,26,25,28,27,30,29]), Error: list index out of range, 'Test 35');
test(minSwapsCouples([14,13,12,15,10,9,8,11,6,7,4,5,2,3,0,1]), 2, 'Test 36');
test(minSwapsCouples([16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,17]), 8, 'Test 37');
test(minSwapsCouples([0, 8, 2, 12, 4, 6, 10, 14, 1, 9, 3, 13, 5, 7, 11, 15]), 4, 'Test 38');
test(minSwapsCouples([1,0,3,2,5,4,7,6,9,8,11,10]), 0, 'Test 39');
test(minSwapsCouples([1,2,3,0,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,21,20,23,22,25,24,27,26,29,28]), 1, 'Test 40');
test(minSwapsCouples([26,27,20,21,22,23,24,25,18,19,30,29,10,11,8,9,6,7,2,3,0,1,16,17,4,5,12,13,14,15,28,29]), 1, 'Test 41');
test(minSwapsCouples([29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 42');
test(minSwapsCouples([10,9,8,7,6,5,4,3,2,1,0,15,14,13,12,11]), 7, 'Test 43');
test(minSwapsCouples([0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 14, 'Test 44');
test(minSwapsCouples([1,0,3,2,5,4,7,6,9,8,11,10,13,12,15,14]), 0, 'Test 45');
test(minSwapsCouples([28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), Error: list index out of range, 'Test 46');
test(minSwapsCouples([18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), Error: list index out of range, 'Test 47');
test(minSwapsCouples([29,27,25,23,21,19,17,15,13,11,9,7,5,3,1,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28]), 7, 'Test 48');
test(minSwapsCouples([0,2,1,4,6,5,8,7,10,9,12,11,14,13,16,15,18,17,20,19,22,21,24,23,26,25,28,27]), Error: list index out of range, 'Test 49');
test(minSwapsCouples([0,31,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,30]), Error: list index out of range, 'Test 50');
test(minSwapsCouples([14,15,8,9,10,11,6,7,2,3,0,1,12,13,4,5]), 0, 'Test 51');
test(minSwapsCouples([0,2,1,4,3,6,5,8,7,10,9,12,11,14,13,16,15,18,17,20,19,22,21,24,23,26,25,28,29,27]), 14, 'Test 52');
test(minSwapsCouples([5,4,3,2,1,0,11,10,9,8,7,6]), 0, 'Test 53');
test(minSwapsCouples([28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), Error: list index out of range, 'Test 54');
test(minSwapsCouples([0,2,4,6,8,10,12,14,1,3,5,7,9,11,13,15]), 4, 'Test 55');
test(minSwapsCouples([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16]), 0, 'Test 56');
test(minSwapsCouples([10,11,8,9,6,7,2,3,0,1,4,5,12,13,14,15]), 0, 'Test 57');
test(minSwapsCouples([1,3,5,7,9,11,13,15,0,2,4,6,8,10,12,14]), 4, 'Test 58');
test(minSwapsCouples([1,3,2,4,7,5,6,8,11,9,10,12,15,13,14,16,19,17,18,20,23,21,22,24,27,25,26,29,28,31,30]), Error: list index out of range, 'Test 59');
test(minSwapsCouples([15,2,13,3,14,11,9,12,5,6,7,8,10,0,1,4]), 7, 'Test 60');
test(minSwapsCouples([22, 23, 18, 19, 12, 13, 28, 27, 20, 21, 24, 25, 16, 17, 8, 9, 26, 29, 2, 3, 0, 1, 14, 15, 6, 7, 10, 11, 4, 5]), 1, 'Test 61');
test(minSwapsCouples([10, 9, 8, 11, 6, 7, 4, 3, 2, 5, 0, 1]), 2, 'Test 62');
test(minSwapsCouples([0,2,1,3,4,6,5,7,8,10,9,11,12,14,13,15]), 4, 'Test 63');
test(minSwapsCouples([14,15,10,2,13,3,8,9,6,7,0,1,12,11,4,5]), 2, 'Test 64');
test(minSwapsCouples([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0]), 14, 'Test 65');
test(minSwapsCouples([2,1,4,3,6,5,8,7,10,9,12,11,14,13,16,15]), Error: list index out of range, 'Test 66');
test(minSwapsCouples([0,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 14, 'Test 67');
test(minSwapsCouples([2,1,8,7,14,13,20,19,26,25,32,31,6,5,12,11,18,17,24,23,30,29,4,3,10,9,16,15,22,21,28,27,34,33,0]), Error: list index out of range, 'Test 68');
test(minSwapsCouples([1,2,3,0,7,5,6,4,11,9,10,8]), 3, 'Test 69');
test(minSwapsCouples([14, 13, 10, 8, 12, 15, 0, 2, 4, 5, 1, 3, 6, 7, 9, 11]), 3, 'Test 70');
test(minSwapsCouples([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 71');
test(minSwapsCouples([10,1,2,5,4,3,8,7,6,11,9,12,14,13,15,0]), 6, 'Test 72');
test(minSwapsCouples([14, 13, 12, 15, 10, 9, 8, 11, 6, 7, 4, 5, 2, 3, 0, 1]), 2, 'Test 73');
test(minSwapsCouples([1, 2, 0, 3, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]), 1, 'Test 74');
test(minSwapsCouples([12,13,14,15,0,1,2,3,4,5,6,7,8,9,10,11]), 0, 'Test 75');
test(minSwapsCouples([10,8,9,7,6,5,4,3,2,1,0,11]), 5, 'Test 76');
test(minSwapsCouples([29, 28, 25, 24, 27, 26, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 0, 'Test 77');
test(minSwapsCouples([1,3,0,2,5,7,4,6,9,11,8,10,13,15,12,14]), 4, 'Test 78');
test(minSwapsCouples([14,13,12,15,2,3,0,1,10,11,8,9,6,7,4,5]), 1, 'Test 79');
test(minSwapsCouples([2,0,4,1,6,5,8,7,10,9,12,11,14,13,16,15]), Error: list index out of range, 'Test 80');
test(minSwapsCouples([14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), Error: list index out of range, 'Test 81');
test(minSwapsCouples([2, 3, 0, 1, 6, 5, 4, 7, 10, 9, 8, 11, 14, 13, 12, 15]), 3, 'Test 82');
test(minSwapsCouples([2,0,1,3,6,4,5,7,10,8,9,11,14,12,13,15,18,16,17,19,22,20,21,24,23,25,26,28,27,30,29]), Error: list index out of range, 'Test 83');
test(minSwapsCouples([14,15,8,13,12,9,0,1,2,11,10,3,6,5,4,7]), 3, 'Test 84');
test(minSwapsCouples([0,3,5,2,1,6,7,4,8,9,10,11]), 3, 'Test 85');
test(minSwapsCouples([1,3,2,6,5,4,7,8,9,11,10,15,14,13,12,0]), 6, 'Test 86');
test(minSwapsCouples([28,26,24,22,20,18,16,14,12,10,8,6,4,2,0,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 7, 'Test 87');
test(minSwapsCouples([1,0,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,21,20,23,22,25,24,27,26]), 0, 'Test 88');
test(minSwapsCouples([2,0,1,5,4,3,8,6,7,12,10,9,14,11,13,18,16,15,20,17,19,24,22,21,26,23,28,25]), Error: list index out of range, 'Test 89');
test(minSwapsCouples([18, 16, 12, 19, 2, 17, 13, 14, 20, 6, 0, 5, 3, 8, 9, 15, 10, 11, 7, 4]), Error: list index out of range, 'Test 90');
test(minSwapsCouples([3, 2, 1, 0, 5, 4, 7, 6, 9, 8, 11, 10, 15, 14, 13, 12, 17, 16, 19, 18]), 0, 'Test 91');
test(minSwapsCouples([28,29,24,25,26,27,20,21,22,23,18,19,10,11,8,9,6,7,2,3,0,1,16,17,4,5,12,13,14,15,30,29]), 1, 'Test 92');
test(minSwapsCouples([6,5,0,4,3,2,7,1,10,9,8,11]), 3, 'Test 93');
test(minSwapsCouples([8,7,6,5,4,3,2,1,0,9,10,11]), 4, 'Test 94');
test(minSwapsCouples([1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 0, 'Test 95');
test(minSwapsCouples([0,1,14,15,6,7,2,3,8,9,4,5,12,13,10,11,22,23,16,17,18,19,20,21,24,25,26,27,28,29]), 0, 'Test 96');
test(minSwapsCouples([0,3,2,1,4,7,6,5,8,11,10,9,12,15,14,13]), 4, 'Test 97');
test(minSwapsCouples([18, 19, 16, 17, 14, 15, 12, 13, 10, 11, 8, 9, 6, 7, 4, 5, 2, 3, 0, 1]), 0, 'Test 98');
test(minSwapsCouples([2,0,4,6,8,10,12,14,16,18,20,22,24,26,28,30,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), Error: list index out of range, 'Test 99');
test(minSwapsCouples([14,12,10,8,6,4,2,0,16,18,20,22,24,26,28,30,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), Error: list index out of range, 'Test 100');
test(minSwapsCouples([2,3,0,1,6,7,4,5,10,11,8,9]), 0, 'Test 101');
test(minSwapsCouples([28,29,26,27,24,25,22,23,20,21,18,19,16,17,14,15,12,13,10,11,8,9,6,7,4,5,2,3,0,1]), 0, 'Test 102');

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
