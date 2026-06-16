// Test: 1604. Alert Using Same Key Card Three Or More Times In A One Hour Period
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { alertNames } = require("./solution");

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

console.log("\n1604. Alert Using Same Key Card Three Or More Times In A One Hour Period\n");

test(alertNames(["daniel","daniel","daniel","luis","luis","luis","luis"], ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]), ['daniel'], 'Test 1');
test(alertNames(["amy","amy","amy","adam","adam","adam","adam"], ["12:00","12:05","12:10","09:00","09:15","09:30","09:45"]), ['adam', 'amy'], 'Test 2');
test(alertNames(["alice","alice","alice","bob","bob","bob","bob"], ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]), ['bob'], 'Test 3');
test(alertNames(["john","john","john"], ["09:15","09:30","10:00"]), ['john'], 'Test 4');
test(alertNames(["amy","david","david"], ["12:00","12:00","13:00"]), [], 'Test 5');
test(alertNames(["eve","eve","eve","eve","eve"], ["08:00","08:20","08:40","09:00","09:20"]), ['eve'], 'Test 6');
test(alertNames(["chris","chris","chris"], ["09:00","09:30","10:00"]), ['chris'], 'Test 7');
test(alertNames(["john","john","john","john"], ["09:00","09:15","09:30","10:00"]), ['john'], 'Test 8');
test(alertNames(["eve","eve","eve","eve","eve"], ["01:00","01:10","01:20","02:00","02:10"]), ['eve'], 'Test 9');
test(alertNames(["john"], ["00:00"]), [], 'Test 10');
test(alertNames(["eve","eve","eve","eve","eve"], ["23:58","23:59","00:00","00:01","00:02"]), ['eve'], 'Test 11');
test(alertNames(["john","john","john","john"], ["09:15","09:45","10:00","10:30"]), ['john'], 'Test 12');
test(alertNames(["anna","anna","anna","anna"], ["10:00","10:10","10:20","10:30"]), ['anna'], 'Test 13');
test(alertNames(["alice","bob","alice"], ["10:00","10:10","10:20"]), [], 'Test 14');
test(alertNames(["mike","mike","mike","mike"], ["00:00","00:05","00:10","00:15"]), ['mike'], 'Test 15');
test(alertNames(["anna","anna","bob","bob","bob"], ["12:00","12:05","12:00","12:05","12:10"]), ['bob'], 'Test 16');
test(alertNames(["amy","amy","amy","adam"], ["08:00","08:10","08:20","08:30"]), ['amy'], 'Test 17');
test(alertNames(["grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace"], ["08:00","08:10","08:20","08:30","08:40","08:50","09:00","09:10","09:20","09:30","09:40","09:50"]), ['grace'], 'Test 18');
test(alertNames(["grace","grace","grace","grace","grace","grace","grace","grace","grace","grace"], ["23:50","00:00","00:10","00:20","00:30","00:40","00:50","01:00","01:10","01:20"]), ['grace'], 'Test 19');
test(alertNames(["amy","amy","amy","amy","amy"], ["08:00","08:30","09:00","09:30","10:00"]), ['amy'], 'Test 20');
test(alertNames(["alice","alice","alice","alice","alice"], ["08:00","08:10","08:20","08:30","08:40"]), ['alice'], 'Test 21');
test(alertNames(["grace","grace","grace","grace","grace","grace","grace"], ["12:00","12:15","12:30","12:45","13:00","13:15","13:30"]), ['grace'], 'Test 22');
test(alertNames(["karen","karen","karen","karen","karen","karen","karen","karen"], ["01:00","01:10","01:20","01:30","01:40","01:50","02:00","02:10"]), ['karen'], 'Test 23');
test(alertNames(["carol","carol","carol","carol","carol","carol","carol"], ["23:00","23:15","23:30","23:45","00:00","00:15","00:30"]), ['carol'], 'Test 24');
test(alertNames(["grace","grace","grace","grace","grace","grace"], ["23:55","00:00","00:01","00:02","00:03","00:04"]), ['grace'], 'Test 25');
test(alertNames(["hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank"], ["10:00","10:05","10:10","10:15","10:20","10:25","10:30","10:35","10:40","10:45","10:50","10:55","11:00","11:05","11:10","11:15","11:20","11:25","11:30","11:35","11:40","11:45","11:50","11:55","12:00"]), ['hank'], 'Test 26');
test(alertNames(["ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan"], ["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20","10:30","10:40","10:50"]), ['ivan'], 'Test 27');
test(alertNames(["dave","dave","dave","dave","dave","dave","dave","dave"], ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30"]), ['dave'], 'Test 28');
test(alertNames(["alice","alice","alice","alice","alice"], ["09:00","09:15","09:30","09:45","10:00"]), ['alice'], 'Test 29');
test(alertNames(["ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan"], ["09:00","09:01","09:02","09:03","09:04","09:05","09:06","09:07","09:08","09:09","09:10","09:11","09:12","09:13","09:14","09:15","09:16","09:17","09:18","09:19","09:20","09:21","09:22","09:23","09:24"]), ['ivan'], 'Test 30');
test(alertNames(["karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen"], ["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20","10:30","10:40","10:50","11:00","11:10","11:20","11:30","11:40","11:50","12:00"]), ['karen'], 'Test 31');
test(alertNames(["leo","leo","leo","leo","leo","leo","leo","leo","leo"], ["22:00","22:10","22:20","22:30","22:40","22:50","23:00","23:10","23:20"]), ['leo'], 'Test 32');
test(alertNames(["eve","eve","eve","eve","eve","eve","eve","eve"], ["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10"]), ['eve'], 'Test 33');
test(alertNames(["max","max","max","max","max","max","max","max","max","max","max","max","max"], ["09:00","09:05","09:10","09:15","09:20","09:25","09:30","09:35","09:40","09:45","09:50","09:55","10:00"]), ['max'], 'Test 34');
test(alertNames(["lucy","lucy","lucy","lucy","lucy","lucy","lucy"], ["16:00","16:05","16:10","16:15","16:20","16:25","16:30"]), ['lucy'], 'Test 35');
test(alertNames(["eve","eve","eve","eve","eve","eve","eve"], ["12:00","12:20","12:40","13:00","13:20","13:40","14:00"]), ['eve'], 'Test 36');
test(alertNames(["alice","alice","alice","bob","bob","bob","charlie","charlie","charlie"], ["09:00","09:10","09:20","09:30","09:35","09:40","09:00","09:55","10:05"]), ['alice', 'bob'], 'Test 37');
test(alertNames(["tom","jerry","tom","jerry","tom","jerry","tom","jerry"], ["09:00","09:05","09:10","09:15","09:20","09:25","09:30","09:35"]), ['jerry', 'tom'], 'Test 38');
test(alertNames(["alice","alice","alice","bob","bob","bob","bob","bob","charlie","charlie","charlie","charlie"], ["08:59","09:00","09:01","23:59","00:01","00:02","00:03","00:04","10:00","10:59","11:00","11:01"]), ['alice', 'bob', 'charlie'], 'Test 39');
test(alertNames(["amy","amy","amy","amy","amy","amy","amy","amy","amy","amy","amy"], ["08:00","08:15","08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30"]), ['amy'], 'Test 40');
test(alertNames(["david","david","david","david","david"], ["08:00","08:05","08:10","08:55","09:00"]), ['david'], 'Test 41');
test(alertNames(["eve","eve","eve","eve","eve","eve","eve","eve","eve","eve"], ["08:00","08:10","08:20","08:30","08:40","08:50","09:00","09:10","09:20","09:30"]), ['eve'], 'Test 42');
test(alertNames(["ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan"], ["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20","10:30"]), ['ivan'], 'Test 43');
test(alertNames(["frank","frank","frank","frank","frank","frank","frank","frank","frank"], ["08:00","08:10","08:20","08:30","08:40","08:50","09:00","09:10","09:20"]), ['frank'], 'Test 44');
test(alertNames(["david","david","david","david","david","david"], ["09:00","09:10","09:20","10:00","10:10","10:20"]), ['david'], 'Test 45');
test(alertNames(["hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank"], ["11:00","11:10","11:20","11:30","11:40","11:50","12:00","12:10","12:20","12:30","12:40","12:50","13:00","13:10","13:20","13:30","13:40","13:50","14:00","14:10"]), ['hank'], 'Test 46');
test(alertNames(["eve","eve","eve","eve","eve","eve"], ["23:00","23:30","00:00","00:30","01:00","01:30"]), ['eve'], 'Test 47');
test(alertNames(["lucy","lucy","lucy","lucy","lucy","lucy","lucy","lucy"], ["12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45"]), ['lucy'], 'Test 48');
test(alertNames(["grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace"], ["10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45"]), ['grace'], 'Test 49');
test(alertNames(["jane","jane","jane","jane","jane","jane","jane","jane","jane"], ["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20"]), ['jane'], 'Test 50');
test(alertNames(["judy","judy","judy","judy","judy","judy","judy","judy","judy","judy","judy","judy","judy","judy","judy","judy","judy","judy","judy","judy"], ["11:00","11:10","11:20","11:30","11:40","11:50","12:00","12:10","12:20","12:30","12:40","12:50","13:00","13:10","13:20","13:30","13:40","13:50","14:00","14:10"]), ['judy'], 'Test 51');
test(alertNames(["hank","hank","hank","hank","hank","hank","hank","hank"], ["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30"]), ['hank'], 'Test 52');
test(alertNames(["eve","eve","eve","eve","eve","eve","eve","eve","eve","eve"], ["08:50","08:55","09:00","09:05","09:10","09:15","09:20","09:25","09:30","09:35"]), ['eve'], 'Test 53');
test(alertNames(["ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan"], ["06:00","06:15","06:30","06:45","07:00","07:15","07:30","07:45","08:00","08:15","08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30"]), ['ivan'], 'Test 54');
test(alertNames(["dave","dave","dave","dave","dave","dave","dave","dave","dave"], ["08:00","08:10","08:20","08:30","08:40","08:50","09:00","09:10","09:20"]), ['dave'], 'Test 55');
test(alertNames(["ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan"], ["23:50","00:00","00:10","00:20","00:30","00:40","00:50","01:00","01:10","01:20","01:30","01:40","01:50","02:00","02:10","02:20"]), ['ivan'], 'Test 56');
test(alertNames(["bob","bob","bob","bob","bob","bob"], ["23:50","00:05","00:10","00:15","00:20","00:25"]), ['bob'], 'Test 57');
test(alertNames(["chris","chris","chris","chris","chris","chris"], ["23:45","00:00","00:15","00:30","00:45","01:00"]), ['chris'], 'Test 58');
test(alertNames(["dave","dave","dave","dave","dave","dave","dave"], ["23:55","00:00","00:01","00:02","00:03","00:04","00:05"]), ['dave'], 'Test 59');
test(alertNames(["grace","grace","grace","grace","grace","grace"], ["09:00","09:01","09:02","09:03","09:04","09:05"]), ['grace'], 'Test 60');
test(alertNames(["grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace"], ["08:00","08:15","08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15"]), ['grace'], 'Test 61');
test(alertNames(["eve","eve","eve","eve","eve","eve","eve","eve","eve","eve"], ["09:00","09:05","09:10","09:15","09:20","09:25","09:30","09:35","09:40","09:45"]), ['eve'], 'Test 62');
test(alertNames(["charlie","charlie","charlie","charlie","charlie","charlie","charlie"], ["12:00","12:20","12:40","13:00","13:20","13:40","14:00"]), ['charlie'], 'Test 63');
test(alertNames(["frank","frank","frank","frank","frank","frank","frank","frank","frank","frank","frank","frank","frank","frank"], ["08:00","08:10","08:20","08:30","08:40","08:50","09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10"]), ['frank'], 'Test 64');
test(alertNames(["frank","frank","frank","frank","frank","frank","frank","frank","frank","frank"], ["10:00","10:10","10:20","10:30","10:40","10:50","11:00","11:10","11:20","11:30"]), ['frank'], 'Test 65');
test(alertNames(["alice","alice","bob","bob","bob","bob","bob"], ["08:00","08:05","08:00","08:10","08:15","08:20","08:25"]), ['bob'], 'Test 66');
test(alertNames(["bob","bob","bob","bob","bob","bob"], ["09:00","09:20","09:40","10:00","10:20","10:40"]), ['bob'], 'Test 67');
test(alertNames(["emma","emma","emma","emma","emma"], ["09:00","09:15","09:30","09:45","10:00"]), ['emma'], 'Test 68');
test(alertNames(["daniel","daniel","daniel","daniel","daniel","daniel"], ["10:00","10:15","10:30","11:00","11:15","11:30"]), ['daniel'], 'Test 69');
test(alertNames(["alice","bob","charlie","alice","bob","charlie"], ["08:00","08:05","08:10","08:15","08:20","08:25"]), [], 'Test 70');
test(alertNames(["jane","jane","jane","jane","jane","jane","jane","jane","jane","jane"], ["09:00","09:01","09:02","09:03","09:04","09:05","09:06","09:07","09:08","09:09"]), ['jane'], 'Test 71');
test(alertNames(["charlie","charlie","charlie","dave","dave","dave","dave"], ["08:00","08:10","08:20","12:00","12:05","12:10","12:15"]), ['charlie', 'dave'], 'Test 72');
test(alertNames(["eve","eve","eve","eve","eve","eve","eve","eve","eve"], ["08:00","08:10","08:20","08:30","08:40","08:50","09:00","09:10","09:20"]), ['eve'], 'Test 73');
test(alertNames(["eve","eve","eve","eve","eve","eve","eve","eve","eve","eve"], ["12:00","12:20","12:40","13:00","13:20","13:40","14:00","14:20","14:40","15:00"]), ['eve'], 'Test 74');
test(alertNames(["alice","alice","bob","bob","charlie","charlie"], ["12:00","12:59","13:00","13:59","14:00","14:59"]), [], 'Test 75');
test(alertNames(["heidi","heidi","heidi","heidi","heidi","heidi","heidi"], ["23:50","23:55","00:00","00:05","00:10","00:15","00:20"]), ['heidi'], 'Test 76');
test(alertNames(["tim","tim","tim","tim","tim","tim","tim","tim","tim","tim","tim","tim","tim","tim","tim"], ["08:00","08:10","08:20","08:30","08:40","08:50","09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20"]), ['tim'], 'Test 77');
test(alertNames(["jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill"], ["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20","10:30","10:40","10:50","11:00","11:10","11:20","11:30","11:40"]), ['jill'], 'Test 78');
test(alertNames(["hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank","hank"], ["12:00","12:10","12:20","12:30","12:40","12:50","13:00","13:10","13:20","13:30","13:40","13:50","14:00","14:10"]), ['hank'], 'Test 79');
test(alertNames(["ivan","ivan","ivan","ivan","ivan","ivan","ivan"], ["07:00","07:10","07:20","07:30","07:40","07:50","08:00"]), ['ivan'], 'Test 80');
test(alertNames(["charlie","david","david","charlie","david"], ["09:00","09:10","09:20","09:30","09:35"]), ['david'], 'Test 81');
test(alertNames(["frank","frank","frank","frank","frank","frank"], ["09:00","09:01","09:02","09:03","09:04","09:05"]), ['frank'], 'Test 82');
test(alertNames(["heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi"], ["11:00","11:10","11:20","11:30","11:40","11:50","12:00","12:10","12:20","12:30","12:40"]), ['heidi'], 'Test 83');
test(alertNames(["heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi","heidi"], ["07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00"]), ['heidi'], 'Test 84');
test(alertNames(["dave","dave","dave","dave","dave","dave","dave"], ["08:00","08:30","09:00","09:30","10:00","10:30","11:00"]), ['dave'], 'Test 85');
test(alertNames(["grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace","grace"], ["23:00","23:10","23:20","23:30","23:40","23:50","00:00","00:10","00:20","00:30","00:40","00:50","01:00","01:10","01:20","01:30"]), ['grace'], 'Test 86');
test(alertNames(["alice","alice","alice","alice","alice"], ["08:00","08:30","09:00","09:30","10:00"]), ['alice'], 'Test 87');
test(alertNames(["eve","eve","eve","eve","eve","eve"], ["10:00","10:10","10:20","10:30","10:40","10:50"]), ['eve'], 'Test 88');
test(alertNames(["jane","jane","jane","jane","jane","jane","jane"], ["18:00","18:10","18:20","18:30","18:40","18:50","19:00"]), ['jane'], 'Test 89');
test(alertNames(["frank","frank","frank","frank","frank","frank","frank","frank","frank","frank","frank","frank","frank"], ["00:00","00:15","00:30","00:45","01:00","01:15","01:30","01:45","02:00","02:15","02:30","02:45","03:00"]), ['frank'], 'Test 90');
test(alertNames(["mike","mike","mike","mike","mike","mike","mike","mike","mike","mike","mike","mike","mike","mike","mike","mike","mike"], ["09:00","09:05","09:10","09:15","09:20","09:25","09:30","09:35","09:40","09:45","09:50","09:55","10:00","10:05","10:10","10:15","10:20"]), ['mike'], 'Test 91');
test(alertNames(["ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan"], ["09:00","09:05","09:10","09:15","09:20","09:25","09:30","09:35","09:40","09:45"]), ['ivan'], 'Test 92');
test(alertNames(["ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan"], ["11:00","11:10","11:20","11:30","11:40","11:50","12:00","12:10"]), ['ivan'], 'Test 93');
test(alertNames(["frank","frank","frank","frank","frank","frank","frank","frank","frank","frank","frank","frank"], ["09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45"]), ['frank'], 'Test 94');
test(alertNames(["frank","grace","heidi","frank","grace","heidi","frank","grace","heidi"], ["10:00","10:00","10:00","10:05","10:05","10:05","10:10","10:10","10:10"]), ['frank', 'grace', 'heidi'], 'Test 95');
test(alertNames(["ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan","ivan"], ["09:00","09:01","09:02","09:03","09:04","09:05","09:06","09:07","09:08","09:09","09:10","09:11","09:12","09:13","09:14","09:15","09:16","09:17","09:18","09:19","09:20","09:21","09:22","09:23","09:24","09:25","09:26","09:27","09:28","09:29","09:30"]), ['ivan'], 'Test 96');
test(alertNames(["daniel","daniel","daniel","daniel","daniel","daniel"], ["09:00","09:15","09:30","10:00","10:15","10:30"]), ['daniel'], 'Test 97');
test(alertNames(["sam","sam","sam","sam","sam","sam","sam","sam","sam","sam"], ["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20","10:30"]), ['sam'], 'Test 98');
test(alertNames(["jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill","jill"], ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30","00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30"]), ['jill'], 'Test 99');
test(alertNames(["frank","frank","frank","frank","frank","frank","frank"], ["23:45","23:50","23:55","00:00","00:05","00:10","00:15"]), ['frank'], 'Test 100');
test(alertNames(["charlie","charlie","charlie","charlie","charlie","charlie","charlie"], ["10:00","10:10","10:20","10:30","10:40","11:00","11:10"]), ['charlie'], 'Test 101');
test(alertNames(["hank","hank","hank","hank","hank","hank"], ["14:00","14:30","15:00","15:30","16:00","16:30"]), ['hank'], 'Test 102');
test(alertNames(["kyle","kyle","kyle","kyle","kyle","kyle","kyle"], ["22:00","22:15","22:30","22:45","23:00","23:15","23:30"]), ['kyle'], 'Test 103');
test(alertNames(["frank","frank","frank","frank","frank","frank","frank","frank","frank"], ["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20"]), ['frank'], 'Test 104');
test(alertNames(["julia","julia","julia","julia","julia","julia","julia","julia","julia","julia","julia"], ["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20","10:30","10:40"]), ['julia'], 'Test 105');
test(alertNames(["julia","julia","julia","julia","julia","julia","julia","julia"], ["12:00","12:10","12:20","12:30","12:40","12:50","13:00","13:10"]), ['julia'], 'Test 106');
test(alertNames(["karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen","karen"], ["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20","10:30","10:40","10:50"]), ['karen'], 'Test 107');
test(alertNames(["bob","bob","bob","bob","bob","bob"], ["12:00","12:01","12:02","12:03","12:04","12:05"]), ['bob'], 'Test 108');
test(alertNames(["alice","alice","alice","alice","alice"], ["09:00","09:30","10:00","10:30","11:00"]), ['alice'], 'Test 109');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

