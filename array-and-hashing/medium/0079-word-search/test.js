// Test: 79. Word Search
// 129 test cases from LeetCodeDataset
// Run: node test.js

const { exist } = require("./solution");

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

console.log("\n79. Word Search\n");

test(exist([["A","B"],["C","D"]], "BD"), true, 'Test 1');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "BDFH"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 2');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "word": "ABCB"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 3');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "word": "ABCCED"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 4');
test(exist([["A","B"],["C","D"]], "AC"), true, 'Test 5');
test(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ABCB'), false, 'Test 6');
test(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ASADB"), false, 'Test 7');
test(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"), false, 'Test 8');
test(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCESEEEFS"), true, 'Test 9');
test(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'Z'), false, 'Test 10');
test(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'AB'), true, 'Test 11');
test(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"), true, 'Test 12');
test(exist({"board": [["A","B"],["C","D"]], "word": "ACDB"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 13');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "ADEGI"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 14');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "word": "SEE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 15');
test(exist({"board": [["A","B"],["C","D"]], "word": "ABCD"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 16');
test(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'SEE'), true, 'Test 17');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "AEH"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 18');
test(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'E'), true, 'Test 19');
test(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"), true, 'Test 20');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "CEGI"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 21');
test(exist([["A","B"],["C","D"]], "AB"), true, 'Test 22');
test(exist([["A","B"],["C","D"]], "CD"), true, 'Test 23');
test(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ASAD'), true, 'Test 24');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "AIBF"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 25');
test(exist([["A"]], "A"), true, 'Test 26');
test(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ABCCED'), true, 'Test 27');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "ABCFEDA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 28');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "BEFN"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 29');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","V","N"]], "word": "AECEES"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 30');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","C","W"]], "word": "ZXCWE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 31');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "ABCB"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 32');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "ZYXWEDCBA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 33');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "CFI"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 34');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "ADGFC"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 35');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "SEE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 36');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "SSFCCEEE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 37');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","V","N"]], "word": "ABCCEDZ"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 38');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "ABCDSEF"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 39');
test(exist({"board": [["A","A","A","A"],["A","A","A","A"],["A","A","A","A"],["A","A","A","A"]], "word": "AAAAAAAAAAAA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 40');
test(exist({"board": [["S","R","B"],["L","A","N"],["R","A","N"]], "word": "SLABRAN"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 41');
test(exist({"board": [["K","L","M"],["N","O","P"],["Q","R","S"]], "word": "KPNS"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 42');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"],["J","K","L"],["M","N","O"]], "word": "AEIMQ"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 43');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "ABCCEDWXY"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 44');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "Z"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 45');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "ABCB"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 46');
test(exist({"board": [["A","A","A","A"],["A","A","A","A"],["A","A","A","A"],["A","A","A","A"]], "word": "AAAAAAAAAAAAA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 47');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "AEIMNGOHFBCDJLP"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 48');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "BCJN"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 49');
test(exist({"board": [["Z","Z","Z","Z"],["Z","Z","Z","Z"],["Z","Z","Z","Z"],["Z","Z","Z","Z"]], "word": "ZZZZ"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 50');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","V","N"]], "word": "SFCSADEC"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 51');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "ADG"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 52');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","C","W"]], "word": "SFCE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 53');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "WXYZ"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 54');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "AEIMOFHJL"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 55');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","C","V"]], "word": "ASDFGHJKL"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 56');
test(exist({"board": [["X","Y","Z"],["Y","Y","Y"],["Z","Y","X"]], "word": "XYZYX"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 57');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","C","V"]], "word": "ABCB"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 58');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "SFCS"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 59');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "BFGK"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 60');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"],["J","K","L"],["M","N","O"]], "word": "ABCDFGHIJKL"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 61');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "BCCEDAB"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 62');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","C","V"]], "word": "SFCEZ"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 63');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "AFCBAEED"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 64');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "ABCCEDBA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 65');
test(exist({"board": [["Y","A","A"],["A","Y","A"],["B","C","Y"]], "word": "YACBYAAY"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 66');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "LHN"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 67');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","V","N"]], "word": "SFCSAX"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 68');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "AFCGI"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 69');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"],["J","K","L"],["M","N","O"]], "word": "ACEGIKMO"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 70');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "CEGIHFA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 71');
test(exist({"board": [["A","A","A","A"],["A","A","A","A"],["A","A","A","A"],["A","A","A","A"]], "word": "AAAAAAAAAAA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 72');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","V","N"]], "word": "ASADEED"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 73');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "AEIM"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 74');
test(exist({"board": [["C","A","T"],["T","A","T"],["C","O","T"]], "word": "CATCAT"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 75');
test(exist({"board": [["P","R","O","G"],["R","O","G","R"],["O","G","R","A"],["G","R","A","M"]], "word": "PROGRAMMING"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 76');
test(exist({"board": [["A","Z","A","A"],["A","B","B","B"],["A","B","B","B"],["A","A","A","A"]], "word": "AZABAABBAABBA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 77');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "AEIMNDFHOGLKPCBJ"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 78');
test(exist({"board": [["W","I","R"],["D","I","R"],["W","I","R"],["D","I","R"]], "word": "WIRDIR"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 79');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "AEIMBFJNGKOHP"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 80');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "AECGI"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 81');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "ABFJEKMNOLP"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 82');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"],["J","K","L"],["M","N","O"],["P","Q","R"]], "word": "ABCDEGHILK"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 83');
test(exist({"board": [["X","Y","X","Y"],["Y","X","Y","X"],["X","Y","X","Y"]], "word": "XYXYXYXYXYXYXYXYX"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 84');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "AABCCED"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 85');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "AGMS"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 86');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","V","N"]], "word": "ABCFSAD"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 87');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"]], "word": "ABCDEFGHIJ"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 88');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","C","W"]], "word": "ABFDSAE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 89');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "FJKN"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 90');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "ABCESCFSADEE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 91');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","V","N"]], "word": "AXEZE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 92');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "SACBEC"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 93');
test(exist({"board": [["P","Q","R","S","T"],["U","V","W","X","Y"],["Z","A","B","C","D"],["E","F","G","H","I"]], "word": "PXVZBG"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 94');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","C","W"]], "word": "ABCDEE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 95');
test(exist({"board": [["A","A","A","A"],["A","A","A","A"],["A","A","A","A"],["A","A","A","B"]], "word": "AAAAAAAAAAAAAB"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 96');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"],["J","K","L"],["M","N","O"]], "word": "MNOLOKJIHGFE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 97');
test(exist({"board": [["H","A","B"],["C","D","E"],["F","G","H"]], "word": "HDFG"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 98');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "ABCESEEEFS"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 99');
test(exist({"board": [["C","A","A"],["A","A","A"],["B","C","D"]], "word": "AAB"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 100');
test(exist({"board": [["A","B","C"],["A","B","C"],["A","B","C"],["A","B","C"]], "word": "ABCCBA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 101');
test(exist({"board": [["Q","W","E","R","T"],["Y","U","I","O","P"],["A","S","D","F","G"],["H","J","K","L","Z"],["X","C","V","B","N"]], "word": "QUICK"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 102');
test(exist({"board": [["H","E","L","L","O"],["W","O","R","L","D"],["P","Y","T","H","O"],["N","A","M","E","S"]], "word": "HELLOWORLD"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 103');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","V","N"]], "word": "ABCCEDF"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 104');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "ABCDEFGHIJKL"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 105');
test(exist({"board": [["X","Y","Z"],["Y","X","Y"],["Z","Y","X"]], "word": "XYZX"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 106');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "SEEECCFAB"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 107');
test(exist({"board": [["H","E","L","L"],["O","O","L","L"],["O","O","O","O"]], "word": "HELLO"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 108');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "ABCCED"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 109');
test(exist({"board": [["D","O","G"],["O","D","O"],["G","O","D"]], "word": "DOGOD"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 110');
test(exist({"board": [["A","B"],["C","D"],["E","F"],["G","H"]], "word": "ACEG"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 111');
test(exist({"board": [["A","B","C","D"],["E","F","G","H"],["I","J","K","L"],["M","N","O","P"]], "word": "ABCEFGHILKOPNMJI"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 112');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","C","V"]], "word": "ABCCEDZ"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 113');
test(exist({"board": [["A","A","A","A"],["A","B","B","A"],["A","B","B","A"],["A","A","A","A"]], "word": "ABBA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 114');
test(exist({"board": [["A","B","C"],["B","D","E"],["C","E","F"]], "word": "ABCEDCBA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 115');
test(exist({"board": [["M","A","Y"],["A","Z","Y"],["Y","A","Z"]], "word": "MAZAZY"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 116');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "BCCEED"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 117');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "XYZW"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 118');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["B","C","D","A"]], "word": "ACFEDCBA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 119');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"],["J","K","L"]], "word": "ABEHIK"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 120');
test(exist({"board": [["G","H","I","J"],["K","L","M","N"],["O","P","Q","R"],["S","T","U","V"]], "word": "GHPQMUT"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 121');
test(exist({"board": [["A","B","C"],["D","E","F"],["G","H","I"],["J","K","L"],["M","N","O"]], "word": "BFJNO"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 122');
test(exist({"board": [["W","O","R"],["L","D","W"],["O","R","D"]], "word": "WORLD"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 123');
test(exist({"board": [["P","E","E","R"],["P","A","E","R"],["P","E","E","R"],["A","D","E","R"]], "word": "PEERPERADER"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 124');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","V","N"]], "word": "ZEENED"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 125');
test(exist({"board": [["A","A","A","A"],["A","B","B","B"],["A","B","A","B"],["A","B","B","A"]], "word": "BABBBB"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 126');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","V","N"]], "word": "ABCCEDA"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 127');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["Z","X","C","W"]], "word": "SFCFSC"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 128');
test(exist({"board": [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["W","X","Y","Z"]], "word": "ASAE"}), Error: Solution.exist[] missing 2 required positional arguments: 'board' and 'word', 'Test 129');

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
