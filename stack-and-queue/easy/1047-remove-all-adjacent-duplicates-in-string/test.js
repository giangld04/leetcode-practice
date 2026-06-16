// Test: 1047. Remove All Adjacent Duplicates In String
// 42 test cases from LeetCodeDataset
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

console.log("\n1047. Remove All Adjacent Duplicates In String\n");

test(removeDuplicates("abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 1');
test(removeDuplicates("acbbcaa"), a, 'Test 2');
test(removeDuplicates("aabbaa"), , 'Test 3');
test(removeDuplicates("abcdef"), abcdef, 'Test 4');
test(removeDuplicates("abbacdcd"), cdcd, 'Test 5');
test(removeDuplicates("aaaaa"), a, 'Test 6');
test(removeDuplicates("abbaca"), ca, 'Test 7');
test(removeDuplicates("a"), a, 'Test 8');
test(removeDuplicates("aabbccddccbaaabbccdd"), ba, 'Test 9');
test(removeDuplicates(""), , 'Test 10');
test(removeDuplicates("abcddcba"), , 'Test 11');
test(removeDuplicates("abba"), , 'Test 12');
test(removeDuplicates("zyz"), zyz, 'Test 13');
test(removeDuplicates("abc"), abc, 'Test 14');
test(removeDuplicates("abbacca"), a, 'Test 15');
test(removeDuplicates("abcd"), abcd, 'Test 16');
test(removeDuplicates("abbazzyy"), , 'Test 17');
test(removeDuplicates("aabbccddeeff"), , 'Test 18');
test(removeDuplicates("aabbcc"), , 'Test 19');
test(removeDuplicates("mississippi"), m, 'Test 20');
test(removeDuplicates("aaaaaaaaa"), a, 'Test 21');
test(removeDuplicates("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), , 'Test 22');
test(removeDuplicates("aaaaaaaa"), , 'Test 23');
test(removeDuplicates("zzzyyxxwwvvuuttrrqqqllopssmmnnllkkjjiihhggffeeddccbbaa"), zqop, 'Test 24');
test(removeDuplicates("aabbccdd"), , 'Test 25');
test(removeDuplicates("azxxzy"), ay, 'Test 26');
test(removeDuplicates("aabbbccddeeeffggghhhiiiijjjjkkkkllllmmmmnnnnooopppqqqqrrrrssssttttuuuuvvvvwwwwwxxxxxyyyyyzzzzz"), beghopwxyz, 'Test 27');
test(removeDuplicates("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), , 'Test 28');
test(removeDuplicates("abcdeedcba"), , 'Test 29');
test(removeDuplicates("abcabcabcabcabcabcabcabcabcabc"), abcabcabcabcabcabcabcabcabcabc, 'Test 30');
test(removeDuplicates("abcdabcdbcaabbccdd"), abcdabcdbc, 'Test 31');
test(removeDuplicates("xyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyx"), xyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyx, 'Test 32');
test(removeDuplicates("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz, 'Test 33');
test(removeDuplicates("aabbaaabbbaaaabbbaaaaabbbbbbaaaaaaaaa"), a, 'Test 34');
test(removeDuplicates("mississiissippi"), m, 'Test 35');
test(removeDuplicates("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 36');
test(removeDuplicates("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba, 'Test 37');
test(removeDuplicates("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), , 'Test 38');
test(removeDuplicates("aaabbbcccdddcccbbbaaa"), abcdcba, 'Test 39');
test(removeDuplicates("abccbaabccbaabccbaabccbaabccbaabccbaabccbaabccba"), , 'Test 40');
test(removeDuplicates("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), , 'Test 41');
test(removeDuplicates("abacadaeafagahaiajakalamananapapaqara saratasaunaavawaxayaz"), abacadaeafagahaiajakalamananapapaqara saratasaunvawaxayaz, 'Test 42');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

