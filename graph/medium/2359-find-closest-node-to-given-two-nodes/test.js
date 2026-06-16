// Test: 2359. Find Closest Node To Given Two Nodes
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { closestMeetingNode } = require("./solution");

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

console.log("\n2359. Find Closest Node To Given Two Nodes\n");

test(closestMeetingNode([5,-1,3,4,5,6,-1,-1,4,3], 0, 0), 0, 'Test 1');
test(closestMeetingNode([4,3,0,5,3,-1], 4, 0), 4, 'Test 2');
test(closestMeetingNode([1,2,0,-1], 0, 2), 0, 'Test 3');
test(closestMeetingNode([4,4,4,5,1,2,2], 1, 1), 1, 'Test 4');
test(closestMeetingNode([4,4,4,5,1,2], 0, 1), 4, 'Test 5');
test(closestMeetingNode([4,4,8,-1,9,8,4,4,1,1], 5, 6), 1, 'Test 6');
test(closestMeetingNode([1,2,0,-1], 1, 2), 2, 'Test 7');
test(closestMeetingNode([1,2,3,4,-1], 0, 4), 4, 'Test 8');
test(closestMeetingNode([3,3,2,4,3], 0, 4), 3, 'Test 9');
test(closestMeetingNode([2,2,3,-1], 0, 1), 2, 'Test 10');
test(closestMeetingNode([1,2,-1], 0, 2), 2, 'Test 11');
test(closestMeetingNode([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 0, 19), 3, 'Test 12');
test(closestMeetingNode([3,1,3,4,5,-1,2,2,3,0], 2, 8), 3, 'Test 13');
test(closestMeetingNode([3,3,2,4,3,-1,5,5,-1,-1,6,6,-1,-1], 2, 10), -1, 'Test 14');
test(closestMeetingNode([4, 3, 0, 5, 3, 9, 8, 5, 4, 6], 0, 8), 4, 'Test 15');
test(closestMeetingNode([4,4,8,5,9,8,4,4,1,1], 5, 6), 1, 'Test 16');
test(closestMeetingNode([3,0,5,5,5,3,2,0], 1, 7), 0, 'Test 17');
test(closestMeetingNode([9,8,7,6,5,4,3,2,1,-1], 0, 8), -1, 'Test 18');
test(closestMeetingNode([1,2,0,-1,-1,-1], 2, 3), -1, 'Test 19');
test(closestMeetingNode([3,0,5,3,5,0,2,5,3,5], 1, 7), 0, 'Test 20');
test(closestMeetingNode([1,2,0,3,5,6,4,-1,-1], 1, 7), -1, 'Test 21');
test(closestMeetingNode([2,1,2,-1,-1], 0, 1), -1, 'Test 22');
test(closestMeetingNode([2,0,0,3,-1,4,5,5,-1], 0, 6), -1, 'Test 23');
test(closestMeetingNode([1,0,-1,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11], 0, 10), -1, 'Test 24');
test(closestMeetingNode([5,3,1,5,2,3], 1, 0), 3, 'Test 25');
test(closestMeetingNode([3,2,5,1,4,-1,0,3], 6, 4), -1, 'Test 26');
test(closestMeetingNode([2,2,3,-1,4,5,3], 0, 5), -1, 'Test 27');
test(closestMeetingNode([2, 3, 1, 4, -1, 5, -1], 0, 5), -1, 'Test 28');
test(closestMeetingNode([5,5,5,5,5,-1,-1,-1,-1,-1], 0, 5), 5, 'Test 29');
test(closestMeetingNode([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 0, 19), 1, 'Test 30');
test(closestMeetingNode([2,0,0,2,0,5,6,-1,9,8,7], 6, 5), -1, 'Test 31');
test(closestMeetingNode([3,1,0,2,-1,-1,-1], 2, 5), -1, 'Test 32');
test(closestMeetingNode([2,2,3,4,2,-1,-1,1], 0, 6), -1, 'Test 33');
test(closestMeetingNode([1, 2, 3, 4, 0, 5, 6, 7, 8, 9, -1], 0, 10), -1, 'Test 34');
test(closestMeetingNode([1,0,1,0,1,0,1,0,1,0], 0, 9), 0, 'Test 35');
test(closestMeetingNode([3,0,2,-1,1,2], 0, 3), 3, 'Test 36');
test(closestMeetingNode([2,0,0,2,5,4,4], 3, 4), -1, 'Test 37');
test(closestMeetingNode([1,2,3,4,5,6,7,8,9,0], 0, 5), 0, 'Test 38');
test(closestMeetingNode([3,1,1,4,1], 1, 2), 1, 'Test 39');
test(closestMeetingNode([4,3,0,5,3,-1], 0, 4), 4, 'Test 40');
test(closestMeetingNode([3,3,3,4,3,-1,-1,-1,-1,-1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 0, 40), -1, 'Test 41');
test(closestMeetingNode([5,3,1,4,3,5,2,-1], 1, 6), 1, 'Test 42');
test(closestMeetingNode([9,8,7,6,5,4,3,2,1,-1,0], 5, 0), -1, 'Test 43');
test(closestMeetingNode([4,4,8,-1,9,8,4,4,1,11,4,4,4,8,11,2,10,4,10,1], 0, 13), 4, 'Test 44');
test(closestMeetingNode([3,0,5,3,5,3,4,-1,0,1], 5, 4), 5, 'Test 45');
test(closestMeetingNode([6,3,4,5,5,6,7,1,0,-1], 0, 5), 6, 'Test 46');
test(closestMeetingNode([2,-1,3,-1,-1,-1,-1,7,4,5,6,1], 0, 9), -1, 'Test 47');
test(closestMeetingNode([1,2,0,1,3,4,2], 2, 5), 1, 'Test 48');
test(closestMeetingNode([2,3,1,5,4,3,6,5,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 0, 7), 3, 'Test 49');
test(closestMeetingNode([2,0,0,2,1,4], 3, 5), 0, 'Test 50');
test(closestMeetingNode([1,2,3,4,0,-1], 0, 5), -1, 'Test 51');
test(closestMeetingNode([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,-1], 18, 19), -1, 'Test 52');
test(closestMeetingNode([4, 4, 8, 5, 9, 8, 4, 4, 1, 4], 0, 7), 4, 'Test 53');
test(closestMeetingNode([1,2,0,1,2,0,1,2,0,1,2,0], 0, 5), 0, 'Test 54');
test(closestMeetingNode([3,1,2,-1,0], 2, 4), -1, 'Test 55');
test(closestMeetingNode([1,2,0,5,-1,5], 3, 4), -1, 'Test 56');
test(closestMeetingNode([3,3,0,-1,-1,0], 1, 5), 3, 'Test 57');
test(closestMeetingNode([1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,10], 0, 19), -1, 'Test 58');
test(closestMeetingNode([1,2,0,5,2,1,3,4,6,7,-1], 8, 9), 1, 'Test 59');
test(closestMeetingNode([2,-1,3,-1,-1,-1,-1,5,8,9,7,-1,1,10,3,7,-1,14,1,13,11,13,10], 1, 10), -1, 'Test 60');
test(closestMeetingNode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0, -1], 19, 20), -1, 'Test 61');
test(closestMeetingNode([4,4,4,5,1,2,2], 1, 0), 4, 'Test 62');
test(closestMeetingNode([3,4,4,5,1,6,5,5,6,8,8,1,7,9,8,8,8,8,8,8], 0, 10), 5, 'Test 63');
test(closestMeetingNode([1, 2, 2, -1, 3, 3, 4, 5, 5, -1], 0, 8), -1, 'Test 64');
test(closestMeetingNode([1,2,3,4,0], 1, 4), 1, 'Test 65');
test(closestMeetingNode([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 0, 19), -1, 'Test 66');
test(closestMeetingNode([3,0,5,1,3,2,4,2,2,-1], 1, 8), -1, 'Test 67');
test(closestMeetingNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0], 0, 19), 0, 'Test 68');
test(closestMeetingNode([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 0, 28), Error: list index out of range, 'Test 69');
test(closestMeetingNode([7,8,9,9,8,7,6,5,4,3,2,1,-1], 11, 2), -1, 'Test 70');
test(closestMeetingNode([4,4,4,4,4], 0, 2), 4, 'Test 71');
test(closestMeetingNode([2,-1,3,5,-1,2], 0, 5), 2, 'Test 72');
test(closestMeetingNode([4,4,4,5,1,2], 0, 3), 4, 'Test 73');
test(closestMeetingNode([2,2,0,4,1,0,-1,-1,0,3], 6, 7), -1, 'Test 74');
test(closestMeetingNode([5,4,0,3,5,2,3,-1], 2, 5), 2, 'Test 75');
test(closestMeetingNode([4,4,4,5,1,2,2], 0, 3), 4, 'Test 76');
test(closestMeetingNode([2,3,1,4,-1,-1,-1,7,-1,-1,5,6], 0, 8), -1, 'Test 77');
test(closestMeetingNode([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0], 0, 19), 0, 'Test 78');
test(closestMeetingNode([1,3,5,7,9,11,13,15,17,19,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 0, 18), -1, 'Test 79');
test(closestMeetingNode([1,2,3,4,-1,-1,-1,-1,-1,-1], 0, 7), -1, 'Test 80');
test(closestMeetingNode([1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -1], 0, 20), -1, 'Test 81');
test(closestMeetingNode([5,3,4,5,3,2,-1], 1, 4), 3, 'Test 82');
test(closestMeetingNode([3,1,2,3,-1,-1], 5, 0), -1, 'Test 83');
test(closestMeetingNode([4,4,4,5,1,2,2], 1, 5), 4, 'Test 84');
test(closestMeetingNode([1,0,0,4,1], 0, 3), 1, 'Test 85');
test(closestMeetingNode([2,-1,3,1], 0, 2), 2, 'Test 86');
test(closestMeetingNode([1,2,3,4,5,6,7,8,9,0], 0, 9), 0, 'Test 87');
test(closestMeetingNode([10,15,11,14,13,12,5,15,9,12,15,9,10,11,13,-1,12,14,15,8,5], 0, 14), 10, 'Test 88');
test(closestMeetingNode([5, 4, 0, 2, 3, 0, 2, 4, 0, 3, 2, 3, 2, 2, 3, 0, 2, 1, 0, 1], 0, 1), 0, 'Test 89');
test(closestMeetingNode([6,3,0,5,8,5,8,3,-1,6], 5, 6), -1, 'Test 90');
test(closestMeetingNode([3,0,5,5,2,4,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 0, 18), -1, 'Test 91');
test(closestMeetingNode([1,0,3,2,1,4,5,-1,-1,-1,8,9,7,10,11,12,13,-1], 1, 7), -1, 'Test 92');
test(closestMeetingNode([1,1,1,1,1,1,1,1,1,1], 0, 9), 1, 'Test 93');
test(closestMeetingNode([1,2,3,4,5,6,7,8,9,10,-1], 0, 10), 10, 'Test 94');
test(closestMeetingNode([2,2,3,4,5,-1,2,6,7,-1,-1], 0, 1), 2, 'Test 95');
test(closestMeetingNode([2,3,3,2], 0, 1), 2, 'Test 96');
test(closestMeetingNode([5, 4, 0, 2, 3, 0, 2, 4, 0, 3, 2, 3, 2, 2, 3, -1, 2], 0, 2), 0, 'Test 97');
test(closestMeetingNode([5,3,1,4,2,6,3,2], 0, 5), 5, 'Test 98');
test(closestMeetingNode([5, -1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1, -1, 13, -1, 14, -1, 15], 0, 15), -1, 'Test 99');
test(closestMeetingNode([2,2,3,4,5,-1,-1,5,5,5], 0, 9), 5, 'Test 100');
test(closestMeetingNode([1,2,0,1,3,-1,-1,-1], 0, 1), 1, 'Test 101');
test(closestMeetingNode([3,3,0,5,-1,2,0,-1,-1,3,1], 3, 10), 3, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

