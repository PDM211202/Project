function createRandomMatrix(rows, columns, minValue, maxValue) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            row.push(randomNumber);
        }
        matrix.push(row);
    }
    return matrix;
}

module.exports = createRandomMatrix;