const episodes = require('./episodeData');

exports.handler = async (event) => {
  // Add CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Get mood from query parameters
    const mood = event.queryStringParameters?.mood || 'random';

    console.log(`Received request for mood: ${mood}`);

    // Filter episodes by mood
    let matchingEpisodes = episodes.filter(ep => ep.mood.includes(mood));

    // If no episodes match or mood is 'random', use all episodes
    if (matchingEpisodes.length === 0 || mood === 'random') {
      matchingEpisodes = episodes;
    }

    // Select a random episode from matching ones
    const randomIndex = Math.floor(Math.random() * matchingEpisodes.length);
    const selectedEpisode = matchingEpisodes[randomIndex];

    console.log(`Selected episode: ${selectedEpisode.title}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        episode: selectedEpisode,
        mood: mood,
        totalMatches: matchingEpisodes.length
      })
    };
  } catch (error) {
    console.error('Error processing request:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};
