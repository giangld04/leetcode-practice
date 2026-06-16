// Test: 791. Custom Sort String
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { customSortString } = require("./solution");

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

console.log("\n791. Custom Sort String\n");

test(customSortString("zyx", "zyxwvut"), zwvutyx, 'Test 1');
test(customSortString("abcdefg", "gfedcba"), abcdefg, 'Test 2');
test(customSortString("xyz", "abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 3');
test(customSortString("mnopqr", "abcdefghij"), abcdefghij, 'Test 4');
test(customSortString("abcdef", "fedcba"), abcdef, 'Test 5');
test(customSortString("", "abcdefg"), abcdefg, 'Test 6');
test(customSortString("zyx", "abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwzyx, 'Test 7');
test(customSortString("abc", ""), , 'Test 8');
test(customSortString("a", "b"), b, 'Test 9');
test(customSortString("", "abc"), abc, 'Test 10');
test(customSortString("xyz", "aabbcc"), aabbcc, 'Test 11');
test(customSortString("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), zyxwvutsrqponmlkjihgfedcba, 'Test 12');
test(customSortString("abc", "abc"), abc, 'Test 13');
test(customSortString("cba", "abcd"), cdba, 'Test 14');
test(customSortString("zyx", "xyz"), zyx, 'Test 15');
test(customSortString("abcd", "zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfeabcd, 'Test 16');
test(customSortString("qrstuv", "uvwxyz"), wxyzuv, 'Test 17');
test(customSortString("a", "aabbcc"), aabbcc, 'Test 18');
test(customSortString("xyz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 19');
test(customSortString("abcdefg", ""), , 'Test 20');
test(customSortString("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), abcdefghijklmnopqrstuvwxyz, 'Test 21');
test(customSortString("mnopqr", "abcdefghijklzzzzzzzzzzzzzzzzzzzzzzzzzz"), abcdefghijklzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 22');
test(customSortString("bcafg", "abcd"), bdca, 'Test 23');
test(customSortString("", "anything"), anything, 'Test 24');
test(customSortString("xyz", "zyxzyxzyx"), xxxyyyzzz, 'Test 25');
test(customSortString("poiuytrewqlkjhgfdsamnbvcxz", "thequickbrownfoxjumpsoverthelazydog"), pooooiuuyttrreeewqlkjhhgfdsamnbvcxz, 'Test 26');
test(customSortString("acegikm", "fedcbahjilnmporqstuvwxyz"), fdbahjlnporqstuvwxyzceim, 'Test 27');
test(customSortString("ghjklm", "abcdefghijklmnopqrstuvmnopqrstuvwxyz"), abcdefginopqrstuvnopqrstuvwxyzhjklmm, 'Test 28');
test(customSortString("qrstuv", "qwertyuiopasdfghjklzxcvbnm"), qweyiopadfghjklzxcbnmrstuv, 'Test 29');
test(customSortString("abcdef", "fedcbahgfedcba"), ahgabbccddeeff, 'Test 30');
test(customSortString("pqrs", "zyxwvutsrqponmlkjihgfedcba"), zyxwvutponmlkjihgfedcbaqrs, 'Test 31');
test(customSortString("ghijklmnop", "fedcbazxcvbnmopqrstuvw"), fedcbazxcvbqrstuvwmnop, 'Test 32');
test(customSortString("abcdefghijklmnop", "abcdefghijklmnopabcdefghijklmnop"), aabbccddeeffgghhiijjkkllmmnnoopp, 'Test 33');
test(customSortString("zyxwvutsrqponmlkjihgfedcba", "aaabbbcccddd"), dddcccbbbaaa, 'Test 34');
test(customSortString("aeiouy", "aeiouyaeiouyaeiouyaeiouy"), aaaaeeeeiiiioooouuuuyyyy, 'Test 35');
test(customSortString("acegikmoqsuwy", "abcdefghijklmnopqrstuvwxyz"), abdfhjlnprtvxzcegikmoqsuwy, 'Test 36');
test(customSortString("abcdef", "ghijklmnopqrstuvwxyz"), ghijklmnopqrstuvwxyz, 'Test 37');
test(customSortString("qweasdzxc", "sazxqwecvfr"), qvfrweaszxc, 'Test 38');
test(customSortString("abcd", "aabbccddeeffaabbccddeeff"), aaeeffaaeeffbbbbccccdddd, 'Test 39');
test(customSortString("fjlad", "flafjlajldalfajfladflajfl"), ffffffjjjjlllllllaaaaaadd, 'Test 40');
test(customSortString("abcdefg", "zyxcba"), zyxabc, 'Test 41');
test(customSortString("xyz", "xyzxyzxyzxyzxyz"), xxxxxyyyyyzzzzz, 'Test 42');
test(customSortString("abcde", "edcbafghijklmnopqrstuvwxyz"), afghijklmnopqrstuvwxyzbcde, 'Test 43');
test(customSortString("qrstuv", "thequickbrownfoxjumpsoverthelazydog"), heqickbownfoxjmpoehelazydogrrsttuuv, 'Test 44');
test(customSortString("abcd", "dbcaabcd"), aabbccdd, 'Test 45');
test(customSortString("qwertyuiopasdfghjklzxcvbnm", "thequickbrownfoxjumpsoverthelazydog"), qweeerrttyuuioooopasdfghhjklzxcvbnm, 'Test 46');
test(customSortString("bac", "abcabcabc"), bbbaaaccc, 'Test 47');
test(customSortString("abcdefghijklmnopqrstuvwxy", "abcdefghijklmnopqrstuvwxyz"), azbcdefghijklmnopqrstuvwxy, 'Test 48');
test(customSortString("jkl", "thequickbrownfoxjumpsoverthelazydog"), thequicbrownfoxjumpsovertheazydogkl, 'Test 49');
test(customSortString("abc", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aaddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzbbcc, 'Test 50');
test(customSortString("bdfhjlnprtvxz", "abcdefghijklmnopqrstuvwxyz"), abcegikmoqsuwydfhjlnprtvxz, 'Test 51');
test(customSortString("xyz", "abcdef"), abcdef, 'Test 52');
test(customSortString("qrstuvw", "vwutsrqponmlkjihgfedcba"), qponmlkjihgfedcbarstuvw, 'Test 53');
test(customSortString("qrstuvw", "zyxwvutsrqponmlkjihgfedcba"), zyxqponmlkjihgfedcbarstuvw, 'Test 54');
test(customSortString("vwxyz", "abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 55');
test(customSortString("abc", "cccbbaaa"), aaabbccc, 'Test 56');
test(customSortString("mnop", "wertyuiopasdfghjklzxcvbnm"), wertyuiasdfghjklzxcvbmnop, 'Test 57');
test(customSortString("mnopqr", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzmnopqr"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzmnopqr, 'Test 58');
test(customSortString("abcdef", "fedcbafedcbafedcbafedcba"), aaaabbbbccccddddeeeeffff, 'Test 59');
test(customSortString("xyzabc", "zyxwvutsrqponmlkjihgfedcba"), xwvutsrqponmlkjihgfedyzabc, 'Test 60');
test(customSortString("bdfhjlnprtvxz", "aegikmoqsuwy"), aegikmoqsuwy, 'Test 61');
test(customSortString("aeiou", "thequickbrownfoxjumpsoverthelazydog"), thqckbrwnfxjmpsvrthlazydgeeeioooouu, 'Test 62');
test(customSortString("mnopqr", "rmqponlksjihgfedcba"), mlksjihgfedcbanopqr, 'Test 63');
test(customSortString("qwer", "qwertyuiopasdfghjklzxcvbnm"), qtyuiopasdfghjklzxcvbnmwer, 'Test 64');
test(customSortString("pqrs", "pqrspqrspqrspqrspqrs"), pppppqqqqqrrrrrsssss, 'Test 65');
test(customSortString("xyz", "abcxyzdefxyz"), abcxdefxyyzz, 'Test 66');
test(customSortString("abcdefghijklm", "nopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), nopqrstuvwxyzzyxwvutsrqponabcdefghijklm, 'Test 67');
test(customSortString("xyz", "aabbccxxzzyy"), aabbccxxyyzz, 'Test 68');
test(customSortString("jihgfedcba", "abcdefghijklmnopqrstuvwxyz"), jklmnopqrstuvwxyzihgfedcba, 'Test 69');
test(customSortString("lmnop", "lkjhgfedcba"), lkjhgfedcba, 'Test 70');
test(customSortString("qwertyuiopasdfghjklzxcvbnm", "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), qqwweerrttyyuuiiooppaassddffgghhjjkkllzzxxccvvbbnnmm, 'Test 71');
test(customSortString("zxcvbnmlkjhgfdsapoiuytrewq", "qwertyuiopasdfghjklzxcvbnm"), zxcvbnmlkjhgfdsapoiuytrewq, 'Test 72');
test(customSortString("a", "aaaaaaaa"), aaaaaaaa, 'Test 73');
test(customSortString("qrstuv", "qoprtusvklmijnhgfeabcdxyz"), qopklmijnhgfeabcdxyzrstuv, 'Test 74');
test(customSortString("acegikmoqsuwy", "zyxwvutsrqponmlkjihgfedcba"), zxvtrpnljhfdbacegikmoqsuwy, 'Test 75');
test(customSortString("abcdefg", "zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihabcdefg, 'Test 76');
test(customSortString("abcd", "ddcbaaabbccdddddd"), aaabbbcccdddddddd, 'Test 77');
test(customSortString("mno", "lkjhgfdcbazyxwvutsrqponmlkjihgfedcba"), lkjhgfdcbazyxwvutsrqpmlkjihgfedcbano, 'Test 78');
test(customSortString("pqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 79');
test(customSortString("zyxwvutsrqponmlkjihgfedcba", "thequickbrownfoxjumpsoverthelazydog"), zyxwvuuttsrrqpoooonmlkjihhgfeeedcba, 'Test 80');
test(customSortString("mnop", "pnmlkjoiehgfcdcba"), mlkjiehgfcdcbanop, 'Test 81');
test(customSortString("ace", "aaabbbcccddd"), aaabbbdddccc, 'Test 82');
test(customSortString("abcd", "dcbaedcba"), aeabbccdd, 'Test 83');
test(customSortString("abcxyz", "xyzabczyxcba"), aabbccxxyyzz, 'Test 84');
test(customSortString("mnopqr", "mnopqrabcdefghijklmnop"), mabcdefghijklmnnooppqr, 'Test 85');
test(customSortString("abcdefghij", "zzzzzyyyxxxwwwwvvvuuuuttttssssrrrrqqqqppppooolllkkkkjjjjiijjhhhgggfffeeedddccccbbbaaaa"), zzzzzyyyxxxwwwwvvvuuuuttttssssrrrrqqqqppppooolllkkkkaaaabbbccccdddeeefffggghhhiijjjjjj, 'Test 86');
test(customSortString("zyxwvutsrqponmlkjihgfedcba", "fedcba"), fedcba, 'Test 87');
test(customSortString("qaz", "abcdefghijklmnopqrstuvwxyz"), bcdefghijklmnopqrstuvwxyaz, 'Test 88');
test(customSortString("aeiou", "abcdefghijklmnopqrstuvwxyz"), abcdfghjklmnpqrstvwxyzeiou, 'Test 89');
test(customSortString("mnopqr", "rqponmlkjihgfedcba"), mlkjihgfedcbanopqr, 'Test 90');
test(customSortString("xyzabc", "fedcba"), fedabc, 'Test 91');
test(customSortString("abc", "ccccbaaabbbccc"), aaabbbbccccccc, 'Test 92');
test(customSortString("abcdef", "fedcbafghijklmnopqrstuvwxyz"), aghijklmnopqrstuvwxyzbcdeff, 'Test 93');
test(customSortString("a", "a"), a, 'Test 94');
test(customSortString("bzdx", "abcdexyz"), abceyzdx, 'Test 95');
test(customSortString("mnbvcxzlkjhgfdsapoiuytrewq", "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), mmnnbbvvccxxzzllkkjjhhggffddssaappooiiuuyyttrreewwqq, 'Test 96');
test(customSortString("uvwxy", "uvwxyuvwxyuvwxyuvwxyuvwxyuvwxy"), uuuuuuvvvvvvwwwwwwxxxxxxyyyyyy, 'Test 97');
test(customSortString("abcdefghij", "jihgfedcba"), abcdefghij, 'Test 98');
test(customSortString("t", "tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"), tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt, 'Test 99');
test(customSortString("mnop", "mnopmnopmnopmnopmnopmnopmnop"), mmmmmmmnnnnnnnoooooooppppppp, 'Test 100');
test(customSortString("abcdefgh", "hgfedcba"), abcdefgh, 'Test 101');
test(customSortString("a", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 102');
test(customSortString("tuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), tsrqponmlkjihgfedcbauvwxyz, 'Test 103');
test(customSortString("abc", "zzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 104');
test(customSortString("bdfhjlnprtvxz", "zyxwvutsrqponmlkjihgfedcba"), ywusqomkigecbadfhjlnprtvxz, 'Test 105');
test(customSortString("fedcba", "abcdef"), fedcba, 'Test 106');
test(customSortString("gfedcba", "zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 107');
test(customSortString("mnop", "abmncdopefqrsgthijkl"), abmcdefqrsgthijklnop, 'Test 108');
test(customSortString("nvmb", "nvbnvmbvmbnnbmvmbnb"), nnnnnvvvvmmmmbbbbbb, 'Test 109');
test(customSortString("mnopqr", "mnopqrstuvwxynmlkjihgfedcba"), mstuvwxymlkjihgfedcbannopqr, 'Test 110');
test(customSortString("abcxyz", "zyxcba"), abcxyz, 'Test 111');
test(customSortString("qrst", "trqs"), qrst, 'Test 112');
test(customSortString("xyzuvw", "zzzzzyyyxxxwwwwvvvuuuuttttssssrrrrqqqqppppooolllkkkkjjjjiijjhhhgggfffeeedddccccbbbaaaa"), xxxttttssssrrrrqqqqppppooolllkkkkjjjjiijjhhhgggfffeeedddccccbbbaaaayyyzzzzzuuuuvvvwwww, 'Test 113');
test(customSortString("z", "zzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 114');
test(customSortString("qz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 115');
test(customSortString("thq", "thequickbrownfoxjumpsoverthelazydog"), teuickbrownfoxjumpsovertelazydoghhq, 'Test 116');
test(customSortString("zyxwvutsrqponmlkjihgfedcba", "zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 117');

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
