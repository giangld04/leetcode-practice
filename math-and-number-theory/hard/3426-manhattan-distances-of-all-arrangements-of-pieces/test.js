// Test: 3426. Manhattan Distances Of All Arrangements Of Pieces
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { distanceSum } = require("./solution");

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

console.log("\n3426. Manhattan Distances Of All Arrangements Of Pieces\n");

test(distanceSum(5, 5, 5), 1771000, 'Test 1');
test(distanceSum(100, 100, 10), 384963906, 'Test 2');
test(distanceSum(10, 10, 20), 80781589, 'Test 3');
test(distanceSum(1, 4, 3), 20, 'Test 4');
test(distanceSum(10, 10, 10), 800580356, 'Test 5');
test(distanceSum(10, 10, 5), 19167965, 'Test 6');
test(distanceSum(3, 3, 4), 1512, 'Test 7');
test(distanceSum(2, 2, 2), 8, 'Test 8');
test(distanceSum(5, 5, 25), 1000, 'Test 9');
test(distanceSum(50, 50, 200), 461891397, 'Test 10');
test(distanceSum(20, 20, 100), 642676804, 'Test 11');
test(distanceSum(1000, 1, 500), 349233848, 'Test 12');
test(distanceSum(20, 20, 40), 112638724, 'Test 13');
test(distanceSum(100, 100, 100), 981249729, 'Test 14');
test(distanceSum(4, 11, 22), 286084962, 'Test 15');
test(distanceSum(7, 7, 10), 742720485, 'Test 16');
test(distanceSum(7, 8, 20), 830928354, 'Test 17');
test(distanceSum(50, 50, 250), 133218151, 'Test 18');
test(distanceSum(100, 100, 200), 917140960, 'Test 19');
test(distanceSum(25, 35, 500), 268900107, 'Test 20');
test(distanceSum(8, 5, 10), 293801805, 'Test 21');
test(distanceSum(8, 7, 30), 245055662, 'Test 22');
test(distanceSum(25, 20, 10), 467663753, 'Test 23');
test(distanceSum(3, 9, 8), 248648400, 'Test 24');
test(distanceSum(15, 15, 50), 144305104, 'Test 25');
test(distanceSum(2, 8, 5), 145600, 'Test 26');
test(distanceSum(100, 1, 50), 596684460, 'Test 27');
test(distanceSum(2, 10, 15), 6511680, 'Test 28');
test(distanceSum(15, 15, 20), 814749998, 'Test 29');
test(distanceSum(7, 7, 49), 5488, 'Test 30');
test(distanceSum(5, 20, 20), 350976988, 'Test 31');
test(distanceSum(3, 30, 15), 694221074, 'Test 32');
test(distanceSum(2, 10, 9), 24186240, 'Test 33');
test(distanceSum(50, 2, 49), 464438831, 'Test 34');
test(distanceSum(100, 1, 10), 642930774, 'Test 35');
test(distanceSum(15, 10, 50), 608985873, 'Test 36');
test(distanceSum(12, 15, 120), 614641576, 'Test 37');
test(distanceSum(100, 100, 1000), 934487950, 'Test 38');
test(distanceSum(2, 20, 20), 162144738, 'Test 39');
test(distanceSum(6, 9, 30), 84183825, 'Test 40');
test(distanceSum(9, 4, 15), 395647069, 'Test 41');
test(distanceSum(10, 10, 15), 633547079, 'Test 42');
test(distanceSum(20, 15, 100), 132852497, 'Test 43');
test(distanceSum(8, 9, 40), 353742539, 'Test 44');
test(distanceSum(3, 7, 6), 2713200, 'Test 45');
test(distanceSum(9, 9, 40), 14076899, 'Test 46');
test(distanceSum(10, 5, 15), 518666205, 'Test 47');
test(distanceSum(25, 25, 300), 287498383, 'Test 48');
test(distanceSum(50, 50, 125), 203227794, 'Test 49');
test(distanceSum(20, 5, 10), 725438, 'Test 50');
test(distanceSum(7, 7, 14), 685863003, 'Test 51');
test(distanceSum(50, 2, 100), 85800, 'Test 52');
test(distanceSum(4, 6, 12), 594914320, 'Test 53');
test(distanceSum(15, 7, 50), 236557592, 'Test 54');
test(distanceSum(1, 1000, 10), 122738391, 'Test 55');
test(distanceSum(1, 100, 50), 596684460, 'Test 56');
test(distanceSum(4, 12, 20), 723849533, 'Test 57');
test(distanceSum(9, 11, 99), 32340, 'Test 58');
test(distanceSum(50, 50, 100), 31872683, 'Test 59');
test(distanceSum(6, 7, 21), 662311702, 'Test 60');
test(distanceSum(12, 5, 35), 152704514, 'Test 61');
test(distanceSum(6, 6, 10), 753633765, 'Test 62');
test(distanceSum(7, 8, 15), 927055315, 'Test 63');
test(distanceSum(20, 15, 120), 745855507, 'Test 64');
test(distanceSum(8, 9, 45), 569458134, 'Test 65');
test(distanceSum(100, 100, 50), 106535598, 'Test 66');
test(distanceSum(9, 12, 54), 458241022, 'Test 67');
test(distanceSum(100, 100, 10000), 332999979, 'Test 68');
test(distanceSum(3, 8, 24), 1012, 'Test 69');
test(distanceSum(20, 5, 50), 543733780, 'Test 70');
test(distanceSum(50, 2, 10), 281508913, 'Test 71');
test(distanceSum(7, 3, 10), 52907400, 'Test 72');
test(distanceSum(10, 10, 50), 434987024, 'Test 73');
test(distanceSum(6, 6, 18), 982764729, 'Test 74');
test(distanceSum(5, 10, 25), 329316644, 'Test 75');
test(distanceSum(6, 5, 20), 931360310, 'Test 76');
test(distanceSum(7, 5, 15), 136117652, 'Test 77');
test(distanceSum(40, 40, 1200), 350729036, 'Test 78');
test(distanceSum(15, 20, 100), 132852497, 'Test 79');
test(distanceSum(100, 100, 5), 666666283, 'Test 80');
test(distanceSum(1000, 1, 10), 122738391, 'Test 81');
test(distanceSum(15, 15, 100), 268949671, 'Test 82');
test(distanceSum(50, 50, 500), 833366694, 'Test 83');
test(distanceSum(75, 75, 300), 770041881, 'Test 84');
test(distanceSum(20, 5, 15), 541933847, 'Test 85');
test(distanceSum(20, 25, 100), 883287723, 'Test 86');
test(distanceSum(1, 1000, 500), 349233848, 'Test 87');
test(distanceSum(7, 6, 20), 753814653, 'Test 88');
test(distanceSum(30, 30, 90), 482659936, 'Test 89');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

