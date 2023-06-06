const functionString = `
function giai_pt_bac_nhat(a, b) {
    if (a == 0 && b == 0) {
        console.log('n2');
        return 'Phương trình vô số nghiệm';
    } else if (a != 0 && b == 0) {
        console.log('n4');
        return 'Phương trình có nghiệm x = 0';
    } else if (a == 0 && b != 0) {
        console.log('n6');
        return 'Phương trình vô nghiệm';
    } else {
        console.log('n7');
        return 'Phương trình có nghiệm x = ' + -b / a;
    }
}
`;

const giai_pt_bac = eval(`(${functionString})`);

// Sử dụng hàm đã chuyển đổi
const result = giai_pt_bac(2, 3);
console.log(result);
