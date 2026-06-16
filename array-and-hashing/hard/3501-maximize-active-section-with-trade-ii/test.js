// Test: 3501. Maximize Active Section With Trade Ii
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { maxActiveSectionsAfterTrade } = require("./solution");

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

console.log("\n3501. Maximize Active Section With Trade Ii\n");

test(maxActiveSectionsAfterTrade("0100", [[0,3],[0,2],[1,3],[2,3]]), [4, 3, 1, 1], 'Test 1');
test(maxActiveSectionsAfterTrade("01", [[0,1]]), [1], 'Test 2');
test(maxActiveSectionsAfterTrade("01010", [[0,3],[1,4],[1,3]]), [4, 4, 2], 'Test 3');
test(maxActiveSectionsAfterTrade("1000100", [[1,5],[0,6],[0,4]]), [6, 7, 2], 'Test 4');
test(maxActiveSectionsAfterTrade("111111111111111111111111111111111111111111111111", [[0,39],[1,38],[2,37],[3,36],[4,35],[5,34],[6,33],[7,32],[8,31],[9,30]]), [48, 48, 48, 48, 48, 48, 48, 48, 48, 48], 'Test 5');
test(maxActiveSectionsAfterTrade("10010010010010010010010010010010010010010010010010", [[0,99],[10,20],[30,40],[50,60]]), Error: list index out of range, 'Test 6');
test(maxActiveSectionsAfterTrade("11111111111111111", [[0,16],[1,15],[2,14],[5,11],[3,12]]), [17, 17, 17, 17, 17], 'Test 7');
test(maxActiveSectionsAfterTrade("01010101010101010101010101010101010101010101010101", [[0,99],[10,20],[30,40],[50,60]]), Error: list index out of range, 'Test 8');
test(maxActiveSectionsAfterTrade("10000000010000000001000000001", [[0,20],[5,15],[10,19]]), [21, 14, 4], 'Test 9');
test(maxActiveSectionsAfterTrade("11001100110011001100110011001100110011001100", [[0,79],[1,78],[2,77],[3,76],[4,75],[5,74],[6,73],[7,72],[8,71],[9,70]]), Error: list index out of range, 'Test 10');
test(maxActiveSectionsAfterTrade("000000000000000000000000000000000000000000000000", [[0,39],[1,38],[2,37],[3,36],[4,35],[5,34],[6,33],[7,32],[8,31],[9,30]]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 11');
test(maxActiveSectionsAfterTrade("1001001001001001001001001001001001", [[0,47],[1,46],[2,45],[3,44],[4,43],[5,42],[6,41],[7,40],[8,39],[9,38]]), Error: list index out of range, 'Test 12');
test(maxActiveSectionsAfterTrade("0110011001100110011001100110011001100110011001100110", [[0,59],[1,58],[2,57],[3,56],[4,55],[5,54],[6,53],[7,52],[8,51],[9,50]]), Error: list index out of range, 'Test 13');
test(maxActiveSectionsAfterTrade("11001100110011001100110011", [[0,20],[5,15],[0,9],[10,19],[15,25]]), [18, 18, 18, 18, 18], 'Test 14');
test(maxActiveSectionsAfterTrade("111100001111000011110000", [[0,23],[4,19],[5,18],[6,17],[7,16],[8,15],[9,14],[10,13],[11,12]]), [20, 20, 19, 18, 17, 12, 12, 12, 12], 'Test 15');
test(maxActiveSectionsAfterTrade("10001000100010001000100010001000100010001000100010", [[0,99],[10,20],[30,40],[50,60]]), Error: list index out of range, 'Test 16');
test(maxActiveSectionsAfterTrade("00000000000000000000000000000000000000000000000000", [[0,99],[10,20],[30,40],[50,60]]), Error: list index out of range, 'Test 17');
test(maxActiveSectionsAfterTrade("10101010101010101010101010101010101010101010101010", [[0,99],[10,20],[30,40],[50,60]]), Error: list index out of range, 'Test 18');
test(maxActiveSectionsAfterTrade("100100010000100000000100000", [[0,28],[1,27],[2,26],[3,25],[4,24]]), Error: list index out of range, 'Test 19');
test(maxActiveSectionsAfterTrade("1001001001001001001001001", [[0,24],[2,22],[3,21],[4,20],[5,19],[6,18],[7,17],[8,16],[9,15],[10,14],[11,13]]), [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 11], 'Test 20');
test(maxActiveSectionsAfterTrade("00100100100100100100", [[0,21],[1,20],[2,19],[3,18],[4,17]]), Error: list index out of range, 'Test 21');
test(maxActiveSectionsAfterTrade("001100110011001100", [[0,19],[3,16],[4,15],[5,14],[6,13],[7,12]]), Error: list index out of range, 'Test 22');
test(maxActiveSectionsAfterTrade("00101010101010101010", [[0,9],[5,15],[10,19]]), [12, 11, 11], 'Test 23');
test(maxActiveSectionsAfterTrade("111110000000000000011111", [[0,24],[1,23],[2,22],[3,21],[4,20],[5,19],[6,18],[7,17],[8,16],[9,15],[10,14]]), Error: list index out of range, 'Test 24');
test(maxActiveSectionsAfterTrade("101010101010101010101010", [[0,20],[5,15],[0,9],[10,19],[15,25]]), Error: list index out of range, 'Test 25');
test(maxActiveSectionsAfterTrade("10101010101010101010101010", [[0,25],[1,24],[2,23],[3,22],[4,21]]), [15, 15, 15, 15, 15], 'Test 26');
test(maxActiveSectionsAfterTrade("101010101010101010101010101010101010101010101010101010101010", [[0,59],[1,58],[2,57],[3,56],[4,55],[5,54],[6,53],[7,52],[8,51],[9,50]]), [32, 32, 32, 32, 32, 32, 32, 32, 32, 32], 'Test 27');
test(maxActiveSectionsAfterTrade("1111111010101010101010101010101010101010101010101010", [[0,99],[10,20],[30,40],[50,60]]), Error: list index out of range, 'Test 28');
test(maxActiveSectionsAfterTrade("0000000000000000000000000000000000000000000000000000000000000000", [[0,50],[25,75],[100,150]]), Error: list index out of range, 'Test 29');
test(maxActiveSectionsAfterTrade("101010101010101010", [[0,19],[2,17],[3,16],[4,15],[5,14],[6,13]]), Error: list index out of range, 'Test 30');
test(maxActiveSectionsAfterTrade("01010100100100100100100100100100100100100100100100", [[0,99],[10,20],[30,40],[50,60]]), Error: list index out of range, 'Test 31');
test(maxActiveSectionsAfterTrade("111000111000111", [[0,14],[1,13],[2,12],[3,11],[4,10]]), [15, 15, 15, 15, 13], 'Test 32');
test(maxActiveSectionsAfterTrade("000011110000111100001111", [[0,23],[4,19],[5,18],[6,17],[7,16],[8,15],[9,14],[10,13],[11,12]]), [20, 20, 19, 18, 17, 12, 12, 12, 12], 'Test 33');
test(maxActiveSectionsAfterTrade("1100110110011001101", [[0,20],[5,15],[10,19]]), Error: list index out of range, 'Test 34');
test(maxActiveSectionsAfterTrade("1101001001001001001001001001001001001001001001001001001001001011", [[0,60],[10,70],[20,80]]), Error: list index out of range, 'Test 35');
test(maxActiveSectionsAfterTrade("010101010101010101", [[0,18],[1,17],[2,16],[3,15],[4,14]]), Error: list index out of range, 'Test 36');
test(maxActiveSectionsAfterTrade("111000111000", [[0,11],[3,8],[4,7],[5,6]]), [12, 6, 6, 6], 'Test 37');
test(maxActiveSectionsAfterTrade("01010101010101010101010101010101", [[0,15],[15,30],[0,29]]), [18, 18, 18], 'Test 38');
test(maxActiveSectionsAfterTrade("11001010010010100100101001001010010010100100101001", [[0,99],[10,20],[30,40],[50,60]]), Error: list index out of range, 'Test 39');
test(maxActiveSectionsAfterTrade("010101010101010101010101010101010101010101010101", [[0,20],[21,41],[42,62],[63,83],[0,100]]), Error: list index out of range, 'Test 40');
test(maxActiveSectionsAfterTrade("0101010101010101010101010101010101010101", [[0,63],[1,62],[2,61],[3,60],[4,59],[5,58],[6,57],[7,56],[8,55],[9,54]]), Error: list index out of range, 'Test 41');
test(maxActiveSectionsAfterTrade("10101010101010101010", [[0,19],[1,18],[2,17],[3,16],[4,15],[5,14],[6,13],[7,12],[8,11],[9,10]]), [12, 12, 12, 12, 12, 12, 12, 12, 12, 10], 'Test 42');
test(maxActiveSectionsAfterTrade("111111111111111111111111111111111111111111111111111111111111", [[0,69],[1,68],[2,67],[3,66],[4,65],[5,64],[6,63],[7,62],[8,61],[9,60]]), Error: list index out of range, 'Test 43');
test(maxActiveSectionsAfterTrade("1001001001001001001", [[0,18],[1,17],[2,16],[5,13],[3,14]]), [11, 11, 11, 11, 11], 'Test 44');
test(maxActiveSectionsAfterTrade("11110000111100001111", [[0,9],[5,15],[10,19]]), [12, 19, 12], 'Test 45');
test(maxActiveSectionsAfterTrade("1010101010", [[0,9],[1,8],[2,7],[3,6]]), [7, 7, 7, 7], 'Test 46');
test(maxActiveSectionsAfterTrade("1001001001001001001001001001001001001001001001001001", [[0,30],[31,60],[61,90],[91,120],[0,120]]), Error: list index out of range, 'Test 47');
test(maxActiveSectionsAfterTrade("1000000000000000000000000000000000000000000000000000", [[0,99],[1,98],[2,97],[3,96],[4,95],[5,94],[6,93],[7,92],[8,91],[9,90]]), Error: list index out of range, 'Test 48');
test(maxActiveSectionsAfterTrade("0110011001100110011001100110011001100110011000", [[0,50],[1,49],[2,48],[5,45],[3,47]]), Error: list index out of range, 'Test 49');
test(maxActiveSectionsAfterTrade("010101010101010101010101010101010101010101010101", [[0,99],[1,98],[2,97],[3,96],[4,95],[5,94],[6,93],[7,92],[8,91],[9,90]]), Error: list index out of range, 'Test 50');
test(maxActiveSectionsAfterTrade("0000011111000001111100000111110000011111", [[0,9],[10,19],[20,29],[30,39],[0,39]]), [20, 20, 20, 20, 30], 'Test 51');
test(maxActiveSectionsAfterTrade("1100001100011110001000000011001", [[5,15],[2,20],[0,30],[10,25]]), [16, 19, 22, 22], 'Test 52');
test(maxActiveSectionsAfterTrade("00000100000100000", [[0,14],[1,13],[2,12],[5,10],[3,8]]), [12, 11, 10, 2, 7], 'Test 53');
test(maxActiveSectionsAfterTrade("11111111111111111111", [[0,20],[1,19],[2,18],[3,17],[4,16]]), Error: list index out of range, 'Test 54');
test(maxActiveSectionsAfterTrade("100000000000000000000000000000000000000000000000000000000000000000000000000000000000", [[0,99],[1,98],[2,97],[3,96],[4,95]]), Error: list index out of range, 'Test 55');
test(maxActiveSectionsAfterTrade("00000000000000000", [[0,16],[1,15],[2,14],[5,11],[3,12]]), [0, 0, 0, 0, 0], 'Test 56');
test(maxActiveSectionsAfterTrade("01101001010110010", [[0,4],[4,8],[8,14],[1,18]]), Error: list index out of range, 'Test 57');
test(maxActiveSectionsAfterTrade("0101010101010101010", [[0,18],[1,17],[2,16],[5,13],[3,14]]), [11, 11, 11, 11, 11], 'Test 58');
test(maxActiveSectionsAfterTrade("000100010001000100010001000100010001000100010001000100010001", [[0,59],[1,58],[2,57],[3,56],[4,55],[5,54],[6,53],[7,52],[8,51],[9,50]]), [21, 21, 21, 21, 21, 21, 21, 21, 21, 21], 'Test 59');
test(maxActiveSectionsAfterTrade("00000000000000000000", [[0,20],[5,15],[0,9],[10,19]]), Error: list index out of range, 'Test 60');
test(maxActiveSectionsAfterTrade("11111111111111111111111111111111111111111111111111", [[0,99],[10,20],[30,40],[50,60]]), Error: list index out of range, 'Test 61');
test(maxActiveSectionsAfterTrade("10101010101010101", [[0,16],[1,15],[2,14],[5,11],[3,12]]), [11, 11, 11, 11, 11], 'Test 62');
test(maxActiveSectionsAfterTrade("0101010101", [[0,9],[1,8],[2,7],[3,6]]), [7, 7, 7, 7], 'Test 63');
test(maxActiveSectionsAfterTrade("01010101010101010101010101", [[0,25],[1,24],[2,23],[3,22],[4,21]]), [15, 15, 15, 15, 15], 'Test 64');
test(maxActiveSectionsAfterTrade("1100110011", [[0,9],[1,8],[2,7],[3,6],[4,5]]), [10, 10, 10, 8, 6], 'Test 65');
test(maxActiveSectionsAfterTrade("1001001001", [[0,9],[1,8],[2,7],[3,6],[4,5]]), [8, 8, 7, 4, 4], 'Test 66');
test(maxActiveSectionsAfterTrade("1100110011001100110011", [[0,23],[1,22],[2,21],[3,20],[4,19],[5,18],[6,17],[7,16],[8,15],[9,14]]), Error: list index out of range, 'Test 67');
test(maxActiveSectionsAfterTrade("1001001001001001001", [[0,18],[1,17],[2,16],[3,15],[4,14]]), [11, 11, 11, 11, 11], 'Test 68');
test(maxActiveSectionsAfterTrade("0000000000", [[0,9],[2,7],[4,6]]), [0, 0, 0], 'Test 69');
test(maxActiveSectionsAfterTrade("0000011111111100000", [[0,20],[1,19],[2,18],[3,17],[4,16]]), Error: list index out of range, 'Test 70');
test(maxActiveSectionsAfterTrade("1001001001001001001001001001001", [[0,20],[5,15],[0,9],[10,19],[15,25],[25,35]]), Error: list index out of range, 'Test 71');
test(maxActiveSectionsAfterTrade("1111111111", [[0,9],[2,7],[4,6]]), [10, 10, 10], 'Test 72');
test(maxActiveSectionsAfterTrade("110001100110001", [[0,14],[1,13],[2,12],[5,10],[3,8]]), [12, 12, 12, 7, 11], 'Test 73');
test(maxActiveSectionsAfterTrade("0000011111000001111100000", [[0,24],[1,23],[2,22],[3,21],[4,20],[5,19],[6,18],[7,17],[8,16],[9,15]]), [20, 19, 18, 17, 16, 10, 10, 10, 10, 10], 'Test 74');
test(maxActiveSectionsAfterTrade("100100100100100", [[0,14],[1,13],[2,12],[3,11],[4,10],[5,9]]), [9, 9, 9, 9, 9, 8], 'Test 75');
test(maxActiveSectionsAfterTrade("1001001001001", [[0,12],[2,9],[3,8],[4,7],[5,6]]), [9, 9, 9, 8, 5], 'Test 76');
test(maxActiveSectionsAfterTrade("1100110011001100110011001100110011001100110011", [[0,50],[1,49],[2,48],[5,45],[3,47]]), Error: list index out of range, 'Test 77');
test(maxActiveSectionsAfterTrade("1001001001001001001001001001001001001001001001001001001001001", [[0,50],[25,75],[100,150]]), Error: list index out of range, 'Test 78');
test(maxActiveSectionsAfterTrade("01010101010101010101010101010101010101010101010101010101010101010101010101010101", [[0,99],[1,98],[2,97],[3,96],[4,95],[5,94],[6,93],[7,92],[8,91],[9,90]]), Error: list index out of range, 'Test 79');
test(maxActiveSectionsAfterTrade("1000000001", [[1,8],[0,9],[2,7],[3,6]]), [2, 2, 2, 2], 'Test 80');
test(maxActiveSectionsAfterTrade("0000011110001110000", [[0,18],[1,17],[2,16],[3,15],[4,14],[5,13]]), [15, 14, 13, 12, 11, 7], 'Test 81');
test(maxActiveSectionsAfterTrade("00110011001100110", [[0,16],[1,15],[2,14],[5,11],[3,12]]), [12, 12, 12, 11, 12], 'Test 82');
test(maxActiveSectionsAfterTrade("00000000000000000000", [[0,20],[1,19],[2,18],[3,17],[4,16]]), Error: list index out of range, 'Test 83');
test(maxActiveSectionsAfterTrade("11111111111111111111", [[0,20],[5,15],[0,9],[10,19]]), Error: list index out of range, 'Test 84');

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
