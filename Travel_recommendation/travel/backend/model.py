import pandas as pd
import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load datasetsC:\Users\devis\OneDrive\Documents\Travel_recommendation\travel\backend\data\City.csv
reviews_df = pd.read_csv('C:\\Users\\devis\\OneDrive\\Documents\\Travel_recommendation\\travel\\backend\\data\\travel_reviews.csv')
cities_df = pd.read_csv('C:\\Users\\devis\\OneDrive\\Documents\\Travel_recommendation\\travel\\backend\\data\\City.csv')
# C:\\Users\\devis\\OneDrive\\Documents\\Travel_recommendation\\travel\\backend\\data\\City.csv

# C:\\Users\\devis\\OneDrive\\Documents\\Travel_recommendation\\travel\\backend\\data\\travel_reviews.csv
# Ensure 'rating' column is numeric, replace NaN with 0, and convert to integer
reviews_df['rating'] = pd.to_numeric(reviews_df['rating'], errors='coerce').fillna(0).astype(int)

class RecommendationModel:
    def __init__(self):
        # Convert user IDs to integers by removing the 'user' prefix
        reviews_df['user_id'] = reviews_df['user_id'].str.replace('user', '').astype(int)

        # Collaborative filtering model using SVD
        self.user_item_matrix = reviews_df.pivot_table(
            index='user_id', columns='City_id', values='rating', aggfunc='mean').fillna(0)
        self.svd = TruncatedSVD(n_components=50, random_state=42)
        self.latent_matrix = self.svd.fit_transform(self.user_item_matrix)

        # Content-based filtering model using TF-IDF on city descriptions
        self.tfidf_vectorizer = TfidfVectorizer(stop_words='english')
        self.tfidf_matrix = self.tfidf_vectorizer.fit_transform(cities_df['City_desc'])

    def collaborative_filtering(self, user_id, top_n=5):
        if user_id not in self.user_item_matrix.index:
            return pd.DataFrame()

        user_vector = self.latent_matrix[self.user_item_matrix.index.get_loc(user_id)]
        scores = np.dot(self.latent_matrix, user_vector)
        recommendations = np.argsort(scores)[-top_n:][::-1]
        recommended_items = self.user_item_matrix.columns[recommendations]

        recommended_df = reviews_df[reviews_df['City_id'].isin(recommended_items)][['City_id', 'Place_desc', 'rating']].drop_duplicates()
        return recommended_df

    def content_based_filtering(self, city_name, top_n=5):
        city_index = cities_df[cities_df['City'] == city_name].index[0]
        cosine_sim = cosine_similarity(self.tfidf_matrix[city_index], self.tfidf_matrix).flatten()
        sim_scores = sorted(list(enumerate(cosine_sim)), key=lambda x: x[1], reverse=True)[1:top_n+1]
        city_indices = [i[0] for i in sim_scores]
        recommended_cities = cities_df.iloc[city_indices][['City', 'City_desc', 'Ratings']]
        return recommended_cities

    def get_recommendations(self, user_id=None, city_name=None, top_n=5, collaborative_weight=0.7, content_weight=0.3):
        if user_id is not None:
            collaborative_df = self.collaborative_filtering(user_id, top_n=top_n)
        elif city_name is not None:
            collaborative_df = self.content_based_filtering(city_name, top_n=top_n)
        else:
            raise ValueError("Either user_id or city_name must be provided for recommendations.")

        if collaborative_df.empty:
            return collaborative_df

        first_city_name = collaborative_df.iloc[0]['City_id']
        content_df = self.content_based_filtering(city_name=first_city_name, top_n=top_n)
        
        combined_recommendations = []
        for _, row in collaborative_df.iterrows():
            collaborative_score = row['rating'] * collaborative_weight

            # Check if a matching city exists in the content recommendations
            content_row = content_df[content_df['City'] == row['City_id']]
            if not content_row.empty:
                content_score = content_row['Ratings'].values[0] * content_weight
            else:
                content_score = 0  # Default to 0 if no matching city in content recommendations

            combined_score = collaborative_score + content_score
            combined_score = np.nan_to_num(combined_score)  # Ensure no NaN values in combined score

            combined_recommendations.append({'City': row['City_id'], 'Place_desc': row['Place_desc'], 'Combined_Score': combined_score})

        combined_recommendations.sort(key=lambda x: x['Combined_Score'], reverse=True)
        return combined_recommendations

# Testing the model
if __name__ == "__main__":
    recommendation_model = RecommendationModel()
    recommendations = recommendation_model.get_recommendations(user_id=1, top_n=5)
    print("Recommendations:", recommendations)