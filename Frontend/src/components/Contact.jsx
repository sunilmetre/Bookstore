import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    // max-w-screen-2xl container mx-auto md:px-20 px-4 py-14"
    <div className="max-w-screen-2xl container py-5">
      <div className="mt-32 flex  justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Contact US</h3>
          {/* email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[300px] md:w-[400px] px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* password */}
          <div className="mt-4">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[300px] md:w-[400px] px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Message */}
          <div className="mt-4">
            <span>Message</span>
            <br />
            <textarea
              placeholder="Enter your message"
              className="w-[300px] md:w-[400px] px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("message", { required: true })}
              rows="4"
            />
            <br />
            {errors.message && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* button */}
          <div>
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 my-8">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
