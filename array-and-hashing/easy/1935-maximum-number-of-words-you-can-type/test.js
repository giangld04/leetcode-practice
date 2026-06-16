// Test: 1935. Maximum Number Of Words You Can Type
// 135 test cases from LeetCodeDataset
// Run: node test.js

const { canBeTypedWords } = require("./solution");

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

console.log("\n1935. Maximum Number Of Words You Can Type\n");

test(canBeTypedWords("jumped over the lazy dog", "zg"), 3, 'Test 1');
test(canBeTypedWords("nopqrstuvwxyz", "xyz"), 0, 'Test 2');
test(canBeTypedWords("xyzzzz", "x"), 0, 'Test 3');
test(canBeTypedWords("leet code", "lt"), 1, 'Test 4');
test(canBeTypedWords("programming is fun", "fn"), 1, 'Test 5');
test(canBeTypedWords("this is a test", "xyz"), 4, 'Test 6');
test(canBeTypedWords("mississippi", "sip"), 0, 'Test 7');
test(canBeTypedWords("python java cplusplus", "ypx"), 1, 'Test 8');
test(canBeTypedWords("same same same", "aem"), 0, 'Test 9');
test(canBeTypedWords("a b c d e", ""), 5, 'Test 10');
test(canBeTypedWords("aa bb cc dd ee ff gg hh ii jj kk ll mm nn oo pp qq rr ss tt uu vv ww xx yy zz", "xyz"), 23, 'Test 11');
test(canBeTypedWords("abcdefghijk", "abcde"), 0, 'Test 12');
test(canBeTypedWords("leet code", "e"), 0, 'Test 13');
test(canBeTypedWords("single", "s"), 0, 'Test 14');
test(canBeTypedWords("unique words", ""), 2, 'Test 15');
test(canBeTypedWords("single", ""), 1, 'Test 16');
test(canBeTypedWords("abc def ghi", "xyz"), 3, 'Test 17');
test(canBeTypedWords("python programming", "p"), 0, 'Test 18');
test(canBeTypedWords("a b c d e f g h i j k l m n o p q r s t u v w x y z", ""), 26, 'Test 19');
test(canBeTypedWords("a quick brown fox", ""), 4, 'Test 20');
test(canBeTypedWords("abcd efgh ijkl mnop qrst uvwx yz", "aeiou"), 2, 'Test 21');
test(canBeTypedWords("python programming", "th"), 1, 'Test 22');
test(canBeTypedWords("abcdefghij", ""), 1, 'Test 23');
test(canBeTypedWords("hello hello hello", "lo"), 0, 'Test 24');
test(canBeTypedWords("hello world", "ad"), 1, 'Test 25');
test(canBeTypedWords("every good boy does fine", "f"), 4, 'Test 26');
test(canBeTypedWords("hello world abcdefghijklmnopqrstuvwxyz", ""), 3, 'Test 27');
test(canBeTypedWords("a b c d e f g", "xyz"), 7, 'Test 28');
test(canBeTypedWords("extreme example with all letters", "abcdefghijklmnopqrstuvwxyz"), 0, 'Test 29');
test(canBeTypedWords("this is a simple test", "sti"), 1, 'Test 30');
test(canBeTypedWords("singleword", "w"), 0, 'Test 31');
test(canBeTypedWords("abcdefghij klmnopqrstuvwxyz", "xyz"), 1, 'Test 32');
test(canBeTypedWords("university of california berkeley", "bcdfg"), 1, 'Test 33');
test(canBeTypedWords("congratulations on your success", "cns"), 1, 'Test 34');
test(canBeTypedWords("every good boy does fine", "bd"), 2, 'Test 35');
test(canBeTypedWords("hello world from the other side", "dfr"), 2, 'Test 36');
test(canBeTypedWords("complexity arises from multiple factors", "ae"), 1, 'Test 37');
test(canBeTypedWords("all the letters of the alphabet", "aeiou"), 0, 'Test 38');
test(canBeTypedWords("keyboard malfunctioning example", "kmb"), 0, 'Test 39');
test(canBeTypedWords("short long longer longestword", "nlg"), 1, 'Test 40');
test(canBeTypedWords("repeated letters letters letters", "r"), 0, 'Test 41');
test(canBeTypedWords("quick brown fox jumps over the lazy dog", "xyz"), 6, 'Test 42');
test(canBeTypedWords("data structures and algorithms", "dts"), 0, 'Test 43');
test(canBeTypedWords("abcdef ghijklm nopqrst uvwxyz", "mnop"), 2, 'Test 44');
test(canBeTypedWords("multiple broken letters test", "mlpt"), 1, 'Test 45');
test(canBeTypedWords("abcdefghij klmnopqrstuvwxyz", "jkl"), 0, 'Test 46');
test(canBeTypedWords("mississippi river", "is"), 0, 'Test 47');
test(canBeTypedWords("no broken letters here", "qwxz"), 4, 'Test 48');
test(canBeTypedWords("programming is fun", "funs"), 0, 'Test 49');
test(canBeTypedWords("all unique characters", ""), 3, 'Test 50');
test(canBeTypedWords("quick brown fox jumps over the lazy dog", ""), 8, 'Test 51');
test(canBeTypedWords("hello world hello universe", "d"), 3, 'Test 52');
test(canBeTypedWords("supercalifragilisticexpialidocious", "aeiou"), 0, 'Test 53');
test(canBeTypedWords("special symbols are not included !@#$%^&*[]", ""), 6, 'Test 54');
test(canBeTypedWords("brokenkeyboard faultydevice", "bdf"), 0, 'Test 55');
test(canBeTypedWords("sequential typing test", "qseq"), 1, 'Test 56');
test(canBeTypedWords("unique letters in words", "aeiouy"), 0, 'Test 57');
test(canBeTypedWords("python code implementation", "py"), 1, 'Test 58');
test(canBeTypedWords("a b c d e f g h i j k l m n o p q r s t u v w x y z", "qz"), 24, 'Test 59');
test(canBeTypedWords("a b c d e f g h i j k l m n o p q r s t u v w x y z", "abcdefghijkl"), 14, 'Test 60');
test(canBeTypedWords("complex words like supercalifragilisticexpialidocious", "xyz"), 2, 'Test 61');
test(canBeTypedWords("this is a simple test case", "aeiou"), 0, 'Test 62');
test(canBeTypedWords("one two three four five six seven eight nine ten", "on"), 4, 'Test 63');
test(canBeTypedWords("lets write some code", "wrs"), 1, 'Test 64');
test(canBeTypedWords("multiple broken letters scenario", "aeiouy"), 0, 'Test 65');
test(canBeTypedWords("complex problem solving required", "abc"), 2, 'Test 66');
test(canBeTypedWords("this is a simple test", "s"), 1, 'Test 67');
test(canBeTypedWords("all characters must be checked", "aeiou"), 0, 'Test 68');
test(canBeTypedWords("quick brown fox jumps over lazy dog", "qz"), 5, 'Test 69');
test(canBeTypedWords("various broken keys test", "var"), 2, 'Test 70');
test(canBeTypedWords("quick brown fox jumps over the lazy dog", "qz"), 6, 'Test 71');
test(canBeTypedWords("a quick brown fox jumps over the lazy dog", "aeiou"), 0, 'Test 72');
test(canBeTypedWords("beautiful scenery on the mountain top", "mnt"), 0, 'Test 73');
test(canBeTypedWords("vowels are often omitted", "aeiou"), 0, 'Test 74');
test(canBeTypedWords("mississippi river flows smoothly", "m"), 2, 'Test 75');
test(canBeTypedWords("hello world from another dimension", "ad"), 2, 'Test 76');
test(canBeTypedWords("singlewordwithoutspaces", "s"), 0, 'Test 77');
test(canBeTypedWords("abcdefghijklmnopqrstuvwxyz", "xyz"), 0, 'Test 78');
test(canBeTypedWords("fuzzy wuzzy was a bear", "f"), 4, 'Test 79');
test(canBeTypedWords("algorithms and data structures", "da"), 1, 'Test 80');
test(canBeTypedWords("make america great again", "mag"), 0, 'Test 81');
test(canBeTypedWords("hello hello hello world", "d"), 3, 'Test 82');
test(canBeTypedWords("a aa aaa aaaa aaaaa", "a"), 0, 'Test 83');
test(canBeTypedWords("mississippi river", "m"), 1, 'Test 84');
test(canBeTypedWords("many many words with many repeated letters", "mny"), 4, 'Test 85');
test(canBeTypedWords("abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz", ""), 2, 'Test 86');
test(canBeTypedWords("special characters are not considered", "!@#$%^&*[]"), 5, 'Test 87');
test(canBeTypedWords("alibaba cloud is amazing", "aim"), 1, 'Test 88');
test(canBeTypedWords("boundary conditions and edge cases", "bace"), 0, 'Test 89');
test(canBeTypedWords("the quick brown fox jumps over the lazy dog", ""), 9, 'Test 90');
test(canBeTypedWords("algorithm data structures", "abcde"), 0, 'Test 91');
test(canBeTypedWords("xylophone xylophone xylophone", "xy"), 0, 'Test 92');
test(canBeTypedWords("complex problem solving", "cps"), 0, 'Test 93');
test(canBeTypedWords("longer words with various letters", "wv"), 2, 'Test 94');
test(canBeTypedWords("every good boy does fine", "boyd"), 1, 'Test 95');
test(canBeTypedWords("the quick brown fox jumps over the lazy dog", "qxyz"), 6, 'Test 96');
test(canBeTypedWords("programming in python is fun", "pqf"), 2, 'Test 97');
test(canBeTypedWords("this is a test case with many words", "aeiou"), 0, 'Test 98');
test(canBeTypedWords("repeated letters in words", "r"), 1, 'Test 99');
test(canBeTypedWords("mississippi river", "r"), 1, 'Test 100');
test(canBeTypedWords("edge cases require attention", "ecr"), 0, 'Test 101');
test(canBeTypedWords("short words", "aef"), 2, 'Test 102');
test(canBeTypedWords("all characters are broken here", "abcdefghijklmnopqrstuvwxyz"), 0, 'Test 103');
test(canBeTypedWords("this is a simple test", "st"), 1, 'Test 104');
test(canBeTypedWords("multiple words with repeated letters", "w"), 3, 'Test 105');
test(canBeTypedWords("python is a versatile programming language", "p"), 4, 'Test 106');
test(canBeTypedWords("this is a simple test case", ""), 6, 'Test 107');
test(canBeTypedWords("short words", "ow"), 0, 'Test 108');
test(canBeTypedWords("distinct distinct letters letters", "distnl"), 0, 'Test 109');
test(canBeTypedWords("the quick brown fox jumps over the lazy dog", "aeiou"), 0, 'Test 110');
test(canBeTypedWords("let us escape from this困境", "et"), 2, 'Test 111');
test(canBeTypedWords("broken keyboards are annoying sometimes", "bks"), 2, 'Test 112');
test(canBeTypedWords("various combinations", "vbc"), 0, 'Test 113');
test(canBeTypedWords("every good boy does fine and gets chocolate", "xyz"), 6, 'Test 114');
test(canBeTypedWords("hello world from mars", "mr"), 1, 'Test 115');
test(canBeTypedWords("various punctuations are missing", "aeiou"), 0, 'Test 116');
test(canBeTypedWords("quick brown fox jumps over the lazy dog", "aeiou"), 0, 'Test 117');
test(canBeTypedWords("unique words in this sentence", "uie"), 1, 'Test 118');
test(canBeTypedWords("multiple words with repeated letters", "r"), 2, 'Test 119');
test(canBeTypedWords("one two three four five", "one"), 0, 'Test 120');
test(canBeTypedWords("computer science", "xyz"), 2, 'Test 121');
test(canBeTypedWords("this is a simple test case", "s"), 1, 'Test 122');
test(canBeTypedWords("multiple spaces between words   are not allowed", ""), 7, 'Test 123');
test(canBeTypedWords("special characters !@#$%^&*[]", "s"), 1, 'Test 124');
test(canBeTypedWords("banana apple orange", "aeiou"), 0, 'Test 125');
test(canBeTypedWords("abcdefghijklmnopqrstuvwxyz", "nopqrstuvwxyz"), 0, 'Test 126');
test(canBeTypedWords("abcdef ghijklm nopqrstuvwxyz", "aeiou"), 0, 'Test 127');
test(canBeTypedWords("spaceship traveling fast", "spfc"), 1, 'Test 128');
test(canBeTypedWords("unique characters only", "uqnc"), 0, 'Test 129');
test(canBeTypedWords("every good boy does fine", "egbf"), 0, 'Test 130');
test(canBeTypedWords("repeated repeated words words", "dpw"), 0, 'Test 131');
test(canBeTypedWords("abcdefghijklmnopqrstuvwxy z", "z"), 1, 'Test 132');
test(canBeTypedWords("complex problems require careful thought", "th"), 4, 'Test 133');
test(canBeTypedWords("all words can be typed", ""), 5, 'Test 134');
test(canBeTypedWords("abcdefg hijklm nopqrstuvwxyz", "xyz"), 2, 'Test 135');

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
