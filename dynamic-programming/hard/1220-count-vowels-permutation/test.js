// Test: 1220. Count Vowels Permutation
// 26 test cases from LeetCodeDataset
// Run: node test.js

const { countVowelPermutation } = require("./solution");

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

console.log("\n1220. Count Vowels Permutation\n");

test(countVowelPermutation(1000), 89945857, 'Test 1');
test(countVowelPermutation(100), 173981881, 'Test 2');
test(countVowelPermutation(20000), 759959057, 'Test 3');
test(countVowelPermutation(200), 670333618, 'Test 4');
test(countVowelPermutation(10000), 76428576, 'Test 5');
test(countVowelPermutation(5000), 598627501, 'Test 6');
test(countVowelPermutation(2000), 793084836, 'Test 7');
test(countVowelPermutation(2), 10, 'Test 8');
test(countVowelPermutation(20), 1151090, 'Test 9');
test(countVowelPermutation(1), 5, 'Test 10');
test(countVowelPermutation(500), 518032023, 'Test 11');
test(countVowelPermutation(50), 227130014, 'Test 12');
test(countVowelPermutation(10), 1739, 'Test 13');
test(countVowelPermutation(5), 68, 'Test 14');
test(countVowelPermutation(15000), 381635004, 'Test 15');
test(countVowelPermutation(3), 19, 'Test 16');
test(countVowelPermutation(12345), 480007966, 'Test 17');
test(countVowelPermutation(4), 35, 'Test 18');
test(countVowelPermutation(30000), 770607143, 'Test 19');
test(countVowelPermutation(75), 467397509, 'Test 20');
test(countVowelPermutation(150), 965179800, 'Test 21');
test(countVowelPermutation(6), 129, 'Test 22');
test(countVowelPermutation(19999), 706457669, 'Test 23');
test(countVowelPermutation(19000), 70562691, 'Test 24');
test(countVowelPermutation(18000), 596349393, 'Test 25');
test(countVowelPermutation(25), 29599477, 'Test 26');

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
