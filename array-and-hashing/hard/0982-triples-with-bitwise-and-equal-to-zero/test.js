// Test: 982. Triples With Bitwise And Equal To Zero
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { countTriplets } = require("./solution");

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

console.log("\n982. Triples With Bitwise And Equal To Zero\n");

test(countTriplets([0,0,0]), 27, 'Test 1');
test(countTriplets([5,3,7,10]), 18, 'Test 2');
test(countTriplets([15,15,15,15]), 0, 'Test 3');
test(countTriplets([5,3,0,1,4]), 91, 'Test 4');
test(countTriplets([1,2,3,4]), 48, 'Test 5');
test(countTriplets([5,10,15,20]), 30, 'Test 6');
test(countTriplets([1,0,1,0,1,0]), 189, 'Test 7');
test(countTriplets([1,2,4,8]), 60, 'Test 8');
test(countTriplets([2,1,3]), 12, 'Test 9');
test(countTriplets([16,32,48,64]), 48, 'Test 10');
test(countTriplets([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 0, 'Test 11');
test(countTriplets([0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383]), 631, 'Test 12');
test(countTriplets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 13');
test(countTriplets([255, 127, 63, 31, 15, 7, 3, 1, 0, 1, 3, 7, 15, 31, 63, 127, 255]), 817, 'Test 14');
test(countTriplets([1, 2, 4, 8, 16, 32]), 210, 'Test 15');
test(countTriplets([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 258, 'Test 16');
test(countTriplets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 990, 'Test 17');
test(countTriplets([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023]), 1261, 'Test 18');
test(countTriplets([255,254,253,252,251,250,249,248]), 0, 'Test 19');
test(countTriplets([7, 14, 28, 56, 112, 224]), 132, 'Test 20');
test(countTriplets([1,3,7,15,31,63,127,255]), 0, 'Test 21');
test(countTriplets([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 16231, 'Test 22');
test(countTriplets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 23');
test(countTriplets([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1680, 'Test 24');
test(countTriplets([17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]), 0, 'Test 25');
test(countTriplets([i for i in range[256]]), Error: Solution.countTriplets[] missing 1 required positional argument: 'nums', 'Test 26');
test(countTriplets([255, 128, 64, 32, 16, 8, 4, 2, 1, 0]), 943, 'Test 27');
test(countTriplets([128, 64, 32, 16, 8, 4, 2, 1, 255, 127, 63, 31, 15, 7, 3, 1, 0, 0, 0, 0]), 6760, 'Test 28');
test(countTriplets([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]), 0, 'Test 29');
test(countTriplets([5,10,15,20,25,30,35,40,45,50]), 432, 'Test 30');
test(countTriplets([17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79]), 0, 'Test 31');
test(countTriplets([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128]), 2400, 'Test 32');
test(countTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 1680, 'Test 33');
test(countTriplets([15, 30, 45, 60, 75, 90, 105, 120, 135, 150]), 180, 'Test 34');
test(countTriplets([7,14,21,28,35,42,49,56]), 216, 'Test 35');
test(countTriplets([65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 0, 'Test 36');
test(countTriplets([13, 29, 17, 5, 23, 31, 47, 19, 2, 7, 11, 13, 17, 19, 23, 29, 31]), 546, 'Test 37');
test(countTriplets([8,16,32,64,128,256,512,1024,2048,4096]), 990, 'Test 38');
test(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 39');
test(countTriplets([7, 14, 21, 28, 35]), 30, 'Test 40');
test(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 41');
test(countTriplets([11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220]), 3036, 'Test 42');
test(countTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), 13830, 'Test 43');
test(countTriplets([65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127]), 0, 'Test 44');
test(countTriplets([255,127,63,31,15,7,3,1,0]), 217, 'Test 45');
test(countTriplets([15,240,240,15,240,15,240,15,240]), 540, 'Test 46');
test(countTriplets([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 744, 'Test 47');
test(countTriplets([16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0]), 631, 'Test 48');
test(countTriplets([1, 2, 4, 8, 16, 32, 64, 128]), 504, 'Test 49');
test(countTriplets([15, 7, 3, 1, 0, 31, 14, 6, 2, 0, 255, 127]), 872, 'Test 50');
test(countTriplets([8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]), 1320, 'Test 51');
test(countTriplets([15, 20, 25, 30, 35, 40]), 84, 'Test 52');
test(countTriplets([15, 30, 45, 60, 75, 90, 105]), 0, 'Test 53');
test(countTriplets([512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144]), 990, 'Test 54');
test(countTriplets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 3360, 'Test 55');
test(countTriplets([1,2,4,8,16,32,64,128,256]), 720, 'Test 56');
test(countTriplets([255, 128, 64, 32, 16, 8, 4, 2, 1]), 672, 'Test 57');
test(countTriplets([17, 34, 51, 68, 85, 102, 119, 136, 153, 170]), 684, 'Test 58');
test(countTriplets([255, 128, 64, 32, 16, 8, 4, 2, 1, 0, 255, 128, 64, 32, 16, 8]), 3751, 'Test 59');
test(countTriplets([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 2401, 'Test 60');
test(countTriplets([2**i for i in range[16]]), Error: Solution.countTriplets[] missing 1 required positional argument: 'nums', 'Test 61');
test(countTriplets([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 180, 'Test 62');
test(countTriplets([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 0, 'Test 63');
test(countTriplets([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1015, 'Test 64');
test(countTriplets([7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), 0, 'Test 65');
test(countTriplets([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 1440, 'Test 66');
test(countTriplets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536]), 4896, 'Test 67');
test(countTriplets([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 3360, 'Test 68');
test(countTriplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 5064, 'Test 69');
test(countTriplets([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 2401, 'Test 70');
test(countTriplets([1, 5, 17, 85, 257, 681, 2049, 5121, 13633, 34609, 88417]), 0, 'Test 71');
test(countTriplets([1,2,4,8,16,32,64,128]), 504, 'Test 72');
test(countTriplets([255, 255, 255, 255, 255, 255, 255, 255, 255, 255]), 0, 'Test 73');
test(countTriplets([8, 4, 2, 1, 14, 7, 3, 1, 12, 6, 3, 1, 10, 5, 2, 1]), 2868, 'Test 74');
test(countTriplets([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), 3420, 'Test 75');
test(countTriplets([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0]), 331, 'Test 76');
test(countTriplets([255, 127, 63, 31, 15, 7, 3, 1]), 0, 'Test 77');
test(countTriplets([1,3,7,15,31,63,127,255,511,1023,2047]), 0, 'Test 78');
test(countTriplets([8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0]), 547, 'Test 79');
test(countTriplets([7, 14, 21, 28, 35, 42, 49, 56, 63]), 240, 'Test 80');
test(countTriplets([15, 240, 10, 100, 5, 60]), 114, 'Test 81');
test(countTriplets([85, 170, 51, 204, 68, 136, 34, 0, 255, 128, 64, 32, 16, 8, 4, 2, 1]), 4285, 'Test 82');
test(countTriplets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 432, 'Test 83');
test(countTriplets([255, 192, 128, 64, 32, 16, 8, 4, 2, 1, 0, 255, 192]), 1897, 'Test 84');
test(countTriplets([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195, 208]), 1638, 'Test 85');
test(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 86');
test(countTriplets([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]), 1998, 'Test 87');
test(countTriplets([1023,511,255,127,63,31,15,7,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 28791, 'Test 88');
test(countTriplets([8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]), 2352, 'Test 89');
test(countTriplets([21845, 21845, 21845, 21845, 21845, 21845, 21845, 21845, 21845, 21845, 21845, 21845, 21845, 21845, 21845, 21845]), 0, 'Test 90');
test(countTriplets([255, 127, 63, 31, 15, 7, 3, 1, 0]), 217, 'Test 91');
test(countTriplets([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 92');
test(countTriplets([4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0]), 469, 'Test 93');

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
