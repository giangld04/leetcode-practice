// Test: 446. Arithmetic Slices Ii Subsequence
// 164 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfArithmeticSlices } = require("./solution");

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

console.log("\n446. Arithmetic Slices Ii Subsequence\n");

test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15]), 29, 'Test 1');
test(numberOfArithmeticSlices([1,2,3,8,9]), 1, 'Test 2');
test(numberOfArithmeticSlices([2,4,6,8,10]), 7, 'Test 3');
test(numberOfArithmeticSlices([1,3,5,7,9]), 7, 'Test 4');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 5');
test(numberOfArithmeticSlices([1]), 0, 'Test 6');
test(numberOfArithmeticSlices([10,20,30,40,50]), 7, 'Test 7');
test(numberOfArithmeticSlices([10,20,30,40,50,60,70,80,90,100]), 55, 'Test 8');
test(numberOfArithmeticSlices([1,1,2,5,7]), 0, 'Test 9');
test(numberOfArithmeticSlices([0,2000000000,-294967296,-294967296]), 0, 'Test 10');
test(numberOfArithmeticSlices([1,2,3,4,5]), 7, 'Test 11');
test(numberOfArithmeticSlices([10,9,4,6,8,4,3,9,1,3,5,7]), 10, 'Test 12');
test(numberOfArithmeticSlices([1,2,3,8,13,18]), 4, 'Test 13');
test(numberOfArithmeticSlices([1,3,5,7,9,11]), 12, 'Test 14');
test(numberOfArithmeticSlices([1,1,1,1,1,1,1]), 99, 'Test 15');
test(numberOfArithmeticSlices([1,2,3,5,8,13,21,34]), 6, 'Test 16');
test(numberOfArithmeticSlices([7,7,7,7,7]), 16, 'Test 17');
test(numberOfArithmeticSlices([1,2,3,5,8,13,21]), 5, 'Test 18');
test(numberOfArithmeticSlices([1,1,1,1,1,1,1,1,1,1]), 968, 'Test 19');
test(numberOfArithmeticSlices([1,2,3,4,5,6]), 12, 'Test 20');
test(numberOfArithmeticSlices([1,2]), 0, 'Test 21');
test(numberOfArithmeticSlices([3,3,3,3,3,3,3]), 99, 'Test 22');
test(numberOfArithmeticSlices([1,2,4,8,16,32,64]), 0, 'Test 23');
test(numberOfArithmeticSlices([1,2,3]), 1, 'Test 24');
test(numberOfArithmeticSlices([1,2,3,8,9,10]), 2, 'Test 25');
test(numberOfArithmeticSlices([3,1,2,2,4,5]), 1, 'Test 26');
test(numberOfArithmeticSlices([3,1,2,5,7]), 1, 'Test 27');
test(numberOfArithmeticSlices([1,7,10,15,27,29]), 1, 'Test 28');
test(numberOfArithmeticSlices([1,2,1,2,1]), 1, 'Test 29');
test(numberOfArithmeticSlices([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]), 9, 'Test 30');
test(numberOfArithmeticSlices([1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000]), 968, 'Test 31');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 194, 'Test 32');
test(numberOfArithmeticSlices([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 55, 'Test 33');
test(numberOfArithmeticSlices([1,2,3,6,9,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96]), 198, 'Test 34');
test(numberOfArithmeticSlices([1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 55, 'Test 35');
test(numberOfArithmeticSlices([3,6,9,12,15,18,21,24,27,30,33,36]), 90, 'Test 36');
test(numberOfArithmeticSlices([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 0, 'Test 37');
test(numberOfArithmeticSlices([1,2,3,6,12,24,48,96,192,384,768,1536,3072,6144,12288]), 1, 'Test 38');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 602, 'Test 39');
test(numberOfArithmeticSlices([10,7,4,3,2,1,-1,-2,-3,-4]), 20, 'Test 40');
test(numberOfArithmeticSlices([1000,990,980,970,960,950,940,930,920,910,900,890,880,870,860,850,840,830,820,810,800]), 390, 'Test 41');
test(numberOfArithmeticSlices([1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52]), 263, 'Test 42');
test(numberOfArithmeticSlices([1, 2, 4, 8, 16, 32, 64, 128, 256]), 0, 'Test 43');
test(numberOfArithmeticSlices([1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]), 13, 'Test 44');
test(numberOfArithmeticSlices([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 164, 'Test 45');
test(numberOfArithmeticSlices([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33]), 72, 'Test 46');
test(numberOfArithmeticSlices([1, 3, 6, 10, 15, 21, 28, 36, 45]), 1, 'Test 47');
test(numberOfArithmeticSlices([-5, -1, 3, 7, 11, 15, 19, 23]), 29, 'Test 48');
test(numberOfArithmeticSlices([1,7,13,19,25,31,37,43,49,55]), 55, 'Test 49');
test(numberOfArithmeticSlices([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 72, 'Test 50');
test(numberOfArithmeticSlices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1048365, 'Test 51');
test(numberOfArithmeticSlices([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]), 55, 'Test 52');
test(numberOfArithmeticSlices([10,10,10,20,20,20,30,30,30,40,40,40]), 139, 'Test 53');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 164, 'Test 54');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 344, 'Test 55');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 946, 'Test 56');
test(numberOfArithmeticSlices([5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35]), 72, 'Test 57');
test(numberOfArithmeticSlices([1,2,2,3,3,3,4,4,4,4]), 60, 'Test 58');
test(numberOfArithmeticSlices([1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91]), 72, 'Test 59');
test(numberOfArithmeticSlices([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 1152921504606845145, 'Test 60');
test(numberOfArithmeticSlices([1,3,5,7,9,12,15,18,21,24]), 22, 'Test 61');
test(numberOfArithmeticSlices([5,8,11,14,17,20,23,26,29,32,35,38,41,44,47]), 164, 'Test 62');
test(numberOfArithmeticSlices([5,10,15,20,25,30,35,40,45,50]), 55, 'Test 63');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 604, 'Test 64');
test(numberOfArithmeticSlices([1,2,4,8,16,32,64,128,256,512]), 0, 'Test 65');
test(numberOfArithmeticSlices([10, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38]), 55, 'Test 66');
test(numberOfArithmeticSlices([1,7,10,15,27,29,33,51]), 3, 'Test 67');
test(numberOfArithmeticSlices([1, 2, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]), 100, 'Test 68');
test(numberOfArithmeticSlices([1, 3, 5, 9, 15, 25, 39, 57, 79, 105, 135]), 5, 'Test 69');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 164, 'Test 70');
test(numberOfArithmeticSlices([10,12,14,18,22,26,30,34,38,42,46]), 56, 'Test 71');
test(numberOfArithmeticSlices([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), 55, 'Test 72');
test(numberOfArithmeticSlices([5,7,9,11,13,15,17,19,21,23,25]), 72, 'Test 73');
test(numberOfArithmeticSlices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1981, 'Test 74');
test(numberOfArithmeticSlices([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6]), 4172, 'Test 75');
test(numberOfArithmeticSlices([1,3,5,7,9,10,12,14,16,18,20,22,24,26,28]), 62, 'Test 76');
test(numberOfArithmeticSlices([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 65294, 'Test 77');
test(numberOfArithmeticSlices([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 1048365, 'Test 78');
test(numberOfArithmeticSlices([1, 3, 6, 10, 15, 21, 28, 36, 45, 55]), 2, 'Test 79');
test(numberOfArithmeticSlices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 32647, 'Test 80');
test(numberOfArithmeticSlices([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 4256, 'Test 81');
test(numberOfArithmeticSlices([1, 7, 10, 15, 27, 29, 33, 37, 41, 45, 49]), 13, 'Test 82');
test(numberOfArithmeticSlices([5, 8, 11, 14, 17, 20, 23, 26, 29, 32]), 55, 'Test 83');
test(numberOfArithmeticSlices([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 160, 'Test 84');
test(numberOfArithmeticSlices([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4]), 164, 'Test 85');
test(numberOfArithmeticSlices([10, 20, 10, 20, 10, 20, 10, 20, 10, 20]), 32, 'Test 86');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 90, 'Test 87');
test(numberOfArithmeticSlices([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57]), 164, 'Test 88');
test(numberOfArithmeticSlices([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 1936, 'Test 89');
test(numberOfArithmeticSlices([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40]), 137, 'Test 90');
test(numberOfArithmeticSlices([1,2,3,5,8,13,21,34,55,89]), 8, 'Test 91');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]), 604, 'Test 92');
test(numberOfArithmeticSlices([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]), 772, 'Test 93');
test(numberOfArithmeticSlices([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77]), 344, 'Test 94');
test(numberOfArithmeticSlices([1,2,4,8,16,32,64,128,256,512,1024]), 0, 'Test 95');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1294, 'Test 96');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35]), 263, 'Test 97');
test(numberOfArithmeticSlices([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 344, 'Test 98');
test(numberOfArithmeticSlices([1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58]), 344, 'Test 99');
test(numberOfArithmeticSlices([1, 2, 4, 6, 8, 10, 14, 16, 18, 20, 24, 26, 28, 30, 34, 36, 38, 40]), 72, 'Test 100');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 344, 'Test 101');
test(numberOfArithmeticSlices([1,2,3,5,7,9,11,13,15,17,19,21,23,25]), 114, 'Test 102');
test(numberOfArithmeticSlices([1,2,3,6,9,12,15,18,21,24,27,30]), 56, 'Test 103');
test(numberOfArithmeticSlices([-2, -1, 1, 4, 8, 13, 19, 26, 34, 43, 53, 64]), 4, 'Test 104');
test(numberOfArithmeticSlices([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]), 8, 'Test 105');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 946, 'Test 106');
test(numberOfArithmeticSlices([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 391, 'Test 107');
test(numberOfArithmeticSlices([10, 20, 30, 40, 50, 60, 70, 80, 90]), 41, 'Test 108');
test(numberOfArithmeticSlices([2, 4, 6, 8, 12, 14, 16, 20, 22, 24, 28]), 32, 'Test 109');
test(numberOfArithmeticSlices([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), 72, 'Test 110');
test(numberOfArithmeticSlices([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 28, 'Test 111');
test(numberOfArithmeticSlices([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 164, 'Test 112');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), 72, 'Test 113');
test(numberOfArithmeticSlices([1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54]), 264, 'Test 114');
test(numberOfArithmeticSlices([10, 7, 4, 1, -2, -5, -8, -11, -14]), 41, 'Test 115');
test(numberOfArithmeticSlices([5, 10, 15, 20, 25, 30, 35, 40, 45]), 41, 'Test 116');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 117');
test(numberOfArithmeticSlices([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]), 364, 'Test 118');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), 113, 'Test 119');
test(numberOfArithmeticSlices([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91]), 3, 'Test 120');
test(numberOfArithmeticSlices([1,3,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37]), 355, 'Test 121');
test(numberOfArithmeticSlices([1,7,13,19,25,31,37,43,49,55,61,67,73]), 113, 'Test 122');
test(numberOfArithmeticSlices([1,7,13,19,25,31,37,43,49,55,61]), 72, 'Test 123');
test(numberOfArithmeticSlices([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1]), 57, 'Test 124');
test(numberOfArithmeticSlices([1, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]), 48, 'Test 125');
test(numberOfArithmeticSlices([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768]), 0, 'Test 126');
test(numberOfArithmeticSlices([100,90,80,70,60,50,40,30,20,10,0,-10,-20,-30,-40]), 164, 'Test 127');
test(numberOfArithmeticSlices([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 968, 'Test 128');
test(numberOfArithmeticSlices([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 90, 'Test 129');
test(numberOfArithmeticSlices([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]), 25208, 'Test 130');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 344, 'Test 131');
test(numberOfArithmeticSlices([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31]), 72, 'Test 132');
test(numberOfArithmeticSlices([100, 200, 300, 400, 500, 600, 700, 800]), 29, 'Test 133');
test(numberOfArithmeticSlices([1, 7, 13, 19, 25, 31, 37, 43, 49]), 41, 'Test 134');
test(numberOfArithmeticSlices([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45]), 90, 'Test 135');
test(numberOfArithmeticSlices([10,7,4,3,2,1,-1,-4,-7,-10]), 16, 'Test 136');
test(numberOfArithmeticSlices([3,6,9,12,15,18,21,24,27,30]), 55, 'Test 137');
test(numberOfArithmeticSlices([1,10,19,28,37,46,55,64,73,82,91,100]), 90, 'Test 138');
test(numberOfArithmeticSlices([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 17, 'Test 139');
test(numberOfArithmeticSlices([1,3,5,3,1,-1,-3,-5,-3,-1,1,3,5]), 53, 'Test 140');
test(numberOfArithmeticSlices([10,12,14,16,18,20,22,24,26,28,30]), 72, 'Test 141');
test(numberOfArithmeticSlices([3,6,9,12,15,18,21,24,27,30,33,36,39]), 113, 'Test 142');
test(numberOfArithmeticSlices([1, 2, 3, 6, 9, 12, 15, 18, 21]), 21, 'Test 143');
test(numberOfArithmeticSlices([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 1584, 'Test 144');
test(numberOfArithmeticSlices([1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9]), 323, 'Test 145');
test(numberOfArithmeticSlices([1, 2, 3, 2, 1, 0, -1, -2, -1, 0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3]), 1370, 'Test 146');
test(numberOfArithmeticSlices([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 55, 'Test 147');
test(numberOfArithmeticSlices([3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), 55, 'Test 148');
test(numberOfArithmeticSlices([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 0, 'Test 149');
test(numberOfArithmeticSlices([3,3,3,4,5,6,7,8,9,10,11,12,13,14,15]), 160, 'Test 150');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15,17,19,21]), 72, 'Test 151');
test(numberOfArithmeticSlices([3, 6, 9, 15, 18, 21, 27, 30, 33, 39, 42, 45]), 40, 'Test 152');
test(numberOfArithmeticSlices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 968, 'Test 153');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 6, 7]), 165, 'Test 154');
test(numberOfArithmeticSlices([5,10,15,25,35,45,55,65,75,85]), 42, 'Test 155');
test(numberOfArithmeticSlices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 32647, 'Test 156');
test(numberOfArithmeticSlices([1, 7, 10, 15, 27, 29, 33, 18]), 1, 'Test 157');
test(numberOfArithmeticSlices([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]), 5029, 'Test 158');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]), 90, 'Test 159');
test(numberOfArithmeticSlices([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45]), 164, 'Test 160');
test(numberOfArithmeticSlices([100,200,300,400,500,600,700,800,900,1000]), 55, 'Test 161');
test(numberOfArithmeticSlices([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 164, 'Test 162');
test(numberOfArithmeticSlices([1,2,4,7,11,16,22,29,37,46,56,67,79]), 4, 'Test 163');
test(numberOfArithmeticSlices([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 32647, 'Test 164');

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
