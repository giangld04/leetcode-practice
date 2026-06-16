// Test: 1496. Path Crossing
// 186 test cases from LeetCodeDataset
// Run: node test.js

const { isPathCrossing } = require("./solution");

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

console.log("\n1496. Path Crossing\n");

test(isPathCrossing("NEESWNWWSNNWNSSSWEWEWEWE"), true, 'Test 1');
test(isPathCrossing("NNNSSSSSSEEEEEEEWWWWWWWWW"), true, 'Test 2');
test(isPathCrossing("NEWSNEWS"), true, 'Test 3');
test(isPathCrossing("EWEWEWEW"), true, 'Test 4');
test(isPathCrossing("NESWW"), true, 'Test 5');
test(isPathCrossing("NSSS"), true, 'Test 6');
test(isPathCrossing("N"), false, 'Test 7');
test(isPathCrossing("NNSSEEEWWS"), true, 'Test 8');
test(isPathCrossing("NSSSWEWNNEE"), true, 'Test 9');
test(isPathCrossing(""), false, 'Test 10');
test(isPathCrossing("NSNSNSNS"), true, 'Test 11');
test(isPathCrossing("NNNSSSSS"), true, 'Test 12');
test(isPathCrossing("NESWNE"), true, 'Test 13');
test(isPathCrossing("NNESSEWSWNWNWSSSNW"), true, 'Test 14');
test(isPathCrossing("NS"), true, 'Test 15');
test(isPathCrossing("NNESSWW"), true, 'Test 16');
test(isPathCrossing("NENESSWW"), true, 'Test 17');
test(isPathCrossing("EWE"), true, 'Test 18');
test(isPathCrossing("NES"), false, 'Test 19');
test(isPathCrossing("NEWS"), true, 'Test 20');
test(isPathCrossing("NNNNSSSSWWWWEEEE"), true, 'Test 21');
test(isPathCrossing("WEWEWEWE"), true, 'Test 22');
test(isPathCrossing("NWSWEWNWNW"), true, 'Test 23');
test(isPathCrossing("NNEESSWW"), true, 'Test 24');
test(isPathCrossing("NNEEESSWWNNNEEESSWWNNNESSWWN"), true, 'Test 25');
test(isPathCrossing("EEEE"), false, 'Test 26');
test(isPathCrossing("EESSEENN"), false, 'Test 27');
test(isPathCrossing("WEWN"), true, 'Test 28');
test(isPathCrossing("EENW"), false, 'Test 29');
test(isPathCrossing("NEEEEWWWWSSSSNNN"), true, 'Test 30');
test(isPathCrossing("ENWSWNESWSWNESWS"), true, 'Test 31');
test(isPathCrossing("NENWSEWSWESWESWESW"), true, 'Test 32');
test(isPathCrossing("NNEWSSEESSEENNNWNNNW"), true, 'Test 33');
test(isPathCrossing("NNNSSSWEWEWESWNWNWNWWSWSWENENE"), true, 'Test 34');
test(isPathCrossing("ENWNENWENW"), true, 'Test 35');
test(isPathCrossing("NWSNWSNWSNWSNWS"), true, 'Test 36');
test(isPathCrossing("EEEEEWWWWWSSSSSNNNNN"), true, 'Test 37');
test(isPathCrossing("NWNWNWNWNWSWSWSWSW"), false, 'Test 38');
test(isPathCrossing("NESWWNESWWNESWW"), true, 'Test 39');
test(isPathCrossing("EESWWNNESWNESESW"), true, 'Test 40');
test(isPathCrossing("WENWENWENW"), true, 'Test 41');
test(isPathCrossing("NSEENWNNWSSSWEE"), true, 'Test 42');
test(isPathCrossing("NNSSEEEWWW"), true, 'Test 43');
test(isPathCrossing("NEWSNEWSNEWSNEWSNEWS"), true, 'Test 44');
test(isPathCrossing("SSNNEEWW"), true, 'Test 45');
test(isPathCrossing("NNWNWSSSWNEEEEEN"), true, 'Test 46');
test(isPathCrossing("NNESWSWNWNWS"), true, 'Test 47');
test(isPathCrossing("NNNNSSSSWWWW"), true, 'Test 48');
test(isPathCrossing("EENWNWSS"), true, 'Test 49');
test(isPathCrossing("NNNNEEESSEWWNNNNEE"), true, 'Test 50');
test(isPathCrossing("NESEWNESEWNESEW"), true, 'Test 51');
test(isPathCrossing("EENNWWSSNNSSEE"), true, 'Test 52');
test(isPathCrossing("SSSSNNNNEEEEWWWW"), true, 'Test 53');
test(isPathCrossing("EEEEEEEEEEEEEEEWWWWWWWWWWWWWWWSSSSSSSSSSSSSSSNNNNNNNNNNNNNNN"), true, 'Test 54');
test(isPathCrossing("NNNSSSNNNSSS"), true, 'Test 55');
test(isPathCrossing("NEWSNEWSNEWS"), true, 'Test 56');
test(isPathCrossing("ENSNWNWNWN"), true, 'Test 57');
test(isPathCrossing("ESSNNWWSSEN"), true, 'Test 58');
test(isPathCrossing("SWENSWENSWENSWEN"), true, 'Test 59');
test(isPathCrossing("WESSNNESWWSE"), true, 'Test 60');
test(isPathCrossing("NENWSWSENENW"), true, 'Test 61');
test(isPathCrossing("WSEWSEWSEWSEW"), true, 'Test 62');
test(isPathCrossing("NNNSSSSSSEEWWWW"), true, 'Test 63');
test(isPathCrossing("WENSNWSWES"), true, 'Test 64');
test(isPathCrossing("NWWWSSENNE"), true, 'Test 65');
test(isPathCrossing("NEESWNESWSWN"), true, 'Test 66');
test(isPathCrossing("WEWNSWESWESWESW"), true, 'Test 67');
test(isPathCrossing("NNWESWSWSEENW"), true, 'Test 68');
test(isPathCrossing("WNWSSNSSWEEENEEN"), true, 'Test 69');
test(isPathCrossing("EWEWEWEWEEWWEWEEWWSWWSW"), true, 'Test 70');
test(isPathCrossing("NSSSSEEEEWWWNNSNWEEE"), true, 'Test 71');
test(isPathCrossing("SSENNWESSW"), true, 'Test 72');
test(isPathCrossing("NEEEEESWWWWNSSSSS"), true, 'Test 73');
test(isPathCrossing("NNNNNSSSSSAAAABBBB"), true, 'Test 74');
test(isPathCrossing("NESWNEESWW"), true, 'Test 75');
test(isPathCrossing("NENWSEWSWENWSEWSW"), true, 'Test 76');
test(isPathCrossing("NNNNNNNNSSSSSSSSWWWWWWWWEEEEEEEE"), true, 'Test 77');
test(isPathCrossing("ENENEWNWNWSWSW"), true, 'Test 78');
test(isPathCrossing("NENENENENESESESESESWSWSWSWSW"), false, 'Test 79');
test(isPathCrossing("ENEWWNNEWSWE"), true, 'Test 80');
test(isPathCrossing("NNNNNNNNNN"), false, 'Test 81');
test(isPathCrossing("ENWESWNESEENWSWEN"), true, 'Test 82');
test(isPathCrossing("NESESWWSSWNE"), true, 'Test 83');
test(isPathCrossing("NENENENENEWWWWWW"), true, 'Test 84');
test(isPathCrossing("NNNEEEESSSNNNWWSW"), true, 'Test 85');
test(isPathCrossing("NENENENENNENESESWSWWSW"), true, 'Test 86');
test(isPathCrossing("ENSWNESWNESEWS"), true, 'Test 87');
test(isPathCrossing("ENWSESWNESWENSWE"), true, 'Test 88');
test(isPathCrossing("ENEENWNNWSSSSNE"), true, 'Test 89');
test(isPathCrossing("EEESSSNNNW"), true, 'Test 90');
test(isPathCrossing("NNNSSSSSSEEEWWWW"), true, 'Test 91');
test(isPathCrossing("EESNNWWSSEEN"), true, 'Test 92');
test(isPathCrossing("NNNEEESSEESWWNN"), true, 'Test 93');
test(isPathCrossing("EENWNNWSSNNWEE"), true, 'Test 94');
test(isPathCrossing("NEWWNWSSWSEWSSN"), true, 'Test 95');
test(isPathCrossing("NESESWNESESWNESESW"), true, 'Test 96');
test(isPathCrossing("NENWSWNWNWSWNWNW"), true, 'Test 97');
test(isPathCrossing("NENWSESWNESWNES"), true, 'Test 98');
test(isPathCrossing("NENENNENNE"), false, 'Test 99');
test(isPathCrossing("NEWSNEWSNEWSNEWS"), true, 'Test 100');
test(isPathCrossing("NSEWSSEEEWWWNNEENW"), true, 'Test 101');
test(isPathCrossing("NNWESSSWNE"), true, 'Test 102');
test(isPathCrossing("ESSSWWNNEEEWWNNSSEEE"), true, 'Test 103');
test(isPathCrossing("NESWNESWNESW"), true, 'Test 104');
test(isPathCrossing("NESESWWSWN"), false, 'Test 105');
test(isPathCrossing("NESWNESESWNESESW"), true, 'Test 106');
test(isPathCrossing("NENWSEWSWNNWSEWSW"), true, 'Test 107');
test(isPathCrossing("ENWNNWSSNWNWEE"), true, 'Test 108');
test(isPathCrossing("NNWSENNWWSSSEEE"), true, 'Test 109');
test(isPathCrossing("WNWSSNSSWEEENEENE"), true, 'Test 110');
test(isPathCrossing("NSEWNSSEWW"), true, 'Test 111');
test(isPathCrossing("ENWSENWSENWSENWS"), true, 'Test 112');
test(isPathCrossing("SSSSWWWWNNEE"), false, 'Test 113');
test(isPathCrossing("NSSSWWNEEENNEESSE"), true, 'Test 114');
test(isPathCrossing("ENWSWWSESNWEN"), true, 'Test 115');
test(isPathCrossing("NSSSNWWNEEEE"), true, 'Test 116');
test(isPathCrossing("NNSESSWWNE"), true, 'Test 117');
test(isPathCrossing("NESWENSWEWNENSWSEWNESW"), true, 'Test 118');
test(isPathCrossing("WESSNNWESSNNWESSNN"), true, 'Test 119');
test(isPathCrossing("SSWWSSENNE"), true, 'Test 120');
test(isPathCrossing("ESWENSWENSWENSWENSWEN"), true, 'Test 121');
test(isPathCrossing("NESWNSWENSWE"), true, 'Test 122');
test(isPathCrossing("NESWWSEN"), true, 'Test 123');
test(isPathCrossing("EWEWNEWEWN"), true, 'Test 124');
test(isPathCrossing("EENNWWNSSSNEEE"), true, 'Test 125');
test(isPathCrossing("EESWWNNEWSNEWSNEWS"), true, 'Test 126');
test(isPathCrossing("WEWNENEWNWNWSWSNEN"), true, 'Test 127');
test(isPathCrossing("NESWNSWENWEWSWEWNSWEWENWSWEN"), true, 'Test 128');
test(isPathCrossing("NENWSEWNENWSEWNENWSEW"), true, 'Test 129');
test(isPathCrossing("WNESSWNESSWNE"), true, 'Test 130');
test(isPathCrossing("WENWNNWENWSE"), true, 'Test 131');
test(isPathCrossing("NSEWNNNSSSWEWEWEWWE"), true, 'Test 132');
test(isPathCrossing("NENWNWNWSENW"), true, 'Test 133');
test(isPathCrossing("WNEEESSNWWWEN"), true, 'Test 134');
test(isPathCrossing("EEENNWWWWNEESSS"), true, 'Test 135');
test(isPathCrossing("SSSSNNNNWWEEEE"), true, 'Test 136');
test(isPathCrossing("EEENNNEEWWSSSWWN"), true, 'Test 137');
test(isPathCrossing("EEEEEEEWWWWWWSSSSSSNNNNNN"), true, 'Test 138');
test(isPathCrossing("EEEEEENNNNNNSSSSSWEWE"), true, 'Test 139');
test(isPathCrossing("NSSSSWWWWEEEEEENNN"), true, 'Test 140');
test(isPathCrossing("SSSSEEEEWWWWNNNN"), true, 'Test 141');
test(isPathCrossing("SSSSSSSSSS"), false, 'Test 142');
test(isPathCrossing("NSSSWWEENNSSSWWEEN"), true, 'Test 143');
test(isPathCrossing("EENNWWSSNWNWEEWN"), true, 'Test 144');
test(isPathCrossing("NENENENE"), false, 'Test 145');
test(isPathCrossing("NENESWNESE"), true, 'Test 146');
test(isPathCrossing("ENWSWEWNWSWEWNWS"), true, 'Test 147');
test(isPathCrossing("NENWSEWSWNESWESW"), true, 'Test 148');
test(isPathCrossing("WWEENNWEES"), true, 'Test 149');
test(isPathCrossing("EWEWNEWNWSWE"), true, 'Test 150');
test(isPathCrossing("NNNSSSSSSSWWWWWWWWWEEEEE"), true, 'Test 151');
test(isPathCrossing("NWSWNWSWNW"), false, 'Test 152');
test(isPathCrossing("NNSSWWEENN"), true, 'Test 153');
test(isPathCrossing("NSEENWNNWSSSWEEE"), true, 'Test 154');
test(isPathCrossing("NENWSNWSNESW"), true, 'Test 155');
test(isPathCrossing("NNSWESWESWESWESW"), true, 'Test 156');
test(isPathCrossing("NESNESNESNESNES"), true, 'Test 157');
test(isPathCrossing("NESWNNNWWWEES"), true, 'Test 158');
test(isPathCrossing("SSNNSSNNSS"), true, 'Test 159');
test(isPathCrossing("NEWSWNNWSSNWNWEE"), true, 'Test 160');
test(isPathCrossing("NNWNWSSSWNEEE"), true, 'Test 161');
test(isPathCrossing("NENWNSNS"), true, 'Test 162');
test(isPathCrossing("EWSWNWESWE"), true, 'Test 163');
test(isPathCrossing("NNEEWWSS"), true, 'Test 164');
test(isPathCrossing("SEENENENEWSWSWNENE"), true, 'Test 165');
test(isPathCrossing("WNWSSNSSSENEEN"), true, 'Test 166');
test(isPathCrossing("NESESWSEWN"), true, 'Test 167');
test(isPathCrossing("NNEWSWSEWSSNENW"), true, 'Test 168');
test(isPathCrossing("EWEWEWEWEW"), true, 'Test 169');
test(isPathCrossing("SSEWEEWEEE"), true, 'Test 170');
test(isPathCrossing("NSSSSEEEEEWWWWNNNN"), true, 'Test 171');
test(isPathCrossing("NNNWWWSSSE"), false, 'Test 172');
test(isPathCrossing("NSSSNEEEWNWSS"), true, 'Test 173');
test(isPathCrossing("NESWNESW"), true, 'Test 174');
test(isPathCrossing("ESESWNEWSWSWNENESE"), true, 'Test 175');
test(isPathCrossing("NNNWWSSSNE"), true, 'Test 176');
test(isPathCrossing("NEWSWNESWESWNES"), true, 'Test 177');
test(isPathCrossing("NNESSEWW"), true, 'Test 178');
test(isPathCrossing("WEEWEEWEEE"), true, 'Test 179');
test(isPathCrossing("NENENWENWENWENWENW"), true, 'Test 180');
test(isPathCrossing("NNSSEEEWWWS"), true, 'Test 181');
test(isPathCrossing("SWSWSWSWNENENENENE"), true, 'Test 182');
test(isPathCrossing("SSSEEESSSWWNNN"), true, 'Test 183');
test(isPathCrossing("NNSSNNSS"), true, 'Test 184');
test(isPathCrossing("NNSEESSWNW"), true, 'Test 185');
test(isPathCrossing("NNNSSSWEWEWESWNWNWNWWSWSWENENESESESESNESWENSWEWNENSWSEWNESW"), true, 'Test 186');

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
