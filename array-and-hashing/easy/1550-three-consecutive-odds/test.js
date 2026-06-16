// Test: 1550. Three Consecutive Odds
// 131 test cases from LeetCodeDataset
// Run: node test.js

const { threeConsecutiveOdds } = require("./solution");

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

console.log("\n1550. Three Consecutive Odds\n");

test(threeConsecutiveOdds([1,3,2,5,7,9]), true, 'Test 1');
test(threeConsecutiveOdds([2,4,6,8,10]), false, 'Test 2');
test(threeConsecutiveOdds([1,1,1,1,1,1]), true, 'Test 3');
test(threeConsecutiveOdds([1000,999,998,997]), false, 'Test 4');
test(threeConsecutiveOdds([2,3,5,7,11,13]), true, 'Test 5');
test(threeConsecutiveOdds([2,6,4,1]), false, 'Test 6');
test(threeConsecutiveOdds([999,997,995,993,991]), true, 'Test 7');
test(threeConsecutiveOdds([11,13,15,17,19]), true, 'Test 8');
test(threeConsecutiveOdds([1,3,2,3,5,7]), true, 'Test 9');
test(threeConsecutiveOdds([2,4,6,8]), false, 'Test 10');
test(threeConsecutiveOdds([1,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), false, 'Test 11');
test(threeConsecutiveOdds([1,2,1,2,1,2]), false, 'Test 12');
test(threeConsecutiveOdds([1,2,3,4,5,6,7,8,9,10]), false, 'Test 13');
test(threeConsecutiveOdds([999,997,995]), true, 'Test 14');
test(threeConsecutiveOdds([1001,1003,1005]), true, 'Test 15');
test(threeConsecutiveOdds([2,2,2,2,2,2,2,2,2,2]), false, 'Test 16');
test(threeConsecutiveOdds([999,1001,1003,1005]), true, 'Test 17');
test(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]), true, 'Test 18');
test(threeConsecutiveOdds([1,1,1,1]), true, 'Test 19');
test(threeConsecutiveOdds([1,2,3,5,7,9,11]), true, 'Test 20');
test(threeConsecutiveOdds([2,3,5,7,9,11]), true, 'Test 21');
test(threeConsecutiveOdds([2,2,2,2,2,2]), false, 'Test 22');
test(threeConsecutiveOdds([1,3,5,7,9]), true, 'Test 23');
test(threeConsecutiveOdds([2,3,5,7,11,13,17,19]), true, 'Test 24');
test(threeConsecutiveOdds([2,2,2,2,2,2,2]), false, 'Test 25');
test(threeConsecutiveOdds([11,13,15,17,19,21]), true, 'Test 26');
test(threeConsecutiveOdds([1,1,1,1,1,1,1,1,1,1]), true, 'Test 27');
test(threeConsecutiveOdds([1,3,5]), true, 'Test 28');
test(threeConsecutiveOdds([3, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93]), true, 'Test 29');
test(threeConsecutiveOdds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]), false, 'Test 30');
test(threeConsecutiveOdds([2,4,6,8,10,12,14,16,18,20,21,23,25]), true, 'Test 31');
test(threeConsecutiveOdds([1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), true, 'Test 32');
test(threeConsecutiveOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 21, 23]), true, 'Test 33');
test(threeConsecutiveOdds([999, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019, 1021]), true, 'Test 34');
test(threeConsecutiveOdds([1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1]), true, 'Test 35');
test(threeConsecutiveOdds([8, 6, 4, 2, 1, 3, 5, 7, 9, 11, 13, 15]), true, 'Test 36');
test(threeConsecutiveOdds([101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 127, 129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169]), true, 'Test 37');
test(threeConsecutiveOdds([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]), true, 'Test 38');
test(threeConsecutiveOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]), false, 'Test 39');
test(threeConsecutiveOdds([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), true, 'Test 40');
test(threeConsecutiveOdds([23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163]), true, 'Test 41');
test(threeConsecutiveOdds([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61]), true, 'Test 42');
test(threeConsecutiveOdds([8, 10, 12, 14, 16, 18, 20, 1, 3, 5]), true, 'Test 43');
test(threeConsecutiveOdds([1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015]), true, 'Test 44');
test(threeConsecutiveOdds([1000, 1000, 1000, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), true, 'Test 45');
test(threeConsecutiveOdds([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987, 986, 985, 984, 983, 982, 981]), false, 'Test 46');
test(threeConsecutiveOdds([101, 203, 305, 407, 509, 611, 713, 815, 917, 1019]), true, 'Test 47');
test(threeConsecutiveOdds([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), true, 'Test 48');
test(threeConsecutiveOdds([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 1, 3, 5]), true, 'Test 49');
test(threeConsecutiveOdds([7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]), true, 'Test 50');
test(threeConsecutiveOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), false, 'Test 51');
test(threeConsecutiveOdds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), false, 'Test 52');
test(threeConsecutiveOdds([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400]), false, 'Test 53');
test(threeConsecutiveOdds([999,1000,999,1000,999,1000,999,1000,999,1000,999,1000,999,1000,999,1000,999,1000,999,1000]), false, 'Test 54');
test(threeConsecutiveOdds([5,7,9,11,13,15,17,19,21,23,25,27,29]), true, 'Test 55');
test(threeConsecutiveOdds([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 989, 987, 985, 983, 981, 979]), true, 'Test 56');
test(threeConsecutiveOdds([2, 4, 6, 8, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), true, 'Test 57');
test(threeConsecutiveOdds([1000,999,998,997,996,995,994,993,992,991,990,989,988,987,986,985,984,983,982,981]), false, 'Test 58');
test(threeConsecutiveOdds([200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229]), false, 'Test 59');
test(threeConsecutiveOdds([2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 21, 23, 25]), true, 'Test 60');
test(threeConsecutiveOdds([89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191]), true, 'Test 61');
test(threeConsecutiveOdds([1, 4, 6, 8, 10, 12, 14, 16, 18, 20, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 3, 5, 7]), true, 'Test 62');
test(threeConsecutiveOdds([3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10]), true, 'Test 63');
test(threeConsecutiveOdds([8, 6, 4, 2, 1, 3, 5, 7, 9, 11, 13]), true, 'Test 64');
test(threeConsecutiveOdds([7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139]), true, 'Test 65');
test(threeConsecutiveOdds([1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1]), false, 'Test 66');
test(threeConsecutiveOdds([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 23, 25, 27, 29]), true, 'Test 67');
test(threeConsecutiveOdds([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13]), true, 'Test 68');
test(threeConsecutiveOdds([2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3]), false, 'Test 69');
test(threeConsecutiveOdds([1, 3, 5, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 23, 25, 27, 29, 31, 33]), true, 'Test 70');
test(threeConsecutiveOdds([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), true, 'Test 71');
test(threeConsecutiveOdds([21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41]), true, 'Test 72');
test(threeConsecutiveOdds([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]), true, 'Test 73');
test(threeConsecutiveOdds([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19]), false, 'Test 74');
test(threeConsecutiveOdds([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991]), false, 'Test 75');
test(threeConsecutiveOdds([1001, 1003, 1005, 2, 4, 6, 8, 1007, 1009, 1011]), true, 'Test 76');
test(threeConsecutiveOdds([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 1, 3, 5]), true, 'Test 77');
test(threeConsecutiveOdds([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), true, 'Test 78');
test(threeConsecutiveOdds([1,1,1,2,2,2,3,3,3,5,5,5,7,7,7,11,11,11,13,13,13,17,17,17,19,19,19]), true, 'Test 79');
test(threeConsecutiveOdds([1,3,5,7,9,2,4,6,8,10,1,3,5,7,9,2,4,6,8,10,1,3,5,7,9,2,4,6,8,10]), true, 'Test 80');
test(threeConsecutiveOdds([2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), true, 'Test 81');
test(threeConsecutiveOdds([100, 200, 300, 400, 500, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), true, 'Test 82');
test(threeConsecutiveOdds([1000, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]), true, 'Test 83');
test(threeConsecutiveOdds([300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324]), false, 'Test 84');
test(threeConsecutiveOdds([2,4,6,8,10,11,13,15,17,19,21,23,25]), true, 'Test 85');
test(threeConsecutiveOdds([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 2, 4, 6, 8, 10]), true, 'Test 86');
test(threeConsecutiveOdds([5,7,9,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100]), true, 'Test 87');
test(threeConsecutiveOdds([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 41, 43, 45]), true, 'Test 88');
test(threeConsecutiveOdds([999, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37]), true, 'Test 89');
test(threeConsecutiveOdds([2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 21]), true, 'Test 90');
test(threeConsecutiveOdds([2, 4, 6, 8, 10, 1, 3, 5, 7, 9, 11]), true, 'Test 91');
test(threeConsecutiveOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), false, 'Test 92');
test(threeConsecutiveOdds([1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1]), true, 'Test 93');
test(threeConsecutiveOdds([999,997,995,993,991,989,987,985,983,981,979,977,975,973,971,969,967,965,963,961,959,957,955,953,951,949,947,945,943,941,939,937,935,933,931,929,927,925,923,921,919,917,915,913,911,909,907,905,903,901,899,897,895,893,891,889,887,885,883,881]), true, 'Test 94');
test(threeConsecutiveOdds([2, 3, 5, 7, 11, 13, 17, 19]), true, 'Test 95');
test(threeConsecutiveOdds([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8]), true, 'Test 96');
test(threeConsecutiveOdds([2,4,6,8,10,11,13,15,17,19,2,4,6,8,10,11,13,15,17,19,2,4,6,8,10,11,13,15,17,19]), true, 'Test 97');
test(threeConsecutiveOdds([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), true, 'Test 98');
test(threeConsecutiveOdds([499,501,503,505,507,509,511,513,515,517,519,521,523,525,527,529]), true, 'Test 99');
test(threeConsecutiveOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), false, 'Test 100');
test(threeConsecutiveOdds([1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019]), true, 'Test 101');
test(threeConsecutiveOdds([2, 4, 6, 8, 10, 11, 13, 15, 17, 19]), true, 'Test 102');
test(threeConsecutiveOdds([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), true, 'Test 103');
test(threeConsecutiveOdds([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79]), true, 'Test 104');
test(threeConsecutiveOdds([5, 3, 1, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]), true, 'Test 105');
test(threeConsecutiveOdds([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45]), true, 'Test 106');
test(threeConsecutiveOdds([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990]), false, 'Test 107');
test(threeConsecutiveOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), false, 'Test 108');
test(threeConsecutiveOdds([1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109]), true, 'Test 109');
test(threeConsecutiveOdds([1, 3, 5, 2, 4, 6, 7, 9, 11, 13, 8, 10, 12, 14, 16, 18, 20]), true, 'Test 110');
test(threeConsecutiveOdds([2,4,6,8,10,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), true, 'Test 111');
test(threeConsecutiveOdds([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3]), false, 'Test 112');
test(threeConsecutiveOdds([5, 3, 1, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), true, 'Test 113');
test(threeConsecutiveOdds([1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]), true, 'Test 114');
test(threeConsecutiveOdds([2, 4, 6, 8, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), true, 'Test 115');
test(threeConsecutiveOdds([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989]), false, 'Test 116');
test(threeConsecutiveOdds([1, 2, 1, 3, 1, 5, 1, 7, 1, 9, 1, 11, 1, 13, 1, 15]), true, 'Test 117');
test(threeConsecutiveOdds([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987]), false, 'Test 118');
test(threeConsecutiveOdds([1,2,3,2,3,4,5,4,5,6,7,6,7,8,9,8,9,10,11,10,11,12,13,12,13,14,15,14,15,16,17,16,17,18,19,18,19,20]), false, 'Test 119');
test(threeConsecutiveOdds([1, 3, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 23, 25]), true, 'Test 120');
test(threeConsecutiveOdds([8,6,4,2,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), true, 'Test 121');
test(threeConsecutiveOdds([999, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019]), true, 'Test 122');
test(threeConsecutiveOdds([1,2,3,4,5,6,7,8,9,10,11,13,15,17,19,21]), true, 'Test 123');
test(threeConsecutiveOdds([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765]), false, 'Test 124');
test(threeConsecutiveOdds([42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 71]), false, 'Test 125');
test(threeConsecutiveOdds([8, 6, 4, 2, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]), true, 'Test 126');
test(threeConsecutiveOdds([101,103,105,107,109,111,113,115,117,119,121,123,125,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209]), true, 'Test 127');
test(threeConsecutiveOdds([1001,1003,1005,1007,1009,1011,1013,1015,1017]), true, 'Test 128');
test(threeConsecutiveOdds([5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45]), true, 'Test 129');
test(threeConsecutiveOdds([3, 5, 7, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9, 11]), true, 'Test 130');
test(threeConsecutiveOdds([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), false, 'Test 131');

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
