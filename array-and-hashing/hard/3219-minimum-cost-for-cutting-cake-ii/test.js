// Test: 3219. Minimum Cost For Cutting Cake Ii
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { minimumCost } = require("./solution");

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

console.log("\n3219. Minimum Cost For Cutting Cake Ii\n");

test(minimumCost(6, 5, [1,3,5], [2,4]), Error: list index out of range, 'Test 1');
test(minimumCost(2, 2, [7], [4]), 15, 'Test 2');
test(minimumCost(5, 4, [2,4,6], [1,3,5]), Error: list index out of range, 'Test 3');
test(minimumCost(4, 3, [1,2,3], [1,2]), 17, 'Test 4');
test(minimumCost(5, 4, [1,2,3], [1,2]), Error: list index out of range, 'Test 5');
test(minimumCost(6, 5, [3,5,9], [2,4,7]), Error: list index out of range, 'Test 6');
test(minimumCost(3, 3, [1,2], [1,2]), 11, 'Test 7');
test(minimumCost(5, 4, [1,2,3,4], [1,2,3]), 36, 'Test 8');
test(minimumCost(4, 3, [2,4], [1,3]), Error: list index out of range, 'Test 9');
test(minimumCost(6, 3, [1,2,3,4,5], [1,2]), 32, 'Test 10');
test(minimumCost(4, 3, [2,4,6], [1,3,5]), 39, 'Test 11');
test(minimumCost(3, 2, [1,3], [5]), 13, 'Test 12');
test(minimumCost(4, 3, [2,4], [3]), Error: list index out of range, 'Test 13');
test(minimumCost(4, 5, [3,5], [2,4,6]), Error: list index out of range, 'Test 14');
test(minimumCost(15, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 660, 'Test 15');
test(minimumCost(5, 6, [5,15,25], [3,6,9,12,15]), Error: list index out of range, 'Test 16');
test(minimumCost(8, 12, [1,2,3,4,5,6,7], [1,2,3,4,5,6,7,8,9,10,11]), 346, 'Test 17');
test(minimumCost(15, 12, [2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11]), Error: list index out of range, 'Test 18');
test(minimumCost(20, 15, [5, 10, 15], [3, 6, 9, 12, 14]), Error: list index out of range, 'Test 19');
test(minimumCost(10, 15, [1,3,5,7,9], [2,4,6,8,10,12,14]), Error: list index out of range, 'Test 20');
test(minimumCost(6, 6, [1, 3, 5], [1, 3, 5]), Error: list index out of range, 'Test 21');
test(minimumCost(8, 12, [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 346, 'Test 22');
test(minimumCost(8, 7, [3, 6], [2, 4, 5, 7]), Error: list index out of range, 'Test 23');
test(minimumCost(25, 30, [10,20,30,40,50,60,70,80,90,100], [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150]), Error: list index out of range, 'Test 24');
test(minimumCost(100, 100, [10, 20, 30, 40, 50, 60, 70, 80, 90], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), Error: list index out of range, 'Test 25');
test(minimumCost(10, 5, [5, 15, 25, 35, 45, 55, 65, 75, 85], [10, 20, 30]), Error: list index out of range, 'Test 26');
test(minimumCost(7, 8, [2, 4, 6], [1, 3, 5, 7]), Error: list index out of range, 'Test 27');
test(minimumCost(15, 12, [1, 5, 9, 13], [2, 4, 6, 8, 10]), Error: list index out of range, 'Test 28');
test(minimumCost(20, 10, [1,3,5,7,9,11,13,15,17,19], [1,2,3,4,5,6,7,8,9]), Error: list index out of range, 'Test 29');
test(minimumCost(15, 15, [2, 6, 10, 14], [1, 5, 9, 13]), Error: list index out of range, 'Test 30');
test(minimumCost(15, 15, [1,2,3,4,5,6,7,8,9,10,11,12,13,14], [1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 1225, 'Test 31');
test(minimumCost(6, 7, [1, 2, 4, 5, 6], [2, 3, 5, 6]), Error: list index out of range, 'Test 32');
test(minimumCost(30, 30, [5, 10, 15, 20, 25], [5, 10, 15, 20, 25]), Error: list index out of range, 'Test 33');
test(minimumCost(100, 100, [50,60,70,80,90], [40,50,60,70,80]), Error: list index out of range, 'Test 34');
test(minimumCost(30, 20, [5, 10, 15, 20, 25], [3, 6, 9, 12, 15, 18]), Error: list index out of range, 'Test 35');
test(minimumCost(100, 100, [10,20,30,40,50,60,70,80,90], [15,25,35,45,55,65,75,85,95]), Error: list index out of range, 'Test 36');
test(minimumCost(20, 15, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14]), Error: list index out of range, 'Test 37');
test(minimumCost(10, 10, [1,3,5,7,9,11,13,15,17], [2,4,6,8,10,12,14,16,18]), 696, 'Test 38');
test(minimumCost(8, 7, [1, 3, 5, 7, 9, 11, 13], [2, 4, 6, 8, 10, 12]), 294, 'Test 39');
test(minimumCost(7, 6, [1, 3, 5], [2, 4]), Error: list index out of range, 'Test 40');
test(minimumCost(7, 8, [2, 4, 6, 8], [1, 3, 5, 7]), Error: list index out of range, 'Test 41');
test(minimumCost(7, 7, [2,4,6], [1,3,5]), Error: list index out of range, 'Test 42');
test(minimumCost(7, 8, [10,20,30,40,50,60], [5,10,15,20,25,30,35]), 1080, 'Test 43');
test(minimumCost(100, 100, [10,20,30,40,50,60,70,80,90], [10,20,30,40,50,60,70,80,90]), Error: list index out of range, 'Test 44');
test(minimumCost(9, 11, [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 367, 'Test 45');
test(minimumCost(15, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [2, 4, 6, 8]), Error: list index out of range, 'Test 46');
test(minimumCost(12, 8, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6, 7]), 346, 'Test 47');
test(minimumCost(9, 9, [2, 4, 6, 8], [1, 3, 5, 7]), Error: list index out of range, 'Test 48');
test(minimumCost(50, 30, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), Error: list index out of range, 'Test 49');
test(minimumCost(12, 15, [1,3,5,7,9,11], [2,4,6,8,10,12,14]), Error: list index out of range, 'Test 50');
test(minimumCost(999, 999, [1, 2, 3, ..., 998], [1, 2, 3, ..., 998]), Error: '<' not supported between instances of 'ellipsis' and 'int', 'Test 51');
test(minimumCost(20, 50, [2,4,6,8,10,12,14,16,18], [1,5,9,13,17,21,25,29,33,37,41,45,49]), Error: list index out of range, 'Test 52');
test(minimumCost(6, 5, [10,20,30,40,50], [15,25,35]), Error: list index out of range, 'Test 53');
test(minimumCost(30, 30, [5,10,15,20,25], [5,10,15,20,25]), Error: list index out of range, 'Test 54');
test(minimumCost(1000, 1000, [500], [500]), Error: list index out of range, 'Test 55');
test(minimumCost(10, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 375, 'Test 56');
test(minimumCost(10, 6, [1, 3, 5, 7, 9], [2, 4, 6]), Error: list index out of range, 'Test 57');
test(minimumCost(9, 9, [5,10,15,20,25,30,35,40], [5,10,15,20,25,30,35,40]), 1380, 'Test 58');
test(minimumCost(8, 6, [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5]), 128, 'Test 59');
test(minimumCost(15, 5, [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75], [2,4,6]), Error: list index out of range, 'Test 60');
test(minimumCost(12, 11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 561, 'Test 61');
test(minimumCost(6, 6, [10, 20, 30, 40, 50], [15, 25, 35, 45]), Error: list index out of range, 'Test 62');
test(minimumCost(20, 30, [15, 25, 35, 45, 55, 65, 75, 85, 95], [10, 20, 30, 40, 50, 60, 70, 80, 90]), Error: list index out of range, 'Test 63');
test(minimumCost(7, 7, [2, 4, 6], [2, 4, 6]), Error: list index out of range, 'Test 64');
test(minimumCost(15, 15, [3, 6, 9, 12], [3, 6, 9, 12]), Error: list index out of range, 'Test 65');
test(minimumCost(100, 100, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]), 338250, 'Test 66');
test(minimumCost(10, 10, [1, 3, 5, 7, 9], [1, 3, 5, 7, 9]), Error: list index out of range, 'Test 67');
test(minimumCost(7, 8, [2, 6, 10, 14, 18, 22], [3, 9, 15, 21, 27]), Error: list index out of range, 'Test 68');
test(minimumCost(20, 1, [1,3,5,7,9,11,13,15,17,19], [1]), Error: list index out of range, 'Test 69');
test(minimumCost(99, 100, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]), 333201, 'Test 70');
test(minimumCost(9, 10, [2, 4, 6, 8], [1, 3, 5, 7, 9]), Error: list index out of range, 'Test 71');
test(minimumCost(10, 20, [1,2,3,4,5,6,7,8,9], [1,3,5,7,9,11,13,15,17,19]), Error: list index out of range, 'Test 72');
test(minimumCost(8, 8, [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]), 196, 'Test 73');
test(minimumCost(8, 6, [2,5,7], [1,3,4,6]), Error: list index out of range, 'Test 74');
test(minimumCost(10, 10, [10, 20, 30, 40, 50, 60, 70, 80, 90], [10, 20, 30, 40, 50, 60, 70, 80, 90]), 3750, 'Test 75');
test(minimumCost(100, 50, [10, 20, 30, 40, 50, 60, 70, 80, 90], [5, 15, 25, 35, 45]), Error: list index out of range, 'Test 76');
test(minimumCost(10, 8, [1, 5, 9, 15, 20], [3, 6, 9, 12]), Error: list index out of range, 'Test 77');
test(minimumCost(15, 20, [2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), Error: list index out of range, 'Test 78');
test(minimumCost(10, 10, [1, 9, 2, 8, 3, 7, 4, 6, 5], [1, 9, 2, 8, 3, 7, 4, 6, 5]), 375, 'Test 79');
test(minimumCost(10, 10, [1, 3, 5, 7, 9], [2, 4, 6, 8]), Error: list index out of range, 'Test 80');
test(minimumCost(6, 8, [1,2,4,5,6], [1,2,3,5,6,7]), Error: list index out of range, 'Test 81');
test(minimumCost(100, 100, [20, 40, 60, 80], [20, 40, 60, 80]), Error: list index out of range, 'Test 82');
test(minimumCost(100000, 1, [50000], []), Error: list index out of range, 'Test 83');
test(minimumCost(6, 5, [1, 2, 3, 4, 5], [1, 2, 3]), Error: list index out of range, 'Test 84');
test(minimumCost(50, 60, [5, 10, 15, 20, 25, 30, 35, 40, 45], [6, 12, 18, 24, 30, 36, 42, 48, 54]), Error: list index out of range, 'Test 85');
test(minimumCost(10, 10, [5, 15, 25, 30, 40, 50, 60, 70, 80], [10, 20, 30, 40, 50, 60, 70, 80]), Error: list index out of range, 'Test 86');
test(minimumCost(10, 10, [1,3,5,7,9], [2,4,6,8]), Error: list index out of range, 'Test 87');
test(minimumCost(1, 100000, [], [50000]), Error: list index out of range, 'Test 88');
test(minimumCost(50, 25, [1, 5, 10, 15, 20, 25, 30, 35, 40, 45], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), Error: list index out of range, 'Test 89');
test(minimumCost(100000, 100000, [50000, 75000], [50000, 75000]), Error: list index out of range, 'Test 90');
test(minimumCost(50, 20, [1,5,9,13,17,21,25,29,33,37,41,45,49], [2,4,6,8,10,12,14,16,18]), Error: list index out of range, 'Test 91');
test(minimumCost(8, 8, [2, 4, 6], [2, 4, 6]), Error: list index out of range, 'Test 92');
test(minimumCost(100, 100, [50, 60, 70, 80, 90], [25, 35, 45, 55, 65, 75, 85, 95]), Error: list index out of range, 'Test 93');
test(minimumCost(8, 8, [1, 3, 5, 7], [1, 3, 5, 7]), Error: list index out of range, 'Test 94');
test(minimumCost(10, 10, [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9]), 375, 'Test 95');
test(minimumCost(15, 10, [1,2,3,4,5,6,7,8,9,10,11,12,13,14], [1,2,3,4,5,6,7,8,9]), 660, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

