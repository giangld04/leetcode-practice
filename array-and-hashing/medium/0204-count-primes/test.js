// Test: 204. Count Primes
// 33 test cases from LeetCodeDataset
// Run: node test.js

const { countPrimes } = require("./solution");

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

console.log("\n204. Count Primes\n");

test(countPrimes(0), 0, 'Test 1');
test(countPrimes(5000000), 348513, 'Test 2');
test(countPrimes(1000), 168, 'Test 3');
test(countPrimes(100), 25, 'Test 4');
test(countPrimes(30), 10, 'Test 5');
test(countPrimes(1500000), 114155, 'Test 6');
test(countPrimes(1000000), 78498, 'Test 7');
test(countPrimes(20), 8, 'Test 8');
test(countPrimes(2), 0, 'Test 9');
test(countPrimes(1), 0, 'Test 10');
test(countPrimes(50), 15, 'Test 11');
test(countPrimes(10), 4, 'Test 12');
test(countPrimes(5), 2, 'Test 13');
test(countPrimes(3), 1, 'Test 14');
test(countPrimes(4999999), 348512, 'Test 15');
test(countPrimes(10000), 1229, 'Test 16');
test(countPrimes(17), 6, 'Test 17');
test(countPrimes(7890123), 532888, 'Test 18');
test(countPrimes(2000000), 148933, 'Test 19');
test(countPrimes(4000000), 283146, 'Test 20');
test(countPrimes(3141592), 226277, 'Test 21');
test(countPrimes(499979), 41537, 'Test 22');
test(countPrimes(10000000), 664579, 'Test 23');
test(countPrimes(5000001), 348513, 'Test 24');
test(countPrimes(18), 7, 'Test 25');
test(countPrimes(5000), 669, 'Test 26');
test(countPrimes(999983), 78497, 'Test 27');
test(countPrimes(3000000), 216816, 'Test 28');
test(countPrimes(789654), 63183, 'Test 29');
test(countPrimes(31337), 3378, 'Test 30');
test(countPrimes(104729), 9999, 'Test 31');
test(countPrimes(500000), 41538, 'Test 32');
test(countPrimes(1234567), 95360, 'Test 33');

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
