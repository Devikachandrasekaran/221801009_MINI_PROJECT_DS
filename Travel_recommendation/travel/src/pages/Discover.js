// src/pages/Discover.js
// import React, { useState } from 'react';
// import SearchBox from '../components/SearchBox';
// import PlaceCard from '../components/PlaceCard';
// // import manali from '/src/assets/images/manali.jpg';

// import manali from '/assets/images/manali.jpg';
// import chennai from '../assets/images/chennai.jpg';
// import andaman from '../assets/images/andaman.jpg';
// import goa from '../assets/images/goa.jpg';
// import varanasi from '../assets/images/varanasi.jpg';
// import bali from '../assets/images/bali.jpg';

// const placesData = [
//   { name: 'Manali', img: manali, description: 'A beautiful hill station in Himachal Pradesh.', rating: 4.5 },
//   { name: 'Chennai', img: chennai, description: 'A bustling city known for its rich cultural heritage.', rating: 4.0 },
//   { name: 'Andaman', img: andaman, description: 'Exotic islands known for clear waters and beaches.', rating: 4.7 },
//   { name: 'Goa', img: goa, description: 'A tourist paradise famous for its beaches and nightlife.', rating: 4.8 },
//   { name: 'Varanasi', img: varanasi, description: 'Ancient city known for its ghats and temples.', rating: 4.3 },
//   { name: 'Bali', img: bali, description: 'Popular island in Indonesia with beautiful beaches and temples.', rating: 4.6 },
// ];

// function Discover() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPlaces, setFilteredPlaces] = useState(placesData);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredPlaces(placesData);
//     } else {
//       setFilteredPlaces(
//         placesData.filter((place) =>
//           place.name.toLowerCase().includes(term.toLowerCase())
//         )
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Discover Places</h1>
//       <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
//       <div className="place-list">
//         {filteredPlaces.map((place) => (
//           <PlaceCard key={place.name} place={place} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Discover;



















// import React, { useState } from 'react';
// import SearchBox from '../components/SearchBox';
// import PlaceCard from '../components/PlaceCard';

// import manali from '../assets/images/manali.jpg';
// import chennai from '../assets/images/chennai.jpg';
// import andaman from '../assets/images/andaman.jpg';
// import goa from '../assets/images/goa.jpg';
// import varanasi from '../assets/images/varanasi.jpg';
// import bali from '../assets/images/bali.jpg';

// const placesData = [
//   { name: 'Manali', img: manali, description: 'A beautiful hill station in Himachal Pradesh.', rating: 4.5 },
//   { name: 'Chennai', img: chennai, description: 'A bustling city known for its rich cultural heritage.', rating: 4.0 },
//   { name: 'Andaman', img: andaman, description: 'Exotic islands known for clear waters and beaches.', rating: 4.7 },
//   { name: 'Goa', img: goa, description: 'A tourist paradise famous for its beaches and nightlife.', rating: 4.8 },
//   { name: 'Varanasi', img: varanasi, description: 'Ancient city known for its ghats and temples.', rating: 4.3 },
//   { name: 'Bali', img: bali, description: 'Popular island in Indonesia with beautiful beaches and temples.', rating: 4.6 },
// ];

// function Discover() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPlaces, setFilteredPlaces] = useState(placesData);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredPlaces(placesData);
//     } else {
//       setFilteredPlaces(
//         placesData.filter((place) =>
//           place.name.toLowerCase().includes(term.toLowerCase())
//         )
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Discover Places</h1>
//       <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
//       <div className="place-list">
//         {filteredPlaces.map((place) => (
//           <PlaceCard key={place.name} place={place} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Discover;



// import React, { useState } from 'react';
// import SearchBox from '../components/SearchBox';
// import PlaceCard from '../components/PlaceCard';

// import manali from '..//assests/images/manali.jpg';
// import chennai from '..//assests/images/chennai.jpg';
// import andaman from '..//assests/images/andaman.jpg';
// import goa from '..//assests/images/goa.jpg';
// import varanasi from '..//assests/images/varanasi.jpg';
// import bali from '..//assests/images/bali.jpg';

