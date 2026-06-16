// Test: 2055. Plates Between Candles
// 14 test cases from LeetCodeDataset
// Run: node test.js

const { platesBetweenCandles } = require("./solution");

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

console.log("\n2055. Plates Between Candles\n");

test(platesBetweenCandles("**|**|***|", [[2,5],[5,9]]), [2, 3], 'Test 1');
test(platesBetweenCandles("***||***", [[0,5],[2,4]]), [0, 0], 'Test 2');
test(platesBetweenCandles("*|*|*|*|*|*|*|", [[0,7],[1,6],[2,5]]), [3, 2, 1], 'Test 3');
test(platesBetweenCandles("|||***|||", [[0,8],[1,7],[2,6]]), [3, 3, 3], 'Test 4');
test(platesBetweenCandles("||*|*|*|*|*|*|", [[0,10],[1,9],[2,8],[3,7]]), [4, 4, 2, 2], 'Test 5');
test(platesBetweenCandles("|||****|****|****||", [[0,10],[5,15],[1,4]]), [4, 4, 0], 'Test 6');
test(platesBetweenCandles("*|*|*|*|*|", [[0,5],[1,4]]), [2, 1], 'Test 7');
test(platesBetweenCandles("|*|*|*|*|*|*|*|*|*|*|", [[0,10],[1,9],[2,8],[3,7]]), [5, 3, 3, 1], 'Test 8');
test(platesBetweenCandles("|||*****|||", [[0,2],[3,8],[7,10]]), [0, 0, 0], 'Test 9');
test(platesBetweenCandles("*|*|*|*|*|*|*|*|*|*|*|", [[0,11],[1,10],[2,9],[3,8]]), [5, 4, 3, 2], 'Test 10');
test(platesBetweenCandles("*|*|*|*|*|*|*|*|*|*|", [[0,10],[1,9],[2,8],[3,7]]), [4, 4, 2, 2], 'Test 11');
test(platesBetweenCandles("***|**|*****|**||**|*", [[1,17],[4,5],[14,17],[5,11],[15,16]]), [9, 0, 0, 0, 0], 'Test 12');
test(platesBetweenCandles("|**|*|**|****|**, [[0,20],[3,10],[10,15]]), Error: Solution.platesBetweenCandles[] missing 1 required positional argument: 's', 'Test 13');
test(platesBetweenCandles("***||****|**|", [[0,4],[5,8],[9,11]]), [0, 0, 0], 'Test 14');

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
