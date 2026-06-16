// Test: 3479. Fruits Into Baskets Iii
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { numOfUnplacedFruits } = require("./solution");

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

console.log("\n3479. Fruits Into Baskets Iii\n");

test(numOfUnplacedFruits([5,5,5,5,5], [1,2,3,4,5]), 4, 'Test 1');
test(numOfUnplacedFruits([4,2,5], [3,5,4]), 1, 'Test 2');
test(numOfUnplacedFruits([1,1,1,1], [1,1,1,1]), 0, 'Test 3');
test(numOfUnplacedFruits([1000000000,1000000000], [999999999,1000000000]), 1, 'Test 4');
test(numOfUnplacedFruits([1000000000], [1000000000]), 0, 'Test 5');
test(numOfUnplacedFruits([1,2,3,4], [4,3,2,1]), 2, 'Test 6');
test(numOfUnplacedFruits([1,1,1,1,1], [1,1,1,1,1]), 0, 'Test 7');
test(numOfUnplacedFruits([1,2,3,4], [10,10,10,10]), 0, 'Test 8');
test(numOfUnplacedFruits([10,9,8,7,6], [6,7,8,9,10]), 0, 'Test 9');
test(numOfUnplacedFruits([5,5,5,5], [5,5,5,5]), 0, 'Test 10');
test(numOfUnplacedFruits([1,10,100,1000], [1000,100,10,1]), 2, 'Test 11');
test(numOfUnplacedFruits([7,8,9], [6,7,8]), 1, 'Test 12');
test(numOfUnplacedFruits([10,10,10], [5,5,5]), 3, 'Test 13');
test(numOfUnplacedFruits([1,2,3,4,5], [5,4,3,2,1]), 2, 'Test 14');
test(numOfUnplacedFruits([10,20,30], [5,15,25]), 1, 'Test 15');
test(numOfUnplacedFruits([3,6,1], [6,4,7]), 0, 'Test 16');
test(numOfUnplacedFruits([9, 7, 5, 3, 1], [1, 3, 5, 7, 9]), 0, 'Test 17');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 1, 'Test 18');
test(numOfUnplacedFruits([5,15,25,35,45], [10,20,30,40,50]), 0, 'Test 19');
test(numOfUnplacedFruits([5, 5, 5, 5, 5], [5, 5, 5, 5, 5]), 0, 'Test 20');
test(numOfUnplacedFruits([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 5, 'Test 21');
test(numOfUnplacedFruits([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 22');
test(numOfUnplacedFruits([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 4, 'Test 23');
test(numOfUnplacedFruits([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 24');
test(numOfUnplacedFruits([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 5, 'Test 25');
test(numOfUnplacedFruits([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 26');
test(numOfUnplacedFruits([10, 20, 30, 40, 50], [50, 40, 30, 20, 10]), 2, 'Test 27');
test(numOfUnplacedFruits([10, 20, 30, 40, 50], [20, 30, 40, 50, 60]), 0, 'Test 28');
test(numOfUnplacedFruits([1000000000, 500000000, 250000000, 125000000, 62500000], [62500000, 125000000, 250000000, 500000000, 1000000000]), 0, 'Test 29');
test(numOfUnplacedFruits([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 0, 'Test 30');
test(numOfUnplacedFruits([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 0, 'Test 31');
test(numOfUnplacedFruits([9, 8, 7, 6, 5, 4, 3, 2, 1, 1], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 32');
test(numOfUnplacedFruits([100,200,300,400,500,600,700,800,900,1000], [1000,900,800,700,600,500,400,300,200,100]), 5, 'Test 33');
test(numOfUnplacedFruits([10, 20, 30, 40, 50], [25, 35, 15, 45, 55]), 1, 'Test 34');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60], [15, 25, 35, 45, 55, 65]), 0, 'Test 35');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 5, 'Test 36');
test(numOfUnplacedFruits([10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10]), 0, 'Test 37');
test(numOfUnplacedFruits([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1, 1, 1, 1, 10]), 9, 'Test 38');
test(numOfUnplacedFruits([1000000000, 999999999, 888888888, 777777777, 666666666], [999999999, 888888888, 777777777, 666666666, 555555555]), 1, 'Test 39');
test(numOfUnplacedFruits([1000000000], [999999999]), 1, 'Test 40');
test(numOfUnplacedFruits([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20]), 0, 'Test 41');
test(numOfUnplacedFruits([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 5, 'Test 42');
test(numOfUnplacedFruits([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2]), 4, 'Test 43');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 44');
test(numOfUnplacedFruits([7, 3, 8, 2, 9, 5], [10, 5, 8, 4, 9, 6]), 0, 'Test 45');
test(numOfUnplacedFruits([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 46');
test(numOfUnplacedFruits([5, 5, 5, 5, 5], [1, 1, 1, 1, 10]), 4, 'Test 47');
test(numOfUnplacedFruits([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], [60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), 6, 'Test 48');
test(numOfUnplacedFruits([1, 3, 5, 7, 9, 11, 13], [13, 11, 9, 7, 5, 3, 1]), 3, 'Test 49');
test(numOfUnplacedFruits([10, 10, 10, 10, 10, 10], [5, 5, 5, 5, 5, 5]), 6, 'Test 50');
test(numOfUnplacedFruits([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 0, 'Test 51');
test(numOfUnplacedFruits([10,20,30,40,50], [5,15,25,35,45]), 1, 'Test 52');
test(numOfUnplacedFruits([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 1, 'Test 53');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], [120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 6, 'Test 54');
test(numOfUnplacedFruits([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 0, 'Test 55');
test(numOfUnplacedFruits([100, 200, 300, 400, 500], [500, 400, 300, 200, 100]), 2, 'Test 56');
test(numOfUnplacedFruits([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 1]), 1, 'Test 57');
test(numOfUnplacedFruits([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), 5, 'Test 58');
test(numOfUnplacedFruits([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]), 0, 'Test 59');
test(numOfUnplacedFruits([50, 40, 30, 20, 10], [10, 20, 30, 40, 50]), 0, 'Test 60');
test(numOfUnplacedFruits([999999999, 999999998, 999999997, 999999996, 999999995], [1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 0, 'Test 61');
test(numOfUnplacedFruits([5, 7, 3, 8, 2, 6], [4, 5, 7, 6, 8, 3]), 1, 'Test 62');
test(numOfUnplacedFruits([7,7,7,7,7,7,7,7,7,7], [5,5,5,5,5,10,10,10,10,10]), 5, 'Test 63');
test(numOfUnplacedFruits([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], [2, 2, 3, 3, 3, 4, 4, 4, 4, 4]), 0, 'Test 64');
test(numOfUnplacedFruits([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 65');
test(numOfUnplacedFruits([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 4, 'Test 66');
test(numOfUnplacedFruits([5, 3, 8, 6, 2], [4, 7, 8, 5, 1]), 1, 'Test 67');
test(numOfUnplacedFruits([10, 20, 30, 40, 50], [5, 25, 15, 40, 30]), 2, 'Test 68');
test(numOfUnplacedFruits([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 0, 'Test 69');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 0, 'Test 70');
test(numOfUnplacedFruits([1, 1, 1, 1, 10], [10, 10, 10, 10, 1]), 1, 'Test 71');
test(numOfUnplacedFruits([5, 10, 15, 20, 25], [5, 15, 25, 35, 45, 55]), 0, 'Test 72');
test(numOfUnplacedFruits([10, 20, 30, 40, 50], [1, 1, 1, 1, 1]), 5, 'Test 73');
test(numOfUnplacedFruits([10, 20, 30, 40, 50], [5, 15, 25, 35, 45]), 1, 'Test 74');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 75');
test(numOfUnplacedFruits([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 7, 'Test 76');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60], [60, 50, 40, 30, 20, 10]), 3, 'Test 77');
test(numOfUnplacedFruits([10, 20, 30, 40, 50], [100, 100, 100, 100, 1]), 1, 'Test 78');
test(numOfUnplacedFruits([5, 5, 5, 5, 5], [3, 3, 3, 3, 3]), 5, 'Test 79');
test(numOfUnplacedFruits([500, 400, 300, 200, 100], [100, 200, 300, 400, 500]), 0, 'Test 80');
test(numOfUnplacedFruits([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 81');
test(numOfUnplacedFruits([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 0, 'Test 82');
test(numOfUnplacedFruits([100, 200, 300, 400, 500], [150, 250, 350, 450, 550]), 0, 'Test 83');
test(numOfUnplacedFruits([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [20, 18, 16, 14, 12, 10, 8, 6, 4, 2]), 5, 'Test 84');
test(numOfUnplacedFruits([999999999, 999999998, 999999997, 999999996], [999999996, 999999997, 999999998, 999999999]), 0, 'Test 85');
test(numOfUnplacedFruits([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]), 1, 'Test 86');
test(numOfUnplacedFruits([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 87');
test(numOfUnplacedFruits([9, 11, 13, 15, 17], [18, 19, 20, 21, 22]), 0, 'Test 88');
test(numOfUnplacedFruits([10, 10, 10, 10, 10], [5, 5, 5, 5, 5]), 5, 'Test 89');
test(numOfUnplacedFruits([1000000000, 1000000000, 1000000000], [999999999, 999999999, 999999999]), 3, 'Test 90');
test(numOfUnplacedFruits([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], [1, 2, 4, 8, 16, 32, 64, 128, 256, 1024]), 0, 'Test 91');
test(numOfUnplacedFruits([9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,10]), 0, 'Test 92');
test(numOfUnplacedFruits([9, 8, 7, 6, 5], [10, 9, 8, 7, 6]), 0, 'Test 93');
test(numOfUnplacedFruits([1000000000, 1000000000, 1000000000], [999999999, 999999999, 1000000000]), 2, 'Test 94');
test(numOfUnplacedFruits([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 95');
test(numOfUnplacedFruits([10,10,10,10,10,10,10,10,10,10], [10,9,8,7,6,5,4,3,2,1]), 9, 'Test 96');
test(numOfUnplacedFruits([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 0, 'Test 97');
test(numOfUnplacedFruits([2, 3, 1, 5, 4], [5, 3, 4, 2, 1]), 2, 'Test 98');
test(numOfUnplacedFruits([50, 50, 50, 50, 50], [40, 40, 60, 60, 60]), 2, 'Test 99');
test(numOfUnplacedFruits([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10, 12]), 0, 'Test 100');
test(numOfUnplacedFruits([1000000000, 999999999, 888888888, 777777777, 666666666], [666666666, 777777777, 888888888, 999999999, 1000000000]), 0, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

