// Test: 165. Compare Version Numbers
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { compareVersion } = require("./solution");

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

console.log("\n165. Compare Version Numbers\n");

test(compareVersion("0", "0.0.0"), 0, 'Test 1');
test(compareVersion("1.1.1.1", "1.1.1.1"), 0, 'Test 2');
test(compareVersion("1.2.3.4", "1.2.3"), 1, 'Test 3');
test(compareVersion("1.1.1.1", "1.1.1"), 1, 'Test 4');
test(compareVersion("1.0.0", "1"), 0, 'Test 5');
test(compareVersion("5.0000", "5.00000"), 0, 'Test 6');
test(compareVersion("0.0.1", "0.0.2"), -1, 'Test 7');
test(compareVersion("5.5.5.5", "5.5.5"), 1, 'Test 8');
test(compareVersion("5.12", "5.10.0"), 1, 'Test 9');
test(compareVersion("1.2.3", "1.2.3"), 0, 'Test 10');
test(compareVersion("1.2", "1.10"), -1, 'Test 11');
test(compareVersion("1.0.0.1", "1"), 1, 'Test 12');
test(compareVersion("2.0", "1.9"), 1, 'Test 13');
test(compareVersion("1.01", "1.001"), 0, 'Test 14');
test(compareVersion("0.1", "1.1"), -1, 'Test 15');
test(compareVersion("1.10.0", "1.1"), 1, 'Test 16');
test(compareVersion("1.0", "1.0.0.0"), 0, 'Test 17');
test(compareVersion("0.1", "0.0.1"), 1, 'Test 18');
test(compareVersion("1.1.1", "1.1.1"), 0, 'Test 19');
test(compareVersion("10.0.0", "10"), 0, 'Test 20');
test(compareVersion("10.5.2", "10.5.2"), 0, 'Test 21');
test(compareVersion("1.0.0.0.0.0.0", "1.0"), 0, 'Test 22');
test(compareVersion("1", "1.0"), 0, 'Test 23');
test(compareVersion("1.0.1", "1"), 1, 'Test 24');
test(compareVersion("7.5.2.4", "7.5.3"), -1, 'Test 25');
test(compareVersion("1.2.3", "1.2.4"), -1, 'Test 26');
test(compareVersion("1.2.3.4.5.6.7.8.9", "1.2.3.4.5.6.7.8.9.0.0.0"), 0, 'Test 27');
test(compareVersion("123456789.987654321", "123456789.987654321.0"), 0, 'Test 28');
test(compareVersion("1.0.0.0.0.0.0.0.0.0", "1.0.0.0.0.0.0.0.0.0"), 0, 'Test 29');
test(compareVersion("1.2.3.4.5", "1.2.3.4.6"), -1, 'Test 30');
test(compareVersion("1.23.456.7890", "1.23.456.7890.0"), 0, 'Test 31');
test(compareVersion("1.0.0.1", "1.0"), 1, 'Test 32');
test(compareVersion("001.002.003", "1.2.3"), 0, 'Test 33');
test(compareVersion("99999.99999.99999.99999", "100000.0.0.0"), -1, 'Test 34');
test(compareVersion("1.001.0001.00001", "1.1.1.1"), 0, 'Test 35');
test(compareVersion("1000000000", "1"), 1, 'Test 36');
test(compareVersion("1.2.3", "1.2.3.0"), 0, 'Test 37');
test(compareVersion("1.999999999.999999999", "2"), -1, 'Test 38');
test(compareVersion("1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0", "1"), 0, 'Test 39');
test(compareVersion("0.0.0.0.0.0.0.0", "0"), 0, 'Test 40');
test(compareVersion("1.001.00001.000000001", "1.1.1.1"), 0, 'Test 41');
test(compareVersion("3.14159.26535", "3.14159.26535.0"), 0, 'Test 42');
test(compareVersion("1.0.0", "1.0"), 0, 'Test 43');
test(compareVersion("1.1.1.1.1", "1.1.1.1.2"), -1, 'Test 44');
test(compareVersion("1.2", "1.02"), 0, 'Test 45');
test(compareVersion("1.000001", "1.00001"), 0, 'Test 46');
test(compareVersion("1.0.10.0.0", "1.0.10"), 0, 'Test 47');
test(compareVersion("1.2.3", "1.2.0.3"), 1, 'Test 48');
test(compareVersion("999999999", "1000000000"), -1, 'Test 49');
test(compareVersion("99999.99999.99999", "100000"), -1, 'Test 50');
test(compareVersion("1.000000000.000000000", "1.0"), 0, 'Test 51');
test(compareVersion("1.0.10", "1.0.1"), 1, 'Test 52');
test(compareVersion("1000.1000.1000", "1000.1000"), 1, 'Test 53');
test(compareVersion("100000.99999.88888", "100000.99999.88889"), -1, 'Test 54');
test(compareVersion("0.1.2.3.4.5.6.7.8.9", "0.1.2.3.4.5.6.7.8.10"), -1, 'Test 55');
test(compareVersion("1.010.0010", "1.10.10"), 0, 'Test 56');
test(compareVersion("1.2.3.4.5.6.7.8.9.10", "1.2.3.4.5.6.7.8.9"), 1, 'Test 57');
test(compareVersion("1.2.3.4.5.6.7.8.9", "1.2.3.4.5.6.7.8.9"), 0, 'Test 58');
test(compareVersion("1.1.1.1.1.1.1.1.1.1", "1.1.1.1.1.1.1.1.1.1"), 0, 'Test 59');
test(compareVersion("1.0.0.0.0.0.0.0.0.0", "1"), 0, 'Test 60');
test(compareVersion("1.0.1", "1.1.0"), -1, 'Test 61');
test(compareVersion("1.010.001", "1.10.1"), 0, 'Test 62');
test(compareVersion("2.0.0.0", "1.9.9.9"), 1, 'Test 63');
test(compareVersion("1.2.3.4.5.6", "1.2.3.4.5.6.0"), 0, 'Test 64');
test(compareVersion("5.5.5", "5.05.005"), 0, 'Test 65');
test(compareVersion("0.0.0.0.0.1", "0.0.0.0.0.0"), 1, 'Test 66');
test(compareVersion("1.1.1.1.1.1.1.1.1.1", "1.1.1.1.1.1.1.1.1.1.0"), 0, 'Test 67');
test(compareVersion("1.2.3.4.5", "1.2.3.4.5.6"), -1, 'Test 68');
test(compareVersion("2.0", "2.0.0.0.0.0"), 0, 'Test 69');
test(compareVersion("9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9", "9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.0"), 0, 'Test 70');
test(compareVersion("2.5.0.0.0", "2.5"), 0, 'Test 71');
test(compareVersion("1.0.0", "1.0.0.0"), 0, 'Test 72');
test(compareVersion("1.2.3.4.5.6.7.8.9.10", "1.2.3.4.5.6.7.8.9.9"), 1, 'Test 73');
test(compareVersion("0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0", "0"), 0, 'Test 74');
test(compareVersion("0.0.0.0.0", "0"), 0, 'Test 75');
test(compareVersion("1.2.3.4.5.6.7.8.9", "1.2.3.4.5.6.7.8.9.0"), 0, 'Test 76');
test(compareVersion("2.0.0", "2"), 0, 'Test 77');
test(compareVersion("1.2.3.4.5.6.7.8.9", "1.2.3.4.5.6.7.8.10"), -1, 'Test 78');
test(compareVersion("1.2.3.4", "1.2.3.4.0.0"), 0, 'Test 79');
test(compareVersion("10.0.0.0", "10"), 0, 'Test 80');
test(compareVersion("9.8.7.6.5.4.3.2.1", "9.8.7.6.5.4.3.2.0"), 1, 'Test 81');
test(compareVersion("1.0.0", "1.0.0.0.0.0"), 0, 'Test 82');
test(compareVersion("1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0", "1"), 0, 'Test 83');
test(compareVersion("1.2.3.4.5.6.7.8.9.10", "1.2.3.4.5.6.7.8.9.10.0.0"), 0, 'Test 84');
test(compareVersion("1.10.100.1000", "1.10.100.1000.0"), 0, 'Test 85');
test(compareVersion("1.001.002.003", "1.1.2.3"), 0, 'Test 86');
test(compareVersion("1.0.0.0.0.0.0.0.0.0.0.0", "1"), 0, 'Test 87');
test(compareVersion("1.2.3.4.5.6.7.8.9.10.11", "1.2.3.4.5.6.7.8.9.10"), 1, 'Test 88');
test(compareVersion("1.0.0.0.0.0.0", "1.0.0.0.0"), 0, 'Test 89');
test(compareVersion("1.2.3.0.0.0.0", "1.2.3"), 0, 'Test 90');
test(compareVersion("1.0.0.0.1", "1"), 1, 'Test 91');
test(compareVersion("1.2.3.4.5", "1.2.3.4.5.0.0"), 0, 'Test 92');
test(compareVersion("1.1.1.1.1.1.1.1.1.1", "1.1.1.1.1.1.1.1.1.2"), -1, 'Test 93');
test(compareVersion("1.2.0.0.0", "1.2"), 0, 'Test 94');
test(compareVersion("1.2.3.4.5", "1.2.3.4"), 1, 'Test 95');
test(compareVersion("1.2.3.4.5.6.7.8.9.10", "1.2.3.4.5.6.7.8.9.11"), -1, 'Test 96');
test(compareVersion("1.000000001", "1.1"), 0, 'Test 97');
test(compareVersion("1.200.300.400", "1.200.300.400.000.000"), 0, 'Test 98');
test(compareVersion("9.9.9.9", "9.9.9.9.0"), 0, 'Test 99');
test(compareVersion("2.3.4.5.6", "2.3.4.5.0"), 1, 'Test 100');
test(compareVersion("1.002.003", "1.2.3"), 0, 'Test 101');
test(compareVersion("1.2.3.4.5.6.7.8.9.0", "1.2.3.4.5.6.7.8.9"), 0, 'Test 102');
test(compareVersion("1.20.3.4", "1.20.3.5"), -1, 'Test 103');
test(compareVersion("1.0.0.0.0.0.0.0.0", "1.0.0"), 0, 'Test 104');
test(compareVersion("1.2.3.4.5.6.7.8.9.10.11.12.13.14.15", "1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.0"), 0, 'Test 105');
test(compareVersion("0.0.0.0.0.0.0.0.0.0", "0"), 0, 'Test 106');
test(compareVersion("1.100.100", "1.99.99"), 1, 'Test 107');
test(compareVersion("1.000000000.000000000.000000000.000000000", "1.0.0.0"), 0, 'Test 108');
test(compareVersion("1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1", "1"), 1, 'Test 109');
test(compareVersion("1.20.3", "1.19.99"), 1, 'Test 110');
test(compareVersion("1.0.0.0.0.0.0", "1"), 0, 'Test 111');
test(compareVersion("1.2.3.4", "1.2.3.4.5"), -1, 'Test 112');
test(compareVersion("123456789.987654321", "123456789.987654320"), 1, 'Test 113');
test(compareVersion("1000000000.1000000000", "1000000000.1000000000.0"), 0, 'Test 114');
test(compareVersion("1.0.0.0.0.0.0.0", "1"), 0, 'Test 115');
test(compareVersion("0001.0002.0003", "1.2.3"), 0, 'Test 116');
test(compareVersion("1.00001.00002", "1.1.2"), 0, 'Test 117');
test(compareVersion("999999999.999999999.999999999", "1000000000"), -1, 'Test 118');
test(compareVersion("1.0.0.0.0", "1"), 0, 'Test 119');

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
