// Test: 234. Palindrome Linked List
// 91 test cases from LeetCodeDataset
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

console.log("\n234. Palindrome Linked List\n");

test(isPalindrome([1,0,0,1]), true, 'Test 1');
test(isPalindrome([1,2,3,4,3,2,1]), true, 'Test 2');
test(isPalindrome([9,8,7,8,9]), true, 'Test 3');
test(isPalindrome([1,2,3,3,2,1]), true, 'Test 4');
test(isPalindrome([1,2,3,4,5,4,3,2,1]), true, 'Test 5');
test(isPalindrome([1,2,3,4,5]), false, 'Test 6');
test(isPalindrome([1,2,3,2,1]), true, 'Test 7');
test(isPalindrome([1,2,2,1]), true, 'Test 8');
test(isPalindrome([1,2]), false, 'Test 9');
test(isPalindrome([1]), true, 'Test 10');
test(isPalindrome([1,0,1]), true, 'Test 11');
test(isPalindrome([1,1]), true, 'Test 12');
test(isPalindrome([1,1,1,1,1]), true, 'Test 13');
test(isPalindrome([1,2,3,4,5,6]), false, 'Test 14');
test(isPalindrome([1,1,2,2,1,1]), true, 'Test 15');
test(isPalindrome([1,2,3,4,5,6,5,4,3,2,1]), true, 'Test 16');
test(isPalindrome([2,4,6,8,10,8,6,4,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), false, 'Test 17');
test(isPalindrome([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2]), false, 'Test 18');
test(isPalindrome([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0,1]), false, 'Test 19');
test(isPalindrome([9,8,7,6,5,6,7,8,9]), true, 'Test 20');
test(isPalindrome([9,9,9,9,9,9,9,9,9]), true, 'Test 21');
test(isPalindrome([1,1,2,2,3,3,4,4,5,5,4,4,3,3,2,2,1,1]), true, 'Test 22');
test(isPalindrome([1,2,3,4,4,3,2,1]), true, 'Test 23');
test(isPalindrome([1,3,2,4,2,3,1]), true, 'Test 24');
test(isPalindrome([1,2,3,4,5,4,3,2,1,0,0,1,2,3,4,5,4,3,2,1]), true, 'Test 25');
test(isPalindrome([1,0,1,0,1,0,1,0,1,0,1]), true, 'Test 26');
test(isPalindrome([1,2,2,3,2,2,1]), true, 'Test 27');
test(isPalindrome([9,9,8,7,6,7,8,9,9]), true, 'Test 28');
test(isPalindrome([1,2,3,4,5,6,7,8,9,10,11,12,13,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 29');
test(isPalindrome([1,2,3,4,5,6,7,8,9,10,11,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 30');
test(isPalindrome([1,0,2,0,1,0,2,0,1]), true, 'Test 31');
test(isPalindrome([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 32');
test(isPalindrome([1,2,2,3,3,2,2,1]), true, 'Test 33');
test(isPalindrome([9,9,9,9,9,9,9]), true, 'Test 34');
test(isPalindrome([1,0,2,4,2,0,1]), true, 'Test 35');
test(isPalindrome([1,2,3,4,5,6,7,8,9,0,0,9,8,7,6,5,4,3,2,1]), true, 'Test 36');
test(isPalindrome([1,0,2,0,1]), true, 'Test 37');
test(isPalindrome([1,0,1,0,1,0,1,0,1]), true, 'Test 38');
test(isPalindrome([1,2,3,4,5,6,7,8,9,10,11,12,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 39');
test(isPalindrome([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 40');
test(isPalindrome([1,2,3,2,1,1,2,3,2,1]), true, 'Test 41');
test(isPalindrome([1,0,1,0,1,0,1]), true, 'Test 42');
test(isPalindrome([1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1]), true, 'Test 43');
test(isPalindrome([1,2,3,4,3,2,1,0]), false, 'Test 44');
test(isPalindrome([1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1]), false, 'Test 45');
test(isPalindrome([5,5,5,5,5,5,5,5,5]), true, 'Test 46');
test(isPalindrome([1,0,2,4,5,4,2,0,1]), true, 'Test 47');
test(isPalindrome([1,2,3,4,5,4,3,2,1,0]), false, 'Test 48');
test(isPalindrome([9,9,9,9,9,9,9,9,9,9,9]), true, 'Test 49');
test(isPalindrome([1,2,3,2,1,0,1,0,1]), false, 'Test 50');
test(isPalindrome([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 51');
test(isPalindrome([1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1]), true, 'Test 52');
test(isPalindrome([1,2,3,4,5,4,3,2,1,0,0,1,2,3,4,5]), false, 'Test 53');
test(isPalindrome([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 54');
test(isPalindrome([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 55');
test(isPalindrome([1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]), true, 'Test 56');
test(isPalindrome([1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 57');
test(isPalindrome([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), true, 'Test 58');
test(isPalindrome([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 59');
test(isPalindrome([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 60');
test(isPalindrome([0,0,0,0,0,0,0]), true, 'Test 61');
test(isPalindrome([0,1,2,3,4,5,6,5,4,3,2,1,0]), true, 'Test 62');
test(isPalindrome([1,1,2,2,3,3,4,4,3,3,2,2,1,1]), true, 'Test 63');
test(isPalindrome([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 64');
test(isPalindrome([1,3,5,7,9,7,5,3,1,0,0,0,0,1,3,5,7,9,7,5,3,1]), true, 'Test 65');
test(isPalindrome([1,2,3,4,5,6,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,6,5,4,3,2,1]), true, 'Test 66');
test(isPalindrome([0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0]), true, 'Test 67');
test(isPalindrome([1,2,3,4,5,5,4,3,2,1]), true, 'Test 68');
test(isPalindrome([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 69');
test(isPalindrome([1,2,3,2,1,2,3,2,1]), true, 'Test 70');
test(isPalindrome([1,3,3,7,7,7,3,3,1]), true, 'Test 71');
test(isPalindrome([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 72');
test(isPalindrome([1,2,3,3,2,1,1]), false, 'Test 73');
test(isPalindrome([9,8,7,6,7,8,9]), true, 'Test 74');
test(isPalindrome([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), true, 'Test 75');
test(isPalindrome([1,2,3,2,1,2,1]), false, 'Test 76');
test(isPalindrome([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), true, 'Test 77');
test(isPalindrome([1,1,2,1,1]), true, 'Test 78');
test(isPalindrome([1,1,1,1,1,2,1,1,1,1,1]), true, 'Test 79');
test(isPalindrome([1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 80');
test(isPalindrome([1,2,3,3,2,1,2,3,3,2,1]), true, 'Test 81');
test(isPalindrome([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), true, 'Test 82');
test(isPalindrome([1,3,5,7,5,3,1]), true, 'Test 83');
test(isPalindrome([1,1,2,2,3,3,2,2,1,1]), true, 'Test 84');
test(isPalindrome([1,2,3,4,5,6,7,6,5,4,3,2,1]), true, 'Test 85');
test(isPalindrome([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 86');
test(isPalindrome([5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), false, 'Test 87');
test(isPalindrome([1,1,2,1,1,2,1,1]), true, 'Test 88');
test(isPalindrome([5,5,5,5,5,5,5,5,5,5]), true, 'Test 89');
test(isPalindrome([1,3,2,3,1]), true, 'Test 90');
test(isPalindrome([1,2,2,3,3,3,2,2,1]), true, 'Test 91');

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
