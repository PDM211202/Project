// Hàm tính khoảng cách Euclidean giữa hai điểm dữ liệu
function euclideanDistance(point1, point2) {
    let sum = 0;
    for (let i = 0; i < point1.length; i++) {
        sum += Math.pow(point1[i] - point2[i], 2);
    }
    return Math.sqrt(sum);
}

// Hàm tìm K hàng xóm gần nhất cho một điểm dữ liệu mới
function findKNearestNeighbors(X_train, y_train, x_new, k) {
    let distances = [];
    for (let i = 0; i < X_train.length; i++) {
        let distance = euclideanDistance(X_train[i], x_new);
        distances.push([distance, y_train[i]]);
    }
    distances.sort((a, b) => a[0] - b[0]); // Sắp xếp theo khoảng cách tăng dần
    return distances.slice(0, k); // Trả về K hàng xóm gần nhất
}

// Hàm phân loại điểm dữ liệu mới bằng thuật toán KNN
function predictClass(X_train, y_train, x_new, k) {
    let neighbors = findKNearestNeighbors(X_train, y_train, x_new, k);
    let counts = {};
    for (let i = 0; i < neighbors.length; i++) {
        let label = neighbors[i][1];
        counts[label] = (counts[label] || 0) + 1;
    }
    let sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    return sortedCounts[0][0]; // Trả về nhãn xuất hiện nhiều nhất trong K hàng xóm
}

// Dữ liệu huấn luyện
let X_train = [
    [2, 3],
    [3, 4],
    [1, 1],
    [4, 5],
    // Thêm các mẫu dữ liệu khác...
];

let y_train = ['not spam', 'not spam', 'not spam', 'spam']; // Nhãn tương ứng cho mỗi mẫu dữ liệu

// Dữ liệu điểm mới cần phân loại
let x_new = [3, 3];

// Số hàng xóm K
let k = 3;

// Dự đoán nhãn cho điểm mới
let predictedLabel = predictClass(X_train, y_train, x_new, k);
console.log('Dự đoán:', predictedLabel);