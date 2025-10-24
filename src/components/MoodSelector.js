import React from 'react';
import './MoodSelector.css';

const moods = [
  { id: 'happy', emoji: '😄', label: 'Happy', color: '#FFD93D' },
  { id: 'sad', emoji: '😢', label: 'Sad', color: '#6BCB77' },
  { id: 'stressed', emoji: '😰', label: 'Stressed', color: '#FF6B6B' },
  { id: 'bored', emoji: '😴', label: 'Bored', color: '#4D96FF' },
  { id: 'angry', emoji: '😠', label: 'Angry', color: '#E63946' },
  { id: 'excited', emoji: '🤩', label: 'Excited', color: '#F72585' },
  { id: 'nostalgic', emoji: '🥺', label: 'Nostalgic', color: '#B5838D' },
  { id: 'random', emoji: '🎲', label: 'Surprise Me', color: '#9D4EDD' }
];

function MoodSelector({ onSelectMood }) {
  return (
    <div className="mood-selector">
      <h2>How are you feeling today?</h2>
      <div className="mood-grid">
        {moods.map((mood) => (
          <button
            key={mood.id}
            className="mood-button"
            onClick={() => onSelectMood(mood.id)}
            style={{ '--mood-color': mood.color }}
          >
            <span className="mood-emoji">{mood.emoji}</span>
            <span className="mood-label">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;
