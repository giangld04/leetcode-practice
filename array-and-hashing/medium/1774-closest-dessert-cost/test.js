// Test: 1774. Closest Dessert Cost
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { closestCost } = require("./solution");

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

console.log("\n1774. Closest Dessert Cost\n");

test(closestCost([10,20], [1,2,3], 15), 15, 'Test 1');
test(closestCost([5,9], [2,3,7], 15), 15, 'Test 2');
test(closestCost([1,7], [3,4], 10), 10, 'Test 3');
test(closestCost([10,20,30], [1,2,3,4,5], 25), 25, 'Test 4');
test(closestCost([4,8], [1,3], 15), 15, 'Test 5');
test(closestCost([5], [1,2,3], 8), 8, 'Test 6');
test(closestCost([4], [1,2,3], 8), 8, 'Test 7');
test(closestCost([10,20], [5,15,25], 50), 50, 'Test 8');
test(closestCost([1], [1,1,1,1,1,1,1,1,1,1], 10), 10, 'Test 9');
test(closestCost([5,8], [6,1,2], 20), 20, 'Test 10');
test(closestCost([10], [1,2,3,4,5,6,7,8,9,10], 20), 20, 'Test 11');
test(closestCost([2,3], [4,5,100], 18), 17, 'Test 12');
test(closestCost([3,10], [2,5], 9), 8, 'Test 13');
test(closestCost([4, 8, 12, 16, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30), 30, 'Test 14');
test(closestCost([50, 75, 100, 125], [10, 15, 20, 25, 30], 300), 300, 'Test 15');
test(closestCost([1,2,4,8,16,32,64,128,256,512], [1,2,4,8,16,32,64,128,256,512], 1023), 1023, 'Test 16');
test(closestCost([100,200,300,400,500,600,700,800,900,1000], [10,20,30,40,50,60,70,80,90,100], 1500), 1500, 'Test 17');
test(closestCost([1234, 5678, 9101], [111, 222, 333, 444, 555, 666], 10000), 10007, 'Test 18');
test(closestCost([5000, 7500, 10000], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 15000), 15000, 'Test 19');
test(closestCost([1000, 2000, 3000, 4000, 5000], [50, 100, 150, 200, 250, 300, 350], 10000), 7800, 'Test 20');
test(closestCost([15, 25, 35, 45], [2, 4, 6, 8, 10], 50), 49, 'Test 21');
test(closestCost([100, 200, 300, 400], [10, 20, 30, 40, 50], 500), 500, 'Test 22');
test(closestCost([123, 456, 789], [987, 654, 321, 654, 321, 987], 1000), 1086, 'Test 23');
test(closestCost([10, 20, 30, 40, 50], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 150), 150, 'Test 24');
test(closestCost([1000,2000,3000,4000,5000], [100,200,300,400,500,600,700,800,900,1000], 7500), 7500, 'Test 25');
test(closestCost([1,5,10,15], [3,6,9,12], 30), 30, 'Test 26');
test(closestCost([7, 14, 21], [3, 6, 9, 12, 15, 18], 30), 30, 'Test 27');
test(closestCost([500, 1000, 1500], [50, 100, 150, 200, 250, 300, 350, 400, 450, 500], 3000), 3000, 'Test 28');
test(closestCost([1000, 2000], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 5000), 5000, 'Test 29');
test(closestCost([8, 16, 24], [2, 4, 6, 8, 10, 12, 14, 16], 35), 34, 'Test 30');
test(closestCost([1000,2000,3000,4000,5000], [100,200,300,400,500], 12345), 8000, 'Test 31');
test(closestCost([3,6,9,12,15], [1,2,4,8,16,32,64,128,256,512], 1024), 1024, 'Test 32');
test(closestCost([300, 600, 900], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1200), 1200, 'Test 33');
test(closestCost([1, 2, 3, 4, 5], [5, 10, 15, 20, 25], 50), 50, 'Test 34');
test(closestCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 50, 'Test 35');
test(closestCost([100, 200, 300], [50, 75, 100, 125, 150], 600), 600, 'Test 36');
test(closestCost([1, 10000], [5000, 3000, 2000, 1000, 500, 100], 9000), 9001, 'Test 37');
test(closestCost([15, 25, 35], [5, 7, 11, 13, 17], 50), 50, 'Test 38');
test(closestCost([100, 150, 200, 250], [10, 20, 30, 40, 50, 60, 70, 80, 90], 750), 750, 'Test 39');
test(closestCost([999, 1999, 2999], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5000), 3109, 'Test 40');
test(closestCost([1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10], 25), 25, 'Test 41');
test(closestCost([150, 250, 350], [5, 15, 25, 35, 45, 55], 400), 400, 'Test 42');
test(closestCost([2000, 4000, 6000], [100, 200, 300, 400, 500], 7000), 7000, 'Test 43');
test(closestCost([1, 10, 100], [9, 90, 900, 9000], 10000), 10000, 'Test 44');
test(closestCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1000), 1000, 'Test 45');
test(closestCost([7500, 8000], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 15000), 15000, 'Test 46');
test(closestCost([15,25,35,45], [1,2,3,4,5,6,7], 30), 30, 'Test 47');
test(closestCost([10,20,30], [1,1,1,1,1,1,1,1,1,1], 45), 45, 'Test 48');
test(closestCost([1,1,1,1,1], [10,10,10,10,10,10,10,10,10,10], 100), 101, 'Test 49');
test(closestCost([1000, 2000, 3000, 4000, 5000], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 10000), 10000, 'Test 50');
test(closestCost([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100), 100, 'Test 51');
test(closestCost([5000, 7000, 9000], [1000, 2000, 3000, 4000], 18000), 18000, 'Test 52');
test(closestCost([500, 250], [100, 200, 300, 400, 500], 1000), 1000, 'Test 53');
test(closestCost([10000], [10000,10000,10000,10000,10000], 50000), 50000, 'Test 54');
test(closestCost([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 500), 210, 'Test 55');
test(closestCost([100,200,300], [10,20,30,40,50,60], 500), 500, 'Test 56');
test(closestCost([1000, 2000, 3000], [500, 100, 250, 125, 75], 4500), 4500, 'Test 57');
test(closestCost([123, 456, 789], [11, 22, 33, 44, 55, 66, 77, 88, 99], 1000), 998, 'Test 58');
test(closestCost([5,10,15,20,25], [1,1,1,1,1,1,1,1,1,1], 20), 20, 'Test 59');
test(closestCost([9999], [1,2,3,4,5,6,7,8,9,10], 10000), 10000, 'Test 60');
test(closestCost([123,456,789], [987,654,321,123,456,789,100,200,300], 2000), 2000, 'Test 61');
test(closestCost([500, 501, 502], [250, 251, 252, 253], 1000), 1000, 'Test 62');
test(closestCost([777, 888], [55, 44, 33, 22, 11, 1, 2, 3, 4, 5], 2000), 1248, 'Test 63');
test(closestCost([10, 20, 30, 40, 50], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 25), 25, 'Test 64');
test(closestCost([10, 20, 30, 40, 50], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 50, 'Test 65');
test(closestCost([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1], 10), 10, 'Test 66');
test(closestCost([5,10,15,20,25,30,35,40,45,50], [1,1,1,1,1,1,1,1,1,1], 30), 30, 'Test 67');
test(closestCost([123, 456, 789], [11, 22, 33, 44, 55], 700), 698, 'Test 68');
test(closestCost([100, 200, 300, 400], [10, 20, 30, 40, 50, 60], 750), 750, 'Test 69');
test(closestCost([100, 200], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 500), 310, 'Test 70');
test(closestCost([1000, 1001, 1002, 1003], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10000), 1113, 'Test 71');
test(closestCost([23, 45, 67, 89, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 200), 199, 'Test 72');
test(closestCost([5, 10, 15, 20], [1, 3, 5, 7, 9, 11, 13], 40), 40, 'Test 73');
test(closestCost([100, 200, 300, 400, 500], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 1000), 1000, 'Test 74');
test(closestCost([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10], 50), 49, 'Test 75');
test(closestCost([100, 200, 300, 400], [10, 20, 30, 40, 50, 60], 1500), 820, 'Test 76');
test(closestCost([100, 200, 300, 400], [50, 10, 15, 20, 25, 30, 35, 40, 45, 55], 1500), 1050, 'Test 77');
test(closestCost([1,2,3,4,5], [10,20,30,40,50,60,70,80,90,100], 100), 101, 'Test 78');
test(closestCost([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], [500,1500,2500,3500], 7500), 7500, 'Test 79');
test(closestCost([2000, 3000, 4000, 5000], [50, 100, 150, 200, 250], 8500), 6500, 'Test 80');
test(closestCost([50,100,150,200,250,300], [5,10,15,20,25,30], 750), 510, 'Test 81');
test(closestCost([100, 200], [50, 25, 10, 5, 1], 300), 300, 'Test 82');
test(closestCost([1,1,1,1,1,1,1,1,1,1], [100,200,300,400,500,600,700,800,900,1000], 5000), 5001, 'Test 83');
test(closestCost([1000, 2000, 3000], [500, 1000, 1500, 2000, 2500], 6000), 6000, 'Test 84');
test(closestCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 50, 'Test 85');
test(closestCost([800, 1600, 2400], [100, 200, 300, 400, 500, 600], 3000), 3000, 'Test 86');
test(closestCost([5000, 10000], [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000], 20000), 20000, 'Test 87');
test(closestCost([1000, 2000, 3000], [500, 100, 250, 150, 200], 4500), 4500, 'Test 88');
test(closestCost([4,8,12,16,20], [1,2,3,4,5,6,7,8,9,10], 45), 45, 'Test 89');
test(closestCost([1, 2, 3, 4, 5], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 500), 501, 'Test 90');
test(closestCost([50, 60, 70, 80, 90], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 150), 150, 'Test 91');
test(closestCost([100,200,300], [50,75,100,125,150], 500), 500, 'Test 92');
test(closestCost([5000], [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000], 20000), 20000, 'Test 93');
test(closestCost([10, 20], [1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1000), 1000, 'Test 94');
test(closestCost([10,20,30,40,50,60,70,80,90,100], [1,2,3,4,5,6,7,8,9,10], 500), 210, 'Test 95');
test(closestCost([1,2,3,4,5,6,7,8,9,10], [9999], 10000), 10000, 'Test 96');
test(closestCost([5, 10], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 15), 15, 'Test 97');
test(closestCost([500, 1000, 1500], [5, 10, 15, 20, 25, 30, 35, 40], 2000), 1860, 'Test 98');
test(closestCost([999, 1000], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 4000), 4000, 'Test 99');

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
