// Test: 2310. Sum Of Numbers With Units Digit K
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { minimumNumbers } = require("./solution");

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

console.log("\n2310. Sum Of Numbers With Units Digit K\n");

test(minimumNumbers(25, 5), 1, 'Test 1');
test(minimumNumbers(2023, 3), 1, 'Test 2');
test(minimumNumbers(37, 2), -1, 'Test 3');
test(minimumNumbers(100, 0), 1, 'Test 4');
test(minimumNumbers(58, 9), 2, 'Test 5');
test(minimumNumbers(99, 9), 1, 'Test 6');
test(minimumNumbers(15, 3), 5, 'Test 7');
test(minimumNumbers(27, 9), 3, 'Test 8');
test(minimumNumbers(888, 8), 1, 'Test 9');
test(minimumNumbers(0, 7), 0, 'Test 10');
test(minimumNumbers(100, 1), 10, 'Test 11');
test(minimumNumbers(88, 8), 1, 'Test 12');
test(minimumNumbers(20, 5), 2, 'Test 13');
test(minimumNumbers(45, 5), 1, 'Test 14');
test(minimumNumbers(1, 1), 1, 'Test 15');
test(minimumNumbers(999, 9), 1, 'Test 16');
test(minimumNumbers(100, 3), 10, 'Test 17');
test(minimumNumbers(9, 9), 1, 'Test 18');
test(minimumNumbers(10, 0), 1, 'Test 19');
test(minimumNumbers(100, 9), 10, 'Test 20');
test(minimumNumbers(666, 6), 1, 'Test 21');
test(minimumNumbers(345, 4), -1, 'Test 22');
test(minimumNumbers(1000, 5), 2, 'Test 23');
test(minimumNumbers(123, 3), 1, 'Test 24');
test(minimumNumbers(2997, 7), 1, 'Test 25');
test(minimumNumbers(2999, 9), 1, 'Test 26');
test(minimumNumbers(275, 5), 1, 'Test 27');
test(minimumNumbers(3000, 1), 10, 'Test 28');
test(minimumNumbers(222, 2), 1, 'Test 29');
test(minimumNumbers(210, 1), 10, 'Test 30');
test(minimumNumbers(256, 7), 8, 'Test 31');
test(minimumNumbers(1995, 5), 1, 'Test 32');
test(minimumNumbers(900, 0), 1, 'Test 33');
test(minimumNumbers(456, 4), 4, 'Test 34');
test(minimumNumbers(256, 8), 2, 'Test 35');
test(minimumNumbers(789, 9), 1, 'Test 36');
test(minimumNumbers(21, 1), 1, 'Test 37');
test(minimumNumbers(202, 2), 1, 'Test 38');
test(minimumNumbers(333, 3), 1, 'Test 39');
test(minimumNumbers(150, 5), 2, 'Test 40');
test(minimumNumbers(123, 8), -1, 'Test 41');
test(minimumNumbers(2500, 5), 2, 'Test 42');
test(minimumNumbers(400, 6), 5, 'Test 43');
test(minimumNumbers(7531, 3), 7, 'Test 44');
test(minimumNumbers(1234, 8), 3, 'Test 45');
test(minimumNumbers(777, 1), 7, 'Test 46');
test(minimumNumbers(234, 5), -1, 'Test 47');
test(minimumNumbers(3000, 9), 10, 'Test 48');
test(minimumNumbers(2345, 4), -1, 'Test 49');
test(minimumNumbers(678, 8), 1, 'Test 50');
test(minimumNumbers(999, 3), 3, 'Test 51');
test(minimumNumbers(145, 6), -1, 'Test 52');
test(minimumNumbers(56, 0), -1, 'Test 53');
test(minimumNumbers(777, 7), 1, 'Test 54');
test(minimumNumbers(2999, 3), 3, 'Test 55');
test(minimumNumbers(1200, 0), 1, 'Test 56');
test(minimumNumbers(567, 2), -1, 'Test 57');
test(minimumNumbers(444, 4), 1, 'Test 58');
test(minimumNumbers(54321, 1), 1, 'Test 59');
test(minimumNumbers(50, 5), 2, 'Test 60');
test(minimumNumbers(8642, 2), 1, 'Test 61');
test(minimumNumbers(999, 1), 9, 'Test 62');
test(minimumNumbers(256, 6), 1, 'Test 63');
test(minimumNumbers(189, 9), 1, 'Test 64');
test(minimumNumbers(555, 5), 1, 'Test 65');
test(minimumNumbers(111, 1), 1, 'Test 66');
test(minimumNumbers(450, 5), 2, 'Test 67');
test(minimumNumbers(13579, 9), 1, 'Test 68');
test(minimumNumbers(0, 0), 0, 'Test 69');
test(minimumNumbers(299, 9), 1, 'Test 70');
test(minimumNumbers(250, 7), 10, 'Test 71');
test(minimumNumbers(768, 4), 2, 'Test 72');
test(minimumNumbers(1985, 5), 1, 'Test 73');
test(minimumNumbers(1500, 0), 1, 'Test 74');
test(minimumNumbers(3000, 5), 2, 'Test 75');
test(minimumNumbers(2875, 7), 5, 'Test 76');
test(minimumNumbers(158, 8), 1, 'Test 77');
test(minimumNumbers(99, 2), -1, 'Test 78');
test(minimumNumbers(1234, 4), 1, 'Test 79');
test(minimumNumbers(234, 4), 1, 'Test 80');
test(minimumNumbers(111, 2), -1, 'Test 81');
test(minimumNumbers(101, 1), 1, 'Test 82');
test(minimumNumbers(3000, 0), 1, 'Test 83');
test(minimumNumbers(143, 3), 1, 'Test 84');
test(minimumNumbers(800, 2), 5, 'Test 85');
test(minimumNumbers(1024, 3), 8, 'Test 86');
test(minimumNumbers(303, 3), 1, 'Test 87');
test(minimumNumbers(888, 2), 4, 'Test 88');
test(minimumNumbers(500, 5), 2, 'Test 89');
test(minimumNumbers(123, 4), -1, 'Test 90');
test(minimumNumbers(1234, 7), 2, 'Test 91');
test(minimumNumbers(1000, 1), 10, 'Test 92');
test(minimumNumbers(75, 5), 1, 'Test 93');
test(minimumNumbers(1999, 9), 1, 'Test 94');
test(minimumNumbers(243, 7), 9, 'Test 95');
test(minimumNumbers(1998, 8), 1, 'Test 96');
test(minimumNumbers(246, 7), 8, 'Test 97');
test(minimumNumbers(135, 5), 1, 'Test 98');
test(minimumNumbers(676, 6), 1, 'Test 99');
test(minimumNumbers(123, 1), 3, 'Test 100');
test(minimumNumbers(9999, 9), 1, 'Test 101');
test(minimumNumbers(150, 1), 10, 'Test 102');
test(minimumNumbers(2500, 0), 1, 'Test 103');
test(minimumNumbers(2345, 9), 5, 'Test 104');
test(minimumNumbers(5, 0), -1, 'Test 105');
test(minimumNumbers(999, 5), -1, 'Test 106');
test(minimumNumbers(250, 5), 2, 'Test 107');
test(minimumNumbers(147, 6), -1, 'Test 108');
test(minimumNumbers(199, 9), 1, 'Test 109');
test(minimumNumbers(1000, 0), 1, 'Test 110');
test(minimumNumbers(2468, 8), 1, 'Test 111');
test(minimumNumbers(2024, 4), 1, 'Test 112');
test(minimumNumbers(234, 3), 8, 'Test 113');
test(minimumNumbers(1111, 1), 1, 'Test 114');

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
