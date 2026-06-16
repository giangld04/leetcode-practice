// Test: 128. Longest Consecutive Sequence
// 138 test cases from LeetCodeDataset
// Run: node test.js

const { longestConsecutive } = require("./solution");

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

console.log("\n128. Longest Consecutive Sequence\n");

test(longestConsecutive([-1, -2, -3, -4]), 4, 'Test 1');
test(longestConsecutive([10,5,12,3,9,7,8,11]), 6, 'Test 2');
test(longestConsecutive([1,9,3,10,4,20,2]), 4, 'Test 3');
test(longestConsecutive([10,9,8,7,6,5,4,3,2,1]), 10, 'Test 4');
test(longestConsecutive([10,5,12,3,14,7,16,20,18,11,9,8,13,6,4,19,15,17,2,1]), 20, 'Test 5');
test(longestConsecutive([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 6');
test(longestConsecutive([1]), 1, 'Test 7');
test(longestConsecutive([10,5,12,3,7,8,9,2,1,0]), 4, 'Test 8');
test(longestConsecutive([1000000000,-1000000000,500000000,-500000000]), 1, 'Test 9');
test(longestConsecutive([-1,-2,-3,-4,-5]), 5, 'Test 10');
test(longestConsecutive([0,0,0,0,0]), 1, 'Test 11');
test(longestConsecutive([1,3,5,7,9,11,13,15,17,19]), 1, 'Test 12');
test(longestConsecutive([1,2,3,4,5]), 5, 'Test 13');
test(longestConsecutive([10,5,12,3,5,7,9,11,13,15,17,19,2,4,6,8]), 12, 'Test 14');
test(longestConsecutive([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), 10, 'Test 15');
test(longestConsecutive([100,4,200,1,3,2]), 4, 'Test 16');
test(longestConsecutive([]), 0, 'Test 17');
test(longestConsecutive([0,3,7,2,5,8,4,6,0,1]), 9, 'Test 18');
test(longestConsecutive([5,4,3,2,1]), 5, 'Test 19');
test(longestConsecutive([1,2,0,1]), 3, 'Test 20');
test(longestConsecutive([1,0,1,2]), 3, 'Test 21');
test(longestConsecutive([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 10, 'Test 22');
test(longestConsecutive([1000000000, -1000000000, 0]), 1, 'Test 23');
test(longestConsecutive([1,2,2,3,3,4,4,5,5]), 5, 'Test 24');
test(longestConsecutive([5]), 1, 'Test 25');
test(longestConsecutive([-1,0,1]), 3, 'Test 26');
test(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 50, 'Test 27');
test(longestConsecutive([1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,101,102,103,104,105,106,107,108,109,110]), 11, 'Test 28');
test(longestConsecutive([-10, -5, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 9, 'Test 29');
test(longestConsecutive([500000000,500000001,500000002,500000003,500000004,500000005,500000006,500000007,500000008,500000009]), 10, 'Test 30');
test(longestConsecutive([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]), 15, 'Test 31');
test(longestConsecutive([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 11, 20, 12, 19, 13, 18, 14, 17, 15, 16, 21, 30, 22, 29, 23, 28, 24, 27, 25, 26]), 30, 'Test 32');
test(longestConsecutive([100,200,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 33');
test(longestConsecutive([1000000000,-1000000000,1000000001,-1000000001,0,1,-1,2,-2]), 5, 'Test 34');
test(longestConsecutive([999999999, 1000000000, 1000000001, 1000000002, 1000000003]), 5, 'Test 35');
test(longestConsecutive([1, 2, 3, 5, 6, 7, 10, 11, 12, 15, 16, 17, 20, 21, 22, 25, 26, 27, 30, 31, 32]), 3, 'Test 36');
test(longestConsecutive([10,5,0,5,3,15,10,5,3,6,7,100,200,300,400,500,600,700,800,900]), 3, 'Test 37');
test(longestConsecutive([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000]), 1, 'Test 38');
test(longestConsecutive([-10,-5,-3,-1,-2,0,-8,-9,-7,1,2,3,4,5,6,7,8,9,10]), 14, 'Test 39');
test(longestConsecutive([1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18, 19]), 3, 'Test 40');
test(longestConsecutive([100, 200, 300, 400, 500, 101, 102, 103, 104, 105]), 6, 'Test 41');
test(longestConsecutive([5,1,3,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 14, 'Test 42');
test(longestConsecutive([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 1, 'Test 43');
test(longestConsecutive([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 1, 'Test 44');
test(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 10, 'Test 45');
test(longestConsecutive([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81]), 20, 'Test 46');
test(longestConsecutive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 30, 'Test 47');
test(longestConsecutive([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), 1, 'Test 48');
test(longestConsecutive([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 10, 'Test 49');
test(longestConsecutive([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 1, 'Test 50');
test(longestConsecutive([-1000000000, -999999999, -999999998, -999999997, -999999996, -999999995, -999999994, -999999993, -999999992, -999999991]), 10, 'Test 51');
test(longestConsecutive([10,5,0,-5,-10,-15,-20,-25,-30]), 1, 'Test 52');
test(longestConsecutive([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 21, 'Test 53');
test(longestConsecutive([1000000000, 1000000001, 999999999, 999999998, 999999997]), 5, 'Test 54');
test(longestConsecutive([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101, 102, 103, 104, 105]), 6, 'Test 55');
test(longestConsecutive([1000000000, 1000000001, 1000000002, 1000000003, 1000000004]), 5, 'Test 56');
test(longestConsecutive([1000000000, 1000000002, 1000000001, 1000000003, 1000000004, 1000000005, 1000000006, 1000000007, 1000000008, 1000000009]), 10, 'Test 57');
test(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]), 10, 'Test 58');
test(longestConsecutive([100,200,300,400,500,600,700,800,900,1000,101,201,301,401,501,601,701,801,901,1001]), 2, 'Test 59');
test(longestConsecutive([10, 15, 1, 3, 2, 8, 7, 4, 12, 14, 11, 6, 9, 5]), 12, 'Test 60');
test(longestConsecutive([1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20]), 6, 'Test 61');
test(longestConsecutive([1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009]), 10, 'Test 62');
test(longestConsecutive([1,2,3,5,6,7,8,10,11,12,14,15,16,17,19,20,21,22,23,24,25]), 7, 'Test 63');
test(longestConsecutive([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384]), 2, 'Test 64');
test(longestConsecutive([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 1, 'Test 65');
test(longestConsecutive([1, 2, 3, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 11, 'Test 66');
test(longestConsecutive([10, 5, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), 1, 'Test 67');
test(longestConsecutive([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 10, 'Test 68');
test(longestConsecutive([1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 31, 'Test 69');
test(longestConsecutive([10, 9, 2, 5, 3, 7, 101, 18, 11, 12, 13, 14, 15, 16, 17, 8, 6, 4, 1, 0]), 19, 'Test 70');
test(longestConsecutive([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 12, 'Test 71');
test(longestConsecutive([100, 200, 300, 400, 500, 101, 201, 301, 401, 501]), 2, 'Test 72');
test(longestConsecutive([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,-27,-28,-29,-30]), 30, 'Test 73');
test(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 31, 'Test 74');
test(longestConsecutive([1000000000, 999999999, 1000000001, 1000000002, 1000000003, 1000000004]), 6, 'Test 75');
test(longestConsecutive([5, 3, 8, 1, 2, 7, 4, 6, 9, 0, 11, 12, 13, 14, 15]), 10, 'Test 76');
test(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 25, 'Test 77');
test(longestConsecutive([5, 100, 50, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]), 11, 'Test 78');
test(longestConsecutive([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11, 'Test 79');
test(longestConsecutive([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31]), 20, 'Test 80');
test(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 10, 'Test 81');
test(longestConsecutive([1, 2, 3, 4, 5, 100, 101, 102, 103, 104, 200, 201, 202, 203, 204]), 5, 'Test 82');
test(longestConsecutive([1000000000, 999999999, 1000000001, 1000000002, 1000000003]), 5, 'Test 83');
test(longestConsecutive([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98]), 1, 'Test 84');
test(longestConsecutive([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10]), 10, 'Test 85');
test(longestConsecutive([-5, -3, -4, -2, -1, 0, 1, 2, 3, 4, 5]), 11, 'Test 86');
test(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 30, 'Test 87');
test(longestConsecutive([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99]), 1, 'Test 88');
test(longestConsecutive([5,3,8,9,11,12,13,14,10]), 7, 'Test 89');
test(longestConsecutive([10, 5, 15, 3, 8, 2, 20, 25, 18, 7, 6, 11, 12, 13, 14, 16, 17, 19, 4, 9]), 19, 'Test 90');
test(longestConsecutive([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 1, 'Test 91');
test(longestConsecutive([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 1, 'Test 92');
test(longestConsecutive([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), 1, 'Test 93');
test(longestConsecutive([-10,-8,-6,-4,-2,0,2,4,6,8,10]), 1, 'Test 94');
test(longestConsecutive([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), 1, 'Test 95');
test(longestConsecutive([5,3,1,2,4,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 96');
test(longestConsecutive([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 31, 'Test 97');
test(longestConsecutive([1,2,3,4,5,6,7,8,9,10,20,21,22,23,24,25,26,27,28,29,30]), 11, 'Test 98');
test(longestConsecutive([5, 2, 9, 1, 5, 6, 7, 3, 8, 4, 10, 11, 12, 13, 14]), 14, 'Test 99');
test(longestConsecutive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 21, 'Test 100');
test(longestConsecutive([42, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]), 13, 'Test 101');
test(longestConsecutive([5,3,8,6,2,7,4,1,0,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 20, 'Test 102');
test(longestConsecutive([1000000000, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005, 1000000006, 1000000007, 1000000008, 1000000009, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 103');
test(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 104');
test(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 21, 'Test 105');
test(longestConsecutive([5,1,9,11,7,3,8,4,2,10,6,12,13,14,15,16,17,18,19,20]), 20, 'Test 106');
test(longestConsecutive([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]), 5, 'Test 107');
test(longestConsecutive([1000000000, -1000000000, 2147483647, -2147483648, 0]), 1, 'Test 108');
test(longestConsecutive([1000000000, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005]), 6, 'Test 109');
test(longestConsecutive([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), 11, 'Test 110');
test(longestConsecutive([10, 5, 0, -5, -10, 15, 20, 25, 30, 35, 40]), 1, 'Test 111');
test(longestConsecutive([1000000000, -1000000000, 500000000, 500000001, 500000002, -1000000001]), 3, 'Test 112');
test(longestConsecutive([500000000, 500000001, 500000002, 500000003, 500000004, 500000005, 500000006, 500000007, 500000008, 500000009]), 10, 'Test 113');
test(longestConsecutive([-10,-5,-3,-2,-1,0,1,2,3,4,5,10,11,12]), 9, 'Test 114');
test(longestConsecutive([5, 3, 8, 4, 7, 6, 9, 1, 2, 0]), 10, 'Test 115');
test(longestConsecutive([10, 5, 9, 1, 11, 8, 6, 7, 3, 4, 2]), 11, 'Test 116');
test(longestConsecutive([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 20, 'Test 117');
test(longestConsecutive([-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5]), 11, 'Test 118');
test(longestConsecutive([10,5,9,1,11,5,7,8,2,12,3,6,4]), 12, 'Test 119');
test(longestConsecutive([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 10, 'Test 120');
test(longestConsecutive([100, 200, 300, 400, 500, 501, 502, 503, 504, 505]), 6, 'Test 121');
test(longestConsecutive([5, 4, 3, 2, 1, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 10, 'Test 122');
test(longestConsecutive([10, 5, 9, 1, 11, 13, 8, 2, 4, 6, 7, 3]), 11, 'Test 123');
test(longestConsecutive([-1, -2, -3, 0, 1, 2, 3, 4, 5]), 9, 'Test 124');
test(longestConsecutive([1000000000, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005, 1000000006, 1000000007, 1000000008, 1000000009]), 10, 'Test 125');
test(longestConsecutive([10, 5, 0, 5, 3, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), 1, 'Test 126');
test(longestConsecutive([1000,999,998,997,996,995,994,993,992,991,990,989,988,987,986,985,984,983,982,981,980]), 21, 'Test 127');
test(longestConsecutive([-1, -2, -3, -4, 0, 1, 2, 3, 4, 5]), 10, 'Test 128');
test(longestConsecutive([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 1, 'Test 129');
test(longestConsecutive([5, 3, 8, 9, 11, 1, 7, 10, 12, 6, 2, 4]), 12, 'Test 130');
test(longestConsecutive([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 20]), 20, 'Test 131');
test(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]), 11, 'Test 132');
test(longestConsecutive([200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190]), 11, 'Test 133');
test(longestConsecutive([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 134');
test(longestConsecutive([1, 3, 5, 2, 4, 6, 8, 7, 10, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 135');
test(longestConsecutive([0,1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 21, 'Test 136');
test(longestConsecutive([500000000, 500000001, 500000002, 500000003, 500000004, 500000005, 500000006, 500000007, 500000008, 500000009, 500000010]), 11, 'Test 137');
test(longestConsecutive([1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22, 23, 24]), 5, 'Test 138');

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
