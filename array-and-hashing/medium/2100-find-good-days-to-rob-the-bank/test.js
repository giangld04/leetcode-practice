// Test: 2100. Find Good Days To Rob The Bank
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { goodDaysToRobBank } = require("./solution");

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

console.log("\n2100. Find Good Days To Rob The Bank\n");

test(goodDaysToRobBank([3,3,5,5,5,5,2,2,2,3], 2), [6, 7], 'Test 1');
test(goodDaysToRobBank([1,1,1,1,1], 0), [0, 1, 2, 3, 4], 'Test 2');
test(goodDaysToRobBank([1,2,2,3,3,4,5,5,6,6], 1), [2, 4, 7], 'Test 3');
test(goodDaysToRobBank([6,5,4,3,2,1], 2), [], 'Test 4');
test(goodDaysToRobBank([5,5,4,4,3,3,2,2,1,1], 1), [2, 4, 6, 8], 'Test 5');
test(goodDaysToRobBank([1,0,1,0,1,0,1,0,1,0], 0), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 6');
test(goodDaysToRobBank([1,2,2,3,3,4], 1), [2, 4], 'Test 7');
test(goodDaysToRobBank([10,9,8,7,6,5,4,3,2,1], 3), [], 'Test 8');
test(goodDaysToRobBank([1,2,2,3,3,4,5], 1), [2, 4], 'Test 9');
test(goodDaysToRobBank([3,3,5,5,5,5,2,2,1,1], 2), [], 'Test 10');
test(goodDaysToRobBank([1,1,1,2,2,2,3,3,3], 2), [2, 5], 'Test 11');
test(goodDaysToRobBank([100,90,80,70,60,50,60,70,80,90,100], 4), [5], 'Test 12');
test(goodDaysToRobBank([3,3,3,3,3,3,3], 3), [3], 'Test 13');
test(goodDaysToRobBank([0,0,0,0,0,0,0,0,0,0], 4), [4, 5], 'Test 14');
test(goodDaysToRobBank([1], 0), [0], 'Test 15');
test(goodDaysToRobBank([5,5,4,4,3,3,2,2,1,1], 2), [], 'Test 16');
test(goodDaysToRobBank([3,3,5,5,5,5,4,4,4,3], 3), [], 'Test 17');
test(goodDaysToRobBank([1,2,3,4,5,6], 2), [], 'Test 18');
test(goodDaysToRobBank([1,2,3,3,3,3,2,2,1], 2), [], 'Test 19');
test(goodDaysToRobBank([5,3,3,3,5,6,2], 2), [2, 3], 'Test 20');
test(goodDaysToRobBank([1,2,3,2,1,0,1,0,1,2,3], 1), [5, 7], 'Test 21');
test(goodDaysToRobBank([6,5,4,3,2,1,2,3,4,5,6], 2), [5], 'Test 22');
test(goodDaysToRobBank([1,2,2,3,4,5,5,4,3,2,1], 3), [], 'Test 23');
test(goodDaysToRobBank([6,5,4,3,2,1], 3), [], 'Test 24');
test(goodDaysToRobBank([10,9,8,7,6,5,4,3,2,1,0], 3), [], 'Test 25');
test(goodDaysToRobBank([1,2], 1), [], 'Test 26');
test(goodDaysToRobBank([2,1], 1), [], 'Test 27');
test(goodDaysToRobBank([1,3,3,3,3,2,2,2,2], 2), [5, 6], 'Test 28');
test(goodDaysToRobBank([5,6,7,8,9,10,11,12,13,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11], 5), [23], 'Test 29');
test(goodDaysToRobBank([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 2), [2, 6, 10, 14, 18, 22, 26], 'Test 30');
test(goodDaysToRobBank([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 31');
test(goodDaysToRobBank([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7], 2), [8], 'Test 32');
test(goodDaysToRobBank([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), [10, 11, 12, 13, 14, 15], 'Test 33');
test(goodDaysToRobBank([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 5), [10], 'Test 34');
test(goodDaysToRobBank([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 'Test 35');
test(goodDaysToRobBank([1,2,3,4,5,6,5,4,3,2,1,0,1,2,3,4,5], 3), [11], 'Test 36');
test(goodDaysToRobBank([5,3,3,3,3,5,6,2,2,2,2,1,1,1,1,1,1], 3), [3, 11, 12, 13], 'Test 37');
test(goodDaysToRobBank([1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1], 2), [3, 6, 9, 13, 16, 19], 'Test 38');
test(goodDaysToRobBank([1,2,3,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5], 2), [], 'Test 39');
test(goodDaysToRobBank([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 40');
test(goodDaysToRobBank([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12], 2), [], 'Test 41');
test(goodDaysToRobBank([1, 2, 3, 2, 1, 0, 1, 0, 1, 2, 3, 2, 1, 0, 1], 2), [], 'Test 42');
test(goodDaysToRobBank([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5], 2), [8, 16], 'Test 43');
test(goodDaysToRobBank([7,7,7,7,6,6,6,6,5,5,5,5,6,6,6,6,7,7,7,7], 3), [4, 8, 9, 10, 11, 15], 'Test 44');
test(goodDaysToRobBank([1,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2], 1), [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22], 'Test 45');
test(goodDaysToRobBank([1,2,3,4,5,6,5,4,3,2,1,0,1,2,3,4,5,6], 3), [11], 'Test 46');
test(goodDaysToRobBank([1, 3, 2, 2, 2, 1, 2, 2, 2, 3, 1, 1, 1], 1), [2, 3, 5, 7, 8, 10, 11], 'Test 47');
test(goodDaysToRobBank([1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1], 4), [8, 9, 17], 'Test 48');
test(goodDaysToRobBank([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], 'Test 49');
test(goodDaysToRobBank([1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2], 2), [4, 8, 12], 'Test 50');
test(goodDaysToRobBank([10, 10, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10], 4), [12], 'Test 51');
test(goodDaysToRobBank([3,3,3,3,3,3,3,3,3,3], 4), [4, 5], 'Test 52');
test(goodDaysToRobBank([100,90,80,70,60,50,40,30,20,10,0,10,20,30,40,50,60,70,80,90,100], 5), [10], 'Test 53');
test(goodDaysToRobBank([5,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4], 5), [], 'Test 54');
test(goodDaysToRobBank([10,9,8,7,6,5,4,3,2,1,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 6), [10, 11, 12, 13, 14], 'Test 55');
test(goodDaysToRobBank([5,3,3,3,5,6,2,2,2,1,1,1,2,2,2], 3), [9, 10, 11], 'Test 56');
test(goodDaysToRobBank([1,2,2,1,0,0,1,1,2,2], 1), [4, 5, 7], 'Test 57');
test(goodDaysToRobBank([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5], 4), [19], 'Test 58');
test(goodDaysToRobBank([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9], 4), [9], 'Test 59');
test(goodDaysToRobBank([5, 3, 3, 3, 5, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 2), [2, 3, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 60');
test(goodDaysToRobBank([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 5), [5, 6, 7, 8, 9, 10, 11], 'Test 61');
test(goodDaysToRobBank([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 5), [], 'Test 62');
test(goodDaysToRobBank([10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10,0], 4), [], 'Test 63');
test(goodDaysToRobBank([2,3,3,2,2,1,1,2,2,3,3,2,1,1,2,2], 2), [5, 6, 12, 13], 'Test 64');
test(goodDaysToRobBank([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1], 3), [4], 'Test 65');
test(goodDaysToRobBank([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 2), [], 'Test 66');
test(goodDaysToRobBank([10,10,10,10,9,8,7,6,5,4,3,2,1,0], 4), [], 'Test 67');
test(goodDaysToRobBank([1,2,3,2,3,4,5,4,5,6,7,6,7,8,9,8,9,10,11,10,11,12,11,12,13], 4), [], 'Test 68');
test(goodDaysToRobBank([3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3], 2), [2, 5, 6, 7, 8, 9, 12], 'Test 69');
test(goodDaysToRobBank([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5], 3), [8, 16], 'Test 70');
test(goodDaysToRobBank([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 1), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 'Test 71');
test(goodDaysToRobBank([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5], 3), [10], 'Test 72');
test(goodDaysToRobBank([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0], 4), [10], 'Test 73');
test(goodDaysToRobBank([5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5], 4), [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], 'Test 74');
test(goodDaysToRobBank([1,2,3,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5], 2), [], 'Test 75');
test(goodDaysToRobBank([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6], 8), [10], 'Test 76');
test(goodDaysToRobBank([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 7), [7, 8, 9], 'Test 77');
test(goodDaysToRobBank([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 4), [10], 'Test 78');
test(goodDaysToRobBank([3,2,1,2,1,0,1,0,1,2,3,2,1,2,1,0,1,0,1,2], 2), [], 'Test 79');
test(goodDaysToRobBank([1,2,3,4,5,6,5,4,3,2,1,0,1,2,3,4,5,6,5,4,3,2,1,0,1,2,3,4,5,6], 3), [11, 23], 'Test 80');
test(goodDaysToRobBank([5,4,3,2,1,0,1,2,3,4,5,6,7,8,9], 3), [5], 'Test 81');
test(goodDaysToRobBank([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,1], 3), [], 'Test 82');
test(goodDaysToRobBank([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 5), [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 83');
test(goodDaysToRobBank([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 3), [], 'Test 84');
test(goodDaysToRobBank([100,90,80,70,60,50,40,30,20,10,0,0,10,20,30,40,50,60,70,80,90,100], 5), [10, 11], 'Test 85');
test(goodDaysToRobBank([9, 8, 7, 6, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1], 4), [4], 'Test 86');
test(goodDaysToRobBank([1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1], 2), [4, 5, 8, 9, 12, 13, 16, 17, 20, 21], 'Test 87');
test(goodDaysToRobBank([2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5], 2), [2, 5, 6, 7, 8, 9, 12, 13, 14, 17, 18, 19, 22, 23, 24, 27], 'Test 88');
test(goodDaysToRobBank([3,3,5,5,4,4,6,6,7,7,8,8,9,9,10,10], 3), [5], 'Test 89');
test(goodDaysToRobBank([3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0], 3), [4, 8, 12, 13], 'Test 90');
test(goodDaysToRobBank([1,2,2,2,1,1,1,2,2,2,1,1,1,2,2,2,1,1,1,2,2,2], 2), [4, 5, 6, 10, 11, 12, 16, 17, 18], 'Test 91');
test(goodDaysToRobBank([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11], 3), [], 'Test 92');
test(goodDaysToRobBank([10,9,8,7,6,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 4), [5, 20], 'Test 93');
test(goodDaysToRobBank([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], 7), [19], 'Test 94');
test(goodDaysToRobBank([1,2,3,2,1,2,1,2,3,4,3,2,1,2,1,2,3,4,5,4,3,2,1], 3), [], 'Test 95');
test(goodDaysToRobBank([5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3), [5], 'Test 96');
test(goodDaysToRobBank([1,3,2,3,1,2,3,2,1,2,1,3,2,1,2,3,4,3,2,1,2,1,2,3,2,1,2,1,3,2,1], 2), [13], 'Test 97');
test(goodDaysToRobBank([5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0], 5), [5], 'Test 98');
test(goodDaysToRobBank([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 2), [2, 3, 4, 5, 6, 7], 'Test 99');
test(goodDaysToRobBank([10, 9, 8, 7, 6, 5, 5, 5, 6, 7, 8, 9, 10], 3), [5, 6, 7], 'Test 100');
test(goodDaysToRobBank([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), [5, 6, 7, 8, 9, 10], 'Test 101');
test(goodDaysToRobBank([8,8,8,8,8,7,7,7,7,7,8,8,8,8,8], 2), [2, 5, 6, 7, 8, 9, 12], 'Test 102');
test(goodDaysToRobBank([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 'Test 103');
test(goodDaysToRobBank([1, 3, 2, 3, 2, 1, 2, 3, 2, 1], 1), [2, 5], 'Test 104');
test(goodDaysToRobBank([5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5), [], 'Test 105');
test(goodDaysToRobBank([1, 2, 3, 4, 3, 2, 3, 4, 5, 6, 5, 4, 5, 6, 7, 8, 9], 2), [5, 11], 'Test 106');
test(goodDaysToRobBank([8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 6), [7], 'Test 107');
test(goodDaysToRobBank([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 12), [12, 13], 'Test 108');
test(goodDaysToRobBank([1,2,3,4,5,5,5,5,5,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 7), [], 'Test 109');
test(goodDaysToRobBank([1,1,1,0,0,0,0,0,0,0,1,1,1], 2), [3, 4, 5, 6, 7, 8, 9], 'Test 110');
test(goodDaysToRobBank([10,9,8,7,6,5,6,7,8,9,10], 2), [5], 'Test 111');
test(goodDaysToRobBank([5, 5, 4, 4, 4, 5, 6, 7, 8, 8], 2), [2, 3, 4], 'Test 112');
test(goodDaysToRobBank([5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 2), [10, 11], 'Test 113');
test(goodDaysToRobBank([5,4,3,2,1,2,3,4,5,6,7,8,9,10], 3), [4], 'Test 114');
test(goodDaysToRobBank([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1], 3), [], 'Test 115');
test(goodDaysToRobBank([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 5), [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], 'Test 116');
test(goodDaysToRobBank([3,3,5,5,5,5,5,5,4,4,4,3,3,3,3,2,2,1,1,1], 3), [11], 'Test 117');
test(goodDaysToRobBank([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3], 2), [4, 8, 12], 'Test 118');
test(goodDaysToRobBank([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 5), [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 'Test 119');
test(goodDaysToRobBank([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1], 2), [], 'Test 120');
test(goodDaysToRobBank([1,3,2,1,2,1,2,1,2,1,2,1,2,1,2], 2), [], 'Test 121');
test(goodDaysToRobBank([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 5), [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 122');
test(goodDaysToRobBank([1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1], 1), [1, 4, 5, 8, 9, 12, 13, 16, 17, 20], 'Test 123');

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
