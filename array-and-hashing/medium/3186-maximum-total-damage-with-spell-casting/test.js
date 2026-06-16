// Test: 3186. Maximum Total Damage With Spell Casting
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { maximumTotalDamage } = require("./solution");

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

console.log("\n3186. Maximum Total Damage With Spell Casting\n");

test(maximumTotalDamage([5, 5, 5, 5, 5]), 25, 'Test 1');
test(maximumTotalDamage([1,10,19,28,37,46,55,64,73,82,91]), 506, 'Test 2');
test(maximumTotalDamage([5,3,8,9,2]), 16, 'Test 3');
test(maximumTotalDamage([5, 11, 17, 23, 29, 35, 41, 47, 53, 59]), 320, 'Test 4');
test(maximumTotalDamage([1,3,5,7,9,11,13,15,17,19]), 55, 'Test 5');
test(maximumTotalDamage([3,8,3,10,1,3,3,9,5]), 22, 'Test 6');
test(maximumTotalDamage([10, 20, 30, 40, 50]), 150, 'Test 7');
test(maximumTotalDamage([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 60, 'Test 8');
test(maximumTotalDamage([1000000000,1000000000,1000000000,1000000000,1000000000]), 5000000000, 'Test 9');
test(maximumTotalDamage([2,4,6,8,10,12,14,16,18,20]), 60, 'Test 10');
test(maximumTotalDamage([10,20,30,40,50]), 150, 'Test 11');
test(maximumTotalDamage([1000000000, 1, 2, 3, 1000000000]), 2000000003, 'Test 12');
test(maximumTotalDamage([1,1,3,4]), 6, 'Test 13');
test(maximumTotalDamage([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 14');
test(maximumTotalDamage([7,1,6,6]), 13, 'Test 15');
test(maximumTotalDamage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 22, 'Test 16');
test(maximumTotalDamage([1,2,3,4,5,6,7,8,9,10]), 22, 'Test 17');
test(maximumTotalDamage([5,5,5,5]), 20, 'Test 18');
test(maximumTotalDamage([1,2,3,6,7,8,11,12,13]), 24, 'Test 19');
test(maximumTotalDamage([1000000000,1000000000,1000000000,1000000000]), 4000000000, 'Test 20');
test(maximumTotalDamage([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 55, 'Test 21');
test(maximumTotalDamage([10,20,30,40,50,60,70,80,90,100]), 550, 'Test 22');
test(maximumTotalDamage([1, 10, 19, 28, 37, 46, 55, 64, 73, 82]), 415, 'Test 23');
test(maximumTotalDamage([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,10,20,30,40,50,60,70,80,90,100]), 2650, 'Test 24');
test(maximumTotalDamage([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 100, 'Test 25');
test(maximumTotalDamage([5, 6, 8, 10, 11, 13, 15, 17, 18, 20]), 66, 'Test 26');
test(maximumTotalDamage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 77, 'Test 27');
test(maximumTotalDamage([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 1111111111, 'Test 28');
test(maximumTotalDamage([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74]), 950, 'Test 29');
test(maximumTotalDamage([1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84]), 1218, 'Test 30');
test(maximumTotalDamage([9, 8, 7, 6, 5, 4, 3, 2, 1]), 18, 'Test 31');
test(maximumTotalDamage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 117, 'Test 32');
test(maximumTotalDamage([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 6, 7, 8, 9, 1, 2, 3, 4, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22]), 612, 'Test 33');
test(maximumTotalDamage([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 210, 'Test 34');
test(maximumTotalDamage([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 1045, 'Test 35');
test(maximumTotalDamage([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]), 3250, 'Test 36');
test(maximumTotalDamage([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]), 21000, 'Test 37');
test(maximumTotalDamage([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 44, 'Test 38');
test(maximumTotalDamage([1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76, 81, 86, 91, 96]), 970, 'Test 39');
test(maximumTotalDamage([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 1050, 'Test 40');
test(maximumTotalDamage([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 120, 'Test 41');
test(maximumTotalDamage([10, 1, 20, 2, 30, 3, 40, 4, 50, 5]), 157, 'Test 42');
test(maximumTotalDamage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 44, 'Test 43');
test(maximumTotalDamage([1000000000,999999998,999999996,999999994,999999992,999999990,999999988,999999986,999999984,999999982,999999980,999999978,999999976,999999974,999999972,999999970,999999968,999999966,999999964,999999962]), 9999999820, 'Test 44');
test(maximumTotalDamage([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 44, 'Test 45');
test(maximumTotalDamage([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]), 66, 'Test 46');
test(maximumTotalDamage([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]), 255, 'Test 47');
test(maximumTotalDamage([1, 2, 3, 6, 7, 8, 11, 12, 13, 16, 17, 18]), 42, 'Test 48');
test(maximumTotalDamage([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]), 777, 'Test 49');
test(maximumTotalDamage([1, 5, 9, 13, 17, 21, 25, 29, 33, 37]), 190, 'Test 50');
test(maximumTotalDamage([2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72, 77, 82, 87, 92, 97]), 990, 'Test 51');
test(maximumTotalDamage([1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12]), 66, 'Test 52');
test(maximumTotalDamage([1000000000, 999999998, 999999996, 999999994, 999999992, 999999990, 999999988, 999999986, 999999984, 999999982]), 4999999960, 'Test 53');
test(maximumTotalDamage([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 5500, 'Test 54');
test(maximumTotalDamage([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 999999990]), 3999999982, 'Test 55');
test(maximumTotalDamage([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 210, 'Test 56');
test(maximumTotalDamage([1000000000, 999999998, 999999996, 999999994, 999999992]), 2999999988, 'Test 57');
test(maximumTotalDamage([1000000000, 999999998, 999999996, 999999994, 999999992, 999999990, 999999988]), 3999999976, 'Test 58');
test(maximumTotalDamage([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 150, 'Test 59');
test(maximumTotalDamage([1, 2, 5, 9, 10, 11, 14, 18, 20, 21, 23, 27, 28, 30, 31, 34, 38, 40, 41, 43]), 251, 'Test 60');
test(maximumTotalDamage([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97]), 1225, 'Test 61');
test(maximumTotalDamage([1,1000000000,2,999999998,3,999999996,4,999999994,5,999999992,6,999999990,7,999999988,8,999999986,9,999999984,10,999999982]), 4999999982, 'Test 62');
test(maximumTotalDamage([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60]), 480, 'Test 63');
test(maximumTotalDamage([1, 3, 6, 8, 11, 13, 16, 18, 21, 23, 26, 28, 31, 33, 36, 38, 41, 43, 46, 48, 51, 53, 56, 58, 61, 63]), 429, 'Test 64');
test(maximumTotalDamage([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]), 325, 'Test 65');
test(maximumTotalDamage([10, 10, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 55]), 650, 'Test 66');
test(maximumTotalDamage([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9]), 90, 'Test 67');
test(maximumTotalDamage([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 1, 3, 5, 7, 9]), 220, 'Test 68');
test(maximumTotalDamage([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 105, 'Test 69');
test(maximumTotalDamage([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150]), 2325, 'Test 70');
test(maximumTotalDamage([1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 10, 11, 12, 12, 13, 14, 15]), 69, 'Test 71');
test(maximumTotalDamage([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44]), 345, 'Test 72');
test(maximumTotalDamage([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300]), 4650, 'Test 73');
test(maximumTotalDamage([1, 1000000000, 2, 999999999, 3, 999999998, 4, 999999997, 5, 999999996, 6, 999999995, 7, 999999994, 8, 999999993]), 3000000006, 'Test 74');
test(maximumTotalDamage([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 551, 'Test 75');
test(maximumTotalDamage([1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), 73, 'Test 76');
test(maximumTotalDamage([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 147, 'Test 77');
test(maximumTotalDamage([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90]), 1395, 'Test 78');
test(maximumTotalDamage([1000000000, 1000000000, 1000000000, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992]), 4999999991, 'Test 79');
test(maximumTotalDamage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 239, 'Test 80');
test(maximumTotalDamage([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135, 144, 153, 162, 171, 180]), 1890, 'Test 81');
test(maximumTotalDamage([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 100]), 1717, 'Test 82');
test(maximumTotalDamage([100,101,102,103,104,105,106,107,108,109,200,201,202,203,204,205,206,207,208,209]), 1236, 'Test 83');
test(maximumTotalDamage([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59]), 465, 'Test 84');
test(maximumTotalDamage([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), 90, 'Test 85');
test(maximumTotalDamage([10, 12, 10, 14, 12, 16, 14, 18, 16, 20, 18, 22, 20, 24, 22, 26, 24, 28, 26, 30]), 210, 'Test 86');
test(maximumTotalDamage([5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 221, 'Test 87');
test(maximumTotalDamage([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), 90, 'Test 88');
test(maximumTotalDamage([9,2,8,3,7,4,6,5,1,10,19,11,18,12,17,13,16,14,15,20,21,22,23,24,25,26,27,28,29,30]), 165, 'Test 89');
test(maximumTotalDamage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 165, 'Test 90');
test(maximumTotalDamage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 30, 'Test 91');
test(maximumTotalDamage([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 2100, 'Test 92');
test(maximumTotalDamage([1, 6, 11, 16, 21, 26, 31, 36, 41, 46]), 235, 'Test 93');
test(maximumTotalDamage([3, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]), 325, 'Test 94');
test(maximumTotalDamage([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 100, 'Test 95');
test(maximumTotalDamage([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125]), 1625, 'Test 96');
test(maximumTotalDamage([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]), 28, 'Test 97');
test(maximumTotalDamage([1,3,6,8,10,13,15,18,20,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75]), 604, 'Test 98');
test(maximumTotalDamage([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 12000, 'Test 99');

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
