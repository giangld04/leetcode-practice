// Test: 2087. Minimum Cost Homecoming Of A Robot In A Grid
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { minCost } = require("./solution");

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

console.log("\n2087. Minimum Cost Homecoming Of A Robot In A Grid\n");

test(minCost([2, 2], [0, 0], [1, 10, 1], [1, 10, 1]), 22, 'Test 1');
test(minCost([3, 3], [0, 0], [10, 20, 30, 40], [5, 15, 25, 35]), 105, 'Test 2');
test(minCost([1, 0], [2, 3], [5, 4, 3], [8, 2, 6, 7]), 18, 'Test 3');
test(minCost([0, 0], [2, 2], [1, 10, 1], [1, 10, 1]), 22, 'Test 4');
test(minCost([0, 0], [2, 2], [1, 1, 1], [1, 1, 1]), 4, 'Test 5');
test(minCost([1, 1], [1, 1], [1, 2, 3], [4, 5, 6]), 0, 'Test 6');
test(minCost([2, 2], [0, 0], [1, 1, 1], [1, 1, 1]), 4, 'Test 7');
test(minCost([0, 1], [2, 1], [3, 2, 1], [4, 5]), 3, 'Test 8');
test(minCost([0, 0], [0, 0], [5], [26]), 0, 'Test 9');
test(minCost([2, 2], [2, 2], [1, 2], [3, 4]), 0, 'Test 10');
test(minCost([3, 2], [0, 0], [1, 2, 3, 4], [5, 6, 7]), 17, 'Test 11');
test(minCost([0, 1], [3, 3], [3, 2, 1, 4], [4, 3, 2, 1]), 10, 'Test 12');
test(minCost([0, 2], [2, 2], [10, 20, 30], [5, 5, 5]), 50, 'Test 13');
test(minCost([2, 3], [1, 1], [1, 1, 1], [1, 1, 1, 1]), 3, 'Test 14');
test(minCost([2, 3], [1, 0], [5, 4, 3], [8, 2, 6, 7]), 20, 'Test 15');
test(minCost([0, 1], [2, 2], [1, 2, 3], [4, 5, 6]), 11, 'Test 16');
test(minCost([3, 3], [7, 7], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 8, 'Test 17');
test(minCost([1, 2], [3, 4], [5, 4, 3, 2], [1, 2, 3, 4, 5]), 14, 'Test 18');
test(minCost([50000, 50000], [0, 0], [i for i in range[100000]], [i for i in range[100000]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 19');
test(minCost([0, 4], [4, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]), 8, 'Test 20');
test(minCost([9, 0], [9, 9], [100], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 540, 'Test 21');
test(minCost([0, 0], [99999, 99999], [1] * 100000, [1] * 100000), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 22');
test(minCost([0, 0], [9, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 99, 'Test 23');
test(minCost([9, 0], [0, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 99, 'Test 24');
test(minCost([2, 3], [2, 3], [5, 4, 3], [8, 2, 6, 7]), 0, 'Test 25');
test(minCost([0, 0], [99999, 99999], list[reversed[range[100000]]], list[reversed[range[100000]]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 26');
test(minCost([5, 2], [0, 0], [1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]), 26, 'Test 27');
test(minCost([50000, 50000], [0, 0], [10000] * 100000, [10000] * 100000), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 28');
test(minCost([2, 1], [2, 1], [1000, 2000, 3000, 4000], [5000, 6000, 7000, 8000, 9000]), 0, 'Test 29');
test(minCost([0, 9], [0, 0], [1], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 450, 'Test 30');
test(minCost([2, 3], [4, 1], [3, 2, 1, 4, 5], [6, 7, 8, 9]), 24, 'Test 31');
test(minCost([1, 2], [3, 4], [1, 2, 3, 4], [4, 3, 2, 1]), 8, 'Test 32');
test(minCost([0, 9], [9, 0], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 1080, 'Test 33');
test(minCost([0, 99999], [99999, 0], [1] * 100000, [1] * 100000), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 34');
test(minCost([5, 2], [2, 5], [10, 20, 30, 40, 50, 60], [60, 50, 40, 30, 20, 10]), 180, 'Test 35');
test(minCost([1, 1], [3, 3], [5, 10, 15, 20], [10, 20, 30, 40]), 105, 'Test 36');
test(minCost([2, 2], [7, 2], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 35, 'Test 37');
test(minCost([2, 4], [2, 4], [100, 200, 300], [100, 200, 300, 400, 500]), 0, 'Test 38');
test(minCost([2, 2], [2, 2], [100, 200, 300, 400, 500], [100, 200, 300, 400, 500]), 0, 'Test 39');
test(minCost([0, 5], [5, 0], [10, 20, 30, 40, 50, 60], [60, 50, 40, 30, 20, 10]), 400, 'Test 40');
test(minCost([1, 2], [4, 3], [100, 200, 300, 400, 500], [10, 20, 30, 40]), 1240, 'Test 41');
test(minCost([0, 3], [3, 0], [10, 20, 30, 40], [5, 6, 7, 8]), 108, 'Test 42');
test(minCost([10, 10], [0, 0], [i for i in range[1, 11]], [i for i in range[10, 0, -1]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 43');
test(minCost([4, 4], [0, 0], [10, 20, 30, 40, 50], [1, 2, 3, 4, 5]), 110, 'Test 44');
test(minCost([1, 3], [4, 1], [2, 3, 5, 7, 11], [13, 17, 19, 23]), 59, 'Test 45');
test(minCost([1000, 1000], [1000, 1000], [i % 100 for i in range[2000]], [i % 100 for i in range[2000]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 46');
test(minCost([5, 0], [0, 5], [1, 1, 1, 1, 1], [1, 2, 3, 4, 5]), 19, 'Test 47');
test(minCost([50000, 50000], [49999, 49999], list[range[100000]], list[range[100000]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 48');
test(minCost([5, 5], [0, 0], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]), 10, 'Test 49');
test(minCost([3, 3], [0, 0], [10000, 9000, 8000, 7000], [6000, 5000, 4000, 3000]), 42000, 'Test 50');
test(minCost([0, 99999], [99999, 0], [x % 10 for x in range[100000]], [x % 10 for x in range[100000]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 51');
test(minCost([5, 5], [0, 0], [10, 20, 30, 40, 50, 60], [6, 5, 4, 3, 2, 1]), 170, 'Test 52');
test(minCost([99999, 99999], [0, 0], [1] * 100000, [1] * 100000), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 53');
test(minCost([0, 5], [5, 0], [2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2]), 20, 'Test 54');
test(minCost([5, 5], [0, 0], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 550, 'Test 55');
test(minCost([1, 1], [10, 10], [10]*11, [5]*11), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 56');
test(minCost([3, 3], [1, 1], [100, 200, 300, 400], [400, 300, 200, 100]), 1000, 'Test 57');
test(minCost([7, 7], [2, 2], [11, 10, 9, 8, 7, 6, 5, 4, 3, 2], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 60, 'Test 58');
test(minCost([5, 5], [0, 0], [9, 8, 7, 6, 5, 4], [3, 2, 1, 4, 5, 6]), 50, 'Test 59');
test(minCost([9, 9], [0, 0], [100]*10, [200]*10), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 60');
test(minCost([0, 9], [9, 0], [i for i in range[10]], [j for j in range[10, 0, -1]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 61');
test(minCost([99999, 0], [0, 99999], [1]*100000, [2]*100000), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 62');
test(minCost([99999, 1], [1, 99999], [1] * 100000, [1] * 100000), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 63');
test(minCost([0, 0], [4, 5], [10, 20, 30, 40, 50], [5, 15, 25, 35, 45, 55]), 315, 'Test 64');
test(minCost([4, 4], [6, 6], [5, 1, 2, 3, 4, 3, 2, 1, 5, 10], [10, 1, 2, 3, 4, 3, 2, 1, 5, 10]), 10, 'Test 65');
test(minCost([3, 3], [0, 0], [10, 20, 30, 40], [40, 30, 20, 10]), 150, 'Test 66');
test(minCost([0, 0], [5, 5], [1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]), 35, 'Test 67');
test(minCost([10, 0], [0, 10], [i for i in range[11]], [j for j in range[11]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 68');
test(minCost([0, 9], [9, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 18, 'Test 69');
test(minCost([3, 2], [0, 0], [1, 1, 1, 1], [1, 1, 1]), 5, 'Test 70');
test(minCost([1, 0], [3, 2], [1, 1, 1, 1], [1, 1, 1]), 4, 'Test 71');
test(minCost([1, 2], [3, 0], [1, 1, 1, 1], [1, 1, 1]), 4, 'Test 72');
test(minCost([0, 0], [4, 4], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 24, 'Test 73');
test(minCost([50000, 50000], [0, 0], list[range[100000]], list[range[100000]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 74');
test(minCost([0, 0], [9, 9], [i for i in range[10]], [j for j in range[10]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 75');
test(minCost([10, 5], [10, 5], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 76');
test(minCost([100, 100], [200, 200], [i % 10 for i in range[301]], [i % 10 for i in range[301]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 77');
test(minCost([0, 0], [3, 3], [1, 2, 3, 4], [1, 1, 1, 1]), 12, 'Test 78');
test(minCost([5, 5], [1, 1], [10, 20, 30, 40, 50, 60], [15, 25, 35, 45, 55, 65]), 300, 'Test 79');
test(minCost([99999, 0], [0, 99999], [x % 10 for x in range[100000]], [x % 10 for x in range[100000]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 80');
test(minCost([50000, 50000], [99999, 99999], [x for x in range[100000]], [x for x in range[100000]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 81');
test(minCost([2, 2], [4, 4], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]), 4, 'Test 82');
test(minCost([0, 4], [4, 0], [1, 2, 3, 4, 5], [5, 10, 15, 20, 25]), 64, 'Test 83');
test(minCost([2, 0], [2, 4], [1, 2, 3], [10, 20, 30, 40, 50]), 140, 'Test 84');
test(minCost([3, 1], [0, 3], [5, 10, 15, 20], [1, 2, 3, 4]), 37, 'Test 85');
test(minCost([5, 5], [5, 5], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]), 0, 'Test 86');
test(minCost([1, 1], [99998, 99998], [1] * 100000, [1] * 100000), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 87');
test(minCost([2, 2], [2, 2], [100, 200, 300], [100, 200, 300]), 0, 'Test 88');
test(minCost([2, 2], [2, 2], [1000, 2000, 3000], [100, 200, 300]), 0, 'Test 89');
test(minCost([5, 5], [0, 0], [10, 20, 30, 40, 50, 60], [5, 15, 25, 35, 45, 55]), 275, 'Test 90');
test(minCost([1, 1], [99999, 99999], [1] * 100000, [1] * 100000), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 91');
test(minCost([0, 3], [4, 0], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 26, 'Test 92');
test(minCost([0, 99999], [99999, 0], [i % 10 for i in range[100000]], [i % 10 for i in range[100000]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 93');
test(minCost([3, 4], [0, 0], [10, 20, 30, 40], [5, 15, 25, 35, 45]), 140, 'Test 94');
test(minCost([4, 4], [4, 4], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 0, 'Test 95');
test(minCost([2, 2], [4, 4], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 12, 'Test 96');
test(minCost([49999, 49999], [0, 0], [x for x in range[100000]], [x for x in range[100000]]), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 97');
test(minCost([4, 4], [1, 1], [5, 10, 15, 20, 25], [1, 2, 3, 4, 5]), 54, 'Test 98');
test(minCost([0, 2], [4, 2], [10, 20, 30, 40, 50], [1, 2, 3]), 140, 'Test 99');
test(minCost([4, 0], [0, 4], [10, 20, 30, 40, 50], [50, 40, 30, 20, 10]), 200, 'Test 100');
test(minCost([0, 5], [5, 0], [1, 1, 1, 1, 1, 1], [99, 98, 97, 96, 95, 94]), 490, 'Test 101');
test(minCost([5, 5], [2, 8], [5]*6, [5]*9), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 102');
test(minCost([0, 50000], [99999, 0], [1] * 100000, [1] * 100000), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 103');
test(minCost([1, 1], [3, 3], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]), 4, 'Test 104');
test(minCost([50, 50], [50, 50], [100] * 100, [100] * 100), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 105');
test(minCost([3, 0], [0, 3], [1, 2, 3, 4], [1, 1, 1, 1, 1]), 9, 'Test 106');
test(minCost([10000, 9999], [9999, 10000], [1] * 10001, [1] * 10001), Error: Solution.minCost[] missing 2 required positional arguments: 'rowCosts' and 'colCosts', 'Test 107');
test(minCost([4, 0], [4, 4], [1, 2, 3, 4, 5], [5, 10, 15, 20, 25]), 70, 'Test 108');
test(minCost([1, 5], [3, 2], [1, 2, 3, 4], [5, 4, 3, 2, 1]), 13, 'Test 109');

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
