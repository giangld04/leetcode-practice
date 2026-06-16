// Test: 1816. Truncate Sentence
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { truncateSentence } = require("./solution");

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

console.log("\n1816. Truncate Sentence\n");

test(truncateSentence("I love to code", 3), I love to, 'Test 1');
test(truncateSentence("Python is great", 2), Python is, 'Test 2');
test(truncateSentence("Python programming is fun", 2), Python programming, 'Test 3');
test(truncateSentence("A quick brown fox jumps over the lazy dog", 3), A quick brown, 'Test 4');
test(truncateSentence("I love programming in Python", 3), I love programming, 'Test 5');
test(truncateSentence("Hello how are you Contestant", 4), Hello how are you, 'Test 6');
test(truncateSentence("Python is a great programming language", 2), Python is, 'Test 7');
test(truncateSentence("chopper is not a tanuki", 5), chopper is not a tanuki, 'Test 8');
test(truncateSentence("Python is fun", 2), Python is, 'Test 9');
test(truncateSentence("I love programming", 1), I, 'Test 10');
test(truncateSentence("What is the solution to this problem", 4), What is the solution, 'Test 11');
test(truncateSentence("I love solving problems", 3), I love solving, 'Test 12');
test(truncateSentence("It does not matter how slowly you go as long as you do not stop", 9), It does not matter how slowly you go as, 'Test 13');
test(truncateSentence("The road to success is always under construction", 7), The road to success is always under, 'Test 14');
test(truncateSentence("The best way to predict your future is to create it", 8), The best way to predict your future is, 'Test 15');
test(truncateSentence("This is a test sentence to check the functionality of the code", 9), This is a test sentence to check the functionality, 'Test 16');
test(truncateSentence("a b c d e f g h i j k l m n o p q r s t u v w x y z", 5), a b c d e, 'Test 17');
test(truncateSentence("In computer science, the art of programming is the science of abstraction", 8), In computer science, the art of programming is, 'Test 18');
test(truncateSentence("A journey of a thousand miles begins with a single step", 8), A journey of a thousand miles begins with, 'Test 19');
test(truncateSentence("Believe you can and you're halfway there", 5), Believe you can and you're, 'Test 20');
test(truncateSentence("Keep it simple stupid", 5), Keep it simple stupid, 'Test 21');
test(truncateSentence("To be or not to be that is the question", 10), To be or not to be that is the question, 'Test 22');
test(truncateSentence("May the Force be with you young Jedi", 6), May the Force be with you, 'Test 23');
test(truncateSentence("Short sentence", 2), Short sentence, 'Test 24');
test(truncateSentence("The only way to do great work is to love what you do", 7), The only way to do great work, 'Test 25');
test(truncateSentence("Honesty is the best policy", 4), Honesty is the best, 'Test 26');
test(truncateSentence("In the middle of difficulty lies opportunity", 4), In the middle of, 'Test 27');
test(truncateSentence("Natural language processing has become a cornerstone of modern technology", 9), Natural language processing has become a cornerstone of modern, 'Test 28');
test(truncateSentence("One two three four five six seven eight nine ten", 10), One two three four five six seven eight nine ten, 'Test 29');
test(truncateSentence("You miss 100 percent of the shots you don t take Wayne Gretzky", 11), You miss 100 percent of the shots you don t take, 'Test 30');
test(truncateSentence("OpenAI GPT-4 can generate human-like text based on the input it receives", 7), OpenAI GPT-4 can generate human-like text based, 'Test 31');
test(truncateSentence("One two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen", 10), One two three four five six seven eight nine ten, 'Test 32');
test(truncateSentence("What you get by achieving your goals is not as important as what you become by achieving your goals", 12), What you get by achieving your goals is not as important as, 'Test 33');
test(truncateSentence("Debugging is twice as hard as writing the code in the first place", 7), Debugging is twice as hard as writing, 'Test 34');
test(truncateSentence("Python programming is fun and challenging", 10), Python programming is fun and challenging, 'Test 35');
test(truncateSentence("A journey of a thousand miles begins with a single step", 7), A journey of a thousand miles begins, 'Test 36');
test(truncateSentence("Success is not final success is to be able to continue to try", 8), Success is not final success is to be, 'Test 37');
test(truncateSentence("OneWordOnly", 1), OneWordOnly, 'Test 38');
test(truncateSentence("Data Science and Machine Learning", 3), Data Science and, 'Test 39');
test(truncateSentence("Life is what happens when you are busy making other plans", 7), Life is what happens when you are, 'Test 40');
test(truncateSentence("The early morning sun is warm and welcoming", 7), The early morning sun is warm and, 'Test 41');
test(truncateSentence("To be or not to be that is the question", 7), To be or not to be that, 'Test 42');
test(truncateSentence("Short but tricky", 2), Short but, 'Test 43');
test(truncateSentence("The early bird catches the worm", 5), The early bird catches the, 'Test 44');
test(truncateSentence("Final complex sentence with multiple words indeed", 7), Final complex sentence with multiple words indeed, 'Test 45');
test(truncateSentence("The best way to predict the future is to invent it", 9), The best way to predict the future is to, 'Test 46');
test(truncateSentence("VeryLongWordWithoutSpacesIsAlsoAcceptedButNotTypicalInSentences", 1), VeryLongWordWithoutSpacesIsAlsoAcceptedButNotTypicalInSentences, 'Test 47');
test(truncateSentence("Do not judge a book by its cover", 7), Do not judge a book by its, 'Test 48');
test(truncateSentence("All that glitters is not gold only the good do well by gold", 9), All that glitters is not gold only the good, 'Test 49');
test(truncateSentence("All that glitters is not gold", 5), All that glitters is not, 'Test 50');
test(truncateSentence("To be or not to be that is the question", 5), To be or not to, 'Test 51');
test(truncateSentence("Edge case with k equal to the number of words here", 9), Edge case with k equal to the number of, 'Test 52');
test(truncateSentence("Multiple words with mixed CASE Words", 4), Multiple words with mixed, 'Test 53');
test(truncateSentence("Programming in Python is both fun and educational", 6), Programming in Python is both fun, 'Test 54');
test(truncateSentence("A journey of a thousand miles begins with a single step", 6), A journey of a thousand miles, 'Test 55');
test(truncateSentence("Success is not final success is courage to continue", 7), Success is not final success is courage, 'Test 56');
test(truncateSentence("In the beginning God created the heavens and the earth", 6), In the beginning God created the, 'Test 57');
test(truncateSentence("Programming in Python is very rewarding", 5), Programming in Python is very, 'Test 58');
test(truncateSentence("You can lead a horse to water but you cannot make it drink", 11), You can lead a horse to water but you cannot make, 'Test 59');
test(truncateSentence("Another example with different words", 3), Another example with, 'Test 60');
test(truncateSentence("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z", 10), A B C D E F G H I J, 'Test 61');
test(truncateSentence("The quick brown fox jumps over the lazy dog", 9), The quick brown fox jumps over the lazy dog, 'Test 62');
test(truncateSentence("MixedCASE Words In Sentences Should Be Handled", 5), MixedCASE Words In Sentences Should, 'Test 63');
test(truncateSentence("Well done is better than well said", 5), Well done is better than, 'Test 64');
test(truncateSentence("The quick brown fox jumps over the lazy dog", 7), The quick brown fox jumps over the, 'Test 65');
test(truncateSentence("Yet another test to ensure correctness", 5), Yet another test to ensure, 'Test 66');
test(truncateSentence("Edge case test with exact words count", 6), Edge case test with exact words, 'Test 67');
test(truncateSentence("SingleWord", 1), SingleWord, 'Test 68');
test(truncateSentence("Hello World from the other side of the universe", 8), Hello World from the other side of the, 'Test 69');
test(truncateSentence("In the middle of every difficulty lies opportunity", 8), In the middle of every difficulty lies opportunity, 'Test 70');
test(truncateSentence("One two three four five six seven eight nine ten", 5), One two three four five, 'Test 71');
test(truncateSentence("With great power comes great responsibility", 5), With great power comes great, 'Test 72');
test(truncateSentence("Multiple    Spaces    Between    Words    Are    Not    Allowed", 5), Multiple Spaces Between Words Are, 'Test 73');
test(truncateSentence("Multiple     spaces    should    not    be    here    but    for    testing    purposes    we    will    add    them", 10), Multiple spaces should not be here but for testing purposes, 'Test 74');
test(truncateSentence("An apple a day keeps the doctor away", 8), An apple a day keeps the doctor away, 'Test 75');
test(truncateSentence("Sometimes the journey is more important than the destination", 9), Sometimes the journey is more important than the destination, 'Test 76');
test(truncateSentence("Sometimes you just want to have a long sentence to test the truncation functionality of the code", 15), Sometimes you just want to have a long sentence to test the truncation functionality of, 'Test 77');
test(truncateSentence("A quick brown fox jumps over the lazy dog", 9), A quick brown fox jumps over the lazy dog, 'Test 78');
test(truncateSentence("a b c d e f g h i j k l m n o p q r s t u v w x y z", 26), a b c d e f g h i j k l m n o p q r s t u v w x y z, 'Test 79');
test(truncateSentence("This is a very long sentence that we need to truncate to the first few words", 7), This is a very long sentence that, 'Test 80');
test(truncateSentence("May the force be with you", 5), May the force be with, 'Test 81');
test(truncateSentence("In the heart of the night the fireflies dance", 8), In the heart of the night the fireflies, 'Test 82');
test(truncateSentence("ManyManyWordsInOneSentenceWithoutSpacesButAllowedByConstraintsIfWeRemoveSpacesThenThisWillBeAVeryLongListofWords", 5), ManyManyWordsInOneSentenceWithoutSpacesButAllowedByConstraintsIfWeRemoveSpacesThenThisWillBeAVeryLongListofWords, 'Test 83');
test(truncateSentence("To be or not to be that is the question", 6), To be or not to be, 'Test 84');
test(truncateSentence("Better late than never", 4), Better late than never, 'Test 85');
test(truncateSentence("Actions speak louder than words", 4), Actions speak louder than, 'Test 86');
test(truncateSentence("Keep calm and carry on", 3), Keep calm and, 'Test 87');
test(truncateSentence("Lorem ipsum dolor sit amet consectetur adipiscing elit", 7), Lorem ipsum dolor sit amet consectetur adipiscing, 'Test 88');
test(truncateSentence("This is a longer sentence to test the functionality", 7), This is a longer sentence to test, 'Test 89');
test(truncateSentence("Software design is all about managing complexity", 7), Software design is all about managing complexity, 'Test 90');
test(truncateSentence("May the Force be with you", 3), May the Force, 'Test 91');
test(truncateSentence("Data structures and algorithms are the building blocks of software development", 8), Data structures and algorithms are the building blocks, 'Test 92');
test(truncateSentence("An algorithm must be seen to be believed", 5), An algorithm must be seen, 'Test 93');
test(truncateSentence("This is a test for truncating the sentence at exactly the word limit", 10), This is a test for truncating the sentence at exactly, 'Test 94');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

