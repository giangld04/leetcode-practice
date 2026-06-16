// Test: 2859. Sum Of Values At Indices With K Set Bits
// 83 test cases from LeetCodeDataset
// Run: node test.js

const { sumIndicesWithKSetBits } = require("./solution");

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

console.log("\n2859. Sum Of Values At Indices With K Set Bits\n");

test(sumIndicesWithKSetBits([10,20,30,40,50], 0), 10, 'Test 1');
test(sumIndicesWithKSetBits([1,1,1,1,1,1,1,1,1,1], 3), 1, 'Test 2');
test(sumIndicesWithKSetBits([1,1,1,1,1,1,1,1,1,1], 4), 0, 'Test 3');
test(sumIndicesWithKSetBits([32,16,8,4,2,1], 3), 0, 'Test 4');
test(sumIndicesWithKSetBits([100,200,300,400,500], 3), 0, 'Test 5');
test(sumIndicesWithKSetBits([1,2,3,4,5,6,7,8,9,10], 3), 8, 'Test 6');
test(sumIndicesWithKSetBits([31,14,7,3,1], 0), 31, 'Test 7');
test(sumIndicesWithKSetBits([1,2,3,4,5,6,7,8,9,10], 0), 1, 'Test 8');
test(sumIndicesWithKSetBits([1,2,3,4,5,6,7,8], 2), 17, 'Test 9');
test(sumIndicesWithKSetBits([1,1,1,1,1,1,1,1,1,1], 1), 4, 'Test 10');
test(sumIndicesWithKSetBits([1,1,1,1,1,1,1,1,1,1], 0), 1, 'Test 11');
test(sumIndicesWithKSetBits([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 4), 1, 'Test 12');
test(sumIndicesWithKSetBits([4,3,2,1], 2), 1, 'Test 13');
test(sumIndicesWithKSetBits([5,10,1,5,2], 1), 13, 'Test 14');
test(sumIndicesWithKSetBits([987654, 321098, 654321, 123456, 789012, 456789, 890123, 567890], 3), 567890, 'Test 15');
test(sumIndicesWithKSetBits([255, 127, 63, 31, 15, 7, 3, 1], 3), 1, 'Test 16');
test(sumIndicesWithKSetBits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160], 4), 160, 'Test 17');
test(sumIndicesWithKSetBits([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 0, 'Test 18');
test(sumIndicesWithKSetBits([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768], 1), 556, 'Test 19');
test(sumIndicesWithKSetBits([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255], 4), 390, 'Test 20');
test(sumIndicesWithKSetBits([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 5), 0, 'Test 21');
test(sumIndicesWithKSetBits([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128], 3), 392, 'Test 22');
test(sumIndicesWithKSetBits([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 1, 'Test 23');
test(sumIndicesWithKSetBits([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576], 1), 65814, 'Test 24');
test(sumIndicesWithKSetBits([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384], 5), 0, 'Test 25');
test(sumIndicesWithKSetBits([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75], 2), 255, 'Test 26');
test(sumIndicesWithKSetBits([9,8,7,6,5,4,3,2,1,0], 3), 2, 'Test 27');
test(sumIndicesWithKSetBits([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], 2), 120, 'Test 28');
test(sumIndicesWithKSetBits([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80], 4), 80, 'Test 29');
test(sumIndicesWithKSetBits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 2), 880, 'Test 30');
test(sumIndicesWithKSetBits([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 10, 'Test 31');
test(sumIndicesWithKSetBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 5), 0, 'Test 32');
test(sumIndicesWithKSetBits([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2), 45, 'Test 33');
test(sumIndicesWithKSetBits([111111, 222222, 333333, 444444, 555555, 666666, 777777, 888888, 999999], 4), 0, 'Test 34');
test(sumIndicesWithKSetBits([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 0), 9, 'Test 35');
test(sumIndicesWithKSetBits([31, 62, 93, 124, 155, 186, 217, 248, 279, 310, 341, 372, 403, 434, 465], 2), 1581, 'Test 36');
test(sumIndicesWithKSetBits([15, 23, 45, 67, 89, 101, 113, 125, 137, 149], 3), 125, 'Test 37');
test(sumIndicesWithKSetBits([12, 34, 56, 78, 90, 102, 114, 126, 138, 150, 162, 174], 3), 300, 'Test 38');
test(sumIndicesWithKSetBits([3, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41], 3), 29, 'Test 39');
test(sumIndicesWithKSetBits([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126,133,140,147,154,161,168,175,182,189,196,203,210,217,224,231,238,245,252,259,266,273,280,287,294,301,308,315,322,329,336,343,350,357,364,371,378,385,392,399,406,413,420,427,434,441,448,455,462,469,476,483,490,497,504,511], 6), 448, 'Test 40');
test(sumIndicesWithKSetBits([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600], 2), 5100, 'Test 41');
test(sumIndicesWithKSetBits([1234, 2345, 3456, 4567, 5678, 6789, 7890, 8901, 9012, 10123, 11234, 12345, 13456, 14567, 15678, 16789, 17890, 18901, 19012, 20123, 21234, 22345, 23456, 24567, 25678, 26789, 27890, 28901, 29012, 30123, 31234, 32345, 33456], 5), 32345, 'Test 42');
test(sumIndicesWithKSetBits([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], 5), 0, 'Test 43');
test(sumIndicesWithKSetBits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3), 80, 'Test 44');
test(sumIndicesWithKSetBits([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768], 6), 0, 'Test 45');
test(sumIndicesWithKSetBits([12345, 67890, 54321, 98765, 43210, 87654, 32109, 76543, 21098, 65432], 2), 283960, 'Test 46');
test(sumIndicesWithKSetBits([65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 5), 0, 'Test 47');
test(sumIndicesWithKSetBits([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 3), 196, 'Test 48');
test(sumIndicesWithKSetBits([100,200,300,400,500,600,700,800,900,1000], 1), 1900, 'Test 49');
test(sumIndicesWithKSetBits([31415, 9265, 3589, 7932, 3846, 2643, 3832, 795, 0, 288, 4197, 1693, 9937, 5105, 8209, 7494, 4592, 3078, 1640, 6286, 2089, 9862, 8034, 8253, 4211, 7067, 9, 35010], 4), 50757, 'Test 50');
test(sumIndicesWithKSetBits([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80], 2), 255, 'Test 51');
test(sumIndicesWithKSetBits([65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 6), 0, 'Test 52');
test(sumIndicesWithKSetBits([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 3), 800, 'Test 53');
test(sumIndicesWithKSetBits([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 4), 0, 'Test 54');
test(sumIndicesWithKSetBits([i for i in range[1000]], 1), Error: Solution.sumIndicesWithKSetBits[] missing 1 required positional argument: 'nums', 'Test 55');
test(sumIndicesWithKSetBits([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 2), 2700, 'Test 56');
test(sumIndicesWithKSetBits([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105], 2), 357, 'Test 57');
test(sumIndicesWithKSetBits([3,6,9,12,15,18,21,24,27,30], 3), 24, 'Test 58');
test(sumIndicesWithKSetBits([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 2), 3, 'Test 59');
test(sumIndicesWithKSetBits([15, 30, 45, 60, 75, 90, 105, 120], 4), 0, 'Test 60');
test(sumIndicesWithKSetBits([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990, 99989, 99988, 99987, 99986, 99985, 99984, 99983, 99982, 99981], 5), 0, 'Test 61');
test(sumIndicesWithKSetBits([3**i for i in range[10]], 3), Error: Solution.sumIndicesWithKSetBits[] missing 1 required positional argument: 'nums', 'Test 62');
test(sumIndicesWithKSetBits([9,18,27,36,45,54,63,72,81,90,99,108,117,126,135,144,153,162,171,180,189,198,207,216,225,234,243,252,261,270,279,288,297,306,315,324,333,342,351,360,369,378,387,396,405,414,423,432,441,450,459,468,477,486,495,504,513,522,531,540,549,558,567,576,585,594,603,612,621,630], 7), 0, 'Test 63');
test(sumIndicesWithKSetBits([65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 6), 0, 'Test 64');
test(sumIndicesWithKSetBits([999, 888, 777, 666, 555, 444, 333, 222, 111], 1), 2331, 'Test 65');
test(sumIndicesWithKSetBits([128, 64, 32, 16, 8, 4, 2, 1], 6), 0, 'Test 66');
test(sumIndicesWithKSetBits([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1), 1900, 'Test 67');
test(sumIndicesWithKSetBits([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 2), 96, 'Test 68');
test(sumIndicesWithKSetBits([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767], 3), 53500, 'Test 69');
test(sumIndicesWithKSetBits([2**i for i in range[10]], 10), Error: Solution.sumIndicesWithKSetBits[] missing 1 required positional argument: 'nums', 'Test 70');
test(sumIndicesWithKSetBits([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 4), 31, 'Test 71');
test(sumIndicesWithKSetBits([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768], 5), 0, 'Test 72');
test(sumIndicesWithKSetBits([8, 6, 7, 5, 3, 0, 9, 1], 1), 16, 'Test 73');
test(sumIndicesWithKSetBits([12345, 23456, 34567, 45678, 56789, 67890, 78901, 89012, 90123, 12345], 3), 89012, 'Test 74');
test(sumIndicesWithKSetBits([100000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0), 100000, 'Test 75');
test(sumIndicesWithKSetBits([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63], 0), 1, 'Test 76');
test(sumIndicesWithKSetBits([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987], 3), 1152, 'Test 77');
test(sumIndicesWithKSetBits([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 0, 'Test 78');
test(sumIndicesWithKSetBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 3), 8, 'Test 79');
test(sumIndicesWithKSetBits([98765, 43210, 11111, 88888, 55555, 22222, 77777, 33333, 66666, 44444, 7777, 5555, 2222, 8888, 9999], 3), 57775, 'Test 80');
test(sumIndicesWithKSetBits([4294967295, 2147483647, 1073741823, 536870911, 268435455, 134217727, 67108863, 33554431, 16777215, 8388607], 4), 0, 'Test 81');
test(sumIndicesWithKSetBits([99999] * 1000, 9), Error: Solution.sumIndicesWithKSetBits[] missing 1 required positional argument: 'nums', 'Test 82');
test(sumIndicesWithKSetBits([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140], 5), 0, 'Test 83');

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
