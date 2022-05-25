const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)

console.log(myUrl.host);

// host name (does not get host)
console.log("without port :", myUrl.hostname)


// pathneme

console.log(myUrl.pathname)

// serialized query

console.log(myUrl.search)

// prams object
console.log(myUrl.searchParams)

// add pram

myUrl.searchParams.append('abc', '123')

console.log(myUrl.searchParams)

// Lop through prams

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
