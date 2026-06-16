// Test: 2327. Number Of People Aware Of A Secret
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { peopleAwareOfSecret } = require("./solution");

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

console.log("\n2327. Number Of People Aware Of A Secret\n");

test(peopleAwareOfSecret(8, 3, 6), 6, 'Test 1');
test(peopleAwareOfSecret(500, 100, 400), 5820125, 'Test 2');
test(peopleAwareOfSecret(4, 1, 3), 6, 'Test 3');
test(peopleAwareOfSecret(1000, 5, 10), 743819361, 'Test 4');
test(peopleAwareOfSecret(1000, 1, 999), 344211603, 'Test 5');
test(peopleAwareOfSecret(10, 2, 5), 30, 'Test 6');
test(peopleAwareOfSecret(10, 3, 5), 5, 'Test 7');
test(peopleAwareOfSecret(15, 4, 7), 19, 'Test 8');
test(peopleAwareOfSecret(6, 2, 4), 5, 'Test 9');
test(peopleAwareOfSecret(5, 1, 4), 14, 'Test 10');
test(peopleAwareOfSecret(7, 2, 3), 2, 'Test 11');
test(peopleAwareOfSecret(100, 10, 50), 22517820, 'Test 12');
test(peopleAwareOfSecret(200, 50, 150), 27250, 'Test 13');
test(peopleAwareOfSecret(900, 300, 650), 45500, 'Test 14');
test(peopleAwareOfSecret(550, 150, 450), 203375, 'Test 15');
test(peopleAwareOfSecret(950, 400, 700), 11625, 'Test 16');
test(peopleAwareOfSecret(800, 150, 600), 79177860, 'Test 17');
test(peopleAwareOfSecret(900, 150, 300), 935294905, 'Test 18');
test(peopleAwareOfSecret(1000, 1, 10), 694661098, 'Test 19');
test(peopleAwareOfSecret(700, 110, 550), 887595495, 'Test 20');
test(peopleAwareOfSecret(600, 250, 550), 5350, 'Test 21');
test(peopleAwareOfSecret(500, 100, 200), 5264525, 'Test 22');
test(peopleAwareOfSecret(200, 2, 199), 349361643, 'Test 23');
test(peopleAwareOfSecret(1000, 1, 500), 28219034, 'Test 24');
test(peopleAwareOfSecret(1000, 1, 2), 2, 'Test 25');
test(peopleAwareOfSecret(750, 250, 500), 31625, 'Test 26');
test(peopleAwareOfSecret(999, 50, 400), 112339611, 'Test 27');
test(peopleAwareOfSecret(950, 300, 600), 81225, 'Test 28');
test(peopleAwareOfSecret(750, 200, 600), 635625, 'Test 29');
test(peopleAwareOfSecret(900, 200, 500), 9051525, 'Test 30');
test(peopleAwareOfSecret(600, 125, 500), 6406900, 'Test 31');
test(peopleAwareOfSecret(800, 200, 300), 843250, 'Test 32');
test(peopleAwareOfSecret(550, 110, 440), 8292625, 'Test 33');
test(peopleAwareOfSecret(700, 150, 450), 7127075, 'Test 34');
test(peopleAwareOfSecret(500, 5, 100), 121345145, 'Test 35');
test(peopleAwareOfSecret(750, 120, 450), 913950185, 'Test 36');
test(peopleAwareOfSecret(300, 60, 280), 907415, 'Test 37');
test(peopleAwareOfSecret(500, 150, 400), 42450, 'Test 38');
test(peopleAwareOfSecret(600, 50, 550), 979826832, 'Test 39');
test(peopleAwareOfSecret(750, 125, 550), 450909175, 'Test 40');
test(peopleAwareOfSecret(550, 70, 400), 326052608, 'Test 41');
test(peopleAwareOfSecret(800, 400, 750), 350, 'Test 42');
test(peopleAwareOfSecret(120, 20, 100), 207054, 'Test 43');
test(peopleAwareOfSecret(400, 30, 150), 689207212, 'Test 44');
test(peopleAwareOfSecret(800, 100, 600), 153808266, 'Test 45');
test(peopleAwareOfSecret(600, 200, 300), 10000, 'Test 46');
test(peopleAwareOfSecret(900, 300, 600), 45450, 'Test 47');
test(peopleAwareOfSecret(950, 150, 850), 488545869, 'Test 48');
test(peopleAwareOfSecret(600, 250, 400), 5200, 'Test 49');
test(peopleAwareOfSecret(650, 130, 520), 15497300, 'Test 50');
test(peopleAwareOfSecret(700, 350, 560), 210, 'Test 51');
test(peopleAwareOfSecret(950, 140, 650), 285835661, 'Test 52');
test(peopleAwareOfSecret(850, 300, 500), 28975, 'Test 53');
test(peopleAwareOfSecret(650, 90, 500), 926898505, 'Test 54');
test(peopleAwareOfSecret(550, 250, 450), 1475, 'Test 55');
test(peopleAwareOfSecret(800, 200, 500), 1423700, 'Test 56');
test(peopleAwareOfSecret(750, 250, 550), 31675, 'Test 57');
test(peopleAwareOfSecret(550, 80, 450), 2109288, 'Test 58');
test(peopleAwareOfSecret(500, 200, 400), 5250, 'Test 59');
test(peopleAwareOfSecret(1000, 50, 900), 770071855, 'Test 60');
test(peopleAwareOfSecret(750, 120, 500), 914080410, 'Test 61');
test(peopleAwareOfSecret(600, 150, 450), 619250, 'Test 62');
test(peopleAwareOfSecret(999, 300, 750), 246900, 'Test 63');
test(peopleAwareOfSecret(1000, 50, 950), 770074505, 'Test 64');
test(peopleAwareOfSecret(950, 190, 760), 65412725, 'Test 65');
test(peopleAwareOfSecret(1000, 10, 500), 104566774, 'Test 66');
test(peopleAwareOfSecret(600, 120, 480), 11476850, 'Test 67');
test(peopleAwareOfSecret(1000, 400, 700), 20400, 'Test 68');
test(peopleAwareOfSecret(900, 100, 800), 892948851, 'Test 69');
test(peopleAwareOfSecret(500, 50, 450), 344465040, 'Test 70');
test(peopleAwareOfSecret(200, 40, 150), 219220, 'Test 71');
test(peopleAwareOfSecret(300, 50, 250), 8177885, 'Test 72');
test(peopleAwareOfSecret(1000, 500, 900), 400, 'Test 73');
test(peopleAwareOfSecret(600, 100, 500), 165273270, 'Test 74');
test(peopleAwareOfSecret(750, 200, 500), 632925, 'Test 75');
test(peopleAwareOfSecret(850, 130, 550), 523316449, 'Test 76');
test(peopleAwareOfSecret(450, 90, 360), 3944850, 'Test 77');
test(peopleAwareOfSecret(1000, 150, 700), 188312873, 'Test 78');
test(peopleAwareOfSecret(1000, 999, 1000), 2, 'Test 79');
test(peopleAwareOfSecret(400, 10, 350), 610381426, 'Test 80');
test(peopleAwareOfSecret(800, 150, 350), 77362035, 'Test 81');
test(peopleAwareOfSecret(700, 190, 560), 426390, 'Test 82');
test(peopleAwareOfSecret(550, 220, 330), 6215, 'Test 83');
test(peopleAwareOfSecret(900, 250, 600), 651750, 'Test 84');
test(peopleAwareOfSecret(700, 70, 630), 66046770, 'Test 85');
test(peopleAwareOfSecret(950, 400, 850), 11775, 'Test 86');
test(peopleAwareOfSecret(750, 150, 600), 26594875, 'Test 87');
test(peopleAwareOfSecret(400, 100, 350), 192050, 'Test 88');
test(peopleAwareOfSecret(300, 10, 299), 236977941, 'Test 89');
test(peopleAwareOfSecret(800, 200, 600), 1434000, 'Test 90');
test(peopleAwareOfSecret(900, 200, 700), 9092125, 'Test 91');
test(peopleAwareOfSecret(700, 100, 500), 766847687, 'Test 92');
test(peopleAwareOfSecret(650, 175, 525), 378875, 'Test 93');
test(peopleAwareOfSecret(600, 80, 400), 816019201, 'Test 94');
test(peopleAwareOfSecret(1000, 500, 999), 499, 'Test 95');
test(peopleAwareOfSecret(300, 100, 200), 5150, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

