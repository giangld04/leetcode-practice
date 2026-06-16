// Test: 1674. Minimum Moves To Make Array Complementary
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { minMoves } = require("./solution");

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

console.log("\n1674. Minimum Moves To Make Array Complementary\n");

test(minMoves([3,3,3,3], 5), 0, 'Test 1');
test(minMoves([1,1,1,1], 10), 0, 'Test 2');
test(minMoves([5,3,5,3], 10), 0, 'Test 3');
test(minMoves([1,5,5,1], 5), 2, 'Test 4');
test(minMoves([1,2,2,1], 2), 2, 'Test 5');
test(minMoves([100000,1,100000,1], 100000), 0, 'Test 6');
test(minMoves([100000,1,1,100000], 100000), 2, 'Test 7');
test(minMoves([100000,1,1,100000,1,1,100000,1], 100000), 1, 'Test 8');
test(minMoves([3,5,5,3], 5), 1, 'Test 9');
test(minMoves([1,1,1,1], 1), 0, 'Test 10');
test(minMoves([1,5,9,13], 15), 0, 'Test 11');
test(minMoves([1,3,5,7], 10), 0, 'Test 12');
test(minMoves([2,5,6,5,2,2], 7), 2, 'Test 13');
test(minMoves([1,9,9,1,1,9,9,1], 9), 4, 'Test 14');
test(minMoves([10,1,10,1], 10), 0, 'Test 15');
test(minMoves([100000,100000,100000,100000], 100000), 0, 'Test 16');
test(minMoves([10,15,15,10], 20), 1, 'Test 17');
test(minMoves([2,3,4,3,2,1], 6), 2, 'Test 18');
test(minMoves([1,9,9,1], 10), 2, 'Test 19');
test(minMoves([1,2,3,4,5,6], 6), 0, 'Test 20');
test(minMoves([10,1,1,10], 10), 2, 'Test 21');
test(minMoves([5,5,5,5], 10), 0, 'Test 22');
test(minMoves([50000,50000,50000,50000], 100000), 0, 'Test 23');
test(minMoves([1,2,3,4,5,6], 7), 0, 'Test 24');
test(minMoves([5,5,5,5,5,5], 5), 0, 'Test 25');
test(minMoves([1,3,2,4], 5), 0, 'Test 26');
test(minMoves([1,2,4,3], 4), 1, 'Test 27');
test(minMoves([5,5,5,5], 5), 0, 'Test 28');
test(minMoves([3,3,3,3,3,3], 6), 0, 'Test 29');
test(minMoves([3,3,3,3,3,3], 3), 0, 'Test 30');
test(minMoves([1,2,1,2], 2), 0, 'Test 31');
test(minMoves([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 20), 0, 'Test 32');
test(minMoves([1, 100000, 50000, 50000, 100000, 1], 100000), 3, 'Test 33');
test(minMoves([1, limit, 1, limit, 1, limit, 1, limit, 1, limit, 1, limit], limit), Error: Solution.minMoves[] missing 2 required positional arguments: 'nums' and 'limit', 'Test 34');
test(minMoves([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 0, 'Test 35');
test(minMoves([30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000], 60000), 0, 'Test 36');
test(minMoves([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 6), 0, 'Test 37');
test(minMoves([1, 3, 5, 7, 9, 11, 13, 15], 16), 0, 'Test 38');
test(minMoves([25000, 25000, 25000, 25000, 25000, 25000, 25000, 25000], 50000), 0, 'Test 39');
test(minMoves([100000, 1, 2, 99999, 3, 99998, 4, 99997], 100000), 3, 'Test 40');
test(minMoves([1, 100000, 1, 100000, 2, 99999, 2, 99999], 100000), 2, 'Test 41');
test(minMoves([100000, 1, 100000, 1, 100000, 1, 100000, 1, 100000, 1, 100000, 1], 100000), 0, 'Test 42');
test(minMoves([1, 100000, 100000, 1], 100000), 2, 'Test 43');
test(minMoves([10000, 90000, 20000, 80000, 30000, 70000], 100000), 2, 'Test 44');
test(minMoves([25000, 25001, 25002, 24999, 25003, 24998, 25004, 24997], 50000), 3, 'Test 45');
test(minMoves([30000, 70000, 40000, 60000, 50000, 50000, 40000, 60000, 30000, 70000], 100000), 0, 'Test 46');
test(minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 30), 0, 'Test 47');
test(minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21), 0, 'Test 48');
test(minMoves([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100), 0, 'Test 49');
test(minMoves([99999, 1, 99999, 1, 99999, 1], 100000), 0, 'Test 50');
test(minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12), 0, 'Test 51');
test(minMoves([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 10), 0, 'Test 52');
test(minMoves([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 0, 'Test 53');
test(minMoves([10, 20, 30, 40, 50, 60, 70, 80], 80), 0, 'Test 54');
test(minMoves([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100000), 0, 'Test 55');
test(minMoves([10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10, 1], 100), 5, 'Test 56');
test(minMoves([1, 99999, 99999, 1, 1, 99999, 99999, 1, 1, 99999, 99999, 1], 100000), 6, 'Test 57');
test(minMoves([1, 1, 2, 2, 3, 3, 4, 4], 4), 0, 'Test 58');
test(minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 0, 'Test 59');
test(minMoves([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 30), 0, 'Test 60');
test(minMoves([5, 3, 5, 3, 2, 8, 8, 2], 10), 3, 'Test 61');
test(minMoves([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 0, 'Test 62');
test(minMoves([2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 6), 0, 'Test 63');
test(minMoves([limit, limit, limit, limit, limit, limit, limit, limit, limit, limit], limit), Error: Solution.minMoves[] missing 2 required positional arguments: 'nums' and 'limit', 'Test 64');
test(minMoves([1, 2, 3, 3, 2, 1, 4, 4, 3, 3, 2, 2, 1, 1], 5), 4, 'Test 65');
test(minMoves([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 0, 'Test 66');
test(minMoves([25, 75, 25, 75, 25, 75, 25, 75, 25, 75, 25, 75, 25, 75, 25, 75], 100), 0, 'Test 67');
test(minMoves([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 100), 0, 'Test 68');
test(minMoves([50000, 1, 50000, 1, 50000, 1, 50000, 1], 100000), 0, 'Test 69');
test(minMoves([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42], 84), 0, 'Test 70');
test(minMoves([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 71');
test(minMoves([1, 100000, 1, 100000], 100000), 0, 'Test 72');
test(minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 15), 0, 'Test 73');
test(minMoves([10000, 20000, 30000, 40000, 40000, 30000, 20000, 10000], 50000), 3, 'Test 74');
test(minMoves([99999, 1, 1, 99999], 100000), 2, 'Test 75');
test(minMoves([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6], 10), 6, 'Test 76');
test(minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 13), 0, 'Test 77');
test(minMoves([100, 200, 300, 400, 500, 400, 300, 200, 100], 500), 3, 'Test 78');
test(minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 10), Error: list index out of range, 'Test 79');
test(minMoves([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1], 20), 10, 'Test 80');
test(minMoves([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 0, 'Test 81');
test(minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 11), 9, 'Test 82');
test(minMoves([90000, 10000, 80000, 20000, 70000, 30000, 60000, 40000], 100000), 3, 'Test 83');
test(minMoves([1, 5, 9, 13, 17, 21], 22), 0, 'Test 84');
test(minMoves([50000, 40000, 30000, 20000, 10000, 10000, 20000, 30000, 40000, 50000], 100000), 4, 'Test 85');
test(minMoves([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 110), 0, 'Test 86');
test(minMoves([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 5), 0, 'Test 87');
test(minMoves([1, 99999, 99998, 2, 99997, 3, 99996, 4], 100000), 3, 'Test 88');
test(minMoves([2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12), 0, 'Test 89');
test(minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20), 0, 'Test 90');
test(minMoves([100000, 1, 99999, 2, 99998, 3, 99997, 4, 99996, 5], 100000), 4, 'Test 91');
test(minMoves([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 0, 'Test 92');
test(minMoves([50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000], 50000), 0, 'Test 93');
test(minMoves([99999, 99998, 1, 2, 3, 4, 5, 6], 100000), 3, 'Test 94');
test(minMoves([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 5), 0, 'Test 95');
test(minMoves([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 0, 'Test 96');
test(minMoves([50, 51, 52, 49, 53, 48, 54, 47], 100), 3, 'Test 97');
test(minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 16), 0, 'Test 98');
test(minMoves([1, 99999, 2, 99998, 3, 99997, 4, 99996], 100000), 3, 'Test 99');
test(minMoves([100000, 1, 2, 99998, 3, 99997, 4, 99996], 100000), 3, 'Test 100');
test(minMoves([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], 100000), 0, 'Test 101');
test(minMoves([1, 2, 3, 2, 3, 2, 3, 2, 3, 2], 5), 1, 'Test 102');
test(minMoves([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23], 25), 0, 'Test 103');
test(minMoves([10000, 90000, 10000, 90000, 10000, 90000, 10000, 90000], 100000), 0, 'Test 104');
test(minMoves([10, 20, 30, 40, 40, 30, 20, 10], 50), 3, 'Test 105');
test(minMoves([10, 10, 20, 20, 30, 30, 40, 40], 50), 0, 'Test 106');
test(minMoves([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 110), 9, 'Test 107');
test(minMoves([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 21), 0, 'Test 108');
test(minMoves([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 15), 0, 'Test 109');
test(minMoves([99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999], 100000), 0, 'Test 110');
test(minMoves([3, 7, 11, 11, 7, 3], 14), 2, 'Test 111');
test(minMoves([1, 3, 5, 7, 9, 11, 13, 15], 15), 0, 'Test 112');
test(minMoves([100, 200, 300, 400, 500, 600, 700, 800], 900), 0, 'Test 113');
test(minMoves([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 20), 0, 'Test 114');
test(minMoves([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 0, 'Test 115');

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
