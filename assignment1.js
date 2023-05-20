/*********************************************************************************
*  WEB700 – Assignment1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: SANYA BANSAL Student ID: SBANSAL28 Date: 20 MAY,2023
*
********************************************************************************/ 

// Step3: Creating Server Paths
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by Sanya Bansal",
  "Sanya Bansal: sbansal28@myseneca.ca",
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];

//Step4: Creating the "web server simulator" Function - "httpRequest" 

function httpRequest(httpVerb, path) {
  for (let i = 0; i < serverVerbs.length; i++) {
    if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
      return `200: ${serverResponses[i]}`;
    }
  }
  return `404: Unable to process ${httpVerb} request for ${path}`;
}

//Step5: Manually Testing the "httpRequest" Function

console.log(httpRequest("GET", "/")); 
console.log(httpRequest("GET", "/about"));
console.log(httpRequest("PUT", "/")); 

//Step6: Automating the Tests by creating a "automateTests" Function

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function automateTests() {
  var testVerbs = ["GET", "POST"];
  var testPaths = [
    "/",
    "/about",
    "/contact",
    "/login",
    "/panel",
    "/logout",
    "/randomPath1",
    "/randomPath2"
  ];

  function randomRequest() {
    var randVerb = testVerbs[Math.floor(Math.random() * testVerbs.length)];
    var randPath = testPaths[Math.floor(Math.random() * testPaths.length)];

    var result = httpRequest(randVerb, randPath);
    console.log(result);
  }

  setInterval(randomRequest, 1000);
}
//Step7: Invoke the "automateTests" function
automateTests();









