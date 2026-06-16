// Test: 2595. Number Of Even And Odd Bits
// 62 test cases from LeetCodeDataset
// Run: node test.js

const { evenOddBit } = require("./solution");

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

console.log("\n2595. Number Of Even And Odd Bits\n");

test(evenOddBit(8), [0, 1], 'Test 1');
test(evenOddBit(3), [1, 1], 'Test 2');
test(evenOddBit(1000), [2, 4], 'Test 3');
test(evenOddBit(63), [3, 3], 'Test 4');
test(evenOddBit(255), [4, 4], 'Test 5');
test(evenOddBit(15), [2, 2], 'Test 6');
test(evenOddBit(64), [1, 0], 'Test 7');
test(evenOddBit(31), [3, 2], 'Test 8');
test(evenOddBit(2), [0, 1], 'Test 9');
test(evenOddBit(1), [1, 0], 'Test 10');
test(evenOddBit(50), [1, 2], 'Test 11');
test(evenOddBit(7), [2, 1], 'Test 12');
test(evenOddBit(5), [2, 0], 'Test 13');
test(evenOddBit(123), [3, 3], 'Test 14');
test(evenOddBit(97), [2, 1], 'Test 15');
test(evenOddBit(315), [3, 3], 'Test 16');
test(evenOddBit(678), [1, 4], 'Test 17');
test(evenOddBit(170), [0, 4], 'Test 18');
test(evenOddBit(511), [5, 4], 'Test 19');
test(evenOddBit(341), [5, 0], 'Test 20');
test(evenOddBit(100), [2, 1], 'Test 21');
test(evenOddBit(2047), [6, 5], 'Test 22');
test(evenOddBit(496), [3, 2], 'Test 23');
test(evenOddBit(841), [3, 2], 'Test 24');
test(evenOddBit(384), [1, 1], 'Test 25');
test(evenOddBit(4), [1, 0], 'Test 26');
test(evenOddBit(345), [4, 1], 'Test 27');
test(evenOddBit(16), [1, 0], 'Test 28');
test(evenOddBit(192), [1, 1], 'Test 29');
test(evenOddBit(254), [3, 4], 'Test 30');
test(evenOddBit(1365), [6, 0], 'Test 31');
test(evenOddBit(1001), [3, 4], 'Test 32');
test(evenOddBit(977), [4, 2], 'Test 33');
test(evenOddBit(819), [3, 3], 'Test 34');
test(evenOddBit(128), [0, 1], 'Test 35');
test(evenOddBit(4095), [6, 6], 'Test 36');
test(evenOddBit(3141), [4, 1], 'Test 37');
test(evenOddBit(250), [2, 4], 'Test 38');
test(evenOddBit(789), [4, 1], 'Test 39');
test(evenOddBit(43690), [0, 8], 'Test 40');
test(evenOddBit(234), [1, 4], 'Test 41');
test(evenOddBit(131), [1, 2], 'Test 42');
test(evenOddBit(999), [4, 4], 'Test 43');
test(evenOddBit(89), [3, 1], 'Test 44');
test(evenOddBit(32), [0, 1], 'Test 45');
test(evenOddBit(240), [2, 2], 'Test 46');
test(evenOddBit(1023), [5, 5], 'Test 47');
test(evenOddBit(564), [2, 2], 'Test 48');
test(evenOddBit(768), [1, 1], 'Test 49');
test(evenOddBit(65535), [8, 8], 'Test 50');
test(evenOddBit(665), [2, 3], 'Test 51');
test(evenOddBit(641), [1, 2], 'Test 52');
test(evenOddBit(456), [2, 2], 'Test 53');
test(evenOddBit(85), [4, 0], 'Test 54');
test(evenOddBit(867), [3, 3], 'Test 55');
test(evenOddBit(399), [3, 3], 'Test 56');
test(evenOddBit(1234), [3, 2], 'Test 57');
test(evenOddBit(512), [0, 1], 'Test 58');
test(evenOddBit(224), [1, 2], 'Test 59');
test(evenOddBit(577), [2, 1], 'Test 60');
test(evenOddBit(199), [3, 2], 'Test 61');
test(evenOddBit(987), [4, 4], 'Test 62');

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
