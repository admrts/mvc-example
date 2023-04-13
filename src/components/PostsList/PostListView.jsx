import SinglePost from "../SinglePost/SinglePost";

const PostListView = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <SinglePost title={post.title} body={post.body} key={post.id} />
      ))}
    </div>
  );
};

export default PostListView;
