// Test: 2120. Execution Of All Suffix Instructions Staying In A Grid
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { executeInstructions } = require("./solution");

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

console.log("\n2120. Execution Of All Suffix Instructions Staying In A Grid\n");

test(executeInstructions(1, [0,0], "LRUD"), [0, 0, 0, 0], 'Test 1');
test(executeInstructions(4, [2,2], "DDDD"), [1, 1, 1, 1], 'Test 2');
test(executeInstructions(5, [2,2], "LUDDRL"), [6, 5, 4, 3, 2, 1], 'Test 3');
test(executeInstructions(4, [0,3], "RRRR"), [0, 0, 0, 0], 'Test 4');
test(executeInstructions(3, [2,0], "RRU"), [3, 2, 1], 'Test 5');
test(executeInstructions(500, [250,250], "LRUD" * 125), Error: Solution.executeInstructions[] missing 1 required positional argument: 's', 'Test 6');
test(executeInstructions(4, [1,2], "LURDLU"), [6, 5, 4, 3, 2, 1], 'Test 7');
test(executeInstructions(4, [2,2], "UUDDLLRR"), [8, 7, 1, 5, 4, 3, 1, 1], 'Test 8');
test(executeInstructions(3, [0,1], "RRDDLU"), [1, 5, 4, 3, 1, 0], 'Test 9');
test(executeInstructions(4, [3,0], "DDDD"), [0, 0, 0, 0], 'Test 10');
test(executeInstructions(5, [0,0], "DRDLUR"), [6, 5, 1, 0, 0, 1], 'Test 11');
test(executeInstructions(2, [1,1], "LURD"), [4, 1, 0, 0], 'Test 12');
test(executeInstructions(5, [3,3], "DDDDRRRRUUUULLLL"), [1, 1, 1, 2, 1, 1, 1, 4, 3, 6, 5, 4, 3, 3, 2, 1], 'Test 13');
test(executeInstructions(3, [0,2], "LLD"), [3, 2, 1], 'Test 14');
test(executeInstructions(4, [2,2], "UDLRUDLR"), [8, 7, 6, 5, 4, 3, 2, 1], 'Test 15');
test(executeInstructions(500, [250,250], "LURD" * 125), Error: Solution.executeInstructions[] missing 1 required positional argument: 's', 'Test 16');
test(executeInstructions(5, [0,0], "RRRRUUUUDDDDLLLL"), [4, 3, 2, 1, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0], 'Test 17');
test(executeInstructions(5, [3,3], "RRRDDDDLLLLUUUU"), [1, 1, 2, 1, 1, 1, 4, 3, 6, 5, 4, 3, 3, 2, 1], 'Test 18');
test(executeInstructions(7, [3,3], "LDRURLDRU"), [9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 19');
test(executeInstructions(15, [14,0], "LLLLDDDDDDDDDDDDUUUUUUUUUUUUUUUU"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 14, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 20');
test(executeInstructions(6, [2,2], "UDLRUDLR"), [8, 7, 6, 5, 4, 3, 2, 1], 'Test 21');
test(executeInstructions(8, [1,6], "RULDDRRULLUUDD"), [6, 10, 12, 3, 2, 1, 4, 3, 3, 2, 1, 3, 2, 1], 'Test 22');
test(executeInstructions(9, [8,0], "DDDDDDDDDDDDDDDDDD"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 23');
test(executeInstructions(5, [0,4], "LLLLDDRRRRUUUU"), [12, 8, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 24');
test(executeInstructions(13, [1,1], "LRRUDLRLRLUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUDUD"), [94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 25');
test(executeInstructions(8, [0,0], "RRRRDDDDLLLLUUUUDDDDLLLLUUUU"), [20, 10, 8, 6, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 26');
test(executeInstructions(10, [7,2], "DRLLURDDRLUUDDRR"), [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 27');
test(executeInstructions(7, [3,3], "LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLR"), [34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 28');
test(executeInstructions(5, [4,4], "LULULULULULULULULULU"), [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 29');
test(executeInstructions(6, [0,5], "LLLLDDRRUUDDLLRRUUDDLLRRUUDD"), [28, 27, 26, 4, 2, 1, 0, 0, 0, 0, 18, 6, 4, 2, 0, 0, 0, 0, 10, 6, 4, 2, 0, 0, 0, 0, 2, 1], 'Test 30');
test(executeInstructions(10, [5,5], "LRUDLRUDLRUD"), [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 31');
test(executeInstructions(8, [7,0], "RRRRDDDDLLLLUUUU"), [4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 2, 1], 'Test 32');
test(executeInstructions(6, [2,3], "LRRUDLRLRLUDUDUDUD"), [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 33');
test(executeInstructions(11, [3,3], "LRRLDDUUDDUUDDRRLLRRRRUUUUDDDDLLLL"), [34, 33, 32, 31, 30, 29, 19, 27, 26, 25, 15, 23, 22, 21, 11, 10, 9, 8, 7, 6, 5, 4, 3, 10, 9, 8, 7, 6, 5, 4, 3, 3, 2, 1], 'Test 34');
test(executeInstructions(400, [0,0], "RRRRUUUUDDDDLLLL"), [4, 3, 2, 1, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0], 'Test 35');
test(executeInstructions(7, [0,6], "LLLLLLLLLLLLLLLLLLL"), [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1], 'Test 36');
test(executeInstructions(6, [3,3], "LURDLURDLURDLURD"), [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 37');
test(executeInstructions(7, [0,6], "LLLLLLLLRRRRRRRRUUUUUUUDDDDDDD"), [6, 6, 12, 10, 8, 6, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 5, 4, 3, 2, 1], 'Test 38');
test(executeInstructions(7, [3,3], "LLLLDDDDRRRRUUUU"), [3, 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3, 3, 2, 1], 'Test 39');
test(executeInstructions(9, [4,4], "LURDLURDLURDLURD"), [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 40');
test(executeInstructions(5, [2,2], "LRLRLRLRLRLRLRLR"), [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 41');
test(executeInstructions(300, [299,299], "DDDDRRRRUUUULLLL"), [0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 42');
test(executeInstructions(12, [5,5], "UDLRUDLRUDLRUDLRUDLR"), [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 43');
test(executeInstructions(10, [5,2], "DDUUDDUUDDUUDDUUDDUUDDUUDDUUDDUU"), [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 44');
test(executeInstructions(500, [250,250], "RLUD" * 125), Error: Solution.executeInstructions[] missing 1 required positional argument: 's', 'Test 45');
test(executeInstructions(6, [5,0], "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU"), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 1], 'Test 46');
test(executeInstructions(15, [14,14], "LLLLLLLLLLLLLLL"), [14, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 47');
test(executeInstructions(9, [4,4], "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU"), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1], 'Test 48');
test(executeInstructions(6, [0,5], "DDDDDDRRRRRDDDRRLUUL"), [5, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 1, 0, 0, 1], 'Test 49');
test(executeInstructions(8, [7,0], "RRRRRRRRUUUUUUUUDDDDDDDDLLLLLLLL"), [7, 14, 13, 12, 11, 10, 9, 8, 7, 14, 12, 10, 8, 6, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 50');
test(executeInstructions(5, [0,4], "LLLLDDDDRRRRUUUU"), [16, 10, 8, 6, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 51');
test(executeInstructions(5, [0,4], "RRRRRRRRRRRRRRRRRRRR"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 52');
test(executeInstructions(9, [1,1], "DRDLDRDLDRDLDRDLDRDLDRDLDRDLDRDL"), [14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 53');
test(executeInstructions(7, [3,3], "LUDDRRUULLDD"), [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 54');
test(executeInstructions(5, [0,0], "RLRLRLRLRLRLRLRLRLRL"), [20, 0, 18, 0, 16, 0, 14, 0, 12, 0, 10, 0, 8, 0, 6, 0, 4, 0, 2, 0], 'Test 55');
test(executeInstructions(10, [5,5], "LLLLUUUUDDDDRRRRLLLLUUUUDDDDRRRR"), [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 56');
test(executeInstructions(5, [2,2], "DDRRUULLUU"), [10, 8, 6, 5, 4, 4, 4, 3, 2, 1], 'Test 57');
test(executeInstructions(8, [1,1], "DDDDUUUUDDDDUUUUDDDDUUUUDDDDUUUUDDDDUUUU"), [40, 39, 5, 3, 1, 1, 1, 33, 32, 31, 5, 3, 1, 1, 1, 25, 24, 23, 5, 3, 1, 1, 1, 17, 16, 15, 5, 3, 1, 1, 1, 9, 8, 7, 5, 3, 1, 1, 1, 1], 'Test 58');
test(executeInstructions(6, [4,5], "RRRDDDDLUUUULLLRRUUDD"), [0, 0, 0, 1, 1, 1, 12, 10, 9, 9, 11, 10, 9, 8, 2, 0, 0, 4, 3, 1, 1], 'Test 59');
test(executeInstructions(12, [6,6], "RRDDLLUUDDRRLLUUDDRRLLUUDDRRLLUUDDRRLLUUDD"), [42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 60');
test(executeInstructions(11, [5,5], "DDDDDDDDDDDDLLLLLLLLLLLLUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU"), [5, 5, 5, 5, 5, 5, 5, 10, 9, 8, 7, 6, 5, 5, 5, 5, 5, 5, 5, 10, 9, 8, 7, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 1], 'Test 61');
test(executeInstructions(20, [19,0], "RRRRRRRRRRRRRRRRRRRRLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"), [19, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 62');
test(executeInstructions(8, [4,4], "UDLRUDLRUDLRUDLR"), [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 63');
test(executeInstructions(4, [2,3], "LLLDDDLLLLUUUUDDDD"), [4, 3, 2, 1, 1, 4, 3, 5, 4, 3, 2, 2, 5, 3, 1, 1, 1, 1], 'Test 64');
test(executeInstructions(5, [4,0], "DDDDDDDDDDDDDDDDDDDD"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 65');
test(executeInstructions(10, [5,5], "UUUUDDDDLLLLRRRR"), [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 66');
test(executeInstructions(8, [7,7], "LLLLUUUUDDDDRRRRLLLLUUUUDDDD"), [28, 14, 12, 10, 8, 6, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 11, 10, 9, 8, 6, 4, 2, 0, 0, 0, 0], 'Test 67');
test(executeInstructions(6, [4,1], "LDDRRULUDR"), [2, 1, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 68');
test(executeInstructions(7, [6,6], "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU"), [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1], 'Test 69');
test(executeInstructions(5, [2,2], "LUDDRRUUDDLL"), [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 70');
test(executeInstructions(4, [2,0], "RRRDDDLLLLUUUUDDDD"), [4, 3, 2, 1, 1, 1, 0, 0, 0, 0, 2, 2, 5, 3, 1, 1, 1, 1], 'Test 71');
test(executeInstructions(250, [125,125], "LURD" * 62 + "LUR"), Error: Solution.executeInstructions[] missing 1 required positional argument: 's', 'Test 72');
test(executeInstructions(5, [2,2], "RRDDLLUUURRDDDLLUUU"), [19, 18, 17, 16, 4, 3, 2, 12, 11, 4, 3, 2, 7, 6, 4, 3, 2, 2, 1], 'Test 73');
test(executeInstructions(10, [0,0], "RRRDDDLLLUUUDDDRRRLUUDLLUURDDLL"), [30, 7, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 18, 12, 6, 4, 3, 2, 0, 0, 0, 1, 0, 0, 0, 0, 4, 2, 1, 0, 0], 'Test 74');
test(executeInstructions(3, [1,1], "RLLDDRRUUULLDD"), [4, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1], 'Test 75');
test(executeInstructions(9, [4,4], "DDDDDDDDUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU"), [4, 4, 4, 4, 12, 10, 8, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1], 'Test 76');
test(executeInstructions(6, [2,2], "LRLRLRLRLRLRLR"), [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 77');
test(executeInstructions(8, [0,7], "RRRRRRRRUUUUUUUUDDDDDDDDLDDDDDDD"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 78');
test(executeInstructions(9, [8,0], "RRRRRRRRDDDDDDDDDLLLLLLLLLLLLUUUUUUUUUUUUUUUU"), [8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 79');
test(executeInstructions(12, [0,11], "LLLLLLLLLLLL"), [11, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 80');
test(executeInstructions(9, [5,4], "UUDDLLRRUUDDLLRR"), [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 81');
test(executeInstructions(10, [5,5], "UUUUDDDDLLLLRRRRUUUUDDDDLLLLRRRR"), [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 82');
test(executeInstructions(20, [10,10], "LDRURLDRURLDRURLDRU"), [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 83');
test(executeInstructions(15, [7,7], "RRRRUUUULLLLDDDDRRRRUUUULLLLDDDD"), [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 84');
test(executeInstructions(7, [3,3], "UUUUDDDDLLLLRRRRUUDDLL"), [3, 10, 9, 8, 3, 6, 5, 4, 3, 13, 12, 11, 3, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 85');
test(executeInstructions(9, [0,8], "LLLLLLLLUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU"), [8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 86');
test(executeInstructions(7, [1,1], "DDRRLLUUDDRRLLUUDDRRLLUU"), [24, 23, 5, 4, 1, 2, 1, 17, 16, 15, 5, 4, 1, 2, 1, 9, 8, 7, 5, 4, 1, 2, 1, 1], 'Test 87');
test(executeInstructions(10, [2,5], "RRLLRRLLRRLLRRLLRRLLRRLLRRLLRRLL"), [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 88');
test(executeInstructions(10, [5,5], "UUUUUUUUUUDDDDDDDDDDLLLLLLLLLLRRRRRRRRRR"), [5, 5, 5, 5, 5, 14, 12, 10, 8, 6, 4, 4, 4, 4, 4, 4, 9, 8, 7, 6, 5, 5, 5, 5, 5, 14, 12, 10, 8, 6, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1], 'Test 89');
test(executeInstructions(10, [9,0], "RRRRRRRRRRUUUUUUUUUUDDDDDDDDDDDLLLLLLLLLL"), [9, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 90');
test(executeInstructions(12, [6,6], "UUUUUUUUUUUUDDDDDDDDDDDDLLLLLLLLLLLLRRRRRRRRRRRR"), [6, 6, 6, 6, 6, 6, 17, 15, 13, 11, 9, 7, 5, 5, 5, 5, 5, 5, 5, 11, 10, 9, 8, 7, 6, 6, 6, 6, 6, 6, 17, 15, 13, 11, 9, 7, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 1], 'Test 91');
test(executeInstructions(8, [3,4], "RRDLULLLUUDDDDRRRRLU"), [20, 19, 18, 17, 16, 15, 14, 13, 9, 8, 7, 6, 5, 4, 3, 5, 4, 3, 2, 1], 'Test 92');
test(executeInstructions(10, [5,5], "LURDLURDLURDLURDLURDLURD"), [24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

