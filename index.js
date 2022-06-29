/// ---------- SETUP ------- /////
// import the library
const express = require("express");
const characters = require("./characters.json");

// define a PORT for it run
const PORT = 4000;

// Create the server
const app = express();

/// ---------- END OF SETUP ------- /////

// ---- DEFINE THE ROUTES ----- ////

// Define our first route - endpoint
// GET + url
app.get("/hello", (request, response) => {
  console.log("I got a request!");
  console.log("what type of request is this?", request.method);
  response.send("hello to you! :)");
});

app.get("/firstCharacter", (request, response) => {
  console.log("I got a request for one character");
  const oneChar = characters[0];
  // response is to send data back
  response.send(oneChar);
});

app.get("/characters", (req, res) => {
  // send back the whole
  res.send(characters);
});

// Gives me the character with id === ???
// get - characters/10
app.get("/characters/:harryId", (req, res) => {
  const charId = req.params.harryId;
  console.log("the id the client picked is", charId);

  // charID === an id.
  const theCharacter = characters.find((c) => {
    return c.id === parseInt(charId);
  });

  console.log("did I find him?", theCharacter);

  res.send(theCharacter);
});

// ---- END ROUTES SECTION ----- ////

// Start the server
app.listen(PORT, () => console.log("server running on 4000"));
