// Test: 502. Ipo
// 133 test cases from LeetCodeDataset
// Run: node test.js

const { findMaximizedCapital } = require("./solution");

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

console.log("\n502. Ipo\n");

test(findMaximizedCapital(1, 10, [5,6], [4,0]), 16, 'Test 1');
test(findMaximizedCapital(5, 10, [5,4,3,2,1], [1,2,3,4,5]), 25, 'Test 2');
test(findMaximizedCapital(2, 3, [8,10,6], [2,5,0]), 21, 'Test 3');
test(findMaximizedCapital(4, 0, [1,1,1,1], [0,0,0,0]), 4, 'Test 4');
test(findMaximizedCapital(5, 0, [1,2,3,4,5], [0,1,2,3,4]), 15, 'Test 5');
test(findMaximizedCapital(5, 0, [10,20,30,40,50], [0,0,0,0,0]), 150, 'Test 6');
test(findMaximizedCapital(1, 10, [1,2,3], [5,5,5]), 13, 'Test 7');
test(findMaximizedCapital(1, 5, [1,2,3], [3,4,5]), 8, 'Test 8');
test(findMaximizedCapital(3, 0, [1,2,3], [0,1,2]), 6, 'Test 9');
test(findMaximizedCapital(3, 0, [10,20,30], [0,0,0]), 60, 'Test 10');
test(findMaximizedCapital(2, 1, [1,2,3], [1,1,2]), 6, 'Test 11');
test(findMaximizedCapital(1, 100, [1000,2000,3000], [1000,2000,3000]), 100, 'Test 12');
test(findMaximizedCapital(3, 3, [1,2,3,4,5], [0,1,2,3,4]), 15, 'Test 13');
test(findMaximizedCapital(2, 0, [1,2,3], [0,1,1]), 4, 'Test 14');
test(findMaximizedCapital(10, 1, [1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10]), 11, 'Test 15');
test(findMaximizedCapital(2, 3, [5,6,4,3,2], [2,3,4,5,6]), 14, 'Test 16');
test(findMaximizedCapital(3, 2, [5,4,3,2,1], [5,4,3,2,1]), 13, 'Test 17');
test(findMaximizedCapital(2, 5, [100,200,300,400,500], [0,0,0,0,0]), 905, 'Test 18');
test(findMaximizedCapital(5, 20, [100,200,300,400,500,600,700,800,900,1000], [0,10,20,30,40,50,60,70,80,90]), 3720, 'Test 19');
test(findMaximizedCapital(6, 1, [1,2,3,4,5,6,7], [0,1,2,3,4,5,6]), 28, 'Test 20');
test(findMaximizedCapital(3, 0, [10,10,10,10,10], [0,0,0,0,0]), 30, 'Test 21');
test(findMaximizedCapital(5, 100, [10,20,30,40,50], [10,20,30,40,50]), 250, 'Test 22');
test(findMaximizedCapital(4, 0, [100,200,300,400,500], [0,1,2,3,4]), 1300, 'Test 23');
test(findMaximizedCapital(1, 1, [100,200,300,400,500], [0,0,0,0,0]), 501, 'Test 24');
test(findMaximizedCapital(10, 10000, [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], [0,1000,2000,3000,4000,5000,6000,7000,8000,9000]), 65000, 'Test 25');
test(findMaximizedCapital(4, 0, [10,20,30,40], [0,10,20,30]), 100, 'Test 26');
test(findMaximizedCapital(20, 1000, [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000], [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]), 22000, 'Test 27');
test(findMaximizedCapital(3, 1, [10,20,30,40,50], [1,2,3,4,5]), 101, 'Test 28');
test(findMaximizedCapital(5, 0, [1,10,100,1000,10000], [0,0,0,0,0]), 11111, 'Test 29');
test(findMaximizedCapital(4, 10, [100,200,300,400], [50,50,50,50]), 10, 'Test 30');
test(findMaximizedCapital(3, 50, [100,200,300,400,500], [50,50,50,50,50]), 1250, 'Test 31');
test(findMaximizedCapital(5, 0, [100,200,300,400,500,600,700,800,900,1000], [0,0,0,0,0,0,0,0,0,0]), 4000, 'Test 32');
test(findMaximizedCapital(7, 50, [10,20,30,40,50,60,70,80,90,100], [10,20,30,40,50,60,70,80,90,100]), 540, 'Test 33');
test(findMaximizedCapital(7, 5, [5,10,15,20,25,30,35,40], [0,1,2,3,4,5,6,7]), 180, 'Test 34');
test(findMaximizedCapital(10, 50000, [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000], [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), 600000, 'Test 35');
test(findMaximizedCapital(3, 3, [1,1,1,1,1], [0,1,2,3,4]), 6, 'Test 36');
test(findMaximizedCapital(10, 5, [1,1,1,1,1,1,1,1,1,1], [5,5,5,5,5,5,5,5,5,5]), 15, 'Test 37');
test(findMaximizedCapital(5, 5, [10,20,30,40,50,60,70,80,90,100], [0,1,2,3,4,5,6,7,8,9]), 405, 'Test 38');
test(findMaximizedCapital(1, 0, [10000,9000,8000,7000,6000], [0,1000,2000,3000,4000]), 10000, 'Test 39');
test(findMaximizedCapital(4, 1500, [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500], [1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600]), 15000, 'Test 40');
test(findMaximizedCapital(10, 1, [100,200,300,400,500,600,700,800,900,1000], [1,1,1,1,1,1,1,1,1,1]), 5501, 'Test 41');
test(findMaximizedCapital(5, 1, [1,2,3,4,5,6,7,8,9,10], [100,200,300,400,500,600,700,800,900,1000]), 1, 'Test 42');
test(findMaximizedCapital(5, 1, [1,2,3,4,5], [0,1,2,3,4]), 16, 'Test 43');
test(findMaximizedCapital(10, 0, [1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0,0,0]), 10, 'Test 44');
test(findMaximizedCapital(10, 100, [100,200,300,400,500,600,700,800,900,1000], [10,20,30,40,50,60,70,80,90,100]), 5600, 'Test 45');
test(findMaximizedCapital(7, 5, [10,20,30,40,50,60,70,80,90,100], [0,1,2,3,4,5,6,7,8,9]), 495, 'Test 46');
test(findMaximizedCapital(10, 5, [1,2,3,4,5,6,7,8,9,10], [0,1,2,3,4,5,6,7,8,9]), 60, 'Test 47');
test(findMaximizedCapital(3, 10, [10,20,30,40,50,60,70,80,90,100], [1,2,3,4,5,6,7,8,9,10]), 280, 'Test 48');
test(findMaximizedCapital(3, 15, [5,10,15,20,25], [5,10,15,20,25]), 75, 'Test 49');
test(findMaximizedCapital(3, 20, [10,10,10,10,10], [15,15,15,15,15]), 50, 'Test 50');
test(findMaximizedCapital(5, 1000, [5000, 1000, 2000, 1500, 3000, 4000, 6000, 7000, 8000, 9000], [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500]), 36000, 'Test 51');
test(findMaximizedCapital(15, 10, [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75]), 1210, 'Test 52');
test(findMaximizedCapital(5, 0, [500,400,300,200,100], [100,200,300,400,500]), 0, 'Test 53');
test(findMaximizedCapital(4, 10, [5,2,10,8,1], [3,4,1,10,5]), 35, 'Test 54');
test(findMaximizedCapital(3, 1, [5,4,3,2,1], [0,1,2,3,4]), 13, 'Test 55');
test(findMaximizedCapital(4, 2, [1,2,3,4,5,6,7,8], [0,1,2,3,4,5,6,7]), 26, 'Test 56');
test(findMaximizedCapital(5, 10, [1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10]), 15, 'Test 57');
test(findMaximizedCapital(7, 0, [100,200,300,400,500,600,700,800,900,1000], [100,200,300,400,500,600,700,800,900,1000]), 0, 'Test 58');
test(findMaximizedCapital(3, 1000, [100,200,300,400,500,600,700,800,900,1000], [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]), 1100, 'Test 59');
test(findMaximizedCapital(3, 0, [10,20,30,40,50], [0,0,0,0,0]), 120, 'Test 60');
test(findMaximizedCapital(3, 5, [10,15,20,25,30], [0,0,0,0,0]), 80, 'Test 61');
test(findMaximizedCapital(3, 100, [50,100,150,200,250,300,350,400,450,500], [50,50,50,50,50,50,50,50,50,50]), 1450, 'Test 62');
test(findMaximizedCapital(1, 0, [10000,20000,30000], [10000,20000,30000]), 0, 'Test 63');
test(findMaximizedCapital(5, 1000, [500,750,1000,1250,1500], [250,500,750,1000,1250]), 6000, 'Test 64');
test(findMaximizedCapital(4, 10, [5,5,5,5,5,5], [0,0,0,0,0,0]), 30, 'Test 65');
test(findMaximizedCapital(3, 20, [100,200,300,400,500], [10,20,30,40,50]), 1120, 'Test 66');
test(findMaximizedCapital(10, 100, [5,10,15,20,25,30,35,40,45,50], [0,10,20,30,40,50,60,70,80,90]), 375, 'Test 67');
test(findMaximizedCapital(10, 10, [10,20,30,40,50,60,70,80,90,100], [5,10,15,20,25,30,35,40,45,50]), 560, 'Test 68');
test(findMaximizedCapital(100000, 0, [10000]*100000, [0]*100000), Error: Solution.findMaximizedCapital[] missing 2 required positional arguments: 'profits' and 'capital', 'Test 69');
test(findMaximizedCapital(4, 10, [5,8,7,10,9,12], [0,5,4,9,8,10]), 49, 'Test 70');
test(findMaximizedCapital(3, 10, [50,40,30,20,10], [5,10,15,20,25]), 130, 'Test 71');
test(findMaximizedCapital(5, 20, [100, 200, 300, 400, 500, 600], [150, 250, 350, 450, 550, 650]), 20, 'Test 72');
test(findMaximizedCapital(2, 0, [5,5,5,5,5,5], [1,2,3,4,5,6]), 0, 'Test 73');
test(findMaximizedCapital(3, 5, [1,3,2,5,4], [0,2,3,6,4]), 17, 'Test 74');
test(findMaximizedCapital(3, 10, [5,4,3,2,1], [10,20,30,40,50]), 15, 'Test 75');
test(findMaximizedCapital(6, 5, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 11, 'Test 76');
test(findMaximizedCapital(7, 5, [10,20,30,40,50,60,70,80,90,100], [0,5,10,15,20,25,30,35,40,45]), 475, 'Test 77');
test(findMaximizedCapital(3, 5, [6,7,8,9,10,11], [0,1,2,3,4,5]), 35, 'Test 78');
test(findMaximizedCapital(10, 0, [1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), 0, 'Test 79');
test(findMaximizedCapital(2, 100, [50, 75, 25, 100, 125], [0, 100, 50, 200, 150]), 300, 'Test 80');
test(findMaximizedCapital(5, 5, [1,2,3,4,5,6,7,8,9,10], [10,20,30,40,50,60,70,80,90,100]), 5, 'Test 81');
test(findMaximizedCapital(2, 3, [1,2,3,4,5], [2,3,4,5,6]), 9, 'Test 82');
test(findMaximizedCapital(5, 100, [10,20,30,40,50], [50,50,50,50,50]), 250, 'Test 83');
test(findMaximizedCapital(100, 0, [1]*100, [0]*100), Error: Solution.findMaximizedCapital[] missing 2 required positional arguments: 'profits' and 'capital', 'Test 84');
test(findMaximizedCapital(3, 50, [100,200,300,400,500], [50,100,150,200,250]), 950, 'Test 85');
test(findMaximizedCapital(3, 0, [100,200,300,400,500], [50,100,150,200,250]), 0, 'Test 86');
test(findMaximizedCapital(3, 10, [100,200,300,400,500], [0,0,0,0,0]), 1210, 'Test 87');
test(findMaximizedCapital(2, 500, [150, 250, 350, 450, 550], [50, 150, 250, 350, 450]), 1500, 'Test 88');
test(findMaximizedCapital(5, 10, [5,6,7,8,9], [2,3,4,5,6]), 45, 'Test 89');
test(findMaximizedCapital(7, 2, [1,2,3,4,5,6,7,8], [0,1,2,3,4,5,6,7]), 37, 'Test 90');
test(findMaximizedCapital(5, 0, [1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0,0,0]), 5, 'Test 91');
test(findMaximizedCapital(6, 3, [1,2,3,4,5,6,7], [1,2,3,4,5,6,7]), 30, 'Test 92');
test(findMaximizedCapital(3, 10, [1,2,3,4,5,6,7,8,9,10], [10,10,10,10,10,10,10,10,10,10]), 37, 'Test 93');
test(findMaximizedCapital(5, 5, [3,4,5,1,2], [1,2,3,4,5]), 20, 'Test 94');
test(findMaximizedCapital(3, 5, [10,20,30,40,50], [0,1,2,3,4]), 125, 'Test 95');
test(findMaximizedCapital(5, 100, [200,300,400,500,600], [50,100,150,200,250]), 2100, 'Test 96');
test(findMaximizedCapital(100, 0, [1,2,3,4,5,6,7,8,9,10], [0,0,0,0,0,0,0,0,0,0]), 55, 'Test 97');
test(findMaximizedCapital(3, 20, [10,20,30,40,50], [5,10,15,20,25]), 140, 'Test 98');
test(findMaximizedCapital(3, 1, [1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0,0,0]), 4, 'Test 99');
test(findMaximizedCapital(1, 1000000000, [1,1,1,1,1,1,1,1,1,1], [1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000]), 1000000001, 'Test 100');
test(findMaximizedCapital(1, 100, [1,2,3,4,5], [0,0,0,0,0]), 105, 'Test 101');
test(findMaximizedCapital(3, 5, [2,3,5,6,8], [1,2,3,5,6]), 24, 'Test 102');
test(findMaximizedCapital(5, 0, [5,10,15,20,25,30,35,40,45,50], [10,20,30,40,50,60,70,80,90,100]), 0, 'Test 103');
test(findMaximizedCapital(5, 10, [1,1,1,1,1,1,1,1,1,1], [0,1,2,3,4,5,6,7,8,9]), 15, 'Test 104');
test(findMaximizedCapital(2, 100, [100,200,300,400,500], [0,0,0,0,0]), 1000, 'Test 105');
test(findMaximizedCapital(4, 2, [1,2,3,4,5,6,7,8,9,10], [1,3,5,7,9,11,13,15,17,19]), 12, 'Test 106');
test(findMaximizedCapital(3, 500, [100, 200, 300, 400, 500, 600, 700, 800], [0, 100, 200, 300, 400, 500, 600, 700]), 2600, 'Test 107');
test(findMaximizedCapital(5, 10, [100,200,300,400,500], [1,2,3,4,5]), 1510, 'Test 108');
test(findMaximizedCapital(2, 5, [10,15,20,25,30], [0,5,10,15,20]), 50, 'Test 109');
test(findMaximizedCapital(5, 0, [10,20,30,40,50], [100,50,200,300,400]), 0, 'Test 110');
test(findMaximizedCapital(2, 5, [10,10,10,10,10], [0,0,0,0,0]), 25, 'Test 111');
test(findMaximizedCapital(5, 0, [1,2,3,4,5,6], [0,1,1,2,2,3]), 19, 'Test 112');
test(findMaximizedCapital(5, 500, [100,200,300,400,500], [0,0,0,0,0]), 2000, 'Test 113');
test(findMaximizedCapital(6, 10, [1,2,3,4,5,6], [0,2,4,6,8,10]), 31, 'Test 114');
test(findMaximizedCapital(5, 3, [10,2,11,1,4], [3,1,5,0,2]), 31, 'Test 115');
test(findMaximizedCapital(4, 0, [100,200,300,400], [50,150,250,350]), 0, 'Test 116');
test(findMaximizedCapital(5, 50, [10,20,30,40,50], [10,20,30,40,50]), 200, 'Test 117');
test(findMaximizedCapital(5, 50, [10,20,30,40,50,60,70,80,90,100], [5,10,15,20,25,30,35,40,45,50]), 450, 'Test 118');
test(findMaximizedCapital(4, 5, [6, 7, 8, 9, 10], [0, 5, 10, 15, 20]), 39, 'Test 119');
test(findMaximizedCapital(5, 10, [1,3,5,7,9], [0,2,3,5,8]), 35, 'Test 120');
test(findMaximizedCapital(3, 5, [1,1,1,1,1,1,1,1,1,1], [10,10,10,10,10,10,10,10,10,10]), 5, 'Test 121');
test(findMaximizedCapital(4, 10, [10,20,30,40,50], [0,10,20,30,40]), 150, 'Test 122');
test(findMaximizedCapital(3, 10, [15,25,35,45,55,65,75,85,95], [0,0,0,0,0,0,0,0,0]), 265, 'Test 123');
test(findMaximizedCapital(2, 1000, [1000,1000,1000,1000,1000], [0,100,200,300,400]), 3000, 'Test 124');
test(findMaximizedCapital(4, 1, [4,5,6,7,8,9], [2,3,4,5,6,7]), 1, 'Test 125');
test(findMaximizedCapital(4, 10, [1,5,7,10,12], [3,7,10,14,17]), 44, 'Test 126');
test(findMaximizedCapital(5, 100, [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], [50,40,30,20,10,0,0,0,0,0,0,0,0,0,0]), 750, 'Test 127');
test(findMaximizedCapital(3, 1000, [300, 500, 700, 100, 200, 400, 600, 800], [0, 500, 1000, 1500, 2000, 2500, 3000, 3500]), 2500, 'Test 128');
test(findMaximizedCapital(4, 1000, [900,800,700,600,500], [500,600,700,800,900]), 4000, 'Test 129');
test(findMaximizedCapital(3, 0, [10, 20, 30, 40, 50], [1, 2, 3, 4, 5]), 0, 'Test 130');
test(findMaximizedCapital(15, 500, [50,100,150,200,250,300,350,400,450,500,550,600,650,700,750], [200,150,100,50,0,0,0,0,0,0,0,0,0,0,0]), 6500, 'Test 131');
test(findMaximizedCapital(2, 5, [10,20,30,40,50], [1,2,3,4,5]), 95, 'Test 132');
test(findMaximizedCapital(5, 10, [10,20,30,40,50], [5,15,25,35,45]), 160, 'Test 133');

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
