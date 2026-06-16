// Test: 936. Stamping The Sequence
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { movesToStamp } = require("./solution");

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

console.log("\n936. Stamping The Sequence\n");

test(movesToStamp("world", "worldworldworld"), [9, 8, 7, 6, 4, 3, 2, 1, 10, 5, 0], 'Test 1');
test(movesToStamp("abc", "abcababcbcababc"), [11, 9, 8, 6, 4, 2, 1, 10, 7, 3, 12, 5, 0], 'Test 2');
test(movesToStamp("abcde", "abcdeabcde"), [4, 3, 2, 1, 5, 0], 'Test 3');
test(movesToStamp("abc", "abc????"), [], 'Test 4');
test(movesToStamp("a", "aaaaaaaa"), [7, 6, 5, 4, 3, 2, 1, 0], 'Test 5');
test(movesToStamp("abcde", "abcdeabcdeabcde"), [9, 8, 7, 6, 4, 3, 2, 1, 10, 5, 0], 'Test 6');
test(movesToStamp("abc", "????abc???"), [], 'Test 7');
test(movesToStamp("abc", "abcabc????????"), [], 'Test 8');
test(movesToStamp("abc", "?????"), [], 'Test 9');
test(movesToStamp("abc", "ab?bc"), [], 'Test 10');
test(movesToStamp("hello", "hellohellohello"), [9, 8, 7, 6, 4, 3, 2, 1, 10, 5, 0], 'Test 11');
test(movesToStamp("abc", "abc????abc"), [], 'Test 12');
test(movesToStamp("ab", "abababab"), [5, 3, 1, 6, 4, 2, 0], 'Test 13');
test(movesToStamp("abcdef", "abcdefabcdef"), [5, 4, 3, 2, 1, 6, 0], 'Test 14');
test(movesToStamp("a", "aaaaaaaaa"), [8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 15');
test(movesToStamp("abc", "abcabcabc"), [5, 4, 2, 1, 6, 3, 0], 'Test 16');
test(movesToStamp("abc", "abc????????abc"), [], 'Test 17');
test(movesToStamp("abc", "abcabc"), [2, 1, 3, 0], 'Test 18');
test(movesToStamp("a", "aaaaaaaaaa"), [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 19');
test(movesToStamp("test", "testtesttest"), [7, 6, 5, 3, 2, 1, 8, 4, 0], 'Test 20');
test(movesToStamp("abcd", "abcdabcd"), [3, 2, 1, 4, 0], 'Test 21');
test(movesToStamp("abca", "aabcaca"), [2, 3, 0, 1], 'Test 22');
test(movesToStamp("abc", "????abc"), [], 'Test 23');
test(movesToStamp("abc", "??abc??"), [], 'Test 24');
test(movesToStamp("abc", "ababc"), [1, 0, 2], 'Test 25');
test(movesToStamp("xyz", "xyzxyzxyz"), [5, 4, 2, 1, 6, 3, 0], 'Test 26');
test(movesToStamp("abc", "????????abcabc"), [], 'Test 27');
test(movesToStamp("abc", "abcabcabcabcabc"), [11, 10, 8, 7, 5, 4, 2, 1, 12, 9, 6, 3, 0], 'Test 28');
test(movesToStamp("abcde", "abcde"), [0], 'Test 29');
test(movesToStamp("abc", "ababcbababcbababc"), [11, 9, 5, 3, 13, 10, 7, 4, 1, 12, 6, 0, 14, 8, 2], 'Test 30');
test(movesToStamp("mnopqr", "mnopqrmnopqrmnopqrmnopqrmnopqr"), [23, 22, 21, 20, 19, 17, 16, 15, 14, 13, 11, 10, 9, 8, 7, 5, 4, 3, 2, 1, 24, 18, 12, 6, 0], 'Test 31');
test(movesToStamp("efgh", "efghefghefghefghefghefghefgh"), [23, 22, 21, 19, 18, 17, 15, 14, 13, 11, 10, 9, 7, 6, 5, 3, 2, 1, 24, 20, 16, 12, 8, 4, 0], 'Test 32');
test(movesToStamp("aabbcc", "aabbccaaabbccaaabbcc"), [11, 10, 9, 8, 4, 3, 2, 1, 13, 12, 6, 5, 14, 7, 0], 'Test 33');
test(movesToStamp("abcd", "ddddddddddddddddddddddddddddabcd"), [], 'Test 34');
test(movesToStamp("xyz", "xyxyxyxyxyxyxyxyxyxy"), [], 'Test 35');
test(movesToStamp("zzz", "zzzzzzzzzzzzzzzzzzzz"), [17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 36');
test(movesToStamp("abcdef", "abcdefabcdefabcdefabcdefabcdefabcdef"), [29, 28, 27, 26, 25, 23, 22, 21, 20, 19, 17, 16, 15, 14, 13, 11, 10, 9, 8, 7, 5, 4, 3, 2, 1, 30, 24, 18, 12, 6, 0], 'Test 37');
test(movesToStamp("xyz", "xyxyxyxyxyxyxyxyxyxyxyx"), [], 'Test 38');
test(movesToStamp("abcabc", "abcabcabcabcabcabcabcd"), [], 'Test 39');
test(movesToStamp("aabbcc", "aabbccaaabbccaaabbccaaabbcc"), [18, 17, 16, 15, 11, 10, 9, 8, 4, 3, 2, 1, 20, 19, 13, 12, 6, 5, 21, 14, 7, 0], 'Test 40');
test(movesToStamp("xyz", "xyzxyzxyzxyzxyz"), [11, 10, 8, 7, 5, 4, 2, 1, 12, 9, 6, 3, 0], 'Test 41');
test(movesToStamp("abcd", "abcdabcdeabcdabcd"), [], 'Test 42');
test(movesToStamp("aaaa", "aaaaaaaaaaaaaaaa"), [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 43');
test(movesToStamp("abcde", "abcdeabcdeabcdeabcdef"), [], 'Test 44');
test(movesToStamp("abc", "xyzabcxyzabcxyz"), [], 'Test 45');
test(movesToStamp("abcd", "abcdabcdabcdabcd"), [11, 10, 9, 7, 6, 5, 3, 2, 1, 12, 8, 4, 0], 'Test 46');
test(movesToStamp("xyz", "xyzxyzxyzxyz"), [8, 7, 5, 4, 2, 1, 9, 6, 3, 0], 'Test 47');
test(movesToStamp("qrstuv", "qrstuvqrstuvqrstuvqrstuvqrstuvqrstuvqrstuv"), [35, 34, 33, 32, 31, 29, 28, 27, 26, 25, 23, 22, 21, 20, 19, 17, 16, 15, 14, 13, 11, 10, 9, 8, 7, 5, 4, 3, 2, 1, 36, 30, 24, 18, 12, 6, 0], 'Test 48');
test(movesToStamp("aaa", "aaaaaaaaaaaaaaaaaaaa"), [17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 49');
test(movesToStamp("a", "aaaaaaaaaaaaaaaaaaaa"), [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 50');
test(movesToStamp("xyzabc", "xyzabcxyzabcxyzabcxyzabc"), [17, 16, 15, 14, 13, 11, 10, 9, 8, 7, 5, 4, 3, 2, 1, 18, 12, 6, 0], 'Test 51');
test(movesToStamp("abcabc", "abcabcabcabcabcabcabc"), [14, 13, 11, 10, 8, 7, 5, 4, 2, 1, 15, 12, 9, 6, 3, 0], 'Test 52');
test(movesToStamp("abcde", "edcbaedcbaedcba"), [], 'Test 53');
test(movesToStamp("abcabc", "abcabcabcabcabcabcabcabc"), [17, 16, 14, 13, 11, 10, 8, 7, 5, 4, 2, 1, 18, 15, 12, 9, 6, 3, 0], 'Test 54');
test(movesToStamp("xyz", "xyzxyzxyzxyzxyzxyz"), [14, 13, 11, 10, 8, 7, 5, 4, 2, 1, 15, 12, 9, 6, 3, 0], 'Test 55');
test(movesToStamp("qrst", "qrstqrstqrstqrstqrstqrstqrstqrst"), [27, 26, 25, 23, 22, 21, 19, 18, 17, 15, 14, 13, 11, 10, 9, 7, 6, 5, 3, 2, 1, 28, 24, 20, 16, 12, 8, 4, 0], 'Test 56');
test(movesToStamp("mnop", "mnopmnopmnopmnopmnopmnopmnopmnop"), [27, 26, 25, 23, 22, 21, 19, 18, 17, 15, 14, 13, 11, 10, 9, 7, 6, 5, 3, 2, 1, 28, 24, 20, 16, 12, 8, 4, 0], 'Test 57');
test(movesToStamp("abc", "abcabcabcabcabcabc"), [14, 13, 11, 10, 8, 7, 5, 4, 2, 1, 15, 12, 9, 6, 3, 0], 'Test 58');
test(movesToStamp("abac", "abacabacabacabacabac"), [15, 14, 13, 11, 10, 9, 7, 6, 5, 3, 2, 1, 16, 12, 8, 4, 0], 'Test 59');
test(movesToStamp("abc", "aaaaaaaaaaabcabcaaaaaaaaaa"), [], 'Test 60');
test(movesToStamp("ab", "abababababababababab"), [17, 15, 13, 11, 9, 7, 5, 3, 1, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0], 'Test 61');
test(movesToStamp("stamp", "stampstampstamp"), [9, 8, 7, 6, 4, 3, 2, 1, 10, 5, 0], 'Test 62');
test(movesToStamp("abcdefg", "abcdefgabcdefgabcdefgabcdefg"), [20, 19, 18, 17, 16, 15, 13, 12, 11, 10, 9, 8, 6, 5, 4, 3, 2, 1, 21, 14, 7, 0], 'Test 63');
test(movesToStamp("abcde", "abcdeabcdeabcdeabcdeabc"), [], 'Test 64');
test(movesToStamp("abab", "abababababababab"), [11, 9, 7, 5, 3, 1, 12, 10, 8, 6, 4, 2, 0], 'Test 65');
test(movesToStamp("ab", "abaabaabaab"), [7, 4, 1, 8, 5, 2, 9, 6, 3, 0], 'Test 66');
test(movesToStamp("hello", "hellohellohellohello"), [14, 13, 12, 11, 9, 8, 7, 6, 4, 3, 2, 1, 15, 10, 5, 0], 'Test 67');
test(movesToStamp("mnopqr", "mnopqrnopqrmonpqrnonqrmpnoqrmnoprqmnopqr"), [], 'Test 68');
test(movesToStamp("abc", "ababababababababc"), [1, 3, 0, 5, 2, 7, 4, 9, 6, 11, 8, 13, 10, 12, 14], 'Test 69');
test(movesToStamp("xyzxyz", "xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), [29, 28, 26, 25, 23, 22, 20, 19, 17, 16, 14, 13, 11, 10, 8, 7, 5, 4, 2, 1, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0], 'Test 70');
test(movesToStamp("hello", "hellohellohellohelloh"), [], 'Test 71');
test(movesToStamp("abcd", "abcabcabcabc"), [], 'Test 72');
test(movesToStamp("abcd", "abcdeabcd"), [], 'Test 73');
test(movesToStamp("mnopqr", "mnopqrmnopqrmnopqr"), [11, 10, 9, 8, 7, 5, 4, 3, 2, 1, 12, 6, 0], 'Test 74');
test(movesToStamp("aabbcc", "aabbccaaabbccaaabbccabc"), [], 'Test 75');
test(movesToStamp("abcdef", "fedcbafedcbafedcba"), [], 'Test 76');
test(movesToStamp("abcdef", "abcdefabcdefabcdefabcdef"), [17, 16, 15, 14, 13, 11, 10, 9, 8, 7, 5, 4, 3, 2, 1, 18, 12, 6, 0], 'Test 77');
test(movesToStamp("stamp", "stampstampstampstam"), [], 'Test 78');
test(movesToStamp("abcdefg", "abcdefgabcdefgabcdefgabcdefgabcdefgabcdefg"), [34, 33, 32, 31, 30, 29, 27, 26, 25, 24, 23, 22, 20, 19, 18, 17, 16, 15, 13, 12, 11, 10, 9, 8, 6, 5, 4, 3, 2, 1, 35, 28, 21, 14, 7, 0], 'Test 79');
test(movesToStamp("abcd", "abcdabcdabcdabcdabcd"), [15, 14, 13, 11, 10, 9, 7, 6, 5, 3, 2, 1, 16, 12, 8, 4, 0], 'Test 80');
test(movesToStamp("abcd", "abcdabcabcd"), [6, 5, 3, 2, 1, 4, 7, 0], 'Test 81');
test(movesToStamp("xyzyx", "xyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyxyzyx"), [67, 66, 65, 63, 62, 61, 59, 58, 57, 55, 54, 53, 51, 50, 49, 47, 46, 45, 43, 42, 41, 39, 38, 37, 35, 34, 33, 31, 30, 29, 27, 26, 25, 23, 22, 21, 19, 18, 17, 15, 14, 13, 11, 10, 9, 7, 6, 5, 3, 2, 1, 68, 64, 60, 56, 52, 48, 44, 40, 36, 32, 28, 24, 20, 16, 12, 8, 4, 0], 'Test 82');
test(movesToStamp("ab", "ababababababababababh"), [], 'Test 83');
test(movesToStamp("abcde", "abcdeabcdeabcdeabcde"), [14, 13, 12, 11, 9, 8, 7, 6, 4, 3, 2, 1, 15, 10, 5, 0], 'Test 84');
test(movesToStamp("abcd", "dabcdabc"), [], 'Test 85');
test(movesToStamp("aabbcc", "aabbccaabbccaaabbccaaabbccaaabbccaaabbcc"), [31, 30, 29, 28, 24, 23, 22, 21, 17, 16, 15, 14, 10, 9, 8, 7, 33, 32, 26, 25, 19, 18, 12, 11, 5, 4, 3, 2, 1, 34, 27, 20, 13, 6, 0], 'Test 86');
test(movesToStamp("aabbcc", "aabbccaabbccaabbcc"), [11, 10, 9, 8, 7, 5, 4, 3, 2, 1, 12, 6, 0], 'Test 87');
test(movesToStamp("abcdef", "fedcbafedcbafedcbafedcbafedcbafedcbafedcba"), [], 'Test 88');

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
