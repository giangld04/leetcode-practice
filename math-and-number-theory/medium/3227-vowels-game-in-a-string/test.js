// Test: 3227. Vowels Game In A String
// 121 test cases from LeetCodeDataset
// Run: node test.js

const { doesAliceWin } = require("./solution");

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

console.log("\n3227. Vowels Game In A String\n");

test(doesAliceWin("b"), false, 'Test 1');
test(doesAliceWin("bcbcbc"), false, 'Test 2');
test(doesAliceWin("leetcodeisfun"), true, 'Test 3');
test(doesAliceWin("abcdefghijklmnopqrstuvwxyz"), true, 'Test 4');
test(doesAliceWin("uoiea"), true, 'Test 5');
test(doesAliceWin("aeiou"), true, 'Test 6');
test(doesAliceWin("a"), true, 'Test 7');
test(doesAliceWin("bbaebebebe"), true, 'Test 8');
test(doesAliceWin("ae"), true, 'Test 9');
test(doesAliceWin("bcdfe"), true, 'Test 10');
test(doesAliceWin("aeiaaioaaaaeiiiiouuuooaauuaeiu"), true, 'Test 11');
test(doesAliceWin(""), false, 'Test 12');
test(doesAliceWin("xyz"), false, 'Test 13');
test(doesAliceWin("bcdf"), false, 'Test 14');
test(doesAliceWin("bbcd"), false, 'Test 15');
test(doesAliceWin("abcdefgh"), true, 'Test 16');
test(doesAliceWin("abcd"), true, 'Test 17');
test(doesAliceWin("bcbcbcbcbcbcbc"), false, 'Test 18');
test(doesAliceWin("abecidofug"), true, 'Test 19');
test(doesAliceWin("aeaaaeaa"), true, 'Test 20');
test(doesAliceWin("uuuuuu"), true, 'Test 21');
test(doesAliceWin("vozxqwx"), true, 'Test 22');
test(doesAliceWin("aabbccddeeff"), true, 'Test 23');
test(doesAliceWin("aabbcc"), true, 'Test 24');
test(doesAliceWin("bvdfndkvflspvlvhlmvfyckqjgnvjcjgvdpelbvclvsgjgygsvjvlp"), true, 'Test 25');
test(doesAliceWin("leetcoder"), true, 'Test 26');
test(doesAliceWin("aeiaeiaeiaeia"), true, 'Test 27');
test(doesAliceWin("aabbccdd"), true, 'Test 28');
test(doesAliceWin("bcdfg"), false, 'Test 29');
test(doesAliceWin("zyxwvutsrqponmlkjihgfedcba"), true, 'Test 30');
test(doesAliceWin("bcd"), false, 'Test 31');
test(doesAliceWin("bababababababababa"), true, 'Test 32');
test(doesAliceWin("aabbccddeeefffrrtgyhyuujuyuyuyukjhjhgfdszxcvbnmaaeiou"), true, 'Test 33');
test(doesAliceWin("bbbbbaaaaaaaaa"), true, 'Test 34');
test(doesAliceWin("bbbbbaaaaabbbbbbbaaaaaaabbbbaaaaabbbbbaaaaaaabbbbbaaaaaaabbbbbaaaaaa"), true, 'Test 35');
test(doesAliceWin("anagram"), true, 'Test 36');
test(doesAliceWin("thisstringhasmanyvowelsaeiouanothersequenceofvowelsaeiou"), true, 'Test 37');
test(doesAliceWin("leetcodeiscrazyandfun"), true, 'Test 38');
test(doesAliceWin("aabbccddeeefffrrtgyhyuujuyuyuyukjhjhgfdszxcvbnm"), true, 'Test 39');
test(doesAliceWin("aliceandbobareplayingagame"), true, 'Test 40');
test(doesAliceWin("bbbbbbaaaaaabbbbbbaaaaaabbbbbbaaaaaabbbbbbaaaaaabbbbbbaaaaaabbbbbbaaaaaa"), true, 'Test 41');
test(doesAliceWin("leetcodedebuggingisfun"), true, 'Test 42');
test(doesAliceWin("vwxyz"), false, 'Test 43');
test(doesAliceWin("abacadaeafagahaiajakalamanaoapaqarasatauavawaxayaza"), true, 'Test 44');
test(doesAliceWin("consonant"), true, 'Test 45');
test(doesAliceWin("aoeuiuiaoeuiuiaoeuiuiaoeuiuiaoeuiuiaoeuiuiaoeuiuiaoeuiuiaoeuiuiaoeuiuiaoeuiuiaoeuiui"), true, 'Test 46');
test(doesAliceWin("aeiaaioaaaaeiiiiouuuooaauuaeiuzyxwvutsrqponmlkjihgfedcba"), true, 'Test 47');
test(doesAliceWin("vozdfvoazefovoziaovozifvoaeiofvaeivoaeiofvaeivoaeiofvaeivoaeiofvaeivoaeiof"), true, 'Test 48');
test(doesAliceWin("zzzaaaiiiooouuuummmllooonnngggfffddeeerrrtttyy"), true, 'Test 49');
test(doesAliceWin("aebcideofuigohukimouoeqirouusotovowuy"), true, 'Test 50');
test(doesAliceWin("aeiouaeiouaeiouaeiouaeiou"), true, 'Test 51');
test(doesAliceWin("thisisaverylongstringwithseveralvowels"), true, 'Test 52');
test(doesAliceWin("bcdfghjklmnpqrstvwxyzaeiouaeiouaeiouaeiouaeiou"), true, 'Test 53');
test(doesAliceWin("optimallyplayingthegamewithvowels"), true, 'Test 54');
test(doesAliceWin("qwertyuiopasdfghjklzxcvbnm"), true, 'Test 55');
test(doesAliceWin("evennumberofvowels"), true, 'Test 56');
test(doesAliceWin("bbaaaacceeeeeddooouuuiiiaaaa"), true, 'Test 57');
test(doesAliceWin("aaaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), true, 'Test 58');
test(doesAliceWin("abcdefghijkllllllllllmnopqrstuvwxyz"), true, 'Test 59');
test(doesAliceWin("aeiaaioaaaaeiiiiouuuooaauuaeiuuuuuuuuuuuuuuuuuuuuuuu"), true, 'Test 60');
test(doesAliceWin("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), true, 'Test 61');
test(doesAliceWin("bcaovkyutrfghjnmlopaeiouaeiouaeiou"), true, 'Test 62');
test(doesAliceWin("programmingisfun"), true, 'Test 63');
test(doesAliceWin("leetcodelovebaboon"), true, 'Test 64');
test(doesAliceWin("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), true, 'Test 65');
test(doesAliceWin("abcdefghijklmnopqrstuvwxyzaeiouabcdefghijklmnopqrstuvwxyz"), true, 'Test 66');
test(doesAliceWin("leetcodeleetcode"), true, 'Test 67');
test(doesAliceWin("aeioubcdfghjklmnpqrstvwxyz"), true, 'Test 68');
test(doesAliceWin("aeiouaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 69');
test(doesAliceWin("leetcodeword"), true, 'Test 70');
test(doesAliceWin("aeiouaeiouaeiouaeiou"), true, 'Test 71');
test(doesAliceWin("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), true, 'Test 72');
test(doesAliceWin("abcdefghijklnmopqrstuvwxyz"), true, 'Test 73');
test(doesAliceWin("abcdefghijkloiuytrpqweoiuytrewqoiuytrewq"), true, 'Test 74');
test(doesAliceWin("leetcoderbbaaaabbaaabbbaaaabbaaabbbaaaabbaaabbbaaaab"), true, 'Test 75');
test(doesAliceWin("aeiouzyxwvutsrqponmlkjihgfedcb"), true, 'Test 76');
test(doesAliceWin("aeiouaeiouaeiouaeiouaeiouaeiouaeiou"), true, 'Test 77');
test(doesAliceWin("aeioubcdfghjklmnpqrstvwxyzaeioubcdfghjklmnpqrstvwxyzaeioubcdfghjklmnpqrstvwxyz"), true, 'Test 78');
test(doesAliceWin("thisisalongstringwithmanyvowelsoooeiuaeiou"), true, 'Test 79');
test(doesAliceWin("uuuuuaaaaaeeeeeooooouuuuuaaaaa"), true, 'Test 80');
test(doesAliceWin("vowel"), true, 'Test 81');
test(doesAliceWin("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), true, 'Test 82');
test(doesAliceWin("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), true, 'Test 83');
test(doesAliceWin("aevbocudifoguhoeaio"), true, 'Test 84');
test(doesAliceWin("babababababababababababababababababababababababababababababababababa"), true, 'Test 85');
test(doesAliceWin("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefghijklmnopqrstuvwxyz"), true, 'Test 86');
test(doesAliceWin("bbaaaacccceeeeedddd"), true, 'Test 87');
test(doesAliceWin("aevbocudifoguhoeaioaaaaeeeeeooooouuuuu"), true, 'Test 88');
test(doesAliceWin("eiouaeiouaeiou"), true, 'Test 89');
test(doesAliceWin("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 90');
test(doesAliceWin("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 91');
test(doesAliceWin("bcdfghjklmnpqrstvwxyz"), false, 'Test 92');
test(doesAliceWin("vowelsareimportantinthisgame"), true, 'Test 93');
test(doesAliceWin("aabbccddeeffgg"), true, 'Test 94');
test(doesAliceWin("bbbbbaaaaabbbbbbaaaaabbbbbaaaa"), true, 'Test 95');
test(doesAliceWin("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaeiouaeiouaeiouaeiouaeiouaeiou"), true, 'Test 96');
test(doesAliceWin("leetcodeisreallyfun"), true, 'Test 97');
test(doesAliceWin("abcdefghij"), true, 'Test 98');
test(doesAliceWin("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), true, 'Test 99');
test(doesAliceWin("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 100');
test(doesAliceWin("zxcvbnmlkjhgfdsapoiuytrewq"), true, 'Test 101');
test(doesAliceWin("sequencepalindrome"), true, 'Test 102');
test(doesAliceWin("zaeiouzaeiouzaeiouzaeiou"), true, 'Test 103');
test(doesAliceWin("zxcvbnmasdfghjklqwertyuiopmnbvcxzlkjhgfdsapoiuytrewqmnbvcxzlkjhgfdsapoiuytrew"), true, 'Test 104');
test(doesAliceWin("lkjihgfedcbponmlkjihgfedcba"), true, 'Test 105');
test(doesAliceWin("abcdefgheijouaeiouxyz"), true, 'Test 106');
test(doesAliceWin("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaeiou"), true, 'Test 107');
test(doesAliceWin("aaabbbcccdddaabbccddeee"), true, 'Test 108');
test(doesAliceWin("vowelsareaeiou"), true, 'Test 109');
test(doesAliceWin("complexsubstringwithvariousvowels"), true, 'Test 110');
test(doesAliceWin("aeiaaioaaaaeiiiiouuuooaauuaeiuzyxwvutsrqponmlkjihgfedcbaaabbccddeeefffrrtgyhyuujuyuyuyukjhjhgfdszxcvbnmaaeiou"), true, 'Test 111');
test(doesAliceWin("consonantsnvbnmnbmhngftrds"), true, 'Test 112');
test(doesAliceWin("bbaaaabbaaabbbaaaabbaaabbbaaaabbaaabbbaaaab"), true, 'Test 113');
test(doesAliceWin("bcaovkyutrfghjnmlop"), true, 'Test 114');
test(doesAliceWin("aabbccddeeefffagggihiiiijjjjkkkkllllmmmmnnnnooooo"), true, 'Test 115');
test(doesAliceWin("aaaaabbbbbcccccdddddaaaaabbbbb"), true, 'Test 116');
test(doesAliceWin("oddnumberofvowels"), true, 'Test 117');
test(doesAliceWin("bbbaaaacceeeeeddooouuuiiiaaaabbbccc"), true, 'Test 118');
test(doesAliceWin("aebcdeoiufghijklmnoptqrstuwyxz"), true, 'Test 119');
test(doesAliceWin("aeiouvwxyzaeiouvwxyzaeiouvwxyz"), true, 'Test 120');
test(doesAliceWin("aliceandbob"), true, 'Test 121');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

