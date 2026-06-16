// Test: 1688. Count Of Matches In Tournament
// 60 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfMatches } = require("./solution");

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

console.log("\n1688. Count Of Matches In Tournament\n");

test(numberOfMatches(3), 2, 'Test 1');
test(numberOfMatches(100), 99, 'Test 2');
test(numberOfMatches(14), 13, 'Test 3');
test(numberOfMatches(200), 199, 'Test 4');
test(numberOfMatches(17), 16, 'Test 5');
test(numberOfMatches(2), 1, 'Test 6');
test(numberOfMatches(199), 198, 'Test 7');
test(numberOfMatches(1), 0, 'Test 8');
test(numberOfMatches(7), 6, 'Test 9');
test(numberOfMatches(13), 12, 'Test 10');
test(numberOfMatches(97), 96, 'Test 11');
test(numberOfMatches(63), 62, 'Test 12');
test(numberOfMatches(29), 28, 'Test 13');
test(numberOfMatches(45), 44, 'Test 14');
test(numberOfMatches(135), 134, 'Test 15');
test(numberOfMatches(183), 182, 'Test 16');
test(numberOfMatches(49), 48, 'Test 17');
test(numberOfMatches(130), 129, 'Test 18');
test(numberOfMatches(163), 162, 'Test 19');
test(numberOfMatches(111), 110, 'Test 20');
test(numberOfMatches(10), 9, 'Test 21');
test(numberOfMatches(197), 196, 'Test 22');
test(numberOfMatches(50), 49, 'Test 23');
test(numberOfMatches(157), 156, 'Test 24');
test(numberOfMatches(5), 4, 'Test 25');
test(numberOfMatches(123), 122, 'Test 26');
test(numberOfMatches(59), 58, 'Test 27');
test(numberOfMatches(87), 86, 'Test 28');
test(numberOfMatches(173), 172, 'Test 29');
test(numberOfMatches(4), 3, 'Test 30');
test(numberOfMatches(99), 98, 'Test 31');
test(numberOfMatches(16), 15, 'Test 32');
test(numberOfMatches(177), 176, 'Test 33');
test(numberOfMatches(64), 63, 'Test 34');
test(numberOfMatches(33), 32, 'Test 35');
test(numberOfMatches(143), 142, 'Test 36');
test(numberOfMatches(98), 97, 'Test 37');
test(numberOfMatches(73), 72, 'Test 38');
test(numberOfMatches(133), 132, 'Test 39');
test(numberOfMatches(175), 174, 'Test 40');
test(numberOfMatches(128), 127, 'Test 41');
test(numberOfMatches(101), 100, 'Test 42');
test(numberOfMatches(181), 180, 'Test 43');
test(numberOfMatches(8), 7, 'Test 44');
test(numberOfMatches(131), 130, 'Test 45');
test(numberOfMatches(27), 26, 'Test 46');
test(numberOfMatches(169), 168, 'Test 47');
test(numberOfMatches(32), 31, 'Test 48');
test(numberOfMatches(149), 148, 'Test 49');
test(numberOfMatches(127), 126, 'Test 50');
test(numberOfMatches(81), 80, 'Test 51');
test(numberOfMatches(150), 149, 'Test 52');
test(numberOfMatches(151), 150, 'Test 53');
test(numberOfMatches(198), 197, 'Test 54');
test(numberOfMatches(11), 10, 'Test 55');
test(numberOfMatches(15), 14, 'Test 56');
test(numberOfMatches(189), 188, 'Test 57');
test(numberOfMatches(85), 84, 'Test 58');
test(numberOfMatches(31), 30, 'Test 59');
test(numberOfMatches(25), 24, 'Test 60');

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
