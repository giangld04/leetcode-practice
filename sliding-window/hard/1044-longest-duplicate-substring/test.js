// Test: 1044. Longest Duplicate Substring
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { longestDupSubstring } = require("./solution");

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

console.log("\n1044. Longest Duplicate Substring\n");

test(longestDupSubstring("abcabcabc"), abcabc, 'Test 1');
test(longestDupSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 2');
test(longestDupSubstring("mississippi"), issi, 'Test 3');
test(longestDupSubstring("banana"), ana, 'Test 4');
test(longestDupSubstring("bananaaa"), ana, 'Test 5');
test(longestDupSubstring("abcdefgh"), , 'Test 6');
test(longestDupSubstring("abcd"), , 'Test 7');
test(longestDupSubstring("aaaaa"), aaaa, 'Test 8');
test(longestDupSubstring("aabb"), a, 'Test 9');
test(longestDupSubstring("aaaa"), aaa, 'Test 10');
test(longestDupSubstring("abab"), ab, 'Test 11');
test(longestDupSubstring("longestrepeatingsubstringlongestrepeatingsubstring"), longestrepeatingsubstring, 'Test 12');
test(longestDupSubstring("abcdefghijkabcdefgh"), abcdefgh, 'Test 13');
test(longestDupSubstring("abcdefghijkabcdefghijkabcdefghijkabcdefghijk"), abcdefghijkabcdefghijkabcdefghijk, 'Test 14');
test(longestDupSubstring("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 15');
test(longestDupSubstring("norepeats"), e, 'Test 16');
test(longestDupSubstring("abcdeabcdeabcdeabcdeabcde"), abcdeabcdeabcdeabcde, 'Test 17');
test(longestDupSubstring("abcabcabcabcabcabcabcd"), abcabcabcabcabcabc, 'Test 18');
test(longestDupSubstring("abracadabra"), abra, 'Test 19');
test(longestDupSubstring("abcdefabcdefabcdef"), abcdefabcdef, 'Test 20');
test(longestDupSubstring("abcabcabcabc"), abcabcabc, 'Test 21');
test(longestDupSubstring("aaaaaaaaaabbbbbbbbbccccc"), aaaaaaaaa, 'Test 22');
test(longestDupSubstring("abcdefghabcdefghabcdefghabcdefgh"), abcdefghabcdefghabcdefgh, 'Test 23');
test(longestDupSubstring("aaaaaabbccccaaa"), aaaaa, 'Test 24');
test(longestDupSubstring("abcdefghigklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), klmnopqrstuvwxyz, 'Test 25');
test(longestDupSubstring("thisisaverylongstringwithrepeatedsubstringsubstring"), substring, 'Test 26');
test(longestDupSubstring("abcdefghijabcdefghijabcdefghij"), abcdefghijabcdefghij, 'Test 27');
test(longestDupSubstring("hellohellohello"), hellohello, 'Test 28');
test(longestDupSubstring("abababababababababababababababab"), ababababababababababababababab, 'Test 29');
test(longestDupSubstring("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"), abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef, 'Test 30');
test(longestDupSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 31');
test(longestDupSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabc"), abcabcabcabcabcabcabcabcabcabcabcabc, 'Test 32');
test(longestDupSubstring("anvnvnvnvnvnvnvnvvnvnvnvnvnvnvnvnvnvn"), vnvnvnvnvnvnvnvnvn, 'Test 33');
test(longestDupSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 34');
test(longestDupSubstring("bananaananabanana"), banana, 'Test 35');
test(longestDupSubstring("abcabcabcabcabcabcabc"), abcabcabcabcabcabc, 'Test 36');
test(longestDupSubstring("bananaapplebananabananaapplebananabananaapple"), bananaapplebananabananaapple, 'Test 37');
test(longestDupSubstring("abcabcabcabcd"), abcabcabc, 'Test 38');
test(longestDupSubstring("mississippimississippimississippi"), mississippimississippi, 'Test 39');
test(longestDupSubstring("abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde"), abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde, 'Test 40');
test(longestDupSubstring("qwertyuiopqwertyuiop"), qwertyuiop, 'Test 41');
test(longestDupSubstring("abcabcabcabcabcabcabcabcabcabc"), abcabcabcabcabcabcabcabcabc, 'Test 42');
test(longestDupSubstring("abcdeabcdfabcde"), abcde, 'Test 43');
test(longestDupSubstring("abracadabraabracadabraabracadabraabracadabraabracadabra"), abracadabraabracadabraabracadabraabracadabra, 'Test 44');
test(longestDupSubstring("abracadabraabracadabraabracadabra"), abracadabraabracadabra, 'Test 45');
test(longestDupSubstring("zabacabadabacaba"), abacaba, 'Test 46');
test(longestDupSubstring("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), z, 'Test 47');
test(longestDupSubstring("aaaaaa"), aaaaa, 'Test 48');
test(longestDupSubstring("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), xyzxyzxyzxyzxyzxyzxyzxyzxyz, 'Test 49');
test(longestDupSubstring("abcabcabcabcabcabc"), abcabcabcabcabc, 'Test 50');
test(longestDupSubstring("abcdefghijkabcdefghijk"), abcdefghijk, 'Test 51');
test(longestDupSubstring("12345678901234567890"), 1234567890, 'Test 52');
test(longestDupSubstring("aaaaaaaaaaaaaaaaaa"), aaaaaaaaaaaaaaaaa, 'Test 53');
test(longestDupSubstring("bananaananabananana"), banana, 'Test 54');
test(longestDupSubstring("pneumonoultramicroscopicsilicovolcanoconiosispneumonoultramicroscopicsilicovolcanoconiosispneumonoultramicroscopicsilicovolcanoconiosispneumonoultramicroscopicsilicovolcanoconiosis"), pneumonoultramicroscopicsilicovolcanoconiosispneumonoultramicroscopicsilicovolcanoconiosispneumonoultramicroscopicsilicovolcanoconiosis, 'Test 55');
test(longestDupSubstring("thisisaverylongstringwithsomerepeatedsubstringsubstring"), substring, 'Test 56');
test(longestDupSubstring("abcdefghijkabcdefghijkabcdefghijk"), abcdefghijkabcdefghijk, 'Test 57');
test(longestDupSubstring("pneumonoultramicroscopicsilicovolcanoconiosispneumonoultramicroscopicsilicovolcanoconiosis"), pneumonoultramicroscopicsilicovolcanoconiosis, 'Test 58');
test(longestDupSubstring("abcdabcdabcdabcd"), abcdabcdabcd, 'Test 59');
test(longestDupSubstring("bananaaaanaaanana"), anaaa, 'Test 60');
test(longestDupSubstring("aaaaaaa"), aaaaaa, 'Test 61');
test(longestDupSubstring("abababababababababababababab"), ababababababababababababab, 'Test 62');
test(longestDupSubstring("asdfghjklasdfghjklasdfghjkl"), asdfghjklasdfghjkl, 'Test 63');
test(longestDupSubstring("racecaracecaracecar"), racecaracecar, 'Test 64');
test(longestDupSubstring("abcdefghijk"), , 'Test 65');
test(longestDupSubstring("ababababababababababab"), abababababababababab, 'Test 66');
test(longestDupSubstring("xyzxyzxyzxyzxyzxyzxyzxyzxyz"), xyzxyzxyzxyzxyzxyzxyzxyz, 'Test 67');
test(longestDupSubstring("abababababababababab"), ababababababababab, 'Test 68');
test(longestDupSubstring("qwertyuiopqwertyuiopqwertyuiopqwertyuiop"), qwertyuiopqwertyuiopqwertyuiop, 'Test 69');
test(longestDupSubstring("bananaananabanananabanana"), ananabanana, 'Test 70');
test(longestDupSubstring("abacabadabacaba"), abacaba, 'Test 71');
test(longestDupSubstring("zxyzyxyzxyzyxyzxyzyxzyzy"), zxyzyxyzxyzyx, 'Test 72');
test(longestDupSubstring("bananaananab"), anana, 'Test 73');
test(longestDupSubstring("ananananananananan"), anananananananan, 'Test 74');
test(longestDupSubstring("xyzxyzxyzxyzxyzxyz"), xyzxyzxyzxyzxyz, 'Test 75');
test(longestDupSubstring("abcdefghijkabcdefghijabcdefghij"), abcdefghij, 'Test 76');
test(longestDupSubstring("zzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzz, 'Test 77');
test(longestDupSubstring("thisisaverylongstringwithsomerepeatingpatterns"), ing, 'Test 78');
test(longestDupSubstring("xyxyxyxyxyxyxyxyxyxyxyxy"), xyxyxyxyxyxyxyxyxyxyxy, 'Test 79');
test(longestDupSubstring("xyzabcxyzabcxyzabcxyzabcxyz"), xyzabcxyzabcxyzabcxyz, 'Test 80');
test(longestDupSubstring("supercalifragilisticexpialidocioussupercalifragilisticexpialidocious"), supercalifragilisticexpialidocious, 'Test 81');
test(longestDupSubstring("aaaaabbbbbaaaaabbbb"), aaaaabbbb, 'Test 82');
test(longestDupSubstring("bananaapplebananabananaapple"), bananaapple, 'Test 83');
test(longestDupSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 84');
test(longestDupSubstring("longestsubstringissubstring"), substring, 'Test 85');
test(longestDupSubstring("abcdefgabcdefg"), abcdefg, 'Test 86');
test(longestDupSubstring("abcdeabcdeabcdeabcde"), abcdeabcdeabcde, 'Test 87');
test(longestDupSubstring("thisisaverylongstringwitharepeatedsubstringthisisaverylongstringwitharepeatedsubstring"), thisisaverylongstringwitharepeatedsubstring, 'Test 88');
test(longestDupSubstring("abracadabraabracadabra"), abracadabra, 'Test 89');
test(longestDupSubstring("abcdabcdabcdabcdabcdabcd"), abcdabcdabcdabcdabcd, 'Test 90');
test(longestDupSubstring("xyzxyzxyzxyzxyz"), xyzxyzxyzxyz, 'Test 91');
test(longestDupSubstring("bananaanananab"), anana, 'Test 92');
test(longestDupSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), a, 'Test 93');
test(longestDupSubstring("longestsubstrlongestsubstrlongestsubstr"), longestsubstrlongestsubstr, 'Test 94');
test(longestDupSubstring("anananananananananananananananananan"), ananananananananananananananananan, 'Test 95');
test(longestDupSubstring("aabbccddeeffaabbccddeeff"), aabbccddeeff, 'Test 96');
test(longestDupSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 97');
test(longestDupSubstring("noonnoonnoon"), noonnoon, 'Test 98');
test(longestDupSubstring("abcdabcdabcdabcdabcdabcdabcdabcdabcd"), abcdabcdabcdabcdabcdabcdabcdabcd, 'Test 99');
test(longestDupSubstring("abcdefghabcdefghabcdefghabcdefghabcdefghabcdefgh"), abcdefghabcdefghabcdefghabcdefghabcdefgh, 'Test 100');
test(longestDupSubstring("anananananananananananananananananananananananananananananananananananananananananananan"), ananananananananananananananananananananananananananananananananananananananananananan, 'Test 101');
test(longestDupSubstring("abcdeabcdeabcde"), abcdeabcde, 'Test 102');
test(longestDupSubstring("mnopqrsmnopqrsmnopqrsmnopqrs"), mnopqrsmnopqrsmnopqrs, 'Test 103');
test(longestDupSubstring("abcdefgabcdefgabcdefg"), abcdefgabcdefg, 'Test 104');
test(longestDupSubstring("racecar"), c, 'Test 105');
test(longestDupSubstring("abcdefghijabcdefghij"), abcdefghij, 'Test 106');
test(longestDupSubstring("ababababababababababababababababababababababab"), abababababababababababababababababababababab, 'Test 107');
test(longestDupSubstring("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 108');
test(longestDupSubstring("abcdefghabcdefgh"), abcdefgh, 'Test 109');
test(longestDupSubstring("pneumonoultramicroscopicsilicovolcanoconiosis"), ic, 'Test 110');
test(longestDupSubstring("xylophonepianoguitarxylophonepianoguitarxylophonepianoguitar"), xylophonepianoguitarxylophonepianoguitar, 'Test 111');
test(longestDupSubstring("aaaaabaaaaabaaaaab"), aaaaabaaaaab, 'Test 112');
test(longestDupSubstring("mississippimississippimississippimississippimississippimississippi"), mississippimississippimississippimississippimississippi, 'Test 113');
test(longestDupSubstring("hellohellohellohello"), hellohellohello, 'Test 114');
test(longestDupSubstring("zxcvbnmzxcvbnmzxcvbnm"), zxcvbnmzxcvbnm, 'Test 115');
test(longestDupSubstring("aaaaaaaaaaaaaaaaaaaa"), aaaaaaaaaaaaaaaaaaa, 'Test 116');
test(longestDupSubstring("aaaaaaaaaaaaaaaaaaaaaaaa"), aaaaaaaaaaaaaaaaaaaaaaa, 'Test 117');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

