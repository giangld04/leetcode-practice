// Test: 263. Ugly Number
// 76 test cases from LeetCodeDataset
// Run: node test.js

const { isUgly } = require("./solution");

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

console.log("\n263. Ugly Number\n");

test(isUgly(0), false, 'Test 1');
test(isUgly(8), true, 'Test 2');
test(isUgly(-2147483648), false, 'Test 3');
test(isUgly(100000), true, 'Test 4');
test(isUgly(100), true, 'Test 5');
test(isUgly(30), true, 'Test 6');
test(isUgly(-1), false, 'Test 7');
test(isUgly(2147483648), true, 'Test 8');
test(isUgly(125), true, 'Test 9');
test(isUgly(14), false, 'Test 10');
test(isUgly(2147483647), false, 'Test 11');
test(isUgly(6), true, 'Test 12');
test(isUgly(1), true, 'Test 13');
test(isUgly(1000000000), true, 'Test 14');
test(isUgly(7), false, 'Test 15');
test(isUgly(1024), true, 'Test 16');
test(isUgly(59049), true, 'Test 17');
test(isUgly(72057594037927935), false, 'Test 18');
test(isUgly(45), true, 'Test 19');
test(isUgly(180000000), true, 'Test 20');
test(isUgly(135), true, 'Test 21');
test(isUgly(729), true, 'Test 22');
test(isUgly(2250000000), true, 'Test 23');
test(isUgly(8589934591), false, 'Test 24');
test(isUgly(216), true, 'Test 25');
test(isUgly(2000000000), true, 'Test 26');
test(isUgly(50000), true, 'Test 27');
test(isUgly(1000000002), false, 'Test 28');
test(isUgly(1968300000), true, 'Test 29');
test(isUgly(86400), true, 'Test 30');
test(isUgly(1000000000000), true, 'Test 31');
test(isUgly(60), true, 'Test 32');
test(isUgly(2**31), Error: Solution.isUgly[] missing 1 required positional argument: 'n', 'Test 33');
test(isUgly(1500000000), true, 'Test 34');
test(isUgly(30000), true, 'Test 35');
test(isUgly(2**31 - 1), Error: Solution.isUgly[] missing 1 required positional argument: 'n', 'Test 36');
test(isUgly(34359738368), true, 'Test 37');
test(isUgly(2500000000), true, 'Test 38');
test(isUgly(225), true, 'Test 39');
test(isUgly(15625), true, 'Test 40');
test(isUgly(3126), false, 'Test 41');
test(isUgly(720), true, 'Test 42');
test(isUgly(46656), true, 'Test 43');
test(isUgly(16000000), true, 'Test 44');
test(isUgly(250), true, 'Test 45');
test(isUgly(1048576), true, 'Test 46');
test(isUgly(-10), false, 'Test 47');
test(isUgly(3600), true, 'Test 48');
test(isUgly(256), true, 'Test 49');
test(isUgly(1600000000), true, 'Test 50');
test(isUgly(2430000000), true, 'Test 51');
test(isUgly(2187000), true, 'Test 52');
test(isUgly(307200000), true, 'Test 53');
test(isUgly(1000000001), false, 'Test 54');
test(isUgly(112500000000), true, 'Test 55');
test(isUgly(24), true, 'Test 56');
test(isUgly(9765625), true, 'Test 57');
test(isUgly(531441), true, 'Test 58');
test(isUgly(987654321), false, 'Test 59');
test(isUgly(15), true, 'Test 60');
test(isUgly(180), true, 'Test 61');
test(isUgly(3125000000), true, 'Test 62');
test(isUgly(500000), true, 'Test 63');
test(isUgly(150000000), true, 'Test 64');
test(isUgly(8589934592), true, 'Test 65');
test(isUgly(1800000000), true, 'Test 66');
test(isUgly(3125), true, 'Test 67');
test(isUgly(6103515625), true, 'Test 68');
test(isUgly(2352), false, 'Test 69');
test(isUgly(120), true, 'Test 70');
test(isUgly(72057594037927936), true, 'Test 71');
test(isUgly(40500000), true, 'Test 72');
test(isUgly(105), false, 'Test 73');
test(isUgly(8388608), true, 'Test 74');
test(isUgly(243), true, 'Test 75');
test(isUgly(84), false, 'Test 76');

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
