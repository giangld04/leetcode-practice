// Test: 3434. Maximum Frequency After Subarray Operation
// 132 test cases from LeetCodeDataset
// Run: node test.js

const { maxFrequency } = require("./solution");

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

console.log("\n3434. Maximum Frequency After Subarray Operation\n");

test(maxFrequency([5,5,5,5,5], 5), 5, 'Test 1');
test(maxFrequency([10,20,30,40,50], 50), 2, 'Test 2');
test(maxFrequency([1,50,1,50,1], 50), 3, 'Test 3');
test(maxFrequency([25,25,25,25,25,25,25,25,25,25], 25), 10, 'Test 4');
test(maxFrequency([50,1,50,1,50], 50), 4, 'Test 5');
test(maxFrequency([25,25,25,25,25], 1), 5, 'Test 6');
test(maxFrequency([1,2,3,4,5], 5), 2, 'Test 7');
test(maxFrequency([1,2,3,4,5], 3), 2, 'Test 8');
test(maxFrequency([30,30,30,30,30], 20), 5, 'Test 9');
test(maxFrequency([1,2,2,3,3,3,4,4,4,4], 4), 7, 'Test 10');
test(maxFrequency([5,4,3,2,1], 1), 2, 'Test 11');
test(maxFrequency([10,2,3,4,5,5,4,3,2,2], 10), 4, 'Test 12');
test(maxFrequency([1,2,3,4,5,6], 1), 2, 'Test 13');
test(maxFrequency([1,2,2,3,3,3,4,4,4,4], 3), 7, 'Test 14');
test(maxFrequency([30,30,30,30,30,30,30,30,30,30], 50), 10, 'Test 15');
test(maxFrequency([1,1,1,1,1], 5), 5, 'Test 16');
test(maxFrequency([1,1,1,1,1], 1), 5, 'Test 17');
test(maxFrequency([30,30,30,30,30,30,30,30,30,30], 10), 10, 'Test 18');
test(maxFrequency([1,100,1,100,1,100], 1), 3, 'Test 19');
test(maxFrequency([25,25,25,25,25], 25), 5, 'Test 20');
test(maxFrequency([48,48,48,48,48], 50), 5, 'Test 21');
test(maxFrequency([1,10,100,1000,10000], 10), 2, 'Test 22');
test(maxFrequency([1,2,3,4,5], 50), 1, 'Test 23');
test(maxFrequency([50,49,48,47,46], 50), 2, 'Test 24');
test(maxFrequency([50,50,50,50,50], 50), 5, 'Test 25');
test(maxFrequency([1,1,2,2,3,3,4,4,5,5], 2), 4, 'Test 26');
test(maxFrequency([5,4,3,2,1], 3), 2, 'Test 27');
test(maxFrequency([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42], 50), 15, 'Test 28');
test(maxFrequency([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36], 50), 2, 'Test 29');
test(maxFrequency([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10], 5), 6, 'Test 30');
test(maxFrequency([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 20), 2, 'Test 31');
test(maxFrequency([1, 50, 1, 50, 1, 50, 1, 50, 1, 50], 49), 5, 'Test 32');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 5), 2, 'Test 33');
test(maxFrequency([1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5], 4), 7, 'Test 34');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 10), 1, 'Test 35');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10], 5), 2, 'Test 36');
test(maxFrequency([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1], 3), 5, 'Test 37');
test(maxFrequency([1, 50, 1, 50, 1, 50, 1, 50, 1, 50], 50), 6, 'Test 38');
test(maxFrequency([45, 45, 45, 45, 45, 50, 50, 50, 50, 50], 50), 10, 'Test 39');
test(maxFrequency([30, 20, 10, 40, 50, 60, 70, 80, 90, 100], 50), 2, 'Test 40');
test(maxFrequency([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5), 2, 'Test 41');
test(maxFrequency([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 30, 'Test 42');
test(maxFrequency([50, 50, 49, 49, 48, 48, 47, 47, 46, 46], 50), 4, 'Test 43');
test(maxFrequency([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42], 42), 20, 'Test 44');
test(maxFrequency([25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 24), 10, 'Test 45');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 20, 'Test 46');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20), 1, 'Test 47');
test(maxFrequency([3,3,3,3,3,3,3,3,3,3], 3), 10, 'Test 48');
test(maxFrequency([10, 20, 30, 40, 50, 40, 30, 20, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 30), 12, 'Test 49');
test(maxFrequency([40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 20), 4, 'Test 50');
test(maxFrequency([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 10), 2, 'Test 51');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 10, 'Test 52');
test(maxFrequency([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 1), 15, 'Test 53');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 150), 1, 'Test 54');
test(maxFrequency([10,10,10,10,10,10,10,10,10,10], 10), 10, 'Test 55');
test(maxFrequency([50, 49, 48, 47, 46, 45, 44, 43, 42, 41], 40), 1, 'Test 56');
test(maxFrequency([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 20), 1, 'Test 57');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 2, 'Test 58');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 2, 'Test 59');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 50), 1, 'Test 60');
test(maxFrequency([25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25], 50), 52, 'Test 61');
test(maxFrequency([30, 1, 30, 2, 30, 3, 30, 4, 30, 5], 30), 6, 'Test 62');
test(maxFrequency([10,20,30,40,50,60,70,80,90,100], 50), 2, 'Test 63');
test(maxFrequency([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3), 20, 'Test 64');
test(maxFrequency([49,49,49,49,49,49,49,49,49,49], 49), 10, 'Test 65');
test(maxFrequency([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 25), 2, 'Test 66');
test(maxFrequency([5, 4, 5, 4, 5, 4, 5, 4, 5, 4], 5), 6, 'Test 67');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 2, 'Test 68');
test(maxFrequency([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 20), 2, 'Test 69');
test(maxFrequency([40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16], 40), 2, 'Test 70');
test(maxFrequency([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 25), 20, 'Test 71');
test(maxFrequency([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], 15), 4, 'Test 72');
test(maxFrequency([2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5], 10), 5, 'Test 73');
test(maxFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 3), 7, 'Test 74');
test(maxFrequency([10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50], 50), 4, 'Test 75');
test(maxFrequency([5,10,15,20,25,30,35,40,45,50], 5), 2, 'Test 76');
test(maxFrequency([30, 30, 30, 30, 30, 30, 30, 30, 30, 30], 50), 10, 'Test 77');
test(maxFrequency([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1), 10, 'Test 78');
test(maxFrequency([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 25), 15, 'Test 79');
test(maxFrequency([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1), 2, 'Test 80');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 25), 1, 'Test 81');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 20), 2, 'Test 82');
test(maxFrequency([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 30), 2, 'Test 83');
test(maxFrequency([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4], 3), 6, 'Test 84');
test(maxFrequency([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1], 2), 11, 'Test 85');
test(maxFrequency([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 15), 1, 'Test 86');
test(maxFrequency([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1], 1), 9, 'Test 87');
test(maxFrequency([30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30], 30), 20, 'Test 88');
test(maxFrequency([10,20,30,40,50,60,70,80,90,100], 100), 2, 'Test 89');
test(maxFrequency([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,50], 5), 2, 'Test 90');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15], 10), 1, 'Test 91');
test(maxFrequency([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 25), 2, 'Test 92');
test(maxFrequency([5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5], 3), 6, 'Test 93');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 100), 2, 'Test 94');
test(maxFrequency([49, 48, 47, 46, 45, 44, 43, 42, 41, 40], 40), 2, 'Test 95');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100), 2, 'Test 96');
test(maxFrequency([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], 15), 15, 'Test 97');
test(maxFrequency([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 50), 20, 'Test 98');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50), 1, 'Test 99');
test(maxFrequency([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), 54, 'Test 100');
test(maxFrequency([25, 24, 23, 22, 21, 20, 19, 18, 17, 16], 40), 1, 'Test 101');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10), 2, 'Test 102');
test(maxFrequency([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31], 30), 1, 'Test 103');
test(maxFrequency([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50), 20, 'Test 104');
test(maxFrequency([1,1,1,2,2,2,3,3,3,4,4,4], 1), 6, 'Test 105');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 2, 'Test 106');
test(maxFrequency([40, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 3, 'Test 107');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50), 15, 'Test 108');
test(maxFrequency([42, 42, 42, 42, 42, 42, 42, 42, 42, 42], 42), 10, 'Test 109');
test(maxFrequency([30, 20, 10, 40, 50, 30, 20, 10], 30), 3, 'Test 110');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 90), 2, 'Test 111');
test(maxFrequency([50,50,50,50,50,50,50,50,50,50], 1), 10, 'Test 112');
test(maxFrequency([49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30], 49), 2, 'Test 113');
test(maxFrequency([10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40, 50, 50, 50], 30), 6, 'Test 114');
test(maxFrequency([1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 9), 5, 'Test 115');
test(maxFrequency([50, 49, 48, 47, 46, 45, 44, 43, 42, 41], 25), 1, 'Test 116');
test(maxFrequency([50, 40, 30, 20, 10, 50, 40, 30, 20, 10], 25), 2, 'Test 117');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 25), 2, 'Test 118');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 2, 'Test 119');
test(maxFrequency([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], 3), 8, 'Test 120');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10), 2, 'Test 121');
test(maxFrequency([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 3), 4, 'Test 122');
test(maxFrequency([25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 10), 10, 'Test 123');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15), 2, 'Test 124');
test(maxFrequency([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31], 40), 2, 'Test 125');
test(maxFrequency([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40], 50), 2, 'Test 126');
test(maxFrequency([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36], 50), 2, 'Test 127');
test(maxFrequency([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3), 57, 'Test 128');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 1, 'Test 129');
test(maxFrequency([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 25), 31, 'Test 130');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 1, 'Test 131');
test(maxFrequency([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21], 15), 2, 'Test 132');

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
