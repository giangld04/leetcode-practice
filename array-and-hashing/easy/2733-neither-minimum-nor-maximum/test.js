// Test: 2733. Neither Minimum Nor Maximum
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { findNonMinOrMax } = require("./solution");

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

console.log("\n2733. Neither Minimum Nor Maximum\n");

test(findNonMinOrMax([1]), -1, 'Test 1');
test(findNonMinOrMax([1,3,2]), 2, 'Test 2');
test(findNonMinOrMax([9,5,6]), 6, 'Test 3');
test(findNonMinOrMax([9,11,10]), 10, 'Test 4');
test(findNonMinOrMax([1,2]), -1, 'Test 5');
test(findNonMinOrMax([7,8,9]), 8, 'Test 6');
test(findNonMinOrMax([100, 1, 50]), 50, 'Test 7');
test(findNonMinOrMax([5,3,4,1,2]), 3, 'Test 8');
test(findNonMinOrMax([2,1,3]), 2, 'Test 9');
test(findNonMinOrMax([5,10,3,8,1]), 5, 'Test 10');
test(findNonMinOrMax([10,20,30,40,50]), 20, 'Test 11');
test(findNonMinOrMax([7]), -1, 'Test 12');
test(findNonMinOrMax([5,1,4,3,2]), 4, 'Test 13');
test(findNonMinOrMax([3,2,1,4]), 3, 'Test 14');
test(findNonMinOrMax([7, 8, 9]), 8, 'Test 15');
test(findNonMinOrMax([42, 24, 36, 12, 60, 72, 48]), 42, 'Test 16');
test(findNonMinOrMax([2, 1, 3, 5, 4, 6]), 2, 'Test 17');
test(findNonMinOrMax([5, 10, 15, 20, 25, 30, 35]), 10, 'Test 18');
test(findNonMinOrMax([30, 1, 29, 2, 28, 3, 27, 4, 26, 5]), 29, 'Test 19');
test(findNonMinOrMax([42, 35, 28, 21, 14, 7]), 35, 'Test 20');
test(findNonMinOrMax([100, 99, 98, 97, 96, 95, 94]), 99, 'Test 21');
test(findNonMinOrMax([60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50]), 59, 'Test 22');
test(findNonMinOrMax([5, 4, 3, 2, 1, 10, 9, 8, 7, 6]), 5, 'Test 23');
test(findNonMinOrMax([1, 100, 50, 75, 25]), 50, 'Test 24');
test(findNonMinOrMax([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 8, 'Test 25');
test(findNonMinOrMax([6, 4, 2, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]), 6, 'Test 26');
test(findNonMinOrMax([1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), 3, 'Test 27');
test(findNonMinOrMax([60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41]), 59, 'Test 28');
test(findNonMinOrMax([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]), 22, 'Test 29');
test(findNonMinOrMax([33, 11, 22, 44, 55, 66, 77, 88, 99, 111, 222, 333, 444, 555]), 33, 'Test 30');
test(findNonMinOrMax([5, 10, 15, 20, 25]), 10, 'Test 31');
test(findNonMinOrMax([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93]), 2, 'Test 32');
test(findNonMinOrMax([100, 1, 50, 25, 75, 33, 67, 88, 99, 2]), 50, 'Test 33');
test(findNonMinOrMax([7, 3, 9, 11, 5]), 7, 'Test 34');
test(findNonMinOrMax([42]), -1, 'Test 35');
test(findNonMinOrMax([45, 23, 67, 89, 12, 34, 56, 78, 90, 10, 20]), 45, 'Test 36');
test(findNonMinOrMax([100]), -1, 'Test 37');
test(findNonMinOrMax([42, 3, 7, 18, 29, 1]), 3, 'Test 38');
test(findNonMinOrMax([8, 6, 4, 2, 1, 3, 5, 7, 9, 10]), 8, 'Test 39');
test(findNonMinOrMax([7, 77, 777, 7777]), 77, 'Test 40');
test(findNonMinOrMax([21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 22, 'Test 41');
test(findNonMinOrMax([15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), 25, 'Test 42');
test(findNonMinOrMax([100, 1, 50, 25, 75]), 50, 'Test 43');
test(findNonMinOrMax([8, 6, 4, 2, 0, -2, -4]), 6, 'Test 44');
test(findNonMinOrMax([3, 1, 2, 4, 5, 6, 7, 8, 9, 10]), 3, 'Test 45');
test(findNonMinOrMax([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88]), 16, 'Test 46');
test(findNonMinOrMax([101, 99, 98, 100, 97, 96, 95, 94, 93, 92, 91]), 99, 'Test 47');
test(findNonMinOrMax([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 98, 'Test 48');
test(findNonMinOrMax([4, 1, 3, 2, 5, 7, 6, 8]), 4, 'Test 49');
test(findNonMinOrMax([10, 20, 30, 40, 50, 60, 70, 80, 90]), 20, 'Test 50');
test(findNonMinOrMax([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 12, 'Test 51');
test(findNonMinOrMax([88, 99, 77, 66, 55, 44]), 88, 'Test 52');
test(findNonMinOrMax([45, 30, 15, 60, 75, 90]), 45, 'Test 53');
test(findNonMinOrMax([31, 1, 41, 59, 26, 53, 58, 97, 93, 23]), 31, 'Test 54');
test(findNonMinOrMax([5, 1, 9, 3, 7]), 5, 'Test 55');
test(findNonMinOrMax([5, 4, 3, 2, 1]), 4, 'Test 56');
test(findNonMinOrMax([55, 45, 35, 25, 15, 5, 10, 20, 30, 40]), 45, 'Test 57');
test(findNonMinOrMax([7, 3, 5, 1, 9, 11]), 7, 'Test 58');
test(findNonMinOrMax([10, 20, 30, 40, 50]), 20, 'Test 59');
test(findNonMinOrMax([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 3, 'Test 60');
test(findNonMinOrMax([45, 30, 60, 20, 70]), 45, 'Test 61');
test(findNonMinOrMax([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 4, 'Test 62');
test(findNonMinOrMax([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]), 3, 'Test 63');
test(findNonMinOrMax([5, 3, 7, 1, 9, 11, 13, 15, 17, 19, 21]), 5, 'Test 64');
test(findNonMinOrMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 2, 'Test 65');
test(findNonMinOrMax([100, 1, 50, 2, 99]), 50, 'Test 66');
test(findNonMinOrMax([33, 22, 11, 44, 55, 66, 77, 88, 99]), 33, 'Test 67');
test(findNonMinOrMax([7, 1, 5, 3, 6, 4]), 5, 'Test 68');
test(findNonMinOrMax([10, 5, 15, 20, 25]), 10, 'Test 69');
test(findNonMinOrMax([42, 27, 58, 19, 33, 49, 21]), 42, 'Test 70');
test(findNonMinOrMax([5, 4, 3, 2, 1, 6, 7, 8, 9, 10]), 5, 'Test 71');
test(findNonMinOrMax([10, 20, 30, 40, 50, 60, 70]), 20, 'Test 72');
test(findNonMinOrMax([99, 100]), -1, 'Test 73');
test(findNonMinOrMax([25, 20, 15, 10, 5]), 20, 'Test 74');
test(findNonMinOrMax([7, 14, 21, 28, 35, 42]), 14, 'Test 75');
test(findNonMinOrMax([100, 1, 2, 3, 99, 50]), 2, 'Test 76');
test(findNonMinOrMax([66, 33, 99, 22, 44, 77, 55, 11, 88]), 66, 'Test 77');
test(findNonMinOrMax([33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]), 34, 'Test 78');
test(findNonMinOrMax([5, 3, 8, 1, 4]), 5, 'Test 79');
test(findNonMinOrMax([100, 1, 50, 99, 2, 98]), 50, 'Test 80');
test(findNonMinOrMax([8, 15, 3, 12, 7, 18]), 8, 'Test 81');
test(findNonMinOrMax([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11]), 29, 'Test 82');
test(findNonMinOrMax([7, 14, 9, 11, 6, 12]), 7, 'Test 83');
test(findNonMinOrMax([5, 1, 100, 10, 50, 20, 60, 30, 40, 70, 80, 90]), 5, 'Test 84');
test(findNonMinOrMax([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 20, 'Test 85');
test(findNonMinOrMax([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 10, 'Test 86');
test(findNonMinOrMax([3, 1, 2, 4, 5]), 3, 'Test 87');
test(findNonMinOrMax([50, 40]), -1, 'Test 88');
test(findNonMinOrMax([10, 5, 3, 8, 2]), 5, 'Test 89');
test(findNonMinOrMax([100, 1, 50, 75, 25, 125, 62]), 100, 'Test 90');
test(findNonMinOrMax([97, 98, 95, 96, 99]), 97, 'Test 91');
test(findNonMinOrMax([8, 6, 7, 5, 3, 0, 9]), 8, 'Test 92');
test(findNonMinOrMax([100, 1, 50, 99, 2]), 50, 'Test 93');
test(findNonMinOrMax([47, 29, 83, 61, 95, 17, 53]), 47, 'Test 94');

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
