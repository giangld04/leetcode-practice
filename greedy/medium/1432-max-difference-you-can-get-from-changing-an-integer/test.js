// Test: 1432. Max Difference You Can Get From Changing An Integer
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { maxDiff } = require("./solution");

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

console.log("\n1432. Max Difference You Can Get From Changing An Integer\n");

test(maxDiff(1001100), 8008800, 'Test 1');
test(maxDiff(9), 8, 'Test 2');
test(maxDiff(98789), 81018, 'Test 3');
test(maxDiff(123456), 820000, 'Test 4');
test(maxDiff(987654321), 810000000, 'Test 5');
test(maxDiff(1000000), 8000000, 'Test 6');
test(maxDiff(1221), 8228, 'Test 7');
test(maxDiff(123456789), 820000000, 'Test 8');
test(maxDiff(1111111), 8888888, 'Test 9');
test(maxDiff(987789), 810018, 'Test 10');
test(maxDiff(1001001), 8008008, 'Test 11');
test(maxDiff(12321), 82028, 'Test 12');
test(maxDiff(555), 888, 'Test 13');
test(maxDiff(9999999), 8888888, 'Test 14');
test(maxDiff(123321), 820028, 'Test 15');
test(maxDiff(99100099), 88800088, 'Test 16');
test(maxDiff(543212345), 800000008, 'Test 17');
test(maxDiff(599599599), 800800800, 'Test 18');
test(maxDiff(100000000), 800000000, 'Test 19');
test(maxDiff(12212212), 82282282, 'Test 20');
test(maxDiff(8877665544332211), 8800000000000000, 'Test 21');
test(maxDiff(109080706), 809000000, 'Test 22');
test(maxDiff(888888888), 888888888, 'Test 23');
test(maxDiff(890123456), 800000000, 'Test 24');
test(maxDiff(543210987), 800000000, 'Test 25');
test(maxDiff(111000111), 888000888, 'Test 26');
test(maxDiff(98765432109876543210), 81000000008100000000, 'Test 27');
test(maxDiff(10000000), 80000000, 'Test 28');
test(maxDiff(90000009), 89999998, 'Test 29');
test(maxDiff(1234321), 8200028, 'Test 30');
test(maxDiff(999111111), 888888888, 'Test 31');
test(maxDiff(110101010), 880808080, 'Test 32');
test(maxDiff(20202020), 80808080, 'Test 33');
test(maxDiff(567890123), 800000000, 'Test 34');
test(maxDiff(5566778899), 8800000000, 'Test 35');
test(maxDiff(909090909), 898989898, 'Test 36');
test(maxDiff(44440000), 88880000, 'Test 37');
test(maxDiff(3330333), 8880888, 'Test 38');
test(maxDiff(10000001), 80000008, 'Test 39');
test(maxDiff(111222333), 888222000, 'Test 40');
test(maxDiff(9876543210), 8100000000, 'Test 41');
test(maxDiff(9191919), 8888888, 'Test 42');
test(maxDiff(98709870987), 81008100810, 'Test 43');
test(maxDiff(334455667788), 880000000000, 'Test 44');
test(maxDiff(122121), 822828, 'Test 45');
test(maxDiff(8998), 8008, 'Test 46');
test(maxDiff(77777777), 88888888, 'Test 47');
test(maxDiff(88888888), 88888888, 'Test 48');
test(maxDiff(19000000), 89000000, 'Test 49');
test(maxDiff(200200200), 800800800, 'Test 50');
test(maxDiff(1919191), 8989898, 'Test 51');
test(maxDiff(918273645), 880000000, 'Test 52');
test(maxDiff(100000001), 800000008, 'Test 53');
test(maxDiff(11001100), 88008800, 'Test 54');
test(maxDiff(59595959), 80808080, 'Test 55');
test(maxDiff(209209209), 800800800, 'Test 56');
test(maxDiff(1100110011), 8800880088, 'Test 57');
test(maxDiff(333222111), 888000000, 'Test 58');
test(maxDiff(999000), 888999, 'Test 59');
test(maxDiff(90000000), 89999999, 'Test 60');
test(maxDiff(1098765432), 8090000000, 'Test 61');
test(maxDiff(101010101), 808080808, 'Test 62');
test(maxDiff(57575757), 80808080, 'Test 63');
test(maxDiff(123123123), 820820820, 'Test 64');
test(maxDiff(777770777), 888880888, 'Test 65');
test(maxDiff(123212321), 820282028, 'Test 66');
test(maxDiff(90009), 89998, 'Test 67');
test(maxDiff(1122334455), 8822000000, 'Test 68');
test(maxDiff(100100100), 800800800, 'Test 69');
test(maxDiff(99999999), 88888888, 'Test 70');
test(maxDiff(100000), 800000, 'Test 71');
test(maxDiff(109090909), 809090909, 'Test 72');
test(maxDiff(999999999), 888888888, 'Test 73');
test(maxDiff(1000100), 8000800, 'Test 74');
test(maxDiff(19191919), 89898989, 'Test 75');
test(maxDiff(202020202), 808080808, 'Test 76');
test(maxDiff(1000001), 8000008, 'Test 77');
test(maxDiff(44444444), 88888888, 'Test 78');
test(maxDiff(8880888), 8880888, 'Test 79');
test(maxDiff(191919191), 898989898, 'Test 80');
test(maxDiff(1230123), 8200820, 'Test 81');

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
