import React, { useState, useEffect } from 'react';

// Define a component called UserPosts that takes a user ID as input
const UserPosts = ({ userId }) => {
// Create a variable called 'posts' and a function to update it called 'setPosts'
// Initially, 'posts' is an empty list (like an empty to-do list)
  const [posts, setPosts] = useState([]);

// This special function runs when the component first appears and whenever the user ID changes
  useEffect(() => {
// Define a function to fetch data (like asking someone for information)
    const fetchData = async () => {
// Create a request to get posts for the specific user from an online source
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
       // Extract the information from the response (like opening a letter)
      const data = await response.json();
       // Update the 'posts' variable with the fetched information
      setPosts(data);
    };

    // Call the function to fetch data
    fetchData();

    // This tells the function to only run when the user ID changes
  }, [userId]);

    // This part displays the information on the screen
  return (
    <div>
    {/* Display a title showing the user ID */}
    <h2>Posts for User {userId}</h2>
    {/* Create an unordered list (like a bullet point list) */}
    <ul>
      {/* Go through each post in the 'posts' variable */}
      {posts.map((post) => (
        // Create a list item for each post with a unique key (like a name tag)
        <li key={post.id}>
          {/* Display the post title as a heading */}
          <h3>{post.title}</h3>
          {/* Display the post content as a paragraph */}
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </div>
);
};

export default UserPosts;