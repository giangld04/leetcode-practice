// Test: 888. Fair Candy Swap
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { fairCandySwap } = require("./solution");

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

console.log("\n888. Fair Candy Swap\n");

test(fairCandySwap([3,7], [1,9]), null, 'Test 1');
test(fairCandySwap([10,20,30], [5,15,25]), null, 'Test 2');
test(fairCandySwap([1,1], [2,2]), [1, 2], 'Test 3');
test(fairCandySwap([5,4,3], [7,8,9]), [3, 9], 'Test 4');
test(fairCandySwap([4,1,2,1], [1,2,2,10]), null, 'Test 5');
test(fairCandySwap([1,3,5,7], [2,4,6,8]), null, 'Test 6');
test(fairCandySwap([1,2,5], [2,4]), [5, 4], 'Test 7');
test(fairCandySwap([35,17,4,24,19], [68,32,20,92,21]), null, 'Test 8');
test(fairCandySwap([1,2], [2,3]), [1, 2], 'Test 9');
test(fairCandySwap([3,4], [2,5]), null, 'Test 10');
test(fairCandySwap([2], [1,3]), [2, 3], 'Test 11');
test(fairCandySwap([35,17,4,24,10], [66,56,5,1,58]), [10, 58], 'Test 12');
test(fairCandySwap([4,1,2,1], [1,2,2,3]), [1, 1], 'Test 13');
test(fairCandySwap([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), null, 'Test 14');
test(fairCandySwap([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14, 16]), null, 'Test 15');
test(fairCandySwap([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), [5, 30], 'Test 16');
test(fairCandySwap([10000, 20000, 30000, 40000], [5000, 15000, 25000, 35000]), null, 'Test 17');
test(fairCandySwap([12345, 67890, 54321, 98765], [23456, 78901, 1234, 5678]), null, 'Test 18');
test(fairCandySwap([55555, 44444, 33333, 22222, 11111], [99999, 88888, 77777, 66666, 55555]), null, 'Test 19');
test(fairCandySwap([100,200,300,400,500], [90,190,290,390,490]), null, 'Test 20');
test(fairCandySwap([100, 200, 300, 400], [150, 250, 350, 450]), null, 'Test 21');
test(fairCandySwap([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115]), null, 'Test 22');
test(fairCandySwap([5, 20, 10, 30], [15, 25, 35, 5]), null, 'Test 23');
test(fairCandySwap([2, 4, 6, 8, 10, 12], [1, 3, 5, 7, 9, 11, 13]), null, 'Test 24');
test(fairCandySwap([100, 200, 300, 400], [150, 250, 350, 450, 550]), null, 'Test 25');
test(fairCandySwap([50000, 25000, 12500, 6250, 3125], [45000, 22500, 11250, 5625, 2812]), null, 'Test 26');
test(fairCandySwap([100, 200, 300, 400], [50, 150, 250, 350]), null, 'Test 27');
test(fairCandySwap([101, 202, 303, 404, 505, 606, 707, 808, 909], [99, 198, 297, 396, 495, 594, 693, 792, 891]), null, 'Test 28');
test(fairCandySwap([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]), null, 'Test 29');
test(fairCandySwap([100000, 50000, 25000, 12500, 6250], [105000, 55000, 27500, 13750, 6875]), null, 'Test 30');
test(fairCandySwap([100000, 1, 2, 3], [99999, 4, 5, 6]), [1, 5], 'Test 31');
test(fairCandySwap([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [50, 150, 250, 350, 450, 550, 650, 750, 850, 950]), [300, 50], 'Test 32');
test(fairCandySwap([9, 18, 27, 36, 45], [12, 24, 36, 48, 60]), null, 'Test 33');
test(fairCandySwap([100, 200, 300, 400, 500], [50, 150, 250, 350, 450]), null, 'Test 34');
test(fairCandySwap([9, 18, 27, 36, 45], [10, 20, 30, 40, 50]), null, 'Test 35');
test(fairCandySwap([99, 198, 297, 396, 495], [100, 200, 300, 400, 500]), null, 'Test 36');
test(fairCandySwap([100, 200, 300, 400, 500, 600, 700], [75, 175, 275, 375, 475, 575, 675]), null, 'Test 37');
test(fairCandySwap([50,51,52,53,54,55,56,57,58,59], [49,48,47,46,45,44,43,42,41,40]), null, 'Test 38');
test(fairCandySwap([10, 20, 30, 40, 50], [5, 15, 25, 35, 45]), null, 'Test 39');
test(fairCandySwap([1000, 2000, 3000, 4000, 5000], [1500, 2500, 3500, 4500, 5500]), null, 'Test 40');
test(fairCandySwap([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), [8, 1], 'Test 41');
test(fairCandySwap([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000], [5000, 15000, 25000, 35000, 45000, 55000, 65000, 75000, 85000]), null, 'Test 42');
test(fairCandySwap([100, 200, 300, 400, 500, 600, 700, 800], [150, 250, 350, 450, 550, 650, 750, 850, 950]), null, 'Test 43');
test(fairCandySwap([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), [1, 6], 'Test 44');
test(fairCandySwap([99999, 88888, 77777, 66666, 55555], [11111, 22222, 33333, 44444, 66666, 77777, 88888]), [99999, 77777], 'Test 45');
test(fairCandySwap([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], [1500,2500,3500,4500,5500,6500,7500,8500,9500,10500]), [1000, 3500], 'Test 46');
test(fairCandySwap([101, 203, 305, 407, 509], [102, 204, 306, 408, 510]), null, 'Test 47');
test(fairCandySwap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), null, 'Test 48');
test(fairCandySwap([10, 20, 30, 40], [5, 15, 25, 35, 45, 55]), null, 'Test 49');
test(fairCandySwap([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), null, 'Test 50');
test(fairCandySwap([1, 5, 9, 13, 17, 21], [2, 6, 10, 14, 18, 22]), null, 'Test 51');
test(fairCandySwap([50, 51, 52, 53, 54, 55, 56], [49, 50, 51, 52, 53, 54, 55]), [52, 49], 'Test 52');
test(fairCandySwap([88, 44, 22, 11, 55, 33, 66, 99, 77], [132, 66, 33, 22, 110, 44, 88, 11, 77]), [88, 132], 'Test 53');
test(fairCandySwap([23456, 78901, 34567, 89012], [65432, 12345, 54321, 98765]), null, 'Test 54');
test(fairCandySwap([10000, 20000, 30000, 40000, 50000, 60000], [15000, 25000, 35000, 45000, 55000, 65000]), [10000, 25000], 'Test 55');
test(fairCandySwap([1000, 2000, 3000, 4000, 5000], [5500, 6500, 7500, 8500]), [1000, 7500], 'Test 56');
test(fairCandySwap([500, 600, 700, 800, 900], [100, 200, 300, 400, 1400]), null, 'Test 57');
test(fairCandySwap([99, 199, 299, 399, 499, 599, 699, 799, 899, 999], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), null, 'Test 58');
test(fairCandySwap([3, 5, 7, 9, 11, 13, 15, 17, 19], [4, 6, 8, 10, 12, 14, 16, 18, 20]), [3, 8], 'Test 59');
test(fairCandySwap([12345, 6789, 2468, 1357, 9753], [8642, 7531, 9513, 5791, 6842]), null, 'Test 60');
test(fairCandySwap([23, 45, 67, 89, 101, 123, 145], [34, 56, 78, 90, 112, 134, 156]), null, 'Test 61');
test(fairCandySwap([100000, 100000, 100000, 100000, 100000], [50000, 50000, 50000, 50000, 50000, 50000, 50000]), null, 'Test 62');
test(fairCandySwap([50, 100, 150, 200, 250, 300], [60, 110, 160, 210, 260, 310]), null, 'Test 63');
test(fairCandySwap([10000, 20000, 30000, 40000], [5000, 6000, 7000, 8000]), null, 'Test 64');
test(fairCandySwap([100000,1,2,3,4,5,6,7,8,9], [99999,99998,99997,99996,99995,99994,99993,99992,99991,99990]), null, 'Test 65');
test(fairCandySwap([10000, 20000, 30000, 40000, 50000], [5000, 15000, 25000, 35000, 45000, 55000]), [10000, 25000], 'Test 66');
test(fairCandySwap([5, 7, 9, 11, 13, 15, 17, 19, 21, 23], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), [17, 2], 'Test 67');
test(fairCandySwap([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), null, 'Test 68');
test(fairCandySwap([1000, 2000, 3000, 4000], [500, 1500, 2500, 3500]), null, 'Test 69');
test(fairCandySwap([1000, 2000, 3000, 4000, 5000], [1100, 2100, 3100, 4100, 5100]), null, 'Test 70');
test(fairCandySwap([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10, 12]), [1, 4], 'Test 71');
test(fairCandySwap([1, 1, 1, 1, 10000], [5000, 5000, 5000, 5000, 5000]), null, 'Test 72');
test(fairCandySwap([99990, 1, 2, 3, 4, 5], [100000, 6, 7, 8, 9, 10]), null, 'Test 73');
test(fairCandySwap([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100000], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]), null, 'Test 74');
test(fairCandySwap([10000, 20000, 30000], [15000, 25000, 35000]), null, 'Test 75');
test(fairCandySwap([7,2,5,3,8,1,4,6,9,10], [12,15,14,11,13,10,9,8,7,6]), null, 'Test 76');
test(fairCandySwap([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20]), [1, 6], 'Test 77');
test(fairCandySwap([50000,10000,30000,20000,40000], [15000,25000,35000,45000,55000]), null, 'Test 78');
test(fairCandySwap([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200], [50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150]), null, 'Test 79');
test(fairCandySwap([100, 200, 300], [50, 100, 150, 200, 250, 300]), null, 'Test 80');
test(fairCandySwap([5, 10, 15, 20, 25, 30, 35], [7, 14, 21, 28, 35, 42, 49]), null, 'Test 81');
test(fairCandySwap([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000], [500, 1500, 2500, 3500, 4500, 5500, 6500, 7500, 8500, 9500, 10500, 11500, 12500, 13500]), [4000, 500], 'Test 82');
test(fairCandySwap([8, 16, 24, 32, 40, 48, 56, 64, 72, 80], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), null, 'Test 83');
test(fairCandySwap([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), [30, 5], 'Test 84');
test(fairCandySwap([1000, 2000, 3000, 4000], [1500, 2500, 3500, 500]), null, 'Test 85');
test(fairCandySwap([100000, 200000, 300000, 400000, 500000], [50000, 150000, 250000, 350000, 450000]), null, 'Test 86');
test(fairCandySwap([1000, 2000, 3000, 4000, 5000], [500, 1500, 2500, 3500, 4500]), null, 'Test 87');
test(fairCandySwap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), null, 'Test 88');
test(fairCandySwap([10,20,30,40,50], [5,15,25,35,45]), null, 'Test 89');
test(fairCandySwap([15, 25, 35, 45, 55, 65], [14, 24, 34, 44, 54, 64]), null, 'Test 90');
test(fairCandySwap([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]), null, 'Test 91');
test(fairCandySwap([10, 20, 30, 40, 50], [15, 25, 35, 45, 55]), null, 'Test 92');
test(fairCandySwap([1, 10, 100, 1000, 10000], [2, 20, 200, 2000, 20000]), null, 'Test 93');

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
