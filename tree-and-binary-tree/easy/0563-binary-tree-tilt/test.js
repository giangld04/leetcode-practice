// Test: 563. Binary Tree Tilt
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { findTilt } = require("./solution");

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

console.log("\n563. Binary Tree Tilt\n");

test(findTilt([1,2,3]), 1, 'Test 1');
test(findTilt([21,7,14,1,1,2,2,3,3]), 9, 'Test 2');
test(findTilt([10,5,15,3,7,null,18]), 40, 'Test 3');
test(findTilt([1,2,3,4,null,5,6,null,null,7,null,8,9]), 55, 'Test 4');
test(findTilt([4,2,9,3,5,null,7]), 15, 'Test 5');
test(findTilt([1,2]), 2, 'Test 6');
test(findTilt([1, null, 2, null, 3]), 8, 'Test 7');
test(findTilt([1,null,2]), 2, 'Test 8');
test(findTilt([1,null,2,null,3]), 8, 'Test 9');
test(findTilt([0]), 0, 'Test 10');
test(findTilt([1,null,2,null,3,null,4]), 20, 'Test 11');
test(findTilt([3,9,20,null,null,15,7]), 41, 'Test 12');
test(findTilt([1]), 0, 'Test 13');
test(findTilt([]), 0, 'Test 14');
test(findTilt([1,2,3,null,null,4,null,null,5,6,null,7,null,null,8]), 131, 'Test 15');
test(findTilt([1000,-1000,500,null,null,-250,250]), 2000, 'Test 16');
test(findTilt([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 330, 'Test 17');
test(findTilt([5,3,9,1,4,8,10,0,2,null,null,null,null,6,11]), 61, 'Test 18');
test(findTilt([10,9,8,7,6,5,4,3,2,1]), 19, 'Test 19');
test(findTilt([1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000]), 14000, 'Test 20');
test(findTilt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 35, 'Test 21');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,16,17,18,19,20,21,22,23,24,25]), 441, 'Test 22');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 647, 'Test 23');
test(findTilt([1,2,3,null,null,4,5,null,null,null,null,6,7,8,9]), 11, 'Test 24');
test(findTilt([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1]), 14, 'Test 25');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), 167, 'Test 26');
test(findTilt([1,2,2,3,3,null,null,4,4,5,5,null,null,6,6,7,7,null,null,8,8,9,9,null,null,10,10]), 216, 'Test 27');
test(findTilt([100,-50,50,25,-25,25,-25,12,-12,12,-12,12,-12,12,-12]), 296, 'Test 28');
test(findTilt([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 114, 'Test 29');
test(findTilt([10,5,15,3,7,null,18,null,null,6,9]), 43, 'Test 30');
test(findTilt([1,2,3,4,null,6,7,8,null,10,null,12,null,14]), 97, 'Test 31');
test(findTilt([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 1120, 'Test 32');
test(findTilt([50,25,75,10,40,60,90,5,15,30,45,55,65,80,100]), 585, 'Test 33');
test(findTilt([0,1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7]), 56, 'Test 34');
test(findTilt([1,null,null,2,null,null,3,null,null,4,null,null,5,null,null,6]), 0, 'Test 35');
test(findTilt([10,5,15,3,7,null,18,1,null,6,null,16,null,17]), 109, 'Test 36');
test(findTilt([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 440, 'Test 37');
test(findTilt([10,5,-3,3,2,null,11,3,-2,null,1,null,null,-1,null,null,null,null,null]), 20, 'Test 38');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,16]), 57, 'Test 39');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 35, 'Test 40');
test(findTilt([100,-50,-50,30,20,10,-10,2,8,-2,-8,1,-1,0,0]), 114, 'Test 41');
test(findTilt([0,1,1,2,2,2,2,3,3,3,3,3,3,3,3]), 0, 'Test 42');
test(findTilt([20,10,30,5,15,25,35,-1,3,8,18,23,27,32,38]), 240, 'Test 43');
test(findTilt([100,90,90,80,null,null,80,70,null,null,70,60,null,null,60,50,null,null,50,40,null,null,40,30,null,null,30,20,null,null,20,10,null,null,10]), 2400, 'Test 44');
test(findTilt([-10,15,-3,7,-8,null,null,6,4]), 54, 'Test 45');
test(findTilt([1000,-1000,500,250,-250,0,0,125,-125,62,-62,31,-31,15,-15,7,-7,3,-3,1,-1]), 2488, 'Test 46');
test(findTilt([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 47');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), 87, 'Test 48');
test(findTilt([20,15,25,10,17,22,30,null,null,13,19,null,null,21,24,27,33]), 227, 'Test 49');
test(findTilt([10,9,8,7,6,5,4,3,2,1,-1,-2,-3,-4,-5]), 40, 'Test 50');
test(findTilt([1000,-500,-500,250,250,-250,-250,125,125,125,125,-125,-125,-125,-125]), 2000, 'Test 51');
test(findTilt([1,2,3,4,5,null,6,7,null,null,null,null,8,9,10]), 94, 'Test 52');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 163, 'Test 53');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 167, 'Test 54');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 35, 'Test 55');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25,-1]), 533, 'Test 56');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 215, 'Test 57');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 928, 'Test 58');
test(findTilt([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 59');
test(findTilt([5,3,6,2,4,null,null,1,null,null,null,null,null,null,8]), 6, 'Test 60');
test(findTilt([-10,-20,-30,-40,null,-50,-60,-70,null,-80,-90]), 530, 'Test 61');
test(findTilt([3,9,20,null,null,15,7,1,2,3,4,5,6,7,8]), 107, 'Test 62');
test(findTilt([20,-10,10,null,5,5,null,3,null,2]), 39, 'Test 63');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25,-1,26,27,28,29,30,-1]), 35, 'Test 64');
test(findTilt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), 155, 'Test 65');
test(findTilt([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), 35, 'Test 66');
test(findTilt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 159, 'Test 67');
test(findTilt([1,-2,-3,1,3,-2,null,-1,null,null,-1]), 11, 'Test 68');
test(findTilt([9,4,20,null,null,15,17,12,null,6,18,null,13,7,null,null,null,null,null,null]), 162, 'Test 69');
test(findTilt([1,2,2,3,null,3,null,4,null,4,null,5,null,5,null,6,null,6,null,7,null,7,null,8,null,8,null,9,null,9,null,10,null,10]), 552, 'Test 70');
test(findTilt([1000,-1000,1000,-1000,1000,-1000,1000]), 6000, 'Test 71');
test(findTilt([100,-100,200,-200,300,-300,400]), 1500, 'Test 72');
test(findTilt([3,9,20,null,null,15,7,null,null,25,15,null,null,null,null,30,null]), 115, 'Test 73');
test(findTilt([1,-2,-3,-4,-5,4,5,6,7,8,9,10,11,12,13]), 45, 'Test 74');
test(findTilt([1,2,3,4,null,5,6,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 301, 'Test 75');
test(findTilt([5,3,8,1,4,7,9,null,2,null,null,null,null,null,6]), 37, 'Test 76');
test(findTilt([5,14,3,7,13,null,null,5,9,null,null,4,10,null,null,2,8,11,12]), 216, 'Test 77');
test(findTilt([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 132, 'Test 78');
test(findTilt([15,10,20,8,12,16,25,4,9,11,13,17,21,24,27]), 134, 'Test 79');
test(findTilt([-1,-2,-3,-4,null,-5,-6,-7,null,-8,null,-9,null,-10]), 75, 'Test 80');
test(findTilt([10,5,-3,3,2,null,11,3,-2,null,1]), 22, 'Test 81');
test(findTilt([5,3,6,2,4,null,null,1,null,null,null,null,7]), 32, 'Test 82');
test(findTilt([100,90,80,70,60,50,40,30,20,10,0,-10,-20,-30,-40,-50,-60,-70,-80,-90,-100]), 590, 'Test 83');
test(findTilt([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 20, 'Test 84');
test(findTilt([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 20, 'Test 85');
test(findTilt([10,5,-3,3,2,null,11,3,-2,null,1,null,null,null,null,8]), 44, 'Test 86');
test(findTilt([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 87');
test(findTilt([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19]), 2280, 'Test 88');
test(findTilt([1,2,3,4,null,5,6,null,7,8,null,9,10,11,null,12,null,13,14,null,15,16,17,null,18,null,19]), 437, 'Test 89');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

