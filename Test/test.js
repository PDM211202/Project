const generateDotCode = require('./test/create_graph');
const search = require('./search_basic_path');
const { kiem_tra_snt, giai_pt_bac_nhat, tinhTienDien, checkNumber } = require('./index');
const getArray = require("./mark");
const searchNode = require("./search_node");

// generateDotCode(kiem_tra_snt.toString(), 'graphviz/kiem_tra_snt.dot');
// generateDotCode(giai_pt_bac_nhat.toString(), 'graphviz/giai_pt_bac_nhat.dot');
// generateDotCode(tinhTienDien.toString(), 'graphviz/tinhTienDien.dot');

// search('kiem_tra_snt.dot');
// search('giai_pt_bac_nhat.dot');

const checkPath = (fileGraph, func, input_1, input_2, input_3) => {
    let path = search(fileGraph);
    const data = searchNode(fileGraph);
    const get = getArray(func, data, input_1, input_2, input_3);
    // console.log(get);
    let p = ``;
    path.forEach((item) => {
        if (item.includes(get)) {
            p = item;
        }
    })
    return p;
}

// let d = checkPath('checkNumber.dot', checkNumber, 30)
// console.log(d);

const xuly = (data, fileGraph, func) => {
    let output = [];
    if (data[0] !== undefined && data[1] === undefined) {
        data[0].forEach((item) => {
            // console.log(item);
            let d = checkPath(fileGraph, func, item)
            output.push(`${item} : ${d}`);
        })
    }
    if (data[0] !== undefined && data[1] !== undefined && data[2] === undefined) {
        for (let i = 0; i < data[0].length; i++) {
            let d = checkPath(fileGraph, func, data[0][i], data[1][i])
            output.push(`${data[0][i]}, ${data[1][i]} : ${d}`);
        }
    }
    return output;
}
module.exports = xuly;