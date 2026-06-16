// Test: 1897. Redistribute Characters To Make All Strings Equal
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { makeEqual } = require("./solution");

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

console.log("\n1897. Redistribute Characters To Make All Strings Equal\n");

test(makeEqual(["abc","def","ghi","jkl"]), false, 'Test 1');
test(makeEqual(["aabbcc","abc","abc","abc"]), false, 'Test 2');
test(makeEqual(["abcd","dcba","abcd","dcba"]), true, 'Test 3');
test(makeEqual(["abcd","bcad","acdb","bdac"]), true, 'Test 4');
test(makeEqual(["hello","olelh","loleh"]), true, 'Test 5');
test(makeEqual(["a","b","c","d","e","f","g","h","i","j"]), false, 'Test 6');
test(makeEqual(["a","a","a","a"]), true, 'Test 7');
test(makeEqual(["test","sett","stte"]), true, 'Test 8');
test(makeEqual(["abc","def","ghi"]), false, 'Test 9');
test(makeEqual(["xyz","zyx","yzx"]), true, 'Test 10');
test(makeEqual(["abcde","fghij","klmno","pqrst","uvwxy"]), false, 'Test 11');
test(makeEqual(["ab","a"]), false, 'Test 12');
test(makeEqual(["same","same","same"]), true, 'Test 13');
test(makeEqual(["abcd","abcd","abcd","abcd"]), true, 'Test 14');
test(makeEqual(["one","two","three"]), false, 'Test 15');
test(makeEqual(["abc","aabc","bc"]), true, 'Test 16');
test(makeEqual(["aabbcc","abc","abc"]), false, 'Test 17');
test(makeEqual(["abcd","abcd","abcd"]), true, 'Test 18');
test(makeEqual(["same","same","same","same","same","same","same","same","same","same"]), true, 'Test 19');
test(makeEqual(["aabb","bbcc","ccdd","aabb","bbcc","ccdd","aabb","bbcc","ccdd"]), false, 'Test 20');
test(makeEqual(["abcdefghijklmnop","abcdefghijklmnop","abcdefghijklmnop","abcdefghijklmnop"]), true, 'Test 21');
test(makeEqual(["xyz","zyx","yzx","zxy","yxz","xzy"]), true, 'Test 22');
test(makeEqual(["zzzzzzzz","zzzzzzzz","zzzzzzzz","zzzzzzzz","zzzzzzzz","zzzzzzzz","zzzzzzzz","zzzzzzzz","zzzzzzzz"]), true, 'Test 23');
test(makeEqual(["repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat","repeat"]), true, 'Test 24');
test(makeEqual(["abcdabcd","bacdbacd","cdabdcab","dcbadacb"]), true, 'Test 25');
test(makeEqual(["xyz","yzx","zxy","zyx","yxz","xzy"]), true, 'Test 26');
test(makeEqual(["abcdefg","ghfedcb","fedcbaa","bcaefgd","abcdefg","ghfedcb","fedcbaa","bcaefgd","abcdefg","ghfedcb"]), false, 'Test 27');
test(makeEqual(["abcde","bcdea","cdeab","deabc","eabcd","fghij","ghijf","hijfg","ijfgh","jfgih"]), false, 'Test 28');
test(makeEqual(["hello","bello","hallo","hellb","hella","bellh","hblla"]), false, 'Test 29');
test(makeEqual(["abcde","edcba","bcdea","decab","acdeb"]), true, 'Test 30');
test(makeEqual(["hello","lohel","ohell","llohe","elloh"]), true, 'Test 31');
test(makeEqual(["python","typhon","typhno","hypton","hptyon","phyton","ptyhno","thpyon","ptyhon","phytom"]), false, 'Test 32');
test(makeEqual(["abacabadabacaba","bacabacabadabacab","acabacabadabacaba","cabacabadabacabaa"]), false, 'Test 33');
test(makeEqual(["aabbcc","abcabc","ccbaab","bcaacb"]), true, 'Test 34');
test(makeEqual(["aabbcc","abcabc","baccab","cbbaca","acabcb","bcacab"]), true, 'Test 35');
test(makeEqual(["hello","world","owrld","dlrow","llhow"]), false, 'Test 36');
test(makeEqual(["abcdef","fedcba","defabc","cabdef","bacdef","fabcde"]), true, 'Test 37');
test(makeEqual(["xyx","yxy","xyx","xyx","xyx","xyx","xyx","xyx","xyx","xyx"]), false, 'Test 38');
test(makeEqual(["mnopqr","nopqrm","opqrmn","pqrmno","qrmnop","rmnopq","mnopqr","nopqrm","opqrmn","pqrmno","qrmnop","rmnopq","mnopqr","nopqrm","opqrmn","pqrmno","qrmnop","rmnopq"]), true, 'Test 39');
test(makeEqual(["equal","equal","equal","equal","equal","equal","equal","equal","equal","equal","equal","equal","equal","equal","equal","equal","equal","equal","equal","equal"]), true, 'Test 40');
test(makeEqual(["aabbcc","bbaacc","ccaabb","aabbbc","bbccaa"]), false, 'Test 41');
test(makeEqual(["one","two","three","four","five","six","seven","eight","nine","ten"]), false, 'Test 42');
test(makeEqual(["unique","queuni","neuqui","uqinue","unei qu","nueiqu","einuq","uiqune","inuqeu","uqneui"]), false, 'Test 43');
test(makeEqual(["aaa","bbb","ccc","aaa","bbb","ccc","aaa","bbb","ccc"]), true, 'Test 44');
test(makeEqual(["qwertyuiop","poiuytrewq","oiuytrewqp","iuytrewqpo","uytrewqpoi","ytrewqpoiu"]), true, 'Test 45');
test(makeEqual(["abcdefg","bcdefga","cdefgab","defgabc","efgabcd","fgabcde","gabcdef"]), true, 'Test 46');
test(makeEqual(["aabb","bbaa","abab","abba","baab","baba","aaab","aaba","abaa","baaa","bbaa","abab","abba","baab","baba","aaab","aaba","abaa","baaa","bbaa"]), false, 'Test 47');
test(makeEqual(["aabbcc","abcabc","bcaabc","cababc"]), true, 'Test 48');
test(makeEqual(["apple","ppale","pleap","elppa","lappe"]), true, 'Test 49');
test(makeEqual(["aabbccddeeffgghhiijjooppllnnmmbbkkqqwwaass","aabbccddeeffgghhiijjooppllnnmmbbkkqqwwaass","aabbccddeeffgghhiijjooppllnnmmbbkkqqwwaass","aabbccddeeffgghhiijjooppllnnmmbbkkqqwwaass"]), true, 'Test 50');
test(makeEqual(["aabbcc","bbccaa","ccaabb"]), true, 'Test 51');
test(makeEqual(["abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba"]), true, 'Test 52');
test(makeEqual(["xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx","xy","yx"]), true, 'Test 53');
test(makeEqual(["aaaa","bbbb","cccc","dddd","eeee"]), false, 'Test 54');
test(makeEqual(["same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same"]), true, 'Test 55');
test(makeEqual(["same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same"]), true, 'Test 56');
test(makeEqual(["aabbcc","abcabc","ccbaab"]), true, 'Test 57');
test(makeEqual(["unique","uniqueness","uniquely","uniques"]), false, 'Test 58');
test(makeEqual(["aaaaab","aaabbb","aabbbb","abbbbb","bbbbbz"]), false, 'Test 59');
test(makeEqual(["python","typhon","nothpy","hnotyp","npytho"]), true, 'Test 60');
test(makeEqual(["aabbcc","abcabc","ccbaab","baccab"]), true, 'Test 61');
test(makeEqual(["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"]), true, 'Test 62');
test(makeEqual(["abcdef","bcdefa","cdefab","defabc","efabcd","fabcde","abcdef","bcdefa","cdefab","defabc","efabcd","fabcde"]), true, 'Test 63');
test(makeEqual(["xyz","zyx","yzx","xzy"]), true, 'Test 64');
test(makeEqual(["unique","characters","only","in","each","string","here"]), false, 'Test 65');
test(makeEqual(["abcdefgh","hgfedcba","abcdefg","gfedcba","abcdef","fedcba","abcde","edcba","abcd","dcba","abc","cba","ab","ba","a","b"]), false, 'Test 66');
test(makeEqual(["qwertyuiop","asdfghjkl","zxcvbnm","qwertyuiop","asdfghjkl","zxcvbnm","qwertyuiop","asdfghjkl","zxcvbnm"]), false, 'Test 67');
test(makeEqual(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"]), false, 'Test 68');
test(makeEqual(["abracadabra","cadabraab","rabracada","abracadab","acadabrabr"]), false, 'Test 69');
test(makeEqual(["abcdef","bcdefa","cdefab","defabc","efabcd","fabcde"]), true, 'Test 70');
test(makeEqual(["qqq","www","eee","rrr","ttt","yyy","uuu","iii","ooo","ppp","lll","mmm","nnn","sss","ddd","fff","ggg","hhh","jjj","kkk"]), false, 'Test 71');
test(makeEqual(["apple","ppale","pplea","pelap","pepla"]), true, 'Test 72');
test(makeEqual(["racecar","carrace","ecarrac","rraceca","acecarr"]), true, 'Test 73');
test(makeEqual(["abcdefgh","hgfedcba","bacdefgh","defghabc","efghabcd"]), true, 'Test 74');
test(makeEqual(["abc","abcabc","abcabcabc","abcabcabcabc","abcabcabcabcabc","abcabcabcabcabcabc","abcabcabcabcabcabcabc","abcabcabcabcabcabcabcabc","abcabcabcabcabcabcabcabcabc","abcabcabcabcabcabcabcabcabcabc"]), false, 'Test 75');
test(makeEqual(["mississippi","ppiimiss","pisimmpi","ssippiim","pmissipi","iimpsspi","sspiimp","misipip","sipimp","impispi"]), false, 'Test 76');
test(makeEqual(["unique","enquie","unieqe","inequeu","niuquee","uqneiee","qnueiee"]), false, 'Test 77');
test(makeEqual(["aabbcc","abcabc","bcaabc","cababc","bcacab"]), true, 'Test 78');
test(makeEqual(["xyz","zyx","yzx","xzy","yxz"]), true, 'Test 79');
test(makeEqual(["abcdabcd","dcbaabcd","abcdcdab","dcabcdab"]), true, 'Test 80');
test(makeEqual(["aaaaa","bbbbb","ccccc","ddddd","eeeee","ffffff","gggggg","hhhhh","iiiii","jjjjj"]), false, 'Test 81');
test(makeEqual(["hello","world","world","hello"]), false, 'Test 82');
test(makeEqual(["aaa","bbb","ccc","aab","bbc","cca"]), true, 'Test 83');
test(makeEqual(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zzxyyxwwvvttsrrqpponmlkjihgfedcba","abcdefghijlkmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba","zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba","qrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcd"]), false, 'Test 84');
test(makeEqual(["zzzz","zzz","zz","z"]), false, 'Test 85');
test(makeEqual(["python","programming","challenge","easy"]), false, 'Test 86');
test(makeEqual(["qwerty","wertyq","ertyqw","rtyqwe","tyqwre","yqwret","qwertyui","wertyuiq","ertyuiqw","rtyuiqwe","tyuiqwre","yuiqwret"]), false, 'Test 87');
test(makeEqual(["hello","olleh","loleh","elloh","lhleo","heoll"]), true, 'Test 88');
test(makeEqual(["abacabadabacaba","bacabacabacaba","cabacabacabacaba","dacabacabacaba","eacabacabacaba","facabacabacaba","gacabacabacaba","hacabacabacaba","iacabacabacaba","jacobacabacaba","kacabacabacaba"]), false, 'Test 89');

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
