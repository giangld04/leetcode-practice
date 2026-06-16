// Test: 1452. People Whose List Of Favorite Companies Is Not A Subset Of Another List
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { peopleIndexes } = require("./solution");

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

console.log("\n1452. People Whose List Of Favorite Companies Is Not A Subset Of Another List\n");

test(peopleIndexes([["leetcode"],["google"],["facebook"],["amazon"]]), [0, 1, 2, 3], 'Test 1');
test(peopleIndexes([["apple"],["apple","google"],["google","facebook"],["apple","facebook","google"]]), [3], 'Test 2');
test(peopleIndexes([["tech","innovation"],["startup","tech"],["innovation","startup","tech"]]), [2], 'Test 3');
test(peopleIndexes([["leetcode","google","facebook"],["leetcode","amazon"],["facebook","google"]]), [0, 1], 'Test 4');
test(peopleIndexes([["apple"],["apple","google"],["google","facebook"],["facebook","microsoft"]]), [1, 2, 3], 'Test 5');
test(peopleIndexes([["leetcode","google","facebook"],["google","microsoft"],["google","facebook"],["google"],["amazon"]]), [0, 1, 4], 'Test 6');
test(peopleIndexes([["apple","microsoft"],["google"],["apple","google","microsoft"],["google","microsoft"]]), [2], 'Test 7');
test(peopleIndexes([["apple","banana","cherry"],["banana","cherry"],["banana"],["apple","banana"]]), [0], 'Test 8');
test(peopleIndexes([["apple","banana"],["banana"],["apple","orange"],["banana","orange"],["apple"]]), [0, 2, 3], 'Test 9');
test(peopleIndexes([["apple"],["banana"],["cherry"],["date"],["elderberry"]]), [0, 1, 2, 3, 4], 'Test 10');
test(peopleIndexes([["apple","google"],["google"],["apple","microsoft"],["facebook"]]), [0, 2, 3], 'Test 11');
test(peopleIndexes([["apple","banana"],["banana","cherry","date"],["apple","cherry","date"],["banana","date"],["apple","banana","cherry"]]), [1, 2, 4], 'Test 12');
test(peopleIndexes([["apple","banana","cherry"],["banana","cherry","date"],["apple","cherry","date","fig"],["banana","date","fig","grape"],["apple","banana","cherry","date","fig","grape","kiwi"]]), [4], 'Test 13');
test(peopleIndexes([["google","amazon","facebook"],["google","facebook"],["facebook"],["google"],["amazon"],["google","amazon"],["amazon","facebook"],["google","amazon","facebook"]]), [], 'Test 14');
test(peopleIndexes([["amazon","apple","facebook","google","microsoft"],["google"],["amazon","facebook"],["apple","google","microsoft"],["amazon","google","microsoft","apple","facebook"]]), [], 'Test 15');
test(peopleIndexes([["airbnb","expedia","booking"],["expedia","tripadvisor","kayak"],["booking","tripadvisor","kayak"],["airbnb","tripadvisor","kayak"],["expedia","booking","tripadvisor"],["airbnb","expedia","booking","tripadvisor","kayak"]]), [5], 'Test 16');
test(peopleIndexes([["apple","microsoft","amazon"],["google","facebook","apple"],["amazon","google","microsoft","facebook"],["google"],["microsoft","facebook"]]), [0, 1, 2], 'Test 17');
test(peopleIndexes([["leetcode","google"],["google"],["google","facebook"],["google","facebook","microsoft"],["google","facebook","microsoft","amazon"],["amazon"],["amazon","google"],["amazon","facebook"],["amazon","microsoft"],["amazon","google","facebook","microsoft"]]), [0], 'Test 18');
test(peopleIndexes([["linkedin","facebook","twitter"],["linkedin","google","instagram"],["facebook","instagram"],["google","twitter"],["facebook"],["google"],["twitter"],["instagram"],["linkedin"],["facebook","google","instagram","twitter","linkedin"]]), [9], 'Test 19');
test(peopleIndexes([["apple","banana","cherry"],["banana","cherry"],["cherry","date"],["apple","banana","cherry","date"],["banana","date","apple"],["apple","banana"]]), [3], 'Test 20');
test(peopleIndexes([["apple","banana"],["banana","cherry"],["cherry","date"],["date","fig"],["fig","grape"],["grape","honeydew"],["honeydew","kiwi"],["kiwi","lemon"],["lemon","mango"],["mango","nectarine"],["nectarine","orange"],["orange","papaya"],["papaya","quince"],["quince","raspberry"],["raspberry","strawberry"],["strawberry","tangerine"],["tangerine","ugli"],["ugli","vanilla"],["vanilla","watermelon"],["watermelon","xigua"],["xigua","yam"],["yam","zucchini"],["apple","banana","cherry"],["banana","cherry","date"],["cherry","date","fig"],["date","fig","grape"],["fig","grape","honeydew"],["honeydew","kiwi","lemon"],["kiwi","lemon","mango"],["lemon","mango","nectarine"],["mango","nectarine","orange"],["nectarine","orange","papaya"],["orange","papaya","quince"],["papaya","quince","raspberry"],["quince","raspberry","strawberry"],["raspberry","strawberry","tangerine"],["strawberry","tangerine","ugli"],["tangerine","ugli","vanilla"],["ugli","vanilla","watermelon"],["vanilla","watermelon","xigua"],["watermelon","xigua","yam"],["xigua","yam","zucchini"]]), [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41], 'Test 21');
test(peopleIndexes([["a","b","c","d","e"],["f","g","h","i","j"],["a","b","c","d"],["b","c","d","e"],["a","b","c"],["a","b"],["a"],["b"],["c"],["d"],["e"],["f"],["g"],["h"],["i"],["j"]]), [0, 1], 'Test 22');
test(peopleIndexes([["apple","banana","cherry"],["banana","cherry"],["cherry"],["apple","cherry"],["banana","cherry","date","fig"],["date","fig"]]), [0, 4], 'Test 23');
test(peopleIndexes([["uber","lyft","careem"],["careem","grab","gojek"],["grab","uber","gojek"],["gojek","grab"],["careem","uber","lyft","grab","gojek"]]), [4], 'Test 24');
test(peopleIndexes([["amazon","apple","google"],["google","microsoft"],["facebook","google"],["amazon","google","facebook"],["microsoft","amazon"],["amazon","facebook","google","microsoft"],["apple","google","facebook"]]), [0, 5, 6], 'Test 25');
test(peopleIndexes([["tech","science","arts"],["science","arts","literature"],["tech","science"],["science"],["tech"],["arts"],["literature"],["arts","literature"],["tech","arts","literature"],["tech","science","literature"]]), [0, 1, 8, 9], 'Test 26');
test(peopleIndexes([["tesla","toyota","ford"],["toyota","ford","gm"],["tesla","toyota","gm"],["ford","gm"],["tesla","toyota","ford","gm"],["tesla","gm"]]), [4], 'Test 27');
test(peopleIndexes([["p","q","r"],["q","r","s"],["r","s","t"],["s","t","u"],["t","u","v"],["u","v","w"],["v","w","x"],["w","x","y"],["x","y","z"],["y","z","p"],["z","p","q"],["p","q","r","s"],["q","r","s","t"],["r","s","t","u"],["s","t","u","v"],["t","u","v","w"],["u","v","w","x"],["v","w","x","y"],["w","x","y","z"],["x","y","z","p"]]), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 28');
test(peopleIndexes([["leetcode"],["google"],["facebook"],["amazon"],["apple"],["twitter"],["youtube"],["instagram"],["snapchat"],["linkedin"]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 29');
test(peopleIndexes([["leetcode","google","facebook","amazon"],["google","facebook","microsoft"],["google","amazon"],["amazon"],["google"],["facebook"]]), [0, 1], 'Test 30');
test(peopleIndexes([["netflix","amazon","hulu"],["amazon","hbo","crunchyroll"],["netflix","hbo","crunchyroll"],["hulu","hbo","crunchyroll"],["netflix","amazon","hbo","crunchyroll"],["amazon","hbo"]]), [0, 3, 4], 'Test 31');
test(peopleIndexes([["apple","banana","cherry","date"],["date","fig","grape","honeydew"],["honeydew","kiwi","lemon","mango"],["mango","nectarine","orange","papaya"],["papaya","quince","raspberry","strawberry"],["strawberry","tangerine","ugli","vanilla"],["vanilla","watermelon","xigua","yam"],["yam","zucchini","blueberry","blackberry"],["blueberry","blackberry","cranberry","elderberry"],["elderberry","fig","grape","honeydew"],["honeydew","kiwi","lemon","mango"],["mango","nectarine","orange","papaya"],["papaya","quince","raspberry","strawberry"],["strawberry","tangerine","ugli","vanilla"],["vanilla","watermelon","xigua","yam"],["yam","zucchini","blueberry","blackberry"],["blueberry","blackberry","cranberry","elderberry"],["elderberry","fig","grape","honeydew"],["honeydew","kiwi","lemon","mango"],["mango","nectarine","orange","papaya"]]), [0, 1], 'Test 32');
test(peopleIndexes([["apple","banana"],["banana","cherry","date"],["cherry","date","fig"],["date","fig","grape"],["fig","grape","apple"],["grape","apple","banana"],["apple","banana","cherry","date","fig","grape"]]), [6], 'Test 33');
test(peopleIndexes([["microsoft","apple","google","facebook"],["google","microsoft"],["facebook","apple"],["apple","google","facebook"],["microsoft","apple"],["google","amazon"],["amazon","facebook"],["microsoft","google","facebook"]]), [0, 5, 6], 'Test 34');
test(peopleIndexes([["twitter"],["twitter","instagram"],["twitter","facebook"],["instagram","facebook"],["twitter","instagram","facebook"],["twitter","google"],["google","facebook"],["instagram","google"],["twitter","instagram","google","facebook"]]), [8], 'Test 35');
test(peopleIndexes([["leetcode"],["leetcode","google"],["google","facebook"],["leetcode","facebook"],["facebook","amazon"],["google","amazon","facebook"],["leetcode","amazon","google","facebook"]]), [6], 'Test 36');
test(peopleIndexes([["apple"],["banana"],["cherry"],["date"],["fig"],["grape"],["kiwi"],["lemon"],["mango"],["orange"]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 37');
test(peopleIndexes([["google","apple"],["google","apple","facebook"],["google","facebook"],["apple","facebook","microsoft"],["google","microsoft"],["apple","microsoft"],["google","amazon"],["apple","amazon"],["facebook","amazon"],["google","facebook","amazon","apple","microsoft"]]), [9], 'Test 38');
test(peopleIndexes([["spotify","apple","google"],["apple","google","amazon"],["google","microsoft","apple"],["facebook","google","amazon"],["twitter","google","apple"],["spotify","google","microsoft"],["apple","google","facebook"],["google","amazon","microsoft"],["twitter","facebook","microsoft"],["google","apple","facebook","microsoft","amazon","twitter","spotify"]]), [9], 'Test 39');
test(peopleIndexes([["google","facebook","amazon","apple","microsoft"],["google","facebook"],["google","amazon"],["google","apple"],["google","microsoft"],["facebook","amazon"],["facebook","apple"],["facebook","microsoft"],["amazon","apple"],["amazon","microsoft"],["apple","microsoft"],["google"],["facebook"],["amazon"],["apple"],["microsoft"]]), [0], 'Test 40');
test(peopleIndexes([["a","b","c","d","e"],["b","c","d"],["d","e"],["e","a"],["a","b"],["c","d","e"],["a","b","c"],["b","c"],["c","d"],["d","e"],["e","a"],["a","b"]]), [0], 'Test 41');
test(peopleIndexes([["tech1","tech2","tech3","tech4"],["tech2","tech3"],["tech3","tech4"],["tech4","tech1"],["tech1","tech2"],["tech2","tech3","tech4"],["tech3","tech4","tech1"],["tech4","tech1","tech2"],["tech1","tech2","tech3"]]), [0], 'Test 42');
test(peopleIndexes([["apple","banana","cherry"],["apple","banana"],["banana","cherry"],["apple","cherry"],["date","fig","grape"]]), [0, 4], 'Test 43');
test(peopleIndexes([["x","y","z","w","v"],["y","z"],["z","w"],["w","v"],["v","x"],["x","y"],["y","z","w"],["z","w","v"],["w","v","x"],["v","x","y"],["x","y","z"]]), [0], 'Test 44');
test(peopleIndexes([["spotify","apple","deez","pandora"],["apple","soundcloud","tidal"],["deez","pandora","soundcloud"],["spotify","soundcloud","tidal"],["spotify","apple","deez","pandora","soundcloud","tidal"]]), [4], 'Test 45');
test(peopleIndexes([["uber","lyft","grubhub"],["grubhub","doorDash","postmates"],["lyft","postmates","uber"],["uber","lyft","grubhub","doorDash","postmates"],["postmates","grubhub"],["uber","grubhub","doorDash"],["grubhub","lyft","uber","postmates"],["doorDash","lyft"]]), [3], 'Test 46');
test(peopleIndexes([["pinterest","quora","reddit"],["quora","snapchat","twitter"],["facebook","google","instagram"],["linkedin","pinterest","quora","reddit"],["facebook","google","instagram","linkedin","pinterest"],["pinterest","quora","reddit","snapchat","twitter"],["instagram","linkedin","pinterest","quora","reddit"]]), [4, 5, 6], 'Test 47');
test(peopleIndexes([["tech1","tech2","tech3","tech4"],["tech1","tech2"],["tech2","tech3"],["tech3","tech4"],["tech4","tech1"],["tech2","tech4"],["tech1","tech3"],["tech1","tech2","tech3"],["tech2","tech3","tech4"],["tech1","tech2","tech4"]]), [0], 'Test 48');
test(peopleIndexes([["techcrunch","theverge"],["theverge","recode"],["techcrunch","recode","theverge"],["theverge","cnet"],["recode","cnet","theverge"],["techcrunch","cnet"],["recode","cnet"],["techcrunch","recode","theverge","cnet"],["cnet","theverge"],["recode","theverge","cnet"],["techcrunch","theverge","cnet","recode"],["cnet"],["techcrunch"],["recode"]]), [], 'Test 49');
test(peopleIndexes([["xbox","playstation","nintendo"],["nintendo","sega"],["playstation","nintendo","sega"],["xbox","nintendo"],["playstation","sega"],["xbox","playstation","nintendo","sega"],["xbox","playstation"],["nintendo"]]), [5], 'Test 50');
test(peopleIndexes([["microsoft","amazon","google"],["google"],["amazon"],["microsoft"],["google","amazon"],["google","microsoft"],["microsoft","amazon"],["amazon","google"],["google","microsoft","amazon"],["google","microsoft","amazon","facebook"]]), [9], 'Test 51');
test(peopleIndexes([["a","b","c","d","e","f","g","h"],["b","c"],["c","d","e"],["d","e","f"],["e","f","g"],["f","g","h"],["g","h"],["h"]]), [0], 'Test 52');
test(peopleIndexes([["amazon","ebay","google"],["google","microsoft"],["ebay","microsoft"],["amazon","microsoft"],["amazon","ebay","google","microsoft"]]), [4], 'Test 53');
test(peopleIndexes([["ibm","apple","microsoft"],["apple","google","amazon"],["ibm","google","amazon"],["microsoft","amazon"],["ibm","apple","google","amazon"],["apple","microsoft","google"],["ibm","google"]]), [0, 3, 4, 5], 'Test 54');
test(peopleIndexes([["facebook","instagram"],["instagram","snapchat"],["facebook","snapchat"],["facebook","instagram","snapchat"],["facebook"],["snapchat"],["instagram"]]), [3], 'Test 55');
test(peopleIndexes([["amazon","google","apple"],["google","facebook","microsoft"],["amazon","facebook","apple"],["google","amazon","facebook","microsoft"],["google","apple"]]), [0, 2, 3], 'Test 56');
test(peopleIndexes([["apple","banana"],["banana","cherry"],["cherry","date"],["date","elderberry"],["elderberry","fig"],["fig","grape"],["grape","honeydew"],["honeydew","apple"]]), [0, 1, 2, 3, 4, 5, 6, 7], 'Test 57');
test(peopleIndexes([["apple","banana"],["banana","cherry","date"],["apple","cherry","date"],["banana","date"],["apple","banana","cherry"],["apple","banana","cherry","date"],["apple","banana","cherry","date","fig"]]), [6], 'Test 58');
test(peopleIndexes([["apple"],["banana"],["cherry"],["date"],["elderberry"],["fig"],["grape"],["honeydew"],["kiwi"],["lemon"],["mango"],["nectarine"],["orange"],["papaya"],["quince"],["raspberry"],["strawberry"],["tangerine"],["ugli"],["vanilla"],["watermelon"],["xigua"],["yam"],["zucchini"]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 'Test 59');
test(peopleIndexes([["apple","banana","cherry"],["banana","date","elderberry"],["apple","banana","cherry","date","elderberry"],["cherry","date"],["apple","banana","cherry","date","fig","grape"]]), [2, 4], 'Test 60');
test(peopleIndexes([["apple","banana","cherry"],["banana","cherry","date"],["apple","cherry","date"],["cherry","date","fig"],["apple","banana","date","fig"],["banana","date","fig","grape"],["apple","cherry","fig","grape"],["apple","banana","cherry","date","fig","grape"],["banana","cherry","date","fig","grape","honeydew"],["apple","banana","cherry","date","fig","grape","honeydew"],["apple","banana","cherry","date","fig","grape","honeydew","kiwi"],["banana","cherry","date","fig","grape","honeydew","kiwi"],["apple","banana","cherry","date","fig","grape","honeydew","kiwi","lemon"],["banana","cherry","date","fig","grape","honeydew","kiwi","lemon","mango"],["apple","banana","cherry","date","fig","grape","honeydew","kiwi","lemon","mango"],["banana","cherry","date","fig","grape","honeydew","kiwi","lemon","mango","nectarine"]]), [14, 15], 'Test 61');
test(peopleIndexes([["apple","banana","cherry"],["banana","cherry","date"],["apple","cherry","date"],["banana","date"],["apple","banana","cherry"],["apple","banana"],["banana","cherry"],["cherry","date"],["apple","date"],["date"]]), [1, 2], 'Test 62');
test(peopleIndexes([["apple","banana","cherry"],["cherry","date"],["apple","banana"],["banana","cherry","date"],["apple","banana","cherry","date"]]), [4], 'Test 63');
test(peopleIndexes([["a","b","c","d","e"],["a","b"],["b","c"],["c","d"],["d","e"],["e","a"],["a","c"],["b","d"],["c","e"],["d","a"],["e","b"],["a","b","c"],["b","c","d"],["c","d","e"],["d","e","a"],["e","a","b"]]), [0], 'Test 64');
test(peopleIndexes([["company1"],["company2"],["company3"],["company4"],["company5"],["company6"],["company7"],["company8"],["company9"],["company10"],["company11"],["company12"],["company13"],["company14"],["company15"],["company16"],["company17"],["company18"],["company19"],["company20"],["company21"],["company22"],["company23"],["company24"],["company25"],["company26"],["company27"],["company28"],["company29"],["company30"]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 'Test 65');
test(peopleIndexes([["apple","banana"],["banana","cherry"],["cherry","date"],["date","fig"],["fig","grape"],["grape","honeydew"],["honeydew","kiwi"],["kiwi","lemon"],["lemon","mango"],["mango","nectarine"],["nectarine","orange"],["orange","papaya"],["papaya","quince"],["quince","raspberry"],["raspberry","strawberry"],["strawberry","tangerine"],["tangerine","ugli"],["ugli","vanilla"],["vanilla","watermelon"],["watermelon","xigua"],["xigua","yam"],["yam","zucchini"]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 'Test 66');
test(peopleIndexes([["one","two","three"],["two","three","four"],["three","four","five"],["four","five","six"],["five","six","seven"],["six","seven","eight"],["seven","eight","nine"],["eight","nine","ten"],["nine","ten","one"],["ten","one","two"]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 67');
test(peopleIndexes([["honda","toyota","mazda"],["toyota","nissan","mitsubishi"],["honda","toyota","nissan","mitsubishi"],["mazda","nissan","mitsubishi"],["honda","toyota","mazda","nissan","mitsubishi"]]), [4], 'Test 68');
test(peopleIndexes([["amazon","apple","facebook","google"],["apple","facebook"],["amazon","google"],["facebook","google"],["amazon","facebook","google"],["apple","google"]]), [0], 'Test 69');
test(peopleIndexes([["apple","banana","cherry","date","elderberry"],["banana","cherry","date","fig"],["apple","banana","date","fig","grape"],["cherry","date","fig","grape","honeydew"],["apple","cherry","fig","grape","honeydew"],["banana","cherry","grape","honeydew"]]), [0, 1, 2, 3, 4, 5], 'Test 70');
test(peopleIndexes([["alibaba","tencent","jd"],["tencent","xiami","sina"],["jd","xiami","sina"],["alibaba","tencent","jd","sina"],["xiami","sina"],["alibaba","jd"]]), [1, 2, 3], 'Test 71');
test(peopleIndexes([["apple","banana","cherry","date"],["banana","cherry"],["apple","cherry","date"],["cherry","date"],["apple","banana","cherry"],["banana","date"],["apple","banana","cherry","date","elderberry"],["banana","cherry","date","fig"],["apple","banana","date","fig","grape"],["cherry","date","fig","grape","honeydew"],["apple","cherry","fig","grape","honeydew"],["banana","cherry","grape","honeydew"]]), [6, 7, 8, 9, 10, 11], 'Test 72');
test(peopleIndexes([["google"],["google","facebook"],["google","facebook","amazon"],["google","facebook","amazon","apple"],["google","facebook","amazon","apple","microsoft"],["google","facebook","amazon","apple","microsoft","netflix"],["google","facebook","amazon","apple","microsoft","netflix","spotify"]]), [6], 'Test 73');
test(peopleIndexes([["microsoft","google"],["google","facebook"],["leetcode","google","facebook"],["google"],["amazon"],["microsoft","amazon"],["amazon","google"]]), [0, 2, 5, 6], 'Test 74');
test(peopleIndexes([["apple","google","facebook","microsoft"],["google","facebook","microsoft"],["apple","facebook","microsoft"],["apple","google","microsoft"],["apple","google","facebook"],["facebook","microsoft"],["google","microsoft"],["apple","microsoft"],["apple","google"],["apple","facebook"]]), [0], 'Test 75');
test(peopleIndexes([["netflix","hulu"],["hulu","crunchyroll"],["netflix","crunchyroll"],["netflix","hulu","crunchyroll"],["netflix","hulu","crunchyroll","disney"],["disney"],["netflix"],["hulu"],["crunchyroll"],["netflix","hulu","disney"],["hulu","crunchyroll","disney"],["netflix","crunchyroll","disney"]]), [4], 'Test 76');
test(peopleIndexes([["google","amazon","facebook"],["google","amazon"],["google"],["amazon"],["facebook"],["google","facebook"],["amazon","facebook"]]), [0], 'Test 77');
test(peopleIndexes([["apple","banana","cherry"],["banana","cherry"],["apple","cherry"],["cherry"],["apple","banana"],["banana"]]), [0], 'Test 78');
test(peopleIndexes([["apple","microsoft","google"],["amazon","apple","microsoft"],["apple","google"],["google","microsoft"],["facebook","google","microsoft","amazon"],["apple","banana","cherry"]]), [0, 1, 4, 5], 'Test 79');

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
