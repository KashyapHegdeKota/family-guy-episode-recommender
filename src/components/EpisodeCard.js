import React from 'react';
import './EpisodeCard.css';

function EpisodeCard({ episode }) {
  return (
    <div className="episode-card">
      <div className="episode-header">
        <h2>{episode.title}</h2>
        <div className="episode-meta">
          <span className="season-info">
            Season {episode.season} • Episode {episode.episode}
          </span>
        </div>
      </div>

      <div className="episode-content">
        <p className="episode-description">{episode.description}</p>
        
        <div className="episode-details">
          <div className="detail-item">
            <span className="detail-label">Why this episode?</span>
            <p className="detail-value">{episode.reason}</p>
          </div>

          {episode.memorable_quote && (
            <div className="detail-item quote">
              <span className="detail-label">Memorable Quote:</span>
              <p className="detail-value">"{episode.memorable_quote}"</p>
            </div>
          )}

          {episode.rating && (
            <div className="detail-item rating">
              <span className="detail-label">Rating:</span>
              <p className="detail-value">⭐ {episode.rating}/10</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EpisodeCard;
