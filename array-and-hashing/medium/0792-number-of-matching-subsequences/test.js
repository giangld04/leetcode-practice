// Test: 792. Number Of Matching Subsequences
// 56 test cases from LeetCodeDataset
// Run: node test.js

const { numMatchingSubseq } = require("./solution");

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

console.log("\n792. Number Of Matching Subsequences\n");

test(numMatchingSubseq("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]), 2, 'Test 1');
test(numMatchingSubseq("abcde", ["a","bb","acd","ace"]), 3, 'Test 2');
test(numMatchingSubseq("qwertyuiopasdfghjklzxcvbnm", ["qz","qp","qw","qr","qe","qt","qu","qi","qo","qp","qa","qs","qd","qf","qg","qh","qj","qk","ql","qm","zn","zm","zk","zj","zh","zg","zf","qe","qd","qc","qb","qa","zv","zu","zt","zs","zr","zp","zo","zn","zm","zk","zj","zh","zg","zf","ze","zd","zc","zb","za"]), 32, 'Test 3');
test(numMatchingSubseq("mississippi", ["miss","issi","ssip","ppis","isip","ippi","sipi","sspi","issp"]), 8, 'Test 4');
test(numMatchingSubseq("longstringwithvariouscharacters", ["long","string","with","various","characters","longstring","withvarious"]), 7, 'Test 5');
test(numMatchingSubseq("aaaaabbbbbcccc", ["aaabbb","bbcc","abac","aabb","accc","bbbc","cccc","bbbb","aabbcc"]), 8, 'Test 6');
test(numMatchingSubseq("abacabadabacaba", ["aba","abc","bac","bca","cab","acb","a","b","c","d","ab","ba","bc","cb","ac","ca"]), 16, 'Test 7');
test(numMatchingSubseq("aaaaaaaaaaa", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), 10, 'Test 8');
test(numMatchingSubseq("mississippi", ["is","issi","miss","issip","ppi","ipi","mississippi"]), 7, 'Test 9');
test(numMatchingSubseq("thefastbrownfoxjumpsoverthelazydog", ["the","fast","brown","fox","jumps","over","lazy","dog","thebrownfox","jumpsoverthelazy"]), 10, 'Test 10');
test(numMatchingSubseq("abcdefghijklmnopqrstuvwxyz", ["abc","xyz","mnopqr","uvw","zabcdefghijklmnopqrst"]), 4, 'Test 11');
test(numMatchingSubseq("qwertyuiopasdfghjklzxcvbnm", ["qwerty","asdfgh","zxcvbn","pol","lkjhg","mnbvcxz","yuiop","poiuyt","hgfdsa","xcvbnm","qwertyuiop","asdfghjklzxcvbnm"]), 7, 'Test 12');
test(numMatchingSubseq("mississippi", ["miss", "issi", "ssip", "ssissipp", "is", "mp", "ms", "s", "i", "p", "pp", "ip", "mississippi", "mississ", "issipp"]), 15, 'Test 13');
test(numMatchingSubseq("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","aaa","bbb","ccc"]), 9, 'Test 14');
test(numMatchingSubseq("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz", "abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yzab", "cdef", "ghij", "klmn", "opqr", "stuv", "wxyz"]), 21, 'Test 15');
test(numMatchingSubseq("abcabcabcabc", ["abc","abcabc","abcabcabc","abcabcabcabc","ab","bc","ca","a","b","c"]), 10, 'Test 16');
test(numMatchingSubseq("ababababab", ["ab","aba","aab","baba","babababababab"]), 4, 'Test 17');
test(numMatchingSubseq("mississippi", ["issi","miss","mip","issip","issipp","mpis","mississippi"]), 6, 'Test 18');
test(numMatchingSubseq("thisisaverylongandrandomstring", ["this", "is", "very", "long", "and", "random", "string", "av", "er", "ry", "on", "nd", "ra", "nd", "om", "mi", "st", "in", "ng"]), 19, 'Test 19');
test(numMatchingSubseq("repeatedcharacters", ["repe","peate","atedchar","char","acter","ters","repeatedcharacters"]), 7, 'Test 20');
test(numMatchingSubseq("abcabcabcabc", ["abc","cab","bac","aaa","bbb","ccc","abcabc","abcbca","bcbcab","cabcab","abcabcabc","bcabcabc","cabcabca","a","b","c"]), 16, 'Test 21');
test(numMatchingSubseq("babcabcabcabcabc", ["ba","ca","ab","bc","ac","abc","bac","bca","cab","cba","acb","bba","aaa","ccc"]), 14, 'Test 22');
test(numMatchingSubseq("abcdefghijklmnopqrstuvwxyz", ["abc","xyz","def","uvw","mnopqr","st","ghijkl"]), 7, 'Test 23');
test(numMatchingSubseq("hellohellohellohello", ["he", "lo", "ell", "hell", "hello", "heell", "hellohe", "helloell", "helloello", "hellohello", "hellohelloh", "hellohellohe", "hellohelloell", "hellohelloello", "hellohellohello"]), 15, 'Test 24');
test(numMatchingSubseq("abracadabra", ["abra", "rac", "cad", "bra", "dabra", "abra", "acad", "bracad", "bracadabra", "bracadabr", "abracadabr", "bracadabraa", "bracadabrac"]), 11, 'Test 25');
test(numMatchingSubseq("aaaaaaaaaaaaaaaaaa", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), 10, 'Test 26');
test(numMatchingSubseq("abcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]), 9, 'Test 27');
test(numMatchingSubseq("abacabadabacaba", ["aba","abc","bac","bca","cab","cba"]), 6, 'Test 28');
test(numMatchingSubseq("zzzzzzzzzz", ["z","zz","zzz","zzzz","zzzzz","zzzzzz","zzzzzzz","zzzzzzzz","zzzzzzzzz","zzzzzzzzzz"]), 10, 'Test 29');
test(numMatchingSubseq("qwertyuiopasdfghjklzxcvbnm", ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]), 26, 'Test 30');
test(numMatchingSubseq("abracadabra", ["abr","rac","aca","dab","bra","cad","bra","abra","brac","acad","radab","cabra","rabrac","acadabra","adabra","bracadabra","acabracadabra"]), 15, 'Test 31');
test(numMatchingSubseq("abcdefghijklmnopqrstuvwxyz", ["a","z","abc","xyz","abcdefghijklmnopqrstuvwxyzz"]), 4, 'Test 32');
test(numMatchingSubseq("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", ["z","zz","zzz","zzzz","zzzzz","zzzzzz","zzzzzzz","zzzzzzzz","zzzzzzzzz","zzzzzzzzzz"]), 10, 'Test 33');
test(numMatchingSubseq("abcdefghijklmnopqrstuvwxyz", ["abc", "xyz", "mnop", "qrstuv", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]), 31, 'Test 34');
test(numMatchingSubseq("ababababababababababababababababababababababab", ["aa","ab","ba","bb","aab","aba","abb","bba","bab","bbb","aaaa","abab","baba","abba","baab","abaa","bbaa","aabb","abbb","baaa","baab","baaa","bbab","bbba","bbbb","aaaaaaaa","abababab","babababa","ababababa","babababab"]), 30, 'Test 35');
test(numMatchingSubseq("mississippi", ["miss","issi","ippi","ssss","ppii","mississi","issippi","mississippi","mpis","ppis","ipis","mipp","ssip","piss","missippi","missisipp","ississippi","ssissippi","ippii","sippi","pissi","issis","missis","ssssip","pisssippi","issippis","pississi","sissippii","ppisssippi","mississippipp","ississipp","ppississippi","sippisippi","issississi","ppississippi","mississippippi","issississipp","ppissississi","sissississippi","issississippippi"]), 18, 'Test 36');
test(numMatchingSubseq("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", ["z","zz","zzz","zzzz","zzzzz"]), 5, 'Test 37');
test(numMatchingSubseq("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"]), 12, 'Test 38');
test(numMatchingSubseq("leetcodeisacommunityforcoders", ["leetcode","is","acommunity","of","coders","comm","s","t"]), 8, 'Test 39');
test(numMatchingSubseq("abababababababababababababababababababababababababab", ["aa","bb","ab","ba","aab","abb","bab","bba"]), 8, 'Test 40');
test(numMatchingSubseq("bbaaaaabbbb", ["bb","aaaa","bbb","baab","abba","aaaaa","bbbbb","bababa","bbbbba","ababab","bbabba"]), 6, 'Test 41');
test(numMatchingSubseq("aaaaaaaabbbbbbbbccccccccdddddddd", ["aaaa","bbbb","cccc","dddd","abdc","dcba","abcd","dcba","aabb","bbcc","ccdd","dddd","ac","bd","ca","db"]), 11, 'Test 42');
test(numMatchingSubseq("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", ["zz","zzz","zzzz","zzzzz","zzzzzz"]), 5, 'Test 43');
test(numMatchingSubseq("qwertyuiopasdfghjklzxcvbnm", ["qaz","wsx","edc","rfv","tgb","yhn","ujm","ikl","opy","asdf","ghjkl","zxcvbnm","ertyui","poiuyt","lkjhgfdsa","nmolkjiuhgfedcba"]), 12, 'Test 44');
test(numMatchingSubseq("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", ["xyz", "xy", "yz", "xz", "xx", "yy", "zz", "xzy", "yzx", "zxy", "xyzxyz", "xyxyxy", "yzyzyz", "xzxzxz", "xxx", "yyy", "zzz", "xzyxzyxzy", "yzxyzxyz", "zxzyzxzyz", "xyzxyzxyzxyz"]), 21, 'Test 45');
test(numMatchingSubseq("aaaaaa", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]), 6, 'Test 46');
test(numMatchingSubseq("lkjhgfdsapoiuytrewq", ["poi","uyt","rew","qwe","lkj","hgf","dsa","lkjh","gfds","poiu","uytr","trew","qwe","lkjhg","gfdsa","poiu","uytrw","trewq"]), 16, 'Test 47');
test(numMatchingSubseq("abacabadabacaba", ["aba","abc","aca","ada","baa","bac","bda","cab","cad","cda","daa","dac","dba"]), 13, 'Test 48');
test(numMatchingSubseq("aaaaaaaaaaaaaaa", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), 10, 'Test 49');
test(numMatchingSubseq("abcdefghijklmnopqrstuvwxyz", ["abc","mnop","xyz","qrstuv","wxyz","defghijkl","nopqrstuv"]), 7, 'Test 50');
test(numMatchingSubseq("aaaaaaaaaaaaaaa", ["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), 9, 'Test 51');
test(numMatchingSubseq("abababababababababababab", ["aba","bab","aaa","bbb","aab","aba","aabbaa","bbbabb","ab","ba","aa","bb","abab","baba","ababa","babab","ababab","bababa"]), 18, 'Test 52');
test(numMatchingSubseq("bcbabbbbaabaaabaababbbbbbaaabbbabbababbababba", ["bb","ba","bbba","bab","bbab","aa","aaa","aaaa","aaaaa","a","b","ab","ba","aba","bab","bba","abb","aab","bbb","bbbba"]), 20, 'Test 53');
test(numMatchingSubseq("thisisaverylongstringwithseveralrepetitions", ["this","is","a","very","long","string","with","several","repetitions","verylong","stringwith","longstring","thisisavery","averylongstring","thisisaverylongstringwithseveralrepetitions"]), 15, 'Test 54');
test(numMatchingSubseq("abcdefghijklmnopqrstuvwxyz", ["abc","xyz","abcd","uvw","wxyz","mnopqr","def","ghi","jkl","stu"]), 10, 'Test 55');
test(numMatchingSubseq("zyxwvutsrqponmlkjihgfedcba", ["zyx","wvut","srqp","onml","kjih","gfed","cba","abc"]), 7, 'Test 56');

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
