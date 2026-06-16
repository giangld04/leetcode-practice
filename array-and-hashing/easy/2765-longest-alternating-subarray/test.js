// Test: 2765. Longest Alternating Subarray
// 157 test cases from LeetCodeDataset
// Run: node test.js

const { alternatingSubarray } = require("./solution");

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

console.log("\n2765. Longest Alternating Subarray\n");

test(alternatingSubarray([6,5,4,3,2,1]), -1, 'Test 1');
test(alternatingSubarray([10,9,8,9,8,9,10]), 4, 'Test 2');
test(alternatingSubarray([3,2,1,2,1,2,3,2,1]), 4, 'Test 3');
test(alternatingSubarray([1,3,5,7,9,11,13,15]), -1, 'Test 4');
test(alternatingSubarray([2,2,2,3,4,3,2,3,4]), 3, 'Test 5');
test(alternatingSubarray([2,3,4,3,4]), 4, 'Test 6');
test(alternatingSubarray([5,4,5,4,5]), 4, 'Test 7');
test(alternatingSubarray([2,1,2,1,2]), 4, 'Test 8');
test(alternatingSubarray([10,9,10,9,10]), 4, 'Test 9');
test(alternatingSubarray([1,2,3,4,5,6,7,8,9,10]), 2, 'Test 10');
test(alternatingSubarray([10,9,10,9,10,9]), 5, 'Test 11');
test(alternatingSubarray([5,4,5,4,5,4,5,4,5,4]), 9, 'Test 12');
test(alternatingSubarray([5,6,7,8,7,6,7,8]), 3, 'Test 13');
test(alternatingSubarray([5,6,7,8,9,10,9,8,7,6]), 3, 'Test 14');
test(alternatingSubarray([1,3,2,3,2,3]), 4, 'Test 15');
test(alternatingSubarray([10,9,8,7,6,5]), -1, 'Test 16');
test(alternatingSubarray([1,3,2,3,2,3,2]), 5, 'Test 17');
test(alternatingSubarray([3,2,3,2,3,2,3]), 6, 'Test 18');
test(alternatingSubarray([1,3,2,3,2,3,4,3,2]), 4, 'Test 19');
test(alternatingSubarray([1,2,1,2,1,2,1]), 7, 'Test 20');
test(alternatingSubarray([1,1,1,1,1]), -1, 'Test 21');
test(alternatingSubarray([1,2,3,4,5,6]), 2, 'Test 22');
test(alternatingSubarray([2,1,2,1,2,1,2,1,2]), 8, 'Test 23');
test(alternatingSubarray([2,1,2,1,2,1,2,1]), 7, 'Test 24');
test(alternatingSubarray([10,9,10,9,10,9,10]), 6, 'Test 25');
test(alternatingSubarray([1,2,3,2,3,4,3]), 4, 'Test 26');
test(alternatingSubarray([3,4,5,6,5,4,3,2,3,4,5,6]), 3, 'Test 27');
test(alternatingSubarray([1,2,3,4,5,6,7,8]), 2, 'Test 28');
test(alternatingSubarray([4,5,6]), 2, 'Test 29');
test(alternatingSubarray([1,2,2,3,4,3,2,1]), 3, 'Test 30');
test(alternatingSubarray([1,3,2,3,2,3,4]), 4, 'Test 31');
test(alternatingSubarray([1,2,3,2,3,4,3,4]), 4, 'Test 32');
test(alternatingSubarray([1,1,1,1,1,1]), -1, 'Test 33');
test(alternatingSubarray([10,11,10,11,12,13,12,11,12,11,10]), 4, 'Test 34');
test(alternatingSubarray([9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10]), 18, 'Test 35');
test(alternatingSubarray([1,2,3,2,3,4,3,4,5,6,5,6,7,8,7,8,9]), 4, 'Test 36');
test(alternatingSubarray([7,8,9,10,9,8,9,10,9,8,9,10,9,8,9]), 3, 'Test 37');
test(alternatingSubarray([10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10]), 18, 'Test 38');
test(alternatingSubarray([3,4,3,4,3,4,5,4,3,4,3,4,5,4,3]), 6, 'Test 39');
test(alternatingSubarray([3,4,5,6,5,4,3,4,5,6,5,4,3,4,5,6,5,4,3,4,5,6,5,4,3]), 3, 'Test 40');
test(alternatingSubarray([10,11,10,11,12,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,4]), 4, 'Test 41');
test(alternatingSubarray([10,11,12,11,10,11,12,13,14,15,16,17,18,17,16,15,14,13,12,11,10]), 3, 'Test 42');
test(alternatingSubarray([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2]), 3, 'Test 43');
test(alternatingSubarray([10,11,10,11,10,11,12,11,10,11,12]), 6, 'Test 44');
test(alternatingSubarray([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2]), 19, 'Test 45');
test(alternatingSubarray([1,2,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1]), 3, 'Test 46');
test(alternatingSubarray([10,11,10,11,10,11,12,11,12,11,12,11,12,11,12,11,12,11,12]), 14, 'Test 47');
test(alternatingSubarray([5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5]), 3, 'Test 48');
test(alternatingSubarray([100,101,102,103,102,103,102,103,102,103,102,103,102]), 11, 'Test 49');
test(alternatingSubarray([5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6]), 26, 'Test 50');
test(alternatingSubarray([2, 1, 2, 3, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2]), 5, 'Test 51');
test(alternatingSubarray([3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3]), 33, 'Test 52');
test(alternatingSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), -1, 'Test 53');
test(alternatingSubarray([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1]), 3, 'Test 54');
test(alternatingSubarray([1,2,3,4,3,2,1,2,3,4,5,4,3,2,1]), 3, 'Test 55');
test(alternatingSubarray([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15,14]), -1, 'Test 56');
test(alternatingSubarray([8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9]), 20, 'Test 57');
test(alternatingSubarray([1,3,2,3,4,3,2,3,4,5,6,5,4,3,4,5]), 3, 'Test 58');
test(alternatingSubarray([10,11,10,11,12,11,12,13,12,13,14]), 4, 'Test 59');
test(alternatingSubarray([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 23, 'Test 60');
test(alternatingSubarray([2,3,4,5,6,7,6,5,4,3,2,3,4,5,6,7,6,5,4,3]), 3, 'Test 61');
test(alternatingSubarray([3,4,5,4,3,2,3,4,5,6,5,4,5,6,7,8,7,6,7,8,9,10]), 3, 'Test 62');
test(alternatingSubarray([1,2,3,4,5,4,5,4,3,2,1,2,3,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1]), 5, 'Test 63');
test(alternatingSubarray([8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8]), 35, 'Test 64');
test(alternatingSubarray([1,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2]), 4, 'Test 65');
test(alternatingSubarray([2,3,4,5,6,5,4,3,4,5,6,5,4,3,4,5,6,5,4,3,4,5,6,5,4]), 3, 'Test 66');
test(alternatingSubarray([1, 3, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5]), 4, 'Test 67');
test(alternatingSubarray([1,1,2,1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3]), 4, 'Test 68');
test(alternatingSubarray([1,2,3,2,1,2,3,4,3,2,1,0]), 3, 'Test 69');
test(alternatingSubarray([10,11,12,11,10,9,10,11,12,11,10,9,8,7,6,7,8,9]), 3, 'Test 70');
test(alternatingSubarray([7, 8, 7, 8, 7, 8, 9, 8, 9, 8, 7, 8, 7, 6, 7, 8, 7]), 6, 'Test 71');
test(alternatingSubarray([5,6,7,6,7,8,7,8,9,8,9]), 4, 'Test 72');
test(alternatingSubarray([4,5,6,5,4,3,4,5,6,5,4,3,4,5,6,5,4,3,4,5,6,5,4,3,4,5,6]), 3, 'Test 73');
test(alternatingSubarray([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 2, 'Test 74');
test(alternatingSubarray([7,8,7,8,9,8,7,8,9,10,9,8,7,8,9,10,11,10,9,8]), 4, 'Test 75');
test(alternatingSubarray([3,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5]), 4, 'Test 76');
test(alternatingSubarray([5,6,5,6,5,6,7,8,7,8,9,10,9,10,9,8,7,6,5]), 6, 'Test 77');
test(alternatingSubarray([15,16,17,18,19,20,21,20,19,18,17,16,17,18,19,20,19,18,17,16,15,16,17]), 3, 'Test 78');
test(alternatingSubarray([7,8,7,6,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1]), 3, 'Test 79');
test(alternatingSubarray([9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9]), 24, 'Test 80');
test(alternatingSubarray([7,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8,9,8]), 19, 'Test 81');
test(alternatingSubarray([1,2,3,2,1,2,3,4,3,2,1,2,3]), 3, 'Test 82');
test(alternatingSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 32, 'Test 83');
test(alternatingSubarray([1,2,3,2,3,4,5,4,5,6]), 4, 'Test 84');
test(alternatingSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 18, 'Test 85');
test(alternatingSubarray([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 18, 'Test 86');
test(alternatingSubarray([10, 11, 10, 11, 10, 11, 12, 11, 12, 11]), 6, 'Test 87');
test(alternatingSubarray([2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3]), 3, 'Test 88');
test(alternatingSubarray([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4]), 3, 'Test 89');
test(alternatingSubarray([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1]), 3, 'Test 90');
test(alternatingSubarray([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3]), 3, 'Test 91');
test(alternatingSubarray([1,3,5,3,5,3,5,3,5,3,5,3,5,3,5,3,5,3,5,3]), -1, 'Test 92');
test(alternatingSubarray([2, 3, 2, 1, 2, 1, 2, 3, 4, 5, 4, 3, 4, 5, 6, 7, 8, 7]), 4, 'Test 93');
test(alternatingSubarray([7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7]), 21, 'Test 94');
test(alternatingSubarray([1,3,2,3,4,3,5,6,5,7,8,7,9,10,9,11,12,11,13]), 3, 'Test 95');
test(alternatingSubarray([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,10]), -1, 'Test 96');
test(alternatingSubarray([5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6]), 30, 'Test 97');
test(alternatingSubarray([7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8]), 30, 'Test 98');
test(alternatingSubarray([2,3,4,3,4,3,4,3,4,3,4,5,4,3,4,3,4,3,4,3,4]), 10, 'Test 99');
test(alternatingSubarray([2,3,4,5,4,3,2,3,4,5,6,7,8,9,8,7,6,5,4]), 3, 'Test 100');
test(alternatingSubarray([5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6]), 20, 'Test 101');
test(alternatingSubarray([2,3,4,3,2,3,4,3,2,3,4,3,2,3,4,3,2,3,4,3,2]), 3, 'Test 102');
test(alternatingSubarray([11,12,13,14,15,14,13,14,15,14,13,14,15,14,13,14,15,14,13,14,15,14,13,14,15,14,13,14]), 3, 'Test 103');
test(alternatingSubarray([10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9]), 17, 'Test 104');
test(alternatingSubarray([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 3, 'Test 105');
test(alternatingSubarray([8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7]), 23, 'Test 106');
test(alternatingSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 16, 'Test 107');
test(alternatingSubarray([1,2,3,2,3,4,3,4,5,4,5,6,5,6,7]), 4, 'Test 108');
test(alternatingSubarray([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3]), 30, 'Test 109');
test(alternatingSubarray([10,11,12,13,14,13,14,15,14,13,14,15,14,13,14]), 4, 'Test 110');
test(alternatingSubarray([1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8]), 4, 'Test 111');
test(alternatingSubarray([1,3,2,1,2,3,2,1,2,3,4,3,2,1,2,3,4,5]), 3, 'Test 112');
test(alternatingSubarray([5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2]), 3, 'Test 113');
test(alternatingSubarray([2,3,2,3,2,3,4,5,6,5,4,3,2,3,4,3,2,1,2,1,2,1]), 6, 'Test 114');
test(alternatingSubarray([20,21,22,21,22,21,22,21,22,21,22,21,22,21,22,21,22,21,22,21,22,21,22]), 22, 'Test 115');
test(alternatingSubarray([5,6,5,6,7,8,7,6,7,8,9,10,9,8]), 4, 'Test 116');
test(alternatingSubarray([1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2]), 19, 'Test 117');
test(alternatingSubarray([9, 10, 9, 10, 11, 12, 11, 10, 9, 8, 7, 6, 5, 6, 7, 8, 7, 8]), 4, 'Test 118');
test(alternatingSubarray([4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5]), 34, 'Test 119');
test(alternatingSubarray([4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4]), 20, 'Test 120');
test(alternatingSubarray([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3]), 20, 'Test 121');
test(alternatingSubarray([1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 20, 'Test 122');
test(alternatingSubarray([1,2,3,4,3,4,3,4,5,4,5,4,5,4]), 7, 'Test 123');
test(alternatingSubarray([1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1]), -1, 'Test 124');
test(alternatingSubarray([6,5,4,5,6,5,4,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4]), 3, 'Test 125');
test(alternatingSubarray([1,2,3,4,3,2,3,4,5,4,5,6,5,6,7,6,7,8]), 4, 'Test 126');
test(alternatingSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 26, 'Test 127');
test(alternatingSubarray([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10]), -1, 'Test 128');
test(alternatingSubarray([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11]), 3, 'Test 129');
test(alternatingSubarray([1, 2, 3, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 5]), 4, 'Test 130');
test(alternatingSubarray([5,4,3,4,5,6,7,6,7,8,7,8,9,10,9,10,9,10,9]), 7, 'Test 131');
test(alternatingSubarray([5,6,7,6,7,8,7,6,7,8,9,8,7,6]), 4, 'Test 132');
test(alternatingSubarray([10,11,10,11,10,11,12,11,10,9,10,11,10]), 6, 'Test 133');
test(alternatingSubarray([9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9]), 25, 'Test 134');
test(alternatingSubarray([6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7,6,7]), 36, 'Test 135');
test(alternatingSubarray([2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4]), 3, 'Test 136');
test(alternatingSubarray([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 3, 'Test 137');
test(alternatingSubarray([2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8]), 3, 'Test 138');
test(alternatingSubarray([5,6,7,6,5,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1]), 3, 'Test 139');
test(alternatingSubarray([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 3, 'Test 140');
test(alternatingSubarray([3,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,6,5,4]), 3, 'Test 141');
test(alternatingSubarray([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 27, 'Test 142');
test(alternatingSubarray([10, 11, 10, 9, 10, 9, 8, 7, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7]), 3, 'Test 143');
test(alternatingSubarray([7,8,7,8,9,10,9,10,11,12,11,12,13,14,13,12,11]), 4, 'Test 144');
test(alternatingSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 20, 'Test 145');
test(alternatingSubarray([9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10,9,10]), 20, 'Test 146');
test(alternatingSubarray([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4]), 3, 'Test 147');
test(alternatingSubarray([1,3,2,4,3,2,5,4,5,4,6,5,6,5,7,6,7,6,8,7,8,7]), 3, 'Test 148');
test(alternatingSubarray([7,8,9,8,7,8,9,8,7,8,9,8,7,8,9,8,7,8,9,8,7,8,9,8,7]), 3, 'Test 149');
test(alternatingSubarray([5,6,7,8,9,8,7,6,5,6,7,8,9]), 3, 'Test 150');
test(alternatingSubarray([1,2,3,2,1,2,1,2,3,2,1,2,1,2,1,2,3,2,1,2,1,2,1,2]), 6, 'Test 151');
test(alternatingSubarray([5,6,7,8,7,8,9,10,9,10,11,12,11,12,13]), 4, 'Test 152');
test(alternatingSubarray([10,11,10,11,10,11,10,11,12,11,10,9,10,11,12]), 8, 'Test 153');
test(alternatingSubarray([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 21, 'Test 154');
test(alternatingSubarray([8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7,8,7]), 27, 'Test 155');
test(alternatingSubarray([7,8,9,8,9,8,9,10,9,8,7,6,5,6,7,8,7,6,5,4,3,2,1]), 6, 'Test 156');
test(alternatingSubarray([5,6,7,8,7,6,7,8,9,8,9,10,9,10,11,10,11,12]), 4, 'Test 157');

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
