// Test: 3042. Count Prefix And Suffix Pairs I
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { countPrefixSuffixPairs } = require("./solution");

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

console.log("\n3042. Count Prefix And Suffix Pairs I\n");

test(countPrefixSuffixPairs(["abc","abcabc","bc","abcabcabc"]), 3, 'Test 1');
test(countPrefixSuffixPairs(["xyz", "xyzxyz", "zyx", "z", "x"]), 1, 'Test 2');
test(countPrefixSuffixPairs(["hello","hellohello","hellohellohello"]), 3, 'Test 3');
test(countPrefixSuffixPairs(["z", "zaz", "zzz", "zazaz"]), 4, 'Test 4');
test(countPrefixSuffixPairs(["aaa", "aaaa", "aaaaa", "aa", "a"]), 3, 'Test 5');
test(countPrefixSuffixPairs(["cat","tac","catcat","tacatc"]), 1, 'Test 6');
test(countPrefixSuffixPairs(["prefix", "prefixprefix", "fixpre", "refixpre"]), 1, 'Test 7');
test(countPrefixSuffixPairs(["repeat", "repeattorepeat", "eat", "eateateat"]), 2, 'Test 8');
test(countPrefixSuffixPairs(["suffix", "suffixsuffix", "fixsuf", "ffixsuf"]), 1, 'Test 9');
test(countPrefixSuffixPairs(["pa","papa","ma","mama"]), 2, 'Test 10');
test(countPrefixSuffixPairs(["m","mnm","nmn","mnmnm"]), 3, 'Test 11');
test(countPrefixSuffixPairs(["test", "testing", "testtest", "sett"]), 1, 'Test 12');
test(countPrefixSuffixPairs(["y","yxy","xyx","yxyxy"]), 3, 'Test 13');
test(countPrefixSuffixPairs(["hello", "hellohello", "world", "worldworld"]), 2, 'Test 14');
test(countPrefixSuffixPairs(["x","xx","xxx","xxxx"]), 6, 'Test 15');
test(countPrefixSuffixPairs(["z","zzz","zzzzz","zzzzzzz"]), 6, 'Test 16');
test(countPrefixSuffixPairs(["dog","dogcat","dogcatdog"]), 1, 'Test 17');
test(countPrefixSuffixPairs(["a","aba","ababa","aa"]), 4, 'Test 18');
test(countPrefixSuffixPairs(["t","tt","ttt","tttt","ttttt","tttttt"]), 15, 'Test 19');
test(countPrefixSuffixPairs(["aabb","aabbcc","aabbccaabb"]), 1, 'Test 20');
test(countPrefixSuffixPairs(["abc", "abcabc", "ab", "a"]), 1, 'Test 21');
test(countPrefixSuffixPairs(["z","zzz","zzzz","zzzzz"]), 6, 'Test 22');
test(countPrefixSuffixPairs(["abab","ab"]), 0, 'Test 23');
test(countPrefixSuffixPairs(["x", "xx", "xxx", "xxxx"]), 6, 'Test 24');
test(countPrefixSuffixPairs(["s","ss","sss","ssss","sssss"]), 10, 'Test 25');
test(countPrefixSuffixPairs(["a", "b", "c", "d"]), 0, 'Test 26');
test(countPrefixSuffixPairs(["hello", "hellohello", "lohel", "ohelloh"]), 1, 'Test 27');
test(countPrefixSuffixPairs(["test", "testtest", "sttes", "ttest"]), 1, 'Test 28');
test(countPrefixSuffixPairs(["abc","abcabc","abcabcabc"]), 3, 'Test 29');
test(countPrefixSuffixPairs(["abc", "abcabc", "bcb", "bcbcbcb"]), 2, 'Test 30');
test(countPrefixSuffixPairs(["xy","xyxy","yxyx","xyxyxy","yxyxyx","xyxyxyxy","yxyxyxyx","xyxyxyxyxy"]), 13, 'Test 31');
test(countPrefixSuffixPairs(["abc","cab","bac","abcabc","abcabcabc","cababcabc","bacbacbac"]), 4, 'Test 32');
test(countPrefixSuffixPairs(["abab","baba","ab","ba","aba","bab","ababab","bababa","abababa","bababab","abababab","babababa"]), 12, 'Test 33');
test(countPrefixSuffixPairs(["ab","baba","abab","bababa","ababab","babababa","abababab","bababababa"]), 12, 'Test 34');
test(countPrefixSuffixPairs(["abab","baba","ababa","babab","ababab","bababa","abababa","bababab","abababab","babababa"]), 8, 'Test 35');
test(countPrefixSuffixPairs(["noon","noonnoon","noonnoonnoon","noonoonoonnoon","noonnoonnoonnoon"]), 7, 'Test 36');
test(countPrefixSuffixPairs(["aabb","bbaa","aabbcc","ccaabb","aabbccaabb","bbaaabbbaa","ccaabbaacc"]), 2, 'Test 37');
test(countPrefixSuffixPairs(["aaaaa","baaaaa","caaaaa","daaaaa","eaaaaa","faaaaa","baaaaaa","caaaaaa"]), 0, 'Test 38');
test(countPrefixSuffixPairs(["z","zz","zzz","zzzz","zzzzz","zzzzzz","zzzzzzz"]), 21, 'Test 39');
test(countPrefixSuffixPairs(["aabb","aabbcc","aabbccaabb","aabbccaabbcc","aabbccaabbccaabb","aabbccaabbccaabbcc"]), 6, 'Test 40');
test(countPrefixSuffixPairs(["abcde","abcdeabcde","bcdeabcde","cdeabcde","deabcde","eabcde","abcdeabcdeabcde"]), 3, 'Test 41');
test(countPrefixSuffixPairs(["ababab","bababa","abab","baba","aba","ba","a","b","ab","ba","aba","bab","abb","bba"]), 4, 'Test 42');
test(countPrefixSuffixPairs(["ab","abc","abcd","abcde","abcdef","abcdefg"]), 0, 'Test 43');
test(countPrefixSuffixPairs(["abc","cab","bac","abcabc","bcabc","abcabcabc"]), 3, 'Test 44');
test(countPrefixSuffixPairs(["aaaa","aaa","aa","a","abcabcabc","abcabc","abc","ab","a","abcabcabcabc","abcabcabcabcabcabcabc","abcabcabcabcabc","abcabcabcabcabcabcabcabcabc","abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc","abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"]), 33, 'Test 45');
test(countPrefixSuffixPairs(["pqr","pqrpqr","qrpqrpqr","rpqrpqrpqr","pqrpqrpqr","qrpqrpqr","rpqrpqrpqr","pqrpqrpqr"]), 8, 'Test 46');
test(countPrefixSuffixPairs(["aba","abacaba","cabacabac","abcabcabc"]), 1, 'Test 47');
test(countPrefixSuffixPairs(["abcabc", "abc", "abcabcabc", "abca", "abcb", "abcab", "abcabcab", "a", "aa", "aaa"]), 6, 'Test 48');
test(countPrefixSuffixPairs(["racecar","racecaracecar","car","racecaracecaracecar"]), 3, 'Test 49');
test(countPrefixSuffixPairs(["xyz","xyzxyz","xyzxyzxyz","xyxzyx","xyzzyx"]), 3, 'Test 50');
test(countPrefixSuffixPairs(["zzz","zzzz","zzzzz","zzzzzz","zzzzzzz","zzzzzzzz"]), 15, 'Test 51');
test(countPrefixSuffixPairs(["aaaa", "aaa", "aa", "a", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa", "aaaaaab", "aaaaaaab", "aaaaaaaab"]), 30, 'Test 52');
test(countPrefixSuffixPairs(["mama", "mamama", "mamamama", "ma", "m", "mam", "mamam", "mamama", "mamamam", "mamamama"]), 17, 'Test 53');
test(countPrefixSuffixPairs(["aaa", "aaaa", "aaaaa", "aa", "a", "aaaaaa", "aaaaaaa"]), 14, 'Test 54');
test(countPrefixSuffixPairs(["test","testtest","tset","sett","sttest","testset"]), 1, 'Test 55');
test(countPrefixSuffixPairs(["ababab","bababa","ab","aba","baba","bababab","bababa","abab","bab"]), 3, 'Test 56');
test(countPrefixSuffixPairs(["repeat","peatre","eatrep","atrep","trepeat","peatpeatpeat"]), 0, 'Test 57');
test(countPrefixSuffixPairs(["xyzzyx","zyxzyxzyx","xyzzyxzyxzyx","zyxzyxzyxzyxzyx","xyzzyxzyxzyxzyxzyx"]), 1, 'Test 58');
test(countPrefixSuffixPairs(["abcd","dcba","cdab","abcdabcd","cdabcdcd","dcabcd","abcdabdc","abcdabcdabcd"]), 3, 'Test 59');
test(countPrefixSuffixPairs(["mnop","mnopm","nopmnop","mnopm","mnopm","mnopmnopm","nopmnopm","mnopmnopm","mnopmnopmnop","mnopmnopmnopm","nopmnopmnopm"]), 17, 'Test 60');
test(countPrefixSuffixPairs(["xyz","xyzyx","zyxzyxzyx","zxzyx","xyzxyzxyz","xyzzyxzyxzyx"]), 1, 'Test 61');
test(countPrefixSuffixPairs(["hello","hellohello","hell","hellohellohello","lohel"]), 3, 'Test 62');
test(countPrefixSuffixPairs(["mnop","opmnop","nopmnop","mnopmnop","opmnopmnop","nopmnopnop","mnopmnopmnop"]), 4, 'Test 63');
test(countPrefixSuffixPairs(["abcabc","abc","bcabc","abcabcabc","abcabca"]), 2, 'Test 64');
test(countPrefixSuffixPairs(["pqr","pqrpqr","pqrpqrpqr","pqrpqrpqrpqr","pqrpqrpqrpqrpqr","pqrpqrpqrpqrpqrpqr","pqrpqrpqrpqrpqrpqrpqr"]), 21, 'Test 65');
test(countPrefixSuffixPairs(["abcabcabc","bcabcabcab","cabcabcab","abcabc","bcabc","cabc","abc","bc","c"]), 0, 'Test 66');
test(countPrefixSuffixPairs(["aaa","aaabaaa","baaabaaa","aaabaaba","abaabaaa","aaabaaba","baaabaaa"]), 3, 'Test 67');
test(countPrefixSuffixPairs(["abcdabcd","abcd","abcde","abcdeabcd","abcdeabcde"]), 2, 'Test 68');
test(countPrefixSuffixPairs(["hello","hellohello","hellohellohello","world","worldworld","worldworldworld"]), 6, 'Test 69');
test(countPrefixSuffixPairs(["aaaa","aa","a","aaaaaa","aaa"]), 5, 'Test 70');
test(countPrefixSuffixPairs(["abcd","abcdabcd","abcdabcdabcd","abcdabcdabcdabcd","abcdabcdabcdabcdabcd"]), 10, 'Test 71');
test(countPrefixSuffixPairs(["xyz","xyzxyz","xyzxyzxyz","xy"]), 3, 'Test 72');
test(countPrefixSuffixPairs(["a","aa","aaa","aaaa","aaaaa"]), 10, 'Test 73');
test(countPrefixSuffixPairs(["same","same","same","same","same","same","same","same","same","same"]), 45, 'Test 74');
test(countPrefixSuffixPairs(["aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa"]), 21, 'Test 75');
test(countPrefixSuffixPairs(["aaaa","aa","a","aaaaaa","aaa","aaaaaaa"]), 10, 'Test 76');
test(countPrefixSuffixPairs(["xyz", "xyzxyz", "xyzxyzxyz", "xy", "xyxy", "xyxyxy"]), 6, 'Test 77');
test(countPrefixSuffixPairs(["abcd","cdabcd","abcdabcd","abcdabcdabcd","dabcdabcd"]), 3, 'Test 78');
test(countPrefixSuffixPairs(["zzz","zzzz","zzzzz","zzzzzz","zzzzzzz","zzzzzzzz","zzzzzzzzz","zzzzzzzzzz","zzzzzzzzzzz","zzzzzzzzzzzz","zzzzzzzzzzzzz"]), 55, 'Test 79');
test(countPrefixSuffixPairs(["aabbcc","aabb","cc","aabbccaabbcc","aabbccaa","bbccaa"]), 1, 'Test 80');
test(countPrefixSuffixPairs(["ab", "abcba", "abcabcba", "a", "aba", "abababa"]), 3, 'Test 81');
test(countPrefixSuffixPairs(["abacaba","aba","abacababa","a"]), 1, 'Test 82');
test(countPrefixSuffixPairs(["xyz","xyzyx","xyzxyz","xyzxyzyx","xyzxyzyxyz"]), 2, 'Test 83');
test(countPrefixSuffixPairs(["level","levellevel","levellevellevel","llevevllevevllevell"]), 3, 'Test 84');
test(countPrefixSuffixPairs(["xyxy","yxyx","xyxyxy","yxyxyx","xyxyxyxy","yxyxyxyx","xyxyxyxyxy","yxyxyxyxyx"]), 12, 'Test 85');
test(countPrefixSuffixPairs(["ab","aba","abab","ababa","abababa","ababababa","abababababa","ababababababa","abababababababa","ababababababababa","abababababababababa"]), 37, 'Test 86');
test(countPrefixSuffixPairs(["xyz","xyzxyz","zyxzyx","xyzzyxxyz","xyz"]), 3, 'Test 87');
test(countPrefixSuffixPairs(["aaa","aaaa","aaaaa","aaaaaa"]), 6, 'Test 88');
test(countPrefixSuffixPairs(["abc","cab","bac","abcabc","abcabcabc","abcabcabcabc"]), 6, 'Test 89');
test(countPrefixSuffixPairs(["abcabc","abc","abcabcabc","a","aa","aaa","aaaa"]), 8, 'Test 90');
test(countPrefixSuffixPairs(["aaa","aa","a","aaaa","aaaaa"]), 7, 'Test 91');
test(countPrefixSuffixPairs(["ab","abc","ababc","abcababc"]), 1, 'Test 92');
test(countPrefixSuffixPairs(["p","pp","ppp","pppp","ppppp","pppppp","ppppppp"]), 21, 'Test 93');
test(countPrefixSuffixPairs(["xyz","xyzyx","xyzxyz","zyxzyxzyx"]), 1, 'Test 94');
test(countPrefixSuffixPairs(["zzz", "zzzz", "zz", "z", "zzzzz", "zzzzzz", "zzzzzzz", "zzzzzzzz", "zzzzzzzzz", "zzzzzzzzzz"]), 40, 'Test 95');
test(countPrefixSuffixPairs(["ab","aba","abab","ababa","ababab","abababa"]), 6, 'Test 96');
test(countPrefixSuffixPairs(["deified","deifieddeified","deifieddeifieddeified","deifieddeifieddeifieddeified","deifieddeifieddeifieddeifieddeified"]), 10, 'Test 97');
test(countPrefixSuffixPairs(["abcdabcd", "abcdeabcde", "abcdefabcdef", "abcd", "abcde", "abcdef", "abc", "ab", "a", "ababab", "abcabcabc"]), 2, 'Test 98');
test(countPrefixSuffixPairs(["xyz","xyzxyz","xyzxyzxyz","xyx"]), 3, 'Test 99');
test(countPrefixSuffixPairs(["pqr","pqrpqr","rpqrpqr","pqrpqrpqr","qpqrpqrpqr","pqrqpqrpqrpqr","pqrpqrpqrpqr","rpqrpqrpqrpqr","pqrpqrpqrpqrpqr","qpqrpqrpqrpqrpqr"]), 12, 'Test 100');
test(countPrefixSuffixPairs(["abcd", "abcdabcd", "abcde", "abcdeabcde", "ab", "abab", "abc", "abcabc", "a", "aaaa"]), 5, 'Test 101');
test(countPrefixSuffixPairs(["xyz","xyzxyz","xyzxyzxyz","xyzxyzxyzxyz"]), 6, 'Test 102');
test(countPrefixSuffixPairs(["abcd","abcdabcd","bcdabcde","cdabcde","dabcde","abcde"]), 1, 'Test 103');
test(countPrefixSuffixPairs(["mnop","nopm","opmn","pqrs","rspq","srpq","qpsr","mnopmnop","nopmnopm","opmnopno"]), 2, 'Test 104');
test(countPrefixSuffixPairs(["x","xx","xxx","xxxx","xxxxx","xxxxxx","xxxxxxx","xxxxxxxx","xxxxxxxxx","xxxxxxxxxx"]), 45, 'Test 105');
test(countPrefixSuffixPairs(["hello","hellohello","hellohellohello","hellohellohellohello","hellohellohellohellohello"]), 10, 'Test 106');
test(countPrefixSuffixPairs(["radar","radarradar","radarradarradar","radarradarradarradar","radarradarradarradarradar"]), 10, 'Test 107');
test(countPrefixSuffixPairs(["pqr", "pqrpqr", "pq", "pqpq", "prq", "prqprq", "pr", "prpr", "qpr", "qprqpr"]), 5, 'Test 108');
test(countPrefixSuffixPairs(["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa"]), 28, 'Test 109');
test(countPrefixSuffixPairs(["abc","bac","cab","abcabc","bacbac","cabcab","abcabca","bcabcabc","cababcab","abcabcabca"]), 5, 'Test 110');
test(countPrefixSuffixPairs(["abc","abca","abcabc","cabcabc"]), 1, 'Test 111');
test(countPrefixSuffixPairs(["abcabc","abc","abcabcabcabc","abcabcabc","abcabcabcabcabcabc"]), 8, 'Test 112');
test(countPrefixSuffixPairs(["rotor","rotorrotor","rotorrotorrotor","torotorotor"]), 3, 'Test 113');
test(countPrefixSuffixPairs(["abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno","mnop"]), 0, 'Test 114');
test(countPrefixSuffixPairs(["aabb","bbaa","aabbcc","ccbaab","aabbccbaab"]), 0, 'Test 115');
test(countPrefixSuffixPairs(["a","aa","aaa","aaaa","aaaaa","aaaaaa"]), 15, 'Test 116');
test(countPrefixSuffixPairs(["ababab","ab","abab","abababab","baba","abababa"]), 4, 'Test 117');
test(countPrefixSuffixPairs(["xy","xyxy","xyxyxy","xyxyxyxy","xyxyxyxyxy"]), 10, 'Test 118');
test(countPrefixSuffixPairs(["banana","ban","banana","nan","banananan","ananan"]), 1, 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

