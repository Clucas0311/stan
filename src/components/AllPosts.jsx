import React from "react";
import SinglePost from "./SinglePost";

const AllPosts = (props) => {
  console.log("props in allposts", props.posts);
  return (
    <div>
      <h1>All Posts</h1>
      {props.posts.map((post) => {
        return <SinglePost key={post.id} post={post} />;
      })}
    </div>
  );
};

export default AllPosts;
