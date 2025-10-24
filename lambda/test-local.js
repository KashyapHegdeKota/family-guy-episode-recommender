// Local testing script for the Lambda function
const { handler } = require('./index');

// Test with different moods
const testMoods = ['happy', 'sad', 'stressed', 'bored', 'angry', 'excited', 'nostalgic', 'random'];

async function runTests() {
  console.log('🧪 Testing Lambda function locally...\n');

  for (const mood of testMoods) {
    console.log(`\n📺 Testing mood: ${mood.toUpperCase()}`);
    console.log('─'.repeat(50));

    const event = {
      httpMethod: 'GET',
      queryStringParameters: { mood }
    };

    try {
      const result = await handler(event);
      const body = JSON.parse(result.body);
      
      if (result.statusCode === 200) {
        console.log(`✅ Success!`);
        console.log(`   Episode: ${body.episode.title}`);
        console.log(`   Season ${body.episode.season}, Episode ${body.episode.episode}`);
        console.log(`   Rating: ${body.episode.rating}/10`);
        console.log(`   Matches found: ${body.totalMatches}`);
      } else {
        console.log(`❌ Error: ${result.statusCode}`);
        console.log(`   ${body.error}`);
      }
    } catch (error) {
      console.log(`❌ Exception: ${error.message}`);
    }
  }

  console.log('\n✨ All tests completed!\n');
}

runTests();
