// Test: 1370. Increasing Decreasing String
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { sortString } = require("./solution");

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

console.log("\n1370. Increasing Decreasing String\n");

test(sortString("rqy"), qry, 'Test 1');
test(sortString("fuvofn"), fnouvf, 'Test 2');
test(sortString("abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 3');
test(sortString("vibhu"), bhiuv, 'Test 4');
test(sortString("xyyzz"), xyzzy, 'Test 5');
test(sortString("ijkpqxz"), ijkpqxz, 'Test 6');
test(sortString("hfnmwy"), fhmnwy, 'Test 7');
test(sortString("tkfjkj"), fjktkj, 'Test 8');
test(sortString("rat"), art, 'Test 9');
test(sortString("a"), a, 'Test 10');
test(sortString("abacabadabacaba"), abcdcbaabbaaaaa, 'Test 11');
test(sortString("ukqay"), akquy, 'Test 12');
test(sortString("spo"), ops, 'Test 13');
test(sortString("abcdabcdabcdabcdabcdabcdabcdabcd"), abcddcbaabcddcbaabcddcbaabcddcba, 'Test 14');
test(sortString("ukqms"), kmqsu, 'Test 15');
test(sortString("leetcode"), cdelotee, 'Test 16');
test(sortString("mnbvcxzlkjhgfdsapoiuytrewq"), abcdefghijklmnopqrstuvwxyz, 'Test 17');
test(sortString("aaaabbbbcccc"), abccbaabccba, 'Test 18');
test(sortString("ggggggg"), ggggggg, 'Test 19');
test(sortString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba, 'Test 20');
test(sortString("abacaba"), abcbaaa, 'Test 21');
test(sortString("aaaazzzz"), azzaazza, 'Test 22');
test(sortString("zyxwvutsrqponmlkjihgfedcba"), abcdefghijklmnopqrstuvwxyz, 'Test 23');
test(sortString("wzyzxwzyzxwzyz"), wxyzzyxwwyzzzz, 'Test 24');
test(sortString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzz"), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbazzzzzzzzzzzzzzz, 'Test 25');
test(sortString("xzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzy"), xyzzyxxyzzyxxyzzyxxyzzyxxyzzyxxyzzyxxyzzyx, 'Test 26');
test(sortString("abacabadabacabadabacabad"), abcddcbaabcdbaabbaaaaaaa, 'Test 27');
test(sortString("rearrange"), aegnrrear, 'Test 28');
test(sortString("abcdefghiabcdefghiabcdefghiabcdefghiabcdefghi"), abcdefghiihgfedcbaabcdefghiihgfedcbaabcdefghi, 'Test 29');
test(sortString("zzzzzyyyyxxxwwvvuuttssrrqqppoonnmmlkkjjiihhggffeedcba"), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmkjihgfexyzzyz, 'Test 30');
test(sortString("zzzzzyyyxxxwwwwvvvuuttssrrqqppoonnmmlkkjjiihhggffeeddccba"), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmkjihgfedcvwxyzzwz, 'Test 31');
test(sortString("qwertypoiuytrewqpoiuytr"), eiopqrtuwyywutrqpoierty, 'Test 32');
test(sortString("aabbccccdddd"), abcddcbacddc, 'Test 33');
test(sortString("ppqqrrsstttuuuuvvvwwxxxyyyzzzz"), pqrstuvwxyzzyxwvutsrqptuvxyzzu, 'Test 34');
test(sortString("thisisaverylongstringthatneedstobesortedbythealgorithm"), abdeghilmnorstvyytsronlihgedbaaeghinorsttsroiheesttett, 'Test 35');
test(sortString("lkjlkjlkjlkjlkjlkjlkjlkjlkjlkjlkjlkjlkjlkj"), jkllkjjkllkjjkllkjjkllkjjkllkjjkllkjjkllkj, 'Test 36');
test(sortString("abcdabcdbcdabcdabcdbcdabcdabcdbcd"), abcddcbaabcddcbaabcddcbabcddcbbcd, 'Test 37');
test(sortString("nnnnoooppqqrrsssttuuuvvwwxxxyyyzzz"), nopqrstuvwxyzzyxwvutsrqponnosuxyzn, 'Test 38');
test(sortString("svilikwd"), diklsvwi, 'Test 39');
test(sortString("ppqpqpqpqpqpqpqpqpqpqpqpqpqpqpqpqpqpqpqpqpqpqpq"), pqqppqqppqqppqqppqqppqqppqqppqqppqqppqqppqqppqp, 'Test 40');
test(sortString("zabzabzabzabzabzabzabzabzabzabzabzabzab"), abzzbaabzzbaabzzbaabzzbaabzzbaabzzbaabz, 'Test 41');
test(sortString("ppqpqpppqpppqpppqpqppppqpqpppppp"), pqqppqqppqqppqqppppppppppppppppp, 'Test 42');
test(sortString("fedcbazyxwvutsrqponmlkjihgfedcba"), abcdefghijklmnopqrstuvwxyzfedcba, 'Test 43');
test(sortString("successfultesting"), cefgilnstuutsecss, 'Test 44');
test(sortString("mmuuxxxaannnltttvvvsssss"), almnstuvxxvutsnmanstvxss, 'Test 45');
test(sortString("abababababababababababab"), abbaabbaabbaabbaabbaabba, 'Test 46');
test(sortString("aabbbcccddddeeeeefffffff"), abcdeffedcbabcdeffedefff, 'Test 47');
test(sortString("aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnooopppqqqrrrssstttuuuvvvwwwxxyyzzz"), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmopqrstuvwz, 'Test 48');
test(sortString("abracadabraabracadabraabracadabra"), abcdrrdcbaabcdrrbaabrrbaaaaaaaaaa, 'Test 49');
test(sortString("xyzzzyyxwvutsrqponmlkjihgfedcba"), abcdefghijklmnopqrstuvwxyzzyxyz, 'Test 50');
test(sortString("abcdabcdbca"), abcddcbaabc, 'Test 51');
test(sortString("zzzzzyyyyyxxxxxxwwwwvvvvuuuuttttssssrrrrqqqqpppplllloooonnnnmmmmlkkkkjjjjiiihhhhggggffffeeeedddccccbbbaaaaaa"), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjhgfecaalxyzxa, 'Test 52');
test(sortString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba, 'Test 53');
test(sortString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbazz, 'Test 54');
test(sortString("abcdefabcdefabcdefabcdef"), abcdeffedcbaabcdeffedcba, 'Test 55');
test(sortString("banana"), abnnaa, 'Test 56');
test(sortString("gggggggggggggggggggggggggg"), gggggggggggggggggggggggggg, 'Test 57');
test(sortString("mmmmnnnnnnnnlllllkkkkjjjjiiihhhhggggffffffeeeeeeeedddddcccccbbbbbaaaaa"), abcdefghijklmnnmlkjihgfedcbaabcdefghijklmnnmlkjhgfedcbaabcdeflnnfeenne, 'Test 58');
test(sortString("mamamamamamamamamamamama"), ammaammaammaammaammaamma, 'Test 59');
test(sortString("pppppppppppppppppppppppppppppppppppppppppppppppppppppp"), pppppppppppppppppppppppppppppppppppppppppppppppppppppp, 'Test 60');
test(sortString("elephantzoo"), aehlnoptzoe, 'Test 61');
test(sortString("elephant"), aehlnpte, 'Test 62');
test(sortString("algorithm"), aghilmort, 'Test 63');
test(sortString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzz"), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbazzzzzz, 'Test 64');
test(sortString("bcaaacbcabcabcabcabcabcabcabc"), abccbaabccbaabccbaabccbaabcca, 'Test 65');
test(sortString("qazwsxedcrfvtgbyhnujmiklopqazwsxedcrfvtgbyhnujmiklop"), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba, 'Test 66');
test(sortString("mississippi"), impsspiissi, 'Test 67');
test(sortString("flfrffvfrmfvffvvfrrfmfffffrfrfrff"), flmrvvrmffrvvrffrrffrffffffffffff, 'Test 68');
test(sortString("abcdefgfedcbabcdefgfedcba"), abcdefggfedcbaabcdeffedcb, 'Test 69');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

