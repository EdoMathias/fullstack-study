SIMPLE GIT PROCESS

- Make sure you have Git installed on your machine and are in the project directory.
- Open your terminal or command prompt and navigate to the project directory.
- Check out the branch you want to base your new branch on. Typically, this is the main branch:
1. `git checkout main`

- Pull the latest changes from the remote main branch to ensure you have the most up-to-date code:
2. `git pull origin main`

- Create a new branch based on the main branch. 
Choose a descriptive name for your branch that reflects the changes you're making:
3. `git checkout -b new-branch`

- Make the necessary changes to your project files.
- Add the changed files to the staging area. This prepares them for the commit:
4. `git add .`

- Commit the changes to your new branch along with a meaningful commit message:
5. `git commit -m "Your commit message here"`

- Push the new branch to the remote repository:
6. `git push origin new-branch`

- Optionally, if you want to merge the changes from your new branch to the main branch,
you can create a pull request and follow the necessary steps to merge the changes.
- Once the changes are merged, you can update your local main branch by checking 
it out and pulling the latest changes:
9. `git checkout main`
10. `git pull origin main`
