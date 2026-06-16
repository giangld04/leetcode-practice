// Test: 868. Binary Gap
// 65 test cases from LeetCodeDataset
// Run: node test.js

const { binaryGap } = require("./solution");

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

console.log("\n868. Binary Gap\n");

test(binaryGap(8), 0, 'Test 1');
test(binaryGap(3), 1, 'Test 2');
test(binaryGap(1041), 6, 'Test 3');
test(binaryGap(15), 1, 'Test 4');
test(binaryGap(22), 2, 'Test 5');
test(binaryGap(32), 0, 'Test 6');
test(binaryGap(6), 1, 'Test 7');
test(binaryGap(1), 0, 'Test 8');
test(binaryGap(1000000000), 3, 'Test 9');
test(binaryGap(7), 1, 'Test 10');
test(binaryGap(13), 2, 'Test 11');
test(binaryGap(5), 2, 'Test 12');
test(binaryGap(29), 2, 'Test 13');
test(binaryGap(1001001001), 7, 'Test 14');
test(binaryGap(131071), 1, 'Test 15');
test(binaryGap(999999999), 3, 'Test 16');
test(binaryGap(8589934591), 1, 'Test 17');
test(binaryGap(47), 2, 'Test 18');
test(binaryGap(67890), 5, 'Test 19');
test(binaryGap(67108863), 1, 'Test 20');
test(binaryGap(2147483647), 1, 'Test 21');
test(binaryGap(100111011000110001), 6, 'Test 22');
test(binaryGap(1001001001001001001001001001001), 8, 'Test 23');
test(binaryGap(536870913), 29, 'Test 24');
test(binaryGap(511), 1, 'Test 25');
test(binaryGap(21845), 2, 'Test 26');
test(binaryGap(536870912), 0, 'Test 27');
test(binaryGap(1177777777), 4, 'Test 28');
test(binaryGap(1879048192), 1, 'Test 29');
test(binaryGap(10000100001), 7, 'Test 30');
test(binaryGap(665772), 4, 'Test 31');
test(binaryGap(6754321), 8, 'Test 32');
test(binaryGap(67), 5, 'Test 33');
test(binaryGap(134217727), 1, 'Test 34');
test(binaryGap(37), 3, 'Test 35');
test(binaryGap(33), 5, 'Test 36');
test(binaryGap(8388607), 1, 'Test 37');
test(binaryGap(983041), 16, 'Test 38');
test(binaryGap(1001), 3, 'Test 39');
test(binaryGap(134217729), 27, 'Test 40');
test(binaryGap(1000010000100001), 8, 'Test 41');
test(binaryGap(101010101), 7, 'Test 42');
test(binaryGap(1024), 0, 'Test 43');
test(binaryGap(16777215), 1, 'Test 44');
test(binaryGap(777777777), 4, 'Test 45');
test(binaryGap(1073741824), 0, 'Test 46');
test(binaryGap(4194305), 22, 'Test 47');
test(binaryGap(1048576), 0, 'Test 48');
test(binaryGap(807798533), 7, 'Test 49');
test(binaryGap(18), 3, 'Test 50');
test(binaryGap(131073), 17, 'Test 51');
test(binaryGap(1010101010101010101), 7, 'Test 52');
test(binaryGap(65535), 1, 'Test 53');
test(binaryGap(127), 1, 'Test 54');
test(binaryGap(10011001100110011001100110011001), 8, 'Test 55');
test(binaryGap(987654321), 4, 'Test 56');
test(binaryGap(1111111111), 5, 'Test 57');
test(binaryGap(999999937), 6, 'Test 58');
test(binaryGap(500000000), 3, 'Test 59');
test(binaryGap(31), 1, 'Test 60');
test(binaryGap(123456789), 4, 'Test 61');
test(binaryGap(1073741825), 30, 'Test 62');
test(binaryGap(33554431), 1, 'Test 63');
test(binaryGap(10011001100110011001), 5, 'Test 64');
test(binaryGap(11001100110011001100110011001100), 5, 'Test 65');

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
