// Test: 524. Longest Word In Dictionary Through Deleting
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { findLongestWord } = require("./solution");

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

console.log("\n524. Longest Word In Dictionary Through Deleting\n");

test(findLongestWord("", ["a","b","c"]), , 'Test 1');
test(findLongestWord("a", ["b","c","d"]), , 'Test 2');
test(findLongestWord("zcfzdb", ["a","b","c"]), b, 'Test 3');
test(findLongestWord("aaaaaaa", ["aaa","aaaa"]), aaaa, 'Test 4');
test(findLongestWord("aaaaaaa", ["aaaaaaa","aa","a","" ]), aaaaaaa, 'Test 5');
test(findLongestWord("xyz", ["x","y","z","xy","xyz"]), xyz, 'Test 6');
test(findLongestWord("apple", ["app","appl","applep"]), appl, 'Test 7');
test(findLongestWord("aaaa", ["aa","aaa","aaaa"]), aaaa, 'Test 8');
test(findLongestWord("abpcplea", ["a","b","c"]), a, 'Test 9');
test(findLongestWord("abcd", ["db", "abc", "ab", "b"]), abc, 'Test 10');
test(findLongestWord("", ["a", "b", "c"]), , 'Test 11');
test(findLongestWord("aaa", ["a","aa","aaa"]), aaa, 'Test 12');
test(findLongestWord("xyz", ["x","y","z","xy","yz","xyz"]), xyz, 'Test 13');
test(findLongestWord("aewfafwafjlwajflwajflwafj", ["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"]), ewaf, 'Test 14');
test(findLongestWord("abpcplea", ["ale","apple","monkey","plea"]), apple, 'Test 15');
test(findLongestWord("abcd", []), , 'Test 16');
test(findLongestWord("abcd", ["db","dc","bd","ac","cad"]), ac, 'Test 17');
test(findLongestWord("aewfafwafjlwajflwajflwafjlwafjl", ["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"]), ewaf, 'Test 18');
test(findLongestWord("xyz", ["xyzz", "zxy", "zyx"]), , 'Test 19');
test(findLongestWord("abcdabcdabcd", ["abcd","abc","ab","a","bc","bcd","abcdabcd","abcdabcdabcd","abcdabcda","bcdabcdabcd","abcabcabc"]), abcdabcdabcd, 'Test 20');
test(findLongestWord("abracadabra", ["ab", "abc", "abrac", "abraca", "abracadabra", "cadabra", "rac"]), abracadabra, 'Test 21');
test(findLongestWord("abcdefghijklmnopqrstuvwxyz", ["zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz", "mnopqrstuv"]), abcdefghijklmnopqrstuvwxyz, 'Test 22');
test(findLongestWord("banana", ["an", "banana", "anana", "nana", "ba", "ana", "aaa", "aa", "a", "b"]), banana, 'Test 23');
test(findLongestWord("thequickbrownfoxjumpsoverthelazydog", ["the", "quick", "brown", "fox", "jumps", "over", "lazy", "dog", "hello", "world", "python"]), brown, 'Test 24');
test(findLongestWord("mississippi", ["issi", "ppis", "miss", "ssip", "isip", "mississippi", "mis", "sip", "iss", "piss"]), mississippi, 'Test 25');
test(findLongestWord("abcdefghijklmnopqrstuvwxyz", ["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "ab", "cd"]), abcdefghijklmnopqrstuvwxyz, 'Test 26');
test(findLongestWord("vvvvvvvvvv", ["v","vv","vvv","vvvv","vvvvv","vvvvvv","vvvvvvv","vvvvvvvv","vvvvvvvvv","vvvvvvvvvv"]), vvvvvvvvvv, 'Test 27');
test(findLongestWord("mississippi", ["issi","miss","pissi","ppi","issipi","ississi","mississi","issippi"]), mississi, 'Test 28');
test(findLongestWord("abracadabra", ["abc", "abcd", "abrac", "cadabra", "abra"]), cadabra, 'Test 29');
test(findLongestWord("abcabcabc", ["abc", "abca", "abcb", "abcc", "aabbcc", "abcabc", "abcabca", "abcaabc"]), abcaabc, 'Test 30');
test(findLongestWord("mississippi", ["issi", "miss", "mississ", "issippi", "issippis"]), issippi, 'Test 31');
test(findLongestWord("abracadabra", ["abc","abcd","abracadabra","racad","abraca","cadabra","dabra","bra"]), abracadabra, 'Test 32');
test(findLongestWord("zyxwvutsrqponmlkjihgfedcba", ["zyx", "wvu", "tsr", "pon", "mlk", "jih", "gfed", "cba", "zyxwvut", "srqponmlkjihgfedcba"]), srqponmlkjihgfedcba, 'Test 33');
test(findLongestWord("babgbagagbagagbagagbag", ["bag","bags","bagga","baggage","bagag","bagagag","bagagaga","bagagagag","bagagagaga"]), bagagagaga, 'Test 34');
test(findLongestWord("abcdefghijklmnopqrstuvwxyz", ["abc","def","ghijk","lmnop","qrstuv","wxyz"]), qrstuv, 'Test 35');
test(findLongestWord("abcdeffedcba", ["abcd", "abce", "abcf", "abde", "abdf", "acde", "acdf", "adef", "bcde", "bcdf", "bcef", "bdef", "cdef"]), abcd, 'Test 36');
test(findLongestWord("aabbbccddeeff", ["abc", "abcd", "abde", "acde", "aabbccddeeff", "abcde"]), aabbccddeeff, 'Test 37');
test(findLongestWord("bananaanananannanana", ["ana", "anan", "anana", "ananas", "banana", "bananana", "ananan", "nananan"]), bananana, 'Test 38');
test(findLongestWord("aaaabaaaabaaaaabaaaabaaaab", ["ab","aba","abab","ababa","ababab","abababa","abababab"]), abababab, 'Test 39');
test(findLongestWord("mississippi", ["is", "ppi", "missi", "missis", "mississi", "mississipp"]), mississipp, 'Test 40');
test(findLongestWord("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["abcdefghij", "klmnopqrstu", "vwxyz", "mnop", "abcd", "mnopqr", "ghijkl", "efgh", "mnopqrstuv", "vwxyzabc"]), klmnopqrstu, 'Test 41');
test(findLongestWord("abcdeabcdeabcde", ["abcde", "abcdee", "abcd", "abcdeeabcde", "abcdeabcdeabcde"]), abcdeabcdeabcde, 'Test 42');
test(findLongestWord("abcdefghijklmno", ["abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk", "abcdefghijkl", "abcdefghijklm", "abcdefghijklmn", "abcdefghijklmno"]), abcdefghijklmno, 'Test 43');
test(findLongestWord("longwordwithmanycharacters", ["long", "word", "with", "many", "characters", "longword", "longwordwith", "withmany", "manycharacters", "longwordwithmany", "wordwithmany", "wordwithmanycharacters"]), wordwithmanycharacters, 'Test 44');
test(findLongestWord("leetcode", ["leet", "leetc", "lee", "code", "leetcod", "cod", "ode", "leetode", "leetcoded", "teecode"]), leetcod, 'Test 45');
test(findLongestWord("abcxyz", ["abc", "bca", "cab", "xyz", "zyx"]), abc, 'Test 46');
test(findLongestWord("thisisaverylongstringthatwilltestourfunction", ["this","is","a","very","long","string","that","will","test","our","function","thisisaverylongstringthatwilltestourfunction"]), thisisaverylongstringthatwilltestourfunction, 'Test 47');
test(findLongestWord("abacaxbabax", ["aba", "abacax", "bacab", "cab", "bacabc", "abcabc"]), abacax, 'Test 48');
test(findLongestWord("mississippi", ["mis", "issi", "issip", "ippi", "ppi", "pip", "pis", "is", "i"]), issip, 'Test 49');
test(findLongestWord("mississippi", ["issi","miss","pippi","mippi","mississippi"]), mississippi, 'Test 50');
test(findLongestWord("zyxwvutsrqponmlkjihgfedcba", ["zyx", "zyxwv", "zyxwvutsrqponmlkjihgfedcba", "zyxwvutsrqponmlkjihgfedcb", "zyxwvutsrqponmlkjihgfedc", "zyxwvutsrqponmlkjihgfed", "zyxwvutsrqponmlkjihgfe", "zyxwvutsrqponmlkjihgf", "zyxwvutsrqponmlkjihg", "zyxwvutsrqponmlkjih", "zyxwvutsrqponmlkji", "zyxwvutsrqponmlkj", "zyxwvutsrqponmlk", "zyxwvutsrqponml", "zyxwvutsrqponm", "zyxwvutsrqpon", "zyxwvutsrqpo", "zyxwvutsrqp", "zyxwvutsrq", "zyxwvutsr", "zyxwvuts", "zyxwvut", "zyxwvu", "zyxwv", "zyxw", "zyx", "zy", "z"]), zyxwvutsrqponmlkjihgfedcba, 'Test 51');
test(findLongestWord("aaaaabbbbcccc", ["abc", "acb", "bac", "bca", "cab", "cba", "aaa", "bbb", "ccc", "aabb", "abcc", "bbcc", "aabbcc", "ab", "bc", "ca", "bb", "cc", "aa"]), aabbcc, 'Test 52');
test(findLongestWord("programmingisfun", ["pro","gram","ming","is","fun","program","programming","programmin","programmingi","programmingis","programmingisf","programmingisfu","programmingisfun","programmingisfunn","programmingisfuns"]), programmingisfun, 'Test 53');
test(findLongestWord("mississippi", ["miss", "piss", "misp", "issi", "issipp"]), issipp, 'Test 54');
test(findLongestWord("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", ["zzzzzzzzzz", "zzzzzzzz", "zzzzzzz", "zzzzzz", "zzzzz", "zzzz", "zzz", "zz", "z"]), zzzzzzzzzz, 'Test 55');
test(findLongestWord("babgbag", ["bag","bgb","ggb","bbag","baggb"]), bbag, 'Test 56');
test(findLongestWord("bananaaa", ["baaa", "ban", "anana", "nana", "banan", "anan", "na", "n", "a", "b", "ba", "ban", "bana", "banan", "banana", "bananaa"]), bananaa, 'Test 57');
test(findLongestWord("mississippi", ["issi", "missi", "issipi", "mississippi", "mis", "pi"]), mississippi, 'Test 58');
test(findLongestWord("abcdefghijklmnopqrstuvwxyz", ["zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxy"]), abcdefghijklmnopqrstuvwxyz, 'Test 59');
test(findLongestWord("abcdefghijklmnopqrstuvwxyz", ["zyx", "yxz", "xyz", "abcdefghijklmnopqrstuvwxyzz", "abcdefghijklmnopqrstuvwxyz"]), abcdefghijklmnopqrstuvwxyz, 'Test 60');
test(findLongestWord("abracadabra", ["bra","abr","cad","acad","a","abracadabra"]), abracadabra, 'Test 61');
test(findLongestWord("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz", "zzyx"]), abc, 'Test 62');
test(findLongestWord("abcdefghij", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "abcdefghij", "abcdefghijk", "abcdefghi", "abcdefgh", "abcdefg", "abcdef", "abcde", "abcd", "abc", "ab", "a"]), abcdefghij, 'Test 63');
test(findLongestWord("xxyyzz", ["xyz", "xyzz", "xzyz", "xzy", "yzx", "zyx", "zx", "yx", "xz", "zy"]), xyzz, 'Test 64');
test(findLongestWord("babbbbaabbaaaaabbaabbbabbbaaabbbbbabababbbababbbbbbbbbaabbaaaabbabbbaababbaabbbaaaabbbbbbaaaabbabbbaaaabbaaabbaabba", ["babbbbaabbaaaaaaba","babbbaaabbbaabbbba","bbbaabbbaaaaaababb","bbbabbbbaabbaaaaaabb","abababbaabbbaababa","bbbbbabbaabbaaaaaa","babbbbaaaabbaaaaaa","abbbbabbaaaabbaabaa","baabaaaabaaabaaaab"]), bbbabbbbaabbaaaaaabb, 'Test 65');
test(findLongestWord("kfkfkfkfkfkfkfkfkfkfkfkfkfkfkfkf", ["kfk", "fkf", "kfkf", "fkfk", "kfkfkf", "fkfkfk"]), fkfkfk, 'Test 66');
test(findLongestWord("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxy", "qrstuvwxy", "wxyz", "uvw", "vw", "w"]), abcdefghijklmnopqrstuvwxyz, 'Test 67');
test(findLongestWord("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["aabbcc", "ddeeff", "gghhiijj", "kkllmm", "nnoopp", "qqrrst", "tuuvvw", "xxyyzz", "zzzyyx"]), gghhiijj, 'Test 68');
test(findLongestWord("a", ["b", "c", "d", "e", "f", "g"]), , 'Test 69');
test(findLongestWord("leetcodeisgreat", ["leet","code","is","great","leetcode","leetcodes","leetcodeis","leetcodeisgreat","etcodeisgreat"]), leetcodeisgreat, 'Test 70');
test(findLongestWord("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabb", ["aabba","aabbaabb","aabbaabbaabb","aabbaabbaabbaabb","aabbaabbaabbaabbaabb","aabbaabbaabbaabbaabbaabb"]), aabbaabbaabbaabbaabbaabb, 'Test 71');
test(findLongestWord("longestwordinadictionary", ["longestword", "word", "dictionary", "in", "a", "longest", "long"]), longestword, 'Test 72');
test(findLongestWord("llllllllllllllllllllllllllllllllllllllllll", ["l","ll","lll","llll","lllll","llllll","lllllll","llllllll","lllllllll","llllllllll","lllllllllll","llllllllllll","lllllllllllll","llllllllllllll","lllllllllllllll","llllllllllllllll","lllllllllllllllll","llllllllllllllllll"]), llllllllllllllllll, 'Test 73');
test(findLongestWord("aaabbcccddd", ["aabbbcccddd", "aabbbccc", "aabbcc", "aabc", "abc", "a", "b", "c"]), aabbcc, 'Test 74');
test(findLongestWord("ababcababc", ["ab", "abc", "ababc", "aabbcc", "aabbc", "abab", "abba", "ababab", "babab", "abcabcabc"]), ababab, 'Test 75');
test(findLongestWord("ababcabcabc", ["abc", "abca", "abcab", "abcabc", "abcabcd"]), abcabc, 'Test 76');
test(findLongestWord("abcdefghijklmnopqrstuvwxyz", ["zyxwvutsrqponmlkjihgfedcba","nopqrstuvwxy","mnopqrstuvwx","lmnopqrstu","klmnopqr","jklmnop","ijklmno","ijklm","ijkl","ijk","ij","i"]), mnopqrstuvwx, 'Test 77');
test(findLongestWord("aaaaaaa", ["aaaa", "aa", "a", "aaa", "aaaaa", "aaaaaa"]), aaaaaa, 'Test 78');
test(findLongestWord("zyxwvutsrqponmlkjihgfedcba", ["zyx","wvut","srqpo","nmlkj","ihgfedcba","mnopqrstu","zyxwvutsrqponmlkjihgfedcba"]), zyxwvutsrqponmlkjihgfedcba, 'Test 79');
test(findLongestWord("longestword", ["long", "longer", "longest", "longestw", "longestwo", "longestwor", "longestword", "longestworde"]), longestword, 'Test 80');
test(findLongestWord("qwertyuiopasdfghjklzxcvbnm", ["qwerty","asdfgh","zxcvbn","mnbvcxz","lkjhgfdsa","poiuytrewq","uytrewqpo","uytres","yuiop","poiuyt","poiuy","poiu","po","p","zxcvbn","qwerty","asdfghjklzxcvbnm","qwertyuiopasdfghjklzxcvbnm","qwertyuiopasdfghjklzzzzzzzz","zxcvbnmlkjhgfdsapoiuytrewq"]), qwertyuiopasdfghjklzxcvbnm, 'Test 81');
test(findLongestWord("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd", ["aaaabbbbccccddd", "bbbccccddd", "ccccddd", "ddd", "ccc", "bbb", "aaa", "aaabbb", "bbcccc", "ccccdd", "ddd"]), aaaabbbbccccddd, 'Test 82');
test(findLongestWord("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", ["abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd","abcdabcdabcdabcdabcdabcdabcdabcdabcdabc","abcdabcdabcdabcdabcdabcdabcdabcdabcdab","abcdabcdabcdabcdabcdabcdabcdabcdabcd","abcdabcdabcdabcdabcdabcdabcdabcdabc","abcdabcdabcdabcdabcdabcdabcdabcdab","abcdabcdabcdabcdabcdabcdabcdabcd"]), abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd, 'Test 83');
test(findLongestWord("lletscodeleet", ["code", "let", "lets", "leetc", "leet", "leetcode", "ccode", "lcode"]), lcode, 'Test 84');
test(findLongestWord("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["zz", "yy", "xx", "ww", "vv", "uu", "tt", "ss", "rr", "qq", "pp", "oo", "nn", "mm", "ll", "kk", "jj", "ii", "hh", "gg", "ff", "ee", "dd", "cc", "bb", "aa"]), aa, 'Test 85');
test(findLongestWord("mississippi", ["miss","missi","missis","mississ","mississi","mississip","mississipp","mississippi"]), mississippi, 'Test 86');
test(findLongestWord("aaaabbbbcccc", ["abc","aab","bbcc","aabbcc","aaabbbccc","ccccbbbbaaa","aaaabbbbcccc"]), aaaabbbbcccc, 'Test 87');
test(findLongestWord("abcdefghij", ["abc", "def", "ghi", "j", "abcdefghij", "abcd", "efgh", "ijkl", "ghij"]), abcdefghij, 'Test 88');
test(findLongestWord("supercalifragilisticexpialidocious", ["super", "cali", "fragilistic", "expialidocious", "docious", "ocious", "cious", "ious", "ous", "us", "s", "ex", "pi", "li", "tic", "exp", "cal", "sup", "era", "istic"]), expialidocious, 'Test 89');
test(findLongestWord("pppqqqrrrsssttt", ["ppqrs", "pqr", "pppp", "qqqq", "rrrr", "ssss", "tttt", "pqqqrrrsttt", "pppqqqrrrssttt"]), pppqqqrrrssttt, 'Test 90');
test(findLongestWord("abcdabcdabcd", ["abcd", "abc", "ab", "a", "abcdabcdabcd", "abcdabcd", "bcd", "cd", "d", "abcdabcda", "bcdabcd", "cdabcd", "dabcd"]), abcdabcdabcd, 'Test 91');
test(findLongestWord("abcdefghijklmnopqrstuvwxyz", ["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"]), abcdefghijklmnopqrstuvwxyz, 'Test 92');
test(findLongestWord("banana", ["ban", "banana", "banan", "bananas", "anana", "ana", "nana", "na", "a"]), banana, 'Test 93');
test(findLongestWord("banana", ["ban", "anana", "nana", "banan", "anan", "na", "n", "a", "b", "ba", "ban", "bana", "banan", "banana"]), banana, 'Test 94');

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
