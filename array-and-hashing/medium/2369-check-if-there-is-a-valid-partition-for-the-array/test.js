// Test: 2369. Check If There Is A Valid Partition For The Array
// 134 test cases from LeetCodeDataset
// Run: node test.js

const { validPartition } = require("./solution");

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

console.log("\n2369. Check If There Is A Valid Partition For The Array\n");

test(validPartition([1,2,3,4,4,5]), false, 'Test 1');
test(validPartition([2,2,2,3,3,4,4,4]), true, 'Test 2');
test(validPartition([2,2,3,3,4,4]), true, 'Test 3');
test(validPartition([1,2,3,3,3,4,5,5]), false, 'Test 4');
test(validPartition([1,1,2,3,4,4,5,6]), true, 'Test 5');
test(validPartition([1,1,2,2,3,3,4,4]), true, 'Test 6');
test(validPartition([1,1,1,1]), true, 'Test 7');
test(validPartition([1,2,3,3,3,3]), true, 'Test 8');
test(validPartition([1,2,3,4,5,6,7,8,9,10]), false, 'Test 9');
test(validPartition([1,3,5,7,9]), false, 'Test 10');
test(validPartition([1,1,2,2,3,3]), true, 'Test 11');
test(validPartition([1000000, 1000000]), true, 'Test 12');
test(validPartition([1,1,2,2,3,3,4,4,5,5]), true, 'Test 13');
test(validPartition([1,1,1,2]), false, 'Test 14');
test(validPartition([1,1,2,3,4,5,5,5]), true, 'Test 15');
test(validPartition([1,2,3,4,5]), false, 'Test 16');
test(validPartition([4,4,4,5,6]), true, 'Test 17');
test(validPartition([1,2,2,3,3,3]), false, 'Test 18');
test(validPartition([1,1,2,2,2,3,3,4,4,4]), true, 'Test 19');
test(validPartition([1,2,3,4,5,6]), true, 'Test 20');
test(validPartition([1,2,3,2,2,3,4,5]), true, 'Test 21');
test(validPartition([1,2,2,3,4,5,6,7,8,9,10]), false, 'Test 22');
test(validPartition([1,1,2,2,2,3,3,3]), true, 'Test 23');
test(validPartition([1,2,3]), true, 'Test 24');
test(validPartition([2,2,3,3,4,4,5,5]), true, 'Test 25');
test(validPartition([1,1,1,1,1,1]), true, 'Test 26');
test(validPartition([2,2,3,4,5,5,5]), true, 'Test 27');
test(validPartition([2,2]), true, 'Test 28');
test(validPartition([4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]), true, 'Test 29');
test(validPartition([1,1,1,2,3,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19]), true, 'Test 30');
test(validPartition([1,2,2,3,4,4,5,5,5,6,7,8,9,10]), false, 'Test 31');
test(validPartition([1,2,2,2,3,3,4,4,4,5,5,5,6,6,7,7,7,8,8,8,9,9,10,10]), false, 'Test 32');
test(validPartition([1,1,2,3,3,4,4,5,5,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16]), false, 'Test 33');
test(validPartition([1,2,3,4,5,5,5,6,7,8,9,10,10,10,11,12,13,14,15,15,15,16,17,18,19,20,20,20,21,22,23]), false, 'Test 34');
test(validPartition([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), true, 'Test 35');
test(validPartition([5,5,5,6,6,7,7,7,8,8,9,9,10,10,10,11,11,12,12,12,13,13,14,14,14,15,15]), true, 'Test 36');
test(validPartition([1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7,8,9]), true, 'Test 37');
test(validPartition([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]), false, 'Test 38');
test(validPartition([1,2,3,4,5,6,7,8,9,10,11,12]), true, 'Test 39');
test(validPartition([3,3,3,4,4,5,5,5,6,6,7,7,8,8,9,9]), true, 'Test 40');
test(validPartition([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), true, 'Test 41');
test(validPartition([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]), true, 'Test 42');
test(validPartition([5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16]), true, 'Test 43');
test(validPartition([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7]), true, 'Test 44');
test(validPartition([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 45');
test(validPartition([9,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20]), true, 'Test 46');
test(validPartition([1,1,2,2,2,3,4,4,4,5,5,6,6,6,7,8,8,8,9,9,10,10]), true, 'Test 47');
test(validPartition([2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), true, 'Test 48');
test(validPartition([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), true, 'Test 49');
test(validPartition([1,2,3,4,5,6,7,8,9,10,10,10,11,12,13,14,15,15,15]), true, 'Test 50');
test(validPartition([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), true, 'Test 51');
test(validPartition([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), true, 'Test 52');
test(validPartition([2,2,2,3,3,4,4,4,5,5,6,6,6,7,7,8,8,9,9,9,10,10,11,11,11,12,12,13,13]), true, 'Test 53');
test(validPartition([9,9,10,11,12,12,13,13,14,14,15,15,16,16]), false, 'Test 54');
test(validPartition([3,3,3,4,5,6,7,7,8,9,10,10,10]), true, 'Test 55');
test(validPartition([10,10,10,11,11,12,12,13,13,14,15,15,16,17,18,19,19,20]), false, 'Test 56');
test(validPartition([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 57');
test(validPartition([5,5,6,6,7,8,9,10,11,12,13,13]), true, 'Test 58');
test(validPartition([5,6,7,8,8,9,10,10,11,11]), false, 'Test 59');
test(validPartition([10,10,10,11,12,12,12,13,13,14,14,14,15,15,15,16,16,17,17]), true, 'Test 60');
test(validPartition([1,1,2,2,2,3,4,5,6,6,6,7,8,9,10,10,10,11,12,13,14,15,15,15,16,17,18,19,20,20,20,21,22,23]), false, 'Test 61');
test(validPartition([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11]), true, 'Test 62');
test(validPartition([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), true, 'Test 63');
test(validPartition([1,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), true, 'Test 64');
test(validPartition([1,1,1,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), true, 'Test 65');
test(validPartition([5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]), true, 'Test 66');
test(validPartition([1,2,3,1,2,3,1,2,3,4,5,6,7,8,9]), true, 'Test 67');
test(validPartition([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), true, 'Test 68');
test(validPartition([1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,24,25,26]), false, 'Test 69');
test(validPartition([2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5]), true, 'Test 70');
test(validPartition([1,2,3,2,2,3,4,5,6,6,6]), true, 'Test 71');
test(validPartition([1,1,2,3,4,4,4,5,6,7,8,9,10,10,10]), true, 'Test 72');
test(validPartition([1,1,1,1,2,2,2,2,3,3,3,3]), true, 'Test 73');
test(validPartition([5,5,5,6,6,7,7,7,8,8,9,9,9,10,10,11,11,12,12]), true, 'Test 74');
test(validPartition([1,1,1,2,2,2,3,3,3,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), true, 'Test 75');
test(validPartition([5,6,7,7,8,8,9,9,10,10,11,11,12,12]), false, 'Test 76');
test(validPartition([1,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), false, 'Test 77');
test(validPartition([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]), false, 'Test 78');
test(validPartition([4,4,5,5,6,7,7,8,8,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19]), false, 'Test 79');
test(validPartition([1,2,3,4,5,6,7,8,9,10,10,10]), true, 'Test 80');
test(validPartition([2,2,3,3,4,4,5,5,6,6,7,7]), true, 'Test 81');
test(validPartition([1,2,3,4,5,6,6,6,7,8,9,10,11,12,12,12]), true, 'Test 82');
test(validPartition([1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 83');
test(validPartition([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), false, 'Test 84');
test(validPartition([3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), true, 'Test 85');
test(validPartition([1,1,2,2,2,3,3,4,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]), true, 'Test 86');
test(validPartition([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,22,22]), false, 'Test 87');
test(validPartition([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), true, 'Test 88');
test(validPartition([1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12]), true, 'Test 89');
test(validPartition([3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15,15,16,17,18,18,19,20]), true, 'Test 90');
test(validPartition([1,2,3,3,4,5,6,6,7,8,9,10,10,10,11,12,13,14,15,15,15,16,16,16]), true, 'Test 91');
test(validPartition([2,2,2,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), true, 'Test 92');
test(validPartition([3,3,3,4,4,4,5,5,6,6,6,7,7,8,8,8]), true, 'Test 93');
test(validPartition([1,2,2,3,4,4,4,5,6,6,7,8,8,8]), false, 'Test 94');
test(validPartition([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), true, 'Test 95');
test(validPartition([1,1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]), true, 'Test 96');
test(validPartition([5,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 97');
test(validPartition([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16]), true, 'Test 98');
test(validPartition([1,1,1,2,3,4,5,5,5,6,7,8,9,10,10,10,11,12]), false, 'Test 99');
test(validPartition([1,2,3,4,5,6,7,8,9,10,10,10,11,12,13,13,13,14,14]), true, 'Test 100');
test(validPartition([1,2,3,3,4,4,5,5,6,7,8,8,9,10,10,11,12,12,13,14,15,15,16,17,18,19]), false, 'Test 101');
test(validPartition([1,1,1,1,2,2,3,3,3,4,4,5,5,5,6,6,7,7,8,8]), true, 'Test 102');
test(validPartition([1,1,1,2,2,3,3,3,4,4,4,5,5,5,6,6,6]), true, 'Test 103');
test(validPartition([1,2,2,3,3,3,4,4,5,5,5,6,6,7,7,8,8]), false, 'Test 104');
test(validPartition([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,25,25,26,27,28,29,30,30,30]), true, 'Test 105');
test(validPartition([1,2,3,4,5,6,6,7,8,9,10,10,11,12,13,14,14,15,16,17,18,19,20,20,21,22,23]), false, 'Test 106');
test(validPartition([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,12,13,13]), false, 'Test 107');
test(validPartition([2,3,4,5,6,7,8,9,10,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18]), false, 'Test 108');
test(validPartition([1,1,1,2,2,3,3,3,4,4,4,5,5,6,6,7,7,8,8,9,9]), true, 'Test 109');
test(validPartition([1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]), true, 'Test 110');
test(validPartition([1,2,3,4,5,6,7,8,9,10,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17]), true, 'Test 111');
test(validPartition([1,2,2,2,3,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), false, 'Test 112');
test(validPartition([2,2,2,2,2,2,2,2,2,2]), true, 'Test 113');
test(validPartition([1,2,3,4,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), true, 'Test 114');
test(validPartition([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8]), true, 'Test 115');
test(validPartition([1,2,3,3,4,5,5,5,6,7,8,8,9,10,10,10,11,12,13,14,15,15,15,16,17,18,19,20,20,20,21,22,23,24,25]), false, 'Test 116');
test(validPartition([9,9,9,10,10,10,11,11,11,12,12,12,13,13,13]), true, 'Test 117');
test(validPartition([1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10]), false, 'Test 118');
test(validPartition([9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23]), true, 'Test 119');
test(validPartition([1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,5,5]), true, 'Test 120');
test(validPartition([10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19]), true, 'Test 121');
test(validPartition([2,2,3,4,5,5,5,6,6,7,8,8,9,9,10,10,11,11]), false, 'Test 122');
test(validPartition([1,2,3,4,5,6,7,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15]), true, 'Test 123');
test(validPartition([10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22]), true, 'Test 124');
test(validPartition([1,1,2,3,4,5,6,6,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17]), false, 'Test 125');
test(validPartition([1,1,1,2,2,3,3,3,4,4,4,5,5,6,6,6,7,7,8,8]), true, 'Test 126');
test(validPartition([1,2,2,3,3,4,4,5,5,6,6]), false, 'Test 127');
test(validPartition([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]), true, 'Test 128');
test(validPartition([1,1,2,2,3,4,4,5,5,6,6,7,8,8,9,9]), false, 'Test 129');
test(validPartition([2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), true, 'Test 130');
test(validPartition([2,2,3,3,4,5,5,6,6,7]), false, 'Test 131');
test(validPartition([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]), true, 'Test 132');
test(validPartition([1,2,3,4,5,6,7,8,9,10,1,1,2,2,3,3,4,4,5,5]), false, 'Test 133');
test(validPartition([1,2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20]), true, 'Test 134');

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
