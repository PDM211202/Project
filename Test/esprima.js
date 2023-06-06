const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
const { kiem_tra_snt, giai_pt_bac_nhat } = require('./index');

const data = ['n2', 'n4', 'n6', 'n7']

function addMarkingStatements(code, markingPoints) {
    const ast = esprima.parseScript(code);
    let i = 0;
    estraverse.traverse(ast, {
        enter: function(node, parent) {
            // console.log(node);
            // if (node.type === 'FunctionDeclaration' && markingPoints.includes(node.id.name)) {
            //     const markingStatement = esprima.parseScript('console.log("Marked");').body[0];
            //     node.body.body.unshift(markingStatement);
            // }
            
            if (node.type === 'IfStatement') {
                const markingStatement = esprima.parseScript(`console.log("${data[i]}");`).body[0];
                i++;
                node.consequent.body.unshift(markingStatement);
            }
            // if (node.type === 'ForStatement') {
            //     const markingStatement = esprima.parseScript('console.log("Marked inside for");').body[0];
            //     node.body.body.unshift(markingStatement);
            // }
            if (node.type === 'IfStatement' && node.alternate && node.alternate.type === 'BlockStatement') {
                const markingStatement = esprima.parseScript(`console.log("${data[i]}");`).body[0];
                i++;
                node.alternate.body.unshift(markingStatement);
            }
            
        }
    });

    const modifiedCode = escodegen.generate(ast);
    return modifiedCode;
}

const markingPoints = [
    // Chỉ định các điểm trên đồ thị để đánh dấu vào chương trình
    'findMaximum' // Đánh dấu vào hàm 'findMaximum'
];

const markedCode = addMarkingStatements(giai_pt_bac_nhat.toString(), markingPoints);

const test = markedCode.toString();
const giai_pt_bac = eval(`(${test})`);

// Sử dụng hàm đã chuyển đổi
const result = giai_pt_bac(2, 3);
console.log(result);
