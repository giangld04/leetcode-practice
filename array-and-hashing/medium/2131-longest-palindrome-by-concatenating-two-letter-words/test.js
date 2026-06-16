// Test: 2131. Longest Palindrome By Concatenating Two Letter Words
// 52 test cases from LeetCodeDataset
// Run: node test.js

const { longestPalindrome } = require("./solution");

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

console.log("\n2131. Longest Palindrome By Concatenating Two Letter Words\n");

test(longestPalindrome(["xy","yx","xy","yx","xy","yx"]), 12, 'Test 1');
test(longestPalindrome(["aa","bb","cc","dd","ee"]), 2, 'Test 2');
test(longestPalindrome(["ab","ba","xy","yx","zz","zz","zz","zz","zz","zz","zz"]), 22, 'Test 3');
test(longestPalindrome(["ab","ba","cc","dd","dc","ca","ac"]), 10, 'Test 4');
test(longestPalindrome(["cc","ll","xx"]), 2, 'Test 5');
test(longestPalindrome(["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 104, 'Test 6');
test(longestPalindrome(["ab","ba","ab","ba","ab","ba","ab","ba"]), 16, 'Test 7');
test(longestPalindrome(["mn","nm","op","po","qp","pq","rs","sr","tu","ut","vu","uv"]), 24, 'Test 8');
test(longestPalindrome(["zz","aa","bb","cc","zz","aa"]), 10, 'Test 9');
test(longestPalindrome(["ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba"]), 52, 'Test 10');
test(longestPalindrome(["ab","ty","yt","lc","cl","ab"]), 8, 'Test 11');
test(longestPalindrome(["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj"]), 2, 'Test 12');
test(longestPalindrome(["lc","cl","gg"]), 6, 'Test 13');
test(longestPalindrome(["aa","aa","aa","aa"]), 8, 'Test 14');
test(longestPalindrome(["aa","aa","aa","aa","aa"]), 10, 'Test 15');
test(longestPalindrome(["ab","ba","cc","dd","ab","ba"]), 10, 'Test 16');
test(longestPalindrome(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy"]), 52, 'Test 17');
test(longestPalindrome(["ab","ba","ab","ba","ab","ba"]), 12, 'Test 18');
test(longestPalindrome(["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 2, 'Test 19');
test(longestPalindrome(["aa","aa","aa","bb","bb","cc","cc","cc","cc","dd","dd","dd","dd"]), 26, 'Test 20');
test(longestPalindrome(["aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa","aa"]), 52, 'Test 21');
test(longestPalindrome(["aa","aa","aa","aa","ab","ba","ab","ba","ac","ca","ac","ca","ad","da","ad","da","ae","ea","ae","ea","af","fa","af","fa","ag","ga","ag","ga","ah","ha","ah","ha","ai","ia","ai","ia","aj","ja","aj","ja","ak","ka","ak","ka","al","la","al","la","am","ma","am","ma","an","na","an","na","ao","oa","ao","oa","ap","pa","ap","pa","aq","qa","aq","qa","ar","ra","ar","ra","as","sa","as","sa","at","ta","at","ta","au","ua","au","ua","av","va","av","va","aw","wa","aw","wa","ax","xa","ax","xa","ay","ya","ay","ya","az","za","az","za","bb","bb","bb","bb","cc","cc","cc","cc","dd","dd","dd","dd","ee","ee","ee","ee","ff","ff","ff","ff","gg","gg","gg","gg","hh","hh","hh","hh","ii","ii","ii","ii","jj","jj","jj","jj","kk","kk","kk","kk","ll","ll","ll","ll","mm","mm","mm","mm","nn","nn","nn","nn","oo","oo","oo","oo","pp","pp","pp","pp","qq","qq","qq","qq","rr","rr","rr","rr","ss","ss","ss","ss","tt","tt","tt","tt","uu","uu","uu","uu","vv","vv","vv","vv","ww","ww","ww","ww","xx","xx","xx","xx","yy","yy","yy","yy","zz","zz","zz","zz"]), 408, 'Test 22');
test(longestPalindrome(["ab","ba","xy","yx","cd","dc","ef","fe","gh","hg","ij","ji"]), 24, 'Test 23');
test(longestPalindrome(["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz","zz","yy","xx","ww","vv","uu","tt","ss","rr","qq","pp","oo","nn","mm","ll","kk","jj","ii","hh","gg","ff","ee","dd","cc","bb","aa"]), 104, 'Test 24');
test(longestPalindrome(["aa","bb","cc","dd","aa","bb","cc","dd","aa","bb","cc","dd"]), 18, 'Test 25');
test(longestPalindrome(["zz","zz","xy","yx","yx","xy","ab","ba","ab","ba","zz","zz"]), 24, 'Test 26');
test(longestPalindrome(["ab","ba","xy","yx","zy","yz","ab","ba","xy","yx","zy","yz","ab","ba","xy","yx","zy","yz","ab","ba","xy","yx","zy","yz","ab","ba","xy","yx","zy","yz","ab","ba","xy","yx","zy","yz"]), 72, 'Test 27');
test(longestPalindrome(["xy","yx","xx","yy","xy","yx","xx","yy","xy","yx","xx","yy"]), 22, 'Test 28');
test(longestPalindrome(["aa","bb","cc","dd","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 18, 'Test 29');
test(longestPalindrome(["aa","bb","aa","bb","cc","dd","cc","dd","ee","ff","ee","ff"]), 24, 'Test 30');
test(longestPalindrome(["aa","bb","cc","dd","aa","bb","cc","dd","aa","bb","cc","dd","aa","bb","cc","dd","aa","bb","cc","dd","aa","bb","cc","dd","aa","bb","cc","dd","aa","bb","cc","dd"]), 64, 'Test 31');
test(longestPalindrome(["xy","yx","zz","zz","yx","xz","zx","zz"]), 14, 'Test 32');
test(longestPalindrome(["aa","bb","cc","dd","aa","bb","cc","dd","aa"]), 18, 'Test 33');
test(longestPalindrome(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk"]), 24, 'Test 34');
test(longestPalindrome(["aa","aa","aa","aa","bb","bb","bb","bb","cc","cc","cc","cc","dd","dd","dd","dd","ee","ee","ee","ee","ff","ff","ff","ff","gg","gg","gg","gg","hh","hh","hh","hh"]), 64, 'Test 35');
test(longestPalindrome(["ab","ba","xy","yx","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","ab","ba","xy","yx","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy"]), 112, 'Test 36');
test(longestPalindrome(["ab","ba","ab","ba","ab","ba","cd","dc","cd","dc","ef","fe","ef","fe","gh","hg","gh","hg"]), 36, 'Test 37');
test(longestPalindrome(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 54, 'Test 38');
test(longestPalindrome(["xy","yx","yx","xy","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx","xy","xy","yx","yx"]), 304, 'Test 39');
test(longestPalindrome(["ab","ba","ac","ca","ad","da","bc","cb","bd","db"]), 20, 'Test 40');
test(longestPalindrome(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","zx","xz","ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","zx","xz"]), 112, 'Test 41');
test(longestPalindrome(["xy","yx","yy","xx","zz","zz","zz","zz","xy","yx","xx","yy","zz","zz"]), 28, 'Test 42');
test(longestPalindrome(["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz","xy","yx","xz","zx","yz","zy","yx","zx","yz","zy","yx","zx","yz","zy","yx","zx","yz","zy","yx","zx","yz","zy"]), 30, 'Test 43');
test(longestPalindrome(["ab","ba","cd","dc","cd","dc","ab","ba","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","ab","ba","cd","dc","ef","fe","gh","hg"]), 76, 'Test 44');
test(longestPalindrome(["ab","ba","ac","ca","ad","da","ae","ea","af","fa","ag","ga","ah","ha","ai","ia","aj","ja","ak","ka","al","la","am","ma","an","na","ao","oa","ap","pa","aq","qa","ar","ra","as","sa","at","ta","au","ua","av","va","aw","wa","ax","xa","ay","ya","az","za","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 102, 'Test 45');
test(longestPalindrome(["mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","aa","bb","cc","dd"]), 30, 'Test 46');
test(longestPalindrome(["ab","ba","xy","yx","zy","yz","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp"]), 14, 'Test 47');
test(longestPalindrome(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","zx","xz","yz","zy","zx","xz","yz","zy","zx","xz","yz","zy","zx","xz","yz","zy","zx","xz"]), 88, 'Test 48');
test(longestPalindrome(["qq","ww","ee","rr","tt","yy","uu","ii","oo","pp","aa","ss","dd","ff","gg","hh","jj","kk","ll","zz","xx","cc","vv","bb","nn","mm","ll","kk","jj","ii","hh","gg","ff","dd","ss","aa","pp","oo","nn","mm","zz","xx","vv","cc","uu","tt","rr","ee","ww","qq"]), 98, 'Test 49');
test(longestPalindrome(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz","zz"]), 92, 'Test 50');
test(longestPalindrome(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","zz","zz","aa","aa","bb","bb","cc","cc","dd","dd","ee","ee","ff","ff","gg","gg","hh","hh","ii","ii","jj","jj","kk","kk","ll","ll","mm","mm","nn","nn","oo","oo","pp","pp","qq","qq","rr","rr","ss","ss","tt","tt","uu","uu","vv","vv","ww","ww","xx","xx","yy","yy"]), 156, 'Test 51');
test(longestPalindrome(["aa","bb","cc","aa","bb","cc","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz","aa","bb","cc"]), 26, 'Test 52');

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
