//Why was this file created???
//Why did I do this???
//I don't know...
//
//Is there some use for this... hmmm...

// Utility functions for home page API interactions
export async function fetchHomeData() {
    try {
      const response = await fetch('/api/home-data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch home data:', error);
      // Handle error (show user notification, return fallback data, etc.)
      throw error; // Re-throw if caller needs to handle it
    }
  }
  
  // Add other home-related functions as needed