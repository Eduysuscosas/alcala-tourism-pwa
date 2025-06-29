# Visual Guide to GitHub Pages Deployment

## 1. Create a New GitHub Repository

![Create Repository](https://raw.githubusercontent.com/github/docs/main/assets/images/help/repository/repo-create.png)

1. Visit [GitHub](https://github.com/) and sign in to your account
2. Click on the '+' icon in the top-right corner and select 'New repository'
3. Name your repository (e.g., `alcala-tourism-pwa`)
4. Add a description (optional)
5. Choose 'Public' visibility
6. Click 'Create repository'

## 2. Upload Your Project

### Option A: Using Git Command Line

```bash
# Navigate to your project directory
cd path/to/alcala-tourism-pwa

# Initialize a git repository
git init

# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/alcala-tourism-pwa.git

# Push to GitHub
git push -u origin main
```

### Option B: Upload Using GitHub Web Interface

![Upload Files](https://raw.githubusercontent.com/github/docs/main/assets/images/help/repository/upload-files-button.png)

1. Navigate to your new repository on GitHub
2. Click on 'Add file' > 'Upload files'
3. Drag and drop your project files or select them using the file picker
4. Add a commit message
5. Click 'Commit changes'

## 3. Configure GitHub Pages

![GitHub Pages Settings](https://raw.githubusercontent.com/github/docs/main/assets/images/help/pages/source-button.png)

1. In your repository, go to 'Settings'
2. In the left sidebar, click on 'Pages'
3. Under 'Build and deployment' > 'Source', select 'GitHub Actions'
4. GitHub will automatically detect your workflow file (.github/workflows/deploy.yml)

## 4. Verify Deployment

1. Go to the 'Actions' tab in your repository
2. You should see your workflow running or completed
3. Once completed, visit your site at: `https://YOUR-USERNAME.github.io/alcala-tourism-pwa/`

## 5. Updating Your Site

Any time you push new changes to the main branch, GitHub Actions will automatically rebuild and deploy your site.

```bash
# Make changes to your local files

# Add and commit your changes
git add .
git commit -m "Update site content"

# Push to GitHub
git push
```

After a few minutes, your changes will be live on your GitHub Pages site.