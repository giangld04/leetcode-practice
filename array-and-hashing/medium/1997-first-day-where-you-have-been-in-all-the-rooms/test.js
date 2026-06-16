// Test: 1997. First Day Where You Have Been In All The Rooms
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { firstDayBeenInAllRooms } = require("./solution");

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

console.log("\n1997. First Day Where You Have Been In All The Rooms\n");

test(firstDayBeenInAllRooms([0,0,2]), 6, 'Test 1');
test(firstDayBeenInAllRooms([0,1,2,3,4,5]), 10, 'Test 2');
test(firstDayBeenInAllRooms([0,2,1,0,1,2]), 52, 'Test 3');
test(firstDayBeenInAllRooms([0,1,1,1,1]), 16, 'Test 4');
test(firstDayBeenInAllRooms([0,0,0,0,0,0,0,0,0,0]), 1022, 'Test 5');
test(firstDayBeenInAllRooms([0,1,0,1,0,1]), 42, 'Test 6');
test(firstDayBeenInAllRooms([9,8,7,6,5,4,3,2,1,0]), 712, 'Test 7');
test(firstDayBeenInAllRooms([0,1,2,3,2,1,0,1,2,3]), 230, 'Test 8');
test(firstDayBeenInAllRooms([0,1,0,2]), 10, 'Test 9');
test(firstDayBeenInAllRooms([0,1,2,0]), 6, 'Test 10');
test(firstDayBeenInAllRooms([0,1,1,1,1,1]), 32, 'Test 11');
test(firstDayBeenInAllRooms([0,1,1,0,1,1,0]), 72, 'Test 12');
test(firstDayBeenInAllRooms([0,1,0,2,1]), 18, 'Test 13');
test(firstDayBeenInAllRooms([0,1,0,1,0,1,0,1,0,1]), 682, 'Test 14');
test(firstDayBeenInAllRooms([0,1,2,3,4,0]), 10, 'Test 15');
test(firstDayBeenInAllRooms([0,2,2,2,2,2]), 20, 'Test 16');
test(firstDayBeenInAllRooms([0,1,2,3,4,5,6,7,8,9]), 18, 'Test 17');
test(firstDayBeenInAllRooms([0,2,1,0]), 12, 'Test 18');
test(firstDayBeenInAllRooms([0,1,1,0,1,2]), 36, 'Test 19');
test(firstDayBeenInAllRooms([0,1,1,0]), 8, 'Test 20');
test(firstDayBeenInAllRooms([0,2,1,0,1]), 26, 'Test 21');
test(firstDayBeenInAllRooms([0,0]), 2, 'Test 22');
test(firstDayBeenInAllRooms([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4]), 328, 'Test 23');
test(firstDayBeenInAllRooms([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0,0,0,0,0]), 670, 'Test 24');
test(firstDayBeenInAllRooms([0,2,1,3,2,4,3,5,4,6]), 192, 'Test 25');
test(firstDayBeenInAllRooms([0,2,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 579139391, 'Test 26');
test(firstDayBeenInAllRooms([0,1,0,3,2,5,4,7,6,9]), 58, 'Test 27');
test(firstDayBeenInAllRooms([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1022, 'Test 28');
test(firstDayBeenInAllRooms([0,0,2,1,4,3,5,6,7,8,9]), 98, 'Test 29');
test(firstDayBeenInAllRooms([0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0]), 599186, 'Test 30');
test(firstDayBeenInAllRooms([0,1,1,2,2,2,3,3,3,3]), 358, 'Test 31');
test(firstDayBeenInAllRooms([0, 0, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 18]), 56, 'Test 32');
test(firstDayBeenInAllRooms([0,1,0,3,2,1,0,5,4,3,2,1,0,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 633246732, 'Test 33');
test(firstDayBeenInAllRooms([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 38, 'Test 34');
test(firstDayBeenInAllRooms([0,2,1,2,3,4,5,4,3,2]), 178, 'Test 35');
test(firstDayBeenInAllRooms([0,2,1,3,1,2,4,2,1,3,1,2,4,2,1,3,1,2,4,2,1,3,1,2,4,2,1,3,1,2,4,2,1,3,1,2,4]), 449162187, 'Test 36');
test(firstDayBeenInAllRooms([0,0,1,2,3,4,5,6,7,8,9]), 110, 'Test 37');
test(firstDayBeenInAllRooms([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2]), 786434, 'Test 38');
test(firstDayBeenInAllRooms([0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0]), 2044, 'Test 39');
test(firstDayBeenInAllRooms([0,1,0,3,2,1,4,5,2,3,6,7,8,9]), 3802, 'Test 40');
test(firstDayBeenInAllRooms([0, 2, 1, 0, 4, 3, 2, 1, 0]), 176, 'Test 41');
test(firstDayBeenInAllRooms([0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 524288, 'Test 42');
test(firstDayBeenInAllRooms([9,0,1,2,3,4,5,6,7,8]), 90, 'Test 43');
test(firstDayBeenInAllRooms([0,2,4,6,8,10,12,14,16,18,1,3,5,7,9,11,13,15,17,19]), 562740, 'Test 44');
test(firstDayBeenInAllRooms([0,2,1,0,3,2,1,0,4,3,2,1,0]), 4912, 'Test 45');
test(firstDayBeenInAllRooms([0,3,5,3,4,2,1,0,7,6,5,4,3,2,1,0]), 11288, 'Test 46');
test(firstDayBeenInAllRooms([0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 19]), 262148, 'Test 47');
test(firstDayBeenInAllRooms([0,2,1,0,3,2,1,0,4,3,2,1,0,5,4,3,2,1,0,6,5,4,3,2,1,0]), 40131408, 'Test 48');
test(firstDayBeenInAllRooms([0,1,0,2,1,0,3,2,1,0,4,3,2,1,0,5,4,3,2,1,0,6,5,4,3,2,1,0,7,6,5,4,3,2,1,0]), 13851577, 'Test 49');
test(firstDayBeenInAllRooms([0, 2, 1, 3, 1, 2, 5, 4, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4]), 269566, 'Test 50');
test(firstDayBeenInAllRooms([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 461127067, 'Test 51');
test(firstDayBeenInAllRooms([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1048574, 'Test 52');
test(firstDayBeenInAllRooms([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 44739242, 'Test 53');
test(firstDayBeenInAllRooms([0,1,0,2,1,0,3,2,1,0]), 556, 'Test 54');
test(firstDayBeenInAllRooms([0, 3, 2, 1, 0, 5, 4, 3, 2, 1, 0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 594736, 'Test 55');
test(firstDayBeenInAllRooms([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 701096, 'Test 56');
test(firstDayBeenInAllRooms([0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 786430, 'Test 57');
test(firstDayBeenInAllRooms([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1048574, 'Test 58');
test(firstDayBeenInAllRooms([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 699050, 'Test 59');
test(firstDayBeenInAllRooms([0,1,2,3,2,1,2,3,4,3,4,5,6,5,6,7,8,7,8,9]), 198234, 'Test 60');
test(firstDayBeenInAllRooms([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 10258, 'Test 61');
test(firstDayBeenInAllRooms([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 712, 'Test 62');
test(firstDayBeenInAllRooms([0,2,2,2,2,2,2,2,2,2]), 260, 'Test 63');
test(firstDayBeenInAllRooms([0, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 28010, 'Test 64');
test(firstDayBeenInAllRooms([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 41964584, 'Test 65');
test(firstDayBeenInAllRooms([0,1,1,2,2,3,3,4,4,5]), 308, 'Test 66');
test(firstDayBeenInAllRooms([0,1,2,3,4,5,4,3,2,1,0,1,2,3,4,5,4,3,2,1]), 63550, 'Test 67');
test(firstDayBeenInAllRooms([0, 1, 1, 3, 2, 2, 5]), 34, 'Test 68');
test(firstDayBeenInAllRooms([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 311766262, 'Test 69');
test(firstDayBeenInAllRooms([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 38954, 'Test 70');
test(firstDayBeenInAllRooms([0,1,2,3,4,5,6,7,8,0]), 18, 'Test 71');
test(firstDayBeenInAllRooms([0,5,3,1,2,4,6,8,10,0]), Error: list index out of range, 'Test 72');
test(firstDayBeenInAllRooms([0,1,0,2,3,2,5,4]), 82, 'Test 73');
test(firstDayBeenInAllRooms([0,2,1,0,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9]), 438546, 'Test 74');
test(firstDayBeenInAllRooms([0,1,2,3,2,3,4,3,4,5]), 154, 'Test 75');
test(firstDayBeenInAllRooms([5,4,3,2,1,0]), 48, 'Test 76');
test(firstDayBeenInAllRooms([0, 1, 0, 3, 0, 1, 0, 5, 0, 1, 0, 3, 0, 1, 0, 7, 0, 1, 0, 3, 0, 1]), 1543578, 'Test 77');
test(firstDayBeenInAllRooms([0,1,2,3,4,3,2,3,4,5]), 106, 'Test 78');
test(firstDayBeenInAllRooms([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 717916156, 'Test 79');
test(firstDayBeenInAllRooms([0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2]), 57521884, 'Test 80');
test(firstDayBeenInAllRooms([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]), 10258, 'Test 81');
test(firstDayBeenInAllRooms([0, 1, 2, 0, 4, 0, 6, 0, 8, 0, 10, 0, 12, 0, 14, 0, 16, 0, 18, 0, 20]), 5114, 'Test 82');
test(firstDayBeenInAllRooms([0,1,2,0,1,2,0,1,2,0]), 438, 'Test 83');
test(firstDayBeenInAllRooms([0,1,2,3,4,3,2,1,0,1,2,3,4,3,2,1,0,1,2,3]), 123366, 'Test 84');
test(firstDayBeenInAllRooms([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20126903, 'Test 85');
test(firstDayBeenInAllRooms([5,0,4,1,3,2,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5]), 514496163, 'Test 86');
test(firstDayBeenInAllRooms([0,0,0,1,0,0,2,0,0,3,0,0,4,0,0,5,0,0,6,0,0,7,0,0,8,0,0,9,0,0,10]), 943314207, 'Test 87');
test(firstDayBeenInAllRooms([0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3]), 229862, 'Test 88');
test(firstDayBeenInAllRooms([0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1]), 317428, 'Test 89');
test(firstDayBeenInAllRooms([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 0, 2, 4, 6, 8, 10, 12, 14, 16]), Error: list index out of range, 'Test 90');
test(firstDayBeenInAllRooms([0,2,1,0,3,4,5]), 60, 'Test 91');
test(firstDayBeenInAllRooms([10,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]), 66670, 'Test 92');
test(firstDayBeenInAllRooms([0,2,1,2,0,0,0,3,4,2,5]), 1312, 'Test 93');
test(firstDayBeenInAllRooms([0, 2, 4, 6, 8, 0, 2, 4, 6, 8]), 812, 'Test 94');
test(firstDayBeenInAllRooms([0, 1, 0, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 89816588, 'Test 95');
test(firstDayBeenInAllRooms([0,2,1,0,3,2,1]), 80, 'Test 96');
test(firstDayBeenInAllRooms([0,2,1,4,3,6,5,8,7,10,9,12,11,14,13,16,15,18,17,20,19,22,21,24,23,25]), 2657202, 'Test 97');
test(firstDayBeenInAllRooms([0,3,1,0,2,0,3,1,0,2,0,3,1,0,2,0,3,1,0,2,0,3,1,0,2,0,3,1,0,2,0]), 558657481, 'Test 98');
test(firstDayBeenInAllRooms([0,5,2,4,3,1,6,8,7,9,10,11,12,13,14,15,16,17,18,19]), 212, 'Test 99');
test(firstDayBeenInAllRooms([0,2,1,2,3,2,1,2,3,4]), 430, 'Test 100');
test(firstDayBeenInAllRooms([0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0]), 855298880, 'Test 101');
test(firstDayBeenInAllRooms([0,2,4,6,8,0,2,4,6,8]), 812, 'Test 102');
test(firstDayBeenInAllRooms([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 40, 'Test 103');
test(firstDayBeenInAllRooms([0,2,4,6,8,10,12,14,16,18,0]), Error: list index out of range, 'Test 104');
test(firstDayBeenInAllRooms([0,2,1,0,3,2,5,4,7,6,9,8]), 788, 'Test 105');
test(firstDayBeenInAllRooms([0,2,4,6,8,10,0,2,4,6]), Error: list index out of range, 'Test 106');
test(firstDayBeenInAllRooms([0, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 512, 'Test 107');
test(firstDayBeenInAllRooms([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 640520038, 'Test 108');
test(firstDayBeenInAllRooms([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 147483632, 'Test 109');
test(firstDayBeenInAllRooms([0,1,2,0,3,2,5,6,7,8,9,10,0]), 220, 'Test 110');
test(firstDayBeenInAllRooms([0,0,1,1,2,2,3,3,4,4]), 590, 'Test 111');
test(firstDayBeenInAllRooms([0,3,2,0,4,5,6,7,8,9,10,11,12,13,14]), 38, 'Test 112');
test(firstDayBeenInAllRooms([0,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), Error: list index out of range, 'Test 113');
test(firstDayBeenInAllRooms([0,1,1,1,1,1,1,1,1,1]), 512, 'Test 114');
test(firstDayBeenInAllRooms([0,1,0,1,2,3,4,5,6,7]), 334, 'Test 115');

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
