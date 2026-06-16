// Test: 2414. Length Of The Longest Alphabetical Continuous Substring
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { longestContinuousSubstring } = require("./solution");

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

console.log("\n2414. Length Of The Longest Alphabetical Continuous Substring\n");

test(longestContinuousSubstring("zzzzzzzzz"), 1, 'Test 1');
test(longestContinuousSubstring("abxyz"), 3, 'Test 2');
test(longestContinuousSubstring("qrstuvwpqrstu"), 7, 'Test 3');
test(longestContinuousSubstring("mnopqrstuvwxyzz"), 14, 'Test 4');
test(longestContinuousSubstring("abcdefghijklmnopqrstuvwxyz"), 26, 'Test 5');
test(longestContinuousSubstring("mnopqrstuvwxyza"), 14, 'Test 6');
test(longestContinuousSubstring("abababab"), 2, 'Test 7');
test(longestContinuousSubstring("qrstuvwxyza"), 10, 'Test 8');
test(longestContinuousSubstring("bcdfghij"), 5, 'Test 9');
test(longestContinuousSubstring("a"), 1, 'Test 10');
test(longestContinuousSubstring("abcdabcde"), 5, 'Test 11');
test(longestContinuousSubstring("pqrstuvwxyzabc"), 11, 'Test 12');
test(longestContinuousSubstring("ababababab"), 2, 'Test 13');
test(longestContinuousSubstring("mnopqr"), 6, 'Test 14');
test(longestContinuousSubstring("abcde"), 5, 'Test 15');
test(longestContinuousSubstring("xyz"), 3, 'Test 16');
test(longestContinuousSubstring("mnopqrstu"), 9, 'Test 17');
test(longestContinuousSubstring("qrstuvwpqr"), 7, 'Test 18');
test(longestContinuousSubstring("zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 19');
test(longestContinuousSubstring("abccba"), 3, 'Test 20');
test(longestContinuousSubstring("acdfg"), 2, 'Test 21');
test(longestContinuousSubstring("defghijklmno"), 12, 'Test 22');
test(longestContinuousSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 2, 'Test 23');
test(longestContinuousSubstring("zab"), 2, 'Test 24');
test(longestContinuousSubstring("abxyzab"), 3, 'Test 25');
test(longestContinuousSubstring("bcdfghjkl"), 3, 'Test 26');
test(longestContinuousSubstring("abacaba"), 2, 'Test 27');
test(longestContinuousSubstring("xyzabc"), 3, 'Test 28');
test(longestContinuousSubstring("abcabcvwxyz"), 5, 'Test 29');
test(longestContinuousSubstring("abcdefgxyzabcdefghijlmnopqrstuvwxyz"), 15, 'Test 30');
test(longestContinuousSubstring("abcdefghijlmnopqrstuvwxyzmnopqrstuvwxy"), 15, 'Test 31');
test(longestContinuousSubstring("mnopqrstuabcdefghijklmnopqrstuvwxyzaabcdeefghijklmnopqrstuvwxyz"), 26, 'Test 32');
test(longestContinuousSubstring("defghijklmnopqrstuvwxyz"), 23, 'Test 33');
test(longestContinuousSubstring("mnopqrstuvmnopqrstu"), 10, 'Test 34');
test(longestContinuousSubstring("mnopqrstuuvwxyzaaaa"), 9, 'Test 35');
test(longestContinuousSubstring("abcabcdabcdeabcdeabcd"), 5, 'Test 36');
test(longestContinuousSubstring("abcdefghijklmnopqrstuvwxyzab"), 26, 'Test 37');
test(longestContinuousSubstring("abcdefghijklmnopqrstuvwxyzz"), 26, 'Test 38');
test(longestContinuousSubstring("pqrsabcdewxyz"), 5, 'Test 39');
test(longestContinuousSubstring("xyzabcd"), 4, 'Test 40');
test(longestContinuousSubstring("aaaabbbbcccc"), 2, 'Test 41');
test(longestContinuousSubstring("zzzzzzzzzz"), 1, 'Test 42');
test(longestContinuousSubstring("abxyzabxyz"), 3, 'Test 43');
test(longestContinuousSubstring("abdefgxyz"), 4, 'Test 44');
test(longestContinuousSubstring("defghijklmnopqrstuvw"), 20, 'Test 45');
test(longestContinuousSubstring("mnopqrstuvxyzab"), 10, 'Test 46');
test(longestContinuousSubstring("pqrstuvwxyzaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 11, 'Test 47');
test(longestContinuousSubstring("mnopqrstuabcde"), 9, 'Test 48');
test(longestContinuousSubstring("abcxyzab"), 3, 'Test 49');
test(longestContinuousSubstring("abcdefgxyzabcde"), 7, 'Test 50');
test(longestContinuousSubstring("abcabcabcabcabcabcabc"), 3, 'Test 51');
test(longestContinuousSubstring("pqrstuvwxyza"), 11, 'Test 52');
test(longestContinuousSubstring("mnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 14, 'Test 53');
test(longestContinuousSubstring("mnopqrstuvwxyzmnopqrstuvwxyzmnopqrstuvwxyzmnopqrstuvwxyzmnopqrstuvwxyz"), 14, 'Test 54');
test(longestContinuousSubstring("lmnopqrstuvwxyzabc"), 15, 'Test 55');
test(longestContinuousSubstring("mnopqrstuvwxyzabcdefghijkl"), 14, 'Test 56');
test(longestContinuousSubstring("qrsabcdabcdxyz"), 4, 'Test 57');
test(longestContinuousSubstring("defghijklmnopqrstuvwxyza"), 23, 'Test 58');
test(longestContinuousSubstring("mnopqrstuvwxyzmnopqrstuvwxyza"), 14, 'Test 59');
test(longestContinuousSubstring("abcdeabfghicdef"), 5, 'Test 60');
test(longestContinuousSubstring("xyzabxyzuvwxyza"), 6, 'Test 61');
test(longestContinuousSubstring("abxyzabcxyz"), 3, 'Test 62');
test(longestContinuousSubstring("qrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 10, 'Test 63');
test(longestContinuousSubstring("abcdefabcdeabcde"), 6, 'Test 64');
test(longestContinuousSubstring("pqrsabcd"), 4, 'Test 65');
test(longestContinuousSubstring("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 26, 'Test 66');
test(longestContinuousSubstring("abcdefghijklmnopqrstuvwxyzmnopqrstuvwxyz"), 26, 'Test 67');
test(longestContinuousSubstring("abcdefghijklmnopqrstuvwxyza"), 26, 'Test 68');
test(longestContinuousSubstring("klmnopqrstuvxyz"), 12, 'Test 69');
test(longestContinuousSubstring("abababababab"), 2, 'Test 70');
test(longestContinuousSubstring("mnopqrstuabcdefghijklmnopqrstuvwxyzaabcde"), 26, 'Test 71');
test(longestContinuousSubstring("mnopqrstuvwxyzabcde"), 14, 'Test 72');
test(longestContinuousSubstring("xyzabcde"), 5, 'Test 73');
test(longestContinuousSubstring("mnopqrstuzyxwvutsrqponmlkjihgfedcba"), 9, 'Test 74');
test(longestContinuousSubstring("qrsabcdabcdabcd"), 4, 'Test 75');
test(longestContinuousSubstring("mnopqrstuvwxyzabcdefghijklmno"), 15, 'Test 76');
test(longestContinuousSubstring("abcdeabcdabcdabcdabcde"), 5, 'Test 77');
test(longestContinuousSubstring("mnopqrstuabcdefghijklmnopqrstuvwxyza"), 26, 'Test 78');
test(longestContinuousSubstring("aaaaa"), 1, 'Test 79');
test(longestContinuousSubstring("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 26, 'Test 80');
test(longestContinuousSubstring("zabcdefghijklmnopqrstuvwxyz"), 26, 'Test 81');
test(longestContinuousSubstring("xyzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxz"), 3, 'Test 82');
test(longestContinuousSubstring("mnopqrstuuvwxyza"), 9, 'Test 83');
test(longestContinuousSubstring("abcdefgabcdefgabcdefgabcdefg"), 7, 'Test 84');
test(longestContinuousSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 85');
test(longestContinuousSubstring("qrstuvwxyzabcdefghijklmnop"), 16, 'Test 86');
test(longestContinuousSubstring("abcdxyzuvwxyza"), 6, 'Test 87');
test(longestContinuousSubstring("mnopqrstuvwxyzmnopqrstu"), 14, 'Test 88');
test(longestContinuousSubstring("xyzzyxwvutsrqponmlkjihgfedcba"), 3, 'Test 89');
test(longestContinuousSubstring("zabcdefghijklmnopqrstuvwxy"), 25, 'Test 90');
test(longestContinuousSubstring("zabcvwxyz"), 5, 'Test 91');
test(longestContinuousSubstring("abxyzabcd"), 4, 'Test 92');
test(longestContinuousSubstring("mnopqrlmnopqr"), 7, 'Test 93');
test(longestContinuousSubstring("aabcdefghijklmnopqrstuvwxyz"), 26, 'Test 94');
test(longestContinuousSubstring("abxyzabc"), 3, 'Test 95');
test(longestContinuousSubstring("qrstuvwpqrstuzyxwvutsrqponmlkjihgfedcba"), 7, 'Test 96');
test(longestContinuousSubstring("zabcdefghijklmnopqrstuvwxyza"), 26, 'Test 97');
test(longestContinuousSubstring("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 3, 'Test 98');
test(longestContinuousSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaabbcc"), 2, 'Test 99');
test(longestContinuousSubstring("abcdefghijlmnopqrstuvwxyz"), 15, 'Test 100');
test(longestContinuousSubstring("abcddefghijklmnopqrstuvwxyz"), 23, 'Test 101');
test(longestContinuousSubstring("abcdeabcdeabcde"), 5, 'Test 102');
test(longestContinuousSubstring("qrstuvwxyz"), 10, 'Test 103');
test(longestContinuousSubstring("abcdefghijkabcde"), 11, 'Test 104');
test(longestContinuousSubstring("abcdefgabcdefgabcdefg"), 7, 'Test 105');
test(longestContinuousSubstring("abcdefg hijklmnop qrstuvwx yz"), 9, 'Test 106');
test(longestContinuousSubstring("abcdefghijlkjihgfedcba"), 10, 'Test 107');
test(longestContinuousSubstring("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 26, 'Test 108');
test(longestContinuousSubstring("zyxwvutsrqponmlkjihgfedcbaedcba"), 1, 'Test 109');
test(longestContinuousSubstring("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), 3, 'Test 110');
test(longestContinuousSubstring("abcdefghijklmnopqrstuvwxyzaabcdefghijklmnopqrstuvwxyza"), 26, 'Test 111');
test(longestContinuousSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 112');
test(longestContinuousSubstring("xyzzyxwvutsrqpomnlkjihgfedcba"), 3, 'Test 113');
test(longestContinuousSubstring("pqrstuvwxyzabcde"), 11, 'Test 114');
test(longestContinuousSubstring("lmnopqrsabcd"), 8, 'Test 115');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

