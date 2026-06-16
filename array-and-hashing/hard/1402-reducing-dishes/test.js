// Test: 1402. Reducing Dishes
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { maxSatisfaction } = require("./solution");

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

console.log("\n1402. Reducing Dishes\n");

test(maxSatisfaction([1,-1,2,-2,3,-3]), 22, 'Test 1');
test(maxSatisfaction([0]), 0, 'Test 2');
test(maxSatisfaction([-1]), 0, 'Test 3');
test(maxSatisfaction([-500, -500, -500, -500, -500]), 0, 'Test 4');
test(maxSatisfaction([0,0,0,0,0]), 0, 'Test 5');
test(maxSatisfaction([-1000,1000,-500,500]), 3500, 'Test 6');
test(maxSatisfaction([0, 0, 0, 0]), 0, 'Test 7');
test(maxSatisfaction([1000,-1000,1000,-1000,1000]), 9000, 'Test 8');
test(maxSatisfaction([-1,-8,0,5,-9]), 14, 'Test 9');
test(maxSatisfaction([-10, -20, -30, 10, 20, 30]), 220, 'Test 10');
test(maxSatisfaction([1,2,3,4,5]), 55, 'Test 11');
test(maxSatisfaction([100,200,300,400,500]), 5500, 'Test 12');
test(maxSatisfaction([-10,-20,-30,-40,-50]), 0, 'Test 13');
test(maxSatisfaction([4,3,2]), 20, 'Test 14');
test(maxSatisfaction([500, 500, 500, 500, 500]), 7500, 'Test 15');
test(maxSatisfaction([-1000, 1000]), 1000, 'Test 16');
test(maxSatisfaction([-1,-4,-5]), 0, 'Test 17');
test(maxSatisfaction([-5,-4,-3,-2,-1]), 0, 'Test 18');
test(maxSatisfaction([-500,-400,-300,-200,-100]), 0, 'Test 19');
test(maxSatisfaction([1000, -1000, 1000, -1000, 1000]), 9000, 'Test 20');
test(maxSatisfaction([1]), 1, 'Test 21');
test(maxSatisfaction([-1,1,-2,2,-3,3]), 22, 'Test 22');
test(maxSatisfaction([1000,-1000,1000,-1000]), 4000, 'Test 23');
test(maxSatisfaction([5,-1,3,2,-2,1]), 52, 'Test 24');
test(maxSatisfaction([10, 9, 8, 7, 6, 5, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 415, 'Test 25');
test(maxSatisfaction([100, -90, 50, -40, 30, -20, 10, -5, 0]), 1320, 'Test 26');
test(maxSatisfaction([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 13600, 'Test 27');
test(maxSatisfaction([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), 715, 'Test 28');
test(maxSatisfaction([-500, -499, -498, -497, -496, -495, -494, -493, -492, -491, -490, -489, -488, -487, -486]), 0, 'Test 29');
test(maxSatisfaction([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]), 155, 'Test 30');
test(maxSatisfaction([999, -999, 998, -998, 997, -997, 996, -996, 995, -995]), 24945, 'Test 31');
test(maxSatisfaction([999, 1000, 998, -1000, 500, 499, 501, -499, -501, 0, 1, -1, 2, -2, 3, -3]), 59488, 'Test 32');
test(maxSatisfaction([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9]), 525, 'Test 33');
test(maxSatisfaction([-1, -2, -3, 4, 5, 6, 7, 8]), 180, 'Test 34');
test(maxSatisfaction([-1, 0, 1, -2, 2, -3, 3, -4, 4, -5, 5]), 110, 'Test 35');
test(maxSatisfaction([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100, 1, 2, 3, 4, 5]), 60, 'Test 36');
test(maxSatisfaction([1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 6, 7, 8, 9, 10]), 625, 'Test 37');
test(maxSatisfaction([5, 4, 3, 2, 1, -1, -2, -3, -4, -5, 6, 7, 8, 9, 10]), 625, 'Test 38');
test(maxSatisfaction([-500, -400, -300, -200, -100, 100, 200, 300, 400, 500]), 9500, 'Test 39');
test(maxSatisfaction([-10, 0, 10, -20, 0, 20, -30, 0, 30, -40]), 400, 'Test 40');
test(maxSatisfaction([10, 20, 30, 40, 50, -10, -20, -30, -40, -50, 60, 70, 80, 90, 100]), 6250, 'Test 41');
test(maxSatisfaction([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 42');
test(maxSatisfaction([-500, 500, -250, 250, 0, 100, -100, 150]), 5850, 'Test 43');
test(maxSatisfaction([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 95, 'Test 44');
test(maxSatisfaction([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]), 570, 'Test 45');
test(maxSatisfaction([-10, 10, -20, 20, -30, 30, -40, 40, -50, 50]), 950, 'Test 46');
test(maxSatisfaction([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987, 986, 985, 984, 983, 982, 981, 980]), 229460, 'Test 47');
test(maxSatisfaction([-100, -200, -300, 50, 100, 150, 200, 250]), 4000, 'Test 48');
test(maxSatisfaction([50, 20, -10, 0, -30, 100, -200, 300, -400, 500]), 8040, 'Test 49');
test(maxSatisfaction([-100, -200, -300, -400, 100, 200, 300, 400, 500]), 9500, 'Test 50');
test(maxSatisfaction([-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5]), 110, 'Test 51');
test(maxSatisfaction([500, 499, 498, 497, 496, 495, 494, 493, 492, 491, 490, 489, 488, 487, 486]), 59440, 'Test 52');
test(maxSatisfaction([500, -1, -2, -3, 0, 1, 2, 3, 4, 5]), 5105, 'Test 53');
test(maxSatisfaction([-999, -998, -997, -996, 999, 998, 997, 996]), 15970, 'Test 54');
test(maxSatisfaction([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5]), 95, 'Test 55');
test(maxSatisfaction([5, -5, 15, -15, 25, -25, 35, -35]), 420, 'Test 56');
test(maxSatisfaction([5, -1, 3, -2, 4, -3, 2]), 72, 'Test 57');
test(maxSatisfaction([-100, 0, 100, -200, 200, -300, 300, -400, 400, -500, 500]), 11000, 'Test 58');
test(maxSatisfaction([999, 1000, -999, -1000, 998, 997, -998, -997, 996, -996]), 24970, 'Test 59');
test(maxSatisfaction([-100, -90, -80, -70, -60, -50, -40, -30, -20, -10]), 0, 'Test 60');
test(maxSatisfaction([10, -1, 2, 5, -7, 8, -2]), 137, 'Test 61');
test(maxSatisfaction([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 100, 'Test 62');
test(maxSatisfaction([-5, -2, 0, 1, 3, 6]), 46, 'Test 63');
test(maxSatisfaction([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, -1, -2, -3, -4, -5]), 6565, 'Test 64');
test(maxSatisfaction([-1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1]), 36, 'Test 65');
test(maxSatisfaction([-500, 500, -499, 499, -498, 498, -497, 497, -496, 496]), 12470, 'Test 66');
test(maxSatisfaction([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 100, 'Test 67');
test(maxSatisfaction([9, -1, -2, 3, -4, 5, -6, 7, -8, 9]), 235, 'Test 68');
test(maxSatisfaction([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), 950, 'Test 69');
test(maxSatisfaction([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 625, 'Test 70');
test(maxSatisfaction([-5, -3, -2, 1, 4, 6]), 43, 'Test 71');
test(maxSatisfaction([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 0, 'Test 72');
test(maxSatisfaction([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 3850, 'Test 73');
test(maxSatisfaction([900, 100, 200, -900, 50, -50, 300, -300, 400, -400]), 14450, 'Test 74');
test(maxSatisfaction([10, 20, 30, 40, 50, -10, -20, -30, -40, -50]), 950, 'Test 75');
test(maxSatisfaction([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), 95, 'Test 76');
test(maxSatisfaction([-100, -200, -300, -400, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 385, 'Test 77');
test(maxSatisfaction([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6]), 161, 'Test 78');
test(maxSatisfaction([-999, -998, -997, -996, -995, 995, 996, 997, 998, 999]), 24945, 'Test 79');
test(maxSatisfaction([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]), 40, 'Test 80');
test(maxSatisfaction([-1, 0, 1, -2, 0, 2, -3, 0, 3]), 40, 'Test 81');
test(maxSatisfaction([-5, -3, -1, 1, 3, 5]), 35, 'Test 82');
test(maxSatisfaction([-50, -50, 50, 50, -25, -25, 25, 25, -75, 75]), 1375, 'Test 83');
test(maxSatisfaction([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 465, 'Test 84');
test(maxSatisfaction([-10, -20, -30, -40, -50, 5, 15, 25, 35, 45]), 775, 'Test 85');
test(maxSatisfaction([-9, -8, -7, -6, -5, 1, 2, 3, 4, 5]), 69, 'Test 86');
test(maxSatisfaction([-100, -200, -300, 100, 200, 300, 400, 500]), 9000, 'Test 87');
test(maxSatisfaction([-1, -2, -3, -4, -5, 6, 7, 8, 9, 10]), 295, 'Test 88');
test(maxSatisfaction([-100, -90, -80, 70, 80, 90, 100]), 1400, 'Test 89');
test(maxSatisfaction([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 0, 'Test 90');
test(maxSatisfaction([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 110, 'Test 91');
test(maxSatisfaction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 385, 'Test 92');
test(maxSatisfaction([50, 100, 150, 200, -10, -20, -30, -40, -50, -60]), 3940, 'Test 93');
test(maxSatisfaction([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 715, 'Test 94');
test(maxSatisfaction([100, 100, 100, -1, -1, -1, -1, -1, -1, -1]), 2672, 'Test 95');
test(maxSatisfaction([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 96');
test(maxSatisfaction([-1000, -999, -998, -997, -996, -995, -994, -993, -992, -991, -990, -989, -988, -987, -986, -985, -984, -983, -982, -981, -980]), 0, 'Test 97');
test(maxSatisfaction([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 0, 'Test 98');
test(maxSatisfaction([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), 0, 'Test 99');
test(maxSatisfaction([-1000, 1000, -999, 999, -998, 998, -997, 997, -996, 996, -995, 995, -994, 994]), 48909, 'Test 100');
test(maxSatisfaction([-1, -2, -3, 4, 5, 6]), 67, 'Test 101');
test(maxSatisfaction([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16]), 780, 'Test 102');
test(maxSatisfaction([-500, 500, -400, 400, -300, 300, -200, 200, -100, 100]), 9500, 'Test 103');
test(maxSatisfaction([500, -500, 250, -250, 125, -125, 62, -62, 31, -31]), 7092, 'Test 104');
test(maxSatisfaction([-1000, -500, 0, 500, 1000, 1500, 2000]), 28000, 'Test 105');
test(maxSatisfaction([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 55, 'Test 106');
test(maxSatisfaction([-100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100]), 0, 'Test 107');
test(maxSatisfaction([5, 1, 3, 7, -5, -3, 2, 6, -2, 4]), 207, 'Test 108');
test(maxSatisfaction([-999, -998, -997, -996, 996, 997, 998, 999]), 15970, 'Test 109');
test(maxSatisfaction([-999, 999, -998, 998, -997, 997, -996, 996, -995, 995, -994, 994, -993, 993, -992, 992]), 63796, 'Test 110');
test(maxSatisfaction([500, -500, 400, -400, 300, -300, 200, -200, 100, -100, 0]), 11000, 'Test 111');
test(maxSatisfaction([-5, -3, -1, 2, 4, 6]), 50, 'Test 112');
test(maxSatisfaction([-999, -1000, 1000, 999, -998, 998, 0, 0, 0, 0, 0]), 23980, 'Test 113');
test(maxSatisfaction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 1240, 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

