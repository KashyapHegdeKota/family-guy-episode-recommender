# 🎬 Family Guy Episode Recommender - Command Cheat Sheet

## 📦 Installation

```bash
# Clone or navigate to project directory
cd family-guy-fav-episode

# Install all dependencies
npm install
```

---

## 🚀 Development Commands

### Start Everything (Recommended)
```bash
npm run dev
```
Starts both frontend (port 3000) and backend API (port 3001) simultaneously.

### Start Frontend Only
```bash
npm start
```
Opens React app at http://localhost:3000

### Start Backend API Only
```bash
npm run server
```
Starts local API server at http://localhost:3001

---

## 🧪 Testing Commands

### Test Lambda Function
```bash
npm run test-lambda
```
Tests all mood endpoints and shows sample responses.

### Test API Endpoint
```bash
# Test happy mood
curl "http://localhost:3001/recommend?mood=happy"

# Test random
curl "http://localhost:3001/recommend?mood=random"
```

### Run React Tests
```bash
npm test
```

---

## 🏗️ Build Commands

### Build Frontend
```bash
npm run build
```
Creates optimized production build in `/build` folder.

### Build Lambda (AWS SAM)
```bash
sam build
```
Prepares Lambda function for deployment.

---

## ☁️ AWS Deployment Commands

### Initial Setup
```bash
# Configure AWS credentials (one-time)
aws configure

# Verify configuration
aws sts get-caller-identity
```

### Deploy Backend
```bash
# First deployment (guided)
sam build
sam deploy --guided

# Subsequent deployments
sam build && sam deploy
```

### View Lambda Logs
```bash
sam logs -n EpisodeRecommenderFunction --stack-name family-guy-episode-recommender --tail
```

### Delete AWS Resources
```bash
sam delete --stack-name family-guy-episode-recommender
```

---

## 🌐 Frontend Deployment

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=build
```

### AWS S3
```bash
npm run build
aws s3 sync build/ s3://your-bucket-name --acl public-read
```

---

## 🔧 Configuration

### Update API Endpoint
```bash
# Edit .env file
REACT_APP_API_URL=https://your-api-gateway-url/prod/recommend
```

### Add New Episodes
Edit: `lambda/episodeData.js`

### Change UI Colors
Edit: `src/App.css`, `src/components/*.css`

---

## 📊 Project Structure Quick Reference

```
family-guy-fav-episode/
├── src/                    # React frontend
│   ├── components/        # UI components
│   ├── App.js            # Main app
│   └── index.js          # Entry point
├── lambda/                # AWS Lambda backend
│   ├── index.js          # API handler
│   └── episodeData.js    # Episode database
├── public/               # Static files
├── template.yaml         # AWS SAM config
├── local-server.js       # Local API server
└── package.json          # Dependencies
```

---

## 🎯 Available Moods

```
happy      😄  Feel-good episodes
sad        😢  Emotional comfort episodes
stressed   😰  Relaxing episodes
bored      😴  Highly entertaining
angry      😠  Cathartic chaos
excited    🤩  High-energy episodes
nostalgic  🥺  Classic throwbacks
random     🎲  Surprise me!
```

---

## 🐛 Common Issues & Solutions

### Port Already in Use
```bash
# Kill process on port
npx kill-port 3000
npx kill-port 3001
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### CORS Errors (AWS)
```bash
# Redeploy Lambda
sam build && sam deploy
```

### API Not Responding
```bash
# Check if server is running
curl http://localhost:3001/recommend?mood=happy

# Restart server
npm run server
```

---

## 📱 URLs

### Local Development
- Frontend: http://localhost:3000
- API: http://localhost:3001/recommend

### Production (after deployment)
- Frontend: Your hosting URL
- API: AWS API Gateway URL from `sam deploy` output

---

## 🎓 Quick Tips

1. **Always run `npm run dev`** for full local testing
2. **Test Lambda locally** before AWS deployment
3. **Update `.env`** after AWS deployment
4. **Check logs** if something doesn't work
5. **Read error messages** - they're usually helpful!

---

## 📚 Documentation Files

- **PROJECT_SUMMARY.md** - Complete overview (start here!)
- **QUICKSTART.md** - Get running in 5 minutes
- **DEPLOYMENT.md** - Detailed AWS deployment
- **README.md** - Full documentation

---

## 💡 Pro Tips

### Development Workflow
```bash
# 1. Make changes to code
# 2. Test locally
npm run dev

# 3. Test Lambda function
npm run test-lambda

# 4. Build for production
npm run build

# 5. Deploy
sam build && sam deploy
```

### Adding New Episodes
```javascript
// In lambda/episodeData.js
{
  season: X,
  episode: Y,
  title: "Episode Title",
  description: "What happens in this episode",
  mood: ["happy", "excited"],  // Add relevant moods
  rating: 8.5,
  memorable_quote: "Famous quote from episode",
  reason: "Why this episode fits the mood"
}
```

---

## 🎉 Ready to Go!

```bash
# Start everything in one command:
npm install && npm run dev
```

Then open http://localhost:3000 and enjoy! 🎬✨

---

**Need help? Check the other documentation files!**
