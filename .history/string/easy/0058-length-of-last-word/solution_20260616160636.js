// 58. Length of Last Word
// Difficulty: Easy
// Tags: String
// Link: https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
// cach 1: chuyen string thanh array , roi split 
var lengthOfLastWord = function(s) {
   const sString=  s.trim().toString().split('')
    console.log( s.trim())
    // convert s to array   
    for(let i = 0 ; i <sString.length; i++){
        
    }
    console.log(s.trim().toString().split(''))
};
lengthOfLastWord('   fly me   to   the moon  ')

// --- Your Solution Above ---

module.exports = { lengthOfLastWord };
