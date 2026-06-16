// Test: 2698. Find The Punishment Number Of An Integer
// 21 test cases from LeetCodeDataset
// Run: node test.js

const { punishmentNumber } = require("./solution");

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

console.log("\n2698. Find The Punishment Number Of An Integer\n");

test(punishmentNumber(700), 1660140, 'Test 1');
test(punishmentNumber(800), 3353149, 'Test 2');
test(punishmentNumber(100), 41334, 'Test 3');
test(punishmentNumber(600), 772866, 'Test 4');
test(punishmentNumber(37), 1478, 'Test 5');
test(punishmentNumber(200), 41334, 'Test 6');
test(punishmentNumber(400), 601470, 'Test 7');
test(punishmentNumber(900), 3353149, 'Test 8');
test(punishmentNumber(9), 82, 'Test 9');
test(punishmentNumber(2), 1, 'Test 10');
test(punishmentNumber(25), 182, 'Test 11');
test(punishmentNumber(1), 1, 'Test 12');
test(punishmentNumber(500), 772866, 'Test 13');
test(punishmentNumber(1000), 10804657, 'Test 14');
test(punishmentNumber(10), 182, 'Test 15');
test(punishmentNumber(300), 184768, 'Test 16');
test(punishmentNumber(50), 3503, 'Test 17');
test(punishmentNumber(625), 772866, 'Test 18');
test(punishmentNumber(999), 9804657, 'Test 19');
test(punishmentNumber(750), 2154349, 'Test 20');
test(punishmentNumber(150), 41334, 'Test 21');

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
