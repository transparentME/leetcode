var longestPalindrome = function(s) {
    let savingArr = [...s];
    let saving = {};
    savingArr.forEach(item => {
        if(!saving[item]) {
            saving[item] = 1;
        } else {
            delete saving[item];
        }
    })
    let savingLength = Object.keys(saving).length;
    return savingArr.length - savingLength + (savingLength === 0 ? 0 : 1)
};