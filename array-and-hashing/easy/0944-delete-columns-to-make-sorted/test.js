// Test: 944. Delete Columns To Make Sorted
// 103 test cases from LeetCodeDataset
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

console.log("\n944. Delete Columns To Make Sorted\n");

test(minDeletionSize(["zaz","zbz","zcz"]), 0, 'Test 1');
test(minDeletionSize(["a","b"]), 0, 'Test 2');
test(minDeletionSize(["zzz","zzz","zzz"]), 0, 'Test 3');
test(minDeletionSize(["xyz","yza","zab"]), 2, 'Test 4');
test(minDeletionSize(["abc","bcd","cde"]), 0, 'Test 5');
test(minDeletionSize(["abc","abc","abc"]), 0, 'Test 6');
test(minDeletionSize(["abcd","efgh","ijkl"]), 0, 'Test 7');
test(minDeletionSize(["cba","daf","ghi"]), 1, 'Test 8');
test(minDeletionSize(["abc","bce","cae"]), 1, 'Test 9');
test(minDeletionSize(["zyx","wvu","tsr"]), 3, 'Test 10');
test(minDeletionSize(["abcd","abce","abcf","abcg","abch","abci","abcj","abck","abcl","abcm","abcn","abco","abcp","abcq","abcr","abcs","abct","abcd","abce","abcf","abcg","abch","abci","abcj","abck","abcl","abcm","abcn","abco","abcp","abcq","abcr","abcs","abct"]), 1, 'Test 11');
test(minDeletionSize(["xyz","yza","zab","abc","bcd","cde"]), 3, 'Test 12');
test(minDeletionSize(["xyz","uvw","rst","qpo","nml","klm","jih","fed","cba"]), 3, 'Test 13');
test(minDeletionSize(["qwe","wer","ert","rty","tyu","yui","uio","iop","opq","pqa","qaz","wsx","edc","rfv","tgb","yhn","ujm","ikl","olk","pvc","bnm"]), 3, 'Test 14');
test(minDeletionSize(["xyz","xyx","xzy"]), 1, 'Test 15');
test(minDeletionSize(["zyx","yxw","xwv","uvw"]), 3, 'Test 16');
test(minDeletionSize(["abcd","dbca","efgh","hgfj"]), 2, 'Test 17');
test(minDeletionSize(["abcd","abce","abcf","abcg","abch"]), 0, 'Test 18');
test(minDeletionSize(["zz","zy","yx","xz","yz","zx"]), 2, 'Test 19');
test(minDeletionSize(["abcd","dcba","abcd","dcba","abcd","dcba"]), 4, 'Test 20');
test(minDeletionSize(["aabbcc","bbccdd","ccddee","ddeeff"]), 0, 'Test 21');
test(minDeletionSize(["zzzz","zzzy","zzzx","zzxw"]), 2, 'Test 22');
test(minDeletionSize(["mnop","mnoq","mnop"]), 1, 'Test 23');
test(minDeletionSize(["aabbcc","abacbc","abcabc","acbacb","accbab","babcac","bbacab","bbcaab","bcabca","bcacab","bcbaca","bcbcaa","cacaba","cacbaa","caacab","caacba","cababc","cabacb","cabbac","cabcab","cabcba","cacabc","cacbba","cbabac","cbabca","cbacab","cbacba","cbbaca","cbbcaa","ccabab","ccabac","ccabba","ccbaab","ccbaca","ccbacb"]), 5, 'Test 24');
test(minDeletionSize(["abcd","abdc","acdb"]), 1, 'Test 25');
test(minDeletionSize(["aaaa","aaab","aabb","abbb"]), 0, 'Test 26');
test(minDeletionSize(["abc","bac","bca","cab","cba","acb"]), 3, 'Test 27');
test(minDeletionSize(["same","sake","sage","sage","sane","sane","sane"]), 1, 'Test 28');
test(minDeletionSize(["abcdef","bcdefg","cdefgh","defghi"]), 0, 'Test 29');
test(minDeletionSize(["abc","bac","cab","cba","bca","acb"]), 3, 'Test 30');
test(minDeletionSize(["cat","dog","bat","rat","hat","mat","eat","tat","sat","pat"]), 3, 'Test 31');
test(minDeletionSize(["abcd","dcba","abcd","dcba"]), 4, 'Test 32');
test(minDeletionSize(["aaaa","bbbb","cccc","dddd","eeee","ffff"]), 0, 'Test 33');
test(minDeletionSize(["apple","apply","appla"]), 1, 'Test 34');
test(minDeletionSize(["zzzz","zzyx","zzyv","zzyu","zzyt","zzyr","zzys","zzyr","zzyp","zzyq","zzxo","zzxn","zzxm","zzxl","zzxk","zzxj","zzxi","zzxh","zzxg","zzxf","zzxe","zzxd","zzxc","zzwb","zzwa","zzza"]), 2, 'Test 35');
test(minDeletionSize(["leetcode","loveleetcode","leetcodeer","leetcodexx"]), 7, 'Test 36');
test(minDeletionSize(["abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij"]), 0, 'Test 37');
test(minDeletionSize(["ab","ba","ab","ba","ab"]), 2, 'Test 38');
test(minDeletionSize(["hello","helpp","hells"]), 1, 'Test 39');
test(minDeletionSize(["zyxwvutsrqponmlkjihgfedcba","yxwvutsrqponmlkjihgfedcba","xwvutsrqponmlkjihgfedcba","wvutsrqponmlkjihgfedcba","vutsrqponmlkjihgfedcba"]), Error: string index out of range, 'Test 40');
test(minDeletionSize(["abcdef","bcdefg","cdefgh","defghi","efghij","fghijk"]), 0, 'Test 41');
test(minDeletionSize(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yzc"]), 1, 'Test 42');
test(minDeletionSize(["mnop","qrst","uvwx","yzab"]), 2, 'Test 43');
test(minDeletionSize(["abcdefg","ghijklm","nopqrst","uvwxyz"]), Error: string index out of range, 'Test 44');
test(minDeletionSize(["abcd","abdc","acbd","adbc"]), 2, 'Test 45');
test(minDeletionSize(["xyzz","wvut","qrst","ponm","lkji","hgfed","cbazyx","abcdefgh"]), 4, 'Test 46');
test(minDeletionSize(["qrst","qrsu","qrsu"]), 0, 'Test 47');
test(minDeletionSize(["abcd","abcf","abce","abcd","abcf","abcd"]), 1, 'Test 48');
test(minDeletionSize(["qrst","abcd","mnop","efgh"]), 4, 'Test 49');
test(minDeletionSize(["abcd","dddd","abcd","dddd"]), 3, 'Test 50');
test(minDeletionSize(["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"]), 1, 'Test 51');
test(minDeletionSize(["hello","hallo","hullo","hella"]), 2, 'Test 52');
test(minDeletionSize(["aabbccdd","bbaaccee","ccddeeff","ddeeffgg"]), 2, 'Test 53');
test(minDeletionSize(["zyxwvu","utsrqo","ponmlk","jihgfed","cba"]), 6, 'Test 54');
test(minDeletionSize(["abc","bca","cab","acb"]), 3, 'Test 55');
test(minDeletionSize(["pqr","stu","vwx","yzp"]), 1, 'Test 56');
test(minDeletionSize(["abcde","fghij","klmno","pqrst","uvwxy"]), 0, 'Test 57');
test(minDeletionSize(["mnop","mlkj","ihgf","edcb"]), 4, 'Test 58');
test(minDeletionSize(["xyz","zyx","yzz","xzz"]), 2, 'Test 59');
test(minDeletionSize(["zzzz","yyyy","xxxx","wwww"]), 4, 'Test 60');
test(minDeletionSize(["abcdefg","bcdefgh","cdefghi","defghij","efghijk","fghijkl","ghijklm"]), 0, 'Test 61');
test(minDeletionSize(["xyz","wxy","uvw","stu"]), 3, 'Test 62');
test(minDeletionSize(["mnop","mnop","mnop","mnop"]), 0, 'Test 63');
test(minDeletionSize(["a","z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"]), 1, 'Test 64');
test(minDeletionSize(["abcd","acbd","adbc","dabc","dbac","dcab","dcba"]), 3, 'Test 65');
test(minDeletionSize(["abcd","acfg","aegi","afih"]), 1, 'Test 66');
test(minDeletionSize(["aabbcc","bbccdd","ccddeeff","ddeeffgg","eeffgghh","ffgghhii"]), 0, 'Test 67');
test(minDeletionSize(["xyz","uvw","rst","qpo"]), 3, 'Test 68');
test(minDeletionSize(["abcd","abdc","acbd","acdb","adbc","adcb","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba"]), 3, 'Test 69');
test(minDeletionSize(["abcdefgh","hgfedcba","abcdefgh","hgfedcba","abcdefgh","hgfedcba"]), 8, 'Test 70');
test(minDeletionSize(["mnop","mnoq","mnop","mnop"]), 1, 'Test 71');
test(minDeletionSize(["abcd","abcf","abce","abch","abcd","abci","abcd","abck"]), 1, 'Test 72');
test(minDeletionSize(["aeg","bdf","cce"]), 2, 'Test 73');
test(minDeletionSize(["mnop","qrst","uvwx","yzab","cdef","ghij","klmn","opqr","stuv","wxyz"]), 4, 'Test 74');
test(minDeletionSize(["abcd","bcde","cdef","defg"]), 0, 'Test 75');
test(minDeletionSize(["abcdef","acdefg","aeghij"]), 0, 'Test 76');
test(minDeletionSize(["abcd","bfgh","cgij","dhjk"]), 0, 'Test 77');
test(minDeletionSize(["banana","bandana","bananna"]), 2, 'Test 78');
test(minDeletionSize(["abcd","abdc","abcc"]), 2, 'Test 79');
test(minDeletionSize(["abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno","mnop","nopq","opqr","pqrs","qrst","rstu","stuv","tuvw","uvwx","vwxy","wxyz"]), 0, 'Test 80');
test(minDeletionSize(["aabbcc","bbccdd","ccddeeff","ddeeffgg"]), 0, 'Test 81');
test(minDeletionSize(["pqr","pqs","pqt","pqu","pqv","pqw","pqx","pqy","pqz"]), 0, 'Test 82');
test(minDeletionSize(["abcdef","fghijk","lmnopq","rstuvw","xyzuvw","vwxyzw","utrewq","ponmlk","jihgfedcba"]), 6, 'Test 83');
test(minDeletionSize(["zyxwv","utsrq","ponml","kjihg","fedcba"]), 5, 'Test 84');
test(minDeletionSize(["zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz"]), 0, 'Test 85');
test(minDeletionSize(["abcdefg","bcdefgh","cdefghi","defghij","efghijk"]), 0, 'Test 86');
test(minDeletionSize(["water","waste","wider"]), 3, 'Test 87');
test(minDeletionSize(["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","kkk"]), 0, 'Test 88');
test(minDeletionSize(["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm","nnn","ooo","ppp","qqq","rrr","sss","ttt","uuu","vvv","www","xxx","yyy","zzz"]), 0, 'Test 89');
test(minDeletionSize(["abcd","acfg","aegh"]), 0, 'Test 90');
test(minDeletionSize(["zzzzzzzz","zzyyyyxx","zyxwvutu","zyxwvuts"]), 7, 'Test 91');
test(minDeletionSize(["xzy","uvw","rst","qpo","nml","klm","jih","fed","cba","abc","def","ghi","jkl","mno","pqr","stu","vwx","yzx"]), 3, 'Test 92');
test(minDeletionSize(["abcdefghijklmnopqrstuvwxyz","bcdefghijklmnopqrstuvwxyza","cdefghijklmnopqrstuvwxyzab","defghijklmnopqrstuvwxyzabcde","efghijklmnopqrstuvwxyzabcdefg","fghijklmnopqrstuvwxyzabcdefg hijklmnopqrstuvwxyzabcdefg hijklmnopqrstuvwxyzabcdefg hijklmnopqrstuvwxyzabcdefg hijklmnopqrstuvwxyzabcdefg hijklmnopqrstuvwxyzabcdefg hijklmnopqrstuvwxyzabcdefg"]), 5, 'Test 93');
test(minDeletionSize(["abc","bca","cab","bac"]), 3, 'Test 94');
test(minDeletionSize(["aab","aac","aab","aac"]), 1, 'Test 95');
test(minDeletionSize(["abcd","bfgh","cgij","dhkj"]), 0, 'Test 96');
test(minDeletionSize(["aaaaa","bbbbb","ccccc","ddddd","eeeee","fffff","ggggg","hhhhh","iiiii","jjjjj"]), 0, 'Test 97');
test(minDeletionSize(["zebra","yak","antelope"]), Error: string index out of range, 'Test 98');
test(minDeletionSize(["abcd","efgh","ijkl","mnop"]), 0, 'Test 99');
test(minDeletionSize(["abcd","bfgh","cijj","dklm"]), 0, 'Test 100');
test(minDeletionSize(["abcdefg","bcdefga","cdefgab","defgabc"]), 3, 'Test 101');
test(minDeletionSize(["aaaa","bbbb","cccc","dddd","eeee"]), 0, 'Test 102');
test(minDeletionSize(["zebra","yak","xerox"]), Error: string index out of range, 'Test 103');

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
