# Family Guy Episode Recommender 🎬

A fun web application that recommends Family Guy episodes based on your current mood! Built with React frontend and AWS serverless backend.

## Features

- 🎭 **8 Different Moods**: Happy, Sad, Stressed, Bored, Angry, Excited, Nostalgic, or Surprise Me
- 📺 **20+ Curated Episodes**: Hand-picked episodes with mood tags
- ⚡ **Serverless Backend**: AWS Lambda with API Gateway
- 🎨 **Beautiful UI**: Modern, responsive design with smooth animations
- 🚀 **Fast & Scalable**: Serverless architecture that scales automatically

## Project Structure

```
family-guy-fav-episode/
├── src/                          # React frontend
│   ├── components/
│   │   ├── MoodSelector.js      # Mood selection component
│   │   ├── MoodSelector.css
│   │   ├── EpisodeCard.js       # Episode display component
│   │   └── EpisodeCard.css
│   ├── App.js                   # Main app component
│   ├── App.css
│   ├── index.js
│   └── index.css
├── lambda/                       # AWS Lambda function
│   ├── index.js                 # Lambda handler
│   ├── episodeData.js           # Episode database
│   ├── test-local.js            # Local testing script
│   └── package.json
├── public/
│   └── index.html
├── template.yaml                 # AWS SAM template
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- AWS Account (for deployment)
- AWS CLI configured
- AWS SAM CLI (for Lambda deployment)

### Local Development

#### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

#### 2. Test Lambda Function Locally

```bash
# Navigate to lambda directory
cd lambda

# Run local tests
node test-local.js
```

### AWS Deployment

#### 1. Install AWS SAM CLI

Follow instructions at: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html

#### 2. Deploy Lambda Function

```bash
# Build the application
sam build

# Deploy to AWS
sam deploy --guided
```

Follow the prompts:
- Stack Name: `family-guy-episode-recommender`
- AWS Region: Your preferred region (e.g., `us-east-1`)
- Confirm changes: `Y`
- Allow SAM CLI IAM role creation: `Y`
- Save arguments to configuration file: `Y`

#### 3. Get API Endpoint

After deployment, SAM will output the API Gateway endpoint URL. Copy this URL.

#### 4. Configure Frontend

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://your-api-id.execute-api.region.amazonaws.com/prod/recommend
```

Replace with your actual API Gateway URL from the deployment output.

#### 5. Build and Deploy Frontend

```bash
# Build production version
npm run build

# Deploy to your hosting service (S3, Netlify, Vercel, etc.)
```

## API Documentation

### Endpoint

```
GET /recommend?mood={mood}
```

### Parameters

- `mood` (string): One of: `happy`, `sad`, `stressed`, `bored`, `angry`, `excited`, `nostalgic`, `random`

### Response

```json
{
  "episode": {
    "season": 4,
    "episode": 8,
    "title": "8 Simple Rules for Buying My Teenage Daughter",
    "description": "Peter becomes overprotective when Meg starts dating...",
    "mood": ["happy", "excited"],
    "rating": 8.5,
    "memorable_quote": "You know what really grinds my gears?",
    "reason": "Light-hearted family comedy with hilarious Peter moments..."
  },
  "mood": "happy",
  "totalMatches": 5
}
```

## Environment Variables

### Frontend (.env)

- `REACT_APP_API_URL`: Your API Gateway endpoint URL

## Tech Stack

### Frontend
- React 18
- CSS3 with animations
- Fetch API for HTTP requests

### Backend
- AWS Lambda (Node.js 18)
- API Gateway
- CloudWatch Logs

### Infrastructure
- AWS SAM (Serverless Application Model)
- CloudFormation

## Episode Database

The app includes 20+ carefully curated Family Guy episodes with:
- Season and episode numbers
- Descriptions
- Mood tags
- IMDb-style ratings
- Memorable quotes
- Personalized reasons for recommendation

## Development Roadmap

- [ ] Add user authentication
- [ ] Save favorite episodes
- [ ] Rate recommendations
- [ ] Add more episodes
- [ ] Integrate with streaming services
- [ ] Add episode trailers/clips
- [ ] Social sharing features

## Contributing

Feel free to fork this project and add your own favorite episodes or features!

## License

MIT License - feel free to use this project however you'd like!

## Acknowledgments

- Family Guy by Seth MacFarlane
- Built with ❤️ for Family Guy fans

---

Made by a Family Guy enthusiast 🎭
