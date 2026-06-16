// Test: 995. Minimum Number Of K Consecutive Bit Flips
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { minKBitFlips } = require("./solution");

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

console.log("\n995. Minimum Number Of K Consecutive Bit Flips\n");

test(minKBitFlips([0,0,1,1,0,1,1,0,1,0], 2), -1, 'Test 1');
test(minKBitFlips([0,0,0,0,0,0,0,0,0], 3), 3, 'Test 2');
test(minKBitFlips([1,0,1,0,1,0,1,0], 4), 4, 'Test 3');
test(minKBitFlips([1,0,0,1,0,0,1], 4), -1, 'Test 4');
test(minKBitFlips([1,0,0,1,0,1], 2), -1, 'Test 5');
test(minKBitFlips([1,1,1,1,1,1,1,1], 5), 0, 'Test 6');
test(minKBitFlips([1,1,0], 2), -1, 'Test 7');
test(minKBitFlips([1,0,0,1,1,0,1], 2), -1, 'Test 8');
test(minKBitFlips([0,0,0,0,0], 2), -1, 'Test 9');
test(minKBitFlips([0,0,0,1,0,1,1,0], 3), 3, 'Test 10');
test(minKBitFlips([1,1,1,1,1], 2), 0, 'Test 11');
test(minKBitFlips([1,0,1,1,0,0,1,1,1,0], 4), -1, 'Test 12');
test(minKBitFlips([0,0,0,0,0], 5), 1, 'Test 13');
test(minKBitFlips([1,0,1,0,1,0], 2), -1, 'Test 14');
test(minKBitFlips([0,0,0,0,0,0,0,0], 2), 4, 'Test 15');
test(minKBitFlips([1,1,1,1,1], 1), 0, 'Test 16');
test(minKBitFlips([0,0,1,1,0,0,1,1,0], 4), -1, 'Test 17');
test(minKBitFlips([0,1,1,1,0,1,0,0,1,1], 3), 4, 'Test 18');
test(minKBitFlips([0,1,0], 1), 2, 'Test 19');
test(minKBitFlips([1,0,0,1,0,1,0,1], 2), 3, 'Test 20');
test(minKBitFlips([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0], 8), 4, 'Test 21');
test(minKBitFlips([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 0, 'Test 22');
test(minKBitFlips([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 3), 4, 'Test 23');
test(minKBitFlips([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 3), 15, 'Test 24');
test(minKBitFlips([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 0, 'Test 25');
test(minKBitFlips([1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1], 6), 1, 'Test 26');
test(minKBitFlips([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 9), 0, 'Test 27');
test(minKBitFlips([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5), -1, 'Test 28');
test(minKBitFlips([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 7), 0, 'Test 29');
test(minKBitFlips([0,0,1,0,1,0,0,1,0,1,1,0,1,1,0], 4), 8, 'Test 30');
test(minKBitFlips([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5), 6, 'Test 31');
test(minKBitFlips([1,1,0,0,1,0,1,0,0,1], 4), -1, 'Test 32');
test(minKBitFlips([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 5), 10, 'Test 33');
test(minKBitFlips([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 15), -1, 'Test 34');
test(minKBitFlips([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 5), -1, 'Test 35');
test(minKBitFlips([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1], 5), -1, 'Test 36');
test(minKBitFlips([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1], 4), -1, 'Test 37');
test(minKBitFlips([1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0], 5), 6, 'Test 38');
test(minKBitFlips([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5), -1, 'Test 39');
test(minKBitFlips([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 5), -1, 'Test 40');
test(minKBitFlips([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 8), -1, 'Test 41');
test(minKBitFlips([0,0,1,1,0,1,1,1,0,0,1], 5), -1, 'Test 42');
test(minKBitFlips([0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0], 3), -1, 'Test 43');
test(minKBitFlips([0,0,0,0,1,1,1,1,0,0,0,0], 5), -1, 'Test 44');
test(minKBitFlips([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 5), 10, 'Test 45');
test(minKBitFlips([0,1,1,0,0,1,1,0,0,1], 4), -1, 'Test 46');
test(minKBitFlips([0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0], 5), 9, 'Test 47');
test(minKBitFlips([0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0], 5), -1, 'Test 48');
test(minKBitFlips([0,0,1,0,0,1,0,1,0,0], 3), -1, 'Test 49');
test(minKBitFlips([0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 4), -1, 'Test 50');
test(minKBitFlips([0,1,0,1,0,1,0,1,0,1,0,1], 3), 6, 'Test 51');
test(minKBitFlips([1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0], 4), 2, 'Test 52');
test(minKBitFlips([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 6), -1, 'Test 53');
test(minKBitFlips([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 4), -1, 'Test 54');
test(minKBitFlips([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 2), 10, 'Test 55');
test(minKBitFlips([0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0], 3), 8, 'Test 56');
test(minKBitFlips([1,1,0,0,1,1,0,0,1,1,0,0,1,1], 4), -1, 'Test 57');
test(minKBitFlips([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 2), 8, 'Test 58');
test(minKBitFlips([1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0], 6), -1, 'Test 59');
test(minKBitFlips([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 7), -1, 'Test 60');
test(minKBitFlips([0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1], 6), -1, 'Test 61');
test(minKBitFlips([0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0], 7), -1, 'Test 62');
test(minKBitFlips([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 15), -1, 'Test 63');
test(minKBitFlips([1,1,0,0,1,1,0,0,1,1,0,0], 4), -1, 'Test 64');
test(minKBitFlips([0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1], 10), -1, 'Test 65');
test(minKBitFlips([1,1,1,0,0,1,0,1,0,0], 3), 3, 'Test 66');
test(minKBitFlips([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 0, 'Test 67');
test(minKBitFlips([1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1], 4), 3, 'Test 68');
test(minKBitFlips([1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0], 5), -1, 'Test 69');
test(minKBitFlips([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0], 3), -1, 'Test 70');
test(minKBitFlips([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 10), -1, 'Test 71');
test(minKBitFlips([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 7), -1, 'Test 72');
test(minKBitFlips([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1], 4), 2, 'Test 73');
test(minKBitFlips([0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0], 5), -1, 'Test 74');
test(minKBitFlips([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 7), 21, 'Test 75');
test(minKBitFlips([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0], 5), -1, 'Test 76');
test(minKBitFlips([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 10), -1, 'Test 77');
test(minKBitFlips([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 7), -1, 'Test 78');
test(minKBitFlips([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 2), -1, 'Test 79');
test(minKBitFlips([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 10), 2, 'Test 80');
test(minKBitFlips([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 5), -1, 'Test 81');
test(minKBitFlips([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 3), -1, 'Test 82');
test(minKBitFlips([1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1], 8), -1, 'Test 83');
test(minKBitFlips([1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0], 6), -1, 'Test 84');
test(minKBitFlips([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 9), -1, 'Test 85');
test(minKBitFlips([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5), 4, 'Test 86');
test(minKBitFlips([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 10), 3, 'Test 87');
test(minKBitFlips([1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1], 4), -1, 'Test 88');
test(minKBitFlips([0,1,0,1,0,1,0,1,0,1], 3), -1, 'Test 89');
test(minKBitFlips([1,1,0,0,1,1,0,1,0,0,1], 3), -1, 'Test 90');
test(minKBitFlips([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 7), 3, 'Test 91');
test(minKBitFlips([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 7), 0, 'Test 92');
test(minKBitFlips([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 4), -1, 'Test 93');
test(minKBitFlips([0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 6), -1, 'Test 94');
test(minKBitFlips([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 8), -1, 'Test 95');
test(minKBitFlips([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], 2), 4, 'Test 96');
test(minKBitFlips([0,0,1,1,0,0,1,1,0,0,1,1], 4), -1, 'Test 97');
test(minKBitFlips([0,0,1,1,0,0,1,1,0,0], 3), 6, 'Test 98');
test(minKBitFlips([0,0,1,1,0,0,1,0,0,1], 3), -1, 'Test 99');
test(minKBitFlips([0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0], 7), -1, 'Test 100');

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