// const placesData = [
//   { name: 'Manali', img: manali, description: 'A beautiful hill station in Himachal Pradesh.', rating: 4.5 },
//   { name: 'Chennai', img: chennai, description: 'A bustling city known for its rich cultural heritage.', rating: 4.0 },
//   { name: 'Andaman', img: andaman, description: 'Exotic islands known for clear waters and beaches.', rating: 4.7 },
//   { name: 'Goa', img: goa, description: 'A tourist paradise famous for its beaches and nightlife.', rating: 4.8 },
//   { name: 'Varanasi', img: varanasi, description: 'Ancient city known for its ghats and temples.', rating: 4.3 },
//   { name: 'Bali', img: bali, description: 'Popular island in Indonesia with beautiful beaches and temples.', rating: 4.6 },
// ];

// const Discover = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPlaces, setFilteredPlaces] = useState(placesData);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredPlaces(placesData);
//     } else {
//       setFilteredPlaces(
//         placesData.filter((place) =>
//           place.name.toLowerCase().includes(term.toLowerCase())
//         )
//       );
//     }
//   };

//   return (
//     <div className="discover">
//       <h1>Discover Places</h1>
//       <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
//       <div className="place-list">
//         {filteredPlaces.map((place) => (
//           <PlaceCard key={place.name} place={place} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Discover;





























// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBox from '../components/SearchBox';
// import PlaceCard from '../components/PlaceCard';

// import manali from '..//assests/images/manali.jpg';
// import chennai from '..//assests/images/chennai.jpg';
// import andaman from '..//assests/images/andaman.jpg';
// import goa from '..//assests/images/goa.jpg';
// import varanasi from '..//assests/images/varanasi.jpg';
// import bali from '..//assests/images/bali.jpg';

// const placesData = [
//   { name: 'Manali', img: manali, description: 'A beautiful hill station in Himachal Pradesh.', rating: 4.5 },
//   { name: 'Chennai', img: chennai, description: 'A bustling city known for its rich cultural heritage.', rating: 4.0 },
//   { name: 'Andaman', img: andaman, description: 'Exotic islands known for clear waters and beaches.', rating: 4.7 },
//   { name: 'Goa', img: goa, description: 'A tourist paradise famous for its beaches and nightlife.', rating: 4.8 },
//   { name: 'Varanasi', img: varanasi, description: 'Ancient city known for its ghats and temples.', rating: 4.3 },
//   { name: 'Bali', img: bali, description: 'Popular island in Indonesia with beautiful beaches and temples.', rating: 4.6 },
// ];

// const Discover = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPlaces, setFilteredPlaces] = useState(placesData);
//   const [recommendations, setRecommendations] = useState([]);
//   const [place, setPlace] = useState("");
//   const [userId, setUserId] = useState(1);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredPlaces(placesData);
//     } else {
//       setFilteredPlaces(
//         placesData.filter((place) =>
//           place.name.toLowerCase().includes(term.toLowerCase())
//         )
//       );
//     }
//   };

//   const getRecommendations = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/recommend', {
//         user_id: userId,
//         place_name: place,
//         top_n: 5
//       });
//       setRecommendations(response.data.recommendations || []);
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//     }
//   };

//   return (
//     <div className="discover">
//       <h1>Discover Places</h1>
      
//       {/* Search functionality */}
//       <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
      
//       <div className="place-list">
//         {filteredPlaces.map((place) => (
//           <PlaceCard key={place.name} place={place} />
//         ))}
//       </div>

//       {/* Recommendation functionality */}
//       <input
//         type="text"
//         value={place}
//         onChange={(e) => setPlace(e.target.value)}
//         placeholder="Enter place name (e.g., Manali)"
//       />
//       <button onClick={getRecommendations}>Get Recommendations</button>
      
//       <ul>
//         {recommendations.map((rec, index) => (
//           <li key={index}>{rec}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Discover;







// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBox from '../components/SearchBox';
// import PlaceCard from '../components/PlaceCard';

// import manali from '..//assests/images/manali.jpg';
// import chennai from '..//assests/images/chennai.jpg';
// import andaman from '..//assests/images/andaman.jpg';
// import goa from '..//assests/images/goa.jpg';
// import varanasi from '..//assests/images/varanasi.jpg';
// import bali from '..//assests/images/bali.jpg';

