// Test: 472. Concatenated Words
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { findAllConcatenatedWordsInADict } = require("./solution");

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

console.log("\n472. Concatenated Words\n");

test(findAllConcatenatedWordsInADict(["hello","world","helloworld","worldhello"]), ['helloworld', 'worldhello'], 'Test 1');
test(findAllConcatenatedWordsInADict(["apple","banana","appbanana","banapple","app","ban"]), ['banapple', 'appbanana'], 'Test 2');
test(findAllConcatenatedWordsInADict(["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), ['aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'], 'Test 3');
test(findAllConcatenatedWordsInADict(["cat","dog","catdog"]), ['catdog'], 'Test 4');
test(findAllConcatenatedWordsInADict(["a","aa","aaa","aaaa","aaaaa"]), ['aa', 'aaa', 'aaaa', 'aaaaa'], 'Test 5');
test(findAllConcatenatedWordsInADict(["fish","dog","cat","dogfishcat"]), ['dogfishcat'], 'Test 6');
test(findAllConcatenatedWordsInADict(["a","aa","aaa","aaaa"]), ['aa', 'aaa', 'aaaa'], 'Test 7');
test(findAllConcatenatedWordsInADict(["word","world","wordworld","worldword","wordworldword"]), ['wordworld', 'worldword', 'wordworldword'], 'Test 8');
test(findAllConcatenatedWordsInADict(["apple","banana","applepie","apples","pineapple","pine","pie"]), ['applepie', 'pineapple'], 'Test 9');
test(findAllConcatenatedWordsInADict(["ab","abc","abcd","abcde","abcdef"]), [], 'Test 10');
test(findAllConcatenatedWordsInADict(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]), ['dogcatsdog', 'catsdogcats', 'ratcatdogcat'], 'Test 11');
test(findAllConcatenatedWordsInADict(["hello","world","helloworld"]), ['helloworld'], 'Test 12');
test(findAllConcatenatedWordsInADict(["apple","banana","appbanana","banapple"]), [], 'Test 13');
test(findAllConcatenatedWordsInADict(["apple","banana","applebanana","bananasplit","applesplit","splitbananaapple"]), ['applebanana'], 'Test 14');
test(findAllConcatenatedWordsInADict(["a","b","ab","abc","bc","abcd"]), ['ab', 'abc'], 'Test 15');
test(findAllConcatenatedWordsInADict(["one","two","three","onetwo","twotwo","twoone","onetwothree","threetwoone","onetwoonetwo","twoonetwoone","onethree","threeone","onethreeone","threeoneone","threeonetwo","twothreeone","onetwothreeone","onetwoonetwothree"]), ['onetwo', 'twotwo', 'twoone', 'onethree', 'threeone', 'onetwothree', 'threetwoone', 'onethreeone', 'threeoneone', 'threeonetwo', 'twothreeone', 'onetwoonetwo', 'twoonetwoone', 'onetwothreeone', 'onetwoonetwothree'], 'Test 16');
test(findAllConcatenatedWordsInADict(["car","race","racecar","carrace","racecarrace","racecarcar"]), ['racecar', 'carrace', 'racecarcar', 'racecarrace'], 'Test 17');
test(findAllConcatenatedWordsInADict(["apple","banana","applebanana","bananaapple","grape","pineapple","pineappleapple","applegrapebanana"]), ['applebanana', 'bananaapple', 'pineappleapple', 'applegrapebanana'], 'Test 18');
test(findAllConcatenatedWordsInADict(["red","blue","green","redblue","bluegreen","greenred","redgreengreen","blueredblueblue","greenredblue"]), ['redblue', 'greenred', 'bluegreen', 'greenredblue', 'redgreengreen', 'blueredblueblue'], 'Test 19');
test(findAllConcatenatedWordsInADict(["base","ball","baseball","ballbase","baseballbase","basebaseball","baseballball","baseballbaseball"]), ['baseball', 'ballbase', 'baseballbase', 'basebaseball', 'baseballball', 'baseballbaseball'], 'Test 20');
test(findAllConcatenatedWordsInADict(["sun","moon","sunny","moonlight","sunmoon","moonsun","sunnyday","moonlightnight","sunmoonlight"]), ['sunmoon', 'moonsun', 'sunmoonlight'], 'Test 21');
test(findAllConcatenatedWordsInADict(["one","two","three","onetwo","twotwo","threeone","onetwothree","twothreeone","threeonetwo","onetwothreeone"]), ['onetwo', 'twotwo', 'threeone', 'onetwothree', 'twothreeone', 'threeonetwo', 'onetwothreeone'], 'Test 22');
test(findAllConcatenatedWordsInADict(["hello","world","helloworld","worldhello","hellohello","worldworld","hellohellohello","worldworldworld"]), ['helloworld', 'worldhello', 'hellohello', 'worldworld', 'hellohellohello', 'worldworldworld'], 'Test 23');
test(findAllConcatenatedWordsInADict(["hello","world","helloworld","worldhello","hellohello","worldworld","helloworldhello","worldhelloworld"]), ['helloworld', 'worldhello', 'hellohello', 'worldworld', 'helloworldhello', 'worldhelloworld'], 'Test 24');
test(findAllConcatenatedWordsInADict(["ab","abc","ababc","abcabc","aabbcc","aabbaabb"]), ['ababc', 'abcabc'], 'Test 25');
test(findAllConcatenatedWordsInADict(["short","long","shortlong","longshort","shortshortlong","longlongshort","shortlongshort","longshortlong"]), ['shortlong', 'longshort', 'longlongshort', 'longshortlong', 'shortshortlong', 'shortlongshort'], 'Test 26');
test(findAllConcatenatedWordsInADict(["prefix","suffix","prefixsuffix","suffixprefix","prefixprefix","suffixsuffix","prefixprefixsuffix","suffixprefixprefix"]), ['prefixsuffix', 'suffixprefix', 'prefixprefix', 'suffixsuffix', 'prefixprefixsuffix', 'suffixprefixprefix'], 'Test 27');
test(findAllConcatenatedWordsInADict(["prefix","suffix","prefixsuffix","suffixprefix","prefixsuffixprefix","suffixprefixsuffix","prefixsuffixsuffixprefix","suffixprefixprefixsuffix"]), ['prefixsuffix', 'suffixprefix', 'prefixsuffixprefix', 'suffixprefixsuffix', 'prefixsuffixsuffixprefix', 'suffixprefixprefixsuffix'], 'Test 28');
test(findAllConcatenatedWordsInADict(["cat","dog","catdog","dogcat","bird","catdogbird","dogcatbird","catbird","birdcat","dogdogcat","catcatdog","dogcatdog","catdogcat","birdbird","catbirdcat","dogcatdogcat","birdcatdogbird"]), ['catdog', 'dogcat', 'catbird', 'birdcat', 'birdbird', 'dogdogcat', 'catcatdog', 'dogcatdog', 'catdogcat', 'catdogbird', 'dogcatbird', 'catbirdcat', 'dogcatdogcat', 'birdcatdogbird'], 'Test 29');
test(findAllConcatenatedWordsInADict(["short","longer","longerword","wordlonger","shortword","wordshort","shortshortshort","longerlongerlonger"]), ['shortshortshort', 'longerlongerlonger'], 'Test 30');
test(findAllConcatenatedWordsInADict(["repetition","reprepetition","prepetition","rep","pre","replication","prepresentation","replicationrepetition","repetitionreplicationrepetition"]), ['reprepetition', 'replicationrepetition', 'repetitionreplicationrepetition'], 'Test 31');
test(findAllConcatenatedWordsInADict(["prefix","suffix","prefixsuffix","suffixprefix","prefixsuffixprefix","suffixprefixsuffix","prefixsuffixsuffixprefix","prefixprefixsuffix","suffixsuffixprefix"]), ['prefixsuffix', 'suffixprefix', 'prefixsuffixprefix', 'suffixprefixsuffix', 'prefixprefixsuffix', 'suffixsuffixprefix', 'prefixsuffixsuffixprefix'], 'Test 32');
test(findAllConcatenatedWordsInADict(["aaaa","aaaab","aaaaba","aaaabaaa","aaaabaaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), ['aaaaaaaa', 'aaaabaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'], 'Test 33');
test(findAllConcatenatedWordsInADict(["red","blue","redblue","bluered","redbluered","blueredblue","redredblue","blueredred"]), ['redblue', 'bluered', 'redbluered', 'redredblue', 'blueredred', 'blueredblue'], 'Test 34');
test(findAllConcatenatedWordsInADict(["sun","moon","star","sunnymoon","moonstar","star","sunmoonstar","moonmoonsun"]), ['star', 'moonstar', 'sunmoonstar', 'moonmoonsun'], 'Test 35');
test(findAllConcatenatedWordsInADict(["ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm"]), [], 'Test 36');
test(findAllConcatenatedWordsInADict(["a","b","ab","ba","aba","baba","abab","bababa","abababa","babababa"]), ['ab', 'ba', 'aba', 'baba', 'abab', 'bababa', 'abababa', 'babababa'], 'Test 37');
test(findAllConcatenatedWordsInADict(["abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno","mnop","nopq","opqr","pqrs","qrst","rstu","stuv","tuvw","uvwx","vwxy","wxyz","xyz","mnopqr","qrstuv","vwxyz","mnopqrstuv","mnopqrstuvwxy","nopqrstuvwxyz"]), ['mnopqrstuv', 'nopqrstuvwxyz'], 'Test 38');
test(findAllConcatenatedWordsInADict(["tiny","medium","mediumtiny","tinytiny","tinymedium","mediummedium","mediumtinytiny","tinytinytiny","tinytinytinytiny","tinytinytinytinytiny"]), ['tinytiny', 'mediumtiny', 'tinymedium', 'mediummedium', 'tinytinytiny', 'mediumtinytiny', 'tinytinytinytiny', 'tinytinytinytinytiny'], 'Test 39');
test(findAllConcatenatedWordsInADict(["word","concatenate","wordconcatenate","concatenateword","wordconcatenateword","wordwordconcatenate","concatenatethree","concatenateconcatenate","wordconcatenateconcatenate"]), ['wordconcatenate', 'concatenateword', 'wordconcatenateword', 'wordwordconcatenate', 'concatenateconcatenate', 'wordconcatenateconcatenate'], 'Test 40');
test(findAllConcatenatedWordsInADict(["alpha","beta","alphabeta","betabeta","betaalpha","alphabetabet","alphaalphabeta","betaalphabeta"]), ['betabeta', 'alphabeta', 'betaalpha', 'betaalphabeta', 'alphaalphabeta'], 'Test 41');
test(findAllConcatenatedWordsInADict(["apple","banana","applebanana","bananaapple","appleapplebanana","bananabananaapple"]), ['applebanana', 'bananaapple', 'appleapplebanana', 'bananabananaapple'], 'Test 42');
test(findAllConcatenatedWordsInADict(["aabb","bbaa","aabbcc","ccaabb","aabbaa","aabbccaabb","aabbaabbcc","ccccaabbaabb","bbccccaabbaabb","aabbcccaabbcccaabb"]), ['aabbccaabb', 'aabbaabbcc'], 'Test 43');
test(findAllConcatenatedWordsInADict(["one","two","three","onetwo","twotwo","threetwo","onethree","twothree","threethree","onetwothree","twothreeone","threetwoone","onetwoonetwo","twotwoonetwo","threethreethree","onetwothreeonetwo","twothreeonethree","threetwooneonetwo","onetwoonetwoonetwo"]), ['onetwo', 'twotwo', 'threetwo', 'onethree', 'twothree', 'threethree', 'onetwothree', 'twothreeone', 'threetwoone', 'onetwoonetwo', 'twotwoonetwo', 'threethreethree', 'twothreeonethree', 'onetwothreeonetwo', 'threetwooneonetwo', 'onetwoonetwoonetwo'], 'Test 44');
test(findAllConcatenatedWordsInADict(["tiny","small","tinysmall","smallsmall","tinytiny","tinysmalltiny"]), ['tinytiny', 'tinysmall', 'smallsmall', 'tinysmalltiny'], 'Test 45');
test(findAllConcatenatedWordsInADict(["abc","def","abcdef","defabc","abcdefg","abcdefabc","abcabcabc"]), ['abcdef', 'defabc', 'abcdefabc', 'abcabcabc'], 'Test 46');
test(findAllConcatenatedWordsInADict(["prefix","suffix","prefixsuffix","suffixprefix","prefixsuffixprefix","suffixprefixsuffix","prefixsuffixprefixsuffix"]), ['prefixsuffix', 'suffixprefix', 'prefixsuffixprefix', 'suffixprefixsuffix', 'prefixsuffixprefixsuffix'], 'Test 47');
test(findAllConcatenatedWordsInADict(["aabb","bbaa","ab","ba","aabbab","baabaa","bbaabb","aabbaa","ababab","babaab","abbaba","bababb","aabbaabb","bbaabaab"]), ['aabbab', 'ababab', 'babaab', 'abbaba', 'aabbaabb', 'bbaabaab'], 'Test 48');
test(findAllConcatenatedWordsInADict(["one","two","three","onetwo","twotwo","onetwothree","threethreeone","onetwothreeone"]), ['onetwo', 'twotwo', 'onetwothree', 'threethreeone', 'onetwothreeone'], 'Test 49');
test(findAllConcatenatedWordsInADict(["aabb","abab","bbaa","aabbaa","ababaa","baaabb","aabbab","bbaaab","aabbba","abababab","baabbaab","aabbaaba"]), ['abababab'], 'Test 50');
test(findAllConcatenatedWordsInADict(["abc","def","gh","abcdefgh","defgh","abcdefg","abcdefghi","abcdefghij","abcdefghijk"]), ['defgh', 'abcdefgh'], 'Test 51');
test(findAllConcatenatedWordsInADict(["abc","def","abcdef","defabc","abcabcabc","defdefdef","abcdefabcdef"]), ['abcdef', 'defabc', 'abcabcabc', 'defdefdef', 'abcdefabcdef'], 'Test 52');
test(findAllConcatenatedWordsInADict(["hello","world","helloworld","worldhello","hellotest","testhello","hellotesthello"]), ['helloworld', 'worldhello', 'hellotesthello'], 'Test 53');
test(findAllConcatenatedWordsInADict(["apple","apples","banana","bananas","applesandbananas","bananaapple"]), ['bananaapple'], 'Test 54');
test(findAllConcatenatedWordsInADict(["hello","world","helloworld","hellohello","worldworldhello"]), ['helloworld', 'hellohello', 'worldworldhello'], 'Test 55');
test(findAllConcatenatedWordsInADict(["one","onel","oneone","two","twotwo","onetwo","twotwoone","onetwoone","twoonetwo","onetwotwo","twoonetwotwo","onetwoonetwoone"]), ['oneone', 'twotwo', 'onetwo', 'twotwoone', 'onetwoone', 'twoonetwo', 'onetwotwo', 'twoonetwotwo', 'onetwoonetwoone'], 'Test 56');
test(findAllConcatenatedWordsInADict(["one","two","onetwo","twotwo","twoone","onetwoone","twoonetwo","onetwoonetwo"]), ['onetwo', 'twotwo', 'twoone', 'onetwoone', 'twoonetwo', 'onetwoonetwo'], 'Test 57');
test(findAllConcatenatedWordsInADict(["apple","banana","applebanana","bananaapple","grape","grapeapple","pineapple"]), ['grapeapple', 'applebanana', 'bananaapple'], 'Test 58');
test(findAllConcatenatedWordsInADict(["happy","sad","happysad","sadhappy","happyhappy","sadsad","happyhappysad","sadhappyhappy","happysadsad"]), ['sadsad', 'happysad', 'sadhappy', 'happyhappy', 'happysadsad', 'happyhappysad', 'sadhappyhappy'], 'Test 59');
test(findAllConcatenatedWordsInADict(["apple","banana","peach","applepie","bananapeach","peachapple"]), ['peachapple', 'bananapeach'], 'Test 60');
test(findAllConcatenatedWordsInADict(["prefix","suffix","prefixsuffix","suffixprefix","prefixprefix","suffixsuffix","prefixsuffixprefix","suffixprefixsuffix"]), ['prefixsuffix', 'suffixprefix', 'prefixprefix', 'suffixsuffix', 'prefixsuffixprefix', 'suffixprefixsuffix'], 'Test 61');
test(findAllConcatenatedWordsInADict(["apple","banana","applebanana","bananasplit","split","applebananasplit"]), ['applebanana', 'bananasplit', 'applebananasplit'], 'Test 62');
test(findAllConcatenatedWordsInADict(["abc","ab","bc","abcabc","abcab","ababc","aabbc","abcababc"]), ['abcab', 'ababc', 'abcabc', 'abcababc'], 'Test 63');
test(findAllConcatenatedWordsInADict(["abc","def","abcdef","defabc","abcdefdef","abcabcabc"]), ['abcdef', 'defabc', 'abcdefdef', 'abcabcabc'], 'Test 64');
test(findAllConcatenatedWordsInADict(["quick","brown","fox","quickbrown","brownfox","foxquick","quickbrownfox","brownfoxquick"]), ['brownfox', 'foxquick', 'quickbrown', 'quickbrownfox', 'brownfoxquick'], 'Test 65');
test(findAllConcatenatedWordsInADict(["tiny","small","tinytiny","tinysmall","smalltiny","smallsmall","tinytinysmall","tinytinysmalltiny","smallsml","tinysmalltinytiny","smalltinytiny","tinytinytiny","tinysmallsmallsml"]), ['tinytiny', 'tinysmall', 'smalltiny', 'smallsmall', 'tinytinytiny', 'tinytinysmall', 'smalltinytiny', 'tinytinysmalltiny', 'tinysmalltinytiny', 'tinysmallsmallsml'], 'Test 66');
test(findAllConcatenatedWordsInADict(["apple","banana","applebanana","bananaapple","appleapplebanana"]), ['applebanana', 'bananaapple', 'appleapplebanana'], 'Test 67');
test(findAllConcatenatedWordsInADict(["hello","world","helloworld","worldhello","hellohello","worldworld"]), ['helloworld', 'worldhello', 'hellohello', 'worldworld'], 'Test 68');
test(findAllConcatenatedWordsInADict(["repeat","repeated","repeatrepeat","repeatedrepeat","repeatrepeatedrepeat","repeatedrepeatrepeatedrepeat","repeatedrepeated","repeatrepeatrepeat"]), ['repeatrepeat', 'repeatedrepeat', 'repeatedrepeated', 'repeatrepeatrepeat', 'repeatrepeatedrepeat', 'repeatedrepeatrepeatedrepeat'], 'Test 69');
test(findAllConcatenatedWordsInADict(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat","hippo","popo","hippopop"]), ['dogcatsdog', 'catsdogcats', 'ratcatdogcat'], 'Test 70');
test(findAllConcatenatedWordsInADict(["hello","world","helloworld","hellohello","worldworld","hellohelloworld"]), ['helloworld', 'hellohello', 'worldworld', 'hellohelloworld'], 'Test 71');
test(findAllConcatenatedWordsInADict(["sun","moon","sunmoon","moonsun","sunsunmoon","moonmoonsun","sunmoonsunsun"]), ['sunmoon', 'moonsun', 'sunsunmoon', 'moonmoonsun', 'sunmoonsunsun'], 'Test 72');
test(findAllConcatenatedWordsInADict(["one","two","three","onetwo","twotwo","onethree","threeone","onetwothree","twothreeone"]), ['onetwo', 'twotwo', 'onethree', 'threeone', 'onetwothree', 'twothreeone'], 'Test 73');
test(findAllConcatenatedWordsInADict(["abc","def","abcdef","defabc","ghijkl","mnop","mnopqrst","qrst","mnopqrstmnopqrst","nopqrst","nopqr","mnopq"]), ['abcdef', 'defabc', 'mnopqrst', 'mnopqrstmnopqrst'], 'Test 74');
test(findAllConcatenatedWordsInADict(["red","blue","green","redblue","bluegreen","greenred","redbluegreen","bluegreenred","greenredblue","redgreenred","bluegreenblue","greenredgreen","redgreenbluegreen","bluegreenredblue","greenredbluegreenred"]), ['redblue', 'greenred', 'bluegreen', 'redgreenred', 'redbluegreen', 'bluegreenred', 'greenredblue', 'bluegreenblue', 'greenredgreen', 'bluegreenredblue', 'redgreenbluegreen', 'greenredbluegreenred'], 'Test 75');
test(findAllConcatenatedWordsInADict(["base","ball","baseball","ballbase","baseballbase","ballbaseball","baseballball","baseballbaseball"]), ['baseball', 'ballbase', 'baseballbase', 'ballbaseball', 'baseballball', 'baseballbaseball'], 'Test 76');
test(findAllConcatenatedWordsInADict(["one","two","three","onetwo","twothree","threeone","onetwothree","twothreeone","threeonetwo"]), ['onetwo', 'twothree', 'threeone', 'onetwothree', 'twothreeone', 'threeonetwo'], 'Test 77');
test(findAllConcatenatedWordsInADict(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","abcdefghijklmnopqrstuvwxyz"]), ['abcdefghijklmnopqrstuvwxyz'], 'Test 78');
test(findAllConcatenatedWordsInADict(["apple","banana","applebanana","bananapple","bananaapplebanana"]), ['applebanana', 'bananaapplebanana'], 'Test 79');
test(findAllConcatenatedWordsInADict(["small","medium","large","smallmedium","mediumlarge","largesmall","smallmediumlarge","mediumlargesmall","largesmallmedium","smallmediumlargesmall"]), ['largesmall', 'smallmedium', 'mediumlarge', 'smallmediumlarge', 'mediumlargesmall', 'largesmallmedium', 'smallmediumlargesmall'], 'Test 80');
test(findAllConcatenatedWordsInADict(["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn","abcdefghijklmno","abcdefghijklmnop","abcdefghijklmnopq","abcdefghijklmnopqr","abcdefghijklmnopqrs","abcdefghijklmnopqrst","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwxyz"]), [], 'Test 81');
test(findAllConcatenatedWordsInADict(["bat","ball","batball","ballbat","batbatbat","ballballball","batballbat"]), ['batball', 'ballbat', 'batbatbat', 'batballbat', 'ballballball'], 'Test 82');
test(findAllConcatenatedWordsInADict(["partone","parttwo","partthree","onetwo","twothree","onetwothree","threeonetwo","twopartone","threeparttwo","onetwothreeonetwo"]), ['onetwothreeonetwo'], 'Test 83');
test(findAllConcatenatedWordsInADict(["x","xx","xxx","xxxx","xxxxx","xxxxxx","xxxxxxx","xxxxxxxx","xxxxxxxxx","xxxxxxxxxx"]), ['xx', 'xxx', 'xxxx', 'xxxxx', 'xxxxxx', 'xxxxxxx', 'xxxxxxxx', 'xxxxxxxxx', 'xxxxxxxxxx'], 'Test 84');
test(findAllConcatenatedWordsInADict(["alpha","beta","gamma","alphabeta","betagamma","alphagamma","betaalpha","gammaalpha","betagammabetagamma","gammabetagammaalpha"]), ['alphabeta', 'betagamma', 'betaalpha', 'alphagamma', 'gammaalpha', 'betagammabetagamma', 'gammabetagammaalpha'], 'Test 85');
test(findAllConcatenatedWordsInADict(["abc","def","abcdef","defabc","abcdefabc","abcabcabc","defdefdef","abcdefdef","defabcdef"]), ['abcdef', 'defabc', 'abcdefabc', 'abcabcabc', 'defdefdef', 'abcdefdef', 'defabcdef'], 'Test 86');
test(findAllConcatenatedWordsInADict(["apple","banana","appbanana","bananapple","applebananaapple"]), ['applebananaapple'], 'Test 87');
test(findAllConcatenatedWordsInADict(["sun","moon","star","sunset","moonlight","starlight","sunmoon","moonstar","sunmoonstar","moonstarsun"]), ['sunmoon', 'moonstar', 'sunmoonstar', 'moonstarsun'], 'Test 88');
test(findAllConcatenatedWordsInADict(["panda","bear","pandabear","bearpanda","pandapandabear","bearpandapanda","pandabearbear","bearbearpanda","pandapandapandabear","bearpandapandapanda"]), ['pandabear', 'bearpanda', 'pandabearbear', 'bearbearpanda', 'pandapandabear', 'bearpandapanda', 'pandapandapandabear', 'bearpandapandapanda'], 'Test 89');
test(findAllConcatenatedWordsInADict(["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn","abcdefghijklmno","abcdefghijklmnop","abcdefghijklmnopq","abcdefghijklmnopqr","abcdefghijklmnopqrs","abcdefghijklmnopqrst"]), [], 'Test 90');
test(findAllConcatenatedWordsInADict(["abc","def","ghi","abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno","mnop","nopq","opqr","pqrs","qrst","rstu","stuv","tuvw","uvwxy","vwxyz","wxyzabc","xyzabcd","zabcde"]), [], 'Test 91');
test(findAllConcatenatedWordsInADict(["foo","bar","foobar","barfoo","foofoobar","barfoobaz","baz","foobazbar"]), ['foobar', 'barfoo', 'foofoobar', 'barfoobaz', 'foobazbar'], 'Test 92');
test(findAllConcatenatedWordsInADict(["abc","def","abcdef","defabc","ab","bc","de","f","abcd","cdef"]), ['def', 'abcdef', 'defabc'], 'Test 93');
test(findAllConcatenatedWordsInADict(["hello","world","helloworld","worldhello","hellohellohello","helloworldworld"]), ['helloworld', 'worldhello', 'hellohellohello', 'helloworldworld'], 'Test 94');
test(findAllConcatenatedWordsInADict(["apple","banana","cherry","applebanana","bananaapple","cherryapple","applecherry","bananaapplebanana"]), ['applebanana', 'bananaapple', 'cherryapple', 'applecherry', 'bananaapplebanana'], 'Test 95');
test(findAllConcatenatedWordsInADict(["abc","def","abcdef","defabc","fedcba","cab","bac","abcabc","defdef","ababab","defdefdef","abcdefgh","ghijklmn","opqrstuv","wxyz","abcdefghijk","lmnopqrstuv","wxyzabcd","efghijklmnopqr","stuvwxyzabcd"]), ['abcdef', 'defabc', 'abcabc', 'defdef', 'defdefdef'], 'Test 96');

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
