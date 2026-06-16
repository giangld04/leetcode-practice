// Test: 219. Contains Duplicate Ii
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { containsNearbyDuplicate } = require("./solution");

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

console.log("\n219. Contains Duplicate Ii\n");

test(containsNearbyDuplicate([1000000000,-1000000000,1000000000,-1000000000], 2), true, 'Test 1');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10], 8), false, 'Test 2');
test(containsNearbyDuplicate([1,0,1,1], 1), true, 'Test 3');
test(containsNearbyDuplicate([0,1,2,3,4,5,6,7,8,9,0], 10), true, 'Test 4');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,9], 1), true, 'Test 5');
test(containsNearbyDuplicate([1,2,2,1], 2), true, 'Test 6');
test(containsNearbyDuplicate([1,2,3,4,5], 4), false, 'Test 7');
test(containsNearbyDuplicate([1,2,3,4,5], 5), false, 'Test 8');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10], 5), false, 'Test 9');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,1], 9), true, 'Test 10');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1], 18), true, 'Test 11');
test(containsNearbyDuplicate([9,9], 1), true, 'Test 12');
test(containsNearbyDuplicate([9,1,2,3,9], 4), true, 'Test 13');
test(containsNearbyDuplicate([1], 0), false, 'Test 14');
test(containsNearbyDuplicate([1,2,3,1], 3), true, 'Test 15');
test(containsNearbyDuplicate([999999999,999999999,1,1], 2), true, 'Test 16');
test(containsNearbyDuplicate([999999999,-999999999,999999999], 2), true, 'Test 17');
test(containsNearbyDuplicate([1,2,2], 2), true, 'Test 18');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,1], 8), false, 'Test 19');
test(containsNearbyDuplicate([1,1], 0), false, 'Test 20');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1], 20), true, 'Test 21');
test(containsNearbyDuplicate([1,2,3,1,2,3], 2), false, 'Test 22');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10], 0), false, 'Test 23');
test(containsNearbyDuplicate([1,1,1,1,1,1,1,1,1,1], 1), true, 'Test 24');
test(containsNearbyDuplicate([0,0,0,0,0,0,0,0,0,0], 3), true, 'Test 25');
test(containsNearbyDuplicate([1,2,1,2,1,2,1,2], 1), false, 'Test 26');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,1], 7), false, 'Test 27');
test(containsNearbyDuplicate([1,0,2,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 1), false, 'Test 28');
test(containsNearbyDuplicate([999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 999999999], 9), true, 'Test 29');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1], 1), false, 'Test 30');
test(containsNearbyDuplicate([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), true, 'Test 31');
test(containsNearbyDuplicate([10,20,30,40,50,60,70,80,90,100,10], 10), true, 'Test 32');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,50], 49), true, 'Test 33');
test(containsNearbyDuplicate([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1], 2), true, 'Test 34');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 1, 1], 20), true, 'Test 35');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 10), true, 'Test 36');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,1,2,3,4,5], 49), false, 'Test 37');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1], 10), true, 'Test 38');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), true, 'Test 39');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1], 10), false, 'Test 40');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1], 9), true, 'Test 41');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1], 20), true, 'Test 42');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 1), false, 'Test 43');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1], 10), true, 'Test 44');
test(containsNearbyDuplicate([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), true, 'Test 45');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 1, 1], 1), true, 'Test 46');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1], 10), true, 'Test 47');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,30], 29), true, 'Test 48');
test(containsNearbyDuplicate([1000000000, 1000000000, 1, 2, 3], 1), true, 'Test 49');
test(containsNearbyDuplicate([1000000000,-1000000000,1000000000,-1000000000,1000000000], 2), true, 'Test 50');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), true, 'Test 51');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1], 14), false, 'Test 52');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9), true, 'Test 53');
test(containsNearbyDuplicate([0,0,1,1,2,2,3,3,4,4], 1), true, 'Test 54');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 8), false, 'Test 55');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 17), true, 'Test 56');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1], 0), false, 'Test 57');
test(containsNearbyDuplicate([1000000000, 999999999, 1000000000, 999999999, 1000000000, 999999999], 2), true, 'Test 58');
test(containsNearbyDuplicate([1000000000, 1000000000], 1), true, 'Test 59');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 5), false, 'Test 60');
test(containsNearbyDuplicate([1,2,3,4,5,1,2,3,4,5], 4), false, 'Test 61');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1], 29), false, 'Test 62');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), false, 'Test 63');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), false, 'Test 64');
test(containsNearbyDuplicate([10,20,30,40,50,60,70,80,90,10], 9), true, 'Test 65');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1], 9), true, 'Test 66');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,1], 49), false, 'Test 67');
test(containsNearbyDuplicate([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), true, 'Test 68');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1], 10), true, 'Test 69');
test(containsNearbyDuplicate([-1000000000, -2000000000, -1000000000, -3000000000, -2000000000], 2), true, 'Test 70');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1], 100000), true, 'Test 71');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1], 18), true, 'Test 72');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1], 8), false, 'Test 73');
test(containsNearbyDuplicate([1000000000, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005, 1000000006, 1000000007, 1000000008, 1000000009, 1000000000], 10), true, 'Test 74');
test(containsNearbyDuplicate([10,1,2,10,3,4,5,10,6,7,8,9,10], 8), true, 'Test 75');
test(containsNearbyDuplicate([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1), true, 'Test 76');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1], 24), false, 'Test 77');
test(containsNearbyDuplicate([1,0,1,1,0,1,0,1], 2), true, 'Test 78');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1], 19), false, 'Test 79');
test(containsNearbyDuplicate([1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20], 20), true, 'Test 80');
test(containsNearbyDuplicate([1,0,1,1,0,1,0,1,0,1,0,1], 1), true, 'Test 81');
test(containsNearbyDuplicate([5,5,5,5,5,5,5,5,5,5], 5), true, 'Test 82');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1], 5), false, 'Test 83');
test(containsNearbyDuplicate([1000000000, 2000000000, 1000000000, 3000000000, 2000000000], 2), true, 'Test 84');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1], 20), true, 'Test 85');
test(containsNearbyDuplicate([1000000000, 2000000000, 1000000000], 2), true, 'Test 86');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,1], 10), true, 'Test 87');
test(containsNearbyDuplicate([1,0,1,1,0,1,0,1,0,1], 2), true, 'Test 88');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 19), false, 'Test 89');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10), true, 'Test 90');
test(containsNearbyDuplicate([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10), true, 'Test 91');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1], 30), true, 'Test 92');
test(containsNearbyDuplicate([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10], 5), false, 'Test 93');
test(containsNearbyDuplicate([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5], 10), false, 'Test 94');
test(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,1], 39), false, 'Test 95');
test(containsNearbyDuplicate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), true, 'Test 96');
test(containsNearbyDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 1], 2), true, 'Test 97');
test(containsNearbyDuplicate([1000000000, -1000000000, 1000000000, -1000000000], 2), true, 'Test 98');
test(containsNearbyDuplicate([1,0,1,1,0,1], 2), true, 'Test 99');
test(containsNearbyDuplicate([5, 4, 3, 2, 1, 0, 5, 4, 3, 2, 1, 0], 5), false, 'Test 100');
test(containsNearbyDuplicate([1000000000, 1000000001, 1000000000, 1000000001, 1000000000], 2), true, 'Test 101');
test(containsNearbyDuplicate([1,1,2,2,3,3,4,4,5,5], 1), true, 'Test 102');
test(containsNearbyDuplicate([10, 20, 30, 40, 50, 10, 20, 30, 40, 50], 4), false, 'Test 103');
test(containsNearbyDuplicate([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,1], 20), true, 'Test 104');
test(containsNearbyDuplicate([999999999,999999998,999999997,999999996,999999995,999999994,999999993,999999992,999999991,999999990,999999999], 9), false, 'Test 105');
test(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5], 10), true, 'Test 106');

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
