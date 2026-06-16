// Test: 1250. Check If It Is A Good Array
// 141 test cases from LeetCodeDataset
// Run: node test.js

const { isGoodArray } = require("./solution");

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

console.log("\n1250. Check If It Is A Good Array\n");

test(isGoodArray([7,13,19]), true, 'Test 1');
test(isGoodArray([100,200,300,400]), false, 'Test 2');
test(isGoodArray([7,13,19,29]), true, 'Test 3');
test(isGoodArray([29,6,10]), true, 'Test 4');
test(isGoodArray([7,14,21,35]), false, 'Test 5');
test(isGoodArray([2,4,6,8,10]), false, 'Test 6');
test(isGoodArray([7,14,21,28]), false, 'Test 7');
test(isGoodArray([2,3,5]), true, 'Test 8');
test(isGoodArray([1]), true, 'Test 9');
test(isGoodArray([1000000000]), false, 'Test 10');
test(isGoodArray([11,22,33,44]), false, 'Test 11');
test(isGoodArray([3,6]), false, 'Test 12');
test(isGoodArray([12,5,7,23]), true, 'Test 13');
test(isGoodArray([1000000000,1000000000,1000000000]), false, 'Test 14');
test(isGoodArray([100,200,300]), false, 'Test 15');
test(isGoodArray([5,5,5,5]), false, 'Test 16');
test(isGoodArray([1,2,3,4,5]), true, 'Test 17');
test(isGoodArray([3,5,7,11,13]), true, 'Test 18');
test(isGoodArray([17,19,23,29]), true, 'Test 19');
test(isGoodArray([2,4,6,8,10,12,14,16,18,20]), false, 'Test 20');
test(isGoodArray([8,12,16,20]), false, 'Test 21');
test(isGoodArray([7,14,21,28,35]), false, 'Test 22');
test(isGoodArray([5,10,15]), false, 'Test 23');
test(isGoodArray([5,10,15,20,25]), false, 'Test 24');
test(isGoodArray([11,22,33,44,55]), false, 'Test 25');
test(isGoodArray([1,2,3]), true, 'Test 26');
test(isGoodArray([11,13,17,19]), true, 'Test 27');
test(isGoodArray([5]), false, 'Test 28');
test(isGoodArray([1000000000,1000000000,1000000000,1]), true, 'Test 29');
test(isGoodArray([123456789, 987654321, 246813579, 864204864]), false, 'Test 30');
test(isGoodArray([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576]), false, 'Test 31');
test(isGoodArray([97,101,103,107,109,113,127,131,137,139]), true, 'Test 32');
test(isGoodArray([7, 14, 21, 28, 35, 42, 49, 56, 63, 70]), false, 'Test 33');
test(isGoodArray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), false, 'Test 34');
test(isGoodArray([41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157]), true, 'Test 35');
test(isGoodArray([13195,26390,39585,52780,65975,79170,92365,105560,118755,131950]), false, 'Test 36');
test(isGoodArray([13, 17, 19, 23, 29]), true, 'Test 37');
test(isGoodArray([1000000007, 1000000009, 1000000021, 1000000033, 1000000037, 1000000087, 1000000093]), true, 'Test 38');
test(isGoodArray([101, 103, 107, 109, 113, 127, 131, 137, 139]), true, 'Test 39');
test(isGoodArray([111111111, 222222222, 333333333, 444444444]), false, 'Test 40');
test(isGoodArray([4, 9, 25, 49, 121, 169, 289, 361]), true, 'Test 41');
test(isGoodArray([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]), true, 'Test 42');
test(isGoodArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), false, 'Test 43');
test(isGoodArray([9973, 9967, 9959, 9949, 9941, 9931, 9929, 9923, 9919, 9907]), true, 'Test 44');
test(isGoodArray([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42]), false, 'Test 45');
test(isGoodArray([1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), false, 'Test 46');
test(isGoodArray([13,17,19,23,29]), true, 'Test 47');
test(isGoodArray([131, 137, 139, 149, 151, 157, 163, 167, 173, 179]), true, 'Test 48');
test(isGoodArray([8, 14, 21, 35, 56]), true, 'Test 49');
test(isGoodArray([999999999, 888888888, 777777777, 666666666, 555555555, 444444444, 333333333, 222222222, 111111111]), false, 'Test 50');
test(isGoodArray([17, 23, 19, 5, 3, 2]), true, 'Test 51');
test(isGoodArray([1000000000] * 100000), Error: Solution.isGoodArray[] missing 1 required positional argument: 'nums', 'Test 52');
test(isGoodArray([7, 21, 35, 56, 112, 140]), false, 'Test 53');
test(isGoodArray([15,30,45,60,75,90,105,120,135,150]), false, 'Test 54');
test(isGoodArray([13,17,19,23,29,31]), true, 'Test 55');
test(isGoodArray([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]), true, 'Test 56');
test(isGoodArray([8, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72]), false, 'Test 57');
test(isGoodArray([1000000007, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]), true, 'Test 58');
test(isGoodArray([123456789, 987654321, 111111111, 222222222, 333333333]), false, 'Test 59');
test(isGoodArray([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), false, 'Test 60');
test(isGoodArray([41,43,47,53,59,61,67,71,73,79]), true, 'Test 61');
test(isGoodArray([1000000007,1000000009,1000000011]), true, 'Test 62');
test(isGoodArray([101,103,107,109,113]), true, 'Test 63');
test(isGoodArray([42, 105, 210, 35]), false, 'Test 64');
test(isGoodArray([1000000007, 1000000009, 1000000021]), true, 'Test 65');
test(isGoodArray([49, 77, 91, 119, 133, 161, 187, 203, 221, 247, 259, 287, 301, 329, 343, 371, 399, 413, 437, 469, 497, 511, 539, 553, 581]), true, 'Test 66');
test(isGoodArray([11, 22, 33, 44, 55, 66, 77, 88, 99]), false, 'Test 67');
test(isGoodArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 68');
test(isGoodArray([3,5,8,11,19]), true, 'Test 69');
test(isGoodArray([555, 1110, 1665, 2220, 2775]), false, 'Test 70');
test(isGoodArray([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384]), true, 'Test 71');
test(isGoodArray([999999999, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]), true, 'Test 72');
test(isGoodArray([1000000000, 500000000, 250000000, 125000000, 62500000]), false, 'Test 73');
test(isGoodArray([15, 21, 35, 525, 630]), true, 'Test 74');
test(isGoodArray([30, 60, 90, 120, 150, 180, 210, 240, 270, 300]), false, 'Test 75');
test(isGoodArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), true, 'Test 76');
test(isGoodArray([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98]), false, 'Test 77');
test(isGoodArray([17, 23, 41, 59]), true, 'Test 78');
test(isGoodArray([1000000000, 999999999, 1, 2]), true, 'Test 79');
test(isGoodArray([8, 12, 18, 24, 30, 36, 42, 48, 54]), false, 'Test 80');
test(isGoodArray([15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), false, 'Test 81');
test(isGoodArray([7, 11, 13, 17, 19, 23, 29]), true, 'Test 82');
test(isGoodArray([1000000001, 1000000003, 1000000007, 1000000009]), true, 'Test 83');
test(isGoodArray([15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]), false, 'Test 84');
test(isGoodArray([11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), true, 'Test 85');
test(isGoodArray([1000000000, 2000000000, 3000000000, 4000000000, 5000000000, 6000000000, 7000000000, 8000000000, 9000000000, 10000000000]), false, 'Test 86');
test(isGoodArray([1] * 100000), Error: Solution.isGoodArray[] missing 1 required positional argument: 'nums', 'Test 87');
test(isGoodArray([3,5,7,11,13,17,19,23,29,31]), true, 'Test 88');
test(isGoodArray([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32]), false, 'Test 89');
test(isGoodArray([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), true, 'Test 90');
test(isGoodArray([11, 22, 33, 44, 55, 66, 77, 88, 99, 110]), false, 'Test 91');
test(isGoodArray([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145]), false, 'Test 92');
test(isGoodArray([123, 456, 789, 101, 137]), true, 'Test 93');
test(isGoodArray([2,4,8,16,32,64,128,256,512,1024]), false, 'Test 94');
test(isGoodArray([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), false, 'Test 95');
test(isGoodArray([31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), true, 'Test 96');
test(isGoodArray([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45]), false, 'Test 97');
test(isGoodArray([3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]), true, 'Test 98');
test(isGoodArray([13, 17, 19, 23, 29, 31]), true, 'Test 99');
test(isGoodArray([41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113]), true, 'Test 100');
test(isGoodArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), true, 'Test 101');
test(isGoodArray([35, 105, 175, 245, 315]), false, 'Test 102');
test(isGoodArray([97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149]), true, 'Test 103');
test(isGoodArray([19, 38, 57, 76, 95, 114, 133, 152]), false, 'Test 104');
test(isGoodArray([1000000000,1000000001,1000000002,1000000003,1000000004,1000000005]), true, 'Test 105');
test(isGoodArray([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288]), true, 'Test 106');
test(isGoodArray([17, 29, 41, 53, 67, 83]), true, 'Test 107');
test(isGoodArray([3, 9, 27, 81, 243]), false, 'Test 108');
test(isGoodArray([60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140, 1200]), false, 'Test 109');
test(isGoodArray([1000000001, 1000000002, 1000000003, 1000000004]), true, 'Test 110');
test(isGoodArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 111');
test(isGoodArray([101, 201, 301, 401, 501, 601, 701, 801, 901, 1001]), true, 'Test 112');
test(isGoodArray([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]), false, 'Test 113');
test(isGoodArray([31, 37, 41, 43, 47, 53, 59]), true, 'Test 114');
test(isGoodArray([123456789, 987654321, 234567891, 345678912]), false, 'Test 115');
test(isGoodArray([37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127]), true, 'Test 116');
test(isGoodArray([111111111, 222222222, 333333333, 444444444, 555555555]), false, 'Test 117');
test(isGoodArray([3, 9, 27, 81, 243, 729, 2187, 6561]), false, 'Test 118');
test(isGoodArray([500000000, 500000001, 500000002, 500000003, 500000004, 500000005, 500000006, 500000007, 500000008, 500000009]), true, 'Test 119');
test(isGoodArray([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), true, 'Test 120');
test(isGoodArray([1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020]), true, 'Test 121');
test(isGoodArray([41, 43, 47, 53, 59, 61]), true, 'Test 122');
test(isGoodArray([101, 202, 303, 404, 505]), false, 'Test 123');
test(isGoodArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 124');
test(isGoodArray([89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191]), true, 'Test 125');
test(isGoodArray([15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125]), false, 'Test 126');
test(isGoodArray([1000000007, 2, 3, 5, 7]), true, 'Test 127');
test(isGoodArray([13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), true, 'Test 128');
test(isGoodArray([333333333, 666666667, 333333333, 666666667, 333333333, 666666667, 333333333, 666666667, 333333333, 666666667]), true, 'Test 129');
test(isGoodArray([1000000000] * 5), Error: Solution.isGoodArray[] missing 1 required positional argument: 'nums', 'Test 130');
test(isGoodArray([2,3,5,7,11,13,17,19,23,29]), true, 'Test 131');
test(isGoodArray([97,1,101,1,103,1,107,1,109,1]), true, 'Test 132');
test(isGoodArray([5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]), true, 'Test 133');
test(isGoodArray([71, 113, 151, 199, 239, 283, 317, 359, 401, 443]), true, 'Test 134');
test(isGoodArray([1000000007,1000000009,1000000021,1000000033]), true, 'Test 135');
test(isGoodArray([17, 31, 41, 43, 59, 61]), true, 'Test 136');
test(isGoodArray([101, 103, 107, 109, 113]), true, 'Test 137');
test(isGoodArray([1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000]), false, 'Test 138');
test(isGoodArray([15, 21, 25, 35, 45]), true, 'Test 139');
test(isGoodArray([100, 101, 102, 103, 104]), true, 'Test 140');
test(isGoodArray([3, 5, 7, 11, 13, 17]), true, 'Test 141');

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
