// Test: 2265. Count Nodes Equal To Average Of Subtree
// 76 test cases from LeetCodeDataset
// Run: node test.js

const { averageOfSubtree } = require("./solution");

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

console.log("\n2265. Count Nodes Equal To Average Of Subtree\n");

test(averageOfSubtree([0,0,0,0,0,0,0]), 7, 'Test 1');
test(averageOfSubtree([4,8,5,0,1,null,6]), 5, 'Test 2');
test(averageOfSubtree([10,5,15,3,7,18]), 4, 'Test 3');
test(averageOfSubtree([3,9,20,null,null,15,7]), 3, 'Test 4');
test(averageOfSubtree([1]), 1, 'Test 5');
test(averageOfSubtree([5,3,7,2,4,6,8,1,null,null,null,null,null,null,9]), 7, 'Test 6');
test(averageOfSubtree([6,10,20,5,null,15,25,3,null,null,null,18,22]), 5, 'Test 7');
test(averageOfSubtree([5,3,8,1,4,7,10,0,2,6,9,null,null,null,null,null,null,null,null]), 10, 'Test 8');
test(averageOfSubtree([20,10,30,5,15,25,35,1,7,13,17,23,27,33,37]), 12, 'Test 9');
test(averageOfSubtree([9,6,15,3,8,12,20,1,5,7,9,11,13,17,22]), 12, 'Test 10');
test(averageOfSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 13, 'Test 11');
test(averageOfSubtree([2,3,3,8,10,14,13]), 4, 'Test 12');
test(averageOfSubtree([1,3,5,2,4,6,7,null,null,null,null,null,null,null,8]), 6, 'Test 13');
test(averageOfSubtree([10,9,8,7,6,5,4,3,2,1]), 5, 'Test 14');
test(averageOfSubtree([1,2,2,3,3,null,null,4,4,4,4,null,null,5,5,5,5,5,5,5,5]), 13, 'Test 15');
test(averageOfSubtree([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 10, 'Test 16');
test(averageOfSubtree([5,2,8,1,3,7,9,0,4,6,10]), 9, 'Test 17');
test(averageOfSubtree([3,3,null,3,null,3,null,3,null,3,null,3,null,3]), 8, 'Test 18');
test(averageOfSubtree([7,3,15,null,null,9,20]), 3, 'Test 19');
test(averageOfSubtree([6,2,8,0,4,7,9,null,1,3,5,null,null,null,null,null]), 9, 'Test 20');
test(averageOfSubtree([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), 10, 'Test 21');
test(averageOfSubtree([10,5,15,3,7,null,18]), 4, 'Test 22');
test(averageOfSubtree([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190]), 11, 'Test 23');
test(averageOfSubtree([5,3,8,2,4,7,9,1,null,null,6]), 7, 'Test 24');
test(averageOfSubtree([25,10,35,5,15,30,40,2,7,13,17,28,32,38,45]), 11, 'Test 25');
test(averageOfSubtree([1,2,2,3,3,null,null,4,4,4,4]), 7, 'Test 26');
test(averageOfSubtree([7,10,15,null,null,12,20]), 4, 'Test 27');
test(averageOfSubtree([7,3,15,null,null,9,20,null,null,null,null,19,23]), 3, 'Test 28');
test(averageOfSubtree([6,5,7,2,3,6,8,1,4,5,7,6,8,9,10]), 11, 'Test 29');
test(averageOfSubtree([1,2,3,4,5,6,7,null,null,8,9,10,11,12,13,null,null,null,null,14,15,null,null,null,null,null,16]), 8, 'Test 30');
test(averageOfSubtree([100,99,101,98,102,97,103]), 6, 'Test 31');
test(averageOfSubtree([8,5,9,4,6,8,10,null,null,null,null,7,11,null,null]), 8, 'Test 32');
test(averageOfSubtree([100,50,150,25,75,125,175,10,30,60,90,110,140,160,190]), 12, 'Test 33');
test(averageOfSubtree([6,2,8,0,4,7,9,null,null,3,5]), 8, 'Test 34');
test(averageOfSubtree([20,10,30,5,15,25,35,2,8,12,18,22,28,32,40]), 15, 'Test 35');
test(averageOfSubtree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 4, 'Test 36');
test(averageOfSubtree([999,999,999,999,999,999,999,999,999,999,999,999,999,999,999]), 15, 'Test 37');
test(averageOfSubtree([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 15, 'Test 38');
test(averageOfSubtree([7,3,15,1,5,9,20,0,2,null,null,null,null,17,25]), 8, 'Test 39');
test(averageOfSubtree([100,50,150,25,75,125,175,12,37,63,87,112,137,162,187]), 9, 'Test 40');
test(averageOfSubtree([500,250,750,125,375,625,875,63,188,313,438,563,688,813,938]), 15, 'Test 41');
test(averageOfSubtree([5,1,4,null,null,3,6]), 4, 'Test 42');
test(averageOfSubtree([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 8, 'Test 43');
test(averageOfSubtree([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), 9, 'Test 44');
test(averageOfSubtree([2,1,3,0,4,6,9,0,0,0,0,0,0,0,0]), 9, 'Test 45');
test(averageOfSubtree([100,50,150,25,75,null,null,10,40,125,175]), 6, 'Test 46');
test(averageOfSubtree([9,3,15,1,null,12,20,null,null,null,13,18,22]), 6, 'Test 47');
test(averageOfSubtree([10,5,15,3,7,null,18,1,null,6,8,null,null,17,20]), 7, 'Test 48');
test(averageOfSubtree([7,3,15,null,null,9,20,null,null,10,19]), 4, 'Test 49');
test(averageOfSubtree([7,10,15,null,null,null,20]), 2, 'Test 50');
test(averageOfSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 10, 'Test 51');
test(averageOfSubtree([10,5,15,3,7,12,18]), 7, 'Test 52');
test(averageOfSubtree([7,3,11,1,5,9,13,null,null,2,6,8,10,12,14]), 12, 'Test 53');
test(averageOfSubtree([5,3,6,2,4,null,null,1,7]), 5, 'Test 54');
test(averageOfSubtree([1,3,2,5,3,null,9,0,8]), 5, 'Test 55');
test(averageOfSubtree([2,3,3,4,5,6,7,8,9,10,11,12,13,14,15]), 8, 'Test 56');
test(averageOfSubtree([2,1,3,0,2,2,4,null,null,null,3,null,null,2,null]), 7, 'Test 57');
test(averageOfSubtree([2,3,null,1,null,3,null,null,2,null,2]), 3, 'Test 58');
test(averageOfSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 8, 'Test 59');
test(averageOfSubtree([4,2,6,1,3,5,7,0,8]), 8, 'Test 60');
test(averageOfSubtree([1,0,2,0,0,0,3,0,0,0,0,0,4]), 10, 'Test 61');
test(averageOfSubtree([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190]), 15, 'Test 62');
test(averageOfSubtree([1,3,2,null,5,null,9,6,null,7,null,11,null,13,null,17]), 3, 'Test 63');
test(averageOfSubtree([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4]), 12, 'Test 64');
test(averageOfSubtree([5,3,6,2,4,null,null,1]), 3, 'Test 65');
test(averageOfSubtree([1000,500,1500,250,750,1250,1750,125,375,625,875,1125,1375,1625,1875]), 15, 'Test 66');
test(averageOfSubtree([5,10,15,20,25,null,null,30,null,null,35]), 3, 'Test 67');
test(averageOfSubtree([2,3,5,8,13,null,null]), 3, 'Test 68');
test(averageOfSubtree([6,12,8,24,4,null,2,null,10]), 4, 'Test 69');
test(averageOfSubtree([5,2,8,1,4,null,9,null,null,3,6]), 6, 'Test 70');
test(averageOfSubtree([10,5,15,3,7,13,18,1,null,6]), 5, 'Test 71');
test(averageOfSubtree([10,5,15,3,7,12,20,1,4,6,8,11,13,18,25]), 11, 'Test 72');
test(averageOfSubtree([2,1,11,0,3,9,12,null,null,2,4,8,10,null,5,6,13]), 8, 'Test 73');
test(averageOfSubtree([1,3,2,5,9,null,10,null,null,13,null,null,7]), 3, 'Test 74');
test(averageOfSubtree([10,5,15,3,7,12,20,1,null,6,8,11,14,18,22]), 12, 'Test 75');
test(averageOfSubtree([5,4,8,11,null,13,4,7,2,null,null,5,1]), 5, 'Test 76');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

