// requiring dotenv file how else you gonna post comments ??? 
require('dotenv').config();

//bringing in those node libraries
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

// Build Snoowrap and Snoostorm clients
//this brings in the logins, api keys for the reddit bot account
const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
const client = new Snoostorm(r);

// these are the optiosn or streaming, you can stream all or just one subreddit
const streamOpts = {
    subreddit: 'testingground4bots',
    results: 25
};

// Create a Snoostorm CommentStream with the specified options
const comments = client.CommentStream(streamOpts);

// On comment, perform whatever logic you want to do
// declaring a variable on stream 
comments.on('comment', (comment) => {
    //if a comment contains the words 'I want to die'
    if (comment.body === 'I want to die') {
        //it will reply with this comment
        comment.reply('I do NOT want you to die because you are a beautiful, wonderful person. You are a gift to the world and I love you VERY MUCH!!!');
    }
});
