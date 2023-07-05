const express = require("express");
const url = require("url");
const app = express();

app.get("/numbers", (req, res) => {
  var query = url.parse(req.url, true).query;
  console.log(query);
  const number = [];
  var result = [];
  //   const arr = Array.number;
  for (let i = 0; i < query.url.length; i++) {
    if (query.url[i].includes("primes")) {
      number.push(1, 2, 3, 5, 7, 11, 13, 17, 19);
    } else if (query.url[i].includes("fibo")) {
      number.push(1, 2, 3, 5, 8, 13, 21);
    } else if (query.url[i].includes("even")) {
      number.push(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);
    } else {
      number.push(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23);
    }
  }
  function removeDuplicates(number) {
    result = [...new Set(number)];
  }
  removeDuplicates(number);
  result.sort(function (a, b) {
    return a - b;
  });
  console.log(result);
  res.json(result);
});

app.listen(8008, () => {
  console.log("Server listening in port 8008");
});
