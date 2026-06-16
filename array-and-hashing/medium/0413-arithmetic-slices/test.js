// Test: 413. Arithmetic Slices
// 171 test cases from LeetCodeDataset
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

console.log("\n413. Arithmetic Slices\n");

test(numberOfArithmeticSlices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 36, 'Test 1');
test(numberOfArithmeticSlices([1,2,4,5,6,7]), 3, 'Test 2');
test(numberOfArithmeticSlices([3,-1,-5,-9]), 3, 'Test 3');
test(numberOfArithmeticSlices([10,9,8,7,6,5,4,3,2,1]), 36, 'Test 4');
test(numberOfArithmeticSlices([1,3,5,7,9]), 6, 'Test 5');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10]), 36, 'Test 6');
test(numberOfArithmeticSlices([1]), 0, 'Test 7');
test(numberOfArithmeticSlices([10,7,4,3,2,1]), 4, 'Test 8');
test(numberOfArithmeticSlices([1,2,3,4]), 3, 'Test 9');
test(numberOfArithmeticSlices([7, 7, 7, 7]), 3, 'Test 10');
test(numberOfArithmeticSlices([10, 7, 7, 7, 7, 7, 10]), 6, 'Test 11');
test(numberOfArithmeticSlices([3, -1, -5, -9]), 3, 'Test 12');
test(numberOfArithmeticSlices([1,1,2,3,4,5,6,7,8,9,10]), 36, 'Test 13');
test(numberOfArithmeticSlices([2]), 0, 'Test 14');
test(numberOfArithmeticSlices([5,5,5,5,5]), 6, 'Test 15');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9]), 6, 'Test 16');
test(numberOfArithmeticSlices([1,2,3,4,5]), 6, 'Test 17');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13]), 15, 'Test 18');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9]), 28, 'Test 19');
test(numberOfArithmeticSlices([1, 2, 2, 3]), 0, 'Test 20');
test(numberOfArithmeticSlices([1,1,1,1,1]), 6, 'Test 21');
test(numberOfArithmeticSlices([1,2,2,3,4,5,6]), 6, 'Test 22');
test(numberOfArithmeticSlices([1, 2, 3, 5, 7, 9]), 4, 'Test 23');
test(numberOfArithmeticSlices([1,2]), 0, 'Test 24');
test(numberOfArithmeticSlices([1,2,4,5,6,7,8]), 6, 'Test 25');
test(numberOfArithmeticSlices([7,7,7,7]), 3, 'Test 26');
test(numberOfArithmeticSlices([1,2,3,8,9,10]), 2, 'Test 27');
test(numberOfArithmeticSlices([0,1,2,3,6,9,12,15,18,21]), 18, 'Test 28');
test(numberOfArithmeticSlices([1,2,3,5,7,9,11,13,15,17,19]), 29, 'Test 29');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15]), 21, 'Test 30');
test(numberOfArithmeticSlices([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]), 1, 'Test 31');
test(numberOfArithmeticSlices([1, 2, 3, 5, 7, 9, 11, 13, 15]), 16, 'Test 32');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 9, 7, 5, 3, 1, -1]), 25, 'Test 33');
test(numberOfArithmeticSlices([5, 10, 15, 20, 25, 30, 35]), 15, 'Test 34');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 7, 9, 11, 13, 15]), 16, 'Test 35');
test(numberOfArithmeticSlices([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 36, 'Test 36');
test(numberOfArithmeticSlices([1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 36, 'Test 37');
test(numberOfArithmeticSlices([1, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 45, 'Test 38');
test(numberOfArithmeticSlices([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 0, 'Test 39');
test(numberOfArithmeticSlices([10, 5, 0, -5, -10, -15, -20]), 15, 'Test 40');
test(numberOfArithmeticSlices([5,10,15,20,25,30,35,40,45,50,55,60,65,70]), 78, 'Test 41');
test(numberOfArithmeticSlices([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 171, 'Test 42');
test(numberOfArithmeticSlices([1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 29, 'Test 43');
test(numberOfArithmeticSlices([1,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 72, 'Test 44');
test(numberOfArithmeticSlices([5,7,9,11,13,15,17,19,21]), 28, 'Test 45');
test(numberOfArithmeticSlices([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33]), 45, 'Test 46');
test(numberOfArithmeticSlices([10, 5, 0, -5, -10, -15, -20, -25]), 21, 'Test 47');
test(numberOfArithmeticSlices([10, 11, 12, 10, 11, 12, 14, 16, 18, 20]), 8, 'Test 48');
test(numberOfArithmeticSlices([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]), 18, 'Test 49');
test(numberOfArithmeticSlices([1,2,3,5,6,7,9,10,11,13,14,15]), 4, 'Test 50');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 91, 'Test 51');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 171, 'Test 52');
test(numberOfArithmeticSlices([5, 5, 5, 5, 5, 5, 5, 5, 5]), 28, 'Test 53');
test(numberOfArithmeticSlices([1,2,4,6,8,10,12,14,16,18,20]), 36, 'Test 54');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 406, 'Test 55');
test(numberOfArithmeticSlices([10, 15, 20, 25, 30, 35, 40, 45, 50]), 28, 'Test 56');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), 406, 'Test 57');
test(numberOfArithmeticSlices([1,2,3,4,2,4,6,8,10,8,6,4,2,0,-2,-4,-6,-8,-10,-8,-6,-4,-2]), 60, 'Test 58');
test(numberOfArithmeticSlices([1,3,5,7,9,12,15,18,21,24]), 16, 'Test 59');
test(numberOfArithmeticSlices([5,7,9,11,13,15,17,19,21,23]), 36, 'Test 60');
test(numberOfArithmeticSlices([1, 1, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 5, 6]), 17, 'Test 61');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 72, 'Test 62');
test(numberOfArithmeticSlices([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 10, 'Test 63');
test(numberOfArithmeticSlices([10,20,30,20,10,20,30,20,10]), 4, 'Test 64');
test(numberOfArithmeticSlices([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5]), 15, 'Test 65');
test(numberOfArithmeticSlices([1,2,4,8,16,32,64,128,256,512]), 0, 'Test 66');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8]), 16, 'Test 67');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 276, 'Test 68');
test(numberOfArithmeticSlices([1,2,3,5,7,9,11,13,15,17]), 22, 'Test 69');
test(numberOfArithmeticSlices([1,2,3,4,2,3,4,5,3,4,5,6]), 9, 'Test 70');
test(numberOfArithmeticSlices([2, 4, 6, 8, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 42, 'Test 71');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 91, 'Test 72');
test(numberOfArithmeticSlices([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]), 1, 'Test 73');
test(numberOfArithmeticSlices([0,0,0,0,0,0,0,0,0,0]), 36, 'Test 74');
test(numberOfArithmeticSlices([100, 200, 300, 200, 100, 200, 300, 400]), 5, 'Test 75');
test(numberOfArithmeticSlices([10, 20, 30, 40, 50, 40, 30, 20, 10, 0, -10]), 21, 'Test 76');
test(numberOfArithmeticSlices([100,200,300,400,500,600,700,800,900,1000,1100,1200]), 55, 'Test 77');
test(numberOfArithmeticSlices([1, 2, 3, 4, 2, 4, 6, 8, 10, 12]), 13, 'Test 78');
test(numberOfArithmeticSlices([1,1,2,2,3,3,4,4,5,5]), 0, 'Test 79');
test(numberOfArithmeticSlices([1,2,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 92, 'Test 80');
test(numberOfArithmeticSlices([1,3,5,7,9,11,13,15,17,19]), 36, 'Test 81');
test(numberOfArithmeticSlices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 91, 'Test 82');
test(numberOfArithmeticSlices([1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20]), 1, 'Test 83');
test(numberOfArithmeticSlices([10, 20, 30, 40, 50, 40, 30, 20, 10, 0, -10, -20, -30]), 34, 'Test 84');
test(numberOfArithmeticSlices([1,3,6,10,15,21,28,36,45]), 0, 'Test 85');
test(numberOfArithmeticSlices([1000,999,998,997,996,995,994,993,992,991]), 36, 'Test 86');
test(numberOfArithmeticSlices([100,200,300,400,500,600,700,800,900]), 28, 'Test 87');
test(numberOfArithmeticSlices([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), 91, 'Test 88');
test(numberOfArithmeticSlices([7, 7, 7, 7, 7, 8, 9, 10, 11, 12]), 16, 'Test 89');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5]), 141, 'Test 90');
test(numberOfArithmeticSlices([5,5,5,5,5,5,5,5,5,5]), 36, 'Test 91');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 3, 2, 1, 0, -1, -2, -3]), 21, 'Test 92');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 9, 7, 5, 3, 1, -1, -3, -5, -7]), 46, 'Test 93');
test(numberOfArithmeticSlices([1,2,3,4,3,3,3,4,3,2,1,2,3,4,5,6,7,8,9,10]), 43, 'Test 94');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 171, 'Test 95');
test(numberOfArithmeticSlices([1, 3, 5, 6, 8, 10, 12, 14, 16, 18]), 16, 'Test 96');
test(numberOfArithmeticSlices([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991]), 36, 'Test 97');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 812, 'Test 98');
test(numberOfArithmeticSlices([3,-1,-5,-9,-13,-17,-21,-25,-29,-33]), 36, 'Test 99');
test(numberOfArithmeticSlices([1,2,4,8,16,32,64,128,256]), 0, 'Test 100');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 406, 'Test 101');
test(numberOfArithmeticSlices([5,4,3,2,1,0,-1,-2,-3,-4,-5]), 45, 'Test 102');
test(numberOfArithmeticSlices([-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]), 78, 'Test 103');
test(numberOfArithmeticSlices([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]), 45, 'Test 104');
test(numberOfArithmeticSlices([10,10,10,10,10,10,10,10,10,10]), 36, 'Test 105');
test(numberOfArithmeticSlices([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 91, 'Test 106');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 5]), 13, 'Test 107');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 36, 'Test 108');
test(numberOfArithmeticSlices([1,1,2,3,5,8,13,21,34,55]), 1, 'Test 109');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), 45, 'Test 110');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 276, 'Test 111');
test(numberOfArithmeticSlices([10,5,0,-5,-10,-15,-20,-25]), 21, 'Test 112');
test(numberOfArithmeticSlices([10,20,30,40,50,60,70,80,90,100]), 36, 'Test 113');
test(numberOfArithmeticSlices([5,5,5,4,4,4,5,5,5,6,6,6]), 4, 'Test 114');
test(numberOfArithmeticSlices([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80]), 105, 'Test 115');
test(numberOfArithmeticSlices([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6]), 120, 'Test 116');
test(numberOfArithmeticSlices([1, 2, 3, 5, 7, 9, 11, 13, 15, 17]), 22, 'Test 117');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 91, 'Test 118');
test(numberOfArithmeticSlices([1,3,5,7,9,2,4,6,8,10]), 12, 'Test 119');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 36, 'Test 120');
test(numberOfArithmeticSlices([0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3]), 4, 'Test 121');
test(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9]), 28, 'Test 122');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15]), 21, 'Test 123');
test(numberOfArithmeticSlices([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), 171, 'Test 124');
test(numberOfArithmeticSlices([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), 91, 'Test 125');
test(numberOfArithmeticSlices([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 91, 'Test 126');
test(numberOfArithmeticSlices([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 36, 'Test 127');
test(numberOfArithmeticSlices([10, 20, 30, 40, 50, 40, 30, 20, 10, 0, -10, -20, -30, -40]), 42, 'Test 128');
test(numberOfArithmeticSlices([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 91, 'Test 129');
test(numberOfArithmeticSlices([10,20,30,40,50,60,70,80,90,100,110,120,130]), 66, 'Test 130');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 171, 'Test 131');
test(numberOfArithmeticSlices([1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 5, 6, 7, 8, 9]), 18, 'Test 132');
test(numberOfArithmeticSlices([10,20,30,40,50,60,70,80,90,100,110,120]), 55, 'Test 133');
test(numberOfArithmeticSlices([1,2,3,4,3,4,5,6,5,6,7,8,7,8,9,10]), 12, 'Test 134');
test(numberOfArithmeticSlices([1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28]), 78, 'Test 135');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 12, 15, 18, 21, 24]), 16, 'Test 136');
test(numberOfArithmeticSlices([5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 78, 'Test 137');
test(numberOfArithmeticSlices([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), 4, 'Test 138');
test(numberOfArithmeticSlices([1, 2, 3, 2, 1, 0, -1, -2, -3, -2, -1]), 17, 'Test 139');
test(numberOfArithmeticSlices([-10,-5,0,5,10,15,20,25,30,35,40]), 45, 'Test 140');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 9, 7, 5, 3, 1, -1, -3, -5, -7, -9]), 55, 'Test 141');
test(numberOfArithmeticSlices([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), 171, 'Test 142');
test(numberOfArithmeticSlices([5,7,9,11,13,10,8,6,4,2,0,-2,-4,-6,-8,-10]), 51, 'Test 143');
test(numberOfArithmeticSlices([1,2,4,5,7,9,11,13,15,17,19,21,23,25]), 45, 'Test 144');
test(numberOfArithmeticSlices([1,1,1,1,2,3,4,5,5,5,5,6,7,8,9]), 18, 'Test 145');
test(numberOfArithmeticSlices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1770, 'Test 146');
test(numberOfArithmeticSlices([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 171, 'Test 147');
test(numberOfArithmeticSlices([1,2,3,2,1,2,3,4,3,2,1,0,-1,-2,-1,0,1,2,3]), 30, 'Test 148');
test(numberOfArithmeticSlices([1, 4, 7, 10, 13, 16, 19, 22, 25, 28]), 36, 'Test 149');
test(numberOfArithmeticSlices([2,5,8,11,14,17,20,23,26,29]), 36, 'Test 150');
test(numberOfArithmeticSlices([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 36, 'Test 151');
test(numberOfArithmeticSlices([1, 2, 4, 6, 8, 10, 12, 14, 16, 18]), 28, 'Test 152');
test(numberOfArithmeticSlices([3, 1, -1, -3, -5, -7, -9, -11]), 21, 'Test 153');
test(numberOfArithmeticSlices([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 36, 'Test 154');
test(numberOfArithmeticSlices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 36, 'Test 155');
test(numberOfArithmeticSlices([2,4,6,8,10,12,14,16,18,20]), 36, 'Test 156');
test(numberOfArithmeticSlices([5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]), 55, 'Test 157');
test(numberOfArithmeticSlices([1,1,2,3,4,5,5,6,7,8,9,10,10,11,12]), 17, 'Test 158');
test(numberOfArithmeticSlices([7,7,7,7,7,7,7,7,7,7,7]), 45, 'Test 159');
test(numberOfArithmeticSlices([1,2,3,4,3,2,1,0,-1,-2,-3,-4,-5,-4,-3,-2,-1,0,1,2,3,4]), 75, 'Test 160');
test(numberOfArithmeticSlices([7, 7, 7, 8, 9, 10, 11, 12, 13, 14]), 22, 'Test 161');
test(numberOfArithmeticSlices([1,2,3,4,5,3,2,1,2,3,4,5,6,7,8,9]), 35, 'Test 162');
test(numberOfArithmeticSlices([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4]), 15, 'Test 163');
test(numberOfArithmeticSlices([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]), 0, 'Test 164');
test(numberOfArithmeticSlices([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5]), 12, 'Test 165');
test(numberOfArithmeticSlices([1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 153, 'Test 166');
test(numberOfArithmeticSlices([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]), 7, 'Test 167');
test(numberOfArithmeticSlices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 903, 'Test 168');
test(numberOfArithmeticSlices([100,200,300,400,500,600,700,800,900,1000]), 36, 'Test 169');
test(numberOfArithmeticSlices([1, 2, 3, 5, 8, 13, 21, 34, 55]), 1, 'Test 170');
test(numberOfArithmeticSlices([3,-3,-9,-15,-21,-27,-33,-39,-45,-51,-57,-63,-69,-75,-81]), 91, 'Test 171');

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
