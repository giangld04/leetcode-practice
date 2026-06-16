// Test: 1627. Graph Connectivity With Threshold
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { areConnected } = require("./solution");

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

console.log("\n1627. Graph Connectivity With Threshold\n");

test(areConnected(6, 0, [[4,5],[3,4],[3,2],[2,6],[1,3]]), [true, true, true, true, true], 'Test 1');
test(areConnected(10, 3, [[1,2],[3,4],[5,6],[7,8],[9,10]]), [false, false, false, false, false], 'Test 2');
test(areConnected(100, 50, [[1,2],[51,100],[49,99]]), [false, false, false], 'Test 3');
test(areConnected(6, 2, [[1,4],[2,5],[3,6]]), [false, false, true], 'Test 4');
test(areConnected(5, 1, [[4,5],[4,5],[3,2],[2,3],[3,4]]), [false, false, false, false, false], 'Test 5');
test(areConnected(100, 50, [[1,99],[2,98],[3,97],[4,96]]), [false, false, false, false], 'Test 6');
test(areConnected(3000, 1500, [[1501, 2250], [1502, 2251], [1503, 2252], [1504, 2253], [1505, 2254], [1506, 2255], [1507, 2256], [1508, 2257], [1509, 2258], [1510, 2259]]), [false, false, false, false, false, false, false, false, false, false], 'Test 7');
test(areConnected(10000, 1000, [[1, 2000], [3000, 4000], [5000, 6000], [7000, 8000], [9000, 10000]]), [false, true, true, true, true], 'Test 8');
test(areConnected(9999, 1, [[i,i+1] for i in range[1,9999]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 9');
test(areConnected(50, 5, [[6,12],[10,20],[14,28],[18,36],[22,44]]), [true, true, true, true, true], 'Test 10');
test(areConnected(500, 250, [[i, i+250] for i in range[1, 251]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 11');
test(areConnected(999, 333, [[1,334],[2,335],[3,336],[4,337],[5,338],[6,339]]), [false, false, false, false, false, false], 'Test 12');
test(areConnected(10000, 500, [[i,i+500] for i in range[1,5001]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 13');
test(areConnected(100, 0, [[1,100],[2,99],[3,98],[4,97],[5,96]]), [true, true, true, true, true], 'Test 14');
test(areConnected(100, 5, [[i, i+5] for i in range[1, 96]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 15');
test(areConnected(100, 9, [[i,i+1] for i in range[1,100]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 16');
test(areConnected(100, 1, [[i, j] for i in range[1, 101] for j in range[i+1, 101] if i % 2 != 0 and j % 2 != 0]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 17');
test(areConnected(50, 1, [[i, i+1] for i in range[1, 49]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 18');
test(areConnected(5000, 1000, [[1000,2000],[3000,4000],[4999,5000]]), [false, false, false], 'Test 19');
test(areConnected(100, 2, [[i, i+2] for i in range[1, 99] if i % 2 != 0]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 20');
test(areConnected(100, 25, [[26,52],[27,54],[28,56],[29,58],[30,60]]), [true, true, true, true, true], 'Test 21');
test(areConnected(3000, 1500, [[i,j] for i in range[1,3000] for j in range[i+1,3000] if [i*j] %, = 0]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 22');
test(areConnected(1000, 1, [[2, 4], [3, 6], [5, 10], [7, 14], [8, 16], [9, 18], [10, 20], [11, 22], [12, 24], [13, 26]]), [true, true, true, true, true, true, true, true, true, true], 'Test 23');
test(areConnected(100, 0, [[i,j] for i in range[1,100] for j in range[i+1,101] if i != j]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 24');
test(areConnected(10000, 5000, [[1,6000],[2,6001],[3,6002],[4,6003],[5,6004],[6,6005]]), [false, false, false, false, false, false], 'Test 25');
test(areConnected(1000, 250, [[150, 300], [200, 400], [500, 750], [800, 900], [100, 900]]), [false, false, false, false, false], 'Test 26');
test(areConnected(1000, 250, [[1,500],[2,501],[3,502],[4,503],[5,504],[6,505]]), [false, false, false, false, false, false], 'Test 27');
test(areConnected(10000, 9999, [[1,10000],[2,9999],[3,9998],[4,9997]]), [false, false, false, false], 'Test 28');
test(areConnected(10000, 1000, [[1001,2002],[3003,4004],[5005,6006],[7007,8008],[9009,10010]]), Error: list index out of range, 'Test 29');
test(areConnected(500, 250, [[251,500],[252,499],[253,498],[254,497],[255,496],[256,495]]), [false, false, false, false, false, false], 'Test 30');
test(areConnected(500, 25, [[i,i+1] for i in range[1,500]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 31');
test(areConnected(100, 1, [[i, j] for i in range[1, 51] for j in range[51, 101]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 32');
test(areConnected(10000, 5000, [[1000, 9000], [5000, 6000], [1, 2], [9999, 10000]]), [false, false, false, false], 'Test 33');
test(areConnected(750, 250, [[i,j] for i in range[1,750] for j in range[i+1,750] if [i+j] %, = 0]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 34');
test(areConnected(100, 1, [[i,j] for i in range[1,100] for j in range[i+1,101]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 35');
test(areConnected(5000, 100, [[100,200],[50,150],[300,600],[1,2],[4999,5000]]), [false, false, true, false, false], 'Test 36');
test(areConnected(1000, 250, [[1,500],[2,750],[3,900],[4,950],[5,999]]), [false, false, false, false, false], 'Test 37');
test(areConnected(1500, 100, [[i,j] for i in range[1,1500] for j in range[i+1,1500] if [i*j] %, = 0]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 38');
test(areConnected(5000, 2000, [[1,3000],[2,4000],[3,4500],[4,4900],[5,4999]]), [false, false, false, false, false], 'Test 39');
test(areConnected(50, 10, [[11,22],[13,26],[15,30],[7,14],[21,42]]), [true, true, true, false, true], 'Test 40');
test(areConnected(5000, 250, [[125,250],[375,500],[625,750],[875,1000],[1125,1250]]), [false, true, true, true, true], 'Test 41');
test(areConnected(1000, 200, [[500, 750], [250, 501], [750, 1000], [1, 999]]), [true, false, true, false], 'Test 42');
test(areConnected(100, 99, [[i, j] for i in range[1, 51] for j in range[51, 101]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 43');
test(areConnected(100, 2, [[i,i+2] for i in range[1,99] if i+2 <= 100]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 44');
test(areConnected(10000, 0, [[1,9999],[2,9998],[3,9997],[4,9996],[5,9995],[6,9994],[7,9993],[8,9992],[9,9991],[10,9990]]), [true, true, true, true, true, true, true, true, true, true], 'Test 45');
test(areConnected(10000, 5000, [[5100, 9900], [5200, 9800], [5300, 9700], [5400, 9600], [5500, 9500]]), [false, false, false, false, false], 'Test 46');
test(areConnected(5000, 1000, [[1200, 2400], [1500, 3000], [2500, 4000], [3500, 4500], [1000, 4000]]), [true, true, false, false, false], 'Test 47');
test(areConnected(10000, 3, [[i,10000-i] for i in range[1,5001]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 48');
test(areConnected(5000, 1, [[i,i+1] for i in range[1,4999]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 49');
test(areConnected(1000, 5, [[1,1000],[2,999],[3,998],[4,997],[5,996]]), [false, false, false, false, false], 'Test 50');
test(areConnected(100, 10, [[1,11],[2,12],[3,13],[4,14],[5,15]]), [false, false, false, false, false], 'Test 51');
test(areConnected(1000, 50, [[1,50],[2,50],[3,50],[4,50],[5,50],[6,50],[7,50],[8,50]]), [false, false, false, false, false, false, false, false], 'Test 52');
test(areConnected(5000, 2500, [[1,2501],[1000,3000],[2500,5000]]), [false, false, false], 'Test 53');
test(areConnected(2000, 100, [[100,200],[300,400],[500,600],[700,800],[900,1000],[1100,1200],[1300,1400],[1500,1600],[1700,1800],[1900,2000]]), [false, true, true, true, true, true, true, true, true, true], 'Test 54');
test(areConnected(100, 20, [[10,20],[30,40],[50,60],[70,80],[90,100]]), [false, false, false, false, false], 'Test 55');
test(areConnected(20, 19, [[1, 20], [2, 19], [3, 18], [4, 17], [5, 16]]), [false, false, false, false, false], 'Test 56');
test(areConnected(2000, 1000, [[1,2],[3,4],[5,6],[7,8],[9,10]]), [false, false, false, false, false], 'Test 57');
test(areConnected(100, 10, [[i, j] for i in range[1, 100] for j in range[i+1, 101]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 58');
test(areConnected(5000, 1000, [[2000, 3000], [1001, 2001], [4000, 5000], [999, 4999]]), [false, false, false, false], 'Test 59');
test(areConnected(8000, 4000, [[4001,8000],[4002,7999],[4003,7998],[4004,7997],[4005,7996],[4006,7995]]), [false, false, false, false, false, false], 'Test 60');
test(areConnected(2000, 100, [[50, 150], [100, 200], [150, 250], [200, 300], [250, 350], [300, 400], [350, 450], [400, 500], [450, 550], [500, 600]]), [false, false, true, true, true, true, true, true, true, true], 'Test 61');
test(areConnected(5000, 100, [[i,5001-i] for i in range[1,2501]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 62');
test(areConnected(10000, 2, [[i,10001-i] for i in range[1,5001]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 63');
test(areConnected(1000, 0, [[i,j] for i in range[1,1000] for j in range[i+1,1001]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 64');
test(areConnected(1000, 5, [[1, 3], [2, 4], [5, 7], [8, 10], [11, 13], [14, 16], [17, 19], [20, 22], [23, 25], [26, 28], [29, 31], [32, 34], [35, 37], [38, 40], [41, 43], [44, 46], [47, 49], [50, 52], [53, 55], [56, 58], [59, 61], [62, 64], [65, 67], [68, 70], [71, 73], [74, 76], [77, 79], [80, 82], [83, 85], [86, 88], [89, 91], [92, 94], [95, 97], [98, 100]]), [false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 65');
test(areConnected(10000, 50, [[51, 101], [52, 102], [53, 103], [54, 104], [55, 105], [56, 106], [57, 107], [58, 108], [59, 109], [60, 110]]), [true, true, true, true, true, true, true, true, true, true], 'Test 66');
test(areConnected(1500, 500, [[i,j] for i in range[1,1500] for j in range[i+1,1500] if [i+j] %, = 0]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 67');
test(areConnected(10000, 1, [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]), [false, true, true, true, true, true, true, true, true, true], 'Test 68');
test(areConnected(3000, 1500, [[i,i+1500] for i in range[1,1500]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 69');
test(areConnected(1000, 500, [[10,20],[30,50],[25,75],[500,1000],[999,1000]]), [false, false, false, false, false], 'Test 70');
test(areConnected(1000, 50, [[51,100],[52,99],[53,98],[54,97],[55,96],[56,95],[57,94],[58,93],[59,92],[60,91]]), [true, true, false, false, true, true, false, false, false, true], 'Test 71');
test(areConnected(8000, 4000, [[1,2],[2,3],[3,4],[4,5],[5,6]]), [false, false, false, false, false], 'Test 72');
test(areConnected(3000, 1500, [[1501,2000],[1502,2500],[1503,3000],[2000,3000],[1504,1505],[1506,1507]]), [false, false, false, false, false, false], 'Test 73');
test(areConnected(10000, 2000, [[2001, 4000], [2002, 4001], [2003, 4002], [2004, 4003], [2005, 4004], [2006, 4005], [2007, 4006], [2008, 4007], [2009, 4008], [2010, 4009]]), [false, false, false, false, false, false, false, false, false, false], 'Test 74');
test(areConnected(1000, 5, [[i,i+5] for i in range[1,995]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 75');
test(areConnected(7000, 3500, [[i,i+3500] for i in range[1,3500]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 76');
test(areConnected(1000, 500, [[i,i+1] for i in range[1,1000]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 77');
test(areConnected(10000, 5000, [[1,7000],[2,8000],[3,9000],[4,9500],[5,9999]]), [false, false, false, false, false], 'Test 78');
test(areConnected(10000, 5000, [[1,5001],[2,5002],[3,5003],[4,5004],[5,5005]]), [false, false, false, false, false], 'Test 79');
test(areConnected(100, 99, [[1,100]]), [false], 'Test 80');
test(areConnected(2000, 0, [[i,j] for i in range[1,2000] for j in range[i+1,2000] if abs[i-j] > 1000]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 81');
test(areConnected(5000, 2, [[3, 6], [5, 10], [7, 14], [9, 18], [11, 22], [13, 26], [15, 30], [17, 34], [19, 38], [21, 42]]), [true, true, true, true, true, true, true, true, true, true], 'Test 82');
test(areConnected(100, 0, [[i, j] for i in range[1, 101] for j in range[i+1, 101] if i %, = 0 and j %, = 0]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 83');
test(areConnected(10000, 5000, [[5001,5002],[5003,5004],[5005,5006],[5007,5008],[5009,5010]]), [false, false, false, false, false], 'Test 84');
test(areConnected(5000, 2500, [[1, 500], [1000, 1500], [2000, 2500], [3000, 3500], [4000, 4500], [4500, 5000]]), [false, false, false, false, false, false], 'Test 85');
test(areConnected(9000, 4500, [[i,i+1] for i in range[1,8999]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 86');
test(areConnected(100, 5, [[i,j] for i in range[1,100] for j in range[i+1,101] if i %, = 0 and j %, = 0]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 87');
test(areConnected(1000, 300, [[101,202],[303,404],[505,606],[707,808],[909,1000]]), [false, false, false, false, false], 'Test 88');
test(areConnected(100, 1, [[1,2],[2,3],[3,4],[4,5],[5,6]]), [false, true, true, true, true], 'Test 89');
test(areConnected(10000, 5000, [[i, 10000 - i] for i in range[1, 5001]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 90');
test(areConnected(2000, 0, [[1, 1999], [2, 1998], [3, 1997], [4, 1996], [5, 1995], [6, 1994], [7, 1993], [8, 1992], [9, 1991], [10, 1990]]), [true, true, true, true, true, true, true, true, true, true], 'Test 91');
test(areConnected(500, 250, [[251, 500], [252, 499], [253, 498], [254, 497], [255, 496]]), [false, false, false, false, false], 'Test 92');
test(areConnected(5000, 2500, [[1,2501],[2,2502],[3,2503],[4,2504],[5,2505]]), [false, false, false, false, false], 'Test 93');
test(areConnected(2000, 1, [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]), [false, true, true, true, true, true, true, true, true, true], 'Test 94');
test(areConnected(150, 50, [[10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 100], [100, 110], [110, 120], [120, 130], [130, 140], [140, 150]]), [false, false, false, false, false, false, false, false, false, false, false, false, false, false], 'Test 95');
test(areConnected(10000, 4, [[i,10000-i] for i in range[1,2501]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 96');
test(areConnected(100, 3, [[i, j] for i in range[1, 101] for j in range[i+1, 101] if i %, = 0 and j %, = 0]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 97');
test(areConnected(1000, 0, [[1, 999], [2, 998], [3, 997], [4, 996], [5, 995], [10, 100], [50, 150], [200, 300], [700, 800], [900, 1000]]), [true, true, true, true, true, true, true, true, true, true], 'Test 98');
test(areConnected(500, 250, [[1, 251], [2, 252], [3, 253], [4, 254], [5, 255], [250, 499], [251, 498], [252, 497], [253, 496], [254, 495]]), [false, false, false, false, false, false, false, false, false, false], 'Test 99');
test(areConnected(200, 0, [[i, j] for i in range[1, 101] for j in range[101, 201]]), Error: Solution.areConnected[] missing 1 required positional argument: 'queries', 'Test 100');

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
