// Test: 2525. Categorize Box According To Criteria
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { categorizeBox } = require("./solution");

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

console.log("\n2525. Categorize Box According To Criteria\n");

test(categorizeBox(100000, 100000, 100000, 1000), Both, 'Test 1');
test(categorizeBox(10000, 10, 10, 1), Bulky, 'Test 2');
test(categorizeBox(5000, 2000, 1000, 50), Bulky, 'Test 3');
test(categorizeBox(5000, 2000, 1000, 200), Both, 'Test 4');
test(categorizeBox(10000, 10000, 10000, 1000), Both, 'Test 5');
test(categorizeBox(200, 50, 800, 50), Neither, 'Test 6');
test(categorizeBox(10000, 10, 10, 10), Bulky, 'Test 7');
test(categorizeBox(9999, 9999, 9999, 100), Both, 'Test 8');
test(categorizeBox(1000, 35, 700, 300), Heavy, 'Test 9');
test(categorizeBox(10, 10, 10, 100), Heavy, 'Test 10');
test(categorizeBox(10000, 10000, 1, 100), Both, 'Test 11');
test(categorizeBox(5000, 5000, 5000, 1), Bulky, 'Test 12');
test(categorizeBox(10000, 1, 1, 100), Both, 'Test 13');
test(categorizeBox(1000, 1000, 1000, 1000), Both, 'Test 14');
test(categorizeBox(1, 1, 1, 1), Neither, 'Test 15');
test(categorizeBox(10000, 10000, 10000, 10000), Both, 'Test 16');
test(categorizeBox(9999, 9999, 9999, 99), Bulky, 'Test 17');
test(categorizeBox(1000, 1000, 10, 1000), Heavy, 'Test 18');
test(categorizeBox(10000, 10000, 10000, 100), Both, 'Test 19');
test(categorizeBox(5000, 2000, 1, 99), Neither, 'Test 20');
test(categorizeBox(10000, 10, 10, 5), Bulky, 'Test 21');
test(categorizeBox(1, 10000, 1, 1), Bulky, 'Test 22');
test(categorizeBox(1000, 1000, 1000, 999), Both, 'Test 23');
test(categorizeBox(1, 100000, 1, 1000), Both, 'Test 24');
test(categorizeBox(10, 2, 50000, 500), Both, 'Test 25');
test(categorizeBox(10, 1000, 1000, 100), Heavy, 'Test 26');
test(categorizeBox(1000, 10000, 10000, 1000), Both, 'Test 27');
test(categorizeBox(1000, 10000, 10000, 1000000), Both, 'Test 28');
test(categorizeBox(10000, 10000, 10000, 1), Bulky, 'Test 29');
test(categorizeBox(1, 1, 100000, 100), Both, 'Test 30');
test(categorizeBox(10000, 10000, 10000, 99), Bulky, 'Test 31');
test(categorizeBox(100000, 10, 1, 100), Both, 'Test 32');
test(categorizeBox(10000, 10000, 1000, 100), Both, 'Test 33');
test(categorizeBox(1, 100000, 10, 100), Both, 'Test 34');
test(categorizeBox(1000, 1000, 1000, 10000000), Both, 'Test 35');
test(categorizeBox(10000, 10000, 1, 999), Both, 'Test 36');
test(categorizeBox(10000, 9999, 10000, 100), Both, 'Test 37');
test(categorizeBox(10000, 10000, 10, 1000), Both, 'Test 38');
test(categorizeBox(1, 1, 100000, 1000), Both, 'Test 39');
test(categorizeBox(1, 10000, 1, 100), Both, 'Test 40');
test(categorizeBox(10000, 10000, 1000, 1000000), Both, 'Test 41');
test(categorizeBox(500, 500, 500, 500), Heavy, 'Test 42');
test(categorizeBox(9999, 9999, 9999, 101), Both, 'Test 43');
test(categorizeBox(1000, 1000, 1000, 101), Both, 'Test 44');
test(categorizeBox(1000, 1000, 1000, 100), Both, 'Test 45');
test(categorizeBox(9999, 9999, 10, 99), Neither, 'Test 46');
test(categorizeBox(1000, 10, 1000, 100), Heavy, 'Test 47');
test(categorizeBox(1, 10000, 10000, 1), Bulky, 'Test 48');
test(categorizeBox(2, 50000, 10, 500), Both, 'Test 49');
test(categorizeBox(103, 103, 103, 99), Neither, 'Test 50');
test(categorizeBox(1, 1, 10000, 100), Both, 'Test 51');
test(categorizeBox(10000, 10000, 1, 1), Bulky, 'Test 52');
test(categorizeBox(1, 10000, 10000, 1000), Both, 'Test 53');
test(categorizeBox(10000, 10000, 1000, 1000), Both, 'Test 54');
test(categorizeBox(1, 1, 1000000000, 1), Bulky, 'Test 55');
test(categorizeBox(100000, 1, 1, 1), Bulky, 'Test 56');
test(categorizeBox(10, 10000, 10000, 1000), Both, 'Test 57');
test(categorizeBox(1000, 1000, 1, 99), Neither, 'Test 58');
test(categorizeBox(500, 2000, 1000, 300), Both, 'Test 59');
test(categorizeBox(100, 100, 100, 1000000), Heavy, 'Test 60');
test(categorizeBox(1, 10000, 10000, 100), Both, 'Test 61');
test(categorizeBox(10000, 1, 10000, 1), Bulky, 'Test 62');
test(categorizeBox(9999, 10000, 10000, 99), Bulky, 'Test 63');
test(categorizeBox(10000, 1, 1, 1), Bulky, 'Test 64');
test(categorizeBox(1000, 1000, 1000, 100000), Both, 'Test 65');
test(categorizeBox(10000, 10000, 9999, 100), Both, 'Test 66');
test(categorizeBox(1000, 1000, 1000, 1000000), Both, 'Test 67');
test(categorizeBox(1, 1000, 1000, 99), Neither, 'Test 68');
test(categorizeBox(10000, 1, 10000, 100), Both, 'Test 69');
test(categorizeBox(1000, 1000, 1000, 10000), Both, 'Test 70');
test(categorizeBox(500, 500, 500, 150), Heavy, 'Test 71');
test(categorizeBox(9999, 9999, 10000, 99), Bulky, 'Test 72');
test(categorizeBox(100000, 1, 1, 100), Both, 'Test 73');
test(categorizeBox(1000, 1000, 1000, 99), Bulky, 'Test 74');
test(categorizeBox(5000, 2000, 1000, 99), Bulky, 'Test 75');
test(categorizeBox(9999, 10000, 10000, 100), Both, 'Test 76');
test(categorizeBox(100, 100000, 1, 1), Bulky, 'Test 77');
test(categorizeBox(50000, 2, 10, 500), Both, 'Test 78');
test(categorizeBox(1000, 1000, 10, 100), Heavy, 'Test 79');
test(categorizeBox(1, 1, 1, 99), Neither, 'Test 80');
test(categorizeBox(10000, 1, 1, 1000), Both, 'Test 81');
test(categorizeBox(1, 10000, 1, 1000), Both, 'Test 82');
test(categorizeBox(10000, 1, 1, 99), Bulky, 'Test 83');
test(categorizeBox(1, 1, 10000, 1000), Both, 'Test 84');
test(categorizeBox(10000, 100, 10, 100), Both, 'Test 85');
test(categorizeBox(50000, 1, 1, 1), Bulky, 'Test 86');
test(categorizeBox(10, 10, 10, 1000), Heavy, 'Test 87');
test(categorizeBox(5000, 5000, 5000, 50), Bulky, 'Test 88');
test(categorizeBox(1, 10000, 1, 99), Bulky, 'Test 89');
test(categorizeBox(1, 1, 10000, 1), Bulky, 'Test 90');
test(categorizeBox(10000, 1000, 10000, 1000000), Both, 'Test 91');
test(categorizeBox(100, 100, 100, 100), Heavy, 'Test 92');
test(categorizeBox(5000, 5000, 5000, 100), Both, 'Test 93');
test(categorizeBox(1, 100000, 1, 100), Both, 'Test 94');
test(categorizeBox(1, 10000, 10000, 99), Bulky, 'Test 95');
test(categorizeBox(100000, 1, 1, 1000), Both, 'Test 96');
test(categorizeBox(10000, 10, 10, 50), Bulky, 'Test 97');
test(categorizeBox(9999, 9999, 9999, 9999), Both, 'Test 98');
test(categorizeBox(1000, 1, 1000, 99), Neither, 'Test 99');
test(categorizeBox(1, 1, 1, 1000), Heavy, 'Test 100');
test(categorizeBox(10000, 9999, 9999, 99), Bulky, 'Test 101');
test(categorizeBox(1, 1, 100000, 1), Bulky, 'Test 102');
test(categorizeBox(10000, 1000, 10000, 1000), Both, 'Test 103');
test(categorizeBox(10, 1, 100000, 100), Both, 'Test 104');
test(categorizeBox(1, 100000, 1, 1), Bulky, 'Test 105');
test(categorizeBox(500, 500, 500, 100), Heavy, 'Test 106');
test(categorizeBox(9999, 9999, 1000, 999), Both, 'Test 107');
test(categorizeBox(1, 1, 10000, 99), Bulky, 'Test 108');
test(categorizeBox(10000, 10000, 10000, 101), Both, 'Test 109');
test(categorizeBox(1, 1, 1, 100), Heavy, 'Test 110');
test(categorizeBox(9999, 9999, 1, 100), Heavy, 'Test 111');
test(categorizeBox(9999, 10000, 9999, 99), Bulky, 'Test 112');
test(categorizeBox(10000, 10, 10000, 1000), Both, 'Test 113');
test(categorizeBox(999, 999, 999, 999), Heavy, 'Test 114');

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
