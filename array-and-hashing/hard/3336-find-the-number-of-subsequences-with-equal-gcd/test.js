// Test: 3336. Find The Number Of Subsequences With Equal Gcd
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { subsequencePairCount } = require("./solution");

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

console.log("\n3336. Find The Number Of Subsequences With Equal Gcd\n");

test(subsequencePairCount([10,20,30]), 2, 'Test 1');
test(subsequencePairCount([2,3,5,7,11,13]), 260, 'Test 2');
test(subsequencePairCount([1,1,1,1]), 50, 'Test 3');
test(subsequencePairCount([2,3,5,7,11]), 50, 'Test 4');
test(subsequencePairCount([2,4,6,8,10]), 62, 'Test 5');
test(subsequencePairCount([200,100,50,25]), 0, 'Test 6');
test(subsequencePairCount([1,2,3,4]), 10, 'Test 7');
test(subsequencePairCount([13,26,39,52]), 10, 'Test 8');
test(subsequencePairCount([19,38,57,76,95]), 62, 'Test 9');
test(subsequencePairCount([7,7,7,7,7]), 180, 'Test 10');
test(subsequencePairCount([100,200,300,400,500]), 62, 'Test 11');
test(subsequencePairCount([7,14,21,28,35]), 62, 'Test 12');
test(subsequencePairCount([13,26,39,52,65]), 62, 'Test 13');
test(subsequencePairCount([5,10,15,20,25]), 62, 'Test 14');
test(subsequencePairCount([5,10,15,20]), 10, 'Test 15');
test(subsequencePairCount([19,23,29,31]), 6, 'Test 16');
test(subsequencePairCount([15,30,45,60]), 10, 'Test 17');
test(subsequencePairCount([100,100,100]), 12, 'Test 18');
test(subsequencePairCount([2,4,6,8]), 10, 'Test 19');
test(subsequencePairCount([21,42,63,84,105,126,147,168,189,210,231,252,273,294,315]), 12683768, 'Test 20');
test(subsequencePairCount([15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240]), 38599600, 'Test 21');
test(subsequencePairCount([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 338595751, 'Test 22');
test(subsequencePairCount([12,24,36,48,60,72,84,96,108,120,132,144,156,168,180,192,204,216,228,240]), 338595751, 'Test 23');
test(subsequencePairCount([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 37898, 'Test 24');
test(subsequencePairCount([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99]), 132078, 'Test 25');
test(subsequencePairCount([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), 403138, 'Test 26');
test(subsequencePairCount([8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240]), 193275715, 'Test 27');
test(subsequencePairCount([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120]), 993449593, 'Test 28');
test(subsequencePairCount([2, 4, 8, 16, 32, 64, 128, 192, 256]), 10, 'Test 29');
test(subsequencePairCount([6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120]), 338595751, 'Test 30');
test(subsequencePairCount([97,101,103,107,109,113,127,131,137,139,149,151,157,163,167]), 13792092, 'Test 31');
test(subsequencePairCount([15,30,45,60,75,90,105,120,135,150]), 37898, 'Test 32');
test(subsequencePairCount([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]), 13792092, 'Test 33');
test(subsequencePairCount([1,2,2,3,3,3,4,4,4,4]), 32718, 'Test 34');
test(subsequencePairCount([30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]), 114188, 'Test 35');
test(subsequencePairCount([1,2,4,8,16,32,64,128,256,512]), 0, 'Test 36');
test(subsequencePairCount([2, 4, 8, 16, 32, 64, 128, 192, 256, 320]), 62, 'Test 37');
test(subsequencePairCount([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80]), 338595751, 'Test 38');
test(subsequencePairCount([18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180, 186, 192]), 119054206, 'Test 39');
test(subsequencePairCount([100, 200, 300, 400, 500]), 62, 'Test 40');
test(subsequencePairCount([3, 9, 27, 81, 243, 729, 2187]), Execution timed out, 'Test 41');
test(subsequencePairCount([12, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 360475464, 'Test 42');
test(subsequencePairCount([13, 26, 39, 52, 65, 78, 91, 104, 117, 130]), 37898, 'Test 43');
test(subsequencePairCount([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 484687229, 'Test 44');
test(subsequencePairCount([14,28,42,56,70,84,98,112,126,140,154,168,182,196,210]), 12683768, 'Test 45');
test(subsequencePairCount([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 338357765, 'Test 46');
test(subsequencePairCount([25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500]), 338595751, 'Test 47');
test(subsequencePairCount([21, 42, 63, 84, 105, 126, 147, 168, 189, 210]), 37898, 'Test 48');
test(subsequencePairCount([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 13792092, 'Test 49');
test(subsequencePairCount([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 338357765, 'Test 50');
test(subsequencePairCount([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98]), 601921042, 'Test 51');
test(subsequencePairCount([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010, 1111, 1212, 1313, 1414, 1515]), Execution timed out, 'Test 52');
test(subsequencePairCount([8,16,24,32,40,48,56,64,72,80,88,96,104,112,120]), 12683768, 'Test 53');
test(subsequencePairCount([17, 34, 51, 68, 85, 102, 119, 136, 153, 170, 187, 204]), 403138, 'Test 54');
test(subsequencePairCount([1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), 953261220, 'Test 55');
test(subsequencePairCount([101,202,303,404,505,606,707,808,909,1010,1111,1212,1313,1414,1515]), Execution timed out, 'Test 56');
test(subsequencePairCount([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 463716129, 'Test 57');
test(subsequencePairCount([15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), 41884, 'Test 58');
test(subsequencePairCount([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150]), 193275715, 'Test 59');
test(subsequencePairCount([100,101,102,103,104,105,106,107,108,109,110]), 117036, 'Test 60');
test(subsequencePairCount([15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), 35206, 'Test 61');
test(subsequencePairCount([40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]), 14283372, 'Test 62');
test(subsequencePairCount([12, 15, 20, 25, 30, 35]), 34, 'Test 63');
test(subsequencePairCount([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60]), 338595751, 'Test 64');
test(subsequencePairCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 338595751, 'Test 65');
test(subsequencePairCount([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), Execution timed out, 'Test 66');
test(subsequencePairCount([11, 22, 33, 44, 55, 66, 77, 88, 99, 110]), 37898, 'Test 67');
test(subsequencePairCount([42, 56, 70, 84, 98, 112, 126, 140, 154, 168]), 35206, 'Test 68');
test(subsequencePairCount([2, 3, 5, 6, 10, 15, 30]), 258, 'Test 69');
test(subsequencePairCount([15, 30, 45, 60, 75, 90, 105, 120]), 3286, 'Test 70');
test(subsequencePairCount([2, 2, 3, 3, 5, 5, 7, 7, 11, 11, 13, 13, 17, 17, 19, 19, 23, 23, 29, 29, 31, 31, 37, 37, 41, 41, 43, 43, 47, 47]), 717853706, 'Test 71');
test(subsequencePairCount([17, 34, 51, 68, 85, 102, 119, 136, 153, 170]), 37898, 'Test 72');
test(subsequencePairCount([14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]), 1233710, 'Test 73');
test(subsequencePairCount([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105]), 137359360, 'Test 74');
test(subsequencePairCount([60, 120, 180, 240, 300, 360, 420, 480, 540, 600]), 37898, 'Test 75');
test(subsequencePairCount([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150]), 193275715, 'Test 76');
test(subsequencePairCount([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 12683768, 'Test 77');
test(subsequencePairCount([3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049]), Execution timed out, 'Test 78');
test(subsequencePairCount([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 382634508, 'Test 79');
test(subsequencePairCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 12683768, 'Test 80');
test(subsequencePairCount([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99]), 672950656, 'Test 81');
test(subsequencePairCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 37898, 'Test 82');
test(subsequencePairCount([6,12,18,24,30,36,42,48,54,60,66,72,78,84,90]), 12683768, 'Test 83');
test(subsequencePairCount([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 46872, 'Test 84');
test(subsequencePairCount([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 338595751, 'Test 85');
test(subsequencePairCount([25, 50, 75, 100, 125, 150, 175, 200]), 3286, 'Test 86');
test(subsequencePairCount([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 484687229, 'Test 87');
test(subsequencePairCount([60,120,180,240,300,360,420,480,540,600,660,720,780,840,900]), 12683768, 'Test 88');
test(subsequencePairCount([2,3,5,7,11,13,17,19,23,29,31]), 150656, 'Test 89');
test(subsequencePairCount([100, 101, 102, 103, 104, 105, 106, 107, 108, 109]), 37330, 'Test 90');
test(subsequencePairCount([101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]), 412119100, 'Test 91');
test(subsequencePairCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 338595751, 'Test 92');
test(subsequencePairCount([97,97,97,97,97,97,97,97,97,97,97,97,97,97,97]), 14283372, 'Test 93');
test(subsequencePairCount([3,6,9,12,15,18,21,24,27,30]), 37898, 'Test 94');
test(subsequencePairCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 437573155, 'Test 95');
test(subsequencePairCount([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 57002, 'Test 96');
test(subsequencePairCount([12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96]), 12136410, 'Test 97');
test(subsequencePairCount([16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128]), 12136410, 'Test 98');
test(subsequencePairCount([6, 12, 18, 24, 30, 36, 42, 48, 54, 60]), 37898, 'Test 99');
test(subsequencePairCount([8, 12, 16, 20, 24, 28, 32, 36, 40, 44]), 36956, 'Test 100');
test(subsequencePairCount([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 37898, 'Test 101');
test(subsequencePairCount([1, 2, 2, 3, 3, 4, 6, 6]), 2030, 'Test 102');
test(subsequencePairCount([15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125]), 448564, 'Test 103');
test(subsequencePairCount([2,3,6,9,18,27,36,54,81,108,162,243,324,486,729]), 1111480, 'Test 104');
test(subsequencePairCount([60,120,180,240,300,360,420,480,540,600]), 37898, 'Test 105');
test(subsequencePairCount([15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300]), 338595751, 'Test 106');
test(subsequencePairCount([2,3,5,7,11,13,17,19,23,29]), 46872, 'Test 107');
test(subsequencePairCount([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 12683768, 'Test 108');
test(subsequencePairCount([3,5,15,25,35,45,55]), 288, 'Test 109');
test(subsequencePairCount([12, 24, 36, 48, 60, 72, 84, 96, 108, 120]), 37898, 'Test 110');
test(subsequencePairCount([2, 3, 5, 7, 11, 13, 17, 19]), 4074, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

