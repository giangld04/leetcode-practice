// Test: 1316. Distinct Echo Substrings
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { distinctEchoSubstrings } = require("./solution");

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

console.log("\n1316. Distinct Echo Substrings\n");

test(distinctEchoSubstrings("ababab"), 2, 'Test 1');
test(distinctEchoSubstrings(""), 0, 'Test 2');
test(distinctEchoSubstrings("abcabcabc"), 3, 'Test 3');
test(distinctEchoSubstrings("aaaa"), 2, 'Test 4');
test(distinctEchoSubstrings("ab"), 0, 'Test 5');
test(distinctEchoSubstrings("abbbabbb"), 2, 'Test 6');
test(distinctEchoSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 51, 'Test 7');
test(distinctEchoSubstrings("abcd"), 0, 'Test 8');
test(distinctEchoSubstrings("abacaba"), 0, 'Test 9');
test(distinctEchoSubstrings("abc"), 0, 'Test 10');
test(distinctEchoSubstrings("leetcodeleetcode"), 2, 'Test 11');
test(distinctEchoSubstrings("banana"), 2, 'Test 12');
test(distinctEchoSubstrings("xyzxyzxyzxyz"), 4, 'Test 13');
test(distinctEchoSubstrings("abcdefg"), 0, 'Test 14');
test(distinctEchoSubstrings("racecar racecar"), 0, 'Test 15');
test(distinctEchoSubstrings("a"), 0, 'Test 16');
test(distinctEchoSubstrings("abababab"), 3, 'Test 17');
test(distinctEchoSubstrings("aabbccddeeff"), 6, 'Test 18');
test(distinctEchoSubstrings("mississippi"), 4, 'Test 19');
test(distinctEchoSubstrings("ababababab"), 4, 'Test 20');
test(distinctEchoSubstrings("xyxyxyxyxyxyxyxyxyxyxyxy"), 11, 'Test 21');
test(distinctEchoSubstrings("abacaxiabacaxiabacaxi"), 7, 'Test 22');
test(distinctEchoSubstrings("abcabcabcabcabcabcabc"), 9, 'Test 23');
test(distinctEchoSubstrings("abcdeabcdeabcdeabcde"), 6, 'Test 24');
test(distinctEchoSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 33, 'Test 25');
test(distinctEchoSubstrings("repeatedrepeatedrepeatedrepeated"), 9, 'Test 26');
test(distinctEchoSubstrings("tattattattattattat"), 8, 'Test 27');
test(distinctEchoSubstrings("aaaaabaaaabaaaa"), 7, 'Test 28');
test(distinctEchoSubstrings("racecaracecaracecar"), 6, 'Test 29');
test(distinctEchoSubstrings("abcababcababcab"), 6, 'Test 30');
test(distinctEchoSubstrings("aabbccddeeffaabbccddeeff"), 7, 'Test 31');
test(distinctEchoSubstrings("xyxyxyxyxyxyxyxyxyxyxy"), 10, 'Test 32');
test(distinctEchoSubstrings("abacabaabacaba"), 3, 'Test 33');
test(distinctEchoSubstrings("leetcodeleetcodeleetcodeleetcode"), 10, 'Test 34');
test(distinctEchoSubstrings("thisisaverylongstringthatrepeatstitselfthisisaverylongstringthatrepeatstitself"), 2, 'Test 35');
test(distinctEchoSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 26, 'Test 36');
test(distinctEchoSubstrings("aaaabaaaab"), 3, 'Test 37');
test(distinctEchoSubstrings("abcabcabcabcabcabc"), 7, 'Test 38');
test(distinctEchoSubstrings("aaaaaaa"), 3, 'Test 39');
test(distinctEchoSubstrings("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 20, 'Test 40');
test(distinctEchoSubstrings("abababababab"), 5, 'Test 41');
test(distinctEchoSubstrings("aaaaabcabcabcabcabc"), 8, 'Test 42');
test(distinctEchoSubstrings("qwertyqwertyqwerty"), 6, 'Test 43');
test(distinctEchoSubstrings("aabbccddeeffaabbccddeeffaabbccddeeff"), 18, 'Test 44');
test(distinctEchoSubstrings("xyzxyzxyzxyzxyzxyz"), 7, 'Test 45');
test(distinctEchoSubstrings("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 27, 'Test 46');
test(distinctEchoSubstrings("abababababababababababababababababababababababababababababababababab"), 33, 'Test 47');
test(distinctEchoSubstrings("leetcodeisgoodandleetcodeisgood"), 2, 'Test 48');
test(distinctEchoSubstrings("supercalifragilisticexpialidocioussupercalifragilisticexpialidocious"), 2, 'Test 49');
test(distinctEchoSubstrings("abacabacabacabac"), 5, 'Test 50');
test(distinctEchoSubstrings("patternpatternpatternpattern"), 9, 'Test 51');
test(distinctEchoSubstrings("mississippimississippi"), 5, 'Test 52');
test(distinctEchoSubstrings("abcdabcdabcdabcd"), 5, 'Test 53');
test(distinctEchoSubstrings("zxcvbnmlkjhgfdsazxcvbnmlkjhgfdsa"), 1, 'Test 54');
test(distinctEchoSubstrings("abcdefgabcdefgabcdefg"), 7, 'Test 55');
test(distinctEchoSubstrings("abracadabraabracadabra"), 3, 'Test 56');
test(distinctEchoSubstrings("hellohellohellohellohello"), 11, 'Test 57');
test(distinctEchoSubstrings("zzzzzzzzzzzzzzzzzzzz"), 10, 'Test 58');
test(distinctEchoSubstrings("zzzzzzzzzzzzzzzz"), 8, 'Test 59');
test(distinctEchoSubstrings("abababa"), 2, 'Test 60');
test(distinctEchoSubstrings("ababababababab"), 6, 'Test 61');
test(distinctEchoSubstrings("aaaaaaaaaa"), 5, 'Test 62');
test(distinctEchoSubstrings("abcdabcdeabcd"), 1, 'Test 63');
test(distinctEchoSubstrings("racecar"), 0, 'Test 64');
test(distinctEchoSubstrings("abcdefghabcdefgh"), 1, 'Test 65');
test(distinctEchoSubstrings("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy"), 32, 'Test 66');
test(distinctEchoSubstrings("xyzxyzxyzxyzxyzxyzxyzxyz"), 10, 'Test 67');
test(distinctEchoSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 30, 'Test 68');
test(distinctEchoSubstrings("abcabcabcabc"), 4, 'Test 69');
test(distinctEchoSubstrings("abcdefghijabcdefghijabcdefghij"), 10, 'Test 70');
test(distinctEchoSubstrings("pneumonoultramicroscopicsilicovolcanoconiosis"), 0, 'Test 71');
test(distinctEchoSubstrings("aaaaa"), 2, 'Test 72');
test(distinctEchoSubstrings("abracadabrabracadabra"), 4, 'Test 73');
test(distinctEchoSubstrings("aaaaaa"), 3, 'Test 74');
test(distinctEchoSubstrings("abacabadabacabadabacaba"), 8, 'Test 75');
test(distinctEchoSubstrings("aaaaabbbbbaaaaabbbbb"), 5, 'Test 76');
test(distinctEchoSubstrings("noonnoonnoonnoon"), 7, 'Test 77');
test(distinctEchoSubstrings("abacabadabacaba"), 0, 'Test 78');
test(distinctEchoSubstrings("xyxyxyxyxyxyxyxy"), 7, 'Test 79');
test(distinctEchoSubstrings("abracadabraabracadabraabracadabraabracadabraabracadabraabracadabra"), 25, 'Test 80');
test(distinctEchoSubstrings("abcabcabcabcabc"), 6, 'Test 81');
test(distinctEchoSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 43, 'Test 82');
test(distinctEchoSubstrings("abababababababab"), 7, 'Test 83');
test(distinctEchoSubstrings("aaaaaaaaaabaaaaaaaaaa"), 5, 'Test 84');
test(distinctEchoSubstrings("aaaabbbbcccc"), 6, 'Test 85');
test(distinctEchoSubstrings("noonnoonnoonnoonnoon"), 10, 'Test 86');
test(distinctEchoSubstrings("abcxyzabcxyzabcxyz"), 6, 'Test 87');
test(distinctEchoSubstrings("abcabca"), 2, 'Test 88');
test(distinctEchoSubstrings("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 52, 'Test 89');
test(distinctEchoSubstrings("uniqueuniqueuniqueunique"), 7, 'Test 90');
test(distinctEchoSubstrings("racecaracecar"), 2, 'Test 91');
test(distinctEchoSubstrings("abcdefabcdefabcdef"), 6, 'Test 92');
test(distinctEchoSubstrings("bananabananaananabanana"), 7, 'Test 93');
test(distinctEchoSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 32, 'Test 94');
test(distinctEchoSubstrings("bananaabanana"), 3, 'Test 95');
test(distinctEchoSubstrings("aaaabbbbccccddddeeeeffff"), 12, 'Test 96');
test(distinctEchoSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 27, 'Test 97');
test(distinctEchoSubstrings("hellohellohellohellohellohellohellohellohellohello"), 22, 'Test 98');

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
