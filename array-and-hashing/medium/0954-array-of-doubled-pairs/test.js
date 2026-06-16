// Test: 954. Array Of Doubled Pairs
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { canReorderDoubled } = require("./solution");

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

console.log("\n954. Array Of Doubled Pairs\n");

test(canReorderDoubled([1,4,2,2]), true, 'Test 1');
test(canReorderDoubled([1,2,4,16,8,4]), false, 'Test 2');
test(canReorderDoubled([-5,-2,-10,-1,-1,-5]), false, 'Test 3');
test(canReorderDoubled([5,-3,3,-2,2,-4]), false, 'Test 4');
test(canReorderDoubled([0,0]), true, 'Test 5');
test(canReorderDoubled([4,-2,2,-4]), true, 'Test 6');
test(canReorderDoubled([1,2,3,6,4,8]), true, 'Test 7');
test(canReorderDoubled([1,2,4,16,8,32]), true, 'Test 8');
test(canReorderDoubled([1,2,2,4]), true, 'Test 9');
test(canReorderDoubled([2,1,2,6]), false, 'Test 10');
test(canReorderDoubled([0,0,0,0]), true, 'Test 11');
test(canReorderDoubled([-2,4,-2,4]), false, 'Test 12');
test(canReorderDoubled([-1,-2,-3,-6,-6,-12]), true, 'Test 13');
test(canReorderDoubled([-2,4,-8,16,-32,64]), false, 'Test 14');
test(canReorderDoubled([1,2,3,6,6,12]), true, 'Test 15');
test(canReorderDoubled([3,1,3,6]), false, 'Test 16');
test(canReorderDoubled([1,2,3,6]), true, 'Test 17');
test(canReorderDoubled([-1,-2,-2,-4]), true, 'Test 18');
test(canReorderDoubled([1,2,4,8]), true, 'Test 19');
test(canReorderDoubled([1,2,2,4,4,8]), true, 'Test 20');
test(canReorderDoubled([1,2,3,6,5,10,15,30,4,8,12,24,20,40,60,120]), true, 'Test 21');
test(canReorderDoubled([1,2,3,4,5,6,7,8,9,18]), false, 'Test 22');
test(canReorderDoubled([0,0,0,0,0,0,0,0]), true, 'Test 23');
test(canReorderDoubled([1,3,5,7,9,18,15,12,6,10]), false, 'Test 24');
test(canReorderDoubled([1,2,3,6,5,10,15,30,4,8,12,24,20,40,60,120,7,14,21,42]), true, 'Test 25');
test(canReorderDoubled([5,10,10,20,25,50]), true, 'Test 26');
test(canReorderDoubled([7,14,28,56,112,224,448,896,1792,3584]), true, 'Test 27');
test(canReorderDoubled([5,2,1,10,5,20,2,4]), false, 'Test 28');
test(canReorderDoubled([1,2,2,4,4,8,8,16]), true, 'Test 29');
test(canReorderDoubled([-1,1,-1,1,-2,2,-2,2,-4,4,-4,4]), false, 'Test 30');
test(canReorderDoubled([-8,-4,-2,-1,-16,-32,-2,-4]), true, 'Test 31');
test(canReorderDoubled([-1,2,-2,4,-4,8]), false, 'Test 32');
test(canReorderDoubled([-1,-2,-3,-6,-5,-10,-15,-30,-4,-8,-12,-24,-20,-40,-60,-120,-7,-14,-21,-42]), true, 'Test 33');
test(canReorderDoubled([2,4,8,16,32,64,128,256,512,1024]), true, 'Test 34');
test(canReorderDoubled([1,2,4,8,16,32,64,128,256,512]), true, 'Test 35');
test(canReorderDoubled([3,6,3,6,12,24]), true, 'Test 36');
test(canReorderDoubled([1,2,4,8,16,32]), true, 'Test 37');
test(canReorderDoubled([1,2,4,8,16,32,64,128]), true, 'Test 38');
test(canReorderDoubled([-1,2,-2,1,-4,4]), false, 'Test 39');
test(canReorderDoubled([100000,-100000,50000,-50000,25000,-25000,12500,-12500]), true, 'Test 40');
test(canReorderDoubled([5,10,15,20,25,50]), false, 'Test 41');
test(canReorderDoubled([100000,-100000,50000,-50000,25000,-25000]), false, 'Test 42');
test(canReorderDoubled([-100000,100000,-50000,50000,-25000,25000,-12500,12500]), true, 'Test 43');
test(canReorderDoubled([-1,3,6,12,24,48,96,192,384,768]), false, 'Test 44');
test(canReorderDoubled([-2,-4,-8,-16,-32,-64,-128,-256]), true, 'Test 45');
test(canReorderDoubled([5,-5,10,-10,20,-20,40,-40]), true, 'Test 46');
test(canReorderDoubled([-5,-10,-15,-20,-25,-50]), false, 'Test 47');
test(canReorderDoubled([-2,4,1,-1,2,-2,-4,8]), true, 'Test 48');
test(canReorderDoubled([1,3,6,12,24,48,96,192,384,768]), false, 'Test 49');
test(canReorderDoubled([100000,-100000,50000,-50000,25000,-25000,12500,-12500,6250,-6250]), false, 'Test 50');
test(canReorderDoubled([0,0,0,0,0,0]), true, 'Test 51');
test(canReorderDoubled([1,2,3,4,6,8,12,16,24,32]), true, 'Test 52');
test(canReorderDoubled([10,20,20,40,80,160,320,640]), true, 'Test 53');
test(canReorderDoubled([1,4,2,8,4,2]), true, 'Test 54');
test(canReorderDoubled([1,3,5,7,2,6,10,14,4,12]), false, 'Test 55');
test(canReorderDoubled([-3,3,-6,6,-12,12,-24,24]), true, 'Test 56');
test(canReorderDoubled([100000,-100000,50000,-50000,25000,-25000,12500,-12500,6250,-6250,3125,-3125,15625,-15625,78125,-78125]), false, 'Test 57');
test(canReorderDoubled([100000,-100000,50000,-50000,25000,-25000,12500,-12500,6250,-6250,3125,-3125,1562.5,-1562.5]), Error: unsupported operand type[s] for <<: 'float' and 'int', 'Test 58');
test(canReorderDoubled([3,6,12,24,48,96,192,384,768,1536,3072,6144]), true, 'Test 59');
test(canReorderDoubled([1,2,4,8,16,32,64,128,256,512,1024,2048]), true, 'Test 60');
test(canReorderDoubled([5,10,15,20,25,50,100,150,200,250]), false, 'Test 61');
test(canReorderDoubled([10,5,5,15,20,10]), false, 'Test 62');
test(canReorderDoubled([1,2,3,6,4,8,9,18,12,24]), true, 'Test 63');
test(canReorderDoubled([-4,-8,-2,-1,-16,-2]), true, 'Test 64');
test(canReorderDoubled([1,1,2,2,3,3,4,4,6,6,12,12]), false, 'Test 65');
test(canReorderDoubled([5,10,15,20,25,30,35,40,45,50,10,20,30,40,50,60]), false, 'Test 66');
test(canReorderDoubled([1,1,2,2,4,4,8,8,16,16,32,32]), true, 'Test 67');
test(canReorderDoubled([5,10,5,20,10,40,20,80]), false, 'Test 68');
test(canReorderDoubled([1,3,3,6,9,18,27,54]), false, 'Test 69');
test(canReorderDoubled([-1,-2,-4,-8,-16,-32,-64,-128,-256,-512,-1024,-2048]), true, 'Test 70');
test(canReorderDoubled([1,2,3,4,5,6,7,8,9,10,2,4,6,8,10,20]), false, 'Test 71');
test(canReorderDoubled([3,6,1,2,18,9,27,54]), true, 'Test 72');
test(canReorderDoubled([6,3,3,12,2,4]), false, 'Test 73');
test(canReorderDoubled([1,2,3,4,5,6,7,8,9,10,20,40,5,15,30,60]), false, 'Test 74');
test(canReorderDoubled([1,1,2,2,4,4,8,8]), true, 'Test 75');
test(canReorderDoubled([1,2,2,4,4,8,8,16,16,32,32,64]), true, 'Test 76');
test(canReorderDoubled([1,3,2,6,4,8,5,10,7,14,9,18,11,22,12,24]), true, 'Test 77');
test(canReorderDoubled([-1,1,-2,2,-4,4,-8,8]), true, 'Test 78');
test(canReorderDoubled([1,2,3,4,5,6,7,8,9,10,20,4,8,16,32,64]), false, 'Test 79');
test(canReorderDoubled([-1,2,-2,1,-4,4,-8,8,16,-16]), false, 'Test 80');
test(canReorderDoubled([3,9,1,27,3,9,27,81]), false, 'Test 81');
test(canReorderDoubled([1,2,3,4,5,6,7,8,9,10,2,4,6,8,10,12,14,16,18,20]), true, 'Test 82');
test(canReorderDoubled([1,1,2,2,4,4,8,8,16,16]), false, 'Test 83');
test(canReorderDoubled([-1,-2,-4,-8,-16,-32,-64,-128]), true, 'Test 84');
test(canReorderDoubled([-1,2,-2,1]), true, 'Test 85');
test(canReorderDoubled([1,-1,2,-2,4,-4,8,-8]), true, 'Test 86');
test(canReorderDoubled([6,3,12,24,48,96,192,384,768,1536,3,6,12,24,48,96,192,384,768,1536]), true, 'Test 87');
test(canReorderDoubled([-3,-6,-12,-24,-48,-96,-192,-384,-768,-1536]), true, 'Test 88');
test(canReorderDoubled([-1,-2,-4,-8,1,2,4,8]), true, 'Test 89');
test(canReorderDoubled([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), false, 'Test 90');
test(canReorderDoubled([3,6,12,24,48,96,192,384]), true, 'Test 91');
test(canReorderDoubled([1,1,2,2,4,4,8,8,16,16,32,32,64,64,128,128]), true, 'Test 92');
test(canReorderDoubled([3,6,9,18,27,54]), true, 'Test 93');
test(canReorderDoubled([-1,-2,-3,-6,-5,-10,-15,-30,-4,-8,-12,-24,-20,-40,-60,-120]), true, 'Test 94');
test(canReorderDoubled([-10,10,-20,20,-30,30,-40,40,-50,50]), false, 'Test 95');
test(canReorderDoubled([1,1,1,2,2,4,4,8,8,16]), false, 'Test 96');
test(canReorderDoubled([-5,5,-10,10,-20,20,-40,40,-80,80]), false, 'Test 97');
test(canReorderDoubled([-5,-10,-20,-2,-4,-8,-1,-2,-4,-8]), false, 'Test 98');
test(canReorderDoubled([10,5,3,6,2,4,8,1]), true, 'Test 99');
test(canReorderDoubled([-1,-2,-3,-6,-4,-8,-9,-18,-12,-24]), true, 'Test 100');
test(canReorderDoubled([8,4,2,1,16,32,64,128,256,512]), true, 'Test 101');
test(canReorderDoubled([1,2,2,4,4,4,8,8,8,8,16,16,16,16,32,32,32,32]), false, 'Test 102');
test(canReorderDoubled([-2,4,-8,16,-32,64,-128,256]), false, 'Test 103');
test(canReorderDoubled([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), false, 'Test 104');
test(canReorderDoubled([4,8,4,16,8,32,2,1]), true, 'Test 105');
test(canReorderDoubled([-1,-3,-6,-12,-24,-48,-96,-192,-384,-768]), false, 'Test 106');
test(canReorderDoubled([3,6,12,24,48,96,192,384,768,1536]), true, 'Test 107');
test(canReorderDoubled([-1,1,-2,2,-3,3,-4,4,-6,6,-12,12,-24,24,-48,48]), false, 'Test 108');
test(canReorderDoubled([3,6,1,2,18,9,36,18]), true, 'Test 109');
test(canReorderDoubled([-1,-2,-3,-4,-5,-6,-7,-8,-9,-18]), false, 'Test 110');
test(canReorderDoubled([-1,-2,-3,-6,-3,-6]), true, 'Test 111');
test(canReorderDoubled([5,10,15,30,60,120,240,480]), true, 'Test 112');
test(canReorderDoubled([1,3,2,6,4,12,8,24]), true, 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

