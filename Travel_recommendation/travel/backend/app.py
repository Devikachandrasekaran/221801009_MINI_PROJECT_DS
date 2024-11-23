from flask import Flask, jsonify, request
from model import RecommendationModel
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Initialize the recommendation model
recommendation_model = RecommendationModel()

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        data = request.get_json(force=True)
        user_id = data.get('user_id')
        top_n = data.get('top_n', 5)
        collaborative_weight = data.get('collaborative_weight', 0.7)
        content_weight = data.get('content_weight', 0.3)

        if user_id is None:
            return jsonify({"error": "No user_id provided"}), 400

        # Get recommendations using the combined weighted approach
        recommendations = recommendation_model.get_recommendations(
            user_id=user_id,
            top_n=top_n,
            collaborative_weight=collaborative_weight,
            content_weight=content_weight
        )
        
        return jsonify(recommendations)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)