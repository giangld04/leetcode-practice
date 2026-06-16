// Test: 1161. Maximum Level Sum Of A Binary Tree
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { maxLevelSum } = require("./solution");

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

console.log("\n1161. Maximum Level Sum Of A Binary Tree\n");

test(maxLevelSum([1,2,3,4,5,6,7]), 3, 'Test 1');
test(maxLevelSum([1,null,2,null,3,null,4,null,5]), 5, 'Test 2');
test(maxLevelSum([1,-1,2,-2,3,-3,4]), 3, 'Test 3');
test(maxLevelSum([5,2,-3]), 1, 'Test 4');
test(maxLevelSum([-10,-20,-30,-40,-50,-60,-70]), 1, 'Test 5');
test(maxLevelSum([1,-2,-3,4,null,null,-4]), 1, 'Test 6');
test(maxLevelSum([1,7,0,7,-8,null,null]), 2, 'Test 7');
test(maxLevelSum([989,null,10250,98693,-89388,null,null,null,-32127]), 2, 'Test 8');
test(maxLevelSum([5]), 1, 'Test 9');
test(maxLevelSum([-10000,10000,-10000,10000,-10000,10000,-10000]), 2, 'Test 10');
test(maxLevelSum([1]), 1, 'Test 11');
test(maxLevelSum([1,2,3,4,null,6,7,null,null,8,null,9,10]), 4, 'Test 12');
test(maxLevelSum([5,4,8,11,null,13,4,7,2,null,null,null,1]), 3, 'Test 13');
test(maxLevelSum([-1,-2,-3,-4,null,null,-5,null,-6,null,null,null,null,null,-7]), 1, 'Test 14');
test(maxLevelSum([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,10,11,12,13,14,15]), 5, 'Test 15');
test(maxLevelSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 10, 'Test 16');
test(maxLevelSum([1,-2,3,-4,5,-6,7,-8,9,-10,11,-12,13,-14,15,-16,17,-18,19,-20]), 4, 'Test 17');
test(maxLevelSum([1000,-1000,2000,3000,-4000,5000,null,-6000,null,7000,null,8000,null,9000,null,10000]), 5, 'Test 18');
test(maxLevelSum([100,-100,100,-100,100,-100,100,-100,100,-100,100,-100,100,-100,100]), 1, 'Test 19');
test(maxLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 5, 'Test 20');
test(maxLevelSum([10,5,15,3,7,null,18,1,null,null,null,null,20]), 3, 'Test 21');
test(maxLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 6, 'Test 22');
test(maxLevelSum([10,5,-3,3,2,null,11,3,-2,null,1,null,null,-1,null,-1,8]), 3, 'Test 23');
test(maxLevelSum([5,4,8,11,null,13,4,7,2,null,null,5,1,null,null,null,9]), 3, 'Test 24');
test(maxLevelSum([1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8]), 8, 'Test 25');
test(maxLevelSum([10,-5,3,4,-6,10,-15,0,2,null,-8,null,9,null,null,null,null,null,5]), 1, 'Test 26');
test(maxLevelSum([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 5, 'Test 27');
test(maxLevelSum([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 4, 'Test 28');
test(maxLevelSum([10,5,15,null,null,6,20]), 3, 'Test 29');
test(maxLevelSum([10,9,20,null,null,15,7,null,null,5,null,null,10,null,null,-10,null,null,-20,null,null,30,null,null,40,null,null,-50,null,null,-60]), 2, 'Test 30');
test(maxLevelSum([1,3,2,5,3,null,9,0,2,5,3,null,9,0,2]), 4, 'Test 31');
test(maxLevelSum([3,9,20,null,null,15,7,null,null,2,null,1]), 2, 'Test 32');
test(maxLevelSum([1,2,3,4,5,null,null,8,9,null,null,16,17,null,null,32,33]), 6, 'Test 33');
test(maxLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5]), 4, 'Test 34');
test(maxLevelSum([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1]), 1, 'Test 35');
test(maxLevelSum([3,9,20,null,null,15,7,1,2,3,4,5,6,7,8]), 2, 'Test 36');
test(maxLevelSum([10,5,15,3,7,null,18,1,null,6,null,12,20]), 4, 'Test 37');
test(maxLevelSum([100,-200,300,-1000,500,-1500,700,800,-900,1000,-1100,1200,-1300,1400,-1500]), 1, 'Test 38');
test(maxLevelSum([100,-100,100,-100,100,-100,100,-100,100,100,-100,-100,100,100,-100]), 1, 'Test 39');
test(maxLevelSum([1,null,2,3,4,null,5,6,7,null,null,8,null,null,9]), 4, 'Test 40');
test(maxLevelSum([5,-4,6,-7,8,9,-10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]), 5, 'Test 41');
test(maxLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-25,-24,-23,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), 4, 'Test 42');
test(maxLevelSum([100,50,150,25,75,125,175,10,30,60,90,110,140,160,190]), 4, 'Test 43');
test(maxLevelSum([1000, 500, 1500, 250, 750, 1250, 1750, 125, 375, 625, 875, 1125, 1375, 1625, 1875]), 4, 'Test 44');
test(maxLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,-32]), 5, 'Test 45');
test(maxLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), 4, 'Test 46');
test(maxLevelSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15]), 4, 'Test 47');
test(maxLevelSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 11, 'Test 48');
test(maxLevelSum([1,2,3,null,null,4,null,null,5]), 2, 'Test 49');
test(maxLevelSum([100,-200,300,400,null,-500,600,null,null,700,-800,null,null,900]), 5, 'Test 50');
test(maxLevelSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 15, 'Test 51');
test(maxLevelSum([100,98,102,null,null,96,104,95,99,101,103,97,105,null,null,null,null,null,null,null,null,94,null,null,93,null,null,92,null,null,91,null,null,90,null,null,89,null,null,88,null,null,87,null,null,86,null,null,85,null,null,84,null,null,83,null,null,82,null,null,81,null,null,80]), 4, 'Test 52');
test(maxLevelSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 9, 'Test 53');
test(maxLevelSum([5,2,-5,null,-1]), 1, 'Test 54');
test(maxLevelSum([10,9,20,null,null,15,7,null,null,null,30]), 4, 'Test 55');
test(maxLevelSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), 8, 'Test 56');
test(maxLevelSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 5, 'Test 57');
test(maxLevelSum([-10,9,20,null,null,15,7]), 2, 'Test 58');
test(maxLevelSum([1,2,3,4,null,5,null,6,null,7,null,8,null,9,null,10]), 5, 'Test 59');
test(maxLevelSum([1,null,-2,-3,-4,5,null,-6,null,-7,null,-8,null,-9]), 1, 'Test 60');
test(maxLevelSum([10,5,-3,3,2,null,11,3,-2,null,1]), 3, 'Test 61');
test(maxLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 5, 'Test 62');
test(maxLevelSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), 1, 'Test 63');
test(maxLevelSum([1000,900,800,700,600,500,400,300,200,100,-100,-200,-300,-400,-500]), 3, 'Test 64');
test(maxLevelSum([0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14]), 1, 'Test 65');
test(maxLevelSum([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9]), 5, 'Test 66');
test(maxLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 4, 'Test 67');
test(maxLevelSum([3,9,20,null,null,15,7,25,20,10,5,null,null,null,null,30]), 4, 'Test 68');
test(maxLevelSum([1,2,3,4,null,null,5,6,null,7,8,null,null,9,10,null,null,11,12]), 6, 'Test 69');
test(maxLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 4, 'Test 70');
test(maxLevelSum([100, 90, 110, 80, 95, 105, 120, 70, 85, 93, 97, 103, 107, 115, 125]), 4, 'Test 71');
test(maxLevelSum([1,2,3,4,null,null,7,8,9,10,11,12,13,14,15]), 5, 'Test 72');
test(maxLevelSum([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190]), 4, 'Test 73');
test(maxLevelSum([1,2,3,null,5,null,7,null,null,null,null,14,null,null,28]), 3, 'Test 74');
test(maxLevelSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 4, 'Test 75');
test(maxLevelSum([-10,9,20,null,null,15,7,-1,-2,-3,-4,-5,-6,-7,-8]), 2, 'Test 76');
test(maxLevelSum([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), 5, 'Test 77');
test(maxLevelSum([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 5, 'Test 78');
test(maxLevelSum([5,-6,6,null,7,8,9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20]), 3, 'Test 79');
test(maxLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-26,-27,-28,-29,-30,-31,-32,-33,-34,-35,-36,-37,-38,-39,-40,-41,-42,-43,-44,-45,-46,-47,-48,-49,-50]), 4, 'Test 80');
test(maxLevelSum([10,9,-10,null,-10,null,-10,null,-10]), 1, 'Test 81');
test(maxLevelSum([1, null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 6, 'Test 82');
test(maxLevelSum([1,2,3,4,5,null,6,7,null,null,null,null,8]), 3, 'Test 83');
test(maxLevelSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 84');
test(maxLevelSum([10, 5, 15, 3, 7, 13, 18, 1, null, 6, null, 11, 14, 16, 19]), 4, 'Test 85');
test(maxLevelSum([1, 2, 3, null, null, 4, 5, null, null, 6, 7, null, null, 8, 9, null, null, 10, 11, 12, null, null, 13, 14, 15]), 8, 'Test 86');
test(maxLevelSum([10,5,-3,3,2,null,11,3,-2,null,1,null,null,null,null]), 3, 'Test 87');
test(maxLevelSum([10,9,20,null,null,15,7,1,2,3,4,5,6,7,8]), 2, 'Test 88');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

