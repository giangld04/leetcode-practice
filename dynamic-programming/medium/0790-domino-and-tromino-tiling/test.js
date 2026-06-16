// Test: 790. Domino And Tromino Tiling
// 30 test cases from LeetCodeDataset
// Run: node test.js

const { numTilings } = require("./solution");

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

console.log("\n790. Domino And Tromino Tiling\n");

test(numTilings(3), 5, 'Test 1');
test(numTilings(100), 190242381, 'Test 2');
test(numTilings(4), 11, 'Test 3');
test(numTilings(2), 2, 'Test 4');
test(numTilings(1), 1, 'Test 5');
test(numTilings(500), 603582422, 'Test 6');
test(numTilings(1000), 979232805, 'Test 7');
test(numTilings(10), 1255, 'Test 8');
test(numTilings(5), 24, 'Test 9');
test(numTilings(12), 6105, 'Test 10');
test(numTilings(125), 562894970, 'Test 11');
test(numTilings(50), 451995198, 'Test 12');
test(numTilings(650), 5517492, 'Test 13');
test(numTilings(300), 768506587, 'Test 14');
test(numTilings(123), 215563687, 'Test 15');
test(numTilings(550), 727269359, 'Test 16');
test(numTilings(600), 771568221, 'Test 17');
test(numTilings(450), 795340037, 'Test 18');
test(numTilings(501), 210280741, 'Test 19');
test(numTilings(700), 637136622, 'Test 20');
test(numTilings(250), 872044590, 'Test 21');
test(numTilings(999), 326038248, 'Test 22');
test(numTilings(89), 469785861, 'Test 23');
test(numTilings(20), 3418626, 'Test 24');
test(numTilings(150), 773955023, 'Test 25');
test(numTilings(800), 177362789, 'Test 26');
test(numTilings(200), 627399438, 'Test 27');
test(numTilings(400), 517656200, 'Test 28');
test(numTilings(750), 533845494, 'Test 29');
test(numTilings(6), 53, 'Test 30');

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
