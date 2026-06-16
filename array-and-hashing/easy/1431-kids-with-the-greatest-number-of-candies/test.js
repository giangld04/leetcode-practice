// Test: 1431. Kids With The Greatest Number Of Candies
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { kidsWithCandies } = require("./solution");

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

console.log("\n1431. Kids With The Greatest Number Of Candies\n");

test(kidsWithCandies([4,2,1,1,2], 1), [true, false, false, false, false], 'Test 1');
test(kidsWithCandies([12,1,12], 10), [true, false, true], 'Test 2');
test(kidsWithCandies([50,50,50,50,50], 50), [true, true, true, true, true], 'Test 3');
test(kidsWithCandies([1,2,3,4,5], 2), [false, false, true, true, true], 'Test 4');
test(kidsWithCandies([2,3,5,1,3], 3), [true, true, true, false, true], 'Test 5');
test(kidsWithCandies([1,2,3,4,5], 0), [false, false, false, false, true], 'Test 6');
test(kidsWithCandies([5,8,7], 5), [true, true, true], 'Test 7');
test(kidsWithCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), [false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true], 'Test 8');
test(kidsWithCandies([25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 25), [true, true, true, true, true, true, true, true, true, true], 'Test 9');
test(kidsWithCandies([90, 80, 70, 60, 50, 40, 30, 20, 10, 0], 15), [true, true, false, false, false, false, false, false, false, false], 'Test 10');
test(kidsWithCandies([98, 99, 100, 101, 102], 3), [false, true, true, true, true], 'Test 11');
test(kidsWithCandies([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 10), [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true], 'Test 12');
test(kidsWithCandies([50, 40, 30, 20, 10], 20), [true, true, true, false, false], 'Test 13');
test(kidsWithCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), [false, false, false, false, true, true, true, true, true, true], 'Test 14');
test(kidsWithCandies([5, 5, 5, 5, 5], 5), [true, true, true, true, true], 'Test 15');
test(kidsWithCandies([5, 5, 5, 5, 5], 1), [true, true, true, true, true], 'Test 16');
test(kidsWithCandies([1, 100, 2, 99, 3, 98, 4, 97, 5, 96], 50), [false, true, false, true, false, true, false, true, false, true], 'Test 17');
test(kidsWithCandies([10, 20, 30, 40, 50], 20), [false, false, true, true, true], 'Test 18');
test(kidsWithCandies([90, 90, 90, 90, 90, 90, 90, 90, 90, 90], 10), [true, true, true, true, true, true, true, true, true, true], 'Test 19');
test(kidsWithCandies([25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 24), [true, true, true, true, true, true, true, true, true, true], 'Test 20');
test(kidsWithCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 100], 50), [false, false, false, false, false, false, false, false, false, true], 'Test 21');
test(kidsWithCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), [true, true, true, true, true, true, true, true, true, true], 'Test 22');
test(kidsWithCandies([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 50), [true, true, true, true, true, true, true, true, true, true], 'Test 23');
test(kidsWithCandies([50, 50, 50, 50, 50], 10), [true, true, true, true, true], 'Test 24');
test(kidsWithCandies([90, 80, 70, 60, 50, 40, 30, 20, 10], 10), [true, true, false, false, false, false, false, false, false], 'Test 25');
test(kidsWithCandies([100, 1, 99, 2, 98, 3, 97, 4, 96, 5], 50), [true, false, true, false, true, false, true, false, true, false], 'Test 26');
test(kidsWithCandies([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), [false, false, false, false, true, true, true, true, true, true], 'Test 27');
test(kidsWithCandies([50, 40, 30, 20, 10, 0], 10), [true, true, false, false, false, false], 'Test 28');
test(kidsWithCandies([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 40), [false, false, false, false, false, true, true, true, true, true], 'Test 29');
test(kidsWithCandies([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 25), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 30');
test(kidsWithCandies([23, 45, 12, 67, 34, 89, 10, 56], 20), [false, false, false, false, false, true, false, false], 'Test 31');
test(kidsWithCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 32');
test(kidsWithCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9), [true, true, true, true, true, true, true, true, true, true], 'Test 33');
test(kidsWithCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 100], 99), [true, true, true, true, true, true, true, true, true, true], 'Test 34');
test(kidsWithCandies([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), [true, true, true, true, true, true, false, false, false, false], 'Test 35');
test(kidsWithCandies([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 5), [false, false, false, false, false, false, false, true, true, true], 'Test 36');
test(kidsWithCandies([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 25), [false, false, false, false, true, true, true, true, true, true], 'Test 37');
test(kidsWithCandies([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), [false, false, false, false, true, true, true, true, true, true], 'Test 38');
test(kidsWithCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 5), [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true], 'Test 39');
test(kidsWithCandies([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80], 10), [true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false], 'Test 40');
test(kidsWithCandies([10, 20, 30, 40, 50], 15), [false, false, false, true, true], 'Test 41');
test(kidsWithCandies([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 25), [true, true, true, true, true, true, true, true, true, true], 'Test 42');
test(kidsWithCandies([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 255), [false, false, false, false, false, false, false, false, false, true], 'Test 43');
test(kidsWithCandies([90, 80, 70, 60, 50, 40, 30, 20, 10], 15), [true, true, false, false, false, false, false, false, false], 'Test 44');
test(kidsWithCandies([30, 40, 20, 50, 10], 10), [false, true, false, true, false], 'Test 45');
test(kidsWithCandies([1, 50, 25, 75, 35], 25), [false, true, false, true, false], 'Test 46');
test(kidsWithCandies([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5], 7), [true, false, true, false, true, true, true, true, true, true, true, true, true, true, true], 'Test 47');
test(kidsWithCandies([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), [true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 'Test 48');
test(kidsWithCandies([100, 1, 2, 3, 4, 5, 6, 7, 8, 9], 50), [true, false, false, false, false, false, false, false, false, false], 'Test 49');
test(kidsWithCandies([50, 20, 20, 10, 30], 20), [true, false, false, false, true], 'Test 50');
test(kidsWithCandies([10, 20, 30, 40, 50], 25), [false, false, true, true, true], 'Test 51');
test(kidsWithCandies([50, 40, 30, 20, 10], 10), [true, true, false, false, false], 'Test 52');
test(kidsWithCandies([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 80), [false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true], 'Test 53');
test(kidsWithCandies([50, 25, 75, 25, 50, 100, 75, 50, 25, 75], 25), [false, false, true, false, false, true, true, false, false, true], 'Test 54');
test(kidsWithCandies([90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 9), [false, true, true, true, true, true, true, true, true, true, true], 'Test 55');
test(kidsWithCandies([1, 100, 1, 100, 1, 100, 1, 100, 1, 100], 99), [true, true, true, true, true, true, true, true, true, true], 'Test 56');
test(kidsWithCandies([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 1), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 57');
test(kidsWithCandies([50, 40, 30, 20, 10], 25), [true, true, true, false, false], 'Test 58');
test(kidsWithCandies([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 25), [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 59');
test(kidsWithCandies([50, 10, 20, 30, 40], 20), [true, false, false, true, true], 'Test 60');
test(kidsWithCandies([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 5), [true, true, true, true, true, true, false, false, false, false], 'Test 61');
test(kidsWithCandies([99, 1, 98, 2, 97, 3, 96, 4, 95, 5], 50), [true, false, true, false, true, false, true, false, true, false], 'Test 62');
test(kidsWithCandies([80, 80, 80, 80, 80], 20), [true, true, true, true, true], 'Test 63');
test(kidsWithCandies([100, 1, 2, 3, 4, 5, 6, 7, 8, 9], 90), [true, false, false, false, false, false, false, false, false, false], 'Test 64');
test(kidsWithCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), [false, false, false, false, false, true, true, true, true, true], 'Test 65');
test(kidsWithCandies([8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 0), [true, true, true, true, true, true, true, true, true, true], 'Test 66');
test(kidsWithCandies([50, 40, 30, 20, 10], 30), [true, true, true, true, false], 'Test 67');
test(kidsWithCandies([100, 100, 100, 100, 100], 50), [true, true, true, true, true], 'Test 68');
test(kidsWithCandies([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 15), [false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true], 'Test 69');
test(kidsWithCandies([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), [false, false, false, false, false, false, false, false, true, true], 'Test 70');
test(kidsWithCandies([3, 3, 3, 3, 3], 3), [true, true, true, true, true], 'Test 71');
test(kidsWithCandies([7, 5, 9, 10, 2], 5), [true, true, true, true, false], 'Test 72');
test(kidsWithCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), [true, true, true, true, true, true, true, true, true, true], 'Test 73');
test(kidsWithCandies([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 50), [false, false, false, false, true, true, true, true, true, true], 'Test 74');
test(kidsWithCandies([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 49), [true, true, true, true, true, true, true, true, true, true], 'Test 75');
test(kidsWithCandies([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 45), [false, false, false, false, false, true, true, true, true, true], 'Test 76');
test(kidsWithCandies([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1), [true, true, false, false, false, false, false, false, false, false], 'Test 77');
test(kidsWithCandies([20, 15, 20, 10, 30], 10), [true, false, true, false, true], 'Test 78');
test(kidsWithCandies([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 10), [true, true, true, true, true, true, true, true, true, true], 'Test 79');
test(kidsWithCandies([10, 10, 10, 10, 10], 1), [true, true, true, true, true], 'Test 80');
test(kidsWithCandies([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 8), [false, false, false, false, false, true, true, true, true, true], 'Test 81');

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