// const placesData = [
//   { name: 'Manali', img: manali, description: 'A beautiful hill station in Himachal Pradesh.', rating: 4.5 },
//   { name: 'Chennai', img: chennai, description: 'A bustling city known for its rich cultural heritage.', rating: 4.0 },
//   { name: 'Andaman', img: andaman, description: 'Exotic islands known for clear waters and beaches.', rating: 4.7 },
//   { name: 'Goa', img: goa, description: 'A tourist paradise famous for its beaches and nightlife.', rating: 4.8 },
//   { name: 'Varanasi', img: varanasi, description: 'Ancient city known for its ghats and temples.', rating: 4.3 },
//   { name: 'Bali', img: bali, description: 'Popular island in Indonesia with beautiful beaches and temples.', rating: 4.6 },
// ];

// const Discover = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPlaces, setFilteredPlaces] = useState(placesData);
//   const [recommendations, setRecommendations] = useState([]);
//   const [place, setPlace] = useState("");
//   const [userId, setUserId] = useState(1);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredPlaces(placesData);
//     } else {
//       setFilteredPlaces(
//         placesData.filter((place) =>
//           place.name.toLowerCase().includes(term.toLowerCase())
//         )
//       );
//     }
//   };

//   const getRecommendations = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/recommend', {
//         user_id: userId,
//         place_name: place,
//         top_n: 5
//       });
      
//       console.log(response.data); // Log the entire response from the API

//       if (response.data.recommendations) {
//         setRecommendations(response.data.recommendations); // Update the state with recommendations
//       } else {
//         console.log("No recommendations returned.");
//         setRecommendations([]); // Clear recommendations if none are returned
//       }

//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//     }
//   };

//   // Map recommendations to PlaceCards
//   const recommendedPlaces = recommendations.map((rec) => {
//     const placeData = placesData.find(p => p.name === rec); // Find the place details from placesData
//     return (
//       <PlaceCard 
//         key={placeData.name} 
//         place={placeData} // Pass place data (name, img, description, rating) to the PlaceCard component
//       />
//     );
//   });

//   return (
//     <div className="discover">
//       <h1>Discover Places</h1>
      
//       {/* Search functionality */}
//       <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
      
//       <div className="place-list">
//         {filteredPlaces.map((place) => (
//           <PlaceCard key={place.name} place={place} />
//         ))}
//       </div>

//       {/* Recommendation functionality */}
//       <input
//         type="text"
//         value={place}
//         onChange={(e) => setPlace(e.target.value)}
//         placeholder="Enter place name (e.g., Manali)"
//       />
//       <button onClick={getRecommendations}>Get Recommendations</button>
      
//       {/* Render recommendations as PlaceCard components */}
//       <div className="recommendation-list">
//         {recommendedPlaces}
//       </div>
//     </div>
//   );
// };

// export default Discover;










// import React, { useState } from 'react';
// import axios from 'axios';

// const Discover = () => {
//   const [location, setLocation] = useState('');
//   const [recommendations, setRecommendations] = useState([]);

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const fetchRecommendations = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/recommend', { location });
//       setRecommendations(response.data);
//     } catch (error) {
//       console.error('Error fetching recommendations:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={location}
//         onChange={handleLocationChange}
//         placeholder="Enter a location"
//       />
//       <button onClick={fetchRecommendations}>Get Recommendations</button>

//       <div>
//         {recommendations.length > 0 && (
//           <ul>
//             {recommendations.map((place, index) => (
//               <li key={index}>
//                 <h3>{place.name}</h3>
//                 <p>{place.description}</p>
//                 <img src={`/src/assets/images/${place.image}`} alt={place.name} />
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Discover;
























// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBox from '../components/SearchBox';
// import PlaceCard from '../components/PlaceCard';

// import manali from '../assests/images/manali.jpg';
// import chennai from '../assests/images/chennai.jpg';
// import andaman from '../assests/images/andaman.jpg';
// import goa from '../assests/images/goa.jpg';
// import varanasi from '../assests/images/varanasi.jpg';
// import bali from '../assests/images/bali.jpg';

