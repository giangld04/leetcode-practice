// Test: 2463. Minimum Total Distance Traveled
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { minimumTotalDistance } = require("./solution");

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

console.log("\n2463. Minimum Total Distance Traveled\n");

test(minimumTotalDistance([5,1,3], [[2,3]]), 5, 'Test 1');
test(minimumTotalDistance([5,5,5,5], [[5,4]]), 0, 'Test 2');
test(minimumTotalDistance([-3,0,3], [[-2,1],[2,1],[5,2]]), 5, 'Test 3');
test(minimumTotalDistance([-1, -3, 2, 4, 5], [[-2, 1], [2, 2], [6, 2]]), 7, 'Test 4');
test(minimumTotalDistance([-5,-2,0,2,5], [[-3,2],[1,3]]), 9, 'Test 5');
test(minimumTotalDistance([5,8,15], [[10,2],[16,1]]), 8, 'Test 6');
test(minimumTotalDistance([10,20,30,40], [[5,2],[15,2],[25,2]]), 30, 'Test 7');
test(minimumTotalDistance([-10,0,10], [[-5,1],[0,2],[5,1]]), 10, 'Test 8');
test(minimumTotalDistance([5, 2, -5], [[-2, 2], [2, 2]]), 6, 'Test 9');
test(minimumTotalDistance([10, -10, 0], [[0, 3]]), 20, 'Test 10');
test(minimumTotalDistance([0,4,6], [[2,2],[6,2]]), 4, 'Test 11');
test(minimumTotalDistance([3,7,12,15], [[2,3],[10,2]]), 13, 'Test 12');
test(minimumTotalDistance([-3,0,3], [[-2,1],[2,2]]), 4, 'Test 13');
test(minimumTotalDistance([1,-1], [[-2,1],[2,1]]), 2, 'Test 14');
test(minimumTotalDistance([-20, -10, 0, 10, 20], [[-15, 2], [0, 1], [15, 2]]), 20, 'Test 15');
test(minimumTotalDistance([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], [[-5, 2], [-15, 2], [-25, 2], [-35, 2], [-45, 2], [-55, 2], [-65, 2], [-75, 2], [-85, 2], [-95, 2]]), 50, 'Test 16');
test(minimumTotalDistance([-15, -10, -5, 0, 5, 10, 15], [[-12, 2], [-7, 2], [-2, 2], [3, 2], [8, 2], [13, 2]]), 15, 'Test 17');
test(minimumTotalDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[5, 3], [10, 4], [15, 3]]), 45, 'Test 18');
test(minimumTotalDistance([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [[2, 2], [5, 2], [8, 2]]), Infinity, 'Test 19');
test(minimumTotalDistance([-1, -2, -3, -4, -5], [[-10, 3], [0, 2], [10, 1]]), 21, 'Test 20');
test(minimumTotalDistance([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140], [[5, 3], [15, 3], [25, 3], [35, 3], [45, 3], [55, 3], [65, 3], [75, 3], [85, 3], [95, 3], [105, 3], [115, 3], [125, 3], [135, 3]]), 75, 'Test 21');
test(minimumTotalDistance([0, 2, 4, 6, 8, 10], [[1, 1], [3, 1], [5, 1], [7, 1], [9, 1], [11, 1]]), 6, 'Test 22');
test(minimumTotalDistance([100, 200, 300, 400, 500], [[50, 1], [150, 2], [250, 2], [350, 2], [450, 1], [550, 1]]), 250, 'Test 23');
test(minimumTotalDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [[0, 2], [6, 3], [12, 3], [18, 2]]), 16, 'Test 24');
test(minimumTotalDistance([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [[0, 5], [5, 5]]), 20, 'Test 25');
test(minimumTotalDistance([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5], [[-3, 3], [0, 4], [3, 3]]), 12, 'Test 26');
test(minimumTotalDistance([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35], [[-7, 2], [2, 3], [17, 2], [32, 2]]), Infinity, 'Test 27');
test(minimumTotalDistance([-5, 0, 5, 10, 15, 20, 25, 30, 35, 40], [[-10, 2], [5, 3], [20, 3], [35, 2]]), 50, 'Test 28');
test(minimumTotalDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0, 2], [4, 2], [8, 2], [12, 2]]), Infinity, 'Test 29');
test(minimumTotalDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25], [[5, 3], [15, 3], [25, 3]]), Infinity, 'Test 30');
test(minimumTotalDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0, 3], [5, 4], [10, 3]]), 13, 'Test 31');
test(minimumTotalDistance([-100, -50, 0, 50, 100], [[-75, 2], [-25, 1], [25, 1], [75, 2]]), 125, 'Test 32');
test(minimumTotalDistance([10, 20, 30, 40, 50, 60, 70, 80, 90], [[0, 3], [10, 3], [20, 3], [30, 3], [40, 3], [50, 3], [60, 3], [70, 3], [80, 3], [90, 3]]), 0, 'Test 33');
test(minimumTotalDistance([-2, -1, 0, 1, 2, 3, 4], [[-3, 2], [0, 3], [3, 2]]), 7, 'Test 34');
test(minimumTotalDistance([-2, -1, 0, 1, 2], [[-3, 1], [-1, 1], [1, 1], [3, 1]]), Infinity, 'Test 35');
test(minimumTotalDistance([-10, -5, 0, 5, 10, 15, 20], [[-20, 1], [-10, 2], [0, 3], [10, 2], [20, 1]]), 15, 'Test 36');
test(minimumTotalDistance([-100, -50, 0, 50, 100], [[-75, 2], [0, 2], [75, 2]]), 100, 'Test 37');
test(minimumTotalDistance([-100, -50, 0, 50, 100, 150], [[-75, 3], [25, 2], [125, 2]]), 150, 'Test 38');
test(minimumTotalDistance([-100, -50, 0, 50, 100, 150, 200], [[-75, 2], [-25, 2], [25, 2], [75, 2], [125, 2], [175, 2]]), 175, 'Test 39');
test(minimumTotalDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [[0, 5], [5, 5], [10, 5], [15, 5]]), 60, 'Test 40');
test(minimumTotalDistance([-20, -10, 0, 10, 20], [[-15, 1], [-5, 2], [5, 3], [15, 1]]), 25, 'Test 41');
test(minimumTotalDistance([1, 2, 3, 4, 5, 6, 7, 8, 9], [[2, 3], [5, 3], [8, 3]]), 6, 'Test 42');
test(minimumTotalDistance([-20, -10, 0, 10, 20], [[-15, 2], [0, 3], [15, 2]]), 20, 'Test 43');
test(minimumTotalDistance([100, 200, 300, 400, 500], [[50, 2], [150, 1], [250, 2], [350, 1], [450, 1]]), 250, 'Test 44');
test(minimumTotalDistance([1, 3, 5, 7, 9, 11], [[2, 2], [6, 2], [10, 2]]), 6, 'Test 45');
test(minimumTotalDistance([1, 3, 5, 7, 9], [[2, 2], [4, 2], [6, 2], [8, 2], [10, 1]]), 5, 'Test 46');
test(minimumTotalDistance([10, 20, 30, 40, 50, 60], [[15, 2], [35, 2], [55, 2]]), 30, 'Test 47');
test(minimumTotalDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [[2, 3], [6, 3], [10, 3], [14, 3]]), Infinity, 'Test 48');
test(minimumTotalDistance([-20, -10, 0, 10, 20], [[-15, 2], [-5, 3], [5, 2], [15, 1]]), 25, 'Test 49');
test(minimumTotalDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [[0, 10]]), 10, 'Test 50');
test(minimumTotalDistance([-100, -90, -80, -70, -60, -50, -40, -30, -20, -10], [[-105, 2], [-95, 2], [-85, 2], [-75, 2], [-65, 2], [-55, 2], [-45, 2], [-35, 2], [-25, 2], [-15, 2]]), 50, 'Test 51');
test(minimumTotalDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0, 10]]), 55, 'Test 52');
test(minimumTotalDistance([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [[10, 2], [20, 2], [30, 2], [40, 2]]), Infinity, 'Test 53');
test(minimumTotalDistance([10, 20, 30, 40], [[15, 2], [25, 2], [35, 2]]), 20, 'Test 54');
test(minimumTotalDistance([-10, -5, 0, 5, 10, 15, 20], [[-7, 2], [-2, 2], [3, 2], [8, 2]]), 35, 'Test 55');
test(minimumTotalDistance([-20, -10, 0, 10, 20], [[-15, 2], [0, 3], [15, 1]]), 25, 'Test 56');
test(minimumTotalDistance([-20, -15, -10, -5, 0, 5, 10, 15, 20], [[-15, 2], [-10, 2], [-5, 2], [0, 2], [5, 2], [10, 2], [15, 2]]), 10, 'Test 57');
test(minimumTotalDistance([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], [[-6, 3], [0, 5], [6, 3]]), 18, 'Test 58');
test(minimumTotalDistance([1, 3, 5, 7, 9], [[2, 1], [4, 1], [6, 1], [8, 1]]), Infinity, 'Test 59');
test(minimumTotalDistance([-5, -3, -1, 1, 3, 5], [[-10, 1], [-5, 2], [0, 3], [5, 2], [10, 1]]), 6, 'Test 60');
test(minimumTotalDistance([-5, -3, -1, 1, 3, 5, 7, 9], [[-4, 1], [0, 3], [4, 2]]), Infinity, 'Test 61');
test(minimumTotalDistance([1, 3, 5, 7, 9], [[0, 2], [4, 2], [8, 2]]), 5, 'Test 62');
test(minimumTotalDistance([1, 4, 7, 10, 13, 16, 19, 22, 25, 28], [[3, 3], [9, 3], [15, 3], [21, 3]]), 25, 'Test 63');
test(minimumTotalDistance([10, 10, 10, 10], [[10, 1], [10, 1], [10, 1], [10, 1]]), 0, 'Test 64');
test(minimumTotalDistance([1, 4, 7, 10, 13, 16, 19, 22, 25], [[3, 3], [9, 3], [15, 3], [21, 3]]), 16, 'Test 65');
test(minimumTotalDistance([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [[5, 2], [15, 2], [25, 2], [35, 2], [45, 2], [55, 2], [65, 2], [75, 2], [85, 2], [95, 2]]), 50, 'Test 66');
test(minimumTotalDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0, 2], [5, 3], [10, 5]]), 16, 'Test 67');
test(minimumTotalDistance([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [[150, 3], [500, 4], [850, 3]]), 900, 'Test 68');
test(minimumTotalDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [[-5, 5], [0, 5], [5, 5]]), 25, 'Test 69');
test(minimumTotalDistance([-5, 0, 5, 10, 15, 20], [[-10, 1], [0, 3], [10, 2], [20, 1]]), 15, 'Test 70');
test(minimumTotalDistance([-50, -25, 0, 25, 50], [[-75, 3], [0, 2], [75, 1]]), 125, 'Test 71');
test(minimumTotalDistance([-10, -5, 0, 5, 10], [[-15, 2], [-10, 1], [0, 3], [10, 2], [15, 1]]), 10, 'Test 72');
test(minimumTotalDistance([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [[0, 5], [5, 5], [10, 5], [15, 5]]), 40, 'Test 73');
test(minimumTotalDistance([-100, -200, -300, -400, -500], [[-50, 2], [-150, 1], [-250, 2], [-350, 1], [-450, 1]]), 250, 'Test 74');
test(minimumTotalDistance([-100, -50, 0, 50, 100], [[-75, 1], [-25, 1], [25, 1], [75, 1]]), Infinity, 'Test 75');
test(minimumTotalDistance([-100, -90, -80, -70, -60, -50, -40, -30, -20, -10], [[-95, 2], [-85, 2], [-75, 2], [-65, 2], [-55, 2], [-45, 2], [-35, 2], [-25, 2], [-15, 2], [-5, 2]]), 50, 'Test 76');
test(minimumTotalDistance([-100, -50, 0, 50, 100], [[-75, 2], [-25, 2], [25, 2], [75, 1]]), 125, 'Test 77');
test(minimumTotalDistance([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], [[-10, 6], [0, 5]]), 60, 'Test 78');
test(minimumTotalDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0, 5], [10, 5]]), 25, 'Test 79');
test(minimumTotalDistance([-10, -5, 0, 5, 10, 15, 20, 25], [[-15, 2], [0, 3], [15, 3], [25, 1]]), 25, 'Test 80');
test(minimumTotalDistance([100, 200, 300, 400, 500], [[50, 1], [150, 2], [250, 2], [350, 1], [450, 1]]), 250, 'Test 81');
test(minimumTotalDistance([-10, -5, 0, 5, 10, 15], [[-8, 2], [2, 3], [12, 2]]), 15, 'Test 82');
test(minimumTotalDistance([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [[-5, 5], [5, 5]]), 50, 'Test 83');
test(minimumTotalDistance([0, 10, 20, 30, 40, 50, 60], [[5, 3], [15, 3], [25, 3], [35, 3], [45, 3]]), 45, 'Test 84');
test(minimumTotalDistance([-1, 0, 1], [[-2, 1], [2, 1], [0, 1]]), 2, 'Test 85');
test(minimumTotalDistance([-9, -6, -3, 0, 3, 6, 9], [[-8, 2], [-2, 2], [2, 2], [8, 1]]), 12, 'Test 86');
test(minimumTotalDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [[0, 5], [10, 5], [20, 5]]), 26, 'Test 87');
test(minimumTotalDistance([0, 10, 20, 30, 40, 50, 60], [[5, 1], [15, 2], [25, 2], [35, 1], [45, 2], [55, 1]]), 35, 'Test 88');
test(minimumTotalDistance([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[-4, 3], [2, 4], [7, 3], [11, 3]]), 22, 'Test 89');
test(minimumTotalDistance([-1, -2, -3, -4, -5], [[-3, 3], [0, 2]]), 6, 'Test 90');
test(minimumTotalDistance([0, 2, 4, 6, 8, 10, 12], [[1, 2], [5, 2], [9, 2], [13, 1]]), 7, 'Test 91');
test(minimumTotalDistance([100, 200, 300, 400, 500], [[50, 1], [150, 1], [250, 1], [350, 1], [450, 1]]), 250, 'Test 92');
test(minimumTotalDistance([-5, -3, -1, 1, 3, 5], [[-10, 1], [-6, 2], [-2, 2], [2, 2], [6, 1]]), 6, 'Test 93');
test(minimumTotalDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[5, 5], [15, 5]]), 45, 'Test 94');
test(minimumTotalDistance([-20, -10, 0, 10, 20], [[-25, 2], [-15, 3], [-5, 2], [5, 3], [15, 2], [25, 1]]), 25, 'Test 95');
test(minimumTotalDistance([-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50], [[-60, 3], [-40, 4], [-20, 4], [0, 4], [20, 4], [40, 3]]), 60, 'Test 96');
test(minimumTotalDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [[0, 2], [4, 2], [8, 2], [12, 2], [16, 2]]), 20, 'Test 97');
test(minimumTotalDistance([1, 3, 5, 7, 9], [[0, 3], [6, 2], [12, 1]]), 9, 'Test 98');
test(minimumTotalDistance([-100, -50, 0, 50, 100], [[-150, 2], [-100, 2], [-50, 2], [0, 2], [50, 2], [100, 2], [150, 2]]), 0, 'Test 99');
test(minimumTotalDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [[0, 2], [5, 2], [10, 2], [15, 2], [20, 2]]), 14, 'Test 100');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

