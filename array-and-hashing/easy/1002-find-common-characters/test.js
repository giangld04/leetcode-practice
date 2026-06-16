// Test: 1002. Find Common Characters
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { commonChars } = require("./solution");

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

console.log("\n1002. Find Common Characters\n");

test(commonChars(["abc","abc","abc"]), ['a', 'b', 'c'], 'Test 1');
test(commonChars(["bella","label","roller"]), ['e', 'l', 'l'], 'Test 2');
test(commonChars(["python","java","javascript"]), [], 'Test 3');
test(commonChars(["hello","world","hold"]), ['l', 'o'], 'Test 4');
test(commonChars(["aabbcc","aabbc","abc"]), ['a', 'b', 'c'], 'Test 5');
test(commonChars(["cool","lock","cook"]), ['c', 'o'], 'Test 6');
test(commonChars(["a","a","a","a"]), ['a'], 'Test 7');
test(commonChars(["apple","apricot","peach"]), ['a', 'p'], 'Test 8');
test(commonChars(["happy","happy","happy"]), ['h', 'a', 'p', 'p', 'y'], 'Test 9');
test(commonChars(["a","a","a"]), ['a'], 'Test 10');
test(commonChars(["flower","flow","flight"]), ['f', 'l'], 'Test 11');
test(commonChars(["a","b","c"]), [], 'Test 12');
test(commonChars(["common","commons","commonground"]), ['c', 'o', 'o', 'm', 'm', 'n'], 'Test 13');
test(commonChars(["sophistication","sophisticated","sophisticating"]), ['s', 's', 'o', 'p', 'h', 'i', 'i', 't', 't', 'c', 'a'], 'Test 14');
test(commonChars(["encyclopedia","encyclopedia","encyclopedic"]), ['e', 'e', 'n', 'c', 'c', 'y', 'l', 'o', 'p', 'd', 'i'], 'Test 15');
test(commonChars(["abracadabra","abrakadabrac","abrakadabracd"]), ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'r', 'r', 'c', 'd'], 'Test 16');
test(commonChars(["multifaceted","multimodal","multiplicity"]), ['m', 'u', 'l', 't', 'i'], 'Test 17');
test(commonChars(["encyclopedia","encyclopedic","encyclopediae"]), ['e', 'e', 'n', 'c', 'c', 'y', 'l', 'o', 'p', 'd', 'i'], 'Test 18');
test(commonChars(["repetition","perception","competition"]), ['e', 'p', 't', 'i', 'o', 'n'], 'Test 19');
test(commonChars(["algorithm","logarithm","rhythm","harmony"]), ['r', 'h', 'm'], 'Test 20');
test(commonChars(["xylophone","zoo","ozone"]), ['o', 'o'], 'Test 21');
test(commonChars(["banana","bandana","panama"]), ['a', 'a', 'a', 'n'], 'Test 22');
test(commonChars(["algorithm","logarithm","altruism"]), ['a', 'l', 'r', 'i', 't', 'm'], 'Test 23');
test(commonChars(["floccinaucinihilipilification","pneumonoultramicroscopicsilicovolcanoconiosis","supercalifragilisticexpialidocious"]), ['l', 'l', 'l', 'o', 'o', 'c', 'c', 'c', 'i', 'i', 'i', 'i', 'i', 'i', 'a', 'a', 'u', 'p', 't'], 'Test 24');
test(commonChars(["environment","venture","ambient"]), ['e', 'n', 't'], 'Test 25');
test(commonChars(["algorithm","algorithms","algebra"]), ['a', 'l', 'g', 'r'], 'Test 26');
test(commonChars(["repetition","replication","repetitive"]), ['r', 'e', 'p', 't', 'i', 'i'], 'Test 27');
test(commonChars(["characterization","character","charisma"]), ['c', 'h', 'a', 'a', 'r'], 'Test 28');
test(commonChars(["repetition","petition","portion"]), ['p', 't', 'i', 'o', 'n'], 'Test 29');
test(commonChars(["unbelievable","believable","believability"]), ['b', 'b', 'e', 'e', 'l', 'l', 'i', 'v', 'a'], 'Test 30');
test(commonChars(["xylophone","xylophones","xylophonist"]), ['x', 'y', 'l', 'o', 'o', 'p', 'h', 'n'], 'Test 31');
test(commonChars(["environment","ambient","administrate"]), ['e', 'n', 'i', 'm', 't'], 'Test 32');
test(commonChars(["environment","environments","environmental"]), ['e', 'e', 'n', 'n', 'n', 'v', 'i', 'r', 'o', 'm', 't'], 'Test 33');
test(commonChars(["intersection","intersects","intercept"]), ['i', 'n', 't', 't', 'e', 'e', 'r', 'c'], 'Test 34');
test(commonChars(["abracadabra","abrakadabras","abrakadabratic"]), ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'r', 'r', 'd'], 'Test 35');
test(commonChars(["intersection","interact","interstellar"]), ['i', 'n', 't', 't', 'e', 'r'], 'Test 36');
test(commonChars(["fantastic","fantasy","fantasia"]), ['f', 'a', 'a', 'n', 't', 's'], 'Test 37');
test(commonChars(["mississippi","missouri","missile"]), ['m', 'i', 'i', 's', 's'], 'Test 38');
test(commonChars(["reducibility","reductiveness","reductive"]), ['r', 'e', 'd', 'u', 'c', 'i', 't'], 'Test 39');
test(commonChars(["alphabet","alphabetic","alphanumeric"]), ['a', 'a', 'l', 'p', 'h', 'e'], 'Test 40');
test(commonChars(["repetition","petition","representation"]), ['e', 'p', 't', 't', 'i', 'o', 'n'], 'Test 41');
test(commonChars(["congratulations","congratulate","congratulatory"]), ['c', 'o', 'n', 'g', 'r', 'a', 'a', 't', 't', 'u', 'l'], 'Test 42');
test(commonChars(["zzzzzz","zzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzz"]), ['z', 'z', 'z', 'z', 'z', 'z'], 'Test 43');
test(commonChars(["programming","program","pro"]), ['p', 'r', 'o'], 'Test 44');
test(commonChars(["environment","environmental","environments"]), ['e', 'e', 'n', 'n', 'n', 'v', 'i', 'r', 'o', 'm', 't'], 'Test 45');
test(commonChars(["abbreviation","abbreviate","abbreviations"]), ['a', 'a', 'b', 'b', 'r', 'e', 'v', 'i', 't'], 'Test 46');
test(commonChars(["intersection","interior","interesting"]), ['i', 'i', 'n', 't', 'e', 'r'], 'Test 47');
test(commonChars(["abcdefghij","jihgfedcba","fedcba","abcdefghij"]), ['a', 'b', 'c', 'd', 'e', 'f'], 'Test 48');
test(commonChars(["supercalifragilisticexpialidocious","supercalifragilistic","supercalifragilisticexpialidos"]), ['s', 's', 'u', 'p', 'e', 'r', 'r', 'c', 'c', 'a', 'a', 'l', 'l', 'i', 'i', 'i', 'i', 'f', 'g', 't'], 'Test 49');
test(commonChars(["development","delivery","department"]), ['d', 'e', 'e'], 'Test 50');
test(commonChars(["mississippi","missionary","pessimism"]), ['m', 'i', 'i', 's', 's'], 'Test 51');
test(commonChars(["programming","gramming","paring"]), ['r', 'g', 'a', 'i', 'n'], 'Test 52');
test(commonChars(["zzzzzzzzzz","zzzzzzzzz","zzzzzzzz","zzzzzzz","zzzzzz","zzzzz","zzzz","zzz","zz","z"]), ['z'], 'Test 53');
test(commonChars(["programming","programmer","program"]), ['p', 'r', 'r', 'o', 'g', 'a', 'm'], 'Test 54');
test(commonChars(["xylophone","xylography","xylophonist"]), ['x', 'y', 'l', 'o', 'p', 'h'], 'Test 55');
test(commonChars(["characterization","characterization","characterize"]), ['c', 'c', 'h', 'a', 'a', 'r', 'r', 't', 'e', 'i', 'z'], 'Test 56');
test(commonChars(["orchestration","orchestrated","orchestrator"]), ['o', 'r', 'r', 'c', 'h', 'e', 's', 't', 't', 'a'], 'Test 57');
test(commonChars(["characterization","character","characterization"]), ['c', 'c', 'h', 'a', 'a', 'r', 'r', 't', 'e'], 'Test 58');
test(commonChars(["intersectionality","interact","interstellar"]), ['i', 'n', 't', 't', 'e', 'r', 'a'], 'Test 59');
test(commonChars(["abracadabra","academia","barbara"]), ['a', 'a', 'a'], 'Test 60');
test(commonChars(["aabbcc","bbaacc","ccaabb","aabbc","abbcc","aaccb","abcabc"]), ['a', 'b', 'c'], 'Test 61');
test(commonChars(["abacaxi","bacana","cabana"]), ['a', 'a', 'a', 'b', 'c'], 'Test 62');
test(commonChars(["intersection","interact","interactive"]), ['i', 'n', 't', 't', 'e', 'r', 'c'], 'Test 63');
test(commonChars(["programming","programmer","programmatic"]), ['p', 'r', 'r', 'o', 'g', 'a', 'm', 'm'], 'Test 64');
test(commonChars(["exemplification","exemplary","exemplify"]), ['e', 'e', 'x', 'm', 'p', 'l'], 'Test 65');
test(commonChars(["congratulations","congratulate","congratulations"]), ['c', 'o', 'n', 'g', 'r', 'a', 'a', 't', 't', 'u', 'l'], 'Test 66');
test(commonChars(["abracadabra","alakazam","alchemy"]), ['a'], 'Test 67');
test(commonChars(["mississippi","missouri","missed"]), ['m', 'i', 's', 's'], 'Test 68');
test(commonChars(["aaa","aa","a"]), ['a'], 'Test 69');
test(commonChars(["xylophone","xylophones","xylophonist","xylophonists"]), ['x', 'y', 'l', 'o', 'o', 'p', 'h', 'n'], 'Test 70');
test(commonChars(["mississippi","misstep","misspell"]), ['m', 'i', 's', 's', 'p'], 'Test 71');
test(commonChars(["bookkeeper","bookstore","keeper"]), ['k', 'e', 'r'], 'Test 72');
test(commonChars(["multifaceted","multifarious","multitude"]), ['m', 'u', 'l', 't', 'i'], 'Test 73');
test(commonChars(["multiple","multiplication","multiplicity"]), ['m', 'u', 'l', 'l', 't', 'i', 'p'], 'Test 74');
test(commonChars(["aabbccddeeff","bbaacceeddff","ccaabbeeffdd","aabbeeffccdd","aabbccdde","bbccddeeff","aaccbbeeff"]), ['b', 'b', 'c', 'c', 'e'], 'Test 75');
test(commonChars(["xylophone","xenon","xerox","xylography"]), ['x', 'o'], 'Test 76');
test(commonChars(["repetition","repetitions","repetitive"]), ['r', 'e', 'e', 'p', 't', 't', 'i', 'i'], 'Test 77');
test(commonChars(["mississippi","missouri","missisipi"]), ['m', 'i', 'i', 's', 's'], 'Test 78');
test(commonChars(["beautiful","beautify","beautification"]), ['b', 'e', 'a', 'u', 't', 'i', 'f'], 'Test 79');
test(commonChars(["algorithm","algebra","alignment"]), ['a', 'l', 'g'], 'Test 80');
test(commonChars(["intersection","interact","interaction"]), ['i', 'n', 't', 't', 'e', 'r', 'c'], 'Test 81');
test(commonChars(["exceedingly","excellent","exceptional"]), ['e', 'e', 'x', 'c', 'n', 'l'], 'Test 82');
test(commonChars(["abracadabra","cadabra","abraca"]), ['a', 'a', 'a', 'b', 'r', 'c'], 'Test 83');
test(commonChars(["algorithm","logarithm","rhythm"]), ['r', 't', 'h', 'm'], 'Test 84');
test(commonChars(["quizzing","quizzes","quizzed"]), ['q', 'u', 'i', 'z', 'z'], 'Test 85');
test(commonChars(["sophisticated","sophistication","sophistry"]), ['s', 's', 'o', 'p', 'h', 'i', 't'], 'Test 86');
test(commonChars(["strength","strengths","stressed"]), ['s', 't', 'r', 'e'], 'Test 87');
test(commonChars(["encyclopedia","encyclopediae","encyclopedias"]), ['e', 'e', 'n', 'c', 'c', 'y', 'l', 'o', 'p', 'd', 'i', 'a'], 'Test 88');
test(commonChars(["repetition","petition","competition"]), ['e', 'p', 't', 't', 'i', 'i', 'o', 'n'], 'Test 89');
test(commonChars(["unbelievable","unbeliever","unbelievably"]), ['u', 'n', 'b', 'e', 'e', 'l', 'i', 'v'], 'Test 90');
test(commonChars(["interpolation","interpretation","internationalization"]), ['i', 'i', 'n', 'n', 't', 't', 'e', 'r', 'o', 'a'], 'Test 91');
test(commonChars(["intersection","intercept","interstellar"]), ['i', 'n', 't', 't', 'e', 'e', 'r'], 'Test 92');
test(commonChars(["abcd","bcde","cdef","defg"]), ['d'], 'Test 93');
test(commonChars(["pterodactyl","pterodactyl","pterodactyls"]), ['p', 't', 't', 'e', 'r', 'o', 'd', 'a', 'c', 'y', 'l'], 'Test 94');
test(commonChars(["mississippi","missouri","missed","missives"]), ['m', 'i', 's', 's'], 'Test 95');
test(commonChars(["repetition","replicate","repetitive"]), ['r', 'e', 'e', 'p', 't', 'i'], 'Test 96');
test(commonChars(["algorithm","algorithmic","algorithms"]), ['a', 'l', 'g', 'o', 'r', 'i', 't', 'h', 'm'], 'Test 97');
test(commonChars(["encyclopedia","encyclopedia","encyclopedia"]), ['e', 'e', 'n', 'c', 'c', 'y', 'l', 'o', 'p', 'd', 'i', 'a'], 'Test 98');
test(commonChars(["banana","bandana","bananas"]), ['b', 'a', 'a', 'a', 'n', 'n'], 'Test 99');
test(commonChars(["repetition","perpetuation","petition"]), ['e', 'p', 't', 't', 'i', 'o', 'n'], 'Test 100');
test(commonChars(["algorithm","logarithm","anthology"]), ['a', 'l', 'g', 'o', 't', 'h'], 'Test 101');
test(commonChars(["intersection","interview","interstellar"]), ['i', 'n', 't', 'e', 'e', 'r'], 'Test 102');
test(commonChars(["mississippi","missouri","dismiss"]), ['m', 'i', 'i', 's', 's'], 'Test 103');

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
