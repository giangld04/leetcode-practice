// Test: 2200. Find All K Distant Indices In An Array
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { findKDistantIndices } = require("./solution");

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

console.log("\n2200. Find All K Distant Indices In An Array\n");

test(findKDistantIndices([5,1,4,1,5], 5, 2), [0, 1, 2, 3, 4], 'Test 1');
test(findKDistantIndices([1,1,1,1,1,1], 1, 3), [0, 1, 2, 3, 4, 5], 'Test 2');
test(findKDistantIndices([10,20,30,40,50], 40, 0), [3], 'Test 3');
test(findKDistantIndices([1,3,5,7,9], 3, 2), [0, 1, 2, 3], 'Test 4');
test(findKDistantIndices([1,3,5,7,9], 5, 0), [2], 'Test 5');
test(findKDistantIndices([1,2,3,4,5], 3, 0), [2], 'Test 6');
test(findKDistantIndices([5,5,5,5,5,5], 5, 3), [0, 1, 2, 3, 4, 5], 'Test 7');
test(findKDistantIndices([10,20,30,40,50,20], 20, 2), [0, 1, 2, 3, 4, 5], 'Test 8');
test(findKDistantIndices([1,2,3,4,5], 1, 2), [0, 1, 2], 'Test 9');
test(findKDistantIndices([2,2,2,2,2], 2, 2), [0, 1, 2, 3, 4], 'Test 10');
test(findKDistantIndices([1,2,3,4,5], 5, 2), [2, 3, 4], 'Test 11');
test(findKDistantIndices([10,20,30,40,50], 30, 2), [0, 1, 2, 3, 4], 'Test 12');
test(findKDistantIndices([5,1,5,1,5], 5, 1), [0, 1, 2, 3, 4], 'Test 13');
test(findKDistantIndices([3,4,9,1,3,9,5], 9, 1), [1, 2, 3, 4, 5, 6], 'Test 14');
test(findKDistantIndices([5,4,3,2,1], 1, 1), [3, 4], 'Test 15');
test(findKDistantIndices([100,90,80,70,60,50,40,30,20,10], 60, 3), [1, 2, 3, 4, 5, 6, 7], 'Test 16');
test(findKDistantIndices([10,20,30,40,50,60,70,80,90,100], 50, 4), [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 17');
test(findKDistantIndices([10, 20, 30, 40, 50, 20, 30, 40, 50], 20, 2), [0, 1, 2, 3, 4, 5, 6, 7], 'Test 18');
test(findKDistantIndices([5,1,5,2,5,3,5,4,5,5,5,5,5,5,5,5,5,5,5,5], 5, 7), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 19');
test(findKDistantIndices([1000,999,998,997,996,995,994,993,992,991], 996, 3), [1, 2, 3, 4, 5, 6, 7], 'Test 20');
test(findKDistantIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 2), [2, 3, 4, 5, 6], 'Test 21');
test(findKDistantIndices([5,4,5,4,5,4,5,4,5,4], 4, 2), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 22');
test(findKDistantIndices([1,3,5,7,9,11,13,15,17,19], 11, 4), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 23');
test(findKDistantIndices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 7, 4), [0, 1, 2, 3, 4, 5, 6, 7], 'Test 24');
test(findKDistantIndices([9,8,7,6,5,4,3,2,1], 1, 3), [5, 6, 7, 8], 'Test 25');
test(findKDistantIndices([7,3,4,7,1,7,5,7,3,7], 7, 2), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 26');
test(findKDistantIndices([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 0, 1), [8, 9], 'Test 27');
test(findKDistantIndices([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 16, 4), [3, 4, 5, 6, 7, 8, 9, 10, 11], 'Test 28');
test(findKDistantIndices([100,200,300,400,500,600,700,800,900,1000], 500, 4), [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 29');
test(findKDistantIndices([10,9,8,7,6,5,4,3,2,1], 3, 4), [3, 4, 5, 6, 7, 8, 9], 'Test 30');
test(findKDistantIndices([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 7, 2), [10, 11, 12, 13, 14, 15], 'Test 31');
test(findKDistantIndices([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5, 2), [6, 7, 8, 9, 10, 11], 'Test 32');
test(findKDistantIndices([8, 6, 7, 5, 3, 0, 9], 3, 0), [4], 'Test 33');
test(findKDistantIndices([2,4,6,8,10,12,14,16,18,20], 10, 2), [2, 3, 4, 5, 6], 'Test 34');
test(findKDistantIndices([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71], 13, 5), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 35');
test(findKDistantIndices([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 7, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 36');
test(findKDistantIndices([9,8,7,6,5,4,3,2,1,0], 5, 2), [2, 3, 4, 5, 6], 'Test 37');
test(findKDistantIndices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 38');
test(findKDistantIndices([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 6, 3), [1, 2, 3, 4, 5, 6, 7], 'Test 39');
test(findKDistantIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7, 5), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 'Test 40');
test(findKDistantIndices([10,20,30,40,50,40,30,20,10], 30, 1), [1, 2, 3, 5, 6, 7], 'Test 41');
test(findKDistantIndices([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 3, 4), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 42');
test(findKDistantIndices([7,7,7,7,7,7,7,7,7,7], 7, 4), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 43');
test(findKDistantIndices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15, 2), [5, 6, 7, 8, 9], 'Test 44');
test(findKDistantIndices([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 100, 5), [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 45');
test(findKDistantIndices([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500, 2), [2, 3, 4, 5, 6], 'Test 46');
test(findKDistantIndices([999,1000,999,1000,999,1000,999,1000,999,1000], 999, 4), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 47');
test(findKDistantIndices([5, 1, 5, 1, 5, 1, 5, 1, 5, 1], 5, 2), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 48');
test(findKDistantIndices([1,2,3,4,5,6,7,8,9,10], 5, 2), [2, 3, 4, 5, 6], 'Test 49');
test(findKDistantIndices([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 3, 1), [3, 4, 5, 6], 'Test 50');
test(findKDistantIndices([7,1,5,3,6,2,4,8,9,7,5,3,1], 7, 3), [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12], 'Test 51');
test(findKDistantIndices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10, 5), [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 52');
test(findKDistantIndices([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7], 9, 5), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 'Test 53');
test(findKDistantIndices([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 80, 5), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 54');
test(findKDistantIndices([10,20,30,40,50,60,70,80,90,100], 50, 3), [1, 2, 3, 4, 5, 6, 7], 'Test 55');
test(findKDistantIndices([5,1,5,2,5,3,5,4,5,5,5,5,5,5,5,5,5,5,5,5], 5, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 56');
test(findKDistantIndices([7,14,21,28,35,42,49,56,63,70], 21, 0), [2], 'Test 57');
test(findKDistantIndices([1,2,3,4,5,6,7,8,9,10], 10, 4), [5, 6, 7, 8, 9], 'Test 58');
test(findKDistantIndices([7,14,21,28,35,42,49,56,63,70,77,84,91,98], 49, 5), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 'Test 59');
test(findKDistantIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, 3), [6, 7, 8, 9, 10, 11, 12], 'Test 60');
test(findKDistantIndices([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 3, 1), [3, 4, 5, 6], 'Test 61');
test(findKDistantIndices([5,10,15,20,25,30,35,40,45,50,55,60], 25, 3), [1, 2, 3, 4, 5, 6, 7], 'Test 62');
test(findKDistantIndices([10,20,30,40,50,60,70,80,90,100], 60, 1), [4, 5, 6], 'Test 63');
test(findKDistantIndices([9,8,7,6,5,4,3,2,1,0], 5, 3), [1, 2, 3, 4, 5, 6, 7], 'Test 64');
test(findKDistantIndices([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 1, 3), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 65');
test(findKDistantIndices([10,20,30,40,50,60,70,80,90,100], 30, 1), [1, 2, 3], 'Test 66');
test(findKDistantIndices([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 1, 2), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 67');
test(findKDistantIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8, 3), [4, 5, 6, 7, 8, 9, 10], 'Test 68');
test(findKDistantIndices([1,1,2,2,3,3,4,4,5,5], 3, 2), [2, 3, 4, 5, 6, 7], 'Test 69');
test(findKDistantIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, 5), [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 70');
test(findKDistantIndices([7, 1, 5, 3, 9, 5, 7, 5, 2, 5], 5, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 71');
test(findKDistantIndices([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 7, 5), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 72');
test(findKDistantIndices([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 5, 4), [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 73');
test(findKDistantIndices([100, 200, 300, 400, 500, 300, 200, 100], 300, 2), [0, 1, 2, 3, 4, 5, 6, 7], 'Test 74');
test(findKDistantIndices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 13, 4), [2, 3, 4, 5, 6, 7, 8, 9], 'Test 75');
test(findKDistantIndices([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5], 3, 3), [5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 76');
test(findKDistantIndices([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15, 5), [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 77');
test(findKDistantIndices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8, 5), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 78');
test(findKDistantIndices([100,90,80,70,60,50,40,30,20,10], 50, 4), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 79');
test(findKDistantIndices([100,200,300,400,500,600,700,800,900,1000], 500, 3), [1, 2, 3, 4, 5, 6, 7], 'Test 80');
test(findKDistantIndices([3,5,7,9,11,13,15,17,19], 7, 2), [0, 1, 2, 3, 4], 'Test 81');
test(findKDistantIndices([2,3,5,7,11,13,17,19,23,29], 13, 2), [3, 4, 5, 6, 7], 'Test 82');
test(findKDistantIndices([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 5, 2), [2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 83');
test(findKDistantIndices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10, 4), [5, 6, 7, 8, 9, 10, 11, 12, 13], 'Test 84');
test(findKDistantIndices([5,4,3,2,1,0,1,2,3,4,5], 0, 3), [2, 3, 4, 5, 6, 7, 8], 'Test 85');
test(findKDistantIndices([3,1,4,1,5,9,2,6,5,3,5], 5, 1), [3, 4, 5, 7, 8, 9, 10], 'Test 86');
test(findKDistantIndices([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 3, 2), [2, 3, 4, 5, 6, 7], 'Test 87');
test(findKDistantIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 1), [3, 4, 5], 'Test 88');
test(findKDistantIndices([10,9,8,7,6,5,4,3,2,1], 5, 3), [2, 3, 4, 5, 6, 7, 8], 'Test 89');
test(findKDistantIndices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5, 5), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 90');
test(findKDistantIndices([3,1,4,1,5,9,2,6,5,3,5], 5, 2), [2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 91');
test(findKDistantIndices([1,2,3,4,5,6,7,8,9,10], 5, 5), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 92');
test(findKDistantIndices([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 15, 6), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 'Test 93');
test(findKDistantIndices([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], 5, 4), [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18], 'Test 94');
test(findKDistantIndices([1,3,2,3,1,3,2,3,1,3], 3, 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 95');
test(findKDistantIndices([1,2,3,4,5,6,7,8,9], 5, 2), [2, 3, 4, 5, 6], 'Test 96');
test(findKDistantIndices([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7, 4), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 97');
test(findKDistantIndices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15, 5), [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 98');
test(findKDistantIndices([9,9,9,9,9,9,9,9,9,9,9,9], 9, 5), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 'Test 99');
test(findKDistantIndices([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 90, 4), [4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 100');
test(findKDistantIndices([1,3,5,7,9,11,13,15,17,19], 15, 3), [4, 5, 6, 7, 8, 9], 'Test 101');
test(findKDistantIndices([1,1,1,1,1,1,1,1,1,1], 1, 0), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 102');
test(findKDistantIndices([1,3,5,7,9,11,13,15,17,19], 7, 3), [0, 1, 2, 3, 4, 5, 6], 'Test 103');
test(findKDistantIndices([3,6,9,12,15,18,21,24,27,30,33,36,39,42], 21, 6), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 104');
test(findKDistantIndices([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1], 5, 2), [2, 3, 4, 5, 6, 10, 11, 12, 13, 14], 'Test 105');
test(findKDistantIndices([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 19, 7), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 'Test 106');
test(findKDistantIndices([5,4,3,2,1,2,3,4,5,4,3,2,1], 3, 3), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 107');

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
