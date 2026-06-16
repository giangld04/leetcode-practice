// Test: 3296. Minimum Number Of Seconds To Make Mountain Height Zero
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { minNumberOfSeconds } = require("./solution");

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

console.log("\n3296. Minimum Number Of Seconds To Make Mountain Height Zero\n");

test(minNumberOfSeconds(15, [5,5,5]), 75, 'Test 1');
test(minNumberOfSeconds(15, [1,2,3]), 30, 'Test 2');
test(minNumberOfSeconds(15, [1,2,3,4,5]), 18, 'Test 3');
test(minNumberOfSeconds(1, [100]), 100, 'Test 4');
test(minNumberOfSeconds(50, [1,2,3,4,5]), 140, 'Test 5');
test(minNumberOfSeconds(50, [10,20,30,40,50]), 1400, 'Test 6');
test(minNumberOfSeconds(30, [3,3,3]), 165, 'Test 7');
test(minNumberOfSeconds(100, [10,10,10,10]), 3250, 'Test 8');
test(minNumberOfSeconds(100000, [1]), 5000050000, 'Test 9');
test(minNumberOfSeconds(10, [3,2,2,4]), 12, 'Test 10');
test(minNumberOfSeconds(5, [1]), 15, 'Test 11');
test(minNumberOfSeconds(7, [2,3]), 20, 'Test 12');
test(minNumberOfSeconds(1, [100000]), 100000, 'Test 13');
test(minNumberOfSeconds(100, [1,1,1,1,1,1,1,1,1,1]), 55, 'Test 14');
test(minNumberOfSeconds(1, [1000000]), 1000000, 'Test 15');
test(minNumberOfSeconds(100, [1,2,3,4,5,6,7,8,9,10]), 234, 'Test 16');
test(minNumberOfSeconds(20, [5,5,5]), 140, 'Test 17');
test(minNumberOfSeconds(7, [7]), 196, 'Test 18');
test(minNumberOfSeconds(30, [2,3,4]), 165, 'Test 19');
test(minNumberOfSeconds(50, [10,20,30]), 2720, 'Test 20');
test(minNumberOfSeconds(4, [2,1,1]), 3, 'Test 21');
test(minNumberOfSeconds(20, [5,5,5,5]), 75, 'Test 22');
test(minNumberOfSeconds(500, [50, 100, 150, 200, 250, 300, 350, 400, 450, 500]), 257550, 'Test 23');
test(minNumberOfSeconds(800, [100, 200, 300, 400, 500, 600, 700, 800]), 1703000, 'Test 24');
test(minNumberOfSeconds(50, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 75, 'Test 25');
test(minNumberOfSeconds(100000, [100000, 200000, 300000]), 95812470300000, 'Test 26');
test(minNumberOfSeconds(50, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 140, 'Test 27');
test(minNumberOfSeconds(50000, [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), 49602375000, 'Test 28');
test(minNumberOfSeconds(300, [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), 5673, 'Test 29');
test(minNumberOfSeconds(75000, [1000, 2000, 3000, 4000, 5000]), 269335050000, 'Test 30');
test(minNumberOfSeconds(90, [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 135, 'Test 31');
test(minNumberOfSeconds(50000, [50000, 25000, 10000, 5000]), 1024120650000, 'Test 32');
test(minNumberOfSeconds(99999, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 54452541, 'Test 33');
test(minNumberOfSeconds(300, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1050, 'Test 34');
test(minNumberOfSeconds(7500, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 111826000, 'Test 35');
test(minNumberOfSeconds(30000, [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 210504421, 'Test 36');
test(minNumberOfSeconds(1000, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), 23595, 'Test 37');
test(minNumberOfSeconds(250, [10000, 20000, 30000, 40000, 50000]), 31050000, 'Test 38');
test(minNumberOfSeconds(120, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), 1100, 'Test 39');
test(minNumberOfSeconds(400, [100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]), 33210000, 'Test 40');
test(minNumberOfSeconds(10000, [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]), 8794190, 'Test 41');
test(minNumberOfSeconds(75, [1000, 2000, 3000, 4000]), 406000, 'Test 42');
test(minNumberOfSeconds(200, [1, 2, 4, 8, 16, 32, 64]), 2208, 'Test 43');
test(minNumberOfSeconds(100, [10, 20, 30, 40, 50]), 5250, 'Test 44');
test(minNumberOfSeconds(120000, [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536]), 621255624, 'Test 45');
test(minNumberOfSeconds(50, [1000, 2000, 3000, 4000, 5000]), 140000, 'Test 46');
test(minNumberOfSeconds(15000, [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), 4468554000, 'Test 47');
test(minNumberOfSeconds(200, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 210, 'Test 48');
test(minNumberOfSeconds(30000, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 17662788, 'Test 49');
test(minNumberOfSeconds(300, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 2601, 'Test 50');
test(minNumberOfSeconds(120, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 22000, 'Test 51');
test(minNumberOfSeconds(90000, [100, 150, 200, 250, 300, 350, 400, 450, 500]), 12526645950, 'Test 52');
test(minNumberOfSeconds(30, [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), 90, 'Test 53');
test(minNumberOfSeconds(75, [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]), 980, 'Test 54');
test(minNumberOfSeconds(65000, [500, 400, 300, 200, 100, 50, 25, 10, 5, 1]), 358439550, 'Test 55');
test(minNumberOfSeconds(200, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 8610, 'Test 56');
test(minNumberOfSeconds(10000, [999999, 999998, 999997, 999996, 999995]), 2000997999000, 'Test 57');
test(minNumberOfSeconds(300, [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), 1891000, 'Test 58');
test(minNumberOfSeconds(300, [50, 40, 30, 20, 10, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), 5775, 'Test 59');
test(minNumberOfSeconds(200, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 55, 'Test 60');
test(minNumberOfSeconds(600, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 465, 'Test 61');
test(minNumberOfSeconds(75000, [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 257157181, 'Test 62');
test(minNumberOfSeconds(45000, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 246276030, 'Test 63');
test(minNumberOfSeconds(100, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 55, 'Test 64');
test(minNumberOfSeconds(50000, [100000, 50000, 25000, 12500, 6250]), 989124000000, 'Test 65');
test(minNumberOfSeconds(80000, [999999, 888888, 777777, 666666, 555555, 444444, 333333, 222222, 111111]), 16066085933898, 'Test 66');
test(minNumberOfSeconds(5000, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 2183000, 'Test 67');
test(minNumberOfSeconds(50, [10, 20, 30, 40, 50]), 1400, 'Test 68');
test(minNumberOfSeconds(10000, [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), 1987020000, 'Test 69');
test(minNumberOfSeconds(200, [1, 10, 100, 1000, 10000]), 9900, 'Test 70');
test(minNumberOfSeconds(80, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 252, 'Test 71');
test(minNumberOfSeconds(1000, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 20100, 'Test 72');
test(minNumberOfSeconds(45000, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200]), 3217223100, 'Test 73');
test(minNumberOfSeconds(7500, [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 4895150, 'Test 74');
test(minNumberOfSeconds(100, [5, 10, 15, 20]), 3465, 'Test 75');
test(minNumberOfSeconds(1000, [500, 400, 300, 200, 100]), 4833000, 'Test 76');
test(minNumberOfSeconds(800, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 1296000, 'Test 77');
test(minNumberOfSeconds(1000, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 595, 'Test 78');
test(minNumberOfSeconds(75, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 280, 'Test 79');
test(minNumberOfSeconds(50, [5, 15, 25, 35]), 1260, 'Test 80');
test(minNumberOfSeconds(50, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 4800, 'Test 81');
test(minNumberOfSeconds(100, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 1170, 'Test 82');
test(minNumberOfSeconds(99, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 153, 'Test 83');
test(minNumberOfSeconds(1000, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 202000, 'Test 84');
test(minNumberOfSeconds(120, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 3300, 'Test 85');
test(minNumberOfSeconds(90000, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 140466750, 'Test 86');
test(minNumberOfSeconds(30000, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 178622640, 'Test 87');
test(minNumberOfSeconds(99999, [99999]), 499990000050000, 'Test 88');
test(minNumberOfSeconds(100000, [100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 1250250000000, 'Test 89');
test(minNumberOfSeconds(300, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 1200, 'Test 90');
test(minNumberOfSeconds(5000, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 1091500, 'Test 91');
test(minNumberOfSeconds(90, [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), 196000, 'Test 92');
test(minNumberOfSeconds(100, [5, 10, 15, 20, 25]), 2625, 'Test 93');
test(minNumberOfSeconds(150, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 495, 'Test 94');
test(minNumberOfSeconds(60000, [10000, 15000, 20000, 25000, 30000]), 1291626280000, 'Test 95');
test(minNumberOfSeconds(25000, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 1240518000, 'Test 96');
test(minNumberOfSeconds(80000, [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 31747590, 'Test 97');
test(minNumberOfSeconds(100000, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 12502500, 'Test 98');
test(minNumberOfSeconds(75, [7, 14, 21, 28, 35, 42, 49]), 1470, 'Test 99');
test(minNumberOfSeconds(200, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 4305, 'Test 100');
test(minNumberOfSeconds(500, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 5456, 'Test 101');
test(minNumberOfSeconds(25000, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 5425125, 'Test 102');
test(minNumberOfSeconds(100000, [1, 1, 1, 1, 1]), 200010000, 'Test 103');
test(minNumberOfSeconds(500, [100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]), 51510000, 'Test 104');
test(minNumberOfSeconds(90000, [90000, 45000, 30000, 22500, 18000, 15000, 12857, 11250, 10000, 9000, 8182, 7500, 7000, 6667, 6316, 6000, 5714, 5455, 5217, 5000]), 99351014202, 'Test 105');
test(minNumberOfSeconds(500, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 650, 'Test 106');
test(minNumberOfSeconds(600, [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 41000, 'Test 107');
test(minNumberOfSeconds(1000, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 8976, 'Test 108');
test(minNumberOfSeconds(80000, [80000, 40000, 20000, 10000, 5000, 2500, 1250, 625, 312, 156, 78, 39, 19, 9, 4, 2, 1]), 292563920, 'Test 109');
test(minNumberOfSeconds(80000, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 40010000, 'Test 110');
test(minNumberOfSeconds(20000, [300, 200, 150, 100, 50]), 981466500, 'Test 111');
test(minNumberOfSeconds(200, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 630, 'Test 112');
test(minNumberOfSeconds(250, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 133200, 'Test 113');
test(minNumberOfSeconds(50000, [1000000, 500000, 250000, 125000, 62500]), 9891240000000, 'Test 114');
test(minNumberOfSeconds(50, [1, 10, 100, 1000, 10000]), 666, 'Test 115');
test(minNumberOfSeconds(50000, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 5559445, 'Test 116');

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
