git init
git add .
git commit -m "upload"
git rm -r --cached "node_modules"

git commit -m 'Remove the now ignored directory node_modules'
git rm -r --cached "dist"

git commit -m 'Remove the now ignored directory dist'
git branch -M main
git remote add origin https://github.com/jasonglenevans/GGM2Comunity.git
git push -f origin main