// Test: 3388. Count Beautiful Splits In An Array
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { beautifulSplits } = require("./solution");

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

console.log("\n3388. Count Beautiful Splits In An Array\n");

test(beautifulSplits([1,2,3,1,2,3]), 0, 'Test 1');
test(beautifulSplits([0,1,2,3,4,5,6,7,8,9,0]), 0, 'Test 2');
test(beautifulSplits([1,1,1,1]), 3, 'Test 3');
test(beautifulSplits([0,0,0,0,0,0,0,0]), 19, 'Test 4');
test(beautifulSplits([50,50,50,50,50]), 6, 'Test 5');
test(beautifulSplits([1,2,2,1]), 1, 'Test 6');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 7');
test(beautifulSplits([1,3,2,3,1]), 0, 'Test 8');
test(beautifulSplits([1,2,2,2,2,1]), 4, 'Test 9');
test(beautifulSplits([1,2,3,4]), 0, 'Test 10');
test(beautifulSplits([10,20,30,20,10,20]), 0, 'Test 11');
test(beautifulSplits([5,5,5,0,0,5,5]), 7, 'Test 12');
test(beautifulSplits([10,20,30,40,50]), 0, 'Test 13');
test(beautifulSplits([10,20,30,40,50,60,70,80,90,100]), 0, 'Test 14');
test(beautifulSplits([5,5,5,5,5]), 6, 'Test 15');
test(beautifulSplits([0,0,0,0,0]), 6, 'Test 16');
test(beautifulSplits([1,1,1,2,2,2,3,3,3,1,1,1]), 16, 'Test 17');
test(beautifulSplits([1,1,2,2,1,1]), 6, 'Test 18');
test(beautifulSplits([1,1,1,1,1]), 6, 'Test 19');
test(beautifulSplits([1,2,3,4,5,6]), 0, 'Test 20');
test(beautifulSplits([1,2,1,2,1,2]), 3, 'Test 21');
test(beautifulSplits([50,50,50,50,50,50]), 9, 'Test 22');
test(beautifulSplits([0,0,0,0,0,0]), 9, 'Test 23');
test(beautifulSplits([1,1,1,2,1,1,1]), 7, 'Test 24');
test(beautifulSplits([5,5,5,5,5,5]), 9, 'Test 25');
test(beautifulSplits([1,2,3,2,1,2,3,2,1]), 2, 'Test 26');
test(beautifulSplits([1,1,2,1]), 2, 'Test 27');
test(beautifulSplits([50,50,50,50,50,50,50,50,50,50]), 32, 'Test 28');
test(beautifulSplits([1,2,3,2,1]), 0, 'Test 29');
test(beautifulSplits([1,2,1,3,2,1]), 0, 'Test 30');
test(beautifulSplits([5,5,5,5,5,5,5,5,5,5]), 32, 'Test 31');
test(beautifulSplits([1,1,1,2,2,2,3,3,3]), 11, 'Test 32');
test(beautifulSplits([1,2,1,2,1]), 2, 'Test 33');
test(beautifulSplits([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 370, 'Test 34');
test(beautifulSplits([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 1, 'Test 35');
test(beautifulSplits([3,3,3,3,3,3,2,2,2,2,2,1,1,1,1,1]), 51, 'Test 36');
test(beautifulSplits([3,3,3,2,2,2,1,1,1,2,2,2,3,3,3]), 21, 'Test 37');
test(beautifulSplits([3,3,3,3,1,3,3,3,1,3,3,3]), 25, 'Test 38');
test(beautifulSplits([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 147, 'Test 39');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 0, 'Test 40');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 0, 'Test 41');
test(beautifulSplits([1,2,3,2,1,3,1,2,3,1,2,3,2,1]), 2, 'Test 42');
test(beautifulSplits([1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1]), 83, 'Test 43');
test(beautifulSplits([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 322, 'Test 44');
test(beautifulSplits([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4]), 90, 'Test 45');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 0, 'Test 46');
test(beautifulSplits([1,2,3,2,1,1,2,3,2,1,1,2,3,2,1,1,2,3,2,1]), 22, 'Test 47');
test(beautifulSplits([1,2,1,1,2,1,2,1,1,2]), 8, 'Test 48');
test(beautifulSplits([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 13, 'Test 49');
test(beautifulSplits([1,2,1,2,1,2,1,2]), 7, 'Test 50');
test(beautifulSplits([1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1]), 27, 'Test 51');
test(beautifulSplits([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,1,1,1,2,2,2]), 31, 'Test 52');
test(beautifulSplits([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 232, 'Test 53');
test(beautifulSplits([1,2,3,4,3,2,1,2,3,4,3,2,1]), 2, 'Test 54');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 55');
test(beautifulSplits([1,2,3,4,5,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1]), 3, 'Test 56');
test(beautifulSplits([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 5007, 'Test 57');
test(beautifulSplits([10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), 27, 'Test 58');
test(beautifulSplits([1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1,1,2]), 6, 'Test 59');
test(beautifulSplits([1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2]), 54, 'Test 60');
test(beautifulSplits([5,10,15,20,25,30,35,40,45,50,5,10,15,20,25,30,35,40,45,50]), 0, 'Test 61');
test(beautifulSplits([10,20,10,20,10,20,10]), 5, 'Test 62');
test(beautifulSplits([1,1,2,2,3,3,4,4,5,5]), 12, 'Test 63');
test(beautifulSplits([1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1]), 19, 'Test 64');
test(beautifulSplits([1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1]), 66, 'Test 65');
test(beautifulSplits([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 8027, 'Test 66');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 0, 'Test 67');
test(beautifulSplits([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 57, 'Test 68');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 2, 'Test 69');
test(beautifulSplits([5,4,3,2,1,2,3,4,5]), 0, 'Test 70');
test(beautifulSplits([5,4,3,2,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5]), 2, 'Test 71');
test(beautifulSplits([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 27, 'Test 72');
test(beautifulSplits([1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2]), 103, 'Test 73');
test(beautifulSplits([4,4,5,5,4,4,6,6,5,5,4,4,7,7,6,6,5,5,4,4,8,8,7,7,6,6,5,5,4,4]), 42, 'Test 74');
test(beautifulSplits([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 5564, 'Test 75');
test(beautifulSplits([1,2,3,1,2,3,1,2,3]), 5, 'Test 76');
test(beautifulSplits([1,2,1,2,1,2,1,2,1,2]), 14, 'Test 77');
test(beautifulSplits([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 72, 'Test 78');
test(beautifulSplits([3,3,3,3,3,2,2,2,2,2,1,1,1,1,1]), 38, 'Test 79');
test(beautifulSplits([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 147, 'Test 80');
test(beautifulSplits([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2]), 2382, 'Test 81');
test(beautifulSplits([1,1,2,2,1,1,2,2,1,1]), 15, 'Test 82');
test(beautifulSplits([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 83');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 84');
test(beautifulSplits([1,2,3,4,5,4,3,2,1]), 0, 'Test 85');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 19, 'Test 86');
test(beautifulSplits([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 256, 'Test 87');
test(beautifulSplits([1,1,2,2,2,2,1,1,2,2,2,2,1,1]), 25, 'Test 88');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 0, 'Test 89');
test(beautifulSplits([5,4,3,2,1,2,3,4,5,1,2,3,4,5]), 1, 'Test 90');
test(beautifulSplits([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3]), 38, 'Test 91');
test(beautifulSplits([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5]), 24, 'Test 92');
test(beautifulSplits([1,2,1,1,2,1]), 1, 'Test 93');
test(beautifulSplits([1,1,1,2,2,2,3,3,3,1,1,1,4,4,4]), 21, 'Test 94');
test(beautifulSplits([1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3]), 91, 'Test 95');
test(beautifulSplits([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 370, 'Test 96');
test(beautifulSplits([1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1]), 39, 'Test 97');
test(beautifulSplits([1,1,2,2,3,3,4,4,5,5,4,4,3,3,2,2,1,1,1,1,2,2,3,3,4,4,5,5]), 41, 'Test 98');
test(beautifulSplits([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 46, 'Test 99');
test(beautifulSplits([10,20,10,20,10,20,10,20,10,20]), 14, 'Test 100');
test(beautifulSplits([1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2]), 35, 'Test 101');
test(beautifulSplits([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 24, 'Test 102');
test(beautifulSplits([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 2269, 'Test 103');
test(beautifulSplits([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 104');
test(beautifulSplits([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1]), 182, 'Test 105');
test(beautifulSplits([1,2,3,4,5,4,3,2,1,1]), 1, 'Test 106');
test(beautifulSplits([1,2,3,4,5,4,3,2,1,2,3,4,5]), 0, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

