// Test: 1444. Number Of Ways Of Cutting A Pizza
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { ways } = require("./solution");

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

console.log("\n1444. Number Of Ways Of Cutting A Pizza\n");

test(ways(["A","A","A"], 3), 1, 'Test 1');
test(ways(["AA","AA"], 2), 2, 'Test 2');
test(ways(["A.A","A.A","A.A"], 4), 6, 'Test 3');
test(ways(["A.."] * 50, 10), Error: Solution.ways[] missing 1 required positional argument: 'pizza', 'Test 4');
test(ways(["A.A","A.A","A.A"], 5), 0, 'Test 5');
test(ways(["...","...","...","...","...","...","AAA"], 4), 0, 'Test 6');
test(ways(["AAA","...","AAA"], 2), 4, 'Test 7');
test(ways(["A..","A..","..."], 1), 1, 'Test 8');
test(ways(["AAA","AAA","AAA"], 4), 12, 'Test 9');
test(ways(["AA.","AA.","..A"], 2), 4, 'Test 10');
test(ways(["AAA","AAA","AAA"], 2), 4, 'Test 11');
test(ways(["A..","AA.","..."], 3), 1, 'Test 12');
test(ways(["A.A",".A.","A.A"], 2), 4, 'Test 13');
test(ways(["A..","A.."], 2), 1, 'Test 14');
test(ways(["A.A","A.A"], 2), 3, 'Test 15');
test(ways(["...","...","..."], 1), 0, 'Test 16');
test(ways(["A..","AAA","..."], 3), 3, 'Test 17');
test(ways(["AAAAA","AA.AA","AA.AA","AA.AA","AAAAA"], 5), 346, 'Test 18');
test(ways(["AAAA","A.AA","AA.A","AAAA"], 4), 56, 'Test 19');
test(ways(["A.A.A","A....","A.A.A"], 3), 21, 'Test 20');
test(ways(["A.A","A.A","A.A"], 3), 9, 'Test 21');
test(ways(["A...A",".....","A...A",".....","A...A"], 3), 36, 'Test 22');
test(ways(["...A","...A","...A"], 2), 2, 'Test 23');
test(ways(["A...","....","....","A..."], 2), 3, 'Test 24');
test(ways(["A...A",".A.A.","A...A",".A.A.","A...A"], 5), 198, 'Test 25');
test(ways(["A.A",".A.","A.A"], 3), 10, 'Test 26');
test(ways(["A.A",".A.","A.A",".A.","A.A"], 3), 23, 'Test 27');
test(ways(["A..A.","A..A.","A..A.","A..A.","A..A."], 3), 30, 'Test 28');
test(ways(["AAAAAA","A...A.","A...A.","A...A.","AAAAAA"], 4), 212, 'Test 29');
test(ways(["AAAAA",".....","AAAAA",".....","AAAAA"], 3), 42, 'Test 30');
test(ways(["A...A",".....",".....","A...A"], 3), 24, 'Test 31');
test(ways(["A.A.A.A.A",".A.A.A.A.","A.A.A.A.A",".A.A.A.A.","A.A.A.A.A"], 5), 1955, 'Test 32');
test(ways(["AAAA","AAAA","AAAA","AAAA"], 5), 78, 'Test 33');
test(ways(["A.A.A","A.A.A","A.A.A"], 2), 6, 'Test 34');
test(ways(["A.A.A","A.A.A","A.A.A"], 3), 21, 'Test 35');
test(ways(["A.A.A.A","A.A.A.A","A.A.A.A"], 4), 98, 'Test 36');
test(ways(["AAAA","AAAA","AAAA"], 3), 16, 'Test 37');
test(ways(["A","A","A","A","A"], 3), 6, 'Test 38');
test(ways(["A..","...","A..","...","A.."], 3), 4, 'Test 39');
test(ways(["AA.AA","A...A","A...A","AA.AA"], 3), 32, 'Test 40');
test(ways(["A.....A","A.....A","A.....A","A.....A","A.....A"], 2), 10, 'Test 41');
test(ways(["AA.","A..",".AA"], 2), 4, 'Test 42');
test(ways(["A.A.A","A...A","A.A.A"], 3), 21, 'Test 43');
test(ways(["A....A","......","......","A....A"], 4), 0, 'Test 44');
test(ways(["AAA..","AAA..","AAA.."], 3), 10, 'Test 45');
test(ways(["...A","...A","A...","A..."], 2), 6, 'Test 46');
test(ways(["A.A.A","A.A.A","A.A.A","A.A.A","A.A.A"], 4), 124, 'Test 47');
test(ways(["A....",".....",".....",".....","A...."], 2), 4, 'Test 48');
test(ways(["A...",".A..","..A.","...A"], 4), 8, 'Test 49');
test(ways([".A.A.","A.A.A",".A.A.","A.A.A",".A.A."], 6), 256, 'Test 50');
test(ways(["AAAAA","A...A","A...A","A...A","AAAAA"], 5), 346, 'Test 51');
test(ways(["A....",".....",".....",".....","....."], 4), 0, 'Test 52');
test(ways(["A.A.A.A",".A.A.A.","A.A.A.A"], 3), 40, 'Test 53');
test(ways(["A.A.A.A","A.A.A.A","A.A.A.A","A.A.A.A","A.A.A.A","A.A.A.A","A.A.A.A","A.A.A.A"], 8), 15387, 'Test 54');
test(ways(["A...",".A.A","....","A..."], 2), 6, 'Test 55');
test(ways(["A.A.A.A",".A.A.","A.A.A.A",".A.A.","A.A.A.A"], 6), 0, 'Test 56');
test(ways(["........","...A....","........","........","........","........","........","........"], 2), 0, 'Test 57');
test(ways([".A..A.","A..A..",".A..A.","A..A..",".A..A."], 3), 42, 'Test 58');
test(ways(["A..A","....","A..A","...."], 3), 12, 'Test 59');
test(ways(["A.A.A",".A.A.","A.A.A"], 3), 23, 'Test 60');
test(ways(["A.AAA.A","AAAAAAA","AA.AAA.A","AAAAAAA","A.AAA.A"], 5), Error: list index out of range, 'Test 61');
test(ways(["A.A.A.A",".A.A.A.","A.A.A.A",".A.A.A."], 3), 51, 'Test 62');
test(ways(["AAAAA","A...A","A...A","A...A","AAAAA"], 4), 152, 'Test 63');
test(ways(["A......","A......","A......",".......",".......","......."], 2), 2, 'Test 64');
test(ways(["A.A","A.A","A.A","A.A","A.A"], 4), 40, 'Test 65');
test(ways(["A.A.A","A...A","A...A","A...A","A.A.A"], 5), 209, 'Test 66');
test(ways(["AAAAA","AAAAA",".....",".....","....."], 3), 14, 'Test 67');
test(ways(["A.A.A",".A.A.","A.A.A"], 4), 46, 'Test 68');
test(ways(["A.A.A",".....","A.A.A",".....","A.A.A"], 5), 96, 'Test 69');
test(ways(["A.A.A.A",".A.A.A.","A.A.A.A",".A.A.A.","A.A.A.A",".A.A.A.","A.A.A.A",".A.A.A."], 6), 8692, 'Test 70');
test(ways(["A.A..",".A.A.","..A.A"], 3), 17, 'Test 71');
test(ways(["A....",".A...","..A.."], 3), 4, 'Test 72');
test(ways(["A....","..A..","....A",".....","....."], 4), 0, 'Test 73');
test(ways(["A.A.A.A",".....","A.A.A.A",".....","A.A.A.A"], 5), 0, 'Test 74');
test(ways(["A......A",".......A","....A...","A........A",".......A",".......A",".......A"], 5), Error: list index out of range, 'Test 75');

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
