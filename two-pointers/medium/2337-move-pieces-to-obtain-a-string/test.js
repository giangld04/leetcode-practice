// Test: 2337. Move Pieces To Obtain A String
// 136 test cases from LeetCodeDataset
// Run: node test.js

const { canChange } = require("./solution");

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

console.log("\n2337. Move Pieces To Obtain A String\n");

test(canChange("_R", "R_"), false, 'Test 1');
test(canChange("___", "___"), true, 'Test 2');
test(canChange("LR", "LR"), true, 'Test 3');
test(canChange("_LL_R", "LL__R"), true, 'Test 4');
test(canChange("____", "____"), true, 'Test 5');
test(canChange("L_R", "_LR"), false, 'Test 6');
test(canChange("R__L", "L__R"), false, 'Test 7');
test(canChange("L_L_R", "LL_R_"), false, 'Test 8');
test(canChange("R_R", "_RR"), true, 'Test 9');
test(canChange("_L__R__R_", "L______RR"), true, 'Test 10');
test(canChange("L___R", "_L__R"), false, 'Test 11');
test(canChange("LL_R", "R_L_"), false, 'Test 12');
test(canChange("__L___", "L_____"), true, 'Test 13');
test(canChange("LRRL", "LRRL"), true, 'Test 14');
test(canChange("RL", "LR"), false, 'Test 15');
test(canChange("R__L", "__LR"), false, 'Test 16');
test(canChange("LRLR", "LRLR"), true, 'Test 17');
test(canChange("LL_RR", "L_RLR"), false, 'Test 18');
test(canChange("L_L", "LL_"), true, 'Test 19');
test(canChange("RLRL", "LRLR"), false, 'Test 20');
test(canChange("L___R", "L___R"), true, 'Test 21');
test(canChange("R___L", "L___R"), false, 'Test 22');
test(canChange("R_L_", "__LR"), false, 'Test 23');
test(canChange("R_LRL", "RLR_L"), false, 'Test 24');
test(canChange("RRLL____", "____RRLL"), false, 'Test 25');
test(canChange("R__L__R", "__LR___"), false, 'Test 26');
test(canChange("L_R___L___L___R___R", "_______LL___RR"), false, 'Test 27');
test(canChange("LR___LR___LR____", "_L__L___R___R___"), false, 'Test 28');
test(canChange("L___R_L__", "L______LR"), false, 'Test 29');
test(canChange("____L___R___", "L___________R"), true, 'Test 30');
test(canChange("R_____L_______", "_________LR____"), false, 'Test 31');
test(canChange("R_R_R_R_R", "RRRRR_____"), false, 'Test 32');
test(canChange("R____L_____", "_____R____L"), false, 'Test 33');
test(canChange("R______L", "_____LR_"), false, 'Test 34');
test(canChange("R___L__R_L", "_____LR__L"), false, 'Test 35');
test(canChange("L______R______L", "_______LR______"), false, 'Test 36');
test(canChange("R_L_L___R_R", "__LR___LR"), false, 'Test 37');
test(canChange("R__L___L_", "___LR___L"), false, 'Test 38');
test(canChange("L____R____L___", "________LR____"), false, 'Test 39');
test(canChange("L_R____R", "_LR_____"), false, 'Test 40');
test(canChange("R__L_____R", "_______LR___"), false, 'Test 41');
test(canChange("R_R_R_R_", "____RRRR"), true, 'Test 42');
test(canChange("R_L_R_L_R", "_L__L__RR"), false, 'Test 43');
test(canChange("R__LR_R__", "__LR___R_"), false, 'Test 44');
test(canChange("___L_R___L___R___", "L_____L____R____"), false, 'Test 45');
test(canChange("LR_L_R_L_R", "L_R_L_R_L_"), false, 'Test 46');
test(canChange("L_R_L_R", "_L__L_R"), false, 'Test 47');
test(canChange("R__L___R_L", "____LR__RL"), false, 'Test 48');
test(canChange("RRR_______LLL", "________RRRLLL"), false, 'Test 49');
test(canChange("__LR__R", "____LRR"), false, 'Test 50');
test(canChange("L___R___L", "____L__LR"), false, 'Test 51');
test(canChange("L_R__L_R__L", "_______L___LR"), false, 'Test 52');
test(canChange("R__L___L_R", "___LL______R"), false, 'Test 53');
test(canChange("_L_R__L_R", "L______LR"), false, 'Test 54');
test(canChange("L_L_L_L_L", "_____LLLL"), false, 'Test 55');
test(canChange("____L_R_L____", "_________LR"), false, 'Test 56');
test(canChange("_L_R__L__R", "__LR____R"), false, 'Test 57');
test(canChange("R_L_R_L_R_L", "_LR_L_L_R_L"), false, 'Test 58');
test(canChange("_L_R_L_R", "L___L___R"), false, 'Test 59');
test(canChange("R_L_R_L___", "__LR____L"), false, 'Test 60');
test(canChange("R_L_R_L_R", "___R_L_RL"), false, 'Test 61');
test(canChange("R_L_R_L_R", "_LR_L__RR"), false, 'Test 62');
test(canChange("R___L___R___L", "_____R___L___"), false, 'Test 63');
test(canChange("R___L___R___L___", "_____R____L____"), false, 'Test 64');
test(canChange("LR_LRL__", "LRL_L___"), false, 'Test 65');
test(canChange("L___R____L", "______LR_L"), false, 'Test 66');
test(canChange("R___R___R___L___L___", "_______RRR____"), false, 'Test 67');
test(canChange("_R____L____R", "____L___R_R"), false, 'Test 68');
test(canChange("L_____R__L", "L_________RL"), false, 'Test 69');
test(canChange("L___R___L___R___L___", "__________LRLRL"), false, 'Test 70');
test(canChange("____R_L_R___", "R_L_____R_"), false, 'Test 71');
test(canChange("___L__R___", "L_______R__"), true, 'Test 72');
test(canChange("R____L____R", "____R___L"), false, 'Test 73');
test(canChange("LR__LR__LR___", "L___R___L___RRR"), false, 'Test 74');
test(canChange("L____R____", "____LR____"), false, 'Test 75');
test(canChange("RRR___LLL", "___LLLRRR"), false, 'Test 76');
test(canChange("L_R_L___R", "L___L_R__"), false, 'Test 77');
test(canChange("L_R___R___R___R___L", "___L_____RRR___"), false, 'Test 78');
test(canChange("L_R_L_R_L_R", "LL______RRR"), false, 'Test 79');
test(canChange("_L__R_L_R", "L_____RLR"), false, 'Test 80');
test(canChange("R_L_R__L", "_R___L_RL"), false, 'Test 81');
test(canChange("R___R___L___R___L", "_____RR____L___"), false, 'Test 82');
test(canChange("R_L_R_L_R_L_R___", "_L_R_L_R_L_R____"), false, 'Test 83');
test(canChange("R___L___R", "__LR___R_"), false, 'Test 84');
test(canChange("______L_R", "L______R_"), false, 'Test 85');
test(canChange("R__L_L___R", "___LR____R"), false, 'Test 86');
test(canChange("R___L___R___R___L___", "_____R____R____L___"), false, 'Test 87');
test(canChange("_L_L_L_L", "LLLL____"), true, 'Test 88');
test(canChange("_L_R_L_R_", "L_____R_R"), false, 'Test 89');
test(canChange("L_R_L_R_L_R", "_LR_L_R_L_R"), false, 'Test 90');
test(canChange("L_R_L_R_L_R", "_L_L_L_RLR_"), false, 'Test 91');
test(canChange("L___R___R___L", "_____L___RR"), false, 'Test 92');
test(canChange("R_______L", "________LR"), false, 'Test 93');
test(canChange("L_____R_L____", "________L_R__"), false, 'Test 94');
test(canChange("R_L_R___L_R___", "_L_R_L___R____"), false, 'Test 95');
test(canChange("_L_R__L__R", "____L___LR"), false, 'Test 96');
test(canChange("_L_R__L___R", "L_____R____R"), false, 'Test 97');
test(canChange("R_L_R___L", "_LR______"), false, 'Test 98');
test(canChange("L_R_L___R", "L___LR___"), false, 'Test 99');
test(canChange("R_L_R_L_R", "_LR_L_R_L"), false, 'Test 100');
test(canChange("LRLR_LRL", "LRLR_LRL"), true, 'Test 101');
test(canChange("R_____L__", "_____LR__"), false, 'Test 102');
test(canChange("R_L_R_L", "__LR__L"), false, 'Test 103');
test(canChange("R_L_R_L_R_L", "LR_L_R_L_R_"), false, 'Test 104');
test(canChange("L_____R___L", "________LRL"), false, 'Test 105');
test(canChange("_L____R_____", "L_____R_____"), true, 'Test 106');
test(canChange("R__R__L", "_____RR_L"), false, 'Test 107');
test(canChange("___LR___R", "L_____RR_"), false, 'Test 108');
test(canChange("_L___R_L_R", "L_____RR__"), false, 'Test 109');
test(canChange("L___R__L_R", "LL______RR"), false, 'Test 110');
test(canChange("______", "______"), true, 'Test 111');
test(canChange("R_L_R___L_R", "_L_R_L___RR"), false, 'Test 112');
test(canChange("L_L_L__L___", "_L_L___L___L_"), false, 'Test 113');
test(canChange("R________L", "________LR"), false, 'Test 114');
test(canChange("R_L___L_R", "__LR__L_R"), false, 'Test 115');
test(canChange("R___________L", "____________LR"), false, 'Test 116');
test(canChange("L___R___L", "__L___R_L"), false, 'Test 117');
test(canChange("L_R___R__L", "____L___R"), false, 'Test 118');
test(canChange("_______L_L_R_R", "L______L___R_R"), true, 'Test 119');
test(canChange("RRRLLL___", "___RRRLLL"), false, 'Test 120');
test(canChange("L__R__L___R____", "L___L__R__R____"), false, 'Test 121');
test(canChange("L_R___R___R___L", "___L_____RR___"), false, 'Test 122');
test(canChange("L___R__L___", "_L_____RL__"), false, 'Test 123');
test(canChange("L___R___L___R", "L___L___R___R"), false, 'Test 124');
test(canChange("____L___R__", "L_____R____"), false, 'Test 125');
test(canChange("L_R__L_R", "_LR__LR_"), false, 'Test 126');
test(canChange("R_L___LR__L____", "__LR__LR__L____"), false, 'Test 127');
test(canChange("L___R___R", "___L____R"), false, 'Test 128');
test(canChange("L___R___L_R", "L_____RL___"), false, 'Test 129');
test(canChange("__L_R__R_L", "L_____R__L"), false, 'Test 130');
test(canChange("_L___R__L", "L_____R__"), false, 'Test 131');
test(canChange("L_R___R___L___", "___L_____R___"), false, 'Test 132');
test(canChange("_L_R_L_R_R", "L______RRR"), false, 'Test 133');
test(canChange("_L___R_L_R", "L______LR"), false, 'Test 134');
test(canChange("_R_L_R_L____", "____LR____LR"), false, 'Test 135');
test(canChange("R_L__R", "__LR__"), false, 'Test 136');

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