// const placesData = [
//   { name: 'Manali', img: manali, description: 'A beautiful hill station in Himachal Pradesh.', rating: 4.5 },
//   { name: 'Chennai', img: chennai, description: 'A bustling city known for its rich cultural heritage.', rating: 4.0 },
//   { name: 'Andaman', img: andaman, description: 'Exotic islands known for clear waters and beaches.', rating: 4.7 },
//   { name: 'Goa', img: goa, description: 'A tourist paradise famous for its beaches and nightlife.', rating: 4.8 },
//   { name: 'Varanasi', img: varanasi, description: 'Ancient city known for its ghats and temples.', rating: 4.3 },
//   { name: 'Bali', img: bali, description: 'Popular island in Indonesia with beautiful beaches and temples.', rating: 4.6 },
// ];

// const Discover = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPlaces, setFilteredPlaces] = useState(placesData);
//   const [recommendations, setRecommendations] = useState([]);
//   const [place, setPlace] = useState('');
//   const [userId, setUserId] = useState(1);
//   const [loading, setLoading] = useState(false); // For handling the loading state
//   const [error, setError] = useState(''); // To handle error messages

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredPlaces(placesData);
//     } else {
//       setFilteredPlaces(
//         placesData.filter((place) =>
//           place.name.toLowerCase().includes(term.toLowerCase())
//         )
//       );
//     }
//   };

//   const getRecommendations = async () => {
//     if (!place.trim()) {
//       setError('Please enter a place name to get recommendations.');
//       return;
//     }
//     setError('');
//     setLoading(true); // Set loading state to true before making the API call

//     try {
//       const response = await axios.post('http://localhost:5000/api/recommend', {
//         user_id: userId,
//         place_name: place,
//         top_n: 5
//       });
      
//       console.log(response.data); // Log the response for debugging

//       if (response.data.recommendations && response.data.recommendations.length > 0) {
//         setRecommendations(response.data.recommendations); // Set recommendations data
//       } else {
//         setRecommendations([]); // Clear recommendations if none are found
//         setError('No recommendations found for this place.');
//       }

//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//       setError('An error occurred while fetching recommendations.');
//     } finally {
//       setLoading(false); // Set loading state to false after the API call is complete
//     }
//   };

//   // Map recommendations to PlaceCards
//   const recommendedPlaces = recommendations.map((rec) => {
//     const placeData = placesData.find(p => p.name === rec); // Find the place details from placesData
//     return (
//       <PlaceCard 
//         key={placeData.name} 
//         place={placeData} // Pass place data (name, img, description, rating) to the PlaceCard component
//       />
//     );
//   });

//   return (
//     <div className="discover">
//       <h1>Discover Places</h1>
      
//       {/* Search functionality */}
//       <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
      
//       <div className="place-list">
//         {filteredPlaces.map((place) => (
//           <PlaceCard key={place.name} place={place} />
//         ))}
//       </div>

//       {/* Recommendation functionality */}
//       <div className="recommendation-input">
//         <input
//           type="text"
//           value={place}
//           onChange={(e) => setPlace(e.target.value)}
//           placeholder="Enter place name (e.g., Manali)"
//         />
//         <button onClick={getRecommendations} disabled={loading}>
//           {loading ? 'Loading...' : 'Get Recommendations'}
//         </button>
//       </div>
      
//       {/* Display error message */}
//       {error && <div className="error-message">{error}</div>}

//       {/* Render recommendations as PlaceCard components */}
//       <div className="recommendation-list">
//         {recommendedPlaces.length > 0 ? recommendedPlaces : <p>No recommendations to show.</p>}
//       </div>
//     </div>
//   );
// };

// export default Discover;







































// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBox from '../components/SearchBox';
// import PlaceCard from '../components/PlaceCard';

// import manali from '../assests/images/manali.jpg';
// import chennai from '../assests/images/chennai.jpg';
// import andaman from '../assests/images/andaman.jpg';
// import goa from '../assests/images/goa.jpg';
// import varanasi from '../assests/images/varanasi.jpg';
// import bali from '../assests/images/bali.jpg';

