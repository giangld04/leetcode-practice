// Test: 2779. Maximum Beauty Of An Array After Applying Operation
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { maximumBeauty } = require("./solution");

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

console.log("\n2779. Maximum Beauty Of An Array After Applying Operation\n");

test(maximumBeauty([7,7,7,7,7,7,7,7,7,7], 3), 10, 'Test 1');
test(maximumBeauty([1,2,3,4,5,6,7,8,9,10], 1), 3, 'Test 2');
test(maximumBeauty([10,20,30,40,50], 15), 4, 'Test 3');
test(maximumBeauty([5,15,25,35], 5), 2, 'Test 4');
test(maximumBeauty([100,100,100], 5), 3, 'Test 5');
test(maximumBeauty([100,200,300,400,500], 0), 1, 'Test 6');
test(maximumBeauty([1,2,3,4,5,6,7,8,9,10], 5), 10, 'Test 7');
test(maximumBeauty([3,3,3,3,3], 1), 5, 'Test 8');
test(maximumBeauty([1,2,3,4,5], 2), 5, 'Test 9');
test(maximumBeauty([100000, 0, 50000, 25000, 75000], 50000), 5, 'Test 10');
test(maximumBeauty([10,20,30,40,50], 5), 2, 'Test 11');
test(maximumBeauty([8,8,8,8,8,8], 0), 6, 'Test 12');
test(maximumBeauty([1,3,5,7,9], 1), 2, 'Test 13');
test(maximumBeauty([3,1,4,1,5,9,2,6,5,3,5], 2), 9, 'Test 14');
test(maximumBeauty([5,3,9,8,7], 1), 3, 'Test 15');
test(maximumBeauty([2,4,6,8,10], 2), 3, 'Test 16');
test(maximumBeauty([3,3,3,3,3], 5), 5, 'Test 17');
test(maximumBeauty([4,6,1,2], 2), 3, 'Test 18');
test(maximumBeauty([10,20,30,40,50], 0), 1, 'Test 19');
test(maximumBeauty([5,5,5,5,5], 0), 5, 'Test 20');
test(maximumBeauty([1,2,3,4,5], 0), 1, 'Test 21');
test(maximumBeauty([1,100000], 50000), 2, 'Test 22');
test(maximumBeauty([1,2,3,4,5,6,7,8,9,10], 4), 9, 'Test 23');
test(maximumBeauty([5,3,15,8,10], 5), 4, 'Test 24');
test(maximumBeauty([100000,100000,100000], 0), 3, 'Test 25');
test(maximumBeauty([5,3,15,8,1], 3), 3, 'Test 26');
test(maximumBeauty([1,1,1,1], 10), 4, 'Test 27');
test(maximumBeauty([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100), 3, 'Test 28');
test(maximumBeauty([1, 10, 20, 30, 40, 50, 60, 70, 80, 90], 50), 10, 'Test 29');
test(maximumBeauty([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], 5), 10, 'Test 30');
test(maximumBeauty([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6], 1), 18, 'Test 31');
test(maximumBeauty([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3), 4, 'Test 32');
test(maximumBeauty([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 1), 12, 'Test 33');
test(maximumBeauty([1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 0), 5, 'Test 34');
test(maximumBeauty([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57], 4), 3, 'Test 35');
test(maximumBeauty([2, 5, 9, 14, 20, 27, 35, 44, 54, 65], 10), 5, 'Test 36');
test(maximumBeauty([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4], 1), 9, 'Test 37');
test(maximumBeauty([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 1), 9, 'Test 38');
test(maximumBeauty([1, 5, 9, 13, 17, 21, 25, 29, 33, 37], 4), 3, 'Test 39');
test(maximumBeauty([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5), 3, 'Test 40');
test(maximumBeauty([1, 100000, 2, 99999, 3, 99998, 4, 99997, 5, 99996], 50000), 10, 'Test 41');
test(maximumBeauty([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 1), 6, 'Test 42');
test(maximumBeauty([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190], 50), 11, 'Test 43');
test(maximumBeauty([100, 100, 200, 200, 300, 300, 400, 400], 50), 4, 'Test 44');
test(maximumBeauty([10,20,30,40,50,60,70,80,90,100], 15), 4, 'Test 45');
test(maximumBeauty([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], 10000), 10, 'Test 46');
test(maximumBeauty([10,20,20,30,30,30,40,40,40,40], 10), 9, 'Test 47');
test(maximumBeauty([5,7,9,11,13,15,17,19,21,23], 3), 4, 'Test 48');
test(maximumBeauty([1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15], 3), 10, 'Test 49');
test(maximumBeauty([5,15,25,35,45,55,65,75,85,95,105,115,125,135,145,155,165,175,185,195], 10), 3, 'Test 50');
test(maximumBeauty([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 20), 9, 'Test 51');
test(maximumBeauty([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 3, 'Test 52');
test(maximumBeauty([5, 8, 12, 15, 17, 20, 23, 25, 28, 30], 5), 5, 'Test 53');
test(maximumBeauty([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4], 1), 15, 'Test 54');
test(maximumBeauty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 3), 7, 'Test 55');
test(maximumBeauty([1, 3, 2, 5, 4, 7, 6, 9, 8, 11], 2), 5, 'Test 56');
test(maximumBeauty([10, 15, 20, 25, 30, 35, 40, 45, 50], 5), 3, 'Test 57');
test(maximumBeauty([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991,99990,99989,99988,99987,99986,99985,99984,99983,99982,99981], 50000), 20, 'Test 58');
test(maximumBeauty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1), 3, 'Test 59');
test(maximumBeauty([5, 8, 11, 14, 17, 20, 23, 26, 29, 32], 5), 4, 'Test 60');
test(maximumBeauty([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0), 20, 'Test 61');
test(maximumBeauty([1,2,2,2,3,3,4,4,4,5,5,5,6,6,7,7,8,8,9,9,10], 1), 8, 'Test 62');
test(maximumBeauty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), 15, 'Test 63');
test(maximumBeauty([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100000), 32, 'Test 64');
test(maximumBeauty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 11, 'Test 65');
test(maximumBeauty([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 150), 4, 'Test 66');
test(maximumBeauty([5, 8, 8, 10, 12, 15, 15, 20, 22, 25], 3), 4, 'Test 67');
test(maximumBeauty([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 100000), 20, 'Test 68');
test(maximumBeauty([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1), 10, 'Test 69');
test(maximumBeauty([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 2, 'Test 70');
test(maximumBeauty([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140], 50), 11, 'Test 71');
test(maximumBeauty([5,5,5,5,5,5,5,5,5,5], 1), 10, 'Test 72');
test(maximumBeauty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 9), 19, 'Test 73');
test(maximumBeauty([100, 150, 200, 250, 300, 350, 400, 450, 500], 50), 3, 'Test 74');
test(maximumBeauty([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 9), 19, 'Test 75');
test(maximumBeauty([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 1), 6, 'Test 76');
test(maximumBeauty([100, 200, 300, 400, 500, 600, 700], 100), 3, 'Test 77');
test(maximumBeauty([1, 5, 9, 13, 17, 21, 25, 29, 33, 37], 3), 2, 'Test 78');
test(maximumBeauty([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10000), 15, 'Test 79');
test(maximumBeauty([100000, 1, 2, 3, 100000, 100000, 4, 5, 6, 7, 8, 9], 100000), 12, 'Test 80');
test(maximumBeauty([90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], 25000), 6, 'Test 81');
test(maximumBeauty([5, 10, 15, 20, 25, 30, 35, 40], 7), 3, 'Test 82');
test(maximumBeauty([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 3, 'Test 83');
test(maximumBeauty([2, 4, 4, 4, 6, 8, 8, 8, 10, 12, 12, 14, 16, 18], 2), 7, 'Test 84');
test(maximumBeauty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5), 11, 'Test 85');
test(maximumBeauty([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3), 10, 'Test 86');
test(maximumBeauty([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 15), 4, 'Test 87');
test(maximumBeauty([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 4), 5, 'Test 88');
test(maximumBeauty([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 45), 10, 'Test 89');
test(maximumBeauty([90, 80, 70, 60, 50, 40, 30, 20, 10, 0], 10), 3, 'Test 90');
test(maximumBeauty([1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 10), 5, 'Test 91');
test(maximumBeauty([100, 110, 120, 130, 140, 150, 160, 170, 180, 190], 15), 4, 'Test 92');
test(maximumBeauty([10000, 20000, 30000, 40000, 50000, 60000, 70000], 15000), 4, 'Test 93');
test(maximumBeauty([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77], 5), 3, 'Test 94');
test(maximumBeauty([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 1), 2, 'Test 95');
test(maximumBeauty([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 0), 2, 'Test 96');
test(maximumBeauty([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 1), 10, 'Test 97');
test(maximumBeauty([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 2), 3, 'Test 98');
test(maximumBeauty([1,3,5,7,9,11,13,15,17,19], 8), 9, 'Test 99');
test(maximumBeauty([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100000), 20, 'Test 100');
test(maximumBeauty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 2), 5, 'Test 101');
test(maximumBeauty([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], 2), 15, 'Test 102');
test(maximumBeauty([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6], 1), 14, 'Test 103');
test(maximumBeauty([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 5), 10, 'Test 104');
test(maximumBeauty([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 2), 3, 'Test 105');
test(maximumBeauty([2, 5, 8, 11, 14, 17, 20], 3), 3, 'Test 106');
test(maximumBeauty([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 8), 9, 'Test 107');
test(maximumBeauty([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145], 25), 6, 'Test 108');
test(maximumBeauty([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77], 20), 11, 'Test 109');
test(maximumBeauty([100000, 90000, 80000, 70000, 60000, 50000], 25000), 6, 'Test 110');
test(maximumBeauty([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15), 4, 'Test 111');
test(maximumBeauty([100,100,100,200,200,200,300,300,300,400,400,400,500,500,500], 100), 9, 'Test 112');
test(maximumBeauty([5, 7, 9, 11, 13, 15, 17, 19, 21, 23], 3), 4, 'Test 113');
test(maximumBeauty([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190], 45), 10, 'Test 114');
test(maximumBeauty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0), 1, 'Test 115');
test(maximumBeauty([5, 15, 25, 35, 45, 55], 10), 3, 'Test 116');
test(maximumBeauty([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6], 1), 15, 'Test 117');
test(maximumBeauty([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 10, 'Test 118');
test(maximumBeauty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 12), 25, 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

