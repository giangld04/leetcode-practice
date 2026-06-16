// Test: 2971. Find Polygon With The Largest Perimeter
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { largestPerimeter } = require("./solution");

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

console.log("\n2971. Find Polygon With The Largest Perimeter\n");

test(largestPerimeter([10,5,1,12,3,7]), 38, 'Test 1');
test(largestPerimeter([5,5,50]), -1, 'Test 2');
test(largestPerimeter([5,5,5]), 15, 'Test 3');
test(largestPerimeter([10,5,25,25,10]), 75, 'Test 4');
test(largestPerimeter([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 20, 'Test 5');
test(largestPerimeter([1,2,3,4,5,6]), 21, 'Test 6');
test(largestPerimeter([3,6,2,3,5,4,1]), 24, 'Test 7');
test(largestPerimeter([3,6,2,3,5,10]), 29, 'Test 8');
test(largestPerimeter([10,20,30,40,50]), 150, 'Test 9');
test(largestPerimeter([1000000000, 1000000000, 1000000000]), 3000000000, 'Test 10');
test(largestPerimeter([1,1,1,1,1,1]), 6, 'Test 11');
test(largestPerimeter([1000000000,1000000000,1000000000]), 3000000000, 'Test 12');
test(largestPerimeter([3,3,3,3,3,3,3,3,3,3]), 30, 'Test 13');
test(largestPerimeter([1,12,1,2,5,50,3]), 12, 'Test 14');
test(largestPerimeter([3,6,2,3,5,4]), 23, 'Test 15');
test(largestPerimeter([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 16');
test(largestPerimeter([10,5,1,1,1,1]), 4, 'Test 17');
test(largestPerimeter([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 31, 'Test 18');
test(largestPerimeter([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 1050, 'Test 19');
test(largestPerimeter([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 5500, 'Test 20');
test(largestPerimeter([1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 211, 'Test 21');
test(largestPerimeter([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]), 21000, 'Test 22');
test(largestPerimeter([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]), 376, 'Test 23');
test(largestPerimeter([9, 8, 7, 6, 5, 4, 3, 2, 1]), 45, 'Test 24');
test(largestPerimeter([3, 6, 12, 24, 48, 96, 192, 384, 768, 1536, 3072, 6144, 12288, 24576, 49152, 98304, 196608, 393216, 786432, 1572864]), -1, 'Test 25');
test(largestPerimeter([1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 5000000000, 'Test 26');
test(largestPerimeter([1000000000, 900000000, 800000000, 700000000, 600000000, 500000000, 400000000, 300000000, 200000000, 100000000]), 5500000000, 'Test 27');
test(largestPerimeter([1000000000, 500000000, 300000000, 200000000, 100000000]), 2100000000, 'Test 28');
test(largestPerimeter([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]), 84, 'Test 29');
test(largestPerimeter([1000000000, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 9, 'Test 30');
test(largestPerimeter([7, 10, 5, 8, 9, 6, 4, 2, 3, 1]), 55, 'Test 31');
test(largestPerimeter([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 150, 'Test 32');
test(largestPerimeter([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81]), 1810, 'Test 33');
test(largestPerimeter([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 465, 'Test 34');
test(largestPerimeter([1,1,2,2,3,3,4,4,5,5,6,6]), 42, 'Test 35');
test(largestPerimeter([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 165, 'Test 36');
test(largestPerimeter([1,2,4,8,16,32,64,128,256,512]), -1, 'Test 37');
test(largestPerimeter([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 625, 'Test 38');
test(largestPerimeter([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 120, 'Test 39');
test(largestPerimeter([1, 2, 3, 6, 11, 20, 37, 68, 125, 230]), 503, 'Test 40');
test(largestPerimeter([100,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 41');
test(largestPerimeter([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]), 21000, 'Test 42');
test(largestPerimeter([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]), 143, 'Test 43');
test(largestPerimeter([1000000000, 1000000000, 1000000000, 1]), 3000000001, 'Test 44');
test(largestPerimeter([100, 200, 300, 400, 500]), 1500, 'Test 45');
test(largestPerimeter([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 209, 'Test 46');
test(largestPerimeter([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 275, 'Test 47');
test(largestPerimeter([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 165, 'Test 48');
test(largestPerimeter([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 60, 'Test 49');
test(largestPerimeter([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 225, 'Test 50');
test(largestPerimeter([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), 240, 'Test 51');
test(largestPerimeter([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991]), 9999999955, 'Test 52');
test(largestPerimeter([3,6,2,3,5,4,1,1,1,1,1,1,1,1,1,1]), 33, 'Test 53');
test(largestPerimeter([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 54');
test(largestPerimeter([50, 60, 70, 80, 90, 100, 110]), 560, 'Test 55');
test(largestPerimeter([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 180, 'Test 56');
test(largestPerimeter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 465, 'Test 57');
test(largestPerimeter([2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]), 247, 'Test 58');
test(largestPerimeter([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 50, 150, 250, 350, 450, 550, 650, 750, 850, 950]), 10500, 'Test 59');
test(largestPerimeter([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 110, 'Test 60');
test(largestPerimeter([3, 6, 2, 3, 5, 4, 1, 8, 7, 9]), 48, 'Test 61');
test(largestPerimeter([10,10,10,10,10,10,10,10,10,10]), 100, 'Test 62');
test(largestPerimeter([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150]), 2325, 'Test 63');
test(largestPerimeter([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), -1, 'Test 64');
test(largestPerimeter([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 32, 'Test 65');
test(largestPerimeter([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 7000000000, 'Test 66');
test(largestPerimeter([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500]), 12000, 'Test 67');
test(largestPerimeter([100, 200, 300, 400, 500, 600]), 2100, 'Test 68');
test(largestPerimeter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 69');
test(largestPerimeter([9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 70');
test(largestPerimeter([1,1000000000,1000000000,1000000000]), 3000000001, 'Test 71');
test(largestPerimeter([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 209, 'Test 72');
test(largestPerimeter([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 780, 'Test 73');
test(largestPerimeter([1000000000, 999999999, 999999998, 999999997, 999999996]), 4999999990, 'Test 74');
test(largestPerimeter([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 1200, 'Test 75');
test(largestPerimeter([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]), 17710, 'Test 76');
test(largestPerimeter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 77');
test(largestPerimeter([1,2,3,4,5,100,200,300,400,500]), 1515, 'Test 78');
test(largestPerimeter([29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), 225, 'Test 79');
test(largestPerimeter([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), 1050, 'Test 80');
test(largestPerimeter([50,40,30,20,10,5,3,1]), 159, 'Test 81');
test(largestPerimeter([1, 2, 3, 6, 10, 18, 33, 59, 107, 198, 374, 699, 1302, 2441, 4537, 8380, 15619, 29036, 54256, 100901]), 217982, 'Test 82');
test(largestPerimeter([33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33]), 660, 'Test 83');
test(largestPerimeter([7,10,5,8,6,9,3,4,2,1]), 55, 'Test 84');
test(largestPerimeter([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 85');
test(largestPerimeter([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 550, 'Test 86');
test(largestPerimeter([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 1050, 'Test 87');
test(largestPerimeter([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 20, 'Test 88');
test(largestPerimeter([1, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 6000000001, 'Test 89');
test(largestPerimeter([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 1000, 'Test 90');
test(largestPerimeter([7,10,14,21,28,35,42,49,56,63]), 325, 'Test 91');
test(largestPerimeter([100,200,300,400,500,600,700,800,900,1000]), 5500, 'Test 92');
test(largestPerimeter([1, 3, 2, 4, 5, 9, 7, 8, 6, 10]), 55, 'Test 93');
test(largestPerimeter([100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000, 1000000000]), 5500000000, 'Test 94');
test(largestPerimeter([1, 1000000000, 1, 1, 1, 1, 1, 1, 1, 1]), 9, 'Test 95');

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
