// Test: 2456. Most Popular Video Creator
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { mostPopularCreator } = require("./solution");

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

console.log("\n2456. Most Popular Video Creator\n");

test(mostPopularCreator(["eve","eve","eve","eve"], ["a","a","b","b"], [10,20,20,10]), [['eve', 'a']], 'Test 1');
test(mostPopularCreator(["alice","bob","alice","chris"], ["one","two","three","four"], [5,10,5,4]), [['alice', 'one'], ['bob', 'two']], 'Test 2');
test(mostPopularCreator(["john","john","john"], ["x","y","x"], [10,10,10]), [['john', 'x']], 'Test 3');
test(mostPopularCreator(["anna","bob","charlie"], ["a","b","c"], [100,200,300]), [['charlie', 'c']], 'Test 4');
test(mostPopularCreator(["alice","alice","alice"], ["a","b","c"], [1,2,2]), [['alice', 'b']], 'Test 5');
test(mostPopularCreator(["a","b","c","d","e","f","g","h","i","j"], ["id","id","id","id","id","id","id","id","id","id"], [10,9,8,7,6,5,4,3,2,1]), [['a', 'id']], 'Test 6');
test(mostPopularCreator(["alice","bob","charlie","dave","eve"], ["a","b","c","d","e"], [100,200,300,400,500]), [['eve', 'e']], 'Test 7');
test(mostPopularCreator(["frank","frank","frank","frank","frank","frank"], ["one","two","three","four","five","six"], [1000,1000,1000,1000,1000,1000]), [['frank', 'five']], 'Test 8');
test(mostPopularCreator(["alice","alice","alice","bob","bob","bob"], ["x","y","z","x","y","z"], [10,20,30,30,20,10]), [['alice', 'z'], ['bob', 'x']], 'Test 9');
test(mostPopularCreator(["alice","bob","alice","chris","alice"], ["one","two","three","four","five"], [5,10,5,4,15]), [['alice', 'five']], 'Test 10');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice"], ["one","two","three","four","five","six"], [5,10,5,4,10,15]), [['alice', 'six']], 'Test 11');
test(mostPopularCreator(["dave","dave","dave","eve","eve","eve"], ["alpha","beta","gamma","delta","epsilon","delta"], [1,3,2,5,6,5]), [['eve', 'epsilon']], 'Test 12');
test(mostPopularCreator(["alice","bob","alice","bob","charlie","charlie"], ["x","y","z","x","y","z"], [100,200,100,300,150,150]), [['bob', 'x']], 'Test 13');
test(mostPopularCreator(["george","harry","george","harry","george","harry"], ["abc","def","ghi","jkl","mno","pqr"], [100,200,100,200,150,150]), [['harry', 'def']], 'Test 14');
test(mostPopularCreator(["alice","bob","alice","bob","alice","bob","alice"], ["abc","def","ghi","jkl","mno","pqr","stu"], [10,20,10,20,30,40,50]), [['alice', 'stu']], 'Test 15');
test(mostPopularCreator(["dave","eve","eve","eve","dave"], ["x","y","z","y","x"], [30,20,30,40,10]), [['eve', 'y']], 'Test 16');
test(mostPopularCreator(["alice","alice","alice","alice","alice"], ["z","y","x","w","v"], [5,5,5,5,5]), [['alice', 'v']], 'Test 17');
test(mostPopularCreator(["alice","bob","alice","bob","alice","bob"], ["one","two","three","four","five","six"], [5,15,10,10,5,5]), [['bob', 'two']], 'Test 18');
test(mostPopularCreator(["alice","bob","charlie","alice","bob","charlie","alice","bob","charlie"], ["a1","a2","a3","a4","a5","a6","a7","a8","a9"], [1,2,3,4,5,6,7,8,9]), [['charlie', 'a9']], 'Test 19');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice"], ["one","two","three","four","five","six"], [15,25,15,35,25,15]), [['bob', 'five']], 'Test 20');
test(mostPopularCreator(["karen","karen","karen","karen","karen","karen","karen","karen"], ["a","b","c","d","e","f","g","h"], [100,200,100,200,100,200,100,200]), [['karen', 'b']], 'Test 21');
test(mostPopularCreator(["mike","mike","mike","mike","mike","mike","mike"], ["one","two","three","four","five","six","seven"], [10,20,30,40,50,60,70]), [['mike', 'seven']], 'Test 22');
test(mostPopularCreator(["eve","eve","eve","eve","eve"], ["a","b","c","d","e"], [10,20,10,10,20]), [['eve', 'b']], 'Test 23');
test(mostPopularCreator(["a","b","a","b","a","b"], ["aaa","bbb","aaa","bbb","aaa","bbb"], [1,2,3,4,5,6]), [['b', 'bbb']], 'Test 24');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice"], ["one","two","three","four","five","six"], [10,20,5,30,20,15]), [['bob', 'five']], 'Test 25');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice","alice"], ["aaa","bbb","ccc","ddd","eee","fff","ggg"], [1,2,1,3,2,1,2]), [['alice', 'ggg']], 'Test 26');
test(mostPopularCreator(["alice","bob","alice","chris","bob"], ["one","two","three","four","five"], [5,15,5,4,15]), [['bob', 'five']], 'Test 27');
test(mostPopularCreator(["rachel","sam","rachel","sam","rachel","sam"], ["pqr","stu","vwx","yza","bcd","efg"], [5,5,5,5,5,5]), [['rachel', 'bcd'], ['sam', 'efg']], 'Test 28');
test(mostPopularCreator(["anna","anna","anna","anna","anna","anna"], ["x","y","z","x","y","z"], [10,20,30,40,50,60]), [['anna', 'z']], 'Test 29');
test(mostPopularCreator(["creatorA","creatorB","creatorC","creatorA","creatorB","creatorC"], ["videoA","videoB","videoC","videoA","videoB","videoC"], [1000,2000,1500,1000,2500,1500]), [['creatorB', 'videoB']], 'Test 30');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice"], ["aaaaa","bbbbb","ccccc","ddddd","eeeee","fffff"], [1,2,3,4,5,6]), [['alice', 'fffff']], 'Test 31');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice"], ["x","y","z","a","b","c"], [15,25,15,35,35,10]), [['bob', 'b']], 'Test 32');
test(mostPopularCreator(["anna","bob","charlie","dave","eve"], ["aaa","bbb","ccc","ddd","eee"], [100,200,300,400,500]), [['eve', 'eee']], 'Test 33');
test(mostPopularCreator(["alice","bob","alice","chris","bob","alice","chris","eve","eve","eve"], ["one","two","three","four","two","six","seven","eight","nine","ten"], [5,10,5,4,10,15,1,20,20,5]), [['eve', 'eight']], 'Test 34');
test(mostPopularCreator(["frank","frank","frank","frank","frank"], ["a","b","a","c","b"], [100,200,300,100,200]), [['frank', 'a']], 'Test 35');
test(mostPopularCreator(["anna","anna","anna","bob","bob","bob","charlie","charlie","charlie"], ["a","b","c","a","b","c","a","b","c"], [100,200,300,100,200,300,100,200,300]), [['anna', 'c'], ['bob', 'c'], ['charlie', 'c']], 'Test 36');
test(mostPopularCreator(["alice","bob","alice","chris","bob","alice"], ["one","two","three","four","two","six"], [5,10,5,4,10,15]), [['alice', 'six']], 'Test 37');
test(mostPopularCreator(["eve","eve","eve","eve","eve","eve","eve"], ["a","b","c","d","e","f","g"], [10,10,10,10,10,10,10]), [['eve', 'a']], 'Test 38');
test(mostPopularCreator(["alice","alice","alice","alice","alice"], ["a","a","b","b","c"], [10,10,20,20,30]), [['alice', 'c']], 'Test 39');
test(mostPopularCreator(["ivan","ivan","ivan","ivan","ivan","ivan","ivan"], ["vid1","vid2","vid3","vid4","vid5","vid6","vid7"], [1,2,3,4,5,6,7]), [['ivan', 'vid7']], 'Test 40');
test(mostPopularCreator(["eve","eve","eve","eve","eve","eve"], ["aaa","aab","aac","aad","aae","aaf"], [10,10,10,10,10,10]), [['eve', 'aaa']], 'Test 41');
test(mostPopularCreator(["alice","bob","alice","bob","alice","bob"], ["a","b","a","b","a","b"], [10,15,10,20,10,25]), [['bob', 'b']], 'Test 42');
test(mostPopularCreator(["alice","bob","alice","bob","alice","bob"], ["a","a","b","b","c","c"], [10,20,30,40,50,60]), [['bob', 'c']], 'Test 43');
test(mostPopularCreator(["nina","oliver","nina","oliver","nina","oliver"], ["x","y","x","y","x","y"], [1000,1000,1000,1000,1000,1000]), [['nina', 'x'], ['oliver', 'y']], 'Test 44');
test(mostPopularCreator(["anna","bob","charlie","bob","anna"], ["aaa","bbb","ccc","bbb","aaa"], [150,250,350,250,150]), [['bob', 'bbb']], 'Test 45');
test(mostPopularCreator(["a","a","a","b","b","b","c","c"], ["m","n","o","p","q","r","s","t"], [100,200,150,300,400,400,500,600]), [['b', 'q'], ['c', 't']], 'Test 46');
test(mostPopularCreator(["grace","heidi","grace","heidi","grace","heidi"], ["film1","film2","film3","film4","film5","film6"], [500,500,600,600,700,700]), [['grace', 'film5'], ['heidi', 'film6']], 'Test 47');
test(mostPopularCreator(["ivan","ivan","ivan","ivan","ivan","ivan"], ["m","n","m","n","m","n"], [10,20,10,20,10,20]), [['ivan', 'n']], 'Test 48');
test(mostPopularCreator(["alice","bob","alice","chris","chris","bob"], ["one","two","three","four","five","six"], [5,10,5,4,3,15]), [['bob', 'six']], 'Test 49');
test(mostPopularCreator(["alice","alice","alice","alice","alice","alice"], ["a","b","c","d","e","f"], [100000,99999,99998,99997,99996,99995]), [['alice', 'a']], 'Test 50');
test(mostPopularCreator(["nina","nina","nina","nina","nina","nina","nina"], ["a","a","b","b","c","c","d"], [10,20,30,20,30,40,50]), [['nina', 'd']], 'Test 51');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice","alice"], ["abc","bcd","abc","xyz","bcd","abc","xyz"], [10,20,10,30,20,10,30]), [['alice', 'xyz']], 'Test 52');
test(mostPopularCreator(["dave","eve","frank","dave","eve","frank"], ["alpha","beta","gamma","alpha","beta","gamma"], [10,20,10,5,25,15]), [['eve', 'beta']], 'Test 53');
test(mostPopularCreator(["alice","bob","charlie"], ["aaaaa","bbbbb","ccccc"], [100000,100000,100000]), [['alice', 'aaaaa'], ['bob', 'bbbbb'], ['charlie', 'ccccc']], 'Test 54');
test(mostPopularCreator(["alice","bob","alice","chris","alice"], ["one","two","three","four","five"], [5,10,15,4,10]), [['alice', 'three']], 'Test 55');
test(mostPopularCreator(["alice","bob","charlie","alice","bob","charlie"], ["abc","def","ghi","jkl","mno","pqr"], [100,100,100,100,100,100]), [['alice', 'abc'], ['bob', 'def'], ['charlie', 'ghi']], 'Test 56');
test(mostPopularCreator(["dave","dave","dave","dave"], ["abc","abcd","abcde","abcdef"], [100,100,100,100]), [['dave', 'abc']], 'Test 57');
test(mostPopularCreator(["isaac","jack","isaac","jack","isaac","jack"], ["aaa","bbb","ccc","ddd","eee","fff"], [1,2,1,2,1,2]), [['jack', 'bbb']], 'Test 58');
test(mostPopularCreator(["alice","bob","alice","chris","bob","alice","chris"], ["one","two","three","four","two","six","seven"], [5,10,5,4,10,15,1]), [['alice', 'six']], 'Test 59');
test(mostPopularCreator(["tom","jerry","spike","tom","jerry","spike"], ["q","w","e","r","t","y"], [100,200,150,100,200,150]), [['jerry', 't']], 'Test 60');
test(mostPopularCreator(["karen","karen","karen","karen","karen","karen"], ["a","b","c","d","e","f"], [1,2,3,4,5,6]), [['karen', 'f']], 'Test 61');
test(mostPopularCreator(["anna","anna","anna","anna"], ["aaa","bbb","aaa","bbb"], [50,50,50,50]), [['anna', 'aaa']], 'Test 62');
test(mostPopularCreator(["leo","leo","leo","leo","leo"], ["z","y","x","w","v"], [1000,1000,1000,1000,1000]), [['leo', 'v']], 'Test 63');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice","alice"], ["x","y","z","x","y","z","x"], [10,20,10,30,20,10,10]), [['alice', 'x'], ['bob', 'y']], 'Test 64');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice"], ["a","b","c","d","e","f"], [0,0,0,0,0,0]), [['alice', 'a'], ['bob', 'b'], ['charlie', 'd']], 'Test 65');
test(mostPopularCreator(["anna","bob","charlie","anna","bob"], ["a","b","c","d","e"], [100,200,300,50,200]), [['bob', 'b']], 'Test 66');
test(mostPopularCreator(["tom","ulysses","tom","ulysses","tom","ulysses"], ["hello","world","hello","world","hello","world"], [1000,2000,3000,4000,5000,6000]), [['ulysses', 'world']], 'Test 67');
test(mostPopularCreator(["alice","bob","charlie","alice","bob","charlie"], ["aaa","bbb","ccc","ddd","eee","fff"], [1,1,1,1,1,1]), [['alice', 'aaa'], ['bob', 'bbb'], ['charlie', 'ccc']], 'Test 68');
test(mostPopularCreator(["anna","anna","bob","bob","charlie","charlie"], ["a","b","c","d","e","f"], [5,15,10,20,25,30]), [['charlie', 'f']], 'Test 69');
test(mostPopularCreator(["nina","nina","nina","nina","nina","nina","nina","nina","nina","nina"], ["a","b","c","d","e","f","g","h","i","j"], [10,20,10,20,10,20,10,20,10,20]), [['nina', 'b']], 'Test 70');
test(mostPopularCreator(["anna","anna","anna","anna"], ["aaa","aab","aac","aad"], [5,5,5,5]), [['anna', 'aaa']], 'Test 71');
test(mostPopularCreator(["peter","peter","peter","peter","peter"], ["video1","video2","video3","video4","video5"], [500,1000,1000,500,250]), [['peter', 'video2']], 'Test 72');
test(mostPopularCreator(["alice","bob","alice","bob","alice","bob"], ["a","a","b","b","c","c"], [10,20,20,10,30,30]), [['alice', 'c'], ['bob', 'c']], 'Test 73');
test(mostPopularCreator(["alice","alice","bob","bob","alice","bob"], ["a","b","c","d","e","f"], [10,20,30,30,40,10]), [['alice', 'e'], ['bob', 'c']], 'Test 74');
test(mostPopularCreator(["dave","dave","dave","dave"], ["aaa","aab","aac","aad"], [1000,1000,1000,1000]), [['dave', 'aaa']], 'Test 75');
test(mostPopularCreator(["alice","alice","alice","bob","bob"], ["id1","id1","id2","id2","id2"], [10,20,10,5,15]), [['alice', 'id1']], 'Test 76');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice"], ["apple","banana","cherry","date","elderberry","fig"], [100,120,100,130,120,100]), [['alice', 'apple']], 'Test 77');
test(mostPopularCreator(["leo","mike","leo","mike","leo","mike","leo","mike"], ["video1","video2","video3","video4","video5","video6","video7","video8"], [100,200,100,200,100,200,100,200]), [['mike', 'video2']], 'Test 78');
test(mostPopularCreator(["james","james","james","james","james","james","james"], ["v1","v1","v1","v1","v1","v1","v1"], [1000,2000,3000,4000,5000,6000,7000]), [['james', 'v1']], 'Test 79');
test(mostPopularCreator(["alice","bob","charlie","bob","anna","charlie","anna","bob"], ["a","b","c","d","e","f","g","h"], [100,200,300,200,100,300,100,200]), [['bob', 'b'], ['charlie', 'c']], 'Test 80');
test(mostPopularCreator(["alice","alice","bob","bob","bob"], ["abc","def","ghi","jkl","mno"], [50,50,60,60,60]), [['bob', 'ghi']], 'Test 81');
test(mostPopularCreator(["grace","heidi","grace","heidi","grace"], ["alpha","beta","gamma","delta","epsilon"], [500,500,400,300,500]), [['grace', 'alpha']], 'Test 82');
test(mostPopularCreator(["alice","bob","bob","alice","chris"], ["a","b","c","a","d"], [10,20,20,30,5]), [['alice', 'a'], ['bob', 'b']], 'Test 83');
test(mostPopularCreator(["dave","eve","dave","eve","dave"], ["movie","movie","series","series","episode"], [100,100,200,200,50]), [['dave', 'series']], 'Test 84');
test(mostPopularCreator(["eve","eve","eve","eve","eve","eve"], ["a","b","c","d","e","f"], [5,10,15,20,25,30]), [['eve', 'f']], 'Test 85');
test(mostPopularCreator(["karen","leo","mike","leo","karen","mike"], ["a","b","c","d","e","f"], [30,40,30,40,30,40]), [['leo', 'b']], 'Test 86');
test(mostPopularCreator(["eve","eve","eve","eve","eve"], ["x","y","z","x","y"], [10,20,30,10,20]), [['eve', 'z']], 'Test 87');
test(mostPopularCreator(["jane","jane","jane","jane","jane","jane"], ["one","two","three","four","five","six"], [10,10,10,10,10,10]), [['jane', 'five']], 'Test 88');
test(mostPopularCreator(["dave","eve","frank","dave","eve","frank"], ["m","n","o","p","q","r"], [100,200,150,250,175,225]), [['eve', 'n'], ['frank', 'r']], 'Test 89');
test(mostPopularCreator(["eve","eve","eve","eve","eve"], ["x","y","z","x","y"], [10,20,10,20,10]), [['eve', 'x']], 'Test 90');
test(mostPopularCreator(["creator1","creator2","creator1","creator2","creator3"], ["video1","video2","video3","video4","video5"], [100000,100000,100000,100000,100000]), [['creator1', 'video1'], ['creator2', 'video2']], 'Test 91');
test(mostPopularCreator(["anna","anna","anna","bob","bob"], ["a","b","c","a","b"], [100,100,150,200,200]), [['bob', 'a']], 'Test 92');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice","alice"], ["one","two","three","four","five","six","seven"], [5,10,5,4,10,5,10]), [['alice', 'seven']], 'Test 93');
test(mostPopularCreator(["alice","bob","alice","bob","alice"], ["x","y","z","x","y"], [10,20,10,20,30]), [['alice', 'y']], 'Test 94');
test(mostPopularCreator(["alice","bob","alice","bob","alice","bob","alice","bob"], ["a","a","a","a","a","a","a","a"], [1,2,3,4,5,6,7,8]), [['bob', 'a']], 'Test 95');
test(mostPopularCreator(["mike","mike","mike","mike","mike","mike"], ["same","same","same","same","same","same"], [5,5,5,5,5,5]), [['mike', 'same']], 'Test 96');
test(mostPopularCreator(["x","y","z","x","y","z"], ["a","b","c","a","b","c"], [10,10,10,20,20,20]), [['x', 'a'], ['y', 'b'], ['z', 'c']], 'Test 97');
test(mostPopularCreator(["peter","quinn","peter","quinn","peter","quinn"], ["zero","one","zero","one","zero","one"], [500,600,700,800,900,1000]), [['quinn', 'one']], 'Test 98');
test(mostPopularCreator(["anna","anna","anna","anna","anna"], ["z","y","x","w","v"], [5,5,5,5,5]), [['anna', 'v']], 'Test 99');
test(mostPopularCreator(["anna","bob","charlie","anna","bob","anna"], ["x","y","z","x","y","z"], [100,200,300,150,250,50]), [['bob', 'y']], 'Test 100');
test(mostPopularCreator(["z","z","z","y","y","y","x","x","x"], ["a","b","c","a","b","c","a","b","c"], [100,200,150,300,400,400,500,600,650]), [['x', 'c']], 'Test 101');
test(mostPopularCreator(["alice","bob","alice","charlie","bob","alice"], ["abc","bcd","cba","xyz","zyx","bac"], [50,75,50,100,75,50]), [['alice', 'abc'], ['bob', 'bcd']], 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

