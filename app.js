const puppeteer = require('puppeteer');
const fs = require('fs');

let urls;

fs.readFile("./urls.txt", "UTF-8", (err, data) => {
    if (err) {
        console.log(err);
    } 
    urls = data.split("\n");
});

(async () => {
    
    const browser = await puppeteer.launch({
        devtools : true
    });

    const objs = [];

    console.log("started scraping...");

    for (let i = 0; i < urls.length; i++) {
        
        const page = await browser.newPage();
                
        await page.goto(urls[i], {
            waitUntil : 'load',
            timeout : 0 
        });
                
        page.on("response", (response) => {
            
            if (response._request._resourceType == 'media' && response._status == '200') {
                const obj = {
                    name : urls[i].slice(21),
                    status : response._status,
                    statusText : response._statusText,
                    headers : response._headers,
                    url : response._url
                }
                objs.push(obj);
            }
        });
        
        setTimeout(() => {
            page.close();
        }, 15000);        
    }

    fs.appendFileSync(  
        "file2.json",
        JSON.stringify(objs),
        "UTF-8",
        {'flags': 'a+'}
    );
        
    console.log(`done : added ${objs.length} urls`)
})();