// Test: 1147. Longest Chunked Palindrome Decomposition
// 181 test cases from LeetCodeDataset
// Run: node test.js

const { longestDecomposition } = require("./solution");

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

console.log("\n1147. Longest Chunked Palindrome Decomposition\n");

test(longestDecomposition("abcabc"), 2, 'Test 1');
test(longestDecomposition("abcabcabc"), 3, 'Test 2');
test(longestDecomposition("level"), 5, 'Test 3');
test(longestDecomposition("zyxzyxzyx"), 3, 'Test 4');
test(longestDecomposition("madam"), 5, 'Test 5');
test(longestDecomposition("aaaaa"), 5, 'Test 6');
test(longestDecomposition("merchant"), 1, 'Test 7');
test(longestDecomposition("aabbccddeedccbbaa"), 15, 'Test 8');
test(longestDecomposition("repaper"), 7, 'Test 9');
test(longestDecomposition("ghiabcdefhelloadamhelloabcdefghi"), 7, 'Test 10');
test(longestDecomposition("aaa"), 3, 'Test 11');
test(longestDecomposition("antaprezatepzapreanta"), 11, 'Test 12');
test(longestDecomposition("abcdabcdabcdabcd"), 4, 'Test 13');
test(longestDecomposition("abacaba"), 7, 'Test 14');
test(longestDecomposition("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 52, 'Test 15');
test(longestDecomposition("xyzzyx"), 6, 'Test 16');
test(longestDecomposition("abcddcba"), 8, 'Test 17');
test(longestDecomposition("rotor"), 5, 'Test 18');
test(longestDecomposition("abcdedcba"), 9, 'Test 19');
test(longestDecomposition("refer"), 5, 'Test 20');
test(longestDecomposition("redder"), 6, 'Test 21');
test(longestDecomposition("peep"), 4, 'Test 22');
test(longestDecomposition("abba"), 4, 'Test 23');
test(longestDecomposition("racecar"), 7, 'Test 24');
test(longestDecomposition("civic"), 5, 'Test 25');
test(longestDecomposition("abcdabcd"), 2, 'Test 26');
test(longestDecomposition("a"), 1, 'Test 27');
test(longestDecomposition("abcabcabcabcabcabc"), 6, 'Test 28');
test(longestDecomposition("xyzzyxxyzzyx"), 12, 'Test 29');
test(longestDecomposition("noon"), 4, 'Test 30');
test(longestDecomposition("deified"), 7, 'Test 31');
test(longestDecomposition("racecarlevelracecar"), 19, 'Test 32');
test(longestDecomposition("deed"), 4, 'Test 33');
test(longestDecomposition("abccba"), 6, 'Test 34');
test(longestDecomposition("abab"), 2, 'Test 35');
test(longestDecomposition("aabbccddeeddccbbaa"), 18, 'Test 36');
test(longestDecomposition("abcba"), 5, 'Test 37');
test(longestDecomposition("abcdeedcba"), 10, 'Test 38');
test(longestDecomposition("levellevel"), 10, 'Test 39');
test(longestDecomposition("ababababab"), 5, 'Test 40');
test(longestDecomposition("bananaananabayananabanana"), 13, 'Test 41');
test(longestDecomposition("abcdabcabcabcabcd"), 5, 'Test 42');
test(longestDecomposition("racecarannakayakracecar"), 15, 'Test 43');
test(longestDecomposition("abcabcabcabcabcabcabc"), 7, 'Test 44');
test(longestDecomposition("xxyyxxyyxyyxxyyxxyy"), 5, 'Test 45');
test(longestDecomposition("xylophonephoneyloxyxylophonephoneyloxy"), 10, 'Test 46');
test(longestDecomposition("leveloneleveltwolevelonelevel"), 23, 'Test 47');
test(longestDecomposition("aaaaabaaaabaaaa"), 13, 'Test 48');
test(longestDecomposition("abacababacaba"), 13, 'Test 49');
test(longestDecomposition("rotorcarrot"), 3, 'Test 50');
test(longestDecomposition("leveloneonetwothreefourthreefourtwoonelevel"), 15, 'Test 51');
test(longestDecomposition("aaaaabaaaabaaaaaaaabaaaaabaaaabaaaa"), 27, 'Test 52');
test(longestDecomposition("noonnoonnoonnoonnoonnoon"), 24, 'Test 53');
test(longestDecomposition("annakayakannakayakannakayakannakayakannakayak"), 5, 'Test 54');
test(longestDecomposition("abcdefghihgfedcbaabcdefghihgfedcba"), 34, 'Test 55');
test(longestDecomposition("abcdefgfedcbaabcdefgfedcbaabcdefgfedcba"), 39, 'Test 56');
test(longestDecomposition("abacabaabacaba"), 14, 'Test 57');
test(longestDecomposition("qwertyuiopasdfghjklzxcvbnmmnbvcxzlkjhgfdsapoiuytrewq"), 52, 'Test 58');
test(longestDecomposition("madamimadamimadam"), 17, 'Test 59');
test(longestDecomposition("kayak"), 5, 'Test 60');
test(longestDecomposition("thisisaverylongstringwhichdoesnotrepeatthisisaverylongstring"), 3, 'Test 61');
test(longestDecomposition("deifiedrotorcarcaretordeified"), 21, 'Test 62');
test(longestDecomposition("madamimadamimadamimadamimadam"), 29, 'Test 63');
test(longestDecomposition("noonnoonnoonnoonnoonnoonnoonnoon"), 32, 'Test 64');
test(longestDecomposition("deifiedrotordeified"), 19, 'Test 65');
test(longestDecomposition("noonracecarnoon"), 15, 'Test 66');
test(longestDecomposition("madamimadam"), 11, 'Test 67');
test(longestDecomposition("repaperdeified"), 1, 'Test 68');
test(longestDecomposition("deededeed"), 9, 'Test 69');
test(longestDecomposition("ananaananaananananananananananana"), 15, 'Test 70');
test(longestDecomposition("racecarlevelracecarlevelracecarlevel"), 3, 'Test 71');
test(longestDecomposition("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 18, 'Test 72');
test(longestDecomposition("racecarlevelmadamracecar"), 15, 'Test 73');
test(longestDecomposition("leveloneonelevel"), 12, 'Test 74');
test(longestDecomposition("xyzyxzyzyxzyzyxzyx"), 15, 'Test 75');
test(longestDecomposition("abcdefghihgfedcba"), 17, 'Test 76');
test(longestDecomposition("abbaabbaabbaabbaabba"), 20, 'Test 77');
test(longestDecomposition("abacabaabacabaabacaba"), 21, 'Test 78');
test(longestDecomposition("abcdabcdeedcbadcbabcd"), 3, 'Test 79');
test(longestDecomposition("abccbaabccba"), 12, 'Test 80');
test(longestDecomposition("abracadabra"), 7, 'Test 81');
test(longestDecomposition("madammadam"), 10, 'Test 82');
test(longestDecomposition("aaaaaaaaabbbbbbbbbbbbbbbccccccccccccccccccccdd"), 1, 'Test 83');
test(longestDecomposition("deifiedrotorleveldeified"), 15, 'Test 84');
test(longestDecomposition("racecarlevelracecarlevelracecarlevelracecarlevel"), 4, 'Test 85');
test(longestDecomposition("madaminnadammadam"), 11, 'Test 86');
test(longestDecomposition("leveldeifiedmadamdeifiedlevel"), 29, 'Test 87');
test(longestDecomposition("abacabacabacabac"), 4, 'Test 88');
test(longestDecomposition("aaaabbbbccccaaaabbbbcccc"), 2, 'Test 89');
test(longestDecomposition("noonnoonnoon"), 12, 'Test 90');
test(longestDecomposition("xyzyxzyzyxzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyxzyzyx"), 33, 'Test 91');
test(longestDecomposition("abcdefgabcdefgabcdefg"), 3, 'Test 92');
test(longestDecomposition("abracadabraabracadabra"), 14, 'Test 93');
test(longestDecomposition("civiccivic"), 10, 'Test 94');
test(longestDecomposition("annakayakannakayakannakayakannakayakannakayakannakayakannakayak"), 7, 'Test 95');
test(longestDecomposition("rotorcarrots"), 1, 'Test 96');
test(longestDecomposition("abracadabraacarab"), 11, 'Test 97');
test(longestDecomposition("kayakkayakkayak"), 15, 'Test 98');
test(longestDecomposition("nun"), 3, 'Test 99');
test(longestDecomposition("annakayakannakayakannakayak"), 3, 'Test 100');
test(longestDecomposition("rotorlevelrotor"), 15, 'Test 101');
test(longestDecomposition("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"), 2, 'Test 102');
test(longestDecomposition("aabbccddeeddccbaa"), 7, 'Test 103');
test(longestDecomposition("abbaabbaabba"), 12, 'Test 104');
test(longestDecomposition("xyzxyzxyzxyzxyzxyzxyzxyz"), 8, 'Test 105');
test(longestDecomposition("levellevellevellevel"), 20, 'Test 106');
test(longestDecomposition("abccbaabccbaabccba"), 18, 'Test 107');
test(longestDecomposition("abcdeedcbaabcdeedcbaabcdeedcba"), 30, 'Test 108');
test(longestDecomposition("abcdefgfedcbaabcdefg"), 3, 'Test 109');
test(longestDecomposition("levelmadamlevel"), 15, 'Test 110');
test(longestDecomposition("abcabcabcabc"), 4, 'Test 111');
test(longestDecomposition("abacabadabacabaabacabadabacaba"), 30, 'Test 112');
test(longestDecomposition("rotorcarcaretor"), 7, 'Test 113');
test(longestDecomposition("annakayakannakayakannakayakannakayak"), 4, 'Test 114');
test(longestDecomposition("levellevellevellevellevellevellevellevellevellevellevellevel"), 60, 'Test 115');
test(longestDecomposition("levellevellevellevellevellevel"), 30, 'Test 116');
test(longestDecomposition("aaaaabbbbbaaaabbbbbaaaaa"), 24, 'Test 117');
test(longestDecomposition("abcdabcabcabcd"), 4, 'Test 118');
test(longestDecomposition("aaaabbbbccccbbbbaaaa"), 20, 'Test 119');
test(longestDecomposition("madamimadamimadamimadamimadamimadamimadamimadam"), 47, 'Test 120');
test(longestDecomposition("abcdxyzyxzyxcddcbaabcdxyzyxzyxcddcba"), 18, 'Test 121');
test(longestDecomposition("abacabadabacabadabacaba"), 23, 'Test 122');
test(longestDecomposition("deifieddeified"), 14, 'Test 123');
test(longestDecomposition("deifiedracecardeified"), 21, 'Test 124');
test(longestDecomposition("noonnoonnoonnoon"), 16, 'Test 125');
test(longestDecomposition("radar"), 5, 'Test 126');
test(longestDecomposition("abacabadabacaba"), 15, 'Test 127');
test(longestDecomposition("annakayakannakayak"), 2, 'Test 128');
test(longestDecomposition("abcdabcdefgabcdefgdcba"), 10, 'Test 129');
test(longestDecomposition("racecarannakayak"), 1, 'Test 130');
test(longestDecomposition("abbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabba"), 44, 'Test 131');
test(longestDecomposition("abacabadabacabad"), 2, 'Test 132');
test(longestDecomposition("rotorrotor"), 10, 'Test 133');
test(longestDecomposition("abcabcabcabcabc"), 5, 'Test 134');
test(longestDecomposition("abracadabracadabra"), 11, 'Test 135');
test(longestDecomposition("levellevellevellevellevel"), 25, 'Test 136');
test(longestDecomposition("aaaaaabaaaaa"), 11, 'Test 137');
test(longestDecomposition("aabbccddeedcbaabbccdd"), 3, 'Test 138');
test(longestDecomposition("hellohellobellohellobellohello"), 4, 'Test 139');
test(longestDecomposition("xyzzxyzzxyzz"), 3, 'Test 140');
test(longestDecomposition("xxyyzzzyyxxyyyzzzzyyxx"), 15, 'Test 141');
test(longestDecomposition("aabbccddeeeedddccbbaaa"), 5, 'Test 142');
test(longestDecomposition("deifiedrotor"), 1, 'Test 143');
test(longestDecomposition("abcdeedcbaabcdeedcba"), 20, 'Test 144');
test(longestDecomposition("abababababababab"), 8, 'Test 145');
test(longestDecomposition("abacabaabacabaabacabaabacaba"), 28, 'Test 146');
test(longestDecomposition("aaaabbbbccccddddeeeeffffeeeeggggccccbbbbaaaaffff"), 1, 'Test 147');
test(longestDecomposition("wow"), 3, 'Test 148');
test(longestDecomposition("abcdabccbaabcd"), 8, 'Test 149');
test(longestDecomposition("abcabcabcabcabcabcabcd"), 1, 'Test 150');
test(longestDecomposition("abcxyzzyxcba"), 12, 'Test 151');
test(longestDecomposition("racecarlevelracecarlevelracecarlevelracecarlevelracecarlevel"), 5, 'Test 152');
test(longestDecomposition("madamimadamimadamimadamimadamimadam"), 35, 'Test 153');
test(longestDecomposition("noonabbadacabbaaddaabbnoon"), 15, 'Test 154');
test(longestDecomposition("xyzzyxzyxzyxzyxzyxzyxzyxyz"), 15, 'Test 155');
test(longestDecomposition("levellevellevellevellevellevellevellevel"), 40, 'Test 156');
test(longestDecomposition("abababababababababababab"), 12, 'Test 157');
test(longestDecomposition("mississippiississimississimississippi"), 17, 'Test 158');
test(longestDecomposition("aabbccddeedcba"), 3, 'Test 159');
test(longestDecomposition("xyzyxzyzyxzyx"), 11, 'Test 160');
test(longestDecomposition("aaaaabaaa"), 7, 'Test 161');
test(longestDecomposition("abcdcdeabcdcdeabcdcdeabcd"), 7, 'Test 162');
test(longestDecomposition("racecarracecar"), 14, 'Test 163');
test(longestDecomposition("rotorrotorrotor"), 15, 'Test 164');
test(longestDecomposition("racecarlevelracecarlevel"), 2, 'Test 165');
test(longestDecomposition("kayakkayak"), 10, 'Test 166');
test(longestDecomposition("noonnoon"), 8, 'Test 167');
test(longestDecomposition("racecarlevelmadamracecarlevelmadam"), 2, 'Test 168');
test(longestDecomposition("abcxyzzyxcbaabcxyzzyxcba"), 24, 'Test 169');
test(longestDecomposition("redividerrotorredivider"), 23, 'Test 170');
test(longestDecomposition("ababababababababababababababababab"), 17, 'Test 171');
test(longestDecomposition("referrefer"), 10, 'Test 172');
test(longestDecomposition("noonnoonnoonnoonnoonnoonnoonnoonnoonnoon"), 40, 'Test 173');
test(longestDecomposition("madamimadamimadamimadam"), 23, 'Test 174');
test(longestDecomposition("abbaabbaabbaabba"), 16, 'Test 175');
test(longestDecomposition("mississippi"), 1, 'Test 176');
test(longestDecomposition("aabbccddeedccbbaaa"), 5, 'Test 177');
test(longestDecomposition("abcdeabcdeabcde"), 3, 'Test 178');
test(longestDecomposition("racecarracecarracecar"), 21, 'Test 179');
test(longestDecomposition("redivider"), 9, 'Test 180');
test(longestDecomposition("thisisaverylongstringwithnorepeatedpattern"), 1, 'Test 181');

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
