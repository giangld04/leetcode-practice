// Test: 212. Word Search Ii
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { findWords } = require("./solution");

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

console.log("\n212. Word Search Ii\n");

test(findWords([['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['oath','pea','eat','rain']), ['oath', 'eat'], 'Test 1');
test(findWords([["a","a"]], ["a"]), ['a'], 'Test 2');
test(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]), ['oath', 'eat'], 'Test 3');
test(findWords(abc"],), Error: Solution.findWords[] missing 2 required positional arguments: 'board' and 'words', 'Test 4');
test(findWords([["a"],["a"]], ["a"]), ['a'], 'Test 5');
test(findWords([['a','b'],['c','d']], ['abcb']), [], 'Test 6');
test(findWords([["a","b","c"],["a","e","d"],["a","f","g"]], ["abcdefg","gfedcbaaa","eaabcdgfa","befadac","gf), Error: Solution.findWords[] missing 1 required positional argument: 'words', 'Test 7');
test(findWords([["a","a"]], ["aaa"]), [], 'Test 8');
test(findWords([["a"]], ["a"]), ['a'], 'Test 9');
test(findWords([["a","b","c"],["d","e","f"],["g","h","i"]], ["abc","cfi","beh","defi","ghi"]), ['abc', 'beh', 'cfi', 'defi', 'ghi'], 'Test 10');
test(findWords([["a","b"],["c","d"]], ["abcb"]), [], 'Test 11');
test(findWords([["a","b"],["c","f"]], ["ab","cf","bf","ca"]), ['ab', 'bf', 'ca', 'cf'], 'Test 12');
test(findWords([["a","b","c"],["a","e","d"],["a","f","g"]], ["abcdefg","gfedcba","abcd","dcba"]), ['abcd', 'abcdefg', 'dcba', 'gfedcba'], 'Test 13');
test(findWords([["a","a","a","a"],["a","a","a","a"],["a","a","a","a"],["a","a","a","a"]], ["aaaaa","aaaab","aaaba"]), ['aaaaa'], 'Test 14');
test(findWords([['a','b','c','d','e'],['f','g','h','i','j'],['k','l','m','n','o'],['p','q','r','s','t'],['u','v','w','x','y']], ['abcdefg','hijklmn','opqrstu','vwxyz','abgmvxz','abcdefghi','pqrstuvwy']), [], 'Test 15');
test(findWords([['a','b','c','e'],['s','f','c','s'],['a','d','e','e']], ['abcb', 'abcced', 'bcec']]), Error: Solution.findWords[] missing 1 required positional argument: 'words', 'Test 16');
test(findWords([['a','a','a','a','a'],['a','a','a','a','a'],['a','a','a','a','a'],['a','a','a','a','a'],['a','a','a','a','a']], ['a','aa','aaa','aaaa','aaaaa','aaaaaa','aaaaaaaaaaaaaaaaaaaaaaaaa']), ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaa'], 'Test 17');
test(findWords([['a','a','a','a'],['a','a','a','a'],['a','a','a','a'],['a','a','a','a']], ['aaaaaaaaaa', 'aaaaaaaaaab', 'aaaaaaaaaac', 'aaaaaaaaaad']), ['aaaaaaaaaa'], 'Test 18');
test(findWords([['a','b','c'],['a','b','c'],['a','b','c']], ['abc', 'bca', 'cab', 'cba', 'bac', 'acb', 'aabc', 'abca', 'bcab', 'cbac']), ['abc', 'aabc', 'cba'], 'Test 19');
test(findWords([['o','a','b','n'],['o','t','a','e'],['a','h','k','r'],['a','f','l','v']], ['oath','path','parent','enact']), ['oath'], 'Test 20');
test(findWords([['p','e','a','f'],['t','h','o','w'],['o','r','a','g'],['n','l','e','d']], ['pear', 'flow', 'tow', 'orange', 'lead']), [], 'Test 21');
test(findWords([['z','a','b','c'],['z','e','f','g'],['z','h','i','j'],['z','k','l','m']], ['zafe', 'zjih', 'zmkl', 'zabc', 'zefg', 'zihj', 'zkjg', 'zlif', 'zzzz']), ['zabc', 'zzzz', 'zefg'], 'Test 22');
test(findWords([['a','b','c'],['d','e','f'],['g','h','i']], ['abc','def','ghi','bfg','hce','dih']), ['abc', 'def', 'ghi'], 'Test 23');
test(findWords([['a','b','c','d','e'],['f','g','h','i','j'],['k','l','m','n','o'],['p','q','r','s','t'],['u','v','w','x','y']], ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'ajgtw', 'bsmr']), ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy'], 'Test 24');
test(findWords([['a','b','c','d'],['e','f','g','h'],['i','j','k','l'],['m','n','o','p'],['q','r','s','t']], ['abcdefghijlkmnoprst','bcegikmnort','afgknprt']), [], 'Test 25');
test(findWords([['c','c','c','c'],['c','c','c','c'],['c','c','c','c'],['c','c','c','c']], ['cccc','cccccc','cccccccc']), ['cccc', 'cccccc', 'cccccccc'], 'Test 26');
test(findWords([['p','z','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['oath', 'pea', 'eat', 'rain', 'zeta', 'pani']), ['eat'], 'Test 27');
test(findWords([['x','y','x'],['y','x','y'],['x','y','x']], ['xyx', 'yxy', 'xyy', 'yxx']), ['xyx', 'yxy'], 'Test 28');
test(findWords([['a','b','c','d','e'],['f','g','h','i','j'],['k','l','m','n','o'],['p','q','r','s','t'],['u','v','w','x','y']], ['abcij', 'fghij', 'klmno', 'pqrs', 'uvwxy', 'pqmna']]), Error: Solution.findWords[] missing 1 required positional argument: 'words', 'Test 29');
test(findWords([['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['oath', 'pea', 'eat', 'rain', 'oathk', 'vli', 'hek', 'tae', 'rat', 'iate', 'tier', 'neif', 'heat']), ['oath', 'oathk', 'tae', 'eat'], 'Test 30');
test(findWords([['z','y','x'],['w','v','u'],['t','s','r'],['q','p','o'],['n','m','l'],['k','j','i'],['h','g','f'],['e','d','c'],['b','a','a']], ['zyx', 'wvu', 'tsr', 'qpo', 'nml', 'kji', 'hgf', 'edc', 'baa', 'zyxwvutsrqponmlkjihgfedcba']), ['zyx', 'wvu', 'tsr', 'qpo', 'nml', 'kji', 'hgf', 'edc', 'baa'], 'Test 31');
test(findWords([['s','e','e','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['seen','seat','heat','pear','rate','feat']), ['seen'], 'Test 32');
test(findWords([['a','b','c','d','e'],['f','g','h','i','j'],['k','l','m','n','o'],['p','q','r','s','t'],['u','v','w','x','y']], ['cat','dog','bat','rat','mat']), [], 'Test 33');
test(findWords([['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['oath','pea','eat','rain','oate','hoaf']), ['oath', 'oate', 'eat'], 'Test 34');
test(findWords([['p','e','r','f'],['e','t','e','r'],['r','e','d','o'],['f','o','x','o']], ['perfect','robot','redo','fire','fore']), ['redo'], 'Test 35');
test(findWords([['s','e','e','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['seen', 'tear', 'heap', 'inter', 'neat', 'kite']), ['seen', 'neat'], 'Test 36');
test(findWords([['a','b','c','d'],['e','f','g','h'],['i','j','k','l'],['m','n','o','p']], ['abcf','bceg','cfil','ghjo','klon','mnop']), ['mnop'], 'Test 37');
test(findWords([['s','e','e','n'],['e','t','e','e'],['e','e','s','n'],['n','s','t','e']], ['seen', 'nees', 'tees', 'test', 'east']), ['seen', 'nees', 'test'], 'Test 38');
test(findWords([['a','b','c'],['d','e','f'],['g','h','i']], ['abc','bfg','chi','def','geh']), ['abc', 'def'], 'Test 39');
test(findWords([['a']], ['a']), ['a'], 'Test 40');
test(findWords([['x','y','x','y'],['y','x','y','x'],['x','y','x','y'],['y','x','y','x']], ['xyxy','yxyx','xyyx','yxyy','xxyx','yxx','xyx']), ['xyx', 'xyxy', 'yxyx'], 'Test 41');
test(findWords([['a','b','c','e'],['z','f','c','s'],['a','d','e','e']], ['abcced','see','abce']), ['abce', 'abcced', 'see'], 'Test 42');
test(findWords([['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o']], ['abc','def','ghi','jkl','mno','adg','beh','cfi','amk','bnl','co']), ['abc', 'adg', 'beh', 'cfi', 'def', 'ghi', 'jkl', 'mno'], 'Test 43');
test(findWords([['o','a','b','n'],['o','t','a','e'],['a','h','k','r'],['a','f','l','v']], ['oath', 'pea', 'eat', 'rain', 'oathf', 'oat', 'ate']), ['oat', 'oath', 'oathf', 'eat'], 'Test 44');
test(findWords([['x','x','x','x'],['x','x','x','x'],['x','x','x','x'],['x','x','x','x']], ['xxxx','xxxy','xyxx','xxyx']), ['xxxx'], 'Test 45');
test(findWords([['a','b','c'],['a','e','d'],['a','f','g']], ['abcdefg', 'bed', 'fad', 'gfedcba']), ['abcdefg', 'bed', 'gfedcba'], 'Test 46');
test(findWords([['a','b','c','d'],['e','f','g','h'],['i','j','k','l'],['m','n','o','p']], ['abcdefgh', 'ponmlkjihgfedcba', 'abcd', 'efgh', 'ijkl', 'mnop', 'mnopijkl']), ['abcd', 'efgh', 'ijkl', 'mnop'], 'Test 47');
test(findWords([['a','b','c','d','e'],['f','g','h','i','j'],['k','l','m','n','o'],['p','q','r','s','t'],['u','v','w','x','y']], ['abcdefghij', 'klmnopqrstu', 'vwxyz', 'zutrqponmlk', 'ytxwvusrqponmlkjihgfedcba']), [], 'Test 48');
test(findWords([['a','z','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['zath','zeat','kait','lain']), [], 'Test 49');
test(findWords([['z','z','z','z'],['z','z','z','z'],['z','z','z','z'],['z','z','z','z']], ['zzz','zzzz','zzzzz']), ['zzz', 'zzzz', 'zzzzz'], 'Test 50');
test(findWords([['a','a','a','a'],['a','a','a','a'],['a','a','a','a'],['a','a','a','a']], ['aaaaaaaaaaaaa','aaaaaaaab']), ['aaaaaaaaaaaaa'], 'Test 51');
test(findWords([['a','a','a','a','a','a'],['a','a','a','a','a','a'],['a','a','a','a','a','a'],['a','a','a','a','a','a'],['a','a','a','a','a','a']], ['aaaaa','aaaaaa','aaaaaaaa']), ['aaaaa', 'aaaaaa', 'aaaaaaaa'], 'Test 52');
test(findWords([['x','y','z','w'],['v','u','t','s'],['r','q','p','o'],['n','m','l','k'],['j','i','h','g'],['f','e','d','c'],['b','a','9','8'],['7','6','5','4']], ['xyztuvw','vutsrqponmlkjihgfedcba','wvutsrqponmlkjihgfedcba','ponmlkjihgfedcba','lmkjihgfedcba','kjihgfedcba','jihgfedcba','ihgfedcba','hgfedcba','gfedcba','fedcba','edcba','dcba','cba','ba','a']), Error: list index out of range, 'Test 53');
test(findWords([['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['oath', 'pea', 'eat', 'rain', 'kite', 'pear', 'lane']), ['oath', 'eat'], 'Test 54');
test(findWords([['a','b','c'],['a','e','d'],['a','f','g']], ['abcdefg', 'gfedcba', 'abcd', 'efg']), ['abcd', 'abcdefg', 'efg', 'gfedcba'], 'Test 55');
test(findWords([['a','b','c','e'],['s','f','c','s'],['a','d','e','e']], ['abcced','see','abcb']), ['abcced', 'see'], 'Test 56');
test(findWords([['x','y','z'],['x','y','z'],['x','y','z']], ['xyz','zyx','yy','zzz','xzy']), ['xyz', 'yy', 'zzz', 'zyx'], 'Test 57');
test(findWords([['a','b','c'],['d','e','f'],['g','h','i']], ['abc', 'bcd', 'cde', 'efg', 'fgh', 'ghi', 'adg', 'beh', 'cfi']), ['abc', 'adg', 'beh', 'cfi', 'ghi'], 'Test 58');
test(findWords([['a','b','c','d','e','f'],['g','h','i','j','k','l'],['m','n','o','p','q','r'],['s','t','u','v','w','x'],['y','z','a','b','c','d']], ['abcdefghij','mnopqrstuv','wxyzabcd']), [], 'Test 59');
test(findWords([['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['oath', 'oathk', 'oathkr', 'oathkrl', 'oathkrli', 'oathkrlii', 'oathkrliif']]), Error: Solution.findWords[] missing 1 required positional argument: 'words', 'Test 60');
test(findWords([['a','a','a','a','a','a'],['a','a','a','a','a','a'],['a','a','a','a','a','a'],['a','a','a','a','a','a'],['a','a','a','a','a','a']], ['aaaaa','aaaaaa','aaaaaaaa','aaaaaaa']), ['aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa'], 'Test 61');
test(findWords([['z','z','z','z','z'],['z','z','z','z','z'],['z','z','z','z','z'],['z','z','z','z','z'],['z','z','z','z','z']], ['zzzzz','zzzzzz','zzzzzzz']), ['zzzzz', 'zzzzzz', 'zzzzzzz'], 'Test 62');
test(findWords([['a','b','c'],['d','e','f'],['g','h','i']], ['abc', 'def', 'ghi', 'bce', 'dfi', 'hcg', 'bdf', 'cei', 'adg']), ['abc', 'adg', 'def', 'ghi'], 'Test 63');
test(findWords([['x','y','z'],['w','v','u'],['t','s','r'],['q','p','o']], ['xyz', 'uvw', 'rst', 'qpo', 'xuw', 'ytv', 'zsr', 'wpo']), ['xyz', 'uvw', 'rst', 'qpo'], 'Test 64');
test(findWords([['a','a','a','a'],['a','a','a','a'],['a','a','a','a'],['a','a','a','a']], ['aaaaa', 'aaa', 'aa', 'a']), ['a', 'aa', 'aaa', 'aaaaa'], 'Test 65');
test(findWords([['w','o','r','l'],['o','n','k','n'],['r','l','d','t'],['d','t','a','e']], ['world','note','rate','tare']), ['world'], 'Test 66');
test(findWords([['x','y','x','y','x'],['y','x','y','x','y'],['x','y','x','y','x'],['y','x','y','x','y'],['x','y','x','y','x']], ['xyxyx','yxyxy','xyyxy']), ['xyxyx', 'yxyxy'], 'Test 67');
test(findWords([['a','a','a','a'],['a','a','a','a'],['a','a','a','a'],['a','a','a','a']], ['aaaaaaaaaa','aaaaaaaab','aaaaaaaac']), ['aaaaaaaaaa'], 'Test 68');
test(findWords([['c','a','t'],['a','t','c'],['t','c','a']], ['cat','act','tat','tac','att','tat','cta']), ['cat', 'tat', 'tac', 'cta', 'act'], 'Test 69');
test(findWords([['s','e','e','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['seen','seat','near','tree']), ['seen'], 'Test 70');
test(findWords([['a','a','a','a','a'],['a','a','a','a','a'],['a','a','a','a','a'],['a','a','a','a','a'],['a','a','a','a','a']], ['aaaaa', 'aaaaab', 'aaaaac', 'aaaaad']), ['aaaaa'], 'Test 71');
test(findWords([['p','e','a'],['a','o','t'],['t','h','t'],['a','i','p']], ['peacht','poth','tophat','peat']), ['peat'], 'Test 72');
test(findWords([['a','b','c'],['a','e','d'],['a','f','g']], ['abc','bce','cda','gfa']), ['abc', 'gfa'], 'Test 73');
test(findWords([['m','y','b','a','b','y'],['x','x','x','x','x','x'],['x','o','a','a','a','x'],['x','x','x','x','x','x'],['m','y','b','a','b','y']], ['baby','my','by','ma']), ['my', 'baby', 'by'], 'Test 74');
test(findWords([['a','a','a','a'],['a','a','a','a'],['a','a','a','a'],['a','a','a','a']], ['aaaa', 'aaa', 'aa', 'a', 'aaaaaaaaaaaaaaaa']), ['a', 'aa', 'aaa', 'aaaa', 'aaaaaaaaaaaaaaaa'], 'Test 75');
test(findWords([['a','b','c'],['b','c','d'],['c','d','e']], ['abc', 'bcd', 'cde', 'abcd', 'bcde', 'ab', 'cd', 'de']), ['ab', 'abc', 'abcd', 'bcd', 'bcde', 'cd', 'cde', 'de'], 'Test 76');
test(findWords([['x','y','z','w'],['x','y','z','w'],['x','y','z','w'],['x','y','z','w']], ['xyzz', 'xwyz', 'wxzy', 'zywx', 'zwxy', 'zyxw', 'yxwz', 'wyxz']), ['xyzz'], 'Test 77');
test(findWords([['z','z','z','z'],['z','z','z','z'],['z','z','z','z'],['z','z','z','z']], ['zzzzzzzzzz', 'zzzzzzzzzza', 'zzzzzzzzzzb', 'zzzzzzzzzzc']), ['zzzzzzzzzz'], 'Test 78');
test(findWords([['d','o','g'],['d','o','g'],['d','o','g']], ['dog', 'god', 'dogo', 'dogod', 'dogodu']), ['dog', 'god'], 'Test 79');
test(findWords([['p','q','r','s'],['t','u','v','w'],['x','y','z','a'],['b','c','d','e']], ['pqrs', 'tuvw', 'xyzab', 'pqru', 'rtxy', 'styz', 'uvwz']), ['pqrs', 'tuvw'], 'Test 80');
test(findWords([['a','a','a','a'],['a','a','a','a'],['a','a','a','a'],['a','a','a','a']], ['aaaaaaaaaaaaa','aaaabaaa','aaaaabaa']), ['aaaaaaaaaaaaa'], 'Test 81');
test(findWords([['h','o','l','a'],['o','n','k','n'],['r','l','d','t'],['d','t','a','e']], ['hola','note','rode','taen']), ['hola'], 'Test 82');
test(findWords([['x','y','z'],['u','v','w'],['p','q','r']], ['xyz', 'uvw', 'pqr', 'yzw', 'zwp', 'vyu']), ['xyz', 'yzw', 'uvw', 'pqr'], 'Test 83');
test(findWords([['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o']], ['abc','def','ghi','jkl','mno','adgjm','behkn','cfilor','aeim','bfjn','cgko','ahko','bdil','cehn','aflo','bgkn','chim']), ['abc', 'adgjm', 'behkn', 'def', 'ghi', 'jkl', 'mno'], 'Test 84');
test(findWords([['m','a','r','t'],['a','t','e','n'],['r','e','t','a'],['t','a','n','e']], ['mart', 'rate', 'tane', 'tart', 'ten', 'mate', 'ment', 'taen', 'meta', 'atma']), ['mart', 'mate', 'rate', 'tart', 'ten', 'tane', 'taen'], 'Test 85');
test(findWords([['a','b','c'],['a','e','d'],['e','f','g']], ['abc','bce','fed','def']), ['abc', 'def', 'fed'], 'Test 86');
test(findWords([['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v'],['g','h','i','j']], ['oath','pea','eat','rain','ghij','gfedcba','nihao']), ['oath', 'eat', 'ghij'], 'Test 87');
test(findWords([['a','b','c'],['d','e','f'],['g','h','i']], ['abc', 'bfg', 'cfi', 'adh', 'beh', 'cei', 'aeg']), ['abc', 'beh', 'cfi'], 'Test 88');
test(findWords([['p','e','a'],['e','r','a'],['a','n','a'],['n','l','a']], ['pear','peal','pale','pan','lane','paler','panel','paren','pare','parel','parer']), [], 'Test 89');

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
