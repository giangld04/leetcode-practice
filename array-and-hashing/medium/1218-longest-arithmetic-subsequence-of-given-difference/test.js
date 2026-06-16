// Test: 1218. Longest Arithmetic Subsequence Of Given Difference
// 154 test cases from LeetCodeDataset
// Run: node test.js

const { longestSubsequence } = require("./solution");

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

console.log("\n1218. Longest Arithmetic Subsequence Of Given Difference\n");

test(longestSubsequence([3,0,-3,4,-5,0,-7,1], -3), 3, 'Test 1');
test(longestSubsequence([1,2,3,4], 1), 4, 'Test 2');
test(longestSubsequence([1,3,5,7], 1), 1, 'Test 3');
test(longestSubsequence([1,1,1,1,1], 0), 5, 'Test 4');
test(longestSubsequence([5,4,3,2,1], -1), 5, 'Test 5');
test(longestSubsequence([1,3,5,7,9], 2), 5, 'Test 6');
test(longestSubsequence([4,12,10,0,-2,7,-8,9,-9,-12,-12,8,8], 0), 2, 'Test 7');
test(longestSubsequence([1,2,3,4,5], 2), 3, 'Test 8');
test(longestSubsequence([1,5,7,8,5,3,4,2,1], -2), 4, 'Test 9');
test(longestSubsequence([1,2,3,4,5,6,7,8,9,10], 1), 10, 'Test 10');
test(longestSubsequence([10,9,8,7,6,5,4,3,2,1], -1), 10, 'Test 11');
test(longestSubsequence([4,1,1,5,2,3,4,1], 1), 4, 'Test 12');
test(longestSubsequence([1,4,7,10], 3), 4, 'Test 13');
test(longestSubsequence([2,5,8,11,14,17,20,23,26,29,32,35,38,41,44], 3), 15, 'Test 14');
test(longestSubsequence([30,28,26,24,22,20,18,16,14,12,10,8,6,4,2,0,-2,-4,-6,-8,-10,-12,-14,-16,-18,-20,-22,-24,-26,-28,-30], -2), 31, 'Test 15');
test(longestSubsequence([20,10,30,20,40,50,60,70,80,90,100], 10), 9, 'Test 16');
test(longestSubsequence([10,8,6,4,2,-2,-4,-6,-8,-10], -2), 5, 'Test 17');
test(longestSubsequence([1,3,5,7,9,11,13,15,17,19,21], 2), 11, 'Test 18');
test(longestSubsequence([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89], 1), 3, 'Test 19');
test(longestSubsequence([5, 1, 5, 1, 5, 1, 5, 1, 5, 1], 4), 2, 'Test 20');
test(longestSubsequence([2,4,6,8,10,12,14,16], 2), 8, 'Test 21');
test(longestSubsequence([1000,-999,-998,-997,-996,-995,-994,-993,-992,-991], 1), 9, 'Test 22');
test(longestSubsequence([1,3,5,7,9,11,13,15,17,19,21], 1), 1, 'Test 23');
test(longestSubsequence([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75], 5), 15, 'Test 24');
test(longestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 2), 13, 'Test 25');
test(longestSubsequence([100, 98, 96, 94, 92, 90, 88, 86, 84, 82, 80, 78, 76, 74, 72, 70, 68, 66, 64, 62, 60, 58, 56, 54, 52, 50], -2), 26, 'Test 26');
test(longestSubsequence([1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100], 3), 34, 'Test 27');
test(longestSubsequence([1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8], 2), 4, 'Test 28');
test(longestSubsequence([15,20,25,30,35,40,45,50,55,60], 5), 10, 'Test 29');
test(longestSubsequence([40,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2,0,-2,-4,-6,-8,-10,-12,-14,-16,-18,-20,-22,-24,-26,-28,-30,-32,-34,-36,-38,-40], -2), 41, 'Test 30');
test(longestSubsequence([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 1), 30, 'Test 31');
test(longestSubsequence([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 2), 20, 'Test 32');
test(longestSubsequence([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31], 2), 4, 'Test 33');
test(longestSubsequence([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 1), 40, 'Test 34');
test(longestSubsequence([1,7,13,19,25,31,37,43,49,55], 6), 10, 'Test 35');
test(longestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 10, 'Test 36');
test(longestSubsequence([10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50], 2), 21, 'Test 37');
test(longestSubsequence([30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0, -3, -6, -9, -12, -15, -18, -21, -24, -27], -3), 20, 'Test 38');
test(longestSubsequence([1,3,2,4,5,6,7,8,9,10], 1), 8, 'Test 39');
test(longestSubsequence([10, 7, 4, 3, 2, 1], -3), 4, 'Test 40');
test(longestSubsequence([1,2,3,5,6,7,8,10,11,12,13], 1), 4, 'Test 41');
test(longestSubsequence([1,2,3,4,6,8,10,14,18,22,26], 2), 5, 'Test 42');
test(longestSubsequence([100,200,300,400,500,600,700,800,900,1000], 100), 10, 'Test 43');
test(longestSubsequence([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], 3), 3, 'Test 44');
test(longestSubsequence([100, 95, 90, 85, 80, 75, 70, 65, 60, 55], -5), 10, 'Test 45');
test(longestSubsequence([1,5,9,13,17,21,25,29,33,37], 4), 10, 'Test 46');
test(longestSubsequence([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4], 1), 4, 'Test 47');
test(longestSubsequence([5, 3, 1, -1, -3, -5, -7, -9], -2), 8, 'Test 48');
test(longestSubsequence([1, 6, 11, 16, 21, 26, 31, 36, 41, 46], 5), 10, 'Test 49');
test(longestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1), 15, 'Test 50');
test(longestSubsequence([5, 6, 7, 10, 11, 12, 15, 16, 17, 20, 21, 22], 1), 3, 'Test 51');
test(longestSubsequence([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 1), 50, 'Test 52');
test(longestSubsequence([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 10), 15, 'Test 53');
test(longestSubsequence([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5], 1), 5, 'Test 54');
test(longestSubsequence([3, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63], 6), 11, 'Test 55');
test(longestSubsequence([1,2,4,5,7,8,10,11,13,14], 1), 2, 'Test 56');
test(longestSubsequence([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 20, 'Test 57');
test(longestSubsequence([1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20], 2), 10, 'Test 58');
test(longestSubsequence([3,3,3,3,3,3,3,3,3,3], 0), 10, 'Test 59');
test(longestSubsequence([10,20,30,40,50,60,70], 10), 7, 'Test 60');
test(longestSubsequence([1, 2, 3, 5, 8, 13, 21, 34, 55, 89], 3), 3, 'Test 61');
test(longestSubsequence([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], -1), 10, 'Test 62');
test(longestSubsequence([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43], 3), 15, 'Test 63');
test(longestSubsequence([100,90,80,70,60,50,40,30,20,10,0], -10), 11, 'Test 64');
test(longestSubsequence([5, 8, 11, 14, 17, 20, 23, 26, 29, 32], 3), 10, 'Test 65');
test(longestSubsequence([2,5,8,11,14,17,20,23,26,29], 3), 10, 'Test 66');
test(longestSubsequence([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 2), 2, 'Test 67');
test(longestSubsequence([10, 15, 20, 25, 30, 35, 40, 45, 50], 5), 9, 'Test 68');
test(longestSubsequence([1,5,9,13,17,21,25], 4), 7, 'Test 69');
test(longestSubsequence([5, 7, 9, 11, 13, 15, 17, 19, 21], 2), 9, 'Test 70');
test(longestSubsequence([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], 5), 11, 'Test 71');
test(longestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41], 2), 21, 'Test 72');
test(longestSubsequence([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], -1), 21, 'Test 73');
test(longestSubsequence([1,3,5,7,9,11,13], 2), 7, 'Test 74');
test(longestSubsequence([5,10,15,20,25,30,35,40,45,50], 5), 10, 'Test 75');
test(longestSubsequence([2, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 10, 'Test 76');
test(longestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110], 10), 11, 'Test 77');
test(longestSubsequence([1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91], 9), 11, 'Test 78');
test(longestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 2), 20, 'Test 79');
test(longestSubsequence([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14], 2), 8, 'Test 80');
test(longestSubsequence([10, 2, 5, 8, 4, 6, 1, 3, 7], 3), 3, 'Test 81');
test(longestSubsequence([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 2), 25, 'Test 82');
test(longestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 10, 'Test 83');
test(longestSubsequence([5,1,5,1,5,1,5,1,5,1], 4), 2, 'Test 84');
test(longestSubsequence([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 2), 15, 'Test 85');
test(longestSubsequence([1,2,3,5,8,13,21,34,55,89,144,233,377,610,987], 13), 3, 'Test 86');
test(longestSubsequence([25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1, -1, -3, -5, -7, -9, -11, -13, -15, -17, -19, -21, -23, -25], -2), 26, 'Test 87');
test(longestSubsequence([10000,9998,9996,9994,9992,9990,9988,9986,9984,9982], -2), 10, 'Test 88');
test(longestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 2), 11, 'Test 89');
test(longestSubsequence([1,2,4,8,16,32,64,128,256,512,1024], 2), 2, 'Test 90');
test(longestSubsequence([1, 2, 3, 6, 7, 8, 10, 11], 1), 3, 'Test 91');
test(longestSubsequence([1,6,11,16,21,26,31], 5), 7, 'Test 92');
test(longestSubsequence([10,21,32,43,54,65,76,87,98,109], 11), 10, 'Test 93');
test(longestSubsequence([1,4,7,10,13,16,19,22,25,28,31,34,37,40], 3), 14, 'Test 94');
test(longestSubsequence([100,97,94,91,88,85,82,79,76,73,70,67,64,61,58,55,52,49,46,43,40,37,34,31,28,25,22,19,16,13,10,7,4,1,-2,-5,-8,-11,-14,-17,-20,-23,-26,-29,-32,-35,-38,-41,-44,-47,-50], -3), 51, 'Test 95');
test(longestSubsequence([1, 4, 7, 10, 13, 16, 19, 22, 25, 28], 3), 10, 'Test 96');
test(longestSubsequence([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1), 15, 'Test 97');
test(longestSubsequence([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31], 3), 11, 'Test 98');
test(longestSubsequence([3, 0, -3, -6, -9, -12, -15], -3), 7, 'Test 99');
test(longestSubsequence([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), 20, 'Test 100');
test(longestSubsequence([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49], 4), 13, 'Test 101');
test(longestSubsequence([10,4,7,2,5,8,11,14], 3), 5, 'Test 102');
test(longestSubsequence([1, 2, 3, 8, 7, 6, 5, 4], -1), 5, 'Test 103');
test(longestSubsequence([50,45,40,35,30,25,20,15,10,5,0,-5,-10,-15,-20,-25,-30,-35,-40,-45,-50], -5), 21, 'Test 104');
test(longestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 20, 'Test 105');
test(longestSubsequence([1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 11, 11, 12, 13, 13, 14], 1), 14, 'Test 106');
test(longestSubsequence([3,0,-3,-6,-9,-12,-15,-18], -3), 8, 'Test 107');
test(longestSubsequence([10,7,4,3,2,1,0,-1,-2,-3,-4,-5,-6], -3), 6, 'Test 108');
test(longestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 2), 10, 'Test 109');
test(longestSubsequence([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 5), 20, 'Test 110');
test(longestSubsequence([3, 0, -3, -6, -9, -12, -15, -18, -21, -24], -3), 10, 'Test 111');
test(longestSubsequence([3,7,11,15,19,23,27,31,35,39], 4), 10, 'Test 112');
test(longestSubsequence([5,8,11,14,17,20,23,26,29,32,35,38,41], 3), 13, 'Test 113');
test(longestSubsequence([7,7,7,7,7,7,7,7,7,7], 0), 10, 'Test 114');
test(longestSubsequence([1,4,7,10,13,16,19,22], 3), 8, 'Test 115');
test(longestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25], 2), 13, 'Test 116');
test(longestSubsequence([20,18,16,14,12,10,8,6,4,2,0,-2,-4,-6,-8,-10,-12,-14,-16,-18], -2), 20, 'Test 117');
test(longestSubsequence([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, -10], -10), 12, 'Test 118');
test(longestSubsequence([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10], 2), 6, 'Test 119');
test(longestSubsequence([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], -1), 20, 'Test 120');
test(longestSubsequence([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 1), 10, 'Test 121');
test(longestSubsequence([1000,999,998,997,996,995,994,993,992,991,990,989,988,987,986], -1), 15, 'Test 122');
test(longestSubsequence([-10000, -9999, -9998, -9997, -9996, -9995, -9994, -9993, -9992, -9991], 1), 10, 'Test 123');
test(longestSubsequence([1, 2, 3, 6, 7, 8, 11, 12, 13, 16, 17, 18], 3), 2, 'Test 124');
test(longestSubsequence([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41], 4), 11, 'Test 125');
test(longestSubsequence([100,-99,198,-297,396,-495,594,-693,792,-891,990,-1089,1188,-1287,1386], -198), 7, 'Test 126');
test(longestSubsequence([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], -10), 10, 'Test 127');
test(longestSubsequence([10,20,30,40,50,60,70,80,90,100], 10), 10, 'Test 128');
test(longestSubsequence([100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50], -5), 11, 'Test 129');
test(longestSubsequence([3,6,9,12,15,18,21,24,27,30], 3), 10, 'Test 130');
test(longestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 1), 30, 'Test 131');
test(longestSubsequence([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 1), 10, 'Test 132');
test(longestSubsequence([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65], 5), 13, 'Test 133');
test(longestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 1), 25, 'Test 134');
test(longestSubsequence([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 1), 3, 'Test 135');
test(longestSubsequence([1, 2, 4, 5, 7, 8, 10, 11, 13, 14], 1), 2, 'Test 136');
test(longestSubsequence([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1), 2, 'Test 137');
test(longestSubsequence([0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6], 1), 7, 'Test 138');
test(longestSubsequence([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536], 2), 2, 'Test 139');
test(longestSubsequence([50,47,44,41,38,35,32,29,26,23,20,17,14,11,8,5,2,-1,-4,-7], -3), 20, 'Test 140');
test(longestSubsequence([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77], 4), 20, 'Test 141');
test(longestSubsequence([1, 2, 3, 5, 9, 17, 33, 65, 129, 257], 1), 3, 'Test 142');
test(longestSubsequence([10, 5, 0, -5, -10, -15, -20, -25, -30], -5), 9, 'Test 143');
test(longestSubsequence([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 1), 26, 'Test 144');
test(longestSubsequence([1,3,6,10,15,21,28,36,45,55], 2), 2, 'Test 145');
test(longestSubsequence([200,195,190,185,180,175,170,165,160,155,150,145,140,135,130,125,120,115,110], -5), 19, 'Test 146');
test(longestSubsequence([1,4,7,10,13,16,19,22,25,28,31,34,37], 3), 13, 'Test 147');
test(longestSubsequence([5,4,3,2,1,0,-1,-2,-3,-4,-5], -1), 11, 'Test 148');
test(longestSubsequence([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100], -10), 21, 'Test 149');
test(longestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 3), 1, 'Test 150');
test(longestSubsequence([1,2,3,5,8,13,21,34,55,89,144,233,377,610,987], 1), 3, 'Test 151');
test(longestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 10), 15, 'Test 152');
test(longestSubsequence([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000], 0), 10, 'Test 153');
test(longestSubsequence([4,12,10,0,-2,7,15,22,29,36,43], 7), 5, 'Test 154');

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
