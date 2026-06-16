// Test: 2056. Number Of Valid Move Combinations On Chessboard
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { countCombinations } = require("./solution");

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

console.log("\n2056. Number Of Valid Move Combinations On Chessboard\n");

test(countCombinations(["bishop"], [[4,3]]), 12, 'Test 1');
test(countCombinations(["queen", "rook"], [[1,1], [2,2]]), 309, 'Test 2');
test(countCombinations(["rook", "rook"], [[1,1], [8,8]]), 223, 'Test 3');
test(countCombinations(["queen", "rook"], [[2,2], [5,5]]), 340, 'Test 4');
test(countCombinations(["rook", "queen", "bishop"], [[1,1], [5,5], [8,8]]), 2907, 'Test 5');
test(countCombinations(["rook", "queen", "bishop"], [[1,1], [2,2], [3,3]]), 3289, 'Test 6');
test(countCombinations(["rook", "rook"], [[1,1], [1,3]]), 189, 'Test 7');
test(countCombinations(["rook"], [[1,1]]), 15, 'Test 8');
test(countCombinations(["rook", "bishop"], [[1,1], [4,3]]), 173, 'Test 9');
test(countCombinations(["bishop", "bishop"], [[2,2], [7,7]]), 80, 'Test 10');
test(countCombinations(["bishop", "bishop"], [[2,2], [6,6]]), 84, 'Test 11');
test(countCombinations(["queen", "bishop"], [[1,1], [4,4]]), 280, 'Test 12');
test(countCombinations(["bishop", "rook", "bishop"], [[3,4], [5,5], [7,6]]), 1265, 'Test 13');
test(countCombinations(["queen"], [[1,1]]), 22, 'Test 14');
test(countCombinations(["rook", "bishop"], [[1,1], [4,4]]), 205, 'Test 15');
test(countCombinations(["rook", "queen", "bishop"], [[1,1], [5,5], [4,3]]), 4421, 'Test 16');
test(countCombinations(["queen", "rook", "bishop"], [[1,1], [2,2], [4,3]]), 3161, 'Test 17');
test(countCombinations(["rook", "bishop", "rook", "bishop"], [[1,1], [2,2], [3,3], [4,4]]), 16893, 'Test 18');
test(countCombinations(["queen", "rook"], [[1,1], [8,8]]), 327, 'Test 19');
test(countCombinations(["queen", "rook", "rook"], [[1,1], [8,8], [1,8]]), 4163, 'Test 20');
test(countCombinations(["rook", "queen", "bishop"], [[3,3], [5,5], [7,2]]), 3589, 'Test 21');
test(countCombinations(["queen", "bishop", "bishop"], [[1,1], [8,8], [1,8]]), 1232, 'Test 22');
test(countCombinations(["queen", "rook", "bishop", "rook"], [[1,1], [1,8], [8,1], [8,8]]), 32176, 'Test 23');
test(countCombinations(["queen", "rook", "bishop", "rook"], [[1,1], [8,8], [3,3], [6,6]]), 44166, 'Test 24');
test(countCombinations(["queen", "queen"], [[3,3], [6,6]]), 638, 'Test 25');
test(countCombinations(["rook", "rook", "rook", "rook"], [[1,1], [1,8], [8,1], [8,8]]), 33009, 'Test 26');
test(countCombinations(["bishop", "bishop", "rook", "rook"], [[1,1], [8,8], [4,4], [5,5]]), 7561, 'Test 27');
test(countCombinations(["queen", "bishop", "rook", "bishop"], [[1,1], [8,8], [4,4], [4,1]]), 15440, 'Test 28');
test(countCombinations(["rook", "rook", "rook"], [[1,1], [1,8], [8,1]]), 2753, 'Test 29');
test(countCombinations(["rook", "queen", "bishop", "rook"], [[1,1], [8,8], [4,4], [2,2]]), 51937, 'Test 30');
test(countCombinations(["rook", "queen", "bishop", "rook"], [[1,1], [5,5], [8,8], [8,1]]), 38251, 'Test 31');
test(countCombinations(["queen", "rook", "rook", "bishop"], [[1,1], [1,8], [8,1], [8,8]]), 29034, 'Test 32');
test(countCombinations(["queen", "queen", "rook"], [[3,3], [4,4], [2,2]]), 8446, 'Test 33');
test(countCombinations(["queen", "bishop", "rook", "rook"], [[1,1], [8,8], [1,8], [8,1]]), 29034, 'Test 34');
test(countCombinations(["queen", "rook"], [[4,4], [7,7]]), 400, 'Test 35');
test(countCombinations(["rook", "rook", "bishop"], [[1,1], [8,8], [4,4]]), 3034, 'Test 36');
test(countCombinations(["queen", "rook", "bishop"], [[2,2], [7,7], [3,8]]), 2590, 'Test 37');
test(countCombinations(["rook", "rook"], [[4,4], [5,5]]), 193, 'Test 38');
test(countCombinations(["rook", "queen", "bishop"], [[1,4], [4,4], [7,4]]), 3784, 'Test 39');
test(countCombinations(["rook", "bishop", "queen"], [[1,1], [8,8], [4,4]]), 2681, 'Test 40');
test(countCombinations(["bishop", "bishop", "bishop", "bishop"], [[2,2], [2,7], [7,2], [7,7]]), 6400, 'Test 41');
test(countCombinations(["queen", "bishop", "rook"], [[8,1], [1,8], [4,4]]), 2110, 'Test 42');
test(countCombinations(["queen", "bishop", "rook"], [[2,2], [3,3], [5,5]]), 3484, 'Test 43');
test(countCombinations(["bishop", "rook", "queen", "rook"], [[3,3], [4,4], [5,5], [6,6]]), 44433, 'Test 44');
test(countCombinations(["queen", "bishop", "bishop"], [[1,1], [3,3], [6,6]]), 2162, 'Test 45');
test(countCombinations(["rook", "queen", "rook", "bishop"], [[1,1], [5,5], [8,1], [1,8]]), 41166, 'Test 46');
test(countCombinations(["rook", "rook", "queen"], [[1,1], [1,8], [8,8]]), 4163, 'Test 47');
test(countCombinations(["bishop", "rook", "queen"], [[3,3], [4,3], [3,4]]), 3142, 'Test 48');
test(countCombinations(["rook", "rook", "bishop", "bishop"], [[1,2], [1,7], [2,1], [2,8]]), 10952, 'Test 49');
test(countCombinations(["bishop", "rook", "rook", "bishop"], [[1,2], [3,3], [6,7], [8,6]]), 10473, 'Test 50');
test(countCombinations(["rook", "bishop", "bishop", "queen"], [[1,1], [2,2], [3,3], [4,4]]), 26725, 'Test 51');
test(countCombinations(["queen", "rook", "bishop"], [[1,1], [8,8], [4,4]]), 4145, 'Test 52');
test(countCombinations(["bishop", "rook", "queen", "rook"], [[1,8], [2,2], [5,5], [8,1]]), 42649, 'Test 53');
test(countCombinations(["queen", "rook", "bishop", "rook"], [[1,1], [2,2], [3,3], [4,4]]), 35461, 'Test 54');
test(countCombinations(["rook", "rook", "rook"], [[1,1], [2,2], [3,3]]), 2709, 'Test 55');
test(countCombinations(["rook", "bishop"], [[2,2], [3,6]]), 172, 'Test 56');
test(countCombinations(["queen", "queen"], [[1,1], [8,8]]), 462, 'Test 57');
test(countCombinations(["rook", "bishop"], [[1,1], [8,1]]), 118, 'Test 58');
test(countCombinations(["queen", "rook", "bishop"], [[1,1], [2,2], [3,3]]), 2842, 'Test 59');
test(countCombinations(["bishop", "bishop", "rook", "rook"], [[2,2], [7,7], [1,1], [8,8]]), 13998, 'Test 60');
test(countCombinations(["queen", "bishop", "bishop", "rook"], [[4,4], [3,3], [6,6], [1,1]]), 39585, 'Test 61');
test(countCombinations(["rook", "rook", "rook"], [[1,1], [8,8], [4,4]]), 3079, 'Test 62');
test(countCombinations(["queen", "rook", "bishop"], [[1,1], [4,5], [8,2]]), 2308, 'Test 63');
test(countCombinations(["bishop", "bishop"], [[3,3], [6,6]]), 124, 'Test 64');
test(countCombinations(["bishop", "rook", "rook"], [[1,1], [8,1], [8,8]]), 1600, 'Test 65');
test(countCombinations(["rook", "rook", "bishop", "queen"], [[1,1], [8,8], [3,3], [6,6]]), 56730, 'Test 66');
test(countCombinations(["rook", "bishop", "rook"], [[2,2], [3,3], [4,4]]), 2185, 'Test 67');
test(countCombinations(["queen", "rook", "rook"], [[1,1], [5,5], [5,6]]), 4182, 'Test 68');
test(countCombinations(["rook", "rook", "bishop", "bishop"], [[1,1], [1,8], [8,1], [8,8]]), 12485, 'Test 69');
test(countCombinations(["queen", "rook", "rook"], [[4,4], [1,1], [8,8]]), 5890, 'Test 70');
test(countCombinations(["bishop", "bishop", "rook"], [[2,2], [7,7], [1,8]]), 1112, 'Test 71');
test(countCombinations(["bishop", "bishop", "rook", "rook"], [[1,1], [1,8], [8,1], [8,8]]), 12485, 'Test 72');
test(countCombinations(["bishop", "rook", "rook", "queen"], [[4,4], [1,1], [1,8], [8,8]]), 49107, 'Test 73');
test(countCombinations(["queen", "rook", "bishop", "rook"], [[3,3], [5,5], [2,2], [6,6]]), 37434, 'Test 74');
test(countCombinations(["queen", "bishop"], [[2,2], [7,7]]), 220, 'Test 75');
test(countCombinations(["queen", "queen", "queen"], [[2,2], [3,3], [4,4]]), 13103, 'Test 76');
test(countCombinations(["queen", "bishop"], [[1,1], [8,8]]), 156, 'Test 77');
test(countCombinations(["queen", "queen"], [[2,2], [7,7]]), 548, 'Test 78');
test(countCombinations(["bishop", "bishop", "rook", "rook"], [[2,2], [3,3], [6,6], [7,7]]), 18260, 'Test 79');
test(countCombinations(["rook", "bishop", "queen"], [[3,3], [6,6], [5,5]]), 4230, 'Test 80');
test(countCombinations(["rook", "bishop", "rook", "bishop"], [[1,1], [8,8], [2,2], [7,7]]), 10336, 'Test 81');
test(countCombinations(["queen", "rook", "rook"], [[1,1], [1,8], [8,1]]), 4286, 'Test 82');
test(countCombinations(["queen", "rook"], [[4,4], [8,1]]), 412, 'Test 83');
test(countCombinations(["rook", "rook", "rook", "rook", "bishop"], [[1,1], [1,8], [8,1], [8,8], [4,4]]), 437408, 'Test 84');
test(countCombinations(["rook", "rook", "queen", "bishop"], [[1,1], [8,8], [4,4], [5,5]]), 74604, 'Test 85');
test(countCombinations(["queen", "rook", "rook"], [[5,5], [1,1], [8,8]]), 5890, 'Test 86');
test(countCombinations(["bishop", "bishop", "rook"], [[2,2], [7,7], [4,4]]), 1150, 'Test 87');
test(countCombinations(["queen", "rook", "bishop"], [[4,4], [1,1], [8,8]]), 2681, 'Test 88');
test(countCombinations(["queen", "bishop", "rook"], [[3,3], [6,6], [1,1]]), 4107, 'Test 89');
test(countCombinations(["queen", "queen"], [[1,2], [8,7]]), 476, 'Test 90');
test(countCombinations(["queen", "queen"], [[2,3], [3,2]]), 518, 'Test 91');
test(countCombinations(["bishop", "bishop"], [[1,1], [8,8]]), 44, 'Test 92');
test(countCombinations(["bishop", "bishop", "bishop"], [[2,2], [5,5], [8,8]]), 460, 'Test 93');
test(countCombinations(["rook", "rook"], [[1,1], [1,8]]), 205, 'Test 94');
test(countCombinations(["rook", "rook", "bishop"], [[1,1], [8,1], [4,4]]), 2764, 'Test 95');
test(countCombinations(["queen", "queen", "rook"], [[1,1], [8,8], [4,4]]), 6380, 'Test 96');
test(countCombinations(["rook", "queen", "bishop", "rook"], [[1,1], [2,2], [3,3], [4,4]]), 41894, 'Test 97');
test(countCombinations(["queen", "rook"], [[1,1], [8,1]]), 309, 'Test 98');
test(countCombinations(["bishop", "bishop", "bishop"], [[2,3], [4,5], [6,7]]), 728, 'Test 99');
test(countCombinations(["bishop", "bishop", "bishop"], [[2,2], [4,4], [6,6]]), 792, 'Test 100');

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
