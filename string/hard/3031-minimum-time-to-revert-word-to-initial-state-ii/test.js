// Test: 3031. Minimum Time To Revert Word To Initial State Ii
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { minimumTimeToInitialState } = require("./solution");

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

console.log("\n3031. Minimum Time To Revert Word To Initial State Ii\n");

test(minimumTimeToInitialState("abcdefgh", 2), 4, 'Test 1');
test(minimumTimeToInitialState("xyz", 1), 3, 'Test 2');
test(minimumTimeToInitialState("zzzzzz", 2), 1, 'Test 3');
test(minimumTimeToInitialState("abcdabcd", 4), 1, 'Test 4');
test(minimumTimeToInitialState("abacaba", 3), 2, 'Test 5');
test(minimumTimeToInitialState("abcabcabc", 1), 3, 'Test 6');
test(minimumTimeToInitialState("abcdefg", 7), 1, 'Test 7');
test(minimumTimeToInitialState("abacaba", 4), 1, 'Test 8');
test(minimumTimeToInitialState("aabbccddeeff", 2), 6, 'Test 9');
test(minimumTimeToInitialState("zzzzzzzzzzzz", 5), 1, 'Test 10');
test(minimumTimeToInitialState("a", 1), 1, 'Test 11');
test(minimumTimeToInitialState("repeatrepeat", 6), 1, 'Test 12');
test(minimumTimeToInitialState("abcabcabcabc", 3), 1, 'Test 13');
test(minimumTimeToInitialState("abcabcabc", 3), 1, 'Test 14');
test(minimumTimeToInitialState("abcdabcd", 2), 2, 'Test 15');
test(minimumTimeToInitialState("hellohello", 5), 1, 'Test 16');
test(minimumTimeToInitialState("aaaa", 1), 1, 'Test 17');
test(minimumTimeToInitialState("abcdabcdabcd", 4), 1, 'Test 18');
test(minimumTimeToInitialState("aaaa", 2), 1, 'Test 19');
test(minimumTimeToInitialState("abcbabcd", 2), 4, 'Test 20');
test(minimumTimeToInitialState("abcdef", 6), 1, 'Test 21');
test(minimumTimeToInitialState("aaaaabbbbbccccddddaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 15), 5, 'Test 22');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabc", 7), 3, 'Test 23');
test(minimumTimeToInitialState("abcdefgabcdefg", 7), 1, 'Test 24');
test(minimumTimeToInitialState("aaaabbbbccccddddeeeeffff", 4), 6, 'Test 25');
test(minimumTimeToInitialState("qwertyuiopqwertyuiopqwertyuiopqwerty", 11), 4, 'Test 26');
test(minimumTimeToInitialState("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 10), 1, 'Test 27');
test(minimumTimeToInitialState("abacabadabacabadabacabad", 5), 5, 'Test 28');
test(minimumTimeToInitialState("abacabadabacabad", 3), 6, 'Test 29');
test(minimumTimeToInitialState("abcdeabcdeabcdeabcdeabcde", 6), 5, 'Test 30');
test(minimumTimeToInitialState("ababababababababababababababababababababababababab", 3), 2, 'Test 31');
test(minimumTimeToInitialState("ababababababab", 4), 1, 'Test 32');
test(minimumTimeToInitialState("abcdefgabcdefgabcdefg", 7), 1, 'Test 33');
test(minimumTimeToInitialState("samepatterneverywhereeverywhereeverywhere", 11), 4, 'Test 34');
test(minimumTimeToInitialState("hellohellohellohellohellohello", 6), 5, 'Test 35');
test(minimumTimeToInitialState("abababababababababababababab", 10), 1, 'Test 36');
test(minimumTimeToInitialState("abababababababab", 4), 1, 'Test 37');
test(minimumTimeToInitialState("aaaaaabaaaaa", 3), 3, 'Test 38');
test(minimumTimeToInitialState("abacabadabacabad", 6), 3, 'Test 39');
test(minimumTimeToInitialState("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 13), 4, 'Test 40');
test(minimumTimeToInitialState("zzzzzzzzzzzzzzzzzz", 7), 1, 'Test 41');
test(minimumTimeToInitialState("hellohellohellohellohello", 7), 4, 'Test 42');
test(minimumTimeToInitialState("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad", 9), 8, 'Test 43');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabcabcabc", 10), 3, 'Test 44');
test(minimumTimeToInitialState("abcdabcdabcdabcdabcdabcdabcdabcd", 8), 1, 'Test 45');
test(minimumTimeToInitialState("xyzxyzxyzxyz", 5), 3, 'Test 46');
test(minimumTimeToInitialState("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 26), 1, 'Test 47');
test(minimumTimeToInitialState("hellohellohellohellohello", 5), 1, 'Test 48');
test(minimumTimeToInitialState("aaaaaabbbbbbcccccc", 3), 6, 'Test 49');
test(minimumTimeToInitialState("aaaaabbbbbcccc", 5), 3, 'Test 50');
test(minimumTimeToInitialState("abacabadabacabadabacabadabacabadaba", 7), 5, 'Test 51');
test(minimumTimeToInitialState("xyzxyzxyzxyzxyzxyzxyzxyz", 7), 3, 'Test 52');
test(minimumTimeToInitialState("abcabcabcabcabcabc", 5), 3, 'Test 53');
test(minimumTimeToInitialState("zzzzzzzzzzzzzzzzzzzzzz", 2), 1, 'Test 54');
test(minimumTimeToInitialState("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 2), 1, 'Test 55');
test(minimumTimeToInitialState("abababababab", 4), 1, 'Test 56');
test(minimumTimeToInitialState("abcdefgabcdefgabcdefgabcdefgabcdefg", 9), 4, 'Test 57');
test(minimumTimeToInitialState("ababababababababababab", 5), 2, 'Test 58');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabcabcabcabcabc", 7), 3, 'Test 59');
test(minimumTimeToInitialState("qwertyuiopqwertyuiopqwertyuiop", 9), 4, 'Test 60');
test(minimumTimeToInitialState("zyxzyxzyxzyxzyxzyxzyxzyx", 6), 1, 'Test 61');
test(minimumTimeToInitialState("xyzxyzxyzxyzxyzxyz", 6), 1, 'Test 62');
test(minimumTimeToInitialState("abcdefabcdefabcdef", 6), 1, 'Test 63');
test(minimumTimeToInitialState("ababababababababababababababababababa", 1), 2, 'Test 64');
test(minimumTimeToInitialState("abcdefabcdefabcdefabcdefabcdefabcdef", 3), 2, 'Test 65');
test(minimumTimeToInitialState("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), 6, 'Test 66');
test(minimumTimeToInitialState("abcabcabcabcabc", 6), 1, 'Test 67');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabcabcabcabcabc", 9), 1, 'Test 68');
test(minimumTimeToInitialState("banana", 2), 3, 'Test 69');
test(minimumTimeToInitialState("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 13), 2, 'Test 70');
test(minimumTimeToInitialState("abcdefghijklmnopqrstuvwxyz", 13), 2, 'Test 71');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 12), 1, 'Test 72');
test(minimumTimeToInitialState("abcdefgabcdefgabcdefgabcdefg", 5), 6, 'Test 73');
test(minimumTimeToInitialState("xyzxyzxyzxyz", 2), 3, 'Test 74');
test(minimumTimeToInitialState("zzzzzzzzzzzzzzzzzz", 9), 1, 'Test 75');
test(minimumTimeToInitialState("abacabadabacabadabacabadabacabadaba", 8), 1, 'Test 76');
test(minimumTimeToInitialState("ababababababababababababababababababa", 6), 1, 'Test 77');
test(minimumTimeToInitialState("abacabadabacabadabacabadabacabadabacabadabacabad", 6), 4, 'Test 78');
test(minimumTimeToInitialState("aaaaaaa", 2), 1, 'Test 79');
test(minimumTimeToInitialState("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", 4), 3, 'Test 80');
test(minimumTimeToInitialState("aabbaabbaabbaabbaabbaabb", 3), 4, 'Test 81');
test(minimumTimeToInitialState("abcdefghijabcdefghijabcdefghij", 10), 1, 'Test 82');
test(minimumTimeToInitialState("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), 2, 'Test 83');
test(minimumTimeToInitialState("abcdefghijabcdefghijabcdefghijabcdefghij", 10), 1, 'Test 84');
test(minimumTimeToInitialState("abacabadabacabadabacabad", 4), 2, 'Test 85');
test(minimumTimeToInitialState("xyzxyzxyzxyzxyzxyz", 5), 3, 'Test 86');
test(minimumTimeToInitialState("repeatrepeatrepeatrepeatrepeat", 3), 2, 'Test 87');
test(minimumTimeToInitialState("abababababab", 1), 2, 'Test 88');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabcabcabcabcabc", 5), 3, 'Test 89');
test(minimumTimeToInitialState("abracadabraabracadabraabracadabra", 7), 5, 'Test 90');
test(minimumTimeToInitialState("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 12), 1, 'Test 91');
test(minimumTimeToInitialState("repeatedrepeatedrepeated", 7), 4, 'Test 92');
test(minimumTimeToInitialState("abcdabcdabcdabcdabcd", 8), 1, 'Test 93');
test(minimumTimeToInitialState("abcdefghijklmnopqrstuvwxyz", 25), 2, 'Test 94');
test(minimumTimeToInitialState("abababababababab", 5), 2, 'Test 95');
test(minimumTimeToInitialState("aabbccddeeffgghhiijjkkll", 11), 3, 'Test 96');
test(minimumTimeToInitialState("mississippimississippimississippi", 4), 9, 'Test 97');
test(minimumTimeToInitialState("abacabadabacaba", 3), 4, 'Test 98');
test(minimumTimeToInitialState("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 13), 6, 'Test 99');
test(minimumTimeToInitialState("abcdabcdabcdabcd", 5), 4, 'Test 100');
test(minimumTimeToInitialState("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 15), 1, 'Test 101');
test(minimumTimeToInitialState("mississippi", 4), 3, 'Test 102');
test(minimumTimeToInitialState("abacabadabacabadabacabadabacabadaba", 10), 4, 'Test 103');
test(minimumTimeToInitialState("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 15), 4, 'Test 104');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabc", 8), 3, 'Test 105');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabc", 9), 1, 'Test 106');
test(minimumTimeToInitialState("abababababab", 2), 1, 'Test 107');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabc", 4), 3, 'Test 108');

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
