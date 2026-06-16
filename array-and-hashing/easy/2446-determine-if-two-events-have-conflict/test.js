// Test: 2446. Determine If Two Events Have Conflict
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { haveConflict } = require("./solution");

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

console.log("\n2446. Determine If Two Events Have Conflict\n");

test(haveConflict(["10:00","11:00"], ["14:00","15:00"]), false, 'Test 1');
test(haveConflict(["00:00","23:59"], ["12:00","12:01"]), true, 'Test 2');
test(haveConflict(["00:00","23:59"], ["12:00","12:00"]), true, 'Test 3');
test(haveConflict(["00:00","23:59"], ["12:00","12:30"]), true, 'Test 4');
test(haveConflict(["01:15","02:00"], ["02:00","03:00"]), true, 'Test 5');
test(haveConflict(["09:30","10:30"], ["10:00","11:00"]), true, 'Test 6');
test(haveConflict(["05:45","06:45"], ["06:45","07:45"]), true, 'Test 7');
test(haveConflict(["08:00","09:00"], ["07:00","08:30"]), true, 'Test 8');
test(haveConflict(["23:59","23:59"], ["23:59","23:59"]), true, 'Test 9');
test(haveConflict(["13:00","15:00"], ["14:00","16:00"]), true, 'Test 10');
test(haveConflict(["12:00","12:30"], ["12:15","12:45"]), true, 'Test 11');
test(haveConflict(["01:00","02:00"], ["01:20","03:00"]), true, 'Test 12');
test(haveConflict(["13:00","14:00"], ["14:00","15:00"]), true, 'Test 13');
test(haveConflict(["09:00","09:30"], ["09:30","10:00"]), true, 'Test 14');
test(haveConflict(["16:00","17:00"], ["16:30","17:30"]), true, 'Test 15');
test(haveConflict(["12:00","13:00"], ["12:30","13:30"]), true, 'Test 16');
test(haveConflict(["13:30","15:30"], ["14:00","16:00"]), true, 'Test 17');
test(haveConflict(["08:00","09:00"], ["09:00","10:00"]), true, 'Test 18');
test(haveConflict(["12:00","13:00"], ["13:00","14:00"]), true, 'Test 19');
test(haveConflict(["00:01","23:59"], ["12:00","12:01"]), true, 'Test 20');
test(haveConflict(["12:00","12:00"], ["12:00","12:00"]), true, 'Test 21');
test(haveConflict(["22:00","23:00"], ["21:30","22:30"]), true, 'Test 22');
test(haveConflict(["00:00","23:59"], ["01:00","02:00"]), true, 'Test 23');
test(haveConflict(["00:00","23:59"], ["12:00","13:00"]), true, 'Test 24');
test(haveConflict(["05:30","06:00"], ["05:45","06:15"]), true, 'Test 25');
test(haveConflict(["01:00","02:00"], ["00:59","01:01"]), true, 'Test 26');
test(haveConflict(["08:00","09:00"], ["08:00","08:30"]), true, 'Test 27');
test(haveConflict(["23:55","00:10"], ["23:45","00:05"]), false, 'Test 28');
test(haveConflict(["09:00","17:00"], ["08:30","09:30"]), true, 'Test 29');
test(haveConflict(["14:00","16:00"], ["15:30","17:00"]), true, 'Test 30');
test(haveConflict(["15:00","16:00"], ["14:00","15:30"]), true, 'Test 31');
test(haveConflict(["14:00","15:00"], ["13:00","14:00"]), true, 'Test 32');
test(haveConflict(["23:59","00:01"], ["00:00","00:01"]), false, 'Test 33');
test(haveConflict(["00:00","11:59"], ["12:00","23:59"]), false, 'Test 34');
test(haveConflict(["09:45","10:45"], ["10:30","11:30"]), true, 'Test 35');
test(haveConflict(["05:00","07:00"], ["06:00","06:59"]), true, 'Test 36');
test(haveConflict(["23:59","23:59"], ["23:59","00:00"]), false, 'Test 37');
test(haveConflict(["08:00","09:00"], ["08:00","08:59"]), true, 'Test 38');
test(haveConflict(["07:30","08:00"], ["07:45","08:15"]), true, 'Test 39');
test(haveConflict(["09:00","18:00"], ["17:59","18:01"]), true, 'Test 40');
test(haveConflict(["06:00","07:00"], ["06:00","06:59"]), true, 'Test 41');
test(haveConflict(["00:01","00:59"], ["00:30","01:00"]), true, 'Test 42');
test(haveConflict(["23:30","00:30"], ["23:00","23:59"]), false, 'Test 43');
test(haveConflict(["09:30","10:15"], ["10:00","10:45"]), true, 'Test 44');
test(haveConflict(["13:00","14:00"], ["13:45","14:45"]), true, 'Test 45');
test(haveConflict(["11:00","13:00"], ["12:30","14:00"]), true, 'Test 46');
test(haveConflict(["14:30","15:30"], ["15:00","16:00"]), true, 'Test 47');
test(haveConflict(["20:00","21:00"], ["19:00","20:00"]), true, 'Test 48');
test(haveConflict(["11:00","12:00"], ["09:00","10:59"]), false, 'Test 49');
test(haveConflict(["11:59","23:59"], ["23:59","00:00"]), false, 'Test 50');
test(haveConflict(["09:00","09:00"], ["09:00","09:00"]), true, 'Test 51');
test(haveConflict(["08:30","09:45"], ["09:30","10:30"]), true, 'Test 52');
test(haveConflict(["07:15","07:45"], ["07:45","08:15"]), true, 'Test 53');
test(haveConflict(["09:30","10:30"], ["10:00","10:00"]), true, 'Test 54');
test(haveConflict(["00:00","00:01"], ["00:00","00:02"]), true, 'Test 55');
test(haveConflict(["18:30","19:00"], ["19:00","19:30"]), true, 'Test 56');
test(haveConflict(["14:45","15:15"], ["15:15","15:45"]), true, 'Test 57');
test(haveConflict(["17:45","18:15"], ["18:15","18:45"]), true, 'Test 58');
test(haveConflict(["03:00","04:00"], ["02:30","03:30"]), true, 'Test 59');
test(haveConflict(["01:00","02:00"], ["23:59","01:30"]), false, 'Test 60');
test(haveConflict(["18:00","19:00"], ["17:30","18:00"]), true, 'Test 61');
test(haveConflict(["08:30","09:30"], ["09:00","09:15"]), true, 'Test 62');
test(haveConflict(["08:30","09:30"], ["09:00","09:30"]), true, 'Test 63');
test(haveConflict(["08:00","09:00"], ["07:59","08:01"]), true, 'Test 64');
test(haveConflict(["14:00","15:00"], ["13:59","14:01"]), true, 'Test 65');
test(haveConflict(["11:45","12:15"], ["12:15","12:45"]), true, 'Test 66');
test(haveConflict(["05:30","06:30"], ["06:20","07:20"]), true, 'Test 67');
test(haveConflict(["00:00","24:00"], ["00:00","24:00"]), true, 'Test 68');
test(haveConflict(["13:30","14:30"], ["14:30","15:30"]), true, 'Test 69');
test(haveConflict(["08:45","09:45"], ["09:45","10:45"]), true, 'Test 70');
test(haveConflict(["13:45","14:45"], ["14:45","15:45"]), true, 'Test 71');
test(haveConflict(["00:00","23:59"], ["12:30","13:30"]), true, 'Test 72');
test(haveConflict(["13:15","14:45"], ["14:00","15:30"]), true, 'Test 73');
test(haveConflict(["09:00","17:00"], ["10:00","15:00"]), true, 'Test 74');
test(haveConflict(["06:00","06:59"], ["07:00","08:00"]), false, 'Test 75');
test(haveConflict(["22:00","22:59"], ["22:59","23:59"]), true, 'Test 76');
test(haveConflict(["11:00","13:00"], ["12:00","14:00"]), true, 'Test 77');
test(haveConflict(["17:00","18:00"], ["16:30","17:00"]), true, 'Test 78');
test(haveConflict(["03:00","04:00"], ["03:59","04:01"]), true, 'Test 79');
test(haveConflict(["06:00","07:00"], ["05:59","06:01"]), true, 'Test 80');
test(haveConflict(["23:55","23:59"], ["23:56","00:05"]), false, 'Test 81');
test(haveConflict(["23:45","23:59"], ["23:50","00:10"]), false, 'Test 82');
test(haveConflict(["15:30","16:30"], ["15:00","15:30"]), true, 'Test 83');
test(haveConflict(["09:00","17:00"], ["17:00","18:00"]), true, 'Test 84');
test(haveConflict(["11:00","11:01"], ["11:00","11:01"]), true, 'Test 85');
test(haveConflict(["09:00","17:00"], ["12:00","13:00"]), true, 'Test 86');
test(haveConflict(["11:00","11:30"], ["11:30","12:00"]), true, 'Test 87');
test(haveConflict(["05:30","06:00"], ["06:00","06:30"]), true, 'Test 88');
test(haveConflict(["05:30","06:30"], ["06:29","07:30"]), true, 'Test 89');
test(haveConflict(["09:30","10:30"], ["10:00","10:15"]), true, 'Test 90');
test(haveConflict(["00:00","23:59"], ["00:00","23:59"]), true, 'Test 91');
test(haveConflict(["11:45","12:45"], ["11:30","11:45"]), true, 'Test 92');
test(haveConflict(["15:30","15:30"], ["15:30","15:30"]), true, 'Test 93');
test(haveConflict(["12:00","13:00"], ["11:00","12:59"]), true, 'Test 94');
test(haveConflict(["14:00","15:00"], ["15:00","16:00"]), true, 'Test 95');
test(haveConflict(["21:00","22:00"], ["20:00","21:00"]), true, 'Test 96');
test(haveConflict(["19:00","20:00"], ["20:00","21:00"]), true, 'Test 97');
test(haveConflict(["08:30","09:15"], ["09:15","10:00"]), true, 'Test 98');
test(haveConflict(["06:00","07:00"], ["07:00","08:00"]), true, 'Test 99');
test(haveConflict(["18:00","19:00"], ["17:30","18:30"]), true, 'Test 100');
test(haveConflict(["01:00","02:00"], ["02:01","03:00"]), false, 'Test 101');
test(haveConflict(["09:00","10:00"], ["10:00","11:00"]), true, 'Test 102');
test(haveConflict(["00:00","12:00"], ["12:00","23:59"]), true, 'Test 103');
test(haveConflict(["23:59","00:01"], ["23:58","00:00"]), false, 'Test 104');
test(haveConflict(["00:01","23:59"], ["23:59","00:01"]), true, 'Test 105');
test(haveConflict(["10:00","10:30"], ["09:59","10:01"]), true, 'Test 106');
test(haveConflict(["00:00","00:01"], ["00:01","00:02"]), true, 'Test 107');
test(haveConflict(["11:55","12:05"], ["12:00","12:10"]), true, 'Test 108');
test(haveConflict(["12:34","12:34"], ["12:34","12:34"]), true, 'Test 109');

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
