// Test: 459. Repeated Substring Pattern
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { repeatedSubstringPattern } = require("./solution");

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

console.log("\n459. Repeated Substring Pattern\n");

test(repeatedSubstringPattern("abac"), false, 'Test 1');
test(repeatedSubstringPattern("abcdef"), false, 'Test 2');
test(repeatedSubstringPattern("abababab"), true, 'Test 3');
test(repeatedSubstringPattern("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), true, 'Test 4');
test(repeatedSubstringPattern("a"), false, 'Test 5');
test(repeatedSubstringPattern("abab"), true, 'Test 6');
test(repeatedSubstringPattern("abcabcabc"), true, 'Test 7');
test(repeatedSubstringPattern("abcabcabcabc"), true, 'Test 8');
test(repeatedSubstringPattern("bcbcbcbcbcbcbcbcbcbc"), true, 'Test 9');
test(repeatedSubstringPattern("babab"), false, 'Test 10');
test(repeatedSubstringPattern("abcabc"), true, 'Test 11');
test(repeatedSubstringPattern("abcdabcd"), true, 'Test 12');
test(repeatedSubstringPattern("abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"), true, 'Test 13');
test(repeatedSubstringPattern("xyzxyzxyz"), true, 'Test 14');
test(repeatedSubstringPattern("abcdabcdabcd"), true, 'Test 15');
test(repeatedSubstringPattern("abc"), false, 'Test 16');
test(repeatedSubstringPattern("aaaa"), true, 'Test 17');
test(repeatedSubstringPattern("aba"), false, 'Test 18');
test(repeatedSubstringPattern("abcabcab"), false, 'Test 19');
test(repeatedSubstringPattern("ababab"), true, 'Test 20');
test(repeatedSubstringPattern("xyzxyzxyzxyz"), true, 'Test 21');
test(repeatedSubstringPattern("abacababacab"), true, 'Test 22');
test(repeatedSubstringPattern("bb"), true, 'Test 23');
test(repeatedSubstringPattern("abcabcabcabcabcabcabc"), true, 'Test 24');
test(repeatedSubstringPattern("aabbccddeeaabbccddeeaabbccddeeaabbccdd"), false, 'Test 25');
test(repeatedSubstringPattern("abbaabbaabba"), true, 'Test 26');
test(repeatedSubstringPattern("xyxyxyxyxyxy"), true, 'Test 27');
test(repeatedSubstringPattern("aaaabaaaabaaaaaab"), false, 'Test 28');
test(repeatedSubstringPattern("bcbcbcbcbcbcbcbc"), true, 'Test 29');
test(repeatedSubstringPattern("aaaaaaaab"), false, 'Test 30');
test(repeatedSubstringPattern("abacabacabac"), true, 'Test 31');
test(repeatedSubstringPattern("alibabaalibabaalibaba"), true, 'Test 32');
test(repeatedSubstringPattern("mnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrs"), true, 'Test 33');
test(repeatedSubstringPattern("aabbccddeeffaabbccddeeffaabbccddeeff"), true, 'Test 34');
test(repeatedSubstringPattern("abcdeabcdeabcdeabcdeabcde"), true, 'Test 35');
test(repeatedSubstringPattern("qwertyuiopqwertyuiop"), true, 'Test 36');
test(repeatedSubstringPattern("zzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 37');
test(repeatedSubstringPattern("abcdefabcdefabcdef"), true, 'Test 38');
test(repeatedSubstringPattern("abacbabacbabacb"), true, 'Test 39');
test(repeatedSubstringPattern("abcabcabcabcabcabcabcabcabcabc"), true, 'Test 40');
test(repeatedSubstringPattern("abcababcababcab"), true, 'Test 41');
test(repeatedSubstringPattern("abababababababababababababababababababababababab"), true, 'Test 42');
test(repeatedSubstringPattern("xyzxyzxyzxyzxyzxyz"), true, 'Test 43');
test(repeatedSubstringPattern("ababababab"), true, 'Test 44');
test(repeatedSubstringPattern("abcdabcdabcdabcdabcdabcdabcdabcd"), true, 'Test 45');
test(repeatedSubstringPattern("ababababababababababababababab"), true, 'Test 46');
test(repeatedSubstringPattern("bababababa"), true, 'Test 47');
test(repeatedSubstringPattern("aabbccddeeaabbccddeeaabbccddeeaabbccddeedded"), false, 'Test 48');
test(repeatedSubstringPattern("racecaracecar"), false, 'Test 49');
test(repeatedSubstringPattern("ababababa"), false, 'Test 50');
test(repeatedSubstringPattern("abababababababab"), true, 'Test 51');
test(repeatedSubstringPattern("aaaaaa"), true, 'Test 52');
test(repeatedSubstringPattern("abcabcabcabcabcabcabcabc"), true, 'Test 53');
test(repeatedSubstringPattern("abcdefabcdefabcdefabcdef"), true, 'Test 54');
test(repeatedSubstringPattern("abcabcabcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 55');
test(repeatedSubstringPattern("lmnolmnonlmnonlmnonlmnolmnonlmnonlmnonlmnolmno"), false, 'Test 56');
test(repeatedSubstringPattern("abbaabbaabbaabbaabbaabbaabbaabba"), true, 'Test 57');
test(repeatedSubstringPattern("hellohellohello"), true, 'Test 58');
test(repeatedSubstringPattern("abacabacabacabacabacabacabacabac"), true, 'Test 59');
test(repeatedSubstringPattern("abababababab"), true, 'Test 60');
test(repeatedSubstringPattern("banana"), false, 'Test 61');
test(repeatedSubstringPattern("zzzzzzzzzzzz"), true, 'Test 62');
test(repeatedSubstringPattern("abcdeabcdeabcdeabcde"), true, 'Test 63');
test(repeatedSubstringPattern("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), true, 'Test 64');
test(repeatedSubstringPattern("aabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeff"), true, 'Test 65');
test(repeatedSubstringPattern("abcabcabcabcabcabc"), true, 'Test 66');
test(repeatedSubstringPattern("abababababababababababababababab"), true, 'Test 67');
test(repeatedSubstringPattern("abcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 68');
test(repeatedSubstringPattern("abcabcabcabcabcab"), false, 'Test 69');
test(repeatedSubstringPattern("aabbaabbccddeeaabbccddeeaabbccddeeaabbccddeedded"), false, 'Test 70');
test(repeatedSubstringPattern("abcdabcdabcdabcdabcdabcd"), true, 'Test 71');
test(repeatedSubstringPattern("hello"), false, 'Test 72');
test(repeatedSubstringPattern("xyxxyxxyxxyxxyxxyxxyxxyxxyxxyxxyxxyxxyxxyxxyxyxxyxyxxyxxyx"), false, 'Test 73');
test(repeatedSubstringPattern("xyzxyzxyzxyzxyz"), true, 'Test 74');
test(repeatedSubstringPattern("mississippi"), false, 'Test 75');
test(repeatedSubstringPattern("abcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 76');
test(repeatedSubstringPattern("xyxyxyxyxyxyxyxyxyxyxy"), true, 'Test 77');
test(repeatedSubstringPattern("abcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijk"), true, 'Test 78');
test(repeatedSubstringPattern("abcabcabcabcabc"), true, 'Test 79');
test(repeatedSubstringPattern("abcdabcdabcdabcd"), true, 'Test 80');
test(repeatedSubstringPattern("abcdefghabcdefghabcdefgh"), true, 'Test 81');
test(repeatedSubstringPattern("zzzzzzzz"), true, 'Test 82');
test(repeatedSubstringPattern("aaaaaaa"), true, 'Test 83');
test(repeatedSubstringPattern("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), true, 'Test 84');
test(repeatedSubstringPattern("aabbccddeeffaabbccddeeff"), true, 'Test 85');
test(repeatedSubstringPattern("abcdabcda"), false, 'Test 86');
test(repeatedSubstringPattern("zzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 87');

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
