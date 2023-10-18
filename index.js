//1.load all the url from redirects.yml
// yaml module object
const YAML = require('yaml') 
// fs stands for file system  object
const fs = require('fs') 
//require path
const path = require('path')


const redirectsFile = fs.readFileSync(path.join(__dirname,'redirects.yml'), 'utf-8')

//console.log(redirectsFile)
const redirects = YAML.parse(redirectsFile)
console.log(redirects)
//2.Create a html page for each redirect page from template.html