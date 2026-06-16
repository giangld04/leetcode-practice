// Test: 1090. Largest Values From Labels
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { largestValsFromLabels } = require("./solution");

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

console.log("\n1090. Largest Values From Labels\n");

test(largestValsFromLabels([10,10,10,10], [1,1,1,1], 3, 2), 20, 'Test 1');
test(largestValsFromLabels([10,10,10,10], [1,2,3,4], 4, 1), 40, 'Test 2');
test(largestValsFromLabels([9,8,8,7,6], [0,0,0,1,1], 3, 1), 16, 'Test 3');
test(largestValsFromLabels([10,20,30,40,50], [1,2,3,4,5], 5, 1), 150, 'Test 4');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10], 5, 1), 40, 'Test 5');
test(largestValsFromLabels([10,20,30,40,50], [1,1,1,1,1], 3, 2), 90, 'Test 6');
test(largestValsFromLabels([1,2,3,4,5], [1,1,1,1,1], 3, 1), 5, 'Test 7');
test(largestValsFromLabels([1,2,3,4,5], [1,2,3,4,5], 5, 1), 15, 'Test 8');
test(largestValsFromLabels([5,4,3,2,1], [1,3,3,3,2], 3, 2), 12, 'Test 9');
test(largestValsFromLabels([5,4,3,2,1], [1,1,2,2,3], 3, 1), 9, 'Test 10');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10], [1,1,1,1,1,1,1,1,1,1], 5, 2), 19, 'Test 11');
test(largestValsFromLabels([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 1), 400, 'Test 12');
test(largestValsFromLabels([100,200,300,400,500,600,700,800,900,1000], [1,1,1,1,1,2,2,2,2,2], 5, 2), 2800, 'Test 13');
test(largestValsFromLabels([20,18,16,14,12,10,8,6,4,2], [1,2,3,4,5,1,2,3,4,5], 5, 2), 80, 'Test 14');
test(largestValsFromLabels([5, 10, 15, 20, 25, 30], [1, 2, 1, 3, 2, 3], 4, 2), 90, 'Test 15');
test(largestValsFromLabels([1000,500,250,125,62,31,15,7,3,1], [1,2,3,4,5,6,7,8,9,10], 5, 1), 1937, 'Test 16');
test(largestValsFromLabels([5,10,15,20,25,30,35,40,45,50], [1,1,1,1,2,2,2,2,3,3], 6, 3), 220, 'Test 17');
test(largestValsFromLabels([25, 25, 25, 25, 25, 25], [1, 1, 1, 1, 1, 1], 4, 1), 25, 'Test 18');
test(largestValsFromLabels([15,15,15,15,15,15,15,15,15,15], [1,2,3,4,5,6,7,8,9,10], 8, 2), 120, 'Test 19');
test(largestValsFromLabels([30, 20, 10, 30, 20, 10, 30, 20, 10], [1, 2, 3, 1, 2, 3, 1, 2, 3], 5, 2), 110, 'Test 20');
test(largestValsFromLabels([3, 5, 1, 3, 5, 3, 5, 3, 5, 3], [1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 6, 2), 18, 'Test 21');
test(largestValsFromLabels([10,20,30,40,50], [1,1,1,1,2], 3, 2), 120, 'Test 22');
test(largestValsFromLabels([50, 40, 30, 20, 10], [1, 2, 2, 3, 3], 4, 1), 110, 'Test 23');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10, 2), 39, 'Test 24');
test(largestValsFromLabels([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 5, 2), 40, 'Test 25');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3], 8, 2), 57, 'Test 26');
test(largestValsFromLabels([20,18,17,16,15,14,13,12,11,10], [1,2,3,4,5,1,2,3,4,5], 4, 1), 71, 'Test 27');
test(largestValsFromLabels([20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 10, 3), 105, 'Test 28');
test(largestValsFromLabels([100,90,80,70,60,50,40,30,20,10], [1,1,1,1,1,1,1,1,1,1], 5, 1), 100, 'Test 29');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10], [1,2,1,2,1,2,1,2,1,2], 5, 1), 19, 'Test 30');
test(largestValsFromLabels([10,20,30,40,50,60,70,80,90,100,110,120], [1,2,3,4,5,6,7,8,9,10,1,2], 8, 2), 680, 'Test 31');
test(largestValsFromLabels([10000,10000,9999,9999,9998,9998,9997,9997,9996,9996], [1,1,2,2,3,3,4,4,5,5], 8, 2), 79988, 'Test 32');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 15, 3), 195, 'Test 33');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9], [1,2,1,2,1,2,1,2,1], 3, 1), 17, 'Test 34');
test(largestValsFromLabels([9,8,7,6,5,4,3,2,1], [1,1,2,2,3,3,4,4,5], 5, 2), 35, 'Test 35');
test(largestValsFromLabels([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, 2), 270, 'Test 36');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10], 10, 1), 55, 'Test 37');
test(largestValsFromLabels([100,90,80,70,60,50,40,30,20,10], [1,1,1,1,1,1,1,1,1,1], 3, 1), 100, 'Test 38');
test(largestValsFromLabels([10,20,30,40,50,60,70,80,90,100], [1,1,1,1,1,2,2,2,2,2], 6, 3), 390, 'Test 39');
test(largestValsFromLabels([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, 2), 195, 'Test 40');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10], 7, 1), 49, 'Test 41');
test(largestValsFromLabels([20, 18, 16, 14, 12, 10, 8, 6, 4, 2], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5, 2), 38, 'Test 42');
test(largestValsFromLabels([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4], 15, 3), 138, 'Test 43');
test(largestValsFromLabels([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5, 1), 1, 'Test 44');
test(largestValsFromLabels([20, 18, 16, 14, 12, 10, 8, 6, 4, 2], [1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 6, 3), 90, 'Test 45');
test(largestValsFromLabels([10,10,10,10,10,10,10,10,10,10], [1,2,3,4,5,6,7,8,9,10], 8, 1), 80, 'Test 46');
test(largestValsFromLabels([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [1, 1, 1, 1, 1, 2, 2, 2, 2, 2], 8, 3), 60, 'Test 47');
test(largestValsFromLabels([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 10), 400, 'Test 48');
test(largestValsFromLabels([100, 50, 200, 150, 100], [1, 2, 1, 2, 1], 2, 1), 350, 'Test 49');
test(largestValsFromLabels([10, 20, 30, 40, 50], [1, 1, 2, 2, 3], 2, 1), 90, 'Test 50');
test(largestValsFromLabels([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 1, 1, 1, 2, 2, 2, 2, 3, 3], 6, 2), 30, 'Test 51');
test(largestValsFromLabels([25, 20, 15, 10, 5], [1, 2, 3, 4, 5], 3, 1), 60, 'Test 52');
test(largestValsFromLabels([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 1), 75, 'Test 53');
test(largestValsFromLabels([20, 15, 10, 5, 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19], [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5], 10, 3), 147, 'Test 54');
test(largestValsFromLabels([5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8, 3), 84, 'Test 55');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10], [1,2,1,2,1,2,1,2,1,2], 5, 2), 34, 'Test 56');
test(largestValsFromLabels([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 1), 24, 'Test 57');
test(largestValsFromLabels([50,40,30,20,10,50,40,30,20,10], [1,2,3,4,5,1,2,3,4,5], 5, 2), 210, 'Test 58');
test(largestValsFromLabels([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 10, 2), 105, 'Test 59');
test(largestValsFromLabels([5,5,5,5,5,5,5,5,5,5], [1,2,3,4,5,6,7,8,9,10], 5, 1), 25, 'Test 60');
test(largestValsFromLabels([9,8,7,6,5,4,3,2,1,0], [1,2,3,4,5,6,7,8,9,10], 5, 3), 35, 'Test 61');
test(largestValsFromLabels([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5, 1), 100, 'Test 62');
test(largestValsFromLabels([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8, 1), 16, 'Test 63');
test(largestValsFromLabels([10,9,8,7,6,5,4,3,2,1], [1,1,1,2,2,2,3,3,3,4], 7, 2), 40, 'Test 64');
test(largestValsFromLabels([5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8], 6, 1), 30, 'Test 65');
test(largestValsFromLabels([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5, 2), 38, 'Test 66');
test(largestValsFromLabels([100,90,80,70,60,50,40,30,20,10], [1,1,1,1,1,2,2,2,2,2], 5, 3), 360, 'Test 67');
test(largestValsFromLabels([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 1), 550, 'Test 68');
test(largestValsFromLabels([9,8,7,6,5,4,3,2,1], [0,1,0,1,0,1,0,1,0], 4, 1), 17, 'Test 69');
test(largestValsFromLabels([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1], 8, 3), 75, 'Test 70');
test(largestValsFromLabels([15, 10, 10, 5, 5, 5, 5], [1, 1, 2, 2, 2, 3, 3], 5, 2), 45, 'Test 71');
test(largestValsFromLabels([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, 1), 35, 'Test 72');
test(largestValsFromLabels([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4], 10, 3), 131, 'Test 73');
test(largestValsFromLabels([9,8,7,6,5,4,3,2,1], [0,1,0,1,0,1,0,1,0], 5, 2), 30, 'Test 74');
test(largestValsFromLabels([10,10,10,10,10,10,10,10,10,10], [1,2,3,4,5,6,7,8,9,10], 5, 1), 50, 'Test 75');
test(largestValsFromLabels([15, 12, 11, 10, 9, 8], [1, 1, 2, 2, 3, 3], 4, 2), 48, 'Test 76');
test(largestValsFromLabels([500,400,300,200,100], [1,2,3,4,5], 3, 1), 1200, 'Test 77');
test(largestValsFromLabels([100, 80, 60, 40, 20], [1, 1, 1, 1, 1], 5, 3), 240, 'Test 78');
test(largestValsFromLabels([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 6, 2), 450, 'Test 79');
test(largestValsFromLabels([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, 3), 490, 'Test 80');
test(largestValsFromLabels([5,9,1,9,8,5,7,8,2,1], [1,1,2,2,2,3,3,3,3,3], 6, 2), 46, 'Test 81');
test(largestValsFromLabels([20,18,16,14,12,10,8,6,4,2], [1,1,2,2,3,3,4,4,5,5], 5, 1), 60, 'Test 82');
test(largestValsFromLabels([5,5,5,5,5,5,5,5,5,5], [1,1,1,1,1,2,2,2,2,2], 4, 3), 20, 'Test 83');
test(largestValsFromLabels([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 5, 2), 40, 'Test 84');
test(largestValsFromLabels([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,2,2,2,2,2], 5, 3), 5, 'Test 85');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2], 10, 2), 46, 'Test 86');
test(largestValsFromLabels([100,200,300,400,500,600,700,800,900,1000], [1,1,1,1,1,1,1,1,1,1], 5, 2), 1900, 'Test 87');
test(largestValsFromLabels([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5], 10, 1), 50, 'Test 88');
test(largestValsFromLabels([5,10,15,20,25,30,35,40], [1,1,2,2,3,3,4,4], 4, 2), 130, 'Test 89');
test(largestValsFromLabels([20, 20, 20, 20, 20, 20, 20, 20, 20, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 1), 100, 'Test 90');
test(largestValsFromLabels([9,8,7,6,5,4,3,2,1], [0,0,0,1,1,1,2,2,2], 5, 2), 31, 'Test 91');
test(largestValsFromLabels([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5, 1), 10, 'Test 92');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10, 2), 155, 'Test 93');
test(largestValsFromLabels([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 5, 2), 340, 'Test 94');
test(largestValsFromLabels([30,25,20,15,10,5], [1,2,3,4,5,6], 4, 1), 90, 'Test 95');
test(largestValsFromLabels([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [1, 1, 1, 1, 1, 2, 2, 2, 2, 2], 5, 3), 360, 'Test 96');
test(largestValsFromLabels([20,18,15,12,10,8,6,4,2], [1,1,2,2,3,3,4,4,5], 5, 2), 75, 'Test 97');
test(largestValsFromLabels([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1], 5, 1), 40, 'Test 98');
test(largestValsFromLabels([30, 20, 10, 10, 20, 30], [1, 1, 2, 2, 3, 3], 5, 1), 70, 'Test 99');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

