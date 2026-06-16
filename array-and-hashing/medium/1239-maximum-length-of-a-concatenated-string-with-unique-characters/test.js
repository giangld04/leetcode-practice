// Test: 1239. Maximum Length Of A Concatenated String With Unique Characters
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { maxLength } = require("./solution");

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

console.log("\n1239. Maximum Length Of A Concatenated String With Unique Characters\n");

test(maxLength(["abcd","abef","cdgh","cdef"]), 8, 'Test 1');
test(maxLength(["un","iq","ue"]), 4, 'Test 2');
test(maxLength(["abcdefghijklmnopqrstuvwxyz"]), 26, 'Test 3');
test(maxLength(["unique","strings","with","no","common","characters"]), 6, 'Test 4');
test(maxLength(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"]), 16, 'Test 5');
test(maxLength(["abcd","efgh","ijkl","mnop","qrst","uvwx","yz"]), 26, 'Test 6');
test(maxLength(["ab","cd","ef","gh","ij","kl","mn","op","qr","st","uv","wx","yz"]), 26, 'Test 7');
test(maxLength(["zzzz","zzyy","xxzz","xxyy","abcd"]), 4, 'Test 8');
test(maxLength(["aaaa","bbbb","cccc","dddd","eeee","ffff","gggg","hhhh","iiii","jjjj"]), 0, 'Test 9');
test(maxLength(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]), 26, 'Test 10');
test(maxLength(["xyy","zmk"]), 3, 'Test 11');
test(maxLength(["a","ab","abc","abcd","abcde"]), 5, 'Test 12');
test(maxLength(["abc","de","fgh","ij","klm","nop","qrs","tuv","wxy","z"]), 26, 'Test 13');
test(maxLength(["a","b","c"]), 3, 'Test 14');
test(maxLength(["abcd","aabbccdd","abcde","mnopqr","stuvwx","yz"]), 19, 'Test 15');
test(maxLength(["aabbcc","ddeeff","gghhiijj"]), 0, 'Test 16');
test(maxLength(["cha","r","act","ers"]), 6, 'Test 17');
test(maxLength(["aabbcc","ddeeff","gghhii","jklmno","pqqrst","uvwxyz"]), 12, 'Test 18');
test(maxLength(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"]), 0, 'Test 19');
test(maxLength(["abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yzab", "cdef", "ghij", "klmn", "opqr", "stuv", "wxyz", "abcd", "efgh"]), 24, 'Test 20');
test(maxLength(["abcdefghijk", "lmnopqrst", "uvwxyzabc", "defghijkl", "mnopqrstu", "vwxyzabcd", "efghijklm", "nopqrstuv", "wxyzabcde", "fghijklmn", "opqrstuvw", "xyzabcdefg", "ghijklmno", "pqrstuvwx", "yzabcdefgh", "hijklmnop", "qrstuvwxy", "zabcdefghij"]), 20, 'Test 21');
test(maxLength(["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]), 26, 'Test 22');
test(maxLength(["xyzz","abxy","mnop","qrst","uvwz","mnop","qrst","uvwz","mnop","qrst","uvwz","mnop","qrst","uvwz","mnop","qrst"]), 16, 'Test 23');
test(maxLength(["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm","nnn","ooo","ppp"]), 0, 'Test 24');
test(maxLength(["ab", "bc", "cd", "de", "ef", "fg", "gh", "hi", "ij", "jk", "kl", "lm", "mn", "no", "op", "pq", "qr", "rs", "st", "tu", "uv", "vw", "wx", "xy", "yz", "za", "bz", "cy", "dx", "ew", "fv", "gu", "ht", "is", "jr", "kq", "lp", "mo", "np", "oq", "pr", "qs", "rt", "su", "tv", "uw", "vx", "wy", "xz"]), 26, 'Test 25');
test(maxLength(["unique","strings","with","distinct","chars","in","each","subsequence"]), 7, 'Test 26');
test(maxLength(["abcd","efgh","ijkl","mnop","qrst","uvwx","yzab","cdef","ghij","klmn","opqr","stuv","wxyz","mnop","qrst","uvwxy"]), 25, 'Test 27');
test(maxLength(["xyz", "uvw", "tuv", "stu", "rst", "qrs", "pqr", "opq", "nop", "mno", "lmn", "klm", "jkl", "ikl", "ihg", "fgh"]), 18, 'Test 28');
test(maxLength(["xyz", "uvw", "tuv", "stu", "rst", "qrs", "pqr", "opq", "nop", "mno", "lmo", "kln", "jkl", "ihg", "fgh", "efg", "def", "cde", "bcd", "abc"]), 24, 'Test 29');
test(maxLength(["aabb","ccdd","eeff","gghh","iijj","kklm","nopq","rstu","vwxy","zz"]), 12, 'Test 30');
test(maxLength(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd","efghij","klmnop","qrstuv","wxyza","bcdefg","hijklm","nopqrs","tuvwxy","zabcde"]), 24, 'Test 31');
test(maxLength(["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz", "abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]), 26, 'Test 32');
test(maxLength(["abcdexyz","mnop","qrstuvw","zabcd","ef","ghijkl","mnopqr","stuv","wxyz","abcdefghij","klmnopqr","stuvwxyz"]), 26, 'Test 33');
test(maxLength(["abcdefgh", "ijklmnop", "qrstuvwxyz", "abcdefgh", "ijklmnop", "qrstuvwxyz"]), 26, 'Test 34');
test(maxLength(["abcd", "defg", "hijk", "lmno", "pqrs", "tuvw", "xyza"]), 24, 'Test 35');
test(maxLength(["xyz","xy","xz","yz","x","y","z","abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","ab","ac","ad","ae","af","ag","ah","ai","aj","ak","al","am","an","ao","ap","aq","ar","as","at","au","av","aw","ax","ay","az"]), 26, 'Test 36');
test(maxLength(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","a","b","c","d"]), 26, 'Test 37');
test(maxLength(["abcd","efgh","ijkl","mnop","qrst","uvwx","yzab","cded","efgi","hjkl","mnop","qrst","uvwz","abcd"]), 24, 'Test 38');
test(maxLength(["abcdef","ghijkl","mnopqr","stuvwx","yz","abcdefghijklmnopqrstuvwxyz","abcdef","ghijkl","mnopqr","stuvwx","yz"]), 26, 'Test 39');
test(maxLength(["abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi"]), 9, 'Test 40');
test(maxLength(["abcde", "fghij", "klmno", "pqrst", "uvwxy", "zabcd", "efghi", "jklmn", "opqrs", "tuvwx", "yzabc", "defgh"]), 25, 'Test 41');
test(maxLength(["abcd","efgh","ijkl","mnop","qrst","uvwx","yzab"]), 24, 'Test 42');
test(maxLength(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghij","klmnopqr","stuvwxyz"]), 26, 'Test 43');
test(maxLength(["abcd","efgh","ijkl","mnop","qrst","uvw","xyz","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), Execution timed out, 'Test 44');
test(maxLength(["aaaaa","bbbbb","ccccc","ddddd","eeeee","fffff"]), 0, 'Test 45');
test(maxLength(["xyz","abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","ab","cd","ef","gh","ij","kl","mn","op","qr","st","uv","wx"]), 26, 'Test 46');
test(maxLength(["zyxwvutsrqpomnlkjihgfedcba","abcdefghijklmnopqrstuvwxyz","mnopqrstuvwxyza","bcdefghijklmnopqr","stuvwxyzabcde"]), 26, 'Test 47');
test(maxLength(["aaaaa","bbbbb","ccccc","ddddd","eeeee","ffffff","ggggg"]), 0, 'Test 48');
test(maxLength(["abcd", "def", "ghij", "klmno", "pqrst", "uvwxy", "z"]), 24, 'Test 49');
test(maxLength(["abcd","efgh","abcd","efgh","ijkl","mnop","ijkl","mnop","qrst","uvwx","qrst","uvwx","yz","yz","abcd"]), 26, 'Test 50');
test(maxLength(["aaaa","bbbb","cccc","dddd","eeee","ffff","gggg","hhhh"]), 0, 'Test 51');
test(maxLength(["abcd","abef","acgh","adei","afjk","aglm","ahno","aipq","arst","auvw","axyz"]), 4, 'Test 52');
test(maxLength(["abcdefgh", "ijklmnop", "qrstuvwxyz", "abcdefgh", "ijklmnop", "qrstuvwxyz", "abcdefgh", "ijklmnop", "qrstuvwxyz"]), 26, 'Test 53');
test(maxLength(["abcdef","ghijkl","mnopqr","stuvwx","yz","abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]), 26, 'Test 54');
test(maxLength(["abc","defgh","ijkl","mnopqr","stuvwx","yz","abcdefgh","ijklmnop","qrstuvwx","yzab","cdefghij","klmnopqr","stuvwx","yz","abcdef","ghijklmnop","qrstuvwx","yzab"]), 26, 'Test 55');
test(maxLength(["abcdefgh", "yzabcd", "efghij", "mnopqr", "stuvwx", "qrstuv", "wxyzab"]), 24, 'Test 56');
test(maxLength(["long", "strings", "with", "repeated", "characters", "are", "not", "allowed", "in", "this", "problem"]), 11, 'Test 57');
test(maxLength(["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z", "yz", "wxy", "vwx", "uwv", "tuv", "stu", "rst", "qrs", "pqr", "opq", "nop", "mno", "lmn", "kln", "jkl", "ihg", "fgh", "efg", "def", "cde", "bcd", "abc"]), 26, 'Test 58');
test(maxLength(["zyxwvutsrqponmlkjihgfedcba","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwxyz"]), 26, 'Test 59');
test(maxLength(["ab", "cd", "ef", "gh", "ij", "kl", "mn", "op", "qr", "st", "uv", "wx", "yz"]), 26, 'Test 60');
test(maxLength(["abcd","ab","cd","ef","gh","ij","kl","mn","op","qr","st","uv","wx","yz"]), 26, 'Test 61');
test(maxLength(["ab", "cd", "ef", "gh", "ij", "kl", "mn", "op", "qr", "st", "uv", "wx", "yz", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]), Execution timed out, 'Test 62');
test(maxLength(["abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yzab", "mnop", "qrst", "uvwx", "yzab", "mnop", "qrst", "uvwx", "yzab", "mnop", "qrst"]), 24, 'Test 63');
test(maxLength(["abcdefgh","ijklmnop","qrstuvwxyz","abcdefgh","ijklmnop","qrstuvwxyz"]), 26, 'Test 64');
test(maxLength(["abcdef","ghijkl","mnopqr","stuvwx","yz","abcdefghijklmnop","qrstuvwxyz","abcdefghij","klmnopqr","stuvwxyz","abcdefg","hijklmnop","qrstuvwxy","zabcdefghijk","lmnopqrstuvw","xyzabcdefghi","jklmnopqrstu","vwxyzabcdef","ghijklmnopqrstu","vwxyzabcdefghij","klmnopqrstuvwxyzabc"]), 26, 'Test 65');
test(maxLength(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]), 26, 'Test 66');
test(maxLength(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 26, 'Test 67');
test(maxLength(["unique","letters","only","here","now","this","that","these","those","other","another","either","neither","both","few","more","most","other","some","any","all","several","both"]), 11, 'Test 68');
test(maxLength(["abcde", "fghij", "klmno", "pqrst", "uvwxy", "zabcd", "efghi", "jklmn", "opqrs", "tuvwx", "yzabc"]), 25, 'Test 69');
test(maxLength(["abcdef", "ghijkl", "mnopqr", "stuvwx", "yzabcd", "efghij", "klmnop", "qrstuv", "wxyzab", "cdefgh", "ijklmn", "opqrst"]), 24, 'Test 70');
test(maxLength(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","abcde","fghij","klmno","pqrst","uvwxy","zabcd"]), 26, 'Test 71');
test(maxLength(["xyz","abcdef","ghijklm","nopqr","stuv","wxyz","mnop","qrstuv","xyzuvw","abcdefg"]), 26, 'Test 72');
test(maxLength(["aaaa", "bbbb", "cccc", "dddd", "eeee", "ffff", "gggg", "hhhh", "iiii", "jjjj", "kkkk", "llll", "mmmm", "nnnn", "oooo", "pppp"]), 0, 'Test 73');
test(maxLength(["aabbcc", "ddeeff", "gghhii", "jkkllm", "nnoopq", "rrsstt", "uuvvww", "xxyyzz"]), 0, 'Test 74');
test(maxLength(["abcdefghijklmnop", "qrstuvwxyz", "abcdefghijkl", "mnopqrstuv", "wxyzabcdef", "ghijklmnop", "qrstuvwxy", "zabcdefghij"]), 26, 'Test 75');
test(maxLength(["abcdefgh","ijklmnop","qrstuvwx","yzabcd","efghij","klmnopqr","stuvwxyz","abcdefg","hijklmnop","qrstuvwxy","zabcdef","ghijklmnopqr","vwxyzabcd","efghijklmno","pqrs","tuvwx","yz","abcd","ef","ghij","klm","nop","qrs","tuv","wxy","z"]), 26, 'Test 76');
test(maxLength(["aaaa", "bbbb", "cccc", "dddd", "eeee", "ffff", "gggg", "hhhh"]), 0, 'Test 77');
test(maxLength(["abcdefgh","ijklmnop","qrstuvwx","yzabcd","efghij","klmnop","qrstuv","wxyz","abc","def","ghi","jkl","mno","pqr","stu","vwxy","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y"]), Execution timed out, 'Test 78');
test(maxLength(["abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yzab"]), 24, 'Test 79');
test(maxLength(["abcd","efgh","ijkl","mnop","qrst","uvwx","yz","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), Execution timed out, 'Test 80');
test(maxLength(["abcdexyz","mnopqr","stuvwx","yzabcd","efghij","klmno","pqrst","uvwxy","zabcde","fghijk","lmnopq","rstuvw","xyzabc","defghi","jklmno","pqrstu","vwxyz"]), 26, 'Test 81');
test(maxLength(["ab","cd","ef","gh","ij","kl","mn","op","qr","st","uv","wx","yz","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), Execution timed out, 'Test 82');
test(maxLength(["zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"]), 26, 'Test 83');
test(maxLength(["unique", "chars", "only", "here", "subseq", "concat", "maximum", "length", "string", "concatenation"]), 9, 'Test 84');
test(maxLength(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa","mnopqrstuvwxyzmnopqrstuvwxyzmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd"]), 0, 'Test 85');
test(maxLength(["abcdef", "ghijkl", "mnopqr", "stuvwx", "yzabcd", "efghij", "klmno", "pqrstu", "vwxyz"]), 24, 'Test 86');
test(maxLength(["abcde","fghij","klmno","pqrst","uvwxy","zabcd","efghi","jklmn","opqrs","tuvwx","yzabc","defgh","ijklm","nopqr","stuvw","xyzab","cdefg","hijkl","mnopq","rstuv","wxyza","bcdef","ghijk","lmnop","qrstu","vwxyz"]), 25, 'Test 87');
test(maxLength(["abcdefgh","ijklmnop","qrstuvwx","yzabcdef","ghijklmn","opqrstuv","wxyzab","cdefghij","klmnopqr","stuvwxy"]), 24, 'Test 88');
test(maxLength(["abcdef", "ghijkl", "mnopqr", "stuvwx", "yzabcd", "efghij", "klmnop", "qrstuv"]), 24, 'Test 89');
test(maxLength(["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz", "abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yzab"]), 26, 'Test 90');
test(maxLength(["zyxwvutsrqponmlkjihgfedcba","qazwsxedcrfvtgbyhnujmiklop","plmoknijbuhvgtfrdyecwsxzqa","onmlkjihgfedcbazyxwvutsrqpxz"]), 26, 'Test 91');
test(maxLength(["unique", "chars", "only", "here", "are", "some", "strings", "with", "various", "lengths"]), 11, 'Test 92');
test(maxLength(["abcdefghij","klmnopqr","stuvwxyz","abc","def","ghi","jkl","mno","pqr","stu","vwxyz","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), Execution timed out, 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

