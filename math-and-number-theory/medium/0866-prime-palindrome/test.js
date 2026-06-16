// Test: 866. Prime Palindrome
// 62 test cases from LeetCodeDataset
// Run: node test.js

const { primePalindrome } = require("./solution");

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

console.log("\n866. Prime Palindrome\n");

test(primePalindrome(101), 101, 'Test 1');
test(primePalindrome(8), 11, 'Test 2');
test(primePalindrome(10000000), 100030001, 'Test 3');
test(primePalindrome(10007), 10301, 'Test 4');
test(primePalindrome(999), 10301, 'Test 5');
test(primePalindrome(6), 7, 'Test 6');
test(primePalindrome(999983), 1003001, 'Test 7');
test(primePalindrome(2), 2, 'Test 8');
test(primePalindrome(100000000), 100030001, 'Test 9');
test(primePalindrome(9989900), 100030001, 'Test 10');
test(primePalindrome(100030001), 100030001, 'Test 11');
test(primePalindrome(100), 101, 'Test 12');
test(primePalindrome(10), 11, 'Test 13');
test(primePalindrome(1000), 10301, 'Test 14');
test(primePalindrome(20000000), 100030001, 'Test 15');
test(primePalindrome(1), 2, 'Test 16');
test(primePalindrome(13), 101, 'Test 17');
test(primePalindrome(12345678), 100030001, 'Test 18');
test(primePalindrome(99999), 1003001, 'Test 19');
test(primePalindrome(789789789), 789868987, 'Test 20');
test(primePalindrome(9999999), 100030001, 'Test 21');
test(primePalindrome(66666666), 100030001, 'Test 22');
test(primePalindrome(999999999), Execution timed out, 'Test 23');
test(primePalindrome(80779853381), Execution timed out, 'Test 24');
test(primePalindrome(100000001), 100030001, 'Test 25');
test(primePalindrome(12321), 12421, 'Test 26');
test(primePalindrome(10111011101), 10111311101, 'Test 27');
test(primePalindrome(80000000), 100030001, 'Test 28');
test(primePalindrome(8999998), 9002009, 'Test 29');
test(primePalindrome(75000000), 100030001, 'Test 30');
test(primePalindrome(1003001), 1003001, 'Test 31');
test(primePalindrome(899989), 1003001, 'Test 32');
test(primePalindrome(999980001), Execution timed out, 'Test 33');
test(primePalindrome(200000000), Execution timed out, 'Test 34');
test(primePalindrome(50000000), 100030001, 'Test 35');
test(primePalindrome(100003), 1003001, 'Test 36');
test(primePalindrome(98765432), 100030001, 'Test 37');
test(primePalindrome(100003300001), Execution timed out, 'Test 38');
test(primePalindrome(99999999), 100030001, 'Test 39');
test(primePalindrome(55555555), 100030001, 'Test 40');
test(primePalindrome(9999), 10301, 'Test 41');
test(primePalindrome(90000000), 100030001, 'Test 42');
test(primePalindrome(111111111), 111181111, 'Test 43');
test(primePalindrome(987654321), 987757789, 'Test 44');
test(primePalindrome(9988999), 9989899, 'Test 45');
test(primePalindrome(765432123456789), Execution timed out, 'Test 46');
test(primePalindrome(998899), 1003001, 'Test 47');
test(primePalindrome(150000000), 150070051, 'Test 48');
test(primePalindrome(500000000), Execution timed out, 'Test 49');
test(primePalindrome(11111111), 100030001, 'Test 50');
test(primePalindrome(1000000), 1003001, 'Test 51');
test(primePalindrome(999888999), Execution timed out, 'Test 52');
test(primePalindrome(88888888), 100030001, 'Test 53');
test(primePalindrome(123456789), 123484321, 'Test 54');
test(primePalindrome(989), 10301, 'Test 55');
test(primePalindrome(1000001), 1003001, 'Test 56');
test(primePalindrome(999999), 1003001, 'Test 57');
test(primePalindrome(1234567), 1235321, 'Test 58');
test(primePalindrome(100001), 1003001, 'Test 59');
test(primePalindrome(807798533), Execution timed out, 'Test 60');
test(primePalindrome(999999989), Execution timed out, 'Test 61');
test(primePalindrome(1000003), 1003001, 'Test 62');

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
