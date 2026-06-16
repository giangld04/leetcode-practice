// Test: 1497. Check If Array Pairs Are Divisible By K
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { canArrange } = require("./solution");

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

console.log("\n1497. Check If Array Pairs Are Divisible By K\n");

test(canArrange([1,2,3,4,5,6,7,8], 4), true, 'Test 1');
test(canArrange([0,0,0,0], 1), true, 'Test 2');
test(canArrange([1,2,3,4,5,6], 10), false, 'Test 3');
test(canArrange([-1,1,-2,2,-3,3], 2), true, 'Test 4');
test(canArrange([-1,1,-2,2,-3,3], 3), true, 'Test 5');
test(canArrange([1,2,3,4,5,6], 7), true, 'Test 6');
test(canArrange([1,2,3,4,5,6,7,8,9,10], 11), true, 'Test 7');
test(canArrange([1,2,3,4,5,6,7,8], 8), false, 'Test 8');
test(canArrange([1,2,3,4,5,10,6,7,8,9], 5), true, 'Test 9');
test(canArrange([1000000000,-1000000000,2000000000,-2000000000], 1000000000), Execution timed out, 'Test 10');
test(canArrange([0,0,0,0], 3), true, 'Test 11');
test(canArrange([0,0,0,0], 2), true, 'Test 12');
test(canArrange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 6), false, 'Test 13');
test(canArrange([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32], 8), true, 'Test 14');
test(canArrange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59], 10), true, 'Test 15');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 7), false, 'Test 16');
test(canArrange([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 3), false, 'Test 17');
test(canArrange([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155], 20), true, 'Test 18');
test(canArrange([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 5), true, 'Test 19');
test(canArrange([123,246,369,492,615,738,861,984,1107,1230], 123), true, 'Test 20');
test(canArrange([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 5), true, 'Test 21');
test(canArrange([0, k, 2*k, 3*k, 4*k, 5*k, 6*k, 7*k, 8*k, 9*k, 10*k, 11*k, 12*k, 13*k, 14*k, 15*k, 16*k, 17*k, 18*k, 19*k, 20*k, 21*k, 22*k, 23*k, 24*k, 25*k, 26*k, 27*k, 28*k, 29*k], k), Error: Solution.canArrange[] missing 2 required positional arguments: 'arr' and 'k', 'Test 22');
test(canArrange([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 25), true, 'Test 23');
test(canArrange([10,20,30,40,50,60,70,80,90,100], 10), true, 'Test 24');
test(canArrange([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6), true, 'Test 25');
test(canArrange([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), true, 'Test 26');
test(canArrange([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 6), false, 'Test 27');
test(canArrange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 10), false, 'Test 28');
test(canArrange([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5], 3), true, 'Test 29');
test(canArrange([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5), true, 'Test 30');
test(canArrange([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), true, 'Test 31');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 17), false, 'Test 32');
test(canArrange([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15], 3), false, 'Test 33');
test(canArrange([1000000000, -1000000000, 2000000000, -2000000000, 3000000000, -3000000000, 4000000000, -4000000000, 5000000000, -5000000000], 1000000000), Execution timed out, 'Test 34');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 13), false, 'Test 35');
test(canArrange([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32], 10), false, 'Test 36');
test(canArrange([7,14,21,28,35,42,49,56,63,70,77,84], 7), true, 'Test 37');
test(canArrange([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16], 6), false, 'Test 38');
test(canArrange([50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600], 50), true, 'Test 39');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 7), true, 'Test 40');
test(canArrange([-1,1,-2,2,-3,3,-4,4,-5,5,6,6], 5), false, 'Test 41');
test(canArrange([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), true, 'Test 42');
test(canArrange([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80], 15), false, 'Test 43');
test(canArrange([1000000000, -1000000000, 500000000, -500000000, 250000000, -250000000, 125000000, -125000000], 1000000001), Execution timed out, 'Test 44');
test(canArrange([1000000000, -1000000000, 2000000000, -2000000000, 3000000000, -3000000000, 4000000000, -4000000000], 1000000000), Execution timed out, 'Test 45');
test(canArrange([1,1,1,1,1,1,1,1,1,1,1,1], 2), true, 'Test 46');
test(canArrange([1000000000, -1000000000, 1000000000, -1000000000, 500000000, -500000000, 500000000, -500000000], 1000000000), Execution timed out, 'Test 47');
test(canArrange([10,20,30,40,50,60,70,80,90,100], 15), false, 'Test 48');
test(canArrange([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 10), true, 'Test 49');
test(canArrange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23], 4), true, 'Test 50');
test(canArrange([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150], 15), true, 'Test 51');
test(canArrange([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1), true, 'Test 52');
test(canArrange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 20), true, 'Test 53');
test(canArrange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 13), false, 'Test 54');
test(canArrange([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300], 15), true, 'Test 55');
test(canArrange([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 100000), true, 'Test 56');
test(canArrange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 19), false, 'Test 57');
test(canArrange([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), true, 'Test 58');
test(canArrange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 7), false, 'Test 59');
test(canArrange([1000000000, 2000000000, -3000000000, 4000000000, 500000000, -600000000, 70000000, -80000000], 500000000), false, 'Test 60');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 31), true, 'Test 61');
test(canArrange([5,15,25,35,45,55,65,75,85,95], 20), true, 'Test 62');
test(canArrange([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7), true, 'Test 63');
test(canArrange([1,5,9,13,17,21,25,29,33,37], 4), false, 'Test 64');
test(canArrange([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 2), true, 'Test 65');
test(canArrange([1, 7, 13, 19, 25, 31, 37, 43, 49, 55, 61, 67, 73, 79, 85, 91, 97, 103, 109, 115], 6), false, 'Test 66');
test(canArrange([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8], 2), true, 'Test 67');
test(canArrange([-1,1,-2,2,-3,3,-4,4,-5,5], 10), true, 'Test 68');
test(canArrange([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), true, 'Test 69');
test(canArrange([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60], 25), false, 'Test 70');
test(canArrange([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165,176,187,198,209,220], 11), true, 'Test 71');
test(canArrange([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 13), false, 'Test 72');
test(canArrange([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16], 5), false, 'Test 73');
test(canArrange([1, 3, 2, 4, 6, 8, 5, 7, 9, 11], 3), false, 'Test 74');
test(canArrange([7, 3, 2, 6, 8, 10, 9, 5, 1, 4], 7), false, 'Test 75');
test(canArrange([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 5), false, 'Test 76');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 5), false, 'Test 77');
test(canArrange([15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 10), true, 'Test 78');
test(canArrange([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12], 5), false, 'Test 79');
test(canArrange([9,7,5,3,1,8,6,4,2,0,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 10), false, 'Test 80');
test(canArrange([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160], 20), true, 'Test 81');
test(canArrange([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), false, 'Test 82');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 9), false, 'Test 83');
test(canArrange([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 5), true, 'Test 84');
test(canArrange([1000000000, -1000000000, 2000000000, -2000000000, 500000000, -500000000, 0, 0], 1000000000), Execution timed out, 'Test 85');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8), true, 'Test 86');
test(canArrange([1000000000, -1000000000, 500000000, -500000000, 250000000, -250000000], 500000000), Execution timed out, 'Test 87');
test(canArrange([1,2,3,4,5,6,7,8,9,10,11,12], 13), true, 'Test 88');
test(canArrange([2,4,6,8,10,12,14,16,18,20,22,24], 5), false, 'Test 89');
test(canArrange([9,18,27,36,45,54,63,72,81,90], 9), true, 'Test 90');
test(canArrange([1000000000, -1000000000, 500000000, -500000000, 250000000, -250000000, 125000000, -125000000, 62500000, -62500000], 125000000), Execution timed out, 'Test 91');
test(canArrange([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), true, 'Test 92');
test(canArrange([-1,-2,-3,-4,1,2,3,4], 3), true, 'Test 93');
test(canArrange([1000000000, -1000000000, 500000000, -500000000, 250000000, -250000000, 125000000, -125000000, 62500000, -62500000], 500000000), Execution timed out, 'Test 94');
test(canArrange([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 15), true, 'Test 95');
test(canArrange([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 20), false, 'Test 96');
test(canArrange([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5], 3), true, 'Test 97');
test(canArrange([-10, 10, 20, -20, 30, -30, 40, -40], 10), true, 'Test 98');
test(canArrange([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 8), true, 'Test 99');
test(canArrange([101,202,303,404,505,606,707,808,909,1010], 101), true, 'Test 100');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], 19), false, 'Test 101');
test(canArrange([-1000000000, 1000000000, -500000000, 500000000, -250000000, 250000000, 0, 0], 500000000), Execution timed out, 'Test 102');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 39), false, 'Test 103');
test(canArrange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), true, 'Test 104');
test(canArrange([-k, -2*k, -3*k, -4*k, -5*k, -6*k, -7*k, -8*k, -9*k, -10*k, -11*k, -12*k, -13*k, -14*k, -15*k, -16*k, -17*k, -18*k, -19*k, -20*k, -21*k, -22*k, -23*k, -24*k, -25*k, -26*k, -27*k, -28*k, -29*k, 0], k), Error: Solution.canArrange[] missing 2 required positional arguments: 'arr' and 'k', 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

