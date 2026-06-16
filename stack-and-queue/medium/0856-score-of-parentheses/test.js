// Test: 856. Score Of Parentheses
// 55 test cases from LeetCodeDataset
// Run: node test.js

const { scoreOfParentheses } = require("./solution");

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

console.log("\n856. Score Of Parentheses\n");

test(scoreOfParentheses("[[][]]"), 4, 'Test 1');
test(scoreOfParentheses("[[][[]]]"), 6, 'Test 2');
test(scoreOfParentheses("[]"), 1, 'Test 3');
test(scoreOfParentheses("[[[]]]"), 4, 'Test 4');
test(scoreOfParentheses("[[[][][]]]"), 12, 'Test 5');
test(scoreOfParentheses("[][][[]]"), 4, 'Test 6');
test(scoreOfParentheses("[][]"), 2, 'Test 7');
test(scoreOfParentheses("[[][[][[]]]]"), 14, 'Test 8');
test(scoreOfParentheses("[][[]]"), 3, 'Test 9');
test(scoreOfParentheses("[[]]"), 2, 'Test 10');
test(scoreOfParentheses("[[[]][]]"), 6, 'Test 11');
test(scoreOfParentheses("[][[[]]]"), 5, 'Test 12');
test(scoreOfParentheses("[[][[][[][]]]]"), 22, 'Test 13');
test(scoreOfParentheses("[[[[]][]]]"), 12, 'Test 14');
test(scoreOfParentheses("[[]][[[]]]"), 6, 'Test 15');
test(scoreOfParentheses("[][[[[]]]]"), 9, 'Test 16');
test(scoreOfParentheses("[][][]"), 3, 'Test 17');
test(scoreOfParentheses("[[]][[]]"), 4, 'Test 18');
test(scoreOfParentheses("[][[][[][[]]]]"), 15, 'Test 19');
test(scoreOfParentheses("[[][[[]][]]]"), 14, 'Test 20');
test(scoreOfParentheses("[[][]][[][]]"), 8, 'Test 21');
test(scoreOfParentheses("[[][[[]]][[]]]"), 14, 'Test 22');
test(scoreOfParentheses("[[[][][][]]]"), 16, 'Test 23');
test(scoreOfParentheses("[[[]]][][]"), 6, 'Test 24');
test(scoreOfParentheses("[[[]][[]]]"), 8, 'Test 25');
test(scoreOfParentheses("[][[][[]]]"), 7, 'Test 26');
test(scoreOfParentheses("[[[][]][[]]]"), 12, 'Test 27');
test(scoreOfParentheses("[[[][[][[]]]][]]"), 30, 'Test 28');
test(scoreOfParentheses("[[][[][][[]]]]"), 18, 'Test 29');
test(scoreOfParentheses("[[[[]]][[]]]"), 12, 'Test 30');
test(scoreOfParentheses("[[[]]][]"), 5, 'Test 31');
test(scoreOfParentheses("[[][[]][[]]]"), 10, 'Test 32');
test(scoreOfParentheses("[[[]]][[]][]"), 7, 'Test 33');
test(scoreOfParentheses("[[[][[]]][]]"), 14, 'Test 34');
test(scoreOfParentheses("[][[[]][]]"), 7, 'Test 35');
test(scoreOfParentheses("[[[[]]]]"), 8, 'Test 36');
test(scoreOfParentheses("[[][]][[]]"), 6, 'Test 37');
test(scoreOfParentheses("[[[]][][]]"), 8, 'Test 38');
test(scoreOfParentheses("[[[][[]]]]"), 12, 'Test 39');
test(scoreOfParentheses("[][[]][[][[]]]"), 9, 'Test 40');
test(scoreOfParentheses("[[[][][[]]]]"), 16, 'Test 41');
test(scoreOfParentheses("[[[[][][]]]]"), 24, 'Test 42');
test(scoreOfParentheses("[[[[][][[]]]]]"), 32, 'Test 43');
test(scoreOfParentheses("[[[[[]]]]]"), 16, 'Test 44');
test(scoreOfParentheses("[[][][[]]]"), 8, 'Test 45');
test(scoreOfParentheses("[[][[[]]]]"), 10, 'Test 46');
test(scoreOfParentheses("[][[[][][]]]"), 13, 'Test 47');
test(scoreOfParentheses("[[[][]][]]"), 10, 'Test 48');
test(scoreOfParentheses("[[]][[][[]]]"), 8, 'Test 49');
test(scoreOfParentheses("[[[[][]][]]]"), 20, 'Test 50');
test(scoreOfParentheses("[][[[]][][]]"), 9, 'Test 51');
test(scoreOfParentheses("[][][][]"), 4, 'Test 52');
test(scoreOfParentheses("[[[]]][[]]"), 6, 'Test 53');
test(scoreOfParentheses("[[[][]]]"), 8, 'Test 54');
test(scoreOfParentheses("[][[]][[]]"), 5, 'Test 55');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

