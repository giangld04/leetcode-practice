// Test: 3131. Find The Integer Added To Array I
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { addedInteger } = require("./solution");

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

console.log("\n3131. Find The Integer Added To Array I\n");

test(addedInteger([10], [5]), -5, 'Test 1');
test(addedInteger([100,200,300], [150,250,350]), 50, 'Test 2');
test(addedInteger([1,2,3,4,5], [6,7,8,9,10]), 5, 'Test 3');
test(addedInteger([7,7,7], [10,10,10]), 3, 'Test 4');
test(addedInteger([50,50,50,50], [55,55,55,55]), 5, 'Test 5');
test(addedInteger([1000,0,500], [900,1000,400]), 400, 'Test 6');
test(addedInteger([500,500,500], [500,500,500]), 0, 'Test 7');
test(addedInteger([5,10,15], [8,13,18]), 3, 'Test 8');
test(addedInteger([0,0,0], [3,3,3]), 3, 'Test 9');
test(addedInteger([2,6,4], [9,7,5]), 3, 'Test 10');
test(addedInteger([999,999,999], [1000,1000,1000]), 1, 'Test 11');
test(addedInteger([500,500,500], [400,400,400]), -100, 'Test 12');
test(addedInteger([1000,0,500], [900,100,400]), 100, 'Test 13');
test(addedInteger([1,1,1,1], [1,1,1,1]), 0, 'Test 14');
test(addedInteger([1,2,3], [4,5,6]), 3, 'Test 15');
test(addedInteger([999, 999, 999, 999], [899, 899, 899, 899]), -100, 'Test 16');
test(addedInteger([999, 999, 999, 999], [994, 994, 994, 994]), -5, 'Test 17');
test(addedInteger([500, 500, 500, 500, 500], [450, 450, 450, 450, 450]), -50, 'Test 18');
test(addedInteger([2, 4, 6, 8, 10], [7, 9, 11, 13, 15]), 5, 'Test 19');
test(addedInteger([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10, 'Test 20');
test(addedInteger([0, 0, 0, 0, 0, 0, 0], [7, 7, 7, 7, 7, 7, 7]), 7, 'Test 21');
test(addedInteger([999, 998, 997, 996, 995], [994, 993, 992, 991, 990]), -5, 'Test 22');
test(addedInteger([10, 20, 30, 40, 50], [20, 30, 40, 50, 60]), 10, 'Test 23');
test(addedInteger([100, 200, 300, 400, 500, 600, 700, 800, 900], [90, 190, 290, 390, 490, 590, 690, 790, 890]), -10, 'Test 24');
test(addedInteger([10, 20, 30, 40, 50, 60], [15, 25, 35, 45, 55, 65]), 5, 'Test 25');
test(addedInteger([500, 500, 500, 500, 500], [0, 0, 0, 0, 0]), -500, 'Test 26');
test(addedInteger([123, 456, 789], [126, 459, 792]), 3, 'Test 27');
test(addedInteger([5, 15, 25, 35, 45], [5, 15, 25, 35, 45]), 0, 'Test 28');
test(addedInteger([500, 600, 700, 800, 900], [450, 550, 650, 750, 850]), -50, 'Test 29');
test(addedInteger([10, 20, 30, 40, 50], [1, 11, 21, 31, 41]), -9, 'Test 30');
test(addedInteger([999, 998, 997, 996], [900, 899, 898, 897]), -99, 'Test 31');
test(addedInteger([7, 14, 21, 28, 35], [12, 19, 26, 33, 40]), 5, 'Test 32');
test(addedInteger([100, 100, 100, 100], [200, 200, 200, 200]), 100, 'Test 33');
test(addedInteger([990, 980, 970, 960, 950], [1000, 990, 980, 970, 960]), 10, 'Test 34');
test(addedInteger([50, 25, 12, 6, 3, 1], [100, 75, 62, 56, 53, 51]), 50, 'Test 35');
test(addedInteger([5, 10, 15, 20, 25, 30], [10, 15, 20, 25, 30, 35]), 5, 'Test 36');
test(addedInteger([123, 456, 789], [128, 461, 794]), 5, 'Test 37');
test(addedInteger([800, 700, 600, 500, 400, 300], [900, 800, 700, 600, 500, 400]), 100, 'Test 38');
test(addedInteger([2, 4, 6, 8, 10, 12, 14], [7, 9, 11, 13, 15, 17, 19]), 5, 'Test 39');
test(addedInteger([999, 998, 997, 996], [994, 993, 992, 991]), -5, 'Test 40');
test(addedInteger([250, 350, 450, 550, 650], [245, 345, 445, 545, 645]), -5, 'Test 41');
test(addedInteger([5, 10, 15, 20, 25, 30], [0, 5, 10, 15, 20, 25]), -5, 'Test 42');
test(addedInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10, 'Test 43');
test(addedInteger([999, 998, 997, 996, 995], [1000, 999, 998, 997, 996]), 1, 'Test 44');
test(addedInteger([300, 300, 300, 300, 300, 300], [200, 200, 200, 200, 200, 200]), -100, 'Test 45');
test(addedInteger([7, 7, 7, 7, 7, 7], [12, 12, 12, 12, 12, 12]), 5, 'Test 46');
test(addedInteger([123, 456, 789], [130, 463, 796]), 7, 'Test 47');
test(addedInteger([5, 5, 5, 5, 5], [0, 0, 0, 0, 0]), -5, 'Test 48');
test(addedInteger([100, 200, 300, 400], [50, 150, 250, 350]), -50, 'Test 49');
test(addedInteger([100, 200, 300, 400, 500], [200, 300, 400, 500, 600]), 100, 'Test 50');
test(addedInteger([100, 200, 300, 400, 500], [50, 150, 250, 350, 450]), -50, 'Test 51');
test(addedInteger([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 10, 'Test 52');
test(addedInteger([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [50, 150, 250, 350, 450, 550, 650, 750, 850, 950]), -50, 'Test 53');
test(addedInteger([1, 3, 5, 7, 9], [6, 8, 10, 12, 14]), 5, 'Test 54');
test(addedInteger([450, 440, 430], [400, 390, 380]), -50, 'Test 55');
test(addedInteger([0, 2, 4, 6, 8, 10], [100, 102, 104, 106, 108, 110]), 100, 'Test 56');
test(addedInteger([10, 20, 30, 40, 50], [5, 15, 25, 35, 45]), -5, 'Test 57');
test(addedInteger([1000, 500, 250, 125, 62, 31, 15], [1005, 505, 255, 130, 67, 36, 20]), 5, 'Test 58');
test(addedInteger([100, 200, 300], [50, 150, 250]), -50, 'Test 59');
test(addedInteger([0, 100, 200, 300, 400], [1, 101, 201, 301, 401]), 1, 'Test 60');
test(addedInteger([1, 1, 2, 2, 3, 3], [101, 101, 102, 102, 103, 103]), 100, 'Test 61');
test(addedInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]), 1, 'Test 62');
test(addedInteger([999, 998, 997, 996], [996, 995, 994, 993]), -3, 'Test 63');
test(addedInteger([50, 100, 150, 200, 250], [40, 90, 140, 190, 240]), -10, 'Test 64');
test(addedInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 1, 'Test 65');
test(addedInteger([100, 200, 300, 400, 500, 600, 700, 800, 900], [105, 205, 305, 405, 505, 605, 705, 805, 905]), 5, 'Test 66');
test(addedInteger([50, 100, 150, 200, 250, 300], [50, 100, 150, 200, 250, 300]), 0, 'Test 67');
test(addedInteger([10, 20, 30, 40, 50], [0, 10, 20, 30, 40]), -10, 'Test 68');
test(addedInteger([50, 150, 250, 350, 450, 550], [100, 200, 300, 400, 500, 600]), 50, 'Test 69');
test(addedInteger([50, 100, 150, 200, 250], [45, 95, 145, 195, 245]), -5, 'Test 70');
test(addedInteger([1, 1, 1, 1, 1], [101, 101, 101, 101, 101]), 100, 'Test 71');
test(addedInteger([500, 400, 300, 200, 100], [510, 410, 310, 210, 110]), 10, 'Test 72');
test(addedInteger([250, 500, 750, 1000], [300, 550, 800, 1050]), 50, 'Test 73');
test(addedInteger([0, 1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10]), 5, 'Test 74');
test(addedInteger([200, 400, 600, 800, 1000], [150, 350, 550, 750, 950]), -50, 'Test 75');
test(addedInteger([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 5, 'Test 76');
test(addedInteger([999, 998, 997, 996, 995, 994, 993], [1000, 999, 998, 997, 996, 995, 994]), 1, 'Test 77');
test(addedInteger([5, 10, 15, 20, 25], [0, 5, 10, 15, 20]), -5, 'Test 78');
test(addedInteger([5, 15, 25, 35, 45, 55, 65], [-5, 5, 15, 25, 35, 45, 55]), -10, 'Test 79');
test(addedInteger([250, 250, 250, 250], [300, 300, 300, 300]), 50, 'Test 80');
test(addedInteger([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100], [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 105]), 5, 'Test 81');
test(addedInteger([100, 200, 300, 400, 500], [90, 190, 290, 390, 490]), -10, 'Test 82');
test(addedInteger([7, 14, 21, 28, 35], [0, 7, 14, 21, 28]), -7, 'Test 83');
test(addedInteger([100, 200, 300, 400, 500], [150, 250, 350, 450, 550]), 50, 'Test 84');
test(addedInteger([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), 5, 'Test 85');
test(addedInteger([250, 300, 350, 400, 450, 500], [200, 250, 300, 350, 400, 450]), -50, 'Test 86');
test(addedInteger([123, 456, 789], [223, 556, 889]), 100, 'Test 87');
test(addedInteger([999, 998, 997, 996], [1000, 999, 998, 997]), 1, 'Test 88');
test(addedInteger([1, 1, 2, 2, 3, 3], [6, 6, 7, 7, 8, 8]), 5, 'Test 89');
test(addedInteger([5, 10, 15, 20, 25], [15, 20, 25, 30, 35]), 10, 'Test 90');
test(addedInteger([1, 2, 3, 4, 5], [11, 12, 13, 14, 15]), 10, 'Test 91');
test(addedInteger([10, 20, 30, 40, 50], [15, 25, 35, 45, 55]), 5, 'Test 92');
test(addedInteger([500, 400, 300, 200, 100], [400, 300, 200, 100, 0]), -100, 'Test 93');
test(addedInteger([250, 300, 350, 400], [300, 350, 400, 450]), 50, 'Test 94');
test(addedInteger([1, 1, 1, 1, 1], [10, 10, 10, 10, 10]), 9, 'Test 95');
test(addedInteger([1, 1, 2, 2, 3, 3], [4, 4, 5, 5, 6, 6]), 3, 'Test 96');
test(addedInteger([100, 200, 300, 400, 500, 600], [95, 195, 295, 395, 495, 595]), -5, 'Test 97');
test(addedInteger([0, 100, 200, 300, 400], [100, 200, 300, 400, 500]), 100, 'Test 98');
test(addedInteger([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), 5, 'Test 99');
test(addedInteger([999, 888, 777, 666, 555], [1000, 889, 778, 667, 556]), 1, 'Test 100');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

