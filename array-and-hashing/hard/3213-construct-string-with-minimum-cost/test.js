// Test: 3213. Construct String With Minimum Cost
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { minimumCost } = require("./solution");

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

console.log("\n3213. Construct String With Minimum Cost\n");

test(minimumCost("xyz", ["x","y","z"], [1,2,3]), 6, 'Test 1');
test(minimumCost("abcd", ["a","b","c","d"], [1,1,1,1]), 4, 'Test 2');
test(minimumCost("zzzz", ["zz","zzzz"], [2,1]), 1, 'Test 3');
test(minimumCost("programming", ["pro","gram","ming"], [10,20,30]), 60, 'Test 4');
test(minimumCost("python", ["py","th","on"], [5,7,8]), 20, 'Test 5');
test(minimumCost("abacaba", ["a","b","c"], [1,2,3]), 11, 'Test 6');
test(minimumCost("hello", ["he","ll","o"], [3,5,2]), 10, 'Test 7');
test(minimumCost("abcabc", ["abc","ab","c"], [5,3,2]), 10, 'Test 8');
test(minimumCost("abc", ["a","b","c"], [1,2,3]), 6, 'Test 9');
test(minimumCost("hello", ["h","he","hel","hell","hello"], [5,4,3,2,1]), 1, 'Test 10');
test(minimumCost("xyz", ["xy","y","z"], [5,3,2]), 7, 'Test 11');
test(minimumCost("aabbcc", ["aa","bb","cc"], [1,1,1]), 3, 'Test 12');
test(minimumCost("abcabcabc", ["abc","bc","c"], [3,2,1]), 9, 'Test 13');
test(minimumCost("abcde", ["a","bc","de"], [2,3,4]), 9, 'Test 14');
test(minimumCost("abcabc", ["abc","ab","c"], [3,2,1]), 6, 'Test 15');
test(minimumCost("zzzzz", ["z","zz","zzz"], [1,1,1]), 2, 'Test 16');
test(minimumCost("xyz", ["xy","yz","x"], [2,3,1]), 4, 'Test 17');
test(minimumCost("aaaa", ["z","zz","zzz"], [1,10,100]), -1, 'Test 18');
test(minimumCost("world", ["w","o","r","l","d"], [2,3,4,5,6]), 20, 'Test 19');
test(minimumCost("aabbcc", ["aa","bb","cc"], [3,4,5]), 12, 'Test 20');
test(minimumCost("abcdef", ["abdef","abc","d","def","ef"], [100,1,1,10,5]), 7, 'Test 21');
test(minimumCost("ababab", ["ab","aba","bab"], [3,4,5]), 9, 'Test 22');
test(minimumCost("testcase", ["tes","t","case"], [10,2,5]), 17, 'Test 23');
test(minimumCost("abcde", ["a","bc","de"], [1,2,3]), 6, 'Test 24');
test(minimumCost("abcdefgabcdefg", ["abc","def","g","abcde","fg"], [6,7,1,5,3]), 16, 'Test 25');
test(minimumCost("aaaabbbbcccc", ["a","aa","aaa","aaaa","b","bb","bbb","bbbb","c","cc","ccc","cccc"], [1,2,3,4,1,2,3,4,1,2,3,4]), 12, 'Test 26');
test(minimumCost("xyxxyxyxyx", ["xy","yx","xxy","xyx"], [1,2,3,4]), 9, 'Test 27');
test(minimumCost("zzzzzzzzzz", ["z","zz","zzz","zzzz","zzzzz"], [1,3,5,7,9]), 10, 'Test 28');
test(minimumCost("mnopqr", ["mno","pqr","mnop","qr","qrs"], [5,6,3,8,2]), 11, 'Test 29');
test(minimumCost("xyzxyzxyz", ["xyz", "xy", "xz", "yz"], [10, 5, 6, 7]), 30, 'Test 30');
test(minimumCost("aaaabbbbccccdddd", ["aaa","bbb","ccc","ddd","abcd"], [10,15,20,25,30]), -1, 'Test 31');
test(minimumCost("zzzzzzzzzzzzzzzzzzzz", ["zz","zzz","zzzz","zzzzz","zzzzzz"], [1,2,3,4,5]), 10, 'Test 32');
test(minimumCost("hellohello", ["he","ll","o","hello"], [3,2,1,5]), 10, 'Test 33');
test(minimumCost("zzzzzzzzzz", ["z", "zz", "zzz", "zzzz"], [1, 3, 6, 10]), 10, 'Test 34');
test(minimumCost("helloworld", ["he","ll","lo","wor","orl","ld"], [1,2,3,4,5,6]), -1, 'Test 35');
test(minimumCost("zzzzzzzzzzzz", ["zz","zzz","z"], [4,2,7]), 8, 'Test 36');
test(minimumCost("abcabcabcabc", ["abc","cab","bca"], [10,20,30]), 40, 'Test 37');
test(minimumCost("abcdabcdabcd", ["abcd","ab","cd","abc"], [10,5,3,8]), 24, 'Test 38');
test(minimumCost("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["aabb","ccdd","eef","gghh","iijj","kkl","mnoon","popp","qqr","rss","ttu","vvww","xxy","yzz"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14]), -1, 'Test 39');
test(minimumCost("abcdefghi", ["abc", "def", "ghi", "abcd", "efgh", "hij", "abcd"], [10, 20, 30, 15, 25, 35, 5]), 60, 'Test 40');
test(minimumCost("aabbaabbccddcc", ["aa","bb","cc","dd"], [1,2,3,4]), 16, 'Test 41');
test(minimumCost("xyxyxyxyxyxy", ["xy","yx","xxyy"], [10,5,20]), 60, 'Test 42');
test(minimumCost("zzzzzzzzzzzz", ["zzz","zzzz","zz","z"], [15,10,8,5]), 30, 'Test 43');
test(minimumCost("mississippi", ["mis","issi","ppi","ippi","pi"], [10,12,5,8,3]), -1, 'Test 44');
test(minimumCost("abcdefghijklmnop", ["abcdefghijklmno","p","abcdefghijk","lmnop"], [100,1,50,50]), 100, 'Test 45');
test(minimumCost("aaaaaaaaaa", ["a","aa","aaa","aaaa","aaaaa"], [1,2,3,4,5]), 10, 'Test 46');
test(minimumCost("xyzxyzxyz", ["xy","z","xyz"], [5,1,3]), 9, 'Test 47');
test(minimumCost("alibaba", ["ali","ba","ba","b","a"], [5,10,20,1,2]), 11, 'Test 48');
test(minimumCost("abracadabra", ["a","b","r","ac","ad","abra"], [1,2,3,4,5,6]), 21, 'Test 49');
test(minimumCost("bbaaccdd", ["bb","aa","cc","dd","abcd"], [5,6,7,8,9]), 26, 'Test 50');
test(minimumCost("xylophone", ["xy","lo","phone","pho","ne","on"], [3,1,2,5,4,6]), 6, 'Test 51');
test(minimumCost("abcabcabcabc", ["abc","ab","bc","a","b","c"], [5,2,3,1,1,1]), 12, 'Test 52');
test(minimumCost("abcdabcdabcd", ["ab","bc","cd","abcd"], [1,2,3,4]), 12, 'Test 53');
test(minimumCost("aaaaaaaaaa", ["a","aa","aaa","aaaa"], [5,3,2,1]), 5, 'Test 54');
test(minimumCost("abcdefghijk", ["abc","def","gh","ijk"], [10,20,30,40]), 100, 'Test 55');
test(minimumCost("abracadabra", ["abr","aca","dab","ra"], [10,20,30,5]), 65, 'Test 56');
test(minimumCost("abcdefghij", ["ab","cde","fgh","ij"], [2,3,4,1]), 10, 'Test 57');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], [10,20,30,40,50,60,70,80,90]), 450, 'Test 58');
test(minimumCost("xyzabc", ["xy","zabc","xyz","ab","c"], [5,10,3,7,2]), 12, 'Test 59');
test(minimumCost("aabbccddeeff", ["aabb", "ccdd", "eeff", "abcd"], [10, 15, 20, 25]), 45, 'Test 60');
test(minimumCost("zzzzzzzzzzz", ["zz","zzz","zzzz"], [2,5,7]), 13, 'Test 61');
test(minimumCost("zzzzzzzzzzzzzzzzzzzz", ["z","zz","zzz","zzzz"], [1,2,3,4]), 20, 'Test 62');
test(minimumCost("xyxzyzyxzyzyxzyx", ["xyx","zyz","yx","xyz"], [7,6,5,4]), -1, 'Test 63');
test(minimumCost("aaaaabbbbb", ["a","b","ab","ba"], [1,2,3,4]), 15, 'Test 64');
test(minimumCost("mississippi", ["mis","issi","ppi","ss","ippi","s","i","m"], [1,3,5,1,2,2,1,1]), 7, 'Test 65');
test(minimumCost("hellohello", ["he","llo","ell","o"], [2,3,1,4]), 10, 'Test 66');
test(minimumCost("pppppppppp", ["p","pp","ppp"], [10,5,3]), 16, 'Test 67');
test(minimumCost("zzzzzzzzzzzzzzzzzzzz", ["zzz","zz","z"], [10,5,1]), 20, 'Test 68');
test(minimumCost("abcdefghij", ["a","b","c","d","e","f","g","h","i","j"], [10,20,30,40,50,60,70,80,90,100]), 550, 'Test 69');
test(minimumCost("zzzzzzzzzz", ["zz","zzz","z"], [1,2,10]), 5, 'Test 70');
test(minimumCost("aabbccddeeff", ["aa","bb","cc","dd","ee","ff"], [1,2,1,2,1,2]), 9, 'Test 71');
test(minimumCost("abcdefghi", ["a","b","c","d","e","f","g","h","i"], [1,2,3,4,5,6,7,8,9]), 45, 'Test 72');
test(minimumCost("aabbccddeeff", ["aa","bb","cc","dd","ee","ff","abcd","ef","fedc"], [1,2,3,4,5,6,7,8,9]), 21, 'Test 73');
test(minimumCost("zzzzzzzzzzzzzzzzzzzz", ["z","zz","zzz"], [1,10,100]), 20, 'Test 74');
test(minimumCost("mnopqr", ["m","no","pqr","op","qr","mnop","nopqr"], [1,2,3,4,5,6,7]), 6, 'Test 75');
test(minimumCost("hellohellos", ["he","llo","hel","los","o","s"], [1,2,3,4,5,6]), 10, 'Test 76');
test(minimumCost("mamamamama", ["ma","am"], [2,1]), 10, 'Test 77');
test(minimumCost("abcdabcdabcd", ["abcd", "abc", "bca", "cab", "dab"], [10, 7, 8, 9, 6]), 30, 'Test 78');
test(minimumCost("abcdabcdabcd", ["abcd","abc","cd","d","a","bc"], [10,20,30,40,50,60]), 30, 'Test 79');
test(minimumCost("aaaabbbb", ["a","aa","aaa","aaaa"], [4,3,2,1]), -1, 'Test 80');
test(minimumCost("abcdefghijklmnop", ["a","bc","def","ghij","klmno","p"], [1,2,3,4,5,6]), 21, 'Test 81');
test(minimumCost("banana", ["ba","an","na","ana","nana","banana"], [1,2,3,4,5,6]), 6, 'Test 82');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], [3,5,4,7,6,8,9,2,1]), 45, 'Test 83');
test(minimumCost("mnopqr", ["mno", "pq", "r", "mnopq", "qrs"], [10, 7, 5, 20, 8]), 22, 'Test 84');
test(minimumCost("aaabbbcccddd", ["aaa", "bbb", "ccc", "ddd", "ab", "bc", "cd"], [5, 6, 7, 8, 3, 4, 5]), 26, 'Test 85');
test(minimumCost("mississippi", ["mis","is","sip","i","p"], [1,2,3,4,5]), -1, 'Test 86');
test(minimumCost("abcdefg", ["abc", "def", "g", "abcd", "efg"], [10, 20, 5, 15, 25]), 35, 'Test 87');
test(minimumCost("aabbccddeeff", ["aab","bcc","dde","eff"], [6,7,8,9]), 30, 'Test 88');
test(minimumCost("aaabbbcccddd", ["aaa","bbb","ccc","ddd","aab","bcc","dde"], [10,11,12,13,9,8,7]), 46, 'Test 89');
test(minimumCost("abababababab", ["aba","bab","ab"], [3,4,1]), 6, 'Test 90');
test(minimumCost("optimization", ["opt","im","iza","tion"], [10,20,30,40]), 100, 'Test 91');
test(minimumCost("xyzxyzxyzxyz", ["xyz","xy","zxyz","zxy"], [7,5,10,8]), 28, 'Test 92');
test(minimumCost("ababababab", ["aba", "bab", "ab", "ba"], [7, 8, 2, 3]), 10, 'Test 93');
test(minimumCost("qwertyuiop", ["qwe","rty","ui","op"], [7,8,5,6]), 26, 'Test 94');
test(minimumCost("aaaabbbbccccdddd", ["aaaa","bbbb","cccc","dddd","abc","bcd","cde","def"], [4,5,6,7,8,9,10,11]), 22, 'Test 95');
test(minimumCost("abcabcabcabc", ["abc","bc","ca"], [1,2,3]), 4, 'Test 96');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], [10,15,20,25,30,35,40,45,50]), 270, 'Test 97');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], [5,5,5,5,5,5,5,5,5]), 45, 'Test 98');
test(minimumCost("xyxyxyxyxy", ["xy","yx","x","y"], [4,5,1,2]), 15, 'Test 99');
test(minimumCost("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 351, 'Test 100');
test(minimumCost("abcdefghij", ["abc", "def", "ghi", "j", "abcdefgh"], [12, 15, 20, 5, 100]), 52, 'Test 101');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], [1,2,3,4,5,6,7,8,9]), 45, 'Test 102');
test(minimumCost("ababababab", ["ab","aba","bab","aab"], [100,200,300,400]), 500, 'Test 103');
test(minimumCost("mississippi", ["i","s","p","is","pi","sis","issi"], [1,2,3,4,5,6,7]), -1, 'Test 104');
test(minimumCost("ababababab", ["ab","aba","bab","ba"], [1,3,2,4]), 5, 'Test 105');
test(minimumCost("aabbccddeeff", ["ab","bc","cd","de","ef","fe","dc","cb","ba","aa","bb","cc","dd","ee","ff"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 75, 'Test 106');
test(minimumCost("lmnopqrstu", ["lmn","opq","rst","u"], [1,2,3,4]), 10, 'Test 107');
test(minimumCost("aabbccddeeffgghhiijj", ["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj"], [1,2,3,4,5,6,7,8,9,10]), 55, 'Test 108');
test(minimumCost("ababababab", ["aba","bab","ab","ba"], [4,5,2,3]), 10, 'Test 109');
test(minimumCost("xyxxyxyxyx", ["xy","xxy","xyx","yxy"], [5,7,6,8]), 22, 'Test 110');
test(minimumCost("mississippi", ["mis","issi","ppi","i","pi","miss","ippi"], [3,4,2,1,5,6,7]), 12, 'Test 111');
test(minimumCost("aaaaaaaabaaaaaaa", ["a","aa","aaa","aaaa","aaaaa"], [1,3,5,7,9]), -1, 'Test 112');
test(minimumCost("abcdefghijklmnop", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], [10,20,30,40,50,60,70,80,90]), -1, 'Test 113');
test(minimumCost("ababababab", ["ab","aba","bab","ba","a","b"], [2,3,4,1,5,6]), 9, 'Test 114');
test(minimumCost("abcdefgabcdefg", ["abc","def","gh","abcdef","gh","abcdefg"], [10,20,30,5,50,60]), 120, 'Test 115');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), -1, 'Test 116');
test(minimumCost("abcabcabcabcabcabc", ["abc","abca","bcab","cabc","bca"], [1,2,3,4,5]), 6, 'Test 117');
test(minimumCost("abacabadabacaba", ["aba","cab","abc","bac"], [3,5,2,4]), -1, 'Test 118');
test(minimumCost("qwertyqwerty", ["qw","er","ty","rt","yt"], [1,2,3,4,5]), 12, 'Test 119');
test(minimumCost("abcabcabcabcabc", ["ab","bc","ca","abc"], [2,1,5,3]), 15, 'Test 120');
test(minimumCost("abcabcabcabcabcabc", ["abc","abcabc","abcabcabc","a","b","c"], [10,20,30,1,2,3]), 36, 'Test 121');
test(minimumCost("qwertyuiopasdfghjklzxcvbnm", ["qwerty","uiop","asdf","ghjk","lzx","cvbn","m","qwer","tyui","opas","dfgh","jklz","xcvb","bnm"], [12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 105, 'Test 122');
test(minimumCost("abacabadabacaba", ["aba","abac","abacaba","abacabad","abacabadaba"], [5,10,15,20,25]), 35, 'Test 123');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

