// Test: 1410. Html Entity Parser
// 47 test cases from LeetCodeDataset
// Run: node test.js

const { entityParser } = require("./solution");

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

console.log("\n1410. Html Entity Parser\n");

test(entityParser("&amp; is an HTML entity but &ambassador; is not."), "& is an HTML entity but &ambassador; is not.", 'Test 1');
test(entityParser("and I quote: &quot;...&quot;"), "and I quote: \"...\"", 'Test 2');
test(entityParser("Stay home! Practice on Leetcode :]"), "Stay home! Practice on Leetcode :]", 'Test 3');
test(entityParser("x &gt; y &amp;&amp; x &lt; y is always false"), "x > y && x < y is always false", 'Test 4');
test(entityParser("leetcode.com&frasl;problemset&frasl;all"), "leetcode.com/problemset/all", 'Test 5');
test(entityParser("&amp;lt;div&amp;gt;&amp;amp;lt;p&amp;amp;gt;Multiple &amp;amp;amp;entities&amp;amp;amp; in &amp;amp;amp;one&amp;amp;amp; &amp;amp;lt;tag&amp;amp;gt;&amp;amp;lt;/tag&amp;amp;gt;&amp;amp;lt;/p&amp;amp;gt;&amp;lt;/div&amp;gt;"), &lt;div&gt;&amp;lt;p&amp;gt;Multiple &amp;amp;entities&amp;amp; in &amp;amp;one&amp;amp; &amp;lt;tag&amp;gt;&amp;lt;/tag&amp;gt;&amp;lt;/p&amp;gt;&lt;/div&gt;, 'Test 6');
test(entityParser("Nested &amp;lt;tags&amp;gt; with &amp;amp;lt;nested&amp;amp;gt;entities&amp;amp;lt;/nested&amp;amp;gt;&amp;lt;/tags&amp;gt;"), Nested &lt;tags&gt; with &amp;lt;nested&amp;gt;entities&amp;lt;/nested&amp;gt;&lt;/tags&gt;, 'Test 7');
test(entityParser("Multiple &gt;&gt;&gt; &gt; and &lt;&lt;&lt; &lt; should be &gt; and &lt;"), Multiple >>> > and <<< < should be > and <, 'Test 8');
test(entityParser("&amp;lt;span&amp;gt;This &amp;amp;lt;a&amp;amp;gt;link&amp;amp;lt;/a&amp;amp;gt; has an &amp;amp;amp;entity&amp;amp;amp; in it.&amp;lt;/span&amp;gt;"), &lt;span&gt;This &amp;lt;a&amp;gt;link&amp;lt;/a&amp;gt; has an &amp;amp;entity&amp;amp; in it.&lt;/span&gt;, 'Test 9');
test(entityParser("Multiple &amp;&amp; entities &gt; here &lt; and &quot;quotes&quot; &apos;apostrophes&apos;"), Multiple && entities > here < and "quotes" 'apostrophes', 'Test 10');
test(entityParser("Nested &amp; entities: &amp;amp;lt; &amp;amp;gt; &amp;amp;amp; &amp;amp;quot; &amp;amp;apos; &amp;amp;frasl;"), Nested & entities: &amp;lt; &amp;gt; &amp;amp; &amp;quot; &amp;apos; &amp;frasl;, 'Test 11');
test(entityParser("Combining &lt;b&gt;&amp;bold&amp;&gt; &lt;i&gt;&amp;italic&amp;&gt; &lt;u&gt;&amp;underline&amp;&gt; entities &lt;/u&gt;&lt;/i&gt;&lt;/b&gt;"), Combining <b>&bold&> <i>&italic&> <u>&underline&> entities </u></i></b>, 'Test 12');
test(entityParser("He said, &quot;&apos;Hello, &amp; welcome to the world of &gt;HTML&lt;!&apos;&quot;"), He said, "'Hello, & welcome to the world of >HTML<!'", 'Test 13');
test(entityParser("&lt;script&gt;alert[&apos;Hello &lt;b&gt;World&lt;/b&gt;&apos;];&lt;/script&gt; &frasl; &lt;hr&gt;"), <script>alert['Hello <b>World</b>'];</script> / <hr>, 'Test 14');
test(entityParser("Edge cases &amp; special characters: &gt;&lt;&amp;&quot;&apos;&frasl;&lt;&gt;&amp;&quot;&apos;&frasl;&gt;&lt;"), Edge cases & special characters: ><&"'/<>&"'/><, 'Test 15');
test(entityParser("&amp;lt;table&amp;gt;&amp;amp;lt;tr&amp;amp;gt;&amp;amp;amp;lt;td&amp;amp;amp;gt;&amp;amp;amp;Data &amp;amp;amp;1&amp;amp;amp;&amp;amp;amp;lt;/td&amp;amp;amp;gt;&amp;amp;lt;/tr&amp;amp;gt;&amp;amp;lt;tr&amp;amp;gt;&amp;amp;amp;lt;td&amp;amp;amp;gt;&amp;amp;amp;Data &amp;amp;amp;2&amp;amp;amp;&amp;amp;amp;lt;/td&amp;amp;amp;gt;&amp;amp;lt;/tr&amp;amp;gt;&amp;lt;/table&amp;gt;"), &lt;table&gt;&amp;lt;tr&amp;gt;&amp;amp;lt;td&amp;amp;gt;&amp;amp;Data &amp;amp;1&amp;amp;&amp;amp;lt;/td&amp;amp;gt;&amp;lt;/tr&amp;gt;&amp;lt;tr&amp;gt;&amp;amp;lt;td&amp;amp;gt;&amp;amp;Data &amp;amp;2&amp;amp;&amp;amp;lt;/td&amp;amp;gt;&amp;lt;/tr&amp;gt;&lt;/table&gt;, 'Test 16');
test(entityParser("&amp;lt;p&amp;gt;&amp;amp;lt;strong&amp;amp;gt;Bold &amp;amp;amp;italic&amp;amp;amp;&amp;amp;lt;/strong&amp;amp;gt;&amp;lt;/p&amp;gt;"), &lt;p&gt;&amp;lt;strong&amp;gt;Bold &amp;amp;italic&amp;amp;&amp;lt;/strong&amp;gt;&lt;/p&gt;, 'Test 17');
test(entityParser("Escaping &amp;quot;quotes&amp;quot; &amp;amp; &amp;apos;apostrophes&amp;apos; in &lt;code&gt;&amp;lt;p&amp;gt;tags&amp;lt;/p&amp;gt;&lt;/code&gt;"), Escaping &quot;quotes&quot; &amp; &apos;apostrophes&apos; in <code>&lt;p&gt;tags&lt;/p&gt;</code>, 'Test 18');
test(entityParser("Multiple &quot;&amp;quot;&amp;quot; and &apos;&amp;apos;&amp;apos; in a row"), Multiple "&quot;&quot; and '&apos;&apos; in a row, 'Test 19');
test(entityParser("&amp;lt;ul&amp;gt;&amp;amp;lt;li&amp;amp;gt;First &amp;amp;amp;item&amp;amp;amp;&amp;amp;lt;/li&amp;amp;gt;&amp;amp;lt;li&amp;amp;gt;Second &amp;amp;amp;item&amp;amp;amp;&amp;amp;lt;/li&amp;amp;gt;&amp;lt;/ul&amp;gt;"), &lt;ul&gt;&amp;lt;li&amp;gt;First &amp;amp;item&amp;amp;&amp;lt;/li&amp;gt;&amp;lt;li&amp;gt;Second &amp;amp;item&amp;amp;&amp;lt;/li&amp;gt;&lt;/ul&gt;, 'Test 20');
test(entityParser("&lt;table&gt;&lt;tr&gt;&lt;td&gt;&amp;cell &gt; &lt;td&gt;&amp;&amp; data &lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; &frasl; &lt;pre&gt;&amp;code&amp;&gt;&lt;/pre&gt;"), <table><tr><td>&cell > <td>&& data </td></tr></table> / <pre>&code&></pre>, 'Test 21');
test(entityParser("&quot;Nested &lt;quotes&gt; and &apos;apostrophes&apos; within&quot;"), "Nested <quotes> and 'apostrophes' within", 'Test 22');
test(entityParser("&lt;a, &quot;http://example.com&quot;&gt;Visit Example&lt;/a&gt; &frasl; &amp; other &lt;tags&gt;&quot;"), <a href="http://example.com">Visit Example</a> / & other <tags>", 'Test 23');
test(entityParser("&lt;img, &apos;image.jpg&apos;, &quot;An &amp;quot;image&amp;quot; &amp;amp; text&quot; /&gt; &frasl; &lt;strong&gt;strong&lt;/strong&gt;"), <img src='image.jpg' alt="An &quot;image&quot; &amp; text" /> / <strong>strong</strong>, 'Test 24');
test(entityParser("This &frasl;example&frasl; should have slashes replaced everywhere.&frasl;&frasl;&frasl;"), This /example/ should have slashes replaced everywhere.///, 'Test 25');
test(entityParser("&lt;p&gt;This &amp; that &lt;/p&gt; &frasl; &lt;div&gt;example&lt;/div&gt;"), <p>This & that </p> / <div>example</div>, 'Test 26');
test(entityParser("&amp;quot; and &amp;apos; should be &quot; and &apos; respectively"), &quot; and &apos; should be " and ' respectively, 'Test 27');
test(entityParser("Combining &amp;frasl;slashes&amp;frasl; with other &amp;gt;&amp;amp;lt;entities&amp;amp;gt;&amp;lt;&amp;gt;"), Combining &frasl;slashes&frasl; with other &gt;&amp;lt;entities&amp;gt;&lt;&gt;, 'Test 28');
test(entityParser("&amp;lt;div&amp;gt; &amp;amp;lt;p&amp;amp;gt;Hello &amp;amp;amp; World!&amp;amp;lt;/p&amp;amp;gt; &amp;lt;/div&amp;gt;"), &lt;div&gt; &amp;lt;p&amp;gt;Hello &amp;amp; World!&amp;lt;/p&amp;gt; &lt;/div&gt;, 'Test 29');
test(entityParser("This &amp; that &amp; the other &amp; &frasl;"), This & that & the other & /, 'Test 30');
test(entityParser("Multiple &quot;quotes&quot; and &apos;apostrophes&apos; in this &quot;&apos;string&apos;&quot;"), Multiple "quotes" and 'apostrophes' in this "'string'", 'Test 31');
test(entityParser("&amp;lt;p&amp;gt;&amp;amp;lt;p&amp;amp;gt;Nested &amp;amp;amp;amp; entities&amp;amp;&lt;/p&amp;amp;gt;&amp;lt;/p&amp;gt;"), &lt;p&gt;&amp;lt;p&amp;gt;Nested &amp;amp;amp; entities&amp;</p&amp;gt;&lt;/p&gt;, 'Test 32');
test(entityParser("Combining &quot;quotes&quot; and &apos;apostrophes&apos; in &lt;tags&gt;"), Combining "quotes" and 'apostrophes' in <tags>, 'Test 33');
test(entityParser("&frasl;&frasl;&frasl; should become ///"), /// should become ///, 'Test 34');
test(entityParser("Combining &amp; &gt; &lt; &quot; &apos; &frasl; in a single string: &amp;gt;&lt;&quot;&apos;&frasl;&amp;lt;&gt;&quot;&apos;&frasl;&amp;"), Combining & > < " ' / in a single string: &gt;<"'/&lt;>"'/&, 'Test 35');
test(entityParser("&amp;lt; &amp;gt; &amp;amp; &amp;quot; &amp;apos; &amp;frasl;"), &lt; &gt; &amp; &quot; &apos; &frasl;, 'Test 36');
test(entityParser("&lt;p&gt;This is a &lt;b&gt;bold&lt;/b&gt; paragraph.&lt;/p&gt;"), <p>This is a <b>bold</b> paragraph.</p>, 'Test 37');
test(entityParser("This is a test: &amp;&amp; &gt;&gt;&gt; &lt;&lt;&lt; &quot;&quot;&quot; &apos;&apos;&apos; &frasl;&frasl;&frasl;"), This is a test: && >>> <<< """ ''' ///, 'Test 38');
test(entityParser("Nested &lt;div&gt;&lt;p&gt;&amp;nested &lt;span&gt;&amp;&amp; entities&lt;/span&gt;&lt;/p&gt;&lt;/div&gt; &frasl; &lt;em&gt;emphasis&lt;/em&gt;"), Nested <div><p>&nested <span>&& entities</span></p></div> / <em>emphasis</em>, 'Test 39');
test(entityParser("&amp;lt;a, &amp;quot;http://example.com&amp;amp;frasl;test&amp;quot;&amp;gt;Link&amp;lt;/a&amp;gt;"), &lt;a href=&quot;http://example.com&amp;frasl;test&quot;&gt;Link&lt;/a&gt;, 'Test 40');
test(entityParser("&gt;&amp;gt;&amp;gt; Greater than signs &lt;&amp;lt;&amp;lt; and &amp;amp;&gt;&amp;amp;&lt; mixed up &lt;&amp;lt;&amp;lt; &gt;&amp;gt;&amp;gt;"), >&gt;&gt; Greater than signs <&lt;&lt; and &amp;>&amp;< mixed up <&lt;&lt; >&gt;&gt;, 'Test 41');
test(entityParser("Complex &amp; example: &lt;p&gt;&amp;lt;&amp;gt;&amp;amp;&amp;quot;&amp;apos;&amp;frasl;&lt;/p&gt;"), Complex & example: <p>&lt;&gt;&amp;&quot;&apos;&frasl;</p>, 'Test 42');
test(entityParser("&amp;&amp;&amp;&amp; is not a valid HTML entity, but &amp;amp;&amp;amp; is &quot;&amp;&amp;&quot;"), &&&& is not a valid HTML entity, but &amp;&amp; is "&&", 'Test 43');
test(entityParser("Complex &amp;&gt;&amp;&lt; should be &amp;&gt;&amp;&lt;"), Complex &>&< should be &>&<, 'Test 44');
test(entityParser("Complex &lt;span, &quot;example&quot; &gt;&amp; special &lt;i&gt;entities&lt;/i&gt;&lt;/span&gt;"), Complex <span class="example" >& special <i>entities</i></span>, 'Test 45');
test(entityParser("Escaping &amp;amp;lt; &amp;amp;gt; &amp;amp;amp; &amp;amp;quot; &amp;amp;apos; &amp;amp;frasl;"), Escaping &amp;lt; &amp;gt; &amp;amp; &amp;quot; &amp;apos; &amp;frasl;, 'Test 46');
test(entityParser("&amp;quot;He said, &amp;amp;quot;&amp;apos;Hello &amp;amp;gt; World&amp;amp;lt;!&amp;apos;&amp;amp;quot;&amp;quot;"), &quot;He said, &amp;quot;&apos;Hello &amp;gt; World&amp;lt;!&apos;&amp;quot;&quot;, 'Test 47');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

