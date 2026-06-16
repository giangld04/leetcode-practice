// Test: 920. Number Of Music Playlists
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { numMusicPlaylists } = require("./solution");

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

console.log("\n920. Number Of Music Playlists\n");

test(numMusicPlaylists(5, 5, 2), 120, 'Test 1');
test(numMusicPlaylists(3, 4, 1), 18, 'Test 2');
test(numMusicPlaylists(4, 6, 2), 168, 'Test 3');
test(numMusicPlaylists(3, 3, 1), 6, 'Test 4');
test(numMusicPlaylists(2, 3, 1), 2, 'Test 5');
test(numMusicPlaylists(10, 10, 5), 3628800, 'Test 6');
test(numMusicPlaylists(10, 10, 0), 3628800, 'Test 7');
test(numMusicPlaylists(100, 100, 99), 437918130, 'Test 8');
test(numMusicPlaylists(7, 8, 3), 50400, 'Test 9');
test(numMusicPlaylists(6, 6, 3), 720, 'Test 10');
test(numMusicPlaylists(4, 5, 2), 72, 'Test 11');
test(numMusicPlaylists(2, 3, 0), 6, 'Test 12');
test(numMusicPlaylists(10, 15, 5), 314718922, 'Test 13');
test(numMusicPlaylists(5, 5, 0), 120, 'Test 14');
test(numMusicPlaylists(5, 6, 2), 720, 'Test 15');
test(numMusicPlaylists(1, 1, 0), 1, 'Test 16');
test(numMusicPlaylists(60, 80, 15), 735857219, 'Test 17');
test(numMusicPlaylists(95, 100, 50), 174977625, 'Test 18');
test(numMusicPlaylists(70, 100, 40), 538034361, 'Test 19');
test(numMusicPlaylists(8, 20, 2), 930652117, 'Test 20');
test(numMusicPlaylists(80, 100, 40), 871833725, 'Test 21');
test(numMusicPlaylists(40, 50, 10), 865239591, 'Test 22');
test(numMusicPlaylists(50, 75, 25), 937903747, 'Test 23');
test(numMusicPlaylists(60, 70, 30), 540386145, 'Test 24');
test(numMusicPlaylists(5, 10, 2), 115920, 'Test 25');
test(numMusicPlaylists(3, 9, 1), 762, 'Test 26');
test(numMusicPlaylists(6, 12, 0), 953029440, 'Test 27');
test(numMusicPlaylists(4, 6, 1), 600, 'Test 28');
test(numMusicPlaylists(25, 35, 12), 371031271, 'Test 29');
test(numMusicPlaylists(80, 100, 60), 978677402, 'Test 30');
test(numMusicPlaylists(4, 15, 2), 98280, 'Test 31');
test(numMusicPlaylists(30, 40, 10), 300617761, 'Test 32');
test(numMusicPlaylists(90, 100, 80), 515779794, 'Test 33');
test(numMusicPlaylists(50, 75, 20), 512461610, 'Test 34');
test(numMusicPlaylists(8, 16, 4), 655720152, 'Test 35');
test(numMusicPlaylists(20, 25, 10), 708676825, 'Test 36');
test(numMusicPlaylists(55, 75, 25), 829204517, 'Test 37');
test(numMusicPlaylists(30, 100, 25), 238440403, 'Test 38');
test(numMusicPlaylists(35, 50, 10), 681866396, 'Test 39');
test(numMusicPlaylists(50, 50, 25), 318608048, 'Test 40');
test(numMusicPlaylists(15, 25, 7), 357904575, 'Test 41');
test(numMusicPlaylists(8, 15, 4), 876639965, 'Test 42');
test(numMusicPlaylists(70, 80, 40), 172533607, 'Test 43');
test(numMusicPlaylists(40, 50, 30), 292538678, 'Test 44');
test(numMusicPlaylists(60, 80, 40), 183945178, 'Test 45');
test(numMusicPlaylists(30, 40, 5), 922217496, 'Test 46');
test(numMusicPlaylists(40, 100, 35), 953525405, 'Test 47');
test(numMusicPlaylists(70, 100, 50), 65098072, 'Test 48');
test(numMusicPlaylists(10, 15, 3), 694588868, 'Test 49');
test(numMusicPlaylists(80, 90, 50), 237760215, 'Test 50');
test(numMusicPlaylists(25, 50, 10), 429087363, 'Test 51');
test(numMusicPlaylists(35, 50, 5), 198199125, 'Test 52');
test(numMusicPlaylists(50, 100, 45), 838158734, 'Test 53');
test(numMusicPlaylists(40, 60, 10), 228726453, 'Test 54');
test(numMusicPlaylists(50, 100, 1), 80478639, 'Test 55');
test(numMusicPlaylists(60, 80, 30), 601847758, 'Test 56');
test(numMusicPlaylists(3, 5, 1), 42, 'Test 57');
test(numMusicPlaylists(30, 50, 10), 198995152, 'Test 58');
test(numMusicPlaylists(40, 45, 15), 496260317, 'Test 59');
test(numMusicPlaylists(7, 12, 1), 904614480, 'Test 60');
test(numMusicPlaylists(20, 20, 10), 146326063, 'Test 61');
test(numMusicPlaylists(5, 20, 3), 7864200, 'Test 62');
test(numMusicPlaylists(3, 10, 1), 1530, 'Test 63');
test(numMusicPlaylists(20, 30, 10), 681973277, 'Test 64');
test(numMusicPlaylists(20, 30, 5), 252498779, 'Test 65');
test(numMusicPlaylists(90, 100, 70), 614582964, 'Test 66');
test(numMusicPlaylists(10, 20, 5), 993942190, 'Test 67');
test(numMusicPlaylists(25, 50, 15), 325370660, 'Test 68');
test(numMusicPlaylists(40, 50, 20), 73692427, 'Test 69');
test(numMusicPlaylists(50, 70, 25), 598060511, 'Test 70');
test(numMusicPlaylists(50, 100, 30), 226791857, 'Test 71');
test(numMusicPlaylists(65, 80, 35), 757952334, 'Test 72');
test(numMusicPlaylists(20, 40, 15), 504044110, 'Test 73');
test(numMusicPlaylists(30, 40, 15), 213845140, 'Test 74');
test(numMusicPlaylists(30, 60, 20), 611199752, 'Test 75');
test(numMusicPlaylists(30, 50, 15), 745316193, 'Test 76');
test(numMusicPlaylists(45, 60, 10), 447565182, 'Test 77');
test(numMusicPlaylists(45, 60, 25), 422620880, 'Test 78');
test(numMusicPlaylists(80, 90, 40), 803255223, 'Test 79');
test(numMusicPlaylists(7, 30, 5), 557163012, 'Test 80');
test(numMusicPlaylists(7, 10, 3), 1764000, 'Test 81');
test(numMusicPlaylists(30, 90, 15), 707675175, 'Test 82');
test(numMusicPlaylists(50, 75, 30), 167112607, 'Test 83');
test(numMusicPlaylists(7, 15, 3), 81965019, 'Test 84');
test(numMusicPlaylists(6, 12, 2), 24555600, 'Test 85');
test(numMusicPlaylists(40, 60, 20), 833839566, 'Test 86');
test(numMusicPlaylists(6, 25, 4), 754974000, 'Test 87');
test(numMusicPlaylists(40, 80, 25), 764575926, 'Test 88');

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
