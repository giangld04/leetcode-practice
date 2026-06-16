// Test: 2271. Maximum White Tiles Covered By A Carpet
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { maximumWhiteTiles } = require("./solution");

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

console.log("\n2271. Maximum White Tiles Covered By A Carpet\n");

test(maximumWhiteTiles([[1,1000000000]], 1000000000), 1000000000, 'Test 1');
test(maximumWhiteTiles([[1,10],[11,20],[21,30]], 15), 15, 'Test 2');
test(maximumWhiteTiles([[1,2],[4,5],[7,8],[10,11]], 3), 2, 'Test 3');
test(maximumWhiteTiles([[5,5],[6,6],[7,7],[8,8],[9,9]], 3), 3, 'Test 4');
test(maximumWhiteTiles([[1,100]], 50), 50, 'Test 5');
test(maximumWhiteTiles([[1,3],[5,7],[9,11]], 10), 8, 'Test 6');
test(maximumWhiteTiles([[3,6],[8,10],[12,15],[18,20]], 8), 7, 'Test 7');
test(maximumWhiteTiles([[3,7],[10,15],[18,20]], 8), 6, 'Test 8');
test(maximumWhiteTiles([[1,10],[20,30],[40,50]], 15), 11, 'Test 9');
test(maximumWhiteTiles([[3,6],[8,10],[12,15]], 5), 4, 'Test 10');
test(maximumWhiteTiles([[1,3],[6,8],[9,12]], 5), 5, 'Test 11');
test(maximumWhiteTiles([[1,3],[6,10],[12,14],[16,18]], 5), 5, 'Test 12');
test(maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]], 10), 9, 'Test 13');
test(maximumWhiteTiles([[10,11],[1,1]], 2), 2, 'Test 14');
test(maximumWhiteTiles([[1,2],[3,4],[5,6],[7,8],[9,10]], 10), 10, 'Test 15');
test(maximumWhiteTiles([[2,5],[8,10],[12,15],[18,25],[30,35],[40,50]], 12), 11, 'Test 16');
test(maximumWhiteTiles([[1,2],[4,8],[10,14],[16,20],[22,26],[28,32],[34,38],[40,44],[46,50]], 10), 9, 'Test 17');
test(maximumWhiteTiles([[1,3],[5,7],[9,11],[13,15],[17,19],[21,23],[25,27],[29,31]], 4), 3, 'Test 18');
test(maximumWhiteTiles([[5,10],[15,20],[25,30],[35,40],[45,50],[55,60],[65,70]], 25), 17, 'Test 19');
test(maximumWhiteTiles([[1,5],[7,10],[15,20],[25,30],[35,40]], 12), 9, 'Test 20');
test(maximumWhiteTiles([[1,2],[4,6],[8,10],[12,14],[16,18],[20,22],[24,26],[28,30],[32,34],[36,38],[40,42]], 10), 8, 'Test 21');
test(maximumWhiteTiles([[1,2],[4,5],[7,8],[10,11],[13,14]], 4), 3, 'Test 22');
test(maximumWhiteTiles([[1,5],[10,15],[20,25],[30,35],[40,45],[50,55],[60,65],[70,75]], 12), 8, 'Test 23');
test(maximumWhiteTiles([[1,100],[200,300],[400,500],[600,700],[800,900]], 150), 101, 'Test 24');
test(maximumWhiteTiles([[1,1000000000]], 500000000), 500000000, 'Test 25');
test(maximumWhiteTiles([[10,15],[20,25],[30,35],[40,45],[50,55],[60,65],[70,75],[80,85],[90,95]], 30), 18, 'Test 26');
test(maximumWhiteTiles([[1,100],[200,300],[400,500],[600,700],[800,900]], 200), 101, 'Test 27');
test(maximumWhiteTiles([[1,5],[10,14],[20,24],[30,34],[40,44],[50,54]], 10), 6, 'Test 28');
test(maximumWhiteTiles([[1,5],[6,10],[11,15],[16,20],[21,25],[26,30],[31,35]], 10), 10, 'Test 29');
test(maximumWhiteTiles([[1,3],[6,8],[11,13],[16,18],[21,23],[26,28],[31,33],[36,38],[41,43],[46,48]], 5), 3, 'Test 30');
test(maximumWhiteTiles([[5,9],[15,29],[35,49],[55,69],[75,89],[95,109]], 20), 15, 'Test 31');
test(maximumWhiteTiles([[10,20],[30,40],[50,60],[70,80],[90,100]], 15), 11, 'Test 32');
test(maximumWhiteTiles([[10,15],[20,25],[30,35],[40,45],[50,55],[60,65],[70,75],[80,85]], 20), 12, 'Test 33');
test(maximumWhiteTiles([[1,10],[20,30],[40,50],[60,70],[80,90]], 15), 11, 'Test 34');
test(maximumWhiteTiles([[1,20],[25,40],[45,60],[65,80],[85,100]], 20), 20, 'Test 35');
test(maximumWhiteTiles([[1,3],[5,7],[9,11],[13,15],[17,19],[21,23],[25,27],[29,31],[33,35],[37,39]], 7), 6, 'Test 36');
test(maximumWhiteTiles([[1,10],[21,30],[41,50],[61,70],[81,90],[101,110]], 20), 10, 'Test 37');
test(maximumWhiteTiles([[10,20],[30,40],[50,60],[70,80],[90,100],[110,120],[130,140],[150,160]], 25), 16, 'Test 38');
test(maximumWhiteTiles([[1,200],[400,600],[800,1000],[1200,1400],[1600,1800]], 350), 201, 'Test 39');
test(maximumWhiteTiles([[1,2],[4,6],[8,10],[12,14],[16,18],[20,22],[24,26],[28,30]], 5), 4, 'Test 40');
test(maximumWhiteTiles([[2,6],[9,14],[17,22],[25,30],[33,38],[41,46]], 20), 16, 'Test 41');
test(maximumWhiteTiles([[5,10],[20,25],[35,40],[55,60],[65,70]], 15), 11, 'Test 42');
test(maximumWhiteTiles([[1,3],[5,7],[9,11],[13,15],[17,19],[21,23],[25,27]], 5), 4, 'Test 43');
test(maximumWhiteTiles([[10,20],[30,40],[50,60],[70,80],[90,100]], 35), 22, 'Test 44');
test(maximumWhiteTiles([[1,5],[8,12],[15,20],[25,30],[35,40]], 15), 11, 'Test 45');
test(maximumWhiteTiles([[1,2],[4,5],[7,8],[10,11],[13,14],[16,17],[19,20]], 3), 2, 'Test 46');
test(maximumWhiteTiles([[2,5],[8,15],[18,25],[30,35],[40,50],[55,60]], 15), 13, 'Test 47');
test(maximumWhiteTiles([[1,2],[4,6],[8,10],[12,14],[16,18],[20,22],[24,26],[28,30]], 7), 6, 'Test 48');
test(maximumWhiteTiles([[1,2],[4,5],[7,8],[10,11],[13,14],[16,17]], 3), 2, 'Test 49');
test(maximumWhiteTiles([[1,5],[10,14],[20,24],[30,34],[40,44],[50,54],[60,64],[70,74],[80,84],[90,94]], 10), 6, 'Test 50');
test(maximumWhiteTiles([[1,20],[25,40],[45,60],[65,80],[85,100]], 30), 26, 'Test 51');
test(maximumWhiteTiles([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]], 4), 7, 'Test 52');
test(maximumWhiteTiles([[1,3],[6,8],[11,13],[16,18],[21,23],[26,28]], 5), 3, 'Test 53');
test(maximumWhiteTiles([[5,10],[20,25],[35,40],[50,55],[60,65],[70,75],[80,85]], 20), 12, 'Test 54');
test(maximumWhiteTiles([[1,3],[5,7],[9,11],[13,15],[17,19],[21,23]], 12), 9, 'Test 55');
test(maximumWhiteTiles([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]], 5), 9, 'Test 56');
test(maximumWhiteTiles([[1,5],[7,15],[20,30],[35,45],[50,60],[65,75]], 12), 11, 'Test 57');
test(maximumWhiteTiles([[1,5],[10,15],[20,25],[30,35],[40,45]], 12), 8, 'Test 58');
test(maximumWhiteTiles([[1,3],[10,12],[20,22],[30,32],[40,42],[50,52],[60,62]], 5), 3, 'Test 59');
test(maximumWhiteTiles([[5,10],[15,20],[25,30],[35,40],[45,50],[55,60]], 15), 11, 'Test 60');
test(maximumWhiteTiles([[1,3],[10,12],[20,22],[30,32],[40,42]], 4), 3, 'Test 61');
test(maximumWhiteTiles([[1,3],[4,6],[7,9],[10,12],[13,15],[16,18],[19,21],[22,24]], 10), 10, 'Test 62');
test(maximumWhiteTiles([[1,3],[5,8],[10,14],[18,22],[26,30],[34,38]], 6), 5, 'Test 63');
test(maximumWhiteTiles([[1,5],[10,14],[19,23],[28,32],[37,41],[46,50]], 10), 6, 'Test 64');
test(maximumWhiteTiles([[1,500000000],[500000001,1000000000]], 600000000), 600000000, 'Test 65');
test(maximumWhiteTiles([[1,2],[4,5],[7,8],[10,11],[13,14],[16,17],[19,20]], 4), 3, 'Test 66');
test(maximumWhiteTiles([[2,5],[8,11],[15,18],[22,25],[29,32]], 10), 8, 'Test 67');
test(maximumWhiteTiles([[1,5],[6,10],[11,15],[16,20],[21,25],[26,30]], 12), 12, 'Test 68');
test(maximumWhiteTiles([[1,2],[5,6],[9,10],[13,14],[17,18],[21,22],[25,26],[29,30]], 3), 2, 'Test 69');
test(maximumWhiteTiles([[1,50],[100,150],[200,250],[300,350],[400,450],[500,550]], 75), 51, 'Test 70');
test(maximumWhiteTiles([[1,3],[6,8],[11,13],[16,18],[21,23],[26,28],[31,33]], 6), 4, 'Test 71');
test(maximumWhiteTiles([[2,4],[8,12],[16,20],[24,28],[32,36]], 8), 5, 'Test 72');
test(maximumWhiteTiles([[1,3],[6,9],[12,15],[18,21],[24,27],[30,33]], 10), 8, 'Test 73');
test(maximumWhiteTiles([[5,7],[10,12],[15,17],[20,22],[25,27],[30,32],[35,37]], 7), 5, 'Test 74');
test(maximumWhiteTiles([[1,5],[7,11],[13,17],[19,23],[25,29],[31,35]], 15), 13, 'Test 75');
test(maximumWhiteTiles([[1,1000000],[2000000,3000000],[4000000,5000000],[6000000,7000000]], 1500000), 1000001, 'Test 76');
test(maximumWhiteTiles([[5,10],[20,25],[35,40],[55,60],[75,80],[95,100]], 30), 12, 'Test 77');
test(maximumWhiteTiles([[1,10],[20,30],[40,50],[60,70],[80,90]], 25), 16, 'Test 78');
test(maximumWhiteTiles([[100,200],[300,400],[500,600],[700,800],[900,1000]], 150), 101, 'Test 79');
test(maximumWhiteTiles([[1,50],[100,150],[200,250],[300,350],[400,450]], 100), 51, 'Test 80');
test(maximumWhiteTiles([[1,5],[10,14],[18,22],[26,30]], 7), 5, 'Test 81');
test(maximumWhiteTiles([[1,10],[20,30],[40,50],[60,70],[80,90],[100,110]], 25), 16, 'Test 82');
test(maximumWhiteTiles([[1,3],[6,8],[11,13],[16,18],[21,23]], 7), 5, 'Test 83');
test(maximumWhiteTiles([[1,2],[4,8],[10,14],[16,20],[22,26],[28,32]], 8), 7, 'Test 84');
test(maximumWhiteTiles([[1,2],[4,6],[8,10],[12,14],[16,18],[20,22],[24,26],[28,30],[32,34]], 10), 8, 'Test 85');
test(maximumWhiteTiles([[1,1000000000]], 999999999), 999999999, 'Test 86');
test(maximumWhiteTiles([[1,100],[200,300],[400,500],[600,700],[800,900]], 100), 100, 'Test 87');
test(maximumWhiteTiles([[1,100],[200,300],[400,500],[600,700],[800,900]], 50), 50, 'Test 88');
test(maximumWhiteTiles([[100,200],[300,400],[500,600],[700,800],[900,1000]], 500), 302, 'Test 89');
test(maximumWhiteTiles([[1,10],[15,20],[25,30],[35,40],[45,50]], 15), 11, 'Test 90');
test(maximumWhiteTiles([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 5), 5, 'Test 91');
test(maximumWhiteTiles([[1,10],[15,20],[25,30],[35,40],[45,50],[55,60],[65,70]], 18), 14, 'Test 92');
test(maximumWhiteTiles([[1,10],[15,20],[25,30],[35,40],[45,50]], 12), 10, 'Test 93');
test(maximumWhiteTiles([[1,5],[6,10],[11,15],[16,20],[21,25]], 15), 15, 'Test 94');
test(maximumWhiteTiles([[1,50],[100,150],[200,250],[300,350],[400,450]], 150), 101, 'Test 95');
test(maximumWhiteTiles([[1,20],[40,60],[80,100],[120,140],[160,180]], 35), 21, 'Test 96');
test(maximumWhiteTiles([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20]], 5), 5, 'Test 97');
test(maximumWhiteTiles([[1,5],[10,20],[25,30],[35,40],[45,50],[55,60]], 10), 10, 'Test 98');
test(maximumWhiteTiles([[100,150],[200,250],[300,350],[400,450],[500,550],[600,650],[700,750]], 100), 51, 'Test 99');
test(maximumWhiteTiles([[1,3],[5,7],[9,11],[13,15],[17,19],[21,23]], 5), 4, 'Test 100');
test(maximumWhiteTiles([[2,5],[8,15],[20,25],[30,40],[45,55]], 12), 11, 'Test 101');
test(maximumWhiteTiles([[5,9],[15,19],[25,29],[35,39],[45,49]], 10), 5, 'Test 102');
test(maximumWhiteTiles([[10,14],[15,19],[20,24],[25,29],[30,34],[35,39]], 15), 15, 'Test 103');
test(maximumWhiteTiles([[1,3],[5,7],[9,11],[13,15],[17,19]], 6), 5, 'Test 104');
test(maximumWhiteTiles([[1,2],[4,5],[7,8],[10,11],[13,14],[16,17],[19,20]], 5), 4, 'Test 105');
test(maximumWhiteTiles([[1,10],[20,30],[40,50],[60,70],[80,90],[100,110]], 15), 11, 'Test 106');
test(maximumWhiteTiles([[1,10],[15,20],[25,30],[35,40],[45,50],[55,60]], 12), 10, 'Test 107');
test(maximumWhiteTiles([[100,200],[300,400],[500,600],[700,800],[900,1000]], 250), 151, 'Test 108');
test(maximumWhiteTiles([[10,20],[30,40],[50,60],[70,80],[90,100],[110,120],[130,140]], 25), 16, 'Test 109');
test(maximumWhiteTiles([[5,10],[15,20],[25,30],[35,40],[45,50]], 15), 11, 'Test 110');
test(maximumWhiteTiles([[1,2],[10,11],[20,21],[30,31],[40,41],[50,51],[60,61],[70,71],[80,81],[90,91]], 2), 2, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

