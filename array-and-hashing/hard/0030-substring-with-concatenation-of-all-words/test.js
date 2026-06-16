// Test: 30. Substring With Concatenation Of All Words
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { findSubstring } = require("./solution");

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

console.log("\n30. Substring With Concatenation Of All Words\n");

test(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]), [], 'Test 1');
test(findSubstring("a", ["a","a","a"]), [], 'Test 2');
test(findSubstring("abababab", ["a","b","a","b"]), [0, 1, 2, 3, 4], 'Test 3');
test(findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo","barr","wing","ding","wing"]), [13], 'Test 4');
test(findSubstring("barfoothefoobarman", ["foo","bar"]), [0, 9], 'Test 5');
test(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]), [6, 9, 12], 'Test 6');
test(findSubstring("aaa", ["a","a"]), [0, 1], 'Test 7');
test(findSubstring("thisisjustafancysentencewithallthesewordsin", ["this","is","a","just","fancy","sentence","with","all","these","words","in"]), [], 'Test 8');
test(findSubstring("overlaplaplaplaplaplaplaplaplaplap", ["lap","laplap","laplap","laplap","laplap","laplap","laplap","laplap"]), [], 'Test 9');
test(findSubstring("abcdefabcdefabcdefabcdefabcdef", ["abcdef","abcdef","abcdef","abcdef","abcdef"]), [0], 'Test 10');
test(findSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["aabb","ccdd","eefg","ghhi","jklk","llmm","nnoo","pqqr","rstt","uuvv","wwxx","yyzz"]), [], 'Test 11');
test(findSubstring("oneonetwoonethreetwothreeonetwothreeone", ["one","two","three"]), [], 'Test 12');
test(findSubstring("abcdefgabcdefgabcdefg", ["abc","def","gab","cde","fgh"]), [], 'Test 13');
test(findSubstring("zazbzczdzazbzczdzaz", ["zaz", "bz", "cz", "dz", "az", "bz", "cz", "dz"]), [], 'Test 14');
test(findSubstring("onetwothreefourfivesixseveneightnine", ["onetwo","threefour","fivesix","seveneight","ninetwo","threefour","fivesix"]), [], 'Test 15');
test(findSubstring("zzzzzzzzzzzzzzzzzz", ["zzz","zzz","zzz","zzz"]), [0, 3, 6, 1, 4, 2, 5], 'Test 16');
test(findSubstring("abcdefghijabcdefghijabcdefghij", ["abc","def","ghi","jkl","abc","def","ghi","jkl","abc","def"]), [], 'Test 17');
test(findSubstring("abcdabcdabcdabcd", ["abcd", "dcba", "abdc", "bacd"]), [], 'Test 18');
test(findSubstring("testtesttesttest", ["test", "test", "test"]), [0, 4], 'Test 19');
test(findSubstring("alibabacloudisfastgrowing", ["ali","ba","ba","cloud","is","fast","grow","ing"]), [], 'Test 20');
test(findSubstring("mississippiissippi", ["mis","iss","ssi","ipp","ppi","ippi","ippi","ippi","ippi","ippi","ippi","ippi","ippi","ippi","ippi"]), [], 'Test 21');
test(findSubstring("thisisaverylongstringthatcontainsmanywordsandwordstogether", ["this","is","avery","long","string","that","contains","many","words","and","words","together"]), [], 'Test 22');
test(findSubstring("catdogcatdogcatdogcat", ["cat","dog","cat","dog","cat"]), [0, 6], 'Test 23');
test(findSubstring("abcdefghabcdefghabcdefgh", ["abcdef","ghabcd","efghab","cdefgh","defghi","efghab","fghabc"]), [], 'Test 24');
test(findSubstring("repeatedrepeatedrepeated", ["repeated","repe","atedre","peated"]), [], 'Test 25');
test(findSubstring("xylophoneclarinetxylophoneclarinet", ["xylo","phone","clar","inet"]), [], 'Test 26');
test(findSubstring("aquickbrownfoxjumpsoverthelazydog", ["quick","brown","fox","jump","over","the","lazy","dog"]), [], 'Test 27');
test(findSubstring("repeatedrepeatedrepeatedword", ["repeated","repeated","repeated","word"]), [], 'Test 28');
test(findSubstring("aquickbrownfoxjumpsoverthelazydog", ["quick","brown","fox","jumps","over","the","lazy","dog"]), [], 'Test 29');
test(findSubstring("onetwothreefour", ["one", "two", "three", "four"]), [], 'Test 30');
test(findSubstring("loremipsumdolorsitamet", ["lorem", "ipsum", "dolor", "sit", "amet"]), [], 'Test 31');
test(findSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["aabb","ccdd","eefg","ghhi","ijjk","kllm","mnnm","nnoo","ppqq","rrss","ttuu","vvww","xxyy","zzaa"]), [], 'Test 32');
test(findSubstring("ababababababababababababababababab", ["aba","bab","aba","bab","aba","bab","aba","bab","aba","bab","aba","bab","aba","bab","aba","bab","aba","bab","aba","bab"]), [], 'Test 33');
test(findSubstring("onetwothreefourfivesixseveneightnine", ["one","two","three","four","five","six","seven","eight","nine"]), [], 'Test 34');
test(findSubstring("aaaabbbbccccddddeeeeffffgggghhhhiiii", ["aabb","bbcc","ccdd","ddeeff","ffgg","gghh","hhiiaa"]), [], 'Test 35');
test(findSubstring("aabbccddeeffgghhiijj", ["aabb","ccdd","eeff","gghh","iijj"]), [0], 'Test 36');
test(findSubstring("mississippi", ["issi", "ippi"]), [], 'Test 37');
test(findSubstring("aaaaaaaaaaaabbbbbbbbbbbcccccccccccddddddddddd", ["aaaaa","bbbbb","ccccc","ddddd","aaaaa","bbbbb","ccccc","ddddd","aaaaa","bbbbb"]), [], 'Test 38');
test(findSubstring("complexcomplexcomplexcomplex", ["com","ple","xco","mple","com","ple","xco","mple"]), [], 'Test 39');
test(findSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","zz"]), [], 'Test 40');
test(findSubstring("pythonprogramminglanguage", ["py","thon","pro","gram","ming","lan","guag","e"]), [], 'Test 41');
test(findSubstring("exampleexampleexampleexample", ["example","example","example","example"]), [0], 'Test 42');
test(findSubstring("abcdefghabcdefgh", ["abcd", "efgh", "efgh", "abcd"]), [0], 'Test 43');
test(findSubstring("hellohellohellohellohello", ["hello","hello","hello","hello","hello"]), [0], 'Test 44');
test(findSubstring("xxyyyzzzzzyyyxx", ["xx","yy","zz","yy","xx"]), [], 'Test 45');
test(findSubstring("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]), [], 'Test 46');
test(findSubstring("hellohellohellohellohellohellohello", ["hello","hello"]), [0, 5, 10, 15, 20, 25], 'Test 47');
test(findSubstring("concatenationconcatenationconcatenation", ["concat","enationc","ationc","tenation","enationc","oncatena"]), [], 'Test 48');
test(findSubstring("overlapoverlappingoverlapping", ["over","lap","over","lapping"]), [], 'Test 49');
test(findSubstring("xxyyzzxxyyzzxxyyzzxxyyzz", ["xxyy","yyzz","xxyy","yyzz","xxyy","yyzz"]), [], 'Test 50');
test(findSubstring("abcdefgabcdefgabcdefg", ["abc","def","gab"]), [0, 7], 'Test 51');
test(findSubstring("aabbccddeeff", ["abc", "def", "abb"]), [], 'Test 52');
test(findSubstring("mississippiissississippi", ["issi","ssis","siss","issi","ssis","siss","issi","ssis","siss"]), [], 'Test 53');
test(findSubstring("abcdefghijklmno", ["abc","def","ghi","jkl","mno"]), [0], 'Test 54');
test(findSubstring("xyzxyzxyzxyzxyz", ["xyz","zyx","yzx","xzy","zxy"]), [], 'Test 55');
test(findSubstring("abcdefabcdefabcdefabcdefabcdefabcdef", ["abcdef","abcdef","abcdef","abcdef","abcdef","abcdef"]), [0], 'Test 56');
test(findSubstring("thisisatargetstringwithtargetstring", ["this","is","a","target","string"]), [], 'Test 57');
test(findSubstring("thisisanexamplethisisanexamplethisisanexample", ["this","isan","example","isan","example"]), [], 'Test 58');
test(findSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", ["zzzz","zzzz","zzzz","zzzz","zzzz","zzzz","zzzz","zzzz","zzzz","zzzz"]), [0, 4, 1, 5, 2, 6, 3], 'Test 59');
test(findSubstring("abcdabcdabcdabcdabcdabcd", ["abcd", "dcba", "abdc", "bacd", "cdab"]), [], 'Test 60');
test(findSubstring("abcdefghijabcdefghijabcdefghij", ["abc","def","ghi","jabc","def","ghij","abc","def","ghi","j"]), [], 'Test 61');
test(findSubstring("abcdefghiabcdefghiabcdefghi", ["abc","def","ghi","abc","def","ghi","abc","def","ghi"]), [0], 'Test 62');
test(findSubstring("abcdefghijabcdefghijabcdefghijabcdefghij", ["abc","def","ghi","jabc","def","ghi","jabc","def","ghi","j"]), [], 'Test 63');
test(findSubstring("aaaaaaaaaaaaaaaaaab", ["aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","a"]), [], 'Test 64');
test(findSubstring("onetwothreefourfivesix", ["one","two","three","four","five","six"]), [], 'Test 65');
test(findSubstring("ababababababababababababababab", ["aba","bab","aba","bab","aba","bab","aba","bab","aba","bab"]), [0], 'Test 66');
test(findSubstring("abracadabra", ["bra", "cad"]), [1], 'Test 67');
test(findSubstring("amazinganduniquestring", ["amazing","and","unique","string"]), [], 'Test 68');
test(findSubstring("mississippiississi", ["issi","ssis","siss","issi"]), [], 'Test 69');
test(findSubstring("abcdefabcdefabcdef", ["abc", "def", "cba", "fed"]), [], 'Test 70');
test(findSubstring("abcdefghij", ["abc", "def", "ghi", "j"]), [], 'Test 71');
test(findSubstring("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa","aaa"]), [], 'Test 72');
test(findSubstring("mnopqrstuvmnopqrstuv", ["mnop","qrst","uv","mnop","qrst","uv"]), [], 'Test 73');
test(findSubstring("lmnopqrlmnopqrlmnopqr", ["lmnop","qr","lmnop","qr","lmnop","qr"]), [], 'Test 74');
test(findSubstring("xyzzxyzzxyzzxyzzxyzzxyzzxyzz", ["xyz","zxy","zzx","xyz","zxy","zzx","xyz","zxy","zzx","xyz","zxy","zzx"]), [], 'Test 75');
test(findSubstring("abcdefghijabcdefghijabcdefghij", ["abcdefghij","abcdefghij","abcdefghij"]), [0], 'Test 76');
test(findSubstring("anananananananananananananananananan", ["ana","nan","ana"]), [0, 6, 12, 18, 24, 4, 10, 16, 22, 2, 8, 14, 20, 26], 'Test 77');
test(findSubstring("hellohellohellohello", ["hello", "hello", "hello"]), [0, 5], 'Test 78');
test(findSubstring("abcdefabcdefabcdefabcdefabcdef", ["abc","def"]), [0, 3, 6, 9, 12, 15, 18, 21, 24], 'Test 79');
test(findSubstring("qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty", ["qwe","rty","qwe","rty","qwe","rty","qwe","rty","qwe","rty","qwe","rty","qwe","rty","qwe","rty","qwe","rty","qwe","rty"]), [0, 3, 6, 9, 12], 'Test 80');
test(findSubstring("aaaabbbbccccaaaabbbbcccc", ["aaaa","bbbb","cccc","aaaa","bbbb","cccc"]), [0], 'Test 81');
test(findSubstring("concatenatedsubstringthatappearsmultipleconcatenatedsubstring", ["concatenated","substring","that","appears","multiple"]), [], 'Test 82');
test(findSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", ["abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc"]), [], 'Test 83');
test(findSubstring("mississippiissimissing", ["issi","ssis","ippi","ssip"]), [], 'Test 84');
test(findSubstring("abcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]), [], 'Test 85');
test(findSubstring("longstringwithmanywordsoflengthfive", ["fivel","ength","withm","nword","stringw","ongst","rings","words","thefa"]), [], 'Test 86');
test(findSubstring("xxyzxyzyxzyzyzxzy", ["xyz", "zyx", "zyz", "zxy"]), [], 'Test 87');
test(findSubstring("abcabcabcabcabcabcabcabcabcabc", ["abc","abc","abc","abc","abc","abc","abc","abc","abc","abc"]), [0], 'Test 88');
test(findSubstring("qwertyuiopqwertyuiopqwertyuiop", ["qwerty","uiop","qwerty","uiop","qwerty","uiop"]), [], 'Test 89');
test(findSubstring("mississippiississippi", ["miss","issi","ssip","ippi"]), [], 'Test 90');
test(findSubstring("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", ["abc","def","ghi","jabc","def","ghi","jabc","def","ghi","jabc","def","ghi","jabc","def","ghi","j"]), [], 'Test 91');
test(findSubstring("aaaaaabbbbccccdddd", ["aaaa", "bbbb", "cccc", "dddd"]), [2], 'Test 92');
test(findSubstring("xyzxyzxyzxyz", ["xyz","xyz","xyz","xyz"]), [0], 'Test 93');
test(findSubstring("mississippiissimissing", ["issi","ssis","ippi","ssim"]), [], 'Test 94');

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
