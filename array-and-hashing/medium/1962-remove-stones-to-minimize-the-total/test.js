// Test: 1962. Remove Stones To Minimize The Total
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { minStoneSum } = require("./solution");

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

console.log("\n1962. Remove Stones To Minimize The Total\n");

test(minStoneSum([1,2,3,4,5], 10), 5, 'Test 1');
test(minStoneSum([10,10,10,10], 4), 20, 'Test 2');
test(minStoneSum([5,4,9], 2), 12, 'Test 3');
test(minStoneSum([10,10,10], 1), 25, 'Test 4');
test(minStoneSum([100,200,300], 10), 57, 'Test 5');
test(minStoneSum([4,3,6,7], 3), 12, 'Test 6');
test(minStoneSum([100,200,300], 1), 450, 'Test 7');
test(minStoneSum([10000,10000,10000], 10000), 3, 'Test 8');
test(minStoneSum([100,200,300], 2), 350, 'Test 9');
test(minStoneSum([100,100,100], 10), 33, 'Test 10');
test(minStoneSum([1], 1), 1, 'Test 11');
test(minStoneSum([10000, 10000, 10000], 10000), 3, 'Test 12');
test(minStoneSum([10,10,10], 5), 11, 'Test 13');
test(minStoneSum([1,2,3,4,5], 5), 8, 'Test 14');
test(minStoneSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20), 15, 'Test 15');
test(minStoneSum([123, 456, 789, 101112, 131415, 161718, 192021, 222324, 252627, 282930], 5000), 10, 'Test 16');
test(minStoneSum([9999, 8888, 7777, 6666, 5555, 4444, 3333, 2222, 1111, 1], 100), 25, 'Test 17');
test(minStoneSum([5000, 5000, 5000, 5000, 5000], 25000), 5, 'Test 18');
test(minStoneSum([1000, 500, 250, 125], 10), 252, 'Test 19');
test(minStoneSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 100), 20, 'Test 20');
test(minStoneSum([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991], 100), 10, 'Test 21');
test(minStoneSum([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 50), 1441, 'Test 22');
test(minStoneSum([9999, 9998, 9997, 9996, 9995], 100), 5, 'Test 23');
test(minStoneSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 10, 'Test 24');
test(minStoneSum([1000, 999, 998, 997, 996, 995], 15), 1123, 'Test 25');
test(minStoneSum([10000, 5000, 2500, 1250, 625, 312, 156, 78, 39, 19], 50), 149, 'Test 26');
test(minStoneSum([9999], 10000), 1, 'Test 27');
test(minStoneSum([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000], 1000), 10, 'Test 28');
test(minStoneSum([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 100), 10, 'Test 29');
test(minStoneSum([1,10,100,1000,10000], 100), 5, 'Test 30');
test(minStoneSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 50), 10, 'Test 31');
test(minStoneSum([1,10000]*50000, 100000), Error: Solution.minStoneSum[] missing 1 required positional argument: 'piles', 'Test 32');
test(minStoneSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 20), 117, 'Test 33');
test(minStoneSum([10000, 9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991], 1000), 10, 'Test 34');
test(minStoneSum([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 1000), 20, 'Test 35');
test(minStoneSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 32, 'Test 36');
test(minStoneSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 10, 'Test 37');
test(minStoneSum([1, 100, 1000, 10000, 10000, 1000, 100, 1], 50000), 8, 'Test 38');
test(minStoneSum([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000], 100), 50, 'Test 39');
test(minStoneSum([50,25,75,200,150], 5), 201, 'Test 40');
test(minStoneSum([1,2,3,4,5,6,7,8,9,10], 15), 20, 'Test 41');
test(minStoneSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 20, 'Test 42');
test(minStoneSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 20, 'Test 43');
test(minStoneSum([10000, 1000, 100, 10, 1], 15000), 5, 'Test 44');
test(minStoneSum([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1000), 20, 'Test 45');
test(minStoneSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 200), 10, 'Test 46');
test(minStoneSum([5000, 5000, 5000, 5000, 5000], 1000), 5, 'Test 47');
test(minStoneSum([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 1000), 10, 'Test 48');
test(minStoneSum([1, 1, 2, 2, 4, 4, 8, 8, 16, 16, 32, 32, 64, 64, 128, 128, 256, 256, 512, 512], 100), 20, 'Test 49');
test(minStoneSum([9999, 10000, 10001], 10000), 3, 'Test 50');
test(minStoneSum([10000] * 50000 + [1] * 50000, 100000), Error: Solution.minStoneSum[] missing 1 required positional argument: 'piles', 'Test 51');
test(minStoneSum([1000,500,250,125,63,32,16,8,4,2,1], 30), 63, 'Test 52');
test(minStoneSum([999,1000,1001,1002,1003], 10), 1253, 'Test 53');
test(minStoneSum([500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500], 2500), 20, 'Test 54');
test(minStoneSum([10000,5000,2500,1250,625], 20), 785, 'Test 55');
test(minStoneSum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 30), 63, 'Test 56');
test(minStoneSum([5000, 5000, 5000, 5000, 5000], 100000), 5, 'Test 57');
test(minStoneSum([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 1000), 20, 'Test 58');
test(minStoneSum([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 50), 20, 'Test 59');
test(minStoneSum([10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000], 50), 1441, 'Test 60');
test(minStoneSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 100), 15, 'Test 61');
test(minStoneSum([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 500), 20, 'Test 62');
test(minStoneSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 100), 20, 'Test 63');
test(minStoneSum([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 20), 253, 'Test 64');
test(minStoneSum([9999, 9999, 9999, 9999], 100000), 4, 'Test 65');
test(minStoneSum([1, 10, 100, 1000, 10000], 10), 315, 'Test 66');
test(minStoneSum([10000]*100, 500), Error: Solution.minStoneSum[] missing 1 required positional argument: 'piles', 'Test 67');
test(minStoneSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 20, 'Test 68');
test(minStoneSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1000), 10, 'Test 69');
test(minStoneSum([500, 300, 200, 100], 5), 400, 'Test 70');
test(minStoneSum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 30), 31, 'Test 71');
test(minStoneSum([9999, 8888, 7777, 6666, 5555, 4444, 3333, 2222, 1111], 10000), 9, 'Test 72');
test(minStoneSum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 100), 11, 'Test 73');
test(minStoneSum([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000], 5000), 31, 'Test 74');
test(minStoneSum([9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991, 9990], 50), 3130, 'Test 75');
test(minStoneSum([5000, 4000, 3000, 2000, 1000, 500, 250, 125, 62, 31, 15, 7, 3, 1], 100), 16, 'Test 76');
test(minStoneSum([9999] * 100000, 100000), Error: Solution.minStoneSum[] missing 1 required positional argument: 'piles', 'Test 77');
test(minStoneSum([9999]*50000, 100000), Error: Solution.minStoneSum[] missing 1 required positional argument: 'piles', 'Test 78');
test(minStoneSum([1048576, 1048576, 1048576, 1048576, 1048576, 1048576, 1048576, 1048576, 1048576, 1048576], 100000), 10, 'Test 79');
test(minStoneSum([10, 15, 20, 25, 30, 35, 40, 45, 50], 100), 9, 'Test 80');
test(minStoneSum([9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999], 10000), 20, 'Test 81');
test(minStoneSum([9999, 1, 2, 3, 4, 5], 10), 25, 'Test 82');
test(minStoneSum([1000, 1000, 1000, 1000, 1000], 50), 5, 'Test 83');
test(minStoneSum([50, 100, 150, 200, 250, 300, 350, 400, 450, 500], 100), 10, 'Test 84');
test(minStoneSum([9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991, 9990], 5000), 10, 'Test 85');
test(minStoneSum([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000], 50000), 10, 'Test 86');
test(minStoneSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50), 30, 'Test 87');
test(minStoneSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 100), 20, 'Test 88');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

