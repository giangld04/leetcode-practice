// Test: 1558. Minimum Numbers Of Function Calls To Make Target Array
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n1558. Minimum Numbers Of Function Calls To Make Target Array\n");

test(minOperations([1,1000000000]), 43, 'Test 1');
test(minOperations([10,20,30]), 12, 'Test 2');
test(minOperations([10,15,20]), 12, 'Test 3');
test(minOperations([1,1,1,1]), 4, 'Test 4');
test(minOperations([3,3,3,3]), 9, 'Test 5');
test(minOperations([2,4,6,8,10]), 10, 'Test 6');
test(minOperations([1,3,5,7,9]), 13, 'Test 7');
test(minOperations([1,5]), 5, 'Test 8');
test(minOperations([1,3,7,15,31]), 19, 'Test 9');
test(minOperations([1000000000,1000000000]), 55, 'Test 10');
test(minOperations([4,2,5]), 6, 'Test 11');
test(minOperations([1000000000,1000000000,1000000000]), 68, 'Test 12');
test(minOperations([3,6,9,12,15]), 15, 'Test 13');
test(minOperations([5,10,15,20,25,30]), 21, 'Test 14');
test(minOperations([1,2,3,4,5]), 9, 'Test 15');
test(minOperations([1023,511,255]), 36, 'Test 16');
test(minOperations([16,8,4,2,1]), 9, 'Test 17');
test(minOperations([0,0,0]), 0, 'Test 18');
test(minOperations([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 19');
test(minOperations([9,9,9,9,9]), 13, 'Test 20');
test(minOperations([2,2]), 3, 'Test 21');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]), 84, 'Test 22');
test(minOperations([81, 27, 9, 3, 1]), 18, 'Test 23');
test(minOperations([100,200,300,400]), 21, 'Test 24');
test(minOperations([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576]), 40, 'Test 25');
test(minOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576]), 41, 'Test 26');
test(minOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 19, 'Test 27');
test(minOperations([1,2,3,4,5,6,7,8,9,10]), 20, 'Test 28');
test(minOperations([1000000000]), 42, 'Test 29');
test(minOperations([1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 41, 'Test 30');
test(minOperations([256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144]), 29, 'Test 31');
test(minOperations([1, 1000000000]), 43, 'Test 32');
test(minOperations([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575]), 229, 'Test 33');
test(minOperations([1048575, 1048574, 1048573, 1048572, 1048571, 1048570, 1048569, 1048568, 1048567, 1048566, 1048565, 1048564, 1048563, 1048562, 1048561, 1048560]), 307, 'Test 34');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), 37, 'Test 35');
test(minOperations([10, 20, 40, 80, 160, 320, 640, 1280, 2560]), 29, 'Test 36');
test(minOperations([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 20, 'Test 37');
test(minOperations([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 38');
test(minOperations([63, 127, 255, 511, 1023]), 49, 'Test 39');
test(minOperations([2147483647, 2147483647, 2147483647, 2147483647, 2147483647]), 185, 'Test 40');
test(minOperations([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 10, 'Test 41');
test(minOperations([8388607, 4194303, 2097151, 1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15]), 292, 'Test 42');
test(minOperations([7, 14, 28, 56, 112, 224, 448, 896, 1792, 3584, 7168, 14336, 28672, 57344, 114688]), 61, 'Test 43');
test(minOperations([31, 15, 7, 3, 1]), 19, 'Test 44');
test(minOperations([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 21, 'Test 45');
test(minOperations([987654321, 123456789, 98765432, 12345678, 9876543, 1234567]), 112, 'Test 46');
test(minOperations([15, 30, 45, 60, 75, 90, 105, 120, 135, 150]), 47, 'Test 47');
test(minOperations([987654321, 876543210, 765432109, 654321098, 543210987, 432109876, 321098765, 210987654, 109876543, 98765432, 87654321, 76543210, 65432109, 54321098, 43210987, 32109876, 21098765, 10987654, 9876543, 8765432]), 320, 'Test 48');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 30, 'Test 49');
test(minOperations([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195, 208, 221, 234, 247, 260]), 87, 'Test 50');
test(minOperations([1000000000, 500000000, 250000000, 125000000, 62500000]), 94, 'Test 51');
test(minOperations([1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 229, 'Test 52');
test(minOperations([999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 999999990]), 224, 'Test 53');
test(minOperations([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383]), 118, 'Test 54');
test(minOperations([31, 31, 31, 31, 31, 31, 31, 31, 31, 31]), 54, 'Test 55');
test(minOperations([1000000000, 1000000000, 1000000000]), 68, 'Test 56');
test(minOperations([16, 8, 4, 2, 1, 0, 0, 0, 0, 0]), 9, 'Test 57');
test(minOperations([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125]), 159, 'Test 58');
test(minOperations([1, 1, 2, 2, 4, 4, 8, 8, 16, 16, 32, 32, 64, 64, 128, 128, 256, 256, 512, 512]), 29, 'Test 59');
test(minOperations([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 16, 'Test 60');
test(minOperations([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 5, 'Test 61');
test(minOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 29, 'Test 62');
test(minOperations([128, 64, 32, 16, 8, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 15, 'Test 63');
test(minOperations([1000000000, 500000000, 250000000, 125000000]), 81, 'Test 64');
test(minOperations([1000000000, 0, 1000000000, 0, 1000000000, 0, 1000000000, 0, 1000000000, 0]), 94, 'Test 65');
test(minOperations([1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048]), 30, 'Test 66');
test(minOperations([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 92, 'Test 67');
test(minOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 29, 'Test 68');
test(minOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), 32, 'Test 69');
test(minOperations([1, 1, 2, 2, 4, 4, 8, 8, 16, 16, 32, 32, 64, 64, 128, 128]), 23, 'Test 70');
test(minOperations([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125, 976562, 488281, 244140, 122070, 61035, 30517, 15258, 7629, 3814, 1907, 953, 476, 238, 119, 59, 29, 14, 7, 3, 1]), 303, 'Test 71');
test(minOperations([29, 14, 7, 3, 1]), 17, 'Test 72');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 20, 'Test 73');
test(minOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 31, 'Test 74');
test(minOperations([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 64, 'Test 75');
test(minOperations([1, 3, 5, 7, 9, 11, 13, 15]), 23, 'Test 76');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 73, 'Test 77');
test(minOperations([1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0]), 8, 'Test 78');
test(minOperations([1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683]), 57, 'Test 79');
test(minOperations([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]), 86, 'Test 80');
test(minOperations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 35, 'Test 81');
test(minOperations([1023, 512, 256, 128, 64]), 23, 'Test 82');
test(minOperations([16, 8, 4, 2, 1, 32, 64, 128, 256, 512]), 19, 'Test 83');
test(minOperations([1073741824, 536870912, 268435456, 134217728, 67108864]), 35, 'Test 84');
test(minOperations([5, 15, 25, 35, 45, 55]), 26, 'Test 85');
test(minOperations([1023, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 29, 'Test 86');
test(minOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), 25, 'Test 87');
test(minOperations([84, 126, 189, 252, 315, 378, 441, 504, 567, 630]), 66, 'Test 88');
test(minOperations([999999999, 999999998, 999999997, 999999996, 999999995]), 129, 'Test 89');
test(minOperations([123456789, 987654321, 135792468, 246813579, 111222333]), 100, 'Test 90');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 35, 'Test 91');
test(minOperations([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 21, 'Test 92');
test(minOperations([13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 82, 'Test 93');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 20, 'Test 94');
test(minOperations([299999999, 299999999, 299999999, 299999999, 299999999]), 113, 'Test 95');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 54, 'Test 96');
test(minOperations([10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 91, 'Test 97');
test(minOperations([1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000]), 106, 'Test 98');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

