// Test: 274. H Index
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { hIndex } = require("./solution");

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

console.log("\n274. H Index\n");

test(hIndex([10,8,5,4,3]), 4, 'Test 1');
test(hIndex([1]), 1, 'Test 2');
test(hIndex([3,0,6,1,5]), 3, 'Test 3');
test(hIndex([0,1,2,3,4]), 2, 'Test 4');
test(hIndex([1000,999,998,997,996]), 5, 'Test 5');
test(hIndex([1,2,3,4,5,6,7,8,9,10]), 5, 'Test 6');
test(hIndex([0,0,0,0,0]), 0, 'Test 7');
test(hIndex([8,8,8,8,8,8,8]), 7, 'Test 8');
test(hIndex([10,10,10,10]), 4, 'Test 9');
test(hIndex([1,3,1]), 1, 'Test 10');
test(hIndex([100,0,1,2]), 2, 'Test 11');
test(hIndex([11,15,0,6,9,12]), 5, 'Test 12');
test(hIndex([0,1,2,3,4,5]), 3, 'Test 13');
test(hIndex([11,15]), 2, 'Test 14');
test(hIndex([1,2,3,4,5,6]), 3, 'Test 15');
test(hIndex([6,5,4,3,2,1]), 3, 'Test 16');
test(hIndex([4,4,4,4,3]), 4, 'Test 17');
test(hIndex([10,9,8,7,6,5,4,3,2,1]), 5, 'Test 18');
test(hIndex([0]), 0, 'Test 19');
test(hIndex([1,2,3,4,5]), 3, 'Test 20');
test(hIndex([0,0,0,0]), 0, 'Test 21');
test(hIndex([1000,1000,1000]), 3, 'Test 22');
test(hIndex([5,5,5,5,5]), 5, 'Test 23');
test(hIndex([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 24');
test(hIndex([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 25');
test(hIndex([34, 23, 12, 45, 67, 89, 100, 99, 88, 77, 66, 55, 44, 33, 22, 11, 0]), 14, 'Test 26');
test(hIndex([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 7, 'Test 27');
test(hIndex([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 10, 'Test 28');
test(hIndex([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 1, 'Test 29');
test(hIndex([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 30');
test(hIndex([10,8,5,4,3,1,0]), 4, 'Test 31');
test(hIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 6, 'Test 32');
test(hIndex([1, 1, 1, 1, 1, 1, 1, 1, 1, 1000]), 1, 'Test 33');
test(hIndex([999,998,997,996,995,994,993,992,991,990,989,988,987,986,985,984,983,982,981,980]), 20, 'Test 34');
test(hIndex([100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 11, 'Test 35');
test(hIndex([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 14, 'Test 36');
test(hIndex([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 37');
test(hIndex([200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 19, 'Test 38');
test(hIndex([0, 1000, 2000, 3000, 4000, 5000]), 5, 'Test 39');
test(hIndex([15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]), 15, 'Test 40');
test(hIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 10, 'Test 41');
test(hIndex([0,0,0,0,0,0,0,0,0,1000]), 1, 'Test 42');
test(hIndex([1000,0,1000,0,1000,0,1000,0,1000,0,1000,0,1000,0,1000,0,1000,0,1000,0]), 10, 'Test 43');
test(hIndex([10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 9, 'Test 44');
test(hIndex([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 9, 'Test 45');
test(hIndex([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000]), 1, 'Test 46');
test(hIndex([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 19, 'Test 47');
test(hIndex([10,9,8,7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0]), 5, 'Test 48');
test(hIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10, 'Test 49');
test(hIndex([0, 0, 1, 1, 2, 2, 3, 3, 4, 4]), 3, 'Test 50');
test(hIndex([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 3, 'Test 51');
test(hIndex([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]), 2, 'Test 52');
test(hIndex([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12]), 6, 'Test 53');
test(hIndex([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 5, 'Test 54');
test(hIndex([250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250]), 31, 'Test 55');
test(hIndex([0, 1000, 2, 500, 3, 750, 4, 250, 5, 125]), 5, 'Test 56');
test(hIndex([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 57');
test(hIndex([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 58');
test(hIndex([25, 20, 15, 10, 5, 0, 0, 0, 0, 0]), 5, 'Test 59');
test(hIndex([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 10, 'Test 60');
test(hIndex([10, 8, 5, 4, 3, 2, 1, 0]), 4, 'Test 61');
test(hIndex([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 62');
test(hIndex([0, 1000, 0, 1000, 0, 1000, 0, 1000, 0, 1000]), 5, 'Test 63');
test(hIndex([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 64');
test(hIndex([500, 250, 125, 62, 31, 15, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 7, 'Test 65');
test(hIndex([1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 3, 'Test 66');
test(hIndex([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93, 9, 92, 10, 91]), 10, 'Test 67');
test(hIndex([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 68');
test(hIndex([100, 50, 25, 10, 5, 2]), 5, 'Test 69');
test(hIndex([50,40,30,20,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 5, 'Test 70');
test(hIndex([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 71');
test(hIndex([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]), 5, 'Test 72');
test(hIndex([1, 0, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 15, 'Test 73');
test(hIndex([150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 14, 'Test 74');
test(hIndex([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991]), 10, 'Test 75');
test(hIndex([100, 50, 25, 12, 6, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 5, 'Test 76');
test(hIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 8, 'Test 77');
test(hIndex([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 9, 'Test 78');
test(hIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 15, 'Test 79');

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
