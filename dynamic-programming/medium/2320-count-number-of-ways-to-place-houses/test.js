// Test: 2320. Count Number Of Ways To Place Houses
// 33 test cases from LeetCodeDataset
// Run: node test.js

const { countHousePlacements } = require("./solution");

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

console.log("\n2320. Count Number Of Ways To Place Houses\n");

test(countHousePlacements(3), 25, 'Test 1');
test(countHousePlacements(100), 20522904, 'Test 2');
test(countHousePlacements(10000), 402613600, 'Test 3');
test(countHousePlacements(2), 9, 'Test 4');
test(countHousePlacements(1), 4, 'Test 5');
test(countHousePlacements(1000), 500478595, 'Test 6');
test(countHousePlacements(10), 20736, 'Test 7');
test(countHousePlacements(4000), 984988507, 'Test 8');
test(countHousePlacements(7000), 750848153, 'Test 9');
test(countHousePlacements(2000), 329423452, 'Test 10');
test(countHousePlacements(7500), 39764836, 'Test 11');
test(countHousePlacements(50), 245481867, 'Test 12');
test(countHousePlacements(5), 169, 'Test 13');
test(countHousePlacements(3000), 511358621, 'Test 14');
test(countHousePlacements(30), 30066266, 'Test 15');
test(countHousePlacements(4), 64, 'Test 16');
test(countHousePlacements(1001), 307206160, 'Test 17');
test(countHousePlacements(8), 3025, 'Test 18');
test(countHousePlacements(250), 172820552, 'Test 19');
test(countHousePlacements(8000), 823868594, 'Test 20');
test(countHousePlacements(5000), 851109891, 'Test 21');
test(countHousePlacements(9999), 459963766, 'Test 22');
test(countHousePlacements(20), 313679521, 'Test 23');
test(countHousePlacements(15), 2550409, 'Test 24');
test(countHousePlacements(2500), 968650195, 'Test 25');
test(countHousePlacements(9000), 641644802, 'Test 26');
test(countHousePlacements(200), 450435314, 'Test 27');
test(countHousePlacements(9), 7921, 'Test 28');
test(countHousePlacements(6), 441, 'Test 29');
test(countHousePlacements(6000), 337759600, 'Test 30');
test(countHousePlacements(500), 164765197, 'Test 31');
test(countHousePlacements(7), 1156, 'Test 32');
test(countHousePlacements(25), 580030458, 'Test 33');

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
