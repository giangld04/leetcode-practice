// Test: 2845. Count Of Interesting Subarrays
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { countInterestingSubarrays } = require("./solution");

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

console.log("\n2845. Count Of Interesting Subarrays\n");

test(countInterestingSubarrays([3,2,4], 2, 1), 3, 'Test 1');
test(countInterestingSubarrays([8,12,16,20,24], 4, 0), 2, 'Test 2');
test(countInterestingSubarrays([7,7,7,7,7,7,7], 7, 0), 1, 'Test 3');
test(countInterestingSubarrays([3,1,9,6], 3, 0), 2, 'Test 4');
test(countInterestingSubarrays([5,5,5,5], 5, 0), 0, 'Test 5');
test(countInterestingSubarrays([1,3,5,7,9], 2, 1), 9, 'Test 6');
test(countInterestingSubarrays([7,7,7,7,7,7,7], 7, 3), 0, 'Test 7');
test(countInterestingSubarrays([11,22,33,44,55], 11, 0), 0, 'Test 8');
test(countInterestingSubarrays([7,7,7,7,7], 7, 0), 0, 'Test 9');
test(countInterestingSubarrays([2,4,6,8,10], 2, 0), 6, 'Test 10');
test(countInterestingSubarrays([1,1,1,1,1], 2, 1), 9, 'Test 11');
test(countInterestingSubarrays([7,14,21,28,35], 7, 0), 0, 'Test 12');
test(countInterestingSubarrays([10,20,30,40,50], 5, 0), 1, 'Test 13');
test(countInterestingSubarrays([5,5,5,5,5], 5, 0), 1, 'Test 14');
test(countInterestingSubarrays([13,19,3,5,17], 5, 2), 0, 'Test 15');
test(countInterestingSubarrays([10,20,30,40,50], 10, 0), 0, 'Test 16');
test(countInterestingSubarrays([1,2,3,4,5], 2, 1), 9, 'Test 17');
test(countInterestingSubarrays([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195], 13, 0), 3, 'Test 18');
test(countInterestingSubarrays([8, 16, 24, 32, 40, 48, 56, 64, 72, 80], 8, 4), 0, 'Test 19');
test(countInterestingSubarrays([21,32,43,54,65,76,87,98,109,120,131,142,153,164,175,186], 7, 3), 0, 'Test 20');
test(countInterestingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5, 2), 30, 'Test 21');
test(countInterestingSubarrays([3, 8, 15, 12, 6, 18, 21], 3, 0), 7, 'Test 22');
test(countInterestingSubarrays([3,6,9,12,15,18,21,24,27,30,33,36,39], 3, 0), 26, 'Test 23');
test(countInterestingSubarrays([1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400], 9, 1), 53, 'Test 24');
test(countInterestingSubarrays([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45], 3, 0), 35, 'Test 25');
test(countInterestingSubarrays([13,19,23,29,31,37,41,43,47,53], 11, 1), 24, 'Test 26');
test(countInterestingSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2, 1), 30, 'Test 27');
test(countInterestingSubarrays([2,5,8,11,14,17,20,23,26,29], 3, 1), 0, 'Test 28');
test(countInterestingSubarrays([11,22,33,44,55,66,77,88,99,110], 11, 2), 0, 'Test 29');
test(countInterestingSubarrays([13,26,39,52,65,78,91,104,117,130], 13, 0), 0, 'Test 30');
test(countInterestingSubarrays([9, 18, 27, 36, 45, 54, 63, 72, 81, 90], 9, 0), 2, 'Test 31');
test(countInterestingSubarrays([11,22,33,44,55,66,77,88,99,110], 11, 0), 0, 'Test 32');
test(countInterestingSubarrays([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75], 10, 5), 12, 'Test 33');
test(countInterestingSubarrays([13,19,23,29,31,37,41,43,47,53], 7, 3), 0, 'Test 34');
test(countInterestingSubarrays([42,84,126,168,210,252,294,336,378,420], 42, 0), 0, 'Test 35');
test(countInterestingSubarrays([99, 198, 297, 396, 495, 594, 693, 792, 891, 990], 99, 33), 0, 'Test 36');
test(countInterestingSubarrays([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60], 3, 0), 63, 'Test 37');
test(countInterestingSubarrays([101,202,303,404,505,606,707,808,909,1010], 11, 5), 0, 'Test 38');
test(countInterestingSubarrays([15,14,13,12,11,10,9,8,7,6], 6, 4), 0, 'Test 39');
test(countInterestingSubarrays([21,22,23,24,25,26,27,28,29,30], 7, 2), 3, 'Test 40');
test(countInterestingSubarrays([19, 38, 57, 76, 95, 114, 133, 152, 171, 190, 209, 228, 247, 266, 285], 19, 0), 0, 'Test 41');
test(countInterestingSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2, 1), 30, 'Test 42');
test(countInterestingSubarrays([11, 22, 33, 44, 55, 66, 77, 88, 99, 110], 11, 3), 0, 'Test 43');
test(countInterestingSubarrays([4,8,12,16,20,24,28,32,36,40], 4, 3), 0, 'Test 44');
test(countInterestingSubarrays([9,8,7,6,5,4,3,2,1], 4, 3), 0, 'Test 45');
test(countInterestingSubarrays([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 3, 0), 15, 'Test 46');
test(countInterestingSubarrays([15,25,35,45,55,65,75,85,95,105], 5, 0), 7, 'Test 47');
test(countInterestingSubarrays([123456789, 987654321, 111111111, 222222222, 333333333, 444444444, 555555555, 666666666, 777777777, 888888888], 9, 0), 2, 'Test 48');
test(countInterestingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 2), 12, 'Test 49');
test(countInterestingSubarrays([1,3,5,7,9,11,13,15,17,19], 4, 2), 0, 'Test 50');
test(countInterestingSubarrays([8, 16, 24, 32, 40, 48, 56, 64, 72, 80], 8, 0), 3, 'Test 51');
test(countInterestingSubarrays([1,2,3,4,5,6,7,8,9,10], 3, 1), 25, 'Test 52');
test(countInterestingSubarrays([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 5, 4), 0, 'Test 53');
test(countInterestingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 1), 25, 'Test 54');
test(countInterestingSubarrays([21, 42, 63, 84, 105, 126, 147, 168, 189, 210], 21, 10), 0, 'Test 55');
test(countInterestingSubarrays([2,5,8,11,14,17,20,23,26,29,32,35,38,41,44], 3, 2), 40, 'Test 56');
test(countInterestingSubarrays([1000000000,999999999,888888888,777777777,666666666,555555555], 9, 5), 0, 'Test 57');
test(countInterestingSubarrays([11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143], 11, 0), 3, 'Test 58');
test(countInterestingSubarrays([123,234,345,456,567,678,789,890,901,1012], 13, 4), 0, 'Test 59');
test(countInterestingSubarrays([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 3, 2), 70, 'Test 60');
test(countInterestingSubarrays([4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80], 4, 0), 45, 'Test 61');
test(countInterestingSubarrays([10,20,30,40,50,60,70,80,90,100], 10, 0), 1, 'Test 62');
test(countInterestingSubarrays([101,202,303,404,505,606,707,808,909,1010], 101, 0), 0, 'Test 63');
test(countInterestingSubarrays([15, 30, 45, 60, 75, 90, 105, 120, 135, 150], 15, 5), 0, 'Test 64');
test(countInterestingSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 7, 3), 0, 'Test 65');
test(countInterestingSubarrays([21,42,63,84,105,126,147,168,189,210], 21, 10), 0, 'Test 66');
test(countInterestingSubarrays([12, 24, 36, 48, 60, 72, 84, 96, 108, 120], 12, 3), 0, 'Test 67');
test(countInterestingSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 2, 1), 64, 'Test 68');
test(countInterestingSubarrays([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5, 0), 7, 'Test 69');
test(countInterestingSubarrays([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010], 101, 50), 0, 'Test 70');
test(countInterestingSubarrays([11,22,33,44,55,66,77,88,99,110,121], 11, 3), 0, 'Test 71');
test(countInterestingSubarrays([1000000000,2000000000,3000000000,4000000000,5000000000], 1000000007, 1), 0, 'Test 72');
test(countInterestingSubarrays([100,200,300,400,500,600,700,800,900,1000], 250, 200), 0, 'Test 73');
test(countInterestingSubarrays([1,1,1,1,1,1,1,1,1,1], 2, 1), 30, 'Test 74');
test(countInterestingSubarrays([15,25,35,45,55,65,75,85,95,105], 5, 2), 0, 'Test 75');
test(countInterestingSubarrays([9,8,7,6,5,4,3,2,1,0], 3, 1), 24, 'Test 76');
test(countInterestingSubarrays([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 9, 2), 0, 'Test 77');
test(countInterestingSubarrays([9,8,7,6,5,4,3,2,1,0], 4, 2), 12, 'Test 78');
test(countInterestingSubarrays([11, 22, 33, 44, 55, 66, 77, 88, 99, 110], 11, 10), 0, 'Test 79');
test(countInterestingSubarrays([10,20,30,40,50,60,70,80,90,100], 5, 2), 0, 'Test 80');
test(countInterestingSubarrays([17, 34, 51, 68, 85, 102, 119, 136, 153, 170, 187, 204, 221, 238, 255], 17, 0), 0, 'Test 81');
test(countInterestingSubarrays([11,13,15,17,19,21,23,25,27,29], 7, 3), 0, 'Test 82');
test(countInterestingSubarrays([13, 26, 39, 52, 65, 78, 91, 104, 117, 130], 13, 2), 0, 'Test 83');
test(countInterestingSubarrays([1,3,5,7,9,11,13,15,17,19], 9, 1), 18, 'Test 84');
test(countInterestingSubarrays([12,23,34,45,56,67,78,89,910,1011], 13, 2), 0, 'Test 85');
test(countInterestingSubarrays([2,3,5,7,11,13,17,19,23,29], 10, 3), 4, 'Test 86');
test(countInterestingSubarrays([15,16,17,18,19,20,21,22,23,24,25], 5, 3), 0, 'Test 87');
test(countInterestingSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 0), 1, 'Test 88');
test(countInterestingSubarrays([13,26,39,52,65,78,91,104,117,130], 13, 2), 0, 'Test 89');
test(countInterestingSubarrays([13,26,39,52,65,78,91,104,117,130,143,156,169], 13, 2), 0, 'Test 90');
test(countInterestingSubarrays([123,456,789,101112,131415,161718,192021], 7, 4), 4, 'Test 91');
test(countInterestingSubarrays([101,202,303,404,505,606,707,808,909,1010], 101, 50), 0, 'Test 92');
test(countInterestingSubarrays([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71], 7, 3), 32, 'Test 93');
test(countInterestingSubarrays([1,2,3,4,5,6,7,8,9,10], 3, 2), 15, 'Test 94');
test(countInterestingSubarrays([11, 22, 33, 44, 55, 66, 77, 88, 99, 110], 11, 0), 0, 'Test 95');
test(countInterestingSubarrays([111,222,333,444,555,666,777,888,999,1010], 11, 10), 0, 'Test 96');
test(countInterestingSubarrays([42, 84, 126, 168, 210, 252, 294, 336, 378, 420], 42, 21), 0, 'Test 97');
test(countInterestingSubarrays([14, 28, 42, 56, 70, 84, 98, 112, 126, 140], 14, 7), 0, 'Test 98');
test(countInterestingSubarrays([12,24,36,48,60,72,84,96,108,120], 12, 6), 0, 'Test 99');
test(countInterestingSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 5), 0, 'Test 100');
test(countInterestingSubarrays([5,10,15,20,25,30,35,40,45,50], 15, 5), 0, 'Test 101');
test(countInterestingSubarrays([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115], 5, 0), 11, 'Test 102');
test(countInterestingSubarrays([2, 5, 10, 13, 18, 21, 26, 31, 34, 39], 7, 0), 25, 'Test 103');
test(countInterestingSubarrays([100, 200, 300, 400, 500], 5, 1), 0, 'Test 104');
test(countInterestingSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100, 50), 0, 'Test 105');
test(countInterestingSubarrays([4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 4, 0), 10, 'Test 106');
test(countInterestingSubarrays([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84], 7, 0), 6, 'Test 107');
test(countInterestingSubarrays([15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 5, 0), 7, 'Test 108');
test(countInterestingSubarrays([10,20,30,40,50,60,70,80,90,100], 10, 5), 0, 'Test 109');
test(countInterestingSubarrays([11,22,33,44,55,66,77,88,99,110], 11, 1), 0, 'Test 110');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

