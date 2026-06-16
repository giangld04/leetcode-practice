// Test: 2874. Maximum Value Of An Ordered Triplet Ii
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { maximumTripletValue } = require("./solution");

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

console.log("\n2874. Maximum Value Of An Ordered Triplet Ii\n");

test(maximumTripletValue([12,6,1,2,7]), 77, 'Test 1');
test(maximumTripletValue([100,90,80,70,60,50,40,30,20,10]), 2000, 'Test 2');
test(maximumTripletValue([10,9,8,7,6,5,4,3,2,1]), 20, 'Test 3');
test(maximumTripletValue([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 4');
test(maximumTripletValue([3,3,3,3,3,3]), 0, 'Test 5');
test(maximumTripletValue([1000000,500000,250000,125000,62500,31250]), 125000000000, 'Test 6');
test(maximumTripletValue([3,1,4,1,5,9,2,6,5,3,5]), 42, 'Test 7');
test(maximumTripletValue([10,9,8,7,6,5]), 20, 'Test 8');
test(maximumTripletValue([5,6,7,8,9,10]), 0, 'Test 9');
test(maximumTripletValue([10,20,30,40,50]), 0, 'Test 10');
test(maximumTripletValue([5,5,5,5,5]), 0, 'Test 11');
test(maximumTripletValue([5,6,7,8,9]), 0, 'Test 12');
test(maximumTripletValue([1,3,2,5,4,7,6]), 7, 'Test 13');
test(maximumTripletValue([1,10,3,4,19]), 133, 'Test 14');
test(maximumTripletValue([1,3,5,7,9,11,13]), 0, 'Test 15');
test(maximumTripletValue([100,90,80,70,60]), 1800, 'Test 16');
test(maximumTripletValue([50,40,30,20,10]), 400, 'Test 17');
test(maximumTripletValue([3,3,3,3,3,3,3]), 0, 'Test 18');
test(maximumTripletValue([1,3,2,5,4,7,6,9,8,11,10]), 11, 'Test 19');
test(maximumTripletValue([1,2,3]), 0, 'Test 20');
test(maximumTripletValue([1,1,1,1,1,1]), 0, 'Test 21');
test(maximumTripletValue([1000000,1,1000000,1,1000000]), 999999000000, 'Test 22');
test(maximumTripletValue([999999, 1, 999998, 2, 999997, 3, 999996, 4, 999995, 5]), 999996000004, 'Test 23');
test(maximumTripletValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000]), 0, 'Test 24');
test(maximumTripletValue([2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15]), 16, 'Test 25');
test(maximumTripletValue([1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000]), 999999000000, 'Test 26');
test(maximumTripletValue([100, 90, 101, 91, 102, 92, 103, 93, 104, 94]), 1040, 'Test 27');
test(maximumTripletValue([999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990, 1]), 7999920, 'Test 28');
test(maximumTripletValue([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 90, 'Test 29');
test(maximumTripletValue([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 2000, 'Test 30');
test(maximumTripletValue([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9]), 81, 'Test 31');
test(maximumTripletValue([9,1,8,1,7,1,6,1,5,1,4,1,3,1,2,1,1,1,1,1]), 64, 'Test 32');
test(maximumTripletValue([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0, 5, 8, 2, 0, 9, 7, 4, 9, 4, 4, 5, 9, 2, 3, 0, 7, 8, 1, 6, 4, 0, 6, 2, 8, 6, 2, 0, 8, 9, 9, 8, 6]), 81, 'Test 33');
test(maximumTripletValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 34');
test(maximumTripletValue([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12, 13, 14, 15]), 135, 'Test 35');
test(maximumTripletValue([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5, 999996]), 999997000002, 'Test 36');
test(maximumTripletValue([100, 50, 25, 12, 6, 3, 1, 5, 10, 20, 40, 80, 160, 320, 640]), 63360, 'Test 37');
test(maximumTripletValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 100]), 0, 'Test 38');
test(maximumTripletValue([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 210, 'Test 39');
test(maximumTripletValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000]), 0, 'Test 40');
test(maximumTripletValue([10, 20, 30, 15, 25, 35, 5, 40, 45, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 3000, 'Test 41');
test(maximumTripletValue([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2]), 6, 'Test 42');
test(maximumTripletValue([1, 2, 3, 100, 4, 5, 6, 99, 7, 8, 98, 9, 10, 97, 11]), 9504, 'Test 43');
test(maximumTripletValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 999999, 'Test 44');
test(maximumTripletValue([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 20, 21, 22, 23, 24, 25]), 25, 'Test 45');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 20, 'Test 46');
test(maximumTripletValue([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 2000, 'Test 47');
test(maximumTripletValue([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 1]), 7999928, 'Test 48');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1000000]), 9000000, 'Test 49');
test(maximumTripletValue([500000, 1, 499999, 2, 499998, 3, 499997, 4, 499996, 5, 499995, 6, 499994, 7, 499993, 8, 499992, 9, 499991, 10]), 249999000001, 'Test 50');
test(maximumTripletValue([3, 2, 1, 6, 5, 4, 9, 8, 7, 12, 11, 10, 15, 14, 13]), 30, 'Test 51');
test(maximumTripletValue([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10]), 0, 'Test 52');
test(maximumTripletValue([10, 20, 30, 25, 40, 50, 15, 60, 70, 80]), 2800, 'Test 53');
test(maximumTripletValue([5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 11, 12, 13, 14, 15]), 135, 'Test 54');
test(maximumTripletValue([10, 1, 20, 2, 30, 3, 40, 4, 50, 5]), 1800, 'Test 55');
test(maximumTripletValue([10,1,20,2,30,3,40,4,50,5,60,6,70,7,80,8,90,9,100,10]), 8100, 'Test 56');
test(maximumTripletValue([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10]), 0, 'Test 57');
test(maximumTripletValue([10, 20, 30, 40, 50, 45, 40, 35, 30, 25, 20, 15, 10]), 500, 'Test 58');
test(maximumTripletValue([9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), 80, 'Test 59');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 0, 'Test 60');
test(maximumTripletValue([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9999990, 'Test 61');
test(maximumTripletValue([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991]), 7999928, 'Test 62');
test(maximumTripletValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 990, 'Test 63');
test(maximumTripletValue([1, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10]), 10, 'Test 64');
test(maximumTripletValue([10, 20, 30, 25, 40, 35, 50, 45, 60, 55]), 300, 'Test 65');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 0, 'Test 66');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1000000]), 0, 'Test 67');
test(maximumTripletValue([1, 100, 2, 101, 3, 102, 4, 103, 5, 104, 6, 105, 7, 106, 8, 107, 9, 108, 10, 109]), 10682, 'Test 68');
test(maximumTripletValue([5, 1, 4, 2, 3, 6, 7, 8, 9, 10]), 40, 'Test 69');
test(maximumTripletValue([9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 800, 'Test 70');
test(maximumTripletValue([5,3,6,7,2,8,1,4,9,10,11,12]), 84, 'Test 71');
test(maximumTripletValue([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 20, 'Test 72');
test(maximumTripletValue([1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1, 1]), 999999000000, 'Test 73');
test(maximumTripletValue([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 0, 'Test 74');
test(maximumTripletValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), 0, 'Test 75');
test(maximumTripletValue([2, 1, 5, 4, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 40, 'Test 76');
test(maximumTripletValue([1, 10, 1, 20, 1, 30, 1, 40, 1, 50, 1, 60, 1, 70, 1, 80, 1, 90, 1, 100]), 8900, 'Test 77');
test(maximumTripletValue([1, 1000000, 2, 999999, 3, 999998, 4, 999997]), 999997000002, 'Test 78');
test(maximumTripletValue([5, 1, 9, 2, 8, 3, 7, 4, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 140, 'Test 79');
test(maximumTripletValue([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93, 9, 92, 10, 91, 1000000]), 98000000, 'Test 80');
test(maximumTripletValue([1000000, 1, 999999, 2, 999998, 3, 999997]), 999998000001, 'Test 81');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 90, 'Test 82');
test(maximumTripletValue([5, 3, 1, 6, 4, 2, 7, 9, 8, 10, 11, 12, 13, 14, 15]), 60, 'Test 83');
test(maximumTripletValue([9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 160, 'Test 84');
test(maximumTripletValue([1000000, 500000, 100000, 50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1]), 50000000000, 'Test 85');
test(maximumTripletValue([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 42, 'Test 86');
test(maximumTripletValue([5, 15, 25, 10, 35, 20, 45, 30, 55, 40]), 825, 'Test 87');
test(maximumTripletValue([10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20]), 600, 'Test 88');
test(maximumTripletValue([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1000000]), 0, 'Test 89');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 0, 'Test 90');
test(maximumTripletValue([10, 20, 30, 25, 35, 40, 15, 50, 60, 45, 70]), 1750, 'Test 91');
test(maximumTripletValue([1000000, 1, 999999, 2, 999998, 3, 999997, 4, 999996, 5]), 999998000001, 'Test 92');
test(maximumTripletValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 93');
test(maximumTripletValue([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11]), 0, 'Test 94');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1000000]), 0, 'Test 95');
test(maximumTripletValue([5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 11, 12, 13, 14, 15]), 60, 'Test 96');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 90, 'Test 97');
test(maximumTripletValue([1, 20, 2, 30, 3, 40, 4, 50, 5, 60, 6, 70, 7, 80, 8, 90, 9, 100, 10, 110]), 9900, 'Test 98');
test(maximumTripletValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000]), 0, 'Test 99');
test(maximumTripletValue([1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 90, 'Test 100');
test(maximumTripletValue([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,11]), 99, 'Test 101');
test(maximumTripletValue([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0, 5, 8, 2, 0, 9, 7, 4, 9, 4, 4, 5, 9, 2, 3, 0, 7, 8, 1, 6, 4, 0, 6, 2, 8, 6, 2, 0, 8, 9, 9, 8, 6, 2, 8, 0, 3, 4, 8, 2, 5, 3, 4, 2, 1, 1, 7, 0, 6, 7]), 81, 'Test 102');
test(maximumTripletValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 5, 4, 3, 2, 1]), 380, 'Test 103');
test(maximumTripletValue([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10]), 0, 'Test 104');
test(maximumTripletValue([1, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5]), 6, 'Test 105');
test(maximumTripletValue([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5]), 2000, 'Test 106');
test(maximumTripletValue([20,18,16,14,12,10,8,6,4,2,1,3,5,7,9,11,13,15,17,19]), 361, 'Test 107');
test(maximumTripletValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 0, 'Test 108');
test(maximumTripletValue([500000, 400000, 300000, 200000, 100000, 99999, 89999, 79999, 69999, 59999, 49999, 39999, 29999, 19999, 9999]), 40000000000, 'Test 109');
test(maximumTripletValue([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000000]), 999000000, 'Test 110');
test(maximumTripletValue([1000000,500000,250000,125000,62500,31250,15625,7812,3906,1953,976,488,244,122,61,30,15,7,3,1]), 125000000000, 'Test 111');
test(maximumTripletValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 112');
test(maximumTripletValue([100000, 1, 100001, 2, 100002, 3, 100003, 4, 100004, 5, 100005, 6, 100006, 7, 100007, 8, 100008, 9, 100009, 10]), 10000799991, 'Test 113');
test(maximumTripletValue([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 2000, 'Test 114');
test(maximumTripletValue([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 115');
test(maximumTripletValue([1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10]), 80, 'Test 116');
test(maximumTripletValue([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 20]), 20, 'Test 117');
test(maximumTripletValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 0, 'Test 118');
test(maximumTripletValue([1000000, 900000, 1000000, 800000, 700000, 900000, 600000, 500000, 400000, 300000, 200000, 100000]), 270000000000, 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

