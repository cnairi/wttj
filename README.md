# Node version

If you're using nvm to handle your node versions, just run "nvm use" at the root of our project. Or just check the node version in .nvmrc [v14.16.0] and be sure to use it before installing our project.

# Run project locally

Be sure to use the right version of node, then run "yarn start" at the root of the project.

# Aliases

# https://github.com/storybookjs/storybook/issues/7205#issuecomment-507811588

In order to have aliases working on Storybook, tests files and src files, please read this carefully. As we did'nt want to eject cra, we use create-react-app-rewired. We had difficulties launching storybook with our new aliases and found the provided linked solution. First, add your alias to config-overrides.js in the root directory. Then, create another line in jsconfig.json (root). For testing, make sure to add the corresponding line in our package.json. Finally, add the alias to .storybook/webpack.config.js

# ESLint & Prettier rules

We have decided to use wttj config front for our project. For more info go to https://github.com/WTTJ/wttj-config-front, check .eslintrc.js and prettier.config.js.

# Translations

We have implemented i18n on our project. For now, only EN and FR versions are available.

# Commit & Push

Husky is implemented to automatize pre-commit hooks checks. Troubleshooting on install : git config --unset core.hookspath (https://github.com/typicode/husky/issues/435#issuecomment-450192796)

# Deployment and build

https://wttj-camille-nairi.herokuapp.com/ We used Heroku to deploy our app. Our app is connected to Github and to our wttj repo. Automatic deploys from main are enabled.

# Testing

You can run yarn test to execute our tests range. We have decided to use react-testing-library. Also, you can run yarn test:updateSnapshot to update all the app Snapshots after updating a component, and making sure that you are not triggering regressions all over the app. A Storybook documents this app too. Make sure to update it anytime your decide to change a component.

# Filters for your job research

You can enter keywords for your research in the "Your dream job?" field. It will search them in the job name, description and profile. Also, your keywords will be highlighted in text content. You could also select contract type, pick a published after date, as well as group jobs by department name or office name.

# Responsive

Our website is responsive. We did our best to offer the same quality on mobile, tablet & desktop.

# V2 is coming !

Here is what we are planning for our new release :

- a11y is not perfect yet. We're optimizing it for our next release.
- ES, CS and SK locales will be implemented, as is the case on the WTTJ website.
- A Storybook documents this project, but we will complete it with all components for the V2.
- Improve testing by implementing Cypress and complete tests for react testing library. Objective: 100% quality coverage!
- Save search option for user : either by adding params to our url, or with redux-persist.

# Users feedbacks

"After clicking on "see more" for one job, I tried to exit the modale by using the native go back button of my brower (Safari). It did not work". -> As users will try to do so, we offer to implement routing on our app. The modale will become a new page, and the user will be able to go back using native browser button.
