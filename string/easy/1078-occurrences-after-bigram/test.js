// Test: 1078. Occurrences After Bigram
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { findOcurrences } = require("./solution");

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

console.log("\n1078. Occurrences After Bigram\n");

test(findOcurrences("hello world hello hello world", "hello", "world"), ['hello'], 'Test 1');
test(findOcurrences("repeat repeat repeat repeat", "repeat", "repeat"), ['repeat', 'repeat'], 'Test 2');
test(findOcurrences("look at the stars look at the moon", "look", "at"), ['the', 'the'], 'Test 3');
test(findOcurrences("in the beginning there was the word", "the", "beginning"), ['there'], 'Test 4');
test(findOcurrences("this is a test this is only a test", "this", "is"), ['a', 'only'], 'Test 5');
test(findOcurrences("one two three two three four three five", "two", "three"), ['two', 'four'], 'Test 6');
test(findOcurrences("every good boy does fine every good boy does fine", "good", "boy"), ['does', 'does'], 'Test 7');
test(findOcurrences("alice is a good girl she is a good student", "a", "good"), ['girl', 'student'], 'Test 8');
test(findOcurrences("we will we will rock you", "we", "will"), ['we', 'rock'], 'Test 9');
test(findOcurrences("foo bar foo bar foo", "foo", "bar"), ['foo', 'foo'], 'Test 10');
test(findOcurrences("in a village of la mancha the name of which i have no desire to call to mind", "village", "of"), ['la'], 'Test 11');
test(findOcurrences("this is a test this is only a test", "is", "a"), ['test'], 'Test 12');
test(findOcurrences("foo bar foo foo bar bar foo", "foo", "bar"), ['foo', 'bar'], 'Test 13');
test(findOcurrences("the quick brown fox jumps over the lazy dog", "the", "lazy"), ['dog'], 'Test 14');
test(findOcurrences("the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog", "quick", "brown"), ['fox', 'fox'], 'Test 15');
test(findOcurrences("a b c a b c a b c a b c a b c a b c", "a", "b"), ['c', 'c', 'c', 'c', 'c', 'c'], 'Test 16');
test(findOcurrences("repeat repeat repeat repeat repeat repeat repeat repeat repeat", "repeat", "repeat"), ['repeat', 'repeat', 'repeat', 'repeat', 'repeat', 'repeat', 'repeat'], 'Test 17');
test(findOcurrences("one two three four five six seven eight nine ten eleven twelve", "five", "six"), ['seven'], 'Test 18');
test(findOcurrences("the quick brown fox jumps over the lazy dog the quick brown fox", "quick", "brown"), ['fox', 'fox'], 'Test 19');
test(findOcurrences("a tale of two cities a tale of two brothers a tale of two sisters", "tale", "of"), ['two', 'two', 'two'], 'Test 20');
test(findOcurrences("once upon a time in a land far far away once upon a time in a magical land", "once", "upon"), ['a', 'a'], 'Test 21');
test(findOcurrences("this is a simple test this is a more complex test this is a simple test", "is", "a"), ['simple', 'more', 'simple'], 'Test 22');
test(findOcurrences("the rain in spain stays mainly in the plain the rain in spain", "rain", "in"), ['spain', 'spain'], 'Test 23');
test(findOcurrences("one fish two fish red fish blue fish one fish two fish red fish blue fish", "fish", "red"), ['fish', 'fish'], 'Test 24');
test(findOcurrences("one two three four five six seven eight nine ten one two three four five six", "three", "four"), ['five', 'five'], 'Test 25');
test(findOcurrences("x y z x y z x y z x y z x y z x y z x y z x y z", "x", "y"), ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'], 'Test 26');
test(findOcurrences("this is a simple sentence to test the function this is a simple test", "simple", "sentence"), ['to'], 'Test 27');
test(findOcurrences("a a a a a a a a a a a a a a a a a a a a a", "a", "a"), ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'], 'Test 28');
test(findOcurrences("once upon a time in a land far far away once upon a time", "once", "upon"), ['a', 'a'], 'Test 29');
test(findOcurrences("repeated repeated repeated repeated repeated repeated", "repeated", "repeated"), ['repeated', 'repeated', 'repeated', 'repeated'], 'Test 30');
test(findOcurrences("abc def ghi jkl mno pqr stu vwx yz abc def ghi jkl mno", "def", "ghi"), ['jkl', 'jkl'], 'Test 31');
test(findOcurrences("a b c a b c a b c a b c a b c a b c a b c a b c a b c a b c", "a", "b"), ['c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c'], 'Test 32');
test(findOcurrences("a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d", "a", "b"), ['c', 'c'], 'Test 33');
test(findOcurrences("this is a simple test case this is a very simple test case", "is", "a"), ['simple', 'very'], 'Test 34');
test(findOcurrences("the quick brown fox jumps over the lazy dog the quick brown fox jumps", "quick", "brown"), ['fox', 'fox'], 'Test 35');
test(findOcurrences("once upon a time in a land far far away once upon a time in a land", "once", "upon"), ['a', 'a'], 'Test 36');
test(findOcurrences("find these occurrences carefully find these occurrences again find these occurrences one more time", "find", "these"), ['occurrences', 'occurrences', 'occurrences'], 'Test 37');
test(findOcurrences("a quick movement of the enemy will jeopardize six gunboats a quick and silent movement of the enemy will jeopardize five gunboats", "quick", "and"), ['silent'], 'Test 38');
test(findOcurrences("complex example with multiple matches and no matches complex example with multiple matches and no matches", "with", "multiple"), ['matches', 'matches'], 'Test 39');
test(findOcurrences("she sells sea shells by the sea shore she sells sea shells by the sea shore", "sea", "shells"), ['by', 'by'], 'Test 40');
test(findOcurrences("complex scenario with different words complex scenario with different words complex", "with", "different"), ['words', 'words'], 'Test 41');
test(findOcurrences("repeated repeated repeated words words words in a sentence", "words", "in"), ['a'], 'Test 42');
test(findOcurrences("unique words with no repetitions should return empty list", "no", "repetitions"), ['should'], 'Test 43');
test(findOcurrences("the quick brown fox jumps over the lazy dog the quick brown fox jumps over the quick brown fox", "quick", "brown"), ['fox', 'fox', 'fox'], 'Test 44');
test(findOcurrences("x y z a b c x y z a b c x y z a b c x y z a b c", "x", "y"), ['z', 'z', 'z', 'z'], 'Test 45');
test(findOcurrences("word word word word word word word word word word word word word word word word word word word word", "word", "word"), ['word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word'], 'Test 46');
test(findOcurrences("edge case where the last word is the second", "second", "word"), [], 'Test 47');
test(findOcurrences("a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z", "f", "g"), ['h', 'h'], 'Test 48');
test(findOcurrences("the cat sat on the mat the dog sat on the log the cat sat on the mat the dog sat on the log", "sat", "on"), ['the', 'the', 'the', 'the'], 'Test 49');
test(findOcurrences("hello there hello there hello there hello there hello there", "hello", "there"), ['hello', 'hello', 'hello', 'hello'], 'Test 50');
test(findOcurrences("one fish two fish red fish blue fish one fish two fish red fish blue fish", "two", "fish"), ['red', 'red'], 'Test 51');
test(findOcurrences("repeat after me repeat after me repeat after me repeat after me", "repeat", "after"), ['me', 'me', 'me', 'me'], 'Test 52');
test(findOcurrences("one two three four five six seven eight nine ten eleven twelve", "three", "four"), ['five'], 'Test 53');
test(findOcurrences("in the heart of the night the old owl hooted and the stars twinkled in the dark", "the", "old"), ['owl'], 'Test 54');
test(findOcurrences("finding the third word after first second finding the third word after first", "finding", "the"), ['third', 'third'], 'Test 55');
test(findOcurrences("abracadabra abracadabra abracadabra abracadabra abracadabra", "abracadabra", "abracadabra"), ['abracadabra', 'abracadabra', 'abracadabra'], 'Test 56');
test(findOcurrences("find the pattern in this text pattern in this text pattern in this text pattern", "pattern", "in"), ['this', 'this', 'this'], 'Test 57');
test(findOcurrences("a longer sentence with a variety of words and phrases to test the function properly", "variety", "of"), ['words'], 'Test 58');
test(findOcurrences("she sells sea shells by the sea shore and the shells she sells are sea shells", "sea", "shells"), ['by'], 'Test 59');
test(findOcurrences("example of a longer sentence where the pattern can be found multiple times example of a longer", "example", "of"), ['a', 'a'], 'Test 60');
test(findOcurrences("multiple words in sequence are repeated multiple times multiple words in sequence", "multiple", "words"), ['in', 'in'], 'Test 61');
test(findOcurrences("abc def ghi jkl mno pqr stu vwx yza abc def ghi jkl mno pqr stu vwx yza", "ghi", "jkl"), ['mno', 'mno'], 'Test 62');
test(findOcurrences("abc abc abc abc abc abc abc abc abc abc", "abc", "abc"), ['abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc'], 'Test 63');
test(findOcurrences("a quick movement of the enemy will jeopardize five gunboats a quick movement of the army will jeopardize five gunboats", "quick", "movement"), ['of', 'of'], 'Test 64');
test(findOcurrences("a quick movement of the enemy will jeopardize six gunboats a quick movement of the enemy will jeopardize five gunboats", "quick", "movement"), ['of', 'of'], 'Test 65');
test(findOcurrences("complex pattern with complex pattern and another complex pattern", "complex", "pattern"), ['with', 'and'], 'Test 66');
test(findOcurrences("a b c a b c a b c a b c a b c", "a", "b"), ['c', 'c', 'c', 'c', 'c'], 'Test 67');
test(findOcurrences("this is a simple test to see if the function works correctly with multiple occurrences of first second third", "first", "second"), ['third'], 'Test 68');
test(findOcurrences("once upon a time in a galaxy far far away once upon a time in a galaxy", "once", "upon"), ['a', 'a'], 'Test 69');
test(findOcurrences("cycling in the mountains mountains are beautiful cycling in the mountains", "cycling", "in"), ['the', 'the'], 'Test 70');
test(findOcurrences("one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty", "one", "two"), ['three'], 'Test 71');
test(findOcurrences("this is a simple sentence with multiple occurrences of the same word word", "the", "same"), ['word'], 'Test 72');
test(findOcurrences("if you are reading this text then you are doing a great job reading", "reading", "this"), ['text'], 'Test 73');
test(findOcurrences("this is a simple test case with multiple matches this is a simple test", "this", "is"), ['a', 'a'], 'Test 74');
test(findOcurrences("to be or not to be that is the question to be or not to be that is the question", "be", "or"), ['not', 'not'], 'Test 75');
test(findOcurrences("in the heart of the city in the heart of the heart in the heart of the city", "heart", "of"), ['the', 'the', 'the'], 'Test 76');
test(findOcurrences("the quick brown fox jumps over the lazy dog the lazy dog jumps over the quick brown fox", "the", "lazy"), ['dog', 'dog'], 'Test 77');
test(findOcurrences("this is a simple test this is a simple test this is a simple test", "is", "a"), ['simple', 'simple', 'simple'], 'Test 78');
test(findOcurrences("a b c d e f g h i j k l m n o p q r s t u v w x y z a b c", "a", "b"), ['c', 'c'], 'Test 79');
test(findOcurrences("last two words do not match first second", "first", "second"), [], 'Test 80');
test(findOcurrences("every good boy does fine every good boy does fine every good boy does fine", "good", "boy"), ['does', 'does', 'does'], 'Test 81');
test(findOcurrences("the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog again", "quick", "brown"), ['fox', 'fox'], 'Test 82');
test(findOcurrences("repeat repeat repeat repeat repeat repeat repeat", "repeat", "repeat"), ['repeat', 'repeat', 'repeat', 'repeat', 'repeat'], 'Test 83');
test(findOcurrences("a b c d e f g h i j k l m n o p q r s t u v w x y z", "x", "y"), ['z'], 'Test 84');
test(findOcurrences("the quick brown fox jumps over the lazy dog the quick brown fox is quick", "quick", "brown"), ['fox', 'fox'], 'Test 85');
test(findOcurrences("cycling through the words cycling through the words cycling", "through", "the"), ['words', 'words'], 'Test 86');
test(findOcurrences("a b c a b c a b c d e f g h i j k l m n o p q r s t u v w x y z", "b", "c"), ['a', 'a', 'd'], 'Test 87');
test(findOcurrences("she sells sea shells by the sea shore she sells sea shells", "sea", "shells"), ['by'], 'Test 88');
test(findOcurrences("hello world hello world hello world hello world hello world hello world", "hello", "world"), ['hello', 'hello', 'hello', 'hello', 'hello'], 'Test 89');
test(findOcurrences("consecutive consecutive words words words words in this sequence sequence", "words", "words"), ['words', 'words', 'in'], 'Test 90');
test(findOcurrences("complex sentence with multiple occurrences of first second third first second third", "first", "second"), ['third', 'third'], 'Test 91');
test(findOcurrences("every good boy does fine every good boy does fine every good boy does fine", "every", "good"), ['boy', 'boy', 'boy'], 'Test 92');
test(findOcurrences("this is a test this is only a test this is a test this is a test", "this", "is"), ['a', 'only', 'a', 'a'], 'Test 93');
test(findOcurrences("repeat repeat repeat repeat repeat repeat", "repeat", "repeat"), ['repeat', 'repeat', 'repeat', 'repeat'], 'Test 94');
test(findOcurrences("repeated repeated repeated repeated repeated repeated repeated repeated", "repeated", "repeated"), ['repeated', 'repeated', 'repeated', 'repeated', 'repeated', 'repeated'], 'Test 95');
test(findOcurrences("aa bb aa bb aa bb aa bb aa bb aa bb", "aa", "bb"), ['aa', 'aa', 'aa', 'aa', 'aa'], 'Test 96');
test(findOcurrences("a quick movement of the enemy will jeopardize six gunboats a quick movement of the enemy will jeopardize six gunboats", "movement", "of"), ['the', 'the'], 'Test 97');
test(findOcurrences("x y z x y z x y z x y z x y z x y z x y z x y z x y z x y z x y z", "y", "z"), ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 'Test 98');
test(findOcurrences("consecutive consecutive consecutive words words words in in in the the the sentence sentence sentence", "consecutive", "consecutive"), ['consecutive', 'words'], 'Test 99');
test(findOcurrences("this is a test this is only a test in case of an actual emergency this is a test", "this", "is"), ['a', 'only', 'a'], 'Test 100');
test(findOcurrences("to be or not to be that is the question to be or not to be", "to", "be"), ['or', 'that', 'or'], 'Test 101');

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
