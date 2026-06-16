// Test: 26. Remove Duplicates From Sorted Array
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { removeDuplicates } = require("./solution");

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

console.log("\n26. Remove Duplicates From Sorted Array\n");

test(removeDuplicates([0,0,0,0,0,0,0,0,0,0]), 1, 'Test 1');
test(removeDuplicates([-100,0,100]), 3, 'Test 2');
test(removeDuplicates([1,2,2,3,4,4,4,5]), 5, 'Test 3');
test(removeDuplicates([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 4');
test(removeDuplicates([1]), 1, 'Test 5');
test(removeDuplicates([0,1,1,2,2,2,3,3,3,3,4,4,4,4,4]), 5, 'Test 6');
test(removeDuplicates([-1,-1,-1,-1,-1]), 1, 'Test 7');
test(removeDuplicates([-1,-1,0,0,1,1,2]), 4, 'Test 8');
test(removeDuplicates([-10,-10,-9,-9,-8,-7,-6,-6,-6,-5]), 6, 'Test 9');
test(removeDuplicates([-100,-100,-50,-50,0,0,50,50,100,100]), 5, 'Test 10');
test(removeDuplicates([0,0,0,0,0]), 1, 'Test 11');
test(removeDuplicates([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 10, 'Test 12');
test(removeDuplicates([1,1,1,1,1,1,1]), 1, 'Test 13');
test(removeDuplicates([1,2,3,4,5]), 5, 'Test 14');
test(removeDuplicates([1,1,2]), 2, 'Test 15');
test(removeDuplicates([1,2,2,3,4,4,5]), 5, 'Test 16');
test(removeDuplicates([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 17');
test(removeDuplicates([-1,0,0,1,1,2,2,3,3,4,4,5,5]), 7, 'Test 18');
test(removeDuplicates([-100,-100,-99,-99,0,0,1,1,2,2,3,3]), 6, 'Test 19');
test(removeDuplicates([-100,100]), 2, 'Test 20');
test(removeDuplicates([0,0,1,1,1,2,2,3,3,4]), 5, 'Test 21');
test(removeDuplicates([0,0,0,1,1,2,2,2,3,3,3,4,4,4,4]), 5, 'Test 22');
test(removeDuplicates([-1,-1,0,0,1,2,2,3,4]), 6, 'Test 23');
test(removeDuplicates([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), 15, 'Test 24');
test(removeDuplicates([1,1,1,2,2,3,3,3,3,4,4,4,5,5,5,5,5,6,6,7,7,8,8,9,9,9,9]), 9, 'Test 25');
test(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 8, 8]), 8, 'Test 26');
test(removeDuplicates([0, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7, 8, 8, 9, 10, 10, 10]), 11, 'Test 27');
test(removeDuplicates([1,2,2,3,3,4,4,5,5,5,6,6,6,6,7,7,8,8,8,9,9]), 9, 'Test 28');
test(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4]), 4, 'Test 29');
test(removeDuplicates([-100, -99, -98, -98, -97, -97, -96, -95, -94, -94, -93, -92, -91, -90, -89, -89, -88, -87, -86, -85]), 16, 'Test 30');
test(removeDuplicates([-1, -1, 0, 0, 0, 0, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9, 10]), 12, 'Test 31');
test(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]), 5, 'Test 32');
test(removeDuplicates([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 9, 'Test 33');
test(removeDuplicates([1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,7,7,7,8,8,8,9,9,10,10]), 10, 'Test 34');
test(removeDuplicates([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]), 7, 'Test 35');
test(removeDuplicates([-10, -10, -9, -9, -8, -8, -7, -7, -6, -6, -5, -5, -4, -4, -3, -3, -2, -2, -1, -1]), 10, 'Test 36');
test(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 37');
test(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 38');
test(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2]), 2, 'Test 39');
test(removeDuplicates([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 40');
test(removeDuplicates([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 10, 'Test 41');
test(removeDuplicates([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 42');
test(removeDuplicates([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]), 21, 'Test 43');
test(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10]), 10, 'Test 44');
test(removeDuplicates([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 2, 'Test 45');
test(removeDuplicates([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 15, 'Test 46');
test(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8]), 8, 'Test 47');
test(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20]), 20, 'Test 48');
test(removeDuplicates([-100, -100, -50, -50, -50, -50, -50, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 100, 100, 100, 100, 100]), 5, 'Test 49');
test(removeDuplicates([0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10]), 11, 'Test 50');
test(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 51');
test(removeDuplicates([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10]), 10, 'Test 52');
test(removeDuplicates([1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10]), 10, 'Test 53');
test(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 10, 'Test 54');
test(removeDuplicates([-10, -10, -5, -5, -1, 0, 0, 0, 3, 3, 3, 3, 3, 5, 5, 8]), 7, 'Test 55');
test(removeDuplicates([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9]), 9, 'Test 56');
test(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10]), 10, 'Test 57');
test(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 10, 'Test 58');
test(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 9, 10, 10, 10]), 10, 'Test 59');
test(removeDuplicates([-100, -50, 0, 50, 100]), 5, 'Test 60');
test(removeDuplicates([-100, -100, -50, -50, 0, 0, 0, 10, 10, 20, 20, 20, 50, 50, 100, 100]), 7, 'Test 61');
test(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3]), 3, 'Test 62');
test(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 63');
test(removeDuplicates([-1, -1, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 11, 'Test 64');
test(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10]), 10, 'Test 65');
test(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7]), 7, 'Test 66');
test(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5]), 5, 'Test 67');
test(removeDuplicates([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4]), 5, 'Test 68');
test(removeDuplicates([1,1,1,2,3,3,3,4,4,5,6,6,6,7,8,8,9,10,10,11]), 11, 'Test 69');
test(removeDuplicates([-50, -50, -50, -25, -25, -25, 0, 0, 25, 25, 50, 50, 50]), 5, 'Test 70');
test(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10, 10, 10, 10]), 10, 'Test 71');
test(removeDuplicates([-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 16, 'Test 72');
test(removeDuplicates([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 10, 'Test 73');
test(removeDuplicates([1,1,1,2,2,2,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,8,9,9,9,10,10,10,10,10]), 10, 'Test 74');
test(removeDuplicates([1,1,1,1,2,2,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,7,7,8,8,9,9,10,10,10,10]), 10, 'Test 75');
test(removeDuplicates([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 76');
test(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 77');
test(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9]), 9, 'Test 78');
test(removeDuplicates([-1, -1, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3]), 5, 'Test 79');
test(removeDuplicates([0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 6, 'Test 80');
test(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 30, 'Test 81');
test(removeDuplicates([-1,-1,-1,0,0,0,1,1,1,2,2,3,3,4,4,5,5,5,6,6,7,8,8,9,9,9,10,10,10]), 12, 'Test 82');
test(removeDuplicates([-100, -100, -50, -50, 0, 0, 50, 50, 100, 100]), 5, 'Test 83');
test(removeDuplicates([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1, 'Test 84');
test(removeDuplicates([0,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,5,5,5,5,5,6]), 7, 'Test 85');
test(removeDuplicates([-5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, 0, 0, 0, 1, 2, 3, 4, 5]), 7, 'Test 86');
test(removeDuplicates([-10,-5,-3,-3,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 16, 'Test 87');
test(removeDuplicates([0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8, 9, 9]), 10, 'Test 88');
test(removeDuplicates([1,2,3,3,3,4,5,5,6,6,6,6,7,8,8,8,9,9,9,9,9,10,10,10,10]), 10, 'Test 89');
test(removeDuplicates([0,0,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,6,6,7,8,8,9,9]), 10, 'Test 90');
test(removeDuplicates([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 1, 'Test 91');
test(removeDuplicates([-100,-50,-50,-50,-25,-10,0,0,0,0,5,10,10,25,50,50,50,100,100]), 10, 'Test 92');
test(removeDuplicates([0,1,2,2,3,3,4,5,5,5,6,7,8,8,9,10,10,10,10]), 11, 'Test 93');
test(removeDuplicates([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1, 'Test 94');
test(removeDuplicates([1,2,3,3,4,5,5,5,6,7,7,7,7,8,8,8,8,8,9,9,9,9,10,10,10,10,10,10]), 10, 'Test 95');
test(removeDuplicates([-5, -5, -5, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]), 14, 'Test 96');
test(removeDuplicates([1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,7,7,8,8,9,9,10,10,10,10,10]), 10, 'Test 97');
test(removeDuplicates([-5,-4,-4,-3,-2,-2,-1,0,1,2,2,2,3,3,4,4,4,5,6,7,8,8,9,10]), 16, 'Test 98');
test(removeDuplicates([-5, -4, -4, -4, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4]), 10, 'Test 99');
test(removeDuplicates([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1, 'Test 100');
test(removeDuplicates([-100, -100, -99, -98, -98, -97, -97, -97, -96]), 5, 'Test 101');
test(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 102');
test(removeDuplicates([-100,-100,-50,-50,0,0,0,50,50,50,100,100]), 5, 'Test 103');
test(removeDuplicates([-1, -1, -1, -1, -1, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 7, 'Test 104');
test(removeDuplicates([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11]), 2, 'Test 105');
test(removeDuplicates([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 1, 'Test 106');
test(removeDuplicates([-1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 8, 9, 10]), 12, 'Test 107');
test(removeDuplicates([-1, -1, 0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10]), 12, 'Test 108');
test(removeDuplicates([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 109');
test(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4]), 4, 'Test 110');
test(removeDuplicates([1,2,2,3,3,3,4,4,4,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 10, 'Test 111');
test(removeDuplicates([-100, -100, -50, -50, 0, 0, 0, 50, 50, 100, 100]), 5, 'Test 112');
test(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 12, 13, 14, 15, 15, 16, 17]), 17, 'Test 113');
test(removeDuplicates([-10,-10,-10,-10,-10,-9,-9,-9,-8,-8,-7,-7,-6,-6,-5,-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3]), 14, 'Test 114');
test(removeDuplicates([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 115');
test(removeDuplicates([1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9]), 9, 'Test 116');
test(removeDuplicates([1,1,1,1,1,1,2,2,2,3,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10]), 10, 'Test 117');
test(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 10, 11, 11, 12, 12]), 12, 'Test 118');
test(removeDuplicates([-100,-50,-50,-25,-25,-10,-10,0,0,50,50,100,100]), 7, 'Test 119');
test(removeDuplicates([-100, -50, -50, 0, 0, 0, 25, 25, 50, 75, 75, 100]), 7, 'Test 120');
test(removeDuplicates([-100,-99,-98,-97,-96,-95,-95,-95,-94,-93,-92,-91,-90,-89,-88,-87,-86,-85,-84,-83]), 18, 'Test 121');
test(removeDuplicates([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6]), 6, 'Test 122');
test(removeDuplicates([1,1,1,2,2,3,4,4,5,5,5,6,6,7,8,8,9,9,10,10]), 10, 'Test 123');
test(removeDuplicates([-100, -99, -98, -97, -96, -95, -94, -93, -92, -91, -90, -89, -88, -87, -86, -85, -84, -83, -82, -81]), 20, 'Test 124');
test(removeDuplicates([-10, -10, -9, -9, -8, -8, -7, -7, -6, -6, -5, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 21, 'Test 125');
test(removeDuplicates([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,7,8,9,10]), 10, 'Test 126');
test(removeDuplicates([-50,-50,-50,-25,-25,-25,-10,-10,-10,0,0,0,50,50,50,100,100,100]), 6, 'Test 127');

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
