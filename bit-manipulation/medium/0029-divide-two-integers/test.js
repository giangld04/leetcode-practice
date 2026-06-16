// Test: 29. Divide Two Integers
// 135 test cases from LeetCodeDataset
// Run: node test.js

const { divide } = require("./solution");

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

console.log("\n29. Divide Two Integers\n");

test(divide(10, 3), 3, 'Test 1');
test(divide(-2147483648, 2), -1073741824, 'Test 2');
test(divide(-2147483648, -1), 2147483647, 'Test 3');
test(divide(-1, -1), 1, 'Test 4');
test(divide(2147483647, 1), 2147483647, 'Test 5');
test(divide(1, 1), 1, 'Test 6');
test(divide(1000000000, 3), 333333333, 'Test 7');
test(divide(7, -3), -2, 'Test 8');
test(divide(-2147483648, 1), -2147483648, 'Test 9');
test(divide(100, 7), 14, 'Test 10');
test(divide(-5, 2), -2, 'Test 11');
test(divide(1, -1), -1, 'Test 12');
test(divide(2147483647, 2), 1073741823, 'Test 13');
test(divide(0, 1), 0, 'Test 14');
test(divide(1, 2), 0, 'Test 15');
test(divide(-1, 1), -1, 'Test 16');
test(divide(-7, 3), -2, 'Test 17');
test(divide(-1000000000, 1000000000), -1, 'Test 18');
test(divide(15, 6), 2, 'Test 19');
test(divide(1, -2147483648), 0, 'Test 20');
test(divide(-15, -5), 3, 'Test 21');
test(divide(1000000000, 500000000), 2, 'Test 22');
test(divide(2147483647, -1), -2147483647, 'Test 23');
test(divide(123456789, 987654321), 0, 'Test 24');
test(divide(1, 999999998), 0, 'Test 25');
test(divide(-15, -6), 2, 'Test 26');
test(divide(-1024, -2), 512, 'Test 27');
test(divide(-15, 3), -5, 'Test 28');
test(divide(-5, -2), 2, 'Test 29');
test(divide(1024, 10), 102, 'Test 30');
test(divide(-1000000000, -1000000000), 1, 'Test 31');
test(divide(-1000000000, -987654321), 1, 'Test 32');
test(divide(-1500000000, -4), 375000000, 'Test 33');
test(divide(-1023, 10), -102, 'Test 34');
test(divide(-1000000000, 3), -333333333, 'Test 35');
test(divide(15, -5), -3, 'Test 36');
test(divide(-1000000000, -3), 333333333, 'Test 37');
test(divide(1023, 10), 102, 'Test 38');
test(divide(-10, 1), -10, 'Test 39');
test(divide(1000000000, 123456789), 8, 'Test 40');
test(divide(-1024, 1024), -1, 'Test 41');
test(divide(-1, 2147483648), 0, 'Test 42');
test(divide(-15, 5), -3, 'Test 43');
test(divide(-1000000000, 987654321), -1, 'Test 44');
test(divide(1024, -10), -102, 'Test 45');
test(divide(15, -4), -3, 'Test 46');
test(divide(15, -6), -2, 'Test 47');
test(divide(5, -2), -2, 'Test 48');
test(divide(-15, 4), -3, 'Test 49');
test(divide(-15, -4), 3, 'Test 50');
test(divide(-15, -3), 5, 'Test 51');
test(divide(-123456789, 987654321), 0, 'Test 52');
test(divide(100, -7), -14, 'Test 53');
test(divide(999999999, 1), 999999999, 'Test 54');
test(divide(-1024, -10), 102, 'Test 55');
test(divide(10, -1), -10, 'Test 56');
test(divide(1000000000, 25), 40000000, 'Test 57');
test(divide(123456789, -987654321), 0, 'Test 58');
test(divide(1500000000, 3), 500000000, 'Test 59');
test(divide(15, 4), 3, 'Test 60');
test(divide(-2147483648, 3), -715827882, 'Test 61');
test(divide(-1024, 10), -102, 'Test 62');
test(divide(1, 999999999), 0, 'Test 63');
test(divide(-100, 7), -14, 'Test 64');
test(divide(1024, 2), 512, 'Test 65');
test(divide(1024, 1024), 1, 'Test 66');
test(divide(15, 5), 3, 'Test 67');
test(divide(1025, 3), 341, 'Test 68');
test(divide(-123456789, -987654321), 0, 'Test 69');
test(divide(-1025, -3), 341, 'Test 70');
test(divide(-1, 999999999), 0, 'Test 71');
test(divide(1000000000, -1000000000), -1, 'Test 72');
test(divide(-1000000000, -25), 40000000, 'Test 73');
test(divide(2147483647, -2147483648), 0, 'Test 74');
test(divide(150, 3), 50, 'Test 75');
test(divide(100, 1), 100, 'Test 76');
test(divide(1023, -10), -102, 'Test 77');
test(divide(-1000000000, 25), -40000000, 'Test 78');
test(divide(-1023, -2), 511, 'Test 79');
test(divide(-1, 999999998), 0, 'Test 80');
test(divide(-999999999, 999999999), -1, 'Test 81');
test(divide(-1, 2147483647), 0, 'Test 82');
test(divide(15, 3), 5, 'Test 83');
test(divide(1000000000, 1000000000), 1, 'Test 84');
test(divide(1000000000, -25), -40000000, 'Test 85');
test(divide(-1023, -10), 102, 'Test 86');
test(divide(-2147483648, -2147483648), 1, 'Test 87');
test(divide(2147483647, 2147483647), 1, 'Test 88');
test(divide(100, -1), -100, 'Test 89');
test(divide(2147483647, 3), 715827882, 'Test 90');
test(divide(-2147483648, -3), 715827882, 'Test 91');
test(divide(999999999, 999999999), 1, 'Test 92');
test(divide(15, -3), -5, 'Test 93');
test(divide(-2147483648, 2147483647), -1, 'Test 94');
test(divide(1000000000, -3), -333333333, 'Test 95');
test(divide(-1000000000, -500000000), 2, 'Test 96');
test(divide(1, 100), 0, 'Test 97');
test(divide(-15, 6), -2, 'Test 98');
test(divide(-999999999, 1), -999999999, 'Test 99');
test(divide(1023, 2), 511, 'Test 100');
test(divide(-100, -7), 14, 'Test 101');
test(divide(5, 2), 2, 'Test 102');
test(divide(10, -3), -3, 'Test 103');
test(divide(-50, -10), 5, 'Test 104');
test(divide(100, 10), 10, 'Test 105');
test(divide(-1000, 5), -200, 'Test 106');
test(divide(-1000, -5), 200, 'Test 107');
test(divide(100, -2), -50, 'Test 108');
test(divide(56, 7), 8, 'Test 109');
test(divide(-50, 10), -5, 'Test 110');
test(divide(-50, 5), -10, 'Test 111');
test(divide(15, 2), 7, 'Test 112');
test(divide(-1, -2147483648), 0, 'Test 113');
test(divide(-10, 3), -3, 'Test 114');
test(divide(100, 33), 3, 'Test 115');
test(divide(150, 6), 25, 'Test 116');
test(divide(1, 2147483647), 0, 'Test 117');
test(divide(-100, -5), 20, 'Test 118');
test(divide(-7, -3), 2, 'Test 119');
test(divide(-100, 10), -10, 'Test 120');
test(divide(100, -10), -10, 'Test 121');
test(divide(-2147483647, 2), -1073741823, 'Test 122');
test(divide(-56, -7), 8, 'Test 123');
test(divide(100, 2), 50, 'Test 124');
test(divide(-100, -2), 50, 'Test 125');
test(divide(100, -5), -20, 'Test 126');
test(divide(100, 5), 20, 'Test 127');
test(divide(0, 5), 0, 'Test 128');
test(divide(-100, -10), 10, 'Test 129');
test(divide(-100, 2), -50, 'Test 130');
test(divide(-100, 5), -20, 'Test 131');
test(divide(0, -1), 0, 'Test 132');
test(divide(1000, 5), 200, 'Test 133');
test(divide(1000, -5), -200, 'Test 134');
test(divide(1000, 3), 333, 'Test 135');

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
