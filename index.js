const express = require('express');
const Twitter = require('twitter');

const apiKeys = require('.config/apiKeys');

const client = new Twitter({
  consumer_key: apiKeys.CONSUMER_KEY,
  consumer_secret: apiKeys.CONSUMER_SECRET,
  access_token_key: apiKeys.ACCESS_TOKEN_KEY,
  access_token_secret: apiKey.ACCESS_TOKEN_SECRET
});
 
const defaults = {
  screen_name: 'realDonaldTrump',
  tweet_mode: 'extended',
  count: 20,
};

const app = express();

app.route('/:handle')
  .get(function(req, res) {
    const params = {
      ...defaults,
      max_id: req.query.max_id,
      screen_name: req.params.handle,
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        res.json(tweets);
      } else {
        console.error(error)
      }
    });
  });

app.listen(3000, function(error) {
  console.log('Trump listening on port 3000');
});

