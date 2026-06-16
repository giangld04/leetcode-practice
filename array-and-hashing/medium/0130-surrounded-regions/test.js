// Test: 130. Surrounded Regions
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { solve } = require("./solution");

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

console.log("\n130. Surrounded Regions\n");

test(solve([["X","X","X","O"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]), null, 'Test 1');
test(solve([["O","X","X","O","X"],["X","X","X","X","O"],["X","X","X","O","X"],["O","X","X","X","O"],["X","O","O","X","X"]]), null, 'Test 2');
test(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]), null, 'Test 3');
test(solve([["X","X","X","X","X"],["X","O","O","O","X"],["X","O","X","O","X"],["X","O","O","O","X"],["X","X","X","X","X"]]), null, 'Test 4');
test(solve([["O","O","O"],["O","X","O"],["O","O","O"]]), null, 'Test 5');
test(solve([["O","X","X","O","X"],["X","X","X","X","X"],["X","X","X","X","X"],["X","X","X","O","O"],["X","X","O","X","X"]]), null, 'Test 6');
test(solve([["X","O","X","O"],["O","X","O","X"],["X","O","X","O"],["O","X","O","X"]]), null, 'Test 7');
test(solve([["X"]]), null, 'Test 8');
test(solve([["X","X","X","X","X","X","X"],["X","O","O","X","X","O","X"],["X","X","X","X","X","X","X"],["X","O","O","O","O","X","X"],["X","X","X","X","X","X","X"],["X","O","O","X","X","O","X"],["X","X","X","X","X","X","X"]]), null, 'Test 9');
test(solve([["X","X","X","X","X","X","X"],["X","O","O","O","O","O","X"],["X","O","X","X","X","O","X"],["X","O","X","O","X","O","X"],["X","O","X","X","X","O","X"],["X","O","O","O","O","O","X"],["X","X","X","X","X","X","X"]]), null, 'Test 10');
test(solve([["X","X","X","X","X","X","X","X"],["X","O","O","X","X","O","O","X"],["X","X","O","O","O","O","X","X"],["X","O","X","X","X","X","X","O"],["X","O","O","X","O","X","O","X"],["X","X","O","X","X","X","O","X"],["X","O","O","O","O","X","X","X"],["X","X","X","X","X","X","X","X"]]), null, 'Test 11');
test(solve([["O","X","O","X","O"],["O","O","O","O","O"],["X","O","X","O","X"],["O","O","O","O","O"],["O","X","O","X","O"]]), null, 'Test 12');
test(solve([["X","X","X","X","X","X"],["X","O","O","O","O","X"],["X","X","X","X","X","X"],["X","X","X","X","X","X"],["X","X","X","X","X","X"],["X","O","O","O","O","X"]]), null, 'Test 13');
test(solve([["X","O","O","X"],["X","O","O","X"],["X","O","O","X"],["X","X","X","X"],["X","O","X","X"]]), null, 'Test 14');
test(solve([["X","O","O","X","O","X","X"],["X","X","O","X","X","X","X"],["O","X","O","X","O","O","X"],["X","O","X","O","X","X","X"],["X","X","O","X","X","X","X"],["X","O","X","X","X","X","X"]]), null, 'Test 15');
test(solve([["X","X","X","X","X"],["X","O","X","O","X"],["X","O","O","O","X"],["X","X","X","X","X"],["X","O","O","O","X"]]), null, 'Test 16');
test(solve([["X","O","O","O","X","X"],["X","X","X","X","O","X"],["X","X","O","O","O","X"],["O","X","X","X","X","X"],["X","O","O","O","X","X"]]), null, 'Test 17');
test(solve([["X","X","X","X","X","X"],["X","O","O","O","O","X"],["X","O","X","X","O","X"],["X","O","X","X","O","X"],["X","O","O","O","O","X"],["X","X","X","X","X","X"]]), null, 'Test 18');
test(solve([["X","O","O","X"],["X","O","O","X"],["X","O","O","X"],["X","O","O","X"]]), null, 'Test 19');
test(solve([["O","O","X","O","O"],["O","O","X","O","O"],["X","X","X","X","X"],["O","O","X","O","O"],["O","O","X","O","O"]]), null, 'Test 20');
test(solve([["O","O","O","O"],["O","X","X","O"],["O","X","X","O"],["O","O","O","O"]]), null, 'Test 21');
test(solve([["X","X","X","X","X","X","X","X"],["X","O","O","O","O","O","O","X"],["X","O","X","X","X","X","O","X"],["X","O","X","O","O","X","O","X"],["X","O","X","X","X","X","O","X"],["X","O","O","O","O","O","O","X"],["X","X","X","X","X","X","X","X"]]), null, 'Test 22');
test(solve([["X","X","X","X","X","X"],["X","O","O","X","O","X"],["X","O","X","O","O","X"],["X","O","X","X","X","X"],["X","X","X","O","O","X"],["X","X","X","X","X","X"]]"), Error: Solution.solve[] missing 1 required positional argument: 'board', 'Test 23');
test(solve([["O","O","O","O"],["O","X","X","O"],["O","X","X","O"],["O","O","O","O"]]"), Error: Solution.solve[] missing 1 required positional argument: 'board', 'Test 24');
test(solve([["X","X","X","X","X","X"],["X","O","O","O","O","X"],["X","O","X","O","X","X"],["X","O","O","O","O","X"],["X","X","X","X","X","X"]]), null, 'Test 25');
test(solve([["X","X","X","X","X"],["X","O","O","O","X"],["X","X","X","X","X"],["X","X","O","O","X"],["X","X","X","X","X"]]), null, 'Test 26');
test(solve([["X","X","X","X","X"],["X","O","O","X","X"],["X","X","O","X","X"],["X","O","X","O","O"],["X","X","X","X","X"]]), null, 'Test 27');
test(solve([["X","X","X","X","X","X"],["X","O","O","O","O","X"],["X","O","X","X","O","X"],["X","O","X","O","X","X"],["X","O","O","X","O","X"],["X","X","X","X","X","X"]]), null, 'Test 28');
test(solve([["X","X","X","X","X"],["X","O","O","X","X"],["X","O","X","O","X"],["X","X","X","O","X"],["X","X","X","X","X"]]), null, 'Test 29');
test(solve([["X","O","O","X","X","X","X"],["X","O","X","O","O","O","X"],["X","O","X","O","X","O","X"],["X","X","X","X","X","X","X"],["O","X","X","O","X","O","O"],["X","X","X","X","X","X","X"]]), null, 'Test 30');
test(solve([["X","X","X","X","X","X","X","X","X"],["X","O","O","X","X","O","X","X","X"],["X","X","X","X","X","X","X","X","X"],["X","X","O","O","O","X","X","X","X"],["X","X","X","X","X","X","X","X","X"],["X","X","X","O","O","X","X","X","X"],["X","X","X","X","X","X","X","X","X"],["X","O","O","X","X","O","X","X","X"],["X","X","X","X","X","X","X","X","X"]]), null, 'Test 31');
test(solve([["X","X","X","X","X"],["X","O","O","O","X"],["X","X","X","O","X"],["X","O","O","X","X"],["X","X","X","X","X"]]"), Error: Solution.solve[] missing 1 required positional argument: 'board', 'Test 32');
test(solve([["X","X","X","X"],["X","O","O","X"],["X","O","O","X"],["X","X","X","X"],["X","O","O","X"],["X","O","O","X"],["X","X","X","X"]]), null, 'Test 33');
test(solve([["X","X","X","X","X","X","X","X"],["X","O","O","X","O","O","O","X"],["X","O","X","O","X","O","X","X"],["X","O","X","X","X","X","X","X"],["X","O","X","X","X","X","O","X"],["X","O","X","X","O","X","X","X"],["X","O","X","X","X","X","O","X"],["X","X","X","X","X","X","X","X"]]), null, 'Test 34');
test(solve([["O","O","O","O","O"],["O","X","X","X","O"],["O","X","O","X","O"],["O","X","X","X","O"],["O","O","O","O","O"]]), null, 'Test 35');
test(solve([["X","X","X","X","X","X","X"],["X","O","O","X","X","O","X"],["X","X","O","X","O","X","X"],["X","O","X","O","O","X","X"],["X","X","X","O","X","X","X"],["X","O","O","X","X","O","X"]]), null, 'Test 36');
test(solve([["X","X","X","X","X","X"],["X","O","O","O","O","X"],["X","O","X","X","O","X"],["X","O","X","O","X","X"],["X","O","O","O","O","X"],["X","X","X","X","X","X"]]), null, 'Test 37');
test(solve([["X","X","X","X","X","X"],["X","O","O","O","O","X"],["X","X","X","X","X","X"],["X","X","O","O","X","X"],["X","O","X","O","X","X"],["X","X","X","O","X","X"],["X","X","X","X","X","X"]]), null, 'Test 38');
test(solve([["X","X","X","X","X","X","X"],["X","O","O","O","O","O","X"],["X","O","X","X","X","O","X"],["X","O","X","X","X","O","X"],["X","O","X","O","X","O","X"],["X","O","X","X","X","O","X"],["X","X","O","O","O","O","X"]]), null, 'Test 39');
test(solve([["X","X","X","O","X","O"],["O","X","O","X","O","X"],["X","X","X","X","X","X"],["X","O","X","O","X","X"],["X","X","O","X","X","O"],["O","X","O","O","X","X"]]), null, 'Test 40');
test(solve([["X","O","X","X","X"],["X","O","X","O","X"],["X","O","O","O","X"],["X","X","X","X","X"],["X","X","X","X","X"]]), null, 'Test 41');
test(solve([["X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X"],["X","X","X","O","O","X","X","X"],["X","X","X","O","O","X","X","X"],["X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X"]]), null, 'Test 42');
test(solve([["X","X","X","X","X","X"],["X","O","O","X","O","X"],["X","O","X","O","X","X"],["X","X","O","X","O","X"],["X","O","X","X","X","O"],["X","X","X","X","X","X"]]), null, 'Test 43');
test(solve([["X","X","X","X","X"],["X","O","O","O","X"],["X","X","X","O","X"],["X","X","X","X","X"]]), null, 'Test 44');
test(solve([["X","O","X","X"],["O","X","O","X"],["X","O","O","X"],["X","X","X","O"],["X","O","X","X"]]), null, 'Test 45');
test(solve([["X","X","X","X","X"],["X","O","O","O","X"],["X","X","X","X","X"],["X","O","O","X","X"],["X","X","X","X","X"]]), null, 'Test 46');
test(solve([["X","X","X","X","X"],["X","O","O","O","X"],["X","X","X","O","X"],["X","O","O","O","X"],["X","X","X","X","X"]]), null, 'Test 47');
test(solve([["X","X","X","X"],["X","O","O","X"],["X","O","O","X"],["X","X","X","X"],["X","O","O","X"],["X","X","X","X"]]), null, 'Test 48');
test(solve([["X","X","X","X","X","X","X"],["X","O","O","X","O","O","X"],["X","X","O","X","O","X","X"],["X","O","X","O","O","X","O"],["X","X","X","X","X","X","X"]]), null, 'Test 49');
test(solve([["X","O","O","X","X"],["X","X","X","X","X"],["X","X","X","O","X"],["X","X","X","X","X"],["X","O","O","X","X"]]), null, 'Test 50');
test(solve([["X","X","X","X","X","X","X"],["X","O","O","O","O","O","X"],["X","O","X","X","X","O","X"],["X","O","X","O","X","O","X"],["X","O","X","X","X","O","X"],["X","O","O","O","O","O","X"],["X","X","X","X","X","X","X"]]"), Error: Solution.solve[] missing 1 required positional argument: 'board', 'Test 51');
test(solve([["X","O","X","X"],["X","O","X","X"],["X","X","O","X"],["X","O","X","X"]]"), Error: Solution.solve[] missing 1 required positional argument: 'board', 'Test 52');
test(solve([["X","O","X","O","X","O","X","O","X","O"],["O","X","O","X","O","X","O","X","O","X"],["X","O","X","O","X","O","X","O","X","O"],["O","X","O","X","O","X","O","X","O","X"],["X","O","X","O","X","O","X","O","X","O"],["O","X","O","X","O","X","O","X","O","X"],["X","O","X","O","X","O","X","O","X","O"],["O","X","O","X","O","X","O","X","O","X"]]), null, 'Test 53');
test(solve([["X","X","X","X","X","X"],["X","O","O","O","O","X"],["X","O","X","X","O","X"],["X","O","X","X","O","X"],["X","O","X","X","O","X"],["X","X","O","O","O","X"]]), null, 'Test 54');
test(solve([["O","X","X","X","X","X","X","O"],["X","X","X","O","O","X","X","X"],["X","O","X","O","X","O","X","X"],["X","X","O","X","O","X","O","X"],["X","O","X","X","X","X","X","X"],["X","X","O","X","X","X","X","X"],["X","O","X","X","X","X","O","X"],["O","X","X","X","X","X","X","O"]]), null, 'Test 55');
test(solve([["X","X","X","X","X","X","X","X"],["X","O","O","X","O","O","X","X"],["X","O","X","X","X","X","O","X"],["X","O","X","O","O","X","O","X"],["X","O","X","X","X","X","O","X"],["X","X","O","X","O","O","X","X"],["X","X","X","X","X","X","X","X"]]), null, 'Test 56');
test(solve([["X","X","X","O","X","X"],["X","O","O","X","X","X"],["X","O","X","O","X","O"],["X","X","O","X","O","X"],["X","O","X","O","X","O"],["X","O","O","X","X","X"]]), null, 'Test 57');
test(solve([["X","X","X","X","X","X"],["X","O","O","O","O","X"],["X","O","X","X","O","X"],["X","O","X","O","O","X"],["X","O","O","O","O","X"],["X","X","X","X","X","X"]]), null, 'Test 58');
test(solve([["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]]"), Error: Solution.solve[] missing 1 required positional argument: 'board', 'Test 59');
test(solve([["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"]]), null, 'Test 60');
test(solve([["O","X","O","O","X","O","X"],["O","X","X","O","O","X","X"],["X","O","X","O","X","O","X"],["X","X","X","O","O","X","O"],["X","O","X","X","X","O","X"],["O","X","X","O","O","X","O"],["X","X","X","X","X","O","X"]]), null, 'Test 61');
test(solve([["O","X","X","X","X","O"],["X","O","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","X","O","O","X","O"]]"), Error: Solution.solve[] missing 1 required positional argument: 'board', 'Test 62');
test(solve([["O","X","X","X","X","X","X","O"],["X","O","O","X","O","X","O","X"],["X","O","X","X","X","X","X","X"],["X","O","X","X","X","X","X","O"],["X","X","O","X","O","X","X","X"],["O","X","X","X","X","X","O","X"],["X","O","X","X","X","O","X","O"],["X","X","X","X","X","X","X","X"]]), null, 'Test 63');
test(solve([["X","X","X","X","X"],["X","O","O","O","X"],["X","X","O","O","X"],["X","X","X","O","X"],["X","O","X","O","X"]]), null, 'Test 64');
test(solve([["X","X","X","X","X","X","X","X"],["X","O","O","O","X","X","O","X"],["X","X","X","X","O","O","X","X"],["X","O","X","X","X","X","X","X"],["X","X","X","X","O","O","X","X"],["X","O","O","O","X","X","O","X"],["X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X"]]), null, 'Test 65');
test(solve([["X","X","X","X","X","X","X","X","X"],["X","O","O","O","O","O","O","O","X"],["X","O","X","X","X","X","X","O","X"],["X","O","X","O","O","X","O","X","X"],["X","O","X","X","X","X","O","X","X"],["X","X","O","X","O","O","X","X","X"],["X","X","X","X","X","X","X","X","X"]]), null, 'Test 66');
test(solve([["X","X","X","X","X","X","X","X","X"],["X","O","O","O","X","X","X","O","X"],["X","O","X","O","X","X","O","X","X"],["X","O","O","X","X","X","O","X","X"],["X","X","X","X","O","O","O","X","X"],["X","O","X","X","X","X","O","X","X"],["X","O","X","X","X","X","O","X","X"],["X","X","X","X","X","X","X","O","X"],["X","X","X","X","X","X","X","X","X"]]"), Error: Solution.solve[] missing 1 required positional argument: 'board', 'Test 67');
test(solve([["X","X","X","X","X","X","X"],["X","O","O","X","X","O","X"],["X","O","X","X","O","X","X"],["X","O","X","O","X","O","X"],["X","X","O","X","X","O","X"],["X","O","X","X","X","O","X"],["X","X","X","X","X","X","X"]]), null, 'Test 68');
test(solve([["X","O","X","X","X","X","X"],["X","O","O","O","X","O","X"],["X","X","O","X","O","O","X"],["X","O","X","O","X","X","X"],["X","O","O","O","X","O","X"],["X","X","X","X","X","X","X"]]), null, 'Test 69');
test(solve([["X","X","X","X","X"],["X","O","O","O","X"],["X","O","X","O","X"],["X","O","O","O","X"],["X","X","X","X","X"],["X","X","X","X","X"],["X","O","O","O","X"],["X","X","X","X","X"]]), null, 'Test 70');
test(solve([["X","X","X","X"],["X","O","O","X"],["X","O","O","X"],["X","X","X","X"],["X","O","X","X"],["X","X","X","X"]]"), Error: Solution.solve[] missing 1 required positional argument: 'board', 'Test 71');
test(solve([["X","X","X","O"],["X","O","O","O"],["X","O","X","O"],["X","O","O","X"]]), null, 'Test 72');
test(solve([["X","X","X","O"],["X","O","O","X"],["X","O","X","X"],["X","X","X","X"]]), null, 'Test 73');
test(solve([["X","X","X","X","X","X","X","X"],["X","O","O","O","X","X","X","X"],["X","O","X","O","O","X","O","X"],["X","O","O","X","X","X","O","X"],["X","X","X","X","O","O","O","X"],["X","O","X","X","X","X","O","X"],["X","O","X","X","X","X","O","X"],["X","X","X","X","X","X","X","X"]]"), Error: Solution.solve[] missing 1 required positional argument: 'board', 'Test 74');
test(solve([["O","O","X","X"],["X","X","O","O"],["X","X","O","O"],["O","O","X","X"]]), null, 'Test 75');

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
