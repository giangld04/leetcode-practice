// Test: 691. Stickers To Spell Word
// 153 test cases from LeetCodeDataset
// Run: node test.js

const { minStickers } = require("./solution");

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

console.log("\n691. Stickers To Spell Word\n");

test(minStickers(["aaa","bbb"], "aabbbccc"), -1, 'Test 1');
test(minStickers(["a","b","c"], "abc"), 3, 'Test 2');
test(minStickers(["abc","abc"], "abcabc"), 2, 'Test 3');
test(minStickers(["abcd"], "abcdabcd"), 2, 'Test 4');
test(minStickers(["abc"], "d"), -1, 'Test 5');
test(minStickers(["notice","possible"], "basicbasic"), -1, 'Test 6');
test(minStickers(["abc"], "abcd"), -1, 'Test 7');
test(minStickers(["abc","ab","bc"], "abc"), 1, 'Test 8');
test(minStickers(["abc","def"], "abcdef"), 2, 'Test 9');
test(minStickers(["a"], "a"), 1, 'Test 10');
test(minStickers(["aabbcc","abc"], "aabbbccc"), 2, 'Test 11');
test(minStickers(["hello","world"], "hold"), 2, 'Test 12');
test(minStickers(["abc","def","ghi"], "adgbehcfi"), 3, 'Test 13');
test(minStickers(["aabb","ccdd"], "abcd"), 2, 'Test 14');
test(minStickers(["with","example","science"], "thehat"), 3, 'Test 15');
test(minStickers(["hello","world"], "helloworld"), 2, 'Test 16');
test(minStickers(["aaa","aa","a"], "aaaaaaaaa"), 3, 'Test 17');
test(minStickers(["hello","world","abc","def","ghi"], "helloworldabcdefghidefghidefghidefghidefghidefghidefghidefghi"), null, 'Test 18');
test(minStickers(["xyz","zyx","yxz"], "zyxyzyxyzyx"), 5, 'Test 19');
test(minStickers(["hello","world","again"], "aginwodlloleh"), 3, 'Test 20');
test(minStickers(["abcdef","ghijkl","mnopqr"], "abcdefghijklmnopqr"), 3, 'Test 21');
test(minStickers(["mississippi","helloworld"], "mississippiworldhello"), 2, 'Test 22');
test(minStickers(["aabb","bbcc","cdda"], "aabbccddaabb"), 4, 'Test 23');
test(minStickers(["sun","moon","star"], "starstarsun"), 3, 'Test 24');
test(minStickers(["one","two","three","four","five"], "onetwothreefourfive"), 5, 'Test 25');
test(minStickers(["mississippi","pennsylvania"], "mississippipennsylvania"), 2, 'Test 26');
test(minStickers(["aaaaa","bbbbb","ccccc","ddddd","eeeee"], "abcdeabcde"), 5, 'Test 27');
test(minStickers(["flower","garden","sun","moon","star"], "flowergardenstar"), 3, 'Test 28');
test(minStickers(["aabbcc","abcabc","aabbc"], "abcabcabc"), 2, 'Test 29');
test(minStickers(["alphabet","soup","letters","words","sticker","pack"], "alphabetwordsoupstickersoup"), 5, 'Test 30');
test(minStickers(["ab","bc","cd"], "abcdabcd"), 4, 'Test 31');
test(minStickers(["quick","brown","fox"], "quickbrownfox"), 3, 'Test 32');
test(minStickers(["abcd","efgh","ijkl"], "dgheijlkfabci"), 4, 'Test 33');
test(minStickers(["apple","banana","cherry"], "bananaapple"), 2, 'Test 34');
test(minStickers(["red","blue","green"], "bluegreenred"), 3, 'Test 35');
test(minStickers(["abcd","dcba","abdc","bacd"], "abcdabcd"), 2, 'Test 36');
test(minStickers(["zzz","zzzz","zzzzz"], "zzzzzzzzzzzzzzz"), 3, 'Test 37');
test(minStickers(["programming","is","fun"], "funisprogramming"), 3, 'Test 38');
test(minStickers(["leetcode","love","coding"], "lovecodingleetcode"), 3, 'Test 39');
test(minStickers(["hello","world","python"], "pythonhello"), 2, 'Test 40');
test(minStickers(["aabbcc","abc","abac"], "aabbccabc"), 2, 'Test 41');
test(minStickers(["abacd","bdfgh","cdhij","efgik","ghklm"], "abcdefghijklim"), 4, 'Test 42');
test(minStickers(["hello","world","again"], "againhelloagainworld"), 4, 'Test 43');
test(minStickers(["puzzle","piece","fit"], "fittingpuzzle"), -1, 'Test 44');
test(minStickers(["happy","birthday","friend"], "happybirthdayfriend"), 3, 'Test 45');
test(minStickers(["aaa","bbb","ccc"], "aabbbccc"), 3, 'Test 46');
test(minStickers(["hello","world","abc","def","ghi","jkl"], "helloworldabcdefghijk"), 6, 'Test 47');
test(minStickers(["sunshine","rainbow","cloud"], "sunshinecloud"), 2, 'Test 48');
test(minStickers(["xyz","abc","def","ghi"], "zyxwvutsrqponmlkjihgfedcba"), -1, 'Test 49');
test(minStickers(["zoo","book","look"], "bookzoolook"), 3, 'Test 50');
test(minStickers(["magic","wand","spell"], "spellmagic"), 2, 'Test 51');
test(minStickers(["aabbcc","bbccdd","aaccdd"], "aabbccddee"), -1, 'Test 52');
test(minStickers(["cat","dog","bird"], "cattog"), 3, 'Test 53');
test(minStickers(["orange","juice","smoothie"], "smoothieorangejuice"), 3, 'Test 54');
test(minStickers(["aabb","bbcc","ccdd"], "bbaaccd"), 2, 'Test 55');
test(minStickers(["quick","brown","fox","jumps","over","lazy"], "quickbrownfoxjumpsoveralazydog"), -1, 'Test 56');
test(minStickers(["algorithm","data","structure"], "datadstructure"), 3, 'Test 57');
test(minStickers(["cat","bat","rat","car"], "catabtar"), 3, 'Test 58');
test(minStickers(["zebra","lion","tiger"], "tigerlionzebra"), 3, 'Test 59');
test(minStickers(["zebra","xylophone","quartz","violet","umbrella"], "quartzxylophonevioletzebraumbrella"), Execution timed out, 'Test 60');
test(minStickers(["apple","banana","cherry"], "bananaapplecherry"), 3, 'Test 61');
test(minStickers(["algorithm","data","structure"], "algorithmdatastructure"), 3, 'Test 62');
test(minStickers(["repeat","again","once"], "repeatagainonce"), 3, 'Test 63');
test(minStickers(["sticker","stamps","books"], "tsickerbomskps"), 3, 'Test 64');
test(minStickers(["abcd","dcba","efgh","hgf","ijkl","lkji"], "abcdefghijklij"), 4, 'Test 65');
test(minStickers(["abcdefg","ghijklm","nopqrstu","vwxyz"], "abcdefghijklmnopqrstuvwxyz"), 4, 'Test 66');
test(minStickers(["aaaa","bbbb","cccc"], "aabbcc"), 3, 'Test 67');
test(minStickers(["aabbccddeeff","bbccddeeffgghh","ccddeeffgghhiijj"], "aabbccddeeffgghhiijj"), 2, 'Test 68');
test(minStickers(["sticker","book","a"], "stickers"), 2, 'Test 69');
test(minStickers(["x","y","z"], "zyxzyxzyx"), 9, 'Test 70');
test(minStickers(["abcd","efgh","ijkl"], "ijklabcdeffgh"), 4, 'Test 71');
test(minStickers(["sticker","book","target"], "booktarget"), 2, 'Test 72');
test(minStickers(["hello","world","python"], "pythonworldhello"), 3, 'Test 73');
test(minStickers(["aabbcc","ddeeff","gghhii","jjkkll","mmnnoo"], "aabbccddeeffgghhiijjkkllmmnnoo"), 5, 'Test 74');
test(minStickers(["jump","over","lazy"], "jumplazyover"), 3, 'Test 75');
test(minStickers(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd"], "abcdefghijklmnopqrstuvwxyz"), 5, 'Test 76');
test(minStickers(["abcdefghij","klmnopqrst","uvwxyz","mnopqrstuv","wxyzabcde"], "zyxwvutsrqponmlkjihgfedcba"), 3, 'Test 77');
test(minStickers(["hello","world","again"], "helloworldhelloagainworld"), 5, 'Test 78');
test(minStickers(["unique","letters"], "uniquelettersuniqueletters"), 4, 'Test 79');
test(minStickers(["cat","dog","bird"], "birdcatdog"), 3, 'Test 80');
test(minStickers(["example","science","with"], "thehatexample"), 4, 'Test 81');
test(minStickers(["abcdef","ghijkl","mnopqr","stuvwx","yz"], "abcdefghijklmnopqrstuvwxyz"), 5, 'Test 82');
test(minStickers(["laptop","phone","tablet"], "telephonetablet"), 4, 'Test 83');
test(minStickers(["abcd","efgh","ijkl"], "abcdefghijlkl"), 4, 'Test 84');
test(minStickers(["random","words","here","to","test","sticker","functionality"], "randomwordsherefunctionalityteststicker"), Execution timed out, 'Test 85');
test(minStickers(["abcdef","ghijkl","mnopqr"], "mnopqrfedcba"), 2, 'Test 86');
test(minStickers(["overlap","partial","coverage"], "overlappartialcoverage"), 3, 'Test 87');
test(minStickers(["aabb","bbcc","ccdd","ddeeff","ffgg"], "aabbccddeeffgg"), 4, 'Test 88');
test(minStickers(["zzz","yyy","xxx","www"], "zzzyyyxxxwww"), 4, 'Test 89');
test(minStickers(["coding","is","fun"], "sindgnif"), 3, 'Test 90');
test(minStickers(["happy","birthday","party"], "birthdaypartyparty"), 3, 'Test 91');
test(minStickers(["zzzz","yyyy","xxxx"], "zyxwvutsrqponmlkjihgfedcba"), -1, 'Test 92');
test(minStickers(["pizza","pie","cake"], "pizzacakepie"), 3, 'Test 93');
test(minStickers(["fox","quick","brown"], "brownquickfox"), 3, 'Test 94');
test(minStickers(["sticky","loop","again"], "programming"), -1, 'Test 95');
test(minStickers(["python","java","cplus"], "javapythoncpluspython"), 4, 'Test 96');
test(minStickers(["steak","egg","bacon"], "eggnestake"), 4, 'Test 97');
test(minStickers(["xy","yz","zx"], "xyzyzxzyxzyzx"), 7, 'Test 98');
test(minStickers(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd","efghij","klmnop","qrstuv","wxzyab"], "abcdefghijklmnopqrstuvwxyzabc"), 5, 'Test 99');
test(minStickers(["one","two","three","four","five","six"], "onetwothreefourfivesix"), 6, 'Test 100');
test(minStickers(["one","two","three"], "onetwothreeonetwothree"), 6, 'Test 101');
test(minStickers(["dog","cat","bird"], "catdogbird"), 3, 'Test 102');
test(minStickers(["one","two","three"], "onetwothree"), 3, 'Test 103');
test(minStickers(["red","green","blue"], "greenbluegreengreen"), 4, 'Test 104');
test(minStickers(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "abcdefghijklmnopqrstuvwxyz"), Execution timed out, 'Test 105');
test(minStickers(["up","down","left","right"], "rightleftdownup"), 4, 'Test 106');
test(minStickers(["red","blue","green","yellow","purple"], "bluegreenyellowpurple"), 4, 'Test 107');
test(minStickers(["one","two","three"], "threetwoone"), 3, 'Test 108');
test(minStickers(["quick","brown","fox"], "uqcfkibrowno"), 3, 'Test 109');
test(minStickers(["a","ab","abc","abcd","abcde"], "abcdeabcde"), 2, 'Test 110');
test(minStickers(["cat","dog","bird"], "cogbat"), 3, 'Test 111');
test(minStickers(["programming","in","python"], "grammipnnoingtih"), 4, 'Test 112');
test(minStickers(["aabbcc","bbccdd","ccddeeff","ddeeffgg"], "aabbccddeeffgg"), 2, 'Test 113');
test(minStickers(["apple","banana","cherry","date"], "abacaxibananacherry"), -1, 'Test 114');
test(minStickers(["abcdefgh","ijklmnop","qrstuvwx","yz"], "abcdefghijklmnopqrstuvwxyz"), 4, 'Test 115');
test(minStickers(["abc","bcd","cde","def","efg"], "abcdefg"), 3, 'Test 116');
test(minStickers(["red","blue","green"], "greengreenblue"), 3, 'Test 117');
test(minStickers(["hello","world","python"], "worldhellopython"), 3, 'Test 118');
test(minStickers(["zzz","yyy","xxx"], "zzzyyyxxx"), 3, 'Test 119');
test(minStickers(["fast","food","truck"], "truckfastfood"), 3, 'Test 120');
test(minStickers(["abcd","dcba","abcd"], "abcdabcdabcd"), 3, 'Test 121');
test(minStickers(["test","cases","here","for","the","sticker","problem"], "testcaseshereforthestickerproblem"), Execution timed out, 'Test 122');
test(minStickers(["aabbcc","ddeeff","gghhii"], "abcdefghi"), 3, 'Test 123');
test(minStickers(["hello","world","foo","bar","baz"], "helloworldfoobarbaz"), 5, 'Test 124');
test(minStickers(["hello","world","python","programming"], "helloprogrammingworld"), 3, 'Test 125');
test(minStickers(["repeated","words","here"], "repeatedwordshere"), 3, 'Test 126');
test(minStickers(["happy","new","year"], "happynewyear"), 3, 'Test 127');
test(minStickers(["jump","high","long"], "highjumplong"), 3, 'Test 128');
test(minStickers(["sticker","sticker","sticker"], "stickers"), 2, 'Test 129');
test(minStickers(["ab","cd","ef","gh","ij","kl","mn","op","qr","st","uv","wx","yz"], "abcdefghijklmnopqrstuvwxyz"), 13, 'Test 130');
test(minStickers(["abcd","efgh","ijkl","mnop","qrst","uvwx","yz"], "abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzz"), Execution timed out, 'Test 131');
test(minStickers(["ab","bc","ca"], "abcabcabc"), 5, 'Test 132');
test(minStickers(["repeated","words","here","in","this","example"], "repeatedwordshereinthisexample"), 6, 'Test 133');
test(minStickers(["abcd","efgh","ijkl"], "fedcbahjiglke"), 4, 'Test 134');
test(minStickers(["hello","world","wide"], "worldwide"), 2, 'Test 135');
test(minStickers(["abcdefg","hijklmn","opqrstu","vwxyz"], "abcdefghijklmnopqrstuvwxyz"), 4, 'Test 136');
test(minStickers(["jump","over","lazy"], "lazyjumpover"), 3, 'Test 137');
test(minStickers(["sun","moon","star"], "moonstarsun"), 3, 'Test 138');
test(minStickers(["apple","orange","banana"], "poeplange"), 2, 'Test 139');
test(minStickers(["one","two","three"], "threethreetwoone"), 4, 'Test 140');
test(minStickers(["xylophone","piano","violin"], "xylophonepianoviolin"), 3, 'Test 141');
test(minStickers(["aabbcc","bbccdd","ccddaa"], "aabbccbbccddccddaa"), 3, 'Test 142');
test(minStickers(["abcdef","abcde","abcd"], "abcdef"), 1, 'Test 143');
test(minStickers(["abcde","fghij","klmno"], "ejihfckgmldnbaio"), 4, 'Test 144');
test(minStickers(["abcdef","ghijkl","mnopqr"], "jklmnopqrfgedbica"), 3, 'Test 145');
test(minStickers(["abc","def","ghi","jkl"], "abcdefghijkln"), -1, 'Test 146');
test(minStickers(["abcde","fghij","klmno","pqrst","uvwxy"], "abcdefghijklmnopqrstuvwxyz"), -1, 'Test 147');
test(minStickers(["quick","brown","fox","jumps","over","lazy","dog"], "quickbrownfoxjumpsoverlazydog"), 7, 'Test 148');
test(minStickers(["race","car","seat"], "crecarstae"), 3, 'Test 149');
test(minStickers(["xy","yx","zz"], "zyxzyxzyx"), 5, 'Test 150');
test(minStickers(["xy","yz","za","ax"], "xyzaxyzaxyza"), 6, 'Test 151');
test(minStickers(["the","quick","brown","fox","jumps","over","lazy","dog"], "thequickbrownfoxjumpsoveralazydog"), Execution timed out, 'Test 152');
test(minStickers(["cat","dog","bird"], "birdcattwo"), -1, 'Test 153');

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
