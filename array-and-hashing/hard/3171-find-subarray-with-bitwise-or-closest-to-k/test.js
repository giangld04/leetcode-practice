// Test: 3171. Find Subarray With Bitwise Or Closest To K
// 124 test cases from LeetCodeDataset
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

console.log("\n3171. Find Subarray With Bitwise Or Closest To K\n");

test(minimumDifference([1000000000], 500000000), 500000000, 'Test 1');
test(minimumDifference([10,20,30,40], 25), 5, 'Test 2');
test(minimumDifference([1], 10), 9, 'Test 3');
test(minimumDifference([5,6,7,8,9], 7), 0, 'Test 4');
test(minimumDifference([5,5,5,5,5], 10), 5, 'Test 5');
test(minimumDifference([1000000000,1000000000,1000000000], 1000000000), 0, 'Test 6');
test(minimumDifference([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), 0, 'Test 7');
test(minimumDifference([1,2,3,4,5,6,7,8,9,10], 5), 0, 'Test 8');
test(minimumDifference([3,5,7,9], 8), 1, 'Test 9');
test(minimumDifference([10,20,30,40,50], 25), 5, 'Test 10');
test(minimumDifference([1,1,1,1,1], 2), 1, 'Test 11');
test(minimumDifference([7,8,9], 5), 2, 'Test 12');
test(minimumDifference([1,1,1,1], 1), 0, 'Test 13');
test(minimumDifference([5,3,6,7,9], 4), 1, 'Test 14');
test(minimumDifference([1,1,2,2,3,3], 0), 1, 'Test 15');
test(minimumDifference([2,4,6,8,10], 7), 1, 'Test 16');
test(minimumDifference([1,2,3,4,5,6,7,8,9,10], 15), 0, 'Test 17');
test(minimumDifference([1000000000], 1000000000), 0, 'Test 18');
test(minimumDifference([10,20,30,40,50,60,70,80,90,100], 65), 3, 'Test 19');
test(minimumDifference([1,3,1,3], 2), 1, 'Test 20');
test(minimumDifference([1,1,1,1,1], 1), 0, 'Test 21');
test(minimumDifference([3,3,3,3,3], 3), 0, 'Test 22');
test(minimumDifference([1,2,4,8,16,32,64,128,256,512], 255), 0, 'Test 23');
test(minimumDifference([2,4,8,16,32], 31), 1, 'Test 24');
test(minimumDifference([5,7,9,11,13], 8), 1, 'Test 25');
test(minimumDifference([1,2,4,5], 3), 0, 'Test 26');
test(minimumDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 1, 'Test 27');
test(minimumDifference([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215, 33554431], 10000000), 1611393, 'Test 28');
test(minimumDifference([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 500), 11, 'Test 29');
test(minimumDifference([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 100), 27, 'Test 30');
test(minimumDifference([5, 5, 5, 5, 5, 5, 5], 3), 2, 'Test 31');
test(minimumDifference([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000], 1000000000), 0, 'Test 32');
test(minimumDifference([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1000), 8, 'Test 33');
test(minimumDifference([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1), 1, 'Test 34');
test(minimumDifference([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135, 144, 153, 162, 171, 180], 110), 1, 'Test 35');
test(minimumDifference([31, 15, 7, 3, 1, 128, 64, 32, 16, 8, 4, 2, 1], 127), 0, 'Test 36');
test(minimumDifference([256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728], 268435456), 256, 'Test 37');
test(minimumDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 1, 'Test 38');
test(minimumDifference([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 511), 0, 'Test 39');
test(minimumDifference([1048575, 1048575, 1048575, 1048575, 1048575], 1048574), 1, 'Test 40');
test(minimumDifference([1,2,4,8,16,32,64,128,256,512], 1023), 0, 'Test 41');
test(minimumDifference([3, 5, 7, 10, 15, 20], 12), 2, 'Test 42');
test(minimumDifference([5,5,5,5,5,5,5,5,5,5], 10), 5, 'Test 43');
test(minimumDifference([123456789,987654321,135792468,246813579,1112131415], 333333333), 85994358, 'Test 44');
test(minimumDifference([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 25), 1, 'Test 45');
test(minimumDifference([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), 1, 'Test 46');
test(minimumDifference([1, 5, 10, 20, 40, 80, 160, 320, 640, 1280], 1000), 8, 'Test 47');
test(minimumDifference([1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048], 100000), 1696, 'Test 48');
test(minimumDifference([1,3,5,7,9,11,13,15,17,19], 14), 1, 'Test 49');
test(minimumDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 55), 3, 'Test 50');
test(minimumDifference([999999999, 999999998, 999999997, 999999996, 999999995], 999999994), 1, 'Test 51');
test(minimumDifference([3,7,11,15,19,23,27,31,35,39], 20), 1, 'Test 52');
test(minimumDifference([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216], 10000000), 1611392, 'Test 53');
test(minimumDifference([10,20,30,40,50,60,70,80,90,100], 55), 3, 'Test 54');
test(minimumDifference([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 500), 11, 'Test 55');
test(minimumDifference([255, 127, 63, 31, 15, 7, 3, 1], 64), 1, 'Test 56');
test(minimumDifference([1000000000, 999999999, 999999998, 999999997, 999999996], 1000000000), 0, 'Test 57');
test(minimumDifference([9, 18, 27, 36, 45, 54, 63, 72, 81, 90], 40), 4, 'Test 58');
test(minimumDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 16), 1, 'Test 59');
test(minimumDifference([3, 7, 11, 15, 19, 23, 27, 31, 35], 20), 1, 'Test 60');
test(minimumDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 45), 5, 'Test 61');
test(minimumDifference([2,4,6,8,10,12,14,16,18,20], 25), 3, 'Test 62');
test(minimumDifference([255, 127, 63, 31, 15, 7, 3, 1], 100), 27, 'Test 63');
test(minimumDifference([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1024), 1, 'Test 64');
test(minimumDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 4, 'Test 65');
test(minimumDifference([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 30), 1, 'Test 66');
test(minimumDifference([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 10), 3, 'Test 67');
test(minimumDifference([8, 4, 2, 1, 16, 8, 4, 2, 1], 10), 2, 'Test 68');
test(minimumDifference([1024,512,256,128,64,32,16,8,4,2,1], 500), 4, 'Test 69');
test(minimumDifference([999999999,999999998,999999997,999999996,999999995], 999999994), 1, 'Test 70');
test(minimumDifference([31,15,7,3,1,0,1,3,7,15,31], 16), 1, 'Test 71');
test(minimumDifference([255, 127, 63, 31, 15, 7, 3, 1, 256, 512, 1024, 2048, 4096], 1000), 23, 'Test 72');
test(minimumDifference([1,2,4,8,16,32,64,128,256,512,1024], 1000), 8, 'Test 73');
test(minimumDifference([3, 7, 2, 5, 10, 14], 6), 1, 'Test 74');
test(minimumDifference([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 1), 6, 'Test 75');
test(minimumDifference([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 1000000001), 1, 'Test 76');
test(minimumDifference([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 512), 1, 'Test 77');
test(minimumDifference([3, 7, 11, 15, 19, 23, 27, 31, 35, 39], 25), 2, 'Test 78');
test(minimumDifference([8, 16, 32, 64, 128, 256], 200), 8, 'Test 79');
test(minimumDifference([1,1,1,1,1,1,1,1,1,1], 0), 1, 'Test 80');
test(minimumDifference([100,200,300,400,500,600,700,800,900,1000], 750), 14, 'Test 81');
test(minimumDifference([8, 16, 24, 32, 40, 48, 56, 64, 72, 80], 50), 2, 'Test 82');
test(minimumDifference([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47], 20), 1, 'Test 83');
test(minimumDifference([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 0, 'Test 84');
test(minimumDifference([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1023), 1, 'Test 85');
test(minimumDifference([3,5,7,9,11,13,15,17,19,21], 10), 1, 'Test 86');
test(minimumDifference([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61], 42), 1, 'Test 87');
test(minimumDifference([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 77), 2, 'Test 88');
test(minimumDifference([3, 6, 1, 8, 9, 10, 5], 7), 0, 'Test 89');
test(minimumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8), 0, 'Test 90');
test(minimumDifference([1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 1048576), 1024, 'Test 91');
test(minimumDifference([1, 1, 1, 1, 1, 1, 1, 1], 0), 1, 'Test 92');
test(minimumDifference([1, 2, 4, 8, 16, 32, 64, 128, 256], 127), 0, 'Test 93');
test(minimumDifference([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 33), 2, 'Test 94');
test(minimumDifference([9,3,15,8,5,2,7,11,6,4], 13), 0, 'Test 95');
test(minimumDifference([3,7,2,5,6,1,4,8,9], 12), 0, 'Test 96');
test(minimumDifference([100,200,300,400,500,600,700,800,900,1000], 550), 42, 'Test 97');
test(minimumDifference([31, 15, 7, 3, 1], 4), 1, 'Test 98');
test(minimumDifference([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576], 1073741824), 1071644673, 'Test 99');
test(minimumDifference([1,1,1,1,1,1,1,1,1,1], 2), 1, 'Test 100');
test(minimumDifference([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 500), 4, 'Test 101');
test(minimumDifference([2,4,8,16,32,64,128,256,512,1024], 500), 4, 'Test 102');
test(minimumDifference([9, 18, 27, 36, 45, 54, 63, 72, 81, 90], 42), 3, 'Test 103');
test(minimumDifference([13,26,39,52,65,78,91,104,117,130], 85), 6, 'Test 104');
test(minimumDifference([2147483647,2147483647,2147483647,2147483647,2147483647], 1), 2147483646, 'Test 105');
test(minimumDifference([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 1000000000), 0, 'Test 106');
test(minimumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10), 0, 'Test 107');
test(minimumDifference([3,6,9,12,15,18,21], 10), 1, 'Test 108');
test(minimumDifference([2147483647, 2147483646, 2147483645, 2147483644, 2147483643], 2147483640), 3, 'Test 109');
test(minimumDifference([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1024), 0, 'Test 110');
test(minimumDifference([1,2,4,8,16,32,64,128,256,512,1024,2048,4096], 2048), 0, 'Test 111');
test(minimumDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 25), 5, 'Test 112');
test(minimumDifference([5,10,15,20,25,30,35,40,45,50], 28), 1, 'Test 113');
test(minimumDifference([13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 20), 0, 'Test 114');
test(minimumDifference([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768], 16384), 0, 'Test 115');
test(minimumDifference([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 9), 0, 'Test 116');
test(minimumDifference([2, 4, 8, 16, 32, 64, 128], 100), 4, 'Test 117');
test(minimumDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1023), 1022, 'Test 118');
test(minimumDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 1, 'Test 119');
test(minimumDifference([13, 21, 34, 55, 89, 144, 233, 377, 610, 987], 159), 15, 'Test 120');
test(minimumDifference([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 5, 'Test 121');
test(minimumDifference([1, 2, 3, 5, 6, 7, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 27, 29, 30, 31], 28), 1, 'Test 122');
test(minimumDifference([1000000000, 1000000000, 1000000000, 1000000000], 1000000000), 0, 'Test 123');
test(minimumDifference([1000000000,1000000000,1000000000,1000000000,1000000000], 1000000000), 0, 'Test 124');

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
