// Test: 650. 2 Keys Keyboard
// 65 test cases from LeetCodeDataset
// Run: node test.js

const { minSteps } = require("./solution");

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

console.log("\n650. 2 Keys Keyboard\n");

test(minSteps(3), 3, 'Test 1');
test(minSteps(12), 7, 'Test 2');
test(minSteps(100), 14, 'Test 3');
test(minSteps(10), 7, 'Test 4');
test(minSteps(1000), 21, 'Test 5');
test(minSteps(5), 5, 'Test 6');
test(minSteps(4), 4, 'Test 7');
test(minSteps(16), 8, 'Test 8');
test(minSteps(17), 17, 'Test 9');
test(minSteps(2), 2, 'Test 10');
test(minSteps(8), 6, 'Test 11');
test(minSteps(27), 9, 'Test 12');
test(minSteps(18), 8, 'Test 13');
test(minSteps(20), 9, 'Test 14');
test(minSteps(19), 19, 'Test 15');
test(minSteps(11), 11, 'Test 16');
test(minSteps(15), 8, 'Test 17');
test(minSteps(14), 9, 'Test 18');
test(minSteps(9), 6, 'Test 19');
test(minSteps(6), 5, 'Test 20');
test(minSteps(1), 0, 'Test 21');
test(minSteps(7), 7, 'Test 22');
test(minSteps(13), 13, 'Test 23');
test(minSteps(625), 20, 'Test 24');
test(minSteps(97), 97, 'Test 25');
test(minSteps(729), 18, 'Test 26');
test(minSteps(144), 14, 'Test 27');
test(minSteps(49), 14, 'Test 28');
test(minSteps(125), 15, 'Test 29');
test(minSteps(4096), 24, 'Test 30');
test(minSteps(300), 17, 'Test 31');
test(minSteps(841), 58, 'Test 32');
test(minSteps(60), 12, 'Test 33');
test(minSteps(30), 10, 'Test 34');
test(minSteps(600), 19, 'Test 35');
test(minSteps(64), 12, 'Test 36');
test(minSteps(72), 12, 'Test 37');
test(minSteps(99), 17, 'Test 38');
test(minSteps(343), 21, 'Test 39');
test(minSteps(225), 16, 'Test 40');
test(minSteps(819), 26, 'Test 41');
test(minSteps(1024), 20, 'Test 42');
test(minSteps(128), 14, 'Test 43');
test(minSteps(999), 46, 'Test 44');
test(minSteps(96), 13, 'Test 45');
test(minSteps(256), 16, 'Test 46');
test(minSteps(997), 997, 'Test 47');
test(minSteps(36), 10, 'Test 48');
test(minSteps(529), 46, 'Test 49');
test(minSteps(91), 20, 'Test 50');
test(minSteps(77), 18, 'Test 51');
test(minSteps(81), 12, 'Test 52');
test(minSteps(48), 11, 'Test 53');
test(minSteps(961), 62, 'Test 54');
test(minSteps(200), 16, 'Test 55');
test(minSteps(400), 18, 'Test 56');
test(minSteps(512), 18, 'Test 57');
test(minSteps(196), 18, 'Test 58');
test(minSteps(750), 20, 'Test 59');
test(minSteps(121), 22, 'Test 60');
test(minSteps(361), 38, 'Test 61');
test(minSteps(441), 20, 'Test 62');
test(minSteps(500), 19, 'Test 63');
test(minSteps(55), 16, 'Test 64');
test(minSteps(25), 10, 'Test 65');

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
