// Test: 2374. Node With Highest Edge Score
// 37 test cases from LeetCodeDataset
// Run: node test.js

const { edgeScore } = require("./solution");

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

console.log("\n2374. Node With Highest Edge Score\n");

test(edgeScore([2,0,0,2]), 0, 'Test 1');
test(edgeScore([1,2,3,4,5,6,7,8,9,0]), 0, 'Test 2');
test(edgeScore([3,3,3,3,3,3,3,3]), 3, 'Test 3');
test(edgeScore([3,3,3,3]), 3, 'Test 4');
test(edgeScore([5,1,4,3,2,0]), 0, 'Test 5');
test(edgeScore([1,0,0,0,0,7,7,5]), 7, 'Test 6');
test(edgeScore([5,1,5,1,5,1,5,1]), 1, 'Test 7');
test(edgeScore([1,2,3,4,5,6,7,0]), 0, 'Test 8');
test(edgeScore([5,3,0,5,1,6,2]), 2, 'Test 9');
test(edgeScore([3,3,3,3,3]), 3, 'Test 10');
test(edgeScore([3,1,2,0]), 0, 'Test 11');
test(edgeScore([4,4,4,4,4]), 4, 'Test 12');
test(edgeScore([5,5,5,5,5,5,5,5,5,5]), 5, 'Test 13');
test(edgeScore([5,4,3,2,1,0,9,8,7,6]), 6, 'Test 14');
test(edgeScore([99999] * 99999 + [0]), Error: Solution.edgeScore[] missing 1 required positional argument: 'edges', 'Test 15');
test(edgeScore([i % 10000 for i in range[100000]]), Error: Solution.edgeScore[] missing 1 required positional argument: 'edges', 'Test 16');
test(edgeScore([i for i in range[1, 100000]] + [0]), Error: Solution.edgeScore[] missing 1 required positional argument: 'edges', 'Test 17');
test(edgeScore([10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 18');
test(edgeScore([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991,9990,9989,9988,9987,9986,9985,9984,9983,9982,9981,9980,9979,9978,9977,9976,9975,9974,9973,9972,9971,9970,9969,9968,9967,9966,9965,9964,9963,9962,9961,9960,9959,9958,9957,9956,9955,9954,9953,9952,9951,9950,9949,9948,9947,9946,9945,9944,9943,9942,9941,9940,9939,9938,9937,9936,9935,9934,9933,9932,9931,9930,9929,9928,9927,9926,9925,9924,9923,9922,9921,9920,9919,9918,9917,9916,9915,9914,9913,9912,9911,9910,9909,9908,9907,9906,9905,9904,9903,9902,9901,9900]), Error: list index out of range, 'Test 19');
test(edgeScore([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 20');
test(edgeScore([99999] * 50000 + [i for i in range[50000]]), Error: Solution.edgeScore[] missing 1 required positional argument: 'edges', 'Test 21');
test(edgeScore([1, 2, 0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0]), 0, 'Test 22');
test(edgeScore([100000 - i for i in range[100000]]), Error: Solution.edgeScore[] missing 1 required positional argument: 'edges', 'Test 23');
test(edgeScore([1,2,0,0,3,4,5,6,7,8,9,0]), 0, 'Test 24');
test(edgeScore([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 3, 'Test 25');
test(edgeScore([8,9,10,11,12,13,14,15,0,1,2,3,4,5,6,7]), 7, 'Test 26');
test(edgeScore([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 0, 'Test 27');
test(edgeScore([50000] * 50000), Error: Solution.edgeScore[] missing 1 required positional argument: 'edges', 'Test 28');
test(edgeScore([99998,99999,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]), Error: list index out of range, 'Test 29');
test(edgeScore([50000] * 100000), Error: Solution.edgeScore[] missing 1 required positional argument: 'edges', 'Test 30');
test(edgeScore([7,7,7,7,7,7,7,7]), 7, 'Test 31');
test(edgeScore([1,2,3,4,5,6,7,0,1,2]), 2, 'Test 32');
test(edgeScore([0] * 50000 + [i for i in range[50000, 100000]]), Error: Solution.edgeScore[] missing 1 required positional argument: 'edges', 'Test 33');
test(edgeScore([2,3,4,5,6,7,8,9,10,0,2,3,4,5,6,7,8,9,10,0,2,3,4,5,6,7,8,9,10,0,2,3,4,5,6,7,8,9,10,0,2,3,4,5,6,7,8,9,10,0,2,3,4,5,6,7,8,9,10,0]), 0, 'Test 34');
test(edgeScore([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 35');
test(edgeScore([50000,40000,30000,20000,10000,0,10000,20000,30000,40000,50000,0,10000,20000,30000,40000,50000,0,10000,20000,30000,40000,50000,0,10000,20000,30000,40000,50000,0,10000,20000,30000,40000,50000,0,10000,20000,30000,40000,50000,0,10000,20000,30000,40000,50000,0,10000,20000,30000,40000,50000]), Error: list index out of range, 'Test 36');
test(edgeScore([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8]), 8, 'Test 37');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

