// Test: 1451. Rearrange Words In A Sentence
// 152 test cases from LeetCodeDataset
// Run: node test.js

const { arrangeWords } = require("./solution");

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

console.log("\n1451. Rearrange Words In A Sentence\n");

test(arrangeWords("A quick brown fox jumps over the lazy dog"), A fox the dog over lazy quick brown jumps, 'Test 1');
test(arrangeWords("This is a simple test case"), A is this test case simple, 'Test 2');
test(arrangeWords("The weather is sunny"), Is the sunny weather, 'Test 3');
test(arrangeWords("A"), A, 'Test 4');
test(arrangeWords("A B C D E"), A B C D E, 'Test 5');
test(arrangeWords("Pack my box with five dozen liquor jugs"), My box pack with five jugs dozen liquor, 'Test 6');
test(arrangeWords("Sorting words by length is fun"), By is fun words length sorting, 'Test 7');
test(arrangeWords("I love programming in Python"), I in love Python programming, 'Test 8');
test(arrangeWords("How vexingly quick daft zebras jump"), How daft jump quick zebras vexingly, 'Test 9');
test(arrangeWords("Every good boy does fine"), Boy good does fine every, 'Test 10');
test(arrangeWords("To be or not to be"), To be or to be not, 'Test 11');
test(arrangeWords("Leetcode is cool"), Is cool leetcode, 'Test 12');
test(arrangeWords("The quick brown fox jumps over the lazy dog"), The fox the dog over lazy quick brown jumps, 'Test 13');
test(arrangeWords("This is a test sentence with various word lengths"), A is this test with word various lengths sentence, 'Test 14');
test(arrangeWords("Keep calm and code on"), On and keep calm code, 'Test 15');
test(arrangeWords("This is a test sentence for the function"), A is for the this test sentence function, 'Test 16');
test(arrangeWords("In computer science algorithms often require creative solutions"), In often science require computer creative solutions algorithms, 'Test 17');
test(arrangeWords("Silent nights filled with the promise of new beginnings"), Of the new with silent nights filled promise beginnings, 'Test 18');
test(arrangeWords("Beautiful sentences flow rhythmically and gracefully"), And flow beautiful sentences gracefully rhythmically, 'Test 19');
test(arrangeWords("Health and happiness are the most valuable possessions"), And are the most health valuable happiness possessions, 'Test 20');
test(arrangeWords("Exploring the mysteries of the universe is a lifelong journey"), A of is the the journey universe lifelong exploring mysteries, 'Test 21');
test(arrangeWords("Understanding these concepts is crucial for programming"), Is for these crucial concepts programming understanding, 'Test 22');
test(arrangeWords("Repeating words like test test test should stay in order"), In like test test test stay words order should repeating, 'Test 23');
test(arrangeWords("Programming challenges are a great way to improve your skills"), A to are way your great skills improve challenges programming, 'Test 24');
test(arrangeWords("The smallest words often hide the deepest meanings"), The the hide words often deepest smallest meanings, 'Test 25');
test(arrangeWords("You are never too old to set another goal or to dream a new dream"), A to or to you are too old set new goal never dream dream another, 'Test 26');
test(arrangeWords("Sorting algorithms like quicksort and mergesort"), And like sorting quicksort mergesort algorithms, 'Test 27');
test(arrangeWords("Learning never stops no matter how much one knows"), No how one much never stops knows matter learning, 'Test 28');
test(arrangeWords("Despite its simplicity Unix is a powerful and flexible operating system"), A is its and Unix system despite powerful flexible operating simplicity, 'Test 29');
test(arrangeWords("A journey of a thousand miles begins with a single step"), A a a of with step miles begins single journey thousand, 'Test 30');
test(arrangeWords("Problem-solving skills are highly valued in the tech industry"), In are the tech skills highly valued industry problem-solving, 'Test 31');
test(arrangeWords("Complexity arises when multiple words share the same length"), The when same words share arises length multiple complexity, 'Test 32');
test(arrangeWords("In the midst of winter I found there was, within me, an invincible summer"), I in of an the me, was, midst found there winter within summer invincible, 'Test 33');
test(arrangeWords("Happiness is not something ready made. It comes from your own actions"), Is It not own from your ready made. comes actions happiness something, 'Test 34');
test(arrangeWords("Small steps lead to big progress"), To big lead small steps progress, 'Test 35');
test(arrangeWords("With unwavering determination, she embarked on the perilous journey"), On she the with journey embarked perilous unwavering determination,, 'Test 36');
test(arrangeWords("BeautifulSoup lxml html parser are widely used for web scraping"), Are for web lxml html used parser widely scraping beautifulsoup, 'Test 37');
test(arrangeWords("Sorting words by length while maintaining original order"), By words while order length sorting original maintaining, 'Test 38');
test(arrangeWords("We may encounter many defeats but we must not be defeated"), We we be may but not many must defeats defeated encounter, 'Test 39');
test(arrangeWords("To achieve great things, we must not only act, but also dream; not only plan, but also believe"), To we not but not but must only act, also only also great plan, dream; achieve things, believe, 'Test 40');
test(arrangeWords("A beautiful butterfly gracefully flutters among the colorful flowers"), A the among flowers flutters colorful beautiful butterfly gracefully, 'Test 41');
test(arrangeWords("The greatest glory in living lies not in never falling, but in rising every time we fall"), In in in we the not but lies time fall glory never every living rising greatest falling,, 'Test 42');
test(arrangeWords("The only way to do great work is to love what you do"), To do is to do the way you only work love what great, 'Test 43');
test(arrangeWords("Innovative solutions can be achieved through collaborative efforts"), Be can through efforts achieved solutions innovative collaborative, 'Test 44');
test(arrangeWords("Documentation plays a vital role in software development"), A in role plays vital software development documentation, 'Test 45');
test(arrangeWords("In the heart of the city stood a magnificent gothic cathedral"), A in of the the city heart stood gothic cathedral magnificent, 'Test 46');
test(arrangeWords("In the realm of competitive programming challenges are vast"), In of the are vast realm challenges competitive programming, 'Test 47');
test(arrangeWords("In the heart of the city, amidst towering skyscrapers, lies a hidden gem"), A in of the the gem lies heart city, amidst hidden towering skyscrapers,, 'Test 48');
test(arrangeWords("Continuous integration and deployment practices improve software quality"), And improve quality software practices continuous deployment integration, 'Test 49');
test(arrangeWords("When words are of equal length they should remain in order"), Of in are when they words equal order length should remain, 'Test 50');
test(arrangeWords("Understanding the nuances of human behavior is crucial"), Of is the human nuances crucial behavior understanding, 'Test 51');
test(arrangeWords("Sometimes simplicity is the ultimate sophistication"), Is the ultimate sometimes simplicity sophistication, 'Test 52');
test(arrangeWords("Beautiful scenery can uplift one's spirits"), Can one's uplift scenery spirits beautiful, 'Test 53');
test(arrangeWords("If you want to live a happy life, tie it to a goal, not to people or things"), A a if to it to to or you tie not want live happy life, goal, people things, 'Test 54');
test(arrangeWords("Consistency is the key to achieving long-term success"), Is to the key success achieving long-term consistency, 'Test 55');
test(arrangeWords("The rapid expansion of cloud computing services has transformed many industries"), Of the has many rapid cloud services expansion computing industries transformed, 'Test 56');
test(arrangeWords("Data structures and algorithms form the backbone of software"), Of and the data form backbone software structures algorithms, 'Test 57');
test(arrangeWords("When faced with difficult problems persistence is key"), Is key when with faced problems difficult persistence, 'Test 58');
test(arrangeWords("The sound of crashing waves soothed his restless mind"), Of the his mind sound waves soothed crashing restless, 'Test 59');
test(arrangeWords("Effective communication skills are crucial in software engineering"), In are skills crucial software effective engineering communication, 'Test 60');
test(arrangeWords("Can you solve this complex rearrangement problem"), Can you this solve complex problem rearrangement, 'Test 61');
test(arrangeWords("Keep smiling because life is a beautiful journey not a destination"), A a is not keep life smiling because journey beautiful destination, 'Test 62');
test(arrangeWords("Given a string containing multiple words of different lengths"), A of given words string lengths multiple different containing, 'Test 63');
test(arrangeWords("A quick brown fox jumps over the lazy dog in an unexpected manner"), A in an fox the dog over lazy quick brown jumps manner unexpected, 'Test 64');
test(arrangeWords("Programming challenges often require deep understanding and patience"), And deep often require patience challenges programming understanding, 'Test 65');
test(arrangeWords("Adapting to new technologies and methodologies is important"), To is new and adapting important technologies methodologies, 'Test 66');
test(arrangeWords("Handling edge cases is important for robust code"), Is for edge code cases robust handling important, 'Test 67');
test(arrangeWords("Understanding data structures is crucial for computer scientists"), Is for data crucial computer structures scientists understanding, 'Test 68');
test(arrangeWords("Programming challenges are intellectually stimulating"), Are challenges programming stimulating intellectually, 'Test 69');
test(arrangeWords("Efficient algorithms can significantly reduce computation time"), Can time reduce efficient algorithms computation significantly, 'Test 70');
test(arrangeWords("Believe you can and you're halfway there"), You can and there you're believe halfway, 'Test 71');
test(arrangeWords("Actions speak louder than words"), Than speak words louder actions, 'Test 72');
test(arrangeWords("Complex algorithms often require sophisticated data structures"), Data often complex require algorithms structures sophisticated, 'Test 73');
test(arrangeWords("Python programming language is powerful and versatile"), Is and python language powerful versatile programming, 'Test 74');
test(arrangeWords("In the realm of possibilities, anything is achievable"), In of is the realm anything achievable possibilities,, 'Test 75');
test(arrangeWords("Learning to code is one of the most empowering experiences"), To is of one the code most learning empowering experiences, 'Test 76');
test(arrangeWords("Crafting intricate designs in wood requires both skill and creativity"), In and wood both skill designs crafting requires intricate creativity, 'Test 77');
test(arrangeWords("Despite the odds being stacked against him, he never gave up hope"), He up the odds him, gave hope being never despite stacked against, 'Test 78');
test(arrangeWords("Those who dare to fail miserably can achieve greatly"), To who can dare fail those achieve greatly miserably, 'Test 79');
test(arrangeWords("May the Force be with you"), Be may the you with Force, 'Test 80');
test(arrangeWords("Every problem has a unique solution waiting to be discovered"), A to be has every unique problem waiting solution discovered, 'Test 81');
test(arrangeWords("Consider various scenarios when testing your solution"), When your various testing consider solution scenarios, 'Test 82');
test(arrangeWords("Despite the harsh conditions, the resilient hikers forged ahead"), The the harsh ahead hikers forged despite resilient conditions,, 'Test 83');
test(arrangeWords("The ancient ruins whispered tales of forgotten civilizations"), Of the ruins tales ancient whispered forgotten civilizations, 'Test 84');
test(arrangeWords("Python programming can be quite challenging indeed"), Be can quite python indeed programming challenging, 'Test 85');
test(arrangeWords("Resilience and determination are the keys to success"), To and are the keys success resilience determination, 'Test 86');
test(arrangeWords("A very very long sentence that needs to be properly rearranged"), A to be very very long that needs sentence properly rearranged, 'Test 87');
test(arrangeWords("When sorting algorithms fail gracefully"), When fail sorting algorithms gracefully, 'Test 88');
test(arrangeWords("Adventure and exploration are essential for personal growth"), And are for growth personal adventure essential exploration, 'Test 89');
test(arrangeWords("Python Java JavaScript and C are popular programming languages"), C and are Java python popular languages JavaScript programming, 'Test 90');
test(arrangeWords("Algorithms and data structures are fundamental to computer science"), To and are data science computer algorithms structures fundamental, 'Test 91');
test(arrangeWords("In the heart of autumn leaves change their colors"), In of the heart their autumn leaves change colors, 'Test 92');
test(arrangeWords("If life were predictable it would cease to be life, and be without flavor"), If it to be be and life were would cease life, flavor without predictable, 'Test 93');
test(arrangeWords("A storm of emotions surged through her heart"), A of her storm heart surged through emotions, 'Test 94');
test(arrangeWords("Continuous improvement is the hallmark of excellence"), Is of the hallmark continuous excellence improvement, 'Test 95');
test(arrangeWords("The rain in Spain stays mainly in the plain"), In in the the rain Spain stays plain mainly, 'Test 96');
test(arrangeWords("Do not watch the clock; do what it does. Keep going"), Do do it not the what Keep watch does. going clock;, 'Test 97');
test(arrangeWords("The rapid expansion of artificial intelligence is fascinating"), Of is the rapid expansion artificial fascinating intelligence, 'Test 98');
test(arrangeWords("An extraordinary journey through the magical lands"), An the lands journey through magical extraordinary, 'Test 99');
test(arrangeWords("The early morning light illuminated the dew-kissed grass"), The the early light grass morning dew-kissed illuminated, 'Test 100');
test(arrangeWords("Python is an interpreted high level programming language"), Is an high level python language interpreted programming, 'Test 101');
test(arrangeWords("Understanding the intricacies of quantum mechanics requires patience"), Of the quantum requires patience mechanics intricacies understanding, 'Test 102');
test(arrangeWords("A bird in the hand is worth two in the bush"), A in is in the two the bird hand bush worth, 'Test 103');
test(arrangeWords("XMLHttpRequest allows clients to send and receive data asynchronously without reloading the web page"), To and the web send data page allows clients receive without reloading xmlhttprequest asynchronously, 'Test 104');
test(arrangeWords("An overwhelming sense of serenity filled the quaint village"), An of the sense filled quaint village serenity overwhelming, 'Test 105');
test(arrangeWords("Beautiful minds think in unpredictable ways"), In ways minds think beautiful unpredictable, 'Test 106');
test(arrangeWords("Artificial intelligence and machine learning are transforming industries"), And are machine learning artificial industries intelligence transforming, 'Test 107');
test(arrangeWords("It is during our darkest moments that we must focus the light"), It is we our the that must focus light during darkest moments, 'Test 108');
test(arrangeWords("Do what you can with all you have, wherever you are"), Do you can all you you are what with have, wherever, 'Test 109');
test(arrangeWords("Python is an interpreted high-level general-purpose programming language"), Is an python language high-level interpreted programming general-purpose, 'Test 110');
test(arrangeWords("Sometimes life gives you lemons and you make lemonade"), You and you life make gives lemons lemonade sometimes, 'Test 111');
test(arrangeWords("Creativity is the key to solving complex problems"), Is to the key solving complex problems creativity, 'Test 112');
test(arrangeWords("Even seemingly simple tasks can be complex"), Be can even tasks simple complex seemingly, 'Test 113');
test(arrangeWords("Data structures like arrays and linked lists"), And data like lists arrays linked structures, 'Test 114');
test(arrangeWords("In computer science algorithms are fundamental"), In are science computer algorithms fundamental, 'Test 115');
test(arrangeWords("Wherever you go, go with all your heart"), Go you go, all with your heart wherever, 'Test 116');
test(arrangeWords("The magic of books lies in the stories they hold"), Of in the the lies they hold magic books stories, 'Test 117');
test(arrangeWords("The children laughed joyfully in the sunlit playground"), In the the sunlit laughed children joyfully playground, 'Test 118');
test(arrangeWords("The best time to plant a tree was 20 years ago. The second best time is now"), A to 20 is the was The now best time tree ago. best time plant years second, 'Test 119');
test(arrangeWords("This is a test to see if the function handles ties correctly"), A is to if see the this test ties handles function correctly, 'Test 120');
test(arrangeWords("Nature's beauty is a constant source of inspiration"), A is of beauty source nature's constant inspiration, 'Test 121');
test(arrangeWords("Despite its simplicity quicksort is incredibly effective"), Is its despite quicksort effective simplicity incredibly, 'Test 122');
test(arrangeWords("Programming challenges are a great way to improve skills"), A to are way great skills improve challenges programming, 'Test 123');
test(arrangeWords("Check if the function can handle sentences with repeated words"), If the can with check words handle function repeated sentences, 'Test 124');
test(arrangeWords("In every day, there are 1440 minutes, 86400 seconds and 5184000 milliseconds, so live every second"), In so are and day, 1440 live every there 86400 every second seconds 5184000 minutes, milliseconds,, 'Test 125');
test(arrangeWords("Somebody once told me the world is gonna roll me"), Me is me the once told roll world gonna somebody, 'Test 126');
test(arrangeWords("Many software projects involve working with multiple programming languages"), Many with involve working software projects multiple languages programming, 'Test 127');
test(arrangeWords("Version control systems are essential for software development"), Are for version control systems software essential development, 'Test 128');
test(arrangeWords("Writing clean and maintainable code is beneficial"), Is and code clean writing beneficial maintainable, 'Test 129');
test(arrangeWords("Understanding the complexities of software development requires patience"), Of the software requires patience development complexities understanding, 'Test 130');
test(arrangeWords("Debugging is twice as hard as writing the code in the first place"), Is as as in the the hard code twice first place writing debugging, 'Test 131');
test(arrangeWords("Handling large datasets efficiently is a common requirement"), A is large common handling datasets efficiently requirement, 'Test 132');
test(arrangeWords("Sometimes simple sentences are the most powerful"), Are the most simple powerful sometimes sentences, 'Test 133');
test(arrangeWords("Algorithms data structures and programming languages"), And data languages algorithms structures programming, 'Test 134');
test(arrangeWords("Some programmers prefer to use snake_case others CamelCase"), To use some prefer others CamelCase snake_case programmers, 'Test 135');
test(arrangeWords("Exploring new cultures broadens one's horizons immensely"), New one's cultures broadens horizons exploring immensely, 'Test 136');
test(arrangeWords("This is a simple example to demonstrate the functionality"), A is to the this simple example demonstrate functionality, 'Test 137');
test(arrangeWords("Efficient algorithms can significantly reduce processing time"), Can time reduce efficient algorithms processing significantly, 'Test 138');
test(arrangeWords("Python programming challenges are incredibly rewarding"), Are python rewarding challenges incredibly programming, 'Test 139');
test(arrangeWords("Do not judge each day by the harvest you reap but by the seeds that you plant"), Do by by not day the you but the you each reap that judge seeds plant harvest, 'Test 140');
test(arrangeWords("The quick movement of the enemy will jeopardize six gunboats"), Of the the six will quick enemy movement gunboats jeopardize, 'Test 141');
test(arrangeWords("Contrary to popular belief Lorem Ipsum is not simply random text"), To is not text Lorem Ipsum belief simply random popular contrary, 'Test 142');
test(arrangeWords("Every small victory is a stepping stone to greatness"), A is to every small stone victory stepping greatness, 'Test 143');
test(arrangeWords("A mix of long and short words challenges the function greatly"), A of mix and the long short words greatly function challenges, 'Test 144');
test(arrangeWords("Innovative solutions require creative thinking processes"), Require creative thinking solutions processes innovative, 'Test 145');
test(arrangeWords("Consistency is the bridge between goals and accomplishment"), Is the and goals bridge between consistency accomplishment, 'Test 146');
test(arrangeWords("An apple a day keeps the doctor away"), A an day the away apple keeps doctor, 'Test 147');
test(arrangeWords("The scent of blooming roses filled the tranquil garden"), Of the the scent roses filled garden blooming tranquil, 'Test 148');
test(arrangeWords("In the end we will remember not the words of our enemies but the silence of our friends"), In we of of the end not the our but the our will words enemies silence friends remember, 'Test 149');
test(arrangeWords("Edge cases like very long words or many short ones"), Or edge like very long many ones cases words short, 'Test 150');
test(arrangeWords("The future belongs to those who believe in the beauty of their dreams"), To in of the who the those their future beauty dreams belongs believe, 'Test 151');
test(arrangeWords("Innovative solutions drive technological advancement"), Drive solutions innovative advancement technological, 'Test 152');

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
