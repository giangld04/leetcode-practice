// Test: 151. Reverse Words In A String
// 44 test cases from LeetCodeDataset
// Run: node test.js

const { reverseWords } = require("./solution");

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

console.log("\n151. Reverse Words In A String\n");

test(reverseWords("the sky is blue"), "blue is sky the", 'Test 1');
test(reverseWords("  hello world  "), "world hello", 'Test 2');
test(reverseWords("a good   example"), "example good a", 'Test 3');
test(reverseWords("   multiple     spaces   between words   "), words between spaces multiple, 'Test 4');
test(reverseWords("   complex   example    with    various    spacing    conditions   "), conditions spacing various with example complex, 'Test 5');
test(reverseWords("   edge   cases    should    be    handled   correctly   "), correctly handled be should cases edge, 'Test 6');
test(reverseWords("   one   two three    four     five six seven eight nine ten    "), ten nine eight seven six five four three two one, 'Test 7');
test(reverseWords("    leading and trailing spaces    "), spaces trailing and leading, 'Test 8');
test(reverseWords("word1 word2 word3 word4 word5"), word5 word4 word3 word2 word1, 'Test 9');
test(reverseWords("   quick   brown   fox   jumps   over   the   lazy   dog   "), dog lazy the over jumps fox brown quick, 'Test 10');
test(reverseWords("one two three four five six seven eight nine ten"), ten nine eight seven six five four three two one, 'Test 11');
test(reverseWords("   leading and trailing spaces   "), spaces trailing and leading, 'Test 12');
test(reverseWords("Python   is   a   powerful   language"), language powerful a is Python, 'Test 13');
test(reverseWords("    complex    test   with   various     spaces   "), spaces various with test complex, 'Test 14');
test(reverseWords(""), , 'Test 15');
test(reverseWords("   reverse    these   words    please   "), please words these reverse, 'Test 16');
test(reverseWords("   abcdefghijklmnopqrstuvwxyz   "), abcdefghijklmnopqrstuvwxyz, 'Test 17');
test(reverseWords("multiple    spaces between words"), words between spaces multiple, 'Test 18');
test(reverseWords("singleword"), singleword, 'Test 19');
test(reverseWords("123 456 789 0"), 0 789 456 123, 'Test 20');
test(reverseWords("   reverse   this   sentence   please   "), please sentence this reverse, 'Test 21');
test(reverseWords("multiple    spaces    between words"), words between spaces multiple, 'Test 22');
test(reverseWords("Python  is  a  powerful  language"), language powerful a is Python, 'Test 23');
test(reverseWords("   multiple    spaces    between    words   "), words between spaces multiple, 'Test 24');
test(reverseWords("   a   b   c   d   e   f   g   h   i   j   k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z   "), z y x w v u t s r q p o n m l k j i h g f e d c b a, 'Test 25');
test(reverseWords("    a    b   c    d   e    f   g    h   i    j   "), j i h g f e d c b a, 'Test 26');
test(reverseWords("   "), , 'Test 27');
test(reverseWords("Python   is  a  versatile  language"), language versatile a is Python, 'Test 28');
test(reverseWords("   complex    input    with    various    spacing   "), spacing various with input complex, 'Test 29');
test(reverseWords("   one  two three four five six seven eight nine ten   "), ten nine eight seven six five four three two one, 'Test 30');
test(reverseWords("   hello   world   hello   universe   "), universe hello world hello, 'Test 31');
test(reverseWords("   spaces    before    after    and    between    "), between and after before spaces, 'Test 32');
test(reverseWords("repeated    repeated    repeated    words    words"), words words repeated repeated repeated, 'Test 33');
test(reverseWords("   many    repeated    spaces    should    be    reduced   "), reduced be should spaces repeated many, 'Test 34');
test(reverseWords("a b c d e f g h i j k l m n o p q r s t u v w x y z"), z y x w v u t s r q p o n m l k j i h g f e d c b a, 'Test 35');
test(reverseWords("   Python    is  a  great  programming  language   "), language programming great a is Python, 'Test 36');
test(reverseWords("   one   two   three   four   five   six   seven   eight   nine   ten   "), ten nine eight seven six five four three two one, 'Test 37');
test(reverseWords(" leading and trailing spaces    "), spaces trailing and leading, 'Test 38');
test(reverseWords("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"), Z Y X W V U T S R Q P O N M L K J I H G F E D C B A, 'Test 39');
test(reverseWords("  reverse  this  sentence  correctly  "), correctly sentence this reverse, 'Test 40');
test(reverseWords("     "), , 'Test 41');
test(reverseWords("a"), a, 'Test 42');
test(reverseWords("special!@# $%^&* characters should remain  intact"), intact remain should characters $%^&* special!@#, 'Test 43');
test(reverseWords("Python  is  a  powerful  programming  language"), language programming powerful a is Python, 'Test 44');

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
