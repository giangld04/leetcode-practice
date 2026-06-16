// Test: 9. Palindrome Number
// 61 test cases from LeetCodeDataset
// Run: node test.js

const { isPalindrome } = require("./solution");

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

console.log("\n9. Palindrome Number\n");

test(isPalindrome(1221), true, 'Test 1');
test(isPalindrome(10), false, 'Test 2');
test(isPalindrome(123421), false, 'Test 3');
test(isPalindrome(1), true, 'Test 4');
test(isPalindrome(-121), false, 'Test 5');
test(isPalindrome(12345678987654321), true, 'Test 6');
test(isPalindrome(123456), false, 'Test 7');
test(isPalindrome(-2147483648), false, 'Test 8');
test(isPalindrome(1000000001), true, 'Test 9');
test(isPalindrome(1111111111), true, 'Test 10');
test(isPalindrome(0), true, 'Test 11');
test(isPalindrome(123321), true, 'Test 12');
test(isPalindrome(2147483647), false, 'Test 13');
test(isPalindrome(1000021), false, 'Test 14');
test(isPalindrome(-1000021), false, 'Test 15');
test(isPalindrome(12321), true, 'Test 16');
test(isPalindrome(1234321), true, 'Test 17');
test(isPalindrome(-12321), false, 'Test 18');
test(isPalindrome(121), true, 'Test 19');
test(isPalindrome(-1221), false, 'Test 20');
test(isPalindrome(999999999999999999), true, 'Test 21');
test(isPalindrome(123456789987654321), true, 'Test 22');
test(isPalindrome(10000000000000000000000000000000000001), true, 'Test 23');
test(isPalindrome(1100110011), true, 'Test 24');
test(isPalindrome(12210000221), false, 'Test 25');
test(isPalindrome(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), false, 'Test 26');
test(isPalindrome(12345678987654322), false, 'Test 27');
test(isPalindrome(987656789), true, 'Test 28');
test(isPalindrome(100000000000000001), true, 'Test 29');
test(isPalindrome(1234567890987654321), true, 'Test 30');
test(isPalindrome(100000000000000000001), true, 'Test 31');
test(isPalindrome(101010101), true, 'Test 32');
test(isPalindrome(1001001), true, 'Test 33');
test(isPalindrome(12300321), true, 'Test 34');
test(isPalindrome(2147447412), true, 'Test 35');
test(isPalindrome(12345677654321), true, 'Test 36');
test(isPalindrome(98765432112345678), false, 'Test 37');
test(isPalindrome(10000000001), true, 'Test 38');
test(isPalindrome(10000000000000000000), false, 'Test 39');
test(isPalindrome(12345654321), true, 'Test 40');
test(isPalindrome(999999999), true, 'Test 41');
test(isPalindrome(987898789), true, 'Test 42');
test(isPalindrome(1000000000000000000000000000000000001), true, 'Test 43');
test(isPalindrome(-1000000001), false, 'Test 44');
test(isPalindrome(1000000000000000001), true, 'Test 45');
test(isPalindrome(2121212121), false, 'Test 46');
test(isPalindrome(123321000), false, 'Test 47');
test(isPalindrome(1001), true, 'Test 48');
test(isPalindrome(1234567899876543210), false, 'Test 49');
test(isPalindrome(1230321), true, 'Test 50');
test(isPalindrome(12211221), true, 'Test 51');
test(isPalindrome(1002001), true, 'Test 52');
test(isPalindrome(10000200001), true, 'Test 53');
test(isPalindrome(98789), true, 'Test 54');
test(isPalindrome(123454321), true, 'Test 55');
test(isPalindrome(98765432123456789), true, 'Test 56');
test(isPalindrome(100000000000000000000000000000000000000000000000001), true, 'Test 57');
test(isPalindrome(100000000000000000000000000000000000000), false, 'Test 58');
test(isPalindrome(123321123321), true, 'Test 59');
test(isPalindrome(1111111111111111111), true, 'Test 60');
test(isPalindrome(1000000000), false, 'Test 61');

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
