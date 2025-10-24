# Alternative Deployment Script (No SAM CLI Required)
# This script uses AWS CLI to deploy the Lambda function directly

Write-Host "🚀 Deploying Family Guy Episode Recommender to AWS..." -ForegroundColor Cyan
Write-Host ""

# Configuration
$FUNCTION_NAME = "family-guy-episode-recommender"
$REGION = "us-east-1"
$ROLE_NAME = "family-guy-lambda-role"

# Step 1: Create IAM Role for Lambda
Write-Host "📝 Step 1: Creating IAM Role..." -ForegroundColor Yellow

$TRUST_POLICY = @"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
"@

$TRUST_POLICY | Out-File -FilePath "trust-policy.json" -Encoding utf8

try {
    aws iam create-role --role-name $ROLE_NAME --assume-role-policy-document file://trust-policy.json --region $REGION 2>$null
    Write-Host "✅ IAM Role created" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Role might already exist, continuing..." -ForegroundColor Yellow
}

# Attach basic Lambda execution policy
aws iam attach-role-policy --role-name $ROLE_NAME --policy-arn "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole" --region $REGION

Start-Sleep -Seconds 5

# Step 2: Package Lambda function
Write-Host ""
Write-Host "📦 Step 2: Packaging Lambda function..." -ForegroundColor Yellow

# Create deployment package
if (Test-Path "lambda-deploy.zip") {
    Remove-Item "lambda-deploy.zip"
}

Compress-Archive -Path "lambda\*" -DestinationPath "lambda-deploy.zip" -Force
Write-Host "✅ Package created" -ForegroundColor Green

# Step 3: Get Account ID
Write-Host ""
Write-Host "🔍 Step 3: Getting AWS Account ID..." -ForegroundColor Yellow
$ACCOUNT_ID = (aws sts get-caller-identity --query Account --output text)
$ROLE_ARN = "arn:aws:iam::${ACCOUNT_ID}:role/${ROLE_NAME}"
Write-Host "✅ Account ID: $ACCOUNT_ID" -ForegroundColor Green

# Step 4: Create or Update Lambda function
Write-Host ""
Write-Host "⚡ Step 4: Deploying Lambda function..." -ForegroundColor Yellow

$FUNCTION_EXISTS = aws lambda get-function --function-name $FUNCTION_NAME --region $REGION 2>$null

if ($FUNCTION_EXISTS) {
    Write-Host "Updating existing function..." -ForegroundColor Cyan
    aws lambda update-function-code `
        --function-name $FUNCTION_NAME `
        --zip-file fileb://lambda-deploy.zip `
        --region $REGION
} else {
    Write-Host "Creating new function..." -ForegroundColor Cyan
    aws lambda create-function `
        --function-name $FUNCTION_NAME `
        --runtime nodejs18.x `
        --role $ROLE_ARN `
        --handler index.handler `
        --zip-file fileb://lambda-deploy.zip `
        --timeout 10 `
        --memory-size 256 `
        --region $REGION
}

Write-Host "✅ Lambda function deployed" -ForegroundColor Green

# Step 5: Create API Gateway (REST API)
Write-Host ""
Write-Host "🌐 Step 5: Setting up API Gateway..." -ForegroundColor Yellow

# This part requires more complex setup
Write-Host "⚠️  API Gateway setup requires manual configuration or SAM CLI" -ForegroundColor Yellow
Write-Host ""
Write-Host "📋 Manual Steps:" -ForegroundColor Cyan
Write-Host "1. Go to AWS Console > API Gateway"
Write-Host "2. Create a new REST API"
Write-Host "3. Create a resource '/recommend'"
Write-Host "4. Create a GET method"
Write-Host "5. Integrate with Lambda function: $FUNCTION_NAME"
Write-Host "6. Enable CORS"
Write-Host "7. Deploy API to 'prod' stage"
Write-Host ""
Write-Host "OR install SAM CLI for automated setup:" -ForegroundColor Cyan
Write-Host "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html"

# Cleanup
Remove-Item "trust-policy.json" -ErrorAction SilentlyContinue
Remove-Item "lambda-deploy.zip" -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "✨ Deployment script completed!" -ForegroundColor Green
Write-Host ""
Write-Host "Next: Test your Lambda function in AWS Console" -ForegroundColor Cyan
