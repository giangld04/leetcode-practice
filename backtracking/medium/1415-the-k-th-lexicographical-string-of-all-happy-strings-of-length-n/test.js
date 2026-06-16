// Test: 1415. The K Th Lexicographical String Of All Happy Strings Of Length N
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { getHappyString } = require("./solution");

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

console.log("\n1415. The K Th Lexicographical String Of All Happy Strings Of Length N\n");

test(getHappyString(10, 101), abacbabcab, 'Test 1');
test(getHappyString(5, 1), ababa, 'Test 2');
test(getHappyString(10, 100), abacbabacb, 'Test 3');
test(getHappyString(1, 4), , 'Test 4');
test(getHappyString(2, 5), ca, 'Test 5');
test(getHappyString(5, 25), bcaba, 'Test 6');
test(getHappyString(5, 20), babcb, 'Test 7');
test(getHappyString(1, 3), c, 'Test 8');
test(getHappyString(3, 9), cab, 'Test 9');
test(getHappyString(2, 6), cb, 'Test 10');
test(getHappyString(4, 15), bcba, 'Test 11');
test(getHappyString(2, 1), ab, 'Test 12');
test(getHappyString(5, 15), acbca, 'Test 13');
test(getHappyString(5, 30), bcbac, 'Test 14');
test(getHappyString(3, 12), cbc, 'Test 15');
test(getHappyString(2, 3), ba, 'Test 16');
test(getHappyString(4, 20), cacb, 'Test 17');
test(getHappyString(3, 1), aba, 'Test 18');
test(getHappyString(4, 10), babc, 'Test 19');
test(getHappyString(9, 30), ababcbcac, 'Test 20');
test(getHappyString(9, 1024), , 'Test 21');
test(getHappyString(8, 33), abcababa, 'Test 22');
test(getHappyString(3, 13), , 'Test 23');
test(getHappyString(7, 50), acbabac, 'Test 24');
test(getHappyString(10, 1023), bcbcbcbcba, 'Test 25');
test(getHappyString(7, 127), bcbcbca, 'Test 26');
test(getHappyString(9, 300), babcacacb, 'Test 27');
test(getHappyString(1, 1), a, 'Test 28');
test(getHappyString(6, 123), , 'Test 29');
test(getHappyString(7, 1), abababa, 'Test 30');
test(getHappyString(7, 200), , 'Test 31');
test(getHappyString(6, 27), acbaca, 'Test 32');
test(getHappyString(9, 175), acacacbca, 'Test 33');
test(getHappyString(10, 10), abababcabc, 'Test 34');
test(getHappyString(10, 3), ababababca, 'Test 35');
test(getHappyString(10, 1), ababababab, 'Test 36');
test(getHappyString(9, 150), acabcacac, 'Test 37');
test(getHappyString(4, 25), , 'Test 38');
test(getHappyString(8, 150), babcacac, 'Test 39');
test(getHappyString(2, 7), , 'Test 40');
test(getHappyString(3, 15), , 'Test 41');
test(getHappyString(6, 70), cabcac, 'Test 42');
test(getHappyString(6, 30), acbcac, 'Test 43');
test(getHappyString(9, 2048), , 'Test 44');
test(getHappyString(7, 123), bcbcaca, 'Test 45');
test(getHappyString(8, 512), , 'Test 46');
test(getHappyString(7, 100), bcabacb, 'Test 47');
test(getHappyString(10, 512), acbcbcbcbc, 'Test 48');
test(getHappyString(5, 10), acabc, 'Test 49');
test(getHappyString(10, 500), acbcbcabcb, 'Test 50');
test(getHappyString(8, 256), bcbcbcbc, 'Test 51');
test(getHappyString(8, 511), , 'Test 52');
test(getHappyString(6, 64), bcbcbc, 'Test 53');
test(getHappyString(8, 200), bcabacbc, 'Test 54');
test(getHappyString(10, 2048), , 'Test 55');
test(getHappyString(7, 85), bacacab, 'Test 56');
test(getHappyString(8, 255), bcbcbcba, 'Test 57');
test(getHappyString(10, 123), abacbcbaca, 'Test 58');
test(getHappyString(7, 128), bcbcbcb, 'Test 59');
test(getHappyString(8, 128), acbcbcbc, 'Test 60');
test(getHappyString(5, 31), bcbca, 'Test 61');
test(getHappyString(6, 42), bacabc, 'Test 62');
test(getHappyString(10, 64), ababcbcbcb, 'Test 63');
test(getHappyString(6, 63), bcbcba, 'Test 64');
test(getHappyString(1, 2), b, 'Test 65');
test(getHappyString(9, 100), abcbabacb, 'Test 66');
test(getHappyString(9, 512), bcbcbcbcb, 'Test 67');
test(getHappyString(5, 125), , 'Test 68');
test(getHappyString(9, 1023), , 'Test 69');
test(getHappyString(10, 125), abacbcbcab, 'Test 70');
test(getHappyString(8, 100), acbabacb, 'Test 71');
test(getHappyString(9, 50), abacbabac, 'Test 72');
test(getHappyString(6, 5), abacab, 'Test 73');
test(getHappyString(8, 64), abcbcbcb, 'Test 74');
test(getHappyString(9, 500), bcbcbabcb, 'Test 75');
test(getHappyString(9, 243), acbcbabca, 'Test 76');
test(getHappyString(10, 200), abcbabacbc, 'Test 77');
test(getHappyString(10, 1024), bcbcbcbcbc, 'Test 78');

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
