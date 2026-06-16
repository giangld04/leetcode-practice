// Test: 168. Excel Sheet Column Title
// 38 test cases from LeetCodeDataset
// Run: node test.js

const { convertToTitle } = require("./solution");

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

console.log("\n168. Excel Sheet Column Title\n");

test(convertToTitle(1), A, 'Test 1');
test(convertToTitle(28), AB, 'Test 2');
test(convertToTitle(1045), ANE, 'Test 3');
test(convertToTitle(2147483647), FXSHRXW, 'Test 4');
test(convertToTitle(456976), YYYZ, 'Test 5');
test(convertToTitle(52), AZ, 'Test 6');
test(convertToTitle(701), ZY, 'Test 7');
test(convertToTitle(1048576), BGQCV, 'Test 8');
test(convertToTitle(26), Z, 'Test 9');
test(convertToTitle(134217728), KGRJXH, 'Test 10');
test(convertToTitle(702), ZZ, 'Test 11');
test(convertToTitle(1047), ANG, 'Test 12');
test(convertToTitle(1046527), BGNCA, 'Test 13');
test(convertToTitle(351), MM, 'Test 14');
test(convertToTitle(27), AA, 'Test 15');
test(convertToTitle(4194304), IDPOJ, 'Test 16');
test(convertToTitle(466527), ZNCI, 'Test 17');
test(convertToTitle(1048575), BGQCU, 'Test 18');
test(convertToTitle(703), AAA, 'Test 19');
test(convertToTitle(1234567), BRFGI, 'Test 20');
test(convertToTitle(2702), CYX, 'Test 21');
test(convertToTitle(16384), XFD, 'Test 22');
test(convertToTitle(1000), ALL, 'Test 23');
test(convertToTitle(1379), BAA, 'Test 24');
test(convertToTitle(123456), FZPH, 'Test 25');
test(convertToTitle(4095), FAM, 'Test 26');
test(convertToTitle(676), YZ, 'Test 27');
test(convertToTitle(10000000), UVXWJ, 'Test 28');
test(convertToTitle(14776336), AFHRLP, 'Test 29');
test(convertToTitle(1378), AZZ, 'Test 30');
test(convertToTitle(140625), GYZQ, 'Test 31');
test(convertToTitle(728), AAZ, 'Test 32');
test(convertToTitle(2704), CYZ, 'Test 33');
test(convertToTitle(18278), ZZZ, 'Test 34');
test(convertToTitle(234567890), SSGWWX, 'Test 35');
test(convertToTitle(255), IU, 'Test 36');
test(convertToTitle(99999999), HJUNYU, 'Test 37');
test(convertToTitle(11829215), YVZUU, 'Test 38');

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
