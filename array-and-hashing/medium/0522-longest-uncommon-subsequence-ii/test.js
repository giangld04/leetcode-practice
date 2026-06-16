// Test: 522. Longest Uncommon Subsequence Ii
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { findLUSlength } = require("./solution");

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

console.log("\n522. Longest Uncommon Subsequence Ii\n");

test(findLUSlength(["aaa","aaa","aa"]), -1, 'Test 1');
test(findLUSlength(["a","b","c","d","e"]), 1, 'Test 2');
test(findLUSlength(["a","a","a","a"]), -1, 'Test 3');
test(findLUSlength(["xyz","xy","xz","yzz"]), 3, 'Test 4');
test(findLUSlength(["aabbcc","abc","aabbc","aabc"]), 6, 'Test 5');
test(findLUSlength(["abcd","abcde","ab","abc"]), 5, 'Test 6');
test(findLUSlength(["abcd","ab","bc","cd"]), 4, 'Test 7');
test(findLUSlength(["abc","abc","abcd"]), 4, 'Test 8');
test(findLUSlength(["aabbcc","abc","abbc","aabbc"]), 6, 'Test 9');
test(findLUSlength(["abc","def","ghi"]), 3, 'Test 10');
test(findLUSlength(["abcde","abc","de","a"]), 5, 'Test 11');
test(findLUSlength(["aba","cdc","eae"]), 3, 'Test 12');
test(findLUSlength(["a","b","c"]), 1, 'Test 13');
test(findLUSlength(["xyz", "zyx", "yxz", "xzy", "yzx", "zxy", "xyz", "zyx"]), 3, 'Test 14');
test(findLUSlength(["aaaaa","bbbbb","ccccc","ddddd","eeeee","ffffff"]), 6, 'Test 15');
test(findLUSlength(["abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba"]), -1, 'Test 16');
test(findLUSlength(["abcd","abdc","acbd","dacb","cadb","bacd"]), 4, 'Test 17');
test(findLUSlength(["apple","apples","applesauce","appl","applf","applfs","applfsa","applfsau","applfsauc"]), 10, 'Test 18');
test(findLUSlength(["programming","programing","progamming","programmig","proogramming","programmiing"]), 12, 'Test 19');
test(findLUSlength(["mississippi","mississipi","mississipp","mississip","mississi","mississ","missis","missi","misi","msi","mi","m"]), 11, 'Test 20');
test(findLUSlength(["abcde","abxde","axcde","abxde","abcde","abcde"]), 5, 'Test 21');
test(findLUSlength(["abac","bca","cab","aaa","bbb","ccc"]), 4, 'Test 22');
test(findLUSlength(["banana","bananb","bananc","bandan","bandna","bandan","bandnaa","bandnaab","bandnaabc"]), 9, 'Test 23');
test(findLUSlength(["abcd","abdc","aebc","aecb","acbe"]), 4, 'Test 24');
test(findLUSlength(["abcd","abc","ab","a","aaaa","aaa","aa","a"]), 4, 'Test 25');
test(findLUSlength(["mnopqr","nopqrm","opqrmn","pqrmno","qrmnop","rmnopq"]), 6, 'Test 26');
test(findLUSlength(["abc","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij"]), 10, 'Test 27');
test(findLUSlength(["pqr","pqrs","pqs","prs","qs","qrs","qr","rs","r","s"]), 4, 'Test 28');
test(findLUSlength(["hello","world","hold","hero"]), 5, 'Test 29');
test(findLUSlength(["abcde","edcba","abdec","cabde","deabc","eabcd"]), 5, 'Test 30');
test(findLUSlength(["aabbcc","aabbbc","aabbcccc","aabbccdd","aabbccdde","aabbccddee"]), 10, 'Test 31');
test(findLUSlength(["aabbcc","abcabc","aabcbc","abacbc","aabbcc","aacbbc","aabbbc"]), 6, 'Test 32');
test(findLUSlength(["xxyy","xyxy","yxyx","xyyx","yxxxy","xyxxy","xxyxy","xyxyx"]), 5, 'Test 33');
test(findLUSlength(["abcabc","bcabca","cababc","abacbc","bcbcab","acbcab"]), 6, 'Test 34');
test(findLUSlength(["hello","hallo","hxllo","hell","helo","helo","heo","he","h","o"]), 5, 'Test 35');
test(findLUSlength(["abacax","bacaxa","caxaba","axabac","xacaba","cabaxa"]), 6, 'Test 36');
test(findLUSlength(["pqrst","pqrstu","pqrstu","pqrstu","pqr","pq","p"]), -1, 'Test 37');
test(findLUSlength(["unique","uniqe","unque","uniqu","uqnie","unieq","unqiue"]), 6, 'Test 38');
test(findLUSlength(["aab","aac","baa","bca","caa","cab","abc","acb"]), 3, 'Test 39');
test(findLUSlength(["x","xy","xyz","xyzz","xyzzz","xyzzzz","xyzzzzz","xyzzzzzz"]), 8, 'Test 40');
test(findLUSlength(["abcd", "abcde", "abcdef", "ab", "abcd"]), 6, 'Test 41');
test(findLUSlength(["aabbcc","bbaacc","ccabba","aaccbb","cabbba","bccaba"]), 6, 'Test 42');
test(findLUSlength(["aaaaa","aaaba","aabaa","abaab","abbaa"]), 5, 'Test 43');
test(findLUSlength(["abcdefg","bcdefga","cdefgab","defgabc","efgabcd","fgabcde"]), 7, 'Test 44');
test(findLUSlength(["abcde", "edcba", "bcdea", "cdeab", "decba"]), 5, 'Test 45');
test(findLUSlength(["hello", "hallo", "hxllo", "hexlo", "helxo"]), 5, 'Test 46');
test(findLUSlength(["abab", "baba", "abba", "baab", "abba"]), 4, 'Test 47');
test(findLUSlength(["abcdabcd","abcdeabc","abdcabdc","dacbdacb","dabcdbac","bacdabcd","abcdabdc"]), 8, 'Test 48');
test(findLUSlength(["aabbcc","aabcbc","abacbc","abcabc","abcbac","abccba"]), 6, 'Test 49');
test(findLUSlength(["banana","anana","nana","ana","na","a"]), 6, 'Test 50');
test(findLUSlength(["aaaaa","aaaba","aabaa","abaaa","baaaa"]), 5, 'Test 51');
test(findLUSlength(["abcde", "abc", "ab", "a"]), 5, 'Test 52');
test(findLUSlength(["abc","acb","bac","bca","cab","cba","abcd","abdc","acbd","acdb","adbc","adcb","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba","abcd"]), 4, 'Test 53');
test(findLUSlength(["banana","anana","nana","ana","na","a","b"]), 6, 'Test 54');
test(findLUSlength(["longstring","longerstring","longeststring","longstringer","longstringest","longstringerer"]), 14, 'Test 55');
test(findLUSlength(["abcdef","abcfed","bacdef","badcfe","bcadef","bcdafe"]), 6, 'Test 56');
test(findLUSlength(["aaaa","aaab","aaba","abaa","abab","abba","bbaa","baab","baba","bbaa"]), 4, 'Test 57');
test(findLUSlength(["abcabc","bcabc","cabc","abc","ab","a","b","c"]), 6, 'Test 58');
test(findLUSlength(["aaaaa","aaab","aab","aba","baa","aaa"]), 5, 'Test 59');
test(findLUSlength(["mississippi", "missisipi", "missippi", "mssippi", "msissippi"]), 11, 'Test 60');
test(findLUSlength(["abcdefg","bcdefga","cdefgab","defgabc","efgabcd","fgabcde","gabcdef"]), 7, 'Test 61');
test(findLUSlength(["cat", "dog", "caterpillar", "cattle", "tall"]), 11, 'Test 62');
test(findLUSlength(["hello","hallo","hullo","hellu","hullo","helou"]), 5, 'Test 63');
test(findLUSlength(["aabbcc", "abbccc", "aabccc", "aaabcc", "aabbcc", "aabbbc", "aabbbc", "aabccc", "abbccc", "abaccc"]), 6, 'Test 64');
test(findLUSlength(["abcd", "abac", "abca", "acba", "acab", "aabc", "abbc", "aabb", "abbb", "bbbb"]), 4, 'Test 65');
test(findLUSlength(["ab","abc","abcd","abcde","abcdef","abcdefg"]), 7, 'Test 66');
test(findLUSlength(["abcd","abdc","acbd","dabc","dacb"]), 4, 'Test 67');
test(findLUSlength(["abcabc","ababc","abc","abcd","abcde"]), 6, 'Test 68');
test(findLUSlength(["abcd","abdc","acbd","acdb","adbc","adcb","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba"]), 4, 'Test 69');
test(findLUSlength(["abcdef","abdefc","acdefb","adefbc","aebcdf","afedcb"]), 6, 'Test 70');
test(findLUSlength(["hello", "world", "hold", "wolf", "hold", "hold"]), 5, 'Test 71');
test(findLUSlength(["abcdefgh","bghcdefa","cdefghba","defghbac","efghbacd","fghbacde"]), 8, 'Test 72');
test(findLUSlength(["abcde","abced","acbed","acbde","adbec","adebc"]), 5, 'Test 73');
test(findLUSlength(["abc", "acb", "bac", "bca", "cab", "cba"]), 3, 'Test 74');
test(findLUSlength(["abcde","edcba","cbade","badce","aecdb","bcdea","abced"]), 5, 'Test 75');
test(findLUSlength(["abcdefgh","bcdefgh","cdefgh","defgh","efgh","fgh","gh","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 8, 'Test 76');
test(findLUSlength(["aaaa", "aaab", "aaba", "abaa", "baaa"]), 4, 'Test 77');
test(findLUSlength(["abcd","abdc","acbd","dacb","cabd"]), 4, 'Test 78');
test(findLUSlength(["aaaa","aaab","aabb","abbb","bbbb"]), 4, 'Test 79');
test(findLUSlength(["xyz","zyx","yz","zx","yx","x","y","z",""]), 3, 'Test 80');
test(findLUSlength(["abcd","abcde","ab","abc","a","abcd","abcde","ab","abc","a"]), -1, 'Test 81');
test(findLUSlength(["aab","abc","abcd","abcde","abcdef"]), 6, 'Test 82');
test(findLUSlength(["abcd", "abdc", "acbd", "adcb", "bacd"]), 4, 'Test 83');
test(findLUSlength(["xyzz","zyxz","xzyz","zxzy","xzzy","zzxy"]), 4, 'Test 84');
test(findLUSlength(["banana", "bandana", "bandanna", "band", "anana"]), 8, 'Test 85');
test(findLUSlength(["aabbcc","aabbc","aabc","abc","aab","ab","ac","a","b","c","d"]), 6, 'Test 86');
test(findLUSlength(["abc","abc","abc","abcd"]), 4, 'Test 87');
test(findLUSlength(["apple","ale","app","appl","ample"]), 5, 'Test 88');
test(findLUSlength(["zzzzzzzzzz","zzzzzzzzz","zzzzzzzz","zzzzzzz","zzzzzz","zzzzz","zzzz","zzz","zz","z"]), 10, 'Test 89');
test(findLUSlength(["unique", "distinct", "different", "separate", "unequal", "unique", "distinct", "different", "separate", "unequal"]), -1, 'Test 90');
test(findLUSlength(["sequence", "subsequence", "subseq", "seq", "sequencee"]), 11, 'Test 91');
test(findLUSlength(["aaaaa","aaaab","aaaba","aabaa","abaaa","baaaa","aabba","aabra","abaab","baaab","ababa","babaa","abaab","baaba","abaaa","baaaa","aabaa","abaaa","baaba","abaab"]), 5, 'Test 92');
test(findLUSlength(["zzzz","zzzzz","zzzzzz","zzzzzzz","zzzzzzzz","zzzzzzzzz","zzzzzzzzzz"]), 10, 'Test 93');
test(findLUSlength(["abcd","abdc","acbd","dacb","cdab","cabd"]), 4, 'Test 94');
test(findLUSlength(["xyz","xyx","xyy","xzy","yzy","yzz","zzy","zzyz","zzzy","zzzz"]), 4, 'Test 95');
test(findLUSlength(["apple", "aple", "appl", "pple", "aplp"]), 5, 'Test 96');
test(findLUSlength(["hello","hallo","hxllo","hexlo","hxllo","hxllo"]), 5, 'Test 97');
test(findLUSlength(["aaaabbbb","aaabbb","aabbb","abbb","bbb","bb","b"]), 8, 'Test 98');
test(findLUSlength(["pqr","qrp","rpq","prq","rqp","qpr","ppp","qqq","rrr"]), 3, 'Test 99');
test(findLUSlength(["qwerty", "qwertyuiop", "qwertyuio", "qwertyui", "qwer"]), 10, 'Test 100');
test(findLUSlength(["aaabbb","aabbbb","abbbbb","aaabbbb","aabbbbbb","abbbbbbb"]), 8, 'Test 101');
test(findLUSlength(["abcabcabc","abc","bc","c","bca","cab","bac","acb","cba","abcabc"]), 9, 'Test 102');
test(findLUSlength(["pqr","pqrs","pqrst","pqrstu","pqrstuv","pqrstuvw","pqrstuvwx","pqrstuvwxy"]), 10, 'Test 103');
test(findLUSlength(["xyz","xy","xz","yz","x","y","z","xyx","yzy","zxz"]), 3, 'Test 104');
test(findLUSlength(["xyz","xyx","xzy","yxz","yzy","zyx","zyz"]), 3, 'Test 105');
test(findLUSlength(["abcdefghij","abcdefghi","abcdefgh","abcdefg","abcdef","abcde","abcd","abc","ab","a"]), 10, 'Test 106');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

