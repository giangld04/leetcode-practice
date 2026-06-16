// Test: 2273. Find Resultant Array After Removing Anagrams
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { removeAnagrams } = require("./solution");

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

console.log("\n2273. Find Resultant Array After Removing Anagrams\n");

test(removeAnagrams(["abc","cab","bca","xyz","zyx","yxz"]), ['abc', 'xyz'], 'Test 1');
test(removeAnagrams(["abc","cba","bca","xyz","zyx"]), ['abc', 'xyz'], 'Test 2');
test(removeAnagrams(["unique","words","here","now"]), ['unique', 'words', 'here', 'now'], 'Test 3');
test(removeAnagrams(["test","sett","tset","ttew"]), ['test', 'ttew'], 'Test 4');
test(removeAnagrams(["same","same","same","same","same"]), ['same'], 'Test 5');
test(removeAnagrams(["a","b","c","d","e"]), ['a', 'b', 'c', 'd', 'e'], 'Test 6');
test(removeAnagrams(["aabbcc","abcabc","bcaacb","bacbac","cababc"]), ['aabbcc'], 'Test 7');
test(removeAnagrams(["test","sett","tset","stet","ttes"]), ['test'], 'Test 8');
test(removeAnagrams(["one","two","three","four","five","six","seven","eight","nine","ten"]), ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'], 'Test 9');
test(removeAnagrams(["hello","billion","oellh","llheo","note","tone"]), ['hello', 'billion', 'oellh', 'note'], 'Test 10');
test(removeAnagrams(["abc","cab","bac","bca","xyz"]), ['abc', 'xyz'], 'Test 11');
test(removeAnagrams(["abcd","dcba","abcd","dcba","abcd"]), ['abcd'], 'Test 12');
test(removeAnagrams(["hello","olleh","world","dlrow","python","nohtyp"]), ['hello', 'world', 'python'], 'Test 13');
test(removeAnagrams(["abba","baba","bbaa","cd","cd"]), ['abba', 'cd'], 'Test 14');
test(removeAnagrams(["deed","deep","peed","depe","dpee"]), ['deed', 'deep'], 'Test 15');
test(removeAnagrams(["hello","world","dlrow","owrld","worlc"]), ['hello', 'world', 'worlc'], 'Test 16');
test(removeAnagrams(["same","same","same","same"]), ['same'], 'Test 17');
test(removeAnagrams(["abc","cba","bac","bca","cab","acb"]), ['abc'], 'Test 18');
test(removeAnagrams(["aaa","aa","a","aaaa","aaa"]), ['aaa', 'aa', 'a', 'aaaa', 'aaa'], 'Test 19');
test(removeAnagrams(["aabbcc","baccab","abcabc","xyz","zyx","yxz"]), ['aabbcc', 'xyz'], 'Test 20');
test(removeAnagrams(["listen","silent","enlist","google","gooegl"]), ['listen', 'google'], 'Test 21');
test(removeAnagrams(["abc","cab","bac","bca","acb","cba"]), ['abc'], 'Test 22');
test(removeAnagrams(["aaa","aa","a"]), ['aaa', 'aa', 'a'], 'Test 23');
test(removeAnagrams(["deed","deed","deed","deed","deed"]), ['deed'], 'Test 24');
test(removeAnagrams(["hello","world","dlrow","owrld","werld","hello","olleh","dlrow","world","rowld","dlrow","hello","hello","world","world","world","dlrow","dlrow","dlrow","dlrow"]), ['hello', 'world', 'werld', 'hello', 'dlrow', 'hello', 'world'], 'Test 25');
test(removeAnagrams(["triangle","integral","integral","integral","integral","integral","integral","integral"]), ['triangle'], 'Test 26');
test(removeAnagrams(["a","b","c","d","e","a","b","c","d","e","a","b","c","d","e","a","b","c","d","e","a","b","c","d","e","a","b","c","d","e","a","b","c","d","e","a","b","c","d","e","a","b","c","d","e","a","b","c","d","e","a","b","c","d","e","a","b","c","d","e"]), ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'], 'Test 27');
test(removeAnagrams(["listen","silent","enlist","google","gooegl","abc","cab","bac","xyz","zyx","yxz"]), ['listen', 'google', 'abc', 'xyz'], 'Test 28');
test(removeAnagrams(["rat","car","tar","arc","art","cat","tac","act","rat","car"]), ['rat', 'car', 'tar', 'arc', 'art', 'cat', 'rat', 'car'], 'Test 29');
test(removeAnagrams(["racecar","carrace","acecar","enlist","inlets","silent","google","gooegl","abc","bac","cba","xyz","zyx","yxz","zyx","xyz","listen","silent","enlist"]), ['racecar', 'acecar', 'enlist', 'google', 'abc', 'xyz', 'listen'], 'Test 30');
test(removeAnagrams(["aabbcc","aabbc","aabc","abc","ab","a","abcd","dcba","bacd","cadb","abdc","cabd","mnop","ponm","omnp","nmop","mpno","pmno"]), ['aabbcc', 'aabbc', 'aabc', 'abc', 'ab', 'a', 'abcd', 'mnop'], 'Test 31');
test(removeAnagrams(["ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba"]), ['ab'], 'Test 32');
test(removeAnagrams(["hello","olleh","loleh","ohell","ehlol","world","dlrow","rowld","owlrd","wrold","hello","olleh","loleh","ohell","ehlol"]), ['hello', 'world', 'hello'], 'Test 33');
test(removeAnagrams(["listen","silent","enlist","google","gooegl","abc","cab","bac","xyz","zyx","zyxw","wxyz"]), ['listen', 'google', 'abc', 'xyz', 'zyxw'], 'Test 34');
test(removeAnagrams(["abcd","dcba","bacd","cadb","abdc","cabd","abcd","dcba","bacd","cadb","abdc","cabd","mnop","ponm","omnp","nmop","mpno","pmno"]), ['abcd', 'mnop'], 'Test 35');
test(removeAnagrams(["aabbcc","baccab","abcabc","xyz","zyx","yxz","test","sett","tset","stet","ttes"]), ['aabbcc', 'xyz', 'test'], 'Test 36');
test(removeAnagrams(["listen","silent","enlist","google","gooegl","abc","cab","bac","bca","acb","cba","xyz","zyx","yxz"]), ['listen', 'google', 'abc', 'xyz'], 'Test 37');
test(removeAnagrams(["rat","tar","art","star","rats","tars","arts","tsar","chart","arch","cart","ract","track","krat","tract","crat","carr","rack","crab","back","bark","park","parking","arking","king","gnik","pink","kimp","pink","knip","kpin"]), ['rat', 'star', 'chart', 'arch', 'cart', 'track', 'krat', 'tract', 'crat', 'carr', 'rack', 'crab', 'back', 'bark', 'park', 'parking', 'arking', 'king', 'pink', 'kimp', 'pink'], 'Test 38');
test(removeAnagrams(["rat","tar","art","car","arc","par","arp","arc","rac","cat","tac","act","cta","atc","tca","pqr","qrp","rpq","prq","rqp","qpr","aabb","bbaa","abab","abba","aaaa","bbba","baab","aabb","baba","bbaa","cd","cd","efg","feg","gfe","geg","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm","nnn","ooo","ppp","qqq","rrr","sss","ttt","uuu","vvv","www","xxx","yyy","zzz"]), ['rat', 'car', 'par', 'arc', 'cat', 'pqr', 'aabb', 'aaaa', 'bbba', 'baab', 'cd', 'efg', 'geg', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk', 'lll', 'mmm', 'nnn', 'ooo', 'ppp', 'qqq', 'rrr', 'sss', 'ttt', 'uuu', 'vvv', 'www', 'xxx', 'yyy', 'zzz'], 'Test 39');
test(removeAnagrams(["race","care","acre","racecar","carrace","racecar","carrace","abc","bca","cab","xyz","zyx","yxz","zyxzyx","xzyzyz","yzyzyx"]), ['race', 'racecar', 'abc', 'xyz', 'zyxzyx', 'xzyzyz', 'yzyzyx'], 'Test 40');
test(removeAnagrams(["abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba"]), ['abcd'], 'Test 41');
test(removeAnagrams(["aaaa","aaab","aabb","abbb","bbbb","bbb","bb","b","a","abc","bac","cba","bca","cab","acb","xyz","zyx","yxz"]), ['aaaa', 'aaab', 'aabb', 'abbb', 'bbbb', 'bbb', 'bb', 'b', 'a', 'abc', 'xyz'], 'Test 42');
test(removeAnagrams(["rat","tar","art","dog","god","cat","act","tac","tack","rack","track","chart","cart"]), ['rat', 'dog', 'cat', 'tack', 'rack', 'track', 'chart', 'cart'], 'Test 43');
test(removeAnagrams(["abcde","edcba","decba","acdeb","badce","abcde","edcba","decba","acdeb","badce","abcde","edcba","decba","acdeb","badce","abcde","edcba","decba","acdeb","badce"]), ['abcde'], 'Test 44');
test(removeAnagrams(["anagram","nagaram","margana","anagram","margana","anagram","nagaram","margana","anagram","nagaram","margana","anagram","nagaram","margana","anagram","nagaram","margana","anagram","nagaram","margana"]), ['anagram'], 'Test 45');
test(removeAnagrams(["python","typhon","hypton","ypthon","phonto","opynth","ypthon","phonto","opynth","ypthon","phonto","opynth","ypthon","phonto","opynth"]), ['python', 'phonto', 'opynth', 'phonto', 'opynth', 'phonto', 'opynth', 'phonto', 'opynth'], 'Test 46');
test(removeAnagrams(["dormitory","dirtyroom","dirtyroom","dormitory","dirtyroom","dirtyroom","dormitory"]), ['dormitory'], 'Test 47');
test(removeAnagrams(["abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba"]), ['abcd'], 'Test 48');
test(removeAnagrams(["aaaaa","aaabb","aabba","abbaa","baaab","baaba","bbaaa","abcde","edcba","decba","cbade","badec"]), ['aaaaa', 'aaabb', 'abcde'], 'Test 49');
test(removeAnagrams(["listen","silent","enlist","google","gooegl","abc","bca","cab","xyz","zyx","yxz"]), ['listen', 'google', 'abc', 'xyz'], 'Test 50');
test(removeAnagrams(["race","care","acre","barc","racecar","carrace","racecar","carecar","abcde","edcba","bcdea","deabc","acdeb","decab"]), ['race', 'barc', 'racecar', 'abcde'], 'Test 51');
test(removeAnagrams(["triangle","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral","integral"]), ['triangle'], 'Test 52');
test(removeAnagrams(["aabbcc","abcabc","baccab","abccba","bacabc","aabbcc","abcd","dcba","cdab","bcda","badc","cabd"]), ['aabbcc', 'abcd'], 'Test 53');
test(removeAnagrams(["abcd","dcba","abcd","abcd","dcba","abcd","dcba","abcd","dcba"]), ['abcd'], 'Test 54');
test(removeAnagrams(["rat","tar","art","dog","god","cat","act","tac","abc","bca","cab","xyz","zyx","yxz"]), ['rat', 'dog', 'cat', 'abc', 'xyz'], 'Test 55');
test(removeAnagrams(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuvwxyzabcdefghijkl","defghijklmnopqrstuvwxyzabc","jklmnopqrstuvwxyzabcdefghi","pqrsutvwxyzabcdefghijklmno","nopqrstuvwxyzabcdefghijklm","mnopqrstuvwxyzabcdefghijklmno","opqrstuvwxyzabcdefghijklmno","pqrsutvwxyzabcdefghijklmno","nopqrstuvwxyzabcdefghijklm","mnopqrstuvwxyzabcdefghijklmno","opqrstuvwxyzabcdefghijklmno","pqrsutvwxyzabcdefghijklmno","nopqrstuvwxyzabcdefghijklm","mnopqrstuvwxyzabcdefghijklmno","opqrstuvwxyzabcdefghijklmno","pqrsutvwxyzabcdefghijklmno","nopqrstuvwxyzabcdefghijklm","mnopqrstuvwxyzabcdefghijklmno","opqrstuvwxyzabcdefghijklmno","pqrsutvwxyzabcdefghijklmno"]), ['abcdefghijklmnopqrstuvwxyz', 'mnopqrstuvwxyzabcdefghijklmno', 'opqrstuvwxyzabcdefghijklmno', 'pqrsutvwxyzabcdefghijklmno', 'mnopqrstuvwxyzabcdefghijklmno', 'opqrstuvwxyzabcdefghijklmno', 'pqrsutvwxyzabcdefghijklmno', 'mnopqrstuvwxyzabcdefghijklmno', 'opqrstuvwxyzabcdefghijklmno', 'pqrsutvwxyzabcdefghijklmno', 'mnopqrstuvwxyzabcdefghijklmno', 'opqrstuvwxyzabcdefghijklmno', 'pqrsutvwxyzabcdefghijklmno'], 'Test 56');
test(removeAnagrams(["hello","olleh","world","dlrow","python","nothpy","java","avaj","abcd","dcba","bacd","cadb","abdc","cabd"]), ['hello', 'world', 'python', 'java', 'abcd'], 'Test 57');
test(removeAnagrams(["anagram","nagaram","margana","ramnaga","gnamar","gnamar","gnamra","gnamra","gnamra","gnamra","gnamra","gnamra","gnamra"]), ['anagram', 'gnamar'], 'Test 58');
test(removeAnagrams(["listen","silent","enlist","google","gooegl","abc","bca","cab","xyz","zyx","zyx","xyz"]), ['listen', 'google', 'abc', 'xyz'], 'Test 59');
test(removeAnagrams(["aabbcc","baccab","cbaabc","abc","acb","bac","bca","cab","cba","xyz","zyx","yxz","zyx","xyz"]), ['aabbcc', 'abc', 'xyz'], 'Test 60');
test(removeAnagrams(["listen","silent","enlist","google","gooegl","abc","cab","bac","xyz","zyx","yxz","uvw","vuw","wuv"]), ['listen', 'google', 'abc', 'xyz', 'uvw'], 'Test 61');
test(removeAnagrams(["abcd","dcba","bacd","cadb","abdc","cabd","abcd","dcba","bacd","cadb","abdc","cabd"]), ['abcd'], 'Test 62');
test(removeAnagrams(["python","typhon","nohtyp","ypthon","hypnot","python","typhon","nohtyp","ypthon","hypnot","python","typhon","nohtyp","ypthon","hypnot","python","typhon","nohtyp","ypthon","hypnot"]), ['python'], 'Test 63');
test(removeAnagrams(["listen","silent","enlist","google","gooegl","inlets"]), ['listen', 'google', 'inlets'], 'Test 64');
test(removeAnagrams(["aabbcc","abcabc","baccab","cabcab","abacbc","bbacac","acbbca","aabbbc","aabbbc","aabbbc"]), ['aabbcc', 'aabbbc'], 'Test 65');
test(removeAnagrams(["abcd","dcba","cdab","bacd","cadb","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba"]), ['abcd'], 'Test 66');
test(removeAnagrams(["aabbcc","abcabc","baccab","xyz","zyx","yxz","mnop","ponm","omnp","nmop","mpno","pmno"]), ['aabbcc', 'xyz', 'mnop'], 'Test 67');
test(removeAnagrams(["abc","acb","bac","bca","cab","cba","abcd","abdc","acbd","acdb","adbc","adcb","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba","zzzz","zzz","zz","z"]), ['abc', 'abcd', 'zzzz', 'zzz', 'zz', 'z'], 'Test 68');
test(removeAnagrams(["ab","ba","aabb","bbaa","abab","baba","abba","baab","ab","ba"]), ['ab', 'aabb', 'ab'], 'Test 69');
test(removeAnagrams(["aabbcc","baccab","abcabc","abc","bac","cab","bac","abc","bac","cab","bac","abc","bac","abc","bac","abc","bac","abc","bac","abc","bac","abc","bac","abc","bac","abc","bac","abc","bac","abc","bac","abc"]), ['aabbcc', 'abc'], 'Test 70');
test(removeAnagrams(["abcd","dcba","abdc","cbad","bcad","adbc","dabc","cdab","dacb","cadb","acbd","bdac","bdca","abcd","dcba","abdc","cbad","bcad","adbc","dabc","cdab","dacb","cadb","acbd","bdac","bdca","abcd","dcba","abdc","cbad","bcad","adbc","dabc","cdab","dacb","cadb","acbd","bdac","bdca","abcd","dcba","abdc","cbad","bcad","adbc","dabc","cdab","dacb","cadb","acbd","bdac","bdca"]), ['abcd'], 'Test 71');
test(removeAnagrams(["aabbcc","abcabc","baccab","ccabba","cabacb","abcabc","aabbcc","xyzxyz","zyxzyx","yxzyxz","zyxzyx"]), ['aabbcc', 'xyzxyz'], 'Test 72');
test(removeAnagrams(["anagram","nagaram","margana","gnarama","granama","aaagmnr","ab","ba","abc","cba","abcd","dcba","xyz","zyx","yxz","test","sett","tset","stet","ttes","deed","deep","peed","depe","dpee","aabbcc","baccab","abcabc","rat","tar","art","dog","god","cat","act","tac","abcd","abdc","acbd","acdb","adbc","adcb","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba","zzzz","zzz","zz","z"]), ['anagram', 'ab', 'abc', 'abcd', 'xyz', 'test', 'deed', 'deep', 'aabbcc', 'rat', 'dog', 'cat', 'abcd', 'zzzz', 'zzz', 'zz', 'z'], 'Test 73');
test(removeAnagrams(["word","drow","dwor","owrd","abcd","dcba","cadb","bdac","abcd","dcba","cabd","bdac"]), ['word', 'abcd'], 'Test 74');
test(removeAnagrams(["abcd","dcba","abcd","abdc","abcd","dcba","abcd","dcba","abcd"]), ['abcd'], 'Test 75');
test(removeAnagrams(["anagram","nagaram","margana","anagram","nagaram","margana","anagram","nagaram"]), ['anagram'], 'Test 76');
test(removeAnagrams(["evil","vile","live","veil","liVE","EVIL"]), ['evil', 'liVE', 'EVIL'], 'Test 77');
test(removeAnagrams(["abcd","dcba","cdab","bacd","adcb","cbad","bcda","abcd","dcba","cdab","bacd","adcb","cbad","bcda"]), ['abcd'], 'Test 78');
test(removeAnagrams(["rat","tar","art","car","arc","arc","rca","arc","cat","tac","act","dog","god","god","ogd"]), ['rat', 'car', 'cat', 'dog'], 'Test 79');
test(removeAnagrams(["hello","billion","nillion","illonbi","onbilin","nnoblli","olnibin","lobinin","ollinbi","bloninl","bnoloni","noblinl","llinbon","lobinln","nilonbl","nonlibl","oblinln","nlonbil","oninlb","nobinll","binlonl","onlibnl","nbinlol","inlboon","libnoln","onilnbl","inlobnl","lnoibnl","nobllin","oinlnbl","onilb","nlibl","inlbn","lnbol","onbil","ilnob","lnoib","nlobi","olnib","blnio","bnlio","nliob","libon","inlob","onilb","nobil","inobl","onlbi","nobil","lobin","linbo","inolb","nolbi","libno","inlob","onilb","nobli","inobl","onlbi","nobil","lobin","linbo","inolb","nolbi","libno"]), ['hello', 'billion', 'nillion', 'illonbi', 'onbilin', 'nnoblli', 'olnibin', 'ollinbi', 'bloninl', 'bnoloni', 'noblinl', 'oninlb', 'nobinll', 'inlboon', 'libnoln', 'onilb', 'nlibl', 'inlbn', 'lnbol', 'onbil'], 'Test 80');
test(removeAnagrams(["aabb","abab","bbaa","abcd","dcba","cdab","bcda","mnop","ponm","opnm","nmop","qrst","srqt","qstr","tqrs","stqr","abcd","dcba","abcd","dcba","abcd"]), ['aabb', 'abcd', 'mnop', 'qrst', 'abcd'], 'Test 81');
test(removeAnagrams(["triangle","integral","integral","integral","triangle","integral"]), ['triangle'], 'Test 82');
test(removeAnagrams(["listen","silent","enlist","google","gooegl","abc","cab","bac","xyz","zyx","yxz","test","sett","tset","stet","ttes","deed","deep","peed","depe","dpee"]), ['listen', 'google', 'abc', 'xyz', 'test', 'deed', 'deep'], 'Test 83');
test(removeAnagrams(["deed","deep","peed","depe","dpee","abcd","dcba","cbad","adcb","bacd","cabd","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba","abcd","dcba"]), ['deed', 'deep', 'abcd'], 'Test 84');
test(removeAnagrams(["aabbcc","bbaacc","abcabc","cccccc","bbbaaa","aabbcc","ccbbdd"]), ['aabbcc', 'cccccc', 'bbbaaa', 'aabbcc', 'ccbbdd'], 'Test 85');
test(removeAnagrams(["anagram","nagaram","margana","gnarham","ramnaga","gramana","amnagar","mangara","gnarama","ramagna","amnagra","agranam","mangnra","gnanram","rangnam","anagram","nagaram","margana","gnarham","ramnaga","gramana","amnagar","mangara","gnarama","ramagna","amnagra","agranam","mangnra","gnanram","rangnam"]), ['anagram', 'gnarham', 'ramnaga', 'mangnra', 'anagram', 'gnarham', 'ramnaga', 'mangnra'], 'Test 86');

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
