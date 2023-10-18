//1.load all the url from redirects.yml


// yaml module object
const YAML = require('yaml') 


// fs stands for file system  object
const fs = require('fs') 


//require path
const path = require('path')

//reading our redirects.yml file by providing its path and using the fs filesystem
const redirectsFile = fs.readFileSync(path.join(__dirname,'redirects.yml'), 'utf-8')

//console.log(redirectsFile)
const redirects = YAML.parse(redirectsFile)
console.log(redirects)





//2.Create a html page for each redirect page from template.html

//reading our template.html file by providing its path and using the fs filesystem
const templateHTML = fs.readFileSync(path.join(__dirname,'template.html'), 'utf-8')


//3. loops through all url redirects nad generate their template pages
//to loop through a object in js library is this as mentioned down here where
// slug and url are variables used to loop in the object as key value pairs
for(let [slug,url] of Object.entries(redirects)){
    console.log('creating htl pages for each redirect', slug)
}