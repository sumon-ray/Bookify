# Step 1: Switch to development branch
git checkout development

# Step 2: Pull the latest changes from development branch
git pull origin development

# Step 3: Create a new branch for your feature/task
git checkout -b new-feature

# Step 4: Make changes, then add and commit them
git add .
git commit -m "Added new feature"

# Step 5: Periodically merge development branch into your feature branch
git checkout development
git pull origin development
git checkout new-feature
git merge development

# Step 6: Push your feature branch to remote repository
git push origin new-feature

# Step 7: Open a pull request from new-feature to development branch on GitHub



##Consideration 📍 

DO NOT TOUCH MAIN BRANCH🌿 
1. Always pull the code from development branch before start your working.
2. Do not push directly on the main branch. 

##WHY IT NEEDS❓

It is safer for us to prevent any accidental conflicts


## For Now Use This Components Library
1. https://mambaui.com/components/breadcrumb
2. https://merakiui.com/components/application-ui/buttons
3. https://flowbite-react.com/docs/guides/next-js 

## Ignore

1. Daisy Ui
