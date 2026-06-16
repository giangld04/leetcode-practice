// Test: 2366. Minimum Replacements To Sort The Array
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { minimumReplacement } = require("./solution");

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

console.log("\n2366. Minimum Replacements To Sort The Array\n");

test(minimumReplacement([1,1000000000]), 0, 'Test 1');
test(minimumReplacement([9,7,5,3,1]), 20, 'Test 2');
test(minimumReplacement([10,5,3]), 5, 'Test 3');
test(minimumReplacement([100,75,50]), 3, 'Test 4');
test(minimumReplacement([1,3,5,7,9]), 0, 'Test 5');
test(minimumReplacement([1]), 0, 'Test 6');
test(minimumReplacement([1000000000,1000000000]), 0, 'Test 7');
test(minimumReplacement([1000000000,1000000000,1000000000]), 0, 'Test 8');
test(minimumReplacement([3,9,3]), 2, 'Test 9');
test(minimumReplacement([1,2,3,4,5]), 0, 'Test 10');
test(minimumReplacement([1,3,5,7,9,11]), 0, 'Test 11');
test(minimumReplacement([9,4,2,1]), 12, 'Test 12');
test(minimumReplacement([1,1,1,1,1]), 0, 'Test 13');
test(minimumReplacement([7,8,9,10]), 0, 'Test 14');
test(minimumReplacement([5,4,3,2,1]), 10, 'Test 15');
test(minimumReplacement([5,3,2,4,1]), 10, 'Test 16');
test(minimumReplacement([10,3,3,3,3]), 3, 'Test 17');
test(minimumReplacement([1,2,5,5,5]), 0, 'Test 18');
test(minimumReplacement([10,5,2]), 11, 'Test 19');
test(minimumReplacement([100,75,50,25]), 6, 'Test 20');
test(minimumReplacement([10,10,10,10,10]), 0, 'Test 21');
test(minimumReplacement([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 0, 'Test 22');
test(minimumReplacement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1]), 190, 'Test 23');
test(minimumReplacement([1, 1000000000, 1, 1000000000, 1, 1000000000]), 1999999998, 'Test 24');
test(minimumReplacement([1, 100, 1, 100, 1, 100, 1, 100]), 297, 'Test 25');
test(minimumReplacement([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 56, 'Test 26');
test(minimumReplacement([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99]), 0, 'Test 27');
test(minimumReplacement([999999999, 100000000, 10000000, 1000000, 100000]), 11106, 'Test 28');
test(minimumReplacement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 1]), 4950, 'Test 29');
test(minimumReplacement([99, 90, 81, 72, 63, 54, 45, 36, 27, 18, 9]), 55, 'Test 30');
test(minimumReplacement([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000]), 0, 'Test 31');
test(minimumReplacement([9, 8, 7, 6, 5, 4, 3, 2, 1]), 36, 'Test 32');
test(minimumReplacement([1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 0, 'Test 33');
test(minimumReplacement([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 105, 'Test 34');
test(minimumReplacement([100, 50, 25, 12, 6, 3, 1, 1, 1, 1]), 190, 'Test 35');
test(minimumReplacement([8, 12, 18, 24, 30, 36, 42, 48, 54, 60]), 0, 'Test 36');
test(minimumReplacement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 0, 'Test 37');
test(minimumReplacement([1000000, 900000, 800000, 700000, 600000, 500000, 400000, 300000, 200000, 100000]), 45, 'Test 38');
test(minimumReplacement([1000, 999, 998, 997, 996]), 10, 'Test 39');
test(minimumReplacement([1, 3, 2, 6, 5, 4, 7, 8, 9, 10]), 4, 'Test 40');
test(minimumReplacement([8,22,9,11,2]), 41, 'Test 41');
test(minimumReplacement([1000000000, 1000000000, 1000000000, 1000000000, 1]), 3999999996, 'Test 42');
test(minimumReplacement([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 43');
test(minimumReplacement([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1]), 36, 'Test 44');
test(minimumReplacement([1, 1, 1, 1, 1, 1, 1, 1, 1, 100]), 0, 'Test 45');
test(minimumReplacement([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 81, 'Test 46');
test(minimumReplacement([10, 15, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10]), 125, 'Test 47');
test(minimumReplacement([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), 0, 'Test 48');
test(minimumReplacement([1, 10, 100, 1000, 10000]), 0, 'Test 49');
test(minimumReplacement([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000]), 57, 'Test 50');
test(minimumReplacement([1000000000,999999999,999999998,999999997,999999996,999999995,999999994,999999993,999999992,999999991]), 45, 'Test 51');
test(minimumReplacement([7, 14, 7, 28, 14, 35, 21, 49, 28, 56]), 4, 'Test 52');
test(minimumReplacement([20, 10, 20, 10, 20, 10, 20]), 3, 'Test 53');
test(minimumReplacement([1000000000, 500000000, 250000000, 125000000, 62500000]), 26, 'Test 54');
test(minimumReplacement([2, 6, 5, 4, 3, 2, 1]), 16, 'Test 55');
test(minimumReplacement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), 45, 'Test 56');
test(minimumReplacement([9, 7, 5, 3, 1, 2, 4, 6, 8, 10]), 20, 'Test 57');
test(minimumReplacement([10, 5, 25, 15, 20, 50, 30, 100, 40, 60]), 5, 'Test 58');
test(minimumReplacement([10, 20, 30, 25, 20, 15, 10]), 16, 'Test 59');
test(minimumReplacement([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125]), 1013, 'Test 60');
test(minimumReplacement([5, 20, 15, 10, 25, 30, 5, 40, 35, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 16, 'Test 61');
test(minimumReplacement([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 0, 'Test 62');
test(minimumReplacement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 90, 'Test 63');
test(minimumReplacement([3, 12, 15, 9, 6, 3]), 10, 'Test 64');
test(minimumReplacement([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 45, 'Test 65');
test(minimumReplacement([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 45, 'Test 66');
test(minimumReplacement([1, 2, 1, 3, 2, 4, 3, 5, 4, 6]), 9, 'Test 67');
test(minimumReplacement([10,9,8,7,6,5,4,3,2,1]), 45, 'Test 68');
test(minimumReplacement([3, 10, 5, 15, 20, 25, 30, 5]), 15, 'Test 69');
test(minimumReplacement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 45, 'Test 70');
test(minimumReplacement([5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625]), 0, 'Test 71');
test(minimumReplacement([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 0, 'Test 72');
test(minimumReplacement([50, 40, 30, 20, 10, 5, 3, 1]), 151, 'Test 73');
test(minimumReplacement([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45]), 0, 'Test 74');
test(minimumReplacement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 0, 'Test 75');
test(minimumReplacement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 76');
test(minimumReplacement([8, 12, 9, 6, 3, 1]), 33, 'Test 77');
test(minimumReplacement([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 0, 'Test 78');
test(minimumReplacement([34, 34, 21, 21, 13, 13, 8, 8, 5, 5, 3, 3, 2, 2]), 155, 'Test 79');
test(minimumReplacement([45, 36, 30, 24, 18, 15, 10, 5]), 43, 'Test 80');
test(minimumReplacement([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 50]), 9, 'Test 81');
test(minimumReplacement([8, 12, 8, 16, 8]), 3, 'Test 82');
test(minimumReplacement([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 5]), 100, 'Test 83');
test(minimumReplacement([9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 52, 'Test 84');
test(minimumReplacement([1000000000, 999999999, 999999998, 999999997, 999999996]), 10, 'Test 85');
test(minimumReplacement([3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9]), 44, 'Test 86');
test(minimumReplacement([10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10]), 81, 'Test 87');
test(minimumReplacement([10, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35]), 0, 'Test 88');
test(minimumReplacement([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105]), 0, 'Test 89');
test(minimumReplacement([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 90');
test(minimumReplacement([100,100,100,100,100,100,100,100,100,100]), 0, 'Test 91');
test(minimumReplacement([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1]), 120, 'Test 92');
test(minimumReplacement([15, 10, 5, 10, 15, 20, 25, 30, 35, 40]), 3, 'Test 93');
test(minimumReplacement([1000000000, 999999999, 999999998]), 3, 'Test 94');
test(minimumReplacement([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 10]), 168, 'Test 95');
test(minimumReplacement([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4950, 'Test 96');
test(minimumReplacement([9, 18, 27, 36, 45, 54, 63, 72, 81, 90]), 0, 'Test 97');
test(minimumReplacement([2, 2, 3, 3, 5, 5, 8, 8, 13, 13, 21, 21, 34, 34, 55, 55]), 0, 'Test 98');
test(minimumReplacement([1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1]), 9, 'Test 99');
test(minimumReplacement([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 0, 'Test 100');
test(minimumReplacement([50, 40, 30, 20, 10, 5, 1, 1, 1, 1]), 149, 'Test 101');
test(minimumReplacement([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 0, 'Test 102');
test(minimumReplacement([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 2036, 'Test 103');
test(minimumReplacement([1,10,100,1000,10000]), 0, 'Test 104');
test(minimumReplacement([1000000000,500000000,250000000,125000000,62500000,31250000]), 57, 'Test 105');
test(minimumReplacement([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000]), 0, 'Test 106');
test(minimumReplacement([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 0, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

