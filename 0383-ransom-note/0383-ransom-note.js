/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineCounts = {};
    for(let i = 0; i < magazine.length; i++){
        let char = magazine[i];
        if (magazineCounts[char]){
            magazineCounts[char] += 1;
        } else {
            magazineCounts[char] = 1;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        if (!magazineCounts[char]) {
            return false;
        }
        magazineCounts[char] -=1;
    }
    return true;
};