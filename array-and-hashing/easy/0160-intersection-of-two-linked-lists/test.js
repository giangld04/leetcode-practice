// Test: 160. Intersection Of Two Linked Lists
// 129 test cases from LeetCodeDataset
// Run: node test.js

const { getIntersectionNode } = require("./solution");

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

console.log("\n160. Intersection Of Two Linked Lists\n");

test(getIntersectionNode([2,6,4], [1,5], 3, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 1');
test(getIntersectionNode([1,9,1,2,4], [3,2,4], 3, 1), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 2');
test(getIntersectionNode([4,1,8,4,5], [5,6,1,8,4,5], 2, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 3');
test(getIntersectionNode([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,15,17,19], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 4');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [16,17,18,19,20], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 5');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1], 5, 9), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 6');
test(getIntersectionNode([1], [2,1], 0, 1), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 7');
test(getIntersectionNode([10,11,12,13,14,15,16,17,18,19,20], [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 4, 9), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 8');
test(getIntersectionNode([7,8,9,10,11,12,13,14], [1,2,3,4,5,6,14], 3, 6), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 9');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,6,7,8,9,10], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 10');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [21,22,15,16,17,18,19,20], 14, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 11');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [11,12,13,4,5,6,7,8,9,10], 3, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 12');
test(getIntersectionNode([5,4,3,2,1], [7,6,5,4,3,2,1], 4, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 13');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,5,6,7,8,9,10], 4, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 14');
test(getIntersectionNode([100,200,300,400,500], [1,2,3,400,500], 3, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 15');
test(getIntersectionNode([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80], [79,78,77,76,75,74,73,72,71,80], 19, 9), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 16');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,15], 14, 15), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 17');
test(getIntersectionNode([10,20,30,40,50,60,70,80,90,100], [55,65,75,85,95,100], 9, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 18');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1,8,9,10], 9, 10), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 19');
test(getIntersectionNode([10,20,30,40,50,60,70], [15,25,35,40,50,60,70], 3, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 20');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,8,9,10], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 21');
test(getIntersectionNode([1000,2000,3000,4000,5000], [5001,5002,5003,5004,5005,4000,5000], 3, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 22');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [6,7,8,9,10,11,12,13,14,15], 5, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 23');
test(getIntersectionNode([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], [2,4,6,8,10,41,43,45,47,49], 10, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 24');
test(getIntersectionNode([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 19, 19), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 25');
test(getIntersectionNode([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], [105,110,115,120,125,10], 1, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 26');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [21,22,23,24,25,10,11,12,13,14,15,16,17,18,19,20], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 27');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15], 14, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 28');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10], 4, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 29');
test(getIntersectionNode([10,20,30,40,50], [50,40,30,20,10,30,40,50], 4, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 30');
test(getIntersectionNode([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [31,32,33,34,35,36,37,38,39,40,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 4, 10), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 31');
test(getIntersectionNode([10,20,30,40,50,60,70,80,90,100], [101,102,103,40,50,60,70,80,90,100], 3, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 32');
test(getIntersectionNode([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], [2,4,6,8,10,12,14,16,18,20,15,17,19,21,23,25,27,29,31,33], 13, 10), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 33');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [31,32,33,34,35,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 29, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 34');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [5,5,5,5,5,5,5,5,5,5,10], 4, 10), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 35');
test(getIntersectionNode([1,3,5,7,9], [2,4,6,8,10,9], 4, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 36');
test(getIntersectionNode([100,101,102,103,104,105], [200,201,202,203,103,104,105], 4, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 37');
test(getIntersectionNode([5,10,15,20,25,30,35], [8,13,18,25,30,35], 4, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 38');
test(getIntersectionNode([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80], [85,90,95,100,25,30,35,40,45,50,55,60,65,70,75,80], 4, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 39');
test(getIntersectionNode([5,10,15,20,25,30,35,40,45,50], [1,2,3,4,5,10,15,20,25,30,35,40,45,50], 4, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 40');
test(getIntersectionNode([1,3,5,7,9,11,13,15,17], [2,4,6,8,9,11,13,15,17], 4, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 41');
test(getIntersectionNode([10,20,30,40,50,60,70], [15,25,35,45,50,60,70], 4, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 42');
test(getIntersectionNode([5,10,15,20,25,30,35,40,45,50,55,60], [65,70,75,80,5,10,15,20,25,30,35,40,45,50,55,60], 0, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 43');
test(getIntersectionNode([100,200,300], [400,500,600,700,800,300], 2, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 44');
test(getIntersectionNode([5,0,1,8,4,5], [2,0,1,8,4,5], 2, 1), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 45');
test(getIntersectionNode([1], [1], 0, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 46');
test(getIntersectionNode([100,200,300,400,500], [501,502,503,504,505,400,500], 3, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 47');
test(getIntersectionNode([1], [2,3,4,5,1], 0, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 48');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,10], 9, 9), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 49');
test(getIntersectionNode([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], [1,2,3,4,5,6,7,8,9,4000,5000,6000,7000,8000,9000,10000], 3, 9), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 50');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9], [10,11,12,13,14,15,16,7,8,9], 7, 7), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 51');
test(getIntersectionNode([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 52');
test(getIntersectionNode([10,20,30,40,50,60,70,80,90,100], [5,15,25,35,45,50,60,70,80,90,100], 4, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 53');
test(getIntersectionNode([99,98,97,96,95,94,93,92,91,90], [89,88,87,86,85,90,91,92,93,94,95,96,97,98,99], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 54');
test(getIntersectionNode([7,8,9,10,11,12,13,14], [1,2,3,4,10,11,12,13,14], 3, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 55');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [16,17,18,19,20,10,11,12,13,14,15], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 56');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,10], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 57');
test(getIntersectionNode([1,2,3], [4,5,6,3], 2, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 58');
test(getIntersectionNode([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,19], 9, 9), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 59');
test(getIntersectionNode([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20], 10, 10), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 60');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [100,200,300,400,11,12,13,14,15,16,17,18,19,20], 9, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 61');
test(getIntersectionNode([10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,4,3,2,1], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 62');
test(getIntersectionNode([10,20,30,40,50], [60,70,80,30,40,50], 3, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 63');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], [51,52,53,54,55,56,57,58,59,60,41,42,43,44,45,46,47,48,49,50], 39, 10), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 64');
test(getIntersectionNode([7,5,6,2,3,8,4,5], [9,1,4,2,3,8,4,5], 5, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 65');
test(getIntersectionNode([7,8,9,10,11,12,13], [14,15,9,10,11,12,13], 3, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 66');
test(getIntersectionNode([5,10,15,20,25,30,35,40,45,50], [55,60,65,70,75,20,25,30,35,40,45,50], 3, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 67');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [16,17,18,19,20,15], 14, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 68');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], [101,102,103,104,105,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], 49, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 69');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [16,17,18,19,20,11,12,13,14,15], 10, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 70');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 20, 20), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 71');
test(getIntersectionNode([1,2,3,4,5], [6,7,3,4,5], 2, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 72');
test(getIntersectionNode([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [21,22,23,24,25,26,27,28,29,30,8,9,10,11,12,13,14,15,16,17,18,19,20], 7, 10), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 73');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,20,10], 9, 10), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 74');
test(getIntersectionNode([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], [2,4,6,8,10,21,23,25,27,29], 10, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 75');
test(getIntersectionNode([100,200,300,400,500,600,700,800,900,1000], [105,205,305,405,500,600,700,800,900,1000], 4, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 76');
test(getIntersectionNode([10,20,30,40,50,60,70,80,90,100], [101,102,103,104,105,100], 9, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 77');
test(getIntersectionNode([7,14,21,28,35,42,49,56,63,70,77,84,91,98], [5,10,15,20,25,30,35,42,49,56,63,70,77,84,91,98], 5, 6), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 78');
test(getIntersectionNode([10,20,30,40,50,60,70,80,90,100], [101,102,103,104,105,50,60,70,80,90,100], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 79');
test(getIntersectionNode([7,8,9,1,2,3,4,5,6], [10,11,12,7,8,9,1,2,3,4,5,6], 3, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 80');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [16,17,18,19,20,21,22,23,24,25,15], 14, 10), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 81');
test(getIntersectionNode([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,9,11,13,15,17,19], 4, 9), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 82');
test(getIntersectionNode([5,6,7,8,9,10,11,12,13,14,15], [16,17,18,19,20,5,6,7,8,9,10,11,12,13,14,15], 2, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 83');
test(getIntersectionNode([100,200,300,400,500], [1,2,3,4,5,6,7,8,9,100], 4, 9), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 84');
test(getIntersectionNode([99,98,97,96,95,94], [93,92,91,90,89,88,87,94], 5, 6), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 85');
test(getIntersectionNode([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20,15,17,19], 9, 10), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 86');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [16,17,18,19,20,10,11,12,13,14,15], 10, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 87');
test(getIntersectionNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [16,17,18,19,20,10], 10, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 88');
test(getIntersectionNode([1,2,3,4,5], [6,7,8,9,10,4,5], 4, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 89');
test(getIntersectionNode([1,2,3,4,5,6], [3,4,5,6], 2, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 90');
test(getIntersectionNode([1,2,3,4,5], [6,7,8,9,5], 4, 4), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 91');
test(getIntersectionNode([1,2,3], [4,5,1,2,3]), null, 'Test 92');
test(getIntersectionNode([1,2,3], [4,5,1,2,3], 3, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 93');
test(getIntersectionNode([1,2,3], [4,5,6], 3, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 94');
test(getIntersectionNode([1,2,3,4,5], [6,7,8,4,5], 4, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 95');
test(getIntersectionNode([3,6,9,12], [15,18,21,3]), null, 'Test 96');
test(getIntersectionNode([3,6,9,12,15], [2,4,6,8,10,12,15], 4, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 97');
test(getIntersectionNode([1], [1], 1, 1), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 98');
test(getIntersectionNode([2,6,4], [1,5]), null, 'Test 99');
test(getIntersectionNode([1,2,3,4,5], [6,7,8,9,10], 5, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 100');
test(getIntersectionNode([], [], 0, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 101');
test(getIntersectionNode([1,3,5,7,9], [2,4,6,8,10], 0, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 102');
test(getIntersectionNode([7,7,7,7], [7,7,7,7], 0, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 103');
test(getIntersectionNode([1,2], [3,4,5,1,2], 0, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 104');
test(getIntersectionNode([0,9,1,2,4], [3,2,4], 2, 1), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 105');
test(getIntersectionNode([1,2,3,4,5], [6,7,8,9,10,5], 4, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 106');
test(getIntersectionNode([10,20,30,40,50], [60,70,80,40,50], 4, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 107');
test(getIntersectionNode([7,8,9,10], [5,6,7,8,9,10], 0, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 108');
test(getIntersectionNode([1,2,3], [4,5,6,1,2,3], 2, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 109');
test(getIntersectionNode([1,2,3,4,5], [6,7,8,9,10], 0, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 110');
test(getIntersectionNode([1,2,3], [4,5,1,2,3], 2, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 111');
test(getIntersectionNode([1,2,3], [4,5,6,7,2,3], 2, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 112');
test(getIntersectionNode([1,9,1,2,4], [3,2,4]), null, 'Test 113');
test(getIntersectionNode([4,1,8,4,5], [5,6,1,8,4,5]), null, 'Test 114');
test(getIntersectionNode([10,20,30], [40,50,60,30], 2, 3), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 115');
test(getIntersectionNode([1], [2], 0, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 116');
test(getIntersectionNode([3,1,5,9], [4,8,5,9], 2, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 117');
test(getIntersectionNode([1,2,3,4,5], [1,2,3,4,5]), null, 'Test 118');
test(getIntersectionNode([1], [1]), null, 'Test 119');
test(getIntersectionNode([1,3,5,7,9], [2,4,6,8,10,5], 4, 5), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 120');
test(getIntersectionNode([1,2,3], [6,3,4], 2, 1), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 121');
test(getIntersectionNode([1,2], [3,4], 0, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 122');
test(getIntersectionNode([1,2,3,4,5], [5,4,3,2,1], 0, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 123');
test(getIntersectionNode([7,8,9,10], [5,6,7,8,9,10], 3, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 124');
test(getIntersectionNode([1,2,3,4,5], [6,7,8,9,10]), null, 'Test 125');
test(getIntersectionNode([1,2,3], [4,5,6], 2, 2), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 126');
test(getIntersectionNode([10,20,30], [10,20,30], 0, 0), Error: Solution.getIntersectionNode[] got an unexpected keyword argument 'skipA', 'Test 127');
test(getIntersectionNode([1,3,5,7,9], [2,4,6,8,10]), null, 'Test 128');
test(getIntersectionNode([1,2,3,4,5], [6,7,8,9,1]), null, 'Test 129');

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
