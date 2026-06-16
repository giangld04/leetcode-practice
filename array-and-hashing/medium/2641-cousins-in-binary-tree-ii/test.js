// Test: 2641. Cousins In Binary Tree Ii
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { replaceValueInTree } = require("./solution");

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

console.log("\n2641. Cousins In Binary Tree Ii\n");

test(replaceValueInTree([1,2,3,4,5,6,7]), [0, 0, 0, 13, 13, 9, 9], 'Test 1');
test(replaceValueInTree([5,4,9,1,10,null,7]), [0, 0, 0, 7, 7, null, 11], 'Test 2');
test(replaceValueInTree([10,5,5,null,null,6,6,null,null,7,7]), [0, 0, 0, null, null, 0, 0, null, null, 0, 0], 'Test 3');
test(replaceValueInTree([3,1,2]), [0, 0, 0], 'Test 4');
test(replaceValueInTree([1]), [0], 'Test 5');
test(replaceValueInTree([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,16,17]), [0, 0, 0, 13, 13, 9, 9, 46, 46, 42, 42, 38, 38, null, null, 0, 0], 'Test 6');
test(replaceValueInTree([5,4,9,1,10,null,7,11,null,12,13,null,14,null,15]), [0, 0, 0, 7, 7, null, 11, 39, null, 25, 25, null, 36, null, 0], 'Test 7');
test(replaceValueInTree([1,null,2,null,3,null,4,null,5]), [0, null, 0, null, 0, null, 0, null, 0], 'Test 8');
test(replaceValueInTree([3,1,2,4,5,6,7,8,9,10,11,12,13,14,15]), [0, 0, 0, 13, 13, 9, 9, 75, 75, 71, 71, 67, 67, 63, 63], 'Test 9');
test(replaceValueInTree([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0], 'Test 10');
test(replaceValueInTree([7,3,9,null,8,10,null,11,null,null,12,null,13,null,14]), [0, 0, 0, null, 10, 8, null, 12, null, null, 11, null, 14, null, 13], 'Test 11');
test(replaceValueInTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [0, 0, 0, 13, 13, 9, 9, 75, 75, 71, 71, 67, 67, 63, 63, 172, 172, 168, 168, 164, 164, 160, 160, 156, 156], 'Test 12');
test(replaceValueInTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), [0, 0, 0, 13, 13, 9, 9, 75, 75, 71, 71, 67, 67, 63, 63], 'Test 13');
test(replaceValueInTree([1,2,2,null,3,null,3,null,4,null,4]), [0, 0, 0, null, 3, null, 3, null, 4, null, 4], 'Test 14');
test(replaceValueInTree([7,3,11,2,5,8,13,null,null,4,6,9,12,null,null,null,null,null,10]), [0, 0, 0, 21, 21, 7, 7, null, null, 21, 21, 10, 10, null, null, null, null, null, 0], 'Test 15');
test(replaceValueInTree([1,null,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10]), [0, null, 0], 'Test 16');
test(replaceValueInTree([10,5,5,4,4,4,4,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), [0, 0, 0, 8, 8, 8, 8, 18, 18, 18, 18, 18, 18, 18, 18, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 28], 'Test 17');
test(replaceValueInTree([5,4,9,1,10,null,7,8,null,null,null,9,null,null,10]), [0, 0, 0, 7, 7, null, 11, 9, null, null, null, 8, null, null, 0], 'Test 18');
test(replaceValueInTree([1,2,null,4,5,null,null,8,9,null,12,null,15,null,null,null,null,32,null,null,64,null,null,128]), [0, 0, null, 0, 0, null, null, 0, 0, null, 15, null, 12], 'Test 19');
test(replaceValueInTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), [0, 0, 0, 13, 13, 9, 9, 75, 75, 71, 71, 67, 67, 63, 63, 343, 343, 339, 339, 335, 335, 331, 331, 327, 327, 323, 323, 319, 319, 315, 315, 259, 259, 255, 255, 251, 251, 247, 247, 284], 'Test 20');
test(replaceValueInTree([10,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25]), [0, 0, 0, 14, 14, 12, 12, 60, 60, 58, 58, 56, 56, 54, 54, 224, 224, 222, 222, 220, 220, 218, 218, 216, 216, 214, 214, 212, 212, 210, 210, 230, 230, 228, 228, 226, 226, 224, 224, 222, 222, 220, 220], 'Test 21');
test(replaceValueInTree([1,2,3,4,null,6,7,8,9,null,null,12,13,null,null,16,17]), [0, 0, 0, 13, null, 4, 4, 25, 25, null, null, 17, 17, null, null, 0, 0], 'Test 22');
test(replaceValueInTree([1,2,3,4,5,null,null,8,9,10,11,null,null,16,17,18,19,20,null,null,25,26,27,28,29,30,null,null,35,36,37,38,39,40,null,null,45,46,47,48,49,50]), [0, 0, 0, 0, 0, null, null, 21, 21, 17, 17, null, null, 57, 57, 53, 53, 70, null, null, 175, 147, 147, 143, 143, 170, null, null, 165, 402, 402, 398, 398, 435, null, null, 430, 382, 382, 378, 378, 425], 'Test 23');
test(replaceValueInTree([1,2,3,null,5,null,7,8,null,10,null,null,13,null,null,16,null,null,null,null,null,19]), [0, 0, 0, null, 7, null, 5, 10, null, 8, null, null, 0, null, null, 0], 'Test 24');
test(replaceValueInTree([1,2,null,4,5,null,null,8,9,10,11,12,13,14,15]), [0, 0, null, 0, 0, null, null, 0, 0, 25, 25, 21, 21, 0, 0], 'Test 25');
test(replaceValueInTree([1,2,3,null,5,null,7,null,null,10,null,null,14]), [0, 0, 0, null, 7, null, 5, null, null, 0, null, null, 0], 'Test 26');
test(replaceValueInTree([1,2,3,4,5,6,7,8,null,null,null,null,null,null,9]), [0, 0, 0, 13, 13, 9, 9, 9, null, null, null, null, null, null, 8], 'Test 27');
test(replaceValueInTree([1,2,3,4,5,6,7,8,null,10,null,12,null,14,null,16,null,18]), [0, 0, 0, 13, 13, 9, 9, 36, null, 34, null, 32, null, 30, null, 18, null, 16], 'Test 28');
test(replaceValueInTree([1,2,3,4,5,6,null,7,8,9,null,10,11,null,12]), [0, 0, 0, 6, 6, 9, null, 30, 30, 36, null, 24, 24, null, 0], 'Test 29');
test(replaceValueInTree([1,2,3,4,null,6,null,8,9,null,12,null,15,null,null,null,null,32,null,null,64]), [0, 0, 0, 6, null, 4, null, 12, 12, null, 17, null, 0, null, null, null, null, 0, null, null, 0], 'Test 30');
test(replaceValueInTree([100,50,50,25,25,25,25,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), [0, 0, 0, 50, 50, 50, 50, 99, 99, 95, 95, 91, 91, 87, 87, 399, 399, 395, 395, 391, 391, 387, 387, 383, 383, 379, 379, 375, 375, 371, 371, 572, 572, 568, 568, 564, 564, 560, 560, 556, 556, 552, 552, 548, 548, 595], 'Test 31');
test(replaceValueInTree([100,50,150,25,75,125,175,10,30,60,90,110,140,160,190]), [0, 0, 0, 300, 300, 100, 100, 750, 750, 640, 640, 540, 540, 440, 440], 'Test 32');
test(replaceValueInTree([50,25,75,12,38,63,88,6,18,30,45,55,65,80,95,3,9,15,21,27,33,39,42,48,51,57,60,66,69,72,78,81,84,87,90,93,96,99]), [0, 0, 0, 151, 151, 50, 50, 370, 370, 319, 319, 274, 274, 219, 219, 678, 678, 654, 654, 630, 630, 609, 609, 591, 591, 573, 573, 555, 555, 540, 540, 465, 465, 453, 453, 441, 441, 531], 'Test 33');
test(replaceValueInTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [0, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0], 'Test 34');
test(replaceValueInTree([3,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18]), [0, 0, 0, 15, 15, 11, 11, 81, 81, 77, 77, 73, 73, 69, 69, 0, 0], 'Test 35');
test(replaceValueInTree([5,4,9,1,10,null,7,11,null,null,null,null,12]), [0, 0, 0, 7, 7, null, 11, 12, null, null, null, null, 11], 'Test 36');
test(replaceValueInTree([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), [0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0], 'Test 37');
test(replaceValueInTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]), [0, 0, 0, 13, 13, 9, 9, 75, 75, 71, 71, 67, 67, 63, 63, 343, 343, 339, 339, 335, 335, 331, 331, 327, 327, 323, 323, 319, 319, 315, 315, 1455, 1455, 1451, 1451, 1447, 1447, 1443, 1443, 1439, 1439, 1435, 1435, 1431, 1431, 1427, 1427, 1423, 1423, 1419, 1419, 1415, 1415, 1411, 1411, 1407, 1407, 1403, 1403, 1399, 1399, 1395, 1395], 'Test 38');
test(replaceValueInTree([25,12,38,6,18,26,40,3,9,15,21,27,41,null,null,1,5,8,14,17,20,22,25,28,39,42,null,null,null,null,null,2,4,7,10,13,16,19,23,24,26,30,32,35,43,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), [0, 0, 0, 66, 66, 24, 24, 104, 104, 80, 80, 48, 48, null, null, 215, 215, 199, 199, 184, 184, 174, 174, 154, 154, 179, null, null, null, null, null, 278, 278, 267, 267, 255, 255, 242, 242, 234, 234, 222, 222, 206, 206], 'Test 39');
test(replaceValueInTree([20,10,30,5,15,25,35,1,4,6,14,21,26,31,36,null,3,7,8,11,13,16,19,22,24,27,29,32,33,34,null,null,null,null,null,2,9,10,12,15,17,18,20,23,28,30,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), [0, 0, 0, 60, 60, 20, 20, 134, 134, 119, 119, 92, 92, 72, 72, null, 275, 263, 263, 254, 254, 243, 243, 232, 232, 222, 222, 213, 213, 244, null, null, null, null, null, 173, 173, 162, 162, 152, 152, 146, 146, 133, 133, 154], 'Test 40');
test(replaceValueInTree([8,3,10,1,6,null,14,2,null,4,5,null,null,11,12]), [0, 0, 0, 14, 14, null, 7, 9, null, 2, 2, null, null, 0, 0], 'Test 41');
test(replaceValueInTree([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0], 'Test 42');
test(replaceValueInTree([1,2,3,null,4,null,5,null,null,6,null,null,7,null,8,null,null,9,null,null,10]), [0, 0, 0, null, 5, null, 4, null, null, 0, null, null, 0, null, 0], 'Test 43');
test(replaceValueInTree([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0], 'Test 44');
test(replaceValueInTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [0, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0], 'Test 45');
test(replaceValueInTree([1,null,2,null,null,3,null,null,null,4,null,null,null,5,null,null,null,6,null,null,null,7]), [0, null, 0], 'Test 46');
test(replaceValueInTree([1,2,null,4,5,6,7,8,9,10,11,12,13,14,15]), [0, 0, null, 0, 0, 17, 17, 13, 13, 54, 54, 50, 50, 46, 46], 'Test 47');
test(replaceValueInTree([15,10,20,5,12,16,25,1,6,null,8,17,18,null,null,null,null,9,7]), [0, 0, 0, 41, 41, 17, 17, 43, 43, null, 42, 15, 15, null, null, null, null, 0, 0], 'Test 48');
test(replaceValueInTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [0, 0, 0, 13, 13, 9, 9, 75, 75, 71, 71, 67, 67, 63, 63, 312, 312, 308, 308, 304, 304, 300, 300, 296, 296, 292, 292, 288, 288, 315], 'Test 49');
test(replaceValueInTree([1,2,3,null,4,5,null,6,null,7,8,null,9,null,10,11,12]), [0, 0, 0, null, 5, 4, null, 15, null, 6, 6, null, 33, null, 32, 19, 19], 'Test 50');
test(replaceValueInTree([1,null,2,null,null,null,3,null,null,null,null,null,4,null,null,null,null,null,5]), [0, null, 0], 'Test 51');
test(replaceValueInTree([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11,null,null,null,null,12,null,null,null,null,13,null,null,null,null,14,null,null]), [0, 0, 0, 13, 13, 9, 9, null, null, 21, 21, null, null, 17, 17, null, null, null, null, 0, null, null, null, null, 0], 'Test 52');
test(replaceValueInTree([20,10,30,5,null,25,35,3,null,22,28,null,null,33,null]), [0, 0, 0, 60, null, 5, 5, 50, null, 3, 3, null, null, 0], 'Test 53');
test(replaceValueInTree([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13]), [0, 0, 0, null, null, 0, 0, null, null, 0, 0, null, null, 0, 0, null, null, 0, 0, null, null, 0, 0], 'Test 54');
test(replaceValueInTree([1,2,3,null,4,null,5,6,null,null,null,null,7]), [0, 0, 0, null, 5, null, 4, 0, null, null, null, null, 0], 'Test 55');
test(replaceValueInTree([1,2,3,null,4,5,6,null,null,7,8,9,10,null,null,null,null,11,12]), [0, 0, 0, null, 11, 4, 4, null, null, 19, 19, 15, 15, null, null, null, null, 0, 0], 'Test 56');
test(replaceValueInTree([1,2,3,4,5,6,7,null,8,9,10,11,12,13,14]), [0, 0, 0, 13, 13, 9, 9, null, 69, 58, 58, 54, 54, 50, 50], 'Test 57');
test(replaceValueInTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [0, 0, 0, 13, 13, 9, 9, 75, 75, 71, 71, 67, 67, 63, 63], 'Test 58');
test(replaceValueInTree([1,2,3,null,null,6,7,null,null,null,null,12,13,null,null,null,null,18,19]), [0, 0, 0, null, null, 0, 0], 'Test 59');
test(replaceValueInTree([1,2,null,4,5,null,7,null,null,8,9,null,null,10,11]), [0, 0, null, 0, 0, null, 0, null, null, 0, 0, null, null, 0, 0], 'Test 60');
test(replaceValueInTree([1,2,3,null,4,null,null,5,6,7,8,9,10,null,null,null,null,11,12,13,14,15,16,17]), [0, 0, 0, null, 0, null, null, 0, 0, 19, 19, 15, 15, null, null, null, null, 27, 27, 23, 23, 17, 17, 31], 'Test 61');
test(replaceValueInTree([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4]), [0, 0, 0, 6, 6, 6, 6, 24, 24, 24, 24, 24, 24, 24, 24], 'Test 62');
test(replaceValueInTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [0, 0, 0, 13, 13, 9, 9, 75, 75, 71, 71, 67, 67, 63, 63, 343, 343, 339, 339, 335, 335, 331, 331, 327, 327, 323, 323, 319, 319, 315, 315], 'Test 63');
test(replaceValueInTree([1,2,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13,null,null,14,null,null,15,null,null,16,null,null,17,null,null,18,null,null,19,null,null,20]), [0, 0, 0, null, null, 0, null, null, 0], 'Test 64');
test(replaceValueInTree([1,2,3,4,5,null,null,6,7,null,null,8,9,null,null,10,11]), [0, 0, 0, 0, 0, null, null, 0, 0, null, null, 0, 0, null, null, 0, 0], 'Test 65');
test(replaceValueInTree([1,2,null,3,null,4,null,5]), [0, 0, null, 0, null, 0, null, 0], 'Test 66');
test(replaceValueInTree([10,5,5,null,null,6,6,7,7,8,8,9,9,10,10]), [0, 0, 0, null, null, 0, 0, 16, 16, 14, 14, 20, 20, 18, 18], 'Test 67');
test(replaceValueInTree([1,2,3,4,null,null,5,6,null,7,null,8,null,9,null,10]), [0, 0, 0, 5, null, null, 4, 7, null, 6, null, 9, null, 8, null, 0], 'Test 68');
test(replaceValueInTree([1,2,3,null,null,null,4,null,null,null,null,null,null,null,5]), [0, 0, 0, null, null, null, 0], 'Test 69');
test(replaceValueInTree([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), [0, 0, 0, null, 5, null, 4, null, 7, null, 6, null, 9, null, 8], 'Test 70');
test(replaceValueInTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,16,null,null,17,null,null,18,null,null,19,null,null,20]), [0, 0, 0, 13, 13, 9, 9, 75, 75, 71, 71, 67, 67, 63, 63, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, null, 0, null, null, 0], 'Test 71');
test(replaceValueInTree([100,50,150,25,75,125,175,12,37,62,88,112,137,162,188,6,9,23,41,59,76,89,108,126,143,157,172,190,24,36,50,64,85,102,118,134,149,164,179,195]), [0, 0, 0, 300, 300, 100, 100, 749, 749, 648, 648, 549, 549, 448, 448, 1294, 1294, 1245, 1245, 1174, 1174, 1112, 1112, 1040, 1040, 980, 980, 1095, 1095, 1223, 1223, 1041, 1041, 970, 970, 907, 907, 847, 847, 995], 'Test 72');

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
