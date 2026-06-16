// Test: 1130. Minimum Cost Tree From Leaf Values
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { mctFromLeafValues } = require("./solution");

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

console.log("\n1130. Minimum Cost Tree From Leaf Values\n");

test(mctFromLeafValues([1,2,3,4]), 20, 'Test 1');
test(mctFromLeafValues([3,2,1]), 8, 'Test 2');
test(mctFromLeafValues([15,13,5,3,15]), 500, 'Test 3');
test(mctFromLeafValues([4,11]), 44, 'Test 4');
test(mctFromLeafValues([7,12,8,10]), 284, 'Test 5');
test(mctFromLeafValues([3,5,6,2,5]), 85, 'Test 6');
test(mctFromLeafValues([7,10,2,8,1]), 174, 'Test 7');
test(mctFromLeafValues([8,12,15,2,5,7]), 426, 'Test 8');
test(mctFromLeafValues([1,2,3,4,5]), 40, 'Test 9');
test(mctFromLeafValues([6,2,4]), 32, 'Test 10');
test(mctFromLeafValues([3,5,1,2,4]), 45, 'Test 11');
test(mctFromLeafValues([15,13,5,3,16,17,18]), 1093, 'Test 12');
test(mctFromLeafValues([2,3,1,4]), 21, 'Test 13');
test(mctFromLeafValues([3,5,2,1,4]), 45, 'Test 14');
test(mctFromLeafValues([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1120, 'Test 15');
test(mctFromLeafValues([5,4,7,2,11,6]), 212, 'Test 16');
test(mctFromLeafValues([15,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 1120, 'Test 17');
test(mctFromLeafValues([5, 7, 8, 6, 2, 3]), 163, 'Test 18');
test(mctFromLeafValues([5,4,3,2,1,6,7]), 112, 'Test 19');
test(mctFromLeafValues([5,2,3,1,4,6,7]), 113, 'Test 20');
test(mctFromLeafValues([8,7,6,5,4,3,2,1]), 168, 'Test 21');
test(mctFromLeafValues([13, 15, 7, 9, 8, 11, 14, 12, 5, 6, 2, 3, 1, 4, 10]), 1216, 'Test 22');
test(mctFromLeafValues([13, 7, 11, 10, 15, 2, 1, 12, 8, 6, 5, 9, 3, 4]), 1037, 'Test 23');
test(mctFromLeafValues([5, 10, 9, 2, 3, 15, 12, 8]), 599, 'Test 24');
test(mctFromLeafValues([7,1,9,8,4,2,5]), 210, 'Test 25');
test(mctFromLeafValues([9,8,7,6,5,4,3,2,1,10,11,12,13,14,15]), 1120, 'Test 26');
test(mctFromLeafValues([15,9,5,6,11,8,12,13,14,7,10,4,3,2,1]), 1221, 'Test 27');
test(mctFromLeafValues([12, 4, 6, 1, 5, 9, 7]), 284, 'Test 28');
test(mctFromLeafValues([11, 13, 10, 9, 2, 15, 5, 12, 7, 14]), 1098, 'Test 29');
test(mctFromLeafValues([2,3,5,7,11,13,17,19]), 820, 'Test 30');
test(mctFromLeafValues([10, 12, 7, 5, 4, 1, 6]), 300, 'Test 31');
test(mctFromLeafValues([5,10,15,20,25,30,35,40]), 4200, 'Test 32');
test(mctFromLeafValues([5,3,2,7,9,10,8]), 289, 'Test 33');
test(mctFromLeafValues([13,5,1,12,8,9]), 401, 'Test 34');
test(mctFromLeafValues([7,6,5,4,3,2,1,10,9,8,11,12,13,14,15]), 1134, 'Test 35');
test(mctFromLeafValues([2, 1, 3, 4, 5, 6, 7]), 112, 'Test 36');
test(mctFromLeafValues([10, 5, 15, 3, 8, 7]), 400, 'Test 37');
test(mctFromLeafValues([10, 1, 14, 7, 13, 3, 5, 2, 8, 6, 4, 9, 11, 12]), 1019, 'Test 38');
test(mctFromLeafValues([8,3,9,6,1,10,2]), 266, 'Test 39');
test(mctFromLeafValues([7, 11, 14, 13, 5, 15, 10]), 838, 'Test 40');
test(mctFromLeafValues([13, 7, 12, 1, 8, 5, 9, 4]), 504, 'Test 41');
test(mctFromLeafValues([3,1,4,1,5,9,2,6,5,3,5,9]), 301, 'Test 42');
test(mctFromLeafValues([2,3,4,5,6,7,8,9,10,1,11,12,13,14,15,16,17,18,19,20]), 2668, 'Test 43');
test(mctFromLeafValues([8, 5, 1, 9, 2, 4, 3, 10, 6, 7, 11, 12, 14, 13, 15]), 1177, 'Test 44');
test(mctFromLeafValues([3, 15, 2, 8, 9, 11, 5, 10, 7, 6, 12, 4]), 864, 'Test 45');
test(mctFromLeafValues([10,5,15,20,12]), 740, 'Test 46');
test(mctFromLeafValues([1,3,2,6,8,5,4,7,9,10]), 348, 'Test 47');
test(mctFromLeafValues([10, 20, 30, 40, 50, 60, 70, 80]), 16800, 'Test 48');
test(mctFromLeafValues([2, 15, 8, 3, 10, 6, 7, 4, 11, 1, 9, 5, 12, 14, 13]), 1229, 'Test 49');
test(mctFromLeafValues([13,15,1,5,3]), 290, 'Test 50');
test(mctFromLeafValues([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 4046, 'Test 51');
test(mctFromLeafValues([3,4,5,2,6,7,8,1]), 178, 'Test 52');
test(mctFromLeafValues([10,20,30,40,50,60,70,80,90,100]), 33000, 'Test 53');
test(mctFromLeafValues([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 480, 'Test 54');
test(mctFromLeafValues([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 220, 'Test 55');
test(mctFromLeafValues([9,7,5,3,1,2,4,6,8,10]), 330, 'Test 56');
test(mctFromLeafValues([10,2,5,1,3]), 78, 'Test 57');
test(mctFromLeafValues([11, 6, 5, 9, 3, 8, 2, 4, 7]), 371, 'Test 58');
test(mctFromLeafValues([14, 10, 1, 2, 15, 12, 8]), 648, 'Test 59');
test(mctFromLeafValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 1120, 'Test 60');
test(mctFromLeafValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 1120, 'Test 61');
test(mctFromLeafValues([12,7,11,14,10,13,6]), 767, 'Test 62');
test(mctFromLeafValues([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 19, 'Test 63');
test(mctFromLeafValues([5,1,3,2,10,7,4]), 172, 'Test 64');
test(mctFromLeafValues([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 30, 'Test 65');
test(mctFromLeafValues([5, 3, 8, 6, 2, 4, 1, 9]), 211, 'Test 66');
test(mctFromLeafValues([7,14,4,14,13,2,6,13]), 791, 'Test 67');
test(mctFromLeafValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 330, 'Test 68');
test(mctFromLeafValues([10,20,30,40,50,60,70,80,90]), 24000, 'Test 69');
test(mctFromLeafValues([5, 3, 8, 1, 4, 7]), 143, 'Test 70');
test(mctFromLeafValues([13,12,8,14,15,16,17,1,2,3,4,5,6,7,9,10,11]), 1718, 'Test 71');
test(mctFromLeafValues([6,9,4,10,5,8,7,3,11,1,12,2,13,14,15]), 1202, 'Test 72');
test(mctFromLeafValues([1,15,2,14,3,13,4,12,5,11,6,10,7,9,8]), 1260, 'Test 73');
test(mctFromLeafValues([2,4,6,8,10,12,14,16,18,20]), 1320, 'Test 74');
test(mctFromLeafValues([13, 15, 1, 7, 2]), 321, 'Test 75');
test(mctFromLeafValues([8,3,1,14,10,6,7,2,13,9,5,4,11,12]), 1029, 'Test 76');
test(mctFromLeafValues([1, 15, 2, 14, 3, 13, 4, 12, 5, 11, 6, 10, 7, 9]), 1188, 'Test 77');
test(mctFromLeafValues([12, 15, 8, 3, 10, 6]), 494, 'Test 78');
test(mctFromLeafValues([15, 13, 11, 9, 7, 5, 3, 1]), 553, 'Test 79');
test(mctFromLeafValues([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1120, 'Test 80');
test(mctFromLeafValues([15, 10, 2, 3, 5, 1, 8, 6, 14, 7]), 642, 'Test 81');
test(mctFromLeafValues([15, 8, 3, 10, 6, 7, 4, 11, 1, 9, 2, 12, 5, 14, 13]), 1232, 'Test 82');
test(mctFromLeafValues([3, 5, 1, 9, 2, 4, 8, 10, 6, 7, 11, 12, 14, 13, 15]), 1181, 'Test 83');
test(mctFromLeafValues([2,9,3,5,6,4]), 141, 'Test 84');
test(mctFromLeafValues([8, 5, 3, 2, 4, 6, 7]), 166, 'Test 85');
test(mctFromLeafValues([1, 3, 5, 7, 9, 11, 13, 15]), 553, 'Test 86');
test(mctFromLeafValues([10,6,8,3,4,12,5,14]), 520, 'Test 87');
test(mctFromLeafValues([7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 2548, 'Test 88');
test(mctFromLeafValues([1,5,2,3,6,4,7]), 122, 'Test 89');
test(mctFromLeafValues([8,5,9,3,6]), 184, 'Test 90');
test(mctFromLeafValues([7, 4, 9, 2, 5, 1, 8]), 218, 'Test 91');
test(mctFromLeafValues([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 800, 'Test 92');
test(mctFromLeafValues([9, 8, 7, 6, 5, 4, 3, 2, 1]), 240, 'Test 93');
test(mctFromLeafValues([8, 6, 10, 5, 12, 9, 7, 3, 11, 1, 4]), 661, 'Test 94');
test(mctFromLeafValues([12, 7, 4, 9, 2, 8, 5, 3]), 342, 'Test 95');
test(mctFromLeafValues([10, 15, 1, 2, 18, 9, 6]), 668, 'Test 96');
test(mctFromLeafValues([7, 6, 8, 2, 10, 5, 1, 3, 9, 4]), 383, 'Test 97');
test(mctFromLeafValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 1360, 'Test 98');
test(mctFromLeafValues([6, 9, 3, 7, 5, 1, 4]), 197, 'Test 99');
test(mctFromLeafValues([6, 5, 8, 10, 3, 9, 1, 14, 13, 2, 4, 7, 11, 12, 15]), 1217, 'Test 100');
test(mctFromLeafValues([4, 7, 10, 2, 13, 15, 5, 3, 8, 6, 9, 1, 14, 12, 11]), 1263, 'Test 101');
test(mctFromLeafValues([8, 9, 3, 8, 15, 2]), 333, 'Test 102');
test(mctFromLeafValues([1,100,1,100,1,100]), 20300, 'Test 103');
test(mctFromLeafValues([11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 3831, 'Test 104');
test(mctFromLeafValues([8, 3, 6, 1, 4, 7, 10, 2, 9, 5]), 377, 'Test 105');
test(mctFromLeafValues([8,9,10,7,6,5,4,3,2,1]), 344, 'Test 106');
test(mctFromLeafValues([5,3,8,6,2,4,7,1,10,9]), 362, 'Test 107');
test(mctFromLeafValues([7, 8, 6, 5, 4, 3, 2, 1]), 174, 'Test 108');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

