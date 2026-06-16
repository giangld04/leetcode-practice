// Test: 2354. Number Of Excellent Pairs
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { countExcellentPairs } = require("./solution");

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

console.log("\n2354. Number Of Excellent Pairs\n");

test(countExcellentPairs([1, 1, 1, 1], 1), 1, 'Test 1');
test(countExcellentPairs([2, 4, 8, 16], 3), 0, 'Test 2');
test(countExcellentPairs([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 4), 93, 'Test 3');
test(countExcellentPairs([1,2,4,8,16,32], 3), 0, 'Test 4');
test(countExcellentPairs([9,10,11,12,13,14,15], 7), 7, 'Test 5');
test(countExcellentPairs([1, 1, 2, 3, 4], 2), 16, 'Test 6');
test(countExcellentPairs([1023,511,255,127,63,31,15,7,3,1], 9), 72, 'Test 7');
test(countExcellentPairs([5,1,1], 10), 0, 'Test 8');
test(countExcellentPairs([31, 14, 7, 3], 6), 11, 'Test 9');
test(countExcellentPairs([1, 3, 5, 7], 4), 11, 'Test 10');
test(countExcellentPairs([3,1,2,5,3,4], 4), 4, 'Test 11');
test(countExcellentPairs([7, 8, 9], 5), 3, 'Test 12');
test(countExcellentPairs([1,1,1,1], 1), 1, 'Test 13');
test(countExcellentPairs([31, 14, 7, 1], 8), 5, 'Test 14');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 5), 0, 'Test 15');
test(countExcellentPairs([1,2,3,1], 3), 5, 'Test 16');
test(countExcellentPairs([6,5,3,1,8,7,2,4], 6), 1, 'Test 17');
test(countExcellentPairs([7, 7, 7, 7], 5), 1, 'Test 18');
test(countExcellentPairs([1023, 511, 255, 127], 10), 16, 'Test 19');
test(countExcellentPairs([8,8,8,8], 4), 0, 'Test 20');
test(countExcellentPairs([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 3), 0, 'Test 21');
test(countExcellentPairs([7,10,4,3,15], 5), 14, 'Test 22');
test(countExcellentPairs([31, 15, 7, 3, 1], 8), 6, 'Test 23');
test(countExcellentPairs([9, 18, 27, 36, 45, 54, 63, 72, 81, 90], 6), 76, 'Test 24');
test(countExcellentPairs([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 10), 64, 'Test 25');
test(countExcellentPairs([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 15), 21, 'Test 26');
test(countExcellentPairs([2147483647, 2147483646, 2147483645, 2147483644, 2147483643, 2147483642, 2147483641, 2147483640, 2147483639, 2147483638], 30), 100, 'Test 27');
test(countExcellentPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 5), 348, 'Test 28');
test(countExcellentPairs([1000000000, 500000000, 250000000, 125000000, 62500000], 10), 25, 'Test 29');
test(countExcellentPairs([15, 8, 7, 3, 1, 1, 2, 2], 4), 21, 'Test 30');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096], 10), 0, 'Test 31');
test(countExcellentPairs([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7], 4), 22, 'Test 32');
test(countExcellentPairs([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1), 100, 'Test 33');
test(countExcellentPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 3), 209, 'Test 34');
test(countExcellentPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 5), 200, 'Test 35');
test(countExcellentPairs([123456789, 987654321, 234567891, 198765432, 345678912, 456789123, 567891234, 678912345, 789123456, 891234567], 25), 88, 'Test 36');
test(countExcellentPairs([2**i for i in range[30]] + [2**i for i in range[30]], 20), Error: Solution.countExcellentPairs[] missing 1 required positional argument: 'nums', 'Test 37');
test(countExcellentPairs([1023, 2047, 4095, 8191, 16383], 15), 25, 'Test 38');
test(countExcellentPairs([2**i for i in range[30]], 28), Error: Solution.countExcellentPairs[] missing 1 required positional argument: 'nums', 'Test 39');
test(countExcellentPairs([1, 5, 17, 33, 65, 129, 257, 513, 1025, 2049, 4097, 8193, 16385, 32769, 65537, 131073, 262145, 524289, 1048577, 2097153], 18), 0, 'Test 40');
test(countExcellentPairs([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 9), 72, 'Test 41');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 25), 0, 'Test 42');
test(countExcellentPairs([i for i in range[1, 10000] if i %, = 1], 12), Error: Solution.countExcellentPairs[] missing 1 required positional argument: 'nums', 'Test 43');
test(countExcellentPairs([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125, 976562, 488281, 244140, 122070, 61035, 30517, 15258, 7629, 3814, 1907], 25), 140, 'Test 44');
test(countExcellentPairs([2**i - 1 for i in range[30]], 25), Error: Solution.countExcellentPairs[] missing 1 required positional argument: 'nums', 'Test 45');
test(countExcellentPairs([5, 13, 15, 31, 7, 63], 8), 19, 'Test 46');
test(countExcellentPairs([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000], 10), 36, 'Test 47');
test(countExcellentPairs([128, 256, 512, 1024, 2048, 4096], 7), 0, 'Test 48');
test(countExcellentPairs([31, 14, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128], 7), 7, 'Test 49');
test(countExcellentPairs([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 20), 100, 'Test 50');
test(countExcellentPairs([1023, 511, 255, 127, 63, 31], 10), 36, 'Test 51');
test(countExcellentPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 52');
test(countExcellentPairs([29, 15, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 12, 'Test 53');
test(countExcellentPairs([5, 7, 15, 31, 63, 127, 255, 511, 1023, 2047], 15), 36, 'Test 54');
test(countExcellentPairs([7, 11, 13, 17, 19, 23, 29, 31], 6), 55, 'Test 55');
test(countExcellentPairs([100, 200, 300, 400, 500], 8), 10, 'Test 56');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 7), 0, 'Test 57');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 15), 0, 'Test 58');
test(countExcellentPairs([1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 20), 229, 'Test 59');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 6), 0, 'Test 60');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 10), 0, 'Test 61');
test(countExcellentPairs([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 4), 44, 'Test 62');
test(countExcellentPairs([3, 7, 15, 31, 63], 5), 24, 'Test 63');
test(countExcellentPairs([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 9), 72, 'Test 64');
test(countExcellentPairs([5, 7, 13, 17, 23, 29, 31, 37, 41, 43, 47, 53, 59], 8), 73, 'Test 65');
test(countExcellentPairs([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], 18), 120, 'Test 66');
test(countExcellentPairs([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 10), 67, 'Test 67');
test(countExcellentPairs([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8], 3), 48, 'Test 68');
test(countExcellentPairs([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 10), 64, 'Test 69');
test(countExcellentPairs([3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047], 12), 64, 'Test 70');
test(countExcellentPairs([7, 11, 13, 14, 15], 5), 25, 'Test 71');
test(countExcellentPairs([2147483647, 1073741823, 536870911, 268435455, 134217727, 67108863, 33554431, 16777215, 8388607, 4194303], 20), 100, 'Test 72');
test(countExcellentPairs([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191], 14), 91, 'Test 73');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096], 8), 0, 'Test 74');
test(countExcellentPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 5), 219, 'Test 75');
test(countExcellentPairs([255, 127, 63, 31, 15, 7, 3, 1, 1], 10), 28, 'Test 76');
test(countExcellentPairs([10, 20, 30, 40, 50], 5), 16, 'Test 77');
test(countExcellentPairs([3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 5), 209, 'Test 78');
test(countExcellentPairs([29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29], 5), 1, 'Test 79');
test(countExcellentPairs([999999937, 999999938, 999999939, 999999940, 999999941, 999999942, 999999943, 999999944, 999999945, 999999946], 40), 0, 'Test 80');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 14), 0, 'Test 81');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64], 7), 0, 'Test 82');
test(countExcellentPairs([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125, 976562, 488281, 244140, 122070, 61035, 30517], 20), 256, 'Test 83');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64], 10), 0, 'Test 84');
test(countExcellentPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), 44, 'Test 85');
test(countExcellentPairs([2, 4, 8, 16, 32], 5), 0, 'Test 86');
test(countExcellentPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 4), 285, 'Test 87');
test(countExcellentPairs([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575], 12), 345, 'Test 88');
test(countExcellentPairs([29, 17, 23, 30, 14, 11, 13, 19, 21, 22], 6), 87, 'Test 89');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 10), 0, 'Test 90');
test(countExcellentPairs([3, 5, 6, 9, 10, 12, 17, 18, 20, 24, 25, 27, 30, 33, 34, 36, 40, 41, 42, 45, 48, 50, 51, 54, 57, 60, 62, 65, 66, 68, 72, 73, 74, 77, 80, 81, 82, 85, 88, 90, 93, 96, 98, 101, 102, 104, 105, 106, 108, 112, 113, 114, 117, 120, 122, 125, 126, 129, 130, 132, 135, 136, 138, 140, 141, 142, 144, 145, 146, 148, 150, 153, 154, 156, 159, 160, 162, 165, 168, 170, 171, 172, 174, 177, 180, 182, 185, 186, 188, 190, 192, 193, 194, 195, 196, 198, 200, 201, 204, 205, 208, 210, 213, 216, 218, 219, 220, 222, 224, 225, 226, 228, 230, 231, 232, 234, 237, 240, 242, 243, 244, 246, 248, 249, 250, 252, 255], 6), 13945, 'Test 91');
test(countExcellentPairs([3, 5, 9, 17, 33, 65, 129, 257, 513], 7), 0, 'Test 92');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 7), 0, 'Test 93');
test(countExcellentPairs([5, 6, 7, 8, 9, 10, 11, 12], 5), 24, 'Test 94');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 12), 0, 'Test 95');
test(countExcellentPairs([3, 3, 3, 3, 3, 3, 3, 3, 3], 1), 1, 'Test 96');
test(countExcellentPairs([1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023], 15), 1, 'Test 97');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 2), 100, 'Test 98');
test(countExcellentPairs([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 12), 45, 'Test 99');
test(countExcellentPairs([2147483647, 1073741823, 536870911, 268435455, 134217727, 67108863, 33554431], 25), 49, 'Test 100');
test(countExcellentPairs([3, 3, 3, 5, 5, 5, 7, 7, 7], 4), 9, 'Test 101');
test(countExcellentPairs([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 25), 100, 'Test 102');
test(countExcellentPairs([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767], 12), 170, 'Test 103');
test(countExcellentPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 5), 636, 'Test 104');
test(countExcellentPairs([5, 3, 9, 7, 11], 4), 25, 'Test 105');
test(countExcellentPairs([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 3), 16, 'Test 106');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 22), 0, 'Test 107');
test(countExcellentPairs([1, 3, 7, 15, 31, 63, 127, 255], 10), 28, 'Test 108');
test(countExcellentPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 4), 247, 'Test 109');
test(countExcellentPairs([33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, 2147483648, 4294967295], 30), 15, 'Test 110');
test(countExcellentPairs([98304, 49152, 24576, 12288, 6144, 3072, 1536, 768, 384, 192, 96, 48, 24, 12, 6, 3, 1, 1, 1, 1], 12), 0, 'Test 111');
test(countExcellentPairs([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 12), 100, 'Test 112');
test(countExcellentPairs([134217728, 67108864, 33554432, 16777216, 8388608, 4194304, 2097152, 1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 15), 0, 'Test 113');
test(countExcellentPairs([8, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180], 4), 239, 'Test 114');
test(countExcellentPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 8), 0, 'Test 115');

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
