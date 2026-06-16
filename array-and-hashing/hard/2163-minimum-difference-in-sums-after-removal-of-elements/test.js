// Test: 2163. Minimum Difference In Sums After Removal Of Elements
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { minimumDifference } = require("./solution");

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

console.log("\n2163. Minimum Difference In Sums After Removal Of Elements\n");

test(minimumDifference([5,5,5,5,5,5]), 0, 'Test 1');
test(minimumDifference([10,20,30,40,50,60]), -80, 'Test 2');
test(minimumDifference([10,20,30,40,50,60,70,80,90]), -180, 'Test 3');
test(minimumDifference([2,2,2,2,2,2,2,2,2]), 0, 'Test 4');
test(minimumDifference([1,2,3,4,5,6,7,8,9]), -18, 'Test 5');
test(minimumDifference([1,3,5,7,9,11,13,15,17]), -36, 'Test 6');
test(minimumDifference([1,2,3,100,100,100]), -197, 'Test 7');
test(minimumDifference([1,2,3,4,5,6]), -8, 'Test 8');
test(minimumDifference([100000,1,100000,1,100000,1]), -99999, 'Test 9');
test(minimumDifference([3,1,2]), -1, 'Test 10');
test(minimumDifference([7,9,5,8,1,3]), 1, 'Test 11');
test(minimumDifference([9,8,7,6,5,4,3,2,1]), 9, 'Test 12');
test(minimumDifference([5,5,5,5,5,5,5,5,5]), 0, 'Test 13');
test(minimumDifference([29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 50, 'Test 14');
test(minimumDifference([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 15');
test(minimumDifference([10,1,20,2,30,3,40,4,50,5,60,6]), -147, 'Test 16');
test(minimumDifference([5, 3, 8, 1, 4, 7, 2, 6, 9]), -14, 'Test 17');
test(minimumDifference([1000,2000,3000,4000,5000,6000,7000,8000,9000]), -18000, 'Test 18');
test(minimumDifference([9,8,7,6,5,4,3,2,1,10,11,12]), -20, 'Test 19');
test(minimumDifference([10, 20, 30, 40, 50, 60]), -80, 'Test 20');
test(minimumDifference([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 0, 'Test 21');
test(minimumDifference([120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 160, 'Test 22');
test(minimumDifference([2, 1, 3, 2, 1, 3, 2, 1, 3]), -4, 'Test 23');
test(minimumDifference([3, 3, 3, 2, 2, 2, 1, 1, 1]), 3, 'Test 24');
test(minimumDifference([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9]), -54, 'Test 25');
test(minimumDifference([1, 2, 3, 100, 200, 300, 4, 5, 6]), -594, 'Test 26');
test(minimumDifference([9, 8, 7, 6, 5, 4, 3, 2, 1]), 9, 'Test 27');
test(minimumDifference([9, 7, 5, 3, 1, 2, 4, 6, 8]), -12, 'Test 28');
test(minimumDifference([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3]), -12, 'Test 29');
test(minimumDifference([1, 100000, 1, 2, 100000, 2, 3, 100000, 3, 4, 100000, 4]), -200002, 'Test 30');
test(minimumDifference([3, 5, 2, 8, 1, 9]), -12, 'Test 31');
test(minimumDifference([6, 1, 5, 2, 4, 3]), -4, 'Test 32');
test(minimumDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), -100, 'Test 33');
test(minimumDifference([99999, 99999, 99999, 1, 1, 1, 1, 1, 1]), 0, 'Test 34');
test(minimumDifference([5, 3, 8, 6, 2, 7, 4, 1, 9, 0, 11, 13]), -24, 'Test 35');
test(minimumDifference([3,2,1,6,5,4,9,8,7]), -18, 'Test 36');
test(minimumDifference([1, 1, 1, 1, 100000, 100000, 100000, 100000, 100000]), -299997, 'Test 37');
test(minimumDifference([2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1]), 2, 'Test 38');
test(minimumDifference([100000, 99999, 99998, 99997, 99996, 99995, 1, 2, 3]), 9, 'Test 39');
test(minimumDifference([100000, 1, 2, 3, 100000, 4, 5, 6, 100000]), -200000, 'Test 40');
test(minimumDifference([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), -50, 'Test 41');
test(minimumDifference([1,3,5,7,9,2,4,6,8,10,12,14]), -34, 'Test 42');
test(minimumDifference([50000,50000,50000,50000,50000,50000,50000,50000,50000]), 0, 'Test 43');
test(minimumDifference([8, 6, 7, 5, 3, 0, 9, 1, 4, 2, 7, 6]), -12, 'Test 44');
test(minimumDifference([100000, 100000, 100000, 1, 1, 1, 100000, 100000, 100000]), -299997, 'Test 45');
test(minimumDifference([100, 200, 300, 400, 500, 600, 700, 800, 900]), -1800, 'Test 46');
test(minimumDifference([1,2,1,2,1,2,1,2,1,2,1,2]), -3, 'Test 47');
test(minimumDifference([9, 7, 5, 3, 1, 11, 13, 15, 17, 19, 21, 23]), -64, 'Test 48');
test(minimumDifference([100000, 100000, 1, 100000, 1, 100000, 1, 100000, 1]), -99999, 'Test 49');
test(minimumDifference([200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100]), -200, 'Test 50');
test(minimumDifference([99999,1,99998,2,99997,3,99996,4,99995]), -199989, 'Test 51');
test(minimumDifference([1,10,100,1000,10000,100000,1,10,100]), -110889, 'Test 52');
test(minimumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), -32, 'Test 53');
test(minimumDifference([1, 3, 5, 7, 9, 11, 2, 4, 6, 8, 10, 12]), -26, 'Test 54');
test(minimumDifference([1, 2, 100000, 3, 100000, 4, 5, 100000, 6]), -200000, 'Test 55');
test(minimumDifference([1, 100000, 1, 100000, 1, 100000, 1, 100000, 1]), -199998, 'Test 56');
test(minimumDifference([100,200,300,400,500,600,700,800,900]), -1800, 'Test 57');
test(minimumDifference([1,10,100,1000,10000,100000,1,10,100,1000,10000,100000]), -218889, 'Test 58');
test(minimumDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 59');
test(minimumDifference([1, 3, 5, 7, 9, 11, 2, 4, 6]), -18, 'Test 60');
test(minimumDifference([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), -16, 'Test 61');
test(minimumDifference([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), -36, 'Test 62');
test(minimumDifference([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]), -162, 'Test 63');
test(minimumDifference([1,100000,2,99999,3,99998,4,99997,5]), -199994, 'Test 64');
test(minimumDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200]), -3200, 'Test 65');
test(minimumDifference([10, 20, 30, 40, 50, 60, 70, 80, 90]), -180, 'Test 66');
test(minimumDifference([100, 200, 100, 200, 100, 200, 100, 200, 100]), -200, 'Test 67');
test(minimumDifference([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88]), 16, 'Test 68');
test(minimumDifference([5, 3, 8, 6, 2, 7, 4, 9, 1, 5, 3, 8]), -13, 'Test 69');
test(minimumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), -50, 'Test 70');
test(minimumDifference([10,20,10,20,10,20,10,20,10,20,10,20]), -30, 'Test 71');
test(minimumDifference([30000,20000,10000,50000,40000,60000,90000,80000,70000]), -180000, 'Test 72');
test(minimumDifference([1, 1, 1, 100000, 100000, 100000, 1, 1, 1]), -299997, 'Test 73');
test(minimumDifference([1, 1, 1, 1, 1, 1, 100000, 100000, 100000]), -299997, 'Test 74');
test(minimumDifference([1,1,1,1,1,1,100000,100000,100000]), -299997, 'Test 75');
test(minimumDifference([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95]), -284, 'Test 76');
test(minimumDifference([100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200]), -300, 'Test 77');
test(minimumDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), -320, 'Test 78');
test(minimumDifference([10,20,30,40,50,60,70,80,90,100,110,120,130]), -360, 'Test 79');
test(minimumDifference([100000,200000,300000,400000,500000,600000,1,2,3]), -900000, 'Test 80');
test(minimumDifference([99999, 99998, 99997, 1, 2, 3, 4, 5, 6]), -9, 'Test 81');
test(minimumDifference([1, 2, 3, 100000, 100000, 100000]), -199997, 'Test 82');
test(minimumDifference([100000,99999,99998,99997,99996,99995,99994,99993,99992]), 9, 'Test 83');
test(minimumDifference([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]), -16, 'Test 84');
test(minimumDifference([1, 2, 1, 2, 1, 2, 1, 2, 1]), -2, 'Test 85');
test(minimumDifference([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), -10, 'Test 86');
test(minimumDifference([12345, 67890, 54321, 98765, 43210, 87654, 32109, 76543, 21098]), -128406, 'Test 87');
test(minimumDifference([9, 3, 6, 3, 9, 3, 6, 3, 9, 3, 6, 3, 9, 3, 6, 3, 9, 3, 6, 3, 9, 3, 6, 3]), -21, 'Test 88');
test(minimumDifference([100000, 99999, 99998, 99997, 99996, 99995, 1, 2, 3, 4, 5, 6]), 199976, 'Test 89');
test(minimumDifference([5, 3, 8, 6, 2, 7, 4, 9, 1]), -10, 'Test 90');
test(minimumDifference([50, 50, 50, 1, 1, 1, 100, 100, 100]), -297, 'Test 91');
test(minimumDifference([50, 25, 100, 75, 150, 125, 200, 175, 225]), -450, 'Test 92');
test(minimumDifference([100000, 1, 100000, 1, 100000, 1, 100000, 1, 100000]), -199998, 'Test 93');
test(minimumDifference([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]), -20, 'Test 94');
test(minimumDifference([50000, 40000, 30000, 20000, 10000, 90000, 80000, 70000, 60000]), -180000, 'Test 95');
test(minimumDifference([5,4,3,2,1,9,8,7,6]), -18, 'Test 96');
test(minimumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]), -72, 'Test 97');
test(minimumDifference([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 8, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 7, 2, 8, 1, 5, 9, 7, 6, 3, 128, 256, 128]), -563, 'Test 98');
test(minimumDifference([100, 90, 80, 70, 60, 50, 40, 30, 20]), 90, 'Test 99');
test(minimumDifference([99999, 1, 99998, 2, 99997, 3, 99996, 4, 99995]), -199989, 'Test 100');
test(minimumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9]), -18, 'Test 101');
test(minimumDifference([7, 3, 5, 1, 9, 4, 6, 8, 2, 10, 12, 11]), -28, 'Test 102');
test(minimumDifference([1, 3, 5, 2, 4, 6]), -7, 'Test 103');
test(minimumDifference([1,3,5,7,9,2,4,6,8]), -15, 'Test 104');
test(minimumDifference([3,1,2,5,4,6,9,7,8]), -18, 'Test 105');
test(minimumDifference([5, 1, 9, 3, 7, 2, 8, 4, 6]), -12, 'Test 106');
test(minimumDifference([100000, 100000, 1, 1, 100000, 100000, 1, 1, 100000]), -199998, 'Test 107');
test(minimumDifference([3,3,3,3,3,3,3,3,3,3,3,3,3]), 0, 'Test 108');
test(minimumDifference([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2]), 10, 'Test 109');
test(minimumDifference([1, 100000, 2, 99999, 3, 99998, 4, 99997, 5, 99996, 6, 99995]), -299984, 'Test 110');
test(minimumDifference([100, 1, 200, 2, 300, 3, 400, 4, 500, 5, 600, 6]), -1497, 'Test 111');
test(minimumDifference([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 16, 'Test 112');
test(minimumDifference([2,4,6,8,10,12,14,16,18]), -36, 'Test 113');
test(minimumDifference([6, 2, 8, 4, 10, 12, 1, 3, 5, 7, 9, 11]), -22, 'Test 114');
test(minimumDifference([100, 200, 300, 400, 500, 600, 1, 2, 3]), -900, 'Test 115');
test(minimumDifference([100000, 200000, 300000, 400000, 500000, 600000, 1, 2, 3, 4, 5, 6]), -100011, 'Test 116');
test(minimumDifference([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 0, 'Test 117');

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
