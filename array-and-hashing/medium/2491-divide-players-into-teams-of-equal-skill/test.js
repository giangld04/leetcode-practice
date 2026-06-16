// Test: 2491. Divide Players Into Teams Of Equal Skill
// 122 test cases from LeetCodeDataset
// Run: node test.js

const { dividePlayers } = require("./solution");

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

console.log("\n2491. Divide Players Into Teams Of Equal Skill\n");

test(dividePlayers([1,1000,1,1000,1,1000,1,1000]), 4000, 'Test 1');
test(dividePlayers([1,1,2,2,3,3,4,4]), 20, 'Test 2');
test(dividePlayers([1,1,2,3]), -1, 'Test 3');
test(dividePlayers([1,2,3,4,5,6,7,8]), 60, 'Test 4');
test(dividePlayers([5,5,5,5,5,5]), 75, 'Test 5');
test(dividePlayers([15,15,15,15,15,15,15,15]), 900, 'Test 6');
test(dividePlayers([3,4]), 12, 'Test 7');
test(dividePlayers([2,3,3,2,2,3]), 18, 'Test 8');
test(dividePlayers([4,4,4,4]), 32, 'Test 9');
test(dividePlayers([3,2,5,1,3,4]), 22, 'Test 10');
test(dividePlayers([10,10,10,10]), 200, 'Test 11');
test(dividePlayers([1000,1000,1,1,2,2]), -1, 'Test 12');
test(dividePlayers([1,2,3,4,5,6]), 28, 'Test 13');
test(dividePlayers([1,2,3,3,2,1]), 10, 'Test 14');
test(dividePlayers([1000,1,1000,1,1000,1,1000,1]), 4000, 'Test 15');
test(dividePlayers([10,20,30,40,50,60]), 2800, 'Test 16');
test(dividePlayers([500,500,500,500,500,500,500,500]), 1000000, 'Test 17');
test(dividePlayers([1,3,5,7,9,11]), 73, 'Test 18');
test(dividePlayers([1000,1,999,2,500,501]), 253498, 'Test 19');
test(dividePlayers([500,500,1,999,2,998,3,997]), 255986, 'Test 20');
test(dividePlayers([1,2,3,6,4,5]), 28, 'Test 21');
test(dividePlayers([250,750,500,500,750,250,500,500]), 875000, 'Test 22');
test(dividePlayers([1,1,1,1,1,1,1,1]), 4, 'Test 23');
test(dividePlayers([1, 1000, 500, 500, 250, 750, 100, 900]), -1, 'Test 24');
test(dividePlayers([100, 100, 200, 200, 300, 300, 400, 400, 500, 500]), 350000, 'Test 25');
test(dividePlayers([1,999,2,998,3,997,4,996,5,995,6,994,7,993,8,992,9,991,10,990]), 54615, 'Test 26');
test(dividePlayers([1,2,3,4,5,6,7,8,9,10,11,12]), 182, 'Test 27');
test(dividePlayers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 18200, 'Test 28');
test(dividePlayers([1,999,3,997,5,995,7,993,9,991,11,989,13,987,15,985]), 63320, 'Test 29');
test(dividePlayers([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), 512, 'Test 30');
test(dividePlayers([200, 300, 200, 300, 200, 300, 200, 300]), 240000, 'Test 31');
test(dividePlayers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), 728, 'Test 32');
test(dividePlayers([333, 667, 333, 667, 333, 667, 333, 667, 333, 667, 333, 667, 333, 667, 333, 667]), 1776888, 'Test 33');
test(dividePlayers([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 34');
test(dividePlayers([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]), 252, 'Test 35');
test(dividePlayers([1, 1000, 2, 999, 3, 998, 4, 997, 5, 996]), 14960, 'Test 36');
test(dividePlayers([999, 1, 998, 2, 997, 3, 996, 4, 995, 5, 994, 6]), 20909, 'Test 37');
test(dividePlayers([10, 1, 5, 15, 7, 3, 9, 11]), -1, 'Test 38');
test(dividePlayers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 11000, 'Test 39');
test(dividePlayers([7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]), 1512, 'Test 40');
test(dividePlayers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]), 40800, 'Test 41');
test(dividePlayers([6,6,6,6,6,6,6,6,6,6,6,6]), 216, 'Test 42');
test(dividePlayers([2,8,3,7,4,6,5,5]), 86, 'Test 43');
test(dividePlayers([333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348]), 927352, 'Test 44');
test(dividePlayers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 182, 'Test 45');
test(dividePlayers([23,42,31,57,5,19,6,49,12,35,29,10,50,40,21,33]), -1, 'Test 46');
test(dividePlayers([10, 20, 30, 40, 50, 60, 70, 80]), 6000, 'Test 47');
test(dividePlayers([10,20,30,40,50,60,10,20,30,40,50,60]), 5600, 'Test 48');
test(dividePlayers([1000,1,1000,1,1000,1,1000,1,1000,1]), 5000, 'Test 49');
test(dividePlayers([8,1,8,1,8,1,8,1]), 32, 'Test 50');
test(dividePlayers([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 200]), -1, 'Test 51');
test(dividePlayers([250, 250, 500, 500, 750, 750, 1000, 1000]), 1250000, 'Test 52');
test(dividePlayers([300,700,200,800,100,900,400,600,500,500]), 950000, 'Test 53');
test(dividePlayers([500,500,500,500,500,500,500,500,500,500]), 1250000, 'Test 54');
test(dividePlayers([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 200, 'Test 55');
test(dividePlayers([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 441, 'Test 56');
test(dividePlayers([50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]), 20000, 'Test 57');
test(dividePlayers([1000,1,1000,1,1000,1,1000,1,1000,1,1000,1]), 6000, 'Test 58');
test(dividePlayers([123, 321, 213, 312, 132, 231, 213, 132]), -1, 'Test 59');
test(dividePlayers([6,3,9,2,8,4,5,7,1,10,11,12,13,14,15,16]), 408, 'Test 60');
test(dividePlayers([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), 3080, 'Test 61');
test(dividePlayers([8, 6, 4, 2, 10, 12, 14, 16, 18, 20]), 440, 'Test 62');
test(dividePlayers([1,1000,2,999,3,998,4,997]), 9980, 'Test 63');
test(dividePlayers([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]), 84, 'Test 64');
test(dividePlayers([10,20,30,40,50,60,70,80,90,100,110,120]), 18200, 'Test 65');
test(dividePlayers([5,6,7,8,9,10,1,2,3,4]), 110, 'Test 66');
test(dividePlayers([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6]), 84, 'Test 67');
test(dividePlayers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 770, 'Test 68');
test(dividePlayers([500,500,500,500,500,500,500,500,500,500,500,500]), 1500000, 'Test 69');
test(dividePlayers([499, 501, 498, 502, 497, 503, 496, 504]), 999970, 'Test 70');
test(dividePlayers([1, 3, 2, 4, 5, 7, 6, 8, 9, 11, 10, 12, 13, 15, 14, 16]), 408, 'Test 71');
test(dividePlayers([999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1]), 5994, 'Test 72');
test(dividePlayers([999,1,999,1,999,1,999,1,999,1,999,1,999,1,999,1]), 7992, 'Test 73');
test(dividePlayers([5,1,4,3,2,6]), 28, 'Test 74');
test(dividePlayers([333,333,333,333,334,334,334,334]), 444888, 'Test 75');
test(dividePlayers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 770, 'Test 76');
test(dividePlayers([250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250]), 500000, 'Test 77');
test(dividePlayers([10,10,10,10,10,10,10,10]), 400, 'Test 78');
test(dividePlayers([6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 510, 'Test 79');
test(dividePlayers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 77000, 'Test 80');
test(dividePlayers([10,20,30,40,50,60,70,80,90,100]), 11000, 'Test 81');
test(dividePlayers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), 408, 'Test 82');
test(dividePlayers([8,8,8,8,8,8,8,8,8,8,8,8]), 384, 'Test 83');
test(dividePlayers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 335, 'Test 84');
test(dividePlayers([999,1,999,1,999,1,999,1,999,1,999,1,999,1,999,1,999,1,999,1,999,1,999,1,999,1,999,1,999,1]), 14985, 'Test 85');
test(dividePlayers([999,1,998,2,997,3,996,4,995,5,994,6,993,7,992,8,991,9,990,10]), 54615, 'Test 86');
test(dividePlayers([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 150, 'Test 87');
test(dividePlayers([250,250,250,250,250,250,250,250,250,250,250,250]), 375000, 'Test 88');
test(dividePlayers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 280, 'Test 89');
test(dividePlayers([1,999,2,998,3,997,4,996,5,995]), 14945, 'Test 90');
test(dividePlayers([100,200,300,400,100,200,300,400,500,600,500,600]), 560000, 'Test 91');
test(dividePlayers([10,9,8,7,6,5,4,3,2,1]), 110, 'Test 92');
test(dividePlayers([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 490, 'Test 93');
test(dividePlayers([500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500]), 2000000, 'Test 94');
test(dividePlayers([15,16,15,16,17,17,18,18,19,19,20,20]), 1820, 'Test 95');
test(dividePlayers([100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 600, 'Test 96');
test(dividePlayers([100, 200, 300, 400, 500, 600, 700, 800]), 600000, 'Test 97');
test(dividePlayers([999, 1, 999, 1, 999, 1, 999, 1]), 3996, 'Test 98');
test(dividePlayers([1,2,3,4,5,6,7,8,9,10]), 110, 'Test 99');
test(dividePlayers([600,400,600,400,600,400,600,400,600,400,600,400]), 1440000, 'Test 100');
test(dividePlayers([1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000]), 5000, 'Test 101');
test(dividePlayers([5,5,5,5,5,5,5,5,5,5,5,5]), 150, 'Test 102');
test(dividePlayers([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 288, 'Test 103');
test(dividePlayers([1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1]), 8000, 'Test 104');
test(dividePlayers([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 220, 'Test 105');
test(dividePlayers([1,1,1,1,1,1,1,1,1,1]), 5, 'Test 106');
test(dividePlayers([1,9,1,9,1,9,1,9]), 36, 'Test 107');
test(dividePlayers([300, 700, 200, 800, 400, 600, 100, 900, 500, 500, 400, 600]), 1190000, 'Test 108');
test(dividePlayers([1,3,5,7,9,11,13,15,17,19]), 335, 'Test 109');
test(dividePlayers([150, 250, 150, 250, 150, 250, 150, 250, 150, 250]), 187500, 'Test 110');
test(dividePlayers([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100]), 22000, 'Test 111');
test(dividePlayers([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 200, 'Test 112');
test(dividePlayers([1000, 1, 999, 2, 998, 3, 997, 4]), 9980, 'Test 113');
test(dividePlayers([8,1,5,3,4,7,2,6,9,10,12,11]), 182, 'Test 114');
test(dividePlayers([10,1,10,1,10,1,10,1]), 40, 'Test 115');
test(dividePlayers([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 125, 'Test 116');
test(dividePlayers([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160]), 40800, 'Test 117');
test(dividePlayers([5,5,5,5,5,5,5,5]), 100, 'Test 118');
test(dividePlayers([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 20000, 'Test 119');
test(dividePlayers([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]), 40, 'Test 120');
test(dividePlayers([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127]), -1, 'Test 121');
test(dividePlayers([250,750,250,750,250,750,250,750,250,750,250,750,250,750,250,750]), 1500000, 'Test 122');

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
