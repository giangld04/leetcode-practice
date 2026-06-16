// Test: 1290. Convert Binary Number In A Linked List To Integer
// 61 test cases from LeetCodeDataset
// Run: node test.js

const { getDecimalValue } = require("./solution");

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

console.log("\n1290. Convert Binary Number In A Linked List To Integer\n");

test(getDecimalValue([1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0]), 1648386068, 'Test 1');
test(getDecimalValue([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]), 18880, 'Test 2');
test(getDecimalValue([1,0,0,1,1,0,1]), 77, 'Test 3');
test(getDecimalValue([0]), 0, 'Test 4');
test(getDecimalValue([1,0,0,1,0,1]), 37, 'Test 5');
test(getDecimalValue([1,1,0,0]), 12, 'Test 6');
test(getDecimalValue([1]), 1, 'Test 7');
test(getDecimalValue([1,1,0,0,1,1,1,0,1,0]), 826, 'Test 8');
test(getDecimalValue([1,0,1]), 5, 'Test 9');
test(getDecimalValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 2147483647, 'Test 10');
test(getDecimalValue([1,0,0,1,0]), 18, 'Test 11');
test(getDecimalValue([1,1,1]), 7, 'Test 12');
test(getDecimalValue([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1073741825, 'Test 13');
test(getDecimalValue([1,1,1,1]), 15, 'Test 14');
test(getDecimalValue([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0]), 954437176, 'Test 15');
test(getDecimalValue([1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 648719018, 'Test 16');
test(getDecimalValue([0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 134217728, 'Test 17');
test(getDecimalValue([1,0,1,1,0,1,1,0,1]), 365, 'Test 18');
test(getDecimalValue([1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0]), 1304806852, 'Test 19');
test(getDecimalValue([1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 984263338, 'Test 20');
test(getDecimalValue([1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 894784853, 'Test 21');
test(getDecimalValue([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1]), 715827883, 'Test 22');
test(getDecimalValue([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 23');
test(getDecimalValue([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0]), 1431655766, 'Test 24');
test(getDecimalValue([1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 939524097, 'Test 25');
test(getDecimalValue([1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0]), 920350134, 'Test 26');
test(getDecimalValue([1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0]), 969831324, 'Test 27');
test(getDecimalValue([0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]), 536870910, 'Test 28');
test(getDecimalValue([1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0]), 900557658, 'Test 29');
test(getDecimalValue([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]), 3, 'Test 30');
test(getDecimalValue([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 536870912, 'Test 31');
test(getDecimalValue([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 715827882, 'Test 32');
test(getDecimalValue([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 214748364, 'Test 33');
test(getDecimalValue([1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0]), 899337574, 'Test 34');
test(getDecimalValue([1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]), 843654290, 'Test 35');
test(getDecimalValue([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]), 3, 'Test 36');
test(getDecimalValue([1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]), 966367641, 'Test 37');
test(getDecimalValue([1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 760567125, 'Test 38');
test(getDecimalValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1073741823, 'Test 39');
test(getDecimalValue([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 357913941, 'Test 40');
test(getDecimalValue([1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 939524096, 'Test 41');
test(getDecimalValue([0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1]), 178956971, 'Test 42');
test(getDecimalValue([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0]), 644245094, 'Test 43');
test(getDecimalValue([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1]), 715827883, 'Test 44');
test(getDecimalValue([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]), 429496729, 'Test 45');
test(getDecimalValue([1,0,1,1,0,1,1,1,0,1]), 733, 'Test 46');
test(getDecimalValue([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), 858993459, 'Test 47');
test(getDecimalValue([1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0]), 1010580540, 'Test 48');
test(getDecimalValue([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 536870913, 'Test 49');
test(getDecimalValue([1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]), 697932185, 'Test 50');
test(getDecimalValue([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 1431655765, 'Test 51');
test(getDecimalValue([1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0]), 900310682, 'Test 52');
test(getDecimalValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]), 4294967292, 'Test 53');
test(getDecimalValue([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]), 613566756, 'Test 54');
test(getDecimalValue([1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0]), 692736660, 'Test 55');
test(getDecimalValue([0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0]), 107374182, 'Test 56');
test(getDecimalValue([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 57');
test(getDecimalValue([0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]), 143165576, 'Test 58');
test(getDecimalValue([1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1]), 769045933, 'Test 59');
test(getDecimalValue([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]), 3, 'Test 60');
test(getDecimalValue([1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1]), 1002159035, 'Test 61');

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
