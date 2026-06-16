// Test: 2663. Lexicographically Smallest Beautiful String
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { smallestBeautifulString } = require("./solution");

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

console.log("\n2663. Lexicographically Smallest Beautiful String\n");

test(smallestBeautifulString("abcd", 5), abce, 'Test 1');
test(smallestBeautifulString("aabbcc", 6), aabbcd, 'Test 2');
test(smallestBeautifulString("zyx", 26), , 'Test 3');
test(smallestBeautifulString("abcz", 26), abda, 'Test 4');
test(smallestBeautifulString("aaa", 4), aab, 'Test 5');
test(smallestBeautifulString("dc", 4), , 'Test 6');
test(smallestBeautifulString("aab", 3), aac, 'Test 7');
test(smallestBeautifulString("abcd", 4), abda, 'Test 8');
test(smallestBeautifulString("xyz", 26), xza, 'Test 9');
test(smallestBeautifulString("zyx", 3), , 'Test 10');
test(smallestBeautifulString("aabb", 4), aabc, 'Test 11');
test(smallestBeautifulString("azzzz", 26), bacba, 'Test 12');
test(smallestBeautifulString("abcabcabcabc", 3), acbacbacbacb, 'Test 13');
test(smallestBeautifulString("abcabca", 26), abcabcd, 'Test 14');
test(smallestBeautifulString("aabababa", 6), aabababc, 'Test 15');
test(smallestBeautifulString("zzzzz", 26), , 'Test 16');
test(smallestBeautifulString("abcabcabcabc", 26), abcabcabcabd, 'Test 17');
test(smallestBeautifulString("zyxzyxzyxzyx", 26), , 'Test 18');
test(smallestBeautifulString("wxyz", 26), wxza, 'Test 19');
test(smallestBeautifulString("zzzzzzzzzz", 26), , 'Test 20');
test(smallestBeautifulString("mnopqrstuvw", 21), mnopqrsuabc, 'Test 21');
test(smallestBeautifulString("zyxwvutsr", 19), , 'Test 22');
test(smallestBeautifulString("abcdefg", 7), abcdega, 'Test 23');
test(smallestBeautifulString("abcdefghijklmnop", 26), abcdefghijklmnoq, 'Test 24');
test(smallestBeautifulString("mnopqr", 18), mnopra, 'Test 25');
test(smallestBeautifulString("lkjihgf", 12), lkjihgi, 'Test 26');
test(smallestBeautifulString("abcabc", 3), acbacb, 'Test 27');
test(smallestBeautifulString("abcdefghij", 10), abcdefghja, 'Test 28');
test(smallestBeautifulString("aabccba", 15), aabccbd, 'Test 29');
test(smallestBeautifulString("mnbvcxzlkjhgfdsapoiuytrewq", 26), mnbvcxzlkjhgfdsapoiuytrewr, 'Test 30');
test(smallestBeautifulString("ababababababab", 3), ababababababac, 'Test 31');
test(smallestBeautifulString("abcabcabcabcabc", 3), acbacbacbacbacb, 'Test 32');
test(smallestBeautifulString("abcdefghijklmnopqrstuvwxyza", 26), abcdefghijklmnopqrstuvwxyzb, 'Test 33');
test(smallestBeautifulString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 20), aabbccddeeffgghhiijjkkllmmnnooppqqrrstabcabcabcabcab, 'Test 34');
test(smallestBeautifulString("abcdefghijklmnopqrstuv", 21), abcdefghijklmnopqrsuab, 'Test 35');
test(smallestBeautifulString("zzzzzz", 4), , 'Test 36');
test(smallestBeautifulString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyzab, 'Test 37');
test(smallestBeautifulString("abcdabcd", 4), abcdabda, 'Test 38');
test(smallestBeautifulString("zzzzzzzzzzzzzzzzzzzzzzzz", 26), , 'Test 39');
test(smallestBeautifulString("abcaabcd", 26), abcaabce, 'Test 40');
test(smallestBeautifulString("mnopqrlmno", 14), mnopqrlnab, 'Test 41');
test(smallestBeautifulString("abcdcba", 10), abcdcbd, 'Test 42');
test(smallestBeautifulString("abcdefghijklmnopqrstuvwxzz", 26), abcdefghijklmnopqrstuvwyab, 'Test 43');
test(smallestBeautifulString("abcdefghijk", 12), abcdefghijl, 'Test 44');
test(smallestBeautifulString("abcdefghijk", 11), abcdefghika, 'Test 45');
test(smallestBeautifulString("abba", 26), abbc, 'Test 46');
test(smallestBeautifulString("abababababab", 26), abababababac, 'Test 47');
test(smallestBeautifulString("aaaabbbbccccdddd", 26), aaaabbbbccccddde, 'Test 48');
test(smallestBeautifulString("abcabcabc", 3), acbacbacb, 'Test 49');
test(smallestBeautifulString("abcdcba", 26), abcdcbd, 'Test 50');
test(smallestBeautifulString("abcdexyz", 26), abcdexza, 'Test 51');
test(smallestBeautifulString("pqrs", 18), prab, 'Test 52');
test(smallestBeautifulString("qwertyuiopasdfghjklzxcvbnm", 26), qwertyuiopasdfghjklzxcvbno, 'Test 53');
test(smallestBeautifulString("xyzabc", 26), xyzabd, 'Test 54');
test(smallestBeautifulString("abacabadabacaba", 26), abacabadabacabc, 'Test 55');
test(smallestBeautifulString("aabbccdd", 6), aabbccde, 'Test 56');
test(smallestBeautifulString("zzzz", 4), , 'Test 57');
test(smallestBeautifulString("aabbaabbaabb", 6), aabbaabbaabc, 'Test 58');
test(smallestBeautifulString("abcde", 5), abcea, 'Test 59');
test(smallestBeautifulString("mnopqrstuvw", 22), mnopqrstvab, 'Test 60');
test(smallestBeautifulString("abcdexyzabcd", 26), abcdexyzabce, 'Test 61');
test(smallestBeautifulString("abacabacabacaba", 3), abacabacabacabc, 'Test 62');
test(smallestBeautifulString("abacabadabc", 26), abacabadabd, 'Test 63');
test(smallestBeautifulString("xyzxyzxyzxyz", 26), xzabcabcabca, 'Test 64');
test(smallestBeautifulString("abcbabcba", 3), abcbacbac, 'Test 65');
test(smallestBeautifulString("abcdefghij", 26), abcdefghik, 'Test 66');
test(smallestBeautifulString("abac", 4), abad, 'Test 67');
test(smallestBeautifulString("abcabcabc", 26), abcabcabd, 'Test 68');
test(smallestBeautifulString("abcba", 3), acbac, 'Test 69');
test(smallestBeautifulString("abcdefghi", 10), abcdefghj, 'Test 70');
test(smallestBeautifulString("aabbaa", 6), aabbac, 'Test 71');
test(smallestBeautifulString("abcdefghi", 9), abcdefgia, 'Test 72');
test(smallestBeautifulString("zyxcba", 6), zyxcbd, 'Test 73');
test(smallestBeautifulString("mnopqrstuvwxyzz", 26), mnopqrstuvwxzab, 'Test 74');
test(smallestBeautifulString("zzzzzzzzz", 26), , 'Test 75');
test(smallestBeautifulString("aabbccddeeffgg", 6), aabbccddefabca, 'Test 76');
test(smallestBeautifulString("abacabadabacaba", 15), abacabadabacabc, 'Test 77');
test(smallestBeautifulString("abcdefghijklmnopqrstuvwxy", 26), abcdefghijklmnopqrstuvwxz, 'Test 78');
test(smallestBeautifulString("abcdabc", 26), abcdabd, 'Test 79');
test(smallestBeautifulString("fedcba", 6), fedcbd, 'Test 80');
test(smallestBeautifulString("aabbccddeeffgg", 10), aabbccddeeffgh, 'Test 81');
test(smallestBeautifulString("mnopqrstu", 20), mnopqrtab, 'Test 82');
test(smallestBeautifulString("abcdefg", 8), abcdefh, 'Test 83');
test(smallestBeautifulString("abababababab", 2), baababababab, 'Test 84');
test(smallestBeautifulString("abcddcba", 20), abcddcbd, 'Test 85');
test(smallestBeautifulString("abacaba", 7), abacabc, 'Test 86');
test(smallestBeautifulString("abacabadabacaba", 3), abacabadabacabc, 'Test 87');
test(smallestBeautifulString("abcdefghijklmnop", 20), abcdefghijklmnoq, 'Test 88');
test(smallestBeautifulString("aabababacababaca", 26), aabababacababacb, 'Test 89');
test(smallestBeautifulString("zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhaaggeeffddccbb", 26), zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhaaggeeffddccbd, 'Test 90');
test(smallestBeautifulString("abacabad", 4), abacabca, 'Test 91');
test(smallestBeautifulString("acb", 3), bac, 'Test 92');
test(smallestBeautifulString("zyxzyxzyx", 26), , 'Test 93');
test(smallestBeautifulString("aabbccddeeff", 26), aabbccddeefg, 'Test 94');
test(smallestBeautifulString("abcbac", 26), abcbad, 'Test 95');
test(smallestBeautifulString("abcdefghijklmnop", 16), abcdefghijklmnpa, 'Test 96');
test(smallestBeautifulString("abcabcabcabc", 6), abcabcabcabd, 'Test 97');
test(smallestBeautifulString("abacaba", 26), abacabc, 'Test 98');
test(smallestBeautifulString("abacbacbac", 5), abacbacbad, 'Test 99');
test(smallestBeautifulString("abcdcba", 5), abcdcbd, 'Test 100');
test(smallestBeautifulString("abcdefgabcdefg", 26), abcdefgabcdefh, 'Test 101');
test(smallestBeautifulString("abcdabcdabcd", 4), abcdabcdabda, 'Test 102');
test(smallestBeautifulString("zyxwvutsrqponmlkjihgfedcba", 26), zyxwvutsrqponmlkjihgfedcbd, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

