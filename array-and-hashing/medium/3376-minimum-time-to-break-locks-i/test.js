// Test: 3376. Minimum Time To Break Locks I
// 175 test cases from LeetCodeDataset
// Run: node test.js

const { findMinimumTime } = require("./solution");

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

console.log("\n3376. Minimum Time To Break Locks I\n");

test(findMinimumTime([1,1,1,1], 1), 4, 'Test 1');
test(findMinimumTime([8,7,6,5,4,3,2,1], 2), 8, 'Test 2');
test(findMinimumTime([10,9,8,7,6,5,4,3], 1), 15, 'Test 3');
test(findMinimumTime([2,5,4], 2), 5, 'Test 4');
test(findMinimumTime([1000000,1000000,1000000], 5), 1257577, 'Test 5');
test(findMinimumTime([1,3,6,10,15,21,28,36], 1), 24, 'Test 6');
test(findMinimumTime([8,6,4,2,1], 1), 7, 'Test 7');
test(findMinimumTime([1,10,100,1000,10000,100000,1000000,10000000], 10), 159485, 'Test 8');
test(findMinimumTime([3,4,1], 1), 4, 'Test 9');
test(findMinimumTime([5,5,5,5,5,5,5,5], 1), 16, 'Test 10');
test(findMinimumTime([1,2,3,4,5,6,7,8], 3), 8, 'Test 11');
test(findMinimumTime([1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000], 10), 1245267, 'Test 12');
test(findMinimumTime([5,5,5,5,5,5,5,5], 5), 12, 'Test 13');
test(findMinimumTime([2,4,6,8,10,12,14,16], 2), 12, 'Test 14');
test(findMinimumTime([8,7,6,5,4,3,2,1], 1), 8, 'Test 15');
test(findMinimumTime([10,20,30,40,50,60,70,80], 1), 80, 'Test 16');
test(findMinimumTime([1,1,1,1,1,1,1,1], 1), 8, 'Test 17');
test(findMinimumTime([1,3,5,7,9,11,13,15], 1), 15, 'Test 18');
test(findMinimumTime([1000000,500000,250000], 5), 424244, 'Test 19');
test(findMinimumTime([1,2,3,4,5,6,7,8], 1), 8, 'Test 20');
test(findMinimumTime([5,5,5,5,5,5,5,5], 2), 13, 'Test 21');
test(findMinimumTime([8, 16, 24, 32, 40, 48, 56, 64], 3), 32, 'Test 22');
test(findMinimumTime([100000,200000,300000,400000,500000,600000,700000,800000], 100), 109555, 'Test 23');
test(findMinimumTime([1, 3, 6, 10, 15, 21, 28, 36], 3), 11, 'Test 24');
test(findMinimumTime([100, 200, 300, 400, 500, 600, 700, 800], 2), 504, 'Test 25');
test(findMinimumTime([100, 200, 300, 400, 500, 600, 700, 800], 7), 232, 'Test 26');
test(findMinimumTime([1, 3, 6, 10, 15, 21, 28, 36], 1), 24, 'Test 27');
test(findMinimumTime([150, 250, 350, 450, 550, 650, 750, 850], 50), 173, 'Test 28');
test(findMinimumTime([1, 2, 3, 4, 5, 6, 7, 8], 10), 8, 'Test 29');
test(findMinimumTime([9, 8, 7, 6, 5, 4, 3, 2], 5), 9, 'Test 30');
test(findMinimumTime([1000, 2500, 3000, 4500, 5000, 6000, 7500, 8000], 7), 2393, 'Test 31');
test(findMinimumTime([80, 70, 60, 50, 40, 30, 20, 10], 5), 30, 'Test 32');
test(findMinimumTime([100, 200, 300, 400, 500, 600, 700, 800], 4), 320, 'Test 33');
test(findMinimumTime([1,1,1,1,1,1,1,1], 10), 8, 'Test 34');
test(findMinimumTime([5, 5, 5, 5, 5, 5, 5, 5], 4), 12, 'Test 35');
test(findMinimumTime([9,18,27,36,45,54,63,72], 9), 19, 'Test 36');
test(findMinimumTime([1, 1, 1, 1, 1, 1, 1, 1], 5), 8, 'Test 37');
test(findMinimumTime([1, 2, 4, 8, 16, 32, 64, 128], 2), 24, 'Test 38');
test(findMinimumTime([1000000, 1, 2000000, 2, 3000000, 3, 4000000, 4], 5), 332435, 'Test 39');
test(findMinimumTime([999999, 1, 999999, 1, 999999, 1, 999999, 1], 1), 634528, 'Test 40');
test(findMinimumTime([1, 10, 100, 1000, 10000, 100000, 1000000], 5), 36659, 'Test 41');
test(findMinimumTime([3, 15, 7, 9, 12, 6, 4, 8], 3), 10, 'Test 42');
test(findMinimumTime([3, 6, 9, 12, 15, 18, 21, 24], 4), 11, 'Test 43');
test(findMinimumTime([7, 14, 21, 28, 35, 42, 49, 56], 3), 29, 'Test 44');
test(findMinimumTime([1, 2, 3, 4, 5, 6, 7, 8], 3), 8, 'Test 45');
test(findMinimumTime([2, 4, 8, 16, 32, 64, 128, 256], 1), 80, 'Test 46');
test(findMinimumTime([7, 14, 21, 28, 35, 42, 49, 56], 7), 17, 'Test 47');
test(findMinimumTime([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812], 9), 46783, 'Test 48');
test(findMinimumTime([100, 100, 100, 100, 100, 100, 100, 100], 7), 137, 'Test 49');
test(findMinimumTime([1, 1, 1, 1, 1, 1, 1, 1], 10), 8, 'Test 50');
test(findMinimumTime([500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000], 5), 733099, 'Test 51');
test(findMinimumTime([50, 60, 70, 80, 90, 100, 110, 120], 1), 190, 'Test 52');
test(findMinimumTime([10,20,30,40,50,60,70,80], 3), 40, 'Test 53');
test(findMinimumTime([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000], 1), 800000, 'Test 54');
test(findMinimumTime([1, 1, 1, 2, 2, 2, 3, 3], 1), 8, 'Test 55');
test(findMinimumTime([123, 456, 789, 101, 202, 303, 404, 505], 3), 316, 'Test 56');
test(findMinimumTime([1000000, 900000, 800000, 700000, 600000, 500000, 400000, 300000], 1), 1343573, 'Test 57');
test(findMinimumTime([128, 64, 32, 16, 8, 4, 2, 1], 1), 42, 'Test 58');
test(findMinimumTime([9, 18, 27, 36, 45, 54, 63, 72], 9), 19, 'Test 59');
test(findMinimumTime([15, 13, 11, 9, 7, 5, 3, 1], 2), 8, 'Test 60');
test(findMinimumTime([2, 3, 5, 7, 11, 13, 17, 19], 3), 9, 'Test 61');
test(findMinimumTime([500000,250000,125000,62500,31250,15625,7812,3906], 5), 38322, 'Test 62');
test(findMinimumTime([120, 240, 360, 480, 600, 720, 840, 960], 12), 216, 'Test 63');
test(findMinimumTime([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000], 10000), 100098, 'Test 64');
test(findMinimumTime([8, 8, 8, 8, 8, 8, 8, 8], 8), 15, 'Test 65');
test(findMinimumTime([500000, 400000, 300000, 200000, 100000, 50000, 25000, 12500], 1), 276310, 'Test 66');
test(findMinimumTime([500, 300, 700, 200, 800, 600, 400, 100], 3), 384, 'Test 67');
test(findMinimumTime([1, 2, 4, 8, 16, 32, 64, 128], 1), 42, 'Test 68');
test(findMinimumTime([200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000], 7), 268530, 'Test 69');
test(findMinimumTime([8, 7, 6, 5, 4, 3, 2, 1], 1), 8, 'Test 70');
test(findMinimumTime([1, 3, 5, 7, 9, 11, 13, 15], 2), 8, 'Test 71');
test(findMinimumTime([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 1), 2717859, 'Test 72');
test(findMinimumTime([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812], 1), 304763, 'Test 73');
test(findMinimumTime([5, 10, 15, 20, 25, 30, 35, 40], 3), 21, 'Test 74');
test(findMinimumTime([100, 100, 100, 100, 100, 100, 100, 100], 10), 128, 'Test 75');
test(findMinimumTime([1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1], 1), 634529, 'Test 76');
test(findMinimumTime([7,14,21,28,35,42,49,56], 7), 17, 'Test 77');
test(findMinimumTime([1, 3, 5, 7, 9, 11, 13, 15], 5), 8, 'Test 78');
test(findMinimumTime([100, 200, 300, 400, 500, 600, 700, 800], 3), 384, 'Test 79');
test(findMinimumTime([200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000], 5), 293241, 'Test 80');
test(findMinimumTime([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000], 1), 8000, 'Test 81');
test(findMinimumTime([1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000], 1), 634529, 'Test 82');
test(findMinimumTime([1000, 500, 250, 125, 62, 31, 15, 7], 7), 59, 'Test 83');
test(findMinimumTime([1, 10, 100, 1000, 10000, 100000, 1000000, 1], 5), 31447, 'Test 84');
test(findMinimumTime([8, 16, 24, 32, 40, 48, 56, 64], 5), 24, 'Test 85');
test(findMinimumTime([128, 64, 32, 16, 8, 4, 2, 1], 2), 24, 'Test 86');
test(findMinimumTime([100, 200, 300, 400, 500, 600, 700, 800], 1), 800, 'Test 87');
test(findMinimumTime([100, 200, 300, 400, 500, 600, 700, 800], 5), 281, 'Test 88');
test(findMinimumTime([100,200,300,400,500,600,700,800], 15), 165, 'Test 89');
test(findMinimumTime([7, 14, 21, 28, 35, 42, 49, 56], 2), 37, 'Test 90');
test(findMinimumTime([5, 10, 15, 20, 25, 30, 35, 40], 5), 15, 'Test 91');
test(findMinimumTime([50, 75, 100, 125, 150, 175, 200, 225], 4), 121, 'Test 92');
test(findMinimumTime([5, 10, 15, 20, 25, 30, 35, 40], 1), 40, 'Test 93');
test(findMinimumTime([1, 3, 6, 10, 15, 21, 28, 36], 2), 14, 'Test 94');
test(findMinimumTime([1, 2, 3, 4, 5, 6, 7, 8], 1), 8, 'Test 95');
test(findMinimumTime([10, 20, 30, 40, 50, 60, 70, 80], 1), 80, 'Test 96');
test(findMinimumTime([80, 70, 60, 50, 40, 30, 20, 10], 10), 20, 'Test 97');
test(findMinimumTime([10, 20, 30, 40, 50, 60, 70, 80], 10), 20, 'Test 98');
test(findMinimumTime([40, 35, 30, 25, 20, 15, 10, 5], 3), 21, 'Test 99');
test(findMinimumTime([500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906], 5), 38322, 'Test 100');
test(findMinimumTime([9, 7, 5, 3, 1], 1), 9, 'Test 101');
test(findMinimumTime([10, 20, 30, 40, 50, 60, 70, 80], 5), 30, 'Test 102');
test(findMinimumTime([999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999], 8), 1302581, 'Test 103');
test(findMinimumTime([9, 8, 7, 6, 5, 4, 3, 2], 1), 12, 'Test 104');
test(findMinimumTime([3, 6, 9, 12, 15, 18, 21, 24], 3), 13, 'Test 105');
test(findMinimumTime([1, 1, 1, 1, 1, 1, 1, 1], 1), 8, 'Test 106');
test(findMinimumTime([1, 3, 2, 4, 5, 6, 7, 8], 2), 8, 'Test 107');
test(findMinimumTime([5, 5, 5, 5, 5, 5, 5, 5], 1), 16, 'Test 108');
test(findMinimumTime([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812], 3), 119446, 'Test 109');
test(findMinimumTime([9,8,7,6,5,4,3,2], 3), 9, 'Test 110');
test(findMinimumTime([8,6,4,2], 1), 8, 'Test 111');
test(findMinimumTime([8, 7, 6, 5, 4, 3, 2, 1], 2), 8, 'Test 112');
test(findMinimumTime([1, 2, 3, 4, 5, 6, 7, 8], 2), 8, 'Test 113');
test(findMinimumTime([8,7,6,5,4,3,2,1], 8), 8, 'Test 114');
test(findMinimumTime([8, 4, 2, 1], 3), 4, 'Test 115');
test(findMinimumTime([10, 20, 30], 5), 17, 'Test 116');
test(findMinimumTime([10, 20, 30, 40, 50, 60, 70, 80], 3), 40, 'Test 117');
test(findMinimumTime([8, 6, 7, 5, 3, 0, 9], 2), 6, 'Test 118');
test(findMinimumTime([5,8,3,7], 3), 7, 'Test 119');
test(findMinimumTime([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993], 10), 1245257, 'Test 120');
test(findMinimumTime([3, 3, 3, 3, 3, 3, 3, 3], 2), 10, 'Test 121');
test(findMinimumTime([2, 4, 6, 8, 10, 12, 14, 16], 3), 9, 'Test 122');
test(findMinimumTime([1, 3, 5, 7, 9], 1), 9, 'Test 123');
test(findMinimumTime([1, 1, 1, 1], 1), 4, 'Test 124');
test(findMinimumTime([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812], 5), 76642, 'Test 125');
test(findMinimumTime([5], 5), 5, 'Test 126');
test(findMinimumTime([5,3,8,6], 3), 7, 'Test 127');
test(findMinimumTime([8,7,6,5,4,3,2,1], 10), 8, 'Test 128');
test(findMinimumTime([8,6,4,2,1,3,5,7], 2), 8, 'Test 129');
test(findMinimumTime([7, 6, 5, 4, 3, 2, 1], 2), 7, 'Test 130');
test(findMinimumTime([10, 9, 8, 7, 6, 5, 4, 3], 3), 10, 'Test 131');
test(findMinimumTime([10,20,30], 10), 14, 'Test 132');
test(findMinimumTime([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 10), 1245267, 'Test 133');
test(findMinimumTime([5, 5, 5, 5, 5, 5, 5, 5], 5), 12, 'Test 134');
test(findMinimumTime([3, 4, 1], 1), 4, 'Test 135');
test(findMinimumTime([5, 5, 5, 5], 5), 8, 'Test 136');
test(findMinimumTime([1000000, 1000000, 1000000], 5), 1257577, 'Test 137');
test(findMinimumTime([10,20,30,40,50,60,70,80], 5), 30, 'Test 138');
test(findMinimumTime([5,3,2,6,8,7,4,1], 3), 8, 'Test 139');
test(findMinimumTime([1000000,1000000,1000000], 10), 1138530, 'Test 140');
test(findMinimumTime([5,10,15,20,25,30,35,40], 5), 15, 'Test 141');
test(findMinimumTime([2, 5, 4], 2), 5, 'Test 142');
test(findMinimumTime([10,20,30,40,50,60,70,80], 2), 53, 'Test 143');
test(findMinimumTime([1000000, 1000000, 1000000], 3), 1392858, 'Test 144');
test(findMinimumTime([1,3,5,7,9,11,13,15], 2), 8, 'Test 145');
test(findMinimumTime([10,20,30,40,50,60,70,80], 10), 20, 'Test 146');
test(findMinimumTime([8,6,4,2,1,3,5,7], 3), 8, 'Test 147');
test(findMinimumTime([7,14,21,28], 7), 12, 'Test 148');
test(findMinimumTime([8, 7, 6, 5, 4, 3, 2, 1], 10), 8, 'Test 149');
test(findMinimumTime([8, 6, 7, 5, 3, 0, 9], 3), 6, 'Test 150');
test(findMinimumTime([5, 5, 5, 5, 5, 5, 5, 5], 3), 13, 'Test 151');
test(findMinimumTime([2, 4, 6, 8, 10], 2), 8, 'Test 152');
test(findMinimumTime([1000000, 1000000, 1000000, 1000000], 10), 1170789, 'Test 153');
test(findMinimumTime([2, 4, 6, 8, 10, 12, 14, 16], 1), 16, 'Test 154');
test(findMinimumTime([1,3,5,7,9,11,13,15], 4), 8, 'Test 155');
test(findMinimumTime([1000000, 1000000, 1000000], 1), 1833334, 'Test 156');
test(findMinimumTime([1,3,5,7,9,11,13,15], 3), 8, 'Test 157');
test(findMinimumTime([15,13,11,9,7,5,3,1], 2), 8, 'Test 158');
test(findMinimumTime([10, 9, 8, 7, 6, 5, 4, 3], 1), 15, 'Test 159');
test(findMinimumTime([1,2,3,4,5,6,7,8], 8), 8, 'Test 160');
test(findMinimumTime([1000000,500000,250000,125000,62500,31250,15625,7812], 10), 42972, 'Test 161');
test(findMinimumTime([5, 10, 15, 20], 1), 20, 'Test 162');
test(findMinimumTime([1000000,999999,999998,999997,999996,999995,999994,999993], 10), 1245257, 'Test 163');
test(findMinimumTime([5, 10, 15], 3), 11, 'Test 164');
test(findMinimumTime([1, 3, 5, 7, 9, 11, 13, 15], 3), 8, 'Test 165');
test(findMinimumTime([7,7,7,7,7,7,7,7], 3), 15, 'Test 166');
test(findMinimumTime([5, 10, 15, 20], 5), 10, 'Test 167');
test(findMinimumTime([8,6,4,2], 3), 5, 'Test 168');
test(findMinimumTime([1000000, 1000000, 1000000], 10), 1138530, 'Test 169');
test(findMinimumTime([1000000, 500000, 250000], 5), 424244, 'Test 170');
test(findMinimumTime([1], 1), 1, 'Test 171');
test(findMinimumTime([7,2,9], 5), 5, 'Test 172');
test(findMinimumTime([8, 6, 4, 2, 8, 6, 4, 2], 2), 9, 'Test 173');
test(findMinimumTime([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993], 5), 1466185, 'Test 174');
test(findMinimumTime([1000000,1000000,1000000], 1), 1833334, 'Test 175');

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
