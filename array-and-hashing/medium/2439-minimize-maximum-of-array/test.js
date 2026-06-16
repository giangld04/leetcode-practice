// Test: 2439. Minimize Maximum Of Array
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { minimizeArrayValue } = require("./solution");

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

console.log("\n2439. Minimize Maximum Of Array\n");

test(minimizeArrayValue([1,9,1,9,1]), 5, 'Test 1');
test(minimizeArrayValue([1,1000000000]), 500000001, 'Test 2');
test(minimizeArrayValue([1000000000,1000000000,1000000000,1000000000,1000000000]), 1000000000, 'Test 3');
test(minimizeArrayValue([9,7,5,3,1]), 9, 'Test 4');
test(minimizeArrayValue([10,9,8,7,6,5,4,3,2,1]), 10, 'Test 5');
test(minimizeArrayValue([1000000000,1000000000]), 1000000000, 'Test 6');
test(minimizeArrayValue([5,5,5,5,5]), 5, 'Test 7');
test(minimizeArrayValue([0,0,0,0,0]), 0, 'Test 8');
test(minimizeArrayValue([1,2,3,4,5]), 3, 'Test 9');
test(minimizeArrayValue([1,1000000000,1,1000000000,1]), 500000001, 'Test 10');
test(minimizeArrayValue([1,2,1000000000,2,1]), 333333335, 'Test 11');
test(minimizeArrayValue([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 12');
test(minimizeArrayValue([1000000000,0,0,0,0]), 1000000000, 'Test 13');
test(minimizeArrayValue([5,4,3,2,1]), 5, 'Test 14');
test(minimizeArrayValue([1,1000000000,1,1,1]), 500000001, 'Test 15');
test(minimizeArrayValue([1,1000000000,1]), 500000001, 'Test 16');
test(minimizeArrayValue([10,1]), 10, 'Test 17');
test(minimizeArrayValue([3,7,1,6]), 5, 'Test 18');
test(minimizeArrayValue([1000000000,1]), 1000000000, 'Test 19');
test(minimizeArrayValue([500,450,400,350,300,250,200,150,100,50]), 500, 'Test 20');
test(minimizeArrayValue([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 5, 'Test 21');
test(minimizeArrayValue([1000000000,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1000000000, 'Test 22');
test(minimizeArrayValue([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 550, 'Test 23');
test(minimizeArrayValue([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 103, 'Test 24');
test(minimizeArrayValue([1,2,3,4,5,6,7,8,9,10]), 6, 'Test 25');
test(minimizeArrayValue([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 26');
test(minimizeArrayValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 27');
test(minimizeArrayValue([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 20, 'Test 28');
test(minimizeArrayValue([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 29');
test(minimizeArrayValue([10,20,30,40,50]), 30, 'Test 30');
test(minimizeArrayValue([1, 999999999, 2, 999999998, 3, 999999997, 4, 999999996, 5]), 500000000, 'Test 31');
test(minimizeArrayValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 32');
test(minimizeArrayValue([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1000000000]), 47619048, 'Test 33');
test(minimizeArrayValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 34');
test(minimizeArrayValue([1000000000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 1000000000, 'Test 35');
test(minimizeArrayValue([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 25, 'Test 36');
test(minimizeArrayValue([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90]), 100, 'Test 37');
test(minimizeArrayValue([1,2,3,4,5,6,7,8,9,1000000000]), 100000005, 'Test 38');
test(minimizeArrayValue([10, 10, 10, 10, 10, 10, 10, 10, 10, 1]), 10, 'Test 39');
test(minimizeArrayValue([1,2,2,3,3,3,4,4,4,4]), 3, 'Test 40');
test(minimizeArrayValue([1000000000,2000000000,3000000000,4000000000,5000000000]), 3000000000, 'Test 41');
test(minimizeArrayValue([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 42');
test(minimizeArrayValue([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 43');
test(minimizeArrayValue([1000000000, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1000000000, 'Test 44');
test(minimizeArrayValue([5,3,8,2,9,1]), 6, 'Test 45');
test(minimizeArrayValue([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 46');
test(minimizeArrayValue([1, 2, 3, 4, 5, 100, 6, 7, 8, 9, 10]), 20, 'Test 47');
test(minimizeArrayValue([1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 6, 'Test 48');
test(minimizeArrayValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1000000000]), 47619049, 'Test 49');
test(minimizeArrayValue([0,0,0,0,0,1000000000]), 166666667, 'Test 50');
test(minimizeArrayValue([1000000000, 1000000000, 1000000000, 1000000000]), 1000000000, 'Test 51');
test(minimizeArrayValue([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 28, 'Test 52');
test(minimizeArrayValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000]), 100000001, 'Test 53');
test(minimizeArrayValue([999999999,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 999999999, 'Test 54');
test(minimizeArrayValue([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991]), 1000000000, 'Test 55');
test(minimizeArrayValue([20, 18, 16, 14, 12, 10, 8, 6, 4, 2]), 20, 'Test 56');
test(minimizeArrayValue([100,50,10,5,1,0,0,0,0,0]), 100, 'Test 57');
test(minimizeArrayValue([5000000000,4000000000,3000000000,2000000000,1000000000]), 5000000000, 'Test 58');
test(minimizeArrayValue([0,1000000000,0,0,0,0,0,0,0,0]), 500000000, 'Test 59');
test(minimizeArrayValue([10,1,2,3,4,5,6,7,8,9]), 10, 'Test 60');
test(minimizeArrayValue([5,5,5,5,5,5,5,5,5,5]), 5, 'Test 61');
test(minimizeArrayValue([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 62');
test(minimizeArrayValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 11, 'Test 63');
test(minimizeArrayValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000000000]), 50000000, 'Test 64');
test(minimizeArrayValue([19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 19, 'Test 65');
test(minimizeArrayValue([100, 10, 1, 1, 1, 1, 1, 1, 1, 1]), 100, 'Test 66');
test(minimizeArrayValue([1000000000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1000000000, 'Test 67');
test(minimizeArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 16, 'Test 68');
test(minimizeArrayValue([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 69');
test(minimizeArrayValue([0,1000000000,0,1000000000,0,1000000000,0]), 500000000, 'Test 70');
test(minimizeArrayValue([10,10,10,10,10,10,10,10,10,10]), 10, 'Test 71');
test(minimizeArrayValue([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 20, 'Test 72');
test(minimizeArrayValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 73');
test(minimizeArrayValue([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 111111112, 'Test 74');
test(minimizeArrayValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 10, 'Test 75');
test(minimizeArrayValue([1000000000, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1000000000, 'Test 76');
test(minimizeArrayValue([50, 40, 30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 50, 'Test 77');
test(minimizeArrayValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 13, 'Test 78');
test(minimizeArrayValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000]), 50000001, 'Test 79');
test(minimizeArrayValue([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 80');
test(minimizeArrayValue([5, 4, 3, 2, 1]), 5, 'Test 81');
test(minimizeArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 6, 'Test 82');
test(minimizeArrayValue([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]), 1000, 'Test 83');
test(minimizeArrayValue([1,999999999,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 500000000, 'Test 84');
test(minimizeArrayValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100]), 6, 'Test 85');
test(minimizeArrayValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 105, 'Test 86');
test(minimizeArrayValue([10, 20, 30, 40, 50]), 30, 'Test 87');
test(minimizeArrayValue([50,100,150,200,250,300,350,400,450,500]), 275, 'Test 88');
test(minimizeArrayValue([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 11, 'Test 89');
test(minimizeArrayValue([1,2,100,4,5,6,7,8,9,10]), 35, 'Test 90');
test(minimizeArrayValue([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10, 'Test 91');
test(minimizeArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 11, 'Test 92');
test(minimizeArrayValue([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1]), 1000000000, 'Test 93');
test(minimizeArrayValue([100,90,80,70,60,50,40,30,20,10]), 100, 'Test 94');
test(minimizeArrayValue([100000000, 90000000, 80000000, 70000000, 60000000, 50000000, 40000000, 30000000, 20000000, 10000000]), 100000000, 'Test 95');
test(minimizeArrayValue([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 6, 'Test 96');
test(minimizeArrayValue([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 100, 'Test 97');
test(minimizeArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 6, 'Test 98');
test(minimizeArrayValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 1000000000]), 100000000, 'Test 99');
test(minimizeArrayValue([333333333, 333333333, 333333333, 333333333, 333333333, 333333333, 333333333, 333333333, 333333333, 333333333]), 333333333, 'Test 100');
test(minimizeArrayValue([100, 1, 200, 2, 300, 3, 400, 4, 500, 5]), 168, 'Test 101');
test(minimizeArrayValue([1000000000,1,1,1,1,1,1,1,1,1]), 1000000000, 'Test 102');
test(minimizeArrayValue([999999999, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 999999999, 'Test 103');
test(minimizeArrayValue([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1]), 1000, 'Test 104');
test(minimizeArrayValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 55, 'Test 105');
test(minimizeArrayValue([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 30, 'Test 106');
test(minimizeArrayValue([1000000000,0,0,0,0,0,0,0,0,0]), 1000000000, 'Test 107');
test(minimizeArrayValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000]), 31250001, 'Test 108');
test(minimizeArrayValue([5, 3, 8, 12, 2]), 7, 'Test 109');
test(minimizeArrayValue([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 110');
test(minimizeArrayValue([500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500]), 500, 'Test 111');
test(minimizeArrayValue([1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10]), 4, 'Test 112');
test(minimizeArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 1000]), 105, 'Test 113');
test(minimizeArrayValue([1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10]), 6, 'Test 114');

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
