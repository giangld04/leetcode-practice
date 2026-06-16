// Test: 3295. Report Spam Message
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { reportSpam } = require("./solution");

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

console.log("\n3295. Report Spam Message\n");

test(reportSpam(["spam","egg","ham"], ["spam","bacon","egg"]), true, 'Test 1');
test(reportSpam(["spam","eggs","spam"], ["spam"]), true, 'Test 2');
test(reportSpam(["spam","spam","spam"], ["spam"]), true, 'Test 3');
test(reportSpam(["spam","egg","spam"], ["spam"]), true, 'Test 4');
test(reportSpam(["python","java","c++"], ["ruby","swift"]), false, 'Test 5');
test(reportSpam(["python","java","c++"], ["java","c#","ruby"]), false, 'Test 6');
test(reportSpam(["hello","programming","fun"], ["world","programming","leetcode"]), false, 'Test 7');
test(reportSpam(["a","b","c","d","e"], ["a","b"]), true, 'Test 8');
test(reportSpam(["apple","banana","cherry"], ["date","fig","grape"]), false, 'Test 9');
test(reportSpam(["code","is","fun"], ["code","cool"]), false, 'Test 10');
test(reportSpam(["apple","banana","cherry"], ["mango","pineapple"]), false, 'Test 11');
test(reportSpam(["coding","is","fun"], ["fun","coding","is","cool"]), true, 'Test 12');
test(reportSpam(["code","code","code"], ["code"]), true, 'Test 13');
test(reportSpam(["python","java","c++"], ["ruby","go","swift"]), false, 'Test 14');
test(reportSpam(["hello","world","leetcode"], ["world","hello"]), true, 'Test 15');
test(reportSpam(["python","java","c++"], ["ruby","go"]), false, 'Test 16');
test(reportSpam(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"]), true, 'Test 17');
test(reportSpam(["python","java","c++","python","java"], ["python","java","c#"]), true, 'Test 18');
test(reportSpam(["python","java","c++","java"], ["java","c#","swift"]), true, 'Test 19');
test(reportSpam(["one","two","three","four","five"], ["three","four","five","six"]), true, 'Test 20');
test(reportSpam(["python","java","c++","ruby","go","swift"], ["python","swift","java","c++","go","ruby"]), true, 'Test 21');
test(reportSpam(["same","same","same","different","same"], ["same","different"]), true, 'Test 22');
test(reportSpam(["coding","fun","coding","learning"], ["coding","fun","hello"]), true, 'Test 23');
test(reportSpam(["cat","dog","mouse","cat"], ["dog","cat","bird"]), true, 'Test 24');
test(reportSpam(["this","is","a","test","case"], ["test","case","example","input"]), true, 'Test 25');
test(reportSpam(["short","longer","words","in","the","message"], ["longer","words","phrase"]), true, 'Test 26');
test(reportSpam(["unique","words","only","here"], ["duplicate","words","overlap"]), false, 'Test 27');
test(reportSpam(["hello","world","hello","world"], ["hello","world","programming"]), true, 'Test 28');
test(reportSpam(["data","science","machine","learning"], ["data","science"]), true, 'Test 29');
test(reportSpam(["apple","banana","cherry","date","elderberry","fig","grape"], ["apple","banana","cherry","date","elderberry","fig","grape","honeydew"]), true, 'Test 30');
test(reportSpam(["a","b","c","d","e","f","g","h","i","j"], ["a","b","c","d","e","f","g","h","i","j"]), true, 'Test 31');
test(reportSpam(["test","test","test","test"], ["test","example","sample"]), true, 'Test 32');
test(reportSpam(["hello","hello","hello","hello"], ["world","hello","programming"]), true, 'Test 33');
test(reportSpam(["example","test","case","example","test"], ["example","test","case","input"]), true, 'Test 34');
test(reportSpam(["python","programming","code","python"], ["python","java","c++"]), true, 'Test 35');
test(reportSpam(["data","science","and","ai"], ["ai","machine","learning"]), false, 'Test 36');
test(reportSpam(["one","two","three","four","five"], ["one","two","three","four","five"]), true, 'Test 37');
test(reportSpam(["lets","go","for","a","walk","in","the","park"], ["walk","run","jog"]), false, 'Test 38');
test(reportSpam(["coding","python","java","coding"], ["java","coding","ruby"]), true, 'Test 39');
test(reportSpam(["quick","brown","fox","jumps","over","lazy","dog"], ["fox","dog","lazy"]), true, 'Test 40');
test(reportSpam(["hello","world","leetcode","world","hello"], ["world","hello"]), true, 'Test 41');
test(reportSpam(["test","test","test","test","test"], ["test","example","case"]), true, 'Test 42');
test(reportSpam(["python","java","python"], ["python","ruby"]), true, 'Test 43');
test(reportSpam(["one","two","three","four","five","six","seven","eight","nine","ten"], ["one","two","three","four","five"]), true, 'Test 44');
test(reportSpam(["happy","birthday","to","you"], ["birthday","to","you","happy"]), true, 'Test 45');
test(reportSpam(["one","two","three","four","five"], ["two","three","four","five"]), true, 'Test 46');
test(reportSpam(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), true, 'Test 47');
test(reportSpam(["spam","egg","ham","spam","egg","ham","spam"], ["spam","egg","ham"]), true, 'Test 48');
test(reportSpam(["hello","world","this","is","a","test"], ["test","sample","example"]), false, 'Test 49');
test(reportSpam(["python","java","c++","java"], ["java","swift"]), true, 'Test 50');
test(reportSpam(["spam","spam","eggs"], ["spam","bacon","eggs"]), true, 'Test 51');
test(reportSpam(["secure","your","data","with","encryption"], ["data","with","secure"]), true, 'Test 52');
test(reportSpam(["spam","eggs","ham","spam"], ["spam","bacon"]), true, 'Test 53');
test(reportSpam(["alice","bob","charlie","david","eve"], ["bob","charlie","frank"]), true, 'Test 54');
test(reportSpam(["unique","words","here","no","matches"], ["match","found","here"]), false, 'Test 55');
test(reportSpam(["python","java","c++","python"], ["ruby","go","c++","python"]), true, 'Test 56');
test(reportSpam(["algorithm","data","structure","algorithm"], ["data","algorithm","structure","code"]), true, 'Test 57');
test(reportSpam(["one","two","three","four","five","six"], ["one","two","three","four","five"]), true, 'Test 58');
test(reportSpam(["repeat","repeat","repeat","repeat"], ["repeat","duplicate"]), true, 'Test 59');
test(reportSpam(["programming","is","fun","and","challenging"], ["boring","difficult"]), false, 'Test 60');
test(reportSpam(["spam","is","bad","spam"], ["spam","junk","garbage"]), true, 'Test 61');
test(reportSpam(["python","java","python","java"], ["c","c++","java","python"]), true, 'Test 62');
test(reportSpam(["apple","banana","cherry","apple","banana"], ["banana","cherry","apple"]), true, 'Test 63');
test(reportSpam(["hello","world","leetcode"], ["leetcode","world","hello","code"]), true, 'Test 64');
test(reportSpam(["algorithm","data","structure","algorithm","data"], ["algorithm","graph","tree","data"]), true, 'Test 65');
test(reportSpam(["apple","banana","apple","cherry"], ["banana","cherry","apple"]), true, 'Test 66');
test(reportSpam(["first","second","third","fourth","fifth"], ["third","fourth","fifth","sixth"]), true, 'Test 67');
test(reportSpam(["spam","eggs","spam","ham"], ["spam","bacon","eggs"]), true, 'Test 68');
test(reportSpam(["python","java","python","c++","java"], ["java","python","c#"]), true, 'Test 69');
test(reportSpam(["cat","dog","bird","fish"], ["dog","fish","cat","bird"]), true, 'Test 70');
test(reportSpam(["repeat","repeat","repeat","repeat"], ["repeat","again","once"]), true, 'Test 71');
test(reportSpam(["cat","dog","bird","cat","dog"], ["cat","dog","fish"]), true, 'Test 72');
test(reportSpam(["repeat","repeat","repeat","unique"], ["repeat","distinct","clone"]), true, 'Test 73');
test(reportSpam(["data","science","machine","learning"], ["deep","learning","data"]), true, 'Test 74');
test(reportSpam(["lets","play","some","games"], ["play","games","watch"]), true, 'Test 75');
test(reportSpam(["one","two","three","four","five","six","seven","eight","nine","ten"], ["three","six","nine"]), true, 'Test 76');
test(reportSpam(["hello","world","leetcode","programming"], ["world","programming","leetcode"]), true, 'Test 77');
test(reportSpam(["spam","spam","spam","spam"], ["ham","spam","eggs"]), true, 'Test 78');
test(reportSpam(["hello","world"], ["hello","world","hello","world"]), true, 'Test 79');
test(reportSpam(["one","two","three","four","five","six"], ["one","three","five","seven","nine"]), true, 'Test 80');
test(reportSpam(["hello","world","hello","world","hello"], ["hello","world","test"]), true, 'Test 81');
test(reportSpam(["spam","is","bad","for","health"], ["spam","junk","rubbish"]), false, 'Test 82');
test(reportSpam(["a","b","c","d","e","f","g","h","i","j"], ["a","b","c"]), true, 'Test 83');
test(reportSpam(["test","test","test","test"], ["test","example","case"]), true, 'Test 84');
test(reportSpam(["hello","world","hello","world"], ["hello","world","goodbye"]), true, 'Test 85');
test(reportSpam(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["a","b","c","d","e"]), true, 'Test 86');
test(reportSpam(["coding","is","awesome"], ["coding","programming","hacking"]), false, 'Test 87');
test(reportSpam(["longwordexample","anotherlongword","shortword","averylongwordindeed"], ["longwordexample","averylongwordindeed"]), true, 'Test 88');
test(reportSpam(["one","two","three","four","five"], ["four","six","seven"]), false, 'Test 89');
test(reportSpam(["red","blue","green","yellow"], ["blue","green","purple"]), true, 'Test 90');
test(reportSpam(["unique","words","only"], ["different","words","unique"]), true, 'Test 91');
test(reportSpam(["hello","world","this","is","a","test"], ["hello","test","example"]), true, 'Test 92');
test(reportSpam(["unique","words","only","here"], ["not","here","any"]), false, 'Test 93');
test(reportSpam(["python","java","c++","python"], ["python","java","c#"]), true, 'Test 94');
test(reportSpam(["hello","world","hello","world"], ["world","hello","code"]), true, 'Test 95');
test(reportSpam(["repeat","repeat","repeat","repeat","repeat"], ["repeat","different","words"]), true, 'Test 96');
test(reportSpam(["banana","apple","cherry","mango","pineapple","kiwi"], ["banana","apple","cherry","mango","pineapple"]), true, 'Test 97');
test(reportSpam(["abcdef","ghijkl","mnopqr","stuvwx","yz"], ["mnopqr","stuvwx","yz","abcdef"]), true, 'Test 98');
test(reportSpam(["optimize","code","efficiency","optimize"], ["optimize","performance","speed"]), true, 'Test 99');
test(reportSpam(["unique","words","only","here"], ["not","here","found","words","unique"]), true, 'Test 100');
test(reportSpam(["python","java","c++","java","python"], ["java","python","swift"]), true, 'Test 101');
test(reportSpam(["hello","world","leetcode","hello"], ["world","hello"]), true, 'Test 102');
test(reportSpam(["hello","world","hello","world"], ["hello","world"]), true, 'Test 103');
test(reportSpam(["algorithm","data","structure","code"], ["code","data","algorithm","structure"]), true, 'Test 104');
test(reportSpam(["find","me","if","you","can"], ["me","can","find","you","if"]), true, 'Test 105');
test(reportSpam(["fast","and","furious"], ["slow","steady","fast"]), false, 'Test 106');
test(reportSpam(["spam","ham","eggs","spam","eggs","spam"], ["spam","eggs","bacon"]), true, 'Test 107');
test(reportSpam(["quick","brown","fox","jumps","over","lazy","dog"], ["quick","lazy","cat","dog"]), true, 'Test 108');

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
