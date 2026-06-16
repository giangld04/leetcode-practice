// Test: 105. Construct Binary Tree From Preorder And Inorder Traversal
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { buildTree } = require("./solution");

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

console.log("\n105. Construct Binary Tree From Preorder And Inorder Traversal\n");

test(buildTree([1,2,3,4,5], [4,2,5,1,3]), Error: list index out of range, 'Test 1');
test(buildTree([3,9,20,15,7], [9,3,15,20,7]), [3, 9, 20, null, null, 15, 7], 'Test 2');
test(buildTree([1,2,4,5,3,6,7], [4,2,5,1,6,3,7]), [1, 2, 3, 4, 5, 6, 7], 'Test 3');
test(buildTree([-1], [-1]), [-1], 'Test 4');
test(buildTree([1,2,3], [2,1,3]), [1, 2, 3], 'Test 5');
test(buildTree([1,2], [2,1]), [1, 2], 'Test 6');
test(buildTree([8,5,3,1,4,2,6,7,12,10,9,11,15,13,14,16,18,17,19], [1,3,2,4,5,7,6,8,9,10,11,12,13,14,15,16,17,18,19]), [8, 5, 12, 3, 6, 10, 15, 1, 4, 7, null, 9, 11, 13, 16, null, null, 2, null, null, null, null, null, null, null, null, 14, null, 18, null, null, null, null, 17, 19], 'Test 7');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11, null, 12, null, 13, null, 14, null, 15], 'Test 8');
test(buildTree([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), [1, null, 3, null, 5, null, 7, null, 9, null, 11, null, 13, null, 15, null, 17, null, 19, null, 21, null, 23, null, 25, null, 27, null, 29], 'Test 9');
test(buildTree([8,3,1,6,4,7,10,14,13], [1,3,4,6,7,8,10,13,14]), [8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13], 'Test 10');
test(buildTree([20,10,5,3,2,1,7,6,15,12,11,14,18,16,17,25,22,21,23,27,26,28,29], [1,2,3,5,6,7,10,11,12,14,15,16,17,18,20,21,22,23,25,26,27,28,29]), [20, 10, 25, 5, 15, 22, 27, 3, 7, 12, 18, 21, 23, 26, 28, 2, null, 6, null, 11, 14, 16, null, null, null, null, null, null, null, null, 29, 1, null, null, null, null, null, null, null, null, 17], 'Test 11');
test(buildTree([150,75,30,15,25,60,45,55,90,80,120,110,130,200,175,160,180,225,210,230], [15,25,30,45,55,60,75,80,90,110,120,130,150,160,175,180,200,210,225,230]), [150, 75, 200, 30, 90, 175, 225, 15, 60, 80, 120, 160, 180, 210, 230, null, 25, 45, null, null, null, 110, 130, null, null, null, null, null, null, null, null, null, null, null, 55], 'Test 12');
test(buildTree([100,50,25,10,5,15,30,28,35,75,60,55,65,80,78,85,150,125,110,105,115,130,120,135,175,155,160,165,180,170,185], [5,10,15,25,30,28,35,50,55,60,65,75,78,80,85,100,105,110,115,120,125,130,135,150,155,160,165,170,175,180,185]), Error: list index out of range, 'Test 13');
test(buildTree([10,8,7,9,15,12,11,13,14,20,18,17,19,25,22,23,24,27,26,28,29], [7,8,9,10,11,12,13,14,15,17,18,19,20,22,23,24,25,26,27,28,29]), [10, 8, 15, 7, 9, 12, 20, null, null, null, null, 11, 13, 18, 25, null, null, null, 14, 17, 19, 22, 27, null, null, null, null, null, null, null, 23, 26, 28, null, 24, null, null, null, 29], 'Test 14');
test(buildTree([5,3,2,1,4,7,6,8,10,9,11], [1,2,3,4,5,6,7,8,9,10,11]), [5, 3, 7, 2, 4, 6, 8, 1, null, null, null, null, null, null, 10, null, null, 9, 11], 'Test 15');
test(buildTree([10,6,4,3,5,8,7,9,15,12,11,13,14], [3,4,5,6,7,8,9,10,11,12,13,14,15]), [10, 6, 15, 4, 8, 12, null, 3, 5, 7, 9, 11, 13, null, null, null, null, null, null, null, null, null, null, null, 14], 'Test 16');
test(buildTree([15,6,3,2,5,7,18,13,20,17,19], [2,3,5,6,7,15,13,18,17,19,20]), [15, 6, 18, 3, 7, 13, 20, 2, 5, null, null, null, null, 17, null, null, null, null, null, null, 19], 'Test 17');
test(buildTree([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14], [2,4,5,3,6,7,1,10,11,8,12,13,9,14,15]), [1, 3, 9, 2, 7, 8, 15, null, 5, 6, null, 11, 13, 14, null, 4, null, null, null, 10, null, 12], 'Test 18');
test(buildTree([50,20,10,5,1,2,30,25,22,23,35,32,31,33,40,38,39,60,55,52,51,53,58,56,57,65,62,61,63,68,66,67,69], [1,2,5,10,20,22,23,25,30,31,32,33,35,38,39,40,50,51,52,53,55,56,57,58,60,61,62,63,65,66,67,68,69]), [50, 20, 60, 10, 30, 55, 65, 5, null, 25, 35, 52, 58, 62, 68, 1, null, 22, null, 32, 40, 51, 53, 56, null, 61, 63, 66, 69, null, 2, null, 23, 31, 33, 38, null, null, null, null, null, null, 57, null, null, null, null, null, 67, null, null, null, null, null, null, null, null, null, null, null, 39], 'Test 19');
test(buildTree([25,15,10,5,3,2,4,12,11,13,30,28,27,29,35,33,32,34,37,36,38], [2,3,4,5,10,12,11,13,15,30,27,28,29,25,32,33,34,35,36,38,37]), [25, 15, 35, 10, 30, 33, 37, 5, 12, null, 28, 32, 34, 36, null, 3, null, null, 11, 27, 29, null, null, null, null, null, 38, 2, 4, null, 13], 'Test 20');
test(buildTree([10,5,1,3,7,6,8,15,12,11,13,18,17,20,19], [1,3,5,6,7,8,10,11,12,13,15,17,18,19,20]), [10, 5, 15, 1, 7, 12, 18, null, 3, 6, 8, 11, 13, 17, 20, null, null, null, null, null, null, null, null, null, null, null, null, 19], 'Test 21');
test(buildTree([10,6,2,1,3,8,5,7,12,11,13], [1,2,3,6,5,7,8,10,11,12,13]), [10, 6, 12, 2, 8, 11, 13, 1, 3, 5, null, null, null, null, null, null, null, null, null, null, 7], 'Test 22');
test(buildTree([8,5,9,7,3,6,2,4,1,10,11], [9,5,7,8,6,3,2,4,1,10,11]), [8, 5, 3, 9, 7, 6, 2, null, null, null, null, null, null, null, 4, null, 1, null, 10, null, 11], 'Test 23');
test(buildTree([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [1, null, 3, 2, 5, null, null, 4, 7, null, null, 6, 9, null, null, 8, 11, null, null, 10, 13, null, null, 12, 15, null, null, 14], 'Test 24');
test(buildTree([8,5,3,1,4,7,6,9,12,10,11,14,13,15], [1,3,4,5,6,7,8,9,10,11,12,13,14,15]), [8, 5, 9, 3, 7, null, 12, 1, 4, 6, null, 10, 14, null, null, null, null, null, null, null, 11, 13, 15], 'Test 25');
test(buildTree([3,1,0,-1,2,-2,-3,4,-4,5,-5,-6], [-6,-5,-4,-3,-2,-1,0,1,2,3,4,5]), Error: list index out of range, 'Test 26');
test(buildTree([8,5,1,7,10,12,6,9,11,13,4,3,2], [1,3,2,5,9,6,11,10,13,12,7,8,4]), Error: list index out of range, 'Test 27');
test(buildTree([20,10,5,3,7,15,13,18,25,22,27], [3,5,7,10,13,15,18,20,22,25,27]), [20, 10, 25, 5, 15, 22, 27, 3, 7, 13, 18], 'Test 28');
test(buildTree([8,5,3,2,4,7,6,9,12,10,11,14,13,15,17,16,18], [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]), [8, 5, 9, 3, 7, null, 12, 2, 4, 6, null, 10, 14, null, null, null, null, null, null, null, 11, 13, 15, null, null, null, null, null, 17, 16, 18], 'Test 29');
test(buildTree([20,10,5,1,6,15,12,18,30,25,35], [1,5,6,10,12,15,18,20,25,30,35]), [20, 10, 30, 5, 15, 25, 35, 1, 6, 12, 18], 'Test 30');
test(buildTree([8,5,3,1,4,7,6,9,12,10,11,13], [1,3,4,5,6,7,8,9,10,11,12,13]), [8, 5, 9, 3, 7, null, 12, 1, 4, 6, null, 10, 13, null, null, null, null, null, null, null, 11], 'Test 31');
test(buildTree([50,30,20,10,15,40,35,37,45,60,55,52,57,70,65,75], [10,15,20,30,35,37,40,45,50,52,55,57,60,65,70,75]), [50, 30, 60, 20, 40, 55, 70, 10, null, 35, 45, 52, 57, 65, 75, null, 15, null, 37], 'Test 32');
test(buildTree([7,3,1,0,-1,2,5,4,6,9,8,10,11,13,12,15,14,16,18,17,20,19,22,21,23], [-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]), [7, 3, 9, 1, 5, 8, 10, 0, 2, 4, 6, null, null, null, 11, -1, null, null, null, null, null, null, null, null, 13, null, null, 12, 15, null, null, 14, 16, null, null, null, 18, 17, 20, null, null, 19, 22, null, null, 21, 23], 'Test 33');
test(buildTree([34,23,12,9,7,8,15,13,14,26,25,27,36,35,37,45,40,42,41,43,47,46,48], [7,8,9,12,13,14,15,23,25,26,27,34,35,36,37,40,41,42,43,45,46,47,48]), [34, 23, 36, 12, 26, 35, 37, 9, 15, 25, 27, null, null, null, 45, 7, null, 13, null, null, null, null, null, 40, 47, null, 8, null, 14, null, 42, 46, 48, null, null, null, null, 41, 43], 'Test 34');
test(buildTree([10,5,1,3,7,6,9,8,20,15,12,18,25], [1,3,5,6,7,8,9,10,12,15,18,20,25]), [10, 5, 20, 1, 7, 15, 25, null, 3, 6, 9, 12, 18, null, null, null, null, null, null, 8], 'Test 35');
test(buildTree([5,10,15,20,25,30,40,50,55,60,65,75,78,80,85,95,100,105,110,115,120,125,130,135,140,145,150,153,152,154,155,158,159,160,162,163,164,165,168,169,170,171,172,173,175,178,179,180,182,183,185,186,187,188,189,190,192,191,193,194,195,196,197,198,199,200]), Error: Solution.buildTree[] missing 1 required positional argument: 'preorder', 'Test 36');
test(buildTree([20,10,5,3,7,15,12,18,25,22,27], [3,5,7,10,12,15,18,20,22,25,27]), [20, 10, 25, 5, 15, 22, 27, 3, 7, 12, 18], 'Test 37');
test(buildTree([30,15,10,5,7,25,20,18,27,40,35,32,38,50,45,55], [5,7,10,15,18,20,25,27,30,32,35,38,40,45,50,55]), [30, 15, 40, 10, 25, 35, 50, 5, null, 20, 27, 32, 38, 45, 55, null, 7, 18], 'Test 38');
test(buildTree([100,75,60,40,50,90,80,120,110,130], [40,50,60,75,80,90,100,110,120,130]), [100, 75, 120, 60, 90, 110, 130, 40, null, 80, null, null, null, null, null, null, 50], 'Test 39');
test(buildTree([10,5,3,2,1,4,8,7,6,9,15,13,12,14,20,18,16,17,19,25,23,22,24,27,26,28,29], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29]), Error: list index out of range, 'Test 40');
test(buildTree([50,30,20,10,40,70,60,90,80,110], [10,20,30,40,50,60,70,80,90,110]), [50, 30, 70, 20, 40, 60, 90, 10, null, null, null, null, null, 80, 110], 'Test 41');
test(buildTree([20,10,5,3,1,7,15,12,9,14,18,17,25,23,22,24,30,28,27,29,32,31], [1,3,5,7,10,9,12,14,15,20,22,23,24,25,17,18,27,28,29,30,31,32]), [20, 10, 18, 5, 15, 17, 30, 3, 7, 12, null, 25, null, 28, 32, 1, null, null, null, 9, 14, 23, null, 27, 29, 31, null, null, null, null, null, null, null, 22, 24], 'Test 42');
test(buildTree([1,3,5,7,9,11,2,4,6,8,10,12], [7,5,3,9,11,1,8,6,10,2,12,4]), Error: list index out of range, 'Test 43');
test(buildTree([5,3,1,4,8,6,7,10,9], [1,3,4,5,6,7,8,9,10]), [5, 3, 8, 1, 4, 6, 10, null, null, null, null, null, 7, 9], 'Test 44');
test(buildTree([8,5,3,1,4,7,6,9,10,11], [1,3,4,5,6,7,8,9,10,11]), [8, 5, 9, 3, 7, null, 10, 1, 4, 6, null, null, 11], 'Test 45');
test(buildTree([1000,500,250,125,625,375,750,625,875,1500,1250,1125,1375,1750,1625,1875], [125,250,375,500,625,625,750,875,1000,1125,1250,1375,1500,1625,1750,1875]), Error: list index out of range, 'Test 46');
test(buildTree([50,25,10,5,15,30,20,40,75,60,55,65,80,78,85,100,95,105,125,110,115,130,120,135,150,140,145,155,160,158,159,162,165,163,164,170,168,169,172,171,173,180,175,178,179,185,182,183,188,186,187,190,189,192,191,195,193,194,197,196,198,200,199]), Error: Solution.buildTree[] missing 1 required positional argument: 'inorder', 'Test 47');
test(buildTree([100,50,25,10,30,75,60,80,150,125,175], [10,25,30,50,60,75,80,100,125,150,175]), [100, 50, 150, 25, 75, 125, 175, 10, 30, 60, 80], 'Test 48');
test(buildTree([30,15,7,3,9,22,18,20,25,40,35,37,45,50], [3,7,9,15,18,20,22,25,30,35,37,40,45,50]), [30, 15, 40, 7, 22, 35, 45, 3, 9, 18, 25, null, 37, null, 50, null, null, null, null, null, 20], 'Test 49');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11, null, 12, null, 13, null, 14, null, 15, null, 16, null, 17, null, 18, null, 19, null, 20, null, 21, null, 22, null, 23, null, 24, null, 25, null, 26, null, 27, null, 28, null, 29, null, 30], 'Test 50');
test(buildTree([8,5,3,2,4,7,6,9,11,10,12], [2,3,4,5,6,7,8,9,10,11,12]), [8, 5, 9, 3, 7, null, 11, 2, 4, 6, null, 10, 12], 'Test 51');
test(buildTree([10,5,1,2,6,3,4,8,7,9,11,12], [1,2,5,3,4,6,10,7,8,9,11,12]), [10, 5, 8, 1, 6, 7, 9, null, 2, 3, null, null, null, null, 11, null, null, null, 4, null, 12], 'Test 52');
test(buildTree([5,2,1,3,4,8,6,7,9], [1,2,3,4,5,6,7,8,9]), [5, 2, 8, 1, 3, 6, 9, null, null, null, 4, null, 7], 'Test 53');
test(buildTree([21,15,10,8,12,17,16,18,25,23,24,28,27,29,30], [8,10,12,15,16,17,18,21,23,24,25,27,28,29,30]), [21, 15, 25, 10, 17, 23, 28, 8, 12, 16, 18, null, 24, 27, 29, null, null, null, null, null, null, null, null, null, null, null, null, null, 30], 'Test 54');
test(buildTree([7,3,1,5,4,6,10,9,11,14,12,13,15], [1,3,4,5,6,7,9,10,11,12,13,14,15]), [7, 3, 10, 1, 5, 9, 11, null, null, 4, 6, null, null, null, 14, null, null, null, null, 12, 15, null, 13], 'Test 55');
test(buildTree([1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1]), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9], 'Test 56');
test(buildTree([15,5,3,2,1,4,7,6,8,10,9,11,20,18,17,19,25,23,22,24,30,28,27,29,32,31], [1,2,3,4,5,6,7,8,10,9,11,15,17,18,19,20,22,23,24,25,27,28,29,30,31,32]), [15, 5, 20, 3, 7, 18, 25, 2, 4, 6, 8, 17, 19, 23, 30, 1, null, null, null, null, null, null, 10, null, null, null, null, 22, 24, 28, 32, null, null, null, 9, null, null, null, null, 27, 29, 31, null, null, 11], 'Test 57');
test(buildTree([10,5,1,7,6,11,15,12,20,18,25], [1,5,6,7,10,11,12,15,18,20,25]), [10, 5, 11, 1, 7, null, 15, null, null, 6, null, 12, 20, null, null, null, null, 18, 25], 'Test 58');
test(buildTree([50,30,20,10,25,40,35,45,70,60,80], [10,20,25,30,35,40,45,50,60,70,80]), [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45], 'Test 59');
test(buildTree([40,20,10,5,3,8,15,13,18,30,25,28,50,45,42,47,55,52,58], [3,5,8,10,13,15,18,20,25,28,30,40,42,45,47,50,52,55,58]), [40, 20, 50, 10, 30, 45, 55, 5, 15, 25, null, 42, 47, 52, 58, 3, 8, 13, 18, null, 28], 'Test 60');
test(buildTree([8,5,3,1,4,6,7,12,10,9,11,14,13,15], [1,3,4,5,6,7,8,9,10,11,12,13,14,15]), [8, 5, 12, 3, 6, 10, 14, 1, 4, null, 7, 9, 11, 13, 15], 'Test 61');
test(buildTree([60,30,15,5,25,45,40,50,90,80,100,95,110], [5,15,25,30,40,45,50,60,80,90,95,100,110]), [60, 30, 90, 15, 45, 80, 100, 5, 25, 40, 50, null, null, 95, 110], 'Test 62');
test(buildTree([25,15,10,5,3,7,12,20,18,17,19,30,28,27,29,32,31], [3,5,7,10,12,15,17,18,19,20,25,27,28,29,30,31,32]), [25, 15, 30, 10, 20, 28, 32, 5, 12, 18, null, 27, 29, 31, null, 3, 7, null, null, 17, 19], 'Test 63');
test(buildTree([25,15,10,5,12,20,17,30,27,32,35], [5,10,12,15,17,20,25,27,30,32,35]), [25, 15, 30, 10, 20, 27, 32, 5, 12, 17, null, null, null, null, 35], 'Test 64');
test(buildTree([50,20,10,5,15,40,25,30,35,70,60,55,65,80,75,85], [5,10,15,20,25,30,35,40,50,55,60,65,70,75,80,85]), [50, 20, 70, 10, 40, 60, 80, 5, 15, 25, null, 55, 65, 75, 85, null, null, null, null, null, 30, null, null, null, null, null, null, null, null, null, 35], 'Test 65');
test(buildTree([5,3,2,1,4,8,7,9,6,10], [1,2,3,4,5,6,7,8,9,10]), Error: list index out of range, 'Test 66');
test(buildTree([7,3,1,2,5,4,6,15,9,8,10,20,18,19,25], [1,2,3,4,5,6,7,8,9,10,15,18,19,20,25]), [7, 3, 15, 1, 5, 9, 20, null, 2, 4, 6, 8, 10, 18, 25, null, null, null, null, null, null, null, null, null, null, null, 19], 'Test 67');
test(buildTree([15,10,5,3,8,12,9,11,20,18,17,25,24,22,23,27], [3,5,8,9,10,11,12,15,17,18,20,22,23,24,25,27]), Error: list index out of range, 'Test 68');
test(buildTree([50,25,10,5,3,7,20,15,30,27,35,40,45,55], [3,5,7,10,15,20,25,27,30,35,40,45,50,55]), [50, 25, 55, 10, 30, null, null, 5, 20, 27, 35, 3, 7, 15, null, null, null, null, 40, null, null, null, null, null, null, null, 45], 'Test 69');
test(buildTree([10,5,1,2,3,8,6,7,15,13,12,14,20,18,17,19,25,23,22,24,28,27,26,29], [1,2,3,5,6,7,8,10,12,13,14,15,17,18,19,20,22,23,24,25,26,27,28,29]), [10, 5, 15, 1, 8, 13, 20, null, 2, 6, null, 12, 14, 18, 25, null, 3, null, 7, null, null, null, null, 17, 19, 23, 28, null, null, null, null, null, null, null, null, 22, 24, 27, 29, null, null, null, null, 26], 'Test 70');
test(buildTree([25,15,10,4,12,6,8,20,16,22,28,27,30,32], [4,10,6,8,12,15,16,20,22,25,27,28,30,32]), [25, 15, 28, 10, 20, 27, 30, 4, 12, 16, 22, null, null, null, 32, null, null, 6, null, null, null, null, null, null, null, null, 8], 'Test 71');
test(buildTree([10,5,2,1,3,8,6,7,15,12,11,13,20,18,19,25], [1,2,3,5,6,7,8,10,11,12,13,15,18,19,20,25]), [10, 5, 15, 2, 8, 12, 20, 1, 3, 6, null, 11, 13, 18, 25, null, null, null, null, null, 7, null, null, null, null, null, 19], 'Test 72');
test(buildTree([100,50,25,10,30,75,60,80,150,125,175,110,130,160,180], [10,25,30,50,60,75,80,100,110,125,130,150,160,175,180]), Error: list index out of range, 'Test 73');
test(buildTree([1,2,4,8,16,17,3,5,6,12,13,9,10,14,15,7,11,18,19], [16,8,17,4,2,12,5,13,6,10,9,14,15,3,18,11,19,1]), Error: 7, 'Test 74');
test(buildTree([20,15,10,8,12,18,16,19,25,23,24,27,22,28], [8,10,12,15,16,18,19,20,22,23,24,25,27,28]), Error: list index out of range, 'Test 75');

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
