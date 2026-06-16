// Test: 1768. Merge Strings Alternately
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { mergeAlternately } = require("./solution");

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

console.log("\n1768. Merge Strings Alternately\n");

test(mergeAlternately("a", "b"), ab, 'Test 1');
test(mergeAlternately("abcd", "pq"), apbqcd, 'Test 2');
test(mergeAlternately("ab", "pqrs"), apbqrs, 'Test 3');
test(mergeAlternately("", "uvw"), uvw, 'Test 4');
test(mergeAlternately("x", "y"), xy, 'Test 5');
test(mergeAlternately("hello", "world"), hweolrllod, 'Test 6');
test(mergeAlternately("a", "bcd"), abcd, 'Test 7');
test(mergeAlternately("abcde", "fgh"), afbgchde, 'Test 8');
test(mergeAlternately("abc", "pqr"), apbqcr, 'Test 9');
test(mergeAlternately("abcd", "e"), aebcd, 'Test 10');
test(mergeAlternately("xyz", ""), xyz, 'Test 11');
test(mergeAlternately("abcdefghijklmnopqrstuvwxyz", ""), abcdefghijklmnopqrstuvwxyz, 'Test 12');
test(mergeAlternately("a", "bcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 13');
test(mergeAlternately("thisisateststring", "anotheronehere"), tahniostihseartoensethsetrreing, 'Test 14');
test(mergeAlternately("aabbccdd", "eeffgg"), aeaebfbfcgcgdd, 'Test 15');
test(mergeAlternately("complex", "strings"), csotmrpilnegxs, 'Test 16');
test(mergeAlternately("xyz", "abcde"), xaybzcde, 'Test 17');
test(mergeAlternately("abcdefgh", "ijkl"), aibjckdlefgh, 'Test 18');
test(mergeAlternately("abcdefghijk", "lmnopqrstuvwxyz"), albmcndoepfqgrhsitjukvwxyz, 'Test 19');
test(mergeAlternately("abcdefghij", "klmnopqrstuvwxyz"), akblcmdneofpgqhrisjtuvwxyz, 'Test 20');
test(mergeAlternately("abcdefghijklmnopqrstuvwxy", "z"), azbcdefghijklmnopqrstuvwxy, 'Test 21');
test(mergeAlternately("quick", "brownfox"), qburiocwknfox, 'Test 22');
test(mergeAlternately("onetwothreefour", "five"), ofnievtewothreefour, 'Test 23');
test(mergeAlternately("overlap", "lapping"), olvaeprplianpg, 'Test 24');
test(mergeAlternately("", ""), , 'Test 25');
test(mergeAlternately("python", "java"), pjyatvhaon, 'Test 26');
test(mergeAlternately("abcdefgh", "ijklmnopqrstuv"), aibjckdlemfngohpqrstuv, 'Test 27');
test(mergeAlternately("different", "length"), dliefnfgetrhent, 'Test 28');
test(mergeAlternately("abcdefghij", "klmnopqrst"), akblcmdneofpgqhrisjt, 'Test 29');
test(mergeAlternately("abcdabcdabcd", "zyxwzyxwzyxw"), azbycxdwazbycxdwazbycxdw, 'Test 30');
test(mergeAlternately("longerfirstword", "short"), lsohnogretrfirstword, 'Test 31');
test(mergeAlternately("abcdefg", "hijklmnop"), ahbicjdkelfmgnop, 'Test 32');
test(mergeAlternately("abcdef", "ghijklmnopqrstuvwxyz"), agbhcidjekflmnopqrstuvwxyz, 'Test 33');
test(mergeAlternately("xyz", "abcdefg"), xaybzcdefg, 'Test 34');
test(mergeAlternately("abcdabcdabcd", "efghefghefghefgh"), aebfcgdhaebfcgdhaebfcgdhefgh, 'Test 35');
test(mergeAlternately("short", "longersecondword"), slhoonrgtersecondword, 'Test 36');
test(mergeAlternately("", "notempty"), notempty, 'Test 37');
test(mergeAlternately("notempty", ""), notempty, 'Test 38');
test(mergeAlternately("", "abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 39');
test(mergeAlternately("aabbccddeeff", "gggghhhhiiii"), agagbgbgchchdhdheieififi, 'Test 40');
test(mergeAlternately("", "abcde"), abcde, 'Test 41');
test(mergeAlternately("a1b2c3d4", "e5f6g7"), ae15bf26cg37d4, 'Test 42');
test(mergeAlternately("oddlength", "evenlengths"), oedvdelnelnegntghths, 'Test 43');
test(mergeAlternately("same", "size"), ssaimzee, 'Test 44');
test(mergeAlternately("abcdefg", "hijklmnopqrstuvwxyz"), ahbicjdkelfmgnopqrstuvwxyz, 'Test 45');
test(mergeAlternately("aabbccddeeffgghhiijj", "kkllmmnnooppqqrrssttuuvvwwxxyyzz"), akakblblcmcmdndneoeofpfpgqgqhrhrisisjtjtuuvvwwxxyyzz, 'Test 46');
test(mergeAlternately("hello", "worldwide"), hweolrllodwide, 'Test 47');
test(mergeAlternately("xyzxyzxyz", "abcabcabc"), xaybzcxaybzcxaybzc, 'Test 48');
test(mergeAlternately("abcdxyz", "efghwvu"), aebfcgdhxwyvzu, 'Test 49');
test(mergeAlternately("short", "averylongstring"), sahvoerrtylongstring, 'Test 50');
test(mergeAlternately("a", "b", "c"), Error: Solution.mergeAlternately[] got an unexpected keyword argument 'word3', 'Test 51');
test(mergeAlternately("hello", "worldthisisaverylongstring"), hweolrllodthisisaverylongstring, 'Test 52');
test(mergeAlternately("abcdefg", "hijkl"), ahbicjdkelfg, 'Test 53');
test(mergeAlternately("abcdef", "ghijklmnop"), agbhcidjekflmnop, 'Test 54');
test(mergeAlternately("abcdabcdabcd", "xyzxyzxyzxyz"), axbyczdxaybzcxdyazbxcydz, 'Test 55');
test(mergeAlternately("averyveryverylongword", "short"), asvheorrytveryverylongword, 'Test 56');
test(mergeAlternately("longerword", "short"), lsohnogretrword, 'Test 57');
test(mergeAlternately("hello", "world!"), hweolrllod!, 'Test 58');
test(mergeAlternately("nonempty", ""), nonempty, 'Test 59');
test(mergeAlternately("longstringwithmorecharacters", "shortstr"), lsohnogrsttsrtirngwithmorecharacters, 'Test 60');
test(mergeAlternately("abcdef", "zyxwvu"), azbycxdwevfu, 'Test 61');
test(mergeAlternately("onlyone", ""), onlyone, 'Test 62');
test(mergeAlternately("xyz", "uvw"), xuyvzw, 'Test 63');
test(mergeAlternately("aabbccddeeff", "zzzzyyyxxww"), azazbzbzcycydydxexewfwf, 'Test 64');
test(mergeAlternately("abcdefgh", "ijklmnop"), aibjckdlemfngohp, 'Test 65');
test(mergeAlternately("onetwothree", "four"), ofnoeutrwothree, 'Test 66');
test(mergeAlternately("aabbcc", "ddeeff"), adadbebecfcf, 'Test 67');
test(mergeAlternately("aabbccddeeffgghhiijj", "zzzzzzzzzz"), azazbzbzczczdzdzezezffgghhiijj, 'Test 68');
test(mergeAlternately("abacaxi", "manga"), ambaancgaaxi, 'Test 69');
test(mergeAlternately("onetwothreefour", "fivesix"), ofnievtewsoitxhreefour, 'Test 70');
test(mergeAlternately("one", "twothreefour"), otnweothreefour, 'Test 71');
test(mergeAlternately("merge", "these", "strings"), Error: Solution.mergeAlternately[] got an unexpected keyword argument 'word3', 'Test 72');
test(mergeAlternately("alphanumeric123", "characters!@#"), aclhpahraancutmeerrsi!c@1#23, 'Test 73');
test(mergeAlternately("", "nonempty"), nonempty, 'Test 74');
test(mergeAlternately("xyz", "wvutsrqponmlkjihgfedcba"), xwyvzutsrqponmlkjihgfedcba, 'Test 75');
test(mergeAlternately("abcde", ""), abcde, 'Test 76');
test(mergeAlternately("short", "averyverylongwordindeed"), sahvoerrtyverylongwordindeed, 'Test 77');
test(mergeAlternately("xy", "abcdefghijk"), xaybcdefghijk, 'Test 78');
test(mergeAlternately("onetwothree", "fourfivesix"), ofnoeutrwfoitvherseiex, 'Test 79');
test(mergeAlternately("python", "programming"), ppyrtohgornamming, 'Test 80');
test(mergeAlternately("verylongwordthatgoesonandone", "short"), vsehroyrltongwordthatgoesonandone, 'Test 81');
test(mergeAlternately("xyz", "abcdef"), xaybzcdef, 'Test 82');
test(mergeAlternately("merge", "these"), mtehregsee, 'Test 83');
test(mergeAlternately("abcdefghijklmnopqrstuvwxyz", "z"), azbcdefghijklmnopqrstuvwxyz, 'Test 84');
test(mergeAlternately("xyzlmnop", "qrstuvwx"), xqyrzsltmunvowpx, 'Test 85');
test(mergeAlternately("abcdefgh", "ijklmno"), aibjckdlemfngoh, 'Test 86');
test(mergeAlternately("short", "averyveryverylongword"), sahvoerrtyveryverylongword, 'Test 87');
test(mergeAlternately("averyverylongwordindeed", "short"), asvheorrytverylongwordindeed, 'Test 88');
test(mergeAlternately("equal", "equal"), eeqquuaall, 'Test 89');
test(mergeAlternately("ab", "cd"), acbd, 'Test 90');
test(mergeAlternately("short", "averylongstringthatweneedtocheck"), sahvoerrtylongstringthatweneedtocheck, 'Test 91');
test(mergeAlternately("same", "same"), ssaammee, 'Test 92');
test(mergeAlternately("abcd", ""), abcd, 'Test 93');
test(mergeAlternately("thisisaverylongstring", "hello"), thheilsliosaverylongstring, 'Test 94');

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
