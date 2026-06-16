// Test: 3405. Count The Number Of Arrays With K Matching Adjacent Elements
// 158 test cases from LeetCodeDataset
// Run: node test.js

const { countGoodArrays } = require("./solution");

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

console.log("\n3405. Count The Number Of Arrays With K Matching Adjacent Elements\n");

test(countGoodArrays(100000, 100000, 50000), Error: pow expected 2 arguments, got 3, 'Test 1');
test(countGoodArrays(100, 10, 50), Error: pow expected 2 arguments, got 3, 'Test 2');
test(countGoodArrays(3, 2, 1), Error: pow expected 2 arguments, got 3, 'Test 3');
test(countGoodArrays(5, 5, 3), Error: pow expected 2 arguments, got 3, 'Test 4');
test(countGoodArrays(10, 5, 3), Error: pow expected 2 arguments, got 3, 'Test 5');
test(countGoodArrays(4, 2, 2), Error: pow expected 2 arguments, got 3, 'Test 6');
test(countGoodArrays(5, 2, 0), Error: pow expected 2 arguments, got 3, 'Test 7');
test(countGoodArrays(1, 1, 0), Error: pow expected 2 arguments, got 3, 'Test 8');
test(countGoodArrays(1000, 100, 200), Error: pow expected 2 arguments, got 3, 'Test 9');
test(countGoodArrays(2, 3, 0), Error: pow expected 2 arguments, got 3, 'Test 10');
test(countGoodArrays(100, 100, 50), Error: pow expected 2 arguments, got 3, 'Test 11');
test(countGoodArrays(10, 4, 4), Error: pow expected 2 arguments, got 3, 'Test 12');
test(countGoodArrays(3, 1, 0), Error: pow expected 2 arguments, got 3, 'Test 13');
test(countGoodArrays(2, 3, 1), Error: pow expected 2 arguments, got 3, 'Test 14');
test(countGoodArrays(6, 3, 2), Error: pow expected 2 arguments, got 3, 'Test 15');
test(countGoodArrays(10, 100, 5), Error: pow expected 2 arguments, got 3, 'Test 16');
test(countGoodArrays(1000, 50, 500), Error: pow expected 2 arguments, got 3, 'Test 17');
test(countGoodArrays(50000, 50000, 25000), Error: pow expected 2 arguments, got 3, 'Test 18');
test(countGoodArrays(15, 6, 5), Error: pow expected 2 arguments, got 3, 'Test 19');
test(countGoodArrays(50, 3, 0), Error: pow expected 2 arguments, got 3, 'Test 20');
test(countGoodArrays(100, 20, 15), Error: pow expected 2 arguments, got 3, 'Test 21');
test(countGoodArrays(10, 1, 0), Error: pow expected 2 arguments, got 3, 'Test 22');
test(countGoodArrays(6, 3, 3), Error: pow expected 2 arguments, got 3, 'Test 23');
test(countGoodArrays(100000, 1, 0), Error: pow expected 2 arguments, got 3, 'Test 24');
test(countGoodArrays(50000, 100, 25000), Error: pow expected 2 arguments, got 3, 'Test 25');
test(countGoodArrays(25, 20, 15), Error: pow expected 2 arguments, got 3, 'Test 26');
test(countGoodArrays(10, 5, 2), Error: pow expected 2 arguments, got 3, 'Test 27');
test(countGoodArrays(10000, 100, 5000), Error: pow expected 2 arguments, got 3, 'Test 28');
test(countGoodArrays(9, 3, 1), Error: pow expected 2 arguments, got 3, 'Test 29');
test(countGoodArrays(15, 10, 7), Error: pow expected 2 arguments, got 3, 'Test 30');
test(countGoodArrays(7, 5, 4), Error: pow expected 2 arguments, got 3, 'Test 31');
test(countGoodArrays(6, 2, 1), Error: pow expected 2 arguments, got 3, 'Test 32');
test(countGoodArrays(5, 10, 0), Error: pow expected 2 arguments, got 3, 'Test 33');
test(countGoodArrays(100000, 100, 50000), Error: pow expected 2 arguments, got 3, 'Test 34');
test(countGoodArrays(50000, 1000, 25000), Error: pow expected 2 arguments, got 3, 'Test 35');
test(countGoodArrays(1000, 5, 0), Error: pow expected 2 arguments, got 3, 'Test 36');
test(countGoodArrays(6, 2, 5), Error: pow expected 2 arguments, got 3, 'Test 37');
test(countGoodArrays(20, 3, 10), Error: pow expected 2 arguments, got 3, 'Test 38');
test(countGoodArrays(9, 7, 0), Error: pow expected 2 arguments, got 3, 'Test 39');
test(countGoodArrays(50, 10, 20), Error: pow expected 2 arguments, got 3, 'Test 40');
test(countGoodArrays(50000, 100000, 25000), Error: pow expected 2 arguments, got 3, 'Test 41');
test(countGoodArrays(8, 3, 0), Error: pow expected 2 arguments, got 3, 'Test 42');
test(countGoodArrays(5, 2, 4), Error: pow expected 2 arguments, got 3, 'Test 43');
test(countGoodArrays(6, 2, 3), Error: pow expected 2 arguments, got 3, 'Test 44');
test(countGoodArrays(20, 3, 5), Error: pow expected 2 arguments, got 3, 'Test 45');
test(countGoodArrays(15, 15, 7), Error: pow expected 2 arguments, got 3, 'Test 46');
test(countGoodArrays(7, 5, 3), Error: pow expected 2 arguments, got 3, 'Test 47');
test(countGoodArrays(10, 100000, 9), Error: pow expected 2 arguments, got 3, 'Test 48');
test(countGoodArrays(100, 50, 30), Error: pow expected 2 arguments, got 3, 'Test 49');
test(countGoodArrays(8, 4, 3), Error: pow expected 2 arguments, got 3, 'Test 50');
test(countGoodArrays(8, 2, 0), Error: pow expected 2 arguments, got 3, 'Test 51');
test(countGoodArrays(1, 2, 0), Error: pow expected 2 arguments, got 3, 'Test 52');
test(countGoodArrays(20, 15, 10), Error: pow expected 2 arguments, got 3, 'Test 53');
test(countGoodArrays(10000, 1000, 5000), Error: pow expected 2 arguments, got 3, 'Test 54');
test(countGoodArrays(100, 10, 20), Error: pow expected 2 arguments, got 3, 'Test 55');
test(countGoodArrays(9, 3, 3), Error: pow expected 2 arguments, got 3, 'Test 56');
test(countGoodArrays(10, 10, 5), Error: pow expected 2 arguments, got 3, 'Test 57');
test(countGoodArrays(8, 5, 4), Error: pow expected 2 arguments, got 3, 'Test 58');
test(countGoodArrays(20, 7, 15), Error: pow expected 2 arguments, got 3, 'Test 59');
test(countGoodArrays(8, 4, 4), Error: pow expected 2 arguments, got 3, 'Test 60');
test(countGoodArrays(100000, 10, 5), Error: pow expected 2 arguments, got 3, 'Test 61');
test(countGoodArrays(1000, 50, 200), Error: pow expected 2 arguments, got 3, 'Test 62');
test(countGoodArrays(50000, 5000, 25000), Error: pow expected 2 arguments, got 3, 'Test 63');
test(countGoodArrays(50, 5, 20), Error: pow expected 2 arguments, got 3, 'Test 64');
test(countGoodArrays(50, 25, 20), Error: pow expected 2 arguments, got 3, 'Test 65');
test(countGoodArrays(200, 15, 75), Error: pow expected 2 arguments, got 3, 'Test 66');
test(countGoodArrays(9, 5, 4), Error: pow expected 2 arguments, got 3, 'Test 67');
test(countGoodArrays(100, 20, 40), Error: pow expected 2 arguments, got 3, 'Test 68');
test(countGoodArrays(10, 5, 5), Error: pow expected 2 arguments, got 3, 'Test 69');
test(countGoodArrays(500, 50, 200), Error: pow expected 2 arguments, got 3, 'Test 70');
test(countGoodArrays(25, 5, 24), Error: pow expected 2 arguments, got 3, 'Test 71');
test(countGoodArrays(100000, 100000, 99999), Error: pow expected 2 arguments, got 3, 'Test 72');
test(countGoodArrays(100, 10, 10), Error: pow expected 2 arguments, got 3, 'Test 73');
test(countGoodArrays(1000, 50, 300), Error: pow expected 2 arguments, got 3, 'Test 74');
test(countGoodArrays(8, 2, 7), Error: pow expected 2 arguments, got 3, 'Test 75');
test(countGoodArrays(50000, 2, 49999), Error: pow expected 2 arguments, got 3, 'Test 76');
test(countGoodArrays(9, 5, 0), Error: pow expected 2 arguments, got 3, 'Test 77');
test(countGoodArrays(20, 20, 10), Error: pow expected 2 arguments, got 3, 'Test 78');
test(countGoodArrays(5, 3, 2), Error: pow expected 2 arguments, got 3, 'Test 79');
test(countGoodArrays(15, 4, 7), Error: pow expected 2 arguments, got 3, 'Test 80');
test(countGoodArrays(7, 3, 3), Error: pow expected 2 arguments, got 3, 'Test 81');
test(countGoodArrays(25, 8, 10), Error: pow expected 2 arguments, got 3, 'Test 82');
test(countGoodArrays(9, 6, 5), Error: pow expected 2 arguments, got 3, 'Test 83');
test(countGoodArrays(15, 3, 6), Error: pow expected 2 arguments, got 3, 'Test 84');
test(countGoodArrays(9, 7, 8), Error: pow expected 2 arguments, got 3, 'Test 85');
test(countGoodArrays(8, 6, 5), Error: pow expected 2 arguments, got 3, 'Test 86');
test(countGoodArrays(8, 4, 0), Error: pow expected 2 arguments, got 3, 'Test 87');
test(countGoodArrays(50, 10, 10), Error: pow expected 2 arguments, got 3, 'Test 88');
test(countGoodArrays(100000, 100000, 5), Error: pow expected 2 arguments, got 3, 'Test 89');
test(countGoodArrays(7, 5, 0), Error: pow expected 2 arguments, got 3, 'Test 90');
test(countGoodArrays(100000, 10000, 50000), Error: pow expected 2 arguments, got 3, 'Test 91');
test(countGoodArrays(6, 3, 1), Error: pow expected 2 arguments, got 3, 'Test 92');
test(countGoodArrays(1000, 100, 500), Error: pow expected 2 arguments, got 3, 'Test 93');
test(countGoodArrays(500, 20, 250), Error: pow expected 2 arguments, got 3, 'Test 94');
test(countGoodArrays(20, 7, 7), Error: pow expected 2 arguments, got 3, 'Test 95');
test(countGoodArrays(6, 4, 3), Error: pow expected 2 arguments, got 3, 'Test 96');
test(countGoodArrays(1000, 50, 150), Error: pow expected 2 arguments, got 3, 'Test 97');
test(countGoodArrays(100000, 10, 99999), Error: pow expected 2 arguments, got 3, 'Test 98');
test(countGoodArrays(3, 3, 2), Error: pow expected 2 arguments, got 3, 'Test 99');
test(countGoodArrays(5000, 20, 500), Error: pow expected 2 arguments, got 3, 'Test 100');
test(countGoodArrays(100000, 1000, 10000), Error: pow expected 2 arguments, got 3, 'Test 101');
test(countGoodArrays(1000, 100, 10), Error: pow expected 2 arguments, got 3, 'Test 102');
test(countGoodArrays(10, 4, 3), Error: pow expected 2 arguments, got 3, 'Test 103');
test(countGoodArrays(100, 50, 25), Error: pow expected 2 arguments, got 3, 'Test 104');
test(countGoodArrays(100000, 100000, 0), Error: pow expected 2 arguments, got 3, 'Test 105');
test(countGoodArrays(5, 3, 1), Error: pow expected 2 arguments, got 3, 'Test 106');
test(countGoodArrays(9, 5, 5), Error: pow expected 2 arguments, got 3, 'Test 107');
test(countGoodArrays(10, 3, 3), Error: pow expected 2 arguments, got 3, 'Test 108');
test(countGoodArrays(100000, 1000, 500), Error: pow expected 2 arguments, got 3, 'Test 109');
test(countGoodArrays(7, 2, 1), Error: pow expected 2 arguments, got 3, 'Test 110');
test(countGoodArrays(100000, 10000, 5000), Error: pow expected 2 arguments, got 3, 'Test 111');
test(countGoodArrays(1000, 10, 100), Error: pow expected 2 arguments, got 3, 'Test 112');
test(countGoodArrays(100, 10, 5), Error: pow expected 2 arguments, got 3, 'Test 113');
test(countGoodArrays(7, 4, 1), Error: pow expected 2 arguments, got 3, 'Test 114');
test(countGoodArrays(50000, 100, 5000), Error: pow expected 2 arguments, got 3, 'Test 115');
test(countGoodArrays(5, 1, 0), Error: pow expected 2 arguments, got 3, 'Test 116');
test(countGoodArrays(1000, 100, 100), Error: pow expected 2 arguments, got 3, 'Test 117');
test(countGoodArrays(10, 6, 6), Error: pow expected 2 arguments, got 3, 'Test 118');
test(countGoodArrays(100, 50, 50), Error: pow expected 2 arguments, got 3, 'Test 119');
test(countGoodArrays(10000, 1000, 9999), Error: pow expected 2 arguments, got 3, 'Test 120');
test(countGoodArrays(10000, 50, 1000), Error: pow expected 2 arguments, got 3, 'Test 121');
test(countGoodArrays(100000, 10000, 1000), Error: pow expected 2 arguments, got 3, 'Test 122');
test(countGoodArrays(50, 3, 25), Error: pow expected 2 arguments, got 3, 'Test 123');
test(countGoodArrays(50, 50, 0), Error: pow expected 2 arguments, got 3, 'Test 124');
test(countGoodArrays(20, 10, 5), Error: pow expected 2 arguments, got 3, 'Test 125');
test(countGoodArrays(2, 2, 1), Error: pow expected 2 arguments, got 3, 'Test 126');
test(countGoodArrays(1000, 50, 10), Error: pow expected 2 arguments, got 3, 'Test 127');
test(countGoodArrays(10000, 1000, 500), Error: pow expected 2 arguments, got 3, 'Test 128');
test(countGoodArrays(100, 50, 20), Error: pow expected 2 arguments, got 3, 'Test 129');
test(countGoodArrays(30, 30, 15), Error: pow expected 2 arguments, got 3, 'Test 130');
test(countGoodArrays(10, 3, 4), Error: pow expected 2 arguments, got 3, 'Test 131');
test(countGoodArrays(10000, 100, 50), Error: pow expected 2 arguments, got 3, 'Test 132');
test(countGoodArrays(10, 5, 4), Error: pow expected 2 arguments, got 3, 'Test 133');
test(countGoodArrays(1000, 100, 50), Error: pow expected 2 arguments, got 3, 'Test 134');
test(countGoodArrays(5, 5, 0), Error: pow expected 2 arguments, got 3, 'Test 135');
test(countGoodArrays(1000, 10, 0), Error: pow expected 2 arguments, got 3, 'Test 136');
test(countGoodArrays(8, 4, 2), Error: pow expected 2 arguments, got 3, 'Test 137');
test(countGoodArrays(10000, 1000, 100), Error: pow expected 2 arguments, got 3, 'Test 138');
test(countGoodArrays(1000, 500, 300), Error: pow expected 2 arguments, got 3, 'Test 139');
test(countGoodArrays(1000, 1000, 500), Error: pow expected 2 arguments, got 3, 'Test 140');
test(countGoodArrays(1000, 5, 100), Error: pow expected 2 arguments, got 3, 'Test 141');
test(countGoodArrays(50, 20, 10), Error: pow expected 2 arguments, got 3, 'Test 142');
test(countGoodArrays(10000, 1000, 1000), Error: pow expected 2 arguments, got 3, 'Test 143');
test(countGoodArrays(3, 3, 0), Error: pow expected 2 arguments, got 3, 'Test 144');
test(countGoodArrays(7, 4, 2), Error: pow expected 2 arguments, got 3, 'Test 145');
test(countGoodArrays(6, 6, 4), Error: pow expected 2 arguments, got 3, 'Test 146');
test(countGoodArrays(50000, 10000, 25000), Error: pow expected 2 arguments, got 3, 'Test 147');
test(countGoodArrays(9, 3, 2), Error: pow expected 2 arguments, got 3, 'Test 148');
test(countGoodArrays(100, 5, 10), Error: pow expected 2 arguments, got 3, 'Test 149');
test(countGoodArrays(6, 4, 2), Error: pow expected 2 arguments, got 3, 'Test 150');
test(countGoodArrays(50000, 5000, 2500), Error: pow expected 2 arguments, got 3, 'Test 151');
test(countGoodArrays(5000, 10, 2500), Error: pow expected 2 arguments, got 3, 'Test 152');
test(countGoodArrays(10000, 10, 5000), Error: pow expected 2 arguments, got 3, 'Test 153');
test(countGoodArrays(8, 5, 0), Error: pow expected 2 arguments, got 3, 'Test 154');
test(countGoodArrays(5, 5, 5), 0, 'Test 155');
test(countGoodArrays(10000, 5, 4999), Error: pow expected 2 arguments, got 3, 'Test 156');
test(countGoodArrays(7, 4, 3), Error: pow expected 2 arguments, got 3, 'Test 157');
test(countGoodArrays(15, 10, 5), Error: pow expected 2 arguments, got 3, 'Test 158');

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
