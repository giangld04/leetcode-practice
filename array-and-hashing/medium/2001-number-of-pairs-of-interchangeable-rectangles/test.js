// Test: 2001. Number Of Pairs Of Interchangeable Rectangles
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { interchangeableRectangles } = require("./solution");

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

console.log("\n2001. Number Of Pairs Of Interchangeable Rectangles\n");

test(interchangeableRectangles([[1,1],[2,2],[3,3],[4,4],[5,5]]), 10, 'Test 1');
test(interchangeableRectangles([[5,10],[10,20],[20,40],[40,80]]), 6, 'Test 2');
test(interchangeableRectangles([[2,3],[3,4],[4,5],[5,6]]), 0, 'Test 3');
test(interchangeableRectangles([[4,5],[7,8]]), 0, 'Test 4');
test(interchangeableRectangles([[5,10],[10,20],[15,30],[20,40],[25,50]]), 10, 'Test 5');
test(interchangeableRectangles([[5,10],[10,20],[15,30],[20,40]]), 6, 'Test 6');
test(interchangeableRectangles([[4,8],[3,6],[10,20],[15,30]]), 6, 'Test 7');
test(interchangeableRectangles([[1,2],[2,4],[3,6],[4,8]]), 6, 'Test 8');
test(interchangeableRectangles([[2,3],[3,4],[4,6],[6,9]]), 3, 'Test 9');
test(interchangeableRectangles([[2,3],[3,2],[6,9],[9,6]]), 2, 'Test 10');
test(interchangeableRectangles([[10,5],[5,10],[20,10],[10,20],[30,15]]), 4, 'Test 11');
test(interchangeableRectangles([[1,2],[2,4],[4,8],[8,16]]), 6, 'Test 12');
test(interchangeableRectangles([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 45, 'Test 13');
test(interchangeableRectangles([[2,4],[4,8],[8,16],[16,32],[32,64],[64,128]]), 15, 'Test 14');
test(interchangeableRectangles([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12]]), 66, 'Test 15');
test(interchangeableRectangles([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11]]), 55, 'Test 16');
test(interchangeableRectangles([[10,1],[20,2],[30,3],[40,4],[50,5],[60,6],[70,7],[80,8],[90,9],[100,10]]), 45, 'Test 17');
test(interchangeableRectangles([[1,3],[2,6],[3,9],[4,12],[5,15]]), 10, 'Test 18');
test(interchangeableRectangles([[5,10],[10,20],[15,30],[20,40],[25,50],[30,60],[35,70],[40,80],[45,90],[50,100]]), 45, 'Test 19');
test(interchangeableRectangles([[7,10],[14,20],[21,30],[28,40],[35,50],[42,60],[49,70],[56,80],[63,90],[70,100],[77,110],[84,120]]), 66, 'Test 20');
test(interchangeableRectangles([[10,20],[15,30],[20,40],[25,50],[30,60],[35,70],[40,80],[45,90]]), 28, 'Test 21');
test(interchangeableRectangles([[100,200],[150,300],[200,400],[250,500],[300,600],[350,700],[400,800],[450,900],[500,1000]]), 36, 'Test 22');
test(interchangeableRectangles([[2,5],[4,10],[6,15],[8,20],[10,25],[12,30],[14,35],[16,40],[18,45],[20,50]]), 45, 'Test 23');
test(interchangeableRectangles([[1,2],[2,4],[3,6],[4,8],[5,10],[6,12],[7,14],[8,16],[9,18],[10,20],[11,22],[12,24]]), 66, 'Test 24');
test(interchangeableRectangles([[100,200],[200,400],[300,600],[400,800],[500,1000],[600,1200],[700,1400],[800,1600],[900,1800],[1000,2000]]), 45, 'Test 25');
test(interchangeableRectangles([[3,9],[6,18],[9,27],[12,36],[15,45],[18,54],[21,63],[24,72],[27,81],[30,90]]), 45, 'Test 26');
test(interchangeableRectangles([[1000,2000],[1500,3000],[2000,4000],[2500,5000],[3000,6000],[3500,7000],[4000,8000],[4500,9000],[5000,10000]]), 36, 'Test 27');
test(interchangeableRectangles([[1,1],[1,2],[2,1],[1,3],[3,1],[2,3],[3,2],[1,4],[4,1],[2,4],[4,2],[3,4],[4,3]]), 2, 'Test 28');
test(interchangeableRectangles([[10,20],[15,30],[20,40],[25,50],[30,60],[35,70],[40,80],[45,90],[50,100]]), 36, 'Test 29');
test(interchangeableRectangles([[10,5],[5,10],[2,1],[1,2],[4,2],[2,4],[8,4],[4,8],[16,8],[8,16]]), 20, 'Test 30');
test(interchangeableRectangles([[1,3],[2,6],[3,9],[4,12],[5,15],[6,18],[7,21],[8,24],[9,27],[10,30],[11,33],[12,36],[13,39]]), 78, 'Test 31');
test(interchangeableRectangles([[3,4],[6,8],[9,12],[12,16],[15,20],[18,24],[21,28],[24,32]]), 28, 'Test 32');
test(interchangeableRectangles([[5,15],[10,30],[15,45],[20,60],[25,75]]), 10, 'Test 33');
test(interchangeableRectangles([[3,9],[9,27],[27,81],[81,243],[243,729]]), 10, 'Test 34');
test(interchangeableRectangles([[1,2],[2,4],[3,6],[4,8],[5,10],[6,12],[7,14],[8,16],[9,18],[10,20],[11,22],[12,24],[13,26],[14,28],[15,30]]), 105, 'Test 35');
test(interchangeableRectangles([[10,20],[15,30],[20,40],[25,50],[30,60],[35,70],[40,80],[45,90],[50,100],[55,110]]), 45, 'Test 36');
test(interchangeableRectangles([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1]]), 0, 'Test 37');
test(interchangeableRectangles([[1,2],[2,1],[1,3],[3,1],[2,3],[3,2],[1,4],[4,1],[2,4],[4,2]]), 2, 'Test 38');
test(interchangeableRectangles([[5,15],[10,30],[15,45],[20,60],[25,75],[30,90],[35,105],[40,120]]), 28, 'Test 39');
test(interchangeableRectangles([[1,100000],[2,50000],[3,33333],[4,25000],[5,20000],[6,16667],[7,14286],[8,12500],[9,11111],[10,10000]]), 0, 'Test 40');
test(interchangeableRectangles([[2,3],[4,6],[6,9],[8,12],[10,15],[12,18],[14,21],[16,24],[18,27],[20,30]]), 45, 'Test 41');
test(interchangeableRectangles([[1,3],[2,6],[3,9],[4,12],[5,15],[6,18],[7,21],[8,24],[9,27],[10,30]]), 45, 'Test 42');
test(interchangeableRectangles([[2,4],[4,8],[8,16],[16,32],[32,64],[64,128],[128,256],[256,512],[512,1024],[1024,2048]]), 45, 'Test 43');
test(interchangeableRectangles([[5,4],[10,8],[15,12],[20,16],[25,20],[30,24],[35,28],[40,32],[45,36],[50,40]]), 45, 'Test 44');
test(interchangeableRectangles([[1,10],[2,20],[3,30],[4,40],[5,50],[6,60],[7,70],[8,80],[9,90],[10,100],[11,110],[12,120],[13,130],[14,140],[15,150]]), 105, 'Test 45');
test(interchangeableRectangles([[11,22],[22,44],[33,66],[44,88],[55,110],[66,132],[77,154],[88,176]]), 28, 'Test 46');
test(interchangeableRectangles([[10,5],[20,10],[30,15],[40,20],[50,25],[60,30],[70,35],[80,40],[90,45],[100,50]]), 45, 'Test 47');
test(interchangeableRectangles([[5,1],[10,2],[15,3],[20,4],[25,5],[30,6],[35,7],[40,8],[45,9],[50,10]]), 45, 'Test 48');
test(interchangeableRectangles([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15]]), 105, 'Test 49');
test(interchangeableRectangles([[1,4],[2,8],[3,12],[4,16],[5,20],[6,24],[7,28],[8,32],[9,36],[10,40]]), 45, 'Test 50');
test(interchangeableRectangles([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]), 0, 'Test 51');
test(interchangeableRectangles([[1,100],[2,200],[3,300],[4,400],[5,500],[6,600],[7,700],[8,800],[9,900],[10,1000]]), 45, 'Test 52');
test(interchangeableRectangles([[1,100000],[2,200000],[3,300000],[4,400000],[5,500000],[6,600000],[7,700000],[8,800000],[9,900000],[10,1000000]]), 45, 'Test 53');
test(interchangeableRectangles([[3,4],[6,8],[9,12],[12,16],[15,20],[18,24],[21,28],[24,32],[27,36],[30,40]]), 45, 'Test 54');
test(interchangeableRectangles([[3,5],[6,10],[9,15],[12,20],[15,25],[18,30]]), 15, 'Test 55');
test(interchangeableRectangles([[8,12],[16,24],[24,36],[32,48],[40,60],[48,72],[56,84],[64,96]]), 28, 'Test 56');
test(interchangeableRectangles([[100,200],[200,400],[300,600],[400,800],[500,1000],[600,1200]]), 15, 'Test 57');
test(interchangeableRectangles([[2,1],[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]), 45, 'Test 58');
test(interchangeableRectangles([[100,200],[200,400],[300,600],[400,800],[500,1000]]), 10, 'Test 59');
test(interchangeableRectangles([[3,7],[6,14],[9,21],[12,28],[15,35],[18,42],[21,49],[24,56],[27,63],[30,70]]), 45, 'Test 60');
test(interchangeableRectangles([[100000,1],[200000,2],[300000,3],[400000,4],[500000,5],[600000,6],[700000,7],[800000,8],[900000,9],[1000000,10]]), 45, 'Test 61');
test(interchangeableRectangles([[3,9],[1,3],[2,6],[4,12],[5,15],[6,18],[7,21],[8,24]]), 28, 'Test 62');
test(interchangeableRectangles([[7,14],[14,28],[28,56],[56,112],[112,224],[224,448]]), 15, 'Test 63');
test(interchangeableRectangles([[3,5],[6,10],[9,15],[12,20],[15,25],[18,30],[21,35],[24,40],[27,45],[30,50]]), 45, 'Test 64');
test(interchangeableRectangles([[1,3],[2,6],[3,9],[4,12],[5,15],[6,18],[7,21]]), 21, 'Test 65');
test(interchangeableRectangles([[7,14],[14,28],[21,42],[28,56],[35,70],[42,84]]), 15, 'Test 66');
test(interchangeableRectangles([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]]), 0, 'Test 67');
test(interchangeableRectangles([[1,1],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]), 0, 'Test 68');
test(interchangeableRectangles([[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11]]), 0, 'Test 69');
test(interchangeableRectangles([[1,10],[2,20],[3,30],[4,40],[5,50],[6,60],[7,70],[8,80],[9,90],[10,100]]), 45, 'Test 70');
test(interchangeableRectangles([[100,1],[200,2],[300,3],[400,4],[500,5],[600,6],[700,7],[800,8],[900,9],[1000,10]]), 45, 'Test 71');
test(interchangeableRectangles([[1,2],[2,4],[3,6],[4,8],[5,10],[6,12],[7,14],[8,16],[9,18],[10,20]]), 45, 'Test 72');
test(interchangeableRectangles([[100000,1],[1,100000],[50000,2],[2,50000],[1,1],[1,2],[2,1]]), 0, 'Test 73');
test(interchangeableRectangles([[1,5],[2,10],[3,15],[4,20],[5,25],[6,30],[7,35],[8,40],[9,45],[10,50],[11,55],[12,60]]), 66, 'Test 74');
test(interchangeableRectangles([[7,14],[14,28],[21,42],[28,56],[35,70],[42,84],[49,98]]), 21, 'Test 75');
test(interchangeableRectangles([[3,1],[6,2],[9,3],[12,4],[15,5],[18,6],[21,7],[24,8],[27,9],[30,10]]), 45, 'Test 76');
test(interchangeableRectangles([[3,4],[6,8],[9,12],[12,16],[15,20],[18,24],[21,28]]), 21, 'Test 77');
test(interchangeableRectangles([[1,2],[2,4],[4,8],[8,16],[16,32],[32,64],[64,128],[128,256],[256,512],[512,1024]]), 45, 'Test 78');
test(interchangeableRectangles([[1,3],[2,6],[3,9],[4,12],[5,15],[6,18],[7,21],[8,24],[9,27],[10,30],[11,33],[12,36]]), 66, 'Test 79');
test(interchangeableRectangles([[5,10],[10,20],[15,30],[20,40],[25,50],[30,60],[35,70],[40,80],[45,90],[50,100],[55,110],[60,120]]), 66, 'Test 80');
test(interchangeableRectangles([[7,14],[14,28],[21,42],[28,56],[35,70],[42,84],[49,98],[56,112]]), 28, 'Test 81');
test(interchangeableRectangles([[1,2],[1,3],[2,4],[2,6],[3,6],[3,9],[4,8],[4,12],[5,10],[5,15]]), 20, 'Test 82');
test(interchangeableRectangles([[5,10],[15,30],[25,50],[35,70],[45,90],[55,110],[65,130],[75,150],[85,170],[95,190]]), 45, 'Test 83');
test(interchangeableRectangles([[5,7],[10,14],[15,21],[20,28],[25,35],[30,42],[35,49],[40,56]]), 28, 'Test 84');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

