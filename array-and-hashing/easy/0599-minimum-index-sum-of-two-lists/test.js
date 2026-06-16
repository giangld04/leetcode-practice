// Test: 599. Minimum Index Sum Of Two Lists
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { findRestaurant } = require("./solution");

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

console.log("\n599. Minimum Index Sum Of Two Lists\n");

test(findRestaurant(["a","b","c","d","e"], ["e","d","c","b","a"]), ['a', 'b', 'c', 'd', 'e'], 'Test 1');
test(findRestaurant(["happy","sad","good"], ["sad","happy","good"]), ['happy', 'sad'], 'Test 2');
test(findRestaurant(["apple","banana"], ["banana","apple"]), ['apple', 'banana'], 'Test 3');
test(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]), ['Shogun'], 'Test 4');
test(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]), ['Shogun'], 'Test 5');
test(findRestaurant(["carrot","apple","banana","date"], ["banana","date","apple","fig","carrot"]), ['banana'], 'Test 6');
test(findRestaurant(["x","y","z"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), ['x'], 'Test 7');
test(findRestaurant(["Hotel California","Fever Tree","Hotel Armenia","Hotel Greece"], ["Hotel Greece","Hotel Armenia","Fever Tree","Hotel California"]), ['Hotel California', 'Fever Tree', 'Hotel Armenia', 'Hotel Greece'], 'Test 8');
test(findRestaurant(["dog","cat","bird","fish"], ["fish","bird","cat","dog","ant","bee","fly","spider"]), ['dog', 'cat', 'bird', 'fish'], 'Test 9');
test(findRestaurant(["Quickly","Brown","Fox","Jumps","Over","Lazy","Dog"], ["Dog","Lazy","Over","Jumps","Fox","Brown","Quickly"]), ['Quickly', 'Brown', 'Fox', 'Jumps', 'Over', 'Lazy', 'Dog'], 'Test 10');
test(findRestaurant(["RestaurantA","RestaurantB","RestaurantC"], ["RestaurantD","RestaurantB","RestaurantE","RestaurantA"]), ['RestaurantB'], 'Test 11');
test(findRestaurant(["Alpha","Bravo","Charlie","Delta"], ["Echo","Delta","Bravo","Alpha"]), ['Alpha', 'Bravo'], 'Test 12');
test(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC","Pizza Hut"], ["Pizza Hut","KFC","Burger King","Tapioca Express","Shogun"]), ['Shogun', 'Tapioca Express', 'Burger King', 'KFC', 'Pizza Hut'], 'Test 13');
test(findRestaurant(["restaurant1","restaurant2","restaurant3","restaurant4","restaurant5"], ["restaurant5","restaurant4","restaurant3","restaurant2","restaurant1"]), ['restaurant1', 'restaurant2', 'restaurant3', 'restaurant4', 'restaurant5'], 'Test 14');
test(findRestaurant(["one","two","three","four","five"], ["six","seven","eight","nine","one","ten","eleven","twelve","thirteen","fourteen","fifteen"]), ['one'], 'Test 15');
test(findRestaurant(["Fast Food","Quick Eats","Snack Bar","Food Truck"], ["Food Truck","Quick Eats","Snack Bar","Fast Food"]), ['Quick Eats'], 'Test 16');
test(findRestaurant(["starbucks","costa","dunkin","tim hortons"], ["tim hortons","dunkin","costa","starbucks"]), ['starbucks', 'costa', 'dunkin', 'tim hortons'], 'Test 17');
test(findRestaurant(["pancakes","waffles","omelette"], ["omelette","pancakes","waffles","french toast"]), ['pancakes'], 'Test 18');
test(findRestaurant(["Steakhouse","Seafood Grill","Wine Bar"], ["Wine Bar","Seafood Grill","Steakhouse"]), ['Steakhouse', 'Seafood Grill', 'Wine Bar'], 'Test 19');
test(findRestaurant(["Poke Bar","Sushi Spot","Tataki House"], ["Tataki House","Poke Bar","Sushi Spot"]), ['Poke Bar'], 'Test 20');
test(findRestaurant(["laptop","phone","tablet","monitor"], ["monitor","tablet","phone","laptop"]), ['laptop', 'phone', 'tablet', 'monitor'], 'Test 21');
test(findRestaurant(["a","b","c","d","e","f","g"], ["g","f","e","d","c","b","a"]), ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'Test 22');
test(findRestaurant(["coffee","tea","soda","juice"], ["juice","soda","coffee","tea"]), ['coffee'], 'Test 23');
test(findRestaurant(["Pasta Palace","Dumplings Galore","Steakhouse","Soup Kitchen"], ["Soup Kitchen","Steakhouse","Dumplings Galore","Pasta Palace"]), ['Pasta Palace', 'Dumplings Galore', 'Steakhouse', 'Soup Kitchen'], 'Test 24');
test(findRestaurant(["one","two","three","four","five","six"], ["six","five","four","three","two","one"]), ['one', 'two', 'three', 'four', 'five', 'six'], 'Test 25');
test(findRestaurant(["X","Y","Z","W","V"], ["V","W","X","Y","Z","A","B","C","D","E"]), ['X'], 'Test 26');
test(findRestaurant(["One","Two","Three","Four","Five"], ["Six","Seven","Eight","One","Five"]), ['One'], 'Test 27');
test(findRestaurant(["Red","Blue","Green","Yellow","Black"], ["Orange","Black","Pink","Green","Purple","Red"]), ['Red', 'Green', 'Black'], 'Test 28');
test(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Burger King","Tapioca Express","Shogun"]), ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], 'Test 29');
test(findRestaurant(["Paris","Lyon","Marseille","Toulouse"], ["Lyon","Toulouse","Marseille","Paris"]), ['Lyon'], 'Test 30');
test(findRestaurant(["apple","banana","cherry","date","elderberry"], ["elderberry","date","cherry","banana","apple"]), ['apple', 'banana', 'cherry', 'date', 'elderberry'], 'Test 31');
test(findRestaurant(["coke","pepsi","sprite","fanta"], ["fanta","sprite","pepsi","coke"]), ['coke', 'pepsi', 'sprite', 'fanta'], 'Test 32');
test(findRestaurant(["French Laundry","California Bistro","New England Clam Chowder","Texas BBQ"], ["Texas BBQ","New England Clam Chowder","California Bistro","French Laundry"]), ['French Laundry', 'California Bistro', 'New England Clam Chowder', 'Texas BBQ'], 'Test 33');
test(findRestaurant(["happy","joy","sad","angry"], ["sad","happy","angry","joy"]), ['happy'], 'Test 34');
test(findRestaurant(["XYZ","ABC","DEF","GHI"], ["JKL","MNO","XYZ","PQR"]), ['XYZ'], 'Test 35');
test(findRestaurant(["A","B","C","D","E","F","G","H","I","J"], ["J","I","H","G","F","E","D","C","B","A"]), ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], 'Test 36');
test(findRestaurant(["Pizza Palace","Pasta House","Taco Bistro"], ["Taco Bistro","Pizza Palace","Pasta House"]), ['Pizza Palace'], 'Test 37');
test(findRestaurant(["mexican","italian","japanese","chinese"], ["thai","japanese","italian","mexican","indian"]), ['mexican', 'italian', 'japanese'], 'Test 38');
test(findRestaurant(["coffee","tea","soda","water"], ["water","soda","coffee","tea"]), ['coffee'], 'Test 39');
test(findRestaurant(["pizza","burger","sushi","taco"], ["taco","burger","pizza","ramen"]), ['pizza', 'burger'], 'Test 40');
test(findRestaurant(["Central Perk","The Beanery","Mocha Cafe"], ["Latte Lounge","The Beanery","Central Perk","Espresso Bar"]), ['Central Perk', 'The Beanery'], 'Test 41');
test(findRestaurant(["hello","world","python","programming"], ["java","programming","python","world","hello"]), ['hello', 'world', 'python', 'programming'], 'Test 42');
test(findRestaurant(["cat cafe","dog cafe","parrot cafe"], ["parrot cafe","dog cafe","cat cafe","rabbit cafe"]), ['cat cafe', 'dog cafe', 'parrot cafe'], 'Test 43');
test(findRestaurant(["India Gate","Great Wall","Berlin Wall","Eiffel Tower"], ["Eiffel Tower","Berlin Wall","Great Wall","India Gate"]), ['India Gate', 'Great Wall', 'Berlin Wall', 'Eiffel Tower'], 'Test 44');
test(findRestaurant(["Los Angeles","New York","Chicago"], ["Chicago","Los Angeles","Houston","New York"]), ['Los Angeles'], 'Test 45');
test(findRestaurant(["pasta","pizza","lasagna"], ["pizza","lasagna","pasta","ravioli"]), ['pizza'], 'Test 46');
test(findRestaurant(["Fast","Food","Place","Awesome"], ["Awesome","Place","Food","Fast"]), ['Fast', 'Food', 'Place', 'Awesome'], 'Test 47');
test(findRestaurant(["x","y","z"], ["a","b","c","d","x","y","z"]), ['x'], 'Test 48');
test(findRestaurant(["red","blue","green","yellow"], ["yellow","green","blue","red"]), ['red', 'blue', 'green', 'yellow'], 'Test 49');
test(findRestaurant(["X","Y","Z"], ["W","V","U","X","T","S","R","Q","P","O","N","M","L","K","J","I","H","G","F","E","D","C","B","A","Z"]), ['X'], 'Test 50');
test(findRestaurant(["apple pie","cherry pie","blueberry pie"], ["blueberry pie","cherry pie","apple pie","pumpkin pie"]), ['apple pie', 'cherry pie', 'blueberry pie'], 'Test 51');
test(findRestaurant(["x","y","z"], ["z","x","y","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w"]), ['x'], 'Test 52');
test(findRestaurant(["taco","burrito","nachos","enchilada"], ["enchilada","taco","nachos","burrito"]), ['taco'], 'Test 53');
test(findRestaurant(["mango","pineapple","kiwi","grapefruit"], ["grapefruit","kiwi","pineapple","mango"]), ['mango', 'pineapple', 'kiwi', 'grapefruit'], 'Test 54');
test(findRestaurant(["red","blue","green","yellow"], ["yellow","green","blue","red","purple","orange","pink","brown"]), ['red', 'blue', 'green', 'yellow'], 'Test 55');
test(findRestaurant(["orange","grape","melon","kiwi"], ["kiwi","melon","grape","orange","pineapple","mango"]), ['orange', 'grape', 'melon', 'kiwi'], 'Test 56');
test(findRestaurant(["A","B","C","D","E","F"], ["F","E","D","C","B","A"]), ['A', 'B', 'C', 'D', 'E', 'F'], 'Test 57');
test(findRestaurant(["FastFood","Italian","Chinese","American","Mexican"], ["Thai","Indian","American","Chinese","Japanese"]), ['Chinese', 'American'], 'Test 58');
test(findRestaurant(["apple","orange","banana","grape"], ["grape","orange","banana","apple"]), ['orange'], 'Test 59');
test(findRestaurant(["Sushi Spot","Ramen Joint","BBQ Pit","Pizza Place"], ["Pizza Place","BBQ Pit","Ramen Joint","Sushi Spot"]), ['Sushi Spot', 'Ramen Joint', 'BBQ Pit', 'Pizza Place'], 'Test 60');
test(findRestaurant(["M","N","O","P","Q","R","S","T","U","V"], ["W","X","Y","Z","V","U","T","S","R","Q","P","O","N","M"]), ['M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'], 'Test 61');
test(findRestaurant(["bread","butter","jam","cheese"], ["cheese","jam","butter","bread"]), ['bread', 'butter', 'jam', 'cheese'], 'Test 62');
test(findRestaurant(["A","B","C","D","E","F","G"], ["H","I","J","K","A","L","M","F","N"]), ['A'], 'Test 63');
test(findRestaurant(["Savory Bites","Italian Delight","Vegan Cafe","Bakery"], ["Bakery","Vegan Cafe","Italian Delight","Savory Bites"]), ['Savory Bites', 'Italian Delight', 'Vegan Cafe', 'Bakery'], 'Test 64');
test(findRestaurant(["XYZ","ABC","DEF","GHI","JKL"], ["JKL","GHI","DEF","ABC","XYZ"]), ['XYZ', 'ABC', 'DEF', 'GHI', 'JKL'], 'Test 65');
test(findRestaurant(["salad","steak","soup","chicken"], ["chicken","salad","soup","steak"]), ['salad'], 'Test 66');
test(findRestaurant(["pizza","burger","sushi","taco"], ["salad","burger","taco","pizza"]), ['burger'], 'Test 67');
test(findRestaurant(["Unique","String","Here","Now"], ["Not","Here","Unique","String"]), ['Unique'], 'Test 68');
test(findRestaurant(["a","b","c","d","e","f","g","h","i","j"], ["j","i","h","g","f","e","d","c","b","a"]), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'Test 69');
test(findRestaurant(["Pizza","Burger","Pasta"], ["Sushi","Pizza","Pasta","Burger"]), ['Pizza'], 'Test 70');
test(findRestaurant(["Java Hut","Code Brew","Data Cafe"], ["Algo Eatery","Data Cafe","Java Hut","Code Brew"]), ['Java Hut'], 'Test 71');
test(findRestaurant(["Foo Bar","Foo Baz","Bar Baz","Foo Bar Baz"], ["Bar Baz","Foo Baz","Foo Bar","Foo Bar Baz","Baz Bar"]), ['Foo Bar', 'Foo Baz', 'Bar Baz'], 'Test 72');
test(findRestaurant(["Burger King","Shogun","KFC","Tapioca Express"], ["KFC","Tapioca Express","Shogun","Burger King","Sushi"]), ['KFC'], 'Test 73');
test(findRestaurant(["Breakfast","Lunch","Dinner"], ["Dinner","Breakfast","Lunch"]), ['Breakfast'], 'Test 74');
test(findRestaurant(["x","y","z","a","b","c"], ["c","b","a","z","y","x"]), ['x', 'y', 'z', 'a', 'b', 'c'], 'Test 75');
test(findRestaurant(["pizza","burger","sushi","taco"], ["salad","taco","pizza","burger"]), ['pizza'], 'Test 76');
test(findRestaurant(["Cafe 99","Mediterranean Grill","Taco Joint","BBQ Pit"], ["BBQ Pit","Taco Joint","Mediterranean Grill","Cafe 99"]), ['Cafe 99', 'Mediterranean Grill', 'Taco Joint', 'BBQ Pit'], 'Test 77');
test(findRestaurant(["alpha","beta","gamma","delta","epsilon"], ["epsilon","delta","gamma","beta","alpha","omega","psi"]), ['alpha', 'beta', 'gamma', 'delta', 'epsilon'], 'Test 78');
test(findRestaurant(["One","Two","Three","Four","Five"], ["Five","Four","Three","Two","One"]), ['One', 'Two', 'Three', 'Four', 'Five'], 'Test 79');
test(findRestaurant(["Coffee Spot","Deluxe Lounge","Burger Spot","Pancake House"], ["Pancake House","Burger Spot","Deluxe Lounge","Coffee Spot"]), ['Coffee Spot', 'Deluxe Lounge', 'Burger Spot', 'Pancake House'], 'Test 80');
test(findRestaurant(["hello","world","python","programming"], ["java","c++","programming","hello","ruby","go","swift"]), ['hello'], 'Test 81');
test(findRestaurant(["X","Y","Z","W"], ["W","V","U","X","Y","Z"]), ['X', 'W'], 'Test 82');
test(findRestaurant(["Restaurant1","Restaurant2","Restaurant3","Restaurant4"], ["Restaurant5","Restaurant6","Restaurant7","Restaurant1","Restaurant8"]), ['Restaurant1'], 'Test 83');
test(findRestaurant(["restaurant1","restaurant2","restaurant3","restaurant4","restaurant5"], ["restaurant6","restaurant5","restaurant4","restaurant3","restaurant2","restaurant1"]), ['restaurant1', 'restaurant2', 'restaurant3', 'restaurant4', 'restaurant5'], 'Test 84');
test(findRestaurant(["Alpha","Beta","Gamma","Delta"], ["Epsilon","Zeta","Delta","Alpha","Eta","Theta"]), ['Alpha'], 'Test 85');
test(findRestaurant(["Paris Bistro","La Belle Vie","Sushi Place","Taco Bell"], ["Taco Bell","Sushi Place","La Belle Vie","Pizza Hut"]), ['La Belle Vie', 'Sushi Place', 'Taco Bell'], 'Test 86');
test(findRestaurant(["m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["z","y","x","w","v","u","t","s","r","q","p","o","n","m"]), ['m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 'Test 87');
test(findRestaurant(["New York","Los Angeles","Chicago","Houston"], ["Phoenix","San Antonio","Houston","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","Charlotte","San Francisco","Indianapolis","Seattle","Denver","Washington","Boston","El Paso","Nashville","Detroit","Oklahoma City","Portland","Las Vegas","Memphis","Louisville","Milwaukee","Albuquerque","Tucson","Fresno","Sacramento","Long Beach","Kansas City","Mesa","Virginia Beach","Atlanta","Colorado Springs","Omaha","Raleigh","Miami","Oakland","Tulsa","Orlando","Minneapolis","Wichita","Arlington","New Orleans","Baltimore","Honolulu","Fort Wayne","Cincinnati","Alexandria","Tampa","Buffalo","Greensboro","Shreveport","Akron","Tacoma","Grand Rapids","Dayton","Henderson","Newark","Anchorage","Oxnard","Santa Ana","Riverside","Moreno Valley","Chesapeake","Garland","Irving","Huntington Beach","Santa Clarita","Fremont","Providence","Glendale","Oceanside","Longview","Knoxville","Aurora","Rockford","Spokane","Tacoma","Modesto","Fontana","Columbus","Springfield","Ogdensburg","Anaheim"]), ['Houston'], 'Test 88');
test(findRestaurant(["Alice","Bob","Charlie","David"], ["David","Charlie","Bob","Alice"]), ['Alice', 'Bob', 'Charlie', 'David'], 'Test 89');
test(findRestaurant(["apple","banana","cherry","date","elderberry"], ["elderberry","date","cherry","banana","apple","fig","grape"]), ['apple', 'banana', 'cherry', 'date', 'elderberry'], 'Test 90');
test(findRestaurant(["Grill Room","BBQ Joint","Smokers Bar"], ["Smokers Bar","Grill Room","BBQ Joint"]), ['Grill Room'], 'Test 91');
test(findRestaurant(["pasta","burger","pizza","sushi"], ["pizza","sushi","burger","pasta"]), ['pizza'], 'Test 92');
test(findRestaurant(["Sushi Bar","Pasta Place","Taco Stand","Burger Joint"], ["Steak House","Taco Stand","Pasta Place","Sushi Bar"]), ['Sushi Bar', 'Pasta Place', 'Taco Stand'], 'Test 93');

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
