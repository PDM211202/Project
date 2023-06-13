const generateDotCode = require('./test/create_graph');
const search = require('./search_basic_path');
const { kiem_tra_snt, giai_pt_bac_nhat, tinhTienDien } = require('./index');
const getArray = require("./esprima");
const searchNode = require("./change");

// generateDotCode(kiem_tra_snt.toString(), 'graphviz/kiem_tra_snt.dot');
// generateDotCode(giai_pt_bac_nhat.toString(), 'graphviz/giai_pt_bac_nhat.dot');
// generateDotCode(tinhTienDien.toString(), 'graphviz/tinhTienDien.dot');

// search('kiem_tra_snt.dot');
// search('giai_pt_bac_nhat.dot');

const checkPath = (fileGraph, func, input_1, input_2, input_3) => {
    const dataPath = {};
    let path = search(fileGraph);
    const data = searchNode('tinhTienDien.dot');
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

let data1 = [40,50,60,80,90,100,110,120,130,140,150,160,170,180,190,200,250,300,400]

// let d = checkPath('tinhTienDien.dot', tinhTienDien, 30)
const xuly = (data1) => {
    data1.forEach((item) => {
        let d = checkPath('tinhTienDien.dot', tinhTienDien, item)
        console.log(d);
    })
}
xuly(data1)