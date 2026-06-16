// Test: 371. Sum Of Two Integers
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { getSum } = require("./solution");

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

console.log("\n371. Sum Of Two Integers\n");

test(getSum(1000, -1000), 0, 'Test 1');
test(getSum(-2, -3), -5, 'Test 2');
test(getSum(0, 5), 5, 'Test 3');
test(getSum(500, 500), 1000, 'Test 4');
test(getSum(-5, -5), -10, 'Test 5');
test(getSum(1, 2), 3, 'Test 6');
test(getSum(999, 1), 1000, 'Test 7');
test(getSum(-5, 5), 0, 'Test 8');
test(getSum(-1000, 1000), 0, 'Test 9');
test(getSum(-500, 500), 0, 'Test 10');
test(getSum(-500, -500), -1000, 'Test 11');
test(getSum(0, 0), 0, 'Test 12');
test(getSum(-1, 1), 0, 'Test 13');
test(getSum(2, 3), 5, 'Test 14');
test(getSum(-999, -1), -1000, 'Test 15');
test(getSum(-7, -13), -20, 'Test 16');
test(getSum(-999, 1), -998, 'Test 17');
test(getSum(-128, 256), 128, 'Test 18');
test(getSum(-999, 999), 0, 'Test 19');
test(getSum(1234, -5678), -4444, 'Test 20');
test(getSum(7, 13), 20, 'Test 21');
test(getSum(7, -7), 0, 'Test 22');
test(getSum(256, 255), 511, 'Test 23');
test(getSum(0, -1), -1, 'Test 24');
test(getSum(-223, -777), -1000, 'Test 25');
test(getSum(-1000, -999), -1999, 'Test 26');
test(getSum(-1234, 5678), 4444, 'Test 27');
test(getSum(-123, 456), 333, 'Test 28');
test(getSum(1, 0), 1, 'Test 29');
test(getSum(7, -3), 4, 'Test 30');
test(getSum(678, 322), 1000, 'Test 31');
test(getSum(500, 501), 1001, 'Test 32');
test(getSum(-789, 321), -468, 'Test 33');
test(getSum(1, 999), 1000, 'Test 34');
test(getSum(456, 123), 579, 'Test 35');
test(getSum(1, -1), 0, 'Test 36');
test(getSum(7, -13), -6, 'Test 37');
test(getSum(512, -512), 0, 'Test 38');
test(getSum(-314, 157), -157, 'Test 39');
test(getSum(499, 500), 999, 'Test 40');
test(getSum(256, 256), 512, 'Test 41');
test(getSum(314, -157), 157, 'Test 42');
test(getSum(223, -777), -554, 'Test 43');
test(getSum(1234, -1234), 0, 'Test 44');
test(getSum(-1, -999), -1000, 'Test 45');
test(getSum(456, -789), -333, 'Test 46');
test(getSum(456, -234), 222, 'Test 47');
test(getSum(-777, -223), -1000, 'Test 48');
test(getSum(-678, -322), -1000, 'Test 49');
test(getSum(789, -321), 468, 'Test 50');
test(getSum(-333, -667), -1000, 'Test 51');
test(getSum(0, -1000), -1000, 'Test 52');
test(getSum(-7, 3), -4, 'Test 53');
test(getSum(-456, -123), -579, 'Test 54');
test(getSum(-500, 250), -250, 'Test 55');
test(getSum(345, 678), 1023, 'Test 56');
test(getSum(1000, 0), 1000, 'Test 57');
test(getSum(-321, 654), 333, 'Test 58');
test(getSum(333, 667), 1000, 'Test 59');
test(getSum(0, 1000), 1000, 'Test 60');
test(getSum(-256, -256), -512, 'Test 61');
test(getSum(-777, 223), -554, 'Test 62');
test(getSum(-1000, 0), -1000, 'Test 63');
test(getSum(-123, -456), -579, 'Test 64');
test(getSum(-456, 123), -333, 'Test 65');
test(getSum(777, 223), 1000, 'Test 66');
test(getSum(-789, 456), -333, 'Test 67');
test(getSum(63, 127), 190, 'Test 68');
test(getSum(-500, -499), -999, 'Test 69');
test(getSum(100, -100), 0, 'Test 70');
test(getSum(-1, 0), -1, 'Test 71');
test(getSum(999, -999), 0, 'Test 72');
test(getSum(1000, -999), 1, 'Test 73');
test(getSum(123, 456), 579, 'Test 74');
test(getSum(1000, 999), 1999, 'Test 75');
test(getSum(123, -456), -333, 'Test 76');
test(getSum(-256, -255), -511, 'Test 77');
test(getSum(500, -250), 250, 'Test 78');
test(getSum(1024, -1024), 0, 'Test 79');
test(getSum(-7, 13), 6, 'Test 80');

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
