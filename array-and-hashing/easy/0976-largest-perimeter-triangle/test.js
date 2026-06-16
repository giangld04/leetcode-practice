// Test: 976. Largest Perimeter Triangle
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { largestPerimeter } = require("./solution");

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

console.log("\n976. Largest Perimeter Triangle\n");

test(largestPerimeter([10,5,7]), 22, 'Test 1');
test(largestPerimeter([10,5,1,8,12,10,5,15]), 37, 'Test 2');
test(largestPerimeter([7,10,5,2,8,7]), 25, 'Test 3');
test(largestPerimeter([1,1,1,1]), 3, 'Test 4');
test(largestPerimeter([1,1,1]), 3, 'Test 5');
test(largestPerimeter([1,1000000,1000000]), 2000001, 'Test 6');
test(largestPerimeter([1,2,3,4,5,6,7,8,9,10]), 27, 'Test 7');
test(largestPerimeter([10,5,7,8,2,12]), 30, 'Test 8');
test(largestPerimeter([3,6,2,3]), 8, 'Test 9');
test(largestPerimeter([2,1,2]), 5, 'Test 10');
test(largestPerimeter([2,3,4,5,6]), 15, 'Test 11');
test(largestPerimeter([10,20,30,40,50]), 120, 'Test 12');
test(largestPerimeter([7,10,5,2,8,4,6]), 25, 'Test 13');
test(largestPerimeter([5,5,5,5]), 15, 'Test 14');
test(largestPerimeter([1,1,1,2,2,2]), 6, 'Test 15');
test(largestPerimeter([1,3,5,7,9,11]), 27, 'Test 16');
test(largestPerimeter([2,3,3,4,5,6,7]), 18, 'Test 17');
test(largestPerimeter([1,1,1,1,1]), 3, 'Test 18');
test(largestPerimeter([7,10,5,2]), 22, 'Test 19');
test(largestPerimeter([1,2,3,4,5,6]), 15, 'Test 20');
test(largestPerimeter([6,4,10,3]), 13, 'Test 21');
test(largestPerimeter([3,6,2,3,5,4,1]), 15, 'Test 22');
test(largestPerimeter([6,4,2,8,5,7]), 21, 'Test 23');
test(largestPerimeter([1,3,2,4,6,5,7,8]), 21, 'Test 24');
test(largestPerimeter([6,6,6,10]), 22, 'Test 25');
test(largestPerimeter([1,2,1,10]), 0, 'Test 26');
test(largestPerimeter([3,3,3,3,3]), 9, 'Test 27');
test(largestPerimeter([1,1,1,1,1,1]), 3, 'Test 28');
test(largestPerimeter([3,2,3,4]), 10, 'Test 29');
test(largestPerimeter([7,10,5,2,8,7,3,5]), 25, 'Test 30');
test(largestPerimeter([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 4200, 'Test 31');
test(largestPerimeter([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000]), 2700000, 'Test 32');
test(largestPerimeter([3,6,2,3,5,4,8,7]), 21, 'Test 33');
test(largestPerimeter([5, 5, 5, 1, 1, 1, 10, 10, 10, 20]), 30, 'Test 34');
test(largestPerimeter([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 81, 'Test 35');
test(largestPerimeter([1000000, 999999, 999998, 999997, 999996]), 2999997, 'Test 36');
test(largestPerimeter([1,1000000,2,999999,3,999998,4,999997,5,999996,6,999995,7,999994,8,999993]), 2999997, 'Test 37');
test(largestPerimeter([1000000, 999999, 1000000, 1000000, 999998]), 3000000, 'Test 38');
test(largestPerimeter([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 30, 'Test 39');
test(largestPerimeter([1, 10, 100, 1000, 10000, 100000, 1000000, 500000, 600000, 700000]), 2300000, 'Test 40');
test(largestPerimeter([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1]), 30, 'Test 41');
test(largestPerimeter([999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990, 999989]), 2999991, 'Test 42');
test(largestPerimeter([1000000, 999999, 999998, 1, 2, 3]), 2999997, 'Test 43');
test(largestPerimeter([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), 81, 'Test 44');
test(largestPerimeter([9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]), 69, 'Test 45');
test(largestPerimeter([1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009]), 3024, 'Test 46');
test(largestPerimeter([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 9, 'Test 47');
test(largestPerimeter([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 29, 'Test 48');
test(largestPerimeter([10, 20, 25, 30, 40, 50, 60, 70, 80, 90]), 240, 'Test 49');
test(largestPerimeter([1, 3, 2, 4, 6, 5, 7, 9, 8, 10, 12, 11, 13, 15, 14, 16, 18, 17, 19, 20, 22, 21, 23, 25, 24, 26, 28, 27, 29, 30]), 87, 'Test 50');
test(largestPerimeter([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000]), 3000000, 'Test 51');
test(largestPerimeter([10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 84, 'Test 52');
test(largestPerimeter([9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]), 81, 'Test 53');
test(largestPerimeter([3, 6, 2, 3, 5, 40, 41]), 87, 'Test 54');
test(largestPerimeter([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991]), 2999997, 'Test 55');
test(largestPerimeter([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 9, 'Test 56');
test(largestPerimeter([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]), 0, 'Test 57');
test(largestPerimeter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 36, 'Test 58');
test(largestPerimeter([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 57, 'Test 59');
test(largestPerimeter([7,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105]), 300, 'Test 60');
test(largestPerimeter([1000000, 999999, 1000001, 1000002, 1000003]), 3000006, 'Test 61');
test(largestPerimeter([1000000, 2, 1000000, 3, 1000000, 4, 1000000, 5, 1000000]), 3000000, 'Test 62');
test(largestPerimeter([3, 3, 3, 2, 2, 2, 1, 1, 1, 1]), 9, 'Test 63');
test(largestPerimeter([1, 200000, 200000, 200000, 200000]), 600000, 'Test 64');
test(largestPerimeter([999999,999998,999997,999996,999995,999994,999993,999992,999991,999990,999989,999988,999987,999986,999985,999984,999983,999982,999981,999980]), 2999994, 'Test 65');
test(largestPerimeter([2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 57, 'Test 66');
test(largestPerimeter([999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999]), 2999997, 'Test 67');
test(largestPerimeter([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 15, 'Test 68');
test(largestPerimeter([5,10,25,40,50,60,70,80,90,100]), 270, 'Test 69');
test(largestPerimeter([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 0, 'Test 70');
test(largestPerimeter([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 51, 'Test 71');
test(largestPerimeter([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), 57, 'Test 72');
test(largestPerimeter([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 300000, 'Test 73');
test(largestPerimeter([2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 26, 'Test 74');
test(largestPerimeter([2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 29, 'Test 75');
test(largestPerimeter([1,2,3,6,7,8,12,14,15,18,20,21,24,25,28,30,32,33,36,39]), 108, 'Test 76');
test(largestPerimeter([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500]), 4200, 'Test 77');
test(largestPerimeter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 42, 'Test 78');
test(largestPerimeter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 27, 'Test 79');
test(largestPerimeter([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 27, 'Test 80');
test(largestPerimeter([500000, 500000, 500000, 500000, 500000, 500000]), 1500000, 'Test 81');
test(largestPerimeter([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 9, 'Test 82');
test(largestPerimeter([10, 5, 7, 3, 9, 8]), 27, 'Test 83');
test(largestPerimeter([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1000000]), 9, 'Test 84');
test(largestPerimeter([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]), 23, 'Test 85');
test(largestPerimeter([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 20, 'Test 86');
test(largestPerimeter([500, 501, 502, 503, 504, 505, 506, 507, 508, 509]), 1524, 'Test 87');
test(largestPerimeter([1000000, 999999, 999998, 999997, 999996, 999995]), 2999997, 'Test 88');
test(largestPerimeter([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 330, 'Test 89');
test(largestPerimeter([1000, 2000, 1500, 2500, 1800, 3000, 2200, 3500]), 9000, 'Test 90');
test(largestPerimeter([100, 101, 102, 103, 104, 105, 106, 107, 108, 109]), 324, 'Test 91');
test(largestPerimeter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 57, 'Test 92');
test(largestPerimeter([10, 5, 7, 2, 8, 4, 6]), 25, 'Test 93');
test(largestPerimeter([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5, 999996, 6, 999995, 7, 999994, 8, 999993, 9, 999992]), 2999997, 'Test 94');
test(largestPerimeter([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]), 3600, 'Test 95');
test(largestPerimeter([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]), 357, 'Test 96');
test(largestPerimeter([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 6, 'Test 97');
test(largestPerimeter([1,2,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946]), 0, 'Test 98');
test(largestPerimeter([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 9, 'Test 99');
test(largestPerimeter([10, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 3, 'Test 100');
test(largestPerimeter([100, 200, 150, 300, 250, 400, 350, 500]), 1250, 'Test 101');
test(largestPerimeter([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 9, 'Test 102');
test(largestPerimeter([12, 25, 10, 15, 30, 18, 20, 22, 28, 35, 40]), 105, 'Test 103');
test(largestPerimeter([7, 10, 5, 3, 8, 9, 2, 6, 4, 1]), 27, 'Test 104');
test(largestPerimeter([1000000,999999,999998,999997,999996,999995,999994,999993,999992,999991]), 2999997, 'Test 105');
test(largestPerimeter([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 270, 'Test 106');
test(largestPerimeter([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 15, 'Test 107');
test(largestPerimeter([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 27, 'Test 108');
test(largestPerimeter([10, 21, 32, 43, 54, 65, 76, 87, 98, 109]), 294, 'Test 109');
test(largestPerimeter([1, 1000000, 1000000, 1000000, 1000000]), 3000000, 'Test 110');
test(largestPerimeter([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 420, 'Test 111');
test(largestPerimeter([2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 17, 'Test 112');
test(largestPerimeter([2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), 44, 'Test 113');
test(largestPerimeter([1000000, 999999, 1000000, 999998, 999997]), 2999999, 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

