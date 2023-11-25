function Comments({ posts }) {
  const commentsTotal =
    posts && posts.comments && posts.comments.length && posts.comments.length;

  return (
    <>
      <div className="w-full bg-slate-700 text-base-100 px-4 py-2">
        <h3>Comments</h3>
      </div>
      <p className="pt-2 px-2 text-sm text-gray-300">
        {commentsTotal} komentar
      </p>
      {posts &&
        posts.comments &&
        posts.comments.map((item) => (
          <div key={item.id} className="flex flex-col p-2 ">
            <p className="text-xl font-bold">{item.user}</p>
            <p className="text-md">{item.comment}</p>
            <p className="text-sm text-gray-300 text-end">{item.date}</p>
            <div className="border-b border-gray-300 py-2"></div>
          </div>
        ))}
    </>
  );
}

export default Comments;
