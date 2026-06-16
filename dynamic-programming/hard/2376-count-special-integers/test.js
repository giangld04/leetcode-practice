// Test: 2376. Count Special Integers
// 57 test cases from LeetCodeDataset
// Run: node test.js

const { countSpecialNumbers } = require("./solution");

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

console.log("\n2376. Count Special Integers\n");

test(countSpecialNumbers(135), 110, 'Test 1');
test(countSpecialNumbers(999), 738, 'Test 2');
test(countSpecialNumbers(200), 162, 'Test 3');
test(countSpecialNumbers(10000), 5274, 'Test 4');
test(countSpecialNumbers(1234), 803, 'Test 5');
test(countSpecialNumbers(2000), 1242, 'Test 6');
test(countSpecialNumbers(9876), 5274, 'Test 7');
test(countSpecialNumbers(123456789), 2392084, 'Test 8');
test(countSpecialNumbers(20), 19, 'Test 9');
test(countSpecialNumbers(2000000), 229050, 'Test 10');
test(countSpecialNumbers(2000000000), 5974650, 'Test 11');
test(countSpecialNumbers(300), 234, 'Test 12');
test(countSpecialNumbers(100), 90, 'Test 13');
test(countSpecialNumbers(1999999999), 5974650, 'Test 14');
test(countSpecialNumbers(1000), 738, 'Test 15');
test(countSpecialNumbers(1), 1, 'Test 16');
test(countSpecialNumbers(5), 5, 'Test 17');
test(countSpecialNumbers(222222222), 2789370, 'Test 18');
test(countSpecialNumbers(210), 171, 'Test 19');
test(countSpecialNumbers(102030405060708090), 8877690, 'Test 20');
test(countSpecialNumbers(999999999), 5611770, 'Test 21');
test(countSpecialNumbers(12345), 5660, 'Test 22');
test(countSpecialNumbers(9999999), 712890, 'Test 23');
test(countSpecialNumbers(2147483647), 6028170, 'Test 24');
test(countSpecialNumbers(111111), 34170, 'Test 25');
test(countSpecialNumbers(111222333), 2386170, 'Test 26');
test(countSpecialNumbers(111), 98, 'Test 27');
test(countSpecialNumbers(213456789), 2754964, 'Test 28');
test(countSpecialNumbers(987654), 168570, 'Test 29');
test(countSpecialNumbers(876543210), 5202657, 'Test 30');
test(countSpecialNumbers(200000), 47610, 'Test 31');
test(countSpecialNumbers(2100000000), 6014970, 'Test 32');
test(countSpecialNumbers(101010101), 2345850, 'Test 33');
test(countSpecialNumbers(200000000), 2708730, 'Test 34');
test(countSpecialNumbers(12344321), 735990, 'Test 35');
test(countSpecialNumbers(9876543210), 8877690, 'Test 36');
test(countSpecialNumbers(543210987), 3975354, 'Test 37');
test(countSpecialNumbers(1122334455), 5652090, 'Test 38');
test(countSpecialNumbers(9999), 5274, 'Test 39');
test(countSpecialNumbers(555555555), 3998970, 'Test 40');
test(countSpecialNumbers(1111111), 175290, 'Test 41');
test(countSpecialNumbers(1000000000), 5611770, 'Test 42');
test(countSpecialNumbers(88888), 29130, 'Test 43');
test(countSpecialNumbers(1000000001), 5611770, 'Test 44');
test(countSpecialNumbers(111111111), 2386170, 'Test 45');
test(countSpecialNumbers(987654321), 5611770, 'Test 46');
test(countSpecialNumbers(888888888), 5208570, 'Test 47');
test(countSpecialNumbers(1234567890), 5658004, 'Test 48');
test(countSpecialNumbers(567890123), 4028371, 'Test 49');
test(countSpecialNumbers(101010), 32490, 'Test 50');
test(countSpecialNumbers(987654320), 5611769, 'Test 51');
test(countSpecialNumbers(98765), 32490, 'Test 52');
test(countSpecialNumbers(1000000), 168570, 'Test 53');
test(countSpecialNumbers(999999), 168570, 'Test 54');
test(countSpecialNumbers(123456), 34417, 'Test 55');
test(countSpecialNumbers(87654321), 2141294, 'Test 56');
test(countSpecialNumbers(1111111111), 5652090, 'Test 57');

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
