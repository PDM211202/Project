const xuly = require('./test');
const createRandomMatrix = require('./create_data');
const search = require('./search_basic_path');
const fs = require('fs');

const search_input = (fileGraph, func, row, column, start, end) => {
    const data1 = createRandomMatrix(row, column, start, end);
    const output = xuly(data1, fileGraph, func);
    const path = search(fileGraph);
    const result = [];
    path.forEach((item) => {
        const object = {};
        let arr = [];
        output.forEach((input) => {
            if (input.includes(item)) {
                const str = input.split(':');
                const stringBeforeColon = str[0].trim();
                // console.log(stringBeforeColon);
                arr.push(stringBeforeColon);
            }
        })
        let obj = { key: item, value: arr }
        const { key, value } = obj;
        object[key] = value;
        result.push(object);
    })
    // console.log(result);
    const outputFile = 'result.json';
    exportResultToFile(result, outputFile);
    return result;
}

function exportResultToFile(result, outputFile) {
    const jsonData = JSON.stringify(result, null, 2);
    fs.writeFile(outputFile, jsonData, (err) => {
        if (err) {
            console.error('Có lỗi khi xuất kết quả ra tệp tin:', err);
        } else {
            console.log('Kết quả đã được xuất ra tệp tin thành công:', outputFile);
        }
    });
}

// search_input('tinhTienDien.dot', tinhTienDien, 1, 100, 1, 300)
module.exports = search_input;