"use client";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const addPostSchema = Yup.object({
  title: Yup.string()
    .required("Please provide the title")
    .min(3, "Please give 3 characters long")
    .max(30, "Title is too long, 30 characters are allowed"),
  body: Yup.string()
    .required("Please provide the body")
    .min(3, "Please give 3 characters long")
    .max(60, "Body is too long, 60 characters are allowed"),
});

const AddPostForm = () => {
  const router = useRouter();
  const currentDate = new Date();
  // Pengaturan lokal bahasa Indonesia
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
    timeZone: "Asia/Jakarta", // Sesuaikan dengan zona waktu yang diinginkan
  };
  const formattedDate = currentDate.toLocaleDateString("id-ID", options);
  return (
    <div className="">
      <Formik
        initialValues={{
          title: "",
          body: "",
          date: "",
          image: "",
          comments: [],
        }}
        validationSchema={addPostSchema}
        onSubmit={(values, { setSubmitting }) => {
          fetch(" http://localhost:8800/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: values.title,
              body: values.body,
              date: formattedDate,
              image: "/blog.jpg",
              comments: [],
            }),
          });
          setTimeout(() => {
            setSubmitting(false);
          }, [800]);
          router.push("/");
        }}
      >
        {(props) => (
          <Form className="text-slate-700 flex flex-col gap-3">
            <Field name="title">
              {({ field, form }) => (
                <div className="flex flex-col gap-1">
                  <label>Title</label>
                  <input
                    className={
                      form.errors.title
                        ? `input input-bordered border-red-400 focus:border-red-400 focus:outline-red-400 w-full max-w-xs`
                        : `input input-bordered w-full max-w-xs`
                    }
                    {...field}
                    placeholder="Enter the title..."
                  />
                  <p className="text-sm text-red-400">
                    {form.errors.title &&
                      form.touched.title &&
                      form.errors.title}
                  </p>
                </div>
              )}
            </Field>
            <Field name="body">
              {({ field, form }) => (
                <div className="flex flex-col gap-1">
                  <label>Body</label>
                  <textarea
                    className={
                      form.errors.body
                        ? `textarea textarea-bordered border-red-400 focus:border-red-400 focus:outline-red-400 w-full max-w-xs`
                        : `textarea textarea-bordered w-full max-w-xs`
                    }
                    {...field}
                    placeholder="Enter the body..."
                  />
                  <p className="text-sm text-red-400">
                    {form.errors.body && form.touched.body && form.errors.body}
                  </p>
                </div>
              )}
            </Field>
            <button
              className="btn btn-accent text-base-100 w-full max-w-xs"
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

export default AddPostForm;
