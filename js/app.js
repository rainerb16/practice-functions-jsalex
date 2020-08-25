// MORE PRACTICE EXAMPLES FROM ALEX
//- A function that returns the middle element of an array. DONE
//- A function that calculates the average of an array of user scores. DONE
//- A function that will return all "tweets" that contain a word (meaning the function takes in an array of tweets and the word to search for). This one is actually pretty real world as it does what a real search function on a website does.



// A function that returns the middle element of the array

// Array to test ODD
var array = [1, 3, 2, 7, 4, 6, 10, 11, 12];

// Array to test EVEN
//var array = [1, 2, 3, 4, 5, 6];

// Finding middle element of array
function findMiddle(array) {
    var divideTwo = Math.floor(array.length / 2);
    if(array.length % 2 === 0) {
        console.log("The middle element of this array when the length is even is: " + array[divideTwo - 1] + ", " + array[divideTwo]);
    } else {
      console.log("The middle element of this array when the length is odd is: " + array[divideTwo]);
    }
}

// Calling function
findMiddle(array);

