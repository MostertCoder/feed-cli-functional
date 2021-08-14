require('dotenv').config();

const printFeed = require('./functions/printFeed');
const getUsers = require('./functions/getUsers');
const getTweets = require('./functions/getTweets');

printFeed(getUsers(), getTweets());