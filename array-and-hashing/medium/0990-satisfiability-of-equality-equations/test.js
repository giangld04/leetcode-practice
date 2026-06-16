// Test: 990. Satisfiability Of Equality Equations
// 83 test cases from LeetCodeDataset
// Run: node test.js

const { equationsPossible } = require("./solution");

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

console.log("\n990. Satisfiability Of Equality Equations\n");

test(equationsPossible(["a!=a"]), false, 'Test 1');
test(equationsPossible([", =b",", =d",", =f",", =h"]), true, 'Test 2');
test(equationsPossible([", =c",", =d","x!=z"]), true, 'Test 3');
test(equationsPossible([", =b",", =c","a!=c"]), false, 'Test 4');
test(equationsPossible([", =a",", =b",", =c"]), true, 'Test 5');
test(equationsPossible([", =b","b!=a",", =c",", =b"]), false, 'Test 6');
test(equationsPossible(["a!=b","b!=c","c!=a"]), true, 'Test 7');
test(equationsPossible(["a!=b","b!=c","a!=c"]), true, 'Test 8');
test(equationsPossible([", =b","b!=c",", =a"]), false, 'Test 9');
test(equationsPossible([", =a",", =b"]), true, 'Test 10');
test(equationsPossible([", =g",", =f","f!=g"]), false, 'Test 11');
test(equationsPossible([", =b","b!=a"]), false, 'Test 12');
test(equationsPossible([", =b",", =c",", =c"]), true, 'Test 13');
test(equationsPossible([", =b",", =c",", =a","a!=b","b!=c","c!=a"]), false, 'Test 14');
test(equationsPossible([", =b", "b!=c", "c!=d", "d!=e", "e!=f", "f!=g", "g!=h", "h!=i", "i!=j", "j!=k", "k!=l", "l!=m", "m!=n", "n!=o", "o!=p", "p!=q", "q!=r", "r!=s", "s!=t", "t!=u", "u!=v", "v!=w", "w!=x", "x!=y", "y!=z", ", =a"]), true, 'Test 15');
test(equationsPossible([", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a",", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a",", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a","p!=q","q!=r","r!=s","s!=t","t!=u","u!=v","v!=w","w!=x","x!=y","y!=z","z!=a","a!=b","b!=c","c!=d","d!=e","e!=f","f!=g","g!=h","h!=i","i!=j","j!=k","k!=l","l!=m","m!=n","n!=o","o!=p","p!=q","q!=r","r!=s","s!=t","t!=u","u!=v","v!=w","w!=x","x!=y","y!=z","z!=a","a!=b","b!=c","c!=d","d!=e","e!=f","f!=g","g!=h","h!=i","i!=j","j!=k","k!=l","l!=m","m!=n","n!=o","o!=p","p!=q","q!=r","r!=s","s!=t","t!=u","u!=v","v!=w","w!=x","x!=y","y!=z","z!=a"]), false, 'Test 16');
test(equationsPossible([", =y",", =z",", =w",", =x"]), true, 'Test 17');
test(equationsPossible([", =b",", =c","c!=a",", =d","d!=b","b!=c"]), false, 'Test 18');
test(equationsPossible([", =b",", =c",", =d",", =a",", =f","f!=g",", =h",", =i","i!=j",", =k",", =l",", =m",", =n","n!=o",", =p",", =q",", =r",", =s","s!=t",", =u",", =v",", =w",", =x","x!=y","y!=z"]), true, 'Test 19');
test(equationsPossible([", =y", ", =z", ", =w", ", =x", "x!=y"]), false, 'Test 20');
test(equationsPossible([", =b", ", =c", "c!=d", ", =e", ", =f", "f!=g", ", =h", ", =i", ", =j", "j!=k", ", =l", ", =m", ", =n", "n!=o", ", =p", ", =q", ", =r", ", =s", ", =t", ", =u", ", =v", ", =w", ", =x", ", =y", ", =z", "z!=a"]), true, 'Test 21');
test(equationsPossible([", =y",", =z",", =w","w!=x",", =q",", =r","r!=s",", =t","t!=u",", =v","v!=w",", =x",", =y","y!=z",", =a",", =b","b!=c",", =d","d!=e",", =f","f!=g",", =h"]), false, 'Test 22');
test(equationsPossible([", =y",", =z",", =x","x!=y","y!=z","z!=x"]), false, 'Test 23');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =g",", =a","a!=g"]), false, 'Test 24');
test(equationsPossible([", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =m","m!=n"]), false, 'Test 25');
test(equationsPossible([", =b",", =c","c!=d","d!=e",", =f",", =g","g!=h","h!=i",", =j",", =k","k!=l","l!=m",", =n",", =o","o!=p","p!=q",", =r",", =s","s!=t","t!=u",", =v",", =w","w!=x","x!=y",", =z","z!=a"]), true, 'Test 26');
test(equationsPossible([", =y", ", =z", "x!=z", ", =x", ", =y", "w!=z"]), false, 'Test 27');
test(equationsPossible([", =b",", =a","c!=d","d!=c",", =f","f!=e"]), false, 'Test 28');
test(equationsPossible([", =b", ", =c", ", =d", ", =e", ", =f", ", =g", ", =h", ", =i", ", =j", ", =k", ", =l", ", =m", ", =n", ", =o", ", =p", ", =q", ", =r", ", =s", ", =t", ", =u", ", =v", ", =w", ", =x", ", =y", ", =z", "z!=a"]), false, 'Test 29');
test(equationsPossible([", =q",", =r",", =s",", =t",", =p","p!=r"]), false, 'Test 30');
test(equationsPossible([", =b",", =c","c!=d",", =e",", =f","f!=g",", =h","h!=i",", =j","j!=k",", =l","l!=m",", =n","n!=o"]), true, 'Test 31');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a","a!=b","b!=c","c!=d","d!=e","e!=f","f!=g","g!=h","h!=i","i!=j","j!=k","k!=l","l!=m","m!=n","n!=o","o!=p","p!=q","q!=r","r!=s","s!=t","t!=u","u!=v","v!=w","w!=x","x!=y","y!=z","z!=a"]), false, 'Test 32');
test(equationsPossible([", =b",", =c",", =c","a!=b","b!=c","a!=c"]), false, 'Test 33');
test(equationsPossible([", =b",", =c",", =d","a!=d"]), false, 'Test 34');
test(equationsPossible([", =y",", =z",", =x",", =v",", =w",", =u","x!=u"]), true, 'Test 35');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a"]), true, 'Test 36');
test(equationsPossible([", =q","q!=r",", =s","s!=t",", =u",", =p"]), true, 'Test 37');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a",", =b",", =a",", =d",", =c",", =f",", =e",", =h",", =g",", =j",", =i",", =l",", =k",", =n",", =m",", =p",", =o",", =r",", =q",", =t",", =s",", =v",", =u",", =x",", =w",", =z",", =y","a!=a"]), false, 'Test 38');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a",", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a","a!=b"]), false, 'Test 39');
test(equationsPossible([", =b",", =c","c!=d",", =e",", =f","f!=g",", =h",", =i","i!=j",", =k",", =l","l!=m",", =n",", =o","o!=p",", =q",", =r","r!=s",", =t",", =u","u!=v",", =w",", =x","x!=y",", =z","z!=a",", =b"]), true, 'Test 40');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a","a!=b"]), false, 'Test 41');
test(equationsPossible([", =b", ", =c", "c!=d", ", =e", ", =f", "f!=a"]), true, 'Test 42');
test(equationsPossible([", =b",", =c",", =d","a!=d","b!=c","d!=a"]), false, 'Test 43');
test(equationsPossible([", =y",", =z",", =w","w!=x"]), false, 'Test 44');
test(equationsPossible([", =b", ", =c", ", =a", ", =d", ", =e", ", =f", ", =a", "a!=b"]), false, 'Test 45');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a","a!=c"]), false, 'Test 46');
test(equationsPossible([", =q",", =r",", =s",", =p","p!=q"]), false, 'Test 47');
test(equationsPossible([", =q", ", =r", ", =s", ", =p", "p!=q"]), false, 'Test 48');
test(equationsPossible([", =b", ", =c", "a!=c", ", =e", ", =f", "d!=f"]), false, 'Test 49');
test(equationsPossible([", =b",", =c",", =a",", =d",", =e",", =f",", =e",", =f",", =d","a!=d","b!=e","c!=f"]), false, 'Test 50');
test(equationsPossible([", =q",", =r",", =s",", =t",", =p","p!=q"]), false, 'Test 51');
test(equationsPossible([", =b", ", =c", ", =d", "a!=d"]), false, 'Test 52');
test(equationsPossible([", =y1",", =z1",", =w1","w1!=x1",", =b2",", =c2",", =d2",", =e2","e2!=f2",", =h3",", =i3",", =j3","j3!=k3"]), true, 'Test 53');
test(equationsPossible([", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a",", =b",", =m","m!=n","n!=o","o!=p","p!=q","q!=r","r!=s","s!=t","t!=u","u!=v","v!=w","w!=x","x!=y","y!=z","z!=a","a!=b","b!=m"]), false, 'Test 54');
test(equationsPossible([", =b","b!=c",", =d","d!=e",", =f",", =g","g!=h",", =i","i!=j",", =k","k!=l",", =m",", =n","n!=o",", =p","p!=q",", =r",", =s","s!=t",", =u","u!=v",", =w",", =x","x!=y",", =z"]), true, 'Test 55');
test(equationsPossible([", =y",", =z",", =w",", =x","x!=y","y!=z","z!=w","w!=x"]), false, 'Test 56');
test(equationsPossible([", =y",", =z",", =x","x!=y"]), false, 'Test 57');
test(equationsPossible([", =b",", =c","c!=a",", =e",", =f","f!=d",", =h",", =i","i!=g",", =k",", =l","l!=j",", =n",", =o","o!=m"]), false, 'Test 58');
test(equationsPossible([", =b",", =c","c!=d",", =e",", =f","f!=g",", =h","h!=i",", =j","j!=k",", =l","l!=m",", =n",", =o","o!=p"]), true, 'Test 59');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =a"]), true, 'Test 60');
test(equationsPossible([", =b", ", =c", ", =a", "a!=d", "d!=e", "e!=f", "f!=a", ", =b"]), true, 'Test 61');
test(equationsPossible([", =b",", =c",", =d","a!=d",", =e","e!=f",", =g","g!=h",", =i","i!=j",", =k","k!=l","l!=m","m!=n","n!=o","o!=p","p!=a"]), false, 'Test 62');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =a","a!=b"]), false, 'Test 63');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a",", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a"]), true, 'Test 64');
test(equationsPossible([", =b",", =a",", =d",", =c",", =f",", =e",", =h",", =g",", =j",", =i",", =l",", =k",", =n",", =m",", =p",", =o",", =r",", =q",", =t",", =s",", =v",", =u",", =x",", =w",", =z",", =y"]), true, 'Test 65');
test(equationsPossible([", =n", ", =o", ", =p", ", =q", ", =r", ", =s", ", =m", "m!=n"]), false, 'Test 66');
test(equationsPossible([", =b",", =c",", =d",", =d","a!=d"]), false, 'Test 67');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =a","a!=b"]), false, 'Test 68');
test(equationsPossible([", =y",", =z","z!=x"]), false, 'Test 69');
test(equationsPossible([", =y",", =z",", =w",", =v",", =u",", =x","x!=y"]), false, 'Test 70');
test(equationsPossible([", =n",", =o","o!=p",", =q",", =r","r!=s",", =t",", =u",", =v","v!=w",", =x",", =y",", =z",", =a",", =b","b!=c"]), true, 'Test 71');
test(equationsPossible([", =b",", =c","c!=a",", =e",", =f","f!=d",", =h",", =i","i!=g",", =k",", =l","l!=j",", =n",", =o","o!=m",", =q",", =r","r!=p",", =t",", =u","u!=s",", =w",", =x","x!=v",", =z",", =a","a!=y"]), false, 'Test 72');
test(equationsPossible([", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a",", =b",", =c",", =d",", =e",", =f",", =g",", =h",", =i",", =j",", =k",", =l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a","a!=b","b!=c","c!=d","d!=e","e!=f","f!=g","g!=h","h!=i","i!=j","j!=k","k!=l","l!=m","m!=n","n!=o","o!=p","p!=q","q!=r","r!=s","s!=t","t!=u","u!=v","v!=w","w!=x","x!=y","y!=z","z!=a","a!=b","b!=c","c!=d","d!=e","e!=f","f!=g","g!=h","h!=i","i!=j","j!=k","k!=l","l!=m","m!=n","n!=o","o!=p","p!=q","q!=r","r!=s","s!=t","t!=u","u!=v","v!=w","w!=x","x!=y","y!=z","z!=a"]), false, 'Test 73');
test(equationsPossible([", =n",", =o","o!=p","p!=q",", =r",", =s","s!=t","t!=u",", =v",", =w","w!=x","x!=y",", =z",", =a","a!=b","b!=c","c!=d","d!=e","e!=f","f!=g","g!=h"]), true, 'Test 74');
test(equationsPossible([", =b",", =c",", =d",", =e","e!=f","f!=g","g!=h","h!=i","i!=j","j!=k","k!=l",", =m",", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =a"]), true, 'Test 75');
test(equationsPossible([", =q",", =r",", =s",", =t",", =p","p!=t"]), false, 'Test 76');
test(equationsPossible([", =b", ", =c", ", =d", ", =e", ", =f", ", =g", ", =h", ", =i", ", =j", ", =k", ", =l", ", =m", ", =n", ", =o", ", =p", ", =q", ", =r", ", =s", ", =t", ", =u", ", =v", ", =w", ", =x", ", =y", ", =z", ", =a", "a!=b"]), false, 'Test 77');
test(equationsPossible([", =b",", =c",", =a","a!=d","d!=e","e!=a"]), true, 'Test 78');
test(equationsPossible([", =b",", =c",", =a","a!=b"]), false, 'Test 79');
test(equationsPossible([", =q", ", =r", ", =s", ", =t", ", =p", "p!=q"]), false, 'Test 80');
test(equationsPossible([", =n", ", =o", ", =p", ", =q", ", =r", ", =s", ", =t", ", =u", ", =v", ", =w", ", =x", ", =y", ", =z", ", =m", "m!=n"]), false, 'Test 81');
test(equationsPossible([", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =u",", =v",", =w",", =x",", =y",", =z",", =m","m!=n"]), false, 'Test 82');
test(equationsPossible([", =n",", =o",", =p",", =q",", =r",", =s",", =t",", =m","m!=o"]), false, 'Test 83');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

