// Test: 538. Convert Bst To Greater Tree
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { convertBST } = require("./solution");

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

console.log("\n538. Convert Bst To Greater Tree\n");

test(convertBST([3,1,4,null,2]), [7, 10, 4, null, 9], 'Test 1');
test(convertBST([1,null,2,null,3,null,4,null,5]), [15, null, 14, null, 12, null, 9, null, 5], 'Test 2');
test(convertBST([5,2,13]), [18, 20, 13], 'Test 3');
test(convertBST([10,5,15,3,7,null,18]), [43, 55, 33, 58, 50, null, 18], 'Test 4');
test(convertBST([1,null,3,null,null,2]), [4, null, 3], 'Test 5');
test(convertBST([3,2,4,1]), [7, 9, 4, 10], 'Test 6');
test(convertBST([5,null,14]), [19, null, 14], 'Test 7');
test(convertBST([100,50,150,25,75,125,175]), [550, 675, 325, 700, 625, 450, 175], 'Test 8');
test(convertBST([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]), [30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8], 'Test 9');
test(convertBST([1,null,2,null,3]), [6, null, 5, null, 3], 'Test 10');
test(convertBST([0,null,1]), [1, null, 1], 'Test 11');
test(convertBST([10,5,15,null,7,13,null,null,8]), [38, 58, 15, null, 53, 28, null, null, 46], 'Test 12');
test(convertBST([]), null, 'Test 13');
test(convertBST([100,50,150,25,75,125,175,10,30,60,80,110,130,160,180]), [1130, 1395, 665, 1450, 1285, 920, 355, 1460, 1425, 1345, 1210, 1030, 795, 515, 180], 'Test 14');
test(convertBST([20,10,30,5,15,25,35,2,7,12,18,23,27,32,37]), [229, 284, 134, 296, 262, 186, 72, 298, 291, 274, 247, 209, 161, 104, 37], 'Test 15');
test(convertBST([2,1,4,null,null,3,5]), [14, 15, 9, null, null, 12, 5], 'Test 16');
test(convertBST([5,3,8,2,4,6,9,1,null,null,null,null,null,null,10]), [38, 45, 27, 47, 42, 33, 19, 48, null, null, null, null, null, null, 10], 'Test 17');
test(convertBST([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [55, null, 54, null, 52, null, 49, null, 45, null, 40, null, 34, null, 27, null, 19, null, 10], 'Test 18');
test(convertBST([9,4,17,3,7,12,22,1,5,null,8,11,15,18,26]), [130, 149, 83, 157, 145, 110, 48, 158, 154, null, 138, 121, 98, 66, 26], 'Test 19');
test(convertBST([15,7,20,null,10,18,23,null,null,9,11,16,19,null,null,null,null,null,17]), [148, 165, 95, null, 158, 124, 42, null, null, 133, 106, 75, 19, null, null, null, null, null, 59], 'Test 20');
test(convertBST([-2147483648,null,2147483647]), [-1, null, 2147483647], 'Test 21');
test(convertBST([30,10,50,5,15,40,60,2,7,12,18,35,45,55,65]), [380, 435, 230, 447, 413, 315, 125, 449, 442, 425, 398, 350, 275, 180, 65], 'Test 22');
test(convertBST([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190]), [1150, 1415, 675, 1470, 1305, 940, 365, 1480, 1445, 1365, 1230, 1050, 815, 525, 190], 'Test 23');
test(convertBST([10,5,15,3,7,null,18,1,null,6,null,12,20]), [75, 93, 65, 96, 82, null, 38, 97, null, 88, null, 50, 20], 'Test 24');
test(convertBST([12,7,17,4,9,14,20,2,5,8,11,13,16,18,22,null,null,null,null,6,null,10,null,null,null,null,null,null,null,15,19,null,null,21,null,23]), [189, 261, 134, 270, 240, 164, 99, 272, 266, 248, 200, 177, 150, 117, 41, null, null, null, null, 254, null, 210, null, null, null, null, null, null, null, 56, 19, null, null, 231, null, 79], 'Test 25');
test(convertBST([8,3,10,1,6,null,14,null,null,4,7,13]), [45, 65, 37, 66, 58, null, 14, null, null, 62, 52, 27], 'Test 26');
test(convertBST([15,10,20,8,12,16,25,6,9,11,13,18,22,28]), [144, 190, 73, 207, 169, 111, 25, 213, 199, 180, 157, 129, 95, 53], 'Test 27');
test(convertBST([5,3,8,2,4,7,9,1,null,null,null,6,null,null,10]), [45, 52, 27, 54, 49, 34, 19, 55, null, null, null, 40, null, null, 10], 'Test 28');
test(convertBST([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [120, null, 119, null, 117, null, 114, null, 110, null, 105, null, 99, null, 92, null, 84, null, 75, null, 65, null, 54, null, 42, null, 29, null, 15], 'Test 29');
test(convertBST([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [45, null, 44, null, 42, null, 39, null, 35, null, 30, null, 24, null, 17, null, 9], 'Test 30');
test(convertBST([25,15,35,10,20,30,40,5,12,18,22,28,32,38,45]), [273, 348, 158, 370, 315, 220, 85, 375, 360, 333, 295, 248, 190, 123, 45], 'Test 31');
test(convertBST([8,3,10,1,6,null,14,null,4,7,9,13,null,null,null,null,null,null,null,12,15]), [72, 97, 64, 102, 87, null, 14, null, 101, 94, 81, 42, null, null, null, null, null, null, null, 54, 29], 'Test 32');
test(convertBST([100,50,150,25,75,125,175,10,30,60,80,110,130,160,180,null,null,null,null,null,null,12,null,35,null,null,null,null,95,null,null,145,null,190]), [1450, 1872, 760, 1927, 1762, 1015, 355, 1937, 1902, 1822, 1530, 1125, 890, 610, 180, null, null, null, null, null, null, 1542, null, 1160, null, null, null, null, 450, null, null, 1687, null, 1350], 'Test 33');
test(convertBST([7,3,15,1,5,9,20,null,null,2,6,null,12,null,null,null,null,8,11,13,19,21]), [95, 151, 35, 152, 146, 88, 20, null, null, 148, 112, null, 66, null, null, null, null, 120, 106, 79, 54, 141], 'Test 34');
test(convertBST([8,3,10,1,6,null,14,null,null,4,7,13,null,null,null,null,null,11]), [56, 76, 48, 77, 69, null, 14, null, null, 73, 63, 27, null, null, null, null, null, 38], 'Test 35');
test(convertBST([7,3,15,1,5,9,20,null,null,4,6,8,13,null,null,17,22]), [72, 129, 35, 130, 83, 57, 20, null, null, 109, 78, 65, 48, null, null, 126, 105], 'Test 36');
test(convertBST([50,30,70,20,40,60,80,10,null,35,45,55,65,null,75,null,90]), [455, 605, 225, 625, 540, 350, 155, 725, null, 575, 500, 405, 290, null, 75, null, 715], 'Test 37');
test(convertBST([1,0,2,null,-1]), [3, 2, 2, null, 2], 'Test 38');
test(convertBST([-10,-5,0,null,-8,-3,-1]), [-14, -27, -1, null, -22, -4, -1], 'Test 39');
test(convertBST([8,3,10,null,6,9,12,null,5,7,11,13]), [70, 84, 35, null, 81, 55, 12, null, 75, 62, 46, 25], 'Test 40');
test(convertBST([10,5,15,2,7,null,20,1,3,6,8,null,null,null,null,null,17]), [45, 71, 35, 93, 60, null, 20, 94, 91, 66, 53, null, null, null, null, null, 88], 'Test 41');
test(convertBST([50,30,70,10,40,60,80,5,20,null,45,55,65,75,90]), [545, 660, 315, 690, 630, 440, 170, 695, 680, null, 590, 495, 380, 245, 90], 'Test 42');
test(convertBST([10,5,15,3,7,null,18,1,null,6,8,13,17]), [73, 99, 63, 102, 88, null, 35, 103, null, 94, 81, 48, 17], 'Test 43');
test(convertBST([7,3,15,1,null,9,20,null,2,null,18]), [69, 72, 35, 75, null, 62, 20, null, 74, null, 53], 'Test 44');
test(convertBST([10,5,15,3,7,null,18,1,null,6,9,14,17,20]), [74, 101, 64, 104, 90, null, 35, 105, null, 96, 83, 49, 17, 125], 'Test 45');
test(convertBST([2,1,3]), [5, 6, 3], 'Test 46');
test(convertBST([5,null,-3,2,null,null,-1,null,4]), [7, null, -3, 2, null, null, 0, null, 1], 'Test 47');
test(convertBST([20,10,30,5,15,25,35,3,7,12,18,23,28,33,38]), [232, 287, 136, 299, 265, 189, 73, 302, 294, 277, 250, 212, 164, 106, 38], 'Test 48');
test(convertBST([-10,5,null,3,7,-3,null,-5,null,null,8]), [-10, -3, null, 0, -3, 5, null, -8, null, null, 8], 'Test 49');
test(convertBST([20,15,25,10,18,null,30,5,13,16,19,null,28,35]), [103, 171, 83, 194, 140, null, 58, 199, 184, 156, 122, null, 28, 234], 'Test 50');
test(convertBST([25,15,35,10,20,30,40,5,12,17,22,28,33,38,45]), [274, 348, 158, 370, 316, 221, 85, 375, 360, 333, 296, 249, 191, 123, 45], 'Test 51');
test(convertBST([60,30,90,15,45,75,105,5,25,40,55,70,85,100,110]), [695, 865, 405, 905, 795, 565, 215, 910, 890, 835, 750, 635, 490, 315, 110], 'Test 52');
test(convertBST([10,5,15,3,7,null,18,1,null,6,8,null,null,null,null,14,19]), [43, 102, 33, 105, 58, null, 18, 106, null, 83, 51, null, null, null, null, 97, 77], 'Test 53');
test(convertBST([15,10,20,8,12,16,25,5,9,11,13,14,18,22,27]), [157, 203, 94, 220, 182, 128, 52, 225, 212, 193, 170, 142, 112, 74, 27], 'Test 54');
test(convertBST([15,9,20,7,12,17,25,5,8,11,13,16,19,23,27]), [162, 207, 95, 222, 187, 131, 52, 227, 215, 198, 175, 147, 114, 75, 27], 'Test 55');
test(convertBST([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [71, 99, 39, 112, 87, 58, 22, 120, 108, 97, 82, 70, 52, 36, 15], 'Test 56');
test(convertBST([21,7,32,3,14,28,37,2,5,9,16,24,30,35,40]), [247, 293, 144, 301, 277, 202, 77, 303, 298, 286, 263, 226, 174, 112, 40], 'Test 57');
test(convertBST([20,15,30,10,17,25,35,5,12,16,18,22,28,33,40]), [233, 299, 138, 321, 268, 191, 75, 326, 311, 284, 251, 213, 166, 108, 40], 'Test 58');
test(convertBST([25,15,35,10,20,30,40,5,12,17,22,27,32,37,42]), [268, 342, 154, 364, 310, 216, 82, 369, 354, 327, 290, 243, 186, 119, 42], 'Test 59');
test(convertBST([50,20,70,10,30,60,80,5,15,25,35,55,65,75,85]), [540, 650, 310, 675, 605, 435, 165, 680, 665, 630, 575, 490, 375, 240, 85], 'Test 60');
test(convertBST([30,20,40,15,25,35,45,10,18,23,28,32,38,43,48]), [311, 407, 176, 440, 364, 249, 93, 450, 425, 387, 339, 281, 214, 136, 48], 'Test 61');
test(convertBST([5,2,13,1,4,9,21,0,null,null,6,8,11,19,null]), [86, 98, 53, 99, 96, 73, 21, 99, null, null, 92, 81, 64, 40], 'Test 62');
test(convertBST([5,2,13,1,4,9,18,null,null,3,6,7,12,15,null,null,null,null,null,null,14,19]), [112, 127, 46, 128, 122, 86, 18, null, null, 125, 118, 107, 58, 33, null, null, null, null, null, null, 100, 77], 'Test 63');
test(convertBST([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190,5,15,28,45,65,85,105,135,155,178,188,200]), [1871, 2536, 675, 2674, 2276, 1328, 365, 2699, 2621, 2421, 2096, 1616, 1015, 525, 190, 2704, 2689, 2649, 2581, 2486, 2361, 2201, 2006, 1771, 1506, 1203, 875], 'Test 64');
test(convertBST([1,2,3,4,5,6,7,8,9,10]), [17, 34, 10, 47, 22, 16, 7, 55, 43, 32], 'Test 65');
test(convertBST([5,3,8,1,4,7,9,null,2,null,null,null,null,null,10]), [39, 46, 27, 49, 43, 34, 19, null, 48, null, null, null, null, null, 10], 'Test 66');
test(convertBST([3,2,5,1,null,4,6,null,null,null,null,null,7]), [25, 27, 18, 28, null, 22, 13, null, null, null, null, null, 7], 'Test 67');
test(convertBST([20,10,30,5,15,25,35,3,7,13,17,23,27,33,37,1,4,6,8,11,14,16,19,21,24,26,29,31,34,36,39,41,43,44]), [470, 585, 275, 611, 537, 382, 147, 662, 600, 564, 506, 429, 331, 214, 76, 706, 615, 606, 593, 575, 551, 522, 489, 450, 406, 357, 304, 245, 181, 112, 39, 747, 705, 659], 'Test 68');
test(convertBST([50,25,75,10,30,60,90,5,15,20,35,55,65,85,100]), [580, 690, 350, 715, 645, 475, 190, 720, 705, 665, 615, 530, 415, 275, 100], 'Test 69');
test(convertBST([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190,5,15,20,35,55,65,70,85,105,115,135,145,155,170,180,195,null,null,null,null,null,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,120]), [2470, 3050, 1495, 3160, 2780, 2040, 860, 3185, 3115, 2945, 2635, 2265, 1780, 1190, 505, 3190, 3175, 3135, 3085, 3000, 2845, 2705, 2555, 2370, 2155, 1915, 1640, 1345, 1030, 685, 195, null, null, null, null, null, null, null, null, null, null, 2885, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 315], 'Test 70');
test(convertBST([50,20,70,10,30,60,80,5,15,25,35,55,65,75,85,null,null,null,null,null,null,null,1,null,null,null,null,null,4,8,9,null,null,17,33,34,36,null,null,null,76,null,null,86,null,null,95,null,null,99]), [1037, 1148, 807, 1173, 1103, 932, 532, 1178, 1163, 1128, 1073, 987, 872, 737, 94, null, null, null, null, null, null, null, 1038, null, null, null, null, null, 569, 233, 9, null, null, 662, 565, 267, 225, null, null, null, 645, null, null, 353, null, null, 189, null, null, 452], 'Test 71');
test(convertBST([100,50,150,25,75,125,175,10,35,60,90,110,140,160,190]), [1150, 1425, 675, 1485, 1315, 940, 365, 1495, 1460, 1375, 1240, 1050, 815, 525, 190], 'Test 72');
test(convertBST([2147483647]), [2147483647], 'Test 73');
test(convertBST([5,2,13,1,3,9,21,null,null,null,null,7,15,null,null,17,null,null,null,25]), [112, 117, 34, 118, 115, 58, 21, null, null, null, null, 65, 49, null, null, 82, null, null, null, 107], 'Test 74');
test(convertBST([7,3,15,1,5,null,20,null,null,4,6]), [42, 60, 35, 61, 53, null, 20, null, null, 57, 48], 'Test 75');
test(convertBST([20,15,25,10,18,22,30,5,12,16,19,21,24,27,35]), [204, 272, 117, 294, 241, 163, 65, 299, 284, 257, 223, 184, 141, 92, 35], 'Test 76');
test(convertBST([8,3,13,null,7,10,17,1,null,null,8,null,null,11,14]), [56, 92, 30, null, 63, 48, 17, 78, null, null, 38, null, null, 89, 77], 'Test 77');
test(convertBST([90,45,135,20,70,110,160,10,30,50,80,105,125,145,175]), [1045, 1290, 615, 1340, 1195, 850, 335, 1350, 1320, 1245, 1125, 955, 740, 480, 175], 'Test 78');
test(convertBST([8,3,13,1,5,10,18,0,2,4,7,9,11,14,20,null,null,null,null,null,6]), [103, 128, 65, 131, 115, 86, 38, 131, 130, 125, 110, 95, 76, 52, 20, null, null, null, null, null, 121], 'Test 79');
test(convertBST([30,15,45,10,20,40,50,5,12,18,23,35,43,48,55]), [346, 422, 198, 444, 389, 281, 105, 449, 434, 407, 369, 316, 241, 153, 55], 'Test 80');
test(convertBST([10,5,15,3,7,null,18,1,null,6,8]), [43, 69, 33, 72, 58, null, 18, 73, null, 64, 51], 'Test 81');
test(convertBST([12,7,15,5,8,13,18,3,6,9,11,14,17,20]), [109, 144, 53, 155, 128, 83, 18, 158, 150, 137, 120, 97, 70, 38], 'Test 82');
test(convertBST([25,15,35,10,20,30,40,5,12,17,22,28,32,38,45]), [273, 347, 158, 369, 315, 220, 85, 374, 359, 332, 295, 248, 190, 123, 45], 'Test 83');
test(convertBST([100,50,150,25,75,125,175,10,30,60,85,110,140,160,190]), [1150, 1420, 675, 1475, 1310, 940, 365, 1485, 1450, 1370, 1235, 1050, 815, 525, 190], 'Test 84');
test(convertBST([7,3,15,1,5,9,20,null,2,4,6,8,12,17,25]), [113, 131, 77, 134, 124, 98, 45, null, 133, 128, 119, 106, 89, 62, 25], 'Test 85');
test(convertBST([25,15,35,10,20,30,40,5,12,null,17,22,28,33,45]), [258, 310, 153, 332, 295, 211, 85, 337, 322, null, 275, 233, 181, 118, 45], 'Test 86');
test(convertBST([75,35,115,15,55,85,145,10,25,45,65,78,105,135,165]), [903, 1103, 560, 1143, 1023, 750, 310, 1153, 1128, 1068, 968, 828, 665, 445, 165], 'Test 87');
test(convertBST([8,3,13,null,7,10,17,1,null,5,9,12,15,null,16]), [89, 116, 57, null, 96, 76, 32, 113, null, 81, 66, 44, 15, null, 112], 'Test 88');
test(convertBST([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13]), [91, null, 90, null, 88, null, 85, null, 81, null, 76, null, 70, null, 63, null, 55, null, 46, null, 36, null, 25, null, 13], 'Test 89');
test(convertBST([7,3,15,null,5,9,20,null,null,4,6,8,11,19,25,null,17,18,21,23,27,26,28,null,null,null,null,null,22,null,null,24,null,null,null,null,null,null,29,null,null,30]), [389, 397, 219, null, 394, 251, 135, null, null, 280, 242, 164, 38, 356, 276, null, 236, 204, 156, 61, 27, 382, 337, null, null, null, null, null, 186, null, null, 85, null, null, null, null, null, null, 309, null, null, 115], 'Test 90');
test(convertBST([10,5,15,3,7,null,18,1,null,null,6,null,19]), [62, 80, 52, 83, 75, null, 37, 84, null, null, 68, null, 19], 'Test 91');
test(convertBST([15,10,20,8,12,16,25,5,9,11,13,17,22,28]), [143, 189, 73, 206, 168, 111, 25, 211, 198, 179, 156, 128, 95, 53], 'Test 92');
test(convertBST([8,3,10,1,6,null,14,null,4,7,13,null,null,9]), [32, 61, 24, 75, 51, null, 14, null, 65, 58, 45, null, null, 74], 'Test 93');
test(convertBST([8,3,10,1,6,null,14,null,4,7,13,null,null,11,15]), [32, 61, 24, 92, 51, null, 14, null, 80, 58, 45, null, null, 91, 76], 'Test 94');
test(convertBST([12,7,17,5,9,14,20,3,6,8,11,13,16,19,22]), [133, 168, 78, 179, 153, 108, 42, 182, 174, 161, 144, 121, 94, 61, 22], 'Test 95');
test(convertBST([50,30,70,20,40,60,80,10,25,35,45,55,65,75,90]), [545, 695, 315, 740, 630, 440, 170, 750, 720, 665, 590, 495, 380, 245, 90], 'Test 96');
test(convertBST([10,5,15,2,7,null,20,1,null,6,null,null,null,18]), [45, 63, 35, 65, 52, null, 20, 66, null, 58, null, null, null, 84], 'Test 97');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

