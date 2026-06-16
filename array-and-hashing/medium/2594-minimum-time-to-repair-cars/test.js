// Test: 2594. Minimum Time To Repair Cars
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { repairCars } = require("./solution");

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

console.log("\n2594. Minimum Time To Repair Cars\n");

test(repairCars([1], 1000000), 1000000000000, 'Test 1');
test(repairCars([10], 100), 100000, 'Test 2');
test(repairCars([1,2,3,4,5,6,7,8,9,10], 20), 25, 'Test 3');
test(repairCars([5,1,8], 6), 16, 'Test 4');
test(repairCars([1,1,1,1,1], 5), 1, 'Test 5');
test(repairCars([1], 1), 1, 'Test 6');
test(repairCars([1,1,1,1], 4), 1, 'Test 7');
test(repairCars([1,2,3,4,5], 15), 27, 'Test 8');
test(repairCars([4,2,3,1], 10), 16, 'Test 9');
test(repairCars([10,20,30,40,50], 5), 40, 'Test 10');
test(repairCars([100,100,100], 3), 100, 'Test 11');
test(repairCars([100,100,100], 300), 1000000, 'Test 12');
test(repairCars([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 1000000), 467557823524, 'Test 13');
test(repairCars([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 100000), 99181681, 'Test 14');
test(repairCars([99, 1, 98, 2, 97, 3, 96, 4, 95, 5], 500000), 17879098464, 'Test 15');
test(repairCars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000000), 39666387103, 'Test 16');
test(repairCars([1, 3, 6, 10, 15, 21, 28, 36, 45, 55], 50000), 214060374, 'Test 17');
test(repairCars([1, 10, 100, 1000, 10000], 10000), 47073321, 'Test 18');
test(repairCars([1, 1, 1, 1, 1], 25), 25, 'Test 19');
test(repairCars([1, 3, 6, 10, 15], 100000), 1525913427, 'Test 20');
test(repairCars([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1000000), 396663871030, 'Test 21');
test(repairCars([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 1000000), 173349003750, 'Test 22');
test(repairCars([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10], 10000), 530670, 'Test 23');
test(repairCars([1, 10, 100, 1000, 10000, 100000, 1, 10, 100, 1000], 123456), 1801323364, 'Test 24');
test(repairCars([1, 1, 1, 1, 1], 1000000), 40000000000, 'Test 25');
test(repairCars([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 10000), 10000000, 'Test 26');
test(repairCars([100, 100, 100, 100, 100], 1000000), 4000000000000, 'Test 27');
test(repairCars([100, 50, 25, 12, 6, 3, 1], 10000), 13571856, 'Test 28');
test(repairCars([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 1000000), 28757183175, 'Test 29');
test(repairCars([3, 3, 3, 3, 3], 25), 75, 'Test 30');
test(repairCars([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50), 25, 'Test 31');
test(repairCars([1, 3, 6, 10, 15, 21, 28, 36, 45, 55], 10000), 8568300, 'Test 32');
test(repairCars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100000), 99181681, 'Test 33');
test(repairCars([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000), 10000, 'Test 34');
test(repairCars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100), 288, 'Test 35');
test(repairCars([50, 25, 100, 20, 60, 40, 30, 80, 90, 10], 1000), 361250, 'Test 36');
test(repairCars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 500000), 4333852224, 'Test 37');
test(repairCars([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 5000), 25000000, 'Test 38');
test(repairCars([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 50), 176, 'Test 39');
test(repairCars([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 100, 'Test 40');
test(repairCars([1, 10, 100, 1000, 10000], 100000), 4705411216, 'Test 41');
test(repairCars([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 100000), 3966868890, 'Test 42');
test(repairCars([50, 40, 30, 20, 10], 1000000), 957518758440, 'Test 43');
test(repairCars([10, 10, 10, 10, 10, 20, 20, 20, 20, 20], 50), 360, 'Test 44');
test(repairCars([5, 10, 15, 20, 25], 1000), 480500, 'Test 45');
test(repairCars([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50000), 991816810, 'Test 46');
test(repairCars([10, 20, 30, 40, 50], 1000000), 957518758440, 'Test 47');
test(repairCars([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 500000), 236091196044, 'Test 48');
test(repairCars([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 1210, 'Test 49');
test(repairCars([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 100), 2205, 'Test 50');
test(repairCars([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 50000), 607889340, 'Test 51');
test(repairCars([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 75), 363, 'Test 52');
test(repairCars([100] * 50000 + [1] * 50000, 1000000), Error: Solution.repairCars[] missing 1 required positional argument: 'ranks', 'Test 53');
test(repairCars([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 5000), 23655095, 'Test 54');
test(repairCars([1, 2, 3, 4, 5], 1000000), 95751875844, 'Test 55');
test(repairCars([100], 1000000), 100000000000000, 'Test 56');
test(repairCars([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100000), 3966868890, 'Test 57');
test(repairCars([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 1000), 200000, 'Test 58');
test(repairCars([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 500), 25000, 'Test 59');
test(repairCars([10, 10, 20, 20, 30, 30, 40, 40, 50, 50], 1000000), 239380328180, 'Test 60');
test(repairCars([i for i in range[1, 100001]], 1000000), Error: Solution.repairCars[] missing 1 required positional argument: 'ranks', 'Test 61');
test(repairCars([100, 50, 25, 10, 5, 2, 1], 1000), 118810, 'Test 62');
test(repairCars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100000), 396686889, 'Test 63');
test(repairCars([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000000), 10000000000, 'Test 64');
test(repairCars([100, 50, 25, 12, 6], 10000), 77199414, 'Test 65');
test(repairCars([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100000), 100000000, 'Test 66');
test(repairCars([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 1000), 400000, 'Test 67');
test(repairCars([1, 4, 9, 16, 25, 36, 49, 64, 81, 100], 30), 144, 'Test 68');
test(repairCars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000), 40000, 'Test 69');
test(repairCars([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 1000000), 32624594527, 'Test 70');
test(repairCars([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 1000000), 396663871030, 'Test 71');
test(repairCars([100, 100, 100, 100, 100], 500000), 1000000000000, 'Test 72');
test(repairCars([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1000000), 91411289649, 'Test 73');
test(repairCars([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 50000), 24800400, 'Test 74');
test(repairCars([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 5000), 6094080, 'Test 75');
test(repairCars([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1000), 400000, 'Test 76');
test(repairCars([1,1,1,1,1,1,1,1,1,1], 1000), 10000, 'Test 77');
test(repairCars([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 1000000), 500000000000, 'Test 78');
test(repairCars([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 250), 15870, 'Test 79');
test(repairCars([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 250), 25920, 'Test 80');
test(repairCars([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 500), 30276, 'Test 81');
test(repairCars([99, 98, 97, 96, 95], 1000000), 3879392825484, 'Test 82');
test(repairCars([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80], 500000), 55765049760, 'Test 83');
test(repairCars([1, 3, 6, 10, 15, 21, 28, 36, 45, 55], 100000), 856147600, 'Test 84');
test(repairCars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10000), 2434446, 'Test 85');
test(repairCars([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 100), 847, 'Test 86');
test(repairCars([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1048576), 201015929104, 'Test 87');
test(repairCars([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10000), 1250000, 'Test 88');
test(repairCars([5, 10, 15, 20, 25, 30, 35, 40, 45, 50] * 10000, 500000), Error: Solution.repairCars[] missing 1 required positional argument: 'ranks', 'Test 89');
test(repairCars([100] * 100000, 1000000), Error: Solution.repairCars[] missing 1 required positional argument: 'ranks', 'Test 90');
test(repairCars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 10000, 1000000), Error: Solution.repairCars[] missing 1 required positional argument: 'ranks', 'Test 91');
test(repairCars([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1000), 61731, 'Test 92');
test(repairCars([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 10000), 19845315, 'Test 93');
test(repairCars([10, 10, 10, 10, 10], 1000000), 400000000000, 'Test 94');
test(repairCars([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 1000), 500000, 'Test 95');
test(repairCars([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 500), 20172, 'Test 96');
test(repairCars([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 1000000), 34669800750, 'Test 97');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

