// Test: 1039. Minimum Score Triangulation Of Polygon
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { minScoreTriangulation } = require("./solution");

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

console.log("\n1039. Minimum Score Triangulation Of Polygon\n");

test(minScoreTriangulation([10,1,1,10]), 110, 'Test 1');
test(minScoreTriangulation([10,9,8,7,6,5,4,3,2,1]), 328, 'Test 2');
test(minScoreTriangulation([3,1,2,4,5,6]), 76, 'Test 3');
test(minScoreTriangulation([10,1,20,2,30,3,40,4]), 510, 'Test 4');
test(minScoreTriangulation([1,5,11,7,10,2,12,8]), 342, 'Test 5');
test(minScoreTriangulation([1,3,1,4,1,5]), 13, 'Test 6');
test(minScoreTriangulation([100,90,80,70,60,50,40,30,20,10]), 328000, 'Test 7');
test(minScoreTriangulation([3,5,10,7,2]), 270, 'Test 8');
test(minScoreTriangulation([6,6,6,6,6,6]), 864, 'Test 9');
test(minScoreTriangulation([5,2,1,4,3]), 37, 'Test 10');
test(minScoreTriangulation([10,20,30,40,50]), 38000, 'Test 11');
test(minScoreTriangulation([1,1,1,1,1,1]), 4, 'Test 12');
test(minScoreTriangulation([1,1,1,1,1,1,1,1,1,1]), 8, 'Test 13');
test(minScoreTriangulation([5,5,5,5,5,5,5,5,5]), 875, 'Test 14');
test(minScoreTriangulation([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 44, 'Test 15');
test(minScoreTriangulation([5,5,5,5,5,5,5]), 625, 'Test 16');
test(minScoreTriangulation([2,3,4,5,6,7,8,9,10,11]), 864, 'Test 17');
test(minScoreTriangulation([5,5,5,5]), 250, 'Test 18');
test(minScoreTriangulation([3,3,3,3,3,3]), 108, 'Test 19');
test(minScoreTriangulation([8,3,5,1]), 39, 'Test 20');
test(minScoreTriangulation([3,7,4,5]), 144, 'Test 21');
test(minScoreTriangulation([1,2,3,4,5,6,7,8,9,10]), 328, 'Test 22');
test(minScoreTriangulation([1,1,1,1,1,1,1]), 5, 'Test 23');
test(minScoreTriangulation([1,2,3]), 6, 'Test 24');
test(minScoreTriangulation([10,5,2,1,4,3]), 102, 'Test 25');
test(minScoreTriangulation([5,50,24,30]), 9600, 'Test 26');
test(minScoreTriangulation([6,10,5,2,1,4,3]), 150, 'Test 27');
test(minScoreTriangulation([1,2,3,4,5]), 38, 'Test 28');
test(minScoreTriangulation([5, 8, 7, 3, 2, 9, 4]), 346, 'Test 29');
test(minScoreTriangulation([5, 3, 2, 6, 1, 4, 7]), 96, 'Test 30');
test(minScoreTriangulation([2, 1, 3, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10]), 77, 'Test 31');
test(minScoreTriangulation([8, 6, 7, 5, 3, 0, 9, 2, 4, 1]), 0, 'Test 32');
test(minScoreTriangulation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 2658, 'Test 33');
test(minScoreTriangulation([2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 41736, 'Test 34');
test(minScoreTriangulation([10, 5, 1, 9, 3, 7, 2, 6]), 184, 'Test 35');
test(minScoreTriangulation([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 328000, 'Test 36');
test(minScoreTriangulation([5, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0, 5, 8, 2, 0, 9, 7, 4, 9, 4, 4, 5, 9, 2, 3, 0, 7, 8, 1, 6, 4, 0, 6, 2, 8, 6, 2, 0, 8, 9, 9, 8, 6]), 0, 'Test 37');
test(minScoreTriangulation([15, 25, 35, 45, 55, 65, 75]), 200625, 'Test 38');
test(minScoreTriangulation([2, 10, 3, 8, 4, 1, 9, 7]), 183, 'Test 39');
test(minScoreTriangulation([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 323398, 'Test 40');
test(minScoreTriangulation([10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20]), 70000, 'Test 41');
test(minScoreTriangulation([2, 3, 4, 5, 6, 7, 8, 9]), 464, 'Test 42');
test(minScoreTriangulation([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 328000000, 'Test 43');
test(minScoreTriangulation([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 486, 'Test 44');
test(minScoreTriangulation([30, 20, 10, 5, 15, 25, 40, 35]), 23125, 'Test 45');
test(minScoreTriangulation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 328, 'Test 46');
test(minScoreTriangulation([30, 20, 10, 40, 50, 60, 70]), 119000, 'Test 47');
test(minScoreTriangulation([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 48, 'Test 48');
test(minScoreTriangulation([50, 40, 30, 20, 10, 90, 80, 70, 60, 50, 40, 30, 20, 10, 90, 80, 70, 60, 50, 40, 30]), 527000, 'Test 49');
test(minScoreTriangulation([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139]), 368064, 'Test 50');
test(minScoreTriangulation([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1000, 'Test 51');
test(minScoreTriangulation([10, 20, 30, 40, 50, 60, 70]), 110000, 'Test 52');
test(minScoreTriangulation([15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125]), 963750, 'Test 53');
test(minScoreTriangulation([8, 3, 7, 1, 2, 9, 4]), 131, 'Test 54');
test(minScoreTriangulation([100, 1, 100, 1, 100, 1, 100]), 10301, 'Test 55');
test(minScoreTriangulation([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 2658000, 'Test 56');
test(minScoreTriangulation([30, 20, 10, 40, 50, 60, 70, 80, 90, 100, 110]), 459000, 'Test 57');
test(minScoreTriangulation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 570, 'Test 58');
test(minScoreTriangulation([5, 10, 15, 20, 25, 30, 35, 40, 45]), 29750, 'Test 59');
test(minScoreTriangulation([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54]), 14469840, 'Test 60');
test(minScoreTriangulation([1, 2, 3, 4, 5, 6, 7, 8, 9]), 238, 'Test 61');
test(minScoreTriangulation([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 328000, 'Test 62');
test(minScoreTriangulation([12, 21, 34, 43, 55, 67, 78, 89, 90, 101, 112, 123, 134, 145, 156]), 1453368, 'Test 63');
test(minScoreTriangulation([5, 6, 7, 8, 9, 10, 11]), 1850, 'Test 64');
test(minScoreTriangulation([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80]), 11702400, 'Test 65');
test(minScoreTriangulation([8, 2, 3, 4, 1, 5, 7]), 125, 'Test 66');
test(minScoreTriangulation([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 328, 'Test 67');
test(minScoreTriangulation([1, 100, 2, 99, 3, 98, 4, 97, 5]), 2254, 'Test 68');
test(minScoreTriangulation([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89]), 7158270, 'Test 69');
test(minScoreTriangulation([3, 2, 1, 4, 6, 5, 9, 7, 8]), 248, 'Test 70');
test(minScoreTriangulation([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]), 5634, 'Test 71');
test(minScoreTriangulation([7, 6, 8, 5, 3, 4, 9, 2]), 386, 'Test 72');
test(minScoreTriangulation([7, 3, 8, 6, 2, 9, 1, 4, 10, 5]), 248, 'Test 73');
test(minScoreTriangulation([150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 1118000, 'Test 74');
test(minScoreTriangulation([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 54, 'Test 75');
test(minScoreTriangulation([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]), 726000000, 'Test 76');
test(minScoreTriangulation([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), 51, 'Test 77');
test(minScoreTriangulation([9, 1, 8, 2, 7, 3, 6, 4, 5, 10, 11, 12, 13, 14, 15]), 1088, 'Test 78');
test(minScoreTriangulation([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 1128, 'Test 79');
test(minScoreTriangulation([40, 10, 30, 20, 50, 60, 70, 80, 90]), 252000, 'Test 80');
test(minScoreTriangulation([25, 15, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135]), 1254375, 'Test 81');
test(minScoreTriangulation([31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2, 1, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 66691, 'Test 82');
test(minScoreTriangulation([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 47, 'Test 83');
test(minScoreTriangulation([9, 8, 7, 6, 5, 4, 3, 2, 1]), 238, 'Test 84');
test(minScoreTriangulation([1, 10, 100, 1000, 10000, 100000, 1000000]), 101010101000, 'Test 85');
test(minScoreTriangulation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]), 71978, 'Test 86');
test(minScoreTriangulation([30, 20, 10, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 1151000, 'Test 87');
test(minScoreTriangulation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 1118, 'Test 88');
test(minScoreTriangulation([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 864, 'Test 89');
test(minScoreTriangulation([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]), 291840, 'Test 90');
test(minScoreTriangulation([7, 8, 9, 10, 11, 12, 13, 14]), 5194, 'Test 91');
test(minScoreTriangulation([12, 8, 6, 3, 7, 11, 9, 5, 4]), 1299, 'Test 92');
test(minScoreTriangulation([10, 1, 100, 10, 1, 100, 10, 1, 100]), 3031, 'Test 93');
test(minScoreTriangulation([9, 1, 8, 1, 7, 2, 6, 3, 5, 4]), 125, 'Test 94');
test(minScoreTriangulation([99, 1, 98, 2, 97, 3, 96, 4, 95, 5, 94, 6]), 3836, 'Test 95');
test(minScoreTriangulation([5, 6, 3, 2, 7, 8, 4, 1, 9]), 201, 'Test 96');
test(minScoreTriangulation([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 32000000, 'Test 97');
test(minScoreTriangulation([3, 7, 4, 5, 6, 8, 2, 9, 1]), 181, 'Test 98');
test(minScoreTriangulation([10, 5, 1, 100, 10, 5, 1]), 1110, 'Test 99');
test(minScoreTriangulation([3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 41788, 'Test 100');
test(minScoreTriangulation([10, 20, 30, 40, 50, 60, 70, 80]), 166000, 'Test 101');
test(minScoreTriangulation([99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 56498, 'Test 102');
test(minScoreTriangulation([5, 25, 15, 10, 40, 50]), 14625, 'Test 103');
test(minScoreTriangulation([10, 20, 30, 40, 50]), 38000, 'Test 104');
test(minScoreTriangulation([3, 5, 100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 568, 'Test 105');
test(minScoreTriangulation([2, 5, 8, 13, 21, 34, 55, 89]), 15792, 'Test 106');
test(minScoreTriangulation([100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100]), 10503, 'Test 107');
test(minScoreTriangulation([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1625, 'Test 108');
test(minScoreTriangulation([12, 34, 56, 78, 90, 11, 22, 33, 44, 55]), 208538, 'Test 109');
test(minScoreTriangulation([50, 20, 10, 30, 40, 60, 80, 70, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 2733000, 'Test 110');
test(minScoreTriangulation([10, 20, 30, 40, 50, 60, 70, 80, 90]), 238000, 'Test 111');

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
