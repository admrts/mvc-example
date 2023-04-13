import React, { useState, useEffect } from "react";
import axios from "axios";
import PostListView from "./PostListView";
import PostsListModel from "./PostsListModel";

const PostsListController = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostsListModel.getPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  return <PostListView posts={posts} />;
};

export default PostsListController;
