// Test: 2321. Maximum Score Of Spliced Array
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { maximumsSplicedArray } = require("./solution");

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

console.log("\n2321. Maximum Score Of Spliced Array\n");

test(maximumsSplicedArray([20,40,20,70,30], [50,20,50,40,20]), 220, 'Test 1');
test(maximumsSplicedArray([10,20,30,40,50], [5,15,25,35,45]), 150, 'Test 2');
test(maximumsSplicedArray([1,1,1,1,1], [10000,10000,10000,10000,10000]), 50000, 'Test 3');
test(maximumsSplicedArray([100,200,300], [300,200,100]), 800, 'Test 4');
test(maximumsSplicedArray([1,2,3], [4,5,6]), 15, 'Test 5');
test(maximumsSplicedArray([5000,5000,5000], [5000,5000,5000]), 15000, 'Test 6');
test(maximumsSplicedArray([1,2,3], [3,2,1]), 8, 'Test 7');
test(maximumsSplicedArray([1,3,5,7,9], [2,4,6,8,10]), 30, 'Test 8');
test(maximumsSplicedArray([5000,5000,5000,5000,5000], [6000,6000,6000,6000,6000]), 30000, 'Test 9');
test(maximumsSplicedArray([1,2,3,4,5], [5,4,3,2,1]), 21, 'Test 10');
test(maximumsSplicedArray([5,5,5,5,5], [5,5,5,5,5]), 25, 'Test 11');
test(maximumsSplicedArray([10000,10000,10000], [1,1,1]), 30000, 'Test 12');
test(maximumsSplicedArray([60,60,60], [10,90,10]), 210, 'Test 13');
test(maximumsSplicedArray([1,1,1], [10000,10000,10000]), 30000, 'Test 14');
test(maximumsSplicedArray([7,11,13], [1,1,1]), 31, 'Test 15');
test(maximumsSplicedArray([9,8,7], [1,2,3]), 24, 'Test 16');
test(maximumsSplicedArray([3, 5, 7, 9, 11, 13, 15, 17, 19, 21], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 120, 'Test 17');
test(maximumsSplicedArray([5, 5, 5, 5, 5], [1, 2, 3, 4, 5]), 25, 'Test 18');
test(maximumsSplicedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 310, 'Test 19');
test(maximumsSplicedArray([10000, 10000, 10000, 10000, 10000], [5000, 5000, 5000, 5000, 5000]), 50000, 'Test 20');
test(maximumsSplicedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 2, 30, 4, 50, 6, 70, 8, 90, 10]), 280, 'Test 21');
test(maximumsSplicedArray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 5500, 'Test 22');
test(maximumsSplicedArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), 15, 'Test 23');
test(maximumsSplicedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 550, 'Test 24');
test(maximumsSplicedArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 800, 'Test 25');
test(maximumsSplicedArray([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 55000, 'Test 26');
test(maximumsSplicedArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 50, 'Test 27');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 30, 'Test 28');
test(maximumsSplicedArray([10000, 1, 10000, 1, 10000], [1, 10000, 1, 10000, 1]), 40001, 'Test 29');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]), 200000, 'Test 30');
test(maximumsSplicedArray([5, 1, 3, 7, 9, 11, 13, 15, 17, 19], [1, 5, 1, 5, 1, 5, 1, 5, 1, 5]), 104, 'Test 31');
test(maximumsSplicedArray([5000, 3000, 1000, 500, 250], [250, 500, 1000, 3000, 5000]), 17000, 'Test 32');
test(maximumsSplicedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 176, 'Test 33');
test(maximumsSplicedArray([5, 10, 15, 20, 25], [1, 6, 11, 16, 21]), 75, 'Test 34');
test(maximumsSplicedArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), 42, 'Test 35');
test(maximumsSplicedArray([10000, 10000, 10000, 10000, 10000], [9999, 9999, 9999, 9999, 9999]), 50000, 'Test 36');
test(maximumsSplicedArray([9999, 9999, 9999, 9999, 9999], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 50005, 'Test 37');
test(maximumsSplicedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 55, 'Test 38');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 45, 'Test 39');
test(maximumsSplicedArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], [200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 3100, 'Test 40');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999]), 99990, 'Test 41');
test(maximumsSplicedArray([5, 6, 7, 8, 9], [9, 8, 7, 6, 5]), 41, 'Test 42');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]), 150000, 'Test 43');
test(maximumsSplicedArray([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 58, 'Test 44');
test(maximumsSplicedArray([10000, 1, 10000, 1, 10000, 1, 10000, 1, 10000, 1], [1, 10000, 1, 10000, 1, 10000, 1, 10000, 1, 10000]), 60004, 'Test 45');
test(maximumsSplicedArray([10000, 9000, 8000, 7000, 6000], [100, 200, 300, 400, 500]), 40000, 'Test 46');
test(maximumsSplicedArray([5000, 2000, 3000, 4000, 1000], [1000, 4000, 3000, 2000, 5000]), 19000, 'Test 47');
test(maximumsSplicedArray([9999, 9998, 9997, 9996, 9995], [1, 2, 3, 4, 5]), 49985, 'Test 48');
test(maximumsSplicedArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 36, 'Test 49');
test(maximumsSplicedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 80, 'Test 50');
test(maximumsSplicedArray([5000, 5000, 5000, 5000, 5000], [10000, 10000, 10000, 10000, 10000]), 50000, 'Test 51');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 55, 'Test 52');
test(maximumsSplicedArray([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 550, 'Test 53');
test(maximumsSplicedArray([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], [9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000]), 100000, 'Test 54');
test(maximumsSplicedArray([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), 400, 'Test 55');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]), 100000, 'Test 56');
test(maximumsSplicedArray([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 50000, 'Test 57');
test(maximumsSplicedArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 550, 'Test 58');
test(maximumsSplicedArray([100, 100, 100, 100, 100], [200, 200, 200, 200, 200]), 1000, 'Test 59');
test(maximumsSplicedArray([1000, 2000, 3000, 4000, 5000], [5000, 4000, 3000, 2000, 1000]), 21000, 'Test 60');
test(maximumsSplicedArray([5000, 5000, 5000, 5000, 5000], [5000, 5000, 5000, 5000, 5000]), 25000, 'Test 61');
test(maximumsSplicedArray([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1000, 'Test 62');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 40, 'Test 63');
test(maximumsSplicedArray([1, 100, 1, 100, 1, 100, 1, 100, 1, 100], [100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 604, 'Test 64');
test(maximumsSplicedArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 100, 'Test 65');
test(maximumsSplicedArray([10000] * 10000, [1] * 10000), Error: Solution.maximumsSplicedArray[] missing 2 required positional arguments: 'nums1' and 'nums2', 'Test 66');
test(maximumsSplicedArray([1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 1, 1, 1, 1, 1]), 26, 'Test 67');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 20, 'Test 68');
test(maximumsSplicedArray([1, 2, 3, 4, 5, 100, 200, 300, 400, 500], [500, 400, 300, 200, 100, 5, 4, 3, 2, 1]), 3000, 'Test 69');
test(maximumsSplicedArray([1, 10, 100, 1000, 10000], [10000, 1000, 100, 10, 1]), 22100, 'Test 70');
test(maximumsSplicedArray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 5500, 'Test 71');
test(maximumsSplicedArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 50, 'Test 72');
test(maximumsSplicedArray([100, 50, 30, 20, 10], [10, 20, 30, 50, 100]), 330, 'Test 73');
test(maximumsSplicedArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 110, 'Test 74');
test(maximumsSplicedArray([10, 20, 30, 40, 50], [100, 90, 80, 70, 60]), 400, 'Test 75');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10000] * 20), Error: Solution.maximumsSplicedArray[] missing 1 required positional argument: 'nums2', 'Test 76');
test(maximumsSplicedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 77');
test(maximumsSplicedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 78');
test(maximumsSplicedArray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]), 8000, 'Test 79');
test(maximumsSplicedArray([10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000], [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), 80000, 'Test 80');
test(maximumsSplicedArray([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]), 40, 'Test 81');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]), 60, 'Test 82');
test(maximumsSplicedArray([5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [14, 13, 12, 11, 10, 9, 8, 7, 6, 5]), 120, 'Test 83');
test(maximumsSplicedArray([10000, 1, 1, 1, 10000], [1, 10000, 10000, 1, 1]), 40001, 'Test 84');
test(maximumsSplicedArray([100, 200, 300, 400, 500], [500, 400, 300, 200, 100]), 2100, 'Test 85');
test(maximumsSplicedArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], [150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 1760, 'Test 86');
test(maximumsSplicedArray([10000, 10000, 10000, 10000, 10000], [1, 1, 1, 1, 1]), 50000, 'Test 87');
test(maximumsSplicedArray([1000, 2000, 3000, 4000, 5000], [1, 2, 3, 4, 5]), 15000, 'Test 88');
test(maximumsSplicedArray([1, 1, 1, 1, 1, 10000], [10000, 1, 1, 1, 1, 1]), 20004, 'Test 89');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

