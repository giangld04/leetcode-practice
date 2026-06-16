// Test: 496. Next Greater Element I
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { nextGreaterElement } = require("./solution");

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

console.log("\n496. Next Greater Element I\n");

test(nextGreaterElement([2,3,5,6], [5,6,2,3,8,9]), [3, 8, 6, 8], 'Test 1');
test(nextGreaterElement([1,2], [2,1]), [-1, -1], 'Test 2');
test(nextGreaterElement([1,2,3,4], [4,3,2,1]), [-1, -1, -1, -1], 'Test 3');
test(nextGreaterElement([5], [5]), [-1], 'Test 4');
test(nextGreaterElement([1,6,4,8], [4,5,1,8,6,7,9]), [8, 7, 5, 9], 'Test 5');
test(nextGreaterElement([5,2,6], [4,1,5,2,3,6]), [6, 3, -1], 'Test 6');
test(nextGreaterElement([2,4], [1,2,3,4]), [3, -1], 'Test 7');
test(nextGreaterElement([4,1,2], [1,3,4,2]), [-1, 3, -1], 'Test 8');
test(nextGreaterElement([10,5,6], [3,4,2,1,5,7,8,9,10,6]), [-1, 7, -1], 'Test 9');
test(nextGreaterElement([2], [1,2]), [-1], 'Test 10');
test(nextGreaterElement([1,3,5,7], [1,2,3,4,5,6,7,8]), [2, 4, 6, 8], 'Test 11');
test(nextGreaterElement([3,5,8], [2,3,4,5,7,8,10]), [4, 7, 10], 'Test 12');
test(nextGreaterElement([1], [3,2,1]), [-1], 'Test 13');
test(nextGreaterElement([9,8,7], [8,9,7,6,5,4,3,2,1]), [-1, 9, -1], 'Test 14');
test(nextGreaterElement([3,5,8], [1,2,3,4,5,6,7,8,9]), [4, 6, 9], 'Test 15');
test(nextGreaterElement([9,10,7], [1,2,3,4,5,6,7,8,9,10]), [10, -1, 8], 'Test 16');
test(nextGreaterElement([1,3,5,7], [7,5,3,1,9,11,13]), [9, 9, 9, 9], 'Test 17');
test(nextGreaterElement([1], [1]), [-1], 'Test 18');
test(nextGreaterElement([1,3], [2,1,3,4]), [3, 4], 'Test 19');
test(nextGreaterElement([10,8,6], [1,2,3,4,5,6,7,8,9,10,11]), [11, 9, 7], 'Test 20');
test(nextGreaterElement([9,7,3], [3,6,9,12,15,7]), [12, -1, 6], 'Test 21');
test(nextGreaterElement([10,9,8], [8,9,10,5,7]), [-1, 10, 9], 'Test 22');
test(nextGreaterElement([100,90,80,70], [70,80,90,100,110,120,130,140,150]), [110, 100, 90, 80], 'Test 23');
test(nextGreaterElement([1,3,5,7,9], [2,4,6,8,10,1,3,5,7,9]), [3, 5, 7, 9, -1], 'Test 24');
test(nextGreaterElement([33, 22, 11], [11, 22, 33, 44, 55, 66, 77, 88, 99]), [44, 33, 22], 'Test 25');
test(nextGreaterElement([100,99,98,97], [98,100,97,99,96,95,94,93,92]), [-1, -1, 100, 99], 'Test 26');
test(nextGreaterElement([3,5,2,1], [1,2,3,5,4]), [5, -1, 3, 2], 'Test 27');
test(nextGreaterElement([3,5,2,4,9], [8,5,3,9,2,4,7,6]), [9, 9, 4, 7, -1], 'Test 28');
test(nextGreaterElement([1,2,3,4,5], [5,4,3,2,1]), [-1, -1, -1, -1, -1], 'Test 29');
test(nextGreaterElement([7,8,9], [1,2,3,4,5,6,7,8,9]), [8, 9, -1], 'Test 30');
test(nextGreaterElement([3,8,9], [10,11,7,8,6,5,3,4,9,2,1]), [4, 9, -1], 'Test 31');
test(nextGreaterElement([5,7,3,9,1], [11,14,8,15,13,2,11,5,12,7,9,3,6,10,4,1]), [12, 9, 6, 10, -1], 'Test 32');
test(nextGreaterElement([6, 2, 8, 9], [6, 5, 4, 3, 2, 1, 10, 11, 8, 9, 7]), [10, 10, 9, -1], 'Test 33');
test(nextGreaterElement([11, 13, 15, 17], [17, 15, 13, 11, 19, 21, 23]), [19, 19, 19, 19], 'Test 34');
test(nextGreaterElement([9,8,7,6,5], [5,6,7,8,9]), [-1, 9, 8, 7, 6], 'Test 35');
test(nextGreaterElement([1,2,3,4,5], [5,4,3,2,1,6,7]), [6, 6, 6, 6, 6], 'Test 36');
test(nextGreaterElement([1,3,5,7], [7,5,3,1,2,4,6,8,10]), [2, 4, 6, 8], 'Test 37');
test(nextGreaterElement([3,6,9,12,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [4, 7, 10, 13, -1], 'Test 38');
test(nextGreaterElement([3,5,7,9], [9,7,5,3,1,2,4,6,8,10]), [4, 6, 8, 10], 'Test 39');
test(nextGreaterElement([15,25,35], [10,15,20,25,30,35,40,45,50,55,60]), [20, 30, 40], 'Test 40');
test(nextGreaterElement([6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9]), [7, 6, 5, 4, 3, 2], 'Test 41');
test(nextGreaterElement([100,90,80,70], [70,80,90,100,110]), [110, 100, 90, 80], 'Test 42');
test(nextGreaterElement([10, 20, 30, 40], [40, 10, 20, 30, 50, 60, 70]), [20, 30, 50, 50], 'Test 43');
test(nextGreaterElement([6,5,4,3,2,1], [1,2,3,4,5,6]), [-1, 6, 5, 4, 3, 2], 'Test 44');
test(nextGreaterElement([3, 2, 1], [5, 3, 2, 1, 6, 4]), [6, 6, 6], 'Test 45');
test(nextGreaterElement([23,56,78,90], [90,78,56,23,12,34,45,67,89,100]), [34, 67, 89, 100], 'Test 46');
test(nextGreaterElement([42,55,66,77], [42,77,55,88,66,99,100]), [77, 88, 99, 88], 'Test 47');
test(nextGreaterElement([8, 6, 4, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [9, 7, 5, 3], 'Test 48');
test(nextGreaterElement([100, 90, 80], [70, 80, 90, 100, 60, 50, 40, 30, 20, 10]), [-1, 100, 90], 'Test 49');
test(nextGreaterElement([10,20,30], [10,20,30,25,15,5,40,35,33,31]), [20, 30, 40], 'Test 50');
test(nextGreaterElement([6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]), [7, 8, 9, 10, -1], 'Test 51');
test(nextGreaterElement([7,3,2], [5,7,3,2,1,8]), [8, 8, 8], 'Test 52');
test(nextGreaterElement([12,14,13,11,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [13, 15, 14, 12, -1], 'Test 53');
test(nextGreaterElement([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1,11]), [11, 11, 11, 11, 11, 11, 11, 11, 11, 11], 'Test 54');
test(nextGreaterElement([8,10,4,3], [1,11,10,4,8,3,7]), [-1, -1, 8, 7], 'Test 55');
test(nextGreaterElement([1, 3, 5, 7, 9], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [-1, -1, -1, -1, -1], 'Test 56');
test(nextGreaterElement([7,6,5,4,3,2,1], [2,1,3,6,5,4,7]), [-1, 7, 7, 7, 6, 3, 3], 'Test 57');
test(nextGreaterElement([2,6,4,5,3], [3,1,2,5,4,7,6]), [5, -1, 7, 7, 5], 'Test 58');
test(nextGreaterElement([8,9,10,11], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [9, 10, 11, 12], 'Test 59');
test(nextGreaterElement([3, 6, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [4, 7, 10], 'Test 60');
test(nextGreaterElement([3,5,7,9], [1,2,3,4,5,6,7,8,9]), [4, 6, 8, -1], 'Test 61');
test(nextGreaterElement([7,5,3,1], [9,7,5,3,1,2,4,6,8,10]), [8, 6, 4, 2], 'Test 62');
test(nextGreaterElement([100, 90, 80, 70], [70, 80, 90, 100, 110, 120, 130]), [110, 100, 90, 80], 'Test 63');
test(nextGreaterElement([1,3,5,7,9], [9,7,5,3,1,2,4,6,8,10]), [2, 4, 6, 8, 10], 'Test 64');
test(nextGreaterElement([3, 5, 2, 4, 9], [9, 1, 2, 5, 3, 7, 8, 4, 6]), [7, 7, 5, 6, -1], 'Test 65');
test(nextGreaterElement([42, 23, 14, 5, 1], [1, 5, 14, 23, 42, 3, 7, 11, 13, 19, 21, 27]), [-1, 42, 23, 14, 5], 'Test 66');
test(nextGreaterElement([1, 3, 5, 7, 9, 11, 13, 15, 17], [15, 13, 11, 9, 7, 5, 3, 1, 17, 19]), [17, 17, 17, 17, 17, 17, 17, 17, 19], 'Test 67');
test(nextGreaterElement([5,10,15,20], [20,15,10,5,25,30,35,40]), [25, 25, 25, 25], 'Test 68');
test(nextGreaterElement([7,3,9,1], [1,3,5,7,9]), [9, 5, -1, 3], 'Test 69');
test(nextGreaterElement([15,10,5], [1,2,3,4,5,10,15,20,25]), [20, 15, 10], 'Test 70');
test(nextGreaterElement([10,11,12,13], [13,12,11,10,9,8,7,6,5,4,3,2,1]), [-1, -1, -1, -1], 'Test 71');
test(nextGreaterElement([7,6,5,4,3,2,1], [1,2,3,4,5,6,7]), [-1, 7, 6, 5, 4, 3, 2], 'Test 72');
test(nextGreaterElement([6, 7, 8], [1, 2, 3, 6, 7, 8, 5, 4]), [7, 8, -1], 'Test 73');
test(nextGreaterElement([1,2,3,4,5], [5,4,3,2,1,6]), [6, 6, 6, 6, 6], 'Test 74');
test(nextGreaterElement([7,8,9], [9,8,7,6,5,4,3,2,1]), [-1, -1, -1], 'Test 75');
test(nextGreaterElement([1,10,100,1000], [100,1,1000,10,200,300,400,500]), [1000, 200, 1000, -1], 'Test 76');
test(nextGreaterElement([3,6,1,4], [9,3,8,1,7,6,5,4,2]), [8, -1, 7, -1], 'Test 77');
test(nextGreaterElement([15,12,11,13], [15,12,11,14,10,9,8,13,16]), [16, 14, 14, 16], 'Test 78');
test(nextGreaterElement([100, 99, 98, 97, 96], [96, 97, 98, 99, 100, 101, 102, 103]), [101, 100, 99, 98, 97], 'Test 79');
test(nextGreaterElement([9, 7, 5, 3, 1], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), [11, 9, 7, 5, 3], 'Test 80');
test(nextGreaterElement([1, 7, 4, 2, 10], [2, 1, 10, 7, 4, 5, 3]), [10, -1, 5, 10, -1], 'Test 81');
test(nextGreaterElement([11, 13, 7, 5, 3, 1], [1, 3, 5, 7, 9, 11, 13, 15]), [13, 15, 9, 7, 5, 3], 'Test 82');
test(nextGreaterElement([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1,11,12,13,14,15]), [11, 11, 11, 11, 11, 11, 11, 11, 11, 11], 'Test 83');
test(nextGreaterElement([10, 20, 30], [30, 20, 10, 40, 50, 60]), [40, 40, 40], 'Test 84');
test(nextGreaterElement([9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 8, 7, 6, 5, 4, 3, 2, 1]), [-1, -1, -1, -1, -1, -1, -1, -1, -1], 'Test 85');
test(nextGreaterElement([10,20,30], [10,15,20,25,30]), [15, 25, -1], 'Test 86');
test(nextGreaterElement([6, 4, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9]), [7, 5, 2], 'Test 87');
test(nextGreaterElement([7, 5, 9], [9, 4, 7, 3, 5, 1, 8, 6, 2]), [8, 8, -1], 'Test 88');
test(nextGreaterElement([7,6,5], [5,1,2,3,4,6,7]), [-1, 7, 6], 'Test 89');
test(nextGreaterElement([3, 11, 17, 19], [3, 19, 23, 11, 17, 29, 21, 25]), [19, 17, 29, 23], 'Test 90');
test(nextGreaterElement([1,7,3,4,5,6], [3,4,1,6,8,9,5,2,7]), [6, -1, 4, 6, 7, 8], 'Test 91');
test(nextGreaterElement([2,5,10,15,20], [1,3,5,7,9,11,13,15,17,19,20,18,16,14,12,10,8,6,4,2]), [-1, 7, -1, 17, -1], 'Test 92');
test(nextGreaterElement([15, 10, 18, 23, 5], [18, 10, 15, 5, 23, 2, 11, 17, 3, 12]), [23, 15, 23, -1, 23], 'Test 93');
test(nextGreaterElement([11,12,13], [5,11,9,12,13,8,7,6,10]), [12, 13, -1], 'Test 94');
test(nextGreaterElement([50,60,70,80,90], [90,80,70,60,50,40,30,20,10]), [-1, -1, -1, -1, -1], 'Test 95');
test(nextGreaterElement([100,200,300,400], [400,300,200,100,50,150,250,350,450]), [150, 250, 350, 450], 'Test 96');
test(nextGreaterElement([1,6,11,13], [1,3,5,7,9,11,13,2,4,6,8,10,12,14]), [3, 8, 13, 14], 'Test 97');
test(nextGreaterElement([15, 25, 35], [10, 20, 30, 40, 50, 60, 70, 80, 90, 15, 25, 35]), [25, 35, -1], 'Test 98');
test(nextGreaterElement([7, 5, 3, 1], [1, 3, 5, 7, 9]), [9, 7, 5, 3], 'Test 99');
test(nextGreaterElement([5, 8, 12, 15], [15, 12, 5, 8, 20, 25, 30, 35]), [8, 20, 20, 20], 'Test 100');
test(nextGreaterElement([5,1,4], [2,6,4,5,1,9]), [9, 9, 5], 'Test 101');
test(nextGreaterElement([9,10,11], [3,4,5,1,6,9,7,8,11,10,2]), [11, -1, -1], 'Test 102');
test(nextGreaterElement([9, 8, 7, 6], [1, 2, 3, 4, 5, 6, 7, 8, 9]), [-1, 9, 8, 7], 'Test 103');
test(nextGreaterElement([4,3,2,1], [1,2,3,4]), [-1, 4, 3, 2], 'Test 104');
test(nextGreaterElement([4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [5, 4, 3, 2, 1], 'Test 105');
test(nextGreaterElement([8,6,4,2], [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), [10, 8, 6, 4], 'Test 106');
test(nextGreaterElement([2, 6, 4, 5, 7, 3], [3, 5, 4, 6, 2, 1, 7, 9, 8]), [7, 7, 6, 6, 9, 5], 'Test 107');
test(nextGreaterElement([1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), [10, 10, 10, 10, 10, 10, 10, 10, 10], 'Test 108');
test(nextGreaterElement([1, 3, 5, 7], [2, 4, 6, 8, 1, 3, 5, 7]), [3, 5, 7, -1], 'Test 109');
test(nextGreaterElement([11,22,33], [33,22,11,44,55,66,77]), [44, 44, 44], 'Test 110');
test(nextGreaterElement([10, 20, 30, 40, 50], [50, 40, 30, 20, 10, 60, 70, 80, 90]), [60, 60, 60, 60, 60], 'Test 111');
test(nextGreaterElement([4,1,3,7,6,2,5], [7,8,2,3,4,1,6,5,9]), [6, 6, 4, 8, 9, 3, 9], 'Test 112');
test(nextGreaterElement([1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 12]), [11, 11, 11, 11, 11, 11, 11, 11, 11], 'Test 113');
test(nextGreaterElement([1,2,3,4,5], [3,4,5,1,2]), [2, -1, 4, 5, -1], 'Test 114');
test(nextGreaterElement([1,10,5,3], [3,1,10,5,9,7,4,6,8]), [10, -1, 9, 10], 'Test 115');
test(nextGreaterElement([5, 10, 20], [20, 10, 5, 25, 15, 30]), [25, 25, 25], 'Test 116');
test(nextGreaterElement([7, 5, 3, 2], [3, 2, 7, 5, 4]), [-1, -1, 7, 7], 'Test 117');
test(nextGreaterElement([1,7,4,3], [3,4,1,5,7,8,9]), [5, 8, 5, 4], 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

