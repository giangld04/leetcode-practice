// Test: 2829. Determine The Minimum Sum Of A K Avoiding Array
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { minimumSum } = require("./solution");

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

console.log("\n2829. Determine The Minimum Sum Of A K Avoiding Array\n");

test(minimumSum(4, 8), 10, 'Test 1');
test(minimumSum(3, 5), 8, 'Test 2');
test(minimumSum(10, 15), 76, 'Test 3');
test(minimumSum(4, 7), 13, 'Test 4');
test(minimumSum(7, 10), 36, 'Test 5');
test(minimumSum(2, 6), 3, 'Test 6');
test(minimumSum(10, 10), 75, 'Test 7');
test(minimumSum(5, 4), 18, 'Test 8');
test(minimumSum(15, 8), 153, 'Test 9');
test(minimumSum(10, 18), 63, 'Test 10');
test(minimumSum(8, 16), 36, 'Test 11');
test(minimumSum(35, 35), 936, 'Test 12');
test(minimumSum(20, 30), 280, 'Test 13');
test(minimumSum(15, 25), 156, 'Test 14');
test(minimumSum(15, 3), 134, 'Test 15');
test(minimumSum(30, 31), 690, 'Test 16');
test(minimumSum(50, 1), 1275, 'Test 17');
test(minimumSum(9, 11), 65, 'Test 18');
test(minimumSum(30, 15), 626, 'Test 19');
test(minimumSum(45, 30), 1455, 'Test 20');
test(minimumSum(10, 9), 79, 'Test 21');
test(minimumSum(12, 8), 102, 'Test 22');
test(minimumSum(45, 40), 1510, 'Test 23');
test(minimumSum(6, 11), 26, 'Test 24');
test(minimumSum(40, 20), 1090, 'Test 25');
test(minimumSum(12, 13), 114, 'Test 26');
test(minimumSum(25, 16), 444, 'Test 27');
test(minimumSum(5, 20), 15, 'Test 28');
test(minimumSum(28, 18), 558, 'Test 29');
test(minimumSum(25, 20), 460, 'Test 30');
test(minimumSum(45, 11), 1235, 'Test 31');
test(minimumSum(48, 49), 1752, 'Test 32');
test(minimumSum(15, 12), 165, 'Test 33');
test(minimumSum(49, 25), 1669, 'Test 34');
test(minimumSum(15, 30), 120, 'Test 35');
test(minimumSum(9, 12), 60, 'Test 36');
test(minimumSum(9, 14), 57, 'Test 37');
test(minimumSum(30, 25), 681, 'Test 38');
test(minimumSum(10, 5), 71, 'Test 39');
test(minimumSum(18, 18), 243, 'Test 40');
test(minimumSum(17, 22), 213, 'Test 41');
test(minimumSum(5, 10), 15, 'Test 42');
test(minimumSum(49, 30), 1701, 'Test 43');
test(minimumSum(18, 7), 216, 'Test 44');
test(minimumSum(8, 9), 52, 'Test 45');
test(minimumSum(30, 10), 565, 'Test 46');
test(minimumSum(20, 12), 280, 'Test 47');
test(minimumSum(30, 35), 686, 'Test 48');
test(minimumSum(25, 30), 465, 'Test 49');
test(minimumSum(35, 25), 906, 'Test 50');
test(minimumSum(40, 45), 1216, 'Test 51');
test(minimumSum(8, 12), 46, 'Test 52');
test(minimumSum(15, 5), 146, 'Test 53');
test(minimumSum(20, 15), 301, 'Test 54');
test(minimumSum(50, 51), 1900, 'Test 55');
test(minimumSum(20, 8), 258, 'Test 56');
test(minimumSum(35, 20), 855, 'Test 57');
test(minimumSum(30, 40), 655, 'Test 58');
test(minimumSum(50, 50), 1875, 'Test 59');
test(minimumSum(22, 27), 370, 'Test 60');
test(minimumSum(45, 45), 1541, 'Test 61');
test(minimumSum(28, 28), 588, 'Test 62');
test(minimumSum(15, 20), 165, 'Test 63');
test(minimumSum(45, 47), 1541, 'Test 64');
test(minimumSum(14, 18), 145, 'Test 65');
test(minimumSum(12, 18), 102, 'Test 66');
test(minimumSum(8, 8), 48, 'Test 67');
test(minimumSum(40, 35), 1211, 'Test 68');
test(minimumSum(40, 30), 1170, 'Test 69');
test(minimumSum(6, 35), 21, 'Test 70');
test(minimumSum(14, 9), 145, 'Test 71');
test(minimumSum(20, 25), 306, 'Test 72');
test(minimumSum(40, 10), 960, 'Test 73');
test(minimumSum(25, 50), 325, 'Test 74');
test(minimumSum(50, 40), 1845, 'Test 75');
test(minimumSum(45, 20), 1350, 'Test 76');
test(minimumSum(25, 100), 325, 'Test 77');

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
