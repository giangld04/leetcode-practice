// Test: 3005. Count Elements With Maximum Frequency
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { maxFrequencyElements } = require("./solution");

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

console.log("\n3005. Count Elements With Maximum Frequency\n");

test(maxFrequencyElements([3,3,3,2,2,1]), 3, 'Test 1');
test(maxFrequencyElements([10,20,10,20,10,30,30,30,30]), 4, 'Test 2');
test(maxFrequencyElements([10,20,10,20,10,30,20,40,50,20]), 4, 'Test 3');
test(maxFrequencyElements([1,1,2,2,3,3,4,4]), 8, 'Test 4');
test(maxFrequencyElements([1,2,2,3,1,4]), 4, 'Test 5');
test(maxFrequencyElements([5,5,5,5,1,1,2,2,3,3]), 4, 'Test 6');
test(maxFrequencyElements([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 7');
test(maxFrequencyElements([1]), 1, 'Test 8');
test(maxFrequencyElements([7,7,7,7,7,7,7]), 7, 'Test 9');
test(maxFrequencyElements([1,1,2,2,3,3]), 6, 'Test 10');
test(maxFrequencyElements([1,1,1,2,2,3]), 3, 'Test 11');
test(maxFrequencyElements([10,20,20,10,30,30,30]), 3, 'Test 12');
test(maxFrequencyElements([5,5,5,5,5]), 5, 'Test 13');
test(maxFrequencyElements([1,2,3,4,5]), 5, 'Test 14');
test(maxFrequencyElements([7,7,7,7,7]), 5, 'Test 15');
test(maxFrequencyElements([1,2,3,3,3,4,4,4,4]), 4, 'Test 16');
test(maxFrequencyElements([1,1]), 2, 'Test 17');
test(maxFrequencyElements([7,7,7,7,8,8,8,8,8,9,9,9,9,9,9]), 6, 'Test 18');
test(maxFrequencyElements([1,1,1,2,2,2,3,3,3]), 9, 'Test 19');
test(maxFrequencyElements([31,31,31,31,32,32,32,32,33,33,34,34,34,35,35,35,35]), 12, 'Test 20');
test(maxFrequencyElements([2,3,3,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,7]), 5, 'Test 21');
test(maxFrequencyElements([1,1,1,2,2,3,3,3,4,4,4,4]), 4, 'Test 22');
test(maxFrequencyElements([32,32,33,33,33,34,34,34,34,35,35,35,35,35,35,35,35,35]), 9, 'Test 23');
test(maxFrequencyElements([7,8,8,9,9,9,10,10,10,10,10]), 5, 'Test 24');
test(maxFrequencyElements([7,7,7,8,8,9,9,10,10,10,10]), 4, 'Test 25');
test(maxFrequencyElements([11,11,12,12,13,13,14,14,15,15,15,15,16,16,17,17,18,18,19,19,19]), 4, 'Test 26');
test(maxFrequencyElements([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4]), 8, 'Test 27');
test(maxFrequencyElements([99,99,99,99,98,98,98,97,97,96,96,95,95,95,95,95,95,95,95,95]), 9, 'Test 28');
test(maxFrequencyElements([1,2,2,3,3,3,4,4,4,4,5,5,5,5]), 8, 'Test 29');
test(maxFrequencyElements([2,2,2,3,3,4,4,4,5,5,5,5,6,6,6,6]), 8, 'Test 30');
test(maxFrequencyElements([1,1,2,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9]), 30, 'Test 31');
test(maxFrequencyElements([17,17,18,18,18,19,19,20,20,20,20,20,20]), 6, 'Test 32');
test(maxFrequencyElements([6,6,6,6,7,7,7,8,8,9]), 4, 'Test 33');
test(maxFrequencyElements([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5]), 5, 'Test 34');
test(maxFrequencyElements([3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7]), 18, 'Test 35');
test(maxFrequencyElements([21,21,21,22,22,22,22,23,23,23,23,23,24,24,24,25,25,25,25]), 5, 'Test 36');
test(maxFrequencyElements([1,2,2,3,3,3,4,4,4,4]), 4, 'Test 37');
test(maxFrequencyElements([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 27, 'Test 38');
test(maxFrequencyElements([7,7,7,7,8,8,8,9,9,10]), 4, 'Test 39');
test(maxFrequencyElements([6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,10]), 4, 'Test 40');
test(maxFrequencyElements([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6]), 7, 'Test 41');
test(maxFrequencyElements([6,6,6,6,6,7,7,7,7,8,8,8,9,9,10]), 5, 'Test 42');
test(maxFrequencyElements([10,20,20,30,30,30,40,40,40,40,50,50,50,50,50]), 5, 'Test 43');
test(maxFrequencyElements([1,1,2,2,2,3,3,3,4,4,4,4]), 4, 'Test 44');
test(maxFrequencyElements([6,6,6,6,6,7,7,7,8,8,9,9,10,10,11,11,11,11]), 5, 'Test 45');
test(maxFrequencyElements([1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,5,5]), 7, 'Test 46');
test(maxFrequencyElements([1,1,1,1,2,2,2,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6]), 8, 'Test 47');
test(maxFrequencyElements([7,7,8,8,9,9,9,10,10,10,10]), 4, 'Test 48');
test(maxFrequencyElements([1,1,1,2,2,3,3,3,3,4,4,4]), 4, 'Test 49');
test(maxFrequencyElements([6,6,6,7,7,8,8,8,9,9,10,10]), 6, 'Test 50');
test(maxFrequencyElements([1,1,1,1,2,2,2,3,3,4,5,5,6,6,6,7,7,8,8,8,9,9,9,9,9]), 5, 'Test 51');
test(maxFrequencyElements([100,100,100,100,100,100,99,99,98,98,97,97,96,96,95,95,94,94,93,93,92,92,91,91]), 6, 'Test 52');
test(maxFrequencyElements([25,26,27,28,29,29,30,30,30,30,31,31,31,31,31,31,31]), 7, 'Test 53');
test(maxFrequencyElements([10,20,20,30,30,30,40,40,40,40]), 4, 'Test 54');
test(maxFrequencyElements([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,5,5]), 9, 'Test 55');
test(maxFrequencyElements([1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5]), 10, 'Test 56');
test(maxFrequencyElements([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8]), 25, 'Test 57');
test(maxFrequencyElements([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9]), 20, 'Test 58');
test(maxFrequencyElements([36,36,36,37,37,37,37,38,38,38,38,38,39,39,39,39,39,39,39,39,39]), 9, 'Test 59');
test(maxFrequencyElements([1,1,1,2,2,2,2,3,3,4,4,4,4,4,5,5,5,5,5]), 10, 'Test 60');
test(maxFrequencyElements([1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 16, 'Test 61');
test(maxFrequencyElements([1,2,3,4,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 21, 'Test 62');
test(maxFrequencyElements([7,7,7,7,8,8,8,9,9,9,9,9,10]), 5, 'Test 63');
test(maxFrequencyElements([2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6]), 12, 'Test 64');
test(maxFrequencyElements([1,1,1,2,2,2,3,3,3,3,4,4,4,4,4]), 5, 'Test 65');
test(maxFrequencyElements([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,5,5,5,5,5,5]), 6, 'Test 66');
test(maxFrequencyElements([6,6,6,7,7,8,8,8,9,9,9,10,10,10]), 12, 'Test 67');
test(maxFrequencyElements([36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,36,37,38,39]), 8, 'Test 68');
test(maxFrequencyElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 69');
test(maxFrequencyElements([1,2,3,4,5,5,5,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 15, 'Test 70');
test(maxFrequencyElements([1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5]), 12, 'Test 71');
test(maxFrequencyElements([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 20, 'Test 72');
test(maxFrequencyElements([6,6,7,7,7,8,8,8,8,8,9,9,9,9,9]), 10, 'Test 73');
test(maxFrequencyElements([30,30,31,31,32,32,33,33,34,34,35,35,35,36,36,36,37,37,37,37,38,38,39]), 4, 'Test 74');
test(maxFrequencyElements([10,20,20,30,30,30,40,40,40,40,50,50,50,50,50,60,60,60,60,60]), 10, 'Test 75');
test(maxFrequencyElements([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10]), 9, 'Test 76');
test(maxFrequencyElements([1,1,1,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), 6, 'Test 77');
test(maxFrequencyElements([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), 28, 'Test 78');
test(maxFrequencyElements([1,1,1,1,1,2,2,2,3,3,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 41, 'Test 79');
test(maxFrequencyElements([1,2,2,3,3,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7]), 6, 'Test 80');
test(maxFrequencyElements([50,50,51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,59,59,60,60,60,60]), 4, 'Test 81');
test(maxFrequencyElements([7,7,7,8,8,8,8,9,9,9,9,9]), 5, 'Test 82');
test(maxFrequencyElements([1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5]), 7, 'Test 83');
test(maxFrequencyElements([21,21,22,22,23,23,23,23,24,24,24,24,24,24,24]), 7, 'Test 84');
test(maxFrequencyElements([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 16, 'Test 85');
test(maxFrequencyElements([10,20,20,30,30,30,40,40,40,40,50,50,50,50,50,60,60,60,60,60,60,70,70,70,70,70,70,70]), 7, 'Test 86');
test(maxFrequencyElements([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6]), 9, 'Test 87');
test(maxFrequencyElements([11,12,12,13,13,13,14,14,14,14,15,15,15,15,15]), 5, 'Test 88');
test(maxFrequencyElements([6,6,6,6,7,7,8,8,8,9,9,9,10]), 4, 'Test 89');
test(maxFrequencyElements([10,10,20,20,20,30,30,30,30,40,40,40,40,40]), 5, 'Test 90');
test(maxFrequencyElements([14,15,14,15,14,15,16,16,16,17,18,18,18,19,19,19,19]), 4, 'Test 91');
test(maxFrequencyElements([31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35]), 20, 'Test 92');
test(maxFrequencyElements([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 20, 'Test 93');
test(maxFrequencyElements([7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10]), 12, 'Test 94');
test(maxFrequencyElements([1,1,1,1,2,2,2,3,3,4,5,5,6,6,6,7,8,8,8,8]), 8, 'Test 95');
test(maxFrequencyElements([9,9,9,9,9,8,8,8,8,7,7,7,6,6,5,4,3,2,1]), 5, 'Test 96');
test(maxFrequencyElements([10,20,20,30,30,30,30,40,40,40,40]), 8, 'Test 97');
test(maxFrequencyElements([1,2,2,3,3,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,8]), 6, 'Test 98');
test(maxFrequencyElements([7,7,7,8,8,9,9,9,9,10,10,10,10]), 8, 'Test 99');
test(maxFrequencyElements([1,2,2,3,3,3,4,4,4,4,5,5,5]), 4, 'Test 100');
test(maxFrequencyElements([21,21,21,22,22,23,23,23,23,24,24,24,24,25,25,25,25,25]), 5, 'Test 101');
test(maxFrequencyElements([1,1,1,2,2,3,4,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9]), 8, 'Test 102');
test(maxFrequencyElements([41,41,41,42,42,42,42,43,43,44,44,44,44,45,45,45,45,45]), 5, 'Test 103');
test(maxFrequencyElements([1,2,2,3,3,4,4,4,5,5,5,5,6,6,6,6,7,7,7,8,8,8,9,9,10,10,10,10]), 12, 'Test 104');
test(maxFrequencyElements([1,1,1,1,2,2,2,3,3,3,4,4,5,5,5,5]), 8, 'Test 105');
test(maxFrequencyElements([40,40,40,41,41,41,42,42,42,42,43,43,44,44,44,45,45,45,46,46,47,47,47,47]), 8, 'Test 106');
test(maxFrequencyElements([11,12,13,14,15,15,15,15,16,16,16,16,16]), 5, 'Test 107');
test(maxFrequencyElements([7,7,8,8,8,9,9,9,9,10,10,10,10]), 8, 'Test 108');
test(maxFrequencyElements([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8]), 10, 'Test 109');
test(maxFrequencyElements([6,6,6,6,7,7,7,8,8,9,9,10,11,12,12,12,13,13,13,13]), 8, 'Test 110');
test(maxFrequencyElements([10,10,10,20,20,30,30,30,40,40,40,40]), 4, 'Test 111');
test(maxFrequencyElements([26,27,28,29,30,26,27,28,29,30,26,27,28,29,30,26,27,28,29]), 16, 'Test 112');
test(maxFrequencyElements([51,51,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,55,55]), 6, 'Test 113');
test(maxFrequencyElements([40,41,42,42,43,43,43,44,44,44,44,45,45,45,45,45,45,45,45,45,45]), 10, 'Test 114');
test(maxFrequencyElements([1,1,2,2,2,3,3,4,4,4,4]), 4, 'Test 115');
test(maxFrequencyElements([61,61,61,61,62,62,62,62,62,63,63,63,63,63,64,64,64,64,64,64,64]), 7, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

