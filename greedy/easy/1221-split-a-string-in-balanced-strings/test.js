// Test: 1221. Split A String In Balanced Strings
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { balancedStringSplit } = require("./solution");

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

console.log("\n1221. Split A String In Balanced Strings\n");

test(balancedStringSplit("RRLLRRLL"), 2, 'Test 1');
test(balancedStringSplit("RLRRRLLRLL"), 2, 'Test 2');
test(balancedStringSplit("RRRRLLLLRRRRLLLL"), 2, 'Test 3');
test(balancedStringSplit("LRRLLRRL"), 4, 'Test 4');
test(balancedStringSplit("LLLLRRRRLLRRRR"), 2, 'Test 5');
test(balancedStringSplit("RLLLLRRR"), 2, 'Test 6');
test(balancedStringSplit("RLLRRLRR"), 3, 'Test 7');
test(balancedStringSplit("RLRRLLRLRL"), 4, 'Test 8');
test(balancedStringSplit("RRLLRRLLRL"), 3, 'Test 9');
test(balancedStringSplit("LLRRLLRRLL"), 2, 'Test 10');
test(balancedStringSplit("RRLRRLRLRL"), 0, 'Test 11');
test(balancedStringSplit("RRLLRRLLRR"), 2, 'Test 12');
test(balancedStringSplit("RLRRLLRL"), 3, 'Test 13');
test(balancedStringSplit("LRRLRLLRRL"), 5, 'Test 14');
test(balancedStringSplit("RLRLRLRLRL"), 5, 'Test 15');
test(balancedStringSplit("LLRRLLRR"), 2, 'Test 16');
test(balancedStringSplit("RLRLRLRL"), 4, 'Test 17');
test(balancedStringSplit("RRRRLLLL"), 1, 'Test 18');
test(balancedStringSplit("RRLRLLRLRL"), 3, 'Test 19');
test(balancedStringSplit("LLRRLLRRLR"), 3, 'Test 20');
test(balancedStringSplit("LRLRLRLRLR"), 5, 'Test 21');
test(balancedStringSplit("LLRRRLLL"), 2, 'Test 22');
test(balancedStringSplit("LRLRLRLR"), 4, 'Test 23');
test(balancedStringSplit("LLLLRRRR"), 1, 'Test 24');
test(balancedStringSplit("RLRRLLRRLLRRRRLLLLRRLLRR"), 5, 'Test 25');
test(balancedStringSplit("RRLLRRLLRRLLRRLL"), 4, 'Test 26');
test(balancedStringSplit("LLLLLLLLRRRRRRRR"), 1, 'Test 27');
test(balancedStringSplit("LLLLRRRLLLLRRRLLLLRRR"), 0, 'Test 28');
test(balancedStringSplit("RRRLLLRRRLLLRRRLLL"), 3, 'Test 29');
test(balancedStringSplit("LLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRR"), 13, 'Test 30');
test(balancedStringSplit("LRLRLRLRLRRRRLLLLRRRRLLLL"), 8, 'Test 31');
test(balancedStringSplit("RLLLLRRRRLLRLRRLRRLLRLRLRL"), 10, 'Test 32');
test(balancedStringSplit("RLRLRLRLRLRLRLRLRL"), 9, 'Test 33');
test(balancedStringSplit("RLRRLLRLRRLLRLRRLLRLRRLLRLRLRRLLRLRRLLRLRLRR"), 15, 'Test 34');
test(balancedStringSplit("RLRLRLRLRLRLRLRL"), 8, 'Test 35');
test(balancedStringSplit("RLLLLRRRRLLRRRRLLR"), 4, 'Test 36');
test(balancedStringSplit("RLRRLLRLRRLLRLRLRRLLRLRL"), 9, 'Test 37');
test(balancedStringSplit("LRRLRLRLRLRLRLRLRL"), 9, 'Test 38');
test(balancedStringSplit("RRRRRRLLLLLLRRRRLL"), 1, 'Test 39');
test(balancedStringSplit("LLLLRRRRLLLLRRRRLLLLRRRRLLLLRRRRLLLLRRRR"), 5, 'Test 40');
test(balancedStringSplit("RRLRRLRRLRRLRRLRRL"), 0, 'Test 41');
test(balancedStringSplit("RLRRLLRLRRLLRLRLRRLLRLRLRRLLRLRLRRLLRLRL"), 15, 'Test 42');
test(balancedStringSplit("RRRLLLLLRRRLLLLLRRRLLLLL"), 3, 'Test 43');
test(balancedStringSplit("LRLRLRLRRRLLLLRRRLLLLRRRLRLR"), 10, 'Test 44');
test(balancedStringSplit("LLRRLRRLRRLRRLRR"), 3, 'Test 45');
test(balancedStringSplit("RLRLRLRLRLRLRLRLRLRL"), 10, 'Test 46');
test(balancedStringSplit("RRRRLLLLRRRRLLLLRRRRLLLLRRRRLLLLRRRRLLLLRRRRLLLL"), 6, 'Test 47');
test(balancedStringSplit("RLLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR"), 2, 'Test 48');
test(balancedStringSplit("RRLLRRLRLRRLRLRR"), 1, 'Test 49');
test(balancedStringSplit("RLRLRLRLRRRRLLLL"), 5, 'Test 50');
test(balancedStringSplit("LRLRLRLRLRLRLRLRLR"), 9, 'Test 51');
test(balancedStringSplit("RLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLL"), 21, 'Test 52');
test(balancedStringSplit("LLLLLLLLRRRRRRRRLLLLLLLLRRRRRRRRLLLLLLLLRRRRRRRR"), 3, 'Test 53');
test(balancedStringSplit("RLLLLRRRRLLLLRRRRLLLLRRRRLLLLRRRRLLLLRRRR"), 10, 'Test 54');
test(balancedStringSplit("LRRRLLRRLRRRLLRRRLLR"), 2, 'Test 55');
test(balancedStringSplit("RLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRL"), 16, 'Test 56');
test(balancedStringSplit("LLLLRRRRRRRRLLLLRRRR"), 2, 'Test 57');
test(balancedStringSplit("LLLLLLLLRRRRRRRRRRRRRRRR"), 1, 'Test 58');
test(balancedStringSplit("LLRRRLLLLRRRRLLLLRRRR"), 5, 'Test 59');
test(balancedStringSplit("LLRRLLRRLLLLRRRR"), 3, 'Test 60');
test(balancedStringSplit("RLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRR"), 16, 'Test 61');
test(balancedStringSplit("RRRRLLLLRRRRRRLLLLLLLLRRRRLLLLLLLLRRRRLLLL"), 4, 'Test 62');
test(balancedStringSplit("RRRRLLLLLRRRRLLLLLRRRRLLLLLRRRRLLLLL"), 7, 'Test 63');
test(balancedStringSplit("LLLLLLRRRRRRLLLLLLRRRRRRLLLLLLRRRRRR"), 3, 'Test 64');
test(balancedStringSplit("RRRRRRLLLLLLRRRRRRLLLLLLRRRRRRLLLLLL"), 3, 'Test 65');
test(balancedStringSplit("LRRRRLLLLLRRRRLLLLLRRRRLLLLLRRRRLLLLL"), 7, 'Test 66');
test(balancedStringSplit("RLRRLLRLRLRLRRLLRLRLRRLLRLRL"), 11, 'Test 67');
test(balancedStringSplit("LLLLRRRRLLLLRRRR"), 2, 'Test 68');
test(balancedStringSplit("LLLLRRRRRLRRLLRRLLRRLLRRRRLLLLRRLLRRRRLLLLRRLLRR"), 9, 'Test 69');
test(balancedStringSplit("RRRRRRLLLLLLLLRRRRRRLLLLLLLLRRRRRRLLLLLLLL"), 5, 'Test 70');
test(balancedStringSplit("RRRRRRRRRRLLLLLLLLLLRRRRRRRRRRLLLLLLLLLL"), 2, 'Test 71');
test(balancedStringSplit("LRRLRLRLRLRLRLRL"), 8, 'Test 72');
test(balancedStringSplit("RRRLLRLLRRLRRLLRLLRR"), 2, 'Test 73');
test(balancedStringSplit("RLRRLLRLRLRRLLRLRLRRLLRLRL"), 10, 'Test 74');
test(balancedStringSplit("LLRRLLRRLLRRLLRRLLRRLLRR"), 6, 'Test 75');
test(balancedStringSplit("LLLLRRRRLLLLRRRRLLLLRRRR"), 3, 'Test 76');
test(balancedStringSplit("RRLLRRLLRRLLRRLLRRLL"), 5, 'Test 77');
test(balancedStringSplit("RRRRLLLLRRRRLLLLRRRRLLLLRRRR"), 3, 'Test 78');
test(balancedStringSplit("RLLLLLLLLLLLLLLRRRRRRRRRRRRRRRRRRRRLLLLLLLLLLLLL"), 3, 'Test 79');
test(balancedStringSplit("LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLR"), 26, 'Test 80');
test(balancedStringSplit("RLRRLLRLRRLLRLRL"), 6, 'Test 81');
test(balancedStringSplit("LRLRLRLRLRLRLRLR"), 8, 'Test 82');
test(balancedStringSplit("RRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLL"), 10, 'Test 83');
test(balancedStringSplit("RLLLLRRRRRLRRRLLLLLRRRRRLLLL"), 5, 'Test 84');
test(balancedStringSplit("RRLLRRLLRRLLRRLLRRLLRRLL"), 6, 'Test 85');
test(balancedStringSplit("RRRRLLLLRRRRLLLLRRRRLLLLRRRRLLLL"), 4, 'Test 86');
test(balancedStringSplit("LLLLLLLLLLLLRRRRRRRRRRRR"), 1, 'Test 87');
test(balancedStringSplit("RRLLRLRLRRLLRLRL"), 6, 'Test 88');
test(balancedStringSplit("RRRRRRRRLLLLLLLL"), 1, 'Test 89');
test(balancedStringSplit("RLRRLLRLRLRLRRLLRLRRLLRLRL"), 10, 'Test 90');
test(balancedStringSplit("LLRRLLRRLLRRLLRRLLRRLLRRLLRRLLRR"), 8, 'Test 91');
test(balancedStringSplit("RLLLLLLLLLLLLRRRRRRRRRRRRR"), 2, 'Test 92');
test(balancedStringSplit("LLLLRRRRRRRRLLLL"), 2, 'Test 93');
test(balancedStringSplit("RRRLLLLRRRLLLLRRRLLLL"), 5, 'Test 94');
test(balancedStringSplit("RLRRLLRLLRLRRLLRLR"), 8, 'Test 95');
test(balancedStringSplit("RRRRLLLLRRRLLLLRRRRLLLLRRRLLLLRRRRLLLLRRRLLLLRRR"), 11, 'Test 96');
test(balancedStringSplit("RLRRLLRLRLRRLLRLRL"), 7, 'Test 97');
test(balancedStringSplit("RLRRLLRLRRLLRLRLRR"), 6, 'Test 98');
test(balancedStringSplit("RRRRLLLLLLLLRRRRLLLL"), 2, 'Test 99');
test(balancedStringSplit("RLRRRLRRRLRRRLRRRLRRRLRRRLRRRLRRRLRRRLRR"), 1, 'Test 100');
test(balancedStringSplit("RRRRLLLLRRLLRRLLRRLLRRLL"), 5, 'Test 101');
test(balancedStringSplit("RRRRRRRRLLLLLLLLRRRRRRRRLLLLLLLLRRRRRRRRLLLLLLLL"), 3, 'Test 102');
test(balancedStringSplit("LLRRLLRRLLRRLLRR"), 4, 'Test 103');
test(balancedStringSplit("LRRRLLLRRLRRLLRR"), 5, 'Test 104');
test(balancedStringSplit("LLLLRRRRLLLLRRRRLLLLRRRRLLLLRRRR"), 4, 'Test 105');
test(balancedStringSplit("RLRRLLRLRLRLRLRRLLRLRLRRLLRLRLRLRRLLRLRL"), 16, 'Test 106');
test(balancedStringSplit("RLLLLRRRRLLRRLLRRLRRLRL"), 7, 'Test 107');
test(balancedStringSplit("RRRRLLLLRRRRLLLLRRRRLLLL"), 3, 'Test 108');
test(balancedStringSplit("RRLLLLRRLLLLRRLLLL"), 2, 'Test 109');
test(balancedStringSplit("LRRLLRRLLRRLLRRLLRRLLRRLL"), 12, 'Test 110');
test(balancedStringSplit("RLRRLLRLRRLLRLRRLLRLRRLL"), 8, 'Test 111');
test(balancedStringSplit("LRRRRLLLLRRRRLLLL"), 4, 'Test 112');
test(balancedStringSplit("RRRLLRLLRRRLLRLL"), 2, 'Test 113');
test(balancedStringSplit("RLRLRLRLRLRRLLRRLLRLRLRLRL"), 11, 'Test 114');
test(balancedStringSplit("LLRRLRRLRRLRRLRRLRRL"), 3, 'Test 115');
test(balancedStringSplit("RRRRRRRRLLLLLLLLRRRRRRRRLLLLLLLL"), 2, 'Test 116');
test(balancedStringSplit("RLLLLLRRRRLLRRRLLLRLLLLLRRRRRRLLLLRRRLLRRRRLLRLLL"), 8, 'Test 117');
test(balancedStringSplit("LLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR"), 1, 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

