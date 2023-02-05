import React, { FunctionComponent, useReducer } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";

import { IContactUs } from "../types/interfaces";
import contactUsSchema from "../schemas/contactUsSchema";
import { motion } from "framer-motion";
import transitionToRight from "../animations/transition_to_right";
import transitionToLeft from "../animations/transition_to_left";
import transitionHorizontal from "../animations/transition_horizontal";

interface ContactUsFormProps {}

type MessageState = {
  isSending: boolean
	isMessageSent: boolean;
	error?: EmailJSResponseStatus;
};
type MessageAction = {
	type: "messageSent" | "error" | "sending";
	payload: EmailJSResponseStatus | null;
};

const ContactUsForm: FunctionComponent<ContactUsFormProps> = () => {
  const initialState:MessageState = { isSending: true, isMessageSent: false }
  const reducer = (state: MessageState, action: MessageAction):MessageState => {
    switch (action.type) {
      case "messageSent":
        return { ...state, isSending: false, isMessageSent: true };
        break;
      case "error":
        return { isSending: false, isMessageSent: false, error: action.payload as EmailJSResponseStatus };
        break;
      case "sending":
        return { ...state, isSending: true, isMessageSent: false };
        break;
      default:
        return state
        break;
  }
}
  const [{isMessageSent, isSending, error}, dispatchMessageEvent] = useReducer(reducer, initialState)

	const {
		register,
		watch,
		formState: { errors },
		reset,
	} = useForm<IContactUs>({
		resolver: yupResolver(contactUsSchema),
	});

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
    dispatchMessageEvent({type: "sending", payload: null})
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
				event.target as HTMLFormElement,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
			)
			.then(() => {
				dispatchMessageEvent({
					type: "messageSent",
					payload: null,
				});
				reset();
			})
			.catch((error: EmailJSResponseStatus) => {
				dispatchMessageEvent({ type: "error", payload: error });
			});
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
				<Image
					alt="Contact us"
					src="/img/contact_us_form.svg"
					layout="fill"
				/>
			</motion.div>
			<motion.form
      layout
				id="contact_form"
				className="flex flex-col w-full gap-6 rounded-lg lg:p-8 lg:bg-white lg:drop-shadow-md lg:backdrop-blur-xl basis-full lg:basis-1/2"
				onSubmit={handleSubmit}
				custom={180}
				variants={transitionToLeft}
			>
				{!isSending && isMessageSent &&
					<p className="-mb-4 text-primary body-medium">
						Thank you. Your message has been received
					</p>}
        {!isSending && !isMessageSent && error &&
					<p className="-mb-4 text-red-500 body-medium">
						Sorry, we are having problems sending your message. Please try again.
					</p>
				}
				<div className="w-full form-control">
					<label htmlFor="full_name" className="label">
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
					<label htmlFor="message" className="label">
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
							Characters: {150 - (watch("message")?.length || 0)}{" "}
							left
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
					<label htmlFor="message_sender" className="label">
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
