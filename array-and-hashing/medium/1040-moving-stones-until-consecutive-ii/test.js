// Test: 1040. Moving Stones Until Consecutive Ii
// 140 test cases from LeetCodeDataset
// Run: node test.js

const { numMovesStonesII } = require("./solution");

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

console.log("\n1040. Moving Stones Until Consecutive Ii\n");

test(numMovesStonesII([4,5,6,7,100]), [2, 92], 'Test 1');
test(numMovesStonesII([10,11,12,14,15,16]), [1, 1], 'Test 2');
test(numMovesStonesII([3,6,9,12,15]), [3, 6], 'Test 3');
test(numMovesStonesII([6,5,4,3,10]), [2, 3], 'Test 4');
test(numMovesStonesII([1,3,5,7,9]), [2, 3], 'Test 5');
test(numMovesStonesII([1,1000000000,2000000000]), [2, 999999999], 'Test 6');
test(numMovesStonesII([7,4,9]), [1, 2], 'Test 7');
test(numMovesStonesII([10,9,8,7,6,5,4,3,2,1]), [0, 0], 'Test 8');
test(numMovesStonesII([100,101,102,103]), [0, 0], 'Test 9');
test(numMovesStonesII([1,2,100,101,102]), [2, 97], 'Test 10');
test(numMovesStonesII([1,5,9,14,15]), [3, 10], 'Test 11');
test(numMovesStonesII([1,5,100]), [2, 94], 'Test 12');
test(numMovesStonesII([1,2,5,7,9]), [2, 4], 'Test 13');
test(numMovesStonesII([10,11,12,13,14,15]), [0, 0], 'Test 14');
test(numMovesStonesII([2,3,6,8,9]), [2, 3], 'Test 15');
test(numMovesStonesII([1,2,5]), [2, 2], 'Test 16');
test(numMovesStonesII([1,2,3,4,5]), [0, 0], 'Test 17');
test(numMovesStonesII([1,2,3,4,10,11,12,13]), [4, 5], 'Test 18');
test(numMovesStonesII([1,100,101,102]), [2, 98], 'Test 19');
test(numMovesStonesII([1,2,3,8,10]), [2, 5], 'Test 20');
test(numMovesStonesII([1,2,1000,1001,1002,1003]), [2, 997], 'Test 21');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [0, 0], 'Test 22');
test(numMovesStonesII([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45]), [10, 26], 'Test 23');
test(numMovesStonesII([1, 10, 11, 12, 13, 14, 15, 20]), [2, 8], 'Test 24');
test(numMovesStonesII([1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101]), [9, 81], 'Test 25');
test(numMovesStonesII([5,6,10,11,15,16,20,21,25,26,30,31,35,36,40]), [9, 21], 'Test 26');
test(numMovesStonesII([10,11,12,13,14,15,16,17,18,19,20,100,101]), [2, 79], 'Test 27');
test(numMovesStonesII([1, 2, 10, 20, 30, 40, 50, 60, 70, 80]), [7, 70], 'Test 28');
test(numMovesStonesII([1,2,1000,2000,3000,4000,5000]), [5, 4993], 'Test 29');
test(numMovesStonesII([1,10,11,12,13,14,15,16,17,18,19,20]), [2, 8], 'Test 30');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]), [0, 0], 'Test 31');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,100]), [2, 79], 'Test 32');
test(numMovesStonesII([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]), [7, 88], 'Test 33');
test(numMovesStonesII([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35]), [8, 20], 'Test 34');
test(numMovesStonesII([1,3,10,15,18,25]), [4, 18], 'Test 35');
test(numMovesStonesII([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), [14, 126], 'Test 36');
test(numMovesStonesII([1,2,5,6,9,10,13,14,17,18,21,22,25,26,29,30]), [8, 14], 'Test 37');
test(numMovesStonesII([10, 11, 12, 20, 21, 22, 23, 24]), [3, 7], 'Test 38');
test(numMovesStonesII([1, 3, 5, 7, 9, 11, 15]), [3, 7], 'Test 39');
test(numMovesStonesII([1,3,6,8,12,15,18,22,25]), [5, 15], 'Test 40');
test(numMovesStonesII([2, 5, 7, 12, 15, 18, 22, 25, 28, 32, 35, 38]), [8, 23], 'Test 41');
test(numMovesStonesII([100, 101, 102, 200, 201, 202, 300, 301, 302]), [6, 194], 'Test 42');
test(numMovesStonesII([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,100]), [19, 72], 'Test 43');
test(numMovesStonesII([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300,325,351,378,406,435,465,496,528,561,595,630,666,703,741,780,820,861,903,946,990,1035,1081,1128,1176,1225,1275,1326,1378,1431,1485,1540,1596,1653,1711,1770,1830,1891,1953,2016,2080,2145,2211,2278,2346,2415,2485,2556,2628,2701,2775,2850,2926,3003,3081,3160,3240,3321,3403,3486,3570,3655,3741,3828,3916,4005,4095,4186,4278,4371,4465,4560,4656,4753,4851,4950]), [86, 4850], 'Test 44');
test(numMovesStonesII([1, 3, 6, 8, 10, 13, 16, 18, 21]), [5, 11], 'Test 45');
test(numMovesStonesII([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406, 435, 465, 496, 528, 561, 595, 630, 666, 703, 741, 780, 820, 861, 903, 946, 990, 1035, 1081]), [37, 1034], 'Test 46');
test(numMovesStonesII([1, 2, 3, 6, 10]), [2, 5], 'Test 47');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), [0, 0], 'Test 48');
test(numMovesStonesII([5, 10, 15, 20, 25, 30, 35]), [5, 20], 'Test 49');
test(numMovesStonesII([1,2,3,4,5,10,11,12,13,14,20,21,22,23,24,30,31,32,33,34,40,41,42,43,44,50,51,52,53,54]), [14, 24], 'Test 50');
test(numMovesStonesII([1,2,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]), [2, 97], 'Test 51');
test(numMovesStonesII([1, 2, 3, 10, 11, 12, 20, 21, 22, 30]), [6, 20], 'Test 52');
test(numMovesStonesII([1, 2, 3, 4, 100, 101, 102]), [3, 95], 'Test 53');
test(numMovesStonesII([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), [18, 171], 'Test 54');
test(numMovesStonesII([1,100,200,300,400,500,600,700,800,900,1000]), [10, 891], 'Test 55');
test(numMovesStonesII([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190]), [17, 162], 'Test 56');
test(numMovesStonesII([1, 2, 3, 4, 100, 101, 102, 103]), [4, 95], 'Test 57');
test(numMovesStonesII([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101, 105, 109, 113]), [21, 81], 'Test 58');
test(numMovesStonesII([5,15,25,35,45,55,65,75,85,95,105]), [9, 81], 'Test 59');
test(numMovesStonesII([1,2,1000000000]), [2, 999999997], 'Test 60');
test(numMovesStonesII([1, 2, 3, 100, 101, 102, 200, 201, 202, 300]), [7, 290], 'Test 61');
test(numMovesStonesII([1,2,10,11,12,13,14,15,16,17,18,19,20]), [2, 7], 'Test 62');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,100]), [2, 90], 'Test 63');
test(numMovesStonesII([2,5,7,10,15,20,30]), [4, 20], 'Test 64');
test(numMovesStonesII([1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95]), [15, 72], 'Test 65');
test(numMovesStonesII([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300]), [27, 261], 'Test 66');
test(numMovesStonesII([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]), [6, 11], 'Test 67');
test(numMovesStonesII([10,20,30,40,50,60,70,80,90,100,110,120,130]), [11, 99], 'Test 68');
test(numMovesStonesII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40]), [3, 27], 'Test 69');
test(numMovesStonesII([1,2,4,6,8,10,12,14,16,18,20,22,24,26,28]), [7, 13], 'Test 70');
test(numMovesStonesII([1, 10, 15, 20, 25, 30, 35, 40, 45, 50]), [8, 36], 'Test 71');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [0, 0], 'Test 72');
test(numMovesStonesII([1,2,3,7,8,9,13,14,15,19,20,21]), [6, 9], 'Test 73');
test(numMovesStonesII([2, 5, 7, 8, 11, 13, 15, 17, 19, 22, 25, 27, 29]), [6, 14], 'Test 74');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1000]), [2, 980], 'Test 75');
test(numMovesStonesII([1,2,3,6,7,8,10,11,12,15,16,17]), [3, 5], 'Test 76');
test(numMovesStonesII([1,3,5,7,9,11,13,15,17,19,21,23,25]), [6, 11], 'Test 77');
test(numMovesStonesII([10,20,30,40,50,60,70,80,90,100]), [9, 72], 'Test 78');
test(numMovesStonesII([1,2,3,8,9,10,11]), [3, 4], 'Test 79');
test(numMovesStonesII([1,5,10,15,20,25,30,35,40,45,50]), [8, 36], 'Test 80');
test(numMovesStonesII([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,30]), [7, 14], 'Test 81');
test(numMovesStonesII([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), [6, 502], 'Test 82');
test(numMovesStonesII([1,2,3,5,6,7,10,11,12,15,16,17,20,21,22,25,26,27]), [6, 9], 'Test 83');
test(numMovesStonesII([1, 2, 3, 4, 5, 6, 7, 100, 101, 102, 103, 104, 105, 106]), [7, 92], 'Test 84');
test(numMovesStonesII([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35]), [9, 16], 'Test 85');
test(numMovesStonesII([1,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000,16000,17000,18000,19000,20000]), [20, 18981], 'Test 86');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,20,21,22,23,24,25]), [6, 9], 'Test 87');
test(numMovesStonesII([2,4,5,6,8,10,11,13,15,16]), [3, 5], 'Test 88');
test(numMovesStonesII([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]), [17, 162], 'Test 89');
test(numMovesStonesII([1,10,20,30,40,50,60,70,80,90,100,200,300,400,500]), [13, 477], 'Test 90');
test(numMovesStonesII([1,2,3,4,9,10,11,12,17,18,19,20]), [4, 8], 'Test 91');
test(numMovesStonesII([1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250]), [40, 196], 'Test 92');
test(numMovesStonesII([1, 2, 3, 5, 6, 8, 10, 11]), [2, 3], 'Test 93');
test(numMovesStonesII([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), [9, 81], 'Test 94');
test(numMovesStonesII([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57]), [11, 39], 'Test 95');
test(numMovesStonesII([1,2,3,8,9,10,11,16,17,18,19,24,25,26,27]), [7, 12], 'Test 96');
test(numMovesStonesII([2, 5, 7, 11, 14, 17, 20]), [4, 10], 'Test 97');
test(numMovesStonesII([1, 4, 8, 10, 13, 17, 20]), [4, 11], 'Test 98');
test(numMovesStonesII([1,2,3,4,5,100,101,102,103,104]), [5, 94], 'Test 99');
test(numMovesStonesII([1, 2, 5, 7, 11, 13, 17, 19]), [4, 11], 'Test 100');
test(numMovesStonesII([3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105]), [9, 88], 'Test 101');
test(numMovesStonesII([1, 2, 3, 8, 9, 10]), [3, 4], 'Test 102');
test(numMovesStonesII([5, 10, 15, 20, 25, 30, 35, 40]), [6, 24], 'Test 103');
test(numMovesStonesII([1,3,6,10,14,15]), [3, 9], 'Test 104');
test(numMovesStonesII([1,3,5,7,9,100]), [3, 93], 'Test 105');
test(numMovesStonesII([1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130]), [21, 100], 'Test 106');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150]), [0, 0], 'Test 107');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,26,27,28,29,30]), [4, 4], 'Test 108');
test(numMovesStonesII([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500]), [45, 441], 'Test 109');
test(numMovesStonesII([1,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,40]), [2, 9], 'Test 110');
test(numMovesStonesII([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), [7, 13], 'Test 111');
test(numMovesStonesII([1,2,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), [16, 78], 'Test 112');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [0, 0], 'Test 113');
test(numMovesStonesII([2,5,7,8,11,13,16,20]), [4, 9], 'Test 114');
test(numMovesStonesII([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), [8, 32], 'Test 115');
test(numMovesStonesII([1, 3, 6, 10, 15, 21, 28, 36, 45, 55]), [6, 44], 'Test 116');
test(numMovesStonesII([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75]), [12, 52], 'Test 117');
test(numMovesStonesII([1,10,20,30,40,50,60,70,80,90]), [8, 72], 'Test 118');
test(numMovesStonesII([1,2,3,1000000000,2000000000]), [2, 1999999995], 'Test 119');
test(numMovesStonesII([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]), [8, 999999982], 'Test 120');
test(numMovesStonesII([100,200,300,400,500,600,700,800,900,1000]), [9, 792], 'Test 121');
test(numMovesStonesII([1, 2, 3, 4, 100, 101, 102, 150]), [4, 142], 'Test 122');
test(numMovesStonesII([5,10,15,20,25,30,35,40,45,50]), [8, 32], 'Test 123');
test(numMovesStonesII([1, 2, 3, 4, 5, 100, 101, 102, 103, 104]), [5, 94], 'Test 124');
test(numMovesStonesII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 100, 101, 102, 103, 104, 105]), [6, 84], 'Test 125');
test(numMovesStonesII([100,101,102,103,104,200,201,202,203,204]), [5, 95], 'Test 126');
test(numMovesStonesII([1,3,10,20,30,40,50]), [5, 42], 'Test 127');
test(numMovesStonesII([1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), [16, 76], 'Test 128');
test(numMovesStonesII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), [13, 117], 'Test 129');
test(numMovesStonesII([2,5,10,15,20,25,30,35,40]), [6, 28], 'Test 130');
test(numMovesStonesII([1, 3, 5, 10, 20, 30]), [3, 23], 'Test 131');
test(numMovesStonesII([1,2,5,6,10,11,13,14,17,18]), [4, 8], 'Test 132');
test(numMovesStonesII([1, 2, 3, 4, 5, 10, 11, 12, 13, 14]), [4, 4], 'Test 133');
test(numMovesStonesII([1, 2, 3, 10, 11, 12]), [3, 6], 'Test 134');
test(numMovesStonesII([1,2,3,4,5,6,7,8,9,10,100]), [2, 89], 'Test 135');
test(numMovesStonesII([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [0, 0], 'Test 136');
test(numMovesStonesII([1,3,6,10,15,21,28,36,45,55,66,78,91,105]), [10, 90], 'Test 137');
test(numMovesStonesII([5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]), [6, 10], 'Test 138');
test(numMovesStonesII([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), [16, 72], 'Test 139');
test(numMovesStonesII([1,1000000000]), [2, 0], 'Test 140');

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
