// Test: 719. Find K Th Smallest Pair Distance
// 76 test cases from LeetCodeDataset
// Run: node test.js

const { smallestDistancePair } = require("./solution");

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

console.log("\n719. Find K Th Smallest Pair Distance\n");

test(smallestDistancePair([1,2,3,4,5], 10), 4, 'Test 1');
test(smallestDistancePair([9,10,7,10,6,1,5,4,9,8], 18), 2, 'Test 2');
test(smallestDistancePair([62,24,6,4,40], 2), 16, 'Test 3');
test(smallestDistancePair([5,4,3,2,1], 1), 1, 'Test 4');
test(smallestDistancePair([1,3,1], 1), 0, 'Test 5');
test(smallestDistancePair([5,3,8,4,2], 7), 3, 'Test 6');
test(smallestDistancePair([10,20,30,40,50], 5), 20, 'Test 7');
test(smallestDistancePair([4,2,1,3], 5), 2, 'Test 8');
test(smallestDistancePair([0,0,0,0,0,0,0,0,0,0], 1), 0, 'Test 9');
test(smallestDistancePair([1,6,1], 3), 5, 'Test 10');
test(smallestDistancePair([1,2,3,4,5,6,7,8,9,10], 45), 9, 'Test 11');
test(smallestDistancePair([1,1,1], 2), 0, 'Test 12');
test(smallestDistancePair([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 65), 0, 'Test 13');
test(smallestDistancePair([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 100), 24, 'Test 14');
test(smallestDistancePair([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 190), 0, 'Test 15');
test(smallestDistancePair([1, 3, 3, 1, 2, 2, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 171), 7, 'Test 16');
test(smallestDistancePair([1, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400], 100), 1199, 'Test 17');
test(smallestDistancePair([0,1,3,3,5,5,7,7,9,9,11,11,13,13,15,15,17,17,19,19], 190), 19, 'Test 18');
test(smallestDistancePair([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 90), 3, 'Test 19');
test(smallestDistancePair([1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 190), 74, 'Test 20');
test(smallestDistancePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 180), 15, 'Test 21');
test(smallestDistancePair([1, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50), 799, 'Test 22');
test(smallestDistancePair([3,8,15,17,9,4,2], 10), 6, 'Test 23');
test(smallestDistancePair([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 105), 140, 'Test 24');
test(smallestDistancePair([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5], 250), 2, 'Test 25');
test(smallestDistancePair([100000, 100000, 0, 100000, 50000, 50000, 50000, 50000], 28), 100000, 'Test 26');
test(smallestDistancePair([1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6, 7, 8, 8, 9], 50), 2, 'Test 27');
test(smallestDistancePair([5,5,5,5,5,5,5,5,5,5], 25), 0, 'Test 28');
test(smallestDistancePair([5,1,4,1,2,6,7,8,3,9], 20), 3, 'Test 29');
test(smallestDistancePair([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 45), 900, 'Test 30');
test(smallestDistancePair([1, 3, 1, 5, 7, 9], 10), 4, 'Test 31');
test(smallestDistancePair([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 45), 0, 'Test 32');
test(smallestDistancePair([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 190), 190, 'Test 33');
test(smallestDistancePair([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 190), 38, 'Test 34');
test(smallestDistancePair([50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50], 55), 100, 'Test 35');
test(smallestDistancePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 435), 29, 'Test 36');
test(smallestDistancePair([100,150,200,250,300,350,400,450,500], 30), 250, 'Test 37');
test(smallestDistancePair([8,1,2,2,3], 3), 1, 'Test 38');
test(smallestDistancePair([1000000,999999,999998,999997,999996,999995,999994,999993,999992,999991], 45), 9, 'Test 39');
test(smallestDistancePair([1, 10, 100, 1000, 10000, 100000, 1000000, 100000, 10000, 1000, 100, 10, 1], 66), 99999, 'Test 40');
test(smallestDistancePair([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 70), 2, 'Test 41');
test(smallestDistancePair([1,3,5,7,9,11,13,15,17,19,21], 100), 20, 'Test 42');
test(smallestDistancePair([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 1225), 49, 'Test 43');
test(smallestDistancePair([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 100), 3, 'Test 44');
test(smallestDistancePair([5,15,25,35,45,55,65,75,85,95], 25), 40, 'Test 45');
test(smallestDistancePair([500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000,500000], 100), 0, 'Test 46');
test(smallestDistancePair([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120], 105), 119, 'Test 47');
test(smallestDistancePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 292), 21, 'Test 48');
test(smallestDistancePair([1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 210), 19, 'Test 49');
test(smallestDistancePair([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5, 999996], 15), 3, 'Test 50');
test(smallestDistancePair([1, 10, 100, 1000, 10000, 100000, 1000000, 1, 10, 100, 1000, 10000, 100000, 1000000, 1, 10, 100, 1000, 10000, 100000], 380), 999999, 'Test 51');
test(smallestDistancePair([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10], 270), 4, 'Test 52');
test(smallestDistancePair([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 190), 15, 'Test 53');
test(smallestDistancePair([100000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100), 99999, 'Test 54');
test(smallestDistancePair([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1, 2, 3, 4, 5], 100), 999, 'Test 55');
test(smallestDistancePair([500000, 500001, 500002, 500003, 500004, 500005, 500006, 500007, 500008, 500009], 45), 9, 'Test 56');
test(smallestDistancePair([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 189), 180, 'Test 57');
test(smallestDistancePair([1,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119], 210), 118, 'Test 58');
test(smallestDistancePair([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 100), 12, 'Test 59');
test(smallestDistancePair([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 300), 48, 'Test 60');
test(smallestDistancePair([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6], 150), 2, 'Test 61');
test(smallestDistancePair([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 190), 0, 'Test 62');
test(smallestDistancePair([3,8,15,17,9,12,20,7,5,10], 15), 4, 'Test 63');
test(smallestDistancePair([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 190), 19, 'Test 64');
test(smallestDistancePair([1,1000000,2,999999,3,999998,4,999997,5,999996], 25), 999993, 'Test 65');
test(smallestDistancePair([999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990, 999989], 55), 10, 'Test 66');
test(smallestDistancePair([100, 100, 200, 200, 300, 300, 400, 400, 500, 500], 45), 400, 'Test 67');
test(smallestDistancePair([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], 30), 4, 'Test 68');
test(smallestDistancePair([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 100), 45, 'Test 69');
test(smallestDistancePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 190), 19, 'Test 70');
test(smallestDistancePair([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 190), 9, 'Test 71');
test(smallestDistancePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 190), 9, 'Test 72');
test(smallestDistancePair([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 105), 28, 'Test 73');
test(smallestDistancePair([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 171), 0, 'Test 74');
test(smallestDistancePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100), 12, 'Test 75');
test(smallestDistancePair([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195], 44), 99610, 'Test 76');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

