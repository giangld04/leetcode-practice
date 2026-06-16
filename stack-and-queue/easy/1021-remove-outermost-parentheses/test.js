// Test: 1021. Remove Outermost Parentheses
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { removeOuterParentheses } = require("./solution");

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

console.log("\n1021. Remove Outermost Parentheses\n");

test(removeOuterParentheses("[[][[]]][]"), [][[]], 'Test 1');
test(removeOuterParentheses("[]"), , 'Test 2');
test(removeOuterParentheses("[][[][]]"), [][], 'Test 3');
test(removeOuterParentheses("[[][]][[]]"), [][][], 'Test 4');
test(removeOuterParentheses("[[[]]]"), [[]], 'Test 5');
test(removeOuterParentheses("[][]"), , 'Test 6');
test(removeOuterParentheses(""), , 'Test 7');
test(removeOuterParentheses("[[]][[]]"), [][], 'Test 8');
test(removeOuterParentheses("[[]]"), [], 'Test 9');
test(removeOuterParentheses("[[[]][]]"), [[]][], 'Test 10');
test(removeOuterParentheses("[[][[]]][[][[]]]"), [][[]][][[]], 'Test 11');
test(removeOuterParentheses("[[][]][[]][[][[]]]"), [][][][][[]], 'Test 12');
test(removeOuterParentheses("[[[]]][][[]][[[]]]"), [[]][][[]], 'Test 13');
test(removeOuterParentheses("[[[]]][][[]]"), [[]][], 'Test 14');
test(removeOuterParentheses("[][[]][[[]]][][[]]"), [][[]][], 'Test 15');
test(removeOuterParentheses("[[]][[]][[]][[]]"), [][][][], 'Test 16');
test(removeOuterParentheses("[[][[][[][[][[]]]]]]"), [][[][[][[][[]]]]], 'Test 17');
test(removeOuterParentheses("[][[][]][[]][][]"), [][][], 'Test 18');
test(removeOuterParentheses("[[]][][[[]]][[]]"), [][[]][], 'Test 19');
test(removeOuterParentheses("[[][]][[][[]]][[][[]]]"), [][][][[]][][[]], 'Test 20');
test(removeOuterParentheses("[[][]][][[][]]"), [][][][], 'Test 21');
test(removeOuterParentheses("[][[][[]]]"), [][[]], 'Test 22');
test(removeOuterParentheses("[[[[][]]]]"), [[[][]]], 'Test 23');
test(removeOuterParentheses("[[[]][][[]]]"), [[]][][[]], 'Test 24');
test(removeOuterParentheses("[[[[[[]]]]]]"), [[[[[]]]]], 'Test 25');
test(removeOuterParentheses("[[[]][[[]]]]"), [[]][[[]]], 'Test 26');
test(removeOuterParentheses("[[][][]]"), [][][], 'Test 27');
test(removeOuterParentheses("[[[[[]][]][]]]"), [[[[]][]][]], 'Test 28');
test(removeOuterParentheses("[[[]][[]]][[[]]]"), [[]][[]][[]], 'Test 29');
test(removeOuterParentheses("[[[][][[]]]]"), [[][][[]]], 'Test 30');
test(removeOuterParentheses("[[][]][[][]][[][]]"), [][][][][][], 'Test 31');
test(removeOuterParentheses("[[[]]][[]][[[]]]"), [[]][][[]], 'Test 32');
test(removeOuterParentheses("[][[]][[[][]]]"), [][[][]], 'Test 33');
test(removeOuterParentheses("[][[]][[]][[]]"), [][][], 'Test 34');
test(removeOuterParentheses("[][][][][]"), , 'Test 35');
test(removeOuterParentheses("[][[][[]]][][[[]]]"), [][[]][[]], 'Test 36');
test(removeOuterParentheses("[[[]][]][[][[][[]]]]"), [[]][][][[][[]]], 'Test 37');
test(removeOuterParentheses("[[][[][[][[]]]]]"), [][[][[][[]]]], 'Test 38');
test(removeOuterParentheses("[[[]]][[]][[][]]"), [[]][][][], 'Test 39');
test(removeOuterParentheses("[[[][][][]]]"), [[][][][]], 'Test 40');
test(removeOuterParentheses("[[[][]]][[][[]]]"), [[][]][][[]], 'Test 41');
test(removeOuterParentheses("[][[][[]]][[[]]]"), [][[]][[]], 'Test 42');
test(removeOuterParentheses("[[][[]]][[][[]]][][]"), [][[]][][[]], 'Test 43');
test(removeOuterParentheses("[[[[]]][[][[][[]]]]]"), [[[]]][[][[][[]]]], 'Test 44');
test(removeOuterParentheses("[[[]]][[[]][]][[][]]"), [[]][[]][][][], 'Test 45');
test(removeOuterParentheses("[[[[]]][[][[]]]]"), [[[]]][[][[]]], 'Test 46');
test(removeOuterParentheses("[[[]]][[[]]][[[]]]"), [[]][[]][[]], 'Test 47');
test(removeOuterParentheses("[[]][][[[]]]"), [][[]], 'Test 48');
test(removeOuterParentheses("[[[]]][[]][][[][]]"), [[]][][][], 'Test 49');
test(removeOuterParentheses("[[][[][[][[][[][]]]]]]"), [][[][[][[][[][]]]]], 'Test 50');
test(removeOuterParentheses("[[[]]][[[]]]"), [[]][[]], 'Test 51');
test(removeOuterParentheses("[[][[]]][][[[]][]]"), [][[]][[]][], 'Test 52');
test(removeOuterParentheses("[[][[][[][[]]]]][[][[][[]]]]"), [][[][[][[]]]][][[][[]]], 'Test 53');
test(removeOuterParentheses("[[[]]][[]][[]]"), [[]][][], 'Test 54');
test(removeOuterParentheses("[[[[]][]]][[[]]]"), [[[]][]][[]], 'Test 55');
test(removeOuterParentheses("[[[[]]][]][[[]]]"), [[[]]][][[]], 'Test 56');
test(removeOuterParentheses("[][][][]"), , 'Test 57');
test(removeOuterParentheses("[[][[][[][]]]]"), [][[][[][]]], 'Test 58');
test(removeOuterParentheses("[[][[][[]]]]"), [][[][[]]], 'Test 59');
test(removeOuterParentheses("[[[]][[]]][[][[]]]"), [[]][[]][][[]], 'Test 60');
test(removeOuterParentheses("[[[]][][]][[[][]]]"), [[]][][][[][]], 'Test 61');
test(removeOuterParentheses("[[]][][[]][[]][]"), [][][], 'Test 62');
test(removeOuterParentheses("[[[][]]][[][[][[][]]]]"), [[][]][][[][[][]]], 'Test 63');
test(removeOuterParentheses("[[[[[][]]]][[[]]]]"), [[[[][]]]][[[]]], 'Test 64');
test(removeOuterParentheses("[[[][]][[]]]"), [[][]][[]], 'Test 65');
test(removeOuterParentheses("[[][]][[][[]]][[][[][[]]]]"), [][][][[]][][[][[]]], 'Test 66');
test(removeOuterParentheses("[[[]]][[][[]]][[[]]]"), [[]][][[]][[]], 'Test 67');
test(removeOuterParentheses("[[[][]]][[]][[][[]]]"), [[][]][][][[]], 'Test 68');
test(removeOuterParentheses("[][[][[][[][]]]]"), [][[][[][]]], 'Test 69');
test(removeOuterParentheses("[][][[[[]]]][]"), [[[]]], 'Test 70');
test(removeOuterParentheses("[[[[]]]]"), [[[]]], 'Test 71');
test(removeOuterParentheses("[[][[[]]][[]][]]"), [][[[]]][[]][], 'Test 72');
test(removeOuterParentheses("[[]][[]][[]]"), [][][], 'Test 73');
test(removeOuterParentheses("[[][[[]]]]"), [][[[]]], 'Test 74');
test(removeOuterParentheses("[[[]][[][[][]]]][[[]]]"), [[]][[][[][]]][[]], 'Test 75');
test(removeOuterParentheses("[[[]][]][[]]"), [[]][][], 'Test 76');
test(removeOuterParentheses("[][[[]]][][[]]"), [[]][], 'Test 77');
test(removeOuterParentheses("[[][[][[][[]]]]][[][[][[][[][[]]]]][[][[][[][[]]]]]"), [][[][[][[]]]][][[][[][[][[]]]]][[][[][[][[]]]]], 'Test 78');
test(removeOuterParentheses("[][[][[][[]]]][]"), [][[][[]]], 'Test 79');
test(removeOuterParentheses("[][[[]][[]]][][]"), [[]][[]], 'Test 80');
test(removeOuterParentheses("[[[][][]][]]"), [[][][]][], 'Test 81');
test(removeOuterParentheses("[][[][[]]][][[][]]"), [][[]][][], 'Test 82');
test(removeOuterParentheses("[[[]]][[[[][]]]]"), [[]][[[][]]], 'Test 83');
test(removeOuterParentheses("[[[]]][[][[]]]"), [[]][][[]], 'Test 84');
test(removeOuterParentheses("[][][][][][][][]"), , 'Test 85');
test(removeOuterParentheses("[[[]][[]]]"), [[]][[]], 'Test 86');
test(removeOuterParentheses("[[][]][[[]]][]"), [][][[]], 'Test 87');
test(removeOuterParentheses("[[]][[][[]]][]"), [][][[]], 'Test 88');
test(removeOuterParentheses("[[[]][]][[][[]]]"), [[]][][][[]], 'Test 89');
test(removeOuterParentheses("[[][[]]][[][[]]][[][[]]]"), [][[]][][[]][][[]], 'Test 90');
test(removeOuterParentheses("[[[[]]][[]]]"), [[[]]][[]], 'Test 91');
test(removeOuterParentheses("[][][][][][]"), , 'Test 92');
test(removeOuterParentheses("[[][[][]][[]]]"), [][[][]][[]], 'Test 93');
test(removeOuterParentheses("[[[][]][[][]]]"), [[][]][[][]], 'Test 94');
test(removeOuterParentheses("[[[]]][[][[]]][[][[]]]"), [[]][][[]][][[]], 'Test 95');
test(removeOuterParentheses("[[[][[[]]]]]"), [[][[[]]]], 'Test 96');
test(removeOuterParentheses("[[[[]]]][[[[]]]]"), [[[]]][[[]]], 'Test 97');
test(removeOuterParentheses("[[[[[]]]]]"), [[[[]]]], 'Test 98');
test(removeOuterParentheses("[[][[]]][[[]][[][[][]]]]"), [][[]][[]][[][[][]]], 'Test 99');
test(removeOuterParentheses("[[][]][[]][[][[]]][[][[]]]"), [][][][][[]][][[]], 'Test 100');
test(removeOuterParentheses("[[[]][]][[[]]]"), [[]][][[]], 'Test 101');
test(removeOuterParentheses("[][[][]][[][[]]][[][[]]]"), [][][][[]][][[]], 'Test 102');
test(removeOuterParentheses("[[[][[]]][[]]]"), [[][[]]][[]], 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

