// Test: 1534. Count Good Triplets
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { countGoodTriplets } = require("./solution");

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

console.log("\n1534. Count Good Triplets\n");

test(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3), 4, 'Test 1');
test(countGoodTriplets([1,3,5,7,9], 2, 3, 4), 3, 'Test 2');
test(countGoodTriplets([1,1,2,2,3], 0, 0, 1), 0, 'Test 3');
test(countGoodTriplets([10,20,30,40,50], 5, 10, 15), 0, 'Test 4');
test(countGoodTriplets([10,20,30,40,50], 15, 25, 35), 5, 'Test 5');
test(countGoodTriplets([0,0,0,0,0], 0, 0, 0), 10, 'Test 6');
test(countGoodTriplets([10,20,30,40,50], 15, 15, 15), 0, 'Test 7');
test(countGoodTriplets([10,20,30,40,50], 10, 10, 10), 0, 'Test 8');
test(countGoodTriplets([1,3,5,7,9], 2, 2, 2), 0, 'Test 9');
test(countGoodTriplets([0,0,0,0,0], 1, 1, 1), 10, 'Test 10');
test(countGoodTriplets([0,0,0,0], 1, 1, 1), 4, 'Test 11');
test(countGoodTriplets([1,5,6,8,10,14,15,18,20,22], 4, 3, 5), 8, 'Test 12');
test(countGoodTriplets([5,8,12,15,19,22,25,28,31,34], 5, 7, 10), 14, 'Test 13');
test(countGoodTriplets([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 1, 1, 2), 88, 'Test 14');
test(countGoodTriplets([5,8,12,15,18,22,25,28,31], 5, 5, 10), 7, 'Test 15');
test(countGoodTriplets([3,1,4,1,5,9,2,6,5,3,5], 2, 2, 4), 44, 'Test 16');
test(countGoodTriplets([10, 20, 20, 20, 30, 40, 50, 60, 70, 80], 5, 5, 10), 1, 'Test 17');
test(countGoodTriplets([7, 1, 5, 3, 6, 4, 2, 8, 9], 2, 3, 4), 20, 'Test 18');
test(countGoodTriplets([9,8,7,6,5,4,3,2,1,0], 2, 2, 2), 8, 'Test 19');
test(countGoodTriplets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 0, 0, 0), 1140, 'Test 20');
test(countGoodTriplets([100,200,300,400,500,600,700,800,900], 150, 250, 350), 13, 'Test 21');
test(countGoodTriplets([5,8,12,15,20,22,25], 5, 6, 7), 4, 'Test 22');
test(countGoodTriplets([1,1,1,1,1,1,1,1,1,1], 0, 0, 0), 120, 'Test 23');
test(countGoodTriplets([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 10, 20, 30), 25, 'Test 24');
test(countGoodTriplets([10,15,20,25,30,35,40,45,50,55,60,65,70,75,80], 5, 10, 15), 25, 'Test 25');
test(countGoodTriplets([5, 8, 8, 10, 15, 17], 5, 3, 8), 5, 'Test 26');
test(countGoodTriplets([1, 5, 9, 13, 17, 21, 25, 29, 33], 4, 4, 8), 7, 'Test 27');
test(countGoodTriplets([1,2,3,4,3,2,1,2,3,4], 1, 1, 2), 54, 'Test 28');
test(countGoodTriplets([15,10,15,10,15,10,15], 5, 5, 10), 35, 'Test 29');
test(countGoodTriplets([100,200,300,400,500,600,700,800,900,1000], 100, 200, 300), 15, 'Test 30');
test(countGoodTriplets([1000,900,800,700,600,500,400,300,200,100,0], 100, 200, 300), 17, 'Test 31');
test(countGoodTriplets([9,7,5,3,1,2,4,6,8,0], 1, 2, 3), 8, 'Test 32');
test(countGoodTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 2, 2, 3), 37, 'Test 33');
test(countGoodTriplets([7, 3, 19, 5, 11, 13, 17, 15, 2, 9], 6, 5, 10), 24, 'Test 34');
test(countGoodTriplets([1,2,3,1,2,3,1,2,3,1,2,3], 1, 1, 2), 132, 'Test 35');
test(countGoodTriplets([3,3,3,3,3,3,3,3,3,3], 0, 0, 0), 120, 'Test 36');
test(countGoodTriplets([3,1,4,1,5,9,2,6,5,3,5], 2, 3, 4), 58, 'Test 37');
test(countGoodTriplets([5, 8, 2, 3, 6, 9, 10, 12], 3, 4, 5), 16, 'Test 38');
test(countGoodTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1, 2, 3), 25, 'Test 39');
test(countGoodTriplets([2,4,6,8,10,12,14,16,18,20], 1, 1, 1), 0, 'Test 40');
test(countGoodTriplets([100, 200, 300, 400, 500, 600, 700, 800, 900], 100, 100, 100), 0, 'Test 41');
test(countGoodTriplets([100,200,150,300,250,400,350,500,450,600], 50, 100, 150), 6, 'Test 42');
test(countGoodTriplets([9,8,7,6,5,4,3,2,1,0], 1, 1, 1), 0, 'Test 43');
test(countGoodTriplets([100,200,300,400,500,600,700,800,900,1000], 150, 200, 250), 8, 'Test 44');
test(countGoodTriplets([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 20, 30, 40), 64, 'Test 45');
test(countGoodTriplets([5,5,5,5,5,5,5,5,5,5], 5, 5, 5), 120, 'Test 46');
test(countGoodTriplets([4,4,4,4,4,4,4,4,4,4], 0, 0, 0), 120, 'Test 47');
test(countGoodTriplets([1,2,3,4,5,6,7,8,9,10], 0, 0, 1), 0, 'Test 48');
test(countGoodTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10], 3, 3, 3), 324, 'Test 49');
test(countGoodTriplets([0,1,0,1,0,1,0,1,0,1], 1, 1, 2), 120, 'Test 50');
test(countGoodTriplets([4, 9, 1, 3, 13, 12, 7], 6, 4, 10), 8, 'Test 51');
test(countGoodTriplets([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2, 2, 4), 8, 'Test 52');
test(countGoodTriplets([1,2,3,4,5,6,7,8,9,10], 1, 1, 2), 8, 'Test 53');
test(countGoodTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1, 1, 1), 0, 'Test 54');
test(countGoodTriplets([8, 12, 15, 20, 25, 30, 35, 40, 45, 50], 5, 10, 15), 15, 'Test 55');
test(countGoodTriplets([5,8,12,15,16,20,25,30], 7, 5, 10), 12, 'Test 56');
test(countGoodTriplets([1, 5, 9, 13, 17, 21, 25, 29, 33, 37], 4, 8, 12), 15, 'Test 57');
test(countGoodTriplets([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8], 0, 0, 0), 455, 'Test 58');
test(countGoodTriplets([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57], 4, 8, 12), 25, 'Test 59');
test(countGoodTriplets([50,40,30,20,10,0,-10,-20,-30,-40,-50], 15, 25, 35), 17, 'Test 60');
test(countGoodTriplets([4, 4, 4, 4, 4, 4, 4, 4, 4], 0, 0, 0), 84, 'Test 61');
test(countGoodTriplets([9,10,11,12,13,14,15,16,17,18,19], 1, 1, 2), 9, 'Test 62');
test(countGoodTriplets([2,5,1,2,10,9,10,6], 4, 4, 7), 15, 'Test 63');
test(countGoodTriplets([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 0, 0, 0), 455, 'Test 64');
test(countGoodTriplets([5,3,7,8,2,1,9,6,4,10], 5, 5, 5), 60, 'Test 65');
test(countGoodTriplets([10,20,30,10,20,30,10,20,30,10,20,30], 10, 20, 30), 166, 'Test 66');
test(countGoodTriplets([10,20,30,40,50,60,70,80,90,100], 9, 19, 29), 0, 'Test 67');
test(countGoodTriplets([1,5,10,15,20,25,30,35,40,45,50,55,60,65,70], 4, 5, 6), 0, 'Test 68');
test(countGoodTriplets([999,998,997,996,995,994,993,992,991,990], 5, 5, 5), 60, 'Test 69');
test(countGoodTriplets([100,90,80,70,60,50,40,30,20,10], 15, 15, 20), 8, 'Test 70');
test(countGoodTriplets([999,998,997,996,995,994,993,992,991,990], 10, 10, 10), 120, 'Test 71');
test(countGoodTriplets([2,4,6,8,10,12,14,16,18,20], 2, 3, 5), 8, 'Test 72');
test(countGoodTriplets([1,5,3,2,4,8,7,6,9,0], 3, 3, 5), 34, 'Test 73');
test(countGoodTriplets([34, 23, 54, 28, 90, 56, 78, 45, 12, 67], 20, 25, 30), 15, 'Test 74');
test(countGoodTriplets([50,55,60,65,70,75,80,85,90,95,100], 5, 10, 15), 17, 'Test 75');
test(countGoodTriplets([3,3,3,3,3,3,3,3,3,3], 1, 1, 1), 120, 'Test 76');
test(countGoodTriplets([7,3,8,1,4,6,5,2,9,0], 1, 1, 2), 3, 'Test 77');
test(countGoodTriplets([15, 15, 15, 20, 20, 20, 25, 25, 25], 5, 5, 10), 66, 'Test 78');
test(countGoodTriplets([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 0, 0, 0), 1140, 'Test 79');
test(countGoodTriplets([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 1, 1, 2), 100, 'Test 80');
test(countGoodTriplets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 20, 30), 15, 'Test 81');
test(countGoodTriplets([5,8,2,4,3,7,6,9,1], 3, 4, 5), 35, 'Test 82');
test(countGoodTriplets([30, 40, 50, 60, 70, 80, 90, 100, 110], 10, 10, 20), 7, 'Test 83');
test(countGoodTriplets([2, 2, 2, 2, 2], 0, 0, 0), 10, 'Test 84');
test(countGoodTriplets([1,10,20,30,40,50,60,70,80,90,100], 15, 25, 35), 17, 'Test 85');
test(countGoodTriplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 1, 1), 0, 'Test 86');
test(countGoodTriplets([1,4,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 4, 5, 6), 214, 'Test 87');
test(countGoodTriplets([5,15,25,35,45,55,65,75,85,95], 10, 10, 20), 8, 'Test 88');
test(countGoodTriplets([1,5,9,13,17,21,25,29,33,37,41,45,49], 4, 6, 8), 11, 'Test 89');
test(countGoodTriplets([8,1,3,2,10,1,4], 1, 2, 3), 4, 'Test 90');
test(countGoodTriplets([100,200,300,400,500,600,700,800,900,1000], 100, 150, 200), 8, 'Test 91');
test(countGoodTriplets([5,6,7,8,9,10,5,6,7,8,9,10], 3, 3, 4), 152, 'Test 92');
test(countGoodTriplets([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 15, 20, 25), 8, 'Test 93');
test(countGoodTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1, 1, 1), 0, 'Test 94');
test(countGoodTriplets([1,1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10], 1, 1, 2), 112, 'Test 95');
test(countGoodTriplets([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57], 3, 4, 5), 0, 'Test 96');
test(countGoodTriplets([999,998,997,996,995,994,993,992,991,990], 1, 2, 3), 15, 'Test 97');
test(countGoodTriplets([0,1,1,1,2,2,2,3,3,3,4,4,4], 1, 1, 2), 124, 'Test 98');
test(countGoodTriplets([5,1,4,1,3,6,2], 2, 3, 5), 14, 'Test 99');
test(countGoodTriplets([5,8,12,15,16,23,42], 5, 7, 10), 6, 'Test 100');
test(countGoodTriplets([1,2,3,4,5,6,7,8,9,10], 0, 0, 0), 0, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

