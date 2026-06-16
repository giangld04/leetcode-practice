// Test: 2568. Minimum Impossible Or
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { minImpossibleOR } = require("./solution");

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

console.log("\n2568. Minimum Impossible Or\n");

test(minImpossibleOR([5,3,2]), 1, 'Test 1');
test(minImpossibleOR([1,2,4,8,16]), 32, 'Test 2');
test(minImpossibleOR([1024,512,256,128,64,32,16,8,4,2,1]), 2048, 'Test 3');
test(minImpossibleOR([2,1]), 4, 'Test 4');
test(minImpossibleOR([7,14,21,28]), 1, 'Test 5');
test(minImpossibleOR([1,3,5,7,9]), 2, 'Test 6');
test(minImpossibleOR([3,6,9,12]), 1, 'Test 7');
test(minImpossibleOR([2,4,8,16,32,64,128,256,512,1024]), 1, 'Test 8');
test(minImpossibleOR([6,10,14,18]), 1, 'Test 9');
test(minImpossibleOR([10,20,30,40,50]), 1, 'Test 10');
test(minImpossibleOR([1024,2048,4096,8192]), 1, 'Test 11');
test(minImpossibleOR([7,14,28,56]), 1, 'Test 12');
test(minImpossibleOR([2,4,8,16,32,64,128,256]), 1, 'Test 13');
test(minImpossibleOR([1,1,1,1,1]), 2, 'Test 14');
test(minImpossibleOR([3,7,15,31,63]), 1, 'Test 15');
test(minImpossibleOR([1000000000,999999999,999999998,999999997]), 1, 'Test 16');
test(minImpossibleOR([1,2,3,4,5,6,7,8]), 16, 'Test 17');
test(minImpossibleOR([7,14,28]), 1, 'Test 18');
test(minImpossibleOR([3,6,9]), 1, 'Test 19');
test(minImpossibleOR([3,7,15,31]), 1, 'Test 20');
test(minImpossibleOR([10,20,30,40]), 1, 'Test 21');
test(minImpossibleOR([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 2, 'Test 22');
test(minImpossibleOR([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]), 32, 'Test 23');
test(minImpossibleOR([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 1, 'Test 24');
test(minImpossibleOR([1023, 2047, 4095, 8191, 16383, 32767, 65535]), 1, 'Test 25');
test(minImpossibleOR([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576]), 2097152, 'Test 26');
test(minImpossibleOR([3, 6, 12, 24, 48, 96, 192, 384, 768, 1536, 3072, 6144]), 1, 'Test 27');
test(minImpossibleOR([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 1024, 'Test 28');
test(minImpossibleOR([3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 1, 'Test 29');
test(minImpossibleOR([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288]), 1048576, 'Test 30');
test(minImpossibleOR([3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), 1, 'Test 31');
test(minImpossibleOR([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575]), 2, 'Test 32');
test(minImpossibleOR([1048576, 2097152, 4194304, 8388608, 16777216, 33554432]), 1, 'Test 33');
test(minImpossibleOR([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095]), 2, 'Test 34');
test(minImpossibleOR([1073741823, 2147483647, 4294967295, 8589934591, 17179869183, 34359738367, 68719476735, 137438953471]), 1, 'Test 35');
test(minImpossibleOR([3, 6, 12, 24, 48, 96, 192, 384, 768, 1536, 3072, 6144, 12288, 24576, 49152, 98304, 196608, 393216, 786432, 1572864]), 1, 'Test 36');
test(minImpossibleOR([1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216, 67108864, 268435456]), 2, 'Test 37');
test(minImpossibleOR([2147483647, 1073741824, 536870912, 268435456, 134217728, 67108864, 33554432, 16777216, 8388608, 4194304, 2097152, 1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 2147483648, 'Test 38');
test(minImpossibleOR([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59]), 2, 'Test 39');
test(minImpossibleOR([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]), 1, 'Test 40');
test(minImpossibleOR([1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767]), 2, 'Test 41');
test(minImpossibleOR([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 65536, 'Test 42');
test(minImpossibleOR([2, 6, 18, 54, 162, 486, 1458, 4374, 13122, 39366]), 1, 'Test 43');
test(minImpossibleOR([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98, 102, 106, 110, 114, 118]), 1, 'Test 44');
test(minImpossibleOR([1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143]), 1, 'Test 45');
test(minImpossibleOR([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023]), 2, 'Test 46');
test(minImpossibleOR([3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]), 1, 'Test 47');
test(minImpossibleOR([8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, 2147483648, 4294967296]), 1, 'Test 48');
test(minImpossibleOR([5,13,29,61,125,253,509,1021,2045,4093,8189,16381,32765,65533,131077]), 1, 'Test 49');
test(minImpossibleOR([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 50');
test(minImpossibleOR([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58]), 1, 'Test 51');
test(minImpossibleOR([2147483647, 2147483646, 2147483645, 2147483644, 2147483643, 2147483642]), 1, 'Test 52');
test(minImpossibleOR([1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125]), 2, 'Test 53');
test(minImpossibleOR([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 1, 'Test 54');
test(minImpossibleOR([1,2,4,8,16,32,64,128,256,512,1024]), 2048, 'Test 55');
test(minImpossibleOR([3, 5, 9, 17, 33, 65, 129, 257, 513]), 1, 'Test 56');
test(minImpossibleOR([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 32768, 'Test 57');
test(minImpossibleOR([5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120]), 1, 'Test 58');
test(minImpossibleOR([2,6,14,30,62,126,254,510,1022,2046,4094,8190,16382,32766,65534]), 1, 'Test 59');
test(minImpossibleOR([256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]), 1, 'Test 60');
test(minImpossibleOR([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]), 1, 'Test 61');
test(minImpossibleOR([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000]), 1, 'Test 62');
test(minImpossibleOR([4, 12, 20, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124]), 1, 'Test 63');
test(minImpossibleOR([31, 63, 127, 255, 511, 1023, 2047, 4095]), 1, 'Test 64');
test(minImpossibleOR([100,200,400,800,1600,3200,6400,12800,25600,51200,102400]), 1, 'Test 65');
test(minImpossibleOR([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 1, 'Test 66');
test(minImpossibleOR([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]), 4096, 'Test 67');
test(minImpossibleOR([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 1, 'Test 68');
test(minImpossibleOR([3, 5, 9, 17, 33, 65, 129, 257, 513, 1025, 2049, 4097, 8193, 16385]), 1, 'Test 69');
test(minImpossibleOR([1,4,16,64,256,1024,4096,16384,65536,262144,1048576,4194304,16777216,67108864,268435456]), 2, 'Test 70');
test(minImpossibleOR([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]), 1, 'Test 71');
test(minImpossibleOR([1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 2, 'Test 72');
test(minImpossibleOR([1000000000, 999999999, 1000000001, 999999998, 1000000002, 999999997, 1000000003, 999999996, 1000000004, 999999995]), 1, 'Test 73');
test(minImpossibleOR([1, 3, 5, 7, 9, 11, 13, 15]), 2, 'Test 74');
test(minImpossibleOR([7, 14, 28, 56, 112, 224, 448, 896, 1792, 3584, 7168]), 1, 'Test 75');
test(minImpossibleOR([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62]), 1, 'Test 76');
test(minImpossibleOR([1, 5, 9, 17, 33, 65, 129, 257, 513, 1025, 2049, 4097]), 2, 'Test 77');
test(minImpossibleOR([1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18, 19, 21, 22, 23, 25, 26, 27, 29, 30, 31, 33]), 4, 'Test 78');
test(minImpossibleOR([1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287]), 1, 'Test 79');
test(minImpossibleOR([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536]), 131072, 'Test 80');
test(minImpossibleOR([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 1, 'Test 81');
test(minImpossibleOR([2, 3, 7, 15, 31, 63, 127, 255, 511, 1023]), 1, 'Test 82');
test(minImpossibleOR([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 32, 'Test 83');
test(minImpossibleOR([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105]), 1, 'Test 84');
test(minImpossibleOR([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57]), 2, 'Test 85');
test(minImpossibleOR([1073741824, 2147483648, 4294967296, 8589934592, 17179869184]), 1, 'Test 86');
test(minImpossibleOR([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1, 'Test 87');
test(minImpossibleOR([255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575]), 1, 'Test 88');
test(minImpossibleOR([3, 5, 6, 9, 10, 12, 15, 17, 18, 20, 24, 30]), 1, 'Test 89');
test(minImpossibleOR([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), 8192, 'Test 90');
test(minImpossibleOR([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144]), 524288, 'Test 91');
test(minImpossibleOR([3, 6, 12, 24, 48, 96, 192, 384, 768, 1536, 3072, 6144, 12288, 24576, 49152]), 1, 'Test 92');
test(minImpossibleOR([31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 32, 'Test 93');
test(minImpossibleOR([2147483647, 1073741824, 536870912, 268435456, 134217728, 67108864, 33554432, 16777216, 8388608, 4194304, 2097152, 1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096]), 1, 'Test 94');
test(minImpossibleOR([2, 6, 10, 14, 18, 22, 26, 30]), 1, 'Test 95');
test(minImpossibleOR([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 2048, 'Test 96');
test(minImpossibleOR([1073741824,536870912,268435456,134217728,67108864,33554432,16777216,8388608,4194304,2097152,1048576]), 1, 'Test 97');
test(minImpossibleOR([4294967295, 2147483647, 1073741823, 536870911, 268435455, 134217727, 67108863, 33554431, 16777215, 8388607, 4194303, 2097151, 1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191]), 1, 'Test 98');
test(minImpossibleOR([1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144]), 2, 'Test 99');
test(minImpossibleOR([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 100');
test(minImpossibleOR([3,11,43,171,683,2731,10923,43691,174763,699051,2796203,11184811,44739243,178956971,715827883]), 1, 'Test 101');
test(minImpossibleOR([3, 5, 6, 9, 10, 12, 17, 18, 20, 24, 33, 34, 36, 40, 48]), 1, 'Test 102');
test(minImpossibleOR([31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767]), 1, 'Test 103');
test(minImpossibleOR([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61]), 2, 'Test 104');
test(minImpossibleOR([7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071]), 1, 'Test 105');
test(minImpossibleOR([9, 18, 36, 72, 144, 288, 576, 1152, 2304, 4608, 9216]), 1, 'Test 106');
test(minImpossibleOR([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77]), 2, 'Test 107');
test(minImpossibleOR([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), 1, 'Test 108');

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
