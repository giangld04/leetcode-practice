// Test: 492. Construct The Rectangle
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { constructRectangle } = require("./solution");

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

console.log("\n492. Construct The Rectangle\n");

test(constructRectangle(81), [9, 9], 'Test 1');
test(constructRectangle(122122), [427, 286], 'Test 2');
test(constructRectangle(37), [37, 1], 'Test 3');
test(constructRectangle(10000000), [3200, 3125], 'Test 4');
test(constructRectangle(1), [1, 1], 'Test 5');
test(constructRectangle(4), [2, 2], 'Test 6');
test(constructRectangle(50), [10, 5], 'Test 7');
test(constructRectangle(10000), [100, 100], 'Test 8');
test(constructRectangle(999999), [1001, 999], 'Test 9');
test(constructRectangle(60), [10, 6], 'Test 10');
test(constructRectangle(987654321), [379721, 2601], 'Test 11');
test(constructRectangle(314159), [314159, 1], 'Test 12');
test(constructRectangle(9876543), [14503, 681], 'Test 13');
test(constructRectangle(7920), [90, 88], 'Test 14');
test(constructRectangle(131072), [512, 256], 'Test 15');
test(constructRectangle(87654321), [14631, 5991], 'Test 16');
test(constructRectangle(841), [29, 29], 'Test 17');
test(constructRectangle(98765), [19753, 5], 'Test 18');
test(constructRectangle(625), [25, 25], 'Test 19');
test(constructRectangle(123456789), [11409, 10821], 'Test 20');
test(constructRectangle(1024), [32, 32], 'Test 21');
test(constructRectangle(8281), [91, 91], 'Test 22');
test(constructRectangle(86400), [300, 288], 'Test 23');
test(constructRectangle(12345678), [14593, 846], 'Test 24');
test(constructRectangle(1000000000), [32000, 31250], 'Test 25');
test(constructRectangle(12345), [823, 15], 'Test 26');
test(constructRectangle(50000000), [8000, 6250], 'Test 27');
test(constructRectangle(1000000), [1000, 1000], 'Test 28');
test(constructRectangle(100000000), [10000, 10000], 'Test 29');
test(constructRectangle(20000000), [5000, 4000], 'Test 30');
test(constructRectangle(8192), [128, 64], 'Test 31');
test(constructRectangle(432432), [693, 624], 'Test 32');
test(constructRectangle(121), [11, 11], 'Test 33');
test(constructRectangle(333333), [693, 481], 'Test 34');
test(constructRectangle(1048576), [1024, 1024], 'Test 35');
test(constructRectangle(54321), [953, 57], 'Test 36');
test(constructRectangle(250000), [500, 500], 'Test 37');
test(constructRectangle(9801), [99, 99], 'Test 38');
test(constructRectangle(135895476), [11324623, 12], 'Test 39');
test(constructRectangle(2345678), [50993, 46], 'Test 40');
test(constructRectangle(1111111), [4649, 239], 'Test 41');
test(constructRectangle(9999999), [4649, 2151], 'Test 42');
test(constructRectangle(987654), [1697, 582], 'Test 43');
test(constructRectangle(84100), [290, 290], 'Test 44');
test(constructRectangle(9999997), [1428571, 7], 'Test 45');
test(constructRectangle(500500), [715, 700], 'Test 46');
test(constructRectangle(9999991), [9999991, 1], 'Test 47');
test(constructRectangle(102400), [320, 320], 'Test 48');
test(constructRectangle(49), [7, 7], 'Test 49');
test(constructRectangle(7654321), [402859, 19], 'Test 50');
test(constructRectangle(1413721), [1189, 1189], 'Test 51');
test(constructRectangle(216000000), [15000, 14400], 'Test 52');
test(constructRectangle(5000000), [2500, 2000], 'Test 53');
test(constructRectangle(123456), [643, 192], 'Test 54');
test(constructRectangle(9765625), [3125, 3125], 'Test 55');
test(constructRectangle(100), [10, 10], 'Test 56');
test(constructRectangle(555555), [777, 715], 'Test 57');
test(constructRectangle(169), [13, 13], 'Test 58');
test(constructRectangle(100000001), [5882353, 17], 'Test 59');
test(constructRectangle(720), [30, 24], 'Test 60');
test(constructRectangle(2000000), [1600, 1250], 'Test 61');
test(constructRectangle(67600), [260, 260], 'Test 62');
test(constructRectangle(676), [26, 26], 'Test 63');
test(constructRectangle(1234567), [9721, 127], 'Test 64');
test(constructRectangle(3199128), [7841, 408], 'Test 65');
test(constructRectangle(111111), [407, 273], 'Test 66');
test(constructRectangle(1524157875), [44019, 34625], 'Test 67');
test(constructRectangle(134217728), [16384, 8192], 'Test 68');
test(constructRectangle(2048), [64, 32], 'Test 69');
test(constructRectangle(65536), [256, 256], 'Test 70');
test(constructRectangle(789456123), [41487, 19029], 'Test 71');
test(constructRectangle(567890123), [28151, 20173], 'Test 72');
test(constructRectangle(73456), [4591, 16], 'Test 73');
test(constructRectangle(1000001), [9901, 101], 'Test 74');

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
