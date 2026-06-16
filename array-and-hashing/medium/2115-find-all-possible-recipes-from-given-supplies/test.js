// Test: 2115. Find All Possible Recipes From Given Supplies
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { findAllRecipes } = require("./solution");

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

console.log("\n2115. Find All Possible Recipes From Given Supplies\n");

test(findAllRecipes(["bread","sandwich"], [["yeast","flour"],["bread","meat"]], ["yeast","flour","meat"]), ['bread', 'sandwich'], 'Test 1');
test(findAllRecipes(["pasta","salad"], [["noodles","sauce"],["lettuce","tomato"]], ["noodles","sauce","lettuce"]), ['pasta'], 'Test 2');
test(findAllRecipes(["bread","sandwich","burger"], [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], ["yeast","flour","meat"]), ['bread', 'sandwich', 'burger'], 'Test 3');
test(findAllRecipes(["cake","muffin"], [["flour","sugar"],["flour","eggs"]], ["flour","sugar"]), ['cake'], 'Test 4');
test(findAllRecipes(["bread"], [["yeast","flour"]], ["yeast","flour","corn"]), ['bread'], 'Test 5');
test(findAllRecipes(["sushi","tempura","udon"], [["rice","seaweed","fish"],["vegetables","tempura_flour"],["noodles","broth","onion"], ["rice","seaweed","fish","vegetables","tempura_flour","noodles","broth","onion"]), Error: Solution.findAllRecipes[] missing 1 required positional argument: 'ingredients', 'Test 6');
test(findAllRecipes(["cake","muffin","brownie"], [["flour","sugar","eggs"],["flour","sugar","butter"],["flour","sugar","chocolate"]], ["flour","sugar","eggs"]), ['cake'], 'Test 7');
test(findAllRecipes(["cake","muffin"], [["flour","sugar","eggs"],["flour","sugar","eggs","butter"]], ["flour","sugar","eggs","butter"]), ['cake', 'muffin'], 'Test 8');
test(findAllRecipes(["pizza","pasta"], [["dough","tomato","cheese"],["noodles","sauce"]], ["dough","tomato","cheese","noodles","sauce"]), ['pizza', 'pasta'], 'Test 9');
test(findAllRecipes(["steak_dinner","chicken_soup","pasta"], [["steak","potato","carrot"],["chicken","vegetable_stock","carrot"],["noodles","sauce","meat"]], ["steak","potato","carrot","chicken","vegetable_stock","noodles","sauce","meat"]), ['steak_dinner', 'chicken_soup', 'pasta'], 'Test 10');
test(findAllRecipes(["soup","stew"], [["water","vegetables","spices"],["water","meat","vegetables","spices"]], ["water","vegetables","spices"]), ['soup'], 'Test 11');
test(findAllRecipes(["cake","ice_cream","brownie"], [["flour","sugar","eggs"],["milk","sugar","vanilla"],["flour","cocoa","sugar"]], ["flour","sugar","eggs","milk","vanilla"]), ['cake', 'ice_cream'], 'Test 12');
test(findAllRecipes(["sushi","ramen"], [["rice","seaweed","salmon"],["noodles","water","meat","vegetables"]], ["rice","noodles","water","meat"]), [], 'Test 13');
test(findAllRecipes(["cake","pudding","pie"], [["flour","sugar","eggs"],["milk","sugar","flour"],["crust","fruit","filling"]], ["flour","sugar","eggs","milk","crust","fruit","filling"]), ['cake', 'pudding', 'pie'], 'Test 14');
test(findAllRecipes(["cake","brownie"], [["flour","sugar","eggs"],["flour","cocoa","sugar"]], ["flour","sugar","eggs"]), ['cake'], 'Test 15');
test(findAllRecipes(["omelette","pancake","waffle"], [["eggs","milk"],["flour","eggs","milk"],["flour","eggs","milk","butter"]], ["eggs","milk","flour","butter","sugar"]), ['omelette', 'pancake', 'waffle'], 'Test 16');
test(findAllRecipes(["bread","sandwich","burger","wrap"], [["yeast","flour"],["bread","meat"],["bread","meat","cheese"],["bread","cheese","lettuce"]], ["yeast","flour","meat","cheese","lettuce"]), ['bread', 'sandwich', 'burger', 'wrap'], 'Test 17');
test(findAllRecipes(["soup","stew"], [["carrot","onion"],["carrot","potato","beef"]], ["carrot","onion","beef","potato","pepper"]), ['soup', 'stew'], 'Test 18');
test(findAllRecipes(["chocolate_chip_cookie","oatmeal_cookie"], [["flour","sugar","chocolate_chips"],["flour","sugar","oatmeal"]], ["flour","sugar","oatmeal"]), ['oatmeal_cookie'], 'Test 19');
test(findAllRecipes(["pizza","pasta","omelette"], [["dough","tomato","cheese"],["noodles","sauce"],["eggs","milk"]], ["dough","tomato","cheese","noodles","sauce","eggs","milk","flour"]), ['pizza', 'pasta', 'omelette'], 'Test 20');
test(findAllRecipes(["juice","smoothie"], [["fruit","water"],["fruit","yogurt","banana"]], ["fruit","water","yogurt","banana","milk"]), ['juice', 'smoothie'], 'Test 21');
test(findAllRecipes(["steak","chicken","beef"], [["beef","salt"],["chicken","pepper"],["salt","spice"]], ["salt","pepper","spice","chicken"]), ['beef', 'chicken', 'steak'], 'Test 22');
test(findAllRecipes(["cheese_pizza","pepperoni_pizza","margherita_pizza"], [["dough","tomato","cheese"],["dough","tomato","cheese","pepperoni"],["dough","tomato","basil","cheese"]], ["dough","tomato","cheese","pepperoni","basil"]), ['cheese_pizza', 'pepperoni_pizza', 'margherita_pizza'], 'Test 23');
test(findAllRecipes(["soup","stew"], [["water","vegetables","meat"],["water","vegetables","meat","tomato"]], ["water","vegetables","meat","tomato","salt"]), ['soup', 'stew'], 'Test 24');
test(findAllRecipes(["pizza","taco","pasta"], [["dough","tomato","cheese"],["tortilla","meat","cheese"],["noodles","sauce","meat"]], ["dough","tomato","cheese","tortilla","meat","noodles","sauce"]), ['pizza', 'taco', 'pasta'], 'Test 25');
test(findAllRecipes(["salmon","trout"], [["salmon_filet","vegetables","lemon"],["trout_filet","vegetables","lemon"]], ["vegetables","lemon"]), [], 'Test 26');
test(findAllRecipes(["steak_dinner","pasta_dinner","chicken_dinner"], [["steak","potato","carrot"],["pasta","sauce"],["chicken","vegetable_oil"]], ["steak","potato","carrot","pasta","sauce","chicken","vegetable_oil"]), ['steak_dinner', 'pasta_dinner', 'chicken_dinner'], 'Test 27');
test(findAllRecipes(["smoothie","juice"], [["banana","orange","milk"],["apple","orange","water"]], ["banana","orange","water"]), [], 'Test 28');
test(findAllRecipes(["apple_crisp","apple_pie","blueberry_pie"], [["apple","oat","sugar"],["apple","pie_crust"],["blueberry","pie_crust"]], ["apple","oat","sugar","blueberry","pie_crust"]), ['apple_crisp', 'apple_pie', 'blueberry_pie'], 'Test 29');
test(findAllRecipes(["chocolate_cake","vanilla_cake","red_velvet"], [["flour","eggs","chocolate","sugar"],["flour","eggs","vanilla","sugar"],["chocolate_cake","red_food_color"]], ["flour","eggs","chocolate","vanilla","sugar","red_food_color"]), ['chocolate_cake', 'vanilla_cake', 'red_velvet'], 'Test 30');
test(findAllRecipes(["omelette","frittata"], [["eggs","cheese"],["eggs","cheese","spinach","tomato"]], ["eggs","cheese","spinach"]), ['omelette'], 'Test 31');
test(findAllRecipes(["cake_layer","chocolate_ganache","frosting"], [["flour","sugar","eggs"],["chocolate","cream"],["powdered_sugar","milk"]], ["flour","sugar","eggs","chocolate","cream","powdered_sugar","milk"]), ['cake_layer', 'chocolate_ganache', 'frosting'], 'Test 32');
test(findAllRecipes(["pizza","pasta"], [["dough","tomato_sauce","cheese"],["dough","noodles","sauce"]], ["dough","tomato_sauce","cheese","noodles","sauce"]), ['pizza', 'pasta'], 'Test 33');
test(findAllRecipes(["taco","burrito","enchilada"], [["beef","shell"],["beef","tortilla"],["beef","taco_shell","sauce"]], ["beef","shell","tortilla","taco_shell","sauce"]), ['taco', 'burrito', 'enchilada'], 'Test 34');
test(findAllRecipes(["chocolate_cake","vanilla_cake","red_velvet_cake"], [["flour","sugar","cocoa"],["flour","sugar"],["vanilla_cake","cocoa","red_food_color"]], ["flour","sugar","cocoa","red_food_color"]), ['vanilla_cake', 'chocolate_cake', 'red_velvet_cake'], 'Test 35');
test(findAllRecipes(["omelette","pancakes"], [["eggs","milk"],["eggs","flour","milk"]], ["eggs","milk","flour","butter"]), ['omelette', 'pancakes'], 'Test 36');
test(findAllRecipes(["sandwich","burger","omelet"], [["bread","meat","cheese"],["bread","patty","cheese"],["eggs","cheese","spinach"]], ["bread","meat","cheese","patty","eggs","spinach"]), ['sandwich', 'burger', 'omelet'], 'Test 37');
test(findAllRecipes(["salmon","steak","chicken"], [["salmon_fillet","lemon"],["beef_steak","salt"],["chicken_breast","pepper"]], ["salmon_fillet","lemon","beef_steak","salt","chicken_breast","pepper","oil"]), ['salmon', 'steak', 'chicken'], 'Test 38');
test(findAllRecipes(["cake","brownie"], [["sugar","flour","eggs"],["sugar","chocolate","eggs"]], ["sugar","eggs"]), [], 'Test 39');
test(findAllRecipes(["cake","pie","tiramisu"], [["flour","eggs","sugar"],["apple","flour","sugar"],["cake","coffee","mascarpone"]], ["flour","eggs","sugar","apple","coffee","mascarpone"]), ['cake', 'pie', 'tiramisu'], 'Test 40');
test(findAllRecipes(["soup","stew","salad","sandwich"], [["carrot","onion"],["carrot","potato","beef"],["lettuce","cucumber"],["bread","cheese"]], ["carrot","onion","beef","potato","pepper","lettuce","cucumber","bread","cheese","eggs"]), ['soup', 'stew', 'salad', 'sandwich'], 'Test 41');
test(findAllRecipes(["chocolate_cake","vanilla_cake","red_velvet_cake"], [["flour","sugar","eggs","chocolate"],["flour","sugar","eggs"],["vanilla_cake","red_food_color"]], ["flour","sugar","eggs","chocolate","red_food_color"]), ['vanilla_cake', 'chocolate_cake', 'red_velvet_cake'], 'Test 42');
test(findAllRecipes(["mashed_potatoes","grilled_cheese","mac_n_cheese"], [["potatoes","butter","milk"],["bread","cheese"],["macaroni","cheese","milk"]], ["potatoes","butter","milk","bread","cheese","macaroni"]), ['mashed_potatoes', 'grilled_cheese', 'mac_n_cheese'], 'Test 43');
test(findAllRecipes(["pancake","waffle","muffin"], [["flour","eggs","milk"],["flour","eggs","milk","butter"],["flour","sugar","eggs"]], ["flour","eggs","milk","butter","sugar"]), ['pancake', 'waffle', 'muffin'], 'Test 44');
test(findAllRecipes(["apple_pie","blueberry_pie"], [["apple","pie_crust"],["blueberry","pie_crust"]], ["apple","blueberry","pie_crust"]), ['apple_pie', 'blueberry_pie'], 'Test 45');
test(findAllRecipes(["chocolate_cake","vanilla_cake","red_velvet_cake"], [["flour","sugar","eggs","chocolate"],["flour","sugar","eggs"],["vanilla_cake","red_food_coloring"]], ["flour","sugar","eggs","chocolate","vanilla","red_food_coloring"]), ['vanilla_cake', 'chocolate_cake', 'red_velvet_cake'], 'Test 46');
test(findAllRecipes(["pizza","pasta","soup"], [["dough","tomato","cheese"],["noodles","sauce"],["carrots","onions","water"]], ["dough","tomato","noodles","carrots"]), [], 'Test 47');
test(findAllRecipes(["a","b","c","d"], [["e","f"],["a","g"],["b","h"],["c","i"]], ["e","f","g","h","i"]), ['a', 'b', 'c', 'd'], 'Test 48');
test(findAllRecipes(["beer","wine"], [["grains","water","hops"],["grapes","yeast","sugar"]], ["grains","water","hops","grapes","yeast","sugar"]), ['beer', 'wine'], 'Test 49');
test(findAllRecipes(["pizza","pasta","salad"], [["dough","sauce","cheese"],["noodles","sauce"],["lettuce","tomato"]], ["dough","cheese","noodles","sauce","lettuce","tomato","spinach"]), ['pizza', 'pasta', 'salad'], 'Test 50');
test(findAllRecipes(["smoothie","juice"], [["banana","strawberry","milk"],["apple","orange","water"]], ["banana","strawberry","milk","apple","orange"]), ['smoothie'], 'Test 51');
test(findAllRecipes(["fish_stew","chicken_stew","beef_stew"], [["fish","potatoes","carrots"],["chicken","potatoes","carrots"],["beef","potatoes","carrots"]], ["potatoes","carrots","fish","chicken"]), ['fish_stew', 'chicken_stew'], 'Test 52');
test(findAllRecipes(["omelette","pancake"], [["eggs","milk"],["flour","eggs","milk"]], ["eggs","milk","flour","butter"]), ['omelette', 'pancake'], 'Test 53');
test(findAllRecipes(["cheesecake","ice_cream","fruit_salad"], [["cream","sugar","cheese"],["cream","sugar"],["fruit","sugar"]], ["cream","sugar","cheese","fruit"]), ['ice_cream', 'cheesecake', 'fruit_salad'], 'Test 54');
test(findAllRecipes(["omelette","scrambled_eggs"], [["egg","cheese","milk"],["egg","milk"]], ["egg","milk","cheese","salt"]), ['scrambled_eggs', 'omelette'], 'Test 55');
test(findAllRecipes(["chocolate_cake","vanilla_cake"], [["flour","sugar","cocoa"],["flour","sugar"]], ["flour","sugar","cocoa"]), ['vanilla_cake', 'chocolate_cake'], 'Test 56');
test(findAllRecipes(["bread","toast","baguette"], [["flour","yeast"],["bread"],["flour","yeast","oil"]], ["flour","yeast","oil","butter"]), ['bread', 'baguette', 'toast'], 'Test 57');
test(findAllRecipes(["soup","stew","omelette"], [["water","vegetables","salt"],["water","meat","vegetables"],["eggs","cheese","pepper"]], ["water","vegetables","meat","eggs","cheese","pepper"]), ['stew', 'omelette'], 'Test 58');
test(findAllRecipes(["banana_bread","apple_pie","cheese_pie"], [["banana","flour","eggs","sugar"],["apple","flour","sugar","eggs"],["cheese","flour","eggs","sugar"]], ["banana","apple","flour","eggs","sugar","cheese"]), ['banana_bread', 'apple_pie', 'cheese_pie'], 'Test 59');
test(findAllRecipes(["steak_dish","chicken_dish","beef_dish"], [["steak","salt","pepper"],["chicken","salt","pepper"],["beef","salt","pepper"]], ["steak","chicken","beef","salt","pepper"]), ['steak_dish', 'chicken_dish', 'beef_dish'], 'Test 60');
test(findAllRecipes(["pizza","fries","burger"], [["dough","tomato","cheese"],["potato","salt"],["patty","cheese","bun"]], ["dough","tomato","cheese","potato","salt","patty","bun"]), ['pizza', 'fries', 'burger'], 'Test 61');
test(findAllRecipes(["sushi","ramen"], [["rice","fish","seaweed"],["noodles","broth","egg"]], ["rice","fish","seaweed","noodles","broth","egg"]), ['sushi', 'ramen'], 'Test 62');
test(findAllRecipes(["soup","stew","salad"], [["carrot","onion"],["carrot","potato","beef"],["lettuce","cucumber"]], ["carrot","onion","beef","potato","pepper","lettuce","cucumber"]), ['soup', 'stew', 'salad'], 'Test 63');
test(findAllRecipes(["pizza","spaghetti"], [["dough","tomato_sauce","cheese"],["pasta","meat_sauce","cheese"]], ["dough","pasta","cheese"]), [], 'Test 64');
test(findAllRecipes(["cake","pie"], [["flour","eggs","sugar"],["apple","flour","sugar"]], ["flour","eggs","sugar","milk"]), ['cake'], 'Test 65');
test(findAllRecipes(["pasta","pizza","lasagna"], [["noodles","sauce"],["dough","sauce","cheese"],["noodles","sauce","cheese","milk"]], ["noodles","sauce","cheese","dough","milk"]), ['pasta', 'pizza', 'lasagna'], 'Test 66');
test(findAllRecipes(["omelette","pancake"], [["eggs","cheese","bacon"],["flour","eggs","milk"]], ["eggs","flour","milk"]), ['pancake'], 'Test 67');
test(findAllRecipes(["pizza","sandwich","omelette","burger"], [["dough","tomato","cheese"],["bread","cheese","meat"],["egg","milk","cheese"],["patty","cheese","bun"]], ["dough","tomato","cheese","bread","meat","egg","milk","patty","bun"]), ['pizza', 'sandwich', 'omelette', 'burger'], 'Test 68');
test(findAllRecipes(["chicken_salad","turkey_salad","veggie_salad"], [["chicken","lettuce","tomato"],["turkey","lettuce","tomato"],["lettuce","tomato","carrot"],], ["chicken","turkey","lettuce","tomato","carrot"]), ['chicken_salad', 'turkey_salad', 'veggie_salad'], 'Test 69');
test(findAllRecipes(["apple_pie","banana_bread","cherry_pie"], [["apples","dough","sugar"],["bananas","dough","sugar"],["cherries","dough","sugar"]], ["apples","bananas","cherries","dough","sugar"]), ['apple_pie', 'banana_bread', 'cherry_pie'], 'Test 70');
test(findAllRecipes(["recipe1","recipe2","recipe3","recipe4"], [["ing1","ing2"],["recipe1","ing3"],["recipe2","ing4"],["recipe3","ing5"]], ["ing1","ing2","ing3","ing4","ing5"]), ['recipe1', 'recipe2', 'recipe3', 'recipe4'], 'Test 71');
test(findAllRecipes(["cake","pudding","pie"], [["flour","eggs","sugar"],["milk","cornstarch"],["crust","apple","sugar"]], ["flour","eggs","milk","sugar"]), ['cake'], 'Test 72');
test(findAllRecipes(["ice_cream","pudding"], [["cream","sugar","vanilla"],["milk","sugar","flour"]], ["cream","sugar","vanilla","milk","flour","chocolate"]), ['ice_cream', 'pudding'], 'Test 73');
test(findAllRecipes(["salad","soup","stew"], [["lettuce","tomato","onion"],["carrot","potato","beef"],["carrot","potato","beef","tomato"]], ["lettuce","tomato","onion","carrot","potato"]), ['salad'], 'Test 74');
test(findAllRecipes(["omelette","scramble","frittata"], [["eggs","cheese"],["eggs"],["eggs","cheese","spinach"]], ["eggs","cheese","spinach","milk"]), ['scramble', 'omelette', 'frittata'], 'Test 75');
test(findAllRecipes(["cake","brownie","pudding"], [["flour","sugar","eggs","milk"],["flour","sugar","chocolate"],["milk","sugar","gelatin"]], ["flour","sugar","eggs","milk","chocolate","gelatin"]), ['cake', 'brownie', 'pudding'], 'Test 76');
test(findAllRecipes(["apple_pie","cherry_pie","blueberry_pie"], [["crust","apple","sugar"],["crust","cherry","sugar"],["crust","blueberry","sugar"]], ["crust","sugar","apple","blueberry"]), ['apple_pie', 'blueberry_pie'], 'Test 77');
test(findAllRecipes(["soup","stew","chili"], [["water","carrot","potato"],["water","tomato","carrot","potato"],["water","tomato","beef","potato"]], ["water","carrot","potato","tomato","beef"]), ['soup', 'stew', 'chili'], 'Test 78');
test(findAllRecipes(["pizza","lasagna","taco"], [["dough","tomato","cheese"],["pasta","mozzarella","sauce"],["tortilla","meat","cheese"]], ["dough","tomato","cheese","pasta","mozzarella","sauce","tortilla","meat"]), ['pizza', 'lasagna', 'taco'], 'Test 79');
test(findAllRecipes(["omelette","french_toast"], [["egg","milk","cheese"],["egg","bread","milk"]], ["egg","milk","cheese","bread"]), ['omelette', 'french_toast'], 'Test 80');
test(findAllRecipes(["bread","cake","pudding"], [["flour","yeast","water"],["flour","eggs","sugar"],["milk","cornstarch","water"]], ["flour","yeast","eggs","sugar","milk"]), ['cake'], 'Test 81');
test(findAllRecipes(["steak_dish","chicken_dish"], [["steak","garlic","onion"],["chicken","garlic","onion"]], ["steak","chicken","garlic","onion","potato"]), ['steak_dish', 'chicken_dish'], 'Test 82');
test(findAllRecipes(["pizza","lasagna"], [["dough","tomato_sauce","cheese"],["pasta","meat","cheese","tomato_sauce"]], ["dough","tomato_sauce","cheese","pasta","meat"]), ['pizza', 'lasagna'], 'Test 83');
test(findAllRecipes(["cake","brownie","tiramisu"], [["flour","sugar","eggs"],["flour","sugar","chocolate"],["coffee","brownie","cream"]], ["flour","sugar","eggs","chocolate","coffee","cream"]), ['cake', 'brownie', 'tiramisu'], 'Test 84');
test(findAllRecipes(["pizza","calzone","taco","burrito"], [["dough","sauce","cheese"],["dough","cheese","meat"],["tortilla","meat","lettuce"],["tortilla","meat","beans"]], ["dough","sauce","cheese","meat","tortilla","lettuce","beans"]), ['pizza', 'calzone', 'taco', 'burrito'], 'Test 85');
test(findAllRecipes(["taco","burrito"], [["tortilla","ground_beef","cheese"],["tortilla","beans","cheese","lettuce"]], ["tortilla","ground_beef","beans","cheese","lettuce"]), ['taco', 'burrito'], 'Test 86');
test(findAllRecipes(["steak","chicken","beef"], [["meat","seasoning"],["meat","vegetables"],["meat","sauce"]], ["meat","seasoning","vegetables"]), ['steak', 'chicken'], 'Test 87');
test(findAllRecipes(["tacos","burritos","enchiladas"], [["shell","ground beef","cheese"],["shell","ground beef","beans"],["tortilla","ground beef","cheese","sauce"]], ["shell","tortilla","ground beef","cheese"]), ['tacos'], 'Test 88');
test(findAllRecipes(["taco","burrito"], [["tortilla","beef","cheese"],["tortilla","chicken","cheese","lettuce"]], ["tortilla","cheese","lettuce"]), [], 'Test 89');
test(findAllRecipes(["muffin","brownie","cupcake"], [["flour","eggs","milk","sugar"],["flour","eggs","chocolate","sugar"],["muffin","icing"]], ["flour","eggs","milk","sugar","chocolate","icing"]), ['muffin', 'brownie', 'cupcake'], 'Test 90');
test(findAllRecipes(["soup","stew"], [["water","carrot","potato"],["water","tomato","carrot","potato"]], ["water","carrot","potato","tomato"]), ['soup', 'stew'], 'Test 91');
test(findAllRecipes(["chicken_soup","veggie_soup","beef_stew"], [["chicken","carrot","potato"],["carrot","potato","onion"],["beef","carrot","potato"],], ["chicken","carrot","potato","onion","beef"]), ['chicken_soup', 'veggie_soup', 'beef_stew'], 'Test 92');
test(findAllRecipes(["taco","burrito"], [["shell","meat","cheese"],["wrap","meat","cheese","lettuce"]], ["shell","wrap","meat","cheese","lettuce","tomato"]), ['taco', 'burrito'], 'Test 93');
test(findAllRecipes(["cake","brownie"], [["flour","eggs","sugar"],["flour","eggs","chocolate"]], ["flour","eggs","sugar","chocolate"]), ['cake', 'brownie'], 'Test 94');
test(findAllRecipes(["smoothie","juice","shake"], [["banana","milk"],["orange","apple"],["banana","milk","peanut_butter"]], ["banana","milk","orange","apple","peanut_butter"]), ['smoothie', 'juice', 'shake'], 'Test 95');
test(findAllRecipes(["chocolate_cake","vanilla_cake"], [["flour","sugar","cocoa","eggs"],["flour","sugar","vanilla","eggs"]], ["flour","sugar","eggs","vanilla"]), ['vanilla_cake'], 'Test 96');
test(findAllRecipes(["cake","muffin","brownie"], [["flour","sugar","eggs"],["flour","sugar","eggs","butter"],["flour","sugar","chocolate"]], ["flour","sugar","eggs","butter","chocolate"]), ['cake', 'muffin', 'brownie'], 'Test 97');
test(findAllRecipes(["muffin","pancake","scone"], [["flour","sugar","milk"],["flour","eggs","milk"],["flour","butter","milk"]], ["flour","eggs","butter","milk"]), ['pancake', 'scone'], 'Test 98');
test(findAllRecipes(["juice","smoothie"], [["orange","apple"],["banana","orange","milk"]], ["orange","apple","banana","milk","water"]), ['juice', 'smoothie'], 'Test 99');
test(findAllRecipes(["smoothie","yogurt_parfait"], [["banana","mango","yogurt"],["yogurt","berry","honey"]], ["banana","mango","yogurt","berry","honey"]), ['smoothie', 'yogurt_parfait'], 'Test 100');
test(findAllRecipes(["pancake","waffle","omelette"], [["flour","eggs","milk"],["flour","eggs","syrup"],["eggs","milk","cheese"]], ["flour","eggs","milk","syrup","cheese"]), ['pancake', 'waffle', 'omelette'], 'Test 101');
test(findAllRecipes(["pizza","pasta"], [["dough","sauce","cheese"],["noodles","sauce"]], ["dough","sauce","cheese","noodles","tomato"]), ['pizza', 'pasta'], 'Test 102');
test(findAllRecipes(["pizza","spaghetti"], [["dough","sauce","cheese"],["pasta","sauce","meat"]], ["dough","sauce","pasta"]), [], 'Test 103');
test(findAllRecipes(["chicken_soup","beef_stew"], [["chicken","vegetables","water"],["beef","vegetables","water","potato"]], ["chicken","vegetables","water","beef","potato"]), ['chicken_soup', 'beef_stew'], 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

