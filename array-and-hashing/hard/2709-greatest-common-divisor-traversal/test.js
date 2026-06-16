// Test: 2709. Greatest Common Divisor Traversal
// 139 test cases from LeetCodeDataset
// Run: node test.js

const { canTraverseAllPairs } = require("./solution");

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

console.log("\n2709. Greatest Common Divisor Traversal\n");

test(canTraverseAllPairs([2,3,6]), true, 'Test 1');
test(canTraverseAllPairs([100,200,300,400]), true, 'Test 2');
test(canTraverseAllPairs([1,1,1]), false, 'Test 3');
test(canTraverseAllPairs([1,1,1,1]), false, 'Test 4');
test(canTraverseAllPairs([7,14,21,35]), true, 'Test 5');
test(canTraverseAllPairs([30,15,10,5]), true, 'Test 6');
test(canTraverseAllPairs([2,4,6,8,10]), true, 'Test 7');
test(canTraverseAllPairs([2,6,8,12,18,24]), true, 'Test 8');
test(canTraverseAllPairs([3,9,5]), false, 'Test 9');
test(canTraverseAllPairs([7,11,13,17]), false, 'Test 10');
test(canTraverseAllPairs([1]), true, 'Test 11');
test(canTraverseAllPairs([2,5,7,11,13]), false, 'Test 12');
test(canTraverseAllPairs([1,2,3,4,5]), false, 'Test 13');
test(canTraverseAllPairs([2,4,8,16]), true, 'Test 14');
test(canTraverseAllPairs([13,17,19,23,29]), false, 'Test 15');
test(canTraverseAllPairs([60,120,180,240]), true, 'Test 16');
test(canTraverseAllPairs([10,15,20,25]), true, 'Test 17');
test(canTraverseAllPairs([4,3,12,8]), true, 'Test 18');
test(canTraverseAllPairs([2,2,2,2]), true, 'Test 19');
test(canTraverseAllPairs([7,11,13,17,19]), false, 'Test 20');
test(canTraverseAllPairs([60,30,20,10]), true, 'Test 21');
test(canTraverseAllPairs([100000]), true, 'Test 22');
test(canTraverseAllPairs([5,10,15,20,25]), true, 'Test 23');
test(canTraverseAllPairs([5,10,15,20]), true, 'Test 24');
test(canTraverseAllPairs([11,22,33,44,55]), true, 'Test 25');
test(canTraverseAllPairs([3,5,7,11,13,17]), false, 'Test 26');
test(canTraverseAllPairs([30,42,70,105]), true, 'Test 27');
test(canTraverseAllPairs([7,14,28,35]), true, 'Test 28');
test(canTraverseAllPairs([100000,100000,100000,100000]), true, 'Test 29');
test(canTraverseAllPairs([2, 2, 3, 3, 5, 5, 7, 7, 11, 11, 13, 13, 17, 17, 19, 19, 23, 23, 29, 29]), false, 'Test 30');
test(canTraverseAllPairs([30,42,70,105,210]), true, 'Test 31');
test(canTraverseAllPairs([30, 42, 56, 70, 84, 98, 112, 126, 140, 154]), true, 'Test 32');
test(canTraverseAllPairs([220, 330, 440, 550, 660, 770, 880, 990, 1100, 1210]), true, 'Test 33');
test(canTraverseAllPairs([143, 169, 187, 221, 247, 299, 323, 341, 377, 391, 413, 437, 451, 473, 517, 551, 583, 611, 629, 667]), false, 'Test 34');
test(canTraverseAllPairs([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), true, 'Test 35');
test(canTraverseAllPairs([20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), false, 'Test 36');
test(canTraverseAllPairs([100000, 50000, 25000, 12500, 6250, 3125]), true, 'Test 37');
test(canTraverseAllPairs([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), true, 'Test 38');
test(canTraverseAllPairs([49,147,245,343,7203]), true, 'Test 39');
test(canTraverseAllPairs([30, 45, 60, 75, 90, 105]), true, 'Test 40');
test(canTraverseAllPairs([30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240]), true, 'Test 41');
test(canTraverseAllPairs([20,25,40,50,100]), true, 'Test 42');
test(canTraverseAllPairs([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), true, 'Test 43');
test(canTraverseAllPairs([44, 55, 66, 77, 88, 99, 110, 121]), true, 'Test 44');
test(canTraverseAllPairs([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]), true, 'Test 45');
test(canTraverseAllPairs([2048, 4096, 6144, 8192, 10240, 12288, 14336, 16384, 18432, 20480]), true, 'Test 46');
test(canTraverseAllPairs([121, 143, 169, 187, 209, 221, 247, 253]), true, 'Test 47');
test(canTraverseAllPairs([101, 103, 107, 109, 113, 127]), false, 'Test 48');
test(canTraverseAllPairs([49, 98, 147, 196, 245, 294, 343, 392, 441, 490]), true, 'Test 49');
test(canTraverseAllPairs([2*3*17, 2*5*17, 2*7*17, 3*5*17, 3*7*17, 5*7*17, 2*3*19, 2*5*19, 2*7*19, 3*5*19, 3*7*19, 5*7*19]), Error: Solution.canTraverseAllPairs[] missing 1 required positional argument: 'nums', 'Test 50');
test(canTraverseAllPairs([105, 210, 315, 420, 525, 630, 735]), true, 'Test 51');
test(canTraverseAllPairs([100, 150, 200, 250, 300, 350, 400]), true, 'Test 52');
test(canTraverseAllPairs([10, 15, 21, 35, 70, 105]), true, 'Test 53');
test(canTraverseAllPairs([101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197]), false, 'Test 54');
test(canTraverseAllPairs([30, 42, 70, 105]), true, 'Test 55');
test(canTraverseAllPairs([1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288]), false, 'Test 56');
test(canTraverseAllPairs([2,3,5,6,10,15,30]), true, 'Test 57');
test(canTraverseAllPairs([15, 30, 45, 60, 75, 90, 105, 120, 135, 150]), true, 'Test 58');
test(canTraverseAllPairs([840, 1680, 2520, 3360, 4200]), true, 'Test 59');
test(canTraverseAllPairs([42, 56, 70, 84, 98, 112, 126, 140]), true, 'Test 60');
test(canTraverseAllPairs([31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), false, 'Test 61');
test(canTraverseAllPairs([100, 200, 300, 400, 500]), true, 'Test 62');
test(canTraverseAllPairs([81, 121, 169, 225, 289, 361, 441, 529, 625, 729, 841, 961, 1089]), false, 'Test 63');
test(canTraverseAllPairs([6, 10, 15, 21, 26, 33, 35, 39, 42, 55]), true, 'Test 64');
test(canTraverseAllPairs([2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30, 31, 33]), false, 'Test 65');
test(canTraverseAllPairs([83160, 166320, 249480, 332640, 415800, 498960, 582120, 665280, 748440, 831600]), false, 'Test 66');
test(canTraverseAllPairs([12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126]), true, 'Test 67');
test(canTraverseAllPairs([25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500]), true, 'Test 68');
test(canTraverseAllPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), false, 'Test 69');
test(canTraverseAllPairs([21, 35, 70, 105]), true, 'Test 70');
test(canTraverseAllPairs([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991]), false, 'Test 71');
test(canTraverseAllPairs([14, 21, 28, 35, 42, 49, 56]), true, 'Test 72');
test(canTraverseAllPairs([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), false, 'Test 73');
test(canTraverseAllPairs([30, 45, 60, 75, 90, 105, 120, 135, 150, 165]), true, 'Test 74');
test(canTraverseAllPairs([30, 45, 60, 75, 90]), true, 'Test 75');
test(canTraverseAllPairs([99, 100, 101, 102, 103, 104, 105]), false, 'Test 76');
test(canTraverseAllPairs([84, 126, 168, 210, 252, 294, 336, 378, 420, 462, 504, 546, 588, 630, 672]), true, 'Test 77');
test(canTraverseAllPairs([101, 103, 107, 109, 113, 127, 131]), false, 'Test 78');
test(canTraverseAllPairs([6, 10, 15, 21, 25, 35]), true, 'Test 79');
test(canTraverseAllPairs([49, 98, 147, 196, 245, 294]), true, 'Test 80');
test(canTraverseAllPairs([12345,54321,67890,98765,123456,234567,345678]), false, 'Test 81');
test(canTraverseAllPairs([8, 16, 32, 64, 128, 256, 512, 1024]), true, 'Test 82');
test(canTraverseAllPairs([15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), true, 'Test 83');
test(canTraverseAllPairs([4, 6, 8, 12, 18, 24, 36, 48, 72, 144]), true, 'Test 84');
test(canTraverseAllPairs([10001, 10003, 10007, 10009, 10013, 10021, 10031, 10037, 10039, 10061]), false, 'Test 85');
test(canTraverseAllPairs([10000, 10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009]), false, 'Test 86');
test(canTraverseAllPairs([72, 108, 144, 180, 216, 252, 288, 324, 360, 396, 432, 468, 504, 540, 576]), true, 'Test 87');
test(canTraverseAllPairs([24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192]), true, 'Test 88');
test(canTraverseAllPairs([33, 55, 77, 99, 121, 143, 165, 187, 209, 231]), true, 'Test 89');
test(canTraverseAllPairs([256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]), false, 'Test 90');
test(canTraverseAllPairs([84,90,120,140,210]), true, 'Test 91');
test(canTraverseAllPairs([9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147]), false, 'Test 92');
test(canTraverseAllPairs([24, 36, 48, 60, 72, 84, 96, 108, 120]), true, 'Test 93');
test(canTraverseAllPairs([9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969, 14348907, 43046721, 129140163, 387420489, 1162261467, 3486784401, 10460353203]), Execution timed out, 'Test 94');
test(canTraverseAllPairs([3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049]), true, 'Test 95');
test(canTraverseAllPairs([2*3*5*11, 2*3*5*13, 2*3*7*11, 2*3*7*13, 2*5*7*11, 2*5*7*13, 3*5*7*11, 3*5*7*13]), Error: Solution.canTraverseAllPairs[] missing 1 required positional argument: 'nums', 'Test 96');
test(canTraverseAllPairs([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114]), false, 'Test 97');
test(canTraverseAllPairs([6, 10, 15, 30, 60, 120]), true, 'Test 98');
test(canTraverseAllPairs([210, 330, 420, 550, 660, 770, 880, 990, 1100, 1210]), true, 'Test 99');
test(canTraverseAllPairs([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), false, 'Test 100');
test(canTraverseAllPairs([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]), true, 'Test 101');
test(canTraverseAllPairs([210, 231, 273, 308, 330, 364]), true, 'Test 102');
test(canTraverseAllPairs([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195]), true, 'Test 103');
test(canTraverseAllPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), false, 'Test 104');
test(canTraverseAllPairs([49, 441, 729, 1029, 1323, 1681, 2079, 2521, 2997, 3529, 4041, 4561]), false, 'Test 105');
test(canTraverseAllPairs([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), false, 'Test 106');
test(canTraverseAllPairs([15, 25, 35, 45, 55]), true, 'Test 107');
test(canTraverseAllPairs([2310, 2730, 2310, 2730, 2310, 2730, 2310, 2730, 2310, 2730]), true, 'Test 108');
test(canTraverseAllPairs([2*3*5, 2*3*7, 2*5*7, 3*5*7, 2*3*5*7, 2*3*11, 2*5*11, 2*7*11, 3*5*11, 3*7*11, 5*7*11]), Error: Solution.canTraverseAllPairs[] missing 1 required positional argument: 'nums', 'Test 109');
test(canTraverseAllPairs([18,24,30,36,42,48,54,60]), true, 'Test 110');
test(canTraverseAllPairs([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]), false, 'Test 111');
test(canTraverseAllPairs([15, 21, 35, 105]), true, 'Test 112');
test(canTraverseAllPairs([42, 77, 105, 140, 175, 210, 245, 280, 315, 350]), true, 'Test 113');
test(canTraverseAllPairs([21,35,49,63,105]), true, 'Test 114');
test(canTraverseAllPairs([48, 72, 108, 144, 180, 216]), true, 'Test 115');
test(canTraverseAllPairs([18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102]), true, 'Test 116');
test(canTraverseAllPairs([100, 101, 102, 103, 104, 105, 106, 107, 108, 109]), false, 'Test 117');
test(canTraverseAllPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), false, 'Test 118');
test(canTraverseAllPairs([84, 126, 168, 210, 252, 294, 336, 378, 420, 462]), true, 'Test 119');
test(canTraverseAllPairs([210, 420, 630, 840, 1050, 1260, 1470, 1680, 1890, 2100, 2310, 2520, 2730, 2940, 3150, 3360, 3570, 3780, 3990, 4200]), true, 'Test 120');
test(canTraverseAllPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), false, 'Test 121');
test(canTraverseAllPairs([97*101, 97*103, 97*107, 97*109, 97*113, 101*103, 101*107, 101*109, 101*113, 103*107, 103*109, 103*113]), Error: Solution.canTraverseAllPairs[] missing 1 required positional argument: 'nums', 'Test 122');
test(canTraverseAllPairs([36, 48, 60, 72, 84, 96, 108, 120, 132, 144]), true, 'Test 123');
test(canTraverseAllPairs([210, 154, 385, 770]), true, 'Test 124');
test(canTraverseAllPairs([315, 630, 945, 1260, 1575, 1890, 2205, 2520, 2835, 3150]), true, 'Test 125');
test(canTraverseAllPairs([44, 88, 132, 176, 220]), true, 'Test 126');
test(canTraverseAllPairs([12, 15, 20, 25, 30, 35, 40, 45, 50, 60]), true, 'Test 127');
test(canTraverseAllPairs([1, 1, 1, 1, 1]), false, 'Test 128');
test(canTraverseAllPairs([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), true, 'Test 129');
test(canTraverseAllPairs([9, 27, 81, 243, 729, 2187, 6561, 19683]), true, 'Test 130');
test(canTraverseAllPairs([100000,50000,25000,12500,6250,3125]), true, 'Test 131');
test(canTraverseAllPairs([101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173]), false, 'Test 132');
test(canTraverseAllPairs([5, 10, 15, 20, 25, 30, 35, 40]), true, 'Test 133');
test(canTraverseAllPairs([2,3,5,7,11,13,17,19,23,29]), false, 'Test 134');
test(canTraverseAllPairs([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010]), true, 'Test 135');
test(canTraverseAllPairs([6, 15, 10, 30, 21, 42, 70, 105, 140, 210]), true, 'Test 136');
test(canTraverseAllPairs([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), true, 'Test 137');
test(canTraverseAllPairs([4,6,8,9,10,12,14,15,16,18,20]), true, 'Test 138');
test(canTraverseAllPairs([2, 3, 5, 7, 11, 13, 17, 19]), false, 'Test 139');

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
