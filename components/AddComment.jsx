import { CommentForm } from ".";

function AddComment({ id }) {
  return (
    <>
      <div className="w-full bg-slate-700 text-base-100 px-4 py-2">
        <h3>Add Comment</h3>
      </div>
      <p className="pt-2 px-2 text-sm text-gray-300">Comment politely</p>

      <CommentForm id={id} />
    </>
  );
}

export default AddComment;
