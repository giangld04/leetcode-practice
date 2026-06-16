// Test: 476. Number Complement
// 44 test cases from LeetCodeDataset
// Run: node test.js

const { findComplement } = require("./solution");

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

console.log("\n476. Number Complement\n");

test(findComplement(31), 0, 'Test 1');
test(findComplement(10), 5, 'Test 2');
test(findComplement(32), 31, 'Test 3');
test(findComplement(5), 2, 'Test 4');
test(findComplement(1023), 0, 'Test 5');
test(findComplement(1), 0, 'Test 6');
test(findComplement(100), 27, 'Test 7');
test(findComplement(2147483647), 0, 'Test 8');
test(findComplement(15), 0, 'Test 9');
test(findComplement(8191), 0, 'Test 10');
test(findComplement(4294967295), 0, 'Test 11');
test(findComplement(33), 30, 'Test 12');
test(findComplement(4095), 0, 'Test 13');
test(findComplement(1048575), 0, 'Test 14');
test(findComplement(123456789), 10760938, 'Test 15');
test(findComplement(65535), 0, 'Test 16');
test(findComplement(500), 11, 'Test 17');
test(findComplement(2097151), 0, 'Test 18');
test(findComplement(131071), 0, 'Test 19');
test(findComplement(16777215), 0, 'Test 20');
test(findComplement(2147483646), 1, 'Test 21');
test(findComplement(134217728), 134217727, 'Test 22');
test(findComplement(4194303), 0, 'Test 23');
test(findComplement(2047), 0, 'Test 24');
test(findComplement(987654321), 86087502, 'Test 25');
test(findComplement(89123456), 45094271, 'Test 26');
test(findComplement(255), 0, 'Test 27');
test(findComplement(8388607), 0, 'Test 28');
test(findComplement(1024), 1023, 'Test 29');
test(findComplement(100000), 31071, 'Test 30');
test(findComplement(1073741823), 0, 'Test 31');
test(findComplement(262143), 0, 'Test 32');
test(findComplement(268435455), 0, 'Test 33');
test(findComplement(123456), 7615, 'Test 34');
test(findComplement(1000000), 48575, 'Test 35');
test(findComplement(8), 7, 'Test 36');
test(findComplement(32767), 0, 'Test 37');
test(findComplement(524287), 0, 'Test 38');
test(findComplement(134217727), 0, 'Test 39');
test(findComplement(4294967294), 1, 'Test 40');
test(findComplement(33554431), 0, 'Test 41');
test(findComplement(536870911), 0, 'Test 42');
test(findComplement(67108863), 0, 'Test 43');
test(findComplement(1073741824), 1073741823, 'Test 44');

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
