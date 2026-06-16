// Test: 2947. Count Beautiful Substrings I
// 90 test cases from LeetCodeDataset
// Run: node test.js

const { beautifulSubstrings } = require("./solution");

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

console.log("\n2947. Count Beautiful Substrings I\n");

test(beautifulSubstrings("aeaeaeae", 8), 0, 'Test 1');
test(beautifulSubstrings("bcdfghjklmnpqrstvwxyz", 2), 0, 'Test 2');
test(beautifulSubstrings("aebcdfe", 3), 0, 'Test 3');
test(beautifulSubstrings("", 1), 0, 'Test 4');
test(beautifulSubstrings("baeyh", 2), 2, 'Test 5');
test(beautifulSubstrings("aebcdeedaa", 4), 6, 'Test 6');
test(beautifulSubstrings("bcdf", 1), 0, 'Test 7');
test(beautifulSubstrings("abcd", 1), 1, 'Test 8');
test(beautifulSubstrings("", 3), 0, 'Test 9');
test(beautifulSubstrings("abba", 1), 3, 'Test 10');
test(beautifulSubstrings("bcdfgh", 2), 0, 'Test 11');
test(beautifulSubstrings("aabbccdd", 2), 1, 'Test 12');
test(beautifulSubstrings("abcdefghijklmnopqrstuvwxyz", 2), 0, 'Test 13');
test(beautifulSubstrings("a", 1), 0, 'Test 14');
test(beautifulSubstrings("aabb", 2), 1, 'Test 15');
test(beautifulSubstrings("aeiou", 5), 0, 'Test 16');
test(beautifulSubstrings("abcdefgh", 4), 0, 'Test 17');
test(beautifulSubstrings("b", 1), 0, 'Test 18');
test(beautifulSubstrings("aabbccddeeff", 4), 4, 'Test 19');
test(beautifulSubstrings("aeiouaeiouaeiouaeiou", 25), 0, 'Test 20');
test(beautifulSubstrings("aabbaaeeiioouuccddffgg", 10), 1, 'Test 21');
test(beautifulSubstrings("aeiouaeiouaeiouaeiou", 200), 0, 'Test 22');
test(beautifulSubstrings("aeioubcdfgh", 5), 1, 'Test 23');
test(beautifulSubstrings("aeioubcdfghjklmnpqrstvwxyzaeioubcdfghjklmnpqrstvwxyz", 12), 0, 'Test 24');
test(beautifulSubstrings("zyxwvutsrqponmlkjihgfedcba", 7), 0, 'Test 25');
test(beautifulSubstrings("vowelsandconsonantsareimportant", 12), 0, 'Test 26');
test(beautifulSubstrings("abacabadabacaba", 3), 14, 'Test 27');
test(beautifulSubstrings("aebcdfeab", 2), 4, 'Test 28');
test(beautifulSubstrings("aeioubcdefghijklmnopqrstuvwxyz", 10), 0, 'Test 29');
test(beautifulSubstrings("vowelsconsonantsvowelsconsonants", 8), 0, 'Test 30');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 20), 0, 'Test 31');
test(beautifulSubstrings("vowelsandconsonants", 6), 0, 'Test 32');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 100), 0, 'Test 33');
test(beautifulSubstrings("aabbccddeeffgg", 12), 0, 'Test 34');
test(beautifulSubstrings("aebcdefghijklmnopqrstuvwxyz", 7), 0, 'Test 35');
test(beautifulSubstrings("aaaaaaaaaaaabbbbbbbbbbcccccccccc", 25), 2, 'Test 36');
test(beautifulSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 7), 0, 'Test 37');
test(beautifulSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 0, 'Test 38');
test(beautifulSubstrings("bbbbbbaaaaeiiuuuccccc", 15), 0, 'Test 39');
test(beautifulSubstrings("thisisaverylongstringwithmixedcharacters", 7), 0, 'Test 40');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 12), 0, 'Test 41');
test(beautifulSubstrings("beautifulstring", 3), 2, 'Test 42');
test(beautifulSubstrings("abcdefghijabcdefghij", 20), 0, 'Test 43');
test(beautifulSubstrings("consonantsandvowelsareequal", 14), 0, 'Test 44');
test(beautifulSubstrings("bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbc", 2), 0, 'Test 45');
test(beautifulSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 25), 0, 'Test 46');
test(beautifulSubstrings("zzzzzaaaaabbbbcccc", 16), 2, 'Test 47');
test(beautifulSubstrings("aeioubcdfg", 5), 1, 'Test 48');
test(beautifulSubstrings("bcdfg", 1), 0, 'Test 49');
test(beautifulSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 100), 0, 'Test 50');
test(beautifulSubstrings("aeiouaeiou", 5), 0, 'Test 51');
test(beautifulSubstrings("aeiou", 1), 0, 'Test 52');
test(beautifulSubstrings("aabbaaeebbeeaabbaa", 3), 0, 'Test 53');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 49), 0, 'Test 54');
test(beautifulSubstrings("bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbc", 3), 0, 'Test 55');
test(beautifulSubstrings("aaeeiioouubbbccddffgg", 10), 1, 'Test 56');
test(beautifulSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 9), 0, 'Test 57');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 6), 0, 'Test 58');
test(beautifulSubstrings("vowelsandconsonants", 10), 0, 'Test 59');
test(beautifulSubstrings("xylophoneaeiouaeiou", 12), 1, 'Test 60');
test(beautifulSubstrings("exampleexampleexample", 9), 10, 'Test 61');
test(beautifulSubstrings("aabbccddeeff", 6), 0, 'Test 62');
test(beautifulSubstrings("xylophoneisfun", 7), 0, 'Test 63');
test(beautifulSubstrings("beautifulstringwithvowelsandconsonants", 20), 0, 'Test 64');
test(beautifulSubstrings("aeiouaeiou", 25), 0, 'Test 65');
test(beautifulSubstrings("aeiouzzzzzzzzzz", 200), 0, 'Test 66');
test(beautifulSubstrings("aeioubcdfghjklmnpqrstvwxyz", 5), 1, 'Test 67');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 21), 0, 'Test 68');
test(beautifulSubstrings("abcdefghijklmnopqrstuvwxyz", 10), 0, 'Test 69');
test(beautifulSubstrings("bbaaeeddbb", 4), 5, 'Test 70');
test(beautifulSubstrings("eeeeeeeeeeaaaaaaaaaaiiiiiiiiiiooooooooouuuuuuuuuu", 100), 0, 'Test 71');
test(beautifulSubstrings("zzzzyyyyxxxx", 9), 0, 'Test 72');
test(beautifulSubstrings("thisisaverylongstringwithvowelsandconsonants", 20), 0, 'Test 73');
test(beautifulSubstrings("thisisbeautifulstringwithvariousvowelsandconsonants", 8), 10, 'Test 74');
test(beautifulSubstrings("aeiouaeiouaeiouaeioubcdfghjklmnpqrstvwxy", 11), 1, 'Test 75');
test(beautifulSubstrings("beautifulstringwithvowelandconsonants", 7), 0, 'Test 76');
test(beautifulSubstrings("abcdefghijklmnopqrstuvwxyz", 5), 0, 'Test 77');
test(beautifulSubstrings("consonantsconsonantsconsonants", 30), 0, 'Test 78');
test(beautifulSubstrings("mamamamamamamamama", 2), 36, 'Test 79');
test(beautifulSubstrings("thisisaverylongstringwithmanyvowelsandconsonants", 12), 0, 'Test 80');
test(beautifulSubstrings("vowelsarebeautiful", 6), 3, 'Test 81');
test(beautifulSubstrings("bcdfghjklmnpqrstvwxyzaeiou", 10), 0, 'Test 82');
test(beautifulSubstrings("bcdfghjklmnpqrstvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 8), 0, 'Test 83');
test(beautifulSubstrings("aeaeaeaeaeaeaeaeaeae", 2), 0, 'Test 84');
test(beautifulSubstrings("aeiouaeiouaeiouaeiou", 4), 0, 'Test 85');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 15), 0, 'Test 86');
test(beautifulSubstrings("aaaeeeiioouu", 1), 0, 'Test 87');
test(beautifulSubstrings("bcdfghjklmnpqrstvwxybcdfghjklmnpqrstvwxy", 9), 0, 'Test 88');
test(beautifulSubstrings("zzzzzzzzzz", 100), 0, 'Test 89');
test(beautifulSubstrings("abcdefghijklmnopqrstuvwxyz", 50), 0, 'Test 90');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

