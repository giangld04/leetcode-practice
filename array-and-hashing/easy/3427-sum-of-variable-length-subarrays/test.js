// Test: 3427. Sum Of Variable Length Subarrays
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { subarraySum } = require("./solution");

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

console.log("\n3427. Sum Of Variable Length Subarrays\n");

test(subarraySum([5, 4, 3, 2, 1]), 38, 'Test 1');
test(subarraySum([50,25,50,25,50]), 600, 'Test 2');
test(subarraySum([10,5,2,3]), 62, 'Test 3');
test(subarraySum([1,1,1,1,1,1,1,1,1,1]), 19, 'Test 4');
test(subarraySum([10, 9, 8, 7, 6]), 130, 'Test 5');
test(subarraySum([1,1,1,1,1]), 9, 'Test 6');
test(subarraySum([3,1,1,2]), 13, 'Test 7');
test(subarraySum([1,1,1,1]), 7, 'Test 8');
test(subarraySum([2,3,1]), 11, 'Test 9');
test(subarraySum([10,1,10,1,10]), 85, 'Test 10');
test(subarraySum([5,5,5,5,5]), 75, 'Test 11');
test(subarraySum([5, 5, 5, 5, 5]), 75, 'Test 12');
test(subarraySum([10, 10, 10]), 60, 'Test 13');
test(subarraySum([1,2,3,4,5]), 35, 'Test 14');
test(subarraySum([10,9,8,7,6]), 130, 'Test 15');
test(subarraySum([100,100,100]), 600, 'Test 16');
test(subarraySum([1,2,1,2,1]), 15, 'Test 17');
test(subarraySum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 1496, 'Test 18');
test(subarraySum([50, 40, 30, 20, 10, 1, 2, 3, 4, 5]), 635, 'Test 19');
test(subarraySum([100, 50, 25, 10, 5, 1]), 806, 'Test 20');
test(subarraySum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 22000, 'Test 21');
test(subarraySum([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 95, 'Test 22');
test(subarraySum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 2036, 'Test 23');
test(subarraySum([1, 3, 1, 3, 1, 3, 1, 3, 1, 3]), 53, 'Test 24');
test(subarraySum([100, 50, 25, 12, 6, 3, 1, 1, 1, 1]), 861, 'Test 25');
test(subarraySum([10, 20, 30, 40, 50, 1, 2, 3, 4, 5]), 635, 'Test 26');
test(subarraySum([5, 4, 3, 2, 1, 100, 99, 98, 97, 96, 95]), 2193, 'Test 27');
test(subarraySum([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 550, 'Test 28');
test(subarraySum([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 54, 'Test 29');
test(subarraySum([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]), 364, 'Test 30');
test(subarraySum([10, 5, 1, 10, 5, 1, 10, 5, 1, 10]), 232, 'Test 31');
test(subarraySum([100, 50, 25, 12, 6, 3, 1, 2, 4, 8]), 988, 'Test 32');
test(subarraySum([10, 20, 10, 30, 10, 40, 10, 50, 10, 60]), 1100, 'Test 33');
test(subarraySum([1, 2, 3, 4, 3, 2, 1, 2, 3, 4]), 69, 'Test 34');
test(subarraySum([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 1100, 'Test 35');
test(subarraySum([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 222, 'Test 36');
test(subarraySum([1, 3, 6, 10, 15, 21, 28, 36, 45, 55]), 715, 'Test 37');
test(subarraySum([5, 3, 8, 6, 2, 7, 4, 1, 9, 10]), 230, 'Test 38');
test(subarraySum([1, 2, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1]), 110, 'Test 39');
test(subarraySum([10, 1, 20, 2, 30, 3, 40, 4, 50, 5]), 670, 'Test 40');
test(subarraySum([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]), 78, 'Test 41');
test(subarraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 9640, 'Test 42');
test(subarraySum([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 11]), 318, 'Test 43');
test(subarraySum([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 5335, 'Test 44');
test(subarraySum([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 66, 'Test 45');
test(subarraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1]), 2301, 'Test 46');
test(subarraySum([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991]), 54835, 'Test 47');
test(subarraySum([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 3850, 'Test 48');
test(subarraySum([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 5280, 'Test 49');
test(subarraySum([10, 5, 3, 8, 2, 7, 1, 4, 6, 9]), 233, 'Test 50');
test(subarraySum([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500]), 42500, 'Test 51');
test(subarraySum([10, 5, 2, 10, 5, 2, 10, 5, 2, 10]), 274, 'Test 52');
test(subarraySum([20, 15, 10, 5, 1, 5, 10, 15, 20]), 460, 'Test 53');
test(subarraySum([5, 3, 8, 6, 2, 7, 4, 9, 1, 10]), 234, 'Test 54');
test(subarraySum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 235, 'Test 55');
test(subarraySum([10, 5, 10, 5, 10, 5, 10, 5, 10, 5]), 380, 'Test 56');
test(subarraySum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 385, 'Test 57');
test(subarraySum([1, 2, 4, 8, 16, 32, 64, 32, 16, 8, 4, 2, 1]), 904, 'Test 58');
test(subarraySum([512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 6293, 'Test 59');
test(subarraySum([1, 3, 2, 4, 5, 6, 7, 8, 9, 10]), 221, 'Test 60');
test(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 220, 'Test 61');
test(subarraySum([2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 37, 'Test 62');
test(subarraySum([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 265, 'Test 63');
test(subarraySum([100, 50, 25, 12, 6, 3, 1, 0, 0, 0]), 855, 'Test 64');
test(subarraySum([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 21000, 'Test 65');
test(subarraySum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 175, 'Test 66');
test(subarraySum([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 440, 'Test 67');
test(subarraySum([1, 3, 2, 4, 1, 2, 3, 4, 1, 2]), 69, 'Test 68');
test(subarraySum([10, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20]), 3960, 'Test 69');
test(subarraySum([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 340, 'Test 70');
test(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1540, 'Test 71');
test(subarraySum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 465, 'Test 72');
test(subarraySum([999, 998, 997, 996, 995, 994, 993, 992, 991, 990]), 54780, 'Test 73');
test(subarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 19, 'Test 74');
test(subarraySum([5, 10, 5, 10, 5, 10, 5, 10, 5, 10]), 375, 'Test 75');
test(subarraySum([1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100]), 6465, 'Test 76');
test(subarraySum([10, 20, 30, 40, 50, 40, 30, 20, 10, 5]), 1405, 'Test 77');
test(subarraySum([10, 100, 1000, 10, 100, 1000, 10, 100, 1000, 10]), 17020, 'Test 78');
test(subarraySum([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 5500, 'Test 79');
test(subarraySum([100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 2015, 'Test 80');
test(subarraySum([100, 50, 25, 10, 5, 1, 100, 50, 25, 10]), 2180, 'Test 81');
test(subarraySum([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 36, 'Test 82');
test(subarraySum([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 102, 'Test 83');
test(subarraySum([5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1]), 219, 'Test 84');
test(subarraySum([50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), 1755, 'Test 85');
test(subarraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 2200, 'Test 86');
test(subarraySum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 225, 'Test 87');
test(subarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 39, 'Test 88');
test(subarraySum([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 175, 'Test 89');
test(subarraySum([100, 50, 25, 10, 5, 1, 1, 1, 1, 1]), 814, 'Test 90');
test(subarraySum([1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6]), 226, 'Test 91');
test(subarraySum([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]), 55000, 'Test 92');
test(subarraySum([100, 50, 25, 10, 5, 2, 1, 0, 1, 2]), 824, 'Test 93');
test(subarraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 6800, 'Test 94');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

