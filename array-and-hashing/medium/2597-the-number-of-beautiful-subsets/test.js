// Test: 2597. The Number Of Beautiful Subsets
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { beautifulSubsets } = require("./solution");

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

console.log("\n2597. The Number Of Beautiful Subsets\n");

test(beautifulSubsets([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90], 5), 6764, 'Test 1');
test(beautifulSubsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 1), 6764, 'Test 2');
test(beautifulSubsets([10,20,30,40,50], 10), 12, 'Test 3');
test(beautifulSubsets([1,2,3,4,5,6,7,8,9,10], 1), 143, 'Test 4');
test(beautifulSubsets([1], 1), 1, 'Test 5');
test(beautifulSubsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 3), 9260, 'Test 6');
test(beautifulSubsets([5,10,15,20,25,30], 5), 20, 'Test 7');
test(beautifulSubsets([1,3,5,7,9], 2), 12, 'Test 8');
test(beautifulSubsets([2,4,6], 2), 4, 'Test 9');
test(beautifulSubsets([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100), 143, 'Test 10');
test(beautifulSubsets([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36], 2), 6764, 'Test 11');
test(beautifulSubsets([100,101,102,103,104,105,106,107,108,109,110], 1), 232, 'Test 12');
test(beautifulSubsets([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], 2), 7920, 'Test 13');
test(beautifulSubsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 143, 'Test 14');
test(beautifulSubsets([5,11,17,23,29,35,41,47,53,59,65,71,77,83,89,95], 6), 2583, 'Test 15');
test(beautifulSubsets([3, 11, 19, 27, 35, 43, 51, 59, 67, 75, 83, 91, 99, 107, 115, 123, 131, 139], 8), 6764, 'Test 16');
test(beautifulSubsets([25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450], 25), 6764, 'Test 17');
test(beautifulSubsets([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126], 7), 6764, 'Test 18');
test(beautifulSubsets([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35], 2), 6764, 'Test 19');
test(beautifulSubsets([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72], 4), 6764, 'Test 20');
test(beautifulSubsets([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144], 8), 6764, 'Test 21');
test(beautifulSubsets([11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198], 11), 6764, 'Test 22');
test(beautifulSubsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), 199, 'Test 23');
test(beautifulSubsets([2, 4, 6, 8, 10, 12, 14], 2), 33, 'Test 24');
test(beautifulSubsets([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59], 1), 163839, 'Test 25');
test(beautifulSubsets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180], 20), 7920, 'Test 26');
test(beautifulSubsets([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 3), 143, 'Test 27');
test(beautifulSubsets([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52], 3), 6764, 'Test 28');
test(beautifulSubsets([15,30,45,60,75,90,105,120,135,150], 15), 143, 'Test 29');
test(beautifulSubsets([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35], 2), 6764, 'Test 30');
test(beautifulSubsets([2,6,10,14,18,22,26,30,34,38,42,46,50,54,58,62,66,70], 4), 6764, 'Test 31');
test(beautifulSubsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 1), 6764, 'Test 32');
test(beautifulSubsets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072], 2), 196607, 'Test 33');
test(beautifulSubsets([3,9,27,81,243,729,2187,6561,19683,59049,177147,531441,1594323,4782969,14348907,43046721,129140163,387420489], 6), 196607, 'Test 34');
test(beautifulSubsets([1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26], 1), 19682, 'Test 35');
test(beautifulSubsets([4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54], 5), 232, 'Test 36');
test(beautifulSubsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 3), 9260, 'Test 37');
test(beautifulSubsets([1, 2, 5, 6, 9, 10, 13, 14, 17, 18, 21, 22, 25, 26, 29, 30, 33, 34], 4), 7920, 'Test 38');
test(beautifulSubsets([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195, 208, 221, 234], 13), 6764, 'Test 39');
test(beautifulSubsets([1,2,3,4,5,6,7,8,9,10], 3), 199, 'Test 40');
test(beautifulSubsets([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69], 4), 6764, 'Test 41');
test(beautifulSubsets([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165,176,187,198], 11), 6764, 'Test 42');
test(beautifulSubsets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 20), 168, 'Test 43');
test(beautifulSubsets([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126], 7), 6764, 'Test 44');
test(beautifulSubsets([2, 5, 8, 11, 14, 17, 20], 3), 33, 'Test 45');
test(beautifulSubsets([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], 2), 6764, 'Test 46');
test(beautifulSubsets([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70], 4), 6764, 'Test 47');
test(beautifulSubsets([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112], 7), 2583, 'Test 48');
test(beautifulSubsets([1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597], 2), 40959, 'Test 49');
test(beautifulSubsets([2,4,6,8,10,12,14,16,18,20], 2), 143, 'Test 50');
test(beautifulSubsets([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072], 1), 196607, 'Test 51');
test(beautifulSubsets([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54], 3), 6764, 'Test 52');
test(beautifulSubsets([2,10,18,26,34,42,50,58,66,74,82,90,98,106,114,122,130,138], 8), 6764, 'Test 53');
test(beautifulSubsets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180], 10), 6764, 'Test 54');
test(beautifulSubsets([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800], 100), 6764, 'Test 55');
test(beautifulSubsets([1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141, 151, 161, 171], 10), 6764, 'Test 56');
test(beautifulSubsets([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61], 4), 2583, 'Test 57');
test(beautifulSubsets([100, 200, 300, 400, 500, 600, 700, 800, 900], 100), 88, 'Test 58');
test(beautifulSubsets([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 2), 1596, 'Test 59');
test(beautifulSubsets([1, 2, 3, 6, 7, 8, 11, 12, 13, 16, 17, 18, 21, 22, 23, 26, 27, 28], 3), 62207, 'Test 60');
test(beautifulSubsets([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53], 3), 6764, 'Test 61');
test(beautifulSubsets([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53], 1), 49151, 'Test 62');
test(beautifulSubsets([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59], 2), 41471, 'Test 63');
test(beautifulSubsets([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768], 1), 49151, 'Test 64');
test(beautifulSubsets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072], 1), 196607, 'Test 65');
test(beautifulSubsets([3, 13, 23, 33, 43, 53, 63, 73, 83, 93, 103, 113, 123, 133, 143, 153, 163, 173], 10), 6764, 'Test 66');
test(beautifulSubsets([100,200,300,400,500,600,700,800,900,1000], 100), 143, 'Test 67');
test(beautifulSubsets([1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181], 1), 163839, 'Test 68');
test(beautifulSubsets([15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240], 15), 2583, 'Test 69');
test(beautifulSubsets([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], 5), 6764, 'Test 70');
test(beautifulSubsets([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175], 10), 6764, 'Test 71');
test(beautifulSubsets([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69], 4), 6764, 'Test 72');
test(beautifulSubsets([5,10,15,20,25,30,35,40,45,50], 5), 143, 'Test 73');
test(beautifulSubsets([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54], 3), 6764, 'Test 74');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

