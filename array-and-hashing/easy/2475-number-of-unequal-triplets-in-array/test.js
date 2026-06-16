// Test: 2475. Number Of Unequal Triplets In Array
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { unequalTriplets } = require("./solution");

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

console.log("\n2475. Number Of Unequal Triplets In Array\n");

test(unequalTriplets([10,20,30,40,50,60]), 20, 'Test 1');
test(unequalTriplets([1,2,2,3,4]), 7, 'Test 2');
test(unequalTriplets([1,2,2,3,4,4,5,6,6,7]), 96, 'Test 3');
test(unequalTriplets([1,1,1,1,1]), 0, 'Test 4');
test(unequalTriplets([1,2,3]), 1, 'Test 5');
test(unequalTriplets([5,5,5,5,5,5,5,5,5,5]), 0, 'Test 6');
test(unequalTriplets([10,20,30,40,50]), 10, 'Test 7');
test(unequalTriplets([1,2,3,4,5]), 10, 'Test 8');
test(unequalTriplets([9,8,7,6,5,4,3,2,1,0]), 120, 'Test 9');
test(unequalTriplets([10,20,30,40,50,60,70,80,90,100]), 120, 'Test 10');
test(unequalTriplets([100,200,300,400,500,600,700,800,900,1000]), 120, 'Test 11');
test(unequalTriplets([4,4,2,4,3]), 3, 'Test 12');
test(unequalTriplets([1,3,5,7,9,11,13]), 35, 'Test 13');
test(unequalTriplets([1,2,3,4,5,6,7,8,9,10]), 120, 'Test 14');
test(unequalTriplets([999,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 4495, 'Test 15');
test(unequalTriplets([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81]), 1140, 'Test 16');
test(unequalTriplets([10,20,10,30,20,40,30,50,40,60]), 88, 'Test 17');
test(unequalTriplets([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 960, 'Test 18');
test(unequalTriplets([2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9]), 3584, 'Test 19');
test(unequalTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 19600, 'Test 20');
test(unequalTriplets([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,0,0]), 960, 'Test 21');
test(unequalTriplets([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100]), 15000, 'Test 22');
test(unequalTriplets([3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 252, 'Test 23');
test(unequalTriplets([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 225, 'Test 24');
test(unequalTriplets([5,1,4,1,2,1,5,2,5,4,5,2,1,4,2,1,5,4,2,1,5,4,2,1,4,2,1,5,4,2]), 1680, 'Test 25');
test(unequalTriplets([100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300]), 64, 'Test 26');
test(unequalTriplets([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 960, 'Test 27');
test(unequalTriplets([1,2,3,2,1,3,4,5,6,7,8,9,10]), 253, 'Test 28');
test(unequalTriplets([7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]), 455, 'Test 29');
test(unequalTriplets([7,8,9,7,8,9,7,8,9,7,8,9,7,8,9]), 125, 'Test 30');
test(unequalTriplets([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 1331, 'Test 31');
test(unequalTriplets([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 960, 'Test 32');
test(unequalTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3]), 243, 'Test 33');
test(unequalTriplets([1,1,2,2,3,3,4,4,5,5]), 80, 'Test 34');
test(unequalTriplets([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 35');
test(unequalTriplets([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), 2912, 'Test 36');
test(unequalTriplets([3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 2940, 'Test 37');
test(unequalTriplets([100,200,300,400,500,600,700,800,900,1000,1,2,3,4,5,6,7,8,9,10]), 1140, 'Test 38');
test(unequalTriplets([9, 8, 7, 6, 5, 4, 3, 2, 1]), 84, 'Test 39');
test(unequalTriplets([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 960, 'Test 40');
test(unequalTriplets([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 80, 'Test 41');
test(unequalTriplets([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 64, 'Test 42');
test(unequalTriplets([7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16]), 960, 'Test 43');
test(unequalTriplets([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,11,1,12,1,13,1,14,1,15,1,16,1,17,1,18,1,19,1,20,1,21,1,22,1,23,1,24,1,25,1,26,1,27,1,28,1,29,1,30,1,31,1,32,1,33,1,34,1,35,1,36,1,37,1,38,1,39,1,40,1,41,1,42,1,43,1,44,1,45,1,46,1,47,1,48,1,49,1,50]), 76048, 'Test 44');
test(unequalTriplets([5,5,5,1,2,3,4,4,4,4,5,5,5,5]), 118, 'Test 45');
test(unequalTriplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 455, 'Test 46');
test(unequalTriplets([1,2,1,3,2,4,3,5,4,6]), 88, 'Test 47');
test(unequalTriplets([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]), 640, 'Test 48');
test(unequalTriplets([5,5,5,5,5,5,5,5,5,5,1,2,3,4,6,7,8,9,10]), 444, 'Test 49');
test(unequalTriplets([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 161700, 'Test 50');
test(unequalTriplets([1,2,3,4,5,5,5,5,5,6,7,8,9,10,10,10,10,10,11,12]), 820, 'Test 51');
test(unequalTriplets([2,1,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 343, 'Test 52');
test(unequalTriplets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 120, 'Test 53');
test(unequalTriplets([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71]), 1140, 'Test 54');
test(unequalTriplets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 1140, 'Test 55');
test(unequalTriplets([10,10,20,20,30,30,40,40,50,50]), 80, 'Test 56');
test(unequalTriplets([1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,7,7,8,8,9,9,10,10,10]), 2530, 'Test 57');
test(unequalTriplets([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 58');
test(unequalTriplets([100, 200, 100, 200, 300, 400, 500, 300, 200, 100]), 68, 'Test 59');
test(unequalTriplets([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 60');
test(unequalTriplets([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150]), 4060, 'Test 61');
test(unequalTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 4060, 'Test 62');
test(unequalTriplets([1,2,2,3,3,3,4,4,4,4]), 50, 'Test 63');
test(unequalTriplets([100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200]), 0, 'Test 64');
test(unequalTriplets([50,50,51,51,52,52,53,53,54,54,55,55,56,56,57,57]), 448, 'Test 65');
test(unequalTriplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1140, 'Test 66');
test(unequalTriplets([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 2300, 'Test 67');
test(unequalTriplets([100,200,300,400,500,600,700,800,900,1000,900,800,700,600,500]), 390, 'Test 68');
test(unequalTriplets([1, 2, 2, 3, 4, 4, 5, 6, 6, 7]), 96, 'Test 69');
test(unequalTriplets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 455, 'Test 70');
test(unequalTriplets([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]), 270, 'Test 71');
test(unequalTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 1140, 'Test 72');
test(unequalTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 455, 'Test 73');
test(unequalTriplets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 0, 'Test 74');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

