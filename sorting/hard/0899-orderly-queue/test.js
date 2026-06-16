// Test: 899. Orderly Queue
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { orderlyQueue } = require("./solution");

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

console.log("\n899. Orderly Queue\n");

test(orderlyQueue("aaab", 1), aaab, 'Test 1');
test(orderlyQueue("aaa", 3), aaa, 'Test 2');
test(orderlyQueue("zxy", 3), xyz, 'Test 3');
test(orderlyQueue("zxy", 1), xyz, 'Test 4');
test(orderlyQueue("ccccc", 4), ccccc, 'Test 5');
test(orderlyQueue("abcd", 2), abcd, 'Test 6');
test(orderlyQueue("cba", 1), acb, 'Test 7');
test(orderlyQueue("aaa", 1), aaa, 'Test 8');
test(orderlyQueue("zyx", 2), xyz, 'Test 9');
test(orderlyQueue("zyx", 1), xzy, 'Test 10');
test(orderlyQueue("baaca", 3), aaabc, 'Test 11');
test(orderlyQueue("mississippi", 1), imississipp, 'Test 12');
test(orderlyQueue("abcdef", 6), abcdef, 'Test 13');
test(orderlyQueue("aaaabbbbcccc", 3), aaaabbbbcccc, 'Test 14');
test(orderlyQueue("zzzzzzzzzz", 1), zzzzzzzzzz, 'Test 15');
test(orderlyQueue("leetcodeleetcode", 6), ccddeeeeeelloott, 'Test 16');
test(orderlyQueue("mississippi", 4), iiiimppssss, 'Test 17');
test(orderlyQueue("zzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), zzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 18');
test(orderlyQueue("aabbccddeeff", 1), aabbccddeeff, 'Test 19');
test(orderlyQueue("xyzxyzxyzxyz", 4), xxxxyyyyzzzz, 'Test 20');
test(orderlyQueue("pqrsrstp", 1), ppqrsrst, 'Test 21');
test(orderlyQueue("abcdefedcba", 20), aabbccddeef, 'Test 22');
test(orderlyQueue("abcdedcba", 1), aabcdedcb, 'Test 23');
test(orderlyQueue("pqrsrstp", 3), ppqrrsst, 'Test 24');
test(orderlyQueue("bananaananab", 2), aaaaaabbnnnn, 'Test 25');
test(orderlyQueue("cbbca", 2), abbcc, 'Test 26');
test(orderlyQueue("banana", 2), aaabnn, 'Test 27');
test(orderlyQueue("leetcode", 4), cdeeelot, 'Test 28');
test(orderlyQueue("abcdxyz", 5), abcdxyz, 'Test 29');
test(orderlyQueue("abracadabra", 1), aabracadabr, 'Test 30');
test(orderlyQueue("mnopqr", 4), mnopqr, 'Test 31');
test(orderlyQueue("abcdedcba", 9), aabbccdde, 'Test 32');
test(orderlyQueue("abababab", 2), aaaabbbb, 'Test 33');
test(orderlyQueue("zyxcba", 1), azyxcb, 'Test 34');
test(orderlyQueue("aabbccddeeff", 6), aabbccddeeff, 'Test 35');
test(orderlyQueue("aaaabbbb", 1), aaaabbbb, 'Test 36');
test(orderlyQueue("zyxwvutsrqponmlkjihgfedcba", 1), azyxwvutsrqponmlkjihgfedcb, 'Test 37');
test(orderlyQueue("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 25), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 38');
test(orderlyQueue("fedcbabcd", 2), abbccddef, 'Test 39');
test(orderlyQueue("fedcba", 1), afedcb, 'Test 40');
test(orderlyQueue("banana", 1), abanan, 'Test 41');
test(orderlyQueue("mnopqrsmnopqrsmnopqr", 4), mmmnnnooopppqqqrrrss, 'Test 42');
test(orderlyQueue("aaaaabbbbbcccc", 2), aaaaabbbbbcccc, 'Test 43');
test(orderlyQueue("mnopqrstuvw", 3), mnopqrstuvw, 'Test 44');
test(orderlyQueue("abababababab", 6), aaaaaabbbbbb, 'Test 45');
test(orderlyQueue("abcdedcba", 2), aabbccdde, 'Test 46');
test(orderlyQueue("pqrsqponmlkjihgfedcba", 1), apqrsqponmlkjihgfedcb, 'Test 47');
test(orderlyQueue("defabc", 1), abcdef, 'Test 48');
test(orderlyQueue("abcdexyz", 3), abcdexyz, 'Test 49');
test(orderlyQueue("aaaaaabbbbb", 2), aaaaaabbbbb, 'Test 50');
test(orderlyQueue("fghijklmnopqrstuvwxyzabcdef", 10), abcdeffghijklmnopqrstuvwxyz, 'Test 51');
test(orderlyQueue("abababab", 3), aaaabbbb, 'Test 52');
test(orderlyQueue("rotation", 2), ainoortt, 'Test 53');
test(orderlyQueue("mnopqr", 6), mnopqr, 'Test 54');
test(orderlyQueue("acbacbacbacb", 3), aaaabbbbcccc, 'Test 55');
test(orderlyQueue("kjihgfedcbazyxwvutsrqponml", 5), abcdefghijklmnopqrstuvwxyz, 'Test 56');
test(orderlyQueue("aaaabbbbcccc", 2), aaaabbbbcccc, 'Test 57');
test(orderlyQueue("abcabcabc", 3), aaabbbccc, 'Test 58');
test(orderlyQueue("zzzzzzzzyy", 2), yyzzzzzzzz, 'Test 59');
test(orderlyQueue("aabbbccccddddeeeeffffgggg", 10), aabbbccccddddeeeeffffgggg, 'Test 60');
test(orderlyQueue("aaaabbbbcccc", 1), aaaabbbbcccc, 'Test 61');
test(orderlyQueue("abcdfe", 1), abcdfe, 'Test 62');
test(orderlyQueue("thisisaverylongstringwithrandomcharacters", 1), actersthisisaverylongstringwithrandomchar, 'Test 63');
test(orderlyQueue("zzzzzzzzzzzzzzz", 10), zzzzzzzzzzzzzzz, 'Test 64');
test(orderlyQueue("zyxwvutsrqponmlkjihgfedcba", 1000), abcdefghijklmnopqrstuvwxyz, 'Test 65');
test(orderlyQueue("thisisatest", 4), aehiisssttt, 'Test 66');
test(orderlyQueue("banana", 3), aaabnn, 'Test 67');
test(orderlyQueue("rotor", 1), orrot, 'Test 68');
test(orderlyQueue("fedcba", 2), abcdef, 'Test 69');
test(orderlyQueue("ppqpp", 2), ppppq, 'Test 70');
test(orderlyQueue("abcde", 5), abcde, 'Test 71');
test(orderlyQueue("abcdfe", 3), abcdef, 'Test 72');
test(orderlyQueue("zzzzzzzzzzyyyyyyyyxxxxxxxxxx", 25), xxxxxxxxxxyyyyyyyyzzzzzzzzzz, 'Test 73');
test(orderlyQueue("bananaananab", 1), aananabbanan, 'Test 74');
test(orderlyQueue("abcdefghijklmnopqrstuvwxyz", 13), abcdefghijklmnopqrstuvwxyz, 'Test 75');
test(orderlyQueue("abcdxyz", 2), abcdxyz, 'Test 76');
test(orderlyQueue("acbxyz", 2), abcxyz, 'Test 77');
test(orderlyQueue("xyzzyx", 3), xxyyzz, 'Test 78');
test(orderlyQueue("abcdeabcde", 5), aabbccddee, 'Test 79');
test(orderlyQueue("qazwsxedcrfvtgbyhnujmikolp", 1), azwsxedcrfvtgbyhnujmikolpq, 'Test 80');
test(orderlyQueue("abcdabcd", 2), aabbccdd, 'Test 81');
test(orderlyQueue("rotation", 1), ationrot, 'Test 82');
test(orderlyQueue("mnopqrstuvwxyz", 13), mnopqrstuvwxyz, 'Test 83');
test(orderlyQueue("aabbccddeeffgg", 4), aabbccddeeffgg, 'Test 84');
test(orderlyQueue("xyzzyx", 2), xxyyzz, 'Test 85');
test(orderlyQueue("abcabcabc", 1), abcabcabc, 'Test 86');
test(orderlyQueue("leetcodeleetcode", 5), ccddeeeeeelloott, 'Test 87');
test(orderlyQueue("aaabbbccc", 1), aaabbbccc, 'Test 88');
test(orderlyQueue("abracadabra", 5), aaaaabbcdrr, 'Test 89');
test(orderlyQueue("fedcba", 3), abcdef, 'Test 90');
test(orderlyQueue("aaabbbccc", 3), aaabbbccc, 'Test 91');
test(orderlyQueue("xyzxyzxyz", 3), xxxyyyzzz, 'Test 92');
test(orderlyQueue("zzzzzzzzzzyyyyyyyyxxxxxxxxxx", 1), xxxxxxxxxxzzzzzzzzzzyyyyyyyy, 'Test 93');
test(orderlyQueue("leetcodeleetcode", 8), ccddeeeeeelloott, 'Test 94');
test(orderlyQueue("zyxcba", 5), abcxyz, 'Test 95');
test(orderlyQueue("qwertyuiop", 5), eiopqrtuwy, 'Test 96');
test(orderlyQueue("rotation", 6), ainoortt, 'Test 97');
test(orderlyQueue("abcdefghijklmnopqrstuvwxyz", 1), abcdefghijklmnopqrstuvwxyz, 'Test 98');
test(orderlyQueue("abacabadabacaba", 3), aaaaaaaabbbbccd, 'Test 99');
test(orderlyQueue("bananaappleorange", 7), aaaaabeeglnnnoppr, 'Test 100');
test(orderlyQueue("abacabadabacaba", 5), aaaaaaaabbbbccd, 'Test 101');
test(orderlyQueue("abcdefghihgfedcba", 1), aabcdefghihgfedcb, 'Test 102');
test(orderlyQueue("qazwsxedcrfvtgbyhnujmikolp", 15), abcdefghijklmnopqrstuvwxyz, 'Test 103');
test(orderlyQueue("aaaaabbbbbaaaa", 2), aaaaaaaaabbbbb, 'Test 104');
test(orderlyQueue("zzzyyy", 2), yyyzzz, 'Test 105');
test(orderlyQueue("qwertyuiop", 10), eiopqrtuwy, 'Test 106');
test(orderlyQueue("xyzxyzxyz", 9), xxxyyyzzz, 'Test 107');
test(orderlyQueue("abacabadabacaba", 7), aaaaaaaabbbbccd, 'Test 108');
test(orderlyQueue("racecar", 1), acecarr, 'Test 109');
test(orderlyQueue("xyzxyzxyz", 2), xxxyyyzzz, 'Test 110');
test(orderlyQueue("abcdefghijklmnopqrstuvwxyz", 26), abcdefghijklmnopqrstuvwxyz, 'Test 111');
test(orderlyQueue("zyxzyxzyxzyx", 5), xxxxyyyyzzzz, 'Test 112');
test(orderlyQueue("thisisaverylongstringwithrandomcharacters", 5), aaaaccdeegghhhiiiilmnnnoorrrrrssssttttvwy, 'Test 113');
test(orderlyQueue("hellohellohello", 4), eeehhhllllllooo, 'Test 114');
test(orderlyQueue("mvvuuz", 3), muuvvz, 'Test 115');
test(orderlyQueue("aabbcc", 1), aabbcc, 'Test 116');
test(orderlyQueue("abcdexyz", 1), abcdexyz, 'Test 117');
test(orderlyQueue("aabbcc", 2), aabbcc, 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

