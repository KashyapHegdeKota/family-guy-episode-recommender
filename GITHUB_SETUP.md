# GitHub Repository Setup Guide

## 🚀 Quick Setup

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Family Guy Episode Recommender full-stack app"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `family-guy-episode-recommender`
3. Description: "Full-stack serverless web app that recommends Family Guy episodes based on mood using React and AWS Lambda"
4. Choose: **Public** (so employers can see it!)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 3: Push to GitHub

```bash
# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/family-guy-episode-recommender.git
git branch -M main
git push -u origin main
```

---

## ✨ What Will Be on GitHub

Your repository will include:

### 📁 Project Structure
```
family-guy-episode-recommender/
├── src/                          ✅ Frontend React code
├── lambda/                       ✅ Backend Lambda functions
├── public/                       ✅ Static assets
├── template.yaml                 ✅ AWS infrastructure
├── README.md                     ✅ Project documentation
├── DEPLOYMENT.md                 ✅ Deployment guide
├── QUICKSTART.md                 ✅ Quick start guide
├── package.json                  ✅ Dependencies
├── local-server.js               ✅ Local dev server
└── .gitignore                    ✅ Git ignore rules
```

### 🔒 What's Protected (.gitignore)
- `node_modules/` - Dependencies (too large)
- `.env` - Environment variables (contains secrets)
- `build/` - Build output (generated)
- `.aws-sam/` - SAM build artifacts

---

## 🎨 Make Your GitHub Repo Stand Out

### Add a Great README Badge
Add these to the top of your README.md:

```markdown
# 🎬 Family Guy Episode Recommender

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![AWS Lambda](https://img.shields.io/badge/AWS-Lambda-orange?logo=amazon-aws)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)

> Full-stack serverless web application that recommends Family Guy episodes based on your mood
```

### Add Topics (Tags)
When on your GitHub repo page, add these topics:
- `react`
- `aws-lambda`
- `serverless`
- `full-stack`
- `nodejs`
- `javascript`
- `aws`
- `api-gateway`
- `cloud`

### Pin It to Your Profile
1. Go to your GitHub profile
2. Click "Customize your pins"
3. Select this repository
4. It will show up prominently on your profile!

---

## 📝 GitHub Repository Description

Use this for the "About" section on GitHub:

```
Full-stack serverless web app that recommends Family Guy episodes based on mood. Built with React, AWS Lambda, API Gateway, and deployed using AWS SAM.
```

**Website:** [Your deployed URL here]

---

## 🎯 For Your Resume/Portfolio

### GitHub URL Format:
```
https://github.com/YOUR-USERNAME/family-guy-episode-recommender
```

### What Recruiters Will See:
✅ Clean, organized code structure
✅ Both frontend and backend
✅ Infrastructure as Code (AWS SAM)
✅ Comprehensive documentation
✅ Professional Git commit history
✅ Modern tech stack

---

## 💡 Pro Tips

### Make Great Commits
Instead of one big commit, do:
```bash
git add src/
git commit -m "Add React frontend with mood selector and episode card components"

git add lambda/
git commit -m "Add Lambda backend with episode recommendation logic"

git add template.yaml
git commit -m "Add AWS SAM infrastructure template"
```

### Add a License
Create `LICENSE` file with MIT license:
```
MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

### Add Screenshots
1. Take screenshots of your app
2. Create `screenshots/` folder
3. Add images to README.md:
```markdown
## Screenshots

![Mood Selector](screenshots/mood-selector.png)
![Episode Recommendation](screenshots/episode-card.png)
```

---

## 🚀 After Pushing to GitHub

### Update Your Resume
Add the GitHub link:
```
GitHub: github.com/YOUR-USERNAME/family-guy-episode-recommender
```

### Share on LinkedIn
Post about your project:
```
🎉 Just completed a full-stack serverless project!

Built a mood-based episode recommender using React and AWS Lambda.

Key features:
✨ Serverless architecture
⚡ Sub-100ms response times
📱 Fully responsive design
☁️ Infrastructure as Code

Check it out: [GitHub URL]

#React #AWS #Serverless #FullStack #JavaScript
```

---

## ✅ Checklist Before Pushing

- [ ] Remove any sensitive data (API keys, secrets)
- [ ] `.env` is in `.gitignore`
- [ ] `node_modules/` is in `.gitignore`
- [ ] README.md is complete and professional
- [ ] Code is properly formatted
- [ ] All documentation files are included
- [ ] License file added (optional)

---

## 🎓 What This Shows Employers

By uploading the complete project, you demonstrate:

1. **Full-Stack Skills** - Frontend + Backend + Infrastructure
2. **Cloud Knowledge** - AWS services and serverless architecture
3. **DevOps** - Infrastructure as Code with AWS SAM
4. **Documentation** - Professional README and guides
5. **Best Practices** - Proper .gitignore, project structure, etc.
6. **Complete Thinking** - You understand the entire development lifecycle

---

## Quick Commands Reference

```bash
# Initialize and push to GitHub
git init
git add .
git commit -m "Initial commit: Full-stack episode recommender"
git remote add origin https://github.com/YOUR-USERNAME/family-guy-episode-recommender.git
git branch -M main
git push -u origin main

# Make updates later
git add .
git commit -m "Your commit message"
git push
```

---

**Remember:** Upload the ENTIRE project - it's way more impressive! 🌟
