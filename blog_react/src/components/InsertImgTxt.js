import React from "react";

const InsertImg = () => {
  return (
    <div className="my-3">
      <form>
        <div className="mb-2">
          <label for="formFile" className="form-label">
            Choose an image
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className="mb-2">
          <label for="txt" className="form-label">
            Text
          </label>
          <input type="text" className="form-control" id="inputText" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsertImg;
