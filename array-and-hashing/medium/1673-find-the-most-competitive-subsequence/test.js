// Test: 1673. Find The Most Competitive Subsequence
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { mostCompetitive } = require("./solution");

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

console.log("\n1673. Find The Most Competitive Subsequence\n");

test(mostCompetitive([1,9,8,7,6,5,4,3,2], 1), [1], 'Test 1');
test(mostCompetitive([2,4,3,3,5,4,9,6], 4), [2, 3, 3, 4], 'Test 2');
test(mostCompetitive([10,9,8,7,6,5,4,3,2,1], 5), [5, 4, 3, 2, 1], 'Test 3');
test(mostCompetitive([1,2,3,4,5,6,7], 3), [1, 2, 3], 'Test 4');
test(mostCompetitive([1,3,1,1,2,3,1], 4), [1, 1, 1, 1], 'Test 5');
test(mostCompetitive([7,6,5,4,3,2,1], 3), [3, 2, 1], 'Test 6');
test(mostCompetitive([1,2,3,4,5,6,7], 5), [1, 2, 3, 4, 5], 'Test 7');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,10], 1), [1], 'Test 8');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,10], 3), [1, 2, 3], 'Test 9');
test(mostCompetitive([1,1,1,1,1,1,1,1,1,1], 5), [1, 1, 1, 1, 1], 'Test 10');
test(mostCompetitive([1,1,1,1,1,1,1], 2), [1, 1], 'Test 11');
test(mostCompetitive([3,5,2,6], 2), [2, 6], 'Test 12');
test(mostCompetitive([10,1,2,3,4,5,6,7,8,9], 2), [1, 2], 'Test 13');
test(mostCompetitive([1,3,1,3,1,3,1], 2), [1, 1], 'Test 14');
test(mostCompetitive([9,8,7,6,5,4,3,2,1], 9), [9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 15');
test(mostCompetitive([9,8,7,6,5,4,3,2,1,0], 5), [4, 3, 2, 1, 0], 'Test 16');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,10], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 17');
test(mostCompetitive([7,6,5,4,3,2,1,8,9,10], 5), [2, 1, 8, 9, 10], 'Test 18');
test(mostCompetitive([2,1,2,1,2,1,2,1,2,1], 5), [1, 1, 1, 1, 1], 'Test 19');
test(mostCompetitive([100,90,80,70,60,50,40,30,20,10], 5), [50, 40, 30, 20, 10], 'Test 20');
test(mostCompetitive([1,9,1,9,1,9,1,9,1,9], 5), [1, 1, 1, 1, 1], 'Test 21');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,10], 5), [1, 2, 3, 4, 5], 'Test 22');
test(mostCompetitive([100,200,150,250,300,100,200,300,100,200], 6), [100, 100, 200, 300, 100, 200], 'Test 23');
test(mostCompetitive([1,2,3,2,1,2,3,2,1,2], 5), [1, 1, 2, 1, 2], 'Test 24');
test(mostCompetitive([1,2,3,4,5,1,2,3,4,5], 6), [1, 1, 2, 3, 4, 5], 'Test 25');
test(mostCompetitive([5,6,7,8,9,1,2,3,4,10], 10), [5, 6, 7, 8, 9, 1, 2, 3, 4, 10], 'Test 26');
test(mostCompetitive([7,6,5,4,3,2,1,8,9], 5), [3, 2, 1, 8, 9], 'Test 27');
test(mostCompetitive([5,1,4,3,2,6,7,8,9,10], 5), [1, 2, 6, 7, 8], 'Test 28');
test(mostCompetitive([5,6,7,8,9,1,2,3,4,10], 7), [5, 6, 1, 2, 3, 4, 10], 'Test 29');
test(mostCompetitive([1,3,2,1,3,2,1,3,2,1], 4), [1, 1, 1, 1], 'Test 30');
test(mostCompetitive([10,20,30,40,50,60,70,80,90,100], 5), [10, 20, 30, 40, 50], 'Test 31');
test(mostCompetitive([10,9,8,7,6,5,4,3,2,1,0], 5), [4, 3, 2, 1, 0], 'Test 32');
test(mostCompetitive([10,10,10,10,10,10,10,10,10,10], 3), [10, 10, 10], 'Test 33');
test(mostCompetitive([3,1,4,1,5,9,2,6,5,3,5], 4), [1, 1, 2, 3], 'Test 34');
test(mostCompetitive([10,9,8,7,6,5,4,3,2,1], 2), [2, 1], 'Test 35');
test(mostCompetitive([1,1,1,1,1,1,1,1,1,1], 1), [1], 'Test 36');
test(mostCompetitive([1,1,1,1,1,1,1,1], 3), [1, 1, 1], 'Test 37');
test(mostCompetitive([9,1,9,2,9,3,9,4,9,5], 5), [1, 2, 3, 4, 5], 'Test 38');
test(mostCompetitive([10,5,6,3,2,1,8,7], 3), [1, 8, 7], 'Test 39');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,0], 5), [1, 2, 3, 4, 0], 'Test 40');
test(mostCompetitive([5,3,1,2,4,6,8,7,9,0], 5), [1, 2, 4, 6, 0], 'Test 41');
test(mostCompetitive([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 7), [1, 1, 1, 1, 1, 1, 1], 'Test 42');
test(mostCompetitive([8,6,9,2,5,7,8,8], 4), [2, 5, 7, 8], 'Test 43');
test(mostCompetitive([1,2,3,4,5,6,7,8,9], 3), [1, 2, 3], 'Test 44');
test(mostCompetitive([1,3,1,1,2,3,4,1,5,6], 3), [1, 1, 1], 'Test 45');
test(mostCompetitive([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 10), [1, 2, 2, 3, 3, 4, 4, 5, 5, 6], 'Test 46');
test(mostCompetitive([3,3,3,3,3,3,3,3,3,3], 5), [3, 3, 3, 3, 3], 'Test 47');
test(mostCompetitive([1,2,1,2,1,2,1,2,1,2], 5), [1, 1, 1, 1, 1], 'Test 48');
test(mostCompetitive([10,9,8,7,6,5,4,3,2,1], 3), [3, 2, 1], 'Test 49');
test(mostCompetitive([1,3,1,1,2,3,1,2,3,1], 4), [1, 1, 1, 1], 'Test 50');
test(mostCompetitive([1,2,3,1,2,3,1,2,3,1], 4), [1, 1, 1, 1], 'Test 51');
test(mostCompetitive([5,4,3,2,1,6,7,8,9,10], 5), [1, 6, 7, 8, 9], 'Test 52');
test(mostCompetitive([3,1,4,1,5,9,2,6,5,3,5,9], 6), [1, 1, 2, 3, 5, 9], 'Test 53');
test(mostCompetitive([1,9,8,7,6,5,4,3,2,1], 3), [1, 2, 1], 'Test 54');
test(mostCompetitive([5,4,3,2,1,2,3,4,5,6], 5), [1, 2, 3, 4, 5], 'Test 55');
test(mostCompetitive([1,9,2,8,3,7,4,6,5,10], 7), [1, 2, 3, 4, 6, 5, 10], 'Test 56');
test(mostCompetitive([5,3,1,2,4,1,3,2,1,4,2,3], 6), [1, 1, 1, 4, 2, 3], 'Test 57');
test(mostCompetitive([5,1,4,3,5,9,2,1,4,7,8,1], 7), [1, 2, 1, 4, 7, 8, 1], 'Test 58');
test(mostCompetitive([1,1,2,2,3,3,4,4,5,5], 8), [1, 1, 2, 2, 3, 3, 4, 4], 'Test 59');
test(mostCompetitive([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 60');
test(mostCompetitive([7,6,5,4,3,2,1,0,1,2,3,4,5,6,7], 8), [0, 1, 2, 3, 4, 5, 6, 7], 'Test 61');
test(mostCompetitive([100,200,150,100,50,250,300,200,150], 5), [50, 250, 300, 200, 150], 'Test 62');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,0,0,9,8,7,6,5,4,3,2,1], 10), [0, 0, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 63');
test(mostCompetitive([1,1,1,1,1,1,1,1,1,1], 3), [1, 1, 1], 'Test 64');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1,0], 10), [0, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 65');
test(mostCompetitive([10,20,30,40,50,60,70,80,90,100], 7), [10, 20, 30, 40, 50, 60, 70], 'Test 66');
test(mostCompetitive([10,20,10,20,10,20,10,20,10,20], 5), [10, 10, 10, 10, 10], 'Test 67');
test(mostCompetitive([1,5,4,3,2,6], 3), [1, 2, 6], 'Test 68');
test(mostCompetitive([3,3,3,3,3,3,3,3,3,3], 7), [3, 3, 3, 3, 3, 3, 3], 'Test 69');
test(mostCompetitive([5,6,1,2,3,4,10,9,8,7], 4), [1, 2, 3, 4], 'Test 70');
test(mostCompetitive([8,9,7,6,5,4,3,2,1], 4), [4, 3, 2, 1], 'Test 71');
test(mostCompetitive([1,2,3,1,2,3,1,2,3,1,2,3], 6), [1, 1, 1, 1, 2, 3], 'Test 72');
test(mostCompetitive([5,1,1,1,5,1,1,1,5,1,1,1,5], 6), [1, 1, 1, 1, 1, 1], 'Test 73');
test(mostCompetitive([5,5,5,5,5,5,5,5,5,5], 5), [5, 5, 5, 5, 5], 'Test 74');
test(mostCompetitive([1,9,2,8,3,7,4,6,5,0], 5), [1, 2, 3, 4, 0], 'Test 75');
test(mostCompetitive([7,1,5,3,6,4], 3), [1, 3, 4], 'Test 76');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 77');
test(mostCompetitive([7,14,4,14,13,2,6,13], 5), [4, 13, 2, 6, 13], 'Test 78');
test(mostCompetitive([1,3,2,3,1,2,4,3,2,1], 4), [1, 1, 2, 1], 'Test 79');
test(mostCompetitive([1,3,2,5,4,7,6,9,8,10], 6), [1, 2, 4, 6, 8, 10], 'Test 80');
test(mostCompetitive([5,1,9,7,3,8,2,4,6], 4), [1, 2, 4, 6], 'Test 81');
test(mostCompetitive([1,1,2,2,3,3,4,4,5,5], 5), [1, 1, 2, 2, 3], 'Test 82');
test(mostCompetitive([8,6,5,7,3,4,1,2,9,0], 4), [1, 2, 9, 0], 'Test 83');
test(mostCompetitive([1,1,2,2,3,3,4,4,5,5], 4), [1, 1, 2, 2], 'Test 84');
test(mostCompetitive([4,3,5,1,2,3,6,7,8,9], 5), [1, 2, 3, 6, 7], 'Test 85');
test(mostCompetitive([5,4,3,2,1,6,7,8,9], 5), [1, 6, 7, 8, 9], 'Test 86');
test(mostCompetitive([4,3,2,1,2,3,4,3,2,1], 5), [1, 2, 3, 2, 1], 'Test 87');
test(mostCompetitive([9,1,8,2,7,3,6,4,5,0], 6), [1, 2, 3, 4, 5, 0], 'Test 88');
test(mostCompetitive([1,3,2,1,2,1,3,2,1], 3), [1, 1, 1], 'Test 89');
test(mostCompetitive([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5], 10), [4, 3, 2, 1, 0, 9, 8, 7, 6, 5], 'Test 90');
test(mostCompetitive([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 15), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 91');
test(mostCompetitive([1,9,1,9,1,9,1,9,1,9], 3), [1, 1, 1], 'Test 92');
test(mostCompetitive([5,4,3,2,1,0,1,2,3,4,5], 6), [0, 1, 2, 3, 4, 5], 'Test 93');
test(mostCompetitive([1,1,1,1,1,1,1,1,1,1], 10), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 94');
test(mostCompetitive([100,200,300,400,500,600,700,800,900,1000], 5), [100, 200, 300, 400, 500], 'Test 95');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,0], 3), [1, 2, 0], 'Test 96');
test(mostCompetitive([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0], 10), [0, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 97');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9], 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 98');
test(mostCompetitive([7,6,5,4,3,2,1,0,8,9], 5), [2, 1, 0, 8, 9], 'Test 99');
test(mostCompetitive([1,3,2,4,1,2,3,1,2,3], 4), [1, 1, 1, 2], 'Test 100');
test(mostCompetitive([5,2,6,3,4,1], 2), [2, 1], 'Test 101');
test(mostCompetitive([7,7,7,7,7,7,7,7,7,7], 5), [7, 7, 7, 7, 7], 'Test 102');
test(mostCompetitive([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5], 12), [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5], 'Test 103');
test(mostCompetitive([7,6,5,4,3,2,1,0], 5), [4, 3, 2, 1, 0], 'Test 104');
test(mostCompetitive([5,3,1,4,2,6,8,7,9,0,11,10,12,13,14], 10), [1, 2, 6, 7, 0, 11, 10, 12, 13, 14], 'Test 105');
test(mostCompetitive([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 106');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

