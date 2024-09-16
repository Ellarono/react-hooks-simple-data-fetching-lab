// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // State to hold the image URL
  const [imageUrl, setImageUrl] = useState(null);

  // Fetch data using useEffect
  useEffect(() => {
    // Fetch random dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the image URL
        setImageUrl(data.message);
      });
  }, []); // Empty dependency array to ensure this runs only once after the initial render

  return (
    <div>
      {/* If imageUrl is null, show "Loading...", otherwise show the image */}
      {imageUrl ? (
        <img src={imageUrl} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
