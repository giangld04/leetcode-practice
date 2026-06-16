// Test: 1643. Kth Smallest Instructions
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { kthSmallestPath } = require("./solution");

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

console.log("\n1643. Kth Smallest Instructions\n");

test(kthSmallestPath([3,3], 5), HVHHVV, 'Test 1');
test(kthSmallestPath([2,3], 1), HHHVV, 'Test 2');
test(kthSmallestPath([4,4], 10), HHVVHHVV, 'Test 3');
test(kthSmallestPath([3,3], 10), HVVVHH, 'Test 4');
test(kthSmallestPath([2,3], 2), HHVHV, 'Test 5');
test(kthSmallestPath([2,3], 3), HHVVH, 'Test 6');
test(kthSmallestPath([4,4], 20), HVHVHHVV, 'Test 7');
test(kthSmallestPath([4,5], 10), HHHVVHHVV, 'Test 8');
test(kthSmallestPath([15,15], 1), HHHHHHHHHHHHHHHVVVVVVVVVVVVVVV, 'Test 9');
test(kthSmallestPath([3,2], 4), HVVVH, 'Test 10');
test(kthSmallestPath([3,4], 5), HHVHHVV, 'Test 11');
test(kthSmallestPath([5,5], 100), HVVHHVVHVH, 'Test 12');
test(kthSmallestPath([3,2], 1), HHVVV, 'Test 13');
test(kthSmallestPath([3,10], 175), HVHHHHHHVVHHH, 'Test 14');
test(kthSmallestPath([7,8], 1716), HHVVVVVVVHHHHHH, 'Test 15');
test(kthSmallestPath([12,12], 50000), HHHHHVVVVVVVHVVHHVHHVVHH, 'Test 16');
test(kthSmallestPath([15, 5], 2000), HVVHVVVVVVVHVVVVVVHH, 'Test 17');
test(kthSmallestPath([9,5], 252), HVHHVVVVHVHVVV, 'Test 18');
test(kthSmallestPath([5,7], 1000), VVVVVVVVVVVV, 'Test 19');
test(kthSmallestPath([7, 9], 300), HHHHHVVVVHHVHHVV, 'Test 20');
test(kthSmallestPath([9,7], 5678), VHHVHVHVVHVHVVVH, 'Test 21');
test(kthSmallestPath([10,10], 5000), HHHHVHVVVVVVVVHHHHHV, 'Test 22');
test(kthSmallestPath([9, 9], 1000), HHHHVHVHVVVVVVVHHH, 'Test 23');
test(kthSmallestPath([3,4], 15), HVHVHVH, 'Test 24');
test(kthSmallestPath([14,10], 5000), HHHHHVHVVVVVHVHVHVHVVVVV, 'Test 25');
test(kthSmallestPath([15, 15], 10000), HHHHHHHHHHVVVHVHVVVHVVVHVVVVVH, 'Test 26');
test(kthSmallestPath([15,15], 500000), HHHHHHVHHHHVVVVVHHVHHVVVVHVVVV, 'Test 27');
test(kthSmallestPath([8, 12], 250), HHHHHHHHVHVVHVVVVVHH, 'Test 28');
test(kthSmallestPath([15,15], 40116600), HVHHHVHVHVVHHVVHHVVVVHVHHHVVHV, 'Test 29');
test(kthSmallestPath([10, 5], 200), HHVVVHVVVVVVHHV, 'Test 30');
test(kthSmallestPath([12,5], 1234), HVVVHVVHVVVVHVVHV, 'Test 31');
test(kthSmallestPath([5,15], 3003), HHHHHVVVVVHHHHHHHHHH, 'Test 32');
test(kthSmallestPath([12, 8], 500), HHHHVHHVVVVHVVHVVVVV, 'Test 33');
test(kthSmallestPath([7,6], 150), HHVHVHHVHVVVV, 'Test 34');
test(kthSmallestPath([3,7], 123), VVVVVVVVVV, 'Test 35');
test(kthSmallestPath([13, 7], 4000), HHVHVVVVVVHHVHVVHVVV, 'Test 36');
test(kthSmallestPath([12,12], 100000), HHHHVVHVVVVHHHHVVHVHVHVV, 'Test 37');
test(kthSmallestPath([2,13], 150), VVVVVVVVVVVVVVV, 'Test 38');
test(kthSmallestPath([10, 10], 500), HHHHHHVHVVVVVVVHVHHV, 'Test 39');
test(kthSmallestPath([10,10], 1000), HHHHHHVVVVVVVVVHVHHH, 'Test 40');
test(kthSmallestPath([7, 5], 30), HHHVVVVHVVVH, 'Test 41');
test(kthSmallestPath([6,6], 500), VHHHVVHHVHVV, 'Test 42');
test(kthSmallestPath([9,9], 10000), HHVVVHHVHVHHVVHHVV, 'Test 43');
test(kthSmallestPath([6,7], 120), HHHVHVHVVVVHH, 'Test 44');
test(kthSmallestPath([8,9], 500), HHHHVHHHHVVVVHVVV, 'Test 45');
test(kthSmallestPath([15,15], 1000000), HHHHHHVVHVVVVHVVVVHHHVHVVVHHHV, 'Test 46');
test(kthSmallestPath([1, 15], 1), HHHHHHHHHHHHHHHV, 'Test 47');
test(kthSmallestPath([10,10], 10000), HHHVHHVVVVVVVHVHHHHV, 'Test 48');
test(kthSmallestPath([10, 10], 1000), HHHHHHVVVVVVVVVHVHHH, 'Test 49');
test(kthSmallestPath([7,8], 3000), HVVHVHVVHHHHVVH, 'Test 50');
test(kthSmallestPath([3, 10], 100), HHHVHHVHHHHHV, 'Test 51');
test(kthSmallestPath([12, 8], 5000), HHHVVVVHHVVHVVHVVVVH, 'Test 52');
test(kthSmallestPath([10,5], 200), HHVVVHVVVVVVHHV, 'Test 53');
test(kthSmallestPath([10,10], 50000), HVHHVHHVVVVVHHHVHVHV, 'Test 54');
test(kthSmallestPath([7,7], 343), HHVHHHVHVVVVVH, 'Test 55');
test(kthSmallestPath([7,8], 1000), HHVHHVVVVVHHVHH, 'Test 56');
test(kthSmallestPath([5,4], 50), HVVVHVHHV, 'Test 57');
test(kthSmallestPath([7,8], 2000), HVHHVHVHVHHVVHV, 'Test 58');
test(kthSmallestPath([3, 12], 200), HHHVHHVHVHHHHHH, 'Test 59');
test(kthSmallestPath([6, 14], 10000), HHHVHHVVVHVVHHHHHHHH, 'Test 60');
test(kthSmallestPath([8,9], 15000), VHHVHHVVVHHHVVHHV, 'Test 61');
test(kthSmallestPath([12,4], 250), HVVVHVHVVVVHVVVV, 'Test 62');
test(kthSmallestPath([7,8], 1234), HHVHVVVVHHHHHVV, 'Test 63');
test(kthSmallestPath([8,7], 3456), VHHVHVHVVHHVVHV, 'Test 64');
test(kthSmallestPath([13,2], 100), VVVVVVVVVVVHHVV, 'Test 65');
test(kthSmallestPath([11, 11], 6000), HHHHHVHVHVVVVHVVHVHVHV, 'Test 66');
test(kthSmallestPath([7, 7], 200), HHHVHVVVVHVVHH, 'Test 67');
test(kthSmallestPath([15, 15], 12345), HHHHHHHHHHVVVVHVVVVVHVVHHVVVVH, 'Test 68');
test(kthSmallestPath([8,12], 3456), HHHHHVHHVHVHVVHHVVHV, 'Test 69');
test(kthSmallestPath([6, 9], 300), HHHHVHVHVVVHVHH, 'Test 70');
test(kthSmallestPath([14, 6], 5000), HVHVVVVVHVHVHVHVVVVV, 'Test 71');
test(kthSmallestPath([10,6], 8316), VVVVVVVVVVVVVVVV, 'Test 72');
test(kthSmallestPath([15,15], 10000), HHHHHHHHHHVVVHVHVVVHVVVHVVVVVH, 'Test 73');
test(kthSmallestPath([12,12], 123456), HHHHVVVVVVHHVHHHVHVHHVVV, 'Test 74');
test(kthSmallestPath([10,10], 12870), HHHVHVVVVVHHVVVHHHVH, 'Test 75');
test(kthSmallestPath([14,6], 98765), VVVVVVVVVVVVVVVVVVVV, 'Test 76');
test(kthSmallestPath([8, 6], 150), HHHVVVVVHVHHVV, 'Test 77');
test(kthSmallestPath([7,6], 300), HHVVVVHHVHHVV, 'Test 78');
test(kthSmallestPath([12,8], 2500), HHHVHVVHHVVVHVVHVVVV, 'Test 79');
test(kthSmallestPath([5,6], 120), HHVVVHVHVHH, 'Test 80');
test(kthSmallestPath([6,7], 500), HVHHHVVHHVHVV, 'Test 81');
test(kthSmallestPath([9, 7], 200), HHHHVVVVVHVVVVHH, 'Test 82');
test(kthSmallestPath([8, 6], 500), HVHHHHVVVVHVVV, 'Test 83');
test(kthSmallestPath([15,15], 6435678), HHHHVVVHHHVHHVVVVHVVHHHVHVHVVV, 'Test 84');
test(kthSmallestPath([4,12], 500), HHHVHHHHHHHVHHVV, 'Test 85');
test(kthSmallestPath([8,7], 650), HHVHVHVHVHHVVVV, 'Test 86');
test(kthSmallestPath([6,7], 123), HHHVHVVHHVVHV, 'Test 87');
test(kthSmallestPath([12, 3], 200), VVHVVVHHVVVVVVV, 'Test 88');
test(kthSmallestPath([5, 12], 500), HHHHHVHHHVHHHVVHV, 'Test 89');
test(kthSmallestPath([5, 7], 30), HHHHVHVHVVVH, 'Test 90');
test(kthSmallestPath([6,4], 45), HVHVVVHVHV, 'Test 91');
test(kthSmallestPath([15, 1], 1), HVVVVVVVVVVVVVVV, 'Test 92');
test(kthSmallestPath([6,8], 300), HHHVHVHVVVHVHH, 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

