const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

const getArray = (func, data, input_1, input_2, input_3, input_4) => {
    let arrayPath = [];
    function addMarkingStatements(code, data) {
        const ast = esprima.parseScript(code);
        let i = 0;
        estraverse.traverse(ast, {
            enter: function (node) {
                if (node.type === 'IfStatement') {
                    const markingStatement = esprima.parseScript(`arrayPath.push("${data[i]}")`).body[0];
                    i++;
                    node.consequent.body.unshift(markingStatement);
                }
                // if (node.type === 'ForStatement') {
                //     const markingStatement = esprima.parseScript('console.log("Marked inside for");').body[0];
                //     node.body.body.unshift(markingStatement);
                // }
                if (node.type === 'IfStatement' && node.alternate && node.alternate.type === 'BlockStatement') {
                    const markingStatement = esprima.parseScript(`arrayPath.push("${data[i]}")`).body[0];
                    i++;
                    node.alternate.body.unshift(markingStatement);
                }
            }
        });
        const modifiedCode = escodegen.generate(ast);
        return modifiedCode;
    }

    const arr = (code, array) => {
        const markedCode = addMarkingStatements(code.toString(), array);
        const strFunc = markedCode.toString();
        const func = eval(`(${strFunc})`);
        return func;
    }

    let test = arr(func, data);
    test(input_1, input_2, input_3, input_4);
    return arrayPath;
}
module.exports = getArray;
// const test = markedCode.toString();
// const giai_pt_bac = eval(`(${test})`);

// // Sử dụng hàm đã chuyển đổi
// const result = giai_pt_bac(2, 3);
// console.log(result);
