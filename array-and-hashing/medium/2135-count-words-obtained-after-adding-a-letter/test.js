// Test: 2135. Count Words Obtained After Adding A Letter
// 76 test cases from LeetCodeDataset
// Run: node test.js

const { wordCount } = require("./solution");

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

console.log("\n2135. Count Words Obtained After Adding A Letter\n");

test(wordCount(["ant","act","tack"], ["tack","act","acti"]), 2, 'Test 1');
test(wordCount(["ab","a"], ["abc","abcd"]), 1, 'Test 2');
test(wordCount(["pqrst","vwxyz","abcdef"], ["qrstuvw","vwxyzab","abcdefg","pqrstuv","mnopqr"]), 1, 'Test 3');
test(wordCount(["abcdefghijklmnopqrstuvwxyz"[2:-2]], ["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyza", "abcdefghijklmnopqrstuvwxyzab"]), Error: Solution.wordCount[] missing 1 required positional argument: 'startWords', 'Test 4');
test(wordCount(["python","java","c"], ["pythonx","javaz","cb"]), 3, 'Test 5');
test(wordCount(["abcdexyz","mnopqr","stuv"], ["abcdexyzw","mnopqrs","stuvq"]), 3, 'Test 6');
test(wordCount(["python","java","csharp"], ["pythonic","javacoffee","csharptool","pythonjava","javacsharp"]), 0, 'Test 7');
test(wordCount(["abc","def","ghi","jkl","mno"], ["abcd","abce","abcf","abck","abcm"]), 5, 'Test 8');
test(wordCount(["python", "java", "c++"], ["pythona", "javab", "c++c", "pythonb", "javac", "c++d"]), Error: negative shift count, 'Test 9');
test(wordCount(["xyz","uvw","rst"], ["xyza","uvwq","rstv","rstw"]), 4, 'Test 10');
test(wordCount(["abcdefghijklmnopqrstuvwxyz"[:i] for i in range[1, 26]], ["abcdefghijklmnopqrstuvwxyz"[:i+1] for i in range[1, 26]]), Error: Solution.wordCount[] missing 2 required positional arguments: 'startWords' and 'targetWords', 'Test 11');
test(wordCount(["abcd","bcde","cdef"], ["abcde","bcdefg","abcdef","bcd"]), 1, 'Test 12');
test(wordCount(["a","bc","def","ghij","klmno"], ["ab","bcd","cdef","defgh","efghij","fghijk"]), 3, 'Test 13');
test(wordCount(["abcde","fghij","klmno"], ["bcdef","ghijk","klmnoa","mnopqr","stuvwx"]), 1, 'Test 14');
test(wordCount(["hello", "world", "abc"], ["helloa", "worldb", "abcd"]), 3, 'Test 15');
test(wordCount(["mnopqr","stuvwx","yzabcd"], ["mnopqrs","stuvwxy","yzabcde","mnopqrst","stuvwxyz","yzabcdef","mnopqrstuv","stuvwxyzab","yzabcdefg","mnopqrstu","stuvwxyzabc","yzabcdefg","mnopqrstuvw","stuvwxyzabcd","yzabcdefgh","mnopqrstuvwx","stuvwxyzabcde","yzabcdefgij","mnopqrstuvwxy","stuvwxyzabcdef","yzabcdefgijk"]), 3, 'Test 16');
test(wordCount(["xyz","uvw","qrst"], ["xyza","uvwxy","qrstuv","qrstuvw","uvwq"]), 2, 'Test 17');
test(wordCount(["mnopqr","stuvwx","yzabcd","efghij","klmno"], ["mnopqrs","stuvwxy","yzabcdx","efghijk","klmnop","abcdefgh"]), 5, 'Test 18');
test(wordCount(["abc","def","ghi"], ["abcd","abcf","defg","ghij"]), 4, 'Test 19');
test(wordCount(targetWords), Error: Solution.wordCount[] missing 2 required positional arguments: 'startWords' and 'targetWords', 'Test 20');
test(wordCount(["abc","def","ghi"], ["abcd","efg","hij","defg","ghik"]), 3, 'Test 21');
test(wordCount(["xyz","mnop","qrst"], ["xyzw","mnopq","qrstuvw"]), 2, 'Test 22');
test(wordCount(["a","b","c","d"], ["ab","bc","cd","da","abc","bcd","cda","dab"]), 4, 'Test 23');
test(wordCount(["abcdefghijklmnopqrstuvwxyz"[1:-1]], ["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyza"]), Error: Solution.wordCount[] missing 1 required positional argument: 'startWords', 'Test 24');
test(wordCount(["abcdefghij","klmnopqr","stuvwxyz"], ["abcdefghijk","klmnopqrs","stuvwxyzab","abcdefghijl","klmnopqrt","stuvwxyzabc","abcdefghijm","klmnopqru","stuvwxyzabcd","abcdefghijn","klmnopqrv","stuvwxyzabcde","abcdefghijo","klmnopqrw","stuvwxyzabcdef","abcdefghijp","klmnopqrx","stuvwxyzabcdefg","abcdefghirq","klmnopqry","stuvwxyzabcdefgh","abcdefghirs","klmnopqrz","stuvwxyzabcdefghi","abcdefghirt","klmnopqs","stuvwxyzabcdefghij","abcdefghiru","klmnopqt","stuvwxyzabcdefghijk","abcdefghirv","klmnopqu","stuvwxyzabcdefghijl","abcdefghirw","klmnopqv","stuvwxyzabcdefghijm","abcdefghirx","klmnopqw","stuvwxyzabcdefghijn","abcdefghiry","klmnopqx","stuvwxyzabcdefghijo","abcdefghirz","klmnopqy","stuvwxyzabcdefghijp","klmnopqz","stuvwxyzabcdefghirq"]), 14, 'Test 25');
test(wordCount(["quick","brown","fox"], ["quicks","brownf","foxj","quickm","brownx"]), 5, 'Test 26');
test(wordCount(["a","b","c"], ["ab","bc","ca","abc","abcd"]), 3, 'Test 27');
test(wordCount(["abc","def","ghi"], ["abcd","efg","ghij"]), 2, 'Test 28');
test(wordCount(["zebra","dog","cat"], ["zebrao","doge","taco"]), 3, 'Test 29');
test(wordCount(["a", "b", "c", "d", "e", "f", "g", "h"], ["ab", "bc", "cd", "de", "ef", "fg", "gh", "ha"]), 8, 'Test 30');
test(wordCount(["abcdefgh","ijklmnop","qrstuvwxyz"], ["abcdefghi","ijklmnopq","qrstuvwxyzx","abcdefghjkl","ijklmnopqr"]), 2, 'Test 31');
test(wordCount(["xyz","abc","uvw","def","ghi"], ["xyzab","uvwxy","defgh","abcdef","mnopq"]), 0, 'Test 32');
test(wordCount(["pqr","stu","vwx"], ["pqrs","stuv","vwxy","pqrst","stuvw","vwxys","mnopq"]), 3, 'Test 33');
test(wordCount(["quick","brown","fox"], ["quickly","brownly","foxes","quickbrown","brownfox"]), 0, 'Test 34');
test(wordCount(["a","b","c","d"], ["ab","bc","cd","abc","abcd"]), 3, 'Test 35');
test(wordCount(["aabbcc","ddeeff","gghhii"], ["aabbccx","ddeeffx","gghhia","ddeeffg","gghhiih"]), 2, 'Test 36');
test(wordCount(["abcdef","ghijkl","mnopqr","stuvwx"], ["abcdefg","ghijklm","mnopqrs","stuvwxz","abcdefghijklmnopqrstuvwxyza","ghijklmnopqrstuvwxyz","mnopqrstuvwxyzabc","stuvwxyzmnopqr"]), 4, 'Test 37');
test(wordCount(["abc","de","fgh","xyz"], ["abcd","def","efg","xyzz"]), 2, 'Test 38');
test(wordCount(["jump","over","lazy"], ["jumpo","overj","lazyr","jumpr","overv"]), 4, 'Test 39');
test(wordCount(["mnop","qrst","uvwx"], ["mnopq","qrstu","vwxyz","mnopqr","qrstuv"]), 2, 'Test 40');
test(wordCount(["abcd", "efgh", "ijkl"], ["abcde", "efghi", "ijklm", "abcdx", "efghy", "ijklz"]), 6, 'Test 41');
test(wordCount(startWords), Error: Solution.wordCount[] missing 2 required positional arguments: 'startWords' and 'targetWords', 'Test 42');
test(wordCount(["hello","world","abc"], ["helloz","worldy","abcd"]), 3, 'Test 43');
test(wordCount(["mnop","qrst","uvwx"], ["mnopq","qrstuv","uvwxy","mnopqr","qrstuvw","uvwxzy","mnopqrst","qrstuvwx","uvwxyza","mnopqrstuvwxyz"]), 2, 'Test 44');
test(wordCount(["programming","is","fun"], ["programmings","isis","funny","programmingis","isfun"]), 0, 'Test 45');
test(wordCount(["jump","over","lazy"], ["jumped","overly","lazily","jumpover","overlazy"]), 0, 'Test 46');
test(wordCount(["programming"[i:] for i in range[len["programming"]]], ["programming"[i:] + chr[ord['a'] + i % 26] for i in range[len["programming"]]]), Error: Solution.wordCount[] missing 2 required positional arguments: 'startWords' and 'targetWords', 'Test 47');
test(wordCount(["abcdefghij"], ["abcdefghijk","abcdefghijl","abcdefghijm","abcdefghijn","abcdefghijo","abcdefghijp","abcdefghijq","abcdefghijr","abcdefghjis","abcdefghijt","abcdefghiju","abcdefghijv","abcdefghijw","abcdefghijx","abcdefghijy","abcdefghijz"]), 16, 'Test 48');
test(wordCount(["abc", "bcd", "efg"], ["abcd", "bcde", "efgh"]), 3, 'Test 49');
test(wordCount(["zebra","panda","giraffe"], ["zebrac","pandaf","giraffeb","zebrad","pandaq"]), 5, 'Test 50');
test(wordCount(["jump","over","lazy"], ["jumper","overt","lazier"]), 1, 'Test 51');
test(wordCount(["a","b","c"], ["ab","bc","ca","abc","abcd","abcde"]), 3, 'Test 52');
test(wordCount(["xyz","wxy","uvw"], ["xyza","wxyb","uvwz","uvwxy"]), 3, 'Test 53');
test(wordCount(["abcdefgh","ijklmnop","qrstuvwxyz","abcxyz","uvwxy"], ["abcdefghi","ijklmnopq","qrstuvwxyzx","abcxyzw","uvwxyza","mnopqrstu"]), 3, 'Test 54');
test(wordCount(["abcd","efgh","ijkl"], ["abcde","efghi","jklmn","abcd"]), 2, 'Test 55');
test(wordCount(["abcd","efgh","ijkl"], ["abcde","efghi","ijklm","mnop"]), 3, 'Test 56');
test(wordCount(["xyz","uvw","rst"], ["xyza","uvwq","rstu","rstuv"]), 3, 'Test 57');
test(wordCount(["abc","def","ghi"], ["abcd","defg","ghij","hijk","mnop","qrst","uvw","xyz"]), 3, 'Test 58');
test(wordCount(["quick","brown","fox"], ["quickly","brownie","foxy","quicklybrown","brownief","quickbrown","quickfox","brownfox"]), 1, 'Test 59');
test(wordCount(["abcdefghijklmnopqrstuvwxyz"], ["abcdefghijklmnopqrstuvwxyza","abcdefghijklmnopqrstuvwxyzb"]), 0, 'Test 60');
test(wordCount(["quick","brown","fox"], ["quickly","brownish","foxy"]), 1, 'Test 61');
test(wordCount(["apple","banana","cherry"], ["appleb","bananac","cherryd","applef","bananag"]), 4, 'Test 62');
test(wordCount(["abcd","efgh","ijkl"], ["abcde","efghi","ijklm"]), 3, 'Test 63');
test(wordCount(["one","two","three"], ["onet","twot","threet","oneto","twoto","threeto","onetwo","twotwo","threetwo","onetwothree","twotwothree","threetwothree","onetwofour","twotwofour","threetwofour"]), 1, 'Test 64');
test(wordCount(["abcd","efgh","ijkl"], ["abcde","efghi","ijklm","mnopq"]), 3, 'Test 65');
test(wordCount(["hello","world"], ["hellow","worlds","dlrow"]), 2, 'Test 66');
test(wordCount(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["ab","bc","cd","de","ef","fg","gh","hi","ij","jk","kl","lm","mn","no","op","pq","qr","rs","st","tu","uv","vw","wx","xy","yz","za"]), 26, 'Test 67');
test(wordCount(["zyxwvutsrqponmlkjihgfedcba"], ["zyxwvutsrqponmlkjihgfedcbaz","zyxwvutsrqponmlkjihgfedcbay","zyxwvutsrqponmlkjihgfedcbax","zyxwvutsrqponmlkjihgfedcbaw"]), 0, 'Test 68');
test(wordCount(["pqr","stu","vwx","yz","abc"], ["pqrs","stuv","vwxy","yzab","uvwxy","mnopq"]), 3, 'Test 69');
test(wordCount(["abcd","efgh","ijkl","mnop"], ["abcde","efghi","ijklm","nopqr"]), 3, 'Test 70');
test(wordCount(["hello","world"], ["ehllo","dlrow","owrld","helloa","worldb"]), 2, 'Test 71');
test(wordCount(["a","b","c","d"], ["ab","bc","cd","de","ef","fg","gh","hi","ij","jk","kl","lm","mn","no","op","pq","qr","rs","st","tu","uv","vw","wx","xy","yz","za"]), 5, 'Test 72');
test(wordCount(["mnopq","rstuv","wxyz"], ["mnopqr","rstuvw","wxyza","mnopqs","rstuvx","wxyzab","mnopqt","rstuvy","wxyzac","mnopqu","rstuvz","wxyzad","mnopqv","rstuvw","wxyzae"]), 11, 'Test 73');
test(wordCount(["abcdefghijklmnopqrstuvwxyz"], ["abcdefghijklmnopqrstuvwxyza","abcdefghijklmnopqrstuvwxyzb","abcdefghijklmnopqrstuvwxyzc"]), 0, 'Test 74');
test(wordCount(["abcdefghijklmnopqrstuvwxyz"], ["abcdefghijklmnopqrstuvwxyza","abcdefghijklmnopqrstuvwxyzb","abcdefghijklmnopqrstuvwxyzc","abcdefghijklmnopqrstuvwxyzd","abcdefghijklmnopqrstuvwxyze","abcdefghijklmnopqrstuvwxyzf","abcdefghijklmnopqrstuvwxy zg","abcdefghijklmnopqrstuvwxyzh","abcdefghijklmnopqrstuvwxyzi","abcdefghijklmnopqrstuvwxyzj","abcdefghijklmnopqrstuvwxyzk","abcdefghijklmnopqrstuvwxyzl","abcdefghijklmnopqrstuvwxyzm","abcdefghijklmnopqrstuvwxyzn","abcdefghijklmnopqrstuvwxyzo","abcdefghijklmnopqrstuvwxyzp","abcdefghijklmnopqrstuvwxyzq","abcdefghijklmnopqrstuvwxyza","abcdefghijklmnopqrstuvwxyzz"]), Error: negative shift count, 'Test 75');
test(wordCount(["a","b","c","d"], ["ab","bc","cd","da"]), 4, 'Test 76');

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
