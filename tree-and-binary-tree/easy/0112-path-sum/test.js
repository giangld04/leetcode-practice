// Test: 112. Path Sum
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { hasPathSum } = require("./solution");

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

console.log("\n112. Path Sum\n");

test(hasPathSum([], 0), false, 'Test 1');
test(hasPathSum([1,2,3,4,5,6,7], 10), true, 'Test 2');
test(hasPathSum([1,-2,-3,1,3,-2,null,-1], 3), false, 'Test 3');
test(hasPathSum([1,2], 3), true, 'Test 4');
test(hasPathSum([1,2,3], 5), false, 'Test 5');
test(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22), true, 'Test 6');
test(hasPathSum([1,2], 1), false, 'Test 7');
test(hasPathSum([-2,null,-3], -5), true, 'Test 8');
test(hasPathSum([1,2,3,null,null,4,5], 10), false, 'Test 9');
test(hasPathSum([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190], 400), false, 'Test 10');
test(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 26), true, 'Test 11');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 30), false, 'Test 12');
test(hasPathSum([0,1,1,0,1,0,1,0,1,0,1,0,1,0,1], 2), true, 'Test 13');
test(hasPathSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), true, 'Test 14');
test(hasPathSum([10,9,8,7,6,5,4,3,2,1], 54), false, 'Test 15');
test(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 26), true, 'Test 16');
test(hasPathSum([10,5,15,3,7,12,null,1,null,6,8,null,null,11,13], 22), false, 'Test 17');
test(hasPathSum([-1,null,-2,null,-3,null,-4,null,-5,null,-6,null,-7,null,-8], -16), false, 'Test 18');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 27), false, 'Test 19');
test(hasPathSum([10,5,15,3,7,null,18], 32), false, 'Test 20');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 120), false, 'Test 21');
test(hasPathSum([0,1,1,0,1,0,1,0,1,0,1,0,1,0,1], 3), true, 'Test 22');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 31), false, 'Test 23');
test(hasPathSum([10,5,15,3,7,null,18], 22), true, 'Test 24');
test(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 30), false, 'Test 25');
test(hasPathSum([100,50,200,null,150,null,300,125,null,null,null,250], 475), false, 'Test 26');
test(hasPathSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15], -30), false, 'Test 27');
test(hasPathSum([10,20,30,40,50,60,70,80,90,100], 100), true, 'Test 28');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 93), false, 'Test 29');
test(hasPathSum([1,2,null,3,null,4,null,5], 15), true, 'Test 30');
test(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 31), false, 'Test 31');
test(hasPathSum([1,2,2,3,4,3,4,null,null,null,null,5,5,5,5], 13), false, 'Test 32');
test(hasPathSum([100,-100,100,-100,100,-100,100,-100,100], 0), true, 'Test 33');
test(hasPathSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 10), false, 'Test 34');
test(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 22), true, 'Test 35');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 45), false, 'Test 36');
test(hasPathSum([10,20,30,40,50,60,70,80,90,100], 550), false, 'Test 37');
test(hasPathSum([-1,2,-3,4,-5,6,-7,8,-9,10,-11,12,-13,14,-15], 3), true, 'Test 38');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 39), false, 'Test 39');
test(hasPathSum([1000,-1000,1000,-1000,1000,-1000,1000], 0), false, 'Test 40');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 100), false, 'Test 41');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 9), false, 'Test 42');
test(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 27), true, 'Test 43');
test(hasPathSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 55), true, 'Test 44');
test(hasPathSum([10,20,30,40,50,60,70,80,90,100], 400), false, 'Test 45');
test(hasPathSum([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 23), false, 'Test 46');
test(hasPathSum([1000,-1000,1000,-1000,null,1000,-1000,null,-1000,null,1000], 0), false, 'Test 47');
test(hasPathSum([10,5,-3,3,2,null,11,3,-2,null,1], 8), false, 'Test 48');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 60), false, 'Test 49');
test(hasPathSum([100,50,150,25,75,125,175,10,40,60,80,110,140,160,190], 450), false, 'Test 50');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 29), false, 'Test 51');
test(hasPathSum([0,-1,1,null,-2,2,null,null,-3,3], -1), false, 'Test 52');
test(hasPathSum([-1,null,-2,-3,null,-4,null], -10), true, 'Test 53');
test(hasPathSum([-10,-5,-15,-3,-7,null,-18], -28), false, 'Test 54');
test(hasPathSum([1,-2,-3,1,3,-2,null,-1], 2), true, 'Test 55');
test(hasPathSum([100,50,200,25,75,null,350,12,null,60,85,null,null,null,400], 275), false, 'Test 56');
test(hasPathSum([-1,2,-3,4,-5,6,-7,8,-9,10,-11,12,-13,14,-15], -15), true, 'Test 57');
test(hasPathSum([0,1,1,0,1,0,1,-1,-1,null,null,null,-1,null,-1,null,1,null,-1,null,-1,null,1,null,null,null,null,null,null,null,null], 2), true, 'Test 58');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 90), false, 'Test 59');
test(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 21), false, 'Test 60');
test(hasPathSum([-1,-2,-3,-4,null,-6,-7], -14), false, 'Test 61');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 64), false, 'Test 62');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 38), true, 'Test 63');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 60), false, 'Test 64');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 32), false, 'Test 65');
test(hasPathSum([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 28), false, 'Test 66');
test(hasPathSum([0,1,1,0,1,0,null,null,1,0], 1), true, 'Test 67');
test(hasPathSum([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190], 250), false, 'Test 68');
test(hasPathSum([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], 450), false, 'Test 69');
test(hasPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1), false, 'Test 70');
test(hasPathSum([100,98,102,null,null,99,101,97,null,103], 300), false, 'Test 71');
test(hasPathSum([-10,9,20,null,null,15,7], 7), false, 'Test 72');
test(hasPathSum([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190], 500), false, 'Test 73');
test(hasPathSum([-1,2,-3,4,-5,6,-7,8,-9,10,-11,12,-13,14,-15], -16), false, 'Test 74');
test(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 18), true, 'Test 75');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

