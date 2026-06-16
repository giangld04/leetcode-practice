// Test: 1931. Painting A Grid With Three Different Colors
// 61 test cases from LeetCodeDataset
// Run: node test.js

const { colorTheGrid } = require("./solution");

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

console.log("\n1931. Painting A Grid With Three Different Colors\n");

test(colorTheGrid(2, 4), 162, 'Test 1');
test(colorTheGrid(4, 3), 1122, 'Test 2');
test(colorTheGrid(5, 1), 48, 'Test 3');
test(colorTheGrid(1, 2), 6, 'Test 4');
test(colorTheGrid(5, 5), 580986, 'Test 5');
test(colorTheGrid(3, 4), 1122, 'Test 6');
test(colorTheGrid(1, 1), 3, 'Test 7');
test(colorTheGrid(4, 2), 162, 'Test 8');
test(colorTheGrid(3, 3), 246, 'Test 9');
test(colorTheGrid(2, 3), 54, 'Test 10');
test(colorTheGrid(5, 800), 253729951, 'Test 11');
test(colorTheGrid(4, 4), 7812, 'Test 12');
test(colorTheGrid(2, 800), 351341125, 'Test 13');
test(colorTheGrid(5, 500), 859596253, 'Test 14');
test(colorTheGrid(5, 250), 385854418, 'Test 15');
test(colorTheGrid(1, 1000), 32634808, 'Test 16');
test(colorTheGrid(4, 350), 47085356, 'Test 17');
test(colorTheGrid(3, 10), 10107954, 'Test 18');
test(colorTheGrid(4, 500), 614795573, 'Test 19');
test(colorTheGrid(1, 5), 48, 'Test 20');
test(colorTheGrid(1, 500), 85724507, 'Test 21');
test(colorTheGrid(3, 50), 151149117, 'Test 22');
test(colorTheGrid(4, 600), 643128638, 'Test 23');
test(colorTheGrid(4, 750), 346928514, 'Test 24');
test(colorTheGrid(3, 500), 350959293, 'Test 25');
test(colorTheGrid(2, 100), 772083415, 'Test 26');
test(colorTheGrid(5, 2), 486, 'Test 27');
test(colorTheGrid(2, 900), 360544652, 'Test 28');
test(colorTheGrid(2, 2), 18, 'Test 29');
test(colorTheGrid(4, 1000), 281273229, 'Test 30');
test(colorTheGrid(4, 998), 16509421, 'Test 31');
test(colorTheGrid(3, 7), 106494, 'Test 32');
test(colorTheGrid(3, 1000), 650420578, 'Test 33');
test(colorTheGrid(5, 50), 597561939, 'Test 34');
test(colorTheGrid(4, 100), 80216004, 'Test 35');
test(colorTheGrid(4, 10), 896895828, 'Test 36');
test(colorTheGrid(4, 999), 772309689, 'Test 37');
test(colorTheGrid(4, 6), 379602, 'Test 38');
test(colorTheGrid(2, 999), 37925462, 'Test 39');
test(colorTheGrid(5, 100), 714933866, 'Test 40');
test(colorTheGrid(2, 600), 138487123, 'Test 41');
test(colorTheGrid(3, 1), 12, 'Test 42');
test(colorTheGrid(5, 10), 796884854, 'Test 43');
test(colorTheGrid(3, 800), 314710698, 'Test 44');
test(colorTheGrid(4, 5), 54450, 'Test 45');
test(colorTheGrid(5, 200), 55054779, 'Test 46');
test(colorTheGrid(3, 750), 493513580, 'Test 47');
test(colorTheGrid(5, 997), 582030758, 'Test 48');
test(colorTheGrid(3, 900), 999754739, 'Test 49');
test(colorTheGrid(3, 700), 360760626, 'Test 50');
test(colorTheGrid(5, 300), 194398079, 'Test 51');
test(colorTheGrid(4, 9), 128643282, 'Test 52');
test(colorTheGrid(2, 1000), 113776386, 'Test 53');
test(colorTheGrid(4, 700), 795691966, 'Test 54');
test(colorTheGrid(4, 250), 727847864, 'Test 55');
test(colorTheGrid(5, 3), 5118, 'Test 56');
test(colorTheGrid(4, 800), 197304781, 'Test 57');
test(colorTheGrid(3, 300), 748221310, 'Test 58');
test(colorTheGrid(5, 1000), 408208448, 'Test 59');
test(colorTheGrid(3, 20), 690883140, 'Test 60');
test(colorTheGrid(2, 5), 486, 'Test 61');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

