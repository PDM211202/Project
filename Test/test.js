const generateDotCode = require('./test/create_graph');
const search = require('./search_basic_path');
const { kiem_tra_snt, giai_pt_bac_nhat, tinhTienDien } = require('./index');
const getArray = require("./esprima");
const searchNode = require("./change");

generateDotCode(kiem_tra_snt.toString(), 'graphviz/kiem_tra_snt.dot');
generateDotCode(giai_pt_bac_nhat.toString(), 'graphviz/giai_pt_bac_nhat.dot');
generateDotCode(tinhTienDien.toString(), 'graphviz/tinhTienDien.dot');

// search('kiem_tra_snt.dot');
// search('giai_pt_bac_nhat.dot');

const checkPath = (fileGraph, func, input_1, input_2, input_3) => {
    const dataPath = {};
    let path = search(fileGraph);
    const data = searchNode('tinhTienDien.dot');
    const get = getArray(func ,data, input_1, input_2, input_3);
    // console.log(get);
    path.forEach((item) => {
        if(item.includes(get)){
            dataPath[input_1] = item;
        }
    })
     
}

checkPath('tinhTienDien.dot', tinhTienDien, 30)