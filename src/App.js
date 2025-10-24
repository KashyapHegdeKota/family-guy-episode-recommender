import React, { useState } from 'react';
import './App.css';
import MoodSelector from './components/MoodSelector';
import EpisodeCard from './components/EpisodeCard';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMoodSelect = async (mood) => {
    setSelectedMood(mood);
    setLoading(true);
    setError(null);
    setEpisode(null);

    try {
      // Replace with your AWS API Gateway URL after deployment
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/recommend';
      
      const response = await fetch(`${API_URL}?mood=${mood}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch episode recommendation');
      }
      
      const data = await response.json();
      setEpisode(data.episode);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching recommendation:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedMood(null);
    setEpisode(null);
    setError(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎬 Family Guy Episode Recommender</h1>
        <p>Find the perfect episode for your mood!</p>
      </header>

      <main className="App-main">
        {!selectedMood && !episode && (
          <MoodSelector onSelectMood={handleMoodSelect} />
        )}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Finding the perfect episode...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>😕 Oops! {error}</p>
            <button onClick={handleReset}>Try Again</button>
          </div>
        )}

        {episode && !loading && (
          <div className="result">
            <EpisodeCard episode={episode} />
            <button className="reset-button" onClick={handleReset}>
              Choose Another Mood
            </button>
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>Made with ❤️ for Family Guy fans</p>
      </footer>
    </div>
  );
}

export default App;
