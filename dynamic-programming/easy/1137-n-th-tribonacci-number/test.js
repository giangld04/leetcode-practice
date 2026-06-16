// Test: 1137. N Th Tribonacci Number
// 18 test cases from LeetCodeDataset
// Run: node test.js

const { tribonacci } = require("./solution");

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

console.log("\n1137. N Th Tribonacci Number\n");

test(tribonacci(0), 0, 'Test 1');
test(tribonacci(3), 2, 'Test 2');
test(tribonacci(4), 4, 'Test 3');
test(tribonacci(37), 2082876103, 'Test 4');
test(tribonacci(2), 1, 'Test 5');
test(tribonacci(1), 1, 'Test 6');
test(tribonacci(25), 1389537, 'Test 7');
test(tribonacci(30), 29249425, 'Test 8');
test(tribonacci(15), 3136, 'Test 9');
test(tribonacci(22), 223317, 'Test 10');
test(tribonacci(12), 504, 'Test 11');
test(tribonacci(35), 615693474, 'Test 12');
test(tribonacci(26), 2555757, 'Test 13');
test(tribonacci(27), 4700770, 'Test 14');
test(tribonacci(18), 19513, 'Test 15');
test(tribonacci(20), 66012, 'Test 16');
test(tribonacci(10), 149, 'Test 17');
test(tribonacci(5), 7, 'Test 18');

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
