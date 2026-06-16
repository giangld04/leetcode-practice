// Test: 3351. Sum Of Good Subsequences
// 124 test cases from LeetCodeDataset
// Run: node test.js

const { sumOfGoodSubsequences } = require("./solution");

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

console.log("\n3351. Sum Of Good Subsequences\n");

test(sumOfGoodSubsequences([5,5,5,6,6,7,7,8,8,9,9]), 3681, 'Test 1');
test(sumOfGoodSubsequences([0,1,2,3,4,5]), 140, 'Test 2');
test(sumOfGoodSubsequences([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 3');
test(sumOfGoodSubsequences([0,1,2,3,4,5,6,7,8,9,10]), 1430, 'Test 4');
test(sumOfGoodSubsequences([2,2,2,2,2,2,2,2,2,2]), 20, 'Test 5');
test(sumOfGoodSubsequences([1,1,1,1]), 4, 'Test 6');
test(sumOfGoodSubsequences([10,9,8,7,6,5,4,3,2,1]), 1210, 'Test 7');
test(sumOfGoodSubsequences([1,3,5,7,9]), 25, 'Test 8');
test(sumOfGoodSubsequences([1,3,5,7,9,10,8,6,4,2]), 154, 'Test 9');
test(sumOfGoodSubsequences([3,4,5]), 40, 'Test 10');
test(sumOfGoodSubsequences([1,1,2,2,3,3,4,4,5,5]), 1206, 'Test 11');
test(sumOfGoodSubsequences([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 100, 'Test 12');
test(sumOfGoodSubsequences([5,5,5,5,5]), 25, 'Test 13');
test(sumOfGoodSubsequences([100000,99999,100000,99999]), 2199989, 'Test 14');
test(sumOfGoodSubsequences([100000,99999,100001]), 700000, 'Test 15');
test(sumOfGoodSubsequences([1,2,1]), 14, 'Test 16');
test(sumOfGoodSubsequences([0,0,0,0,0]), 0, 'Test 17');
test(sumOfGoodSubsequences([1,3,5,7,9,11,13,15,17,19]), 100, 'Test 18');
test(sumOfGoodSubsequences([0,0,0]), 0, 'Test 19');
test(sumOfGoodSubsequences([1,1,1,1,1]), 5, 'Test 20');
test(sumOfGoodSubsequences([100000, 99999, 100000, 99998, 99999, 100000]), 7199950, 'Test 21');
test(sumOfGoodSubsequences([100000,99999,99998,99997]), 1999970, 'Test 22');
test(sumOfGoodSubsequences([2,2,2,3,3,4,4,4,5,5,6,6,6]), 4132, 'Test 23');
test(sumOfGoodSubsequences([5,4,3,2,1]), 105, 'Test 24');
test(sumOfGoodSubsequences([5,4,3,2,1,0]), 140, 'Test 25');
test(sumOfGoodSubsequences([1,2,3,2,1]), 83, 'Test 26');
test(sumOfGoodSubsequences([0,0,0,1,1,1,2,2,2]), 126, 'Test 27');
test(sumOfGoodSubsequences([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 16170, 'Test 28');
test(sumOfGoodSubsequences([100000,99999,99998,99997,99996]), 3499930, 'Test 29');
test(sumOfGoodSubsequences([100, 101, 100, 102, 101, 103, 102, 104, 103, 105]), 23020, 'Test 30');
test(sumOfGoodSubsequences([10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9]), 2409295, 'Test 31');
test(sumOfGoodSubsequences([1, 2, 3, 2, 3, 4, 3, 4, 5]), 1566, 'Test 32');
test(sumOfGoodSubsequences([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20]), 190960, 'Test 33');
test(sumOfGoodSubsequences([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2]), 35876, 'Test 34');
test(sumOfGoodSubsequences([1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7]), 52520, 'Test 35');
test(sumOfGoodSubsequences([1,2,3,4,5,6,7,8,9,10]), 1210, 'Test 36');
test(sumOfGoodSubsequences([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 380415, 'Test 37');
test(sumOfGoodSubsequences([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]), 22330, 'Test 38');
test(sumOfGoodSubsequences([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 16170, 'Test 39');
test(sumOfGoodSubsequences([1, 3, 2, 4, 5, 3, 4, 5, 6, 7, 8, 9, 10]), 3640, 'Test 40');
test(sumOfGoodSubsequences([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 62, 'Test 41');
test(sumOfGoodSubsequences([5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6]), 1394855, 'Test 42');
test(sumOfGoodSubsequences([5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4]), 1141245, 'Test 43');
test(sumOfGoodSubsequences([3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2]), 504965, 'Test 44');
test(sumOfGoodSubsequences([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 20, 'Test 45');
test(sumOfGoodSubsequences([1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1]), 2072577, 'Test 46');
test(sumOfGoodSubsequences([1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), 154, 'Test 47');
test(sumOfGoodSubsequences([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 800000, 'Test 48');
test(sumOfGoodSubsequences([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10]), 4400, 'Test 49');
test(sumOfGoodSubsequences([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33]), 289, 'Test 50');
test(sumOfGoodSubsequences([10, 9, 10, 8, 9, 10, 7, 8, 9, 10]), 4192, 'Test 51');
test(sumOfGoodSubsequences([5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10]), 4515, 'Test 52');
test(sumOfGoodSubsequences([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10]), 4400, 'Test 53');
test(sumOfGoodSubsequences([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 39653471, 'Test 54');
test(sumOfGoodSubsequences([100, 99, 101, 98, 102, 97, 103, 96, 104, 95, 105]), 11100, 'Test 55');
test(sumOfGoodSubsequences([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7]), 406268, 'Test 56');
test(sumOfGoodSubsequences([10, 9, 10, 11, 10, 9, 10, 11, 10, 9, 10]), 18005, 'Test 57');
test(sumOfGoodSubsequences([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 4290, 'Test 58');
test(sumOfGoodSubsequences([50000, 49999, 50000, 49998, 49999, 50000, 50001, 50002, 50001, 50000]), 32350024, 'Test 59');
test(sumOfGoodSubsequences([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 180378, 'Test 60');
test(sumOfGoodSubsequences([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991]), 21999010, 'Test 61');
test(sumOfGoodSubsequences([50000, 49999, 50001, 49998, 50000, 49999, 50002, 49999, 50001, 50000]), 11949964, 'Test 62');
test(sumOfGoodSubsequences([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2]), 509475, 'Test 63');
test(sumOfGoodSubsequences([50, 51, 52, 53, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20]), 822512, 'Test 64');
test(sumOfGoodSubsequences([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 180378, 'Test 65');
test(sumOfGoodSubsequences([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 1206, 'Test 66');
test(sumOfGoodSubsequences([100000, 99999, 100000, 99998, 99999, 100000, 99997, 99998, 99999, 100000]), 46199572, 'Test 67');
test(sumOfGoodSubsequences([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4]), 201606, 'Test 68');
test(sumOfGoodSubsequences([1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6]), 1503158, 'Test 69');
test(sumOfGoodSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 38025, 'Test 70');
test(sumOfGoodSubsequences([1,2,3,2,1,2,3,2,1]), 1084, 'Test 71');
test(sumOfGoodSubsequences([1, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10]), 7966, 'Test 72');
test(sumOfGoodSubsequences([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990, 99989, 99988, 99987, 99986, 99985, 99984, 99983, 99982, 99981]), 153985370, 'Test 73');
test(sumOfGoodSubsequences([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 5047, 'Test 74');
test(sumOfGoodSubsequences([1, 2, 1, 3, 2, 4, 3, 5, 4, 6]), 646, 'Test 75');
test(sumOfGoodSubsequences([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 1608, 'Test 76');
test(sumOfGoodSubsequences([50000, 50001, 49999, 50002, 50003, 49998, 50004]), 2200060, 'Test 77');
test(sumOfGoodSubsequences([100, 99, 101, 100, 102, 101, 103, 102, 104, 103]), 24360, 'Test 78');
test(sumOfGoodSubsequences([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 126805, 'Test 79');
test(sumOfGoodSubsequences([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]), 22330, 'Test 80');
test(sumOfGoodSubsequences([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1210, 'Test 81');
test(sumOfGoodSubsequences([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 100, 'Test 82');
test(sumOfGoodSubsequences([0, 1, 0, 2, 0, 3, 0, 4, 0, 5]), 148, 'Test 83');
test(sumOfGoodSubsequences([1, 3, 2, 4, 3, 5, 4, 6, 5, 7]), 600, 'Test 84');
test(sumOfGoodSubsequences([1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10]), 165, 'Test 85');
test(sumOfGoodSubsequences([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 14761, 'Test 86');
test(sumOfGoodSubsequences([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 37356, 'Test 87');
test(sumOfGoodSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1210, 'Test 88');
test(sumOfGoodSubsequences([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15,14,16,15,17,16,18,17,19,18,20]), 256881, 'Test 89');
test(sumOfGoodSubsequences([2, 4, 2, 4, 2, 4, 2, 4, 2, 4]), 30, 'Test 90');
test(sumOfGoodSubsequences([1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1]), 118724, 'Test 91');
test(sumOfGoodSubsequences([5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 49362, 'Test 92');
test(sumOfGoodSubsequences([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1430, 'Test 93');
test(sumOfGoodSubsequences([10, 9, 10, 9, 10, 9, 10, 9, 10]), 5394, 'Test 94');
test(sumOfGoodSubsequences([50000, 49999, 50000, 49998, 49999, 50000, 49997, 49998, 49999, 50000]), 23099572, 'Test 95');
test(sumOfGoodSubsequences([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 470, 'Test 96');
test(sumOfGoodSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 16170, 'Test 97');
test(sumOfGoodSubsequences([7, 8, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 8766, 'Test 98');
test(sumOfGoodSubsequences([1, 2, 2, 3, 3, 3, 4, 4, 5]), 807, 'Test 99');
test(sumOfGoodSubsequences([1,10,2,9,3,8,4,7,5,6,1,10,2,9,3,8,4,7,5,6]), 5341, 'Test 100');
test(sumOfGoodSubsequences([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 101');
test(sumOfGoodSubsequences([7, 8, 7, 9, 10, 8, 9, 10, 11, 12, 11, 12, 13]), 17923, 'Test 102');
test(sumOfGoodSubsequences([0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 16, 0, 17, 0, 18, 0, 19, 0, 20]), 17748, 'Test 103');
test(sumOfGoodSubsequences([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]), 15730, 'Test 104');
test(sumOfGoodSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 603306, 'Test 105');
test(sumOfGoodSubsequences([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), 0, 'Test 106');
test(sumOfGoodSubsequences([50000, 50001, 50000, 50001, 50000, 50001, 50000, 50001]), 15500155, 'Test 107');
test(sumOfGoodSubsequences([1, 2, 2, 3, 3, 3, 4]), 225, 'Test 108');
test(sumOfGoodSubsequences([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 81712, 'Test 109');
test(sumOfGoodSubsequences([50000, 50001, 50002, 50003, 50004, 50005, 50006, 50007, 50008, 50009]), 11000990, 'Test 110');
test(sumOfGoodSubsequences([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 1000000, 'Test 111');
test(sumOfGoodSubsequences([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5]), 19722, 'Test 112');
test(sumOfGoodSubsequences([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 380415, 'Test 113');
test(sumOfGoodSubsequences([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]), 87720, 'Test 114');
test(sumOfGoodSubsequences([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 100000, 99999, 99998]), 29598920, 'Test 115');
test(sumOfGoodSubsequences([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 21, 20, 23, 22, 25, 24, 27, 26, 29, 28, 31, 30]), 1456, 'Test 116');
test(sumOfGoodSubsequences([1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), 1552, 'Test 117');
test(sumOfGoodSubsequences([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 20, 'Test 118');
test(sumOfGoodSubsequences([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 652102, 'Test 119');
test(sumOfGoodSubsequences([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990, 99989, 99988, 99987, 99986, 99985, 99984, 99983, 99982, 99981, 99980, 99979, 99978, 99977, 99976, 99975, 99974, 99973, 99972, 99971, 99970]), 545518160, 'Test 120');
test(sumOfGoodSubsequences([10, 9, 10, 11, 12, 11, 10, 9, 8, 7]), 5234, 'Test 121');
test(sumOfGoodSubsequences([50000, 49999, 50001, 49998, 50002, 49997, 50003, 49996, 50004, 49995]), 4499930, 'Test 122');
test(sumOfGoodSubsequences([100000, 99999, 100000, 99998, 99999, 100000, 99997, 99998, 99999]), 26199726, 'Test 123');
test(sumOfGoodSubsequences([10, 9, 10, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18]), 30424, 'Test 124');

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
