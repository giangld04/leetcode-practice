// Test: 2085. Count Common Words With One Occurrence
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { countWords } = require("./solution");

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

console.log("\n2085. Count Common Words With One Occurrence\n");

test(countWords(["one"], ["two"]), 0, 'Test 1');
test(countWords(["unique"], ["unique"]), 1, 'Test 2');
test(countWords(["b","bb","bbb"], ["a","aa","aaa"]), 0, 'Test 3');
test(countWords(["distinct"], ["distinct","distinct"]), 0, 'Test 4');
test(countWords(["a","b","c"], ["c","b","a"]), 3, 'Test 5');
test(countWords(["same","same"], ["same","same","same"]), 0, 'Test 6');
test(countWords(["a","ab"], ["a","a","a","ab"]), 1, 'Test 7');
test(countWords(["hello","world"], ["hello","world","hello"]), 1, 'Test 8');
test(countWords(["hello","world"], ["hello","world"]), 2, 'Test 9');
test(countWords(["apple","banana","cherry"], ["banana","apple","date"]), 2, 'Test 10');
test(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]), 2, 'Test 11');
test(countWords(["repeat","repeat"], ["repeat","repeat"]), 0, 'Test 12');
test(countWords(["python","java","c++","javascript"], ["c++","java","python","python","javascript","java","c++","javascript","c++","javascript"]), 0, 'Test 13');
test(countWords(["abc", "def", "ghi", "jkl"], ["def", "ghi", "jkl", "mno", "pqr", "abc", "def", "ghi", "jkl"]), 1, 'Test 14');
test(countWords(["python", "java", "c++", "ruby"], ["java", "c++", "ruby", "python", "python", "java"]), 2, 'Test 15');
test(countWords(["alpha","beta","gamma","delta"], ["delta","gamma","beta","alpha","alpha","beta","gamma","delta"]), 0, 'Test 16');
test(countWords(["x","y","z","x","y","z","x","y","z"], ["x","y","z","x","y","z","x","y","z","x","y","z"]), 0, 'Test 17');
test(countWords(["one","two","three","four","five"], ["two","three","four","five","six","seven","eight"]), 4, 'Test 18');
test(countWords(["hello","world","hello"], ["world","hello","hello","world"]), 0, 'Test 19');
test(countWords(["cat","dog","bird","fish"], ["cat","dog","bird","fish","dog","bird"]), 2, 'Test 20');
test(countWords(["hello","hello","world"], ["hello","world","world","world"]), 0, 'Test 21');
test(countWords(["cat","dog","fish"], ["dog","cat","bird","fish","dog","fish"]), 1, 'Test 22');
test(countWords(["a","b","c","d","e"], ["f","g","h","i","j"]), 0, 'Test 23');
test(countWords(["alpha","beta","gamma","delta"], ["alpha","beta","gamma","delta","delta"]), 3, 'Test 24');
test(countWords(["one","two","three","four","five","six"], ["three","four","seven","eight","nine","one","two"]), 4, 'Test 25');
test(countWords(["one","two","three","four"], ["four","three","two","one","one","two","three","four","four","three","two","one"]), 0, 'Test 26');
test(countWords(["a","b","c","d","e","f","g","h","i","j"], ["a","b","c","d","e","f","g","h","i","j","a","b","c","d","e","f","g","h","i","j"]), 0, 'Test 27');
test(countWords(["same","word","multiple"], ["same","word","multiple","same","word","multiple"]), 0, 'Test 28');
test(countWords(["test","case","one"], ["case","test","one","one","test","case"]), 0, 'Test 29');
test(countWords(["same","word","repeated"], ["same","word","repeated","same","word","repeated"]), 0, 'Test 30');
test(countWords(["hello", "world", "hello", "world"], ["hello", "world", "hello", "world", "hello", "world"]), 0, 'Test 31');
test(countWords(["x","y","z"], ["x","y","z","x","y","z"]), 0, 'Test 32');
test(countWords(["a","b","c","d","e","f","g","h","i","j"], ["a","b","b","c","d","d","e","f","f","g"]), 4, 'Test 33');
test(countWords(["car","truck","bus","van","car","truck"], ["bus","van","motorcycle","bicycle","bus","van","truck"]), 0, 'Test 34');
test(countWords(["cat", "dog", "fish", "bird"], ["dog", "cat", "cat", "fish", "dog", "bird"]), 2, 'Test 35');
test(countWords(["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j", "a", "b", "c", "d", "e"]), 5, 'Test 36');
test(countWords(["one","two","three","four","five","six","seven","eight","nine","ten"], ["one","two","three","four","five","six","seven","eight","nine","ten","one","two","three","four","five","six","seven","eight","nine","ten"]), 0, 'Test 37');
test(countWords(["same","word","repeated","multiple","times"], ["times","repeated","multiple","same","word","word"]), 4, 'Test 38');
test(countWords(["one","two","three","four"], ["four","three","two","one","one","two","three","four"]), 0, 'Test 39');
test(countWords(["apple","banana","cherry"], ["banana","apple","cherry","apple"]), 2, 'Test 40');
test(countWords(["a","b","c","d"], ["a","b","c","d","e","f","g","h","i","j"]), 4, 'Test 41');
test(countWords(["a","b","c","d"], ["a","b","c","d","a","b","c","d"]), 0, 'Test 42');
test(countWords(["x","y","z","w","v"], ["x","y","z","w","v","x","y","z","w","v","x","y","z","w","v","x","y","z","w","v"]), 0, 'Test 43');
test(countWords(["a","b","c","d","e"], ["e","d","c","b","a","a","b","c","d","e"]), 0, 'Test 44');
test(countWords(["unique","words","only","once","here"], ["words","only","once","here","unique","twice","unique"]), 4, 'Test 45');
test(countWords(["x", "y", "z"], ["x", "y", "z", "x", "y", "z", "x", "y", "z", "x", "y", "z"]), 0, 'Test 46');
test(countWords(["cat","dog","elephant","frog","cat"], ["dog","frog","giraffe","elephant","hippo"]), 3, 'Test 47');
test(countWords(["cat","dog","fish"], ["fish","dog","cat","dog","cat"]), 1, 'Test 48');
test(countWords(["python","java","c","cpp"], ["python","java","java","csharp"]), 1, 'Test 49');
test(countWords(["unique","words","only","here"], ["here","only","words","unique","unique"]), 3, 'Test 50');
test(countWords(["hello","world","hello"], ["world","hello","world","hello","world","hello"]), 0, 'Test 51');
test(countWords(["hello","world","python","java","csharp"], ["python","java","csharp","hello","ruby","scala","world","python","java"]), 3, 'Test 52');
test(countWords(["x","y","z"], ["x","y","z","x","y","z","x","y","z"]), 0, 'Test 53');
test(countWords(["unique","word","only","in","this","array"], ["unique","only","word","in","that","array"]), 5, 'Test 54');
test(countWords(["apple","banana","cherry"], ["banana","cherry","apple","apple"]), 2, 'Test 55');
test(countWords(["apple","banana","cherry","date"], ["banana","cherry","fig","grape"]), 2, 'Test 56');
test(countWords(["apple", "banana", "cherry"], ["banana", "apple", "apple", "cherry", "date"]), 2, 'Test 57');
test(countWords(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","abc"], ["mno","pqr","stu","vwx","yz","abc","def","ghi","jkl","mno"]), 7, 'Test 58');
test(countWords(["apple","banana","cherry","date"], ["banana","date","fig","grape","apple"]), 3, 'Test 59');
test(countWords(["apple", "banana", "cherry", "date", "elderberry"], ["banana", "cherry", "elderberry", "fig", "grape", "apple", "date"]), 5, 'Test 60');
test(countWords(["a","b","c","a","b","c"], ["a","b","c","a","b","c","a","b","c"]), 0, 'Test 61');
test(countWords(["x","y","z","x","y","z","x","y","z"], ["x","y","z","x","y","z","x","y","z","x","y","z","x","y","z"]), 0, 'Test 62');
test(countWords(["sun","moon","star","planet","sun","moon"], ["star","planet","comet","asteroid","planet","star"]), 0, 'Test 63');
test(countWords(["alpha","beta","gamma","delta","epsilon"], ["gamma","delta","zeta","eta","theta","epsilon","delta"]), 2, 'Test 64');
test(countWords(["python","java","csharp"], ["java","csharp","python","python"]), 2, 'Test 65');
test(countWords(["python","java","c++"], ["c++","java","python","java","python","c++","python"]), 0, 'Test 66');
test(countWords(["cat","dog","mouse"], ["dog","cat","cat","mouse","dog"]), 1, 'Test 67');
test(countWords(["apple","banana","cherry"], ["banana","cherry","apple","banana"]), 2, 'Test 68');
test(countWords(["same","words","in","both","arrays"], ["same","words","in","both","arrays"]), 5, 'Test 69');
test(countWords(["single"], ["single","single","single","single"]), 0, 'Test 70');
test(countWords(["apple","banana","cherry"], ["cherry","banana","apple","apple"]), 2, 'Test 71');
test(countWords(["abc","def","ghi"], ["def","ghi","jkl","def","ghi"]), 0, 'Test 72');
test(countWords(["foo","bar","baz","qux","quux","corge","grault"], ["foo","bar","baz","qux","quux","corge","grault","grault"]), 6, 'Test 73');
test(countWords(["foo","bar","baz","qux"], ["foo","bar","qux","quux"]), 3, 'Test 74');
test(countWords(["apple","banana","cherry"], ["banana","apple","cherry","banana"]), 2, 'Test 75');
test(countWords(["hello","hello","world"], ["world","world","hello","hello","hello"]), 0, 'Test 76');
test(countWords(["one","two","three","four","five"], ["five","four","three","two","one"]), 5, 'Test 77');
test(countWords(["apple","banana","cherry"], ["banana","apple","cherry","cherry"]), 2, 'Test 78');
test(countWords(["unique","words","only"], ["only","words","unique","words"]), 2, 'Test 79');
test(countWords(["red","blue","green"], ["red","red","blue","green","blue","green"]), 0, 'Test 80');
test(countWords(["cat","dog","mouse","elephant"], ["dog","mouse","cat","tiger","elephant","dog"]), 3, 'Test 81');
test(countWords(["test","case","input"], ["input","test","case","input","test","case","input","test","case"]), 0, 'Test 82');
test(countWords(["hello","world","hello","world"], ["hello","world","world","hello"]), 0, 'Test 83');
test(countWords(["first","second","third","fourth"], ["fourth","third","second","first","first","second","third","fourth","first","second","third","fourth"]), 0, 'Test 84');
test(countWords(["one", "two", "three", "four", "five"], ["two", "three", "five", "six", "seven", "eight", "nine", "one", "four"]), 5, 'Test 85');
test(countWords(["repeated","repeated","words","in","both","arrays"], ["repeated","words","in","both","arrays","arrays"]), 3, 'Test 86');
test(countWords(["x","y","z"], ["z","y","x"]), 3, 'Test 87');
test(countWords(["a","b","c","d"], ["a","a","b","c","c","d","d","d"]), 1, 'Test 88');
test(countWords(["single"], ["single"]), 1, 'Test 89');
test(countWords(["hello","world","python","java"], ["python","java","hello","world","world","hello"]), 2, 'Test 90');
test(countWords(["a","b","c","d","e"], ["a","a","b","c","c","d","e","e"]), 2, 'Test 91');
test(countWords(["python","java","c","cpp"], ["java","c","cpp","ruby"]), 3, 'Test 92');
test(countWords(["unique","string","in","each","array"], ["different","string","in","each","array"]), 4, 'Test 93');
test(countWords(["single"], ["single","single","single"]), 0, 'Test 94');
test(countWords(["apple","banana","cherry"], ["banana","cherry","date"]), 2, 'Test 95');
test(countWords(["repeat","repeat","repeat"], ["repeat","repeat","repeat","repeat"]), 0, 'Test 96');
test(countWords(["red","blue","green","yellow","red"], ["blue","green","purple","yellow","blue","green"]), 1, 'Test 97');
test(countWords(["foo","bar","baz","qux","quux"], ["qux","quux","foo","bar","baz","corge","grault","foo"]), 4, 'Test 98');
test(countWords(["example","test","case"], ["test","case","example","example","test","case"]), 0, 'Test 99');
test(countWords(["unique"], ["unique","unique","unique"]), 0, 'Test 100');
test(countWords(["x","y","z","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"], ["x","y","z","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a","x","y","z"]), 23, 'Test 101');
test(countWords(["a","b","c","d","e","f","g"], ["a","b","c","d","e","f","g","a","b","c","d","e","f","g"]), 0, 'Test 102');
test(countWords(["unique"], ["unique","unique","unique","unique"]), 0, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

