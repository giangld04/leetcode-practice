// Test: 1177. Can Make Palindrome From Substring
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { canMakePaliQueries } = require("./solution");

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

console.log("\n1177. Can Make Palindrome From Substring\n");

test(canMakePaliQueries("abcd", [[0,2,1],[1,3,1]]), [true, true], 'Test 1');
test(canMakePaliQueries("abcdefghijklmnopqrstuvwxyz", [[0,25,12],[0,25,13],[0,25,14]]), [false, true, true], 'Test 2');
test(canMakePaliQueries("zaz", [[0,2,1],[0,1,0],[1,2,0]]), [true, false, false], 'Test 3');
test(canMakePaliQueries("abcda", [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]), [true, false, false, true, true], 'Test 4');
test(canMakePaliQueries("aaaa", [[0,3,0],[1,2,0]]), [true, true], 'Test 5');
test(canMakePaliQueries("aabbc", [[0,4,2],[1,3,1]]), [true, true], 'Test 6');
test(canMakePaliQueries("aaaa", [[0,3,0],[0,2,0],[1,3,0]]), [true, true, true], 'Test 7');
test(canMakePaliQueries("aabbc", [[0,4,1],[1,3,0]]), [true, true], 'Test 8');
test(canMakePaliQueries("lyb", [[0,1,0],[2,2,1]]), [false, true], 'Test 9');
test(canMakePaliQueries("abcd", [[0,0,0],[1,1,0],[2,2,0],[3,3,0],[0,3,2]]), [true, true, true, true, true], 'Test 10');
test(canMakePaliQueries("abcdedcba", [[0,8,0],[1,7,1],[2,6,2]]), [true, true, true], 'Test 11');
test(canMakePaliQueries("abcd", [[0,0,0],[1,1,0],[2,2,0],[3,3,0],[0,3,2],[0,3,3]]), [true, true, true, true, true, true], 'Test 12');
test(canMakePaliQueries("aabbc", [[0,4,0],[0,4,1],[0,4,2]]), [true, true, true], 'Test 13');
test(canMakePaliQueries("mississippi", [[0,10,3],[2,8,2],[0,4,1]]), [true, true, true], 'Test 14');
test(canMakePaliQueries("abcdefghijkilmnopqrstuvwxyz", [[0,25,12],[1,24,11],[2,23,10],[3,22,9],[4,21,8],[5,20,7],[6,19,6]]), [true, true, true, true, true, true, true], 'Test 15');
test(canMakePaliQueries("racecar", [[0,6,0],[1,5,0],[2,4,0],[0,5,1],[1,4,1]]), [true, true, true, true, true], 'Test 16');
test(canMakePaliQueries("mississippi", [[0,4,1],[1,5,1],[2,6,1],[3,7,1],[4,8,1],[5,9,1],[6,10,1]]), [true, true, true, true, true, true, true], 'Test 17');
test(canMakePaliQueries("abacabadabacaba", [[0,4,1],[1,5,1],[2,6,1],[3,7,1],[4,8,1],[5,9,1],[6,10,1],[7,11,1],[8,12,1],[9,13,1],[10,14,1],[11,15,1],[12,16,1],[13,17,1],[14,18,1]]), Error: list index out of range, 'Test 18');
test(canMakePaliQueries("babababababababababa", [[0,4,1],[5,9,2],[10,14,3],[15,19,4],[20,24,5],[0,25,12]]), Error: list index out of range, 'Test 19');
test(canMakePaliQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,51,12],[10,20,5],[30,40,10],[25,45,20]]), [true, true, true, true], 'Test 20');
test(canMakePaliQueries("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd", [[0,9,4],[10,19,5],[20,29,6],[30,39,7],[0,39,20]]), [true, true, true, true, true], 'Test 21');
test(canMakePaliQueries("almostapalindromeexample", [[0,20,5],[5,15,3],[10,20,6],[0,20,8],[5,15,2]]), [true, false, true, true, false], 'Test 22');
test(canMakePaliQueries("a", [[0,0,0],[0,0,1]]), [true, true], 'Test 23');
test(canMakePaliQueries("abcdefghij", [[0,4,2],[5,9,2],[0,9,4],[0,9,5],[2,7,2]]), [true, true, false, true, false], 'Test 24');
test(canMakePaliQueries("xyxzyzyxzyzyxzyzyxzyzyxzyzyx", [[0,10,3],[11,21,4],[22,32,5],[0,32,16],[5,27,11]]), Error: list index out of range, 'Test 25');
test(canMakePaliQueries("anagram", [[0,6,3],[1,5,2],[2,4,1],[0,5,2],[1,4,1],[2,3,0]]), [true, true, true, true, false, false], 'Test 26');
test(canMakePaliQueries("palindrome", [[0,7,3],[1,6,2],[2,5,1],[0,6,2],[1,5,1]]), [false, false, false, false, false], 'Test 27');
test(canMakePaliQueries("racecar", [[0,6,0],[1,5,0],[2,4,0],[0,5,1],[1,4,1],[0,4,2]]), [true, true, true, true, true, true], 'Test 28');
test(canMakePaliQueries("mississippi", [[0,4,1],[0,6,2],[0,8,3],[0,10,4],[1,5,1],[2,6,2],[3,7,3],[4,8,4],[5,9,3],[6,10,4]]), [true, true, true, true, true, true, true, true, true, true], 'Test 29');
test(canMakePaliQueries("abacabadabacaba", [[0,4,1],[5,9,2],[10,14,3],[0,14,7],[0,14,8],[0,14,9]]), [true, true, true, true, true, true], 'Test 30');
test(canMakePaliQueries("abcdedcbaabcdedcba", [[0,18,4],[5,13,3],[2,16,5]]), Error: list index out of range, 'Test 31');
test(canMakePaliQueries("zyxwvutsrqponmlkjihgfedcba", [[0,25,12],[10,20,5],[0,15,8],[5,25,15],[0,10,3]]), [false, true, true, true, false], 'Test 32');
test(canMakePaliQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,51,13],[10,40,15],[20,30,10]]), [true, true, true], 'Test 33');
test(canMakePaliQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,51,25],[10,30,15],[0,26,13],[27,51,13],[13,39,20]]), [true, true, true, true, true], 'Test 34');
test(canMakePaliQueries("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", [[0,100,50],[50,100,25],[0,50,25],[25,75,25],[50,99,50],[0,99,50],[10,90,40],[20,80,30]]), Error: list index out of range, 'Test 35');
test(canMakePaliQueries("racecar", [[0,6,0],[1,5,0],[2,4,0],[0,5,1],[1,4,1],[2,3,1],[0,4,2],[1,3,2],[0,3,3],[0,2,2]]), [true, true, true, true, true, true, true, true, true, true], 'Test 36');
test(canMakePaliQueries("noonnoonnoon", [[0,3,1],[4,7,1],[8,11,1],[0,11,2],[0,11,3],[0,11,4]]), [true, true, true, true, true, true], 'Test 37');
test(canMakePaliQueries("aaaaabbbbbccccddddeeeeeffffffggggghhhhhhiiiiii", [[0,41,20],[5,35,15],[10,30,10],[0,41,25],[15,35,8]]), [true, true, true, true, true], 'Test 38');
test(canMakePaliQueries("thisisaverylongstringwithseveralcharacters", [[0,4,1],[5,9,2],[10,14,3],[15,19,4],[20,24,5],[0,25,10]]), [true, true, true, true, true, true], 'Test 39');
test(canMakePaliQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,51,26],[0,50,25],[10,40,15],[15,35,10],[20,30,5]]), [true, true, true, true, true], 'Test 40');
test(canMakePaliQueries("abababababababababababababababab", [[0,39,10],[5,25,15],[10,30,20],[20,39,10],[0,19,10]]), Error: list index out of range, 'Test 41');
test(canMakePaliQueries("racecar", [[0,6,0],[1,5,0],[2,4,0],[0,3,1],[3,6,1],[1,4,1],[2,5,1]]), [true, true, true, false, false, true, true], 'Test 42');
test(canMakePaliQueries("aaabbbccc", [[0,8,3],[0,2,1],[3,5,1],[6,8,1]]), [true, true, true, true], 'Test 43');
test(canMakePaliQueries("zyxwvutsrqponmlkjihgfedcba", [[0,25,12],[0,25,13],[0,25,14],[0,12,6],[13,25,6]]), [false, true, true, true, true], 'Test 44');
test(canMakePaliQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,50,13],[0,50,14],[0,25,10],[25,50,10]]), [true, true, true, true], 'Test 45');
test(canMakePaliQueries("thisisaverylongstringwithmanysamecharacters", [[0,20,5],[5,30,10],[15,45,15],[35,50,7],[40,49,3]]), Error: list index out of range, 'Test 46');
test(canMakePaliQueries("mississippi", [[0,4,1],[1,3,1],[2,4,1],[3,5,1],[4,6,1],[5,7,1],[6,8,1],[7,9,1],[8,10,1]]), [true, true, true, true, true, true, true, true, true], 'Test 47');
test(canMakePaliQueries("zyxwvutsrqponmlkjihgfedcba", [[0,25,12],[3,22,9],[5,19,8],[7,15,4],[10,14,2]]), [false, false, true, true, true], 'Test 48');
test(canMakePaliQueries("racecar", [[0,6,0],[1,5,1],[2,4,0],[0,2,0],[3,5,0]]), [true, true, true, false, false], 'Test 49');
test(canMakePaliQueries("zyxwvutsrqponmlkjihgfedcba", [[0,25,12],[0,25,13],[0,25,14],[0,25,15]]), [false, true, true, true], 'Test 50');
test(canMakePaliQueries("abcdabcdabcdabcd", [[0,15,7],[1,14,7],[2,13,7],[3,12,6],[4,11,6],[5,10,5],[6,9,4]]), [true, true, true, true, true, true, true], 'Test 51');
test(canMakePaliQueries("abacabadabacaba", [[0,14,3],[5,10,2],[2,12,4]]), [true, true, true], 'Test 52');
test(canMakePaliQueries("thisisaverylongstringwithvariouscharacters", [[0,30,10],[5,25,12],[15,45,15]]), Error: list index out of range, 'Test 53');
test(canMakePaliQueries("abcdefghij", [[0,9,5],[1,8,4],[2,7,3],[3,6,2],[4,5,1],[0,8,4],[1,7,3],[2,6,2],[3,5,1],[0,7,3],[1,6,2],[2,5,1],[0,6,2],[1,5,1],[0,5,1]]), [true, true, true, true, true, true, true, true, true, false, false, false, false, false, false], 'Test 54');
test(canMakePaliQueries("ab", [[0,1,0],[0,1,1]]), [false, true], 'Test 55');
test(canMakePaliQueries("noon", [[0,3,0],[1,2,0],[0,2,0],[1,3,1],[0,1,0],[2,3,0]]), [true, true, true, true, false, false], 'Test 56');
test(canMakePaliQueries("aaaabbbbcccc", [[0,9,3],[1,8,3],[2,7,3],[3,6,2],[4,5,1],[0,5,3],[5,10,3]]), [true, true, true, true, true, true, true], 'Test 57');
test(canMakePaliQueries("ababababababababababababababababababababab", [[0,49,12],[5,45,25],[10,40,15],[0,49,13],[25,49,10]]), Error: list index out of range, 'Test 58');
test(canMakePaliQueries("mississippi", [[0,4,1],[0,9,2],[4,9,2],[0,10,3],[0,10,2]]), [true, true, true, true, true], 'Test 59');
test(canMakePaliQueries("aabbaa", [[0,5,1],[1,4,0],[2,3,1]]), [true, true, true], 'Test 60');
test(canMakePaliQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,51,13],[5,46,25],[10,41,17],[15,36,10],[20,31,5]]), [true, true, true, true, true], 'Test 61');
test(canMakePaliQueries("abacabadabacaba", [[0,14,3],[2,12,4],[5,9,2],[1,13,5]]), [true, true, true, true], 'Test 62');
test(canMakePaliQueries("abacabadabacaba", [[0,14,3],[1,13,3],[2,12,3],[3,11,3],[4,10,3],[5,9,3],[6,8,3]]), [true, true, true, true, true, true, true], 'Test 63');
test(canMakePaliQueries("mississippi", [[0,4,1],[4,10,2],[0,10,2],[0,10,3],[0,10,4],[0,10,5]]), [true, true, true, true, true, true], 'Test 64');
test(canMakePaliQueries("abcdefghijklmnopqrstuvwxyza", [[0,25,12],[1,24,12],[2,23,12],[3,22,12],[4,21,12]]), [false, true, true, true, true], 'Test 65');
test(canMakePaliQueries("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", [[0,51,25],[10,40,15],[25,50,10],[0,51,13],[20,30,5]]), [true, true, false, true, true], 'Test 66');
test(canMakePaliQueries("level", [[0,4,0],[1,3,0],[2,2,0],[0,3,1],[1,2,1]]), [true, true, true, true, true], 'Test 67');
test(canMakePaliQueries("aabbccddeeffgg", [[0,5,2],[0,11,3],[0,7,2],[7,11,2]]), [true, true, true, true], 'Test 68');
test(canMakePaliQueries("banana", [[0,5,2],[1,4,1],[2,3,0],[0,3,1],[1,2,0],[3,5,2]]), [true, true, false, true, false, true], 'Test 69');
test(canMakePaliQueries("mississippi", [[0,4,1],[4,10,2],[1,7,2],[0,10,2],[3,6,1]]), [true, true, true, true, true], 'Test 70');
test(canMakePaliQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,25,12],[26,51,13],[0,51,26],[13,38,18],[0,103,52]]), Error: list index out of range, 'Test 71');
test(canMakePaliQueries("mississippi", [[0,4,2],[1,3,0],[0,10,4],[5,9,1],[2,8,3]]), [true, true, true, true, true], 'Test 72');
test(canMakePaliQueries("mamad", [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]), [true, false, true, true, true], 'Test 73');
test(canMakePaliQueries("nootnoitnoitnoitnoit", [[0,17,8],[1,16,7],[2,15,6],[3,14,5],[4,13,4]]), [true, true, true, true, true], 'Test 74');
test(canMakePaliQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,51,13],[5,45,25],[10,40,10],[0,51,26],[25,51,20]]), [true, true, true, true, true], 'Test 75');
test(canMakePaliQueries("racecar", [[0,6,0],[1,5,1],[0,4,2]]), [true, true, true], 'Test 76');
test(canMakePaliQueries("", [[0,0,0]]), Error: list index out of range, 'Test 77');
test(canMakePaliQueries("abacaxb", [[0,6,2],[0,3,1],[3,6,1],[0,6,3]]), [true, true, false, true], 'Test 78');
test(canMakePaliQueries("abacabadabacaba", [[0,14,3],[5,10,2],[0,6,1],[7,13,2],[1,13,6]]), [true, true, true, true, true], 'Test 79');
test(canMakePaliQueries("hello world", [[0,4,2],[5,9,1],[0,10,4],[1,9,3],[6,10,2]]), Error: list index out of range, 'Test 80');
test(canMakePaliQueries("mamamamamamamama", [[0,13,3],[1,12,4],[2,11,2],[3,10,1],[4,9,0]]), [true, true, true, true, false], 'Test 81');
test(canMakePaliQueries("repeatedcharactersinthisstring", [[0,24,10],[5,15,5],[10,20,8],[0,24,12],[5,15,3]]), [true, true, true, true, true], 'Test 82');
test(canMakePaliQueries("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", [[0,51,25],[0,51,26],[0,51,27],[13,27,7],[25,51,13]]), [true, true, true, true, true], 'Test 83');
test(canMakePaliQueries("banana", [[0,5,1],[1,4,1],[2,3,1],[0,3,2],[1,2,2],[3,4,2],[2,5,2]]), [true, true, true, true, true, true, true], 'Test 84');
test(canMakePaliQueries("noonnoonnoon", [[0,5,1],[6,11,2],[0,11,3],[3,8,2],[0,11,6]]), [true, true, true, true, true], 'Test 85');
test(canMakePaliQueries("abcbabcbabcba", [[0,4,1],[5,9,1],[10,14,1],[0,6,2],[7,13,2],[0,12,3]]), Error: list index out of range, 'Test 86');
test(canMakePaliQueries("racecar", [[0,4,0],[1,3,1],[2,2,0],[0,6,2]]), [false, true, true, true], 'Test 87');
test(canMakePaliQueries("racecar", [[0,6,0],[1,5,0],[2,4,0],[0,5,1],[1,4,1],[2,3,1]]), [true, true, true, true, true, true], 'Test 88');
test(canMakePaliQueries("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", [[0,25,12],[26,51,13],[0,51,26],[13,38,18]]), [false, true, true, true], 'Test 89');
test(canMakePaliQueries("abcdefgfedcba", [[0,12,0],[1,11,1],[2,10,2],[3,9,3],[4,8,4]]), [true, true, true, true, true], 'Test 90');
test(canMakePaliQueries("xyzxyzxyzxyzxyz", [[0,14,4],[1,13,4],[2,12,4],[3,11,4],[4,10,4],[5,9,4]]), [true, true, true, true, true, true], 'Test 91');
test(canMakePaliQueries("aaaaabbbbcccccdddddeeeee", [[0,4,2],[5,9,2],[10,14,2],[15,19,2],[20,24,2],[0,24,5]]), Error: list index out of range, 'Test 92');
test(canMakePaliQueries("thisisaverylongandrandomstringfornumberofqueries", [[0,40,15],[10,35,10],[20,30,5],[0,40,20],[15,25,8]]), [true, true, true, true, true], 'Test 93');
test(canMakePaliQueries("xyzzyx", [[0,5,2],[1,4,1],[2,3,0]]), [true, true, true], 'Test 94');
test(canMakePaliQueries("xyzzazxy", [[0,7,2],[1,6,1],[2,5,0]]), [true, false, false], 'Test 95');
test(canMakePaliQueries("abababababababab", [[0,15,4],[0,7,3],[8,15,3],[0,15,7]]), [true, true, true, true], 'Test 96');
test(canMakePaliQueries("aaaabbbbccccddddeeeeffffgggghhhhiiii", [[0,39,19],[10,35,15],[20,30,5],[0,39,20],[15,25,10]]), Error: list index out of range, 'Test 97');
test(canMakePaliQueries("abcdefghij", [[0,9,4],[0,4,2],[5,9,2],[0,9,5]]), [false, true, true, true], 'Test 98');
test(canMakePaliQueries("palindromechecker", [[0,12,6],[1,11,5],[2,10,4],[3,9,3],[4,8,2]]), [true, true, true, true, true], 'Test 99');
test(canMakePaliQueries("mississippi", [[0,10,3],[1,9,2],[2,8,1],[0,10,4],[3,7,2]]), [true, true, true, true, true], 'Test 100');
test(canMakePaliQueries("aabbaa", [[0,5,0],[0,2,0],[1,4,0],[2,3,0]]), [true, true, true, true], 'Test 101');
test(canMakePaliQueries("noonnoon", [[0,7,1],[1,6,1],[2,5,1],[3,4,0],[0,3,1],[4,7,1],[1,5,1]]), [true, true, true, true, true, true, true], 'Test 102');
test(canMakePaliQueries("qpalzmw", [[0,6,2],[1,5,2],[2,4,2],[3,6,2],[0,5,3]]), [false, true, true, true, true], 'Test 103');
test(canMakePaliQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,51,12],[0,51,13],[0,51,14],[26,51,6],[0,25,12],[26,51,13]]), [true, true, true, true, true, true], 'Test 104');
test(canMakePaliQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,51,13],[10,30,15],[20,40,20],[35,49,8]]), [true, true, true, true], 'Test 105');
test(canMakePaliQueries("racecar", [[0,4,0],[0,5,1],[0,6,1],[1,5,1]]), [false, true, true, true], 'Test 106');
test(canMakePaliQueries("abcabcabcabcabcabc", [[0,5,2],[5,11,2],[10,16,2],[15,21,2],[20,25,2]]), Error: list index out of range, 'Test 107');
test(canMakePaliQueries("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", [[0,51,25],[5,45,20],[10,40,15]]), [true, true, true], 'Test 108');
test(canMakePaliQueries("abacabadabacaba", [[0,3,1],[0,4,1],[1,5,2],[2,6,1],[3,7,2],[4,8,3]]), [true, true, true, true, true, true], 'Test 109');

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
