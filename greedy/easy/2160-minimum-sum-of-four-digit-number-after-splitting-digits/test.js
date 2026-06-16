// Test: 2160. Minimum Sum Of Four Digit Number After Splitting Digits
// 83 test cases from LeetCodeDataset
// Run: node test.js

const { minimumSum } = require("./solution");

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

console.log("\n2160. Minimum Sum Of Four Digit Number After Splitting Digits\n");

test(minimumSum(8765), 125, 'Test 1');
test(minimumSum(2309), 32, 'Test 2');
test(minimumSum(5678), 125, 'Test 3');
test(minimumSum(1098), 27, 'Test 4');
test(minimumSum(1111), 22, 'Test 5');
test(minimumSum(3333), 66, 'Test 6');
test(minimumSum(4009), 13, 'Test 7');
test(minimumSum(9999), 198, 'Test 8');
test(minimumSum(1000), 1, 'Test 9');
test(minimumSum(2932), 52, 'Test 10');
test(minimumSum(9876), 147, 'Test 11');
test(minimumSum(4321), 37, 'Test 12');
test(minimumSum(1234), 37, 'Test 13');
test(minimumSum(2020), 4, 'Test 14');
test(minimumSum(6666), 132, 'Test 15');
test(minimumSum(5631), 51, 'Test 16');
test(minimumSum(7899), 168, 'Test 17');
test(minimumSum(8821), 46, 'Test 18');
test(minimumSum(9503), 44, 'Test 19');
test(minimumSum(3867), 105, 'Test 20');
test(minimumSum(5555), 110, 'Test 21');
test(minimumSum(6789), 147, 'Test 22');
test(minimumSum(1928), 47, 'Test 23');
test(minimumSum(9900), 18, 'Test 24');
test(minimumSum(6600), 12, 'Test 25');
test(minimumSum(4444), 88, 'Test 26');
test(minimumSum(4628), 74, 'Test 27');
test(minimumSum(1119), 30, 'Test 28');
test(minimumSum(2229), 51, 'Test 29');
test(minimumSum(6644), 92, 'Test 30');
test(minimumSum(1122), 24, 'Test 31');
test(minimumSum(7824), 75, 'Test 32');
test(minimumSum(3223), 46, 'Test 33');
test(minimumSum(1201), 13, 'Test 34');
test(minimumSum(9990), 108, 'Test 35');
test(minimumSum(1221), 24, 'Test 36');
test(minimumSum(2345), 59, 'Test 37');
test(minimumSum(1357), 52, 'Test 38');
test(minimumSum(1199), 38, 'Test 39');
test(minimumSum(5600), 11, 'Test 40');
test(minimumSum(6677), 134, 'Test 41');
test(minimumSum(2099), 38, 'Test 42');
test(minimumSum(3939), 78, 'Test 43');
test(minimumSum(5611), 31, 'Test 44');
test(minimumSum(7700), 14, 'Test 45');
test(minimumSum(7711), 34, 'Test 46');
test(minimumSum(2288), 56, 'Test 47');
test(minimumSum(9009), 18, 'Test 48');
test(minimumSum(5647), 103, 'Test 49');
test(minimumSum(3928), 67, 'Test 50');
test(minimumSum(7654), 103, 'Test 51');
test(minimumSum(1991), 38, 'Test 52');
test(minimumSum(8231), 41, 'Test 53');
test(minimumSum(1001), 2, 'Test 54');
test(minimumSum(8888), 176, 'Test 55');
test(minimumSum(3456), 81, 'Test 56');
test(minimumSum(6084), 54, 'Test 57');
test(minimumSum(7209), 36, 'Test 58');
test(minimumSum(2468), 74, 'Test 59');
test(minimumSum(2019), 21, 'Test 60');
test(minimumSum(1129), 31, 'Test 61');
test(minimumSum(5551), 70, 'Test 62');
test(minimumSum(5234), 59, 'Test 63');
test(minimumSum(2233), 46, 'Test 64');
test(minimumSum(6633), 72, 'Test 65');
test(minimumSum(1299), 48, 'Test 66');
test(minimumSum(3030), 6, 'Test 67');
test(minimumSum(1100), 2, 'Test 68');
test(minimumSum(7891), 97, 'Test 69');
test(minimumSum(3405), 39, 'Test 70');
test(minimumSum(7111), 28, 'Test 71');
test(minimumSum(2244), 48, 'Test 72');
test(minimumSum(8800), 16, 'Test 73');
test(minimumSum(1298), 47, 'Test 74');
test(minimumSum(7777), 154, 'Test 75');
test(minimumSum(6530), 41, 'Test 76');
test(minimumSum(7770), 84, 'Test 77');
test(minimumSum(9000), 9, 'Test 78');
test(minimumSum(9123), 42, 'Test 79');
test(minimumSum(5670), 63, 'Test 80');
test(minimumSum(1179), 36, 'Test 81');
test(minimumSum(1987), 97, 'Test 82');
test(minimumSum(4466), 92, 'Test 83');

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
