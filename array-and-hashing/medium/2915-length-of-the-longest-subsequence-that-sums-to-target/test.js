// Test: 2915. Length Of The Longest Subsequence That Sums To Target
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { lengthOfLongestSubsequence } = require("./solution");

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

console.log("\n2915. Length Of The Longest Subsequence That Sums To Target\n");

test(lengthOfLongestSubsequence([2,3,7,8,10], 15), 3, 'Test 1');
test(lengthOfLongestSubsequence([1,2,3,5,6,7,8,9,10], 15), 4, 'Test 2');
test(lengthOfLongestSubsequence([10,20,30,40,50], 50), 2, 'Test 3');
test(lengthOfLongestSubsequence([999,1], 1000), 2, 'Test 4');
test(lengthOfLongestSubsequence([100,200,300], 100), 1, 'Test 5');
test(lengthOfLongestSubsequence([1,2,3], 7), -1, 'Test 6');
test(lengthOfLongestSubsequence([4,1,3,2,1,5], 7), 4, 'Test 7');
test(lengthOfLongestSubsequence([1], 1), 1, 'Test 8');
test(lengthOfLongestSubsequence([10,20,30,40,50], 100), 4, 'Test 9');
test(lengthOfLongestSubsequence([1,1,1,1,1,1,1,1,1,1], 5), 5, 'Test 10');
test(lengthOfLongestSubsequence([1,1,1,1,1], 3), 3, 'Test 11');
test(lengthOfLongestSubsequence([5,5,5,5,5,5,5,5,5,5], 25), 5, 'Test 12');
test(lengthOfLongestSubsequence([1,2,3,4,5], 9), 3, 'Test 13');
test(lengthOfLongestSubsequence([10,20,30,40,50], 60), 3, 'Test 14');
test(lengthOfLongestSubsequence([5,5,5,5,5], 15), 3, 'Test 15');
test(lengthOfLongestSubsequence([500,500,500,500], 1000), 2, 'Test 16');
test(lengthOfLongestSubsequence([1,2,3], 6), 3, 'Test 17');
test(lengthOfLongestSubsequence([1,2,3,4,5], 1), 1, 'Test 18');
test(lengthOfLongestSubsequence([1000], 1000), 1, 'Test 19');
test(lengthOfLongestSubsequence([1,1,5,4,5], 3), -1, 'Test 20');
test(lengthOfLongestSubsequence([1,2,3,4,5], 15), 5, 'Test 21');
test(lengthOfLongestSubsequence([1,1,1,1,1], 5), 5, 'Test 22');
test(lengthOfLongestSubsequence([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 25), -1, 'Test 23');
test(lengthOfLongestSubsequence([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15), 15, 'Test 24');
test(lengthOfLongestSubsequence([999, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000), 2, 'Test 25');
test(lengthOfLongestSubsequence([1000,999,998,997,996,995,994,993,992,991], 9995), -1, 'Test 26');
test(lengthOfLongestSubsequence([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1], 1998), -1, 'Test 27');
test(lengthOfLongestSubsequence([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50], 600), 24, 'Test 28');
test(lengthOfLongestSubsequence([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 30), 6, 'Test 29');
test(lengthOfLongestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 75), 7, 'Test 30');
test(lengthOfLongestSubsequence([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60], 210), 11, 'Test 31');
test(lengthOfLongestSubsequence([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105], 700), 13, 'Test 32');
test(lengthOfLongestSubsequence([999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987, 986, 985, 984, 983, 982, 981, 980], 990), 1, 'Test 33');
test(lengthOfLongestSubsequence([999, 998, 997, 996, 995, 994, 993, 992, 991, 990], 2970), -1, 'Test 34');
test(lengthOfLongestSubsequence([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 500), 22, 'Test 35');
test(lengthOfLongestSubsequence([10, 20, 30, 40, 50], 100), 4, 'Test 36');
test(lengthOfLongestSubsequence([333, 334, 333, 334, 333, 334, 333, 334, 333, 334, 333, 334, 333, 334, 333, 334, 333, 334, 333, 334], 1000), 3, 'Test 37');
test(lengthOfLongestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 1000), 13, 'Test 38');
test(lengthOfLongestSubsequence([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 50), 9, 'Test 39');
test(lengthOfLongestSubsequence([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 2500), 6, 'Test 40');
test(lengthOfLongestSubsequence([8,16,24,32,40,48,56,64,72,80], 400), 9, 'Test 41');
test(lengthOfLongestSubsequence([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 100), 5, 'Test 42');
test(lengthOfLongestSubsequence([10,25,30,35,40,45,50,55,60,65,70,75,80,85,90], 900), -1, 'Test 43');
test(lengthOfLongestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 500), 9, 'Test 44');
test(lengthOfLongestSubsequence([7,14,21,28,35,42,49,56,63,70], 210), 7, 'Test 45');
test(lengthOfLongestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 550), 10, 'Test 46');
test(lengthOfLongestSubsequence([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 50), -1, 'Test 47');
test(lengthOfLongestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 300), 7, 'Test 48');
test(lengthOfLongestSubsequence([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 3000), 7, 'Test 49');
test(lengthOfLongestSubsequence([999, 500, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000), 2, 'Test 50');
test(lengthOfLongestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 13, 'Test 51');
test(lengthOfLongestSubsequence([10, 15, 20, 25, 30, 35, 40, 45, 50, 55], 100), 5, 'Test 52');
test(lengthOfLongestSubsequence([7,14,28,56,112,224,448], 500), -1, 'Test 53');
test(lengthOfLongestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 900), 12, 'Test 54');
test(lengthOfLongestSubsequence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 5, 'Test 55');
test(lengthOfLongestSubsequence([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135], 675), 11, 'Test 56');
test(lengthOfLongestSubsequence([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 10, 'Test 57');
test(lengthOfLongestSubsequence([123, 456, 789, 234, 567, 890, 345, 678, 901, 12, 34, 56, 78, 90], 2500), -1, 'Test 58');
test(lengthOfLongestSubsequence([50, 100, 150, 200, 250, 300, 350, 400, 450, 500], 1500), 7, 'Test 59');
test(lengthOfLongestSubsequence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 5, 'Test 60');
test(lengthOfLongestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 100), 10, 'Test 61');
test(lengthOfLongestSubsequence([100,200,300,400,500], 1500), 5, 'Test 62');
test(lengthOfLongestSubsequence([50,100,150,200,250,300,350,400,450,500], 1500), 7, 'Test 63');
test(lengthOfLongestSubsequence([10,20,30,40,50,60,70,80,90,100], 150), 5, 'Test 64');
test(lengthOfLongestSubsequence([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 30), 10, 'Test 65');
test(lengthOfLongestSubsequence([3,3,3,3,3,3,3,3,3,3], 27), 9, 'Test 66');
test(lengthOfLongestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 190), 19, 'Test 67');
test(lengthOfLongestSubsequence([500, 250, 125, 62, 31, 15, 7, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 999), 16, 'Test 68');
test(lengthOfLongestSubsequence([1,2,4,8,16,32,64,128,256,512], 1023), 10, 'Test 69');
test(lengthOfLongestSubsequence([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 1000), 13, 'Test 70');
test(lengthOfLongestSubsequence([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105], 210), 7, 'Test 71');
test(lengthOfLongestSubsequence([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 225), 15, 'Test 72');
test(lengthOfLongestSubsequence([999,1,998,2,997,3,996,4,995,5], 2000), 5, 'Test 73');
test(lengthOfLongestSubsequence([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45], 600), -1, 'Test 74');
test(lengthOfLongestSubsequence([10,20,30,40,50,60,70,80,90,100], 300), 7, 'Test 75');
test(lengthOfLongestSubsequence([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160], 600), 11, 'Test 76');
test(lengthOfLongestSubsequence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 7), 7, 'Test 77');
test(lengthOfLongestSubsequence([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946], 10000), 12, 'Test 78');
test(lengthOfLongestSubsequence([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75], 750), -1, 'Test 79');
test(lengthOfLongestSubsequence([123, 456, 789, 101, 202, 303, 404, 505, 606, 707], 1825), -1, 'Test 80');
test(lengthOfLongestSubsequence([250, 125, 62, 31, 15, 7, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 499), 27, 'Test 81');
test(lengthOfLongestSubsequence([5,10,15,20,25,30,35,40,45,50], 150), 7, 'Test 82');
test(lengthOfLongestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 150), 16, 'Test 83');
test(lengthOfLongestSubsequence([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 5, 'Test 84');
test(lengthOfLongestSubsequence([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 100), 9, 'Test 85');
test(lengthOfLongestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150), 5, 'Test 86');
test(lengthOfLongestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 500), 9, 'Test 87');
test(lengthOfLongestSubsequence([333,334,333,334,333,334,333,334], 1000), 3, 'Test 88');
test(lengthOfLongestSubsequence([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140], 420), 10, 'Test 89');
test(lengthOfLongestSubsequence([1, 2, 3, 5, 8, 13, 21, 34, 55, 89], 143), 5, 'Test 90');
test(lengthOfLongestSubsequence([500, 501, 502, 503, 504, 505, 506, 507, 508, 509], 1500), -1, 'Test 91');
test(lengthOfLongestSubsequence([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 150), 7, 'Test 92');
test(lengthOfLongestSubsequence([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 20), 8, 'Test 93');
test(lengthOfLongestSubsequence([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 200), 13, 'Test 94');
test(lengthOfLongestSubsequence([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1024), -1, 'Test 95');
test(lengthOfLongestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 20), 4, 'Test 96');
test(lengthOfLongestSubsequence([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120], 600), 11, 'Test 97');
test(lengthOfLongestSubsequence([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1023), 10, 'Test 98');
test(lengthOfLongestSubsequence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 10, 'Test 99');
test(lengthOfLongestSubsequence([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987, 986], 4950), 5, 'Test 100');
test(lengthOfLongestSubsequence([100,200,300,400,500,600,700,800,900,1000], 5000), 9, 'Test 101');
test(lengthOfLongestSubsequence([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 25), 5, 'Test 102');
test(lengthOfLongestSubsequence([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 20), 8, 'Test 103');
test(lengthOfLongestSubsequence([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 300), 10, 'Test 104');
test(lengthOfLongestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 50), 6, 'Test 105');
test(lengthOfLongestSubsequence([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 55), 13, 'Test 106');
test(lengthOfLongestSubsequence([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 150), 11, 'Test 107');
test(lengthOfLongestSubsequence([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 105), 5, 'Test 108');
test(lengthOfLongestSubsequence([500,300,200,100,50,25,10,5,1], 1000), 3, 'Test 109');
test(lengthOfLongestSubsequence([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 15), 6, 'Test 110');

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
