import React from "react";

// This entire component is just a placeholder for now
const SideContent = () => {
  return (
    <div className="card mt-3">
      <img
        src="https://images.pexels.com/photos/28441129/pexels-photo-28441129/free-photo-of-scenic-snowy-mountain-bench-in-san-martino.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        className="card-img-top object-fit-cover"
        alt="..."
        style={{ height: "10rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default SideContent;
