// Test: 1995. Count Special Quadruplets
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { countQuadruplets } = require("./solution");

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

console.log("\n1995. Count Special Quadruplets\n");

test(countQuadruplets([1,2,3,6]), 1, 'Test 1');
test(countQuadruplets([100,1,100,1,100,1,100,1]), 0, 'Test 2');
test(countQuadruplets([1,3,6,10,15,21,28]), 3, 'Test 3');
test(countQuadruplets([1,3,5,0,0,1,3,5]), 5, 'Test 4');
test(countQuadruplets([5,5,5,5,5,5,5,5]), 0, 'Test 5');
test(countQuadruplets([1,2,3,4,5,6,10]), 4, 'Test 6');
test(countQuadruplets([1,2,3,4,5,6]), 1, 'Test 7');
test(countQuadruplets([10,20,30,40,50,60,70]), 2, 'Test 8');
test(countQuadruplets([1,1,2,2,3,3,4,4]), 4, 'Test 9');
test(countQuadruplets([1,1,2,2,3,3,4,4,5,5]), 12, 'Test 10');
test(countQuadruplets([5,5,5,5,5,5,5,5,5,5]), 0, 'Test 11');
test(countQuadruplets([5,5,5,5,5,5,5]), 0, 'Test 12');
test(countQuadruplets([10,20,30,40,50,60,70,80,90,100]), 11, 'Test 13');
test(countQuadruplets([3,3,6,4,5]), 0, 'Test 14');
test(countQuadruplets([1,2,3,4,5,6,7,8,9,10]), 11, 'Test 15');
test(countQuadruplets([1,1,1,3,5]), 4, 'Test 16');
test(countQuadruplets([1,3,6,10,15,21,28,36]), 3, 'Test 17');
test(countQuadruplets([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 135]), 21, 'Test 18');
test(countQuadruplets([1,3,6,10,15,21,28,36,45,55,66]), 7, 'Test 19');
test(countQuadruplets([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 147, 'Test 20');
test(countQuadruplets([7, 14, 21, 28, 35, 42, 49, 56, 63, 70]), 11, 'Test 21');
test(countQuadruplets([1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10]), 40, 'Test 22');
test(countQuadruplets([30,20,10,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), 147, 'Test 23');
test(countQuadruplets([4,3,2,1,8,7,6,5,12,11,10,9,16,15,14,13,20,19,18,17]), 143, 'Test 24');
test(countQuadruplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 19]), 0, 'Test 25');
test(countQuadruplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12]), 0, 'Test 26');
test(countQuadruplets([1,2,3,4,5,6,7,8,9,10,15]), 21, 'Test 27');
test(countQuadruplets([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 28');
test(countQuadruplets([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 29');
test(countQuadruplets([1,2,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99]), 817, 'Test 30');
test(countQuadruplets([50, 25, 25, 75, 50, 50, 100, 50, 75, 100]), 7, 'Test 31');
test(countQuadruplets([5,5,5,5,15,15,15,15,25,25,25,25,35,35,35,35]), 304, 'Test 32');
test(countQuadruplets([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 174, 'Test 33');
test(countQuadruplets([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 34');
test(countQuadruplets([1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 60]), 123, 'Test 35');
test(countQuadruplets([1, 2, 3, 6, 3, 6, 9, 12, 15, 18, 21, 24]), 34, 'Test 36');
test(countQuadruplets([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 927, 'Test 37');
test(countQuadruplets([5, 5, 5, 5, 5, 5, 5, 15, 5, 5, 5, 5, 5, 5, 5]), 35, 'Test 38');
test(countQuadruplets([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 358, 'Test 39');
test(countQuadruplets([5, 5, 5, 5, 5, 15, 5, 5, 5, 5]), 10, 'Test 40');
test(countQuadruplets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 41');
test(countQuadruplets([5,1,4,3,6,2,7,8,9,10]), 10, 'Test 42');
test(countQuadruplets([50,45,40,35,30,25,20,15,10,5,1,2,3,4,5]), 0, 'Test 43');
test(countQuadruplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 53, 'Test 44');
test(countQuadruplets([2,2,2,6,6,6,18,18,18]), 6, 'Test 45');
test(countQuadruplets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]), 31, 'Test 46');
test(countQuadruplets([1, 1, 1, 1, 4, 1, 1, 1, 1, 5]), 0, 'Test 47');
test(countQuadruplets([3, 3, 6, 4, 5, 5, 5, 15, 15, 15, 15, 30, 30, 30, 30]), 16, 'Test 48');
test(countQuadruplets([1, 2, 3, 4, 10, 11, 12, 13, 20, 21, 22, 23, 30, 31, 32, 33]), 19, 'Test 49');
test(countQuadruplets([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80]), 0, 'Test 50');
test(countQuadruplets([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 30]), 21, 'Test 51');
test(countQuadruplets([9, 8, 7, 6, 5, 4, 3, 2, 1, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20]), 11, 'Test 52');
test(countQuadruplets([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 244, 'Test 53');
test(countQuadruplets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 54');
test(countQuadruplets([5,5,5,15,15,15,30]), 3, 'Test 55');
test(countQuadruplets([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 244, 'Test 56');
test(countQuadruplets([10,9,8,7,6,5,4,3,2,1,15,14,13,12,11]), 39, 'Test 57');
test(countQuadruplets([7, 1, 2, 4, 5, 3, 8, 6, 9, 10]), 10, 'Test 58');
test(countQuadruplets([3, 3, 3, 9, 3, 3, 3, 3, 3, 3, 9, 3]), 85, 'Test 59');
test(countQuadruplets([5, 5, 5, 15, 15, 25, 25]), 14, 'Test 60');
test(countQuadruplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 147, 'Test 61');
test(countQuadruplets([2,2,2,6,2,2,2,6,2,2,2,6,2,2,2]), 105, 'Test 62');
test(countQuadruplets([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 15, 15]), 420, 'Test 63');
test(countQuadruplets([50, 25, 100, 75, 50, 125, 100, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450]), 212, 'Test 64');
test(countQuadruplets([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60]), 147, 'Test 65');
test(countQuadruplets([5, 5, 5, 15, 10, 15, 20]), 5, 'Test 66');
test(countQuadruplets([8, 2, 2, 4, 6, 10, 2, 6, 2, 12, 8, 4]), 22, 'Test 67');
test(countQuadruplets([10,9,8,7,6,5,4,3,2,1]), 0, 'Test 68');
test(countQuadruplets([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300,325]), 55, 'Test 69');
test(countQuadruplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20]), 0, 'Test 70');
test(countQuadruplets([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 53, 'Test 71');
test(countQuadruplets([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36]), 0, 'Test 72');
test(countQuadruplets([1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54]), 119, 'Test 73');
test(countQuadruplets([1,2,4,8,16,32,64,128,256,512,1024,2048]), 0, 'Test 74');
test(countQuadruplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11, 'Test 75');
test(countQuadruplets([10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), 83, 'Test 76');
test(countQuadruplets([8, 8, 8, 8, 32, 8, 8, 8, 8, 8, 8, 8]), 0, 'Test 77');
test(countQuadruplets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 78');
test(countQuadruplets([2, 5, 1, 8, 3, 9, 4, 6]), 3, 'Test 79');
test(countQuadruplets([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 586, 'Test 80');
test(countQuadruplets([5,5,5,5,5,15,5,5,5,5]), 10, 'Test 81');
test(countQuadruplets([1, 1, 2, 3, 3, 5, 5, 6, 7, 7, 8, 9, 9, 10, 11, 11, 13, 13, 14, 15]), 218, 'Test 82');
test(countQuadruplets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 23, 'Test 83');
test(countQuadruplets([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 53, 'Test 84');
test(countQuadruplets([5, 1, 4, 2, 8, 10, 7]), 3, 'Test 85');
test(countQuadruplets([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]), 0, 'Test 86');
test(countQuadruplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 2972, 'Test 87');
test(countQuadruplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]), 21, 'Test 88');
test(countQuadruplets([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), 147, 'Test 89');
test(countQuadruplets([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765]), 17, 'Test 90');
test(countQuadruplets([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85]), 0, 'Test 91');
test(countQuadruplets([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250]), 314, 'Test 92');
test(countQuadruplets([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 110]), 104, 'Test 93');
test(countQuadruplets([5,1,5,5,5,5,5,10]), 0, 'Test 94');
test(countQuadruplets([30, 20, 10, 60, 50, 40, 100, 90, 80, 70]), 10, 'Test 95');
test(countQuadruplets([1,2,3,6,9,12,15,18,21,24,27,30,33,36,39]), 43, 'Test 96');
test(countQuadruplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,21]), 76, 'Test 97');
test(countQuadruplets([2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]), 166, 'Test 98');
test(countQuadruplets([5,15,10,10,10,10,25,20,30,40,50,60,70,80,90,100]), 120, 'Test 99');
test(countQuadruplets([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300]), 575, 'Test 100');
test(countQuadruplets([1, 2, 3, 6, 7, 8, 11, 12, 15, 16, 19, 20, 23, 24, 27, 28]), 61, 'Test 101');
test(countQuadruplets([9,5,3,7,2,8,10,6,4,12,1,11]), 9, 'Test 102');
test(countQuadruplets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300]), 48, 'Test 103');
test(countQuadruplets([7,3,6,2,4,8,10,15,1,9]), 5, 'Test 104');
test(countQuadruplets([42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42]), 0, 'Test 105');
test(countQuadruplets([90,80,70,60,50,40,30,20,10,100,9,8,7,6,5,4,3,2,1,101]), 12, 'Test 106');
test(countQuadruplets([3,3,3,6,9,12,15,18,21,24,27]), 38, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

