// Test: 58. Length Of Last Word
// 48 test cases from LeetCodeDataset
// Run: node test.js

const { lengthOfLastWord } = require("./solution");

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

console.log("\n58. Length Of Last Word\n");

test(lengthOfLastWord("Hello World"), 5, 'Test 1');
test(lengthOfLastWord("   fly me   to   the moon  "), 4, 'Test 2');
test(lengthOfLastWord("luffy is still joyboy"), 6, 'Test 3');
test(lengthOfLastWord("    a    "), 1, 'Test 4');
test(lengthOfLastWord("multiple   spaces   between   words"), 5, 'Test 5');
test(lengthOfLastWord("multiple    spaces    between    words"), 5, 'Test 6');
test(lengthOfLastWord("    word1    word2    word3    "), 5, 'Test 7');
test(lengthOfLastWord("word1 word2  word3   word4    word5"), 5, 'Test 8');
test(lengthOfLastWord("longwordwithnospaces"), 20, 'Test 9');
test(lengthOfLastWord("trailing    spaces   ontheend    "), 8, 'Test 10');
test(lengthOfLastWord("a "), 1, 'Test 11');
test(lengthOfLastWord("Multiple     spaces     between     words"), 5, 'Test 12');
test(lengthOfLastWord("trailing spaces    "), 6, 'Test 13');
test(lengthOfLastWord(" "), 0, 'Test 14');
test(lengthOfLastWord("oneTwoThree"), 11, 'Test 15');
test(lengthOfLastWord("   leading and trailing spaces   "), 6, 'Test 16');
test(lengthOfLastWord("    leading spaces"), 6, 'Test 17');
test(lengthOfLastWord("noSpacesHere"), 12, 'Test 18');
test(lengthOfLastWord("special!@#$%^&*[]characters"), 27, 'Test 19');
test(lengthOfLastWord("\tword\twith\ttabs\t"), 16, 'Test 20');
test(lengthOfLastWord("   a    b   c    d   "), 1, 'Test 21');
test(lengthOfLastWord("word1 word2 word3 word4word5"), 10, 'Test 22');
test(lengthOfLastWord(""), 0, 'Test 23');
test(lengthOfLastWord("   oneTwoThree   "), 11, 'Test 24');
test(lengthOfLastWord("singleword"), 10, 'Test 25');
test(lengthOfLastWord("   longwordwithnospaces   "), 20, 'Test 26');
test(lengthOfLastWord("    very    very    very    long    string    with    many    spaces    in    between    words    "), 5, 'Test 27');
test(lengthOfLastWord("   SingleWord   "), 10, 'Test 28');
test(lengthOfLastWord("one"), 3, 'Test 29');
test(lengthOfLastWord("onewordwithpunctuation!"), 23, 'Test 30');
test(lengthOfLastWord("   multiple      spaces     between   words   "), 5, 'Test 31');
test(lengthOfLastWord("   "), 0, 'Test 32');
test(lengthOfLastWord("     onlyspaces    "), 10, 'Test 33');
test(lengthOfLastWord("multiple     spaces    between words"), 5, 'Test 34');
test(lengthOfLastWord("   special!@#$%^&*[]characters   "), 27, 'Test 35');
test(lengthOfLastWord("word1word2word3"), 15, 'Test 36');
test(lengthOfLastWord("   a   "), 1, 'Test 37');
test(lengthOfLastWord("Python     programming    language"), 8, 'Test 38');
test(lengthOfLastWord("   Leading and trailing spaces   "), 6, 'Test 39');
test(lengthOfLastWord("   a    b   c   d   e   f   g   h   i   j   k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z   "), 1, 'Test 40');
test(lengthOfLastWord("word with special@characters!"), 19, 'Test 41');
test(lengthOfLastWord("word\nwith\nnewlines"), 18, 'Test 42');
test(lengthOfLastWord("word1 word2 word3"), 5, 'Test 43');
test(lengthOfLastWord("SingleWord"), 10, 'Test 44');
test(lengthOfLastWord("     "), 0, 'Test 45');
test(lengthOfLastWord("a"), 1, 'Test 46');
test(lengthOfLastWord("    verylongwordwithoutspaces    "), 25, 'Test 47');
test(lengthOfLastWord("another-word-with-hyphens"), 25, 'Test 48');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

