// Test: 62. Unique Paths
// 55 test cases from LeetCodeDataset
// Run: node test.js

const { uniquePaths } = require("./solution");

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

console.log("\n62. Unique Paths\n");

test(uniquePaths(20, 30), 11541847896480, 'Test 1');
test(uniquePaths(1, 100), 1, 'Test 2');
test(uniquePaths(3, 7), 28, 'Test 3');
test(uniquePaths(5, 5), 70, 'Test 4');
test(uniquePaths(10, 10), 48620, 'Test 5');
test(uniquePaths(5, 3), 15, 'Test 6');
test(uniquePaths(30, 20), 11541847896480, 'Test 7');
test(uniquePaths(1, 1), 1, 'Test 8');
test(uniquePaths(3, 2), 3, 'Test 9');
test(uniquePaths(100, 1), 1, 'Test 10');
test(uniquePaths(40, 30), 13750991318793417920, 'Test 11');
test(uniquePaths(67, 33), 65814642035034133075191231, 'Test 12');
test(uniquePaths(30, 30), 30067266499541040, 'Test 13');
test(uniquePaths(5, 95), 3612280, 'Test 14');
test(uniquePaths(15, 15), 40116600, 'Test 15');
test(uniquePaths(1, 50), 1, 'Test 16');
test(uniquePaths(30, 40), 13750991318793417920, 'Test 17');
test(uniquePaths(99, 99), 5716592448890534420436582360196242777068052430850904489000, 'Test 18');
test(uniquePaths(25, 75), 45931679871275969889300, 'Test 19');
test(uniquePaths(90, 10), 1573664496040, 'Test 20');
test(uniquePaths(75, 75), 23362265873332749085315221863910685052043000, 'Test 21');
test(uniquePaths(30, 25), 779255311989700, 'Test 22');
test(uniquePaths(75, 25), 45931679871275969889300, 'Test 23');
test(uniquePaths(30, 70), 6230496325796261023265040, 'Test 24');
test(uniquePaths(100, 5), 4421275, 'Test 25');
test(uniquePaths(80, 80), 23156006494021191956342707682359261381151378400, 'Test 26');
test(uniquePaths(40, 10), 1677106640, 'Test 27');
test(uniquePaths(80, 20), 86623575014757120480, 'Test 28');
test(uniquePaths(5, 8), 330, 'Test 29');
test(uniquePaths(99, 1), 1, 'Test 30');
test(uniquePaths(5, 100), 4421275, 'Test 31');
test(uniquePaths(99, 2), 99, 'Test 32');
test(uniquePaths(10, 90), 1573664496040, 'Test 33');
test(uniquePaths(60, 60), 24356699707654619143838606602026720, 'Test 34');
test(uniquePaths(2, 99), 99, 'Test 35');
test(uniquePaths(1, 99), 1, 'Test 36');
test(uniquePaths(45, 35), 14429347509452441488650, 'Test 37');
test(uniquePaths(55, 45), 15362117803534044899180148240, 'Test 38');
test(uniquePaths(50, 2), 50, 'Test 39');
test(uniquePaths(60, 40), 3332420398982499757882998720, 'Test 40');
test(uniquePaths(50, 50), 25477612258980856902730428600, 'Test 41');
test(uniquePaths(100, 100), 22750883079422934966181954039568885395604168260154104734000, 'Test 42');
test(uniquePaths(15, 5), 3060, 'Test 43');
test(uniquePaths(99, 100), 11375441539711467483090977019784442697802084130077052367000, 'Test 44');
test(uniquePaths(20, 80), 86623575014757120480, 'Test 45');
test(uniquePaths(15, 20), 818809200, 'Test 46');
test(uniquePaths(45, 55), 15362117803534044899180148240, 'Test 47');
test(uniquePaths(25, 25), 32247603683100, 'Test 48');
test(uniquePaths(2, 50), 50, 'Test 49');
test(uniquePaths(40, 60), 3332420398982499757882998720, 'Test 50');
test(uniquePaths(50, 1), 1, 'Test 51');
test(uniquePaths(70, 30), 6230496325796261023265040, 'Test 52');
test(uniquePaths(15, 25), 9669554100, 'Test 53');
test(uniquePaths(33, 67), 65814642035034133075191231, 'Test 54');
test(uniquePaths(35, 45), 14429347509452441488650, 'Test 55');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

