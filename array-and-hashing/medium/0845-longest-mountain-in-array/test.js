// Test: 845. Longest Mountain In Array
// 160 test cases from LeetCodeDataset
// Run: node test.js

const { longestMountain } = require("./solution");

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

console.log("\n845. Longest Mountain In Array\n");

test(longestMountain([0,1,2,3,4,5,6,7,8,9,0]), 11, 'Test 1');
test(longestMountain([0,1,0,2,1,0,1,3,2,1]), 5, 'Test 2');
test(longestMountain([5,4,3,2,1]), 0, 'Test 3');
test(longestMountain([1,3,1,4,5,6,7,8,9,8,7,6,5]), 11, 'Test 4');
test(longestMountain([9,8,7,6,5,4,3,2,1,0]), 0, 'Test 5');
test(longestMountain([1,2,3]), 0, 'Test 6');
test(longestMountain([1,2,3,4,3,2,1,0]), 8, 'Test 7');
test(longestMountain([1,3,5,4,2,3,6,7,5]), 5, 'Test 8');
test(longestMountain([1,2,3,1,2,3,4,5,6,4,3,2,1]), 10, 'Test 9');
test(longestMountain([3,3,3,2,1]), 0, 'Test 10');
test(longestMountain([1,2,2,1]), 0, 'Test 11');
test(longestMountain([3,3,3,2,1,2,3,3,3]), 0, 'Test 12');
test(longestMountain([1,2,3,4,5,3,1]), 7, 'Test 13');
test(longestMountain([1,3,1]), 3, 'Test 14');
test(longestMountain([2,1,4,7,3,2,5]), 5, 'Test 15');
test(longestMountain([1,2,2,2,1]), 0, 'Test 16');
test(longestMountain([2,2,2]), 0, 'Test 17');
test(longestMountain([1,3,5,4,2,3,4,5,3,1]), 6, 'Test 18');
test(longestMountain([2,2,2,3,4,5,4,3,2,1,1]), 8, 'Test 19');
test(longestMountain([0,2,1,0]), 4, 'Test 20');
test(longestMountain([1,2,3,4,5]), 0, 'Test 21');
test(longestMountain([1,3,1,4,5,2,1]), 5, 'Test 22');
test(longestMountain([0,1,2,3,4,5,6,7,8,9]), 0, 'Test 23');
test(longestMountain([0,2,1,0,2,0,1,0]), 4, 'Test 24');
test(longestMountain([2,3,3,2,2,2,1]), 0, 'Test 25');
test(longestMountain([1,3,5,7,9,8,7,6,5,4,3,2,1]), 13, 'Test 26');
test(longestMountain([1,2,3,2,1,2,3,4,5,4,3,2,1]), 9, 'Test 27');
test(longestMountain([0,1,2,3,4,5]), 0, 'Test 28');
test(longestMountain([3,3,3,2,1,2,3]), 0, 'Test 29');
test(longestMountain([1,3,2,4,3,5,4,6,5]), 3, 'Test 30');
test(longestMountain([1,2,3,4,3,2,1,0,-1,-2,-1,0,1,2,3,2,1]), 10, 'Test 31');
test(longestMountain([0,2,1,0,2,1,0]), 4, 'Test 32');
test(longestMountain([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5]), 20, 'Test 33');
test(longestMountain([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,3,2,1]), 20, 'Test 34');
test(longestMountain([1,2,3,2,1,2,3,4,5,4,3,2,1,2,3,4,3,2,1]), 9, 'Test 35');
test(longestMountain([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 36');
test(longestMountain([1,2,3,4,3,4,5,6,5,4,3,2,1,0,1,2,3,4,5,4,3,2,1,0]), 11, 'Test 37');
test(longestMountain([1,2,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 38');
test(longestMountain([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3]), 20, 'Test 39');
test(longestMountain([1,2,3,4,5,6,5,4,3,2,1,0,1,2,3,4,5,6,5,4,3,2,1]), 12, 'Test 40');
test(longestMountain([1,2,3,4,3,2,3,4,5,6,5,4,3,2,1,0,1,2,3]), 11, 'Test 41');
test(longestMountain([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 11, 'Test 42');
test(longestMountain([1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,0,1]), 12, 'Test 43');
test(longestMountain([9,8,7,6,5,4,5,6,7,8,9,8,7,6,5]), 10, 'Test 44');
test(longestMountain([0,1,2,3,4,5,4,3,2,1,0,1,2,3,4,3,2,1]), 11, 'Test 45');
test(longestMountain([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,7,6,5,4,3,2,1]), 10, 'Test 46');
test(longestMountain([1,1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1]), 9, 'Test 47');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 48');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0,1,2,3,4,3,2,1]), 18, 'Test 49');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0]), 19, 'Test 50');
test(longestMountain([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,0]), 12, 'Test 51');
test(longestMountain([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5]), 17, 'Test 52');
test(longestMountain([1,2,3,4,5,4,3,2,1,1,2,3,4,3,2,1,0,1,2,3,4,3,2,1]), 9, 'Test 53');
test(longestMountain([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1]), 13, 'Test 54');
test(longestMountain([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 55');
test(longestMountain([1,3,5,7,9,11,13,15,13,11,9,7,5,3,1,3,5,7,9,11]), 15, 'Test 56');
test(longestMountain([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 18, 'Test 57');
test(longestMountain([5,6,7,8,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 18, 'Test 58');
test(longestMountain([3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7]), 15, 'Test 59');
test(longestMountain([1,3,5,7,9,11,9,7,5,3,1,3,5,7,9,11,9,7,5,3,1]), 11, 'Test 60');
test(longestMountain([1,2,3,2,3,4,3,2,3,4,5,4,3,2,3,4,5,6,5,4,3,2,3,4,5,6,7,6,5,4,3,2,1]), 12, 'Test 61');
test(longestMountain([1,2,3,4,5,6,7,8,9,10,11,12,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]), 23, 'Test 62');
test(longestMountain([1,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3]), 5, 'Test 63');
test(longestMountain([1,3,5,4,2,3,4,5,3,1,5,6,7,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 11, 'Test 64');
test(longestMountain([9,8,7,6,5,4,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 15, 'Test 65');
test(longestMountain([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 11, 'Test 66');
test(longestMountain([2,1,4,7,3,2,5,6,8,4,3,2,1]), 8, 'Test 67');
test(longestMountain([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1]), 9, 'Test 68');
test(longestMountain([1,2,3,4,5,4,3,2,1,0,1,2,3,4,5,6,5,4,3,2,1,0,1,2,3,4,5,6,5,4,3,2,1,0]), 13, 'Test 69');
test(longestMountain([8,9,10,11,12,13,12,11,10,9,8,7,6,5,4,3,2,1]), 18, 'Test 70');
test(longestMountain([2,1,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 5, 'Test 71');
test(longestMountain([1,2,3,2,1,0,1,2,3,2,1,0,1,2,3,2,1,0,1,2,3,2,1,0]), 7, 'Test 72');
test(longestMountain([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5]), 15, 'Test 73');
test(longestMountain([1,2,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 17, 'Test 74');
test(longestMountain([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 16, 'Test 75');
test(longestMountain([1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 20, 'Test 76');
test(longestMountain([1,2,3,4,5,4,3,2,3,4,5,6,5,4,3,2,1]), 10, 'Test 77');
test(longestMountain([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 9, 'Test 78');
test(longestMountain([1,3,2,1,2,3,4,5,4,3,2,1,2,3,4,3,2,1]), 9, 'Test 79');
test(longestMountain([5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0]), 19, 'Test 80');
test(longestMountain([5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,0]), 10, 'Test 81');
test(longestMountain([1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5]), 19, 'Test 82');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,0]), 17, 'Test 83');
test(longestMountain([8,9,10,11,12,11,10,9,8,7,6,5,4,3,2,1,0]), 17, 'Test 84');
test(longestMountain([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 17, 'Test 85');
test(longestMountain([1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,4,3,2,1]), 11, 'Test 86');
test(longestMountain([0,1,2,3,4,5,4,3,2,1,0,1,2,3,2,1]), 11, 'Test 87');
test(longestMountain([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 19, 'Test 88');
test(longestMountain([1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 11, 'Test 89');
test(longestMountain([1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3]), 4, 'Test 90');
test(longestMountain([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2]), 20, 'Test 91');
test(longestMountain([1,2,3,4,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 92');
test(longestMountain([1,2,3,4,5,6,5,4,3,2,1,0]), 12, 'Test 93');
test(longestMountain([0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0]), 19, 'Test 94');
test(longestMountain([2,1,4,7,3,2,5,6,8,4,3,1]), 7, 'Test 95');
test(longestMountain([1,3,5,7,9,11,13,15,17,19,17,15,13,11,9,7,5,3,1]), 19, 'Test 96');
test(longestMountain([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 97');
test(longestMountain([1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1]), 13, 'Test 98');
test(longestMountain([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 3, 'Test 99');
test(longestMountain([10,9,8,7,6,5,6,7,8,9,10,9,8,7,6,5,6,7,8,9,10]), 11, 'Test 100');
test(longestMountain([1,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 11, 'Test 101');
test(longestMountain([1,2,3,4,3,2,1,2,3,4,5,4,3,2,1]), 9, 'Test 102');
test(longestMountain([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5]), 20, 'Test 103');
test(longestMountain([1,1,1,2,3,4,5,4,3,2,1,1,1,2,3,4,5,4,3,2,1]), 9, 'Test 104');
test(longestMountain([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1]), 9, 'Test 105');
test(longestMountain([1,2,3,4,5,4,3,2,1,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 17, 'Test 106');
test(longestMountain([0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 107');
test(longestMountain([5,4,3,2,1,0,1,2,3,4,5,4,3,2,1,0,1,2,3,4,5,6,5,4,3,2,1,0]), 13, 'Test 108');
test(longestMountain([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5]), 19, 'Test 109');
test(longestMountain([0,1,2,3,2,1,0,1,2,3,4,3,2,1,0,1,2,3,4,5,4,3,2,1]), 10, 'Test 110');
test(longestMountain([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 17, 'Test 111');
test(longestMountain([0,1,2,3,4,5,6,5,4,3,2,1,0]), 13, 'Test 112');
test(longestMountain([1,3,5,7,9,11,13,15,17,15,13,11,9,7,5,3,1,3,5,7,9,11,13,15,17,15,13,11,9,7,5,3,1]), 17, 'Test 113');
test(longestMountain([1,2,3,4,5,6,5,4,3,2,1,0,1,2,3,2,1]), 12, 'Test 114');
test(longestMountain([1,2,3,4,5,4,3,4,5,6,5,4,3,4,5,6,7,6,5,4,3,4,5,6,7,8,7,6,5,4,3,2,1]), 13, 'Test 115');
test(longestMountain([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 9, 'Test 116');
test(longestMountain([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,2,1]), 9, 'Test 117');
test(longestMountain([1,3,5,7,9,7,5,3,1,3,5,7,9,7,5,3,1,3,5,7,9,7,5,3,1]), 9, 'Test 118');
test(longestMountain([1,2,3,2,1,1,2,3,2,1,1,2,3,2,1,1,2,3,2,1]), 5, 'Test 119');
test(longestMountain([0,1,2,3,4,5,4,3,2,1,0,1,2,3,2,1,0]), 11, 'Test 120');
test(longestMountain([2,1,4,7,3,2,5,8,6,5,4,3,2,1,0]), 10, 'Test 121');
test(longestMountain([1,2,3,4,5,4,3,2,1,0,1,2,3,4,3,2,1,0,1,2,3,4,3,2,1]), 10, 'Test 122');
test(longestMountain([1,2,3,2,1,0,1,2,3,4,3,2,1,0,1,2,3,2,1,0,1,2,3,4,3,2,1]), 9, 'Test 123');
test(longestMountain([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9]), 11, 'Test 124');
test(longestMountain([1,2,3,4,5,6,5,4,3,2,1,0,1,2,3,4,5,6,5,4,3,2,1,0]), 13, 'Test 125');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0]), 18, 'Test 126');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 17, 'Test 127');
test(longestMountain([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1]), 7, 'Test 128');
test(longestMountain([5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,4,3,2,1]), 11, 'Test 129');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 130');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), 18, 'Test 131');
test(longestMountain([1,2,3,2,1,0,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5]), 11, 'Test 132');
test(longestMountain([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 5, 'Test 133');
test(longestMountain([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 3, 'Test 134');
test(longestMountain([5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5]), 15, 'Test 135');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6]), 17, 'Test 136');
test(longestMountain([1,3,5,7,9,11,9,7,5,3,1,3,5,7,9,7,5,3,1,3,5,7,9,7,5,3,1]), 11, 'Test 137');
test(longestMountain([1,3,5,7,9,11,13,15,17,19,21,19,17,15,13,11,9,7,5,3,1,3,5,7,9,7,5,3,1]), 21, 'Test 138');
test(longestMountain([1,2,3,4,5,6,5,4,3,2,1,0,1,2,3,4,5]), 12, 'Test 139');
test(longestMountain([3,3,3,3,2,1,2,3,3,3,3,2,1,2,3,3,3,3,2,1]), 0, 'Test 140');
test(longestMountain([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991,9990,9989,9988,9987,9986,9985,9984,9983,9982,9981,9980]), 0, 'Test 141');
test(longestMountain([1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,0]), 12, 'Test 142');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 17, 'Test 143');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,8,7,6]), 18, 'Test 144');
test(longestMountain([1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 11, 'Test 145');
test(longestMountain([5,6,7,8,9,8,7,6,5,4,3,2,1,0]), 14, 'Test 146');
test(longestMountain([5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 17, 'Test 147');
test(longestMountain([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4]), 20, 'Test 148');
test(longestMountain([2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), 9, 'Test 149');
test(longestMountain([1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), 9, 'Test 150');
test(longestMountain([5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5]), 16, 'Test 151');
test(longestMountain([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 20, 'Test 152');
test(longestMountain([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5]), 18, 'Test 153');
test(longestMountain([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,7,6,5,4,3,5,4,3,2,1,0]), 8, 'Test 154');
test(longestMountain([1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 9, 'Test 155');
test(longestMountain([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 156');
test(longestMountain([1,2,3,4,5,4,3,2,3,4,3,2,1,0,1,2,3,2,1,0]), 8, 'Test 157');
test(longestMountain([1,2,3,4,3,2,1,0,1,2,3,4,3,2,1,0,1,2,3,4,3,2,1,0,1,2,3,4,5]), 9, 'Test 158');
test(longestMountain([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0,1,2,3]), 19, 'Test 159');
test(longestMountain([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,3,2,1,0]), 11, 'Test 160');

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
