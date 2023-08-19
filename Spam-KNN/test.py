import csv
import pandas as pd
import string
import nltk
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import GridSearchCV

nltk.download('punkt')  # Tải xuống dữ liệu cần thiết cho nltk
from nltk.stem.porter import PorterStemmer

from nltk.corpus import stopwords

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score

# Đường dẫn tới tệp CSV
csv_file_path = 'spam.csv'

data_set = pd.read_csv('spam.csv',encoding='latin-1')

print("Top 5 rows of dataset")
print(data_set.head())

#Renaming columns for better understanding
print("Renaming columns")
data_set.rename(columns={'v1': 'Variety', 'v2': 'Data'}, inplace=True)
print(data_set.head())

#Check information of dataset
print("Dataset information")
print(data_set.info())

#Drop unnecessary columns
print("Dropping extra columns")
data_set.drop(columns=['Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4'], inplace=True)
print(data_set.head())

#Check for duplicate values
print("Checking for duplicate data")
print("Total Duplicated values =", data_set.duplicated().sum())

#Check for null values
print("Checking for null values")
print("Total NULL values =\n\n",data_set.isnull().sum())

#Print size of dataset
print("Size of dataset is:", data_set.size)

# Tokenize sentences
data_set['sentence'] = data_set['Data'].apply(lambda x:len(nltk.sent_tokenize(x)))
print(data_set.sample(8))

# Count number of characters in each text
data_set['chars']= data_set['Data'].apply(len)
print(data_set.sample(8))

# Statistics summary of Spam mails
print("Statistics summary of Spam mails")
print(data_set[data_set['Variety'] == 1][['Data','sentence', 'chars']].describe())

#Removing stop words
nltk.download('stopwords')
stop = stopwords.words('english')
data_set['Data'] = data_set['Data'].apply(lambda x: ' '.join([word for word in x.split() if word not in (stop)]))
data_set['Data'].head()

#Removing punctuations and lower casing
data_set['Data'] = data_set['Data'].apply(lambda x:''.join([i for i in x if i not in string.punctuation]))
data_set['Data'] = data_set['Data'].apply(lambda x: x.lower())

#stemming of words
st = PorterStemmer()
data_set['Data'] = data_set['Data'].apply(lambda x: ' '.join([st.stem(word) for word in x.split()]))
data_set.head()

#Vectorizing the Words
tf_vec = TfidfVectorizer()
features = tf_vec.fit_transform(data_set['Data'])
X = features
y = data_set['Variety']

#Splitting the Dataset into Train and Test Sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Define a function that calculates the Euclidean distance between two points
def euclidean_distance(x1, x2):
    return np.sqrt(np.sum((x1 - x2)**2))

def get_k_nearest_neighbors(train, test, k):
    distances = euclidean_distance(train, test)
    distances.sort(reverse=True)  # Sắp xếp theo khoảng cách giảm dần
    k_nearest_labels = [label for _, label in distances[:k]]
    return k_nearest_labels

la = get_k_nearest_neighbors(X_train, X_test)