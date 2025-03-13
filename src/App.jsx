import { useState } from 'react';
import './App.css';

function App() {
  // State for the user's description input
  const [description, setDescription] = useState('');

  // State for the generated image URL
  const [imageUrl, setImageUrl] = useState('');

  // State to track whether the image is being generated
  const [isLoading, setIsLoading] = useState(false);

  // Function that calls the API to generate an image based on the description
  const generateImage = async () => {
    // Set loading state to true to disable the button and update its text
    setIsLoading(true);

    try {
      console.log('Generating image with description:', description);

      // Replace with your API Gateway URL
      const apiUrl = '';

      // Make an HTTP POST request to the endpoint with the description
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description }),
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      // Parse the JSON response (expecting an object with an imageUrl property)
      const data = await response.json();

      // Update state with the image URL returned by the API
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('An error occurred while generating the image.');
    } finally {
      // Set loading state back to false after the process completes
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>My AI image generator</h1>
    </div>
  );
}

export default App;