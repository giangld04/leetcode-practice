// Test: 1049. Last Stone Weight Ii
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { lastStoneWeightII } = require("./solution");

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

console.log("\n1049. Last Stone Weight Ii\n");

test(lastStoneWeightII([10,10,10,10,10]), 10, 'Test 1');
test(lastStoneWeightII([3,9,7,3]), 2, 'Test 2');
test(lastStoneWeightII([1,2,3,4,5]), 1, 'Test 3');
test(lastStoneWeightII([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 4');
test(lastStoneWeightII([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 0, 'Test 5');
test(lastStoneWeightII([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 6');
test(lastStoneWeightII([100,1]), 99, 'Test 7');
test(lastStoneWeightII([31,26,33,21,40]), 5, 'Test 8');
test(lastStoneWeightII([15,10,5,10,10]), 0, 'Test 9');
test(lastStoneWeightII([1,100,100,1]), 0, 'Test 10');
test(lastStoneWeightII([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 11');
test(lastStoneWeightII([5,5,5,5,5,5,5,5,5,5]), 0, 'Test 12');
test(lastStoneWeightII([10,10,10,10]), 0, 'Test 13');
test(lastStoneWeightII([1]), 1, 'Test 14');
test(lastStoneWeightII([2,7,4,1,8,1]), 1, 'Test 15');
test(lastStoneWeightII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 0, 'Test 16');
test(lastStoneWeightII([100,99,98,97,96,95,94,93,92,91,90]), 65, 'Test 17');
test(lastStoneWeightII([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 0, 'Test 18');
test(lastStoneWeightII([9,3,9,8,7,8,5,4]), 1, 'Test 19');
test(lastStoneWeightII([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145]), 5, 'Test 20');
test(lastStoneWeightII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 1, 'Test 21');
test(lastStoneWeightII([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 9, 'Test 22');
test(lastStoneWeightII([50,25,25,75,100,50]), 25, 'Test 23');
test(lastStoneWeightII([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59]), 0, 'Test 24');
test(lastStoneWeightII([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), 1, 'Test 25');
test(lastStoneWeightII([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70]), 1, 'Test 26');
test(lastStoneWeightII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 0, 'Test 27');
test(lastStoneWeightII([49,98,147,196,245,294,343,392,441,490]), 49, 'Test 28');
test(lastStoneWeightII([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40]), 15, 'Test 29');
test(lastStoneWeightII([30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]), 0, 'Test 30');
test(lastStoneWeightII([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 1, 'Test 31');
test(lastStoneWeightII([29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10]), 0, 'Test 32');
test(lastStoneWeightII([100, 1, 200, 2, 300, 3, 400, 4, 500, 5, 600, 6, 700, 7, 800, 8, 900, 9, 1000, 10, 1100, 11, 1200, 12, 1300, 13, 1400, 14]), 1, 'Test 33');
test(lastStoneWeightII([8,14,22,26,28,30,35,40,43,45,47,50,55,60,65,70,75,80,85,90,95,100]), 1, 'Test 34');
test(lastStoneWeightII([45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 35');
test(lastStoneWeightII([50,45,40,35,30,25,20,15,10,5]), 5, 'Test 36');
test(lastStoneWeightII([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93, 9, 92, 10, 91, 11, 90, 12, 89, 13, 88]), 1, 'Test 37');
test(lastStoneWeightII([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113]), 1, 'Test 38');
test(lastStoneWeightII([10, 22, 33, 44, 55, 66, 77, 88, 99, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300]), 0, 'Test 39');
test(lastStoneWeightII([12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 40');
test(lastStoneWeightII([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80]), 0, 'Test 41');
test(lastStoneWeightII([80, 20, 60, 40, 30, 70, 50, 10, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290]), 10, 'Test 42');
test(lastStoneWeightII([88, 77, 66, 55, 44, 33, 22, 11, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300]), 0, 'Test 43');
test(lastStoneWeightII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 1, 'Test 44');
test(lastStoneWeightII([91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 45');
test(lastStoneWeightII([8,3,5,7,11,9,14,16,2,6]), 1, 'Test 46');
test(lastStoneWeightII([1,100,1,100,1,100,1,100,1,100]), 95, 'Test 47');
test(lastStoneWeightII([10,20,30,40,50,60,70,80,90,100]), 10, 'Test 48');
test(lastStoneWeightII([29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 49');
test(lastStoneWeightII([8, 8, 8, 8, 8, 8, 8, 8]), 0, 'Test 50');
test(lastStoneWeightII([50, 50, 50, 50, 50, 50, 50]), 50, 'Test 51');
test(lastStoneWeightII([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 1, 'Test 52');
test(lastStoneWeightII([8, 6, 7, 5, 3, 0, 9]), 0, 'Test 53');
test(lastStoneWeightII([12,13,14,15,16,17,18,19,20]), 0, 'Test 54');
test(lastStoneWeightII([99,1,100,1,100,1,100,1,100]), 95, 'Test 55');
test(lastStoneWeightII([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 56');
test(lastStoneWeightII([100,1,2,3,4,5,6,7,8,9,10]), 45, 'Test 57');
test(lastStoneWeightII([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 1, 'Test 58');
test(lastStoneWeightII([2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]), 0, 'Test 59');
test(lastStoneWeightII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 10, 'Test 60');
test(lastStoneWeightII([29, 10, 15, 30, 25, 5]), 4, 'Test 61');
test(lastStoneWeightII([10,14,10,4,7,12]), 1, 'Test 62');
test(lastStoneWeightII([100,99,98,97,96,95,94,93,92,91]), 1, 'Test 63');
test(lastStoneWeightII([5,8,12,9,15,20,18]), 1, 'Test 64');
test(lastStoneWeightII([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71]), 1, 'Test 65');
test(lastStoneWeightII([30,30,30,30,30,30,30,30,30,30]), 0, 'Test 66');
test(lastStoneWeightII([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]), 0, 'Test 67');
test(lastStoneWeightII([100, 1, 2, 3, 99]), 1, 'Test 68');
test(lastStoneWeightII([20, 30, 40, 50, 60, 70]), 10, 'Test 69');
test(lastStoneWeightII([100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 72, 'Test 70');
test(lastStoneWeightII([30, 20, 10, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 71');
test(lastStoneWeightII([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 72');
test(lastStoneWeightII([100,1,99,2,98,3,97,4]), 0, 'Test 73');
test(lastStoneWeightII([29,22,24,27,30,31,28,25,21,20]), 1, 'Test 74');
test(lastStoneWeightII([12, 13, 14, 15, 16, 17, 18, 19, 20, 21]), 1, 'Test 75');
test(lastStoneWeightII([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 0, 'Test 76');
test(lastStoneWeightII([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 77');
test(lastStoneWeightII([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 0, 'Test 78');
test(lastStoneWeightII([20, 15, 10, 5, 30, 25, 40, 50]), 5, 'Test 79');
test(lastStoneWeightII([1,10,100,1000,10000,100000,1000000,10000000]), 8888889, 'Test 80');
test(lastStoneWeightII([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 5, 'Test 81');
test(lastStoneWeightII([30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]), 0, 'Test 82');
test(lastStoneWeightII([100, 50, 25, 12, 6, 3, 1]), 3, 'Test 83');
test(lastStoneWeightII([50,50,50,50,50,50,50,50,50,50]), 0, 'Test 84');
test(lastStoneWeightII([25,25,25,25,25,25,25,25]), 0, 'Test 85');
test(lastStoneWeightII([10,20,10,20,10,20,10,20,10,20,10,20,10,20,10]), 0, 'Test 86');
test(lastStoneWeightII([100, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 55, 'Test 87');
test(lastStoneWeightII([8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, 2147483647, 1]), Execution timed out, 'Test 88');
test(lastStoneWeightII([10,20,30,40,50,60,70,80,90,100,10]), 0, 'Test 89');
test(lastStoneWeightII([50, 49, 51, 48, 52]), 44, 'Test 90');
test(lastStoneWeightII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 0, 'Test 91');
test(lastStoneWeightII([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 100]), 13, 'Test 92');
test(lastStoneWeightII([8,14,17,31,56,13,29]), 2, 'Test 93');
test(lastStoneWeightII([50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]), 50, 'Test 94');
test(lastStoneWeightII([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 1, 'Test 95');
test(lastStoneWeightII([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1, 'Test 96');
test(lastStoneWeightII([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113]), 1, 'Test 97');
test(lastStoneWeightII([2, 3, 7, 8, 10, 12, 15, 18, 20, 25]), 0, 'Test 98');
test(lastStoneWeightII([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 50, 'Test 99');
test(lastStoneWeightII([100, 99, 98, 97, 96, 95]), 1, 'Test 100');

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
