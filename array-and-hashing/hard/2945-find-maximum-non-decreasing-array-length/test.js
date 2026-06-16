// Test: 2945. Find Maximum Non Decreasing Array Length
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { findMaximumLength } = require("./solution");

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

console.log("\n2945. Find Maximum Non Decreasing Array Length\n");

test(findMaximumLength([1,2,2,3,4,5,5,6,7,8]), 10, 'Test 1');
test(findMaximumLength([1,100,1000]), 3, 'Test 2');
test(findMaximumLength([10,9,2,5,3,7,101,18]), 4, 'Test 3');
test(findMaximumLength([10,9,8,7,6,5,4,3,2,1]), 3, 'Test 4');
test(findMaximumLength([3,3,3,3]), 4, 'Test 5');
test(findMaximumLength([5,4,3,2,1,6,7,8]), 4, 'Test 6');
test(findMaximumLength([1]), 1, 'Test 7');
test(findMaximumLength([1,2,3,4]), 4, 'Test 8');
test(findMaximumLength([1,2,3,5,4,6,7,8,9,10]), 7, 'Test 9');
test(findMaximumLength([1,2,4,3,5]), 4, 'Test 10');
test(findMaximumLength([4,3,2,6]), 3, 'Test 11');
test(findMaximumLength([100,10,1]), 1, 'Test 12');
test(findMaximumLength([1,3,5,7,9,11,13,15,17,19]), 10, 'Test 13');
test(findMaximumLength([7,7,7,7,7]), 5, 'Test 14');
test(findMaximumLength([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 15');
test(findMaximumLength([9,4,3,2,1]), 2, 'Test 16');
test(findMaximumLength([1,1,1,1,1]), 5, 'Test 17');
test(findMaximumLength([10,5,7,10]), 2, 'Test 18');
test(findMaximumLength([10,5,7,10,6]), 3, 'Test 19');
test(findMaximumLength([100000,100000,100000,100000,100000]), 5, 'Test 20');
test(findMaximumLength([1,100,2,101,1]), 3, 'Test 21');
test(findMaximumLength([5,2,2]), 1, 'Test 22');
test(findMaximumLength([100000,90000,80000,70000,60000]), 2, 'Test 23');
test(findMaximumLength([9,7,5,3,1,2,4,6,8,10]), 4, 'Test 24');
test(findMaximumLength([3,5,2,5,6]), 3, 'Test 25');
test(findMaximumLength([100000,99999,99998,99997,99996]), 2, 'Test 26');
test(findMaximumLength([5, 6, 2, 8, 3, 9, 1, 10, 4, 11]), 5, 'Test 27');
test(findMaximumLength([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 7, 'Test 28');
test(findMaximumLength([1, 10, 1, 10, 1, 10]), 4, 'Test 29');
test(findMaximumLength([2,2,2,1,1,1,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]), 19, 'Test 30');
test(findMaximumLength([9, 8, 7, 6, 5, 4, 3, 2, 1]), 3, 'Test 31');
test(findMaximumLength([1, 2, 3, 4, 5, 4, 5, 6, 7, 6, 7, 8, 9, 8, 9, 10]), 10, 'Test 32');
test(findMaximumLength([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 500, 600, 700, 800, 900]), 12, 'Test 33');
test(findMaximumLength([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4, 'Test 34');
test(findMaximumLength([200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 5, 'Test 35');
test(findMaximumLength([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 12, 'Test 36');
test(findMaximumLength([1, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11]), 11, 'Test 37');
test(findMaximumLength([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3]), 6, 'Test 38');
test(findMaximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 12, 'Test 39');
test(findMaximumLength([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93]), 9, 'Test 40');
test(findMaximumLength([10, 20, 15, 25, 30, 35, 40, 45, 50]), 5, 'Test 41');
test(findMaximumLength([10, 20, 15, 25, 30, 5, 40, 45]), 4, 'Test 42');
test(findMaximumLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 15, 'Test 43');
test(findMaximumLength([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 20, 'Test 44');
test(findMaximumLength([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 15, 'Test 45');
test(findMaximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), 10, 'Test 46');
test(findMaximumLength([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 5, 'Test 47');
test(findMaximumLength([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 15, 'Test 48');
test(findMaximumLength([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2]), 12, 'Test 49');
test(findMaximumLength([10, 1, 20, 2, 30, 3, 40, 4, 50, 5]), 5, 'Test 50');
test(findMaximumLength([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 12, 'Test 51');
test(findMaximumLength([9, 7, 5, 3, 1, 2, 4, 6, 8, 10]), 4, 'Test 52');
test(findMaximumLength([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 13, 'Test 53');
test(findMaximumLength([100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 1]), 4, 'Test 54');
test(findMaximumLength([1,100,1,100,1,100,1,100,1,100]), 6, 'Test 55');
test(findMaximumLength([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 7, 'Test 56');
test(findMaximumLength([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 10, 'Test 57');
test(findMaximumLength([3,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 10, 'Test 58');
test(findMaximumLength([100, 200, 100, 300, 200, 400, 300, 500]), 5, 'Test 59');
test(findMaximumLength([1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 10, 11, 12, 12, 13, 14, 15]), 20, 'Test 60');
test(findMaximumLength([1, 100, 2, 99, 3, 98, 4, 97, 5, 96]), 6, 'Test 61');
test(findMaximumLength([10, 5, 3, 8, 12, 7, 9, 11]), 4, 'Test 62');
test(findMaximumLength([1, 3, 5, 4, 6, 7, 5, 8, 9, 10, 11, 9, 12, 13, 14]), 9, 'Test 63');
test(findMaximumLength([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 3, 'Test 64');
test(findMaximumLength([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 8, 'Test 65');
test(findMaximumLength([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3]), 8, 'Test 66');
test(findMaximumLength([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 3, 'Test 67');
test(findMaximumLength([1, 3, 2, 4, 3, 5, 4, 6, 5, 7]), 6, 'Test 68');
test(findMaximumLength([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8]), 8, 'Test 69');
test(findMaximumLength([1, 2, 3, 4, 5, 4, 3, 2, 1]), 6, 'Test 70');
test(findMaximumLength([1, 3, 2, 4, 5, 6, 7, 8, 9, 10]), 6, 'Test 71');
test(findMaximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 15, 'Test 72');
test(findMaximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 73');
test(findMaximumLength([1, 2, 3, 4, 5, 4, 3, 2, 1, 6, 7, 8, 9]), 8, 'Test 74');
test(findMaximumLength([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 20, 'Test 75');
test(findMaximumLength([10, 1, 10, 1, 10, 1, 10, 1, 10, 1]), 5, 'Test 76');
test(findMaximumLength([1, 3, 2, 4, 3, 5, 4, 6]), 5, 'Test 77');
test(findMaximumLength([5, 4, 3, 2, 1, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 5, 'Test 78');
test(findMaximumLength([5, 1, 4, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1]), 13, 'Test 79');
test(findMaximumLength([1, 100, 2, 101, 3, 102, 4, 103, 5, 104]), 6, 'Test 80');
test(findMaximumLength([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 6, 'Test 81');
test(findMaximumLength([9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15]), 6, 'Test 82');
test(findMaximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 83');
test(findMaximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1]), 10, 'Test 84');
test(findMaximumLength([1, 10, 100, 1000, 10000, 1, 10, 100, 1000, 10000]), 6, 'Test 85');
test(findMaximumLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 86');
test(findMaximumLength([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]), 3, 'Test 87');
test(findMaximumLength([5, 6, 7, 8, 9, 1, 2, 3, 4, 5]), 6, 'Test 88');
test(findMaximumLength([5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 10, 'Test 89');
test(findMaximumLength([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12]), 6, 'Test 90');
test(findMaximumLength([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 20, 'Test 91');
test(findMaximumLength([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 6, 'Test 92');
test(findMaximumLength([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 10, 'Test 93');
test(findMaximumLength([5, 4, 3, 2, 1, 2, 3, 4, 5]), 4, 'Test 94');
test(findMaximumLength([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 13, 'Test 95');
test(findMaximumLength([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 10, 'Test 96');
test(findMaximumLength([1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5]), 8, 'Test 97');
test(findMaximumLength([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12]), 11, 'Test 98');
test(findMaximumLength([1,2,3,1,2,3,1,2,3]), 7, 'Test 99');
test(findMaximumLength([100, 200, 150, 250, 300, 100, 400, 500, 350, 450]), 7, 'Test 100');
test(findMaximumLength([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 10, 'Test 101');
test(findMaximumLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 20, 'Test 102');
test(findMaximumLength([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 11, 'Test 103');
test(findMaximumLength([10, 5, 3, 7, 8, 12, 1]), 3, 'Test 104');
test(findMaximumLength([1,3,2,4,5,3,6,7,8,5,9,10]), 7, 'Test 105');
test(findMaximumLength([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 7, 8, 9, 10]), 8, 'Test 106');
test(findMaximumLength([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5]), 7, 'Test 107');
test(findMaximumLength([10, 5, 1, 1, 1, 15, 20, 25, 30]), 5, 'Test 108');
test(findMaximumLength([10, 20, 30, 25, 35, 40, 45, 50]), 5, 'Test 109');
test(findMaximumLength([5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 7, 'Test 110');
test(findMaximumLength([1, 3, 2, 4, 5, 6, 7, 8, 9]), 5, 'Test 111');

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
