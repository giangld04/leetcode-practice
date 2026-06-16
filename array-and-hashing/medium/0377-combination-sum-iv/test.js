// Test: 377. Combination Sum Iv
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { combinationSum4 } = require("./solution");

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

console.log("\n377. Combination Sum Iv\n");

test(combinationSum4([1,5,10], 100), 8437020668201, 'Test 1');
test(combinationSum4([10,20,30], 100), 274, 'Test 2');
test(combinationSum4([1,2,3], 4), 7, 'Test 3');
test(combinationSum4([5,50,75], 95), 16, 'Test 4');
test(combinationSum4([5,1,3], 8), 19, 'Test 5');
test(combinationSum4([5,10,20], 100), 46754, 'Test 6');
test(combinationSum4([2,1,5], 10), 128, 'Test 7');
test(combinationSum4([4,2,1], 32), 39882198, 'Test 8');
test(combinationSum4([9], 3), 0, 'Test 9');
test(combinationSum4([1], 100), 1, 'Test 10');
test(combinationSum4([2,5,10,20], 25), 119, 'Test 11');
test(combinationSum4([1,2,3,4,5], 50), 256641310658978, 'Test 12');
test(combinationSum4([3,33,333], 33333), 536100562017203100794406478687994186977009406170595938319227925094657614236234534558497196506399133621225707174188255190262018651187114351423083457111666117940448620061113293355456633188716465870563000681683793687796224312428969140578915943823395340466419187662119723474059441129216706040810975420885186072698747890615839765847357654198486205747679514159771503546254190608498526147691685468717339503106831214240554923976550226131423821899358941678177012767249757000151516175351605183646515289758127657594483351312820284135270121698193471863249963552248305706529133764410797262033127315996385879310273241411999616601791470886920119787124471456014799082324567146236951447774466096290384104870153132091954155668459053293520897201265795242933843325164440604889046037137996023050079472589183707593322481815544873436357989, 'Test 13');
test(combinationSum4([2,1,5], 8), 44, 'Test 14');
test(combinationSum4([15,25,5,50,100], 100), 4600, 'Test 15');
test(combinationSum4([7,14], 300), 0, 'Test 16');
test(combinationSum4([1,2,5], 50), 237139442616, 'Test 17');
test(combinationSum4([1,2,3,4,5], 10), 464, 'Test 18');
test(combinationSum4([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 20), 10000000000, 'Test 19');
test(combinationSum4([4, 11, 3, 4, 1], 21), 46333, 'Test 20');
test(combinationSum4([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 20), 104857600000000000000000000, 'Test 21');
test(combinationSum4([10, 20, 30], 50), 13, 'Test 22');
test(combinationSum4([1, 2, 5], 25), 382396, 'Test 23');
test(combinationSum4([18, 23, 50, 51], 200), 493, 'Test 24');
test(combinationSum4([33, 29, 40, 12, 54, 23, 67, 34, 74], 1000), 1004803376074700418269474690624, 'Test 25');
test(combinationSum4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 551742150354112, 'Test 26');
test(combinationSum4([1, 2, 3, 4, 5], 50), 256641310658978, 'Test 27');
test(combinationSum4([7, 14, 21, 28], 100), 0, 'Test 28');
test(combinationSum4([1, 2, 4, 8, 16, 32, 64], 256), 1054787931172699885204409659786242855354657339703519197691828406, 'Test 29');
test(combinationSum4([10, 15, 20, 25, 30, 35, 40, 45, 50], 500), 154640480926757717819, 'Test 30');
test(combinationSum4([999, 1000], 1999), 2, 'Test 31');
test(combinationSum4([3, 6, 9, 12], 100), 0, 'Test 32');
test(combinationSum4([2, 5, 10, 20], 30), 417, 'Test 33');
test(combinationSum4([5, 10, 25, 50], 100), 27517, 'Test 34');
test(combinationSum4([1, 2, 4, 8, 16], 32), 47350055, 'Test 35');
test(combinationSum4([10, 20, 30, 40], 100), 401, 'Test 36');
test(combinationSum4([1, 10, 25, 50], 100), 37971048, 'Test 37');
test(combinationSum4([4, 8, 15, 16, 23, 42], 100), 878907, 'Test 38');
test(combinationSum4([1, 2, 3, 4, 5], 200), 27870089767928389254900226744638057842249669417272614584184, 'Test 39');
test(combinationSum4([2, 3, 5], 30), 15778, 'Test 40');
test(combinationSum4([2, 6, 10, 14, 18, 22, 26, 30], 300), 9697818790261047025454697667566, 'Test 41');
test(combinationSum4([1, 2], 100), 573147844013817084101, 'Test 42');
test(combinationSum4([1, 3, 6, 9, 12, 15, 18], 100), 9103419367826082596, 'Test 43');
test(combinationSum4([1, 2, 4, 5], 15), 4185, 'Test 44');
test(combinationSum4([1, 2, 5, 10, 20, 50], 1000), 55418612077363252135298307641829396865446477611253299547057401338234391162164785712545427782637930869475332856306540999148459057137429772224203347607997227631647056712144679002353744573917660746726513112253869324256573236618890333589, 'Test 45');
test(combinationSum4([3, 7, 15], 120), 92796380, 'Test 46');
test(combinationSum4([2, 3, 6, 7], 100), 2724220005886008, 'Test 47');
test(combinationSum4([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 120), 541461698816, 'Test 48');
test(combinationSum4([7, 14, 21, 28, 35], 100), 0, 'Test 49');
test(combinationSum4([4, 10, 40, 100], 150), 3504031, 'Test 50');
test(combinationSum4([3, 7, 8], 11), 2, 'Test 51');
test(combinationSum4([2, 3, 6, 7, 9], 20), 576, 'Test 52');
test(combinationSum4([2, 3, 7, 8, 10], 200), 3100714643409982098043972616729, 'Test 53');
test(combinationSum4([50, 25, 75, 20, 10], 200), 197308, 'Test 54');
test(combinationSum4([1, 5, 10, 25], 100), 8577828731901, 'Test 55');
test(combinationSum4([3, 33, 333], 1000), 0, 'Test 56');
test(combinationSum4([1, 10, 100, 1000], 1111), 367666448776500415514786890083984627942520976458183669725570752318436882775368470747436, 'Test 57');
test(combinationSum4([2, 3, 6, 7], 12), 26, 'Test 58');
test(combinationSum4([3, 6, 9, 12], 30), 401, 'Test 59');
test(combinationSum4([1, 5, 10], 25), 915, 'Test 60');
test(combinationSum4([2, 3, 6, 7, 10], 300), 1885220157798436983841368320280668830805551392497, 'Test 61');
test(combinationSum4([100, 200, 300, 400, 500], 1000), 464, 'Test 62');
test(combinationSum4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 500), 1286219641702273366742255356065111897930066144490719649670364060629213518690220561526989033769595304532418065557510304805412593714309986391307281509696, 'Test 63');
test(combinationSum4([3, 7, 11, 15, 19, 23, 27, 31], 300), 14374578728716948696671279, 'Test 64');
test(combinationSum4([5, 8, 12, 16, 20, 24, 28, 32, 36, 40], 500), 42034412043805359239945977920635459, 'Test 65');
test(combinationSum4([2, 5, 10, 20], 100), 11826629775, 'Test 66');
test(combinationSum4([10, 20, 30, 40, 50], 150), 13624, 'Test 67');
test(combinationSum4([1, 2, 5, 10], 100), 119179977936469835383520, 'Test 68');
test(combinationSum4([3, 8, 10], 120), 317567468, 'Test 69');
test(combinationSum4([1, 2, 3, 4, 5], 15), 13624, 'Test 70');
test(combinationSum4([1, 3, 5, 7, 9], 25), 70464, 'Test 71');
test(combinationSum4([33, 39, 45, 51, 60], 150), 29, 'Test 72');
test(combinationSum4([3, 5, 7, 8, 9], 50), 252672, 'Test 73');
test(combinationSum4([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 100), 0, 'Test 74');
test(combinationSum4([5, 50, 500], 1000), 1816691941426948, 'Test 75');
test(combinationSum4([1, 2, 3, 4, 5], 10), 464, 'Test 76');
test(combinationSum4([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 250), 551742150354112, 'Test 77');
test(combinationSum4([15, 25, 35, 45], 200), 6259, 'Test 78');
test(combinationSum4([1, 5, 10], 50), 1919938, 'Test 79');
test(combinationSum4([10, 20, 30], 100), 274, 'Test 80');
test(combinationSum4([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 300), 222217726411850455445265344483183426006475036048672509776477817, 'Test 81');
test(combinationSum4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100), 606147434557459526483161067501, 'Test 82');
test(combinationSum4([50, 150, 250, 350, 450], 1000), 6475, 'Test 83');
test(combinationSum4([50, 25, 75, 125], 250), 331, 'Test 84');
test(combinationSum4([5, 10, 15, 20, 25, 30], 100), 463968, 'Test 85');
test(combinationSum4([1, 5, 10, 25, 50, 100], 1000), 3861392372529553044883315945420265874789274045115117175074863427403559146375333246873046775291634059748511012129487397547119298455362, 'Test 86');
test(combinationSum4([15, 25, 35], 100), 25, 'Test 87');
test(combinationSum4([1, 2, 4, 8, 16], 100), 3001542533296576909276367, 'Test 88');
test(combinationSum4([2, 4, 6, 8, 10], 20), 464, 'Test 89');
test(combinationSum4([1, 3, 4, 5, 6], 20), 22750, 'Test 90');
test(combinationSum4([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 500), 353368918335207375428, 'Test 91');
test(combinationSum4([1, 3, 4], 10), 64, 'Test 92');
test(combinationSum4([1, 10, 100, 1000], 1000), 753729672939848505929078336767198285353713318174400841581842662144837938547270, 'Test 93');
test(combinationSum4([1, 5, 10, 25], 50), 1931845, 'Test 94');
test(combinationSum4([2, 3, 6, 7], 15), 78, 'Test 95');
test(combinationSum4([1, 3, 4, 5], 13), 424, 'Test 96');
test(combinationSum4([13, 17, 19, 23, 29], 100), 256, 'Test 97');
test(combinationSum4([3, 5, 7, 10], 20), 35, 'Test 98');
test(combinationSum4([2, 3, 6, 7], 30), 19096, 'Test 99');
test(combinationSum4([7, 14, 28], 1000), 0, 'Test 100');
test(combinationSum4([2, 3, 6, 7, 9], 120), 14544576409221128865, 'Test 101');
test(combinationSum4([7, 14, 21, 28, 35], 105), 13624, 'Test 102');
test(combinationSum4([7, 14, 28, 35, 56], 100), 0, 'Test 103');
test(combinationSum4([4, 7, 9], 20), 7, 'Test 104');
test(combinationSum4([3, 5, 10, 15], 50), 12043, 'Test 105');
test(combinationSum4([15, 25, 35], 1000), 48781528629177572921, 'Test 106');
test(combinationSum4([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 50), 12574441114, 'Test 107');
test(combinationSum4([3, 5, 7], 15), 8, 'Test 108');
test(combinationSum4([1, 2, 4, 8, 16, 32, 64, 128], 256), 1054787931172699885204409659788147413348784265452313995416385159, 'Test 109');
test(combinationSum4([3, 5, 10, 20], 1000), 214391693407662746979155838789092372951985494367397337570037572730823254282910703400057102167, 'Test 110');
test(combinationSum4([1, 5, 10, 25, 50, 100], 200), 169121161302579810731290745, 'Test 111');
test(combinationSum4([3, 5, 7, 9], 150), 12883204547325702, 'Test 112');
test(combinationSum4([4, 10, 40, 25], 100), 18984, 'Test 113');
test(combinationSum4([1, 2, 4, 8, 16], 31), 26805983, 'Test 114');
test(combinationSum4([10, 20, 30, 40, 50], 200), 400096, 'Test 115');
test(combinationSum4([1, 100, 101, 102], 300), 45158, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

