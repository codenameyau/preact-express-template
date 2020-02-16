# web-reg

## CLI Commands

Getting Started

```bash
# Copy env file then copy paste env variables.
cp env/local.env .env

# install dependencies
yarn install

# Spin up dev server.
yarn start
```

## Deployment

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

## Differences from web app
- No more CORS, all requests are proxied through our node server.
- Watch mode is enabled on our node server.
- Eslint, prettier, imagemin is run on lint staged on every commit.
