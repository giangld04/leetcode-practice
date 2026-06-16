// Test: 657. Robot Return To Origin
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { judgeCircle } = require("./solution");

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

console.log("\n657. Robot Return To Origin\n");

test(judgeCircle("LULLDDRRUURRDDLL"), false, 'Test 1');
test(judgeCircle("UUUUUUUUUUDDDDDDDDDDLLLLRRRR"), true, 'Test 2');
test(judgeCircle("UDLR"), true, 'Test 3');
test(judgeCircle("UUDDRRLL"), true, 'Test 4');
test(judgeCircle("LUDD"), false, 'Test 5');
test(judgeCircle("RLUD"), true, 'Test 6');
test(judgeCircle("RRDDLLUURR"), false, 'Test 7');
test(judgeCircle("LRLRLRLR"), true, 'Test 8');
test(judgeCircle("ULDRULDRULDR"), true, 'Test 9');
test(judgeCircle("LDRU"), true, 'Test 10');
test(judgeCircle("UDLRUDLRUDLR"), true, 'Test 11');
test(judgeCircle("UUUUUUUUUUUUUUDDDDDDDDDDDDDDLLLLLLLLRRRRRRRRRRRR"), false, 'Test 12');
test(judgeCircle("LDRRLU"), true, 'Test 13');
test(judgeCircle("UUDDLLRR"), true, 'Test 14');
test(judgeCircle("RLUDRLUD"), true, 'Test 15');
test(judgeCircle("LLLLRRRR"), true, 'Test 16');
test(judgeCircle("RULD"), true, 'Test 17');
test(judgeCircle("UUUUUUUUUUDDDDDDDDDDLLLLLLLLRRRRRRRR"), true, 'Test 18');
test(judgeCircle("UDUDUDUD"), true, 'Test 19');
test(judgeCircle("UUUUUUUUUUUUUUUUDDDDDDDDDDDDDDDDLLLLLLLLLLLLRRRRRRRRRRRRRR"), false, 'Test 20');
test(judgeCircle("RRDDLLUU"), true, 'Test 21');
test(judgeCircle("LL"), false, 'Test 22');
test(judgeCircle("UUUUDDDDLLLLRRRR"), true, 'Test 23');
test(judgeCircle("LRUD"), true, 'Test 24');
test(judgeCircle("UUDDLLRRUUDDLLRR"), true, 'Test 25');
test(judgeCircle("UUUUDDDD"), true, 'Test 26');
test(judgeCircle("RRDD"), false, 'Test 27');
test(judgeCircle("UUUUUUUUUUUUDDDDDDDDDDDDLLLLRRRRRRRRRRRR"), false, 'Test 28');
test(judgeCircle("RRRLLLDDDUUU"), true, 'Test 29');
test(judgeCircle("UD"), true, 'Test 30');
test(judgeCircle("UUUUUUUUUUUUUUUUUUDDDDDDDDDDDDDDDDDDLLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR"), true, 'Test 31');
test(judgeCircle("UDLRUDLRUDLRUDLRUDLRUDLRUDLRUDLRUDLRUDLRUDLRUDLRUDLR"), true, 'Test 32');
test(judgeCircle("LDDRUURLDDRUURLDDRUURLDDRUURLDDR"), false, 'Test 33');
test(judgeCircle("LLLLLRRRRRRLLLLRRRRRRLLL"), true, 'Test 34');
test(judgeCircle("UUDDDDUUUUUUUUUUDDDD"), false, 'Test 35');
test(judgeCircle("UDUDUDUDUDUDUDUDUDUDUDUDUDUD"), true, 'Test 36');
test(judgeCircle("UDUDUDUDUDUDUDUD"), true, 'Test 37');
test(judgeCircle("LLLLRRRRUUUUDDDDLRRRLLLLUUUUDDDD"), false, 'Test 38');
test(judgeCircle("RRDDLLUURRDDLLUURRDDLLUU"), true, 'Test 39');
test(judgeCircle("LRLRLRLRLRLRLRLR"), true, 'Test 40');
test(judgeCircle("LLRRLLRRLLRRLLRRLLRRLLRRLLRR"), true, 'Test 41');
test(judgeCircle("LDRULDRULDRU"), true, 'Test 42');
test(judgeCircle("LLLLRRRRLLLLRRRRLLLLRRRRLLLLRRRR"), true, 'Test 43');
test(judgeCircle("LLRRDDUULLRRDDUULLRRDDUULLRRDDUULL"), false, 'Test 44');
test(judgeCircle("RULLDDRRULLDDRRULLDDRR"), false, 'Test 45');
test(judgeCircle("LLLLUUUUUURRRRRRRRDDDDDD"), false, 'Test 46');
test(judgeCircle("RULLDRLDURDURLDLURDURLDLURDURLDL"), false, 'Test 47');
test(judgeCircle("UDLRUDLRUDLRUDLR"), true, 'Test 48');
test(judgeCircle("UUDDUUDDUUDDUUDDLLLLRRRRLLLLRRRR"), true, 'Test 49');
test(judgeCircle("RLRLRLRLRLRLRLRL"), true, 'Test 50');
test(judgeCircle("UUDDUUDDUUDDUUDDUUDDUUDD"), true, 'Test 51');
test(judgeCircle("UDLLRRUUDDLLRRUUDDLLRRUUDDLLRR"), true, 'Test 52');
test(judgeCircle("UUUDDDLLLRRR"), true, 'Test 53');
test(judgeCircle("UUUUDDDDLLLLRRRRUUUUDDDDLLLLRRRRUUUUDDDDLLLLRRRR"), true, 'Test 54');
test(judgeCircle("UUDDUUDDUUDDUUDDUUDDUUDDUUDD"), true, 'Test 55');
test(judgeCircle("UUUUDDDDLLLLRRRRUUUUDDDDLLLLRRRR"), true, 'Test 56');
test(judgeCircle("UUDDLLLLRRRRUUDDLLRR"), true, 'Test 57');
test(judgeCircle("UDUDUDUDUD"), true, 'Test 58');
test(judgeCircle("RLRLRLRLUDUDUDUD"), true, 'Test 59');
test(judgeCircle("URDLURDLURDLURDL"), true, 'Test 60');
test(judgeCircle("ULDRULDRLDURDLURDLURDLURDLURDL"), false, 'Test 61');
test(judgeCircle("RRDDLLUURRDDLLUURRDDLLUURRDDLLUU"), true, 'Test 62');
test(judgeCircle("LUDRLUDRLUDRLUDRLUDRLUDR"), true, 'Test 63');
test(judgeCircle("LRRLRLRLUDUDUDUD"), true, 'Test 64');
test(judgeCircle("UUDDUUDDUUDDUUDD"), true, 'Test 65');
test(judgeCircle("RRDDUULLRRDDUULL"), true, 'Test 66');
test(judgeCircle("LRUDLRUDLRUD"), true, 'Test 67');
test(judgeCircle("LURDLURDLURDLURD"), true, 'Test 68');
test(judgeCircle("LLLLRRRRUUDDUUDD"), true, 'Test 69');
test(judgeCircle("UDUDLRRLRLUDUDLR"), true, 'Test 70');
test(judgeCircle("LLLLLLLLRRRRRRRRUUUUUUUUDDDDDDDD"), true, 'Test 71');
test(judgeCircle("UDLRUDLRUDLRUDLRUDLRUDLR"), true, 'Test 72');
test(judgeCircle("UUDDDDUUDDDDUUDD"), false, 'Test 73');
test(judgeCircle("LLLLRRRRLLLLRRRR"), true, 'Test 74');
test(judgeCircle("ULLDRRDUULLDRRDU"), true, 'Test 75');
test(judgeCircle("UUDDUUDDUUDDUUDDUUDDUUDDUUDDUUDDUUDDUUDDUUDDUUDDUUDD"), true, 'Test 76');
test(judgeCircle("RRRRRRRRRRLLLLLLLLLLDDDDDDDDDDUUUUUUUUUU"), true, 'Test 77');
test(judgeCircle("RLRLRLRLRL"), true, 'Test 78');
test(judgeCircle("LLLLDDDDUUUURRRR"), true, 'Test 79');
test(judgeCircle("UUDDLLRRUUDDDDLLRRUUDDLLRR"), false, 'Test 80');
test(judgeCircle("LLRRUUDDUUDDLLRR"), true, 'Test 81');
test(judgeCircle("LRRLRLRLUDUDUDUDLRRLRLRLUDUDUDUD"), true, 'Test 82');
test(judgeCircle("RLRLRLRLRLRLRLRLRLRL"), true, 'Test 83');
test(judgeCircle("UUDDUURRDD"), false, 'Test 84');
test(judgeCircle("UUDDUULLRR"), false, 'Test 85');
test(judgeCircle("RRRRDDDDLLLLUUUU"), true, 'Test 86');
test(judgeCircle("UDLRUDLRUDLRUDLRUDLRUDLRUDLRUDLR"), true, 'Test 87');
test(judgeCircle("LLLLRRRRUUUDDDUUUDDDLLLLRRRR"), true, 'Test 88');
test(judgeCircle("UUUUUUUUDDDDDDDDLLLLLLLLRRRRRRRRRRLLRRUUDDLL"), true, 'Test 89');
test(judgeCircle("DDUUUUDDLLRRRR"), false, 'Test 90');
test(judgeCircle("UUDDLLUURRDDDDLLRR"), false, 'Test 91');
test(judgeCircle("RURURURURURURULULULULULULULU"), false, 'Test 92');
test(judgeCircle("UUUUUUDDDDDDLLLLRRRRRR"), false, 'Test 93');
test(judgeCircle("UUDDDDLLLLRRRRUUDDDD"), false, 'Test 94');
test(judgeCircle("LLLLLLLLRRRRRRRRUUUUUUUUDDDDDDDDLLLLLLLLRRRRRRRRUUUUUUUUDDDDDDDD"), true, 'Test 95');
test(judgeCircle("RRRDDDLLLUUUUUDDDD"), false, 'Test 96');
test(judgeCircle("UUUUUUUUUUDDDDDDDDDDLLLLLLLLRRRRRRRRRR"), false, 'Test 97');
test(judgeCircle("RUDLRUDLRUDLRUDL"), true, 'Test 98');
test(judgeCircle("UUDDLLRRUUDDLLRRUUDDLLRR"), true, 'Test 99');
test(judgeCircle("RUDLRULDRLUDLRULDRLUDLRULDRL"), false, 'Test 100');
test(judgeCircle("UDUDUDUDUDUDUDUDUDUDUDUD"), true, 'Test 101');
test(judgeCircle("URDLURDLURDL"), true, 'Test 102');
test(judgeCircle("UUDDDDDDDLLLLRRRRUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUDDDDDDDLLLLRRRR"), false, 'Test 103');
test(judgeCircle("RRDDLLUURRDDLLUU"), true, 'Test 104');
test(judgeCircle("UUUUUUUUDDDDDDDDLLLLRRRR"), true, 'Test 105');
test(judgeCircle("RRRLLLLDDDUUUUUDDDLLLLURRRDDDDUUU"), false, 'Test 106');
test(judgeCircle("DDDDLLLLUUUUUUUUDDDDLLLLRRRRRRRR"), true, 'Test 107');
test(judgeCircle("UDUDUDUDLRRLRLRL"), true, 'Test 108');
test(judgeCircle("LURDLURDLURDLURDLURDLURDLURDLURDL"), false, 'Test 109');
test(judgeCircle("UUUUUUUUDDDDDDDDLLLLRRRRRRRR"), false, 'Test 110');
test(judgeCircle("RRUUDDLLDDUURLLR"), true, 'Test 111');
test(judgeCircle("ULURDLDRULURDLDRULURDLDRULURDLDR"), true, 'Test 112');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

