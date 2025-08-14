# 1️⃣ Initialize Git (only if not already a git repo)

git init

# 2️⃣ Remove any existing remote link

git remote remove origin

# 3️⃣ Add the new GitHub repository URL

git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 4️⃣ Restore deleted files if Git shows them as removed

git restore .

# 5️⃣ Stage all files for commit

git add .

# 6️⃣ Commit with a meaningful message

git commit -m "Initial commit - Added frontend and backend code"

# 7️⃣ Rename default branch to main

git branch -M main

# 8️⃣ Push code to GitHub

git push -u origin main

# Ignore node_modules for both projects

backend/node_modules/
frontend/node_modules/

# Ignore build/dist files

backend/dist/
frontend/dist/

# Logs

\*.log
