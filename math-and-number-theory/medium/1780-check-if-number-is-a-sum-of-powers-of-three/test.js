// Test: 1780. Check If Number Is A Sum Of Powers Of Three
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { checkPowersOfThree } = require("./solution");

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

console.log("\n1780. Check If Number Is A Sum Of Powers Of Three\n");

test(checkPowersOfThree(59049), true, 'Test 1');
test(checkPowersOfThree(3), true, 'Test 2');
test(checkPowersOfThree(729), true, 'Test 3');
test(checkPowersOfThree(12), true, 'Test 4');
test(checkPowersOfThree(243), true, 'Test 5');
test(checkPowersOfThree(21), false, 'Test 6');
test(checkPowersOfThree(4782969), true, 'Test 7');
test(checkPowersOfThree(19683), true, 'Test 8');
test(checkPowersOfThree(1594323), true, 'Test 9');
test(checkPowersOfThree(40), true, 'Test 10');
test(checkPowersOfThree(59048), false, 'Test 11');
test(checkPowersOfThree(1093), true, 'Test 12');
test(checkPowersOfThree(10000000), false, 'Test 13');
test(checkPowersOfThree(100000), false, 'Test 14');
test(checkPowersOfThree(27), true, 'Test 15');
test(checkPowersOfThree(6561), true, 'Test 16');
test(checkPowersOfThree(3645), false, 'Test 17');
test(checkPowersOfThree(2187), true, 'Test 18');
test(checkPowersOfThree(177147), true, 'Test 19');
test(checkPowersOfThree(91), true, 'Test 20');
test(checkPowersOfThree(81), true, 'Test 21');
test(checkPowersOfThree(531441), true, 'Test 22');
test(checkPowersOfThree(1000000), false, 'Test 23');
test(checkPowersOfThree(1000001), false, 'Test 24');
test(checkPowersOfThree(9), true, 'Test 25');
test(checkPowersOfThree(98415), false, 'Test 26');
test(checkPowersOfThree(1), true, 'Test 27');
test(checkPowersOfThree(10), true, 'Test 28');
test(checkPowersOfThree(89076), false, 'Test 29');
test(checkPowersOfThree(9999999), false, 'Test 30');
test(checkPowersOfThree(98416), false, 'Test 31');
test(checkPowersOfThree(39856), false, 'Test 32');
test(checkPowersOfThree(1640261), false, 'Test 33');
test(checkPowersOfThree(59050), true, 'Test 34');
test(checkPowersOfThree(9876543), false, 'Test 35');
test(checkPowersOfThree(32804), false, 'Test 36');
test(checkPowersOfThree(819), true, 'Test 37');
test(checkPowersOfThree(14348907), true, 'Test 38');
test(checkPowersOfThree(9841), true, 'Test 39');
test(checkPowersOfThree(8), false, 'Test 40');
test(checkPowersOfThree(810000), false, 'Test 41');
test(checkPowersOfThree(8191), false, 'Test 42');
test(checkPowersOfThree(72900), false, 'Test 43');
test(checkPowersOfThree(524880), false, 'Test 44');
test(checkPowersOfThree(7290), true, 'Test 45');
test(checkPowersOfThree(11), false, 'Test 46');
test(checkPowersOfThree(1048575), false, 'Test 47');
test(checkPowersOfThree(59250), false, 'Test 48');
test(checkPowersOfThree(109355), false, 'Test 49');
test(checkPowersOfThree(10935), false, 'Test 50');
test(checkPowersOfThree(98414), false, 'Test 51');
test(checkPowersOfThree(2391484), true, 'Test 52');
test(checkPowersOfThree(88572), true, 'Test 53');
test(checkPowersOfThree(32805), false, 'Test 54');
test(checkPowersOfThree(88573), true, 'Test 55');
test(checkPowersOfThree(50000), false, 'Test 56');
test(checkPowersOfThree(1049755), false, 'Test 57');
test(checkPowersOfThree(590490), true, 'Test 58');
test(checkPowersOfThree(4), true, 'Test 59');
test(checkPowersOfThree(98411), false, 'Test 60');
test(checkPowersOfThree(6560), false, 'Test 61');
test(checkPowersOfThree(4100), false, 'Test 62');
test(checkPowersOfThree(19684), true, 'Test 63');
test(checkPowersOfThree(531442), true, 'Test 64');
test(checkPowersOfThree(49308), false, 'Test 65');
test(checkPowersOfThree(39858), false, 'Test 66');
test(checkPowersOfThree(59047), false, 'Test 67');
test(checkPowersOfThree(99018), false, 'Test 68');
test(checkPowersOfThree(98409), false, 'Test 69');
test(checkPowersOfThree(58324), false, 'Test 70');
test(checkPowersOfThree(48619), false, 'Test 71');
test(checkPowersOfThree(69192), false, 'Test 72');
test(checkPowersOfThree(369059), false, 'Test 73');
test(checkPowersOfThree(4052555), false, 'Test 74');
test(checkPowersOfThree(1291401), false, 'Test 75');
test(checkPowersOfThree(98413), false, 'Test 76');
test(checkPowersOfThree(3486784400), false, 'Test 77');
test(checkPowersOfThree(14348908), true, 'Test 78');
test(checkPowersOfThree(131220), false, 'Test 79');
test(checkPowersOfThree(437400), false, 'Test 80');
test(checkPowersOfThree(2), false, 'Test 81');
test(checkPowersOfThree(4000000), false, 'Test 82');
test(checkPowersOfThree(981), true, 'Test 83');
test(checkPowersOfThree(97656), false, 'Test 84');
test(checkPowersOfThree(3986), false, 'Test 85');
test(checkPowersOfThree(19682), false, 'Test 86');
test(checkPowersOfThree(797162), false, 'Test 87');
test(checkPowersOfThree(656100), false, 'Test 88');
test(checkPowersOfThree(3486784401), true, 'Test 89');
test(checkPowersOfThree(45927), false, 'Test 90');
test(checkPowersOfThree(79134), false, 'Test 91');
test(checkPowersOfThree(1234567), false, 'Test 92');
test(checkPowersOfThree(3125), false, 'Test 93');
test(checkPowersOfThree(2097152), false, 'Test 94');
test(checkPowersOfThree(98410), false, 'Test 95');
test(checkPowersOfThree(99999), false, 'Test 96');
test(checkPowersOfThree(728997), false, 'Test 97');
test(checkPowersOfThree(405224), false, 'Test 98');
test(checkPowersOfThree(31259), false, 'Test 99');
test(checkPowersOfThree(119050), false, 'Test 100');
test(checkPowersOfThree(104976), false, 'Test 101');
test(checkPowersOfThree(546789), false, 'Test 102');
test(checkPowersOfThree(39366), false, 'Test 103');
test(checkPowersOfThree(40000), false, 'Test 104');
test(checkPowersOfThree(29524), true, 'Test 105');
test(checkPowersOfThree(98412), false, 'Test 106');
test(checkPowersOfThree(400), false, 'Test 107');
test(checkPowersOfThree(32806), false, 'Test 108');
test(checkPowersOfThree(3188646), false, 'Test 109');
test(checkPowersOfThree(123456), false, 'Test 110');

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
