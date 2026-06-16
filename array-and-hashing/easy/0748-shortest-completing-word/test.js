// Test: 748. Shortest Completing Word
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { shortestCompletingWord } = require("./solution");

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

console.log("\n748. Shortest Completing Word\n");

test(shortestCompletingWord("GrC8950", ["grace","please"]), grace, 'Test 1');
test(shortestCompletingWord("Ah71752", ["enough","these","playground","point","president"]), null, 'Test 2');
test(shortestCompletingWord("xyz", ["xzy", "zyx", "yxz", "zxy"]), xzy, 'Test 3');
test(shortestCompletingWord("44472Ml", ["call","tall","tell"]), null, 'Test 4');
test(shortestCompletingWord("a 1 b 2 c 3", ["abc", "cab", "bac", "bca", "acb", "cba"]), abc, 'Test 5');
test(shortestCompletingWord("1s3 456", ["looks","pest","stew","show"]), pest, 'Test 6');
test(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"]), steps, 'Test 7');
test(shortestCompletingWord("aBc 12c", ["abccdef", "caaacab", "cbca"]), cbca, 'Test 8');
test(shortestCompletingWord("a1b2c3d4e5f6g7", ["abcdefg","defghij","ghijklm","abcdefghijk","abcdeghijk","abcdefg","abcdefg"]), abcdefg, 'Test 9');
test(shortestCompletingWord("g7h6i5j4k3l2m1n0", ["highlight","jimmy","mink","gnimmik","kliming","jimmyhighlight"]), null, 'Test 10');
test(shortestCompletingWord("zZyYxX", ["zyx","yxz","xyzzyx","zyxzyx","zzzyyx","zyzyzy","xyzzyxzyx"]), xyzzyx, 'Test 11');
test(shortestCompletingWord("hello world!", ["heloworld", "worldhello", "helloworld", "oworlhell", "rldhellow"]), worldhello, 'Test 12');
test(shortestCompletingWord("q9w8e7r6t5y4u3i2o1p0", ["quickbrownfox","quizzify","piano","typewriter","pizzafactory","qwertyuiop"]), qwertyuiop, 'Test 13');
test(shortestCompletingWord("XYZ 789", ["xylophone","xyzzy","zyxwvutsrqponmlkjihgfedcba","zyxzyxzyx"]), xyzzy, 'Test 14');
test(shortestCompletingWord("M1n2o3r4s5", ["modern","store","monarchs","morse","minors","modes","monsters"]), minors, 'Test 15');
test(shortestCompletingWord("A1b2C3d4", ["completeword","complete","abcd","bacdc","badac"]), abcd, 'Test 16');
test(shortestCompletingWord("q1w2e3r4t5y6", ["qwerty","typerq","rqwety","wertyq","eqwrt","rqwet","qwetrt","qwrtqe","qwertyu"]), qwerty, 'Test 17');
test(shortestCompletingWord("A1B2C3D4E5F6", ["abcdef","defabc","fedcba","abcdfe","abcdefg","abcdefh","abcdefij"]), abcdef, 'Test 18');
test(shortestCompletingWord("z9 x8 v7", ["zebra", "vex", "vez", "vexing", "exhibition"]), null, 'Test 19');
test(shortestCompletingWord("zzz", ["zzzzzz", "zzzz", "zzz", "zzzzz", "zzzzzzz"]), zzz, 'Test 20');
test(shortestCompletingWord("9A8B7C6D5E4F3G2H1I0J", ["abcdefghij", "jihgfedcba", "abcdefghijk", "abcdefghi", "abcdefghijl"]), abcdefghij, 'Test 21');
test(shortestCompletingWord("z9y8x7w6v5u4t3s2r1q0", ["qrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","reverse","alphabet","zebra","quran"]), qrstuvwxyz, 'Test 22');
test(shortestCompletingWord("qqq rrr sss", ["qqrrrss", "rrssqqq", "ssqqqrrr", "qqqrrrsss", "ssqqqqrrr"]), qqqrrrsss, 'Test 23');
test(shortestCompletingWord("G7H2K3L4", ["ghkl", "hklg", "klhg", "klgh", "gkhll", "hgkl"]), ghkl, 'Test 24');
test(shortestCompletingWord("9gI2d4e5", ["guide","gifted","digging","gigged","gadget","gigged","gagged","gagged","gagged"]), guide, 'Test 25');
test(shortestCompletingWord("l3i2k4e5", ["like","liker","likely","likeable","likeless"]), like, 'Test 26');
test(shortestCompletingWord("m1n2o3r4", ["immortal","monarch","romantic","moronic","motorcar"]), monarch, 'Test 27');
test(shortestCompletingWord("f9g8h7j6k5", ["fjkg","ghfk","jkhg","kjgf","hjgk"]), null, 'Test 28');
test(shortestCompletingWord("4b 5c2 D", ["bcd","bcdcd","bcdc","bbcd","bcdb"]), bcd, 'Test 29');
test(shortestCompletingWord("3Rd sTreet", ["street","retreat","store","restrain","sterret","druster"]), null, 'Test 30');
test(shortestCompletingWord("aA1bB2cC", ["abc","aabbcc","abbc","aabbc","aabbbc","aabbbcc","aabbbccc"]), aabbcc, 'Test 31');
test(shortestCompletingWord("mN2mN3", ["mnm","nmn","mmn","mnn","nmm","nmmm","nmmn"]), nmmn, 'Test 32');
test(shortestCompletingWord("q2w3e4r5t6y7u8i9o0p", ["typewriter","opposite","ipyroteur","preoptuitry","pyroteurizing"]), null, 'Test 33');
test(shortestCompletingWord("1234567", ["abcdefg", "bcadefg", "cbadefg", "bcaefdg", "bcaefdgh"]), abcdefg, 'Test 34');
test(shortestCompletingWord("x9Y8Z7", ["xyz","xyzz","yxz","zyx","zxzyx","zyzzzyx"]), xyz, 'Test 35');
test(shortestCompletingWord("mMnN oO pP", ["mnop", "mnooop", "mnoppp", "mnopppp", "mnoppppp"]), null, 'Test 36');
test(shortestCompletingWord("aBc12d3E", ["abcde", "abced", "abcdef", "abcd", "abcccde"]), abcde, 'Test 37');
test(shortestCompletingWord("xyz XYZ", ["xyzz","yzxx","zxzy","zyxzyx","zyxzyxz"]), zyxzyx, 'Test 38');
test(shortestCompletingWord("aBc123cD", ["abcd","abcc","accc","aabbccdd","abcde"]), aabbccdd, 'Test 39');
test(shortestCompletingWord("z1y2x3w4", ["xyzz","yzxz","zxzy","wxyz","zyxw"]), wxyz, 'Test 40');
test(shortestCompletingWord("zzzzz", ["zzzz", "zzz", "zzzzzz", "zzzzz", "zzzzzzz", "zzzzzzzz"]), zzzzz, 'Test 41');
test(shortestCompletingWord("aAaAa 123", ["aaaaa","aaabc","aabbc","abcde","abbbb","abcdaa"]), aaaaa, 'Test 42');
test(shortestCompletingWord("aAaAaA", ["aaaaaa", "aaaaaab", "aaaaaabc", "aaaaaabcd", "aaaaaabcde"]), aaaaaa, 'Test 43');
test(shortestCompletingWord("9A1B2C3D4E5F6G7H", ["abcdefgh", "bacdefgh", "cabdefgh", "abcdefghi", "abcdefg"]), abcdefgh, 'Test 44');
test(shortestCompletingWord("aA1Bb2Cc3", ["aabbcc", "bbaacc", "ccaabb", "aabbcccc", "aaabbbcc", "aabbcccd"]), aabbcc, 'Test 45');
test(shortestCompletingWord("oNe TwO thReE", ["onetwothree","twothreeone","onethreetwo","threetwoone","onetwoonetwo","twotoonetwo","threethreetwo"]), onetwothree, 'Test 46');
test(shortestCompletingWord("aBcDeFgHiJ1234567890", ["abcdefghij", "bacdefghij", "jihgfedcba", "abcdefghijk", "abcdefghijj"]), abcdefghij, 'Test 47');
test(shortestCompletingWord("s9p8a7t6e5", ["pastel","pasteler","paste","pastoral","past","pastor","pasta"]), paste, 'Test 48');
test(shortestCompletingWord("XyZ 890", ["xyz", "xyzz", "xzyz", "zyxzy", "zyzzx"]), xyz, 'Test 49');
test(shortestCompletingWord("XYZ", ["xylophone", "xylem", "yxz", "zyx", "zyxwvut"]), yxz, 'Test 50');
test(shortestCompletingWord("Z9y2z", ["buzzards","zyzzyva","yz","zyzzy","zzyzzy"]), zyzzy, 'Test 51');
test(shortestCompletingWord("XyZ9", ["zyx","xyzzy","yzzx","xyzz","zyzzxy"]), zyx, 'Test 52');
test(shortestCompletingWord("f9o8x7", ["fox","foxy","foxtrot","fix","fixes","foxtrotted","foxtrotter"]), fox, 'Test 53');
test(shortestCompletingWord("XYZ 123", ["exactly","xyzzyx","zyxzyx","zyzyzx","zyzyxzyx"]), xyzzyx, 'Test 54');
test(shortestCompletingWord("1 2 3 a b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3", ["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz","aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"]), abcdefghijklmnopqrstuvwxyz, 'Test 55');
test(shortestCompletingWord("b1r2e3", ["berber","bereber","beriberi","reberber","beerbar"]), berber, 'Test 56');
test(shortestCompletingWord("a1B2c3D4", ["abcd", "abdc", "abcde", "bacd", "adcb"]), abcd, 'Test 57');
test(shortestCompletingWord("123aaBBB456", ["aabbb","abbbb","baaabbb","bbbaaab","bbbaaabbb"]), aabbb, 'Test 58');
test(shortestCompletingWord("!!!abc###", ["abc", "cab", "bac", "bca", "acb", "cba"]), abc, 'Test 59');
test(shortestCompletingWord("aA1bB2cC3", ["abc","aabbcc","aaabbbccc","abbc","abbbcc"]), aabbcc, 'Test 60');
test(shortestCompletingWord("p1QR2", ["prq","pqr","pqrr","prqq","pqrrr","pqqrr"]), prq, 'Test 61');
test(shortestCompletingWord("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", ["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"]), abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz, 'Test 62');
test(shortestCompletingWord("f!@#o1b2a3r4", ["barfoot","aborfra","barform","barrofa","aborfar","barrage","baraffe","barfree"]), barfoot, 'Test 63');
test(shortestCompletingWord("bLUE cAR 2022", ["blueberry","blueprint","carbon","barcelona","bark"]), null, 'Test 64');
test(shortestCompletingWord("mN9mN", ["minnesota","miamin","manana","mimic","mimicry","mining","minimum"]), null, 'Test 65');
test(shortestCompletingWord("xyZ123 456", ["xyzxyz", "zyxzyx", "xyzzx", "yxzxz", "zxyzyx"]), xyzzx, 'Test 66');
test(shortestCompletingWord("!@#$%^&*[]_+aBc123", ["abc","cba","bac","bca","cab","acb","aab","abb","bba","bbc","bcb","bacb","bcab","bacab","bacabc","bacabcd","bacabcde","bacabcdef","bacabcdefg"]), abc, 'Test 67');
test(shortestCompletingWord("abc def ghi", ["abcdefghi", "defghibac", "ghidefab", "bacdefghi", "abcdefghij"]), abcdefghi, 'Test 68');
test(shortestCompletingWord("a1b2c3d4e5", ["abcde","bcdea","cabde","decab","edcba","abcdde","abcdee","abcdeee","abcdeeee"]), abcde, 'Test 69');
test(shortestCompletingWord("Gh00t2!@#", ["ghostly","gnostic","ghost","tongue","tooth"]), ghost, 'Test 70');
test(shortestCompletingWord("m2i5n4i3s5", ["immisions","minimises","administs","ministers","misissues"]), immisions, 'Test 71');
test(shortestCompletingWord("!@#$%^&*[]", ["abcdef","ghijkl","mnopqr","stuvwx","yzabcf"]), abcdef, 'Test 72');
test(shortestCompletingWord("a2b3c4d5e6", ["alphabet","bacded","abacax","decalbac","abacbac"]), bacded, 'Test 73');
test(shortestCompletingWord("xyZ 123", ["xyzzy","zyxwvutsrqponmlkjihgfedcba","zyxzyxzyx","xyzz","zyx","xyzx","xyzxy","xyzxyz","xyzxyzz","xyzxyzxy"]), zyx, 'Test 74');
test(shortestCompletingWord("mno890", ["mno","mon","nom","omn","nmo","omnmo","mnomo","omonomn"]), mno, 'Test 75');
test(shortestCompletingWord("mno9PQR8", ["mnopqr", "nopqmr", "pqmrno", "mnopq", "pqmnopr", "mnopqrq"]), mnopqr, 'Test 76');
test(shortestCompletingWord("1a2b3c4d5e", ["abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij"]), abcde, 'Test 77');
test(shortestCompletingWord("aA bB cC", ["abc", "abccba", "cab", "bcaac", "acbac"]), abccba, 'Test 78');
test(shortestCompletingWord("zzz", ["zzzz","zzz","zzzzz","zzzzzz","zzzzzzz","zzzzzzzz","zzzzzzzzz","zzzzzzzzzz"]), zzz, 'Test 79');
test(shortestCompletingWord("123abc ABC321", ["cba","abc","bac","bca","cab","acb","aab","abb","bba","bbc","bcb","bacb","bcab","bacab","bacabc","bacabcd","bacabcde","bacabcdef","bacabcdefg"]), bacabc, 'Test 80');
test(shortestCompletingWord("q9w8e7r6", ["qwerty","qwertas","qwertyui","qwertyuio","qwertyuiop"]), qwerty, 'Test 81');
test(shortestCompletingWord("qQwWeEr RtTyYuUiIoOpP", ["qwertyuiop", "qwertyuio", "qwertyuiopp", "qwertyuioppq", "qwertyuiopqq"]), null, 'Test 82');
test(shortestCompletingWord("xYz987", ["xyz", "yzx", "zxy", "xzy", "yxz", "zyx", "xxxyyzzz"]), xyz, 'Test 83');
test(shortestCompletingWord("XYZ 987", ["xyzz","zyxw","zyxv","zyxuv","zyxwvut"]), xyzz, 'Test 84');
test(shortestCompletingWord("P2l3l4o5", ["poll","pillar","pollock","polyope","plaster","polyope"]), poll, 'Test 85');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

