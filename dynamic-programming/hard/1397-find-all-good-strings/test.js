// Test: 1397. Find All Good Strings
// 53 test cases from LeetCodeDataset
// Run: node test.js

const { findGoodStrings } = require("./solution");

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

console.log("\n1397. Find All Good Strings\n");

test(findGoodStrings(5, "apple", "zebra", "app"), 11220078, 'Test 1');
test(findGoodStrings(5, "a", "zzzzz", "z"), Error: string index out of range, 'Test 2');
test(findGoodStrings(5, "apple", "appla", "appl"), 0, 'Test 3');
test(findGoodStrings(3, "aaa", "zzz", "abc"), 17575, 'Test 4');
test(findGoodStrings(5, "aaaaa", "zzzzz", "abc"), 11879348, 'Test 5');
test(findGoodStrings(10, "abcdefghij", "abcdefghij", "ghij"), 0, 'Test 6');
test(findGoodStrings(5, "apple", "zebra", "dog"), 11219789, 'Test 7');
test(findGoodStrings(2, "gx", "gz", "x"), 2, 'Test 8');
test(findGoodStrings(3, "abc", "xyz", "def"), 16169, 'Test 9');
test(findGoodStrings(8, "leetcode", "leetgoes", "leet"), 0, 'Test 10');
test(findGoodStrings(3, "aaa", "zzz", "xyz"), 17575, 'Test 11');
test(findGoodStrings(2, "aa", "da", "b"), 51, 'Test 12');
test(findGoodStrings(3, "abc", "xyz", "de"), 16120, 'Test 13');
test(findGoodStrings(100, "a"*100, "z"*100, "xyz"), Error: Solution.findGoodStrings[] missing 2 required positional arguments: 's1' and 's2', 'Test 14');
test(findGoodStrings(30, "aaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzz", "zzz"), Error: string index out of range, 'Test 15');
test(findGoodStrings(50, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "ab"), Error: string index out of range, 'Test 16');
test(findGoodStrings(10, "aaaaaaaaaa", "zzzzzzzzzz", "mnop"), 932258852, 'Test 17');
test(findGoodStrings(20, "aaaaaaaaaa", "zzzzzzzzzz", "mnop"), Error: string index out of range, 'Test 18');
test(findGoodStrings(10, "abcdefghij", "zzzzzzzzzz", "mnop"), 67339166, 'Test 19');
test(findGoodStrings(45, "abcdefghijklmnopqrstuvwxyzabcde", "zyxwvutsrqponmlkjihgfedcbaedcba", "abcde"), Error: string index out of range, 'Test 20');
test(findGoodStrings(25, "a"*25, "z"*25, "qrstuv"), Error: Solution.findGoodStrings[] missing 2 required positional arguments: 's1' and 's2', 'Test 21');
test(findGoodStrings(25, "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "abcde"), 0, 'Test 22');
test(findGoodStrings(45, "abcdefghijklmnopqrstuvwxyzabcdefghij", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "mnopqr"), 720631236, 'Test 23');
test(findGoodStrings(6, "aaaaaa", "zzzzzz", "ab"), 306634951, 'Test 24');
test(findGoodStrings(30, "abcdefghijklmnopqrstuvwxyzabcde", "zzzzzzzzzzzzzzzzzzzzzzzzzzz", "mnopqr"), Error: string index out of range, 'Test 25');
test(findGoodStrings(20, "aaabaaabaaabaaabaa", "zzzzzzzzzzzzzzzzzzzz", "aaa"), 357553640, 'Test 26');
test(findGoodStrings(35, "applepieapplepieapplepieapplepie", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "apple"), 695022504, 'Test 27');
test(findGoodStrings(15, "aaaaaabbbbb", "zzzzzzzzzzz", "abcde"), Error: string index out of range, 'Test 28');
test(findGoodStrings(50, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "abcde"), Error: string index out of range, 'Test 29');
test(findGoodStrings(25, "abcdeabcdeabcdeabcde", "edcbaedcbaedcbaedcba", "abc"), Error: string index out of range, 'Test 30');
test(findGoodStrings(500, "a"*500, "z"*500, "abcdef"), Error: Solution.findGoodStrings[] missing 2 required positional arguments: 's1' and 's2', 'Test 31');
test(findGoodStrings(7, "aaaaaaa", "zzzzzzz", "abc"), 29525318, 'Test 32');
test(findGoodStrings(20, "abcdabcdabcdabcdabcd", "zzzzzzzzzzzzzzzzzzzz", "zabcd"), 426896930, 'Test 33');
test(findGoodStrings(15, "abcdefghijklm", "nopqrstuvwxyz", "uvw"), Error: string index out of range, 'Test 34');
test(findGoodStrings(10, "abcdefghij", "abcdefghiz", "ghi"), 0, 'Test 35');
test(findGoodStrings(50, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz"), Error: string index out of range, 'Test 36');
test(findGoodStrings(50, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "xyzxyzxyzxyzxyz"), Error: string index out of range, 'Test 37');
test(findGoodStrings(50, "a"*50, "z"*50, "abcdefghijkl"), Error: Solution.findGoodStrings[] missing 2 required positional arguments: 's1' and 's2', 'Test 38');
test(findGoodStrings(15, "abcdefghijklnmop", "abcdefghijklnmopqrstuvwxyz", "mnop"), 1, 'Test 39');
test(findGoodStrings(30, "abcdefghijklmnopqrstuvwxyzabcde", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "vwxyz"), 858527385, 'Test 40');
test(findGoodStrings(40, "aaaabaaaabaaaabaaaab", "zzzzzzzzzzzzzzzzzzzz", "aaaa"), Error: string index out of range, 'Test 41');
test(findGoodStrings(30, "zzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzz", "abc"), Error: string index out of range, 'Test 42');
test(findGoodStrings(50, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "ab"), Error: string index out of range, 'Test 43');
test(findGoodStrings(40, "abcdabcdabcdabcdabcdabcdabcdabcdabcd", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "xyz"), Error: string index out of range, 'Test 44');
test(findGoodStrings(50, "leetcodeleetcodeleetcodeleetcodeleetcode", "leetgoesleetgoesleetgoesleetgoesleetgoes", "leet"), 0, 'Test 45');
test(findGoodStrings(40, "aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxxyyyzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "mnopqr"), 438601268, 'Test 46');
test(findGoodStrings(10, "abcdefghij", "zjklmnopqr", "mnop"), 922212598, 'Test 47');
test(findGoodStrings(40, "abcdefghijabcdefghijabcdefghijabcdefghij", "zjklmnopqrzjklmnopqrzjklmnopqrzjklmnopqr", "mnopqr"), 54391096, 'Test 48');
test(findGoodStrings(15, "aaaabbbbcccc", "zzzzzzzzzzzzzz", "xyz"), Error: string index out of range, 'Test 49');
test(findGoodStrings(40, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "xyz"), Error: string index out of range, 'Test 50');
test(findGoodStrings(5, "aaaaa", "zzzzz", "b"), 9765625, 'Test 51');
test(findGoodStrings(20, "aaaaeaaaagaaaa", "zzzzkzzzzzzzzz", "kzz"), Error: string index out of range, 'Test 52');
test(findGoodStrings(50, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzz"), Error: string index out of range, 'Test 53');

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
