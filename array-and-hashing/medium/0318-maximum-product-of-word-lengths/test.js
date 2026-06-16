// Test: 318. Maximum Product Of Word Lengths
// 67 test cases from LeetCodeDataset
// Run: node test.js

const { maxProduct } = require("./solution");

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

console.log("\n318. Maximum Product Of Word Lengths\n");

test(maxProduct(["a","ab","abc","d","cd","bcd","abcd"]), 4, 'Test 1');
test(maxProduct(["eae","eaecbaaa","aadcba","bae","abc","abcbb","cba","abcd","ac","ba","aaaa","d","abac","ababc","abcabc","a","bc","b"]), 8, 'Test 2');
test(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]), 16, 'Test 3');
test(maxProduct(["a","aa","aaa","aaaa"]), 0, 'Test 4');
test(maxProduct(["aa","aaa","aaaa","aaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aa"]), 0, 'Test 5');
test(maxProduct(["hello","world","python","programming"]), 0, 'Test 6');
test(maxProduct(["abc","def","ghi"]), 9, 'Test 7');
test(maxProduct(["arml","vb","ve","vef","k"]), 12, 'Test 8');
test(maxProduct(["eae","eaee","aaee","aee","eceeaeeea","cecceeaeea","eceeaeea"]), 0, 'Test 9');
test(maxProduct(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuvwxyzabcdefghijkl","abcdefghijklnmopqrstuvwxyz"]), 0, 'Test 10');
test(maxProduct(["unique","strings","without","common","characters","different","letters"]), 42, 'Test 11');
test(maxProduct(["unique","letters","pair","matches","product","maximum","distinct","words","solution","algorithm"]), 49, 'Test 12');
test(maxProduct(["xylophone","guitar","violin","flute","drum","piano","harp","cymbal","trumpet","trombone","saxophone","clarinet","oboe","bassoon","tuba"]), 54, 'Test 13');
test(maxProduct(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","bbaacceegghhkkllmmnnooppqqrrssttuuvvwwxxyyzz","ccaabbeegghhkkllmmnnooppqqrrssttuuvvwwxxyyzz"]), 0, 'Test 14');
test(maxProduct(["abcdefghij","klmnopqrstu","vwxyzabcde","fghijklmno","pqrstuvwx","yzabcdefg","hijklmnop","qrstuvwxy","zabcdefghij","klmnopqrstu","vwxyzabcde","fghijklmno","pqrstuvwx","yzabcdefg","hijklmnop","qrstuvwxy"]), 121, 'Test 15');
test(maxProduct(["qwerty","asdfgh","zxcvbn","polkij","mnbvcx","lkjhgf","ertyui","opasdf","ghjklz","xcvbnm"]), 36, 'Test 16');
test(maxProduct(["abcdefghij","klmnopqrstu","vwxyzabcde","fghijklmno","pqrstuvwx","yzabcdefg","hijklmnop","qrstuvwxy","zabcdefghij","klmnopqrstu"]), 121, 'Test 17');
test(maxProduct(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","mnopqrstuvwxyz","abcdef","ghijkl","qrstuv","wxyzab","cdefgh","ijklmn","opqrst","vwxyza","bcdefg","hijklm","nopqr","stuvw","xyza","bcdef","ghijk","lmnop","qrstu","vwxyz","abcdefg","hijklmn","opqrstu","vwxyzab","cdefghij","klmnopqr","stuvwxyz","abcdefghij","klmnopqrstu","vwxyzabcde","fghijklmnop","qrstuvwxy","zabcdefghi","jklmnopqrs","tuvwxyzabc","defghijklmno","pqrstuvwxyzabc","efghijklmnopqr","stuvwxyzabcd","tuvwxyzabcde","uvwxyzabcdefg","vwxyzabcdefgh","wxyzabcdefghi","xyzabcdefghij","yzabcdefghijk","zabcdefghijkl","abcdefghijkln"]), 168, 'Test 18');
test(maxProduct(["abcdefg","hijklmnop","qrstuv","wxyz","mnopqr","ghijkl","uvwxy","stuv","zabcde","fghij"]), 63, 'Test 19');
test(maxProduct(["qwertyuiop","asdfghjklzxcvbnm","qwerty","asdfgh","zxcvbn","mnbvcxz","lkjhgfdsa","poiuytrewq","bnmxcvz","poiuyt","lkjhgf","mnbvcx","lkjhgfdsazxcvbnm","qwertyuiopasdfghjklzxcvbnm"]), 160, 'Test 20');
test(maxProduct(["aabbccddeeff","ghhiiijjkkll","mmnnooppqqrr","ssttuuvvwwxx","yyzzzzz","abcdefg","hijklmnop","qrstuvwxyz","mnopqr","efghij","vwxyz","yzab","qrstuv","wxyzab","mnopqrstu","vwxyzabcd","efghijklm","nopqrstu","vwxyzab","cdefghij","klmnopqrstu","vwxyzabcd","efghijklmnopqr","stuvwxyzabcd"]), 168, 'Test 21');
test(maxProduct(["pqrs","tuvw","xyz","mnop","qrst","ijkl","efgh","abcd","nopqr","stuvw","xyzab","mnopqr","stuvwx","yzabcd","efghij","klmno","pqrstu","vwxyz","abcdefghij","klmnopqr","stuvwxyz","abcdefghijk","lmnopqrstu","vwxyzabcd","efghijklmnop","qrstu","vwxyzab","cdefghij","klmnopqrstu","vwxyzabcd","efghijklmnopqr","stuvwxyzabcd","mnopqrstu","vwxyzab","cdefghij","klmnopqrstu","vwxyzabcd","efghijklmnopqr","stuvwxyzabcd"]), 168, 'Test 22');
test(maxProduct(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghij","klmnopqrst","tuvwxyz","abcdefghijklmno","pqrstuvwxyzabc"]), 105, 'Test 23');
test(maxProduct(["abcdefg","hijklmn","opqrstu","vwxyzab","cdefghi","jklmnop","qrstuvw","xyzabcd","efghijk","lmnopqr","stuvwxz","bcdefgh","ijklmno","pqrstuv","wxyzabc","defghij","klmnopq","rstuvwx","stuvwxy","tuwvxyz","uvwxyza","vwxyzb","wxyza","xyzab","yzabc","zabcd"]), 49, 'Test 24');
test(maxProduct(["abcdefgh","ijklmnop","qrstuvwx","yzabcdef","ghijklmo","nopqrstu","vwxyzabc","defghijk","lmnopqrs","tuvwxyz","abcdefghij","klmnopqr","stuvwxyzab","cdefghijkl","mnopqrstuv","wxyza","bcdefghijkl","mnopqrstuvw","xyzabcde","fghijklmno","pqrstuvwx","yzabcdefg","hijklmnopq","rstuvwxyz"]), 121, 'Test 25');
test(maxProduct(["abcdefgh","ijklmnop","qrstuvwx","yzabcd","efghij","klmnopqr","stuvwxyz","abcdijkl","mnopqrst","uvwxyzae","fghij","klmnop","qrstuv","yzab","efghi","klmno","pqrstuv","wxyz","abcd","efgh","ijkl","mnop","qrst","uvwx","yz","abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]), 64, 'Test 26');
test(maxProduct(["unique","letters","only","here","now","words","without","overlap","shared","characters","strings","distinct"]), 56, 'Test 27');
test(maxProduct(["aaaaabbbbbcccccdddddeeeeeffffffggggghhhhhhiiiiijjjjjjkkkkklllllmmmmmnnnnnooooo","pppppqqqqqrrrrrssssstttttuuuuuvvvvvwwwwwxxxxxyyyyyzzzzz","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"]), 9898, 'Test 28');
test(maxProduct(["abcdefghijk","lmnopqrstuv","wxyzabcde","fghijklmn","opqrstuvw","xyzabcde","fghijklmn","opqrstuvw","xyzabcde","fghijklmn"]), 121, 'Test 29');
test(maxProduct(["unique","words","only","here","for","testing","purposes","please","do","not","reuse"]), 30, 'Test 30');
test(maxProduct(["abcdxyz","mnopqrs","tuvw","efghijkl","lmno","abxyz","mnop","tuwv","ijkl","efgh","lmn","abxyz","mnop","tuwv","ijkl","efgh","lmn","abxyz","mnop","tuwv"]), 56, 'Test 31');
test(maxProduct(["verylongwordindeed","anotherlongword","short","tiny","mediumsized","averylongword","tinywords","verysmall"]), 0, 'Test 32');
test(maxProduct(["abcdefgh","ijklmnop","qrstuvwx","yzab","cdefgh","ijklmn","opqrst","vwxyza","bcdefg","hijklmno","pqrstuvw","xyzabc","defghi","jklmnpqr","stuvwxyl","yzabcd","efghij","klmnopqr","stuvwxy","zabcde","fghijkln","opqrstuv","wxyza"]), 64, 'Test 33');
test(maxProduct(["unique","letters","only","here","these","words","have","no","commonality"]), 44, 'Test 34');
test(maxProduct(["abcde","fghij","klmno","pqrst","uvwxy","z","abc","def","ghi","jkl","mno","pqr","stu","vwx","y"]), 25, 'Test 35');
test(maxProduct(["zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"]), 4356, 'Test 36');
test(maxProduct(["qwertyuiop","asdfghjkl","zxcvbnm","qazwsxedcrfvtgbyhnujmiklop","mnbvcxzlkjhgfdsapoiuytrewq","asdfghjklzxcvbnm","qwertyuiopasdfghjklzxcvbnm","asdfghjklqwertyuiopzxcvbnm"]), 160, 'Test 37');
test(maxProduct(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","qwertyuiop","asdfghjkl","zxcvbnm"]), 90, 'Test 38');
test(maxProduct(["qwertyuiop","asdfghjkl","zxcvbnm","qazwsxedc","rfvtgbyhn","ujmikolp","mnbvcxz","lkjhgfdsa","poiuytrewq","opmijnuhb","lyfgcrdxv","etahbdvsq"]), 90, 'Test 39');
test(maxProduct(["unique","words","only","here","not","sharing","any","letters","with","each","other","set","of","letters","are","different"]), 30, 'Test 40');
test(maxProduct(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd","efghij","klmnop","qrstuv","wxyzab","cdefgh"]), 36, 'Test 41');
test(maxProduct(["abcdefghijklmnopqrstuvwxyz","bcdefghijklmnopqrstuvwxyza","cdefghijklmnopqrstuvwxyzab"]), 0, 'Test 42');
test(maxProduct(["optimization","algorithms","coding","problems","data","structures","interview","preparation","practice"]), 32, 'Test 43');
test(maxProduct(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"]), 36, 'Test 44');
test(maxProduct(["abcd","efgh","ijkl","mnop","qrst","uvwx","yzab","cdef","ghij","klmn","opqr","stuv","wxyz","mnopqr","stuvwx","yzabcd","efghij","klmno"]), 36, 'Test 45');
test(maxProduct(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghij","klmnopqrstuvw","xyz","uvw","mnopqr","ghijkl"]), 130, 'Test 46');
test(maxProduct(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twentyone","twentytwo","twentythree","twentyfour","twentyfive","twentysix","twentyseven","twentyeight","twentynine","thirty"]), 44, 'Test 47');
test(maxProduct(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuv","abcdefghijk","qrstuvwxzy","abcdefgh","ijklmnop","qrstuvw","xyz","abcdefghij"]), 110, 'Test 48');
test(maxProduct(["abcdefgh","ijklmnop","qrstuvwx","yzabcdef","ghijklmo","nopqrstu","vwxyzabc","defghijk","lmnopqrs","tuvwxyz","abcdefghij","klmnopqr","stuvwxyzab","cdefghijkl","mnopqrstuv","wxyza","bcdefghijkl","mnopqrstuvw","xyzabcde","fghijklmno","pqrstuvwx","yzabcdefg","hijklmnopq","rstuvwxyz","abcde","fghij","klmno","pqrst","uvwxy","zabcd","efghi","jklmn","opqrs","tuvwx","yzabc","defgh","ijklm","nopqr","stuvw","xyzab","cdefg","hijkl","mnopq","rstuv","wxyza","bcdef","ghijk","lmnop","qrstu","vwxyz","abcde","fghij","klmno","pqrst","uvwxy","zabcd"]), 121, 'Test 49');
test(maxProduct(["abcdefgh","ijklmnop","qrstuvwx","yzabcd","efghij","klmnopqr","stuvwxyz","abcdijkl","mnopqrst","uvwxyzae"]), 64, 'Test 50');
test(maxProduct(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 4, 'Test 51');
test(maxProduct(["aaaaaa","bbbbbb","cccccc","dddddd","eeeeee","ffffff","gggggg","hhhhhh","iiiiii","jjjjjj"]), 36, 'Test 52');
test(maxProduct(["this","is","a","test","of","the","maximum","product","function","with","various","lengths","and","characters"]), 49, 'Test 53');
test(maxProduct(["abcdefghij","klmnopqrstu","vwxyzabcde","fghijklmno","pqrstuvwxyzabc","defghijklmnopq","rstuvwxyzabcd","efghijklmnopqr","stuvwxyzabcde","tuvwxyzabcdef","uvwxyzabcdefg","vwxyzabcdefgh","wxyzabcdefghi","xyzabcdefghij","yzabcdefghijk","zabcdefghijkl","abcdefghijkln"]), 143, 'Test 54');
test(maxProduct(["abcdefgh","ijklmnop","qrstuvwx","yzabcdef","ghijklmn","opqrstuv","wxyzabcd","efghijkl","mnopqrst","qrstuvwx"]), 64, 'Test 55');
test(maxProduct(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","abcdefghijklmnopqrstuvwxyz"]), 1, 'Test 56');
test(maxProduct(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zyxwvutsrqponmlkjihgfedcba","abcdefghijklmnopqrstuv","ghijklmnopqrstuvwxyz","mnopqrstuvwxyza","bcdefghijklmnopqrstuvwxyza"]), 0, 'Test 57');
test(maxProduct(["short","longerwords","tiny","largerwordsindeed","micro","nano","pico","femto","atto","zepto","yocto"]), 0, 'Test 58');
test(maxProduct(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 1, 'Test 59');
test(maxProduct(["qwertyuiop","asdfghjkl","zxcvbnm","mnbvcxz","lkjhgfdsa","poiuytrewq","asdfghjklpoiuytrewq","zxcvbnmlkjhgfdsapoiuytrewq"]), 133, 'Test 60');
test(maxProduct(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuvwxyzabcdefghijkl","abcdefghijqrstuvwxzy","uniquestringswithoutcommoncharacters","differentletters","optimizationalgorithms","codingproblems","datastructures","interviewpreparation","practice","abcdefgh","ijklmnop","qrstuvwx","yzabcd","efghij","klmnopqr","stuvwxyz","abcdijkl","mnopqrst","uvwxyzae"]), 112, 'Test 61');
test(maxProduct(["abcdexyz","mnopqrtuvw","ijklstuvwx","ghfxyz","abcdef","ghijklmn","opqrstuv","wxyz","abcd","efgh","ijkl","mnop","qrst","uvwx","yzab","mnop","qrst","uvwx","yzab"]), 80, 'Test 62');
test(maxProduct(["unique","letters","only","distinct","characters","different","setsof","words"]), 40, 'Test 63');
test(maxProduct(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd","efghij","klmnop","qrstuv","wxyzaa","bcdefg"]), 36, 'Test 64');
test(maxProduct(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuvwxyzabcdefghijkl","abcdefghijqrstuvwxzy"]), 0, 'Test 65');
test(maxProduct(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqr","ghijkl","uvwxy","stuv","zabcde","fghij","qwerty","asdfghjklzxcvbnm","qwertyuiop","asdfgh","zxcvbn","mnbvcxz","lkjhgfdsa","poiuytrewq","bnmxcvz","poiuyt","lkjhgf","mnbvcx","lkjhgfdsazxcvbnm","qwertyuiopasdfghjklzxcvbnm"]), 160, 'Test 66');
test(maxProduct(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuv","abcdefghij","klmnopqr","stuvwxyz"]), 100, 'Test 67');

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
