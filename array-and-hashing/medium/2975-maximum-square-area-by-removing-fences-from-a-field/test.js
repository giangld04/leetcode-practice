// Test: 2975. Maximum Square Area By Removing Fences From A Field
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { maximizeSquareArea } = require("./solution");

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

console.log("\n2975. Maximum Square Area By Removing Fences From A Field\n");

test(maximizeSquareArea(4, 3, [2,3], [2]), 4, 'Test 1');
test(maximizeSquareArea(10, 10, [3, 7], [2, 8]), 81, 'Test 2');
test(maximizeSquareArea(15, 12, [5,10], [4,8]), 16, 'Test 3');
test(maximizeSquareArea(50, 50, [10,20,30], [10,20,30]), 2401, 'Test 4');
test(maximizeSquareArea(20, 15, [4, 12], [5, 10]), -1, 'Test 5');
test(maximizeSquareArea(10, 10, [3,7], [3,7]), 81, 'Test 6');
test(maximizeSquareArea(8, 5, [2,6], [2]), 16, 'Test 7');
test(maximizeSquareArea(15, 15, [4,6,10], [4,6,10]), 196, 'Test 8');
test(maximizeSquareArea(7, 8, [3], [3,5]), 16, 'Test 9');
test(maximizeSquareArea(9, 5, [2,5,8], [2,3]), 16, 'Test 10');
test(maximizeSquareArea(100, 100, [20,40,60,80], [20,40,60,80]), 9801, 'Test 11');
test(maximizeSquareArea(12, 12, [3,9], [3,9]), 121, 'Test 12');
test(maximizeSquareArea(9, 9, [5], [5]), 64, 'Test 13');
test(maximizeSquareArea(15, 12, [5, 10], [3, 9]), 81, 'Test 14');
test(maximizeSquareArea(8, 5, [2,5], [2,3]), 16, 'Test 15');
test(maximizeSquareArea(6, 7, [2], [4]), -1, 'Test 16');
test(maximizeSquareArea(1000000000, 1000000000, [100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000], [100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000]), 64, 'Test 17');
test(maximizeSquareArea(100, 100, [20, 30, 40, 50], [15, 25, 35, 45]), 9801, 'Test 18');
test(maximizeSquareArea(999999999, 999999999, [333333333, 666666666], [333333333, 666666666]), 81, 'Test 19');
test(maximizeSquareArea(1000, 1000, [250, 500, 750], [250, 500, 750]), 998001, 'Test 20');
test(maximizeSquareArea(200, 200, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]), 39601, 'Test 21');
test(maximizeSquareArea(500, 500, [50, 150, 250, 350, 450], [75, 125, 175, 225, 275, 325, 375, 425, 475]), 249001, 'Test 22');
test(maximizeSquareArea(8, 12, [2, 4, 6, 7], [3, 5, 9, 11]), 49, 'Test 23');
test(maximizeSquareArea(100, 100, [10, 20, 30, 40, 50], [15, 25, 35, 45, 55]), 9801, 'Test 24');
test(maximizeSquareArea(800, 600, [100, 300, 500, 700], [120, 240, 360, 480]), -1, 'Test 25');
test(maximizeSquareArea(10000, 10000, [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000], [500, 1500, 2500, 3500, 4500, 5500, 6500, 7500, 8500, 9500]), 99980001, 'Test 26');
test(maximizeSquareArea(1000000000, 1000000000, [100000, 200000, 300000], [150000, 250000, 350000]), 64, 'Test 27');
test(maximizeSquareArea(1200, 800, [240, 480, 720, 960], [160, 320, 480, 640]), 230400, 'Test 28');
test(maximizeSquareArea(3000, 2000, [750, 1500, 2250], [500, 1000, 1500]), 2250000, 'Test 29');
test(maximizeSquareArea(50, 30, [5, 10, 15, 20, 25, 30, 35, 40, 45], [3, 6, 9, 12, 15, 18, 21, 24, 27]), 841, 'Test 30');
test(maximizeSquareArea(999, 999, [100, 200, 300, 400, 500, 600, 700, 800, 900], [100, 200, 300, 400, 500, 600, 700, 800, 900]), 996004, 'Test 31');
test(maximizeSquareArea(1200, 900, [150, 300, 450, 600, 750, 900], [200, 400, 600, 800]), 808201, 'Test 32');
test(maximizeSquareArea(2000, 3000, [500, 1000, 1500], [750, 1500, 2250]), 2250000, 'Test 33');
test(maximizeSquareArea(1000, 1000, [150, 350, 550, 750, 950], [150, 350, 550, 750, 950]), 998001, 'Test 34');
test(maximizeSquareArea(150, 150, [10, 20, 30, 40, 50], [15, 30, 45, 60, 75]), 22201, 'Test 35');
test(maximizeSquareArea(10, 20, [2, 3, 5, 7], [4, 8, 12, 16]), 64, 'Test 36');
test(maximizeSquareArea(500, 300, [50, 150, 250, 350, 450], [100, 200, 250, 300]), 62001, 'Test 37');
test(maximizeSquareArea(1000, 1000, [200, 300, 400, 500, 600, 700, 800, 900], [100, 200, 300, 400, 500, 600, 700, 800]), 998001, 'Test 38');
test(maximizeSquareArea(600, 400, [100, 200, 300, 400, 500], [150, 250, 350]), 159201, 'Test 39');
test(maximizeSquareArea(1000000, 1000000, [100000, 200000, 300000, 400000, 500000], [100000, 200000, 300000, 400000, 500000]), 997993008, 'Test 40');
test(maximizeSquareArea(30, 18, [3, 6, 9, 12, 15, 18, 24, 27], [4, 8, 12, 16, 20, 24, 28]), 729, 'Test 41');
test(maximizeSquareArea(750, 1000, [10, 20, 30, 40, 50, 60, 70, 80, 90], [10, 20, 30, 40, 50, 60, 70, 80, 90]), 7921, 'Test 42');
test(maximizeSquareArea(20, 15, [3, 6, 12, 18], [4, 8, 14]), 196, 'Test 43');
test(maximizeSquareArea(600, 900, [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600], [60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720]), 358801, 'Test 44');
test(maximizeSquareArea(2000000000, 1000000000, [500000000, 1500000000, 1000000000], [250000000, 750000000, 500000000]), 64, 'Test 45');
test(maximizeSquareArea(5000, 5000, [1000, 2000, 3000, 4000], [1200, 2200, 3200, 4200]), 24990001, 'Test 46');
test(maximizeSquareArea(10000, 10000, [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000], [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]), 99980001, 'Test 47');
test(maximizeSquareArea(999, 999, [100, 200, 300, 400, 500, 600, 700, 800], [100, 200, 300, 400, 500, 600, 700, 800]), 996004, 'Test 48');
test(maximizeSquareArea(800, 600, [50, 100, 150, 200, 250], [75, 125, 175, 225, 275]), 40000, 'Test 49');
test(maximizeSquareArea(200, 150, [50, 100, 150], [30, 60, 90, 120]), 22201, 'Test 50');
test(maximizeSquareArea(1000, 1000, [200, 400, 600, 800], [250, 500, 750]), 998001, 'Test 51');
test(maximizeSquareArea(500, 300, [100, 200, 300, 400], [50, 150, 250, 290]), 89401, 'Test 52');
test(maximizeSquareArea(2000, 3000, [200, 600, 1000, 1400, 1800], [300, 900, 1500, 2100, 2700]), 3240000, 'Test 53');
test(maximizeSquareArea(999, 999, [333, 666], [333, 666]), 996004, 'Test 54');
test(maximizeSquareArea(123456789, 987654321, [12345678, 24691356, 37037034], [9876543, 19753086, 29629629]), -1, 'Test 55');
test(maximizeSquareArea(1000, 1000, [50, 150, 250, 350, 450, 550, 650, 750, 850, 950], [50, 150, 250, 350, 450, 550, 650, 750, 850, 950]), 998001, 'Test 56');
test(maximizeSquareArea(500, 500, [100, 150, 200, 250, 300], [50, 100, 150, 200, 250]), 249001, 'Test 57');
test(maximizeSquareArea(800, 900, [50, 150, 250, 350, 450], [60, 160, 260, 360, 460]), 160000, 'Test 58');
test(maximizeSquareArea(700, 500, [70, 140, 210, 280, 350, 420, 490, 560, 630], [50, 100, 150, 200, 250, 300, 350, 400, 450]), 122500, 'Test 59');
test(maximizeSquareArea(1000000000, 1000000000, [200, 300, 400], [200, 300, 400]), 64, 'Test 60');
test(maximizeSquareArea(500, 500, [100, 200, 300, 400], [100, 200, 300, 400]), 249001, 'Test 61');
test(maximizeSquareArea(1200, 900, [150, 300, 450, 600, 750, 900], [180, 360, 540, 720, 900]), 808201, 'Test 62');
test(maximizeSquareArea(500000000, 500000000, [250000000], [250000000]), 250000022, 'Test 63');
test(maximizeSquareArea(50, 30, [10, 20, 30, 40], [5, 15, 25, 35, 45]), 1600, 'Test 64');
test(maximizeSquareArea(100, 100, [10, 30, 50, 70, 90], [10, 30, 50, 70, 90]), 9801, 'Test 65');
test(maximizeSquareArea(123456789, 987654321, [12345678, 24691356, 37037034, 49382712, 61728390, 74074068, 86419746, 98765424], [9876543, 19753086, 29629629, 39506172, 49382715, 59259258, 69135801, 79012344, 88888887]), -1, 'Test 66');
test(maximizeSquareArea(100, 100, [15, 25, 35, 45, 55, 65, 75, 85, 95], [15, 25, 35, 45, 55, 65, 75, 85, 95]), 9801, 'Test 67');
test(maximizeSquareArea(1000000000, 2000000000, [250000000, 750000000, 500000000], [500000000, 1500000000, 1000000000]), 64, 'Test 68');
test(maximizeSquareArea(100, 100, [10, 20, 30, 40, 50, 60, 70, 80, 90], [10, 20, 30, 40, 50, 60, 70, 80, 90]), 9801, 'Test 69');
test(maximizeSquareArea(123456, 654321, [23456, 45678, 67890], [34567, 56789, 78901]), 493817284, 'Test 70');
test(maximizeSquareArea(800, 400, [100, 300, 500, 700], [100, 200, 300]), 90000, 'Test 71');
test(maximizeSquareArea(100, 100, [20, 40, 60, 80], [20, 40, 60, 80]), 9801, 'Test 72');
test(maximizeSquareArea(999999999, 999999999, [100000001, 200000001, 300000001, 400000001, 500000001], [100000002, 200000002, 300000002, 400000002, 500000002]), 81, 'Test 73');
test(maximizeSquareArea(1000000000, 1000000000, [500000000], [500000000]), 64, 'Test 74');
test(maximizeSquareArea(1000, 1000, [200, 300, 400, 500, 600, 700, 800, 900], [150, 250, 350, 450, 550, 650, 750, 850]), 998001, 'Test 75');
test(maximizeSquareArea(100, 200, [10, 20, 30, 40], [15, 25, 35, 45]), 900, 'Test 76');
test(maximizeSquareArea(500, 500, [25, 50, 75, 100, 125, 150, 175, 200], [25, 50, 75, 100, 125, 150, 175, 200]), 249001, 'Test 77');
test(maximizeSquareArea(500, 600, [150, 250, 350], [200, 300, 400, 500]), 249001, 'Test 78');
test(maximizeSquareArea(120, 120, [24, 48, 72, 96], [24, 48, 72, 96]), 14161, 'Test 79');
test(maximizeSquareArea(80, 80, [20, 40, 60], [20, 40, 60]), 6241, 'Test 80');
test(maximizeSquareArea(20, 20, [4, 8, 12, 16], [4, 8, 12, 16]), 361, 'Test 81');
test(maximizeSquareArea(20, 20, [4, 8, 12, 16], [5, 10, 15]), 361, 'Test 82');
test(maximizeSquareArea(100, 100, [20, 40, 60, 80], [25, 50, 75]), 9801, 'Test 83');
test(maximizeSquareArea(50, 50, [25, 35, 45], [10, 20, 30, 40, 50]), 2401, 'Test 84');
test(maximizeSquareArea(897, 789, [123, 234, 345, 456, 567, 678, 789], [87, 174, 261, 348, 435, 522, 609]), 620944, 'Test 85');
test(maximizeSquareArea(99, 99, [33, 66], [33, 66]), 9604, 'Test 86');
test(maximizeSquareArea(500, 500, [100, 200, 300], [150, 250, 350]), 249001, 'Test 87');
test(maximizeSquareArea(100, 100, [20, 30, 40, 50, 60, 70, 80, 90], [15, 25, 35, 45, 55, 65, 75, 85, 95]), 9801, 'Test 88');
test(maximizeSquareArea(20, 20, [3, 7, 13, 17], [4, 8, 12, 16]), 361, 'Test 89');
test(maximizeSquareArea(777, 777, [259, 518], [259, 518]), 602176, 'Test 90');
test(maximizeSquareArea(50, 50, [10, 20, 30, 40], [10, 20, 30, 40]), 2401, 'Test 91');
test(maximizeSquareArea(1024, 1024, [256, 512, 768], [256, 512, 768]), 1046529, 'Test 92');
test(maximizeSquareArea(1000, 1000, [100, 200, 300, 400, 500, 600, 700, 800, 900], [50, 150, 250, 350, 450, 550, 650, 750, 850, 950]), 998001, 'Test 93');
test(maximizeSquareArea(1000000, 500000, [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000], [50000, 150000, 250000, 350000, 450000, 550000, 650000, 750000, 850000, 950000]), 999994337, 'Test 94');
test(maximizeSquareArea(1000, 1000, [100, 200, 300, 400, 500, 600, 700, 800, 900], [100, 200, 300, 400, 500, 600, 700, 800, 900]), 998001, 'Test 95');
test(maximizeSquareArea(500000000, 500000000, [50000000, 100000000, 150000000, 200000000, 250000000, 300000000, 350000000, 400000000, 450000000, 499999990], [50000000, 100000000, 150000000, 200000000, 250000000, 300000000, 350000000, 400000000, 450000000, 499999990]), 250000022, 'Test 96');
test(maximizeSquareArea(987654, 456789, [123456, 234567, 345678, 456789, 567890], [98765, 197530, 296295, 395060, 493825]), 655275488, 'Test 97');
test(maximizeSquareArea(800, 600, [100, 200, 300, 400, 500, 600, 700], [125, 250, 375, 500, 625]), 358801, 'Test 98');
test(maximizeSquareArea(75, 60, [15, 30, 45], [10, 20, 30, 40]), 900, 'Test 99');
test(maximizeSquareArea(20, 15, [3, 7, 12], [4, 8, 11]), 121, 'Test 100');
test(maximizeSquareArea(50, 40, [10, 20, 30, 40], [5, 15, 25, 35]), 1521, 'Test 101');

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
