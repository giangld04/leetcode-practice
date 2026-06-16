// Test: 3386. Button With Longest Push Time
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { buttonWithLongestTime } = require("./solution");

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

console.log("\n3386. Button With Longest Push Time\n");

test(buttonWithLongestTime([[1,1],[2,2],[3,3],[4,4],[5,5]]), 1, 'Test 1');
test(buttonWithLongestTime([[3,1],[1,3],[2,6],[3,10]]), 3, 'Test 2');
test(buttonWithLongestTime([[10,5],[1,7]]), 10, 'Test 3');
test(buttonWithLongestTime([[100,100],[200,200],[100,300],[200,400]]), 100, 'Test 4');
test(buttonWithLongestTime([[3,1],[3,4],[5,8],[5,12],[3,16]]), 3, 'Test 5');
test(buttonWithLongestTime([[1,10],[2,20],[3,30],[4,40],[5,50]]), 1, 'Test 6');
test(buttonWithLongestTime([[5,10],[5,15],[5,20],[5,25]]), 5, 'Test 7');
test(buttonWithLongestTime([[5,10],[3,12],[5,18],[1,25]]), 5, 'Test 8');
test(buttonWithLongestTime([[2,3],[4,8],[2,15],[3,20]]), 2, 'Test 9');
test(buttonWithLongestTime([[5,10],[3,15],[5,25],[2,30]]), 5, 'Test 10');
test(buttonWithLongestTime([[3,3],[4,8],[2,15],[4,20]]), 2, 'Test 11');
test(buttonWithLongestTime([[5,10],[5,20],[5,30],[5,40]]), 5, 'Test 12');
test(buttonWithLongestTime([[5,1],[5,2],[5,3],[5,4],[5,5]]), 5, 'Test 13');
test(buttonWithLongestTime([[1,2],[2,5],[3,9],[1,15]]), 1, 'Test 14');
test(buttonWithLongestTime([[5,1],[5,2],[5,4],[5,8],[5,16],[5,32],[5,64],[5,128],[5,256]]), 5, 'Test 15');
test(buttonWithLongestTime([[7,1],[8,5],[9,10],[7,20],[8,30],[9,40],[7,50]]), 7, 'Test 16');
test(buttonWithLongestTime([[1,1],[1,2],[1,3],[1,4],[1,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12]]), 1, 'Test 17');
test(buttonWithLongestTime([[9,1],[4,6],[9,10],[3,15],[9,20],[2,25],[3,30]]), 2, 'Test 18');
test(buttonWithLongestTime([[5, 5], [3, 10], [7, 15], [2, 20], [5, 25], [3, 30], [7, 35]]), 2, 'Test 19');
test(buttonWithLongestTime([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [1, 20]]), 1, 'Test 20');
test(buttonWithLongestTime([[1,2],[2,3],[3,5],[4,10],[5,15],[6,20],[7,25],[8,30],[9,35],[10,40],[1,45]]), 1, 'Test 21');
test(buttonWithLongestTime([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]]), 1, 'Test 22');
test(buttonWithLongestTime([[1,1],[2,2],[3,3],[4,4],[5,5],[1,15],[2,20],[3,25],[4,30],[5,35]]), 1, 'Test 23');
test(buttonWithLongestTime([[1, 2], [2, 5], [3, 9], [4, 14], [5, 20], [1, 26], [2, 32], [3, 38], [4, 44], [5, 50]]), 1, 'Test 24');
test(buttonWithLongestTime([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[1,11],[2,12],[3,13],[4,14],[5,15]]), 1, 'Test 25');
test(buttonWithLongestTime([[1,1],[2,3],[3,6],[4,10],[5,15],[6,21],[7,28],[8,36],[9,45]]), 9, 'Test 26');
test(buttonWithLongestTime([[7,10],[5,15],[3,20],[8,25],[5,30],[7,35]]), 7, 'Test 27');
test(buttonWithLongestTime([[2,1],[3,4],[1,8],[2,15],[3,20]]), 2, 'Test 28');
test(buttonWithLongestTime([[1,1],[1,100],[2,101],[2,200],[3,201],[3,300],[4,301],[4,400]]), 1, 'Test 29');
test(buttonWithLongestTime([[1,10],[2,20],[3,30],[4,40],[5,50],[6,60],[7,70],[8,80],[9,90],[10,100],[1,110]]), 1, 'Test 30');
test(buttonWithLongestTime([[1,100],[2,110],[3,130],[1,150],[2,170],[3,200],[1,220]]), 1, 'Test 31');
test(buttonWithLongestTime([[1,100],[2,200],[3,300],[4,400],[5,500],[6,600],[7,700],[8,800],[9,900],[10,1000]]), 1, 'Test 32');
test(buttonWithLongestTime([[7,5],[3,10],[7,18],[5,23],[3,29],[7,37],[5,45],[3,50]]), 5, 'Test 33');
test(buttonWithLongestTime([[1, 1], [2, 10], [3, 20], [4, 30], [5, 40], [6, 50], [7, 60], [8, 70], [9, 80], [10, 90]]), 3, 'Test 34');
test(buttonWithLongestTime([[1,1],[2,10],[3,20],[4,30],[5,40],[1,50],[2,60],[3,70],[4,80],[5,90],[1,100],[2,110],[3,120],[4,130],[5,140]]), 1, 'Test 35');
test(buttonWithLongestTime([[1,1],[2,3],[3,6],[4,10],[5,15],[6,21],[7,28],[8,36],[9,45],[10,55]]), 10, 'Test 36');
test(buttonWithLongestTime([[100, 100], [200, 150], [100, 200], [300, 250], [200, 300], [100, 350]]), 100, 'Test 37');
test(buttonWithLongestTime([[1,1],[2,2],[3,3],[1,5],[2,7],[3,9],[1,11],[2,13],[3,15]]), 1, 'Test 38');
test(buttonWithLongestTime([[1,2],[2,4],[3,8],[4,16],[5,32],[6,64],[7,128],[8,256],[9,512],[10,1024]]), 10, 'Test 39');
test(buttonWithLongestTime([[10,10],[20,20],[30,30],[10,40],[20,50],[30,60],[10,70],[20,80],[30,90],[10,100],[20,110],[30,120]]), 10, 'Test 40');
test(buttonWithLongestTime([[100,100],[200,200],[300,300],[100,400],[200,500],[300,600],[100,700],[200,800],[300,900]]), 100, 'Test 41');
test(buttonWithLongestTime([[8,5],[3,10],[8,15],[3,20],[8,25],[3,30],[8,35],[3,40],[8,45],[3,50]]), 3, 'Test 42');
test(buttonWithLongestTime([[1,1000],[2,1010],[3,1030],[4,1060],[5,1100],[6,1150],[7,1210],[8,1280],[9,1360],[10,1450]]), 1, 'Test 43');
test(buttonWithLongestTime([[100,100],[200,200],[300,300],[400,400],[100,500],[200,600],[300,700],[400,800]]), 100, 'Test 44');
test(buttonWithLongestTime([[1,10],[2,25],[3,35],[4,50],[5,70],[6,90],[7,110],[8,130],[9,150],[10,170]]), 5, 'Test 45');
test(buttonWithLongestTime([[1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10]]), 1, 'Test 46');
test(buttonWithLongestTime([[1,1],[2,3],[1,6],[3,10],[1,15],[2,20],[3,25],[1,30],[2,35],[3,40],[1,45],[2,50],[3,55]]), 1, 'Test 47');
test(buttonWithLongestTime([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 1, 'Test 48');
test(buttonWithLongestTime([[1,10],[2,20],[3,30],[4,40],[5,50],[1,60],[2,70],[3,80],[4,90],[5,100],[1,110],[2,120],[3,130]]), 1, 'Test 49');
test(buttonWithLongestTime([[5,2],[5,4],[5,6],[5,8],[5,10],[5,12],[5,14],[5,16],[5,18],[5,20],[5,22]]), 5, 'Test 50');
test(buttonWithLongestTime([[7,10],[8,15],[9,20],[10,30],[7,40],[8,50],[9,60]]), 7, 'Test 51');
test(buttonWithLongestTime([[1, 1], [2, 3], [3, 6], [1, 10], [2, 15], [3, 21], [1, 30], [2, 35]]), 1, 'Test 52');
test(buttonWithLongestTime([[1,1],[2,10],[3,20],[1,30],[2,40],[3,50],[1,60],[2,70],[3,80],[1,90],[2,100],[3,110],[1,120]]), 1, 'Test 53');
test(buttonWithLongestTime([[1,10],[2,20],[3,30],[4,40],[1,50],[2,60],[3,70],[4,80],[1,90],[2,100],[3,110],[4,120]]), 1, 'Test 54');
test(buttonWithLongestTime([[1,1],[2,3],[3,6],[1,10],[2,15],[3,21]]), 3, 'Test 55');
test(buttonWithLongestTime([[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10]]), 9, 'Test 56');
test(buttonWithLongestTime([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[1,20]]), 1, 'Test 57');
test(buttonWithLongestTime([[99999, 1], [1, 100000], [99999, 200000], [2, 300000], [99999, 400000], [3, 500000], [99999, 600000]]), 2, 'Test 58');
test(buttonWithLongestTime([[100,100],[200,200],[100,300],[200,400],[100,500],[200,600]]), 100, 'Test 59');
test(buttonWithLongestTime([[2,3],[7,8],[5,12],[2,18],[7,22],[1,30]]), 1, 'Test 60');
test(buttonWithLongestTime([[1,1],[1,2],[2,3],[2,4],[3,5],[3,6],[4,7],[4,8],[5,9],[5,10],[6,11],[6,12],[7,13],[7,14],[8,15],[8,16],[9,17],[9,18],[10,19],[10,20]]), 1, 'Test 61');
test(buttonWithLongestTime([[1,1],[2,3],[3,6],[4,10],[5,15],[1,20]]), 1, 'Test 62');
test(buttonWithLongestTime([[1,1],[2,10],[3,20],[4,30],[5,40],[6,50],[7,60],[8,70],[9,80],[10,90],[1,100],[2,110],[3,120],[4,130],[5,140],[6,150],[7,160],[8,170],[9,180],[10,190]]), 1, 'Test 63');
test(buttonWithLongestTime([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[1,20],[2,30],[3,40],[4,50],[5,60],[6,70],[7,80],[8,90],[9,100],[10,110]]), 1, 'Test 64');
test(buttonWithLongestTime([[1,1],[1,2],[1,4],[1,8],[1,16],[1,32],[1,64],[1,128],[1,256],[1,512]]), 1, 'Test 65');
test(buttonWithLongestTime([[1,1],[2,3],[3,7],[4,15],[5,25],[6,40]]), 6, 'Test 66');
test(buttonWithLongestTime([[5, 5], [5, 15], [5, 25], [5, 35], [5, 45], [5, 55], [5, 65], [5, 75], [5, 85], [5, 95], [5, 105]]), 5, 'Test 67');
test(buttonWithLongestTime([[1,100],[2,150],[3,200],[1,250],[2,300],[3,350],[1,400],[2,450],[3,500],[1,550],[2,600],[3,650],[1,700]]), 1, 'Test 68');
test(buttonWithLongestTime([[9,10],[8,20],[7,30],[6,40],[5,50],[4,60],[3,70],[2,80],[1,90]]), 1, 'Test 69');
test(buttonWithLongestTime([[1,2],[2,4],[3,6],[4,8],[5,10],[1,12],[2,14],[3,16],[4,18],[5,20]]), 1, 'Test 70');
test(buttonWithLongestTime([[1,1],[2,1000],[3,2000],[4,3000],[5,4000],[6,5000],[7,6000],[8,7000],[9,8000],[10,9000]]), 3, 'Test 71');
test(buttonWithLongestTime([[5,5],[4,10],[3,15],[2,20],[1,25],[5,30],[4,35],[3,40],[2,45],[1,50]]), 1, 'Test 72');
test(buttonWithLongestTime([[7,3],[1,5],[2,10],[7,15],[3,20],[1,25],[2,30],[7,35],[1,40]]), 1, 'Test 73');
test(buttonWithLongestTime([[10, 10], [9, 20], [8, 30], [7, 40], [6, 50], [5, 60], [4, 70], [3, 80], [2, 90], [1, 100], [1, 110]]), 1, 'Test 74');
test(buttonWithLongestTime([[10,1],[20,5],[30,10],[40,20],[50,30],[60,40],[70,50],[80,60],[90,70],[100,80],[110,90],[120,100]]), 40, 'Test 75');
test(buttonWithLongestTime([[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],[5,15]]), 5, 'Test 76');
test(buttonWithLongestTime([[5,10],[3,15],[7,20],[1,25],[2,30],[8,35],[6,40],[9,45],[4,50]]), 5, 'Test 77');
test(buttonWithLongestTime([[1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [2, 11]]), 1, 'Test 78');
test(buttonWithLongestTime([[10,10],[20,20],[30,30],[40,40],[50,50],[10,60],[20,70],[30,80],[40,90],[50,100],[10,110],[20,120],[30,130],[40,140],[50,150]]), 10, 'Test 79');
test(buttonWithLongestTime([[1,1],[1,2],[1,3],[1,4],[1,5],[2,6],[2,7],[2,8],[2,9],[2,10]]), 1, 'Test 80');
test(buttonWithLongestTime([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [1, 11], [2, 12], [3, 13], [4, 14], [5, 15], [6, 16], [7, 17], [8, 18], [9, 19], [10, 20]]), 1, 'Test 81');
test(buttonWithLongestTime([[5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [1, 11]]), 1, 'Test 82');
test(buttonWithLongestTime([[5,1],[10,2],[15,4],[20,8],[25,16],[30,32],[35,64],[40,128],[45,256],[50,512]]), 50, 'Test 83');
test(buttonWithLongestTime([[5,1],[10,5],[15,10],[20,20],[25,30],[30,40],[35,55],[40,70],[45,85],[50,100]]), 35, 'Test 84');
test(buttonWithLongestTime([[5, 5], [15, 15], [25, 25], [35, 35], [45, 45], [55, 55], [65, 65], [75, 75], [85, 85], [95, 95]]), 15, 'Test 85');
test(buttonWithLongestTime([[1,1],[2,4],[3,9],[4,16],[5,25],[6,36],[7,49],[8,64],[9,81],[10,100],[11,121],[12,144]]), 12, 'Test 86');
test(buttonWithLongestTime([[100, 10], [200, 20], [100, 30], [300, 40], [100, 50], [200, 60], [300, 70], [400, 80]]), 100, 'Test 87');
test(buttonWithLongestTime([[9, 9], [8, 18], [7, 27], [6, 36], [5, 45], [4, 54], [3, 63], [2, 72], [1, 81], [1, 90]]), 1, 'Test 88');
test(buttonWithLongestTime([[1,10],[2,15],[3,20],[1,25],[2,30],[3,35],[1,40],[2,45]]), 1, 'Test 89');
test(buttonWithLongestTime([[10,10],[20,15],[30,25],[40,40],[50,65],[60,100],[70,150],[80,225],[90,325],[100,450]]), 100, 'Test 90');
test(buttonWithLongestTime([[1, 10], [2, 20], [3, 30], [4, 40], [5, 50], [1, 60], [2, 70], [3, 80], [4, 90], [5, 100]]), 1, 'Test 91');
test(buttonWithLongestTime([[5,2],[5,4],[5,8],[5,16],[5,32],[5,64],[5,128]]), 5, 'Test 92');
test(buttonWithLongestTime([[2,3],[4,8],[1,15],[4,20],[3,26],[2,35]]), 2, 'Test 93');
test(buttonWithLongestTime([[5,10],[3,15],[5,20],[1,25],[3,30],[5,35],[1,40],[3,45],[5,50],[1,55],[3,60],[5,65],[1,70],[3,75]]), 5, 'Test 94');
test(buttonWithLongestTime([[10, 10], [20, 20], [30, 30], [40, 40], [50, 50], [60, 60], [70, 70], [80, 80], [90, 90], [100, 100], [10, 110]]), 10, 'Test 95');
test(buttonWithLongestTime([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[2,11],[2,20],[2,30],[2,40],[2,50]]), 2, 'Test 96');
test(buttonWithLongestTime([[2,3],[4,8],[1,15],[2,22],[4,30],[3,35]]), 4, 'Test 97');
test(buttonWithLongestTime([[1, 1], [2, 3], [1, 6], [2, 10], [3, 15], [1, 20]]), 1, 'Test 98');
test(buttonWithLongestTime([[1,2],[1,5],[1,10],[1,15],[1,20],[1,25],[1,30],[1,35],[1,40],[1,45],[1,50]]), 1, 'Test 99');
test(buttonWithLongestTime([[5,5],[5,10],[1,15],[1,20],[2,25],[2,30],[3,35],[3,40],[4,45],[4,50]]), 1, 'Test 100');
test(buttonWithLongestTime([[1,100],[2,200],[3,300],[4,400],[5,500],[6,600],[7,700],[8,800],[9,900],[10,1000],[11,1100],[12,1200],[13,1300],[14,1400]]), 1, 'Test 101');
test(buttonWithLongestTime([[7,5],[8,10],[9,15],[7,20],[8,25],[9,30],[7,35]]), 7, 'Test 102');
test(buttonWithLongestTime([[10,1],[20,3],[30,6],[40,10],[50,15],[60,21],[70,28],[80,36],[90,45]]), 90, 'Test 103');
test(buttonWithLongestTime([[5,1],[5,2],[5,4],[5,8],[5,16],[5,32],[5,64],[5,128],[5,256],[5,512],[5,1024]]), 5, 'Test 104');

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
