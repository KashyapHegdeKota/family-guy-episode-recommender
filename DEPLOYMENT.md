# Deployment Guide

## Prerequisites Checklist

- [ ] AWS Account created
- [ ] AWS CLI installed and configured
- [ ] AWS SAM CLI installed
- [ ] Node.js 16+ installed
- [ ] Git installed (optional)

## Step-by-Step Deployment

### 1. Configure AWS CLI

```bash
aws configureaw
```

Enter your:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., us-east-1)
- Default output format (json)

### 2. Deploy Backend (Lambda + API Gateway)

```bash
# From project root
cd family-guy-fav-episode

# Build SAM application
sam build

# Deploy with guided setup
sam deploy --guided
```

**Configuration prompts:**
- Stack Name: `family-guy-episode-recommender`
- AWS Region: `us-east-1` (or your preferred region)
- Confirm changes before deploy: `Y`
- Allow SAM CLI IAM role creation: `Y`
- Disable rollback: `N`
- EpisodeRecommenderFunction may not have authorization defined: `Y`
- Save arguments to samconfig.toml: `Y`
- SAM configuration file: `samconfig.toml`
- SAM configuration environment: `default`

**Wait for deployment to complete (2-3 minutes)**

### 3. Get API Endpoint

After deployment, look for the output:

```
Outputs
-------------------------------------------------------------------------
Key                 ApiEndpoint
Description         API Gateway endpoint URL
Value               https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/prod/recommend
```

Copy this URL!

### 4. Test API Endpoint

```bash
# Test with curl (replace with your URL)
curl "https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/recommend?mood=happy"
```

You should get a JSON response with an episode recommendation.

### 5. Configure Frontend

```bash
# Create .env file
cp .env.example .env

# Edit .env and add your API URL
REACT_APP_API_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/recommend
```

### 6. Test Frontend Locally

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open http://localhost:3000 and test the app!

### 7. Deploy Frontend

#### Option A: AWS S3 + CloudFront

```bash
# Build production version
npm run build

# Create S3 bucket
aws s3 mb s3://family-guy-episode-recommender

# Upload build files
aws s3 sync build/ s3://family-guy-episode-recommender --acl public-read

# Enable static website hosting
aws s3 website s3://family-guy-episode-recommender --index-document index.html
```

#### Option B: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Option C: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=build
```

## Monitoring

### View Lambda Logs

```bash
sam logs -n EpisodeRecommenderFunction --stack-name family-guy-episode-recommender --tail
```

### AWS Console

1. Go to AWS Lambda Console
2. Find `family-guy-episode-recommender` function
3. Click "Monitor" tab to view metrics and logs

## Updating the Application

### Update Lambda Function

```bash
# Make changes to lambda/index.js or lambda/episodeData.js
# Then rebuild and deploy
sam build
sam deploy
```

### Update Frontend

```bash
# Make changes to React code
# Rebuild
npm run build

# Redeploy to your hosting service
```

## Cleanup (Delete All Resources)

```bash
# Delete CloudFormation stack
sam delete --stack-name family-guy-episode-recommender

# This will remove:
# - Lambda function
# - API Gateway
# - CloudWatch Logs
# - IAM roles
```

## Troubleshooting

### CORS Issues

If you get CORS errors in the browser console:
1. Check that your API Gateway has CORS enabled
2. Verify the Lambda function includes CORS headers
3. Redeploy with `sam deploy`

### API Not Responding

1. Check Lambda logs: `sam logs -n EpisodeRecommenderFunction --tail`
2. Test Lambda directly in AWS Console
3. Verify API Gateway configuration

### Frontend Can't Connect

1. Verify REACT_APP_API_URL in .env file
2. Check browser console for errors
3. Test API endpoint with curl
4. Rebuild frontend: `npm run build`

## Cost Estimate

**Free Tier (First 12 months):**
- Lambda: 1M requests/month free
- API Gateway: 1M requests/month free
- CloudWatch Logs: 5GB free

**Beyond Free Tier:**
- Lambda: $0.20 per 1M requests
- API Gateway: $1.00 per 1M requests
- **Estimated cost for 10K requests/month: ~$0.01**

This app should cost almost nothing to run! 💰
