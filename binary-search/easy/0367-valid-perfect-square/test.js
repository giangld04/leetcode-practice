// Test: 367. Valid Perfect Square
// 53 test cases from LeetCodeDataset
// Run: node test.js

const { isPerfectSquare } = require("./solution");

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

console.log("\n367. Valid Perfect Square\n");

test(isPerfectSquare(14), false, 'Test 1');
test(isPerfectSquare(9), true, 'Test 2');
test(isPerfectSquare(1000000000), false, 'Test 3');
test(isPerfectSquare(49), true, 'Test 4');
test(isPerfectSquare(50), false, 'Test 5');
test(isPerfectSquare(25), true, 'Test 6');
test(isPerfectSquare(0), false, 'Test 7');
test(isPerfectSquare(4), true, 'Test 8');
test(isPerfectSquare(1524157875), false, 'Test 9');
test(isPerfectSquare(1), true, 'Test 10');
test(isPerfectSquare(100), true, 'Test 11');
test(isPerfectSquare(152415787501905210), false, 'Test 12');
test(isPerfectSquare(99), false, 'Test 13');
test(isPerfectSquare(2147483647), false, 'Test 14');
test(isPerfectSquare(101), false, 'Test 15');
test(isPerfectSquare(16), true, 'Test 16');
test(isPerfectSquare(26), false, 'Test 17');
test(isPerfectSquare(15), false, 'Test 18');
test(isPerfectSquare(12345678987654321), true, 'Test 19');
test(isPerfectSquare(10), false, 'Test 20');
test(isPerfectSquare(361294659455137), false, 'Test 21');
test(isPerfectSquare(9801), true, 'Test 22');
test(isPerfectSquare(100000000), true, 'Test 23');
test(isPerfectSquare(4503599627370496), true, 'Test 24');
test(isPerfectSquare(401), false, 'Test 25');
test(isPerfectSquare(12345678987654322), false, 'Test 26');
test(isPerfectSquare(104976), true, 'Test 27');
test(isPerfectSquare(1025), false, 'Test 28');
test(isPerfectSquare(123456789), false, 'Test 29');
test(isPerfectSquare(252890377088361284512), Error: Python int too large to convert to C ssize_t, 'Test 30');
test(isPerfectSquare(18014398509481984), true, 'Test 31');
test(isPerfectSquare(6984109366835872423180200032416), Error: Python int too large to convert to C ssize_t, 'Test 32');
test(isPerfectSquare(18014398509481985), false, 'Test 33');
test(isPerfectSquare(9223372036854775807), false, 'Test 34');
test(isPerfectSquare(1000000001), false, 'Test 35');
test(isPerfectSquare(2500), true, 'Test 36');
test(isPerfectSquare(100000001), false, 'Test 37');
test(isPerfectSquare(2304), true, 'Test 38');
test(isPerfectSquare(207936), true, 'Test 39');
test(isPerfectSquare(400), true, 'Test 40');
test(isPerfectSquare(4294967296), true, 'Test 41');
test(isPerfectSquare(2), false, 'Test 42');
test(isPerfectSquare(46656000000), true, 'Test 43');
test(isPerfectSquare(3), false, 'Test 44');
test(isPerfectSquare(141376), true, 'Test 45');
test(isPerfectSquare(1024), true, 'Test 46');
test(isPerfectSquare(1000000000000), true, 'Test 47');
test(isPerfectSquare(16777216), true, 'Test 48');
test(isPerfectSquare(18446744073709551616), Error: Python int too large to convert to C ssize_t, 'Test 49');
test(isPerfectSquare(999999999), false, 'Test 50');
test(isPerfectSquare(1000000), true, 'Test 51');
test(isPerfectSquare(1000001), false, 'Test 52');
test(isPerfectSquare(1073741824), true, 'Test 53');

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
