// Test: 3224. Minimum Array Changes To Make Differences Equal
// 122 test cases from LeetCodeDataset
// Run: node test.js

const { minChanges } = require("./solution");

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

console.log("\n3224. Minimum Array Changes To Make Differences Equal\n");

test(minChanges([100000,99999,99998,99997,99996,99995], 100000), 2, 'Test 1');
test(minChanges([10,9,8,7,6,5], 10), 2, 'Test 2');
test(minChanges([1,2,3,4,5,6,7,8], 8), 3, 'Test 3');
test(minChanges([1,3,5,7,9,11,13,15], 15), 3, 'Test 4');
test(minChanges([1,0,1,2,4,3], 4), 2, 'Test 5');
test(minChanges([5,5,5,5], 5), 0, 'Test 6');
test(minChanges([1,2,3,4,5,6,7,8,9,10], 10), 4, 'Test 7');
test(minChanges([0,0,0,0,0,0,0,0], 0), 0, 'Test 8');
test(minChanges([0,2,4,6,8,10], 10), 2, 'Test 9');
test(minChanges([5,5,5,5,5,5], 5), 0, 'Test 10');
test(minChanges([50,51,52,53,54,55,56,57,58,59], 100), 4, 'Test 11');
test(minChanges([0,1,2,3,3,6,5,4], 6), 2, 'Test 12');
test(minChanges([0,1,0,1,0,1,0,1], 1), 0, 'Test 13');
test(minChanges([2,2,2,2,2,2,2,2], 2), 0, 'Test 14');
test(minChanges([0,0,0,0,0,0,0,0,0,0], 10), 0, 'Test 15');
test(minChanges([0,2,4,6,8,10,12,14], 14), 3, 'Test 16');
test(minChanges([100000,0,100000,0,100000,0,100000,0], 100000), 0, 'Test 17');
test(minChanges([1,3,1,3,1,3,1,3], 3), 0, 'Test 18');
test(minChanges([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9], 9), 0, 'Test 19');
test(minChanges(s), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 20');
test(minChanges([99999,99998,99997,99996,99995,99994,99993,99992], 99999), 3, 'Test 21');
test(minChanges(0), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 22');
test(minChanges([0,1,0,1,0,1,0,1,0,1,0,1], 1), 0, 'Test 23');
test(minChanges([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 15), 0, 'Test 24');
test(minChanges([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 0, 'Test 25');
test(minChanges([99999,99998,99997,99996,99995,99994,99993,99992], 100000), 3, 'Test 26');
test(minChanges(4), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 27');
test(minChanges([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), 9, 'Test 28');
test(minChanges([50000, 0, 49999, 1, 49998, 2, 49997, 3, 49996, 4, 49995, 5, 49994, 6, 49993, 7], 100000), 0, 'Test 29');
test(minChanges([5,5,5,5,5,5,5,5,5,5,5,5], 10), 0, 'Test 30');
test(minChanges([30,20,10,0,10,20,30,40,50,60,70,80], 100), 2, 'Test 31');
test(minChanges(7), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 32');
test(minChanges([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160], 160), 7, 'Test 33');
test(minChanges([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 30), 14, 'Test 34');
test(minChanges([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 9), 4, 'Test 35');
test(minChanges([1, 3, 2, 4, 5, 7, 8, 6], 8), 1, 'Test 36');
test(minChanges([99999,0,99999,0,99999,0,99999,0,99999,0], 100000), 0, 'Test 37');
test(minChanges([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 16), 7, 'Test 38');
test(minChanges([100,200,300,400,500,600,700,800,900,1000,1100,1200], 1200), 5, 'Test 39');
test(minChanges([0,1,0,3,0,5,0,7,0,9], 10), 4, 'Test 40');
test(minChanges([1,2,3,4,5,6,7,8,9,10,11,12], 12), 5, 'Test 41');
test(minChanges([5,5,5,5,5,5,5,5,5,5], 10), 0, 'Test 42');
test(minChanges([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), 0, 'Test 43');
test(minChanges([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 0, 'Test 44');
test(minChanges([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20), 9, 'Test 45');
test(minChanges([99999,1,99999,1,99999,1,99999,1], 100000), 0, 'Test 46');
test(minChanges([8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240], 240), 14, 'Test 47');
test(minChanges(n), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 48');
test(minChanges([0,5,10,15,20,25,30,35,40,45,50,55], 55), 5, 'Test 49');
test(minChanges(8), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 50');
test(minChanges([0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6], 6), 7, 'Test 51');
test(minChanges([0,1,2,3,4,5,6,7,8,9,10,11], 11), 5, 'Test 52');
test(minChanges([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 30), 7, 'Test 53');
test(minChanges([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], 100000), 4, 'Test 54');
test(minChanges([10,20,30,40,50,60,50,40,30,20,10,0], 100), 0, 'Test 55');
test(minChanges(9), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 56');
test(minChanges([100000,100000,100000,100000,0,0,0,0,100000,100000,100000,100000], 100000), 0, 'Test 57');
test(minChanges([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], 8), 6, 'Test 58');
test(minChanges([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5), 0, 'Test 59');
test(minChanges([5, 10, 15, 20, 25, 30, 35, 40], 40), 3, 'Test 60');
test(minChanges([0,1,0,1,0,1,0,1,0,1,0,1], 2), 0, 'Test 61');
test(minChanges([100,200,300,400,500,600,500,400,300,200,100,0], 1000), 0, 'Test 62');
test(minChanges([50000,0,50000,0,50000,0,50000,0,50000,0], 100000), 0, 'Test 63');
test(minChanges(u), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 64');
test(minChanges([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 0, 'Test 65');
test(minChanges([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), 9, 'Test 66');
test(minChanges(1), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 67');
test(minChanges([10000,20000,30000,40000,50000,40000,30000,20000,10000,0], 50000), 0, 'Test 68');
test(minChanges([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10), 4, 'Test 69');
test(minChanges([5,5,5,5,5,5,0,0,0,0,0,0,3,3,3,3,3,3,2,2,2,2,2,2], 10), 0, 'Test 70');
test(minChanges([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 2), 0, 'Test 71');
test(minChanges([10,9,8,7,6,5,4,3,2,1], 10), 4, 'Test 72');
test(minChanges([1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14], 15), 7, 'Test 73');
test(minChanges(3), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 74');
test(minChanges(]), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 75');
test(minChanges([3,3,3,3,3,3,3,3,3,3,3,3], 5), 0, 'Test 76');
test(minChanges([30000,20000,10000,0,10000,20000,30000,40000,50000,60000,50000,40000,30000,20000,10000,0], 60000), 3, 'Test 77');
test(minChanges([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 2), 0, 'Test 78');
test(minChanges([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112], 112), 7, 'Test 79');
test(minChanges(), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 80');
test(minChanges([99999,0,99999,0,99999,0,99999,0,99999,0,99999,0,99999,0,99999,0], 100000), 0, 'Test 81');
test(minChanges(5), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 82');
test(minChanges([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59], 59), 14, 'Test 83');
test(minChanges(6), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 84');
test(minChanges([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5], 5), Error: list index out of range, 'Test 85');
test(minChanges([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4], 4), 4, 'Test 86');
test(minChanges(,), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 87');
test(minChanges([42,24,42,24,42,24,42,24,42,24,42,24], 100), 0, 'Test 88');
test(minChanges([10,20,30,40,50,60,70,80,90,100], 100), 4, 'Test 89');
test(minChanges([1,3,5,7,9,11,13,15,17,19], 19), 4, 'Test 90');
test(minChanges([0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 30), 7, 'Test 91');
test(minChanges([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100), 4, 'Test 92');
test(minChanges([5,10,5,15,5,20,5,25,5,30], 30), 4, 'Test 93');
test(minChanges([1000,2000,3000,4000,5000,4000,3000,2000,1000,0], 5000), 0, 'Test 94');
test(minChanges(m), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 95');
test(minChanges([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), 0, 'Test 96');
test(minChanges([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), 0, 'Test 97');
test(minChanges([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5], 9), 5, 'Test 98');
test(minChanges([0, 1, 2, 3, 0, 1, 2, 3, 0, 1], 3), 0, 'Test 99');
test(minChanges([100,200,300,400,500,500,400,300,200,100], 500), 0, 'Test 100');
test(minChanges([1,3,5,7,9,11,13,15,17,19], 20), 4, 'Test 101');
test(minChanges([1,3,5,7,9,11,13,15,17,19,21,23], 23), 5, 'Test 102');
test(minChanges(=), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 103');
test(minChanges([1,3,2,3,4,5,3,2,5,4], 5), 3, 'Test 104');
test(minChanges([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 10), 8, 'Test 105');
test(minChanges([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 106');
test(minChanges([2,4,6,8,10,12,14,16,18,20], 20), 4, 'Test 107');
test(minChanges([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80], 80), 7, 'Test 108');
test(minChanges(k), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 109');
test(minChanges([2,1,3,4,1,0,2,3,4,1,0,2,3,4,1,0], 4), 3, 'Test 110');
test(minChanges([5,1,3,7,9,2,8,4,6,0], 10), 3, 'Test 111');
test(minChanges([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 16), 7, 'Test 112');
test(minChanges([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 31), 7, 'Test 113');
test(minChanges([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12), 5, 'Test 114');
test(minChanges([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 20), 7, 'Test 115');
test(minChanges([10,20,30,40,50,60,50,40,30,20,10,0], 60), 0, 'Test 116');
test(minChanges([1, 3, 5, 2, 4, 6, 7, 8], 8), 3, 'Test 117');
test(minChanges([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4], 9), 5, 'Test 118');
test(minChanges([99999,0,99999,0,99999,0,99999,0,99999,0,99999,0,99999,0,99999,0], 99999), 0, 'Test 119');
test(minChanges(2), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 120');
test(minChanges([0,1,0,1,0,1,0,1,0,1], 1), 0, 'Test 121');
test(minChanges([), Error: Solution.minChanges[] missing 2 required positional arguments: 'nums' and 'k', 'Test 122');

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
