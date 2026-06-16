// Test: 692. Top K Frequent Words
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { topKFrequent } = require("./solution");

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

console.log("\n692. Top K Frequent Words\n");

test(topKFrequent(["a","aa","aaa"], 1), ['a'], 'Test 1');
test(topKFrequent(["a","aa","aaa"], 2), ['a', 'aa'], 'Test 2');
test(topKFrequent(["i","love","leetcode","i","love","coding"], 2), ['i', 'love'], 'Test 3');
test(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4), ['the', 'is', 'sunny', 'day'], 'Test 4');
test(topKFrequent(["apple","banana","apple","orange","banana","apple"], 3), ['apple', 'banana', 'orange'], 'Test 5');
test(topKFrequent(["zebra","dog","duck","dog","zebra","zebra"], 1), ['zebra'], 'Test 6');
test(topKFrequent(["hello","world","hello","world","hello"], 2), ['hello', 'world'], 'Test 7');
test(topKFrequent(["sun","moon","star","sun","moon","star","sun","moon","star","star","star","star"], 2), ['star', 'moon'], 'Test 8');
test(topKFrequent(["apple","orange","banana","grape","apple","orange","banana","grape","apple","orange","banana","grape","apple","orange","banana","grape"], 4), ['apple', 'banana', 'grape', 'orange'], 'Test 9');
test(topKFrequent(["quick","brown","fox","jumps","over","lazy","dog","quick","fox","quick"], 2), ['quick', 'fox'], 'Test 10');
test(topKFrequent(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 10), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'Test 11');
test(topKFrequent(["a","abc","abcd","abc","a","abcde","a","abcdef","a","abcde","a","abcdef","a"], 4), ['a', 'abc', 'abcde', 'abcdef'], 'Test 12');
test(topKFrequent(["quick","brown","fox","jumps","over","lazy","dog","quick","brown","fox","jumps","over","lazy","dog","quick","brown","fox","jumps","over","lazy","dog","quick","brown","fox","jumps","over","lazy","dog","quick","brown","fox","jumps","over","lazy","dog"], 5), ['brown', 'dog', 'fox', 'jumps', 'lazy'], 'Test 13');
test(topKFrequent(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"], 5), ['eight', 'eleven', 'five', 'four', 'nine'], 'Test 14');
test(topKFrequent(["quick","brown","fox","jumps","over","lazy","dog","quick","brown","fox","jumps","over","lazy","dog","quick","brown","fox","jumps","over","lazy","dog","quick","brown","fox","jumps","over","lazy","dog"], 4), ['brown', 'dog', 'fox', 'jumps'], 'Test 15');
test(topKFrequent(["apple","banana","cherry","apple","banana","apple","cherry","cherry","banana"], 2), ['apple', 'banana'], 'Test 16');
test(topKFrequent(["a","aa","aaa","aaaa","aaaaa","a","aa","aaa","aaaa","aaaaa"], 3), ['a', 'aa', 'aaa'], 'Test 17');
test(topKFrequent(["apple","banana","apple","orange","banana","apple","kiwi","banana","kiwi","kiwi","kiwi"], 3), ['kiwi', 'apple', 'banana'], 'Test 18');
test(topKFrequent(["sun","moon","star","planet","sun","moon","star","moon","moon","sun","star","star","star","star"], 3), ['star', 'moon', 'sun'], 'Test 19');
test(topKFrequent(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"], 12), ['eight', 'eleven', 'five', 'four', 'nine', 'one', 'seven', 'six', 'ten', 'three', 'twelve', 'two'], 'Test 20');
test(topKFrequent(["zebra","dog","duck","dog","zebra","zebra","cat","cat","cat","dog","cat"], 3), ['cat', 'dog', 'zebra'], 'Test 21');
test(topKFrequent(["zebra","dog","duck","dog","zebra","zebra","dog","zebra","dog","duck","duck","zebra","dog","zebra","zebra","dog"], 3), ['zebra', 'dog', 'duck'], 'Test 22');
test(topKFrequent(["coding","programming","hacking","debugging","coding","programming","debugging","hacking","hacking","hacking"], 2), ['hacking', 'coding'], 'Test 23');
test(topKFrequent(["x","y","z","x","y","x","y","x","y","x","y","x","y","x","y","x","y","x","y","x","y","x","y","x","y","x","y"], 2), ['x', 'y'], 'Test 24');
test(topKFrequent(["alpha","beta","gamma","delta","epsilon","zeta","alpha","beta","gamma","delta","epsilon","zeta","alpha","beta","gamma"], 5), ['alpha', 'beta', 'gamma', 'delta', 'epsilon'], 'Test 25');
test(topKFrequent(["a","ab","abc","abcd","abcde","abcdef","a","ab","abc","abcd","abcde","abcdef"], 2), ['a', 'ab'], 'Test 26');
test(topKFrequent(["red","blue","green","red","blue","red","green","red","blue","green","red","red"], 3), ['red', 'blue', 'green'], 'Test 27');
test(topKFrequent(["a","abc","abcd","abc","a","abcde","abcd","abcde","a","abcd"], 3), ['a', 'abcd', 'abc'], 'Test 28');
test(topKFrequent(["red","blue","green","red","blue","green","red","blue","green","red","blue","green","red"], 2), ['red', 'blue'], 'Test 29');
test(topKFrequent(["cat","bat","rat","cat","bat","rat","rat","cat","bat","cat","bat","bat"], 3), ['bat', 'cat', 'rat'], 'Test 30');
test(topKFrequent(["leetcode","coding","interview","questions","leetcode","interview","coding","coding","leetcode","questions","questions"], 3), ['coding', 'leetcode', 'questions'], 'Test 31');
test(topKFrequent(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen"], 5), ['eight', 'eleven', 'five', 'four', 'nine'], 'Test 32');
test(topKFrequent(["apple","banana","apple","orange","banana","apple","kiwi","kiwi","kiwi","banana"], 2), ['apple', 'banana'], 'Test 33');
test(topKFrequent(["apple","banana","apple","orange","banana","banana","kiwi","kiwi","kiwi","kiwi"], 2), ['kiwi', 'banana'], 'Test 34');
test(topKFrequent(["apple","banana","cherry","date","elderberry","fig","grape","honeydew","kiwi","lemon","mango","nectarine","orange","papaya","quince","raspberry","strawberry","tangerine","ugli","vanilla","watermelon","xigua","yam","zucchini"], 10), ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon'], 'Test 35');
test(topKFrequent(["zebra","dog","duck","dog","zebra","zebra","lion","tiger","lion","tiger","tiger","lion","zebra"], 3), ['zebra', 'lion', 'tiger'], 'Test 36');
test(topKFrequent(["x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z","x","y","z"], 3), ['x', 'y', 'z'], 'Test 37');
test(topKFrequent(["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"], 1), ['a'], 'Test 38');
test(topKFrequent(["sun","moon","star","planet","moon","moon","sun","star","planet","planet","star"], 4), ['moon', 'planet', 'star', 'sun'], 'Test 39');
test(topKFrequent(["a","aa","aaa","aaaa","a","aa","aaa","aaaa","a","aa","aaa","aaaa"], 4), ['a', 'aa', 'aaa', 'aaaa'], 'Test 40');
test(topKFrequent(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d"], 10), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'Test 41');
test(topKFrequent(["a","a","a","b","b","b","b","c","c","c","c","c","d","d","d","d","d","d","e","e","e","e","e","e","e"], 2), ['e', 'd'], 'Test 42');
test(topKFrequent(["leetcode","python","java","c","cpp","python","java","java","c","cpp","cpp","cpp","c","c","java","java","java","python"], 4), ['java', 'c', 'cpp', 'python'], 'Test 43');
test(topKFrequent(["sun","moon","star","sky","sun","moon","star","sky","sun","moon","star","sky","sun","moon","star","sky","sun","moon","star","sky","sun","moon","star","sky","sun","moon","star","sky"], 4), ['moon', 'sky', 'star', 'sun'], 'Test 44');
test(topKFrequent(["zebra","dog","duck","dog","zebra","zebra","cat","cat","dog","cat"], 3), ['cat', 'dog', 'zebra'], 'Test 45');
test(topKFrequent(["one","two","three","four","five","six","seven","eight","nine","ten","one","two","three","four","five"], 5), ['five', 'four', 'one', 'three', 'two'], 'Test 46');
test(topKFrequent(["frequency","of","words","frequency","in","a","sentence","frequency","sentence","frequency"], 3), ['frequency', 'sentence', 'a'], 'Test 47');
test(topKFrequent(["ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk"], 4), ['ab', 'abc', 'abcd', 'abcde'], 'Test 48');
test(topKFrequent(["apple","banana","apple","orange","banana","apple","kiwi","kiwi","kiwi"], 3), ['apple', 'kiwi', 'banana'], 'Test 49');
test(topKFrequent(["aaa","bbb","ccc","aaa","bbb","aaa","bbb","ccc","aaa","bbb","ccc","ccc"], 2), ['aaa', 'bbb'], 'Test 50');
test(topKFrequent(["zebra","dog","duck","dog","zebra","zebra","cat","cat","cat","bird","bird","bird","bird"], 4), ['bird', 'cat', 'zebra', 'dog'], 'Test 51');
test(topKFrequent(["alpha","beta","gamma","delta","epsilon","zeta","eta","theta","iota","kappa","lambda","mu","nu","xi","omicron","pi"], 5), ['alpha', 'beta', 'delta', 'epsilon', 'eta'], 'Test 52');
test(topKFrequent(["zebra","dog","duck","dog","zebra","zebra","dog","dog","dog","zebra","zebra","zebra","zebra"], 2), ['zebra', 'dog'], 'Test 53');
test(topKFrequent(["cat","dog","cat","dog","cat","dog","cat","dog","cat","dog","cat","dog","cat","dog","cat","dog","cat","dog","cat","dog"], 2), ['cat', 'dog'], 'Test 54');
test(topKFrequent(["hello","world","hello","world","hello","world","hello","world","hello","world","hello","world"], 1), ['hello'], 'Test 55');
test(topKFrequent(["python","java","c","cpp","python","java","python","java","java","c","c","cpp","cpp","cpp","cpp"], 4), ['cpp', 'java', 'c', 'python'], 'Test 56');
test(topKFrequent(["algorithm","data","structure","algorithm","data","data","algorithm","algorithm","data","structure","structure","structure","structure"], 2), ['structure', 'algorithm'], 'Test 57');
test(topKFrequent(["a","b","c","d","e","a","b","c","a","b","a","a","b","b","c","d","d","e","e","e","e"], 4), ['a', 'b', 'e', 'c'], 'Test 58');
test(topKFrequent(["apple","banana","apple","orange","banana","apple","banana","kiwi","kiwi","kiwi","kiwi"], 3), ['kiwi', 'apple', 'banana'], 'Test 59');
test(topKFrequent(["panda","polar","bear","panda","polar","polar","polar","bear","bear","bear","bear","bear"], 3), ['bear', 'polar', 'panda'], 'Test 60');
test(topKFrequent(["flower","flow","flight","flow","flight","flow","flower","flight","flower","flower"], 4), ['flower', 'flight', 'flow'], 'Test 61');
test(topKFrequent(["zebra","dog","duck","dog","zebra","zebra","zebra","dog","dog","dog","duck","duck","duck","duck"], 2), ['dog', 'duck'], 'Test 62');
test(topKFrequent(["one","two","three","four","five","six","seven","eight","nine","ten","one","two","three","four","five","six","seven","eight","nine","ten"], 5), ['eight', 'five', 'four', 'nine', 'one'], 'Test 63');
test(topKFrequent(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 5), ['a', 'b', 'c', 'd', 'e'], 'Test 64');
test(topKFrequent(["cat","bat","rat","cat","bat","rat","cat","bat","rat","cat"], 2), ['cat', 'bat'], 'Test 65');
test(topKFrequent(["cat","bat","rat","cat","bat","rat","cat","bat","rat","cat","bat","rat","cat","bat","rat","cat","bat","rat","cat","bat","rat","cat","bat","rat"], 2), ['bat', 'cat'], 'Test 66');
test(topKFrequent(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 5), ['a', 'b', 'c', 'd', 'e'], 'Test 67');
test(topKFrequent(["red","blue","green","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue"], 3), ['blue', 'red', 'green'], 'Test 68');
test(topKFrequent(["apple","banana","apple","orange","banana","banana","kiwi","kiwi","kiwi","kiwi"], 3), ['kiwi', 'banana', 'apple'], 'Test 69');
test(topKFrequent(["apple","banana","apple","orange","banana","banana","grape","grape","grape"], 3), ['banana', 'grape', 'apple'], 'Test 70');
test(topKFrequent(["x","y","z","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"], 5), ['a', 'b', 'c', 'd', 'e'], 'Test 71');
test(topKFrequent(["aaaaa","aaa","aa","a","aaaaa","aaa","aa","a","aaaaa","aaa","aa","a","aaaaa","aaa","aa","a","aaaaa","aaa","aa","a"], 4), ['a', 'aa', 'aaa', 'aaaaa'], 'Test 72');
test(topKFrequent(["jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk","jump","run","walk"], 2), ['jump', 'run'], 'Test 73');
test(topKFrequent(["zebra","dog","duck","dog","zebra","zebra","zebra","dog","dog","dog","duck","duck","duck","duck","duck","zebra"], 3), ['duck', 'dog', 'zebra'], 'Test 74');
test(topKFrequent(["repeated","word","repeated","word","repeated","word","unique","unique","unique","unique","another","another","another","another","another"], 3), ['another', 'unique', 'repeated'], 'Test 75');
test(topKFrequent(["sun","moon","star","moon","sun","moon","star","sun","star","star","star","sun","moon","moon","moon"], 3), ['moon', 'star', 'sun'], 'Test 76');
test(topKFrequent(["car","bike","train","car","bike","car","bike","train","car","bike","car","bike","train","car","train","car","bike","train"], 3), ['car', 'bike', 'train'], 'Test 77');
test(topKFrequent(["alpha","beta","gamma","delta","epsilon","alpha","beta","gamma","delta","epsilon","alpha","beta","gamma","delta","epsilon","alpha","beta","gamma","delta","epsilon","alpha","beta","gamma","delta","epsilon","alpha","beta","gamma","delta","epsilon"], 3), ['alpha', 'beta', 'delta'], 'Test 78');
test(topKFrequent(["a","aa","aaa","aaaa","a","aa","aaa","aaaa","a","aa","aaa","aaaa"], 3), ['a', 'aa', 'aaa'], 'Test 79');
test(topKFrequent(["cat","bat","rat","hat","mat","pat","sat","fat","tat","cat","bat","rat","hat","mat","pat","sat","fat","tat","cat","bat","rat","hat","mat","pat","sat","fat","tat"], 5), ['bat', 'cat', 'fat', 'hat', 'mat'], 'Test 80');
test(topKFrequent(["zebra","dog","duck","dog","zebra","zebra","lion","tiger","bear","zebra","dog","duck"], 4), ['zebra', 'dog', 'duck', 'bear'], 'Test 81');
test(topKFrequent(["elephant","giraffe","lion","tiger","elephant","lion","giraffe","tiger","elephant","lion","giraffe","tiger","lion","giraffe","tiger","elephant","tiger","giraffe","lion","tiger"], 4), ['tiger', 'giraffe', 'lion', 'elephant'], 'Test 82');
test(topKFrequent(["sunrise","sunset","midnight","noon","sunrise","sunset","midnight","noon","sunrise","sunset","midnight","noon","sunrise","sunset","midnight","noon","sunrise","sunset","midnight","noon","sunrise","sunset","midnight","noon","sunrise","sunset","midnight","noon","sunrise","sunset","midnight","noon","sunrise","sunset","midnight","noon","sunrise","sunset","midnight","noon"], 4), ['midnight', 'noon', 'sunrise', 'sunset'], 'Test 83');
test(topKFrequent(["apple","banana","apple","orange","banana","apple","banana","banana"], 2), ['banana', 'apple'], 'Test 84');
test(topKFrequent(["flower","tree","bush","flower","tree","flower","bush","flower","tree","bush","flower","tree","bush","flower","tree","bush","flower","tree","bush","flower","tree","bush","flower","tree","bush","flower","tree","bush","flower","tree","bush"], 2), ['flower', 'bush'], 'Test 85');
test(topKFrequent(["apple","banana","apple","orange","banana","banana","kiwi","kiwi","kiwi"], 3), ['banana', 'kiwi', 'apple'], 'Test 86');
test(topKFrequent(["a","aa","aaa","aaaa","a","aa","aaa","aaaa","a","aa","aaa","aaaa","a","aa","aaa"], 2), ['a', 'aa'], 'Test 87');
test(topKFrequent(["sun","moon","star","planet","galaxy","universe","sun","moon","star","planet","galaxy","universe","sun","moon","star","planet","galaxy","universe","sun","moon","star","planet","galaxy","universe"], 3), ['galaxy', 'moon', 'planet'], 'Test 88');
test(topKFrequent(["aaa","aa","a","aaaa","aa","a","aaa","aa","a","aaaa","aa","a","aaa","aa","a","aaaa","aa","a","aaa","aa","a"], 4), ['a', 'aa', 'aaa', 'aaaa'], 'Test 89');
test(topKFrequent(["cat","dog","cat","bird","dog","cat","dog","dog","dog","cat","cat","bird"], 3), ['cat', 'dog', 'bird'], 'Test 90');
test(topKFrequent(["sun","moon","star","sun","moon","star","sun","moon","star","moon","star","star","star"], 1), ['star'], 'Test 91');
test(topKFrequent(["red","blue","green","yellow","red","blue","green","yellow","red","blue","green","yellow","red","blue","green","yellow","red","blue","green","yellow","red","blue","green","yellow","red","blue","green","yellow","red","blue"], 2), ['blue', 'red'], 'Test 92');

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
