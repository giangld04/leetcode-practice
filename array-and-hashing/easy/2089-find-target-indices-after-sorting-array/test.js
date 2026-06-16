// Test: 2089. Find Target Indices After Sorting Array
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { targetIndices } = require("./solution");

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

console.log("\n2089. Find Target Indices After Sorting Array\n");

test(targetIndices([100,99,98,97,96], 98), [2], 'Test 1');
test(targetIndices([10,20,30,40,50], 50), [4], 'Test 2');
test(targetIndices([7,7,7,7,7], 8), [], 'Test 3');
test(targetIndices([10,20,30,40,50], 25), [], 'Test 4');
test(targetIndices([1,3,5,7,9], 0), [], 'Test 5');
test(targetIndices([50,40,30,20,10], 15), [], 'Test 6');
test(targetIndices([100,100,100], 100), [0, 1, 2], 'Test 7');
test(targetIndices([1,2,5,2,3], 3), [3], 'Test 8');
test(targetIndices([2,4,6,8,10], 2), [0], 'Test 9');
test(targetIndices([5,5,5,5,5], 5), [0, 1, 2, 3, 4], 'Test 10');
test(targetIndices([1,1,1,1,1], 1), [0, 1, 2, 3, 4], 'Test 11');
test(targetIndices([5,4,3,2,1], 3), [2], 'Test 12');
test(targetIndices([1,3,5,7,9], 2), [], 'Test 13');
test(targetIndices([1,2,2,2,3,4], 2), [1, 2, 3], 'Test 14');
test(targetIndices([1,2,5,2,3], 2), [1, 2], 'Test 15');
test(targetIndices([50,50,50,50,50], 50), [0, 1, 2, 3, 4], 'Test 16');
test(targetIndices([5,5,5,5,5], 6), [], 'Test 17');
test(targetIndices([1,3,5,7,9], 10), [], 'Test 18');
test(targetIndices([100,1,100,1,100], 1), [0, 1], 'Test 19');
test(targetIndices([1,2,5,2,3], 5), [4], 'Test 20');
test(targetIndices([1,1,1,1,1], 2), [], 'Test 21');
test(targetIndices([1,3,5,7,9], 4), [], 'Test 22');
test(targetIndices([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 4), [6, 7], 'Test 23');
test(targetIndices([5, 4, 3, 2, 1], 3), [2], 'Test 24');
test(targetIndices([90,80,70,60,50,40,30,20,10], 45), [], 'Test 25');
test(targetIndices([10,20,30,40,50,60,70,80,90,100], 50), [4], 'Test 26');
test(targetIndices([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 95), [5], 'Test 27');
test(targetIndices([5,5,5,5,5,5,5,5,5,5], 5), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 28');
test(targetIndices([9, 7, 5, 3, 1, 2, 4, 6, 8, 10], 7), [6], 'Test 29');
test(targetIndices([1,10,2,9,3,8,4,7,5,6], 5), [4], 'Test 30');
test(targetIndices([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45], 27), [8], 'Test 31');
test(targetIndices([7,6,5,4,3,2,1], 4), [3], 'Test 32');
test(targetIndices([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 5), [4], 'Test 33');
test(targetIndices([5,10,15,20,25,30,35,40,45,50,55,60], 35), [6], 'Test 34');
test(targetIndices([100,100,99,99,98,98,97,97], 99), [4, 5], 'Test 35');
test(targetIndices([45,44,43,42,41,40,39,38,37,36,35,34,33,32,31], 37), [6], 'Test 36');
test(targetIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), [0], 'Test 37');
test(targetIndices([2,4,6,8,10,12,14,16,18,20], 8), [3], 'Test 38');
test(targetIndices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), [], 'Test 39');
test(targetIndices([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), [4], 'Test 40');
test(targetIndices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 20), [], 'Test 41');
test(targetIndices([5,3,8,6,2,7,4,1], 4), [3], 'Test 42');
test(targetIndices([42,24,36,18,54,30,48,27,60,39], 30), [3], 'Test 43');
test(targetIndices([5, 3, 8, 6, 2, 7, 4, 1], 5), [4], 'Test 44');
test(targetIndices([100, 50, 30, 70, 20], 30), [1], 'Test 45');
test(targetIndices([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 50), [4], 'Test 46');
test(targetIndices([8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 8), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 47');
test(targetIndices([42, 23, 37, 23, 42, 37], 37), [2, 3], 'Test 48');
test(targetIndices([1,1,2,2,2,3,3,4,4,4,4,5,5,5,6,6,6,6,7,7,8,8,9,9,10,10], 4), [7, 8, 9, 10], 'Test 49');
test(targetIndices([20,19,18,17,16,15,14,13,12,11,10,9,8,7], 15), [8], 'Test 50');
test(targetIndices([100,99,98,97,96,95], 98), [3], 'Test 51');
test(targetIndices([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 55), [5], 'Test 52');
test(targetIndices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15), [7], 'Test 53');
test(targetIndices([10,10,10,10,10,10,10,10,10,10], 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 54');
test(targetIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), [9], 'Test 55');
test(targetIndices([2, 2, 2, 2, 2, 1, 1, 1, 1, 1], 2), [5, 6, 7, 8, 9], 'Test 56');
test(targetIndices([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 55), [], 'Test 57');
test(targetIndices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1), [0], 'Test 58');
test(targetIndices([7,14,21,28,35,42,49,56,63,70], 35), [4], 'Test 59');
test(targetIndices([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5], 3), [6, 7, 8], 'Test 60');
test(targetIndices([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 20), [9], 'Test 61');
test(targetIndices([100, 99, 98, 97, 96], 97), [1], 'Test 62');
test(targetIndices([8,6,6,6,8,6,8,6,8,6,6,6,6,6], 6), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 63');
test(targetIndices([42,27,89,10,56,23,50,78,34,67], 50), [5], 'Test 64');
test(targetIndices([7,7,7,7,7,7,7,7,7,7], 8), [], 'Test 65');
test(targetIndices([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 10), [18, 19], 'Test 66');
test(targetIndices([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 40), [3], 'Test 67');
test(targetIndices([1,2,3,4,5,6,7,8,9,10], 11), [], 'Test 68');
test(targetIndices([8, 6, 7, 5, 3, 0, 9], 7), [4], 'Test 69');
test(targetIndices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 70');
test(targetIndices([1, 3, 2, 4, 5, 6, 7, 8, 9, 10], 5), [4], 'Test 71');
test(targetIndices([1,2,3,4,5,6,7,8,9,10], 10), [9], 'Test 72');
test(targetIndices([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14], 13), [12], 'Test 73');
test(targetIndices([50,20,30,40,10], 30), [2], 'Test 74');
test(targetIndices([100, 1, 50, 20, 30, 60, 40], 30), [2], 'Test 75');
test(targetIndices([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 6), [5], 'Test 76');
test(targetIndices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), [14], 'Test 77');
test(targetIndices([1, 3, 2, 5, 4, 7, 6, 9, 8, 10], 10), [9], 'Test 78');
test(targetIndices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15), [14], 'Test 79');
test(targetIndices([50, 50, 50, 50, 50, 50], 50), [0, 1, 2, 3, 4, 5], 'Test 80');
test(targetIndices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8), [7], 'Test 81');
test(targetIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11), [], 'Test 82');
test(targetIndices([10, 20, 30, 40, 50], 20), [1], 'Test 83');
test(targetIndices([10,20,10,20,10,20,10,20,10,20], 20), [5, 6, 7, 8, 9], 'Test 84');
test(targetIndices([10,11,12,13,14,15,16,17,18,19,20], 15), [5], 'Test 85');
test(targetIndices([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 17), [], 'Test 86');
test(targetIndices([100,99,98,97,96,95,94,93,92,91], 95), [4], 'Test 87');
test(targetIndices([50,20,30,10,40], 30), [2], 'Test 88');
test(targetIndices([50,50,50,50,50,50,50,50,50,50,50,50,50,50,50], 50), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 89');
test(targetIndices([5,5,5,5,5,5,5,5,5,5], 6), [], 'Test 90');
test(targetIndices([3,1,2,5,4,2,3,3,5,1], 3), [4, 5, 6], 'Test 91');
test(targetIndices([50,50,50,50,50,50,50,50,50,50], 50), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 92');
test(targetIndices([1], 2), [], 'Test 93');
test(targetIndices([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 6), [], 'Test 94');
test(targetIndices([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 18), [8], 'Test 95');
test(targetIndices([10,9,8,7,6,5,4,3,2,1], 5), [4], 'Test 96');
test(targetIndices([100, 1, 100, 1, 100, 1, 100], 1), [0, 1, 2], 'Test 97');
test(targetIndices([3,1,2,3,1,2,3,1,2,3], 2), [3, 4, 5], 'Test 98');
test(targetIndices([9,8,7,6,5,4,3,2,1], 5), [4], 'Test 99');
test(targetIndices([50, 20, 30, 40, 10], 20), [1], 'Test 100');
test(targetIndices([1,3,5,7,9,11,13,15,17,19], 10), [], 'Test 101');
test(targetIndices([50, 20, 30, 40, 10, 60, 70, 80, 90, 100], 40), [3], 'Test 102');
test(targetIndices([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), [9], 'Test 103');
test(targetIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21), [], 'Test 104');
test(targetIndices([3, 1, 2, 5, 4], 4), [3], 'Test 105');
test(targetIndices([7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), [8], 'Test 106');
test(targetIndices([20,19,18,17,16,15,14,13,12,11,10], 15), [5], 'Test 107');
test(targetIndices([10,20,30,40,50,60,70,80,90,100], 55), [], 'Test 108');
test(targetIndices([10, 20, 10, 20, 10, 20], 10), [0, 1, 2], 'Test 109');
test(targetIndices([50,40,30,20,10], 30), [2], 'Test 110');
test(targetIndices([100, 200, 300, 400, 500], 250), [], 'Test 111');
test(targetIndices([50,40,30,20,10], 20), [1], 'Test 112');
test(targetIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), [14], 'Test 113');
test(targetIndices([10,9,8,7,6,5,4,3,2,1], 6), [5], 'Test 114');
test(targetIndices([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 25), [12], 'Test 115');
test(targetIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), [4], 'Test 116');
test(targetIndices([3,1,2,4,5,3,3,3,3,3,3,3,3,3,3], 3), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 117');
test(targetIndices([42,37,58,54,19,91,49,100,65,28,74,99,96,33,80,78,60,82,97,71], 74), [11], 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

