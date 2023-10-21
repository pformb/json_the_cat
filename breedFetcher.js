const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  // Construct the URL
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, _response, body) => {
    if (error) {
      // If there's an error, pass the error as the first argument
      // and null as the second argument to the callback
      callback(error, null);
    } else {
      // Parse the JSON response
      const data = JSON.parse(body);

      if (data[0]) {
        // If the breed is found, pass null as the first argument
        // and the description as the second argument to the callback
        callback(null, data[0].description);
      } else {
        // If the breed is not found, pass an error message as the first argument
        // and null as the second argument to the callback
        callback("Breed not found", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
