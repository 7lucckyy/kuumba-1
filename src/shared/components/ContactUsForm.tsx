import { FunctionComponent } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactUs } from "../types/interfaces";
import contactUsSchema from "../schemas/contactUsSchema";
import { motion } from "framer-motion";
import transitionToRight from "../animations/transition_to_right";
import transitionToLeft from "../animations/transition_to_left";
import transitionHorizontal from "../animations/transition_horizontal";

interface ContactUsFormProps {}

const ContactUsForm: FunctionComponent<ContactUsFormProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContactUs>({
    resolver: yupResolver(contactUsSchema),
  });

  const onSubmit: SubmitHandler<IContactUs> = async (data) => {
    console.log(data);
  };

  return (
    <motion.section
      id="contact-us"
      className="flex items-center lg:gap-20"
      variants={transitionHorizontal}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className="relative lg:basis-1/2 aspect-square"
        custom={180}
        variants={transitionToRight}
      >
        <Image alt="Contact us" src="/img/contact_us_form.svg" layout="fill" />
      </motion.div>
      <motion.form
        className="flex flex-col w-full gap-6 rounded-lg lg:p-8 lg:bg-white lg:drop-shadow-md lg:backdrop-blur-xl basis-full lg:basis-1/2"
        onSubmit={handleSubmit(onSubmit)}
        custom={180}
        variants={transitionToLeft}
      >
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Fullname</span>
          </label>
          <input
            type="text"
            placeholder="Enter name here"
            className={`w-full custom-input ${
              errors.full_name && "!border-error"
            }`}
            {...register("full_name")}
          />
          {errors.full_name?.message && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.full_name?.message}
              </span>
            </label>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Message for Kuumba</span>
          </label>
          <div className="relative inline-block">
            <textarea
              className={`w-full custom-textarea ${
                errors.message && "!border-error"
              }`}
              placeholder="Tell or ask us anything"
              {...register("message")}
              maxLength={150}
            ></textarea>
            <span className="absolute text-gray-400 bottom-2 right-2 small-base">
              Characters: {150 - (watch("message")?.length || 0)} left
            </span>
          </div>
          {errors.message?.message && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.message?.message}
              </span>
            </label>
          )}
        </div>

        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Message sender</span>
          </label>
          <select
            className={`w-full custom-select ${
              errors.message_sender && "!border-error"
            }`}
            defaultValue="reader"
            {...register("message_sender")}
          >
            <option value="reader">Reader</option>
            <option value="author">Author</option>
            <option value="publisher">Publisher</option>
          </select>
          {errors.message_sender?.message && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.message_sender?.message}
              </span>
            </label>
          )}
        </div>

        <button
          type="submit"
          className="px-8 normal-case btn btn-primary body-medium max-w-fit"
        >
          Submit
        </button>
      </motion.form>
    </motion.section>
  );
};

export default ContactUsForm;
