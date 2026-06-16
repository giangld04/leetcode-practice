// Test: 2044. Count Number Of Maximum Bitwise Or Subsets
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { countMaxOrSubsets } = require("./solution");

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

console.log("\n2044. Count Number Of Maximum Bitwise Or Subsets\n");

test(countMaxOrSubsets([15,15,15]), 7, 'Test 1');
test(countMaxOrSubsets([5,5,5,5,5,5,5,5]), 255, 'Test 2');
test(countMaxOrSubsets([3,2,1,5]), 6, 'Test 3');
test(countMaxOrSubsets([6,2,1,3,4]), 17, 'Test 4');
test(countMaxOrSubsets([6,2,1,5,4]), 17, 'Test 5');
test(countMaxOrSubsets([5,1,1,2,5]), 12, 'Test 6');
test(countMaxOrSubsets([1,3,5,7,9]), 10, 'Test 7');
test(countMaxOrSubsets([1]), 1, 'Test 8');
test(countMaxOrSubsets([2,2,2]), 7, 'Test 9');
test(countMaxOrSubsets([1,3,7,15,31]), 16, 'Test 10');
test(countMaxOrSubsets([15,15,15,15]), 15, 'Test 11');
test(countMaxOrSubsets([1,2,4,8]), 1, 'Test 12');
test(countMaxOrSubsets([10,20,30,40,50]), 16, 'Test 13');
test(countMaxOrSubsets([5,5,5,5,5]), 31, 'Test 14');
test(countMaxOrSubsets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 65535, 'Test 15');
test(countMaxOrSubsets([15,7,3,1]), 8, 'Test 16');
test(countMaxOrSubsets([16,8,4,2,1]), 1, 'Test 17');
test(countMaxOrSubsets([3,1]), 2, 'Test 18');
test(countMaxOrSubsets([1,3,7,15]), 8, 'Test 19');
test(countMaxOrSubsets([1,1,1,1,1,1,1,1]), 255, 'Test 20');
test(countMaxOrSubsets([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 65535, 'Test 21');
test(countMaxOrSubsets([10,20,30,40]), 5, 'Test 22');
test(countMaxOrSubsets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 1]), 3, 'Test 23');
test(countMaxOrSubsets([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 64594, 'Test 24');
test(countMaxOrSubsets([5, 10, 15, 20, 25, 30, 35]), 52, 'Test 25');
test(countMaxOrSubsets([5, 10, 15, 20, 25, 30]), 44, 'Test 26');
test(countMaxOrSubsets([1, 2, 4, 8, 16, 32]), 1, 'Test 27');
test(countMaxOrSubsets([8, 4, 2, 1, 15, 7, 3]), 85, 'Test 28');
test(countMaxOrSubsets([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 65535, 'Test 29');
test(countMaxOrSubsets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3]), 32768, 'Test 30');
test(countMaxOrSubsets([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 64594, 'Test 31');
test(countMaxOrSubsets([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 859, 'Test 32');
test(countMaxOrSubsets([128, 64, 32, 16, 8, 4, 2, 1, 128, 64, 32, 16, 8, 4, 2, 1]), 6561, 'Test 33');
test(countMaxOrSubsets([16384, 16384, 16384, 16384, 16384, 16384, 16384, 16384, 16384, 16384, 16384, 16384, 16384, 16384, 16384, 16384]), 65535, 'Test 34');
test(countMaxOrSubsets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 32767, 'Test 35');
test(countMaxOrSubsets([32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 1, 'Test 36');
test(countMaxOrSubsets([7, 6, 5, 4, 3, 2, 1, 7, 6, 5, 4, 3, 2, 1]), 16203, 'Test 37');
test(countMaxOrSubsets([1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32]), 1, 'Test 38');
test(countMaxOrSubsets([31, 15, 7, 3, 1, 31, 15, 7, 3, 1, 31, 15, 7, 3, 1, 31]), 61440, 'Test 39');
test(countMaxOrSubsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), 32297, 'Test 40');
test(countMaxOrSubsets([7, 6, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0]), 64812, 'Test 41');
test(countMaxOrSubsets([13, 7, 15, 3, 1, 8, 2, 4]), 205, 'Test 42');
test(countMaxOrSubsets([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 32297, 'Test 43');
test(countMaxOrSubsets([1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2]), 64897, 'Test 44');
test(countMaxOrSubsets([1,5,11,5,1,11,5,1,11,5,1,11,5,1]), 14880, 'Test 45');
test(countMaxOrSubsets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1023]), 32768, 'Test 46');
test(countMaxOrSubsets([15, 7, 3, 1]), 8, 'Test 47');
test(countMaxOrSubsets([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 255, 'Test 48');
test(countMaxOrSubsets([5, 5, 5, 5, 5, 5, 5, 5, 5]), 511, 'Test 49');
test(countMaxOrSubsets([1, 2, 4, 8, 16, 32, 64]), 1, 'Test 50');
test(countMaxOrSubsets([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]), 65535, 'Test 51');
test(countMaxOrSubsets([15, 15, 15, 15, 15]), 31, 'Test 52');
test(countMaxOrSubsets([31, 15, 7, 3, 1]), 16, 'Test 53');
test(countMaxOrSubsets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 1, 'Test 54');
test(countMaxOrSubsets([2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536]), 1, 'Test 55');
test(countMaxOrSubsets([255,127,63,31,15,7,3,1]), 128, 'Test 56');
test(countMaxOrSubsets([31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), 64594, 'Test 57');
test(countMaxOrSubsets([65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 32768, 'Test 58');
test(countMaxOrSubsets([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023]), 512, 'Test 59');
test(countMaxOrSubsets([31,28,29,30,31,30,29,28]), 228, 'Test 60');
test(countMaxOrSubsets([17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]), 65535, 'Test 61');
test(countMaxOrSubsets([1, 1, 2, 2, 3, 3, 4, 4]), 171, 'Test 62');
test(countMaxOrSubsets([7, 6, 5, 4, 3, 2, 1]), 109, 'Test 63');
test(countMaxOrSubsets([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 65535, 'Test 64');
test(countMaxOrSubsets([3, 6, 12, 24, 48, 96, 192, 384]), 21, 'Test 65');
test(countMaxOrSubsets([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]), 22336, 'Test 66');
test(countMaxOrSubsets([100000,100000,100000,100000,100000,100000,100000,100000]), 255, 'Test 67');
test(countMaxOrSubsets([8, 16, 24, 32, 40, 48, 56, 64]), 109, 'Test 68');
test(countMaxOrSubsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), Execution timed out, 'Test 69');
test(countMaxOrSubsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]), Execution timed out, 'Test 70');
test(countMaxOrSubsets([255,128,64,32,16,8,4,2,1,256,512,1024,2048,4096,8192,16384]), 257, 'Test 71');
test(countMaxOrSubsets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 65535, 'Test 72');
test(countMaxOrSubsets([5,10,15,20,25,30,35,40]), 150, 'Test 73');
test(countMaxOrSubsets([1, 2, 4, 8, 16, 32, 64, 128]), 1, 'Test 74');
test(countMaxOrSubsets([31, 14, 7, 3, 1, 31, 14, 7, 3, 1]), 768, 'Test 75');
test(countMaxOrSubsets([1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31]), 32768, 'Test 76');
test(countMaxOrSubsets([255, 255, 255, 255, 255, 255, 255, 255]), 255, 'Test 77');
test(countMaxOrSubsets([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600]), 62449, 'Test 78');
test(countMaxOrSubsets([14, 7, 3, 1, 14, 7, 3, 1]), 189, 'Test 79');
test(countMaxOrSubsets([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), 65535, 'Test 80');
test(countMaxOrSubsets([100000, 50000, 25000, 12500, 6250, 3125, 1562]), 13, 'Test 81');
test(countMaxOrSubsets([8, 8, 8, 8, 8, 8, 8, 8]), 255, 'Test 82');
test(countMaxOrSubsets([1023,511,255,127,63,31,15,7,3,1,1,1,1,1,1,1]), 32768, 'Test 83');
test(countMaxOrSubsets([128,64,32,16,8,4,2,1,128,64,32,16,8,4,2,1]), 6561, 'Test 84');
test(countMaxOrSubsets([9,18,27,36,45,54,63,72,81,90,99,108,117,126,135,144]), 48108, 'Test 85');
test(countMaxOrSubsets([32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0]), 32768, 'Test 86');
test(countMaxOrSubsets([1, 1, 2, 2, 4, 4, 8, 8, 16, 16, 32, 32, 64, 64, 128, 128]), 6561, 'Test 87');
test(countMaxOrSubsets([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195]), 170, 'Test 88');
test(countMaxOrSubsets([13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]), 65535, 'Test 89');
test(countMaxOrSubsets([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 512, 'Test 90');
test(countMaxOrSubsets([32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 16384, 'Test 91');
test(countMaxOrSubsets([5, 3, 10, 14, 15, 1, 2, 8, 4, 6, 7, 11, 12, 13, 9]), 32297, 'Test 92');
test(countMaxOrSubsets([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]), 48609, 'Test 93');
test(countMaxOrSubsets([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768]), 1, 'Test 94');
test(countMaxOrSubsets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]), 59421, 'Test 95');
test(countMaxOrSubsets([127, 63, 31, 15, 7, 3, 1]), 64, 'Test 96');
test(countMaxOrSubsets([5, 5, 10, 10, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35, 40, 40]), 59922, 'Test 97');
test(countMaxOrSubsets([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 1, 10, 100, 1000, 10000, 100000]), 2592, 'Test 98');
test(countMaxOrSubsets([31,15,7,3,1,63,127,255,511,1023,1,2,4,8,16,32]), 32768, 'Test 99');
test(countMaxOrSubsets([1,2,4,8,16,32,64,128]), 1, 'Test 100');
test(countMaxOrSubsets([255, 127, 63, 31, 15, 7, 3, 1]), 128, 'Test 101');
test(countMaxOrSubsets([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32767]), 32769, 'Test 102');
test(countMaxOrSubsets([9, 18, 27, 36, 45, 54, 63, 72]), 109, 'Test 103');
test(countMaxOrSubsets([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]), 32768, 'Test 104');
test(countMaxOrSubsets([15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240]), 63775, 'Test 105');
test(countMaxOrSubsets([128, 64, 32, 16, 8, 4, 2, 1]), 1, 'Test 106');
test(countMaxOrSubsets([14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14]), 65535, 'Test 107');
test(countMaxOrSubsets([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 65535, 'Test 108');
test(countMaxOrSubsets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 1, 'Test 109');
test(countMaxOrSubsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 32297, 'Test 110');
test(countMaxOrSubsets([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195, 97, 48, 24, 12, 6, 3]), 12611, 'Test 111');
test(countMaxOrSubsets([1, 3, 7, 15, 31, 63, 127]), 64, 'Test 112');
test(countMaxOrSubsets([1,2,4,8,16,32,64]), 1, 'Test 113');
test(countMaxOrSubsets([7,3,2,1,6,5,4,8,10,9,11,12,13,14,15,16]), 32297, 'Test 114');
test(countMaxOrSubsets([12, 14, 7, 1, 9, 3, 11]), 102, 'Test 115');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

