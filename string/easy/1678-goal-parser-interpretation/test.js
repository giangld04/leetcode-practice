// Test: 1678. Goal Parser Interpretation
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { interpret } = require("./solution");

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

console.log("\n1678. Goal Parser Interpretation\n");

test(interpret("G[][][][][al]"), Gooooal, 'Test 1');
test(interpret("G"), G, 'Test 2');
test(interpret("[]"), o, 'Test 3');
test(interpret("[al]G[al][][]G"), alGalooG, 'Test 4');
test(interpret("G[][G][]"), Go[G]o, 'Test 5');
test(interpret("G[al]G[al]"), GalGal, 'Test 6');
test(interpret("G[][al]"), Goal, 'Test 7');
test(interpret("[][][][]"), oooo, 'Test 8');
test(interpret("G[]G[al]G[]"), GoGalGo, 'Test 9');
test(interpret("G[al]G[al]G[al]"), GalGalGal, 'Test 10');
test(interpret("[al][al][al]"), alalal, 'Test 11');
test(interpret("[al]"), al, 'Test 12');
test(interpret("[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]"), alGalGalGalGalGalGalGal, 'Test 13');
test(interpret("G[al][][]G[al][][]G[al][][]"), GalooGalooGaloo, 'Test 14');
test(interpret("G[al][al]G[al][al]G[al][al]"), GalalGalalGalal, 'Test 15');
test(interpret("[][][][]G[al]G[al]G[al]G[al]"), ooooGalGalGalGal, 'Test 16');
test(interpret("[][][]G[al]G[al]G[al]G[al]G[al]G[al]"), oooGalGalGalGalGalGal, 'Test 17');
test(interpret("[]G[al]G[]G[al][]"), oGalGoGalo, 'Test 18');
test(interpret("[]G[al][]G[al][]G[al][]"), oGaloGaloGalo, 'Test 19');
test(interpret("G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[al]"), GoGoGoGoGoGoGoGoGoGoGoGoGoGoGal, 'Test 20');
test(interpret("G[al][al][al]"), Galalal, 'Test 21');
test(interpret("[][G[al]G[al]][G[al]G[al]]"), o[GalGal][GalGal], 'Test 22');
test(interpret("G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]"), GalGalGalGalGalGalGalGal, 'Test 23');
test(interpret("[]G[al]G[al]G[al]G[al]G[al]G[al]"), oGalGalGalGalGalGal, 'Test 24');
test(interpret("G[al]G[al]G[al]G[al]G[al]G[al]G[al]"), GalGalGalGalGalGalGal, 'Test 25');
test(interpret("G[al]G[]G[al]G[]G[al]"), GalGoGalGoGal, 'Test 26');
test(interpret("[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]"), alGalGalGalGalGalGalGalGalGal, 'Test 27');
test(interpret("G[][al]G[][al]G[][al]"), GoalGoalGoal, 'Test 28');
test(interpret("[al]G[al][]G[al][]G[al][]G[al][]G[al][]"), alGaloGaloGaloGaloGalo, 'Test 29');
test(interpret("[al]G[al]G[al]G[al]G[al]G[al]G[al]"), alGalGalGalGalGalGal, 'Test 30');
test(interpret("[]G[al]G[]G[al]"), oGalGoGal, 'Test 31');
test(interpret("[al]G[al][][]G[al]G[al][][]G[al]G[al][][]G"), alGalooGalGalooGalGalooG, 'Test 32');
test(interpret("G[al]G[al]G[al]G[al]G[al]"), GalGalGalGalGal, 'Test 33');
test(interpret("G[al][al][al][al]"), Galalalal, 'Test 34');
test(interpret("[al]G[al][G[al][G[al]G[al]]]G[al]"), alGal[Gal[GalGal]]Gal, 'Test 35');
test(interpret("G[][]G[][]G[][]"), GooGooGoo, 'Test 36');
test(interpret("G[al][]G[al][]G[al][]G[al][]G[al][]"), GaloGaloGaloGaloGalo, 'Test 37');
test(interpret("G[al][]G[al][]G[al][]G[al][]G[al][]G[al][]G[al][]G[al][]G[al][]G[al][]G[al][]"), GaloGaloGaloGaloGaloGaloGaloGaloGaloGaloGalo, 'Test 38');
test(interpret("G[]G[]G[al][al]G[]"), GoGoGalalGo, 'Test 39');
test(interpret("G[al]G[al][][]G[al]G[al]G[al]"), GalGalooGalGalGal, 'Test 40');
test(interpret("G[][G[][G[][G[]]]]"), Go[Go[Go[Go]]], 'Test 41');
test(interpret("[]G[]G[al][]G[al][]G[al]"), oGoGaloGaloGal, 'Test 42');
test(interpret("[]G[][]G[][]G[][]G[al]G[]"), oGooGooGooGalGo, 'Test 43');
test(interpret("G[al]G[al]G[al]G[al]"), GalGalGalGal, 'Test 44');
test(interpret("G[][al]G[][al]G[][al]G[][al]"), GoalGoalGoalGoal, 'Test 45');
test(interpret("G[][][][][al]G[al]G[al]G[al]"), GooooalGalGalGal, 'Test 46');
test(interpret("G[al]G[al][][]G[al]G[al][][]"), GalGalooGalGaloo, 'Test 47');
test(interpret("G[][G[al]][G[al]]G[][G[al]][G[al]]"), Go[Gal][Gal]Go[Gal][Gal], 'Test 48');
test(interpret("[al][al]G[al][al]G[al][al]"), alalGalalGalal, 'Test 49');
test(interpret("G[al][al][al]G"), GalalalG, 'Test 50');
test(interpret("[al]G[al][]G[al][]G[al][]G[al][]"), alGaloGaloGaloGalo, 'Test 51');
test(interpret("G[al][al][al]G[al][al][al]G[al][al][al]G"), GalalalGalalalGalalalG, 'Test 52');
test(interpret("G[al][G[al]G[al]][G[al]]"), Gal[GalGal][Gal], 'Test 53');
test(interpret("G[][G[al]]G[][G[al]]"), Go[Gal]Go[Gal], 'Test 54');
test(interpret("G[]G[]G[]G[]G[]G[]G[]G[]"), GoGoGoGoGoGoGoGo, 'Test 55');
test(interpret("G[al][]G[al][]G[al][]G[al][]G[al][]G[al][]"), GaloGaloGaloGaloGaloGalo, 'Test 56');
test(interpret("[][][]G[al]G[al]G[al][][][]"), oooGalGalGalooo, 'Test 57');
test(interpret("[al][]G[al][]G[al]G[al]"), aloGaloGalGal, 'Test 58');
test(interpret("[al][al][al][al]G[al]G[]"), alalalalGalGo, 'Test 59');
test(interpret("[al][G][al][G][al][G][al]"), al[G]al[G]al[G]al, 'Test 60');
test(interpret("G[al][al]G[al]"), GalalGal, 'Test 61');
test(interpret("[al]G[al]G[al]G[al]G[al]G[al]"), alGalGalGalGalGal, 'Test 62');
test(interpret("[]G[al]G[al]G[al]G[al]G[al]"), oGalGalGalGalGal, 'Test 63');
test(interpret("G[al]G[][al]G[][al]G[][al]G[]"), GalGoalGoalGoalGo, 'Test 64');
test(interpret("G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]"), GalGalGalGalGalGalGalGalGalGal, 'Test 65');
test(interpret("G[][G[][G][]]"), Go[Go[G]o], 'Test 66');
test(interpret("[][][][][][][][][][][][][][][][][][][][][]G[al]"), oooooooooooooooooooooGal, 'Test 67');
test(interpret("G[al][]G[al][]G[al][]G[al][]G[al]"), GaloGaloGaloGaloGal, 'Test 68');
test(interpret("[al]G[al][al]G[al]G"), alGalalGalG, 'Test 69');
test(interpret("G[al]G[al]G[al]G[al]G[al]G[al]"), GalGalGalGalGalGal, 'Test 70');
test(interpret("G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]"), GalGalGalGalGalGalGalGalGal, 'Test 71');
test(interpret("[al][]G[al][]G[al][]G[al][]"), aloGaloGaloGalo, 'Test 72');
test(interpret("G[al][G[][G][G][]]G[al]"), Gal[Go[G][G]o]Gal, 'Test 73');
test(interpret("G[]G[al]G[]G[al]"), GoGalGoGal, 'Test 74');
test(interpret("[al][al][al]G[al]"), alalalGal, 'Test 75');
test(interpret("G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]"), GalGalGalGalGalGalGalGalGalGalGalGal, 'Test 76');
test(interpret("[al]G[al]G[al]G[al]G[al]"), alGalGalGalGal, 'Test 77');
test(interpret("[al][G[al]][G[al]][G[al]][G[al]][G[al]]"), al[Gal][Gal][Gal][Gal][Gal], 'Test 78');
test(interpret("[][][][][]G[al][][]"), oooooGaloo, 'Test 79');
test(interpret("[]G[al][]G[al][]"), oGaloGalo, 'Test 80');
test(interpret("[al][al][al][al][al][al][al][al]"), alalalalalalalal, 'Test 81');
test(interpret("[][][][][al][][][][al][][][]"), ooooaloooalooo, 'Test 82');
test(interpret("G[al]G[]G[al]G[]G[al]G[]"), GalGoGalGoGalGo, 'Test 83');
test(interpret("G[][G[][G[][G][]][]]"), Go[Go[Go[G]o]o], 'Test 84');
test(interpret("G[al][]G[al][]G[al][]G[al][]G[al][]G[al][]G[al][]G[al][]"), GaloGaloGaloGaloGaloGaloGaloGalo, 'Test 85');
test(interpret("G[al][al]G[al]G[al]"), GalalGalGal, 'Test 86');
test(interpret("G[al][G[al]][G[al]][G[al]]G[al]"), Gal[Gal][Gal][Gal]Gal, 'Test 87');
test(interpret("G[][][][][al]G[al]G[al]G[al]G[al]"), GooooalGalGalGalGal, 'Test 88');
test(interpret("G[][G[][G[][G[][]]]]"), Go[Go[Go[Goo]]], 'Test 89');
test(interpret("G[al][]G[al][]G[al][]G[al][]G[al]G[al]"), GaloGaloGaloGaloGalGal, 'Test 90');
test(interpret("[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]G[al]"), alGalGalGalGalGalGalGalGalGalGalGal, 'Test 91');
test(interpret("G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]G[]"), GoGoGoGoGoGoGoGoGoGoGoGoGoGoGoGo, 'Test 92');
test(interpret("[al][][][][][][][][][][][][][][][][][][][][][][][][][][][][]"), aloooooooooooooooooooooooooooo, 'Test 93');
test(interpret("G[]G[]G[]G[]G[al]G[al]G[al]"), GoGoGoGoGalGalGal, 'Test 94');
test(interpret("[][][][][][][][][][]G[al]G[al]G[al]G[al]G[al]"), ooooooooooGalGalGalGalGal, 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

