// Test: 2126. Destroying Asteroids
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { asteroidsDestroyed } = require("./solution");

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

console.log("\n2126. Destroying Asteroids\n");

test(asteroidsDestroyed(1, [100000]), false, 'Test 1');
test(asteroidsDestroyed(1, [1,2,3,4,5]), true, 'Test 2');
test(asteroidsDestroyed(5, [4,9,23,4]), false, 'Test 3');
test(asteroidsDestroyed(10, [10,10,10,10,10]), true, 'Test 4');
test(asteroidsDestroyed(20, [10,10,10,10,10]), true, 'Test 5');
test(asteroidsDestroyed(10, [1,2,3,4,5,6,7,8,9,10]), true, 'Test 6');
test(asteroidsDestroyed(100000, [100000]), true, 'Test 7');
test(asteroidsDestroyed(10, [5,5,5,5,5]), true, 'Test 8');
test(asteroidsDestroyed(1, [1,1,1,1,1]), true, 'Test 9');
test(asteroidsDestroyed(1, [1,1,1,1]), true, 'Test 10');
test(asteroidsDestroyed(10, [3,9,19,5,21]), true, 'Test 11');
test(asteroidsDestroyed(1, [2,2,2,2,2]), false, 'Test 12');
test(asteroidsDestroyed(100, [10,20,30,40,50]), true, 'Test 13');
test(asteroidsDestroyed(25, [5,10,15]), true, 'Test 14');
test(asteroidsDestroyed(6, [1,2,3,4,5,6]), true, 'Test 15');
test(asteroidsDestroyed(30, [15,15,15,15,15]), true, 'Test 16');
test(asteroidsDestroyed(100, [1,2,3,4,5,6,7,8,9,10]), true, 'Test 17');
test(asteroidsDestroyed(1000, [500,250,125,62,31,15,7,3,1]), true, 'Test 18');
test(asteroidsDestroyed(20, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 19');
test(asteroidsDestroyed(50, [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]), false, 'Test 20');
test(asteroidsDestroyed(25, [10,20,5,15,25,30,5,10,20,5]), true, 'Test 21');
test(asteroidsDestroyed(500, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), true, 'Test 22');
test(asteroidsDestroyed(30, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), true, 'Test 23');
test(asteroidsDestroyed(100, [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), true, 'Test 24');
test(asteroidsDestroyed(1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 100000]), false, 'Test 25');
test(asteroidsDestroyed(25, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), true, 'Test 26');
test(asteroidsDestroyed(150, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), true, 'Test 27');
test(asteroidsDestroyed(10, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), true, 'Test 28');
test(asteroidsDestroyed(300, [250, 200, 150, 100, 50, 300]), true, 'Test 29');
test(asteroidsDestroyed(100, [50,50,50,50,50,50,50,50,50,50]), true, 'Test 30');
test(asteroidsDestroyed(100, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), true, 'Test 31');
test(asteroidsDestroyed(9, [9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 32');
test(asteroidsDestroyed(50, [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]), true, 'Test 33');
test(asteroidsDestroyed(25, [20, 10, 5, 15, 25, 30, 35, 40, 45, 50]), true, 'Test 34');
test(asteroidsDestroyed(1000, [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500]), true, 'Test 35');
test(asteroidsDestroyed(1, [100000, 1, 1, 1, 1, 1, 1, 1, 1, 1]), false, 'Test 36');
test(asteroidsDestroyed(1000, [900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 25, 10, 5, 1]), true, 'Test 37');
test(asteroidsDestroyed(1, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 38');
test(asteroidsDestroyed(1000, [999, 998, 997, 996, 995, 994, 993, 992, 991, 990]), true, 'Test 39');
test(asteroidsDestroyed(200, [100, 50, 150, 75, 25, 125, 225, 175, 200, 130]), true, 'Test 40');
test(asteroidsDestroyed(75, [50,25,12,6,3,1,50,25,12,6,3,1,50,25,12,6,3,1]), true, 'Test 41');
test(asteroidsDestroyed(1, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 42');
test(asteroidsDestroyed(5, [3,7,2,8,6,4,10,1]), true, 'Test 43');
test(asteroidsDestroyed(15, [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 44');
test(asteroidsDestroyed(5, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), true, 'Test 45');
test(asteroidsDestroyed(20, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), true, 'Test 46');
test(asteroidsDestroyed(10, [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), true, 'Test 47');
test(asteroidsDestroyed(5, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 48');
test(asteroidsDestroyed(30, [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20]), true, 'Test 49');
test(asteroidsDestroyed(25, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), true, 'Test 50');
test(asteroidsDestroyed(75, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 51');
test(asteroidsDestroyed(25, [20,15,10,5,30,25,35,40,45,50]), true, 'Test 52');
test(asteroidsDestroyed(1, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 53');
test(asteroidsDestroyed(10, [1, 100, 2, 99, 3, 98, 4, 97, 5, 96]), false, 'Test 54');
test(asteroidsDestroyed(10, [1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), true, 'Test 55');
test(asteroidsDestroyed(50, [100,50,25,12,6,3,1]), true, 'Test 56');
test(asteroidsDestroyed(200, [100,150,50,200,250,300,350,400,450,500]), true, 'Test 57');
test(asteroidsDestroyed(10, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1]), true, 'Test 58');
test(asteroidsDestroyed(1, [2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), true, 'Test 59');
test(asteroidsDestroyed(1, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 60');
test(asteroidsDestroyed(50, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), true, 'Test 61');
test(asteroidsDestroyed(50000, [10000, 20000, 15000, 5000, 25000, 30000, 40000, 60000]), true, 'Test 62');
test(asteroidsDestroyed(500, [100,200,150,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000]), true, 'Test 63');
test(asteroidsDestroyed(5, [3, 1, 2, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 64');
test(asteroidsDestroyed(50, [100, 25, 25, 25, 25, 25, 25, 25, 25, 25]), true, 'Test 65');
test(asteroidsDestroyed(100, [20, 30, 50, 10, 40, 60, 70]), true, 'Test 66');
test(asteroidsDestroyed(10000, [9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991, 9990]), true, 'Test 67');
test(asteroidsDestroyed(100, [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 68');
test(asteroidsDestroyed(100, [10,20,30,40,50,60,70,80,90,100]), true, 'Test 69');
test(asteroidsDestroyed(100, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), true, 'Test 70');
test(asteroidsDestroyed(50, [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]), true, 'Test 71');
test(asteroidsDestroyed(5, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 72');
test(asteroidsDestroyed(50000, [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]), true, 'Test 73');
test(asteroidsDestroyed(20, [30,29,28,27,26,25,24,23,22,21,20]), true, 'Test 74');
test(asteroidsDestroyed(15, [20,25,30,5,10,15,35,40]), true, 'Test 75');
test(asteroidsDestroyed(10, [1, 100000, 2, 99999, 3, 99998, 4, 99997]), false, 'Test 76');
test(asteroidsDestroyed(15, [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 77');
test(asteroidsDestroyed(120, [10,20,30,40,50,60,70,80,90,100,110,120]), true, 'Test 78');
test(asteroidsDestroyed(50, [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), true, 'Test 79');
test(asteroidsDestroyed(15, [10, 5, 15, 20, 25, 5]), true, 'Test 80');
test(asteroidsDestroyed(25, [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]), true, 'Test 81');
test(asteroidsDestroyed(100000, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 82');
test(asteroidsDestroyed(50, [10, 20, 30, 40, 50]), true, 'Test 83');
test(asteroidsDestroyed(100, [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31]), true, 'Test 84');
test(asteroidsDestroyed(15, [1,5,7,8,9,10,11,12,13,14,15]), true, 'Test 85');
test(asteroidsDestroyed(25, [24, 23, 22, 21, 20, 19, 18, 17, 16, 15]), true, 'Test 86');
test(asteroidsDestroyed(5, [1, 3, 2, 4, 6, 8, 7, 5, 9, 10]), true, 'Test 87');
test(asteroidsDestroyed(20, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), true, 'Test 88');

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
