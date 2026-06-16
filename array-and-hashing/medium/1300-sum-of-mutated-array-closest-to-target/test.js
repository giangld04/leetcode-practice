// Test: 1300. Sum Of Mutated Array Closest To Target
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { findBestValue } = require("./solution");

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

console.log("\n1300. Sum Of Mutated Array Closest To Target\n");

test(findBestValue([1,2,3,4,5], 11), 3, 'Test 1');
test(findBestValue([5,5,5,5,5], 17), 3, 'Test 2');
test(findBestValue([10,20,30,40,50], 100), 23, 'Test 3');
test(findBestValue([2,3,5], 10), 5, 'Test 4');
test(findBestValue([9,9,9,9,9], 40), 8, 'Test 5');
test(findBestValue([10000,10000,10000], 10000), 3333, 'Test 6');
test(findBestValue([99999,99999,99999,99999], 100000), 25000, 'Test 7');
test(findBestValue([1,2,3,4,5,6,7,8,9,10], 50), 7, 'Test 8');
test(findBestValue([60864,25176,27249,21296,20204], 56803), 11361, 'Test 9');
test(findBestValue([100000,100000,100000], 100000), 33333, 'Test 10');
test(findBestValue([100000,100000,100000], 299999), 100000, 'Test 11');
test(findBestValue([5,5,5,5,5], 20), 4, 'Test 12');
test(findBestValue([10,20,30], 25), 8, 'Test 13');
test(findBestValue([1,1,1,1,1], 3), 1, 'Test 14');
test(findBestValue([1,2,3,4,5], 15), 5, 'Test 15');
test(findBestValue([100000,100000,100000], 250000), 83333, 'Test 16');
test(findBestValue([4,9,3], 10), 3, 'Test 17');
test(findBestValue([1,1,1,1,1], 5), 1, 'Test 18');
test(findBestValue([10000, 20000, 30000, 40000, 50000], 100000), 23333, 'Test 19');
test(findBestValue([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 95000), 9500, 'Test 20');
test(findBestValue([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 100), 7, 'Test 21');
test(findBestValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 0, 'Test 22');
test(findBestValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50), 0, 'Test 23');
test(findBestValue([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 30000), 3429, 'Test 24');
test(findBestValue([1, 1, 2, 2, 2, 3, 3, 4, 4, 5], 20), 2, 'Test 25');
test(findBestValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 1, 'Test 26');
test(findBestValue([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 100), 5, 'Test 27');
test(findBestValue([100,200,300,400,500,600,700,800,900,1000], 4500), 600, 'Test 28');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100), 9, 'Test 29');
test(findBestValue([50000, 25000, 75000, 12500, 100000], 100000), 21875, 'Test 30');
test(findBestValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 150), 13, 'Test 31');
test(findBestValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50), 1, 'Test 32');
test(findBestValue([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 500), 95, 'Test 33');
test(findBestValue([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000], 45000), 4500, 'Test 34');
test(findBestValue([1,2,3,100000,99999,1,2,3,100000,99999], 300000), 74997, 'Test 35');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 200), 16, 'Test 36');
test(findBestValue([10000, 20000, 30000, 40000, 50000], 150000), 50000, 'Test 37');
test(findBestValue([23,1,32,43,54,65,76,87,98,109,120,131,142,153,164], 900), 76, 'Test 38');
test(findBestValue([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 100000), 10000, 'Test 39');
test(findBestValue([23, 56, 78, 90, 12, 34, 56, 78, 90, 12, 34, 56, 78, 90, 12, 34, 56, 78, 90, 12, 34, 56, 78, 90, 12, 34, 56, 78, 90, 12, 34, 56, 78, 90, 12, 34, 56, 78, 90], 1500), 48, 'Test 40');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 40), 5, 'Test 41');
test(findBestValue([99999, 99999, 99999, 99999, 99999], 499995), 99999, 'Test 42');
test(findBestValue([99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999], 500000), 50000, 'Test 43');
test(findBestValue([10, 20, 30, 40, 50], 120), 30, 'Test 44');
test(findBestValue([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 50), 5, 'Test 45');
test(findBestValue([90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000, 1000], 300000), 39833, 'Test 46');
test(findBestValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 1, 'Test 47');
test(findBestValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 550), 100, 'Test 48');
test(findBestValue([1, 1000, 100000, 1000000, 10000000], 5000000), 3898999, 'Test 49');
test(findBestValue([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000], 550000), 100000, 'Test 50');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 6, 'Test 51');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20), 2, 'Test 52');
test(findBestValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 150), 10, 'Test 53');
test(findBestValue([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], 900000), 90000, 'Test 54');
test(findBestValue([5, 15, 25, 35, 45, 55], 150), 35, 'Test 55');
test(findBestValue([1, 10, 100, 1000, 10000], 12345), 10000, 'Test 56');
test(findBestValue([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 4500), 600, 'Test 57');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 210), 20, 'Test 58');
test(findBestValue([100, 150, 200, 250, 300], 800), 183, 'Test 59');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30), 3, 'Test 60');
test(findBestValue([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990], 500000), 50000, 'Test 61');
test(findBestValue([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 150), 7, 'Test 62');
test(findBestValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 75), 10, 'Test 63');
test(findBestValue([1, 100000, 2, 99999, 3, 99998], 100000), 33331, 'Test 64');
test(findBestValue([1, 3, 5, 7, 9], 25), 9, 'Test 65');
test(findBestValue([100000, 99999, 99998, 99997, 99996, 99995], 300000), 50000, 'Test 66');
test(findBestValue([100000, 1, 50000, 25000, 75000], 150000), 41666, 'Test 67');
test(findBestValue([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000], 10000), 567, 'Test 68');
test(findBestValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 250), 27, 'Test 69');
test(findBestValue([10, 10, 20, 20, 30, 30, 40, 40, 50, 50], 200), 23, 'Test 70');
test(findBestValue([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 300), 37, 'Test 71');
test(findBestValue([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 1000), 92, 'Test 72');
test(findBestValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 1500), 95, 'Test 73');
test(findBestValue([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 1000), 50, 'Test 74');
test(findBestValue([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 7500), 600, 'Test 75');
test(findBestValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 200), 12, 'Test 76');
test(findBestValue([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000], 8000), 800, 'Test 77');
test(findBestValue([50, 50, 50, 50, 50, 50], 200), 33, 'Test 78');
test(findBestValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1000), 1, 'Test 79');
test(findBestValue([1000, 2000, 3000, 4000, 5000], 10000), 2333, 'Test 80');
test(findBestValue([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 450), 45, 'Test 81');
test(findBestValue([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 20), 2, 'Test 82');
test(findBestValue([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], 550000), 100000, 'Test 83');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 25), 3, 'Test 84');
test(findBestValue([10, 20, 30, 40, 50], 150), 50, 'Test 85');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 45), 6, 'Test 86');
test(findBestValue([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 5000), 733, 'Test 87');
test(findBestValue([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 225), 30, 'Test 88');
test(findBestValue([50, 51, 52, 53, 54, 55, 56, 57, 58, 59], 550), 59, 'Test 89');
test(findBestValue([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195], 300000), 100000, 'Test 90');
test(findBestValue([50, 40, 30, 20, 10], 150), 50, 'Test 91');
test(findBestValue([1,2,3,4,5,6,7,8,9,10], 45), 6, 'Test 92');
test(findBestValue([1, 10, 100, 1000, 10000], 11111), 10000, 'Test 93');
test(findBestValue([99999,1,99998,2,99997,3,99996,4,99995,5], 499950), 99987, 'Test 94');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50), 3, 'Test 95');
test(findBestValue([100, 200, 300, 400, 500], 1400), 400, 'Test 96');
test(findBestValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 0, 'Test 97');
test(findBestValue([50000, 50000, 50000, 50000, 50000], 200000), 40000, 'Test 98');
test(findBestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55), 10, 'Test 99');
test(findBestValue([1, 100, 1000, 10000, 100000], 12345), 5622, 'Test 100');
test(findBestValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 1000), 92, 'Test 101');
test(findBestValue([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 3000), 343, 'Test 102');
test(findBestValue([50,50,50,50,50,50,50,50,50,50], 200), 20, 'Test 103');
test(findBestValue([1, 2, 3, 4, 5], 15), 5, 'Test 104');
test(findBestValue([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 55000), 10000, 'Test 105');
test(findBestValue([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 25), 2, 'Test 106');
test(findBestValue([5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000], 80000), 9000, 'Test 107');
test(findBestValue([1, 10000, 2, 9999, 3, 9998, 4, 9997, 5, 9996], 50000), 9997, 'Test 108');
test(findBestValue([50000, 40000, 30000, 20000, 10000], 100000), 23333, 'Test 109');
test(findBestValue([10000, 20000, 30000, 40000, 50000], 120000), 30000, 'Test 110');
test(findBestValue([100, 200, 300, 400, 500], 1000), 233, 'Test 111');
test(findBestValue([9, 8, 7, 6, 5, 4, 3, 2, 1], 25), 3, 'Test 112');
test(findBestValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 100), 19, 'Test 113');

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
