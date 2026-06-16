// Test: 3137. Minimum Number Of Operations To Make Word K Periodic
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOperationsToMakeKPeriodic } = require("./solution");

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

console.log("\n3137. Minimum Number Of Operations To Make Word K Periodic\n");

test(minimumOperationsToMakeKPeriodic("xyzxyzxyzxyzxyzxyz", 3), 0, 'Test 1');
test(minimumOperationsToMakeKPeriodic("xyzxyzxyzxyz", 3), 0, 'Test 2');
test(minimumOperationsToMakeKPeriodic("abcdefghijabcdefghij", 5), 2, 'Test 3');
test(minimumOperationsToMakeKPeriodic("abcabcabc", 3), 0, 'Test 4');
test(minimumOperationsToMakeKPeriodic("aaaaaaa", 1), 0, 'Test 5');
test(minimumOperationsToMakeKPeriodic("aaaa", 1), 0, 'Test 6');
test(minimumOperationsToMakeKPeriodic("xyzxyzxyzxyzxyzxyz", 6), 0, 'Test 7');
test(minimumOperationsToMakeKPeriodic("abcdabcdabcd", 4), 0, 'Test 8');
test(minimumOperationsToMakeKPeriodic("mnopqrsmnopqrsmnopqrs", 7), 0, 'Test 9');
test(minimumOperationsToMakeKPeriodic("leetcodeleet", 4), 1, 'Test 10');
test(minimumOperationsToMakeKPeriodic("abababab", 2), 0, 'Test 11');
test(minimumOperationsToMakeKPeriodic("zzzzzzzzzzzz", 6), 0, 'Test 12');
test(minimumOperationsToMakeKPeriodic("abcdefabcdefabcdef", 3), 3, 'Test 13');
test(minimumOperationsToMakeKPeriodic("leetcoleet", 2), 3, 'Test 14');
test(minimumOperationsToMakeKPeriodic("abcabcabcabc", 3), 0, 'Test 15');
test(minimumOperationsToMakeKPeriodic("abcdabcdabcdabcd", 4), 0, 'Test 16');
test(minimumOperationsToMakeKPeriodic("abababababab", 2), 0, 'Test 17');
test(minimumOperationsToMakeKPeriodic("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 16), 0, 'Test 18');
test(minimumOperationsToMakeKPeriodic("aaaabbbbccccddddeeeeffff", 4), 5, 'Test 19');
test(minimumOperationsToMakeKPeriodic("hellohellohellohellohellohellohellohello", 5), 0, 'Test 20');
test(minimumOperationsToMakeKPeriodic("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 4), 0, 'Test 21');
test(minimumOperationsToMakeKPeriodic("qwertyqwertyqwertyqwertyqwertyqwerty", 5), 5, 'Test 22');
test(minimumOperationsToMakeKPeriodic("abcdefabcdefabcdefabcdef", 6), 0, 'Test 23');
test(minimumOperationsToMakeKPeriodic("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef", 6), 0, 'Test 24');
test(minimumOperationsToMakeKPeriodic("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 4), 0, 'Test 25');
test(minimumOperationsToMakeKPeriodic("abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgh", 8), 0, 'Test 26');
test(minimumOperationsToMakeKPeriodic("mnopqrstuqponmlkjihgfedcbamnopqrstuqponmlkjihgfedcba", 10), 4, 'Test 27');
test(minimumOperationsToMakeKPeriodic("abcdefgabcdefgabcdefgabcdefgabcdefg", 7), 0, 'Test 28');
test(minimumOperationsToMakeKPeriodic("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 10), 0, 'Test 29');
test(minimumOperationsToMakeKPeriodic("mnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnop", 10), 6, 'Test 30');
test(minimumOperationsToMakeKPeriodic("qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop", 10), 0, 'Test 31');
test(minimumOperationsToMakeKPeriodic("abcdefghabcdefghabcdefgh", 8), 0, 'Test 32');
test(minimumOperationsToMakeKPeriodic("racecaracecaracecaracecaracecaracecaracecaracecaracecaracecaracecaracecaracecaracecaracecaracecar", 7), 10, 'Test 33');
test(minimumOperationsToMakeKPeriodic("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), 25, 'Test 34');
test(minimumOperationsToMakeKPeriodic("mnopqrsmnopqrsmnopqrsmnopqrs", 10), 1, 'Test 35');
test(minimumOperationsToMakeKPeriodic("aaaaaaaaaabbbbbbbbbbcccccccccc", 9), 2, 'Test 36');
test(minimumOperationsToMakeKPeriodic("qwertyuiopasdfghjklzxcvbnm", 1), 25, 'Test 37');
test(minimumOperationsToMakeKPeriodic("qwertyuiopqwertyuiopqwertyuiopqwertyuiop", 12), 2, 'Test 38');
test(minimumOperationsToMakeKPeriodic("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 26), 0, 'Test 39');
test(minimumOperationsToMakeKPeriodic("abacabadabacabadabacabadabacaba", 3), 7, 'Test 40');
test(minimumOperationsToMakeKPeriodic("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 3), 0, 'Test 41');
test(minimumOperationsToMakeKPeriodic("racecaracecaracecaracecaracecar", 7), 3, 'Test 42');
test(minimumOperationsToMakeKPeriodic("aabbccddeeaabbccddee", 5), 2, 'Test 43');
test(minimumOperationsToMakeKPeriodic("zyxwvutrsrqponmlkjihgfedcba", 5), 4, 'Test 44');
test(minimumOperationsToMakeKPeriodic("zzzzzzzzzzzzzzzzzzzzzzzzzz", 6), 0, 'Test 45');
test(minimumOperationsToMakeKPeriodic("abcdefabcdefabcdefabcdefabcdefabcdef", 9), 2, 'Test 46');
test(minimumOperationsToMakeKPeriodic("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 3), 0, 'Test 47');
test(minimumOperationsToMakeKPeriodic("mnopqrstmnopqrstmnopqrstmnopqrst", 10), 2, 'Test 48');
test(minimumOperationsToMakeKPeriodic("abcdefghijklmnopqrstabcdefghijklmnopqrst", 5), 6, 'Test 49');
test(minimumOperationsToMakeKPeriodic("mnopmnopmnopmnopmnopmnopmnopmnop", 8), 0, 'Test 50');
test(minimumOperationsToMakeKPeriodic("abracadabraabracadabraabracadabra", 9), 2, 'Test 51');
test(minimumOperationsToMakeKPeriodic("mnopqrsmnopqrsmnopqrsmnopqrsmnopqrs", 7), 0, 'Test 52');
test(minimumOperationsToMakeKPeriodic("abacabadabacabadabacaba", 5), 3, 'Test 53');
test(minimumOperationsToMakeKPeriodic("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 20), 3, 'Test 54');
test(minimumOperationsToMakeKPeriodic("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", 9), 0, 'Test 55');
test(minimumOperationsToMakeKPeriodic("abcdefabcdefabcdefabcdefabcdefabcdef", 3), 6, 'Test 56');
test(minimumOperationsToMakeKPeriodic("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 12), 0, 'Test 57');
test(minimumOperationsToMakeKPeriodic("abcabcabcabcabcabcabcabcabcabcabcabc", 9), 0, 'Test 58');
test(minimumOperationsToMakeKPeriodic("xyzxyzxyzxyzxyzxyzxyzxyz", 3), 0, 'Test 59');
test(minimumOperationsToMakeKPeriodic("mississippimississippimississippimississippi", 4), 9, 'Test 60');
test(minimumOperationsToMakeKPeriodic("aaaaabbbbbcccccddddd", 5), 3, 'Test 61');
test(minimumOperationsToMakeKPeriodic("abcabcabcabcabcabc", 3), 0, 'Test 62');
test(minimumOperationsToMakeKPeriodic("aaaaaabbbbccccddddeeeeffff", 4), 5, 'Test 63');
test(minimumOperationsToMakeKPeriodic("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 7), 0, 'Test 64');
test(minimumOperationsToMakeKPeriodic("thisisaverylongstringthatrepeatseveryfivethis", 5), 8, 'Test 65');
test(minimumOperationsToMakeKPeriodic("mississippiissippimississippi", 4), 6, 'Test 66');
test(minimumOperationsToMakeKPeriodic("abacabadabacabad", 4), 2, 'Test 67');
test(minimumOperationsToMakeKPeriodic("aabbccddeeffgghhaabbccddeeffgghh", 6), 4, 'Test 68');
test(minimumOperationsToMakeKPeriodic("aabbccddeeffaabbccddeeffaabbccddeeff", 6), 3, 'Test 69');
test(minimumOperationsToMakeKPeriodic("aabbccddeeffaabbccddeeff", 6), 2, 'Test 70');
test(minimumOperationsToMakeKPeriodic("qwertyuiopqwertyuiopqwertyuiop", 12), 1, 'Test 71');
test(minimumOperationsToMakeKPeriodic("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 5), 0, 'Test 72');
test(minimumOperationsToMakeKPeriodic("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", 10), 4, 'Test 73');
test(minimumOperationsToMakeKPeriodic("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 10), 0, 'Test 74');
test(minimumOperationsToMakeKPeriodic("abcdefghijabcdefghijabcdefghijabcdefghij", 10), 0, 'Test 75');
test(minimumOperationsToMakeKPeriodic("qqrqqqrqqqrqqqrqqqrqqqrqqqr", 3), 6, 'Test 76');
test(minimumOperationsToMakeKPeriodic("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 5, 'Test 77');
test(minimumOperationsToMakeKPeriodic("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 15), 1, 'Test 78');
test(minimumOperationsToMakeKPeriodic("baaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaa", 10), 1, 'Test 79');
test(minimumOperationsToMakeKPeriodic("mississippiissippiissippiissipp", 4), 6, 'Test 80');
test(minimumOperationsToMakeKPeriodic("mississippimississippimississippimississippi", 11), 0, 'Test 81');
test(minimumOperationsToMakeKPeriodic("12345678901234567890123456789012345678901234567890", 10), 0, 'Test 82');
test(minimumOperationsToMakeKPeriodic("aabbccddaabbccddaabbccdd", 4), 3, 'Test 83');
test(minimumOperationsToMakeKPeriodic("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 3), 0, 'Test 84');
test(minimumOperationsToMakeKPeriodic("abcabcabcabcabcabcabcabcabcabc", 3), 0, 'Test 85');
test(minimumOperationsToMakeKPeriodic("qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty", 6), 0, 'Test 86');
test(minimumOperationsToMakeKPeriodic("abababababababababababababababab", 2), 0, 'Test 87');
test(minimumOperationsToMakeKPeriodic("mnopqrstmnopqrstmnopqrstmnopqrst", 8), 0, 'Test 88');
test(minimumOperationsToMakeKPeriodic("zyxwvutrsrqponmlkjihgfedcbazyxwvut", 5), 5, 'Test 89');
test(minimumOperationsToMakeKPeriodic("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 26), 0, 'Test 90');
test(minimumOperationsToMakeKPeriodic("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx", 3), 0, 'Test 91');
test(minimumOperationsToMakeKPeriodic("mnopqrstmnopqrstmnopqrst", 10), 1, 'Test 92');
test(minimumOperationsToMakeKPeriodic("aaaaabaaaabaaaabaaaabaaaabaaaabaaaab", 5), 1, 'Test 93');
test(minimumOperationsToMakeKPeriodic("lkjhlkjhlkjhlkjhlkjhlkjhlkjhlkjhlkjhlkjhlkjhlkjhlkjhlkjhlkjhlkjh", 11), 3, 'Test 94');
test(minimumOperationsToMakeKPeriodic("zzzzyyyxxxyyyzzzzxxxxyyyy", 5), 4, 'Test 95');
test(minimumOperationsToMakeKPeriodic("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 5), 0, 'Test 96');
test(minimumOperationsToMakeKPeriodic("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef", 7), 5, 'Test 97');
test(minimumOperationsToMakeKPeriodic("aaaaabbbbbccccddddeeeeffffgggghhhh", 4), 7, 'Test 98');
test(minimumOperationsToMakeKPeriodic("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", 11), 2, 'Test 99');
test(minimumOperationsToMakeKPeriodic("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 12), 0, 'Test 100');
test(minimumOperationsToMakeKPeriodic("qwertyuiopqwertyuiopqwertyuiopqwertyuiop", 10), 0, 'Test 101');
test(minimumOperationsToMakeKPeriodic("abcdefabcdefabcdefabcdefabcdefabcdef", 6), 0, 'Test 102');
test(minimumOperationsToMakeKPeriodic("ababababababababababababababab", 2), 0, 'Test 103');
test(minimumOperationsToMakeKPeriodic("hellohellohellohellohellohellohellohellohellohello", 5), 0, 'Test 104');
test(minimumOperationsToMakeKPeriodic("abababababababababababababababababababab", 4), 0, 'Test 105');

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
