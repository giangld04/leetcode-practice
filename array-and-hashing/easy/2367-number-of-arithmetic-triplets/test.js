// Test: 2367. Number Of Arithmetic Triplets
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { arithmeticTriplets } = require("./solution");

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

console.log("\n2367. Number Of Arithmetic Triplets\n");

test(arithmeticTriplets([1,3,5,7,9,11,13], 2), 5, 'Test 1');
test(arithmeticTriplets([5,10,15,20,25,30], 5), 4, 'Test 2');
test(arithmeticTriplets([1,3,5,7,9,11,13,15,17,19], 4), 6, 'Test 3');
test(arithmeticTriplets([4,5,6,7,8,9], 2), 2, 'Test 4');
test(arithmeticTriplets([1,3,5,7,9], 2), 3, 'Test 5');
test(arithmeticTriplets([0,3,6,9,12], 3), 3, 'Test 6');
test(arithmeticTriplets([0,1,4,6,7,10], 3), 2, 'Test 7');
test(arithmeticTriplets([1,5,9,13,17,21,25,29,33,37,41], 4), 9, 'Test 8');
test(arithmeticTriplets([1,2,3,4,5,6,7,8,9,10], 1), 8, 'Test 9');
test(arithmeticTriplets([0,2,4,6,8,10], 2), 4, 'Test 10');
test(arithmeticTriplets([10,20,30,40,50], 10), 3, 'Test 11');
test(arithmeticTriplets([2,5,8,11,14,17,20], 3), 5, 'Test 12');
test(arithmeticTriplets([3,6,9,12,15,18,21,24,27,30], 3), 8, 'Test 13');
test(arithmeticTriplets([10,15,20,25,30,35], 5), 4, 'Test 14');
test(arithmeticTriplets([5,10,15,20,25], 5), 3, 'Test 15');
test(arithmeticTriplets([0,3,6,9,12,15,18,21,24,27,30,33,36,39,42], 3), 13, 'Test 16');
test(arithmeticTriplets([10,18,26,34,42,50,58,66,74,82,90,98,106,114,122], 8), 13, 'Test 17');
test(arithmeticTriplets([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97], 4), 23, 'Test 18');
test(arithmeticTriplets([1,7,13,19,25,31,37,43,49,55,61,67,73,79,85,91,97,103,109], 6), 17, 'Test 19');
test(arithmeticTriplets([2,8,14,20,26,32,38,44,50,56,62,68,74,80,86,92,98,104,110,116,122], 6), 19, 'Test 20');
test(arithmeticTriplets([1,7,13,19,25,31,37,43,49,55,61,67,73,79,85], 6), 13, 'Test 21');
test(arithmeticTriplets([3,12,21,30,39,48,57,66,75,84,93], 9), 9, 'Test 22');
test(arithmeticTriplets([0,6,12,18,24,30,36,42,48,54,60,66,72], 6), 11, 'Test 23');
test(arithmeticTriplets([0,5,10,15,20,25,30,35,40,45,50], 5), 9, 'Test 24');
test(arithmeticTriplets([8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160], 8), 18, 'Test 25');
test(arithmeticTriplets([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 5), 18, 'Test 26');
test(arithmeticTriplets([5,12,19,26,33,40,47,54,61,68], 7), 8, 'Test 27');
test(arithmeticTriplets([2,8,14,20,26,32,38,44,50,56,62,68], 6), 10, 'Test 28');
test(arithmeticTriplets([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126,133], 7), 17, 'Test 29');
test(arithmeticTriplets([1,8,15,22,29,36,43,50,57,64,71,78,85,92,99,106,113,120,127,134,141,148,155,162,169,176,183,190,197], 7), 27, 'Test 30');
test(arithmeticTriplets([5,15,25,35,45,55,65,75,85,95,105,115,125,135,145,155], 10), 14, 'Test 31');
test(arithmeticTriplets([0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80], 4), 19, 'Test 32');
test(arithmeticTriplets([1,5,9,14,19,24,29,34,39,44,49], 4), 1, 'Test 33');
test(arithmeticTriplets([2,9,16,23,30,37,44,51,58,65,72], 7), 9, 'Test 34');
test(arithmeticTriplets([0,2,6,8,10,14,18,20,24,28,32,34,38,40], 2), 1, 'Test 35');
test(arithmeticTriplets([1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191], 10), 18, 'Test 36');
test(arithmeticTriplets([3,7,13,19,25,31,37,43,49,55,61,67,73,79,85,91,97,103,109,115], 4), 0, 'Test 37');
test(arithmeticTriplets([1,8,15,22,29,36,43,50,57,64,71,78,85,92,99], 7), 13, 'Test 38');
test(arithmeticTriplets([1,6,9,11,15,18,21,24,27,30], 3), 4, 'Test 39');
test(arithmeticTriplets([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165,176,187,198], 11), 16, 'Test 40');
test(arithmeticTriplets([3,9,15,21,27,33,39,45,51,57,63,69,75,81,87,93,99,105,111,117,123,129,135,141,147,153,159,165,171,177,183,189,195], 6), 31, 'Test 41');
test(arithmeticTriplets([2,9,16,23,30,37,44,51,58,65,72,79,86,93], 7), 12, 'Test 42');
test(arithmeticTriplets([2,6,10,14,18,22,26,30,34,38], 4), 8, 'Test 43');
test(arithmeticTriplets([3,11,19,27,35,43,51,59,67,75,83,91,99,107,115,123,131,139,147,155,163,171,179], 8), 21, 'Test 44');
test(arithmeticTriplets([2,7,12,17,22,27,32,37,42,47,52,57,62], 5), 11, 'Test 45');
test(arithmeticTriplets([3,9,15,21,27,33,39,45,51,57,63,69,75,81,87,93,99,105,111,117,123], 6), 19, 'Test 46');
test(arithmeticTriplets([1,6,11,16,21,26,31,36,41,46,51,56,61,66,71,76,81,86,91,96,101,106,111], 5), 21, 'Test 47');
test(arithmeticTriplets([1,4,7,10,13,16,19,22,25,28,31,34,37,40], 3), 12, 'Test 48');
test(arithmeticTriplets([0,5,11,17,23,29,35,41,47,53,59,65,71,77,83,89,95,101,107,113,119,125,131,137,143,149,155,161,167,173,179,185,191,197], 7), 0, 'Test 49');
test(arithmeticTriplets([0,5,10,15,20,25,30,35,40,45], 5), 8, 'Test 50');
test(arithmeticTriplets([1,6,11,16,21,26,31,36,41,46,51], 5), 9, 'Test 51');
test(arithmeticTriplets([3,6,9,12,15,18,21,24,27,30,33,36,39], 3), 11, 'Test 52');
test(arithmeticTriplets([1,4,7,10,13,16,19,22,25,28], 3), 8, 'Test 53');
test(arithmeticTriplets([2,7,12,17,22,27,32,37,42,47,52,57,62,67,72,77,82,87,92,97,102], 5), 19, 'Test 54');
test(arithmeticTriplets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 18, 'Test 55');
test(arithmeticTriplets([1,6,11,16,21,26,31,36,41], 5), 7, 'Test 56');
test(arithmeticTriplets([5,11,17,23,29,35,41,47,53,59,65,71], 6), 10, 'Test 57');
test(arithmeticTriplets([7, 17, 27, 37, 47, 57, 67, 77, 87, 97], 10), 8, 'Test 58');
test(arithmeticTriplets([2,7,12,17,22,27,32,37,42,47,52,57,62,67,72,77,82,87,92,97], 5), 18, 'Test 59');
test(arithmeticTriplets([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98], 4), 23, 'Test 60');
test(arithmeticTriplets([5,15,25,35,45,55,65,75,85,95], 10), 8, 'Test 61');
test(arithmeticTriplets([2, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62, 68, 74, 80, 86, 92, 98], 6), 15, 'Test 62');
test(arithmeticTriplets([0,5,11,16,22,27,33,38,44,49], 7), 0, 'Test 63');
test(arithmeticTriplets([0,3,7,12,15,19,24,27,31,36,39,43,48,51,55,60,63,67,72], 3), 0, 'Test 64');
test(arithmeticTriplets([5,11,17,23,29,35,41,47,53,59], 6), 8, 'Test 65');
test(arithmeticTriplets([5,12,19,26,33,40,47,54,61,68,75,82,89], 7), 11, 'Test 66');
test(arithmeticTriplets([3,8,13,18,23,28,33,38,43,48], 5), 8, 'Test 67');
test(arithmeticTriplets([5,20,35,50,65,80,95,110,125,140,155,170,185], 15), 11, 'Test 68');
test(arithmeticTriplets([1,4,7,10,13,16,19,22,25,28,31,34], 3), 10, 'Test 69');
test(arithmeticTriplets([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 10), 18, 'Test 70');
test(arithmeticTriplets([3,12,21,30,39,48,57,66,75,84,93,102,111,120,129,138,147,156,165,174], 9), 18, 'Test 71');
test(arithmeticTriplets([1,4,7,10,13,16,19,22,25], 3), 7, 'Test 72');
test(arithmeticTriplets([1,6,11,16,21,26,31,36,41,46,51,56,61,66,71,76,81], 5), 15, 'Test 73');
test(arithmeticTriplets([5,11,17,23,29,35,41,47,53,59,65,71,77,83,89,95], 6), 14, 'Test 74');
test(arithmeticTriplets([3, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99], 6), 15, 'Test 75');
test(arithmeticTriplets([0,2,4,6,8,10,12,14,16,18,20], 2), 9, 'Test 76');
test(arithmeticTriplets([1,2,4,5,7,8,10,11,13,14,16,17,19,20], 1), 0, 'Test 77');
test(arithmeticTriplets([1,5,8,11,14,17,20,23,26], 3), 6, 'Test 78');
test(arithmeticTriplets([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 19, 'Test 79');
test(arithmeticTriplets([0,5,10,15,20,25,30,35,40], 5), 7, 'Test 80');
test(arithmeticTriplets([3,7,11,15,19,23,27,31,35,39,43], 4), 9, 'Test 81');
test(arithmeticTriplets([5,15,25,35,45,55,65,75,85,95,105,115,125,135,145,155,165,175,185,195], 10), 18, 'Test 82');
test(arithmeticTriplets([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61], 3), 19, 'Test 83');
test(arithmeticTriplets([1,2,3,5,6,8,9,11,12,14,15,17,18,20,21,23,24,26,27,29,30,32,33,35,36,38,39,41,42,44,45,47,48,50,51,53,54,56,57,59,60,62,63,65,66,68,69,71,72,74,75,77,78,80,81,83,84,86,87,89,90,92,93,95,96,98,99,101,102,104,105,107,108,110,111,113,114,116,117,119,120,122,123,125,126,128,129,131,132,134,135,137,138,140,141,143,144,146,147,149,150,152,153,155,156,158,159,161,162,164,165,167,168,170,171,173,174,176,177,179,180,182,183,185,186,188,189,191,192,194,195,197,198], 2), 1, 'Test 84');
test(arithmeticTriplets([1,4,7,10,13,16,19,22], 3), 6, 'Test 85');
test(arithmeticTriplets([1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76, 81, 86, 91, 96, 101, 106, 111, 116, 121, 126, 131, 136, 141, 146, 151, 156, 161, 166, 171, 176, 181, 186, 191, 196, 200], 5), 38, 'Test 86');
test(arithmeticTriplets([1,6,11,16,21,26,31,36,41,46,51,56,61], 5), 11, 'Test 87');
test(arithmeticTriplets([2,9,16,23,30,37,44,51,58,65,72,79,86,93,100], 7), 13, 'Test 88');
test(arithmeticTriplets([1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47], 2), 2, 'Test 89');
test(arithmeticTriplets([3,9,12,15,18,21,24,27,30,33,36], 3), 8, 'Test 90');
test(arithmeticTriplets([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,101], 4), 24, 'Test 91');
test(arithmeticTriplets([1,7,13,19,25,31,37,43,49,55,61,67,73,79,85,91,97], 6), 15, 'Test 92');
test(arithmeticTriplets([0,1,4,9,16,25,36,49,64,81,100], 15), 0, 'Test 93');
test(arithmeticTriplets([7,12,17,22,27,32,37,42,47,52,57,62,67], 5), 11, 'Test 94');
test(arithmeticTriplets([3, 8, 13, 18, 23, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98], 5), 18, 'Test 95');
test(arithmeticTriplets([1,10,19,28,37,46,55,64,73,82,91,100,109,118,127], 9), 13, 'Test 96');
test(arithmeticTriplets([0,4,8,12,16,20,24,28,32,36,40,44], 4), 10, 'Test 97');
test(arithmeticTriplets([2,10,18,26,34,42,50,58,66,74,82,90,98,106,114], 8), 13, 'Test 98');
test(arithmeticTriplets([7,17,27,37,47,57,67,77,87,97,107,117,127,137,147,157,167,177,187,197], 10), 18, 'Test 99');
test(arithmeticTriplets([3,8,13,18,23,28,33,38,43,48,53], 5), 9, 'Test 100');
test(arithmeticTriplets([1,5,9,13,17,21,25,29,33,37,41,45,49], 4), 11, 'Test 101');
test(arithmeticTriplets([3,9,15,21,27,33,39,45,51,57,63,69,75,81,87,93,99], 6), 15, 'Test 102');
test(arithmeticTriplets([0,9,18,27,36,45,54,63,72,81,90,99], 9), 10, 'Test 103');
test(arithmeticTriplets([3,8,13,18,23,28,33,38,43,48,53,58,63,68,73], 5), 13, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

