// Test: 592. Fraction Addition And Subtraction
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { fractionAddition } = require("./solution");

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

console.log("\n592. Fraction Addition And Subtraction\n");

test(fractionAddition("9/10-1/5"), 7/10, 'Test 1');
test(fractionAddition("5/6-1/3"), 1/2, 'Test 2');
test(fractionAddition("-1/10-2/10-3/10-4/10"), -1/1, 'Test 3');
test(fractionAddition("3/4+1/4-1/2"), 1/2, 'Test 4');
test(fractionAddition("1/5+2/5+3/5"), 6/5, 'Test 5');
test(fractionAddition("7/10-3/5+1/2"), 3/5, 'Test 6');
test(fractionAddition("1/1-1/1+1/1"), 1/1, 'Test 7');
test(fractionAddition("1/10+1/10+1/10+1/10+1/10+1/10+1/10+1/10+1/10+1/10"), 1/1, 'Test 8');
test(fractionAddition("1/3-1/2"), -1/6, 'Test 9');
test(fractionAddition("7/10+1/5"), 9/10, 'Test 10');
test(fractionAddition("1/2-1/3+1/4-1/5+1/6"), 23/60, 'Test 11');
test(fractionAddition("7/8-3/4+1/2"), 5/8, 'Test 12');
test(fractionAddition("9/10-1/10-3/10"), 1/2, 'Test 13');
test(fractionAddition("1/5-1/5-1/5+1/5"), 0/1, 'Test 14');
test(fractionAddition("1/9+2/9+3/9+4/9+5/9+6/9+7/9+8/9+1/9"), 37/9, 'Test 15');
test(fractionAddition("5/6-1/3+1/2"), 1/1, 'Test 16');
test(fractionAddition("1/10+2/10+3/10+4/10"), 1/1, 'Test 17');
test(fractionAddition("7/8+1/8"), 1/1, 'Test 18');
test(fractionAddition("1/4-1/4+1/4"), 1/4, 'Test 19');
test(fractionAddition("1/1-1/1"), 0/1, 'Test 20');
test(fractionAddition("2/5+3/10"), 7/10, 'Test 21');
test(fractionAddition("1/9+1/9+1/9+1/9+1/9+1/9+1/9+1/9+1/9"), 1/1, 'Test 22');
test(fractionAddition("-1/3-1/3-1/3"), -1/1, 'Test 23');
test(fractionAddition("1/1-1/2-1/3"), 1/6, 'Test 24');
test(fractionAddition("1/4+1/4+1/4+1/4"), 1/1, 'Test 25');
test(fractionAddition("5/6+1/3"), 7/6, 'Test 26');
test(fractionAddition("1/10-1/10"), 0/1, 'Test 27');
test(fractionAddition("-1/2+1/2+1/3"), 1/3, 'Test 28');
test(fractionAddition("-1/2+1/2"), 0/1, 'Test 29');
test(fractionAddition("2/3+3/4-1/6"), 5/4, 'Test 30');
test(fractionAddition("3/5-2/5+1/5-4/5+2/5"), 0/1, 'Test 31');
test(fractionAddition("-7/8+5/6-1/4+3/5"), 37/120, 'Test 32');
test(fractionAddition("-1/2+1/2-1/3+1/3-1/4+1/4-1/5+1/5-1/6+1/6"), 0/1, 'Test 33');
test(fractionAddition("1/10-2/9+3/8-4/7+5/6-6/5+7/4-8/3+9/2-10/1"), -17897/2520, 'Test 34');
test(fractionAddition("-5/6+3/4-2/3+1/2-1/8"), -3/8, 'Test 35');
test(fractionAddition("-1/2-2/3-3/4-4/5-5/6-6/7-7/8-8/9-9/10"), -17819/2520, 'Test 36');
test(fractionAddition("1/7+1/11+1/13+1/17+1/19"), 3191/7560, 'Test 37');
test(fractionAddition("-1/10-2/9-3/8-4/7-5/6-6/5-7/4-8/3-9/2-10/1"), -55991/2520, 'Test 38');
test(fractionAddition("7/9-5/6+11/12-3/4+2/3"), 7/9, 'Test 39');
test(fractionAddition("1/3-1/4+1/5-1/6+1/7-1/8+1/9-1/10+1/2"), 1627/2520, 'Test 40');
test(fractionAddition("-1/2+1/3-1/4+1/5-1/6"), -23/60, 'Test 41');
test(fractionAddition("-1/2+2/3-3/4+4/5-5/6+6/7-7/8+8/9-9/10"), -1627/2520, 'Test 42');
test(fractionAddition("1/10-2/15+3/20-4/25+5/30"), 1243/10080, 'Test 43');
test(fractionAddition("10/1-9/2+8/3-7/4+6/5-5/6+4/7-3/8+2/9-1/10"), 17897/2520, 'Test 44');
test(fractionAddition("-1/2+2/3-3/4+4/5-5/6+6/7-7/8+8/9-9/10+10/11-11/12"), -1411/2160, 'Test 45');
test(fractionAddition("1/2+1/4+1/6+1/8+1/10+1/12+1/14+1/16+1/18+1/20"), 7381/5040, 'Test 46');
test(fractionAddition("1/3-1/6+1/9-1/12+1/15-1/18+1/21-1/24+1/27-1/30"), 1627/7560, 'Test 47');
test(fractionAddition("1/9+1/8+1/7+1/6+1/5+1/4+1/3+1/2+1/1"), 7129/2520, 'Test 48');
test(fractionAddition("-1/2+1/3-1/4+1/5-1/6+1/7-1/8+1/9-1/10"), -893/2520, 'Test 49');
test(fractionAddition("-1/8+1/4-3/8+5/8-7/8+9/8-11/8"), -3/4, 'Test 50');
test(fractionAddition("7/10-3/5+2/4-1/2+1/1-9/10+5/6"), 31/30, 'Test 51');
test(fractionAddition("1/1+1/2+1/3+1/4+1/5+1/6+1/7+1/8+1/9+1/10+1/11+1/12"), 93841/30240, 'Test 52');
test(fractionAddition("5/10+15/20-25/30+35/40-45/50+55/60-65/70+75/80-85/90+95/100"), 6667/5040, 'Test 53');
test(fractionAddition("1/10+2/15+3/20+4/25+5/30+6/35+7/40"), 15973/15120, 'Test 54');
test(fractionAddition("1/9-1/10+1/11-1/12+1/13"), 413/4320, 'Test 55');
test(fractionAddition("1/2+1/4+1/8+1/16+1/32+1/64+1/128+1/256"), 4303/4320, 'Test 56');
test(fractionAddition("10/9-9/8+8/7-7/6+6/5-5/4+4/3-3/2+2/1"), 4399/2520, 'Test 57');
test(fractionAddition("5/9-3/8+7/6-2/5+1/4"), 431/360, 'Test 58');
test(fractionAddition("-1/2+1/3-1/5+1/7-1/9+1/11-1/13+1/15-1/17+1/19"), -1313/5040, 'Test 59');
test(fractionAddition("7/8-5/6+1/4-1/2+3/7"), 37/168, 'Test 60');
test(fractionAddition("1/1-2/1+3/1-4/1+5/1-6/1+7/1-8/1+9/1-10/1"), -5/1, 'Test 61');
test(fractionAddition("9/10+1/10-1/5+3/20-1/4"), 7/10, 'Test 62');
test(fractionAddition("-1/10+2/9-3/8+4/7-5/6+6/5-7/4+8/3-9/2+10/1"), 17897/2520, 'Test 63');
test(fractionAddition("1/5-2/5+3/5-4/5+5/5-6/5+7/5-8/5+9/5-10/5"), -1/1, 'Test 64');
test(fractionAddition("1/9+1/18+1/27+1/36+1/45+1/54+1/63+1/72+1/81+1/90"), 9841/30240, 'Test 65');
test(fractionAddition("1/2+1/3+1/4+1/5+1/6+1/7+1/8+1/9+1/10"), 4861/2520, 'Test 66');
test(fractionAddition("-1/2-1/3-1/4-1/5-1/6-1/7-1/8-1/9-1/10"), -4861/2520, 'Test 67');
test(fractionAddition("1/10-1/20+1/30-1/40+1/50"), 74/945, 'Test 68');
test(fractionAddition("7/8-1/2+3/4-1/4+2/5"), 51/40, 'Test 69');
test(fractionAddition("3/5-2/7+1/9-1/11+1/13-1/15+1/17"), 6101/15120, 'Test 70');
test(fractionAddition("-1/10+2/10-3/10+4/10-5/10+6/10-7/10+8/10-9/10+10/10"), 1/2, 'Test 71');
test(fractionAddition("1/2-1/2+1/2-1/2+1/2-1/2+1/2-1/2+1/2"), 1/2, 'Test 72');
test(fractionAddition("-9/10+-8/9+-7/8+-6/7+-5/6+-4/5+-3/4+-2/3+-1/2"), Error: not enough values to unpack [expected 2, got 1], 'Test 73');
test(fractionAddition("-5/6+3/4-2/3+1/2"), -1/4, 'Test 74');
test(fractionAddition("10/10-9/10+8/10-7/10+6/10-5/10+4/10-3/10+2/10-1/10"), 1/2, 'Test 75');
test(fractionAddition("1/7-2/7+3/7-4/7+5/7-6/7+8/7"), 5/7, 'Test 76');
test(fractionAddition("1/1-1/2+1/3-1/4+1/5-1/6+1/7-1/8+1/9-1/10+1/11-1/12"), 19753/30240, 'Test 77');
test(fractionAddition("10/9-9/8+8/7-7/6+6/5-5/4+4/3-3/2+2/1-1/1"), 1879/2520, 'Test 78');
test(fractionAddition("1/2+1/3+1/5+1/7+1/11+1/13+1/17+1/19"), 11003/7560, 'Test 79');
test(fractionAddition("11/12-10/11+9/10-8/9+7/8-6/7+5/6-4/5+3/4-2/3+1/2"), 19753/30240, 'Test 80');
test(fractionAddition("1/10+1/9+1/8+1/7+1/6+1/5+1/4+1/3+1/2+1/1"), 7381/2520, 'Test 81');
test(fractionAddition("-1/10-1/9-1/8-1/7-1/6-1/5-1/4-1/3-1/2-1/1"), -7381/2520, 'Test 82');
test(fractionAddition("-1/10+2/9-3/8+4/7-5/6+6/5-7/4+8/3-9/2"), -7303/2520, 'Test 83');
test(fractionAddition("1/2+2/3+3/4+4/5+5/6+6/7+7/8+8/9+9/10"), 17819/2520, 'Test 84');
test(fractionAddition("-5/6+2/3-1/4+1/2+3/8-7/10"), -29/120, 'Test 85');
test(fractionAddition("1/10+2/9+3/8+4/7+5/6+6/5+7/4+8/3+9/2+10/1"), 55991/2520, 'Test 86');
test(fractionAddition("-1/3+1/6-1/9+1/12-1/15+1/18-1/21+1/24-1/27+1/30"), -1627/7560, 'Test 87');
test(fractionAddition("1/3+2/5-3/7+4/9-5/11+6/13-7/15+8/17-9/19"), 1237/4320, 'Test 88');
test(fractionAddition("7/8-3/4+5/6-1/3"), 5/8, 'Test 89');
test(fractionAddition("-1/1+1/2-1/3+1/4-1/5+1/6-1/7+1/8-1/9+1/10"), -1627/2520, 'Test 90');
test(fractionAddition("9/10-8/9+7/8-6/7+5/6-4/5+3/4-2/3+1/2"), 1627/2520, 'Test 91');
test(fractionAddition("5/9-2/3+1/6-1/12+1/18"), 1/36, 'Test 92');
test(fractionAddition("-9/10+8/9-7/8+6/7-5/6+4/5-3/4+2/3-1/2"), -1627/2520, 'Test 93');
test(fractionAddition("1/5+2/5+3/5-4/5-3/5-2/5-1/5"), -4/5, 'Test 94');
test(fractionAddition("1/2+1/2+1/3+1/4+1/5+1/6+1/7+1/8+1/9+1/10"), 6121/2520, 'Test 95');
test(fractionAddition("1/10+2/9-3/8+4/7-5/6+6/5-7/4+8/3-9/2+10/1"), 18401/2520, 'Test 96');
test(fractionAddition("2/1-1/2+2/3-1/4+2/5-1/6+2/7-1/8+2/9-1/10"), 6131/2520, 'Test 97');
test(fractionAddition("1/10+2/10+3/10+4/10+5/10+6/10+7/10+8/10+9/10"), 9/2, 'Test 98');
test(fractionAddition("1/10+2/9+3/8+4/7+5/6+6/5+7/4+8/3+9/2+1/1"), 33311/2520, 'Test 99');
test(fractionAddition("-1/2+3/4-5/6+7/8-9/10+11/12-13/14+15/16-17/18"), -3161/5040, 'Test 100');
test(fractionAddition("-1/10-1/9-1/8-1/7-1/6-1/5-1/4-1/3-1/2"), -4861/2520, 'Test 101');
test(fractionAddition("-1/3+2/5-3/7+4/9-5/11+6/13-7/15"), -1901/5040, 'Test 102');
test(fractionAddition("-1/2+1/3-1/4+1/5-1/6+1/7-1/8+1/9-1/10+1/11"), -7967/30240, 'Test 103');
test(fractionAddition("7/8-5/12+1/16-3/32"), 41/96, 'Test 104');
test(fractionAddition("7/8-3/4+5/6-2/3+1/2"), 19/24, 'Test 105');
test(fractionAddition("1/5-1/5+1/5-1/5+1/5-1/5+1/5-1/5+1/5-1/5+1/5"), 1/5, 'Test 106');
test(fractionAddition("-1/2+1/3-1/4+1/5-1/6+1/7"), -101/420, 'Test 107');
test(fractionAddition("3/4+2/3-5/6+7/8-9/10+11/12"), 59/40, 'Test 108');
test(fractionAddition("1/2+1/2+1/2+1/2+1/2+1/2+1/2+1/2+1/2+1/2"), 5/1, 'Test 109');
test(fractionAddition("-1/2+3/4-5/6+7/8-9/10+11/12-13/14+15/16-17/18+19/20"), 1627/5040, 'Test 110');
test(fractionAddition("1/1-1/2+1/3-1/4+1/5-1/6+1/7-1/8+1/9-1/10"), 1627/2520, 'Test 111');
test(fractionAddition("1/10+2/9-3/8+4/7-5/6"), -793/2520, 'Test 112');
test(fractionAddition("9/10-7/8+5/6-3/4+1/2"), 73/120, 'Test 113');
test(fractionAddition("-1/3+1/4-1/5+1/6-1/7+1/8-1/9+1/10-1/2"), -1627/2520, 'Test 114');
test(fractionAddition("-1/2+1/2-1/3+1/3-1/4+1/4-1/5+1/5"), 0/1, 'Test 115');
test(fractionAddition("-3/5+2/5-1/5+4/5-3/5+2/5-1/5"), 0/1, 'Test 116');
test(fractionAddition("10/1-9/1+8/1-7/1+6/1-5/1+4/1-3/1+2/1-1/1"), 5/1, 'Test 117');
test(fractionAddition("1/7+2/7-3/7+4/7-5/7+6/7-1/7"), 4/7, 'Test 118');
test(fractionAddition("-1/9+2/7-3/11+4/13-5/17+6/19"), 233/1008, 'Test 119');
test(fractionAddition("1/2-1/3+1/4-1/5+1/6-1/7+1/8-1/9+1/10"), 893/2520, 'Test 120');
test(fractionAddition("5/6-3/4+7/8-1/2+9/10"), 163/120, 'Test 121');
test(fractionAddition("5/9-2/3+4/5-6/7+8/9-10/11"), -5699/30240, 'Test 122');
test(fractionAddition("5/8+7/9-2/5+3/4-1/6"), 571/360, 'Test 123');
test(fractionAddition("-5/6+3/4-1/2+7/8"), 7/24, 'Test 124');
test(fractionAddition("3/8+5/12-7/15+9/20-11/25+13/30"), 11617/15120, 'Test 125');
test(fractionAddition("3/5-1/2+1/3-2/4+5/6-7/8+9/10"), 19/24, 'Test 126');
test(fractionAddition("7/8-3/4+2/5-1/6"), 43/120, 'Test 127');

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
