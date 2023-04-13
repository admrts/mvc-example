import axios from "axios";

const PostsListModel = {
  getPosts: async () => {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .catch((err) => err);
    return data;
  },
};

export default PostsListModel;
