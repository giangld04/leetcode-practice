// Test: 1539. Kth Missing Positive Number
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { findKthPositive } = require("./solution");

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

console.log("\n1539. Kth Missing Positive Number\n");

test(findKthPositive([1,2,3,4,5,6,7,8,9,10], 10), 20, 'Test 1');
test(findKthPositive([10,20,30], 15), 16, 'Test 2');
test(findKthPositive([2,3,4,7,11], 5), 9, 'Test 3');
test(findKthPositive([5,6,7,8,9], 1), 1, 'Test 4');
test(findKthPositive([5,6,8,9,10], 3), 3, 'Test 5');
test(findKthPositive([1,3,5,7], 3), 6, 'Test 6');
test(findKthPositive([1,3,5,7,9], 4), 8, 'Test 7');
test(findKthPositive([10,20,30], 5), 5, 'Test 8');
test(findKthPositive([1,2,3,4,8,10,11], 5), 12, 'Test 9');
test(findKthPositive([1,2,3,4], 2), 6, 'Test 10');
test(findKthPositive([10,20,30,40], 15), 16, 'Test 11');
test(findKthPositive([1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58], 60), 80, 'Test 12');
test(findKthPositive([2,5,9,11,15,18,22,25], 15), 21, 'Test 13');
test(findKthPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 120, 'Test 14');
test(findKthPositive([1,2,4,8,16,32,64,128,256,512], 500), 509, 'Test 15');
test(findKthPositive([5,6,8,9,11,14,17,18,21], 10), 16, 'Test 16');
test(findKthPositive([5,10,15,20,25], 15), 18, 'Test 17');
test(findKthPositive([5,10,15,20,25,30,35,40,45,50], 20), 24, 'Test 18');
test(findKthPositive([7,14,21,28,35,42,49,56,63,70,77,84,91,98], 25), 29, 'Test 19');
test(findKthPositive([1, 3, 7, 15, 31, 63, 127], 200), 207, 'Test 20');
test(findKthPositive([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97], 120), 145, 'Test 21');
test(findKthPositive([3,7,11,15,19,23,27,31,35,39,43,47,51,55,59], 30), 40, 'Test 22');
test(findKthPositive([2,5,10,17,26,37,49,62,76,91,107,124,142,161,181], 25), 30, 'Test 23');
test(findKthPositive([1,4,6,8,11,13,15,17,19,22,24,26,28,30,32], 20), 35, 'Test 24');
test(findKthPositive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 30), 55, 'Test 25');
test(findKthPositive([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1000], 1000), 1011, 'Test 26');
test(findKthPositive([2,4,6,8,10,12,14,16,18,20], 15), 25, 'Test 27');
test(findKthPositive([1,4,8,13,18,23,28,33,38], 20), 26, 'Test 28');
test(findKthPositive([1, 4, 6, 9, 11, 15, 17, 20, 23], 10), 16, 'Test 29');
test(findKthPositive([1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 200), 221, 'Test 30');
test(findKthPositive([1, 4, 6, 8, 10, 12, 14, 16, 18, 20], 25), 35, 'Test 31');
test(findKthPositive([5,10,15,20,25], 10), 12, 'Test 32');
test(findKthPositive([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 100), 110, 'Test 33');
test(findKthPositive([2,5,10,15,20,25,30,35,40,45], 15), 19, 'Test 34');
test(findKthPositive([1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 75), 94, 'Test 35');
test(findKthPositive([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98], 150), 164, 'Test 36');
test(findKthPositive([1,2,5,8,10,13,16,19,22,25], 18), 28, 'Test 37');
test(findKthPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 60, 'Test 38');
test(findKthPositive([2, 6, 10, 14, 18, 22, 26], 15), 20, 'Test 39');
test(findKthPositive([1, 4, 9, 16, 25, 36, 49, 64, 81, 100], 75), 84, 'Test 40');
test(findKthPositive([3,6,9,12,15,18,21,24,27,30], 30), 40, 'Test 41');
test(findKthPositive([7,14,21,28,35,42,49,56,63,70], 30), 34, 'Test 42');
test(findKthPositive([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120], 150), 165, 'Test 43');
test(findKthPositive([1,10,20,30,40,50,60,70,80,90], 25), 28, 'Test 44');
test(findKthPositive([1,2,4,5,7,8,10,11,13,14], 25), 35, 'Test 45');
test(findKthPositive([1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71], 50), 63, 'Test 46');
test(findKthPositive([1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100], 100), 134, 'Test 47');
test(findKthPositive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 25), 45, 'Test 48');
test(findKthPositive([11,22,33,44,55,66,77,88,99,110], 50), 54, 'Test 49');
test(findKthPositive([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57], 30), 40, 'Test 50');
test(findKthPositive([1,2,3,5,8,13,21,34,55,89], 100), 110, 'Test 51');
test(findKthPositive([25, 50, 75, 100, 125, 150, 175, 200], 50), 52, 'Test 52');
test(findKthPositive([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45], 75), 90, 'Test 53');
test(findKthPositive([2,4,6,8,10,12,14,16,18,20], 10), 19, 'Test 54');
test(findKthPositive([3,6,9,12,15,18,21,24,27,30], 7), 10, 'Test 55');
test(findKthPositive([3, 7, 11, 15, 19, 23, 27, 31, 35], 20), 26, 'Test 56');
test(findKthPositive([3,8,12,15,19,23,27,31,35,39,43,47,51,55,59,63,67,71,75,79], 50), 66, 'Test 57');
test(findKthPositive([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140], 30), 34, 'Test 58');
test(findKthPositive([1,4,9,16,25,36,49,64,81,100], 50), 57, 'Test 59');
test(findKthPositive([2,5,9,12,15,18,21,24,27,30], 20), 29, 'Test 60');
test(findKthPositive([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126,133,140], 50), 58, 'Test 61');
test(findKthPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 30, 'Test 62');
test(findKthPositive([3,9,15,21,27,33,39,45,51,57,63,69,75,81,87,93,99], 40), 48, 'Test 63');
test(findKthPositive([1,2,3,5,6,7,9,10,12,13,15,16,18,19,21], 30), 45, 'Test 64');
test(findKthPositive([2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597], 100), 109, 'Test 65');
test(findKthPositive([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 10), 19, 'Test 66');
test(findKthPositive([1,2,4,6,8,10,12,14,16,18,20], 15), 26, 'Test 67');
test(findKthPositive([1,2,3,5,6,7,8,10,11,12,14,15,16,18,19,20], 15), 31, 'Test 68');
test(findKthPositive([1,5,10,15,20,25,30,35,40,45], 30), 38, 'Test 69');
test(findKthPositive([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45], 7), 10, 'Test 70');
test(findKthPositive([100,200,300,400,500,600,700,800,900,1000], 450), 454, 'Test 71');
test(findKthPositive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 500), 550, 'Test 72');
test(findKthPositive([5,10,15,20,25,30], 12), 14, 'Test 73');
test(findKthPositive([2,5,7,11,14,17,20,23,26,29], 40), 50, 'Test 74');
test(findKthPositive([1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 150), 171, 'Test 75');
test(findKthPositive([1,2,3,5,6,8,9,11,12,14,15,17,18,20], 50), 64, 'Test 76');
test(findKthPositive([4, 9, 14, 19, 24, 29, 34, 39, 44, 49], 25), 31, 'Test 77');
test(findKthPositive([1,2,3,5,8,13,21,34,55], 10), 16, 'Test 78');
test(findKthPositive([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99], 100), 150, 'Test 79');
test(findKthPositive([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500), 505, 'Test 80');
test(findKthPositive([2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987], 50), 58, 'Test 81');
test(findKthPositive([1,4,7,10,13,16,19,22,25], 25), 34, 'Test 82');
test(findKthPositive([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165,176,187,198,209,220], 75), 82, 'Test 83');
test(findKthPositive([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 15), 18, 'Test 84');
test(findKthPositive([2, 5, 8, 11, 15], 10), 14, 'Test 85');
test(findKthPositive([15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255], 60), 64, 'Test 86');
test(findKthPositive([1,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40], 30), 51, 'Test 87');
test(findKthPositive([300, 600, 900], 1000), 1003, 'Test 88');
test(findKthPositive([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987], 1000), 1015, 'Test 89');
test(findKthPositive([7,14,21,28,35,42,49,56,63,70], 100), 110, 'Test 90');
test(findKthPositive([1, 2, 3, 5, 6, 9, 11, 12, 15], 15), 24, 'Test 91');
test(findKthPositive([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165], 40), 43, 'Test 92');
test(findKthPositive([50, 100, 150, 200, 250, 300, 350, 400, 450, 500], 100), 102, 'Test 93');
test(findKthPositive([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97], 150), 175, 'Test 94');
test(findKthPositive([7,14,21,28,35,42,49,56,63,70], 50), 58, 'Test 95');
test(findKthPositive([2,3,5,8,12,17,23,30,38,47], 35), 44, 'Test 96');
test(findKthPositive([5,6,8,10,13,14], 7), 11, 'Test 97');
test(findKthPositive([3,6,9,12,15,18,21,24,27,30], 25), 35, 'Test 98');
test(findKthPositive([3,6,9,12,15,18,21,24,27,30,33,36,39,42], 20), 29, 'Test 99');
test(findKthPositive([100,200,300,400,500,600,700,800,900,1000], 500), 505, 'Test 100');
test(findKthPositive([5, 8, 12, 14, 20, 25], 8), 10, 'Test 101');
test(findKthPositive([5,6,8,10,12,14,16,18,20], 10), 17, 'Test 102');
test(findKthPositive([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 20), 35, 'Test 103');
test(findKthPositive([1,2,4,7,11,15,19,24,29,35], 20), 28, 'Test 104');
test(findKthPositive([11,14,17,20,23,26,29,32,35,38,41,44,47,50], 27), 36, 'Test 105');
test(findKthPositive([1,3,6,10,15,21,28,36,45,55], 25), 32, 'Test 106');
test(findKthPositive([1,2,5,6,9,10,13,14,17,18,21,22,25,26], 50), 64, 'Test 107');
test(findKthPositive([2,12,22,32,42,52,62,72,82,92,102,112,122,132,142,152,162,172,182,192,202,212,222,232,242,252,262,272,282,292,302], 150), 167, 'Test 108');
test(findKthPositive([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105], 13), 15, 'Test 109');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

