# Quick Start Guide 🚀

Get your Family Guy Episode Recommender up and running in minutes!

## Option 1: Local Development (Fastest)

Perfect for testing the app locally without AWS deployment.

### Steps:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Both Frontend and Backend**
   ```bash
   npm run dev
   ```

   This will start:
   - Local API server on `http://localhost:3001`
   - React app on `http://localhost:3000`

3. **Open Your Browser**
   
   Go to `http://localhost:3000` and start using the app! 🎉

### Test the Lambda Function Separately

```bash
npm run test-lambda
```

This will test all moods and show you sample recommendations.

---

## Option 2: Full AWS Deployment

Deploy to AWS for a production-ready application.

### Prerequisites:

1. **AWS Account** - [Sign up here](https://aws.amazon.com/free/)
2. **AWS CLI** - [Installation guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
3. **AWS SAM CLI** - [Installation guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

### Steps:

1. **Configure AWS**
   ```bash
   aws configure
   ```

2. **Deploy Backend**
   ```bash
   sam build
   sam deploy --guided
   ```
   
   Follow the prompts (use default values or customize as needed).

3. **Copy API Endpoint**
   
   After deployment, copy the `ApiEndpoint` URL from the output.

4. **Configure Frontend**
   ```bash
   # Create .env file
   cp .env.example .env
   ```
   
   Edit `.env` and add your API endpoint:
   ```
   REACT_APP_API_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/recommend
   ```

5. **Install and Start Frontend**
   ```bash
   npm install
   npm start
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

7. **Deploy Frontend** to your preferred hosting:
   - AWS S3 + CloudFront
   - Vercel (easiest: `vercel --prod`)
   - Netlify (`netlify deploy --prod --dir=build`)
   - GitHub Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

---

## Project Structure

```
📁 family-guy-fav-episode/
├── 📁 src/                    # React frontend
│   ├── 📁 components/
│   │   ├── MoodSelector.js    # Mood selection UI
│   │   └── EpisodeCard.js     # Episode display
│   ├── App.js                 # Main app
│   └── index.js
├── 📁 lambda/                 # AWS Lambda backend
│   ├── index.js               # API handler
│   └── episodeData.js         # Episode database
├── 📄 template.yaml           # AWS SAM config
├── 📄 local-server.js         # Local API server
└── 📄 package.json
```

---

## Available Commands

```bash
# Development
npm run dev          # Start frontend + backend locally
npm start            # Start frontend only
npm run server       # Start backend API only

# Testing
npm run test-lambda  # Test Lambda function locally
npm test             # Run React tests

# Production
npm run build        # Build production frontend
sam build            # Build Lambda function
sam deploy           # Deploy to AWS
```

---

## How It Works

1. **User selects a mood** (Happy, Sad, Stressed, etc.)
2. **Frontend sends request** to API with mood parameter
3. **Lambda function filters episodes** based on mood tags
4. **Random episode selected** from matching episodes
5. **Episode details displayed** with title, description, quote, and reason

---

## Tech Stack

- **Frontend**: React 18, CSS3
- **Backend**: AWS Lambda (Node.js 18)
- **API**: AWS API Gateway
- **Infrastructure**: AWS SAM (CloudFormation)

---

## Moods Available

| Mood | Icon | Description |
|------|------|-------------|
| Happy | 😄 | Feel-good episodes with lots of laughs |
| Sad | 😢 | Emotional episodes for when you need comfort |
| Stressed | 😰 | Relaxing escapist episodes |
| Bored | 😴 | Highly entertaining episodes |
| Angry | 😠 | Cathartic episodes with chaotic energy |
| Excited | 🤩 | High-energy action-packed episodes |
| Nostalgic | 🥺 | Classic episodes with throwback moments |
| Surprise Me | 🎲 | Random episode recommendation |

---

## Troubleshooting

### "Cannot connect to API"
- Make sure local server is running: `npm run server`
- Check `.env` file has correct API URL
- Verify no firewall blocking port 3001

### "Module not found"
- Run `npm install` to install dependencies
- Delete `node_modules` and run `npm install` again

### AWS Deployment Issues
- Check AWS credentials: `aws configure list`
- Verify AWS SAM CLI is installed: `sam --version`
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed troubleshooting

---

## What's Next?

- ✅ Test the app locally
- ✅ Add more episodes to `lambda/episodeData.js`
- ✅ Customize the UI in `src/components/`
- ✅ Deploy to AWS
- ✅ Share with friends!

---

## Need Help?

Check out:
- [README.md](./README.md) - Complete documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- AWS SAM Documentation - https://docs.aws.amazon.com/serverless-application-model/

---

**Ready to find your perfect Family Guy episode? Let's go! 🎬**
