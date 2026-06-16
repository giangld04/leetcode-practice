// Test: 3260. Find The Largest Palindrome Divisible By K
// 53 test cases from LeetCodeDataset
// Run: node test.js

const { largestPalindrome } = require("./solution");

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

console.log("\n3260. Find The Largest Palindrome Divisible By K\n");

test(largestPalindrome(1, 4), 8, 'Test 1');
test(largestPalindrome(6, 9), 999999, 'Test 2');
test(largestPalindrome(6, 7), 999999, 'Test 3');
test(largestPalindrome(3, 5), 595, 'Test 4');
test(largestPalindrome(5, 6), 89898, 'Test 5');
test(largestPalindrome(7, 2), 8999998, 'Test 6');
test(largestPalindrome(4, 7), 9779, 'Test 7');
test(largestPalindrome(7, 9), 9999999, 'Test 8');
test(largestPalindrome(10, 8), 8889999888, 'Test 9');
test(largestPalindrome(7, 1), 9999999, 'Test 10');
test(largestPalindrome(6, 2), 899998, 'Test 11');
test(largestPalindrome(4, 2), 8998, 'Test 12');
test(largestPalindrome(10, 2), 8999999998, 'Test 13');
test(largestPalindrome(2, 3), 99, 'Test 14');
test(largestPalindrome(7, 8), 8889888, 'Test 15');
test(largestPalindrome(10, 9), 9999999999, 'Test 16');
test(largestPalindrome(11, 8), 88899999888, 'Test 17');
test(largestPalindrome(15, 2), 899999999999998, 'Test 18');
test(largestPalindrome(9, 9), 999999999, 'Test 19');
test(largestPalindrome(3, 2), 898, 'Test 20');
test(largestPalindrome(100000, 2), Execution timed out, 'Test 21');
test(largestPalindrome(5, 1), 99999, 'Test 22');
test(largestPalindrome(100, 3), 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999, 'Test 23');
test(largestPalindrome(10, 3), 9999999999, 'Test 24');
test(largestPalindrome(12, 8), 888999999888, 'Test 25');
test(largestPalindrome(100, 5), 5999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995, 'Test 26');
test(largestPalindrome(4, 1), 9999, 'Test 27');
test(largestPalindrome(15, 4), 889999999999988, 'Test 28');
test(largestPalindrome(5, 2), 89998, 'Test 29');
test(largestPalindrome(1000, 2), 8999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998, 'Test 30');
test(largestPalindrome(10, 5), 5999999995, 'Test 31');
test(largestPalindrome(8, 3), 99999999, 'Test 32');
test(largestPalindrome(2, 1), 99, 'Test 33');
test(largestPalindrome(100001, 8), Execution timed out, 'Test 34');
test(largestPalindrome(15, 9), 999999999999999, 'Test 35');
test(largestPalindrome(8, 9), 99999999, 'Test 36');
test(largestPalindrome(2, 9), 99, 'Test 37');
test(largestPalindrome(3, 3), 999, 'Test 38');
test(largestPalindrome(9, 3), 999999999, 'Test 39');
test(largestPalindrome(6, 1), 999999, 'Test 40');
test(largestPalindrome(8, 5), 59999995, 'Test 41');
test(largestPalindrome(100000, 9), Execution timed out, 'Test 42');
test(largestPalindrome(7, 5), 5999995, 'Test 43');
test(largestPalindrome(9, 7), 999969999, 'Test 44');
test(largestPalindrome(12, 4), 889999999988, 'Test 45');
test(largestPalindrome(500, 7), 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999, 'Test 46');
test(largestPalindrome(2, 2), 88, 'Test 47');
test(largestPalindrome(100, 9), 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999, 'Test 48');
test(largestPalindrome(50000, 3), Execution timed out, 'Test 49');
test(largestPalindrome(6, 5), 599995, 'Test 50');
test(largestPalindrome(12, 6), 899997799998, 'Test 51');
test(largestPalindrome(10, 4), 8899999988, 'Test 52');
test(largestPalindrome(14, 6), 89999977999998, 'Test 53');

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
