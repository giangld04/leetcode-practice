// Test: 960. Delete Columns To Make Sorted Iii
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { minDeletionSize } = require("./solution");

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

console.log("\n960. Delete Columns To Make Sorted Iii\n");

test(minDeletionSize(["zyx","zyx","zyx"]), 2, 'Test 1');
test(minDeletionSize(["rrjk","furt","guzm"]), 2, 'Test 2');
test(minDeletionSize(["axx","ggs","zzz"]), 0, 'Test 3');
test(minDeletionSize(["ghi","def","abc"]), 0, 'Test 4');
test(minDeletionSize(["aaa","bbb","ccc"]), 0, 'Test 5');
test(minDeletionSize(["abc","bcd","cde"]), 0, 'Test 6');
test(minDeletionSize(["abc","abc","abc"]), 0, 'Test 7');
test(minDeletionSize(["a","b","c","d"]), 0, 'Test 8');
test(minDeletionSize(["abcdef","uvwxyz"]), 0, 'Test 9');
test(minDeletionSize(["zzz","aaa","zzz"]), 0, 'Test 10');
test(minDeletionSize(["zyx","wvu","tsr"]), 2, 'Test 11');
test(minDeletionSize(["edcba"]), 4, 'Test 12');
test(minDeletionSize(["abcd","abdc","acdb"]), 1, 'Test 13');
test(minDeletionSize(["abcd","dbca","adcb","cbad"]), 3, 'Test 14');
test(minDeletionSize(["babca","bbazb"]), 3, 'Test 15');
test(minDeletionSize(["a","b","c"]), 0, 'Test 16');
test(minDeletionSize(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd"]), 2, 'Test 17');
test(minDeletionSize(["abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij"]), 0, 'Test 18');
test(minDeletionSize(["fedcb", "edcba", "dcbae", "cbade", "baced", "acbed"]), 4, 'Test 19');
test(minDeletionSize(["zyxwvutsrqponmlkjihgfedcba", "zyxwvutsrqponmlkjihgfedcba", "zyxwvutsrqponmlkjihgfedcba"]), 25, 'Test 20');
test(minDeletionSize(["abcd", "adbc", "bacd", "bdac"]), 2, 'Test 21');
test(minDeletionSize(["abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij"]), 0, 'Test 22');
test(minDeletionSize(["abacabad", "babacaba", "cacabada", "dacabada"]), 5, 'Test 23');
test(minDeletionSize(["abcdabcd","dcbaabcd","abcdabdc","abdcabcd","abcdcdab","cdabcdab","abcdabcd","cdababcd","abcdcdab","dcabcdab"]), 6, 'Test 24');
test(minDeletionSize(["abcdefgh", "hgfedcba", "abcdefgh", "hgfedcba", "abcdefgh"]), 7, 'Test 25');
test(minDeletionSize(["leetcode","leetcoed","leetcdeo","leetcodeo","leetcodeo","leetcodeo"]), 5, 'Test 26');
test(minDeletionSize(["zyx","yxz","xyz"]), 2, 'Test 27');
test(minDeletionSize(["aabbaa","abcabc","acbacb","bacbac","bbacab"]), 4, 'Test 28');
test(minDeletionSize(["zzz", "yyy", "xxx", "www", "vvv", "uuu"]), 0, 'Test 29');
test(minDeletionSize(["aabbcc","bbccdd","ccddeeff","ddeeffgg","eeffgghh","ffgghhiijj","gghhiijjkk","hhiijjkkll","iijjkkllmm","jjkkllmmnn","kkllmmnnoo","llmmnnoopq","mmnnoopqrs","nnoopqrstu","noopqrstuv","oopqrstuvw","opqrstuvwx","pqrstuvwxy","qrstuvwx","rstuvwx","stuvwx","tuvwxy","uvwxy","vwxy","wxy","xy","y"]), Error: string index out of range, 'Test 30');
test(minDeletionSize(["abcdefgh","bcadegfh","cgdbefha","dgfbceha","egfdcbha","fgecadhb"]), 5, 'Test 31');
test(minDeletionSize(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "abcdefghijklnmopqrstuvwxyz"]), 25, 'Test 32');
test(minDeletionSize(["abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh"]), 0, 'Test 33');
test(minDeletionSize(["qwert", "qwerr", "qwrer", "qwer", "qwe", "qw", "q"]), Error: string index out of range, 'Test 34');
test(minDeletionSize(["zabc", "zcad", "zdba", "zeac", "zfcd", "zgda", "zhec", "zida", "zjea", "zkcf"]), 3, 'Test 35');
test(minDeletionSize(["abcd", "bcde", "cdef", "defg", "efgh", "fghi", "ghij", "hijk", "ijkl", "jklm"]), 0, 'Test 36');
test(minDeletionSize(["azazaz","bababa","cacaca","dadada","eaeaea"]), 3, 'Test 37');
test(minDeletionSize(["abcdefg", "bcefgij", "acdfhij"]), 0, 'Test 38');
test(minDeletionSize(["abcd", "abdc", "acdb", "cadb", "dabc"]), 2, 'Test 39');
test(minDeletionSize(["xyz","zyx","wvu","tsr","qpo","nml","kji","hgf","edc","baa"]), 2, 'Test 40');
test(minDeletionSize(["aeg", "bdh", "cfi", "egj", "fhk", "gjl"]), 0, 'Test 41');
test(minDeletionSize(["qrst","mnop","ijkl","efgh","abcd","mnop","qrst","efgh","ijkl","abcd","mnop","qrst","efgh","ijkl","abcd","mnop","qrst","efgh","ijkl","abcd"]), 0, 'Test 42');
test(minDeletionSize(["zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz"]), 0, 'Test 43');
test(minDeletionSize(["zzzzzzzz","zzzzzzzy","zzzzzzzx","zzzzzzyx","zzzzzyxy","zzzzyxxy","zzzyxxyx","zzyxxyxy"]), 6, 'Test 44');
test(minDeletionSize(["abcdefghij", "abcdefghik", "abcdefghij", "abcdefghim", "abcdefghin"]), 0, 'Test 45');
test(minDeletionSize(["aabbcc", "bbccaa", "ccaabb", "aabbbc"]), 4, 'Test 46');
test(minDeletionSize(["abcdefg", "bceghik", "acegikm", "adegimn"]), 0, 'Test 47');
test(minDeletionSize(["qwertyuiop", "asdfghjklz", "zxcvbnmqwe", "qwertyuiop", "asdfghjklz"]), 7, 'Test 48');
test(minDeletionSize(["qrst","rstu","stuv","tuvw","uvwx"]), 0, 'Test 49');
test(minDeletionSize(["aabbccdd", "bbaaccee", "ccaabbee", "ddeebbaa", "eeccbbdd"]), 6, 'Test 50');
test(minDeletionSize(["zyxwvutsrqponmlkjihgfedcba","zyxwvutsrqponmlkjihgfedcba","zyxwvutsrqponmlkjihgfedcba"]), 25, 'Test 51');
test(minDeletionSize(["zzzz", "zzzz", "zzzz", "zzzz", "zzzz", "zzzz", "zzzz"]), 0, 'Test 52');
test(minDeletionSize(["xyzabc","yzabcd","zabcde","abcde","bcdef","cdefg","defgh","efghi","fghij"]), Error: string index out of range, 'Test 53');
test(minDeletionSize(["qwerty", "wertyq", "ertyqw", "rtyqwe", "tyqwer", "yqwret"]), 5, 'Test 54');
test(minDeletionSize(["cba","bca","bac","acb"]), 2, 'Test 55');
test(minDeletionSize(["abcdefg", "bcefg", "bdfg", "beg", "bf", "bg", "b"]), Error: string index out of range, 'Test 56');
test(minDeletionSize(["aebf","accf","bdgf","cddg","defh","edgh","feih","gjih","hkji"]), 2, 'Test 57');
test(minDeletionSize(["aabbcc","bbaacc","ccabba","aababc","bbacab","abcabc","cbaabc","abacba","bacabc","cababc"]), 4, 'Test 58');
test(minDeletionSize(["zyxwvu","utsrqpon","mlkjihgf","edcba"]), 5, 'Test 59');
test(minDeletionSize(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 0, 'Test 60');
test(minDeletionSize(["abcde","fghij","klmno","pqrst","uvwxy"]), 0, 'Test 61');
test(minDeletionSize(["cba", "daf", "gee"]), 2, 'Test 62');
test(minDeletionSize(["abc","bac","cab","bca","cab","cba"]), 2, 'Test 63');
test(minDeletionSize(["leetcode", "leetcede", "leotcede"]), 5, 'Test 64');
test(minDeletionSize(["zyxwvutsrqponmlkjihgfedcba","zyxwvutsrqponmlkjihgfedcba"]), 25, 'Test 65');
test(minDeletionSize(["zzzz","zzzz","zzzz","zzzz","zzzz"]), 0, 'Test 66');
test(minDeletionSize(["abcd","adcb","bacd","bdac","cabd","cdab","dcba","dcab","dabc","dacb"]), 3, 'Test 67');
test(minDeletionSize(["zzzz","zzyz","zyyz","yzzz","yzyz","yyyz","yyyx","yyxx","yxxx","xxxx"]), 3, 'Test 68');
test(minDeletionSize(["abcd","efgh","ijkl","mnop","qrst","uvwx","yzab"]), 2, 'Test 69');
test(minDeletionSize(["aabbcc","bbaacc","bbacac","aabcbc","cababc","bcbacc"]), 3, 'Test 70');
test(minDeletionSize(["aaa", "bbb", "ccc", "ddd", "eee", "fff"]), 0, 'Test 71');
test(minDeletionSize(["xyz","zyx","yxz","xzy","yzx","zxy"]), 2, 'Test 72');
test(minDeletionSize(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuvwxyzabcdefghijkl","fedcbazyxwvutsrqponmlkjihg"]), 25, 'Test 73');
test(minDeletionSize(["mnopqr","opqrst","pqrstu","qrstuv"]), 0, 'Test 74');
test(minDeletionSize(["abcdef","bcdefg","cdefgh","defghi","efghij","fghijk","ghijkl","hijklm","ijklmn"]), 0, 'Test 75');
test(minDeletionSize(["abcd", "dcba", "abcd", "dcba"]), 3, 'Test 76');
test(minDeletionSize(["aabbcc", "bbccaa", "ccaabb", "aabbbc", "bbccaa", "ccaabb", "aabbbc"]), 4, 'Test 77');
test(minDeletionSize(["abcdefg","gfedcba","bacdefg","ihgfedc","jklmnop"]), 6, 'Test 78');
test(minDeletionSize(["pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), 0, 'Test 79');
test(minDeletionSize(["qpwoeiruty","qpwoeiruty","qpwoeiruty"]), 5, 'Test 80');
test(minDeletionSize(["mnop","qrst","uvwx","yzab","cdef","ghij","klmn","opqr","stuv","wxyz"]), 2, 'Test 81');
test(minDeletionSize(["abcd","bcde","cdef","defg"]), 0, 'Test 82');
test(minDeletionSize(["aabbcc","abbccc","abcccc","bcccdd","cccddd","ccdddd","cddddd","dddddd"]), 0, 'Test 83');
test(minDeletionSize(["aabbccddeeff", "abcdefabcdef", "fedcbafedcba", "abcdefabcdef", "aabbccddeeff"]), 10, 'Test 84');
test(minDeletionSize(["abcdefghij","jihgfedcba","abcdefghij","jihgfedcba","abcdefghij","jihgfedcba"]), 9, 'Test 85');
test(minDeletionSize(["zyxwvutsrqponmlkjihgfedcba","zyxwvutsrqponmlkjihgfedcba","zyxwvutsrqponmlkjihgfedcba","zyxwvutsrqponmlkjihgfedcba","zyxwvutsrqponmlkjihgfedcba"]), 25, 'Test 86');
test(minDeletionSize(["abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno","mnop","nopq","opqr","pqrs","qrst","rstu","stuv","tuvw","uvwx","vwxy","wxyz"]), 0, 'Test 87');
test(minDeletionSize(["aabbcc","bbccdd","ccddeeff","ddeeffgg"]), 0, 'Test 88');
test(minDeletionSize(["abcdabcd","bcdbcdcd","cdcdcdcd","dcdcdcdc","efefefef","fefefefe","gfefefef","hfhfhfhf","ihihihih"]), 5, 'Test 89');
test(minDeletionSize(["xyzuvw","wvuxyz","uvwxyx","vxyzwu","uzwvxy","zwxyuv","yxwvuz","zyxuvw","wvuzxy","uvwxyx","vxyzwu","uzwvxy","zwxyuv","yxwvuz","zyxuvw","wvuzxy","uvwxyx","vxyzwu","uzwvxy","zwxyuv","yxwvuz","zyxuvw"]), 5, 'Test 90');
test(minDeletionSize(["abcde", "bcdef", "cdefg", "defgh", "efghi", "fghij", "ghijk", "hijkl", "ijklm", "jklmn"]), 0, 'Test 91');
test(minDeletionSize(["zzzzzzzzzz", "zzzzzzzzzz", "zzzzzzzzzz", "zzzzzzzzzz", "zzzzzzzzzz"]), 0, 'Test 92');
test(minDeletionSize(["ba","ab","ba","ab","ba","ab"]), 1, 'Test 93');
test(minDeletionSize(["zab","bac","cab","dcb"]), 2, 'Test 94');
test(minDeletionSize(["abcde", "edcba", "fghij", "jihgf", "klmno", "onmlk"]), 4, 'Test 95');
test(minDeletionSize(["abcdef","fedcba","dcbaef","bacfed","efabcd","fedcba"]), 5, 'Test 96');
test(minDeletionSize(["aaaaaaaaaa","aabbaabbcc","aabbaabbcc","aabbaabbcc","aabbaabbcc","aabbaabbcc"]), 2, 'Test 97');
test(minDeletionSize(["abcd","dcba","abcd","dcba","abcd"]), 3, 'Test 98');
test(minDeletionSize(["abcdef","bcdefg","cdefgh","defghi","efghij","fghijk","ghijkl","hijklm","ijklmn","jklmno","klmnop","lmnopq","mnopqr","nopqrs","opqrst","pqrstu","qrstuv","rstuvw","stuvwx","tuvwxy","uvwxy","vwxy","wxy","xy","y"]), Error: string index out of range, 'Test 99');
test(minDeletionSize(["aaaaa","bbbbb","ccccc","ddddd","eeeee","fffff","ggggg","hhhhh","iiiii","jjjjj"]), 0, 'Test 100');
test(minDeletionSize(["aabb", "bbaa", "abab", "baba", "abba", "baab"]), 3, 'Test 101');
test(minDeletionSize(["abcd","abdc","acbd","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba"]), 3, 'Test 102');
test(minDeletionSize(["abcde","edcba","fghij","jihgf","klmno","onmlk","pqrst","tsrqp","uvwxy","yxwvu","z","z","z","z","z"]), 4, 'Test 103');
test(minDeletionSize(["abcd","efgh","ijkl","mnop"]), 0, 'Test 104');
test(minDeletionSize(["abcdefg", "gfedcba", "hijklmn", "nmolkji", "opqrstu", "utsrqpo"]), 6, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
