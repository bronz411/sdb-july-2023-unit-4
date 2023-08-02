console.log("it works from page2.js");

let queryString = window.location.search;
console.log(queryString);

let urlParams = new URLSearchParams(queryString);
