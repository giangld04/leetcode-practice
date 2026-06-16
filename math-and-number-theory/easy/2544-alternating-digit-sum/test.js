// Test: 2544. Alternating Digit Sum
// 57 test cases from LeetCodeDataset
// Run: node test.js

const { alternateDigitSum } = require("./solution");

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

console.log("\n2544. Alternating Digit Sum\n");

test(alternateDigitSum(987654321), 5, 'Test 1');
test(alternateDigitSum(123), 2, 'Test 2');
test(alternateDigitSum(987), 8, 'Test 3');
test(alternateDigitSum(9), 9, 'Test 4');
test(alternateDigitSum(123456789), 5, 'Test 5');
test(alternateDigitSum(111), 1, 'Test 6');
test(alternateDigitSum(1), 1, 'Test 7');
test(alternateDigitSum(1000000000), 1, 'Test 8');
test(alternateDigitSum(521), 4, 'Test 9');
test(alternateDigitSum(100000000), 1, 'Test 10');
test(alternateDigitSum(24680), -4, 'Test 11');
test(alternateDigitSum(886996), 0, 'Test 12');
test(alternateDigitSum(222222222), 2, 'Test 13');
test(alternateDigitSum(111222333444555666777888999), 5, 'Test 14');
test(alternateDigitSum(999999999), 9, 'Test 15');
test(alternateDigitSum(987654321987654321), 0, 'Test 16');
test(alternateDigitSum(10987654321), 6, 'Test 17');
test(alternateDigitSum(1234567890123456789), 10, 'Test 18');
test(alternateDigitSum(5432109876), 5, 'Test 19');
test(alternateDigitSum(100000001), 2, 'Test 20');
test(alternateDigitSum(909090909), 45, 'Test 21');
test(alternateDigitSum(202020202), 10, 'Test 22');
test(alternateDigitSum(135791357), 9, 'Test 23');
test(alternateDigitSum(975318642), 1, 'Test 24');
test(alternateDigitSum(505050505), 25, 'Test 25');
test(alternateDigitSum(999888777), 8, 'Test 26');
test(alternateDigitSum(135792468), 9, 'Test 27');
test(alternateDigitSum(99887766554433221100), 0, 'Test 28');
test(alternateDigitSum(246802468), 0, 'Test 29');
test(alternateDigitSum(123321123321), 0, 'Test 30');
test(alternateDigitSum(9753186420), 1, 'Test 31');
test(alternateDigitSum(121212121), -3, 'Test 32');
test(alternateDigitSum(5040302010), 15, 'Test 33');
test(alternateDigitSum(808080808), 40, 'Test 34');
test(alternateDigitSum(101010101), 5, 'Test 35');
test(alternateDigitSum(1212121212), -5, 'Test 36');
test(alternateDigitSum(4321234), 5, 'Test 37');
test(alternateDigitSum(8642086420), 0, 'Test 38');
test(alternateDigitSum(9876543210), 5, 'Test 39');
test(alternateDigitSum(112233445566778899), 0, 'Test 40');
test(alternateDigitSum(7654321), 4, 'Test 41');
test(alternateDigitSum(1122334455), 0, 'Test 42');
test(alternateDigitSum(555555555), 5, 'Test 43');
test(alternateDigitSum(864208642), 0, 'Test 44');
test(alternateDigitSum(1000000001), 0, 'Test 45');
test(alternateDigitSum(4321234321234), 6, 'Test 46');
test(alternateDigitSum(111111111), 1, 'Test 47');
test(alternateDigitSum(1010101010), 5, 'Test 48');
test(alternateDigitSum(2222222222), 0, 'Test 49');
test(alternateDigitSum(110011001), 1, 'Test 50');
test(alternateDigitSum(123321), 0, 'Test 51');
test(alternateDigitSum(246813579), 1, 'Test 52');
test(alternateDigitSum(123012301), 5, 'Test 53');
test(alternateDigitSum(543210987654), 6, 'Test 54');
test(alternateDigitSum(1357924680), 9, 'Test 55');
test(alternateDigitSum(543210987), 11, 'Test 56');
test(alternateDigitSum(1111111111), 0, 'Test 57');

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
