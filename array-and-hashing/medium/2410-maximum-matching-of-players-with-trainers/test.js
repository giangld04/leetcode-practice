// Test: 2410. Maximum Matching Of Players With Trainers
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { matchPlayersAndTrainers } = require("./solution");

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

console.log("\n2410. Maximum Matching Of Players With Trainers\n");

test(matchPlayersAndTrainers([1,2,3], [10,11,12]), 3, 'Test 1');
test(matchPlayersAndTrainers([10,20,30], [1,2,3]), 0, 'Test 2');
test(matchPlayersAndTrainers([1,2,3,4,5], [5,4,3,2,1]), 5, 'Test 3');
test(matchPlayersAndTrainers([1000000000], [1000000000]), 1, 'Test 4');
test(matchPlayersAndTrainers([1,2,3], [4,5,6,7,8]), 3, 'Test 5');
test(matchPlayersAndTrainers([1,1,1,1,1], [1,1,1,1,1,1]), 5, 'Test 6');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10], [10]), 1, 'Test 7');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 10, 'Test 8');
test(matchPlayersAndTrainers([1], [1]), 1, 'Test 9');
test(matchPlayersAndTrainers([1,10,100], [10,100,1000]), 3, 'Test 10');
test(matchPlayersAndTrainers([5,6,7], [8,9,10]), 3, 'Test 11');
test(matchPlayersAndTrainers([1,3,5,7,9], [2,4,6,8,10]), 5, 'Test 12');
test(matchPlayersAndTrainers([5,5,5], [5,5,5]), 3, 'Test 13');
test(matchPlayersAndTrainers([9,7,5,3,1], [10,8,6,4,2]), 5, 'Test 14');
test(matchPlayersAndTrainers([1,2,3], [10,20,30]), 3, 'Test 15');
test(matchPlayersAndTrainers([10,20,30,40], [5,15,25,35,45]), 4, 'Test 16');
test(matchPlayersAndTrainers([10,20,30], [1,2,3,4,5,6,7,8,9,10]), 1, 'Test 17');
test(matchPlayersAndTrainers([1,1000000000], [1000000000,1]), 2, 'Test 18');
test(matchPlayersAndTrainers([5,5,5,5], [5,5,5,5]), 4, 'Test 19');
test(matchPlayersAndTrainers([1,3,5,7], [2,4,6,8]), 4, 'Test 20');
test(matchPlayersAndTrainers([1,1,1], [10]), 1, 'Test 21');
test(matchPlayersAndTrainers([4,7,9], [8,2,5,8]), 2, 'Test 22');
test(matchPlayersAndTrainers([100,200,300], [150,250,350]), 3, 'Test 23');
test(matchPlayersAndTrainers([3, 7, 11, 15, 19], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2, 'Test 24');
test(matchPlayersAndTrainers([4,7,9,11,13,15], [10,8,12,6,14,16]), 6, 'Test 25');
test(matchPlayersAndTrainers([100,200,300,400,500], [50,150,250,350,450,550]), 5, 'Test 26');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10], [2,4,6,8,10,12,14,16,18,20]), 10, 'Test 27');
test(matchPlayersAndTrainers([5,5,5,5,5,5,5,5,5,5], [1,2,3,4,5,6,7,8,9,10]), 6, 'Test 28');
test(matchPlayersAndTrainers([1, 2, 3, 4, 5], [5, 5, 5, 5, 5]), 5, 'Test 29');
test(matchPlayersAndTrainers([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 20, 'Test 30');
test(matchPlayersAndTrainers([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 10, 'Test 31');
test(matchPlayersAndTrainers([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20]), 10, 'Test 32');
test(matchPlayersAndTrainers([10,20,30,40,50,60,70,80,90,100], [1,2,3,4,5,6,7,8,9,10]), 1, 'Test 33');
test(matchPlayersAndTrainers([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 10, 'Test 34');
test(matchPlayersAndTrainers([3,3,3,4,4,4,5,5,5], [3,4,5]), 3, 'Test 35');
test(matchPlayersAndTrainers([1,5,8,9,11,13,15,17,19], [2,3,6,7,10,12,14,16,18,20]), 8, 'Test 36');
test(matchPlayersAndTrainers([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 4, 'Test 37');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10], [5,5,5,5,5,5,5,5,5,5]), 5, 'Test 38');
test(matchPlayersAndTrainers([50,40,30,20,10], [15,25,35,45,55]), 5, 'Test 39');
test(matchPlayersAndTrainers([1, 1, 1, 1, 1], [1, 2, 3, 4, 5]), 5, 'Test 40');
test(matchPlayersAndTrainers([1, 3, 6, 7, 8], [2, 4, 5, 8, 9]), 4, 'Test 41');
test(matchPlayersAndTrainers([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 20, 'Test 42');
test(matchPlayersAndTrainers([1,100,1000,10000,100000], [1,100,1000,10000,100000]), 5, 'Test 43');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10], [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 10, 'Test 44');
test(matchPlayersAndTrainers([5,10,15,20,25,30], [25,10,5,30,20,15]), 6, 'Test 45');
test(matchPlayersAndTrainers([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 15, 'Test 46');
test(matchPlayersAndTrainers([1,1,2,2,3,3,4,4,5,5], [5,5,5,5,5,5,5,5,5,5]), 10, 'Test 47');
test(matchPlayersAndTrainers([1, 1, 2, 2, 3, 3, 4, 4], [1, 2, 2, 3, 3, 4, 4, 5]), 8, 'Test 48');
test(matchPlayersAndTrainers([10,20,30,40,50], [15,25,35,45,55]), 5, 'Test 49');
test(matchPlayersAndTrainers([100,200,300,400,500,600,700,800,900,1000], [500,600,700,800,900,1000,100,200,300,400]), 10, 'Test 50');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 25, 'Test 51');
test(matchPlayersAndTrainers([1,5,9,13,17,21,25,29,33,37], [4,8,12,16,20,24,28,32,36,40]), 10, 'Test 52');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50]), 25, 'Test 53');
test(matchPlayersAndTrainers([10,20,30,40,50,60,70,80,90,100], [50,50,50,50,50,50,50,50,50,50]), 5, 'Test 54');
test(matchPlayersAndTrainers([1, 5, 9, 13, 17], [3, 7, 11, 15, 19]), 5, 'Test 55');
test(matchPlayersAndTrainers([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], [5,5,5,5,5,4,4,4,4,3,3,3,2,2,1]), 15, 'Test 56');
test(matchPlayersAndTrainers([3, 6, 7, 8, 10, 11, 15], [4, 5, 8, 9, 12, 16, 20]), 6, 'Test 57');
test(matchPlayersAndTrainers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 10, 'Test 58');
test(matchPlayersAndTrainers([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), 10, 'Test 59');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 60');
test(matchPlayersAndTrainers([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1]), 5, 'Test 61');
test(matchPlayersAndTrainers([5, 10, 15, 20, 25, 30], [3, 6, 9, 12, 18, 21, 24, 27]), 5, 'Test 62');
test(matchPlayersAndTrainers([500,500,500,500,500,500,500,500,500,500], [500,500,500,500,500,500,500,500,500,500]), 10, 'Test 63');
test(matchPlayersAndTrainers([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 15, 'Test 64');
test(matchPlayersAndTrainers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 65');
test(matchPlayersAndTrainers([10, 20, 30, 40, 50], [1, 2, 3, 4, 5]), 0, 'Test 66');
test(matchPlayersAndTrainers([1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 5, 'Test 67');
test(matchPlayersAndTrainers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 68');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), 20, 'Test 69');
test(matchPlayersAndTrainers([1,10,100,1000,10000,100000], [100000,10000,1000,100,10,1]), 6, 'Test 70');
test(matchPlayersAndTrainers([100,200,300,400,500], [250,350,150,450,550]), 5, 'Test 71');
test(matchPlayersAndTrainers([10, 10, 10, 10, 10], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 72');
test(matchPlayersAndTrainers([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 73');
test(matchPlayersAndTrainers([100, 200, 300, 400, 500], [150, 250, 350, 450, 550]), 5, 'Test 74');
test(matchPlayersAndTrainers([1, 2, 2, 3, 3, 4, 4, 5, 5, 6], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 9, 'Test 75');
test(matchPlayersAndTrainers([1000000000, 1000000000, 1000000000], [1000000000, 1000000000]), 2, 'Test 76');
test(matchPlayersAndTrainers([1,100,200,300,400,500], [500,400,300,200,100,1]), 6, 'Test 77');
test(matchPlayersAndTrainers([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], [99, 199, 299, 399, 499, 599, 699, 799, 899, 999, 1099, 1199, 1299, 1399, 1499]), 14, 'Test 78');
test(matchPlayersAndTrainers([1000000000, 999999999, 999999998, 999999997, 999999996], [1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 5, 'Test 79');
test(matchPlayersAndTrainers([1,1,2,2,3,3,4,4,5,5], [2,2,4,4,6,6,8,8,10,10]), 10, 'Test 80');
test(matchPlayersAndTrainers([10,20,30,40,50], [5,15,25,35,45,55]), 5, 'Test 81');
test(matchPlayersAndTrainers([5,15,25,35,45,55,65,75,85,95], [10,20,30,40,50,60,70,80,90,100]), 10, 'Test 82');
test(matchPlayersAndTrainers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155]), 15, 'Test 83');
test(matchPlayersAndTrainers([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [50, 150, 250, 350, 450, 550, 650, 750, 850, 950]), 9, 'Test 84');
test(matchPlayersAndTrainers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10, 'Test 85');
test(matchPlayersAndTrainers([1, 1, 1, 1, 1], [1]), 1, 'Test 86');
test(matchPlayersAndTrainers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 87');
test(matchPlayersAndTrainers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 88');
test(matchPlayersAndTrainers([5,5,5,5,5], [1,1,1,1,1,1,1,1,1,1]), 0, 'Test 89');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10], [10,10,10,10,10,10,10,10,10,10]), 10, 'Test 90');
test(matchPlayersAndTrainers([1,2,3,4,5], [1,2,3,4,5,6,7,8,9,10]), 5, 'Test 91');
test(matchPlayersAndTrainers([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], [2, 20, 200, 2000, 20000, 200000, 2000000, 20000000, 200000000, 2000000000]), 10, 'Test 92');
test(matchPlayersAndTrainers([5, 5, 5, 5, 5], [5, 5, 5, 5, 5]), 5, 'Test 93');
test(matchPlayersAndTrainers([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [150, 250, 350, 450, 550, 650, 750, 850, 950, 1050]), 10, 'Test 94');
test(matchPlayersAndTrainers([2,5,8,12,15], [3,5,7,9,11,15]), 4, 'Test 95');
test(matchPlayersAndTrainers([1,2,3,4,5], [1,1,1,1,1]), 1, 'Test 96');
test(matchPlayersAndTrainers([1,2,2,3,3,3,4,4,4,4], [1,1,2,2,3,3,4,4,5,5]), 9, 'Test 97');
test(matchPlayersAndTrainers([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], [49,47,45,43,41,39,37,35,33,31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), 25, 'Test 98');
test(matchPlayersAndTrainers([10,20,30,40,50,60,70,80,90,100], [10,20,30,40,50,60,70,80,90,100]), 10, 'Test 99');
test(matchPlayersAndTrainers([10, 20, 30, 40, 50], [15, 25, 35, 45, 55]), 5, 'Test 100');
test(matchPlayersAndTrainers([3,6,9,12,15,18,21], [10,12,14,16,18,20,22]), 7, 'Test 101');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]), 10, 'Test 102');
test(matchPlayersAndTrainers([1,3,5,7,9,11,13,15,17,19], [10,20,30,40,50,60,70,80,90,100]), 10, 'Test 103');
test(matchPlayersAndTrainers([10,20,30,40,50,60,70,80,90,100], [5,15,25,35,45,55,65,75,85,95,105]), 10, 'Test 104');
test(matchPlayersAndTrainers([5, 5, 5, 5, 5], [1, 2, 3, 4, 5]), 1, 'Test 105');
test(matchPlayersAndTrainers([100,200,300,400,500,600,700,800,900,1000], [150,250,350,450,550,650,750,850,950,1050]), 10, 'Test 106');
test(matchPlayersAndTrainers([5, 10, 15, 20, 25], [1, 5, 10, 15, 20, 25, 30]), 5, 'Test 107');
test(matchPlayersAndTrainers([100,100,100,100,100], [100,100,100,100,100,100]), 5, 'Test 108');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [3,6,9,12,15]), 5, 'Test 109');
test(matchPlayersAndTrainers([5,5,5,5,5], [1,2,3,4,5]), 1, 'Test 110');
test(matchPlayersAndTrainers([100, 200, 300], [150, 100, 250, 300]), 3, 'Test 111');
test(matchPlayersAndTrainers([50,40,30,20,10], [10,20,30,40,50]), 5, 'Test 112');
test(matchPlayersAndTrainers([10, 20, 30, 40, 50], [9, 19, 29, 39, 49]), 4, 'Test 113');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 15, 'Test 114');
test(matchPlayersAndTrainers([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 20, 'Test 115');
test(matchPlayersAndTrainers([90, 80, 70, 60, 50, 40, 30, 20, 10], [85, 95, 90, 75, 65, 55, 45, 35, 25, 15]), 9, 'Test 116');
test(matchPlayersAndTrainers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 10, 'Test 117');
test(matchPlayersAndTrainers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), 10, 'Test 118');
test(matchPlayersAndTrainers([1,2,3,4,5,6,7,8,9,10], [10,20,30,40,50,60,70,80,90,100]), 10, 'Test 119');
test(matchPlayersAndTrainers([1,2,2,3,3,3,4,4,4,4], [4,4,4,4,4,4,4,4,4,4]), 10, 'Test 120');

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
