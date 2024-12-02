import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  // Initialize the state variable 'posts' with an empty array and provide a function 'setPosts' to update it
  const [posts, setPosts] = useState([]);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Define an asynchronous function to fetch posts from the API
    const fetchPosts = async () => {
      // Make a GET request to the specified API endpoint
      const response = await axios.get(
        "http://localhost:8080/BLOG_REACT/blog_react/api/fetch.php"
      );
      // Update the 'posts' state with the data received from the API response
      setPosts(response.data);
    };
    // Call the fetchPosts function to initiate the API request
    fetchPosts();
    // Empty dependency array means this effect runs only once after the initial render
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="mt-3">
          {/* Post Image */}
          {/* Since this app is running locally, we must use the path coming from `htdocs` or `www` to access the images */}
          <img
            src={`http://localhost:8080/BLOG_REACT/blog_react/api/${post.image_url}`}
            // style={{ height: "400px", width: "750px" }}
            alt={post.title}
            className="rounded-3 img-fluid"
          />
          {/* Post icons */}
          <ul className="list-group list-group-horizontal">
            <li
              className="list-group-item me-2 me-lg-5"
              style={{ border: "none" }}
            >
              <i className="me-2 mb-1 bi bi-person-badge"></i>
              Publisher:
            </li>
            <li
              className="list-group-item me-2 me-lg-5"
              style={{ border: "none" }}
            >
              <i className="me-2 mb-1 bi bi-calendar-event"></i>
              Date:
            </li>
            <li
              className="list-group-item me-2 me-lg-5"
              style={{ border: "none" }}
            >
              <i className="me-2 mb-1 bi bi-chat-dots"></i>
              Comments:
            </li>
          </ul>
          {/* Post Title */}
          <h3 className="mt-3">{post.title}</h3>
          {/* Post Description */}
          <p>{post.content}</p>
          {/* Read more button */}
          <a href="#" className="btn btn-dark btn-lg" role="button">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default Posts;
