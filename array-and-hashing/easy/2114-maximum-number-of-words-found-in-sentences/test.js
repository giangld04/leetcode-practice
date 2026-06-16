// Test: 2114. Maximum Number Of Words Found In Sentences
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { mostWordsFound } = require("./solution");

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

console.log("\n2114. Maximum Number Of Words Found In Sentences\n");

test(mostWordsFound(["short", "tiny", "minuscule"]), 1, 'Test 1');
test(mostWordsFound(["one"]), 1, 'Test 2');
test(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]), 6, 'Test 3');
test(mostWordsFound(["singleword", "two words", "three words here"]), 3, 'Test 4');
test(mostWordsFound(["one two three four five six seven eight nine ten"]), 10, 'Test 5');
test(mostWordsFound(["please wait", "continue to fight", "continue to win"]), 3, 'Test 6');
test(mostWordsFound(["hello world", "hi there"]), 2, 'Test 7');
test(mostWordsFound(["singleword", "another word", "yet another example"]), 3, 'Test 8');
test(mostWordsFound(["a quick brown fox", "jumps over the lazy dog"]), 5, 'Test 9');
test(mostWordsFound(["one two three", "four five six seven", "eight nine ten eleven twelve"]), 5, 'Test 10');
test(mostWordsFound(["a b c d e f g h i j k l m n o p q r s t u v w x y z"]), 26, 'Test 11');
test(mostWordsFound(["longer sentences with more words to test the function", "another sentence to check the word count correctly", "yet another example sentence for validation", "this is the last sentence for this test case"]), 9, 'Test 12');
test(mostWordsFound(["equal", "equal", "equal", "equal", "equal", "equal", "equal", "equal", "equal", "equal"]), 1, 'Test 13');
test(mostWordsFound(["word1", "word1 word2", "word1 word2 word3", "word1 word2 word3 word4", "word1 word2 word3 word4 word5"]), 5, 'Test 14');
test(mostWordsFound(["all questions asked by five watched experts amaze the judge", "jackdaws love my big sphinx of quartz", "the five boxing wizards jump quickly on this new sentence"]), 10, 'Test 15');
test(mostWordsFound(["tiny", "shorter", "shortest", "a bit longer", "the longest sentence in the list"]), 6, 'Test 16');
test(mostWordsFound(["the quick brown fox jumps over the lazy dog", "this sentence is longer than the previous one", "a"]), 9, 'Test 17');
test(mostWordsFound(["once upon a time in a world far far away", "there lived a king and a queen", "who were very very happy together"]), 10, 'Test 18');
test(mostWordsFound(["singleword", "two words", "three words are", "four words are here", "five words are here now", "six words are here now indeed", "seven words are here now indeed truly"]), 7, 'Test 19');
test(mostWordsFound(["this sentence has twelve words in it indeed", "this one has seven words"]), 8, 'Test 20');
test(mostWordsFound(["a short sentence", "a much longer sentence with many more words in it", "tiny", "an even longer sentence that seems to go on and on and on"]), 13, 'Test 21');
test(mostWordsFound(["one two three", "four five six seven", "eight nine ten eleven twelve", "thirteen fourteen fifteen sixteen seventeen"]), 5, 'Test 22');
test(mostWordsFound(["equal number of words here", "equal number of words here", "equal number of words here"]), 5, 'Test 23');
test(mostWordsFound(["this is a single word", "this is a two word phrase", "this sentence has three words in it"]), 7, 'Test 24');
test(mostWordsFound(["one two three", "four five six seven eight", "nine ten eleven twelve thirteen fourteen fifteen"]), 7, 'Test 25');
test(mostWordsFound(["a b c d e f g h i j k l m n o p q r s t u v w x y z", "this is a sentence with many many many words indeed"]), 26, 'Test 26');
test(mostWordsFound(["this is a test sentence with exactly ten words in it", "another test sentence here with ten words too", "and yet another test sentence that has ten words"]), 11, 'Test 27');
test(mostWordsFound(["singleword", "anotherword", "yetanotherword", "onemoreword"]), 1, 'Test 28');
test(mostWordsFound(["python is fun", "data structures and algorithms", "object oriented programming is powerful"]), 5, 'Test 29');
test(mostWordsFound(["this is a test", "another test sentence", "yet another example to consider", "the longest sentence in this batch is this one here"]), 10, 'Test 30');
test(mostWordsFound(["the quick brown fox jumps over the lazy dog", "pack my box with five dozen liquor jugs"]), 9, 'Test 31');
test(mostWordsFound(["abcd efgh ijkl mnop qrst uvwx yz", "abcd efgh ijkl mnop qrst uvwx yz abcd", "abcd efgh ijkl mnop qrst uvwx yz abcd efgh", "abcd efgh ijkl mnop qrst uvwx yz abcd efgh ijkl mnop"]), 11, 'Test 32');
test(mostWordsFound(["the quick brown fox jumps over the lazy dog", "every good boy does fine", "to be or not to be that is the question"]), 10, 'Test 33');
test(mostWordsFound(["a b c d e f g h i j k l m n o p q r s t u v w x y z", "the rain in spain stays mainly in the plain", "i am six"]), 26, 'Test 34');
test(mostWordsFound(["a b c d e f g h i j k l m n o p q r s t u v w x y z", "a b c d e f g h i j k l m n o p q r s t u v w x y", "a b c d e f g h i j k l m n o p q r s t u v w x"]), 26, 'Test 35');
test(mostWordsFound(["lorem ipsum dolor sit amet consectetur adipiscing elit", "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"]), 17, 'Test 36');
test(mostWordsFound(["words words words words words words words words words words", "just a couple", "quite a bit more words than before"]), 10, 'Test 37');
test(mostWordsFound(["Python is an interpreted high-level general-purpose programming language", "Java is a class-based, object-oriented programming language", "C++ is a general-purpose programming language"]), 8, 'Test 38');
test(mostWordsFound(["the best way to achieve success is through hard work", "persistence is key to overcoming challenges", "never give up on your dreams"]), 10, 'Test 39');
test(mostWordsFound(["a b c d e f g h i j k l m n o p q r s t u v w x y z", "quick fox jumps", "lazy dog"]), 26, 'Test 40');
test(mostWordsFound(["one", "two words", "three words here", "four words here now", "five words here now indeed", "six words here now indeed truly"]), 6, 'Test 41');
test(mostWordsFound(["the quick brown fox jumps over the lazy dog", "every good boy does fine", "pack my box with five dozen liquor jugs"]), 9, 'Test 42');
test(mostWordsFound(["a b c d e f g h i j k l m n o p q r s t u v w x y z", "short sentence"]), 26, 'Test 43');
test(mostWordsFound(["one", "two three", "four five six", "seven eight nine ten", "eleven twelve thirteen fourteen fifteen"]), 5, 'Test 44');
test(mostWordsFound(["the quick brown fox jumps over the lazy dog", "pack my box with five dozen liquor jugs", "how vexingly quick daft zebras jump"]), 9, 'Test 45');
test(mostWordsFound(["repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat", "different repeat different repeat", "unique sentence"]), 10, 'Test 46');
test(mostWordsFound(["a quick brown fox jumps over the lazy dog", "this is a longer sentence with more words in it", "short"]), 10, 'Test 47');
test(mostWordsFound(["equal length words here", "equal length words here", "equal length words here"]), 4, 'Test 48');
test(mostWordsFound(["one two three four five", "six seven eight nine ten eleven", "twelve thirteen fourteen fifteen sixteen seventeen", "eighteen nineteen twenty"]), 6, 'Test 49');
test(mostWordsFound(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "mnopqrstuvwxyzabcdefghijkl"]), 1, 'Test 50');
test(mostWordsFound(["equal length", "equal length", "equal length", "equal length", "equal length", "equal length"]), 2, 'Test 51');
test(mostWordsFound(["lorem ipsum dolor sit amet", "consectetur adipiscing elit", "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"]), 11, 'Test 52');
test(mostWordsFound(["the quick brown fox jumps over the lazy dog", "a quick movement of the enemy will jeopardize six gunboats", "five boxing wizards jump quickly"]), 10, 'Test 53');
test(mostWordsFound(["an apple a day keeps the doctor away", "once upon a time in a land far far away", "hello world hello universe"]), 10, 'Test 54');
test(mostWordsFound(["the longest sentence in this list is the last one which contains many many words indeed"]), 16, 'Test 55');
test(mostWordsFound(["the quick brown fox jumps over the lazy dog", "how now brown cow", "she sells sea shells by the sea shore"]), 9, 'Test 56');
test(mostWordsFound(["a b c d e f g h i j k l m n o p q r s t u v w x y z", "jumps over the lazy dog"]), 26, 'Test 57');
test(mostWordsFound(["the secret to a happy life is simple", "be kind to others", "live each day to the fullest", "love what you do"]), 8, 'Test 58');
test(mostWordsFound(["a b c d e f g h i j k l m n o p q r s t u v w x y z", "i am a sentence with many words indeed", "this is another test sentence"]), 26, 'Test 59');
test(mostWordsFound(["abc", "def ghi jkl", "mno pqr stu vwx yz", "a b c d e f g h i j k l m n o p q r s t u v w x y z"]), 26, 'Test 60');
test(mostWordsFound(["python is a great programming language", "java is also a great programming language", "c plus plus is another popular language"]), 7, 'Test 61');
test(mostWordsFound(["singleword", "two words", "three words here", "four words are in this", "five words make a phrase", "six words is a complete sentence"]), 6, 'Test 62');
test(mostWordsFound(["longer sentences are more challenging to process correctly", "even longer sentences that contain a greater number of words for testing", "tiny"]), 12, 'Test 63');
test(mostWordsFound(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij"]), 1, 'Test 64');
test(mostWordsFound(["to be or not to be that is the question", "that is the question indeed", "whether tis nobler in the mind to suffer"]), 10, 'Test 65');
test(mostWordsFound(["python is great", "i love programming", "data science is fascinating", "machine learning and ai are transforming industries"]), 7, 'Test 66');
test(mostWordsFound(["this is a very long sentence indeed that should test the boundaries of the problem constraints"]), 16, 'Test 67');
test(mostWordsFound(["singleword", "two words", "three words here", "four words make a sentence", "five words in this sentence"]), 5, 'Test 68');
test(mostWordsFound(["complex sentences are interesting", "they can have many clauses and ideas", "and sometimes they even have subordinate clauses"]), 7, 'Test 69');
test(mostWordsFound(["very very very long sentence to test the length", "short sentence", "another medium length sentence here"]), 9, 'Test 70');
test(mostWordsFound(["very long sentence with many many many words indeed", "short one", "medium length sentence"]), 9, 'Test 71');
test(mostWordsFound(["a singleword", "two words here", "three words in this", "four words make up"]), 4, 'Test 72');
test(mostWordsFound(["this is a sentence with seven words", "another one with five words", "and yet another with eight words here"]), 7, 'Test 73');
test(mostWordsFound(["a b c d e f g h i j k l m n o p q r s t u v w x y z", "the cat in the hat"]), 26, 'Test 74');
test(mostWordsFound(["this is a longer sentence with more words", "tiny", "another sentence with quite a few words indeed"]), 8, 'Test 75');
test(mostWordsFound(["python is an amazing language for data science and machine learning", "the early morning sun illuminated the dew covered grass", "she sells sea shells by the sea shore"]), 11, 'Test 76');
test(mostWordsFound(["same same same same same same same", "another same same same", "and yet another same same"]), 7, 'Test 77');
test(mostWordsFound(["one", "two three", "four five six", "seven eight nine ten"]), 4, 'Test 78');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

