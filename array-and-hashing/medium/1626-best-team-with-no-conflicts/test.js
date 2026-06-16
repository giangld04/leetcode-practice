// Test: 1626. Best Team With No Conflicts
// 137 test cases from LeetCodeDataset
// Run: node test.js

const { bestTeamScore } = require("./solution");

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

console.log("\n1626. Best Team With No Conflicts\n");

test(bestTeamScore([1000000, 999999, 999998], [1, 2, 3]), 1000000, 'Test 1');
test(bestTeamScore([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 10, 'Test 2');
test(bestTeamScore([50,50,50,50], [1,2,3,4]), 200, 'Test 3');
test(bestTeamScore([10,22,35,47,55,65], [16,19,22,25,28,31]), 234, 'Test 4');
test(bestTeamScore([5,5,5,5], [1,2,3,4]), 20, 'Test 5');
test(bestTeamScore([1,1,1,1,1], [1,1,1,1,1]), 5, 'Test 6');
test(bestTeamScore([100000,100000,100000], [1000,1000,1000]), 300000, 'Test 7');
test(bestTeamScore([100,200,300,400], [4,3,2,1]), 400, 'Test 8');
test(bestTeamScore([4,5,6,5], [2,1,2,1]), 16, 'Test 9');
test(bestTeamScore([5,5,5,5,5,5,5,5,5,5], [1,2,3,4,5,6,7,8,9,10]), 50, 'Test 10');
test(bestTeamScore([1,2,3,5], [8,9,10,1]), 6, 'Test 11');
test(bestTeamScore([10,9,8,7], [1,2,3,4]), 10, 'Test 12');
test(bestTeamScore([5,3,7,5,2], [5,4,8,5,2]), 22, 'Test 13');
test(bestTeamScore([10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10]), 10, 'Test 14');
test(bestTeamScore([1000000,1000000,1000000], [1,1,1]), 3000000, 'Test 15');
test(bestTeamScore([1,3,5,10,15], [1,2,3,4,5]), 34, 'Test 16');
test(bestTeamScore([1,2,2,1], [3,1,1,3]), 4, 'Test 17');
test(bestTeamScore([1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10]), 10, 'Test 18');
test(bestTeamScore([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2], [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2]), 30, 'Test 19');
test(bestTeamScore([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 550, 'Test 20');
test(bestTeamScore([15,15,15,15,15,15,15,15,15,15], [1,2,3,4,5,6,7,8,9,10]), 150, 'Test 21');
test(bestTeamScore([100, 90, 80, 70, 60], [18, 17, 16, 15, 14]), 400, 'Test 22');
test(bestTeamScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 550, 'Test 23');
test(bestTeamScore([90, 85, 90, 100, 105, 110, 105, 115, 120], [25, 30, 25, 30, 35, 40, 45, 50, 55]), 730, 'Test 24');
test(bestTeamScore([2,5,3,1,4], [1,2,3,4,5]), 9, 'Test 25');
test(bestTeamScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 100, 'Test 26');
test(bestTeamScore([20, 30, 20, 30, 20], [2, 2, 3, 3, 4]), 80, 'Test 27');
test(bestTeamScore([1,3,2,5,4,7,6,9,8,11,10], [1,2,3,4,5,6,7,8,9,10,11]), 36, 'Test 28');
test(bestTeamScore([10,5,7,1,9,6,8,3,4,2], [10,10,10,10,10,10,10,10,10,10]), 55, 'Test 29');
test(bestTeamScore([10, 20, 30, 20, 10, 40, 50], [1, 2, 3, 1, 2, 3, 4]), 170, 'Test 30');
test(bestTeamScore([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 120, 'Test 31');
test(bestTeamScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 32');
test(bestTeamScore([25,30,5,50,40,60,70,10,80,90], [1,2,3,4,5,6,7,8,9,10]), 405, 'Test 33');
test(bestTeamScore([4, 10, 4, 3, 8, 9], [4, 1, 2, 4, 3, 1]), 19, 'Test 34');
test(bestTeamScore([5,4,3,2,1,10,9,8,7,6], [1,2,3,4,5,10,9,8,7,6]), 45, 'Test 35');
test(bestTeamScore([5, 10, 15, 20, 25, 30, 35, 40], [1, 3, 2, 5, 4, 7, 6, 8]), 120, 'Test 36');
test(bestTeamScore([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 55, 'Test 37');
test(bestTeamScore([40, 20, 30, 10, 50], [2, 1, 3, 4, 5]), 110, 'Test 38');
test(bestTeamScore([100,200,300,400,500,600,700,800,900,1000], [1,2,3,4,5,6,7,8,9,10]), 5500, 'Test 39');
test(bestTeamScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 4, 3, 2, 1, 1, 2, 3, 4, 5]), 45, 'Test 40');
test(bestTeamScore([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]), 605, 'Test 41');
test(bestTeamScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]), 55, 'Test 42');
test(bestTeamScore([10, 20, 30, 25, 40], [4, 3, 5, 2, 6]), 95, 'Test 43');
test(bestTeamScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 550, 'Test 44');
test(bestTeamScore([20, 30, 25, 20, 40, 35, 30, 45, 50, 60], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 245, 'Test 45');
test(bestTeamScore([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1000000000, 'Test 46');
test(bestTeamScore([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1000, 'Test 47');
test(bestTeamScore([10, 6, 5, 7, 3, 8], [4, 3, 2, 4, 1, 5]), 31, 'Test 48');
test(bestTeamScore([8, 5, 6, 10, 7, 9, 4, 2, 11, 3], [8, 6, 6, 9, 7, 8, 5, 4, 10, 3]), 63, 'Test 49');
test(bestTeamScore([1000, 500, 250, 750, 100], [20, 25, 30, 35, 40]), 1250, 'Test 50');
test(bestTeamScore([4,1,3,2,5], [2,1,2,3,1]), 8, 'Test 51');
test(bestTeamScore([10,20,30,40,50], [10,20,30,40,50]), 150, 'Test 52');
test(bestTeamScore([10, 20, 10, 30, 20, 40, 30, 50, 40, 60], [1, 2, 1, 3, 2, 4, 3, 5, 4, 5]), 310, 'Test 53');
test(bestTeamScore([1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9]), 9, 'Test 54');
test(bestTeamScore([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 15, 'Test 55');
test(bestTeamScore([10, 9, 2, 5, 3, 7, 1, 8, 6, 4], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 22, 'Test 56');
test(bestTeamScore([1000000, 100000, 10000, 1000, 100, 10, 1], [1, 2, 3, 4, 5, 6, 7]), 1000000, 'Test 57');
test(bestTeamScore([10,20,30,40,50], [3,2,1,2,3]), 120, 'Test 58');
test(bestTeamScore([9, 2, 8, 5, 7, 6, 3, 4, 1, 10], [4, 1, 6, 3, 5, 4, 2, 3, 1, 7]), 46, 'Test 59');
test(bestTeamScore([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 100, 'Test 60');
test(bestTeamScore([100, 200, 300, 400, 500], [5, 4, 3, 2, 1]), 500, 'Test 61');
test(bestTeamScore([100, 200, 300, 200, 100], [1, 2, 3, 4, 5]), 600, 'Test 62');
test(bestTeamScore([9,8,7,6,5,4,3,2,1], [1,1,1,1,1,1,1,1,1]), 45, 'Test 63');
test(bestTeamScore([20,10,20,10,20,10,20,10,20,10], [1,2,3,4,5,6,7,8,9,10]), 100, 'Test 64');
test(bestTeamScore([4, 5, 6, 5, 7, 8, 6, 9], [2, 1, 2, 1, 3, 4, 3, 5]), 46, 'Test 65');
test(bestTeamScore([10,20,30,40,50,60,70,80,90,100], [5,5,5,5,5,5,5,5,5,5]), 550, 'Test 66');
test(bestTeamScore([20, 30, 10, 40, 50], [10, 10, 10, 10, 10]), 150, 'Test 67');
test(bestTeamScore([5,10,15,20,25,30,35,40,45,50], [10,9,8,7,6,5,4,3,2,1]), 50, 'Test 68');
test(bestTeamScore([10,20,30,40,50,60,70,80,90,100], [10,9,8,7,6,5,4,3,2,1]), 100, 'Test 69');
test(bestTeamScore([9,2,8,8,8,2,1,1,1,4], [6,2,4,7,7,2,2,2,4,3]), 34, 'Test 70');
test(bestTeamScore([8,2,7,5,4,3,9], [2,3,1,2,3,4,5]), 24, 'Test 71');
test(bestTeamScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 72');
test(bestTeamScore([1, 2, 3, 2, 1, 4, 5, 4, 3, 2, 1], [1, 2, 3, 2, 1, 4, 5, 4, 3, 2, 1]), 28, 'Test 73');
test(bestTeamScore([15, 20, 5, 10, 25, 30], [5, 5, 2, 3, 5, 5]), 105, 'Test 74');
test(bestTeamScore([1,3,5,7,9,11,13,15,17,19], [10,9,8,7,6,5,4,3,2,1]), 19, 'Test 75');
test(bestTeamScore([5, 10, 15, 20, 25, 30, 35], [20, 20, 20, 20, 20, 20, 20]), 140, 'Test 76');
test(bestTeamScore([5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 95, 'Test 77');
test(bestTeamScore([8, 6, 7, 5, 3, 0, 9], [1, 2, 2, 3, 3, 3, 4]), 22, 'Test 78');
test(bestTeamScore([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 550, 'Test 79');
test(bestTeamScore([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]), 20, 'Test 80');
test(bestTeamScore([3,10,2,1,5,7,8,6,4,9], [1,3,2,4,2,2,3,2,2,1]), 43, 'Test 81');
test(bestTeamScore([50, 40, 30, 20, 10, 100, 90, 80, 70, 60], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 150, 'Test 82');
test(bestTeamScore([50, 45, 40, 35, 30, 25, 20, 15, 10, 5], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 275, 'Test 83');
test(bestTeamScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 100, 'Test 84');
test(bestTeamScore([10, 20, 20, 10, 30, 30, 40, 40], [1, 1, 2, 2, 3, 3, 4, 4]), 190, 'Test 85');
test(bestTeamScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 12, 'Test 86');
test(bestTeamScore([10, 20, 20, 10, 30], [1, 2, 3, 4, 5]), 80, 'Test 87');
test(bestTeamScore([1000,1000,1000,1000,1000], [1,1,1,1,1]), 5000, 'Test 88');
test(bestTeamScore([30,10,20,40,50,15,25,35,45,55], [3,1,2,4,5,1,2,3,4,5]), 325, 'Test 89');
test(bestTeamScore([50, 40, 30, 20, 10], [1, 1, 1, 1, 1]), 150, 'Test 90');
test(bestTeamScore([1, 3, 2, 5, 4, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 91');
test(bestTeamScore([20,20,20,20,20], [1,2,3,4,5]), 100, 'Test 92');
test(bestTeamScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 100, 'Test 93');
test(bestTeamScore([5, 4, 3, 2, 1], [1, 1, 1, 1, 1]), 15, 'Test 94');
test(bestTeamScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 550, 'Test 95');
test(bestTeamScore([100, 200, 150, 100, 50, 250], [5, 4, 3, 2, 1, 6]), 750, 'Test 96');
test(bestTeamScore([3,1,2], [1,1,1]), 6, 'Test 97');
test(bestTeamScore([3, 2, 3, 2, 3, 2, 3, 2, 3, 2], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 25, 'Test 98');
test(bestTeamScore([4, 1, 6, 2, 5, 3], [2, 1, 3, 1, 2, 3]), 18, 'Test 99');
test(bestTeamScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 30, 'Test 100');
test(bestTeamScore([1,1,2,2,3,3,4,4,5,5], [1,2,1,2,1,2,1,2,1,2]), 20, 'Test 101');
test(bestTeamScore([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 20, 'Test 102');
test(bestTeamScore([1,2,3,4,5,6,7,8,9,10], [10,1,2,3,4,5,6,7,8,9]), 54, 'Test 103');
test(bestTeamScore([1,1,1,1,1,2,2,2,2,2], [1,2,3,4,5,1,2,3,4,5]), 11, 'Test 104');
test(bestTeamScore([15,30,10,20,50], [5,10,15,20,25]), 95, 'Test 105');
test(bestTeamScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), 350, 'Test 106');
test(bestTeamScore([10,20,30,40,50,10,20,30,40,50], [1,1,1,1,1,2,2,2,2,2]), 200, 'Test 107');
test(bestTeamScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 55, 'Test 108');
test(bestTeamScore([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 1000000, 'Test 109');
test(bestTeamScore([20, 10, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 540, 'Test 110');
test(bestTeamScore([1, 3, 2, 4, 3, 5, 4, 6, 5, 7], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 26, 'Test 111');
test(bestTeamScore([3,6,9,12,15,18,21,24,27,30], [1,2,3,4,5,6,7,8,9,10]), 165, 'Test 112');
test(bestTeamScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 65, 'Test 113');
test(bestTeamScore([2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,11,1], [2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,11,1]), 75, 'Test 114');
test(bestTeamScore([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 115');
test(bestTeamScore([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6]), 23, 'Test 116');
test(bestTeamScore([1000,500,200,1000,1000,500,200], [2,1,3,2,3,1,3]), 4000, 'Test 117');
test(bestTeamScore([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]), 55, 'Test 118');
test(bestTeamScore([3,1,4,1,5,9,2,6,5,3,5], [1,2,3,4,5,6,7,8,9,10,11]), 22, 'Test 119');
test(bestTeamScore([100,200,300,400,500,150,250,350,450,550], [10,9,8,7,6,1,2,3,4,5]), 1750, 'Test 120');
test(bestTeamScore([100,90,80,70,60,50,40,30,20,10], [1,1,1,1,1,1,1,1,1,1]), 550, 'Test 121');
test(bestTeamScore([10, 20, 30, 40, 50], [1, 3, 2, 5, 4]), 90, 'Test 122');
test(bestTeamScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 50, 'Test 123');
test(bestTeamScore([10,10,10,10,10,10,10,10,10,10], [1,2,3,4,5,6,7,8,9,10]), 100, 'Test 124');
test(bestTeamScore([4,10,10,6,7,1,9], [4,1,4,2,2,3,6]), 23, 'Test 125');
test(bestTeamScore([3,3,3,3,3,3,3,3,3,3], [1,1,1,1,1,2,2,2,2,2]), 30, 'Test 126');
test(bestTeamScore([1,2,3,4,5], [5,4,3,2,1]), 5, 'Test 127');
test(bestTeamScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 550, 'Test 128');
test(bestTeamScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 129');
test(bestTeamScore([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 275, 'Test 130');
test(bestTeamScore([10,20,30,40,50,60,70,80,90,100], [1,1,1,1,1,1,1,1,1,1]), 550, 'Test 131');
test(bestTeamScore([5,4,3,2,1], [1,2,3,4,5]), 5, 'Test 132');
test(bestTeamScore([1,3,6,10,15,21,28,36,45,55], [1,2,3,4,5,6,7,8,9,10]), 220, 'Test 133');
test(bestTeamScore([100, 90, 80, 70, 60], [5, 4, 3, 2, 1]), 400, 'Test 134');
test(bestTeamScore([20, 20, 20, 20, 20, 20, 20, 20, 20, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 200, 'Test 135');
test(bestTeamScore([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], [5, 4, 3, 2, 1, 6, 7, 8, 9, 10, 1]), 19, 'Test 136');
test(bestTeamScore([1000000,500000,250000,125000,62500,31250,15625,7812,3906,1953], [10,9,8,7,6,5,4,3,2,1]), 1998046, 'Test 137');

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
