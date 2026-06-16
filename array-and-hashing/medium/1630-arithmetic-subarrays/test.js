// Test: 1630. Arithmetic Subarrays
// 146 test cases from LeetCodeDataset
// Run: node test.js

const { checkArithmeticSubarrays } = require("./solution");

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

console.log("\n1630. Arithmetic Subarrays\n");

test(checkArithmeticSubarrays([1,1,1,1,1], [0,0,2,3], [1,2,4,4]), [true, true, true, true], 'Test 1');
test(checkArithmeticSubarrays([5,5,5,5,5], [0,1,2], [1,2,3]), [true, true, true], 'Test 2');
test(checkArithmeticSubarrays([0,3,5,7,9], [0,1,2], [1,2,3]), [true, true, true], 'Test 3');
test(checkArithmeticSubarrays([1,2,3,4,5], [0,1,2], [1,2,4]), [true, true, true], 'Test 4');
test(checkArithmeticSubarrays([0,5,10,15,20], [0,0,1,2], [2,3,3,4]), [true, true, true, true], 'Test 5');
test(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10]), [false, true, false, false, true, true], 'Test 6');
test(checkArithmeticSubarrays([1,2,3,5,6], [0,2], [2,4]), [true, false], 'Test 7');
test(checkArithmeticSubarrays([10,9,8,7,6], [0,1,2], [1,2,4]), [true, true, true], 'Test 8');
test(checkArithmeticSubarrays([1,2,4,6,8,10], [0,1,2], [1,2,3]), [true, true, true], 'Test 9');
test(checkArithmeticSubarrays([5,3,1,7,9], [0,1,2], [1,2,4]), [true, true, false], 'Test 10');
test(checkArithmeticSubarrays([1,2,4,6,8], [0,1,2,3], [2,3,4,4]), [false, true, true, true], 'Test 11');
test(checkArithmeticSubarrays([1,1,2,5,7], [0,2,3], [2,3,4]), [false, true, true], 'Test 12');
test(checkArithmeticSubarrays([1,2,4,6,8], [0,1,2], [1,2,4]), [true, true, true], 'Test 13');
test(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5]), [true, false, true], 'Test 14');
test(checkArithmeticSubarrays([10,5,3,7,8], [0,1,2,3], [1,2,3,4]), [true, true, true, true], 'Test 15');
test(checkArithmeticSubarrays([1,2,3,4,5], [0,1,2], [2,3,4]), [true, true, true], 'Test 16');
test(checkArithmeticSubarrays([1,1,1,1,1], [0,1,2], [1,2,3]), [true, true, true], 'Test 17');
test(checkArithmeticSubarrays([1,2,3,4,5], [0,1,2], [4,3,4]), [true, true, true], 'Test 18');
test(checkArithmeticSubarrays([10,20,30,40,50], [0,2], [1,3]), [true, true], 'Test 19');
test(checkArithmeticSubarrays([1,1,1,1,1], [0,1,2], [1,2,4]), [true, true, true], 'Test 20');
test(checkArithmeticSubarrays([100,200,300,400,500,600], [0,1,2], [2,3,4]), [true, true, true], 'Test 21');
test(checkArithmeticSubarrays([1,2,3,4,5], [0,1,2], [4,3,3]), [true, true, true], 'Test 22');
test(checkArithmeticSubarrays([1,1,1,1,1], [0,1,2], [4,3,3]), [true, true, true], 'Test 23');
test(checkArithmeticSubarrays([1,2,3,4,5], [0,1], [2,4]), [true, true], 'Test 24');
test(checkArithmeticSubarrays([-10,-7,-4,-1,2,5,8,11], [0,1,2,3], [2,4,6,7]), [true, true, true, true], 'Test 25');
test(checkArithmeticSubarrays([0,1,3,6,10,15,21,28,36,45], [0,1,2,3,4,5,6,7,8], [9,8,7,6,5,4,3,2,1]), Error: min[] iterable argument is empty, 'Test 26');
test(checkArithmeticSubarrays([7,7,7,7,7,7,7,7,7,7], [0,1,2,3,4,5,6,7,8], [9,8,7,6,5,4,3,2,1]), Error: min[] iterable argument is empty, 'Test 27');
test(checkArithmeticSubarrays([-5,-10,-15,-20,-25,-30], [0,2,4], [1,3,5]), [true, true, true], 'Test 28');
test(checkArithmeticSubarrays([20,10,30,50,40,60,70,80,90,100], [0,1,2,3,4,5], [2,4,6,8,9,9]), [true, false, true, true, false, true], 'Test 29');
test(checkArithmeticSubarrays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], [0,3,6,9,12], [2,5,8,11,14]), [true, true, true, true, true], 'Test 30');
test(checkArithmeticSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 3, 5, 7], [8, 9, 8, 9]), [true, true, true, true], 'Test 31');
test(checkArithmeticSubarrays([100000,-100000,50000,-50000,25000,-25000,12500,-12500], [0,2,4,6], [2,4,6,7]), [false, false, false, true], 'Test 32');
test(checkArithmeticSubarrays([1,2,4,8,16,32,64,128,256,512], [0,1,2,3,4,5,6], [1,2,3,4,5,6,9]), [true, true, true, true, true, true, false], 'Test 33');
test(checkArithmeticSubarrays([10, 5, 15, 20, 25, 30, 35, 40], [1, 0, 2, 5], [6, 4, 4, 7]), [false, true, true, true], 'Test 34');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10], [0,0,2,4,6,8], [2,4,6,8,9,9]), [true, true, true, true, true, true], 'Test 35');
test(checkArithmeticSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900], [0, 1, 3, 5], [2, 4, 6, 8]), [true, true, true, true], 'Test 36');
test(checkArithmeticSubarrays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], [0,6,12,18], [5,11,17,19]), [true, true, true, true], 'Test 37');
test(checkArithmeticSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25], [0,5,10], [4,9,12]), [true, true, true], 'Test 38');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21], [0,2,4,6,8,10], [1,3,5,7,9,20]), [true, true, true, true, true, true], 'Test 39');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [0,5,10,15], [4,9,14,19]), [true, true, true, true], 'Test 40');
test(checkArithmeticSubarrays([5, 8, 11, 14, 17, 20, 23, 26, 29], [0, 2, 5, 6], [3, 5, 7, 8]), [true, true, true, true], 'Test 41');
test(checkArithmeticSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110], [0, 3, 6, 9, 1], [2, 5, 8, 10, 4]), [true, true, true, true, true], 'Test 42');
test(checkArithmeticSubarrays([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], [0,0,2,4,6,8], [2,4,6,8,9,9]), [true, true, true, true, true, true], 'Test 43');
test(checkArithmeticSubarrays([1,3,5,7,9,11,13,15,17,19,21], [0,2,4,6,8], [1,3,5,7,10]), [true, true, true, true, true], 'Test 44');
test(checkArithmeticSubarrays([100,200,300,400,500,600,700,800,900,1000], [0,0,0,0], [3,4,5,6]), [true, true, true, true], 'Test 45');
test(checkArithmeticSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [0, 1, 2, 3, 4], [4, 5, 6, 7, 9]), [true, true, true, true, true], 'Test 46');
test(checkArithmeticSubarrays([10,5,0,-5,-10,-15,-20,-25,-30,-35], [0,0,0,0], [4,5,6,7]), [true, true, true, true], 'Test 47');
test(checkArithmeticSubarrays([10,20,30,40,50,60,70,80,90,100], [0,1,2,3,4], [2,3,4,5,6]), [true, true, true, true, true], 'Test 48');
test(checkArithmeticSubarrays([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77], [0,4,8,12,16], [3,7,11,15,19]), [true, true, true, true, true], 'Test 49');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [0,1,2,3,4,5,6,7,8,9,10,11,12,13], [14,13,12,11,10,9,8,7,6,5,4,3,2,1]), Error: integer division or modulo by zero, 'Test 50');
test(checkArithmeticSubarrays([1,1,1,1,1,1,1,1,1,1], [0,1,2,3,4,5,6,7,8], [2,4,6,8,9,9,9,9,9]), [true, true, true, true, true, true, true, true, true], 'Test 51');
test(checkArithmeticSubarrays([0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32], [0,3,6,9,12,15], [1,4,7,10,13,16]), [true, true, true, true, true, true], 'Test 52');
test(checkArithmeticSubarrays([3,6,9,12,15,18,21,24,27,30,33,36], [0,3,6,9], [2,5,8,11]), [true, true, true, true], 'Test 53');
test(checkArithmeticSubarrays([1,5,9,13,17,21,25,29,33,37,41], [0,1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8,10]), [true, true, true, true, true, true, true, true, true], 'Test 54');
test(checkArithmeticSubarrays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], [0,1,2,3,4,5,6,7,8,9,10,11,12,13], [14,13,12,11,10,9,8,7,6,5,4,3,2,1]), Error: integer division or modulo by zero, 'Test 55');
test(checkArithmeticSubarrays([10,20,30,40,50,60,70,80,90,100], [0,2,4,6,8], [1,3,5,7,9]), [true, true, true, true, true], 'Test 56');
test(checkArithmeticSubarrays([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [0, 2, 4, 6], [3, 5, 7, 9]), [true, true, true, true], 'Test 57');
test(checkArithmeticSubarrays([5, 3, 1, -1, -3, -5, -7, -9, -11, -13], [0, 2, 4, 6, 8], [1, 3, 5, 7, 9]), [true, true, true, true, true], 'Test 58');
test(checkArithmeticSubarrays([1,1,1,1,1,1,1,1,1,1,1,1], [0,2,4,6,8], [1,3,5,7,11]), [true, true, true, true, true], 'Test 59');
test(checkArithmeticSubarrays([1, 2, 3, 5, 6, 8, 9, 10], [0, 2, 4, 1, 3], [1, 5, 7, 7, 6]), [true, false, false, false, false], 'Test 60');
test(checkArithmeticSubarrays([5,8,1,3,4,9,10], [0,1,2,3], [2,4,5,6]), [false, false, false, false], 'Test 61');
test(checkArithmeticSubarrays([5,8,3,7,10,1,2,9,4,6], [0,2,5,7], [3,7,9,9]), [false, false, false, false], 'Test 62');
test(checkArithmeticSubarrays([1,2,4,8,16,32,64,128,256,512], [0,1,2,3,4], [2,4,6,8,9]), [false, false, false, false, false], 'Test 63');
test(checkArithmeticSubarrays([10,5,15,20,30,25,40,35,50,45], [0,1,2,3,4,5,6], [3,5,7,9,9,9,9]), [true, false, true, true, true, false, true], 'Test 64');
test(checkArithmeticSubarrays([4, 3, 2, 1, 0, -1, -2, -3, -4], [0, 3, 4, 5], [8, 7, 6, 8]), [true, true, true, true], 'Test 65');
test(checkArithmeticSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [0, 1, 2, 3, 4], [3, 4, 5, 6, 9]), [true, true, true, true, true], 'Test 66');
test(checkArithmeticSubarrays([1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [0,5,10,15,20], [4,9,14,19,24]), [false, true, true, true, true], 'Test 67');
test(checkArithmeticSubarrays([10,20,30,40,50,60,70,80,90,100], [0,1,2,3,4,5,6,7,8], [9,8,7,6,5,4,3,2,1]), Error: min[] iterable argument is empty, 'Test 68');
test(checkArithmeticSubarrays([2,4,6,8,10,12,14,16,18,20], [0,1,2,3,4,5,6], [1,2,3,4,5,6,9]), [true, true, true, true, true, true, true], 'Test 69');
test(checkArithmeticSubarrays([10,20,30,40,50,60,70,80,90], [0,1,2,3], [1,2,3,8]), [true, true, true, true], 'Test 70');
test(checkArithmeticSubarrays([5,4,3,2,1,0,-1,-2,-3,-4,-5], [0,1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8,10]), [true, true, true, true, true, true, true, true, true], 'Test 71');
test(checkArithmeticSubarrays([-5,-10,-15,-20,-25,-30,-35,-40,-45,-50], [0,1,2,3,4,5,6], [3,5,7,9,9,9,9]), [true, true, true, true, true, true, true], 'Test 72');
test(checkArithmeticSubarrays([1,3,5,7,9,11,13,15,17,19], [0,2,4,6], [1,3,5,9]), [true, true, true, true], 'Test 73');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [0,5,10,15,20], [4,9,14,19,24]), [true, true, true, true, true], 'Test 74');
test(checkArithmeticSubarrays([3,5,7,9,11,13,15,17,19,21,23,25,27,29,31], [0,5,10], [4,9,13]), [true, true, true], 'Test 75');
test(checkArithmeticSubarrays([5,5,5,5,5,5,5,5], [0,1,2], [1,2,3]), [true, true, true], 'Test 76');
test(checkArithmeticSubarrays([5,10,15,20,25,30,35,40,45,50], [0,3,6,9], [2,5,8,9]), Error: integer division or modulo by zero, 'Test 77');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [0,3,6,9,12], [2,5,8,11,14]), [true, true, true, true, true], 'Test 78');
test(checkArithmeticSubarrays([5,8,11,14,17,20,23,26,29], [0,3,6], [2,5,8]), [true, true, true], 'Test 79');
test(checkArithmeticSubarrays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], [0,5,10], [4,9,14]), [true, true, true], 'Test 80');
test(checkArithmeticSubarrays([1,2,4,8,16,32,64,128,256,512], [0,1,2,3,4,5,6,7,8], [9,8,7,6,5,4,3,2,1]), Error: min[] iterable argument is empty, 'Test 81');
test(checkArithmeticSubarrays([1, 2, 4, 5, 7, 8, 10, 11, 13], [0, 2, 4, 6], [1, 5, 7, 8]), [true, false, false, false], 'Test 82');
test(checkArithmeticSubarrays([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20], [0,5,10,15], [4,9,14,19]), [true, true, true, true], 'Test 83');
test(checkArithmeticSubarrays([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61], [0,3,6,9,12,15], [2,5,8,11,14,17]), [true, true, true, true, true, true], 'Test 84');
test(checkArithmeticSubarrays([-5,-4,-3,-2,-1,0,1,2,3,4,5], [0,1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8,10]), [true, true, true, true, true, true, true, true, true], 'Test 85');
test(checkArithmeticSubarrays([0,1,-1,2,-2,3,-3,4,-4], [0,3,6], [2,5,8]), [true, false, false], 'Test 86');
test(checkArithmeticSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [0, 1, 3, 5, 7], [2, 4, 6, 8, 9]), [true, true, true, true, true], 'Test 87');
test(checkArithmeticSubarrays([5,3,1,-1,-3,-5,-7,-9,-11,-13], [0,2,4,6,8], [1,3,5,7,9]), [true, true, true, true, true], 'Test 88');
test(checkArithmeticSubarrays([4,6,8,10,12,14,16,18,20,22,24], [0,2,4,6,8,10], [1,3,5,7,9,10]), Error: integer division or modulo by zero, 'Test 89');
test(checkArithmeticSubarrays([9,7,5,3,1,10,8,6,4,2], [0,2,4,6,8], [2,4,6,8,9]), [true, true, false, true, true], 'Test 90');
test(checkArithmeticSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 2, 3], [2, 3, 4, 8]), [true, true, true, true], 'Test 91');
test(checkArithmeticSubarrays([-10,-5,0,5,10,15,20,25,30,35], [0,3,6,9], [2,5,8,9]), Error: integer division or modulo by zero, 'Test 92');
test(checkArithmeticSubarrays([100,200,300,400,500,600,700,800,900,1000], [0,0,2,4,6,8], [2,4,6,8,9,9]), [true, true, true, true, true, true], 'Test 93');
test(checkArithmeticSubarrays([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], [0,1,2,3,4,5,6,7,8], [9,8,7,6,5,4,3,2,1]), Error: min[] iterable argument is empty, 'Test 94');
test(checkArithmeticSubarrays([100,200,300,400,500,600,700,800,900,1000], [0,4,6,8], [3,7,9,9]), [true, true, true, true], 'Test 95');
test(checkArithmeticSubarrays([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60], [0,4,8,12,16,20], [3,7,11,15,19,20]), Error: min[] iterable argument is empty, 'Test 96');
test(checkArithmeticSubarrays([100,200,300,400,500,600,700], [0,1,2,3], [1,2,3,4]), [true, true, true, true], 'Test 97');
test(checkArithmeticSubarrays([2,10,4,5,7,6,9], [0,1,2,3,4], [2,3,5,5,6]), [false, false, true, true, false], 'Test 98');
test(checkArithmeticSubarrays([100,200,300,400,500,600,700,800,900,1000], [0,1,2,3,4], [1,2,3,4,9]), [true, true, true, true, true], 'Test 99');
test(checkArithmeticSubarrays([5,4,3,2,1,0,-1,-2,-3,-4,-5], [0,5,2,8], [4,10,6,10]), [true, true, true, true], 'Test 100');
test(checkArithmeticSubarrays([100,200,300,400,500,600,700,800,900,1000], [0,2,4,6,8], [1,3,5,7,9]), [true, true, true, true, true], 'Test 101');
test(checkArithmeticSubarrays([1,1,1,1,1,1,1,1,1,1], [0,1,2,3,4,5,6,7,8], [9,8,7,6,5,4,3,2,1]), Error: min[] iterable argument is empty, 'Test 102');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [0,2,4,6,8,10,12,14,16,18,20,22,24], [1,3,5,7,9,11,13,15,17,19,21,23,25]), [true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 103');
test(checkArithmeticSubarrays([9,8,7,6,5,4,3,2,1], [0,2,4,6], [3,5,7,8]), [true, true, true, true], 'Test 104');
test(checkArithmeticSubarrays([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90], [0,4,8,12,16], [3,7,11,15,18]), [true, true, true, true, false], 'Test 105');
test(checkArithmeticSubarrays([10,20,30,40,50,60,70,80,90], [0,1,2,3,4,5], [1,2,3,4,5,8]), [true, true, true, true, true, true], 'Test 106');
test(checkArithmeticSubarrays([5,10,15,20,25,30,35], [0,2,4], [2,4,6]), [true, true, true], 'Test 107');
test(checkArithmeticSubarrays([1,4,7,10,13,16,19,22,25,28], [0,2,4,6], [1,3,5,9]), [true, true, true, true], 'Test 108');
test(checkArithmeticSubarrays([-100000,-99999,-99998,-99997,-99996,-99995,-99994,-99993,-99992,-99991], [0,1,2,3,4,5,6,7], [1,2,3,4,5,6,7,9]), [true, true, true, true, true, true, true, true], 'Test 109');
test(checkArithmeticSubarrays([1,1,1,1,1,1,1,1,1,1], [0,2,4,6,8], [1,3,5,7,9]), [true, true, true, true, true], 'Test 110');
test(checkArithmeticSubarrays([0,0,0,0,0,0,0,0,0,0], [0,1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8,9]), [true, true, true, true, true, true, true, true, true], 'Test 111');
test(checkArithmeticSubarrays([1,3,6,10,15,21,28,36,45,55,66], [0,1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8,10]), [true, true, true, true, true, true, true, true, false], 'Test 112');
test(checkArithmeticSubarrays([1,3,5,7,9,11,13,15,17], [0,2,4,6], [2,4,6,8]), [true, true, true, true], 'Test 113');
test(checkArithmeticSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], [0,5,10,15], [4,9,14,19]), [false, false, false, false], 'Test 114');
test(checkArithmeticSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 2, 4, 6, 8], [1, 3, 5, 7, 9]), [true, true, true, true, true], 'Test 115');
test(checkArithmeticSubarrays([1,1,1,1,1,1,1,1,1,1], [0,1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8,9]), [true, true, true, true, true, true, true, true, true], 'Test 116');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], [19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), Error: min[] iterable argument is empty, 'Test 117');
test(checkArithmeticSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [0, 5, 7, 9], [4, 9, 10, 11]), [true, true, true, true], 'Test 118');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [0,1,2,3,4,5,6], [1,2,3,4,5,6,14]), [true, true, true, true, true, true, true], 'Test 119');
test(checkArithmeticSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], [0, 2, 4, 6], [1, 3, 5, 7]), [true, true, true, true], 'Test 120');
test(checkArithmeticSubarrays([10,5,15,20,25,30,35], [0,2,4], [4,5,6]), [true, true, true], 'Test 121');
test(checkArithmeticSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], [24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), Error: integer division or modulo by zero, 'Test 122');
test(checkArithmeticSubarrays([1,3,5,7,9,11,13,15,17,19], [0,2,4,6,8], [1,4,7,9,9]), [true, true, true, true, true], 'Test 123');
test(checkArithmeticSubarrays([10,-10,20,-20,30,-30,40,-40,50,-50], [0,2,4,6,8], [2,4,6,8,9]), [false, false, false, false, true], 'Test 124');
test(checkArithmeticSubarrays([1,5,9,13,17,21,25], [0,1,2,3], [1,2,3,6]), [true, true, true, true], 'Test 125');
test(checkArithmeticSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], [0,3,6,9,12], [2,5,8,11,14]), [true, true, true, true, true], 'Test 126');
test(checkArithmeticSubarrays([7,7,7,7,7,7,7,7,7,7], [0,1,2,3,4,5], [1,2,3,4,5,9]), [true, true, true, true, true, true], 'Test 127');
test(checkArithmeticSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110], [0, 2, 4, 6], [2, 4, 6, 8]), [true, true, true, true], 'Test 128');
test(checkArithmeticSubarrays([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], [0,5,10,15], [4,9,14,19]), [true, true, true, true], 'Test 129');
test(checkArithmeticSubarrays([1,2,2,3,4,5,6,7,8,9,10], [0,2,4,6], [1,5,7,9]), [true, true, true, true], 'Test 130');
test(checkArithmeticSubarrays([5,1,3,2,4,6,8,7,9,10], [0,2,4,6,8], [2,4,6,8,9]), [true, true, true, true, true], 'Test 131');
test(checkArithmeticSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], [0, 2, 4, 6, 8], [1, 3, 5, 7, 9]), [true, true, true, true, true], 'Test 132');
test(checkArithmeticSubarrays([100,200,300,400,500,600,700,800], [0,1,2,3,4], [1,3,5,7,7]), [true, true, true, true, true], 'Test 133');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [0,2,4,6,8,10], [1,3,5,7,9,11]), [true, true, true, true, true, true], 'Test 134');
test(checkArithmeticSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8], [9, 8, 7, 6, 5, 4, 3, 2, 1]), Error: min[] iterable argument is empty, 'Test 135');
test(checkArithmeticSubarrays([15, 25, 35, 45, 55, 65, 75, 85, 95, 105], [0, 3, 6, 9], [2, 5, 8, 9]), Error: integer division or modulo by zero, 'Test 136');
test(checkArithmeticSubarrays([1,5,9,13,17,21,25], [0,3,5], [2,5,6]), [true, true, true], 'Test 137');
test(checkArithmeticSubarrays([-10,0,10,20,30,-20,-30], [0,3,4], [2,5,6]), [true, false, false], 'Test 138');
test(checkArithmeticSubarrays([5,10,15,20,25,30,35,40,45,50], [0,1,2,3,4,5,6,7,8], [9,8,7,6,5,4,3,2,1]), Error: min[] iterable argument is empty, 'Test 139');
test(checkArithmeticSubarrays([1,2,3,6,5,4,9,8,7,12,11,10], [0,3,6,9], [2,5,8,11]), [true, true, true, true], 'Test 140');
test(checkArithmeticSubarrays([1,2,3,6,5,4,7,8,9], [0,1,3], [2,5,8]), [true, true, true], 'Test 141');
test(checkArithmeticSubarrays([1,2,4,5,7,8,10,11,13,14,16], [0,2,4,6,8], [1,3,5,7,10]), [true, true, true, true, false], 'Test 142');
test(checkArithmeticSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], [0,7,12], [6,11,14]), [true, true, true], 'Test 143');
test(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [0,1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9,19]), [true, true, true, true, true, true, true, true, true, true], 'Test 144');
test(checkArithmeticSubarrays([3,6,9,12,15,18,21], [0,1,2,3,4], [1,2,3,4,6]), [true, true, true, true, true], 'Test 145');
test(checkArithmeticSubarrays([1,3,5,7,9,11,13,15,17,19,21], [0,3,6,9], [2,5,8,10]), [true, true, true, true], 'Test 146');

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
