// Simple local server for testing the Lambda function
// This allows you to test the full stack locally before deploying to AWS

const http = require('http');
const { handler } = require('./lambda/index');

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  // Parse URL
  const url = new URL(req.url, `http://localhost:${PORT}`);
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Handle OPTIONS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Only handle GET requests to /recommend
  if (req.method === 'GET' && url.pathname === '/recommend') {
    try {
      // Convert query parameters to Lambda event format
      const queryStringParameters = {};
      url.searchParams.forEach((value, key) => {
        queryStringParameters[key] = value;
      });

      const event = {
        httpMethod: 'GET',
        queryStringParameters
      };

      // Call Lambda handler
      const result = await handler(event);
      
      // Send response
      res.writeHead(result.statusCode, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(result.body);
    } catch (error) {
      console.error('Error:', error);
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Local API server running at http://localhost:${PORT}`);
  console.log(`📺 Test endpoint: http://localhost:${PORT}/recommend?mood=happy`);
  console.log(`\n💡 Available moods: happy, sad, stressed, bored, angry, excited, nostalgic, random\n`);
});
