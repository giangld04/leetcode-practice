// Test: 2913. Subarrays Distinct Element Sum Of Squares I
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { sumCounts } = require("./solution");

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

console.log("\n2913. Subarrays Distinct Element Sum Of Squares I\n");

test(sumCounts([1,3,3,2,2,1]), 85, 'Test 1');
test(sumCounts([10,20,10,20,10]), 45, 'Test 2');
test(sumCounts([1,2,2,1]), 25, 'Test 3');
test(sumCounts([1,3,2,3,1]), 70, 'Test 4');
test(sumCounts([1]), 1, 'Test 5');
test(sumCounts([100,100,99,99,98]), 49, 'Test 6');
test(sumCounts([1,2,3,4]), 50, 'Test 7');
test(sumCounts([10,20,30,40,50]), 105, 'Test 8');
test(sumCounts([5,6,7,8,9]), 105, 'Test 9');
test(sumCounts([7,7,7,7,7,7]), 21, 'Test 10');
test(sumCounts([1,2,1]), 15, 'Test 11');
test(sumCounts([5,5,5,5]), 10, 'Test 12');
test(sumCounts([1,2,3,4,5]), 105, 'Test 13');
test(sumCounts([10,10,10]), 6, 'Test 14');
test(sumCounts([1,2,2,3,4,4,5]), 184, 'Test 15');
test(sumCounts([4,4,4,4]), 10, 'Test 16');
test(sumCounts([4,5,6,7]), 50, 'Test 17');
test(sumCounts([1,2]), 6, 'Test 18');
test(sumCounts([2,3,2,3]), 28, 'Test 19');
test(sumCounts([1,2,3]), 20, 'Test 20');
test(sumCounts([1,1]), 3, 'Test 21');
test(sumCounts([5]), 1, 'Test 22');
test(sumCounts([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1]), 1730, 'Test 23');
test(sumCounts([3,4,3,2,3,1]), 120, 'Test 24');
test(sumCounts([1,2,2,1,3,3,3,4,4,4,4]), 410, 'Test 25');
test(sumCounts([1, 1, 1, 2, 2, 2, 3, 3, 3]), 171, 'Test 26');
test(sumCounts([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 755, 'Test 27');
test(sumCounts([3, 1, 2, 3, 1, 2, 3, 1, 2]), 293, 'Test 28');
test(sumCounts([10,20,30,20,10,30,20,10]), 220, 'Test 29');
test(sumCounts([1,2,3,4,5,6,7,8,9,10]), 1210, 'Test 30');
test(sumCounts([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 1716, 'Test 31');
test(sumCounts([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 1811, 'Test 32');
test(sumCounts([9, 8, 7, 6, 5, 4, 3, 2, 1]), 825, 'Test 33');
test(sumCounts([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 551, 'Test 34');
test(sumCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 778, 'Test 35');
test(sumCounts([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 210, 'Test 36');
test(sumCounts([1,2,3,1,2,3,1,2,3,1,2,3]), 551, 'Test 37');
test(sumCounts([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 78, 'Test 38');
test(sumCounts([1, 2, 3, 2, 1, 3, 2, 1]), 220, 'Test 39');
test(sumCounts([100,99,98,97,96,95,94,93,92,91]), 1210, 'Test 40');
test(sumCounts([1,2,2,3,3,3,4,4,4,4]), 263, 'Test 41');
test(sumCounts([1,1,2,2,3,3,4,4,5,5,6,6]), 778, 'Test 42');
test(sumCounts([1,2,3,2,1]), 70, 'Test 43');
test(sumCounts([3, 1, 2, 3, 4, 5, 3, 2]), 370, 'Test 44');
test(sumCounts([10,20,10,30,20,40,50,10]), 367, 'Test 45');
test(sumCounts([1, 2, 3, 2, 1, 2, 3, 2, 1]), 278, 'Test 46');
test(sumCounts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 4635, 'Test 47');
test(sumCounts([1, 3, 3, 1, 2, 2, 3, 1]), 194, 'Test 48');
test(sumCounts([50, 50, 51, 51, 52, 52, 53, 53, 54, 54]), 415, 'Test 49');
test(sumCounts([1,2,3,2,1,3,2,1,3,2,1]), 451, 'Test 50');
test(sumCounts([5,6,5,7,8,7,6,5,9,10,9,8,7,6]), 1899, 'Test 51');
test(sumCounts([1,1,2,2,3,3]), 77, 'Test 52');
test(sumCounts([10,20,30,20,10,30]), 111, 'Test 53');
test(sumCounts([10,20,30,20,10,30,20,10,30]), 288, 'Test 54');
test(sumCounts([1,1,2,2,3,3,4,4,5,5]), 415, 'Test 55');
test(sumCounts([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 4830, 'Test 56');
test(sumCounts([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 120, 'Test 57');
test(sumCounts([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 4830, 'Test 58');
test(sumCounts([5,5,4,4,3,3,2,2,1,1]), 415, 'Test 59');
test(sumCounts([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 415, 'Test 60');
test(sumCounts([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 1210, 'Test 61');
test(sumCounts([3, 1, 2, 3, 4, 2, 5]), 240, 'Test 62');
test(sumCounts([5,5,5,5,5,5,5,5,5,5]), 55, 'Test 63');
test(sumCounts([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 778, 'Test 64');
test(sumCounts([10,9,8,7,6,5,4,3,2,1]), 1210, 'Test 65');
test(sumCounts([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 10560, 'Test 66');
test(sumCounts([1,1,1,2,2,2,3,3,3,4,4,4]), 438, 'Test 67');
test(sumCounts([10,20,30,40,50,60,70,80,90,100]), 1210, 'Test 68');
test(sumCounts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 5440, 'Test 69');
test(sumCounts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1210, 'Test 70');
test(sumCounts([1, 2, 3, 4, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 1645, 'Test 71');
test(sumCounts([10, 20, 30, 40, 50]), 105, 'Test 72');
test(sumCounts([1,2,3,2,1,4,5,4,3,2,1]), 861, 'Test 73');
test(sumCounts([10, 20, 10, 30, 20, 30, 40, 50]), 298, 'Test 74');
test(sumCounts([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), 930, 'Test 75');
test(sumCounts([1,2,3,4,5,4,3,2,1,5,4,3,2,1]), 1645, 'Test 76');
test(sumCounts([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4]), 553, 'Test 77');
test(sumCounts([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]), 930, 'Test 78');
test(sumCounts([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 5415, 'Test 79');
test(sumCounts([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), 438, 'Test 80');
test(sumCounts([1,2,3,4,5,4,3,2,1,2,3,4,5]), 1285, 'Test 81');
test(sumCounts([1,2,3,2,1,4,5,3]), 367, 'Test 82');
test(sumCounts([5,5,5,5,5,5,5,5]), 36, 'Test 83');
test(sumCounts([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 10560, 'Test 84');
test(sumCounts([1, 2, 1, 3, 2, 1, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 1794, 'Test 85');
test(sumCounts([9,8,7,6,5,4,3,2,1]), 825, 'Test 86');
test(sumCounts([9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), 3910, 'Test 87');
test(sumCounts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10560, 'Test 88');
test(sumCounts([7,8,9,7,8,9,7,8,9,7,8,9]), 551, 'Test 89');
test(sumCounts([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9]), 5415, 'Test 90');
test(sumCounts([1,2,3,4,3,2,1,2,3,4,3,2,1]), 962, 'Test 91');
test(sumCounts([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 8670850, 'Test 92');
test(sumCounts([1,1,2,1,2,2,3,3,3,3,4,4,4,4,4]), 751, 'Test 93');
test(sumCounts([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 6455, 'Test 94');
test(sumCounts([1, 3, 2, 3, 4, 5, 4, 3, 2, 1]), 611, 'Test 95');
test(sumCounts([5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 415, 'Test 96');
test(sumCounts([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 1210, 'Test 97');
test(sumCounts([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 55, 'Test 98');
test(sumCounts([1,1,1,2,2,2,3,3,3,1,2,3]), 419, 'Test 99');
test(sumCounts([10, 20, 30, 20, 10, 30]), 111, 'Test 100');
test(sumCounts([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 1210, 'Test 101');
test(sumCounts([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 4635, 'Test 102');
test(sumCounts([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 1285, 'Test 103');
test(sumCounts([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]), 2366, 'Test 104');
test(sumCounts([1, 2, 3, 2, 1, 2, 3, 2, 1, 2]), 350, 'Test 105');

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
