const { kiem_tra_snt, giai_pt_bac_nhat } = require('./index');
const xuly = require('./test');
const createRandomMatrix = require('./create_data');
const search = require('./search_basic_path');

const data1 = createRandomMatrix(2, 1000, 0, 400);
const output = xuly(data1, 'giai_pt_bac_nhat.dot', giai_pt_bac_nhat);

