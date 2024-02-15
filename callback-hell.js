/*
Callback hell, also known as the "pyramid of doom" or "callback spaghetti," refers to a situation in asynchronous JavaScript programming where multiple nested callbacks make the code difficult to read and maintain. This typically occurs when dealing with several asynchronous operations that depend on each other, resulting in deeply nested callback functions.
*/

function stepOne(callback) {
  setTimeout(() => {
    console.log("Step One completed");
    callback();
  }, 1000);
}

function stepTwo(callback) {
  setTimeout(() => {
    console.log("Step Two completed");
    callback();
  }, 1000);
}

function stepThree(callback) {
  setTimeout(() => {
    console.log("Step Three completed");
    callback();
  }, 1000);
}

// callback hell
stepOne(() => {
  stepTwo(() => {
    stepThree(() => {
      console.log("All steps completed");
    });
  });
});

function fetchUser(userId, callback) {
  // Simulating an asynchronous API request
  setTimeout(() => {
    const user = { id: userId, name: "John Doe" };
    callback(user);
  }, 1000);
}

function fetchPosts(userId, callback) {
  // Simulating an asynchronous API request
  setTimeout(() => {
    const posts = ["Post 1", "Post 2", "Post 3"];
    callback(posts);
  }, 1000);
}

function fetchComments(postId, callback) {
  // Simulating an asynchronous API request
  setTimeout(() => {
    const comments = ["Comment 1", "Comment 2", "Comment 3"];
    callback(comments);
  }, 1000);
}

// Callback hell
fetchUser(1, (user) => {
  console.log("User:", user);

  fetchPosts(user.id, (posts) => {
    console.log("Posts:", posts);

    fetchComments(posts[0], (comments) => {
      console.log("Comments:", comments);

      console.log("Data processing completed.");
    });
  });
});
