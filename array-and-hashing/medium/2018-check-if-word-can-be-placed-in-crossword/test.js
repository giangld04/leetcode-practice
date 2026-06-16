// Test: 2018. Check If Word Can Be Placed In Crossword
// 143 test cases from LeetCodeDataset
// Run: node test.js

const { placeWordInCrossword } = require("./solution");

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

console.log("\n2018. Check If Word Can Be Placed In Crossword\n");

test(placeWordInCrossword([["#", " ", "#"], [" ", " ", "#"], ["#", " ", "c"]], "ca"), true, 'Test 1');
test(placeWordInCrossword([["a"], ["b"], ["c"], ["d"], ["e"]], "abcde"), true, 'Test 2');
test(placeWordInCrossword([['#', ' ', '#'], [' ', ' ', '#'], ['#', ' ', 'c']], 'ca'), true, 'Test 3');
test(placeWordInCrossword([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]], "ihg"), true, 'Test 4');
test(placeWordInCrossword([['a', ' ', 'a'], [' ', ' ', ' '], ['a', ' ', 'a']], 'aba'), true, 'Test 5');
test(placeWordInCrossword({"board": [[" ", " ", "#"], ["d", " ", "#"], ["o", "g", "#"]], "word": "dog"}), Error: Solution.placeWordInCrossword[] missing 2 required positional arguments: 'board' and 'word', 'Test 6');
test(placeWordInCrossword([["#", " ", "#"], ["a", "b", "c"], ["#", " ", "#"]], "cba"), true, 'Test 7');
test(placeWordInCrossword([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]], "def"), true, 'Test 8');
test(placeWordInCrossword([["a", "b", "c"], ["#", "#", "#"], ["g", "h", "i"]], "abc"), true, 'Test 9');
test(placeWordInCrossword({"board": [["#", " ", "#"], [" ", " ", "#"], ["#", " ", "c"]], "word": "ca"}), Error: Solution.placeWordInCrossword[] missing 2 required positional arguments: 'board' and 'word', 'Test 10');
test(placeWordInCrossword({"board": [["#", "d", "o"], ["#", "g", " "], ["#", " ", " "]], "word": "dog"}), Error: Solution.placeWordInCrossword[] missing 2 required positional arguments: 'board' and 'word', 'Test 11');
test(placeWordInCrossword([[' ', ' ', ' '], ['#', 'a', '#'], [' ', ' ', ' ']], 'a'), true, 'Test 12');
test(placeWordInCrossword([["#", "#", "#"], ["#", " ", "#"], ["#", " ", "#"]], "a"), true, 'Test 13');
test(placeWordInCrossword([['#', ' ', '#'], [' ', ' ', '#'], ['#', 'c', ' ']], 'abc'), true, 'Test 14');
test(placeWordInCrossword({"board": [["h", "i"], [" ", " "]], "word": "hi"}), Error: Solution.placeWordInCrossword[] missing 2 required positional arguments: 'board' and 'word', 'Test 15');
test(placeWordInCrossword({"board": [[" ", "#", "a"], [" ", "#", "c"], [" ", "#", "a"]], "word": "ac"}), Error: Solution.placeWordInCrossword[] missing 2 required positional arguments: 'board' and 'word', 'Test 16');
test(placeWordInCrossword({"board": [["#", " ", "#"], [" ", " ", "#"], ["#", "c", " "]], "word": "abc"}), Error: Solution.placeWordInCrossword[] missing 2 required positional arguments: 'board' and 'word', 'Test 17');
test(placeWordInCrossword([[' ', '#', 'a'], [' ', '#', 'c'], [' ', '#', 'a']], 'ac'), false, 'Test 18');
test(placeWordInCrossword({"board": [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]], "word": "dog"}), Error: Solution.placeWordInCrossword[] missing 2 required positional arguments: 'board' and 'word', 'Test 19');
test(placeWordInCrossword({"board": [["i", "h"], [" ", " "]], "word": "hi"}), Error: Solution.placeWordInCrossword[] missing 2 required positional arguments: 'board' and 'word', 'Test 20');
test(placeWordInCrossword([[" ", "#", "a"], [" ", "#", "c"], [" ", "#", "a"]], "ac"), false, 'Test 21');
test(placeWordInCrossword({"board": [[" ", " ", " "], [" ", " ", " "]], "word": "hi"}), Error: Solution.placeWordInCrossword[] missing 2 required positional arguments: 'board' and 'word', 'Test 22');
test(placeWordInCrossword([[" ", " ", " ", "#"], [" ", " ", " ", "#"], [" ", " ", " ", "#"]], "test"), false, 'Test 23');
test(placeWordInCrossword([['#', '#', '#'], [' ', ' ', ' '], ['#', '#', '#']], 'ab'), false, 'Test 24');
test(placeWordInCrossword([["#", " ", "#"], [" ", " ", "#"], ["#", "c", " "]], "abc"), true, 'Test 25');
test(placeWordInCrossword([['#', '#', '#', '#', '#'], ['#', ' ', ' ', ' ', '#'], ['#', ' ', '#', ' ', '#'], ['#', ' ', ' ', ' ', '#'], ['#', '#', '#', '#', '#']], 'test'), false, 'Test 26');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#']], 'python'), false, 'Test 27');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ']], 'abcd'), true, 'Test 28');
test(placeWordInCrossword([['#', '#', 'a', '#', '#'], ['#', '#', 'b', '#', '#'], ['#', '#', 'c', '#', '#'], ['#', '#', 'd', '#', '#'], ['#', '#', '#', '#', '#']], 'abcd'), true, 'Test 29');
test(placeWordInCrossword([[' ', ' ', '#', '#', '#', ' '], [' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', '#', '#', '#', ' ']], 'test'), true, 'Test 30');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['a', 'b', 'c', 'd', 'e'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#']], 'abcde'), true, 'Test 31');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#', '#']], 'abcdefg'), false, 'Test 32');
test(placeWordInCrossword([['#', ' ', ' ', ' ', '#'], [' ', 'a', ' ', 'b', ' '], ['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#']], 'abc'), true, 'Test 33');
test(placeWordInCrossword([['#', 'a', '#'], ['b', ' ', 'c'], ['#', 'd', '#'], [' ', 'e', ' ']], 'abcde'), false, 'Test 34');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' ']], 'find'), false, 'Test 35');
test(placeWordInCrossword([[' ', '#', ' ', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', '#', ' ', ' ', '#']], 'abcde'), true, 'Test 36');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], ['#', ' ', ' ', '#'], ['#', '#', '#', '#']], 'a'), false, 'Test 37');
test(placeWordInCrossword([['a', 'b', 'c'], ['#', '#', '#'], [' ', ' ', ' '], [' ', ' ', ' '], ['#', 'a', 'b']], 'abc'), true, 'Test 38');
test(placeWordInCrossword([[' ', '#', ' ', ' ', '#', ' '], ['#', ' ', '#', ' ', '#', '#'], [' ', '#', ' ', '#', ' ', ' '], ['#', '#', ' ', '#', ' ', '#']], 'hello'), false, 'Test 39');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' ']], 'ghijkl'), true, 'Test 40');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', 'a', ' ', ' '], ['#', ' ', 'b', ' '], ['#', '#', '#', '#']], 'abc'), true, 'Test 41');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], ['#', 'a', ' ', ' '], ['#', ' ', 'b', ' '], ['#', ' ', ' ', 'c']], 'abc'), true, 'Test 42');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ']], 'hello'), true, 'Test 43');
test(placeWordInCrossword([['#', ' ', '#'], ['a', 'b', 'c'], [' ', ' ', ' '], ['d', 'e', 'f'], ['#', ' ', '#']], 'abcdef'), false, 'Test 44');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#']], 'abc'), false, 'Test 45');
test(placeWordInCrossword([['#', ' ', '#', ' '], [' ', ' ', ' ', ' '], [' ', ' ', '#', ' '], [' ', ' ', ' ', ' ']], 'ab'), true, 'Test 46');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', 'a', ' ', ' '], [' ', ' ', 'b', ' '], ['#', ' ', ' ', 'c']], 'abc'), true, 'Test 47');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], ['#', ' ', ' ', 'a'], ['#', '#', 'b', 'c']], 'abc'), true, 'Test 48');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ']], 'abc'), true, 'Test 49');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], ['a', 'b', 'c', 'd', 'e'], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ']], 'abcde'), true, 'Test 50');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', '#', '#', ' '], [' ', ' ', ' ', ' ']], 'ab'), true, 'Test 51');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['c', 'b', 'a', ' ', ' '], [' ', 'd', 'e', 'f', ' '], ['#', ' ', '#', ' ', '#']], 'abcdef'), false, 'Test 52');
test(placeWordInCrossword([[' ', '#', ' ', '#', ' '], ['#', 'a', '#', ' ', '#'], ['#', '#', '#', ' ', '#'], ['#', ' ', '#', ' ', '#'], ['#', ' ', '#', ' ', ' ']], 'abc'), false, 'Test 53');
test(placeWordInCrossword([['#', '#', '#'], ['#', ' ', '#'], ['#', ' ', '#'], ['#', '#', '#']], 'ab'), true, 'Test 54');
test(placeWordInCrossword([['#', '#', '#', '#', '#', '#', '#'], ['#', ' ', ' ', ' ', ' ', ' ', '#'], ['#', ' ', '#', '#', '#', ' ', '#'], ['#', ' ', '#', 'a', '#', ' ', '#'], ['#', ' ', '#', 'b', '#', ' ', '#'], ['#', ' ', '#', 'c', '#', ' ', '#'], ['#', '#', '#', '#', '#', '#', '#']], 'abc'), true, 'Test 55');
test(placeWordInCrossword([['#', 'a', '#'], ['#', '#', '#'], ['#', 'a', '#']], 'aa'), false, 'Test 56');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], ['#', 'a', '#', 'c', '#'], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ']], 'ac'), true, 'Test 57');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], ['#', 'a', 'b', '#'], [' ', ' ', ' ', ' '], ['#', 'd', 'c', '#']], 'abcd'), true, 'Test 58');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#'], [' ', 'a', ' ', 'b', ' '], ['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' ']], 'ab'), false, 'Test 59');
test(placeWordInCrossword([['#', ' ', ' ', ' ', ' ', ' ', '#'], ['#', '#', ' ', '#', '#', ' ', '#'], ['#', ' ', 'a', ' ', ' ', ' ', '#'], ['#', '#', ' ', 'b', '#', ' ', '#'], ['#', ' ', ' ', ' ', ' ', ' ', '#']], 'abc'), true, 'Test 60');
test(placeWordInCrossword([[' ', '#', ' ', '#', ' '], [' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', '#'], [' ', ' ', ' ', ' ', ' '], [' ', '#', ' ', '#', ' ']], 'test'), false, 'Test 61');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['e', 'd', 'c', 'b', 'a'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#']], 'abcde'), true, 'Test 62');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], ['#', 'a', 'b', 'c', '#'], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ']], 'cba'), true, 'Test 63');
test(placeWordInCrossword([['#', '#', '#', '#', '#'], ['#', ' ', ' ', ' ', '#'], ['#', ' ', '#', ' ', '#'], ['#', ' ', ' ', ' ', '#'], ['#', '#', '#', '#', '#']], 'abc'), true, 'Test 64');
test(placeWordInCrossword([['#', '#', '#', '#', '#'], ['#', 'a', ' ', ' ', '#'], ['#', ' ', ' ', 'b', '#'], ['#', ' ', 'c', ' ', '#'], ['#', '#', '#', '#', '#']], 'abc'), true, 'Test 65');
test(placeWordInCrossword([[' ', ' ', '#', ' ', ' '], ['#', ' ', 'a', ' ', '#'], [' ', ' ', '#', ' ', ' '], ['#', ' ', 'c', ' ', '#'], [' ', ' ', '#', ' ', ' ']], 'play'), false, 'Test 66');
test(placeWordInCrossword([[' ', '#', '#', '#', ' '], ['#', ' ', '#', ' ', '#'], ['#', ' ', '#', ' ', '#'], ['#', ' ', '#', ' ', '#'], ['#', '#', '#', '#', ' ']], 'abc'), true, 'Test 67');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' ']], 'mnopqr'), true, 'Test 68');
test(placeWordInCrossword([['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' ']], 'abcdef'), true, 'Test 69');
test(placeWordInCrossword([['#', '#', '#', '#'], ['#', ' ', ' ', '#'], ['#', ' ', ' ', '#'], ['#', '#', '#', '#']], 'word'), false, 'Test 70');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' ', ' '], ['#', 'a', ' ', ' ', 'b', '#'], ['#', ' ', ' ', ' ', ' ', '#'], ['#', 'c', ' ', ' ', 'd', '#'], ['#', ' ', ' ', ' ', ' ', '#'], ['#', '#', '#', '#', '#', '#']], 'abcd'), true, 'Test 71');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' ']], 'abc'), false, 'Test 72');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ']], 'abcdefghi'), false, 'Test 73');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', 'a', ' ', ' '], [' ', ' ', 'b', ' '], [' ', ' ', ' ', 'c']], 'abc'), false, 'Test 74');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ']], 'python'), false, 'Test 75');
test(placeWordInCrossword([['#', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ']], 'world'), true, 'Test 76');
test(placeWordInCrossword([['#', ' ', ' ', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', '#']], 'abcdef'), false, 'Test 77');
test(placeWordInCrossword([['#', ' ', ' ', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', 'a', ' ', 'a', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', '#']], 'banana'), false, 'Test 78');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#', ' ', '#'], ['#', 'a', '#', 'b', '#', 'c', '#'], ['#', ' ', '#', ' ', '#', ' ', '#'], ['#', 'd', '#', 'e', '#', 'f', '#'], ['#', ' ', '#', ' ', '#', ' ', '#']], 'abcdef'), false, 'Test 79');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], ['#', '#', 'a', '#', '#'], ['#', '#', 'b', '#', '#'], ['#', '#', 'c', '#', '#'], [' ', ' ', ' ', ' ', ' ']], 'abc'), false, 'Test 80');
test(placeWordInCrossword([[' ', '#', ' ', ' ', ' '], [' ', ' ', ' ', '#', ' '], [' ', '#', ' ', ' ', ' '], [' ', ' ', ' ', '#', ' '], [' ', ' ', ' ', ' ', ' ']], 'abcde'), true, 'Test 81');
test(placeWordInCrossword([[' ', ' ', '#', ' ', ' '], ['#', 'a', '#', ' ', '#'], [' ', ' ', '#', ' ', ' '], ['#', ' ', '#', ' ', '#']], 'abc'), false, 'Test 82');
test(placeWordInCrossword([['a', 'b', ' ', 'd', 'e'], ['#', '#', 'c', '#', '#'], ['e', 'd', ' ', 'b', 'a'], ['#', '#', 'c', '#', '#'], ['a', 'b', ' ', 'd', 'e']], 'abcde'), true, 'Test 83');
test(placeWordInCrossword([[' ', '#', '#', '#', ' '], ['#', 'a', '#', 'b', '#'], ['#', '#', '#', '#', '#'], ['#', 'c', '#', 'd', '#'], [' ', '#', '#', '#', ' ']], 'abcd'), false, 'Test 84');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], ['#', 'a', '#', ' '], ['#', 'b', '#', ' '], ['#', 'c', '#', ' ']], 'abc'), false, 'Test 85');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', ' ', ' ', ' ']], 'abcdef'), true, 'Test 86');
test(placeWordInCrossword([['#', 'a', 'b', 'c', '#'], [' ', ' ', ' ', ' ', ' '], ['#', 'd', 'e', 'f', '#'], [' ', ' ', ' ', ' ', ' ']], 'abcdef'), false, 'Test 87');
test(placeWordInCrossword([['#', 'a', '#', 'b', '#'], [' ', ' ', ' ', ' ', ' '], ['#', 'c', '#', 'd', '#'], [' ', ' ', ' ', ' ', ' '], ['#', 'e', '#', 'f', '#']], 'abcdef'), false, 'Test 88');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ']], 'abcd'), false, 'Test 89');
test(placeWordInCrossword([['#', ' ', ' ', ' ', '#'], ['#', '#', ' ', '#', '#'], ['#', ' ', ' ', ' ', '#'], ['#', '#', ' ', '#', '#'], ['#', ' ', ' ', ' ', '#']], 'game'), false, 'Test 90');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', '#', ' ', '#'], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', 'k', ' ', ' ', 'l', ' '], ['#', ' ', ' ', ' ', ' ', ' ', 'm'], ['#', '#', '#', '#', '#', '#', '#']], 'klm'), true, 'Test 91');
test(placeWordInCrossword([['#', ' ', '#'], [' ', 'a', ' '], ['#', ' ', '#'], [' ', 'b', ' '], ['#', ' ', '#']], 'aba'), true, 'Test 92');
test(placeWordInCrossword([['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#']], 'a'), true, 'Test 93');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' ', ' '], ['#', 'a', '#', 'b', '#', 'c'], [' ', ' ', ' ', ' ', ' ', ' '], ['#', 'd', '#', 'e', '#', 'f'], [' ', ' ', ' ', ' ', ' ', ' ']], 'abcdef'), true, 'Test 94');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#']], 'world'), true, 'Test 95');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' ', ' ', '#'], ['#', ' ', ' ', ' ', ' ', ' ', 'j'], ['#', ' ', '#', ' ', '#', ' ', 'i'], ['#', ' ', ' ', ' ', ' ', ' ', 'h'], ['#', ' ', '#', ' ', '#', ' ', 'g'], ['#', ' ', ' ', ' ', ' ', ' ', 'f'], ['#', '#', '#', '#', '#', '#', '#']], 'ghij'), false, 'Test 96');
test(placeWordInCrossword([['#', ' ', '#'], [' ', ' ', ' '], [' ', ' ', '#'], [' ', '#', ' ']], 'abc'), true, 'Test 97');
test(placeWordInCrossword([['#', ' ', ' ', ' ', '#'], [' ', ' ', '#', ' ', ' '], [' ', 'a', '#', 'b', ' '], ['#', ' ', '#', ' ', '#']], 'abcd'), true, 'Test 98');
test(placeWordInCrossword([['#', '#', '#', '#', '#'], ['#', ' ', ' ', ' ', '#'], ['#', ' ', 'a', ' ', '#'], ['#', ' ', ' ', ' ', '#'], ['#', '#', '#', '#', '#']], 'aaa'), true, 'Test 99');
test(placeWordInCrossword([['#', ' ', ' ', ' ', ' ', ' ', '#'], [' ', 'g', ' ', 'h', ' ', 'i', ' '], ['#', ' ', '#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#', '#', '#']], 'ghji'), true, 'Test 100');
test(placeWordInCrossword([['#', '#', '#', '#'], ['#', ' ', ' ', ' '], ['#', ' ', '#', ' '], ['#', ' ', ' ', ' '], ['#', '#', '#', '#']], 'code'), false, 'Test 101');
test(placeWordInCrossword([['#', 'a', 'b', 'c'], ['#', 'd', 'e', 'f'], ['#', 'g', 'h', 'i'], ['#', 'j', 'k', 'l']], 'mnop'), false, 'Test 102');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', ' ', '#', ' ', ' '], ['#', ' ', ' ', ' ', '#'], [' ', ' ', '#', ' ', ' '], ['#', ' ', '#', ' ', '#']], 'abcd'), false, 'Test 103');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', ' '], ['#', ' ', 'a', ' ', ' '], ['#', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', ' ']], 'abc'), false, 'Test 104');
test(placeWordInCrossword([['#', '#', '#', '#', '#'], ['#', 'a', '#', 'b', '#'], ['#', '#', '#', '#', '#'], ['#', 'c', '#', 'd', '#'], ['#', '#', '#', '#', '#']], 'abcd'), false, 'Test 105');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', '#', ' ', '#'], ['#', ' ', ' ', ' ', ' ', ' ', ' '], ['#', ' ', 'n', ' ', ' ', 'o', ' '], ['#', ' ', ' ', ' ', ' ', ' ', 'p'], ['#', '#', '#', '#', '#', '#', '#']], 'pon'), true, 'Test 106');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#'], ['#', ' ', '#', ' ', '#'], ['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' ']], 'abc'), false, 'Test 107');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' '], ['#', 'a', 'b', 'c', '#'], [' ', ' ', ' ', ' ', ' ']], 'abc'), true, 'Test 108');
test(placeWordInCrossword([['#', ' ', ' ', ' ', ' ', ' ', '#'], ['#', '#', ' ', '#', '#', ' ', '#'], ['#', ' ', ' ', ' ', ' ', ' ', '#'], ['#', '#', ' ', '#', '#', ' ', '#'], ['#', ' ', ' ', ' ', ' ', ' ', '#']], 'abcdefgh'), false, 'Test 109');
test(placeWordInCrossword([[' ', ' ', ' ', '#'], [' ', ' ', ' ', '#'], [' ', ' ', ' ', '#'], [' ', ' ', ' ', '#'], ['a', 'b', 'c', 'd']], 'abcd'), true, 'Test 110');
test(placeWordInCrossword([['a', ' ', 'c'], ['b', ' ', 'd'], [' ', ' ', ' ']], 'abcd'), false, 'Test 111');
test(placeWordInCrossword([[' ', ' ', '#', ' ', ' '], ['#', ' ', '#', ' ', '#'], [' ', ' ', '#', ' ', ' '], ['#', ' ', '#', ' ', '#'], [' ', ' ', '#', ' ', ' '], ['#', ' ', '#', ' ', '#'], [' ', ' ', '#', ' ', ' ']], 'abacaba'), true, 'Test 112');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#', ' ', '#'], [' ', 'a', ' ', 'b', ' ', 'c', ' '], ['#', ' ', '#', ' ', '#', ' ', '#'], [' ', 'd', ' ', 'e', ' ', 'f', ' ']], 'abcdef'), false, 'Test 113');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], ['#', '#', 'a', '#', '#'], [' ', ' ', ' ', ' ', ' '], ['#', '#', 'c', '#', '#'], [' ', ' ', ' ', ' ', ' ']], 'race'), false, 'Test 114');
test(placeWordInCrossword([['#', ' ', ' ', '#'], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], ['#', ' ', ' ', '#']], 'word'), true, 'Test 115');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#', ' ', '#'], ['#', 'g', '#', 'h', '#', 'i', '#'], ['#', ' ', '#', ' ', '#', ' ', '#'], ['#', 'j', '#', 'k', '#', 'l', '#'], ['#', ' ', '#', ' ', '#', ' ', '#']], 'ghijkl'), false, 'Test 116');
test(placeWordInCrossword([['#', ' ', ' ', ' ', '#'], ['#', ' ', ' ', ' ', '#'], ['#', ' ', ' ', ' ', '#'], ['#', ' ', ' ', ' ', '#'], ['#', ' ', ' ', ' ', '#']], 'word'), false, 'Test 117');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', '#', ' ', ' '], [' ', ' ', ' ', ' ']], 'a'), true, 'Test 118');
test(placeWordInCrossword([['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#']], 'abcde'), true, 'Test 119');
test(placeWordInCrossword([[' ', ' ', ' ', '#'], ['#', 'b', 'c', '#'], ['#', ' ', ' ', '#'], ['#', 'd', ' ', 'e']], 'bcde'), true, 'Test 120');
test(placeWordInCrossword([['#', '#', '#', '#', '#'], ['#', ' ', ' ', ' ', '#'], ['#', ' ', ' ', ' ', '#'], ['#', ' ', ' ', ' ', '#'], ['#', '#', '#', '#', '#']], 'hello'), false, 'Test 121');
test(placeWordInCrossword([['a', 'b', 'c', 'd', 'e'], ['#', '#', '#', '#', '#'], ['e', 'd', 'c', 'b', 'a'], ['#', '#', '#', '#', '#'], ['a', 'b', 'c', 'd', 'e']], 'abcde'), true, 'Test 122');
test(placeWordInCrossword([['#', '#', '#'], ['a', ' ', 'a'], ['#', ' ', '#'], ['b', ' ', 'b'], ['#', '#', '#']], 'aba'), true, 'Test 123');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', ' ', '#', ' ', ' '], ['#', ' ', ' ', ' ', '#'], [' ', ' ', '#', ' ', ' '], ['#', ' ', '#', ' ', '#']], 'java'), false, 'Test 124');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', 'a', ' ', 'a', ' '], ['#', ' ', '#', ' ', '#'], [' ', 'b', ' ', 'b', ' '], ['#', ' ', '#', ' ', '#']], 'abba'), false, 'Test 125');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', 'a', 'b', 'c', ' '], ['#', ' ', '#', ' ', '#']], 'abc'), false, 'Test 126');
test(placeWordInCrossword([['#', '#', '#', '#', '#', '#'], ['#', ' ', ' ', ' ', ' ', '#'], ['#', ' ', 'a', 'b', ' ', '#'], ['#', ' ', ' ', ' ', ' ', '#'], ['#', '#', '#', '#', '#', '#']], 'ab'), false, 'Test 127');
test(placeWordInCrossword([[' ', ' ', '#', ' ', ' '], [' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', '#'], [' ', ' ', ' ', ' ', ' '], [' ', ' ', '#', ' ', ' ']], 'hello'), true, 'Test 128');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', '#'], ['#', ' ', 'a', ' ', '#'], ['#', ' ', ' ', ' ', '#'], [' ', ' ', ' ', ' ', ' ']], 'a'), true, 'Test 129');
test(placeWordInCrossword([['a', ' ', ' ', '#'], [' ', 'b', ' ', '#'], [' ', ' ', 'c', ' '], ['#', '#', '#', '#']], 'abc'), true, 'Test 130');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', ' ', ' ', '#'], [' ', ' ', ' ', ' ', ' '], ['#', ' ', '#', ' ', '#']], 'car'), true, 'Test 131');
test(placeWordInCrossword([['#', '#', '#'], ['#', '#', '#'], ['#', '#', '#']], 'a'), false, 'Test 132');
test(placeWordInCrossword([['a', 'b', 'c'], ['d', '#', 'e'], ['f', 'g', 'h'], ['i', 'j', 'k']], 'def'), false, 'Test 133');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], [' ', '#', 'a', '#', ' '], [' ', '#', ' ', '#', ' '], [' ', '#', 'b', '#', ' '], [' ', ' ', ' ', ' ', ' ']], 'ba'), false, 'Test 134');
test(placeWordInCrossword([['#', ' ', '#'], ['a', ' ', 'b'], ['#', ' ', '#'], ['c', ' ', 'd'], ['#', ' ', '#']], 'abcd'), false, 'Test 135');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', '#', '#', ' '], [' ', '#', '#', ' '], [' ', ' ', ' ', ' ']], 'abcd'), true, 'Test 136');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#', ' ', '#'], ['#', ' ', '#', ' ', '#', ' ', '#'], ['#', ' ', '#', ' ', '#', ' ', '#'], ['#', ' ', '#', ' ', '#', ' ', '#'], ['#', ' ', '#', ' ', '#', ' ', '#']], 'abc'), false, 'Test 137');
test(placeWordInCrossword([['#', ' ', '#'], ['f', 'e', 'd'], [' ', ' ', ' '], ['c', 'b', 'a'], ['#', ' ', '#']], 'abcdef'), false, 'Test 138');
test(placeWordInCrossword([[' ', '#', ' ', '#', ' '], ['#', 'a', '#', 'c', '#'], [' ', '#', ' ', '#', ' '], ['#', ' ', '#', 'a', '#']], 'ca'), false, 'Test 139');
test(placeWordInCrossword([[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], ['#', 'a', 'b', 'c'], [' ', ' ', ' ', ' ']], 'abc'), true, 'Test 140');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', '#'], ['#', ' ', '#', ' ', '#'], [' ', ' ', ' ', ' ', '#'], ['#', ' ', '#', ' ', '#']], 'abcde'), true, 'Test 141');
test(placeWordInCrossword([['#', ' ', '#', ' ', '#'], [' ', 'c', 'b', 'a', ' '], ['#', ' ', '#', ' ', '#']], 'abc'), false, 'Test 142');
test(placeWordInCrossword([[' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' '], ['#', '#', '#', '#', '#'], [' ', ' ', ' ', ' ', ' ']], 'cross'), true, 'Test 143');

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
