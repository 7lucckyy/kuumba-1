import React, { useEffect, useReducer } from "react";
import MailchimpSubscribe, {
	EmailFormFields,
	FormHooks,
} from "react-mailchimp-subscribe";
import { motion } from "framer-motion";

import transitionToLeft from "../animations/transition_to_left";
import { MailchimpFormProps } from "../types/mailchimp";

function CustomForm({ status, message, onValidated }: MailchimpFormProps) {
	const messageSent = status === "success";
	const [email, setEmail] = React.useState<string>("");
	
	useEffect( ()=> {messageSent && setEmail("")}, [messageSent])
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		email && onValidated({ EMAIL: email });
	};

	return (
		<>
			<motion.form
			onSubmit={handleSubmit}
				className="flex flex-wrap justify-center gap-6 mt-10"
				custom={360}
				variants={transitionToLeft}
			>
				<div className="w-full max-w-xs form-control">
					{messageSent ? 
					<p>{message as string}</p>
					:
					<input
						type="email"
						value={email}
						onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.currentTarget.value)}
						placeholder="Enter your email address"
						className="w-full max-w-xs custom-input !rounded-full !bg-base-100 text-base-content"
					/>
					}
						{status === "error" && <label className="label">
							<span className="label-text-alt text-error">
							Sorry, we could not confirm your subscription. Try Again.
							</span>
						</label>}
				</div>
				{!messageSent && 
				<button
				type="submit"
				className="bg-white border-white rounded-full hover:border-primary body-base btn text-primary hover:bg-primary hover:text-white"
				>
					{status === "sending" ? <span className="alert__sending">Processing</span>: <span>Subscribe</span>}
				</button>
				}
			</motion.form>
		</>
	);
}

function MailchimpForm() {
	const url = `${process.env.NEXT_PUBLIC_MAILCHIMP_URL}?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

	return (
		<MailchimpSubscribe
			url={url}
			render={({
				subscribe,
				status,
				message,
			}: FormHooks<EmailFormFields>) => (
				<CustomForm
					status={status}
					message={message}
					onValidated={(formData: EmailFormFields) =>
						subscribe(formData)
					}
				/>
			)}
		/>
	);
}

export default MailchimpForm;
