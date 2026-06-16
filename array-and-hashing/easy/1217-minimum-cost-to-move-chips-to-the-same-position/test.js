// Test: 1217. Minimum Cost To Move Chips To The Same Position
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { minCostToMoveChips } = require("./solution");

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

console.log("\n1217. Minimum Cost To Move Chips To The Same Position\n");

test(minCostToMoveChips([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 1');
test(minCostToMoveChips([1,1000000000]), 1, 'Test 2');
test(minCostToMoveChips([1,2,2,2,3,3,3]), 3, 'Test 3');
test(minCostToMoveChips([5,5,5,5,5]), 0, 'Test 4');
test(minCostToMoveChips([1,3,5,7,9,11,13,15,17,19]), 0, 'Test 5');
test(minCostToMoveChips([1,3,5,7,9]), 0, 'Test 6');
test(minCostToMoveChips([1,1,1,1,1]), 0, 'Test 7');
test(minCostToMoveChips([1,2,3,4,5,6,7,8,9,10]), 5, 'Test 8');
test(minCostToMoveChips([999999999,999999998,999999997,999999996]), 2, 'Test 9');
test(minCostToMoveChips([2,4,6,8,10]), 0, 'Test 10');
test(minCostToMoveChips([1,2,2,2,3,3,3,3]), 3, 'Test 11');
test(minCostToMoveChips([1,1,1,2,2,3]), 2, 'Test 12');
test(minCostToMoveChips([1,1,2,2,3,3,4,4,5,5]), 4, 'Test 13');
test(minCostToMoveChips([2,2,2,3,3]), 2, 'Test 14');
test(minCostToMoveChips([1,2,2,3,3,3,4,4,4,4]), 4, 'Test 15');
test(minCostToMoveChips([1,3,5,7]), 0, 'Test 16');
test(minCostToMoveChips([1,2,2,3,4,5]), 3, 'Test 17');
test(minCostToMoveChips([1000000000,1000000000,1000000000]), 0, 'Test 18');
test(minCostToMoveChips([1]), 0, 'Test 19');
test(minCostToMoveChips([1,2,2,3,3,3,4]), 3, 'Test 20');
test(minCostToMoveChips([999999999,1000000000,1000000001]), 1, 'Test 21');
test(minCostToMoveChips([4,6,8,10,12]), 0, 'Test 22');
test(minCostToMoveChips([2,4,6,8]), 0, 'Test 23');
test(minCostToMoveChips([10,20,30,40,50]), 0, 'Test 24');
test(minCostToMoveChips([1,1,2,2,3,3,4,4]), 4, 'Test 25');
test(minCostToMoveChips([1,2,3]), 1, 'Test 26');
test(minCostToMoveChips([1,1,2,2,3,3,3,3]), 2, 'Test 27');
test(minCostToMoveChips([100,200,300,400,500,600]), 0, 'Test 28');
test(minCostToMoveChips([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192]), 1, 'Test 29');
test(minCostToMoveChips([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3]), 10, 'Test 30');
test(minCostToMoveChips([1, 3, 5, 7, 9, 11, 13, 15]), 0, 'Test 31');
test(minCostToMoveChips([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50]), 0, 'Test 32');
test(minCostToMoveChips([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3]), 10, 'Test 33');
test(minCostToMoveChips([5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43]), 0, 'Test 34');
test(minCostToMoveChips([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 35');
test(minCostToMoveChips([500000000, 500000001, 500000002, 500000003, 500000004, 500000005]), 3, 'Test 36');
test(minCostToMoveChips([999999999,1000000000,1000000001,1000000002,1000000003,1000000004,1000000005,1000000006,1000000007,1000000008]), 5, 'Test 37');
test(minCostToMoveChips([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 38');
test(minCostToMoveChips([2,4,6,8,10,12,14,16,18,20]), 0, 'Test 39');
test(minCostToMoveChips([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), 0, 'Test 40');
test(minCostToMoveChips([5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7]), 5, 'Test 41');
test(minCostToMoveChips([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), 10, 'Test 42');
test(minCostToMoveChips([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 24, 'Test 43');
test(minCostToMoveChips([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 10, 'Test 44');
test(minCostToMoveChips([1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7]), 12, 'Test 45');
test(minCostToMoveChips([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200]), 20, 'Test 46');
test(minCostToMoveChips([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 12, 'Test 47');
test(minCostToMoveChips([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 7, 'Test 48');
test(minCostToMoveChips([1,3,5,7,9,11,13]), 0, 'Test 49');
test(minCostToMoveChips([1000000000, 999999998, 999999996, 999999994, 999999992]), 0, 'Test 50');
test(minCostToMoveChips([2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 3, 'Test 51');
test(minCostToMoveChips([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 33, 'Test 52');
test(minCostToMoveChips([1000000000, 1000000002, 1000000004, 1000000006, 1000000008, 1000000010]), 0, 'Test 53');
test(minCostToMoveChips([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10, 'Test 54');
test(minCostToMoveChips([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 0, 'Test 55');
test(minCostToMoveChips([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 17, 'Test 56');
test(minCostToMoveChips([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 14, 'Test 57');
test(minCostToMoveChips([1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 11, 'Test 58');
test(minCostToMoveChips([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 0, 'Test 59');
test(minCostToMoveChips([5,15,25,35,45,55,65,75,85,95,105]), 0, 'Test 60');
test(minCostToMoveChips([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205]), 0, 'Test 61');
test(minCostToMoveChips([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71]), 1, 'Test 62');
test(minCostToMoveChips([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]), 9, 'Test 63');
test(minCostToMoveChips([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 12, 'Test 64');
test(minCostToMoveChips([999999999,999999998,999999997,999999996,999999995,999999994,999999993,999999992,999999991]), 4, 'Test 65');
test(minCostToMoveChips([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4]), 10, 'Test 66');
test(minCostToMoveChips([1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4]), 10, 'Test 67');
test(minCostToMoveChips([2,2,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), 10, 'Test 68');
test(minCostToMoveChips([1000000000, 999999998, 999999996, 999999994, 999999992, 999999990]), 0, 'Test 69');
test(minCostToMoveChips([2,2,4,4,6,6,8,8,10,10,12,12,14,14,16,16,18,18,20,20]), 0, 'Test 70');
test(minCostToMoveChips([1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584]), 6, 'Test 71');
test(minCostToMoveChips([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000001]), 1, 'Test 72');
test(minCostToMoveChips([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 10, 'Test 73');
test(minCostToMoveChips([999999999,999999998,999999997,999999996,999999995,999999994,999999993,999999992]), 4, 'Test 74');
test(minCostToMoveChips([1000000000,999999998,999999996,999999994,999999992,999999990]), 0, 'Test 75');
test(minCostToMoveChips([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 0, 'Test 76');
test(minCostToMoveChips([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 77');
test(minCostToMoveChips([1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946]), 7, 'Test 78');
test(minCostToMoveChips([1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3]), 7, 'Test 79');
test(minCostToMoveChips([1000000001,1000000003,1000000005,1000000007,1000000009]), 0, 'Test 80');
test(minCostToMoveChips([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 0, 'Test 81');
test(minCostToMoveChips([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 0, 'Test 82');
test(minCostToMoveChips([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]), 0, 'Test 83');
test(minCostToMoveChips([10,20,30,40,50,60,70,80,90,100]), 0, 'Test 84');
test(minCostToMoveChips([1000000001, 1000000003, 1000000005, 1000000007, 1000000009]), 0, 'Test 85');
test(minCostToMoveChips([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 0, 'Test 86');
test(minCostToMoveChips([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 25, 'Test 87');
test(minCostToMoveChips([100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115]), 8, 'Test 88');
test(minCostToMoveChips([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 15, 'Test 89');
test(minCostToMoveChips([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 15, 'Test 90');
test(minCostToMoveChips([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 0, 'Test 91');
test(minCostToMoveChips([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 9, 'Test 92');
test(minCostToMoveChips([1000000001,1000000002,1000000003,1000000004,1000000005]), 2, 'Test 93');
test(minCostToMoveChips([1,10,100,1000,10000,100000,1000000,10000000,100000000]), 1, 'Test 94');
test(minCostToMoveChips([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), 0, 'Test 95');
test(minCostToMoveChips([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 15, 'Test 96');
test(minCostToMoveChips([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 7, 'Test 97');
test(minCostToMoveChips([500000000,500000001,500000002,500000003,500000004,500000005,500000006,500000007,500000008,500000009]), 5, 'Test 98');
test(minCostToMoveChips([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]), 16, 'Test 99');
test(minCostToMoveChips([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]), 0, 'Test 100');
test(minCostToMoveChips([5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6]), 16, 'Test 101');
test(minCostToMoveChips([1,1,3,3,5,5,7,7,9,9,11,11,13,13,15,15,17,17,19,19,21,21,23,23,25,25,27,27,29,29,31,31,33,33,35,35,37,37,39,39,41,41]), 0, 'Test 102');
test(minCostToMoveChips([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 0, 'Test 103');
test(minCostToMoveChips([1000000000,1000000001,1000000002,1000000003,1000000004,1000000005]), 3, 'Test 104');
test(minCostToMoveChips([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 0, 'Test 105');

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
