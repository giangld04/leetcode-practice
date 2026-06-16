// Test: 2949. Count Beautiful Substrings Ii
// 91 test cases from LeetCodeDataset
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

console.log("\n2949. Count Beautiful Substrings Ii\n");

test(beautifulSubstrings("aeiaaioaaaaeiiiiouuuooououuoiiiuuuuaeiou", 10), 0, 'Test 1');
test(beautifulSubstrings("aabbcc", 4), 1, 'Test 2');
test(beautifulSubstrings("zzzzz", 1), 0, 'Test 3');
test(beautifulSubstrings("", 1), 0, 'Test 4');
test(beautifulSubstrings("baeyh", 2), 2, 'Test 5');
test(beautifulSubstrings("bbaeaeaaeiou", 3), 0, 'Test 6');
test(beautifulSubstrings("bcdf", 1), 0, 'Test 7');
test(beautifulSubstrings("aeiou", 25), 0, 'Test 8');
test(beautifulSubstrings("vowelsandconsonants", 10), 0, 'Test 9');
test(beautifulSubstrings("", 3), 0, 'Test 10');
test(beautifulSubstrings("abba", 1), 3, 'Test 11');
test(beautifulSubstrings("abcdefghij", 2), 0, 'Test 12');
test(beautifulSubstrings("aebcde", 3), 1, 'Test 13');
test(beautifulSubstrings("abcdefghijklmnopqrstuvwxyz", 7), 0, 'Test 14');
test(beautifulSubstrings("abcdefghijklmnopqrstuvwxyz", 2), 0, 'Test 15');
test(beautifulSubstrings("a", 1), 0, 'Test 16');
test(beautifulSubstrings("aeiou", 5), 0, 'Test 17');
test(beautifulSubstrings("beautifulstring", 7), 0, 'Test 18');
test(beautifulSubstrings("aabbccddeeff", 4), 4, 'Test 19');
test(beautifulSubstrings("aaabbbcccddd", 6), 0, 'Test 20');
test(beautifulSubstrings("consonantsandvowels", 20), 0, 'Test 21');
test(beautifulSubstrings("bbaaccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 12), 0, 'Test 22');
test(beautifulSubstrings("vowelsvowelsvowelsvowels", 4), 8, 'Test 23');
test(beautifulSubstrings("thisisaverylongstringwithabunchoflettersandvariousvowelsandconsonants", 10), 0, 'Test 24');
test(beautifulSubstrings("bcbcbcbcbcbcbcbcbcbcbcbcbc", 11), 0, 'Test 25');
test(beautifulSubstrings("aebcdefghijklmnopqrstuvwxyz", 5), 0, 'Test 26');
test(beautifulSubstrings("abacabadabacaba", 10), 0, 'Test 27');
test(beautifulSubstrings("vowelsandconsonants", 6), 0, 'Test 28');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 100), 0, 'Test 29');
test(beautifulSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 13), 0, 'Test 30');
test(beautifulSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 20), 0, 'Test 31');
test(beautifulSubstrings("aeiouaeiouaeiou", 25), 0, 'Test 32');
test(beautifulSubstrings("vwxyzvwxyzvwxyzvwxyz", 20), 0, 'Test 33');
test(beautifulSubstrings("abcdabcdabcdabcdabcdabcd", 9), 0, 'Test 34');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), 0, 'Test 35');
test(beautifulSubstrings("aaaabbbbccccddddeeeeffff", 16), 6, 'Test 36');
test(beautifulSubstrings("abcdefghijabcdefghijabcdefghij", 3), 0, 'Test 37');
test(beautifulSubstrings("bcdfghjklmnpqrstvwxyzbcd", 15), 0, 'Test 38');
test(beautifulSubstrings("qwertyuiopasdfghjklzxcvbnm", 11), 0, 'Test 39');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzz", 20), 0, 'Test 40');
test(beautifulSubstrings("abcdeffedcba", 4), 1, 'Test 41');
test(beautifulSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 2), 0, 'Test 42');
test(beautifulSubstrings("repeatedcharactersaaaaaaaabbbbbbbbcccccccc", 16), 13, 'Test 43');
test(beautifulSubstrings("aaeeiioouu", 10), 0, 'Test 44');
test(beautifulSubstrings("thisisalongstringwithvariousvowelsandconsonants", 36), 6, 'Test 45');
test(beautifulSubstrings("beautifulstring", 3), 2, 'Test 46');
test(beautifulSubstrings("abcdefghefghijklmnopqrstuvwxyz", 8), 0, 'Test 47');
test(beautifulSubstrings("aeioubcdfghjklmnpqrstvwxyz", 25), 1, 'Test 48');
test(beautifulSubstrings("zzzzzaaaaabbbbbbccccccdddddd", 12), 0, 'Test 49');
test(beautifulSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 0, 'Test 50');
test(beautifulSubstrings("aeiouaeiou", 5), 0, 'Test 51');
test(beautifulSubstrings("aeioubcdfg", 5), 1, 'Test 52');
test(beautifulSubstrings("bcaedfghioklmnpqrstuvwxyz", 7), 0, 'Test 53');
test(beautifulSubstrings("bcdfghjklmnpqrstvwxyzzzzzzzz", 11), 0, 'Test 54');
test(beautifulSubstrings("beautifulstring", 2), 5, 'Test 55');
test(beautifulSubstrings("abababababababababab", 6), 9, 'Test 56');
test(beautifulSubstrings("aaeeiioouubbccddeeffgghhjjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), 1, 'Test 57');
test(beautifulSubstrings("aeeeeiiioouu", 10), 0, 'Test 58');
test(beautifulSubstrings("aeiouaeiouaeiou", 3), 0, 'Test 59');
test(beautifulSubstrings("vowelvowelvowelvowelvowel", 10), 0, 'Test 60');
test(beautifulSubstrings("aaaaaaaaaaabbbbbbbbbb", 1), 10, 'Test 61');
test(beautifulSubstrings("abacabadabacaba", 2), 24, 'Test 62');
test(beautifulSubstrings("aaaabbbbcccc", 10), 0, 'Test 63');
test(beautifulSubstrings("eiouaeiouaeiouaeiou", 5), 0, 'Test 64');
test(beautifulSubstrings("aeioubcdfghjklmnpqrstvwxyz", 5), 1, 'Test 65');
test(beautifulSubstrings("thisisaverylongstringwithvariouscharacters", 11), 0, 'Test 66');
test(beautifulSubstrings("zyxwvutsrqponmlkjihgfedcba", 3), 0, 'Test 67');
test(beautifulSubstrings("bcdfghjklmnpqrstvwxyzbcdfghjklmnpqrstvwxyz", 30), 0, 'Test 68');
test(beautifulSubstrings("aeiaeiouaeiaeiouaeiaeiou", 18), 0, 'Test 69');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefghijklmnopqrstuvwxyz", 50), 0, 'Test 70');
test(beautifulSubstrings("consonantconsonantconsonant", 15), 0, 'Test 71');
test(beautifulSubstrings("bcbcbcbcbcbcbc", 3), 0, 'Test 72');
test(beautifulSubstrings("vowelsconsonants", 4), 5, 'Test 73');
test(beautifulSubstrings("aebcdeioufhgjk", 12), 1, 'Test 74');
test(beautifulSubstrings("xylophone", 2), 2, 'Test 75');
test(beautifulSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 25), 0, 'Test 76');
test(beautifulSubstrings("xyzabcxyzabc", 9), 0, 'Test 77');
test(beautifulSubstrings("thisisateststring", 7), 0, 'Test 78');
test(beautifulSubstrings("aaaaaaaaaabbbbbbbbbb", 100), 1, 'Test 79');
test(beautifulSubstrings("vowelsandconsonants", 18), 0, 'Test 80');
test(beautifulSubstrings("bcdfghjklmnpqrstvwxyz", 26), 0, 'Test 81');
test(beautifulSubstrings("aabbbbcccc", 4), 1, 'Test 82');
test(beautifulSubstrings("beautifulsubstring", 5), 2, 'Test 83');
test(beautifulSubstrings("xyzxyzxyzxyz", 9), 0, 'Test 84');
test(beautifulSubstrings("abecidofug", 8), 3, 'Test 85');
test(beautifulSubstrings("xyzxyzxyzxyz", 3), 0, 'Test 86');
test(beautifulSubstrings("aaaabbbbccccdddd", 8), 1, 'Test 87');
test(beautifulSubstrings("mnbvcxzlkjhgfdsapoiuytrewwq", 11), 0, 'Test 88');
test(beautifulSubstrings("aeiouaeiouaeiouaeiou", 25), 0, 'Test 89');
test(beautifulSubstrings("aaaaaaaaaeeeeeeiiioooouuuu", 10), 0, 'Test 90');
test(beautifulSubstrings("consonantsconsonantsconsonants", 9), 3, 'Test 91');

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
