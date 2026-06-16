// Test: 3099. Harshad Number
// 53 test cases from LeetCodeDataset
// Run: node test.js

const { sumOfTheDigitsOfHarshadNumber } = require("./solution");

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

console.log("\n3099. Harshad Number\n");

test(sumOfTheDigitsOfHarshadNumber(50), 5, 'Test 1');
test(sumOfTheDigitsOfHarshadNumber(23), -1, 'Test 2');
test(sumOfTheDigitsOfHarshadNumber(10), 1, 'Test 3');
test(sumOfTheDigitsOfHarshadNumber(18), 9, 'Test 4');
test(sumOfTheDigitsOfHarshadNumber(1), 1, 'Test 5');
test(sumOfTheDigitsOfHarshadNumber(90), 9, 'Test 6');
test(sumOfTheDigitsOfHarshadNumber(57), -1, 'Test 7');
test(sumOfTheDigitsOfHarshadNumber(99), -1, 'Test 8');
test(sumOfTheDigitsOfHarshadNumber(81), 9, 'Test 9');
test(sumOfTheDigitsOfHarshadNumber(45), 9, 'Test 10');
test(sumOfTheDigitsOfHarshadNumber(13), -1, 'Test 11');
test(sumOfTheDigitsOfHarshadNumber(100), 1, 'Test 12');
test(sumOfTheDigitsOfHarshadNumber(12), 3, 'Test 13');
test(sumOfTheDigitsOfHarshadNumber(54), 9, 'Test 14');
test(sumOfTheDigitsOfHarshadNumber(234), 9, 'Test 15');
test(sumOfTheDigitsOfHarshadNumber(621), 9, 'Test 16');
test(sumOfTheDigitsOfHarshadNumber(111), 3, 'Test 17');
test(sumOfTheDigitsOfHarshadNumber(72), 9, 'Test 18');
test(sumOfTheDigitsOfHarshadNumber(42), 6, 'Test 19');
test(sumOfTheDigitsOfHarshadNumber(153), 9, 'Test 20');
test(sumOfTheDigitsOfHarshadNumber(216), 9, 'Test 21');
test(sumOfTheDigitsOfHarshadNumber(990), 18, 'Test 22');
test(sumOfTheDigitsOfHarshadNumber(135), 9, 'Test 23');
test(sumOfTheDigitsOfHarshadNumber(132), 6, 'Test 24');
test(sumOfTheDigitsOfHarshadNumber(201), 3, 'Test 25');
test(sumOfTheDigitsOfHarshadNumber(27), 9, 'Test 26');
test(sumOfTheDigitsOfHarshadNumber(729), -1, 'Test 27');
test(sumOfTheDigitsOfHarshadNumber(303), -1, 'Test 28');
test(sumOfTheDigitsOfHarshadNumber(513), 9, 'Test 29');
test(sumOfTheDigitsOfHarshadNumber(981), -1, 'Test 30');
test(sumOfTheDigitsOfHarshadNumber(450), 9, 'Test 31');
test(sumOfTheDigitsOfHarshadNumber(70), 7, 'Test 32');
test(sumOfTheDigitsOfHarshadNumber(270), 9, 'Test 33');
test(sumOfTheDigitsOfHarshadNumber(999), 27, 'Test 34');
test(sumOfTheDigitsOfHarshadNumber(108), 9, 'Test 35');
test(sumOfTheDigitsOfHarshadNumber(36), 9, 'Test 36');
test(sumOfTheDigitsOfHarshadNumber(200), 2, 'Test 37');
test(sumOfTheDigitsOfHarshadNumber(756), 18, 'Test 38');
test(sumOfTheDigitsOfHarshadNumber(801), 9, 'Test 39');
test(sumOfTheDigitsOfHarshadNumber(342), 9, 'Test 40');
test(sumOfTheDigitsOfHarshadNumber(49), -1, 'Test 41');
test(sumOfTheDigitsOfHarshadNumber(144), 9, 'Test 42');
test(sumOfTheDigitsOfHarshadNumber(810), 9, 'Test 43');
test(sumOfTheDigitsOfHarshadNumber(405), 9, 'Test 44');
test(sumOfTheDigitsOfHarshadNumber(300), 3, 'Test 45');
test(sumOfTheDigitsOfHarshadNumber(504), 9, 'Test 46');
test(sumOfTheDigitsOfHarshadNumber(180), 9, 'Test 47');
test(sumOfTheDigitsOfHarshadNumber(369), -1, 'Test 48');
test(sumOfTheDigitsOfHarshadNumber(75), -1, 'Test 49');
test(sumOfTheDigitsOfHarshadNumber(900), 9, 'Test 50');
test(sumOfTheDigitsOfHarshadNumber(123), -1, 'Test 51');
test(sumOfTheDigitsOfHarshadNumber(198), 18, 'Test 52');
test(sumOfTheDigitsOfHarshadNumber(63), 9, 'Test 53');

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
