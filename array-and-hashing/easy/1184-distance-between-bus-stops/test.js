// Test: 1184. Distance Between Bus Stops
// 73 test cases from LeetCodeDataset
// Run: node test.js

const { distanceBetweenBusStops } = require("./solution");

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

console.log("\n1184. Distance Between Bus Stops\n");

test(distanceBetweenBusStops([7,10,1,12,11,14,5,0], 7, 2), 17, 'Test 1');
test(distanceBetweenBusStops([1,2,3,4], 0, 2), 3, 'Test 2');
test(distanceBetweenBusStops([4,3,2], 0, 2), 2, 'Test 3');
test(distanceBetweenBusStops([1,2,3,4], 0, 1), 1, 'Test 4');
test(distanceBetweenBusStops([3,6,7,2,9,12,5,10,15,8], 3, 7), 28, 'Test 5');
test(distanceBetweenBusStops([3,6,7,2,9,12,5,10,1], 6, 8), 15, 'Test 6');
test(distanceBetweenBusStops([3,6,7,2,9,12,5,10,15,8], 5, 9), 35, 'Test 7');
test(distanceBetweenBusStops([3,6,7,2,9,12,5,10,1], 5, 8), 27, 'Test 8');
test(distanceBetweenBusStops([1,2,3,4], 0, 3), 4, 'Test 9');
test(distanceBetweenBusStops([3,4,5,1,2], 2, 1), 4, 'Test 10');
test(distanceBetweenBusStops([100,200,300,400,500,600,700,800,900,1000], 0, 9), 1000, 'Test 11');
test(distanceBetweenBusStops([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 25, 30), Error: list index out of range, 'Test 12');
test(distanceBetweenBusStops([29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 29, 15), Error: list index out of range, 'Test 13');
test(distanceBetweenBusStops([50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350], 10, 20), 1950, 'Test 14');
test(distanceBetweenBusStops([5,8,12,4,6,7,9,3,10,1,11], 2, 6), 29, 'Test 15');
test(distanceBetweenBusStops([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140], 3, 17), 441, 'Test 16');
test(distanceBetweenBusStops([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 24, 50), 1625, 'Test 17');
test(distanceBetweenBusStops([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 10, 20), 155, 'Test 18');
test(distanceBetweenBusStops([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15, 5), 105, 'Test 19');
test(distanceBetweenBusStops([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 4, 13), 39, 'Test 20');
test(distanceBetweenBusStops([5, 8, 12, 15, 20, 25, 30, 35, 40, 45, 50], 2, 8), 137, 'Test 21');
test(distanceBetweenBusStops([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 5, 10), 230, 'Test 22');
test(distanceBetweenBusStops([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40], 15, 30), Execution timed out, 'Test 23');
test(distanceBetweenBusStops([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 12, 5), 106, 'Test 24');
test(distanceBetweenBusStops([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 7, 3), 22000, 'Test 25');
test(distanceBetweenBusStops([2,10,3,5,1,7,8,6,9,4,12,11], 4, 11), 31, 'Test 26');
test(distanceBetweenBusStops([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 0, 10), 105, 'Test 27');
test(distanceBetweenBusStops([15,20,25,30,35,40,45,50], 0, 7), 50, 'Test 28');
test(distanceBetweenBusStops([7,5,3,1,9,11,13,15,17,19,21,23,25,27,29], 6, 13), 92, 'Test 29');
test(distanceBetweenBusStops([50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000], 8, 17), 4650, 'Test 30');
test(distanceBetweenBusStops([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 9, 1), 1100, 'Test 31');
test(distanceBetweenBusStops([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300], 25, 5), 1550, 'Test 32');
test(distanceBetweenBusStops([100,200,150,100,50,250,300,50,100,200,150,250], 3, 11), 700, 'Test 33');
test(distanceBetweenBusStops([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 0, 50), 75, 'Test 34');
test(distanceBetweenBusStops([100,200,300,400,500], 1, 3), 500, 'Test 35');
test(distanceBetweenBusStops([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 25, 5), 50, 'Test 36');
test(distanceBetweenBusStops([7, 3, 8, 4, 2, 9, 1, 6, 5], 5, 3), 6, 'Test 37');
test(distanceBetweenBusStops([13,26,39,52,65,78,91,104,117,130,143,156,169,182,195,208,221,234,247,260], 5, 18), 702, 'Test 38');
test(distanceBetweenBusStops([12,24,36,48,60,72,84,96,108,120,132,144,156,168,180,192,204,216,228,240], 10, 18), 1128, 'Test 39');
test(distanceBetweenBusStops([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 12, 7), 50, 'Test 40');
test(distanceBetweenBusStops([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 18, 3), 90, 'Test 41');
test(distanceBetweenBusStops([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 0, 19), 20, 'Test 42');
test(distanceBetweenBusStops([50, 40, 30, 20, 10, 5, 2, 1, 9, 8, 7, 6, 4, 3, 2], 4, 11), 42, 'Test 43');
test(distanceBetweenBusStops([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 19), 1, 'Test 44');
test(distanceBetweenBusStops([9,8,7,6,5,4,3,2,1], 3, 7), 18, 'Test 45');
test(distanceBetweenBusStops([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 100), 30, 'Test 46');
test(distanceBetweenBusStops([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 0, 5), 150, 'Test 47');
test(distanceBetweenBusStops([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 7, 2), 225, 'Test 48');
test(distanceBetweenBusStops([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 23, 17), 123, 'Test 49');
test(distanceBetweenBusStops([23,17,11,5,3,8,13,19,25,31,37,43,49,55,61,67,73,79,85,91,97,103,109,115,121,127,133,139,145,151,157], 15, 25), 940, 'Test 50');
test(distanceBetweenBusStops([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 9, 0), 100, 'Test 51');
test(distanceBetweenBusStops([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8, 3), 25, 'Test 52');
test(distanceBetweenBusStops([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50, 100), Execution timed out, 'Test 53');
test(distanceBetweenBusStops([5,10,15,20,25,30,35,40,45,50,55,60,65,70], 4, 11), 245, 'Test 54');
test(distanceBetweenBusStops([9,8,7,6,5,4,3,2,1], 2, 7), 20, 'Test 55');
test(distanceBetweenBusStops([123, 456, 789, 101, 202, 303, 404, 505, 606, 707, 808, 909, 1010, 1111, 1212, 1313, 1414, 1515, 1616, 1717], 19, 5), 3388, 'Test 56');
test(distanceBetweenBusStops([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 10, 20), 185, 'Test 57');
test(distanceBetweenBusStops([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 6, 13), 5000, 'Test 58');
test(distanceBetweenBusStops([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 2, 7), 250, 'Test 59');
test(distanceBetweenBusStops([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 3, 14), 57, 'Test 60');
test(distanceBetweenBusStops([10,20,30,40,50,60,70,80,90,100], 2, 6), 180, 'Test 61');
test(distanceBetweenBusStops([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 15, 30), Execution timed out, 'Test 62');
test(distanceBetweenBusStops([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 14, 6), 36, 'Test 63');
test(distanceBetweenBusStops([8,16,24,32,40,48,56,64,72,80], 2, 9), 104, 'Test 64');
test(distanceBetweenBusStops([5,10,15,20,25,30,35,40], 1, 6), 80, 'Test 65');
test(distanceBetweenBusStops([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300], 0, 12), 1300, 'Test 66');
test(distanceBetweenBusStops([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 29), 3, 'Test 67');
test(distanceBetweenBusStops([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 0, 39), 8, 'Test 68');
test(distanceBetweenBusStops([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 5, 2), 1200, 'Test 69');
test(distanceBetweenBusStops([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 0, 9), 100, 'Test 70');
test(distanceBetweenBusStops([7,3,5,2,8,6,4,1,9,11,13,15,17], 5, 10), 31, 'Test 71');
test(distanceBetweenBusStops([2,4,6,8,10,12,14,16,18,20,22,24], 5, 11), 54, 'Test 72');
test(distanceBetweenBusStops([7,14,21,28,35,42,49,56,63,70,77], 0, 10), 77, 'Test 73');

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
