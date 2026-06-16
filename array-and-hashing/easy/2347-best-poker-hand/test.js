// Test: 2347. Best Poker Hand
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { bestHand } = require("./solution");

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

console.log("\n2347. Best Poker Hand\n");

test(bestHand([7,7,7,7,7], ["a","b","c","d","e"]), Three of a Kind, 'Test 1');
test(bestHand([7,7,7,8,9], ["a","b","c","a","d"]), Three of a Kind, 'Test 2');
test(bestHand([10,10,2,12,9], ["a","b","c","a","d"]), Pair, 'Test 3');
test(bestHand([7,7,7,7,7], ["a","b","c","d","a"]), Three of a Kind, 'Test 4');
test(bestHand([1,1,2,2,3], ["a","b","c","d","e"]), Pair, 'Test 5');
test(bestHand([1,2,3,4,5], ["a","b","c","d","a"]), High Card, 'Test 6');
test(bestHand([13,2,3,1,9], ["a","a","a","a","a"]), Flush, 'Test 7');
test(bestHand([2,3,4,5,6], ["a","a","a","a","a"]), Flush, 'Test 8');
test(bestHand([11,11,12,12,13], ["a","b","c","d","a"]), Pair, 'Test 9');
test(bestHand([4,4,2,4,4], ["d","a","a","b","c"]), Three of a Kind, 'Test 10');
test(bestHand([10, 10, 11, 11, 12], ["a", "b", "c", "d", "a"]), Pair, 'Test 11');
test(bestHand([6,6,6,7,7], ["d","d","d","c","c"]), Three of a Kind, 'Test 12');
test(bestHand([3, 3, 4, 4, 5], ["a", "b", "c", "d", "e"]), Pair, 'Test 13');
test(bestHand([8, 8, 8, 9, 10], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 14');
test(bestHand([5, 6, 7, 8, 9], ["a", "a", "a", "a", "a"]), Flush, 'Test 15');
test(bestHand([7, 7, 8, 8, 9], ["a", "b", "c", "d", "e"]), Pair, 'Test 16');
test(bestHand([5, 5, 5, 3, 3], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 17');
test(bestHand([11, 12, 13, 13, 13], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 18');
test(bestHand([5, 5, 6, 6, 7], ["a", "b", "a", "b", "a"]), Pair, 'Test 19');
test(bestHand([6, 6, 7, 7, 8], ["a", "b", "c", "d", "a"]), Pair, 'Test 20');
test(bestHand([1,2,3,3,3], ["a","b","c","d","a"]), Three of a Kind, 'Test 21');
test(bestHand([4, 4, 5, 5, 6], ["a", "b", "c", "d", "a"]), Pair, 'Test 22');
test(bestHand([9, 9, 9, 9, 9], ["a", "a", "a", "a", "a"]), Flush, 'Test 23');
test(bestHand([1, 2, 3, 4, 4], ["a", "b", "c", "d", "a"]), Pair, 'Test 24');
test(bestHand([8, 8, 9, 9, 10], ["a", "b", "c", "d", "a"]), Pair, 'Test 25');
test(bestHand([10,11,12,13,13], ["a","a","a","a","a"]), Flush, 'Test 26');
test(bestHand([5, 5, 5, 6, 7], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 27');
test(bestHand([6, 6, 6, 7, 8], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 28');
test(bestHand([10, 10, 10, 12, 13], ["a", "b", "c", "a", "b"]), Three of a Kind, 'Test 29');
test(bestHand([8,8,9,9,10], ["a","a","b","b","c"]), Pair, 'Test 30');
test(bestHand([3,3,3,8,8], ["a","b","c","a","b"]), Three of a Kind, 'Test 31');
test(bestHand([1, 3, 3, 3, 5], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 32');
test(bestHand([13, 13, 13, 13, 1], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 33');
test(bestHand([6, 6, 6, 7, 8], ["a", "a", "a", "b", "c"]), Three of a Kind, 'Test 34');
test(bestHand([1, 1, 2, 3, 4], ["a", "a", "b", "c", "d"]), Pair, 'Test 35');
test(bestHand([13,13,13,13,13], ["a","b","c","d","a"]), Three of a Kind, 'Test 36');
test(bestHand([12, 12, 12, 12, 13], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 37');
test(bestHand([9,9,10,11,12], ["a","a","a","a","a"]), Flush, 'Test 38');
test(bestHand([8, 8, 10, 10, 10], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 39');
test(bestHand([3, 3, 3, 4, 4], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 40');
test(bestHand([6, 6, 6, 6, 6], ["a", "a", "a", "a", "a"]), Flush, 'Test 41');
test(bestHand([8, 8, 8, 9, 9], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 42');
test(bestHand([1, 2, 3, 4, 5], ["a", "a", "a", "a", "a"]), Flush, 'Test 43');
test(bestHand([5, 5, 5, 5, 10], ["a", "a", "a", "a", "b"]), Three of a Kind, 'Test 44');
test(bestHand([1, 1, 2, 2, 3], ["a", "b", "c", "d", "e"]), Pair, 'Test 45');
test(bestHand([7, 8, 9, 10, 11], ["a", "b", "c", "d", "a"]), High Card, 'Test 46');
test(bestHand([13, 12, 11, 10, 9], ["a", "a", "a", "a", "a"]), Flush, 'Test 47');
test(bestHand([5,5,5,6,7], ["a","b","c","a","a"]), Three of a Kind, 'Test 48');
test(bestHand([1,2,3,4,5], ["a","b","c","d","e"]), High Card, 'Test 49');
test(bestHand([2, 2, 3, 3, 4], ["a", "b", "c", "d", "e"]), Pair, 'Test 50');
test(bestHand([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"]), High Card, 'Test 51');
test(bestHand([6, 6, 6, 7, 8], ["b", "b", "b", "c", "d"]), Three of a Kind, 'Test 52');
test(bestHand([8, 8, 8, 9, 9], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 53');
test(bestHand([2, 2, 3, 4, 4], ["a", "b", "c", "d", "e"]), Pair, 'Test 54');
test(bestHand([2, 3, 5, 5, 5], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 55');
test(bestHand([1, 2, 3, 4, 5], ["a", "a", "b", "b", "c"]), High Card, 'Test 56');
test(bestHand([3, 3, 3, 3, 5], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 57');
test(bestHand([6, 6, 7, 7, 8], ["a", "a", "b", "b", "c"]), Pair, 'Test 58');
test(bestHand([2, 2, 2, 2, 2], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 59');
test(bestHand([9, 9, 9, 10, 10], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 60');
test(bestHand([13, 13, 2, 3, 4], ["a", "b", "a", "b", "a"]), Pair, 'Test 61');
test(bestHand([6,6,6,6,7], ["a","b","c","d","a"]), Three of a Kind, 'Test 62');
test(bestHand([11, 11, 12, 12, 13], ["a", "a", "b", "b", "c"]), Pair, 'Test 63');
test(bestHand([10,10,11,11,12], ["a","b","a","b","a"]), Pair, 'Test 64');
test(bestHand([5, 6, 7, 8, 9], ["a", "b", "c", "d", "a"]), High Card, 'Test 65');
test(bestHand([1, 1, 1, 2, 3], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 66');
test(bestHand([8, 8, 8, 8, 2], ["a", "a", "a", "a", "a"]), Flush, 'Test 67');
test(bestHand([13, 12, 11, 10, 9], ["a", "b", "c", "d", "e"]), High Card, 'Test 68');
test(bestHand([1,2,3,4,5], ["a","a","a","a","a"]), Flush, 'Test 69');
test(bestHand([1, 1, 2, 3, 4], ["a", "b", "c", "d", "a"]), Pair, 'Test 70');
test(bestHand([1, 1, 2, 3, 4], ["a", "b", "c", "d", "e"]), Pair, 'Test 71');
test(bestHand([2, 3, 4, 5, 6], ["a", "a", "a", "a", "a"]), Flush, 'Test 72');
test(bestHand([2, 2, 2, 3, 3], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 73');
test(bestHand([1, 2, 2, 3, 4], ["a", "b", "c", "d", "e"]), Pair, 'Test 74');
test(bestHand([13, 13, 13, 12, 12], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 75');
test(bestHand([5, 5, 5, 6, 7], ["a", "a", "a", "b", "c"]), Three of a Kind, 'Test 76');
test(bestHand([10, 10, 11, 11, 12], ["a", "b", "c", "d", "e"]), Pair, 'Test 77');
test(bestHand([6, 6, 7, 7, 8], ["a", "b", "c", "d", "e"]), Pair, 'Test 78');
test(bestHand([2, 2, 3, 4, 5], ["a", "b", "c", "d", "a"]), Pair, 'Test 79');
test(bestHand([7,8,9,10,11], ["a","b","c","d","a"]), High Card, 'Test 80');
test(bestHand([1, 2, 3, 4, 5], ["a", "b", "c", "d", "a"]), High Card, 'Test 81');
test(bestHand([9, 10, 11, 12, 13], ["a", "b", "c", "d", "e"]), High Card, 'Test 82');
test(bestHand([9, 9, 10, 10, 11], ["a", "b", "a", "b", "c"]), Pair, 'Test 83');
test(bestHand([10, 11, 12, 13, 13], ["a", "b", "c", "d", "e"]), Pair, 'Test 84');
test(bestHand([3, 3, 4, 4, 5], ["a", "a", "b", "b", "c"]), Pair, 'Test 85');
test(bestHand([9, 9, 9, 9, 10], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 86');
test(bestHand([13, 13, 13, 12, 11], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 87');
test(bestHand([7, 8, 9, 10, 11], ["a", "a", "a", "a", "a"]), Flush, 'Test 88');
test(bestHand([1,1,2,2,3], ["a","b","c","d","a"]), Pair, 'Test 89');
test(bestHand([9, 9, 9, 9, 9], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 90');
test(bestHand([2,2,2,2,3], ["a","b","c","d","a"]), Three of a Kind, 'Test 91');
test(bestHand([13, 13, 13, 1, 1], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 92');
test(bestHand([6, 6, 6, 7, 7], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 93');
test(bestHand([13, 13, 12, 12, 11], ["a", "b", "c", "d", "e"]), Pair, 'Test 94');
test(bestHand([5,5,10,10,10], ["a","b","c","d","a"]), Three of a Kind, 'Test 95');
test(bestHand([3,3,5,5,7], ["a","b","a","b","a"]), Pair, 'Test 96');
test(bestHand([1, 2, 3, 4, 4], ["a", "b", "c", "d", "e"]), Pair, 'Test 97');
test(bestHand([12, 12, 13, 13, 13], ["a", "b", "c", "d", "a"]), Three of a Kind, 'Test 98');
test(bestHand([1, 2, 3, 4, 5], ["a", "a", "a", "a", "d"]), High Card, 'Test 99');
test(bestHand([3, 3, 3, 3, 3], ["a", "b", "c", "d", "e"]), Three of a Kind, 'Test 100');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

