// Test: 943. Find The Shortest Superstring
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { shortestSuperstring } = require("./solution");

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

console.log("\n943. Find The Shortest Superstring\n");

test(shortestSuperstring(["a","ab","abc"]), abc, 'Test 1');
test(shortestSuperstring(["abcde","bcdef","cdefg"]), abcdefg, 'Test 2');
test(shortestSuperstring(["a","b","c"]), abc, 'Test 3');
test(shortestSuperstring(["shortest","superstring","string","abc"]), superstringshortestabc, 'Test 4');
test(shortestSuperstring(["abc","bcd","xyz","zyx"]), zyxyzabcd, 'Test 5');
test(shortestSuperstring(["aaa","bbb","ccc"]), aaabbbccc, 'Test 6');
test(shortestSuperstring(["abcd","cde","efg","ghij"]), abcdefghij, 'Test 7');
test(shortestSuperstring(["catg","ctaagt","gcta","ttca","atgcatc"]), gctaagttcatgcatc, 'Test 8');
test(shortestSuperstring(["apple","plea","peach"]), appleapeach, 'Test 9');
test(shortestSuperstring(["unique","ness","super","set"]), nessuperuniqueset, 'Test 10');
test(shortestSuperstring(["abcd","cdab","bcda","dabc"]), bcdabcd, 'Test 11');
test(shortestSuperstring(["ab","bc","cd"]), abcd, 'Test 12');
test(shortestSuperstring(["hello","world","abc"]), helloworldabc, 'Test 13');
test(shortestSuperstring(["alex","loves","leetcode"]), alexlovesleetcode, 'Test 14');
test(shortestSuperstring(["abc","bcd","cde","def","efg"]), abcdefg, 'Test 15');
test(shortestSuperstring(["short","longer","longest"]), shortlongerlongest, 'Test 16');
test(shortestSuperstring(["one","two","three","four"]), twonethreefour, 'Test 17');
test(shortestSuperstring(["abc","bca","cab"]), bcabc, 'Test 18');
test(shortestSuperstring(["hello","world","word","dlrow","row"]), wordlroworldhello, 'Test 19');
test(shortestSuperstring(["abcd","cdef","efab","fabc"]), cdefabcd, 'Test 20');
test(shortestSuperstring(["abc", "bcd", "cde", "def", "efg", "fgh", "ghi", "hij", "ijk", "jkl", "klm", "lmn", "mno", "nop"]), abcdefghijklmnop, 'Test 21');
test(shortestSuperstring(["abcd","cdabcd","bcdaabcd","dabcabcd","abcdabcd","bcabcd","cdababcd","dababcd","abcabcd","bcdabc","cdabc","dabc"]), cdababcdabcabcdaabcdabcd, 'Test 22');
test(shortestSuperstring(["abcdefg","bcdefgh","cdefghi","defghij","efghijk","fghijkl","ghijklm","hijklmn","ijklmno","jklmnop","klmnopq","lmnopqr","mnopqrs","nopqrst","opqrstu","pqrstuv","qrstuvw","rstuvwx","stuvwxy","tuvwxyz","uvwxyzx","vwxyzxy","wxyzxyz","xyzxyza","yzxyzaa","zxyzaab","xyzaabc","yzaabcd","zaabcde","aabcdef"]), Execution timed out, 'Test 23');
test(shortestSuperstring(["aaaa","bbba","abbb","baaa"]), abbbaaaa, 'Test 24');
test(shortestSuperstring(["abcde","bcdef","cdefg","defgh","efghi"]), abcdefghi, 'Test 25');
test(shortestSuperstring(["abcdef","bcdefg","cdefgh","defghi","efghij","fghijk","ghijkl","hijklm","ijklmn"]), abcdefghijklmn, 'Test 26');
test(shortestSuperstring(["abcd","cdab","bcda","dabc","abdc","dcba","cadb","bdac"]), bdacadbdabcdabdcba, 'Test 27');
test(shortestSuperstring(["abcdefghij","bcdefghijk","cdefghijkl","defghijklm","efghijklmn","fghijklmno","ghijklmnop","hijklmnopq","ijklmnopqr","jklmnopqrs","klmnopqrst","lmnopqrstu"]), abcdefghijklmnopqrstu, 'Test 28');
test(shortestSuperstring(["one","two","three","four","five","six","seven","eight","nine","ten"]), sevenineightensixfivefourthreetwone, 'Test 29');
test(shortestSuperstring(["aabb", "bbcc", "ccdd", "ddee", "eeff", "ffgg", "ggaa", "aacc", "ccbb", "ddeeff", "ffggaa", "aabbcc"]), aaccddeeffggaabbccbb, 'Test 30');
test(shortestSuperstring(["abcd","cdab","bcda","dabc","abcd","cdab","bcda","dabc","abcd","cdab"]), bcdabcd, 'Test 31');
test(shortestSuperstring(["abcd", "cdab", "bcda", "dabc", "abcdabc", "bcdbcd"]), abcdabcdbcdab, 'Test 32');
test(shortestSuperstring(["unique","words","here","are","some","more","complex","test","cases"]), casesomeareherewordsuniquemorecomplextest, 'Test 33');
test(shortestSuperstring(["abcde","bcdef","cdefg","defgh","efghi","fghij","ghijk","hijkl","ijklm"]), abcdefghijklm, 'Test 34');
test(shortestSuperstring(["ab","bc","ca","ac","ba"]), bacabc, 'Test 35');
test(shortestSuperstring(["xyz","yzabc","abcde","cdefg","efghi","fghij","ghijk","hijkl","ijklm","jklmn","klmno","lmnop"]), xyzabcdefghijklmnop, 'Test 36');
test(shortestSuperstring(["abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno"]), abcdefghijklmno, 'Test 37');
test(shortestSuperstring(["concat","oncata","ncatat","catati","atatia","tatiat","atiata","tiatap","iatapr","atapre","taprep","aprepr","prepro","epropr","proprp","roprps","oprpsp","prpspl","rpsplc","psplcb","splcba","plcbam","lcbamk","cbamkn","bamkni","amknio","mknioj","knioji","niojij","iojiji","ojijih","jijihg","ijihgf","ihgfge","hgfgef","gfgefe","fgefee","gefeef","efeeef","feeeee","eeeeee"]), Execution timed out, 'Test 38');
test(shortestSuperstring(["overlap","lapover","lover","verlap","overla","verlapo","verlapov","overlapov","verlapove","lapoverla"]), loverlapoverlapo, 'Test 39');
test(shortestSuperstring(["prefix","fixpre","refixp","fixpref","refixpr","fixprefi","refixpre","fixprefix","refixpref","fixprefix"]), fixprefixpref, 'Test 40');
test(shortestSuperstring(["algorithm", "rhythm", "myth", "throttle", "thorn", "horn"]), thornrhythmythrottlealgorithm, 'Test 41');
test(shortestSuperstring(["aabbccdd","bbccddaa","ccddaabb","ddaaaabb","aaaabbbb","bbbbaaaa"]), ddaaaabbbbaaaabbccddaabb, 'Test 42');
test(shortestSuperstring(["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), Execution timed out, 'Test 43');
test(shortestSuperstring(["prefix","refix","fix","ix","x","suffix","uffix","ffix","fixy","xylophone","phone","honeymoon"]), suffixylophoneymoonprefix, 'Test 44');
test(shortestSuperstring(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]), twelvelevenineightensevensixfivefourthreetwone, 'Test 45');
test(shortestSuperstring(["pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), pqrstuvwxyz, 'Test 46');
test(shortestSuperstring(["aaaa", "aabb", "abbb", "bbaa", "baab", "baba", "abba", "abaa", "baba", "abab", "baba", "abab"]), ababaabbaaaabbb, 'Test 47');
test(shortestSuperstring(["xyz","yzw","wxy","uvw","vwxy","wxyz","xyzu"]), xyzuvwxyzw, 'Test 48');
test(shortestSuperstring(["overlap","laplong","longer","ergonomic","nomics","micronix","nixos","xenon","nonya","yonder","nder","derivation"]), yonderivationxenonyamicronixosoverlaplongergonomics, 'Test 49');
test(shortestSuperstring(["aabbcc","bbccdd","ccddee","ddeeff","eeffgg","ffgghh","gghhii","hhijji","iijjkk","jjkklm","kklmno","lmnopq","mnopqr","nopqrs","opqrst","pqrsst","qrsttu","rsttuu","sttuuv","ttuuvw","tuuvwv","uvwvwx","vwvwyx","wvwyxy","vwyxyz","wyxyza","yxyzab","xyzabc"]), Execution timed out, 'Test 50');
test(shortestSuperstring(["abcd", "cdab", "bcda", "dabc", "abcd", "cdab", "bcda", "dabc", "abcd", "cdab", "bcda", "dabc"]), bcdabcd, 'Test 51');
test(shortestSuperstring(["xabc","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno","mnop","nopq","opqr","pqrt","qrts","rstu","stuv","tuvw","uvwx","vwxz"]), Execution timed out, 'Test 52');
test(shortestSuperstring(["abcdef","defghi","ghijkl","jklmno","mnopqr","nopqrs"]), abcdefghijklmnopqrs, 'Test 53');
test(shortestSuperstring(["unique","niques","iquesu","quesun","esuniq","suniqu","uniqeu","niqueu","iqueun","queuni","ueuniq","enique","niqeuq","iqeunu","qeuniq","euniqe","uniqen","niqueu","iqueun","queuni","ueuniq","enique","niqeuq","iqeunu","qeuniq","euniqe","uniqen"]), Execution timed out, 'Test 54');
test(shortestSuperstring(["hello","world","foobar","barfoo","foobaz","bazfoo","bazbar","bazoof","foobazoo","oofbazfo"]), bazbarfoobazoofbazfoobarworldhello, 'Test 55');
test(shortestSuperstring(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"]), twelvelevenineightensevensixfivefourthreetwone, 'Test 56');
test(shortestSuperstring(["xyz","yzab","zabc","abcd","bcde","cdef","defg","efgh","fghi","ghij"]), xyzabcdefghij, 'Test 57');
test(shortestSuperstring(["abcd","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn"]), abcdefghijklmn, 'Test 58');
test(shortestSuperstring(["abc","bca","cab","acb","bac","cba","ab","bc","ca","ba","ac","cb"]), cbacbcabc, 'Test 59');
test(shortestSuperstring(["aabbcc","bbccdd","ccddee","ddeeff","eefggh","fgghii"]), eefgghiiaabbccddeeff, 'Test 60');
test(shortestSuperstring(["abcde","bcdef","cdefg","defgh","efghi","fghij","ghijk","hijkl","ijklm","jklmn","klmno","lmnop"]), abcdefghijklmnop, 'Test 61');
test(shortestSuperstring(["prefix","refixa","fixato","fixatra","ixatrace","xatracer","atracerp","tracerpx","racerpxy","acerpxyz","cerpxyzl","erpxyzlh","rpxyzlhe","pxyzlhet","xyzlhetr"]), fixatracerpxyzlhetrprefixato, 'Test 62');
test(shortestSuperstring(["ab", "bc", "cd", "da"]), bcdab, 'Test 63');
test(shortestSuperstring(["overlap", "lapping", "ping", "pingpong", "ong", "overlaplap", "laplaplap", "pingping"]), overlaplaplappingpingpong, 'Test 64');
test(shortestSuperstring(["aabbcc","bbccdd","ccddeeff","ddeeffgg","eeffgghh"]), aabbccddeeffgghh, 'Test 65');
test(shortestSuperstring(["abcd", "bcde", "cdef", "defg", "efgh", "fghi", "ghij", "hijk", "ijkl", "jklm", "klmn", "lmno"]), abcdefghijklmno, 'Test 66');
test(shortestSuperstring(["xyz", "yzx", "zxy", "xyx", "yxy", "xyy", "yxx", "yzy", "zyz", "zyx", "xzy", "yxz"]), yxzyzyxxyxyzxyy, 'Test 67');
test(shortestSuperstring(["one","two","three","four","five","six"]), twonethreefourfivesix, 'Test 68');
test(shortestSuperstring(["abcdef","defabc","bcdefa","cdefab","defabc","efabcd","fabcde"]), bcdefabcdef, 'Test 69');
test(shortestSuperstring(["aabbcc","bccdda","cdddee","ddeeff","effggg","ffgggh","ggghhh","hhhiii","iiiijj","jjjkkl","kkllmm","llmmnn"]), cdddeeffggghhhiiiijjjkkllmmnnaabbccdda, 'Test 70');
test(shortestSuperstring(["abcde", "bcdef", "cdefg", "defgh", "efghi", "fghij", "ghijk", "hijkl", "ijklm", "jklmn", "klmno", "lmnop"]), abcdefghijklmnop, 'Test 71');
test(shortestSuperstring(["longest","string","that","contains","overlapping","parts"]), longestringthatcontainsoverlappingparts, 'Test 72');
test(shortestSuperstring(["abcdef", "defghi", "ghijkl", "ijklmn", "mnopqr"]), abcdefghijklmnopqr, 'Test 73');
test(shortestSuperstring(["abcdef","defghi","ghijkl","ijklmn","mnopqr"]), abcdefghijklmnopqr, 'Test 74');
test(shortestSuperstring(["abcdefgh","efghijkl","ghijklmn","ijklmnop","jklmnopq","klmnopqr","mnopqrst","nopqrstu","opqrstuv","pqrstuvw","qrstuvwx","rstuvxyz"]), abcdefghijklmnopqrstuvwxrstuvxyz, 'Test 75');
test(shortestSuperstring(["abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk"]), abcdefghijk, 'Test 76');
test(shortestSuperstring(["aabbcc","bbccdd","ccddeeff","ddeeffgg","effgghh","ffgghhiijj","gghhiijjkk","hhiijjkkll","iijjkkllmm","jjkkllmmnn","kkllmmnnoo","llmmnnoopp"]), aabbccddeeffgghhiijjkkllmmnnoopp, 'Test 77');
test(shortestSuperstring(["overlap", "lapping", "ping", "pingpong", "ong"]), overlappingpong, 'Test 78');
test(shortestSuperstring(["pqr", "qrp", "rqp", "prq", "rpq", "pqq", "qqp"]), pqrpqqprqp, 'Test 79');
test(shortestSuperstring(["abcxyz","xyzuvw","uvwdef","defghj","ghjklm","klmnop","mnopqr"]), abcxyzuvwdefghjklmnopqr, 'Test 80');
test(shortestSuperstring(["overlap","laptime","timefly","flyby","bymy","myself"]), overlaptimeflybymyself, 'Test 81');
test(shortestSuperstring(["rotation","otationr","tationro","ationrot","tionrota","ionrotat","onrotate","nrotate","rotate"]), rotationrotate, 'Test 82');
test(shortestSuperstring(["aaa","aab","aba","abb","baa","bab","bba","bbb","aabbaa","bbbaab"]), bbababbbaabbaaa, 'Test 83');
test(shortestSuperstring(["abcdef","defabc","bcdefa","cdefab"]), abcdefabc, 'Test 84');
test(shortestSuperstring(["abcd","bcde","cdef","defg"]), abcdefg, 'Test 85');
test(shortestSuperstring(["aaaa", "bbbb", "cccc", "dddd", "eeee", "ffff", "gggg", "hhhh", "iiii", "jjjj", "kkkk", "llll"]), aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllll, 'Test 86');
test(shortestSuperstring(["qwerty","wertyu","ertyui","rtyuiop","tyuiopq","yuiopqr"]), qwertyuiopqr, 'Test 87');
test(shortestSuperstring(["abcdefg","bcdefgh","cdefghi","defghij","efghijk","fghijkl","ghijklm","hijklmn","ijklmno","jklmnop","klmnopq","lmnopqr","mnopqrs","nopqrst"]), abcdefghijklmnopqrst, 'Test 88');
test(shortestSuperstring(["ab","bc","cd","de","ef","fg","gh","hi","ij","jk","kl","lm","mn","no","op","pq","qr","rs","st","tu","uv","vw","wx","xy","yz"]), Execution timed out, 'Test 89');
test(shortestSuperstring(["unique","strings","for","this","problem","are","here","and","there","everywhere"]), thereverywhereareproblemforthistringsuniqueand, 'Test 90');
test(shortestSuperstring(["abcdef","cdefgh","efghij","ghijkl"]), abcdefghijkl, 'Test 91');
test(shortestSuperstring(["aabb","bbaa","abab","baba","abba","baab"]), bababbaabb, 'Test 92');
test(shortestSuperstring(["apple","pleas","please","ease","asean","anean","nean","east"]), appleaseaneaneast, 'Test 93');
test(shortestSuperstring(["pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zab"]), pqrstuvwxyzab, 'Test 94');
test(shortestSuperstring(["ab", "ba", "ac", "ca", "ad", "da", "ae", "ea", "af", "fa", "ag", "ga", "ah", "ha", "ai", "ia"]), baiahagafaeadacab, 'Test 95');
test(shortestSuperstring(["abcxyz","xyzuvw","uvwdef","defghi","ghijkl","jklmno","mnopqr","nopqrs","pqrsuv","qrstuv","vwxyza"]), qrstuvwxyzabcxyzuvwdefghijklmnopqrsuv, 'Test 96');
test(shortestSuperstring(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]), abcdefghijkl, 'Test 97');
test(shortestSuperstring(["aaaa","bbb","cccc","dddd","eeee","ffff","gggg","hhhh","iiii","jjjj","kkkk","llll"]), aaaabbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllll, 'Test 98');
test(shortestSuperstring(["abcdef","defghi","ghijkl","jklmno","mnopqr","nopqrs","pqrsuv","qrstuv"]), abcdefghijklmnopqrsuvqrstuv, 'Test 99');
test(shortestSuperstring(["abcd", "cdab", "bcda", "dabc", "abcd", "cdab", "bcda", "dabc"]), bcdabcd, 'Test 100');
test(shortestSuperstring(["abcdef","bcdegh","cdefij","defgkl","efghmn","fghnop","ghnopq","hnoqrs","noqrst","qrstuv","rstuvw","stuvwx"]), bcdeghnoqrstuvwxfghnopqefghmndefgklabcdefij, 'Test 101');
test(shortestSuperstring(["ab", "bc", "cd", "de", "ef", "fa"]), bcdefab, 'Test 102');
test(shortestSuperstring(["abcdefgh","ghijklmn","mnopqrst","rstuvwxy","xyzabcde"]), ghijklmnopqrstuvwxyzabcdefgh, 'Test 103');

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
