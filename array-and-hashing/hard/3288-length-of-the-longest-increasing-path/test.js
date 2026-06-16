// Test: 3288. Length Of The Longest Increasing Path
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { maxPathLength } = require("./solution");

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

console.log("\n3288. Length Of The Longest Increasing Path\n");

test(maxPathLength([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]], 4), 7, 'Test 1');
test(maxPathLength([[1,5],[10,6],[7,8],[8,9],[9,10]], 0), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 2');
test(maxPathLength([[10,1],[9,2],[8,3],[7,4],[6,5]], 4), 1, 'Test 3');
test(maxPathLength([[10,9],[9,8],[8,7],[7,6]], 2), 4, 'Test 4');
test(maxPathLength([[1,1],[2,2],[3,3],[4,4],[5,5]], 2), 5, 'Test 5');
test(maxPathLength([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5]], 3), 6, 'Test 6');
test(maxPathLength([[1,9],[2,8],[3,7],[4,6],[5,5],[6,4],[7,3],[8,2],[9,1]], 4), 1, 'Test 7');
test(maxPathLength([[5,5],[6,6],[7,7],[8,8],[9,9]], 0), 5, 'Test 8');
test(maxPathLength([[2,1],[7,0],[5,6]], 2), 2, 'Test 9');
test(maxPathLength([[10,5],[15,10],[20,15],[25,20]], 2), 4, 'Test 10');
test(maxPathLength([[10,1],[5,2],[3,3],[7,4],[9,5]], 3), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 11');
test(maxPathLength([[10,5],[20,10],[30,15],[40,20]], 2), 4, 'Test 12');
test(maxPathLength([[1,1],[2,2],[3,3],[4,4]], 0), 4, 'Test 13');
test(maxPathLength([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]], 5), 10, 'Test 14');
test(maxPathLength([[1,1],[2,2],[3,3],[4,4],[5,5]], 0), 5, 'Test 15');
test(maxPathLength([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]], 3), 6, 'Test 16');
test(maxPathLength([[1,5],[2,4],[3,3],[4,2],[5,1]], 2), 1, 'Test 17');
test(maxPathLength([[1,1],[3,3],[2,2],[4,4],[5,5]], 2), 5, 'Test 18');
test(maxPathLength([[5,1],[4,2],[3,3],[2,4],[1,5]], 2), 1, 'Test 19');
test(maxPathLength([[3,1],[2,2],[4,1],[0,0],[5,3]], 1), 3, 'Test 20');
test(maxPathLength([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18]], 12), 17, 'Test 21');
test(maxPathLength([[10,10],[9,9],[8,8],[7,7],[6,6],[5,5],[4,4],[3,3],[2,2],[1,1]], 0), 10, 'Test 22');
test(maxPathLength([[10,1],[20,2],[30,3],[40,4],[50,5],[60,6],[70,7],[80,8],[90,9],[100,10]], 0), 10, 'Test 23');
test(maxPathLength([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1]], 4), 1, 'Test 24');
test(maxPathLength([[3,4],[4,5],[5,6],[1,2],[2,3],[6,7],[7,8],[8,9],[9,10]], 4), 9, 'Test 25');
test(maxPathLength([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]], 7), 10, 'Test 26');
test(maxPathLength([[1,1],[3,5],[5,3],[7,7],[9,9],[11,11],[13,13],[15,15]], 3), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 27');
test(maxPathLength([[100,200],[150,250],[200,300],[250,350],[300,400],[350,450],[400,500]], 2), 7, 'Test 28');
test(maxPathLength([[10,10],[20,20],[30,30],[40,40],[50,50],[60,60],[70,70],[80,80],[90,90]], 8), 9, 'Test 29');
test(maxPathLength([[0,0],[1,2],[2,4],[3,6],[4,8],[5,10],[6,12],[7,14],[8,16]], 3), 9, 'Test 30');
test(maxPathLength([[1,10],[2,20],[3,30],[4,40],[5,50],[6,60],[7,70],[8,80],[9,90]], 7), 9, 'Test 31');
test(maxPathLength([[5,5],[3,3],[1,1],[2,2],[4,4],[6,6],[7,7],[8,8],[9,9]], 2), 9, 'Test 32');
test(maxPathLength([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1]], 2), 1, 'Test 33');
test(maxPathLength([[9,9],[8,8],[7,7],[6,6],[5,5],[4,4],[3,3],[2,2],[1,1]], 4), 9, 'Test 34');
test(maxPathLength([[9,1],[8,2],[7,3],[6,4],[5,5],[4,6],[3,7],[2,8],[1,9]], 8), 1, 'Test 35');
test(maxPathLength([[100,100],[101,101],[99,99],[102,102],[103,103],[98,98],[104,104],[105,105]], 2), 8, 'Test 36');
test(maxPathLength([[3,1],[2,2],[4,1],[0,0],[5,3],[6,4],[7,5],[8,6]], 5), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 37');
test(maxPathLength([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]], 0), 9, 'Test 38');
test(maxPathLength([[1,2],[2,1],[3,4],[4,3],[5,6],[6,5],[7,8],[8,7],[9,10]], 2), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 39');
test(maxPathLength([[1,3],[3,1],[2,4],[4,2],[3,5],[5,3],[4,6],[6,4],[5,7],[7,5],[6,8],[8,6]], 5), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 40');
test(maxPathLength([[1,1],[2,3],[3,5],[4,7],[5,9],[6,11],[7,13],[8,15],[9,17]], 4), 9, 'Test 41');
test(maxPathLength([[9,1],[8,2],[7,3],[6,4],[5,5],[4,6],[3,7],[2,8],[1,9]], 4), 1, 'Test 42');
test(maxPathLength([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11]], 5), 11, 'Test 43');
test(maxPathLength([[10,1],[20,2],[30,3],[40,4],[50,5],[60,6],[70,7],[80,8],[90,9],[100,10]], 9), 10, 'Test 44');
test(maxPathLength([[1,1],[2,3],[3,5],[4,7],[5,9],[6,11],[7,13],[8,15],[9,17]], 5), 9, 'Test 45');
test(maxPathLength([[5,1],[5,2],[5,3],[5,4],[5,5],[1,5],[2,5],[3,5],[4,5],[6,5]], 3), 2, 'Test 46');
test(maxPathLength([[9,9],[8,8],[7,7],[6,6],[5,5],[4,4],[3,3],[2,2],[1,1]], 5), 9, 'Test 47');
test(maxPathLength([[10,10],[12,13],[15,20],[17,25],[19,30],[22,35],[25,40],[27,45],[30,50]], 5), 9, 'Test 48');
test(maxPathLength([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]], 12), 13, 'Test 49');
test(maxPathLength([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[1,3]], 9), 8, 'Test 50');
test(maxPathLength([[5,5],[4,4],[3,3],[2,2],[1,1],[0,0],[6,6],[7,7],[8,8],[9,9]], 4), 10, 'Test 51');
test(maxPathLength([[5,5],[1,2],[3,3],[2,4],[6,6],[7,8]], 2), 5, 'Test 52');
test(maxPathLength([[2,1],[4,3],[6,5],[8,7],[10,9],[12,11],[14,13],[16,15],[18,17]], 4), 9, 'Test 53');
test(maxPathLength([[1,1],[1,2],[2,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]], 4), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 54');
test(maxPathLength([[1,1],[3,2],[5,3],[7,4],[9,5],[11,6],[13,7],[15,8]], 0), 8, 'Test 55');
test(maxPathLength([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]], 4), 1, 'Test 56');
test(maxPathLength([[0,0],[1,1],[2,2],[3,3],[0,1],[1,2],[2,3],[3,4],[0,2],[1,3],[2,4],[3,5]], 5), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 57');
test(maxPathLength([[1,1],[2,2],[4,4],[8,8],[16,16],[32,32],[64,64],[128,128],[256,256],[512,512]], 4), 10, 'Test 58');
test(maxPathLength([[1,1],[2,3],[3,2],[4,5],[5,4],[6,7],[7,6],[8,9],[9,8],[10,11]], 7), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 59');
test(maxPathLength([[1,10],[10,1],[2,9],[9,2],[3,8],[8,3]], 4), 1, 'Test 60');
test(maxPathLength([[5,5],[4,4],[3,3],[2,2],[1,1]], 4), 5, 'Test 61');
test(maxPathLength([[1,10],[2,20],[3,30],[4,40],[5,50],[6,60],[7,70],[8,80],[9,90]], 6), 9, 'Test 62');
test(maxPathLength([[1,2],[2,3],[3,1],[4,5],[5,6],[6,4],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15]], 5), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 63');
test(maxPathLength([[1,1],[3,2],[5,3],[7,4],[9,5],[11,6],[13,7],[15,8],[17,9],[19,10]], 5), 10, 'Test 64');
test(maxPathLength([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1]], 0), 1, 'Test 65');
test(maxPathLength([[1,1],[10,10],[2,2],[9,9],[3,3],[8,8],[4,4],[7,7],[5,5]], 4), 9, 'Test 66');
test(maxPathLength([[1,1],[10,10],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]], 1), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 67');
test(maxPathLength([[1,5],[3,4],[5,3],[7,2],[9,1],[2,3],[4,6],[6,9],[8,8],[10,7]], 5), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 68');
test(maxPathLength([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], 3), 8, 'Test 69');
test(maxPathLength([[1,1],[2,10],[3,9],[4,8],[5,7],[6,6],[7,5],[8,4],[9,3],[10,2],[11,1]], 0), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 70');
test(maxPathLength([[5,3],[2,4],[1,1],[3,6],[7,8],[6,9],[4,10],[8,11]], 3), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 71');
test(maxPathLength([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1],[11,0]], 8), 1, 'Test 72');
test(maxPathLength([[1,1],[10,2],[100,3],[1000,4],[10000,5],[100000,6],[1000000,7]], 3), 7, 'Test 73');
test(maxPathLength([[3,3],[2,2],[1,1],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]], 6), 9, 'Test 74');
test(maxPathLength([[5,5],[5,6],[5,7],[5,8],[5,9],[6,6],[6,7],[6,8],[6,9],[7,7],[7,8],[7,9],[8,8],[8,9],[9,9]], 10), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 75');
test(maxPathLength([[1,1],[1,3],[3,1],[3,3],[2,2],[4,4],[5,5],[6,6]], 4), 6, 'Test 76');
test(maxPathLength([[3,1],[2,2],[4,1],[0,0],[5,3],[8,6],[7,5],[6,4],[9,8],[10,7]], 2), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 77');
test(maxPathLength([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13]], 6), 13, 'Test 78');
test(maxPathLength([[5,5],[4,4],[3,3],[2,2],[1,1]], 2), 5, 'Test 79');
test(maxPathLength([[1,1],[3,4],[2,3],[5,6],[7,8],[6,7]], 2), 6, 'Test 80');
test(maxPathLength([[1,1],[2,1],[1,2],[2,2],[3,3],[4,3],[3,4],[4,4],[5,5],[6,5],[5,6],[6,6]], 6), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 81');
test(maxPathLength([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12]], 5), 12, 'Test 82');
test(maxPathLength([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]], 5), 9, 'Test 83');
test(maxPathLength([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19],[20,20]], 10), 20, 'Test 84');
test(maxPathLength([[1,1],[10,10],[20,20],[30,30],[40,40],[50,50],[60,60],[70,70],[80,80],[90,90]], 9), 10, 'Test 85');
test(maxPathLength([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], 5), 8, 'Test 86');
test(maxPathLength([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3]], 20), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 87');
test(maxPathLength([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1],[11,12],[12,13],[13,14],[14,15],[15,16]], 2), 6, 'Test 88');
test(maxPathLength([[1,5],[2,3],[3,1],[4,6],[5,2],[6,4],[7,0],[8,7],[9,8]], 2), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 89');
test(maxPathLength([[1,1],[2,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]], 2), 7, 'Test 90');
test(maxPathLength([[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10]], 0), 1, 'Test 91');
test(maxPathLength([[1,1],[3,2],[5,3],[7,4],[9,5],[11,6],[13,7],[15,8]], 4), 8, 'Test 92');
test(maxPathLength([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1]], 5), 1, 'Test 93');
test(maxPathLength([[2,1],[4,3],[6,5],[8,7],[10,9],[12,11],[14,13],[16,15],[18,17],[20,19]], 3), 10, 'Test 94');
test(maxPathLength([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15]], 7), 15, 'Test 95');
test(maxPathLength([[1,1],[3,2],[2,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15]], 2), 14, 'Test 96');
test(maxPathLength([[10,5],[15,10],[20,15],[25,20],[30,25],[35,30]], 5), 6, 'Test 97');
test(maxPathLength([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1],[11,0],[12,11],[13,10]], 6), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 98');
test(maxPathLength([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17]], 8), 16, 'Test 99');
test(maxPathLength([[3,1],[4,2],[5,3],[6,4],[7,5],[8,6],[9,7],[1,8],[2,9]], 0), 7, 'Test 100');
test(maxPathLength([[5,5],[4,4],[3,3],[2,2],[1,1],[6,6],[7,7],[8,8],[9,9],[10,10]], 4), 10, 'Test 101');
test(maxPathLength([[1,5],[3,6],[2,4],[4,7],[5,8],[6,9],[7,10]], 2), 6, 'Test 102');
test(maxPathLength([[1,1],[1,2],[2,1],[2,2],[3,3],[4,4],[5,5]], 3), 5, 'Test 103');
test(maxPathLength([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 9), 1, 'Test 104');
test(maxPathLength([[1,1],[2,3],[4,5],[6,7],[8,9],[10,11]], 2), 6, 'Test 105');
test(maxPathLength([[1,2],[3,4],[5,6],[7,8],[2,3],[4,5],[6,7],[8,9],[1,3],[3,5],[5,7],[7,9]], 2), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 106');
test(maxPathLength([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 9), 11, 'Test 107');
test(maxPathLength([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]], 4), 9, 'Test 108');
test(maxPathLength([[9,1],[8,2],[7,3],[6,4],[5,5],[4,6],[3,7],[2,8],[1,9],[10,10]], 3), 2, 'Test 109');
test(maxPathLength([[2,3],[3,5],[5,8],[6,7],[8,10],[9,12],[11,13]], 1), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 110');
test(maxPathLength([[3,1],[4,3],[5,5],[1,2],[2,4],[6,7],[8,9]], 3), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 111');
test(maxPathLength([[3,1],[2,2],[4,1],[0,0],[5,3],[6,4],[7,5],[8,6],[9,7],[10,8]], 1), 8, 'Test 112');
test(maxPathLength([[1,10],[2,1],[3,2],[4,3],[5,4],[6,5],[7,6],[8,7],[9,8]], 4), 8, 'Test 113');
test(maxPathLength([[0,0],[1,2],[2,4],[3,6],[4,8],[5,10],[6,12]], 3), 7, 'Test 114');
test(maxPathLength([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18]], 7), 9, 'Test 115');
test(maxPathLength([[1,1],[3,3],[5,5],[7,7],[9,9],[2,2],[4,4],[6,6],[8,8],[10,10],[12,12],[11,11]], 6), 12, 'Test 116');
test(maxPathLength([[1,1],[3,3],[2,2],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]], 4), 9, 'Test 117');
test(maxPathLength([[1,1],[2,3],[3,2],[4,5],[5,4],[6,7],[7,6],[8,9],[9,8],[10,11],[11,10],[12,13],[13,12],[14,15],[15,14]], 3), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 118');
test(maxPathLength([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14]], 3), 7, 'Test 119');
test(maxPathLength([[1,1],[1,2],[2,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15]], 10), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 120');
test(maxPathLength([[1,1],[3,2],[5,3],[7,4],[9,5],[11,6],[13,7],[15,8],[17,9]], 4), 9, 'Test 121');
test(maxPathLength([[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13]], 5), 9, 'Test 122');
test(maxPathLength([[5,5],[1,1],[9,9],[2,2],[8,8],[3,3],[7,7],[4,4],[6,6]], 0), 9, 'Test 123');
test(maxPathLength([[1,1],[10,2],[2,3],[11,4],[3,5],[12,6],[4,7],[13,8],[5,9],[14,10],[6,11],[15,12],[7,13],[16,14],[8,15],[17,16],[9,17],[18,18],[10,19],[19,20]], 15), Error: 'builtin_function_or_method' object has no attribute 'bisect_left', 'Test 124');
test(maxPathLength([[10,1],[9,2],[8,3],[7,4],[6,5],[5,6],[4,7],[3,8],[2,9],[1,10]], 5), 1, 'Test 125');
test(maxPathLength([[1,1],[2,3],[4,4],[5,5],[6,7],[8,9],[10,11],[12,13]], 5), 8, 'Test 126');
test(maxPathLength([[10,20],[20,30],[30,40],[40,50],[50,60],[60,70],[70,80],[80,90],[90,100]], 4), 9, 'Test 127');

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
