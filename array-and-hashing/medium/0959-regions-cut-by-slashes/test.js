// Test: 959. Regions Cut By Slashes
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { regionsBySlashes } = require("./solution");

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

console.log("\n959. Regions Cut By Slashes\n");

test(regionsBySlashes(["\\/","\\/","\\/"]), 14, 'Test 1');
test(regionsBySlashes(["///","///","///"]), 6, 'Test 2');
test(regionsBySlashes(["\\\\","\\\\","\\\\"]), 14, 'Test 3');
test(regionsBySlashes(["/","/","/"]), 25, 'Test 4');
test(regionsBySlashes(["/\\","/\\","/\\"]), 14, 'Test 5');
test(regionsBySlashes(["\\/","/\\","\\/"]), 15, 'Test 6');
test(regionsBySlashes([" /","/ "]), 2, 'Test 7');
test(regionsBySlashes(["/\\","\\/"]), 5, 'Test 8');
test(regionsBySlashes(["\\","/"]), 9, 'Test 9');
test(regionsBySlashes([" /","  "]), 1, 'Test 10');
test(regionsBySlashes(["   ","   ","   "]), 1, 'Test 11');
test(regionsBySlashes(["//","\\"]), 6, 'Test 12');
test(regionsBySlashes([" / ","/ \/"," \\ ","\ / "]), 10, 'Test 13');
test(regionsBySlashes(["  ","\\/","/\\","  "]), 32, 'Test 14');
test(regionsBySlashes(["/\\/", "\\/\\", "/\\/", "\\/\\"]), 22, 'Test 15');
test(regionsBySlashes(["/\\/\\","\\/\\/","/\\/\\","\\/\\/"]), 13, 'Test 16');
test(regionsBySlashes(["\\/"," \/","\\/","\\/","/\\","/\\","/\\","\\/"]), 191, 'Test 17');
test(regionsBySlashes(["\\ ","\\ ","\\ ","\\ "]), 30, 'Test 18');
test(regionsBySlashes(["/\\","\\/","/\\"]), 15, 'Test 19');
test(regionsBySlashes(["\\\", "\\ ", " \"" ", "//"]), Error: Solution.regionsBySlashes[] missing 1 required positional argument: 'grid', 'Test 20');
test(regionsBySlashes(["\\","\\","\\"]), 25, 'Test 21');
test(regionsBySlashes(["/\\ ","\\/ ","/\\ ","\\/ "]), 18, 'Test 22');
test(regionsBySlashes(["/ ","\\ ","/ ","\\ "]), 32, 'Test 23');
test(regionsBySlashes(["\\ "," / ","\\ "]), 7, 'Test 24');
test(regionsBySlashes(["\\/\\","\\/\\","\\/\\"]), 6, 'Test 25');
test(regionsBySlashes(["/\\/", "\\/\\", "/\\/"]), 8, 'Test 26');
test(regionsBySlashes(["\\/"," / ","/\\"]), 9, 'Test 27');
test(regionsBySlashes(["/\\", "\\/", "/\\"]), 15, 'Test 28');
test(regionsBySlashes([" / / ","\\\\"," / / "]), Error: list index out of range, 'Test 29');
test(regionsBySlashes(["\\/","/\\"," / ","\\/"]), 29, 'Test 30');
test(regionsBySlashes(["\\/\\","/\\/","\\/\\"]), 8, 'Test 31');
test(regionsBySlashes(["/\\/\\","\\/\\/\\","/\\/\\","\\/\\/\\"]), Error: list index out of range, 'Test 32');
test(regionsBySlashes(["\\\\","/\\/","\\/\\","/\\\\"]), 24, 'Test 33');
test(regionsBySlashes(["  ","  ","  ","  "]), 29, 'Test 34');
test(regionsBySlashes(["     ","     ","     ","     ","     "]), 1, 'Test 35');
test(regionsBySlashes(["/\\", "\\/", " / ", "/\\", "\\/"]), 58, 'Test 36');
test(regionsBySlashes(["/\\/","\\\\","/\\/","////"]), 21, 'Test 37');
test(regionsBySlashes(["    ","    ","    ","    "]), 1, 'Test 38');
test(regionsBySlashes([" / ","/\\/"," / "]), 4, 'Test 39');
test(regionsBySlashes(["\\/\\ ","/\\/\\ ","\\/\\ ","/\\/\\ "]), Error: list index out of range, 'Test 40');
test(regionsBySlashes([" /\\/ ", "/\\/\\", "\\/\\/ ", " \\//"]), Error: list index out of range, 'Test 41');
test(regionsBySlashes(["\\ ","/ ","\\ ","/ "]), 31, 'Test 42');
test(regionsBySlashes(["/\\/", "/\\/", "/\\/"]), 6, 'Test 43');
test(regionsBySlashes(["   ","\\/","   "]), 4, 'Test 44');
test(regionsBySlashes(["\\/\\","/\\/\\","\\/\\","/\\/\\"]), 17, 'Test 45');
test(regionsBySlashes([" / / "," / / "," / / "]), Error: list index out of range, 'Test 46');
test(regionsBySlashes(["\\ ", " / ", " / ", "\\ "]), 21, 'Test 47');
test(regionsBySlashes(["   ", "   ", "   "]), 1, 'Test 48');
test(regionsBySlashes(["\\/","/\\","\\/","/\\"]), 35, 'Test 49');
test(regionsBySlashes([" /\\","/\\ ","\\/ "," \\ /"]), 15, 'Test 50');
test(regionsBySlashes(["///","   ","\\\\","///"]), 20, 'Test 51');
test(regionsBySlashes(["\\\", "\\/","/\\","   "]), Error: Solution.regionsBySlashes[] missing 1 required positional argument: 'grid', 'Test 52');
test(regionsBySlashes(["////","////","////","////"]), 8, 'Test 53');
test(regionsBySlashes(["/\\ "," \\ ","/\\ "," \\ "]), 14, 'Test 54');
test(regionsBySlashes(["\ \/","/ \/","\\ /","/\\ "]), 11, 'Test 55');
test(regionsBySlashes(["/ /"," \ ","/ /"," \ "]), 14, 'Test 56');
test(regionsBySlashes(["/\\/\\", "\\/\\/\\", "/\\/\\/", "\\/\\/\\", "/\\/\\"]), 22, 'Test 57');
test(regionsBySlashes(["\\/", "/\\", "\\/"]), 15, 'Test 58');
test(regionsBySlashes(["  /"," //","///","/\\"]), 20, 'Test 59');
test(regionsBySlashes(["\\", "\\", "\\"]), 25, 'Test 60');
test(regionsBySlashes(["/// ","\\\\","\\\\"]), 10, 'Test 61');
test(regionsBySlashes(["\\/\\","\\/\\","\\/\\","\\/\\"]), 19, 'Test 62');
test(regionsBySlashes(["\\/\\", "\\/\\", "\\/\\"]), 6, 'Test 63');
test(regionsBySlashes([" /","\\"," "]), 19, 'Test 64');
test(regionsBySlashes(["\\ ","/ "," \/","/\\"]), 27, 'Test 65');
test(regionsBySlashes(["\\\", "\\ ", " / ", "  "]), Error: Solution.regionsBySlashes[] missing 1 required positional argument: 'grid', 'Test 66');
test(regionsBySlashes(["\\\\", "\\\\", "\\\\", "\\\\"]), 34, 'Test 67');
test(regionsBySlashes(["\\/\\", "/\\/\\", "\\/\\", "/\\/\\"]), 17, 'Test 68');
test(regionsBySlashes(["///", "///", "   "]), 3, 'Test 69');
test(regionsBySlashes(["/\\\\","\\/\\\\","/\\\\","\\/\\\\"]), 16, 'Test 70');
test(regionsBySlashes(["/\\/","\\/\\","/\\/","\\/\\"]), 22, 'Test 71');
test(regionsBySlashes(["/\\ "," /\\ "," \/\\"," \/ "]), 7, 'Test 72');
test(regionsBySlashes(["\\\\ ", "\\\\ ", "\\\\ ", "\\\\ ", "\\\\ "]), 38, 'Test 73');
test(regionsBySlashes(["\\/", "/\\", "\\/", "/\\"]), 35, 'Test 74');
test(regionsBySlashes(["\\\\","////","\\\\","////"]), 22, 'Test 75');
test(regionsBySlashes([" //","\\/","  "]), 8, 'Test 76');
test(regionsBySlashes([" \/ \/ ", "\\/\\/\\", " \/ \/ ", "\\/\\/\\", " \/ \/ "]), Error: list index out of range, 'Test 77');
test(regionsBySlashes(["/\\/","\\///","/\\/","\\///"]), 16, 'Test 78');
test(regionsBySlashes([" /\\", "\\/ ", " /\\", "\\/ "]), 15, 'Test 79');
test(regionsBySlashes(["\\ ","/\\"," / "]), 10, 'Test 80');
test(regionsBySlashes(["\\\\","\\\\","\\\\","\\\\"]), 34, 'Test 81');
test(regionsBySlashes(["/\\/","\\/\\","\\/\\","/\\/"]), 21, 'Test 82');
test(regionsBySlashes(["\\/\\/\\","/\\/\\/\\","\\/\\/\\","/\\/\\/\\"]), Error: list index out of range, 'Test 83');
test(regionsBySlashes(["/\\/","/\\/","/\\/","/\\/"]), 19, 'Test 84');
test(regionsBySlashes(["\\\\","/\\/","\\/\\","/\\/"]), 25, 'Test 85');
test(regionsBySlashes(["\\\\","\\\\","\\\\","    "]), 25, 'Test 86');
test(regionsBySlashes([" \/ ", "/\\/", " \/ ", "\\/ "]), 9, 'Test 87');
test(regionsBySlashes(["\\\\", "\\ ", " / ", "\\\\"]), 27, 'Test 88');
test(regionsBySlashes(["\\\\\\","\\\\\\","\\\\\\","\\\\\\"]), 19, 'Test 89');
test(regionsBySlashes(["///","\\\","///"]), Error: Solution.regionsBySlashes[] missing 1 required positional argument: 'grid', 'Test 90');
test(regionsBySlashes(["/\\/"," / ","\\/\\"]), 5, 'Test 91');
test(regionsBySlashes(["\\/\\", " / ", "\\/\\", " / ", "\\/\\"]), 41, 'Test 92');
test(regionsBySlashes(["\\/\\/", "/\\/\\/", "\\/\\/", "/\\/\\/"]), Error: list index out of range, 'Test 93');
test(regionsBySlashes(["\\/\\/\\/", "/\\/\\/\\", "\\/\\/\\/", "/\\/\\/\\", "\\/\\/\\/"]), Error: list index out of range, 'Test 94');
test(regionsBySlashes(["/\\/\\/","\\/\\/\\","/\\/\\/","\\/\\/\\"]), Error: list index out of range, 'Test 95');
test(regionsBySlashes(["\\\\","///","\\\\","///"]), 27, 'Test 96');
test(regionsBySlashes(["\\/\\/","\\/\\/","\\/\\/","\\/\\/"]), 8, 'Test 97');
test(regionsBySlashes(["/\\", "\\/", "/\\", "\\/"]), 36, 'Test 98');
test(regionsBySlashes(["/\\/","\\/\\","/\\/"]), 8, 'Test 99');
test(regionsBySlashes(["\\\\", "\\\\", "\\\\", "\\\\", "\\\\"]), 62, 'Test 100');
test(regionsBySlashes(["\\\\","    ","    ","\\\\"]), 15, 'Test 101');
test(regionsBySlashes(["/ /"," / "," / ","/ /"]), 15, 'Test 102');
test(regionsBySlashes(["\\/\\", "/\\/", "\\/\\", "/\\/", "\\/\\"]), 47, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

