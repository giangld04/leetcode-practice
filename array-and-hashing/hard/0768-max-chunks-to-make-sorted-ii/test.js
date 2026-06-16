// Test: 768. Max Chunks To Make Sorted Ii
// 149 test cases from LeetCodeDataset
// Run: node test.js

const { maxChunksToSorted } = require("./solution");

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

console.log("\n768. Max Chunks To Make Sorted Ii\n");

test(maxChunksToSorted([4,3,2,1,0]), 1, 'Test 1');
test(maxChunksToSorted([3,2,1,0,4,5,6,7,8,9]), 7, 'Test 2');
test(maxChunksToSorted([5,4,3,2,1]), 1, 'Test 3');
test(maxChunksToSorted([9,8,7,6,5,4,3,2,1,0]), 1, 'Test 4');
test(maxChunksToSorted([3,2,1,4,5]), 3, 'Test 5');
test(maxChunksToSorted([4,3,2,1,0,9,8,7,6,5]), 2, 'Test 6');
test(maxChunksToSorted([1,2,3,4,5]), 5, 'Test 7');
test(maxChunksToSorted([4,2,2,1,3]), 1, 'Test 8');
test(maxChunksToSorted([0,1,2,3,4]), 5, 'Test 9');
test(maxChunksToSorted([1,2,0,3,4,5]), 4, 'Test 10');
test(maxChunksToSorted([1,0,2,3,4]), 4, 'Test 11');
test(maxChunksToSorted([2,1,3,4,4]), 4, 'Test 12');
test(maxChunksToSorted([0,2,1,2,1]), 2, 'Test 13');
test(maxChunksToSorted([1,1,1,1,1]), 5, 'Test 14');
test(maxChunksToSorted([10,9,8,7,6,5,4,3,2,1]), 1, 'Test 15');
test(maxChunksToSorted([1,0,2,0,3]), 2, 'Test 16');
test(maxChunksToSorted([1,1,0,0,1]), 2, 'Test 17');
test(maxChunksToSorted([0,0,1,1,2,2,3,3]), 8, 'Test 18');
test(maxChunksToSorted([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16]), 9, 'Test 19');
test(maxChunksToSorted([10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1]), 1, 'Test 20');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 2, 'Test 21');
test(maxChunksToSorted([1,3,2,4,6,5,7,9,8,11,10,13,12,15,14,17,16,19,18,20]), 12, 'Test 22');
test(maxChunksToSorted([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 20, 'Test 23');
test(maxChunksToSorted([2,2,2,1,1,1,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]), 16, 'Test 24');
test(maxChunksToSorted([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 30, 'Test 25');
test(maxChunksToSorted([100,90,80,70,60,50,40,30,20,10,1,2,3,4,5,6,7,8,9,10]), 1, 'Test 26');
test(maxChunksToSorted([5,4,3,2,1,10,9,8,7,6,15,14,13,12,11,20,19,18,17,16]), 4, 'Test 27');
test(maxChunksToSorted([5,5,5,4,4,4,3,3,3,2,2,2,1,1,1]), 1, 'Test 28');
test(maxChunksToSorted([19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 1, 'Test 29');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 25, 'Test 30');
test(maxChunksToSorted([10,20,30,40,50,60,70,80,90,100,1,2,3,4,5,6,7,8,9,10]), 1, 'Test 31');
test(maxChunksToSorted([5,6,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 15, 'Test 32');
test(maxChunksToSorted([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 21, 'Test 33');
test(maxChunksToSorted([10,10,10,10,10,10,10,10,10,10,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,8,8,8,7,7,7,7,7,7,7,7,7,7]), 1, 'Test 34');
test(maxChunksToSorted([10,20,30,40,50,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29]), 1, 'Test 35');
test(maxChunksToSorted([5,4,3,2,1,6,7,8,9,10,1,2,3,4,5]), 1, 'Test 36');
test(maxChunksToSorted([3,2,1,6,5,4,9,8,7,12,11,10]), 4, 'Test 37');
test(maxChunksToSorted([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 38');
test(maxChunksToSorted([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 39');
test(maxChunksToSorted([1,3,2,4,5,6,7,8,9,10]), 9, 'Test 40');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,0]), 1, 'Test 41');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 30, 'Test 42');
test(maxChunksToSorted([9,8,7,6,5,4,3,2,1,0,10,11,12,13,14,15]), 7, 'Test 43');
test(maxChunksToSorted([1,3,2,4,5,7,6,9,8,10]), 7, 'Test 44');
test(maxChunksToSorted([3,2,1,4,5,6,0]), 1, 'Test 45');
test(maxChunksToSorted([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 46');
test(maxChunksToSorted([1,3,2,5,4,7,6,9,8,10,12,11,14,13,16,15,18,17,20,19]), 11, 'Test 47');
test(maxChunksToSorted([1,5,3,4,2,6,8,7,9,10,0,11]), 2, 'Test 48');
test(maxChunksToSorted([10,1,20,2,30,3,40,4,50,5,60,6,70,7,80,8,90,9,100,10]), 1, 'Test 49');
test(maxChunksToSorted([1,5,1,5,1,5,1,5,1,5,2,6,2,6,2,6,2,6,2,6,3,7,3,7,3,7,3,7,3,7]), 3, 'Test 50');
test(maxChunksToSorted([5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 1, 'Test 51');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10]), 11, 'Test 52');
test(maxChunksToSorted([1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18,20]), 3, 'Test 53');
test(maxChunksToSorted([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 54');
test(maxChunksToSorted([1,2,0,3,4,5,6]), 5, 'Test 55');
test(maxChunksToSorted([5,9,3,8,7,2,4,10,1,6]), 1, 'Test 56');
test(maxChunksToSorted([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 12, 'Test 57');
test(maxChunksToSorted([1,2,3,0,4,5,6,7,8,9]), 7, 'Test 58');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]), 1, 'Test 59');
test(maxChunksToSorted([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 30, 'Test 60');
test(maxChunksToSorted([2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 61');
test(maxChunksToSorted([1,3,2,4,5,7,6,8,10,9]), 7, 'Test 62');
test(maxChunksToSorted([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 16, 'Test 63');
test(maxChunksToSorted([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3]), 30, 'Test 64');
test(maxChunksToSorted([1,10,2,9,3,8,4,7,5,6]), 2, 'Test 65');
test(maxChunksToSorted([5,3,2,4,1,6,7]), 3, 'Test 66');
test(maxChunksToSorted([3,1,2,4,6,5,7]), 4, 'Test 67');
test(maxChunksToSorted([1,2,0,3,4,5,6,7,8,9]), 8, 'Test 68');
test(maxChunksToSorted([1,0,2,3,4,5,6,7,8,9]), 9, 'Test 69');
test(maxChunksToSorted([4,5,6,0,1,2,3]), 1, 'Test 70');
test(maxChunksToSorted([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 3, 'Test 71');
test(maxChunksToSorted([1,3,5,7,9,2,4,6,8,10,12,14,16,18,20,11,13,15,17,19]), 4, 'Test 72');
test(maxChunksToSorted([9,7,5,3,1,2,4,6,8,10]), 2, 'Test 73');
test(maxChunksToSorted([2,1,1,1,3,4,4,4]), 5, 'Test 74');
test(maxChunksToSorted([20,10,30,20,40,30,50,40,60,50,70,60,80,70,90,80,100,90,110,100]), 10, 'Test 75');
test(maxChunksToSorted([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 76');
test(maxChunksToSorted([1,2,3,4,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5,6,7,8,9]), 7, 'Test 77');
test(maxChunksToSorted([1,2,3,1,2,3,1,2,3,1]), 2, 'Test 78');
test(maxChunksToSorted([0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9]), 40, 'Test 79');
test(maxChunksToSorted([5,4,3,2,1,6,7,8,9,10,1,2,3,4,5,10,9,8,7,6]), 1, 'Test 80');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), 2, 'Test 81');
test(maxChunksToSorted([1,2,3,4,0,5]), 2, 'Test 82');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]), 100, 'Test 83');
test(maxChunksToSorted([1,5,3,4,2,6,8,7,9,10]), 6, 'Test 84');
test(maxChunksToSorted([5,0,3,4,1,2]), 1, 'Test 85');
test(maxChunksToSorted([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 15, 'Test 86');
test(maxChunksToSorted([10,9,8,7,6,5,4,3,2,1,0]), 1, 'Test 87');
test(maxChunksToSorted([1,0,2,3,4,5]), 5, 'Test 88');
test(maxChunksToSorted([2,3,1,4,5,3,7,6,8,9,10,8,12,11,14,13,16,15,18,17,20,19,22,21,24,23,26,25,28,27,30,29,32,31,34,33,36,35,38,37,40,39,42,41,44,43,46,45,48,47,50,49,52,51,54,53,56,55,58,57,60,59,62,61,64,63,66,65,68,67,70,69,72,71,74,73,76,75,78,77,80,79,82,81,84,83,86,85,88,87,90,89,92,91,94,93,96,95,98,97,100,99]), 50, 'Test 89');
test(maxChunksToSorted([7,5,2,3,1,4,6,8]), 2, 'Test 90');
test(maxChunksToSorted([3,2,1,6,5,4,9,8,7,10]), 4, 'Test 91');
test(maxChunksToSorted([2,1,4,3,6,5,8,7,10,9,12,11,14,13,16,15]), 8, 'Test 92');
test(maxChunksToSorted([1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,0,0,0]), 1, 'Test 93');
test(maxChunksToSorted([5,2,6,3,7,4,8,1,9,0,11,12,13,14,15,16,17,18,19,20]), 11, 'Test 94');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 3, 'Test 95');
test(maxChunksToSorted([5,5,4,4,3,3,2,2,1,1,0,0,1,1,2,2,3,3,4,4,5,5]), 3, 'Test 96');
test(maxChunksToSorted([1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 97');
test(maxChunksToSorted([1,5,2,6,3,7,4,8,9,10,11,12,13,14,15]), 10, 'Test 98');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28,29,30]), 21, 'Test 99');
test(maxChunksToSorted([2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 100');
test(maxChunksToSorted([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 2, 'Test 101');
test(maxChunksToSorted([5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 21, 'Test 102');
test(maxChunksToSorted([1,2,3,4,3,2,1,4,5,6,7,8,9,10,11,12,13,14,15,16]), 15, 'Test 103');
test(maxChunksToSorted([4,1,2,3,5,6,7,8,9,0]), 1, 'Test 104');
test(maxChunksToSorted([2,3,1,5,4,8,7,10,9,6]), 3, 'Test 105');
test(maxChunksToSorted([1,2,3,2,1,2,3,4,5,4,3,2,1]), 2, 'Test 106');
test(maxChunksToSorted([0,2,1,4,3,6,5,8,7,10,9]), 6, 'Test 107');
test(maxChunksToSorted([5,4,4,3,3,3,2,2,2,1,1,1,0,0,0,9,8,8,7,7,7,6,6,6,5,5,5,4,4,4]), 1, 'Test 108');
test(maxChunksToSorted([3,2,1,4,6,5,9,8,7,10]), 5, 'Test 109');
test(maxChunksToSorted([1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 110');
test(maxChunksToSorted([3,2,1,4,5,6,7,8,9,10]), 8, 'Test 111');
test(maxChunksToSorted([9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,8,8,8,7,7,7,7,7,7,7,7,7,7]), 1, 'Test 112');
test(maxChunksToSorted([1,0,2,3,5,4,6,7,8,9]), 8, 'Test 113');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 2, 'Test 114');
test(maxChunksToSorted([5,1,4,2,3,8,6,10,7,9]), 2, 'Test 115');
test(maxChunksToSorted([1,3,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 17, 'Test 116');
test(maxChunksToSorted([1,3,5,7,9,11,13,15,17,19,21,23,25,2,4,6,8,10,12,14,16,18,20,22,24]), 2, 'Test 117');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 3, 'Test 118');
test(maxChunksToSorted([1,1,1,2,2,2,3,3,3,0]), 1, 'Test 119');
test(maxChunksToSorted([1,1,1,1,1,1,1,1,1,1,1,1]), 12, 'Test 120');
test(maxChunksToSorted([1,10,2,9,3,8,4,7,5,6,11,20,12,19,13,18,14,17,15,16]), 4, 'Test 121');
test(maxChunksToSorted([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,0,0]), 1, 'Test 122');
test(maxChunksToSorted([4,3,2,1,5,6,7,8,9,10,11,12,13,14,15]), 12, 'Test 123');
test(maxChunksToSorted([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,20]), 11, 'Test 124');
test(maxChunksToSorted([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 20, 'Test 125');
test(maxChunksToSorted([1,3,2,4,5,6,7,8,9,10,2,4,3,5,6,7,8,9,10,11]), 4, 'Test 126');
test(maxChunksToSorted([9,8,7,6,5,4,3,2,1,0,11,10,9,8,7,6]), 1, 'Test 127');
test(maxChunksToSorted([1,0,3,2,5,4,7,6,9,8]), 5, 'Test 128');
test(maxChunksToSorted([1,1,2,2,3,3,4,4,5,5]), 10, 'Test 129');
test(maxChunksToSorted([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 1, 'Test 130');
test(maxChunksToSorted([1,5,3,4,2,6,8,7,9,10,11,15,13,14,12,16,18,17,19,20]), 12, 'Test 131');
test(maxChunksToSorted([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 132');
test(maxChunksToSorted([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 20, 'Test 133');
test(maxChunksToSorted([1,2,3,4,5,0,6]), 2, 'Test 134');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 135');
test(maxChunksToSorted([4,3,2,1,5,6,7,8,9,10]), 7, 'Test 136');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 3, 'Test 137');
test(maxChunksToSorted([2,2,2,2,2,2,2,2,2,2]), 10, 'Test 138');
test(maxChunksToSorted([9,7,5,3,1,8,6,4,2,10]), 2, 'Test 139');
test(maxChunksToSorted([5,3,2,4,1,6,8,7,9,11,10,13,15,14,16,17]), 9, 'Test 140');
test(maxChunksToSorted([1,3,2,4,7,6,5,8,9,0]), 1, 'Test 141');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 142');
test(maxChunksToSorted([8,7,6,5,4,3,2,1,0,16,15,14,13,12,11,10,9]), 2, 'Test 143');
test(maxChunksToSorted([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 27, 'Test 144');
test(maxChunksToSorted([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 3, 'Test 145');
test(maxChunksToSorted([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), 15, 'Test 146');
test(maxChunksToSorted([5,5,5,5,5,5,5,5,5,5]), 10, 'Test 147');
test(maxChunksToSorted([9,8,7,6,5,4,3,2,1,0,11,12,13,14,15,16,17,18,19,20]), 11, 'Test 148');
test(maxChunksToSorted([1,2,3,4,0,5,6,7,8,9]), 6, 'Test 149');

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
