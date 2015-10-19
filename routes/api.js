var express = require('express');
var router = express.Router();
var request = require('request');
var url = require('url');
var S = require('string');

router.get('/reddit/:search_string', function(req, res) {
  // var searchString = req.params.search_string;
  // var encodedText = encodeURIComponent(searchString);
  // var baseUrl = S(url.parse(searchString).host);
  // console.log("marker");
  // request('https://www.reddit.com/search.json?q=' + searchString, function(error, response, body) {

    // var result = JSON.parse(body);
    // var flattened = [];
    // if (result.constructor != Array) {
    //   result = [result];
    // }
    // for (i = 0; i < result.length; i++) {
    //   var children = result[i].data.children;
    //   for (j = 0; j < children.length; j++) {
    //     if (children[j].kind == "t3" && baseUrl.contains(children[j].data.domain)) {
    //         flattened.push(children[j]);
    //     }
    //   }
    // };
    // var redditRes = {};
    // redditRes["data"] = flattened;
    // console.log("marker 2");
    // res.json(redditRes);
    res.send(req.params.search_string);
  // });
  // res.send('hello');
});

module.exports = router;
