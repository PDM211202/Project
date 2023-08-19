import csv
from sklearn.feature_extraction.text import TfidfVectorizer

def process_and_export_data(input_file_path, output_file_path):
    # Đọc dữ liệu từ tệp CSV đầu vào
    data = []
    with open(input_file_path, 'r', newline='', encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file)
        next(csv_reader)  # Bỏ qua dòng tiêu đề
        for row in csv_reader:
            label = row[0]
            text = row[1]
            data.append((text, label))
    
    # Vector hóa dữ liệu văn bản bằng TF-IDF
    tfidf_vectorizer = TfidfVectorizer(stop_words='english')
    processed_data = tfidf_vectorizer.fit_transform([text for text, label in data])
    
    # Ghi dữ liệu đã xử lý vào tệp CSV mới
    with open(output_file_path, 'w', newline='', encoding='utf-8') as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(['Label', 'Processed_Text'])  # Ghi dòng tiêu đề
        for (text, label), processed_text in zip(data, processed_data):
            csv_writer.writerow([label, processed_text])  # Ghi dữ liệu đã xử lý vào tệp CSV mới
    
    print(f"Processed data exported to {output_file_path}")

# Gọi hàm để xử lý dữ liệu từ file CSV và xuất ra file CSV mới
input_file_path = 'spam.csv'
output_file_path = 'processed_data.csv'
process_and_export_data(input_file_path, output_file_path)

# Define a range of k values to try
k_values = list(range(1, 11))

# Initialize an empty list to store cross-validation scores
cv_scores = []

# Loop through each k value and perform cross-validation
for k in k_values:
    knn = KNeighborsClassifier(n_neighbors=k)
    scores = cross_val_score(knn, X_train, y_train, cv=5, scoring='accuracy')
    cv_scores.append(scores.mean())

# Find the best k value
best_k = k_values[np.argmax(cv_scores)]
best_accuracy = max(cv_scores)

print("Best k:", best_k)
print("Best accuracy:", best_accuracy)

# Train the KNN model using the best k value
knn_model = KNeighborsClassifier(n_neighbors=best_k)

knn_model.fit(X_train, y_train)


# Evaluate the model on the test set
accuracy = knn_model.score(X_test, y_test)
print("Test accuracy:", accuracy)