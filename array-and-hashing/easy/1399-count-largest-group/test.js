// Test: 1399. Count Largest Group
// 45 test cases from LeetCodeDataset
// Run: node test.js

const { countLargestGroup } = require("./solution");

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

console.log("\n1399. Count Largest Group\n");

test(countLargestGroup(200), 2, 'Test 1');
test(countLargestGroup(10000), 1, 'Test 2');
test(countLargestGroup(9), 9, 'Test 3');
test(countLargestGroup(104), 1, 'Test 4');
test(countLargestGroup(9999), 1, 'Test 5');
test(countLargestGroup(2), 2, 'Test 6');
test(countLargestGroup(100), 1, 'Test 7');
test(countLargestGroup(1000), 2, 'Test 8');
test(countLargestGroup(13), 4, 'Test 9');
test(countLargestGroup(25), 6, 'Test 10');
test(countLargestGroup(4000), 1, 'Test 11');
test(countLargestGroup(2345), 1, 'Test 12');
test(countLargestGroup(1111), 1, 'Test 13');
test(countLargestGroup(7000), 2, 'Test 14');
test(countLargestGroup(4096), 1, 'Test 15');
test(countLargestGroup(7500), 1, 'Test 16');
test(countLargestGroup(4567), 1, 'Test 17');
test(countLargestGroup(2000), 1, 'Test 18');
test(countLargestGroup(111), 1, 'Test 19');
test(countLargestGroup(8888), 1, 'Test 20');
test(countLargestGroup(300), 1, 'Test 21');
test(countLargestGroup(333), 2, 'Test 22');
test(countLargestGroup(3000), 2, 'Test 23');
test(countLargestGroup(99), 1, 'Test 24');
test(countLargestGroup(888), 1, 'Test 25');
test(countLargestGroup(1024), 2, 'Test 26');
test(countLargestGroup(8192), 1, 'Test 27');
test(countLargestGroup(999), 2, 'Test 28');
test(countLargestGroup(5555), 1, 'Test 29');
test(countLargestGroup(8000), 1, 'Test 30');
test(countLargestGroup(5000), 2, 'Test 31');
test(countLargestGroup(6543), 1, 'Test 32');
test(countLargestGroup(7865), 1, 'Test 33');
test(countLargestGroup(7777), 1, 'Test 34');
test(countLargestGroup(2222), 1, 'Test 35');
test(countLargestGroup(2500), 1, 'Test 36');
test(countLargestGroup(9000), 2, 'Test 37');
test(countLargestGroup(4999), 2, 'Test 38');
test(countLargestGroup(3999), 1, 'Test 39');
test(countLargestGroup(1234), 1, 'Test 40');
test(countLargestGroup(6000), 1, 'Test 41');
test(countLargestGroup(1), 1, 'Test 42');
test(countLargestGroup(500), 1, 'Test 43');
test(countLargestGroup(10), 1, 'Test 44');
test(countLargestGroup(1500), 1, 'Test 45');

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
