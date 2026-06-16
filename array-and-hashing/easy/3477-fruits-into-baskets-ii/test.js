// Test: 3477. Fruits Into Baskets Ii
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { numOfUnplacedFruits } = require("./solution");

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

console.log("\n3477. Fruits Into Baskets Ii\n");

test(numOfUnplacedFruits([5,5,5,5], [4,4,4,4]), 4, 'Test 1');
test(numOfUnplacedFruits([100,200,300], [100,200,300]), 0, 'Test 2');
test(numOfUnplacedFruits([1,3,5,7], [2,4,6,8]), 0, 'Test 3');
test(numOfUnplacedFruits([10,10,10], [5,5,5,5,5]), 3, 'Test 4');
test(numOfUnplacedFruits([10,20,30], [5,15,25]), 1, 'Test 5');
test(numOfUnplacedFruits([5,5,5], [5,5,5]), 0, 'Test 6');
test(numOfUnplacedFruits([10,20,30], [10,20,30]), 0, 'Test 7');
test(numOfUnplacedFruits([5,5,5,5], [1,1,1,1]), 4, 'Test 8');
test(numOfUnplacedFruits([100,100], [50,50]), 2, 'Test 9');
test(numOfUnplacedFruits([100,200,300], [50,150,250]), 1, 'Test 10');
test(numOfUnplacedFruits([3,6,1], [6,4,7]), 0, 'Test 11');
test(numOfUnplacedFruits([5,5,5], [4,4,4]), 3, 'Test 12');
test(numOfUnplacedFruits([1,2,3], [3,2,1]), 1, 'Test 13');
test(numOfUnplacedFruits([4,2,5], [3,5,4]), 1, 'Test 14');
test(numOfUnplacedFruits([5,5,5,5], [5,5,5,5]), 0, 'Test 15');
test(numOfUnplacedFruits([500,500], [1000,1000]), 0, 'Test 16');
test(numOfUnplacedFruits([1,1,1], [1,1,1]), 0, 'Test 17');
test(numOfUnplacedFruits([1,1,1,1], [1,1,1,1]), 0, 'Test 18');
test(numOfUnplacedFruits([1,2,3,4], [4,3,2,1]), 2, 'Test 19');
test(numOfUnplacedFruits([100,200,300,400], [100,150,200,250]), 2, 'Test 20');
test(numOfUnplacedFruits([1000], [1000]), 0, 'Test 21');
test(numOfUnplacedFruits([10,10,10], [1,1,1]), 3, 'Test 22');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 1, 'Test 23');
test(numOfUnplacedFruits([10, 5, 20, 25, 15], [20, 10, 30, 15, 25]), 0, 'Test 24');
test(numOfUnplacedFruits([50, 60, 70, 80], [40, 60, 75, 80]), 1, 'Test 25');
test(numOfUnplacedFruits([90, 80, 70, 60, 50], [50, 60, 70, 80, 90]), 0, 'Test 26');
test(numOfUnplacedFruits([300, 200, 100, 400, 500], [100, 200, 300, 400, 500]), 0, 'Test 27');
test(numOfUnplacedFruits([100, 150, 200, 250, 300], [90, 160, 190, 260, 310]), 1, 'Test 28');
test(numOfUnplacedFruits([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 29');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60], [5, 15, 25, 35, 45, 55]), 1, 'Test 30');
test(numOfUnplacedFruits([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 31');
test(numOfUnplacedFruits([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 32');
test(numOfUnplacedFruits([500, 300, 100, 400, 200], [100, 200, 300, 400, 500]), 0, 'Test 33');
test(numOfUnplacedFruits([10, 20, 30, 40, 50], [50, 40, 30, 20, 10]), 2, 'Test 34');
test(numOfUnplacedFruits([1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10]), 0, 'Test 35');
test(numOfUnplacedFruits([10, 10, 10], [5, 5, 5, 5, 5]), 3, 'Test 36');
test(numOfUnplacedFruits([123,456,789,101,202,303,404,505,606,707], [100,200,300,400,500,600,700,800,900,1000]), 1, 'Test 37');
test(numOfUnplacedFruits([50, 50, 50, 50, 50], [100, 100, 100, 100, 100]), 0, 'Test 38');
test(numOfUnplacedFruits([300, 200, 100, 50], [50, 100, 200, 300]), 0, 'Test 39');
test(numOfUnplacedFruits([5, 15, 25, 35, 45], [35, 45, 15, 25, 50]), 1, 'Test 40');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 5, 'Test 41');
test(numOfUnplacedFruits([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 42');
test(numOfUnplacedFruits([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 5, 'Test 43');
test(numOfUnplacedFruits([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 2, 'Test 44');
test(numOfUnplacedFruits([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 5, 'Test 45');
test(numOfUnplacedFruits([100, 200, 300, 400], [400, 300, 200, 100]), 2, 'Test 46');
test(numOfUnplacedFruits([8, 8, 8, 8, 8], [5, 5, 5, 5, 5]), 5, 'Test 47');
test(numOfUnplacedFruits([500, 500, 500, 500], [250, 250, 250, 250, 250, 250, 250, 250]), 4, 'Test 48');
test(numOfUnplacedFruits([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 0, 'Test 49');
test(numOfUnplacedFruits([1, 3, 2, 5, 4, 7, 6, 9, 8, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 5, 'Test 50');
test(numOfUnplacedFruits([10, 5, 15, 20], [5, 10, 15, 25]), 0, 'Test 51');
test(numOfUnplacedFruits([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 1, 'Test 52');
test(numOfUnplacedFruits([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 0, 'Test 53');
test(numOfUnplacedFruits([1000, 500, 250, 125, 62], [1000, 500, 250, 125, 62]), 0, 'Test 54');
test(numOfUnplacedFruits([5, 5, 5, 5, 5], [1, 1, 1, 1, 1]), 5, 'Test 55');
test(numOfUnplacedFruits([10,20,30,40,50,60,70,80,90,100], [100,90,80,70,60,50,40,30,20,10]), 5, 'Test 56');
test(numOfUnplacedFruits([100, 50, 200, 300, 150, 100, 250, 50, 200, 350], [50, 100, 150, 200, 250, 300, 350, 400, 450, 500]), 0, 'Test 57');
test(numOfUnplacedFruits([10,10,10,10,10], [5,5,5,5,5]), 5, 'Test 58');
test(numOfUnplacedFruits([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 0, 'Test 59');
test(numOfUnplacedFruits([25, 25, 25, 25], [20, 30, 30, 40]), 1, 'Test 60');
test(numOfUnplacedFruits([10, 20, 30], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 3, 'Test 61');
test(numOfUnplacedFruits([100, 200, 300, 400, 500], [500, 400, 300, 200, 100]), 2, 'Test 62');
test(numOfUnplacedFruits([90, 80, 70, 60, 50, 40, 30, 20, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90]), 0, 'Test 63');
test(numOfUnplacedFruits([50, 50, 50, 50, 50], [40, 40, 40, 40, 40]), 5, 'Test 64');
test(numOfUnplacedFruits([10,10,10,10], [1,1,1,1,1,1,1,1,1,1]), 4, 'Test 65');
test(numOfUnplacedFruits([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 0, 'Test 66');
test(numOfUnplacedFruits([100, 200, 300, 400, 500], [250, 150, 350, 550, 450]), 1, 'Test 67');
test(numOfUnplacedFruits([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 68');
test(numOfUnplacedFruits([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], [100, 50, 100, 50, 100, 50, 100, 50, 100, 50]), 5, 'Test 69');
test(numOfUnplacedFruits([50, 30, 20, 40, 60], [30, 50, 60, 40, 20]), 1, 'Test 70');
test(numOfUnplacedFruits([50, 60, 70, 80], [40, 50, 60, 70]), 1, 'Test 71');
test(numOfUnplacedFruits([1000,999,998,997,996,995,994,993,992,991], [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]), 0, 'Test 72');
test(numOfUnplacedFruits([1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 6, 7, 8, 9, 10]), Error: list index out of range, 'Test 73');
test(numOfUnplacedFruits([250, 250, 250, 250], [250, 250, 250, 250, 250, 250, 250, 250, 250, 250]), 0, 'Test 74');
test(numOfUnplacedFruits([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 0, 'Test 75');
test(numOfUnplacedFruits([5, 10, 15, 20], [25, 10, 5, 30]), 1, 'Test 76');
test(numOfUnplacedFruits([1,2,3,4,5], [5,4,3,2,1]), 2, 'Test 77');
test(numOfUnplacedFruits([999, 998, 997, 996, 995], [1000, 1000, 1000, 1000, 1000]), 0, 'Test 78');
test(numOfUnplacedFruits([150, 250, 350, 50, 100], [100, 200, 300, 400, 500]), 0, 'Test 79');
test(numOfUnplacedFruits([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]), 10, 'Test 80');
test(numOfUnplacedFruits([50,50,50,50,50,50,50,50,50,50], [100,100,100,100,100,100,100,100,100,100]), 0, 'Test 81');
test(numOfUnplacedFruits([1, 10, 100, 1000], [1000, 100, 10, 1]), 2, 'Test 82');
test(numOfUnplacedFruits([10, 10, 10, 10, 10], [2, 2, 2, 2, 2]), 5, 'Test 83');
test(numOfUnplacedFruits([100,200,300,400,500], [150,250,350,450,550]), 0, 'Test 84');
test(numOfUnplacedFruits([100, 200, 300, 400], [150, 250, 350, 450]), 0, 'Test 85');
test(numOfUnplacedFruits([900, 800, 700, 600, 500, 400, 300, 200, 100, 1], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 0, 'Test 86');
test(numOfUnplacedFruits([1, 1, 1, 1], [1, 1, 1, 1]), 0, 'Test 87');
test(numOfUnplacedFruits([10, 10, 10, 10, 10], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 88');
test(numOfUnplacedFruits([500, 400, 300, 200, 100], [100, 200, 300, 400, 500]), 0, 'Test 89');
test(numOfUnplacedFruits([100, 200, 300, 400, 500], [50, 150, 250, 350, 450]), 1, 'Test 90');
test(numOfUnplacedFruits([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 0, 'Test 91');
test(numOfUnplacedFruits([200, 100, 50, 250, 150], [150, 250, 200, 100, 50]), 2, 'Test 92');
test(numOfUnplacedFruits([100, 200, 300, 400, 500], [150, 250, 350, 450, 550]), 0, 'Test 93');
test(numOfUnplacedFruits([5, 10, 15, 20, 25], [25, 20, 15, 10, 5]), 2, 'Test 94');
test(numOfUnplacedFruits([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]), 4, 'Test 95');
test(numOfUnplacedFruits([100, 100, 100, 100, 100], [1, 1, 1, 1, 1]), 5, 'Test 96');
test(numOfUnplacedFruits([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 0, 'Test 97');
test(numOfUnplacedFruits([9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9]), 0, 'Test 98');
test(numOfUnplacedFruits([20, 50, 30, 10, 40], [10, 40, 50, 20, 30]), 1, 'Test 99');
test(numOfUnplacedFruits([200, 300, 400], [400, 300, 200]), 1, 'Test 100');
test(numOfUnplacedFruits([500,300,200,100,50], [400,350,250,150,100]), 1, 'Test 101');
test(numOfUnplacedFruits([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 0, 'Test 102');
test(numOfUnplacedFruits([1, 2, 3, 4, 5], [5, 5, 5, 5, 5]), 0, 'Test 103');
test(numOfUnplacedFruits([100, 100, 100, 100], [50, 50, 50, 50]), 4, 'Test 104');
test(numOfUnplacedFruits([2, 4, 6, 8, 10], [10, 8, 6, 4, 2]), 2, 'Test 105');
test(numOfUnplacedFruits([100, 50, 200, 300], [150, 100, 250, 300]), 0, 'Test 106');
test(numOfUnplacedFruits([90, 50, 60, 70], [60, 70, 80, 90]), 0, 'Test 107');
test(numOfUnplacedFruits([1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 10, 10, 10, 10, 10]), Error: list index out of range, 'Test 108');
test(numOfUnplacedFruits([500, 300, 200, 100, 50], [400, 600, 200, 300, 100]), 0, 'Test 109');

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
