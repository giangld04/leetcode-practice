// Test: 2500. Delete Greatest Value In Each Row
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { deleteGreatestValue } = require("./solution");

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

console.log("\n2500. Delete Greatest Value In Each Row\n");

test(deleteGreatestValue([[1,1,1],[1,1,1],[1,1,1]]), 3, 'Test 1');
test(deleteGreatestValue([[9,8,7],[6,5,4],[3,2,1]]), 24, 'Test 2');
test(deleteGreatestValue([[5,1,3],[4,2,6],[7,8,9]]), 24, 'Test 3');
test(deleteGreatestValue([[5,1,3],[9,3,5],[7,6,2]]), 18, 'Test 4');
test(deleteGreatestValue([[10]]), 10, 'Test 5');
test(deleteGreatestValue([[1,2,4],[3,3,1]]), 8, 'Test 6');
test(deleteGreatestValue([[5,3],[9,7],[2,6]]), 16, 'Test 7');
test(deleteGreatestValue([[1,3,5,7],[2,4,6,8]]), 20, 'Test 8');
test(deleteGreatestValue([[5,3],[9,7]]), 16, 'Test 9');
test(deleteGreatestValue([[1,3,5,7],[10,8,6,4]]), 28, 'Test 10');
test(deleteGreatestValue([[1,2],[3,4],[5,6]]), 11, 'Test 11');
test(deleteGreatestValue([[2,2,2],[2,2,2],[2,2,2]]), 6, 'Test 12');
test(deleteGreatestValue([[100,100],[100,100],[100,100]]), 200, 'Test 13');
test(deleteGreatestValue([[1, 3, 5], [2, 4, 6], [3, 6, 9], [4, 8, 12]]), 24, 'Test 14');
test(deleteGreatestValue([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]]), 51, 'Test 15');
test(deleteGreatestValue([[50,49,48,47],[46,45,44,43],[42,41,40,39],[38,37,36,35]]), 194, 'Test 16');
test(deleteGreatestValue([[45,23,67,89,12],[90,34,56,78,10],[11,13,15,17,19],[21,22,24,25,26]]), 279, 'Test 17');
test(deleteGreatestValue([[3, 1, 4, 1, 5, 9], [2, 6, 5, 3, 5, 9], [8, 9, 7, 9, 3, 2], [4, 5, 6, 8, 0, 1]]), 38, 'Test 18');
test(deleteGreatestValue([[4, 8, 12, 16, 20], [3, 7, 11, 15, 19], [2, 6, 10, 14, 18], [1, 5, 9, 13, 17]]), 60, 'Test 19');
test(deleteGreatestValue([[23,34,45,56],[12,23,34,45],[56,67,78,89],[90,10,20,30]]), 291, 'Test 20');
test(deleteGreatestValue([[7, 8, 9], [4, 5, 6], [1, 2, 3], [7, 8, 9], [4, 5, 6], [1, 2, 3]]), 24, 'Test 21');
test(deleteGreatestValue([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [2, 4, 6, 8, 10, 1, 3, 5, 7, 9], [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]]), 165, 'Test 22');
test(deleteGreatestValue([[1,3,5,7,9],[10,8,6,4,2],[11,13,15,17,19],[20,18,16,14,12]]), 80, 'Test 23');
test(deleteGreatestValue([[50, 45, 40], [35, 30, 25], [20, 15, 10], [5, 10, 15], [20, 25, 30]]), 135, 'Test 24');
test(deleteGreatestValue([[10, 20, 30, 40, 50], [50, 40, 30, 20, 10], [60, 70, 80, 90, 100], [100, 90, 80, 70, 60]]), 400, 'Test 25');
test(deleteGreatestValue([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]]), 55, 'Test 26');
test(deleteGreatestValue([[100,99,98,97,96],[95,94,93,92,91],[90,89,88,87,86]]), 490, 'Test 27');
test(deleteGreatestValue([[24, 17, 56, 38, 45], [89, 21, 37, 62, 11], [48, 93, 71, 19, 81], [25, 76, 53, 90, 32]]), 318, 'Test 28');
test(deleteGreatestValue([[1,2,3,4,5,6],[6,5,4,3,2,1],[1,6,2,5,3,4]]), 21, 'Test 29');
test(deleteGreatestValue([[10,20,30,40,50],[50,40,30,20,10],[25,75,25,75,25],[75,25,75,25,75]]), 275, 'Test 30');
test(deleteGreatestValue([[4,2,9,1],[8,5,6,7],[3,11,12,10]]), 38, 'Test 31');
test(deleteGreatestValue([[20, 5, 15], [10, 10, 30], [40, 25, 5]]), 75, 'Test 32');
test(deleteGreatestValue([[23,54,76],[34,56,23],[89,12,45],[56,78,90]]), 224, 'Test 33');
test(deleteGreatestValue([[45,12,67,34],[89,23,56,78],[90,45,34,12],[78,90,45,67]]), 280, 'Test 34');
test(deleteGreatestValue([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]]), 42, 'Test 35');
test(deleteGreatestValue([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 5, 2, 4, 3], [3, 4, 5, 1, 2]]), 15, 'Test 36');
test(deleteGreatestValue([[100,90,80],[70,60,50],[40,30,20],[10,5,1]]), 270, 'Test 37');
test(deleteGreatestValue([[7,6,5,4,3,2,1],[1,2,3,4,5,6,7],[2,1,3,4,6,5,7],[3,4,5,6,7,1,2]]), 28, 'Test 38');
test(deleteGreatestValue([[3,3,3,3,3,3],[2,2,2,2,2,2],[1,1,1,1,1,1],[6,6,6,6,6,6]]), 36, 'Test 39');
test(deleteGreatestValue([[9, 7, 5, 3], [8, 6, 4, 2], [7, 5, 3, 1]]), 24, 'Test 40');
test(deleteGreatestValue([[45, 55, 65], [35, 45, 55], [25, 35, 45], [15, 25, 35]]), 165, 'Test 41');
test(deleteGreatestValue([[4, 1, 7], [8, 2, 6], [3, 9, 5], [5, 3, 8]]), 18, 'Test 42');
test(deleteGreatestValue([[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[5,5,5,5,5,5,5,5,5,5]]), 65, 'Test 43');
test(deleteGreatestValue([[23, 34, 45, 56], [56, 45, 34, 23], [23, 45, 56, 34], [34, 56, 23, 45]]), 158, 'Test 44');
test(deleteGreatestValue([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [10, 8, 6, 4, 2], [9, 7, 5, 3, 1]]), 30, 'Test 45');
test(deleteGreatestValue([[1,5,3],[2,8,7],[4,6,9],[11,13,12]]), 36, 'Test 46');
test(deleteGreatestValue([[30,20,10],[60,50,40],[90,80,70],[120,110,100]]), 330, 'Test 47');
test(deleteGreatestValue([[15,25,35,45,55,65,75,85,95],[95,85,75,65,55,45,35,25,15],[10,20,30,40,50,60,70,80,90]]), 495, 'Test 48');
test(deleteGreatestValue([[1, 100, 1], [100, 1, 100], [1, 100, 1], [100, 1, 100]]), 201, 'Test 49');
test(deleteGreatestValue([[50, 49, 48], [47, 46, 45], [44, 43, 42], [41, 40, 39]]), 147, 'Test 50');
test(deleteGreatestValue([[3,1,2],[6,5,4],[9,8,7],[12,11,10]]), 33, 'Test 51');
test(deleteGreatestValue([[50,40,30],[40,30,20],[30,20,10],[20,10,5]]), 120, 'Test 52');
test(deleteGreatestValue([[10], [20], [30], [40], [50], [60]]), 60, 'Test 53');
test(deleteGreatestValue([[42,24,36,18,72],[54,12,60,84,30],[90,45,15,75,60]]), 288, 'Test 54');
test(deleteGreatestValue([[100,99,98,97],[96,95,94,93],[92,91,90,89],[88,87,86,85]]), 394, 'Test 55');
test(deleteGreatestValue([[100, 90, 80], [70, 60, 50], [40, 30, 20], [10, 20, 30]]), 270, 'Test 56');
test(deleteGreatestValue([[9,1,5,3],[4,8,2,7],[6,10,1,12]]), 30, 'Test 57');
test(deleteGreatestValue([[25,15,35,5],[10,45,55,20],[50,30,60,40]]), 180, 'Test 58');
test(deleteGreatestValue([[100, 99, 98, 97, 96], [95, 94, 93, 92, 91], [90, 89, 88, 87, 86]]), 490, 'Test 59');
test(deleteGreatestValue([[15,20,25,30],[35,40,45,50],[55,60,65,70],[75,80,85,90],[95,100,105,110]]), 410, 'Test 60');
test(deleteGreatestValue([[9,7,5,3,1],[8,6,4,2,0],[7,5,3,1,9]]), 25, 'Test 61');
test(deleteGreatestValue([[99, 98, 97, 96], [95, 94, 93, 92], [91, 90, 89, 88]]), 390, 'Test 62');
test(deleteGreatestValue([[10,20,30],[15,25,35],[20,30,40],[25,35,45]]), 105, 'Test 63');
test(deleteGreatestValue([[1,2,3,4,5],[5,4,3,2,1],[6,7,8,9,10],[10,9,8,7,6]]), 40, 'Test 64');
test(deleteGreatestValue([[1,99,2,98],[3,97,4,96],[5,95,6,94],[7,93,8,92]]), 212, 'Test 65');
test(deleteGreatestValue([[50, 40, 30], [20, 10, 0], [80, 70, 60], [100, 90, 120]]), 310, 'Test 66');
test(deleteGreatestValue([[100,99,98],[97,96,95],[94,93,92],[91,90,89]]), 297, 'Test 67');
test(deleteGreatestValue([[5,1,9,2],[8,6,3,7],[4,10,1,11]]), 30, 'Test 68');
test(deleteGreatestValue([[9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9]]), 45, 'Test 69');
test(deleteGreatestValue([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]), 39, 'Test 70');
test(deleteGreatestValue([[100, 50, 25, 10], [90, 60, 40, 30], [80, 70, 35, 15], [75, 65, 55, 45]]), 270, 'Test 71');
test(deleteGreatestValue([[10,20,30,40,50],[50,40,30,20,10],[60,70,80,90,100]]), 400, 'Test 72');
test(deleteGreatestValue([[9,5,1,7],[8,4,2,6],[3,11,10,12]]), 36, 'Test 73');
test(deleteGreatestValue([[1,2],[2,1],[3,4],[4,3],[5,6]]), 11, 'Test 74');
test(deleteGreatestValue([[47, 83, 29], [91, 7, 36], [42, 54, 67], [22, 88, 15]]), 187, 'Test 75');
test(deleteGreatestValue([[99, 98, 97], [96, 95, 94], [93, 92, 91], [90, 89, 88], [87, 86, 85]]), 294, 'Test 76');
test(deleteGreatestValue([[1, 10, 100, 1000], [1000, 100, 10, 1], [1, 1000, 10, 100], [10, 100, 1000, 1]]), 1111, 'Test 77');
test(deleteGreatestValue([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [2, 3, 4, 5, 1], [5, 1, 2, 3, 4]]), 15, 'Test 78');
test(deleteGreatestValue([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]]), 55, 'Test 79');
test(deleteGreatestValue([[100, 1, 2, 3], [3, 2, 1, 100], [100, 100, 1, 1], [1, 100, 100, 100]]), 301, 'Test 80');
test(deleteGreatestValue([[7,5,3,1],[8,6,4,2],[9,7,5,3],[10,8,6,4]]), 28, 'Test 81');
test(deleteGreatestValue([[15, 20, 25, 30], [10, 15, 20, 25], [5, 10, 15, 20], [1, 5, 10, 15]]), 90, 'Test 82');
test(deleteGreatestValue([[7,3,5,9],[1,4,8,2],[6,10,12,11]]), 39, 'Test 83');
test(deleteGreatestValue([[15,14,13,12,11],[10,9,8,7,6],[5,4,3,2,1]]), 65, 'Test 84');
test(deleteGreatestValue([[100,1,2,3,4],[99,5,6,7,8],[98,9,10,11,12],[97,13,14,15,16]]), 158, 'Test 85');
test(deleteGreatestValue([[42, 23, 65, 12, 34], [56, 78, 90, 23, 45], [89, 12, 34, 56, 78]]), 292, 'Test 86');
test(deleteGreatestValue([[10, 15, 5, 20], [12, 18, 8, 6], [7, 11, 13, 19]]), 53, 'Test 87');
test(deleteGreatestValue([[1,2,3,4,5,6],[6,5,4,3,2,1],[7,8,9,10,11,12],[12,11,10,9,8,7]]), 57, 'Test 88');
test(deleteGreatestValue([[42,42,42,42],[42,42,42,42],[42,42,42,42],[42,42,42,42]]), 168, 'Test 89');
test(deleteGreatestValue([[1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], [1, 3, 5, 2, 4, 6], [6, 4, 2, 5, 3, 1]]), 21, 'Test 90');
test(deleteGreatestValue([[100, 1, 2, 3], [4, 100, 5, 6], [7, 8, 100, 9], [10, 11, 12, 100]]), 133, 'Test 91');
test(deleteGreatestValue([[10, 20, 30, 40, 50], [50, 40, 30, 20, 10], [10, 30, 50, 20, 40], [20, 40, 10, 50, 30]]), 150, 'Test 92');
test(deleteGreatestValue([[33, 54, 21, 45], [11, 99, 32, 16], [82, 76, 41, 53], [65, 29, 37, 44]]), 269, 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

