# *intrcptr*

A nodejs network request web crawler based on <a href="https://www.npmjs.com/package/puppeteer/v/1.11.0-next.1547527073587">puppeteer</a> . This basically allows you to sniff network request made by a website, grab all of that good data and save it nicely in a json <a href="file.json">file</a>.  

This basically allows you to trace requests made by a client such as in the program where we grab request data from the urls in <a href="urls.txt">urls</a>.  

The <a href="urls.txt">urls</a> were scraped using this <a href="https://www.github.com/dannywamuya/webscraper">webscraper</a>.

#### **Why <a href="https://radio.or.ke">that</a> site?**

They happen to stream all the radio station in Kenya and other countries and I happen to be interested in that. 

## *Requirements*
```
npm i puppeteer
```

## *Compile*
```
node app.js
```

#### **If you happen to be a nodejs dev**

Please bare with my spaghetti code and help me improve it. 