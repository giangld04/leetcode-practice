// Test: 1315. Sum Of Nodes With Even Valued Grandparent
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { sumEvenGrandparent } = require("./solution");

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

console.log("\n1315. Sum Of Nodes With Even Valued Grandparent\n");

test(sumEvenGrandparent([8,4,5,0,1,null,null,null,null,7]), 8, 'Test 1');
test(sumEvenGrandparent([4,2,7,1,3,6,9,8,null,null,null,null,5]), 27, 'Test 2');
test(sumEvenGrandparent([4,2,5,1,3,null,7,null,null,null,null,null,9]), 11, 'Test 3');
test(sumEvenGrandparent([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 38, 'Test 4');
test(sumEvenGrandparent([2,1,3,null,null,4,null,null,null,5]), 4, 'Test 5');
test(sumEvenGrandparent([5,14,3,null,10,null,7]), 0, 'Test 6');
test(sumEvenGrandparent([2,1,3,null,null,4,5,6,7]), 9, 'Test 7');
test(sumEvenGrandparent([5,3,1,4,null,2,6,8,null,null,null,null,7]), 0, 'Test 8');
test(sumEvenGrandparent([2,null,3,null,4,null,5]), 4, 'Test 9');
test(sumEvenGrandparent([11,10,12,9,8,7,6,5,4,3,2,1]), 15, 'Test 10');
test(sumEvenGrandparent([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]), 18, 'Test 11');
test(sumEvenGrandparent([4,2,7,1,3,6,9]), 19, 'Test 12');
test(sumEvenGrandparent([6,11,1,null,null,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13,null,null,14,null,null,15,null,null,16,null,null,17,null,null,18,null,null,19,null,null,20,null,null,21,null,null,22,null,null,23,null,null,24,null,null,25,null,null,26,null,null,27,null,null,28,null,null,29,null,null,30]), 2, 'Test 13');
test(sumEvenGrandparent([1]), 0, 'Test 14');
test(sumEvenGrandparent([2,3,4,5,6,7,8]), 26, 'Test 15');
test(sumEvenGrandparent([5,3,7,2,4,6,8,1,null,null,null,null,null,null,9]), 0, 'Test 16');
test(sumEvenGrandparent([3,null,9,6,null,10,11,2,null,null,null,8,null,7]), 17, 'Test 17');
test(sumEvenGrandparent([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45]), 114, 'Test 18');
test(sumEvenGrandparent([6,3,8,1,4,7,9,0,5,null,null,null,10,null,null,null,null,11,null,null,12]), 31, 'Test 19');
test(sumEvenGrandparent([24,12,16,6,10,8,20,3,9,7,11,5,15,1,13,null,null,null,null,null,null,null,null,null,4,null,null,null,14,17,18,19,null,21,22,23]), 161, 'Test 20');
test(sumEvenGrandparent([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190,5,15,30,45,55,65,80,100,115,130,135,155,165,180,195]), 1200, 'Test 21');
test(sumEvenGrandparent([18,4,5,2,9,10,6,null,null,1,3,null,null,7,8,null,null,11,12,13,14,15,16,17]), 89, 'Test 22');
test(sumEvenGrandparent([20,12,13,8,11,14,15,null,null,null,10,null,9,16,17,18,19,null,null,null,null,21,22,null,23]), 81, 'Test 23');
test(sumEvenGrandparent([8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15]), 96, 'Test 24');
test(sumEvenGrandparent([5,3,1,6,2,null,8,4,null,null,null,7,9]), 0, 'Test 25');
test(sumEvenGrandparent([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]), 2568, 'Test 26');
test(sumEvenGrandparent([16,12,20,8,14,18,22,4,10,13,15,17,19,21,23]), 184, 'Test 27');
test(sumEvenGrandparent([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), 296, 'Test 28');
test(sumEvenGrandparent([14,11,8,6,12,9,5,2,4,13,7,3,10,null,null,null,null,null,null,null,1,null,null,15,16,17,null,null,null,null,18,19,20,21]), 67, 'Test 29');
test(sumEvenGrandparent([30,15,45,10,20,40,50,5,12,18,22,35,42,48,55,3,7,9,11,13,17,19,21,23,37,38,41,43,47,49,53,57,59]), 551, 'Test 30');
test(sumEvenGrandparent([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 1140, 'Test 31');
test(sumEvenGrandparent([13,11,17,7,3,16,20,1,5,9,15,12,null,null,null,4,6,8,10,14,null,18,19,21,2,null,null,null,null,null,null,null,null,null,null,null]), 23, 'Test 32');
test(sumEvenGrandparent([14, 7, 27, 4, 9, 20, 35, 2, 6, 8, 11, 16, 22, 29, 42]), 68, 'Test 33');
test(sumEvenGrandparent([18,9,21,15,5,10,3,7,null,6,null,8,2,null,4,null,null,1,null,null,null,11]), 44, 'Test 34');
test(sumEvenGrandparent([10,5,null,3,7,null,null,2,null,6,8,1,null,null,null,4,9,10,null,null,null,null,11,12,13,14,15]), 60, 'Test 35');
test(sumEvenGrandparent([50, 25, 75, 12, 37, 63, 90, 6, 20, 30, 40, 55, 65, 85, 95]), 202, 'Test 36');
test(sumEvenGrandparent([20,10,30,5,15,25,35,1,7,9,11,13,17,19,21,23,27,29,31,33,37,39,41,43,45,47,49]), 178, 'Test 37');
test(sumEvenGrandparent([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 666, 'Test 38');
test(sumEvenGrandparent([6,10,14,4,8,12,16,2,6,10,14,18,22,26,30,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 424, 'Test 39');
test(sumEvenGrandparent([22,6,18,2,14,16,20,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41]), 493, 'Test 40');
test(sumEvenGrandparent([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 228, 'Test 41');
test(sumEvenGrandparent([18, 3, 20, null, 5, 15, 25, null, null, null, null, 13, null, 22]), 58, 'Test 42');
test(sumEvenGrandparent([6,2,12,1,5,9,15,0,null,null,3,7,11,13,19,null,null,null,4,6,8,10,12,14,16,18,20]), 83, 'Test 43');
test(sumEvenGrandparent([25,15,35,10,20,30,40,5,11,16,24,29,31,34,41]), 0, 'Test 44');
test(sumEvenGrandparent([10,4,6,8,2,null,5,null,null,null,null,1,3,7,9,11,13,15,17,19]), 19, 'Test 45');
test(sumEvenGrandparent([6,2,8,0,4,7,9,null,null,3,5]), 28, 'Test 46');
test(sumEvenGrandparent([5, 3, 8, 2, 4, 7, 9, null, null, 6, null, null, null, null, 10]), 10, 'Test 47');
test(sumEvenGrandparent([30,10,50,5,15,40,60,3,7,13,17,35,45,55,65]), 360, 'Test 48');
test(sumEvenGrandparent([32, 16, 48, 8, 24, 36, 56, 4, 12, 20, 28, 32, 40, 52, 60]), 372, 'Test 49');
test(sumEvenGrandparent([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), 96, 'Test 50');
test(sumEvenGrandparent([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190,5,15,22,35,55,65,72,78,85,95,105,135,137,145,155,172,180,195,200]), 1755, 'Test 51');
test(sumEvenGrandparent([8,3,6,1,5,7,9,2,4,6,8,10,12,14,16]), 74, 'Test 52');
test(sumEvenGrandparent([40, 20, 60, 10, 30, 50, 70, 5, 15, 25, 35, 45, 55, 65, 75]), 480, 'Test 53');
test(sumEvenGrandparent([10,5,15,3,7,null,18,null,null,6]), 28, 'Test 54');
test(sumEvenGrandparent([15,5,6,3,1,null,null,2,4,null,null,null,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), 279, 'Test 55');
test(sumEvenGrandparent([10, 5, 15, 3, 7, 12, 20, 2, 4, 6, 8, 11, 13, 18, 22]), 42, 'Test 56');
test(sumEvenGrandparent([8,6,5,2,4,9,7,null,null,1,null,null,3,10,null,null,11,12,13,null,null,14,15,null,16]), 34, 'Test 57');
test(sumEvenGrandparent([3, 9, 20, null, null, 15, 7, null, null, 25, 35, null, null, 45, 55]), 60, 'Test 58');
test(sumEvenGrandparent([100,50,150,25,75,125,175,null,null,30,60,90,110,140,180,20,40,55,65,85,95,105,115,130,145,160,185,195,null,null,22,28,35,45,58,68,72,82,92,102,112,118,128,135,148,155,165,175,188,198]), 3331, 'Test 59');
test(sumEvenGrandparent([50,25,75,10,40,60,90,5,15,30,45,55,65,70,100,2,6,12,20,35,43,53,57,63,67,73,77,85,95,105]), 993, 'Test 60');
test(sumEvenGrandparent([10,4,15,1,null,11,19,6,null,null,12,null,null,5]), 37, 'Test 61');
test(sumEvenGrandparent([20,10,30,5,15,25,35,3,7,13,17,23,27,33,37,1,4,6,8,12,14,16,18,22,24,26,28,32,34,36,38,39]), 240, 'Test 62');
test(sumEvenGrandparent([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 210, 'Test 63');
test(sumEvenGrandparent([20, 10, 30, 5, 15, 25, 35, 2, 7, 13, 18, 23, 28, 33, 38]), 242, 'Test 64');
test(sumEvenGrandparent([8,5,10,3,6,null,11,1,null,4,7,null,14]), 34, 'Test 65');
test(sumEvenGrandparent([4,2,7,1,3,6,9,9,null,1,4,null,null,null,5,6,null,null,8,10]), 33, 'Test 66');
test(sumEvenGrandparent([20, 10, 30, 5, 15, 25, 35, 1, 3, 7, 13, 19, 23, 29, 37]), 212, 'Test 67');
test(sumEvenGrandparent([10,5,15,3,7,12,20,1,4,6,8,11,14,17,22,0,null,null,null,null,null,null,9,null,null,13,null,null,16,null,null,18,null,null,21,null,null]), 92, 'Test 68');
test(sumEvenGrandparent([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 108, 'Test 69');
test(sumEvenGrandparent([22, 11, 44, 7, 33, 55, 66, 1, 5, 9, 27, 50, 70, 100, 200]), 581, 'Test 70');
test(sumEvenGrandparent([2,1,5,2,3,4,8,5,6,7,9,10,11,12,13]), 17, 'Test 71');
test(sumEvenGrandparent([6, 2, 10, 1, 3, 7, 13, null, 4, null, 5, 8, 12, 14, 16]), 83, 'Test 72');
test(sumEvenGrandparent([46,23,69,11,35,55,82,5,19,30,40,50,60,70,80,2,7,14,21,27,32,39,45,47,53,57,61,67,73,77,81,1,3,8,12,20,26,31,37,43,49,52,58,62,66,72,76,83,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), 1042, 'Test 73');
test(sumEvenGrandparent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 108, 'Test 74');
test(sumEvenGrandparent([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190]), 1200, 'Test 75');
test(sumEvenGrandparent([32,16,48,8,24,36,60,4,12,20,28,32,44,52,56,2,6,10,14,18,22,26,30,34,46,50,54,58,null,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,7,null,null,null,11,null,null,null,null,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null]), 782, 'Test 76');
test(sumEvenGrandparent([4,2,5,1,3,null,6,0,8,null,null,7,9]), 18, 'Test 77');
test(sumEvenGrandparent([17,5,10,null,null,8,9,null,null,3,null,null,13]), 3, 'Test 78');
test(sumEvenGrandparent([50,25,75,12,37,60,82,6,20,null,40,55,70,10,5,15,30,45,65,77,null,null,null,null,58]), 404, 'Test 79');
test(sumEvenGrandparent([16, 8, 24, 4, 12, 20, 28, 2, 6, 10, 14, 18, 22, 26, 30]), 192, 'Test 80');
test(sumEvenGrandparent([24,12,25,6,18,21,29,3,9,15,null,19,23,27,31,1,5,7,11,13,null,17,null,null,22,null,26,null,30,2,4,8,10,14,16,null,null,null,null,null,20,null,null,25,null,null,28,null,null,32]), 138, 'Test 81');
test(sumEvenGrandparent([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5,6,7,8,9,10,11,12,13,14,15]), 31, 'Test 82');
test(sumEvenGrandparent([2,1,3,null,null,4,null,null,null,5,null,null,null,6,null,null,null,7,null,null,null,8,null,null,null,9,null,null,null,10]), 4, 'Test 83');
test(sumEvenGrandparent([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, 8, null, null, null, 5, 6, 7]), 32, 'Test 84');
test(sumEvenGrandparent([14, 8, 22, 4, 12, 16, 28, 2, 6, 10, 14, 18, 22, 26, 30]), 188, 'Test 85');
test(sumEvenGrandparent([7,5,9,3,6,8,10,2,4,null,null,null,null,null,null]), 0, 'Test 86');
test(sumEvenGrandparent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 38, 'Test 87');
test(sumEvenGrandparent([22,17,30,10,21,28,32,5,14,19,29,null,35,3,null,null,12,null,18,null,null,null,null,null,24,26,31,33,36]), 240, 'Test 88');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

