// Test: 1941. Check If All Characters Have Equal Number Of Occurrences
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { areOccurrencesEqual } = require("./solution");

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

console.log("\n1941. Check If All Characters Have Equal Number Of Occurrences\n");

test(areOccurrencesEqual("aabbccc"), false, 'Test 1');
test(areOccurrencesEqual("abacbc"), true, 'Test 2');
test(areOccurrencesEqual("abcabcabc"), true, 'Test 3');
test(areOccurrencesEqual("qqqq"), true, 'Test 4');
test(areOccurrencesEqual("aabbcc"), true, 'Test 5');
test(areOccurrencesEqual("zzzzzzzzzz"), true, 'Test 6');
test(areOccurrencesEqual("aabbc"), false, 'Test 7');
test(areOccurrencesEqual("a"), true, 'Test 8');
test(areOccurrencesEqual("abc"), true, 'Test 9');
test(areOccurrencesEqual(""), false, 'Test 10');
test(areOccurrencesEqual("aabb"), true, 'Test 11');
test(areOccurrencesEqual("aabbccddeeff"), true, 'Test 12');
test(areOccurrencesEqual("abcdabcd"), true, 'Test 13');
test(areOccurrencesEqual("zzz"), true, 'Test 14');
test(areOccurrencesEqual("xyz"), true, 'Test 15');
test(areOccurrencesEqual("aaabb"), false, 'Test 16');
test(areOccurrencesEqual("hello"), false, 'Test 17');
test(areOccurrencesEqual("thisisnotagoodstring"), false, 'Test 18');
test(areOccurrencesEqual("aaaabbbbccccdddd"), true, 'Test 19');
test(areOccurrencesEqual("almostgoodbutoneextrab"), false, 'Test 20');
test(areOccurrencesEqual("mnopqrstuvwxyzz"), false, 'Test 21');
test(areOccurrencesEqual("uniquecharactersabcdefghijklmnopqrstuvwxyz"), false, 'Test 22');
test(areOccurrencesEqual("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 23');
test(areOccurrencesEqual("qwertyuioplkjhgfdsazxcvbnm"), true, 'Test 24');
test(areOccurrencesEqual("kjhgfdsazxcvbnmlpoiuytrewq"), true, 'Test 25');
test(areOccurrencesEqual("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), true, 'Test 26');
test(areOccurrencesEqual("llllkkkkjjjjiiiihhhhggggffffeeeeeeee"), false, 'Test 27');
test(areOccurrencesEqual("repeatedcharsrepeatedcharsrepeatedchars"), false, 'Test 28');
test(areOccurrencesEqual("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz"), false, 'Test 29');
test(areOccurrencesEqual("samefrequencyforallcharacters"), false, 'Test 30');
test(areOccurrencesEqual("lmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmnolmno"), true, 'Test 31');
test(areOccurrencesEqual("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), false, 'Test 32');
test(areOccurrencesEqual("mnopqrsmnopqrsmnopqrsmnopqrsmnopqrs"), true, 'Test 33');
test(areOccurrencesEqual("abcdefabcdefabcdef"), true, 'Test 34');
test(areOccurrencesEqual("abacadaeafagahaibiciidieifigihiiijijikikililimimioinioipoipiqiririsititiuiujujukukululumiumiujujukvkvkwlwlxmxmylynzozp"), false, 'Test 35');
test(areOccurrencesEqual("mnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza"), false, 'Test 36');
test(areOccurrencesEqual("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzqqqq"), false, 'Test 37');
test(areOccurrencesEqual("abracadabra"), false, 'Test 38');
test(areOccurrencesEqual("mnopqrstuvwxymnopqrstuvwxymnopqrstuvwxymnopqrstuvwxyn"), false, 'Test 39');
test(areOccurrencesEqual("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), true, 'Test 40');
test(areOccurrencesEqual("qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop"), true, 'Test 41');
test(areOccurrencesEqual("abcdefabcdef"), true, 'Test 42');
test(areOccurrencesEqual("zzzzzzzzzzzzzzzzzzzz"), true, 'Test 43');
test(areOccurrencesEqual("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), true, 'Test 44');
test(areOccurrencesEqual("almostgoodbutoneextraa"), false, 'Test 45');
test(areOccurrencesEqual("abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop"), true, 'Test 46');
test(areOccurrencesEqual("jjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzzaaaaaa"), false, 'Test 47');
test(areOccurrencesEqual("zzzzzyyyyxxxwwvvuuttssrrqqlloommnnppekkaaiioouuyy"), false, 'Test 48');
test(areOccurrencesEqual("racecar"), false, 'Test 49');
test(areOccurrencesEqual("almostgoodbutoneextrac"), false, 'Test 50');
test(areOccurrencesEqual("xyzxyzxyz"), true, 'Test 51');
test(areOccurrencesEqual("qwerqwerqwer"), true, 'Test 52');
test(areOccurrencesEqual("abababababababab"), true, 'Test 53');
test(areOccurrencesEqual("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), true, 'Test 54');
test(areOccurrencesEqual("abcdefghijabcdefghijabcdefghij"), true, 'Test 55');
test(areOccurrencesEqual("ppppppqqqqqrrrrrssssstttttuuuuuvvvvvwwwwwooooo"), false, 'Test 56');
test(areOccurrencesEqual("ababababc"), false, 'Test 57');
test(areOccurrencesEqual("mmnnnmmmnnnmmmnnnmmmnnnmmmnnnmmmnnnmmmnnnmm"), false, 'Test 58');
test(areOccurrencesEqual("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), false, 'Test 59');
test(areOccurrencesEqual("pqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrspqrs"), true, 'Test 60');
test(areOccurrencesEqual("mmnnooppqqrrssttuuvvwwxxyyzzqqwweerrttyyuuiihhggffeeddccba"), false, 'Test 61');
test(areOccurrencesEqual("abcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxy"), true, 'Test 62');
test(areOccurrencesEqual("ppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), true, 'Test 63');
test(areOccurrencesEqual("mnopmnopmnopmnopmnopmnopmnopmnop"), true, 'Test 64');
test(areOccurrencesEqual("xyzzzzzyzx"), false, 'Test 65');
test(areOccurrencesEqual("abacabadabacabad"), false, 'Test 66');
test(areOccurrencesEqual("abcdefghijklmnopqrstuvwxzyabcdefghijklmnopqrstuvwxzy"), true, 'Test 67');
test(areOccurrencesEqual("abcdefghijklmnop"), true, 'Test 68');
test(areOccurrencesEqual("xyzzxyzzxyzzxyzzxyzzxyzz"), false, 'Test 69');
test(areOccurrencesEqual("zzzyyyxxxwwwwvvvvuuuuuuuuutttttttsssssssrrrrrrqqqqpppooooonnnnmmmmllllkkkkjjjjiiiihhhhhgggggfffffeeeeeeeee"), false, 'Test 70');
test(areOccurrencesEqual("mnopqrmpqrno"), true, 'Test 71');
test(areOccurrencesEqual("qqwweerrttyyuuuiooppppllkkiijjhgffeeddccba"), false, 'Test 72');
test(areOccurrencesEqual("qrstuvwxyzabcdefghijklmnopqrstuvwxyz"), false, 'Test 73');
test(areOccurrencesEqual("mississippi"), false, 'Test 74');
test(areOccurrencesEqual("xyzzxyzzxyzzxyzz"), false, 'Test 75');
test(areOccurrencesEqual("oneonetwoonetwothree"), false, 'Test 76');
test(areOccurrencesEqual("zxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnmzxcvbnm"), true, 'Test 77');
test(areOccurrencesEqual("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 78');
test(areOccurrencesEqual("xyzxyzxyzxyz"), true, 'Test 79');
test(areOccurrencesEqual("zzzzyyyyxxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), false, 'Test 80');
test(areOccurrencesEqual("qqqqwweerrrrtttyyyy"), false, 'Test 81');
test(areOccurrencesEqual("abcdabcdabcdabcd"), true, 'Test 82');
test(areOccurrencesEqual("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), false, 'Test 83');
test(areOccurrencesEqual("almostgoodbutoneextrad"), false, 'Test 84');
test(areOccurrencesEqual("almostgoodbutoneextrae"), false, 'Test 85');
test(areOccurrencesEqual("programming"), false, 'Test 86');
test(areOccurrencesEqual("equalfrequenciesequalfrequencies"), false, 'Test 87');
test(areOccurrencesEqual("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 88');
test(areOccurrencesEqual("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabc"), false, 'Test 89');
test(areOccurrencesEqual("almostgoodbutoneextraf"), false, 'Test 90');
test(areOccurrencesEqual("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefghij"), false, 'Test 91');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

