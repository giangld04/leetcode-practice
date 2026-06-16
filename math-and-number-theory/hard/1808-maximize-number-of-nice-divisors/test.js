// Test: 1808. Maximize Number Of Nice Divisors
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { maxNiceDivisors } = require("./solution");

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

console.log("\n1808. Maximize Number Of Nice Divisors\n");

test(maxNiceDivisors(8), Error: pow expected 2 arguments, got 3, 'Test 1');
test(maxNiceDivisors(1000000000), Error: pow expected 2 arguments, got 3, 'Test 2');
test(maxNiceDivisors(1), 1, 'Test 3');
test(maxNiceDivisors(100), Error: pow expected 2 arguments, got 3, 'Test 4');
test(maxNiceDivisors(10), Error: pow expected 2 arguments, got 3, 'Test 5');
test(maxNiceDivisors(5), Error: pow expected 2 arguments, got 3, 'Test 6');
test(maxNiceDivisors(10000), Error: pow expected 2 arguments, got 3, 'Test 7');
test(maxNiceDivisors(23), Error: pow expected 2 arguments, got 3, 'Test 8');
test(maxNiceDivisors(47), Error: pow expected 2 arguments, got 3, 'Test 9');
test(maxNiceDivisors(5000), Error: pow expected 2 arguments, got 3, 'Test 10');
test(maxNiceDivisors(29), Error: pow expected 2 arguments, got 3, 'Test 11');
test(maxNiceDivisors(1000), Error: pow expected 2 arguments, got 3, 'Test 12');
test(maxNiceDivisors(200000000), Error: pow expected 2 arguments, got 3, 'Test 13');
test(maxNiceDivisors(6), Error: pow expected 2 arguments, got 3, 'Test 14');
test(maxNiceDivisors(1024), Error: pow expected 2 arguments, got 3, 'Test 15');
test(maxNiceDivisors(13), Error: pow expected 2 arguments, got 3, 'Test 16');
test(maxNiceDivisors(750000000), Error: pow expected 2 arguments, got 3, 'Test 17');
test(maxNiceDivisors(99), Error: pow expected 2 arguments, got 3, 'Test 18');
test(maxNiceDivisors(987654321), Error: pow expected 2 arguments, got 3, 'Test 19');
test(maxNiceDivisors(768), Error: pow expected 2 arguments, got 3, 'Test 20');
test(maxNiceDivisors(999999997), Error: pow expected 2 arguments, got 3, 'Test 21');
test(maxNiceDivisors(75000000), Error: pow expected 2 arguments, got 3, 'Test 22');
test(maxNiceDivisors(500), Error: pow expected 2 arguments, got 3, 'Test 23');
test(maxNiceDivisors(999999998), Error: pow expected 2 arguments, got 3, 'Test 24');
test(maxNiceDivisors(7), Error: pow expected 2 arguments, got 3, 'Test 25');
test(maxNiceDivisors(98765), Error: pow expected 2 arguments, got 3, 'Test 26');
test(maxNiceDivisors(17), Error: pow expected 2 arguments, got 3, 'Test 27');
test(maxNiceDivisors(64), Error: pow expected 2 arguments, got 3, 'Test 28');
test(maxNiceDivisors(500000000), Error: pow expected 2 arguments, got 3, 'Test 29');
test(maxNiceDivisors(150000000), Error: pow expected 2 arguments, got 3, 'Test 30');
test(maxNiceDivisors(100000000), Error: pow expected 2 arguments, got 3, 'Test 31');
test(maxNiceDivisors(25), Error: pow expected 2 arguments, got 3, 'Test 32');
test(maxNiceDivisors(20), Error: pow expected 2 arguments, got 3, 'Test 33');
test(maxNiceDivisors(800000000), Error: pow expected 2 arguments, got 3, 'Test 34');
test(maxNiceDivisors(71), Error: pow expected 2 arguments, got 3, 'Test 35');
test(maxNiceDivisors(300000000), Error: pow expected 2 arguments, got 3, 'Test 36');
test(maxNiceDivisors(97), Error: pow expected 2 arguments, got 3, 'Test 37');
test(maxNiceDivisors(89), Error: pow expected 2 arguments, got 3, 'Test 38');
test(maxNiceDivisors(8192), Error: pow expected 2 arguments, got 3, 'Test 39');
test(maxNiceDivisors(400000000), Error: pow expected 2 arguments, got 3, 'Test 40');
test(maxNiceDivisors(1000000), Error: pow expected 2 arguments, got 3, 'Test 41');
test(maxNiceDivisors(2048), Error: pow expected 2 arguments, got 3, 'Test 42');
test(maxNiceDivisors(59), Error: pow expected 2 arguments, got 3, 'Test 43');
test(maxNiceDivisors(999999999), Error: pow expected 2 arguments, got 3, 'Test 44');
test(maxNiceDivisors(3), 3, 'Test 45');
test(maxNiceDivisors(11), Error: pow expected 2 arguments, got 3, 'Test 46');
test(maxNiceDivisors(50000000), Error: pow expected 2 arguments, got 3, 'Test 47');
test(maxNiceDivisors(54321), Error: pow expected 2 arguments, got 3, 'Test 48');
test(maxNiceDivisors(4), Error: pow expected 2 arguments, got 3, 'Test 49');
test(maxNiceDivisors(700000000), Error: pow expected 2 arguments, got 3, 'Test 50');
test(maxNiceDivisors(2), 2, 'Test 51');
test(maxNiceDivisors(19), Error: pow expected 2 arguments, got 3, 'Test 52');
test(maxNiceDivisors(73), Error: pow expected 2 arguments, got 3, 'Test 53');
test(maxNiceDivisors(600000000), Error: pow expected 2 arguments, got 3, 'Test 54');
test(maxNiceDivisors(512), Error: pow expected 2 arguments, got 3, 'Test 55');
test(maxNiceDivisors(53), Error: pow expected 2 arguments, got 3, 'Test 56');
test(maxNiceDivisors(15), Error: pow expected 2 arguments, got 3, 'Test 57');
test(maxNiceDivisors(41), Error: pow expected 2 arguments, got 3, 'Test 58');
test(maxNiceDivisors(256), Error: pow expected 2 arguments, got 3, 'Test 59');
test(maxNiceDivisors(333333333), Error: pow expected 2 arguments, got 3, 'Test 60');
test(maxNiceDivisors(101), Error: pow expected 2 arguments, got 3, 'Test 61');
test(maxNiceDivisors(4096), Error: pow expected 2 arguments, got 3, 'Test 62');
test(maxNiceDivisors(100000), Error: pow expected 2 arguments, got 3, 'Test 63');
test(maxNiceDivisors(61), Error: pow expected 2 arguments, got 3, 'Test 64');
test(maxNiceDivisors(67), Error: pow expected 2 arguments, got 3, 'Test 65');
test(maxNiceDivisors(5000000), Error: pow expected 2 arguments, got 3, 'Test 66');
test(maxNiceDivisors(31), Error: pow expected 2 arguments, got 3, 'Test 67');
test(maxNiceDivisors(50), Error: pow expected 2 arguments, got 3, 'Test 68');
test(maxNiceDivisors(37), Error: pow expected 2 arguments, got 3, 'Test 69');
test(maxNiceDivisors(250000000), Error: pow expected 2 arguments, got 3, 'Test 70');
test(maxNiceDivisors(123456789), Error: pow expected 2 arguments, got 3, 'Test 71');
test(maxNiceDivisors(28), Error: pow expected 2 arguments, got 3, 'Test 72');
test(maxNiceDivisors(50000), Error: pow expected 2 arguments, got 3, 'Test 73');
test(maxNiceDivisors(10000000), Error: pow expected 2 arguments, got 3, 'Test 74');
test(maxNiceDivisors(500000), Error: pow expected 2 arguments, got 3, 'Test 75');
test(maxNiceDivisors(2500), Error: pow expected 2 arguments, got 3, 'Test 76');
test(maxNiceDivisors(2000000000), Error: pow expected 2 arguments, got 3, 'Test 77');
test(maxNiceDivisors(43), Error: pow expected 2 arguments, got 3, 'Test 78');
test(maxNiceDivisors(79), Error: pow expected 2 arguments, got 3, 'Test 79');
test(maxNiceDivisors(83), Error: pow expected 2 arguments, got 3, 'Test 80');

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
