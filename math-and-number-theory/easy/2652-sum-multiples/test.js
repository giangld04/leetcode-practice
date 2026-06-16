// Test: 2652. Sum Multiples
// 38 test cases from LeetCodeDataset
// Run: node test.js

const { sumOfMultiples } = require("./solution");

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

console.log("\n2652. Sum Multiples\n");

test(sumOfMultiples(9), 30, 'Test 1');
test(sumOfMultiples(1), 0, 'Test 2');
test(sumOfMultiples(1000), 272066, 'Test 3');
test(sumOfMultiples(7), 21, 'Test 4');
test(sumOfMultiples(10), 40, 'Test 5');
test(sumOfMultiples(210), 12075, 'Test 6');
test(sumOfMultiples(666), 121023, 'Test 7');
test(sumOfMultiples(315), 27090, 'Test 8');
test(sumOfMultiples(100), 2838, 'Test 9');
test(sumOfMultiples(50), 691, 'Test 10');
test(sumOfMultiples(300), 24321, 'Test 11');
test(sumOfMultiples(333), 30339, 'Test 12');
test(sumOfMultiples(60), 1024, 'Test 13');
test(sumOfMultiples(30), 274, 'Test 14');
test(sumOfMultiples(550), 82614, 'Test 15');
test(sumOfMultiples(103), 2940, 'Test 16');
test(sumOfMultiples(840), 191940, 'Test 17');
test(sumOfMultiples(42), 499, 'Test 18');
test(sumOfMultiples(888), 213532, 'Test 19');
test(sumOfMultiples(101), 2838, 'Test 20');
test(sumOfMultiples(250), 17152, 'Test 21');
test(sumOfMultiples(789), 169111, 'Test 22');
test(sumOfMultiples(630), 108045, 'Test 23');
test(sumOfMultiples(999), 271066, 'Test 24');
test(sumOfMultiples(256), 17659, 'Test 25');
test(sumOfMultiples(20), 119, 'Test 26');
test(sumOfMultiples(150), 6109, 'Test 27');
test(sumOfMultiples(800), 173877, 'Test 28');
test(sumOfMultiples(15), 81, 'Test 29');
test(sumOfMultiples(200), 10845, 'Test 30');
test(sumOfMultiples(512), 70927, 'Test 31');
test(sumOfMultiples(750), 153696, 'Test 32');
test(sumOfMultiples(120), 4071, 'Test 33');
test(sumOfMultiples(499), 67389, 'Test 34');
test(sumOfMultiples(700), 133342, 'Test 35');
test(sumOfMultiples(500), 67889, 'Test 36');
test(sumOfMultiples(420), 48090, 'Test 37');
test(sumOfMultiples(84), 1904, 'Test 38');

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
