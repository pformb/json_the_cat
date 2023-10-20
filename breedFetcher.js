const request = require("request");

breed = process.argv[2];
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, _response, body) => {
    if (error) {
      return console.log(error);
    }
    const data = JSON.parse(body);

    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log(`breed not found`);
    }
  }
);
