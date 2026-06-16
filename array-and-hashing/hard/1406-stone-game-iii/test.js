// Test: 1406. Stone Game Iii
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { stoneGameIII } = require("./solution");

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

console.log("\n1406. Stone Game Iii\n");

test(stoneGameIII([0,0,0,0,0]), Tie, 'Test 1');
test(stoneGameIII([1]), Alice, 'Test 2');
test(stoneGameIII([1,-100,1,100]), Tie, 'Test 3');
test(stoneGameIII([5,3,7,1]), Alice, 'Test 4');
test(stoneGameIII([5,3,1,4,2]), Alice, 'Test 5');
test(stoneGameIII([0,0,0,0]), Tie, 'Test 6');
test(stoneGameIII([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), Alice, 'Test 7');
test(stoneGameIII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), Tie, 'Test 8');
test(stoneGameIII([-1,-2,-3,-4]), Tie, 'Test 9');
test(stoneGameIII([1,2,3,6]), Tie, 'Test 10');
test(stoneGameIII([0, 0, 0, 0, 0]), Tie, 'Test 11');
test(stoneGameIII([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), Alice, 'Test 12');
test(stoneGameIII([5, 3, -6, 7, 2, 8, -1, 4, 10]), Alice, 'Test 13');
test(stoneGameIII([1,2,3,4,5,6,7,8,9,10]), Bob, 'Test 14');
test(stoneGameIII([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), Alice, 'Test 15');
test(stoneGameIII([1000,-1000,1000,-1000]), Alice, 'Test 16');
test(stoneGameIII([1,1,1,1,1,1,1,1,1,1]), Alice, 'Test 17');
test(stoneGameIII([1,2,3,7]), Bob, 'Test 18');
test(stoneGameIII([1000,-1000,1000,-1000,1000]), Alice, 'Test 19');
test(stoneGameIII([1,2,3,-9]), Alice, 'Test 20');
test(stoneGameIII([-1,-2,-3,-4,-5]), Bob, 'Test 21');
test(stoneGameIII([3,2,10,4]), Alice, 'Test 22');
test(stoneGameIII([1000, -1000, 1000, -1000, 1000]), Alice, 'Test 23');
test(stoneGameIII([5,10,-5,1]), Alice, 'Test 24');
test(stoneGameIII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), Alice, 'Test 25');
test(stoneGameIII([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8]), Alice, 'Test 26');
test(stoneGameIII([3, -2, 5, 1, -4, 6, -3, 2, 5, -1, 4, -6, 3, 2, -5, 1, 4, -6, 3, 2, -5, 1, 4, -6, 3, 2, -5]), Alice, 'Test 27');
test(stoneGameIII([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000, 1100, -1200, 1300, -1400, 1500]), Alice, 'Test 28');
test(stoneGameIII([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Tie, 'Test 29');
test(stoneGameIII([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), Alice, 'Test 30');
test(stoneGameIII([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987, 986, 985, 984, 983, 982, 981]), Alice, 'Test 31');
test(stoneGameIII([1000, -999, 998, -997, 996, -995, 994, -993, 992, -991]), Alice, 'Test 32');
test(stoneGameIII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), Tie, 'Test 33');
test(stoneGameIII([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), Alice, 'Test 34');
test(stoneGameIII([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), Alice, 'Test 35');
test(stoneGameIII([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Tie, 'Test 36');
test(stoneGameIII([5, 10, -5, 20, 25, -30, 35, -40, 45, 50]), Alice, 'Test 37');
test(stoneGameIII([5, -1, 3, -4, 2, 10, -7, 8, -2, 6]), Alice, 'Test 38');
test(stoneGameIII([5, 3, 2, 4, 1, 3, 2, 1, 2, 3, 4, 5, 1, 2, 3]), Alice, 'Test 39');
test(stoneGameIII([100, -99, 100, -99, 100, -99, 100, -99, 100, -99]), Alice, 'Test 40');
test(stoneGameIII([500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500]), Alice, 'Test 41');
test(stoneGameIII([10, 15, -5, 20, -10, 25, -15, 30, -20, 35]), Alice, 'Test 42');
test(stoneGameIII([100, -50, 200, -150, 300, -200, 400, -250, 500, -300, 600, -350, 700, -400, 800]), Alice, 'Test 43');
test(stoneGameIII([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Tie, 'Test 44');
test(stoneGameIII([5,10,15,20,25,30,35,40,45,50]), Bob, 'Test 45');
test(stoneGameIII([3, 1, 5, 4, 2, 6, 7, 8, 9, 10]), Alice, 'Test 46');
test(stoneGameIII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -100, -90, -80, -70, -60, -50, -40, -30, -20, -10]), Tie, 'Test 47');
test(stoneGameIII([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8]), Alice, 'Test 48');
test(stoneGameIII([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), Tie, 'Test 49');
test(stoneGameIII([-5,-10,-15,-20,-25,-30,-35,-40,-45,-50]), Alice, 'Test 50');
test(stoneGameIII([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), Bob, 'Test 51');
test(stoneGameIII([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), Alice, 'Test 52');
test(stoneGameIII([1000, -500, 250, -125, 62, -31, 15, -7, 3, -1, 0, 1, -3, 7, -15, 31, -62, 125, -250, 500, -1000]), Alice, 'Test 53');
test(stoneGameIII([-10, 100, -20, 200, -30, 300, -40, 400, -50, 500]), Alice, 'Test 54');
test(stoneGameIII([5, 7, -3, 12, 15, -10, 8, 11, -2, 6, 14, 1, -5, 9, -7]), Alice, 'Test 55');
test(stoneGameIII([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20, 21, -22, 23, -24, 25]), Alice, 'Test 56');
test(stoneGameIII([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), Tie, 'Test 57');
test(stoneGameIII([-100, -200, -300, 400, 500, 600, -700, -800, 900, 1000]), Alice, 'Test 58');
test(stoneGameIII([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), Alice, 'Test 59');
test(stoneGameIII([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), Alice, 'Test 60');
test(stoneGameIII([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), Bob, 'Test 61');
test(stoneGameIII([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), Alice, 'Test 62');
test(stoneGameIII([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]), Alice, 'Test 63');
test(stoneGameIII([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89]), Alice, 'Test 64');
test(stoneGameIII([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100]), Alice, 'Test 65');
test(stoneGameIII([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Tie, 'Test 66');
test(stoneGameIII([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), Alice, 'Test 67');
test(stoneGameIII([100, 200, 300, 400, -1000, 500, 600, 700, -800, 900, 1000]), Alice, 'Test 68');
test(stoneGameIII([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), Alice, 'Test 69');
test(stoneGameIII([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000]), Alice, 'Test 70');
test(stoneGameIII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), Alice, 'Test 71');
test(stoneGameIII([10, -20, 30, -40, 50, -60, 70, -80, 90, -100, 110, -120, 130, -140, 150, -160, 170, -180, 190, -200, 210, -220, 230, -240, 250]), Alice, 'Test 72');
test(stoneGameIII([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]), Tie, 'Test 73');
test(stoneGameIII([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Tie, 'Test 74');
test(stoneGameIII([-5, 10, -15, 20, -25, 30, -35, 40, -45, 50]), Alice, 'Test 75');
test(stoneGameIII([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, -130, -140, -150]), Tie, 'Test 76');
test(stoneGameIII([1000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), Alice, 'Test 77');
test(stoneGameIII([-100, -200, -300, -400, -500, -600, -700, -800, -900, -1000]), Alice, 'Test 78');
test(stoneGameIII([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100, 110, -120, 130, -140, 150, -160, 170, -180, 190, -200]), Alice, 'Test 79');
test(stoneGameIII([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), Alice, 'Test 80');
test(stoneGameIII([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -30]), Alice, 'Test 81');
test(stoneGameIII([-10, 10, -20, 20, -30, 30, -40, 40, -50, 50]), Tie, 'Test 82');
test(stoneGameIII([-50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50]), Tie, 'Test 83');
test(stoneGameIII([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20, 21, -22, 23, -24, 25, -26, 27, -28, 29, -30]), Alice, 'Test 84');
test(stoneGameIII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Alice, 'Test 85');
test(stoneGameIII([5, -2, 4, -1, 3, -3, 2, 1, -5, 6, 7, -8, 9]), Alice, 'Test 86');
test(stoneGameIII([500, 250, -100, 200, -150, 300, -50, 100, -200, 300, 500]), Alice, 'Test 87');
test(stoneGameIII([5, -3, 2, 7, -8, 10, -15, 20, -25, 30]), Alice, 'Test 88');
test(stoneGameIII([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), Alice, 'Test 89');
test(stoneGameIII([-5, 10, 20, -15, 30, 25, -20, 40, -35, 50, -45, 60, -55]), Alice, 'Test 90');
test(stoneGameIII([100, 200, 300, -100, -200, -300, 400, 500, 600, -400, -500, -600]), Alice, 'Test 91');
test(stoneGameIII([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100]), Tie, 'Test 92');
test(stoneGameIII([-50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50]), Alice, 'Test 93');
test(stoneGameIII([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), Tie, 'Test 94');
test(stoneGameIII([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15]), Alice, 'Test 95');
test(stoneGameIII([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), Alice, 'Test 96');
test(stoneGameIII([1000, -500, 2000, -1000, 3000, -1500, 4000, -2000, 5000, -2500, 6000, -3000, 7000, -3500, 8000, -4000, 9000, -4500, 10000, -5000]), Alice, 'Test 97');
test(stoneGameIII([5, -2, 3, 1, 4, -1, 7, -3, 2, 6, -5]), Alice, 'Test 98');
test(stoneGameIII([-999, 1000, -999, 1000, -999, 1000, -999, 1000, -999, 1000]), Alice, 'Test 99');
test(stoneGameIII([10,-10,20,-20,30,-30,40,-40,50,-50]), Alice, 'Test 100');
test(stoneGameIII([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), Alice, 'Test 101');
test(stoneGameIII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), Alice, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

