// Test: 2147. Number Of Ways To Divide A Long Corridor
// 145 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfWays } = require("./solution");

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

console.log("\n2147. Number Of Ways To Divide A Long Corridor\n");

test(numberOfWays("PPPPSSPPPPSSPPPP"), 5, 'Test 1');
test(numberOfWays("SSSSSSSSSS"), 1, 'Test 2');
test(numberOfWays("SPSPSPSP"), 2, 'Test 3');
test(numberOfWays("SSSPPSS"), 0, 'Test 4');
test(numberOfWays("PSSPSPSPPS"), 0, 'Test 5');
test(numberOfWays("SS"), 1, 'Test 6');
test(numberOfWays("PPPP"), 0, 'Test 7');
test(numberOfWays("SSPPSS"), 3, 'Test 8');
test(numberOfWays("SSSSPPSSSS"), 3, 'Test 9');
test(numberOfWays("SSPSSP"), 2, 'Test 10');
test(numberOfWays("SSPSSPSS"), 4, 'Test 11');
test(numberOfWays("SSPPPPPSSPPPPSS"), 30, 'Test 12');
test(numberOfWays("SSPSPSPSPS"), 4, 'Test 13');
test(numberOfWays("SSSS"), 1, 'Test 14');
test(numberOfWays("SSSPPPSS"), 0, 'Test 15');
test(numberOfWays("SSSPPS"), 1, 'Test 16');
test(numberOfWays("PPSSPPSSPP"), 3, 'Test 17');
test(numberOfWays("SSPPSSPPSS"), 9, 'Test 18');
test(numberOfWays("SSPPSPS"), 3, 'Test 19');
test(numberOfWays("SSPPSPPS"), 3, 'Test 20');
test(numberOfWays("S"), 0, 'Test 21');
test(numberOfWays("PPSPSP"), 1, 'Test 22');
test(numberOfWays("SPPSPPSPPS"), 3, 'Test 23');
test(numberOfWays("PPSPSPSPSPSPSPSPSP"), 8, 'Test 24');
test(numberOfWays("SSSPSSSSPPSSPPSSSSPPSSSSPPSSSSSSSSSS"), 0, 'Test 25');
test(numberOfWays("SPPSPSPSPSPSPSPSPS"), 0, 'Test 26');
test(numberOfWays("SSPSSPSSPSSPSSPSSPSS"), 64, 'Test 27');
test(numberOfWays("PPSSPPSPSSPPSS"), 0, 'Test 28');
test(numberOfWays("SSPPSSSSSSSSPPSSSSSSSSPPSSSSSSSSSS"), 27, 'Test 29');
test(numberOfWays("SSPPSSPPSSPPSS"), 27, 'Test 30');
test(numberOfWays("SPSSPSSPSSPSSPSS"), 0, 'Test 31');
test(numberOfWays("PPPPPPSSPPPPSSPPPP"), 5, 'Test 32');
test(numberOfWays("SSPPPPPPSSPPPPSSPPPPSSPPSS"), 525, 'Test 33');
test(numberOfWays("PPSSPPSSPPSSPPSS"), 27, 'Test 34');
test(numberOfWays("PPPPSSPPPPSSPPPPSSPPPPSSPPPPSSPPPP"), 625, 'Test 35');
test(numberOfWays("SSSPSPSPSPSPSSSSPSPS"), 0, 'Test 36');
test(numberOfWays("SSPPSPSPSSSSPPPPSS"), 30, 'Test 37');
test(numberOfWays("SSPPSSSSSSSSSSSSSS"), 3, 'Test 38');
test(numberOfWays("PPPPPPPPPPPPPPPPPP"), 0, 'Test 39');
test(numberOfWays("SPPSPSPSPSPSPSPSPSPS"), 16, 'Test 40');
test(numberOfWays("SPSPPSPSPPSPSPPSPSPP"), 27, 'Test 41');
test(numberOfWays("PPSSPPSSPPSSPP"), 9, 'Test 42');
test(numberOfWays("SSPSPSPSPSPS"), 0, 'Test 43');
test(numberOfWays("SSSPSSSPSSSPSSSPSS"), 4, 'Test 44');
test(numberOfWays("PPSSPPSSSSSSSSSSSS"), 3, 'Test 45');
test(numberOfWays("SSPPPPPPPPSSPPPPSS"), 45, 'Test 46');
test(numberOfWays("SSPPSSSSSSPPSS"), 9, 'Test 47');
test(numberOfWays("SSPPPPPPSSPPPPPSS"), 42, 'Test 48');
test(numberOfWays("SSSSPPPPSSPPSSPPSSSSPPPPSSSSSS"), 225, 'Test 49');
test(numberOfWays("SSPPPPSSPPSS"), 15, 'Test 50');
test(numberOfWays("SSSSPPPPSSPPPPSSSSPPPPSS"), 125, 'Test 51');
test(numberOfWays("SSPPPPSSPPPPSSPPPPSSPPPPSS"), 625, 'Test 52');
test(numberOfWays("SSPPSPSSSSSSSSSSPPSS"), 0, 'Test 53');
test(numberOfWays("SPPSPPSPPSPPS"), 0, 'Test 54');
test(numberOfWays("SSPSPPSPSPSPSPPPSS"), 0, 'Test 55');
test(numberOfWays("SSPPSSPPSSPPSSPPSSPPSSPPSSPPSSPPSSPPSSPPSSPPSS"), 177147, 'Test 56');
test(numberOfWays("PPPPPPSPPPPSPPPPSPPPPS"), 5, 'Test 57');
test(numberOfWays("SSSSSSSSSSSSSSSS"), 1, 'Test 58');
test(numberOfWays("SSPPSPSSPPSPSSPPSPSS"), 0, 'Test 59');
test(numberOfWays("PPSSPPSSPPSS"), 9, 'Test 60');
test(numberOfWays("SSPPSPSPSPSPSPSPSPSPSPSPSPSPSPSPSPSPSPSPSPS"), 1536, 'Test 61');
test(numberOfWays("SSSPSSPPSSPPSSSSPPSSPPSSPPSSSSPPSSSS"), 0, 'Test 62');
test(numberOfWays("SSSSSSSSSSSSSSSSSSSSSSSSSS"), 1, 'Test 63');
test(numberOfWays("SSPPSSPPSSPPSSPPSSSSPPSSSSPPSSSS"), 729, 'Test 64');
test(numberOfWays("SSPPSPPPSPSPPS"), 6, 'Test 65');
test(numberOfWays("SSPPPPSSPPPPSSPPSSPPPPSS"), 375, 'Test 66');
test(numberOfWays("SSPPPPPPSPPPPPSSSSPP"), 0, 'Test 67');
test(numberOfWays("PPSSSSPPPPSS"), 5, 'Test 68');
test(numberOfWays("SSPPSPPPSSSSPPSPSS"), 6, 'Test 69');
test(numberOfWays("PPPPPPSSPPSS"), 3, 'Test 70');
test(numberOfWays("SSPPSPSSPPSPSSPPSPSSPPSPSS"), 36, 'Test 71');
test(numberOfWays("SSSPSSSPSSSPSSSPSSSPSSSPSSS"), 0, 'Test 72');
test(numberOfWays("SSSPSSSSPPSSPPSSSSPPSSSSPPSSSS"), 0, 'Test 73');
test(numberOfWays("SPPPPPPPPPPP"), 0, 'Test 74');
test(numberOfWays("PPPPSPSPPPPSPSPPPPSP"), 0, 'Test 75');
test(numberOfWays("PPSSPPSSPPSSPPSSPPSSPPSSPPSS"), 729, 'Test 76');
test(numberOfWays("PPPPPPPPPPPPPPPPPPPP"), 0, 'Test 77');
test(numberOfWays("SSPSSPSSPSSPSSPSSPSSPSS"), 128, 'Test 78');
test(numberOfWays("SSPPPPSPSPPPSS"), 20, 'Test 79');
test(numberOfWays("PPSSPSSPPSSPSSPPSSPSSPPSS"), 216, 'Test 80');
test(numberOfWays("SSPPPSSPPPSSPPPSS"), 64, 'Test 81');
test(numberOfWays("SSPSSSPSSPSSPSSPSS"), 0, 'Test 82');
test(numberOfWays("SSPPSSPPSSPPSSPPSSPPSSPPSS"), 729, 'Test 83');
test(numberOfWays("PPSSPPPPSSPPPPSS"), 25, 'Test 84');
test(numberOfWays("SPSSSPSSSPSSSPSSSPSS"), 0, 'Test 85');
test(numberOfWays("PSPSPSPSPSPSPSPSPS"), 0, 'Test 86');
test(numberOfWays("SSPPSSPSPSPSSP"), 12, 'Test 87');
test(numberOfWays("SSSSSSSSSSSSSSSSSS"), 1, 'Test 88');
test(numberOfWays("SSPPSSPPSSPPSPSSPPSS"), 0, 'Test 89');
test(numberOfWays("SSPPSPSPPPSSSPPSS"), 0, 'Test 90');
test(numberOfWays("SSPPSSSSPPSSSSPPS"), 0, 'Test 91');
test(numberOfWays("SSPPPPPPSSSSSSSSSS"), 7, 'Test 92');
test(numberOfWays("SSPPPPSSPPPPSSSSPPPPSSSSPPPPSSSS"), 625, 'Test 93');
test(numberOfWays("SSSSSSSSSSPPPPPPSS"), 7, 'Test 94');
test(numberOfWays("SSSSPPSSSSSSPPSSSS"), 9, 'Test 95');
test(numberOfWays("SSPSSPSSPSSPSSPSSPSSPSSPSSPS"), 0, 'Test 96');
test(numberOfWays("SSPPSPSPSPPSS"), 0, 'Test 97');
test(numberOfWays("PPSSPPPPSSPPSSPP"), 15, 'Test 98');
test(numberOfWays("SPSSSPSSSPSSSPSS"), 4, 'Test 99');
test(numberOfWays("PSPPSPSPSPSPSPSPSPSP"), 0, 'Test 100');
test(numberOfWays("SSSSSSPPSSSSSSPPSSSSSSPPSSSSSS"), 27, 'Test 101');
test(numberOfWays("SSPPSSPSSPPSSPSSPPSS"), 108, 'Test 102');
test(numberOfWays("SSSPSPSPSPSPSPSPSPSPSP"), 16, 'Test 103');
test(numberOfWays("PPPPPPSSPPPP"), 1, 'Test 104');
test(numberOfWays("PPSSPPSSPPSSPPSSPPSSPPSSPPSSPPSSPPSSPPSS"), 19683, 'Test 105');
test(numberOfWays("SSPPSPSSPSPSSPSPSSPSPSS"), 24, 'Test 106');
test(numberOfWays("SSSPPSSSPPPSSS"), 0, 'Test 107');
test(numberOfWays("SSSSSSSSSSSS"), 1, 'Test 108');
test(numberOfWays("SSSSSPPPSSSSSPPPSSSS"), 4, 'Test 109');
test(numberOfWays("SSSSSSSSPPPPPPPPSSSSSSSSPPPPPPPPSSSS"), 81, 'Test 110');
test(numberOfWays("SSSSSS"), 1, 'Test 111');
test(numberOfWays("SSPPPPPPSSSSSSPPSSPP"), 21, 'Test 112');
test(numberOfWays("SSPSPSPSPSPSPSPSPSPSPSPSPSPSPS"), 128, 'Test 113');
test(numberOfWays("SSPPSSPPSSPPSSPPSS"), 81, 'Test 114');
test(numberOfWays("SSSSPPPPSSSSPPPPSSSS"), 25, 'Test 115');
test(numberOfWays("SSPSPPSSPSPPSSPSPPSS"), 0, 'Test 116');
test(numberOfWays("SPSPSP"), 0, 'Test 117');
test(numberOfWays("SSPPPPSPSSPPPSS"), 0, 'Test 118');
test(numberOfWays("SSSSPSPSPSPS"), 4, 'Test 119');
test(numberOfWays("PPPPPP"), 0, 'Test 120');
test(numberOfWays("SSPPPPPPPPPPSSPPPPSSPPSS"), 165, 'Test 121');
test(numberOfWays("SSPPSSPPSSPPSSPPSSPPSSPPSSPPSSPPSS"), 6561, 'Test 122');
test(numberOfWays("SSPPPPSSPPPPSSPPSS"), 75, 'Test 123');
test(numberOfWays("SSSSSSSSSSSSSSSSSSSS"), 1, 'Test 124');
test(numberOfWays("SSSSPPPPSSSSPPSSSS"), 15, 'Test 125');
test(numberOfWays("PPPPPPPPPPPPPPPP"), 0, 'Test 126');
test(numberOfWays("SSSPSPSPSPSPSPSPSPSS"), 16, 'Test 127');
test(numberOfWays("SSPPSPSSSSPPSPSSSS"), 6, 'Test 128');
test(numberOfWays("SSPSSPSSPSSPSSPSS"), 32, 'Test 129');
test(numberOfWays("SSPPSSPPSSPPSSPPSSPP"), 81, 'Test 130');
test(numberOfWays("PPPPSSPPPPSSPPPPSSPPPPSSPPPPSS"), 625, 'Test 131');
test(numberOfWays("SSPPSSPPSSPPSSPPSSPPSSPPSSPPSS"), 2187, 'Test 132');
test(numberOfWays("SSSSPPSSSSPPSSSS"), 9, 'Test 133');
test(numberOfWays("SSSSSSPPPPSSSSPPPPSSSSSSPPPP"), 25, 'Test 134');
test(numberOfWays("SSPPSSPPSSPPSSPPSSPPSS"), 243, 'Test 135');
test(numberOfWays("SSPPSSPPSSPPSSSS"), 27, 'Test 136');
test(numberOfWays("SSPSPSPSPSPSPSPS"), 0, 'Test 137');
test(numberOfWays("SSPPSPSPSPSPSS"), 12, 'Test 138');
test(numberOfWays("SPSPSPSPSPSPSPSPSPSP"), 16, 'Test 139');
test(numberOfWays("SSPPSSSSPPPPSSSSSSSS"), 15, 'Test 140');
test(numberOfWays("PPPPSSPPSSPPSSPPPP"), 9, 'Test 141');
test(numberOfWays("SPSPPSPSPPSPSPPSPSPPSP"), 0, 'Test 142');
test(numberOfWays("PPSPSPSPSPSPPSPSPS"), 8, 'Test 143');
test(numberOfWays("SPSPSPSPPSPS"), 6, 'Test 144');
test(numberOfWays("SSPPSSPPSSPPSSSSPPSSPPSSSSPPSS"), 729, 'Test 145');

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
