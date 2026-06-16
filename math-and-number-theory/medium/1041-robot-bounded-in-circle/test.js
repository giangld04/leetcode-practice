// Test: 1041. Robot Bounded In Circle
// 140 test cases from LeetCodeDataset
// Run: node test.js

const { isRobotBounded } = require("./solution");

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

console.log("\n1041. Robot Bounded In Circle\n");

test(isRobotBounded("GGLGRGLL"), true, 'Test 1');
test(isRobotBounded("LLLL"), true, 'Test 2');
test(isRobotBounded("GLLRLLRL"), true, 'Test 3');
test(isRobotBounded("GRGL"), false, 'Test 4');
test(isRobotBounded("LLGRL"), true, 'Test 5');
test(isRobotBounded("LRRL"), true, 'Test 6');
test(isRobotBounded("LLGRR"), false, 'Test 7');
test(isRobotBounded("LRRRRLL"), true, 'Test 8');
test(isRobotBounded("LL"), true, 'Test 9');
test(isRobotBounded("RRGRRG"), true, 'Test 10');
test(isRobotBounded("GGGG"), false, 'Test 11');
test(isRobotBounded("GGRRGG"), true, 'Test 12');
test(isRobotBounded("GLGLG"), true, 'Test 13');
test(isRobotBounded("GGLLGG"), true, 'Test 14');
test(isRobotBounded("L"), true, 'Test 15');
test(isRobotBounded("GL"), true, 'Test 16');
test(isRobotBounded("R"), true, 'Test 17');
test(isRobotBounded("GG"), false, 'Test 18');
test(isRobotBounded("GLGLGLGL"), true, 'Test 19');
test(isRobotBounded("RRRR"), true, 'Test 20');
test(isRobotBounded("G"), false, 'Test 21');
test(isRobotBounded("GLGLGRRG"), false, 'Test 22');
test(isRobotBounded("GLLRLLRR"), true, 'Test 23');
test(isRobotBounded("RR"), true, 'Test 24');
test(isRobotBounded("LGLLGLLGRRRRGG"), true, 'Test 25');
test(isRobotBounded("LGR"), false, 'Test 26');
test(isRobotBounded("GLGLGRRR"), true, 'Test 27');
test(isRobotBounded("GRRG"), true, 'Test 28');
test(isRobotBounded("GRRGRRGRRGRRGRRGLG"), true, 'Test 29');
test(isRobotBounded("GLRGLRGLRGLRGLRGLR"), false, 'Test 30');
test(isRobotBounded("GGGGGRRRRRLLLLL"), false, 'Test 31');
test(isRobotBounded("GGRRLLGGRRLLGGRRLL"), false, 'Test 32');
test(isRobotBounded("LGGRRGGRRGGRRG"), true, 'Test 33');
test(isRobotBounded("RRRLLLLGGGGRRRLLL"), true, 'Test 34');
test(isRobotBounded("RRLLRRLLRRLLRR"), true, 'Test 35');
test(isRobotBounded("GLRGLRGLRGLRGLR"), false, 'Test 36');
test(isRobotBounded("RRRRGGGGLLGGGG"), true, 'Test 37');
test(isRobotBounded("GLGLGLGLGLGLGLGLGL"), true, 'Test 38');
test(isRobotBounded("RRRRRRRRRRRRRR"), true, 'Test 39');
test(isRobotBounded("RRLLGGGLLLRRRR"), true, 'Test 40');
test(isRobotBounded("LGLLGLGLLGLGRR"), true, 'Test 41');
test(isRobotBounded("GGRRLLGGLLRR"), false, 'Test 42');
test(isRobotBounded("GGGGGLLLRRRGGGGGLLLRRR"), false, 'Test 43');
test(isRobotBounded("LRRLRLRLRLRLRLRL"), true, 'Test 44');
test(isRobotBounded("LLLLRRRRLLLLRRRR"), true, 'Test 45');
test(isRobotBounded("GLGRGLGRGLGRGL"), true, 'Test 46');
test(isRobotBounded("GLRRLGLRRL"), false, 'Test 47');
test(isRobotBounded("GRRGRRGRRGRRGRRGRR"), true, 'Test 48');
test(isRobotBounded("LLLLRRRRLLLLRRRRGG"), false, 'Test 49');
test(isRobotBounded("GGGGRRRLLLLGGGRR"), true, 'Test 50');
test(isRobotBounded("GRRGRLGLGG"), true, 'Test 51');
test(isRobotBounded("RRLLGGGGLLRRLG"), true, 'Test 52');
test(isRobotBounded("GGLLGGRRLLRRGG"), false, 'Test 53');
test(isRobotBounded("GLGRRGLLGLLRRGGG"), true, 'Test 54');
test(isRobotBounded("LRRLGRLGRLGRLRLR"), true, 'Test 55');
test(isRobotBounded("GLLRRGGLLRRGGLLRR"), false, 'Test 56');
test(isRobotBounded("GGGRRRGRRRRGGGRRR"), true, 'Test 57');
test(isRobotBounded("RRLLGGGGLLRRG"), false, 'Test 58');
test(isRobotBounded("LRRRRLLRRRRLLRRR"), true, 'Test 59');
test(isRobotBounded("GRRGRRGRRGRRGG"), false, 'Test 60');
test(isRobotBounded("GGGLGGGLGGGLGGGL"), true, 'Test 61');
test(isRobotBounded("GGRRGGRRGGRRGGRR"), true, 'Test 62');
test(isRobotBounded("LLRRGGGGLLRRGG"), false, 'Test 63');
test(isRobotBounded("GGLRLRGGRRLL"), false, 'Test 64');
test(isRobotBounded("LRRGGLLLGGRRGG"), false, 'Test 65');
test(isRobotBounded("GLRRGLRRGLRR"), true, 'Test 66');
test(isRobotBounded("LLLLGRRGGGLLRLLRRR"), true, 'Test 67');
test(isRobotBounded("GLRLRLRLRLRRGGGG"), true, 'Test 68');
test(isRobotBounded("RRGLLRRGLLRRGLLRRG"), true, 'Test 69');
test(isRobotBounded("GLLGRRGRRGLLGRR"), true, 'Test 70');
test(isRobotBounded("LGGGGRLRRRRGLLGG"), true, 'Test 71');
test(isRobotBounded("GRRGGLLLGGRRGG"), true, 'Test 72');
test(isRobotBounded("LLLLRRRLLLLRRR"), true, 'Test 73');
test(isRobotBounded("LRLLRRLLRRLLRRLL"), true, 'Test 74');
test(isRobotBounded("RRLLGGGLLLRRGG"), true, 'Test 75');
test(isRobotBounded("RRGRLGGRLGRLG"), true, 'Test 76');
test(isRobotBounded("GGGLLLGGRRRRGGGL"), false, 'Test 77');
test(isRobotBounded("GLGGRLGRLGLGRLGLGG"), true, 'Test 78');
test(isRobotBounded("GGLGGLGGRRRR"), true, 'Test 79');
test(isRobotBounded("LGLRLGLRLGLRLGLRL"), true, 'Test 80');
test(isRobotBounded("GLGLGLGLGRRGRRGL"), true, 'Test 81');
test(isRobotBounded("LGGRLGRRGLLGRRGLGRR"), true, 'Test 82');
test(isRobotBounded("RRRLLLLRRRLLLL"), true, 'Test 83');
test(isRobotBounded("GLRGLRLRLGRRGGGG"), true, 'Test 84');
test(isRobotBounded("LGGRRGLGGLLRRGL"), true, 'Test 85');
test(isRobotBounded("GGGGLLLRRRGGRRRL"), true, 'Test 86');
test(isRobotBounded("GLRLRLRLRLRLRLRL"), true, 'Test 87');
test(isRobotBounded("GLGRRGGLLRRGGLLRR"), true, 'Test 88');
test(isRobotBounded("GGGGRRRLLLLLGGGG"), true, 'Test 89');
test(isRobotBounded("RRRGLLGGLLLGGG"), true, 'Test 90');
test(isRobotBounded("GGRRLLGGRRLL"), false, 'Test 91');
test(isRobotBounded("LGRGLRLRLGRR"), true, 'Test 92');
test(isRobotBounded("LGGRRGRRLLGGRL"), true, 'Test 93');
test(isRobotBounded("GLLLRRRRGLLLRRRR"), true, 'Test 94');
test(isRobotBounded("GGGLLLGGGLLLGGGL"), true, 'Test 95');
test(isRobotBounded("GLRLGLRLGLRLGLRL"), true, 'Test 96');
test(isRobotBounded("LGLLGLGLLGLGRRGLGRR"), false, 'Test 97');
test(isRobotBounded("GLGRLLRLRRRL"), false, 'Test 98');
test(isRobotBounded("LGLGLLRLRLRLRL"), false, 'Test 99');
test(isRobotBounded("GLGLGLGLGLGL"), true, 'Test 100');
test(isRobotBounded("LLGGRRLLGGRRLLGG"), true, 'Test 101');
test(isRobotBounded("GLGGRLGRLGLGRL"), true, 'Test 102');
test(isRobotBounded("LGLLGLGLGLGLLGLL"), true, 'Test 103');
test(isRobotBounded("LRLRLRLRLRLRLRLRLR"), true, 'Test 104');
test(isRobotBounded("GGLRLRRLLGLGGGG"), true, 'Test 105');
test(isRobotBounded("GGGGGGGGGGGGGG"), false, 'Test 106');
test(isRobotBounded("GRRRLRLLGLGLGRLR"), false, 'Test 107');
test(isRobotBounded("GGGLGGGLGGGLGGGLGG"), false, 'Test 108');
test(isRobotBounded("LGLRLGLRLGLRLGLRLR"), true, 'Test 109');
test(isRobotBounded("GLGLGLGLGLGLGLGL"), true, 'Test 110');
test(isRobotBounded("LGLGLGLGLGLGLGLG"), true, 'Test 111');
test(isRobotBounded("LLLLLLLLLLLLLL"), true, 'Test 112');
test(isRobotBounded("LGLGLGLGLGLGLG"), true, 'Test 113');
test(isRobotBounded("GGRRGLGRRGRRGRR"), true, 'Test 114');
test(isRobotBounded("LRLRLRLRLRLRLRLR"), true, 'Test 115');
test(isRobotBounded("GLGLGLGLGL"), true, 'Test 116');
test(isRobotBounded("GRRGRRGRRGRRGRRG"), true, 'Test 117');
test(isRobotBounded("GRRGLLRLLGRGLL"), true, 'Test 118');
test(isRobotBounded("LGLRLGLRLG"), true, 'Test 119');
test(isRobotBounded("GGLRLGLLGGRR"), true, 'Test 120');
test(isRobotBounded("GLRRLLRRLLRRLLRR"), true, 'Test 121');
test(isRobotBounded("RRLLRRLLRRLLRRLLRR"), true, 'Test 122');
test(isRobotBounded("GLRLRLRLRLRLRLRLGG"), true, 'Test 123');
test(isRobotBounded("RRGGLLRGGLLRRGLL"), true, 'Test 124');
test(isRobotBounded("GGGGGGGGGGGGGGGG"), false, 'Test 125');
test(isRobotBounded("GRRGLRGGGLLRLLGRR"), true, 'Test 126');
test(isRobotBounded("GLRRGLLLGGGGRRRR"), true, 'Test 127');
test(isRobotBounded("RRRRLLLLGGGG"), false, 'Test 128');
test(isRobotBounded("GLRRGLGLRLRR"), true, 'Test 129');
test(isRobotBounded("LGGRLGRRGLG"), false, 'Test 130');
test(isRobotBounded("GGGGRRRRLLLL"), false, 'Test 131');
test(isRobotBounded("RGLLRLGLGRRG"), true, 'Test 132');
test(isRobotBounded("RRLLRRLLRRLLRRLL"), true, 'Test 133');
test(isRobotBounded("GLRLGLRLGLRL"), true, 'Test 134');
test(isRobotBounded("GLGRRRRRGGGLLGLGRR"), true, 'Test 135');
test(isRobotBounded("GGGLRRLLGLRRLL"), true, 'Test 136');
test(isRobotBounded("GGLLGGGGLLGGGG"), false, 'Test 137');
test(isRobotBounded("LRRLRLRLRL"), true, 'Test 138');
test(isRobotBounded("GRRGGGGLLLRRGGLG"), false, 'Test 139');
test(isRobotBounded("LRRGLLRRGLLRRGLLRR"), true, 'Test 140');

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
