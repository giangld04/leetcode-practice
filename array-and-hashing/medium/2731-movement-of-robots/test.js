// Test: 2731. Movement Of Robots
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { sumDistance } = require("./solution");

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

console.log("\n2731. Movement Of Robots\n");

test(sumDistance([-1,2,-3,4], "RLRL", 5), 24, 'Test 1');
test(sumDistance([-5,1,4], "RLR", 4), 22, 'Test 2');
test(sumDistance([-5, -1, 0, 3, 7], 'RLLLR', 5), 82, 'Test 3');
test(sumDistance([-10, -20, -30], 'LLL', 1), 40, 'Test 4');
test(sumDistance([0,1,2,3,4], "RRRRR", 1), 20, 'Test 5');
test(sumDistance([-2,0,2], "RLL", 3), 8, 'Test 6');
test(sumDistance([2,-1,0], "LRR", 5), 16, 'Test 7');
test(sumDistance([10,-10,0], "RLR", 10), 80, 'Test 8');
test(sumDistance([-2,0,2], 'RLL', 3), 8, 'Test 9');
test(sumDistance([10, 20, 30], 'RRR', 1), 40, 'Test 10');
test(sumDistance([-1,2,-3,4], "LRRL", 5), 42, 'Test 11');
test(sumDistance([-5,1,7], "LRRL", 4), Error: list index out of range, 'Test 12');
test(sumDistance([10,-10,0], "RLR", 5), 60, 'Test 13');
test(sumDistance([1,0], "RL", 2), 5, 'Test 14');
test(sumDistance([-5,1,3], "RRL", 4), 12, 'Test 15');
test(sumDistance([1,0], 'RL', 2), 5, 'Test 16');
test(sumDistance([0,0,0,0], "RRLL", 1), 8, 'Test 17');
test(sumDistance([3,2,1], "RRR", 1), 4, 'Test 18');
test(sumDistance([10,-10,20,-20], "RLRL", 10), 220, 'Test 19');
test(sumDistance([-10, -5, 0, 5, 10], "RRRLL", 7), 50, 'Test 20');
test(sumDistance([1, -1, 2, -2, 3, -3], "RLRLRL", 15), 314, 'Test 21');
test(sumDistance([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], "RLRLRLRLRL", 5), 165, 'Test 22');
test(sumDistance([-2000000000, -1000000000, 0, 1000000000, 2000000000], "RLRLRL", 999999999), Error: list index out of range, 'Test 23');
test(sumDistance([-1, 2, -3, 4, -5], "RLLRL", 3), 76, 'Test 24');
test(sumDistance([-10, -5, 0, 5, 10, 15, 20, 25, 30], "LRRLLRRLL", 10), 680, 'Test 25');
test(sumDistance([1, 2, 3, 4, 5], "RLRLR", 2), 34, 'Test 26');
test(sumDistance([0, 1, 2, 3, 4, 5], "RRRRR", 3), 26, 'Test 27');
test(sumDistance([-1000000000, 0, 1000000000], "RLR", 500000000), 999999979, 'Test 28');
test(sumDistance([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "RRRRRRRRRR", 5), 165, 'Test 29');
test(sumDistance([-1000, -800, -600, -400, -200, 200, 400, 600, 800, 1000], "RRRRRRRRRR", 300), 38000, 'Test 30');
test(sumDistance([-20, -10, 0, 10, 20], "LRRLL", 15), 220, 'Test 31');
test(sumDistance([-10, -5, -1, 0, 1, 5, 10], "LRRLLRR", 7), 304, 'Test 32');
test(sumDistance([-1000, -500, 0, 500, 1000], "RLRLR", 500), 12000, 'Test 33');
test(sumDistance([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "RRRRRRRRRRRRRRRRRRRR", 2), 1330, 'Test 34');
test(sumDistance([100, 200, 300, 400, 500], "RRRRR", 1), 2000, 'Test 35');
test(sumDistance([-10, -5, 0, 5, 10], "LRLRL", 5), 120, 'Test 36');
test(sumDistance([-10, -5, 0, 5, 10], "RLRLR", 7), 136, 'Test 37');
test(sumDistance([-10, -5, 0, 5, 10], "RLRRL", 3), 92, 'Test 38');
test(sumDistance([-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50], "LRRLRRRLRRRL", 10), Error: list index out of range, 'Test 39');
test(sumDistance([-5, 0, 5, 10], "RLRR", 20), 160, 'Test 40');
test(sumDistance([-500, -300, -100, 100, 300, 500], "LLRRLR", 10), 7100, 'Test 41');
test(sumDistance([-2, -1, 0, 1, 2], "RLRLR", 7), 94, 'Test 42');
test(sumDistance([-20, -10, 0, 10, 20, 30, 40, 50, 60, 70], "LRRLLRRLLR", 15), 1840, 'Test 43');
test(sumDistance([-50, -25, 0, 25, 50], "LRRRL", 25), 550, 'Test 44');
test(sumDistance([-9, -7, -5, -3, -1, 1, 3, 5, 7, 9], "RRRRRRRRRR", 2), 330, 'Test 45');
test(sumDistance([-10, -5, 0, 5, 10, 15, 20], "LRRLRLRLR", 8), Error: list index out of range, 'Test 46');
test(sumDistance([-9, -6, -3, 0, 3, 6, 9], "RRRRRRR", 4), 168, 'Test 47');
test(sumDistance([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5], "RLRLRLRLRL", 3), 80, 'Test 48');
test(sumDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "RRRRRRRRRR", 1), 165, 'Test 49');
test(sumDistance([0, 2, 4, 6, 8, 10, 12, 14, 16, 18], "LRLRLRLRLR", 5), 468, 'Test 50');
test(sumDistance([-20, -15, -10, -5, 0, 5, 10, 15, 20], "RLRLRLRLR", 3), 608, 'Test 51');
test(sumDistance([0, 1, 2, 3, 4, 5], "RRRRRR", 10), 35, 'Test 52');
test(sumDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "RRRRRRRRRL", 1), 149, 'Test 53');
test(sumDistance([100, 200, 300, 400, 500], "LLLLL", 50), 2000, 'Test 54');
test(sumDistance([100, 101, 102, 103, 104, 105], "LLLLLR", 5), 85, 'Test 55');
test(sumDistance([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "RRRRRRRRRR", 1), 210, 'Test 56');
test(sumDistance([-9, -7, -5, -3, -1], "RRRRR", 6), 40, 'Test 57');
test(sumDistance([-50, -20, -10, 0, 10, 20, 50], "LRRLLRR", 10), 900, 'Test 58');
test(sumDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], "RLRLRLRLRL", 20), 1110, 'Test 59');
test(sumDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "RRRRRRRRRR", 10), 165, 'Test 60');
test(sumDistance([-1, 0, 1, 2, 3, 4, 5], "LLLLLL", 3), 74, 'Test 61');
test(sumDistance([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "LRLRLRLRLRL", 1), 230, 'Test 62');
test(sumDistance([-50, -30, -10, 10, 30, 50], "LLRRLL", 15), 720, 'Test 63');
test(sumDistance([-10, -8, -6, -4, -2, 2, 4, 6, 8, 10], "LLLLLLLLLL", 3), 380, 'Test 64');
test(sumDistance([-20, -15, -10, -5, 0, 5, 10, 15, 20], "RRRRLLLLL", 3), 482, 'Test 65');
test(sumDistance([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "RRRRRRRRRRLLLLLLLLLL", 5), 1101, 'Test 66');
test(sumDistance([-100, -200, -300, -400, -500], "LLLLL", 100), 2000, 'Test 67');
test(sumDistance([-1, 1, -2, 2, -3, 3, -4, 4], "RLRLRLRL", 1), 68, 'Test 68');
test(sumDistance([1, 3, 5, 7, 9], "LLLLL", 2), 40, 'Test 69');
test(sumDistance([-10, -5, 0, 5, 10], "RLRRLL", 5), Error: list index out of range, 'Test 70');
test(sumDistance([1, -1, 2, -2, 3, -3, 4, -4, 5, -5], "RLRLRLRLRL", 4), 390, 'Test 71');
test(sumDistance([-300, -200, -100, 0, 100, 200, 300], "LRRLLRR", 100), 6600, 'Test 72');
test(sumDistance([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], "RRRRRRRRRR", 2), 165, 'Test 73');
test(sumDistance([-1000000000, 1000000000], "RL", 1000000000), 0, 'Test 74');
test(sumDistance([10, 20, 30, 40, 50], "LLLLL", 5), 200, 'Test 75');
test(sumDistance([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6], "RLLRLRLRLRL", 2), Error: list index out of range, 'Test 76');
test(sumDistance([-10, -5, 0, 5, 10], "RRLRR", 7), 126, 'Test 77');
test(sumDistance([-1000, -500, 0, 500, 1000], "RLLRL", 1000), 14000, 'Test 78');
test(sumDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], "LLLLLLLLLL", 1), 330, 'Test 79');
test(sumDistance([5, 3, 8, 1, 6], "RRLLR", 7), 98, 'Test 80');
test(sumDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "RRRRRRRRRR", 2), 165, 'Test 81');
test(sumDistance([-9, -6, -3, 0, 3, 6, 9], "RLRLRLR", 6), 234, 'Test 82');
test(sumDistance([-5, -3, 1, 4, 7], "LRRRL", 2), 64, 'Test 83');
test(sumDistance([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "RRRRRRRRRRRR", 3), 286, 'Test 84');
test(sumDistance([-10, -5, 0, 5, 10, 15, 20], "RRRLLLL", 7), 146, 'Test 85');
test(sumDistance([-19, -17, -15, -13, -11, -9, -7, -5, -3, -1], "RRRRRRRRRR", 2), 330, 'Test 86');
test(sumDistance([-20, -15, -10, -5, 0, 5, 10, 15, 20], "RRRRLLLL", 20), 600, 'Test 87');
test(sumDistance([-500000000, -250000000, 0, 250000000, 500000000], "RLLLR", 500000000), 999999951, 'Test 88');
test(sumDistance([-1000000000, 0, 1000000000], "RL", 500000000), 999999986, 'Test 89');
test(sumDistance([0, 10, 20, 30, 40], "LLLLL", 5), 200, 'Test 90');
test(sumDistance([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "LRRLLRRLL", 10), 531, 'Test 91');
test(sumDistance([-500, -300, -100, 100, 300, 500], "RLLRLR", 200), 8200, 'Test 92');
test(sumDistance([-1000000000, 1000000000], "LR", 500000000), 999999986, 'Test 93');
test(sumDistance([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "RLLLLRLLLL", 5), 406, 'Test 94');
test(sumDistance([-100, 0, 100, 200, 300], "RRLLRR", 50), Error: list index out of range, 'Test 95');
test(sumDistance([-500, -400, -300, -200, -100], "RRRRR", 100), 2000, 'Test 96');
test(sumDistance([5, 10, 15, 20], "RRRR", 5), 50, 'Test 97');
test(sumDistance([-100, -50, 0, 50, 100, 150, 200], "RLLRLLR", 150), 4900, 'Test 98');
test(sumDistance([-9, -6, -3, 0, 3, 6, 9], "LRRLRL", 15), 396, 'Test 99');
test(sumDistance([-9, -7, -5, -3, -1, 1, 3, 5, 7, 9], "LRLRLRLRLR", 10), 710, 'Test 100');
test(sumDistance([-1, 1, -2, 2, -3, 3], "RLRLRL", 5), 62, 'Test 101');
test(sumDistance([100, 200, 300, 400, 500], "LLLLL", 10), 2000, 'Test 102');
test(sumDistance([-1000000000, 1000000000], "LR", 1000000000), 999999979, 'Test 103');
test(sumDistance([-20, -15, -10, -5, 0, 5, 10, 15, 20], "LRRRLRRRL", 7), 652, 'Test 104');
test(sumDistance([5, 15, 25, 35, 45], "LRRLL", 10), 180, 'Test 105');
test(sumDistance([-20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30], "RRRRRRRRRRRR", 12), Error: list index out of range, 'Test 106');
test(sumDistance([-50, -20, -10, 0, 10, 20, 50], "LRLRLRL", 30), 1140, 'Test 107');
test(sumDistance([-20, -10, 0, 10, 20], "LRLLR", 3), 212, 'Test 108');
test(sumDistance([-10, -5, 0, 5, 10, 15], "RLRLRL", 1), 169, 'Test 109');
test(sumDistance([100, 200, 300, 400, 500], "RRRRR", 50), 2000, 'Test 110');
test(sumDistance([100, 200, 300, 400, 500, 600], "LLLLLR", 150), 5000, 'Test 111');
test(sumDistance([-500, -400, -300, -200, -100], "RRRRR", 15), 2000, 'Test 112');
test(sumDistance([-3, -2, -1, 0, 1, 2, 3], "LLRLRLR", 1), 72, 'Test 113');
test(sumDistance([-1000000000, 0, 1000000000], "RLR", 1000000000), 999999965, 'Test 114');
test(sumDistance([-1000000, 0, 1000000], "RLR", 1000000), 6000000, 'Test 115');
test(sumDistance([250, 500, 750, 1000, 1250], "LLLLL", 250), 5000, 'Test 116');
test(sumDistance([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], "LLLLLLLLLL", 500), 16500, 'Test 117');
test(sumDistance([-25, -15, -5, 5, 15, 25], "RLRRRL", 10), 350, 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

