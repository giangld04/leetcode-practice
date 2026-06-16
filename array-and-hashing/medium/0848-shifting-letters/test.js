// Test: 848. Shifting Letters
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { shiftingLetters } = require("./solution");

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

console.log("\n848. Shifting Letters\n");

test(shiftingLetters("aaa", [1,2,3]), gfd, 'Test 1');
test(shiftingLetters("abc", [26,52,78]), abc, 'Test 2');
test(shiftingLetters("a", [25]), z, 'Test 3');
test(shiftingLetters("abcdef", [0,0,0,0,0,0]), abcdef, 'Test 4');
test(shiftingLetters("abcd", [10,20,30,40]), wnur, 'Test 5');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), nnmkhdysldukznamxhqyflquxz, 'Test 6');
test(shiftingLetters("abcdef", [1,2,3,4,5,6]), vvuspl, 'Test 7');
test(shiftingLetters("abcd", [0,0,0,0]), abcd, 'Test 8');
test(shiftingLetters("abc", [3,5,9]), rpl, 'Test 9');
test(shiftingLetters("aaa", [1000000000,1000000000,1000000000]), kym, 'Test 10');
test(shiftingLetters("a", [1000000000]), m, 'Test 11');
test(shiftingLetters("z", [1]), a, 'Test 12');
test(shiftingLetters("zzz", [1000000000, 1000000000, 1000000000]), jxl, 'Test 13');
test(shiftingLetters("xyz", [1,2,3]), ddc, 'Test 14');
test(shiftingLetters("abcdef", [1,1,1,1,1,1]), gggggg, 'Test 15');
test(shiftingLetters("zzz", [1000000000,1000000000,1000000000]), jxl, 'Test 16');
test(shiftingLetters("abcd", [1,1,1,1]), eeee, 'Test 17');
test(shiftingLetters("qzcvxnbtrslkjhgf", [97,86,75,64,53,42,31,20,9,8,7,6,5,4,3,2]), iytpfusfjbmexqlh, 'Test 18');
test(shiftingLetters("aaaabbbbcccc", [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108]), ipvafiklmljg, 'Test 19');
test(shiftingLetters("abcabcabc", [1,2,3,1,2,3,1,2,3]), ssrmmlggf, 'Test 20');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26]), abcdefghijklmnopqrstuvwxyz, 'Test 21');
test(shiftingLetters("programming", [0,0,0,0,0,0,0,0,0,0,0,0,0]), programming, 'Test 22');
test(shiftingLetters("abcdefgh", [1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500]), etozspob, 'Test 23');
test(shiftingLetters("hello", [5,5,5,5,5]), gyavt, 'Test 24');
test(shiftingLetters("abcd", [25,24,23,22]), qsvz, 'Test 25');
test(shiftingLetters("python", [97,97,97,97,97,97]), zprmag, 'Test 26');
test(shiftingLetters("hello", [25, 98, 23, 56, 78]), bzmpo, 'Test 27');
test(shiftingLetters("abc", [26, 52, 78]), abc, 'Test 28');
test(shiftingLetters("rollingupdates", [20,19,18,17,16,15,14,13,12,11,10,9,8,7]), ybfntimmuwirtz, 'Test 29');
test(shiftingLetters("xyz", [26, 52, 78]), xyz, 'Test 30');
test(shiftingLetters("python", [1000000000, 999999999, 888888888, 777777777, 666666666, 555555555]), mjtdnw, 'Test 31');
test(shiftingLetters("programming", [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), ghbosstgnbb, 'Test 32');
test(shiftingLetters("xyzabc", [3,2,1,0,5,4]), mkjjkg, 'Test 33');
test(shiftingLetters("aabbccdd", [9,8,7,6,5,4,3,2]), sjcvqlif, 'Test 34');
test(shiftingLetters("python", [2147483647, 2147483646, 2147483645, 2147483644, 2147483643, 2147483642]), iutmzf, 'Test 35');
test(shiftingLetters("qponmlkjihgfedcba", [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), ttuwzdiovdmwhtguj, 'Test 36');
test(shiftingLetters("thisisaverylongstring", [5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113]), enhgjcrpvdzxjnfkcljtl, 'Test 37');
test(shiftingLetters("abcdefg", [100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000]), sxgtkfe, 'Test 38');
test(shiftingLetters("quickbrownfoxjumpsoverthelazydog", [26, 52, 78, 104, 130, 156, 182, 208, 234, 260, 286, 312, 338, 364, 390, 416, 442, 468, 494, 520, 546, 572, 598, 624, 650, 676]), Error: list index out of range, 'Test 39');
test(shiftingLetters("abcdabcdabcd", [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), eedbuutrkkjh, 'Test 40');
test(shiftingLetters("zzzzzzzzzz", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), cbzwsnhasj, 'Test 41');
test(shiftingLetters("zzzzzz", [1000000000, 999999999, 888888888, 777777777, 666666666, 555555555]), wkzvyi, 'Test 42');
test(shiftingLetters("a", [0]), a, 'Test 43');
test(shiftingLetters("zzzzzzzzzz", [999999999, 888888888, 777777777, 666666666, 555555555, 444444444, 333333333, 222222222, 111111111, 100000000]), ynjmwnlqcv, 'Test 44');
test(shiftingLetters("abcdefghijklmnop", [1000000000,2000000000,3000000000,4000000000,5000000000,6000000000,7000000000,8000000000,9000000000,10000000000,11000000000,12000000000,13000000000,14000000000,15000000000,16000000000]), ujmdibidmjutghwz, 'Test 45');
test(shiftingLetters("zzzzzzzzzz", [1000000000, 900000000, 800000000, 700000000, 600000000, 500000000, 400000000, 300000000, 200000000, 100000000]), nblrtrlbnv, 'Test 46');
test(shiftingLetters("xyzxyzxyz", [25, 24, 23, 22, 21, 20, 19, 18, 17]), egjkpvzhq, 'Test 47');
test(shiftingLetters("hello", [1, 2, 3, 4, 5]), wsxut, 'Test 48');
test(shiftingLetters("a", [1]), b, 'Test 49');
test(shiftingLetters("abcdef", [1000000000, 2000000000, 3000000000, 4000000000, 5000000000, 6000000000]), shkbgz, 'Test 50');
test(shiftingLetters("programming", [5,10,15,20,25,30,35,40,45,50,55]), herulvducoj, 'Test 51');
test(shiftingLetters("xyzabc", [25, 2, 3, 4, 5, 6]), qsrpmi, 'Test 52');
test(shiftingLetters("abcde", [5, 10, 15, 20, 25]), xtkwd, 'Test 53');
test(shiftingLetters("shift", [97, 98, 99, 100, 101]), tpwyq, 'Test 54');
test(shiftingLetters("zzzzzzzzzz", [100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000, 1000000000]), nrzlbvtvbl, 'Test 55');
test(shiftingLetters("hello", [10,20,30,40,50]), bobxm, 'Test 56');
test(shiftingLetters("testcase", [9,8,7,6,5,4,3,2,1,0]), lntnqjxg, 'Test 57');
test(shiftingLetters("xyz", [1000000000, 1000000000, 1]), wla, 'Test 58');
test(shiftingLetters("teststring", [123, 456, 789, 101112, 131415, 161718, 192021, 222324, 252627, 282930, 313233, 343536]), iaastjjpwe, 'Test 59');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]), nnmkhdysldukznamxhqyflquxz, 'Test 60');
test(shiftingLetters("abcd", [0, 0, 0, 0]), abcd, 'Test 61');
test(shiftingLetters("abcdef", [26, 52, 78, 104, 130, 156]), abcdef, 'Test 62');
test(shiftingLetters("abz", [1,1,25]), bby, 'Test 63');
test(shiftingLetters("mnopqr", [26,25,24,23,22,21]), xyadhm, 'Test 64');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), noonlieztmevlaobnyirzgmrvy, 'Test 65');
test(shiftingLetters("wraparound", [1,2,3,4,5,6,7,8,9,10]), ztamtfwvgn, 'Test 66');
test(shiftingLetters("hellothere", [1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125]), almwrsengj, 'Test 67');
test(shiftingLetters("python", [25, 24, 23, 22, 21, 20]), uebsdh, 'Test 68');
test(shiftingLetters("abcdefghij", [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), otcpgbadkv, 'Test 69');
test(shiftingLetters("zzzzzzzz", [1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), rfthvjxl, 'Test 70');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), Error: list index out of range, 'Test 71');
test(shiftingLetters("mnbvcxzlkjhgfdsapoiuytrewq", [26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), zaplvubtzgnwgqsoshswtibkzr, 'Test 72');
test(shiftingLetters("z", [26]), z, 'Test 73');
test(shiftingLetters("z" * 100000, [25] * 100000), Error: Solution.shiftingLetters[] missing 2 required positional arguments: 's' and 'shifts', 'Test 74');
test(shiftingLetters("aabbccddeeff", [1000000000, 900000000, 800000000, 700000000, 600000000, 500000000, 400000000, 300000000, 200000000, 100000000, 50000000, 25000000]), ymxdgezpckpr, 'Test 75');
test(shiftingLetters("aaaabbbb", [1, 2, 3, 4, 5, 6, 7, 8]), kjhebwqj, 'Test 76');
test(shiftingLetters("aaaaabbbbb", [100,200,300,400,500,100,200,300,400,500]), kowiytxfrh, 'Test 77');
test(shiftingLetters("zyxwvutsrqponmlkjihgfedcba", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), zxvtrpnljhfdbzxvtrpnljhfdb, 'Test 78');
test(shiftingLetters("abcdefg", [1, 2, 3, 4, 5, 6, 7]), ccbzwsn, 'Test 79');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), npswbhowfpamzncsjbuojfcazz, 'Test 80');
test(shiftingLetters("abcxyz", [0,1,2,25,50,75]), xyyrtw, 'Test 81');
test(shiftingLetters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), Error: list index out of range, 'Test 82');
test(shiftingLetters("zyxwvutsrqponmlkjihgfedcba", [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), mmnpswbhowfpamzncsjbuojfca, 'Test 83');
test(shiftingLetters("mnopqr", [3, 2, 1, 0, 5, 4]), bzyyzv, 'Test 84');
test(shiftingLetters("xyz", [25,50,75]), rtw, 'Test 85');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), npswbhowfpamzncsjbuojfcazz, 'Test 86');
test(shiftingLetters("mnopqr", [1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000]), ixsdwt, 'Test 87');
test(shiftingLetters("programming", [1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125, 976562, 488281, 244140]), kartwblxzui, 'Test 88');
test(shiftingLetters("qznooo", [987654321, 123456789, 987654321, 123456789, 987654321, 123456789]), skxhgp, 'Test 89');
test(shiftingLetters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), Error: list index out of range, 'Test 90');
test(shiftingLetters("bxyz", [2, 3, 25, 1]), gaya, 'Test 91');
test(shiftingLetters("boundary", [26,26,26,26,26,26,26,26]), boundary, 'Test 92');
test(shiftingLetters("a" * 100000, [1] * 100000), Error: Solution.shiftingLetters[] missing 2 required positional arguments: 's' and 'shifts', 'Test 93');
test(shiftingLetters("programming", [26, 52, 78, 104, 130, 156, 182, 208, 234, 260, 286]), programming, 'Test 94');

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
