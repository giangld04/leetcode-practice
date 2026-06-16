// Test: 2506. Count Pairs Of Similar Strings
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { similarPairs } = require("./solution");

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

console.log("\n2506. Count Pairs Of Similar Strings\n");

test(similarPairs(["aabbcc","abc","ab","a","b","c"]), 1, 'Test 1');
test(similarPairs(["aaa","bbb","ccc","aab","aba","baa"]), 3, 'Test 2');
test(similarPairs(["aabbcc","abc","aabb","aaabbbcc","abcabc"]), 6, 'Test 3');
test(similarPairs(["a","b","c","d","e"]), 0, 'Test 4');
test(similarPairs(["aaa","bbb","ccc","abc","abc"]), 1, 'Test 5');
test(similarPairs(["abcd","bcad","cabd","dabc"]), 6, 'Test 6');
test(similarPairs(["nba","cba","dba"]), 0, 'Test 7');
test(similarPairs(["abc","acb","bac","bca","cab","cba"]), 15, 'Test 8');
test(similarPairs(["abcd","dcba","abdc","badc"]), 6, 'Test 9');
test(similarPairs(["aabb","ab","ba"]), 3, 'Test 10');
test(similarPairs(["abc","def","ghi","jkl"]), 0, 'Test 11');
test(similarPairs(["aa","bb","cc","abc","cba","bca"]), 3, 'Test 12');
test(similarPairs(["a","b","c","d"]), 0, 'Test 13');
test(similarPairs(["a","b","c","d","e","f","g","h","i","j"]), 0, 'Test 14');
test(similarPairs(["abc","abc","abc","abc"]), 6, 'Test 15');
test(similarPairs(["abcd","dcba","abcd","dcba","abcd"]), 10, 'Test 16');
test(similarPairs(["aaa","bbb","ccc","aaa"]), 1, 'Test 17');
test(similarPairs(["abc","def","ghi"]), 0, 'Test 18');
test(similarPairs(["aba","aabb","abcd","bac","aabc"]), 2, 'Test 19');
test(similarPairs(["abc","def","ghi","jkl","mno"]), 0, 'Test 20');
test(similarPairs(["ab","ba","ab","ba","ab","ba"]), 15, 'Test 21');
test(similarPairs(["abc", "acb", "bac", "bca", "cab", "cba", "aabbcc", "bbaacc", "ccbaab", "aabbbc"]), 45, 'Test 22');
test(similarPairs(["abcde","edcba","abc","bca","cab","deabc"]), 6, 'Test 23');
test(similarPairs(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"]), 6, 'Test 24');
test(similarPairs(["aabbcc","abcabc","bcaabc","cababc","bcabac"]), 10, 'Test 25');
test(similarPairs(["aabbccddeeff", "ffeeddccbbaa", "abcdef", "fedcba", "efabcd", "fedcba", "abcdefg", "gfedcba", "hijklm", "mlkjih"]), 17, 'Test 26');
test(similarPairs(["aabbcc", "bbaacc", "ccaabb", "aabbc", "bbaac", "ccaab", "aaabb", "aabbb", "abbbb", "bbbbb"]), 18, 'Test 27');
test(similarPairs(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]), 0, 'Test 28');
test(similarPairs(["aaaa", "bbbb", "cccc", "dddd", "eeee", "ffff", "gggg", "hhhh", "iiii", "jjjj"]), 0, 'Test 29');
test(similarPairs(["abcdefg","gfedcba","ghijklm","mlkjihg","nopqrst","tsrqpon","vwxyz","zyxwv","abcdabcd","efghijkl","mnopqrstuvw","xyzzyxwv","utsrqponmlkjihgfedcba"]), 6, 'Test 30');
test(similarPairs(["hello","olleh","world","dlrow","python","nohtyp","java","avaj","algorithm","mhtirogla","data","tatad","structure","erutcurts","example","elpmaxe","test","tset","code","edoc","challenge","egnellahc","interview","weivretni"]), 12, 'Test 31');
test(similarPairs(["xyzxyzxyz", "zyxzyxzyx", "yzxyzxyz", "zyxyzxyz", "xzyzxzyx", "xyzzyxzyx", "zyxzyxzyx", "xyzzyxzyx", "xzyzxzyx", "xyzxyzxyz"]), 45, 'Test 32');
test(similarPairs(["aaaaa","bbbbb","ccccc","ddddd","eeeee","aaaaa","bbbbb"]), 2, 'Test 33');
test(similarPairs(["abcd","abce","abcf","abdg","abdh","abei","abdj","abcd","abcd"]), 3, 'Test 34');
test(similarPairs(["aabbcc","abc","ab","a","b","c","abcde","edcba","fghij","jihgf","mnopq","qpomn"]), 4, 'Test 35');
test(similarPairs(["abcd","dcba","cdab","bacd","cabd","abcd","acdb","bdac","bcda","dabc","adcb","cdba","bacd","abcd","bcad"]), 105, 'Test 36');
test(similarPairs(["abcd", "dcba", "abcd", "dcba", "abcd", "abcd", "abcd", "dcba", "dcba", "abcd"]), 45, 'Test 37');
test(similarPairs(["xyz","zyx","abc","cab","bac","xyz","zyx"]), 9, 'Test 38');
test(similarPairs(["aaaa", "aabb", "abab", "abba", "baba", "bbaa", "baab", "abab", "aabb", "abba"]), 36, 'Test 39');
test(similarPairs(["abc", "bca", "cab", "xyz", "zyx", "yzx"]), 6, 'Test 40');
test(similarPairs(["ab", "ba", "ac", "ca", "ad", "da", "bc", "cb", "bd", "db", "cd", "dc"]), 6, 'Test 41');
test(similarPairs(["abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij"]), 0, 'Test 42');
test(similarPairs(["xyz", "zyx", "yzx", "xzy", "yxz", "zxy", "xyzz", "yzzx", "zzxy", "zzzx", "zxzy", "xzyz"]), 55, 'Test 43');
test(similarPairs(["unique","ueinque","qneuie","neiqueu","ienquue","enuiqueu","qieuenu","euniqeu","ueinqeu","neuiqeu","uieqneu","niuqueeu","eiunqueu","iuqeenu","qieuenu","euniqeu","ueinqeu","neuiqeu","uieqneu","niuqueeu","eiunqueu","iuqeenu","qieuenu","euniqeu","ueinqeu","neuiqeu","uieqneu","niuqueeu","eiunqueu","iuqeenu","qieuenu","euniqeu","ueinqeu","neuiqeu","uieqneu","niuqueeu","eiunqueu","iuqeenu","qieuenu","euniqeu","ueinqeu","neuiqeu","uieqneu","niuqueeu","eiunqueu","iuqeenu","qieuenu","euniqeu","ueinqeu","neuiqeu","uieqneu","niuqueeu","eiunqueu","iuqeenu"]), 1431, 'Test 44');
test(similarPairs(["aaa","aa","a","b","bb","bbb","bbbb","bbbbb"]), 13, 'Test 45');
test(similarPairs(["abcd","abdc","acbd","acdb","adbc","adcb","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba"]), 276, 'Test 46');
test(similarPairs(["pqrst", "rstqp", "qrstp", "srtpq", "tsrqp", "tspqr", "pqrst", "rstqp", "qrstp", "srtpq", "tsrqp", "tspqr"]), 66, 'Test 47');
test(similarPairs(["abc", "acb", "bac", "bca", "cab", "cba", "abc", "acb", "bac", "bca"]), 45, 'Test 48');
test(similarPairs(["abc", "abd", "abe", "abf", "abg", "abh", "abi", "abj", "abk", "abl", "abm", "abn", "abo", "abp", "abq", "abr", "abs", "abt", "abu", "abv", "abw", "abx", "aby", "abz"]), 0, 'Test 49');
test(similarPairs(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba"]), 15, 'Test 50');
test(similarPairs(["xyz","zyx","zyx","xyz","yxxz","zyxz","xzyz","yxzz","zxzy","zyzz","zzzy","zyyz","zyzx","xzyz","zzyx","zyxz","zyzx","zyxz","zyzx","zyxz","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx","zyzx"]), 744, 'Test 51');
test(similarPairs(["abcdefg","gfedcba","hijklmn","nmkljih","opqrstu","utsrqpo","vwxyz","zyxwv","abcdefg","gfedcba","hijklmn","nmkljih","opqrstu","utsrqpo","vwxyz","zyxwv"]), 24, 'Test 52');
test(similarPairs(["abc", "bca", "cab", "xyz", "zyx", "yxz"]), 6, 'Test 53');
test(similarPairs(["aaaa","bbbb","cccc","dddd","eeee","ffff","gggg","hhhh","iiii","jjjj","kkkk","llll","mmmm","nnnn","oooo","pppp","qqqq","rrrr","ssss","tttt","uuuu","vvvv","wwww","xxxx","yyyy","zzzz","aaab","bbba","ccca","ddda","eeea","fffa","ggga","hhha","iiia","jjja","kkka","llla","mmma","nnna","oooo","pppa","qqqa","rrra","sssa","ttta","uuua","vvva","wwwa","xxxa","yyya","zzza","aab","bba","cca","dda","eea","ffa","gga","hha","iaa","jaa","kaa","laa","maa","naa","oaa","paa","qaa","raa","saa","taa","uaa","vaa","waa","xaa","yaa","zaa","aabbb","bbbaa","cccaa","dddaa","eeeea","ffffa","gggga","hhhaa","iiiia","jjjaa","kkkaa","lllaa","mmmia","nnnaa","ooooo","pppaa","qqqaa","rrraa","ssaaa","tttaa","uuuaa","vvvaa","wwwaa","xxxaa","yyaaa","zzzaa"]), 85, 'Test 54');
test(similarPairs(["abacabadabacaba", "bacbacbacbacbac", "cabacabacabacab", "abcabcabcabcabc", "bcbcbcbcbcbcb", "cbcbcbcbcbcbc"]), 4, 'Test 55');
test(similarPairs(["aaa", "bbb", "ccc", "abc", "bca", "cab", "abc", "bca", "cab"]), 15, 'Test 56');
test(similarPairs(["aaaa", "aaab", "aaba", "abaa", "baaa", "bbaa", "bbba", "bbbb"]), 15, 'Test 57');
test(similarPairs(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "mnopqrstuvwxyzabcdefghijkl"]), 3, 'Test 58');
test(similarPairs(["abcd", "abce", "abcf", "abdg", "abdh", "abdi", "abdj", "abcd"]), 1, 'Test 59');
test(similarPairs(["aabbcc", "abcabc", "bcaabc", "cababc", "aabbcc", "bbaacc", "ccbaab"]), 21, 'Test 60');
test(similarPairs(["xyz","zyx","yxz","zxy","xzy","yzx"]), 15, 'Test 61');
test(similarPairs(["xyz","zyx","yxz","xzy","yzx","zxy","abc","bca","cab","aaa","bbb","ccc","aba","bab","aab","abb","baa","bba","abb","aab","abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), 55, 'Test 62');
test(similarPairs(["xyz","zyx","yzx","xzy","yxz","zxy","zyxw","wxyz"]), 16, 'Test 63');
test(similarPairs(["mnop","mnopqr","mnopqrs","mnopqrst","mnopqrstuv","mnopqrstuvw","mnopqrstuvwx","mnopqrstuvwxy","mnopqrstuvwxyz"]), 0, 'Test 64');
test(similarPairs(["abcabc", "bcabc", "cabc", "abc", "bca", "cab", "aabbcc", "bbccaa", "ccaabb"]), 36, 'Test 65');
test(similarPairs(["abcde","edcba","bcdea","deabc","cdeab"]), 10, 'Test 66');
test(similarPairs(["abcdef","fedcba","ghijkl","lkjhgf","mnopqr","rqponm","stuvwx","xwvuts","yz","zy"]), 4, 'Test 67');
test(similarPairs(["pqr","qrp","prq","rpq","rqp","pqr","abc","cab","bac","abcde","edcba","fghij","jihgf","mnopq","qpomn"]), 21, 'Test 68');
test(similarPairs(["abc", "abcd", "abce", "abcf", "abcg", "abch", "abci", "abcj", "abck", "abcl", "abcm", "abcn", "abco", "abcp", "abcq", "abcr", "abcs", "abct", "abcu", "abcv", "abcw", "abcx", "abcy", "abcz"]), 0, 'Test 69');
test(similarPairs(["ab","ba","ac","ca","ad","da","bc","cb","bd","db","cd","dc","abcd","dcba","cdab","bacd","cabd","acbd","cadb","abcd","dcba","cdab","bacd","cabd","acbd","cadb"]), 97, 'Test 70');
test(similarPairs(["abcabcabc", "bcbcbcbc", "cacacac", "abababab", "babababa", "acacacac", "abcabcabc", "bcbcbcbc", "cacacac", "abababab"]), 8, 'Test 71');
test(similarPairs(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","zyx"]), 0, 'Test 72');
test(similarPairs(["abcdabcdabcdabcdabcdabcdabcdabcd","bcadbcadbcadbcadbcadbcadbcadbcad","cdabcdabcdabcdabcdabcdabcdabcdabc","dcbadcbadcbadcbadcbadcbadcbadcba","abcdabcdabcdabcdabcdabcdabcdabcde"]), 6, 'Test 73');
test(similarPairs(["apple","pale","pplea","elppa","ppale","pleap"]), 15, 'Test 74');
test(similarPairs(["aaaa","bbbb","cccc","dddd","eeee","ffff","gggg","hhhh","iiii","jjjj"]), 0, 'Test 75');
test(similarPairs(["abc","acb","bac","bca","cab","cba","abc","acb","bac","bca","cab","cba","abc","acb","bac","bca","cab","cba","abc","acb","bac","bca","cab","cba"]), 276, 'Test 76');
test(similarPairs(["mnopqr", "nopqrm", "opqrmn", "pqrmno", "qrmnop", "rmnopq", "mnopqr", "nopqrm", "opqrmn", "pqrmno", "qrmnop", "rmnopq", "mnopqr", "nopqrm", "opqrmn", "pqrmno", "qrmnop", "rmnopq"]), 153, 'Test 77');
test(similarPairs(["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]), 0, 'Test 78');
test(similarPairs(["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz", "uvw", "rst", "qpo", "nml", "kji", "fed", "cba", "zyx", "wvu", "tsr", "pon", "mlk", "jih", "gf", "de", "abc"]), 6, 'Test 79');
test(similarPairs(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 0, 'Test 80');
test(similarPairs(["aaa", "bbb", "ccc", "abc", "bca", "cab", "aab", "aba", "baa", "bbc", "bcb", "cbb", "acc", "cac", "cca"]), 12, 'Test 81');
test(similarPairs(["abcdef", "fedcba", "bcdefa", "defabc", "efabcd", "fabcde", "abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz", "uvw", "rst", "qpo", "nml", "kji", "fed", "cba", "zyx", "wvu", "tsr", "pon", "mlk", "jih", "gf", "de", "abc"]), 21, 'Test 82');
test(similarPairs(["abcde","edcba","fghij","jihgf","abcde","edcba"]), 7, 'Test 83');
test(similarPairs(["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"]), 45, 'Test 84');
test(similarPairs(["aabbcc","abcabc","ababab","acacac","bcbcbc","bacbac","cabcab","abcabcabc","xyzxyzxyz","zyxzyxzyx"]), 11, 'Test 85');
test(similarPairs(["abcdefg", "gfedcba", "fedcbag", "bagfedc", "abcdefg", "gfedcba", "fedcbag", "bagfedc", "abcdefg", "gfedcba"]), 45, 'Test 86');
test(similarPairs(["abcdefghij","jihgfedcba","abcdefghij","jihgfedcba","abcdefghij","jihgfedcba"]), 15, 'Test 87');
test(similarPairs(["abcdef", "fedcba", "defabc", "cabfed", "bcadef", "fedcba", "abcdef", "abcdef"]), 28, 'Test 88');
test(similarPairs(["abcde", "edcba", "cdeab", "decba", "bacde", "ecbad", "abcd", "dcba", "abc", "bca", "cab", "acb", "bac", "cba", "a", "b", "c", "d", "e"]), 31, 'Test 89');
test(similarPairs(["aabbcc","aabbc","aabc","abc","ab","a","b","bb","bbb","bbbb","bbbbb","bbbbb","bbbb","bbb","bb","b"]), 51, 'Test 90');
test(similarPairs(["same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same"]), 3403, 'Test 91');
test(similarPairs(["ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az"]), 0, 'Test 92');
test(similarPairs(["xyz","yzx","zxy","zyx","yxz","xzy","abc","cab","bca"]), 18, 'Test 93');
test(similarPairs(["abc","abcabc","abcabcabc","abcabcabcabc","abcabcabcabcabc","abcabcabcabcabcabc","abcabcabcabcabcabcabc","abcabcabcabcabcabcabcabc"]), 28, 'Test 94');
test(similarPairs(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 26, 'Test 95');
test(similarPairs(["test","sett","stet","tset","ttes","etts","etst","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste","stte","ttse","tste"]), 3828, 'Test 96');
test(similarPairs(["ab","ba","ac","ca","ad","da","bc","cb","bd","db","cd","dc","abcd","dcba","cdab","bacd","cabd","abcd","abc","acb","bac","bca","cab","cba","ab","ba","ac","ca","ad","da","bc","cb","bd","db","cd","dc","abcd","dcba","cdab","bacd","cabd","abcd"]), 117, 'Test 97');
test(similarPairs(["aaaa","aaab","aaba","aabb","abaa","abab","abba","abbb","baaa","baab","baba","babb","bbaa","bbab","bbba","bbbb"]), 91, 'Test 98');
test(similarPairs(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","aabbcc","ddeeff","gghhiijj","kkllmm","nnoopp","qqrrss","ttuuvv","wwxxyy","zz","aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm","nnn","ooo","ppp","qqq","rrr","sss","ttt","uuu","vvv","www","xxx","yyy","zzz"]), 3, 'Test 99');
test(similarPairs(["aabbcc", "bbaacc", "ccbbaa", "aabbcc", "bbaacc", "ccbbaa", "aabbbc", "bbaacc", "ccbbaa", "aabbbc", "bbaacc", "ccbbaa"]), 66, 'Test 100');
test(similarPairs(["hello","olleh","ohell","loleh","ehlol","llohe","world","dlrow","owrld","rldwo","ldwor","dworld","wolrd","orldw","lrwod","rwdol","dlorw","lorwd","rowdl","owrld","dlrow","world","dlrow","owrld","rldwo","ldwor","dworld","wolrd","orldw","lrwod","rwdol","dlorw","lorwd","rowdl","owrld","dlrow","world","dlrow","owrld","rldwo","ldwor","dworld","wolrd","orldw","lrwod","rwdol","dlorw","lorwd","rowdl","owrld"]), 961, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

