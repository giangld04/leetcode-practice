// Test: 233. Number Of Digit One
// 76 test cases from LeetCodeDataset
// Run: node test.js

const { countDigitOne } = require("./solution");

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

console.log("\n233. Number Of Digit One\n");

test(countDigitOne(0), 0, 'Test 1');
test(countDigitOne(987654321), 891632373, 'Test 2');
test(countDigitOne(100000), 50001, 'Test 3');
test(countDigitOne(999999999), 900000000, 'Test 4');
test(countDigitOne(999), 300, 'Test 5');
test(countDigitOne(1000000), 600001, 'Test 6');
test(countDigitOne(501), 201, 'Test 7');
test(countDigitOne(9999), 4000, 'Test 8');
test(countDigitOne(100), 21, 'Test 9');
test(countDigitOne(1000000000), 900000001, 'Test 10');
test(countDigitOne(1000), 301, 'Test 11');
test(countDigitOne(55), 16, 'Test 12');
test(countDigitOne(50000000), 45000000, 'Test 13');
test(countDigitOne(13), 6, 'Test 14');
test(countDigitOne(99999), 50000, 'Test 15');
test(countDigitOne(210), 142, 'Test 16');
test(countDigitOne(1010), 313, 'Test 17');
test(countDigitOne(500000005), 500000001, 'Test 18');
test(countDigitOne(12345), 8121, 'Test 19');
test(countDigitOne(50123), 30057, 'Test 20');
test(countDigitOne(2147483647), 2971027783, 'Test 21');
test(countDigitOne(909090909), 826446281, 'Test 22');
test(countDigitOne(202020202), 262218141, 'Test 23');
test(countDigitOne(111), 36, 'Test 24');
test(countDigitOne(213456789), 273589849, 'Test 25');
test(countDigitOne(111000111), 99600372, 'Test 26');
test(countDigitOne(2000000000), 2800000000, 'Test 27');
test(countDigitOne(123000000), 129800001, 'Test 28');
test(countDigitOne(56789), 33059, 'Test 29');
test(countDigitOne(110), 33, 'Test 30');
test(countDigitOne(3000000000), 3700000000, 'Test 31');
test(countDigitOne(807060504), 745234201, 'Test 32');
test(countDigitOne(300), 160, 'Test 33');
test(countDigitOne(10001), 4003, 'Test 34');
test(countDigitOne(100100100), 80150223, 'Test 35');
test(countDigitOne(10999), 5300, 'Test 36');
test(countDigitOne(99), 20, 'Test 37');
test(countDigitOne(876543210), 803978042, 'Test 38');
test(countDigitOne(1001), 303, 'Test 39');
test(countDigitOne(808080808), 745842261, 'Test 40');
test(countDigitOne(5001), 2501, 'Test 41');
test(countDigitOne(1101101101), 1082954833, 'Test 42');
test(countDigitOne(101010101), 81624329, 'Test 43');
test(countDigitOne(200000000), 260000000, 'Test 44');
test(countDigitOne(303030303), 342822161, 'Test 45');
test(countDigitOne(800000000), 740000000, 'Test 46');
test(countDigitOne(101), 23, 'Test 47');
test(countDigitOne(10000000), 7000001, 'Test 48');
test(countDigitOne(10000000000), 10000000001, 'Test 49');
test(countDigitOne(432109876), 453263855, 'Test 50');
test(countDigitOne(2020), 1612, 'Test 51');
test(countDigitOne(10101), 4125, 'Test 52');
test(countDigitOne(600000000), 580000000, 'Test 53');
test(countDigitOne(1023), 337, 'Test 54');
test(countDigitOne(555555555), 549382716, 'Test 55');
test(countDigitOne(1000000001), 900000003, 'Test 56');
test(countDigitOne(50001), 30001, 'Test 57');
test(countDigitOne(111111111), 100000008, 'Test 58');
test(countDigitOne(1010101010), 917253346, 'Test 59');
test(countDigitOne(888888888), 812345679, 'Test 60');
test(countDigitOne(50005), 30001, 'Test 61');
test(countDigitOne(654321098), 628668419, 'Test 62');
test(countDigitOne(700000000), 660000000, 'Test 63');
test(countDigitOne(200), 140, 'Test 64');
test(countDigitOne(98765), 49657, 'Test 65');
test(countDigitOne(500000000), 500000000, 'Test 66');
test(countDigitOne(400000000), 420000000, 'Test 67');
test(countDigitOne(100100), 50122, 'Test 68');
test(countDigitOne(123456789), 130589849, 'Test 69');
test(countDigitOne(1999999999), 2800000000, 'Test 70');
test(countDigitOne(100001), 50003, 'Test 71');
test(countDigitOne(199), 140, 'Test 72');
test(countDigitOne(1111111111), 1111111120, 'Test 73');
test(countDigitOne(800000008), 740000001, 'Test 74');
test(countDigitOne(100010001), 80014005, 'Test 75');
test(countDigitOne(100000000), 80000001, 'Test 76');

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
