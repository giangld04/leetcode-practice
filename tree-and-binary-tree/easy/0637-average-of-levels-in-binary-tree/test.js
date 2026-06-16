// Test: 637. Average Of Levels In Binary Tree
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { averageOfLevels } = require("./solution");

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

console.log("\n637. Average Of Levels In Binary Tree\n");

test(averageOfLevels([3,9,20,15,7]), [3.0, 14.5, 11.0], 'Test 1');
test(averageOfLevels([3,9,20,null,null,15,7,null,null,25,30]), [3.0, 14.5, 11.0, 27.5], 'Test 2');
test(averageOfLevels([3,9,20,15,7,null,null,1,2,null,null,3,4]), [3.0, 14.5, 11.0, 1.5, 3.5], 'Test 3');
test(averageOfLevels([3,9,20,15,7,1,2,3,4,5,6,7,8,9,10]), [3.0, 14.5, 6.25, 6.5], 'Test 4');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [1.0, 2.5, 5.5, 11.5], 'Test 5');
test(averageOfLevels([3,9,20,null,null,15,7,null,null,null,null,null,8]), [3.0, 14.5, 11.0], 'Test 6');
test(averageOfLevels([3,1,5,0,2,4,6]), [3.0, 3.0, 3.0], 'Test 7');
test(averageOfLevels([3,9,20,15,7,1,2]), [3.0, 14.5, 6.25], 'Test 8');
test(averageOfLevels([3,9,20,15,7,null,null,1,2]), [3.0, 14.5, 11.0, 1.5], 'Test 9');
test(averageOfLevels([1,2]), [1.0, 2.0], 'Test 10');
test(averageOfLevels([1,null,2]), [1.0, 2.0], 'Test 11');
test(averageOfLevels([3,9,20,15,7,null,null,null,8]), [3.0, 14.5, 11.0, 8.0], 'Test 12');
test(averageOfLevels([3,9,20,null,null,15,7]), [3.0, 14.5, 11.0], 'Test 13');
test(averageOfLevels([1]), [1.0], 'Test 14');
test(averageOfLevels([10,-5,15,3,-7,null,18,-1,null,6,8,null,null,4,null]), [10.0, 5.0, 4.666666666666667, 4.333333333333333, 4.0], 'Test 15');
test(averageOfLevels([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,10,11,12,13,14,15]), [1.0, 2.5, 5.5, 8.5, 11.5, 14.5], 'Test 16');
test(averageOfLevels([100,50,200,null,75,125,300,null,87,null,150,null,350]), [100.0, 125.0, 166.66666666666666, 195.66666666666666], 'Test 17');
test(averageOfLevels([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0], 'Test 18');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), [1.0, 2.5, 5.5, 11.5, 23.5, 36.0], 'Test 19');
test(averageOfLevels([10,5,15,null,null,6,20]), [10.0, 10.0, 13.0], 'Test 20');
test(averageOfLevels([2147483647,2147483647,null,-2147483648,null,-2147483648,null,2147483647,null,2147483647,null,-2147483648]), [2147483647.0, 2147483647.0, -2147483648.0, -2147483648.0, 2147483647.0, 2147483647.0, -2147483648.0], 'Test 21');
test(averageOfLevels([10,5,15,3,7,null,18]), [10.0, 10.0, 9.333333333333334], 'Test 22');
test(averageOfLevels([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190]), [100.0, 100.0, 100.0, 97.5], 'Test 23');
test(averageOfLevels([5,3,8,1,4,7,9,0,2,6,null,null,null,null,null,10,null,null,11]), [5.0, 5.5, 5.25, 2.6666666666666665, 10.5], 'Test 24');
test(averageOfLevels([1,2,3,null,5,6,7,null,null,null,11,12,null,null,15]), [1.0, 2.5, 6.0, 11.5, 15.0], 'Test 25');
test(averageOfLevels([10,5,15,3,7,null,18,null,6,8,14,16,19,20,21]), [10.0, 10.0, 9.333333333333334, 12.6, 20.5], 'Test 26');
test(averageOfLevels([1,-2,-3,4,5,-6,-7,8,9,-10,-11,-12,-13,-14,-15]), [1.0, -2.5, -1.0, -7.25], 'Test 27');
test(averageOfLevels([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0], 'Test 28');
test(averageOfLevels([100,null,200,null,300,null,400,null,500,null,600,null,700,null,800,null,900]), [100.0, 200.0, 300.0, 400.0, 500.0, 600.0, 700.0, 800.0, 900.0], 'Test 29');
test(averageOfLevels([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0], 'Test 30');
test(averageOfLevels([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31]), [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0], 'Test 31');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,null,12,13,null,null,16,17]), [1.0, 2.5, 5.5, 10.4, 16.5], 'Test 32');
test(averageOfLevels([5,3,8,1,4,7,10,0,2,6,9]), [5.0, 5.5, 5.5, 4.25], 'Test 33');
test(averageOfLevels([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9]), [1.0, 2.5, 4.5, 6.5, 8.5], 'Test 34');
test(averageOfLevels([2147483647,null,2147483647]), [2147483647.0, 2147483647.0], 'Test 35');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,16]), [1.0, 2.5, 5.5, 11.5, 16.0], 'Test 36');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,16,17,18,null,null,21,22]), [1.0, 2.5, 5.5, 10.5, 18.8], 'Test 37');
test(averageOfLevels([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190]), [100.0, 100.0, 100.0, 100.0], 'Test 38');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [1.0, 2.5, 5.5, 11.5, 23.5], 'Test 39');
test(averageOfLevels([1,2,3,4,5,null,6,7,null,null,null,null,8]), [1.0, 2.5, 5.0, 7.5], 'Test 40');
test(averageOfLevels([1,2,3,4,5,null,7,8,null,10,11,12,null,14,null,16,null,18]), [1.0, 2.5, 5.333333333333333, 10.25, 16.0], 'Test 41');
test(averageOfLevels([5,3,8,1,4,7,9,null,null,2,null,null,null,null,10]), [5.0, 5.5, 5.25, 6.0], 'Test 42');
test(averageOfLevels([2147483647,-2147483648,2147483647,-2147483648,null,null,2147483647]), [2147483647.0, -0.5, -0.5], 'Test 43');
test(averageOfLevels([1,null,null,null,null]), [1.0], 'Test 44');
test(averageOfLevels([1,3,2,5,3,null,9,0,4,8,7,null,null,null,2,5]), [1.0, 2.5, 5.666666666666667, 4.75, 3.5], 'Test 45');
test(averageOfLevels([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30]), [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0], 'Test 46');
test(averageOfLevels([1,2,3,4,5,6,7,null,null,8,null,null,null,null,9]), [1.0, 2.5, 5.5, 8.5], 'Test 47');
test(averageOfLevels([30,25,35,20,27,32,37,18,23,26,29,31,34,36,39]), [30.0, 30.0, 29.0, 29.5], 'Test 48');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [1.0, 2.5, 5.5, 11.5, 23.0], 'Test 49');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [1.0, 2.5, 5.5, 11.5, 18.0], 'Test 50');
test(averageOfLevels([1,2,null,3,null,4,null,5]), [1.0, 2.0, 3.0, 4.0, 5.0], 'Test 51');
test(averageOfLevels([10,5,15,null,7,null,18]), [10.0, 10.0, 12.5], 'Test 52');
test(averageOfLevels([10,5,15,3,7,null,18,1,null,6]), [10.0, 10.0, 9.333333333333334, 3.5], 'Test 53');
test(averageOfLevels([5,3,8,1,4,7,9,0,2,6,null,10]), [5.0, 5.5, 5.25, 4.5], 'Test 54');
test(averageOfLevels([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), [1.0, 2.0, 3.0, 4.0, 5.0], 'Test 55');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [1.0, 2.5, 5.5, 11.5, 20.5], 'Test 56');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), [1.0, 2.5, 5.5, 11.5, 23.5, 41.0], 'Test 57');
test(averageOfLevels([-2147483648, null, 2147483647]), [-2147483648.0, 2147483647.0], 'Test 58');
test(averageOfLevels([10,5,15,3,7,13,18,1,4,6,8,12,14,17,19]), [10.0, 10.0, 10.25, 10.125], 'Test 59');
test(averageOfLevels([5,3,8,1,4,7,10,null,null,2,6,9,11]), [5.0, 5.5, 5.5, 7.0], 'Test 60');
test(averageOfLevels([3,9,20,15,7,null,21,14,null,13,16,null,null,null,null,null,22]), [3.0, 14.5, 14.333333333333334, 14.333333333333334, 22.0], 'Test 61');
test(averageOfLevels([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190,5,15,30,45,55,65,85,95,105,135,145,155,170,180,185,195,200,205,210]), [100.0, 100.0, 100.0, 100.0, 104.0625, 205.0], 'Test 62');
test(averageOfLevels([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [1.0, 2.5, 4.5, 6.5, 8.5, 10.5, 12.5, 14.5], 'Test 63');
test(averageOfLevels([3,9,20,15,7,null,21,14,null,13,16,null,null,null,null,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31,null,32]), [3.0, 14.5, 14.333333333333334, 14.333333333333334, 22.5, 24.5, 26.5, 28.5, 30.5, 32.0], 'Test 64');
test(averageOfLevels([1,null,2,null,3,null,4,null,5,null,6,null,7]), [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0], 'Test 65');
test(averageOfLevels([5,3,8,1,4,7,9,0,2,null,null,null,null,null,10]), [5.0, 5.5, 5.25, 4.0], 'Test 66');
test(averageOfLevels([5,1,4,null,null,3,6]), [5.0, 2.5, 4.5], 'Test 67');
test(averageOfLevels([5,10,null,15,20,25,30,35,40,null,45,50,null,null,55,60,65,null,null,null,null,70,75]), [5.0, 10.0, 17.5, 32.5, 55.0, 72.5], 'Test 68');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,null,null,null,null,null,null,null,10]), [1.0, 2.5, 5.5, 8.5, 10.0], 'Test 69');
test(averageOfLevels([5,3,8,1,4,7,10,0,2,6,9,11,12,13,14]), [5.0, 5.5, 5.5, 8.375], 'Test 70');
test(averageOfLevels([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), [1.0, 4.0, 10.0, 22.0, 45.0], 'Test 71');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null]), [1.0, 2.5, 5.5, 11.5, 23.0], 'Test 72');
test(averageOfLevels([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0], 'Test 73');
test(averageOfLevels([10,20,30,40,50,60,70,80,90,100,null,null,110,null,120,130,null,140,null,null,null,null,150]), [10.0, 25.0, 55.0, 100.0, 140.0], 'Test 74');
test(averageOfLevels([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [1.0, 2.5, 5.5, 8.5, 11.5, 17.5, 26.5], 'Test 75');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,16,null,null,17,null,18,null,19,null,null,null,null,20]), [1.0, 2.5, 5.5, 11.5, 17.5, 20.0], 'Test 76');
test(averageOfLevels([1,2,3,4,null,null,5,6,null,null,7,null,null,8,null,9]), [1.0, 2.5, 4.5, 6.5, 8.0, 9.0], 'Test 77');
test(averageOfLevels([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [1.0, 2.5, 4.5, 6.5, 8.5, 10.0], 'Test 78');
test(averageOfLevels([1000000000,500000000,1500000000,250000000,750000000,1250000000,1750000000,125000000,375000000,625000000,875000000,1125000000,1375000000,1625000000,1875000000]), [1000000000.0, 1000000000.0, 1000000000.0, 1000000000.0], 'Test 79');
test(averageOfLevels([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180,5,15,20,35,65,70,85,105,135,145,155,175,185,195]), [100.0, 100.0, 100.0, 96.25, 99.28571428571429], 'Test 80');
test(averageOfLevels([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16]), [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0], 'Test 81');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), [1.0, 2.5, 5.5, 11.5], 'Test 82');
test(averageOfLevels([1000,500,null,250,null,125,null,62.5,null,31.25,null,15.625]), [1000.0, 500.0, 250.0, 125.0, 62.5, 31.25, 15.625], 'Test 83');
test(averageOfLevels([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25]), [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0], 'Test 84');
test(averageOfLevels([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0], 'Test 85');
test(averageOfLevels([1,2,3,4,5,6,7,null,null,null,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [1.0, 2.5, 5.5, 10.0, 17.5, 24.0], 'Test 86');
test(averageOfLevels([1,3,2,5,3,null,9,0,8,null,6,null,null,null,4,null,null,7,null,null,null,10,null,null,null,null,null,11,null,null,null,null,null,null,12]), [1.0, 2.5, 5.666666666666667, 4.666666666666667, 5.5, 10.0], 'Test 87');
test(averageOfLevels([7,10,null,4,6,null,null,3,null,null,11,null,null,null,8]), [7.0, 10.0, 5.0, 3.0, 11.0], 'Test 88');
test(averageOfLevels([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), [100.0, 100.0, 100.0, 96.25], 'Test 89');
test(averageOfLevels([1,null,3,null,5,null,7,null,9,null,11,null,13,null,15]), [1.0, 3.0, 5.0, 7.0, 9.0, 11.0, 13.0, 15.0], 'Test 90');
test(averageOfLevels([1,2,3,4,5,6,7,8,9,10,11,12,13,null,15,null,17,null,19]), [1.0, 2.5, 5.5, 11.142857142857142, 18.0], 'Test 91');
test(averageOfLevels([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), [0.0, 0.0, 0.0, 0.0], 'Test 92');
test(averageOfLevels([5,4,8,11,null,13,4,7,2,null,null,5,1]), [5.0, 6.0, 9.333333333333334, 3.75], 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
