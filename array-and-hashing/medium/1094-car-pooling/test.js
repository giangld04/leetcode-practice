// Test: 1094. Car Pooling
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { carPooling } = require("./solution");

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

console.log("\n1094. Car Pooling\n");

test(carPooling([[3,2,8],[4,4,6],[10,8,10]], 12), true, 'Test 1');
test(carPooling([[3,2,7],[2,7,9],[4,1,3]], 6), false, 'Test 2');
test(carPooling([[2,1,5],[3,5,7]], 5), true, 'Test 3');
test(carPooling([[2,1,6],[1,3,5],[4,4,8]], 9), true, 'Test 4');
test(carPooling([[3,2,7],[3,7,9],[8,3,9]], 11), true, 'Test 5');
test(carPooling([[2,4,5],[3,1,3],[3,3,7]], 5), true, 'Test 6');
test(carPooling([[2,1,5],[3,3,7]], 5), true, 'Test 7');
test(carPooling([[1,3,6],[2,3,7],[1,8,9]], 11), true, 'Test 8');
test(carPooling([[2,1,5],[3,5,7],[2,5,8]], 6), true, 'Test 9');
test(carPooling([[2,1,5],[3,3,7]], 4), false, 'Test 10');
test(carPooling([[5,2,4],[3,1,3],[8,6,9],[2,4,8]], 15), true, 'Test 11');
test(carPooling([[100,0,1],[1,1,2],[1,2,3],[1,3,4],[1,4,5],[1,5,6],[1,6,7],[1,7,8],[1,8,9]], 105), true, 'Test 12');
test(carPooling([[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,0,1]], 8), false, 'Test 13');
test(carPooling([[1,1,3],[1,1,4],[1,1,5],[1,1,6],[1,1,7],[1,1,8],[1,1,9],[1,1,10]], 7), false, 'Test 14');
test(carPooling([[100,0,100],[50,50,150],[25,75,200]], 150), false, 'Test 15');
test(carPooling([[5,0,100],[3,10,50],[4,50,90],[2,60,80]], 20), true, 'Test 16');
test(carPooling([[10,0,20],[5,5,15],[3,10,20],[2,15,20]], 20), true, 'Test 17');
test(carPooling([[5,1,3],[10,2,6],[1,2,10],[2,5,7]], 17), true, 'Test 18');
test(carPooling([[1,0,1],[1,1,2],[1,2,3],[1,3,4],[1,4,5],[1,5,6]], 2), true, 'Test 19');
test(carPooling([[1,0,20],[2,0,15],[3,0,10],[4,0,5]], 20), true, 'Test 20');
test(carPooling([[1,1,10],[1,10,20],[1,20,30],[1,30,40],[1,40,50]], 10), true, 'Test 21');
test(carPooling([[3,1,10],[2,2,8],[1,5,7],[4,6,9]], 10), true, 'Test 22');
test(carPooling([[30,0,2],[50,1,3],[40,2,4],[20,3,5],[10,4,6]], 80), false, 'Test 23');
test(carPooling([[10,0,5],[10,5,10],[10,10,15]], 25), true, 'Test 24');
test(carPooling([[5,1,6],[5,3,8],[5,5,10],[5,7,12]], 15), true, 'Test 25');
test(carPooling([[1,0,500],[2,100,400],[3,200,300],[4,300,400],[5,400,500]], 15), true, 'Test 26');
test(carPooling([[2,1,4],[3,2,5],[4,3,6],[1,4,7],[1,5,8],[1,6,9]], 10), true, 'Test 27');
test(carPooling([[1,1,5],[2,1,6],[1,2,7],[1,3,8],[1,4,9],[1,5,10]], 5), false, 'Test 28');
test(carPooling([[2,2,3],[2,3,5],[2,5,7],[2,7,9]], 3), true, 'Test 29');
test(carPooling([[10,0,10],[10,10,20],[10,20,30],[10,30,40],[10,40,50]], 40), true, 'Test 30');
test(carPooling([[3,1,2],[4,2,3],[5,3,4],[4,4,5],[3,5,6],[2,6,7]], 15), true, 'Test 31');
test(carPooling([[1,1,2],[2,2,3],[3,3,4],[4,4,5],[5,5,6],[6,6,7],[7,7,8],[8,8,9]], 7), false, 'Test 32');
test(carPooling([[10,0,1],[10,1,2],[10,2,3],[10,3,4],[10,4,5],[10,5,6]], 10), true, 'Test 33');
test(carPooling([[1,1,3],[2,2,5],[3,3,7],[4,4,8],[5,5,9]], 10), false, 'Test 34');
test(carPooling([[1,1,2],[2,2,3],[3,3,4],[4,4,5],[5,5,6],[6,6,7],[7,7,8],[8,8,9]], 28), true, 'Test 35');
test(carPooling([[100,0,1000],[100,100,900],[100,200,800],[100,300,700],[100,400,600]], 300), false, 'Test 36');
test(carPooling([[1,1,2],[2,2,3],[3,3,4],[4,4,5],[5,5,6],[6,6,7]], 6), true, 'Test 37');
test(carPooling([[5,1,3],[5,3,5],[5,5,7],[5,7,9],[5,9,11]], 20), true, 'Test 38');
test(carPooling([[10,1,2],[10,2,3],[10,3,4],[10,4,5],[10,5,6],[10,6,7]], 25), true, 'Test 39');
test(carPooling([[10,0,10],[5,0,5],[1,6,10],[2,5,8],[3,7,12]], 20), true, 'Test 40');
test(carPooling([[20,0,30],[10,10,20],[5,20,30]], 25), false, 'Test 41');
test(carPooling([[30,0,10],[20,10,20],[10,20,30],[5,30,40],[5,40,50]], 55), true, 'Test 42');
test(carPooling([[1,1,3],[2,3,6],[3,6,9],[4,9,12],[5,12,15],[6,15,18],[7,18,21],[8,21,24]], 20), true, 'Test 43');
test(carPooling([[20,0,1000],[20,1000,2000],[20,2000,3000],[20,3000,4000],[20,4000,5000]], 60), true, 'Test 44');
test(carPooling([[5,1,3],[2,2,5],[4,4,8],[3,5,9]], 12), true, 'Test 45');
test(carPooling([[1,0,2],[1,2,3],[1,3,4],[1,4,5],[1,5,6],[1,6,7]], 3), true, 'Test 46');
test(carPooling([[1,0,100],[2,50,100],[3,75,100]], 6), true, 'Test 47');
test(carPooling([[10,0,3],[5,3,6],[10,6,9],[5,9,12]], 20), true, 'Test 48');
test(carPooling([[3,0,1],[3,1,2],[3,2,3],[3,3,4],[3,4,5],[3,5,6],[3,6,7],[3,7,8],[3,8,9]], 9), true, 'Test 49');
test(carPooling([[5,0,3],[2,3,5],[7,5,10],[1,10,15]], 12), true, 'Test 50');
test(carPooling([[3,1,4],[5,1,5],[2,3,7],[2,4,8]], 14), true, 'Test 51');
test(carPooling([[10,0,1],[10,0,2],[10,0,3],[10,0,4],[10,0,5]], 50), true, 'Test 52');
test(carPooling([[3,1,3],[2,2,4],[1,3,5],[4,4,6],[2,5,7],[1,6,8]], 10), true, 'Test 53');
test(carPooling([[4,1,10],[2,2,5],[3,3,6],[1,5,12]], 15), true, 'Test 54');
test(carPooling([[5,0,5],[4,5,10],[3,10,15],[2,15,20],[1,20,25]], 15), true, 'Test 55');
test(carPooling([[10,0,10],[10,10,20],[10,20,30],[10,30,40],[10,40,50]], 20), true, 'Test 56');
test(carPooling([[2,1,4],[3,2,5],[2,3,6],[1,4,7],[4,5,8],[3,6,9]], 8), true, 'Test 57');
test(carPooling([[3,0,1],[3,1,2],[3,2,3],[3,3,4],[3,4,5],[3,5,6]], 10), true, 'Test 58');
test(carPooling([[10,0,10],[20,5,15],[30,10,20],[40,15,25],[50,20,30]], 100), true, 'Test 59');
test(carPooling([[10,1,10],[5,2,5],[3,5,7],[2,7,8]], 20), true, 'Test 60');
test(carPooling([[3,0,1],[3,1,2],[3,2,3],[3,3,4],[3,4,5]], 12), true, 'Test 61');
test(carPooling([[2,1,5],[3,3,7],[1,1,3],[4,5,9]], 7), true, 'Test 62');
test(carPooling([[1,1,1000],[2,2,999],[3,3,998],[4,4,997],[5,5,996]], 15), true, 'Test 63');
test(carPooling([[5,1,5],[3,5,9],[2,9,12],[1,12,15]], 15), true, 'Test 64');
test(carPooling([[10,0,10],[20,10,20],[10,15,25],[20,20,30],[30,25,35]], 40), false, 'Test 65');
test(carPooling([[2,1,3],[3,2,4],[4,3,5],[5,4,6],[6,5,7]], 15), true, 'Test 66');
test(carPooling([[2,1,2],[2,2,3],[2,3,4],[2,4,5],[2,5,6]], 4), true, 'Test 67');
test(carPooling([[3,2,7],[3,2,7],[3,2,7]], 9), true, 'Test 68');
test(carPooling([[50,0,500],[50,100,600],[50,200,700],[50,300,800],[50,400,900]], 150), false, 'Test 69');
test(carPooling([[100,0,1],[100,1,2],[100,2,3],[100,3,4],[100,4,5]], 100), true, 'Test 70');
test(carPooling([[50,10,20],[30,20,30],[20,30,40],[10,40,50],[5,50,60]], 100), true, 'Test 71');
test(carPooling([[50,0,500],[50,500,1000]], 100), true, 'Test 72');
test(carPooling([[3,2,5],[3,2,7],[3,3,6],[3,4,8]], 9), false, 'Test 73');
test(carPooling([[5,1,3],[2,3,8],[3,5,9],[1,6,10]], 15), true, 'Test 74');
test(carPooling([[5,0,3],[4,2,5],[3,4,8],[2,6,10]], 14), true, 'Test 75');
test(carPooling([[2,0,2],[2,2,4],[2,4,6],[2,6,8],[2,8,10],[2,10,12]], 12), true, 'Test 76');
test(carPooling([[1,1,2],[1,1,2],[1,1,2],[1,1,2],[1,1,2]], 4), false, 'Test 77');
test(carPooling([[1,0,1],[1,1,2],[1,2,3],[1,3,4],[1,4,5],[1,5,6],[1,6,7],[1,7,8],[1,8,9],[1,9,10]], 10), true, 'Test 78');
test(carPooling([[1,0,3],[2,1,5],[3,2,7],[4,3,9],[5,4,10]], 15), true, 'Test 79');
test(carPooling([[10,0,100],[10,20,120],[10,40,140],[10,60,160],[10,80,180]], 30), false, 'Test 80');
test(carPooling([[10,0,5],[3,5,10],[4,10,15],[2,15,20]], 12), true, 'Test 81');
test(carPooling([[20,0,1000],[10,100,900],[5,200,800],[1,300,700]], 50), true, 'Test 82');
test(carPooling([[5,1,3],[2,2,5],[4,3,8],[3,5,7]], 10), true, 'Test 83');
test(carPooling([[1,0,2],[1,2,4],[1,4,6],[1,6,8],[1,8,10],[1,10,12]], 5), true, 'Test 84');
test(carPooling([[5,1,5],[3,1,4],[2,3,6],[1,4,7]], 10), true, 'Test 85');
test(carPooling([[10,0,5],[2,5,10],[1,10,15],[10,15,20]], 12), true, 'Test 86');
test(carPooling([[3,1,5],[2,2,6],[4,3,8],[1,4,9],[5,5,10]], 10), false, 'Test 87');
test(carPooling([[6,0,20],[2,10,30],[4,20,40],[1,30,50],[3,40,60]], 15), true, 'Test 88');
test(carPooling([[10,0,1],[9,1,2],[8,2,3],[7,3,4],[6,4,5],[5,5,6]], 10), true, 'Test 89');
test(carPooling([[10,0,1],[10,1,2],[10,2,3],[10,3,4],[10,4,5]], 10), true, 'Test 90');
test(carPooling([[1,1,2],[2,2,3],[3,3,4],[4,4,5],[5,5,6],[6,6,7],[7,7,8],[8,8,9],[9,9,10]], 45), true, 'Test 91');
test(carPooling([[3,0,1],[3,1,2],[3,2,3],[3,3,4],[3,4,5],[3,5,6],[3,6,7]], 9), true, 'Test 92');
test(carPooling([[1,1,100],[2,2,99],[3,3,98],[4,4,97]], 10), true, 'Test 93');
test(carPooling([[1,0,1],[1,1,2],[1,2,3],[1,3,4],[1,4,5],[1,5,6],[1,6,7]], 1), true, 'Test 94');
test(carPooling([[3,1,3],[3,2,5],[3,3,7],[3,4,8],[3,5,9],[3,6,10]], 9), false, 'Test 95');
test(carPooling([[5,1,3],[5,3,5],[5,5,7],[5,7,9]], 10), true, 'Test 96');
test(carPooling([[5,1,5],[2,3,8],[4,5,9],[3,6,10]], 12), true, 'Test 97');
test(carPooling([[10,0,2],[5,2,5],[3,5,10],[7,7,12]], 15), true, 'Test 98');
test(carPooling([[3,0,5],[2,0,10],[1,5,7],[4,8,10]], 10), true, 'Test 99');
test(carPooling([[50,0,100],[20,100,200],[30,200,300],[40,300,400]], 150), true, 'Test 100');
test(carPooling([[1,1,3],[2,2,4],[3,3,5],[4,4,6],[5,5,7],[6,6,8],[7,7,9]], 15), true, 'Test 101');
test(carPooling([[50,0,10],[30,5,15],[20,10,20],[10,15,25]], 110), true, 'Test 102');
test(carPooling([[1,1,1000],[1,1000,1000],[1,500,501],[1,501,502]], 3), true, 'Test 103');
test(carPooling([[2,1,5],[3,5,8],[1,8,12],[4,10,15]], 10), true, 'Test 104');
test(carPooling([[1,0,10],[2,1,9],[3,2,8],[4,3,7],[5,4,6]], 15), true, 'Test 105');
test(carPooling([[10,1,4],[5,5,7],[2,2,6],[4,6,8]], 15), true, 'Test 106');
test(carPooling([[2,1,2],[2,2,3],[2,3,4],[2,4,5],[2,5,6],[2,6,7],[2,7,8]], 3), true, 'Test 107');
test(carPooling([[3,1,4],[5,2,5],[1,2,6],[2,3,7],[3,4,8]], 14), true, 'Test 108');
test(carPooling([[2,1,5],[3,3,7],[5,5,10],[1,7,12],[4,8,13]], 15), true, 'Test 109');
test(carPooling([[5,1,5],[6,4,9],[4,9,14],[3,14,19]], 15), true, 'Test 110');
test(carPooling([[5,1,5],[2,2,8],[3,4,6],[1,3,10]], 12), true, 'Test 111');
test(carPooling([[3,1,3],[2,1,4],[1,2,5],[4,3,6],[2,4,7]], 10), true, 'Test 112');

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
