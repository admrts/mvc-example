import React from "react";

const SinglePost = ({ title, body }) => {
  return (
    <div>
      <h1 className="px-4 py-2 font-semibold text-lg bg-amber-300">{title}</h1>
      <p className="px-4 py-2 bg-red-300">{body}</p>
    </div>
  );
};

export default SinglePost;
