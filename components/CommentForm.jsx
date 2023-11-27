"use client";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePostAsync,
  getPostDetail,
  addCommentAsync,
} from "@/store/postsSlice";
import { useEffect } from "react";
import StatusCode from "@/utils/StatusCode";

const commentSchema = Yup.object({
  user: Yup.string()
    .required("Please provide the user")
    .min(3, "Please give 3 characters long")
    .max(20, "User is too long, 20 characters are allowed"),
  comment: Yup.string()
    .required("Please provide the comment")
    .min(3, "Please give 3 characters long")
    .max(60, "Comment is too long, 60 characters are allowed"),
});

const PostForm = ({ id }) => {
  const router = useRouter();
  const currentDate = new Date();
  const dispatch = useDispatch();

  const { dataDetail: posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostDetail(id));
  }, []);

  if (status === StatusCode.LOADING) {
    return (
      <div className="w-3/5 mx-auto flex justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (status === StatusCode.ERROR) {
    return (
      <div className="flex  ">
        <div role="alert" className="alert alert-error w-3/5 mx-auto flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-white">
            Something went wrong! Try again later
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Formik
        initialValues={{
          user: "",
          comment: "",
          date: "",
        }}
        validationSchema={commentSchema}
        onSubmit={(values, { setSubmitting }) => {
          const commentData = {
            user: values.user,
            comment: values.comment,
            date: currentDate.toDateString(),
          };

          dispatch(addCommentAsync({ id, commentData }));

          setSubmitting(false);
          router.push(`/detail/${id}`);
        }}
      >
        {(props) => (
          <Form className="text-slate-700 flex flex-col gap-3 w-full px-8 mx-auto">
            <Field name="user">
              {({ field, form }) => (
                <div className="flex flex-col gap-1 w-full">
                  <label>user</label>
                  <input
                    className={
                      form.errors.user
                        ? `input input-bordered border-red-400 focus:border-red-400 focus:outline-red-400`
                        : `input input-bordered`
                    }
                    {...field}
                    placeholder="Enter the user..."
                    onChange={props.handleChange}
                  />
                  <p className="text-sm text-red-400">
                    {form.errors.user && form.touched.user && form.errors.user}
                  </p>
                </div>
              )}
            </Field>
            <Field name="comment">
              {({ field, form }) => (
                <div className="flex flex-col gap-1 w-full">
                  <label>comment</label>
                  <textarea
                    className={
                      form.errors.comment
                        ? `textarea textarea-bordered border-red-400 focus:border-red-400 focus:outline-red-400`
                        : `textarea textarea-bordered`
                    }
                    {...field}
                    placeholder="Enter the comment..."
                    onChange={props.handleChange}
                  />
                  <p className="text-sm text-red-400">
                    {form.errors.comment &&
                      form.touched.comment &&
                      form.errors.comment}
                  </p>
                </div>
              )}
            </Field>
            <button
              className="btn btn-accent text-base-100 w-20"
              type="submit"
              disabled={props.isSubmitting}
            >
              {props.isSubmitting ? (
                <span className="loading loading-spinner"></span>
              ) : (
                ""
              )}
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostForm;
