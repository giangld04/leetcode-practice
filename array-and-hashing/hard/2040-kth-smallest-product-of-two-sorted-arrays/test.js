// Test: 2040. Kth Smallest Product Of Two Sorted Arrays
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { kthSmallestProduct } = require("./solution");

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

console.log("\n2040. Kth Smallest Product Of Two Sorted Arrays\n");

test(kthSmallestProduct([-100000,100000], [-100000,100000], 1), -10000000000, 'Test 1');
test(kthSmallestProduct([-1,0,1], [-1,0,1], 4), 0, 'Test 2');
test(kthSmallestProduct([-100000,-50000,0,50000,100000], [-100000,-50000,0,50000,100000], 12), 0, 'Test 3');
test(kthSmallestProduct([-10,-9,-8,-7,-6], [-5,-4,-3,-2,-1], 1), 6, 'Test 4');
test(kthSmallestProduct([1,3,5,7,9], [2,4,6,8,10], 25), 90, 'Test 5');
test(kthSmallestProduct([2,5], [3,4], 2), 8, 'Test 6');
test(kthSmallestProduct([-4,-2,0,3], [2,4], 6), 0, 'Test 7');
test(kthSmallestProduct([1,2,3,4,5], [1,2,3,4,5], 10), 5, 'Test 8');
test(kthSmallestProduct([-100000,100000], [-100000,100000], 2), -10000000000, 'Test 9');
test(kthSmallestProduct([-5,-3,-1,1,3,5], [-5,-3,-1,1,3,5], 18), -1, 'Test 10');
test(kthSmallestProduct([-2,-1,0,1,2], [-3,-1,2,4,5], 3), -6, 'Test 11');
test(kthSmallestProduct([1,2,3,4,5], [1,2,3,4,5], 25), 25, 'Test 12');
test(kthSmallestProduct([-10,-5,-1], [1,5,10], 5), -10, 'Test 13');
test(kthSmallestProduct([1,2,3], [4,5,6], 5), 10, 'Test 14');
test(kthSmallestProduct([0,0,0], [0,0,0], 5), 0, 'Test 15');
test(kthSmallestProduct([0,0,0,0,0], [0,0,0,0,0], 12), 0, 'Test 16');
test(kthSmallestProduct([-100, -50, -10, -5, 0, 5, 10, 50, 100], [-100, -50, -10, -5, 0, 5, 10, 50, 100], 200), 10001, 'Test 17');
test(kthSmallestProduct([-5, -4, -3, -2, -1], [-5, -4, -3, -2, -1], 12), 6, 'Test 18');
test(kthSmallestProduct([-1, 0, 1], [-10000, 0, 10000], 7), 0, 'Test 19');
test(kthSmallestProduct([-25, -15, -5, 5, 15, 25], [-25, -15, -5, 0, 5, 15, 25], 30), 75, 'Test 20');
test(kthSmallestProduct([1, 1, 1, 1, 1], [1, 1, 1, 1, 1], 25), 1, 'Test 21');
test(kthSmallestProduct([-50000, -25000, 0, 25000, 50000], [-10000, -5000, 0, 5000, 10000], 7), -125000000, 'Test 22');
test(kthSmallestProduct([-50000, -25000, 0, 25000, 50000], [-10000, -5000, 0, 5000, 10000], 125000), 500000001, 'Test 23');
test(kthSmallestProduct([1, 1, 1, 1, 1], [-1, -1, -1, -1, -1], 25), -1, 'Test 24');
test(kthSmallestProduct([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 50), 0, 'Test 25');
test(kthSmallestProduct([1, 3, 5, 7, 9], [2, 4, 6, 8, 10], 20), 50, 'Test 26');
test(kthSmallestProduct([-9, -3, 0, 1, 5], [-6, -2, 1, 4, 7], 9), -3, 'Test 27');
test(kthSmallestProduct([-50000, -25000, 0, 25000, 50000], [-50000, -25000, 0, 25000, 50000], 124999), 2500000001, 'Test 28');
test(kthSmallestProduct([-10, -5, 0, 5, 10], [-100, -50, 0, 50, 100], 10), 0, 'Test 29');
test(kthSmallestProduct([-1, -2, -3, -4, -5, 1, 2, 3, 4, 5], [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5], 49), -2, 'Test 30');
test(kthSmallestProduct([1, 3, 5, 7, 9], [2, 4, 6, 8, 10], 24), 72, 'Test 31');
test(kthSmallestProduct([-100, -50, 0, 50, 100], [-200, -100, 0, 100, 200], 10), 0, 'Test 32');
test(kthSmallestProduct([-10, -5, -1, 0, 1, 5, 10], [-20, -15, -10, -5, 0, 5, 10, 15, 20], 20), -15, 'Test 33');
test(kthSmallestProduct([-1000, -500, -100, -50, -10, -5, -1, 0, 1, 5, 10, 50, 100, 500, 1000], [-1000, -500, -100, -50, -10, -5, -1, 0, 1, 5, 10, 50, 100, 500, 1000], 1000), 1000001, 'Test 34');
test(kthSmallestProduct([-50000, -25000, 0, 25000, 50000], [-50000, -25000, 0, 25000, 50000], 1250000), 2500000001, 'Test 35');
test(kthSmallestProduct([-50, -25, 0, 25, 50], [-50, -25, 0, 25, 50], 12), 0, 'Test 36');
test(kthSmallestProduct([100000], [-100000, 0, 100000], 2), 0, 'Test 37');
test(kthSmallestProduct([-100000, 100000], [-1, 1], 1), -100000, 'Test 38');
test(kthSmallestProduct([-1000, -900, -800], [800, 900, 1000], 8), -720000, 'Test 39');
test(kthSmallestProduct([-100000, -50000, -10000, -5000, -1000, -500, -100, -50, -10, -5, 0, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000], [-100000, -50000, -10000, -5000, -1000, -500, -100, -50, -10, -5, 0, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000], 1000000), 10000000001, 'Test 40');
test(kthSmallestProduct([1, 3, 5, 7, 9], [-9, -7, -5, -3, -1], 15), -15, 'Test 41');
test(kthSmallestProduct([-10, -5, 0, 5, 10], [-10, -5, 0, 5, 10], 15), 0, 'Test 42');
test(kthSmallestProduct([-10, -5, 0, 5, 10], [-10, -5, 0, 5, 10], 13), 0, 'Test 43');
test(kthSmallestProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 45), 20, 'Test 44');
test(kthSmallestProduct([100, 200, 300, 400, 500], [1, 2, 3, 4, 5], 20), 1500, 'Test 45');
test(kthSmallestProduct([1, 1, 1, 1, 1], [1, 1, 1, 1, 1], 1), 1, 'Test 46');
test(kthSmallestProduct([10000, 20000, 30000, 40000, 50000], [-10000, -20000, -30000, -40000, -50000], 12), -900000000, 'Test 47');
test(kthSmallestProduct([-2, -1, 0, 1, 2], [-2, -1, 0, 1, 2, 3, 4, 5], 15), 0, 'Test 48');
test(kthSmallestProduct([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10, 12], 36), 132, 'Test 49');
test(kthSmallestProduct([10, 20, 30, 40, 50], [-5, -10, -15, -20, -25], 10), -600, 'Test 50');
test(kthSmallestProduct([-1000, -500, -100, 0, 100, 500, 1000], [-1000, -500, -100, 0, 100, 500, 1000], 48), 1000000, 'Test 51');
test(kthSmallestProduct([-2, 0, 2], [-2, 0, 2], 3), 0, 'Test 52');
test(kthSmallestProduct([-1, -1, 0, 1, 1], [-1, -1, 0, 1, 1], 12), 0, 'Test 53');
test(kthSmallestProduct([-100, -99, -98, ..., -2, -1, 0, 1, 2, ..., 98, 99, 100], [-100, -99, -98, ..., -2, -1, 0, 1, 2, ..., 98, 99, 100], 250000), Error: '<' not supported between instances of 'ellipsis' and 'float', 'Test 54');
test(kthSmallestProduct([-100, -50, 0, 50, 100], [-200, -100, 0, 100, 200], 50), 20001, 'Test 55');
test(kthSmallestProduct([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 100), 380, 'Test 56');
test(kthSmallestProduct([-1, 0, 1], [-1, 0, 1], 3), 0, 'Test 57');
test(kthSmallestProduct([10000, 20000, 30000, 40000, 50000], [-1, -2, -3, -4, -5], 15), -90000, 'Test 58');
test(kthSmallestProduct([-1, 0, 1], [-100000, -99999, ..., -1, 0, 1, ..., 99999, 100000], 100000), Error: '<' not supported between instances of 'ellipsis' and 'float', 'Test 59');
test(kthSmallestProduct([-100, -50, 0, 50, 100], [-100, -50, 0, 50, 100], 1000), 10001, 'Test 60');
test(kthSmallestProduct([-50000, -25000, 0, 25000, 50000], [-50000, -25000, 0, 25000, 50000], 125000000), 2500000001, 'Test 61');
test(kthSmallestProduct([-10000, -5000, -1000, -500, -100, -50, -10, -5, -1, 0, 1, 5, 10, 50, 100, 500, 1000, 5000, 10000], [-10000, -5000, -1000, -500, -100, -50, -10, -5, -1, 0, 1, 5, 10, 50, 100, 500, 1000, 5000, 10000], 361), 100000000, 'Test 62');
test(kthSmallestProduct([-1, 1], [-100000, 100000], 1), -100000, 'Test 63');
test(kthSmallestProduct([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 324), 40, 'Test 64');
test(kthSmallestProduct([-1, 0, 1], [-100000, -10000, -1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000, 100000], 100), 100001, 'Test 65');
test(kthSmallestProduct([-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], 1), 1, 'Test 66');
test(kthSmallestProduct([100000, 90000, 80000, ..., 20000, 10000], [-100000, -90000, -80000, ..., -20000, -10000], 250000), Error: '<' not supported between instances of 'float' and 'ellipsis', 'Test 67');
test(kthSmallestProduct([-3, -2, -1, 0, 1, 2, 3], [-3, -2, -1, 0, 1, 2, 3], 21), 0, 'Test 68');
test(kthSmallestProduct([-1000, -500, -100, -50, -10, -5, -1, 0, 1, 5, 10, 50, 100, 500, 1000], [-1000, -500, -100, -50, -10, -5, -1, 0, 1, 5, 10, 50, 100, 500, 1000], 22500), 1000001, 'Test 69');
test(kthSmallestProduct([-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], 20), 1, 'Test 70');
test(kthSmallestProduct([-1, 0, 1], [-100000, -10000, -1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000, 100000], 13), 0, 'Test 71');
test(kthSmallestProduct([-50000, -25000, 0, 25000, 50000], [-50000, -25000, 0, 25000, 50000], 500000), 2500000001, 'Test 72');
test(kthSmallestProduct([-1, 0, 1], [-1, 0, 1], 5), 0, 'Test 73');
test(kthSmallestProduct([-5, -3, -1, 1, 3, 5], [-5, -3, -1, 1, 3, 5], 15), -3, 'Test 74');
test(kthSmallestProduct([-50000, -40000, -30000, -20000, -10000, 0, 10000, 20000, 30000, 40000, 50000], [-50000, -40000, -30000, -20000, -10000, 0, 10000, 20000, 30000, 40000, 50000], 1000000), 2500000001, 'Test 75');
test(kthSmallestProduct([-9, -7, -5, -3, -1], [-9, -7, -5, -3, -1], 24), 63, 'Test 76');
test(kthSmallestProduct([-50000, -25000, 0, 25000, 50000], [-50000, -25000, 0, 25000, 50000], 24999), 2500000001, 'Test 77');
test(kthSmallestProduct([-1, -1, -1, -1], [-1, -1, -1, -1], 10), 1, 'Test 78');
test(kthSmallestProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 240, 'Test 79');
test(kthSmallestProduct([-1, 0, 1], [-1, 0, 1], 4), 0, 'Test 80');
test(kthSmallestProduct([0, 0, 0, 0, 0], [0, 0, 0, 0, 0], 10), 0, 'Test 81');
test(kthSmallestProduct([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 100), -15, 'Test 82');
test(kthSmallestProduct([-10, -5, 0, 5, 10], [-2, -1, 0, 1, 2], 8), -5, 'Test 83');
test(kthSmallestProduct([-10, -5, 0, 5, 10], [-10, -5, 0, 5, 10], 10), 0, 'Test 84');
test(kthSmallestProduct([-1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 5), 1, 'Test 85');
test(kthSmallestProduct([1, 3, 5, 7, 9], [2, 4, 6, 8, 10], 12), 20, 'Test 86');
test(kthSmallestProduct([-1000, -900, -800, -700, -600], [-1000, -900, -800, -700, -600], 20), 800000, 'Test 87');
test(kthSmallestProduct([-100, -50, 0, 50, 100], [-100, -50, 0, 50, 100], 12), 0, 'Test 88');
test(kthSmallestProduct([-10, -5, 0, 5, 10], [-10, -5, 0, 5, 10], 12), 0, 'Test 89');
test(kthSmallestProduct([-1, 0, 1], [-100000, -50000, -10000, -5000, -1000, -500, -100, -50, -10, -5, -1, 0, 1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000], 50), 5, 'Test 90');
test(kthSmallestProduct([-10, -5, 0, 5, 10], [-10, -5, 0, 5, 10], [-10, -5, 0, 5, 10], 25), 100, 'Test 91');
test(kthSmallestProduct([-1, 0, 1], [-100, 0, 100], 4), 0, 'Test 92');
test(kthSmallestProduct([-5, -3, -1, 0, 1, 3, 5], [-6, -4, -2, 0, 2, 4, 6], 15), -4, 'Test 93');
test(kthSmallestProduct([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 441), 100, 'Test 94');
test(kthSmallestProduct([-1000, -500, 0, 500, 1000], [-1000, -500, 0, 500, 1000], 1250), 1000001, 'Test 95');
test(kthSmallestProduct([-5, -3, -1, 1, 3, 5], [-6, -4, -2, 0, 2, 4, 6], 15), -4, 'Test 96');
test(kthSmallestProduct([-9, -7, -5, -3, -1], [1, 3, 5, 7, 9], 10), -27, 'Test 97');
test(kthSmallestProduct([1, 2, 3, 4, 5], [-5, -4, -3, -2, -1], 25), -1, 'Test 98');
test(kthSmallestProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 24, 'Test 99');
test(kthSmallestProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 45), -36, 'Test 100');
test(kthSmallestProduct([-3, -2, -1, 0, 1, 2, 3], [-3, -2, -1, 0, 1, 2, 3], 20), 0, 'Test 101');
test(kthSmallestProduct([-1, -1, -1, -1, 1, 1, 1, 1], [-1, -1, -1, -1, 1, 1, 1, 1], 32), -1, 'Test 102');
test(kthSmallestProduct([1, 3, 5, 7, 9], [-9, -7, -5, -3, -1], 25), -1, 'Test 103');
test(kthSmallestProduct([-50000, -40000, -30000, 0, 30000, 40000, 50000], [-50000, 0, 50000], 20), 2500000000, 'Test 104');
test(kthSmallestProduct([1, 2, 3, 4, 5], [-5, -4, -3, -2, -1], 15), -6, 'Test 105');
test(kthSmallestProduct([-10, -5, 0, 5, 10], [-10, -5, 0, 5, 10], 20), 50, 'Test 106');
test(kthSmallestProduct([-1, 1, -1, 1, -1], [-1, 1, -1, 1, -1], 10), -1, 'Test 107');
test(kthSmallestProduct([-9, -6, -3, 0, 3, 6, 9], [-9, -6, -3, 0, 3, 6, 9], 49), 81, 'Test 108');
test(kthSmallestProduct([-10, -5, 0, 5, 10], [-20, -15, -10, -5, 0, 5, 10, 15, 20], 30), 25, 'Test 109');
test(kthSmallestProduct([-100, -50, -25, -10, -5, -1, 0, 1, 5, 10, 25, 50, 100], [-100, -50, -25, -10, -5, -1, 0, 1, 5, 10, 25, 50, 100], 100), 5, 'Test 110');
test(kthSmallestProduct([-5, -4, -3, -2, -1], [1, 2, 3, 4, 5], 25), -1, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

