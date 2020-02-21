/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') return [];
    let result = [];
    let saving = {
        2 : 'abc',
        3 : 'def',
        4 : 'ghi',
        5 : 'jkl',
        6 : 'mno',
        7 : 'pqrs',
        8 : 'tuv',
        9 :'wxyz',
    }
    var num = [...('' + digits)];
    let length = num.length;
    function output(array, char, length) {
        let savingArray = [...array];
        let firstChar = savingArray[0];
        if (char.length === length) {
            result.push(char);
            return;
        }
        if (char.length < length) {
            savingArray.shift();
            for(let i = 0; i < saving[firstChar].length; i++) {
                output(savingArray, char + saving[firstChar][i], length);
            }
        }
    }
    output(num, '', length);
    return result;
};

// 和22题相似