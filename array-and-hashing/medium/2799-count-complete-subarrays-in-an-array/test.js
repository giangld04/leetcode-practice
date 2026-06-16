// Test: 2799. Count Complete Subarrays In An Array
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { countCompleteSubarrays } = require("./solution");

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

console.log("\n2799. Count Complete Subarrays In An Array\n");

test(countCompleteSubarrays([7,7,7,7,7,7,7]), 28, 'Test 1');
test(countCompleteSubarrays([1,1,2,2,3,3]), 4, 'Test 2');
test(countCompleteSubarrays([2000,1999,1998,1997,1996]), 1, 'Test 3');
test(countCompleteSubarrays([1,2,3,1,2,3]), 10, 'Test 4');
test(countCompleteSubarrays([7,7,7,1,7,7,7]), 15, 'Test 5');
test(countCompleteSubarrays([1,1,1,1,1]), 15, 'Test 6');
test(countCompleteSubarrays([1,2,1,3,2,1]), 9, 'Test 7');
test(countCompleteSubarrays([1,2,3,2,1]), 5, 'Test 8');
test(countCompleteSubarrays([1,2,1,2,1,2]), 15, 'Test 9');
test(countCompleteSubarrays([10,20,30,40,50]), 1, 'Test 10');
test(countCompleteSubarrays([1,2,2,1,3,3,4,4,5,5]), 6, 'Test 11');
test(countCompleteSubarrays([2000,1,2000,2,2000,3]), 2, 'Test 12');
test(countCompleteSubarrays([1,3,1,2,2]), 4, 'Test 13');
test(countCompleteSubarrays([5,5,5,5]), 10, 'Test 14');
test(countCompleteSubarrays([1,2,3,4,5]), 1, 'Test 15');
test(countCompleteSubarrays([7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 1, 'Test 16');
test(countCompleteSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 21, 'Test 17');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10]), 1, 'Test 18');
test(countCompleteSubarrays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 190, 'Test 19');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 11, 'Test 20');
test(countCompleteSubarrays([1,1,2,2,3,3,1,1,2,2,3,3,1,1,2,2,3,3,1,1]), 144, 'Test 21');
test(countCompleteSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,1,2,2,3,3,4,4,5,5]), 84, 'Test 22');
test(countCompleteSubarrays([7, 8, 9, 7, 8, 9, 1, 2, 3, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9]), 25, 'Test 23');
test(countCompleteSubarrays([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 2, 'Test 24');
test(countCompleteSubarrays([1,2,3,4,5,1,2,3,4,5]), 21, 'Test 25');
test(countCompleteSubarrays([1,2,3,2,1,4,5,6,5,4,3,2,1]), 26, 'Test 26');
test(countCompleteSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 210, 'Test 27');
test(countCompleteSubarrays([1,2,3,1,2,3,1,2,3,1,2,3]), 55, 'Test 28');
test(countCompleteSubarrays([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 2211, 'Test 29');
test(countCompleteSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 231, 'Test 30');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 21, 'Test 31');
test(countCompleteSubarrays([2,3,1,3,5,7,5,1,3,2,4,1,5,3,7,2,5,1,3,5,7,9,1,2,3,4,5]), 85, 'Test 32');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 136, 'Test 33');
test(countCompleteSubarrays([1,1,1,2,2,2,3,3,3,1,2,3,1,2,3,1,2,3]), 115, 'Test 34');
test(countCompleteSubarrays([7,7,1,3,1,2,2,3,3,4,4,5,5]), 4, 'Test 35');
test(countCompleteSubarrays([1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3]), 162, 'Test 36');
test(countCompleteSubarrays([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 9, 'Test 37');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 1, 'Test 38');
test(countCompleteSubarrays([1000, 1000, 999, 999, 998, 998, 997, 997, 996, 996, 995, 995, 994, 994]), 4, 'Test 39');
test(countCompleteSubarrays([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2]), 171, 'Test 40');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 1, 'Test 41');
test(countCompleteSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 4, 'Test 42');
test(countCompleteSubarrays([9, 7, 5, 3, 1, 2, 4, 6, 8, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 10]), 66, 'Test 43');
test(countCompleteSubarrays([2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 2000, 1999, 1998, 1997, 1996]), 21, 'Test 44');
test(countCompleteSubarrays([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]), 210, 'Test 45');
test(countCompleteSubarrays([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 190, 'Test 46');
test(countCompleteSubarrays([2000,1999,1998,1997,1996,1995,1994,1993,1992,1991]), 1, 'Test 47');
test(countCompleteSubarrays([100,200,300,400,500,100,200,300,400,500,600,700,800,900,1000]), 6, 'Test 48');
test(countCompleteSubarrays([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 351, 'Test 49');
test(countCompleteSubarrays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 496, 'Test 50');
test(countCompleteSubarrays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 91, 'Test 51');
test(countCompleteSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 4, 'Test 52');
test(countCompleteSubarrays([7,3,7,3,1,3,7,1,7,3,7,3,1]), 58, 'Test 53');
test(countCompleteSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 4, 'Test 54');
test(countCompleteSubarrays([1,2,2,3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 5, 'Test 55');
test(countCompleteSubarrays([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4]), 25, 'Test 56');
test(countCompleteSubarrays([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]), 2, 'Test 57');
test(countCompleteSubarrays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 253, 'Test 58');
test(countCompleteSubarrays([1,1,2,2,3,3,4,4,5,5,1,2,3,4,5]), 43, 'Test 59');
test(countCompleteSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 4, 'Test 60');
test(countCompleteSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 4, 'Test 61');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 1, 'Test 62');
test(countCompleteSubarrays([1,2,3,2,1,3,2,1]), 20, 'Test 63');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), 66, 'Test 64');
test(countCompleteSubarrays([5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10]), 91, 'Test 65');
test(countCompleteSubarrays([10,9,8,7,6,5,4,3,2,1]), 1, 'Test 66');
test(countCompleteSubarrays([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 210, 'Test 67');
test(countCompleteSubarrays([7,8,9,7,8,9,7,8,9,7,8,9,7,8,9]), 91, 'Test 68');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 133, 'Test 69');
test(countCompleteSubarrays([1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]), 91, 'Test 70');
test(countCompleteSubarrays([15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), 66, 'Test 71');
test(countCompleteSubarrays([100,200,300,400,500,100,200,300,400,500,100,200,300,400,500]), 66, 'Test 72');
test(countCompleteSubarrays([10,20,30,40,50,10,20,30,40,50,10,20,30,40,50]), 66, 'Test 73');
test(countCompleteSubarrays([2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981]), 1, 'Test 74');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 231, 'Test 75');
test(countCompleteSubarrays([7, 8, 9, 7, 8, 9, 7, 8, 9, 10]), 7, 'Test 76');
test(countCompleteSubarrays([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), 9, 'Test 77');
test(countCompleteSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20]), 4, 'Test 78');
test(countCompleteSubarrays([10,20,30,40,50,10,20,30,40,50,60,70,80,90,100]), 6, 'Test 79');
test(countCompleteSubarrays([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]), 9, 'Test 80');
test(countCompleteSubarrays([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 66, 'Test 81');
test(countCompleteSubarrays([1,2,3,1,2,3,4,5,4,5,6,7,8,9,10,6,7,8,9,10]), 24, 'Test 82');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 66, 'Test 83');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 1, 'Test 84');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 11, 'Test 85');
test(countCompleteSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 66, 'Test 86');
test(countCompleteSubarrays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 325, 'Test 87');
test(countCompleteSubarrays([10,20,30,40,50,10,20,30,40,50,60,70,80,90]), 6, 'Test 88');
test(countCompleteSubarrays([1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]), 231, 'Test 89');
test(countCompleteSubarrays([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5]), 25, 'Test 90');
test(countCompleteSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 190, 'Test 91');
test(countCompleteSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 1, 'Test 92');
test(countCompleteSubarrays([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,6,7,8,9,10,11,12,13,14,15]), 6, 'Test 93');
test(countCompleteSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 136, 'Test 94');
test(countCompleteSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 231, 'Test 95');
test(countCompleteSubarrays([2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 171, 'Test 96');
test(countCompleteSubarrays([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 231, 'Test 97');
test(countCompleteSubarrays([10, 20, 10, 30, 20, 10, 40, 50, 30, 20]), 15, 'Test 98');
test(countCompleteSubarrays([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 120, 'Test 99');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

