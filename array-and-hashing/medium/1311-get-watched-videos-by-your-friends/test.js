// Test: 1311. Get Watched Videos By Your Friends
// 68 test cases from LeetCodeDataset
// Run: node test.js

const { watchedVideosByFriends } = require("./solution");

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

console.log("\n1311. Get Watched Videos By Your Friends\n");

test(watchedVideosByFriends([["Action","Comedy"],["Action"],["Comedy","Drama"],["Drama"]], [[1,2],[0,3],[0,3],[1,2]], 3, 1), ['Action', 'Comedy', 'Drama'], 'Test 1');
test(watchedVideosByFriends([["X","Y"],["Y","Z"],["Z","X"],["X","Y","Z"]], [[1,2],[0,3],[0,3],[1,2]], 1, 1), ['Z', 'X', 'Y'], 'Test 2');
test(watchedVideosByFriends([["X","Y"],["Z"],["X","Z"],["W"]], [[1,2],[0,3],[0,3],[1,2]], 1, 1), ['W', 'X', 'Y'], 'Test 3');
test(watchedVideosByFriends([["A","B"],["C"],["B","C"],["D"]], [[1,2],[0,3],[0,3],[1,2]], 0, 1), ['B', 'C'], 'Test 4');
test(watchedVideosByFriends([["M","N"],["N"],["M","N"],["O"]], [[1,2],[0,3],[0,3],[1,2]], 2, 1), ['M', 'N', 'O'], 'Test 5');
test(watchedVideosByFriends([["Movie1","Movie2"],["Movie3"],["Movie2","Movie3"],["Movie4"]], [[1,2],[0,3],[0,3],[1,2]], 2, 2), ['Movie3'], 'Test 6');
test(watchedVideosByFriends([["Movie1","Movie2"],["Movie2","Movie3"],["Movie3","Movie4"],["Movie4","Movie5"]], [[1,2],[0,3],[0,3],[1,2]], 2, 2), ['Movie2', 'Movie3'], 'Test 7');
test(watchedVideosByFriends([["P","Q"],["R"],["P","R"],["S"]], [[1,2],[0,3],[0,3],[1,2]], 3, 1), ['P', 'R'], 'Test 8');
test(watchedVideosByFriends([["X","Y"],["Y","Z"],["X","Z"],["W"]], [[1,2],[0,3],[0,3],[1,2]], 1, 1), ['W', 'X', 'Y'], 'Test 9');
test(watchedVideosByFriends([["Movie1"],["Movie2"],["Movie3"],["Movie4"]], [[1,2],[0,3],[0,3],[1,2]], 2, 2), ['Movie2'], 'Test 10');
test(watchedVideosByFriends([["A","B"],["C"],["B","C"],["D"]], [[1,2],[0,3],[0,3],[1,2]], 0, 2), ['D'], 'Test 11');
test(watchedVideosByFriends([["Fitness","Yoga"],["Yoga","Pilates"],["Pilates","Meditation"],["Meditation","TaiChi"],["TaiChi","Fitness"],["Fitness","Yoga"]], [[1,5],[0,2],[1,3],[2,4],[3,5],[0,4]], 0, 3), ['Meditation', 'TaiChi'], 'Test 12');
test(watchedVideosByFriends([["Thriller","Horror"],["Horror","Comedy"],["Comedy","Drama"],["Drama","Thriller"],["Action","Thriller"]], [[1,3],[0,2,4],[1,3],[0,2],[1]], 0, 2), ['Action', 'Comedy', 'Drama', 'Thriller'], 'Test 13');
test(watchedVideosByFriends([["Reality","TalkShow"],["Reality"],["TalkShow","Documentary"],["Documentary"],["Reality","TalkShow"],["Documentary","Reality"],["TalkShow"]], [[1,2],[0,3],[0,4],[1,5],[2,6],[3,6],[4,5]], 2, 2), ['Reality', 'TalkShow'], 'Test 14');
test(watchedVideosByFriends([["Romance","Horror"],["Romance","Drama"],["Horror","Drama"],["Romance"],["Horror","Drama","Romance"]], [[1,2,3],[0,4],[0,3],[0,2,4],[1,3]], 2, 1), ['Horror', 'Romance'], 'Test 15');
test(watchedVideosByFriends([["Thriller"],["Horror","Thriller"],["Horror"],["Comedy","Horror"],["Comedy","Drama"],["Drama","Thriller"]], [[1,2,3],[0,2,4],[0,1,4,5],[0,4,5],[1,2,3,5],[2,3,4]], 3, 3), [], 'Test 16');
test(watchedVideosByFriends([["Thriller","Horror"],["Horror","Romance"],["Romance","Action"],["Action","Comedy"],["Comedy","Thriller"]], [[1,3],[0,2,4],[1,3],[0,2],[1]], 0, 2), ['Action', 'Comedy', 'Romance', 'Thriller'], 'Test 17');
test(watchedVideosByFriends([["Action","Adventure"],["Adventure","Horror"],["Horror","SciFi"],["SciFi","Drama"],["Drama","Action"],["Action","Horror"],["Horror","SciFi"],["SciFi","Adventure"],["Adventure","Drama"],["Drama","Action"]], [[1,3,5,7],[0,2,4,6,8],[1,3,5,7,9],[0,2,4,6,8],[1,3,5,7,9],[0,2,4,6,8],[1,3,5,7,9],[0,2,4,6,8],[1,3,5,7,9],[2,4,6,8]], 4, 2), ['Action', 'Drama', 'Adventure', 'Horror', 'SciFi'], 'Test 18');
test(watchedVideosByFriends([["Action"],["Action","Adventure"],["Action","Adventure","Comedy"],["Action","Adventure","Comedy","Drama"],["Action","Adventure","Comedy","Drama","Thriller"]], [[1,2],[0,3],[0,3,4],[1,2,4],[2,3]], 3, 2), ['Action'], 'Test 19');
test(watchedVideosByFriends([["Horror","Thriller"],["Horror"],["Thriller"],["Horror","Thriller"],["Horror"],["Thriller","Comedy"]], [[1,2],[0,3],[0,3,4],[1,2,5],[2],[3]], 0, 2), ['Thriller', 'Horror'], 'Test 20');
test(watchedVideosByFriends([["Adventure","Sci-Fi"],["Sci-Fi","Animation"],["Animation","Adventure"],["Adventure","Drama"],["Drama","Sci-Fi"],["Sci-Fi","Adventure"]], [[1,4],[0,2,5],[1,3],[2],[0],[1]], 1, 3), [], 'Test 21');
test(watchedVideosByFriends([["Thriller","Horror"],["Horror","SciFi"],["SciFi","Comedy"],["Comedy","Thriller"],["Thriller","SciFi"]], [[1,2],[0,3],[0,4],[1,4],[2,3]], 0, 2), ['Comedy', 'SciFi', 'Thriller'], 'Test 22');
test(watchedVideosByFriends([["Romance","Drama"],["Drama","Thriller"],["Thriller","Horror"],["Horror","Comedy"],["Comedy","Romance"],["Romance","Thriller"]], [[1,2],[0,3,5],[0,4],[1,4],[2,3],[1]], 3, 1), ['Comedy', 'Drama', 'Romance', 'Thriller'], 'Test 23');
test(watchedVideosByFriends([["Anime","Cartoon"],["Drama","Horror"],["Cartoon"],["Sci-Fi","Drama"],["Horror","Anime"]], [[1,2],[0,3],[0,4],[1,4],[2,3]], 0, 2), ['Anime', 'Drama', 'Horror', 'Sci-Fi'], 'Test 24');
test(watchedVideosByFriends([["Drama","Romance"],["Romance","Adventure"],["Adventure","Thriller"],["Thriller","SciFi"],["SciFi","Drama"],["Drama","Adventure"]], [[1,5],[0,2],[1,3],[2,4],[3,5],[0,4]], 3, 3), ['Drama', 'Romance'], 'Test 25');
test(watchedVideosByFriends([["Adventure","Sci-Fi"],["Action","Adventure"],["Sci-Fi"],["Drama"],["Comedy","Drama"]], [[1,2,3],[0,3,4],[0,3,4],[0,1,2,4],[1,2,3]], 0, 2), ['Comedy', 'Drama'], 'Test 26');
test(watchedVideosByFriends([["Sci-Fi","Horror"],["Romance"],["Sci-Fi","Drama"],["Romance","Sci-Fi"],["Horror","Drama"],["Comedy"],["Drama"],["Romance"]], [[1,2,3],[0,4,5],[0,3,6],[0,2,4,7],[1,3,5,7],[1,4,6],[2,5],[3,4,7]], 1, 3), [], 'Test 27');
test(watchedVideosByFriends([["MusicVideo","Pop"],["Pop","Rock"],["Rock","HipHop"],["HipHop","Jazz"],["Jazz","Pop"],["Pop","MusicVideo"]], [[1,3],[0,2],[1,3],[0,2,4],[3,5],[4]], 2, 3), ['MusicVideo', 'Pop'], 'Test 28');
test(watchedVideosByFriends([["SciFi","Romance"],["Action","Adventure"],["Action","SciFi"],["Romance","Adventure"],["SciFi","Drama"],["SciFi","Adventure","Drama"]], [[1,2],[0,3,4],[0,3],[1,2],[2,5],[4]], 2, 2), ['Action', 'Adventure'], 'Test 29');
test(watchedVideosByFriends([["Thriller","Horror"],["Horror"],["Horror","Thriller"],["Action","Drama"],["Action"],["Drama","Thriller"],["Drama"],["Thriller","Horror"],["Drama","Horror"],["Drama","Action"]], [[1,2,3,4,5,6,7,8,9],[0,2,3,4,5,6,7,8],[1,0,3,4,5,6,7,8,9],[1,0,2,4,5,6,7,8,9],[1,2,3,0,5,6,7,8,9],[1,2,3,4,0,6,7,8,9],[1,2,3,4,5,0,7,8,9],[1,2,3,4,5,6,0,8,9],[1,2,3,4,5,6,7,0,9],[1,2,3,4,5,6,7,8,0]], 4, 4), [], 'Test 30');
test(watchedVideosByFriends([["Documentary"],["Documentary","Animation"],["Animation","Horror"],["Horror","Sci-Fi"],["Sci-Fi","Documentary"],["Animation","Sci-Fi"]], [[1,2],[0,3,4],[0,3],[1,2,5],[1,5],[3,4]], 3, 2), ['Sci-Fi', 'Documentary'], 'Test 31');
test(watchedVideosByFriends([["Fantasy","Comedy"],["Fantasy"],["Fantasy","Comedy"],["Drama"],["Fantasy","Drama"],["Comedy","Drama"]], [[1,2],[0,3,4],[0,3],[1,2,5],[2],[3]], 3, 2), ['Comedy', 'Drama', 'Fantasy'], 'Test 32');
test(watchedVideosByFriends([["Adventure","Comedy"],["Action","Adventure"],["Comedy","Drama"],["Drama"],["Action","Adventure"]], [[1,2],[0,3,4],[0,3],[1,2],[1]], 1, 2), ['Comedy', 'Drama'], 'Test 33');
test(watchedVideosByFriends([["Drama"],["Drama","Drama"],["Thriller"],["Thriller","Thriller","Drama"],["Thriller","Drama"]], [[1,2],[0,3],[0,3,4],[1,2,4],[2,3]], 1, 3), [], 'Test 34');
test(watchedVideosByFriends([["Anime","Cartoon"],["Cartoon","Action"],["Action","Adventure"],["Adventure","Comedy"],["Comedy","Anime"]], [[1,2],[0,3],[0,4],[1,4],[2,3]], 1, 3), [], 'Test 35');
test(watchedVideosByFriends([["Sci-Fi","Adventure"],["Action","Drama"],["Drama","Sci-Fi"],["Adventure","Comedy"],["Comedy","Action"]], [[1,2],[0,3,4],[0,3],[1,2],[1,4]], 0, 2), ['Action', 'Adventure', 'Comedy'], 'Test 36');
test(watchedVideosByFriends([["RealityShow","TalkShow"],["TalkShow","Documentary"],["Documentary","RealityShow"],["RealityShow","Drama"],["Drama","TalkShow"],["TalkShow","RealityShow"]], [[1,2],[0,3],[0,3],[1,4],[3,5],[1,5]], 0, 2), ['Drama', 'RealityShow'], 'Test 37');
test(watchedVideosByFriends([["Action","Drama"],["Comedy","Romance"],["Action","Comedy"],["Romance"],["Action","Romance"],["Drama","Comedy"]], [[1,2,3],[0,4],[0,5],[0,5],[1,5],[2,3,4]], 0, 2), ['Action', 'Comedy', 'Drama', 'Romance'], 'Test 38');
test(watchedVideosByFriends([["Animation","Comedy"],["Comedy","Adventure"],["Adventure","Animation"],["Animation","Comedy"],["Adventure"],["Adventure","Comedy"],["Comedy"],["Animation","Adventure"],["Comedy","Animation"],["Animation","Adventure"]], [[1,2,3,4,5,6,7,8,9],[0,2,3,4,5,6,7,8,9],[0,1,3,4,5,6,7,8,9],[0,1,2,4,5,6,7,8,9],[0,1,2,3,5,6,7,8,9],[0,1,2,3,4,6,7,8,9],[0,1,2,3,4,5,7,8,9],[0,1,2,3,4,5,6,0,9],[0,1,2,3,4,5,6,7,0],[0,1,2,3,4,5,6,7,8]], 3, 5), [], 'Test 39');
test(watchedVideosByFriends([["Documentary","Biography"],["Biography","Historical"],["Historical","War"],["War","Documentary"],["Documentary","Biography"],["Biography","Historical"],["Historical","War"],["War","Documentary"]], [[1,2,4],[0,3,5],[0,4,6],[1,5,7],[0,2,8],[1,3,8],[2],[3],[4,5]], 0, 3), ['Documentary', 'War'], 'Test 40');
test(watchedVideosByFriends([["Thriller","Horror"],["Comedy","Action"],["Drama","Comedy"],["Horror","Thriller"],["Action","Drama"]], [[1,2],[0,3,4],[0,3],[1,2],[1,2]], 0, 2), ['Action', 'Drama', 'Horror', 'Thriller'], 'Test 41');
test(watchedVideosByFriends([["Comedy"],["Comedy","Horror"],["Horror","Drama"],["Comedy","Drama","Thriller"],["Drama","Thriller"],["Drama","Thriller","Horror"],["Horror","Drama","Comedy"],["Horror","Drama","Comedy","Thriller"]], [[1,3,4],[0,2,5],[1,4],[0,5,7],[0,2,6],[1,3,6],[4,7],[3,6]], 5, 3), [], 'Test 42');
test(watchedVideosByFriends([["Adventure","Action"],["Action","Comedy"],["Comedy","Horror"],["Horror","Drama"],["Drama","Adventure"]], [[1,2],[0,3],[0,4],[1,4],[2,3]], 4, 2), ['Adventure', 'Comedy', 'Action'], 'Test 43');
test(watchedVideosByFriends([["Adventure","Action"],["Action","Drama"],["Adventure","Drama"],["Drama","Action"],["Adventure","Drama"],["Action","Adventure"],["Adventure","Action"],["Drama","Action"],["Action","Adventure"],["Adventure","Drama"]], [[1,2],[0,3],[0,4],[1,5],[2,6],[3,6],[4,7],[5,8],[6,9],[7,8]], 4, 4), ['Action', 'Adventure', 'Drama'], 'Test 44');
test(watchedVideosByFriends([["Thriller","Romance"],["Action"],["Romance","Drama"],["Drama","Thriller"],["Action","Thriller"],["Action","Romance"]], [[1,2],[0,3],[0,4],[1,5],[2,5],[3,4]], 1, 3), ['Action', 'Thriller'], 'Test 45');
test(watchedVideosByFriends([["RealityShow","TalkShow"],["RealityShow"],["TalkShow"],["RealityShow","TalkShow"],["RealityShow","TalkShow"],["RealityShow","TalkShow"],["RealityShow","TalkShow"],["RealityShow","TalkShow"],["RealityShow","TalkShow"],["RealityShow","TalkShow"]], [[1,2,3,4,5,6,7,8,9],[0],[0],[0],[0],[0],[0],[0],[0],[0]], 0, 1), ['RealityShow', 'TalkShow'], 'Test 46');
test(watchedVideosByFriends([["Horror","Thriller"],["Thriller","Horror"],["Horror","Drama"],["Drama","Thriller"],["Horror","Drama"],["Drama","Thriller"],["Thriller","Horror"],["Horror","Drama"]], [[1,2,4],[0,3,5],[0,4,6],[1,5,7],[0,2,8],[1,3,8],[2],[3],[4,5]], 3, 2), Error: list index out of range, 'Test 47');
test(watchedVideosByFriends([["Animation","ShortFilm"],["ShortFilm","Documentary"],["Documentary","Animation"],["Animation","LiveAction"],["LiveAction","ShortFilm"],["ShortFilm","Documentary"]], [[1,5],[0,2],[1,3],[2,4],[3,5],[0,4]], 3, 2), ['Documentary', 'ShortFilm'], 'Test 48');
test(watchedVideosByFriends([["Animation","Comedy"],["Animation"],["Animation","Comedy"],["Drama"],["Comedy","Drama"],["Drama"]], [[1,2],[0,3],[0,3,4,5],[1,2,5],[2],[2,3]], 2, 3), [], 'Test 49');
test(watchedVideosByFriends([["Music","Documentary"],["Documentary","Animation"],["Animation","Music"],["Music","Animation"],["Animation","Music"]], [[1,2,3,4],[0,2,3,4],[0,1,3,4],[0,1,2,4],[0,1,2,3]], 1, 3), [], 'Test 50');
test(watchedVideosByFriends([["Action"],["Action","Comedy"],["Comedy"],["Drama","Action"],["Drama"],["Action","Drama"],["Action","Comedy"],["Comedy","Drama"]], [[1,2,3],[0,2,3,4],[0,1,5,6],[0,1,6,7],[1,6],[2,7],[2,3,4,7],[3,5,6]], 4, 2), ['Action', 'Comedy', 'Drama'], 'Test 51');
test(watchedVideosByFriends([["Documentary"],["Comedy"],["Drama"],["Comedy"],["Documentary"],["Drama"],["Comedy"],["Documentary"],["Drama"],["Comedy"],["Documentary"]], [[1,2,3],[0,4,5],[0,6,7],[0,8,9],[1,10],[1],[2],[2],[3],[3],[4]], 4, 2), ['Documentary', 'Drama'], 'Test 52');
test(watchedVideosByFriends([["Action","Horror"],["Horror","Sci-Fi"],["Action","Sci-Fi"],["Sci-Fi","Adventure"],["Adventure","Action"],["Adventure","Horror"]], [[1,2,3],[0,4],[0,3],[0,2,4],[1,3]], 0, 3), [], 'Test 53');
test(watchedVideosByFriends([["SciFi","Adventure"],["Adventure","Fantasy"],["Fantasy","Mystery"],["Mystery","Horror"],["Horror","SciFi"]], [[1,4],[0,2],[1,3],[2,4],[0,3]], 2, 2), ['Adventure', 'Horror', 'SciFi'], 'Test 54');
test(watchedVideosByFriends([["Adventure","Animation"],["Action","Adventure"],["Animation","Comedy"],["Action","Comedy"],["Adventure","Comedy"],["Animation","Action"]], [[1,2,3],[0,4,5],[0,3,5],[0,2,4],[1,3,5],[1,2,4]], 1, 2), ['Action', 'Animation', 'Comedy'], 'Test 55');
test(watchedVideosByFriends([["SciFi","Romance"],["Action","Adventure"],["Action","SciFi"],["Romance","Adventure"],["SciFi","Drama"]], [[1,2],[0,3],[0,3,4],[1,2],[2]], 0, 3), [], 'Test 56');
test(watchedVideosByFriends([["Animation","Action"],["Adventure","Comedy"],["Action","Comedy"],["Animation","Adventure"],["Drama","Adventure"]], [[1,3],[0,2,4],[1,3],[0,2],[1,4]], 2, 3), [], 'Test 57');
test(watchedVideosByFriends([["Reality","TalkShow"],["Reality","Documentary"],["TalkShow","Documentary"],["Documentary"],["Reality","TalkShow"],["Documentary","Reality"],["TalkShow"],["Reality","Documentary"],["TalkShow","Documentary"]], [[1,2],[0,3],[0,4],[1,5],[2,6],[3,6],[4,5],[6,7],[7,8]], 3, 3), ['Documentary', 'Reality', 'TalkShow'], 'Test 58');
test(watchedVideosByFriends([["Comedy"],["Action"],["Romance"],["Action","Romance"],["Comedy","Romance"],["Comedy","Action"]], [[1,2,3,4],[0,4,5],[0,5,3],[0,2,5],[0,1,3],[1,2,4]], 2, 3), [], 'Test 59');
test(watchedVideosByFriends([["Thriller"],["Horror"],["Sci-Fi"],["Thriller","Horror"],["Sci-Fi","Thriller"],["Horror","Sci-Fi"]], [[1,2],[0,3,4],[0,5],[1,5],[1,5],[2,3,4]], 2, 3), [], 'Test 60');
test(watchedVideosByFriends([["Romantic","Comedy"],["Action","Adventure"],["Drama","Thriller"],["Comedy","Romantic"],["Adventure","Action"],["Thriller","Drama"],["Romantic","Drama"],["Action","Comedy"],["Adventure","Thriller"]], [[1,2,4],[0,3,5],[0,4,6],[1,5,7],[0,2,8],[1,3,8],[2],[3],[4,5]], 4, 2), ['Action', 'Adventure', 'Romantic', 'Thriller', 'Drama'], 'Test 61');
test(watchedVideosByFriends([["Documentary"],["Documentary","Animation"],["Animation"],["Documentary","Animation","Comedy"],["Comedy","Action"],["Action","Comedy"],["Comedy"]], [[1,2,3],[0,2,4],[0,1,3,5],[0,2,4,5,6],[1,3,5],[2,3,4,6],[3,5]], 1, 4), [], 'Test 62');
test(watchedVideosByFriends([["Horror"],["Horror","Thriller"],["Thriller"],["Horror","Thriller","Comedy"],["Comedy","Action"],["Action","Comedy"],["Action","Comedy"],["Comedy","Thriller"],["Thriller","Horror"]], [[1,2,3],[0,2,3,4],[0,1,5,6],[0,1,6,7],[1,6],[2,7],[2,3,4,7],[3,5,6],[3,7]], 5, 3), ['Action', 'Comedy'], 'Test 63');
test(watchedVideosByFriends([["Horror","SciFi"],["Adventure","SciFi"],["Horror","Comedy"],["Comedy","SciFi"],["Adventure","Comedy"]], [[1,3,4],[0,2],[1,3],[0,2,4],[0,3]], 0, 2), ['Comedy', 'Horror'], 'Test 64');
test(watchedVideosByFriends([["Adventure","Action"],["Action"],["Adventure","Action"],["Adventure"],["Action","Adventure"],["Action"],["Adventure","Action"],["Action","Adventure"]], [[1,2,3,4,5,6,7],[0,2,3,4,5,6,7],[0,1,3,4,5,6,7],[0,1,2,4,5,6,7],[0,1,2,3,5,6,7],[0,1,2,3,4,6,7],[0,1,2,3,4,5,7],[0,1,2,3,4,5,6]], 6, 3), [], 'Test 65');
test(watchedVideosByFriends([["Adventure","Comedy"],["Action","Adventure"],["Comedy","Drama"],["Drama"],["Action","Adventure"]], [[1,2],[0,3,4],[0,3],[1,2],[1]], 0, 2), ['Action', 'Adventure', 'Drama'], 'Test 66');
test(watchedVideosByFriends([["Romance"],["Romance","Comedy"],["Romance"],["Comedy"],["Romance","Action"],["Action","Drama"],["Drama","Action"],["Drama"],["Comedy","Romance"],["Romance","Drama"]], [[1,2,3,4],[0,5,6,7,8,9],[0,9,8],[0,5,7],[0,5,8,9],[1,3,4,6,9],[1,5,9],[1,3,9],[2,4,9],[2,3,4,5,6,7]], 5, 3), [], 'Test 67');
test(watchedVideosByFriends([["Action","Adventure"],["Sci-Fi","Thriller"],["Adventure","Sci-Fi"],["Action","Thriller"],["Action","Sci-Fi"],["Adventure","Thriller"],["Adventure","Sci-Fi"],["Action","Adventure"],["Action","Thriller"],["Sci-Fi","Adventure"]], [[1,2,3],[0,4,5],[0,6,7],[0,8,9],[1],[1,2],[2],[2],[3],[3,4]], 2, 2), ['Action', 'Sci-Fi', 'Thriller'], 'Test 68');

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
