# cmpt-732-project-website

NodeJS Version: v18.12.1

Demo website

https://www.epicbyte.ca/


Installation

For team, if you do not have nodeJS install, you can refer this link for installation:
https://github.com/nvm-sh/nvm

1. NVM is Node Version Manager that allows you to install multiple version of nodeJS in your environment. Follow the instruction you should be able to install Node V18
```bash
# (for install node v18)
nvm install v18

# (for switching between node version)
nvm use v18

# (make sure you have your node v18 installed probably)
node --version
```

2. Install package dependency
```bash
npm update
```

3. create a config.js, here is the format, please put your host, user and passpowrd accordingly
```js
const config = {
    "MYSQL" : {
        "HOST" : "127.0.0.1",
        "USER" : "root",
        "PASSWORD" : "",
        "DATABASE" : "project"
    },
    "SSL" : {
        "ENABLED" : false,
        "KEYPATH" : "abc.pem",
        "CERTPATH" : "abc.pem"
  }
};

module.exports = config;
```

4. Start the server in project directory
```bash
node app.js

# or if you don't want to rerun your server everyone you have change you can do

npm install -g nodemon
nodemon app.js
```
------

Attributes:

Website background Images
https://www.cnn.com/2018/02/27/americas/los-angeles-traffic/index.html

DatePicker
https://www.eyecon.ro/bootstrap-datepicker/

Image by Freepik
https://www.freepik.com/free-photo/safety-first-sign-outdoors_34654166.htm#query=safety%20first%20sign&position=2&from_view=keyword

Image by unsplash
https://unsplash.com/photos/n6B49lTx7NM

Image by analyticsinsight.net
https://www.analyticsinsight.net/wp-content/uploads/2021/03/Data-Analytics.jpg

Image by iknowfirst.com
https://iknowfirst.com/iwf-iwd-stock-forecast-for-2022-growth-vs-value-in-the-pandemic-realities

Chart Vectors by Vecteezy
https://www.vecteezy.com/free-vector/chart