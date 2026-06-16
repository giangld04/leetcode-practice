// Test: 2651. Calculate Delayed Arrival Time
// 31 test cases from LeetCodeDataset
// Run: node test.js

const { findDelayedArrivalTime } = require("./solution");

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

console.log("\n2651. Calculate Delayed Arrival Time\n");

test(findDelayedArrivalTime(5, 19), 0, 'Test 1');
test(findDelayedArrivalTime(8, 16), 0, 'Test 2');
test(findDelayedArrivalTime(13, 11), 0, 'Test 3');
test(findDelayedArrivalTime(15, 5), 20, 'Test 4');
test(findDelayedArrivalTime(1, 1), 2, 'Test 5');
test(findDelayedArrivalTime(12, 12), 0, 'Test 6');
test(findDelayedArrivalTime(1, 23), 0, 'Test 7');
test(findDelayedArrivalTime(0, 24), 0, 'Test 8');
test(findDelayedArrivalTime(23, 2), 1, 'Test 9');
test(findDelayedArrivalTime(5, 20), 1, 'Test 10');
test(findDelayedArrivalTime(19, 5), 0, 'Test 11');
test(findDelayedArrivalTime(18, 6), 0, 'Test 12');
test(findDelayedArrivalTime(2, 22), 0, 'Test 13');
test(findDelayedArrivalTime(20, 4), 0, 'Test 14');
test(findDelayedArrivalTime(3, 21), 0, 'Test 15');
test(findDelayedArrivalTime(20, 5), 1, 'Test 16');
test(findDelayedArrivalTime(6, 18), 0, 'Test 17');
test(findDelayedArrivalTime(9, 15), 0, 'Test 18');
test(findDelayedArrivalTime(17, 8), 1, 'Test 19');
test(findDelayedArrivalTime(7, 17), 0, 'Test 20');
test(findDelayedArrivalTime(20, 8), 4, 'Test 21');
test(findDelayedArrivalTime(7, 18), 1, 'Test 22');
test(findDelayedArrivalTime(18, 7), 1, 'Test 23');
test(findDelayedArrivalTime(15, 9), 0, 'Test 24');
test(findDelayedArrivalTime(10, 14), 0, 'Test 25');
test(findDelayedArrivalTime(19, 6), 1, 'Test 26');
test(findDelayedArrivalTime(20, 6), 2, 'Test 27');
test(findDelayedArrivalTime(16, 8), 0, 'Test 28');
test(findDelayedArrivalTime(11, 14), 1, 'Test 29');
test(findDelayedArrivalTime(17, 7), 0, 'Test 30');
test(findDelayedArrivalTime(14, 10), 0, 'Test 31');

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
