// Test: 746. Min Cost Climbing Stairs
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { minCostClimbingStairs } = require("./solution");

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

console.log("\n746. Min Cost Climbing Stairs\n");

test(minCostClimbingStairs([999, 999, 999, 999]), 1998, 'Test 1');
test(minCostClimbingStairs([1,2,3,4,5]), 6, 'Test 2');
test(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]), 6, 'Test 3');
test(minCostClimbingStairs([1,2,3,4,5,6,7,8,9,10]), 25, 'Test 4');
test(minCostClimbingStairs([0,0,0,0]), 0, 'Test 5');
test(minCostClimbingStairs([1,2]), 1, 'Test 6');
test(minCostClimbingStairs([999,999,999,999,999,999]), 2997, 'Test 7');
test(minCostClimbingStairs([1, 2, 3, 4, 5]), 6, 'Test 8');
test(minCostClimbingStairs([10,15,20,25,30]), 40, 'Test 9');
test(minCostClimbingStairs([10,15]), 10, 'Test 10');
test(minCostClimbingStairs([10, 20, 10, 5]), 20, 'Test 11');
test(minCostClimbingStairs([10,5,20,25,30,35,40]), 65, 'Test 12');
test(minCostClimbingStairs([10,20,15,20,30]), 40, 'Test 13');
test(minCostClimbingStairs([10, 15]), 10, 'Test 14');
test(minCostClimbingStairs([5,8,6,3,4,2,8,5,1]), 18, 'Test 15');
test(minCostClimbingStairs([999,999]), 999, 'Test 16');
test(minCostClimbingStairs([10,15,20]), 15, 'Test 17');
test(minCostClimbingStairs([10, 15, 20, 10, 15, 20]), 40, 'Test 18');
test(minCostClimbingStairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 5, 'Test 19');
test(minCostClimbingStairs([1, 100, 100, 1]), 101, 'Test 20');
test(minCostClimbingStairs([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81]), 900, 'Test 21');
test(minCostClimbingStairs([10, 15, 20, 30, 40, 50, 60, 70, 80, 90]), 210, 'Test 22');
test(minCostClimbingStairs([3, 5, 2, 1, 8, 9, 3, 5, 6, 2, 1, 4, 7, 3, 2, 8, 6, 4, 1, 7]), 38, 'Test 23');
test(minCostClimbingStairs([50, 10, 20, 100, 30, 40, 10, 20, 30, 40]), 100, 'Test 24');
test(minCostClimbingStairs([3, 2, 4, 3, 2, 5, 1, 2, 4, 3, 2, 5, 1, 2, 4]), 17, 'Test 25');
test(minCostClimbingStairs([1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 13, 'Test 26');
test(minCostClimbingStairs([5, 8, 3, 12, 2, 7, 6, 10, 1, 4, 9, 11, 13, 14, 15]), 46, 'Test 27');
test(minCostClimbingStairs([1, 100, 2, 100, 3, 100, 4, 100, 5, 100, 6, 100, 7, 100, 8]), 36, 'Test 28');
test(minCostClimbingStairs([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90]), 450, 'Test 29');
test(minCostClimbingStairs([1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2]), 13, 'Test 30');
test(minCostClimbingStairs([5, 8, 2, 3, 7, 1, 4, 6, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 92, 'Test 31');
test(minCostClimbingStairs([50, 10, 5, 100, 20, 15, 10, 5, 20, 10, 5, 100, 20, 15, 10, 5, 20, 10, 5, 100, 20, 15, 10, 5, 20]), 150, 'Test 32');
test(minCostClimbingStairs([10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140]), 495, 'Test 33');
test(minCostClimbingStairs([1, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999]), 8992, 'Test 34');
test(minCostClimbingStairs([3, 2, 10, 2, 3, 5, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 52, 'Test 35');
test(minCostClimbingStairs([999, 0, 999, 0, 999, 0, 999, 0, 999, 0]), 0, 'Test 36');
test(minCostClimbingStairs([999, 999, 1, 999, 999, 2, 999, 999, 3, 999]), 3001, 'Test 37');
test(minCostClimbingStairs([999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999]), 0, 'Test 38');
test(minCostClimbingStairs([100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 12, 'Test 39');
test(minCostClimbingStairs([5, 8, 10, 2, 9, 1, 3, 7, 4, 6, 11, 12]), 29, 'Test 40');
test(minCostClimbingStairs([999, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0]), 999, 'Test 41');
test(minCostClimbingStairs([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 475, 'Test 42');
test(minCostClimbingStairs([5, 8, 3, 7, 2, 8, 3, 7, 2, 8, 3, 7, 2, 8, 3, 7, 2]), 25, 'Test 43');
test(minCostClimbingStairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 156, 'Test 44');
test(minCostClimbingStairs([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 125, 'Test 45');
test(minCostClimbingStairs([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 5600, 'Test 46');
test(minCostClimbingStairs([30, 5, 20, 10, 25, 15, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75]), 305, 'Test 47');
test(minCostClimbingStairs([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 60, 'Test 48');
test(minCostClimbingStairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 50, 'Test 49');
test(minCostClimbingStairs([1, 100, 100, 1, 100, 100, 1, 100, 100, 1]), 302, 'Test 50');
test(minCostClimbingStairs([1, 100, 2, 99, 3, 98, 4, 97, 5, 96]), 15, 'Test 51');
test(minCostClimbingStairs([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]), 315, 'Test 52');
test(minCostClimbingStairs([5, 3, 8, 6, 7, 2, 4, 9, 1, 10]), 16, 'Test 53');
test(minCostClimbingStairs([10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), 150, 'Test 54');
test(minCostClimbingStairs([999, 998, 997, 996, 995, 994, 993, 992, 991, 990]), 4970, 'Test 55');
test(minCostClimbingStairs([999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999]), 75924, 'Test 56');
test(minCostClimbingStairs([50, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 570, 'Test 57');
test(minCostClimbingStairs([5, 2, 7, 4, 9, 6, 11, 8, 13, 10, 15, 12, 17, 14, 19]), 56, 'Test 58');
test(minCostClimbingStairs([999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0]), 0, 'Test 59');
test(minCostClimbingStairs([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 100, 'Test 60');
test(minCostClimbingStairs([999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987, 986, 985, 984, 983, 982, 981, 980]), 9890, 'Test 61');
test(minCostClimbingStairs([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1, 2, 3, 4, 5]), 2507, 'Test 62');
test(minCostClimbingStairs([999, 999, 0, 0, 999, 999, 0, 0, 999, 999, 0, 0]), 2997, 'Test 63');
test(minCostClimbingStairs([100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 64');
test(minCostClimbingStairs([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 56, 'Test 65');
test(minCostClimbingStairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 560, 'Test 66');
test(minCostClimbingStairs([400, 5, 3, 10, 1, 1, 1, 1, 1, 1, 1, 1]), 12, 'Test 67');
test(minCostClimbingStairs([20, 1, 3, 2, 4, 2, 5, 3, 6, 4, 7, 5, 8, 6, 9, 7, 10]), 30, 'Test 68');
test(minCostClimbingStairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]), 2500, 'Test 69');
test(minCostClimbingStairs([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1, 1, 1, 1, 1]), 2503, 'Test 70');
test(minCostClimbingStairs([10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20, 10, 15, 20]), 760, 'Test 71');
test(minCostClimbingStairs([999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0, 999, 0]), 0, 'Test 72');
test(minCostClimbingStairs([20, 1, 5, 10, 1, 1, 5, 10, 1, 1, 5, 10, 1, 1, 5, 10, 1, 1, 5, 10]), 30, 'Test 73');
test(minCostClimbingStairs([1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000]), 5, 'Test 74');
test(minCostClimbingStairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 100, 'Test 75');
test(minCostClimbingStairs([10, 15, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 36, 'Test 76');
test(minCostClimbingStairs([100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100]), 7, 'Test 77');
test(minCostClimbingStairs([999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1]), 10, 'Test 78');
test(minCostClimbingStairs([5, 8, 2, 3, 6, 1, 4, 7, 9, 10]), 24, 'Test 79');
test(minCostClimbingStairs([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 0, 'Test 80');
test(minCostClimbingStairs([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 495, 'Test 81');
test(minCostClimbingStairs([999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999]), 12, 'Test 82');
test(minCostClimbingStairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 56, 'Test 83');
test(minCostClimbingStairs([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 75, 'Test 84');
test(minCostClimbingStairs([2, 1, 4, 5, 6, 3, 2, 5, 4, 3, 1, 2, 4, 3, 2, 1, 4, 5, 6, 3, 2, 5, 4, 3, 1, 2, 4, 3, 2, 1, 4, 5, 6, 3, 2, 5, 4, 3, 1, 2, 4, 3, 2, 1, 4, 5, 6, 3, 2, 5, 4, 3, 1, 2, 4, 3, 2, 1, 4, 5, 6, 3, 2, 5, 4, 3, 1, 2, 4, 3, 2, 1, 4, 5, 6, 3, 2, 5, 4, 3, 1, 2, 4, 3, 2, 1, 4, 5, 6, 3, 2, 5, 4, 3, 1, 2, 4, 3, 2, 1, 4, 5, 6, 3, 2, 5, 4, 3, 1, 2, 4]), 165, 'Test 85');
test(minCostClimbingStairs([10, 20, 30, 40, 50, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 65, 'Test 86');
test(minCostClimbingStairs([100, 150, 100, 150, 100, 150, 100, 150, 100, 150]), 500, 'Test 87');
test(minCostClimbingStairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 225, 'Test 88');
test(minCostClimbingStairs([3, 2, 1, 5, 4, 1, 3, 2, 1, 5, 4, 1, 3, 2, 1, 5, 4, 1]), 23, 'Test 89');
test(minCostClimbingStairs([10, 20, 10, 20, 10, 20, 10, 20, 10, 20]), 50, 'Test 90');
test(minCostClimbingStairs([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 156, 'Test 91');
test(minCostClimbingStairs([10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10]), 130, 'Test 92');
test(minCostClimbingStairs([100, 200, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100]), 106, 'Test 93');
test(minCostClimbingStairs([1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100]), 14, 'Test 94');
test(minCostClimbingStairs([100, 50, 25, 12, 6, 3, 1, 0, 0, 1, 3, 6, 12, 25, 50, 100, 150, 200, 250, 300]), 530, 'Test 95');
test(minCostClimbingStairs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 96');
test(minCostClimbingStairs([4, 2, 6, 7, 8, 1, 3, 5, 10, 2, 6, 7, 8, 1, 3, 5]), 28, 'Test 97');
test(minCostClimbingStairs([1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999]), 10, 'Test 98');
test(minCostClimbingStairs([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040]), 832039, 'Test 99');
test(minCostClimbingStairs([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 2150, 'Test 100');
test(minCostClimbingStairs([999, 999, 999, 999, 999, 0, 0, 0, 0, 0]), 1998, 'Test 101');
test(minCostClimbingStairs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

