// Test: 365. Water And Jug Problem
// 192 test cases from LeetCodeDataset
// Run: node test.js

const { canMeasureWater } = require("./solution");

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

console.log("\n365. Water And Jug Problem\n");

test(canMeasureWater(3, 7, 1), true, 'Test 1');
test(canMeasureWater(7, 3, 1), true, 'Test 2');
test(canMeasureWater(8, 5, 9), true, 'Test 3');
test(canMeasureWater(2, 6, 5), false, 'Test 4');
test(canMeasureWater(10, 10, 15), false, 'Test 5');
test(canMeasureWater(5, 5, 10), true, 'Test 6');
test(canMeasureWater(5, 3, 8), true, 'Test 7');
test(canMeasureWater(7, 11, 6), true, 'Test 8');
test(canMeasureWater(7, 3, 2), true, 'Test 9');
test(canMeasureWater(4, 9, 6), true, 'Test 10');
test(canMeasureWater(1, 2, 3), true, 'Test 11');
test(canMeasureWater(1, 1, 2), true, 'Test 12');
test(canMeasureWater(10, 10, 20), true, 'Test 13');
test(canMeasureWater(8, 11, 15), true, 'Test 14');
test(canMeasureWater(34, 5, 6), true, 'Test 15');
test(canMeasureWater(100, 333, 500), false, 'Test 16');
test(canMeasureWater(5, 2, 3), true, 'Test 17');
test(canMeasureWater(4, 4, 7), false, 'Test 18');
test(canMeasureWater(3, 5, 4), true, 'Test 19');
test(canMeasureWater(29, 31, 30), true, 'Test 20');
test(canMeasureWater(23, 39, 11), true, 'Test 21');
test(canMeasureWater(67, 79, 178), false, 'Test 22');
test(canMeasureWater(666, 777, 1434), false, 'Test 23');
test(canMeasureWater(23, 54, 77), true, 'Test 24');
test(canMeasureWater(17, 13, 20), true, 'Test 25');
test(canMeasureWater(200, 300, 500), true, 'Test 26');
test(canMeasureWater(311, 271, 582), true, 'Test 27');
test(canMeasureWater(53, 67, 134), false, 'Test 28');
test(canMeasureWater(400, 500, 800), true, 'Test 29');
test(canMeasureWater(31, 47, 78), true, 'Test 30');
test(canMeasureWater(47, 61, 110), false, 'Test 31');
test(canMeasureWater(61, 41, 29), true, 'Test 32');
test(canMeasureWater(23, 29, 42), true, 'Test 33');
test(canMeasureWater(103, 113, 326), false, 'Test 34');
test(canMeasureWater(500, 300, 400), true, 'Test 35');
test(canMeasureWater(73, 21, 50), true, 'Test 36');
test(canMeasureWater(100, 33, 67), true, 'Test 37');
test(canMeasureWater(79, 97, 236), false, 'Test 38');
test(canMeasureWater(97, 107, 294), false, 'Test 39');
test(canMeasureWater(33, 44, 77), true, 'Test 40');
test(canMeasureWater(97, 101, 73), true, 'Test 41');
test(canMeasureWater(31, 47, 20), true, 'Test 42');
test(canMeasureWater(13, 17, 30), true, 'Test 43');
test(canMeasureWater(200, 125, 325), true, 'Test 44');
test(canMeasureWater(123, 456, 579), true, 'Test 45');
test(canMeasureWater(41, 97, 86), true, 'Test 46');
test(canMeasureWater(61, 79, 89), true, 'Test 47');
test(canMeasureWater(23, 37, 60), true, 'Test 48');
test(canMeasureWater(727, 1019, 1746), true, 'Test 49');
test(canMeasureWater(29, 41, 59), true, 'Test 50');
test(canMeasureWater(127, 139, 414), false, 'Test 51');
test(canMeasureWater(101, 109, 310), false, 'Test 52');
test(canMeasureWater(29, 31, 60), true, 'Test 53');
test(canMeasureWater(61, 122, 183), true, 'Test 54');
test(canMeasureWater(97, 54, 43), true, 'Test 55');
test(canMeasureWater(149, 163, 510), false, 'Test 56');
test(canMeasureWater(89, 103, 270), false, 'Test 57');
test(canMeasureWater(97, 61, 73), true, 'Test 58');
test(canMeasureWater(100, 75, 250), false, 'Test 59');
test(canMeasureWater(53, 19, 67), true, 'Test 60');
test(canMeasureWater(113, 137, 390), false, 'Test 61');
test(canMeasureWater(81, 147, 108), true, 'Test 62');
test(canMeasureWater(500, 600, 1000), true, 'Test 63');
test(canMeasureWater(157, 173, 550), false, 'Test 64');
test(canMeasureWater(253, 103, 356), true, 'Test 65');
test(canMeasureWater(500, 750, 1000), true, 'Test 66');
test(canMeasureWater(113, 131, 119), true, 'Test 67');
test(canMeasureWater(250, 350, 600), true, 'Test 68');
test(canMeasureWater(71, 23, 37), true, 'Test 69');
test(canMeasureWater(59, 17, 50), true, 'Test 70');
test(canMeasureWater(23, 37, 29), true, 'Test 71');
test(canMeasureWater(221, 359, 285), true, 'Test 72');
test(canMeasureWater(151, 167, 526), false, 'Test 73');
test(canMeasureWater(41, 37, 78), true, 'Test 74');
test(canMeasureWater(13, 17, 29), true, 'Test 75');
test(canMeasureWater(53, 47, 100), true, 'Test 76');
test(canMeasureWater(61, 73, 164), false, 'Test 77');
test(canMeasureWater(17, 23, 30), true, 'Test 78');
test(canMeasureWater(101, 37, 88), true, 'Test 79');
test(canMeasureWater(400, 1000, 500), false, 'Test 80');
test(canMeasureWater(59, 61, 120), true, 'Test 81');
test(canMeasureWater(333, 444, 777), true, 'Test 82');
test(canMeasureWater(61, 41, 183), false, 'Test 83');
test(canMeasureWater(97, 59, 156), true, 'Test 84');
test(canMeasureWater(83, 53, 109), true, 'Test 85');
test(canMeasureWater(101, 103, 206), false, 'Test 86');
test(canMeasureWater(8, 13, 19), true, 'Test 87');
test(canMeasureWater(73, 89, 210), false, 'Test 88');
test(canMeasureWater(17, 13, 26), true, 'Test 89');
test(canMeasureWater(401, 199, 202), true, 'Test 90');
test(canMeasureWater(139, 157, 482), false, 'Test 91');
test(canMeasureWater(601, 409, 500), true, 'Test 92');
test(canMeasureWater(71, 83, 101), true, 'Test 93');
test(canMeasureWater(101, 139, 240), true, 'Test 94');
test(canMeasureWater(100, 37, 101), true, 'Test 95');
test(canMeasureWater(97, 101, 199), false, 'Test 96');
test(canMeasureWater(41, 43, 84), true, 'Test 97');
test(canMeasureWater(101, 103, 204), true, 'Test 98');
test(canMeasureWater(53, 89, 31), true, 'Test 99');
test(canMeasureWater(109, 131, 366), false, 'Test 100');
test(canMeasureWater(71, 83, 194), false, 'Test 101');
test(canMeasureWater(750, 900, 1500), true, 'Test 102');
test(canMeasureWater(43, 59, 102), true, 'Test 103');
test(canMeasureWater(400, 150, 250), true, 'Test 104');
test(canMeasureWater(19, 23, 42), true, 'Test 105');
test(canMeasureWater(13, 29, 17), true, 'Test 106');
test(canMeasureWater(301, 197, 498), true, 'Test 107');
test(canMeasureWater(111, 333, 444), true, 'Test 108');
test(canMeasureWater(787, 359, 428), true, 'Test 109');
test(canMeasureWater(29, 41, 58), true, 'Test 110');
test(canMeasureWater(137, 151, 458), false, 'Test 111');
test(canMeasureWater(59, 71, 150), false, 'Test 112');
test(canMeasureWater(89, 67, 52), true, 'Test 113');
test(canMeasureWater(333, 222, 111), true, 'Test 114');
test(canMeasureWater(71, 73, 144), true, 'Test 115');
test(canMeasureWater(13, 17, 24), true, 'Test 116');
test(canMeasureWater(45, 10, 75), false, 'Test 117');
test(canMeasureWater(800, 900, 1600), true, 'Test 118');
test(canMeasureWater(13, 17, 20), true, 'Test 119');
test(canMeasureWater(100, 300, 200), true, 'Test 120');
test(canMeasureWater(37, 53, 90), true, 'Test 121');
test(canMeasureWater(1000, 1001, 2001), true, 'Test 122');
test(canMeasureWater(1000, 333, 667), true, 'Test 123');
test(canMeasureWater(13, 17, 39), false, 'Test 124');
test(canMeasureWater(313, 509, 822), true, 'Test 125');
test(canMeasureWater(43, 59, 37), true, 'Test 126');
test(canMeasureWater(131, 149, 442), false, 'Test 127');
test(canMeasureWater(107, 127, 350), false, 'Test 128');
test(canMeasureWater(47, 19, 28), true, 'Test 129');
test(canMeasureWater(97, 101, 198), true, 'Test 130');
test(canMeasureWater(200, 123, 323), true, 'Test 131');
test(canMeasureWater(101, 202, 303), true, 'Test 132');
test(canMeasureWater(55, 77, 110), true, 'Test 133');
test(canMeasureWater(89, 71, 160), true, 'Test 134');
test(canMeasureWater(101, 89, 190), true, 'Test 135');
test(canMeasureWater(53, 109, 162), true, 'Test 136');
test(canMeasureWater(23, 17, 30), true, 'Test 137');
test(canMeasureWater(100, 33, 66), true, 'Test 138');
test(canMeasureWater(23, 31, 54), true, 'Test 139');
test(canMeasureWater(17, 37, 41), true, 'Test 140');
test(canMeasureWater(83, 101, 254), false, 'Test 141');
test(canMeasureWater(5, 7, 11), true, 'Test 142');
test(canMeasureWater(22, 33, 55), true, 'Test 143');
test(canMeasureWater(10, 15, 25), true, 'Test 144');
test(canMeasureWater(5, 2, 7), true, 'Test 145');
test(canMeasureWater(7, 13, 20), true, 'Test 146');
test(canMeasureWater(3, 3, 1), false, 'Test 147');
test(canMeasureWater(7, 13, 1), true, 'Test 148');
test(canMeasureWater(3, 9, 6), true, 'Test 149');
test(canMeasureWater(4, 9, 8), true, 'Test 150');
test(canMeasureWater(10, 15, 7), false, 'Test 151');
test(canMeasureWater(33, 55, 11), true, 'Test 152');
test(canMeasureWater(10, 15, 5), true, 'Test 153');
test(canMeasureWater(333, 444, 111), true, 'Test 154');
test(canMeasureWater(1000, 1000, 1500), false, 'Test 155');
test(canMeasureWater(5, 11, 2), true, 'Test 156');
test(canMeasureWater(8, 12, 16), true, 'Test 157');
test(canMeasureWater(10, 15, 20), true, 'Test 158');
test(canMeasureWater(7, 11, 8), true, 'Test 159');
test(canMeasureWater(1, 1, 0), true, 'Test 160');
test(canMeasureWater(6, 6, 6), true, 'Test 161');
test(canMeasureWater(3, 7, 2), true, 'Test 162');
test(canMeasureWater(8, 17, 15), true, 'Test 163');
test(canMeasureWater(7, 11, 1), true, 'Test 164');
test(canMeasureWater(500, 1000, 750), false, 'Test 165');
test(canMeasureWater(7, 11, 2), true, 'Test 166');
test(canMeasureWater(13, 19, 32), true, 'Test 167');
test(canMeasureWater(4, 9, 7), true, 'Test 168');
test(canMeasureWater(220, 340, 560), true, 'Test 169');
test(canMeasureWater(4, 9, 13), true, 'Test 170');
test(canMeasureWater(3, 1, 2), true, 'Test 171');
test(canMeasureWater(500, 200, 400), true, 'Test 172');
test(canMeasureWater(6, 19, 5), true, 'Test 173');
test(canMeasureWater(500, 500, 1000), true, 'Test 174');
test(canMeasureWater(8, 3, 5), true, 'Test 175');
test(canMeasureWater(8, 11, 13), true, 'Test 176');
test(canMeasureWater(4, 17, 20), true, 'Test 177');
test(canMeasureWater(5, 7, 12), true, 'Test 178');
test(canMeasureWater(2, 3, 1), true, 'Test 179');
test(canMeasureWater(3, 3, 6), true, 'Test 180');
test(canMeasureWater(5, 3, 2), true, 'Test 181');
test(canMeasureWater(333, 666, 999), true, 'Test 182');
test(canMeasureWater(4, 10, 8), true, 'Test 183');
test(canMeasureWater(5, 10, 15), true, 'Test 184');
test(canMeasureWater(8, 3, 11), true, 'Test 185');
test(canMeasureWater(100, 300, 500), false, 'Test 186');
test(canMeasureWater(8, 11, 1), true, 'Test 187');
test(canMeasureWater(7, 13, 10), true, 'Test 188');
test(canMeasureWater(22, 26, 16), true, 'Test 189');
test(canMeasureWater(7, 11, 18), true, 'Test 190');
test(canMeasureWater(34, 51, 68), true, 'Test 191');
test(canMeasureWater(4, 6, 8), true, 'Test 192');

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
