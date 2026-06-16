// Test: 541. Reverse String Ii
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { reverseStr } = require("./solution");

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

console.log("\n541. Reverse String Ii\n");

test(reverseStr("", 5), , 'Test 1');
test(reverseStr("abcdefgh", 3), cbadefhg, 'Test 2');
test(reverseStr("abcdefg", 1), abcdefg, 'Test 3');
test(reverseStr("abcdef", 6), fedcba, 'Test 4');
test(reverseStr("a", 1), a, 'Test 5');
test(reverseStr("abcdefghijk", 4), dcbaefghkji, 'Test 6');
test(reverseStr("abcd", 2), bacd, 'Test 7');
test(reverseStr("abcdefg", 2), bacdfeg, 'Test 8');
test(reverseStr("abcdefg", 10), gfedcba, 'Test 9');
test(reverseStr("ab", 10), ba, 'Test 10');
test(reverseStr("mississippiississippiississippi", 6), sissimsippiiississppiissppissii, 'Test 11');
test(reverseStr("abcdefghijklmnopqrs", 1), abcdefghijklmnopqrs, 'Test 12');
test(reverseStr("zyxwvutsrqponmlkjihgfedcba", 5), vwxyzutsrqlmnopkjihgbcdefa, 'Test 13');
test(reverseStr("mississippi", 4), ssimissiipp, 'Test 14');
test(reverseStr("abcdefghij", 7), gfedcbahij, 'Test 15');
test(reverseStr("reverseeverysinglekcharachters", 8), eesreververysingarahckelchters, 'Test 16');
test(reverseStr("abcdefghijklmnopqrstu", 1), abcdefghijklmnopqrstu, 'Test 17');
test(reverseStr("thisisaverylongstringforchecking", 6), sisihtaverylrtsgnoingforikcehcng, 'Test 18');
test(reverseStr("abcd", 1), abcd, 'Test 19');
test(reverseStr("zxcvbnmlkjhgfdsapoiuytrewq", 9), klmnbvcxzjhgfdsapoqwertyui, 'Test 20');
test(reverseStr("abcdefghijklmn", 1), abcdefghijklmn, 'Test 21');
test(reverseStr("abcdefghijklmnopq", 1), abcdefghijklmnopq, 'Test 22');
test(reverseStr("reversemeplease", 7), esrevermeplease, 'Test 23');
test(reverseStr("abcdefghij", 2), bacdfeghji, 'Test 24');
test(reverseStr("thisisaverylongstringthatweneedtoreversesomeparts", 5), isihtsavergnolystrintahtgweneeerotdversepemosarts, 'Test 25');
test(reverseStr("abcdefghijklmnopqrstuvwxy", 1), abcdefghijklmnopqrstuvwxy, 'Test 26');
test(reverseStr("abcdefghij", 8), hgfedcbaij, 'Test 27');
test(reverseStr("zyxwvutsrqponmlkjihgfedcba", 1), zyxwvutsrqponmlkjihgfedcba, 'Test 28');
test(reverseStr("abcdefghij", 10), jihgfedcba, 'Test 29');
test(reverseStr("onetwothreefourfivesixseveneightnine", 10), erhtowtenoefourfivesgienevesxihtnine, 'Test 30');
test(reverseStr("almostthere", 10), rehttsomlae, 'Test 31');
test(reverseStr("abcdefghijabcdefghij", 11), ajihgfedcbabcdefghij, 'Test 32');
test(reverseStr("reverseme", 5), reverseme, 'Test 33');
test(reverseStr("reverseevery2kcharacters", 5), reverseeveck2yrharacsret, 'Test 34');
test(reverseStr("pythonprogramming", 2), ypthnoprgoramming, 'Test 35');
test(reverseStr("oddnumberofchar", 4), nddoumbecforhar, 'Test 36');
test(reverseStr("abcdefghijklmnop", 1), abcdefghijklmnop, 'Test 37');
test(reverseStr("abcdefghij", 4), dcbaefghji, 'Test 38');
test(reverseStr("abcdefghij", 9), ihgfedcbaj, 'Test 39');
test(reverseStr("abc", 1), abc, 'Test 40');
test(reverseStr("abcdefghij", 11), jihgfedcba, 'Test 41');
test(reverseStr("abcdefgh", 9), hgfedcba, 'Test 42');
test(reverseStr("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 5), cbbaacddeehggffhiijjmllkkmnnoorqqpprssttwvvuuwxxyyzz, 'Test 43');
test(reverseStr("abcdef", 5), edcbaf, 'Test 44');
test(reverseStr("abcdefghijklnopqrstuvwxyz", 26), zyxwvutsrqponlkjihgfedcba, 'Test 45');
test(reverseStr("pythonprogramminglanguage", 8), rpnohtypogrammingaugnalge, 'Test 46');
test(reverseStr("reverseeveryotherchunk", 3), verersveeeryhtoercnuhk, 'Test 47');
test(reverseStr("abcdefghijklmnopqrst", 1), abcdefghijklmnopqrst, 'Test 48');
test(reverseStr("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 7), dccbbaadeeffggkjjiihhkllmmnnrqqppoorssttuuyxxwwvvyzz, 'Test 49');
test(reverseStr("abcdefgh", 1), abcdefgh, 'Test 50');
test(reverseStr("abcde", 10), edcba, 'Test 51');
test(reverseStr("aabbccddeeffgghhiijj", 1), aabbccddeeffgghhiijj, 'Test 52');
test(reverseStr("reversemeplease", 1), reversemeplease, 'Test 53');
test(reverseStr("abcdefghijklmnopqr", 1), abcdefghijklmnopqr, 'Test 54');
test(reverseStr("abcdefghijklmnopqrstuvwxyz", 5), edcbafghijonmlkpqrstyxwvuz, 'Test 55');
test(reverseStr("abcdef", 7), fedcba, 'Test 56');
test(reverseStr("abcdefghij", 5), edcbafghij, 'Test 57');
test(reverseStr("abcdefghijklnopqrstuvwxyz", 13), nlkjihgfedcbaopqrstuvwxyz, 'Test 58');
test(reverseStr("abcdefghijklmnopqrstuv", 1), abcdefghijklmnopqrstuv, 'Test 59');
test(reverseStr("abcdefghijkl", 1), abcdefghijkl, 'Test 60');
test(reverseStr("abcdefghijklnmopqrstuvwxyz", 5), edcbafghijomnlkpqrstyxwvuz, 'Test 61');
test(reverseStr("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 8), ddccbbaaeeffgghhllkkjjiimmnnooppttssrrqquuvvwwxxzzyy, 'Test 62');
test(reverseStr("thisisaverylongstringtotestthealgorithm", 6), sisihtaverylrtsgnoingtotehttsealgorimht, 'Test 63');
test(reverseStr("abcdefghij", 3), cbadefihgj, 'Test 64');
test(reverseStr("onemoretest", 15), tseteromeno, 'Test 65');
test(reverseStr("abcdefghijklmnopqrstuvwxyz", 3), cbadefihgjklonmpqrutsvwxzy, 'Test 66');
test(reverseStr("quickbrownfoxjumpsoverthelazydog", 8), orbkciuqwnfoxjumhtrevospelazydog, 'Test 67');
test(reverseStr("reverseeverytwochars", 2), ervesreeevrywtocahrs, 'Test 68');
test(reverseStr("thisisaverylongstringthatweneedtoreversethosegmentscorrectly", 8), vasisihterylongsahtgnirttweneedtesreverothosegmeerrocstnctly, 'Test 69');
test(reverseStr("abcde", 1), abcde, 'Test 70');
test(reverseStr("aaaaaabbbbbbcccccc", 6), aaaaaabbbbbbcccccc, 'Test 71');
test(reverseStr("abcdefghij", 20), jihgfedcba, 'Test 72');
test(reverseStr("partialreverse", 7), laitrapreverse, 'Test 73');
test(reverseStr("abcdef", 1), abcdef, 'Test 74');
test(reverseStr("abcdefghij", 1), abcdefghij, 'Test 75');
test(reverseStr("abcdefgh", 8), hgfedcba, 'Test 76');
test(reverseStr("a", 10), a, 'Test 77');
test(reverseStr("zyxwvutsrqponmlkjihgfedcba", 4), wxyzvutsopqrnmlkghijfedcab, 'Test 78');
test(reverseStr("abcdefghij", 6), fedcbaghij, 'Test 79');
test(reverseStr("thisisaverylongstringthatwilltestthefunctiontoseehowitbehaves", 15), gnolyrevasisihtstringthatwillttnoitcnufehttseoseehowitbehaves, 'Test 80');
test(reverseStr("shortstring", 15), gnirtstrohs, 'Test 81');
test(reverseStr("thisisaverylongstringthatweneedtotest", 7), asisihtverylongnirtsgthatwenetotdeest, 'Test 82');
test(reverseStr("aaaaabbbbbaaaaabbbbb", 5), aaaaabbbbbaaaaabbbbb, 'Test 83');
test(reverseStr("ababababababababababababab", 2), baabbaabbaabbaabbaabbaabba, 'Test 84');
test(reverseStr("abcdefghijklmnopqrstuvwxyz", 1), abcdefghijklmnopqrstuvwxyz, 'Test 85');
test(reverseStr("abcdefghijabcdefghij", 7), gfedcbahijabcdjihgfe, 'Test 86');
test(reverseStr("abcdefghijk", 1), abcdefghijk, 'Test 87');
test(reverseStr("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 3), baabcceddeffhgghiikjjkllnmmnooqppqrrtsstuuwvvwxxzyyz, 'Test 88');
test(reverseStr("onetwothreefourfive", 1), onetwothreefourfive, 'Test 89');
test(reverseStr("ab", 2), ba, 'Test 90');
test(reverseStr("pythonprogramminglanguage", 1), pythonprogramminglanguage, 'Test 91');
test(reverseStr("one", 10), eno, 'Test 92');
test(reverseStr("abcdabcdabcd", 2), bacdbacdbacd, 'Test 93');
test(reverseStr("thisisaverylongstringtocheckthebehaviorofthefunction", 8), vasisihterylongscotgnirthecktheboroivahefthefuncnoit, 'Test 94');
test(reverseStr("letsreverseeveryothersegment", 6), erstelverseetoyrevhersegtnem, 'Test 95');
test(reverseStr("abababababababab", 2), baabbaabbaabbaab, 'Test 96');
test(reverseStr("abcdefghijabcdefghijabcdefghij", 12), bajihgfedcbacdefghijabcdjihgfe, 'Test 97');
test(reverseStr("abcdefghijklmnopqrstuvwx", 1), abcdefghijklmnopqrstuvwx, 'Test 98');
test(reverseStr("ab", 1), ab, 'Test 99');
test(reverseStr("abcdefghijklm", 1), abcdefghijklm, 'Test 100');
test(reverseStr("twowords", 2), wtowrods, 'Test 101');
test(reverseStr("abcdefghijklmnopqrstuvw", 1), abcdefghijklmnopqrstuvw, 'Test 102');
test(reverseStr("reverseeveryotherblock", 7), esrevereveryotcolbrehk, 'Test 103');
test(reverseStr("zyxwvutsrqponmlkjihgfedcba", 26), abcdefghijklmnopqrstuvwxyz, 'Test 104');

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
