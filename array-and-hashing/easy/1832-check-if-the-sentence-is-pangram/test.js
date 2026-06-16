// Test: 1832. Check If The Sentence Is Pangram
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { checkIfPangram } = require("./solution");

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

console.log("\n1832. Check If The Sentence Is Pangram\n");

test(checkIfPangram("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 1');
test(checkIfPangram("quickbrownfoxjumpsoverthelazydog"), true, 'Test 2');
test(checkIfPangram("aaaaabbbbbccccc"), false, 'Test 3');
test(checkIfPangram("a"), false, 'Test 4');
test(checkIfPangram("thequickbrownfoxjumpsoverthelazydogandmorelettersjusttoextendthelengthofthesentenceevenmorejustformeasurements"), true, 'Test 5');
test(checkIfPangram("hellothere"), false, 'Test 6');
test(checkIfPangram("hello"), false, 'Test 7');
test(checkIfPangram("thequickbrownfoxjumpsoverthelazy"), false, 'Test 8');
test(checkIfPangram("abcdefghijjklmnopqrstuvwxyz"), true, 'Test 9');
test(checkIfPangram("hello world"), false, 'Test 10');
test(checkIfPangram("abcdefghijklmnopqrstuvwxyzzzzz"), true, 'Test 11');
test(checkIfPangram("leetcode"), false, 'Test 12');
test(checkIfPangram("thisisaverylongsentencebutnotapangram"), false, 'Test 13');
test(checkIfPangram("abcdefghijklmnopqrstuvwxyz"), true, 'Test 14');
test(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"), true, 'Test 15');
test(checkIfPangram("abcdefghijklmnopqrstuvwxyzabc"), true, 'Test 16');
test(checkIfPangram("mississippi"), false, 'Test 17');
test(checkIfPangram("thequickbrownfoxjumpsoverthelaz"), false, 'Test 18');
test(checkIfPangram("zyxwvutsrqponmlkjihgfedcba"), true, 'Test 19');
test(checkIfPangram("abcdefghijlkmnopqrstuvwxyz"), true, 'Test 20');
test(checkIfPangram("thequickbrownfoxjumpsoverthelazydogandthenomeofthezebra"), true, 'Test 21');
test(checkIfPangram("aquickmovementsoftheenemywilljeopardizethesecurityofthefort"), false, 'Test 22');
test(checkIfPangram("neverjumpoveraslydogquicklyasmyfastcat"), false, 'Test 23');
test(checkIfPangram("jumpedoverthelazybrownfoxquickly"), false, 'Test 24');
test(checkIfPangram("thisisaverylongsentencethatwantsyoumakesurethatispangram"), false, 'Test 25');
test(checkIfPangram("everygoodboydoesfine"), false, 'Test 26');
test(checkIfPangram("thequickbrownfoxjumpsoverthefly"), false, 'Test 27');
test(checkIfPangram("thefoxjumpedoveralazydogandquicklymunchedberries"), false, 'Test 28');
test(checkIfPangram("aquickmovofjumpsbxngthevlackdwarf"), false, 'Test 29');
test(checkIfPangram("abcdefghijklnopqrstuvwxyz"), false, 'Test 30');
test(checkIfPangram("sphinxofblackquartzjudgemyvowels"), true, 'Test 31');
test(checkIfPangram("thequickbrownfoxjumpsoverthelazydozzzzzzzzzz"), false, 'Test 32');
test(checkIfPangram("aabbbcccdddeeefffggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssttttuuuuvvvvwwwwxxxxyyyyzzzz"), true, 'Test 33');
test(checkIfPangram("thisisaverylongsentencethatshouldcontainalllettersquickly"), false, 'Test 34');
test(checkIfPangram("thebrownfoxjumpsovertheleazydog"), false, 'Test 35');
test(checkIfPangram("phinxofquizzingjudgesbringsmywonder"), false, 'Test 36');
test(checkIfPangram("packmyboxwithfivedozenliquorjugsquicklyandjudgeeachvowel"), true, 'Test 37');
test(checkIfPangram("vowelsaeiouyzqjfdxhcntrbplsmkgw"), true, 'Test 38');
test(checkIfPangram("jumpsquickonthisbrownfox"), false, 'Test 39');
test(checkIfPangram("fivexwiseguysjumpquicklyonthiszanyboat"), false, 'Test 40');
test(checkIfPangram("aquickmovewiththiszestyjuicebringsvexflation"), false, 'Test 41');
test(checkIfPangram("quickbrownfoxjumpsoverthelazydogquickbrownfoxjumpsoverthelazydog"), true, 'Test 42');
test(checkIfPangram("pythonprogramminglanguage"), false, 'Test 43');
test(checkIfPangram("xylophonesarefunbutquickbrownfoxjumpsoverthelazydog"), true, 'Test 44');
test(checkIfPangram("thequickbrownfoxjumpsoverthelazydogy"), true, 'Test 45');
test(checkIfPangram("qwertypoiuytrewqasdfghjklzxcvbnmasdfghjklzxcvbnmqwertyuiopcvbnm"), true, 'Test 46');
test(checkIfPangram("zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), true, 'Test 47');
test(checkIfPangram("thesixfatfingersjumpquicklyonthisverylazydog"), false, 'Test 48');
test(checkIfPangram("jumpsfoxoverthelazydogquickb"), false, 'Test 49');
test(checkIfPangram("sixjovialfellowshavequicklyzippedanddrunkmanybeers"), false, 'Test 50');
test(checkIfPangram("abacaxypromiseyouanelephantwhoxylophones"), false, 'Test 51');
test(checkIfPangram("jumpedoverthelazydogthequickbrownfox"), false, 'Test 52');
test(checkIfPangram("sphinxofblackquartzjudgemyvexzwift"), true, 'Test 53');
test(checkIfPangram("thequickbrownfoxjumpedoverthelazydogquickly"), false, 'Test 54');
test(checkIfPangram("abcdefghijklmnopqrstuvwxy"), false, 'Test 55');
test(checkIfPangram("abcdefghijklmnopqrstuvwxyzzzzzzzzzz"), true, 'Test 56');
test(checkIfPangram("foxjumpsoverthelazydogquickbrown"), true, 'Test 57');
test(checkIfPangram("thisquestionaboutpangramsissomewhatredundant"), false, 'Test 58');
test(checkIfPangram("aquickbrownfoxjumpsoverthelazydog"), true, 'Test 59');
test(checkIfPangram("jumpedoverthelazydogquickbrownfox"), false, 'Test 60');
test(checkIfPangram("aquickmovingtonafleetofsixgreyhounds"), false, 'Test 61');
test(checkIfPangram("thequickbrownfoxjumpsoverthelazydogg"), true, 'Test 62');
test(checkIfPangram("howvexinglyquickdaftzebrasjump"), true, 'Test 63');
test(checkIfPangram("quickbrownfoxjumpsoverthelazydogzzzzzzzzzz"), true, 'Test 64');
test(checkIfPangram("aquickmovementsofthejaguarzephyr"), false, 'Test 65');
test(checkIfPangram("quicklyjudginghowvexingzebraflowscanbeverytricky"), false, 'Test 66');
test(checkIfPangram("aquickbrownfoxjumpsoverthelazydogandbackagain"), true, 'Test 67');
test(checkIfPangram("abcdefghijklnopqrstuvwxyzabcdefghijklnopqrstuvwxyz"), false, 'Test 68');
test(checkIfPangram("jellyoftheplumlovesmeandthemonkeyrinsesupwithgrapejuicequickly"), false, 'Test 69');
test(checkIfPangram("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), true, 'Test 70');
test(checkIfPangram("thebrownfoxjumpedoveralazylazydog"), false, 'Test 71');
test(checkIfPangram("packmyboxwithfivedozenliquorjugs"), true, 'Test 72');
test(checkIfPangram("foxjumpsoverthelazydogquickbrownzzzzzzzzzz"), true, 'Test 73');
test(checkIfPangram("althoughsomehumansareabsolutelyastonishing"), false, 'Test 74');
test(checkIfPangram("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), true, 'Test 75');
test(checkIfPangram("jovialwaltzsexemplifiesquickbymyflyfriend"), false, 'Test 76');
test(checkIfPangram("aquickbrownfoxjumpsoverthelazydogs"), true, 'Test 77');
test(checkIfPangram("thequickbrownfoxjumpsoverthelazydo"), false, 'Test 78');
test(checkIfPangram("abcdefghjklmnopqrstuvwxyz"), false, 'Test 79');
test(checkIfPangram("veryfewlazydogslikejumpingoverthebigbrownfox"), false, 'Test 80');
test(checkIfPangram("therearemanysmallpacksofdifferentbooksinthelibrary"), false, 'Test 81');
test(checkIfPangram("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), true, 'Test 82');
test(checkIfPangram("jimquicklyzippedvexedfowlsbymyplushog"), false, 'Test 83');
test(checkIfPangram("quickbrownfoxjumpsoverthelazydogs"), true, 'Test 84');
test(checkIfPangram("abcdefghijkllllmnopqrstuvwxyz"), true, 'Test 85');
test(checkIfPangram("thequickbrownfoxjumpsoverthelazydogandmore"), true, 'Test 86');
test(checkIfPangram("everygoodboydoesfinejustkickslovingmonkeysnearpianoquicksly"), false, 'Test 87');
test(checkIfPangram("pqrsghijklmnabcdefwxyzotuvcd"), true, 'Test 88');
test(checkIfPangram("pangramsarefunnywordsusedinyogamatclasses"), false, 'Test 89');
test(checkIfPangram("thequickbrownfoxjumpedoverthelazydogandthenranoff"), false, 'Test 90');
test(checkIfPangram("fourxsixtwoseveneleveneightfivenineninetwozero"), false, 'Test 91');
test(checkIfPangram("abracadabracabracadabra"), false, 'Test 92');
test(checkIfPangram("mjklqrswxzytfpuhncideaoxbgvlozmt"), true, 'Test 93');
test(checkIfPangram("thequickbrownfoxjumpsoverthelazydogandcat"), true, 'Test 94');
test(checkIfPangram("thisisaverylongstringsentencethatwillnotbepangram"), false, 'Test 95');
test(checkIfPangram("quovadis"), false, 'Test 96');
test(checkIfPangram("thisisaverylongsentencethatjustmightcontainallthelettersofthealphabet"), false, 'Test 97');
test(checkIfPangram("everygoodboydoesfineandzestfullyjumpoverlazysnails"), false, 'Test 98');

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
