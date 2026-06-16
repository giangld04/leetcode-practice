// Test: 2284. Sender With Largest Word Count
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { largestWordCount } = require("./solution");

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

console.log("\n2284. Sender With Largest Word Count\n");

test(largestWordCount(["This is a test","Another test","Final test"], ["Alice","Bob","Alice"]), Alice, 'Test 1');
test(largestWordCount(["Hi"], ["Bob"]), Bob, 'Test 2');
test(largestWordCount(["Short", "Longer message indeed"], ["Alice", "Alice"]), Alice, 'Test 3');
test(largestWordCount(["How is leetcode for everyone","Leetcode is useful for practice"], ["Bob","Charlie"]), Charlie, 'Test 4');
test(largestWordCount(["Hi","Hello","Hey"], ["Alice","Bob","Alice"]), Alice, 'Test 5');
test(largestWordCount(["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], ["Alice","userTwo","userThree","Alice"]), Alice, 'Test 6');
test(largestWordCount(["Short","Longer message indeed"], ["Bob","Alice"]), Alice, 'Test 7');
test(largestWordCount(["This is a test","Another test","Final test"], ["Alice","Alice","Bob"]), Alice, 'Test 8');
test(largestWordCount(["Short","Longer message indeed"], ["Charlie","Alice"]), Alice, 'Test 9');
test(largestWordCount(["Short","Longer message here","Even longer message here"], ["Zoe","Zoe","Zoe"]), Zoe, 'Test 10');
test(largestWordCount(["a","b","c","d"], ["Anna","Bob","Charlie","David"]), David, 'Test 11');
test(largestWordCount(["Hello","Hi"], ["Alice","Bob"]), Bob, 'Test 12');
test(largestWordCount(["Hello World", "Foo Bar"], ["Alice", "Bob"]), Bob, 'Test 13');
test(largestWordCount(["Hi","Hello"], ["Alice","Bob"]), Bob, 'Test 14');
test(largestWordCount(["Equal length messages here", "Equal length messages here", "Equal length messages here"], ["Alice", "Bob", "Charlie"]), Charlie, 'Test 15');
test(largestWordCount(["a a a a a a a a a a", "b b b b b b b b b", "c c c c c c c c", "d d d d d d d"], ["Alice", "Bob", "Alice", "Bob"]), Alice, 'Test 16');
test(largestWordCount(["Hello Alice", "Hello Bob", "Hello Charlie", "Hello Dave", "Hello Eve"], ["Alice", "Bob", "Charlie", "Dave", "Eve"]), Eve, 'Test 17');
test(largestWordCount(["Short", "Longer message with multiple words", "Another long message that is quite lengthy"], ["Alice", "Bob", "Alice"]), Alice, 'Test 18');
test(largestWordCount(["abc def ghi", "jkl mno pqr", "stu vwx yz"], ["Alice", "Alice", "Bob"]), Alice, 'Test 19');
test(largestWordCount(["Word", "Word Word", "Word Word Word", "Word Word Word Word", "Word Word Word Word Word"], ["Yankee", "yankee", "YANKEE", "Yankee", "yankee"]), yankee, 'Test 20');
test(largestWordCount(["a", "b c", "d e f", "g h i j"], ["Z", "Y", "X", "W"]), W, 'Test 21');
test(largestWordCount(["First message","Second message","Third message","Fourth message"], ["Dave","Dave","Eve","Dave"]), Dave, 'Test 22');
test(largestWordCount(["This is a longer message with multiple words", "Short message", "Another long message with several words in it"], ["Charlie", "Alice", "Bob"]), Charlie, 'Test 23');
test(largestWordCount(["a","b","c","d","e","f"], ["Z","Y","X","W","V","U"]), Z, 'Test 24');
test(largestWordCount(["Hi", "Hello", "Hey", "Goodbye", "See you later"], ["Alice", "Bob", "Alice", "Bob", "Alice"]), Alice, 'Test 25');
test(largestWordCount(["Hello world", "How are you doing", "I am fine thank you", "And you"], ["Bob", "Charlie", "Alice", "Bob"]), Alice, 'Test 26');
test(largestWordCount(["Many many words in this message to test the function","Few words"], ["Alice","Bob"]), Alice, 'Test 27');
test(largestWordCount(["a b c d e f g h i j k l m n o p q r s t u v w x y z", "a b c d e f g h i j k l m n o p q r s t u v w x y", "a b c d e f g h i j k l m n o p q r s t u v w x"], ["Alice", "Bob", "Alice"]), Alice, 'Test 28');
test(largestWordCount(["Short message", "Another short one"], ["charlie", "Charlie"]), Charlie, 'Test 29');
test(largestWordCount(["One two three four five", "Six seven eight nine ten", "Eleven twelve"], ["George", "Hannah", "George"]), George, 'Test 30');
test(largestWordCount(["Hello userTwooo", "Hi userThree", "Wonderful day Alice", "Nice day userThree", "Great to see you Alice"], ["Alice", "userTwo", "userThree", "Alice", "Alice"]), Alice, 'Test 31');
test(largestWordCount(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]), A, 'Test 32');
test(largestWordCount(["Short msg", "Medium length message indeed", "A very long message with lots of words to count accurately"], ["Carol", "Carol", "Carol"]), Carol, 'Test 33');
test(largestWordCount(["Hello world", "Python programming is fun", "Hello again", "Data structures and algorithms"], ["Alice", "Bob", "Alice", "Charlie"]), Charlie, 'Test 34');
test(largestWordCount(["Long message to test", "Another long message to test", "Short"], ["Charlie", "Alice", "Charlie"]), Charlie, 'Test 35');
test(largestWordCount(["One", "Two", "Three", "Four", "Five"], ["Zebra", "Zebra", "Zebra", "Zebra", "Zebra"]), Zebra, 'Test 36');
test(largestWordCount(["One","Two words here","Three words in this message","Four words make a sentence"], ["Anna","Anna","Anna","Anna"]), Anna, 'Test 37');
test(largestWordCount(["Quick brown fox jumps over lazy dog", "Hello", "Goodbye"], ["Alice", "Alice", "Alice"]), Alice, 'Test 38');
test(largestWordCount(["Quick brown fox","Lazy dog","Uppercase LOWERCASE","Mixed CASE Words"], ["Alex","Bob","Charlie","David"]), David, 'Test 39');
test(largestWordCount(["One", "Two words here", "Three words in this one", "Four words make this message"], ["Eve", "eve", "EVE", "Eve"]), Eve, 'Test 40');
test(largestWordCount(["This is a longer message","Even longer message here","Short"], ["Charlie","Charlie","Alice"]), Charlie, 'Test 41');
test(largestWordCount(["Short", "Longer message to test", "Even longer message to check the word count", "Short again"], ["Bob", "Charlie", "Alice", "Charlie"]), Alice, 'Test 42');
test(largestWordCount(["This is a test message", "Another test", "Yet another message here"], ["Charlie", "Alice", "Bob"]), Charlie, 'Test 43');
test(largestWordCount(["A quick brown fox jumps over the lazy dog", "Foo bar baz"], ["Dave", "Eve"]), Dave, 'Test 44');
test(largestWordCount(["Equal words here","Equal words here"], ["Alice","Bob"]), Bob, 'Test 45');
test(largestWordCount(["Many words in this message to test the word count functionality", "Another message to ensure the solution works correctly"], ["Anna", "Anna"]), Anna, 'Test 46');
test(largestWordCount(["Multiple words", "Multiple words", "Multiple words", "Multiple words"], ["Alice", "Bob", "Charlie", "David"]), David, 'Test 47');
test(largestWordCount(["Equal words", "Equal words"], ["Anna", "Bob"]), Bob, 'Test 48');
test(largestWordCount(["Equal length message", "Another equal length message"], ["Dave", "Charlie"]), Charlie, 'Test 49');
test(largestWordCount(["Word", "Word word", "Word word word", "Word word word word", "Word word word word word"], ["Alex", "Alex", "Alex", "Brian", "Brian"]), Brian, 'Test 50');
test(largestWordCount(["One", "Two words", "Three words here", "Four words in this message"], ["Bob", "Charlie", "Bob", "Charlie"]), Charlie, 'Test 51');
test(largestWordCount(["Multiple words in this message", "Single", "Two words"], ["Alice", "Bob", "Alice"]), Alice, 'Test 52');
test(largestWordCount(["Equal length", "Equal length"], ["Tom", "Jerry"]), Tom, 'Test 53');
test(largestWordCount(["Equal words in messages","Equal words in messages"], ["Sender1","Sender2"]), Sender2, 'Test 54');
test(largestWordCount(["Message one", "Message two", "Message three", "Message four"], ["Zebra", "Zebra", "Zebra", "Zebra"]), Zebra, 'Test 55');
test(largestWordCount(["Unique message each time", "Another unique one"], ["Alice", "Bob"]), Alice, 'Test 56');
test(largestWordCount(["Same sender many times", "Same sender many times", "Same sender many times"], ["Alice", "Alice", "Alice"]), Alice, 'Test 57');
test(largestWordCount(["Message one", "Another message", "Yet another message to test", "Final message"], ["Zara", "Alice", "Bob", "Charlie"]), Bob, 'Test 58');
test(largestWordCount(["A B C D E","F G H I J K L M N O P","Q R S T U V W X Y Z"], ["Alice","Bob","Charlie"]), Bob, 'Test 59');
test(largestWordCount(["Hello world", "Foo bar baz", "This is a test message"], ["alice", "Bob", "alice"]), alice, 'Test 60');
test(largestWordCount(["Message one","Message two","Message three"], ["Zach","Yvonne","Xander"]), Zach, 'Test 61');
test(largestWordCount(["Different sender", "Different sender", "Different sender", "Different sender"], ["Mike", "Mike", "Mike", "Mike"]), Mike, 'Test 62');
test(largestWordCount(["Short", "Medium length message", "A very very very long message that spans several words indeed"], ["Alice", "Alice", "Alice"]), Alice, 'Test 63');
test(largestWordCount(["This is a longer message", "Short", "Another long message here"], ["Alice", "Bob", "Alice"]), Alice, 'Test 64');
test(largestWordCount(["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"], ["Alice"]), Alice, 'Test 65');
test(largestWordCount(["a", "b", "c", "d", "e"], ["Eve", "Eve", "Eve", "Eve", "Eve"]), Eve, 'Test 66');
test(largestWordCount(["Equal words", "Equal words"], ["Frank", "frank"]), frank, 'Test 67');
test(largestWordCount(["This is a test message","Another test","Short one"], ["Alice","Bob","Alice"]), Alice, 'Test 68');
test(largestWordCount(["A quick brown fox jumps over the lazy dog","Lorem ipsum dolor sit amet","Consectetur adipiscing elit","Sed do eiusmod tempor incididunt"], ["Sam","Sam","Sam","Sam"]), Sam, 'Test 69');
test(largestWordCount(["Equal", "Equal Equal", "Equal Equal Equal"], ["Mickey", "mickey", "MICKEY"]), MICKEY, 'Test 70');
test(largestWordCount(["Hi Alice", "Hello Bob", "How are you Charlie"], ["Bob", "Alice", "Bob"]), Bob, 'Test 71');
test(largestWordCount(["Hello world", "Good morning", "How are you doing"], ["Charlie", "Bob", "Charlie"]), Charlie, 'Test 72');
test(largestWordCount(["Hello world","How are you today","Hope you are well"], ["Alice","Bob","Alice"]), Alice, 'Test 73');
test(largestWordCount(["abc def ghi","jkl mno pqr","stu vwx yz","abc def","ghi jkl"], ["Charlie","Bob","Alice","Charlie","Alice"]), Charlie, 'Test 74');
test(largestWordCount(["Word", "Word Word", "Word Word Word", "Word Word Word Word"], ["Zeta", "Zeta", "zeta", "ZETA"]), ZETA, 'Test 75');
test(largestWordCount(["This is a very long message to test the word count functionality", "Short msg"], ["Delta", "delta"]), Delta, 'Test 76');
test(largestWordCount(["Hi there","Hello there","Hi there","Hello there"], ["Alice","Bob","Alice","Bob"]), Bob, 'Test 77');
test(largestWordCount(["A","B","C","D"], ["Anna","Bob","Charlie","David"]), David, 'Test 78');
test(largestWordCount(["One", "Two words", "Three words here", "Four words message test"], ["David", "David", "Eve", "Eve"]), Eve, 'Test 79');
test(largestWordCount(["Same length","Same length","Same length","Same length"], ["Alice","Bob","Charlie","David"]), David, 'Test 80');
test(largestWordCount(["Quick brown fox jumps over the lazy dog", "Lazy dog sleeps", "Quick fox runs away"], ["Dog", "Dog", "Fox"]), Dog, 'Test 81');
test(largestWordCount(["Equal words here", "Equal words here", "Equal words here"], ["Anna", "Bob", "Charlie"]), Charlie, 'Test 82');
test(largestWordCount(["Multiple messages here", "Even more messages", "And yet another message"], ["Kate", "Kate", "Laura"]), Kate, 'Test 83');
test(largestWordCount(["Multiple words in this message", "Another message with several words", "Just a few words"], ["SenderX", "SenderX", "SenderY"]), SenderX, 'Test 84');
test(largestWordCount(["Message from Alice", "Another message from Alice", "Yet another message from Alice", "Final message from Alice"], ["Alice", "Alice", "Alice", "Alice"]), Alice, 'Test 85');
test(largestWordCount(["Message one", "Message two", "Message three", "Message four", "Message five"], ["Neil", "Neil", "Neil", "Neil", "Neil"]), Neil, 'Test 86');
test(largestWordCount(["a b c d e f g h i j k l m n o p q r s t u v w x y z", "a b c d e f g h i j k l m n o p q r s t u v w x y z"], ["Alice", "Bob"]), Bob, 'Test 87');
test(largestWordCount(["Multiple words in this message", "Few words", "One"], ["Alice", "Bob", "Alice"]), Alice, 'Test 88');
test(largestWordCount(["Equal length message", "Equal length message"], ["Alice", "Bob"]), Bob, 'Test 89');
test(largestWordCount(["word"], ["Z"]), Z, 'Test 90');
test(largestWordCount(["Single", "Double words", "Triple words here"], ["Eve", "Eve", "Frank"]), Frank, 'Test 91');
test(largestWordCount(["Many words in this message to test the word count", "Few words"], ["Charlie", "Charlie"]), Charlie, 'Test 92');
test(largestWordCount(["Same sender multiple times", "Same sender multiple times", "Same sender multiple times"], ["Zoe", "Zoe", "Zoe"]), Zoe, 'Test 93');
test(largestWordCount(["A B C D E", "F G H", "I J K L M N O"], ["Dave", "Eve", "Frank"]), Frank, 'Test 94');
test(largestWordCount(["Long message with multiple words indeed", "Another long message with multiple words indeed"], ["Anna", "Anna"]), Anna, 'Test 95');
test(largestWordCount(["A quick brown fox jumps over the lazy dog","Lorem ipsum dolor sit amet","Python programming"], ["Alice","Bob","Charlie"]), Alice, 'Test 96');
test(largestWordCount(["a b c d e f g h i j k l m n o p q r s t u v w x y z"], ["Zachary"]), Zachary, 'Test 97');
test(largestWordCount(["This is a test message", "Another message here", "Short one"], ["Alice", "Bob", "Charlie"]), Alice, 'Test 98');
test(largestWordCount(["A quick brown fox jumps over the lazy dog", "The quick brown fox jumps over the lazy dog"], ["Grace", "grace"]), grace, 'Test 99');
test(largestWordCount(["Single","Double double","Triple triple triple"], ["Alice","Bob","Charlie"]), Charlie, 'Test 100');
test(largestWordCount(["Short message", "Longer message here", "Even longer message to check", "Short again"], ["Bob", "Charlie", "Alice", "Charlie"]), Charlie, 'Test 101');
test(largestWordCount(["Short one", "Another short one"], ["Alice", "Bob"]), Bob, 'Test 102');
test(largestWordCount(["One", "Two words", "Three words here"], ["Zara", "Zara", "Zara"]), Zara, 'Test 103');
test(largestWordCount(["Unique words in each message", "Unique words here too", "More unique words"], ["Zoe", "Yasmin", "Xander"]), Zoe, 'Test 104');
test(largestWordCount(["One", "Two words", "Three words here", "Four words in a sentence"], ["Charlie", "Alice", "Bob", "Charlie"]), Charlie, 'Test 105');
test(largestWordCount(["Hello world", "This is a longer message", "Another message"], ["Charlie", "Bob", "Charlie"]), Bob, 'Test 106');
test(largestWordCount(["Test message", "Test message", "Test message", "Test message"], ["Jack", "Jack", "Jack", "Jack"]), Jack, 'Test 107');
test(largestWordCount(["One more message", "Yet another message", "Final message"], ["Charlie", "Charlie", "Charlie"]), Charlie, 'Test 108');
test(largestWordCount(["Hello world","How are you doing today","Fine thank you"], ["Charlie","Alice","Bob"]), Alice, 'Test 109');
test(largestWordCount(["Hello world", "This is a test", "Python programming"], ["Alice", "Bob", "Charlie"]), Bob, 'Test 110');
test(largestWordCount(["Single", "Two words", "Three word phrase", "Four word sentence structure"], ["Zebra", "Zebra", "Zebra", "Zebra"]), Zebra, 'Test 111');
test(largestWordCount(["Hello world", "Hello Alice", "Hello Bob"], ["Bob", "Alice", "Bob"]), Bob, 'Test 112');
test(largestWordCount(["A B C D E F G", "H I J K L M N", "O P Q R S T U V W X Y Z"], ["SenderA", "SenderB", "SenderC"]), SenderC, 'Test 113');
test(largestWordCount(["Unique message", "Unique message", "Unique message"], ["Ian", "Ian", "Ian"]), Ian, 'Test 114');
test(largestWordCount(["Message one", "Message two", "Message three", "Message four"], ["Anna", "Bob", "Charlie", "Bob"]), Bob, 'Test 115');
test(largestWordCount(["Long message to increase word count significantly", "Short"], ["Charlie", "Charlie"]), Charlie, 'Test 116');
test(largestWordCount(["A quick brown fox jumps over the lazy dog", "The quick brown fox jumps over the lazy dog", "Lazy dog"], ["Alice", "Bob", "Alice"]), Alice, 'Test 117');

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
