// Test: 1328. Break A Palindrome
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { breakPalindrome } = require("./solution");

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

console.log("\n1328. Break A Palindrome\n");

test(breakPalindrome("refer"), aefer, 'Test 1');
test(breakPalindrome("abba"), aaba, 'Test 2');
test(breakPalindrome("rotor"), aotor, 'Test 3');
test(breakPalindrome("aa"), ab, 'Test 4');
test(breakPalindrome("aba"), abb, 'Test 5');
test(breakPalindrome("a"), , 'Test 6');
test(breakPalindrome("madam"), aadam, 'Test 7');
test(breakPalindrome("abccba"), aaccba, 'Test 8');
test(breakPalindrome("racecar"), aacecar, 'Test 9');
test(breakPalindrome("moom"), aoom, 'Test 10');
test(breakPalindrome("aabaa"), aabab, 'Test 11');
test(breakPalindrome("zzz"), azz, 'Test 12');
test(breakPalindrome("xyx"), ayx, 'Test 13');
test(breakPalindrome("level"), aevel, 'Test 14');
test(breakPalindrome("aaaaa"), aaaab, 'Test 15');
test(breakPalindrome("abcdedcba"), aacdedcba, 'Test 16');
test(breakPalindrome("abcba"), aacba, 'Test 17');
test(breakPalindrome("bcb"), acb, 'Test 18');
test(breakPalindrome("noon"), aoon, 'Test 19');
test(breakPalindrome("mamad"), aamad, 'Test 20');
test(breakPalindrome("deified"), aeified, 'Test 21');
test(breakPalindrome("z"), , 'Test 22');
test(breakPalindrome("aabaaa"), aaaaaa, 'Test 23');
test(breakPalindrome("toot"), aoot, 'Test 24');
test(breakPalindrome("babababab"), aabababab, 'Test 25');
test(breakPalindrome("peep"), aeep, 'Test 26');
test(breakPalindrome("ppppppppp"), apppppppp, 'Test 27');
test(breakPalindrome("aabbaa"), aaabaa, 'Test 28');
test(breakPalindrome("abcdefghihgfedcba"), aacdefghihgfedcba, 'Test 29');
test(breakPalindrome("zzzzzzzz"), azzzzzzz, 'Test 30');
test(breakPalindrome("bbaab"), abaab, 'Test 31');
test(breakPalindrome("redder"), aedder, 'Test 32');
test(breakPalindrome("abcdefghgfedcba"), aacdefghgfedcba, 'Test 33');
test(breakPalindrome("abcdefghijklmnoponmlkjihgfedcbaedcbafghijklmnop"), aacdefghijklmnoponmlkjihgfedcbaedcbafghijklmnop, 'Test 34');
test(breakPalindrome("abacaba"), aaacaba, 'Test 35');
test(breakPalindrome("aabbccddeeffgggggeeeddccbbaa"), aaabccddeeffgggggeeeddccbbaa, 'Test 36');
test(breakPalindrome("xyzzyx"), ayzzyx, 'Test 37');
test(breakPalindrome("kayakkayak"), aayakkayak, 'Test 38');
test(breakPalindrome("repaper"), aepaper, 'Test 39');
test(breakPalindrome("aaaaaaaa"), aaaaaaab, 'Test 40');
test(breakPalindrome("ivicc"), avicc, 'Test 41');
test(breakPalindrome("abaacaaba"), aaaacaaba, 'Test 42');
test(breakPalindrome("racecarxracecar"), aacecarxracecar, 'Test 43');
test(breakPalindrome("abacdfgdcaba"), aaacdfgdcaba, 'Test 44');
test(breakPalindrome("nnnnnnnnna"), annnnnnnna, 'Test 45');
test(breakPalindrome("aaaaaaaaa"), aaaaaaaab, 'Test 46');
test(breakPalindrome("abcdddcba"), aacdddcba, 'Test 47');
test(breakPalindrome("aabbccddeeffgggeeeddccbbaa"), aaabccddeeffgggeeeddccbbaa, 'Test 48');
test(breakPalindrome("stats"), atats, 'Test 49');
test(breakPalindrome("aacaaca"), aaaaaca, 'Test 50');
test(breakPalindrome("reviver"), aeviver, 'Test 51');
test(breakPalindrome("aabbccddeedccbaa"), aaabccddeedccbaa, 'Test 52');
test(breakPalindrome("amanaplanacanalpanama"), aaanaplanacanalpanama, 'Test 53');
test(breakPalindrome("xyzyx"), ayzyx, 'Test 54');
test(breakPalindrome("ababababab"), aaabababab, 'Test 55');
test(breakPalindrome("zzzzzzzzz"), azzzzzzzz, 'Test 56');
test(breakPalindrome("abaababa"), aaaababa, 'Test 57');
test(breakPalindrome("aaaaaaaaaa"), aaaaaaaaab, 'Test 58');
test(breakPalindrome("aabbccddeedccbbaa"), aaabccddeedccbbaa, 'Test 59');
test(breakPalindrome("noonnoon"), aoonnoon, 'Test 60');
test(breakPalindrome("aabbccddeeffgggeeddccbbaa"), aaabccddeeffgggeeddccbbaa, 'Test 61');
test(breakPalindrome("reviled"), aeviled, 'Test 62');
test(breakPalindrome("aabbbaa"), aaabbaa, 'Test 63');
test(breakPalindrome("aabbccddeeffggfeeddccbbaa"), aaabccddeeffggfeeddccbbaa, 'Test 64');
test(breakPalindrome("rotator"), aotator, 'Test 65');
test(breakPalindrome("abccbaa"), aaccbaa, 'Test 66');
test(breakPalindrome("bbbbb"), abbbb, 'Test 67');
test(breakPalindrome("aaa"), aab, 'Test 68');
test(breakPalindrome("aabbccddeccbaa"), aaabccddeccbaa, 'Test 69');
test(breakPalindrome("ababababa"), aaabababa, 'Test 70');
test(breakPalindrome("aabbccddeeffgggggggeeeddccbbaa"), aaabccddeeffgggggggeeeddccbbaa, 'Test 71');
test(breakPalindrome("aaaabaaa"), aaaabaab, 'Test 72');
test(breakPalindrome("fedcbafedcba"), aedcbafedcba, 'Test 73');
test(breakPalindrome("abcbaba"), aacbaba, 'Test 74');
test(breakPalindrome("aaabaaa"), aaabaab, 'Test 75');
test(breakPalindrome("zyxwvutsrqponmlkjihgfedcbaedcba"), ayxwvutsrqponmlkjihgfedcbaedcba, 'Test 76');
test(breakPalindrome("sees"), aees, 'Test 77');
test(breakPalindrome("aabbccddeeffggggggfeeddccbbaa"), aaabccddeeffggggggfeeddccbbaa, 'Test 78');
test(breakPalindrome("aaaaaaa"), aaaaaab, 'Test 79');
test(breakPalindrome("bbcb"), abcb, 'Test 80');
test(breakPalindrome("zyxwvutsrqponmlkjihgfedcbaedcbafghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), ayxwvutsrqponmlkjihgfedcbaedcbafghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba, 'Test 81');
test(breakPalindrome("civic"), aivic, 'Test 82');
test(breakPalindrome("zzzzzzz"), azzzzzz, 'Test 83');
test(breakPalindrome("babababababababababababababababababa"), aabababababababababababababababababa, 'Test 84');
test(breakPalindrome("repaid"), aepaid, 'Test 85');
test(breakPalindrome("rotorrotor"), aotorrotor, 'Test 86');
test(breakPalindrome("abcdeedcba"), aacdeedcba, 'Test 87');
test(breakPalindrome("reeve"), aeeve, 'Test 88');
test(breakPalindrome("abcddddcba"), aacddddcba, 'Test 89');
test(breakPalindrome("kayak"), aayak, 'Test 90');
test(breakPalindrome("reviler"), aeviler, 'Test 91');
test(breakPalindrome("abcdefedcba"), aacdefedcba, 'Test 92');
test(breakPalindrome("rotavator"), aotavator, 'Test 93');
test(breakPalindrome("madamimadam"), aadamimadam, 'Test 94');
test(breakPalindrome("redivider"), aedivider, 'Test 95');
test(breakPalindrome("abacabadaba"), aaacabadaba, 'Test 96');
test(breakPalindrome("abcddcba"), aacddcba, 'Test 97');
test(breakPalindrome("aaaabaaaa"), aaaabaaab, 'Test 98');
test(breakPalindrome("leveler"), aeveler, 'Test 99');
test(breakPalindrome("abababa"), aaababa, 'Test 100');
test(breakPalindrome("abecba"), aaecba, 'Test 101');
test(breakPalindrome("zaz"), aaz, 'Test 102');
test(breakPalindrome("aabbccbaa"), aaabccbaa, 'Test 103');
test(breakPalindrome("abcdcba"), aacdcba, 'Test 104');
test(breakPalindrome("aabbccddeeffggggfeeddccbbaa"), aaabccddeeffggggfeeddccbbaa, 'Test 105');
test(breakPalindrome("bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcb"), acbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcb, 'Test 106');
test(breakPalindrome("anana"), aaana, 'Test 107');
test(breakPalindrome("bababababa"), aababababa, 'Test 108');
test(breakPalindrome("zzzzz"), azzzz, 'Test 109');
test(breakPalindrome("abcaaba"), aacaaba, 'Test 110');
test(breakPalindrome("bob"), aob, 'Test 111');
test(breakPalindrome("abaabaaabaabaa"), aaaabaaabaabaa, 'Test 112');
test(breakPalindrome("deed"), aeed, 'Test 113');
test(breakPalindrome("detartrated"), aetartrated, 'Test 114');
test(breakPalindrome("civiccivic"), aiviccivic, 'Test 115');
test(breakPalindrome("zzzz"), azzz, 'Test 116');
test(breakPalindrome("repel"), aepel, 'Test 117');
test(breakPalindrome("deedeed"), aeedeed, 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

