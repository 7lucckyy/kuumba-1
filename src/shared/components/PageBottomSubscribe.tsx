import { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { INewsletter } from "../types/interfaces";
import newsletterSchema from "../schemas/newsletterSchema";

interface PageBottomSubscribeProps {}

const PageBottomSubscribe: FunctionComponent<PageBottomSubscribeProps> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<INewsletter>({
    resolver: yupResolver(newsletterSchema),
  });

  const onSubmit: SubmitHandler<INewsletter> = async (data) => {
    console.log(data);
  };

  return (
    <section className="bg-[#4169E1] horizontal-margin py-14 px-4 md:px-8 lg:px-12">
      <div className="w-full mx-auto text-center text-white md:w-4/5 xl:w-3/5">
        <h2 className="mb-4 font-medium header2">
          If you are interested in promoting lifelong reading and learning
        </h2>
        <p className="w-4/5 mx-auto md:w-3/5 header6">
          Are you an author, publisher or an agency? Get in touch with us at{" "}
          <span className="font-semibold">publish@kuumba.com</span>
        </p>
        <form
          className="flex flex-wrap justify-center gap-6 mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full max-w-xs form-control">
            <input
              type="text"
              placeholder="Enter your email address"
              className={`w-full max-w-xs custom-input !rounded-full !bg-base-100 text-base-content ${
                errors.email && "!border-error !border-2"
              }`}
              {...register("email")}
            />
            {errors.email?.message && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.email?.message}
                </span>
              </label>
            )}
          </div>
          <button
            type="submit"
            className="bg-white border-white rounded-full hover:border-primary body-base btn text-primary hover:bg-primary hover:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default PageBottomSubscribe;
