// Test: 891. Sum Of Subsequence Widths
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { sumSubseqWidths } = require("./solution");

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

console.log("\n891. Sum Of Subsequence Widths\n");

test(sumSubseqWidths([10,20,30]), 60, 'Test 1');
test(sumSubseqWidths([9,7,5,3,1]), 144, 'Test 2');
test(sumSubseqWidths([1,2,4,8,16]), 261, 'Test 3');
test(sumSubseqWidths([9,8,7,6,5,4,3,2,1]), 3084, 'Test 4');
test(sumSubseqWidths([1,3,5,7,9]), 144, 'Test 5');
test(sumSubseqWidths([1,2,3,4,5,6,7,8,9,10]), 7181, 'Test 6');
test(sumSubseqWidths([1]), 0, 'Test 7');
test(sumSubseqWidths([1,2,3,4]), 23, 'Test 8');
test(sumSubseqWidths([2,1,3]), 6, 'Test 9');
test(sumSubseqWidths([2]), 0, 'Test 10');
test(sumSubseqWidths([10,20,30,40,50]), 720, 'Test 11');
test(sumSubseqWidths([10,20,30,40,50,60,70,80,90,100]), 71810, 'Test 12');
test(sumSubseqWidths([5,5,5,5]), 0, 'Test 13');
test(sumSubseqWidths([1,100000]), 99999, 'Test 14');
test(sumSubseqWidths([1,1,1,1,1]), 0, 'Test 15');
test(sumSubseqWidths([5,2,4,1,3]), 72, 'Test 16');
test(sumSubseqWidths([100000,100000,100000,100000,100000]), 0, 'Test 17');
test(sumSubseqWidths([100000]), 0, 'Test 18');
test(sumSubseqWidths([1,2,2,3,3,3,4,4,4,4]), 2345, 'Test 19');
test(sumSubseqWidths([100000,100000,100000]), 0, 'Test 20');
test(sumSubseqWidths([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 357668181, 'Test 21');
test(sumSubseqWidths([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990, 99989, 99988, 99987, 99986, 99985, 99984, 99983, 99982, 99981, 99980]), 17825815, 'Test 22');
test(sumSubseqWidths([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 23');
test(sumSubseqWidths([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]), 782581493, 'Test 24');
test(sumSubseqWidths([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 929942988, 'Test 25');
test(sumSubseqWidths([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992]), 3084, 'Test 26');
test(sumSubseqWidths([99999, 1, 99998, 2, 99997, 3, 99996, 4, 99995, 5]), 96096610, 'Test 27');
test(sumSubseqWidths([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 89129075, 'Test 28');
test(sumSubseqWidths([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]), 71810000, 'Test 29');
test(sumSubseqWidths([5, 2, 9, 1, 5, 6, 7, 8, 4, 3, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 16810038, 'Test 30');
test(sumSubseqWidths([2, 1, 3, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]), 393234, 'Test 31');
test(sumSubseqWidths([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 39323400, 'Test 32');
test(sumSubseqWidths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 991029085, 'Test 33');
test(sumSubseqWidths([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 344405, 'Test 34');
test(sumSubseqWidths([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 0, 'Test 35');
test(sumSubseqWidths([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 35651630, 'Test 36');
test(sumSubseqWidths([200000, 199999, 199998, 199997, 199996, 199995, 199994, 199993, 199992, 199991, 199990, 199989, 199988, 199987, 199986, 199985, 199984, 199983, 199982, 199981]), 17825815, 'Test 37');
test(sumSubseqWidths([1,100000,2,99999,3,99998,4,99997,5,99996]), 96097571, 'Test 38');
test(sumSubseqWidths([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990]), 7181, 'Test 39');
test(sumSubseqWidths([7, 5, 3, 1, 9, 11, 13, 15, 17, 19]), 14362, 'Test 40');
test(sumSubseqWidths([50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000]), 0, 'Test 41');
test(sumSubseqWidths([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 991029085, 'Test 42');
test(sumSubseqWidths([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 17825815, 'Test 43');
test(sumSubseqWidths([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 14362, 'Test 44');
test(sumSubseqWidths([1, 2, 4, 8, 16, 32, 64, 128, 256]), 85077, 'Test 45');
test(sumSubseqWidths([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991]), 7181, 'Test 46');
test(sumSubseqWidths([100000, 1, 99999, 2, 99998, 3, 99997, 4, 99996, 5]), 96097571, 'Test 47');
test(sumSubseqWidths([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 316557572, 'Test 48');
test(sumSubseqWidths([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 49');
test(sumSubseqWidths([50000, 50001, 50002, 50003, 50004, 50005, 50006, 50007, 50008, 50009]), 7181, 'Test 50');
test(sumSubseqWidths([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 51');
test(sumSubseqWidths([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 738197532, 'Test 52');
test(sumSubseqWidths([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 8738145, 'Test 53');
test(sumSubseqWidths([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 3420, 'Test 54');
test(sumSubseqWidths([1, 10, 100, 1000, 10000, 100000]), 3243429, 'Test 55');
test(sumSubseqWidths([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 393234, 'Test 56');
test(sumSubseqWidths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 393234, 'Test 57');
test(sumSubseqWidths([50, 40, 30, 20, 10, 60, 70, 80, 90, 100]), 71810, 'Test 58');
test(sumSubseqWidths([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 108954, 'Test 59');
test(sumSubseqWidths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 7181, 'Test 60');
test(sumSubseqWidths([10, 10, 20, 20, 30, 30, 40, 40, 50, 50]), 34200, 'Test 61');
test(sumSubseqWidths([5, 1, 9, 3, 7, 2, 8, 4, 6]), 3084, 'Test 62');
test(sumSubseqWidths([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 178258150, 'Test 63');
test(sumSubseqWidths([100000, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 51102071, 'Test 64');
test(sumSubseqWidths([1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), 7181, 'Test 65');
test(sumSubseqWidths([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 35651630, 'Test 66');
test(sumSubseqWidths([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59]), 982058163, 'Test 67');
test(sumSubseqWidths([50000, 40000, 30000, 20000, 10000, 90000, 80000, 70000, 60000, 55000, 54000, 53000, 52000, 51000, 56000, 57000, 58000, 59000, 61000, 62000]), 945879552, 'Test 68');
test(sumSubseqWidths([1,2,4,8,16,32,64,128,256,512,1024,2048,4096]), 22316373, 'Test 69');
test(sumSubseqWidths([5, 3, 8, 6, 2, 7, 4, 1]), 1291, 'Test 70');
test(sumSubseqWidths([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 991029085, 'Test 71');
test(sumSubseqWidths([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]), 356892986, 'Test 72');
test(sumSubseqWidths([100, 200, 150, 300, 250, 400, 350, 500, 450]), 154200, 'Test 73');
test(sumSubseqWidths([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 20]), 17825815, 'Test 74');
test(sumSubseqWidths([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991]), 7181, 'Test 75');
test(sumSubseqWidths([1, 10, 100, 1000, 10000, 100000, 1, 10, 100, 1000, 10000, 100000]), 314578971, 'Test 76');
test(sumSubseqWidths([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), 393234, 'Test 77');
test(sumSubseqWidths([29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 3801600, 'Test 78');
test(sumSubseqWidths([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000]), 393234000, 'Test 79');
test(sumSubseqWidths([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20]), 713034816, 'Test 80');
test(sumSubseqWidths([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]), 90876700, 'Test 81');
test(sumSubseqWidths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 17825815, 'Test 82');
test(sumSubseqWidths([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 3932340, 'Test 83');
test(sumSubseqWidths([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 84');
test(sumSubseqWidths([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), 1966170, 'Test 85');
test(sumSubseqWidths([50000, 49999, 49998, 49997, 49996, 49995, 49994, 49993, 49992, 49991, 49990, 49989, 49988, 49987, 49986, 49985, 49984, 49983, 49982, 49981]), 17825815, 'Test 86');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

