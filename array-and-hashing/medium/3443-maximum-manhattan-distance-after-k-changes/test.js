// Test: 3443. Maximum Manhattan Distance After K Changes
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { maxDistance } = require("./solution");

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

console.log("\n3443. Maximum Manhattan Distance After K Changes\n");

test(maxDistance("NSWWEW", 3), 6, 'Test 1');
test(maxDistance("EEEEEE", 0), 6, 'Test 2');
test(maxDistance("NNN", 0), 3, 'Test 3');
test(maxDistance("NWSE", 1), 3, 'Test 4');
test(maxDistance("EEEE", 4), 4, 'Test 5');
test(maxDistance("NNNN", 0), 4, 'Test 6');
test(maxDistance("SSSSS", 5), 5, 'Test 7');
test(maxDistance("NNNSSS", 3), 6, 'Test 8');
test(maxDistance("WEWEWEW", 1), 3, 'Test 9');
test(maxDistance("NSEW", 4), 4, 'Test 10');
test(maxDistance("NENENE", 2), 6, 'Test 11');
test(maxDistance("EEEEEE", 2), 6, 'Test 12');
test(maxDistance("NESW", 2), 4, 'Test 13');
test(maxDistance("NESW", 0), 2, 'Test 14');
test(maxDistance("NNNSSS", 2), 5, 'Test 15');
test(maxDistance("NSEW", 0), 1, 'Test 16');
test(maxDistance("WWWW", 4), 4, 'Test 17');
test(maxDistance("NNSSEW", 2), 5, 'Test 18');
test(maxDistance("EEEEE", 3), 5, 'Test 19');
test(maxDistance("EWEWWE", 0), 1, 'Test 20');
test(maxDistance("NEENSWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWW", 25), 83, 'Test 21');
test(maxDistance("EWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEWEW", 100), 124, 'Test 22');
test(maxDistance("NNSSSSSSNNSSSSSS", 5), 16, 'Test 23');
test(maxDistance("NNSWWSWWSSSWSSS", 6), 15, 'Test 24');
test(maxDistance("EEEEEEEEEEEEEEEEEEE", 15), 19, 'Test 25');
test(maxDistance("NNNSSSWWEEEEE", 12), 13, 'Test 26');
test(maxDistance("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN", 20), 38, 'Test 27');
test(maxDistance("WSSSNNNEEEWWWEWWWSSEENEEEEEWWEWWEWEEWWWW", 15), 34, 'Test 28');
test(maxDistance("NNNSSSSEEEEEWWWWWW", 5), 14, 'Test 29');
test(maxDistance("SSSSSSSSSS", 10), 10, 'Test 30');
test(maxDistance("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", 10), 108, 'Test 31');
test(maxDistance("NNNEEESWWWWW", 5), 12, 'Test 32');
test(maxDistance("EEEEWWWWEEEEWWWWEEEEWWWW", 20), 24, 'Test 33');
test(maxDistance("EWWWNNEEESSSSS", 7), 14, 'Test 34');
test(maxDistance("NESWNESWNESWNESWNESW", 10), 20, 'Test 35');
test(maxDistance("NNNNNSSSSS", 5), 10, 'Test 36');
test(maxDistance("EEEEEEEEEEWWWWWWWWWW", 10), 20, 'Test 37');
test(maxDistance("EEEEEEEEEEEEEEE", 7), 15, 'Test 38');
test(maxDistance("NNNSSSSSSSSSSEEEEEEEWWWWWWWWWWWWWW", 15), 34, 'Test 39');
test(maxDistance("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN", 20), 118, 'Test 40');
test(maxDistance("NENEWENEWENEWENEWENEWENEWENEWENEWENEWENEWEN", 12), 43, 'Test 41');
test(maxDistance("NESESWNWSWNENWSESNWENS", 7), 15, 'Test 42');
test(maxDistance("E", 1), 1, 'Test 43');
test(maxDistance("NESEWESWESWNWNEN", 12), 16, 'Test 44');
test(maxDistance("NENWNWSWNWNWENWNWNWSWNWNWENWNWNWSWNWNWENWNWNWSWNWNWENWNWNWSWNWNWENWNWNWSWNWNWENWNWNWSWNWNWENWNWNWSWNWNWENWNWNWSWNWNW", 30), 116, 'Test 45');
test(maxDistance("WWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWWEWW", 10), 57, 'Test 46');
test(maxDistance("NENWNWNWSENWSW", 4), 14, 'Test 47');
test(maxDistance("NENENENENENENENENEN", 10), 19, 'Test 48');
test(maxDistance("NSEWNNSEWNNSEWNNSEWNNSEWNNSEWNNSEW", 15), 34, 'Test 49');
test(maxDistance("WNNNWWNNEEENSSS", 7), 15, 'Test 50');
test(maxDistance("NESWNESWNESWNESWNESWNESWNESWNESWNESWNESWNESW", 10), 22, 'Test 51');
test(maxDistance("SSSSSSSSSSSSSSSSSSS", 10), 19, 'Test 52');
test(maxDistance("WWSWNWNWNWWSWNWSWWSWNWNW", 15), 24, 'Test 53');
test(maxDistance("NENENENENENENENENENENE", 20), 22, 'Test 54');
test(maxDistance("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", 10), 36, 'Test 55');
test(maxDistance("NESENESWNWSWNENE", 7), 16, 'Test 56');
test(maxDistance("NNNNSSSSSSSSEEEE", 10), 16, 'Test 57');
test(maxDistance("EWSWNESWNWESWNESWNWESWNESWNWESWNESWNWESWNWESW", 15), 37, 'Test 58');
test(maxDistance("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", 25), 49, 'Test 59');
test(maxDistance("WNWWSWEESSNNNSSWWS", 12), 18, 'Test 60');
test(maxDistance("NENWSWESWNENWSWESWNENWSW", 15), 24, 'Test 61');
test(maxDistance("WSSSWNWEWEW", 5), 11, 'Test 62');
test(maxDistance("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW", 30), 50, 'Test 63');
test(maxDistance("SWNESWSESWSWSEWSEWSEWSEWSEWSEWSEWSEWSEWSEWS", 25), 43, 'Test 64');
test(maxDistance("NNNSSSSSSSSSSSSSSSSS", 5), 20, 'Test 65');
test(maxDistance("SSSSWWWWNNNNEEEE", 10), 16, 'Test 66');
test(maxDistance("SSSSSSSSSSEEEEEEEEEEWWWWWWWWWWWNNNNNNNNNNN", 20), 42, 'Test 67');
test(maxDistance("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN", 50), 46, 'Test 68');
test(maxDistance("NSEWNESEWNESEWNESEWNESEW", 15), 24, 'Test 69');
test(maxDistance("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS", 30), 40, 'Test 70');
test(maxDistance("NNNSSWSSWEEWWNNNSSW", 10), 19, 'Test 71');
test(maxDistance("EEWWEWNEWEWNENW", 10), 15, 'Test 72');
test(maxDistance("SSSSSSSSSSNNNNNNNNNNEEEEEEEEEEWWWWWWWWWW", 10), 30, 'Test 73');
test(maxDistance("NSWWWNWWWNWSW", 5), 13, 'Test 74');
test(maxDistance("NNNWWWEESSEENNNWWEESSEENNNWWEESSEENNNWWEESSEENNNWWEESSEENNNWWEESSEENNN", 25), 70, 'Test 75');
test(maxDistance("WNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNW", 50), 125, 'Test 76');
test(maxDistance("EESSWWNNNNNSSSWEWEWNWNWSSNENENESWEWEWWSWWSWWSWSWWSWSWWSWSWWSWSWWSWSWWSWSWWSWSWWSWSWWSWSWWSWSWWSWSWWSWSWWSWSWWSWSWSWWSWSW", 50), 120, 'Test 77');
test(maxDistance("NNSSEEEWW", 10), 9, 'Test 78');
test(maxDistance("NENEWNWNENEW", 6), 12, 'Test 79');
test(maxDistance("NNNNEEEEWWWWSSSSNNNNEEEEWWWWSSSS", 20), 32, 'Test 80');
test(maxDistance("WWSWWSWWSWWSWWSWWSWWSWWSWWSWWSWWSWWSWWSWWSWW", 20), 44, 'Test 81');
test(maxDistance("SWWNSWEWNEWNNSWEN", 6), 17, 'Test 82');
test(maxDistance("NNNNNSSSSSNEEWWW", 3), 9, 'Test 83');
test(maxDistance("EEENSSSSSNWWSWEEWEESSSNWWSWEEW", 10), 29, 'Test 84');
test(maxDistance("NNSWNNWSSWNNWSSW", 8), 16, 'Test 85');
test(maxDistance("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS", 15), 114, 'Test 86');
test(maxDistance("SWWNSESNWNENWNWS", 8), 16, 'Test 87');
test(maxDistance("NSEWNESEWNESEW", 8), 14, 'Test 88');
test(maxDistance("NSSSNSSSNSSSNSSSNSSSNSSSNSSSNSSSNSSSNSSSNSSS", 15), 44, 'Test 89');
test(maxDistance("WSSSWWSSSWWSSSWWSSSWW", 15), 21, 'Test 90');
test(maxDistance("EESSWWNN", 4), 8, 'Test 91');
test(maxDistance("SSSSNNNNSSSSNNNN", 8), 16, 'Test 92');
test(maxDistance("NSSSNSEWEEW", 5), 11, 'Test 93');
test(maxDistance("NSEWSEWNSEW", 2), 6, 'Test 94');
test(maxDistance("SSSSNNNNWWWWEEEEWWWWWWWWWSSSSSSSSSNNNNNNNNNNEEEEEEEEENNNNNNNNNNWWWWWWWWWEEEEEEEEESSSSSSSSSSSSSNNNNNNNNNNNNWWWWWWWW", 25), 70, 'Test 95');
test(maxDistance("NNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSSSSS", 15), 38, 'Test 96');
test(maxDistance("NWNWNWNWNWNSNSNSNS", 7), 18, 'Test 97');
test(maxDistance("SSSSSSSSSSSSSSSS", 10), 16, 'Test 98');
test(maxDistance("EWNESWNWNENEWNEWWNWNWNE", 15), 23, 'Test 99');
test(maxDistance("N", 0), 1, 'Test 100');
test(maxDistance("WENWENWENWENWENWENWENWENWENWENWENWENWENWENWE", 30), 44, 'Test 101');
test(maxDistance("NEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", 10), 43, 'Test 102');
test(maxDistance("EWEWNEWNENW", 7), 11, 'Test 103');
test(maxDistance("SNENWNWNWNENEWSNWNWNWNWNWNWNWNW", 12), 31, 'Test 104');
test(maxDistance("NNNNWWWWSSSSEEEEWWWWSSSSEEEEWWWWSSSSEEEE", 25), 40, 'Test 105');
test(maxDistance("NNSWWNWWSWNESEWEEWSSSNNNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWESWNWES", 40), 103, 'Test 106');
test(maxDistance("NENENENENENENENENENENENENENENENENENENENENENENENENENENENENENE", 20), 60, 'Test 107');
test(maxDistance("NNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEEWWNNSSEE", 30), 62, 'Test 108');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

