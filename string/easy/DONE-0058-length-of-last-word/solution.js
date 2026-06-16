// 58. Length of Last Word
// Difficulty: Easy
// Tags: String
// Link: https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1;

    // Bỏ các khoảng trắng ở cuối
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    let len = 0;

    // Đếm độ dài từ cuối cùng
    while (i >= 0 && s[i] !== ' ') {
        len++;
        i--;
    }

    return len;
};
lengthOfLastWord('   fly me   to   the moon  ')

// --- Your Solution Above ---

module.exports = { lengthOfLastWord };
