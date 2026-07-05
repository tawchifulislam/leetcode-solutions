/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const row = [1];

    for (let i = 1; i <= rowIndex; i++) {
        row.push(0); // extend row
        for (let j = i; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
    }

    return row;
};