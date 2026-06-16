// Test: 2138. Divide A String Into Groups Of Size K
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { divideString } = require("./solution");

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

console.log("\n2138. Divide A String Into Groups Of Size K\n");

test(divideString("abcdefghij", 3, "x"), ['abc', 'def', 'ghi', 'jxx'], 'Test 1');
test(divideString("abcdefg", 2, "z"), ['ab', 'cd', 'ef', 'gz'], 'Test 2');
test(divideString("abcdefghi", 3, "x"), ['abc', 'def', 'ghi'], 'Test 3');
test(divideString("a", 1, "y"), ['a'], 'Test 4');
test(divideString("python", 6, "q"), ['python'], 'Test 5');
test(divideString("hello world", 4, "_"), ['hell', 'o wo', 'rld_'], 'Test 6');
test(divideString("programming", 1, "a"), ['p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'i', 'n', 'g'], 'Test 7');
test(divideString("hello world", 2, "_"), ['he', 'll', 'o ', 'wo', 'rl', 'd_'], 'Test 8');
test(divideString("", 3, "b"), [], 'Test 9');
test(divideString("hello", 2, "q"), ['he', 'll', 'oq'], 'Test 10');
test(divideString("abc", 5, "z"), ['abczz'], 'Test 11');
test(divideString("a", 5, "y"), ['ayyyy'], 'Test 12');
test(divideString("boundarycase", 8, "b"), ['boundary', 'casebbbb'], 'Test 13');
test(divideString("thisisaverylongstring", 5, "p"), ['thisi', 'saver', 'ylong', 'strin', 'gpppp'], 'Test 14');
test(divideString("abcdexyz", 2, "g"), ['ab', 'cd', 'ex', 'yz'], 'Test 15');
test(divideString("repeatedcharacters", 7, "e"), ['repeate', 'dcharac', 'terseee'], 'Test 16');
test(divideString("interview", 2, "z"), ['in', 'te', 'rv', 'ie', 'wz'], 'Test 17');
test(divideString("abcdefg", 7, "z"), ['abcdefg'], 'Test 18');
test(divideString("abcdefghijk", 5, "m"), ['abcde', 'fghij', 'kmmmm'], 'Test 19');
test(divideString("abcdef", 8, "n"), ['abcdefnn'], 'Test 20');
test(divideString("programming", 3, "a"), ['pro', 'gra', 'mmi', 'nga'], 'Test 21');
test(divideString("complexstringwithfill", 9, "r"), ['complexst', 'ringwithf', 'illrrrrrr'], 'Test 22');
test(divideString("abcd", 5, "t"), ['abcdt'], 'Test 23');
test(divideString("almostfill", 9, "l"), ['almostfil', 'lllllllll'], 'Test 24');
test(divideString("partitioning", 3, "z"), ['par', 'tit', 'ion', 'ing'], 'Test 25');
test(divideString("abcdefgxyz", 1, "m"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'x', 'y', 'z'], 'Test 26');
test(divideString("abcdefg", 1, "d"), ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'Test 27');
test(divideString("hello", 4, "o"), ['hell', 'oooo'], 'Test 28');
test(divideString("abcdefghijabcdefghij", 11, "c"), ['abcdefghija', 'bcdefghijcc'], 'Test 29');
test(divideString("repeatthispattern", 8, "m"), ['repeatth', 'ispatter', 'nmmmmmmm'], 'Test 30');
test(divideString("ab", 2, "l"), ['ab'], 'Test 31');
test(divideString("example", 2, "z"), ['ex', 'am', 'pl', 'ez'], 'Test 32');
test(divideString("fill", 1, "f"), ['f', 'i', 'l', 'l'], 'Test 33');
test(divideString("thisisaverylongstringthatneedstobedivided", 5, "a"), ['thisi', 'saver', 'ylong', 'strin', 'gthat', 'needs', 'tobed', 'ivide', 'daaaa'], 'Test 34');
test(divideString("abcdefghijk", 1, "m"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], 'Test 35');
test(divideString("short", 5, "q"), ['short'], 'Test 36');
test(divideString("thisisaverylongstring", 5, "m"), ['thisi', 'saver', 'ylong', 'strin', 'gmmmm'], 'Test 37');
test(divideString("abcdefghij", 2, "w"), ['ab', 'cd', 'ef', 'gh', 'ij'], 'Test 38');
test(divideString("hello", 4, "p"), ['hell', 'oppp'], 'Test 39');
test(divideString("almostfullgroup", 10, "a"), ['almostfull', 'groupaaaaa'], 'Test 40');
test(divideString("qwen", 2, "q"), ['qw', 'en'], 'Test 41');
test(divideString("hello", 1, "b"), ['h', 'e', 'l', 'l', 'o'], 'Test 42');
test(divideString("abcd", 2, "p"), ['ab', 'cd'], 'Test 43');
test(divideString("partitioning", 5, "p"), ['parti', 'tioni', 'ngppp'], 'Test 44');
test(divideString("thisisanexample", 3, "y"), ['thi', 'sis', 'ane', 'xam', 'ple'], 'Test 45');
test(divideString("abcdefg", 10, "q"), ['abcdefgqqq'], 'Test 46');
test(divideString("samecharacter", 2, "s"), ['sa', 'me', 'ch', 'ar', 'ac', 'te', 'rs'], 'Test 47');
test(divideString("fillingwithx", 7, "x"), ['filling', 'withxxx'], 'Test 48');
test(divideString("longerstring", 6, "p"), ['longer', 'string'], 'Test 49');
test(divideString("algorithm", 4, "m"), ['algo', 'rith', 'mmmm'], 'Test 50');
test(divideString("xylophone", 6, "o"), ['xyloph', 'oneooo'], 'Test 51');
test(divideString("thisisaverylongstringthatneedstobedivided", 5, "x"), ['thisi', 'saver', 'ylong', 'strin', 'gthat', 'needs', 'tobed', 'ivide', 'dxxxx'], 'Test 52');
test(divideString("abcdeabcdeabcdea", 4, "w"), ['abcd', 'eabc', 'deab', 'cdea'], 'Test 53');
test(divideString("xyz", 1, "v"), ['x', 'y', 'z'], 'Test 54');
test(divideString("evenlydivisible", 2, "q"), ['ev', 'en', 'ly', 'di', 'vi', 'si', 'bl', 'eq'], 'Test 55');
test(divideString("programming", 3, "w"), ['pro', 'gra', 'mmi', 'ngw'], 'Test 56');
test(divideString("boundarycase", 9, "b"), ['boundaryc', 'asebbbbbb'], 'Test 57');
test(divideString("onemoretestcase", 6, "t"), ['onemor', 'etestc', 'asettt'], 'Test 58');
test(divideString("abcdefg", 3, "v"), ['abc', 'def', 'gvv'], 'Test 59');
test(divideString("equalgroups", 5, "w"), ['equal', 'group', 'swwww'], 'Test 60');
test(divideString("equalgroups", 3, "c"), ['equ', 'alg', 'rou', 'psc'], 'Test 61');
test(divideString("quickbrownfox", 3, "y"), ['qui', 'ckb', 'row', 'nfo', 'xyy'], 'Test 62');
test(divideString("abcdef", 7, "n"), ['abcdefn'], 'Test 63');
test(divideString("abcdefghij", 4, "x"), ['abcd', 'efgh', 'ijxx'], 'Test 64');
test(divideString("abcdef", 7, "z"), ['abcdefz'], 'Test 65');
test(divideString("zebra", 1, "x"), ['z', 'e', 'b', 'r', 'a'], 'Test 66');
test(divideString("this is a test", 5, "_"), ['this ', 'is a ', 'test_'], 'Test 67');
test(divideString("abcdef", 2, "o"), ['ab', 'cd', 'ef'], 'Test 68');
test(divideString("thisisalongstring", 4, "x"), ['this', 'isal', 'ongs', 'trin', 'gxxx'], 'Test 69');
test(divideString("partitioning", 7, "f"), ['partiti', 'oningff'], 'Test 70');
test(divideString("example", 10, "z"), ['examplezzz'], 'Test 71');
test(divideString("abcdefghij", 4, "e"), ['abcd', 'efgh', 'ijee'], 'Test 72');
test(divideString("programmingisfun", 5, "a"), ['progr', 'ammin', 'gisfu', 'naaaa'], 'Test 73');
test(divideString("thisisaverylongstringthatwillneedfilling", 7, "a"), ['thisisa', 'verylon', 'gstring', 'thatwil', 'lneedfi', 'llingaa'], 'Test 74');
test(divideString("onetwothreefourfive", 6, "j"), ['onetwo', 'threef', 'ourfiv', 'ejjjjj'], 'Test 75');
test(divideString("world", 10, "c"), ['worldccccc'], 'Test 76');
test(divideString("xyz", 10, "a"), ['xyzaaaaaaa'], 'Test 77');
test(divideString("hello world", 4, "x"), ['hell', 'o wo', 'rldx'], 'Test 78');
test(divideString("abcdefgxyz", 4, "a"), ['abcd', 'efgx', 'yzaa'], 'Test 79');
test(divideString("abcdefghijk", 4, "x"), ['abcd', 'efgh', 'ijkx'], 'Test 80');
test(divideString("partition", 1, "m"), ['p', 'a', 'r', 't', 'i', 't', 'i', 'o', 'n'], 'Test 81');
test(divideString("algorithms", 7, "b"), ['algorit', 'hmsbbbb'], 'Test 82');
test(divideString("repeatedcharacterstest", 7, "z"), ['repeate', 'dcharac', 'terstes', 'tzzzzzz'], 'Test 83');
test(divideString("almostfull", 4, "i"), ['almo', 'stfu', 'llii'], 'Test 84');
test(divideString("filler", 11, "l"), ['fillerlllll'], 'Test 85');
test(divideString("", 3, "n"), [], 'Test 86');
test(divideString("abcdefghijk", 3, "n"), ['abc', 'def', 'ghi', 'jkn'], 'Test 87');
test(divideString("elephants", 3, "p"), ['ele', 'pha', 'nts'], 'Test 88');
test(divideString("short", 10, "p"), ['shortppppp'], 'Test 89');
test(divideString("abcd", 6, "w"), ['abcdww'], 'Test 90');
test(divideString("abcdef", 2, "x"), ['ab', 'cd', 'ef'], 'Test 91');
test(divideString("quickbrownfox", 4, "x"), ['quic', 'kbro', 'wnfo', 'xxxx'], 'Test 92');
test(divideString("qwert", 10, "n"), ['qwertnnnnn'], 'Test 93');
test(divideString("machinelearning", 8, "d"), ['machinel', 'earningd'], 'Test 94');
test(divideString("abcdef", 1, "z"), ['a', 'b', 'c', 'd', 'e', 'f'], 'Test 95');
test(divideString("short", 10, "b"), ['shortbbbbb'], 'Test 96');
test(divideString("programming", 7, "a"), ['program', 'mingaaa'], 'Test 97');
test(divideString("datastructure", 5, "a"), ['datas', 'truct', 'ureaa'], 'Test 98');
test(divideString("helloWorld", 3, "x"), ['hel', 'loW', 'orl', 'dxx'], 'Test 99');
test(divideString("abcdefghijkmnopqrstuvwxyz", 5, "x"), ['abcde', 'fghij', 'kmnop', 'qrstu', 'vwxyz'], 'Test 100');
test(divideString("abcdefghijk", 3, "p"), ['abc', 'def', 'ghi', 'jkp'], 'Test 101');
test(divideString("divisiblebyk", 2, "h"), ['di', 'vi', 'si', 'bl', 'eb', 'yk'], 'Test 102');
test(divideString("qwenassistant", 7, "a"), ['qwenass', 'istanta'], 'Test 103');
test(divideString("cloudcomputing", 6, "c"), ['cloudc', 'omputi', 'ngcccc'], 'Test 104');
test(divideString("longerstringexample", 6, "n"), ['longer', 'string', 'exampl', 'ennnnn'], 'Test 105');
test(divideString("abcdefghijklnm", 4, "r"), ['abcd', 'efgh', 'ijkl', 'nmrr'], 'Test 106');
test(divideString("algorithm", 5, "b"), ['algor', 'ithmb'], 'Test 107');
test(divideString("quickbrownfox", 3, "m"), ['qui', 'ckb', 'row', 'nfo', 'xmm'], 'Test 108');
test(divideString("abcd", 4, "x"), ['abcd'], 'Test 109');
test(divideString("almostfull", 8, "o"), ['almostfu', 'lloooooo'], 'Test 110');

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
