// Test: 1145. Binary Tree Coloring Game
// 23 test cases from LeetCodeDataset
// Run: node test.js

const { btreeGameWinningMove } = require("./solution");

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

console.log("\n1145. Binary Tree Coloring Game\n");

test(btreeGameWinningMove(x), Error: Solution.btreeGameWinningMove[] missing 3 required positional arguments: 'root', 'n', and 'x', 'Test 1');
test(btreeGameWinningMove(n), Error: Solution.btreeGameWinningMove[] missing 3 required positional arguments: 'root', 'n', and 'x', 'Test 2');
test(btreeGameWinningMove(root), Error: Solution.btreeGameWinningMove[] missing 3 required positional arguments: 'root', 'n', and 'x', 'Test 3');
test(btreeGameWinningMove([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 25, 13), true, 'Test 4');
test(btreeGameWinningMove([1,2,3,4,5], 5, 2), false, 'Test 5');
test(btreeGameWinningMove([1,2,3,4,5,6], 6, 4), true, 'Test 6');
test(btreeGameWinningMove([1,2,3,null,4,5,6], 7, 5), true, 'Test 7');
test(btreeGameWinningMove([1,2,3,4,5,6,7,8,9,10,11], 11, 3), true, 'Test 8');
test(btreeGameWinningMove([1,2,3,4,5,6,7], 7, 5), true, 'Test 9');
test(btreeGameWinningMove([1,2,3], 3, 1), false, 'Test 10');
test(btreeGameWinningMove([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 10, 5), false, 'Test 11');
test(btreeGameWinningMove([1,null,2,null,3,null,4,null,5], 5, 1), true, 'Test 12');
test(btreeGameWinningMove([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 31, 16), true, 'Test 13');
test(btreeGameWinningMove([4,2,7,1,3,6,9], 7, 4), false, 'Test 14');
test(btreeGameWinningMove([6,3,8,2,4,7,9,1,5,null,null,null,null,null,null], 9, 6), true, 'Test 15');
test(btreeGameWinningMove([1,2,3,4,5,6,7,8,9], 9, 4), true, 'Test 16');
test(btreeGameWinningMove([3,1,5,0,2,4,6], 7, 3), false, 'Test 17');
test(btreeGameWinningMove([1,2,3,4,5,6,7], 7, 4), true, 'Test 18');
test(btreeGameWinningMove([5,3,6,2,4,null,null,1], 7, 3), false, 'Test 19');
test(btreeGameWinningMove([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], 15, 7), true, 'Test 20');
test(btreeGameWinningMove([1,2,3,4,5,6,7], 7, 2), true, 'Test 21');
test(btreeGameWinningMove([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15, 8), true, 'Test 22');
test(btreeGameWinningMove([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15, 7), true, 'Test 23');

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
