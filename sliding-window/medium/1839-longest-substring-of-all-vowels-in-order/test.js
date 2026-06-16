// Test: 1839. Longest Substring Of All Vowels In Order
// 20 test cases from LeetCodeDataset
// Run: node test.js

const { longestBeautifulSubstring } = require("./solution");

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

console.log("\n1839. Longest Substring Of All Vowels In Order\n");

test(longestBeautifulSubstring("aeiaaioaaaaeiiaaaiiiiiouuuooaauuaeiuuuuuuuuuuuuuuuuuuuuaaa"), 0, 'Test 1');
test(longestBeautifulSubstring("aeiaaioaaaaeiiaaaiiiiiouuuaauuaeiu"), 0, 'Test 2');
test(longestBeautifulSubstring("aeiaaioaaaaeiiaaaiiiiiouuuuuuuuuuuuuuuuuuuuaaaaaaeiou"), 10, 'Test 3');
test(longestBeautifulSubstring("aeiaaioaaaaeiioooaeiouuuaeiouuu"), 7, 'Test 4');
test(longestBeautifulSubstring("aeeeiiiioooauuuaeiou"), 5, 'Test 5');
test(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuuuaaaaaaaaaeeeeiiiioooouuuuuu"), 27, 'Test 6');
test(longestBeautifulSubstring("aeiaaioaaaaeiiaaaiiiiiouuuooaaeiouaaaaaaaaaaeiouuuuuuuuuuuuuuuuuuuu"), 33, 'Test 7');
test(longestBeautifulSubstring("aeiaaioaaaaeiioooaeiouuuaeiouuuaeiouuu"), 7, 'Test 8');
test(longestBeautifulSubstring("aeiaaioaaaaeiiaaaouuuooauuaeiu"), 0, 'Test 9');
test(longestBeautifulSubstring("aeiouaeiouaeiouaeiouaeiou"), 5, 'Test 10');
test(longestBeautifulSubstring("aaaaaaaaaeeeeeeeeeeiiiiiiioooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"), 68, 'Test 11');
test(longestBeautifulSubstring("aeiaaioaaaaeiioooaeiouuu"), 7, 'Test 12');
test(longestBeautifulSubstring("aeiaaioaaaaeiiooouuuaeiou"), 13, 'Test 13');
test(longestBeautifulSubstring("a"), 0, 'Test 14');
test(longestBeautifulSubstring("aeiou"), 5, 'Test 15');
test(longestBeautifulSubstring("aeiaaioaaaaeiiaaaiiiiiouuuuuuuuuuuuuuuuuuuu"), 0, 'Test 16');
test(longestBeautifulSubstring("aeiaaioaaaaeiiaaaouuuooaauuaeiaaioaaaaeiiiiouuuooaauuaeiu"), 13, 'Test 17');
test(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu"), 13, 'Test 18');
test(longestBeautifulSubstring("aeiaaioaaaaeiiooouuuooauuaeiu"), 13, 'Test 19');
test(longestBeautifulSubstring("uuuuuuuuuuuuuuuuuuuu"), 0, 'Test 20');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

