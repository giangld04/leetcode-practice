// Test: 1662. Check If Two String Arrays Are Equivalent
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { arrayStringsAreEqual } = require("./solution");

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

console.log("\n1662. Check If Two String Arrays Are Equivalent\n");

test(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]), true, 'Test 1');
test(arrayStringsAreEqual(["x"], ["y"]), false, 'Test 2');
test(arrayStringsAreEqual(["different"], ["string"]), false, 'Test 3');
test(arrayStringsAreEqual(["hello", "world"], ["helloworld"]), true, 'Test 4');
test(arrayStringsAreEqual(["one", "two", "three"], ["onetwothree"]), true, 'Test 5');
test(arrayStringsAreEqual(["abc"], ["a", "b", "c"]), true, 'Test 6');
test(arrayStringsAreEqual(["abc"], ["ab", "c"]), true, 'Test 7');
test(arrayStringsAreEqual(["xyz"], ["x", "y", "z"]), true, 'Test 8');
test(arrayStringsAreEqual(["hello", "world"], ["helloWorld"]), false, 'Test 9');
test(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]), true, 'Test 10');
test(arrayStringsAreEqual(["a"], ["a"]), true, 'Test 11');
test(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]), false, 'Test 12');
test(arrayStringsAreEqual(["hello"], ["hello"]), true, 'Test 13');
test(arrayStringsAreEqual(["test"], ["t", "es", "t"]), true, 'Test 14');
test(arrayStringsAreEqual(["a", "b"], ["ab"]), true, 'Test 15');
test(arrayStringsAreEqual(["same", "string"], ["same", "string"]), true, 'Test 16');
test(arrayStringsAreEqual(["a", "b", "c"], ["a", "b", "c"]), true, 'Test 17');
test(arrayStringsAreEqual(["a", "b", "c", "d", "e", "f", "g"], ["abcdefg"]), true, 'Test 18');
test(arrayStringsAreEqual(["split", "in", "pieces"], ["spli", "tin", "pi", "eces"]), true, 'Test 19');
test(arrayStringsAreEqual(["a", "b", "c", "d", "e", "f"], ["abcdef"]), true, 'Test 20');
test(arrayStringsAreEqual(["complex", "string", "example"], ["com", "plex", "string", "ex", "ample"]), true, 'Test 21');
test(arrayStringsAreEqual(["a", "b", "c"], ["ab", "c"]), true, 'Test 22');
test(arrayStringsAreEqual(["same", "same", "same"], ["same", "same", "same"]), true, 'Test 23');
test(arrayStringsAreEqual(["split", "this", "up"], ["splitthis", "up"]), true, 'Test 24');
test(arrayStringsAreEqual(["a", "b", "c"], ["d", "e", "f"]), false, 'Test 25');
test(arrayStringsAreEqual(["xyz", "123", "abc"], ["xyz1", "23abc"]), true, 'Test 26');
test(arrayStringsAreEqual(["abcdef"], ["abc", "d", "e", "f"]), true, 'Test 27');
test(arrayStringsAreEqual(["abcd", "efgh", "ijkl"], ["abcdefgh", "ijkl"]), true, 'Test 28');
test(arrayStringsAreEqual(["abc", "def"], ["abcdefg"]), false, 'Test 29');
test(arrayStringsAreEqual(["abc", "def", "ghi"], ["abc", "d", "efghi"]), true, 'Test 30');
test(arrayStringsAreEqual(["complex", "word"], ["c", "o", "m", "p", "l", "e", "x", "word"]), true, 'Test 31');
test(arrayStringsAreEqual(["partial", "match"], ["partialm", "atch"]), true, 'Test 32');
test(arrayStringsAreEqual(["a", "bc", "def", "ghij"], ["abc", "defghij"]), true, 'Test 33');
test(arrayStringsAreEqual(["equal", "strings"], ["equalstrings"]), true, 'Test 34');
test(arrayStringsAreEqual(["example"], ["ex", "ample"]), true, 'Test 35');
test(arrayStringsAreEqual(["complex", "example"], ["com", "plexex", "ample"]), true, 'Test 36');
test(arrayStringsAreEqual(["abcdefg", "hijklmn"], ["abc", "defghijklmn"]), true, 'Test 37');
test(arrayStringsAreEqual(["same"], ["s", "a", "m", "e"]), true, 'Test 38');
test(arrayStringsAreEqual(["long", "word", "sequence"], ["l", "ongw", "ordsequ", "ence"]), true, 'Test 39');
test(arrayStringsAreEqual(["a", "very", "long", "string", "here"], ["averylongstringhere"]), true, 'Test 40');
test(arrayStringsAreEqual(["same", "string"], ["sam", "e", "string"]), true, 'Test 41');
test(arrayStringsAreEqual(["abc", "defg", "hijkl"], ["abcdefg", "hijkl"]), true, 'Test 42');
test(arrayStringsAreEqual(["abc", "def", "ghi"], ["abcdef", "ghi"]), true, 'Test 43');
test(arrayStringsAreEqual(["abc", "def", "ghi"], ["abcdefg", "hi"]), true, 'Test 44');
test(arrayStringsAreEqual(["long", "string", "here"], ["longstring", "here"]), true, 'Test 45');
test(arrayStringsAreEqual(["x", "y", "z"], ["xyz"]), true, 'Test 46');
test(arrayStringsAreEqual(["z"], ["z"]), true, 'Test 47');
test(arrayStringsAreEqual(["one", "two", "three", "four"], ["onetwo", "three", "four"]), true, 'Test 48');
test(arrayStringsAreEqual(["one", "two", "three", "four"], ["onetwo", "threefour"]), true, 'Test 49');
test(arrayStringsAreEqual(["x", "y", "z"], ["x", "yz"]), true, 'Test 50');
test(arrayStringsAreEqual(["xyz", "uvw"], ["xy", "zu", "vw"]), true, 'Test 51');
test(arrayStringsAreEqual(["a", "b", "c", "d", "e"], ["abcd", "e"]), true, 'Test 52');
test(arrayStringsAreEqual(["longerstring", "here"], ["longerstringhere"]), true, 'Test 53');
test(arrayStringsAreEqual(["onetwothree"], ["one", "two", "three"]), true, 'Test 54');
test(arrayStringsAreEqual(["abc", "def", "ghi"], ["ab", "cdef", "ghi"]), true, 'Test 55');
test(arrayStringsAreEqual(["abcd"], ["ab", "c", "d"]), true, 'Test 56');
test(arrayStringsAreEqual(["one", "two", "three", "four"], ["onetwothreefour"]), true, 'Test 57');
test(arrayStringsAreEqual(["almost", "thesame"], ["almostthesame", "extra"]), false, 'Test 58');
test(arrayStringsAreEqual(["split", "into", "multiple", "parts"], ["splitint", "omulti", "pleparts"]), true, 'Test 59');
test(arrayStringsAreEqual(["ab", "cde", "f"], ["abc", "def"]), true, 'Test 60');
test(arrayStringsAreEqual(["same", "string", "here"], ["samestringhere"]), true, 'Test 61');
test(arrayStringsAreEqual(["xyz", "uvw", "mnop"], ["xyzu", "vw", "mnop"]), true, 'Test 62');
test(arrayStringsAreEqual(["xyz", "uvw", "qrst"], ["xyzuvw", "qrst"]), true, 'Test 63');
test(arrayStringsAreEqual(["same", "string", "here"], ["sam", "e", "stringhere"]), true, 'Test 64');
test(arrayStringsAreEqual(["longstringhere", "another"], ["longstringhereanother"]), true, 'Test 65');
test(arrayStringsAreEqual(["this", "is", "a", "test"], ["thi", "sisa", "test"]), true, 'Test 66');
test(arrayStringsAreEqual(["abc", "defg", "hijk", "lmnop"], ["abcdefg", "hijklmnop"]), true, 'Test 67');
test(arrayStringsAreEqual(["longstringhere", "anotherlongstringhere"], ["longstringhereanotherlongstringhere"]), true, 'Test 68');
test(arrayStringsAreEqual(["a", "b", "c", "d", "e"], ["abcde"]), true, 'Test 69');
test(arrayStringsAreEqual(["part1", "part2", "part3"], ["part", "1part2", "part3"]), true, 'Test 70');
test(arrayStringsAreEqual(["a", "longer", "string", "here"], ["a", "longerstring", "here"]), true, 'Test 71');
test(arrayStringsAreEqual(["part1", "part2"], ["part1part2"]), true, 'Test 72');
test(arrayStringsAreEqual(["a", "b", "c"], ["abc"]), true, 'Test 73');
test(arrayStringsAreEqual(["different", "length"], ["differentlen", "gth"]), true, 'Test 74');
test(arrayStringsAreEqual(["longstringone", "longstringtwo"], ["longstringone", "long", "string", "two"]), true, 'Test 75');
test(arrayStringsAreEqual(["same", "string", "here"], ["samestring", "here"]), true, 'Test 76');
test(arrayStringsAreEqual(["short"], ["loooooooonger"]), false, 'Test 77');
test(arrayStringsAreEqual(["hello", "world"], ["he", "ll", "o", "wor", "ld"]), true, 'Test 78');
test(arrayStringsAreEqual(["hello", "world", "python"], ["hello", "wor", "ldpy", "thon"]), true, 'Test 79');
test(arrayStringsAreEqual(["another", "example", "with", "spaces"], ["anotherexam", "plewithspaces"]), true, 'Test 80');
test(arrayStringsAreEqual(["xyz", "uvw", "rst"], ["xyzuvw", "rst"]), true, 'Test 81');
test(arrayStringsAreEqual(["abc", "def"], ["a", "bc", "d", "ef"]), true, 'Test 82');
test(arrayStringsAreEqual(["this", "is", "a", "test"], ["thisisatest"]), true, 'Test 83');
test(arrayStringsAreEqual(["samestringhere"], ["same", "string", "here"]), true, 'Test 84');
test(arrayStringsAreEqual(["abcd"], ["a", "b", "c", "d"]), true, 'Test 85');
test(arrayStringsAreEqual(["abc", "def", "ghi"], ["abcdefghi"]), true, 'Test 86');
test(arrayStringsAreEqual(["a", "a", "a", "a", "a"], ["a", "a", "a", "a", "a"]), true, 'Test 87');
test(arrayStringsAreEqual(["a", "a", "a", "a", "a"], ["aaaaa"]), true, 'Test 88');
test(arrayStringsAreEqual(["mismatch", "here"], ["mismatch", "there"]), false, 'Test 89');
test(arrayStringsAreEqual(["one", "two", "three"], ["on", "etwothree"]), true, 'Test 90');
test(arrayStringsAreEqual(["part", "one"], ["p", "artone"]), true, 'Test 91');
test(arrayStringsAreEqual(["equal", "length", "words"], ["equal", "length", "word"]), false, 'Test 92');
test(arrayStringsAreEqual(["abc", "def", "ghi"], ["abc", "def", "ghi"]), true, 'Test 93');
test(arrayStringsAreEqual(["equal", "length"], ["equal", "length"]), true, 'Test 94');
test(arrayStringsAreEqual(["longwordhere"], ["l", "on", "g", "wo", "rd", "here"]), true, 'Test 95');
test(arrayStringsAreEqual(["longer", "string", "example"], ["longerstringexample"]), true, 'Test 96');
test(arrayStringsAreEqual(["singleword"], ["single", "word"]), true, 'Test 97');
test(arrayStringsAreEqual(["different", "sizes"], ["different", "siz", "es"]), true, 'Test 98');
test(arrayStringsAreEqual(["a"], ["b"]), false, 'Test 99');
test(arrayStringsAreEqual(["one", "two", "three"], ["one", "twothree"]), true, 'Test 100');
test(arrayStringsAreEqual(["split", "this", "way"], ["sp", "lit", "thi", "sway"]), true, 'Test 101');
test(arrayStringsAreEqual(["one", "two", "three"], ["onetwo", "three"]), true, 'Test 102');
test(arrayStringsAreEqual(["this", "is", "a", "test"], ["thisis", "atest"]), true, 'Test 103');
test(arrayStringsAreEqual(["a", "b", "c", "d"], ["abcd"]), true, 'Test 104');
test(arrayStringsAreEqual(["split", "across", "multiple", "parts"], ["splitacrossmultip", "leparts"]), true, 'Test 105');

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
