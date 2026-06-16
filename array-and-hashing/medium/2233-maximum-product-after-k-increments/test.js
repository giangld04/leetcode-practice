// Test: 2233. Maximum Product After K Increments
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { maximumProduct } = require("./solution");

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

console.log("\n2233. Maximum Product After K Increments\n");

test(maximumProduct([5,5,5,5,5], 5), 7776, 'Test 1');
test(maximumProduct([1,2,3,4], 3), 108, 'Test 2');
test(maximumProduct([100000,100000,100000], 300000), 944000007, 'Test 3');
test(maximumProduct([1,2,3,4,5,6,7,8,9,10], 10), 94500000, 'Test 4');
test(maximumProduct([0,4], 5), 20, 'Test 5');
test(maximumProduct([0,0,0,0], 10), 36, 'Test 6');
test(maximumProduct([1,2,3,4,5], 3), 540, 'Test 7');
test(maximumProduct([5,5,5,5], 4), 1296, 'Test 8');
test(maximumProduct([1,1,1,1,1], 10), 243, 'Test 9');
test(maximumProduct([1,2,3,4,5,6,7,8,9,10], 20), 508243680, 'Test 10');
test(maximumProduct([9,9,9,9], 8), 14641, 'Test 11');
test(maximumProduct([1000000], 1000000), 2000000, 'Test 12');
test(maximumProduct([10,10,10], 5), 1584, 'Test 13');
test(maximumProduct([6,3,3,2], 2), 216, 'Test 14');
test(maximumProduct([0,0,0,0], 1), 0, 'Test 15');
test(maximumProduct([1,2,3], 6), 64, 'Test 16');
test(maximumProduct([1000000,1000000], 1000000), 999984257, 'Test 17');
test(maximumProduct([100000,100000,100000], 500000), 830133340, 'Test 18');
test(maximumProduct([10,20,30], 15), 15180, 'Test 19');
test(maximumProduct([1,2,3], 3), 27, 'Test 20');
test(maximumProduct([1,1,1,1], 10), 144, 'Test 21');
test(maximumProduct([1, 10, 100, 1000, 10000, 100000, 1000000], 500000), 800515855, 'Test 22');
test(maximumProduct([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 10000), 500226898, 'Test 23');
test(maximumProduct([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 55), 937424426, 'Test 24');
test(maximumProduct([100,100,100,100,100], 250), 937499475, 'Test 25');
test(maximumProduct([1, 2, 3, 4, 5, 6], 10), 18750, 'Test 26');
test(maximumProduct([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 200), 138022365, 'Test 27');
test(maximumProduct([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 1000), 24010000, 'Test 28');
test(maximumProduct([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 100), 858490890, 'Test 29');
test(maximumProduct([1, 1000000], 999999), 999993007, 'Test 30');
test(maximumProduct([9, 8, 7, 6, 5, 4, 3, 2, 1], 45), 1000000000, 'Test 31');
test(maximumProduct([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 50), 836777896, 'Test 32');
test(maximumProduct([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 100), 385000049, 'Test 33');
test(maximumProduct([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 500), 514152040, 'Test 34');
test(maximumProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20), 508243680, 'Test 35');
test(maximumProduct([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 50), 209024971, 'Test 36');
test(maximumProduct([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 48999587, 'Test 37');
test(maximumProduct([1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 20), 248832, 'Test 38');
test(maximumProduct([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 100), 4900, 'Test 39');
test(maximumProduct([100, 200, 300, 400, 500], 1000), 999781257, 'Test 40');
test(maximumProduct([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 100), 460935215, 'Test 41');
test(maximumProduct([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 100), 414469870, 'Test 42');
test(maximumProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50), 60466176, 'Test 43');
test(maximumProduct([1, 2, 2, 2, 2, 2, 2, 2, 2, 2], 20), 786432, 'Test 44');
test(maximumProduct([999999, 999998, 999997, 999996], 10000), 58871243, 'Test 45');
test(maximumProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 913512597, 'Test 46');
test(maximumProduct([9,8,7,6,5,4,3,2,1,0], 50), 904899965, 'Test 47');
test(maximumProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 200), 340513509, 'Test 48');
test(maximumProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 150), 322349693, 'Test 49');
test(maximumProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100000), 570617225, 'Test 50');
test(maximumProduct([1, 3, 5, 7, 9], 20), 59049, 'Test 51');
test(maximumProduct([3,1,4,1,5,9,2,6,5,3,5], 30), 176221081, 'Test 52');
test(maximumProduct([1,2,3,4,5,6,7,8,9,10], 15), 235146240, 'Test 53');
test(maximumProduct([1, 10, 100, 1000, 10000], 10000), 49587669, 'Test 54');
test(maximumProduct([999999, 999998, 999997, 999996, 999995], 100000), 817421264, 'Test 55');
test(maximumProduct([5,5,5,5,5,5,5,5,5,5], 50), 999999937, 'Test 56');
test(maximumProduct([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8], 200), 73636025, 'Test 57');
test(maximumProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 1024, 'Test 58');
test(maximumProduct([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 50), 608131681, 'Test 59');
test(maximumProduct([1, 3, 5, 7, 9], 25), 100000, 'Test 60');
test(maximumProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 937424426, 'Test 61');
test(maximumProduct([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 50), 73741817, 'Test 62');
test(maximumProduct([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 100), 911705284, 'Test 63');
test(maximumProduct([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 30), 60466176, 'Test 64');
test(maximumProduct([1, 10, 100, 1000, 10000], 100000), 501184279, 'Test 65');
test(maximumProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 20), 1048576, 'Test 66');
test(maximumProduct([1,1,1,1,1,1,1,1,1,1], 100), 937424426, 'Test 67');
test(maximumProduct([1000000, 1000000, 1000000, 1000000], 1000000), 369628908, 'Test 68');
test(maximumProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 235146240, 'Test 69');
test(maximumProduct([1,1000000], 999999), 999993007, 'Test 70');
test(maximumProduct([1], 100000), 100001, 'Test 71');
test(maximumProduct([1000000, 1000000, 1000000, 1000000, 1000000], 1000000), 679146511, 'Test 72');
test(maximumProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000000), 825247221, 'Test 73');
test(maximumProduct([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 500000), 249964681, 'Test 74');
test(maximumProduct([10,20,30,40,50], 100), 312500000, 'Test 75');
test(maximumProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50), 467201634, 'Test 76');
test(maximumProduct([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 100000), 346266448, 'Test 77');
test(maximumProduct([1, 2, 3, 4, 5], 10), 3125, 'Test 78');
test(maximumProduct([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5, 999996], 10000), 607510375, 'Test 79');
test(maximumProduct([1000000, 999999, 999998], 1000000), 448037452, 'Test 80');
test(maximumProduct([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 50), 73741817, 'Test 81');
test(maximumProduct([100000, 100000, 100000, 100000], 300000), 765670962, 'Test 82');
test(maximumProduct([5, 4, 3, 2, 1, 0, 0, 0, 0, 0], 25), 983040, 'Test 83');
test(maximumProduct([10,20,30,40,50], 30), 54000000, 'Test 84');
test(maximumProduct([1000000, 1000000, 1000000], 3000000), 392, 'Test 85');
test(maximumProduct([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1000), 461240680, 'Test 86');
test(maximumProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 105099888, 'Test 87');
test(maximumProduct([9, 8, 7, 6, 5, 4, 3, 2, 1], 30), 191102976, 'Test 88');
test(maximumProduct([1,2,3,4,5], 20), 16807, 'Test 89');
test(maximumProduct([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 25), 550731776, 'Test 90');
test(maximumProduct([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], 100), 47899023, 'Test 91');
test(maximumProduct([1, 1000, 2, 999, 3, 998, 4, 997, 5, 996], 10000), 233771963, 'Test 92');
test(maximumProduct([1, 10, 100, 1000, 10000], 50000), 901582326, 'Test 93');
test(maximumProduct([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 50), 650386593, 'Test 94');
test(maximumProduct([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000), 889950771, 'Test 95');
test(maximumProduct([10, 20, 30, 40, 50], 100), 312500000, 'Test 96');
test(maximumProduct([1000000, 500000, 250000, 125000, 62500], 500000), 180658830, 'Test 97');
test(maximumProduct([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 5000), 881212280, 'Test 98');
test(maximumProduct([100000, 100000, 100000], 300000), 944000007, 'Test 99');
test(maximumProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 785571733, 'Test 100');
test(maximumProduct([1,2,3,4,5], 15), 7776, 'Test 101');

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
