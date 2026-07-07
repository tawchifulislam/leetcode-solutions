/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let numStr = n.toString();
    let xStr = "";
    let sum = 0;

    for (let i = 0; i < numStr.length; i++){
        let currentChar = numStr[i];

        if(currentChar !== '0'){
            xStr += currentChar;
            sum += Number(currentChar);
        }
    }
    let x = (xStr === "") ? 0 : Number(xStr);
    return x * sum;
};