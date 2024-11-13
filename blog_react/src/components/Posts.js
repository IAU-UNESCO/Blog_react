import React from "react";

const Posts = () => {
  return (
    <div className="mt-3">
      {/* Post Image */}
      <img
        src="https://images.pexels.com/photos/3793689/pexels-photo-3793689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        // style={{ height: "400px", width: "750px" }}
        alt="Post Thumbnail"
        className="rounded-3 img-fluid"
      />

      {/* Post icons */}
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item me-2 me-lg-5" style={{ border: "none" }}>
          <i className="me-2 mb-1 bi bi-person-badge"></i>
          Publisher:
        </li>
        <li className="list-group-item me-2 me-lg-5" style={{ border: "none" }}>
          <i className="me-2 mb-1 bi bi-calendar-event"></i>
          Date:
        </li>
        <li className="list-group-item me-2 me-lg-5" style={{ border: "none" }}>
          <i className="me-2 mb-1 bi bi-chat-dots"></i>
          Comments:
        </li>
      </ul>

      {/* Post Title */}
      <h3 className="mt-3">Post Title: blah blah blah</h3>

      {/* Post Description */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent lietur adipiscing elit. Integer nec odio. Praesent
        libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nib Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
        nisi. Nulla quis sem at nib Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi. Nulla quis sem at nib Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem
        at nib
      </p>

      {/* Read more button */}
      <a href="#" class="btn btn-dark btn-lg" role="button">
        Read more
      </a>
    </div>
  );
};

export default Posts;