// const placesData = [
//   { name: 'Manali', img: manali, description: 'A beautiful hill station in Himachal Pradesh.', rating: 4.5 },
//   { name: 'Chennai', img: chennai, description: 'A bustling city known for its rich cultural heritage.', rating: 4.0 },
//   { name: 'Andaman', img: andaman, description: 'Exotic islands known for clear waters and beaches.', rating: 4.7 },
//   { name: 'Goa', img: goa, description: 'A tourist paradise famous for its beaches and nightlife.', rating: 4.8 },
//   { name: 'Varanasi', img: varanasi, description: 'Ancient city known for its ghats and temples.', rating: 4.3 },
//   { name: 'Bali', img: bali, description: 'Popular island in Indonesia with beautiful beaches and temples.', rating: 4.6 },
// ];

// const Discover = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPlaces, setFilteredPlaces] = useState(placesData);
//   const [recommendations, setRecommendations] = useState([]);
//   const [place, setPlace] = useState('');
//   const [userId, setUserId] = useState(1);
//   const [loading, setLoading] = useState(false); // For handling the loading state
//   const [error, setError] = useState(''); // To handle error messages

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredPlaces(placesData);
//     } else {
//       setFilteredPlaces(
//         placesData.filter((place) =>
//           place.name.toLowerCase().includes(term.toLowerCase())
//         )
//       );
//     }
//   };

//   const getRecommendations = async () => {
//     if (!place.trim()) {
//       setError('Please enter a place name to get recommendations.');
//       return;
//     }
//     setError('');
//     setLoading(true); // Set loading state to true before making the API call

//     try {
//       // Log the request being sent
//       console.log('Request sent:', {
//         user_id: userId,
//         place_name: place,
//         top_n: 5
//       });

//       const response = await axios.post('http://localhost:5000/api/recommend', {
//         user_id: userId,
//         place_name: place,
//         top_n: 5
//       });
      
//       // Log the response from the backend
//       console.log('API Response:', response.data);

//       if (response.data.recommendations && response.data.recommendations.length > 0) {
//         setRecommendations(response.data.recommendations); // Set recommendations data
//       } else {
//         setRecommendations([]); // Clear recommendations if none are found
//         setError('No recommendations found for this place.');
//       }

//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//       setError('An error occurred while fetching recommendations.');
//     } finally {
//       setLoading(false); // Set loading state to false after the API call is complete
//     }
//   };

//   // Map recommendations to PlaceCards
//   const recommendedPlaces = recommendations.map((rec) => {
//     const placeData = placesData.find(p => p.name === rec); // Find the place details from placesData
//     return (
//       <PlaceCard 
//         key={placeData.name} 
//         place={placeData} // Pass place data (name, img, description, rating) to the PlaceCard component
//       />
//     );
//   });

//   return (
//     <div className="discover">
//       <h1>Discover Places</h1>
      
//       {/* Search functionality */}
//       <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
      
//       <div className="place-list">
//         {filteredPlaces.map((place) => (
//           <PlaceCard key={place.name} place={place} />
//         ))}
//       </div>

//       {/* Recommendation functionality */}
//       <div className="recommendation-input">
//         <input
//           type="text"
//           value={place}
//           onChange={(e) => setPlace(e.target.value)}
//           placeholder="Enter place name (e.g., Manali)"
//         />
//         <button onClick={getRecommendations} disabled={loading}>
//           {loading ? 'Loading...' : 'Get Recommendations'}
//         </button>
//       </div>
      
//       {/* Display error message */}
//       {error && <div className="error-message">{error}</div>}

//       {/* Render recommendations as PlaceCard components */}
//       <div className="recommendation-list">
//         {recommendedPlaces.length > 0 ? recommendedPlaces : <p>No recommendations to show.</p>}
//       </div>
//     </div>
//   );
// };

// export default Discover;






















// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBox from '../components/SearchBox';
// import PlaceCard from '../components/PlaceCard';

// import manali from '../assests/images/manali.jpg';
// import chennai from '../assests/images/chennai.jpg';
// import andaman from '../assests/images/andaman.jpg';
// import goa from '../assests/images/goa.jpg';
// import varanasi from '../assests/images/varanasi.jpg';
// import bali from '../assests/images/bali.jpg';

