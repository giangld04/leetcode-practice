// Test: 1896. Minimum Cost To Change The Final Value Of Expression
// 173 test cases from LeetCodeDataset
// Run: node test.js

const { minOperationsToFlip } = require("./solution");

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

console.log("\n1896. Minimum Cost To Change The Final Value Of Expression\n");

test(minOperationsToFlip("[1&[0|1&[0|1]]]"), 1, 'Test 1');
test(minOperationsToFlip("[0&1&1]|[0|1]"), 1, 'Test 2');
test(minOperationsToFlip("[1&1]|[0&0]"), 1, 'Test 3');
test(minOperationsToFlip("[1&[[0&0]|[1|1]]]"), 1, 'Test 4');
test(minOperationsToFlip("1&[1&[1&[1&1]]]"), 1, 'Test 5');
test(minOperationsToFlip("[[1|1]&[0|0]]"), 1, 'Test 6');
test(minOperationsToFlip("1&[0|1]"), 1, 'Test 7');
test(minOperationsToFlip("[[1&1]|[0&0]]"), 1, 'Test 8');
test(minOperationsToFlip("[1&1&1]|[1|1|1]"), 2, 'Test 9');
test(minOperationsToFlip("1|1|0&1"), 1, 'Test 10');
test(minOperationsToFlip("[0&0]|[[1&1]|[0&1]]"), 1, 'Test 11');
test(minOperationsToFlip("[1&[[1&1]&[1&1]]]"), 1, 'Test 12');
test(minOperationsToFlip("[[1&0]|[1&1]]"), 1, 'Test 13');
test(minOperationsToFlip("[0&0&0]|[0|0|0]"), 1, 'Test 14');
test(minOperationsToFlip("0|1&[1|0]&1"), 1, 'Test 15');
test(minOperationsToFlip("1|1|[0&0]&1"), 1, 'Test 16');
test(minOperationsToFlip("[[[0|1]&1]|[0&0]]"), 1, 'Test 17');
test(minOperationsToFlip("[1&[[0&1]|0]]"), 1, 'Test 18');
test(minOperationsToFlip("[0|[1|0&1]]"), 1, 'Test 19');
test(minOperationsToFlip("[0|[[0|0]|[0|0]]]"), 1, 'Test 20');
test(minOperationsToFlip("[1&0]|[1&1]"), 1, 'Test 21');
test(minOperationsToFlip("[0&0]&[0&0&0]"), 3, 'Test 22');
test(minOperationsToFlip("[0|[0|[0|[0|0]]]]"), 1, 'Test 23');
test(minOperationsToFlip("[[1|0]&[0|1]]"), 1, 'Test 24');
test(minOperationsToFlip("[1|0|0]&[1&1]"), 1, 'Test 25');
test(minOperationsToFlip("[[1&0]|[1|0]]"), 1, 'Test 26');
test(minOperationsToFlip("[1&[1&[1&[1&1]]]]"), 1, 'Test 27');
test(minOperationsToFlip("[1&1&1]|[0|0|0]"), 1, 'Test 28');
test(minOperationsToFlip("[1|[0&[1|0]]]"), 1, 'Test 29');
test(minOperationsToFlip("[0&1]|[[1|0]&[0|1]]"), 1, 'Test 30');
test(minOperationsToFlip("0|[0|[0|[0|0]]]"), 1, 'Test 31');
test(minOperationsToFlip("[1&[0|[1&0]]]"), 1, 'Test 32');
test(minOperationsToFlip("[[1&[1|0]]&[0|1]]"), 1, 'Test 33');
test(minOperationsToFlip("[0&[[[0|1]&[1|0]]|[[1&0]|[0|1]]]]"), 1, 'Test 34');
test(minOperationsToFlip("[[0&[[[1|0]|[0&1]]&[1&1]]]|[[1|0]|[0|1]]]&[1|0]"), 1, 'Test 35');
test(minOperationsToFlip("[[0&[1|0]]&[0&[1|0]]&[0&[1|0]]]"), 2, 'Test 36');
test(minOperationsToFlip("[0|[[1&0]|[0|1]&[[1|0]&[1|0]]]]"), 1, 'Test 37');
test(minOperationsToFlip("[[1&[[1|0]|[0|1]]]&[[0&0]|[1&[1&[1&1]]]]]"), 1, 'Test 38');
test(minOperationsToFlip("[[0|1]&[1|[0|1&0]]&[1|[0&[1|0]]]]"), 1, 'Test 39');
test(minOperationsToFlip("[[1&[[0|1]&[0|1]]]|[[0&[1|0]]&[1|0]]]"), 1, 'Test 40');
test(minOperationsToFlip("[[[0|0]|[1|1]]&[[0|0]|[1|1]]&[[0|0]|[1|1]]&[[0|0]|[1|1]]]"), 1, 'Test 41');
test(minOperationsToFlip("[[[1|0]|[0&1]]&[[0|1]|[0&1]]&[[1|0]|[0&1]]&[[0|1]|[0&1]]]"), 1, 'Test 42');
test(minOperationsToFlip("[[0&0]&[0&0]&[1|1]&[[0|0]|[1|1]]]"), 1, 'Test 43');
test(minOperationsToFlip("[[1&0]|[0|1]&[[1|0]&[1|0]]]"), 1, 'Test 44');
test(minOperationsToFlip("[[1|0]&[1&0]|[0|1]&[1|0]]"), 1, 'Test 45');
test(minOperationsToFlip("[[1|0]|[0&1]&[0|1]]"), 1, 'Test 46');
test(minOperationsToFlip("[1|[[[1|0]&[0|1]]]&[[[0&1]|[1&1]]&[1|0]]]|[0|1]"), 2, 'Test 47');
test(minOperationsToFlip("[[0&[1|0]&[1|0]]|[0&[0|1]&[0|1]]]"), 1, 'Test 48');
test(minOperationsToFlip("[[[0|1]&[0|1]]&[[1&0]|[1&0]]&[[0|1]&[0|1]]&[[1&0]|[1&0]]]"), 2, 'Test 49');
test(minOperationsToFlip("[[[1|1]|[0|0]]&[1&[1&[1&1]]]]"), 1, 'Test 50');
test(minOperationsToFlip("[[1&0]|[[0&1]|[1|[[1&0]|[0|1]]]]]"), 1, 'Test 51');
test(minOperationsToFlip("[[[0&[1|0]]&[1&[[0&1]|[1|0]]]]|[[1&0]|[0&[[1&0]|[0&1]]]]]"), 1, 'Test 52');
test(minOperationsToFlip("[[[1|0]&[0|1]]&[[1|0]&[0|1]]]|[1&[0|[[1&1]|[0&0]]]]"), 2, 'Test 53');
test(minOperationsToFlip("[[[0|1]&[1|0]]|[[1&[0|1]]|[0&1]]]"), 2, 'Test 54');
test(minOperationsToFlip("[0|[[1&0]|[0|1]&[[1|0]|[0|1]&[1|0]]]]"), 1, 'Test 55');
test(minOperationsToFlip("[[[0|1]|[1&0]]&[[0&1]|[1|0]]]"), 1, 'Test 56');
test(minOperationsToFlip("[[1&0]|[1&0]|[0|1]&[0|1]]"), 1, 'Test 57');
test(minOperationsToFlip("[1|[[[1|0]&[1|0]]|[[0&1]|[0&1]]]]"), 2, 'Test 58');
test(minOperationsToFlip("[1&[0|[[1&1]|[0|0]]]]"), 1, 'Test 59');
test(minOperationsToFlip("[1&[[[0|1]&[0|1]]&[[1|0]|[0|1]&[1|0]]]]"), 1, 'Test 60');
test(minOperationsToFlip("[[0&[[0&1]|[1|0]]]|[[1&[[0&1]|[1|0]]]&[1&[0&[1|0]]]]]"), 1, 'Test 61');
test(minOperationsToFlip("[[1&0]|[0|1]&[[1|0]|[0|1]&[1|0]]]"), 1, 'Test 62');
test(minOperationsToFlip("[1|[0&[1|0]]|[0&1]]"), 1, 'Test 63');
test(minOperationsToFlip("[0|[[1&1]|[0&0]]]&[1&[0|[[1&1]|[0&0]]]]"), 1, 'Test 64');
test(minOperationsToFlip("[1|[[[0&[1|0]]|[1&0]]&[[1|0]&[0|1]]]]"), 1, 'Test 65');
test(minOperationsToFlip("[[[1|0]&[0|1]]|[[0&1]|[1|0]]|[[1|0]&[0|1]]|[[0&1]|[1|0]]]"), 2, 'Test 66');
test(minOperationsToFlip("[[[1&0]|[0&1]]&[[0&[1|0]]|[1&[[0&1]|[1|0]]]]]"), 1, 'Test 67');
test(minOperationsToFlip("[[[1&0]|[0|1]]&[[1|0]|[0&1]]]"), 1, 'Test 68');
test(minOperationsToFlip("[[1&0]|[1&1]]&[1|0]"), 1, 'Test 69');
test(minOperationsToFlip("[[[1|1]|[0&0]]&[[1&1]|[0|0]]|[1|0]]"), 2, 'Test 70');
test(minOperationsToFlip("[[1|[[0&0]|[1&1]]]&[1|0]]|[[0|1]&[1&1]]"), 2, 'Test 71');
test(minOperationsToFlip("[[[1|0]&1]|[0&[1|0]]]"), 1, 'Test 72');
test(minOperationsToFlip("[[0&1]|[1&[0|1]]]&[[1&0]|[1|1]]"), 1, 'Test 73');
test(minOperationsToFlip("[1&[[0|1]&[0|1]]&[0|1]]"), 1, 'Test 74');
test(minOperationsToFlip("[[0|1]|[1|0]&[0|1]&[0|1]]&[[0|1]|[0|1]]"), 1, 'Test 75');
test(minOperationsToFlip("[1&[[0&1]|[0&[1|0]]&[1|0]]]"), 1, 'Test 76');
test(minOperationsToFlip("[1|[[1|0]&[0|1]]]|[[[0&1]|[1&1]]&[1|0]]"), 2, 'Test 77');
test(minOperationsToFlip("[[0&[[1|0]&[0|1]]]|[[0&[1|0]]&[1|0]]]"), 1, 'Test 78');
test(minOperationsToFlip("[[[0|1]&[0|1]]&[[1|0]|[0|1]&[1|0]]]"), 1, 'Test 79');
test(minOperationsToFlip("[1&[[[0&0]|[1|1]]&[1&[[0&0]|[1|1]]]]]|[[1&[0|[[1&1]|[0&0]]]]&[1|0]]"), 2, 'Test 80');
test(minOperationsToFlip("[[[1&1]&[0|0]]|[1|0]&[[1&0]|[0|1]]&[1|0]]"), 1, 'Test 81');
test(minOperationsToFlip("[[1|[0&[1&0]]]&[0|[1|0]]]"), 1, 'Test 82');
test(minOperationsToFlip("[[1&[0|1]]|[0&[1|0]]]"), 1, 'Test 83');
test(minOperationsToFlip("[[[0|1]|[0&1]]&[1|[0&0]&[1|0]]]"), 1, 'Test 84');
test(minOperationsToFlip("[1|[[0|1]&[0&1]]|[1&0]]"), 1, 'Test 85');
test(minOperationsToFlip("[[1&0]|[1&[0|1]]|[0&[1|0]]]"), 1, 'Test 86');
test(minOperationsToFlip("[[0|[1&0]]&[[[1|0]&[0|1]]|[[0&1]|[1|0]]]]"), 1, 'Test 87');
test(minOperationsToFlip("[1&[[[0|1]|[1&0]]&[0|1]]]"), 1, 'Test 88');
test(minOperationsToFlip("[[[1&[0|1]]&[[1&0]|[0&1]]]|[[0&[1|0]]&[1&[[0&1]|[1|0]]]]]"), 1, 'Test 89');
test(minOperationsToFlip("[[0|1]|[[1&[0|1]]&[0|1]]]"), 2, 'Test 90');
test(minOperationsToFlip("[[0&1]|[0&1]|[0&1]|[0&1]]"), 1, 'Test 91');
test(minOperationsToFlip("[0|[1&0]|[0|1]&[1|0]]"), 1, 'Test 92');
test(minOperationsToFlip("[[1&[0|[[1|0]&[1|0]]]]&[[1&[0|[[1|0]&[1|0]]]]&[[1&[0|[[1|0]&[1|0]]]]]]"), 1, 'Test 93');
test(minOperationsToFlip("[1|[[0&0]|[1&[0|1]]]]"), 2, 'Test 94');
test(minOperationsToFlip("[0|[[1&[[0|1]|[1|0]]]&[1|0]]]"), 1, 'Test 95');
test(minOperationsToFlip("[[0|[[1&0]|[0|1]]]&[[[1|0]&[0|1]]|[[0&1]|[1|0]]]]"), 1, 'Test 96');
test(minOperationsToFlip("[1&[[0|0]|[1&0]]&[0&[1|0]]&[0|1]]"), 1, 'Test 97');
test(minOperationsToFlip("[[[1|1]|[0|0]]&[1&0]]|[0|1]"), 1, 'Test 98');
test(minOperationsToFlip("[1&[0|[[0|0]&[0|0]]]]|[[1|0]&[1&1]]"), 1, 'Test 99');
test(minOperationsToFlip("[[1&[0|1]]&[1|0]]"), 1, 'Test 100');
test(minOperationsToFlip("[1|[[1|0]|[0|1]]&[0&1]]"), 1, 'Test 101');
test(minOperationsToFlip("[[1&1]|[0&[1|0]]]"), 1, 'Test 102');
test(minOperationsToFlip("[0|[[1&0]|[0|1]&[1|0]]]"), 1, 'Test 103');
test(minOperationsToFlip("[1|[[0&[1|0]]&[1&[0|1&0]]]]"), 1, 'Test 104');
test(minOperationsToFlip("[[0&[1|1]]|[[1&0]|[0&1]]]"), 1, 'Test 105');
test(minOperationsToFlip("[1&[[[1|0]|[0&1]]&[1&1]]]|[[0|1]&[1&1]]"), 2, 'Test 106');
test(minOperationsToFlip("[[[0|1]&[0|1]]&[[1|0]&[1|0]]]"), 1, 'Test 107');
test(minOperationsToFlip("[[[0|1]&[1|0]]&[[1&0]|[0|1]]]"), 1, 'Test 108');
test(minOperationsToFlip("[[1&[[0&1]|[1|0]]]&[[1|0]|[0&[1|0]]]]|[[1&[0|[[1&1]|[0&0]]]]&[1|0]]"), 2, 'Test 109');
test(minOperationsToFlip("[[[0&0]|[1&[0|1]]]&[[1|0]|[0&[[0&1]|[1|0]]]]]"), 1, 'Test 110');
test(minOperationsToFlip("[[[0|1]&[1|0]]|[[1&0]|[0&1]]]"), 1, 'Test 111');
test(minOperationsToFlip("[1&[[1|0]|[0|1]]&[0&[1|0]]&[0|1]&[[0|0]&[1|1]]]"), 2, 'Test 112');
test(minOperationsToFlip("[[1&[1&[1&0]]]|[[0|1]|[0&1]]]"), 1, 'Test 113');
test(minOperationsToFlip("[[1|0]&[0|1]|[0&[1|0]]]"), 1, 'Test 114');
test(minOperationsToFlip("[0|[[1|0]&[0|1]]&[1|0]]"), 1, 'Test 115');
test(minOperationsToFlip("[[1&[0|[[1&0]|[0&1]]]]&[[0&[1|0]]|[1&[0|1]]]]"), 1, 'Test 116');
test(minOperationsToFlip("[[1&[0|1]]&[1&[0|1]]&[1&[0|1]]&[1&[0|1]]]"), 1, 'Test 117');
test(minOperationsToFlip("[1|[[0&[1|0]]|[1&[0|1]]]]"), 2, 'Test 118');
test(minOperationsToFlip("[[1|[[0&[1&0]]|[0|1]]]&[0&[[0&[1|0]]|[1&[0|1]]]]]"), 1, 'Test 119');
test(minOperationsToFlip("[0&[[1&0]|[1|[0&1&0]]]]"), 1, 'Test 120');
test(minOperationsToFlip("[1|[[0&0]&[0|0]]|[0|[1&1]]]"), 2, 'Test 121');
test(minOperationsToFlip("[[[1|1]&[0&0]]|[1&0]]"), 1, 'Test 122');
test(minOperationsToFlip("[[[0|1]&[0|1]]&[1|0]&[1|0]]"), 1, 'Test 123');
test(minOperationsToFlip("[[0|0]&[0|0]&[1|1]|[0|0]&[0|0]]"), 2, 'Test 124');
test(minOperationsToFlip("[0&[[[1|0]|[0&1]]&[1&1]]]|[[1|0]|[0|1]]"), 1, 'Test 125');
test(minOperationsToFlip("[[0&[0|1]]|[0&[0|1]]|[0&[0|1]]|[0&[0|1]]]"), 1, 'Test 126');
test(minOperationsToFlip("[[1&0]|[0|1]&[1|0]]"), 1, 'Test 127');
test(minOperationsToFlip("[[0&1]|[1&[1|0]]]"), 1, 'Test 128');
test(minOperationsToFlip("[[1&[1&1]]|[[0|0]|[0&0]]]"), 1, 'Test 129');
test(minOperationsToFlip("[[1|[0&0]&[1|0]]|[0&[0|1]&[0|1]]&[0&[0|1]&[0|1]]]"), 1, 'Test 130');
test(minOperationsToFlip("[[[1&0]|[0&1]]&[[1&[0|1]]|[0&1]]]"), 1, 'Test 131');
test(minOperationsToFlip("[[0|[[1&[0|1]]|[0&[1|0]]]]&[1&[[0&1]|[1|0]]]]"), 1, 'Test 132');
test(minOperationsToFlip("[[[0|0]&[0|0]]&[[0|0]|[0|0]]]"), 2, 'Test 133');
test(minOperationsToFlip("[1&[[1&[[0&0]|[1|1]]]|[[1|[0|1]]&[0&0]]]]"), 1, 'Test 134');
test(minOperationsToFlip("[[0&[[1|0]|[0|1]]]|[[1&[0|1]]&[0|1]]]"), 1, 'Test 135');
test(minOperationsToFlip("[[[0&[1|0]]|[1&0]]&[[1|0]&[0|1]]]"), 1, 'Test 136');
test(minOperationsToFlip("[[[1&[0|1]]|[0&[1|0]]]|[[1&[0|1]]&[0|1]]]"), 2, 'Test 137');
test(minOperationsToFlip("[[0&[0&0]]|[[1|1]&[1|1]]]"), 1, 'Test 138');
test(minOperationsToFlip("[[1&[0|1]]|[0&[0|1]&[0|1]]]"), 1, 'Test 139');
test(minOperationsToFlip("[1&[[0|1]|[0|1]]&[0&[[1|0]|[1|0]]]]"), 1, 'Test 140');
test(minOperationsToFlip("[[[1&[0|1]]|[0&1]]&[1&[[0|1]|[0&[1|0]]]]]"), 1, 'Test 141');
test(minOperationsToFlip("[[[1|0]&[0|1]]|[0&[1|0]]&[1&[0|1&0]]]"), 1, 'Test 142');
test(minOperationsToFlip("[[1&[0|1]]|[1&0]]"), 1, 'Test 143');
test(minOperationsToFlip("[1&[[[0|1]&[0|1]]&[[1|0]&[1|0]]]]"), 1, 'Test 144');
test(minOperationsToFlip("[1&[0|1&[0|1&[1|0]]]]"), 1, 'Test 145');
test(minOperationsToFlip("[[[1|0]|[0&1]]&[[1|0]|[0&1]]&[[1|0]|[0&1]]&[[1|0]|[0&1]]]"), 1, 'Test 146');
test(minOperationsToFlip("[[[[0|0]|[1&1]]&[[0|1]&[1|0]]]|[[0&1]|[1|0]]]"), 2, 'Test 147');
test(minOperationsToFlip("[1|[[0&0]|[1&0]]&[0&[1|0]]&[0|1]&[[1|0]|[0|1]]]"), 1, 'Test 148');
test(minOperationsToFlip("[[[0|1]&[1|0]]&[0|1]]"), 1, 'Test 149');
test(minOperationsToFlip("[[[1|0]|[0&1]]&[[1&0]|[0|1]]]"), 1, 'Test 150');
test(minOperationsToFlip("[1|[[[0|1]&[1|0]]|[0&[1|0]]]]"), 2, 'Test 151');
test(minOperationsToFlip("[1|[[[1|0]&[0|1]]|[1&[0&1]]]]"), 2, 'Test 152');
test(minOperationsToFlip("[[[1&0]|[1|0]]&[[1&1]|[0|0]]]"), 1, 'Test 153');
test(minOperationsToFlip("[[0|1]|[[0&1]&[1|0]]&[1&[0|[[1&1]|[0&0]]]]]"), 1, 'Test 154');
test(minOperationsToFlip("[1|[[[0&0]&[0|0]]|[[1|1]|[1&1]]]]"), 2, 'Test 155');
test(minOperationsToFlip("[0&[[[1|0]|[0|1]]&[0|1]]&[1|0]]"), 1, 'Test 156');
test(minOperationsToFlip("[[0|0]|[1&1]]&[[[1|0]&[0|1]]|[1&1]]"), 1, 'Test 157');
test(minOperationsToFlip("[[1&[0|1]]|[[0&1]|[[1|0]&[0|1]]]]"), 2, 'Test 158');
test(minOperationsToFlip("[[[1&1]&[0|0]]|[[0|0]|[1&1]]]"), 1, 'Test 159');
test(minOperationsToFlip("[[[1|0]|[1|0]]&[[0&1]|[0&1]]&[[0&1]|[0&1]]&[[1|0]|[1|0]]]"), 1, 'Test 160');
test(minOperationsToFlip("[[1&[0|1]]&[[0|1]|[1&0]]]"), 1, 'Test 161');
test(minOperationsToFlip("[[1&[0|1]]&[[0|1]&[1|0]]]"), 1, 'Test 162');
test(minOperationsToFlip("[1&[[0|1]&[0|1]]|[1&0]&[0&1]]"), 1, 'Test 163');
test(minOperationsToFlip("[1|[[0&[1|0]]|[[0|1]&[1&0]]]]"), 1, 'Test 164');
test(minOperationsToFlip("[[1&[0|1]]|[[0|1]|[1&[0|1&0]]]]"), 2, 'Test 165');
test(minOperationsToFlip("[[[1&[0&[1|0]]]|[[0&[1|0]]|[0&1]]]&[[0&1]|[1&[0&1]]]]"), 2, 'Test 166');
test(minOperationsToFlip("[1&[1|[0&0]&[1|0]]|[0&[0|1]&[0|1]]]"), 1, 'Test 167');
test(minOperationsToFlip("[0|[[[[1|0]&[0|1]]|[[1&0]|[0|1]]]|[[1&[0&0]]|[0|1]]]]"), 1, 'Test 168');
test(minOperationsToFlip("[[[0&0]|[1|1]]&[[0|1]|[1|0]]&[[1&0]|[0|1]]&[[0&0]|[1|1]]]"), 1, 'Test 169');
test(minOperationsToFlip("[[0&[0|1]]|[[1|0]&1]]"), 1, 'Test 170');
test(minOperationsToFlip("[[[0|1]&[1|0]]|[0&[1|0]]]"), 1, 'Test 171');
test(minOperationsToFlip("[[[0&1]|[1&0]]|[[1&1]&[0|0]]]"), 1, 'Test 172');
test(minOperationsToFlip("[[0&[1|0]]|[[0&1]|[1&1]]]&[1|0]"), 1, 'Test 173');

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
