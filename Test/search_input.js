const { kiem_tra_snt, giai_pt_bac_nhat } = require('./index');
const xuly = require('./test');
const createRandomMatrix = require('./create_data');
const search = require('./search_basic_path');

const data1 = createRandomMatrix(2, 100, 0, 10);
const output = xuly(data1, 'giai_pt_bac_nhat.dot', giai_pt_bac_nhat);

const search_input = (fileGraph) => {
    const path = search(fileGraph);
    const object = {};
    path.forEach((item) => {
        let arr = [];
        output.forEach((input) => {
            if (input.includes(item)) {
                const str = input.split(':');
                const stringBeforeColon = str[0].trim();
                // console.log(stringBeforeColon);
                arr.push(stringBeforeColon);
            }
        })
        let obj = {key: item, value: arr}
        const {key, value} = obj;
        object[key] = value;
    })
    console.log(object);
}

search_input('giai_pt_bac_nhat.dot')