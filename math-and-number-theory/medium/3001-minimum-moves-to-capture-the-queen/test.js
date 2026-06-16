// Test: 3001. Minimum Moves To Capture The Queen
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { minMovesToCaptureTheQueen } = require("./solution");

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

console.log("\n3001. Minimum Moves To Capture The Queen\n");

test(minMovesToCaptureTheQueen(4, 4, 7, 7, 3, 3), 2, 'Test 1');
test(minMovesToCaptureTheQueen(3, 3, 6, 6, 7, 7), 1, 'Test 2');
test(minMovesToCaptureTheQueen(7, 2, 2, 7, 4, 4), 2, 'Test 3');
test(minMovesToCaptureTheQueen(1, 8, 2, 7, 3, 6), 1, 'Test 4');
test(minMovesToCaptureTheQueen(8, 8, 1, 1, 3, 3), 1, 'Test 5');
test(minMovesToCaptureTheQueen(8, 8, 1, 1, 4, 4), 1, 'Test 6');
test(minMovesToCaptureTheQueen(8, 1, 5, 4, 7, 7), 2, 'Test 7');
test(minMovesToCaptureTheQueen(4, 4, 7, 7, 6, 6), 1, 'Test 8');
test(minMovesToCaptureTheQueen(5, 3, 3, 4, 5, 2), 1, 'Test 9');
test(minMovesToCaptureTheQueen(1, 1, 8, 8, 2, 3), 2, 'Test 10');
test(minMovesToCaptureTheQueen(4, 4, 6, 6, 7, 7), 1, 'Test 11');
test(minMovesToCaptureTheQueen(6, 6, 2, 2, 4, 4), 1, 'Test 12');
test(minMovesToCaptureTheQueen(2, 2, 4, 4, 6, 6), 1, 'Test 13');
test(minMovesToCaptureTheQueen(4, 4, 1, 4, 8, 4), 1, 'Test 14');
test(minMovesToCaptureTheQueen(2, 3, 5, 6, 3, 4), 1, 'Test 15');
test(minMovesToCaptureTheQueen(4, 4, 4, 1, 4, 8), 1, 'Test 16');
test(minMovesToCaptureTheQueen(3, 3, 5, 5, 6, 6), 1, 'Test 17');
test(minMovesToCaptureTheQueen(8, 8, 7, 7, 6, 6), 1, 'Test 18');
test(minMovesToCaptureTheQueen(3, 3, 6, 6, 5, 5), 1, 'Test 19');
test(minMovesToCaptureTheQueen(1, 1, 2, 2, 8, 8), 1, 'Test 20');
test(minMovesToCaptureTheQueen(4, 4, 5, 5, 6, 6), 1, 'Test 21');
test(minMovesToCaptureTheQueen(1, 1, 2, 2, 3, 3), 1, 'Test 22');
test(minMovesToCaptureTheQueen(1, 8, 8, 1, 4, 4), 2, 'Test 23');
test(minMovesToCaptureTheQueen(3, 3, 5, 5, 2, 2), 2, 'Test 24');
test(minMovesToCaptureTheQueen(5, 5, 1, 9, 9, 1), 2, 'Test 25');
test(minMovesToCaptureTheQueen(2, 4, 7, 1, 4, 7), 2, 'Test 26');
test(minMovesToCaptureTheQueen(6, 2, 3, 5, 5, 2), 1, 'Test 27');
test(minMovesToCaptureTheQueen(5, 1, 2, 6, 5, 8), 1, 'Test 28');
test(minMovesToCaptureTheQueen(5, 5, 2, 8, 2, 3), 2, 'Test 29');
test(minMovesToCaptureTheQueen(3, 6, 6, 3, 7, 7), 2, 'Test 30');
test(minMovesToCaptureTheQueen(2, 2, 5, 5, 3, 3), 1, 'Test 31');
test(minMovesToCaptureTheQueen(5, 5, 1, 1, 8, 8), 2, 'Test 32');
test(minMovesToCaptureTheQueen(5, 5, 3, 3, 5, 1), 1, 'Test 33');
test(minMovesToCaptureTheQueen(6, 3, 3, 6, 8, 1), 2, 'Test 34');
test(minMovesToCaptureTheQueen(8, 8, 1, 1, 5, 5), 1, 'Test 35');
test(minMovesToCaptureTheQueen(3, 3, 6, 6, 4, 7), 2, 'Test 36');
test(minMovesToCaptureTheQueen(1, 1, 7, 7, 4, 4), 1, 'Test 37');
test(minMovesToCaptureTheQueen(4, 8, 8, 4, 1, 1), 2, 'Test 38');
test(minMovesToCaptureTheQueen(1, 4, 8, 4, 5, 4), 1, 'Test 39');
test(minMovesToCaptureTheQueen(2, 5, 5, 2, 7, 7), 2, 'Test 40');
test(minMovesToCaptureTheQueen(1, 1, 3, 5, 7, 7), 2, 'Test 41');
test(minMovesToCaptureTheQueen(7, 2, 3, 6, 5, 4), 1, 'Test 42');
test(minMovesToCaptureTheQueen(4, 4, 1, 8, 8, 1), 1, 'Test 43');
test(minMovesToCaptureTheQueen(2, 5, 5, 2, 7, 5), 1, 'Test 44');
test(minMovesToCaptureTheQueen(5, 8, 3, 3, 1, 1), 1, 'Test 45');
test(minMovesToCaptureTheQueen(1, 5, 8, 5, 6, 5), 1, 'Test 46');
test(minMovesToCaptureTheQueen(8, 8, 1, 8, 1, 1), 2, 'Test 47');
test(minMovesToCaptureTheQueen(7, 7, 2, 2, 5, 5), 1, 'Test 48');
test(minMovesToCaptureTheQueen(3, 5, 1, 1, 8, 8), 1, 'Test 49');
test(minMovesToCaptureTheQueen(3, 3, 6, 3, 5, 3), 1, 'Test 50');
test(minMovesToCaptureTheQueen(5, 1, 1, 5, 6, 6), 2, 'Test 51');
test(minMovesToCaptureTheQueen(4, 4, 3, 5, 5, 3), 2, 'Test 52');
test(minMovesToCaptureTheQueen(8, 8, 3, 3, 6, 6), 1, 'Test 53');
test(minMovesToCaptureTheQueen(8, 1, 5, 4, 4, 4), 2, 'Test 54');
test(minMovesToCaptureTheQueen(4, 4, 1, 8, 7, 2), 1, 'Test 55');
test(minMovesToCaptureTheQueen(6, 2, 2, 6, 3, 3), 2, 'Test 56');
test(minMovesToCaptureTheQueen(3, 6, 6, 3, 8, 8), 2, 'Test 57');
test(minMovesToCaptureTheQueen(2, 2, 5, 5, 7, 7), 1, 'Test 58');
test(minMovesToCaptureTheQueen(8, 1, 1, 8, 5, 5), 2, 'Test 59');
test(minMovesToCaptureTheQueen(4, 4, 7, 1, 1, 8), 2, 'Test 60');
test(minMovesToCaptureTheQueen(4, 4, 1, 8, 7, 7), 2, 'Test 61');
test(minMovesToCaptureTheQueen(1, 8, 7, 1, 4, 4), 1, 'Test 62');
test(minMovesToCaptureTheQueen(7, 3, 4, 6, 1, 1), 2, 'Test 63');
test(minMovesToCaptureTheQueen(1, 1, 7, 7, 8, 8), 1, 'Test 64');
test(minMovesToCaptureTheQueen(4, 4, 8, 1, 2, 2), 2, 'Test 65');
test(minMovesToCaptureTheQueen(3, 8, 6, 3, 8, 1), 1, 'Test 66');
test(minMovesToCaptureTheQueen(3, 6, 6, 3, 5, 5), 2, 'Test 67');
test(minMovesToCaptureTheQueen(5, 5, 2, 2, 8, 1), 2, 'Test 68');
test(minMovesToCaptureTheQueen(4, 4, 5, 5, 7, 2), 2, 'Test 69');
test(minMovesToCaptureTheQueen(1, 8, 8, 1, 5, 5), 2, 'Test 70');
test(minMovesToCaptureTheQueen(6, 3, 2, 7, 5, 5), 2, 'Test 71');
test(minMovesToCaptureTheQueen(4, 4, 1, 1, 8, 8), 2, 'Test 72');
test(minMovesToCaptureTheQueen(7, 2, 2, 7, 5, 5), 2, 'Test 73');
test(minMovesToCaptureTheQueen(8, 1, 1, 8, 4, 4), 2, 'Test 74');
test(minMovesToCaptureTheQueen(1, 1, 7, 2, 8, 8), 2, 'Test 75');
test(minMovesToCaptureTheQueen(1, 8, 3, 6, 4, 4), 2, 'Test 76');
test(minMovesToCaptureTheQueen(2, 2, 5, 5, 8, 8), 1, 'Test 77');
test(minMovesToCaptureTheQueen(1, 1, 7, 7, 5, 5), 1, 'Test 78');
test(minMovesToCaptureTheQueen(2, 3, 4, 6, 3, 6), 2, 'Test 79');
test(minMovesToCaptureTheQueen(4, 4, 7, 1, 1, 7), 2, 'Test 80');
test(minMovesToCaptureTheQueen(1, 8, 5, 5, 3, 3), 1, 'Test 81');
test(minMovesToCaptureTheQueen(1, 8, 4, 4, 8, 1), 2, 'Test 82');
test(minMovesToCaptureTheQueen(7, 7, 3, 3, 4, 4), 1, 'Test 83');
test(minMovesToCaptureTheQueen(5, 5, 8, 1, 1, 8), 1, 'Test 84');
test(minMovesToCaptureTheQueen(2, 2, 7, 7, 4, 4), 1, 'Test 85');
test(minMovesToCaptureTheQueen(8, 8, 5, 5, 2, 2), 1, 'Test 86');
test(minMovesToCaptureTheQueen(1, 1, 8, 8, 4, 4), 1, 'Test 87');
test(minMovesToCaptureTheQueen(1, 5, 5, 1, 8, 8), 2, 'Test 88');
test(minMovesToCaptureTheQueen(8, 1, 4, 4, 5, 5), 1, 'Test 89');

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
