// Test: 805. Split Array With Same Average
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { splitArraySameAverage } = require("./solution");

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

console.log("\n805. Split Array With Same Average\n");

test(splitArraySameAverage([10,20,30]), true, 'Test 1');
test(splitArraySameAverage([5,5,5,5,5,5,5,5]), true, 'Test 2');
test(splitArraySameAverage([2,4,6,8,10,12]), true, 'Test 3');
test(splitArraySameAverage([1,1,1,1]), true, 'Test 4');
test(splitArraySameAverage([2,4,6,8,10]), true, 'Test 5');
test(splitArraySameAverage([1,3,5,7,9]), true, 'Test 6');
test(splitArraySameAverage([10000,10000,10000]), true, 'Test 7');
test(splitArraySameAverage([30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]), true, 'Test 8');
test(splitArraySameAverage([1,2,3,4]), true, 'Test 9');
test(splitArraySameAverage([18,10,5,3]), false, 'Test 10');
test(splitArraySameAverage([10000,0,10000,0]), true, 'Test 11');
test(splitArraySameAverage([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), true, 'Test 12');
test(splitArraySameAverage([10,20,30,40,50]), true, 'Test 13');
test(splitArraySameAverage([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), false, 'Test 14');
test(splitArraySameAverage([1,2,3,4,5]), true, 'Test 15');
test(splitArraySameAverage([3,1]), false, 'Test 16');
test(splitArraySameAverage([1,1,1,1,1,1,1,1,1,1]), true, 'Test 17');
test(splitArraySameAverage([1,2,3,4,5,6]), true, 'Test 18');
test(splitArraySameAverage([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 19');
test(splitArraySameAverage([0,0,0,0]), true, 'Test 20');
test(splitArraySameAverage([2,2,2,2]), true, 'Test 21');
test(splitArraySameAverage([5,5,5,5,5,5]), true, 'Test 22');
test(splitArraySameAverage([6,6,6,6,6,6]), true, 'Test 23');
test(splitArraySameAverage([1,2,3,4,5,6,7,8]), true, 'Test 24');
test(splitArraySameAverage([6,6,6,6]), true, 'Test 25');
test(splitArraySameAverage([1,3,5,7]), true, 'Test 26');
test(splitArraySameAverage([1,2,3]), true, 'Test 27');
test(splitArraySameAverage([5,5,5,5,5,5,5,5,5,5]), true, 'Test 28');
test(splitArraySameAverage([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 58000]), false, 'Test 29');
test(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]), true, 'Test 30');
test(splitArraySameAverage([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]), true, 'Test 31');
test(splitArraySameAverage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10000]), false, 'Test 32');
test(splitArraySameAverage([10000, 9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991, 9990]), true, 'Test 33');
test(splitArraySameAverage([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), true, 'Test 34');
test(splitArraySameAverage([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), true, 'Test 35');
test(splitArraySameAverage([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60]), true, 'Test 36');
test(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), true, 'Test 37');
test(splitArraySameAverage([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), true, 'Test 38');
test(splitArraySameAverage([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), false, 'Test 39');
test(splitArraySameAverage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), true, 'Test 40');
test(splitArraySameAverage([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), true, 'Test 41');
test(splitArraySameAverage([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]), false, 'Test 42');
test(splitArraySameAverage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 60]), false, 'Test 43');
test(splitArraySameAverage([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), true, 'Test 44');
test(splitArraySameAverage([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 5000]), false, 'Test 45');
test(splitArraySameAverage([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), true, 'Test 46');
test(splitArraySameAverage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100]), false, 'Test 47');
test(splitArraySameAverage([10000, 0, 10000, 0, 10000, 0, 10000, 0, 10000, 0, 10000, 0, 10000, 0, 10000, 0, 10000, 0, 10000, 0]), true, 'Test 48');
test(splitArraySameAverage([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), false, 'Test 49');
test(splitArraySameAverage([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60]), true, 'Test 50');
test(splitArraySameAverage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 51');
test(splitArraySameAverage([1, 2, 3, 6, 4, 5, 9, 7, 8, 10]), true, 'Test 52');
test(splitArraySameAverage([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000]), true, 'Test 53');
test(splitArraySameAverage([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]), true, 'Test 54');
test(splitArraySameAverage([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), true, 'Test 55');
test(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50]), true, 'Test 56');
test(splitArraySameAverage([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), false, 'Test 57');
test(splitArraySameAverage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), false, 'Test 58');
test(splitArraySameAverage([1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040]), false, 'Test 59');
test(splitArraySameAverage([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), true, 'Test 60');
test(splitArraySameAverage([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), true, 'Test 61');
test(splitArraySameAverage([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), true, 'Test 62');
test(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 58]), false, 'Test 63');
test(splitArraySameAverage([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), false, 'Test 64');
test(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), true, 'Test 65');
test(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 66');
test(splitArraySameAverage([1, 10, 100, 1000, 10000, 1, 10, 100, 1000, 10000, 1, 10, 100, 1000, 10000, 1, 10, 100, 1000, 10000]), true, 'Test 67');
test(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]), true, 'Test 68');
test(splitArraySameAverage([5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10]), true, 'Test 69');
test(splitArraySameAverage([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), true, 'Test 70');
test(splitArraySameAverage([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), true, 'Test 71');
test(splitArraySameAverage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), false, 'Test 72');
test(splitArraySameAverage([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), true, 'Test 73');
test(splitArraySameAverage([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 15000]), false, 'Test 74');
test(splitArraySameAverage([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59]), true, 'Test 75');
test(splitArraySameAverage([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), true, 'Test 76');
test(splitArraySameAverage([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), true, 'Test 77');
test(splitArraySameAverage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), true, 'Test 78');
test(splitArraySameAverage([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60]), true, 'Test 79');
test(splitArraySameAverage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), true, 'Test 80');
test(splitArraySameAverage([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]), true, 'Test 81');
test(splitArraySameAverage([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 300]), false, 'Test 82');
test(splitArraySameAverage([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), true, 'Test 83');
test(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 59]), true, 'Test 84');
test(splitArraySameAverage([0, 0, 0, 0, 0, 0, 1, 1]), true, 'Test 85');
test(splitArraySameAverage([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8]), true, 'Test 86');
test(splitArraySameAverage([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145]), true, 'Test 87');
test(splitArraySameAverage([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300]), true, 'Test 88');
test(splitArraySameAverage([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), true, 'Test 89');
test(splitArraySameAverage([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15]), true, 'Test 90');
test(splitArraySameAverage([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 91');
test(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), true, 'Test 92');
test(splitArraySameAverage([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), true, 'Test 93');
test(splitArraySameAverage([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), true, 'Test 94');
test(splitArraySameAverage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), false, 'Test 95');
test(splitArraySameAverage([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), true, 'Test 96');
test(splitArraySameAverage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 97');
test(splitArraySameAverage([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 590]), true, 'Test 98');
test(splitArraySameAverage([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 99');
test(splitArraySameAverage([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900]), true, 'Test 100');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

