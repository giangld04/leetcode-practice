// Test: 864. Shortest Path To Get All Keys
// 71 test cases from LeetCodeDataset
// Run: node test.js

const { shortestPathAllKeys } = require("./solution");

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

console.log("\n864. Shortest Path To Get All Keys\n");

test(shortestPathAllKeys(["@.b..","###.#","A.B.c"]), -1, 'Test 1');
test(shortestPathAllKeys(["@.b","#.A","aBc"]), 8, 'Test 2');
test(shortestPathAllKeys(["@Aa"]), -1, 'Test 3');
test(shortestPathAllKeys(["@.b..","#.A#.","a.c.C"]), 8, 'Test 4');
test(shortestPathAllKeys(["@...a","#.#B.",".....","b.cC.","....."]), 11, 'Test 5');
test(shortestPathAllKeys(["@...a",".#.b.","....A","#..B.","....b"]), -1, 'Test 6');
test(shortestPathAllKeys(["@...a","#.###","b.BA."]), 10, 'Test 7');
test(shortestPathAllKeys(["@........a","........B",".........",".......C.",".........",".....D..."]), 9, 'Test 8');
test(shortestPathAllKeys(["aA.b","@.B#","...."]), 4, 'Test 9');
test(shortestPathAllKeys(["@.a..","###.#","b.A.B"]), 8, 'Test 10');
test(shortestPathAllKeys(["@.aA","b.Bb","...."]), -1, 'Test 11');
test(shortestPathAllKeys(["@..aA","..B#.","....b"]), 6, 'Test 12');
test(shortestPathAllKeys(["@abc","###.","A#B.","C..."]), 3, 'Test 13');
test(shortestPathAllKeys(["@abc","###.","A.BC"]), 3, 'Test 14');
test(shortestPathAllKeys(["@.....",".....a","#.....",".....b","#.....",".....A","#.....",".....B"]), 8, 'Test 15');
test(shortestPathAllKeys(["@abcdef","###GHI.","JKLMNO.","PQRST.","UVWXY.","Z....."]), 6, 'Test 16');
test(shortestPathAllKeys(["@.....",".....a","#.....",".....b","#.....",".....A","#.....",".....B","......c","......C"]), -1, 'Test 17');
test(shortestPathAllKeys(["@.abc","###.#","A#B#C","D.E.F","G.H.I","J.K.L","M.N.O","P.Q.R","S.T.U","V.W.X","Y.Z."]), 4, 'Test 18');
test(shortestPathAllKeys(["@abcdef","ghijklm","nopqrst","uvwxyz.","A.....B","C.....D","E.....F","G.....H","I.....J","K.....L","M.....N","O.....P","Q.....R","S.....T","U.....V","W.....X","Y.....Z"]), Execution timed out, 'Test 19');
test(shortestPathAllKeys(["@..a..","###.B.","....C.","#.D.E.","....F.","#.G.H.","....I.","#.J.K.","....L.","#.M.N.","....O.","#.P.Q.","....R.","#.S.T.","....U.","#.V.W.","....X.","#.Y.Z.","....."]), 3, 'Test 20');
test(shortestPathAllKeys(["@.a...","#.bC..","D#E.F","G...H","...IJ","....K"]), 3, 'Test 21');
test(shortestPathAllKeys(["@..a..","###.#B","...c.C","#####.","..b..A"]), 12, 'Test 22');
test(shortestPathAllKeys(["@...a",".#.b.","....A","#..B.","....b","c...#","...C."]), -1, 'Test 23');
test(shortestPathAllKeys(["@.....",".#...B","A...#.",".c..#.",".....d"]), -1, 'Test 24');
test(shortestPathAllKeys(["@.a..","###.#","b.A.B","C#dE.","f...G","#H..i","j...K","L...."]), -1, 'Test 25');
test(shortestPathAllKeys(["@abc","###.","A.BC","D#..","...E","f...","#G..","hI.."]), -1, 'Test 26');
test(shortestPathAllKeys(["@...a","###.#","b.A.B","###.#","....b","C...c","d.D.e"]), -1, 'Test 27');
test(shortestPathAllKeys(["@...a","###b.","A#B..","C...d","###D.","...eE","f..#.","..F.."]), -1, 'Test 28');
test(shortestPathAllKeys(["@.a###",".....#","b...A#","....#B",".....c",".....C"]), 13, 'Test 29');
test(shortestPathAllKeys(["@......a","###.###","#.......","b......A",".....B..","........"]), Error: string index out of range, 'Test 30');
test(shortestPathAllKeys(["@.......","......#.","b.....A.","....#B..",".......c","......C."]), -1, 'Test 31');
test(shortestPathAllKeys(["@abcdef","###GHIJ","KLMNO.","PQRST.","UVWXY.","Z.....","....AB","CDEFGH"]), 6, 'Test 32');
test(shortestPathAllKeys(["@.......","......#.",".....bA","....#B.",".......c","......C.","........"]), Error: string index out of range, 'Test 33');
test(shortestPathAllKeys(["@.a...","#.bC..","D#E.F","G...H","...IJ","....K","....L","....M"]), 3, 'Test 34');
test(shortestPathAllKeys(["@...a","###b.","A....","#B..."]), 6, 'Test 35');
test(shortestPathAllKeys(["@.......","..a.....","......b.","......B.","......A.","......c.","......C.",".......@"]), 11, 'Test 36');
test(shortestPathAllKeys(["@.a.....",".#####","#.B.C.D","#.E.F.G","#.H.I.J","#.K.L.M","#.N.O.P","#.Q.R.S","#.T.U.V","#.W.X.Y","#.Z....","........"]), 2, 'Test 37');
test(shortestPathAllKeys(["@..aB","###.#","..c.C","#####","..bA."]), -1, 'Test 38');
test(shortestPathAllKeys(["@.a.b","##..#",".C...","A###.","....B"]), 4, 'Test 39');
test(shortestPathAllKeys(["@abcABC","......","......","......","......","......"]), 3, 'Test 40');
test(shortestPathAllKeys(["@abcdef","###..gh","ijkl..m","nopqr..","stuvwxyz"]), Execution timed out, 'Test 41');
test(shortestPathAllKeys(["@.....",".#...B","A...#.",".c..#.",".....d","###.#","..e.E"]), Error: string index out of range, 'Test 42');
test(shortestPathAllKeys(["@.a..","###.#","b.A.B","C#dE.","f...G","#H..i","j...K","L....","M...","#N.."]), Error: string index out of range, 'Test 43');
test(shortestPathAllKeys(["@.aBc","###D.","E...F","G#b.H","....I"]), -1, 'Test 44');
test(shortestPathAllKeys(["@aA....","......#","bB.....","......#",".....c",".....C"]), Error: string index out of range, 'Test 45');
test(shortestPathAllKeys(["@.a.B","###.#","cA.BC","###d.","....D"]), -1, 'Test 46');
test(shortestPathAllKeys(["@abcde","###f.","AB.CD","E....","FGHIJ","KLMNO","PQRST","UVWXY"]), Error: string index out of range, 'Test 47');
test(shortestPathAllKeys(["@.a.B","###.#","cA.BC","###d.","....D",".efE.","#F...","g...."]), -1, 'Test 48');
test(shortestPathAllKeys(["@.a..","###B.","....A","b...."]), 11, 'Test 49');
test(shortestPathAllKeys(["@.abc","###.#","A#B#C","d.e.f","D.E.F","...gH","...ih"]), -1, 'Test 50');
test(shortestPathAllKeys(["@.a.b","#.C.D","....E","F.G.H","I.J.K","L.M.N","O.P.@"]), 4, 'Test 51');
test(shortestPathAllKeys(["@.aB",".###","C#b.","c...","...."]), -1, 'Test 52');
test(shortestPathAllKeys(["@...a","###.#","b.A.B","###.#","....b","C...c"]), -1, 'Test 53');
test(shortestPathAllKeys(["@.a...","#.....","b.....","#.....",".....A",".....B"]), 6, 'Test 54');
test(shortestPathAllKeys(["@abcABC","###...","...###","D...d.",".E...e"]), Error: string index out of range, 'Test 55');
test(shortestPathAllKeys(["@.aB","###C","D#bE","F...",".G.H"]), -1, 'Test 56');
test(shortestPathAllKeys(["@......",".....a",".....#","b.....",".....A","#.....",".....B"]), Error: string index out of range, 'Test 57');
test(shortestPathAllKeys(["@...a","###b.","#B...","....A","....b"]), -1, 'Test 58');
test(shortestPathAllKeys(["@....","#.aB.","C#b.D",".FEG.","....H"]), 4, 'Test 59');
test(shortestPathAllKeys(["@...a","###.#","b.A.B","###.#","....b","C...c","D...d","E...e","F...f"]), -1, 'Test 60');
test(shortestPathAllKeys(["@abc","###.","A.BC","D...","..EF","G...",".H..","IJKL"]), 3, 'Test 61');
test(shortestPathAllKeys(["@.aBc","##D..","E...C","F#bA.","....G"]), -1, 'Test 62');
test(shortestPathAllKeys(["@.a..","#.B..","...cA","d.B.c","A.#.."]), -1, 'Test 63');
test(shortestPathAllKeys(["@.....a","#.....#",".....b","#.....#",".....A",".....B"]), Error: string index out of range, 'Test 64');
test(shortestPathAllKeys(["@......","###...#",".....B.","#####.",".....A","#####.",".....c",".....C",".....d",".....D"]), -1, 'Test 65');
test(shortestPathAllKeys(["@...a","#.b.B","#.#.#","A.B.a",".B...","c...."]), -1, 'Test 66');
test(shortestPathAllKeys(["@.#.a","#..b.","...A.","#..B.","....b","c....","C...d"]), -1, 'Test 67');
test(shortestPathAllKeys(["@.....",".A.B.C","######",".D.E.F","######",".G.H.I","######",".J.K.L","######",".M.N.O","######",".P.Q.R",".....@",".....S",".....T",".....U",".....V",".....W",".....X",".....Y",".....Z"]), 0, 'Test 68');
test(shortestPathAllKeys(["@abc","###.","A.BC","D...","..EF","G...",".H..","IJKL","#...","M..."]), 3, 'Test 69');
test(shortestPathAllKeys(["@.a.b","##C..","D#E.F","G...H","...IJ","....K","....L","....M","....N"]), 4, 'Test 70');
test(shortestPathAllKeys(["@.....",".A.B..","#####.","..C.D.","E.F.G.","H.I.J.","K.L.M.","N.O.P.","Q.R.S.","T.U.V.","W.X.Y.","Z......"]), 0, 'Test 71');

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
