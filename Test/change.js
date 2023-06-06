const fs = require('fs');
const dot = require('graphlib-dot');

const searchNode = (path) => {
    // Đường dẫn đến file DOT
    const dotFilePath = './graphviz/' + path;

    // Đọc nội dung file DOT
    const dotSource = fs.readFileSync(dotFilePath, 'utf-8');

    // Parse đồ thị từ nội dung DOT
    const dotGraph = dot.read(dotSource);

    let v = [];
    let w = [];
    const objectList = Object.values(dotGraph._out);
    objectList.forEach((node, index) => {
        let object = Object.values(node);
        const keys = Object.keys(node);
        if (keys.length > 1) {
            object.forEach((item) => {
                v.push(item.v);
                w.push(item.w);
            })
        }
    })
    const result = [];
    for (let i = 0; i < w.length; i++) {
        if (!v.includes(w[i])) {
            result.push(w[i]);
        }
    }

    return result;
}
// searchNode('tinhTienDien.dot');
module.exports = searchNode;
