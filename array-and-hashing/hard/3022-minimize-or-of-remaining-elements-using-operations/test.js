// Test: 3022. Minimize Or Of Remaining Elements Using Operations
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { minOrAfterOperations } = require("./solution");

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

console.log("\n3022. Minimize Or Of Remaining Elements Using Operations\n");

test(minOrAfterOperations([30,20,10,0], 2), 0, 'Test 1');
test(minOrAfterOperations([5,5,5,5,5,5], 5), 5, 'Test 2');
test(minOrAfterOperations([0,0,0,0,0], 0), 0, 'Test 3');
test(minOrAfterOperations([1,0,1,0,1], 2), 1, 'Test 4');
test(minOrAfterOperations([31,31,31,31,31], 3), 31, 'Test 5');
test(minOrAfterOperations([1,2,3,4,5], 3), 0, 'Test 6');
test(minOrAfterOperations([0,0,0,0,0], 2), 0, 'Test 7');
test(minOrAfterOperations([30,29,28,27,26], 5), 0, 'Test 8');
test(minOrAfterOperations([1,2,3,4,5,6,7,8,9,10], 5), 7, 'Test 9');
test(minOrAfterOperations([8,8,8,8,8], 2), 8, 'Test 10');
test(minOrAfterOperations([29,29,29,29,29], 4), 29, 'Test 11');
test(minOrAfterOperations([25,15,5,1,0], 3), 1, 'Test 12');
test(minOrAfterOperations([1,3,5,7,9,11], 3), 1, 'Test 13');
test(minOrAfterOperations([30,29,28,27,26,25], 5), 24, 'Test 14');
test(minOrAfterOperations([10,7,10,3,9,14,9,4], 1), 15, 'Test 15');
test(minOrAfterOperations([1,2,4,8,16], 2), 1, 'Test 16');
test(minOrAfterOperations([8,12,4,6,10], 2), 12, 'Test 17');
test(minOrAfterOperations([1,1,1,1,1,1,1,1,1,1], 9), 1, 'Test 18');
test(minOrAfterOperations([7,3,15,14,2,8], 4), 2, 'Test 19');
test(minOrAfterOperations([31,15,7,3,1], 4), 1, 'Test 20');
test(minOrAfterOperations([16,16,16,16,16], 0), 16, 'Test 21');
test(minOrAfterOperations([31,31,31,31,31], 4), 31, 'Test 22');
test(minOrAfterOperations([3,5,3,2,7], 2), 3, 'Test 23');
test(minOrAfterOperations([1,1,1,1,1], 4), 1, 'Test 24');
test(minOrAfterOperations([31,15,7,3,1], 3), 3, 'Test 25');
test(minOrAfterOperations([7,7,7,7,7,7,7], 6), 7, 'Test 26');
test(minOrAfterOperations([255, 127, 63, 31, 15, 7, 3, 1], 3), 31, 'Test 27');
test(minOrAfterOperations([31, 31, 31, 31, 31, 31, 31, 31, 31, 31], 9), 31, 'Test 28');
test(minOrAfterOperations([15, 7, 7, 7, 7, 7, 7, 7, 7, 7], 4), 7, 'Test 29');
test(minOrAfterOperations([16, 8, 4, 2, 1, 32, 16, 8, 4, 2, 1], 7), 0, 'Test 30');
test(minOrAfterOperations([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 9), 1, 'Test 31');
test(minOrAfterOperations([30, 21, 45, 12, 8, 16, 32, 64, 128, 256], 7), 0, 'Test 32');
test(minOrAfterOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 10), 7, 'Test 33');
test(minOrAfterOperations([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5), 31, 'Test 34');
test(minOrAfterOperations([255, 254, 253, 252, 251, 250, 249, 248, 247, 246], 5), 254, 'Test 35');
test(minOrAfterOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 10), 3, 'Test 36');
test(minOrAfterOperations([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 5), 31, 'Test 37');
test(minOrAfterOperations([128, 64, 32, 16, 8, 4, 2, 1, 0], 7), 0, 'Test 38');
test(minOrAfterOperations([18, 5, 12, 9, 3, 14, 7, 11, 6, 4, 10, 8, 2, 13, 1], 10), 1, 'Test 39');
test(minOrAfterOperations([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575], 19), 1, 'Test 40');
test(minOrAfterOperations([1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 19), 1, 'Test 41');
test(minOrAfterOperations([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], 25), 15, 'Test 42');
test(minOrAfterOperations([31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31], 18), 31, 'Test 43');
test(minOrAfterOperations([31, 14, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 28), 0, 'Test 44');
test(minOrAfterOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 4), 62, 'Test 45');
test(minOrAfterOperations([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1], 5), 15, 'Test 46');
test(minOrAfterOperations([31, 14, 7, 3, 1, 0, 0, 0, 0, 0], 10), 0, 'Test 47');
test(minOrAfterOperations([512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 19), 0, 'Test 48');
test(minOrAfterOperations([2147483647, 1073741823, 536870911, 268435455, 134217727, 67108863, 33554431, 16777215, 8388607, 4194303], 9), 4194303, 'Test 49');
test(minOrAfterOperations([1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 25), 0, 'Test 50');
test(minOrAfterOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 25), 1, 'Test 51');
test(minOrAfterOperations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8], 8), 7, 'Test 52');
test(minOrAfterOperations([1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047], 9), 2047, 'Test 53');
test(minOrAfterOperations([10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120], 9), 0, 'Test 54');
test(minOrAfterOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9), 1, 'Test 55');
test(minOrAfterOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 29), 3, 'Test 56');
test(minOrAfterOperations([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 9), 1, 'Test 57');
test(minOrAfterOperations([31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 29), 0, 'Test 58');
test(minOrAfterOperations([1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023], 9), 1023, 'Test 59');
test(minOrAfterOperations([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 15), 15, 'Test 60');
test(minOrAfterOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19), 1, 'Test 61');
test(minOrAfterOperations([2147483647, 2147483647, 2147483647, 2147483647, 2147483647], 100000), 0, 'Test 62');
test(minOrAfterOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 20), 3, 'Test 63');
test(minOrAfterOperations([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 25), 7, 'Test 64');
test(minOrAfterOperations([255, 255, 255, 255, 255, 255, 255, 255, 255, 255], 9), 255, 'Test 65');
test(minOrAfterOperations([255, 127, 63, 31, 15, 7, 3, 1, 0, 255, 128], 10), 0, 'Test 66');
test(minOrAfterOperations([30, 15, 7, 3, 1, 15, 7, 3, 1, 15, 7, 3, 1, 15, 7, 3, 1, 15, 7, 3], 15), 3, 'Test 67');
test(minOrAfterOperations([30, 29, 28, 27, 26, 25, 24, 23, 22, 21], 5), 28, 'Test 68');
test(minOrAfterOperations([3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 5), 15, 'Test 69');
test(minOrAfterOperations([1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009], 13), 1008, 'Test 70');
test(minOrAfterOperations([29, 21, 13, 5, 1], 3), 5, 'Test 71');
test(minOrAfterOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 29), 1, 'Test 72');
test(minOrAfterOperations([29, 31, 28, 27, 26, 25, 24, 23, 22, 21], 8), 20, 'Test 73');
test(minOrAfterOperations([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 5), 4088, 'Test 74');
test(minOrAfterOperations([29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 29), 0, 'Test 75');
test(minOrAfterOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 13), 0, 'Test 76');
test(minOrAfterOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113], 15), 63, 'Test 77');
test(minOrAfterOperations([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 9), 0, 'Test 78');
test(minOrAfterOperations([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0], 9), 1, 'Test 79');
test(minOrAfterOperations([4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0, 0, 0, 0], 13), 0, 'Test 80');
test(minOrAfterOperations([50, 40, 30, 20, 10, 5, 3, 1], 6), 0, 'Test 81');
test(minOrAfterOperations([255, 127, 63, 31, 15, 7, 3, 1, 255, 127, 63], 10), 1, 'Test 82');
test(minOrAfterOperations([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 10), 0, 'Test 83');
test(minOrAfterOperations([1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 15), 31, 'Test 84');
test(minOrAfterOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 7), 5, 'Test 85');
test(minOrAfterOperations([30, 14, 7, 3, 1, 0, 15, 8, 4, 2], 6), 2, 'Test 86');
test(minOrAfterOperations([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095], 11), 1, 'Test 87');
test(minOrAfterOperations([255, 128, 64, 32, 16, 8, 4, 2, 1], 7), 0, 'Test 88');
test(minOrAfterOperations([255, 128, 64, 32, 16, 8, 4, 2, 1, 255, 128, 64, 32, 16, 8, 4, 2, 1], 17), 0, 'Test 89');
test(minOrAfterOperations([2147483647, 1073741823, 536870911, 268435455, 134217727, 67108863, 33554431, 16777215, 8388607, 4194303], 3), 268435455, 'Test 90');
test(minOrAfterOperations([31, 62, 124, 248, 496, 992, 1984, 3968, 7936, 15872], 8), 24, 'Test 91');
test(minOrAfterOperations([30, 28, 24, 16, 8, 4, 2, 1], 6), 0, 'Test 92');
test(minOrAfterOperations([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 8), 3, 'Test 93');
test(minOrAfterOperations([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 14), 0, 'Test 94');
test(minOrAfterOperations([128, 64, 32, 16, 8, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0], 14), 0, 'Test 95');
test(minOrAfterOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 1, 'Test 96');
test(minOrAfterOperations([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 5), 31, 'Test 97');
test(minOrAfterOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 7), 5, 'Test 98');
test(minOrAfterOperations([29, 21, 14, 7, 3, 1, 0], 6), 0, 'Test 99');
test(minOrAfterOperations([255, 127, 63, 31, 15, 7, 3, 1, 255, 127, 63, 31, 15, 7, 3, 1, 255, 127, 63, 31], 18), 1, 'Test 100');
test(minOrAfterOperations([1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047], 8), 4095, 'Test 101');
test(minOrAfterOperations([29, 17, 3, 15, 8, 12, 7], 3), 15, 'Test 102');
test(minOrAfterOperations([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 5), 16777215, 'Test 103');
test(minOrAfterOperations([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576], 19), 0, 'Test 104');
test(minOrAfterOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 4), 1, 'Test 105');
test(minOrAfterOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 9), 3, 'Test 106');
test(minOrAfterOperations([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 25), 3, 'Test 107');
test(minOrAfterOperations([17, 34, 68, 136, 272, 544, 1088, 2176, 4352, 8704], 5), 0, 'Test 108');
test(minOrAfterOperations([2147483647, 1073741823, 536870911, 268435455, 134217727, 67108863, 33554431, 16777215, 8388607, 4194303, 2097151, 1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 25), 63, 'Test 109');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

