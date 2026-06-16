// Test: 1287. Element Appearing More Than 25 In Sorted Array
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { findSpecialInteger } = require("./solution");

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

console.log("\n1287. Element Appearing More Than 25 In Sorted Array\n");

test(findSpecialInteger([1,2,3,4,4,4,4,5,6,7,8,9,10]), 4, 'Test 1');
test(findSpecialInteger([0,0,0,1,2,3,4,5,6,7,8,9,10]), Error: list index out of range, 'Test 2');
test(findSpecialInteger([1,1]), 1, 'Test 3');
test(findSpecialInteger([1,2,2,2,3,4,5,6]), 2, 'Test 4');
test(findSpecialInteger([1,1,2,3,4,4,4,4,5,6,7,8,9,10]), 4, 'Test 5');
test(findSpecialInteger([0,0,0,0,1,2,3,4,5,6,7,8,9]), 0, 'Test 6');
test(findSpecialInteger([1,2,3,4,5,6,7,8,8,8,8,9,10]), 8, 'Test 7');
test(findSpecialInteger([1,2,3,4,4,4,4,4,4,5,6,7,8,9,10]), 4, 'Test 8');
test(findSpecialInteger([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 9');
test(findSpecialInteger([1,2,3,4,5,6,7,8,8,8,8,9,10,11,12]), 8, 'Test 10');
test(findSpecialInteger([1,1,1,1,2,2,3,4,5,6,7,8,9,10]), 1, 'Test 11');
test(findSpecialInteger([1,2,3,3,3,3,4,5,6,7]), 3, 'Test 12');
test(findSpecialInteger([0,0,0,0,1,2,3,4,5,6]), 0, 'Test 13');
test(findSpecialInteger([7,7,7,7,8,9,10]), 7, 'Test 14');
test(findSpecialInteger([3,3,3,3,3,4,5,6,7,8,9,10,11,12,13]), 3, 'Test 15');
test(findSpecialInteger([1,2,2,6,6,6,6,7,10]), 6, 'Test 16');
test(findSpecialInteger([3,3,3,3,4,5,6,7,8,9,10]), 3, 'Test 17');
test(findSpecialInteger([1,1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), Error: list index out of range, 'Test 18');
test(findSpecialInteger([1,2,2,2,3,4,5,6,7,8,9,10]), Error: list index out of range, 'Test 19');
test(findSpecialInteger([5,5,5,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), Error: list index out of range, 'Test 20');
test(findSpecialInteger([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 21');
test(findSpecialInteger([3,3,3,3,4,5,6,7,8,9]), 3, 'Test 22');
test(findSpecialInteger([1,2,2,2,3,3,4,4,4,4]), 2, 'Test 23');
test(findSpecialInteger([0,0,0,1,2,3,4,5,6,7,8,9]), Error: list index out of range, 'Test 24');
test(findSpecialInteger([1,1,1,2,2,3,3,3,3,4,4,5,5,5,5,6,6,7,8,9]), Error: list index out of range, 'Test 25');
test(findSpecialInteger([1,2,2,2,3,4,5,6,7,8,9,10,10,10,10]), 10, 'Test 26');
test(findSpecialInteger([5,5,5,5,6,7,8,9,10,11,12,13,14,15,16]), 5, 'Test 27');
test(findSpecialInteger([1,2,2,3,3,3,3,3,4,5]), 3, 'Test 28');
test(findSpecialInteger([1,1,1,1,2,3,4,5,6,7,8,9,10]), 1, 'Test 29');
test(findSpecialInteger([5,5,5,5,6,7,8,9,10]), 5, 'Test 30');
test(findSpecialInteger([10,10,10,10,11,12,13,14,15,16,17,18,19,20,21]), 10, 'Test 31');
test(findSpecialInteger([3,3,3,3,4,5,6,7,8,9,10,11,12]), 3, 'Test 32');
test(findSpecialInteger([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 33');
test(findSpecialInteger([1,1,2,2,2,2,2,2,3,3,3,3,3,4,5,6,7,8,9,10]), 2, 'Test 34');
test(findSpecialInteger([1,2,3,4,5,5,5,5,6,7,8,9,10,11,12,13,14,15,16]), Error: list index out of range, 'Test 35');
test(findSpecialInteger([1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9]), Error: list index out of range, 'Test 36');
test(findSpecialInteger([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,11,12,13,14]), 10, 'Test 37');
test(findSpecialInteger([1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 4, 'Test 38');
test(findSpecialInteger([1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5]), 2, 'Test 39');
test(findSpecialInteger([1,1,1,1,2,2,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,7,8,9,10]), 5, 'Test 40');
test(findSpecialInteger([1,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 6, 'Test 41');
test(findSpecialInteger([0,1,1,1,1,2,3,4,4,4,4,4,4,4,5,6,7,8,9,10]), 4, 'Test 42');
test(findSpecialInteger([1,1,1,2,2,2,2,2,2,3,4,5,6,7,8,9,10,10,10,10,10]), 2, 'Test 43');
test(findSpecialInteger([0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), Error: list index out of range, 'Test 44');
test(findSpecialInteger([1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 4, 'Test 45');
test(findSpecialInteger([1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10]), Error: list index out of range, 'Test 46');
test(findSpecialInteger([0,1,2,3,4,5,6,7,8,9,10,10,10,10,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), Error: list index out of range, 'Test 47');
test(findSpecialInteger([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,5]), 2, 'Test 48');
test(findSpecialInteger([1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 2, 'Test 49');
test(findSpecialInteger([1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]), Error: list index out of range, 'Test 50');
test(findSpecialInteger([1,1,1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 51');
test(findSpecialInteger([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 1, 'Test 52');
test(findSpecialInteger([1,1,1,1,2,2,2,3,3,4,4,4,4,5,5,5,5,5,5,5]), 5, 'Test 53');
test(findSpecialInteger([25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 25, 'Test 54');
test(findSpecialInteger([1,1,1,1,2,2,2,2,3,3,3,3,3,4,5,6,7,8,9,10,11,12,13,14,14,14,14]), Error: list index out of range, 'Test 55');
test(findSpecialInteger([1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10,10]), 5, 'Test 56');
test(findSpecialInteger([10,20,20,20,20,30,30,30,30,40,40,40,40,50,50,50,50,50,50,50,50,50,50]), 50, 'Test 57');
test(findSpecialInteger([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8]), Error: list index out of range, 'Test 58');
test(findSpecialInteger([1,2,3,4,5,5,5,5,5,5,5,6,7,8,9,10,11,12,13,14]), 5, 'Test 59');
test(findSpecialInteger([1,1,1,1,1,2,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), Error: list index out of range, 'Test 60');
test(findSpecialInteger([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 61');
test(findSpecialInteger([5,5,5,5,5,6,6,6,7,7,7,8,8,8,8,9,10,10,11,11,12,12,13,13,13,13,13]), Error: list index out of range, 'Test 62');
test(findSpecialInteger([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 63');
test(findSpecialInteger([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 5, 'Test 64');
test(findSpecialInteger([5,5,5,5,5,5,5,5,5,5,5,6,7,8,9,10,11,12,13,14]), 5, 'Test 65');
test(findSpecialInteger([1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5]), 2, 'Test 66');
test(findSpecialInteger([1,1,1,1,2,2,2,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,10,10,10,10]), Error: list index out of range, 'Test 67');
test(findSpecialInteger([10000,10000,10000,10000,10001,10002,10003,10004,10005,10006,10007,10008,10009,10010,10011,10012,10013,10014,10015,10016,10017,10018,10019,10020]), Error: list index out of range, 'Test 68');
test(findSpecialInteger([1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,7,8,9,10]), 5, 'Test 69');
test(findSpecialInteger([0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 70');
test(findSpecialInteger([0,0,1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,10,11,12]), 9, 'Test 71');
test(findSpecialInteger([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5]), 1, 'Test 72');
test(findSpecialInteger([10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,30,30,30,30,30,30,30,30,30,30,30,30,30,30,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]), 20, 'Test 73');
test(findSpecialInteger([1,1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 74');
test(findSpecialInteger([1,1,1,1,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 6, 'Test 75');
test(findSpecialInteger([10,10,10,10,10,10,10,10,10,11,11,11,12,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 10, 'Test 76');
test(findSpecialInteger([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 1, 'Test 77');
test(findSpecialInteger([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,21,21]), Error: list index out of range, 'Test 78');
test(findSpecialInteger([1,2,2,2,2,2,2,2,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10,10,10]), 2, 'Test 79');
test(findSpecialInteger([1,2,2,2,2,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 6, 'Test 80');
test(findSpecialInteger([1,2,2,2,3,3,3,3,4,4,4,4,4,5,6,7,8,9,10,11,11,11,11]), Error: list index out of range, 'Test 81');
test(findSpecialInteger([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,9,10]), 1, 'Test 82');
test(findSpecialInteger([1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,7,8,9,10]), 3, 'Test 83');
test(findSpecialInteger([1,2,3,3,3,3,4,5,6,7,8,9,10,11,11,11,11]), Error: list index out of range, 'Test 84');
test(findSpecialInteger([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4]), 1, 'Test 85');
test(findSpecialInteger([1,2,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]), Error: list index out of range, 'Test 86');
test(findSpecialInteger([1,2,3,4,4,4,4,5,6,7,8,9,10,11,12,13,14,14,14,14]), Error: list index out of range, 'Test 87');
test(findSpecialInteger([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 88');
test(findSpecialInteger([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 1, 'Test 89');
test(findSpecialInteger([1,1,1,1,1,2,2,2,2,3,3,3,4,4,5,5,6,7,8,9,10,10,10,10]), Error: list index out of range, 'Test 90');
test(findSpecialInteger([1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 1, 'Test 91');
test(findSpecialInteger([100,100,100,100,100,100,100,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]), 100, 'Test 92');
test(findSpecialInteger([1,2,2,3,3,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,7,8,9,10]), 5, 'Test 93');
test(findSpecialInteger([1,2,3,4,5,6,6,6,6,6,6,6,7,8,9,10,11,12,13,14]), 6, 'Test 94');
test(findSpecialInteger([1,1,1,1,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5]), 4, 'Test 95');
test(findSpecialInteger([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 96');
test(findSpecialInteger([1,1,1,1,2,2,2,3,3,4,4,5,5,5,5,6,7,8,9,10,10,10,10,10]), Error: list index out of range, 'Test 97');
test(findSpecialInteger([1,1,1,1,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 1, 'Test 98');
test(findSpecialInteger([1,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,7,8,9,10,10,10,10,10]), 4, 'Test 99');
test(findSpecialInteger([1,1,1,2,2,2,2,2,3,4,5,6,7,8,9,10,11,12,13,14]), Error: list index out of range, 'Test 100');
test(findSpecialInteger([1,2,3,4,4,4,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,20,20,20]), Error: list index out of range, 'Test 101');
test(findSpecialInteger([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,25,25,25]), Error: list index out of range, 'Test 102');
test(findSpecialInteger([1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 3, 'Test 103');
test(findSpecialInteger([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 104');
test(findSpecialInteger([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3]), 1, 'Test 105');
test(findSpecialInteger([0,0,0,0,1,2,3,3,3,3,3,3,4,4,5,5,5,5,5,5,5,5,6,7,8,9,10]), 5, 'Test 106');
test(findSpecialInteger([1,2,2,3,3,3,4,4,4,4,4,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,20,20]), Error: list index out of range, 'Test 107');
test(findSpecialInteger([1,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 108');
test(findSpecialInteger([1,2,2,2,2,3,4,4,5,5,5,5,5,6,7,8,9,10,11,12]), Error: list index out of range, 'Test 109');
test(findSpecialInteger([5,5,5,5,6,6,6,6,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), Error: list index out of range, 'Test 110');
test(findSpecialInteger([1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]), 3, 'Test 111');
test(findSpecialInteger([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5]), 1, 'Test 112');
test(findSpecialInteger([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,5,6,7,8,9,10]), 2, 'Test 113');
test(findSpecialInteger([1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4]), 1, 'Test 114');

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
