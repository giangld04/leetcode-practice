// Test: 2520. Count The Digits That Divide A Number
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { countDigits } = require("./solution");

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

console.log("\n2520. Count The Digits That Divide A Number\n");

test(countDigits(111111111), 9, 'Test 1');
test(countDigits(666), 3, 'Test 2');
test(countDigits(999), 3, 'Test 3');
test(countDigits(222), 3, 'Test 4');
test(countDigits(1122), 4, 'Test 5');
test(countDigits(123456789), 3, 'Test 6');
test(countDigits(4488), 4, 'Test 7');
test(countDigits(444), 3, 'Test 8');
test(countDigits(555), 3, 'Test 9');
test(countDigits(1248), 4, 'Test 10');
test(countDigits(13579), 1, 'Test 11');
test(countDigits(888), 3, 'Test 12');
test(countDigits(333), 3, 'Test 13');
test(countDigits(2222), 4, 'Test 14');
test(countDigits(987654321), 3, 'Test 15');
test(countDigits(7), 1, 'Test 16');
test(countDigits(1111), 4, 'Test 17');
test(countDigits(121), 2, 'Test 18');
test(countDigits(111), 3, 'Test 19');
test(countDigits(777), 3, 'Test 20');
test(countDigits(2244), 4, 'Test 21');
test(countDigits(357), 2, 'Test 22');
test(countDigits(3366), 4, 'Test 23');
test(countDigits(222222222), 9, 'Test 24');
test(countDigits(369125874), 5, 'Test 25');
test(countDigits(555666777), 0, 'Test 26');
test(countDigits(555555555), 9, 'Test 27');
test(countDigits(888888888), 9, 'Test 28');
test(countDigits(975318642), 5, 'Test 29');
test(countDigits(1111111111), 10, 'Test 30');
test(countDigits(222333444555666777888999), 3, 'Test 31');
test(countDigits(32481632), 5, 'Test 32');
test(countDigits(889977), 0, 'Test 33');
test(countDigits(777777777), 9, 'Test 34');
test(countDigits(1357913579), 2, 'Test 35');
test(countDigits(199919991), 3, 'Test 36');
test(countDigits(248163264128), 9, 'Test 37');
test(countDigits(1000000000), Error: integer modulo by zero, 'Test 38');
test(countDigits(111222333), 6, 'Test 39');
test(countDigits(666666666), 9, 'Test 40');
test(countDigits(135792468), 7, 'Test 41');
test(countDigits(222444666), 6, 'Test 42');
test(countDigits(333333333), 9, 'Test 43');
test(countDigits(595959), 0, 'Test 44');
test(countDigits(1352468), 3, 'Test 45');
test(countDigits(1234567891011121314151617181920), Error: integer modulo by zero, 'Test 46');
test(countDigits(272727272), 5, 'Test 47');
test(countDigits(135791357), 2, 'Test 48');
test(countDigits(363636363), 5, 'Test 49');
test(countDigits(31313), 2, 'Test 50');
test(countDigits(333666999), 6, 'Test 51');
test(countDigits(555555555555555555), 18, 'Test 52');
test(countDigits(333366669999), 8, 'Test 53');
test(countDigits(7654321), 1, 'Test 54');
test(countDigits(101010101), Error: integer modulo by zero, 'Test 55');
test(countDigits(82436), 2, 'Test 56');
test(countDigits(135), 3, 'Test 57');
test(countDigits(488848884), 3, 'Test 58');
test(countDigits(363636), 6, 'Test 59');
test(countDigits(1122334455), 6, 'Test 60');
test(countDigits(478915), 2, 'Test 61');
test(countDigits(246813579), 3, 'Test 62');
test(countDigits(24682468), 4, 'Test 63');
test(countDigits(864213579), 3, 'Test 64');
test(countDigits(333999), 6, 'Test 65');
test(countDigits(1133557799), 2, 'Test 66');
test(countDigits(369258147), 3, 'Test 67');
test(countDigits(111222333444555666777888999), 9, 'Test 68');
test(countDigits(899999999), 0, 'Test 69');
test(countDigits(29876), 2, 'Test 70');
test(countDigits(468297351), 3, 'Test 71');
test(countDigits(56324), 2, 'Test 72');
test(countDigits(864202468), Error: integer modulo by zero, 'Test 73');
test(countDigits(199199199), 3, 'Test 74');
test(countDigits(975319753), 1, 'Test 75');
test(countDigits(112233), 4, 'Test 76');
test(countDigits(112233445566778899), 6, 'Test 77');

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
