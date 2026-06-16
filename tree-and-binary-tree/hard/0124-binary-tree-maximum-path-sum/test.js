// Test: 124. Binary Tree Maximum Path Sum
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { maxPathSum } = require("./solution");

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

console.log("\n124. Binary Tree Maximum Path Sum\n");

test(maxPathSum([1,null,2,null,3,null,4,null,5]), 15, 'Test 1');
test(maxPathSum([2,-1]), 2, 'Test 2');
test(maxPathSum([-3]), -3, 'Test 3');
test(maxPathSum([1,2,3]), 6, 'Test 4');
test(maxPathSum([1,-2,-3]), 1, 'Test 5');
test(maxPathSum([-2,1]), 1, 'Test 6');
test(maxPathSum([-10,9,20,null,null,15,7]), 42, 'Test 7');
test(maxPathSum([1,2]), 3, 'Test 8');
test(maxPathSum([1,null,2]), 3, 'Test 9');
test(maxPathSum([0]), 0, 'Test 10');
test(maxPathSum([-1]), -1, 'Test 11');
test(maxPathSum([5,4,8,11,null,13,4,7,2,null,null,5,1]), 48, 'Test 12');
test(maxPathSum([1]), 1, 'Test 13');
test(maxPathSum([1,-2,-3,1,3,-2,null,-1]), 3, 'Test 14');
test(maxPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1]), 48, 'Test 15');
test(maxPathSum([-10,9,20,null,null,15,7,-1,-2,1,1,-3,-4,-5,-6]), 43, 'Test 16');
test(maxPathSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 55, 'Test 17');
test(maxPathSum([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 440, 'Test 18');
test(maxPathSum([-1,2,-3,4,-5,6,-7,8,-9,null,null,null,null,null,-10]), 16, 'Test 19');
test(maxPathSum([50,20,30,15,25,10,35,-10,-5,null,null,null,null,null,null]), 160, 'Test 20');
test(maxPathSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), 36, 'Test 21');
test(maxPathSum([-10,5,15,-5,3,null,7,-1,null,-2,4,null,null,8]), 24, 'Test 22');
test(maxPathSum([9,6,-3,null,null,-6,2,null,null,2,2,null,-1,-6,-6,-6]), 16, 'Test 23');
test(maxPathSum([50,20,30,10,40,25,35,5,15,32,45,22,28,33,42,1,9,11,19,31,37,43,48,0,4,8,14,16,18,21,24,27,29,34,36,39,41,44,46,47,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), 351, 'Test 24');
test(maxPathSum([1,null,-2,null,-3,null,-4,null,-5,null,-6,null,-7,null,-8,null,-9]), 1, 'Test 25');
test(maxPathSum([-1,null,-2,null,-3,null,-4,-5,null]), -1, 'Test 26');
test(maxPathSum([2,-5,7,-4,null,null,6,-3,-1,8,9,null,null,null,null,null,10]), 33, 'Test 27');
test(maxPathSum([10,9,-10,null,null,15,7,null,null,null,1,null,null,-1,null,-5]), 24, 'Test 28');
test(maxPathSum([2,-1,-2,1,-3,-4,-5,-6,-7]), 2, 'Test 29');
test(maxPathSum([5,4,8,11,null,13,4,7,2,null,null,5,1,null,null,-2,9,3,1,null,null,null,null,null,null,null,-10]), 52, 'Test 30');
test(maxPathSum([-1,null,2,null,3,null,4,null,5,null,6,null,7]), 27, 'Test 31');
test(maxPathSum([100,-50,-50,40,20,null,-60,30,null,10,null,-5]), 120, 'Test 32');
test(maxPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1,null,-5,6,8,-4,-6,null,7,9]), 58, 'Test 33');
test(maxPathSum([-1,2,2,null,3,null,3,null,4,null,4]), 17, 'Test 34');
test(maxPathSum([0,-10,20,null,null,15,6,null,null,-5,12,11,13,-14]), 53, 'Test 35');
test(maxPathSum([-10,-20,-30,-40,null,-50,-60,null,null,-70,-80,-90,null,null,-100]), -10, 'Test 36');
test(maxPathSum([100,50,200,25,75,150,300,10,40,60,90,125,175,250,350]), 1175, 'Test 37');
test(maxPathSum([-1,-2,-3,1,2,-1,-1,-2,null,-3,null,-2,-2]), 2, 'Test 38');
test(maxPathSum([10,9,20,null,null,15,7,6,12,3,8,99,-100,5,null,4,2,1,null,null,null,null,null,null,null,-99]), 159, 'Test 39');
test(maxPathSum([100,-50,50,-25,25,-12,12,-6,6,-3,3,-1,1,0,-100,100,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), 181, 'Test 40');
test(maxPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1,null,null,null,9]), 52, 'Test 41');
test(maxPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), 44, 'Test 42');
test(maxPathSum([1,-10,20,15,10,null,-25,6,null,null,-3,null,4]), 32, 'Test 43');
test(maxPathSum([-1,-2,-3,-4,-5]), -1, 'Test 44');
test(maxPathSum([5,4,8,11,null,13,4,7,2,null,null,5,1,null,null,-1,null,-5,6,9]), 50, 'Test 45');
test(maxPathSum([1,-2,3,4,null,null,-6,null,-7,null,null,8,9]), 10, 'Test 46');
test(maxPathSum([-10,5,20,15,25,null,null,null,-5,30,null]), 75, 'Test 47');
test(maxPathSum([10,-2,15,20,-5,null,7,null,1,null,3,9]), 60, 'Test 48');
test(maxPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 101, 'Test 49');
test(maxPathSum([2,-5,-1,null,-9,-4,null,null,-3,null,-8]), 2, 'Test 50');
test(maxPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 69, 'Test 51');
test(maxPathSum([3,9,20,null,null,15,7,3,10,-1,null,-15,9,null,null,null,-1]), 59, 'Test 52');
test(maxPathSum([0,-10,20,15,7,-2,null,null,null,null,null,5,1,null,null,null,-1]), 28, 'Test 53');
test(maxPathSum([10,2,10,8,34,7,6,1,null,null,null,null,null,9,8,7]), 71, 'Test 54');
test(maxPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1,null,5]), 53, 'Test 55');
test(maxPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1,-14,16,18,null,null,null,null,null,null,null,-19]), 64, 'Test 56');
test(maxPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 44, 'Test 57');
test(maxPathSum([0,2,5,null,null,6,3,null,null,9,null,null,12,15,7]), 50, 'Test 58');
test(maxPathSum([0,-10,7,8,null,15,null,-8,null,5,null,9,6,11,null,null,null,null,null,null,null,null,null,null,null]), 38, 'Test 59');
test(maxPathSum([1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), 1, 'Test 60');
test(maxPathSum([10,5,15,3,7,13,18,1,4,6,8,12,14,17,19,null,2,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), 82, 'Test 61');
test(maxPathSum([-1,null,9,-6,3,null,null,null,-2]), 12, 'Test 62');
test(maxPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,-27,-28,-29,-30]), 44, 'Test 63');
test(maxPathSum([1,-2,3,-4,5,-6,7,-8,9,-10,11,-12,13,-14,15,-16,17,-18,19,-20]), 48, 'Test 64');
test(maxPathSum([-10,9,20,null,null,15,7,null,null,null,null,2,null,1,null,-1,null,null,null,-2]), 42, 'Test 65');
test(maxPathSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 66');
test(maxPathSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,-27,-28,-29,-30,-31,-32]), -1, 'Test 67');
test(maxPathSum([5,4,8,11,null,13,4,7,2,null,null,5,1,null,null,-1,null,-1,null,-2]), 48, 'Test 68');
test(maxPathSum([100,-50,200,-75,25,150,250,-100,null,20,null,-50,null,30,40]), 640, 'Test 69');
test(maxPathSum([-1,null,-2,null,-3,null,-4,null,-5]), -1, 'Test 70');
test(maxPathSum([9,4,0,-1,-3,null,-10,null,null,-5]), 13, 'Test 71');
test(maxPathSum([0,-10,5,null,null,-5,6]), 11, 'Test 72');
test(maxPathSum([10,-10,20,-20,30,-30,40,null,null,null,-40,null,null,-50,-60,null,null,-70,-80]), 90, 'Test 73');
test(maxPathSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), -1, 'Test 74');
test(maxPathSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31,null,32,null,33,null,34,null,35,null,36,null,37,null,38,null,39,null,40]), 820, 'Test 75');
test(maxPathSum([-1,null,-2,null,-3,null,-4,null,-5,null,-6,null,-7]), -1, 'Test 76');
test(maxPathSum([10,9,20,null,null,15,7,12,null,2,1,null,null,-5]), 66, 'Test 77');
test(maxPathSum([5,-4,-8,11,null,13,4,7,2,null,null,5,1,null,null,-1,null,-5,6,9,-3]), 26, 'Test 78');
test(maxPathSum([2,-1,-2,1,-4,-5,-6]), 2, 'Test 79');
test(maxPathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), 119, 'Test 80');
test(maxPathSum([2,-5,6,null,5,null,7]), 15, 'Test 81');
test(maxPathSum([100,50,50,25,25,25,25,12,13,14,15,16,17,18,19]), 284, 'Test 82');
test(maxPathSum([3,-2,5,-6,null,null,4,null,null,-8,null,null,7]), 12, 'Test 83');
test(maxPathSum([50,20,30,10,40,25,35,5,15,32,45,23,27,33,47,1,9,11,19,31,34,39,44,46,48]), 325, 'Test 84');
test(maxPathSum([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 45, 'Test 85');
test(maxPathSum([5,4,8,11,null,13,4,7,2,null,null,5,1,null,null,null,-1,null,-9]), 48, 'Test 86');
test(maxPathSum([10,9,-10,null,null,15,20,1,null,-1,null,-5,null,4,null,-6]), 32, 'Test 87');
test(maxPathSum([10,5,-3,3,2,null,11,3,-2,null,1]), 29, 'Test 88');
test(maxPathSum([1,-2,3,-4,null,5,-6,7,null,null,8,null,9]), 19, 'Test 89');
test(maxPathSum([1,-2,3,4,null,5,-6,null,null,7,-8,9,-10,null,null,null,null,11]), 29, 'Test 90');
test(maxPathSum([10,-10,20,15,7,null,-5,20,30]), 65, 'Test 91');
test(maxPathSum([1,-2,-3,4,5,null,6,null,null,-8,-9]), 7, 'Test 92');
test(maxPathSum([-10,5,9,null,-3,null,-8,null,-2,null,7,-5,null,-1,null,6,null,null,null,null,null,null,8]), 9, 'Test 93');
test(maxPathSum([9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6]), 16, 'Test 94');
test(maxPathSum([100,-50,-50,null,-100,-100,null,-50,-100,null,-150,-150]), 100, 'Test 95');
test(maxPathSum([10,9,20,null,null,15,7,null,null,30,40,null,50]), 127, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

