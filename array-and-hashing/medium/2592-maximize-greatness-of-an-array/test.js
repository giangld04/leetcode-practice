// Test: 2592. Maximize Greatness Of An Array
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { maximizeGreatness } = require("./solution");

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

console.log("\n2592. Maximize Greatness Of An Array\n");

test(maximizeGreatness([1]), 0, 'Test 1');
test(maximizeGreatness([1,2,2,3,3,3,4,4,4,4]), 6, 'Test 2');
test(maximizeGreatness([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 3');
test(maximizeGreatness([1,2,2,3,4,4,5]), 5, 'Test 4');
test(maximizeGreatness([1,2,3,4]), 3, 'Test 5');
test(maximizeGreatness([1,0,2,0,3,0,4,0,5,0]), 5, 'Test 6');
test(maximizeGreatness([10000,1000,100,10,1]), 4, 'Test 7');
test(maximizeGreatness([1,1,2,2,3,3,4,4,5,5]), 8, 'Test 8');
test(maximizeGreatness([0,1,2,3,4,5,6,7,8,9]), 9, 'Test 9');
test(maximizeGreatness([9,8,7,6,5,4,3,2,1,0]), 9, 'Test 10');
test(maximizeGreatness([5,5,5,5,5]), 0, 'Test 11');
test(maximizeGreatness([0,0,0,0,0]), 0, 'Test 12');
test(maximizeGreatness([10,9,8,7,6,5,4,3,2,1]), 9, 'Test 13');
test(maximizeGreatness([1000000000,999999999,999999998,999999997,999999996]), 4, 'Test 14');
test(maximizeGreatness([1,3,5,2,1,3,1]), 4, 'Test 15');
test(maximizeGreatness([1,10,100,1000,10000]), 4, 'Test 16');
test(maximizeGreatness([1,10,2,9,3,8,4,7,5,6,1,10,2,9,3,8,4,7,5,6]), 18, 'Test 17');
test(maximizeGreatness([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 15, 'Test 18');
test(maximizeGreatness([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 27, 'Test 19');
test(maximizeGreatness([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81]), 19, 'Test 20');
test(maximizeGreatness([1,2,2,3,3,4,4,4,5,5,5,5,5,6,6,6,7,7,8,8,9,9]), 17, 'Test 21');
test(maximizeGreatness([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 28, 'Test 22');
test(maximizeGreatness([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 18, 'Test 23');
test(maximizeGreatness([1,10,2,9,3,8,4,7,5,6,11,20,12,19,13,18,14,17,15,16]), 19, 'Test 24');
test(maximizeGreatness([1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000]), 0, 'Test 25');
test(maximizeGreatness([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2]), 10, 'Test 26');
test(maximizeGreatness([3,2,1,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 18, 'Test 27');
test(maximizeGreatness([1,1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6]), 23, 'Test 28');
test(maximizeGreatness([10,10,10,9,9,8,7,6,5,4,3,2,1]), 10, 'Test 29');
test(maximizeGreatness([1000000000,999999999,999999998,999999997,999999996,999999995,999999994,999999993,999999992,999999991]), 9, 'Test 30');
test(maximizeGreatness([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1]), 24, 'Test 31');
test(maximizeGreatness([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 18, 'Test 32');
test(maximizeGreatness([5,6,7,8,9,1,2,3,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 28, 'Test 33');
test(maximizeGreatness([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250]), 24, 'Test 34');
test(maximizeGreatness([100,200,300,400,500,600,700,800,900,1000,100,200,300,400,500,600,700,800,900,1000]), 18, 'Test 35');
test(maximizeGreatness([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2]), 9, 'Test 36');
test(maximizeGreatness([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 37');
test(maximizeGreatness([100,200,300,400,500,600,700,800,900,1000,100,200,300,400,500]), 13, 'Test 38');
test(maximizeGreatness([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 39');
test(maximizeGreatness([1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 40');
test(maximizeGreatness([100,101,102,99,98,97,96,95,94,93,92,91,90,89,88]), 14, 'Test 41');
test(maximizeGreatness([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]), 19, 'Test 42');
test(maximizeGreatness([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 43');
test(maximizeGreatness([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 0, 'Test 44');
test(maximizeGreatness([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), 14, 'Test 45');
test(maximizeGreatness([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 0, 'Test 46');
test(maximizeGreatness([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 0, 'Test 47');
test(maximizeGreatness([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 0, 'Test 48');
test(maximizeGreatness([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 18, 'Test 49');
test(maximizeGreatness([1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4]), 20, 'Test 50');
test(maximizeGreatness([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 18, 'Test 51');
test(maximizeGreatness([10,20,30,40,50,60,70,80,90,100,1,2,3,4,5,6,7,8,9,10]), 18, 'Test 52');
test(maximizeGreatness([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3]), 12, 'Test 53');
test(maximizeGreatness([5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8]), 15, 'Test 54');
test(maximizeGreatness([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1]), 12, 'Test 55');
test(maximizeGreatness([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300]), 29, 'Test 56');
test(maximizeGreatness([100,90,80,70,60,50,40,30,20,10,100,90,80,70,60,50,40,30,20,10]), 18, 'Test 57');
test(maximizeGreatness([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 58');
test(maximizeGreatness([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 19, 'Test 59');
test(maximizeGreatness([1,1,1,1,2,2,2,2,3,3,3,3]), 8, 'Test 60');
test(maximizeGreatness([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100]), 18, 'Test 61');
test(maximizeGreatness([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), 19, 'Test 62');
test(maximizeGreatness([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,1]), 28, 'Test 63');
test(maximizeGreatness([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 29, 'Test 64');
test(maximizeGreatness([100,90,80,70,60,50,40,30,20,10,10,20,30,40,50,60,70,80,90,100]), 18, 'Test 65');
test(maximizeGreatness([1,3,2,4,5,6,7,8,9,10]), 9, 'Test 66');
test(maximizeGreatness([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 18, 'Test 67');
test(maximizeGreatness([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), 29, 'Test 68');
test(maximizeGreatness([1,2,3,2,1,4,5,4,3,2,1,6,7,8,9,10,11,12,13,14,15]), 18, 'Test 69');
test(maximizeGreatness([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,10,20,30,40,50]), 23, 'Test 70');
test(maximizeGreatness([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), 12, 'Test 71');
test(maximizeGreatness([1,1,1,1,1,1,1,1,1,2]), 1, 'Test 72');
test(maximizeGreatness([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 45, 'Test 73');
test(maximizeGreatness([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 14, 'Test 74');
test(maximizeGreatness([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20]), 38, 'Test 75');
test(maximizeGreatness([1,1,2,3,3,4,5,6,6,7,8,9,10,10,10,11,12,13,13,13]), 17, 'Test 76');
test(maximizeGreatness([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 27, 'Test 77');
test(maximizeGreatness([5,5,5,5,5,5,5,5,5,5]), 0, 'Test 78');
test(maximizeGreatness([1,3,2,4,5,6,7,8,9,10,1,3,2,4,5,6,7,8,9,10]), 18, 'Test 79');
test(maximizeGreatness([1,1,1,1,1,1,1,1,1,1,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 80');
test(maximizeGreatness([1,1,1,1,2,2,2,2,2,2,3,3,3,3,4,4,4,5,5,5,6,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 30, 'Test 81');
test(maximizeGreatness([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 20, 'Test 82');
test(maximizeGreatness([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 83');
test(maximizeGreatness([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 12, 'Test 84');
test(maximizeGreatness([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 14, 'Test 85');
test(maximizeGreatness([5,4,3,2,1,0,5,4,3,2,1,0,5,4,3,2,1,0,5,4]), 16, 'Test 86');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

