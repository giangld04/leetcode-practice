// Test: 3035. Maximum Palindromes After Operations
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { maxPalindromesAfterOperations } = require("./solution");

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

console.log("\n3035. Maximum Palindromes After Operations\n");

test(maxPalindromesAfterOperations(["abac","deed","civic","rotor"]), 3, 'Test 1');
test(maxPalindromesAfterOperations(["aabbcc","ddeeff","gghhiijj","kklmmoopp"]), 4, 'Test 2');
test(maxPalindromesAfterOperations(["aa","bb","cc","dd","ee"]), 5, 'Test 3');
test(maxPalindromesAfterOperations(["noon","level","deified","civic","rotor"]), 5, 'Test 4');
test(maxPalindromesAfterOperations(["aaaa","bbbb","cccc"]), 3, 'Test 5');
test(maxPalindromesAfterOperations(["abac","decd","efef","ghgh"]), 3, 'Test 6');
test(maxPalindromesAfterOperations(["abcde","fghij","klmno"]), 0, 'Test 7');
test(maxPalindromesAfterOperations(["a","b","c","d","e"]), 5, 'Test 8');
test(maxPalindromesAfterOperations(["abbb","ba","aa"]), 3, 'Test 9');
test(maxPalindromesAfterOperations(["race","car","level"]), 3, 'Test 10');
test(maxPalindromesAfterOperations(["race","car","level","deified"]), 4, 'Test 11');
test(maxPalindromesAfterOperations(["abc","ab"]), 2, 'Test 12');
test(maxPalindromesAfterOperations(["aaa","bbb","ccc","ddd"]), 4, 'Test 13');
test(maxPalindromesAfterOperations(["hello","world","python","programming","code"]), 4, 'Test 14');
test(maxPalindromesAfterOperations(["abac","deed","racecar","refer","madam"]), 4, 'Test 15');
test(maxPalindromesAfterOperations(["abcde","fghij","klmno","pqrst"]), 0, 'Test 16');
test(maxPalindromesAfterOperations(["noon","civic","rotor","stats"]), 4, 'Test 17');
test(maxPalindromesAfterOperations(["a","b","c","d","e","f","g","h","i","j"]), 10, 'Test 18');
test(maxPalindromesAfterOperations(["deified","civic","rotor","redder"]), 4, 'Test 19');
test(maxPalindromesAfterOperations(["hello","world","python","programming"]), 3, 'Test 20');
test(maxPalindromesAfterOperations(["noon","civic","rotor","refer"]), 4, 'Test 21');
test(maxPalindromesAfterOperations(["aabbcc","bbaacc","ccabba","aabbbc","bbcaac"]), 4, 'Test 22');
test(maxPalindromesAfterOperations(["xyz","zyx","abc","cba","aaa","bbb"]), 6, 'Test 23');
test(maxPalindromesAfterOperations(["abcd","dcba","efgh","hgf","i","jklm","mlkj"]), 7, 'Test 24');
test(maxPalindromesAfterOperations(["ab","cd","ef","gh","ij"]), 0, 'Test 25');
test(maxPalindromesAfterOperations(["cd","ef","a"]), 1, 'Test 26');
test(maxPalindromesAfterOperations(["xxyyzz","yzyzyz","xzyzxz","zyzxzy","zzzyyy","yyzzzy","zzzzyy","xxxyyy","yyxxzz","zzxyyx"]), 9, 'Test 27');
test(maxPalindromesAfterOperations(["aabbccddeeff","abcdef","ghijkl","mnopqr","stuvwx","yz","abcdefgh","ijklmnop","qrstuv","wxyz"]), 10, 'Test 28');
test(maxPalindromesAfterOperations(["xyz","zyx","yzx","zxy","yxz","xzy","abc","cba","bac","bca","cab","acb"]), 12, 'Test 29');
test(maxPalindromesAfterOperations(["abcdefghijk","zyxwvutsrqp","mnopqrstuvw","abcdefghij","zyxwvutsr","mnopqrstu","abcdefgh","zyxwvuts","mnopqrs","abcdefg","zyxwvut","mnopqr","abcdef","zyxwvu","mnopq","abcde","zyxwv","mnop","abcd","zyxw","mno","abc","zyx","mn","ab","zy","m","a","z","y","x","w","v","u","t","s","r","q","p","o","n","l","k","j","i","h","g","f","e","d","c","b"]), 52, 'Test 30');
test(maxPalindromesAfterOperations(["racecar","madam","refer","level","deified","rotor","reviled","deed","civic","rotor","redder","repaper","rotor","deed","civic","level"]), 16, 'Test 31');
test(maxPalindromesAfterOperations(["noon","civic","rotor","stats","level","deified","reviled","refer","abcba","babcb","ababa","abacaba"]), 12, 'Test 32');
test(maxPalindromesAfterOperations(["aabbaa","bbaabb","ababab","bababa","aabbba","bbaabb","ababab","bababa","aabbaa","bbaabb"]), 9, 'Test 33');
test(maxPalindromesAfterOperations(["abcdefghij","jihgfedcba","abcdefgh","hgfedcba","abcdef","fedcba","abc","cba","ab","ba","a","b","c","d","e","f","g","h","i","j"]), 20, 'Test 34');
test(maxPalindromesAfterOperations(["aabbcc","ddeeff","gghhii","jklmno","pqrsut","vwxyzv"]), 3, 'Test 35');
test(maxPalindromesAfterOperations(["abacaxa","banana","civic","rotor","stats","level"]), 6, 'Test 36');
test(maxPalindromesAfterOperations(["abcdefgh","hgfedcba","abcdefg","gfedcba","abcde","edcba","abcd","dcba","abc","cba","ab","ba","a","b"]), 14, 'Test 37');
test(maxPalindromesAfterOperations(["aaabbbccc","dddeeefff","ggghhhiii","jjjkkklll","mmmnnnooo","pppqqqrrr","ssstttuuu","vvvwwwxxx","yyyzzzwww","xxxyyyzzz"]), 8, 'Test 38');
test(maxPalindromesAfterOperations(["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm","nnn","ooo","ppp","qqq","rrr","sss","ttt","uuu","vvv","www","xxx","yyy","zzz"]), 26, 'Test 39');
test(maxPalindromesAfterOperations(["aabbcc","bbaacc","cabbac","abcabc","acbacb","bababc"]), 5, 'Test 40');
test(maxPalindromesAfterOperations(["abcdefg","hijklmn","opqrstu","vwxyz","abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba"]), 11, 'Test 41');
test(maxPalindromesAfterOperations(["abcabcabc","bcabcabc","cabcabcab","abcabcbca","bcabcabcb","cabcabcbc","abcabcabc","bcabcabc","cabcabcab","abcabcbca","bcabcabcb","cabcabcbc","abcabcabc","bcabcabc","cabcabcab","abcabcbca","bcabcabcb","cabcabcbc"]), 18, 'Test 42');
test(maxPalindromesAfterOperations(["aabbcc","abcabc","defdef","xyzxyz","mnopqr","qrstuv"]), 4, 'Test 43');
test(maxPalindromesAfterOperations(["abcdabcd","efefef","ghighi","jkjkjk","lmnmln","opopop","qrstqr","stuvst","wxyxw","zyzzyz"]), 8, 'Test 44');
test(maxPalindromesAfterOperations(["racecar","madam","level","refer","deed"]), 5, 'Test 45');
test(maxPalindromesAfterOperations(["racecar","madam","refer","deed","level","noon","civic","rotor","stats","reviled","repaid","drawer","civic","rotor","redder","deed","peep","noon","kayak","reviled","repaid","civic","rotor","redder","deed","peep","noon","kayak","madam","refer","deed","level","noon","civic","rotor","stats"]), 36, 'Test 46');
test(maxPalindromesAfterOperations(["aabbcc","abcabc","bbaacc","ccbb","aabb","abc","aab","aaa","bbb","ccc"]), 10, 'Test 47');
test(maxPalindromesAfterOperations(["abcd","dcba","efgh","hgfe","ijkl","lkji","mnop","ponm"]), 8, 'Test 48');
test(maxPalindromesAfterOperations(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuvwxyzabcdefghijkl","abcdefghijlmnopqrstuvwxyz","qrstuvwxyzabcdefghij","klmnopqrstuvwxyzabcdefghi","jklmnopqrstuvwxyzabcdefgh","ijklmnopqrstuvwxyzabcdefg","hijklmnopqrstuvwxyzabcdef","ghijklmnopqrstuvwxyzabcde","fghijklmnopqrstuvwxyzabcd","efghijklmnopqrstuvwxyzabc","defghijklmnopqrstuvwxyzab","cdefghijklmnopqrstuvwxyza","bcdefghijklmnopqrstuvwxyzab","abcdefghijklmnopqrstuvwxyz"]), 15, 'Test 49');
test(maxPalindromesAfterOperations(["aabb","bbaa","ccdd","ddcc","eeff","ffee","gghh","higg","iijj","jjii","kkll","llkk","mmnn","nnaa","aabb","bbcc","ccdd","ddeeff","ffgghh","hhiijj","kkeeff","gghh","iijj","aabb","bbcc","ccdd","ddeeff","ffgghh","hhiijj","kkeeff","gghh","iijj","aabb","bbcc","ccdd","ddeeff","ffgghh","hhiijj","kkeeff","gghh","iijj","aabb","bbcc","ccdd","ddeeff","ffgghh","hhiijj","kkeeff","gghh","iijj","aabb","bbcc","ccdd","ddeeff","ffgghh","hhiijj","kkeeff"]), 56, 'Test 50');
test(maxPalindromesAfterOperations(["aabbaa","bbccbb","cccddd","ddeecc","effe","ggh","hi","jkl","mno","pqr","stu","vwx","yz","abcde","fghij","klmno","pqrst","uvwxy","z"]), 19, 'Test 51');
test(maxPalindromesAfterOperations(["aaaaaaaaab","bbbbbbbbbb","cccccccccc","dddddddddd","eeeeeeeee","fffffffff","gggggggg","hhhhhhh","iiiiii","jjjjj","kkkk","lll","mm","n","o"]), 14, 'Test 52');
test(maxPalindromesAfterOperations(["aaabbbccc","bbbaaaccc","cccbbbaaa","aabbcc","bbaacc","ccaabb","aabbbc","bbcaac","ccaabb","abcabc","ababab","bababa","aaaaaa","bbbbbb","cccccc","dddddd"]), 16, 'Test 53');
test(maxPalindromesAfterOperations(["aaaaaa","bbbbbb","cccccc","dddddd","eeeeee","ffffff","gggggg","hhhhhh","iiiiii","jjjjjj","kkkkkk","llllll","mmmmmm","nnnnnn","oooooo","pppppp","qqqqqq","rrrrrr","ssssss","tttttt","uuuuuu","vvvvvv","wwwwww","xxxxxx","yyyyyy","zzzzzz"]), 26, 'Test 54');
test(maxPalindromesAfterOperations(["aabbaa","bbaaab","ababab","bababa","aabbba","baaabb","aababb","abbaab","ababba","babaab","abbaba","babbaa","baabba","aababb","abbaab"]), 15, 'Test 55');
test(maxPalindromesAfterOperations(["racecar","level","deified","civic","rotor","stats","refer","rotor","reviled","deed","peep","noon","racecar","refer","civic","level"]), 16, 'Test 56');
test(maxPalindromesAfterOperations(["abcba","babcb","ababa","abacaba","racecar","madam"]), 6, 'Test 57');
test(maxPalindromesAfterOperations(["aaaaaaaaaa","bbbbbbbbbb","cccccccccc","dddddddddd","eeeeeeeeee","ffffffffff","gggggggggg","hhhhhhhhhh","iiiiiiiiii","jjjjjjjjjj"]), 10, 'Test 58');
test(maxPalindromesAfterOperations(["aab","aac","abb","abc","aba","aca","aaa","bbb","aab","aac","aba","aca","aaa","bbb"]), 14, 'Test 59');
test(maxPalindromesAfterOperations(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd","efghij","klmnop","qrstuv","wxyzab","cdefgh"]), 8, 'Test 60');
test(maxPalindromesAfterOperations(["zzzz","yyyy","xxxx","wwww","vvvv","uuuu","tttt","ssss","rrrr","qqqq","pppp","oooo","nnnn","mmmm","llll","kkkk","jjjj","iiii","hhhh","gggg","ffffff"]), 21, 'Test 61');
test(maxPalindromesAfterOperations(["abcde","edcba","fedcb","bcdef","cdefg","bcdea","gfedc","abcdf","bcadf","bcade","bcdefg","bcdefgh","bcdefghi","bcdefghij","bcdefghijk"]), 15, 'Test 62');
test(maxPalindromesAfterOperations(["abcd","dcba","efgh","hgf","ijkl","lkj","mnop","ponm","qrst","tsrq","uvw","wvu","xyz","zyx","abcd","dcba","efgh","hgf","ijkl","lkj","mnop","ponm","qrst","tsrq","uvw","wvu","xyz","zyx"]), 28, 'Test 63');
test(maxPalindromesAfterOperations(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","abcdefgh","hgfedcba","ijklmnop","ponmlkji","qrstuvwxyz","zyxwvutsrqponmlkjihgfedcba"]), 31, 'Test 64');
test(maxPalindromesAfterOperations(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd","efghij","klmnop","qrstuv","wxyzab"]), 8, 'Test 65');
test(maxPalindromesAfterOperations(["abacax","bxdxcy","cydxdz","zxdxzy","yxzxyw","wxwxyv","vwxyvu","uvwxut","tuvwus","suvwtv","rvtwus","qtwvur","ptwvus","otwvur","ntwvus","mtwvur","ltwvus","kwtvur","jwtvus","itwvur","htwvur","gtwvur","ftwvur","etwvur","dtwvur","ctwvur","btwvur","atwvur"]), 24, 'Test 66');
test(maxPalindromesAfterOperations(["racecar","level","deified","rotor","redder","repaper","reviled","kayak"]), 7, 'Test 67');
test(maxPalindromesAfterOperations(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 52, 'Test 68');
test(maxPalindromesAfterOperations(["abcdefg","ghijklm","nopqrstu","vwxyzabc","defghijk","lmnopqrs","tuvwxyz","abcdefghi","jklmnopqr","stuvwxyzabc"]), 8, 'Test 69');
test(maxPalindromesAfterOperations(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 52, 'Test 70');
test(maxPalindromesAfterOperations(["abacax","banana","anana","civic","racecar","madam","level","deified"]), 8, 'Test 71');
test(maxPalindromesAfterOperations(["abababab","babababa","acacacac","bacbacba","cdcddcdc","dddddddd","eeeeeeee","ffffffff","gggggggg","hhhhhhhh"]), 9, 'Test 72');
test(maxPalindromesAfterOperations(["racecar","madam","level","rotor","deified"]), 5, 'Test 73');
test(maxPalindromesAfterOperations(["ab","ba","ac","ca","ad","da","ae","ea","af","fa","ag","ga","ah","ha","ai","ia","aj","ja","ak","ka","al","la","am","ma","an","na","ao","oa","ap","pa","aq","qa","ar","ra","as","sa","at","ta","au","ua","av","va","aw","wa","ax","xa","ay","ya","az","za"]), 50, 'Test 74');
test(maxPalindromesAfterOperations(["abacaba","bcbcbcb","bababab","cacacac","dcdcdcd","efefefe","gigigig","huhuhuh","ijijiij","kjkjkjk","lmnlmnl","ponponp","qrqrqrq","stststs","xvxvxvx","wywywyw","uzuzuzu","vavavav","bbabbab","abbabba"]), 20, 'Test 75');
test(maxPalindromesAfterOperations(["aabbccddeeff","bbccddeeffgg","ccddeeffgghh","ddeeffgghhiijj","eeffgghhiijjkkll","ffgghhiijjkkllmmnn","gghhiijjkkllmmnnoopp","hhiijjkkllmmnnooppqqrr","iijjkkllmmnnooppqqrrssttuuvv","jjkkllmmnnooppqqrrssttuuvvwxyz"]), 9, 'Test 76');
test(maxPalindromesAfterOperations(["aabb","bbaa","abab","baba","aaaa","bbbb","abcd","dcba","efgh","ghfe","ijkl","lkji","mnop","ponm","qrst","tsrq","uvwx","xwvu","yzxy","yxzy","abcdef","fedcba","ghijkl","lkjihg","mnopqr","rqponm","stuvwx","xwvuts","yzabcd","dcba"]), 29, 'Test 77');
test(maxPalindromesAfterOperations(["racecar","madam","refer","deified","rotor","kayak","reviled","repaper","redder","deed","peep","noon","civic","rotor","stats","level"]), 16, 'Test 78');
test(maxPalindromesAfterOperations(["abcdabcd","bcadbcad","cdabcdab","dabcadcb","abcdabcd","bcadbcad","cdabcdab","dabcadcb"]), 8, 'Test 79');
test(maxPalindromesAfterOperations(["abacaxa","xyz","mnopqr","uvw","stuv","lmno","ijkl","hgf","edc","bac"]), 8, 'Test 80');
test(maxPalindromesAfterOperations(["abacax","zyzyzy","noonnoon","levellevel","rotorrotor","statsstats","civiccivic","deifieddeified"]), 7, 'Test 81');
test(maxPalindromesAfterOperations(["abcabcabc","bcabcbacb","cabacabac","aabbcc","bbaacc","ccaabb","abcabcabc","bcabcbacb","cabacabac","aabbcc","bbaacc","ccaabb","abcabcabc","bcabcbacb","cabacabac","aabbcc","bbaacc","ccaabb","abcabcabc","bcabcbacb","cabacabac","aabbcc","bbaacc","ccaabb","abcabcabc","bcabcbacb","cabacabac","aabbcc","bbaacc","ccaabb"]), 30, 'Test 82');
test(maxPalindromesAfterOperations(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 26, 'Test 83');
test(maxPalindromesAfterOperations(["aabbcc","abcdef","zyxwvut","mnopqr","lkjihg","fedcba","utsrqponmlkjihgfedcba","abcdefghijklnmopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghijklnmopqrstuvwxyz"]), 9, 'Test 84');
test(maxPalindromesAfterOperations(["aabbcc","abcabc","abcdabcd","abcdeabcde","abcdefabcdef"]), 5, 'Test 85');
test(maxPalindromesAfterOperations(["racecar","level","deified","rotor","repaper","deed","civic","rotor","refer","redder"]), 10, 'Test 86');
test(maxPalindromesAfterOperations(["abacax","xaba","aa","bb","cccc","dddd","eeff","fffe","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 27, 'Test 87');
test(maxPalindromesAfterOperations(["abccba","abcba","abba","aba","a","b","c","d","e"]), 9, 'Test 88');
test(maxPalindromesAfterOperations(["xyz","zyx","yzx","zyx","zyx","zyx","zyx","zyx","zyx","zyx","zyx","zyx","zyx","zyx","zyx","zyx","zyx","zyx","zyx","zyx"]), 20, 'Test 89');
test(maxPalindromesAfterOperations(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","ab","ba","cd","dc","ef","fe"]), 32, 'Test 90');
test(maxPalindromesAfterOperations(["aaaa","bbbb","cccc","dddd","eeee","ffff","gggg","hhhh","iiii","jjjj","kkkk","llll","mmmm","nnnn","oooo","pppp","qqqq","rrrr","ssss","tttt","uuuu","vvvv","wwww","xxxx","yyyy","zzzz"]), 26, 'Test 91');
test(maxPalindromesAfterOperations(["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a","z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"]), 52, 'Test 92');
test(maxPalindromesAfterOperations(["abcde","edcba","fghij","jihgf","klmno","onmlk","pqrst","tsrqp","uvwxy","yxwvu","zabcd","dcbae"]), 12, 'Test 93');
test(maxPalindromesAfterOperations(["aabbcc","abcabc","abacab","aabbccddeeff","bbccddeeffgg","ccddeeffgghh","ddeeffgghhiijj","eeffgghhiijjkkll","ffgghhiijjkkllmmnn","gghhiijjkkllmmnnoopp","hhiijjkkllmmnnooppqqrr","iijjkkllmmnnooppqqrrssttuuvv","jjkkllmmnnooppqqrrssttuuvvwxyz"]), 12, 'Test 94');
test(maxPalindromesAfterOperations(["racecar","madam","refer","level","deified","reviled"]), 6, 'Test 95');

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
