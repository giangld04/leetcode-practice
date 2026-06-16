// Test: 2849. Determine If A Cell Is Reachable At A Given Time
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { isReachableAtTime } = require("./solution");

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

console.log("\n2849. Determine If A Cell Is Reachable At A Given Time\n");

test(isReachableAtTime(1, 1, 2, 2, 1), true, 'Test 1');
test(isReachableAtTime(2, 4, 7, 7, 6), true, 'Test 2');
test(isReachableAtTime(1, 1, 10, 10, 14), true, 'Test 3');
test(isReachableAtTime(1000000000, 1000000000, 1000000000, 1000000000, 0), true, 'Test 4');
test(isReachableAtTime(1, 1, 2, 1, 1), true, 'Test 5');
test(isReachableAtTime(1, 1, 10, 10, 15), true, 'Test 6');
test(isReachableAtTime(1, 1, 1, 2, 1000000000), true, 'Test 7');
test(isReachableAtTime(3, 1, 7, 3, 3), false, 'Test 8');
test(isReachableAtTime(1, 1, 1000000000, 1000000000, 1999999998), true, 'Test 9');
test(isReachableAtTime(1, 1, 1, 1, 1), false, 'Test 10');
test(isReachableAtTime(5, 5, 5, 5, 10), true, 'Test 11');
test(isReachableAtTime(1, 1, 1, 1, 0), true, 'Test 12');
test(isReachableAtTime(1, 1, 1, 2, 1), true, 'Test 13');
test(isReachableAtTime(1, 1, 1000000000, 1000000000, 2000000000), true, 'Test 14');
test(isReachableAtTime(1, 1, 1, 1, 3), true, 'Test 15');
test(isReachableAtTime(10, 10, 5, 5, 10), true, 'Test 16');
test(isReachableAtTime(1, 1, 3, 3, 2), true, 'Test 17');
test(isReachableAtTime(1, 1, 2, 2, 2), true, 'Test 18');
test(isReachableAtTime(10, 10, 15, 15, 10), true, 'Test 19');
test(isReachableAtTime(10, 10, 20, 20, 21), true, 'Test 20');
test(isReachableAtTime(0, 0, 500000000, 500000000, 999999999), true, 'Test 21');
test(isReachableAtTime(1, 1, 1, 2, 0), false, 'Test 22');
test(isReachableAtTime(5, 5, 5, 5, 3), true, 'Test 23');
test(isReachableAtTime(10, 10, 10, 10, 10), true, 'Test 24');
test(isReachableAtTime(5, 5, 5, 6, 2), true, 'Test 25');
test(isReachableAtTime(1000000000, 1, 1000000000, 1, 0), true, 'Test 26');
test(isReachableAtTime(1, 1, 4, 4, 6), true, 'Test 27');
test(isReachableAtTime(10, 10, 15, 15, 5), true, 'Test 28');
test(isReachableAtTime(1, 1, 1, 1, 1000000000), true, 'Test 29');
test(isReachableAtTime(1000, 1000, 999, 999, 2), true, 'Test 30');
test(isReachableAtTime(5, 5, 1, 1, 4), true, 'Test 31');
test(isReachableAtTime(500000000, 500000000, 1, 1, 999999998), true, 'Test 32');
test(isReachableAtTime(999999999, 999999999, 1, 1, 1999999998), true, 'Test 33');
test(isReachableAtTime(10, 10, 15, 15, 11), true, 'Test 34');
test(isReachableAtTime(10, 10, 5, 15, 10), true, 'Test 35');
test(isReachableAtTime(1, 1, 10, 10, 19), true, 'Test 36');
test(isReachableAtTime(5, 5, 5, 5, 1), false, 'Test 37');
test(isReachableAtTime(0, 0, 0, 0, 0), true, 'Test 38');
test(isReachableAtTime(1, 1, 2, 2, 4), true, 'Test 39');
test(isReachableAtTime(10, 10, 10, 10, 0), true, 'Test 40');
test(isReachableAtTime(500, 500, 500, 500, 0), true, 'Test 41');
test(isReachableAtTime(1, 1, 5, 5, 7), true, 'Test 42');
test(isReachableAtTime(1, 1, 1, 10, 10), true, 'Test 43');
test(isReachableAtTime(10, 10, 9, 9, 2), true, 'Test 44');
test(isReachableAtTime(10, 10, 15, 15, 7), true, 'Test 45');
test(isReachableAtTime(1, 1, 3, 3, 4), true, 'Test 46');
test(isReachableAtTime(1, 1, 1, 10, 9), true, 'Test 47');
test(isReachableAtTime(5, 5, 10, 10, 15), true, 'Test 48');
test(isReachableAtTime(500000000, 500000000, 500000000, 500000000, 1000000000), true, 'Test 49');
test(isReachableAtTime(1, 1, 5, 5, 8), true, 'Test 50');
test(isReachableAtTime(10, 10, 15, 15, 9), true, 'Test 51');
test(isReachableAtTime(100, 100, 105, 105, 10), true, 'Test 52');
test(isReachableAtTime(1, 1, 2, 3, 2), true, 'Test 53');
test(isReachableAtTime(1, 1, 10, 1, 9), true, 'Test 54');
test(isReachableAtTime(1, 1, 2, 2, 3), true, 'Test 55');
test(isReachableAtTime(1000, 1000, 998, 998, 4), true, 'Test 56');
test(isReachableAtTime(10, 10, 15, 15, 6), true, 'Test 57');
test(isReachableAtTime(1, 1, 1, 1, 2), true, 'Test 58');
test(isReachableAtTime(1, 1, 3, 3, 3), true, 'Test 59');
test(isReachableAtTime(500000000, 500000000, 600000000, 600000000, 100000000), true, 'Test 60');
test(isReachableAtTime(1, 1, 1, 3, 2), true, 'Test 61');
test(isReachableAtTime(10, 10, 15, 15, 8), true, 'Test 62');
test(isReachableAtTime(1, 1, 1, 2, 2), true, 'Test 63');
test(isReachableAtTime(5, 5, 15, 15, 18), true, 'Test 64');
test(isReachableAtTime(0, 0, 1, 1, 1), true, 'Test 65');
test(isReachableAtTime(1, 1, 3, 3, 6), true, 'Test 66');
test(isReachableAtTime(1, 1, 3, 1, 3), true, 'Test 67');
test(isReachableAtTime(1, 1, 1000000000, 1000000000, 1000000000), true, 'Test 68');
test(isReachableAtTime(1, 1, 1, 3, 3), true, 'Test 69');
test(isReachableAtTime(0, 0, 3, 4, 5), true, 'Test 70');
test(isReachableAtTime(999999999, 999999999, 1000000000, 1000000000, 1), true, 'Test 71');
test(isReachableAtTime(1, 1, 10, 10, 18), true, 'Test 72');
test(isReachableAtTime(10, 10, 10, 15, 7), true, 'Test 73');
test(isReachableAtTime(500, 500, 500, 500, 5), true, 'Test 74');
test(isReachableAtTime(100, 100, 105, 95, 10), true, 'Test 75');
test(isReachableAtTime(1000000000, 1000000000, 1000000000, 1000000000, 1000000000), true, 'Test 76');
test(isReachableAtTime(1000000000, 1000000000, 1, 1, 1999999998), true, 'Test 77');
test(isReachableAtTime(1, 1, 1000000000, 1000000000, 1999999999), true, 'Test 78');
test(isReachableAtTime(1, 1, 2, 3, 3), true, 'Test 79');
test(isReachableAtTime(10, 10, 5, 5, 9), true, 'Test 80');
test(isReachableAtTime(3, 3, 1, 1, 4), true, 'Test 81');
test(isReachableAtTime(5, 5, 5, 5, 0), true, 'Test 82');
test(isReachableAtTime(1, 1, 10, 1, 10), true, 'Test 83');
test(isReachableAtTime(1, 1, 3, 3, 5), true, 'Test 84');
test(isReachableAtTime(1000000000, 1, 1, 1000000000, 1999999998), true, 'Test 85');
test(isReachableAtTime(1, 1, 10, 10, 17), true, 'Test 86');
test(isReachableAtTime(1, 1, 4, 4, 5), true, 'Test 87');
test(isReachableAtTime(1, 1, 100, 100, 198), true, 'Test 88');
test(isReachableAtTime(1, 2, 3, 4, 4), true, 'Test 89');

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
