// Test: 2956. Find Common Elements Between Two Arrays
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { findIntersectionValues } = require("./solution");

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

console.log("\n2956. Find Common Elements Between Two Arrays\n");

test(findIntersectionValues([10,20,30], [5,15,25,35]), [0, 0], 'Test 1');
test(findIntersectionValues([10,20,30], [30,20,10]), [3, 3], 'Test 2');
test(findIntersectionValues([1,1,1,1], [1,1,1,1]), [4, 4], 'Test 3');
test(findIntersectionValues([2,3,2], [1,2]), [2, 1], 'Test 4');
test(findIntersectionValues([10,20,30], [5,15,25,35,45]), [0, 0], 'Test 5');
test(findIntersectionValues([100,99,98], [97,96,95]), [0, 0], 'Test 6');
test(findIntersectionValues([1,3,5,7,9], [2,4,6,8,10]), [0, 0], 'Test 7');
test(findIntersectionValues([1,2,3,4,5], [5,4,3,2,1]), [5, 5], 'Test 8');
test(findIntersectionValues([50,60,70], [50,60,70,80,90]), [3, 3], 'Test 9');
test(findIntersectionValues([1,2,3,4,5], [6,7,8,9,10]), [0, 0], 'Test 10');
test(findIntersectionValues([50,51,52], [49,50,51]), [2, 2], 'Test 11');
test(findIntersectionValues([1,2,3], [3,4,5]), [1, 1], 'Test 12');
test(findIntersectionValues([1], [2]), [0, 0], 'Test 13');
test(findIntersectionValues([50,50,50], [50,50]), [3, 2], 'Test 14');
test(findIntersectionValues([100,1,50], [50,100,200]), [2, 2], 'Test 15');
test(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6]), [3, 4], 'Test 16');
test(findIntersectionValues([3,4,2,3], [1,5]), [0, 0], 'Test 17');
test(findIntersectionValues([100,100,100], [100]), [3, 1], 'Test 18');
test(findIntersectionValues([1,2,3], [4,5,6]), [0, 0], 'Test 19');
test(findIntersectionValues([10], [10]), [1, 1], 'Test 20');
test(findIntersectionValues([1,1,1,1], [1,1,1]), [4, 3], 'Test 21');
test(findIntersectionValues([1], [1]), [1, 1], 'Test 22');
test(findIntersectionValues([1,2,3], [1,2,3,4,5]), [3, 3], 'Test 23');
test(findIntersectionValues([100], [100]), [1, 1], 'Test 24');
test(findIntersectionValues([50], [50]), [1, 1], 'Test 25');
test(findIntersectionValues([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), [5, 5], 'Test 26');
test(findIntersectionValues([99, 98, 97, 96, 95], [50, 40, 30, 20, 10]), [0, 0], 'Test 27');
test(findIntersectionValues([10, 20, 30, 40, 50], [10, 15, 20, 25, 30]), [3, 3], 'Test 28');
test(findIntersectionValues([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [3, 3], 'Test 29');
test(findIntersectionValues([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), [5, 10], 'Test 30');
test(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), [6, 6], 'Test 31');
test(findIntersectionValues([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), [10, 10], 'Test 32');
test(findIntersectionValues([99, 98, 97, 96, 95], [95, 96, 97, 98, 99]), [5, 5], 'Test 33');
test(findIntersectionValues([10, 20, 30, 40, 50, 60], [5, 15, 25, 35, 45, 55, 65]), [0, 0], 'Test 34');
test(findIntersectionValues([23, 45, 67, 89, 12, 34, 56], [12, 23, 34, 45, 56, 67, 78, 89, 90]), [7, 7], 'Test 35');
test(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [10, 10], 'Test 36');
test(findIntersectionValues([1, 2, 3], [4, 5, 6, 1, 2, 3, 4, 5, 6]), [3, 3], 'Test 37');
test(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [10, 10], 'Test 38');
test(findIntersectionValues([5, 5, 5, 5, 5], [5, 5, 5, 5, 5]), [5, 5], 'Test 39');
test(findIntersectionValues([100, 99, 98, 97, 96], [95, 96, 97, 98, 99]), [4, 4], 'Test 40');
test(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9]), [5, 5], 'Test 41');
test(findIntersectionValues([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), [0, 0], 'Test 42');
test(findIntersectionValues([1, 1, 2, 2, 3, 3], [3, 3, 3, 3, 2, 2, 1, 1]), [6, 8], 'Test 43');
test(findIntersectionValues([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), [10, 10], 'Test 44');
test(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5]), [5, 5], 'Test 45');
test(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [5, 5], 'Test 46');
test(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), [0, 0], 'Test 47');
test(findIntersectionValues([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), [0, 0], 'Test 48');
test(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5]), [10, 15], 'Test 49');
test(findIntersectionValues([50], [50, 50, 50, 50, 50, 50]), [1, 6], 'Test 50');
test(findIntersectionValues([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [0, 0], 'Test 51');
test(findIntersectionValues([7, 14, 21, 28, 35, 42, 49], [7, 21, 35, 49, 56, 63, 70]), [4, 4], 'Test 52');
test(findIntersectionValues([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], [91, 92, 93, 94, 95]), [5, 5], 'Test 53');
test(findIntersectionValues([5, 10, 15, 20, 25, 30], [15, 25, 35, 45, 55]), [2, 2], 'Test 54');
test(findIntersectionValues([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14, 16]), [0, 0], 'Test 55');
test(findIntersectionValues([10, 20, 30, 40, 50], [1, 2, 3, 4, 5]), [0, 0], 'Test 56');
test(findIntersectionValues([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), [5, 5], 'Test 57');
test(findIntersectionValues([1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5]), [7, 5], 'Test 58');
test(findIntersectionValues([99, 98, 97, 96, 95], [95, 94, 93, 92, 91]), [1, 1], 'Test 59');
test(findIntersectionValues([10, 20, 30, 40, 50], [40, 50, 60, 70, 80]), [2, 2], 'Test 60');
test(findIntersectionValues([99, 98, 97, 96, 95], [94, 93, 92, 91, 90]), [0, 0], 'Test 61');
test(findIntersectionValues([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [10, 5], 'Test 62');
test(findIntersectionValues([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], [1, 2, 3, 4, 5, 90, 91, 92, 93, 94]), [5, 5], 'Test 63');
test(findIntersectionValues([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), [10, 10], 'Test 64');
test(findIntersectionValues([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), [5, 5], 'Test 65');
test(findIntersectionValues([5, 15, 25, 35, 45, 55], [10, 20, 30, 40, 50]), [0, 0], 'Test 66');
test(findIntersectionValues([7, 8, 9, 10, 11, 12], [5, 6, 7, 8, 9, 10]), [4, 4], 'Test 67');
test(findIntersectionValues([42], [42, 42, 42, 42, 42]), [1, 5], 'Test 68');
test(findIntersectionValues([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), [0, 0], 'Test 69');
test(findIntersectionValues([42], [42, 42, 42, 42, 42, 42, 42, 42, 42, 42]), [1, 10], 'Test 70');
test(findIntersectionValues([5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5]), [7, 7], 'Test 71');
test(findIntersectionValues([1, 1, 2, 2, 3, 3], [3, 3, 2, 2, 1, 1]), [6, 6], 'Test 72');
test(findIntersectionValues([9, 18, 27, 36, 45], [8, 17, 26, 35, 44, 53]), [0, 0], 'Test 73');
test(findIntersectionValues([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [0, 0], 'Test 74');
test(findIntersectionValues([7, 8, 9, 10], [5, 6, 7, 8, 9]), [3, 3], 'Test 75');
test(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), [10, 10], 'Test 76');
test(findIntersectionValues([2, 4, 6, 8, 10, 2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 1, 3, 5, 7, 9]), [0, 0], 'Test 77');
test(findIntersectionValues([100, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 100]), [10, 10], 'Test 78');
test(findIntersectionValues([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), [5, 5], 'Test 79');
test(findIntersectionValues([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 1], 'Test 80');
test(findIntersectionValues([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), [0, 0], 'Test 81');
test(findIntersectionValues([5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5]), [5, 8], 'Test 82');
test(findIntersectionValues([5, 10, 15, 20, 25], [25, 20, 15, 10, 5]), [5, 5], 'Test 83');
test(findIntersectionValues([1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 1, 2, 3, 4, 5]), [5, 10], 'Test 84');
test(findIntersectionValues([1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10]), [1, 1], 'Test 85');
test(findIntersectionValues([10, 20, 30, 40, 50], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), [5, 5], 'Test 86');
test(findIntersectionValues([1, 2, 3, 4, 5, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), [10, 10], 'Test 87');
test(findIntersectionValues([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), [10, 10], 'Test 88');
test(findIntersectionValues([5, 10, 15, 20, 25], [10, 20, 30, 40, 50]), [2, 2], 'Test 89');
test(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), [5, 5], 'Test 90');
test(findIntersectionValues([100, 1, 50, 75], [50, 75, 100, 1, 50, 75, 100, 1]), [4, 8], 'Test 91');
test(findIntersectionValues([100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 100]), [1, 1], 'Test 92');
test(findIntersectionValues([1, 10, 20, 30, 40], [1, 10, 20, 30, 40]), [5, 5], 'Test 93');
test(findIntersectionValues([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]), [4, 4], 'Test 94');
test(findIntersectionValues([23, 45, 67, 89, 23], [23, 45, 99, 23, 67, 100]), [4, 4], 'Test 95');
test(findIntersectionValues([10, 20, 30, 40, 50], [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]), [5, 5], 'Test 96');
test(findIntersectionValues([10, 20, 30, 40, 50], [15, 25, 35, 45, 55]), [0, 0], 'Test 97');
test(findIntersectionValues([100, 99, 98, 97, 96], [95, 94, 93, 92, 91]), [0, 0], 'Test 98');
test(findIntersectionValues([50, 50, 50, 50, 50], [50, 50, 50, 50, 50]), [5, 5], 'Test 99');
test(findIntersectionValues([10, 20, 30, 40, 50], [50, 40, 30, 20, 10]), [5, 5], 'Test 100');
test(findIntersectionValues([10, 20, 30, 40, 50], [11, 22, 33, 44, 55]), [0, 0], 'Test 101');
test(findIntersectionValues([100, 99, 98, 97, 96, 95], [96, 97, 98, 99, 100]), [5, 5], 'Test 102');

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
