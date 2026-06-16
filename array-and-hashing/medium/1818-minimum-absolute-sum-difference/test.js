// Test: 1818. Minimum Absolute Sum Difference
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { minAbsoluteSumDiff } = require("./solution");

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

console.log("\n1818. Minimum Absolute Sum Difference\n");

test(minAbsoluteSumDiff([100000, 100000, 100000], [1, 1, 1]), 299997, 'Test 1');
test(minAbsoluteSumDiff([1,7,5], [2,3,5]), 3, 'Test 2');
test(minAbsoluteSumDiff([5,5,5,5], [1,1,1,1]), 16, 'Test 3');
test(minAbsoluteSumDiff([100000,100000,100000], [1,1,1]), 299997, 'Test 4');
test(minAbsoluteSumDiff([1,10,4,4,2,7], [9,3,5,1,7,4]), 20, 'Test 5');
test(minAbsoluteSumDiff([2,4,6,8,10], [2,4,6,8,10]), 0, 'Test 6');
test(minAbsoluteSumDiff([1,2,3], [6,5,4]), 7, 'Test 7');
test(minAbsoluteSumDiff([1,2,3,4,5], [5,4,3,2,1]), 8, 'Test 8');
test(minAbsoluteSumDiff([100000, 1, 100000], [1, 100000, 1]), 199998, 'Test 9');
test(minAbsoluteSumDiff([1, 100000, 1, 100000, 1, 100000, 1, 100000, 1, 100000], [100000, 1, 100000, 1, 100000, 1, 100000, 1, 100000, 1]), 899991, 'Test 10');
test(minAbsoluteSumDiff([100000, 99999, 99998, 99997], [1, 2, 3, 4]), 399981, 'Test 11');
test(minAbsoluteSumDiff([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 25, 'Test 12');
test(minAbsoluteSumDiff([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1]), 15, 'Test 13');
test(minAbsoluteSumDiff([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 999881, 'Test 14');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991]), 999945, 'Test 15');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 16');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 90, 'Test 17');
test(minAbsoluteSumDiff([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 945, 'Test 18');
test(minAbsoluteSumDiff([1,3,5,7,9], [2,4,6,8,10]), 5, 'Test 19');
test(minAbsoluteSumDiff([100000, 99999, 99998, 99997, 99996], [1, 2, 3, 4, 5]), 499971, 'Test 20');
test(minAbsoluteSumDiff([100000, 100000, 100000, 100000], [1, 100000, 100000, 1]), 199998, 'Test 21');
test(minAbsoluteSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 0, 'Test 22');
test(minAbsoluteSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 41, 'Test 23');
test(minAbsoluteSumDiff([50000, 50000, 50000, 50000, 50000], [1, 2, 3, 4, 5]), 249985, 'Test 24');
test(minAbsoluteSumDiff([1, 100000, 2, 99999, 3, 99998, 4, 99997, 5, 99996], [100000, 1, 99999, 2, 99998, 3, 99997, 4, 99996, 5]), 899951, 'Test 25');
test(minAbsoluteSumDiff([100000, 1, 50000, 75000], [50000, 99999, 1, 100000]), 125000, 'Test 26');
test(minAbsoluteSumDiff([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 10, 'Test 27');
test(minAbsoluteSumDiff([1, 10, 20, 30, 40, 50, 60, 70, 80, 90], [90, 80, 70, 60, 50, 40, 30, 20, 10, 1]), 409, 'Test 28');
test(minAbsoluteSumDiff([1,100000,2,99999,3,99998,4,99997,5,99996], [100000,1,99999,2,99998,3,99997,4,99996,5]), 899951, 'Test 29');
test(minAbsoluteSumDiff([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [45, 40, 35, 30, 25, 20, 15, 10, 5, 1]), 204, 'Test 30');
test(minAbsoluteSumDiff([50000, 50000, 50000, 50000, 50000], [1, 1, 1, 1, 1]), 249995, 'Test 31');
test(minAbsoluteSumDiff([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [1, 3, 1, 3, 1, 3, 1, 3, 1, 3]), 10, 'Test 32');
test(minAbsoluteSumDiff([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [1, 3, 6, 8, 11, 13, 16, 18, 21, 23]), 130, 'Test 33');
test(minAbsoluteSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 98, 'Test 34');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999]), 999980, 'Test 35');
test(minAbsoluteSumDiff([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20]), 10, 'Test 36');
test(minAbsoluteSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000]), 499936, 'Test 37');
test(minAbsoluteSumDiff([10, 20, 30, 40, 50], [1, 2, 3, 4, 5]), 95, 'Test 38');
test(minAbsoluteSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 36, 'Test 39');
test(minAbsoluteSumDiff([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 16, 'Test 40');
test(minAbsoluteSumDiff([100000, 100000, 100000], [90000, 90000, 90000]), 30000, 'Test 41');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]), 210, 'Test 42');
test(minAbsoluteSumDiff([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [150, 250, 350, 450, 550, 650, 750, 850, 950, 1050]), 500, 'Test 43');
test(minAbsoluteSumDiff([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 41, 'Test 44');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 10, 'Test 45');
test(minAbsoluteSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 46');
test(minAbsoluteSumDiff([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 50, 'Test 47');
test(minAbsoluteSumDiff([9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9]), 32, 'Test 48');
test(minAbsoluteSumDiff([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 41, 'Test 49');
test(minAbsoluteSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 181, 'Test 50');
test(minAbsoluteSumDiff([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [20, 18, 16, 14, 12, 10, 8, 6, 4, 2]), 82, 'Test 51');
test(minAbsoluteSumDiff([10, 20, 30, 40, 50], [5, 15, 25, 35, 45]), 25, 'Test 52');
test(minAbsoluteSumDiff([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]), 8, 'Test 53');
test(minAbsoluteSumDiff([1, 10, 100, 1000, 10000, 100000], [100000, 10000, 1000, 100, 10, 1]), 121779, 'Test 54');
test(minAbsoluteSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 486, 'Test 55');
test(minAbsoluteSumDiff([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 410, 'Test 56');
test(minAbsoluteSumDiff([100,100,100,100,100], [10,90,110,10,90]), 210, 'Test 57');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 999990, 'Test 58');
test(minAbsoluteSumDiff([100000, 100000, 100000, 100000], [1, 1, 1, 1]), 399996, 'Test 59');
test(minAbsoluteSumDiff([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), 50, 'Test 60');
test(minAbsoluteSumDiff([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]), 67, 'Test 61');
test(minAbsoluteSumDiff([1, 10, 100, 1000, 10000], [2, 11, 101, 1001, 10001]), 5, 'Test 62');
test(minAbsoluteSumDiff([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 405, 'Test 63');
test(minAbsoluteSumDiff([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 5, 'Test 64');
test(minAbsoluteSumDiff([5,5,5,5,5,5,5,5,5,5], [1,2,3,4,5,6,7,8,9,10]), 25, 'Test 65');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]), 549990, 'Test 66');
test(minAbsoluteSumDiff([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 999891, 'Test 67');
test(minAbsoluteSumDiff([100000, 200000, 300000, 400000, 500000], [1, 2, 3, 4, 5]), 1099985, 'Test 68');
test(minAbsoluteSumDiff([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), 20, 'Test 69');
test(minAbsoluteSumDiff([99999, 99998, 99997, 99996, 99995], [1, 100, 200, 300, 400]), 498980, 'Test 70');
test(minAbsoluteSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), 9, 'Test 71');
test(minAbsoluteSumDiff([50000, 40000, 30000, 20000, 10000], [1, 2, 3, 4, 5]), 109985, 'Test 72');
test(minAbsoluteSumDiff([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 171, 'Test 73');
test(minAbsoluteSumDiff([100000, 90000, 80000, 70000, 60000], [50000, 40000, 30000, 20000, 10000]), 210000, 'Test 74');
test(minAbsoluteSumDiff([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 99943, 'Test 75');
test(minAbsoluteSumDiff([100, 200, 300, 400, 500], [101, 201, 301, 401, 501]), 5, 'Test 76');
test(minAbsoluteSumDiff([5, 25, 45, 65, 85], [10, 30, 50, 70, 90]), 25, 'Test 77');
test(minAbsoluteSumDiff([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 82, 'Test 78');
test(minAbsoluteSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 891, 'Test 79');
test(minAbsoluteSumDiff([100000, 100000, 100000, 100000, 100000], [1, 1, 1, 1, 1]), 499995, 'Test 80');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 540, 'Test 81');
test(minAbsoluteSumDiff([10, 20, 30, 40, 50], [15, 25, 35, 45, 55]), 25, 'Test 82');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 20, 'Test 83');
test(minAbsoluteSumDiff([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 999882, 'Test 84');
test(minAbsoluteSumDiff([100000, 50000, 25000, 12500, 6250], [99999, 49999, 24999, 12499, 6249]), 5, 'Test 85');
test(minAbsoluteSumDiff([1, 100000, 200000, 300000], [50000, 250000, 150000, 350000]), 199999, 'Test 86');
test(minAbsoluteSumDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 55, 'Test 87');

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
