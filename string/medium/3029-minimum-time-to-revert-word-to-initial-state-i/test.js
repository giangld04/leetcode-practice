// Test: 3029. Minimum Time To Revert Word To Initial State I
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

console.log("\n3029. Minimum Time To Revert Word To Initial State I\n");

test(minimumTimeToInitialState("aabbcc", 2), 3, 'Test 1');
test(minimumTimeToInitialState("hello", 5), 1, 'Test 2');
test(minimumTimeToInitialState("xyzxyzxyz", 4), 3, 'Test 3');
test(minimumTimeToInitialState("abcdef", 1), 6, 'Test 4');
test(minimumTimeToInitialState("ababab", 2), 1, 'Test 5');
test(minimumTimeToInitialState("pattern", 1), 7, 'Test 6');
test(minimumTimeToInitialState("abcdefg", 2), 4, 'Test 7');
test(minimumTimeToInitialState("abacaba", 3), 2, 'Test 8');
test(minimumTimeToInitialState("abacaba", 4), 1, 'Test 9');
test(minimumTimeToInitialState("xyzxyz", 2), 3, 'Test 10');
test(minimumTimeToInitialState("banana", 3), 2, 'Test 11');
test(minimumTimeToInitialState("abcabcabc", 3), 1, 'Test 12');
test(minimumTimeToInitialState("hellohello", 5), 1, 'Test 13');
test(minimumTimeToInitialState("racecar", 2), 3, 'Test 14');
test(minimumTimeToInitialState("abcd", 1), 4, 'Test 15');
test(minimumTimeToInitialState("aaaa", 1), 1, 'Test 16');
test(minimumTimeToInitialState("aaaa", 2), 1, 'Test 17');
test(minimumTimeToInitialState("abcbabcd", 2), 4, 'Test 18');
test(minimumTimeToInitialState("abcdef", 6), 1, 'Test 19');
test(minimumTimeToInitialState("rotate", 3), 2, 'Test 20');
test(minimumTimeToInitialState("abcdefghiabcdefghiabcdefghi", 9), 1, 'Test 21');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabc", 7), 3, 'Test 22');
test(minimumTimeToInitialState("abcdefabcdef", 2), 3, 'Test 23');
test(minimumTimeToInitialState("mississippi", 2), 6, 'Test 24');
test(minimumTimeToInitialState("abcdefghabcdefgh", 5), 4, 'Test 25');
test(minimumTimeToInitialState("abacabadabacabadabacabad", 5), 5, 'Test 26');
test(minimumTimeToInitialState("abacabadabacabad", 2), 4, 'Test 27');
test(minimumTimeToInitialState("abacabacabacabacabacaba", 5), 4, 'Test 28');
test(minimumTimeToInitialState("racecar", 1), 6, 'Test 29');
test(minimumTimeToInitialState("abcabcabcabcabcabcabcabc", 6), 1, 'Test 30');
test(minimumTimeToInitialState("aaaaaa", 1), 1, 'Test 31');
test(minimumTimeToInitialState("cascadecascade", 2), 7, 'Test 32');
test(minimumTimeToInitialState("aaabbbcccdddaa", 3), 4, 'Test 33');
test(minimumTimeToInitialState("zzzzzzzzzzzzzzzz", 3), 1, 'Test 34');
test(minimumTimeToInitialState("aaaabbbbcccc", 4), 3, 'Test 35');
test(minimumTimeToInitialState("abcabcabcabc", 3), 1, 'Test 36');
test(minimumTimeToInitialState("abcdefabcdefabcdefabcdef", 6), 1, 'Test 37');
test(minimumTimeToInitialState("qwertyuiopqwertyuiopqwertyuiop", 8), 4, 'Test 38');
test(minimumTimeToInitialState("abcabcabcabcabc", 5), 3, 'Test 39');
test(minimumTimeToInitialState("abcdefgabcdefg", 3), 5, 'Test 40');
test(minimumTimeToInitialState("abcdefgabcdefg", 5), 3, 'Test 41');
test(minimumTimeToInitialState("aabbccddeeff", 6), 2, 'Test 42');
test(minimumTimeToInitialState("abcdefghabcdefghabcdefgh", 8), 1, 'Test 43');
test(minimumTimeToInitialState("aaaaabbbbbccccdddd", 4), 5, 'Test 44');
test(minimumTimeToInitialState("abcdefghabcdefgh", 8), 1, 'Test 45');
test(minimumTimeToInitialState("abcdeabcdeabcdeabcdeabcdeabcde", 9), 4, 'Test 46');
test(minimumTimeToInitialState("xyzxyzxyzxyz", 3), 1, 'Test 47');
test(minimumTimeToInitialState("qwertyuiopqwertyuiopqwerty", 11), 3, 'Test 48');
test(minimumTimeToInitialState("abcdabcdabcdabcdabcdabcdabcdabcd", 8), 1, 'Test 49');
test(minimumTimeToInitialState("mnopqrstmnopqrstmnopqr", 7), 4, 'Test 50');
test(minimumTimeToInitialState("hellohellohello", 5), 1, 'Test 51');
test(minimumTimeToInitialState("deeddeed", 4), 1, 'Test 52');
test(minimumTimeToInitialState("abababababababab", 3), 2, 'Test 53');
test(minimumTimeToInitialState("repetitionrepetition", 7), 3, 'Test 54');
test(minimumTimeToInitialState("civiccivicciviccivic", 4), 5, 'Test 55');
test(minimumTimeToInitialState("aabbccddeeaabbccddee", 5), 2, 'Test 56');
test(minimumTimeToInitialState("mnopmnopmnopmnop", 2), 2, 'Test 57');
test(minimumTimeToInitialState("abcabcabcabcabcabc", 5), 3, 'Test 58');
test(minimumTimeToInitialState("aabbccddeeffgghhiijj", 10), 2, 'Test 59');
test(minimumTimeToInitialState("zzzzzzzzzzzzzzzzzzzzzzzz", 10), 1, 'Test 60');
test(minimumTimeToInitialState("qqwweerrttyy", 2), 6, 'Test 61');
test(minimumTimeToInitialState("abcdabcdabcdabcd", 4), 1, 'Test 62');
test(minimumTimeToInitialState("zzzzzzzzzzzzzzzzzzzzzz", 10), 1, 'Test 63');
test(minimumTimeToInitialState("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 1, 'Test 64');
test(minimumTimeToInitialState("abababababababababababab", 9), 2, 'Test 65');
test(minimumTimeToInitialState("pneumonoultramicroscopicsilicovolcanoconiosis", 10), 5, 'Test 66');
test(minimumTimeToInitialState("abcdefabcdefabcdef", 6), 1, 'Test 67');
test(minimumTimeToInitialState("banana", 1), 6, 'Test 68');
test(minimumTimeToInitialState("abracadabraabracadabra", 5), 5, 'Test 69');
test(minimumTimeToInitialState("repeatedrepeated", 8), 1, 'Test 70');
test(minimumTimeToInitialState("repeatedstringrepeatedstring", 9), 4, 'Test 71');
test(minimumTimeToInitialState("abcdefgabcdefgabcdefg", 6), 4, 'Test 72');
test(minimumTimeToInitialState("banana", 2), 3, 'Test 73');
test(minimumTimeToInitialState("abcdefabcdef", 3), 2, 'Test 74');
test(minimumTimeToInitialState("abababababababababababab", 3), 2, 'Test 75');
test(minimumTimeToInitialState("aabbccddeeff", 2), 6, 'Test 76');
test(minimumTimeToInitialState("abcabcabcabc", 4), 3, 'Test 77');
test(minimumTimeToInitialState("abcdefghijabcdefghijabcdefghij", 10), 1, 'Test 78');
test(minimumTimeToInitialState("xyxxyxyxxyxyxy", 3), 4, 'Test 79');
test(minimumTimeToInitialState("abcdabcdabcd", 5), 3, 'Test 80');
test(minimumTimeToInitialState("aaaabbbbccccddddeeeeffff", 5), 5, 'Test 81');
test(minimumTimeToInitialState("abcdefghijklmnopqrstuvwxyz", 1), 26, 'Test 82');
test(minimumTimeToInitialState("mississippi", 3), 4, 'Test 83');
test(minimumTimeToInitialState("repetitionrepetitionrepetition", 6), 5, 'Test 84');
test(minimumTimeToInitialState("aabbccddeeff", 3), 4, 'Test 85');
test(minimumTimeToInitialState("abcdabcdabcdabcd", 7), 3, 'Test 86');
test(minimumTimeToInitialState("abacabadabacaba", 4), 2, 'Test 87');
test(minimumTimeToInitialState("aaaaabbbbbccccc", 5), 3, 'Test 88');
test(minimumTimeToInitialState("aaaaaaaaaa", 1), 1, 'Test 89');
test(minimumTimeToInitialState("abracadabra", 5), 2, 'Test 90');
test(minimumTimeToInitialState("abcdabcdabcd", 3), 4, 'Test 91');
test(minimumTimeToInitialState("hellohellohello", 6), 3, 'Test 92');
test(minimumTimeToInitialState("aaaaabbbbb", 5), 2, 'Test 93');
test(minimumTimeToInitialState("abacabadabacaba", 5), 3, 'Test 94');
test(minimumTimeToInitialState("bananaananabayananabanana", 5), 5, 'Test 95');
test(minimumTimeToInitialState("palindromemordnilap", 8), 3, 'Test 96');
test(minimumTimeToInitialState("abracadabraabracadabra", 7), 3, 'Test 97');
test(minimumTimeToInitialState("abcdefghijkabcdefghijk", 7), 4, 'Test 98');
test(minimumTimeToInitialState("abcdabcdabcdabcd", 5), 4, 'Test 99');
test(minimumTimeToInitialState("mississippi", 4), 3, 'Test 100');
test(minimumTimeToInitialState("xyxzyzyzxzyzyzxzyz", 3), 6, 'Test 101');
test(minimumTimeToInitialState("aabbccddeeffgghhiijj", 6), 4, 'Test 102');
test(minimumTimeToInitialState("xyzxyzxyzxyzxyzxyzxyzxyz", 8), 3, 'Test 103');
test(minimumTimeToInitialState("abcabcabcabcabcabc", 4), 3, 'Test 104');
test(minimumTimeToInitialState("mnopqrnopqrmon", 6), 3, 'Test 105');
test(minimumTimeToInitialState("abcdefghabcdefghabcdefghabcdefgh", 7), 5, 'Test 106');
test(minimumTimeToInitialState("abcdabcdabcd", 4), 1, 'Test 107');
test(minimumTimeToInitialState("qwertyqwertyqwerty", 6), 1, 'Test 108');

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
