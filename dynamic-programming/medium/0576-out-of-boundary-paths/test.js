// Test: 576. Out Of Boundary Paths
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { findPaths } = require("./solution");

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

console.log("\n576. Out Of Boundary Paths\n");

test(findPaths(3, 3, 1, 1, 1), 0, 'Test 1');
test(findPaths(5, 5, 50, 0, 0), 101070018, 'Test 2');
test(findPaths(2, 2, 2, 0, 0), 6, 'Test 3');
test(findPaths(3, 3, 0, 1, 1), 0, 'Test 4');
test(findPaths(4, 4, 0, 2, 2), 0, 'Test 5');
test(findPaths(50, 50, 0, 25, 25), 0, 'Test 6');
test(findPaths(5, 5, 0, 2, 2), 0, 'Test 7');
test(findPaths(5, 5, 10, 3, 3), 60322, 'Test 8');
test(findPaths(50, 50, 50, 25, 25), 276775132, 'Test 9');
test(findPaths(5, 5, 10, 2, 2), 79840, 'Test 10');
test(findPaths(4, 4, 1, 3, 3), 2, 'Test 11');
test(findPaths(50, 50, 50, 0, 0), 678188903, 'Test 12');
test(findPaths(1, 3, 3, 0, 1), 12, 'Test 13');
test(findPaths(35, 35, 35, 0, 0), 358207093, 'Test 14');
test(findPaths(1, 1, 50, 0, 0), 4, 'Test 15');
test(findPaths(50, 50, 20, 49, 49), 333389522, 'Test 16');
test(findPaths(50, 50, 1, 0, 49), 2, 'Test 17');
test(findPaths(20, 20, 10, 19, 19), 15604, 'Test 18');
test(findPaths(25, 15, 20, 12, 7), 799973369, 'Test 19');
test(findPaths(25, 25, 0, 12, 12), 0, 'Test 20');
test(findPaths(30, 25, 40, 5, 10), 292121032, 'Test 21');
test(findPaths(10, 10, 50, 9, 9), 788744843, 'Test 22');
test(findPaths(50, 50, 1, 49, 0), 2, 'Test 23');
test(findPaths(40, 35, 40, 20, 17), 678045061, 'Test 24');
test(findPaths(30, 30, 30, 15, 15), 358636530, 'Test 25');
test(findPaths(35, 40, 35, 17, 20), 82874982, 'Test 26');
test(findPaths(40, 40, 40, 35, 35), 925966983, 'Test 27');
test(findPaths(50, 50, 50, 48, 48), 33289482, 'Test 28');
test(findPaths(30, 30, 25, 15, 15), 620611776, 'Test 29');
test(findPaths(20, 20, 30, 0, 0), 698347833, 'Test 30');
test(findPaths(25, 15, 35, 12, 7), 700136042, 'Test 31');
test(findPaths(45, 50, 35, 20, 25), 165784279, 'Test 32');
test(findPaths(30, 30, 40, 10, 10), 10338089, 'Test 33');
test(findPaths(25, 25, 50, 10, 10), 763033703, 'Test 34');
test(findPaths(1, 10, 20, 0, 5), 1298133, 'Test 35');
test(findPaths(10, 10, 30, 9, 0), 362344847, 'Test 36');
test(findPaths(35, 25, 50, 17, 12), 801609655, 'Test 37');
test(findPaths(10, 10, 1, 9, 0), 2, 'Test 38');
test(findPaths(49, 49, 49, 24, 24), 205299836, 'Test 39');
test(findPaths(40, 40, 15, 39, 39), 7622962, 'Test 40');
test(findPaths(30, 30, 25, 10, 15), 789398028, 'Test 41');
test(findPaths(10, 10, 50, 0, 0), 788744843, 'Test 42');
test(findPaths(40, 30, 45, 15, 10), 919089617, 'Test 43');
test(findPaths(45, 45, 45, 22, 22), 988297120, 'Test 44');
test(findPaths(30, 30, 30, 0, 29), 30862686, 'Test 45');
test(findPaths(40, 40, 30, 0, 0), 30862684, 'Test 46');
test(findPaths(20, 20, 49, 19, 19), 935890565, 'Test 47');
test(findPaths(20, 20, 30, 5, 10), 952018589, 'Test 48');
test(findPaths(25, 25, 25, 0, 12), 973636948, 'Test 49');
test(findPaths(45, 45, 20, 0, 0), 333389522, 'Test 50');
test(findPaths(10, 10, 50, 5, 5), 910802827, 'Test 51');
test(findPaths(35, 45, 20, 15, 20), 80810, 'Test 52');
test(findPaths(50, 50, 2, 48, 48), 2, 'Test 53');
test(findPaths(50, 1, 25, 25, 0), 67108863, 'Test 54');
test(findPaths(45, 45, 20, 35, 35), 60375025, 'Test 55');
test(findPaths(30, 30, 30, 5, 5), 571485704, 'Test 56');
test(findPaths(20, 40, 40, 5, 20), 992621451, 'Test 57');
test(findPaths(50, 50, 50, 1, 1), 33289482, 'Test 58');
test(findPaths(50, 45, 40, 25, 20), 461095502, 'Test 59');
test(findPaths(40, 40, 40, 10, 10), 119337015, 'Test 60');
test(findPaths(20, 20, 10, 0, 0), 15604, 'Test 61');
test(findPaths(10, 10, 45, 0, 5), 633319298, 'Test 62');
test(findPaths(35, 35, 20, 17, 17), 2956, 'Test 63');
test(findPaths(20, 10, 30, 10, 5), 233153742, 'Test 64');
test(findPaths(15, 15, 20, 0, 14), 333735544, 'Test 65');
test(findPaths(20, 20, 1, 10, 10), 0, 'Test 66');
test(findPaths(30, 30, 40, 5, 5), 232430931, 'Test 67');
test(findPaths(20, 20, 15, 10, 10), 269698, 'Test 68');
test(findPaths(50, 50, 0, 0, 0), 0, 'Test 69');
test(findPaths(25, 20, 40, 12, 8), 753298275, 'Test 70');
test(findPaths(10, 10, 0, 5, 5), 0, 'Test 71');
test(findPaths(25, 25, 50, 24, 24), 310332047, 'Test 72');
test(findPaths(25, 25, 25, 12, 12), 708832804, 'Test 73');
test(findPaths(40, 40, 30, 20, 20), 405303029, 'Test 74');
test(findPaths(40, 50, 20, 20, 30), 2, 'Test 75');
test(findPaths(10, 10, 1, 0, 0), 2, 'Test 76');
test(findPaths(15, 25, 20, 7, 12), 799973369, 'Test 77');
test(findPaths(50, 50, 1, 0, 0), 2, 'Test 78');
test(findPaths(50, 50, 1, 25, 25), 0, 'Test 79');
test(findPaths(30, 30, 15, 15, 15), 2, 'Test 80');
test(findPaths(10, 10, 45, 0, 0), 200206745, 'Test 81');
test(findPaths(20, 20, 10, 0, 19), 15604, 'Test 82');
test(findPaths(15, 20, 25, 7, 10), 525013044, 'Test 83');
test(findPaths(50, 1, 50, 25, 0), 163591967, 'Test 84');
test(findPaths(25, 25, 50, 12, 12), 15238035, 'Test 85');
test(findPaths(35, 40, 30, 0, 0), 30862684, 'Test 86');
test(findPaths(10, 1, 20, 5, 0), 1298133, 'Test 87');
test(findPaths(10, 20, 25, 5, 10), 642758144, 'Test 88');
test(findPaths(20, 20, 50, 10, 10), 46531996, 'Test 89');
test(findPaths(50, 50, 50, 49, 49), 678188903, 'Test 90');
test(findPaths(40, 40, 40, 15, 15), 199335553, 'Test 91');
test(findPaths(40, 40, 50, 0, 0), 945208311, 'Test 92');
test(findPaths(45, 45, 30, 20, 20), 875006271, 'Test 93');
test(findPaths(40, 15, 40, 39, 7), 407032675, 'Test 94');
test(findPaths(15, 25, 35, 7, 17), 582434371, 'Test 95');
test(findPaths(20, 20, 10, 19, 0), 15604, 'Test 96');
test(findPaths(10, 10, 1, 0, 9), 2, 'Test 97');
test(findPaths(1, 50, 50, 0, 25), 163591967, 'Test 98');
test(findPaths(2, 2, 5, 1, 1), 62, 'Test 99');
test(findPaths(45, 45, 45, 0, 0), 731907496, 'Test 100');
test(findPaths(30, 30, 30, 10, 10), 131872750, 'Test 101');
test(findPaths(25, 30, 35, 12, 15), 262708332, 'Test 102');
test(findPaths(30, 30, 1, 15, 15), 0, 'Test 103');
test(findPaths(40, 40, 40, 19, 19), 751858492, 'Test 104');
test(findPaths(45, 45, 25, 22, 22), 4696, 'Test 105');
test(findPaths(45, 35, 20, 20, 15), 80810, 'Test 106');
test(findPaths(40, 20, 45, 10, 10), 157535529, 'Test 107');
test(findPaths(50, 50, 40, 25, 25), 783748412, 'Test 108');
test(findPaths(50, 50, 20, 45, 45), 888027161, 'Test 109');
test(findPaths(40, 40, 50, 39, 39), 945208311, 'Test 110');
test(findPaths(1, 50, 25, 0, 25), 67108863, 'Test 111');
test(findPaths(10, 10, 1, 9, 9), 2, 'Test 112');
test(findPaths(10, 10, 20, 5, 5), 277211170, 'Test 113');
test(findPaths(50, 50, 1, 49, 49), 2, 'Test 114');
test(findPaths(45, 45, 10, 22, 22), 0, 'Test 115');
test(findPaths(45, 45, 45, 44, 44), 731907496, 'Test 116');
test(findPaths(35, 35, 50, 17, 17), 350241059, 'Test 117');

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
