1-Create a New Branch
You can create a new branch and switch to it by running:

git checkout -b feature/ticket-id-short-task-name
Please replace ticket-id with your actual ticket ID from Clickup in lower case and without any spaces. Please replace short-task-name with a title that is related to your ticket's title. Please keep this short and lower case without any spaces as well.

2-Do the work needed
Now, simply start working on the code changes or any other changes related to the project.

3-Push the changes to github
Run git status -> git add * -> git commit -m "a message" -> git push. If we are pushing the new branch for the first time, git will show a command to create an upstream branch. Run that command.

4-If needed make more changes
We can still keep updating the project files and once the application is working, we can again do:

git status -> git add * -> git commit -m "a message" -> git push

5- Create a PR (Pull Request)
Once the work is done and pushed, we can goto github and create a Pull Request for our branch 86ermm50c-generate-pattern

6- Get it approved
Request the team members to review the code and give you approvals

7- Merge the changes back to the main branch
Once we get 3 approvals, we can simply select Squash as a merge strategy and then click the Merge button on github.
