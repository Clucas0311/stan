import React from "react";

const SinglePost = (props) => {
  console.log(props.post);
  return (
    <div>
      <h1>{props.post.location}</h1>
    </div>
  );
};

export default SinglePost;
