// Test: 2478. Number Of Beautiful Partitions
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { beautifulPartitions } = require("./solution");

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

console.log("\n2478. Number Of Beautiful Partitions\n");

test(beautifulPartitions("52372938462673572", 4, 2), 0, 'Test 1');
test(beautifulPartitions("33333", 1, 1), 0, 'Test 2');
test(beautifulPartitions("23542185131", 3, 3), 1, 'Test 3');
test(beautifulPartitions("3312958", 3, 1), 1, 'Test 4');
test(beautifulPartitions("253179", 2, 1), 1, 'Test 5');
test(beautifulPartitions("72531", 1, 5), 1, 'Test 6');
test(beautifulPartitions("357291", 2, 2), 0, 'Test 7');
test(beautifulPartitions("22354", 1, 1), 1, 'Test 8');
test(beautifulPartitions("23542185131", 3, 2), 3, 'Test 9');
test(beautifulPartitions("77777", 5, 1), 0, 'Test 10');
test(beautifulPartitions("75319", 1, 5), 1, 'Test 11');
test(beautifulPartitions("22222", 5, 1), 0, 'Test 12');
test(beautifulPartitions("2375193", 2, 2), 0, 'Test 13');
test(beautifulPartitions("3572935729", 5, 2), 0, 'Test 14');
test(beautifulPartitions("23751", 2, 1), 0, 'Test 15');
test(beautifulPartitions("2222222222", 5, 1), 0, 'Test 16');
test(beautifulPartitions("2233445566778899", 2, 4), 2, 'Test 17');
test(beautifulPartitions("7223357", 2, 1), 0, 'Test 18');
test(beautifulPartitions("23759237592375923759", 5, 4), 0, 'Test 19');
test(beautifulPartitions("35757575757575", 7, 1), 0, 'Test 20');
test(beautifulPartitions("2354218513197531", 4, 3), 2, 'Test 21');
test(beautifulPartitions("317317317317317317317317317317", 8, 2), 0, 'Test 22');
test(beautifulPartitions("353535353535353535353535", 10, 2), 0, 'Test 23');
test(beautifulPartitions("2357235723572357235723572357", 10, 2), 0, 'Test 24');
test(beautifulPartitions("23572357235723572357235723572357235723", 10, 4), 0, 'Test 25');
test(beautifulPartitions("235423542354", 3, 2), 1, 'Test 26');
test(beautifulPartitions("373737373737373737373737", 10, 2), 0, 'Test 27');
test(beautifulPartitions("2354218513123542185131", 5, 2), 35, 'Test 28');
test(beautifulPartitions("75319284628462846284", 4, 3), 4, 'Test 29');
test(beautifulPartitions("331295833129583312958331295833129583312958", 10, 3), 110, 'Test 30');
test(beautifulPartitions("77777777777777777777777777777777777777", 5, 1), 0, 'Test 31');
test(beautifulPartitions("235711317113", 3, 3), 0, 'Test 32');
test(beautifulPartitions("23542185131", 5, 1), 0, 'Test 33');
test(beautifulPartitions("2233335555777711112222333355557777", 6, 2), 0, 'Test 34');
test(beautifulPartitions("2333353333533337333313333", 7, 2), 0, 'Test 35');
test(beautifulPartitions("23572357235723572357235723572357235723", 15, 5), 0, 'Test 36');
test(beautifulPartitions("235723572357235723572357235723572357", 15, 2), 0, 'Test 37');
test(beautifulPartitions("23547186918691869", 4, 2), 0, 'Test 38');
test(beautifulPartitions("331295897531", 4, 1), 1, 'Test 39');
test(beautifulPartitions("22222222222222222222", 10, 2), 0, 'Test 40');
test(beautifulPartitions("7777777777777777777777777777", 8, 3), 0, 'Test 41');
test(beautifulPartitions("235723572357", 6, 2), 0, 'Test 42');
test(beautifulPartitions("235235235235235235", 7, 3), 0, 'Test 43');
test(beautifulPartitions("733733733733733733733733", 10, 2), 0, 'Test 44');
test(beautifulPartitions("2375913759231", 4, 2), 0, 'Test 45');
test(beautifulPartitions("222333444555666777888999", 3, 3), 1, 'Test 46');
test(beautifulPartitions("735235235235235235", 7, 2), 0, 'Test 47');
test(beautifulPartitions("252525252525252525252525", 10, 2), 0, 'Test 48');
test(beautifulPartitions("223542185131223542185131223542185131", 9, 3), 1, 'Test 49');
test(beautifulPartitions("732519753189273189", 4, 3), 0, 'Test 50');
test(beautifulPartitions("233757537537537537537", 8, 3), 0, 'Test 51');
test(beautifulPartitions("22222222222222222222222222222222222222", 15, 1), 0, 'Test 52');
test(beautifulPartitions("222333555777111222333", 7, 2), 0, 'Test 53');
test(beautifulPartitions("735218513735218513735218513735", 7, 3), 0, 'Test 54');
test(beautifulPartitions("272727272727", 6, 1), 0, 'Test 55');
test(beautifulPartitions("23572357235723572357", 5, 2), 0, 'Test 56');
test(beautifulPartitions("222333555777111", 4, 3), 0, 'Test 57');
test(beautifulPartitions("37537537537537", 6, 3), 0, 'Test 58');
test(beautifulPartitions("22335577112233557711", 6, 2), 0, 'Test 59');
test(beautifulPartitions("2573197319731973197319", 9, 2), 0, 'Test 60');
test(beautifulPartitions("2354218513171925235729", 6, 3), 0, 'Test 61');
test(beautifulPartitions("232323232323232323232323", 10, 2), 0, 'Test 62');
test(beautifulPartitions("222333555777111222333555777111", 4, 3), 0, 'Test 63');
test(beautifulPartitions("753197531975319753", 10, 2), 0, 'Test 64');
test(beautifulPartitions("33333333333333333333333333333333333333", 10, 1), 0, 'Test 65');
test(beautifulPartitions("2323232323232323", 8, 2), 0, 'Test 66');
test(beautifulPartitions("33333333333333", 5, 2), 0, 'Test 67');
test(beautifulPartitions("33129583312958331295833129583312958331", 10, 3), 15, 'Test 68');
test(beautifulPartitions("373737373737", 6, 1), 0, 'Test 69');
test(beautifulPartitions("2233557711886644", 6, 1), 0, 'Test 70');
test(beautifulPartitions("235476918235476918235476918", 6, 3), 1, 'Test 71');
test(beautifulPartitions("333222111777555333222111", 9, 2), 0, 'Test 72');
test(beautifulPartitions("29292929292929", 3, 3), 3, 'Test 73');
test(beautifulPartitions("7235719753197532", 5, 2), 0, 'Test 74');
test(beautifulPartitions("35235235235235235235235235235", 10, 3), 0, 'Test 75');
test(beautifulPartitions("333555777222444666888999", 5, 2), 0, 'Test 76');
test(beautifulPartitions("373737373737373737", 5, 3), 0, 'Test 77');
test(beautifulPartitions("222333555777111222333555777111", 6, 3), 0, 'Test 78');
test(beautifulPartitions("23572357235723", 1, 1), 0, 'Test 79');
test(beautifulPartitions("23571113171923293137414347", 10, 2), 0, 'Test 80');
test(beautifulPartitions("22222222222222", 2, 5), 0, 'Test 81');
test(beautifulPartitions("23751937519375193", 5, 2), 0, 'Test 82');
test(beautifulPartitions("235421851312354218513123542185", 6, 4), 0, 'Test 83');
test(beautifulPartitions("22222222222222222222222222222222222222", 20, 1), 0, 'Test 84');
test(beautifulPartitions("27272727272727272727272727272", 8, 2), 0, 'Test 85');
test(beautifulPartitions("2222222222222222222222222222", 12, 1), 0, 'Test 86');
test(beautifulPartitions("753753753753753753753753753753753753753753", 15, 5), 0, 'Test 87');
test(beautifulPartitions("235421851312354218513123542185131", 6, 2), 462, 'Test 88');
test(beautifulPartitions("52373197357537325", 5, 1), 0, 'Test 89');
test(beautifulPartitions("23232323232323232323232323", 10, 2), 0, 'Test 90');
test(beautifulPartitions("222333555777222333555777222333555777", 6, 4), 0, 'Test 91');
test(beautifulPartitions("23542185131973", 4, 2), 0, 'Test 92');
test(beautifulPartitions("375375375375", 5, 2), 0, 'Test 93');
test(beautifulPartitions("75319753197531975319753197531975", 8, 4), 0, 'Test 94');
test(beautifulPartitions("3257113257113257113257", 10, 2), 0, 'Test 95');
test(beautifulPartitions("223355771199", 6, 2), 0, 'Test 96');
test(beautifulPartitions("375375375375375375375375375375", 7, 4), 0, 'Test 97');
test(beautifulPartitions("23572357235723", 2, 5), 0, 'Test 98');
test(beautifulPartitions("2354218513123542185131", 6, 2), 21, 'Test 99');
test(beautifulPartitions("23572357235723572357235723572357235723", 15, 3), 0, 'Test 100');
test(beautifulPartitions("3572535725357", 5, 1), 0, 'Test 101');
test(beautifulPartitions("2357135713571357", 7, 2), 0, 'Test 102');
test(beautifulPartitions("22223333555577772222", 4, 5), 0, 'Test 103');
test(beautifulPartitions("53725372537253725372537253725372", 10, 3), 0, 'Test 104');
test(beautifulPartitions("257357257357", 4, 2), 0, 'Test 105');
test(beautifulPartitions("2197531975319753", 8, 3), 0, 'Test 106');
test(beautifulPartitions("2357235723572357", 1, 15), 0, 'Test 107');
test(beautifulPartitions("23542185131719", 5, 2), 1, 'Test 108');
test(beautifulPartitions("57575757575757575757575757575", 6, 4), 0, 'Test 109');
test(beautifulPartitions("22335577223355772233", 6, 1), 0, 'Test 110');
test(beautifulPartitions("2357235723572357235723572357", 7, 5), 0, 'Test 111');
test(beautifulPartitions("37531975319753197537531975319753", 12, 2), 0, 'Test 112');
test(beautifulPartitions("25252525252525", 5, 2), 0, 'Test 113');
test(beautifulPartitions("21212121212121", 3, 2), 15, 'Test 114');
test(beautifulPartitions("2357198462357", 4, 2), 0, 'Test 115');
test(beautifulPartitions("235723572357235723572357", 10, 2), 0, 'Test 116');
test(beautifulPartitions("23232323232323232323232323232323", 10, 2), 0, 'Test 117');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

