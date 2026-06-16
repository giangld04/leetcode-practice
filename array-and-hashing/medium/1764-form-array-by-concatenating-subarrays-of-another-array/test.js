// Test: 1764. Form Array By Concatenating Subarrays Of Another Array
// 148 test cases from LeetCodeDataset
// Run: node test.js

const { canChoose } = require("./solution");

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

console.log("\n1764. Form Array By Concatenating Subarrays Of Another Array\n");

test(canChoose([[1,2,3]], [1,2,3,1,2,3]), true, 'Test 1');
test(canChoose([[1,2],[3,4]], [1,2,4,3]), false, 'Test 2');
test(canChoose([[5,5,5],[5]], [5,5,5,5]), true, 'Test 3');
test(canChoose([[1,1,1],[1,1]], [1,1,1,1]), false, 'Test 4');
test(canChoose([[1,2],[3,4]], [1,2,3,4]), true, 'Test 5');
test(canChoose([[1,2],[2,1]], [1,2,2,1]), true, 'Test 6');
test(canChoose([[-1,-2,-3],[-3,-2,-1]], [-1,-2,-3,-3,-2,-1]), true, 'Test 7');
test(canChoose([[1,-1,-1],[3,-2,0]], [1,-1,0,1,-1,-1,3,-2,0]), true, 'Test 8');
test(canChoose([[1,2,3],[1,2,3]], [1,2,3,1,2,3]), true, 'Test 9');
test(canChoose([[1]], [1]), true, 'Test 10');
test(canChoose([[1,2],[3,4]], [1,2,5,3,4]), true, 'Test 11');
test(canChoose([[1],[2],[3]], [3,2,1]), false, 'Test 12');
test(canChoose([[1,1,1,1],[1,1]], [1,1,1,1]), false, 'Test 13');
test(canChoose([[1],[2],[3]], [1,2,3]), true, 'Test 14');
test(canChoose([[1,2,3],[3,4]], [7,7,1,2,3,4,7,7]), false, 'Test 15');
test(canChoose([[5,5]], [5,5,5,5]), true, 'Test 16');
test(canChoose([[10,-2],[1,2,3,4]], [1,2,3,4,10,-2]), false, 'Test 17');
test(canChoose([[1]], [2]), false, 'Test 18');
test(canChoose([[1,2],[2,3]], [1,2,2,3]), true, 'Test 19');
test(canChoose([[1,2],[3,4]], [1,2,3,4,5,6]), true, 'Test 20');
test(canChoose([[1,2],[2,3],[3,4]], [1,2,3,4]), false, 'Test 21');
test(canChoose([[1,2],[3,4],[5,6]], [1,2,3,4,5,6]), true, 'Test 22');
test(canChoose([[100,200],[200,300],[300,400]], [100,200,200,300,300,400]), true, 'Test 23');
test(canChoose([[100,200],[300,400],[500,600]], [100,200,300,400,500,600,100,200]), true, 'Test 24');
test(canChoose([[0,0,0,0],[0]], [0,0,0,0,0,0,0,0]), true, 'Test 25');
test(canChoose([[10,20,30],[30,40,50],[50,60,70]], [10,20,30,40,50,60,70]), false, 'Test 26');
test(canChoose([[1,2,3],[4,5,6],[7,8,9],[1,2,3]], [1,2,3,4,5,6,7,8,9,1,2,3]), true, 'Test 27');
test(canChoose([[1,2,3],[4,5,6],[7,8,9]], [1,2,3,1,2,3,4,5,6,4,5,6,7,8,9,7,8,9]), true, 'Test 28');
test(canChoose([[9,8,7],[8,7,6],[7,6,5]], [9,8,7,8,7,6,7,6,5]), true, 'Test 29');
test(canChoose([[1,1,1],[2,2,2],[3,3,3]], [1,1,1,2,2,2,3,3,3,1,1,1,2,2,2,3,3,3]), true, 'Test 30');
test(canChoose([[1,2],[2,3],[3,4],[4,5],[5,6]], [1,2,3,4,5,6,7]), false, 'Test 31');
test(canChoose([[1,1,1],[1,1,1]], [1,1,1,1,1,1,1,1]), true, 'Test 32');
test(canChoose([[-1,-2,-3],[-3,-4,-5],[-5,-6,-7]], [-1,-2,-3,-3,-4,-5,-5,-6,-7]), true, 'Test 33');
test(canChoose([[1, 1, 1], [1, 1], [1]], [1, 1, 1, 1, 1]), false, 'Test 34');
test(canChoose([[0,1],[1,2],[2,3],[3,4]], [0,1,1,2,2,3,3,4]), true, 'Test 35');
test(canChoose([[-1,-2,-3],[-4,-5],[-6,-7,-8,-9]], [-1,-2,-3,0,-4,-5,1,-6,-7,-8,-9]), true, 'Test 36');
test(canChoose([[1,2,3],[3,4,5]], [1,2,3,99,3,4,5]), true, 'Test 37');
test(canChoose([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]], [1,2,3,4,5,6,7,8,9,10]), true, 'Test 38');
test(canChoose([[1,2,3],[4,5,6],[7,8,9]], [9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9]), true, 'Test 39');
test(canChoose([[1,2],[2,3],[3,4],[4,5]], [1,2,2,3,3,4,4,5,5]), true, 'Test 40');
test(canChoose([[1,2,3],[1,2,3],[1,2,3]], [1,2,3,4,5,1,2,3,6,7,8,1,2,3]), true, 'Test 41');
test(canChoose([[-1,-2,-3],[-3,-2,-1],[0,0,0]], [-1,-2,-3,0,0,0,-3,-2,-1]), false, 'Test 42');
test(canChoose([[1,2,3],[1,2,3,4],[4,5]], [1,2,3,1,2,3,4,4,5]), true, 'Test 43');
test(canChoose([[1,2,3,4,5],[2,3,4],[3,4,5,6]], [1,2,3,4,5,6,7,8,9]), false, 'Test 44');
test(canChoose([[1,2],[2,3],[3,4],[4,5]], [1,2,2,3,3,4,4,5]), true, 'Test 45');
test(canChoose([[-1,-2,-3],[-4,-5,-6]], [-1,-2,-3,-4,-5,-6,-1,-2,-3,-4,-5,-6]), true, 'Test 46');
test(canChoose([[1,2,3],[3,2,1],[2,1,3]], [1,2,3,3,2,1,2,1,3]), true, 'Test 47');
test(canChoose([[1,2,3],[3,4,5],[5,6,7],[7,8,9]], [1,2,3,3,4,5,5,6,7,7,8,9]), true, 'Test 48');
test(canChoose([[10,20,30],[40,50],[60,70,80]], [5,10,20,30,15,40,50,25,60,70,80]), true, 'Test 49');
test(canChoose([[1,2],[3,4],[5,6],[7,8],[9,10]], [1,2,3,4,5,6,7,8,9,10]), true, 'Test 50');
test(canChoose([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), true, 'Test 51');
test(canChoose([[1,1,1],[2,2,2],[3,3,3]], [1,1,1,2,2,2,3,3,3]), true, 'Test 52');
test(canChoose([[1,2],[2,3],[3,4],[4,5]], [1,2,2,3,3,4,99,4,5]), true, 'Test 53');
test(canChoose([[1,1,1,1],[2,2,2,2],[3,3,3,3]], [1,1,1,1,2,2,2,2,3,3,3,3]), true, 'Test 54');
test(canChoose([[1, 2, 3], [3, 4, 5], [5, 6, 7]], [1, 2, 3, 3, 4, 5, 5, 6, 7]), true, 'Test 55');
test(canChoose([[9,8,7],[6,5,4],[3,2,1]], [9,8,7,6,5,4,3,2,1]), true, 'Test 56');
test(canChoose([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]], [1,2,3,4,5,6,7,8,9,10]), false, 'Test 57');
test(canChoose([[1,2,3],[2,3,4],[3,4,5]], [1,2,3,2,3,4,3,4,5]), true, 'Test 58');
test(canChoose([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]], [1,2,3,4,5,6,7,8,9,10,11]), true, 'Test 59');
test(canChoose([[1],[2],[3],[4],[5]], [1,0,2,0,3,0,4,0,5]), true, 'Test 60');
test(canChoose([[1,2,3],[1,2],[1]], [1,2,3,1,2,1]), true, 'Test 61');
test(canChoose([[1,2,3,4,5],[5,4,3,2,1]], [1,2,3,4,5,5,4,3,2,1]), true, 'Test 62');
test(canChoose([[1,2],[2,3],[3,4]], [1,2,3,4,5,3,4]), false, 'Test 63');
test(canChoose([[1,1,1],[2,2,2],[3,3,3],[1,1,1]], [1,1,1,2,2,2,3,3,3,1,1,1]), true, 'Test 64');
test(canChoose([[1,1],[2,2],[1,1],[2,2]], [1,1,2,2,1,1,2,2]), true, 'Test 65');
test(canChoose([[1,2,3],[1,2,3],[1,2,3]], [1,2,3,1,2,3,1,2,3]), true, 'Test 66');
test(canChoose([[-10,-20,-30],[-40,-50,-60],[-70,-80,-90]], [-10,-20,-30,-40,-50,-60,-70,-80,-90,-100]), true, 'Test 67');
test(canChoose([[1,2,3,4],[5,6,7],[8,9]], [1,2,3,4,10,11,5,6,7,12,8,9]), true, 'Test 68');
test(canChoose([[1, 2], [2, 3], [3, 4], [4, 5]], [1, 2, 3, 4, 5, 2, 3, 4, 5]), false, 'Test 69');
test(canChoose([[1,2,3,4,5],[5,6,7],[8,9]], [1,2,3,4,5,5,6,7,8,9]), true, 'Test 70');
test(canChoose([[-1,-2,-3],[-3,-2,-1],[1,2,3]], [-1,-2,-3,-3,-2,-1,1,2,3]), true, 'Test 71');
test(canChoose([[1,2,3,4,5],[5,6,7,8,9],[9,10,11,12,13]], [1,2,3,4,5,5,6,7,8,9,9,10,11,12,13]), true, 'Test 72');
test(canChoose([[1,2],[2,3],[3,4],[4,5],[5,6]], [1,2,2,3,3,4,4,5,5,6]), true, 'Test 73');
test(canChoose([[10,20,30],[40,50,60],[70,80,90]], [10,20,30,40,50,60,70,80,90]), true, 'Test 74');
test(canChoose([[1,2,3],[3,4,5]], [1,2,3,3,4,5]), true, 'Test 75');
test(canChoose([[1,2],[2,3],[3,4]], [1,2,3,4,5]), false, 'Test 76');
test(canChoose([[-1,-2,-3],[-4,-5],[-6,-7,-8]], [-1,-2,-3,0,-4,-5,0,-6,-7,-8]), true, 'Test 77');
test(canChoose([[1, 2, 3], [3, 4, 5], [5, 6, 7], [7, 8, 9]], [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9]), true, 'Test 78');
test(canChoose([[10,20,30],[20,30,40],[30,40,50]], [10,20,30,20,30,40,30,40,50]), true, 'Test 79');
test(canChoose([[1,2],[3,4],[5,6],[7,8]], [1,2,3,4,5,6,7,8,9,10,11,12]), true, 'Test 80');
test(canChoose([[1,1,1],[1,1],[1]], [1,1,1,1,1,1]), true, 'Test 81');
test(canChoose([[100,200],[200,300],[300,400],[400,500]], [100,200,200,300,300,400,400,500]), true, 'Test 82');
test(canChoose([[1,2,3],[4,5,6],[1,2,3],[4,5,6]], [1,2,3,4,5,6,1,2,3,4,5,6]), true, 'Test 83');
test(canChoose([[-1,-2,-3],[-2,-3,-4],[-3,-4,-5]], [-1,-2,-3,-2,-3,-4,-3,-4,-5]), true, 'Test 84');
test(canChoose([[1, 2], [2, 3], [3, 4], [4, 5]], [1, 2, 3, 4, 5]), false, 'Test 85');
test(canChoose([[1,2,3],[4,5,6],[7,8,9]], [1,2,3,10,4,5,6,11,7,8,9]), true, 'Test 86');
test(canChoose([[1,2,3],[3,4,5],[5,6,7]], [1,2,3,4,5,6,7]), false, 'Test 87');
test(canChoose([[100,200],[300,400,500],[600]], [50,100,200,150,300,400,500,200,600]), true, 'Test 88');
test(canChoose([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 1, 2, 3, 4, 5, 6, 7, 8, 9]), true, 'Test 89');
test(canChoose([[1,2],[2,3],[3,4]], [1,2,2,3,3,4,4]), true, 'Test 90');
test(canChoose([[1,2],[3,4],[1,2]], [1,2,3,4,1,2]), true, 'Test 91');
test(canChoose([[1,1,1,1],[1,1],[1]], [1,1,1,1,1,1,1]), true, 'Test 92');
test(canChoose([[1,2,3],[1,2,3],[1,2,3]], [1,2,3,1,2,3,1,2,3,1,2,3]), true, 'Test 93');
test(canChoose([[1,2,3,4,5,6,7,8,9,10]], [1,2,3,4,5,6,7,8,9,10]), true, 'Test 94');
test(canChoose([[1,2,3],[1,2],[2,3]], [1,2,3,1,2,2,3]), true, 'Test 95');
test(canChoose([[9,8,7],[6,5,4],[3,2,1]], [9,8,7,0,6,5,4,0,3,2,1]), true, 'Test 96');
test(canChoose([[1,2,3],[3,4,5],[5,6,7]], [1,2,3,3,4,5,5,6,7]), true, 'Test 97');
test(canChoose([[1,2,3],[4,5,6],[7,8,9]], [1,2,3,9,8,7,4,5,6,1,2,3,4,5,6,7,8,9]), true, 'Test 98');
test(canChoose([[1,1,1],[1,1],[1]], [1,1,1,1,1,1,1,1,1]), true, 'Test 99');
test(canChoose([[10,20,30],[40,50,60],[70,80,90]], [10,20,30,40,50,60,70,80,90,100]), true, 'Test 100');
test(canChoose([[10000000],[9999999],[8888888],[7777777]], [10000000,9999999,8888888,7777777]), true, 'Test 101');
test(canChoose([[10, 20, 30], [40, 50, 60], [70, 80, 90]], [10, 20, 30, 40, 50, 60, 70, 80, 90]), true, 'Test 102');
test(canChoose([[-1,-2,-3],[-4,-5,-6],[-7,-8,-9]], [-1,-2,-3,-4,-5,-6,-7,-8,-9]), true, 'Test 103');
test(canChoose([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], [1,2,3,4,5,6,7,8,9,10,11,12]), true, 'Test 104');
test(canChoose([[5,5,5,5],[5,5,5],[5,5],[5]], [5,5,5,5,5,5,5,5,5,5]), true, 'Test 105');
test(canChoose([[1],[2],[3],[4],[5]], [1,2,3,4,5]), true, 'Test 106');
test(canChoose([[-10,-20,-30],[-40,-50],[-60,-70,-80]], [-10,-20,-30,-40,-50,-60,-70,-80]), true, 'Test 107');
test(canChoose([[1], [2], [3], [4], [5]], [1, 2, 3, 4, 5]), true, 'Test 108');
test(canChoose([[1, 1, 1], [1, 1, 1], [1, 1, 1]], [1, 1, 1, 1, 1, 1, 1]), false, 'Test 109');
test(canChoose([[1,2],[3,4,5,6],[7,8]], [1,2,3,4,5,6,7,8]), true, 'Test 110');
test(canChoose([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 111');
test(canChoose([[10,20,30,40],[50,60,70,80]], [10,20,30,40,50,60,70,80,90]), true, 'Test 112');
test(canChoose([[1,2],[2,1],[1,2],[2,1]], [1,2,2,1,1,2,2,1]), true, 'Test 113');
test(canChoose([[-10,-20,-30],[-30,-20,-10]], [-10,-20,-30,-30,-20,-10]), true, 'Test 114');
test(canChoose([[1,2,3,4,5,6,7,8,9],[10,11,12,13,14,15,16,17,18]], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]), true, 'Test 115');
test(canChoose([[-1,0,1],[-2,0,2]], [-1,0,1,-2,0,2,-1,0,1]), true, 'Test 116');
test(canChoose([[1,2,3],[4,5,6],[7,8,9]], [1,2,3,4,5,6,7,8,9]), true, 'Test 117');
test(canChoose([[1,2,3],[3,4,5],[5,6,7]], [99,1,2,3,99,3,4,5,99,5,6,7]), true, 'Test 118');
test(canChoose([[1,2,3],[4,5,6],[7,8,9]], [1,2,3,1,2,3,4,5,6,7,8,9]), true, 'Test 119');
test(canChoose([[1,2,3],[4,5,6],[7,8,9]], [1,2,3,4,5,6,7,8,9,10]), true, 'Test 120');
test(canChoose([[1, 2, 3], [3, 4, 5]], [1, 2, 3, 3, 4, 5]), true, 'Test 121');
test(canChoose([[1, 2, 3], [1, 2, 3], [1, 2, 3]], [1, 2, 3, 1, 2, 3, 1, 2, 3]), true, 'Test 122');
test(canChoose([[1,2,3],[3,2,1],[1,2,3]], [1,2,3,3,2,1,1,2,3]), true, 'Test 123');
test(canChoose([[7,8,9],[1,2,3],[4,5,6]], [7,8,9,1,2,3,4,5,6]), true, 'Test 124');
test(canChoose([[1, 2, 3], [4, 5, 6]], [1, 2, 3, 0, 0, 4, 5, 6]), true, 'Test 125');
test(canChoose([[-1, -2, -3], [0, 1, 2], [-3, -2, -1]], [-1, -2, -3, 0, 1, 2, -3, -2, -1]), true, 'Test 126');
test(canChoose([[1, 2, 3], [2, 3, 4]], [1, 2, 3, 4]), false, 'Test 127');
test(canChoose([[9,8,7,6,5],[4,3,2,1],[0,-1,-2,-3,-4]], [9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4]), true, 'Test 128');
test(canChoose([[100,200,300],[400,500],[600]], [100,200,300,400,500,600]), true, 'Test 129');
test(canChoose([[1,2,3],[4,5,6],[7,8,9]], [1,2,3,0,4,5,6,0,7,8,9]), true, 'Test 130');
test(canChoose([[1,2,3],[4,5,6]], [1,2,3,99,4,5,6]), true, 'Test 131');
test(canChoose([[1,1,1,1],[1,1,1],[1,1],[1]], [1,1,1,1,1,1,1,1]), false, 'Test 132');
test(canChoose([[1,2,3],[3,2,1]], [1,2,3,3,2,1,1,2,3,3,2,1]), true, 'Test 133');
test(canChoose([[1,2,3,4],[5,6,7,8],[9,10,11,12]], [0,1,2,3,4,0,5,6,7,8,0,9,10,11,12]), true, 'Test 134');
test(canChoose([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), true, 'Test 135');
test(canChoose([[1,2,3,4,5],[6,7,8,9,10]], [1,2,3,4,5,11,12,6,7,8,9,10]), true, 'Test 136');
test(canChoose([[1,-1],[1,-1]], [1,-1,1,-1,1,-1]), true, 'Test 137');
test(canChoose([[1,2,3,4,5,6,7,8,9],[2,3,4,5,6,7,8,9,10],[3,4,5,6,7,8,9,10,11]], [1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,10,3,4,5,6,7,8,9,10,11]), true, 'Test 138');
test(canChoose([[1,2],[2,3],[3,4],[4,5]], [1,2,3,4,5]), false, 'Test 139');
test(canChoose([[1, 2, 3], [4, 5, 6]], [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]), true, 'Test 140');
test(canChoose([[1],[2],[3],[4],[5],[6]], [1,2,3,4,5,6]), true, 'Test 141');
test(canChoose([[1,2,3],[4,5,6],[7,8,9]], [0,1,2,3,0,4,5,6,0,7,8,9]), true, 'Test 142');
test(canChoose([[100,200,300],[400,500],[600,700,800,900]], [100,200,300,400,500,600,700,800,900]), true, 'Test 143');
test(canChoose([[1,1],[1,1],[1,1]], [1,1,1,1,1,1]), true, 'Test 144');
test(canChoose([[1,2,3],[4,5,6],[7,8,9]], [7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]), true, 'Test 145');
test(canChoose([[1,2,3,4,5],[6,7,8,9]], [1,2,3,4,5,6,7,8,9,10]), true, 'Test 146');
test(canChoose([[1,2,3],[3,4,5],[5,6,7],[7,8,9]], [1,2,3,4,5,6,7,8,9]), false, 'Test 147');
test(canChoose([[1,2,3,4],[5,6,7,8],[9,10,11,12]], [1,2,3,4,5,6,7,8,9,10,11,12]), true, 'Test 148');

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
