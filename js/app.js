// MORE PRACTICE EXAMPLES FROM ALEX

// A function that returns the middle element of the array

// Uncomment to test
var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];
//var arrayOfNumbers = [1, 2, 3, 4, 5, 6];

// Finding middle element of array
function findMiddle(arrayOfNumbers) {
    var divideTwo = Math.floor(arrayOfNumbers.length / 2);
    if(arrayOfNumbers.length % 2 === 0) {
        console.log("The middle elements of this array when the length is even is: " + arrayOfNumbers[divideTwo - 1] + ", " + arrayOfNumbers[divideTwo]);
    } else {
      console.log("The middle element of this array when the length is odd is: " + arrayOfNumbers[divideTwo]);
    }
}

// Calling function
findMiddle(arrayOfNumbers);



// Twitter examples

var userTwitter = [
  {
    tweet: "You need to GIT GUD",
    username: "@rainerb16",
    name: "Rainer",
    score: 9.5
  },
  {
    tweet: "HELLO?! Hooman, I want food! NOW!",
    username: "@meow",
    name: "Cylus",
    score: 8
  },
  {
    tweet: "HELLO?! I'm sleepy deepy.",
    username: "@brandelio",
    name: "Brandy",
    score: 10
  },
  {
    tweet: "ZEUS, stop it! You're going to get us in trouble!",
    username: "@ibeatzeus",
    name: "Cola",
    score: 4.5
  },
  {
    tweet: "Cola, stop tattling on me!",
    username: "@kingzeus",
    name: "Zeus",
    score: 3
  }
];

// Calculate average score of users
function calculateAvg(userArray) {
    var userSum = 0;
    for(var i = 0; i < userArray.length; i++) {
        userSum += userArray[i].score;
    }
    var userAvg = userSum / userArray.length;
    return userAvg;
}

// Calling function
var userAvgResult = calculateAvg(userTwitter);
console.log(userAvgResult);



// Function that return all "tweets" that contain a certain word
function tweetSearch(userTweets, word) {
    var matchTweets = [];
    for(var i = 0; i < userTweets.length; i++) {
        if(userTweets[i].tweet.includes(word)) {
            matchTweets.push(userTweets[i]);
        }
    }
    return matchTweets;
}

// Calling function
var tweetsFound = tweetSearch(userTwitter,"HELLO");
console.log(tweetsFound);