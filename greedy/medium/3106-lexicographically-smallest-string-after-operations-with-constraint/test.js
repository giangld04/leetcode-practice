// Test: 3106. Lexicographically Smallest String After Operations With Constraint
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { getSmallestString } = require("./solution");

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

console.log("\n3106. Lexicographically Smallest String After Operations With Constraint\n");

test(getSmallestString("zbbz", 3), aaaz, 'Test 1');
test(getSmallestString("abc", 1), aac, 'Test 2');
test(getSmallestString("abc", 0), abc, 'Test 3');
test(getSmallestString("zzz", 9), aaa, 'Test 4');
test(getSmallestString("zyxwvutsrqponmlkjihgfedcba", 50), aaaaaaaaalponmlkjihgfedcba, 'Test 5');
test(getSmallestString("xyz", 10), aaa, 'Test 6');
test(getSmallestString("aaa", 5), aaa, 'Test 7');
test(getSmallestString("abc", 2), aab, 'Test 8');
test(getSmallestString("vwxyz", 25), aaaaa, 'Test 9');
test(getSmallestString("hello", 7), aello, 'Test 10');
test(getSmallestString("abcd", 10), aaaa, 'Test 11');
test(getSmallestString("aaaa", 10), aaaa, 'Test 12');
test(getSmallestString("qrst", 20), aart, 'Test 13');
test(getSmallestString("abcdefghijklmnopqrstuvwxyz", 26), aaaaaaacijklmnopqrstuvwxyz, 'Test 14');
test(getSmallestString("xaxcd", 4), aawcd, 'Test 15');
test(getSmallestString("abc", 26), aaa, 'Test 16');
test(getSmallestString("zzzz", 25), aaaa, 'Test 17');
test(getSmallestString("abcdef", 10), aaaaaf, 'Test 18');
test(getSmallestString("zzzz", 1), azzz, 'Test 19');
test(getSmallestString("mnop", 15), akop, 'Test 20');
test(getSmallestString("lol", 0), lol, 'Test 21');
test(getSmallestString("zzz", 6), aaa, 'Test 22');
test(getSmallestString("zzzz", 26), aaaa, 'Test 23');
test(getSmallestString("aaaa", 1), aaaa, 'Test 24');
test(getSmallestString("abcdef", 26), aaaaaa, 'Test 25');
test(getSmallestString("abcdefg", 0), abcdefg, 'Test 26');
test(getSmallestString("zyxwvutsrqponmlkjihgfedcba", 100), aaaaaaaaaaaaadlkjihgfedcba, 'Test 27');
test(getSmallestString("aaaabbbbcccc", 12), aaaaaaaaaaaa, 'Test 28');
test(getSmallestString("zzzz", 16), aaaa, 'Test 29');
test(getSmallestString("abcdabcdabcd", 30), aaaaaaaaaaaa, 'Test 30');
test(getSmallestString("abcdef", 30), aaaaaa, 'Test 31');
test(getSmallestString("xyzabc", 12), aaaaaa, 'Test 32');
test(getSmallestString("qrstuv", 50), aaaaaa, 'Test 33');
test(getSmallestString("aabbcc", 12), aaaaaa, 'Test 34');
test(getSmallestString("qrstuvwxyz", 26), aaltuvwxyz, 'Test 35');
test(getSmallestString("mnopqr", 15), akopqr, 'Test 36');
test(getSmallestString("programming", 50), aaaaaajming, 'Test 37');
test(getSmallestString("mnop", 25), aaop, 'Test 38');
test(getSmallestString("qqqqqqqqqqqq", 50), aaaaaqqqqqqq, 'Test 39');
test(getSmallestString("cryptography", 100), aaaaaaaaaaaa, 'Test 40');
test(getSmallestString("nopqrs", 100), aaaaaa, 'Test 41');
test(getSmallestString("abcde", 50), aaaaa, 'Test 42');
test(getSmallestString("abcdef", 18), aaaaaa, 'Test 43');
test(getSmallestString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 2000), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 44');
test(getSmallestString("abcdefghijklmnopqrstuvwxyz", 2000), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 45');
test(getSmallestString("aaaaaaaaaaaaaaaaaaaaaaaaaaaa", 2000), aaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 46');
test(getSmallestString("zzzzzzzzzzzzzzzzzzzzzzzzzzzz", 52), aaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 47');
test(getSmallestString("qwerasdfzxcv", 15), aadrasdfzxcv, 'Test 48');
test(getSmallestString("aaaaaaaaaa", 9), aaaaaaaaaa, 'Test 49');
test(getSmallestString("qrstuv", 30), aaaquv, 'Test 50');
test(getSmallestString("abcdefghijklmnopqrstuvwxyza", 26), aaaaaaacijklmnopqrstuvwxyza, 'Test 51');
test(getSmallestString("abcdefghijklmnopqrstuvwxyz", 25), aaaaaaadijklmnopqrstuvwxyz, 'Test 52');
test(getSmallestString("vutsrqponmlkjihgfedcba", 500), aaaaaaaaaaaaaaaaaaaaaa, 'Test 53');
test(getSmallestString("zzzzzzzzzz", 25), aaaaaaaaaa, 'Test 54');
test(getSmallestString("abcdefg", 5), aaabefg, 'Test 55');
test(getSmallestString("abcdefghijklm", 39), aaaaaaaaagklm, 'Test 56');
test(getSmallestString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 400), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 57');
test(getSmallestString("qwertyuiopasdfghjklzxcvbnm", 150), aaaaaaaaaaaaaaaaaaaaaaaahm, 'Test 58');
test(getSmallestString("zzzzzzzzzz", 9), aaaaaaaaaz, 'Test 59');
test(getSmallestString("abcdef", 25), aaaaaa, 'Test 60');
test(getSmallestString("abcdefg", 20), aaaaaab, 'Test 61');
test(getSmallestString("abcdef", 0), abcdef, 'Test 62');
test(getSmallestString("wxyz", 8), aaxz, 'Test 63');
test(getSmallestString("zzzzzzzzzz", 260), aaaaaaaaaa, 'Test 64');
test(getSmallestString("mmmm", 15), ajmm, 'Test 65');
test(getSmallestString("abcabcabcabc", 12), aaaaaaaaaaaa, 'Test 66');
test(getSmallestString("zyxwvutsrqponmlkjihgfedcba", 1000), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 67');
test(getSmallestString("zzzz", 15), aaaa, 'Test 68');
test(getSmallestString("zzzzzz", 50), aaaaaa, 'Test 69');
test(getSmallestString("abcdefghij", 35), aaaaaaaabj, 'Test 70');
test(getSmallestString("mnopqr", 30), aajpqr, 'Test 71');
test(getSmallestString("zyxwvutsrqponmlkjihgfedcba", 2000), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 72');
test(getSmallestString("zyxwvutsrqponmlkjihgfedcba", 1300), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 73');
test(getSmallestString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 500), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 74');
test(getSmallestString("abcdabcd", 16), aaaaaaaa, 'Test 75');
test(getSmallestString("nopqrstuvwxyz", 78), aaaaaaaatwxyz, 'Test 76');
test(getSmallestString("xyzzxyzzxyzz", 18), aaaaaaaaaxzz, 'Test 77');
test(getSmallestString("wxyz", 11), aaaa, 'Test 78');
test(getSmallestString("abcdabcdabcd", 26), aaaaaaaaaaaa, 'Test 79');
test(getSmallestString("thequickbrownfoxjumpsoverthelazydog", 1000), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 80');
test(getSmallestString("abcdefghij", 26), aaaaaaacij, 'Test 81');
test(getSmallestString("abcdefghij", 15), aaaaaaghij, 'Test 82');
test(getSmallestString("aaaabbbb", 7), aaaaaaaa, 'Test 83');
test(getSmallestString("zzzz", 8), aaaa, 'Test 84');
test(getSmallestString("qrst", 100), aaaa, 'Test 85');
test(getSmallestString("mnopqr", 10), cnopqr, 'Test 86');
test(getSmallestString("hello", 15), aahlo, 'Test 87');
test(getSmallestString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 1000), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 88');
test(getSmallestString("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 50), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabdabcd, 'Test 89');
test(getSmallestString("qqqqqqqq", 64), aaaaaamq, 'Test 90');
test(getSmallestString("zzzzzzzzzz", 100), aaaaaaaaaa, 'Test 91');
test(getSmallestString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1000), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 92');
test(getSmallestString("abcdxyz", 50), aaaaaaa, 'Test 93');
test(getSmallestString("aquickbrownfoxjumps", 50), aaaaaaaakwnfoxjumps, 'Test 94');
test(getSmallestString("abcxyz", 12), aaaaaa, 'Test 95');
test(getSmallestString("abcdef", 13), aaaaac, 'Test 96');
test(getSmallestString("wxyz", 5), awyz, 'Test 97');
test(getSmallestString("abcd", 100), aaaa, 'Test 98');
test(getSmallestString("abcdefghijklmnopqrstuvwxyz", 1300), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 99');
test(getSmallestString("mnbvcxzlkjhgfdsapoiuytrewq", 50), aaaaaaaaijhgfdsapoiuytrewq, 'Test 100');
test(getSmallestString("vwxyz", 30), aaaaa, 'Test 101');
test(getSmallestString("qwertyuiopasdfghjklzxcvbnm", 200), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 102');
test(getSmallestString("qrstuv", 10), arstuv, 'Test 103');
test(getSmallestString("mnopqr", 20), afopqr, 'Test 104');
test(getSmallestString("jklmno", 15), aelmno, 'Test 105');
test(getSmallestString("qzab", 5), lzab, 'Test 106');
test(getSmallestString("abcdefghij", 45), aaaaaaaaaa, 'Test 107');
test(getSmallestString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 500), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 108');
test(getSmallestString("mnop", 20), afop, 'Test 109');
test(getSmallestString("zyxwvutsrqponmlkjihgfedcba", 26), aaaaaaosrqponmlkjihgfedcba, 'Test 110');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

