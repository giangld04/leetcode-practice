// Test: 3397. Maximum Number Of Distinct Elements After Operations
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { maxDistinctElements } = require("./solution");

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

console.log("\n3397. Maximum Number Of Distinct Elements After Operations\n");

test(maxDistinctElements([1,1000000000,1,1000000000], 1000000000), 4, 'Test 1');
test(maxDistinctElements([1,2,3,4,5], 3), 5, 'Test 2');
test(maxDistinctElements([10,10,10,10,10], 5), 5, 'Test 3');
test(maxDistinctElements([1,1,1,1,1], 0), 1, 'Test 4');
test(maxDistinctElements([4,4,4,4], 1), 3, 'Test 5');
test(maxDistinctElements([1,1,1,1,1], 2), 5, 'Test 6');
test(maxDistinctElements([10,20,30,40,50], 5), 5, 'Test 7');
test(maxDistinctElements([5,5,5,5,5,5,5,5,5,5], 2), 5, 'Test 8');
test(maxDistinctElements([1,2,3,4,5], 0), 5, 'Test 9');
test(maxDistinctElements([1,1,1,1,1,1,1,1,1,1], 1), 3, 'Test 10');
test(maxDistinctElements([10,10,20,20,30], 5), 5, 'Test 11');
test(maxDistinctElements([1,2,2,3,3,4], 2), 6, 'Test 12');
test(maxDistinctElements([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100), 10, 'Test 13');
test(maxDistinctElements([999999999,999999999,999999999,999999999,999999999], 0), 1, 'Test 14');
test(maxDistinctElements([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 3), 16, 'Test 15');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 2), 25, 'Test 16');
test(maxDistinctElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 0), 20, 'Test 17');
test(maxDistinctElements([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5], 2), 9, 'Test 18');
test(maxDistinctElements([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77], 2), 20, 'Test 19');
test(maxDistinctElements([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 10), 20, 'Test 20');
test(maxDistinctElements([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 3), 10, 'Test 21');
test(maxDistinctElements([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 500000000), 10, 'Test 22');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 0), 20, 'Test 23');
test(maxDistinctElements([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 10), 20, 'Test 24');
test(maxDistinctElements([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5], 1), 7, 'Test 25');
test(maxDistinctElements([1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5], 2), 9, 'Test 26');
test(maxDistinctElements([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 1), 12, 'Test 27');
test(maxDistinctElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 3, 'Test 28');
test(maxDistinctElements([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 3), 16, 'Test 29');
test(maxDistinctElements([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 2), 5, 'Test 30');
test(maxDistinctElements([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 50), 15, 'Test 31');
test(maxDistinctElements([10,20,30,40,50,60,70,80,90,100], 5), 10, 'Test 32');
test(maxDistinctElements([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 4), 10, 'Test 33');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1000000000), 20, 'Test 34');
test(maxDistinctElements([1,2,3,4,5,6,7,8,9,10], 0), 10, 'Test 35');
test(maxDistinctElements([5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9], 2), 9, 'Test 36');
test(maxDistinctElements([1, 2, 2, 2, 3, 3, 3, 3, 4, 4], 1), 6, 'Test 37');
test(maxDistinctElements([10, 20, 20, 20, 30, 30, 40, 50, 60, 70, 80, 90, 100], 15), 13, 'Test 38');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 10, 'Test 39');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 10, 'Test 40');
test(maxDistinctElements([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 50), 10, 'Test 41');
test(maxDistinctElements([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 10, 'Test 42');
test(maxDistinctElements([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 3), 11, 'Test 43');
test(maxDistinctElements([1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6], 0), 6, 'Test 44');
test(maxDistinctElements([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0), 1, 'Test 45');
test(maxDistinctElements([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3), 7, 'Test 46');
test(maxDistinctElements([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 10, 10, 10, 11, 12, 12, 13], 1), 15, 'Test 47');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 20, 'Test 48');
test(maxDistinctElements([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 20), 20, 'Test 49');
test(maxDistinctElements([1000000000, 1000000000, 1000000000, 1000000000], 1), 3, 'Test 50');
test(maxDistinctElements([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1000000000), 10, 'Test 51');
test(maxDistinctElements([1, 2, 2, 2, 3, 3, 4, 4, 4, 5], 2), 9, 'Test 52');
test(maxDistinctElements([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 0), 1, 'Test 53');
test(maxDistinctElements([1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 9), 20, 'Test 54');
test(maxDistinctElements([10, 10, 10, 11, 11, 12, 13, 13, 14, 14], 3), 10, 'Test 55');
test(maxDistinctElements([1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10], 1), 12, 'Test 56');
test(maxDistinctElements([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11], 3), 17, 'Test 57');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 20, 'Test 58');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 5), 30, 'Test 59');
test(maxDistinctElements([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 150), 10, 'Test 60');
test(maxDistinctElements([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 2), 14, 'Test 61');
test(maxDistinctElements([1, 3, 3, 5, 7, 9, 11, 11, 13, 15], 2), 10, 'Test 62');
test(maxDistinctElements([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500], 500), 15, 'Test 63');
test(maxDistinctElements([1,1,2,2,3,3,4,4,5,5], 2), 9, 'Test 64');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 20, 'Test 65');
test(maxDistinctElements([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 10, 'Test 66');
test(maxDistinctElements([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9], 0), 9, 'Test 67');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 1), 25, 'Test 68');
test(maxDistinctElements([100, 200, 200, 300, 300, 400, 500, 500, 600, 700, 700, 800, 900, 1000], 100), 14, 'Test 69');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 9), 20, 'Test 70');
test(maxDistinctElements([1,2,2,3,3,4,4,4,5,5,5,5,6,6,6,6,6], 1), 8, 'Test 71');
test(maxDistinctElements([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11], 0), 11, 'Test 72');
test(maxDistinctElements([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15], 2), 19, 'Test 73');
test(maxDistinctElements([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 1), 7, 'Test 74');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), 10, 'Test 75');
test(maxDistinctElements([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 11, 'Test 76');
test(maxDistinctElements([10,20,30,40,50,10,20,30,40,50], 15), 10, 'Test 77');
test(maxDistinctElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000000000), 20, 'Test 78');
test(maxDistinctElements([5, 15, 15, 25, 30, 30, 35, 40, 40, 45], 5), 10, 'Test 79');
test(maxDistinctElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 20, 'Test 80');
test(maxDistinctElements([1,3,3,3,3,5,5,5,7,7,9,9,11,11,13,13,15,15,17,17], 2), 20, 'Test 81');
test(maxDistinctElements([10, 10, 20, 20, 20, 30, 30, 30, 30, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 50, 60, 60, 60, 60, 60, 60, 60, 70, 70, 70, 70, 70, 70, 70, 70], 5), 35, 'Test 82');
test(maxDistinctElements([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 3), 15, 'Test 83');
test(maxDistinctElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 11, 'Test 84');
test(maxDistinctElements([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 15, 'Test 85');
test(maxDistinctElements([100,200,300,400,500,600,700,800,900,1000], 10), 10, 'Test 86');
test(maxDistinctElements([5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8], 3), 10, 'Test 87');
test(maxDistinctElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), 20, 'Test 88');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 10, 'Test 89');
test(maxDistinctElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 3, 'Test 90');
test(maxDistinctElements([1,2,2,3,3,4,4,4,5,5,5,5], 1), 7, 'Test 91');
test(maxDistinctElements([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7], 1), 9, 'Test 92');
test(maxDistinctElements([1, 3, 3, 5, 7, 8, 8, 10, 12, 12], 2), 10, 'Test 93');
test(maxDistinctElements([1, 1, 1, 1, 2, 2, 3, 3, 4, 4], 1), 6, 'Test 94');
test(maxDistinctElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 1, 'Test 95');
test(maxDistinctElements([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 0), 1, 'Test 96');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20), 20, 'Test 97');
test(maxDistinctElements([1,2,3,4,5,6,7,8,9,10], 3), 10, 'Test 98');
test(maxDistinctElements([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 2), 5, 'Test 99');
test(maxDistinctElements([10, 10, 20, 20, 30, 30, 40, 40, 50, 50, 60, 60, 70, 70, 80, 80, 90, 90, 100, 100], 15), 20, 'Test 100');
test(maxDistinctElements([1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7], 1), 9, 'Test 101');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 20, 'Test 102');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 25), 50, 'Test 103');
test(maxDistinctElements([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11], 2), 15, 'Test 104');
test(maxDistinctElements([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 10), 20, 'Test 105');
test(maxDistinctElements([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], 2), 9, 'Test 106');
test(maxDistinctElements([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], 1), 7, 'Test 107');
test(maxDistinctElements([10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40], 10), 12, 'Test 108');
test(maxDistinctElements([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15), 10, 'Test 109');
test(maxDistinctElements([1,1,2,2,3,3,4,4,5,5], 1), 7, 'Test 110');
test(maxDistinctElements([1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 13, 14], 1), 16, 'Test 111');
test(maxDistinctElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 21, 'Test 112');
test(maxDistinctElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0), 10, 'Test 113');
test(maxDistinctElements([1000000, 1000001, 1000001, 1000002, 1000003, 1000003, 1000004, 1000005], 1000000), 8, 'Test 114');
test(maxDistinctElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 30, 'Test 115');
test(maxDistinctElements([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 1), 12, 'Test 116');
test(maxDistinctElements([1,2,3,4,5,6,7,8,9,10], 4), 10, 'Test 117');
test(maxDistinctElements([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8], 1), 10, 'Test 118');
test(maxDistinctElements([1, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2), 6, 'Test 119');
test(maxDistinctElements([5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10], 2), 10, 'Test 120');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

