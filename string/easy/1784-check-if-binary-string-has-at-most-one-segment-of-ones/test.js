// Test: 1784. Check If Binary String Has At Most One Segment Of Ones
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { checkOnesSegment } = require("./solution");

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

console.log("\n1784. Check If Binary String Has At Most One Segment Of Ones\n");

test(checkOnesSegment("1111"), true, 'Test 1');
test(checkOnesSegment("1000001"), false, 'Test 2');
test(checkOnesSegment("111"), true, 'Test 3');
test(checkOnesSegment("11110000"), true, 'Test 4');
test(checkOnesSegment("100000"), true, 'Test 5');
test(checkOnesSegment("11000"), true, 'Test 6');
test(checkOnesSegment("111000"), true, 'Test 7');
test(checkOnesSegment("1001001"), false, 'Test 8');
test(checkOnesSegment("1111111111"), true, 'Test 9');
test(checkOnesSegment("100001"), false, 'Test 10');
test(checkOnesSegment("1000000000"), true, 'Test 11');
test(checkOnesSegment("101"), false, 'Test 12');
test(checkOnesSegment("10"), true, 'Test 13');
test(checkOnesSegment("110"), true, 'Test 14');
test(checkOnesSegment("110001"), false, 'Test 15');
test(checkOnesSegment("1010101010"), false, 'Test 16');
test(checkOnesSegment("1"), true, 'Test 17');
test(checkOnesSegment("1100111"), false, 'Test 18');
test(checkOnesSegment("101010"), false, 'Test 19');
test(checkOnesSegment("111110000"), true, 'Test 20');
test(checkOnesSegment("1001"), false, 'Test 21');
test(checkOnesSegment("11001"), false, 'Test 22');
test(checkOnesSegment("101010101010101"), false, 'Test 23');
test(checkOnesSegment("1000000000000000000000000000000000000000000000000000001"), false, 'Test 24');
test(checkOnesSegment("11110000001"), false, 'Test 25');
test(checkOnesSegment("111000111000111000111000111000111000111000111000111"), false, 'Test 26');
test(checkOnesSegment("111000111000111000"), false, 'Test 27');
test(checkOnesSegment("1000000000000000000000000001"), false, 'Test 28');
test(checkOnesSegment("10101010101010101010101010101010101010101010101010"), false, 'Test 29');
test(checkOnesSegment("1000010001000100"), false, 'Test 30');
test(checkOnesSegment("10000000000000000000000000000000000000000000000001"), false, 'Test 31');
test(checkOnesSegment("1111111"), true, 'Test 32');
test(checkOnesSegment("111000111000111"), false, 'Test 33');
test(checkOnesSegment("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"), true, 'Test 34');
test(checkOnesSegment("111111111111111111111"), true, 'Test 35');
test(checkOnesSegment("1100110011"), false, 'Test 36');
test(checkOnesSegment("11100000000000"), true, 'Test 37');
test(checkOnesSegment("1010101010101010"), false, 'Test 38');
test(checkOnesSegment("10000000000000000000"), true, 'Test 39');
test(checkOnesSegment("111100000000"), true, 'Test 40');
test(checkOnesSegment("11110001"), false, 'Test 41');
test(checkOnesSegment("1111111111111110000000000001111111111111"), false, 'Test 42');
test(checkOnesSegment("11110000111100001111"), false, 'Test 43');
test(checkOnesSegment("101010101010"), false, 'Test 44');
test(checkOnesSegment("111000000000000000000"), true, 'Test 45');
test(checkOnesSegment("111111111111110000000000000"), true, 'Test 46');
test(checkOnesSegment("100000000000100000"), false, 'Test 47');
test(checkOnesSegment("100000000000"), true, 'Test 48');
test(checkOnesSegment("1110001"), false, 'Test 49');
test(checkOnesSegment("100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"), false, 'Test 50');
test(checkOnesSegment("1111111111111111"), true, 'Test 51');
test(checkOnesSegment("1001001001"), false, 'Test 52');
test(checkOnesSegment("1000000000000000000000000000000000000001"), false, 'Test 53');
test(checkOnesSegment("100000000000000000000000000000000000000000000000000000"), true, 'Test 54');
test(checkOnesSegment("1111111000000"), true, 'Test 55');
test(checkOnesSegment("111011101110111011101"), false, 'Test 56');
test(checkOnesSegment("1001001001001001001001001001001001001001001001001001001001001001001001001001001001001001001001001001001001"), false, 'Test 57');
test(checkOnesSegment("100000000000000000001"), false, 'Test 58');
test(checkOnesSegment("11100000000111"), false, 'Test 59');
test(checkOnesSegment("100000000001"), false, 'Test 60');
test(checkOnesSegment("1001001001001001"), false, 'Test 61');
test(checkOnesSegment("100000000000000"), true, 'Test 62');
test(checkOnesSegment("1100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011"), false, 'Test 63');
test(checkOnesSegment("10000000001"), false, 'Test 64');
test(checkOnesSegment("111000111000"), false, 'Test 65');
test(checkOnesSegment("10111000110"), false, 'Test 66');
test(checkOnesSegment("111100001111"), false, 'Test 67');
test(checkOnesSegment("100010001000100010001"), false, 'Test 68');
test(checkOnesSegment("1000000000000000"), true, 'Test 69');
test(checkOnesSegment("111110111111"), false, 'Test 70');
test(checkOnesSegment("111111000000"), true, 'Test 71');
test(checkOnesSegment("11011011011011011011"), false, 'Test 72');
test(checkOnesSegment("1000000000000000000000000000000000000000000000000001"), false, 'Test 73');
test(checkOnesSegment("11010101010101"), false, 'Test 74');
test(checkOnesSegment("11111000001"), false, 'Test 75');
test(checkOnesSegment("10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"), true, 'Test 76');
test(checkOnesSegment("1000100010"), false, 'Test 77');
test(checkOnesSegment("1110000000000001"), false, 'Test 78');
test(checkOnesSegment("10000000100000001"), false, 'Test 79');
test(checkOnesSegment("100000010000001000000"), false, 'Test 80');
test(checkOnesSegment("10000100001"), false, 'Test 81');
test(checkOnesSegment("1110000000"), true, 'Test 82');
test(checkOnesSegment("11111111111111111111111111111111111111111111111111"), true, 'Test 83');
test(checkOnesSegment("111111111111111111111111111111111111111111111111111111"), true, 'Test 84');
test(checkOnesSegment("10101010101010101"), false, 'Test 85');
test(checkOnesSegment("11100000000000000000000000000000000000000000000000"), true, 'Test 86');
test(checkOnesSegment("1111000011110000"), false, 'Test 87');
test(checkOnesSegment("10101010101010101010101010101010"), false, 'Test 88');
test(checkOnesSegment("1111100000"), true, 'Test 89');
test(checkOnesSegment("1111000000001111"), false, 'Test 90');
test(checkOnesSegment("11110000100001110000"), false, 'Test 91');
test(checkOnesSegment("111000000000000000000000000000000000000000000000001110000000000000000000000000000000000000000000000000000111"), false, 'Test 92');
test(checkOnesSegment("1101101101"), false, 'Test 93');
test(checkOnesSegment("1001001001001"), false, 'Test 94');
test(checkOnesSegment("1110111100001"), false, 'Test 95');
test(checkOnesSegment("110001000000"), false, 'Test 96');
test(checkOnesSegment("111111111100"), true, 'Test 97');
test(checkOnesSegment("1100000000000001"), false, 'Test 98');
test(checkOnesSegment("10000000000000000000000000000000000000000000000000"), true, 'Test 99');
test(checkOnesSegment("11001100110011"), false, 'Test 100');
test(checkOnesSegment("1110000000000000000000000000000000000000000000000000"), true, 'Test 101');
test(checkOnesSegment("11000001111"), false, 'Test 102');
test(checkOnesSegment("11111111110000000000000000000000000000000000000000"), true, 'Test 103');
test(checkOnesSegment("1111000011"), false, 'Test 104');
test(checkOnesSegment("10101010101010101010"), false, 'Test 105');
test(checkOnesSegment("10000111111110"), false, 'Test 106');
test(checkOnesSegment("10000111110001"), false, 'Test 107');
test(checkOnesSegment("10101010101010"), false, 'Test 108');
test(checkOnesSegment("1000001000001000001"), false, 'Test 109');
test(checkOnesSegment("1000000010000"), false, 'Test 110');
test(checkOnesSegment("10000000000001"), false, 'Test 111');
test(checkOnesSegment("11100001"), false, 'Test 112');
test(checkOnesSegment("1000000000000001"), false, 'Test 113');

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
