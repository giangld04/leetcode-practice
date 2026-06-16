// Test: 560. Subarray Sum Equals K
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { subarraySum } = require("./solution");

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

console.log("\n560. Subarray Sum Equals K\n");

test(subarraySum([2,2,2,2,2], 4), 4, 'Test 1');
test(subarraySum([5,5,5,5,5,5,5,5,5,5], 15), 8, 'Test 2');
test(subarraySum([0,0,0,0,0,0,0,0,0,0], 0), 55, 'Test 3');
test(subarraySum([1,2,1,2,1], 3), 4, 'Test 4');
test(subarraySum([100,200,300,400,500], 1500), 1, 'Test 5');
test(subarraySum([1000,-1000,1000,-1000,1000], 0), 6, 'Test 6');
test(subarraySum([1,2,3,4,5], 9), 2, 'Test 7');
test(subarraySum([1], 1), 1, 'Test 8');
test(subarraySum([1,1,1], 2), 2, 'Test 9');
test(subarraySum([100,-100,200,-200,300,-300], 0), 6, 'Test 10');
test(subarraySum([-1,-1,1], 0), 1, 'Test 11');
test(subarraySum([10,20,30,40,50], 100), 1, 'Test 12');
test(subarraySum([1,2,3,4,5,6,7,8,9,10], 15), 3, 'Test 13');
test(subarraySum([1,-1,5,-2,3], 3), 3, 'Test 14');
test(subarraySum([1,-1,2,-2,3,-3,4,-4], 0), 10, 'Test 15');
test(subarraySum([1,0,-1,0,-1,0,1], 0), 8, 'Test 16');
test(subarraySum([10,20,30,40,50], 150), 1, 'Test 17');
test(subarraySum([3,4,7,2,-3,1,4,2], 7), 4, 'Test 18');
test(subarraySum([1,-1,0], 0), 3, 'Test 19');
test(subarraySum([-1,-2,-3], -6), 1, 'Test 20');
test(subarraySum([-1,-1,1,1,0], 0), 4, 'Test 21');
test(subarraySum([1,2,3], 3), 2, 'Test 22');
test(subarraySum([-1,-1,2], 1), 1, 'Test 23');
test(subarraySum([1000, -1000, 1000, -1000, 1000], 0), 6, 'Test 24');
test(subarraySum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 25), 16, 'Test 25');
test(subarraySum([1000, -1000, 2000, -2000, 3000], 0), 3, 'Test 26');
test(subarraySum([1, -1, 0, 1, -1, 1, -1], 0), 13, 'Test 27');
test(subarraySum([1000, 2000, 3000, 4000, 5000], 10000), 1, 'Test 28');
test(subarraySum([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 1000), 1, 'Test 29');
test(subarraySum([1, -1, 1, -1, 1, -1, 1, -1], 0), 16, 'Test 30');
test(subarraySum([1, 3, -2, 5, 6, -4, 2, 3], 5), 3, 'Test 31');
test(subarraySum([5,5,5,5,5,5,5,5,5,5], 25), 6, 'Test 32');
test(subarraySum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 15), 8, 'Test 33');
test(subarraySum([10, 20, 30, -10, -20, -30, 40, 50, -40, -50], 30), 5, 'Test 34');
test(subarraySum([1, -1, 0, 1, -1, 2], 0), 7, 'Test 35');
test(subarraySum([5, 5, 5, 5, 5, 5, 5], 10), 6, 'Test 36');
test(subarraySum([100, -100, 50, 50, -50, 50, -100, 100], 0), 10, 'Test 37');
test(subarraySum([-10, 0, 10, -10, 0, 10], 0), 9, 'Test 38');
test(subarraySum([100,200,300,400,500,600,700,800,900,1000], 5000), 0, 'Test 39');
test(subarraySum([10, -5, 10, -5, 10], 5), 4, 'Test 40');
test(subarraySum([1, -1, 1, -1, 1, -1], 0), 9, 'Test 41');
test(subarraySum([100, 200, 300, 400, 500], 1000), 1, 'Test 42');
test(subarraySum([0, 0, 0, 0, 0, 0, 0], 0), 28, 'Test 43');
test(subarraySum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -15), 3, 'Test 44');
test(subarraySum([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 100), 1, 'Test 45');
test(subarraySum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1500), 3, 'Test 46');
test(subarraySum([1, -2, 1, 2, -1, 2, 3, 4, -2, 1], 3), 5, 'Test 47');
test(subarraySum([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], -3), 4, 'Test 48');
test(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 2, 'Test 49');
test(subarraySum([1, 2, 3, 4, 5, -5, -4, -3, -2, -1], 5), 3, 'Test 50');
test(subarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 16, 'Test 51');
test(subarraySum([1000, 1000, 1000, 1000, 1000, 1000, 1000], 3000), 5, 'Test 52');
test(subarraySum([1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 3), 9, 'Test 53');
test(subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0), 55, 'Test 54');
test(subarraySum([0,0,0,0,0], 0), 15, 'Test 55');
test(subarraySum([-10,-20,-30,-40,-50], -70), 1, 'Test 56');
test(subarraySum([1,1,1,1,1,1,1,1,1,1], 5), 6, 'Test 57');
test(subarraySum([1, 3, 4, 5, 7, 8, 10, 11, 12, 13], 20), 2, 'Test 58');
test(subarraySum([1, -1, 0, 0, 1, -1], 0), 11, 'Test 59');
test(subarraySum([10, -5, 2, -3, 1, 5, -2], 7), 1, 'Test 60');
test(subarraySum([1, -1, 0, 0, 1], 0), 7, 'Test 61');
test(subarraySum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 2500), 1, 'Test 62');
test(subarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 6, 'Test 63');
test(subarraySum([10, -10, 10, -10, 10, -10, 10, -10, 10, -10], 0), 25, 'Test 64');
test(subarraySum([-10, 100, -100, 50, -50, 25, -25], 0), 6, 'Test 65');
test(subarraySum([1,-1,2,-2,3,-3,4,-4,5,-5], 0), 15, 'Test 66');
test(subarraySum([1, 2, 3, -6, 2, 3, 4, -10, 2, 3, 4, 5], 5), 6, 'Test 67');
test(subarraySum([-10, -20, 10, 20, 10, -10, -20, 10, 20], 0), 6, 'Test 68');
test(subarraySum([1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000], 0), 16, 'Test 69');
test(subarraySum([10,20,30,40,50], 70), 1, 'Test 70');
test(subarraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150), 3, 'Test 71');
test(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15), 3, 'Test 72');
test(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 3, 'Test 73');
test(subarraySum([-100,-200,-300,-400,-500,-600,-700,-800,-900,-1000], -5000), 0, 'Test 74');
test(subarraySum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 0), 25, 'Test 75');
test(subarraySum([1, -1, 5, -2, 3], 3), 3, 'Test 76');
test(subarraySum([1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000], 0), 25, 'Test 77');
test(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50), 2, 'Test 78');
test(subarraySum([1, -1, 1, -1, 1, -1, 1], 0), 12, 'Test 79');
test(subarraySum([100, 200, 300, 400, 500, 600], 1500), 2, 'Test 80');
test(subarraySum([5, 5, 5, 5, 5], 15), 3, 'Test 81');
test(subarraySum([0, 0, 0, 0, 0], 0), 15, 'Test 82');
test(subarraySum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 2), 0, 'Test 83');
test(subarraySum([1,2,-1,2,-1,1], 2), 5, 'Test 84');
test(subarraySum([-1, 2, -3, 4, -5, 6, -7, 8, -9], -5), 3, 'Test 85');
test(subarraySum([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], 5), 3, 'Test 86');
test(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30), 2, 'Test 87');
test(subarraySum([1, 2, 3, 4, 5], 9), 2, 'Test 88');
test(subarraySum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 25), 6, 'Test 89');
test(subarraySum([-1000, 1000, -1000, 1000, -1000, 1000], 0), 9, 'Test 90');
test(subarraySum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 50), 1, 'Test 91');
test(subarraySum([1, 2, 1, 2, 1], 3), 4, 'Test 92');
test(subarraySum([3, 4, 7, 2, -3, 1, 4, 2, 0, 1], 7), 7, 'Test 93');
test(subarraySum([10, 2, -2, -20, 10], -10), 3, 'Test 94');
test(subarraySum([0, 0, 0, 0, 0, 0], 0), 21, 'Test 95');
test(subarraySum([1000, -1000, 1000, -1000, 1000, -1000], 0), 9, 'Test 96');
test(subarraySum([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 30), 3, 'Test 97');
test(subarraySum([1, 2, 3, 4, 5], 15), 1, 'Test 98');
test(subarraySum([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], -150), 3, 'Test 99');
test(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 1, 'Test 100');
test(subarraySum([-1,0,1,-1,0,1], 0), 9, 'Test 101');
test(subarraySum([5, -5, 5, -5, 5, -5, 5], 5), 10, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

