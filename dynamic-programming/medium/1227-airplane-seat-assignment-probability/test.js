// Test: 1227. Airplane Seat Assignment Probability
// 32 test cases from LeetCodeDataset
// Run: node test.js

const { nthPersonGetsNthSeat } = require("./solution");

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

console.log("\n1227. Airplane Seat Assignment Probability\n");

test(nthPersonGetsNthSeat(3), 0.5, 'Test 1');
test(nthPersonGetsNthSeat(100000), 0.5, 'Test 2');
test(nthPersonGetsNthSeat(100), 0.5, 'Test 3');
test(nthPersonGetsNthSeat(10000), 0.5, 'Test 4');
test(nthPersonGetsNthSeat(2), 0.5, 'Test 5');
test(nthPersonGetsNthSeat(1), 1, 'Test 6');
test(nthPersonGetsNthSeat(1000), 0.5, 'Test 7');
test(nthPersonGetsNthSeat(10), 0.5, 'Test 8');
test(nthPersonGetsNthSeat(99999), 0.5, 'Test 9');
test(nthPersonGetsNthSeat(2000), 0.5, 'Test 10');
test(nthPersonGetsNthSeat(50000), 0.5, 'Test 11');
test(nthPersonGetsNthSeat(50), 0.5, 'Test 12');
test(nthPersonGetsNthSeat(5), 0.5, 'Test 13');
test(nthPersonGetsNthSeat(10001), 0.5, 'Test 14');
test(nthPersonGetsNthSeat(250000), 0.5, 'Test 15');
test(nthPersonGetsNthSeat(4), 0.5, 'Test 16');
test(nthPersonGetsNthSeat(750000), 0.5, 'Test 17');
test(nthPersonGetsNthSeat(1001), 0.5, 'Test 18');
test(nthPersonGetsNthSeat(200000), 0.5, 'Test 19');
test(nthPersonGetsNthSeat(101), 0.5, 'Test 20');
test(nthPersonGetsNthSeat(20000), 0.5, 'Test 21');
test(nthPersonGetsNthSeat(5000), 0.5, 'Test 22');
test(nthPersonGetsNthSeat(20), 0.5, 'Test 23');
test(nthPersonGetsNthSeat(9999), 0.5, 'Test 24');
test(nthPersonGetsNthSeat(50001), 0.5, 'Test 25');
test(nthPersonGetsNthSeat(2500), 0.5, 'Test 26');
test(nthPersonGetsNthSeat(500000), 0.5, 'Test 27');
test(nthPersonGetsNthSeat(200), 0.5, 'Test 28');
test(nthPersonGetsNthSeat(99998), 0.5, 'Test 29');
test(nthPersonGetsNthSeat(1000000), 0.5, 'Test 30');
test(nthPersonGetsNthSeat(100001), 0.5, 'Test 31');
test(nthPersonGetsNthSeat(500), 0.5, 'Test 32');

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
