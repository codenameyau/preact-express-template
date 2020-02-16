# web-reg

### Features
- Watch mode and hot module reloading for Preact application.
- Watch mode for our node Express server.
- Preact application comes with styled-components, storybook, enzyme tests.
- Express server comes with proxy, middleware, logging.
- Workflow: Prettier, eslint, imagemin is run on every commit.
- ES7 support with import statements on both client app and server.
- Project is setup for heroku deployment.

## CLI Commands

#### Getting Started

```bash
# Copy env file then copy paste env variables.
cp env/local.env .env

# install dependencies
yarn install

# Spin up dev server.
yarn start
```

#### Other Commands
```bash
# Run unit tests with Jest and Enzyme.
yarn test

# Analyze bundle size.
yarn analyze

# Build and run production app.
yarn production
```
