# Node version

If you're using nvm to handle your node versions, just run "nvm use" at the root of our project. Or just check the node version in .nvmrc [v14.16.0] and be sure to use it before installing our project.

# Run project locally

Be sure to use the right version of node, then run "yarn start" at the root of the project.

# Filters for your job research

You can enter keywords for your research in the "Your dream job?" field. It will search them in the job name, description and profile. Also, your keywords will be highlighted in text content. You could also select contract type, pick a published after date, as well as group jobs by department name or office name.

# ESLint & Prettier rules

We have decided to use wttj config front for our project. For more info go to https://github.com/WTTJ/wttj-config-front, check .eslintrc.js and prettier.config.js.

# Translations

We have implemented i18n on our project. For now, only EN and FR versions are available.

# Responsiveness

Our website is responsive. We did our best to offer the same quality on mobile, tablet & desktop.

# Deployment and build

https://wttj-camille-nairi.herokuapp.com/ We used Heroku to deploy our app. Our app is connected to Github and to our wttj repo. Automatic deploys from main are enabled.

# V2 is coming !

Here is what we are planning for our new release :

- a11y is not perfect yet. We're optimizing it for our next release.
- ES, CS and SK locales would be implemented, as is the case on the WTTJ website.
- Implementation of storybook to help other developers to use our components.
- Improve testing by implementing Cypress.
- Save

# Users feedbacks

"After clicking on "see more" for one job, I tried to exit the modale by using the native go back button of my brower (Safari). It did not work". -> As users will try to do so, we offer to implement routing on our app. The modale will become a new page, and the user will be able to go back using native browser button.
