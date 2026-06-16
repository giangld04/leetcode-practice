// Test: 7. Reverse Integer
// 61 test cases from LeetCodeDataset
// Run: node test.js

const { reverse } = require("./solution");

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

console.log("\n7. Reverse Integer\n");

test(reverse(-2147483412), -2143847412, 'Test 1');
test(reverse(2147483647), 0, 'Test 2');
test(reverse(120), 21, 'Test 3');
test(reverse(-123), -321, 'Test 4');
test(reverse(1534236469), 0, 'Test 5');
test(reverse(0), 0, 'Test 6');
test(reverse(-2147483648), 0, 'Test 7');
test(reverse(-1534236469), 0, 'Test 8');
test(reverse(123), 321, 'Test 9');
test(reverse(-10), -1, 'Test 10');
test(reverse(-100000), -1, 'Test 11');
test(reverse(10), 1, 'Test 12');
test(reverse(-999999999), -999999999, 'Test 13');
test(reverse(1), 1, 'Test 14');
test(reverse(2147483646), 0, 'Test 15');
test(reverse(-123000), -321, 'Test 16');
test(reverse(-900000), -9, 'Test 17');
test(reverse(-100100100), -1001001, 'Test 18');
test(reverse(-2147483647), 0, 'Test 19');
test(reverse(-1010101010), -101010101, 'Test 20');
test(reverse(1000000001), 1000000001, 'Test 21');
test(reverse(-1), -1, 'Test 22');
test(reverse(123000), 321, 'Test 23');
test(reverse(-2000000002), -2000000002, 'Test 24');
test(reverse(101010101), 101010101, 'Test 25');
test(reverse(1111111111), 1111111111, 'Test 26');
test(reverse(2147447412), 2147447412, 'Test 27');
test(reverse(-101010101), -101010101, 'Test 28');
test(reverse(900000), 9, 'Test 29');
test(reverse(987654321), 123456789, 'Test 30');
test(reverse(999999999), 999999999, 'Test 31');
test(reverse(-1000000000), -1, 'Test 32');
test(reverse(1001001001), 1001001001, 'Test 33');
test(reverse(-987654321), -123456789, 'Test 34');
test(reverse(-1000000001), -1000000001, 'Test 35');
test(reverse(10000000000), 1, 'Test 36');
test(reverse(11000000001), 0, 'Test 37');
test(reverse(876543210), 12345678, 'Test 38');
test(reverse(2147483640), 463847412, 'Test 39');
test(reverse(100100100), 1001001, 'Test 40');
test(reverse(100000), 1, 'Test 41');
test(reverse(2000000002), 2000000002, 'Test 42');
test(reverse(-9646324351), -1534236469, 'Test 43');
test(reverse(-123456789), -987654321, 'Test 44');
test(reverse(7463847412), 2147483647, 'Test 45');
test(reverse(-1000000003), 0, 'Test 46');
test(reverse(-3000000001), -1000000003, 'Test 47');
test(reverse(-876543210), -12345678, 'Test 48');
test(reverse(-1111111111), -1111111111, 'Test 49');
test(reverse(-1001001001), -1001001001, 'Test 50');
test(reverse(9646324351), 1534236469, 'Test 51');
test(reverse(1010101010), 101010101, 'Test 52');
test(reverse(123456789), 987654321, 'Test 53');
test(reverse(-10000000000), -1, 'Test 54');
test(reverse(-2147483640), -463847412, 'Test 55');
test(reverse(-7463847412), -2147483647, 'Test 56');
test(reverse(3000000001), 1000000003, 'Test 57');
test(reverse(1000000000), 1, 'Test 58');
test(reverse(1000000003), 0, 'Test 59');
test(reverse(-214748364), -463847412, 'Test 60');
test(reverse(9000000000), 9, 'Test 61');

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
