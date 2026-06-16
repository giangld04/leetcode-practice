// Test: 744. Find Smallest Letter Greater Than Target
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { nextGreatestLetter } = require("./solution");

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

console.log("\n744. Find Smallest Letter Greater Than Target\n");

test(nextGreatestLetter(["a","b","c","d","e","f","g","h","i","j"], "d"), e, 'Test 1');
test(nextGreatestLetter(["c","f","j"], "c"), f, 'Test 2');
test(nextGreatestLetter(["x","x","y","y"], "z"), x, 'Test 3');
test(nextGreatestLetter(["a","b","c","d"], "d"), a, 'Test 4');
test(nextGreatestLetter(["a","c","f","h"], "g"), h, 'Test 5');
test(nextGreatestLetter(["a","b","c","d","e","f","g","h","i","j"], "k"), a, 'Test 6');
test(nextGreatestLetter(["m","n","n","p","q"], "l"), m, 'Test 7');
test(nextGreatestLetter(["s","t","u","v"], "r"), s, 'Test 8');
test(nextGreatestLetter(["a","c","f","h"], "f"), h, 'Test 9');
test(nextGreatestLetter(["k","k","l","m","m"], "m"), k, 'Test 10');
test(nextGreatestLetter(["b","b","c","d"], "a"), b, 'Test 11');
test(nextGreatestLetter(["a","b","b","b"], "b"), a, 'Test 12');
test(nextGreatestLetter(["a","b","c","d"], "z"), a, 'Test 13');
test(nextGreatestLetter(["d","e","f","g"], "z"), d, 'Test 14');
test(nextGreatestLetter(["c","f","j"], "a"), c, 'Test 15');
test(nextGreatestLetter(["m","n","p","q"], "o"), p, 'Test 16');
test(nextGreatestLetter(["a","a","a","b"], "a"), b, 'Test 17');
test(nextGreatestLetter(["a","c","f","h"], "b"), c, 'Test 18');
test(nextGreatestLetter(["c","g","k","o","s","w"], "o"), s, 'Test 19');
test(nextGreatestLetter(["m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l"], "m"), n, 'Test 20');
test(nextGreatestLetter(["a","c","e","g","i","k","m","o","q","s","u","w","y"], "a"), c, 'Test 21');
test(nextGreatestLetter(["b","b","d","d","f","f","h","h","j","j","l","l","n","n"], "f"), h, 'Test 22');
test(nextGreatestLetter(["l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k"], "l"), m, 'Test 23');
test(nextGreatestLetter(["b","b","c","c","d","d","e","e","f","f","g","g"], "f"), g, 'Test 24');
test(nextGreatestLetter(["a","c","e","g","i","k","m","o","q","s","u","w","y"], "t"), u, 'Test 25');
test(nextGreatestLetter(["d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "z"), d, 'Test 26');
test(nextGreatestLetter(["a","a","a","b","b","b","c","c","c"], "c"), a, 'Test 27');
test(nextGreatestLetter(["a","c","f","j","o","t","z"], "z"), a, 'Test 28');
test(nextGreatestLetter(["b","f","j","n","r","v","z"], "a"), b, 'Test 29');
test(nextGreatestLetter(["z","z","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "w"), x, 'Test 30');
test(nextGreatestLetter(["a","c","f","i","l","o","r","u","x"], "x"), a, 'Test 31');
test(nextGreatestLetter(["f","h","j","l","n","p","r","t","v","x","z"], "s"), t, 'Test 32');
test(nextGreatestLetter(["d","f","h","j","l","n","p","r","t","v","x","z"], "k"), l, 'Test 33');
test(nextGreatestLetter(["a","a","a","a","b","b","b","c","c","c"], "b"), c, 'Test 34');
test(nextGreatestLetter(["d","f","h","j","l","n","p","r","t","v","x","z"], "m"), n, 'Test 35');
test(nextGreatestLetter(["a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h","i","i","j","j"], "j"), a, 'Test 36');
test(nextGreatestLetter(["a","c","e","g","i","k","m","o","q","s","u","w","y"], "x"), y, 'Test 37');
test(nextGreatestLetter(["a","c","e","g","i","k","m","o","q","s","u","w","y"], "l"), m, 'Test 38');
test(nextGreatestLetter(["a","a","b","b","c","c","d","d","e","e"], "d"), e, 'Test 39');
test(nextGreatestLetter(["x","y","z","a","b","c","d","e","f","g","h","i","j"], "z"), x, 'Test 40');
test(nextGreatestLetter(["a","b","d","e","g","h","j","k","m","n","p","r","s","t","v","w","y","z"], "w"), y, 'Test 41');
test(nextGreatestLetter(["b","b","b","c","c","d","d","e","e","f","f","g","g","h","h","i","i","j","j","k","k"], "b"), c, 'Test 42');
test(nextGreatestLetter(["a","c","e","g","i","k","m","o","q","s","u","w","y"], "v"), w, 'Test 43');
test(nextGreatestLetter(["a","c","e","g","i","k","m","o","q","s","u","w","y"], "y"), a, 'Test 44');
test(nextGreatestLetter(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "m"), n, 'Test 45');
test(nextGreatestLetter(["m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "m"), n, 'Test 46');
test(nextGreatestLetter(["c","e","i","m","q","u","y"], "u"), y, 'Test 47');
test(nextGreatestLetter(["b","c","d","f","g","h","j","k","l","n","p","q","r","s","t","v","w","x","y","z"], "u"), v, 'Test 48');
test(nextGreatestLetter(["d","d","d","e","e","f","g","h","i","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "d"), e, 'Test 49');
test(nextGreatestLetter(["m","m","m","m","n","n","n","n","p","p","p","p","q","q","q","q"], "q"), m, 'Test 50');
test(nextGreatestLetter(["a","a","a","a","b","b","b","b","c","c","c","c"], "a"), b, 'Test 51');
test(nextGreatestLetter(["a","c","e","g","i","k","m","o","q","s","u","w","y"], "w"), y, 'Test 52');
test(nextGreatestLetter(["d","d","d","d","d","d","d","d","d","e","e","e","f"], "d"), e, 'Test 53');
test(nextGreatestLetter(["m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l"], "l"), m, 'Test 54');
test(nextGreatestLetter(["l","m","n","n","n","o","p","q","q","r","s"], "p"), q, 'Test 55');
test(nextGreatestLetter(["x","y","z","a","b","c"], "y"), x, 'Test 56');
test(nextGreatestLetter(["b","c","f","h","j","m","p","r","u","x","z"], "g"), h, 'Test 57');
test(nextGreatestLetter(["b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "a"), b, 'Test 58');
test(nextGreatestLetter(["a","c","e","g","i","k","m","o","q","s","u","w","y"], "n"), o, 'Test 59');
test(nextGreatestLetter(["z","z","a","a","b","b","c"], "y"), z, 'Test 60');
test(nextGreatestLetter(["l","l","m","m","n","n","o","o","p","p","q","q","r","r","s","s","t","t","u","u","v","v","w","w","x","x","y","y","z","z"], "u"), v, 'Test 61');
test(nextGreatestLetter(["m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c"], "w"), x, 'Test 62');
test(nextGreatestLetter(["s","s","t","t","u","u","v","v","w","w","x","x","y","y","z","z"], "y"), z, 'Test 63');
test(nextGreatestLetter(["b","c","d","f","h","j","l","n","p","r","t","v","x","z"], "t"), v, 'Test 64');
test(nextGreatestLetter(["a","z"], "m"), z, 'Test 65');
test(nextGreatestLetter(["p","q","r","s","t","u","v","w","x","y","z"], "z"), p, 'Test 66');
test(nextGreatestLetter(["a","c","e","g","i","k","m","o","q","s","u","w","y"], "m"), o, 'Test 67');
test(nextGreatestLetter(["a","a","a","a","a","a","a","a","b","b","b","b","b","b","b","b"], "b"), a, 'Test 68');
test(nextGreatestLetter(["a","a","a","a","a","a","a","a","b","b","b","b","b","b","b","b"], "a"), b, 'Test 69');
test(nextGreatestLetter(["b","d","f","h","j","l","n","p","r","t","v","x","z"], "a"), b, 'Test 70');
test(nextGreatestLetter(["a","a","a","a","a","a","a","a","a","a","a","a","a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b"], "a"), b, 'Test 71');
test(nextGreatestLetter(["d","d","d","e","f","g","g","g","h"], "g"), h, 'Test 72');
test(nextGreatestLetter(["a","b","d","e","g","h","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"], "f"), g, 'Test 73');
test(nextGreatestLetter(["a","e","i","m","q","u","y"], "z"), a, 'Test 74');
test(nextGreatestLetter(["a","c","f","j","o","v","y"], "z"), a, 'Test 75');
test(nextGreatestLetter(["b","d","f","h","j","l","n","p","r","t","v","x","z"], "z"), b, 'Test 76');
test(nextGreatestLetter(["x","x","x","x","y","y","y","y","z","z","z","z"], "x"), y, 'Test 77');
test(nextGreatestLetter(["z","z","z","a","a","a","b","b","c","d"], "z"), z, 'Test 78');
test(nextGreatestLetter(["a","a","a","a","a","a","a","a","a","a","b","b","b","b","b","b","b","b","b","b"], "a"), b, 'Test 79');
test(nextGreatestLetter(["f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "u"), v, 'Test 80');
test(nextGreatestLetter(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "z"), a, 'Test 81');
test(nextGreatestLetter(["x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w"], "w"), x, 'Test 82');
test(nextGreatestLetter(["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","b"], "a"), b, 'Test 83');
test(nextGreatestLetter(["m","o","q","s","u","w","y"], "a"), m, 'Test 84');
test(nextGreatestLetter(["b","b","b","c","c","c","d","d","d","e","e","e","f","f","f","g","g","g","h","h","h"], "d"), e, 'Test 85');
test(nextGreatestLetter(["d","h","l","p","t","x"], "m"), p, 'Test 86');
test(nextGreatestLetter(["z","a","a","a","a","b","b","b","c","c","c"], "y"), z, 'Test 87');
test(nextGreatestLetter(["x","y","z","a","b","c","d"], "z"), x, 'Test 88');
test(nextGreatestLetter(["h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g"], "g"), h, 'Test 89');
test(nextGreatestLetter(["p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"], "n"), o, 'Test 90');
test(nextGreatestLetter(["x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w"], "x"), x, 'Test 91');
test(nextGreatestLetter(["m","m","m","m","n","n","n","n","p","p","p","p","q","q","q","q"], "m"), n, 'Test 92');
test(nextGreatestLetter(["z","a","b","c","d"], "y"), z, 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