// const placesData = [
//   { name: 'Manali', img: manali, description: 'A beautiful hill station in Himachal Pradesh.', rating: 4.5 },
//   { name: 'Chennai', img: chennai, description: 'A bustling city known for its rich cultural heritage.', rating: 4.0 },
//   { name: 'Andaman', img: andaman, description: 'Exotic islands known for clear waters and beaches.', rating: 4.7 },
//   { name: 'Goa', img: goa, description: 'A tourist paradise famous for its beaches and nightlife.', rating: 4.8 },
//   { name: 'Varanasi', img: varanasi, description: 'Ancient city known for its ghats and temples.', rating: 4.3 },
//   { name: 'Bali', img: bali, description: 'Popular island in Indonesia with beautiful beaches and temples.', rating: 4.6 },
// ];

// const Discover = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPlaces, setFilteredPlaces] = useState(placesData);
//   const [recommendations, setRecommendations] = useState([]);
//   const [place, setPlace] = useState('');
//   const [userId, setUserId] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredPlaces(placesData);
//     } else {
//       setFilteredPlaces(
//         placesData.filter((place) =>
//           place.name.toLowerCase().includes(term.toLowerCase())
//         )
//       );
//     }
//   };

//   const getRecommendations = async () => {
//     if (!place.trim()) {
//       setError('Please enter a place name to get recommendations.');
//       return;
//     }
//     setError('');
//     setLoading(true);

//     try {
//       // Log the request being sent
//       console.log('Request sent:', {
//         user_id: userId,
//         place_name: place,
//         top_n: 5
//       });

//       // Make request to the new API endpoint
//       const response = await axios.post('https://new-api-endpoint.com/api/recommend', {
//         user_id: userId,
//         place_name: place,
//         top_n: 5
//       });

//       // Log the response from the backend
//       console.log('API Response:', response.data);

//       if (response.data.recommendations && response.data.recommendations.length > 0) {
//         setRecommendations(response.data.recommendations);
//       } else {
//         setRecommendations([]);
//         setError('No recommendations found for this place.');
//       }

//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//       setError('An error occurred while fetching recommendations.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const recommendedPlaces = recommendations.map((rec) => {
//     const placeData = placesData.find(p => p.name === rec); 
//     return (
//       <PlaceCard key={placeData.name} place={placeData} />
//     );
//   });

//   return (
//     <div className="discover">
//       <h1>Discover Places</h1>
      
//       <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
      
//       <div className="place-list">
//         {filteredPlaces.map((place) => (
//           <PlaceCard key={place.name} place={place} />
//         ))}
//       </div>

//       <div className="recommendation-input">
//         <input
//           type="text"
//           value={place}
//           onChange={(e) => setPlace(e.target.value)}
//           placeholder="Enter place name (e.g., Manali)"
//         />
//         <button onClick={getRecommendations} disabled={loading}>
//           {loading ? 'Loading...' : 'Get Recommendations'}
//         </button>
//       </div>

//       {error && <div className="error-message">{error}</div>}

//       <div className="recommendation-list">
//         {recommendedPlaces.length > 0 ? recommendedPlaces : <p>No recommendations to show.</p>}
//       </div>
//     </div>
//   );
// };

// export default Discover;





















import React, { useState } from 'react';
import axios from 'axios';
import SearchBox from '../components/SearchBox';
import PlaceCard from '../components/PlaceCard';

import manali from '../assests/images/manali.jpg';
import chennai from '../assests/images/chennai.jpg';
import andaman from '../assests/images/andaman.jpg';
import goa from '../assests/images/goa.jpg';
import varanasi from '../assests/images/varanasi.jpg';
import bali from '../assests/images/bali.jpg';

