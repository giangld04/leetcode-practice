// Test: 127. Word Ladder
// 13 test cases from LeetCodeDataset
// Run: node test.js

const { ladderLength } = require("./solution");

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

console.log("\n127. Word Ladder\n");

test(ladderLength("leet", "code", ["lest","leet","lose","code","lode","robe","home","dote","cake"]), 0, 'Test 1');
test(ladderLength("talk", "tell", ["talk","tell","tall","toll","toll"]), 3, 'Test 2');
test(ladderLength("talk", "walk", ["talk","walk","tall","tale","tali","wali","wali","wale","wall","walk"]), 2, 'Test 3');
test(ladderLength("leet", "code", ["lest","leet","lose","code","lode","robe","lost"]), 6, 'Test 4');
test(ladderLength("red", "tax", ["ted","tex","red","tax","tad","den","rex","pee"]), 4, 'Test 5');
test(ladderLength("cat", "dog", ["bat","rat","hat","hot","dot","dog"]), 5, 'Test 6');
test(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]), 0, 'Test 7');
test(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]), 5, 'Test 8');
test(ladderLength("abcf", "aefh", ["abcf","aefg","aefh","aegh","cefh","cefh","aegh","cefg","abcf","abef"]), 0, 'Test 9');
test(ladderLength("machine", "natural", ["machene","machenr","machrne","machren","machenl","machenm","machene","machrne","machren","machenl","machenm","machane","machrne","machren","machenl","machenm","machenl","machene","machrne","machren","machenl","machenm","nachenl","nachene","nachrne","nachren","nachenl","nachenm","nachene","nachrne","nachren","nachenl","nachenm","nachene","nachrne","nachren","nachenl","nachenm","nachene","nachrne","nachren","nachenl","nachenm","nachene","nachrne","nachren","nachenl","nachenm","nachene","nachrne","nachren","nachenl","nachenm","nachene","nachrne","nachren","nachenl","nachenm","nachene","nachrne","nachren","nachenl","nachenm","natural"]), 0, 'Test 10');
test(ladderLength("listen", "silent", ["lisen","litesn","litens","listne","listen","siltne","silent","linset","lintes","sleint","ltsine","lintse","lisnet","lsitne","lnties","lintes","lintes","linsat","slient","lsinte","linset"]), 0, 'Test 11');
test(ladderLength("algorithm", "rhythm", ["alorhythm","alohrhythm","alohrhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","alorhythm","rhythm","rhythm","rhythm","rhythm","rhythm","rhythm","rhythm","rhythm","rhythm","rhythm"]), 0, 'Test 12');
test(ladderLength("physics", "chemist", ["phyiscs","phyisic","phyisct","phyisci","phyicsi","physics","physisi","physcii","physici","phyiscs","phyiscs","phyiscs","phyiscs","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","physcis","chemics","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist","chemist"]), 0, 'Test 13');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

