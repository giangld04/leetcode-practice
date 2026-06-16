// Test: 3139. Minimum Cost To Equalize Array
// 122 test cases from LeetCodeDataset
// Run: node test.js

const { minCostToEqualizeArray } = require("./solution");

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

console.log("\n3139. Minimum Cost To Equalize Array\n");

test(minCostToEqualizeArray([4,1], 5, 2), 15, 'Test 1');
test(minCostToEqualizeArray([1,3,5,7,9], 2, 4), 40, 'Test 2');
test(minCostToEqualizeArray([1,1,1,1,1,1,1,1,1,1], 1, 2), 0, 'Test 3');
test(minCostToEqualizeArray([10,10,10,10], 100, 50), 0, 'Test 4');
test(minCostToEqualizeArray([2,3,3,3,5], 2, 1), 6, 'Test 5');
test(minCostToEqualizeArray([1,2,3,4,5], 1, 2), 10, 'Test 6');
test(minCostToEqualizeArray([5,5,5,5,5,5,5,5,5,5], 7, 3), 0, 'Test 7');
test(minCostToEqualizeArray([10,10,10,10,10], 100, 50), 0, 'Test 8');
test(minCostToEqualizeArray([1,1,1,1], 10, 5), 0, 'Test 9');
test(minCostToEqualizeArray([1,2,2,3,3,3,4,4,4,4], 3, 2), 10, 'Test 10');
test(minCostToEqualizeArray([1,2,3,4,5], 10, 5), 25, 'Test 11');
test(minCostToEqualizeArray([1,1,1,1,1,1,1,1,1,1], 1000000, 500000), 0, 'Test 12');
test(minCostToEqualizeArray([1,1000000], 1, 1000000), 999999, 'Test 13');
test(minCostToEqualizeArray([1,1000000], 1, 1), 999999, 'Test 14');
test(minCostToEqualizeArray([1,1000000], 1, 2), 999999, 'Test 15');
test(minCostToEqualizeArray([1000000,1000000,1000000], 1000000, 500000), 0, 'Test 16');
test(minCostToEqualizeArray([1,2,3,4,5,6,7,8,9,10], 5, 2), 49, 'Test 17');
test(minCostToEqualizeArray([5,5,5,5,5], 1, 1), 0, 'Test 18');
test(minCostToEqualizeArray([1,2], 2, 1), 2, 'Test 19');
test(minCostToEqualizeArray([100000, 100000, 100000], 1, 1), 0, 'Test 20');
test(minCostToEqualizeArray([3,5,3], 1, 3), 4, 'Test 21');
test(minCostToEqualizeArray([1,2,3], 3, 2), 5, 'Test 22');
test(minCostToEqualizeArray([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5], 3, 2), 30, 'Test 23');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 100000, 50000), 10950000, 'Test 24');
test(minCostToEqualizeArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 1, 3), 9, 'Test 25');
test(minCostToEqualizeArray([1, 3, 3, 3, 5, 5, 7, 7, 9, 9, 11, 11, 13, 13, 15], 1, 1), 55, 'Test 26');
test(minCostToEqualizeArray([100000, 100000, 100000, 100000, 100000], 1, 1), 0, 'Test 27');
test(minCostToEqualizeArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9], 1, 2), 72, 'Test 28');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7, 10), 527, 'Test 29');
test(minCostToEqualizeArray([1, 3, 5, 7, 9], 3, 5), 50, 'Test 30');
test(minCostToEqualizeArray([999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990, 999989, 999988, 999987, 999986, 999985], 1000, 500), 27000, 'Test 31');
test(minCostToEqualizeArray([1, 10, 100, 1000, 10000, 100000, 1000000], 123456, 654321), 18675295, 'Test 32');
test(minCostToEqualizeArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 5), 1125, 'Test 33');
test(minCostToEqualizeArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 7, 3), 135, 'Test 34');
test(minCostToEqualizeArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1, 2), 0, 'Test 35');
test(minCostToEqualizeArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 3, 5), 50, 'Test 36');
test(minCostToEqualizeArray([1, 3, 5, 7, 9], 2, 3), 30, 'Test 37');
test(minCostToEqualizeArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000000, 500000), 0, 'Test 38');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100000, 50000), 1200000, 'Test 39');
test(minCostToEqualizeArray([1, 5, 9, 13, 17], 3, 5), 100, 'Test 40');
test(minCostToEqualizeArray([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5], 1, 3), 40, 'Test 41');
test(minCostToEqualizeArray([100, 200, 300, 400, 500], 10, 7), 3500, 'Test 42');
test(minCostToEqualizeArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2, 3), 135, 'Test 43');
test(minCostToEqualizeArray([5, 2, 3, 7, 1], 3, 5), 43, 'Test 44');
test(minCostToEqualizeArray([500000, 500001, 500002, 500003, 500004, 500005, 500006, 500007, 500008, 500009], 1000000, 2000000), 45000000, 'Test 45');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000, 500), 12000, 'Test 46');
test(minCostToEqualizeArray([1, 3, 5, 7, 9], 7, 3), 30, 'Test 47');
test(minCostToEqualizeArray([1000000, 1000000, 1000000, 1000000, 1000000], 1000000, 500000), 0, 'Test 48');
test(minCostToEqualizeArray([1000000, 999999, 999998, 999997, 999996], 1, 1), 5, 'Test 49');
test(minCostToEqualizeArray([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 10, 5), 1170, 'Test 50');
test(minCostToEqualizeArray([100, 200, 300, 400, 500], 10, 20), 10000, 'Test 51');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 2, 4), 210, 'Test 52');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5, 3), 285, 'Test 53');
test(minCostToEqualizeArray([5, 4, 3, 2, 1], 5, 10), 50, 'Test 54');
test(minCostToEqualizeArray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50, 20), 45000, 'Test 55');
test(minCostToEqualizeArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100, 50), 0, 'Test 56');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100, 200), 4500, 'Test 57');
test(minCostToEqualizeArray([1000000, 500000, 250000, 125000, 62500, 31250, 15625], 2, 4), 10031250, 'Test 58');
test(minCostToEqualizeArray([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991], 1000, 500), 12000, 'Test 59');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20, 10), 950, 'Test 60');
test(minCostToEqualizeArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 7, 11), 110, 'Test 61');
test(minCostToEqualizeArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1000000, 500000), 0, 'Test 62');
test(minCostToEqualizeArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 5, 10), 5250, 'Test 63');
test(minCostToEqualizeArray([1, 1, 1, 2, 2, 3, 3, 4, 5, 6], 5, 2), 32, 'Test 64');
test(minCostToEqualizeArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10, 20), 0, 'Test 65');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 500000, 1000000), 52500000, 'Test 66');
test(minCostToEqualizeArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 2, 1), 105, 'Test 67');
test(minCostToEqualizeArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 2, 1), 10, 'Test 68');
test(minCostToEqualizeArray([5, 3, 1, 2, 4], 7, 3), 15, 'Test 69');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, 20), 1900, 'Test 70');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 5), 113, 'Test 71');
test(minCostToEqualizeArray([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3], 4, 8), 64, 'Test 72');
test(minCostToEqualizeArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1, 2), 90, 'Test 73');
test(minCostToEqualizeArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 50, 25), 600, 'Test 74');
test(minCostToEqualizeArray([1000000, 999999, 999998, 999997, 999996], 1000, 500), 2500, 'Test 75');
test(minCostToEqualizeArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 2, 4), 20, 'Test 76');
test(minCostToEqualizeArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 1, 1), 45, 'Test 77');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 5), 120, 'Test 78');
test(minCostToEqualizeArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 2), 0, 'Test 79');
test(minCostToEqualizeArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50, 25), 5625, 'Test 80');
test(minCostToEqualizeArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9], 3, 5), 180, 'Test 81');
test(minCostToEqualizeArray([1, 3, 5, 7, 9], 2, 4), 40, 'Test 82');
test(minCostToEqualizeArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1000, 500), 112500, 'Test 83');
test(minCostToEqualizeArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 1, 2), 10, 'Test 84');
test(minCostToEqualizeArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1, 2), 0, 'Test 85');
test(minCostToEqualizeArray([100, 200, 300, 400, 500], 1000, 500), 250000, 'Test 86');
test(minCostToEqualizeArray([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991], 1000000, 500000), 12000000, 'Test 87');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 4, 8), 760, 'Test 88');
test(minCostToEqualizeArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1, 1), 225, 'Test 89');
test(minCostToEqualizeArray([999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990], 10, 5), 120, 'Test 90');
test(minCostToEqualizeArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 7, 6), 60, 'Test 91');
test(minCostToEqualizeArray([1, 1000000, 1, 1000000, 1, 1000000], 500000, 250000), 999997382, 'Test 92');
test(minCostToEqualizeArray([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], 7, 3), 45, 'Test 93');
test(minCostToEqualizeArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1, 2), 0, 'Test 94');
test(minCostToEqualizeArray([100, 200, 300, 400, 500], 10, 15), 7500, 'Test 95');
test(minCostToEqualizeArray([1, 3, 5, 7, 9], 1000000, 500000), 5000000, 'Test 96');
test(minCostToEqualizeArray([500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000], 1000, 500), 0, 'Test 97');
test(minCostToEqualizeArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1000, 500), 0, 'Test 98');
test(minCostToEqualizeArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 10, 3), 30, 'Test 99');
test(minCostToEqualizeArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5, 2), 450, 'Test 100');
test(minCostToEqualizeArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15], 1, 1), 105, 'Test 101');
test(minCostToEqualizeArray([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 1, 1), 0, 'Test 102');
test(minCostToEqualizeArray([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4], 10, 20), 300, 'Test 103');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 2), 45, 'Test 104');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 100, 50), 30700, 'Test 105');
test(minCostToEqualizeArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 2, 1), 525, 'Test 106');
test(minCostToEqualizeArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 10, 5), 50, 'Test 107');
test(minCostToEqualizeArray([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991], 1, 2), 45, 'Test 108');
test(minCostToEqualizeArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 5, 2), 49, 'Test 109');
test(minCostToEqualizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1000000, 500000), 27000000, 'Test 110');
test(minCostToEqualizeArray([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10], 6, 3), 207, 'Test 111');
test(minCostToEqualizeArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 2), 0, 'Test 112');
test(minCostToEqualizeArray([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5], 3, 5), 100, 'Test 113');
test(minCostToEqualizeArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 2, 4), 0, 'Test 114');
test(minCostToEqualizeArray([100000, 200000, 300000, 400000, 500000], 10000, 5000), 499999986, 'Test 115');
test(minCostToEqualizeArray([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 100, 50), 0, 'Test 116');
test(minCostToEqualizeArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 1, 1), 83, 'Test 117');
test(minCostToEqualizeArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 10, 5), 2625, 'Test 118');
test(minCostToEqualizeArray([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3], 1000, 500), 4500, 'Test 119');
test(minCostToEqualizeArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 2), 0, 'Test 120');
test(minCostToEqualizeArray([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000], 100, 50), 112500000, 'Test 121');
test(minCostToEqualizeArray([7, 7, 8, 8, 8, 9, 9, 9, 9, 9], 5, 3), 14, 'Test 122');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
