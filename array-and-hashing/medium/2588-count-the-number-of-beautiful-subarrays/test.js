// Test: 2588. Count The Number Of Beautiful Subarrays
// 121 test cases from LeetCodeDataset
// Run: node test.js

const { beautifulSubarrays } = require("./solution");

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

console.log("\n2588. Count The Number Of Beautiful Subarrays\n");

test(beautifulSubarrays([2,2,2,2,2,2,2,2,2,2]), 25, 'Test 1');
test(beautifulSubarrays([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953]), 0, 'Test 2');
test(beautifulSubarrays([1,0,1,0,1]), 6, 'Test 3');
test(beautifulSubarrays([2,4,6,8,10]), 2, 'Test 4');
test(beautifulSubarrays([1,3,5,7,9]), 1, 'Test 5');
test(beautifulSubarrays([1,2,3,4,5,6,7,8,9,10]), 6, 'Test 6');
test(beautifulSubarrays([1]), 0, 'Test 7');
test(beautifulSubarrays([8,1,2,12,7]), 1, 'Test 8');
test(beautifulSubarrays([5,5,5,5,5]), 6, 'Test 9');
test(beautifulSubarrays([8,8,8,8,8]), 6, 'Test 10');
test(beautifulSubarrays([0,0,0,0,0]), 15, 'Test 11');
test(beautifulSubarrays([5,5,5,5]), 4, 'Test 12');
test(beautifulSubarrays([1,3,5,7,9,11,13,15,17,19]), 6, 'Test 13');
test(beautifulSubarrays([1,2,3,4,5]), 2, 'Test 14');
test(beautifulSubarrays([1,10,4]), 0, 'Test 15');
test(beautifulSubarrays([1,1,1,1,1]), 6, 'Test 16');
test(beautifulSubarrays([8,12,10,14,16]), 1, 'Test 17');
test(beautifulSubarrays([1,2,3,4,5,6]), 2, 'Test 18');
test(beautifulSubarrays([8,14,4,8,7]), 0, 'Test 19');
test(beautifulSubarrays([0,0,0,0]), 10, 'Test 20');
test(beautifulSubarrays([2,2,2,2]), 4, 'Test 21');
test(beautifulSubarrays([1000000,500000,250000,125000,62500,31250,15625,7812,3906,1953]), 0, 'Test 22');
test(beautifulSubarrays([4,3,1,2,4]), 2, 'Test 23');
test(beautifulSubarrays([8,10,12,14,16,18,20,22,24,26]), 6, 'Test 24');
test(beautifulSubarrays([1024,512,256,128,64]), 0, 'Test 25');
test(beautifulSubarrays([5,5,5,5,5,5,5,5,5,5]), 25, 'Test 26');
test(beautifulSubarrays([1,2,4,8,16,32,64,128,256,512]), 0, 'Test 27');
test(beautifulSubarrays([2,2,2,2,2]), 6, 'Test 28');
test(beautifulSubarrays([15,15,15,15,15]), 6, 'Test 29');
test(beautifulSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 16, 'Test 30');
test(beautifulSubarrays([21,33,45,57,69,81,93,105,117,129]), 2, 'Test 31');
test(beautifulSubarrays([1048575, 1048575, 1048575, 1048575, 1048575, 1048575, 1048575]), 12, 'Test 32');
test(beautifulSubarrays([31, 15, 7, 3, 1, 1, 3, 7, 15, 31]), 5, 'Test 33');
test(beautifulSubarrays([32, 16, 8, 4, 2, 1, 32, 16, 8, 4, 2, 1]), 1, 'Test 34');
test(beautifulSubarrays([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 25, 'Test 35');
test(beautifulSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 0, 'Test 36');
test(beautifulSubarrays([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023]), 10, 'Test 37');
test(beautifulSubarrays([3,7,11,15,19,23,27,31,35]), 4, 'Test 38');
test(beautifulSubarrays([8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]), 0, 'Test 39');
test(beautifulSubarrays([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575]), 0, 'Test 40');
test(beautifulSubarrays([5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3]), 45, 'Test 41');
test(beautifulSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 16, 'Test 42');
test(beautifulSubarrays([5, 3, 15, 6, 9, 2, 8, 12]), 2, 'Test 43');
test(beautifulSubarrays([1023, 1023, 511, 511, 255, 255, 127, 127, 63, 63, 31, 31, 15, 15, 7, 7, 3, 3, 1, 1]), 55, 'Test 44');
test(beautifulSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), 16, 'Test 45');
test(beautifulSubarrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 210, 'Test 46');
test(beautifulSubarrays([5, 3, 8, 10, 14, 12, 6, 4, 2, 1]), 5, 'Test 47');
test(beautifulSubarrays([8, 16, 24, 32, 40, 48, 56, 64, 72, 80]), 6, 'Test 48');
test(beautifulSubarrays([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 100, 'Test 49');
test(beautifulSubarrays([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 1023, 511, 255]), 0, 'Test 50');
test(beautifulSubarrays([65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 0, 'Test 51');
test(beautifulSubarrays([3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]), 0, 'Test 52');
test(beautifulSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 56, 'Test 53');
test(beautifulSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 55, 'Test 54');
test(beautifulSubarrays([5,6,7,8,9,10,11,12,13,14,15]), 6, 'Test 55');
test(beautifulSubarrays([1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 0, 'Test 56');
test(beautifulSubarrays([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953, 976, 488, 244, 122, 61]), 0, 'Test 57');
test(beautifulSubarrays([4095, 4095, 4095, 4095, 4095, 4095, 4095, 4095, 4095, 4095, 4095, 4095, 4095, 4095, 4095, 4095]), 64, 'Test 58');
test(beautifulSubarrays([255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]), 56, 'Test 59');
test(beautifulSubarrays([13,17,21,25,29,33,37,41,45,49,53,57]), 6, 'Test 60');
test(beautifulSubarrays([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 100, 'Test 61');
test(beautifulSubarrays([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]), 7, 'Test 62');
test(beautifulSubarrays([5, 7, 1, 3, 9, 6, 2, 8, 4, 10]), 2, 'Test 63');
test(beautifulSubarrays([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2]), 0, 'Test 64');
test(beautifulSubarrays([255, 127, 63, 31, 15, 7, 3, 1, 1, 3, 7, 15, 31]), 5, 'Test 65');
test(beautifulSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 0, 'Test 66');
test(beautifulSubarrays([255, 128, 64, 32, 16, 8, 4, 2, 1, 255]), 2, 'Test 67');
test(beautifulSubarrays([3, 5, 11, 7, 3, 5, 11, 7]), 1, 'Test 68');
test(beautifulSubarrays([104729, 209458, 418916, 837832, 1675664, 3351328, 6702656, 13405312, 26810624, 53621248]), 0, 'Test 69');
test(beautifulSubarrays([65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 1, 3, 15, 31]), 2, 'Test 70');
test(beautifulSubarrays([23, 17, 5, 10, 14, 6, 9, 3, 11, 15, 2, 7, 13]), 2, 'Test 71');
test(beautifulSubarrays([15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210]), 12, 'Test 72');
test(beautifulSubarrays([255, 128, 64, 32, 16, 8, 4, 2, 1]), 1, 'Test 73');
test(beautifulSubarrays([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 100, 'Test 74');
test(beautifulSubarrays([32, 16, 8, 4, 2, 1, 1, 2, 4, 8, 16, 32, 1, 2, 4, 8, 16, 32]), 7, 'Test 75');
test(beautifulSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 100, 'Test 76');
test(beautifulSubarrays([31, 28, 19, 5, 11, 23, 17, 7, 9, 3]), 2, 'Test 77');
test(beautifulSubarrays([7, 5, 3, 2, 5, 3, 7, 2]), 2, 'Test 78');
test(beautifulSubarrays([1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023]), 25, 'Test 79');
test(beautifulSubarrays([1, 3, 2, 7, 6, 5, 4, 15, 14, 13, 12, 11, 10, 9, 8]), 16, 'Test 80');
test(beautifulSubarrays([31, 14, 7, 14, 31]), 0, 'Test 81');
test(beautifulSubarrays([256,512,1024,2048,4096,8192,16384]), 0, 'Test 82');
test(beautifulSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 16, 'Test 83');
test(beautifulSubarrays([1,2,4,8,16,32,64,128,256,512,1024,2048]), 0, 'Test 84');
test(beautifulSubarrays([3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1]), 45, 'Test 85');
test(beautifulSubarrays([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 0, 'Test 86');
test(beautifulSubarrays([31, 14, 7, 15, 28, 21, 24, 13, 26, 19]), 2, 'Test 87');
test(beautifulSubarrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 55, 'Test 88');
test(beautifulSubarrays([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 49, 'Test 89');
test(beautifulSubarrays([31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 16, 'Test 90');
test(beautifulSubarrays([7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), 25, 'Test 91');
test(beautifulSubarrays([31, 17, 15, 23, 29, 31, 19, 23, 29]), 0, 'Test 92');
test(beautifulSubarrays([65535, 65535, 65535, 65535, 65535, 65535, 65535, 65535]), 16, 'Test 93');
test(beautifulSubarrays([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 0, 'Test 94');
test(beautifulSubarrays([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105]), 4, 'Test 95');
test(beautifulSubarrays([31, 14, 7, 3, 1, 0, 1, 3, 7, 14, 31]), 6, 'Test 96');
test(beautifulSubarrays([9, 5, 12, 6, 3, 15, 8, 4, 10, 2, 7, 11, 1, 13, 14]), 8, 'Test 97');
test(beautifulSubarrays([29, 25, 21, 17, 13, 9, 5, 1, 1, 5, 9, 13, 17, 21, 25, 29]), 20, 'Test 98');
test(beautifulSubarrays([104729, 209458, 418916, 837832, 1675664, 3351328, 6702656]), 0, 'Test 99');
test(beautifulSubarrays([255, 127, 63, 31, 15, 7, 3, 1]), 0, 'Test 100');
test(beautifulSubarrays([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135]), 4, 'Test 101');
test(beautifulSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), 0, 'Test 102');
test(beautifulSubarrays([5, 3, 7, 2, 1, 10, 6, 8, 4, 12]), 3, 'Test 103');
test(beautifulSubarrays([1, 3, 3, 1, 1, 3, 3, 1, 1, 3, 3, 1, 1, 3, 3, 1, 1, 3, 3, 1]), 70, 'Test 104');
test(beautifulSubarrays([9, 3, 7, 15, 31, 15, 7, 3, 9]), 0, 'Test 105');
test(beautifulSubarrays([9,18,27,36,45,54,63,72,81,90]), 4, 'Test 106');
test(beautifulSubarrays([3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), 4, 'Test 107');
test(beautifulSubarrays([13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]), 56, 'Test 108');
test(beautifulSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 0, 'Test 109');
test(beautifulSubarrays([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 0, 'Test 110');
test(beautifulSubarrays([1000000,500000,250000,125000,62500,31250,15625,7812,3906,1953,976,488,244,122,61,30,15,7,3,1]), 0, 'Test 111');
test(beautifulSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 100, 'Test 112');
test(beautifulSubarrays([1023,511,255,127,63,31,15,7,3,1]), 0, 'Test 113');
test(beautifulSubarrays([64, 32, 16, 8, 4, 2, 1, 128, 64, 32, 16, 8, 4, 2, 1]), 0, 'Test 114');
test(beautifulSubarrays([3, 1, 5, 7, 2, 4, 6, 8, 10, 12]), 6, 'Test 115');
test(beautifulSubarrays([255, 127, 63, 31, 15, 7, 3, 1, 1, 3, 7, 15, 31, 63, 127, 255]), 8, 'Test 116');
test(beautifulSubarrays([13, 11, 7, 5, 3, 2, 1, 1, 2, 3, 5, 7, 11, 13]), 9, 'Test 117');
test(beautifulSubarrays([31, 14, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 1, 'Test 118');
test(beautifulSubarrays([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]), 27, 'Test 119');
test(beautifulSubarrays([17, 34, 68, 136, 272, 544, 1088, 2176, 4352, 8704, 17408, 34816, 69632, 139264, 278528]), 0, 'Test 120');
test(beautifulSubarrays([5, 3, 6, 12, 5, 3, 6, 12]), 4, 'Test 121');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

