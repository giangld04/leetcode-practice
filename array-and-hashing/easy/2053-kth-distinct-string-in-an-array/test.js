// Test: 2053. Kth Distinct String In An Array
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { kthDistinct } = require("./solution");

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

console.log("\n2053. Kth Distinct String In An Array\n");

test(kthDistinct(["a"], 1), a, 'Test 1');
test(kthDistinct(["a","a","b","b","c","c","d"], 1), d, 'Test 2');
test(kthDistinct(["apple","banana","apple","orange","banana","kiwi"], 2), kiwi, 'Test 3');
test(kthDistinct(["apple","banana","apple","orange","banana","grape"], 2), grape, 'Test 4');
test(kthDistinct(["aaa","aa","a"], 1), aaa, 'Test 5');
test(kthDistinct(["a","b","c","d","e","f"], 6), f, 'Test 6');
test(kthDistinct(["repeat","repeat","repeat"], 1), , 'Test 7');
test(kthDistinct(["apple","banana","cherry","date"], 1), apple, 'Test 8');
test(kthDistinct(["hello","world","hello","world"], 2), , 'Test 9');
test(kthDistinct(["x","y","z","x","y","z"], 2), , 'Test 10');
test(kthDistinct(["apple","apple","banana","banana","cherry"], 3), , 'Test 11');
test(kthDistinct(["apple","banana","apple","orange"], 2), orange, 'Test 12');
test(kthDistinct(["repeat","repeat","repeat","repeat"], 1), , 'Test 13');
test(kthDistinct(["a","b","c","d","e","f","g","h","i","j"], 10), j, 'Test 14');
test(kthDistinct(["unique","distinct","strings","unique"], 2), strings, 'Test 15');
test(kthDistinct(["unique"], 1), unique, 'Test 16');
test(kthDistinct(["same","same","same","same"], 1), , 'Test 17');
test(kthDistinct(["apple","banana","cherry"], 1), apple, 'Test 18');
test(kthDistinct(["hello","world","hello","python","world","code"], 3), , 'Test 19');
test(kthDistinct(["a","b","a"], 3), , 'Test 20');
test(kthDistinct(["one","two","three","four","five"], 5), five, 'Test 21');
test(kthDistinct(["a","a","a","a","a"], 1), , 'Test 22');
test(kthDistinct(["test","test","test"], 1), , 'Test 23');
test(kthDistinct(["d","b","c","b","c","a"], 2), a, 'Test 24');
test(kthDistinct(["hello","world","hello","python","world"], 1), python, 'Test 25');
test(kthDistinct(["single"], 2), , 'Test 26');
test(kthDistinct(["xyz","zyx","zyx","xyz","zyx"], 1), , 'Test 27');
test(kthDistinct(["abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij"], 5), abcdefgh, 'Test 28');
test(kthDistinct(["unique","strings","only","here","unique","strings","here","unique"], 2), , 'Test 29');
test(kthDistinct(["longer","string","values","are","also","allowed","in","this","example"], 2), string, 'Test 30');
test(kthDistinct(["unique1","unique2","unique3","unique4","unique5","unique6","unique7","unique8","unique9","unique10"], 5), unique5, 'Test 31');
test(kthDistinct(["same","word","same","word","same","word","same","word","same"], 1), , 'Test 32');
test(kthDistinct(["one","two","three","four","five","six","seven","eight","nine","ten"], 7), seven, 'Test 33');
test(kthDistinct(["x","y","x","y","x","y","x","y","x","y","x","y","x","y","x","y","x","y","x","y"], 1), , 'Test 34');
test(kthDistinct(["test","testing","test","testing","test","testing"], 1), , 'Test 35');
test(kthDistinct(["abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yzab", "cdef", "ghij", "klmn", "opqr", "stuv", "wxyz"], 13), wxyz, 'Test 36');
test(kthDistinct(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"], 20), twenty, 'Test 37');
test(kthDistinct(["short","longerstring","shorter","longeststring","short","shorter","longerstring"], 2), , 'Test 38');
test(kthDistinct(["abcd","abc","ab","a","abcd","abc","ab","a","abcd","abc","ab","a"], 3), , 'Test 39');
test(kthDistinct(["abc", "def", "ghi", "abc", "jkl", "ghi", "mno"], 4), , 'Test 40');
test(kthDistinct(["same","same","same","same","same","same","same","same","same","same","unique"], 1), unique, 'Test 41');
test(kthDistinct(["x","y","x","y","x","y","x","y","x","y","unique"], 6), , 'Test 42');
test(kthDistinct(["x","y","z","x","y","z","x","y","z"], 1), , 'Test 43');
test(kthDistinct(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 26), z, 'Test 44');
test(kthDistinct(["unique", "distinct", "unique", "distinct", "unique", "distinct", "unique", "distinct", "unique", "distinct"], 5), , 'Test 45');
test(kthDistinct(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 27), , 'Test 46');
test(kthDistinct(["test","testcase","testing","test","testcase","test","test","testcase","testing","testing"], 3), , 'Test 47');
test(kthDistinct(["xy","yx","xx","yy","xz","zx","yz","zy","xxyy","xyxy","yxyx","yxyy","xyyx","xyyy","yyxx","yyxy","yyyx","yyyy"], 10), xyxy, 'Test 48');
test(kthDistinct(["xyz","zyx","wxy","yxw","uvw","vuw","wuv","abc","cab","bac"], 2), zyx, 'Test 49');
test(kthDistinct(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","abc","def","ghi"], 5), vwx, 'Test 50');
test(kthDistinct(["same","different","same","different","same","different","same","different"], 2), , 'Test 51');
test(kthDistinct(["a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d"], 10), , 'Test 52');
test(kthDistinct(["aaaaa","aaaab","aaaba","aabaa","abaaa","baaaa","abcde","bcdea","cdeab","decab","efghi","fghie","ghief","hiefg","iefgh","jklmn","klmno","lmnop","mnopq","nopqr","opqrs","pqrst","qrstu","rstuv","stuvw","tuvwx","uvwxy","vwxyz"], 15), iefgh, 'Test 53');
test(kthDistinct(["unique","string","in","this","array"], 5), array, 'Test 54');
test(kthDistinct(["loop","pool","look","cool","cool","lopo","loopo"], 3), look, 'Test 55');
test(kthDistinct(["repeated","repeated","repeated","repeated","repeated","repeated"], 1), , 'Test 56');
test(kthDistinct(["abc","acb","bac","bca","cab","cba","abcd","abdc","acbd","acdb","adbc","adcb","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba"], 25), dabc, 'Test 57');
test(kthDistinct(["same","word","same","word","same"], 2), , 'Test 58');
test(kthDistinct(["complex","input","with","various","strings","complex","input","with","various","strings","complex","input","with","various","strings"], 5), , 'Test 59');
test(kthDistinct(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], 9), , 'Test 60');
test(kthDistinct(["repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "repeat", "unique"], 21), , 'Test 61');
test(kthDistinct(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 15), o, 'Test 62');
test(kthDistinct(["one","two","three","four","five","six","seven","eight","nine","ten"], 15), , 'Test 63');
test(kthDistinct(["abcd","dcba","abcd","dcba","abcd"], 2), , 'Test 64');
test(kthDistinct(["unique","strings","here","are","distinct","elements","with","no","repeats"], 10), , 'Test 65');
test(kthDistinct(["apple","banana","apple","cherry","date","banana","fig"], 4), , 'Test 66');
test(kthDistinct(["abcd","ab","a","abcde","abcd","abc","ab","a"], 3), , 'Test 67');
test(kthDistinct(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"], 7), seven, 'Test 68');
test(kthDistinct(["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth"], 1), first, 'Test 69');
test(kthDistinct(["aabb","abab","bbaa","abba","baab","baba","aabb","abab"], 1), bbaa, 'Test 70');
test(kthDistinct(["a","a","a","b","b","c","c","c","c","d","d","d","d","d"], 4), , 'Test 71');
test(kthDistinct(["one","two","three","four","five","six","seven","eight","nine","ten"], 5), five, 'Test 72');
test(kthDistinct(["repeat","repeat","distinct","repeat","distinct","distinct","distinct","repeat","distinct","distinct","distinct","distinct","distinct","distinct","distinct","distinct","distinct","distinct","distinct","distinct"], 6), , 'Test 73');
test(kthDistinct(["same","same","same","same","same","same","same","same","same","same","different"], 2), , 'Test 74');
test(kthDistinct(["abcd","abdc","acbd","acdb","adbc","adcb","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba"], 20), dacb, 'Test 75');
test(kthDistinct(["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"], 10), , 'Test 76');
test(kthDistinct(["apple","banana","apple","orange","banana","grape","kiwi","grape"], 4), , 'Test 77');
test(kthDistinct(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 5), e, 'Test 78');
test(kthDistinct(["same","same","same","same","same","unique","unique","unique"], 1), , 'Test 79');
test(kthDistinct(["abcd","abcde","abcdef","abcdefg","abcdefgh"], 3), abcdef, 'Test 80');
test(kthDistinct(["aabb","abab","abba","baab","baba","bbaa","aaaa","bbbb","cccc","dddd"], 5), baba, 'Test 81');
test(kthDistinct(["aaa","aab","aac","aad","aae","aaf","aag","aah","aai","aaj","aak"], 10), aaj, 'Test 82');
test(kthDistinct(["only","one","distinct","string","here","in","this","array"], 1), only, 'Test 83');
test(kthDistinct(["apple","banana","apple","orange","banana","grape","kiwi"], 4), , 'Test 84');
test(kthDistinct(["apple", "banana", "cherry", "banana", "date", "elderberry", "fig", "grape", "fig", "honeydew"], 5), grape, 'Test 85');
test(kthDistinct(["repeat","repeat","repeat","distinct","distinct","distinct","kth","distinct"], 3), , 'Test 86');
test(kthDistinct(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen"], 10), ten, 'Test 87');
test(kthDistinct(["a", "ab", "abc", "abcd", "abcde", "a", "ab", "abc", "abcd"], 3), , 'Test 88');
test(kthDistinct(["a","b","c","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 10), m, 'Test 89');
test(kthDistinct(["repeated","repeated","repeated","repeated","repeated","repeated","repeated"], 1), , 'Test 90');
test(kthDistinct(["x", "y", "z", "x", "y", "z", "x", "y", "z", "x", "y", "z", "x", "y", "z"], 1), , 'Test 91');
test(kthDistinct(["aaaaa","aaaab","aaaba","aabaa","abaaa","baaaa","abcde","bcdea","cdeab","decab"], 8), bcdea, 'Test 92');
test(kthDistinct(["test","testing","tested","testable","testify","testing"], 2), tested, 'Test 93');
test(kthDistinct(["abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd"], 1), , 'Test 94');
test(kthDistinct(["test","testing","tested","testing","tested","test","testing"], 2), , 'Test 95');
test(kthDistinct(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], 5), mno, 'Test 96');
test(kthDistinct(["x","y","x","y","x","y","z","w","z","w","z","w","v","u","v","u","t","s","r","q","p"], 10), , 'Test 97');
test(kthDistinct(["repeat","distinct","repeat","distinct","repeat","distinct","repeat","distinct","repeat","distinct"], 5), , 'Test 98');
test(kthDistinct(["unique","unique","unique","unique","unique","unique","unique","unique","unique","unique","unique","unique","unique","unique","unique","unique","unique","unique","unique","unique"], 1), , 'Test 99');
test(kthDistinct(["abcd","dcba","adbc","bdac","cadb","dacb","abcd","dcba"], 5), , 'Test 100');
test(kthDistinct(["apple","banana","cherry","apple","banana","date","fig","grape","fig"], 4), , 'Test 101');
test(kthDistinct(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yza"], 10), , 'Test 102');
test(kthDistinct(["same","same","same","different","different","unique"], 3), , 'Test 103');
test(kthDistinct(["repeated","distinct","value","repeated","value","distinct","unique"], 4), , 'Test 104');
test(kthDistinct(["same","same","different","different","unique"], 3), , 'Test 105');
test(kthDistinct(["abc","def","abc","def","abc","def","abc","def","ghi","jkl"], 3), , 'Test 106');
test(kthDistinct(["abcd","abcde","abcdef","abc","ab","a","","a","ab","abc"], 5), , 'Test 107');
test(kthDistinct(["abcd","dcba","abcd","dcba","abcd","dcba"], 3), , 'Test 108');
test(kthDistinct(["apple","banana","cherry","apple","banana","date","fig","grape"], 4), grape, 'Test 109');
test(kthDistinct(["x","y","z","x","y","z","x","y","z","x","y","z"], 5), , 'Test 110');

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
