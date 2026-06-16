// Test: 1833. Maximum Ice Cream Bars
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { maxIceCream } = require("./solution");

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

console.log("\n1833. Maximum Ice Cream Bars\n");

test(maxIceCream([1,3,2,4,1], 7), 4, 'Test 1');
test(maxIceCream([10,6,8,7,7,8], 5), 0, 'Test 2');
test(maxIceCream([1], 1), 1, 'Test 3');
test(maxIceCream([1,6,3,1,2,5], 20), 6, 'Test 4');
test(maxIceCream([100000], 100000), 1, 'Test 5');
test(maxIceCream([1,2,3,4,5,6,7,8,9,10], 10), 4, 'Test 6');
test(maxIceCream([1,2,3,4,5,6,7,8,9,10], 55), 10, 'Test 7');
test(maxIceCream([5,5,5,5,5], 15), 3, 'Test 8');
test(maxIceCream([10,20,30,40,50], 100), 4, 'Test 9');
test(maxIceCream([1,2,3,4,5,6,7,8,9,10], 15), 5, 'Test 10');
test(maxIceCream([1,2,3,4,5,6,7,8,9,10], 50), 9, 'Test 11');
test(maxIceCream([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 19), 19, 'Test 12');
test(maxIceCream([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 5, 'Test 13');
test(maxIceCream([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 15), 6, 'Test 14');
test(maxIceCream([5,4,2,3,1,6,7,8,9,10], 15), 5, 'Test 15');
test(maxIceCream([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 250), 6, 'Test 16');
test(maxIceCream([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 25), 12, 'Test 17');
test(maxIceCream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 210), 20, 'Test 18');
test(maxIceCream([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 55), 2, 'Test 19');
test(maxIceCream([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 40), 8, 'Test 20');
test(maxIceCream([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 100), 13, 'Test 21');
test(maxIceCream([100000, 99999, 99998, 99997, 99996, 99995], 599985), 6, 'Test 22');
test(maxIceCream([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 50), 13, 'Test 23');
test(maxIceCream([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5, 999996], 1000000), 5, 'Test 24');
test(maxIceCream([50, 25, 75, 100, 200, 300, 400, 500, 600, 700], 2000), 8, 'Test 25');
test(maxIceCream([1, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 10, 'Test 26');
test(maxIceCream([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 800), 12, 'Test 27');
test(maxIceCream([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5, 999996], 5000000), 9, 'Test 28');
test(maxIceCream([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 10, 'Test 29');
test(maxIceCream([5, 1, 4, 2, 3], 10), 4, 'Test 30');
test(maxIceCream([1000, 500, 200, 100, 50, 20, 10, 5, 2, 1], 1000), 9, 'Test 31');
test(maxIceCream([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 8000), 12, 'Test 32');
test(maxIceCream([5,7,8,6,3,2,1,4,9,10], 20), 5, 'Test 33');
test(maxIceCream([50, 20, 30, 10, 40], 100), 4, 'Test 34');
test(maxIceCream([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1000), 10, 'Test 35');
test(maxIceCream([100000, 100000, 100000, 100000, 100000], 500000), 5, 'Test 36');
test(maxIceCream([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 50), 5, 'Test 37');
test(maxIceCream([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 300), 24, 'Test 38');
test(maxIceCream([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 25), 6, 'Test 39');
test(maxIceCream([99999, 1, 99999, 1, 99999, 1, 99999, 1, 99999, 1], 5), 5, 'Test 40');
test(maxIceCream([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 20), 4, 'Test 41');
test(maxIceCream([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 10, 'Test 42');
test(maxIceCream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 9, 'Test 43');
test(maxIceCream([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 50), 10, 'Test 44');
test(maxIceCream([9, 8, 7, 6, 5, 4, 3, 2, 1], 25), 6, 'Test 45');
test(maxIceCream([10,9,8,7,6,5,4,3,2,1], 55), 10, 'Test 46');
test(maxIceCream([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1500), 5, 'Test 47');
test(maxIceCream([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 15), 7, 'Test 48');
test(maxIceCream([5,1,3,1,2,5,3,1,2,5], 15), 7, 'Test 49');
test(maxIceCream([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 10, 'Test 50');
test(maxIceCream([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 55), 2, 'Test 51');
test(maxIceCream([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 20), 4, 'Test 52');
test(maxIceCream([1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4], 10), 7, 'Test 53');
test(maxIceCream([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 550), 10, 'Test 54');
test(maxIceCream([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 10, 'Test 55');
test(maxIceCream([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 190), 19, 'Test 56');
test(maxIceCream([3, 1, 2, 1, 4, 2, 2, 3, 2, 1, 2, 3, 4, 1, 2], 20), 11, 'Test 57');
test(maxIceCream([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75], 300), 10, 'Test 58');
test(maxIceCream([3,5,7,11,13,17,19,23,29,31], 100), 8, 'Test 59');
test(maxIceCream([1] * 100000, 99999), Error: Solution.maxIceCream[] missing 1 required positional argument: 'costs', 'Test 60');
test(maxIceCream([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 1000), 13, 'Test 61');
test(maxIceCream([100000, 1, 100000, 1, 100000, 1, 100000], 100003), 4, 'Test 62');
test(maxIceCream([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 100), 10, 'Test 63');
test(maxIceCream([5, 1, 3, 2, 4, 1], 10), 4, 'Test 64');
test(maxIceCream([5,3,3,2,7,8,9], 15), 4, 'Test 65');
test(maxIceCream([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], 500000), 9, 'Test 66');
test(maxIceCream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 13, 'Test 67');
test(maxIceCream([99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999], 1000000), 10, 'Test 68');
test(maxIceCream([1,1,1,1,1,1,1,1,1,1], 5), 5, 'Test 69');
test(maxIceCream([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195], 150000), 9, 'Test 70');
test(maxIceCream([100000] * 100000, 5000000000), Error: Solution.maxIceCream[] missing 1 required positional argument: 'costs', 'Test 71');
test(maxIceCream([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 250), 18, 'Test 72');
test(maxIceCream([5,2,3,1,4,2,3,5,1,2], 15), 7, 'Test 73');
test(maxIceCream([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 2500), 6, 'Test 74');
test(maxIceCream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30), 7, 'Test 75');
test(maxIceCream([3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60), 10, 'Test 76');
test(maxIceCream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100), 13, 'Test 77');

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
