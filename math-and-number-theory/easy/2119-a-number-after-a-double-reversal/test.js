// Test: 2119. A Number After A Double Reversal
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { isSameAfterReversals } = require("./solution");

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

console.log("\n2119. A Number After A Double Reversal\n");

test(isSameAfterReversals(987654321), true, 'Test 1');
test(isSameAfterReversals(1001), true, 'Test 2');
test(isSameAfterReversals(1000000), false, 'Test 3');
test(isSameAfterReversals(999999), true, 'Test 4');
test(isSameAfterReversals(1200), false, 'Test 5');
test(isSameAfterReversals(0), true, 'Test 6');
test(isSameAfterReversals(1800), false, 'Test 7');
test(isSameAfterReversals(526), true, 'Test 8');
test(isSameAfterReversals(100), false, 'Test 9');
test(isSameAfterReversals(123), true, 'Test 10');
test(isSameAfterReversals(12340000), false, 'Test 11');
test(isSameAfterReversals(100010001), true, 'Test 12');
test(isSameAfterReversals(10), false, 'Test 13');
test(isSameAfterReversals(4005006), true, 'Test 14');
test(isSameAfterReversals(111111111), true, 'Test 15');
test(isSameAfterReversals(100000000), false, 'Test 16');
test(isSameAfterReversals(1234567), true, 'Test 17');
test(isSameAfterReversals(1234321), true, 'Test 18');
test(isSameAfterReversals(1001001), true, 'Test 19');
test(isSameAfterReversals(120120120), false, 'Test 20');
test(isSameAfterReversals(43210000), false, 'Test 21');
test(isSameAfterReversals(10001000), false, 'Test 22');
test(isSameAfterReversals(500500500), false, 'Test 23');
test(isSameAfterReversals(2020202020), false, 'Test 24');
test(isSameAfterReversals(1010101010), false, 'Test 25');
test(isSameAfterReversals(10001), true, 'Test 26');
test(isSameAfterReversals(500500), false, 'Test 27');
test(isSameAfterReversals(500050005), true, 'Test 28');
test(isSameAfterReversals(100001), true, 'Test 29');
test(isSameAfterReversals(5005005), true, 'Test 30');
test(isSameAfterReversals(1000000000), false, 'Test 31');
test(isSameAfterReversals(900000009), true, 'Test 32');
test(isSameAfterReversals(123456789), true, 'Test 33');
test(isSameAfterReversals(9876543210), false, 'Test 34');
test(isSameAfterReversals(10101010), false, 'Test 35');
test(isSameAfterReversals(1000000001), true, 'Test 36');
test(isSameAfterReversals(77777777), true, 'Test 37');
test(isSameAfterReversals(1010101), true, 'Test 38');
test(isSameAfterReversals(1001001001), true, 'Test 39');
test(isSameAfterReversals(1230000), false, 'Test 40');
test(isSameAfterReversals(2468000), false, 'Test 41');
test(isSameAfterReversals(1000), false, 'Test 42');
test(isSameAfterReversals(13579000), false, 'Test 43');
test(isSameAfterReversals(100000001), true, 'Test 44');
test(isSameAfterReversals(1234567890), false, 'Test 45');
test(isSameAfterReversals(9090909090), false, 'Test 46');
test(isSameAfterReversals(123000123), true, 'Test 47');
test(isSameAfterReversals(101010), false, 'Test 48');
test(isSameAfterReversals(40506070), false, 'Test 49');
test(isSameAfterReversals(1230321), true, 'Test 50');
test(isSameAfterReversals(101010101), true, 'Test 51');
test(isSameAfterReversals(900000000), false, 'Test 52');
test(isSameAfterReversals(12301230), false, 'Test 53');
test(isSameAfterReversals(2131200), false, 'Test 54');
test(isSameAfterReversals(20480000), false, 'Test 55');
test(isSameAfterReversals(100100100), false, 'Test 56');
test(isSameAfterReversals(10001000100), false, 'Test 57');
test(isSameAfterReversals(1122334455), true, 'Test 58');
test(isSameAfterReversals(3000003), true, 'Test 59');
test(isSameAfterReversals(100000), false, 'Test 60');
test(isSameAfterReversals(1000000002), true, 'Test 61');
test(isSameAfterReversals(999999999), true, 'Test 62');
test(isSameAfterReversals(123456), true, 'Test 63');
test(isSameAfterReversals(123400000), false, 'Test 64');
test(isSameAfterReversals(1000001), true, 'Test 65');
test(isSameAfterReversals(10000), false, 'Test 66');

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
