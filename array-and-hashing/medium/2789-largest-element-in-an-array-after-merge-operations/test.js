// Test: 2789. Largest Element In An Array After Merge Operations
// 124 test cases from LeetCodeDataset
// Run: node test.js

const { maxArrayValue } = require("./solution");

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

console.log("\n2789. Largest Element In An Array After Merge Operations\n");

test(maxArrayValue([5,4,3,2,1]), 5, 'Test 1');
test(maxArrayValue([1,2,2,3,3,3,4,4,4,4]), 30, 'Test 2');
test(maxArrayValue([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 3');
test(maxArrayValue([1,10,100,1000,10000,100000,1000000]), 1111111, 'Test 4');
test(maxArrayValue([10,5,2,1]), 10, 'Test 5');
test(maxArrayValue([1,1,1,1,1]), 5, 'Test 6');
test(maxArrayValue([2,3,7,9,3]), 21, 'Test 7');
test(maxArrayValue([10,5,2]), 10, 'Test 8');
test(maxArrayValue([5,3,3]), 11, 'Test 9');
test(maxArrayValue([1,10,1,10,1]), 22, 'Test 10');
test(maxArrayValue([1,1000000,1]), 1000001, 'Test 11');
test(maxArrayValue([5]), 5, 'Test 12');
test(maxArrayValue([1000000]), 1000000, 'Test 13');
test(maxArrayValue([1,2,3,4,5]), 15, 'Test 14');
test(maxArrayValue([10,9,8,7,6]), 10, 'Test 15');
test(maxArrayValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 256, 'Test 16');
test(maxArrayValue([1,3,2,4,6,5,7,9,8,10,12,11,13,15,14,16,18,17,19,20]), 210, 'Test 17');
test(maxArrayValue([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99]), 2500, 'Test 18');
test(maxArrayValue([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953]), 1000000, 'Test 19');
test(maxArrayValue([1000000,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1000000, 'Test 20');
test(maxArrayValue([1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000]), 10000000, 'Test 21');
test(maxArrayValue([1000,900,800,700,600,500,400,300,200,100,1,2,3,4,5,6,7,8,9,10]), 1000, 'Test 22');
test(maxArrayValue([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 1023, 'Test 23');
test(maxArrayValue([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 24');
test(maxArrayValue([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 20, 'Test 25');
test(maxArrayValue([1, 2, 4, 8, 16, 32, 64, 128, 256]), 511, 'Test 26');
test(maxArrayValue([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 100, 'Test 27');
test(maxArrayValue([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5]), 75, 'Test 28');
test(maxArrayValue([2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2]), 20, 'Test 29');
test(maxArrayValue([9, 8, 7, 6, 5, 4, 3, 2, 1]), 9, 'Test 30');
test(maxArrayValue([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 99, 'Test 31');
test(maxArrayValue([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4]), 58, 'Test 32');
test(maxArrayValue([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 15, 'Test 33');
test(maxArrayValue([100, 50, 25, 12, 6, 3, 1, 1, 1, 1]), 200, 'Test 34');
test(maxArrayValue([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 2046, 'Test 35');
test(maxArrayValue([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 60, 'Test 36');
test(maxArrayValue([1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 111, 'Test 37');
test(maxArrayValue([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 55, 'Test 38');
test(maxArrayValue([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 65, 'Test 39');
test(maxArrayValue([100,50,25,12,6,3,1,1,1,1,1,1,1,1,1,1]), 206, 'Test 40');
test(maxArrayValue([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 45, 'Test 41');
test(maxArrayValue([2, 2, 2, 2, 1, 1, 1, 1, 1, 1]), 14, 'Test 42');
test(maxArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 55, 'Test 43');
test(maxArrayValue([1,2,4,8,16,32,64,128,256,512]), 1023, 'Test 44');
test(maxArrayValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 120, 'Test 45');
test(maxArrayValue([1, 10, 100, 1000, 10000, 100000, 1000000]), 1111111, 'Test 46');
test(maxArrayValue([1, 10, 100, 1000, 10000]), 11111, 'Test 47');
test(maxArrayValue([9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 165, 'Test 48');
test(maxArrayValue([2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 188, 'Test 49');
test(maxArrayValue([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 275, 'Test 50');
test(maxArrayValue([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 110, 'Test 51');
test(maxArrayValue([1,3,5,7,9,11,13,15,17,19]), 100, 'Test 52');
test(maxArrayValue([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 30, 'Test 53');
test(maxArrayValue([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 90, 'Test 54');
test(maxArrayValue([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71]), 639, 'Test 55');
test(maxArrayValue([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000]), 10000000, 'Test 56');
test(maxArrayValue([10, 10, 20, 20, 30, 30, 40, 40, 50, 50]), 300, 'Test 57');
test(maxArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 325, 'Test 58');
test(maxArrayValue([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 100, 'Test 59');
test(maxArrayValue([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 21, 'Test 60');
test(maxArrayValue([5, 5, 5, 5, 10, 10, 10, 10, 15, 15]), 90, 'Test 61');
test(maxArrayValue([100, 200, 150, 300, 250, 400, 350, 500, 450, 600]), 3300, 'Test 62');
test(maxArrayValue([9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 55, 'Test 63');
test(maxArrayValue([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 42, 'Test 64');
test(maxArrayValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 65');
test(maxArrayValue([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 175, 'Test 66');
test(maxArrayValue([10, 5, 5, 10, 10, 5, 5, 10]), 60, 'Test 67');
test(maxArrayValue([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 66, 'Test 68');
test(maxArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 465, 'Test 69');
test(maxArrayValue([10,9,8,7,6,5,4,3,2,1]), 10, 'Test 70');
test(maxArrayValue([999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999]), 9999990, 'Test 71');
test(maxArrayValue([1,1,1,2,2,2,4,4,4,8,8,8,16,16,16,32,32,32,64,64,64,128,128,128,256,256,256,512,512,512,1024,1024,1024]), 6141, 'Test 72');
test(maxArrayValue([1000000,1000000,1000000,1000000,100000,10000,1000,100,10,1]), 4000000, 'Test 73');
test(maxArrayValue([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 74');
test(maxArrayValue([1,2,2,3,4,4,4,5,5,5,5,6,6,6,6,6]), 70, 'Test 75');
test(maxArrayValue([1, 3, 2, 4, 3, 5, 4, 6, 5, 7]), 40, 'Test 76');
test(maxArrayValue([1, 1, 2, 2, 4, 4, 8, 8, 16, 16]), 62, 'Test 77');
test(maxArrayValue([10,20,30,40,50,60,70,80,90,100]), 550, 'Test 78');
test(maxArrayValue([1, 2, 3, 4, 5, 4, 3, 2, 1]), 15, 'Test 79');
test(maxArrayValue([1000000, 1000000, 1000000, 1000000, 1000000]), 5000000, 'Test 80');
test(maxArrayValue([1, 3, 3, 3, 2, 2, 2, 1, 1, 1]), 19, 'Test 81');
test(maxArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 120, 'Test 82');
test(maxArrayValue([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195]), 100000, 'Test 83');
test(maxArrayValue([2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]), 56, 'Test 84');
test(maxArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 85');
test(maxArrayValue([1, 1, 1, 2, 2, 2, 3, 3, 3, 4]), 22, 'Test 86');
test(maxArrayValue([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 45, 'Test 87');
test(maxArrayValue([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 220, 'Test 88');
test(maxArrayValue([10, 20, 15, 25, 30, 20, 10, 5, 1, 2]), 100, 'Test 89');
test(maxArrayValue([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 110, 'Test 90');
test(maxArrayValue([1,10,100,1000,10000,100000,1000000,1000000,1000000,1000000]), 4111111, 'Test 91');
test(maxArrayValue([71,67,61,59,53,47,43,41,37,31,29,23,19,17,13,11,7,5,3,2]), 71, 'Test 92');
test(maxArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 93');
test(maxArrayValue([1,3,2,4,2,3,5,3,4,5,6,4,5,6,7,5,6,7,8,9]), 95, 'Test 94');
test(maxArrayValue([1, 2, 3, 4, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 35, 'Test 95');
test(maxArrayValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 30, 'Test 96');
test(maxArrayValue([1,2,3,4,5,4,3,2,1,2,3,4,5]), 39, 'Test 97');
test(maxArrayValue([10, 5, 5, 10, 20, 5]), 50, 'Test 98');
test(maxArrayValue([100,90,80,70,60,50,40,30,20,10]), 100, 'Test 99');
test(maxArrayValue([5, 10, 5, 10, 5, 10, 5, 10, 5, 10]), 75, 'Test 100');
test(maxArrayValue([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 124, 'Test 101');
test(maxArrayValue([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 110, 'Test 102');
test(maxArrayValue([1,10,1,10,1,10,1,10,1,10]), 55, 'Test 103');
test(maxArrayValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 53, 'Test 104');
test(maxArrayValue([100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 504, 'Test 105');
test(maxArrayValue([9,8,7,6,5,4,3,2,1]), 9, 'Test 106');
test(maxArrayValue([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 15, 'Test 107');
test(maxArrayValue([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 265, 'Test 108');
test(maxArrayValue([1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 110, 'Test 109');
test(maxArrayValue([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), 2100, 'Test 110');
test(maxArrayValue([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 1000000, 'Test 111');
test(maxArrayValue([1, 10, 100, 1000, 10000, 100000]), 111111, 'Test 112');
test(maxArrayValue([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1]), 1000, 'Test 113');
test(maxArrayValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 550, 'Test 114');
test(maxArrayValue([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 50, 'Test 115');
test(maxArrayValue([2,4,6,8,10,12,14,16,18,20]), 110, 'Test 116');
test(maxArrayValue([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]), 220, 'Test 117');
test(maxArrayValue([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 200, 'Test 118');
test(maxArrayValue([1000000,1,1000000,1,1000000,1,1000000,1,1000000,1]), 5000004, 'Test 119');
test(maxArrayValue([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 39, 'Test 120');
test(maxArrayValue([5, 15, 5, 15, 5, 15, 5, 15, 5, 15]), 100, 'Test 121');
test(maxArrayValue([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 90, 'Test 122');
test(maxArrayValue([100,90,80,70,60,50,40,30,20,10,1,2,3,4,5,6,7,8,9,10,100,90,80,70,60,50,40,30,20,10,1,2,3,4,5,6,7,8,9,10]), 1210, 'Test 123');
test(maxArrayValue([1, 3, 3, 2, 2, 4, 4, 1, 1, 5, 5, 1, 1, 6, 6]), 45, 'Test 124');

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
