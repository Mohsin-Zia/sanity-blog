type props = {
  posts: Post[];
};
const BlogList = ({ posts }: props) => {
  console.log("posts ==>", posts.length);
  return (
    <div>
      <hr className="border-[#F7AB0A]" />
      <div>
        {posts.map((post) => {
          return (
            <div>
              <div>mohsin</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
