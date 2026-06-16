// Test: 2833. Furthest Point From Origin
// 151 test cases from LeetCodeDataset
// Run: node test.js

const { furthestDistanceFromOrigin } = require("./solution");

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

console.log("\n2833. Furthest Point From Origin\n");

test(furthestDistanceFromOrigin("________R"), 9, 'Test 1');
test(furthestDistanceFromOrigin("L_RL__R"), 3, 'Test 2');
test(furthestDistanceFromOrigin("L_____R"), 5, 'Test 3');
test(furthestDistanceFromOrigin("R_L_R_L"), 3, 'Test 4');
test(furthestDistanceFromOrigin("L________"), 9, 'Test 5');
test(furthestDistanceFromOrigin("R________"), 9, 'Test 6');
test(furthestDistanceFromOrigin("LLRRLLR"), 1, 'Test 7');
test(furthestDistanceFromOrigin("LLRRRRR"), 3, 'Test 8');
test(furthestDistanceFromOrigin("LRLRLRL"), 1, 'Test 9');
test(furthestDistanceFromOrigin("_L_R_L_"), 5, 'Test 10');
test(furthestDistanceFromOrigin("LLLLLLL"), 7, 'Test 11');
test(furthestDistanceFromOrigin("________L"), 9, 'Test 12');
test(furthestDistanceFromOrigin("__R____"), 7, 'Test 13');
test(furthestDistanceFromOrigin("R_R_R_R"), 7, 'Test 14');
test(furthestDistanceFromOrigin("____L__"), 7, 'Test 15');
test(furthestDistanceFromOrigin("R_____L"), 5, 'Test 16');
test(furthestDistanceFromOrigin("RLRLRLR"), 1, 'Test 17');
test(furthestDistanceFromOrigin("_R__LL_"), 5, 'Test 18');
test(furthestDistanceFromOrigin("_______"), 7, 'Test 19');
test(furthestDistanceFromOrigin("RRRRRRR"), 7, 'Test 20');
test(furthestDistanceFromOrigin("_________"), 9, 'Test 21');
test(furthestDistanceFromOrigin("RRLLLLL"), 3, 'Test 22');
test(furthestDistanceFromOrigin("R_______L_______R_______L_______R_______L_______R_______L_______R_______L_______R_______L_______R_______L_______R_______"), 106, 'Test 23');
test(furthestDistanceFromOrigin("_________________R_________________"), 35, 'Test 24');
test(furthestDistanceFromOrigin("R__R__R__R__R__R__R__R__R"), 25, 'Test 25');
test(furthestDistanceFromOrigin("LLLLLLLLLLL"), 11, 'Test 26');
test(furthestDistanceFromOrigin("RR____LLRRRR"), 8, 'Test 27');
test(furthestDistanceFromOrigin("RL_RLR_R_"), 5, 'Test 28');
test(furthestDistanceFromOrigin("RLRLRLRLR"), 1, 'Test 29');
test(furthestDistanceFromOrigin("LLLLLLLLLLLLLLLLLLLLLLLL"), 24, 'Test 30');
test(furthestDistanceFromOrigin("R_L_R_L_R_L_R_L_R_L_R_L"), 11, 'Test 31');
test(furthestDistanceFromOrigin("LR_LRLRL_"), 3, 'Test 32');
test(furthestDistanceFromOrigin("________L________R________"), 24, 'Test 33');
test(furthestDistanceFromOrigin("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"), 40, 'Test 34');
test(furthestDistanceFromOrigin("RRRR_LLLL_"), 2, 'Test 35');
test(furthestDistanceFromOrigin("LLLLLLLLLLLLLLRRRRRRRRRRRRRRRRRRRR"), 6, 'Test 36');
test(furthestDistanceFromOrigin("R________R"), 10, 'Test 37');
test(furthestDistanceFromOrigin("_LRLRLRLRLRLRLRLRLR_"), 2, 'Test 38');
test(furthestDistanceFromOrigin("RRRRRRRRRRRRRRLLLLLLLLLLLLLLLLLLLL"), 6, 'Test 39');
test(furthestDistanceFromOrigin("L_L_L_L_L"), 9, 'Test 40');
test(furthestDistanceFromOrigin("___________"), 11, 'Test 41');
test(furthestDistanceFromOrigin("L_____L_____L_____L_____L_"), 26, 'Test 42');
test(furthestDistanceFromOrigin("RRRRLLLLLLLLLLLLLLLL"), 12, 'Test 43');
test(furthestDistanceFromOrigin("_LRR_LRR_LRR_LRR_LRR_LRR_"), 13, 'Test 44');
test(furthestDistanceFromOrigin("RRRR_LLLLL"), 2, 'Test 45');
test(furthestDistanceFromOrigin("R__L__R__L__R__L__R__L__R__L__R__L__"), 24, 'Test 46');
test(furthestDistanceFromOrigin("_LLRRLLRR__L"), 4, 'Test 47');
test(furthestDistanceFromOrigin("_L__R_L__R_L"), 8, 'Test 48');
test(furthestDistanceFromOrigin("________________R__________L______________"), 40, 'Test 49');
test(furthestDistanceFromOrigin("LLLLRRRRR"), 1, 'Test 50');
test(furthestDistanceFromOrigin("L_R__R_L__R"), 7, 'Test 51');
test(furthestDistanceFromOrigin("R_RR_R_RRRR"), 11, 'Test 52');
test(furthestDistanceFromOrigin("_L_L_L_L_L_"), 11, 'Test 53');
test(furthestDistanceFromOrigin("LR_LR_LR_LR_LR_LR_LR_LR_"), 8, 'Test 54');
test(furthestDistanceFromOrigin("_____________"), 13, 'Test 55');
test(furthestDistanceFromOrigin("LR_RLR_RLR_RLR_RLR_RLR_RLR"), 12, 'Test 56');
test(furthestDistanceFromOrigin("LR_LRLRLRLRLRLRLRLRLRLRLRL"), 2, 'Test 57');
test(furthestDistanceFromOrigin("RL_RL_RL_RL_RL_RL_RL_RL_RL_RL"), 9, 'Test 58');
test(furthestDistanceFromOrigin("_________________L_________________"), 35, 'Test 59');
test(furthestDistanceFromOrigin("LRRLRRLLRRLLRR"), 2, 'Test 60');
test(furthestDistanceFromOrigin("________________________"), 24, 'Test 61');
test(furthestDistanceFromOrigin("____R____L____"), 12, 'Test 62');
test(furthestDistanceFromOrigin("R____R____R____R____R_____"), 26, 'Test 63');
test(furthestDistanceFromOrigin("LRLRLRLRLR"), 0, 'Test 64');
test(furthestDistanceFromOrigin("L__R__L__R__L__R__L__R__"), 16, 'Test 65');
test(furthestDistanceFromOrigin("____L___R____"), 11, 'Test 66');
test(furthestDistanceFromOrigin("_L__R__L__R_"), 8, 'Test 67');
test(furthestDistanceFromOrigin("LLRR__LLRR__LLRR"), 4, 'Test 68');
test(furthestDistanceFromOrigin("_L_R_L_R_L_R"), 6, 'Test 69');
test(furthestDistanceFromOrigin("LR_LR_LR_LR_LR_LR_LR"), 6, 'Test 70');
test(furthestDistanceFromOrigin("________R_________"), 18, 'Test 71');
test(furthestDistanceFromOrigin("R______L_"), 7, 'Test 72');
test(furthestDistanceFromOrigin("_________L_________"), 19, 'Test 73');
test(furthestDistanceFromOrigin("L_____R_____L_____R"), 15, 'Test 74');
test(furthestDistanceFromOrigin("_L_L_L_L_L_L_L_L_L_L_L_L_"), 25, 'Test 75');
test(furthestDistanceFromOrigin("RRRRRRRRRRRRRRRRRRRRRRRR"), 24, 'Test 76');
test(furthestDistanceFromOrigin("L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R"), 17, 'Test 77');
test(furthestDistanceFromOrigin("RL_RLR_RLR_RLR_RLR_RLR_R"), 12, 'Test 78');
test(furthestDistanceFromOrigin("____L_____"), 10, 'Test 79');
test(furthestDistanceFromOrigin("LLLLRRRRLLLLRRRRLLLLRRRRLLLLRRRRLLLL"), 4, 'Test 80');
test(furthestDistanceFromOrigin("LLLLLLRRRRRR"), 0, 'Test 81');
test(furthestDistanceFromOrigin("_L______R"), 7, 'Test 82');
test(furthestDistanceFromOrigin("LLLL____R"), 7, 'Test 83');
test(furthestDistanceFromOrigin("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 40, 'Test 84');
test(furthestDistanceFromOrigin("LL_R__R_L__L___"), 11, 'Test 85');
test(furthestDistanceFromOrigin("L_____L_____L_____"), 18, 'Test 86');
test(furthestDistanceFromOrigin("LLLLLLLLRRRRRRRRRRLLLLRRRRRRRR"), 6, 'Test 87');
test(furthestDistanceFromOrigin("_________________________"), 25, 'Test 88');
test(furthestDistanceFromOrigin("R_R_R_R_R_R_R"), 13, 'Test 89');
test(furthestDistanceFromOrigin("RL_RL_RL_RL"), 3, 'Test 90');
test(furthestDistanceFromOrigin("_R_L_R_L_R_"), 7, 'Test 91');
test(furthestDistanceFromOrigin("_L__R__L__R__L__R__L__R__L__R_"), 20, 'Test 92');
test(furthestDistanceFromOrigin("___________________________"), 27, 'Test 93');
test(furthestDistanceFromOrigin("R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R"), 23, 'Test 94');
test(furthestDistanceFromOrigin("__L__R__L__"), 9, 'Test 95');
test(furthestDistanceFromOrigin("LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRL"), 1, 'Test 96');
test(furthestDistanceFromOrigin("R______L_____"), 11, 'Test 97');
test(furthestDistanceFromOrigin("L_R__R_L__R_L_R_L__R_L_R_"), 15, 'Test 98');
test(furthestDistanceFromOrigin("_LL_R_L_R_L_"), 8, 'Test 99');
test(furthestDistanceFromOrigin("RRRRRRRRRRR"), 11, 'Test 100');
test(furthestDistanceFromOrigin("RLLLLRRRRRRR"), 4, 'Test 101');
test(furthestDistanceFromOrigin("L___R___L___R___L___R___"), 18, 'Test 102');
test(furthestDistanceFromOrigin("____LR____LR____LR____LR__"), 18, 'Test 103');
test(furthestDistanceFromOrigin("____R____R____L"), 13, 'Test 104');
test(furthestDistanceFromOrigin("_____________L____________R_____________"), 38, 'Test 105');
test(furthestDistanceFromOrigin("LRRLRLRLRLRLRLRLRLRL"), 0, 'Test 106');
test(furthestDistanceFromOrigin("L_R_L_R_L_R"), 5, 'Test 107');
test(furthestDistanceFromOrigin("L___R___L___R___L___R___L"), 19, 'Test 108');
test(furthestDistanceFromOrigin("________________L________________________R____________"), 52, 'Test 109');
test(furthestDistanceFromOrigin("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 42, 'Test 110');
test(furthestDistanceFromOrigin("________________"), 16, 'Test 111');
test(furthestDistanceFromOrigin("L_L_L_L_L_L_L_L_L_L_L_L"), 23, 'Test 112');
test(furthestDistanceFromOrigin("LRRLRRLLRRRL"), 2, 'Test 113');
test(furthestDistanceFromOrigin("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 44, 'Test 114');
test(furthestDistanceFromOrigin("RR___L__L___R_R"), 11, 'Test 115');
test(furthestDistanceFromOrigin("RRRRRRRR____"), 12, 'Test 116');
test(furthestDistanceFromOrigin("R_______L"), 7, 'Test 117');
test(furthestDistanceFromOrigin("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"), 44, 'Test 118');
test(furthestDistanceFromOrigin("LR_RLR_LRLRLRLRLRL"), 2, 'Test 119');
test(furthestDistanceFromOrigin("____R_______"), 12, 'Test 120');
test(furthestDistanceFromOrigin("R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L"), 17, 'Test 121');
test(furthestDistanceFromOrigin("__LLRR__L__"), 7, 'Test 122');
test(furthestDistanceFromOrigin("L__L__L__L__L__L__L__L__L"), 25, 'Test 123');
test(furthestDistanceFromOrigin("L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R_L_R"), 23, 'Test 124');
test(furthestDistanceFromOrigin("L_____R_____L"), 11, 'Test 125');
test(furthestDistanceFromOrigin("RR_RRRRRLLLL_LLLLLLLLL"), 8, 'Test 126');
test(furthestDistanceFromOrigin("_L_L_L_L_L_L_L"), 14, 'Test 127');
test(furthestDistanceFromOrigin("LRLRLRLRLRLR"), 0, 'Test 128');
test(furthestDistanceFromOrigin("_LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRL_"), 3, 'Test 129');
test(furthestDistanceFromOrigin("R___L___R___L___R___L___R"), 19, 'Test 130');
test(furthestDistanceFromOrigin("LLLLLLLLLLLLLLLLRRRRRRRRRR"), 6, 'Test 131');
test(furthestDistanceFromOrigin("RRRRLLLLLLLLRRRRLLLLLLLLRRRRLLLLLLLL"), 12, 'Test 132');
test(furthestDistanceFromOrigin("L_______R"), 7, 'Test 133');
test(furthestDistanceFromOrigin("LLLLLLLL____"), 12, 'Test 134');
test(furthestDistanceFromOrigin("R_______________________L"), 23, 'Test 135');
test(furthestDistanceFromOrigin("LRRLRRLRL"), 1, 'Test 136');
test(furthestDistanceFromOrigin("L_R_L_R_L_R_L_R_"), 8, 'Test 137');
test(furthestDistanceFromOrigin("R_R_R_R_R"), 9, 'Test 138');
test(furthestDistanceFromOrigin("_R_L__R_L__R"), 8, 'Test 139');
test(furthestDistanceFromOrigin("RRRRRLLLLLL"), 1, 'Test 140');
test(furthestDistanceFromOrigin("R__L__R__L__R__L__R__L__"), 16, 'Test 141');
test(furthestDistanceFromOrigin("RRRRRRLLLLLLRRRRRRLLLLLL___"), 3, 'Test 142');
test(furthestDistanceFromOrigin("L_L_L_L_L_L_L_L_L"), 17, 'Test 143');
test(furthestDistanceFromOrigin("_L__R__L__R__L"), 10, 'Test 144');
test(furthestDistanceFromOrigin("RRRR____L"), 7, 'Test 145');
test(furthestDistanceFromOrigin("____L_R____R"), 10, 'Test 146');
test(furthestDistanceFromOrigin("_LRRRR______L___"), 12, 'Test 147');
test(furthestDistanceFromOrigin("_L___R__L_"), 8, 'Test 148');
test(furthestDistanceFromOrigin("R_L_R_L_R_L"), 5, 'Test 149');
test(furthestDistanceFromOrigin("LRRLRLRLRL"), 0, 'Test 150');
test(furthestDistanceFromOrigin("LLLLLLLRRRR"), 3, 'Test 151');

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
