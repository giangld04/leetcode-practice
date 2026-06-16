// Test: 779. K Th Symbol In Grammar
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { kthGrammar } = require("./solution");

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

console.log("\n779. K Th Symbol In Grammar\n");

test(kthGrammar(4, 8), 1, 'Test 1');
test(kthGrammar(5, 26), 0, 'Test 2');
test(kthGrammar(5, 21), 0, 'Test 3');
test(kthGrammar(5, 19), 0, 'Test 4');
test(kthGrammar(30, 536870912), 1, 'Test 5');
test(kthGrammar(3, 2), 1, 'Test 6');
test(kthGrammar(1, 1), 0, 'Test 7');
test(kthGrammar(30, 536870911), 0, 'Test 8');
test(kthGrammar(4, 5), 1, 'Test 9');
test(kthGrammar(5, 23), 0, 'Test 10');
test(kthGrammar(5, 20), 0, 'Test 11');
test(kthGrammar(5, 25), 0, 'Test 12');
test(kthGrammar(4, 1), 0, 'Test 13');
test(kthGrammar(5, 22), 0, 'Test 14');
test(kthGrammar(5, 29), 0, 'Test 15');
test(kthGrammar(5, 10), 0, 'Test 16');
test(kthGrammar(2, 1), 0, 'Test 17');
test(kthGrammar(3, 3), 1, 'Test 18');
test(kthGrammar(3, 4), 0, 'Test 19');
test(kthGrammar(5, 15), 1, 'Test 20');
test(kthGrammar(5, 17), 0, 'Test 21');
test(kthGrammar(5, 27), 0, 'Test 22');
test(kthGrammar(5, 30), 0, 'Test 23');
test(kthGrammar(4, 2), 1, 'Test 24');
test(kthGrammar(5, 31), 0, 'Test 25');
test(kthGrammar(5, 16), 0, 'Test 26');
test(kthGrammar(30, 1073741823), 1, 'Test 27');
test(kthGrammar(4, 3), 1, 'Test 28');
test(kthGrammar(5, 18), 0, 'Test 29');
test(kthGrammar(3, 1), 0, 'Test 30');
test(kthGrammar(5, 28), 0, 'Test 31');
test(kthGrammar(5, 24), 0, 'Test 32');
test(kthGrammar(4, 6), 0, 'Test 33');
test(kthGrammar(2, 2), 1, 'Test 34');
test(kthGrammar(4, 7), 0, 'Test 35');
test(kthGrammar(4, 4), 0, 'Test 36');
test(kthGrammar(7, 63), 1, 'Test 37');
test(kthGrammar(9, 128), 1, 'Test 38');
test(kthGrammar(19, 262144), 0, 'Test 39');
test(kthGrammar(10, 1023), 1, 'Test 40');
test(kthGrammar(18, 131071), 0, 'Test 41');
test(kthGrammar(7, 126), 0, 'Test 42');
test(kthGrammar(18, 262144), 1, 'Test 43');
test(kthGrammar(12, 2047), 0, 'Test 44');
test(kthGrammar(25, 1048575), 1, 'Test 45');
test(kthGrammar(14, 8192), 1, 'Test 46');
test(kthGrammar(6, 45), 1, 'Test 47');
test(kthGrammar(10, 511), 0, 'Test 48');
test(kthGrammar(22, 4194304), 1, 'Test 49');
test(kthGrammar(20, 524287), 0, 'Test 50');
test(kthGrammar(18, 65536), 0, 'Test 51');
test(kthGrammar(10, 350), 0, 'Test 52');
test(kthGrammar(29, 536870911), 0, 'Test 53');
test(kthGrammar(9, 255), 1, 'Test 54');
test(kthGrammar(20, 524288), 1, 'Test 55');
test(kthGrammar(15, 16383), 1, 'Test 56');
test(kthGrammar(15, 16382), 1, 'Test 57');
test(kthGrammar(15, 16384), 0, 'Test 58');
test(kthGrammar(15, 32767), 0, 'Test 59');
test(kthGrammar(7, 100), 0, 'Test 60');
test(kthGrammar(25, 33554432), 0, 'Test 61');
test(kthGrammar(10, 512), 1, 'Test 62');
test(kthGrammar(22, 2097151), 0, 'Test 63');
test(kthGrammar(20, 1048575), 1, 'Test 64');
test(kthGrammar(18, 262145), 1, 'Test 65');
test(kthGrammar(8, 129), 1, 'Test 66');
test(kthGrammar(25, 67108863), 0, 'Test 67');
test(kthGrammar(16, 65536), 1, 'Test 68');
test(kthGrammar(12, 2048), 1, 'Test 69');
test(kthGrammar(23, 8388607), 0, 'Test 70');
test(kthGrammar(18, 131072), 1, 'Test 71');
test(kthGrammar(25, 33554431), 0, 'Test 72');
test(kthGrammar(8, 255), 1, 'Test 73');
test(kthGrammar(8, 128), 1, 'Test 74');
test(kthGrammar(30, 1073741824), 1, 'Test 75');
test(kthGrammar(25, 16777215), 1, 'Test 76');
test(kthGrammar(24, 8388608), 1, 'Test 77');
test(kthGrammar(13, 4096), 0, 'Test 78');
test(kthGrammar(8, 127), 0, 'Test 79');
test(kthGrammar(9, 256), 0, 'Test 80');
test(kthGrammar(28, 268435455), 1, 'Test 81');
test(kthGrammar(20, 262144), 0, 'Test 82');
test(kthGrammar(15, 8192), 1, 'Test 83');
test(kthGrammar(6, 33), 1, 'Test 84');
test(kthGrammar(10, 256), 0, 'Test 85');
test(kthGrammar(7, 64), 0, 'Test 86');

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
