// Test: 907. Sum Of Subarray Minimums
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { sumSubarrayMins } = require("./solution");

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

console.log("\n907. Sum Of Subarray Minimums\n");

test(sumSubarrayMins([5,4,3,2,1]), 35, 'Test 1');
test(sumSubarrayMins([9,8,7,6,5,4,3,2,1,0]), 165, 'Test 2');
test(sumSubarrayMins([1, 3, 2, 4, 5, 7, 6, 8, 9]), 157, 'Test 3');
test(sumSubarrayMins([9,7,5,3,1]), 55, 'Test 4');
test(sumSubarrayMins([10,20,30,40,50]), 350, 'Test 5');
test(sumSubarrayMins([1,2,2,1]), 13, 'Test 6');
test(sumSubarrayMins([3,1,2,4,3]), 27, 'Test 7');
test(sumSubarrayMins([3,1,2,4,5]), 30, 'Test 8');
test(sumSubarrayMins([11,81,94,43,3]), 444, 'Test 9');
test(sumSubarrayMins([1]), 1, 'Test 10');
test(sumSubarrayMins([1,1,1,1,1]), 15, 'Test 11');
test(sumSubarrayMins([10,9,8,7,6,5,4,3,2,1]), 220, 'Test 12');
test(sumSubarrayMins([1,3,5,2,4,6]), 49, 'Test 13');
test(sumSubarrayMins([2,2,2,2,2,2,2,2,2,2]), 110, 'Test 14');
test(sumSubarrayMins([10000,9000,8000,7000,6000]), 110000, 'Test 15');
test(sumSubarrayMins([1,2,3,4,5]), 35, 'Test 16');
test(sumSubarrayMins([1,3,5,7,9,11,13,15,17,19]), 385, 'Test 17');
test(sumSubarrayMins([3,1,2,4]), 17, 'Test 18');
test(sumSubarrayMins([3,3,3,3,3]), 45, 'Test 19');
test(sumSubarrayMins([10000, 20000, 30000, 40000, 50000]), 350000, 'Test 20');
test(sumSubarrayMins([1,3,5,7,9]), 55, 'Test 21');
test(sumSubarrayMins([30000, 1, 30000, 2, 30000]), 90016, 'Test 22');
test(sumSubarrayMins([3,2,1,4,5]), 29, 'Test 23');
test(sumSubarrayMins([1,2,1,2,1]), 17, 'Test 24');
test(sumSubarrayMins([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 275, 'Test 25');
test(sumSubarrayMins([10, 20, 10, 30, 10, 40, 10, 50, 10, 60]), 700, 'Test 26');
test(sumSubarrayMins([1, 3, 2, 4, 3, 5, 4, 6, 5, 7]), 155, 'Test 27');
test(sumSubarrayMins([3, 2, 1, 5, 4]), 29, 'Test 28');
test(sumSubarrayMins([3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3]), 485, 'Test 29');
test(sumSubarrayMins([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 680, 'Test 30');
test(sumSubarrayMins([30000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30230, 'Test 31');
test(sumSubarrayMins([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]), 550000, 'Test 32');
test(sumSubarrayMins([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 94, 'Test 33');
test(sumSubarrayMins([5, 3, 1, 2, 4, 6, 7, 8, 9, 10]), 183, 'Test 34');
test(sumSubarrayMins([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 210, 'Test 35');
test(sumSubarrayMins([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 305, 'Test 36');
test(sumSubarrayMins([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1540, 'Test 37');
test(sumSubarrayMins([3, 2, 1, 4, 5, 6, 7, 8, 9, 10]), 199, 'Test 38');
test(sumSubarrayMins([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 4960, 'Test 39');
test(sumSubarrayMins([5, 4, 3, 2, 1]), 35, 'Test 40');
test(sumSubarrayMins([30000, 29999, 29998, 29997, 29996, 29995, 29994, 29993, 29992, 29991]), 1649670, 'Test 41');
test(sumSubarrayMins([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 22100, 'Test 42');
test(sumSubarrayMins([10, 20, 10, 30, 10, 40, 10, 50, 10]), 550, 'Test 43');
test(sumSubarrayMins([5, 3, 8, 6, 2, 7, 4, 1, 9, 10]), 140, 'Test 44');
test(sumSubarrayMins([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1, 2, 3, 4, 5]), 2285, 'Test 45');
test(sumSubarrayMins([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 715, 'Test 46');
test(sumSubarrayMins([5, 4, 3, 2, 1, 0]), 35, 'Test 47');
test(sumSubarrayMins([100000, 100000, 100000, 100000, 100000]), 1500000, 'Test 48');
test(sumSubarrayMins([1, 3, 2, 4, 5, 4, 3, 2, 1]), 91, 'Test 49');
test(sumSubarrayMins([1, 1, 1, 1, 1, 1, 1, 1]), 36, 'Test 50');
test(sumSubarrayMins([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 95, 'Test 51');
test(sumSubarrayMins([9, 7, 3, 1, 6, 2, 8, 4, 5]), 107, 'Test 52');
test(sumSubarrayMins([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 8116, 'Test 53');
test(sumSubarrayMins([1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), 204, 'Test 54');
test(sumSubarrayMins([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), 240, 'Test 55');
test(sumSubarrayMins([2, 3, 1, 5, 4, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15, 18, 17, 20, 19, 22, 21, 24, 23, 26, 25, 28, 27, 30, 29]), 4561, 'Test 56');
test(sumSubarrayMins([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 55, 'Test 57');
test(sumSubarrayMins([2, 3, 1, 1, 3, 2, 2, 1, 3, 1]), 68, 'Test 58');
test(sumSubarrayMins([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 2200, 'Test 59');
test(sumSubarrayMins([5, 3, 7, 1, 6, 8, 2, 4, 9, 10]), 136, 'Test 60');
test(sumSubarrayMins([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 220, 'Test 61');
test(sumSubarrayMins([1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 100, 'Test 62');
test(sumSubarrayMins([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 165, 'Test 63');
test(sumSubarrayMins([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 1555, 'Test 64');
test(sumSubarrayMins([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 540, 'Test 65');
test(sumSubarrayMins([2, 4, 2, 6, 2, 8, 2, 10]), 92, 'Test 66');
test(sumSubarrayMins([7, 6, 5, 4, 3, 2, 1]), 84, 'Test 67');
test(sumSubarrayMins([1, 3, 5, 2, 4, 6, 7, 8, 9, 10]), 197, 'Test 68');
test(sumSubarrayMins([3, 5, 4, 2, 1, 6, 7, 8, 9, 10]), 170, 'Test 69');
test(sumSubarrayMins([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1540, 'Test 70');
test(sumSubarrayMins([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]), 2200000, 'Test 71');
test(sumSubarrayMins([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 6800, 'Test 72');
test(sumSubarrayMins([1, 3, 2, 4, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 516, 'Test 73');
test(sumSubarrayMins([10000, 1, 10000, 1, 10000, 1, 10000, 1, 10000, 1]), 50050, 'Test 74');
test(sumSubarrayMins([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 330, 'Test 75');
test(sumSubarrayMins([29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 1240, 'Test 76');
test(sumSubarrayMins([1, 3, 2, 3, 1, 2, 1, 3, 2, 1]), 68, 'Test 77');
test(sumSubarrayMins([5, 3, 8, 6, 2, 7, 4, 1]), 96, 'Test 78');
test(sumSubarrayMins([30000, 15000, 10000, 5000, 1, 5000, 10000, 15000, 30000]), 220025, 'Test 79');
test(sumSubarrayMins([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 170, 'Test 80');
test(sumSubarrayMins([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 1240, 'Test 81');
test(sumSubarrayMins([100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300]), 9400, 'Test 82');
test(sumSubarrayMins([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 125, 'Test 83');
test(sumSubarrayMins([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 2870, 'Test 84');
test(sumSubarrayMins([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 131, 'Test 85');
test(sumSubarrayMins([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 22000, 'Test 86');
test(sumSubarrayMins([30000, 29999, 29998, 29997, 29996, 29995]), 629930, 'Test 87');
test(sumSubarrayMins([30000, 1, 30000, 1, 30000, 1, 30000, 1, 30000, 1]), 150050, 'Test 88');
test(sumSubarrayMins([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 680, 'Test 89');
test(sumSubarrayMins([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 600, 'Test 90');
test(sumSubarrayMins([100000, 1, 200000, 2, 300000, 3, 400000, 4]), 1000060, 'Test 91');
test(sumSubarrayMins([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 550, 'Test 92');
test(sumSubarrayMins([15000, 10000, 20000, 5000, 25000, 22500, 17500, 27500, 30000, 12500]), 602500, 'Test 93');

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
