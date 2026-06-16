// Test: 342. Power Of Four
// 58 test cases from LeetCodeDataset
// Run: node test.js

const { isPowerOfFour } = require("./solution");

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

console.log("\n342. Power Of Four\n");

test(isPowerOfFour(3), false, 'Test 1');
test(isPowerOfFour(-16), false, 'Test 2');
test(isPowerOfFour(2147483647), false, 'Test 3');
test(isPowerOfFour(536870912), false, 'Test 4');
test(isPowerOfFour(4294967295), false, 'Test 5');
test(isPowerOfFour(268435456), true, 'Test 6');
test(isPowerOfFour(5), false, 'Test 7');
test(isPowerOfFour(16777216), true, 'Test 8');
test(isPowerOfFour(4), true, 'Test 9');
test(isPowerOfFour(64), true, 'Test 10');
test(isPowerOfFour(16), true, 'Test 11');
test(isPowerOfFour(2), false, 'Test 12');
test(isPowerOfFour(1024), true, 'Test 13');
test(isPowerOfFour(0), false, 'Test 14');
test(isPowerOfFour(8), false, 'Test 15');
test(isPowerOfFour(-2147483648), false, 'Test 16');
test(isPowerOfFour(1048576), true, 'Test 17');
test(isPowerOfFour(2048), false, 'Test 18');
test(isPowerOfFour(65536), true, 'Test 19');
test(isPowerOfFour(18), false, 'Test 20');
test(isPowerOfFour(256), true, 'Test 21');
test(isPowerOfFour(-4), false, 'Test 22');
test(isPowerOfFour(4294967296), true, 'Test 23');
test(isPowerOfFour(1), true, 'Test 24');
test(isPowerOfFour(1000000003), false, 'Test 25');
test(isPowerOfFour(1099511627776), true, 'Test 26');
test(isPowerOfFour(-4294967296), false, 'Test 27');
test(isPowerOfFour(4096), true, 'Test 28');
test(isPowerOfFour(18446744073709551615), false, 'Test 29');
test(isPowerOfFour(1431655765), false, 'Test 30');
test(isPowerOfFour(1000000002), false, 'Test 31');
test(isPowerOfFour(16384), true, 'Test 32');
test(isPowerOfFour(2147483649), false, 'Test 33');
test(isPowerOfFour(-1), false, 'Test 34');
test(isPowerOfFour(2199023255552), true, 'Test 35');
test(isPowerOfFour(4194304), true, 'Test 36');
test(isPowerOfFour(1073741823), false, 'Test 37');
test(isPowerOfFour(1152921504606846976), true, 'Test 38');
test(isPowerOfFour(-65536), false, 'Test 39');
test(isPowerOfFour(34359738368), true, 'Test 40');
test(isPowerOfFour(9223372036854775807), false, 'Test 41');
test(isPowerOfFour(1073741824), true, 'Test 42');
test(isPowerOfFour(18014398509481984), true, 'Test 43');
test(isPowerOfFour(255), false, 'Test 44');
test(isPowerOfFour(2147483648), false, 'Test 45');
test(isPowerOfFour(17179869184), true, 'Test 46');
test(isPowerOfFour(4611686018427387904), true, 'Test 47');
test(isPowerOfFour(1000000000), false, 'Test 48');
test(isPowerOfFour(65535), false, 'Test 49');
test(isPowerOfFour(1000000001), false, 'Test 50');
test(isPowerOfFour(1000000004), false, 'Test 51');
test(isPowerOfFour(15), false, 'Test 52');
test(isPowerOfFour(35184372088832), true, 'Test 53');
test(isPowerOfFour(72057594037927936), true, 'Test 54');
test(isPowerOfFour(1073741825), false, 'Test 55');
test(isPowerOfFour(7), false, 'Test 56');
test(isPowerOfFour(10), false, 'Test 57');
test(isPowerOfFour(18446744073709551616), true, 'Test 58');

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
