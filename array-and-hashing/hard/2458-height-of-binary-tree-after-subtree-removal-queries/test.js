// Test: 2458. Height Of Binary Tree After Subtree Removal Queries
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { treeQueries } = require("./solution");

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

console.log("\n2458. Height Of Binary Tree After Subtree Removal Queries\n");

test(treeQueries([5,8,9,2,1,3,7,4,6], [3,2,4,8]), [3, 2, 3, 2], 'Test 1');
test(treeQueries([1,3,4,2,null,6,5,null,null,null,null,null,7], [4]), [2], 'Test 2');
test(treeQueries([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], [2, 4, 6, 8, 10, 12, 14]), [0, 2, 4, 6, 8, 10, 12], 'Test 3');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], [16, 21, 26, 31, 1]), [4, 4, 4, 4, 0], 'Test 4');
test(treeQueries([10,5,15,3,7,null,18,null,9,6,11,14,null,null,null,null,19], [7, 3, 11, 14]), Error: list assignment index out of range, 'Test 5');
test(treeQueries([1,2,null,3,4,null,5,null,6,null,7,null,8,null,9,null,10], [4, 5, 8, 10]), [5, 5, 5, 5], 'Test 6');
test(treeQueries([1,2,3,4,5,6,7,8,9,null,10,null,null,null,11,null,12,null,null,13,null,null,null,14,null,15], [13, 8, 2, 7, 15]), [5, 5, 3, 5, 5], 'Test 7');
test(treeQueries([7,3,9,2,4,8,10,null,null,5,6,null,9,null,null,11,null,12], [4, 9, 7, 10, 11, 3, 8]), [3, 4, 0, 4, 4, 3, 4], 'Test 8');
test(treeQueries([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], [2, 6, 12, 15]), [0, 4, 10, 13], 'Test 9');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], [35, 20, 10, 5, 1, 30, 40, 50]), [5, 5, 5, 5, 0, 5, 5, 5], 'Test 10');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [16, 17, 18, 19, 20]), [4, 4, 4, 4, 4], 'Test 11');
test(treeQueries([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [0, 4, 5, 4, 5, 4, 5, 4, 5, 4], 'Test 12');
test(treeQueries([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9], [4, 5, 6, 7, 8, 9]), [4, 4, 4, 4, 4, 4], 'Test 13');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], [30, 20, 10, 35, 40, 25, 50]), [5, 5, 5, 5, 5, 5, 5], 'Test 14');
test(treeQueries([20,10,30,5,15,25,35,1,7,13,17,23,27,33,37], [5, 10, 15, 20, 25, 30, 35]), Error: list assignment index out of range, 'Test 15');
test(treeQueries([1,null,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13,null,null,14,null,null,15,null,null,16,null,null,17,null,null,18,null,null,19,null,null,20], [2, 5, 10, 18, 15, 16, 17]), Error: list index out of range, 'Test 16');
test(treeQueries([10,5,15,3,7,13,18,1,4,6,8,12,14,17,19], [3, 7, 13, 18, 10]), Error: list assignment index out of range, 'Test 17');
test(treeQueries([7,3,15,1,5,10,20,null,4,null,6,null,null,12,18,null,11,13,17,19], [1, 4, 6, 10, 12, 15, 18, 20]), Error: list assignment index out of range, 'Test 18');
test(treeQueries([5,1,4,null,2,null,3,null,null,6,7], [1, 4, 7, 6]), [3, 2, 3, 3], 'Test 19');
test(treeQueries([20,15,25,10,17,22,30,5,13,16,null,21,23,27,32,null,8,null,11,null,19,24,null,26,28,null,31,null,33], [25, 17, 22, 15, 10]), Error: list assignment index out of range, 'Test 20');
test(treeQueries(queries), Error: Solution.treeQueries[] missing 2 required positional arguments: 'root' and 'queries', 'Test 21');
test(treeQueries([10,5,15,3,7,12,18,1,4,6,8,11,13,17,19], [3, 8, 13, 18, 17]), Error: list assignment index out of range, 'Test 22');
test(treeQueries([10,5,15,3,7,13,18,1,4,6,8,12,14,17,19], [3, 7, 15, 10]), Error: list assignment index out of range, 'Test 23');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], [10, 20, 30, 40]), [5, 5, 5, 5], 'Test 24');
test(treeQueries([5,2,6,null,3,4,7,null,null,8,null,9,null,null,null,null,10], [3, 4, 6, 9, 5]), Error: list assignment index out of range, 'Test 25');
test(treeQueries([25,15,35,10,20,30,40,5,12,18,22,28,32,38,45,1,6,9,11,13,17,19,21,23,27,29,31,33,37,39,41,43,47,49], [1, 5, 9, 11, 13, 17, 19, 21, 23, 27, 29, 31, 33, 37, 39, 41, 43, 47, 49, 10, 12, 18, 22, 28, 32, 38, 45]), Error: list assignment index out of range, 'Test 26');
test(treeQueries([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11,12,13,null,null,null,null,null,14,15,16,null,17,null,null,null,null,null,null,18,null,null,null,null,null,19], [10, 5, 18, 4, 15, 6, 16]), [6, 4, 5, 6, 6, 6, 6], 'Test 27');
test(treeQueries([1,2,3,null,null,4,5,null,null,null,null,6,7,null,null,8,9,null,null,null,null,10,11], [3, 4, 10, 11, 1]), Error: list index out of range, 'Test 28');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [10, 5, 12, 1, 15]), [3, 3, 3, 0, 3], 'Test 29');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [8, 12, 5, 1]), [3, 3, 3, 0], 'Test 30');
test(treeQueries([10,5,15,3,7,12,18,1,4,6,8,11,13,17,19], [3, 7, 12, 15]), Error: list assignment index out of range, 'Test 31');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [5, 12, 18, 20, 10]), [4, 4, 4, 4, 4], 'Test 32');
test(treeQueries([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [6, 4, 8, 10]), [4, 4, 4, 4], 'Test 33');
test(treeQueries([6,2,8,0,4,7,9,null,null,3,5], [0, 5, 9, 2, 8]), [3, 3, 3, 2, 3], 'Test 34');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [16, 9, 12, 20]), [4, 4, 4, 4], 'Test 35');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 36');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [8, 5, 12, 3]), [3, 3, 3, 3], 'Test 37');
test(treeQueries([10,5,15,3,7,null,18,1,null,6,9,16,19], [15, 3, 7, 10]), Error: list assignment index out of range, 'Test 38');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [4, 10, 14, 7, 3]), [3, 3, 3, 3, 3], 'Test 39');
test(treeQueries([8,3,10,1,5,9,12,null,2,null,4,null,7,null,11,null,null,13,null,14], [2, 4, 7, 13]), Error: list assignment index out of range, 'Test 40');
test(treeQueries([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [2, 3, 4, 5, 6, 7, 8, 9, 10]), [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 41');
test(treeQueries([30,25,35,20,26,32,40,15,22,27,31,33,39,41,null,null,18,21,null,null,29,null,null,null,null,null,null,36,null,34,37,42], [40, 22, 18, 33, 26, 30]), Error: list assignment index out of range, 'Test 42');
test(treeQueries([5,3,6,2,4,null,null,1,null,null,null,7], [1, 7, 3, 6]), [2, 3, 1, 4], 'Test 43');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), [3, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 44');
test(treeQueries([7,3,15,null,5,9,20,4,6,8,11,18,22,null,null,12,13,16,19,21,23], [4, 6, 8, 11, 12, 13, 16, 19, 21, 23, 18, 22, 9, 15, 20, 3, 5, 7]), Error: list assignment index out of range, 'Test 45');
test(treeQueries([1,2,3,null,4,null,null,5,null,6,null,7,null,8,null,9,null,10], [4, 6, 10, 2, 8]), [1, 3, 7, 1, 5], 'Test 46');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15, 8, 12, 4, 1]), [3, 3, 3, 3, 0], 'Test 47');
test(treeQueries([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [4, 7, 10]), [2, 5, 8], 'Test 48');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4]), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 49');
test(treeQueries([50,25,75,12,37,62,87,6,18,30,44,56,69,81,93,3,9,15,21,27,33,39,45,51,59,65,71,77,83,89,95,5,10,13,16,19,23,26,29,32,35,38,41,43,47,49,53,57,61,63,67,70,73,75,79,82,85,88,90,92,94,96,98], [3, 9, 15, 21, 27, 33, 39, 45, 51, 59, 65, 71, 77, 83, 89, 95, 6, 10, 13, 16, 19, 23, 26, 29, 32, 35, 38, 41, 43, 47, 49, 53, 57, 61, 63, 67, 70, 73, 75, 79, 82, 85, 88, 90, 92, 94, 96, 98, 12, 18, 30, 44, 56, 69, 81, 93, 50, 25, 75, 62, 87]), Error: list assignment index out of range, 'Test 50');
test(treeQueries([6,3,9,2,5,8,10,1,4,7,11,12], [6, 9, 3, 10, 2]), [0, 3, 3, 3, 3], 'Test 51');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 52');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [8, 9, 10, 11, 12, 13, 14, 15]), [3, 3, 3, 3, 3, 3, 3, 3], 'Test 53');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 54');
test(treeQueries([50,25,75,12,37,62,87,6,18,31,43,55,68,81,93,3,9,15,21,26,34,40,48,52,60,66,72,78,84,90,96], [12, 25, 37, 43, 62, 68, 81, 87, 93]), Error: list assignment index out of range, 'Test 55');
test(treeQueries(root), Error: Solution.treeQueries[] missing 2 required positional arguments: 'root' and 'queries', 'Test 56');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [16, 20, 25, 10, 5, 15]), [4, 4, 4, 4, 4, 4], 'Test 57');
test(treeQueries([7,3,15,1,5,9,21,null,2,null,null,8,11,18,23,null,null,null,null,null,null,null], [2, 5, 11, 18]), Error: list assignment index out of range, 'Test 58');
test(treeQueries([10,5,15,3,7,12,18,1,null,6,8,11,13,null,null,16,19], [3, 7, 12, 18, 10]), Error: list assignment index out of range, 'Test 59');
test(treeQueries([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [5, 7, 9, 10]), [3, 5, 7, 8], 'Test 60');
test(treeQueries([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [2, 3, 4, 5, 6, 7, 8, 9, 10]), [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 61');
test(treeQueries([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [15, 20, 25, 30]), [4, 4, 4, 4], 'Test 62');
test(treeQueries([10,5,15,3,7,12,18,1,null,6,8,11,13,null,null,null,2,4,null,null,null,null,null,null,null,null,19,20], [3, 7, 12, 15, 18]), Error: list assignment index out of range, 'Test 63');
test(treeQueries([7,1,12,null,2,9,13,null,null,8,11,10,14], [9, 11, 7, 2]), Error: list assignment index out of range, 'Test 64');
test(treeQueries([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9], [2, 5, 8, 9]), [4, 4, 4, 4], 'Test 65');
test(treeQueries([10,5,15,3,7,12,18,1,2,6,8,null,13,null,14,16,19], [1, 7, 12, 16]), Error: list assignment index out of range, 'Test 66');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

