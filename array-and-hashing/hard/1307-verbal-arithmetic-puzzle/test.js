// Test: 1307. Verbal Arithmetic Puzzle
// 154 test cases from LeetCodeDataset
// Run: node test.js

const { isSolvable } = require("./solution");

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

console.log("\n1307. Verbal Arithmetic Puzzle\n");

test(isSolvable(["SEND","MORE"], "MONEY"), true, 'Test 1');
test(isSolvable(["A","A","A","A"], "AA"), false, 'Test 2');
test(isSolvable({"words": ["SEND", "MORE"], "result": "MONEY"}), Error: Solution.isSolvable[] missing 2 required positional arguments: 'words' and 'result', 'Test 3');
test(isSolvable(["LEET","CODE"], "POINT"), false, 'Test 4');
test(isSolvable(["HELLO","WORLD"], "HIALL"), false, 'Test 5');
test(isSolvable({"words": ["LEET", "CODE"], "result": "POINT"}), Error: Solution.isSolvable[] missing 2 required positional arguments: 'words' and 'result', 'Test 6');
test(isSolvable({"words": ["SIX", "SEVEN", "SEVEN"], "result": "TWENTY"}), Error: Solution.isSolvable[] missing 2 required positional arguments: 'words' and 'result', 'Test 7');
test(isSolvable(["AA","BB"], "CC"), true, 'Test 8');
test(isSolvable(["SIX","SEVEN","SEVEN"], "TWENTY"), true, 'Test 9');
test(isSolvable(["CAT","DOG"], "BIRD"), true, 'Test 10');
test(isSolvable(["ABA","B"], "ABC"), true, 'Test 11');
test(isSolvable(["A","B"], "C"), true, 'Test 12');
test(isSolvable(["ABC","BCD"], "DEE"), false, 'Test 13');
test(isSolvable({"words": ["HELLO", "WORLD"], "result": "HAPPY"}), Error: Solution.isSolvable[] missing 2 required positional arguments: 'words' and 'result', 'Test 14');
test(isSolvable({"words": ["A", "B", "C"], "result": "D"}), Error: Solution.isSolvable[] missing 2 required positional arguments: 'words' and 'result', 'Test 15');
test(isSolvable({"words": ["CAT", "DOG"], "result": "BIRD"}), Error: Solution.isSolvable[] missing 2 required positional arguments: 'words' and 'result', 'Test 16');
test(isSolvable(["HELLO","WORLD"], "PEACE"), true, 'Test 17');
test(isSolvable(["LONG", "WORDS", "HERE"], "ADDITION"), false, 'Test 18');
test(isSolvable(["CASTLE","KNIGHT"], "BATTLE"), false, 'Test 19');
test(isSolvable(["MAX", "MIN"], "SUM"), true, 'Test 20');
test(isSolvable(["ALGEBRA","GEOMETRY"], "MATHEMATICS"), false, 'Test 21');
test(isSolvable(["BAT","BALL","BASE"], "TABLE"), false, 'Test 22');
test(isSolvable(["EULER","GAUSS"], "ARITHMETIC"), false, 'Test 23');
test(isSolvable(["COMPUTER","SCIENCE"], "DISCOVERY"), false, 'Test 24');
test(isSolvable(["FAST", "CAR"], "RACING"), false, 'Test 25');
test(isSolvable(["HEAL","HURT"], "BALANCE"), false, 'Test 26');
test(isSolvable(["MATH","ENGLISH","SCIENCE"], "CURRICULUM"), false, 'Test 27');
test(isSolvable(["HELLO","WORLD"], "PYTHON"), false, 'Test 28');
test(isSolvable(["SAINT","SEER"], "VISION"), false, 'Test 29');
test(isSolvable(["SUN", "MOON", "STAR"], "GALAXY"), false, 'Test 30');
test(isSolvable(["SNOW","ICE"], "COLD"), true, 'Test 31');
test(isSolvable(["HELLO", "WORLD"], "HAPPY"), false, 'Test 32');
test(isSolvable(["A", "BB", "CCC", "DDDD"], "E"), false, 'Test 33');
test(isSolvable(["HELLO","WORLD"], "DISPATCH"), false, 'Test 34');
test(isSolvable(["KNIGHT","KNIGHT"], "WARLORD"), false, 'Test 35');
test(isSolvable(["ZERO","ONE","TWO","THREE"], "SIX"), false, 'Test 36');
test(isSolvable(["FIVE","NINE","ELEVEN"], "TWENTYFIVE"), false, 'Test 37');
test(isSolvable(["TRUE","FALSE"], "PARADOX"), false, 'Test 38');
test(isSolvable(["STAR", "SHIP"], "GALAXY"), false, 'Test 39');
test(isSolvable(["TEN", "TEN", "TEN"], "THIRTY"), false, 'Test 40');
test(isSolvable(["HOUSE", "DOG"], "FAMILY"), false, 'Test 41');
test(isSolvable(["MATH","ROCKS"], "LEARNING"), false, 'Test 42');
test(isSolvable(["SIX", "EIGHT", "TEN"], "TWENTYFOUR"), false, 'Test 43');
test(isSolvable(["APPLE","BANANA"], "GRAPE"), false, 'Test 44');
test(isSolvable(["ONE", "TWO", "THREE", "FOUR", "FIVE"], "SUMUP"), false, 'Test 45');
test(isSolvable(["FOUR", "FIVE", "SIX"], "FIFTEEN"), false, 'Test 46');
test(isSolvable(["UP","DOWN"], "ZERO"), true, 'Test 47');
test(isSolvable(["SUN","MOON"], "STAR"), true, 'Test 48');
test(isSolvable(["BIG","DOG"], "ANIMAL"), false, 'Test 49');
test(isSolvable(["HELLO","WORLD"], "PLANETS"), false, 'Test 50');
test(isSolvable(["MOON", "EARTH"], "UNIVERSE"), false, 'Test 51');
test(isSolvable(["APPLE","BANANA","CHERRY"], "FRUITBOWL"), false, 'Test 52');
test(isSolvable(["HAPPY","BIRTHDAY"], "CELEBRATE"), false, 'Test 53');
test(isSolvable(["ABACAXI","MANGO","KIWI"], "FRUITS"), false, 'Test 54');
test(isSolvable(["CAT", "DOG", "MOUSE"], "PIG"), false, 'Test 55');
test(isSolvable(["UNIVERSAL","GALAXY","EARTH"], "COSMOS"), false, 'Test 56');
test(isSolvable(["BIRD", "FLY", "HIGH"], "FLIGHT"), false, 'Test 57');
test(isSolvable(["ALICE","BOB"], "GAME"), false, 'Test 58');
test(isSolvable(["RIGHT","WRONG"], "FALSE"), false, 'Test 59');
test(isSolvable(["CAT","DOG","MOUSE"], "CLAW"), false, 'Test 60');
test(isSolvable(["ALICE","BOB","CHARLIE"], "FRIENDSHIP"), false, 'Test 61');
test(isSolvable(["PHOENIX","DRAGON"], "MYTHICAL"), false, 'Test 62');
test(isSolvable(["PYTHON","ROCKS"], "PROGRAM"), false, 'Test 63');
test(isSolvable(["FLY", "FLY", "HIGH"], "SKYLINE"), false, 'Test 64');
test(isSolvable(["SEND", "MORE", "MONEY"], "TWICE"), false, 'Test 65');
test(isSolvable(["UNO","DOS","TRES"], "SEIS"), true, 'Test 66');
test(isSolvable(["WIZARD","WAND"], "MAGIC"), false, 'Test 67');
test(isSolvable(["LUCK","IN","THE","DRAW"], "SUCCESS"), false, 'Test 68');
test(isSolvable(["STAR","NIGHT"], "TWILIGHT"), false, 'Test 69');
test(isSolvable(["SUN","MOON","STARS"], "SKYLINE"), false, 'Test 70');
test(isSolvable(["BLACK","WHITE","GRAY"], "COLORS"), false, 'Test 71');
test(isSolvable(["JAVA","PYTHON","CPLUSPLUS"], "PROGRAMMING"), false, 'Test 72');
test(isSolvable(["AARDVARK","ANTELOPE"], "MAMMALS"), false, 'Test 73');
test(isSolvable(["NINE", "NINE"], "EIGHTEEN"), false, 'Test 74');
test(isSolvable(["ALICE","BOB","CHARLIE"], "FICTION"), false, 'Test 75');
test(isSolvable(["ZERO","ONE","TWO","THREE"], "SUM"), false, 'Test 76');
test(isSolvable(["MAGIC","WAND"], "WIZARD"), false, 'Test 77');
test(isSolvable(["JAVA","PYTHON"], "SCRIPT"), false, 'Test 78');
test(isSolvable(["KNIGHT","BISHOP"], "CHECKMATE"), false, 'Test 79');
test(isSolvable(["COMPUTER","SCIENCE","PROGRAMMING"], "DEVELOPMENT"), false, 'Test 80');
test(isSolvable(["EARTH","MOON"], "UNIVERSE"), false, 'Test 81');
test(isSolvable(["SIXTY", "SIXTY"], "ONETWENTY"), false, 'Test 82');
test(isSolvable(["SNOW","FALL"], "SNOWBALL"), false, 'Test 83');
test(isSolvable(["FALCON","HAWK"], "BIRD"), false, 'Test 84');
test(isSolvable(["APPLE", "BANANA"], "GRAPES"), false, 'Test 85');
test(isSolvable(["ZEBRA", "ELEPHANT"], "WILDLIFE"), false, 'Test 86');
test(isSolvable(["ZERO","ONE"], "SUM"), false, 'Test 87');
test(isSolvable(["EARTH","WATER"], "PLANET"), false, 'Test 88');
test(isSolvable(["APPLE","BANANA","CHERRY"], "FRUIT"), false, 'Test 89');
test(isSolvable(["ONE","TWO","THREE","FOUR"], "TEN"), false, 'Test 90');
test(isSolvable(["ONE","TWO","THREE","FOUR"], "SUM"), false, 'Test 91');
test(isSolvable(["MATH","IS","FUN"], "JOKES"), false, 'Test 92');
test(isSolvable(["DOG", "CAT"], "ANIMAL"), false, 'Test 93');
test(isSolvable(["GREEN","BLUE","YELLOW"], "COLORS"), false, 'Test 94');
test(isSolvable(["ZERO","ONE","TWO","THREE"], "FIVE"), false, 'Test 95');
test(isSolvable(["MAT","ADD","SUB"], "SUM"), false, 'Test 96');
test(isSolvable(["KANGAROO","KANGAROO","KANGAROO"], "JUMPOUTS"), false, 'Test 97');
test(isSolvable(["OCEAN","SEA","LAKE"], "WATERBODY"), false, 'Test 98');
test(isSolvable(["WITCH","WAND"], "MAGIC"), true, 'Test 99');
test(isSolvable(["HAPPY", "JOY"], "BLISS"), true, 'Test 100');
test(isSolvable(["STAR","PLANET","GALAXY"], "COSMOS"), false, 'Test 101');
test(isSolvable(["FAST","SLOW"], "BALANCE"), false, 'Test 102');
test(isSolvable(["LEFT","RIGHT"], "EQUAL"), false, 'Test 103');
test(isSolvable(["COOL","DRINK"], "REFRESH"), false, 'Test 104');
test(isSolvable(["MAGICAL","REALM"], "MYSTERY"), false, 'Test 105');
test(isSolvable(["LEARN", "PYTHON"], "CODEING"), false, 'Test 106');
test(isSolvable(["CAR", "BIKE"], "VEHICLE"), false, 'Test 107');
test(isSolvable(["HEART", "SOUL"], "LOVE"), false, 'Test 108');
test(isSolvable(["MATH", "IS", "FUN"], "GAMES"), false, 'Test 109');
test(isSolvable(["PARIS","BERLIN"], "ROME"), false, 'Test 110');
test(isSolvable(["ABCDEFGHIJK", "LMNOPQRS"], "TUVWXYZ"), false, 'Test 111');
test(isSolvable(["SUN", "MOON"], "AURA"), true, 'Test 112');
test(isSolvable(["MATH","SCI","ENG"], "STUDY"), false, 'Test 113');
test(isSolvable(["UNICORN","PEGASUS"], "MYTHOLOGY"), false, 'Test 114');
test(isSolvable(["SUN","MOON","STAR"], "SKY"), false, 'Test 115');
test(isSolvable(["ALPHA","BETA","GAMMA"], "DELTA"), true, 'Test 116');
test(isSolvable(["PYTHON","JAVA"], "SCRIPT"), false, 'Test 117');
test(isSolvable(["CLOCK", "BELL"], "TICKTOCK"), false, 'Test 118');
test(isSolvable(["DAY", "NIGHT"], "TIMELESS"), false, 'Test 119');
test(isSolvable(["TEN","TWO"], "TWELVE"), false, 'Test 120');
test(isSolvable(["FAST","RUN","JUMP"], "ATHLETE"), false, 'Test 121');
test(isSolvable(["APPLE","BANANA"], "CHERRY"), true, 'Test 122');
test(isSolvable(["ALCHEMY","ENCHANT"], "MAGICAL"), false, 'Test 123');
test(isSolvable(["HELLO","WORLD"], "PEACEFUL"), false, 'Test 124');
test(isSolvable(["PYTHON","JAVA","CPLUS"], "PROGRAMMING"), false, 'Test 125');
test(isSolvable(["PYTHON", "JAVA"], "SCRIPT"), false, 'Test 126');
test(isSolvable(["SUN", "MOON", "STAR"], "UNIVERSAL"), false, 'Test 127');
test(isSolvable(["MOUNTAIN","CLIMBER"], "ADVENTURE"), false, 'Test 128');
test(isSolvable(["PYTHON","JAVA","CPLUSPLUS"], "PROGRAMMING"), false, 'Test 129');
test(isSolvable(["HELLO","WORLD"], "HALLO"), false, 'Test 130');
test(isSolvable(["ONE", "TWO", "THREE"], "SIX"), false, 'Test 131');
test(isSolvable(["ABCDE","FGHIJ"], "KLMNO"), false, 'Test 132');
test(isSolvable(["SKY","TREE"], "FOREST"), false, 'Test 133');
test(isSolvable(["PI", "E"], "CIRCLE"), false, 'Test 134');
test(isSolvable(["FOUR","FIVE","SIX"], "FIFTEEN"), false, 'Test 135');
test(isSolvable(["RED","BLUE"], "COLOR"), false, 'Test 136');
test(isSolvable(["JUMP", "HIGH", "LONG"], "JUMPROPE"), false, 'Test 137');
test(isSolvable(["SUN","MOON","STAR"], "PLANET"), false, 'Test 138');
test(isSolvable(["HIGH","LOW"], "AMPLITUDE"), false, 'Test 139');
test(isSolvable(["ALPACA","ANIMAL","ZOO"], "WILDLIFE"), false, 'Test 140');
test(isSolvable(["HAPPY", "JOY"], "HARMONY"), false, 'Test 141');
test(isSolvable(["SPY", "SPY"], "QUIZ"), true, 'Test 142');
test(isSolvable(["APPLE","BANANA"], "FRUIT"), false, 'Test 143');
test(isSolvable(["HAPPY","SAD"], "JOY"), false, 'Test 144');
test(isSolvable(["CRYPT","GRAPH","DRY"], "DRYRUN"), false, 'Test 145');
test(isSolvable(["GENIE","BOTTLE"], "WISHES"), false, 'Test 146');
test(isSolvable(["RED","BLUE"], "GREEN"), false, 'Test 147');
test(isSolvable(["HELLO","WORLD"], "HELLOWORLD"), false, 'Test 148');
test(isSolvable(["BIRD", "FLY"], "SKY"), false, 'Test 149');
test(isSolvable(["MYTH","HERO"], "LEGEND"), false, 'Test 150');
test(isSolvable(["Babbage","Difference","Engine"], "Calculator"), false, 'Test 151');
test(isSolvable(["ZERO", "ONE", "TWO", "THREE"], "SUM"), false, 'Test 152');
test(isSolvable(["PYTHON","JAVA","CPP"], "PROGRAM"), false, 'Test 153');
test(isSolvable(["TREE", "FOREST"], "GREEN"), false, 'Test 154');

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
