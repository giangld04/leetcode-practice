// Test: 2851. String Transformation
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfWays } = require("./solution");

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

console.log("\n2851. String Transformation\n");

test(numberOfWays("abcd", "cdab", 2), 2, 'Test 1');
test(numberOfWays("abcdef", "defabc", 3), 21, 'Test 2');
test(numberOfWays("xyzabc", "abcxyz", 5), 521, 'Test 3');
test(numberOfWays("abcde", "eabcd", 10), 209715, 'Test 4');
test(numberOfWays("xyzxyz", "zxyzxy", 5), 1042, 'Test 5');
test(numberOfWays("aaaaaa", "aaaaaa", 1000000000000000), 410143883, 'Test 6');
test(numberOfWays("abcabcabc", "cababcabc", 4), 0, 'Test 7');
test(numberOfWays("abcdefg", "efgabcd", 3), 31, 'Test 8');
test(numberOfWays("zzzz", "zzzz", 1000000000000000), 468606845, 'Test 9');
test(numberOfWays("ababab", "ababab", 1), 2, 'Test 10');
test(numberOfWays("xyzxyz", "xyzxyz", 5), 1041, 'Test 11');
test(numberOfWays("aaaaaa", "aaaaaa", 5), 3125, 'Test 12');
test(numberOfWays("aabbcc", "ccbaab", 4), 0, 'Test 13');
test(numberOfWays("longstringlongstringlongstringlongstring", "stringlongstringlongstringlongstrin", 100000000000000000100), 0, 'Test 14');
test(numberOfWays("abababababababababab", "babababababababababa", 3), 3430, 'Test 15');
test(numberOfWays("abcdefghijabcdefghij", "defghijabcdefghija", 100000000000000), 0, 'Test 16');
test(numberOfWays("abacabadabacaba", "dabacabaabacaba", 8), 98385937, 'Test 17');
test(numberOfWays("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzabcdefghijklmnopqrstuvwxyzabcd", 100000000000000000), 0, 'Test 18');
test(numberOfWays("abcdabcdabcdabcd", "dabcdabcdabcdabc", 10), 162596648, 'Test 19');
test(numberOfWays("repeatedpatternrepeatedpattern", "atedpatternrepeatedpatternrepe", 99999999999999), 849771837, 'Test 20');
test(numberOfWays("abcabcabcabcabcabc", "cabcabcabcabcabcab", 500000000000000), 685999657, 'Test 21');
test(numberOfWays("mississippi", "ississippim", 10000000000000), 499109493, 'Test 22');
test(numberOfWays("abcabcabcabcabcabcabcabc", "cabcabcabcabcabcabcabcab", 123456789123456789123), 60155055, 'Test 23');
test(numberOfWays("cryptography", "graphycrypto", 500000000000000000), 547734217, 'Test 24');
test(numberOfWays("aaaaabbbbb", "bbbbbbaaaa", 15), 0, 'Test 25');
test(numberOfWays("abcdefghij", "ghijklmnop", 1), 0, 'Test 26');
test(numberOfWays("abcdefabcdef", "defabcdefabc", 123456789123456789), 93349771, 'Test 27');
test(numberOfWays("mississippi", "ississippimis", 6), 0, 'Test 28');
test(numberOfWays("aabbccddeeffgghhiijj", "ddeeffgghhiijjaabbcc", 5), 123805, 'Test 29');
test(numberOfWays("repeatedpatternrepeatedpattern", "patternrepeatedpatternrepe", 7), 0, 'Test 30');
test(numberOfWays("aaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaa", 999999999999999), 644220373, 'Test 31');
test(numberOfWays("abababababababab", "babababababababa", 987654321), 765551830, 'Test 32');
test(numberOfWays("abcdefghijklmnopqrstuvwxyz", "mnopqrstuvwxyzabcdefghijkl", 123456789), 292665766, 'Test 33');
test(numberOfWays("rotationrotationrotation", "ionrotationrotationrotati", 111111111111111111111), 0, 'Test 34');
test(numberOfWays("aaaaaaaaaaab", "baaaaaaaaaaa", 1000000000000000), 229977291, 'Test 35');
test(numberOfWays("abababababababab", "babababababababa", 1000000000000000), 831652769, 'Test 36');
test(numberOfWays("abcdefgabcdefg", "defgabcdefgabc", 8), 116532960, 'Test 37');
test(numberOfWays("xyzabcxyzabcxyz", "abcxyzabcxyzabc", 7), 0, 'Test 38');
test(numberOfWays("abababababababab", "babababababababa", 9), 221679555, 'Test 39');
test(numberOfWays("aaaaabbbbbaaaaabbbbb", "bbbbbaaaaabbbbbaaaaa", 1000000000000000), 390681001, 'Test 40');
test(numberOfWays("abracadabraabracadabra", "racadabraabracadabraab", 600000000000000), 240096750, 'Test 41');
test(numberOfWays("mississippi", "issippimiss", 700000000000000), 393112130, 'Test 42');
test(numberOfWays("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "ccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaabb", 123456789), 882829284, 'Test 43');
test(numberOfWays("hellohellohellohellohello", "ohellohellohellohellohel", 987654321987654321), 0, 'Test 44');
test(numberOfWays("mississippi", "pimississi", 999999999999999999), 0, 'Test 45');
test(numberOfWays("abcdabcdabcdabcd", "cdabcdabcdabcdab", 666666666666666666), 518849396, 'Test 46');
test(numberOfWays("aabbccddeeffgghhiijj", "ccddeeffgghhiijjaaabbb", 1000000), 0, 'Test 47');
test(numberOfWays("xyzzyzyzyzyzyzyz", "zyzyzyzyzyzyzyzxyz", 1000000000000000), 228956597, 'Test 48');
test(numberOfWays("abcdefghabcdefgh", "ghabcdefghabcdefgh", 1000000000), 900560950, 'Test 49');
test(numberOfWays("abcdefabcdef", "defabcdefabc", 1000000000000000), 459954582, 'Test 50');
test(numberOfWays("racecar", "caracer", 1000000000000), 0, 'Test 51');
test(numberOfWays("abcabcabcabcabcabc", "cabcabcabcabcabcab", 200000000000000), 265479843, 'Test 52');
test(numberOfWays("abcdefghijabcdefghijabcdefghij", "efghijabcdefghijabcdefghijabcd", 1000000000000000), 154245892, 'Test 53');
test(numberOfWays("abcdefgabcdefg", "efgabcdefgabcd", 1000000000000000), 38019381, 'Test 54');
test(numberOfWays("aaaaabbbbbcccccddddd", "bbbbbcccccdddddaaaaa", 1000000000000000), 695340504, 'Test 55');
test(numberOfWays("uniquestringunique", "euniquestringuniqu", 987654321), 817134159, 'Test 56');
test(numberOfWays("abcdefgh", "efghabcd", 1000000000000000), 653970076, 'Test 57');
test(numberOfWays("abcabcabcabcabcabcabcabcabcabc", "cabcabcabcabcabcabcabcabcabcab", 400000000000000), 403487855, 'Test 58');
test(numberOfWays("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzabcdefgabcdefgaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy", 123456789123456), 224296084, 'Test 59');
test(numberOfWays("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxyyxwvvuttssrrqqppoonnmmllkkjjiihhggeeffddccbbaa", 1000000000), 0, 'Test 60');
test(numberOfWays("zzyzxzyzxzyz", "zyzxzyzxzyzz", 12), 535696233, 'Test 61');
test(numberOfWays("racecar", "caracer", 3), 0, 'Test 62');
test(numberOfWays("zzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzz", 500000000000000), 415651994, 'Test 63');
test(numberOfWays("abcdefghij", "efghijabcd", 1000000000000000), 164370742, 'Test 64');
test(numberOfWays("aaaaabbbbbaaaaabbb", "bbbbbaaaaabbbbbbaaaa", 1000000000000000), 0, 'Test 65');
test(numberOfWays("uniquestringwithnounduplicates", "uniquestringwithnounduplica", 2), 0, 'Test 66');
test(numberOfWays("aabbccddeeff", "ccddeeffaabb", 3), 111, 'Test 67');
test(numberOfWays("repeatedrepeated", "atedrepeatedrepe", 200000000000000000), 212764291, 'Test 68');
test(numberOfWays("aaaabbbbccccdddd", "bbbbccccddddaaaa", 987654321), 845693984, 'Test 69');
test(numberOfWays("aaaaabbbbb", "bbbbbbaaaa", 10), 0, 'Test 70');
test(numberOfWays("thisisaverylongstring", "stringthisisaverylon", 100), 0, 'Test 71');
test(numberOfWays("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "cabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab", 500000000000000000), 816699960, 'Test 72');
test(numberOfWays("abcdabcdabcdabcd", "ddddabcdabcdabcdabcd", 2000000), 395130602, 'Test 73');
test(numberOfWays("abababababababababab", "babababababababababa", 999999999999999999), 238518966, 'Test 74');
test(numberOfWays("abacabadabacaba", "cabacabadabacab", 5), 0, 'Test 75');
test(numberOfWays("cyclecyclecyclecycle", "yclecyclecyclecycl", 1000000000000000), 0, 'Test 76');
test(numberOfWays("abcabcabcabcabcabc", "cabcabcabcabcabcab", 20), 958338650, 'Test 77');
test(numberOfWays("abcdabcdabcdabcd", "dabcdabcdabcdabc", 300000000000000), 967363299, 'Test 78');
test(numberOfWays("aabbccddeeff", "ffddeeffaabbcc", 1000000000000000), 0, 'Test 79');
test(numberOfWays("abcdabcdabcdabcdabcd", "dabcdabcdabcdabcdabc", 999999999999999), 446142240, 'Test 80');
test(numberOfWays("abcabcabcabcabcabc", "cabcabcabcabcabcab", 6), 8045856, 'Test 81');
test(numberOfWays("abcdefghijklmnopqrstuvwxyz", "nopqrstuvwxyzabcdefghijklm", 1000000000000000), 907107378, 'Test 82');
test(numberOfWays("repeatthisrepeatthis", "thisrepeatthisrepeat", 654321987654321987), 726267327, 'Test 83');
test(numberOfWays("zzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzz", 1000000000000000), 663305532, 'Test 84');
test(numberOfWays("abacabadabacaba", "dabacabacabacadaba", 123456789), 0, 'Test 85');
test(numberOfWays("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzabcdefghijklmnopqrstuvwxyzabcd", 222222222222222222222), 0, 'Test 86');
test(numberOfWays("thisthisthisthisthisthisthis", "histhisthisthisthisthisthist", 10000000000000), 937749612, 'Test 87');
test(numberOfWays("abcdabcdabcdabcd", "ddddabcdabcdabcdabc", 10), 40649162, 'Test 88');
test(numberOfWays("hellohellohellohello", "lohellohellohellohel", 7), 178774348, 'Test 89');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

