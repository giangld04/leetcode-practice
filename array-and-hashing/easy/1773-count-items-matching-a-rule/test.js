// Test: 1773. Count Items Matching A Rule
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { countMatches } = require("./solution");

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

console.log("\n1773. Count Items Matching A Rule\n");

test(countMatches([["car","red","ferrari"],["bike","blue","harley"],["car","green","lambo"]], "color", "red"), 1, 'Test 1');
test(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone"), 2, 'Test 2');
test(countMatches([["laptop","black","dell"],["phone","black","samsung"],["tablet","black","ipad"]], "color", "black"), 3, 'Test 3');
test(countMatches([["laptop","black","dell"],["phone","white","samsung"],["tablet","gray","apple"]], "name", "apple"), 1, 'Test 4');
test(countMatches([["shirt","white","t-shirt"],["pants","black","jeans"],["shirt","white","dress-shirt"]], "type", "shirt"), 2, 'Test 5');
test(countMatches([["laptop","black","dell"],["tablet","white","samsung"],["laptop","silver","macbook"]], "name", "dell"), 1, 'Test 6');
test(countMatches([["shoe","white","nike"],["shirt","black","adidas"],["shoe","black","puma"]], "type", "shoe"), 2, 'Test 7');
test(countMatches([["book","red","novel"],["pen","blue","ballpoint"],["notebook","red","blank"]], "name", "blank"), 1, 'Test 8');
test(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"), 1, 'Test 9');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"]], "color", "red"), 2, 'Test 10');
test(countMatches([["laptop","black","dell"],["laptop","gray","hp"],["desktop","black","asus"]], "color", "black"), 2, 'Test 11');
test(countMatches([["book","brown","alice"],["pen","blue","bic"],["notebook","white","staples"]], "type", "book"), 1, 'Test 12');
test(countMatches([["car","red","ferrari"],["bike","blue","harley"],["car","red","lamborghini"]], "name", "ferrari"), 1, 'Test 13');
test(countMatches([["car","red","ferrari"],["bike","red","yamaha"],["truck","blue","ford"]], "type", "red"), 0, 'Test 14');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"]], "name", "ferrari"), 1, 'Test 15');
test(countMatches([["book","red","novel"],["pen","blue","ballpoint"],["book","brown","textbook"]], "type", "book"), 2, 'Test 16');
test(countMatches([["laptop","black","dell"],["smartphone","black","samsung"],["tablet","silver","ipad"]], "color", "black"), 2, 'Test 17');
test(countMatches([["smartphone","blue","samsung galaxy s20"],["smartphone","black","iphone 12"],["smartphone","red","huawei p30"],["smartphone","black","google pixel 4"],["smartphone","blue","oneplus 8t"]], "name", "iphone 12"), 1, 'Test 18');
test(countMatches([["camera","black","canon"],["camera","silver","nikon"],["camera","black","sony"],["camera","gold","fujifilm"],["camera","black","olympus"]], "name", "sony"), 1, 'Test 19');
test(countMatches([["laptop","black","dell"],["smartphone","blue","samsung"],["tablet","silver","ipad"],["smartwatch","black","apple"],["smartphone","red","motorola"]], "color", "black"), 2, 'Test 20');
test(countMatches([["electronics","black","headphone"],["electronics","silver","earbuds"],["electronics","white","speakers"],["electronics","blue","microphone"]], "type", "electronics"), 4, 'Test 21');
test(countMatches([["toys","yellow","balloon"],["toys","red","car"],["toys","blue","doll"],["toys","green","teddy"],["toys","yellow","block"]], "color", "yellow"), 2, 'Test 22');
test(countMatches([["computer","silver","dell"],["computer","black","apple"],["computer","silver","hp"],["computer","black","asus"],["computer","silver","lenovo"],["computer","black","microsoft"]], "color", "silver"), 3, 'Test 23');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["bicycle","black","trek"],["motorcycle","green","harley"],["car","blue","porsche"],["bike","red","giagiua"]], "color", "red"), 3, 'Test 24');
test(countMatches([["laptop","black","dell"],["smartphone","blue","samsung"],["tablet","silver","ipad"],["smartwatch","black","apple"],["laptop","gray","hp"]], "type", "laptop"), 2, 'Test 25');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["truck","black","volvo"],["motorcycle","red","honda"],["car","blue","tesla"]], "color", "red"), 3, 'Test 26');
test(countMatches([["shirt","blue","nike"],["pants","blue","adidas"],["shoes","blue","puma"],["hat","blue","reebok"],["shirt","blue","nike"]], "name", "nike"), 2, 'Test 27');
test(countMatches([["electronics","black","smartphone"],["electronics","blue","laptop"],["electronics","black","tablet"],["electronics","red","smartwatch"],["electronics","black","television"]], "type", "electronics"), 5, 'Test 28');
test(countMatches([["book","brown","tolkien"],["book","blue","harry_potter"],["magazine","black","national_geographic"],["book","blue","twilight"],["magazine","white","forbes"]], "name", "blue"), 0, 'Test 29');
test(countMatches([["chair","brown","ikea"],["table","white","ikea"],["couch","gray","ikea"],["desk","black","ikea"],["lamp","silver","ikea"]], "brand", "ikea"), 5, 'Test 30');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["motorcycle","black","honda"],["car","red","tesla"]], "type", "car"), 3, 'Test 31');
test(countMatches([["laptop","black","dell"],["smartphone","black","samsung"],["tablet","silver","ipad"],["smartwatch","gold","fitbit"],["laptop","gray","hp"]], "type", "laptop"), 2, 'Test 32');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["bike","red","ducati"],["car","blue","toyota"],["bike","white","honda"]], "name", "red"), 0, 'Test 33');
test(countMatches([["laptop","black","dell"],["smartphone","black","samsung"],["tablet","silver","ipad"],["smartwatch","gold","fitbit"],["laptop","gray","hp"],["laptop","black","macbook"]], "type", "laptop"), 3, 'Test 34');
test(countMatches([["book","blue","fiction"],["book","red","nonfiction"],["book","blue","science"],["book","green","history"],["book","blue","fantasy"]], "name", "nonfiction"), 1, 'Test 35');
test(countMatches([["smartphone","blue","samsung"],["smartphone","blue","googlepixel"],["smartphone","black","iphone"],["smartphone","blue","oneplus"]], "name", "googlepixel"), 1, 'Test 36');
test(countMatches([["chair","white","ikea"],["sofa","brown","ikea"],["table","brown","ikea"],["lamp","white","ikea"],["shelf","brown","ikea"],["cabinet","white","ikea"]], "type", "ikea"), 0, 'Test 37');
test(countMatches([["television","black","samsung"],["refrigerator","white","whirlpool"],["microwave","black","frigidaire"],["washer","stainless","lg"]], "color", "black"), 2, 'Test 38');
test(countMatches([["apparel","black","jacket"],["apparel","white","shirt"],["apparel","red","pants"],["apparel","blue","hat"]], "type", "apparel"), 4, 'Test 39');
test(countMatches([["camera","black","nikon"],["camera","silver","canon"],["camera","gold","leica"],["camera","black","olympus"],["camera","white","fujifilm"]], "color", "black"), 2, 'Test 40');
test(countMatches([["toy","green","car"],["toy","red","doll"],["toy","blue","block"],["toy","green","train"],["toy","red","helicopter"],["toy","blue","truck"]], "type", "toy"), 6, 'Test 41');
test(countMatches([["laptop","silver","macbook"],["smartphone","gold","iphone"],["tablet","rose gold","ipad"],["watch","black","apple watch"],["charger","white","anker"]], "type", "laptop"), 1, 'Test 42');
test(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"],["tablet","black","samsung"],["smartwatch","black","fitbit"],["laptop","blue","macbook"]], "color", "blue"), 2, 'Test 43');
test(countMatches([["smartphone","red","iphone"],["smartphone","black","galaxy"],["smartphone","white","nokia"],["smartphone","black","oneplus"],["smartphone","red","motorola"],["smartphone","blue","huawei"],["smartphone","red","oppo"],["smartphone","green","realme"]], "name", "red"), 0, 'Test 44');
test(countMatches([["laptop","black","dell"],["smartphone","black","samsung"],["tablet","silver","ipad"],["smartwatch","gold","fitbit"],["laptop","gray","hp"],["laptop","black","macbook"],["laptop","gray","asus"]], "name", "laptop"), 0, 'Test 45');
test(countMatches([["laptop","black","dell"],["smartphone","black","samsung"],["tablet","silver","ipad"],["laptop","white","macbook"],["smartphone","blue","googlepixel"]], "type", "laptop"), 2, 'Test 46');
test(countMatches([["book","blue","harry_potter"],["book","green","the_lord_of_the_rings"],["book","blue","pride_and_prejudice"],["book","red","the_hobbit"],["book","blue","1984"]], "color", "blue"), 3, 'Test 47');
test(countMatches([["dress","pink","prada"],["shoes","black","gucci"],["bag","brown","lv"],["jacket","blue","dolce_gabbana"],["hat","black","versace"]], "color", "black"), 2, 'Test 48');
test(countMatches([["watch","black","rolex"],["watch","white","omega"],["watch","gold","patekphilippue"],["watch","silver","seiko"],["watch","black","titan"]], "name", "seiko"), 1, 'Test 49');
test(countMatches([["house","white","mansions"],["house","blue","cottages"],["apartment","gray","flats"],["condo","white","duplex"],["townhouse","blue","terraced"],["house","white","bungalows"],["apartment","gray","penthouse"],["condo","blue","villa"],["townhouse","white","villas"],["house","gray","detached"]], "type", "house"), 4, 'Test 50');
test(countMatches([["smartphone","red","iphone"],["smartphone","black","galaxy"],["smartphone","white","nokia"],["smartphone","black","oneplus"],["smartphone","red","motorola"]], "color", "black"), 2, 'Test 51');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["motorcycle","green","harley"],["truck","black","ford"]], "type", "car"), 2, 'Test 52');
test(countMatches([["shirt","blue","tshirt"],["jeans","blue","levis"],["shirt","green","polo"],["shorts","blue","nike"],["pants","blue","adidas"],["shirt","blue","reebok"]], "color", "blue"), 5, 'Test 53');
test(countMatches([["shirt","blue","nike"],["pants","red","adidas"],["hat","blue","reebok"],["jacket","green","nike"],["shoes","black","puma"]], "name", "nike"), 2, 'Test 54');
test(countMatches([["television","black","samsung"],["television","silver","lg"],["television","gray","tcl"],["television","black","sony"],["television","red","panasonic"]], "type", "television"), 5, 'Test 55');
test(countMatches([["car","red","ferrari"],["car","blue","ford"],["car","red","lamborghini"],["truck","black","mercedes"],["car","red","tesla"]], "color", "red"), 3, 'Test 56');
test(countMatches([["kitchenware","white","plate"],["kitchenware","blue","spoon"],["kitchenware","white","bowl"],["kitchenware","red","fork"],["kitchenware","white","knife"]], "color", "white"), 3, 'Test 57');
test(countMatches([["shirt","blue","nike"],["pants","blue","adidas"],["shoes","black","reebok"],["hat","red","nike"],["jacket","blue","puma"],["watch","silver","rolex"],["belt","brown","gucci"],["scarf","red","h&m"],["glasses","black","rayban"],["sunglasses","red","polo"],["boots","blue","converse"],["sandals","white","havaianas"],["t-shirt","red","nike"],["bag","black","louisvuitton"],["cap","gray","nike"]], "name", "nike"), 4, 'Test 58');
test(countMatches([["shirt","blue","tshirt"],["jeans","blue","levis"],["shirt","green","polo"],["shorts","blue","nike"],["pants","blue","adidas"]], "name", "nike"), 1, 'Test 59');
test(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"],["tv","black","samsung"],["monitor","silver","dell"],["laptop","gray","hp"],["phone","black","nokia"],["tablet","gold","ipad"]], "type", "phone"), 3, 'Test 60');
test(countMatches([["book","red","pride_and_prejudice"],["book","blue","the_little_prince"],["book","green","to_kill_a_mockingbird"],["book","red","1984"],["book","yellow","moby_dick"]], "color", "red"), 2, 'Test 61');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["truck","white","ford"],["car","black","tesla"],["car","red","bmw"]], "color", "red"), 3, 'Test 62');
test(countMatches([["electronics","white","samsung"],["electronics","black","lg"],["electronics","silver","sony"],["electronics","black","toshiba"],["electronics","white","panasonic"]], "color", "black"), 2, 'Test 63');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["truck","white","ford"],["car","black","tesla"]], "color", "red"), 2, 'Test 64');
test(countMatches([["laptop","black","dell"],["smartphone","black","samsung"],["tablet","silver","ipad"],["smartwatch","gold","fitbit"],["laptop","gray","hp"]], "name", "dell"), 1, 'Test 65');
test(countMatches([["tv","black","samsung"],["tv","white","lg"],["tv","silver","sony"],["tv","black","toshiba"],["tv","white","vizio"]], "color", "white"), 2, 'Test 66');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["truck","white","ford"],["car","black","tesla"],["car","red","bmw"],["truck","black","chevrolet"]], "color", "black"), 2, 'Test 67');
test(countMatches([["toy","red","car"],["toy","blue","doll"],["toy","green","car"],["toy","red","ball"],["toy","green","doll"],["toy","blue","ball"]], "name", "car"), 2, 'Test 68');
test(countMatches([["dog","black","labrador"],["cat","white","siamese"],["dog","brown","golden_retriever"],["bird","blue","parakeet"],["fish","red","goldfish"]], "type", "dog"), 2, 'Test 69');
test(countMatches([["clothing","blue","shirt"],["clothing","red","t-shirt"],["clothing","blue","jeans"],["clothing","green","pants"],["clothing","blue","jacket"],["clothing","yellow","shorts"],["clothing","blue","hat"]], "color", "blue"), 4, 'Test 70');
test(countMatches([["chair","brown","leather"],["table","white","wood"],["lamp","black","glass"],["sofa","gray","cotton"],["rug","blue","carpet"],["cabinet","black","oak"],["bed","white","sheets"],["mirror","silver","frame"],["shelf","black","metal"]], "color", "black"), 3, 'Test 71');
test(countMatches([["shirt","blue","nike"],["shirt","red","adidas"],["shirt","blue","puma"],["shirt","green","reebok"],["shirt","blue","underarmour"]], "name", "puma"), 1, 'Test 72');
test(countMatches([["book","red","harrypotter"],["pen","blue","bic"],["book","red","twilight"],["notebook","white","blank"],["book","green","thehobbit"],["book","red","catch22"],["marker","blue","sharpie"],["book","red","prideandprejudice"]], "name", "red"), 0, 'Test 73');
test(countMatches([["mouse","black","logitech"],["mouse","white","razer"],["mouse","blue","corsair"],["mouse","black","microsoft"],["mouse","black","steelseries"]], "color", "black"), 3, 'Test 74');
test(countMatches([["shirt","white","nike"],["pants","blue","adidas"],["shoes","black","puma"],["hat","white","reebok"],["socks","blue","nike"]], "color", "blue"), 2, 'Test 75');
test(countMatches([["car","red","ferrari"],["bike","red","ducati"],["motorcycle","red","harley_davidson"],["scooter","red","vespa"],["convertible","red","porsche"]], "color", "red"), 5, 'Test 76');
test(countMatches([["couch","brown","sofa"],["chair","black","office"],["table","brown","dining"],["lamp","black","reading"],["cabinet","brown","kitchen"]], "color", "brown"), 3, 'Test 77');
test(countMatches([["keyboard","black","logitech"],["keyboard","white","razer"],["keyboard","blue","corsair"],["keyboard","black","microsoft"],["keyboard","black","filco"]], "type", "keyboard"), 5, 'Test 78');
test(countMatches([["shirt","blue","nike"],["pants","blue","adidas"],["shoes","black","reebok"],["hat","red","nike"],["jacket","blue","puma"],["watch","silver","rolex"],["belt","brown","gucci"]], "name", "nike"), 2, 'Test 79');
test(countMatches([["laptop","black","dell"],["laptop","gray","hp"],["desktop","black","asus"],["monitor","black","dell"],["laptop","silver","lenovo"]], "type", "laptop"), 3, 'Test 80');
test(countMatches([["shirt","blue","tshirt"],["jeans","blue","levis"],["shirt","green","polo"],["shorts","blue","nike"],["pants","blue","adidas"]], "color", "blue"), 4, 'Test 81');
test(countMatches([["camera","black","canon"],["smartphone","white","iphone"],["tablet","gold","ipad"],["smartwatch","black","applewatch"],["laptop","silver","macbook"]], "color", "black"), 2, 'Test 82');
test(countMatches([["furniture","brown","table"],["furniture","white","sofa"],["furniture","brown","chair"],["furniture","black","cabinet"],["furniture","white","lamp"],["furniture","brown","dresser"]], "color", "brown"), 3, 'Test 83');
test(countMatches([["computer","black","macbook"],["smartwatch","silver","apple"],["tablet","white","samsung"],["laptop","blue","dell"],["desktop","black","asus"],["computer","silver","lenovo"],["smartwatch","white","fitbit"],["tablet","black","xiaomi"]], "color", "white"), 2, 'Test 84');
test(countMatches([["camera","black","canon"],["camera","silver","nikon"],["lens","black","canon"],["camera","white","sony"],["tripod","gray","benro"],["camera","black","fujifilm"]], "brand", "canon"), 2, 'Test 85');
test(countMatches([["book","green","encyclopedia"],["book","red","dictionary"],["book","blue","novel"],["book","green","textbook"],["book","red","guide"]], "color", "green"), 2, 'Test 86');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["bicycle","black","trek"],["motorcycle","green","harley"]], "color", "red"), 2, 'Test 87');
test(countMatches([["headphones","black","sony"],["headphones","black","apple"],["headphones","black","sennheiser"],["headphones","black","bose"],["headphones","black","jaybird"]], "color", "black"), 5, 'Test 88');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["truck","black","ford"],["bicycle","green","giant"]], "color", "red"), 2, 'Test 89');
test(countMatches([["toy","red","car"],["toy","blue","doll"],["toy","red","truck"],["toy","yellow","balloon"],["toy","blue","teddybear"],["toy","red","firetruck"]], "type", "toy"), 6, 'Test 90');
test(countMatches([["camera","black","nikon"],["phone","black","iphone"],["tablet","black","ipad"],["smartwatch","black","applewatch"],["laptop","black","macbook"]], "color", "black"), 5, 'Test 91');
test(countMatches([["sneakers","white","nike"],["tshirt","blue","adidas"],["jeans","black","puma"],["hat","red","nike"],["pants","blue","reebok"]], "name", "nike"), 2, 'Test 92');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["bike","red","ducati"],["car","blue","toyota"],["bike","white","honda"],["car","red","mustang"],["bike","black","ktm"]], "type", "bike"), 4, 'Test 93');
test(countMatches([["computer","black","macbook"],["smartwatch","silver","apple"],["tablet","white","samsung"],["laptop","blue","dell"],["desktop","black","asus"]], "type", "computer"), 1, 'Test 94');
test(countMatches([["monitor","black","asus"],["monitor","white","dell"],["monitor","blue","benq"],["monitor","silver","acer"],["monitor","black","lg"]], "type", "monitor"), 5, 'Test 95');
test(countMatches([["smartphone","black","samsung"],["smartphone","blue","iphone"],["smartphone","black","google"],["smartphone","red","oneplus"],["smartphone","black","zte"]], "color", "black"), 3, 'Test 96');
test(countMatches([["shirt","black","nike"],["jeans","blue","levis"],["jacket","brown","adidas"],["shoes","white","nike"],["hat","black","nike"],["socks","blue","addidas"],["gloves","brown","adidas"],["shorts","white","levis"]], "color", "black"), 2, 'Test 97');
test(countMatches([["laptop","black","dell"],["smartphone","black","samsung"],["tablet","silver","ipad"],["smartphone","blue","huawei"],["laptop","red","macbook"]], "type", "smartphone"), 2, 'Test 98');
test(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"],["phone","black","samsung"],["laptop","gray","hp"],["tablet","silver","ipad"]], "type", "phone"), 3, 'Test 99');
test(countMatches([["laptop","black","dell"],["laptop","gray","hp"],["desktop","black","asus"],["laptop","black","lenovo"],["desktop","black","acer"]], "color", "black"), 4, 'Test 100');
test(countMatches([["car","red","ferrari"],["bike","blue","yamaha"],["car","red","lamborghini"],["truck","white","ford"],["car","black","tesla"]], "name", "tesla"), 1, 'Test 101');
test(countMatches([["shirt","blue","tshirt"],["jeans","blue","levis"],["shirt","green","polo"],["shorts","blue","nike"],["pants","blue","adidas"],["shirt","blue","reebok"],["shirt","blue","puma"]], "name", "blue"), 0, 'Test 102');
test(countMatches([["tv","black","samsung"],["fridge","white","lg"],["microwave","black","whirlpool"],["stove","black","bosch"]], "color", "black"), 3, 'Test 103');
test(countMatches([["vehicle","red","ferrari"],["vehicle","blue","lamborghini"],["vehicle","red","porsche"],["vehicle","black","ferrari"],["vehicle","red","mustang"]], "name", "ferrari"), 2, 'Test 104');
test(countMatches([["shirt","blue","nike"],["pants","blue","adidas"],["hat","blue","puma"],["socks","green","reebok"],["jacket","blue","the north face"]], "color", "blue"), 4, 'Test 105');
test(countMatches([["bed","wood","ikea"],["sofa","leather","furniture_king"],["chair","plastic","home_decor"],["lamp","metal","ikea"],["table","glass","ikea"]], "brand", "ikea"), 3, 'Test 106');
test(countMatches([["phone","blue","pixel"],["phone","blue","galaxy"],["phone","blue","nokia"],["phone","blue","oneplus"],["phone","blue","google"],["phone","blue","xiaomi"],["phone","blue","htc"]], "name", "google"), 1, 'Test 107');
test(countMatches([["smartwatch","silver","apple"],["smartwatch","gold","rolex"],["bracelet","silver","tissot"],["pendant","gold","omega"],["bracelet","silver","casio"]], "name", "silver"), 0, 'Test 108');

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
