// Test: 2734. Lexicographically Smallest String After Substring Operation
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { smallestString } = require("./solution");

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

console.log("\n2734. Lexicographically Smallest String After Substring Operation\n");

test(smallestString("abz"), aay, 'Test 1');
test(smallestString("azazaz"), ayazaz, 'Test 2');
test(smallestString("zzzz"), yyyy, 'Test 3');
test(smallestString("azaza"), ayaza, 'Test 4');
test(smallestString("acbbc"), abaab, 'Test 5');
test(smallestString("cbabc"), baabc, 'Test 6');
test(smallestString("azaz"), ayaz, 'Test 7');
test(smallestString("z"), y, 'Test 8');
test(smallestString("aaa"), aaz, 'Test 9');
test(smallestString("aa"), az, 'Test 10');
test(smallestString("abcdzxyz"), aabcywxy, 'Test 11');
test(smallestString("abcd"), aabc, 'Test 12');
test(smallestString("zzz"), yyy, 'Test 13');
test(smallestString("leetcode"), kddsbncd, 'Test 14');
test(smallestString("xyz"), wxy, 'Test 15');
test(smallestString("mnopqrstuvsxyz"), lmnopqrsturwxy, 'Test 16');
test(smallestString("zzabcd"), yyabcd, 'Test 17');
test(smallestString("zazbzczdz"), yazbzczdz, 'Test 18');
test(smallestString("aaaaaabbbbb"), aaaaaaaaaaa, 'Test 19');
test(smallestString("abczzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), aabyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy, 'Test 20');
test(smallestString("abxyzmnopqrstu"), aawxylmnopqrst, 'Test 21');
test(smallestString("aczzzzza"), abyyyyya, 'Test 22');
test(smallestString("aabbaabbaabb"), aaaaaabbaabb, 'Test 23');
test(smallestString("aabbaabb"), aaaaaabb, 'Test 24');
test(smallestString("abcabcabc"), aababcabc, 'Test 25');
test(smallestString("abracadabra"), aaqacadabra, 'Test 26');
test(smallestString("aaaaazzzzz"), aaaaayyyyy, 'Test 27');
test(smallestString("aaaaz"), aaaay, 'Test 28');
test(smallestString("zaz"), yaz, 'Test 29');
test(smallestString("cbabczzzz"), baabczzzz, 'Test 30');
test(smallestString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy, 'Test 31');
test(smallestString("aaabaaab"), aaaaaaab, 'Test 32');
test(smallestString("aaaabbbbcccc"), aaaaaaaabbbb, 'Test 33');
test(smallestString("zzzzzzzzzz"), yyyyyyyyyy, 'Test 34');
test(smallestString("abcdabcdabcd"), aabcabcdabcd, 'Test 35');
test(smallestString("zzzzzaa"), yyyyyaa, 'Test 36');
test(smallestString("zzzzz"), yyyyy, 'Test 37');
test(smallestString("aaabaaaabaaa"), aaaaaaaabaaa, 'Test 38');
test(smallestString("zzyyzzyyzzyy"), yyxxyyxxyyxx, 'Test 39');
test(smallestString("aaaabaaa"), aaaaaaaa, 'Test 40');
test(smallestString("xyzyxzyzyxzyz"), wxyxwyxyxwyxy, 'Test 41');
test(smallestString("leetcodeisfun"), kddsbncdhretm, 'Test 42');
test(smallestString("aaaaaaaabczzzzzzzz"), aaaaaaaaabyyyyyyyy, 'Test 43');
test(smallestString("babababababababab"), aabababababababab, 'Test 44');
test(smallestString("zaa"), yaa, 'Test 45');
test(smallestString("mnopqrstu"), lmnopqrst, 'Test 46');
test(smallestString("aaaaaz"), aaaaay, 'Test 47');
test(smallestString("abacabad"), aaacabad, 'Test 48');
test(smallestString("leetcodez"), kddsbncdy, 'Test 49');
test(smallestString("zabz"), yabz, 'Test 50');
test(smallestString("abzab"), aayab, 'Test 51');
test(smallestString("aaaaaaaaaaaaaaaaaa"), aaaaaaaaaaaaaaaaaz, 'Test 52');
test(smallestString("azz"), ayy, 'Test 53');
test(smallestString("qwertypoiuytrewq"), pvdqsxonhtxsqdvp, 'Test 54');
test(smallestString("aabbccdd"), aaaabbcc, 'Test 55');
test(smallestString("abcdefghijklmnopqrstuvwxyzabc"), aabcdefghijklmnopqrstuvwxyabc, 'Test 56');
test(smallestString("zzabc"), yyabc, 'Test 57');
test(smallestString("zzzzza"), yyyyya, 'Test 58');
test(smallestString("abczzzzabc"), aabyyyyabc, 'Test 59');
test(smallestString("zzzzzzzzzzzzzzzzzzzzzzzz"), yyyyyyyyyyyyyyyyyyyyyyyy, 'Test 60');
test(smallestString("abzabzabz"), aayabzabz, 'Test 61');
test(smallestString("azzzzzz"), ayyyyyy, 'Test 62');
test(smallestString("hellozworld"), gdkknyvnqkc, 'Test 63');
test(smallestString("abacabadabacaba"), aaacabadabacaba, 'Test 64');
test(smallestString("abcxyzzyxabc"), aabwxyyxwabc, 'Test 65');
test(smallestString("zabcdefghijklmnopqrstuvwxyz"), yabcdefghijklmnopqrstuvwxyz, 'Test 66');
test(smallestString("zzzzzzzzzzzzzzzzzzzz"), yyyyyyyyyyyyyyyyyyyy, 'Test 67');
test(smallestString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy, 'Test 68');
test(smallestString("aaaabczzzz"), aaaaabyyyy, 'Test 69');
test(smallestString("abcdz"), aabcy, 'Test 70');
test(smallestString("aabbccddeeffgg"), aaaabbccddeeff, 'Test 71');
test(smallestString("bbbb"), aaaa, 'Test 72');
test(smallestString("abcdefghij"), aabcdefghi, 'Test 73');
test(smallestString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aaaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy, 'Test 74');
test(smallestString("aaaazzzz"), aaaayyyy, 'Test 75');
test(smallestString("bababababab"), aababababab, 'Test 76');
test(smallestString("abcxyzabc"), aabwxyabc, 'Test 77');
test(smallestString("zyxwvutsrqponmlkjihgfedcba"), yxwvutsrqponmlkjihgfedcbaa, 'Test 78');
test(smallestString("abcdefg"), aabcdef, 'Test 79');
test(smallestString("baaaaaaaaaa"), aaaaaaaaaaa, 'Test 80');
test(smallestString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy, 'Test 81');
test(smallestString("abcdefghijklmnopqrstuvwxyz"), aabcdefghijklmnopqrstuvwxy, 'Test 82');
test(smallestString("xyzabcdefghijklmnopqrstu"), wxyabcdefghijklmnopqrstu, 'Test 83');
test(smallestString("abzzz"), aayyy, 'Test 84');
test(smallestString("abcxyz"), aabwxy, 'Test 85');
test(smallestString("abczyx"), aabyxw, 'Test 86');
test(smallestString("zabxyzmnopqrstu"), yabxyzmnopqrstu, 'Test 87');
test(smallestString("aaaab"), aaaaa, 'Test 88');
test(smallestString("zzzzzyyyy"), yyyyyxxxx, 'Test 89');
test(smallestString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), aabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyz, 'Test 90');
test(smallestString("abcz"), aaby, 'Test 91');
test(smallestString("aaaaaaaaaaaaaaaaaaaaaaaaa"), aaaaaaaaaaaaaaaaaaaaaaaaz, 'Test 92');
test(smallestString("zzzabzzz"), yyyabzzz, 'Test 93');
test(smallestString("xyzaabbcc"), wxyaabbcc, 'Test 94');
test(smallestString("mississippi"), lhrrhrrhooh, 'Test 95');
test(smallestString("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), yxwvutsrqponmlkjihgfedcbaazyxwvutsrqponmlkjihgfedcba, 'Test 96');
test(smallestString("abcabcabcabcabc"), aababcabcabcabc, 'Test 97');
test(smallestString("hello world"), gdkknvnqkc, 'Test 98');
test(smallestString("baaaa"), aaaaa, 'Test 99');
test(smallestString("zzzzzzzz"), yyyyyyyy, 'Test 100');
test(smallestString("aaaazzzzzzzzzz"), aaaayyyyyyyyyy, 'Test 101');
test(smallestString("zyxzyxzyxzyx"), yxwyxwyxwyxw, 'Test 102');

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
