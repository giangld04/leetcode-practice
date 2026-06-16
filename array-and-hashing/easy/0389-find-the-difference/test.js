// Test: 389. Find The Difference
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { findTheDifference } = require("./solution");

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

console.log("\n389. Find The Difference\n");

test(findTheDifference("abcd", "abcde"), e, 'Test 1');
test(findTheDifference("aeiou", "aeiouf"), f, 'Test 2');
test(findTheDifference("python", "ypthon"), null, 'Test 3');
test(findTheDifference("abcdxyz", "abcdzyxw"), w, 'Test 4');
test(findTheDifference("a", "ab"), b, 'Test 5');
test(findTheDifference("xyz", "zyxw"), w, 'Test 6');
test(findTheDifference("", "y"), y, 'Test 7');
test(findTheDifference("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyza"), a, 'Test 8');
test(findTheDifference("hello", "helloa"), a, 'Test 9');
test(findTheDifference("hello", "hleloa"), a, 'Test 10');
test(findTheDifference("aeiou", "aeiozu"), z, 'Test 11');
test(findTheDifference("hello", "ohell"), null, 'Test 12');
test(findTheDifference("ae", "aea"), a, 'Test 13');
test(findTheDifference("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyzp"), p, 'Test 14');
test(findTheDifference("thisisaverylongstringfortesting", "thisisaverylongstringfortestingz"), z, 'Test 15');
test(findTheDifference("thisisaverylongstringwithalotofcharacters", "thisisaverylongstringwithalotofcharactersz"), z, 'Test 16');
test(findTheDifference("almostsame", "almostsamee"), e, 'Test 17');
test(findTheDifference("abcdabcdabcdabcdabcdabcd", "abcdabcdabcdabcdabcdabcde"), e, 'Test 18');
test(findTheDifference("thisisaverylongstringwithsomerepeatingcharacters", "thisisaverylongstringwithsomerepeatingcharactersist"), i, 'Test 19');
test(findTheDifference("sameletters", "samesletters"), s, 'Test 20');
test(findTheDifference("mississippi", "mississippix"), x, 'Test 21');
test(findTheDifference("thisisaverylongstringthatcontainsavarietyofcharacters", "thisisaverylongstringthatcontainsavarietyofcharactorst"), o, 'Test 22');
test(findTheDifference("mississippi", "mississippiw"), w, 'Test 23');
test(findTheDifference("samechar", "samechars"), s, 'Test 24');
test(findTheDifference("quickbrownfoxjumps", "quickbrownfoxjumpsl"), l, 'Test 25');
test(findTheDifference("pythonprogramming", "pythonprogrammingz"), z, 'Test 26');
test(findTheDifference("singlecharacter", "singlecharacterr"), r, 'Test 27');
test(findTheDifference("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzj"), j, 'Test 28');
test(findTheDifference("abcdabcdabcd", "abcdabcdabcdd"), d, 'Test 29');
test(findTheDifference("uniqueletters", "uniquelettersx"), x, 'Test 30');
test(findTheDifference("xyzzzxyzzz", "xyzzzxyzzzx"), x, 'Test 31');
test(findTheDifference("alibabacloud", "alibabacloudu"), u, 'Test 32');
test(findTheDifference("xyxzyzy", "xyxzyzyz"), z, 'Test 33');
test(findTheDifference("abcdabcdabcd", "abcdabcdabcdx"), x, 'Test 34');
test(findTheDifference("different", "differenti"), i, 'Test 35');
test(findTheDifference("finding", "findinwg"), w, 'Test 36');
test(findTheDifference("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), z, 'Test 37');
test(findTheDifference("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzx"), x, 'Test 38');
test(findTheDifference("onemore", "onemroem"), m, 'Test 39');
test(findTheDifference("hellothereeveryone", "hellothereeveryonex"), x, 'Test 40');
test(findTheDifference("mississippi", "mississippip"), p, 'Test 41');
test(findTheDifference("pneumonoultramicroscopicsilicovolcanoconiosis", "pneumonoultramicroscopicsilicovolcanoconiosisp"), p, 'Test 42');
test(findTheDifference("quickbrownfoxjumpsoverthelazydog", "quickbrownfoxjumpsoverthelazydogg"), g, 'Test 43');
test(findTheDifference("hellothisisanexample", "thisisanexamplehelloo"), o, 'Test 44');
test(findTheDifference("short", "horst"), null, 'Test 45');
test(findTheDifference("abracadabra", "abracadabrak"), k, 'Test 46');
test(findTheDifference("pythonprogramming", "pythonprogrammings"), s, 'Test 47');
test(findTheDifference("mamamamamamama", "mmamamamamamama"), m, 'Test 48');
test(findTheDifference("qwert", "wqret"), null, 'Test 49');
test(findTheDifference("repeatedcharactershhhhh", "repeatedcharactershhhhha"), a, 'Test 50');
test(findTheDifference("abcdabcdabcd", "abcdabcdabcde"), e, 'Test 51');
test(findTheDifference("abcdabcd", "abcdabcde"), e, 'Test 52');
test(findTheDifference("uniqueletters", "enuiqtelrstsu"), s, 'Test 53');
test(findTheDifference("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaaa", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaaab"), b, 'Test 54');
test(findTheDifference("uniquecharacters", "uniquecharactersn"), n, 'Test 55');
test(findTheDifference("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), z, 'Test 56');
test(findTheDifference("qwertypoiuytrewq", "qwertypoiuytrewqa"), a, 'Test 57');
test(findTheDifference("abcdefghijklnmopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcbaq"), q, 'Test 58');
test(findTheDifference("samecharacters", "samecharactersc"), c, 'Test 59');
test(findTheDifference("specialcharacters!@#$%^&*[]", "specialcharacters!@#$%^&*[]s"), s, 'Test 60');
test(findTheDifference("repeatedletters", "repeadetletters"), null, 'Test 61');
test(findTheDifference("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzz"), z, 'Test 62');
test(findTheDifference("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyzq"), q, 'Test 63');
test(findTheDifference("onetwothree", "onetwothreefour"), f, 'Test 64');
test(findTheDifference("short", "shorrt"), r, 'Test 65');
test(findTheDifference("uniqueletters", "eniqulettersu"), null, 'Test 66');
test(findTheDifference("quickbrownfoxjumpsoverthelazydog", "quickbrownfoxjumpsoverthelazydogq"), q, 'Test 67');
test(findTheDifference("onetwothree", "onetwothreef"), f, 'Test 68');
test(findTheDifference("hellothere", "hellotherex"), x, 'Test 69');
test(findTheDifference("uniqueletter", "uniqueletteru"), u, 'Test 70');
test(findTheDifference("uniqueletters", "enuiqueletters"), e, 'Test 71');
test(findTheDifference("thisisalongstring", "thisisalongstringx"), x, 'Test 72');
test(findTheDifference("nogapsbetweenletters", "nogapsbetweenlettersn"), n, 'Test 73');
test(findTheDifference("abcdefg", "gfedcbaa"), a, 'Test 74');
test(findTheDifference("repeated", "repeatedr"), r, 'Test 75');
test(findTheDifference("pythonprogramming", "pythonprogrammingg"), g, 'Test 76');
test(findTheDifference("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzb"), b, 'Test 77');
test(findTheDifference("balloon", "ooblaanl"), a, 'Test 78');
test(findTheDifference("sameletters", "smaleetters"), null, 'Test 79');
test(findTheDifference("randomstring", "randomstrings"), s, 'Test 80');
test(findTheDifference("uniqueletters", "uniqueletterst"), t, 'Test 81');
test(findTheDifference("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydoga"), a, 'Test 82');
test(findTheDifference("xyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxz", "xyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzj"), j, 'Test 83');
test(findTheDifference("quickbrownfoxjumpsoverthelazydog", "quickbrownfoxjumpsoverthelazydogm"), m, 'Test 84');
test(findTheDifference("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydogp"), p, 'Test 85');
test(findTheDifference("xyzz", "xyzzz"), z, 'Test 86');
test(findTheDifference("repeatedlettersinthisstring", "repeatedlettersinthisstringi"), i, 'Test 87');
test(findTheDifference("aaaabbbbccccddddeee", "aaaabbbbccccddddeeef"), f, 'Test 88');
test(findTheDifference("zzzzzzzzzz", "zzzzzzzzzzz"), z, 'Test 89');
test(findTheDifference("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyzz"), z, 'Test 90');
test(findTheDifference("thesameletterrepeatedseveraltime", "thesameletterrepeatedseveraltimee"), e, 'Test 91');
test(findTheDifference("duplicatecharacters", "duplicatecharacterst"), t, 'Test 92');
test(findTheDifference("complexinputwithdifferentcharacters", "complexinputwithdifferentcharactersg"), g, 'Test 93');
test(findTheDifference("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyzx"), x, 'Test 94');
test(findTheDifference("pythonprogramming", "pythonprogrammingo"), o, 'Test 95');
test(findTheDifference("xyzz", "xyzzy"), y, 'Test 96');

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
