// Test: 16. 3Sum Closest
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { threeSumClosest } = require("./solution");

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

console.log("\n16. 3Sum Closest\n");

test(threeSumClosest([1,2,4,8,16,32,64,128], 82), 82, 'Test 1');
test(threeSumClosest([1,1,1,0], -100), 2, 'Test 2');
test(threeSumClosest([-10,-2,-5,-1], -12), -13, 'Test 3');
test(threeSumClosest([-5,-4,-3,-2,-1], -10), -10, 'Test 4');
test(threeSumClosest([0,0,0], 1), 0, 'Test 5');
test(threeSumClosest([1,1,1,1], 3), 3, 'Test 6');
test(threeSumClosest([5,5,5,5], 15), 15, 'Test 7');
test(threeSumClosest([-1,-2,-3,-4,-5], -10), -10, 'Test 8');
test(threeSumClosest([-1,0,1,2,-1,-4], 1), 1, 'Test 9');
test(threeSumClosest([-1,2,1,-4], 1), 2, 'Test 10');
test(threeSumClosest([5,1,3,4,2], 7), 7, 'Test 11');
test(threeSumClosest([1,1,1,1], 0), 3, 'Test 12');
test(threeSumClosest([1,2,3,4,5,6,7,8,9], 15), 15, 'Test 13');
test(threeSumClosest([1,2,3,4,5], 10), 10, 'Test 14');
test(threeSumClosest([-5, -4, -4, -3, -2, -1, 0, 0, 1, 2, 3, 4, 4, 5], 0), 0, 'Test 15');
test(threeSumClosest([999,-999,888,-888,777,-777,666,-666,555,-555,444,-444,333,-333,222,-222,111,-111], 0), 0, 'Test 16');
test(threeSumClosest([1,2,3,4,5,6,7,8,9,10], 25), 25, 'Test 17');
test(threeSumClosest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 45), 42, 'Test 18');
test(threeSumClosest([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1500), 1500, 'Test 19');
test(threeSumClosest([5, 7, 7, 8, 8, 10, 12, 13, 15, 17, 19, 21, 23, 25, 27], 30), 30, 'Test 20');
test(threeSumClosest([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 50), 49, 'Test 21');
test(threeSumClosest([-100, -200, -300, -400, -500, 100, 200, 300, 400, 500], 0), 0, 'Test 22');
test(threeSumClosest([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 45), 45, 'Test 23');
test(threeSumClosest([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0), 0, 'Test 24');
test(threeSumClosest([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20], -100), -57, 'Test 25');
test(threeSumClosest([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1], -30), -27, 'Test 26');
test(threeSumClosest([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100], 150), 150, 'Test 27');
test(threeSumClosest([-10, -20, -30, -40, -50, 1, 2, 3, 4, 5], -150), -120, 'Test 28');
test(threeSumClosest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 50), 42, 'Test 29');
test(threeSumClosest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 25), 25, 'Test 30');
test(threeSumClosest([3,5,-4,8,11,1,-1,6], 10), 10, 'Test 31');
test(threeSumClosest([1000, -1000, 500, -500, 250, -250, 125, -125], 100), 125, 'Test 32');
test(threeSumClosest([-3,-1,0,2,4,6,9,12], 14), 14, 'Test 33');
test(threeSumClosest([-1, 0, 1, 2, -1, -4, 3, 4, 5, 6, 7, 8, 9, 10], 15), 15, 'Test 34');
test(threeSumClosest([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120], -300), -300, 'Test 35');
test(threeSumClosest([-10, -20, -30, -40, -50, 50, 40, 30, 20, 10], 0), 0, 'Test 36');
test(threeSumClosest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 57, 'Test 37');
test(threeSumClosest([-5, -2, -1, 0, 1, 2, 5], 0), 0, 'Test 38');
test(threeSumClosest([-5,-4,-3,-2,-1,0,1,2,3,4,5], -5), -5, 'Test 39');
test(threeSumClosest([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100], -150), -150, 'Test 40');
test(threeSumClosest([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -25), -25, 'Test 41');
test(threeSumClosest([3,5,8,9,15,1,7,6,4,10], 28), 28, 'Test 42');
test(threeSumClosest([1000, -1000, 500, -500, 250, -250, 0, 1, -1], 100), 1, 'Test 43');
test(threeSumClosest([33,55,77,99,111,133,155,177,199,221,243,265,287,309,331,353,375,397,419,441], 1200), 1191, 'Test 44');
test(threeSumClosest([100, 50, 25, 20, 10, 5, 1], 120), 121, 'Test 45');
test(threeSumClosest([-1, 0, 1, 0, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6], 0), 0, 'Test 46');
test(threeSumClosest([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 15), 15, 'Test 47');
test(threeSumClosest([-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 100), 100, 'Test 48');
test(threeSumClosest([1,2,3,4,5,6,7,8,9], 20), 20, 'Test 49');
test(threeSumClosest([999, 1000, -1000, 999, -999, 1, -1, 2, -2], 3000), 2998, 'Test 50');
test(threeSumClosest([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15], -45), -42, 'Test 51');
test(threeSumClosest([-1, 2, -8, 4, 5, -10, 7, 0, 1], 0), 0, 'Test 52');
test(threeSumClosest([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 300), 300, 'Test 53');
test(threeSumClosest([-1000, 1000, -500, 500, -250, 250, 0, 1, -1, 2, -2], 1001), 1001, 'Test 54');
test(threeSumClosest([-100, -200, -300, 400, 500, 600, 700], -150), -100, 'Test 55');
test(threeSumClosest([0, 0, 0, 0, 0, 0, 0], 1), 0, 'Test 56');
test(threeSumClosest([100,-200,300,-400,500,-600,700,-800,900,-1000,1100,-1200,1300,-1400,1500], 500), 500, 'Test 57');
test(threeSumClosest([-1000, -999, -998, -997, 0, 997, 998, 999, 1000], 500), 995, 'Test 58');
test(threeSumClosest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 50), 50, 'Test 59');
test(threeSumClosest([-1,0,1,0,-1,0], 0), 0, 'Test 60');
test(threeSumClosest([-5, -3, -1, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 0), 0, 'Test 61');
test(threeSumClosest([-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1), 1, 'Test 62');
test(threeSumClosest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 100), 100, 'Test 63');
test(threeSumClosest([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10], 0), 0, 'Test 64');
test(threeSumClosest([10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 60, -60, 70, -70, 80], 0), 0, 'Test 65');
test(threeSumClosest([1000,-1000,500,-500,250,-250,125,-125], 50), 125, 'Test 66');
test(threeSumClosest([100, -100, 200, -200, 300, -300, 400, -400, 500, -500, 600, -600], 1000), 1000, 'Test 67');
test(threeSumClosest([3,3,3,3,3,3,3,3,3,3], 9), 9, 'Test 68');
test(threeSumClosest([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 1000), 570, 'Test 69');
test(threeSumClosest([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 50), 50, 'Test 70');
test(threeSumClosest([0,1,2,3,4,5,6,7,8,9,10], 15), 15, 'Test 71');
test(threeSumClosest([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100], -250), -250, 'Test 72');
test(threeSumClosest([-100, 100, -50, 50, -25, 25, 0], 0), 0, 'Test 73');
test(threeSumClosest([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 1), 1, 'Test 74');
test(threeSumClosest([100, 200, 300, 400, 500, -100, -200, -300, -400, -500], 0), 0, 'Test 75');
test(threeSumClosest([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 30), 30, 'Test 76');
test(threeSumClosest([-999, -998, -997, -996, -995, -994, -993, -992, -991, -990, -989, -988, -987, -986, -985, -984, -983, -982, -981, -980], -3000), -2994, 'Test 77');
test(threeSumClosest([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 30), 30, 'Test 78');
test(threeSumClosest([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10], 0), 0, 'Test 79');
test(threeSumClosest([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 15, 'Test 80');
test(threeSumClosest([100,200,300,400,500,600,700,800,900], 1500), 1500, 'Test 81');
test(threeSumClosest([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 15), 9, 'Test 82');
test(threeSumClosest([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], -25), -25, 'Test 83');
test(threeSumClosest([-1, -3, -5, -7, -9, -11, -13, -15, -17, -19, -21, -23, -25, -27, -29], -45), -45, 'Test 84');
test(threeSumClosest([-2,0,1,1,2], 0), 0, 'Test 85');
test(threeSumClosest([10,20,30,40,50,60,70,80,90,100], 250), 250, 'Test 86');
test(threeSumClosest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 20), 20, 'Test 87');
test(threeSumClosest([-50, -30, -10, 0, 10, 30, 50], 40), 40, 'Test 88');
test(threeSumClosest([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8], 0), 0, 'Test 89');
test(threeSumClosest([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], -250), -250, 'Test 90');
test(threeSumClosest([1000, -1000, 500, -500, 250, -250, 125, -125], 0), -125, 'Test 91');
test(threeSumClosest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 40), 40, 'Test 92');
test(threeSumClosest([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3), 3, 'Test 93');
test(threeSumClosest([5,5,5,5,5,5,5,5,5,5], 15), 15, 'Test 94');
test(threeSumClosest([-3,-2,-1,0,1,2,3], 0), 0, 'Test 95');
test(threeSumClosest([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 15), 15, 'Test 96');
test(threeSumClosest([1,2,4,8,16,32,64,128], 100), 100, 'Test 97');
test(threeSumClosest([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 15), 14, 'Test 98');
test(threeSumClosest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 150), 87, 'Test 99');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

