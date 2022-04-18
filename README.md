## For Heroku, do some settings in package.json

```
"scripts": {
  "start": "node ./server.js"  // Heroku default using start
},
"engines": {                   // setting engines version
  "node": "v16.x"
}
```

## Push to Heroku

```
heroku create // then login
git push herohu master
```
