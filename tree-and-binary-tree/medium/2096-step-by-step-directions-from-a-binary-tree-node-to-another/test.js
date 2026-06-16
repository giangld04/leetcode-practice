// Test: 2096. Step By Step Directions From A Binary Tree Node To Another
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { getDirections } = require("./solution");

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

console.log("\n2096. Step By Step Directions From A Binary Tree Node To Another\n");

test(getDirections([10,5,15,3,7,null,18], 3, 18), UURR, 'Test 1');
test(getDirections([2,1], 2, 1), L, 'Test 2');
test(getDirections([5,1,2,3,null,6,4], 3, 6), UURL, 'Test 3');
test(getDirections([1,2,3,4,5,6,7], 4, 7), UURR, 'Test 4');
test(getDirections([1,2,3,4,5,6,7,8,9,10], 8, 10), UURL, 'Test 5');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8, 15), UUURRR, 'Test 6');
test(getDirections([1,2], 2, 1), U, 'Test 7');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1, 15), RRR, 'Test 8');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8, 14), UUURRL, 'Test 9');
test(getDirections([3,1,4,null,2], 2, 4), UUR, 'Test 10');
test(getDirections([3,1,2], 2, 1), UL, 'Test 11');
test(getDirections([20,10,30,5,15,25,35,3,7,12,17,22,27,32,38,1,4,6,8,11,13,16,18,19,21,23,24,26,28,30,31,33,34,36,37,39,40], 37, 4), U, 'Test 12');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 45, 50), UUUUURLLRL, 'Test 13');
test(getDirections([5,1,2,3,8,6,4,9,null,null,10], 9, 10), UURR, 'Test 14');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 12, 14), UURL, 'Test 15');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 16, 19), UURR, 'Test 16');
test(getDirections([1,2,3,null,null,6,7,8,9,null,null,12,13,null,null,16,17], 16, 17), UR, 'Test 17');
test(getDirections([5,1,2,3,null,6,4,8,null,null,null,9], 8, 9), UUURRL, 'Test 18');
test(getDirections([5,1,2,3,6,null,4,7,8,null,null,9,10,null,null,11,12,null,null,13,14,null,null,15,16], 7, 16), URRR, 'Test 19');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 4, 17), LR, 'Test 20');
test(getDirections([50,25,75,12,37,62,87,6,20,null,40,null,59,80,90], 6, 80), UUURRL, 'Test 21');
test(getDirections([10,5,15,3,7,12,18,1,null,6,null,11,13,null,null,null,null,null,null,null], 3, 13), UURLR, 'Test 22');
test(getDirections([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12], 7, 12), LLLLL, 'Test 23');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 21, 28), UUUURRLL, 'Test 24');
test(getDirections([1,2,null,3,4,null,5,6,null,null,7,8,9], 6, 9), R, 'Test 25');
test(getDirections([20,10,30,5,15,25,35,3,7,12,17,22,27,32,38,1,4,6,8,11,13,16,18,19,21,23,24,26,28,30,31,33,34,36,37,39,40], 4, 37), R, 'Test 26');
test(getDirections([10,5,15,3,7,null,18,1,null,6,null,14,20,null,null,null,null,null,13,16,19], 3, 20), UURRR, 'Test 27');
test(getDirections([3,1,2,null,null,null,4,null,5,null,null,null,6,null,null,null,null,null,null,7], 1, 7), , 'Test 28');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10, 19), UULRR, 'Test 29');
test(getDirections([50,25,75,12,37,62,87,6,18,31,43,55,59,81,93,3,9,15,21,27,35,39,47,51,57,61,67,71,77,83,89,95,1,5,7,11,13,17,19,23,29,33,37,41,45,49,53,58,63,65,69,73,75,79,85,88,91,94,97,99], 55, 88), UURLLL, 'Test 30');
test(getDirections([200,100,300,50,150,250,350,25,75,125,175,225,275,325,375,10,40,60,90,130,160,180,210,240,260,290,310,340,360,390], 10, 390), UUUURRRL, 'Test 31');
test(getDirections([1,2,3,null,null,4,5,6,7,null,null,null,null,8,9,null,null,null,null,10], 10, 8), , 'Test 32');
test(getDirections([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9], 6, 9), URR, 'Test 33');
test(getDirections([1,2,3,null,null,4,5,6,null,null,7,8,null,null,9,10,11,12,13,14,null,null,null,null,null,null,null,15,16,null,17,null,null,18], 6, 18), LLLLRL, 'Test 34');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 12, 24), L, 'Test 35');
test(getDirections([10,5,15,3,7,null,18,1,null,6], 3, 7), UR, 'Test 36');
test(getDirections([5,1,2,3,4,6,7,8,9,10,11,12,13,14,15], 8, 15), UUURRR, 'Test 37');
test(getDirections([3,5,1,6,2,0,8,null,null,7,4], 5, 1), UR, 'Test 38');
test(getDirections([30,15,45,10,20,40,50,5,12,null,25,35,48,null,null,null,18,null,null,null,null,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null], 5, 22), RL, 'Test 39');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,14,15,null,null,null,null,null,16,17,18,19,20], 8, 19), UUURLRL, 'Test 40');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 14, 11), UUULRR, 'Test 41');
test(getDirections([10,5,15,3,7,null,18,1,null,6], 1, 6), UURL, 'Test 42');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 16, 20), UUURLL, 'Test 43');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5, 11), R, 'Test 44');
test(getDirections([100,50,150,25,75,125,175,10,30,60,85,110,140,160,180], 85, 140), UUURLR, 'Test 45');
test(getDirections([1,2,3,null,4,null,null,5,6,null,null,null,null,7,8,null,null,null,null,9,10], 9, 10), , 'Test 46');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 10, 45), URLR, 'Test 47');
test(getDirections([15,10,20,8,12,18,25,6,9,11,13,16,19,22,28,5,7,null,null,null,null,null,null,14,null,null,null,null,null,17,null,null,null,null,null,null,21,null,null,null,null,null,null,null,null,null,null,null,null,24,null,null,null,null,null,null,26,null,27], 5, 27), , 'Test 48');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 12, 49), LR, 'Test 49');
test(getDirections([100,50,150,25,75,125,175,10,35,65,85,115,135,165,185], 10, 185), UUURRR, 'Test 50');
test(getDirections([5,1,2,3,9,null,6,4,null,null,null,null,8], 4, 9), UUR, 'Test 51');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,20,21,22,null,24,25,26,27,28], 20, 27), UUURRR, 'Test 52');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 19, 7), UUUURR, 'Test 53');
test(getDirections([5,1,2,3,null,6,4,8,9,null,null,12,13,null,null,16,17,null,null,null,18,19,20,null,null,null,null,22,23,24,25,26,27,28,null,null,null,null,null,null,null,null,null,null,null,30], 16, 28), LRL, 'Test 54');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7, 1), UU, 'Test 55');
test(getDirections([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 1, 10), RRRRRRRRR, 'Test 56');
test(getDirections([30,15,45,10,20,40,50,5,12,18,25,35,48,2,8,13,16,19,23,32,38,43,47,49,1,6,9,11,14,17,21,22,24,26,29,31,33,37,41,42,44,46,51], 42, 46), UURL, 'Test 57');
test(getDirections([1,2,3,4,null,5,6,7,null,8,9,10,null,null,11,12,null,null,13,14,null,null,15], 11, 15), R, 'Test 58');
test(getDirections([1,2,3,null,null,6,4,null,null,null,5], 5, 1), UUU, 'Test 59');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63], 10, 60), UUURRRLL, 'Test 60');
test(getDirections([10,5,15,3,7,13,18,1,null,6], 3, 6), URL, 'Test 61');
test(getDirections([10,5,15,3,7,12,20,1,4,6,8,null,17,16,25,0,2,null,null,null,null,null,null,9], 3, 25), UURRR, 'Test 62');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 16, 30), UUUURLLLL, 'Test 63');
test(getDirections([100,50,150,25,75,125,175,12,37,62,87,112,137,162,187,6,18,31,43,55,59,81,93,107,118,127,133,147,153,167,173,183,193,3,9,15,21,27,33,39,45,49,53,58,63,65,69,73,75,79,85,88,91,94,97,99,103,109,115,121,123,129,131,139,141,149,151,157,159,165,169,171,179,181,189,191,199], 69, 171), UUUULRLLL, 'Test 64');
test(getDirections([5,1,2,3,8,null,6,4,null,null,9,10,11], 4, 11), UUURRR, 'Test 65');
test(getDirections([5,1,2,3,6,7,4,null,null,null,null,null,null,8,9,10,11,null,null,12,13], 8, 13), LR, 'Test 66');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 19, 38), L, 'Test 67');
test(getDirections([1,2,3,4,5,6,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], 2, 14), URLRR, 'Test 68');
test(getDirections([3,5,1,6,2,0,8,null,null,7,4], 5, 0), URL, 'Test 69');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 10, 40), LL, 'Test 70');
test(getDirections([5,1,2,3,null,6,4,8,9,null,null,12,13,null,null,16,17,null,null,null,18,19,20,null,null,null,null,22,23,24,25,26,27,28,null,null,null,null,null,null,null,null,null,null,null,30,null,null,null,34,35,36,37,38,39,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,45], 34, 40), , 'Test 71');
test(getDirections([50,25,75,10,30,60,80,5,15,27,33,55,65,77,85], 5, 65), UUURLR, 'Test 72');
test(getDirections([5,2,8,1,3,6,9,null,null,4,7,null,null,null,null,10,11], 10, 11), UR, 'Test 73');
test(getDirections([10,5,15,3,7,null,18,null,4,null,null,null,null,null,8], 3, 7), UR, 'Test 74');
test(getDirections([5,1,2,3,null,6,4,8,9,null,null,12,13,null,null,16,17,null,null,null,18,19,20,null,null,null,null,22,23,24,25,26,27,28,null,null,null,null,null,null,null,null,null,null,null,30,null,null,null,34,35,36,37,38,39,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,45,null,null,null,49,50,51,52,53,54,55], 49, 55), , 'Test 75');
test(getDirections([1,2,3,null,null,null,4,null,5,6,null,null,null,null,null,7,8], 1, 8), , 'Test 76');
test(getDirections([2,1,3,null,null,4,5], 3, 5), R, 'Test 77');
test(getDirections([20,10,30,5,15,25,35,3,7,13,17,23,27,33,37,2,4,6,8,12,14,16,18,22,24,26,28,32,34,36,38], 8, 32), UUUURRLL, 'Test 78');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 8, 19), URR, 'Test 79');
test(getDirections([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null], 6, 7), URL, 'Test 80');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3, 14), RL, 'Test 81');
test(getDirections([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9], 1, 9), RRRR, 'Test 82');
test(getDirections([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 14, 12), UULL, 'Test 83');
test(getDirections([8,3,10,1,6,null,14,null,null,4,7,13], 7, 13), UUURRL, 'Test 84');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

