const { kiem_tra_snt, giai_pt_bac_nhat, tinhTienDien } = require('./index');
const search_input = require('./search_input');
const generateDotCode = require('./test/create_graph');

//tên file graph
const fileGraph = 'tinhTienDien.dot';
// tên chương trình
const func = tinhTienDien;
// số đầu vào
const sl = 1;
// số lượng đầu vào
const spt = 100;
// tạo giá trị trong khoảng
const start = 1;
const end = 300;

generateDotCode(func.toString(), `graphviz/${fileGraph}`);
search_input(fileGraph, func, sl, spt, start, end);