// Test: 3190. Find Minimum Operations To Make All Elements Divisible By Three
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOperations } = require("./solution");

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

console.log("\n3190. Find Minimum Operations To Make All Elements Divisible By Three\n");

test(minimumOperations([1,2,4,5]), 4, 'Test 1');
test(minimumOperations([1,1,1,1]), 4, 'Test 2');
test(minimumOperations([3,3,3,3]), 0, 'Test 3');
test(minimumOperations([1,2,4,5,7]), 5, 'Test 4');
test(minimumOperations([1,2,4,5,7,8]), 6, 'Test 5');
test(minimumOperations([11,22,33,44]), 3, 'Test 6');
test(minimumOperations([15,18,21,24]), 0, 'Test 7');
test(minimumOperations([50,49,48,47,46]), 4, 'Test 8');
test(minimumOperations([1,2,3,4]), 3, 'Test 9');
test(minimumOperations([47,49,50]), 3, 'Test 10');
test(minimumOperations([2,4,8,10]), 4, 'Test 11');
test(minimumOperations([2,4,8,16]), 4, 'Test 12');
test(minimumOperations([1,4,7,10]), 4, 'Test 13');
test(minimumOperations([1,5,7,10]), 4, 'Test 14');
test(minimumOperations([1,1,1,1,1]), 5, 'Test 15');
test(minimumOperations([33,36,39,42]), 0, 'Test 16');
test(minimumOperations([2,2,2,2]), 4, 'Test 17');
test(minimumOperations([2,5,8,11]), 4, 'Test 18');
test(minimumOperations([5,10,15,20,25]), 4, 'Test 19');
test(minimumOperations([2,5,8,11,14]), 5, 'Test 20');
test(minimumOperations([5,10,15,20]), 3, 'Test 21');
test(minimumOperations([4,5,6,7]), 3, 'Test 22');
test(minimumOperations([1,2,5]), 3, 'Test 23');
test(minimumOperations([1,5,7]), 3, 'Test 24');
test(minimumOperations([3,6,9]), 0, 'Test 25');
test(minimumOperations([30,33,36,39]), 0, 'Test 26');
test(minimumOperations([7,14,21,28]), 3, 'Test 27');
test(minimumOperations([2,2,2,2,2]), 5, 'Test 28');
test(minimumOperations([10,20,30,40]), 3, 'Test 29');
test(minimumOperations([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 50, 1, 2, 3]), 11, 'Test 30');
test(minimumOperations([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49]), 17, 'Test 31');
test(minimumOperations([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 14, 'Test 32');
test(minimumOperations([47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67]), 8, 'Test 33');
test(minimumOperations([9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 8, 'Test 34');
test(minimumOperations([8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50]), 15, 'Test 35');
test(minimumOperations([1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28, 29]), 20, 'Test 36');
test(minimumOperations([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99]), 0, 'Test 37');
test(minimumOperations([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33]), 0, 'Test 38');
test(minimumOperations([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), 8, 'Test 39');
test(minimumOperations([3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]), 11, 'Test 40');
test(minimumOperations([15, 18, 21, 24, 27, 30, 33, 36, 39, 42]), 0, 'Test 41');
test(minimumOperations([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]), 0, 'Test 42');
test(minimumOperations([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 3, 6, 9, 12, 18, 21, 27, 33, 36, 39, 42, 48]), 14, 'Test 43');
test(minimumOperations([11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]), 7, 'Test 44');
test(minimumOperations([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44]), 8, 'Test 45');
test(minimumOperations([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50]), 17, 'Test 46');
test(minimumOperations([25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]), 8, 'Test 47');
test(minimumOperations([30, 32, 35, 38, 41, 44, 47, 50]), 7, 'Test 48');
test(minimumOperations([11, 22, 33, 44, 55, 66, 77, 88, 99, 100]), 7, 'Test 49');
test(minimumOperations([17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 9, 'Test 50');
test(minimumOperations([45, 46, 47, 48, 49, 50, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31]), 14, 'Test 51');
test(minimumOperations([1, 5, 7, 8, 10]), 5, 'Test 52');
test(minimumOperations([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47]), 16, 'Test 53');
test(minimumOperations([8, 16, 24, 32, 40, 48, 50]), 5, 'Test 54');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 8, 'Test 55');
test(minimumOperations([2, 5, 8, 11, 14, 17, 20, 23, 26, 29]), 10, 'Test 56');
test(minimumOperations([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]), 12, 'Test 57');
test(minimumOperations([31, 32, 34, 35, 37, 38, 40, 41, 43, 44, 46, 47, 49]), 13, 'Test 58');
test(minimumOperations([11, 22, 33, 44, 55, 66, 77, 88, 99, 110]), 7, 'Test 59');
test(minimumOperations([19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49]), 11, 'Test 60');
test(minimumOperations([29, 38, 47, 56, 65, 74, 83, 92, 101, 110, 119]), 11, 'Test 61');
test(minimumOperations([1, 4, 7, 10, 13, 16, 19]), 7, 'Test 62');
test(minimumOperations([29, 30, 31, 32, 33, 34, 35, 36]), 5, 'Test 63');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70, 80, 90]), 6, 'Test 64');
test(minimumOperations([29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 20, 'Test 65');
test(minimumOperations([2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18]), 6, 'Test 66');
test(minimumOperations([29, 32, 35, 38, 41, 44, 47, 50, 53]), 9, 'Test 67');
test(minimumOperations([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]), 8, 'Test 68');
test(minimumOperations([25, 26, 27, 28, 29, 30, 31, 32, 33]), 6, 'Test 69');
test(minimumOperations([1, 5, 10, 15, 20, 25]), 5, 'Test 70');
test(minimumOperations([1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26]), 18, 'Test 71');
test(minimumOperations([1, 5, 7, 8, 11, 13]), 6, 'Test 72');
test(minimumOperations([45, 46, 47, 48, 49, 1, 2, 3, 4, 5, 6]), 7, 'Test 73');
test(minimumOperations([8, 17, 26, 35, 44, 53]), 6, 'Test 74');
test(minimumOperations([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45]), 0, 'Test 75');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 10, 'Test 76');
test(minimumOperations([1, 5, 7, 8, 10, 12, 14, 16, 19, 22]), 9, 'Test 77');
test(minimumOperations([49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33]), 11, 'Test 78');
test(minimumOperations([10, 20, 30, 40, 50]), 4, 'Test 79');
test(minimumOperations([41, 44, 47, 50, 1, 4, 7, 10, 13, 16]), 10, 'Test 80');
test(minimumOperations([1, 5, 7, 11, 13, 17, 19]), 7, 'Test 81');
test(minimumOperations([13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49]), 13, 'Test 82');
test(minimumOperations([1, 5, 7, 11, 14, 17, 20, 23]), 8, 'Test 83');
test(minimumOperations([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43]), 15, 'Test 84');
test(minimumOperations([1, 2, 4, 5, 7, 8, 10]), 7, 'Test 85');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 14, 'Test 86');
test(minimumOperations([15, 16, 18, 20, 21, 23, 25, 27, 28, 30, 32, 34, 36, 38, 40]), 9, 'Test 87');
test(minimumOperations([29, 28, 27, 26, 25, 24, 23, 22, 21, 20]), 7, 'Test 88');
test(minimumOperations([4, 6, 8, 10, 12, 14, 16]), 5, 'Test 89');
test(minimumOperations([1, 5, 7, 10, 11, 14, 16]), 7, 'Test 90');
test(minimumOperations([30, 33, 36, 39, 42, 45, 48, 51]), 0, 'Test 91');
test(minimumOperations([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56]), 10, 'Test 92');
test(minimumOperations([45, 46, 47, 48, 49, 50, 1, 2, 3]), 6, 'Test 93');
test(minimumOperations([11, 13, 17, 19, 23, 29, 31]), 7, 'Test 94');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70]), 5, 'Test 95');
test(minimumOperations([29, 58, 87, 116, 145, 174, 203, 232, 261, 290]), 7, 'Test 96');
test(minimumOperations([3, 5, 6, 9, 12, 15, 18, 21]), 1, 'Test 97');
test(minimumOperations([4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49]), 16, 'Test 98');
test(minimumOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 13, 'Test 99');
test(minimumOperations([37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 1, 2, 3, 4, 5, 6]), 13, 'Test 100');
test(minimumOperations([9, 18, 27, 36, 45, 54, 63, 72]), 0, 'Test 101');
test(minimumOperations([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108]), 0, 'Test 102');
test(minimumOperations([29, 28, 27, 26, 25, 24, 23, 22, 21]), 6, 'Test 103');
test(minimumOperations([29, 31, 32, 34, 35]), 5, 'Test 104');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 7, 'Test 105');
test(minimumOperations([45, 46, 47, 48, 49, 50, 1, 2, 3, 4]), 7, 'Test 106');
test(minimumOperations([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]), 8, 'Test 107');
test(minimumOperations([2, 4, 8, 10, 14, 16, 20, 22, 26, 28, 32, 34, 38, 40, 44, 46, 50]), 17, 'Test 108');
test(minimumOperations([1, 1, 1, 2, 2, 2, 4, 4, 4, 5, 5, 5, 7, 7, 7, 8, 8, 8]), 18, 'Test 109');
test(minimumOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]), 15, 'Test 110');
test(minimumOperations([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]), 0, 'Test 111');
test(minimumOperations([31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 7, 'Test 112');
test(minimumOperations([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), 8, 'Test 113');
test(minimumOperations([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54]), 0, 'Test 114');
test(minimumOperations([1, 2, 4, 5, 7, 8, 10, 11, 13, 14]), 10, 'Test 115');
test(minimumOperations([1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28, 29, 31, 32, 34, 35, 37, 38, 40, 41, 43, 44, 46, 47, 49]), 33, 'Test 116');
test(minimumOperations([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60]), 10, 'Test 117');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

