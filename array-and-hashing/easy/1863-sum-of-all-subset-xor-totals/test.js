// Test: 1863. Sum Of All Subset Xor Totals
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { subsetXORSum } = require("./solution");

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

console.log("\n1863. Sum Of All Subset Xor Totals\n");

test(subsetXORSum([5,1,6]), 28, 'Test 1');
test(subsetXORSum([10,20,30]), 120, 'Test 2');
test(subsetXORSum([1,1,1,1]), 8, 'Test 3');
test(subsetXORSum([1,2,4,8,16]), 496, 'Test 4');
test(subsetXORSum([10,11,12]), 60, 'Test 5');
test(subsetXORSum([2,4,6,8,10,12,14]), 896, 'Test 6');
test(subsetXORSum([2,3,5]), 28, 'Test 7');
test(subsetXORSum([11,2,3,14,7]), 240, 'Test 8');
test(subsetXORSum([1]), 1, 'Test 9');
test(subsetXORSum([7,8,9,10,11]), 240, 'Test 10');
test(subsetXORSum([1,2,3,4]), 56, 'Test 11');
test(subsetXORSum([3,4,5,6,7,8]), 480, 'Test 12');
test(subsetXORSum([1,2,3,4,5,6,7,8,9,10,11,12]), 30720, 'Test 13');
test(subsetXORSum([12,34,56]), 248, 'Test 14');
test(subsetXORSum([10,15,20,25]), 248, 'Test 15');
test(subsetXORSum([2,3,5,7]), 56, 'Test 16');
test(subsetXORSum([20,19,18,17,16,15,14,13,12,11,10,9]), 63488, 'Test 17');
test(subsetXORSum([1,3]), 6, 'Test 18');
test(subsetXORSum([2,2,2,2]), 16, 'Test 19');
test(subsetXORSum([1,2,4,8,16,32]), 2016, 'Test 20');
test(subsetXORSum([2,3,4,5,6,7,8,9,10,11,12]), 15360, 'Test 21');
test(subsetXORSum([15,16,17,18,19,20]), 992, 'Test 22');
test(subsetXORSum([1,2,3]), 12, 'Test 23');
test(subsetXORSum([1,1,1,1,1,1,1,1,1,1,1,1]), 2048, 'Test 24');
test(subsetXORSum([6,3,5,2,1,9]), 480, 'Test 25');
test(subsetXORSum([31,29,23,19,17,13,11,7,5,3,2,1]), 63488, 'Test 26');
test(subsetXORSum([1, 2, 4, 8, 16, 32]), 2016, 'Test 27');
test(subsetXORSum([12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144]), 516096, 'Test 28');
test(subsetXORSum([8,16,32,64,128,256,512,1024,2048,4096,8192,16384]), 67092480, 'Test 29');
test(subsetXORSum([10, 20, 30, 40, 50, 60]), 1984, 'Test 30');
test(subsetXORSum([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 16252928, 'Test 31');
test(subsetXORSum([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095]), 8386560, 'Test 32');
test(subsetXORSum([15, 20, 25, 30]), 248, 'Test 33');
test(subsetXORSum([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]), Execution timed out, 'Test 34');
test(subsetXORSum([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), 129024, 'Test 35');
test(subsetXORSum([128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144]), 1073479680, 'Test 36');
test(subsetXORSum([3,3,3,5,5,5,7,7,7,11,11,11]), 30720, 'Test 37');
test(subsetXORSum([15,30,45,60,75,90,105,120,135,150]), 130560, 'Test 38');
test(subsetXORSum([1, 2, 4, 8, 16, 32, 64]), 8128, 'Test 39');
test(subsetXORSum([15, 25, 35, 45, 55, 65, 75]), 8128, 'Test 40');
test(subsetXORSum([19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8]), 63488, 'Test 41');
test(subsetXORSum([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84]), 260096, 'Test 42');
test(subsetXORSum([15,20,25,30,35,40,45,50,55,60,65,70]), 260096, 'Test 43');
test(subsetXORSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 245760, 'Test 44');
test(subsetXORSum([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), 16773120, 'Test 45');
test(subsetXORSum([15,25,35,45,55,65,75,85,95,105,115,125]), 260096, 'Test 46');
test(subsetXORSum([31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), 1015808, 'Test 47');
test(subsetXORSum([31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9]), 63488, 'Test 48');
test(subsetXORSum([12,24,36,48,60,72,84,96,108,120,132,144]), 516096, 'Test 49');
test(subsetXORSum([13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]), 63488, 'Test 50');
test(subsetXORSum([100,200,300,400,500,600,700,800,900,1000,1100,1200]), 4186112, 'Test 51');
test(subsetXORSum([2,4,8,16,32,64,128,256,512,1024,2048,4096]), 16773120, 'Test 52');
test(subsetXORSum([13,17,19,23,29,31,37,41]), 8064, 'Test 53');
test(subsetXORSum([2,3,5,7,11,13,17,19,23,29,31,37]), 129024, 'Test 54');
test(subsetXORSum([13, 23, 33, 43, 53, 63, 73, 83, 93, 103, 113, 123]), 260096, 'Test 55');
test(subsetXORSum([1,3,5,7,9,11,13,15,17,19,21,23]), 63488, 'Test 56');
test(subsetXORSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 30720, 'Test 57');
test(subsetXORSum([14, 28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168]), 520192, 'Test 58');
test(subsetXORSum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 14336, 'Test 59');
test(subsetXORSum([19,18,17,16,15,14,13,12,11,10,9,8]), 63488, 'Test 60');
test(subsetXORSum([14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91]), 260096, 'Test 61');
test(subsetXORSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200]), 4186112, 'Test 62');
test(subsetXORSum([2, 3, 4, 5, 6]), 112, 'Test 63');
test(subsetXORSum([12, 14, 18, 22, 26, 30]), 960, 'Test 64');
test(subsetXORSum([10, 15, 20, 25]), 248, 'Test 65');
test(subsetXORSum([17, 19, 21, 23, 25, 27, 29, 31]), 3968, 'Test 66');
test(subsetXORSum([3, 5, 7, 9, 11, 13]), 480, 'Test 67');
test(subsetXORSum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]), 8386560, 'Test 68');
test(subsetXORSum([5, 10, 15, 20, 25, 30, 35, 40, 45]), 16128, 'Test 69');
test(subsetXORSum([1,2,4,8,16,32,64,128,256,512,1024,2048]), 8386560, 'Test 70');
test(subsetXORSum([15, 25, 35, 45, 55]), 1008, 'Test 71');
test(subsetXORSum([10, 20, 30, 40, 50]), 992, 'Test 72');
test(subsetXORSum([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 15360, 'Test 73');
test(subsetXORSum([13, 17, 19, 23, 29, 31, 37, 41]), 8064, 'Test 74');
test(subsetXORSum([31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]), 129024, 'Test 75');
test(subsetXORSum([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]), 129024, 'Test 76');
test(subsetXORSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 258048, 'Test 77');
test(subsetXORSum([3, 11, 19, 27, 35, 43, 51, 59, 67, 75, 83, 91]), 251904, 'Test 78');
test(subsetXORSum([13,26,39,52,65,78,91,104]), 16256, 'Test 79');
test(subsetXORSum([2, 4, 6, 8, 10, 12, 14]), 896, 'Test 80');
test(subsetXORSum([10,20,30,40,50,60,70,80,90,100,110,120]), 258048, 'Test 81');
test(subsetXORSum([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9]), 63488, 'Test 82');
test(subsetXORSum([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), 14336, 'Test 83');
test(subsetXORSum([31,33,37,41,43,47,53,59,61,67,71,73]), 260096, 'Test 84');
test(subsetXORSum([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]), 129024, 'Test 85');
test(subsetXORSum([17,19,23,29,31,37,41,43,47,53,59,61]), 129024, 'Test 86');
test(subsetXORSum([8,16,32,64,128,256,512]), 65024, 'Test 87');
test(subsetXORSum([11,22,33,44,55,66,77,88,99,110,121,132]), 522240, 'Test 88');
test(subsetXORSum([19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]), 260096, 'Test 89');
test(subsetXORSum([15,20,25,30,35,40,45]), 4032, 'Test 90');
test(subsetXORSum([2,4,6,8,10,12,14,16,18,20]), 15360, 'Test 91');
test(subsetXORSum([19,17,15,13,11,9,7]), 1984, 'Test 92');
test(subsetXORSum([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]), 245760, 'Test 93');
test(subsetXORSum([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]), 129024, 'Test 94');
test(subsetXORSum([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4]), 30720, 'Test 95');
test(subsetXORSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]), 63488, 'Test 96');
test(subsetXORSum([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 30720, 'Test 97');
test(subsetXORSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1]), 30720, 'Test 98');
test(subsetXORSum([7,14,21,28,35,42,49,56,63]), 16128, 'Test 99');
test(subsetXORSum([2, 3, 5, 7, 11, 13, 17, 19]), 3968, 'Test 100');

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
