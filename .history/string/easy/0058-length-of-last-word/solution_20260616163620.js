// 58. Length of Last Word
// Difficulty: Easy
// Tags: String
// Link: https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // convert s to array   
       let i = s.length-1 
        while(s>=0 && s[i] == ' '){
            i--
        }
        let len = 0 
        while(i >= 0 &&  s[i] !==' '){
            len++
            i--
        }
    console.log(len)
    return len
};
lengthOfLastWord('   fly me   to   the moon  ')

// --- Your Solution Above ---

module.exports = { lengthOfLastWord };
