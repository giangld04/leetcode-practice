// Test: 2746. Decremental String Concatenation
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { minimizeConcatenatedLength } = require("./solution");

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

console.log("\n2746. Decremental String Concatenation\n");

test(minimizeConcatenatedLength(["abcd","de","efg","gh"]), 8, 'Test 1');
test(minimizeConcatenatedLength(["abcd","dcba","abdc","cdab"]), 13, 'Test 2');
test(minimizeConcatenatedLength(["x","y","z","x","y","z"]), 4, 'Test 3');
test(minimizeConcatenatedLength(["ab","bc","cd","da"]), 5, 'Test 4');
test(minimizeConcatenatedLength(["aaaa","bbbb","cccc","dddd"]), 16, 'Test 5');
test(minimizeConcatenatedLength(["abc","cba","bca","acb"]), 9, 'Test 6');
test(minimizeConcatenatedLength(["abc","cba","bac","bca"]), 10, 'Test 7');
test(minimizeConcatenatedLength(["a","b","c","d","e"]), 5, 'Test 8');
test(minimizeConcatenatedLength(["ab","b"]), 2, 'Test 9');
test(minimizeConcatenatedLength(["aabb","bbaa","abab","baba"]), 13, 'Test 10');
test(minimizeConcatenatedLength(["zz","za","az","zzz"]), 6, 'Test 11');
test(minimizeConcatenatedLength(["xyz","zyx","xyz"]), 7, 'Test 12');
test(minimizeConcatenatedLength(["one","two","three","four","five","six","seven","eight","nine","ten"]), 35, 'Test 13');
test(minimizeConcatenatedLength(["a","a","a","a"]), 1, 'Test 14');
test(minimizeConcatenatedLength(["abc","acb","bac","bca","cab","cba"]), 14, 'Test 15');
test(minimizeConcatenatedLength(["same","emag","game","emerge","merge"]), 20, 'Test 16');
test(minimizeConcatenatedLength(["hello","ollie","elephant"]), 16, 'Test 17');
test(minimizeConcatenatedLength(["a","b","c","d","e","f","g","h","i","j"]), 10, 'Test 18');
test(minimizeConcatenatedLength(["abc","abc","abc","abc"]), 12, 'Test 19');
test(minimizeConcatenatedLength(["abc","bcd","cde"]), 8, 'Test 20');
test(minimizeConcatenatedLength(["xyz","zyx","abc"]), 8, 'Test 21');
test(minimizeConcatenatedLength(["aa","ab","bc"]), 4, 'Test 22');
test(minimizeConcatenatedLength(["abc","cba","bac","bca","cab","acb"]), 14, 'Test 23');
test(minimizeConcatenatedLength(["zzzz","zzz","zz","z"]), 7, 'Test 24');
test(minimizeConcatenatedLength(["hello","ocean","nest"]), 12, 'Test 25');
test(minimizeConcatenatedLength(["aaa","c","aba"]), 6, 'Test 26');
test(minimizeConcatenatedLength(["abc","cab","bca","acb","bac","cba","abc","cab","bca","acb","bac","cba","abc","cab","bca","acb","bac","cba","abc","cab","bca","acb","bac","cba"]), 49, 'Test 27');
test(minimizeConcatenatedLength(["abc","cab","bac","acb","bca","cba","abc","cab","bac","acb","bca","cba","abc","cab","bac","acb","bca","cba","abc","cab","bac","acb","bca","cba","abc","cab","bac","acb","bca","cba"]), 62, 'Test 28');
test(minimizeConcatenatedLength(["abcde","edcba","bcdea","aebcd","defab","baced","cdefa","abced","decba","edabc"]), 43, 'Test 29');
test(minimizeConcatenatedLength(["zzzz","zzzz","zzzz","zzzz","zzzz"]), 16, 'Test 30');
test(minimizeConcatenatedLength(["zzz","zyz","yzy","xyx","wxw","vuw","utv","tsu","rtr","qsp","pon","omn","nml","lmk","kjl","jik","ihg","hgf","ged","fcd","ebc","dad","cac","bcb","aba","aaa"]), 67, 'Test 31');
test(minimizeConcatenatedLength(["aaaa","aaab","aaba","abaa","abab","baba","bbaa","bbba","bbbb","baaa"]), 34, 'Test 32');
test(minimizeConcatenatedLength(["abc","cba","bca","acb","cab","bac","aab","abb","bab","bba","aba","baa"]), 26, 'Test 33');
test(minimizeConcatenatedLength(["aaaaabbbbbcccccdddddeeeee","eeeeedddddccccbbbbbaaaaa","ffffffffgggggghhhhhiiiii","iiiiihihhhhgggggffffffff"]), 95, 'Test 34');
test(minimizeConcatenatedLength(["ab","ba","ac","ca","ad","da","ae","ea","af","fa","ag","ga","ah","ha","ai","ia","aj","ja","ak","ka"]), 21, 'Test 35');
test(minimizeConcatenatedLength(["aaaaa","aaabb","aabbb","abbbb","bbbbb","bbbb","bbb","bb","b","a","aaaab","aaabb","aabbb","abbbb","bbbbb"]), 53, 'Test 36');
test(minimizeConcatenatedLength(["abcdef","fedcba","ghijkl","lkjihg","mnopqr","rqponm","stuvwx","xwvuts","yzabcd","dcba"]), 53, 'Test 37');
test(minimizeConcatenatedLength(["aabbcc","ccbbcc","ddccbb","bbaadd","aaddcc","ccddaabb","bbccddaa","aaddbbcc","ccddaabb","bbaadddc","ccbbccaa","aaddbbcc","ccbbccdd","ddeebbaa","aabbccdd","bbccddeea","aaddccdde","bbccddeea","aadddccb","bbccddeea","ccdddeebb","ddeebbaac","aaddccdde","bbccddeea","ccdddeebb","ddeebbaac","aaddccdde","bbccddeea","ccdddeebb","ddeebbaac"]), 220, 'Test 38');
test(minimizeConcatenatedLength(["abcde","edcba","abc","cba","a","b","c","d","e"]), 17, 'Test 39');
test(minimizeConcatenatedLength(["xyzz","zzyx","yxzz","zzzy","xyyx","yxyx","xzyx","zyxy","zzxx","xxzz","xyxy","yxyy","yyxy","xyxy","zyyx","xzyz","zzyz","yzyz","zyzy","xyzx","yxzx","xzyy","yzyx","xyyz","zyzy"]), 82, 'Test 40');
test(minimizeConcatenatedLength(["repeat","eatrep","peatre","eatrep","peatre","eatrep","peatre","eatrep","peatre","eatrep","peatre"]), 57, 'Test 41');
test(minimizeConcatenatedLength(["aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa","aaaaa"]), 289, 'Test 42');
test(minimizeConcatenatedLength(["aaaa","bbbb","cccc","dddd","eeee","ffff","gggg","hhhh","iiii","jjjj","kkkk","llll","mmmm","nnnn","oooo","pppp","qqqq","rrrr","ssss","tttt","uuuu","vvvv","wwww","xxxx","yyyy","zzzz","aaab","bbac","ccad","ddae","eeaf","ffag","ggbh","hhih","iiji","jjik","kkil","llim","mmim","njin","okin","plin","qlin","rlin","slin","tlia","ulia","vlia","wlia","xlia","ylia","zlkb","alib","blib","clib","dlib","elib","flib","glib","hlid","ilid","jlid","klid","llie","mlie","nlie","olie","plie","qlie","rlie","slie","tlif","ulif","vlif","wlif","xlif","ylif","zlif","almg","blmg","clmg","dlog","elog","flmg","glog","hlmg","ilmg","jlog","klmg","llmg","mlmh","nlmh","olmh","plmh","qlmh","rlmh","slmh","tlmh","ulmh","vlim","wlim","xlmn","ylmn","zlmn","amno","bmno","cmno","dmno","emno","fmno","gmno","hmno","imno","jmno","kmno","lmno","mmnp","nmnp","omnp","pmnp","qmnp","rmnp","smnp","tmnp","umnp","vmno","wmno","xmno","ymno","zmno","anop","bnop","cnop","dnop","enop","fnop","gnop","hnop","inop","jnop","knop","lnop","mnop","mnoq","nnoq","onno","pnno","qnno","rnno","snno","tnno","unno","vnno","wnno","xnno","ynno","znno","aonr","bonr","conr","donr","eonr","fonr","gonr","honr","ionr","jonr","konr","lonr","monr","nonr","onrs","pnrs","qnrs","rnrs","snrs","tnrs","unrs","vnrs","wnrs","xnrs","ynrs","znrs","aors","bors","cors","dors","eors","fors","gors","hors","iors","jors","kors","lors","mors","nors","orsp","nosp","ospp","pspq","qspq","rspq","sspq","tspq","uspq","vspq","wspq","xspq","yspq","zspq","atpq","btpq","ctpq","dtpq","etpq","ftpq","gtpq","htpq","itpq","jtpq","ktpq","ltpq","mtpq","nspq","ntpq","optq","ptpr","qtpr","rtpr","stpr","ttpr","utpr","vtpr","wtpr","xtpr","ytpr","ztpr","aotr","botr","cotr","dotr","eotr","fotr","gotr","hotr","iotr","jotr","kotr","lotr","motr","notr","ootr","potr","qotr","rotr","sotr","totr","uotr","votr","wotr","xotr","yotr","zotr","aupt","bupt","aupt","cutr","dutr","eutr","futr","gutr","hutr","iutr","jutr","kutr","lutr","mutr","nctr","nutr","outr","pout","qout","rout","sout","tout","uout","vout","wout","xout","yout","zout"]), 1130, 'Test 43');
test(minimizeConcatenatedLength(["zzzz","zzz","zz","z","z","zz","zzz","zzzz"]), 13, 'Test 44');
test(minimizeConcatenatedLength(["aaaaaab","baaaaaa","aaabaaa","aaaabaa","aaaaaba","aaaaaab","baaaaaa","aaabaaa","aaaabaa","aaaaaba"]), 61, 'Test 45');
test(minimizeConcatenatedLength(["abcde","edcba","fghij","jihgf","klmno","onmlk","pqrst","tsrqp","uvwxy","yxwvu","zyxwv","vwxyz","utsrq","qponm","lkjih","ihgfe","edcba"]), 76, 'Test 46');
test(minimizeConcatenatedLength(["pqr","rst","tuv","vwx","xyz","zyx","wxy","uvw","tsr","qrp","pqr","rst","tuv","vwx","xyz"]), 34, 'Test 47');
test(minimizeConcatenatedLength(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghijklmnopqrstuvwxyza","zyxwvutsrqponmlkjihgfedcbaz","abcdefghijklmnopqrstuvwxy","zyxwvutsrqponmlkjihgfedcba"]), 154, 'Test 48');
test(minimizeConcatenatedLength(["aaaabbbb","bbbbcccc","ccccdddd","ddddaaaa"]), 29, 'Test 49');
test(minimizeConcatenatedLength(["xyz","zyx","yzx","xyz","zyx","xyz","zyx","xyz","zyx","xyz"]), 21, 'Test 50');
test(minimizeConcatenatedLength(["abcdefg","ghijklm","mnopqr","rstuvw","wxyzabc","defghij","klmnopq","rstuvwx","yzabcd","efghijk","lmnopqr"]), 69, 'Test 51');
test(minimizeConcatenatedLength(["aabb","bbaa","abab","baba","aabb","bbaa","abab","baba","aabb","bbaa","abab","baba","aabb","bbaa","abab","baba","aabb","bbaa","abab","baba"]), 61, 'Test 52');
test(minimizeConcatenatedLength(["abcde","edcba","bcdef","fedcb","cdefg","gfedc","defgh","hgfed","efghi","ihgfe"]), 44, 'Test 53');
test(minimizeConcatenatedLength(["abc","cba","bac","cab","acb","bca","xyz","zyx","yxz","zxy","yzx","xzy","uvw","vwu","wuv","uwv"]), 37, 'Test 54');
test(minimizeConcatenatedLength(["ab","bc","cd","de","ef","fg","gh","hi","ij","jk","kl","lm","mn","no","op","pq","qr","rs","st","tu","uv","vw","wx","xy","yz","za"]), 27, 'Test 55');
test(minimizeConcatenatedLength(["zzzz","zzz","zz","z","z"]), 7, 'Test 56');
test(minimizeConcatenatedLength(["abcdefghij","jihgfedcba","mnopqrstuv","vutsrqponm","wxyzabcd","dcbaefgh","ijklmnop","ponmlkji","qrstuvwxyz","zyxwvutsrq"]), 87, 'Test 57');
test(minimizeConcatenatedLength(["aabb","bbcc","ccdd","ddee","eemm","mmnn","nnoo","oopp","ppqq","qqrr","rrss","sstt","ttuu","uuvv","vvww","wwxx","xxyy","yyzz","zzaa","aabb"]), 61, 'Test 58');
test(minimizeConcatenatedLength(["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","tttttttttttttttttttttttttttttttttttttttt","qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"]), 198, 'Test 59');
test(minimizeConcatenatedLength(["ab","ba","ac","ca","ad","da","ae","ea","af","fa"]), 11, 'Test 60');
test(minimizeConcatenatedLength(["ababab","bababa","ababab","bababa","ababab","bababa","ababab","bababa","ababab","bababa"]), 51, 'Test 61');
test(minimizeConcatenatedLength(["aabbcc","ccbbaa","aabbaa","bbaacc","ccabba","baacca","abbccc","ccabbb","bbbaac","acccbb"]), 52, 'Test 62');
test(minimizeConcatenatedLength(["xyzz","zzxy","yzzx","zxyy","xyyx","yxzx","xzyz","zyzx","zyxz","yzzx","xyzz","zzxy"]), 39, 'Test 63');
test(minimizeConcatenatedLength(["xy","yx","xz","zx","xw","wx","xv","vx","xu","ux","xt","tx","xs","sx","xr","rx","xq","qx","xp","px","xo","ox","xn","nx","xm","mx","xl","lx","xk","kx","xj","jx","xi","ix","xh","hx","xg","gx","xf","fx","xe","ex","xd","dx","xc","cx","xb","bx","xa","ax"]), 51, 'Test 64');
test(minimizeConcatenatedLength(["aaaa","aaab","aaba","abaa","baaa"]), 16, 'Test 65');
test(minimizeConcatenatedLength(["abcabcabc","cbacbacba","bcabcbcab","abcbabcbc","cbacbacba","bcabcbcab","abcbabcbc","cbacbacba","bcabcbcab","abcbabcbc","cbacbacba","bcabcbcab","abcbabcbc","cbacbacba","bcabcbcab","abcbabcbc"]), 130, 'Test 66');
test(minimizeConcatenatedLength(["abc","cba","bac","acb","cab","bca"]), 13, 'Test 67');
test(minimizeConcatenatedLength(["abcdabcdabcd","dcbaabcdabcd","abcdabcdabcd","dcbaabcdabcd","abcdabcdabcd","dcbaabcdabcd","abcdabcdabcd","dcbaabcdabcd","abcdabcdabcd","dcbaabcdabcd","abcdabcdabcd","dcbaabcdabcd"]), 138, 'Test 68');
test(minimizeConcatenatedLength(["abcabc","bcbcbc","cbacba","bababa","acbacb","bacbac","cabacb","bcbacb","cbacba","abcabc","bcbcbc"]), 58, 'Test 69');
test(minimizeConcatenatedLength(["a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b"]), 2, 'Test 70');
test(minimizeConcatenatedLength(["abcdefghijklmnopqrstuvwxy","zyxwvutsrqponmlkjihgfedcba","abcdefghijklmnopqrstuvwxy","zyxwvutsrqponmlkjihgfedcba","abcdefghijklmnopqrstuvwxy","zyxwvutsrqponmlkjihgfedcba"]), 150, 'Test 71');
test(minimizeConcatenatedLength(["aaaaa","bbbbb","ccccc","ddddd","eeeee","fffff","ggggg","hhhhh","iiiii","jjjjj"]), 50, 'Test 72');
test(minimizeConcatenatedLength(["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn","abcdefghijklmno","abcdefghijklmnop","abcdefghijklmnopq","abcdefghijklmnopqr","abcdefghijklmnopqrs","abcdefghijklmnopqrst"]), 209, 'Test 73');
test(minimizeConcatenatedLength(["zzzzz","zzzz","zzz","zz","z"]), 11, 'Test 74');
test(minimizeConcatenatedLength(["abac","bcad","cada","dadb","babc","acab","baca","caba","abcd","dcba","fedc","dcfe","dcde","edcd","dede","eeee","ee","e","a"]), 54, 'Test 75');
test(minimizeConcatenatedLength(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuvwxyzabcdefghijkl","pqonmlkjihgfedcbazyxwvutsr"]), 103, 'Test 76');
test(minimizeConcatenatedLength(["aaaaab","bbbbb","ccccc","ddddd","eeeee","fffff","ggggg","hhhhh","iiiii","jjjjj","kkkkk","lllll","mmmmm","nnnnn","ooooo","ppppp","qqqqq","rrrrr","sssss","ttttt"]), 100, 'Test 77');
test(minimizeConcatenatedLength(["zzzz","zzzz","zzzz","zzzz","zzzz","zzzz","zzzz","zzzz","zzzz","zzzz"]), 31, 'Test 78');
test(minimizeConcatenatedLength(["abcdabcdabcdabcdabcd","abcdeabcdeabcdeabcde","ababcababcababcab","abacabadabacabadaba","abacabadabacabadaba","abacabadabacabadaba","abacabadabacabadaba","abacabadabacabadaba"]), 147, 'Test 79');
test(minimizeConcatenatedLength(["abcdef","fedcba","bcdefa","afedcb","cdefab","bafedc","defabc","cbafed","efabcd","dcbafe"]), 51, 'Test 80');
test(minimizeConcatenatedLength(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 26, 'Test 81');
test(minimizeConcatenatedLength(["abc","cab","bac","bca","acb","cba","aba","bab","aab","abb","bba","baa","aba","abb","bab","aab","abb","bba","baa","aba","abb","bab","aab","abb","bba","baa","aba","abb","bab","aab","abb","bba","baa","aba","abb","bab","aab","abb","bba","baa","aba","abb","bab"]), 92, 'Test 82');
test(minimizeConcatenatedLength(["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), 61, 'Test 83');
test(minimizeConcatenatedLength(["abc","cab","bac","acb","bca","cba"]), 14, 'Test 84');
test(minimizeConcatenatedLength(["abcde","edcba","bcdea","aecdb","dbeca","cedba","bedca","aebcd","decba","cbade","bacde","acdeb"]), 53, 'Test 85');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

