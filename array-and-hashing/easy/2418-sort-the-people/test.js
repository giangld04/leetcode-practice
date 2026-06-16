// Test: 2418. Sort The People
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { sortPeople } = require("./solution");

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

console.log("\n2418. Sort The People\n");

test(sortPeople(["Zoe","Lily","Rose"], [150,145,155]), ['Rose', 'Zoe', 'Lily'], 'Test 1');
test(sortPeople(["Qwen","Alibaba","Cloud"], [200,190,180]), ['Qwen', 'Alibaba', 'Cloud'], 'Test 2');
test(sortPeople(["Ava","Sophia","Isabella"], [160,165,170]), ['Isabella', 'Sophia', 'Ava'], 'Test 3');
test(sortPeople(["Mary","John","Emma"], [180,165,170]), ['Mary', 'Emma', 'John'], 'Test 4');
test(sortPeople(["A","B","C","D"], [150,160,170,180]), ['D', 'C', 'B', 'A'], 'Test 5');
test(sortPeople(["Ava","Ella","Olivia"], [168,162,170]), ['Olivia', 'Ava', 'Ella'], 'Test 6');
test(sortPeople(["Alice","Bob","Bob"], [155,185,150]), ['Bob', 'Alice', 'Bob'], 'Test 7');
test(sortPeople(["Zoe","Liam","Noah"], [165,175,185]), ['Noah', 'Liam', 'Zoe'], 'Test 8');
test(sortPeople(["Noah","Liam","Mason"], [185,180,175]), ['Noah', 'Liam', 'Mason'], 'Test 9');
test(sortPeople(["Mia","Ella","Olivia"], [168,162,170]), ['Olivia', 'Mia', 'Ella'], 'Test 10');
test(sortPeople(["Tom","Jerry","Spike"], [190,160,175]), ['Tom', 'Spike', 'Jerry'], 'Test 11');
test(sortPeople(["Zoe","Liam","Noah"], [175,180,165]), ['Liam', 'Zoe', 'Noah'], 'Test 12');
test(sortPeople(["Z","Y","X"], [165,175,185]), ['X', 'Y', 'Z'], 'Test 13');
test(sortPeople(["Anna","Elsa","Olaf"], [170,180,160]), ['Elsa', 'Anna', 'Olaf'], 'Test 14');
test(sortPeople(["Liam","Noah","Oliver","Elijah","James","William","Benjamin"], [179,178,177,176,175,174,173]), ['Liam', 'Noah', 'Oliver', 'Elijah', 'James', 'William', 'Benjamin'], 'Test 15');
test(sortPeople(["William","James","Benjamin","Henry"], [190,170,180,160]), ['William', 'Benjamin', 'James', 'Henry'], 'Test 16');
test(sortPeople(["Jackson","Aiden","Mason","Lucas"], [182,188,178,180]), ['Aiden', 'Jackson', 'Lucas', 'Mason'], 'Test 17');
test(sortPeople(["Dominic","Penelope","Victor","Emilia","Mason"], [178,173,189,169,174]), ['Victor', 'Dominic', 'Mason', 'Penelope', 'Emilia'], 'Test 18');
test(sortPeople(["Ezra","Isabella","Oliver","Sophia","Noah","Emma","James","Amelia","Benjamin","Ava","Elijah","Liam"], [177,165,183,170,185,171,179,172,180,167,182,184]), ['Noah', 'Liam', 'Oliver', 'Elijah', 'Benjamin', 'James', 'Ezra', 'Amelia', 'Emma', 'Sophia', 'Ava', 'Isabella'], 'Test 19');
test(sortPeople(["Daniel","Matthew","Ethan","Logan","Jackson"], [175,170,165,160,155]), ['Daniel', 'Matthew', 'Ethan', 'Logan', 'Jackson'], 'Test 20');
test(sortPeople(["William","James","George","Charles"], [188,192,178,180]), ['James', 'William', 'Charles', 'George'], 'Test 21');
test(sortPeople(["Liam","Noah","Oliver","Elijah","William"], [180,178,175,173,170]), ['Liam', 'Noah', 'Oliver', 'Elijah', 'William'], 'Test 22');
test(sortPeople(["Sophia","Jackson","Mia","Logan"], [160,200,180,170]), ['Jackson', 'Mia', 'Logan', 'Sophia'], 'Test 23');
test(sortPeople(["Amelia","Olivia","Emma","Sophia"], [155,165,175,185]), ['Sophia', 'Emma', 'Olivia', 'Amelia'], 'Test 24');
test(sortPeople(["Emma","Noah","Olivia","Elijah","Ava","Sophia"], [173,186,168,183,170,165]), ['Noah', 'Elijah', 'Emma', 'Ava', 'Olivia', 'Sophia'], 'Test 25');
test(sortPeople(["Levi","Carter","Aria","Sebastian","Avery"], [175,184,168,189,176]), ['Sebastian', 'Carter', 'Avery', 'Levi', 'Aria'], 'Test 26');
test(sortPeople(["Sophia","Olivia","Isabella","Ava","Emma"], [162,178,168,173,175]), ['Olivia', 'Emma', 'Ava', 'Isabella', 'Sophia'], 'Test 27');
test(sortPeople(["William","James","Oliver","Noah","Elijah","Lucas"], [195,194,193,192,191,190]), ['William', 'James', 'Oliver', 'Noah', 'Elijah', 'Lucas'], 'Test 28');
test(sortPeople(["Zachary","Christopher","Jonathan","Matthew"], [195,190,180,185]), ['Zachary', 'Christopher', 'Matthew', 'Jonathan'], 'Test 29');
test(sortPeople(["Charlie","Delta","Echo","Foxtrot","Golf"], [160,165,170,175,180]), ['Golf', 'Foxtrot', 'Echo', 'Delta', 'Charlie'], 'Test 30');
test(sortPeople(["Ava","Isabella","Sophia","Emma","Olivia","Mia"], [155,157,158,160,159,156]), ['Emma', 'Olivia', 'Sophia', 'Isabella', 'Mia', 'Ava'], 'Test 31');
test(sortPeople(["Grace","Heidi","Ivy","Judy","Kara"], [158,168,178,188,198]), ['Kara', 'Judy', 'Ivy', 'Heidi', 'Grace'], 'Test 32');
test(sortPeople(["Mila","Aaron","Jasper","Sophie"], [170,160,200,180]), ['Jasper', 'Sophie', 'Mila', 'Aaron'], 'Test 33');
test(sortPeople(["Finn","Jake","BMO","Marceline","LSP"], [160,170,155,180,150]), ['Marceline', 'Jake', 'Finn', 'BMO', 'LSP'], 'Test 34');
test(sortPeople(["Zoe","Chris","Ava","Ian"], [165,190,175,180]), ['Chris', 'Ian', 'Ava', 'Zoe'], 'Test 35');
test(sortPeople(["Grace","Katherine","Ava","Sophie","Liam"], [165,172,160,170,180]), ['Liam', 'Katherine', 'Sophie', 'Grace', 'Ava'], 'Test 36');
test(sortPeople(["Olivia","Emma","Ava","Sophia"], [158,159,160,157]), ['Ava', 'Emma', 'Olivia', 'Sophia'], 'Test 37');
test(sortPeople(["Evelyn","Arthur","Sophie","Miles"], [160,190,180,175]), ['Arthur', 'Sophie', 'Miles', 'Evelyn'], 'Test 38');
test(sortPeople(["Ethan","Abigail","Daniel","Ella"], [185,168,195,175]), ['Daniel', 'Ethan', 'Ella', 'Abigail'], 'Test 39');
test(sortPeople(["Ava","Ella","Scarlett","Grace"], [185,175,165,155]), ['Ava', 'Ella', 'Scarlett', 'Grace'], 'Test 40');
test(sortPeople(["Amelia","Olivia","Ava","Isla"], [168,169,170,171]), ['Isla', 'Ava', 'Olivia', 'Amelia'], 'Test 41');
test(sortPeople(["Noah","Sophia","Mia","Ethan"], [195,180,175,170]), ['Noah', 'Sophia', 'Mia', 'Ethan'], 'Test 42');
test(sortPeople(["Michael","Jordan","LeBron","Stephen","Kobe"], [198,206,203,191,198]), ['Jordan', 'LeBron', 'Michael', 'Kobe', 'Stephen'], 'Test 43');
test(sortPeople(["Alex","Brian","Carter","David","Ethan"], [155,165,175,185,195]), ['Ethan', 'David', 'Carter', 'Brian', 'Alex'], 'Test 44');
test(sortPeople(["Jonathan","Katherine","Lucas","Mia","Nina"], [175,165,180,170,160]), ['Lucas', 'Jonathan', 'Mia', 'Katherine', 'Nina'], 'Test 45');
test(sortPeople(["Lucas","Hannah","Olivia","Avery"], [185,168,190,175]), ['Olivia', 'Lucas', 'Avery', 'Hannah'], 'Test 46');
test(sortPeople(["Nina","Nora","Nina","Nora"], [160,162,158,159]), ['Nora', 'Nina', 'Nora', 'Nina'], 'Test 47');
test(sortPeople(["Daniel","Matilda","Samuel","Lucas","Mia","Emily","Oliver","Ava"], [182,165,178,184,170,167,190,173]), ['Oliver', 'Lucas', 'Daniel', 'Samuel', 'Ava', 'Mia', 'Emily', 'Matilda'], 'Test 48');
test(sortPeople(["Sophia","Olivia","Ava","Isabella","Mia"], [160,165,170,175,180]), ['Mia', 'Isabella', 'Ava', 'Olivia', 'Sophia'], 'Test 49');
test(sortPeople(["Sophia","Oliver","Isabella","Noah"], [172,180,168,182]), ['Noah', 'Oliver', 'Sophia', 'Isabella'], 'Test 50');
test(sortPeople(["Zoe","Sophia","Ava","Isabella"], [163,164,165,162]), ['Ava', 'Sophia', 'Zoe', 'Isabella'], 'Test 51');
test(sortPeople(["Oliver","Amelia","Evelyn","Jasper"], [185,170,180,190]), ['Jasper', 'Oliver', 'Evelyn', 'Amelia'], 'Test 52');
test(sortPeople(["Emily","Emma","Mia","Sophia","Isabella","Ava","Olivia"], [163,164,162,165,166,161,160]), ['Isabella', 'Sophia', 'Emma', 'Emily', 'Mia', 'Ava', 'Olivia'], 'Test 53');
test(sortPeople(["Isabella","Sophia","Olivia","Ava","Emma"], [162,172,182,192,202]), ['Emma', 'Ava', 'Olivia', 'Sophia', 'Isabella'], 'Test 54');
test(sortPeople(["Liam","Noah","Oliver","Lucas","Ethan"], [200,199,198,197,196]), ['Liam', 'Noah', 'Oliver', 'Lucas', 'Ethan'], 'Test 55');
test(sortPeople(["Scarlett","Ava","Emma","Olivia","Sophia"], [175,180,170,165,185]), ['Sophia', 'Ava', 'Scarlett', 'Emma', 'Olivia'], 'Test 56');
test(sortPeople(["Sophia","Emma","Ava","Olivia","Isabella","Mia"], [169,168,167,166,165,164]), ['Sophia', 'Emma', 'Ava', 'Olivia', 'Isabella', 'Mia'], 'Test 57');
test(sortPeople(["Benjamin","Logan","Jackson","David","Aiden"], [150,160,170,180,190]), ['Aiden', 'David', 'Jackson', 'Logan', 'Benjamin'], 'Test 58');
test(sortPeople(["Mia","Evelyn","Abigail","Scarlett","Amelia"], [180,175,170,165,160]), ['Mia', 'Evelyn', 'Abigail', 'Scarlett', 'Amelia'], 'Test 59');
test(sortPeople(["Camila","Lincoln","Madison","Isaac","Scarlett"], [167,187,170,182,163]), ['Lincoln', 'Isaac', 'Madison', 'Camila', 'Scarlett'], 'Test 60');
test(sortPeople(["Sophia","Isabella","Olivia","Ava","Mia"], [162,171,168,165,169]), ['Isabella', 'Mia', 'Olivia', 'Ava', 'Sophia'], 'Test 61');
test(sortPeople(["Theodore","George","Thomas","James"], [175,185,180,170]), ['George', 'Thomas', 'Theodore', 'James'], 'Test 62');
test(sortPeople(["Sam","Max","Leo","Sam"], [185,182,179,184]), ['Sam', 'Sam', 'Max', 'Leo'], 'Test 63');
test(sortPeople(["Charlotte","Sophia","Ava","Isabella"], [165,170,175,180]), ['Isabella', 'Ava', 'Sophia', 'Charlotte'], 'Test 64');
test(sortPeople(["Charlotte","Amelia","Evelyn","Abigail","Sofia"], [150,155,160,165,170]), ['Sofia', 'Abigail', 'Evelyn', 'Amelia', 'Charlotte'], 'Test 65');
test(sortPeople(["Lily","Aaron","Emma","Nolan"], [165,185,175,195]), ['Nolan', 'Aaron', 'Emma', 'Lily'], 'Test 66');
test(sortPeople(["Sophia","Isabella","Olivia","Ava"], [165,172,168,170]), ['Isabella', 'Ava', 'Olivia', 'Sophia'], 'Test 67');
test(sortPeople(["Ethan","Noah","Liam","Mason"], [180,185,170,175]), ['Noah', 'Ethan', 'Mason', 'Liam'], 'Test 68');
test(sortPeople(["Alexander","Sophia","Benjamin","Charlotte","Elijah","Mia","James","Amelia"], [180,166,175,168,183,172,178,171]), ['Elijah', 'Alexander', 'James', 'Benjamin', 'Mia', 'Amelia', 'Charlotte', 'Sophia'], 'Test 69');
test(sortPeople(["William","James","Oliver","Benjamin","Elijah","Lucas"], [187,186,185,184,183,182]), ['William', 'James', 'Oliver', 'Benjamin', 'Elijah', 'Lucas'], 'Test 70');
test(sortPeople(["Eva","Nathan","Ella","Samuel","Sophia"], [169,179,171,186,174]), ['Samuel', 'Nathan', 'Sophia', 'Ella', 'Eva'], 'Test 71');
test(sortPeople(["Zoe","Addison","Mia","Hannah","Abigail"], [168,167,166,165,164]), ['Zoe', 'Addison', 'Mia', 'Hannah', 'Abigail'], 'Test 72');
test(sortPeople(["Benjamin","Olivia","Daniel","Zachary"], [170,180,160,190]), ['Zachary', 'Olivia', 'Benjamin', 'Daniel'], 'Test 73');
test(sortPeople(["Carter","Jackson","Lucas","Logan","Benjamin"], [190,185,180,175,170]), ['Carter', 'Jackson', 'Lucas', 'Logan', 'Benjamin'], 'Test 74');
test(sortPeople(["Amelia","Oliver","Ava","Noah","Sophia","Ethan","Isabella","Elijah"], [172,188,169,185,171,182,168,184]), ['Oliver', 'Noah', 'Elijah', 'Ethan', 'Amelia', 'Sophia', 'Ava', 'Isabella'], 'Test 75');
test(sortPeople(["Michael","Christopher","Jessica","Matthew","Ashley"], [182,178,165,180,170]), ['Michael', 'Matthew', 'Christopher', 'Ashley', 'Jessica'], 'Test 76');
test(sortPeople(["Amelia","Sophia","Isabella","Olivia","Ava","Emma"], [150,151,152,153,154,155]), ['Emma', 'Ava', 'Olivia', 'Isabella', 'Sophia', 'Amelia'], 'Test 77');
test(sortPeople(["Catherine","Margaret","Joan","Eleanor"], [167,173,170,169]), ['Margaret', 'Joan', 'Eleanor', 'Catherine'], 'Test 78');
test(sortPeople(["Mason","Jacob","William","Ethan","Alexander"], [155,165,175,185,195]), ['Alexander', 'Ethan', 'William', 'Jacob', 'Mason'], 'Test 79');
test(sortPeople(["Sophia","Ava","Emma","Isabella","Olivia","Mia","Charlotte"], [169,168,167,166,165,164,163]), ['Sophia', 'Ava', 'Emma', 'Isabella', 'Olivia', 'Mia', 'Charlotte'], 'Test 80');
test(sortPeople(["Scarlett","Avery","James","Michael","Evelyn"], [162,177,181,180,166]), ['James', 'Michael', 'Avery', 'Evelyn', 'Scarlett'], 'Test 81');
test(sortPeople(["Sophia","Jackson","Ava","Lucas","Mia","Ethan"], [160,195,168,180,170,185]), ['Jackson', 'Ethan', 'Lucas', 'Mia', 'Ava', 'Sophia'], 'Test 82');
test(sortPeople(["Sophia","Isabella","Olivia","Ava","Emma"], [160,165,170,175,180]), ['Emma', 'Ava', 'Olivia', 'Isabella', 'Sophia'], 'Test 83');
test(sortPeople(["Alexander","Michael","Benjamin","Daniel"], [190,188,185,187]), ['Alexander', 'Michael', 'Daniel', 'Benjamin'], 'Test 84');
test(sortPeople(["Mia","Ethan","Amelia","Liam","Olivia"], [168,180,169,182,165]), ['Liam', 'Ethan', 'Amelia', 'Mia', 'Olivia'], 'Test 85');
test(sortPeople(["Sophia","Olivia","Ava","Isabella"], [165,170,175,180]), ['Isabella', 'Ava', 'Olivia', 'Sophia'], 'Test 86');
test(sortPeople(["Alexander","Michael","William","James","Benjamin"], [155,190,165,185,170]), ['Michael', 'James', 'Benjamin', 'William', 'Alexander'], 'Test 87');
test(sortPeople(["Emily","Emma","Sophia","Olivia","Isabella","Ava"], [161,160,159,158,157,156]), ['Emily', 'Emma', 'Sophia', 'Olivia', 'Isabella', 'Ava'], 'Test 88');
test(sortPeople(["Zoe","Lily","Rosie","Lena"], [160,162,158,159]), ['Lily', 'Zoe', 'Lena', 'Rosie'], 'Test 89');
test(sortPeople(["Zoe","Abigail","Daniel","Jackson","Harper"], [165,172,179,183,170]), ['Jackson', 'Daniel', 'Abigail', 'Harper', 'Zoe'], 'Test 90');
test(sortPeople(["Jackson","Aiden","Lucas","Caleb","Noah"], [151,161,171,181,191]), ['Noah', 'Caleb', 'Lucas', 'Aiden', 'Jackson'], 'Test 91');
test(sortPeople(["Alexander","Noah","Daniel","Matthew","Logan"], [182,181,183,180,179]), ['Daniel', 'Alexander', 'Noah', 'Matthew', 'Logan'], 'Test 92');
test(sortPeople(["Liam","Noah","Oliver","Elijah","James"], [170,180,190,200,210]), ['James', 'Elijah', 'Oliver', 'Noah', 'Liam'], 'Test 93');
test(sortPeople(["Lucas","Mason","Logan","Ethan"], [178,177,179,176]), ['Logan', 'Lucas', 'Mason', 'Ethan'], 'Test 94');
test(sortPeople(["Peter","Paul","Mary","John","Jane"], [175,180,165,170,160]), ['Paul', 'Peter', 'John', 'Mary', 'Jane'], 'Test 95');
test(sortPeople(["William","James","Benjamin","Henry","Noah","Liam"], [185,180,175,170,190,195]), ['Liam', 'Noah', 'William', 'James', 'Benjamin', 'Henry'], 'Test 96');
test(sortPeople(["Zoe","Lily","Ella","Amelia"], [160,165,170,175]), ['Amelia', 'Ella', 'Lily', 'Zoe'], 'Test 97');
test(sortPeople(["Amelia","Connor","Sophia","Ethan"], [175,195,180,185]), ['Connor', 'Ethan', 'Sophia', 'Amelia'], 'Test 98');
test(sortPeople(["William","James","Oliver","Benjamin","Elijah"], [190,185,180,175,170]), ['William', 'James', 'Oliver', 'Benjamin', 'Elijah'], 'Test 99');
test(sortPeople(["Emily","Ava","Sophia","Charlotte","Isabella"], [160,170,165,155,175]), ['Isabella', 'Ava', 'Sophia', 'Emily', 'Charlotte'], 'Test 100');
test(sortPeople(["Liam","Noah","Oliver","Elijah","William","James"], [179,178,177,176,175,174]), ['Liam', 'Noah', 'Oliver', 'Elijah', 'William', 'James'], 'Test 101');
test(sortPeople(["Jonathan","Jordan","Jack","Jared","James","Jackson"], [198,197,196,195,194,193]), ['Jonathan', 'Jordan', 'Jack', 'Jared', 'James', 'Jackson'], 'Test 102');
test(sortPeople(["Zoe","Yasmin","Xander","Will","Vera"], [150,160,170,180,190]), ['Vera', 'Will', 'Xander', 'Yasmin', 'Zoe'], 'Test 103');
test(sortPeople(["Ava","Isabella","Sophia","Mia"], [165,175,185,155]), ['Sophia', 'Isabella', 'Ava', 'Mia'], 'Test 104');
test(sortPeople(["Zara","Oliver","Isabella","Charlie"], [175,190,165,180]), ['Oliver', 'Charlie', 'Zara', 'Isabella'], 'Test 105');
test(sortPeople(["Alex","Brian","Craig","David","Evan"], [173,171,175,169,172]), ['Craig', 'Alex', 'Evan', 'Brian', 'David'], 'Test 106');
test(sortPeople(["Alexander","Michael","James","John","Daniel","David"], [172,171,173,174,175,176]), ['David', 'Daniel', 'John', 'James', 'Alexander', 'Michael'], 'Test 107');
test(sortPeople(["Scarlett","William","Lily","James","Ava","Thomas","Ella","Noah","Ethan","Mia","Olivia"], [174,185,167,180,168,182,170,183,181,169,165]), ['William', 'Noah', 'Thomas', 'Ethan', 'James', 'Scarlett', 'Ella', 'Mia', 'Ava', 'Lily', 'Olivia'], 'Test 108');
test(sortPeople(["Emma","Charlotte","Ava","Logan","Benjamin"], [163,170,167,178,185]), ['Benjamin', 'Logan', 'Charlotte', 'Ava', 'Emma'], 'Test 109');
test(sortPeople(["Sophie","Grayson","Hannah","Isaac","Layla"], [170,185,165,188,172]), ['Isaac', 'Grayson', 'Layla', 'Sophie', 'Hannah'], 'Test 110');
test(sortPeople(["Evelyn","Sophie","Isabella","Mia","Emma"], [168,170,166,165,172]), ['Emma', 'Sophie', 'Evelyn', 'Isabella', 'Mia'], 'Test 111');
test(sortPeople(["Zara","Xander","Yasmin","Will"], [160,175,170,165]), ['Xander', 'Yasmin', 'Will', 'Zara'], 'Test 112');
test(sortPeople(["Liam","Hannah","Sophie","Lucas"], [195,170,180,175]), ['Liam', 'Sophie', 'Lucas', 'Hannah'], 'Test 113');
test(sortPeople(["Liam","Olivia","Noah","Emma","Oliver","Ava","Sophia","Elijah","Amelia"], [181,168,185,171,183,167,170,182,173]), ['Noah', 'Oliver', 'Elijah', 'Liam', 'Amelia', 'Emma', 'Sophia', 'Olivia', 'Ava'], 'Test 114');
test(sortPeople(["Sophia","Ava","Isabella","Mia"], [160,170,175,180]), ['Mia', 'Isabella', 'Ava', 'Sophia'], 'Test 115');
test(sortPeople(["Avery","Grayson","Evan","Nathan"], [172,182,175,180]), ['Grayson', 'Nathan', 'Evan', 'Avery'], 'Test 116');
test(sortPeople(["Willow","Tara","Xander","Alyson","Reese"], [175,160,170,165,180]), ['Reese', 'Willow', 'Xander', 'Alyson', 'Tara'], 'Test 117');
test(sortPeople(["Eli","Ella","Ezra","Emilia","Evan"], [170,175,160,180,165]), ['Emilia', 'Ella', 'Eli', 'Evan', 'Ezra'], 'Test 118');
test(sortPeople(["James","Benjamin","Mason","Noah","Lucas"], [170,175,180,185,190]), ['Lucas', 'Noah', 'Mason', 'Benjamin', 'James'], 'Test 119');
test(sortPeople(["Jack","Rose","Cal","Fabian","Molly"], [170,175,165,180,160]), ['Fabian', 'Rose', 'Jack', 'Cal', 'Molly'], 'Test 120');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