const placesData = [
  { name: 'Manali', img: manali, description: 'A beautiful hill station in Himachal Pradesh.', rating: 4.5 },
  { name: 'Chennai', img: chennai, description: 'A bustling city known for its rich cultural heritage.', rating: 4.0 },
  { name: 'Andaman', img: andaman, description: 'Exotic islands known for clear waters and beaches.', rating: 4.7 },
  { name: 'Goa', img: goa, description: 'A tourist paradise famous for its beaches and nightlife.', rating: 4.8 },
  { name: 'Varanasi', img: varanasi, description: 'Ancient city known for its ghats and temples.', rating: 4.3 },
  { name: 'Bali', img: bali, description: 'Popular island in Indonesia with beautiful beaches and temples.', rating: 4.6 },
];

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState(placesData);
  const [recommendations, setRecommendations] = useState([]);
  const [place, setPlace] = useState('');
  const [userId, setUserId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredPlaces(placesData);
    } else {
      setFilteredPlaces(
        placesData.filter((place) =>
          place.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  const getRecommendations = async () => {
    if (!place.trim()) {
      setError('Please enter a place name to get recommendations.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      // Replace with your actual token for the Authorization header
      const your_token_here = 'your_actual_token_here';  // Add your token here

      const response = await axios.post('https://new-api-endpoint.com/api/recommend', {
        user_id: userId,
        place_name: place,
        top_n: 5
      }, {
        headers: {
          'Authorization': `Bearer ${your_token_here}`  // Authorization header with Bearer token
        }
      });

      console.log('API Response:', response.data);

      if (response.data.recommendations && response.data.recommendations.length > 0) {
        setRecommendations(response.data.recommendations);
      } else {
        setRecommendations([]);
        setError('No recommendations found for this place.');
      }

    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setError('An error occurred while fetching recommendations.');
    } finally {
      setLoading(false);
    }
  };

  const recommendedPlaces = recommendations.map((rec) => {
    const placeData = placesData.find(p => p.name === rec); 
    return (
      <PlaceCard key={placeData.name} place={placeData} />
    );
  });

  return (
    <div className="discover">
      <h1>Discover Places</h1>
      
      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
      
      <div className="place-list">
        {filteredPlaces.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>

      <div className="recommendation-input">
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter place name (e.g., Manali)"
        />
        <button onClick={getRecommendations} disabled={loading}>
          {loading ? 'Loading...' : 'Get Recommendations'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="recommendation-list">
        {recommendedPlaces.length > 0 ? recommendedPlaces : <p>No recommendations to show.</p>}
      </div>
    </div>
  );
};

export default Discover;







// import React, { useState } from 'react';
// import axios from 'axios';
// import PlaceCard from '../components/PlaceCard';

// const Discover = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPlaces, setFilteredPlaces] = useState(placesData);
//   const [recommendations, setRecommendations] = useState([]);
//   const [userId, setUserId] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredPlaces(placesData);
//     } else {
//       setFilteredPlaces(
//         placesData.filter((place) =>
//           place.name.toLowerCase().includes(term.toLowerCase())
//         )
//       );
//     }
//   };

//   const getRecommendations = async () => {
//     if (!searchTerm.trim()) {
//       setError('Please enter a place name to get recommendations.');
//       return;
//     }
//     setError('');
//     setLoading(true);

//     try {
//       const response = await axios.post('https://new-api-endpoint.com/api/recommend', {
//         user_id: userId,
//         place_name: searchTerm,
//         top_n: 5
//       });

//       if (response.data.recommendations && response.data.recommendations.length > 0) {
//         setRecommendations(response.data.recommendations);
//       } else {
//         setRecommendations([]);
//         setError('No recommendations found for this place.');
//       }

//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//       setError('An error occurred while fetching recommendations.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const recommendedPlaces = recommendations.map((rec) => {
//     const placeData = placesData.find(p => p.name === rec);
//     return (
//       <PlaceCard key={placeData.name} place={placeData} />
//     );
//   });

//   return (
//     <div className="discover">
//       <h1>Discover Places</h1>
      
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => handleSearch(e.target.value)}
//         placeholder="Enter place name (e.g., Manali)"
//       />
//       <button onClick={getRecommendations} disabled={loading}>
//         {loading ? 'Loading...' : 'Get Recommendations'}
//       </button>

//       {error && <div className="error-message">{error}</div>}

//       <div className="place-list">
//         {filteredPlaces.map((place) => (
//           <PlaceCard key={place.name} place={place} />
//         ))}
//       </div>

//       <div className="recommendation-list">
//         {recommendedPlaces.length > 0 ? recommendedPlaces : <p>No recommendations to show.</p>}
//       </div>
//     </div>
//   );
// };

// export default Discover;






























































































































































