// Test: 984. String Without Aaa Or Bbb
// 64 test cases from LeetCodeDataset
// Run: node test.js

const { strWithout3a3b } = require("./solution");

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

console.log("\n984. String Without Aaa Or Bbb\n");

test(strWithout3a3b(0, 5), bbbbb, 'Test 1');
test(strWithout3a3b(10, 10), abababababababababab, 'Test 2');
test(strWithout3a3b(6, 4), aabaababab, 'Test 3');
test(strWithout3a3b(7, 7), ababababababab, 'Test 4');
test(strWithout3a3b(4, 1), aabaa, 'Test 5');
test(strWithout3a3b(7, 2), aabaabaaa, 'Test 6');
test(strWithout3a3b(4, 6), bbabbaabab, 'Test 7');
test(strWithout3a3b(1, 2), bba, 'Test 8');
test(strWithout3a3b(5, 5), ababababab, 'Test 9');
test(strWithout3a3b(5, 0), aaaaa, 'Test 10');
test(strWithout3a3b(0, 0), , 'Test 11');
test(strWithout3a3b(5, 2), aabaaba, 'Test 12');
test(strWithout3a3b(2, 2), abab, 'Test 13');
test(strWithout3a3b(2, 7), bbabbabbb, 'Test 14');
test(strWithout3a3b(3, 3), ababab, 'Test 15');
test(strWithout3a3b(33, 67), bbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbab, 'Test 16');
test(strWithout3a3b(15, 5), aabaabaabaabaabaaaaa, 'Test 17');
test(strWithout3a3b(30, 70), bbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbbbbbbbbb, 'Test 18');
test(strWithout3a3b(33, 34), bbaabababababababababababababababababababababababababababababababab, 'Test 19');
test(strWithout3a3b(30, 25), aabaabaabaabaababababababababababababababababababababab, 'Test 20');
test(strWithout3a3b(100, 100), abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab, 'Test 21');
test(strWithout3a3b(0, 100), bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb, 'Test 22');
test(strWithout3a3b(27, 3), aabaabaabaaaaaaaaaaaaaaaaaaaaa, 'Test 23');
test(strWithout3a3b(100, 0), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 24');
test(strWithout3a3b(8, 1), aabaaaaaa, 'Test 25');
test(strWithout3a3b(1, 100), bbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb, 'Test 26');
test(strWithout3a3b(100, 1), aabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 27');
test(strWithout3a3b(30, 30), abababababababababababababababababababababababababababababab, 'Test 28');
test(strWithout3a3b(30, 10), aabaabaabaabaabaabaabaabaabaabaaaaaaaaaa, 'Test 29');
test(strWithout3a3b(20, 30), bbabbabbabbabbabbabbabbabbabbaabababababababababab, 'Test 30');
test(strWithout3a3b(25, 25), ababababababababababababababababababababababababab, 'Test 31');
test(strWithout3a3b(20, 20), abababababababababababababababababababab, 'Test 32');
test(strWithout3a3b(50, 51), bbaababababababababababababababababababababababababababababababababababababababababababababababababab, 'Test 33');
test(strWithout3a3b(33, 33), ababababababababababababababababababababababababababababababababab, 'Test 34');
test(strWithout3a3b(10, 90), bbabbabbabbabbabbabbabbabbabbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb, 'Test 35');
test(strWithout3a3b(15, 15), ababababababababababababababab, 'Test 36');
test(strWithout3a3b(85, 15), aabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 37');
test(strWithout3a3b(99, 1), aabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 38');
test(strWithout3a3b(45, 55), bbabbabbabbabbabbabbabbabbabbaababababababababababababababababababababababababababababababababababab, 'Test 39');
test(strWithout3a3b(1, 99), bbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb, 'Test 40');
test(strWithout3a3b(49, 1), aabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 41');
test(strWithout3a3b(35, 40), bbabbabbabbabbaabababababababababababababababababababababababababababababab, 'Test 42');
test(strWithout3a3b(70, 30), aabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaaaaaaaaaa, 'Test 43');
test(strWithout3a3b(7, 3), aabaabaaba, 'Test 44');
test(strWithout3a3b(25, 30), bbabbabbabbabbaabababababababababababababababababababab, 'Test 45');
test(strWithout3a3b(75, 25), aabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 46');
test(strWithout3a3b(34, 33), aababababababababababababababababababababababababababababababababab, 'Test 47');
test(strWithout3a3b(51, 50), aabababababababababababababababababababababababababababababababababababababababababababababababababab, 'Test 48');
test(strWithout3a3b(1, 49), bbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb, 'Test 49');
test(strWithout3a3b(90, 10), aabaabaabaabaabaabaabaabaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 50');
test(strWithout3a3b(80, 20), aabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 51');
test(strWithout3a3b(30, 20), aabaabaabaabaabaabaabaabaabaababababababababababab, 'Test 52');
test(strWithout3a3b(40, 60), bbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbaabababababababababababababababababababab, 'Test 53');
test(strWithout3a3b(50, 50), abababababababababababababababababababababababababababababababababababababababababababababababababab, 'Test 54');
test(strWithout3a3b(3, 7), bbabbabbab, 'Test 55');
test(strWithout3a3b(60, 40), aabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaababababababababababababababababababababab, 'Test 56');
test(strWithout3a3b(8, 25), bbabbabbabbabbabbabbabbabbbbbbbbb, 'Test 57');
test(strWithout3a3b(1, 8), bbabbbbbb, 'Test 58');
test(strWithout3a3b(20, 15), aabaabaabaabaababababababababababab, 'Test 59');
test(strWithout3a3b(15, 35), bbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbbbb, 'Test 60');
test(strWithout3a3b(25, 75), bbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbbbbbbbbbbbbbbbbbbbbbbbb, 'Test 61');
test(strWithout3a3b(3, 10), bbabbabbabbbb, 'Test 62');
test(strWithout3a3b(20, 80), bbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb, 'Test 63');
test(strWithout3a3b(55, 45), aabaabaabaabaabaabaabaabaabaabababababababababababababababababababababababababababababababababababab, 'Test 64');

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
