// Test: 316. Remove Duplicate Letters
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { removeDuplicateLetters } = require("./solution");

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

console.log("\n316. Remove Duplicate Letters\n");

test(removeDuplicateLetters("abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 1');
test(removeDuplicateLetters("rumeblidofervobenly"), rumbidfevonly, 'Test 2');
test(removeDuplicateLetters("thesqtitxyetpxooxlqskyae"), heitpoxlqskya, 'Test 3');
test(removeDuplicateLetters("thesqquishs"), tequihs, 'Test 4');
test(removeDuplicateLetters("a"), a, 'Test 5');
test(removeDuplicateLetters("russell"), rusel, 'Test 6');
test(removeDuplicateLetters("cbacdcbc"), acdb, 'Test 7');
test(removeDuplicateLetters("zyxzyzzyxzy"), xyz, 'Test 8');
test(removeDuplicateLetters("xyz"), xyz, 'Test 9');
test(removeDuplicateLetters("leetcode"), letcod, 'Test 10');
test(removeDuplicateLetters("abacbabcabacbacbacbabcaba"), abc, 'Test 11');
test(removeDuplicateLetters("zyxzyxzyxzyxzyx"), xyz, 'Test 12');
test(removeDuplicateLetters("banana"), ban, 'Test 13');
test(removeDuplicateLetters("zyxzyxzyx"), xyz, 'Test 14');
test(removeDuplicateLetters("abcd"), abcd, 'Test 15');
test(removeDuplicateLetters("bcabc"), abc, 'Test 16');
test(removeDuplicateLetters("bbaaccaabb"), acb, 'Test 17');
test(removeDuplicateLetters("ecbacba"), eacb, 'Test 18');
test(removeDuplicateLetters("aabbcc"), abc, 'Test 19');
test(removeDuplicateLetters("abacb"), abc, 'Test 20');
test(removeDuplicateLetters("sphnsdczdcphqvh"), hnsczdpqv, 'Test 21');
test(removeDuplicateLetters("xyzzyx"), xyz, 'Test 22');
test(removeDuplicateLetters("eliminate"), elimnat, 'Test 23');
test(removeDuplicateLetters("bcaacbcbabcbabcbbbcabcabcb"), abc, 'Test 24');
test(removeDuplicateLetters("cccbba"), cba, 'Test 25');
test(removeDuplicateLetters("zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 26');
test(removeDuplicateLetters("ababcabcabc"), abc, 'Test 27');
test(removeDuplicateLetters("vvvvvvvvvvvvvvvvvvvvvvvvvv"), v, 'Test 28');
test(removeDuplicateLetters("xyzzyxwvutsrqponmlkjihgfedcbazyxzyxwvutsrqponmlkjihgfedcba"), axzywvutsrqponmlkjihgfedcb, 'Test 29');
test(removeDuplicateLetters("eleven"), elvn, 'Test 30');
test(removeDuplicateLetters("abcabcabcabc"), abc, 'Test 31');
test(removeDuplicateLetters("mississsipissippi"), mips, 'Test 32');
test(removeDuplicateLetters("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"), k, 'Test 33');
test(removeDuplicateLetters("thisisaverycomplicatedstringwithmultiplesamecharacters"), averycodingwhmulpst, 'Test 34');
test(removeDuplicateLetters("abcdabcdabcd"), abcd, 'Test 35');
test(removeDuplicateLetters("vkgdffubqyfvcl"), kgdfubqyvcl, 'Test 36');
test(removeDuplicateLetters("zyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxy"), xyz, 'Test 37');
test(removeDuplicateLetters("thisisareallylongstringwithsomerepeatedcharacters"), aelyginwhompdcrts, 'Test 38');
test(removeDuplicateLetters("aaaaabbbbccccdddd"), abcd, 'Test 39');
test(removeDuplicateLetters("abcdabc"), abcd, 'Test 40');
test(removeDuplicateLetters("abcdefghxyzzyxwvutsrqponmlkjihgfedcba"), abcdefghxyzwvutsrqponmlkji, 'Test 41');
test(removeDuplicateLetters("abcdcbadef"), abcdef, 'Test 42');
test(removeDuplicateLetters("elqodmxonqkdio"), eldmxnqkio, 'Test 43');
test(removeDuplicateLetters("rclcar"), clar, 'Test 44');
test(removeDuplicateLetters("aaabbbccc"), abc, 'Test 45');
test(removeDuplicateLetters("abcdefghifghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 46');
test(removeDuplicateLetters("zabaxyzc"), abxyzc, 'Test 47');
test(removeDuplicateLetters("zyxzyxzyxzyxcba"), xyzcba, 'Test 48');
test(removeDuplicateLetters("abababababababab"), ab, 'Test 49');
test(removeDuplicateLetters("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), abcdefghijklmnopqrstuvwxyz, 'Test 50');
test(removeDuplicateLetters("dedededededededed"), de, 'Test 51');
test(removeDuplicateLetters("qwertyuiopasdfghjklzxcvbnmzxcvbnmlkjhgfdsapoiuytrewq"), abmzxcvnlkjhgfdspoiuytrewq, 'Test 52');
test(removeDuplicateLetters("abcdabcdabcdabcd"), abcd, 'Test 53');
test(removeDuplicateLetters("limits"), limts, 'Test 54');
test(removeDuplicateLetters("abcdzyxwvutsrqponmlkjihgfedcba"), abcdzyxwvutsrqponmlkjihgfe, 'Test 55');
test(removeDuplicateLetters("zyzzyzxzyzy"), xyz, 'Test 56');
test(removeDuplicateLetters("aabbbccddeeefffggghhhiiijjjkkkllmmmnnnooopppqqrrssttuuvvwwxxyyzz"), abcdefghijklmnopqrstuvwxyz, 'Test 57');
test(removeDuplicateLetters("zzyyxxwwvvttsrqqponnmlkkjjiihggffeeddccbbaa"), zyxwvtsrqponmlkjihgfedcba, 'Test 58');
test(removeDuplicateLetters("rsvwzxcvbnmasdfghjklpoiuytrewq"), rsvwzxcbnmadfghjklpoiuyteq, 'Test 59');
test(removeDuplicateLetters("abacabadabacaba"), abcd, 'Test 60');
test(removeDuplicateLetters("rquyaedetziwq"), rquyadetziw, 'Test 61');
test(removeDuplicateLetters("dabdc"), abdc, 'Test 62');
test(removeDuplicateLetters("pppippiiqipqqipiqipiiiiii"), ipq, 'Test 63');
test(removeDuplicateLetters("abacbabc"), abc, 'Test 64');
test(removeDuplicateLetters("abcdexyzabcdexyz"), abcdexyz, 'Test 65');
test(removeDuplicateLetters("abcdexyzvwxycba"), abcdexyzvw, 'Test 66');
test(removeDuplicateLetters("eccbbbbdec"), bdec, 'Test 67');
test(removeDuplicateLetters("axbxa"), abx, 'Test 68');
test(removeDuplicateLetters("rhythm"), rhytm, 'Test 69');
test(removeDuplicateLetters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), abcdefghijklmnopqrstuvwxyz, 'Test 70');
test(removeDuplicateLetters("cbacdcbcxd"), abcxd, 'Test 71');
test(removeDuplicateLetters("pppqqqrrrssstttuuuvvvwwwxxxxyyyyzzzz"), pqrstuvwxyz, 'Test 72');
test(removeDuplicateLetters("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), z, 'Test 73');
test(removeDuplicateLetters("elgoog"), elgo, 'Test 74');
test(removeDuplicateLetters("abcdacdabcde"), abcde, 'Test 75');
test(removeDuplicateLetters("cdadabcc"), adbc, 'Test 76');
test(removeDuplicateLetters("abcdxyzzyxwvutsrqponmlkjihgfedcba"), abcdxyzwvutsrqponmlkjihgfe, 'Test 77');
test(removeDuplicateLetters("nincompoop"), incmop, 'Test 78');
test(removeDuplicateLetters("zzzzyyyxxxwwvvuuttssrrqqppoonnmmllkkiijjhhhgggffffeeeedddccccbbbaaa"), zyxwvutsrqponmlkijhgfedcba, 'Test 79');
test(removeDuplicateLetters("leetcodeloveleetcode"), cdelovt, 'Test 80');
test(removeDuplicateLetters("abcdefghijabcdejk"), abcdefghijk, 'Test 81');
test(removeDuplicateLetters("abcdedcba"), abcde, 'Test 82');
test(removeDuplicateLetters("aabbbccc"), abc, 'Test 83');
test(removeDuplicateLetters("qwertyuiopasdfghjklzxcvbnmzyxcvbnmlkjhgfdsapoiuytrewq"), abmzxcvnlkjhgfdspoiuytrewq, 'Test 84');
test(removeDuplicateLetters("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"), abmqwertyuiopsdfghjklzxcvn, 'Test 85');
test(removeDuplicateLetters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), abcdefghijklmnopqrstuvwxyz, 'Test 86');
test(removeDuplicateLetters("poiuytrewqlkjhgfdsazxcvbnmqwertyuioplkjhgfdsazxcvbnm"), abmqwertyuioplkjhgfdszxcvn, 'Test 87');
test(removeDuplicateLetters("qwertyuiopasdfghjklzxcvbnmnbvcxzlkjhgfdsapoiuytrewq"), abmnvcxzlkjhgfdspoiuytrewq, 'Test 88');
test(removeDuplicateLetters("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 89');
test(removeDuplicateLetters("abacabadabcabc"), abcd, 'Test 90');
test(removeDuplicateLetters("abacbdcba"), abcd, 'Test 91');
test(removeDuplicateLetters("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), a, 'Test 92');
test(removeDuplicateLetters("mississippi"), misp, 'Test 93');
test(removeDuplicateLetters("abcdexyzzyxwvtsrqponmlkjihgfe"), abcdexyzwvtsrqponmlkjihgf, 'Test 94');
test(removeDuplicateLetters("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), azyxwvutsrqponmlkjihgfedcb, 'Test 95');
test(removeDuplicateLetters("aaaaaaaabbbbbbbbccccccccddddddddeeeeeeeefffffffff"), abcdef, 'Test 96');
test(removeDuplicateLetters("ababababababababababababababababababab"), ab, 'Test 97');
test(removeDuplicateLetters("zyxzyxzyxzyx"), xyz, 'Test 98');
test(removeDuplicateLetters("razonator"), azntor, 'Test 99');

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
