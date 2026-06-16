// Test: 2735. Collecting Chocolates
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { minCost } = require("./solution");

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

console.log("\n2735. Collecting Chocolates\n");

test(minCost([10,20,30,40,50], 10), 90, 'Test 1');
test(minCost([10,20,30,40], 10), 70, 'Test 2');
test(minCost([1,1,1,1,1], 1), 5, 'Test 3');
test(minCost([7,7,7,7,7,7], 2), 42, 'Test 4');
test(minCost([10,20,30,40,50], 1), 54, 'Test 5');
test(minCost([3,1,2], 3), 6, 'Test 6');
test(minCost([100,200,300], 50), 400, 'Test 7');
test(minCost([1,2,3], 4), 6, 'Test 8');
test(minCost([1,1,1,1,1,1,1,1,1,1], 1), 10, 'Test 9');
test(minCost([1000000000,1000000000,1000000000], 1000000000), 3000000000, 'Test 10');
test(minCost([1], 100), 1, 'Test 11');
test(minCost([5,5,5,5], 10), 20, 'Test 12');
test(minCost([1,3,5,7,9], 2), 13, 'Test 13');
test(minCost([20,1,15], 5), 13, 'Test 14');
test(minCost([9,8,7,6,5,4,3,2,1], 10), 45, 'Test 15');
test(minCost([5,5,5,5], 1), 20, 'Test 16');
test(minCost([10,20,30,40], 5), 55, 'Test 17');
test(minCost([2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 1), 21, 'Test 18');
test(minCost([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 30), 540, 'Test 19');
test(minCost([100, 200, 300, 400, 500], 500), 1500, 'Test 20');
test(minCost([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 10), 190, 'Test 21');
test(minCost([9, 8, 7, 6, 5, 4, 3, 2, 1], 3), 30, 'Test 22');
test(minCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 39, 'Test 23');
test(minCost([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 20, 'Test 24');
test(minCost([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2), 27, 'Test 25');
test(minCost([5,8,6,3,4,7,2,9,1], 3), 26, 'Test 26');
test(minCost([8, 6, 4, 2, 0, 2, 4, 6, 8], 1), 8, 'Test 27');
test(minCost([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31], 10), 100, 'Test 28');
test(minCost([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 10, 'Test 29');
test(minCost([7, 6, 5, 4, 3, 2, 1, 8, 9, 10], 10), 55, 'Test 30');
test(minCost([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3], 7), 52, 'Test 31');
test(minCost([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 2), 70, 'Test 32');
test(minCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5), 75, 'Test 33');
test(minCost([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 20), 200, 'Test 34');
test(minCost([1000000000, 1000000000, 1000000000], 1000000000), 3000000000, 'Test 35');
test(minCost([5, 4, 3, 2, 1, 10, 9, 8, 7, 6], 15), 55, 'Test 36');
test(minCost([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 28, 'Test 37');
test(minCost([1,1,1,1,1,1,1,1,1,1], 100), 10, 'Test 38');
test(minCost([10, 20, 30, 40, 50], 3), 62, 'Test 39');
test(minCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 45, 'Test 40');
test(minCost([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 10, 'Test 41');
test(minCost([1,1000000000,1,1000000000,1], 500000000), 500000005, 'Test 42');
test(minCost([10, 20, 30, 40, 50], 15), 105, 'Test 43');
test(minCost([1000000000, 1, 1000000000, 1, 1000000000], 500000000), 1000000005, 'Test 44');
test(minCost([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 105, 'Test 45');
test(minCost([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 5), 96, 'Test 46');
test(minCost([7, 8, 9, 10, 11, 7, 8, 9, 10, 11], 2), 78, 'Test 47');
test(minCost([100, 200, 150, 100, 50], 75), 500, 'Test 48');
test(minCost([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10], 5), 90, 'Test 49');
test(minCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), 92, 'Test 50');
test(minCost([3, 1, 2, 1, 3, 1, 2, 1, 3, 1], 1), 11, 'Test 51');
test(minCost([1, 10, 100, 1000, 10000], 1000), 2112, 'Test 52');
test(minCost([1,2,3,4,5,6,7,8,9,10], 3), 34, 'Test 53');
test(minCost([1000000000, 1, 1000000000, 1, 1000000000, 1, 1000000000, 1, 1000000000, 1], 100000000), 100000010, 'Test 54');
test(minCost([9,8,7,6,5,4,3,2,1], 1), 17, 'Test 55');
test(minCost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 2), 24, 'Test 56');
test(minCost([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 25), 525, 'Test 57');
test(minCost([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 16, 17, 18, 19, 20], 10), 165, 'Test 58');
test(minCost([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000], 1), 10000, 'Test 59');
test(minCost([1,3,2,5,4,7,6,9,8], 2), 23, 'Test 60');
test(minCost([5, 9, 3, 8, 2, 7, 4, 6, 1], 10), 35, 'Test 61');
test(minCost([3,1,4,1,5,9,2,6,5,3,5], 7), 34, 'Test 62');
test(minCost([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 25), 305, 'Test 63');
test(minCost([29, 10, 6, 3, 5, 30, 50, 100, 3, 8, 9, 12, 15, 16, 20, 23, 25, 28, 30, 32], 15), 220, 'Test 64');
test(minCost([1, 3, 2, 4, 5], 10), 15, 'Test 65');
test(minCost([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 20, 'Test 66');
test(minCost([7, 8, 9, 1, 2, 3, 4, 5, 6], 3), 30, 'Test 67');
test(minCost([10,20,30,40,50,60,70,80,90,100], 10), 190, 'Test 68');
test(minCost([9, 8, 7, 6, 5, 4, 3, 2, 1], 1), 17, 'Test 69');
test(minCost([1000000000, 1000000000, 1000000000, 1000000000], 500000000), 4000000000, 'Test 70');
test(minCost([7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7], 8), 56, 'Test 71');
test(minCost([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500), 4500, 'Test 72');
test(minCost([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 15), 55, 'Test 73');
test(minCost([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 7), 248, 'Test 74');
test(minCost([100,90,80,70,60,50,40,30,20,10], 5), 145, 'Test 75');
test(minCost([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 7), 34, 'Test 76');
test(minCost([10,20,30,40,50], 7), 78, 'Test 77');
test(minCost([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 5), 145, 'Test 78');
test(minCost([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5), 51, 'Test 79');
test(minCost([5, 4, 3, 2, 1], 1), 9, 'Test 80');
test(minCost([1000000000, 1000000000, 1000000000, 1000000000], 1000000000), 4000000000, 'Test 81');
test(minCost([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 10), 135, 'Test 82');
test(minCost([9, 7, 5, 3, 1, 2, 4, 6, 8, 0], 4), 21, 'Test 83');
test(minCost([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 80, 'Test 84');
test(minCost([1000000000,1,1000000000,1,1000000000,1,1000000000,1,1000000000,1], 100000000), 100000010, 'Test 85');
test(minCost([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 3), 140, 'Test 86');
test(minCost([9, 8, 7, 6, 5, 4, 3, 2, 1], 10), 45, 'Test 87');
test(minCost([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50), 1450, 'Test 88');
test(minCost([10,9,8,7,6,5,4,3,2,1], 2), 27, 'Test 89');
test(minCost([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 100), 100, 'Test 90');
test(minCost([3, 2, 1, 4, 5], 2), 12, 'Test 91');
test(minCost([10, 1, 10, 1, 10], 5), 15, 'Test 92');
test(minCost([10, 10, 1, 10, 10], 2), 13, 'Test 93');
test(minCost([50, 40, 30, 20, 10, 100, 90, 80, 70, 60], 15), 230, 'Test 94');
test(minCost([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 20), 231, 'Test 95');
test(minCost([1, 10, 100, 1000, 10000, 100000], 50000), 61112, 'Test 96');
test(minCost([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100), 1900, 'Test 97');
test(minCost([3,1,2,4,5,6,7,8,9,10], 1), 19, 'Test 98');
test(minCost([1000000000, 1000000000, 1000000000], 500000000), 3000000000, 'Test 99');
test(minCost([10, 20, 30, 40, 50], 5), 70, 'Test 100');

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
