// Test: 2507. Smallest Value After Replacing With Sum Of Prime Factors
// 45 test cases from LeetCodeDataset
// Run: node test.js

const { smallestValue } = require("./solution");

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

console.log("\n2507. Smallest Value After Replacing With Sum Of Prime Factors\n");

test(smallestValue(3), 3, 'Test 1');
test(smallestValue(15), 5, 'Test 2');
test(smallestValue(100), 5, 'Test 3');
test(smallestValue(44), 5, 'Test 4');
test(smallestValue(28), 11, 'Test 5');
test(smallestValue(97), 97, 'Test 6');
test(smallestValue(99999), 31, 'Test 7');
test(smallestValue(729), 5, 'Test 8');
test(smallestValue(12345), 5, 'Test 9');
test(smallestValue(49), 5, 'Test 10');
test(smallestValue(104), 19, 'Test 11');
test(smallestValue(841), 31, 'Test 12');
test(smallestValue(987654), 5, 'Test 13');
test(smallestValue(1009), 1009, 'Test 14');
test(smallestValue(60), 7, 'Test 15');
test(smallestValue(6857), 6857, 'Test 16');
test(smallestValue(72), 7, 'Test 17');
test(smallestValue(13195), 11, 'Test 18');
test(smallestValue(225), 5, 'Test 19');
test(smallestValue(720), 19, 'Test 20');
test(smallestValue(128), 5, 'Test 21');
test(smallestValue(1024), 5, 'Test 22');
test(smallestValue(100000), 7, 'Test 23');
test(smallestValue(789), 11, 'Test 24');
test(smallestValue(2048), 13, 'Test 25');
test(smallestValue(999), 7, 'Test 26');
test(smallestValue(2310), 11, 'Test 27');
test(smallestValue(65536), 7, 'Test 28');
test(smallestValue(169), 5, 'Test 29');
test(smallestValue(256), 5, 'Test 30');
test(smallestValue(77), 5, 'Test 31');
test(smallestValue(81), 7, 'Test 32');
test(smallestValue(104729), 104729, 'Test 33');
test(smallestValue(97531), 67, 'Test 34');
test(smallestValue(99998), 5, 'Test 35');
test(smallestValue(1234), 619, 'Test 36');
test(smallestValue(3125), 7, 'Test 37');
test(smallestValue(8898), 7, 'Test 38');
test(smallestValue(510510), 31, 'Test 39');
test(smallestValue(121), 13, 'Test 40');
test(smallestValue(1234567), 1237, 'Test 41');
test(smallestValue(500), 19, 'Test 42');
test(smallestValue(54321), 5, 'Test 43');
test(smallestValue(600851475143), 13, 'Test 44');
test(smallestValue(84), 5, 'Test 45');

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
