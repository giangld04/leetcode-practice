// Test: 2800. Shortest String That Contains Three Strings
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { minimumString } = require("./solution");

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

console.log("\n2800. Shortest String That Contains Three Strings\n");

test(minimumString("aaaa", "bbbb", "cccc"), aaaabbbbcccc, 'Test 1');
test(minimumString("aaa", "aa", "a"), aaa, 'Test 2');
test(minimumString("ab", "ba", "aba"), aba, 'Test 3');
test(minimumString("hello", "world", "hold"), helloholdworld, 'Test 4');
test(minimumString("a", "b", "c"), abc, 'Test 5');
test(minimumString("abcabc", "bcabc", "cabc"), abcabc, 'Test 6');
test(minimumString("same", "same", "same"), same, 'Test 7');
test(minimumString("a", "ab", "abc"), abc, 'Test 8');
test(minimumString("xyz", "yzx", "zxy"), xyzxy, 'Test 9');
test(minimumString("aaa", "bbb", "ccc"), aaabbbccc, 'Test 10');
test(minimumString("abcde", "cdefg", "efghi"), abcdefghi, 'Test 11');
test(minimumString("xyz", "zyx", "yzx"), zyxyzx, 'Test 12');
test(minimumString("abc", "bca", "aaa"), aaabca, 'Test 13');
test(minimumString("zzz", "zz", "z"), zzz, 'Test 14');
test(minimumString("abcd", "bcd", "cde"), abcde, 'Test 15');
test(minimumString("dog", "god", "dog"), dogod, 'Test 16');
test(minimumString("start", "middle", "end"), middlendstart, 'Test 17');
test(minimumString("abc", "abc", "abc"), abc, 'Test 18');
test(minimumString("abc", "def", "ghi"), abcdefghi, 'Test 19');
test(minimumString("short", "longerstring", "tiny"), longerstringshortiny, 'Test 20');
test(minimumString("one", "two", "three"), threetwone, 'Test 21');
test(minimumString("alphabet", "bet", "phabet"), alphabet, 'Test 22');
test(minimumString("abacabad", "acabadab", "adabacab"), adabacabadab, 'Test 23');
test(minimumString("unique", "queue", "ueuniq"), ueuniqueue, 'Test 24');
test(minimumString("short", "longer", "longest"), longerlongestshort, 'Test 25');
test(minimumString("abcabcabc", "bcabcabca", "cabcabcab"), abcabcabcab, 'Test 26');
test(minimumString("abcd", "bcd", "cd"), abcd, 'Test 27');
test(minimumString("abcxyz", "xyzabc", "bcxyza"), abcxyzabc, 'Test 28');
test(minimumString("intersection", "section", "inter"), intersection, 'Test 29');
test(minimumString("abcdefg", "efghijk", "ghijklm"), abcdefghijklm, 'Test 30');
test(minimumString("abc", "bcd", "cde"), abcde, 'Test 31');
test(minimumString("abcd", "bcde", "cdef"), abcdef, 'Test 32');
test(minimumString("supercalifragilisticexpialidocious", "califragilistic", "fragilisticexpialidocious"), supercalifragilisticexpialidocious, 'Test 33');
test(minimumString("abacaba", "acababc", "bacab"), abacababc, 'Test 34');
test(minimumString("hello", "world", "helloworld"), helloworld, 'Test 35');
test(minimumString("abcd", "dcba", "bacd"), abcdcbacd, 'Test 36');
test(minimumString("mnop", "nopq", "opqr"), mnopqr, 'Test 37');
test(minimumString("sequence", "sequenceabc", "absequence"), absequenceabc, 'Test 38');
test(minimumString("prefix", "suffix", "fix"), prefixsuffix, 'Test 39');
test(minimumString("aaa", "aab", "aba"), aaaba, 'Test 40');
test(minimumString("aabbcc", "bbccdd", "ccddeeff"), aabbccddeeff, 'Test 41');
test(minimumString("xyzz", "zzxy", "xyxy"), xyxyzzxy, 'Test 42');
test(minimumString("abcde", "edcba", "cabde"), cabdedcbabcde, 'Test 43');
test(minimumString("abcdef", "defghi", "ghijkl"), abcdefghijkl, 'Test 44');
test(minimumString("abcdefg", "efghijk", "ghijkl"), abcdefghijkl, 'Test 45');
test(minimumString("pqrs", "rstu", "stuv"), pqrstuv, 'Test 46');
test(minimumString("abcdxyz", "xyzabc", "bcde"), abcdxyzabcde, 'Test 47');
test(minimumString("abcdabcd", "bcdbcd", "dcbcdabc"), dcbcdabcdabcdbcd, 'Test 48');
test(minimumString("algorithm", "rhythm", "thmology"), algorithmologyrhythm, 'Test 49');
test(minimumString("banana", "nab", "ana"), bananab, 'Test 50');
test(minimumString("intersect", "section", "inter"), intersection, 'Test 51');
test(minimumString("apple", "peach", "cherry"), applepeacherry, 'Test 52');
test(minimumString("abcabc", "bcabca", "cababc"), cababcabca, 'Test 53');
test(minimumString("hello", "lohe", "hello"), hellohe, 'Test 54');
test(minimumString("xyzabc", "bcdef", "defg"), xyzabcdefg, 'Test 55');
test(minimumString("overlap", "lapover", "over"), lapoverlap, 'Test 56');
test(minimumString("longstring", "stringlong", "nstringl"), nstringlongstring, 'Test 57');
test(minimumString("abcdef", "defabc", "efabcd"), defabcdef, 'Test 58');
test(minimumString("xy", "yx", "xyz"), yxyz, 'Test 59');
test(minimumString("abc", "cab", "bac"), bacabc, 'Test 60');
test(minimumString("apple", "plea", "eat"), appleat, 'Test 61');
test(minimumString("abcabcabc", "bcabcbc", "cabcbcb"), abcabcabcbcb, 'Test 62');
test(minimumString("pqr", "qrp", "rpq"), pqrpq, 'Test 63');
test(minimumString("hello", "world", "hello"), helloworld, 'Test 64');
test(minimumString("abcdefg", "efgabcd", "fgabcde"), efgabcdefg, 'Test 65');
test(minimumString("aaabbb", "bbbaaa", "aaabbb"), aaabbbaaa, 'Test 66');
test(minimumString("xyz", "zyx", "xyx"), xyxyzyx, 'Test 67');
test(minimumString("abcdefgh", "efghijkl", "ghijklmn"), abcdefghijklmn, 'Test 68');
test(minimumString("aaabbb", "bbbaaa", "aabbaa"), aaabbbaaabbaa, 'Test 69');
test(minimumString("abcdabcd", "cdabcdabcd", "bcdabcdabcd"), bcdabcdabcd, 'Test 70');
test(minimumString("xyz", "wxyz", "vwxyz"), vwxyz, 'Test 71');
test(minimumString("programming", "coding", "ingenuity"), codingenuityprogramming, 'Test 72');
test(minimumString("zebra", "bra", "ebra"), zebra, 'Test 73');
test(minimumString("zzz", "zzzz", "zzzzz"), zzzzz, 'Test 74');
test(minimumString("longstring", "stringlong", "ngstringlo"), longstringlong, 'Test 75');
test(minimumString("antidisestablishmentarianism", "disestablishmentarianism", "establishmentarianism"), antidisestablishmentarianism, 'Test 76');
test(minimumString("xyzabc", "bcdef", "defgh"), xyzabcdefgh, 'Test 77');
test(minimumString("banana", "ananas", "nana"), bananas, 'Test 78');
test(minimumString("abcde", "edcba", "bcde"), abcdedcba, 'Test 79');
test(minimumString("aaaaaa", "aaaaaab", "baaaaaa"), baaaaaab, 'Test 80');
test(minimumString("aabbcc", "bbccaa", "ccaabb"), aabbccaabb, 'Test 81');
test(minimumString("zzzz", "zzzz", "zzzz"), zzzz, 'Test 82');
test(minimumString("unique", "queue", "uniq"), uniqueue, 'Test 83');
test(minimumString("banana", "nab", "ananab"), bananab, 'Test 84');
test(minimumString("longword", "wordlong", "long"), longwordlong, 'Test 85');
test(minimumString("aaaa", "aaab", "aabb"), aaaabb, 'Test 86');
test(minimumString("banana", "nabana", "anaban"), anabanana, 'Test 87');
test(minimumString("banana", "anana", "nana"), banana, 'Test 88');
test(minimumString("hello", "lohe", "world"), helloheworld, 'Test 89');
test(minimumString("pneumonoultramicroscopicsilicovolcanoconiosis", "microscopicsilicovolcanoconiosis", "silicovolcanoconiosis"), pneumonoultramicroscopicsilicovolcanoconiosis, 'Test 90');
test(minimumString("xylophone", "lophon", "phone"), xylophone, 'Test 91');
test(minimumString("abac", "bacd", "acde"), abacde, 'Test 92');
test(minimumString("mississippi", "issi", "sip"), mississippi, 'Test 93');
test(minimumString("abcdefg", "defgabc", "fgabcde"), defgabcdefg, 'Test 94');
test(minimumString("abc", "cbad", "dabc"), cbadabc, 'Test 95');
test(minimumString("aab", "abb", "bba"), aabba, 'Test 96');
test(minimumString("aaaab", "bbbaa", "aabba"), bbbaaaabba, 'Test 97');
test(minimumString("abcd", "cdab", "abcd"), abcdab, 'Test 98');
test(minimumString("abcdefg", "ghijklm", "jklmnop"), abcdefghijklmnop, 'Test 99');
test(minimumString("banana", "nab", "nan"), bananab, 'Test 100');
test(minimumString("abcdabcd", "bcdbcdb", "cdcdcdc"), abcdabcdbcdbcdcdcdc, 'Test 101');
test(minimumString("mnopqr", "pqrs", "rstuv"), mnopqrstuv, 'Test 102');
test(minimumString("overlap", "lapover", "verlapo"), lapoverlapo, 'Test 103');
test(minimumString("abcd", "cdab", "bcda"), abcdab, 'Test 104');
test(minimumString("abacaba", "cabacab", "bacabac"), cabacabac, 'Test 105');
test(minimumString("overlap", "laplap", "lapping"), overlaplapping, 'Test 106');
test(minimumString("hello", "world", "helowrld"), hellohelowrldworld, 'Test 107');
test(minimumString("abcdefghij", "ghijklmnop", "mnopqrstuv"), abcdefghijklmnopqrstuv, 'Test 108');
test(minimumString("aaaab", "bbbbb", "ccccd"), aaaabbbbbccccd, 'Test 109');
test(minimumString("hello", "world", "owor"), helloworld, 'Test 110');
test(minimumString("ab", "bc", "ca"), abca, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

