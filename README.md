# vue-google-oauth2-front-sample
> Sample project for [vue-google-oauth2](https://github.com/guruahn/vue-google-oauth2) plugin.
## Project setup

### 1. install
```
yarn install
```
### 2. set your google clientId in main.js
```javascript
Vue.use(GAuth, { clientId: '394838939483-rq7d2rfj39gkdfjd9jenu670ounoi01.apps.googleusercontent.com', scope: 'email', prompt: 'select_account', fetch_basic_profile: false })
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
