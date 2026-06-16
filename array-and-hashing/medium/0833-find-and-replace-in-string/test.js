// Test: 833. Find And Replace In String
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { findReplaceString } = require("./solution");

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

console.log("\n833. Find And Replace In String\n");

test(findReplaceString("abcd", [0, 2], ["a", "cd"], ["eee", "ffff"]), eeebffff, 'Test 1');
test(findReplaceString("abcd", [0, 1, 2, 3], ["a", "b", "c", "d"], ["aa", "bb", "cc", "dd"]), aabbccdd, 'Test 2');
test(findReplaceString("abcd", [0, 2], ["ab", "ec"], ["eee", "ffff"]), eeecd, 'Test 3');
test(findReplaceString("vmokgggqzp", [3, 5, 1], ["kg", "gggg", "mo"], ["s", "so", "bfr"]), vbfrsggqzp, 'Test 4');
test(findReplaceString("hello", [1, 4], ["el", "o"], ["ll", "oo"]), hllloo, 'Test 5');
test(findReplaceString("aaaaaa", [0, 2, 4], ["aa", "aa", "aa"], ["AA", "BB", "CC"]), AABBCC, 'Test 6');
test(findReplaceString("aaaaabbbbb", [0, 5], ["aaaaa", "bbbbb"], ["z", "y"]), zy, 'Test 7');
test(findReplaceString("aabbccddeeffgghhiijjkkllmmnnoopp", [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], ["bb", "dd", "ff", "hh", "jj", "ll", "nn", "pp"], ["XX", "YY", "ZZ", "WW", "VV", "UU", "TT", "SS"]), aabbccddeeffgghhiijjkkllmmnnoopp, 'Test 8');
test(findReplaceString("programming", [0, 4, 9], ["pro", "gra", "ing"], ["123", "456", "789"]), 123gramming, 'Test 9');
test(findReplaceString("xylophone", [2, 4], ["lo", "ph"], ["LOLO", "PH"]), xyLOLOPHone, 'Test 10');
test(findReplaceString("mississippi", [0, 4, 10], ["mis", "issi", "i"], ["xxx", "yyy", "zzz"]), xxxsyyyppzzz, 'Test 11');
test(findReplaceString("banana", [0, 1, 2, 3, 4, 5], ["b", "a", "n", "a", "n", "a"], ["B", "A", "N", "A", "N", "A"]), BANANA, 'Test 12');
test(findReplaceString("helloworld", [0, 5], ["hello", "world"], ["HELLO", "WORLD"]), HELLOWORLD, 'Test 13');
test(findReplaceString("algorithms", [2, 6, 8], ["gor", "rith", "ms"], ["GOR", "RITH", "MS"]), alGORithMS, 'Test 14');
test(findReplaceString("mississippi", [0, 4, 6], ["mi", "iss", "ippi"], ["MMM", "NNN", "OOO"]), MMMssNNNippi, 'Test 15');
test(findReplaceString("zzzzzzzzzz", [0, 2, 4, 6, 8], ["zz", "zz", "zz", "zz", "zz"], ["1", "2", "3", "4", "5"]), 12345, 'Test 16');
test(findReplaceString("abcdefg", [1, 2, 3, 4, 5], ["b", "c", "d", "e", "f"], ["B", "C", "D", "E", "F"]), aBCDEFg, 'Test 17');
test(findReplaceString("abababab", [0, 2, 4, 6], ["ab", "ab", "ab", "ab"], ["xy", "yz", "zx", "wv"]), xyyzzxwv, 'Test 18');
test(findReplaceString("abcdefgh", [1, 3, 5, 7], ["bc", "fg", "h", "a"], ["X", "Y", "Z", "W"]), aXdefgh, 'Test 19');
test(findReplaceString("abcdefghij", [0, 2, 4, 6, 8], ["ab", "cd", "ef", "gh", "ij"], ["12", "34", "56", "78", "90"]), 1234567890, 'Test 20');
test(findReplaceString("ababababab", [0, 2, 4, 6, 8], ["ab", "ab", "ab", "ab", "ab"], ["xy", "yx", "xy", "yx", "xy"]), xyyxxyyxxy, 'Test 21');
test(findReplaceString("abcdefghijk", [1, 3, 5, 7, 9], ["bc", "ef", "gh", "jk", "l"], ["2", "3", "4", "5", "6"]), a2defghijk, 'Test 22');
test(findReplaceString("abcdefghij", [0, 2, 4, 6, 8], ["ab", "cd", "ef", "gh", "ij"], ["A", "B", "C", "D", "E"]), ABCDE, 'Test 23');
test(findReplaceString("mississippi", [4, 6], ["iss", "iss"], ["42", "43"]), miss42ippi, 'Test 24');
test(findReplaceString("abcdefghij", [1, 4, 7], ["bc", "ef", "hi"], ["BCD", "EFG", "HIJ"]), aBCDdEFGgHIJj, 'Test 25');
test(findReplaceString("programming", [0, 3, 6, 9], ["pro", "gra", "mming"], ["123", "456", "789"]), 123456789, 'Test 26');
test(findReplaceString("hellothere", [0, 5], ["he", "th"], ["hola", "allahuakbar"]), holalloallahuakbarere, 'Test 27');
test(findReplaceString("aabbccddeeff", [0, 3, 6, 9], ["aab", "bcd", "cde", "def"], ["AAB", "BCD", "CDE", "DEF"]), AABbccddeeff, 'Test 28');
test(findReplaceString("abcdefghijk", [0, 3, 6, 9], ["abc", "def", "ghi", "jk"], ["XXX", "YYY", "ZZZ", "WWW"]), XXXYYYZZZWWW, 'Test 29');
test(findReplaceString("aabbccddeeff", [1, 3, 5, 7, 9, 11], ["ab", "cd", "ef", "de", "fg", "ef"], ["12", "34", "56", "43", "65", "65"]), a12bccd43eff, 'Test 30');
test(findReplaceString("mississippi", [4, 6], ["iss", "issi"], ["3", "4"]), miss3ippi, 'Test 31');
test(findReplaceString("abcdefgh", [1, 4, 6], ["bc", "ef", "gh"], ["12", "34", "56"]), a12d3456, 'Test 32');
test(findReplaceString("thisisatest", [2, 6, 9], ["is", "is", "est"], ["IS", "IS", "EST"]), thISisatest, 'Test 33');
test(findReplaceString("thequickbrownfox", [4, 9, 15], ["qui", "bro", "fox"], ["QUI", "BRO", "FOX"]), thequickbrownfox, 'Test 34');
test(findReplaceString("ababababab", [0, 2, 4, 6, 8], ["ab", "ab", "ab", "ab", "ab"], ["xy", "xy", "xy", "xy", "xy"]), xyxyxyxyxy, 'Test 35');
test(findReplaceString("hellothere", [1, 5, 8], ["ell", "the", "er"], ["123", "456", "789"]), h123o456re, 'Test 36');
test(findReplaceString("aabbccddeeffgghhii", [0, 2, 4, 6, 8, 10, 12, 14, 16], ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii"], ["AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II"]), AABBCCDDEEFFGGHHII, 'Test 37');
test(findReplaceString("abcdefghijk", [0, 4, 8], ["abc", "efg", "ijk"], ["123", "456", "789"]), 123d456h789, 'Test 38');
test(findReplaceString("abcdefghij", [1, 3, 5, 7], ["bc", "de", "fg", "hi"], ["BCD", "EFG", "FGH", "HIJ"]), aBCDEFGFGHHIJj, 'Test 39');
test(findReplaceString("aabbccddeeff", [0, 2, 4, 6, 8, 10], ["aa", "bb", "cc", "dd", "ee", "ff"], ["AA", "BB", "CC", "DD", "EE", "FF"]), AABBCCDDEEFF, 'Test 40');
test(findReplaceString("ababababab", [0, 2, 4, 6, 8], ["ab", "ba", "ab", "ba", "ab"], ["A", "B", "C", "D", "E"]), AabCabE, 'Test 41');
test(findReplaceString("replacements", [0, 5, 9], ["rep", "lac", "tions"], ["REP", "LAC", "TIONS"]), REPlacements, 'Test 42');
test(findReplaceString("mississippi", [0, 4, 6], ["mis", "sis", "sip"], ["miss", "sis", "sip"]), misssissippi, 'Test 43');
test(findReplaceString("thisisateststring", [0, 4, 8, 12], ["this", "is", "a", "test"], ["1", "2", "3", "4"]), 12ateststring, 'Test 44');
test(findReplaceString("mississippi", [4, 6], ["issi", "issi"], ["XXXX", "YYYY"]), missXXXXppi, 'Test 45');
test(findReplaceString("ababab", [0, 2, 4], ["ab", "ab", "ab"], ["xy", "yz", "zx"]), xyyzzx, 'Test 46');
test(findReplaceString("abcdefgh", [1, 4, 7], ["bc", "ef", "h"], ["BBB", "EEE", "HHH"]), aBBBdEEEgHHH, 'Test 47');
test(findReplaceString("aaaaaa", [0, 2, 4], ["aa", "aa", "aa"], ["AA", "AA", "AA"]), AAAAAA, 'Test 48');
test(findReplaceString("hellothere", [0, 5], ["hello", "there"], ["hi", "bye"]), hibye, 'Test 49');
test(findReplaceString("aaaaaa", [0, 1, 2, 3, 4, 5], ["a", "a", "a", "a", "a", "a"], ["b", "c", "d", "e", "f", "g"]), bcdefg, 'Test 50');
test(findReplaceString("abcdefghij", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]), ABCDEFGHIJ, 'Test 51');
test(findReplaceString("abcdefghijk", [0, 5, 10], ["abc", "fgh", "ijk"], ["123", "456", "789"]), 123de456ijk, 'Test 52');
test(findReplaceString("replaceeverything", [0, 7, 14], ["rep", "ev", "ing"], ["REPLACE", "EVERY", "THING"]), REPLACElaceEVERYerythTHING, 'Test 53');
test(findReplaceString("abcdefghij", [3, 7], ["def", "hij"], ["12345", "67890"]), abc12345g67890, 'Test 54');
test(findReplaceString("aaaabbbbcccc", [0, 4, 8], ["aaaa", "bbbb", "cccc"], ["AAAA", "BBBB", "CCCC"]), AAAABBBBCCCC, 'Test 55');
test(findReplaceString("abcdefghij", [1, 4, 7], ["bc", "efg", "ij"], ["XX", "YYY", "ZZ"]), aXXdYYYhij, 'Test 56');
test(findReplaceString("xxxyyyzzz", [0, 3, 6], ["xxx", "yyy", "zzz"], ["aaa", "bbb", "ccc"]), aaabbbccc, 'Test 57');
test(findReplaceString("hello_world", [0, 6], ["hello", "world"], ["hi", "earth"]), hi_earth, 'Test 58');
test(findReplaceString("mississippi", [0, 4, 7], ["mi", "issi", "issi"], ["MMMM", "IIII", "XXXX"]), MMMMssIIIIppi, 'Test 59');
test(findReplaceString("thisisatest", [0, 2, 4, 6, 8, 10], ["this", "is", "a", "test", "xx", "xx"], ["that", "was", "the", "exam", "yy", "zz"]), thatisatest, 'Test 60');
test(findReplaceString("hellohellohello", [0, 5, 10], ["hello", "hello", "hello"], ["hi", "ho", "ha"]), hihoha, 'Test 61');
test(findReplaceString("abcdefgabcdefg", [0, 7], ["abcdefg", "abcdefg"], ["ABCDEFG", "ABCDEFG"]), ABCDEFGABCDEFG, 'Test 62');
test(findReplaceString("abcdefghijk", [0, 3, 6, 9], ["abc", "def", "ghi", "jk"], ["1", "2", "3", "4"]), 1234, 'Test 63');
test(findReplaceString("mississippi", [1, 4, 7], ["is", "is", "is"], ["aa", "bb", "cc"]), maasbbsippi, 'Test 64');
test(findReplaceString("oneonetwoonetwoone", [0, 4, 8, 12], ["one", "one", "two", "two"], ["111", "222", "333", "444"]), 111onetwoone444one, 'Test 65');
test(findReplaceString("hellohellohello", [0, 5, 10], ["hel", "ell", "llo"], ["H", "E", "L"]), Hlohellohello, 'Test 66');
test(findReplaceString("programming", [0, 3, 6, 9], ["pro", "gra", "mmi", "ng"], ["PRO", "GRA", "MMI", "NG"]), PROGRAMMING, 'Test 67');
test(findReplaceString("abcdefghij", [0, 2, 4, 6, 8], ["ab", "cd", "ef", "gh", "ij"], ["xy", "zw", "00", "11", "22"]), xyzw001122, 'Test 68');
test(findReplaceString("alabama", [0, 2, 4], ["al", "ba", "ma"], ["AL", "BA", "MA"]), ALabama, 'Test 69');
test(findReplaceString("abracadabra", [0, 3, 7, 10], ["abra", "cad", "abr", "a"], ["1", "2", "3", "4"]), 1cad34, 'Test 70');
test(findReplaceString("mississippi", [0, 4, 8], ["mis", "iss", "ippi"], ["misss", "issii", "ipppi"]), missssissiiippi, 'Test 71');
test(findReplaceString("programming", [0, 3, 5, 8], ["pro", "gra", "mmi", "ng"], ["1", "2", "3", "4"]), 12mming, 'Test 72');
test(findReplaceString("programming", [0, 3, 5, 8], ["pro", "g", "am", "mm"], ["code", "G", "AM", "MM"]), codeGrAMming, 'Test 73');
test(findReplaceString("hellothere", [0, 5], ["he", "there"], ["HELLO", "THERE"]), HELLOlloTHERE, 'Test 74');
test(findReplaceString("mississippi", [4, 6], ["is", "ip"], ["IS", "IP"]), missISsippi, 'Test 75');
test(findReplaceString("foobarbaz", [0, 3, 6], ["foo", "bar", "baz"], ["FOO", "BAR", "BAZ"]), FOOBARBAZ, 'Test 76');
test(findReplaceString("abababab", [0, 2, 4, 6], ["ab", "ab", "ab", "ab"], ["XX", "YY", "ZZ", "WW"]), XXYYZZWW, 'Test 77');
test(findReplaceString("hellothere", [0, 5], ["hello", "there"], ["hi", "world"]), hiworld, 'Test 78');
test(findReplaceString("banana", [0, 2, 4], ["ba", "na", "na"], ["xx", "yy", "zz"]), xxyyzz, 'Test 79');
test(findReplaceString("abcdefghij", [2, 4, 6, 8], ["cd", "ef", "gh", "ij"], ["1234", "5678", "91011", "121314"]), ab1234567891011121314, 'Test 80');
test(findReplaceString("banana", [1, 3], ["an", "na"], ["xx", "yy"]), bxxana, 'Test 81');
test(findReplaceString("algorithms", [1, 3, 5, 7], ["l", "g", "m", "th"], ["X", "Y", "Z", "ABC"]), aXgorithms, 'Test 82');
test(findReplaceString("abracadabra", [0, 5, 7], ["abra", "a", "abra"], ["zzzz", "x", "yyyy"]), zzzzcxdyyyy, 'Test 83');
test(findReplaceString("abcdefghij", [1, 3, 5, 7], ["bc", "de", "fg", "hi"], ["XX", "YY", "ZZ", "QQ"]), aXXYYZZQQj, 'Test 84');
test(findReplaceString("banana", [1, 3, 5], ["an", "an", "a"], ["XX", "YY", "ZZ"]), bXXYYZZ, 'Test 85');
test(findReplaceString("aabbccddeeff", [1, 3, 5, 7, 9], ["ab", "cd", "ef", "gh", "ij"], ["xy", "zw", "XY", "ZW", "IJ"]), axybccddeeff, 'Test 86');
test(findReplaceString("abcdefghijklmnopqrstuvwxyz", [0, 5, 10, 15, 20], ["abc", "fgh", "klm", "pqr", "uvw"], ["123", "456", "789", "012", "345"]), 123de456ij789no012st345xyz, 'Test 87');
test(findReplaceString("abracadabra", [0, 3, 7], ["abr", "aca", "bra"], ["A", "B", "C"]), ABdabra, 'Test 88');
test(findReplaceString("abcdefghijklmnopqrstuvwxyz", [0, 5, 10, 15, 20], ["abcde", "fghij", "klmno", "pqrst", "uvwxy"], ["11111", "22222", "33333", "44444", "55555"]), 1111122222333334444455555z, 'Test 89');
test(findReplaceString("programmingisfun", [3, 10, 15], ["gram", "is", "fun"], ["code", "was", "great"]), procodemingisfun, 'Test 90');
test(findReplaceString("aaaaaa", [0, 2, 4], ["aa", "aa", "aa"], ["1", "2", "3"]), 123, 'Test 91');
test(findReplaceString("abcdefg", [0, 3, 5], ["abc", "de", "fg"], ["xyz", "qrs", "tuv"]), xyzqrstuv, 'Test 92');
test(findReplaceString("xyzxyzxyz", [0, 3, 6], ["xyz", "xyz", "xyz"], ["123", "456", "789"]), 123456789, 'Test 93');
test(findReplaceString("zzzzzzzz", [0, 1, 2, 3, 4, 5, 6], ["zz", "zz", "zz", "zz", "zz", "zz", "zz"], ["ZZ", "YY", "XX", "WW", "VV", "UU", "TT"]), ZZXXVVTT, 'Test 94');
test(findReplaceString("abcdefghij", [1, 3, 5, 7, 9], ["bc", "ef", "hi", "jk"], ["XXX", "YYY", "ZZZ", "WWW"]), aXXXdefghij, 'Test 95');
test(findReplaceString("xyzxyzxyz", [0, 3, 6], ["xyz", "xyz", "xyz"], ["XYZ", "XYZ", "XYZ"]), XYZXYZXYZ, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

