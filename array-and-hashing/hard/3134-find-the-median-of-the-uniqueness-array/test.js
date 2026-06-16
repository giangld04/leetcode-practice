// Test: 3134. Find The Median Of The Uniqueness Array
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { medianOfUniquenessArray } = require("./solution");

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

console.log("\n3134. Find The Median Of The Uniqueness Array\n");

test(medianOfUniquenessArray([5,4,3,2,1]), 2, 'Test 1');
test(medianOfUniquenessArray([100000, 99999, 99998, 99997, 99996]), 2, 'Test 2');
test(medianOfUniquenessArray([1,2,2,3,3,3,4,4,4,4]), 2, 'Test 3');
test(medianOfUniquenessArray([1]), 1, 'Test 4');
test(medianOfUniquenessArray([1,1,1,1,1]), 1, 'Test 5');
test(medianOfUniquenessArray([1,2,2,3,3,4,4]), 2, 'Test 6');
test(medianOfUniquenessArray([1,2,3]), 1, 'Test 7');
test(medianOfUniquenessArray([1,1,2,2,3,3,4,4,5,5]), 2, 'Test 8');
test(medianOfUniquenessArray([1,2,3,2,1]), 2, 'Test 9');
test(medianOfUniquenessArray([10,20,30,40,50]), 2, 'Test 10');
test(medianOfUniquenessArray([4,3,5,4]), 2, 'Test 11');
test(medianOfUniquenessArray([10,9,8,7,6,5,4,3,2,1]), 4, 'Test 12');
test(medianOfUniquenessArray([5,5,4,4,3,3,2,2,1,1]), 2, 'Test 13');
test(medianOfUniquenessArray([1,2,3,4,5,6,7,8,9,10]), 4, 'Test 14');
test(medianOfUniquenessArray([100000,99999,99998,99997,99996]), 2, 'Test 15');
test(medianOfUniquenessArray([3,4,3,4,5]), 2, 'Test 16');
test(medianOfUniquenessArray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 2, 'Test 17');
test(medianOfUniquenessArray([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1]), 9, 'Test 18');
test(medianOfUniquenessArray([100000,100000,100000,100000,100000,100000,100000,100000,100000,100000]), 1, 'Test 19');
test(medianOfUniquenessArray([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 3, 'Test 20');
test(medianOfUniquenessArray([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 6, 'Test 21');
test(medianOfUniquenessArray([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 22');
test(medianOfUniquenessArray([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 5, 'Test 23');
test(medianOfUniquenessArray([7,8,9,10,11,12,13,14,15]), 3, 'Test 24');
test(medianOfUniquenessArray([1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5]), 4, 'Test 25');
test(medianOfUniquenessArray([1,2,3,4,5,1,2,3,4,5]), 4, 'Test 26');
test(medianOfUniquenessArray([1, 1, 2, 1, 2, 2, 3, 1, 2, 3, 2, 3, 3, 4, 1, 2, 3, 4, 2, 3, 4, 3, 4, 4, 5, 1, 2, 3, 4, 5, 2, 3, 4, 5, 3, 4, 5, 4, 5, 5, 6]), 4, 'Test 27');
test(medianOfUniquenessArray([1,2,2,3,3,4,4,5,5,1,2,2,3,3,4,4,5,5,1,2,2,3,3,4,4,5,5]), 5, 'Test 28');
test(medianOfUniquenessArray([1,2,3,4,5,4,3,2,1]), 3, 'Test 29');
test(medianOfUniquenessArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 5, 'Test 30');
test(medianOfUniquenessArray([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 5, 'Test 31');
test(medianOfUniquenessArray([1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1]), 4, 'Test 32');
test(medianOfUniquenessArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 9, 'Test 33');
test(medianOfUniquenessArray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 3, 'Test 34');
test(medianOfUniquenessArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 5]), 1, 'Test 35');
test(medianOfUniquenessArray([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991]), 4, 'Test 36');
test(medianOfUniquenessArray([5,4,3,2,1,5,4,3,2,1]), 4, 'Test 37');
test(medianOfUniquenessArray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 4, 'Test 38');
test(medianOfUniquenessArray([1,3,2,3,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1]), 5, 'Test 39');
test(medianOfUniquenessArray([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]), 2, 'Test 40');
test(medianOfUniquenessArray([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), 2, 'Test 41');
test(medianOfUniquenessArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 5, 'Test 42');
test(medianOfUniquenessArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 5, 'Test 43');
test(medianOfUniquenessArray([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2]), 1, 'Test 44');
test(medianOfUniquenessArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 5, 'Test 45');
test(medianOfUniquenessArray([1,2,3,2,1,3,2,1,3,2,1]), 3, 'Test 46');
test(medianOfUniquenessArray([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990, 99989, 99988, 99987, 99986, 99985, 99984, 99983, 99982, 99981, 99980]), 7, 'Test 47');
test(medianOfUniquenessArray([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991]), 4, 'Test 48');
test(medianOfUniquenessArray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 2, 'Test 49');
test(medianOfUniquenessArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 4, 'Test 50');
test(medianOfUniquenessArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 51');
test(medianOfUniquenessArray([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1]), 5, 'Test 52');
test(medianOfUniquenessArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 4, 'Test 53');
test(medianOfUniquenessArray([5,1,5,1,5,1,5,1]), 2, 'Test 54');
test(medianOfUniquenessArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 55');
test(medianOfUniquenessArray([1,2,3,2,1,4,5,4,3,2,1,6,7,6,5,4,3,2,1]), 5, 'Test 56');
test(medianOfUniquenessArray([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 4, 'Test 57');
test(medianOfUniquenessArray([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 5, 'Test 58');
test(medianOfUniquenessArray([5,5,5,5,5,5,5,5,5,5]), 1, 'Test 59');
test(medianOfUniquenessArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 3, 'Test 60');
test(medianOfUniquenessArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 3, 'Test 61');
test(medianOfUniquenessArray([1, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10]), 4, 'Test 62');
test(medianOfUniquenessArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 6, 'Test 63');
test(medianOfUniquenessArray([1,1,1,2,2,3,3,3,3,4,4,4,5,5,5,5,5]), 2, 'Test 64');
test(medianOfUniquenessArray([100,200,100,200,100,200,100,200,100,200]), 2, 'Test 65');
test(medianOfUniquenessArray([5,6,7,8,9,10,5,6,7,8,9,10]), 4, 'Test 66');
test(medianOfUniquenessArray([100000, 99999, 99998, 99997, 99996, 99995]), 2, 'Test 67');
test(medianOfUniquenessArray([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 6, 'Test 68');
test(medianOfUniquenessArray([1,2,3,1,2,3,1,2,3,1]), 3, 'Test 69');
test(medianOfUniquenessArray([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 5, 'Test 70');
test(medianOfUniquenessArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 8, 'Test 71');
test(medianOfUniquenessArray([1, 2, 3, 4, 5, 4, 3, 2, 1]), 3, 'Test 72');
test(medianOfUniquenessArray([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500]), 5, 'Test 73');
test(medianOfUniquenessArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 4, 'Test 74');
test(medianOfUniquenessArray([100000, 100000, 100000, 99999, 99999, 99998, 99998, 99997, 99997, 99996]), 2, 'Test 75');
test(medianOfUniquenessArray([1, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20]), 7, 'Test 76');
test(medianOfUniquenessArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 77');
test(medianOfUniquenessArray([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]), 4, 'Test 78');
test(medianOfUniquenessArray([1,3,2,3,4,5,6,7,8,9,10,1,3,2,3,4,5,6,7,8,9,10]), 7, 'Test 79');
test(medianOfUniquenessArray([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 5, 'Test 80');
test(medianOfUniquenessArray([1, 2, 3, 4, 5, 3, 2, 1, 5, 4, 3, 2, 1]), 4, 'Test 81');
test(medianOfUniquenessArray([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]), 2, 'Test 82');
test(medianOfUniquenessArray([1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1]), 3, 'Test 83');
test(medianOfUniquenessArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 6, 'Test 84');
test(medianOfUniquenessArray([5,4,5,4,5,4,5,4]), 2, 'Test 85');
test(medianOfUniquenessArray([1, 3, 2, 4, 5, 3, 2, 1, 5, 4, 3, 2, 1, 6, 7, 8, 9, 10]), 5, 'Test 86');
test(medianOfUniquenessArray([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9]), 5, 'Test 87');
test(medianOfUniquenessArray([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5]), 2, 'Test 88');
test(medianOfUniquenessArray([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 5, 'Test 89');
test(medianOfUniquenessArray([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 90');
test(medianOfUniquenessArray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 2, 'Test 91');
test(medianOfUniquenessArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1, 'Test 92');
test(medianOfUniquenessArray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 2, 'Test 93');
test(medianOfUniquenessArray([100000, 100000, 99999, 99999, 99998, 99998, 99997, 99997]), 2, 'Test 94');
test(medianOfUniquenessArray([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10,1,2]), 5, 'Test 95');
test(medianOfUniquenessArray([1,10,2,9,3,8,4,7,5,6,10,1,2,9,3,8,4,7,5,6]), 6, 'Test 96');
test(medianOfUniquenessArray([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 7, 'Test 97');
test(medianOfUniquenessArray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]), 3, 'Test 98');
test(medianOfUniquenessArray([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 3, 'Test 99');
test(medianOfUniquenessArray([1,1,1,2,2,3,4,5,6,7,8,9,10]), 4, 'Test 100');
test(medianOfUniquenessArray([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 101');

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
