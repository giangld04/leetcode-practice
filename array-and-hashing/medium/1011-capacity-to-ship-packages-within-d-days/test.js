// Test: 1011. Capacity To Ship Packages Within D Days
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { shipWithinDays } = require("./solution");

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

console.log("\n1011. Capacity To Ship Packages Within D Days\n");

test(shipWithinDays([10,50,100,100,50,10], 2), 160, 'Test 1');
test(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5), 15, 'Test 2');
test(shipWithinDays([10,50,100,100,50,10], 3), 160, 'Test 3');
test(shipWithinDays([3,2,2,4,1,4], 3), 6, 'Test 4');
test(shipWithinDays([1,2,3,1,1], 4), 3, 'Test 5');
test(shipWithinDays([1,1,1,1,1,1,1,1,1,1], 5), 2, 'Test 6');
test(shipWithinDays([5,5,5,5,5], 2), 15, 'Test 7');
test(shipWithinDays([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 5), 83, 'Test 8');
test(shipWithinDays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 4), 170, 'Test 9');
test(shipWithinDays([4, 3, 2, 5, 8, 2, 3, 5, 6, 1, 2, 4, 3, 7, 5], 8), 10, 'Test 10');
test(shipWithinDays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 5), 52, 'Test 11');
test(shipWithinDays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 6), 48, 'Test 12');
test(shipWithinDays([9,10,10,10,10,10,10,10,10,10], 3), 39, 'Test 13');
test(shipWithinDays([450,450,450,450,450,450,450,450,450,450], 2), 2250, 'Test 14');
test(shipWithinDays([30, 40, 20, 5, 10, 80, 25, 45, 60, 35, 50, 20, 40, 30, 50, 15], 8), 90, 'Test 15');
test(shipWithinDays([300,300,300,300,300,300,300,300,300,300], 3), 1200, 'Test 16');
test(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), 23, 'Test 17');
test(shipWithinDays([50,100,150,200,250,300,350,400,450,500], 4), 850, 'Test 18');
test(shipWithinDays([500,500,500,500,500,500,500,500,500,500], 5), 1000, 'Test 19');
test(shipWithinDays([150,300,450,600,750,900,1050], 3), 1650, 'Test 20');
test(shipWithinDays([250,250,250,250,250,250,250,250,250,250,250,250,250,250,250], 5), 750, 'Test 21');
test(shipWithinDays([10,20,30,40,50,60,70,80,90,100], 3), 210, 'Test 22');
test(shipWithinDays([3, 5, 8, 4, 2, 10, 1, 7, 6, 9, 11, 13, 15, 12, 14], 6), 26, 'Test 23');
test(shipWithinDays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15), 7, 'Test 24');
test(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 3), 42, 'Test 25');
test(shipWithinDays([1, 5, 9, 14, 20, 25, 30, 35, 40, 45, 50], 10), 50, 'Test 26');
test(shipWithinDays([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 15), 20, 'Test 27');
test(shipWithinDays([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 2), 28000, 'Test 28');
test(shipWithinDays([30, 50, 20, 40, 60, 10, 90, 80, 70, 100, 120, 130, 110, 140], 6), 240, 'Test 29');
test(shipWithinDays([50,40,30,20,10,10,20,30,40,50], 4), 90, 'Test 30');
test(shipWithinDays([100,200,300,400,500,1,2,3,4,5,6,7,8,9,10], 6), 500, 'Test 31');
test(shipWithinDays([5, 10, 20, 30, 25, 40, 15, 10, 5, 30], 3), 65, 'Test 32');
test(shipWithinDays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 20, 'Test 33');
test(shipWithinDays([100,200,300,100,200,300,100,200,300,100], 5), 500, 'Test 34');
test(shipWithinDays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), 28, 'Test 35');
test(shipWithinDays([50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50], 30), 100, 'Test 36');
test(shipWithinDays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 5), 1500, 'Test 37');
test(shipWithinDays([47, 2, 20, 7, 2, 19, 23, 30, 6, 12, 9, 4, 30, 26, 8, 7], 10), 47, 'Test 38');
test(shipWithinDays([2,4,6,8,10,12,14,16,18,20], 5), 30, 'Test 39');
test(shipWithinDays([10,15,10,15,10,15,10,15], 6), 25, 'Test 40');
test(shipWithinDays([31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31], 5), 155, 'Test 41');
test(shipWithinDays([1,2,3,100,200,300,100,200,300,1,2,3,100,200,300,100,200,300,1,2,3], 7), 500, 'Test 42');
test(shipWithinDays([30,50,20,100,5,75,30,25,10,60,40,80,90,10,20], 7), 120, 'Test 43');
test(shipWithinDays([10,9,8,7,6,5,4,3,2,1], 2), 28, 'Test 44');
test(shipWithinDays([500, 400, 300, 200, 100, 50, 40, 30, 20, 10, 5, 4, 3, 2, 1], 5), 500, 'Test 45');
test(shipWithinDays([100,200,300,400,500,600,700,800,900,1000], 5), 1500, 'Test 46');
test(shipWithinDays([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 2), 500, 'Test 47');
test(shipWithinDays([300, 200, 100, 50, 40, 30, 20, 10, 5, 4, 3, 2, 1, 1, 1], 7), 300, 'Test 48');
test(shipWithinDays([250,250,250,250,250,250,250,250,250,250,250,250,250,250,250], 10), 500, 'Test 49');
test(shipWithinDays([10,5,1,7,8,12,4,7], 6), 12, 'Test 50');
test(shipWithinDays([300,200,100,200,300,100,200,300,100,200], 4), 600, 'Test 51');
test(shipWithinDays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 3), 420, 'Test 52');
test(shipWithinDays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 4), 57, 'Test 53');
test(shipWithinDays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), 23, 'Test 54');
test(shipWithinDays([4, 3, 5, 6, 8, 10, 3, 1, 5, 6], 5), 13, 'Test 55');
test(shipWithinDays([48,99,37,11,37,42,46,20,7,13,11,50,88,33,60,10], 7), 103, 'Test 56');
test(shipWithinDays([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 3), 70, 'Test 57');
test(shipWithinDays([9,8,7,6,5,4,3,2,1], 5), 11, 'Test 58');
test(shipWithinDays([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 5), 40, 'Test 59');
test(shipWithinDays([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 15), 10, 'Test 60');
test(shipWithinDays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 10), 3, 'Test 61');
test(shipWithinDays([10,5,2,7,3,4,11,6,9], 4), 15, 'Test 62');
test(shipWithinDays([300,200,100,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300], 15), 470, 'Test 63');
test(shipWithinDays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 1, 'Test 64');
test(shipWithinDays([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3], 10), 6, 'Test 65');
test(shipWithinDays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 10), 15, 'Test 66');
test(shipWithinDays([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 15), 100, 'Test 67');
test(shipWithinDays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 7), 100, 'Test 68');
test(shipWithinDays([25, 47, 42, 77, 72, 46, 42, 44, 63, 59, 51, 55, 53, 91, 93, 95, 97, 99], 10), 149, 'Test 69');
test(shipWithinDays([91,41,54,63,17,5,58,57,98,46], 10), 98, 'Test 70');
test(shipWithinDays([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 5), 32, 'Test 71');
test(shipWithinDays([450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450], 15), 900, 'Test 72');
test(shipWithinDays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 28, 'Test 73');
test(shipWithinDays([100,200,300,400,500,600,700,800,900,1000], 2), 2800, 'Test 74');
test(shipWithinDays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 3), 2100, 'Test 75');
test(shipWithinDays([450,450,450,450,450,450,450,450,450,450], 5), 900, 'Test 76');
test(shipWithinDays([500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500], 10), 1000, 'Test 77');
test(shipWithinDays([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 27, 'Test 78');
test(shipWithinDays([150,100,50,200,250,300,100,50,200,150], 3), 550, 'Test 79');
test(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 9), 31, 'Test 80');

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
