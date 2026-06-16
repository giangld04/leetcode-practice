// Test: 1663. Smallest String With A Given Numeric Value
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { getSmallestString } = require("./solution");

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

console.log("\n1663. Smallest String With A Given Numeric Value\n");

test(getSmallestString(7, 100), aaaszzz, 'Test 1');
test(getSmallestString(1, 26), z, 'Test 2');
test(getSmallestString(4, 40), aalz, 'Test 3');
test(getSmallestString(5, 73), aaszz, 'Test 4');
test(getSmallestString(10, 260), zzzzzzzzzz, 'Test 5');
test(getSmallestString(2, 2), aa, 'Test 6');
test(getSmallestString(1, 1), a, 'Test 7');
test(getSmallestString(2, 26), ay, 'Test 8');
test(getSmallestString(4, 52), aaxz, 'Test 9');
test(getSmallestString(3, 27), aay, 'Test 10');
test(getSmallestString(10, 100), aaaaaapzzz, 'Test 11');
test(getSmallestString(50, 650), aaaaaaaaaaaaaaaaaaaaaaaaaazzzzzzzzzzzzzzzzzzzzzzzz, 'Test 12');
test(getSmallestString(100, 1000), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 13');
test(getSmallestString(6, 161), zzzzz, 'Test 14');
test(getSmallestString(12, 300), nzzzzzzzzzzz, 'Test 15');
test(getSmallestString(100, 100 * 26 - 25), Error: Solution.getSmallestString[] missing 1 required positional argument: 'k', 'Test 16');
test(getSmallestString(6, 156), zzzzzz, 'Test 17');
test(getSmallestString(10, 131), aaaaavzzzz, 'Test 18');
test(getSmallestString(5, 67), aamzz, 'Test 19');
test(getSmallestString(15, 350), akzzzzzzzzzzzzz, 'Test 20');
test(getSmallestString(25, 650), zzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 21');
test(getSmallestString(12, 150), aaaaaanzzzzz, 'Test 22');
test(getSmallestString(5, 5 * 1), Error: Solution.getSmallestString[] missing 1 required positional argument: 'k', 'Test 23');
test(getSmallestString(7, 145), anzzzzz, 'Test 24');
test(getSmallestString(6, 45), aaaaoz, 'Test 25');
test(getSmallestString(7, 7 * 26 - 1), Error: Solution.getSmallestString[] missing 1 required positional argument: 'k', 'Test 26');
test(getSmallestString(6, 160), zzzzz~, 'Test 27');
test(getSmallestString(10, 10 * 26 - 5), Error: Solution.getSmallestString[] missing 1 required positional argument: 'k', 'Test 28');
test(getSmallestString(3, 51), axz, 'Test 29');
test(getSmallestString(11, 260), ayzzzzzzzzz, 'Test 30');
test(getSmallestString(30, 800), zzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 31');
test(getSmallestString(15, 180), aaaaaaaapzzzzzz, 'Test 32');
test(getSmallestString(9, 150), aaaqzzzzz, 'Test 33');
test(getSmallestString(7, 104), aaawzzz, 'Test 34');
test(getSmallestString(7, 150), aszzzzz, 'Test 35');
test(getSmallestString(8, 175), arzzzzzz, 'Test 36');
test(getSmallestString(10, 150), aaaapzzzzz, 'Test 37');
test(getSmallestString(20, 400), aaaafzzzzzzzzzzzzzzz, 'Test 38');
test(getSmallestString(10, 52), aaaaaaaarz, 'Test 39');
test(getSmallestString(50, 50 * 26), Error: Solution.getSmallestString[] missing 1 required positional argument: 'k', 'Test 40');
test(getSmallestString(1000, 1000 * 26 - 500), Error: Solution.getSmallestString[] missing 1 required positional argument: 'k', 'Test 41');
test(getSmallestString(6, 180), zzzzz, 'Test 42');
test(getSmallestString(6, 100), aatzzz, 'Test 43');
test(getSmallestString(12, 200), aaaanzzzzzzz, 'Test 44');
test(getSmallestString(8, 208), zzzzzzzz, 'Test 45');
test(getSmallestString(15, 15 * 26 - 10), Error: Solution.getSmallestString[] missing 1 required positional argument: 'k', 'Test 46');
test(getSmallestString(3, 25), aaw, 'Test 47');
test(getSmallestString(20, 200), aaaaaaaaaaaafzzzzzzz, 'Test 48');
test(getSmallestString(15, 150), aaaaaaaaakzzzzz, 'Test 49');
test(getSmallestString(100, 2600), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 50');
test(getSmallestString(6, 78), aaawzz, 'Test 51');
test(getSmallestString(15, 225), aaaaaakzzzzzzzz, 'Test 52');
test(getSmallestString(26, 676), zzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 53');
test(getSmallestString(26, 26 * 26), Error: Solution.getSmallestString[] missing 1 required positional argument: 'k', 'Test 54');
test(getSmallestString(3, 30), acz, 'Test 55');
test(getSmallestString(12, 312), zzzzzzzzzzzz, 'Test 56');
test(getSmallestString(9, 182), aaxzzzzzz, 'Test 57');
test(getSmallestString(7, 91), aaajzzz, 'Test 58');
test(getSmallestString(5, 130), zzzzz, 'Test 59');
test(getSmallestString(8, 120), aaamzzzz, 'Test 60');
test(getSmallestString(9, 234), zzzzzzzzz, 'Test 61');
test(getSmallestString(5, 125), uzzzz, 'Test 62');
test(getSmallestString(30, 780), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 63');
test(getSmallestString(20, 520), zzzzzzzzzzzzzzzzzzzz, 'Test 64');
test(getSmallestString(50, 1300), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 65');
test(getSmallestString(4, 50), aavz, 'Test 66');
test(getSmallestString(100000, 2600000), Execution timed out, 'Test 67');
test(getSmallestString(11, 286), zzzzzzzzzzz, 'Test 68');
test(getSmallestString(15, 200), aaaaaaakzzzzzzz, 'Test 69');
test(getSmallestString(9, 230), vzzzzzzzz, 'Test 70');
test(getSmallestString(4, 10), aaag, 'Test 71');
test(getSmallestString(2, 27), az, 'Test 72');
test(getSmallestString(7, 42), aaaaakz, 'Test 73');
test(getSmallestString(4, 90), lzzz, 'Test 74');

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
