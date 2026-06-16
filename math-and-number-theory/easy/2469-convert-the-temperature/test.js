// Test: 2469. Convert The Temperature
// 39 test cases from LeetCodeDataset
// Run: node test.js

const { convertTemperature } = require("./solution");

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

console.log("\n2469. Convert The Temperature\n");

test(convertTemperature(122.11), [395.26, 251.798], 'Test 1');
test(convertTemperature(1000.00), [1273.15, 1832.0], 'Test 2');
test(convertTemperature(0.00), [273.15, 32.0], 'Test 3');
test(convertTemperature(500.00), [773.15, 932.0], 'Test 4');
test(convertTemperature(100.00), [373.15, 212.0], 'Test 5');
test(convertTemperature(500.75), [773.9, 933.35], 'Test 6');
test(convertTemperature(36.50), [309.65, 97.7], 'Test 7');
test(convertTemperature(25.00), [298.15, 77.0], 'Test 8');
test(convertTemperature(273.15), [546.3, 523.67], 'Test 9');
test(convertTemperature(42.876543), [316.02654299999995, 109.1777774], 'Test 10');
test(convertTemperature(12.34), [285.48999999999995, 54.212], 'Test 11');
test(convertTemperature(37.00), [310.15, 98.60000000000001], 'Test 12');
test(convertTemperature(25.55555), [298.70554999999996, 77.99999], 'Test 13');
test(convertTemperature(150.75), [423.9, 303.35], 'Test 14');
test(convertTemperature(-0.01), [273.14, 31.982], 'Test 15');
test(convertTemperature(234.56), [507.71, 454.208], 'Test 16');
test(convertTemperature(750.50), [1023.65, 1382.9], 'Test 17');
test(convertTemperature(77.77777), [350.92777, 171.999986], 'Test 18');
test(convertTemperature(456.78), [729.93, 854.204], 'Test 19');
test(convertTemperature(750.25), [1023.4, 1382.45], 'Test 20');
test(convertTemperature(999.00), [1272.15, 1830.2], 'Test 21');
test(convertTemperature(499.99), [773.14, 931.9820000000001], 'Test 22');
test(convertTemperature(60.00), [333.15, 140.0], 'Test 23');
test(convertTemperature(23.45), [296.59999999999997, 74.21000000000001], 'Test 24');
test(convertTemperature(450.00), [723.15, 842.0], 'Test 25');
test(convertTemperature(150.67), [423.81999999999994, 303.20599999999996], 'Test 26');
test(convertTemperature(1.00), [274.15, 33.8], 'Test 27');
test(convertTemperature(500.01), [773.16, 932.018], 'Test 28');
test(convertTemperature(800.25), [1073.4, 1472.45], 'Test 29');
test(convertTemperature(550.89), [824.04, 1023.602], 'Test 30');
test(convertTemperature(999.99), [1273.1399999999999, 1831.982], 'Test 31');
test(convertTemperature(1.23456), [274.38455999999996, 34.222208], 'Test 32');
test(convertTemperature(0.99), [274.14, 33.782], 'Test 33');
test(convertTemperature(678.90), [952.05, 1254.02], 'Test 34');
test(convertTemperature(300.12), [573.27, 572.216], 'Test 35');
test(convertTemperature(0.01), [273.15999999999997, 32.018], 'Test 36');
test(convertTemperature(777.77), [1050.92, 1431.986], 'Test 37');
test(convertTemperature(89.67), [362.82, 193.406], 'Test 38');
test(convertTemperature(150.00), [423.15, 302.0], 'Test 39');

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
