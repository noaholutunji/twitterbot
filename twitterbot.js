require('dotenv').config();
const Twit = require('twit');

// Twitter API credentials
const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

const Tweet = new Twit(config);

function printHelloWorld() {
  Tweet.post('tweets', (err) => {
    if (!err) {
      console.log('Hello World!');
    } else {
      console.error('Error:', err);
    }
  });
}

printHelloWorld();
