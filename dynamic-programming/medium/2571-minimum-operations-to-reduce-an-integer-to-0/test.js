// Test: 2571. Minimum Operations To Reduce An Integer To 0
// 60 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n2571. Minimum Operations To Reduce An Integer To 0\n");

test(minOperations(3), 2, 'Test 1');
test(minOperations(63), 2, 'Test 2');
test(minOperations(100), 3, 'Test 3');
test(minOperations(50000), 6, 'Test 4');
test(minOperations(4), 1, 'Test 5');
test(minOperations(64), 1, 'Test 6');
test(minOperations(16), 1, 'Test 7');
test(minOperations(10000), 4, 'Test 8');
test(minOperations(2), 1, 'Test 9');
test(minOperations(1024), 1, 'Test 10');
test(minOperations(54), 3, 'Test 11');
test(minOperations(100000), 6, 'Test 12');
test(minOperations(1048576), 1, 'Test 13');
test(minOperations(65536), 1, 'Test 14');
test(minOperations(32), 1, 'Test 15');
test(minOperations(1023), 2, 'Test 16');
test(minOperations(39), 3, 'Test 17');
test(minOperations(65535), 2, 'Test 18');
test(minOperations(15), 2, 'Test 19');
test(minOperations(32768), 1, 'Test 20');
test(minOperations(1048575), 2, 'Test 21');
test(minOperations(31), 2, 'Test 22');
test(minOperations(1), 1, 'Test 23');
test(minOperations(10), 2, 'Test 24');
test(minOperations(65534), 2, 'Test 25');
test(minOperations(33333), 6, 'Test 26');
test(minOperations(99999), 7, 'Test 27');
test(minOperations(8765), 5, 'Test 28');
test(minOperations(131071), 2, 'Test 29');
test(minOperations(12345), 5, 'Test 30');
test(minOperations(7456), 4, 'Test 31');
test(minOperations(77777), 6, 'Test 32');
test(minOperations(67890), 6, 'Test 33');
test(minOperations(65537), 2, 'Test 34');
test(minOperations(111111), 6, 'Test 35');
test(minOperations(32767), 2, 'Test 36');
test(minOperations(65533), 3, 'Test 37');
test(minOperations(86420), 7, 'Test 38');
test(minOperations(19683), 7, 'Test 39');
test(minOperations(16383), 2, 'Test 40');
test(minOperations(24680), 5, 'Test 41');
test(minOperations(16384), 1, 'Test 42');
test(minOperations(123), 3, 'Test 43');
test(minOperations(10001), 5, 'Test 44');
test(minOperations(81920), 2, 'Test 45');
test(minOperations(1365), 6, 'Test 46');
test(minOperations(32769), 2, 'Test 47');
test(minOperations(4095), 2, 'Test 48');
test(minOperations(8192), 1, 'Test 49');
test(minOperations(999), 4, 'Test 50');
test(minOperations(8191), 2, 'Test 51');
test(minOperations(7890), 5, 'Test 52');
test(minOperations(11001), 6, 'Test 53');
test(minOperations(39321), 8, 'Test 54');
test(minOperations(13579), 7, 'Test 55');
test(minOperations(98765), 7, 'Test 56');
test(minOperations(43210), 7, 'Test 57');
test(minOperations(54321), 7, 'Test 58');
test(minOperations(531441), 5, 'Test 59');
test(minOperations(1536), 2, 'Test 60');

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
