// Test: 344. Reverse String
// 40 test cases from LeetCodeDataset
// Run: node test.js

const { reverseString } = require("./solution");

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

console.log("\n344. Reverse String\n");

test(reverseString(["1","2","3","4","5"]), null, 'Test 1');
test(reverseString(["a","b","c","d","e","f","g","h","i","j"]), null, 'Test 2');
test(reverseString(["a","b"]), null, 'Test 3');
test(reverseString(["a"]), null, 'Test 4');
test(reverseString(["A","b","C","d","E","f","G"]), null, 'Test 5');
test(reverseString(["A","b","C","d","E","f"]), null, 'Test 6');
test(reverseString(["Z"]), null, 'Test 7');
test(reverseString(["h","e","l","l","o"]), null, 'Test 8');
test(reverseString(["x","y","z","w","v","u","t","s","r","q","p"]), null, 'Test 9');
test(reverseString(["H","a","n","n","a","h"]), null, 'Test 10');
test(reverseString(["t","e","s","t","i","n","g","1","2","3","4","5","6","7","8","9","0"]), null, 'Test 11');
test(reverseString(["t","h","i","s"," ","i","s"," ","a"," ","t","e","s","t"," ","c","a","s","e"]), null, 'Test 12');
test(reverseString(["P","y","t","h","o","n"," ","i","s"," ","a"," ","v","e","r","y"," ","p","o","w","e","r","f","u","l"," ","p","r","o","g","r","a","m","m","i","n","g"," ","l","a","n","g","u","a","g","e"]), null, 'Test 13');
test(reverseString(["Python","!","is","fun"]), null, 'Test 14');
test(reverseString(["1","2","3","4","5","6","7","8","9","0"]), null, 'Test 15');
test(reverseString(["race","car","!"]), null, 'Test 16');
test(reverseString(["p","r","o","g","r","a","m","m","i","n","g"," ","i","s"," ","f","u","n"]), null, 'Test 17');
test(reverseString(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]), null, 'Test 18');
test(reverseString(["A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A"]), null, 'Test 19');
test(reverseString(["123","456","789"]), null, 'Test 20');
test(reverseString(["A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A"]), null, 'Test 21');
test(reverseString(["1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","[","]","-","_","+","=","[","]","{","}","|",";",":",",",".","/","<",".",">","?"]), null, 'Test 22');
test(reverseString(["1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","[","]","-","+","=","_","{","}","[","]","|",";","'",":","\","<",">",".",",","/","?","`","~"]), Error: Solution.reverseString[] missing 1 required positional argument: 's', 'Test 23');
test(reverseString(["Python","is","awesome!"]), null, 'Test 24');
test(reverseString(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), null, 'Test 25');
test(reverseString(["r","e","v","e","r","s","i","b","l","e"," ","S","t","r","i","n","g"]), null, 'Test 26');
test(reverseString(["!","@","#","$","%","^","&","*","[","]","-","_","+","=",":",";","'",",","<",">",".","/","?","[","]","{","}","|","\\"]), null, 'Test 27');
test(reverseString(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), null, 'Test 28');
test(reverseString(["racecar","is","a","level","palindrome"]), null, 'Test 29');
test(reverseString(["A","1","B","2","C","3","D","4","E","5","F","6","G","7","H","8","I","9","J","0"]), null, 'Test 30');
test(reverseString(["A","n","k","u","r"," ","P","a","t","i","l"]), null, 'Test 31');
test(reverseString(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]), null, 'Test 32');
test(reverseString(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), null, 'Test 33');
test(reverseString(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]), null, 'Test 34');
test(reverseString(["!","@","#","$","%","^","&","*","[","]","_","-","+","=",",",".","/","?",":",";","'","\"","[", "]","{","}","|","\\","`","~","<",">"]), null, 'Test 35');
test(reverseString(["s","u","p","e","r","c","a","l","i","f","r","a","g","i","l","i","s","t","i","c","e","x","p","i","a","l","i","d","o","c","i","o","u","s"]), null, 'Test 36');
test(reverseString(["x","y","z","A","B","C","1","2","3","!","@","#","$","%","^","&","*","[","]","-","_","+","=","[","]","{","}","|",";",":",",",".","/","<",".",">","?"]), null, 'Test 37');
test(reverseString(["L","o","r","e","m"," ","i","p","s","u","m"," ","d","o","l","o","r"," ","s","i","t"," ","a","m","e","t"]), null, 'Test 38');
test(reverseString(["M","e","d","i","a","V","a","i","d"," ","T","e","c","h","n","o","l","o","g","y"]), null, 'Test 39');
test(reverseString(["A","n","n","a","k","a","l","a","k","a","n","n","A"]), null, 'Test 40');

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
