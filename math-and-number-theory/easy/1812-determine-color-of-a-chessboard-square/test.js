// Test: 1812. Determine Color Of A Chessboard Square
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { squareIsWhite } = require("./solution");

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

console.log("\n1812. Determine Color Of A Chessboard Square\n");

test(squareIsWhite("d5"), true, 'Test 1');
test(squareIsWhite("e4"), true, 'Test 2');
test(squareIsWhite("b8"), false, 'Test 3');
test(squareIsWhite("b2"), false, 'Test 4');
test(squareIsWhite("a1"), false, 'Test 5');
test(squareIsWhite("g8"), true, 'Test 6');
test(squareIsWhite("e5"), false, 'Test 7');
test(squareIsWhite("d4"), false, 'Test 8');
test(squareIsWhite("g2"), true, 'Test 9');
test(squareIsWhite("e6"), true, 'Test 10');
test(squareIsWhite("f6"), false, 'Test 11');
test(squareIsWhite("h3"), true, 'Test 12');
test(squareIsWhite("f4"), false, 'Test 13');
test(squareIsWhite("c7"), false, 'Test 14');
test(squareIsWhite("d3"), true, 'Test 15');
test(squareIsWhite("g7"), false, 'Test 16');
test(squareIsWhite("a7"), false, 'Test 17');
test(squareIsWhite("c8"), true, 'Test 18');
test(squareIsWhite("f2"), false, 'Test 19');
test(squareIsWhite("f1"), true, 'Test 20');
test(squareIsWhite("g1"), false, 'Test 21');
test(squareIsWhite("b3"), true, 'Test 22');
test(squareIsWhite("h5"), true, 'Test 23');
test(squareIsWhite("e1"), false, 'Test 24');
test(squareIsWhite("p2"), false, 'Test 25');
test(squareIsWhite("a5"), false, 'Test 26');
test(squareIsWhite("d7"), true, 'Test 27');
test(squareIsWhite("g5"), false, 'Test 28');
test(squareIsWhite("b6"), false, 'Test 29');
test(squareIsWhite("f5"), true, 'Test 30');
test(squareIsWhite("h1"), true, 'Test 31');
test(squareIsWhite("j7"), true, 'Test 32');
test(squareIsWhite("e3"), false, 'Test 33');
test(squareIsWhite("c3"), false, 'Test 34');
test(squareIsWhite("g4"), true, 'Test 35');
test(squareIsWhite("a4"), true, 'Test 36');
test(squareIsWhite("v1"), true, 'Test 37');
test(squareIsWhite("d6"), false, 'Test 38');
test(squareIsWhite("b1"), true, 'Test 39');
test(squareIsWhite("g6"), true, 'Test 40');
test(squareIsWhite("h6"), false, 'Test 41');
test(squareIsWhite("c1"), false, 'Test 42');
test(squareIsWhite("h7"), true, 'Test 43');
test(squareIsWhite("r8"), false, 'Test 44');
test(squareIsWhite("b7"), true, 'Test 45');
test(squareIsWhite("c4"), true, 'Test 46');
test(squareIsWhite("c2"), true, 'Test 47');
test(squareIsWhite("f3"), true, 'Test 48');
test(squareIsWhite("h4"), false, 'Test 49');
test(squareIsWhite("n5"), true, 'Test 50');
test(squareIsWhite("d8"), false, 'Test 51');
test(squareIsWhite("b4"), false, 'Test 52');
test(squareIsWhite("a8"), true, 'Test 53');
test(squareIsWhite("a3"), false, 'Test 54');
test(squareIsWhite("e2"), true, 'Test 55');
test(squareIsWhite("e7"), false, 'Test 56');
test(squareIsWhite("f7"), true, 'Test 57');
test(squareIsWhite("d2"), false, 'Test 58');
test(squareIsWhite("a2"), true, 'Test 59');
test(squareIsWhite("b5"), true, 'Test 60');
test(squareIsWhite("c5"), false, 'Test 61');
test(squareIsWhite("h8"), false, 'Test 62');
test(squareIsWhite("a6"), true, 'Test 63');
test(squareIsWhite("m4"), true, 'Test 64');
test(squareIsWhite("z9"), true, 'Test 65');
test(squareIsWhite("h2"), false, 'Test 66');
test(squareIsWhite("t3"), true, 'Test 67');
test(squareIsWhite("x5"), true, 'Test 68');
test(squareIsWhite("g3"), false, 'Test 69');
test(squareIsWhite("l6"), false, 'Test 70');
test(squareIsWhite("d1"), true, 'Test 71');
test(squareIsWhite("f8"), false, 'Test 72');
test(squareIsWhite("e8"), true, 'Test 73');
test(squareIsWhite("c6"), true, 'Test 74');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

