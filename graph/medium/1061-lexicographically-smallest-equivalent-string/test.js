// Test: 1061. Lexicographically Smallest Equivalent String
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { smallestEquivalentString } = require("./solution");

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

console.log("\n1061. Lexicographically Smallest Equivalent String\n");

test(smallestEquivalentString("abc", "bcd", "xyz"), xyz, 'Test 1');
test(smallestEquivalentString("leetcode", "programs", "sourcecode"), aauaaaaada, 'Test 2');
test(smallestEquivalentString("parker", "morris", "parser"), makkek, 'Test 3');
test(smallestEquivalentString("abc", "bcd", "zab"), zaa, 'Test 4');
test(smallestEquivalentString("abc", "bcd", "ace"), aae, 'Test 5');
test(smallestEquivalentString("a", "b", "z"), z, 'Test 6');
test(smallestEquivalentString("aaa", "bbb", "ccc"), ccc, 'Test 7');
test(smallestEquivalentString("a", "z", "abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxya, 'Test 8');
test(smallestEquivalentString("hello", "world", "hold"), hdld, 'Test 9');
test(smallestEquivalentString("abc", "cde", "eed"), aab, 'Test 10');
test(smallestEquivalentString("abcdefghij", "abcdefghij", "abcdefghij"), abcdefghij, 'Test 11');
test(smallestEquivalentString("aabbaabbccdd", "bbaaddeeccff", "aabbaabbccdd"), aaaaaaaaccaa, 'Test 12');
test(smallestEquivalentString("mnopqrstuvwxyzabcdefghijkl", "pqrstuvwxyzabcdefghijklmno", "abcdefghijklmnopqrstuvwxyz"), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 13');
test(smallestEquivalentString("abacaba", "zbzbzbz", "zzzabzz"), aaaabaa, 'Test 14');
test(smallestEquivalentString("aaaaaaabbbbbbcccccc", "ccccccbbbbbbaaaaaa", "abcabcabcabcabcabc"), Error: string index out of range, 'Test 15');
test(smallestEquivalentString("abcdef", "fedcba", "abcdef"), abccba, 'Test 16');
test(smallestEquivalentString("abacabadabacaba", "zzzzzzzzzzzzzzz", "abcdefghijklmnopqrstuvwxyz"), aaaaefghijklmnopqrstuvwxya, 'Test 17');
test(smallestEquivalentString("qqqqqqqqqq", "wwwwwwwwww", "quicksort"), quicksort, 'Test 18');
test(smallestEquivalentString("qwertyuiop", "asdfghjklz", "qwertyuiopasdfghjklz"), asdfghjilpasdfghjilp, 'Test 19');
test(smallestEquivalentString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzaaayyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa", "thequickbrownfoxjumpsoverthelazydog"), ihelhiakaknfnfnejhmmjngekihelaaddng, 'Test 20');
test(smallestEquivalentString("mnopqr", "nopqrs", "mnopqrstuvwxyz"), mmmmmmmtuvwxyz, 'Test 21');
test(smallestEquivalentString("zzzzzz", "zzzzzz", "zzzzzz"), zzzzzz, 'Test 22');
test(smallestEquivalentString("abcdefgh", "hgfedcba", "abcdefgh"), abcddcba, 'Test 23');
test(smallestEquivalentString("abacabadaba", "xyzxyzxyzxy", "abcdefghijklmnopqrstuvwxyz"), aaaaefghijklmnopqrstuvwaaa, 'Test 24');
test(smallestEquivalentString("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz", "basestring"), bahehgiimg, 'Test 25');
test(smallestEquivalentString("ab", "ba", "abcd"), aacd, 'Test 26');
test(smallestEquivalentString("abacabad", "pqprpqps", "zabcde"), zabcde, 'Test 27');
test(smallestEquivalentString("abcdefg", "gfedcba", "zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihabcdcba, 'Test 28');
test(smallestEquivalentString("abcabcabc", "defdefdef", "abcdefg"), abcabcg, 'Test 29');
test(smallestEquivalentString("abcdefabcdefabcdef", "fedcbafedcbafedcbafedcbafedcba", "thisisaverycomplexexample"), thisisavbrycomplbxbxamplb, 'Test 30');
test(smallestEquivalentString("mnopqr", "nopqrm", "mnopqrstuvwxyz"), mmmmmmstuvwxyz, 'Test 31');
test(smallestEquivalentString("xyzzxyzz", "zzxxyyzz", "zzzzyyyyxxxxyyyy"), xxxxxxxxxxxxxxxx, 'Test 32');
test(smallestEquivalentString("aaaaabbbbbccccc", "bbbbbcccccddddd", "fedcba"), feaaaa, 'Test 33');
test(smallestEquivalentString("abcabcabc", "cbacbacba", "abcdefghi"), abadefghi, 'Test 34');
test(smallestEquivalentString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzaaayyxxwwvvuuttsrrqqppoonnmlkkjjiihhggffeeddccbbaa", "abcdefghijklmnopqrstuvwxyz"), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 35');
test(smallestEquivalentString("zzzzzzzzzz", "aaaaaaaaaa", "zzzzzzzzzz"), aaaaaaaaaa, 'Test 36');
test(smallestEquivalentString("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxxyyyyzzzz", "abcdefghijklmnopqrstuvwxyz", "thequickbrownfoxjumpsoverthelazydog"), Error: string index out of range, 'Test 37');
test(smallestEquivalentString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "cbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacb", "abcdefghijklmnopqrstuvwxyz"), abadefghijklmnopqrstuvwxyz, 'Test 38');
test(smallestEquivalentString("aabbcc", "bbccdd", "abcabc"), aaaaaa, 'Test 39');
test(smallestEquivalentString("abacabad", "bcbcbcbc", "zzzzzzzz"), zzzzzzzz, 'Test 40');
test(smallestEquivalentString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "bbaaccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyza", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), aacdefghijklmnopqrstuvwxyaaacdefghijklmnopqrstuvwxya, 'Test 41');
test(smallestEquivalentString("aaaaabbbbbccccc", "zzzzzyyyyyxxxxx", "azbycxdwevfugthsiqjronmpkl"), aabbccdwevfugthsiqjronmpkl, 'Test 42');
test(smallestEquivalentString("aaabbbcccddd", "bbbaaaccdddbbb", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aaaaaaaaeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 43');
test(smallestEquivalentString("abababababababab", "babababababababa", "abababababababab"), aaaaaaaaaaaaaaaa, 'Test 44');
test(smallestEquivalentString("abcde", "vwxyz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee, 'Test 45');
test(smallestEquivalentString("acaeac", "cdcdcd", "acaeacdcd"), aaaaaaaaa, 'Test 46');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "qponmlkjihgfedcba"), jklmmlkjihgfedcba, 'Test 47');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "zyxwvutsrqponmlkjihgfedcba"), abcdefghijklmmlkjihgfedcba, 'Test 48');
test(smallestEquivalentString("mnopqr", "qrstuv", "mnopqrqqqqqq"), mnopmnmmmmmm, 'Test 49');
test(smallestEquivalentString("abcdeabcde", "fghijfghij", "abcdefghij"), abcdeabcde, 'Test 50');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "thequickbrownfoxjumpsoverthelazydog"), thequickbrownfoxjumpsoverthelazydog, 'Test 51');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "smallestequivalentstring"), hmallehgejfiealemghgiimg, 'Test 52');
test(smallestEquivalentString("abcdef", "ghijkl", "fedcba"), fedcba, 'Test 53');
test(smallestEquivalentString("abacabadabacaba", "zyczyxczyxzyxczyx", "abcdefghijklmnopqrstuvwxyz"), aaaaefghijklmnopqrstuvwaaa, 'Test 54');
test(smallestEquivalentString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zyxwvutsrqponmlkjihgfedcbaaa", "abcdefghijklmnopqrstuvwxyz"), Error: string index out of range, 'Test 55');
test(smallestEquivalentString("zzzyyxxwwvv", "xxwwvvuuttss", "zyxwvutsrqponmlkjihgfedcba"), ssssssssrqponmlkjihgfedcba, 'Test 56');
test(smallestEquivalentString("qwertyuiop", "asdfghjklz", "qazwsxedcrfvtgbyhnumpoi"), aapssxddcffvggbhhnjmpli, 'Test 57');
test(smallestEquivalentString("aaaabbbbccccddddeeeeffffgggghhhhiiii", "ddddccccbbbbaaaahhhhggggffffeeeeiiii", "abcdefghi"), abbaeffei, 'Test 58');
test(smallestEquivalentString("abacabadabacaba", "xyzxyzxyzxyzxyz", "zzzzzzzzzzzzzzz"), aaaaaaaaaaaaaaa, 'Test 59');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "hello"), helll, 'Test 60');
test(smallestEquivalentString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqponnmmllkkjjiihhggffeeddccbbaa", "programmingisfun"), Error: string index out of range, 'Test 61');
test(smallestEquivalentString("abcdabcdabcd", "dcbaabdcbaab", "abcdefg"), aaaaefg, 'Test 62');
test(smallestEquivalentString("abcdef", "fedcba", "transform"), transaorm, 'Test 63');
test(smallestEquivalentString("abcabcabcabc", "defdefdefdef", "abcdefabcdef"), abcabcabcabc, 'Test 64');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", "zyxwvutsrqponmlkjihgfedcba"), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 65');
test(smallestEquivalentString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zzzyyxxwwvvuuttoossrrqqppoonnmmllkkjjiihhggffeeddccbaa"), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 66');
test(smallestEquivalentString("abcabcabc", "bcdcbdbcd", "abcbcadcb"), aaaaaaaaa, 'Test 67');
test(smallestEquivalentString("abacabadabaeabafabagabahabaiabajabakabalabamabanabaoabapabaqabarabasabatat", "abcdefghijklmnopqrstuvwxyz", "thequickbrownfoxjumpsoverthelazydog"), Error: string index out of range, 'Test 68');
test(smallestEquivalentString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), Error: string index out of range, 'Test 69');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), abcdefghijklmmlkjihgfedcba, 'Test 70');
test(smallestEquivalentString("aaaaaaabbbbbbb", "bbbbbbbaaaaaaa", "algorithm"), algorithm, 'Test 71');
test(smallestEquivalentString("aabbcc", "bbccdd", "abcd"), aaaa, 'Test 72');
test(smallestEquivalentString("mammal", "walrus", "evolve"), evolve, 'Test 73');
test(smallestEquivalentString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxxwwvvuuttrrssqqppoonnmmllkkiijjggffeeddccbbaa", "abcdefghijklmnopqrstuvwxyz"), Error: string index out of range, 'Test 74');
test(smallestEquivalentString("aaaaa", "bbbbb", "abcdefghijklmnopqrstuvwxyz"), aacdefghijklmnopqrstuvwxyz, 'Test 75');
test(smallestEquivalentString("pqrstu", "vwxyzq", "python"), psthon, 'Test 76');
test(smallestEquivalentString("pqrs", "qrst", "pqrstuvxyzpqrs"), pppppuvxyzpppp, 'Test 77');
test(smallestEquivalentString("abcdefgh", "hgfedcba", "abcdefghihgfedcba"), abcddcbaiabcddcba, 'Test 78');
test(smallestEquivalentString("pqrstu", "stuvwp", "ppqrstuvwp"), ppqppqppqp, 'Test 79');
test(smallestEquivalentString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "bbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaa", "abcdefghijklmnopqrstuvwxyz"), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 80');
test(smallestEquivalentString("abcdef", "fghijk", "jklmnopqrstuvwxzyz"), ealmnopqrstuvwxzyz, 'Test 81');
test(smallestEquivalentString("abcdef", "fedcba", "zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgabccba, 'Test 82');
test(smallestEquivalentString("aaaaaaa", "bbbbbbb", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aaaaccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 83');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "language"), lamgfage, 'Test 84');
test(smallestEquivalentString("eqdf", "wtqu", "eqdf"), eddf, 'Test 85');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", "thequickbrownfoxjumpsoverthelazydog"), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 86');
test(smallestEquivalentString("xyxzyz", "zyzxzy", "xyzzyx"), xxxxxx, 'Test 87');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "thequickbrownfoxjumpsoverthelazydog"), ghejfickbildmflcjfmkhleeighelaabdlg, 'Test 88');
test(smallestEquivalentString("ababababab", "bababababa", "ababababab"), aaaaaaaaaa, 'Test 89');
test(smallestEquivalentString("abacabadabaeabafabagabahabaiabajabakabalabamabanabaoabapabaqabarabasabatat", "qrstuvwxyzabcdefghijklmnoprstuvwxzyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: string index out of range, 'Test 90');
test(smallestEquivalentString("aaaaabbbbbcccccdddddeeeeeffffffggggghhhhhhiiiiijjjjjjkkkkklllllmmmmmnnnnnooooo", "bbbbbcccccdddddeeeeeffffffggggghhhhhhiiiiijjjjjjkkkkklllllmmmmmnnnnnoooooaaaa", "abcdefghijklmnopqrstuvwxyzzzz"), Error: string index out of range, 'Test 91');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "bcadefghijklmnopqrstuvwxzy", "abcdefghijklmnopqrstuvwxyz"), aaadefghijklmnopqrstuvwxyy, 'Test 92');
test(smallestEquivalentString("equivalent", "characters", "example"), axampla, 'Test 93');
test(smallestEquivalentString("ababababab", "bcbcbcbcbc", "abacabadab"), aaaaaaadaa, 'Test 94');
test(smallestEquivalentString("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxxyyyyzzzz", "zzzzyyyyxxxxyyyyvvvvwwwxxxxyyyyuuuvvvwwxxyyyytttsssrqqqpppoonnmmlkkkjjjiiiigggfffeeedddcccbbbaaa", "thequickbrownfoxjumpsoverthelazydog"), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 95');
test(smallestEquivalentString("abacabadabacaba", "zxyzxyzxyzxyzxy", "abacabadabacaba"), aaaaaaaaaaaaaaa, 'Test 96');
test(smallestEquivalentString("abcdabcdabcdabcd", "dcbaecbaecbaecba", "abcdefghijk"), abbaafghijk, 'Test 97');
test(smallestEquivalentString("leet", "code", "leetcode"), cdddcddd, 'Test 98');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", "abcdefghijklmnopqrstuvwxyz"), aaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 99');
test(smallestEquivalentString("abcdefgabcdefgabcdefg", "hijklmnopqrstuahijklmnopqrstuahijklmnopqrstuahijklmnopqrstuahijklmnopqrstu", "abcdefghijklmnopqrstuvwxyz"), aaaaaaaaaaaaaaaaaaaaavwxyz, 'Test 100');
test(smallestEquivalentString("abcdefg", "ghijklm", "abcdefg"), abcdefa, 'Test 101');
test(smallestEquivalentString("qwertyuiopasdfghjklzxcvbnm", "mlkjihgfedcbazyxwvutsrqpon", "zyxwvutsrqponmlkjihgfedcba"), faaaeafaaeaeeeaeafaafeaaaa, 'Test 102');
test(smallestEquivalentString("qwertyqwertyqwerty", "yuiopyuiopyuio", "qwertyqwertyqwertyyuiopyuiopyuio"), Error: string index out of range, 'Test 103');
test(smallestEquivalentString("abcabcabcabc", "defdefdefdef", "complexity"), complbxity, 'Test 104');
test(smallestEquivalentString("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", "thequickbrownfoxjumpsoverthelazydogthequickbrownfoxjumpsoverthelazydog"), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 105');
test(smallestEquivalentString("acbacbacbacb", "zyxzyxzyxzyx", "abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwbca, 'Test 106');
test(smallestEquivalentString("thequickbrownfoxjumpsoverthelazydog", "zyxwvutsrqponmlkjihgfedcba", "thequickbrownfoxjumpsoverthelazydog"), Error: string index out of range, 'Test 107');
test(smallestEquivalentString("aaaaaa", "bbbbbb", "ababab"), aaaaaa, 'Test 108');
test(smallestEquivalentString("xyzzzz", "zzzzzz", "xyzzyx"), xxxxxx, 'Test 109');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

