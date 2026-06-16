// Test: 1009. Complement Of Base 10 Integer
// 37 test cases from LeetCodeDataset
// Run: node test.js

const { bitwiseComplement } = require("./solution");

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

console.log("\n1009. Complement Of Base 10 Integer\n");

test(bitwiseComplement(0), 1, 'Test 1');
test(bitwiseComplement(8), 7, 'Test 2');
test(bitwiseComplement(100), 27, 'Test 3');
test(bitwiseComplement(15), 0, 'Test 4');
test(bitwiseComplement(31), 0, 'Test 5');
test(bitwiseComplement(123456789), 10760938, 'Test 6');
test(bitwiseComplement(1), 0, 'Test 7');
test(bitwiseComplement(7), 0, 'Test 8');
test(bitwiseComplement(10), 5, 'Test 9');
test(bitwiseComplement(5), 2, 'Test 10');
test(bitwiseComplement(123), 4, 'Test 11');
test(bitwiseComplement(894567890), 179173933, 'Test 12');
test(bitwiseComplement(890123456), 183618367, 'Test 13');
test(bitwiseComplement(131071), 0, 'Test 14');
test(bitwiseComplement(897543210), 176198613, 'Test 15');
test(bitwiseComplement(67108863), 0, 'Test 16');
test(bitwiseComplement(2147483647), 0, 'Test 17');
test(bitwiseComplement(67890), 63181, 'Test 18');
test(bitwiseComplement(32767), 0, 'Test 19');
test(bitwiseComplement(4294967295), 0, 'Test 20');
test(bitwiseComplement(134217727), 0, 'Test 21');
test(bitwiseComplement(891011121), 182730702, 'Test 22');
test(bitwiseComplement(1073741823), 0, 'Test 23');
test(bitwiseComplement(1024), 1023, 'Test 24');
test(bitwiseComplement(16777215), 0, 'Test 25');
test(bitwiseComplement(2048), 2047, 'Test 26');
test(bitwiseComplement(255), 0, 'Test 27');
test(bitwiseComplement(1023), 0, 'Test 28');
test(bitwiseComplement(65535), 0, 'Test 29');
test(bitwiseComplement(1000000000), 73741823, 'Test 30');
test(bitwiseComplement(987654321), 86087502, 'Test 31');
test(bitwiseComplement(1048575), 0, 'Test 32');
test(bitwiseComplement(500000000), 36870911, 'Test 33');
test(bitwiseComplement(536870911), 0, 'Test 34');
test(bitwiseComplement(543210987), 530530836, 'Test 35');
test(bitwiseComplement(33554431), 0, 'Test 36');
test(bitwiseComplement(54321), 11214, 'Test 37');

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
