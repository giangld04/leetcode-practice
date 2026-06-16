// Test: 942. Di String Match
// 157 test cases from LeetCodeDataset
// Run: node test.js

const { diStringMatch } = require("./solution");

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

console.log("\n942. Di String Match\n");

test(diStringMatch("DDI"), [3, 2, 0, 1], 'Test 1');
test(diStringMatch("DDIDDI"), [6, 5, 0, 4, 3, 1, 2], 'Test 2');
test(diStringMatch("IDDD"), [0, 4, 3, 2, 1], 'Test 3');
test(diStringMatch("DDDDDDDD"), [8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 4');
test(diStringMatch("I"), [0, 1], 'Test 5');
test(diStringMatch("IIIIII"), [0, 1, 2, 3, 4, 5, 6], 'Test 6');
test(diStringMatch("D"), [1, 0], 'Test 7');
test(diStringMatch("IIII"), [0, 1, 2, 3, 4], 'Test 8');
test(diStringMatch("IDDDIII"), [0, 7, 6, 5, 1, 2, 3, 4], 'Test 9');
test(diStringMatch("DDII"), [4, 3, 0, 1, 2], 'Test 10');
test(diStringMatch("IDIDIDIDID"), [0, 10, 1, 9, 2, 8, 3, 7, 4, 6, 5], 'Test 11');
test(diStringMatch("IIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 12');
test(diStringMatch("DDDDDD"), [6, 5, 4, 3, 2, 1, 0], 'Test 13');
test(diStringMatch("III"), [0, 1, 2, 3], 'Test 14');
test(diStringMatch("IDID"), [0, 4, 1, 3, 2], 'Test 15');
test(diStringMatch("DDDD"), [4, 3, 2, 1, 0], 'Test 16');
test(diStringMatch("DDIDDID"), [7, 6, 0, 5, 4, 1, 3, 2], 'Test 17');
test(diStringMatch("IDIDIDID"), [0, 8, 1, 7, 2, 6, 3, 5, 4], 'Test 18');
test(diStringMatch("IIDDD"), [0, 1, 5, 4, 3, 2], 'Test 19');
test(diStringMatch("DDDII"), [5, 4, 3, 0, 1, 2], 'Test 20');
test(diStringMatch("IIIIIIIIIIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 'Test 21');
test(diStringMatch("IDDDDDDDDDDDDD"), [0, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 22');
test(diStringMatch("DDIIIDDDIIID"), [12, 11, 0, 1, 2, 10, 9, 8, 3, 4, 5, 7, 6], 'Test 23');
test(diStringMatch("IDDDDDDDII"), [0, 10, 9, 8, 7, 6, 5, 4, 1, 2, 3], 'Test 24');
test(diStringMatch("DDDDDDIIIII"), [11, 10, 9, 8, 7, 6, 0, 1, 2, 3, 4, 5], 'Test 25');
test(diStringMatch("IDDDDDDDDIIIII"), [0, 14, 13, 12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 5, 6], 'Test 26');
test(diStringMatch("IIDIIDIIDI"), [0, 1, 10, 2, 3, 9, 4, 5, 8, 6, 7], 'Test 27');
test(diStringMatch("DDIDDIDDID"), [10, 9, 0, 8, 7, 1, 6, 5, 2, 4, 3], 'Test 28');
test(diStringMatch("DDDDDDIDID"), [10, 9, 8, 7, 6, 5, 0, 4, 1, 3, 2], 'Test 29');
test(diStringMatch("DDDDDDDDDIDDDD"), [14, 13, 12, 11, 10, 9, 8, 7, 6, 0, 5, 4, 3, 2, 1], 'Test 30');
test(diStringMatch("IIIIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 31');
test(diStringMatch("IDDDDDIIIIII"), [0, 12, 11, 10, 9, 8, 1, 2, 3, 4, 5, 6, 7], 'Test 32');
test(diStringMatch("DDDDDDDDDDDDDDDD"), [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 33');
test(diStringMatch("DDDDDDIII"), [9, 8, 7, 6, 5, 4, 0, 1, 2, 3], 'Test 34');
test(diStringMatch("IIDDDDIIIDDD"), [0, 1, 12, 11, 10, 9, 2, 3, 4, 8, 7, 6, 5], 'Test 35');
test(diStringMatch("DDDDDDDDDIIIII"), [14, 13, 12, 11, 10, 9, 8, 7, 6, 0, 1, 2, 3, 4, 5], 'Test 36');
test(diStringMatch("DDDDIIIID"), [9, 8, 7, 6, 0, 1, 2, 3, 5, 4], 'Test 37');
test(diStringMatch("IDIDIDIDIDIDID"), [0, 14, 1, 13, 2, 12, 3, 11, 4, 10, 5, 9, 6, 8, 7], 'Test 38');
test(diStringMatch("DDDDDDDDDI"), [10, 9, 8, 7, 6, 5, 4, 3, 2, 0, 1], 'Test 39');
test(diStringMatch("DDDIDIDIDI"), [10, 9, 8, 0, 7, 1, 6, 2, 5, 3, 4], 'Test 40');
test(diStringMatch("DDDDDDDDDID"), [11, 10, 9, 8, 7, 6, 5, 4, 3, 0, 2, 1], 'Test 41');
test(diStringMatch("DDDDIDIDIDID"), [12, 11, 10, 9, 0, 8, 1, 7, 2, 6, 3, 5, 4], 'Test 42');
test(diStringMatch("IIDIIIIIIIIDIDDDDD"), [0, 1, 18, 2, 3, 4, 5, 6, 7, 8, 9, 17, 10, 16, 15, 14, 13, 12, 11], 'Test 43');
test(diStringMatch("IDDDIIIIIIII"), [0, 12, 11, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 44');
test(diStringMatch("DDDDIIIIIIIDIDIDIDIDID"), [22, 21, 20, 19, 0, 1, 2, 3, 4, 5, 6, 18, 7, 17, 8, 16, 9, 15, 10, 14, 11, 13, 12], 'Test 45');
test(diStringMatch("IIIIIIIIIIIIID"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13], 'Test 46');
test(diStringMatch("IDIDIDIDIDID"), [0, 12, 1, 11, 2, 10, 3, 9, 4, 8, 5, 7, 6], 'Test 47');
test(diStringMatch("IIIIIIIDDDDD"), [0, 1, 2, 3, 4, 5, 6, 12, 11, 10, 9, 8, 7], 'Test 48');
test(diStringMatch("IDDDDDDDDDDDID"), [0, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 1, 3, 2], 'Test 49');
test(diStringMatch("IIDIIIDDD"), [0, 1, 9, 2, 3, 4, 8, 7, 6, 5], 'Test 50');
test(diStringMatch("IIIIIIIIIID"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10], 'Test 51');
test(diStringMatch("IIIIIIIDDD"), [0, 1, 2, 3, 4, 5, 6, 10, 9, 8, 7], 'Test 52');
test(diStringMatch("DDDDDDDDDDIIIIIIIIIID"), [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10], 'Test 53');
test(diStringMatch("IDIDIDIDIDI"), [0, 11, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 'Test 54');
test(diStringMatch("DDDDDDDDDDII"), [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 0, 1, 2], 'Test 55');
test(diStringMatch("IDDDIIDDDIIDDDIIII"), [0, 18, 17, 16, 1, 2, 15, 14, 13, 3, 4, 12, 11, 10, 5, 6, 7, 8, 9], 'Test 56');
test(diStringMatch("DDDDIIIIDDDD"), [12, 11, 10, 9, 0, 1, 2, 3, 8, 7, 6, 5, 4], 'Test 57');
test(diStringMatch("IIIIIIIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 'Test 58');
test(diStringMatch("IDIDIDDDDD"), [0, 10, 1, 9, 2, 8, 7, 6, 5, 4, 3], 'Test 59');
test(diStringMatch("IIIIIIIIIIIDDDDDDDDIIIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 28, 27, 26, 25, 24, 23, 22, 21, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 60');
test(diStringMatch("IDIDIDIDDDD"), [0, 11, 1, 10, 2, 9, 3, 8, 7, 6, 5, 4], 'Test 61');
test(diStringMatch("DDDDDDDDDDDD"), [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 62');
test(diStringMatch("IIIIIDDDDDID"), [0, 1, 2, 3, 4, 12, 11, 10, 9, 8, 5, 7, 6], 'Test 63');
test(diStringMatch("IDDDDDDDDDDDDIIIIIIIII"), [0, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 64');
test(diStringMatch("IIDIDIDIDI"), [0, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 'Test 65');
test(diStringMatch("IIIIIDDDDDDDDD"), [0, 1, 2, 3, 4, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5], 'Test 66');
test(diStringMatch("IIDIDIDIDID"), [0, 1, 11, 2, 10, 3, 9, 4, 8, 5, 7, 6], 'Test 67');
test(diStringMatch("DDDIDIDIDID"), [11, 10, 9, 0, 8, 1, 7, 2, 6, 3, 5, 4], 'Test 68');
test(diStringMatch("IIIDDDIIID"), [0, 1, 2, 10, 9, 8, 3, 4, 5, 7, 6], 'Test 69');
test(diStringMatch("IIIIIIIIIIIIIIIIIID"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 18], 'Test 70');
test(diStringMatch("DDIIDDIDID"), [10, 9, 0, 1, 8, 7, 2, 6, 3, 5, 4], 'Test 71');
test(diStringMatch("DDDDIDDDDDDD"), [12, 11, 10, 9, 0, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 72');
test(diStringMatch("DDDDDDDDDDDDDDD"), [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 73');
test(diStringMatch("DIIDIDIDID"), [10, 0, 1, 9, 2, 8, 3, 7, 4, 6, 5], 'Test 74');
test(diStringMatch("IDDDDDDDDIII"), [0, 12, 11, 10, 9, 8, 7, 6, 5, 1, 2, 3, 4], 'Test 75');
test(diStringMatch("DDDDDDDDD"), [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 76');
test(diStringMatch("DDDIDDDDDDDD"), [12, 11, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 77');
test(diStringMatch("IIIIDDDDIII"), [0, 1, 2, 3, 11, 10, 9, 8, 4, 5, 6, 7], 'Test 78');
test(diStringMatch("IIDIDID"), [0, 1, 7, 2, 6, 3, 5, 4], 'Test 79');
test(diStringMatch("IIIIIIIIIIIIIIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 80');
test(diStringMatch("IDIDDDIDID"), [0, 10, 1, 9, 8, 7, 2, 6, 3, 5, 4], 'Test 81');
test(diStringMatch("DDDDDDDDDDDDDDDDDDDD"), [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 82');
test(diStringMatch("DDDDDDDDDD"), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 83');
test(diStringMatch("DDDDDDDDDDI"), [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0, 1], 'Test 84');
test(diStringMatch("IDIDIDIDIDIDIDID"), [0, 16, 1, 15, 2, 14, 3, 13, 4, 12, 5, 11, 6, 10, 7, 9, 8], 'Test 85');
test(diStringMatch("DDDDDDDDDDDII"), [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 0, 1, 2], 'Test 86');
test(diStringMatch("IIIIIDIIIIII"), [0, 1, 2, 3, 4, 12, 5, 6, 7, 8, 9, 10, 11], 'Test 87');
test(diStringMatch("IIDDDDDDDDDD"), [0, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2], 'Test 88');
test(diStringMatch("IIIIIIIDDDD"), [0, 1, 2, 3, 4, 5, 6, 11, 10, 9, 8, 7], 'Test 89');
test(diStringMatch("IIIIDDDDDDID"), [0, 1, 2, 3, 12, 11, 10, 9, 8, 7, 4, 6, 5], 'Test 90');
test(diStringMatch("DDDDDIDDDDD"), [11, 10, 9, 8, 7, 0, 6, 5, 4, 3, 2, 1], 'Test 91');
test(diStringMatch("DDDDIIII"), [8, 7, 6, 5, 0, 1, 2, 3, 4], 'Test 92');
test(diStringMatch("IIIIIIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 93');
test(diStringMatch("IIIIIIIIIIIDDDDDDDDDD"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11], 'Test 94');
test(diStringMatch("DDDDDDDIIIII"), [12, 11, 10, 9, 8, 7, 6, 0, 1, 2, 3, 4, 5], 'Test 95');
test(diStringMatch("IDIDIDIDDDDD"), [0, 12, 1, 11, 2, 10, 3, 9, 8, 7, 6, 5, 4], 'Test 96');
test(diStringMatch("DDIDIDIDID"), [10, 9, 0, 8, 1, 7, 2, 6, 3, 5, 4], 'Test 97');
test(diStringMatch("DDIIDDDIIID"), [11, 10, 0, 1, 9, 8, 7, 2, 3, 4, 6, 5], 'Test 98');
test(diStringMatch("IIDDDDDDII"), [0, 1, 10, 9, 8, 7, 6, 5, 2, 3, 4], 'Test 99');
test(diStringMatch("IIDIDIDID"), [0, 1, 9, 2, 8, 3, 7, 4, 6, 5], 'Test 100');
test(diStringMatch("DDDDDDDIIIIIII"), [14, 13, 12, 11, 10, 9, 8, 0, 1, 2, 3, 4, 5, 6, 7], 'Test 101');
test(diStringMatch("IIIIIIIIIIIIIIDDDDDDDDDDDD"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14], 'Test 102');
test(diStringMatch("IIIIIDDDDIII"), [0, 1, 2, 3, 4, 12, 11, 10, 9, 5, 6, 7, 8], 'Test 103');
test(diStringMatch("DIDIDIDIDIDIDIDIDIDIDIDID"), [25, 0, 24, 1, 23, 2, 22, 3, 21, 4, 20, 5, 19, 6, 18, 7, 17, 8, 16, 9, 15, 10, 14, 11, 13, 12], 'Test 104');
test(diStringMatch("DDDDIIIIIIIDDDIIIIIDDDIIII"), [26, 25, 24, 23, 0, 1, 2, 3, 4, 5, 6, 22, 21, 20, 7, 8, 9, 10, 11, 19, 18, 17, 12, 13, 14, 15, 16], 'Test 105');
test(diStringMatch("IIIDDDDDDD"), [0, 1, 2, 10, 9, 8, 7, 6, 5, 4, 3], 'Test 106');
test(diStringMatch("IIIIIDDDDD"), [0, 1, 2, 3, 4, 10, 9, 8, 7, 6, 5], 'Test 107');
test(diStringMatch("DDDDDDDDDDIIII"), [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 0, 1, 2, 3, 4], 'Test 108');
test(diStringMatch("IDDDDDDDDDDD"), [0, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 109');
test(diStringMatch("DDDDIIIIIIIIIIIIDDDDD"), [21, 20, 19, 18, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 16, 15, 14, 13, 12], 'Test 110');
test(diStringMatch("IIIIIDDDDDD"), [0, 1, 2, 3, 4, 11, 10, 9, 8, 7, 6, 5], 'Test 111');
test(diStringMatch("IIDIIIIIDDDD"), [0, 1, 12, 2, 3, 4, 5, 6, 11, 10, 9, 8, 7], 'Test 112');
test(diStringMatch("DDDDDDDDIII"), [11, 10, 9, 8, 7, 6, 5, 4, 0, 1, 2, 3], 'Test 113');
test(diStringMatch("DDIDIDIDIDID"), [12, 11, 0, 10, 1, 9, 2, 8, 3, 7, 4, 6, 5], 'Test 114');
test(diStringMatch("DDDDDDDDDIDIDID"), [15, 14, 13, 12, 11, 10, 9, 8, 7, 0, 6, 1, 5, 2, 4, 3], 'Test 115');
test(diStringMatch("IIIIIIIIIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 116');
test(diStringMatch("IIDDDIIIDDD"), [0, 1, 11, 10, 9, 2, 3, 4, 8, 7, 6, 5], 'Test 117');
test(diStringMatch("DIDIDIDIDI"), [10, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5], 'Test 118');
test(diStringMatch("DDDDDDDDDDDDDD"), [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 119');
test(diStringMatch("DDDDDDIDDDII"), [12, 11, 10, 9, 8, 7, 0, 6, 5, 4, 1, 2, 3], 'Test 120');
test(diStringMatch("IDIDDDDDDD"), [0, 10, 1, 9, 8, 7, 6, 5, 4, 3, 2], 'Test 121');
test(diStringMatch("IDIDIDIDIDIDIDIDIDIDIDID"), [0, 24, 1, 23, 2, 22, 3, 21, 4, 20, 5, 19, 6, 18, 7, 17, 8, 16, 9, 15, 10, 14, 11, 13, 12], 'Test 122');
test(diStringMatch("DDDDIIIIIII"), [11, 10, 9, 8, 0, 1, 2, 3, 4, 5, 6, 7], 'Test 123');
test(diStringMatch("DDDDDDIIID"), [10, 9, 8, 7, 6, 5, 0, 1, 2, 4, 3], 'Test 124');
test(diStringMatch("IDIDIDIDIDIDIDIDIDID"), [0, 20, 1, 19, 2, 18, 3, 17, 4, 16, 5, 15, 6, 14, 7, 13, 8, 12, 9, 11, 10], 'Test 125');
test(diStringMatch("DDDDDDDDDDDDD"), [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 126');
test(diStringMatch("IIDDDDDDID"), [0, 1, 10, 9, 8, 7, 6, 5, 2, 4, 3], 'Test 127');
test(diStringMatch("IIIIIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 'Test 128');
test(diStringMatch("DDDDDDIIII"), [10, 9, 8, 7, 6, 5, 0, 1, 2, 3, 4], 'Test 129');
test(diStringMatch("DDDDIIDDII"), [10, 9, 8, 7, 0, 1, 6, 5, 2, 3, 4], 'Test 130');
test(diStringMatch("DIDIDIDIDID"), [11, 0, 10, 1, 9, 2, 8, 3, 7, 4, 6, 5], 'Test 131');
test(diStringMatch("DDDDDDDDDDDID"), [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 0, 2, 1], 'Test 132');
test(diStringMatch("DDDDDDDDDDD"), [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 133');
test(diStringMatch("DDIIIDDDII"), [10, 9, 0, 1, 2, 8, 7, 6, 3, 4, 5], 'Test 134');
test(diStringMatch("DDDDDDDDDIIIIIIIIIIDDDDDDDD"), [27, 26, 25, 24, 23, 22, 21, 20, 19, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 17, 16, 15, 14, 13, 12, 11, 10], 'Test 135');
test(diStringMatch("DDDDDIIIIII"), [11, 10, 9, 8, 7, 0, 1, 2, 3, 4, 5, 6], 'Test 136');
test(diStringMatch("IIDDDDDIII"), [0, 1, 10, 9, 8, 7, 6, 2, 3, 4, 5], 'Test 137');
test(diStringMatch("IDIDDDDDDDDDDD"), [0, 14, 1, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2], 'Test 138');
test(diStringMatch("DDDDDDDDDDDDDIIIIIIIIIIIII"), [26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 'Test 139');
test(diStringMatch("IIDDDDIIID"), [0, 1, 10, 9, 8, 7, 2, 3, 4, 6, 5], 'Test 140');
test(diStringMatch("IIIIIIIIIIIID"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 12], 'Test 141');
test(diStringMatch("DDIIDDDIID"), [10, 9, 0, 1, 8, 7, 6, 2, 3, 5, 4], 'Test 142');
test(diStringMatch("DIDIDIDID"), [9, 0, 8, 1, 7, 2, 6, 3, 5, 4], 'Test 143');
test(diStringMatch("IIIIIIIDDDDDDD"), [0, 1, 2, 3, 4, 5, 6, 14, 13, 12, 11, 10, 9, 8, 7], 'Test 144');
test(diStringMatch("IDDDDDDDDD"), [0, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 145');
test(diStringMatch("IIIIIIIIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 146');
test(diStringMatch("IIIIIIIIIIID"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11], 'Test 147');
test(diStringMatch("IDIDIDDDDDD"), [0, 11, 1, 10, 2, 9, 8, 7, 6, 5, 4, 3], 'Test 148');
test(diStringMatch("IIDDDDDDDD"), [0, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2], 'Test 149');
test(diStringMatch("IIDDDDDDDDID"), [0, 1, 12, 11, 10, 9, 8, 7, 6, 5, 2, 4, 3], 'Test 150');
test(diStringMatch("IIIIIIIII"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 151');
test(diStringMatch("IDDDDDDDDDD"), [0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 152');
test(diStringMatch("IIIIIDIDIDIDIDIDIDDD"), [0, 1, 2, 3, 4, 20, 5, 19, 6, 18, 7, 17, 8, 16, 9, 15, 10, 14, 13, 12, 11], 'Test 153');
test(diStringMatch("DDDDDDDDDDDDDDDIDDD"), [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 0, 4, 3, 2, 1], 'Test 154');
test(diStringMatch("DDDDDDDDDDDIII"), [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 0, 1, 2, 3], 'Test 155');
test(diStringMatch("DIIIDDDIIIID"), [12, 0, 1, 2, 11, 10, 9, 3, 4, 5, 6, 8, 7], 'Test 156');
test(diStringMatch("IDDDIDDDID"), [0, 10, 9, 8, 1, 7, 6, 5, 2, 4, 3], 'Test 157');

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
