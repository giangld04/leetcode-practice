// Test: 1760. Minimum Limit Of Balls In A Bag
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { minimumSize } = require("./solution");

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

console.log("\n1760. Minimum Limit Of Balls In A Bag\n");

test(minimumSize([5,5,5,5,5], 10), 2, 'Test 1');
test(minimumSize([5,5,5,5,5,5,5,5,5,5], 9), 5, 'Test 2');
test(minimumSize([1000000000], 1), 500000000, 'Test 3');
test(minimumSize([3,3,3,3], 0), 3, 'Test 4');
test(minimumSize([1,2,3,4,5], 5), 2, 'Test 5');
test(minimumSize([100,100,100,100], 10), 34, 'Test 6');
test(minimumSize([1,1,1,1,1], 0), 1, 'Test 7');
test(minimumSize([1000000000], 999999999), 1, 'Test 8');
test(minimumSize([1000000000], 1000000000), 1, 'Test 9');
test(minimumSize([7,17], 2), 7, 'Test 10');
test(minimumSize([9], 2), 3, 'Test 11');
test(minimumSize([10,20,30,40,50], 10), 10, 'Test 12');
test(minimumSize([2,4,8,2], 4), 2, 'Test 13');
test(minimumSize([1000000000, 1000000000], 1), 1000000000, 'Test 14');
test(minimumSize([10,10,10], 6), 4, 'Test 15');
test(minimumSize([10,10,10], 3), 5, 'Test 16');
test(minimumSize([7,14,21,28], 3), 14, 'Test 17');
test(minimumSize([1,1,1,1], 2), 1, 'Test 18');
test(minimumSize([1,2,3,4,5,6,7,8,9,10], 5), 5, 'Test 19');
test(minimumSize([1,1,1,1,1,1,1,1,1,1], 5), 1, 'Test 20');
test(minimumSize([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 50, 'Test 21');
test(minimumSize([1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000], 9), 100000000, 'Test 22');
test(minimumSize([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 25), 180, 'Test 23');
test(minimumSize([1, 10, 100, 1000, 10000, 100000], 30), 3449, 'Test 24');
test(minimumSize([1000000000] * 50000 + [500000000] * 50000, 50000), Error: Solution.minimumSize[] missing 1 required positional argument: 'nums', 'Test 25');
test(minimumSize([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 29), 1, 'Test 26');
test(minimumSize([1000000000, 1000000000, 1000000000], 3), 500000000, 'Test 27');
test(minimumSize([999999999, 1], 1), 500000000, 'Test 28');
test(minimumSize([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 9), 100, 'Test 29');
test(minimumSize([1000000000, 500000000, 250000000, 125000000], 10), 142857143, 'Test 30');
test(minimumSize([999, 999, 999, 999, 999, 999, 999, 999, 999, 999], 5), 999, 'Test 31');
test(minimumSize([1000000000, 500000000, 250000000, 125000000], 3), 333333334, 'Test 32');
test(minimumSize([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000], 5), 250000000, 'Test 33');
test(minimumSize([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 20), 44, 'Test 34');
test(minimumSize([10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 9), 100000000, 'Test 35');
test(minimumSize([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 15), 10, 'Test 36');
test(minimumSize([999999999, 999999998, 999999997, 999999996, 999999995], 10), 333333333, 'Test 37');
test(minimumSize([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 10), 2, 'Test 38');
test(minimumSize([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 14), 5, 'Test 39');
test(minimumSize([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 50), 18, 'Test 40');
test(minimumSize([1000000000], 0), 1000000000, 'Test 41');
test(minimumSize([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 50), 3, 'Test 42');
test(minimumSize([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000], 19), 1000, 'Test 43');
test(minimumSize([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000], 10), 500, 'Test 44');
test(minimumSize([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 9), 50, 'Test 45');
test(minimumSize([1000000000, 500000000, 250000000], 3), 333333334, 'Test 46');
test(minimumSize([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 10), 2, 'Test 47');
test(minimumSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 3, 'Test 48');
test(minimumSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 30), 3, 'Test 49');
test(minimumSize([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 1, 'Test 50');
test(minimumSize([1000000000] * 100000, 1000000000), Error: Solution.minimumSize[] missing 1 required positional argument: 'nums', 'Test 51');
test(minimumSize([1, 1000000000, 1], 1000000000), 1, 'Test 52');
test(minimumSize([999999999, 999999999, 999999999, 999999999, 999999999], 5), 500000000, 'Test 53');
test(minimumSize([1000000000, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5), 166666667, 'Test 54');
test(minimumSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 19), 7, 'Test 55');
test(minimumSize([999999999, 999999999, 999999999, 999999999, 999999999], 10), 333333333, 'Test 56');
test(minimumSize([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000], 50), 10000, 'Test 57');
test(minimumSize([1, 1, 1, 1, 1000000000], 999999), 1000, 'Test 58');
test(minimumSize([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 30), 6, 'Test 59');
test(minimumSize([1000000000, 1000000000, 1000000000], 2999999997), 1, 'Test 60');
test(minimumSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20), 2, 'Test 61');
test(minimumSize([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 20), 20, 'Test 62');
test(minimumSize([999999999, 999999999, 999999999, 999999999, 999999999, 999999999, 999999999, 999999999, 999999999, 999999999], 4999999995), 2, 'Test 63');
test(minimumSize([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 10), 142857143, 'Test 64');
test(minimumSize([500000000, 500000000, 500000000, 500000000, 500000000], 1000000), 2500, 'Test 65');
test(minimumSize([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 15), 7, 'Test 66');
test(minimumSize([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 50), 9, 'Test 67');
test(minimumSize([500000000, 500000000, 500000000, 500000000, 500000000], 10), 166666667, 'Test 68');
test(minimumSize([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 30), 50, 'Test 69');
test(minimumSize([1] * 100000, 99999), Error: Solution.minimumSize[] missing 1 required positional argument: 'nums', 'Test 70');
test(minimumSize([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 45), 10, 'Test 71');
test(minimumSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 4, 'Test 72');
test(minimumSize([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 20), 5, 'Test 73');
test(minimumSize([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 15), 114, 'Test 74');
test(minimumSize([999999999, 999999999, 999999999, 999999999], 4), 500000000, 'Test 75');
test(minimumSize([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 20), 5, 'Test 76');
test(minimumSize([2, 3, 6, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 100), 6, 'Test 77');
test(minimumSize([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768], 50), 1171, 'Test 78');
test(minimumSize([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 20), 19, 'Test 79');
test(minimumSize([100, 200, 300, 400, 500], 15), 84, 'Test 80');
test(minimumSize([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 10), 74, 'Test 81');
test(minimumSize([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 1, 'Test 82');
test(minimumSize([999999999, 999999998, 999999997], 2), 999999997, 'Test 83');
test(minimumSize([100, 200, 300, 400, 500], 50), 29, 'Test 84');
test(minimumSize([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 5, 'Test 85');
test(minimumSize([1000000000] * 100000, 50000), Error: Solution.minimumSize[] missing 1 required positional argument: 'nums', 'Test 86');
test(minimumSize([999999999, 999999999, 999999999, 999999999, 999999999, 999999999], 10), 500000000, 'Test 87');
test(minimumSize([1000000, 1000000, 1000000, 1000000, 1000000], 5), 500000, 'Test 88');
test(minimumSize([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 9999999990), 2, 'Test 89');
test(minimumSize([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 45), 100, 'Test 90');
test(minimumSize([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000], 10), 10000000, 'Test 91');
test(minimumSize([500000000, 500000000, 500000000, 500000000], 3), 500000000, 'Test 92');
test(minimumSize([1000000000] * 100000, 100000), Error: Solution.minimumSize[] missing 1 required positional argument: 'nums', 'Test 93');
test(minimumSize([100000, 200000, 300000, 400000, 500000], 50), 28572, 'Test 94');
test(minimumSize([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 100), 500, 'Test 95');
test(minimumSize([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 20), 6, 'Test 96');
test(minimumSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0), 10, 'Test 97');
test(minimumSize([1000000000, 1000000000, 1000000000], 2), 1000000000, 'Test 98');
test(minimumSize([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 30), 1, 'Test 99');
test(minimumSize([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 10), 350, 'Test 100');
test(minimumSize([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 9), 8, 'Test 101');
test(minimumSize([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 25), 9, 'Test 102');
test(minimumSize([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9), 1, 'Test 103');
test(minimumSize([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 7, 'Test 104');

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
