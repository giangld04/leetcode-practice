// Test: 865. Smallest Subtree With All The Deepest Nodes
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { subtreeWithAllDeepest } = require("./solution");

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

console.log("\n865. Smallest Subtree With All The Deepest Nodes\n");

test(subtreeWithAllDeepest([1,2,3,4,5,6,7]), [1, 2, 3, 4, 5, 6, 7], 'Test 1');
test(subtreeWithAllDeepest([0,1,null,3,2,null,null,null,4]), [4], 'Test 2');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 3');
test(subtreeWithAllDeepest([2,7,4]), [2, 7, 4], 'Test 4');
test(subtreeWithAllDeepest([0,2,1,3,null,null,null,4,null,null,5]), [5], 'Test 5');
test(subtreeWithAllDeepest([0,1,null,3,2,4,null,null,5]), [1, 3, 2, 4, null, null, 5], 'Test 6');
test(subtreeWithAllDeepest([0,1,3,null,2]), [2], 'Test 7');
test(subtreeWithAllDeepest([4,7,8,9,2,null,null,null,null,3,1]), [2, 3, 1], 'Test 8');
test(subtreeWithAllDeepest([1,2,null,3,4,5]), [5], 'Test 9');
test(subtreeWithAllDeepest([2,1,3]), [2, 1, 3], 'Test 10');
test(subtreeWithAllDeepest([3,1,2,null,null,4,5,null,6,null,7]), [2, 4, 5, null, 6, null, 7], 'Test 11');
test(subtreeWithAllDeepest([1,2,3,4,5,null,6,7,null,null,null,null,8]), [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8], 'Test 12');
test(subtreeWithAllDeepest([0,1,2,null,null,3,4]), [2, 3, 4], 'Test 13');
test(subtreeWithAllDeepest([0,2,3,null,1,4,null,null,null,5]), [5], 'Test 14');
test(subtreeWithAllDeepest([3,5,1,6,2,0,8,null,null,7,4]), [2, 7, 4], 'Test 15');
test(subtreeWithAllDeepest([1]), [1], 'Test 16');
test(subtreeWithAllDeepest([0,1,2,3,4,null,null,5,6,null,null,null,null,7,8]), [6, 7, 8], 'Test 17');
test(subtreeWithAllDeepest([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14]), [14], 'Test 18');
test(subtreeWithAllDeepest([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), [1, 3, 4, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 'Test 19');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]), [64], 'Test 20');
test(subtreeWithAllDeepest([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [10], 'Test 21');
test(subtreeWithAllDeepest([10,20,30,40,50,null,60,70,80,90,null,null,null,null,null,100,null,null,null,null,110,null,null,120]), [110], 'Test 22');
test(subtreeWithAllDeepest([8,3,10,1,6,null,14,null,null,4,7,13,null,null,null,null,null,9,2,null,null,null,null,5,null,null,null,null,null,null,null,11]), [13, 9, 2], 'Test 23');
test(subtreeWithAllDeepest([2,1,3,null,4,null,null,5,null,null,null,null,6,null,null,null,null,7]), [5], 'Test 24');
test(subtreeWithAllDeepest([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 25');
test(subtreeWithAllDeepest([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,null,18,19,null,null,20,21]), [2, 7, 4, null, 18, 19, null, null, 20, 21], 'Test 26');
test(subtreeWithAllDeepest([6,0,3,null,null,1,5,null,2,null,null,null,null,null,4]), [2], 'Test 27');
test(subtreeWithAllDeepest([2,1,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [10], 'Test 28');
test(subtreeWithAllDeepest([1,2,3,4,5,null,null,6,7,8,9,10,11]), [6, 10, 11], 'Test 29');
test(subtreeWithAllDeepest([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,12,13,null,14,15]), [15], 'Test 30');
test(subtreeWithAllDeepest([6,2,8,0,4,7,9,null,null,3,5]), [4, 3, 5], 'Test 31');
test(subtreeWithAllDeepest([20,8,22,4,12,null,null,2,10,14,null,null,1,null,6,8,null,null,null,null,9]), [9], 'Test 32');
test(subtreeWithAllDeepest([4,2,null,3,1,null,null,5,null,null,6]), [6], 'Test 33');
test(subtreeWithAllDeepest([5,3,6,2,4,null,7,1,null,null,null,8]), [5, 3, 6, 2, 4, null, 7, 1, null, null, null, 8], 'Test 34');
test(subtreeWithAllDeepest([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15], 'Test 35');
test(subtreeWithAllDeepest([10,5,15,3,7,null,18,null,4,6,9,16,null,null,null,null,null,11,12,13,null,null,null,null,null,null,17]), [17], 'Test 36');
test(subtreeWithAllDeepest([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [8], 'Test 37');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,null,null,null,null,null,null,null,null,8,9,10,11]), [1, 2, 3, 4, 5, 6, 7], 'Test 38');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,null,null,8,9,10,11,12,null,null,13,14,15,null,null,16,17,null,null,18,19,null,null,null,20,null,null,null,null,21,22,null,null,23,null,null,null,24]), [24], 'Test 39');
test(subtreeWithAllDeepest([3,5,1,6,2,0,8,null,null,7,4,15,16,17,null,null,18,null,null,19]), [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4, 15, 16, 17, null, null, 18, null, null, 19], 'Test 40');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,16]), [16], 'Test 41');
test(subtreeWithAllDeepest([1,2,null,3,4,null,5,null,6,null,7,null,8,null,9,null,10]), [2, 3, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10], 'Test 42');
test(subtreeWithAllDeepest([1,2,3,null,4,null,5,6,null,7,null,8,null,9]), [1, 2, 3, null, 4, null, 5, 6, null, 7, null, 8, null, 9], 'Test 43');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,null,null,null,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [1, 2, 3, 4, 5, 6, 7, null, null, null, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 'Test 44');
test(subtreeWithAllDeepest([3,5,1,6,2,0,8,null,null,7,4,null,null,10,11,12,null,null,13,null,null,14]), [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4, null, null, 10, 11, 12, null, null, 13, null, null, 14], 'Test 45');
test(subtreeWithAllDeepest([0,1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [8], 'Test 46');
test(subtreeWithAllDeepest([1,2,3,null,null,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]), [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], 'Test 47');
test(subtreeWithAllDeepest([5,1,4,null,2,null,3]), [5, 1, 4, null, 2, null, 3], 'Test 48');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,16,17]), [14, 16, 17], 'Test 49');
test(subtreeWithAllDeepest([1,2,3,4,5,null,null,6,7,8,9,null,null,10,11,12,13,null,null,null,null,14]), [14], 'Test 50');
test(subtreeWithAllDeepest([0,1,3,null,2,null,null,null,4,null,null,null,null,null,null,null,5]), [4], 'Test 51');
test(subtreeWithAllDeepest([30,10,20,5,15,null,25,3,7,12,null,18,null,1,null,9,13,null,null,17,null,null,23,null,null,28,null,null,2,null,null,8,null,null,11,null,null,14,null,null,16,null,null,19,null,null,22,null,null,27,null,null,4,null,null,6,null,null,10,null,null,21,null,null,26,null,null,31,null,null,29,null,null,24,null,null,33,null,null,35,null,null,37,null,null,32,null,null,34,null,null,36,null,null,38,null,null,39,null,null,40]), [16], 'Test 52');
test(subtreeWithAllDeepest([7,3,15,null,null,9,20]), [15, 9, 20], 'Test 53');
test(subtreeWithAllDeepest([100,90,110,80,95,105,120,70,85,92,98,102,115,130,140,60,75,82,88,91,93,97,99,101,103,107,112,125,135,145,150]), [100, 90, 110, 80, 95, 105, 120, 70, 85, 92, 98, 102, 115, 130, 140, 60, 75, 82, 88, 91, 93, 97, 99, 101, 103, 107, 112, 125, 135, 145, 150], 'Test 54');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,10]), [4, 8, 9], 'Test 55');
test(subtreeWithAllDeepest([5,1,4,null,2,null,3,null,null,null,null,6,7]), [5, 1, 4, null, 2, null, 3], 'Test 56');
test(subtreeWithAllDeepest([3,5,1,6,2,0,8,null,null,7,4,null,null,10,11]), [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4, null, null, 10, 11], 'Test 57');
test(subtreeWithAllDeepest([2,1,3,4,5,null,null,6,7,8,9,null,null,null,null,null,10]), [10], 'Test 58');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 'Test 59');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,18,19,20,null,null,null,null,null,null,21]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null, null, 16, 17, 18, 19, 20, null, null, null, null, null, null, 21], 'Test 60');
test(subtreeWithAllDeepest([3,5,1,6,2,0,8,null,null,7,4,9,null,null,null,null,10,null,null,null,null,null,11,null,null,null,null,12]), [11], 'Test 61');
test(subtreeWithAllDeepest([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13]), [13], 'Test 62');
test(subtreeWithAllDeepest([5,3,8,2,4,null,9,1,null,null,null,null,7,null,10,11,12]), [5, 3, 8, 2, 4, null, 9, 1, null, null, null, null, 7, null, 10, 11, 12], 'Test 63');
test(subtreeWithAllDeepest([10,5,15,3,7,null,18,1,null,6]), [5, 3, 7, 1, null, 6], 'Test 64');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,null,null,null,null,null,null,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), [14, 22, 23, 38, 39, 40], 'Test 65');
test(subtreeWithAllDeepest([2,1,3,4,null,5,6,7,null,null,null,null,8,9]), [9], 'Test 66');
test(subtreeWithAllDeepest([10,5,15,3,7,null,18,1,null,null,6]), [5, 3, 7, 1, null, null, 6], 'Test 67');
test(subtreeWithAllDeepest([0,1,2,null,3,null,4,null,5,null,6,null,7,null,8]), [0, 1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8], 'Test 68');
test(subtreeWithAllDeepest([5,3,6,2,4,null,7,1,null,null,null,null,null,null,8]), [8], 'Test 69');
test(subtreeWithAllDeepest([1,2,3,4,null,null,5,null,null,6,null,null,7,null,8,null,null,9,null,10]), [8], 'Test 70');
test(subtreeWithAllDeepest([1,2,null,null,3,null,null,null,4,null,null,null,5,null,null,null,6,null,null,null,7,null,null,null,8,null,null,null,9,null,null,null,10]), [3], 'Test 71');
test(subtreeWithAllDeepest([1,2,null,3,4,null,5,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17]), [17], 'Test 72');
test(subtreeWithAllDeepest([0,1,2,3,null,4,5,null,6,7,null,8,null,9]), [9], 'Test 73');
test(subtreeWithAllDeepest([0,1,2,3,null,4,5,null,null,6,7,null,null,null,null,8,9]), [7, 8, 9], 'Test 74');
test(subtreeWithAllDeepest([1,2,3,4,5,null,6,7,8,9,null,null,null,null,null,null,null,10]), [10], 'Test 75');
test(subtreeWithAllDeepest([7,3,8,1,4,9,10,null,null,2,5,null,null,null,6,null,null,11,12]), [5, 11, 12], 'Test 76');
test(subtreeWithAllDeepest([1,2,3,4,5,null,6,null,7,null,null,null,8,null,9]), [9], 'Test 77');
test(subtreeWithAllDeepest([1,2,3,4,5,null,null,6,7,8,9,null,null,null,null,10,11,12,13,null,null,null,null,null,null,14,15]), [13, 14, 15], 'Test 78');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,null,8,null,9,10,null,11,null,null,12,null,null,13,null,null,null,null,null,14]), [14], 'Test 79');
test(subtreeWithAllDeepest([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 'Test 80');
test(subtreeWithAllDeepest([0,1,2,3,null,4,5,null,6,7,8,9,10]), [0, 1, 2, 3, null, 4, 5, null, 6, 7, 8, 9, 10], 'Test 81');
test(subtreeWithAllDeepest([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), [1, 2, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9], 'Test 82');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,16]), [16], 'Test 83');
test(subtreeWithAllDeepest([20,10,30,5,15,25,35,2,7,null,17,null,23,27,40,null,null,6,null,16,18,null,21,24,28,37,null,null,null,45]), [45], 'Test 84');
test(subtreeWithAllDeepest([1,2,3,4,5,null,6,7,null,8,9,null,null,null,null,null,10]), [10], 'Test 85');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), [32], 'Test 86');
test(subtreeWithAllDeepest([0,1,2,3,null,4,null,5,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [3, 5, 6, null, 8, null, 9, null, 11, null, 12, null, 14, null, 15], 'Test 87');
test(subtreeWithAllDeepest([8,3,null,1,null,6,7,4,5,null,null,null,null,null,null,9,2]), [6, 4, 5], 'Test 88');
test(subtreeWithAllDeepest([0,1,2,3,4,5,6,null,null,null,7,8,null,null,null,9]), [9], 'Test 89');
test(subtreeWithAllDeepest([50,30,70,20,40,60,80,10,null,null,45,55,null,null,null,5,null,null]), [5], 'Test 90');
test(subtreeWithAllDeepest([4,2,null,3,null,1,null,null,5,null,6]), [6], 'Test 91');
test(subtreeWithAllDeepest([1,2,2,3,3,null,null,4,4,5,5]), [2, 3, 3, 4, 4, 5, 5], 'Test 92');
test(subtreeWithAllDeepest([7,3,9,2,4,null,8,null,null,null,null,5,6]), [8, 5, 6], 'Test 93');
test(subtreeWithAllDeepest([6,0,8,2,7,9,10,null,null,1,4,3,5]), [6, 0, 8, 2, 7, 9, 10, null, null, 1, 4, 3, 5], 'Test 94');
test(subtreeWithAllDeepest([1,2,3,4,5,null,null,null,null,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 'Test 95');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,16,17,18,null,null,null,19,null,null,null,20,null,null,null,null,21,null,null,22,23,null,null,24,null,null,25]), [25], 'Test 96');
test(subtreeWithAllDeepest([5,1,3,null,null,2,4,null,null,null,null,6,7,8,9,null,null,null,null,10,11,null,null,null,12,13]), [3, 2, 4], 'Test 97');
test(subtreeWithAllDeepest([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), [11], 'Test 98');
test(subtreeWithAllDeepest([3,5,1,6,2,0,8,null,null,7,4,null,null,11,12]), [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4, null, null, 11, 12], 'Test 99');
test(subtreeWithAllDeepest([1,2,3,null,4,null,5,null,6,null,7,null,8]), [8], 'Test 100');
test(subtreeWithAllDeepest([0,1,2,3,null,null,4,5,6,7,null,null,null,null,null,8]), [8], 'Test 101');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,null,10,null,11,null,12,null,13,null,14,null,15,null,null,null,16,null,null,null,17,null,null,null,18,null,null,null,19,null,null,null,20,null,null,null,null,21,22,null,null,23,null,null,24,null,null,25]), [19], 'Test 102');
test(subtreeWithAllDeepest([0,1,2,3,null,null,4,5,6,7,null,null,null,null,null,8,9,10,null,null,11,12,null,null,13]), [7, 8, 9, 10, null, null, 11, 12, null, null, 13], 'Test 103');
test(subtreeWithAllDeepest([5,1,4,null,2,null,6,null,3,null,null,7,8,null,null,null,9]), [9], 'Test 104');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,null,null,null,14]), [14], 'Test 105');
test(subtreeWithAllDeepest([6,2,3,null,null,4,5,null,null,null,null,7,null,null,null,null,8,null,9]), [3, 4, 5], 'Test 106');
test(subtreeWithAllDeepest([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [31], 'Test 107');
test(subtreeWithAllDeepest([10,5,15,3,7,null,18,1,null,6,9,14,19,13,17]), [1, 13, 17], 'Test 108');
test(subtreeWithAllDeepest([15,11,20,7,12,17,25,6,8,10,13,null,18,16,null,null,null,9,null,null,null,null,null,null,null,null,14,null,19]), [19], 'Test 109');
test(subtreeWithAllDeepest([0,1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), [0, 1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11, null, 12], 'Test 110');
test(subtreeWithAllDeepest([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,null,null,null,null,null,null,null,null,null,14]), [14], 'Test 111');
test(subtreeWithAllDeepest([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13,null,null,14,15,null,null,16,17,null,null,18,19,null,null,20,21,null,null,22,23,null,null,24,25,null,null,26,27,null,null,28,29,null,null,30,31,null,null,32,33,null,null,34,35,null,null,36,37,null,null,38,39,null,null,40,41,null,null,42,43,null,null,44,45,null,null,46,47,null,null,48,49,null,null,50]), [50], 'Test 112');
test(subtreeWithAllDeepest([2,1,3,null,null,4,null,null,5,null,6,null,7,null,8]), [8], 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

