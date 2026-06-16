// Test: 2216. Minimum Deletions To Make Array Beautiful
// 125 test cases from LeetCodeDataset
// Run: node test.js

const { minDeletion } = require("./solution");

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

console.log("\n2216. Minimum Deletions To Make Array Beautiful\n");

test(minDeletion([1]), 1, 'Test 1');
test(minDeletion([100000,100000,100000,100000,100000,100000]), 6, 'Test 2');
test(minDeletion([1,1,2,2,3,3]), 2, 'Test 3');
test(minDeletion([100000,100000,99999,99999,99998,99998]), 2, 'Test 4');
test(minDeletion([2,2,2,2,2,2]), 6, 'Test 5');
test(minDeletion([1,2,2,3,4,4,5]), 1, 'Test 6');
test(minDeletion([]), 0, 'Test 7');
test(minDeletion([0,1,0,1,0,1]), 0, 'Test 8');
test(minDeletion([1,2,3,4,5,6]), 0, 'Test 9');
test(minDeletion([1,1,2,2,3,3,4,4,5,5]), 2, 'Test 10');
test(minDeletion([1,2,2,3,3,4,4]), 1, 'Test 11');
test(minDeletion([1,2,1,2,1,2]), 0, 'Test 12');
test(minDeletion([5,5,5,5,5,5,5,5,5,5]), 10, 'Test 13');
test(minDeletion([1,1,2,3,5]), 1, 'Test 14');
test(minDeletion([1,1,1,1,1,1]), 6, 'Test 15');
test(minDeletion([1,2,2,3,3,4,4,5,5,6,6]), 1, 'Test 16');
test(minDeletion([0,0,0,1,1,1,2,2,2]), 5, 'Test 17');
test(minDeletion([1,3,2,3,3,2]), 0, 'Test 18');
test(minDeletion([1,1,2,3,3,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5]), 16, 'Test 19');
test(minDeletion([1, 2, 2, 3, 3, 4, 4, 5, 5, 5]), 2, 'Test 20');
test(minDeletion([9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), 2, 'Test 21');
test(minDeletion([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 0, 'Test 22');
test(minDeletion([1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6]), 6, 'Test 23');
test(minDeletion([1,1,1,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5]), 24, 'Test 24');
test(minDeletion([100000,100000,100000,100000,100000,100000,100000,100000,100000,100000]), 10, 'Test 25');
test(minDeletion([1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 1, 'Test 26');
test(minDeletion([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 20, 'Test 27');
test(minDeletion([1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 8, 'Test 28');
test(minDeletion([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]), 1, 'Test 29');
test(minDeletion([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 1, 'Test 30');
test(minDeletion([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]), 2, 'Test 31');
test(minDeletion([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 0, 'Test 32');
test(minDeletion([1,2,1,2,1,2,1,2,1,2,1]), 1, 'Test 33');
test(minDeletion([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 20, 'Test 34');
test(minDeletion([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1]), 1, 'Test 35');
test(minDeletion([1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5]), 12, 'Test 36');
test(minDeletion([1,1,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5]), 24, 'Test 37');
test(minDeletion([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 38');
test(minDeletion([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 0, 'Test 39');
test(minDeletion([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 11, 'Test 40');
test(minDeletion([1,2,3,4,5,5,5,5,5,6,7,8,9,10,10,11,11,12,13,14]), 4, 'Test 41');
test(minDeletion([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15]), 0, 'Test 42');
test(minDeletion([10,20,20,30,30,40,40,50,50,60,60,70,70,80,80,90,90,100,100]), 1, 'Test 43');
test(minDeletion([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 12, 'Test 44');
test(minDeletion([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 1, 'Test 45');
test(minDeletion([1,1,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]), 3, 'Test 46');
test(minDeletion([1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 2, 'Test 47');
test(minDeletion([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 2, 'Test 48');
test(minDeletion([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 0, 'Test 49');
test(minDeletion([1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0, 0, 1, 1, 2, 2]), 2, 'Test 50');
test(minDeletion([1,2,1,2,3,3,4,4,5,5,6,6,7,7,8,8]), 2, 'Test 51');
test(minDeletion([5, 5, 4, 4, 4, 4, 4, 3, 3, 2, 2, 1, 1, 0, 0, 0]), 6, 'Test 52');
test(minDeletion([1,2,2,3,4,4,5,5,6,7,8,8,9,9]), 2, 'Test 53');
test(minDeletion([1,2,2,3,3,4,4,5,5,6,6,7,7]), 1, 'Test 54');
test(minDeletion([5,5,4,4,3,3,2,2,1,1,0,0,1,1,2,2,3,3,4,4,5,5]), 2, 'Test 55');
test(minDeletion([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 0, 'Test 56');
test(minDeletion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 30, 'Test 57');
test(minDeletion([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 1, 'Test 58');
test(minDeletion([1,2,1,2,1,2,1,2,1,2,1,2]), 0, 'Test 59');
test(minDeletion([1,1,1,1,2,2,2,3,3,4]), 4, 'Test 60');
test(minDeletion([0,1,0,1,0,1,0,1,0,1,0,1]), 0, 'Test 61');
test(minDeletion([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 2, 'Test 62');
test(minDeletion([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 63');
test(minDeletion([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5]), 8, 'Test 64');
test(minDeletion([1,2,1,2,1,2,1,2,1,2]), 0, 'Test 65');
test(minDeletion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 16, 'Test 66');
test(minDeletion([1,1,1,1,2,2,2,2,3,3,3,3]), 8, 'Test 67');
test(minDeletion([1,2,3,2,1,2,3,2,1,2]), 0, 'Test 68');
test(minDeletion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 1, 'Test 69');
test(minDeletion([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 25, 'Test 70');
test(minDeletion([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]), 1, 'Test 71');
test(minDeletion([1,2,3,2,1,2,3,2,1,2,3,2]), 0, 'Test 72');
test(minDeletion([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]), 1, 'Test 73');
test(minDeletion([1, 2, 3, 3, 4, 5, 5, 6, 7, 8]), 2, 'Test 74');
test(minDeletion([100000, 99999, 99999, 99998, 99998, 99997, 99997, 99996]), 0, 'Test 75');
test(minDeletion([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 2, 'Test 76');
test(minDeletion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 1, 'Test 77');
test(minDeletion([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 78');
test(minDeletion([100000,100000,99999,99999,99998,99998,99997,99997,99996,99996,99995,99995,99994,99994,99993,99993,99992,99992,99991,99991,99990,99990,99989,99989,99988,99988]), 2, 'Test 79');
test(minDeletion([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 0, 'Test 80');
test(minDeletion([1,1,1,2,2,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,10]), 15, 'Test 81');
test(minDeletion([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2]), 0, 'Test 82');
test(minDeletion([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 82, 'Test 83');
test(minDeletion([1,1,2,2,2,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 12, 'Test 84');
test(minDeletion([1,3,3,3,3,3,2,2,2,2,2,2]), 8, 'Test 85');
test(minDeletion([1,1,1,2,2,2,3,3,3,4,4,4]), 6, 'Test 86');
test(minDeletion([1,1,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 13, 'Test 87');
test(minDeletion([1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 1, 'Test 88');
test(minDeletion([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), 2, 'Test 89');
test(minDeletion([1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 1, 'Test 90');
test(minDeletion([1,1,2,3,4,5,6,7,8,9,10]), 1, 'Test 91');
test(minDeletion([5,5,5,5,5,5,5,5,5,5,5,5]), 12, 'Test 92');
test(minDeletion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 1, 'Test 93');
test(minDeletion([1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9]), 0, 'Test 94');
test(minDeletion([9,8,7,6,5,4,3,2,1,0]), 0, 'Test 95');
test(minDeletion([1,2,3,3,3,3,3,3,3,3,4,5]), 8, 'Test 96');
test(minDeletion([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 22, 'Test 97');
test(minDeletion([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 0, 'Test 98');
test(minDeletion([100000,100000,99999,99999,99998,99998,99997,99997]), 2, 'Test 99');
test(minDeletion([5,5,4,4,3,3,2,2,1,1,0,0,-1,-1,-2,-2,-3,-3,-4,-4,-5,-5]), 2, 'Test 100');
test(minDeletion([1,1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]), 3, 'Test 101');
test(minDeletion([100000, 100000, 100000, 100000, 100000, 100000]), 6, 'Test 102');
test(minDeletion([1,2,3,3,3,4,5,5,5,6,6,6,7,8,9,9,9]), 7, 'Test 103');
test(minDeletion([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 0, 'Test 104');
test(minDeletion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 105');
test(minDeletion([1,1,2,2,3,4,4,4,5,5,6,6,7,8,8,9,9,10,10]), 5, 'Test 106');
test(minDeletion([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9]), 20, 'Test 107');
test(minDeletion([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 0, 'Test 108');
test(minDeletion([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11]), 0, 'Test 109');
test(minDeletion([1,1,2,2,2,3,3,4,4,5,5,5,6,6,7,7,8,8,9,9,10]), 3, 'Test 110');
test(minDeletion([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 0, 'Test 111');
test(minDeletion([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,11]), 0, 'Test 112');
test(minDeletion([1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 11, 'Test 113');
test(minDeletion([1,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3]), 0, 'Test 114');
test(minDeletion([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 0, 'Test 115');
test(minDeletion([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 116');
test(minDeletion([10,10,20,20,30,30,40,40,50,50,60,60,70,70,80,80,90,90,100,100,110]), 1, 'Test 117');
test(minDeletion([100000, 100000, 99999, 99999, 99998, 99998, 99997, 99997, 99996, 99996]), 2, 'Test 118');
test(minDeletion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 1, 'Test 119');
test(minDeletion([1,2,3,3,3,4,5,5,6,6,7,8,8,9,10]), 5, 'Test 120');
test(minDeletion([1,1,2,3,3,4,4,5,5,6,6,7]), 2, 'Test 121');
test(minDeletion([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]), 2, 'Test 122');
test(minDeletion([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 31, 'Test 123');
test(minDeletion([1,2,3,3,4,5,6,6,7,8,9,10,10]), 3, 'Test 124');
test(minDeletion([1,2,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 1, 'Test 125');

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
